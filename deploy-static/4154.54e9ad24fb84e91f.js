"use strict";
(self["webpackChunkgauzy"] = self["webpackChunkgauzy"] || []).push([[4154],{

/***/ 7236:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ EditUserProfileComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(73014);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(64411);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9620);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(72781);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73246);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(36950);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(19223);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(23423);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(13271);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(57044);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(36042);
/* harmony import */ var _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38546);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(56383);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(14572);
/* harmony import */ var _packages_ui_core_shared_src_lib_components_back_navigation_back_navigation_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(90910);
















function EditUserProfileComponent_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", ctx_r0.user.name, " ");
  }
}
function EditUserProfileComponent_span_7_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainer"] */ .eu8(0);
  }
}
function EditUserProfileComponent_span_7_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(0);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" (", ctx_r0.user.username, ") ");
  }
}
function EditUserProfileComponent_span_7_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(0);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" '", ctx_r0.user.username, "' ");
  }
}
function EditUserProfileComponent_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, EditUserProfileComponent_span_7_ng_container_1_Template, 1, 0, "ng-container", 6)(2, EditUserProfileComponent_span_7_ng_template_2_Template, 1, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplateRefExtractor"] */ .C5r)(4, EditUserProfileComponent_span_7_ng_template_4_Template, 1, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplateRefExtractor"] */ .C5r);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const withBraces_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(3);
    const withQuotes_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(5);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r0.user == null ? null : ctx_r0.user.username)("ngIfThen", withBraces_r2)("ngIfElse", withQuotes_r3);
  }
}
let EditUserProfileComponent = class EditUserProfileComponent extends _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_1__/* .TranslationBaseComponent */ .K {
  constructor(route, router, translateService, usersService, authService) {
    super(translateService);
    this.route = route;
    this.router = router;
    this.translateService = translateService;
    this.usersService = usersService;
    this.authService = authService;
  }
  ngOnInit() {
    this.route.params.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__/* .filter */ .p)(params => !!params), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__/* .tap */ .M)(params => this.params = params), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__/* .tap */ .M)(() => this.registerPageTabs()), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__/* .tap */ .M)(() => this.getUserProfile()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .untilDestroyed */ .s)(this)).subscribe();
  }
  ngAfterViewInit() {
    this._applyTranslationOnTabs();
  }
  /**
   * Generates the route for a given tab based on the current user ID.
   *
   * @param tab - The tab name to append to the route.
   * @returns The full route string.
   */
  getRoute(tab = '') {
    if (!this.params?.id) {
      return `/pages/users`;
    }
    return `/pages/users/edit/${this.params?.id}/${tab}`;
  }
  /**
   * Registers page tabs for the dashboard module.
   * Ensures that tabs are registered only once.
   *
   * @returns {void}
   */
  registerPageTabs() {
    this.tabs = [{
      title: this.getTranslation('USERS_PAGE.EDIT_USER.MAIN'),
      icon: 'person-outline',
      responsive: true,
      route: this.getRoute('')
    }, {
      title: this.getTranslation('USERS_PAGE.EDIT_USER.USER_ORGANIZATIONS'),
      icon: 'book-open-outline',
      responsive: true,
      route: this.getRoute('organizations')
    }];
  }
  /**
   * GET user profile
   */
  getUserProfile() {
    var _this = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)(function* () {
      if (!_this.params.id) {
        _this.router.navigate(['/pages/users']);
        return;
      }
      _this.user = yield _this.usersService.getUserById(_this.params.id, ['role', 'tags']);
      if (_this.user?.role?.name === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_6__/* .RolesEnum */ .$.SUPER_ADMIN) {
        /**
         * Redirect If Edit Super Admin Without Permission
         */
        const hasSuperAdminRole = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_7__/* .firstValueFrom */ ._)(_this.authService.hasRole([_gauzy_contracts__WEBPACK_IMPORTED_MODULE_6__/* .RolesEnum */ .$.SUPER_ADMIN]));
        if (!hasSuperAdminRole) {
          _this.router.navigate(['/pages/users']);
          return;
        }
      }
    })();
  }
  /**
   * Subscribes to language change events and applies translations to page tabs.
   * Ensures the tabs are updated dynamically when the language changes.
   * Uses `untilDestroyed` to clean up subscriptions when the component is destroyed.
   */
  _applyTranslationOnTabs() {
    this.translateService.onLangChange.pipe(
    // Re-register page tabs on language change
    (0,rxjs__WEBPACK_IMPORTED_MODULE_3__/* .tap */ .M)(() => this.registerPageTabs()),
    // Automatically unsubscribe when the component is destroyed
    (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .untilDestroyed */ .s)(this)).subscribe();
  }
  ngOnDestroy() {}
  static {
    this.ɵfac = function EditUserProfileComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || EditUserProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_router__WEBPACK_IMPORTED_MODULE_8__/* .ActivatedRoute */ .nX), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_router__WEBPACK_IMPORTED_MODULE_8__/* .Router */ .Ix), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__/* .TranslateService */ .c$), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_10__/* .UsersService */ .g), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_11__/* .AuthService */ .u));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
      type: EditUserProfileComponent,
      selectors: [["ngx-edit-user-profile"]],
      standalone: false,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
      decls: 10,
      vars: 6,
      consts: [["withBraces", ""], ["withQuotes", ""], [1, "card-scroll"], [1, "d-flex", "gap-1"], [4, "ngIf"], [3, "tabs"], [4, "ngIf", "ngIfThen", "ngIfElse"]],
      template: function EditUserProfileComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-card", 2)(1, "nb-card-header", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(2, "ngx-back-navigation");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(3, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(5, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(6, EditUserProfileComponent_ng_container_6_Template, 3, 1, "ng-container", 4)(7, EditUserProfileComponent_span_7_Template, 6, 3, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(8, "nb-card-body");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(9, "nb-route-tabset", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(5, 4, "USERS_PAGE.EDIT_USER.HEADER"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.user == null ? null : ctx.user.name);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.user == null ? null : ctx.user.username);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("tabs", ctx.tabs);
        }
      },
      dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_12__/* .NbCardComponent */ .SrT, _nebular_theme__WEBPACK_IMPORTED_MODULE_12__/* .NbCardBodyComponent */ .KH5, _nebular_theme__WEBPACK_IMPORTED_MODULE_12__/* .NbCardHeaderComponent */ .zJv, _nebular_theme__WEBPACK_IMPORTED_MODULE_12__/* .NbRouteTabsetComponent */ .ssE, _angular_common__WEBPACK_IMPORTED_MODULE_13__/* .NgIf */ .bT, _packages_ui_core_shared_src_lib_components_back_navigation_back_navigation_component__WEBPACK_IMPORTED_MODULE_14__/* .BackNavigationComponent */ .r, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__/* .TranslatePipe */ .D9],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]     input, \n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]     nb-select.appearance-outline.status-basic .select-button, \n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]     .ng-select .ng-select-container {\n  background-color: var(--gauzy-card-1) !important;\n  border: none;\n  height: 42px !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder, \n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {\n  top: unset !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]     label, \n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]     .label {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  color: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]     textarea {\n  background-color: var(--gauzy-card-1) !important;\n  border: none;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]     .ng-select .ng-select-container input, \n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]     nb-tag-list input {\n  background-color: unset !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]     ngx-image-uploader input {\n  height: 100% !important;\n}\n\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  padding: 50px 70px;\n}\n@media only screen and (max-width: 1532px) {\n  [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n    padding: 30px 40px;\n  }\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .navigate[_ngcontent-%COMP%] {\n  display: flex;\n  margin-bottom: 35px;\n  cursor: pointer;\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .navigate[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: 7px;\n  font-size: 14px;\n  color: #2a2c39;\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  display: flex;\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .employee-container[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  transition: transform 150ms ease-in-out;\n}\n[dir=rtl]   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .employee-container[_ngcontent-%COMP%] {\n  padding-left: 70px;\n}\n[dir=ltr]   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .employee-container[_ngcontent-%COMP%] {\n  padding-right: 70px;\n}\n[dir=rtl]   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .employee-container[_ngcontent-%COMP%] {\n  margin-left: 70px;\n}\n[dir=ltr]   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .employee-container[_ngcontent-%COMP%] {\n  margin-right: 70px;\n}\n[dir=rtl]   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .employee-container[_ngcontent-%COMP%] {\n  border-left: 1px solid rgba(0, 0, 0, 0.1);\n}\n[dir=ltr]   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .employee-container[_ngcontent-%COMP%] {\n  border-right: 1px solid rgba(0, 0, 0, 0.1);\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .employee-container[_ngcontent-%COMP%]   .employee-photo[_ngcontent-%COMP%] {\n  width: fit-content;\n  height: 200px;\n  position: relative;\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .employee-container[_ngcontent-%COMP%]   .employee-photo[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  pointer-events: none;\n  background: black;\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  border-radius: 13px;\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .employee-container[_ngcontent-%COMP%]   .employee-photo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 200px;\n  border-radius: 13px;\n  object-fit: cover;\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .employee-container[_ngcontent-%COMP%]   .employee-photo[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100% !important;\n  opacity: 0;\n  position: absolute;\n  z-index: 3;\n  cursor: pointer;\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .employee-container[_ngcontent-%COMP%]   .employee-photo[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  z-index: 2;\n  transition: opacity 0.2s ease-in;\n  opacity: 0.3;\n  position: absolute;\n  top: calc(50% - 34px);\n  left: calc(50% - 34px);\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .employee-container[_ngcontent-%COMP%]   .employee-photo[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   g[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%] {\n  fill: var(--text-primary-color);\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  position: relative;\n  margin-top: 10px;\n  display: flex;\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .employee-form[_ngcontent-%COMP%] {\n  width: 60%;\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  width: 100%;\n  margin-top: 30px;\n}\n\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n  padding: 1rem;\n}\n[_nghost-%COMP%]     input, \n[_nghost-%COMP%]     nb-select.appearance-outline.status-basic .select-button, \n[_nghost-%COMP%]     .ng-select .ng-select-container {\n  background-color: var(--gauzy-card-1) !important;\n  border: none;\n  height: 42px !important;\n}\n[_nghost-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder, \n[_nghost-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {\n  top: unset !important;\n}\n[_nghost-%COMP%]     label, \n[_nghost-%COMP%]     .label {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  color: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]     textarea {\n  background-color: var(--gauzy-card-1) !important;\n  border: none;\n}\n[_nghost-%COMP%]     .ng-select .ng-select-container input, \n[_nghost-%COMP%]     nb-tag-list input {\n  background-color: unset !important;\n}\n[_nghost-%COMP%]     .route-tabset .route-tab.active svg {\n  fill: var(--text-primary-color);\n}\n[_nghost-%COMP%]     .route-tabset .route-tab a.tab-link {\n  border-radius: var(--border-radius) var(--border-radius) 0 0;\n  display: flex !important;\n}\n[_nghost-%COMP%]     .route-tabset .route-tab a.tab-link span.tab-text {\n  text-transform: lowercase;\n  display: block;\n}\n[_nghost-%COMP%]     .route-tabset .route-tab a.tab-link span.tab-text:first-letter {\n  text-transform: uppercase;\n}\n[dir=rtl]   [_nghost-%COMP%]   .gap-1[_ngcontent-%COMP%] {\n  gap: 1rem;\n}\n[dir=ltr]   [_nghost-%COMP%]   .gap-1[_ngcontent-%COMP%] {\n  gap: 0;\n}"]
    });
  }
};
EditUserProfileComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_15__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .UntilDestroy */ .d)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_15__/* .__metadata */ .Sn)("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_8__/* .ActivatedRoute */ .nX, _angular_router__WEBPACK_IMPORTED_MODULE_8__/* .Router */ .Ix, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__/* .TranslateService */ .c$, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_10__/* .UsersService */ .g, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_11__/* .AuthService */ .u])], EditUserProfileComponent);


/***/ }),

/***/ 12448:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: () => (/* binding */ ManageUserInviteComponent)
/* harmony export */ });
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(99418);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26860);
/* harmony import */ var _packages_ui_core_shared_src_lib_invite_invites_invites_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37095);



let ManageUserInviteComponent = /*#__PURE__*/(() => {
  class ManageUserInviteComponent {
    constructor() {
      this.invitationTypeEnum = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__/* .InvitationTypeEnum */ .Tq;
    }
    static {
      this.ɵfac = function ManageUserInviteComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || ManageUserInviteComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineComponent"] */ .VBU({
        type: ManageUserInviteComponent,
        selectors: [["ga-manage-user-invite"]],
        standalone: false,
        decls: 1,
        vars: 1,
        consts: [[3, "invitationType"]],
        template: function ManageUserInviteComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(0, "ga-invites", 0);
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("invitationType", ctx.invitationTypeEnum.USER);
          }
        },
        dependencies: [_packages_ui_core_shared_src_lib_invite_invites_invites_component__WEBPACK_IMPORTED_MODULE_2__/* .InvitesComponent */ .M],
        encapsulation: 2
      });
    }
  }
  return ManageUserInviteComponent;
})();

/***/ }),

/***/ 17659:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ UsersComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(73014);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(64411);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(9620);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(56383);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(19223);
/* harmony import */ var angular2_smart_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52345);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(73246);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(72781);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(24237);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(71181);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(36950);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(23423);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17785);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(81236);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(13271);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(99418);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(71924);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(15480);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(54263);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(4846);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(88319);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(26024);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(46076);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47108);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(74225);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(6231);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(55101);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(76229);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(20873);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(53291);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(91045);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(87791);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(11031);
/* harmony import */ var _employees_table_components__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(56397);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(79475);
/* harmony import */ var _packages_ui_core_shared_src_lib_gauzy_button_action_gauzy_button_action_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(45293);
/* harmony import */ var _packages_ui_core_shared_src_lib_smart_data_layout_pagination_pagination_v2_pagination_v2_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(3456);
/* harmony import */ var _packages_ui_core_shared_src_lib_card_grid_card_grid_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(49517);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(14572);
/* harmony import */ var _packages_ui_core_shared_src_lib_components_header_title_header_title_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(49072);
/* harmony import */ var _packages_ui_core_shared_src_lib_directives_under_construction_directive__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(67063);
/* harmony import */ var _edit_user_mutation_edit_user_mutation_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(26034);





























const _c0 = a0 => [a0];
const _c1 = () => ["ORG_INVITE_VIEW", "ORG_INVITE_EDIT"];
function UsersComponent_ng_template_7_ng_template_0_button_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function UsersComponent_ng_template_7_ng_template_0_button_0_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.manageInvites());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(2, 1, "BUTTONS.MANAGE_INVITES"), " ");
  }
}
function UsersComponent_ng_template_7_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(0, UsersComponent_ng_template_7_ng_template_0_button_0_Template, 3, 3, "button", 9);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r1.organizationInvitesAllowed);
  }
}
function UsersComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(0, UsersComponent_ng_template_7_ng_template_0_Template, 1, 1, "ng-template", 8);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngxPermissionsOnly", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction0"] */ .lJ4(1, _c1));
  }
}
function UsersComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(0, "ngx-gauzy-button-action", 11);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    const actionButtons_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(14);
    const visible_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("componentName", ctx_r1.viewComponentName)("buttonTemplate", actionButtons_r3)("buttonTemplateVisible", visible_r4)("isDisable", ctx_r1.disableButton);
  }
}
function UsersComponent_ng_template_11_ng_template_0_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "ga-edit-user-mutation", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("addOrEditUser", function UsersComponent_ng_template_11_ng_template_0_ng_template_1_Template_ga_edit_user_mutation_addOrEditUser_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.addOrEditUser($event));
    })("canceled", function UsersComponent_ng_template_11_ng_template_0_ng_template_1_Template_ga_edit_user_mutation_canceled_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.cancel());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("organization", ctx_r1.organization);
  }
}
function UsersComponent_ng_template_11_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, UsersComponent_ng_template_11_ng_template_0_ng_template_1_Template, 1, 1, "ng-template", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
}
function UsersComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(0, UsersComponent_ng_template_11_ng_template_0_Template, 2, 0, "ng-template", 12);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r1.showAddCard);
  }
}
function UsersComponent_ng_template_12_ng_template_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "ngx-pagination", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("source", ctx_r1.smartTableSource);
  }
}
function UsersComponent_ng_template_12_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 19)(1, "angular2-smart-table", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("userRowSelect", function UsersComponent_ng_template_12_ng_template_1_Template_angular2_smart_table_userRowSelect_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.selectUser($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(3, UsersComponent_ng_template_12_ng_template_1_ng_container_3_Template, 2, 1, "ng-container", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("settings", ctx_r1.settingsSmartTable)("source", ctx_r1.sourceSmartTable);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r1.smartTableSource);
  }
}
function UsersComponent_ng_template_12_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "ga-card-grid", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("scroll", function UsersComponent_ng_template_12_ng_template_2_Template_ga_card_grid_scroll_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.onScroll());
    })("onSelectedItem", function UsersComponent_ng_template_12_ng_template_2_Template_ga_card_grid_onSelectedItem_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.selectUser($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("totalItems", ctx_r1.pagination == null ? null : ctx_r1.pagination.totalItems)("settings", ctx_r1.settingsSmartTable)("source", ctx_r1.users);
  }
}
function UsersComponent_ng_template_12_3_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(2, 1, "SETTINGS_MENU.NO_LAYOUT"));
  }
}
function UsersComponent_ng_template_12_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(0, UsersComponent_ng_template_12_3_ng_template_0_Template, 3, 3, "ng-template");
  }
}
function UsersComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, UsersComponent_ng_template_12_ng_template_1_Template, 4, 3, "ng-template", 17)(2, UsersComponent_ng_template_12_ng_template_2_Template, 1, 3, "ng-template", 17)(3, UsersComponent_ng_template_12_3_Template, 1, 0, null, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngSwitch", ctx_r1.dataLayoutStyle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngSwitchCase", ctx_r1.componentLayoutStyleEnum.TABLE);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngSwitchCase", ctx_r1.componentLayoutStyleEnum.CARDS_GRID);
  }
}
function UsersComponent_ng_template_13_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 25)(1, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(2, "nb-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(5, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function UsersComponent_ng_template_13_ng_template_0_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r8);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.edit(ctx_r1.selectedItem));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(6, "nb-icon", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(9, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function UsersComponent_ng_template_13_ng_template_0_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r8);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.convertUserToEmployee());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(10, "nb-icon", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(13, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function UsersComponent_ng_template_13_ng_template_0_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r8);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.removeUserFromOrganization(ctx_r1.selectedUser, ctx_r1.selectedItem));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(15, "nb-icon", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("disabled", ctx_r1.disableButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(4, 8, "BUTTONS.VIEW"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("disabled", ctx_r1.disableButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(8, 10, "BUTTONS.EDIT"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("disabled", ctx_r1.disableButton || ctx_r1.isEmployee());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(12, 12, "BUTTONS.CONVERT_TO_EMPLOYEE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("disabled", ctx_r1.disableButton)("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(14, 14, "BUTTONS.REMOVE"));
  }
}
function UsersComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(0, UsersComponent_ng_template_13_ng_template_0_Template, 16, 16, "ng-template", 6);
  }
}
function UsersComponent_ng_template_15_ng_template_0_button_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function UsersComponent_ng_template_15_ng_template_0_button_0_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r10);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.invite());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "nb-icon", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(3, 1, "BUTTONS.INVITE"), " ");
  }
}
function UsersComponent_ng_template_15_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(0, UsersComponent_ng_template_15_ng_template_0_button_0_Template, 4, 3, "button", 36);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r1.organizationInvitesAllowed);
  }
}
function UsersComponent_ng_template_15_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function UsersComponent_ng_template_15_ng_template_5_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r11);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.toggleAddCard());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "nb-icon", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(3, 1, "BUTTONS.ADD_EXISTING"), " ");
  }
}
function UsersComponent_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(0, UsersComponent_ng_template_15_ng_template_0_Template, 1, 1, "ng-template", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(1, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function UsersComponent_ng_template_15_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.add());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(2, "nb-icon", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(5, UsersComponent_ng_template_15_ng_template_5_Template, 4, 3, "ng-template", 14);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(4, 1, "BUTTONS.ADD_NEW"), " ");
  }
}
let UsersComponent = class UsersComponent extends _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_1__/* .PaginationFilterBaseComponent */ .t {
  constructor(dialogService, store, router, toastrService, errorHandlingService, route, translateService, userOrganizationsService, employeesService, _dateFormatPipe) {
    super(translateService);
    this.dialogService = dialogService;
    this.store = store;
    this.router = router;
    this.toastrService = toastrService;
    this.errorHandlingService = errorHandlingService;
    this.route = route;
    this.translateService = translateService;
    this.userOrganizationsService = userOrganizationsService;
    this.employeesService = employeesService;
    this._dateFormatPipe = _dateFormatPipe;
    this.PermissionsEnum = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__/* .PermissionsEnum */ .U;
    this.users = [];
    this.sourceSmartTable = new angular2_smart_table__WEBPACK_IMPORTED_MODULE_3__/* .LocalDataSource */ .h0();
    this.userName = 'User';
    this.hasSuperAdminPermission = false;
    this.organizationInvitesAllowed = false;
    this.disableButton = true;
    this.dataLayoutStyle = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_4__/* .ComponentLayoutStyleEnum */ .IE.TABLE;
    this.componentLayoutStyleEnum = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_4__/* .ComponentLayoutStyleEnum */ .IE;
    this._refresh$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__/* .Subject */ .B();
    this.setView();
  }
  ngOnInit() {
    this._loadSmartTableSettings();
    this._applyTranslationOnSmartTable();
    this.subject$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__/* .debounceTime */ .B)(300), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .M)(() => this.getUsers()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .M)(() => this.cancel()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__/* .untilDestroyed */ .s)(this)).subscribe();
    this.store.selectedOrganization$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .filter */ .p)(organization => !!organization), (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_10__/* .distinctUntilChange */ .nI)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .M)(organization => this.organization = organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .M)(({
      invitesAllowed
    }) => this.organizationInvitesAllowed = invitesAllowed), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .M)(() => this._refresh$.next(true)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .M)(() => this.subject$.next(true)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__/* .untilDestroyed */ .s)(this)).subscribe();
    this.store.userRolePermissions$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .filter */ .p)(permissions => permissions.length > 0), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__/* .untilDestroyed */ .s)(this)).subscribe(() => {
      this.hasSuperAdminPermission = this.store.hasPermission(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__/* .PermissionsEnum */ .U.SUPER_ADMIN_EDIT);
    });
    this.route.queryParamMap.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .filter */ .p)(params => !!params && params.get('openAddDialog') === 'true'), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__/* .debounceTime */ .B)(1000), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .M)(() => this.add()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__/* .untilDestroyed */ .s)(this)).subscribe();
    this.pagination$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__/* .debounceTime */ .B)(300), (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_10__/* .distinctUntilChange */ .nI)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .M)(() => this.subject$.next(true)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__/* .untilDestroyed */ .s)(this)).subscribe();
    this._refresh$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .filter */ .p)(() => this._isGridLayout), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .M)(() => this.refreshPagination()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .M)(() => this.users = []), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__/* .untilDestroyed */ .s)(this)).subscribe();
  }
  /**
   * Sets the view to the 'Users' component and updates the layout style.
   * Subscribes to the layout changes and triggers necessary updates like pagination and data clearing.
   */
  setView() {
    // Set the component view name
    this.viewComponentName = _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_11__/* .ComponentEnum */ .L.USERS;
    // Listen for layout changes related to the 'Users' component
    this.store.componentLayout$(this.viewComponentName).pipe(
    // Avoid emitting if the layout style has not changed
    (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_10__/* .distinctUntilChange */ .nI)(),
    // Update the data layout style based on the emitted layout
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .M)(componentLayout => this.dataLayoutStyle = componentLayout),
    // Refresh pagination settings whenever the layout changes
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .M)(() => this.refreshPagination()),
    // Only proceed further if the current layout is grid-based
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .filter */ .p)(() => this._isGridLayout),
    // Clear the users array when switching to grid layout
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .M)(() => this.users = []),
    // Trigger a refresh event for components relying on the subject$
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .M)(() => this.subject$.next(true)),
    // Automatically clean up the subscription when the component is destroyed
    (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__/* .untilDestroyed */ .s)(this)).subscribe();
  }
  /**
   * Determines if the current layout style is set to grid (cards grid).
   * This getter provides a clean and concise way to check the layout type.
   *
   * @returns A boolean indicating whether the layout style is 'CARDS_GRID'.
   */
  get _isGridLayout() {
    return this.componentLayoutStyleEnum.CARDS_GRID === this.dataLayoutStyle;
  }
  /**
   * Handles the selection of a user from the list.
   * Updates the selected user, enables/disables the button,
   * and checks specific conditions like user role and permissions.
   *
   * @param param0 - The selection event containing user data.
   * @param param0.isSelected - Indicates if the user is selected.
   * @param param0.data - The data object of the selected user.
   */
  selectUser({
    isSelected,
    data
  }) {
    // Toggle the button state and update the selected user
    this.disableButton = !isSelected;
    this.selectedUser = isSelected ? data : null;
    // Set the user's display name or default to 'User'
    this.userName = data?.fullName?.trim() || 'User';
    // Handle SUPER_ADMIN role-specific logic
    if (data?.role?.name === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_12__/* .RolesEnum */ .$.SUPER_ADMIN) {
      this.disableButton = this.hasSuperAdminPermission;
      this.selectedUser = this.hasSuperAdminPermission ? this.selectedUser : null;
    }
  }
  /**
   * Opens a dialog to add a new user and handles the response.
   * If a user is added successfully, displays a success message and triggers updates for related components.
   */
  add() {
    var _this = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A)(function* () {
      // Open the user mutation dialog
      const dialog = _this.dialogService.open(_gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_14__/* .UserMutationComponent */ .y);
      // Wait for the dialog to close and retrieve the data
      const data = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_15__/* .firstValueFrom */ ._)(dialog.onClose);
      // Check if data exists and contains a user
      if (data && data.user) {
        // Construct the user's full name if first or last name is provided
        if (data.user.firstName || data.user.lastName) {
          _this.userName = `${data.user.firstName || ''} ${data.user.lastName || ''}`.trim();
        }
        // Display a success message using ToastrService
        _this.toastrService.success('NOTES.ORGANIZATIONS.ADD_NEW_USER_TO_ORGANIZATION', {
          username: _this.userName,
          orgname: _this.store.selectedOrganization.name
        });
        // Notify subscribers about the update
        _this._refresh$.next(true);
        _this.subject$.next(true);
      }
    })();
  }
  /**
   * Adds or edits a user in the organization based on the input data.
   * If the user is active, creates the user and triggers updates for related components.
   *
   * @param user - The user data to be added or edited.
   */
  addOrEditUser(user) {
    var _this2 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A)(function* () {
      // Check if the user is active
      if (user.isActive) {
        // Create the user in the organization and wait for the operation to complete
        yield (0,rxjs__WEBPACK_IMPORTED_MODULE_15__/* .firstValueFrom */ ._)(_this2.userOrganizationsService.create(user));
        // Show a success message using ToastrService
        _this2.toastrService.success('NOTES.ORGANIZATIONS.ADD_NEW_USER_TO_ORGANIZATION', {
          username: _this2.userName.trim(),
          orgname: _this2.store.selectedOrganization.name
        });
        // Trigger updates for other components or subscribers
        _this2._refresh$.next(true);
        _this2.subject$.next(true);
      }
    })();
  }
  /**
   * Opens a dialog for inviting a user.
   * Uses the `InviteMutationComponent` with the context set to user invitation.
   * Waits for the dialog to close before proceeding.
   */
  invite() {
    var _this3 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A)(function* () {
      // Open the invite dialog with the specified context
      const dialog = _this3.dialogService.open(_gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_16__/* .InviteMutationComponent */ .w, {
        context: {
          invitationType: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_17__/* .InvitationTypeEnum */ .Tq.USER
        }
      });
      // Wait for the dialog to close and handle any resulting actions (if needed)
      yield (0,rxjs__WEBPACK_IMPORTED_MODULE_15__/* .firstValueFrom */ ._)(dialog.onClose);
    })();
  }
  /**
   * Navigates to the edit page for a selected user.
   * If a user is passed as a parameter, it selects that user before navigation.
   *
   * @param selectedItem - The user object to edit (optional).
   */
  edit(selectedItem) {
    // If a user is provided, select that user
    if (selectedItem) {
      this.selectUser({
        isSelected: true,
        data: selectedItem
      });
    }
    // Navigate to the edit page of the selected user
    if (this.selectedUser?.id) {
      this.router.navigate(['/pages/users/edit/' + this.selectedUser.id]);
    }
  }
  /**
   * Navigates to the user invites management page.
   */
  manageInvites() {
    this.router.navigate(['/pages/users/invites/']);
  }
  /**
   * Opens a dialog for deleting a user.
   * If a user is passed as a parameter, it selects that user before navigation.
   *
   * @param selectedItem
   */
  delete(selectedItem) {
    var _this4 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A)(function* () {
      if (selectedItem) {
        _this4.selectUser({
          isSelected: true,
          data: selectedItem
        });
      }
      _this4.dialogService.open(_gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_18__/* .DeleteConfirmationComponent */ .u, {
        context: {
          recordType: _this4.selectedUser.fullName + ' ' + _this4.getTranslation('FORM.DELETE_CONFIRMATION.USER')
        }
      }).onClose.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__/* .untilDestroyed */ .s)(_this4)).subscribe(/*#__PURE__*/function () {
        var _ref = (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A)(function* (result) {
          if (result) {
            try {
              const username = _this4.userName;
              yield _this4.userOrganizationsService.setUserAsInactive(_this4.selectedUser.id);
              _this4.toastrService.success('NOTES.ORGANIZATIONS.DELETE_USER_FROM_ORGANIZATION', {
                username
              });
              _this4._refresh$.next(true);
              _this4.subject$.next(true);
            } catch (error) {
              _this4.toastrService.danger(error);
            }
          }
        });
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    })();
  }
  /**
   * Cancels the current operation and hides the add card form.
   * Resets the `showAddCard` flag to `false`.
   */
  cancel() {
    this.showAddCard = false;
  }
  /**
   * Remove user from organization based on user organization ID.
   *
   * @param selectedOrganization The selected user organization to remove the user from.
   */
  removeUserFromOrganization(selectedOrganization) {
    var _this5 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A)(function* () {
      const {
        userOrganizationId
      } = selectedOrganization;
      const fullName = selectedOrganization.fullName.trim() || selectedOrganization.email;
      /**
       *  User belongs to only 1 organization -> delete user
       *	User belongs multiple organizations -> remove user from Organization
       */
      const count = yield _this5.userOrganizationsService.getUserOrganizationCount(userOrganizationId);
      const confirmationMessage = count === 1 ? 'FORM.DELETE_CONFIRMATION.DELETE_USER' : 'FORM.DELETE_CONFIRMATION.REMOVE_USER';
      // Open a confirmation dialog for the hiring action.
      const dialogRef = _this5.dialogService.open(_gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_18__/* .DeleteConfirmationComponent */ .u, {
        context: {
          recordType: `${fullName} ${_this5.getTranslation(confirmationMessage)}`
        }
      });
      // Open confirmation dialog for user action
      dialogRef.onClose.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__/* .untilDestroyed */ .s)(_this5) // Ensures the observable is properly managed to prevent memory leaks.
      ).subscribe(/*#__PURE__*/function () {
        var _ref2 = (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A)(function* (result) {
          if (!result) return; // If the dialog is closed without confirmation, exit the function.
          try {
            // If user confirms deletion, proceed with removal from organization
            yield _this5.userOrganizationsService.removeUserFromOrg(userOrganizationId);
            _this5.toastrService.success('USERS_PAGE.REMOVE_USER', {
              name: fullName
            });
          } catch (error) {
            console.error('Failed to remove user from organization:', error.message);
            // Handle errors during the removal process
            _this5.errorHandlingService.handleError(error);
          } finally {
            // Perform cleanup or refresh actions
            _this5._refresh$.next(true);
            _this5.subject$.next(true);
          }
        });
        return function (_x2) {
          return _ref2.apply(this, arguments);
        };
      }());
    })();
  }
  /**
   * Fetches user organizations with necessary relations.
   *
   * @returns A promise that resolves to an array of IUserOrganization.
   */
  _fetchUserOrganizations() {
    var _this6 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A)(function* () {
      // If organization is not available, return undefined
      if (!_this6.organization) {
        return;
      }
      // Destructure organization properties for readability
      const {
        id: organizationId,
        tenantId
      } = _this6.organization;
      // Fetch user organizations with required relations
      const userOrganizations = yield _this6.userOrganizationsService.getAll(['user', 'user.role', 'user.tags'], {
        organizationId,
        tenantId
      }, true);
      // Filter out user organizations that are not active or don't have a user with a role
      return userOrganizations.items.filter(organization => organization.user?.role);
    })();
  }
  /**
   * Fetches users from user organizations, maps them to the required format, and loads them into the smart table.
   */
  getUsers() {
    var _this7 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A)(function* () {
      _this7.loading = true;
      try {
        const organizations = yield _this7._fetchUserOrganizations();
        // Mapping fetched organizations to required user format
        const users = organizations.filter(({
          user
        }) => !!user).map(({
          id: userOrganizationId,
          user,
          isActive
        }) => ({
          id: user.id,
          fullName: user.name,
          email: user.email,
          tags: user.tags,
          imageUrl: user.imageUrl,
          role: user.role,
          isActive: isActive,
          userOrganizationId,
          ..._this7.employeeMapper(user.employee)
        }));
        // Initialize Smart Table and load users
        _this7.loadUsersToSmartTable(users);
      } catch (error) {
        console.error('Error while getting organization users', error?.message);
        _this7.toastrService.danger(error);
      } finally {
        _this7.loading = false;
      }
    })();
  }
  /**
   * Loads users into the smart table with pagination and updates pagination.
   *
   * @param users The array of users to load into the smart table.
   * @param activePage The active page for pagination.
   * @param itemsPerPage The number of items per page for pagination.
   */
  loadUsersToSmartTable(users) {
    const {
      activePage,
      itemsPerPage
    } = this.getPagination();
    this.sourceSmartTable.setPaging(activePage, itemsPerPage, false);
    this.sourceSmartTable.load(users);
    // Load Grid Data
    this._loadDataGridLayout();
    // Updates pagination
    this.updatePagination();
  }
  /**
   * Updates pagination information based on the current state of the smart table.
   */
  updatePagination() {
    // Update pagination with total count of items in the smart table
    this.setPagination({
      ...this.getPagination(),
      totalItems: this.sourceSmartTable.count()
    });
  }
  /**
   * Loads unique user data into the users array if the grid layout is enabled.
   */
  _loadDataGridLayout() {
    var _this8 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A)(function* () {
      // Check if grid layout is enabled
      if (!_this8._isGridLayout) {
        return; // Exit early if grid layout is disabled
      }
      // Retrieve elements from the source smart table
      const elements = yield _this8.sourceSmartTable.getElements();
      // Filter unique users based on their IDs
      const uniqueUsers = elements.filter((user, index, self) => index === self.findIndex(({
        id
      }) => user.id === id));
      // Add unique users to the users array
      _this8.users.push(...uniqueUsers);
    })();
  }
  /**
   *
   */
  _loadSmartTableSettings() {
    const pagination = this.getPagination();
    this.settingsSmartTable = {
      actions: false,
      selectedRowIndex: -1,
      pager: {
        display: false,
        perPage: pagination ? pagination.itemsPerPage : 10
      },
      columns: {
        fullName: {
          title: this.getTranslation('SM_TABLE.FULL_NAME'),
          type: 'custom',
          class: 'align-row',
          renderComponent: _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_19__/* .PictureNameTagsComponent */ .O,
          componentInitFunction: (instance, cell) => {
            instance.rowData = cell.getRow().getData();
            instance.value = cell.getValue();
          }
        },
        email: {
          title: this.getTranslation('SM_TABLE.EMAIL'),
          type: 'custom',
          renderComponent: _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_20__/* .EmailComponent */ .C,
          componentInitFunction: (instance, cell) => {
            instance.rowData = cell.getRow().getData();
          }
        },
        role: {
          title: this.getTranslation('SM_TABLE.ROLE'),
          type: 'custom',
          width: '5%',
          renderComponent: _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_21__/* .RoleComponent */ .a,
          componentInitFunction: (instance, cell) => {
            instance.value = cell.getRawValue();
          }
        },
        tags: {
          title: this.getTranslation('SM_TABLE.TAGS'),
          type: 'custom',
          renderComponent: _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_22__/* .TagsOnlyComponent */ .F,
          componentInitFunction: (instance, cell) => {
            instance.rowData = cell.getRow().getData();
            instance.value = cell.getValue();
          },
          filter: {
            type: 'custom',
            component: _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_23__/* .TagsColorFilterComponent */ .Y
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
          class: 'align-row',
          width: '10%'
        },
        status: {
          title: this.getTranslation('SM_TABLE.STATUS'),
          type: 'custom',
          width: '5%',
          renderComponent: _employees_table_components__WEBPACK_IMPORTED_MODULE_24__/* .EmployeeWorkStatusComponent */ .F,
          componentInitFunction: (instance, cell) => {
            instance.rowData = cell.getRow().getData();
          }
        }
      }
    };
  }
  /**
   * Subscribes to language change events and reloads smart table settings accordingly.
   */
  _applyTranslationOnSmartTable() {
    this.translateService.onLangChange.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .M)(() => this._loadSmartTableSettings()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__/* .untilDestroyed */ .s)(this)).subscribe();
  }
  /*
   * Clear selected item
   */
  clearItem() {
    this.selectUser({
      isSelected: false,
      data: null
    });
  }
  /**
   * Maps an employee object to a simplified format.
   *
   * @param employee The employee object to be mapped.
   * @returns An object containing mapped employee properties.
   */
  employeeMapper(employee) {
    if (!employee) {
      return {};
    }
    const {
      endWork,
      startedWorkOn,
      isTrackingEnabled,
      id
    } = employee;
    // "Range" when was hired and when exit
    const start = this._dateFormatPipe.transform(startedWorkOn, null, 'LL');
    const end = this._dateFormatPipe.transform(endWork, null, 'LL');
    const workStatus = [start, end].filter(Boolean).join(' - ');
    return {
      employeeId: id,
      endWork: endWork ? new Date(endWork) : null,
      workStatus: endWork ? workStatus : '',
      startedWorkOn,
      employee,
      isTrackingEnabled
    };
  }
  /**
   * Checks if the user is an employee.
   *
   * @param user The user to check.
   * @returns True if the user is an employee, otherwise false.
   */
  isEmployee() {
    return !!this.selectedUser.employeeId;
  }
  /**
   * Converts a selected user to an employee on the users page.
   *
   * This method registers the selected user as an employee within the currently selected organization,
   * provided the user hasn't already been registered as an employee.
   *
   * Preconditions:
   * - A valid user must be selected.
   * - The user must not already have an employee ID.
   * - The organization details must be available.
   *
   * @throws {Error} Logs an error if the employee registration process fails.
   *
   * @returns {Promise<void>} Resolves when the user is successfully registered as an employee or does nothing if preconditions aren't met.
   */
  convertUserToEmployee() {
    var _this9 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A)(function* () {
      if (!_this9.selectedUser || !_this9.organization || _this9.isEmployee()) {
        return;
      }
      const {
        id: organizationId,
        tenantId
      } = _this9.organization;
      const {
        id: userId
      } = _this9.selectedUser;
      try {
        yield (0,rxjs__WEBPACK_IMPORTED_MODULE_15__/* .firstValueFrom */ ._)(_this9.employeesService.create({
          startedWorkOn: null,
          // Default start date is null (can be updated later)
          userId,
          organizationId,
          tenantId
        }));
        _this9.toastrService.success('USERS_PAGE.CONVERT_USER_TO_EMPLOYEE');
      } catch (error) {
        console.error('Error while converting user to employee:', error);
        _this9.toastrService.danger(error);
      }
    })();
  }
  // Method to toggle the 'showAddCard' state
  toggleAddCard() {
    this.showAddCard = !this.showAddCard;
  }
  ngOnDestroy() {}
  static {
    this.ɵfac = function UsersComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || UsersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_nebular_theme__WEBPACK_IMPORTED_MODULE_25__/* .NbDialogService */ .S0W), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_26__/* .Store */ .il), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_router__WEBPACK_IMPORTED_MODULE_27__/* .Router */ .Ix), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_28__/* .ToastrService */ .t), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_29__/* .ErrorHandlingService */ .X), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_router__WEBPACK_IMPORTED_MODULE_27__/* .ActivatedRoute */ .nX), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_30__/* .TranslateService */ .c$), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_31__/* .UsersOrganizationsService */ .K), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_32__/* .EmployeesService */ .r), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_33__/* .DateFormatPipe */ .a));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
      type: UsersComponent,
      selectors: [["ng-component"]],
      standalone: false,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
      decls: 17,
      vars: 8,
      consts: [["actionButtons", ""], ["visible", ""], ["nbSpinnerStatus", "primary", "nbSpinnerSize", "large", 3, "nbSpinner"], [1, "d-flex", "flex-column", "pb-0"], [1, "card-header-title"], [3, "allowEmployee"], ["ngxPermissionsOnly", "ORG_USERS_EDIT"], [1, "align-self-end"], [3, "ngxPermissionsOnly"], ["nbButton", "", "class", "action", "size", "small", "status", "primary", 3, "click", 4, "ngIf"], ["nbButton", "", "size", "small", "status", "primary", 1, "action", 3, "click"], [3, "componentName", "buttonTemplate", "buttonTemplateVisible", "isDisable"], [3, "ngIf"], [1, "edit-user-mutation"], ["ngxPermissionsOnly", "TENANT_ADD_EXISTING_USER"], [3, "addOrEditUser", "canceled", "organization"], [3, "ngSwitch"], [3, "ngSwitchCase"], [4, "ngSwitchDefault"], [1, "table-scroll-container"], [2, "cursor", "pointer", 3, "userRowSelect", "settings", "source"], [1, "pagination-container"], [4, "ngIf"], [3, "source"], [3, "scroll", "onSelectedItem", "totalItems", "settings", "source"], [1, "actions"], ["nbButton", "", "status", "basic", "size", "small", "underConstruction", "", 1, "action", "secondary", 3, "disabled"], ["icon", "eye-outline", 1, "mr-1"], ["nbButton", "", "status", "basic", "size", "small", 1, "action", "primary", 3, "click", "disabled"], ["icon", "edit-outline", 1, "mr-1"], ["icon", "person", 1, "mr-1"], ["nbButton", "", "status", "basic", "size", "small", 1, "action", 3, "click", "disabled", "nbTooltip"], ["status", "danger", "icon", "trash-2-outline"], ["ngxPermissionsOnly", "ORG_INVITE_EDIT"], ["nbButton", "", "status", "success", "size", "small", 1, "action", 3, "click"], ["icon", "plus-outline"], ["nbButton", "", "status", "basic", "class", "action info", "size", "small", 3, "click", 4, "ngIf"], ["nbButton", "", "status", "basic", "size", "small", 1, "action", "info", 3, "click"], ["icon", "email-outline"], ["nbButton", "", "status", "warning", "size", "small", 1, "action", 3, "click"]],
      template: function UsersComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-card", 2)(1, "nb-card-header", 3)(2, "div", 4)(3, "h4")(4, "ngx-header-title", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(6, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(7, UsersComponent_ng_template_7_Template, 1, 2, "ng-template", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(8, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(9, UsersComponent_ng_template_9_Template, 1, 4, "ng-template", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(10, "nb-card-body");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(11, UsersComponent_ng_template_11_Template, 1, 1, "ng-template", 6)(12, UsersComponent_ng_template_12_Template, 4, 3, "ng-template", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(13, UsersComponent_ng_template_13_Template, 1, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplateRefExtractor"] */ .C5r)(15, UsersComponent_ng_template_15_Template, 6, 3, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplateRefExtractor"] */ .C5r);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("nbSpinner", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("allowEmployee", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(6, 4, "USERS_PAGE.HEADER"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngxPermissionsOnly", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction1"] */ .eq3(6, _c0, ctx.PermissionsEnum.ORG_USERS_VIEW));
        }
      },
      dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_25__/* .NbCardComponent */ .SrT, _nebular_theme__WEBPACK_IMPORTED_MODULE_25__/* .NbCardBodyComponent */ .KH5, _nebular_theme__WEBPACK_IMPORTED_MODULE_25__/* .NbCardHeaderComponent */ .zJv, _nebular_theme__WEBPACK_IMPORTED_MODULE_25__/* .NbButtonComponent */ .YP2, _nebular_theme__WEBPACK_IMPORTED_MODULE_25__/* .NbIconComponent */ .tHu, _nebular_theme__WEBPACK_IMPORTED_MODULE_25__/* .NbTooltipDirective */ .BmQ, _nebular_theme__WEBPACK_IMPORTED_MODULE_25__/* .NbSpinnerDirective */ .zwc, ngx_permissions__WEBPACK_IMPORTED_MODULE_34__/* .NgxPermissionsDirective */ .f6, angular2_smart_table__WEBPACK_IMPORTED_MODULE_3__/* .Angular2SmartTableComponent */ .T9, _packages_ui_core_shared_src_lib_gauzy_button_action_gauzy_button_action_component__WEBPACK_IMPORTED_MODULE_35__/* .GauzyButtonActionComponent */ .A, _packages_ui_core_shared_src_lib_smart_data_layout_pagination_pagination_v2_pagination_v2_component__WEBPACK_IMPORTED_MODULE_36__/* .PaginationV2Component */ .a, _packages_ui_core_shared_src_lib_card_grid_card_grid_component__WEBPACK_IMPORTED_MODULE_37__/* .CardGridComponent */ .c, _angular_common__WEBPACK_IMPORTED_MODULE_38__/* .NgIf */ .bT, _angular_common__WEBPACK_IMPORTED_MODULE_38__/* .NgSwitch */ .ux, _angular_common__WEBPACK_IMPORTED_MODULE_38__/* .NgSwitchCase */ .e1, _angular_common__WEBPACK_IMPORTED_MODULE_38__/* .NgSwitchDefault */ .fG, _packages_ui_core_shared_src_lib_components_header_title_header_title_component__WEBPACK_IMPORTED_MODULE_39__/* .HeaderTitleComponent */ .X, _packages_ui_core_shared_src_lib_directives_under_construction_directive__WEBPACK_IMPORTED_MODULE_40__/* .UnderConstructionDirective */ .r, _edit_user_mutation_edit_user_mutation_component__WEBPACK_IMPORTED_MODULE_41__/* .EditUserMutationComponent */ .S, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_30__/* .TranslatePipe */ .D9],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.action[_ngcontent-%COMP%] {\n  box-shadow: var(--gauzy-shadow);\n  border: none;\n}\n.action[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}\n.action.info[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: var(--color-info-default);\n  color: white;\n  border-color: var(--color-info-default);\n}\n.action.info-text-1[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  color: var(--color-info-default);\n}\n.action.secondary[_ngcontent-%COMP%] {\n  color: #7e7e8f;\n}\n.action.success[_ngcontent-%COMP%] {\n  color: var(--color-success-default);\n}\n.action.warning[_ngcontent-%COMP%] {\n  color: rgb(245, 109, 88);\n}\n.action.orange[_ngcontent-%COMP%] {\n  color: rgb(255, 171, 45);\n}\n.action.primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n}\n.action.primary.soft[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: rgba(110, 73, 232, 0.1);\n}\n.action.select-nb[_ngcontent-%COMP%]     {\n  box-shadow: none;\n}\n.action.select-nb[_ngcontent-%COMP%]     .select-button {\n  box-shadow: var(--gauzy-shadow);\n  background: rgb(245, 245, 245);\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n.actions[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-2);\n  border-radius: var(--button-rectangle-border-radius);\n  padding: 2px 4px !important;\n}\n\n.gauzy-button-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n.card-custom-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n[_nghost-%COMP%]     input {\n  border-radius: var(--border-radius);\n  box-shadow: var(--gauzy-shadow) inset;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%], \n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   .table-scroll-container[_ngcontent-%COMP%], \n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .table-scroll-container[_ngcontent-%COMP%] {\n  flex-grow: 10;\n  max-height: unset;\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  border-radius: 0 0 var(--border-radius) var(--border-radius);\n}\n[dir=ltr]   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  padding: 1rem 0.5rem 1rem 18px;\n}\n[dir=rtl]   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  padding: 1rem 18px 1rem 0.5rem;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%], \n[_nghost-%COMP%]   nb-card-header[_ngcontent-%COMP%] {\n  border-radius: var(--border-radius);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  height: 100%;\n  border-radius: var(--border-radius);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-header[_ngcontent-%COMP%] {\n  flex: 0 1 auto;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  overflow: unset;\n  height: calc(100vh - var(--header-height) - var(--footer-height) - 11.5rem + 3.75rem);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-footer[_ngcontent-%COMP%] {\n  flex: 0 1 auto;\n}\n\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  height: calc(100vh - var(--header-height) - var(--footer-height) - 11.5rem + 3.75rem - 0.5rem) !important;\n}\n[_nghost-%COMP%]   .grid[_ngcontent-%COMP%] {\n  flex-grow: 10;\n  height: 100%;\n  overflow: auto;\n}\n\n.edit-user-mutation[_ngcontent-%COMP%] {\n  width: 50%;\n}\n\n@media only screen and (max-width: 1200px) {\n  .edit-user-mutation[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}"]
    });
  }
};
UsersComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_42__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__/* .UntilDestroy */ .d)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_42__/* .__metadata */ .Sn)("design:paramtypes", [_nebular_theme__WEBPACK_IMPORTED_MODULE_25__/* .NbDialogService */ .S0W, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_26__/* .Store */ .il, _angular_router__WEBPACK_IMPORTED_MODULE_27__/* .Router */ .Ix, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_28__/* .ToastrService */ .t, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_29__/* .ErrorHandlingService */ .X, _angular_router__WEBPACK_IMPORTED_MODULE_27__/* .ActivatedRoute */ .nX, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_30__/* .TranslateService */ .c$, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_31__/* .UsersOrganizationsService */ .K, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_32__/* .EmployeesService */ .r, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_33__/* .DateFormatPipe */ .a])], UsersComponent);


/***/ }),

/***/ 18339:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   y: () => (/* binding */ UserIdService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);

let UserIdService = /*#__PURE__*/(() => {
  class UserIdService {
    static {
      this.ɵfac = function UserIdService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || UserIdService)();
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjectable"] */ .jDH({
        token: UserIdService,
        factory: UserIdService.ɵfac
      });
    }
  }
  return UserIdService;
})();

/***/ }),

/***/ 18427:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   j: () => (/* binding */ EditUserDataComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(73014);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(64411);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9620);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(13271);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(23423);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(19223);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(36950);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(72781);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73246);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(18339);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(36042);
/* harmony import */ var _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38546);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(57044);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _packages_ui_core_shared_src_lib_user_edit_profile_form_edit_profile_form_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(10409);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(14572);

















function EditUserDataComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(1, "ngx-profile", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("userSubmitted", function EditUserDataComponent_ng_container_0_Template_ngx_profile_userSubmitted_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.goBack());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("selectedUser", ctx_r1.user)("allowRoleChange", true);
  }
}
let EditUserDataComponent = class EditUserDataComponent extends _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_1__/* .TranslationBaseComponent */ .K {
  constructor(route, translateService, router, userIdService, usersService, authService) {
    super(translateService);
    this.route = route;
    this.translateService = translateService;
    this.router = router;
    this.userIdService = userIdService;
    this.usersService = usersService;
    this.authService = authService;
  }
  ngOnInit() {
    this.route.params.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .filter */ .p)(params => !!params), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .tap */ .M)(params => this.params = params), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .tap */ .M)(params => this.userIdService.userId = params.id), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .tap */ .M)(() => this.getUserProfile()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .untilDestroyed */ .s)(this)).subscribe();
  }
  goBack() {
    this.router.navigate(['/pages/users']);
  }
  getUserProfile() {
    var _this = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)(function* () {
      const {
        id
      } = _this.params;
      const user = yield _this.usersService.getUserById(id, ['role', 'tags']);
      if (user.role.name === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_6__/* .RolesEnum */ .$.SUPER_ADMIN) {
        /**
         * Redirect If Edit Super Admin Without Permission
         */
        const hasSuperAdminRole = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_7__/* .firstValueFrom */ ._)(_this.authService.hasRole([_gauzy_contracts__WEBPACK_IMPORTED_MODULE_6__/* .RolesEnum */ .$.SUPER_ADMIN]));
        if (!hasSuperAdminRole) {
          _this.router.navigate(['/pages/users']);
          return;
        }
      }
      _this.user = user;
    })();
  }
  ngOnDestroy() {}
  static {
    this.ɵfac = function EditUserDataComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || EditUserDataComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_router__WEBPACK_IMPORTED_MODULE_8__/* .ActivatedRoute */ .nX), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__/* .TranslateService */ .c$), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_router__WEBPACK_IMPORTED_MODULE_8__/* .Router */ .Ix), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_10__/* .UserIdService */ .y), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_11__/* .UsersService */ .g), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_12__/* .AuthService */ .u));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
      type: EditUserDataComponent,
      selectors: [["ngx-edit-user-data"]],
      standalone: false,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
      decls: 1,
      vars: 1,
      consts: [[4, "ngIf"], [3, "userSubmitted", "selectedUser", "allowRoleChange"]],
      template: function EditUserDataComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(0, EditUserDataComponent_ng_container_0_Template, 2, 2, "ng-container", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", !!ctx.user);
        }
      },
      dependencies: [_packages_ui_core_shared_src_lib_user_edit_profile_form_edit_profile_form_component__WEBPACK_IMPORTED_MODULE_13__/* .EditProfileFormComponent */ .h, _angular_common__WEBPACK_IMPORTED_MODULE_14__/* .NgIf */ .bT],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   ngx-profile[_ngcontent-%COMP%]     nb-card {\n  border-radius: 0 var(--border-radius) var(--border-radius) var(--border-radius);\n}"]
    });
  }
};
EditUserDataComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_15__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .UntilDestroy */ .d)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_15__/* .__metadata */ .Sn)("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_8__/* .ActivatedRoute */ .nX, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__/* .TranslateService */ .c$, _angular_router__WEBPACK_IMPORTED_MODULE_8__/* .Router */ .Ix, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_10__/* .UserIdService */ .y, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_11__/* .UsersService */ .g, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_12__/* .AuthService */ .u])], EditUserDataComponent);


/***/ }),

/***/ 26034:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ EditUserMutationComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73014);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13271);
/* harmony import */ var _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38546);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10936);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4846);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(71924);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(19223);
/* harmony import */ var _packages_ui_core_shared_src_lib_user_user_multi_select_user_multi_select_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(17173);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(56383);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(14572);















const _c0 = ["userBasicInfo"];
function EditUserMutationComponent_form_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "form", 9)(1, "ga-user-multi-select", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("selectedChange", function EditUserMutationComponent_form_12_Template_ga_user_multi_select_selectedChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.onUsersSelected($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("formGroup", ctx_r1.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("selectedUserIds", ctx_r1.selectedUsersIds)("allUsers", ctx_r1.users);
  }
}
let EditUserMutationComponent = /*#__PURE__*/(() => {
  class EditUserMutationComponent extends _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_1__/* .TranslationBaseComponent */ .K {
    constructor(fb, usersOrganizationsService, translateService, store) {
      super(translateService);
      this.fb = fb;
      this.usersOrganizationsService = usersOrganizationsService;
      this.translateService = translateService;
      this.store = store;
      this.canceled = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .bkB();
      this.addOrEditUser = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .bkB();
      this.disableButton = true;
    }
    ngOnInit() {
      this._initializeForm();
      this._loadUsers();
    }
    _initializeForm() {
      var _this = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(function* () {
        _this.form = _this.fb.group({
          users: _this.users
        });
      })();
    }
    _loadUsers() {
      var _this2 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(function* () {
        const {
          tenantId
        } = _this2.store.user;
        const {
          id: organizationId
        } = _this2.store.selectedOrganization;
        const {
          items
        } = yield _this2.usersOrganizationsService.getAll(['user', 'user.role', 'user.tags'], {
          tenantId
        });
        const usersVm = [];
        const existedUsers = items.filter(item => item.organizationId === organizationId).map(item => item.userId);
        for (const orgUser of items.filter(item => !existedUsers.includes(item.userId))) {
          if (orgUser.isActive && orgUser.user.role.name !== _gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__/* .RolesEnum */ .$.EMPLOYEE) {
            usersVm.push({
              firstName: orgUser.user.firstName || '',
              lastName: orgUser.user.lastName || '',
              email: orgUser.user.email,
              id: orgUser.userId,
              isActive: orgUser.isActive,
              imageUrl: orgUser.user.imageUrl,
              user: orgUser.user
            });
          }
        }
        const distinct = usersVm.reduce((acc, curr) => acc.some(user => user.id === curr.id) ? acc : [...acc, curr], []);
        _this2.users = distinct;
      })();
    }
    onUsersSelected(users) {
      this.selectedUsersIds = users;
      if (this.selectedUsersIds.length > 0) {
        this.disableButton = false;
      } else {
        this.disableButton = true;
      }
    }
    cancel() {
      this.canceled.emit();
    }
    submitForm() {
      var _this3 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(function* () {
        if (_this3.form.valid) {
          for (let i = 0; i < _this3.selectedUsersIds.length; i++) {
            const organization = _this3.store.selectedOrganization;
            _this3.addOrEditUser.emit({
              userId: _this3.selectedUsersIds[i],
              organizationId: organization.id,
              tenantId: organization.tenantId,
              isActive: true
            });
          }
        }
      })();
    }
    static {
      this.ɵfac = function EditUserMutationComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || EditUserMutationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .UntypedFormBuilder */ .ze), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_5__/* .UsersOrganizationsService */ .K), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__/* .TranslateService */ .c$), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_7__/* .Store */ .il));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: EditUserMutationComponent,
        selectors: [["ga-edit-user-mutation"]],
        viewQuery: function EditUserMutationComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵviewQuery"] */ .GBs(_c0, 5);
          }
          if (rf & 2) {
            let _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵqueryRefresh"] */ .mGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵloadQuery"] */ .lsd()) && (ctx.userBasicInfo = _t.first);
          }
        },
        inputs: {
          userOrganization: "userOrganization",
          organization: "organization"
        },
        outputs: {
          canceled: "canceled",
          addOrEditUser: "addOrEditUser"
        },
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
        decls: 20,
        vars: 14,
        consts: [[1, "label", "info-font", 3, "nbTooltip"], ["icon", "info-outline"], [1, "form-group", "m-0"], [1, "form-group", "d-flex", "flex-row", "justify-content-between", "align-items-center", "m-0"], [1, "form-group", "w-100", "p-0"], [3, "formGroup", 4, "ngIf"], [1, "form-group", "d-flex", "flex-row", "add-organization-action"], ["nbButton", "", "outline", "", "status", "basic", 1, "mr-3", 3, "click"], ["nbButton", "", "status", "success", 3, "click", "disabled"], [3, "formGroup"], [3, "selectedChange", "selectedUserIds", "allUsers"]],
        template: function EditUserMutationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-card")(1, "nb-card-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(3, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(4, "span", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(5, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(6, " \u00A0 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(7, "nb-icon", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(8, "nb-card-body")(9, "div", 2)(10, "div", 3)(11, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(12, EditUserMutationComponent_form_12_Template, 2, 3, "form", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(13, "div", 6)(14, "button", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function EditUserMutationComponent_Template_button_click_14_listener() {
              return ctx.cancel();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(16, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(17, "button", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function EditUserMutationComponent_Template_button_click_17_listener() {
              return ctx.submitForm();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(19, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()()()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI("", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(3, 6, "USERS_PAGE.ADD_EXISTING_USER"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(5, 8, "USERS_PAGE.ADD_EXISTING_USER_TOOLTIP"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.form);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(16, 10, "BUTTONS.CANCEL"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("disabled", ctx.disableButton);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(19, 12, "BUTTONS.SAVE"), " ");
          }
        },
        dependencies: [_packages_ui_core_shared_src_lib_user_user_multi_select_user_multi_select_component__WEBPACK_IMPORTED_MODULE_8__/* .UserSelectComponent */ .B, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbCardComponent */ .SrT, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbCardBodyComponent */ .KH5, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbCardHeaderComponent */ .zJv, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbButtonComponent */ .YP2, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbIconComponent */ .tHu, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbTooltipDirective */ .BmQ, _angular_common__WEBPACK_IMPORTED_MODULE_10__/* .NgIf */ .bT, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* ["ɵNgNoValidate"] */ .qT, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .NgControlStatusGroup */ .cb, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .FormGroupDirective */ .j4, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__/* .TranslatePipe */ .D9],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   i[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n}\n[dir=ltr]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n[dir=rtl]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--gauzy-text-color-1);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(245, 109, 88, 0.3);\n  border-width: 2px;\n  color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(245, 109, 88, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 16px;\n  letter-spacing: 0em;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(126, 126, 143, 0.3);\n  border-width: 2px;\n  color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(126, 126, 143, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(37, 184, 105, 0.3);\n  border-width: 2px;\n  color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(37, 184, 105, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[disabled][_ngcontent-%COMP%], \n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic.btn-disabled[_ngcontent-%COMP%] {\n  background-color: var(--button-outline-basic-disabled-background-color);\n  border-color: var(--button-outline-basic-disabled-border-color);\n  color: var(--button-outline-basic-disabled-text-color);\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].primary.appearance-filled.status-primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  border: unset;\n  background-color: var(--color-primary-transparent-default);\n  box-shadow: var(--gauzy-shadow) 0, 0, 0, 0.15;\n}\n[dir=ltr]   [_nghost-%COMP%]     input, \n[dir=ltr]   [_nghost-%COMP%]     textarea {\n  text-align: start;\n}\n[dir=rtl]   [_nghost-%COMP%]     input, \n[dir=rtl]   [_nghost-%COMP%]     textarea {\n  text-align: end;\n}\n[_nghost-%COMP%]     input, \n[_nghost-%COMP%]     nb-select.appearance-outline.status-basic .select-button, \n[_nghost-%COMP%]     .ng-select .ng-select-container {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n  height: 42px !important;\n}\n[_nghost-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder, \n[_nghost-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {\n  top: unset !important;\n}\n[_nghost-%COMP%]     label, \n[_nghost-%COMP%]     .label {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  color: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]     textarea {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n}\n[_nghost-%COMP%]     .ng-select .ng-select-container input, \n[_nghost-%COMP%]     nb-tag-list input {\n  background-color: unset !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n}\n\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background: rgba(50, 50, 50, 0.06);\n}\n[_nghost-%COMP%]   .add-organization-action[_ngcontent-%COMP%] {\n  gap: 1rem;\n}\n[dir=ltr]   [_nghost-%COMP%]   .add-organization-action[_ngcontent-%COMP%] {\n  margin-left: 1rem;\n}\n[dir=rtl]   [_nghost-%COMP%]   .add-organization-action[_ngcontent-%COMP%] {\n  margin-right: 1rem;\n}\n[_nghost-%COMP%]     input, \n[_nghost-%COMP%]     nb-select.appearance-outline.status-basic .select-button, \n[_nghost-%COMP%]     .ng-select .ng-select-container {\n  background-color: var(--gauzy-card-1) !important;\n  border: none;\n  height: 42px !important;\n}\n[_nghost-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder, \n[_nghost-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {\n  top: unset !important;\n}\n[_nghost-%COMP%]     label, \n[_nghost-%COMP%]     .label {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  color: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]     textarea {\n  background-color: var(--gauzy-card-1) !important;\n  border: none;\n}\n[_nghost-%COMP%]     .ng-select .ng-select-container input, \n[_nghost-%COMP%]     nb-tag-list input {\n  background-color: unset !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n}"]
      });
    }
  }
  return EditUserMutationComponent;
})();

/***/ }),

/***/ 27933:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   m: () => (/* binding */ EditUserOrganizationsMutationComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73014);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38546);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10936);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(22688);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4846);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(18339);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(71924);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(19223);
/* harmony import */ var _packages_ui_core_shared_src_lib_user_user_organizations_multi_select_user_organizations_multi_select_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(35945);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(56383);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(14572);













function EditUserOrganizationsMutationComponent_form_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "form", 8)(1, "ga-user-organizations-multi-select", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("selectedChange", function EditUserOrganizationsMutationComponent_form_8_Template_ga_user_organizations_multi_select_selectedChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.onOrganizationsSelected($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("formGroup", ctx_r1.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("selectedOrganizationsId", ctx_r1.selectedOrganizationsId)("allOrganizations", ctx_r1.organizations);
  }
}
let EditUserOrganizationsMutationComponent = /*#__PURE__*/(() => {
  class EditUserOrganizationsMutationComponent extends _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_1__/* .TranslationBaseComponent */ .K {
    constructor(fb, organizationsService, usersOrganizationService, translateService, userIdService, store) {
      super(translateService);
      this.fb = fb;
      this.organizationsService = organizationsService;
      this.usersOrganizationService = usersOrganizationService;
      this.translateService = translateService;
      this.userIdService = userIdService;
      this.store = store;
      this.canceled = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .bkB();
      this.addOrg = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .bkB();
    }
    ngOnInit() {
      this._loadOrganizations();
      this._initializeForm();
    }
    _initializeForm() {
      var _this = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(function* () {
        _this.form = _this.fb.group({
          organizations: _this.organizations
        });
      })();
    }
    _loadOrganizations() {
      var _this2 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(function* () {
        const {
          tenantId
        } = _this2.store.user;
        const users = yield _this2.usersOrganizationService.getAll(['user', 'user.role'], {
          tenantId
        });
        const {
          items
        } = yield _this2.usersOrganizationService.getAll([], {
          userId: _this2.userIdService.userId,
          tenantId
        });
        _this2.selectedUserId = items[0].userId;
        const all_orgs = yield _this2.organizationsService.getAll({
          tenantId
        });
        const excludedOrgs = users.items.filter(item => item.user.id === items[0].userId);
        const filtered = all_orgs.items.filter(a => !excludedOrgs.filter(b => b.organizationId === a.id).length);
        _this2.organizations = filtered;
      })();
    }
    cancel() {
      this.canceled.emit();
    }
    onOrganizationsSelected(organizations) {
      this.selectedOrganizationsId = organizations;
    }
    submitForm() {
      var _this3 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(function* () {
        if (_this3.form.valid) {
          const {
            tenantId
          } = _this3.store.user;
          for (let i = 0; i < _this3.selectedOrganizationsId.length; i++) {
            _this3.addOrg.emit({
              userId: _this3.selectedUserId,
              organizationId: _this3.selectedOrganizationsId[i],
              tenantId,
              isActive: true
            });
          }
        }
      })();
    }
    static {
      this.ɵfac = function EditUserOrganizationsMutationComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || EditUserOrganizationsMutationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .UntypedFormBuilder */ .ze), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_4__/* .OrganizationsService */ .k), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_5__/* .UsersOrganizationsService */ .K), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__/* .TranslateService */ .c$), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_7__/* .UserIdService */ .y), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_8__/* .Store */ .il));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: EditUserOrganizationsMutationComponent,
        selectors: [["ga-edit-user-organizations-mutation"]],
        inputs: {
          organization: "organization"
        },
        outputs: {
          canceled: "canceled",
          addOrg: "addOrg"
        },
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
        decls: 16,
        vars: 10,
        consts: [[1, "m-0", "pb-0"], [1, "form-group"], [1, "form-group", "d-flex", "flex-row", "justify-content-between", "align-items-center", "m-0"], [1, "form-group", "w-100", "p-0"], [3, "formGroup", 4, "ngIf"], [1, "form-group", "d-flex", "flex-row", "ml-3", "add-organization-action"], ["nbButton", "", "outline", "", "status", "basic", 3, "click"], ["nbButton", "", "status", "success", 3, "click"], [3, "formGroup"], [3, "selectedChange", "selectedOrganizationsId", "allOrganizations"]],
        template: function EditUserOrganizationsMutationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-card", 0)(1, "nb-card-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(3, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(4, "nb-card-body")(5, "div", 1)(6, "div", 2)(7, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(8, EditUserOrganizationsMutationComponent_form_8_Template, 2, 3, "form", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(9, "div", 5)(10, "button", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function EditUserOrganizationsMutationComponent_Template_button_click_10_listener() {
              return ctx.cancel();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(12, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(13, "button", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function EditUserOrganizationsMutationComponent_Template_button_click_13_listener() {
              return ctx.submitForm();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(15, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()()()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(3, 4, "USERS_PAGE.ADD_EXISTING_ORGANIZATION"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.form);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(12, 6, "BUTTONS.CANCEL"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(15, 8, "BUTTONS.SAVE"), " ");
          }
        },
        dependencies: [_packages_ui_core_shared_src_lib_user_user_organizations_multi_select_user_organizations_multi_select_component__WEBPACK_IMPORTED_MODULE_9__/* .UserOrganizationsSelectComponent */ .z, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__/* .NbCardComponent */ .SrT, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__/* .NbCardBodyComponent */ .KH5, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__/* .NbCardHeaderComponent */ .zJv, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__/* .NbButtonComponent */ .YP2, _angular_common__WEBPACK_IMPORTED_MODULE_11__/* .NgIf */ .bT, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* ["ɵNgNoValidate"] */ .qT, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .NgControlStatusGroup */ .cb, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .FormGroupDirective */ .j4, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__/* .TranslatePipe */ .D9],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   i[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n}\n[dir=ltr]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n[dir=rtl]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--gauzy-text-color-1);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(245, 109, 88, 0.3);\n  border-width: 2px;\n  color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(245, 109, 88, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 16px;\n  letter-spacing: 0em;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(126, 126, 143, 0.3);\n  border-width: 2px;\n  color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(126, 126, 143, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(37, 184, 105, 0.3);\n  border-width: 2px;\n  color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(37, 184, 105, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[disabled][_ngcontent-%COMP%], \n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic.btn-disabled[_ngcontent-%COMP%] {\n  background-color: var(--button-outline-basic-disabled-background-color);\n  border-color: var(--button-outline-basic-disabled-border-color);\n  color: var(--button-outline-basic-disabled-text-color);\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].primary.appearance-filled.status-primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  border: unset;\n  background-color: var(--color-primary-transparent-default);\n  box-shadow: var(--gauzy-shadow) 0, 0, 0, 0.15;\n}\n[dir=ltr]   [_nghost-%COMP%]     input, \n[dir=ltr]   [_nghost-%COMP%]     textarea {\n  text-align: start;\n}\n[dir=rtl]   [_nghost-%COMP%]     input, \n[dir=rtl]   [_nghost-%COMP%]     textarea {\n  text-align: end;\n}\n[_nghost-%COMP%]     input, \n[_nghost-%COMP%]     nb-select.appearance-outline.status-basic .select-button, \n[_nghost-%COMP%]     .ng-select .ng-select-container {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n  height: 42px !important;\n}\n[_nghost-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder, \n[_nghost-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {\n  top: unset !important;\n}\n[_nghost-%COMP%]     label, \n[_nghost-%COMP%]     .label {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  color: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]     textarea {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n}\n[_nghost-%COMP%]     .ng-select .ng-select-container input, \n[_nghost-%COMP%]     nb-tag-list input {\n  background-color: unset !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n}\n\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background: rgba(50, 50, 50, 0.06);\n}\n[_nghost-%COMP%]   .add-organization-action[_ngcontent-%COMP%] {\n  gap: 1rem;\n}\n[dir=ltr]   [_nghost-%COMP%]   .add-organization-action[_ngcontent-%COMP%] {\n  margin-left: 1rem;\n}\n[dir=rtl]   [_nghost-%COMP%]   .add-organization-action[_ngcontent-%COMP%] {\n  margin-right: 1rem;\n}\n[_nghost-%COMP%]     input, \n[_nghost-%COMP%]     nb-select.appearance-outline.status-basic .select-button, \n[_nghost-%COMP%]     .ng-select .ng-select-container {\n  background-color: var(--gauzy-card-1) !important;\n  border: none;\n  height: 42px !important;\n}\n[_nghost-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder, \n[_nghost-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {\n  top: unset !important;\n}\n[_nghost-%COMP%]     label, \n[_nghost-%COMP%]     .label {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  color: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]     textarea {\n  background-color: var(--gauzy-card-1) !important;\n  border: none;\n}\n[_nghost-%COMP%]     .ng-select .ng-select-container input, \n[_nghost-%COMP%]     nb-tag-list input {\n  background-color: unset !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n}"]
      });
    }
  }
  return EditUserOrganizationsMutationComponent;
})();

/***/ }),

/***/ 28459:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ EditUserOrganizationsComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(73014);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(64411);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71181);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(73246);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(72781);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24237);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(36950);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(19223);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(9620);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(23423);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(56383);
/* harmony import */ var _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38546);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4846);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(15480);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(22688);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(71924);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(57044);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(55101);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(14572);
/* harmony import */ var _packages_ui_core_shared_src_lib_directives_img_directive__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(71466);
/* harmony import */ var _edit_user_organizations_mutation_edit_user_organizations_mutation_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(27933);



















const _c0 = a0 => ({
  name: a0
});
function EditUserOrganizationsComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(1, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function EditUserOrganizationsComponent_ng_container_2_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.showAddCard = !ctx_r1.showAddCard);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(2, "nb-icon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI("", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(4, 1, "BUTTONS.ADD"), " ");
  }
}
function EditUserOrganizationsComponent_ga_edit_user_organizations_mutation_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "ga-edit-user-organizations-mutation", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("canceled", function EditUserOrganizationsComponent_ga_edit_user_organizations_mutation_4_Template_ga_edit_user_organizations_mutation_canceled_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.cancel());
    })("addOrg", function EditUserOrganizationsComponent_ga_edit_user_organizations_mutation_4_Template_ga_edit_user_organizations_mutation_addOrg_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.addOrg($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
}
function EditUserOrganizationsComponent_nb_card_body_5_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(1, "nb-card", 9)(2, "nb-card-body");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(3, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(6, "nb-actions", 11)(7, "nb-action", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function EditUserOrganizationsComponent_nb_card_body_5_ng_container_5_Template_nb_action_click_7_listener() {
      const organization_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r4).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.remove(organization_r5.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const organization_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("src", organization_r5.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵsanitizeUrl"] */ .B4B);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(organization_r5.name);
  }
}
function EditUserOrganizationsComponent_nb_card_body_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-card-body")(1, "div", 7)(2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(5, EditUserOrganizationsComponent_nb_card_body_5_ng_container_5_Template, 8, 2, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind2"] */ .i5U(4, 2, "ORGANIZATIONS_PAGE.EDIT.USER_ORGANIZATIONS", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction1"] */ .eq3(5, _c0, ctx_r1.selectedUserName)), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx_r1.organizations);
  }
}
let EditUserOrganizationsComponent = class EditUserOrganizationsComponent extends _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_1__/* .TranslationBaseComponent */ .K {
  constructor(translateService, userOrganizationsService, toastrService, organizationsService, dialogService, store, router, usersService, route) {
    super(translateService);
    this.translateService = translateService;
    this.userOrganizationsService = userOrganizationsService;
    this.toastrService = toastrService;
    this.organizationsService = organizationsService;
    this.dialogService = dialogService;
    this.store = store;
    this.router = router;
    this.usersService = usersService;
    this.route = route;
    this.organizations = [];
    this.subject$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__/* .Subject */ .B();
  }
  ngOnInit() {
    this.subject$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .debounceTime */ .B)(300), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .tap */ .M)(() => this.loading = true), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .tap */ .M)(() => this.showAddCard = false), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .tap */ .M)(() => this.loadOrganizations()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .untilDestroyed */ .s)(this)).subscribe();
    this.route.parent.params.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .filter */ .p)(params => !!params), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .tap */ .M)(params => this.paramId = params.id), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .tap */ .M)(() => this.subject$.next(true)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .untilDestroyed */ .s)(this)).subscribe();
  }
  addOrg(user) {
    var _this = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A)(function* () {
      if (user.isActive) {
        yield (0,rxjs__WEBPACK_IMPORTED_MODULE_8__/* .firstValueFrom */ ._)(_this.userOrganizationsService.create(user));
        _this.toastrService.success(_this.getTranslation('NOTES.ORGANIZATIONS.ADD_NEW_USER_TO_ORGANIZATION', {
          username: _this.selectedUserName,
          orgname: _this.getTranslation('ORGANIZATIONS_PAGE.EDIT.ADDED_TO_ORGANIZATION')
        }));
        _this.subject$.next(true);
      }
    })();
  }
  remove(id) {
    var _this2 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A)(function* () {
      const {
        tenantId
      } = _this2.store.user;
      const {
        items
      } = yield _this2.userOrganizationsService.getAll(['user', 'user.role'], {
        tenantId,
        userId: _this2.selectedUserId
      });
      let counter = 0;
      let userName;
      _this2.userToRemove = items.find(orgUser => orgUser.organizationId === id && orgUser.isActive);
      if (!_this2.userToRemove?.user) {
        _this2.toastrService.danger('User organization record not found');
        return;
      }
      userName = [_this2.userToRemove.user.firstName, _this2.userToRemove.user.lastName].filter(Boolean).join(' ');
      _this2.orgUserId = _this2.userToRemove.id;
      counter = items.filter(orgUser => orgUser.isActive).length;
      if (counter - 1 < 1) {
        _this2.dialogService.open(_gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_9__/* .DeleteConfirmationComponent */ .u, {
          context: {
            recordType: userName + ' ' + _this2.getTranslation('FORM.DELETE_CONFIRMATION.DELETE_USER')
          }
        }).onClose.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .untilDestroyed */ .s)(_this2)).subscribe(/*#__PURE__*/function () {
          var _ref = (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A)(function* (result) {
            if (result) {
              try {
                yield _this2.usersService.delete(_this2.userToRemove.user.id, _this2.userToRemove);
                _this2.toastrService.success(_this2.getTranslation('ORGANIZATIONS_PAGE.EDIT.USER_WAS_DELETED', {
                  name: userName
                }));
                _this2.router.navigate(['/pages/users']);
              } catch (error) {
                _this2.toastrService.danger(error);
              }
            }
          });
          return function (_x) {
            return _ref.apply(this, arguments);
          };
        }());
      } else {
        _this2.dialogService.open(_gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_9__/* .DeleteConfirmationComponent */ .u, {
          context: {
            recordType: userName + ' ' + _this2.getTranslation('FORM.DELETE_CONFIRMATION.USER_RECORD')
          }
        }).onClose.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .untilDestroyed */ .s)(_this2)).subscribe(/*#__PURE__*/function () {
          var _ref2 = (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A)(function* (result) {
            if (result) {
              try {
                yield _this2.userOrganizationsService.removeUserFromOrg(_this2.orgUserId);
                _this2.toastrService.success(_this2.getTranslation('ORGANIZATIONS_PAGE.EDIT.USER_WAS_REMOVED', {
                  name: userName
                }));
                _this2.loadOrganizations();
              } catch (error) {
                _this2.toastrService.danger(error);
              }
            }
          });
          return function (_x2) {
            return _ref2.apply(this, arguments);
          };
        }());
      }
    })();
  }
  loadOrganizations() {
    var _this3 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A)(function* () {
      const {
        tenantId
      } = _this3.store.user;
      const users = yield _this3.userOrganizationsService.getAll(['user', 'user.role'], {
        tenantId
      });
      const {
        items
      } = yield _this3.userOrganizationsService.getAll(['user'], {
        userId: _this3.paramId,
        tenantId
      });
      _this3.selectedUserId = items[0].userId;
      const user = items[0]['user'];
      _this3.selectedUserName = user.name || '';
      const {
        items: organizations
      } = yield _this3.organizationsService.getAll({
        tenantId
      });
      const includedOrgs = users.items.filter(item => item.user.id === items[0].userId);
      const filtered = organizations.filter(a => includedOrgs.filter(b => b.organizationId === a.id).length);
      _this3.organizations = filtered;
      _this3.loading = false;
    })();
  }
  cancel() {
    this.showAddCard = !this.showAddCard;
  }
  ngOnDestroy() {}
  static {
    this.ɵfac = function EditUserOrganizationsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || EditUserOrganizationsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__/* .TranslateService */ .c$), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_11__/* .UsersOrganizationsService */ .K), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_12__/* .ToastrService */ .t), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_13__/* .OrganizationsService */ .k), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbDialogService */ .S0W), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_15__/* .Store */ .il), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_router__WEBPACK_IMPORTED_MODULE_16__/* .Router */ .Ix), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_17__/* .UsersService */ .g), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_router__WEBPACK_IMPORTED_MODULE_16__/* .ActivatedRoute */ .nX));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
      type: EditUserOrganizationsComponent,
      selectors: [["ngx-edit-user-organization"]],
      standalone: false,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
      decls: 6,
      vars: 4,
      consts: [["nbSpinnerStatus", "primary", "nbSpinnerSize", "large", 3, "nbSpinner"], [4, "ngIf"], [1, "edit-user-organizations"], [3, "canceled", "addOrg", 4, "ngIf"], ["nbButton", "", "status", "success", "size", "small", 1, "float-right", 3, "click"], ["icon", "plus-outline"], [3, "canceled", "addOrg"], [1, "mb-3"], [4, "ngFor", "ngForOf"], [1, "organization"], ["alt", "Smiley face", "height", "40", "width", "40", 1, "organization-image", 3, "src"], ["e", "medium", 1, "float-right"], ["icon", "close", 1, "d-inline", "pr-0", 3, "click"]],
      template: function EditUserOrganizationsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-card", 0)(1, "nb-card-header");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(2, EditUserOrganizationsComponent_ng_container_2_Template, 5, 3, "ng-container", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(3, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(4, EditUserOrganizationsComponent_ga_edit_user_organizations_mutation_4_Template, 1, 0, "ga-edit-user-organizations-mutation", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(5, EditUserOrganizationsComponent_nb_card_body_5_Template, 6, 7, "nb-card-body", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("nbSpinner", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", !ctx.showAddCard);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.showAddCard);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.organizations == null ? null : ctx.organizations.length);
        }
      },
      dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbActionComponent */ .kK0, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbActionsComponent */ .pb1, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbCardComponent */ .SrT, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbCardBodyComponent */ .KH5, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbCardHeaderComponent */ .zJv, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbButtonComponent */ .YP2, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbIconComponent */ .tHu, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbSpinnerDirective */ .zwc, _angular_common__WEBPACK_IMPORTED_MODULE_18__/* .NgForOf */ .Sq, _angular_common__WEBPACK_IMPORTED_MODULE_18__/* .NgIf */ .bT, _packages_ui_core_shared_src_lib_directives_img_directive__WEBPACK_IMPORTED_MODULE_19__/* .ImgDirective */ .z, _edit_user_organizations_mutation_edit_user_organizations_mutation_component__WEBPACK_IMPORTED_MODULE_20__/* .EditUserOrganizationsMutationComponent */ .m, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__/* .TranslatePipe */ .D9],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n}\n[_nghost-%COMP%]   nb-card.organization[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-3);\n  margin: 0 0 0.5rem 0;\n}\n[dir=ltr]   [_nghost-%COMP%]   nb-card.organization[_ngcontent-%COMP%]   .organization-image[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n[dir=rtl]   [_nghost-%COMP%]   nb-card.organization[_ngcontent-%COMP%]   .organization-image[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n[dir=rtl]   [_nghost-%COMP%]   nb-actions[_ngcontent-%COMP%] {\n  float: left !important;\n}\n\n.edit-user-organizations[_ngcontent-%COMP%] {\n  width: 50%;\n}\n\n@media only screen and (max-width: 1200px) {\n  .edit-user-organizations[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}"]
    });
  }
};
EditUserOrganizationsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_21__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .UntilDestroy */ .d)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_21__/* .__metadata */ .Sn)("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__/* .TranslateService */ .c$, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_11__/* .UsersOrganizationsService */ .K, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_12__/* .ToastrService */ .t, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_13__/* .OrganizationsService */ .k, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbDialogService */ .S0W, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_15__/* .Store */ .il, _angular_router__WEBPACK_IMPORTED_MODULE_16__/* .Router */ .Ix, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_17__/* .UsersService */ .g, _angular_router__WEBPACK_IMPORTED_MODULE_16__/* .ActivatedRoute */ .nX])], EditUserOrganizationsComponent);


/***/ }),

/***/ 30619:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ UsersRoutingModule)
/* harmony export */ });
/* unused harmony export redirectTo */
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(908);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(17785);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4106);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(86616);
/* harmony import */ var _edit_user_profile_edit_user_profile_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7236);
/* harmony import */ var _users_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17659);
/* harmony import */ var _manage_user_invite_manage_user_invite_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(12448);
/* harmony import */ var _edit_user_profile_edit_user_data_edit_user_data_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18427);
/* harmony import */ var _edit_user_profile_edit_user_organizations_edit_user_organizations_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(28459);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(26860);










function redirectTo() {
  return '/pages/dashboard';
}
const routes = [{
  path: '',
  component: _users_component__WEBPACK_IMPORTED_MODULE_1__/* .UsersComponent */ .C,
  canActivate: [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_4__/* .PermissionsGuard */ .a],
  data: {
    permissions: {
      only: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_5__/* .PermissionsEnum */ .U.ORG_USERS_VIEW],
      redirectTo
    }
  }
}, {
  path: 'edit/:id',
  component: _edit_user_profile_edit_user_profile_component__WEBPACK_IMPORTED_MODULE_0__/* .EditUserProfileComponent */ .M,
  canActivate: [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_4__/* .PermissionsGuard */ .a],
  data: {
    permissions: {
      only: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_5__/* .PermissionsEnum */ .U.ORG_USERS_EDIT],
      redirectTo
    }
  },
  children: [{
    path: '',
    component: _edit_user_profile_edit_user_data_edit_user_data_component__WEBPACK_IMPORTED_MODULE_2__/* .EditUserDataComponent */ .j,
    data: {
      selectors: {
        project: false,
        employee: false,
        date: false,
        organization: false
      }
    }
  }, {
    path: 'organizations',
    component: _edit_user_profile_edit_user_organizations_edit_user_organizations_component__WEBPACK_IMPORTED_MODULE_3__/* .EditUserOrganizationsComponent */ .T,
    data: {
      selectors: {
        project: false,
        employee: false,
        date: false,
        organization: false
      }
    }
  }]
}, {
  path: 'invites',
  component: _manage_user_invite_manage_user_invite_component__WEBPACK_IMPORTED_MODULE_6__/* .ManageUserInviteComponent */ .v,
  canActivate: [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_7__/* .InviteGuard */ .D],
  data: {
    expectedPermissions: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_5__/* .PermissionsEnum */ .U.ORG_INVITE_EDIT, _gauzy_contracts__WEBPACK_IMPORTED_MODULE_5__/* .PermissionsEnum */ .U.ORG_INVITE_VIEW]
  }
}];
let UsersRoutingModule = /*#__PURE__*/(() => {
  class UsersRoutingModule {
    static {
      this.ɵfac = function UsersRoutingModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || UsersRoutingModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵdefineNgModule"] */ .$C({
        type: UsersRoutingModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__/* .RouterModule */ .iI.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_9__/* .RouterModule */ .iI]
      });
    }
  }
  return UsersRoutingModule;
})();

/***/ }),

/***/ 66277:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   j: () => (/* binding */ EditEmployeeMembershipFormModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14572);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10936);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56383);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(55567);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19223);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);







let EditEmployeeMembershipFormModule = /*#__PURE__*/(() => {
  class EditEmployeeMembershipFormModule {
    static {
      this.ɵfac = function EditEmployeeMembershipFormModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || EditEmployeeMembershipFormModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .$C({
        type: EditEmployeeMembershipFormModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .CommonModule */ .MD, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .FormsModule */ .YN, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .ReactiveFormsModule */ .X1, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbCardModule */ .lVF, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbButtonModule */ .P5N, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__/* .NgSelectModule */ .MQ, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbIconModule */ .clu, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbActionsModule */ ._A2, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__/* .TranslateModule */ .h.forChild()]
      });
    }
  }
  return EditEmployeeMembershipFormModule;
})();

/***/ }),

/***/ 84154:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UsersModule: () => (/* binding */ UsersModule)
/* harmony export */ });
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(56383);
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(79475);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(55567);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(19223);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(22688);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4846);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(86616);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(18339);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(61444);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(57832);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(86888);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(11388);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(10548);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(54462);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(8252);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(41030);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(27478);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(66277);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(98722);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(80784);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(38834);
/* harmony import */ var _users_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30619);
/* harmony import */ var _users_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17659);
/* harmony import */ var _edit_user_profile_edit_user_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7236);
/* harmony import */ var _edit_user_mutation_edit_user_mutation_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(26034);
/* harmony import */ var _manage_user_invite_manage_user_invite_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(12448);
/* harmony import */ var _organizations_organizations_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65438);
/* harmony import */ var _edit_user_profile_edit_user_organizations_edit_user_organizations_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(28459);
/* harmony import */ var _edit_user_profile_edit_user_data_edit_user_data_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(18427);
/* harmony import */ var _edit_user_profile_edit_user_organizations_edit_user_organizations_mutation_edit_user_organizations_mutation_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(27933);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(26860);



















const COMPONENTS = [_users_component__WEBPACK_IMPORTED_MODULE_1__/* .UsersComponent */ .C, _edit_user_profile_edit_user_profile_component__WEBPACK_IMPORTED_MODULE_2__/* .EditUserProfileComponent */ .M, _manage_user_invite_manage_user_invite_component__WEBPACK_IMPORTED_MODULE_6__/* .ManageUserInviteComponent */ .v, _edit_user_mutation_edit_user_mutation_component__WEBPACK_IMPORTED_MODULE_7__/* .EditUserMutationComponent */ .S, _edit_user_profile_edit_user_organizations_edit_user_organizations_component__WEBPACK_IMPORTED_MODULE_4__/* .EditUserOrganizationsComponent */ .T, _edit_user_profile_edit_user_data_edit_user_data_component__WEBPACK_IMPORTED_MODULE_5__/* .EditUserDataComponent */ .j, _edit_user_profile_edit_user_organizations_edit_user_organizations_mutation_edit_user_organizations_mutation_component__WEBPACK_IMPORTED_MODULE_8__/* .EditUserOrganizationsMutationComponent */ .m];
let UsersModule = /*#__PURE__*/(() => {
  class UsersModule {
    static {
      this.ɵfac = function UsersModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || UsersModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵdefineNgModule"] */ .$C({
        type: UsersModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵdefineInjector"] */ .G2t({
        providers: [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_10__/* .OrganizationsService */ .k, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_11__/* .UsersOrganizationsService */ .K, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_12__/* .InviteGuard */ .D, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_13__/* .UserIdService */ .y],
        imports: [_gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_14__/* .TagsColorInputModule */ .x, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_15__/* .TableComponentsModule */ .p, _nebular_theme__WEBPACK_IMPORTED_MODULE_16__/* .NbSidebarModule */ .Rly, _nebular_theme__WEBPACK_IMPORTED_MODULE_16__/* .NbLayoutModule */ .llX, _users_routing_module__WEBPACK_IMPORTED_MODULE_0__/* .UsersRoutingModule */ .Z, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_17__/* .UserMultiSelectModule */ .z, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_18__/* .UserOrganizationsMultiSelectModule */ .h, _organizations_organizations_module__WEBPACK_IMPORTED_MODULE_3__.OrganizationsModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_16__/* .NbActionsModule */ ._A2, _nebular_theme__WEBPACK_IMPORTED_MODULE_16__/* .NbCardModule */ .lVF, _nebular_theme__WEBPACK_IMPORTED_MODULE_16__/* .NbButtonModule */ .P5N, _nebular_theme__WEBPACK_IMPORTED_MODULE_16__/* .NbInputModule */ .pty, _nebular_theme__WEBPACK_IMPORTED_MODULE_16__/* .NbIconModule */ .clu, _nebular_theme__WEBPACK_IMPORTED_MODULE_16__/* .NbDialogModule */ .nZv.forChild(), _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_19__/* .UserMutationModule */ .f, _nebular_theme__WEBPACK_IMPORTED_MODULE_16__/* .NbTooltipModule */ .IB0, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_20__/* .NgSelectModule */ .MQ, _nebular_theme__WEBPACK_IMPORTED_MODULE_16__/* .NbSelectModule */ .VcP, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_21__/* .ImageUploaderModule */ .M, _nebular_theme__WEBPACK_IMPORTED_MODULE_16__/* .NbBadgeModule */ .iEK, _nebular_theme__WEBPACK_IMPORTED_MODULE_16__/* .NbRouteTabsetModule */ .x$5, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_22__/* .TranslateModule */ .h.forChild(), _nebular_theme__WEBPACK_IMPORTED_MODULE_16__/* .NbSpinnerModule */ .gYs, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_23__/* .EditProfileFormModule */ .c, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_24__/* .InviteMutationModule */ .h, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_25__/* .InviteTableModule */ .s, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_26__/* .EditEmployeeMembershipFormModule */ .j, ngx_permissions__WEBPACK_IMPORTED_MODULE_27__/* .NgxPermissionsModule */ .Ov.forChild(), _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_28__/* .SmartDataViewLayoutModule */ .H, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_29__/* .CardGridModule */ .n, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_30__/* .SharedModule */ .G]
      });
    }
  }
  return UsersModule;
})();

/***/ }),

/***/ 87791:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Y: () => (/* binding */ TagsColorFilterComponent)
/* harmony export */ });
/* harmony import */ var angular2_smart_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52345);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26860);
/* harmony import */ var _tags_tags_color_input_tags_color_input_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(62177);




let TagsColorFilterComponent = /*#__PURE__*/(() => {
  class TagsColorFilterComponent extends angular2_smart_table__WEBPACK_IMPORTED_MODULE_0__/* .DefaultFilter */ .yG {
    constructor() {
      super();
    }
    ngOnChanges(changes) {}
    /**
     *
     * @param tags
     */
    selectedTagsEvent(value) {
      this.column.filterFunction(value, this.column.id);
    }
    static {
      this.ɵfac = function TagsColorFilterComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || TagsColorFilterComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineComponent"] */ .VBU({
        type: TagsColorFilterComponent,
        selectors: [["ga-tag-color-filter"]],
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3, _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵNgOnChangesFeature"] */ .OA$],
        decls: 1,
        vars: 3,
        consts: [[3, "selectedTagsEvent", "multiple", "isOrgLevel", "label"]],
        template: function TagsColorFilterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "ga-tags-color-input", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("selectedTagsEvent", function TagsColorFilterComponent_Template_ga_tags_color_input_selectedTagsEvent_0_listener($event) {
              return ctx.selectedTagsEvent($event);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("multiple", true)("isOrgLevel", true)("label", false);
          }
        },
        dependencies: [_tags_tags_color_input_tags_color_input_component__WEBPACK_IMPORTED_MODULE_2__/* .TagsColorInputComponent */ .i],
        encapsulation: 2
      });
    }
  }
  return TagsColorFilterComponent;
})();

/***/ })

}]);