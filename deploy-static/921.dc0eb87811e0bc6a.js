"use strict";
(self["webpackChunkgauzy"] = self["webpackChunkgauzy"] || []).push([[921],{

/***/ 70921:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WorkspaceFindModule: () => (/* binding */ WorkspaceFindModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(14572);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(10936);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(908);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(56383);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(19223);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(38834);
/* harmony import */ var _gauzy_ui_core_theme__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(10316);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(55818);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20173);
/* harmony import */ var _workspace_find_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95590);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(79510);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(28553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26860);













const routes = [{
  path: '',
  component: _workspace_find_component__WEBPACK_IMPORTED_MODULE_0__/* .WorkspaceFindComponent */ .m
}];
let WorkspaceFindModule = /*#__PURE__*/(() => {
  class WorkspaceFindModule {
    static {
      this.ɵfac = function WorkspaceFindModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || WorkspaceFindModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineNgModule"] */ .$C({
        type: WorkspaceFindModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineInjector"] */ .G2t({
        providers: [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_2__/* .TenantService */ .I, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_3__/* .WorkspaceAuthService */ .J, _shared__WEBPACK_IMPORTED_MODULE_4__/* .CountdownTimerService */ .Q],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__/* .CommonModule */ .MD, _angular_forms__WEBPACK_IMPORTED_MODULE_6__/* .ReactiveFormsModule */ .X1, _angular_router__WEBPACK_IMPORTED_MODULE_7__/* .RouterModule */ .iI.forChild(routes), _nebular_theme__WEBPACK_IMPORTED_MODULE_8__/* .NbButtonModule */ .P5N, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__/* .NbIconModule */ .clu, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__/* .NbCardModule */ .lVF, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__/* .NbInputModule */ .pty, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__/* .NbFormFieldModule */ .NeG, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__/* .NbSpinnerModule */ .gYs, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__/* .NbTooltipModule */ .IB0, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__/* .TranslateModule */ .h.forChild(), _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_10__/* .SharedModule */ .G, _gauzy_ui_core_theme__WEBPACK_IMPORTED_MODULE_11__/* .ThemeModule */ .O, _shared__WEBPACK_IMPORTED_MODULE_12__/* .WorkspaceSharedModule */ .J]
      });
    }
  }
  return WorkspaceFindModule;
})();

/***/ }),

/***/ 95590:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   m: () => (/* binding */ WorkspaceFindComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(81816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10936);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(38228);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19223);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(54263);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(71924);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(20173);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2543);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(79510);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(14572);
/* harmony import */ var _shared_email_code_form_email_code_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(88438);
/* harmony import */ var _shared_workspace_header_workspace_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(49710);
/* harmony import */ var _shared_workspace_selection_workspace_selection_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(26370);
















function WorkspaceFindComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(1, "ga-workspace-header", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("close", function WorkspaceFindComponent_ng_container_2_Template_ga_workspace_header_close_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.closeWindow());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(2, "ga-email-code-form", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("sendCode", function WorkspaceFindComponent_ng_container_2_Template_ga_email_code_form_sendCode_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.sendSigninCode());
    })("resendCode", function WorkspaceFindComponent_ng_container_2_Template_ga_email_code_form_resendCode_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.onResendCode());
    })("submitForm", function WorkspaceFindComponent_ng_container_2_Template_ga_email_code_form_submitForm_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.confirmSignInCode());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("form", ctx_r1.form)("isLoading", ctx_r1.isLoading)("isCodeSent", ctx_r1.isCodeSent)("isCodeResent", ctx_r1.isCodeResent)("countdown", ctx_r1.countdown)("showEditEmailButton", false)("showForgotEmailLink", false);
  }
}
function WorkspaceFindComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(1, "ga-workspace-header", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("close", function WorkspaceFindComponent_ng_container_3_Template_ga_workspace_header_close_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.closeWindow());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(2, "ga-workspace-selection", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("workspaceSelected", function WorkspaceFindComponent_ng_container_3_Template_ga_workspace_selection_workspaceSelected_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.signInWorkspace($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("workspaces", ctx_r1.workspaces)("confirmedEmail", ctx_r1.confirmedEmail)("totalWorkspaces", ctx_r1.totalWorkspaces)("showCreateButton", false);
  }
}
let WorkspaceFindComponent = /*#__PURE__*/(() => {
  let WorkspaceFindComponent = class WorkspaceFindComponent extends _shared__WEBPACK_IMPORTED_MODULE_1__/* .BaseWorkspaceAuthComponent */ ._ {
    constructor(translateService, _fb, cdr, _errorHandlingService, _store, _workspaceAuthService, _timerService) {
      super(translateService, _fb, cdr, _errorHandlingService, _store, _workspaceAuthService, _timerService);
      this.translateService = translateService;
      this._fb = _fb;
      this.cdr = cdr;
      this._errorHandlingService = _errorHandlingService;
      this._store = _store;
      this._workspaceAuthService = _workspaceAuthService;
      this._timerService = _timerService;
    }
    /**
     * Handle component-specific logic after confirmation response.
     * For workspace find: always show workspace selection if user has workspaces.
     */
    handleConfirmationResponse(response) {
      const {
        total_workspaces
      } = response;
      // Always show workspace selection for find
      if (total_workspaces > 0) {
        this.showWorkspaceSelection = true;
      }
    }
    static {
      this.ɵfac = function WorkspaceFindComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || WorkspaceFindComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__/* .TranslateService */ .c$), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .UntypedFormBuilder */ .ze), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* .ChangeDetectorRef */ .gRc), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_4__/* .ErrorHandlingService */ .X), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_5__/* .Store */ .il), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_6__/* .WorkspaceAuthService */ .J), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_shared__WEBPACK_IMPORTED_MODULE_7__/* .CountdownTimerService */ .Q));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: WorkspaceFindComponent,
        selectors: [["ga-workspace-find"]],
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
        decls: 4,
        vars: 2,
        consts: [[1, "login-container"], [1, "login-wrapper"], [4, "ngIf"], ["title", "WORKSPACES.FIND.TITLE", "subtitle", "WORKSPACES.FIND.SUBTITLE", 3, "close"], ["descriptionText", "WORKSPACES.FIND.DESCRIPTION_TITLE", 3, "sendCode", "resendCode", "submitForm", "form", "isLoading", "isCodeSent", "isCodeResent", "countdown", "showEditEmailButton", "showForgotEmailLink"], [3, "close"], [3, "workspaceSelected", "workspaces", "confirmedEmail", "totalWorkspaces", "showCreateButton"]],
        template: function WorkspaceFindComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "section", 0)(1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(2, WorkspaceFindComponent_ng_container_2_Template, 3, 7, "ng-container", 2)(3, WorkspaceFindComponent_ng_container_3_Template, 3, 4, "ng-container", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", !ctx.showWorkspaceSelection);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.showWorkspaceSelection);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__/* .NgIf */ .bT, _shared_email_code_form_email_code_form_component__WEBPACK_IMPORTED_MODULE_9__/* .EmailCodeFormComponent */ .F, _shared_workspace_header_workspace_header_component__WEBPACK_IMPORTED_MODULE_10__/* .WorkspaceHeaderComponent */ .E, _shared_workspace_selection_workspace_selection_component__WEBPACK_IMPORTED_MODULE_11__/* .WorkspaceSelectionComponent */ .J],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.card[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-1);\n}\n\n.login-container[_ngcontent-%COMP%] {\n  width: 765px;\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 100vh;\n  margin: 0 auto;\n}\n.login-container[_ngcontent-%COMP%]   .login-wrapper[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-2);\n  border-radius: var(--border-radius);\n  box-sizing: border-box;\n  padding: 30px;\n  width: 476px;\n  height: 100%;\n}\n.login-container[_ngcontent-%COMP%]   .login-wrapper[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  padding-left: 15px;\n  padding-right: 15px;\n}\n.login-container[_ngcontent-%COMP%]   .login-wrapper[_ngcontent-%COMP%]   .svg-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 57px;\n}\n.login-container[_ngcontent-%COMP%]   .login-wrapper[_ngcontent-%COMP%]   .headings[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  position: relative;\n}\n.login-container[_ngcontent-%COMP%]   .login-wrapper[_ngcontent-%COMP%]   .headings[_ngcontent-%COMP%]   .headings-inner[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-family: Inter;\n  font-size: 24px;\n  font-style: normal;\n  font-weight: 700;\n  line-height: 30px;\n  letter-spacing: 0em;\n  margin-bottom: 18px;\n  text-align: start;\n}\n.login-container[_ngcontent-%COMP%]   .login-wrapper[_ngcontent-%COMP%]   .headings[_ngcontent-%COMP%]   .headings-inner[_ngcontent-%COMP%]   .sub-title[_ngcontent-%COMP%] {\n  font-family: Inter;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 1.4;\n  letter-spacing: 0em;\n  margin-bottom: 26px;\n  text-align: start;\n}\n.login-container[_ngcontent-%COMP%]   .login-wrapper[_ngcontent-%COMP%]   .hr-div-strong[_ngcontent-%COMP%] {\n  width: 416px;\n  height: 1px;\n  border-radius: 1px;\n  transform: matrix(1, 0, 0, -1, 0, 0);\n  background: var(--border-alternative-color-4);\n  opacity: 0.15;\n  margin-bottom: 29px;\n  padding-left: 0;\n  padding-right: 0;\n}\n@media screen and (max-width: 490px) {\n  .login-container[_ngcontent-%COMP%]   .login-wrapper[_ngcontent-%COMP%]   .hr-div-strong[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.login-container[_ngcontent-%COMP%]   .login-wrapper[_ngcontent-%COMP%]   .hr-div-soft[_ngcontent-%COMP%] {\n  width: 416px;\n  height: 1px;\n  background: var(--border-alternative-color-4);\n  opacity: 0.05;\n  border-radius: 1px;\n  transform: matrix(1, 0, 0, -1, 0, 0);\n  padding-left: 0;\n  padding-right: 0;\n}\n@media screen and (max-width: 490px) {\n  .login-container[_ngcontent-%COMP%]   .login-wrapper[_ngcontent-%COMP%]   .hr-div-soft[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  margin-top: 29px;\n  margin-bottom: 42px;\n}\n.login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-control-group[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .submit-btn-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .submit-btn-wrapper[_ngcontent-%COMP%]   .forgot-email[_ngcontent-%COMP%] {\n  text-decoration-line: underline;\n  margin-bottom: 0;\n  font-family: Inter;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 17px;\n  letter-spacing: -0.01em;\n  text-align: left;\n}\n.login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .submit-btn-wrapper[_ngcontent-%COMP%]   .forgot-email[_ngcontent-%COMP%]:hover {\n  color: #fa754e;\n}\n.login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .submit-btn-wrapper[_ngcontent-%COMP%]   .submit-inner-wrapper[_ngcontent-%COMP%] {\n  display: inline-flex;\n  flex-direction: column;\n  align-items: center;\n}\n.login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .submit-btn-wrapper[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%] {\n  padding: 13px 39px;\n  box-shadow: 0px 19px 15px -14px rgba(0, 0, 0, 0.22);\n  font-family: Inter;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 700;\n  line-height: 16px;\n  letter-spacing: -0.009em;\n  text-align: left;\n  padding: 13px 65px;\n}\n.login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .submit-btn-wrapper[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%]:enabled {\n  background-color: #fa754e;\n  border: 1px solid #fa754e;\n  color: #ffffff;\n}\n.login-container[_ngcontent-%COMP%]   .another-action[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  padding-top: 10px;\n  padding-left: 10px;\n  color: #808080;\n  font-family: Inter;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 17px;\n  letter-spacing: 0em;\n  text-align: left;\n}\n@media screen and (max-width: 490px) {\n  .login-container[_ngcontent-%COMP%]   .another-action[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n}\n.login-container[_ngcontent-%COMP%]   .another-action[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--color-primary-500);\n  text-decoration: none;\n  font-weight: bold;\n}\n.login-container[_ngcontent-%COMP%]   .another-action[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n\n@media screen and (max-width: 790px) {\n  .login-container[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n  }\n  .login-container[_ngcontent-%COMP%]   .another-action[_ngcontent-%COMP%] {\n    margin-top: 0;\n  }\n}\n@media screen and (max-width: 490px) {\n  .login-container[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .login-container[_ngcontent-%COMP%]   .login-wrapper[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 20px 12px;\n  }\n  .login-container[_ngcontent-%COMP%]   .login-wrapper[_ngcontent-%COMP%]   .headings[_ngcontent-%COMP%]   .headings-inner[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .login-container[_ngcontent-%COMP%]   .login-wrapper[_ngcontent-%COMP%]   .headings[_ngcontent-%COMP%]   .headings-inner[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%], .login-container[_ngcontent-%COMP%]   .login-wrapper[_ngcontent-%COMP%]   .headings[_ngcontent-%COMP%]   .headings-inner[_ngcontent-%COMP%]   .sub-title[_ngcontent-%COMP%] {\n    width: 100%;\n    text-align: center;\n  }\n  .login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n    margin-bottom: 35px;\n  }\n  .login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .submit-btn-wrapper[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n  .login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .submit-btn-wrapper[_ngcontent-%COMP%]   .submit-inner-wrapper[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n  .login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .submit-btn-wrapper[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%] {\n    margin-bottom: 0;\n  }\n  .login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-control-group[_ngcontent-%COMP%] {\n    margin-bottom: 13px;\n  }\n}\n  .input-full-width {\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 0.5px 0.5px 0.5px inset;\n  border-radius: var(--border-radius);\n  background-color: var(--gauzy-input-background) !important;\n  border: unset;\n}\n\n  ngx-register .register-wrapper .input-full-width {\n  background-color: var(--gauzy-input-background) !important;\n}\n\n  ngx-register .register-wrapper.dark .input-full-width {\n  background-color: rgba(255, 255, 255, 0.15) !important;\n}\n\n.creation-content[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.creation-content[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 0.5rem;\n  font-weight: 600;\n  color: var(--text-basic-color);\n}\n.creation-content[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.creation-content[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%] {\n  margin-top: 0.25rem;\n  font-size: 0.75rem;\n  color: var(--status-danger);\n}\n.creation-content[_ngcontent-%COMP%]   .submit-btn-wrapper[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n  display: flex;\n  justify-content: center;\n}\n.creation-content[_ngcontent-%COMP%]   .submit-btn-wrapper[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%] {\n  min-width: 200px;\n  padding: 0.75rem 1.5rem;\n}\n.creation-content[_ngcontent-%COMP%]   .submit-btn-wrapper[_ngcontent-%COMP%]   .submit-btn.btn-pulse[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_pulse 1.5s infinite;\n}\n\n@keyframes _ngcontent-%COMP%_pulse {\n  0% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.05);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n@media (max-width: 768px) {\n  .login-container[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .login-container[_ngcontent-%COMP%]   .login-wrapper[_ngcontent-%COMP%] {\n    padding: 20px;\n    max-width: 100%;\n  }\n  .login-container[_ngcontent-%COMP%]   .login-wrapper[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n    padding-left: 10px;\n    padding-right: 10px;\n  }\n}\n@media (max-width: 480px) {\n  .login-container[_ngcontent-%COMP%] {\n    padding: 0.5rem;\n  }\n  .login-container[_ngcontent-%COMP%]   .login-wrapper[_ngcontent-%COMP%] {\n    padding: 15px;\n  }\n  .login-container[_ngcontent-%COMP%]   .login-wrapper[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n    padding-left: 5px;\n    padding-right: 5px;\n  }\n}"],
        changeDetection: 0
      });
    }
  };
  WorkspaceFindComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_12__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_13__/* .UntilDestroy */ .d)({
    checkProperties: true
  }), (0,tslib__WEBPACK_IMPORTED_MODULE_12__/* .__metadata */ .Sn)("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__/* .TranslateService */ .c$, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .UntypedFormBuilder */ .ze, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .ChangeDetectorRef */ .gRc, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_4__/* .ErrorHandlingService */ .X, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_5__/* .Store */ .il, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_6__/* .WorkspaceAuthService */ .J, _shared__WEBPACK_IMPORTED_MODULE_7__/* .CountdownTimerService */ .Q])], WorkspaceFindComponent);
  return WorkspaceFindComponent;
})();


/***/ })

}]);