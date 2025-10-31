"use strict";
(self["webpackChunkgauzy"] = self["webpackChunkgauzy"] || []).push([[4729,8539],{

/***/ 789:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ ConfirmEmailComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(73014);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(27075);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9620);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(45715);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(19223);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12043);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8657);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(97234);
/* harmony import */ var _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38546);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(56383);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(14572);













function ConfirmEmailComponent_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div")(1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(ctx_r0.errorMessage);
  }
}
function ConfirmEmailComponent_div_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div")(1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(ctx_r0.successMessage);
  }
}
function ConfirmEmailComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, ConfirmEmailComponent_div_1_div_1_Template, 3, 1, "div", 1)(2, ConfirmEmailComponent_div_1_div_2_Template, 3, 1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r0.errorMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r0.successMessage);
  }
}
let ConfirmEmailComponent = /*#__PURE__*/(() => {
  let ConfirmEmailComponent = class ConfirmEmailComponent extends _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_1__/* .TranslationBaseComponent */ .K {
    constructor(route, translateService) {
      super(translateService);
      this.route = route;
      this.loading = true;
    }
    ngOnInit() {
      this.route.data.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .filter */ .p)(data => !!data && !!data.resolver), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .tap */ .M)(({
        resolver
      }) => this.verifiedEmail(resolver)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .untilDestroyed */ .s)(this)).subscribe();
    }
    /**
     * Verify the email.
     *
     * @param response - The response from the API.
     */
    verifiedEmail(response) {
      var _this = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)(function* () {
        try {
          if ('status' in response && response.status === _angular_common_http__WEBPACK_IMPORTED_MODULE_6__/* .HttpStatusCode */ .kG.BadRequest) {
            _this.errorMessage = _this.getTranslation('TOASTR.MESSAGE.EMAIL_VERIFICATION_NOT_VALID');
          } else if ('status' in response && response.status === _angular_common_http__WEBPACK_IMPORTED_MODULE_6__/* .HttpStatusCode */ .kG.Ok) {
            _this.successMessage = _this.getTranslation('TOASTR.MESSAGE.EMAIL_VERIFICATION_VALID');
          }
        } catch (error) {
          _this.errorMessage = _this.getTranslation('TOASTR.MESSAGE.EMAIL_VERIFICATION_NOT_VALID');
        } finally {
          _this.loading = false;
        }
      })();
    }
    static {
      this.ɵfac = function ConfirmEmailComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || ConfirmEmailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_router__WEBPACK_IMPORTED_MODULE_7__/* .ActivatedRoute */ .nX), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__/* .TranslateService */ .c$));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: ConfirmEmailComponent,
        selectors: [["ngx-confirm-email"]],
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
        decls: 2,
        vars: 2,
        consts: [["nbSpinnerStatus", "primary", 3, "nbSpinner"], [4, "ngIf"]],
        template: function ConfirmEmailComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, ConfirmEmailComponent_div_1_Template, 3, 2, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("nbSpinner", ctx.loading);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", !ctx.loading);
          }
        },
        dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbSpinnerDirective */ .zwc, _angular_common__WEBPACK_IMPORTED_MODULE_10__/* .NgIf */ .bT],
        encapsulation: 2
      });
    }
  };
  ConfirmEmailComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_11__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .UntilDestroy */ .d)({
    checkProperties: true
  }), (0,tslib__WEBPACK_IMPORTED_MODULE_11__/* .__metadata */ .Sn)("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_7__/* .ActivatedRoute */ .nX, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__/* .TranslateService */ .c$])], ConfirmEmailComponent);
  return ConfirmEmailComponent;
})();


/***/ }),

/***/ 861:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   J: () => (/* binding */ WorkspaceSelectionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38546);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19223);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56383);
/* harmony import */ var _ui_core_theme_src_lib_components_gauzy_logo_gauzy_logo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85662);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(14572);
/* harmony import */ var _ui_core_shared_src_lib_components_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(32386);
/* harmony import */ var _ui_core_shared_src_lib_directives_debounce_click_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(20345);
/* harmony import */ var _ui_core_shared_src_lib_directives_img_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(71466);











const _c0 = () => ({
  type: "shake"
});
const _c1 = a0 => ({
  animation: a0
});
function WorkspaceSelectionComponent_nb_list_item_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-list-item", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("throttledClick", function WorkspaceSelectionComponent_nb_list_item_16_Template_nb_list_item_throttledClick_0_listener() {
      const workspace_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r2.selectWorkspace(workspace_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(1, "div", 7)(2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(3, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(4, "div", 10)(5, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(7, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(8, "ngx-avatar", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(9, "div", 14)(10, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(11, "Open");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(12, "nb-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const workspace_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("src", workspace_r2.user == null ? null : workspace_r2.user.tenant == null ? null : workspace_r2.user.tenant.logo, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵsanitizeUrl"] */ .B4B);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", workspace_r2.user == null ? null : workspace_r2.user.tenant == null ? null : workspace_r2.user.tenant.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("name", workspace_r2.user == null ? null : workspace_r2.user.name)("src", workspace_r2.user == null ? null : workspace_r2.user.imageUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("options", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction1"] */ .eq3(6, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction0"] */ .lJ4(5, _c0)));
  }
}
let WorkspaceSelectionComponent = /*#__PURE__*/(() => {
  class WorkspaceSelectionComponent extends _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_1__/* .TranslationBaseComponent */ .K {
    /**
     * Getter for the workspaces property.
     * @returns The value of the workspaces.
     */
    get workspaces() {
      return this._workspaces;
    }
    /**
     * Setter for the workspaces property.
     * @param workspaces - The value to set for the workspaces.
     */
    set workspaces(workspaces) {
      this._workspaces = workspaces;
    }
    /**
     * Getter for the confirmed email property.
     * @returns The value of the confirmed email.
     */
    get confirmed_email() {
      return this._confirmed_email;
    }
    /**
     * Setter for the confirmed email property.
     * @param value - The value to set for the confirmed email.
     */
    set confirmed_email(value) {
      this._confirmed_email = value;
    }
    constructor(translateService) {
      super(translateService);
      /**
       * Private property to store the workspaces.
       */
      this._workspaces = [];
      /**
       * An @Output property that emits a workspace value when an event occurs.
       *
       */
      this.selectedWorkspace = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .bkB();
    }
    ngOnInit() {}
    /**
     * Select a workspace.
     *
     * @param workspace - The workspace to select.
     */
    selectWorkspace(workspace) {
      if (!workspace) {
        return; // Exit if the no workspace
      }
      this.selectedWorkspace.emit(workspace);
    }
    static {
      this.ɵfac = function WorkspaceSelectionComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || WorkspaceSelectionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__/* .TranslateService */ .c$));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: WorkspaceSelectionComponent,
        selectors: [["ngx-workspace-selection"]],
        inputs: {
          workspaces: "workspaces",
          confirmed_email: "confirmed_email"
        },
        outputs: {
          selectedWorkspace: "selectedWorkspace"
        },
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
        decls: 17,
        vars: 3,
        consts: [[1, "logo"], [3, "isAccordion"], [1, "text-start"], [1, "title"], [1, "sub-title"], ["debounceClick", "", 3, "throttledClick", 4, "ngFor", "ngForOf"], ["debounceClick", "", 3, "throttledClick"], [1, "workspace-container"], [1, "workspace-image"], [3, "src"], [1, "workspace-info"], [1, "workspace-name"], [1, "workspace-user"], [1, "workspace", 3, "name", "src"], [1, "continue-icon"], [1, "label-primary"], ["status", "primary", "icon", "arrow-forward-outline", 3, "options"]],
        template: function WorkspaceSelectionComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "ngx-gauzy-logo", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(2, "h4")(3, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(4, "Welcome back!");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(5, " You look nice today!");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(6, "h6");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(7, "The email associated with multiple workspaces, please select one to continue");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(8, "nb-card")(9, "nb-card-header", 2)(10, "span", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(11, " Select Workspace for ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(12, "span", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(14, "nb-card-body")(15, "nb-list");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(16, WorkspaceSelectionComponent_nb_list_item_16_Template, 13, 8, "nb-list-item", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("isAccordion", false);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(ctx.confirmed_email);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx.workspaces);
          }
        },
        dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbCardComponent */ .SrT, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbCardBodyComponent */ .KH5, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbCardHeaderComponent */ .zJv, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbIconComponent */ .tHu, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbListComponent */ .krR, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbListItemComponent */ .TdD, _ui_core_theme_src_lib_components_gauzy_logo_gauzy_logo_component__WEBPACK_IMPORTED_MODULE_4__/* .GauzyLogoComponent */ .p, _angular_common__WEBPACK_IMPORTED_MODULE_5__/* .NgForOf */ .Sq, _ui_core_shared_src_lib_components_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_6__/* .AvatarComponent */ .f, _ui_core_shared_src_lib_directives_debounce_click_directive__WEBPACK_IMPORTED_MODULE_7__/* .DebounceClickDirective */ .J, _ui_core_shared_src_lib_directives_img_directive__WEBPACK_IMPORTED_MODULE_8__/* .ImgDirective */ .z],
        styles: ["[_nghost-%COMP%]   .logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  justify-content: center;\n  margin-bottom: 32px;\n}\n[_nghost-%COMP%]   .logo[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 30px;\n  margin-top: 32px;\n  color: var(--gauzy-text-color-1);\n  font-weight: 600;\n}\n[_nghost-%COMP%]   .logo[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--text-primary-active-color);\n}\n[_nghost-%COMP%]   .logo[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--gauzy-text-color-2);\n  font-weight: 500;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  box-shadow: var(--gauzy-shadow);\n  background-color: var(--gauzy-card-2);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-weight: 400;\n  color: var(--gauzy-text-color-1);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .sub-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]   nb-list-item[_ngcontent-%COMP%] {\n  border-top: 1px solid var(--border-primary-color-1);\n  justify-content: space-between;\n  cursor: pointer;\n  padding-left: 0;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]   nb-list-item[_ngcontent-%COMP%]:hover    + nb-list-item[_ngcontent-%COMP%] {\n  border-top: unset;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]   nb-list-item[_ngcontent-%COMP%]:hover {\n  background-color: var(--gauzy-background-transparent-1);\n  border-bottom: 1px solid var(--border-primary-color-1);\n  border-radius: var(--border-radius);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]   nb-list-item[_ngcontent-%COMP%]   .workspace-container[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]   nb-list-item[_ngcontent-%COMP%]   .workspace-container[_ngcontent-%COMP%]   .workspace-image[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: var(--border-radius);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]   nb-list-item[_ngcontent-%COMP%]   .workspace-container[_ngcontent-%COMP%]   .workspace-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  border-radius: var(--border-radius);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]   nb-list-item[_ngcontent-%COMP%]   .workspace-container[_ngcontent-%COMP%]   .workspace-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: space-between;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]   nb-list-item[_ngcontent-%COMP%]   .workspace-container[_ngcontent-%COMP%]   .workspace-info[_ngcontent-%COMP%]   .workspace-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]   nb-list-item[_ngcontent-%COMP%]   .continue-icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 4px;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]   nb-list-item[_ngcontent-%COMP%]   .continue-icon[_ngcontent-%COMP%]   .label-primary[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--text-primary-color);\n}\n\n  ngx-gauzy-logo object {\n  max-width: unset !important;\n  max-height: unset !important;\n  height: 36px;\n}"],
        changeDetection: 0
      });
    }
  }
  return WorkspaceSelectionComponent;
})();

/***/ }),

/***/ 2657:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ AsyncAction)
/* harmony export */ });
/* harmony import */ var _Action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44909);
/* harmony import */ var _intervalProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46303);
/* harmony import */ var _util_arrRemove__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(75214);



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

/***/ 4946:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Q: () => (/* binding */ observeOn)
/* harmony export */ });
/* harmony import */ var _util_executeSchedule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(50952);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82153);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38405);



function observeOn(scheduler, delay = 0) {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__/* .operate */ .N)((source, subscriber) => {
    source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__/* .createOperatorSubscriber */ ._)(subscriber, value => (0,_util_executeSchedule__WEBPACK_IMPORTED_MODULE_2__/* .executeSchedule */ .N)(subscriber, scheduler, () => subscriber.next(value), delay), () => (0,_util_executeSchedule__WEBPACK_IMPORTED_MODULE_2__/* .executeSchedule */ .N)(subscriber, scheduler, () => subscriber.complete(), delay), err => (0,_util_executeSchedule__WEBPACK_IMPORTED_MODULE_2__/* .executeSchedule */ .N)(subscriber, scheduler, () => subscriber.error(err), delay)));
  });
}
//# sourceMappingURL=observeOn.js.map

/***/ }),

/***/ 5488:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   W: () => (/* binding */ catchError)
/* harmony export */ });
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11603);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38405);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82153);



function catchError(selector) {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__/* .operate */ .N)((source, subscriber) => {
    let innerSub = null;
    let syncUnsub = false;
    let handledResult;
    innerSub = source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__/* .createOperatorSubscriber */ ._)(subscriber, undefined, undefined, err => {
      handledResult = (0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_2__/* .innerFrom */ .Tg)(selector(err, catchError(selector)(source)));
      if (innerSub) {
        innerSub.unsubscribe();
        innerSub = null;
        handledResult.subscribe(subscriber);
      } else {
        syncUnsub = true;
      }
    }));
    if (syncUnsub) {
      innerSub.unsubscribe();
      innerSub = null;
      handledResult.subscribe(subscriber);
    }
  });
}
//# sourceMappingURL=catchError.js.map

/***/ }),

/***/ 5777:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G: () => (/* binding */ EmptyError)
/* harmony export */ });
/* harmony import */ var _createErrorClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33190);

const EmptyError = /*#__PURE__*/(0,_createErrorClass__WEBPACK_IMPORTED_MODULE_0__/* .createErrorClass */ .L)(_super => function EmptyErrorImpl() {
  _super(this);
  this.name = 'EmptyError';
  this.message = 'no elements in sequence';
});
//# sourceMappingURL=EmptyError.js.map

/***/ }),

/***/ 6003:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ SignInSuccessModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14572);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(908);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(56383);
/* harmony import */ var _sign_in_success_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91892);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26860);






const routes = [{
  path: 'success',
  component: _sign_in_success_component__WEBPACK_IMPORTED_MODULE_0__/* .SignInSuccessComponent */ .H
}, {
  path: 'google',
  component: _sign_in_success_component__WEBPACK_IMPORTED_MODULE_0__/* .SignInSuccessComponent */ .H
}];
let SignInSuccessModule = /*#__PURE__*/(() => {
  class SignInSuccessModule {
    static {
      this.ɵfac = function SignInSuccessModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || SignInSuccessModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineNgModule"] */ .$C({
        type: SignInSuccessModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__/* .CommonModule */ .MD, _angular_router__WEBPACK_IMPORTED_MODULE_3__/* .RouterModule */ .iI.forChild(routes), _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbCardModule */ .lVF, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbSpinnerModule */ .gYs, _angular_router__WEBPACK_IMPORTED_MODULE_3__/* .RouterModule */ .iI]
      });
    }
  }
  return SignInSuccessModule;
})();

/***/ }),

/***/ 6992:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: () => (/* binding */ MatchValidator)
/* harmony export */ });
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26024);

/**
 * custom validator to check that two fields match
 */
class MatchValidator {
  /**
   * Custom validator to check that two fields match.
   * @param controlName The name of the first form control.
   * @param matchingControlName The name of the second form control to compare against.
   * @returns A validator function to validate the matching of the two fields.
   */
  static mustMatch(controlName, matchingControlName) {
    return formGroup => {
      const control = formGroup.get(controlName);
      const matchingControl = formGroup.get(matchingControlName);
      // set error on matchingControl if validation fails
      if ((0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_0__/* .isNotEmpty */ .hj)(control.value) && control.value !== matchingControl.value) {
        matchingControl.setErrors({
          mustMatch: true
        });
      } else {
        matchingControl.setErrors(null);
      }
      return null;
    };
  }
}

/***/ }),

/***/ 7718:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   m: () => (/* binding */ CrudService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53827);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26024);


class CrudService {
  constructor(http, API_URL) {
    this.http = http;
    this.API_URL = API_URL;
  }
  /**
   * The create() method accepts a partial model as an argument and returns the created model from the server.
   *
   * @param entity
   * @returns
   */
  create(entity) {
    return this.http.post(`${this.API_URL}`, entity).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__/* .take */ .s)(1));
  }
  /**
   * The get() method returns an Observable with a list of all existing resources.
   *
   * @returns
   */
  get(params) {
    return this.http.get(`${this.API_URL}`, {
      params: (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .toParams */ .SV)({
        ...params
      })
    });
  }
  /**
   * When we want to update an existing resource, we’ll use the update() method.
   *
   * @param id
   * @param entity
   * @returns
   */
  update(id, entity) {
    return this.http.put(`${this.API_URL}/${id}`, entity).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__/* .take */ .s)(1));
  }
  /**
   * When we want to delete an existing resource, we’ll use the delete() method.
   *
   * @param id
   * @returns
   */
  delete(id) {
    return this.http.delete(`${this.API_URL}/${id}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__/* .take */ .s)(1));
  }
}

/***/ }),

/***/ 8539:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   x: () => (/* binding */ getBrowserLanguage)
/* harmony export */ });
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81236);

/**
 * Utility function to get the browser language and fall back to a default if needed.
 * @returns {string} The browser language or the default language.
 */
function getBrowserLanguage() {
  const browserLang = window.navigator.language.split('-')[0]; // Get base language code
  const supportedLanguages = Object.values(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__/* .LanguagesEnum */ .TR); // List of supported languages
  // Check if the browser language is supported; otherwise, return default
  return supportedLanguages.includes(browserLang) ? browserLang : _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__/* .LanguagesEnum */ .TR.ENGLISH;
}

/***/ }),

/***/ 8657:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: () => (/* binding */ filter)
/* harmony export */ });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82153);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38405);


function filter(predicate, thisArg) {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__/* .operate */ .N)((source, subscriber) => {
    let index = 0;
    source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__/* .createOperatorSubscriber */ ._)(subscriber, value => predicate.call(thisArg, value, index++) && subscriber.next(value)));
  });
}
//# sourceMappingURL=filter.js.map

/***/ }),

/***/ 9073:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: () => (/* binding */ EstimateEmailComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(73014);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(27075);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9620);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(45715);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(19223);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8657);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(97234);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12043);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(63570);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(94333);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(15480);
/* harmony import */ var _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38546);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(56383);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(14572);
















function EstimateEmailComponent_div_1_div_1_h1_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(2, 1, "INVOICES_PAGE.ESTIMATES.ESTIMATE_ACCEPTED"), " ");
  }
}
function EstimateEmailComponent_div_1_div_1_h1_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(2, 1, "INVOICES_PAGE.ESTIMATES.ESTIMATE_REJECTED"), " ");
  }
}
function EstimateEmailComponent_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, EstimateEmailComponent_div_1_div_1_h1_1_Template, 3, 3, "h1", 1)(2, EstimateEmailComponent_div_1_div_1_h1_2_Template, 3, 3, "h1", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r0.isAccepted);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", !ctx_r0.isAccepted);
  }
}
function EstimateEmailComponent_div_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div")(1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(ctx_r0.errorMessage);
  }
}
function EstimateEmailComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, EstimateEmailComponent_div_1_div_1_Template, 3, 2, "div", 1)(2, EstimateEmailComponent_div_1_div_2_Template, 3, 1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", !ctx_r0.errorMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r0.errorMessage);
  }
}
let EstimateEmailComponent = /*#__PURE__*/(() => {
  let EstimateEmailComponent = class EstimateEmailComponent extends _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_1__/* .TranslationBaseComponent */ .K {
    constructor(route, invoicesService, translateService, toastrService) {
      super(translateService);
      this.route = route;
      this.invoicesService = invoicesService;
      this.translateService = translateService;
      this.toastrService = toastrService;
      this.isAccepted = false;
      this.loading = true;
    }
    ngOnInit() {
      this.route.data.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .filter */ .p)(data => !!data && !!data.estimate), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .tap */ .M)(({
        estimate
      }) => this.validateEstimateEmail(estimate, this.route.snapshot.queryParams)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .untilDestroyed */ .s)(this)).subscribe();
    }
    /**
     * Validate the estimate email and update the estimate status.
     *
     * @param estimateEmail - The estimate email to validate.
     * @param params - The query params from the route.
     */
    validateEstimateEmail(estimateEmail, params) {
      var _this = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)(function* () {
        try {
          if (estimateEmail instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_6__/* .HttpErrorResponse */ .yz) {
            _this.errorMessage = _this.getTranslation('INVOICES_PAGE.ESTIMATES.ERROR');
            _this.toastrService.danger(estimateEmail);
          } else {
            _this.isAccepted = params.action === 'accept';
            yield _this.updateEstimate(params['id'], params['token'], _this.isAccepted, estimateEmail.convertAcceptedEstimates);
          }
        } catch (error) {
          _this.errorMessage = _this.getTranslation('INVOICES_PAGE.ESTIMATES.ERROR');
        } finally {
          _this.loading = false;
        }
      })();
    }
    /**
     * Update the estimate status based on the provided parameters.
     *
     * @param id - The estimate ID.
     * @param token - The estimate token.
     * @param isAccepted - Whether the estimate is accepted or rejected.
     * @param convertAcceptedEstimates - Whether to convert accepted estimates to drafts.
     */
    updateEstimate(id, token, isAccepted, convertAcceptedEstimates) {
      var _this2 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)(function* () {
        let status;
        if (isAccepted) {
          if (convertAcceptedEstimates) {
            status = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_7__/* .EstimateStatusTypesEnum */ .BJ.DRAFT;
          } else {
            status = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_7__/* .EstimateStatusTypesEnum */ .BJ.ACCEPTED;
          }
        } else {
          status = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_7__/* .EstimateStatusTypesEnum */ .BJ.REJECTED;
        }
        yield _this2.invoicesService.updateWithoutAuth(id, token, {
          status,
          isEstimate: convertAcceptedEstimates ? false : true
        });
      })();
    }
    static {
      this.ɵfac = function EstimateEmailComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || EstimateEmailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_router__WEBPACK_IMPORTED_MODULE_8__/* .ActivatedRoute */ .nX), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_9__/* .InvoicesService */ .U), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__/* .TranslateService */ .c$), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_11__/* .ToastrService */ .t));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: EstimateEmailComponent,
        selectors: [["ga-estimate-email"]],
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
        decls: 2,
        vars: 2,
        consts: [["nbSpinnerStatus", "primary", "nbSpinnerSize", "large", 3, "nbSpinner"], [4, "ngIf"]],
        template: function EstimateEmailComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, EstimateEmailComponent_div_1_Template, 3, 2, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("nbSpinner", ctx.loading);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", !ctx.loading);
          }
        },
        dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_12__/* .NbSpinnerDirective */ .zwc, _angular_common__WEBPACK_IMPORTED_MODULE_13__/* .NgIf */ .bT, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__/* .TranslatePipe */ .D9],
        encapsulation: 2
      });
    }
  };
  EstimateEmailComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_14__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .UntilDestroy */ .d)({
    checkProperties: true
  }), (0,tslib__WEBPACK_IMPORTED_MODULE_14__/* .__metadata */ .Sn)("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_8__/* .ActivatedRoute */ .nX, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_9__/* .InvoicesService */ .U, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__/* .TranslateService */ .c$, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_11__/* .ToastrService */ .t])], EstimateEmailComponent);
  return EstimateEmailComponent;
})();


/***/ }),

/***/ 11603:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Tg: () => (/* binding */ innerFrom)
/* harmony export */ });
/* unused harmony exports fromInteropObservable, fromArrayLike, fromPromise, fromIterable, fromAsyncIterable, fromReadableStreamLike */
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(27075);
/* harmony import */ var _util_isArrayLike__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14420);
/* harmony import */ var _util_isPromise__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(82115);
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72288);
/* harmony import */ var _util_isInteropObservable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64898);
/* harmony import */ var _util_isAsyncIterable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(32172);
/* harmony import */ var _util_throwUnobservableError__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(27944);
/* harmony import */ var _util_isIterable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19254);
/* harmony import */ var _util_isReadableStreamLike__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(65947);
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(46908);
/* harmony import */ var _util_reportUnhandledError__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(92801);
/* harmony import */ var _symbol_observable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(45053);












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

/***/ 12043:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   d: () => (/* binding */ UntilDestroy),
/* harmony export */   s: () => (/* binding */ untilDestroyed)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(33977);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(90204);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57107);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(49454);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(58561);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(50242);



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

/***/ 12309:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Y: () => (/* binding */ errorContext),
/* harmony export */   l: () => (/* binding */ captureError)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22331);

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

/***/ 12467:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: () => (/* binding */ PasswordFormFieldComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(55598);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10936);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(41598);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(19223);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4478);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(26024);
/* harmony import */ var _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38546);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(14572);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(56383);













const _c0 = ["input"];
const _c1 = [[["", 8, "invalid-feedback"]]];
const _c2 = [".invalid-feedback"];
function PasswordFormFieldComponent_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function PasswordFormFieldComponent_button_5_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r3);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r3.showPassword = !ctx_r3.showPassword);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "nb-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("icon", ctx_r3.showPassword ? "eye-outline" : "eye-off-outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵattribute"] */ .BMQ("aria-label", ctx_r3.showPassword ? "hide password" : "show password");
  }
}
let PasswordFormFieldComponent = /*#__PURE__*/(() => {
  let PasswordFormFieldComponent = class PasswordFormFieldComponent extends _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_1__/* .TranslationBaseComponent */ .K {
    /**
     * Getter & Setter accessor including call the onchange callback
     */
    get value() {
      return this.innerValue;
    }
    set value(v) {
      if (v !== this.innerValue) {
        this.innerValue = v;
      }
    }
    get ctrl() {
      return this._ctrl;
    }
    set ctrl(value) {
      this._ctrl = value;
    }
    get label() {
      return this._label;
    }
    set label(value) {
      this._label = value;
    }
    get placeholder() {
      return this._placeholder;
    }
    set placeholder(value) {
      this._placeholder = value;
    }
    get icon() {
      return this._icon;
    }
    set icon(value) {
      this._icon = value;
    }
    get id() {
      return this._id;
    }
    set id(value) {
      this._id = value;
    }
    get fieldSize() {
      return this._fieldSize;
    }
    set fieldSize(value) {
      this._fieldSize = value;
    }
    get ngClass() {
      return this._ngClass;
    }
    set ngClass(value) {
      this._ngClass = value;
    }
    constructor(translateService) {
      super(translateService);
      this.translateService = translateService;
      this.showPassword = false;
      //The internal data model for form control value access
      this.innerValue = '';
      this.onChange = _ => {};
      this.onTouched = _ => {};
      /*
       * Getter & Setter accessor for dynamic form control
       */
      this._ctrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .FormControl */ .MJ();
      /*
       * Getter & Setter accessor for dynamic placeholder
       */
      this._icon = true;
      /*
       * Getter & Setter for dynamic field size
       */
      this._fieldSize = 'medium';
      this.onInputChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .bkB();
    }
    ngOnChanges() {}
    ngAfterViewInit() {
      this.ctrl.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .debounceTime */ .B)(100), (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_4__/* .distinctUntilChange */ .nI)(), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .untilDestroyed */ .s)(this)).subscribe(() => {
        // check condition if the form control is RESET
        if ((0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_4__/* .isEmpty */ .Im)(this.ctrl.value)) {
          this.innerValue = '';
          this.inputRef.nativeElement.value = '';
        }
        this.onInputChanged.emit(this.ctrl.value);
      });
    }
    // event fired when input value is changed. later propagated up to the form control using the custom value accessor interface
    onInputChange(e, value) {
      //set changed value
      this.innerValue = value;
      // propagate value into form control using control value accessor interface
      this.onChange(this.innerValue);
    }
    //from control value accessor interface
    writeValue(value) {
      this.innerValue = value;
    }
    //from control value accessor interface
    registerOnChange(fn) {
      this.onChange = fn;
    }
    //from control value accessor interface
    registerOnTouched(fn) {
      this.onTouched = fn;
    }
    ngOnDestroy() {}
    static {
      this.ɵfac = function PasswordFormFieldComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || PasswordFormFieldComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__/* .TranslateService */ .c$));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: PasswordFormFieldComponent,
        selectors: [["ngx-password-form-field"]],
        viewQuery: function PasswordFormFieldComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵviewQuery"] */ .GBs(_c0, 5);
          }
          if (rf & 2) {
            let _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵqueryRefresh"] */ .mGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵloadQuery"] */ .lsd()) && (ctx.inputRef = _t.first);
          }
        },
        inputs: {
          ctrl: "ctrl",
          label: "label",
          placeholder: "placeholder",
          icon: "icon",
          id: "id",
          fieldSize: "fieldSize",
          ngClass: "ngClass",
          autocomplete: "autocomplete"
        },
        outputs: {
          onInputChanged: "onInputChanged"
        },
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵProvidersFeature"] */ .Jv_([{
          provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .NG_VALUE_ACCESSOR */ .kq,
          useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__/* .forwardRef */ .Rfq)(() => PasswordFormFieldComponent),
          multi: true
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵNgOnChangesFeature"] */ .OA$],
        ngContentSelectors: _c2,
        decls: 7,
        vars: 11,
        consts: [["input", ""], [1, "form-group"], [1, "label", 3, "innerText"], ["fullWidth", "", "nbInput", "", 3, "blur", "fieldSize", "formControl", "status", "ngClass", "autocomplete"], ["nbSuffix", "", "nbButton", "", "ghost", "", "type", "button", 3, "click", 4, "ngIf"], ["nbSuffix", "", "nbButton", "", "ghost", "", "type", "button", 3, "click"], ["pack", "eva", 3, "icon"]],
        template: function PasswordFormFieldComponent_Template(rf, ctx) {
          if (rf & 1) {
            const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵprojectionDef"] */ .NAR(_c1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "label", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(2, "nb-form-field")(3, "input", 3, 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("blur", function PasswordFormFieldComponent_Template_input_blur_3_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              const input_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(4);
              return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx.onInputChange($event, input_r2.value));
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(5, PasswordFormFieldComponent_button_5_Template, 2, 2, "button", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵprojection"] */ .SdG(6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("innerText", ctx.label);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵattribute"] */ .BMQ("for", ctx.id);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("fieldSize", ctx.fieldSize)("formControl", ctx.ctrl)("status", ctx.ctrl.invalid && (ctx.ctrl.touched || ctx.ctrl.dirty) ? "danger" : "basic")("ngClass", ctx.ngClass)("autocomplete", ctx.autocomplete);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵattribute"] */ .BMQ("type", ctx.showPassword ? "text" : "password")("placeholder", ctx.placeholder)("id", ctx.id);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.icon);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__/* .NgClass */ .YU, _angular_common__WEBPACK_IMPORTED_MODULE_7__/* .NgIf */ .bT, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .DefaultValueAccessor */ .me, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .NgControlStatus */ .BC, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .FormControlDirective */ .l_, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__/* .NbButtonComponent */ .YP2, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__/* .NbFormFieldComponent */ .u_9, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__/* .NbSuffixDirective */ .zb0, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__/* .NbIconComponent */ .tHu, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__/* .NbInputDirective */ .i6h],
        encapsulation: 2
      });
    }
  };
  PasswordFormFieldComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .UntilDestroy */ .d)({
    checkProperties: true
  }), (0,tslib__WEBPACK_IMPORTED_MODULE_9__/* .__metadata */ .Sn)("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__/* .TranslateService */ .c$])], PasswordFormFieldComponent);
  return PasswordFormFieldComponent;
})();


/***/ }),

/***/ 13271:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ RolesEnum)
/* harmony export */ });
/* unused harmony export SYSTEM_DEFAULT_ROLES */
var RolesEnum = /*#__PURE__*/function (RolesEnum) {
  RolesEnum["SUPER_ADMIN"] = "SUPER_ADMIN";
  RolesEnum["ADMIN"] = "ADMIN";
  RolesEnum["DATA_ENTRY"] = "DATA_ENTRY";
  RolesEnum["EMPLOYEE"] = "EMPLOYEE";
  RolesEnum["CANDIDATE"] = "CANDIDATE";
  RolesEnum["MANAGER"] = "MANAGER";
  RolesEnum["VIEWER"] = "VIEWER";
  RolesEnum["INTERVIEWER"] = "INTERVIEWER";
  return RolesEnum;
}(RolesEnum || {});
/** Default system role */
const SYSTEM_DEFAULT_ROLES = [RolesEnum.SUPER_ADMIN, RolesEnum.ADMIN, RolesEnum.EMPLOYEE, RolesEnum.CANDIDATE, RolesEnum.VIEWER];

/***/ }),

/***/ 14420:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   X: () => (/* binding */ isArrayLike)
/* harmony export */ });
const isArrayLike = x => x && typeof x.length === 'number' && typeof x !== 'function';
//# sourceMappingURL=isArrayLike.js.map

/***/ }),

/***/ 14508:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   b: () => (/* binding */ AsapScheduler)
/* harmony export */ });
/* harmony import */ var _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75753);

class AsapScheduler extends _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__/* .AsyncScheduler */ .q {
  flush(action) {
    this._active = true;
    const flushId = this._scheduled;
    this._scheduled = undefined;
    const {
      actions
    } = this;
    let error;
    action = action || actions.shift();
    do {
      if (error = action.execute(action.state, action.delay)) {
        break;
      }
    } while ((action = actions[0]) && action.id === flushId && actions.shift());
    this._active = false;
    if (error) {
      while ((action = actions[0]) && action.id === flushId && actions.shift()) {
        action.unsubscribe();
      }
      throw error;
    }
  }
}
//# sourceMappingURL=AsapScheduler.js.map

/***/ }),

/***/ 18434:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ UnsubscriptionError)
/* harmony export */ });
/* harmony import */ var _createErrorClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33190);

const UnsubscriptionError = /*#__PURE__*/(0,_createErrorClass__WEBPACK_IMPORTED_MODULE_0__/* .createErrorClass */ .L)(_super => function UnsubscriptionErrorImpl(errors) {
  _super(this);
  this.message = errors ? `${errors.length} errors occurred during unsubscription:
${errors.map((err, i) => `${i + 1}) ${err.toString()}`).join('\n  ')}` : '';
  this.name = 'UnsubscriptionError';
  this.errors = errors;
});
//# sourceMappingURL=UnsubscriptionError.js.map

/***/ }),

/***/ 19062:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ scheduleIterable)
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72288);
/* harmony import */ var _symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87902);
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(46908);
/* harmony import */ var _util_executeSchedule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50952);




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

/***/ 19254:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   x: () => (/* binding */ isIterable)
/* harmony export */ });
/* harmony import */ var _symbol_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87902);
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46908);


function isIterable(input) {
  return (0,_isFunction__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .T)(input === null || input === void 0 ? void 0 : input[_symbol_iterator__WEBPACK_IMPORTED_MODULE_1__/* .iterator */ .l]);
}
//# sourceMappingURL=isIterable.js.map

/***/ }),

/***/ 20097:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ NgxMagicSignInWorkspaceComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(73014);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(27075);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9620);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(82106);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(49454);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8657);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(97234);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5488);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12043);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(26024);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(71924);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(36042);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(54263);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _ui_core_theme_src_lib_components_gauzy_logo_gauzy_logo_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(85662);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(14572);
/* harmony import */ var _workspace_selection_workspace_selection_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(861);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(19223);















function NgxMagicSignInWorkspaceComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainer"] */ .eu8(0);
  }
}
function NgxMagicSignInWorkspaceComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "ngx-workspace-selection", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("selectedWorkspace", function NgxMagicSignInWorkspaceComponent_ng_template_1_Template_ngx_workspace_selection_selectedWorkspace_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.signInWorkspace($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("workspaces", ctx_r1.workspaces)("confirmed_email", ctx_r1.confirmed_email);
  }
}
function NgxMagicSignInWorkspaceComponent_ng_template_3_div_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 10)(1, "div", 11)(2, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(5, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(4, 2, "WORKSPACES.FAIL_SIGNIN_TITLE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(7, 4, "WORKSPACES.FAIL_SIGNIN_SUB_TITLE"));
  }
}
function NgxMagicSignInWorkspaceComponent_ng_template_3_div_0_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 14)(1, "div", 11)(2, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(5, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(4, 2, "WORKSPACES.SUCCESS_SIGNIN_TITLE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(7, 4, "WORKSPACES.SUCCESS_SIGNIN_SUB_TITLE"));
  }
}
function NgxMagicSignInWorkspaceComponent_ng_template_3_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "ngx-gauzy-logo", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(2, NgxMagicSignInWorkspaceComponent_ng_template_3_div_0_div_2_Template, 8, 6, "div", 7)(3, NgxMagicSignInWorkspaceComponent_ng_template_3_div_0_div_3_Template, 8, 6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(4, "div")(5, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("isAccordion", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r1.error);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r1.success);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(7, 4, "WORKSPACES.THANKING_TEXT"));
  }
}
function NgxMagicSignInWorkspaceComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(0, NgxMagicSignInWorkspaceComponent_ng_template_3_div_0_Template, 8, 6, "div", 4);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r1.success || ctx_r1.error);
  }
}
let NgxMagicSignInWorkspaceComponent = /*#__PURE__*/(() => {
  let NgxMagicSignInWorkspaceComponent = class NgxMagicSignInWorkspaceComponent {
    constructor(_activatedRoute, _router, _store, _authService, _errorHandlingService) {
      this._activatedRoute = _activatedRoute;
      this._router = _router;
      this._store = _store;
      this._authService = _authService;
      this._errorHandlingService = _errorHandlingService;
      this.error = false;
      this.success = false;
      this.show_popup = false;
      this.workspaces = []; // Array of workspace users
    }
    ngOnInit() {
      // Create an observable to listen to query parameter changes in the current route.
      this._activatedRoute.queryParams.pipe(
      // Filter and ensure that query parameters are present.
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__/* .filter */ .p)(params => !!params),
      // Filter and ensure that query parameters are present.
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__/* .filter */ .p)(({
        email,
        code
      }) => !!email && !!code),
      // Tap into the observable to update the 'form.email' property with the 'email' query parameter.
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .tap */ .M)(({
        email,
        code
      }) => {
        if (email && code) {
          this.confirmSingInCode();
        }
      }),
      // Use 'untilDestroyed' to handle component lifecycle and avoid memory leaks.
      (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__/* .untilDestroyed */ .s)(this)).subscribe();
    }
    /**
     * Confirm the sign in code
     */
    confirmSingInCode() {
      var _this = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(function* () {
        // Get the email & code value from the query params
        const {
          email,
          code
        } = _this._activatedRoute.snapshot.queryParams;
        if (!email || !code) {
          return;
        }
        try {
          // Send a request to sign in to workspaces using the authentication service
          yield (0,rxjs__WEBPACK_IMPORTED_MODULE_5__/* .firstValueFrom */ ._)(_this._authService.confirmSignInByCode({
            email,
            code
          }).pipe(
          // Update component state with the fetched workspaces
          (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .tap */ .M)(({
            workspaces,
            show_popup,
            total_workspaces,
            confirmed_email
          }) => {
            if (confirmed_email) {
              _this.workspaces = workspaces;
              _this.show_popup = show_popup;
              _this.confirmed_email = confirmed_email;
              _this.total_workspaces = total_workspaces;
              /** */
              if (total_workspaces == 1) {
                const [workspace] = workspaces;
                _this.signInWorkspace(workspace);
              }
            }
          }),
          // Handle component lifecycle to avoid memory leaks
          (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__/* .untilDestroyed */ .s)(_this))); // Wait for the login request to complete
        } catch (error) {
          _this.error = true;
          // Sleeps for 5 seconds before Redirecting you to the app
          const sleepDelay = 5000;
          yield (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_6__/* .sleep */ .yy)(sleepDelay);
          _this._router.navigate(['/auth/login-magic']);
        }
      })();
    }
    /**
     * Continue the workspace sign-in process.
     */
    signInWorkspace(workspace) {
      var _this2 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(function* () {
        if (!workspace || !_this2.confirmed_email) {
          return; // Exit if the no workspace
        }
        _this2.show_popup = false;
        _this2.success = true;
        // Sleeps for 2 seconds before Redirecting you to the app
        const sleepDelay = 2000;
        yield (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_6__/* .sleep */ .yy)(sleepDelay);
        // Extract workspace, email, and token from the parameter and component state
        const email = _this2.confirmed_email;
        const token = workspace.token;
        try {
          // Send a request to sign in to the workspace using the authentication service
          _this2._authService.signinWorkspaceByToken({
            email,
            token
          }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__/* .filter */ .p)(({
            user,
            token
          }) => !!user && !!token), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .tap */ .M)(response => {
            const user = response.user;
            const token = response.token;
            const refresh_token = response.refresh_token;
            /** */
            _this2._store.userId = user.id;
            _this2._store.user = user;
            _this2._store.token = token;
            _this2._store.refresh_token = refresh_token;
            _this2._store.organizationId = user.employee?.organizationId;
            _this2._store.tenantId = user.tenantId;
            _this2._router.navigate(['/']);
          }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .catchError */ .W)(error => {
            // Handle and log errors using the error handling service
            _this2._errorHandlingService.handleError(error);
            return rxjs__WEBPACK_IMPORTED_MODULE_8__/* .EMPTY */ .w;
          }),
          // Handle component lifecycle to avoid memory leaks
          (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__/* .untilDestroyed */ .s)(_this2)).subscribe();
        } catch (error) {
          console.log('Error while signing in workspace', error);
          _this2._errorHandlingService.handleError(error);
        }
      })();
    }
    static {
      this.ɵfac = function NgxMagicSignInWorkspaceComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || NgxMagicSignInWorkspaceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_router__WEBPACK_IMPORTED_MODULE_9__/* .ActivatedRoute */ .nX), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_router__WEBPACK_IMPORTED_MODULE_9__/* .Router */ .Ix), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_10__/* .Store */ .il), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_11__/* .AuthService */ .u), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_12__/* .ErrorHandlingService */ .X));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: NgxMagicSignInWorkspaceComponent,
        selectors: [["ngx-magic-sign-in-workspace"]],
        standalone: false,
        decls: 5,
        vars: 3,
        consts: [["showWorkspacesTemplate", ""], ["showMessagesTemplate", ""], [4, "ngIf", "ngIfThen", "ngIfElse"], [3, "selectedWorkspace", "workspaces", "confirmed_email"], ["class", "message-container", 4, "ngIf"], [1, "message-container"], [1, "ever-logo-svg", 3, "isAccordion"], ["class", "error", 4, "ngIf"], ["class", "success", 4, "ngIf"], [1, "thanking-text"], [1, "error"], [1, "text"], [1, "title"], [1, "sub-title"], [1, "success"]],
        template: function NgxMagicSignInWorkspaceComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(0, NgxMagicSignInWorkspaceComponent_ng_container_0_Template, 1, 0, "ng-container", 2)(1, NgxMagicSignInWorkspaceComponent_ng_template_1_Template, 1, 2, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplateRefExtractor"] */ .C5r)(3, NgxMagicSignInWorkspaceComponent_ng_template_3_Template, 1, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplateRefExtractor"] */ .C5r);
          }
          if (rf & 2) {
            const showWorkspacesTemplate_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(2);
            const showMessagesTemplate_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.show_popup)("ngIfThen", showWorkspacesTemplate_r3)("ngIfElse", showMessagesTemplate_r4);
          }
        },
        dependencies: [_ui_core_theme_src_lib_components_gauzy_logo_gauzy_logo_component__WEBPACK_IMPORTED_MODULE_13__/* .GauzyLogoComponent */ .p, _angular_common__WEBPACK_IMPORTED_MODULE_14__/* .NgIf */ .bT, _workspace_selection_workspace_selection_component__WEBPACK_IMPORTED_MODULE_15__/* .WorkspaceSelectionComponent */ .J, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__/* .TranslatePipe */ .D9],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.ever-logo-svg[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n  align-self: center;\n}\n\n.message-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  background: var(--gauzy-card-2);\n  border-radius: var(--border-radius);\n  box-sizing: border-box;\n  padding: 30px;\n  width: 50vw;\n  height: 75vh;\n  margin: 10px 0;\n}\n\n.error[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: #FF4040;\n}\n\n.title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 1.1rem;\n}\n\n.sub-title[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--text-hint-color);\n}\n\n.thanking-text[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 0.8rem;\n}\n\n.icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  margin-right: 15px;\n}\n\nh3[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}"]
      });
    }
  };
  NgxMagicSignInWorkspaceComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_17__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__/* .UntilDestroy */ .d)({
    checkProperties: true
  }), (0,tslib__WEBPACK_IMPORTED_MODULE_17__/* .__metadata */ .Sn)("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_9__/* .ActivatedRoute */ .nX, _angular_router__WEBPACK_IMPORTED_MODULE_9__/* .Router */ .Ix, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_10__/* .Store */ .il, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_11__/* .AuthService */ .u, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_12__/* .ErrorHandlingService */ .X])], NgxMagicSignInWorkspaceComponent);
  return NgxMagicSignInWorkspaceComponent;
})();


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

/***/ 20614:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G: () => (/* binding */ NgxAuthModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(9620);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(908);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(45715);
/* harmony import */ var _nebular_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17523);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56383);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(19223);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(52127);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(6828);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(49338);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(57952);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(27038);
/* harmony import */ var _gauzy_ui_core_theme__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(92789);
/* harmony import */ var _gauzy_ui_core_theme__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(10316);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(8539);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(36967);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(38834);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(38434);
/* harmony import */ var _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(99209);
/* harmony import */ var _auth_routes__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(70291);
/* harmony import */ var _components_workspace_selection_workspace_selection_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(861);
/* harmony import */ var _components_social_links_social_links_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(51265);
/* harmony import */ var _components_login_workspace_login_workspace_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(22741);
/* harmony import */ var _components_login_magic_login_magic_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(77817);
/* harmony import */ var _components_magic_login_workspace_magic_login_workspace_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(20097);
/* harmony import */ var _components_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(55985);
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(39037);
/* harmony import */ var _components_auth_auth_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(64967);
/* harmony import */ var _components_register_register_side_features_register_side_single_feature_register_side_single_feature_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(38145);
/* harmony import */ var _components_register_register_side_features_register_side_features_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(82167);
/* harmony import */ var _components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(99753);
/* harmony import */ var _components_whats_new_whats_new_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(22569);
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(82813);
/* harmony import */ var _components_confirm_email_confirm_email_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(789);
/* harmony import */ var _components_accept_invite_accept_invite_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(87229);
/* harmony import */ var _components_accept_invite_accept_invite_form_accept_invite_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(33920);
/* harmony import */ var _components_accept_client_invite_accept_client_invite_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71919);
/* harmony import */ var _components_accept_client_invite_accept_client_invite_form_accept_client_invite_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(63308);
/* harmony import */ var _components_estimate_email_estimate_email_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9073);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(26860);


































// Nebular Modules
const NB_MODULES = [_nebular_theme__WEBPACK_IMPORTED_MODULE_0__/* .NbAccordionModule */ .LtP, _nebular_theme__WEBPACK_IMPORTED_MODULE_0__/* .NbAlertModule */ .dQU, _nebular_auth__WEBPACK_IMPORTED_MODULE_1__/* .NbAuthModule */ .bI, _nebular_theme__WEBPACK_IMPORTED_MODULE_0__/* .NbButtonModule */ .P5N, _nebular_theme__WEBPACK_IMPORTED_MODULE_0__/* .NbCardModule */ .lVF, _nebular_theme__WEBPACK_IMPORTED_MODULE_0__/* .NbCheckboxModule */ .Ad8, _nebular_theme__WEBPACK_IMPORTED_MODULE_0__/* .NbDialogModule */ .nZv.forChild(), _nebular_theme__WEBPACK_IMPORTED_MODULE_0__/* .NbFormFieldModule */ .NeG, _nebular_theme__WEBPACK_IMPORTED_MODULE_0__/* .NbIconModule */ .clu, _nebular_theme__WEBPACK_IMPORTED_MODULE_0__/* .NbInputModule */ .pty, _nebular_theme__WEBPACK_IMPORTED_MODULE_0__/* .NbLayoutModule */ .llX, _nebular_theme__WEBPACK_IMPORTED_MODULE_0__/* .NbListModule */ .PD_, _nebular_theme__WEBPACK_IMPORTED_MODULE_0__/* .NbSelectModule */ .VcP, _nebular_theme__WEBPACK_IMPORTED_MODULE_0__/* .NbSpinnerModule */ .gYs, _nebular_theme__WEBPACK_IMPORTED_MODULE_0__/* .NbTooltipModule */ .IB0];
// Components
const COMPONENTS = [_components_accept_client_invite_accept_client_invite_component__WEBPACK_IMPORTED_MODULE_2__/* .AcceptClientInviteComponent */ .G, _components_accept_client_invite_accept_client_invite_form_accept_client_invite_form_component__WEBPACK_IMPORTED_MODULE_3__/* .AcceptClientInviteFormComponent */ .c, _components_accept_invite_accept_invite_component__WEBPACK_IMPORTED_MODULE_4__/* .AcceptInviteComponent */ .$, _components_accept_invite_accept_invite_form_accept_invite_form_component__WEBPACK_IMPORTED_MODULE_5__/* .AcceptInviteFormComponent */ .R, _components_confirm_email_confirm_email_component__WEBPACK_IMPORTED_MODULE_6__/* .ConfirmEmailComponent */ .a, _components_estimate_email_estimate_email_component__WEBPACK_IMPORTED_MODULE_7__/* .EstimateEmailComponent */ .q, _components_auth_auth_component__WEBPACK_IMPORTED_MODULE_8__/* .NgxAuthComponent */ .v, _components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_9__/* .NgxForgotPasswordComponent */ .T, _components_login_login_component__WEBPACK_IMPORTED_MODULE_10__/* .NgxLoginComponent */ .y, _components_login_magic_login_magic_component__WEBPACK_IMPORTED_MODULE_11__/* .NgxLoginMagicComponent */ .V, _components_login_workspace_login_workspace_component__WEBPACK_IMPORTED_MODULE_12__/* .NgxLoginWorkspaceComponent */ .P, _components_magic_login_workspace_magic_login_workspace_component__WEBPACK_IMPORTED_MODULE_13__/* .NgxMagicSignInWorkspaceComponent */ .$, _components_register_register_component__WEBPACK_IMPORTED_MODULE_14__/* .NgxRegisterComponent */ .k, _components_register_register_side_features_register_side_features_component__WEBPACK_IMPORTED_MODULE_15__/* .NgxRegisterSideFeaturesComponent */ .s, _components_register_register_side_features_register_side_single_feature_register_side_single_feature_component__WEBPACK_IMPORTED_MODULE_16__/* .NgxRegisterSideSingleFeatureComponent */ .t, _components_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_17__/* .NgxResetPasswordComponent */ .L, _components_whats_new_whats_new_component__WEBPACK_IMPORTED_MODULE_18__/* .NgxWhatsNewComponent */ .Q, _components_social_links_social_links_component__WEBPACK_IMPORTED_MODULE_19__/* .SocialLinksComponent */ .u, _components_workspace_selection_workspace_selection_component__WEBPACK_IMPORTED_MODULE_20__/* .WorkspaceSelectionComponent */ .J];
const THIRD_PARTY_MODULES = [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__/* .TranslateModule */ .h.forRoot({
  defaultLanguage: (0,_gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_22__/* .getBrowserLanguage */ .x)(),
  // Get the browser language and fall back to a default if needed
  loader: {
    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__/* .TranslateLoader */ .Wr,
    useFactory: _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_23__/* .HttpLoaderFactory */ .M,
    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_24__/* .HttpClient */ .Qq]
  }
})];
let NgxAuthModule = /*#__PURE__*/(() => {
  class NgxAuthModule {
    static {
      this.hasRegisteredPageRoutes = false;
    } // Flag to check if routes have been registered
    constructor(_pageRouteRegistryService) {
      this._pageRouteRegistryService = _pageRouteRegistryService;
      // Register the routes
      this.registerPageRoutes();
    }
    /**
     * Registers routes for the auth module.
     * Ensures that routes are registered only once.
     *
     * @returns {void}
     */
    registerPageRoutes() {
      if (NgxAuthModule.hasRegisteredPageRoutes) {
        return;
      }
      // Register the login workspace route
      this._pageRouteRegistryService.registerPageRoutes([{
        // Register the location 'auth'
        location: 'auth',
        // Register the path 'login-workspace'
        path: 'login-workspace',
        // Register the component to load component: NgxLoginWorkspaceComponent,
        component: _components_login_workspace_login_workspace_component__WEBPACK_IMPORTED_MODULE_12__/* .NgxLoginWorkspaceComponent */ .P,
        // Register the data object
        canActivate: [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_25__/* .NoAuthGuard */ .d]
      }, {
        // Register the location 'auth'
        location: 'auth',
        // Register the path 'login-magic'
        path: 'login-magic',
        // Register the component to load component: NgxLoginMagicComponent,
        component: _components_login_magic_login_magic_component__WEBPACK_IMPORTED_MODULE_11__/* .NgxLoginMagicComponent */ .V,
        // Register the data object
        canActivate: [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_25__/* .NoAuthGuard */ .d]
      }, {
        // Register the location 'auth'
        location: 'auth',
        // Register the path 'magic-sign-in'
        path: 'magic-sign-in',
        // Register the component to load component: NgxMagicSignInWorkspaceComponent,
        component: _components_magic_login_workspace_magic_login_workspace_component__WEBPACK_IMPORTED_MODULE_13__/* .NgxMagicSignInWorkspaceComponent */ .$,
        // Register the data object
        canActivate: [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_25__/* .NoAuthGuard */ .d]
      }]);
      // Set hasRegisteredRoutes to true
      NgxAuthModule.hasRegisteredPageRoutes = true;
    }
    static {
      this.ɵfac = function NgxAuthModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || NgxAuthModule)(_angular_core__WEBPACK_IMPORTED_MODULE_26__/* ["ɵɵinject"] */ .KVO(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_27__/* .PageRouteRegistryService */ .L));
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_26__/* ["ɵɵdefineNgModule"] */ .$C({
        type: NgxAuthModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_26__/* ["ɵɵdefineInjector"] */ .G2t({
        providers: [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_28__/* .ElectronService */ .Y, {
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_29__/* .ROUTES */ .bw,
          useFactory: pageRouteRegistryService => (0,_auth_routes__WEBPACK_IMPORTED_MODULE_30__/* .createAuthRoutes */ .Z)(pageRouteRegistryService),
          deps: [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_27__/* .PageRouteRegistryService */ .L],
          multi: true
        }, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_31__/* .InviteService */ .p, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_32__/* .RoleService */ .W],
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_33__/* .RouterModule */ .iI.forChild([]), NB_MODULES, THIRD_PARTY_MODULES, _gauzy_ui_core_theme__WEBPACK_IMPORTED_MODULE_34__/* .ThemeSelectorModule */ .r, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_35__/* .NgxFaqModule */ .G, _gauzy_ui_core_theme__WEBPACK_IMPORTED_MODULE_36__/* .ThemeModule */ .O, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_37__/* .SharedModule */ .G, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_38__/* .PasswordFormFieldModule */ .G]
      });
    }
  }
  return NgxAuthModule;
})();

/***/ }),

/***/ 21663:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   h: () => (/* binding */ AutocompleteOffDirective)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48901);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26860);



/**
 * Alterates autocomplete="off" attribute on chrome because it's ignoring it in case of credentials, address or credit card data type.
 */
let AutocompleteOffDirective = /*#__PURE__*/(() => {
  class AutocompleteOffDirective {
    constructor(_renderer, _el, _zone) {
      this._renderer = _renderer;
      this._el = _el;
      this._zone = _zone;
    }
    ngOnInit() {
      this._zone.runOutsideAngular(() => {
        if (this._el.nativeElement && this._el.nativeElement.hasAttribute('autocomplete-off')) {
          /**
           * disabled autocomplete for form
           */
          rxjs__WEBPACK_IMPORTED_MODULE_0__/* .asapScheduler */ .$.schedule(() => this._el.nativeElement.setAttribute('autocomplete', 'off'));
          /**
           * disabled autocomplete for all inputs inside form
           */
          const inputs = Array.prototype.slice.call(this._el.nativeElement.querySelectorAll('input'));
          inputs.forEach(element => {
            this._renderer.setAttribute(element, 'autocomplete', 'off');
            this._renderer.setAttribute(element, 'autocorrect', 'off');
            this._renderer.setAttribute(element, 'autocapitalize', 'none');
            this._renderer.setAttribute(element, 'spellcheck', 'false');
          });
        }
      });
    }
    static {
      this.ɵfac = function AutocompleteOffDirective_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || AutocompleteOffDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* .Renderer2 */ .sFG), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* .ElementRef */ .aKT), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* .NgZone */ .SKi));
      };
    }
    static {
      this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineDirective"] */ .FsC({
        type: AutocompleteOffDirective,
        selectors: [["", "autocomplete-off", ""]],
        standalone: false
      });
    }
  }
  return AutocompleteOffDirective;
})();

/***/ }),

/***/ 22331:
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

/***/ 22569:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Q: () => (/* binding */ NgxWhatsNewComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(27075);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12043);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(97234);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(87716);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(56383);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(14572);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(19223);









function NgxWhatsNewComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 5)(1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(2, "nb-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(3, "div", 8)(4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(6, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(9, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("icon", item_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(item_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(8, 4, item_r1.date));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", item_r1.content, " ");
  }
}
function NgxWhatsNewComponent_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(1, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("href", ctx_r1.learnMore, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵsanitizeUrl"] */ .B4B);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(3, 2, "CHANGELOG_MENU.LEARN_MORE_URL"), " ");
  }
}
let NgxWhatsNewComponent = /*#__PURE__*/(() => {
  let NgxWhatsNewComponent = class NgxWhatsNewComponent {
    constructor(_changelogService) {
      this._changelogService = _changelogService;
      this.items$ = this._changelogService.changelogs$;
    }
    ngOnInit() {
      this._changelogService.getAll({
        isFeature: 0
      }).pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_1__/* .untilDestroyed */ .s)(this)).subscribe();
      this.items$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .tap */ .M)(changeLogs => changeLogs.forEach(x => this.learnMore = x.learnMoreUrl)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_1__/* .untilDestroyed */ .s)(this)).subscribe();
    }
    static {
      this.ɵfac = function NgxWhatsNewComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || NgxWhatsNewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_3__/* .ChangelogService */ .m));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: NgxWhatsNewComponent,
        selectors: [["ngx-whats-new"]],
        standalone: false,
        decls: 8,
        vars: 7,
        consts: [[1, "section-wrapper"], [1, "whats-new-wrapper"], [1, "main-header"], ["class", "entry", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "entry"], [1, "entry-headings-wrapper"], [1, "icon", 3, "icon"], [1, "entry-headings"], [1, "entry-header"], [1, "entry-header-date"], [1, "paragraph"], ["nbButton", "", "outline", "", "status", "primary", 1, "learn-more", 3, "href"]],
        template: function NgxWhatsNewComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "section", 0)(1, "div", 1)(2, "h3", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(4, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(5, NgxWhatsNewComponent_div_5_Template, 11, 6, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(6, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(7, NgxWhatsNewComponent_ng_container_7_Template, 4, 4, "ng-container", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(4, 3, "CHANGELOG_MENU.HEADER"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(6, 5, ctx.items$));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.learnMore);
          }
        },
        dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbButtonComponent */ .YP2, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbIconComponent */ .tHu, _angular_common__WEBPACK_IMPORTED_MODULE_5__/* .NgForOf */ .Sq, _angular_common__WEBPACK_IMPORTED_MODULE_5__/* .NgIf */ .bT, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__/* .TranslatePipe */ .D9, _angular_common__WEBPACK_IMPORTED_MODULE_5__/* .AsyncPipe */ .Jj, _angular_common__WEBPACK_IMPORTED_MODULE_5__/* .DatePipe */ .vh],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.card[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-1);\n}\n\n.section-wrapper[_ngcontent-%COMP%] {\n  background: rgba(245, 109, 88, 0.05);\n  border-radius: var(--border-radius);\n  padding: 25px;\n  box-sizing: border-box;\n  width: 100%;\n}\n@media screen and (max-width: 490px) {\n  .section-wrapper[_ngcontent-%COMP%]   .learn-more[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n.whats-new-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n}\n.whats-new-wrapper[_ngcontent-%COMP%]   .main-header[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  font-family: Inter;\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 22px;\n  letter-spacing: -0.009em;\n  text-align: left;\n  margin-bottom: 19px;\n  padding-left: 5px;\n}\n.whats-new-wrapper[_ngcontent-%COMP%]   .entry[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n  border-bottom: 1px solid lightgray;\n  padding-left: 5px;\n  padding-right: 5px;\n}\n.whats-new-wrapper[_ngcontent-%COMP%]   .entry[_ngcontent-%COMP%]:last-of-type {\n  margin-bottom: 83px;\n}\n@media screen and (max-width: 490px) {\n  .whats-new-wrapper[_ngcontent-%COMP%]   .entry[_ngcontent-%COMP%]:last-of-type {\n    margin-bottom: 0;\n  }\n}\n.whats-new-wrapper[_ngcontent-%COMP%]   .entry[_ngcontent-%COMP%]   .entry-headings-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  margin-bottom: 5px;\n}\n.whats-new-wrapper[_ngcontent-%COMP%]   .entry[_ngcontent-%COMP%]   .entry-headings-wrapper[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  margin-right: 15px;\n  height: 14px;\n  margin-top: 3px;\n  color: var(--text-primary-color);\n}\n.whats-new-wrapper[_ngcontent-%COMP%]   .entry[_ngcontent-%COMP%]   .entry-headings-wrapper[_ngcontent-%COMP%]   .entry-header[_ngcontent-%COMP%] {\n  font-family: Inter;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 17px;\n  letter-spacing: 0em;\n  text-align: left;\n  margin-bottom: 5px;\n}\n.whats-new-wrapper[_ngcontent-%COMP%]   .entry[_ngcontent-%COMP%]   .entry-headings-wrapper[_ngcontent-%COMP%]   .entry-header-date[_ngcontent-%COMP%] {\n  font-family: Inter;\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 16px;\n  letter-spacing: 0em;\n  text-align: left;\n  color: var(--gauzy-text-2);\n}\n.whats-new-wrapper[_ngcontent-%COMP%]   .entry[_ngcontent-%COMP%]   .paragraph[_ngcontent-%COMP%] {\n  font-family: Inter;\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 16px;\n  letter-spacing: 0em;\n  text-align: left;\n}"]
      });
    }
  };
  NgxWhatsNewComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_1__/* .UntilDestroy */ .d)({
    checkProperties: true
  }), (0,tslib__WEBPACK_IMPORTED_MODULE_7__/* .__metadata */ .Sn)("design:paramtypes", [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_3__/* .ChangelogService */ .m])], NgxWhatsNewComponent);
  return NgxWhatsNewComponent;
})();


/***/ }),

/***/ 22741:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P: () => (/* binding */ NgxLoginWorkspaceComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(27075);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10936);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9620);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(49454);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8657);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(97234);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5488);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(12043);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18548);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(71924);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(36042);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(54263);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(12467);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(908);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(56383);
/* harmony import */ var _ui_core_theme_src_lib_components_gauzy_logo_gauzy_logo_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(85662);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(14572);
/* harmony import */ var _ui_core_shared_src_lib_directives_autocomplete_off_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(21663);
/* harmony import */ var _workspace_selection_workspace_selection_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(861);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(19223);
var NgxLoginWorkspaceComponent_1;




















const _c0 = () => ["/auth/login"];
const _c1 = () => ["/auth/register"];
function NgxLoginWorkspaceComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainer"] */ .eu8(0);
  }
}
function NgxLoginWorkspaceComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "section", 5)(1, "div", 6)(2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(3, "ngx-gauzy-logo", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(4, "h1", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(7, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainer"] */ .eu8(8, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(9, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(10, "section", 13)(11, "p", 14)(12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(15, "a", 15)(16, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(19, "p", 14)(20, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(22, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    const singInForm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("isAccordion", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(6, 8, "WORKSPACES.SIGN_IN_TITLE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngTemplateOutlet", singInForm_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(14, 10, "WORKSPACES.BACK_TO"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction0"] */ .lJ4(16, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(18, 12, "BUTTONS.LOGIN"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction0"] */ .lJ4(17, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(22, 14, "BUTTONS.REGISTER"));
  }
}
function NgxLoginWorkspaceComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "form", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("ngSubmit", function NgxLoginWorkspaceComponent_ng_template_3_Template_form_ngSubmit_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r2.onSubmit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(2, "input", 18)(3, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(4, "div", 20)(5, "div", 21)(6, "div", 22)(7, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(10, "input", 24, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(13, "ngx-password-form-field", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(16, "div", 26)(17, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("formGroup", ctx_r2.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(9, 6, "WORKSPACES.LABELS.EMAIL"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(12, 8, "WORKSPACES.PLACEHOLDERS.EMAIL"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("label", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(14, 10, "WORKSPACES.LABELS.PASSWORD"))("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(15, 12, "WORKSPACES.PLACEHOLDERS.PASSWORD"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(19, 14, "BUTTONS.SIGNIN"), " ");
  }
}
function NgxLoginWorkspaceComponent_ng_template_5_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(1, "ngx-workspace-selection", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("selectedWorkspace", function NgxLoginWorkspaceComponent_ng_template_5_ng_container_0_Template_ngx_workspace_selection_selectedWorkspace_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r2.signInWorkspace($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("workspaces", ctx_r2.workspaces)("confirmed_email", ctx_r2.confirmed_email);
  }
}
function NgxLoginWorkspaceComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(0, NgxLoginWorkspaceComponent_ng_template_5_ng_container_0_Template, 2, 2, "ng-container", 28);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r2.workspaces.length > 0);
  }
}
let NgxLoginWorkspaceComponent = /*#__PURE__*/(() => {
  let NgxLoginWorkspaceComponent = class NgxLoginWorkspaceComponent {
    static {
      NgxLoginWorkspaceComponent_1 = this;
    }
    /**
     * Static method to build a FormGroup for the sign-in form.
     *
     * @param fb - The FormBuilder service for creating form controls.
     * @returns A FormGroup for the sign-in form.
     */
    static buildForm(fb) {
      return fb.group({
        email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .Validators */ .k0.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .Validators */ .k0.email]],
        // Email input with email validation
        password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .Validators */ .k0.required] // Password input with required validation
      });
    }
    constructor(_router, _store, _fb, _authService, _errorHandlingService) {
      this._router = _router;
      this._store = _store;
      this._fb = _fb;
      this._authService = _authService;
      this._errorHandlingService = _errorHandlingService;
      this.show_popup = false;
      this.loading = false; // Flag to indicate if data loading is in progress
      this.workspaces = []; // Array of workspace users
      /** The FormGroup for the sign-in form */
      this.form = NgxLoginWorkspaceComponent_1.buildForm(this._fb);
    }
    ngOnInit() {}
    /**
     * Handle the form submission.
     */
    onSubmit() {
      if (this.form.invalid) {
        return; // Exit if the form is invalid
      }
      try {
        //
        this.loading = true;
        // Get the values of email and password from the form
        const email = this.form.get('email').value;
        const password = this.form.get('password').value;
        // Send a request to sign in to workspaces using the authentication service
        this._authService.findWorkspaces({
          email,
          password
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .tap */ .M)(response => {
          if (response['status'] === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__/* .HttpStatus */ .t.UNAUTHORIZED) {
            throw new Error(`${response['message']}`);
          }
        }),
        // Update component state with the fetched workspaces
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .tap */ .M)(({
          workspaces,
          show_popup,
          total_workspaces,
          confirmed_email
        }) => {
          this.workspaces = workspaces;
          this.show_popup = show_popup;
          this.confirmed_email = confirmed_email;
          this.total_workspaces = total_workspaces;
          /** */
          if (total_workspaces == 1) {
            const [workspace] = this.workspaces;
            this.signInWorkspace(workspace);
          }
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .catchError */ .W)(error => {
          // Handle and log errors using the error handling service
          this._errorHandlingService.handleError(error);
          return rxjs__WEBPACK_IMPORTED_MODULE_5__/* .EMPTY */ .w;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .tap */ .M)(() => this.loading = false),
        // Turn off loading indicator
        // Handle component lifecycle to avoid memory leaks
        (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__/* .untilDestroyed */ .s)(this)).subscribe();
      } catch (error) {
        console.log(error);
      }
    }
    /**
     * Continue the workspace sign-in process.
     */
    signInWorkspace(workspace) {
      if (!workspace || !this.confirmed_email) {
        return; // Exit if the no workspace
      }
      // Extract workspace, email, and token from the parameter and component state
      const email = this.confirmed_email;
      const token = workspace.token;
      // Send a request to sign in to the workspace using the authentication service
      this._authService.signinWorkspaceByToken({
        email,
        token
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .tap */ .M)(response => {
        if (response['status'] === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__/* .HttpStatus */ .t.UNAUTHORIZED) {
          throw new Error(`${response['message']}`);
        }
      }), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__/* .filter */ .p)(({
        user,
        token
      }) => !!user && !!token), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .tap */ .M)(response => {
        const user = response.user;
        const token = response.token;
        const refresh_token = response.refresh_token;
        /** */
        this._store.userId = user.id;
        this._store.user = user;
        this._store.token = token;
        this._store.refresh_token = refresh_token;
        this._store.organizationId = user.employee?.organizationId;
        this._store.tenantId = user.tenantId;
        this._router.navigate(['/']);
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .catchError */ .W)(error => {
        // Handle and log errors using the error handling service
        this._errorHandlingService.handleError(error);
        return rxjs__WEBPACK_IMPORTED_MODULE_5__/* .EMPTY */ .w;
      }),
      // Handle component lifecycle to avoid memory leaks
      (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__/* .untilDestroyed */ .s)(this)).subscribe();
    }
    static {
      this.ɵfac = function NgxLoginWorkspaceComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || NgxLoginWorkspaceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_router__WEBPACK_IMPORTED_MODULE_8__/* .Router */ .Ix), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_9__/* .Store */ .il), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .UntypedFormBuilder */ .ze), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_10__/* .AuthService */ .u), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_11__/* .ErrorHandlingService */ .X));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: NgxLoginWorkspaceComponent,
        selectors: [["ngx-login-workspace"]],
        viewQuery: function NgxLoginWorkspaceComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵviewQuery"] */ .GBs(_gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_12__/* .PasswordFormFieldComponent */ .N, 7);
          }
          if (rf & 2) {
            let _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵqueryRefresh"] */ .mGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵloadQuery"] */ .lsd()) && (ctx.password = _t.first);
          }
        },
        standalone: false,
        decls: 7,
        vars: 3,
        consts: [["singInTemplate", ""], ["singInForm", ""], ["workspacesTemplate", ""], ["email", ""], [4, "ngIf", "ngIfThen", "ngIfElse"], [1, "section-wrapper"], [1, "-wrapper"], [1, "svg-wrapper"], [1, "ever-logo-svg", 3, "isAccordion"], [1, "title"], [1, "hr-div-strong"], [3, "ngTemplateOutlet"], [1, "hr-div-soft"], ["aria-label", "Sign in or sign up", 1, "sign-in-or-up"], [1, "redirect-link-p"], [1, "text-link", 3, "routerLink"], ["autocomplete-off", "", 1, "form", 3, "ngSubmit", "formGroup"], [2, "height", "0", "overflow", "hidden"], ["type", "email", "value", "", 1, "", 2, "opacity", "0"], ["type", "password", "value", "", 1, "d-", 2, "opacity", "0"], [1, "row"], [1, "col"], [1, "form-group"], ["for", "email", 1, "label"], ["nbInput", "", "id", "email", "name", "email", "type", "email", "fullWidth", "", "fieldSize", "large", "formControlName", "email", 3, "placeholder"], ["id", "password", "autocomplete", "password", "formControlName", "password", 3, "label", "placeholder"], [1, "submit-btn-wrapper"], ["nbButton", "", "size", "small", "type", "submit", 1, "submit-btn"], [4, "ngIf"], [3, "selectedWorkspace", "workspaces", "confirmed_email"]],
        template: function NgxLoginWorkspaceComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(0, NgxLoginWorkspaceComponent_ng_container_0_Template, 1, 0, "ng-container", 4)(1, NgxLoginWorkspaceComponent_ng_template_1_Template, 23, 18, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplateRefExtractor"] */ .C5r)(3, NgxLoginWorkspaceComponent_ng_template_3_Template, 20, 16, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplateRefExtractor"] */ .C5r)(5, NgxLoginWorkspaceComponent_ng_template_5_Template, 1, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplateRefExtractor"] */ .C5r);
          }
          if (rf & 2) {
            const singInTemplate_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(2);
            const workspacesTemplate_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.show_popup)("ngIfThen", workspacesTemplate_r6)("ngIfElse", singInTemplate_r5);
          }
        },
        dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_13__/* .RouterLink */ .Wk, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbButtonComponent */ .YP2, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbInputDirective */ .i6h, _ui_core_theme_src_lib_components_gauzy_logo_gauzy_logo_component__WEBPACK_IMPORTED_MODULE_15__/* .GauzyLogoComponent */ .p, _angular_common__WEBPACK_IMPORTED_MODULE_16__/* .NgIf */ .bT, _angular_common__WEBPACK_IMPORTED_MODULE_16__/* .NgTemplateOutlet */ .T3, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* ["ɵNgNoValidate"] */ .qT, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .DefaultValueAccessor */ .me, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .NgControlStatus */ .BC, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .NgControlStatusGroup */ .cb, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .FormGroupDirective */ .j4, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .FormControlName */ .JD, _ui_core_shared_src_lib_directives_autocomplete_off_directive__WEBPACK_IMPORTED_MODULE_17__/* .AutocompleteOffDirective */ .h, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_12__/* .PasswordFormFieldComponent */ .N, _workspace_selection_workspace_selection_component__WEBPACK_IMPORTED_MODULE_18__/* .WorkspaceSelectionComponent */ .J, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__/* .TranslatePipe */ .D9],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.card[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-1);\n}\n\n[_nghost-%COMP%]   .section-wrapper[_ngcontent-%COMP%] {\n  width: 765px;\n  display: flex;\n  justify-content: space-between;\n}\n[_nghost-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .-wrapper[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-2);\n  border-radius: var(--border-radius);\n  padding: 30px;\n  width: 476px;\n}\n[_nghost-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .-wrapper[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  padding-left: 15px;\n  padding-right: 15px;\n}\n[_nghost-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .-wrapper[_ngcontent-%COMP%]   .svg-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 57px;\n}\n[_nghost-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .-wrapper[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-family: Inter;\n  font-size: 24px;\n  font-style: normal;\n  font-weight: 700;\n  line-height: 30px;\n  letter-spacing: 0em;\n  text-align: left;\n}\n[_nghost-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .-wrapper[_ngcontent-%COMP%]   .sub-title[_ngcontent-%COMP%] {\n  width: 358px;\n  height: 34px;\n  font-family: \"Inter\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 17px;\n  display: flex;\n  align-items: center;\n  text-align: start;\n  margin-bottom: 15px;\n}\n[_nghost-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .-wrapper[_ngcontent-%COMP%]   .hr-div-strong[_ngcontent-%COMP%] {\n  width: 416px;\n  height: 1px;\n  border-radius: 1px;\n  transform: matrix(1, 0, 0, -1, 0, 0);\n  background: var(--border-alternative-color-4);\n  opacity: 0.15;\n  margin-bottom: 29px;\n  padding-left: 0;\n  padding-right: 0;\n}\n@media screen and (max-width: 490px) {\n  [_nghost-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .-wrapper[_ngcontent-%COMP%]   .hr-div-strong[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n[_nghost-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .-wrapper[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .form-control-group[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n[_nghost-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .-wrapper[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .form-control-group[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-family: \"Inter\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 11px;\n  line-height: 13px;\n  display: flex;\n  align-items: center;\n  letter-spacing: -0.01em;\n  color: #7e7e8f;\n}\n[_nghost-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .-wrapper[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .submit-btn-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n}\n[_nghost-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .-wrapper[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .submit-btn-wrapper[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%] {\n  padding: 13px 39px;\n  box-shadow: 0px 19px 15px -14px rgba(0, 0, 0, 0.22);\n  font-family: Inter;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 700;\n  line-height: 16px;\n  letter-spacing: -0.009em;\n  text-align: left;\n  margin-bottom: 25px;\n  margin-top: 15px;\n}\n[_nghost-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .-wrapper[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .submit-btn-wrapper[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%]:enabled {\n  background-color: #fa754e;\n  border: 1px solid #fa754e;\n  color: #ffffff;\n}\n[_nghost-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .-wrapper[_ngcontent-%COMP%]   .hr-div-soft[_ngcontent-%COMP%] {\n  width: 416px;\n  height: 1px;\n  background: var(--border-alternative-color-4);\n  opacity: 0.05;\n  border-radius: 1px;\n  transform: matrix(1, 0, 0, -1, 0, 0);\n  padding-left: 0;\n  padding-right: 0;\n}\n@media screen and (max-width: 490px) {\n  [_nghost-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .-wrapper[_ngcontent-%COMP%]   .hr-div-soft[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n[_nghost-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .-wrapper[_ngcontent-%COMP%]   .redirect-link-p[_ngcontent-%COMP%] {\n  font-family: \"Inter\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 17px;\n  \n\n  color: #7e7e8f;\n  margin-bottom: 0;\n}\n[_nghost-%COMP%]   .section-wrapper[_ngcontent-%COMP%]   .-wrapper[_ngcontent-%COMP%]   .redirect-link-p[_ngcontent-%COMP%]   .text-link[_ngcontent-%COMP%] {\n  font-family: Inter;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 17px;\n  letter-spacing: 0em;\n  color: #6e49e8;\n  text-decoration: none;\n}"]
      });
    }
  };
  return NgxLoginWorkspaceComponent;
})();
NgxLoginWorkspaceComponent = NgxLoginWorkspaceComponent_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_20__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__/* .UntilDestroy */ .d)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_20__/* .__metadata */ .Sn)("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_8__/* .Router */ .Ix, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_9__/* .Store */ .il, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .UntypedFormBuilder */ .ze, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_10__/* .AuthService */ .u, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_11__/* .ErrorHandlingService */ .X])], NgxLoginWorkspaceComponent);


/***/ }),

/***/ 24754:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: () => (/* binding */ AsyncScheduler)
/* harmony export */ });
/* harmony import */ var _Scheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69716);

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

/***/ 25483:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   m: () => (/* binding */ isScheduler)
/* harmony export */ });
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46908);

function isScheduler(value) {
  return value && (0,_isFunction__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .T)(value.schedule);
}
//# sourceMappingURL=isScheduler.js.map

/***/ }),

/***/ 27038:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   W: () => (/* binding */ RoleService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(80189);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(64913);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26024);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26860);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45715);





let RoleService = /*#__PURE__*/(() => {
  class RoleService {
    constructor(http) {
      this.http = http;
    }
    getRoleByOptions(options) {
      return this.http.get(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_0__/* .API_PREFIX */ .m4}/roles/options`, {
        params: (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .toParams */ .SV)({
          ...options
        })
      });
    }
    getAll() {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__/* .firstValueFrom */ ._)(this.http.get(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_0__/* .API_PREFIX */ .m4}/roles`));
    }
    create(role) {
      return this.http.post(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_0__/* .API_PREFIX */ .m4}/roles`, {
        ...role
      });
    }
    delete(role) {
      return this.http.delete(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_0__/* .API_PREFIX */ .m4}/roles/${role.id}`);
    }
    getRoleById(roleId) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__/* .firstValueFrom */ ._)(this.http.get(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_0__/* .API_PREFIX */ .m4}/roles/${roleId}`));
    }
    static {
      this.ɵfac = function RoleService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || RoleService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵinject"] */ .KVO(_angular_common_http__WEBPACK_IMPORTED_MODULE_4__/* .HttpClient */ .Qq));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdefineInjectable"] */ .jDH({
        token: RoleService,
        factory: RoleService.ɵfac
      });
    }
  }
  return RoleService;
})();

/***/ }),

/***/ 27075:
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

/***/ 27944:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ createInvalidObservableTypeError)
/* harmony export */ });
function createInvalidObservableTypeError(input) {
  return new TypeError(`You provided ${input !== null && typeof input === 'object' ? 'an invalid object' : `'${input}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`);
}
//# sourceMappingURL=throwUnobservableError.js.map

/***/ }),

/***/ 28137:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   j: () => (/* binding */ finalize)
/* harmony export */ });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82153);

function finalize(callback) {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__/* .operate */ .N)((source, subscriber) => {
    try {
      source.subscribe(subscriber);
    } finally {
      subscriber.add(callback);
    }
  });
}
//# sourceMappingURL=finalize.js.map

/***/ }),

/***/ 30470:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ ConfirmEmailResolver)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9620);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(88862);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5488);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(36042);




/**
 * Resolves the email confirmation data.
 *
 * @param route The activated route snapshot containing query parameters.
 * @returns An observable of IEstimateEmail or null.
 */
const ConfirmEmailResolver = route => {
  // Injecting the necessary services
  const service = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__/* .inject */ .WQX)(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_1__/* .AuthService */ .u);
  const router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__/* .inject */ .WQX)(_angular_router__WEBPACK_IMPORTED_MODULE_2__/* .Router */ .Ix);
  // Extracting email and token from query parameters
  const email = route.queryParamMap.get('email');
  const token = route.queryParamMap.get('token');
  // Check if both email and token are present
  if (!email || !token) {
    console.log('Email or Token should not be blank');
    router.navigate(['/auth/login']);
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(null); // Return null if either parameter is missing
  }
  // Call the service to confirm the email with the token
  return service.confirmEmail({
    email,
    token
  }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__/* .catchError */ .W)(error => {
    console.log('Handling error locally and rethrowing it...', error);
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(null); // Return null on error
  }));
};

/***/ }),

/***/ 30682:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ scheduled)
/* harmony export */ });
/* harmony import */ var _scheduleObservable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49973);
/* harmony import */ var _schedulePromise__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(31203);
/* harmony import */ var _scheduleArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(60267);
/* harmony import */ var _scheduleIterable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(19062);
/* harmony import */ var _scheduleAsyncIterable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(97068);
/* harmony import */ var _util_isInteropObservable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(64898);
/* harmony import */ var _util_isPromise__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(82115);
/* harmony import */ var _util_isArrayLike__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14420);
/* harmony import */ var _util_isIterable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(19254);
/* harmony import */ var _util_isAsyncIterable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(32172);
/* harmony import */ var _util_throwUnobservableError__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(27944);
/* harmony import */ var _util_isReadableStreamLike__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(65947);
/* harmony import */ var _scheduleReadableStreamLike__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(84091);













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

/***/ 31203:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P: () => (/* binding */ schedulePromise)
/* harmony export */ });
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11603);
/* harmony import */ var _operators_observeOn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4946);
/* harmony import */ var _operators_subscribeOn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95078);



function schedulePromise(input, scheduler) {
  return (0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_0__/* .innerFrom */ .Tg)(input).pipe((0,_operators_subscribeOn__WEBPACK_IMPORTED_MODULE_1__/* .subscribeOn */ ._)(scheduler), (0,_operators_observeOn__WEBPACK_IMPORTED_MODULE_2__/* .observeOn */ .Q)(scheduler));
}
//# sourceMappingURL=schedulePromise.js.map

/***/ }),

/***/ 31712:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   d: () => (/* binding */ AppService)
/* harmony export */ });
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(64913);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26860);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45715);




let AppService = /*#__PURE__*/(() => {
  class AppService {
    constructor(_http) {
      this._http = _http;
    }
    /**
     * Service method to retrieve application configurations.
     *
     * This method makes an HTTP GET request to the '/configs' endpoint and returns an Observable of type IAppSetting.
     *
     * @returns {Observable<IAppSetting>} Observable containing application configurations.
     */
    getAppConfigs() {
      return this._http.get(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_0__/* .API_PREFIX */ .m4}/configs`);
    }
    static {
      this.ɵfac = function AppService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || AppService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵinject"] */ .KVO(_angular_common_http__WEBPACK_IMPORTED_MODULE_2__/* .HttpClient */ .Qq));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineInjectable"] */ .jDH({
        token: AppService,
        factory: AppService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return AppService;
})();

/***/ }),

/***/ 32120:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   t: () => (/* binding */ OrganizationsMutationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56383);
/* harmony import */ var _organizations_step_form_organizations_step_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34797);




let OrganizationsMutationComponent = /*#__PURE__*/(() => {
  class OrganizationsMutationComponent {
    constructor(dialogRef) {
      this.dialogRef = dialogRef;
    }
    ngOnInit() {}
    addOrganization(consolidatedFormValues) {
      this.dialogRef.close(consolidatedFormValues);
    }
    close() {
      this.dialogRef.close();
    }
    static {
      this.ɵfac = function OrganizationsMutationComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || OrganizationsMutationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbDialogRef */ .ybQ));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: OrganizationsMutationComponent,
        selectors: [["ga-organizations-mutation"]],
        standalone: false,
        decls: 1,
        vars: 1,
        consts: [[3, "closeForm", "createOrganization", "closable"]],
        template: function OrganizationsMutationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "ga-organizations-step-form", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("closeForm", function OrganizationsMutationComponent_Template_ga_organizations_step_form_closeForm_0_listener() {
              return ctx.close();
            })("createOrganization", function OrganizationsMutationComponent_Template_ga_organizations_step_form_createOrganization_0_listener($event) {
              return ctx.addOrganization($event);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("closable", true);
          }
        },
        dependencies: [_organizations_step_form_organizations_step_form_component__WEBPACK_IMPORTED_MODULE_2__/* .OrganizationsStepFormComponent */ .m],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   ga-organizations-step-form[_ngcontent-%COMP%]       input, \n[_nghost-%COMP%]   ga-organizations-step-form[_ngcontent-%COMP%]       nb-select.appearance-outline.status-basic .select-button, \n[_nghost-%COMP%]   ga-organizations-step-form[_ngcontent-%COMP%]       .ng-select .ng-select-container {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n  height: 42px !important;\n}\n[_nghost-%COMP%]   ga-organizations-step-form[_ngcontent-%COMP%]       .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder, \n[_nghost-%COMP%]   ga-organizations-step-form[_ngcontent-%COMP%]       .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {\n  top: unset !important;\n}\n[_nghost-%COMP%]   ga-organizations-step-form[_ngcontent-%COMP%]       label, \n[_nghost-%COMP%]   ga-organizations-step-form[_ngcontent-%COMP%]       .label {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  color: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]   ga-organizations-step-form[_ngcontent-%COMP%]       textarea {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n}\n[_nghost-%COMP%]   ga-organizations-step-form[_ngcontent-%COMP%]       .ng-select .ng-select-container input, \n[_nghost-%COMP%]   ga-organizations-step-form[_ngcontent-%COMP%]       nb-tag-list input {\n  background-color: unset !important;\n}\n[_nghost-%COMP%]   ga-organizations-step-form[_ngcontent-%COMP%]     nb-card {\n  background-color: var(--gauzy-card-1);\n}\n[_nghost-%COMP%]   ga-organizations-step-form[_ngcontent-%COMP%]     nb-stepper   input, \n[_nghost-%COMP%]   ga-organizations-step-form[_ngcontent-%COMP%]     nb-stepper   nb-select.appearance-outline.status-basic .select-button, \n[_nghost-%COMP%]   ga-organizations-step-form[_ngcontent-%COMP%]     nb-stepper   .ng-select .ng-select-container {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n  height: 42px !important;\n}\n[_nghost-%COMP%]   ga-organizations-step-form[_ngcontent-%COMP%]     nb-stepper   .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder, \n[_nghost-%COMP%]   ga-organizations-step-form[_ngcontent-%COMP%]     nb-stepper   .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {\n  top: unset !important;\n}\n[_nghost-%COMP%]   ga-organizations-step-form[_ngcontent-%COMP%]     nb-stepper   label, \n[_nghost-%COMP%]   ga-organizations-step-form[_ngcontent-%COMP%]     nb-stepper   .label {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  color: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]   ga-organizations-step-form[_ngcontent-%COMP%]     nb-stepper   textarea {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n}\n[_nghost-%COMP%]   ga-organizations-step-form[_ngcontent-%COMP%]     nb-stepper   .ng-select .ng-select-container input, \n[_nghost-%COMP%]   ga-organizations-step-form[_ngcontent-%COMP%]     nb-stepper   nb-tag-list input {\n  background-color: unset !important;\n}"]
      });
    }
  }
  return OrganizationsMutationComponent;
})();

/***/ }),

/***/ 32172:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ isAsyncIterable)
/* harmony export */ });
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46908);

function isAsyncIterable(obj) {
  return Symbol.asyncIterator && (0,_isFunction__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .T)(obj === null || obj === void 0 ? void 0 : obj[Symbol.asyncIterator]);
}
//# sourceMappingURL=isAsyncIterable.js.map

/***/ }),

/***/ 32785:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   d: () => (/* binding */ NgxFaqComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(55598);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(41598);
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88326);
/* harmony import */ var _faq_setting__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(77369);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14572);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(56383);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19223);








function NgxFaqComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 4)(1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(2, "nb-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(3, "h6", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(5, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(7, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("icon", item_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(item_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(item_r1.content);
  }
}
let NgxFaqComponent = /*#__PURE__*/(() => {
  let NgxFaqComponent = class NgxFaqComponent {
    constructor() {
      this._faqs$ = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__/* .BehaviorSubject */ .t([]);
      this.faqs$ = this._faqs$.asObservable();
    }
    ngOnInit() {
      this._faqs$.next(_faq_setting__WEBPACK_IMPORTED_MODULE_2__/* .faqs */ .k);
    }
    ngOnDestroy() {}
    static {
      this.ɵfac = function NgxFaqComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || NgxFaqComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: NgxFaqComponent,
        selectors: [["ngx-faq"]],
        standalone: false,
        decls: 11,
        vars: 9,
        consts: [[1, "faq"], [1, "faq-heading"], ["class", "single-faq", 4, "ngFor", "ngForOf"], ["nbButton", "", "outline", "", "status", "primary", "size", "small", 1, "learn-more"], [1, "single-faq"], [1, "heading-wrapper"], [3, "icon"], [1, "side-small-heading"], [1, "side-description"], [1, "hr-div-soft"]],
        template: function NgxFaqComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 0)(1, "div")(2, "h5", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(4, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(5, NgxFaqComponent_div_5_Template, 8, 3, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(6, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(7, "span")(8, "button", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(10, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(4, 3, "FORGOT_PASSWORD_PAGE.FAQ_TITLE"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(6, 5, ctx.faqs$));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(10, 7, "FORGOT_PASSWORD_PAGE.FAQ_LEARN_MORE"), " ");
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__/* .NgForOf */ .Sq, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbButtonComponent */ .YP2, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbIconComponent */ .tHu, _angular_common__WEBPACK_IMPORTED_MODULE_3__/* .AsyncPipe */ .Jj, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__/* .TranslatePipe */ .D9],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.faq[_ngcontent-%COMP%] {\n  width: 260px;\n  padding: 20px;\n  background: rgba(245, 109, 88, 0.05);\n  border-radius: var(--border-radius);\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.faq[_ngcontent-%COMP%]   .faq-heading[_ngcontent-%COMP%], \n.faq[_ngcontent-%COMP%]   .single-faq[_ngcontent-%COMP%] {\n  padding-left: 8px;\n  padding-right: 8px;\n}\n.faq[_ngcontent-%COMP%]   .faq-heading[_ngcontent-%COMP%] {\n  font-family: Inter;\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 22px;\n  letter-spacing: -0.009em;\n  text-align: left;\n  color: var(--text-basic-color);\n  margin-bottom: 19px;\n}\n.faq[_ngcontent-%COMP%]   .heading-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n}\n.faq[_ngcontent-%COMP%]   .heading-wrapper[_ngcontent-%COMP%]   nb-icon[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  color: var(--color-primary-500);\n}\n.faq[_ngcontent-%COMP%]   .heading-wrapper[_ngcontent-%COMP%]   .side-small-heading[_ngcontent-%COMP%] {\n  font-family: Inter;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 17px;\n  letter-spacing: 0em;\n  text-align: left;\n  color: var(--text-basic-color);\n}\n.faq[_ngcontent-%COMP%]   .side-description[_ngcontent-%COMP%] {\n  font-family: Inter;\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 16px;\n  letter-spacing: 0em;\n  text-align: left;\n  color: var(--text-basic-color);\n}\n.faq[_ngcontent-%COMP%]   .learn-more[_ngcontent-%COMP%] {\n  margin-top: 34px;\n}\n.faq[_ngcontent-%COMP%]   .hr-div-soft[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 15px;\n}\n\n@media screen and (max-width: 790px) {\n  .faq[_ngcontent-%COMP%] {\n    width: 476px;\n    margin-top: 30px;\n  }\n}\n@media screen and (max-width: 490px) {\n  .faq[_ngcontent-%COMP%] {\n    display: none;\n  }\n}"]
      });
    }
  };
  NgxFaqComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__/* .UntilDestroy */ .d)({
    checkProperties: true
  })], NgxFaqComponent);
  return NgxFaqComponent;
})();


/***/ }),

/***/ 32833:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O: () => (/* binding */ CookieService)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(64340);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52122);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26860);




// This service is based on the `ng2-cookies` package which sadly is not a service and does
// not use `DOCUMENT` injection and therefore doesn't work well with AoT production builds.
// Package: https://github.com/BCJTI/ng2-cookies
let CookieService = /*#__PURE__*/(() => {
  class CookieService {
    constructor(document,
    // Get the `PLATFORM_ID` so we can check if we're in a browser.
    platformId) {
      this.document = document;
      this.platformId = platformId;
      this.documentIsAccessible = (0,_angular_common__WEBPACK_IMPORTED_MODULE_0__/* .isPlatformBrowser */ .UE)(this.platformId);
    }
    /**
     * Get cookie Regular Expression
     *
     * @param name Cookie name
     * @returns property RegExp
     *
     * @author: Stepan Suvorov
     * @since: 1.0.0
     */
    static getCookieRegExp(name) {
      const escapedName = name.replace(/([\[\]{}()|=;+?,.*^$])/gi, '\\$1');
      return new RegExp('(?:^' + escapedName + '|;\\s*' + escapedName + ')=(.*?)(?:;|$)', 'g');
    }
    /**
     * Gets the decoded version of an encoded component of a Uniform Resource Identifier (URI).
     *
     * @param encodedURIComponent A value representing an encoded URI component.
     *
     * @returns The decoded version of an encoded component of a Uniform Resource Identifier (URI).
     *
     * @author: Stepan Suvorov
     * @since: 1.0.0
     */
    static safeDecodeURIComponent(encodedURIComponent) {
      try {
        return decodeURIComponent(encodedURIComponent);
      } catch {
        // probably it is not uri encoded. return as is
        return encodedURIComponent;
      }
    }
    /**
     * Return `true` if {@link Document} is accessible, otherwise return `false`
     *
     * @param name Cookie name
     * @returns boolean - whether cookie with specified name exists
     *
     * @author: Stepan Suvorov
     * @since: 1.0.0
     */
    check(name) {
      if (!this.documentIsAccessible) {
        return false;
      }
      name = encodeURIComponent(name);
      const regExp = CookieService.getCookieRegExp(name);
      return regExp.test(this.document.cookie);
    }
    /**
     * Get cookies by name
     *
     * @param name Cookie name
     * @returns property value
     *
     * @author: Stepan Suvorov
     * @since: 1.0.0
     */
    get(name) {
      if (this.check(name)) {
        name = encodeURIComponent(name);
        const regExp = CookieService.getCookieRegExp(name);
        const result = regExp.exec(this.document.cookie);
        return result && result[1] ? CookieService.safeDecodeURIComponent(result[1]) : '';
      } else {
        return '';
      }
    }
    /**
     * Get all cookies in JSON format
     *
     * @returns all the cookies in json
     *
     * @author: Stepan Suvorov
     * @since: 1.0.0
     */
    getAll() {
      if (!this.documentIsAccessible) {
        return {};
      }
      const cookies = {};
      const document = this.document;
      if (document.cookie && document.cookie !== '') {
        document.cookie.split(';').forEach(currentCookie => {
          const [cookieName, cookieValue] = currentCookie.split('=');
          cookies[CookieService.safeDecodeURIComponent(cookieName.replace(/^ /, ''))] = CookieService.safeDecodeURIComponent(cookieValue);
        });
      }
      return cookies;
    }
    set(name, value, expiresOrOptions, path, domain, secure, sameSite, partitioned) {
      if (!this.documentIsAccessible) {
        return;
      }
      if (typeof expiresOrOptions === 'number' || expiresOrOptions instanceof Date || path || domain || secure || sameSite) {
        const optionsBody = {
          expires: expiresOrOptions,
          path,
          domain,
          secure,
          sameSite: sameSite ? sameSite : 'Lax',
          partitioned
        };
        this.set(name, value, optionsBody);
        return;
      }
      let cookieString = encodeURIComponent(name) + '=' + encodeURIComponent(value) + ';';
      const options = expiresOrOptions ? expiresOrOptions : {};
      if (options.expires) {
        if (typeof options.expires === 'number') {
          const dateExpires = new Date(new Date().getTime() + options.expires * 1000 * 60 * 60 * 24);
          cookieString += 'expires=' + dateExpires.toUTCString() + ';';
        } else {
          cookieString += 'expires=' + options.expires.toUTCString() + ';';
        }
      }
      if (options.path) {
        cookieString += 'path=' + options.path + ';';
      }
      if (options.domain) {
        cookieString += 'domain=' + options.domain + ';';
      }
      if (options.secure === false && options.sameSite === 'None') {
        options.secure = true;
        console.warn(`[ngx-cookie-service] Cookie ${name} was forced with secure flag because sameSite=None.` + `More details : https://github.com/stevermeister/ngx-cookie-service/issues/86#issuecomment-597720130`);
      }
      if (options.secure) {
        cookieString += 'secure;';
      }
      if (!options.sameSite) {
        options.sameSite = 'Lax';
      }
      cookieString += 'sameSite=' + options.sameSite + ';';
      if (options.partitioned) {
        cookieString += 'Partitioned;';
      }
      this.document.cookie = cookieString;
    }
    /**
     * Delete cookie by name at given path and domain. If not path is not specified, cookie at '/' path will be deleted.
     *
     * @param name   Cookie name
     * @param path   Cookie path
     * @param domain Cookie domain
     * @param secure Cookie secure flag
     * @param sameSite Cookie sameSite flag - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite
     *
     * @author: Stepan Suvorov
     * @since: 1.0.0
     */
    delete(name, path, domain, secure, sameSite = 'Lax') {
      if (!this.documentIsAccessible) {
        return;
      }
      const expiresDate = new Date('Thu, 01 Jan 1970 00:00:01 GMT');
      this.set(name, '', {
        expires: expiresDate,
        path,
        domain,
        secure,
        sameSite
      });
    }
    /**
     * Delete all cookies at given path and domain. If not path is not specified, all cookies at '/' path will be deleted.
     *
     * @param path   Cookie path
     * @param domain Cookie domain
     * @param secure Is the Cookie secure
     * @param sameSite Is the cookie same site
     *
     * @author: Stepan Suvorov
     * @since: 1.0.0
     */
    deleteAll(path, domain, secure, sameSite = 'Lax') {
      if (!this.documentIsAccessible) {
        return;
      }
      const cookies = this.getAll();
      for (const cookieName in cookies) {
        if (cookies.hasOwnProperty(cookieName)) {
          this.delete(cookieName, path, domain, secure, sameSite);
        }
      }
    }
    static {
      this.ɵfac = function CookieService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || CookieService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵinject"] */ .KVO(_angular_common__WEBPACK_IMPORTED_MODULE_2__/* .DOCUMENT */ .q), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵinject"] */ .KVO(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* .PLATFORM_ID */ .Agw));
      };
    }
    static {
      this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineInjectable"] */ .jDH({
        token: CookieService,
        factory: CookieService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return CookieService;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/*
 * Public API Surface of ngx-cookie-service
 */

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=ngx-cookie-service.mjs.map

/***/ }),

/***/ 33190:
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

/***/ 33464:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: () => (/* binding */ isValidDate)
/* harmony export */ });
function isValidDate(value) {
  return value instanceof Date && !isNaN(value);
}
//# sourceMappingURL=isDate.js.map

/***/ }),

/***/ 33920:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ AcceptInviteFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10936);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6992);
/* harmony import */ var _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38546);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(78870);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19223);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(56383);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(14572);
/* harmony import */ var _ui_core_shared_src_lib_user_forms_fields_password_password_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(12467);












const _c0 = (a0, a1) => ({
  "status-danger": a0,
  "status-success": a1
});
function AcceptInviteFormComponent_div_19_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(2, 1, "ACCEPT_INVITE.ACCEPT_INVITE_FORM.PASSWORDS_DO_NOT_MATCH"), " ");
  }
}
function AcceptInviteFormComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, AcceptInviteFormComponent_div_19_div_1_Template, 3, 3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r0.form.get("repeatPassword").errors.mustMatch);
  }
}
let AcceptInviteFormComponent = /*#__PURE__*/(() => {
  class AcceptInviteFormComponent extends _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_1__/* .TranslationBaseComponent */ .K {
    static buildForm(fb, self) {
      return fb.group({
        fullName: [self?.invitation?.fullName, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .Validators */ .k0.required],
        password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .Validators */ .k0.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .Validators */ .k0.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .Validators */ .k0.minLength(4)])],
        repeatPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .Validators */ .k0.required],
        agreeTerms: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .Validators */ .k0.requiredTrue]
      }, {
        validators: [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_3__/* .MatchValidator */ .e.mustMatch('password', 'repeatPassword')]
      });
    }
    constructor(fb, translateService) {
      super(translateService);
      this.fb = fb;
      this.translateService = translateService;
      this.FormHelpers = _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_4__/* .FormHelpers */ .k;
      this.submitForm = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .bkB();
      this.form = AcceptInviteFormComponent.buildForm(this.fb, this);
    }
    ngOnInit() {
      if (this.form && this.invitation) {
        this.form.get('fullName').setValue(this.invitation.fullName);
        this.form.get('fullName').updateValueAndValidity();
      }
    }
    saveInvites() {
      if (this.form.valid) {
        const {
          fullName,
          password
        } = this.form.value;
        this.submitForm.emit({
          user: {
            firstName: fullName ? fullName.split(' ').slice(0, -1).join(' ') : null,
            lastName: fullName ? fullName.split(' ').slice(-1).join(' ') : null,
            email: this.invitation.email,
            role: this.invitation.role,
            tenant: this.tenant,
            tags: this.tags
          },
          password
        });
      }
    }
    ngOnDestroy() {}
    static {
      this.ɵfac = function AcceptInviteFormComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || AcceptInviteFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .UntypedFormBuilder */ .ze), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__/* .TranslateService */ .c$));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: AcceptInviteFormComponent,
        selectors: [["ga-accept-invite-form"]],
        inputs: {
          invitation: "invitation"
        },
        outputs: {
          submitForm: "submitForm"
        },
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
        decls: 33,
        vars: 48,
        consts: [[1, "accept-invite-form", 3, "formGroup"], [1, "row"], [1, "col-12"], [1, "form-group"], ["for", "fullNameInput", 1, "label"], ["fullWidth", "", "id", "fullNameInput", "nbInput", "", "formControlName", "fullName", "fieldSize", "large", 3, "placeholder", "ngClass"], ["formControlName", "password", 3, "id", "placeholder", "label", "ctrl", "fieldSize", "ngClass"], ["formControlName", "repeatPassword", 3, "id", "placeholder", "label", "ctrl", "fieldSize", "ngClass"], ["class", "invalid-feedback d-block", 4, "ngIf"], [1, "col"], ["formControlName", "agreeTerms"], ["href", "#", "target", "_blank"], [1, "actions"], ["nbButton", "", "fullWidth", "", "status", "success", 3, "click", "disabled"], [1, "invalid-feedback", "d-block"], [4, "ngIf"]],
        template: function AcceptInviteFormComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "form", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "label", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(6, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(7, "input", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(8, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(9, "div", 1)(10, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(11, "ngx-password-form-field", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(12, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(13, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(14, "div", 1)(15, "div", 2)(16, "ngx-password-form-field", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(17, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(18, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(19, AcceptInviteFormComponent_div_19_Template, 2, 1, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(20, "div", 1)(21, "div", 9)(22, "div", 3)(23, "nb-checkbox", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(25, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(26, "a", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(28, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(29, "div", 12)(30, "button", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function AcceptInviteFormComponent_Template_button_click_30_listener() {
              return ctx.saveInvites();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(31);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(32, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("formGroup", ctx.form);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(6, 21, "ACCEPT_INVITE.ACCEPT_INVITE_FORM.FULL_NAME"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(8, 23, "ACCEPT_INVITE.ACCEPT_INVITE_FORM.ENTER_YOUR_FULL_NAME"))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction2"] */ .l_i(39, _c0, ctx.FormHelpers.isInvalidControl(ctx.form, "fullName"), ctx.FormHelpers.isValidControl(ctx.form, "fullName")));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("id", "passwordInput")("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(12, 25, "ACCEPT_INVITE.ACCEPT_INVITE_FORM.PASSWORD"))("label", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(13, 27, "ACCEPT_INVITE.ACCEPT_INVITE_FORM.PASSWORD"))("ctrl", ctx.form.get("password"))("fieldSize", "large")("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction2"] */ .l_i(42, _c0, ctx.FormHelpers.isInvalidControl(ctx.form, "password"), ctx.FormHelpers.isValidControl(ctx.form, "password")));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("id", "repeatPasswordInput")("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(17, 29, "ACCEPT_INVITE.ACCEPT_INVITE_FORM.REPEAT_PASSWORD"))("label", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(18, 31, "ACCEPT_INVITE.ACCEPT_INVITE_FORM.REPEAT_PASSWORD"))("ctrl", ctx.form.get("repeatPassword"))("fieldSize", "large")("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction2"] */ .l_i(45, _c0, ctx.FormHelpers.isInvalidControl(ctx.form, "repeatPassword"), ctx.FormHelpers.isValidControl(ctx.form, "repeatPassword")));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.FormHelpers.isInvalidControl(ctx.form, "repeatPassword"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(25, 33, "ACCEPT_INVITE.ACCEPT_INVITE_FORM.AGREE_TO"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(28, 35, "ACCEPT_INVITE.ACCEPT_INVITE_FORM.TERMS_AND_CONDITIONS"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("disabled", ctx.form.invalid);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(32, 37, "ACCEPT_INVITE.ACCEPT_INVITE_FORM.COMPLETE_REGISTRATION"), " ");
          }
        },
        dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_6__/* .NbButtonComponent */ .YP2, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__/* .NbCheckboxComponent */ .DMy, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__/* .NbInputDirective */ .i6h, _angular_common__WEBPACK_IMPORTED_MODULE_7__/* .NgClass */ .YU, _angular_common__WEBPACK_IMPORTED_MODULE_7__/* .NgIf */ .bT, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* ["ɵNgNoValidate"] */ .qT, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .DefaultValueAccessor */ .me, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .NgControlStatus */ .BC, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .NgControlStatusGroup */ .cb, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .FormGroupDirective */ .j4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .FormControlName */ .JD, _ui_core_shared_src_lib_user_forms_fields_password_password_component__WEBPACK_IMPORTED_MODULE_8__/* .PasswordFormFieldComponent */ .N, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__/* .TranslatePipe */ .D9],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   .item-invalid[_ngcontent-%COMP%]     .ng-select-container {\n  border: 1px solid;\n  border-color: var(--color-danger-default);\n}\n[_nghost-%COMP%]   .item-valid[_ngcontent-%COMP%]     .ng-select-container {\n  border: 1px solid;\n  border-color: var(--color-success-default);\n}"]
      });
    }
  }
  return AcceptInviteFormComponent;
})();

/***/ }),

/***/ 33977:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ Subject)
/* harmony export */ });
/* unused harmony export AnonymousSubject */
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72288);
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(90204);
/* harmony import */ var _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75648);
/* harmony import */ var _util_arrRemove__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(75214);
/* harmony import */ var _util_errorContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12309);





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

/***/ 35427:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ asyncScheduler),
/* harmony export */   b: () => (/* binding */ async)
/* harmony export */ });
/* harmony import */ var _AsyncAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2657);
/* harmony import */ var _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24754);


const asyncScheduler = /*#__PURE__*/new _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__/* .AsyncScheduler */ .q(_AsyncAction__WEBPACK_IMPORTED_MODULE_1__/* .AsyncAction */ .R);
const async = asyncScheduler;
//# sourceMappingURL=async.js.map

/***/ }),

/***/ 36967:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G: () => (/* binding */ NgxFaqModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14572);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56383);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19223);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);





let NgxFaqModule = /*#__PURE__*/(() => {
  class NgxFaqModule {
    static {
      this.ɵfac = function NgxFaqModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || NgxFaqModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .$C({
        type: NgxFaqModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .CommonModule */ .MD, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbButtonModule */ .P5N, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbIconModule */ .clu, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__/* .TranslateModule */ .h.forChild()]
      });
    }
  }
  return NgxFaqModule;
})();

/***/ }),

/***/ 38145:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   t: () => (/* binding */ NgxRegisterSideSingleFeatureComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56383);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14572);
/* harmony import */ var _ui_core_shared_src_lib_directives_img_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71466);




function NgxRegisterSideSingleFeatureComponent_ng_template_0_img_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(0, "img", 7);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("src", ctx_r0.feature.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵsanitizeUrl"] */ .B4B);
  }
}
function NgxRegisterSideSingleFeatureComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 1)(1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(2, "nb-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(3, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(5, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(7, NgxRegisterSideSingleFeatureComponent_ng_template_0_img_7_Template, 1, 1, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("icon", ctx_r0.feature.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", ctx_r0.feature.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(ctx_r0.feature.content);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r0.feature.imageUrl);
  }
}
let NgxRegisterSideSingleFeatureComponent = /*#__PURE__*/(() => {
  class NgxRegisterSideSingleFeatureComponent {
    constructor() {
      this.feature = null;
    }
    static {
      this.ɵfac = function NgxRegisterSideSingleFeatureComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || NgxRegisterSideSingleFeatureComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: NgxRegisterSideSingleFeatureComponent,
        selectors: [["ngx-register-side-single-feature"]],
        inputs: {
          feature: "feature"
        },
        standalone: false,
        decls: 1,
        vars: 1,
        consts: [[3, "ngIf"], [1, "feature-wrapper"], [1, "headings-wrapper"], [3, "icon"], [1, "heading"], [1, "description"], ["alt", "feature", "class", "feature-img", 3, "src", 4, "ngIf"], ["alt", "feature", 1, "feature-img", 3, "src"]],
        template: function NgxRegisterSideSingleFeatureComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(0, NgxRegisterSideSingleFeatureComponent_ng_template_0_Template, 8, 4, "ng-template", 0);
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.feature);
          }
        },
        dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbIconComponent */ .tHu, _angular_common__WEBPACK_IMPORTED_MODULE_2__/* .NgIf */ .bT, _ui_core_shared_src_lib_directives_img_directive__WEBPACK_IMPORTED_MODULE_3__/* .ImgDirective */ .z],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.card[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-1);\n}\n\n.feature-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-right: 10px;\n  padding-left: 10px;\n}\n\n.headings-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: flex-start;\n  margin-bottom: 12px;\n}\n.headings-wrapper[_ngcontent-%COMP%]    > nb-icon[_ngcontent-%COMP%] {\n  margin-right: 5px;\n  margin-top: 1.5px;\n  height: 14px;\n  width: 14px;\n}\n.headings-wrapper[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%] {\n  margin: 0;\n  height: 100%;\n  display: flex;\n  align-items: flex-start;\n  font-family: Inter;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 17px;\n  letter-spacing: 0em;\n  text-align: left;\n}\n\n.feature-img[_ngcontent-%COMP%] {\n  width: 201px;\n  height: 130px;\n  border: 1px solid black;\n  box-shadow: 0px 8px 21px -11px #000000;\n  border-radius: 5px;\n  object-fit: contain;\n}\n\n.description[_ngcontent-%COMP%] {\n  font-family: Inter;\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 16px;\n  letter-spacing: 0em;\n  text-align: left;\n  width: 100%;\n}\n\n.heading[_ngcontent-%COMP%], \nnb-icon[_ngcontent-%COMP%], \n.description[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.75);\n}\n\n@media screen and (max-width: 1024px) {\n  .description[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .feature-img[_ngcontent-%COMP%] {\n    width: 208px;\n    height: 135px;\n  }\n}\n@media screen and (max-width: 790px) {\n  .feature-img[_ngcontent-%COMP%] {\n    width: 360px;\n    height: 232px;\n  }\n}\n@media screen and (max-width: 490px) {\n  .feature-img[_ngcontent-%COMP%] {\n    width: 90%;\n    height: 45vw;\n  }\n}"]
      });
    }
  }
  return NgxRegisterSideSingleFeatureComponent;
})();

/***/ }),

/***/ 38405:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ createOperatorSubscriber)
/* harmony export */ });
/* unused harmony export OperatorSubscriber */
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86259);

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

/***/ 38434:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G: () => (/* binding */ PasswordFormFieldModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14572);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10936);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19223);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56383);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);






let PasswordFormFieldModule = /*#__PURE__*/(() => {
  class PasswordFormFieldModule {
    static {
      this.ɵfac = function PasswordFormFieldModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || PasswordFormFieldModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .$C({
        type: PasswordFormFieldModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .CommonModule */ .MD, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .FormsModule */ .YN, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .ReactiveFormsModule */ .X1, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbButtonModule */ .P5N, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbFormFieldModule */ .NeG, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbIconModule */ .clu, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbInputModule */ .pty, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__/* .TranslateModule */ .h.forChild()]
      });
    }
  }
  return PasswordFormFieldModule;
})();

/***/ }),

/***/ 39037:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   k: () => (/* binding */ NgxRegisterComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(27075);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9620);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8657);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(97234);
/* harmony import */ var _nebular_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17523);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(12043);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(19223);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(84059);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(908);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(56383);
/* harmony import */ var _ui_core_theme_src_lib_components_theme_sidebar_theme_settings_components_theme_selector_switch_theme_switch_theme_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(10360);
/* harmony import */ var _ui_core_theme_src_lib_components_gauzy_logo_gauzy_logo_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(85662);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(14572);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(10936);
/* harmony import */ var _ui_core_shared_src_lib_directives_no_space_edges_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(97040);
/* harmony import */ var _register_side_features_register_side_features_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(82167);
/* harmony import */ var _social_links_social_links_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(51265);




















const _c0 = (a0, a1) => ({
  minLength: a0,
  maxLength: a1
});
function NgxRegisterComponent_nb_alert_10_li_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "li", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const error_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(error_r2);
  }
}
function NgxRegisterComponent_nb_alert_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-alert", 35)(1, "p", 36)(2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(3, "Oh snap!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(4, "ul", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(5, NgxRegisterComponent_nb_alert_10_li_5_Template, 2, 1, "li", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx_r2.errors);
  }
}
function NgxRegisterComponent_nb_alert_11_li_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "li", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const message_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", message_r4, " ");
  }
}
function NgxRegisterComponent_nb_alert_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-alert", 40)(1, "p", 36)(2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(3, "Hooray!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(4, "ul", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(5, NgxRegisterComponent_nb_alert_11_li_5_Template, 2, 1, "li", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx_r2.messages);
  }
}
function NgxRegisterComponent_ng_container_21_p_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "p", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(2, 1, "REGISTER_PAGE.VALIDATIONS.FULL_NAME_REQUIRED"), " ");
  }
}
function NgxRegisterComponent_ng_container_21_p_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "p", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind2"] */ .i5U(2, 1, "REGISTER_PAGE.VALIDATIONS.FULL_NAME_SHOULD_CONTAIN", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction2"] */ .l_i(4, _c0, ctx_r2.getConfigValue("forms.validation.fullName.minLength"), ctx_r2.getConfigValue("forms.validation.fullName.maxLength"))), " ");
  }
}
function NgxRegisterComponent_ng_container_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, NgxRegisterComponent_ng_container_21_p_1_Template, 3, 3, "p", 41)(2, NgxRegisterComponent_ng_container_21_p_2_Template, 3, 7, "p", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    const fullName_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", fullName_r5.errors == null ? null : fullName_r5.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", (fullName_r5.errors == null ? null : fullName_r5.errors.minlength) || (fullName_r5.errors == null ? null : fullName_r5.errors.maxlength));
  }
}
function NgxRegisterComponent_div_22_ng_container_7_p_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "p", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(2, 1, "REGISTER_PAGE.VALIDATIONS.EMAIL_REQUIRED"), " ");
  }
}
function NgxRegisterComponent_div_22_ng_container_7_p_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "p", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(2, 1, "REGISTER_PAGE.VALIDATIONS.EMAIL_SHOULD_BE_REAL"), " ");
  }
}
function NgxRegisterComponent_div_22_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, NgxRegisterComponent_div_22_ng_container_7_p_1_Template, 3, 3, "p", 41)(2, NgxRegisterComponent_div_22_ng_container_7_p_2_Template, 3, 3, "p", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    const email_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", email_r7.errors == null ? null : email_r7.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", email_r7.errors == null ? null : email_r7.errors.pattern);
  }
}
function NgxRegisterComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 16)(1, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(4, "input", 44, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayListener"] */ .mxI("ngModelChange", function NgxRegisterComponent_div_22_Template_input_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r6);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayBindingSet"] */ .DH7(ctx_r2.user.email, $event) || (ctx_r2.user.email = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(7, NgxRegisterComponent_div_22_ng_container_7_Template, 3, 2, "ng-container", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const email_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(5);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(3, 7, "REGISTER_PAGE.LABELS.EMAIL"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayProperty"] */ .R50("ngModel", ctx_r2.user.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(6, 9, "REGISTER_PAGE.PLACEHOLDERS.EMAIL"))("status", email_r7.dirty ? email_r7.invalid ? "danger" : "success" : "basic")("required", ctx_r2.getConfigValue("forms.validation.email.required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵattribute"] */ .BMQ("aria-invalid", email_r7.invalid && email_r7.touched ? true : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", email_r7.invalid && email_r7.touched);
  }
}
function NgxRegisterComponent_ng_container_34_p_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "p", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(2, 1, "REGISTER_PAGE.VALIDATIONS.PASSWORD_NO_SPACE_EDGES"), " ");
  }
}
function NgxRegisterComponent_ng_container_34_p_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "p", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(2, 1, "REGISTER_PAGE.VALIDATIONS.PASSWORD_REQUIRED"), " ");
  }
}
function NgxRegisterComponent_ng_container_34_p_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "p", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind2"] */ .i5U(2, 1, "REGISTER_PAGE.VALIDATIONS.PASSWORD_SHOULD_CONTAIN", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction2"] */ .l_i(4, _c0, ctx_r2.getConfigValue("forms.validation.password.minLength"), ctx_r2.getConfigValue("forms.validation.password.maxLength"))), " ");
  }
}
function NgxRegisterComponent_ng_container_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, NgxRegisterComponent_ng_container_34_p_1_Template, 3, 3, "p", 41)(2, NgxRegisterComponent_ng_container_34_p_2_Template, 3, 3, "p", 41)(3, NgxRegisterComponent_ng_container_34_p_3_Template, 3, 7, "p", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    const password_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", password_r8.errors == null ? null : password_r8.errors.pattern);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", password_r8.errors == null ? null : password_r8.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", (password_r8.errors == null ? null : password_r8.errors.minlength) || (password_r8.errors == null ? null : password_r8.errors.maxlength));
  }
}
function NgxRegisterComponent_ng_container_45_p_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "p", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(2, 1, "REGISTER_PAGE.VALIDATIONS.CONFIRM_PASSWORD_REQUIRED"), " ");
  }
}
function NgxRegisterComponent_ng_container_45_p_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "p", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(2, 1, "REGISTER_PAGE.VALIDATIONS.PASSWORDS_NOT_MATCH"), " ");
  }
}
function NgxRegisterComponent_ng_container_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, NgxRegisterComponent_ng_container_45_p_1_Template, 3, 3, "p", 41)(2, NgxRegisterComponent_ng_container_45_p_2_Template, 3, 3, "p", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    const password_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(30);
    const confirmPassword_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", confirmPassword_r9.errors == null ? null : confirmPassword_r9.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", password_r8.value != confirmPassword_r9.value && !(confirmPassword_r9.errors == null ? null : confirmPassword_r9.errors.required));
  }
}
function NgxRegisterComponent_ng_container_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(1, "div", 45)(2, "nb-checkbox", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayListener"] */ .mxI("ngModelChange", function NgxRegisterComponent_ng_container_46_Template_nb_checkbox_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r10);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayBindingSet"] */ .DH7(ctx_r2.user.terms, $event) || (ctx_r2.user.terms = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(3, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(6, "a", 48)(7, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(10, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(13, "a", 49)(14, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayProperty"] */ .R50("ngModel", ctx_r2.user.terms);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("required", ctx_r2.getConfigValue("forms.register.terms"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(5, 6, "REGISTER_PAGE.VALIDATIONS.CHECK_BOX_TEXTS.AGREE_TO"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(9, 8, "REGISTER_PAGE.VALIDATIONS.CHECK_BOX_TEXTS.TERMS_AND_CONDITIONS"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(12, 10, "REGISTER_PAGE.VALIDATIONS.CHECK_BOX_TEXTS.AND"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(16, 12, "REGISTER_PAGE.VALIDATIONS.CHECK_BOX_TEXTS.PRIVACY_POLICY"), " ");
  }
}
let NgxRegisterComponent = /*#__PURE__*/(() => {
  let NgxRegisterComponent = class NgxRegisterComponent extends _nebular_auth__WEBPACK_IMPORTED_MODULE_1__/* .NbRegisterComponent */ .Jz {
    constructor(translate, nbAuthService, cdr, router, activatedRoute, options) {
      super(nbAuthService, options, cdr, router);
      this.translate = translate;
      this.nbAuthService = nbAuthService;
      this.cdr = cdr;
      this.router = router;
      this.activatedRoute = activatedRoute;
      this.showPassword = false;
      this.showConfirmPassword = false;
      this.passwordNoSpaceEdges = _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_2__/* .patterns */ .q.passwordNoSpaceEdges;
    }
    ngOnInit() {
      /**
       * Get the current language from the translation service and
       * set it as the preferred language for the user.
       */
      const currentLang = this.translate.currentLang;
      this.user.preferredLanguage = currentLang;
      // Create an observable to listen to query parameter changes in the current route.
      this.queryParams$ = this.activatedRoute.queryParams.pipe(
      // Filter and ensure that query parameters are present.
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .filter */ .p)(params => !!params),
      // Tap into the observable to update the 'user.email' property with the 'email' query parameter.
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .tap */ .M)(({
        email
      }) => this.user.email = email),
      // Use 'untilDestroyed' to handle component lifecycle and avoid memory leaks.
      (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .untilDestroyed */ .s)(this));
    }
    static {
      this.ɵfac = function NgxRegisterComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || NgxRegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__/* .TranslateService */ .c$), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_nebular_auth__WEBPACK_IMPORTED_MODULE_1__/* .NbAuthService */ .U_), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* .ChangeDetectorRef */ .gRc), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_router__WEBPACK_IMPORTED_MODULE_7__/* .Router */ .Ix), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_router__WEBPACK_IMPORTED_MODULE_7__/* .ActivatedRoute */ .nX), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_nebular_auth__WEBPACK_IMPORTED_MODULE_1__/* .NB_AUTH_OPTIONS */ .$$));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: NgxRegisterComponent,
        selectors: [["ngx-register"]],
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
        decls: 69,
        vars: 73,
        consts: [["form", "ngForm"], ["fullName", "ngModel"], ["password", "ngModel"], ["confirmPassword", "ngModel"], ["email", "ngModel"], [1, "main-section"], [1, "register-wrapper"], [1, "svg-wrapper"], [1, "ever-logo-svg", 3, "isAccordion"], [1, "theme-switch", 3, "hasText"], [1, "title-wrapper"], ["id", "title", 1, "title"], [1, "hr-div-strong"], ["outline", "danger", "role", "alert", 4, "ngIf"], ["outline", "success", "role", "alert", 4, "ngIf"], ["aria-labelledby", "title", 1, "form", 3, "ngSubmit"], [1, "form-control-group"], ["for", "input-name", 1, "label"], ["nbInput", "", "id", "input-name", "name", "fullName", "autofocus", "", "fullWidth", "", "fieldSize", "large", "autocomplete", "full-name", 3, "ngModelChange", "ngModel", "placeholder", "status", "required", "minlength", "maxlength"], [4, "ngIf"], ["class", "form-control-group", 4, "ngIf"], ["for", "input-password", 1, "label"], ["nbInput", "", "type", "password", "id", "input-password", "name", "password", "fullWidth", "", "fieldSize", "large", "autocomplete", "'new-password'", 3, "ngModelChange", "ngModel", "type", "pattern", "placeholder", "status", "required", "minlength", "maxlength"], ["nbSuffix", "", "nbButton", "", "size", "small", "ghost", "", 3, "click"], ["pack", "eva", 3, "icon"], ["for", "input-re-password", 1, "label"], ["nbInput", "", "type", "password", "id", "input-re-password", "name", "rePass", "fullWidth", "", "fieldSize", "large", "autocomplete", "'confirm-password'", 3, "ngModelChange", "ngModel", "type", "placeholder", "status", "required"], [1, "btn-wrapper"], ["nbButton", "", "size", "small", 1, "submit-btn", 3, "disabled"], [1, "hr-div-soft"], ["aria-label", "Sign In Workspace", 1, "another-action"], ["routerLink", "/auth/login-workspace", 1, "text-link"], ["aria-label", "Sign in", 1, "another-action"], ["routerLink", "../login", 1, "text-link"], [1, "features-wrapper"], ["outline", "danger", "role", "alert"], [1, "alert-title"], [1, "alert-message-list"], ["class", "alert-message", 4, "ngFor", "ngForOf"], [1, "alert-message"], ["outline", "success", "role", "alert"], ["class", "caption status-danger", 4, "ngIf"], [1, "caption", "status-danger"], ["for", "input-email", 1, "label"], ["nbInput", "", "id", "input-email", "name", "email", "pattern", ".+@.+..+", "noSpaceEdges", "", "fullWidth", "", "fieldSize", "large", "autocomplete", "off", 3, "ngModelChange", "ngModel", "placeholder", "status", "required"], [1, "form-control-group", "accept-group"], ["name", "terms", 1, "checkbox", 3, "ngModelChange", "ngModel", "required"], [1, "normal-terms-text"], ["routerLink", "/legal/terms", "target", "_blank", 1, "terms-link"], ["routerLink", "/legal/privacy", "target", "_blank", 1, "terms-link"]],
        template: function NgxRegisterComponent_Template(rf, ctx) {
          if (rf & 1) {
            const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "section", 5)(1, "div", 6)(2, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(3, "ngx-gauzy-logo", 8)(4, "gauzy-switch-theme", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(5, "div", 10)(6, "h1", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(8, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(9, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(10, NgxRegisterComponent_nb_alert_10_Template, 6, 1, "nb-alert", 13)(11, NgxRegisterComponent_nb_alert_11_Template, 6, 1, "nb-alert", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(12, "form", 15, 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("ngSubmit", function NgxRegisterComponent_Template_form_ngSubmit_12_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx.register());
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(14, "div", 16)(15, "label", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(17, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(18, "input", 18, 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(20, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayListener"] */ .mxI("ngModelChange", function NgxRegisterComponent_Template_input_ngModelChange_18_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayBindingSet"] */ .DH7(ctx.user.fullName, $event) || (ctx.user.fullName = $event);
              return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj($event);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(21, NgxRegisterComponent_ng_container_21_Template, 3, 2, "ng-container", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(22, NgxRegisterComponent_div_22_Template, 8, 11, "div", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(23, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(24, "div", 16)(25, "label", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(27, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(28, "nb-form-field")(29, "input", 22, 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(31, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayListener"] */ .mxI("ngModelChange", function NgxRegisterComponent_Template_input_ngModelChange_29_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayBindingSet"] */ .DH7(ctx.user.password, $event) || (ctx.user.password = $event);
              return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj($event);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(32, "a", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function NgxRegisterComponent_Template_a_click_32_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx.showPassword = !ctx.showPassword);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(33, "nb-icon", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(34, NgxRegisterComponent_ng_container_34_Template, 4, 3, "ng-container", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(35, "div", 16)(36, "label", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(37);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(38, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(39, "nb-form-field")(40, "input", 26, 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(42, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayListener"] */ .mxI("ngModelChange", function NgxRegisterComponent_Template_input_ngModelChange_40_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayBindingSet"] */ .DH7(ctx.user.confirmPassword, $event) || (ctx.user.confirmPassword = $event);
              return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj($event);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(43, "a", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function NgxRegisterComponent_Template_a_click_43_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx.showConfirmPassword = !ctx.showConfirmPassword);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(44, "nb-icon", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(45, NgxRegisterComponent_ng_container_45_Template, 3, 2, "ng-container", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(46, NgxRegisterComponent_ng_container_46_Template, 17, 14, "ng-container", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(47, "div", 27)(48, "button", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(49);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(50, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(51, "div", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(52, "section");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(53, "ngx-social-links");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(54, "div", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(55, "section", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(56);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(57, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(58, "a", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(59);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(60, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(61, "section", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(62);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(63, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(64, "a", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(65);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(66, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(67, "div", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(68, "ngx-register-side-features");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
          }
          if (rf & 2) {
            const form_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(13);
            const fullName_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(19);
            const password_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(30);
            const confirmPassword_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(41);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("isAccordion", false);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("hasText", false);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(8, 47, "REGISTER_PAGE.TITLE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", (ctx.showMessages == null ? null : ctx.showMessages.error) && (ctx.errors == null ? null : ctx.errors.length) && !ctx.submitted);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", (ctx.showMessages == null ? null : ctx.showMessages.success) && (ctx.messages == null ? null : ctx.messages.length) && !ctx.submitted);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(17, 49, "REGISTER_PAGE.LABELS.FULL_NAME"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayProperty"] */ .R50("ngModel", ctx.user.fullName);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(20, 51, "REGISTER_PAGE.PLACEHOLDERS.FULL_NAME"))("status", fullName_r5.dirty ? fullName_r5.invalid ? "danger" : "success" : "basic")("required", ctx.getConfigValue("forms.validation.fullName.required"))("minlength", ctx.getConfigValue("forms.validation.fullName.minLength"))("maxlength", ctx.getConfigValue("forms.validation.fullName.maxLength"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵattribute"] */ .BMQ("aria-invalid", fullName_r5.invalid && fullName_r5.touched ? true : null);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", fullName_r5.invalid && fullName_r5.touched);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(23, 53, ctx.queryParams$).email);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(27, 55, "REGISTER_PAGE.LABELS.PASSWORD"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayProperty"] */ .R50("ngModel", ctx.user.password);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("type", ctx.showPassword ? "text" : "password")("pattern", ctx.passwordNoSpaceEdges)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(31, 57, "REGISTER_PAGE.PLACEHOLDERS.PASSWORD"))("status", password_r8.dirty ? password_r8.invalid ? "danger" : "success" : "basic")("required", ctx.getConfigValue("forms.validation.password.required"))("minlength", ctx.getConfigValue("forms.validation.password.minLength"))("maxlength", ctx.getConfigValue("forms.validation.password.maxLength"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵattribute"] */ .BMQ("aria-invalid", password_r8.invalid && password_r8.touched ? true : null);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("icon", ctx.showPassword ? "eye-outline" : "eye-off-outline");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵattribute"] */ .BMQ("aria-label", ctx.showPassword ? "hide password" : "show password");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", password_r8.invalid && password_r8.touched);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(38, 59, "REGISTER_PAGE.LABELS.CONFIRM_PASSWORD"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayProperty"] */ .R50("ngModel", ctx.user.confirmPassword);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("type", ctx.showConfirmPassword ? "text" : "password")("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(42, 61, "REGISTER_PAGE.PLACEHOLDERS.CONFIRM_PASSWORD"))("status", confirmPassword_r9.dirty ? confirmPassword_r9.invalid || password_r8.value != confirmPassword_r9.value ? "danger" : "success" : "basic")("required", ctx.getConfigValue("forms.validation.password.required"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵattribute"] */ .BMQ("aria-invalid", confirmPassword_r9.invalid && confirmPassword_r9.touched ? true : null);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("icon", ctx.showConfirmPassword ? "eye-outline" : "eye-off-outline");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵattribute"] */ .BMQ("aria-label", ctx.showConfirmPassword ? "hide password" : "show password");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", confirmPassword_r9.touched);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.getConfigValue("forms.register.terms"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵclassProp"] */ .AVh("btn-pulse", ctx.submitted);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("disabled", ctx.submitted || !form_r11.valid || !ctx.user.terms);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(50, 63, "BUTTONS.REGISTER"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(57, 65, "WORKSPACES.UNKNOWN_WORKSPACE"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(60, 67, "WORKSPACES.FIND_WORKSPACE"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(63, 69, "REGISTER_PAGE.HAVE_AN_ACCOUNT"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(66, 71, "BUTTONS.LOGIN"), " ");
          }
        },
        dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_8__/* .RouterLink */ .Wk, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbAlertComponent */ .EVe, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbButtonComponent */ .YP2, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbCheckboxComponent */ .DMy, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbFormFieldComponent */ .u_9, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbSuffixDirective */ .zb0, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbIconComponent */ .tHu, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbInputDirective */ .i6h, _ui_core_theme_src_lib_components_theme_sidebar_theme_settings_components_theme_selector_switch_theme_switch_theme_component__WEBPACK_IMPORTED_MODULE_10__/* .SwitchThemeComponent */ .z, _ui_core_theme_src_lib_components_gauzy_logo_gauzy_logo_component__WEBPACK_IMPORTED_MODULE_11__/* .GauzyLogoComponent */ .p, _angular_common__WEBPACK_IMPORTED_MODULE_12__/* .NgForOf */ .Sq, _angular_common__WEBPACK_IMPORTED_MODULE_12__/* .NgIf */ .bT, _angular_forms__WEBPACK_IMPORTED_MODULE_13__/* ["ɵNgNoValidate"] */ .qT, _angular_forms__WEBPACK_IMPORTED_MODULE_13__/* .DefaultValueAccessor */ .me, _angular_forms__WEBPACK_IMPORTED_MODULE_13__/* .NgControlStatus */ .BC, _angular_forms__WEBPACK_IMPORTED_MODULE_13__/* .NgControlStatusGroup */ .cb, _angular_forms__WEBPACK_IMPORTED_MODULE_13__/* .RequiredValidator */ .YS, _angular_forms__WEBPACK_IMPORTED_MODULE_13__/* .MinLengthValidator */ .xh, _angular_forms__WEBPACK_IMPORTED_MODULE_13__/* .MaxLengthValidator */ .tU, _angular_forms__WEBPACK_IMPORTED_MODULE_13__/* .PatternValidator */ .R_, _angular_forms__WEBPACK_IMPORTED_MODULE_13__/* .NgModel */ .vS, _angular_forms__WEBPACK_IMPORTED_MODULE_13__/* .NgForm */ .cV, _ui_core_shared_src_lib_directives_no_space_edges_directive__WEBPACK_IMPORTED_MODULE_14__/* .NoSpaceEdgesDirective */ .h, _register_side_features_register_side_features_component__WEBPACK_IMPORTED_MODULE_15__/* .NgxRegisterSideFeaturesComponent */ .s, _social_links_social_links_component__WEBPACK_IMPORTED_MODULE_16__/* .SocialLinksComponent */ .u, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__/* .TranslatePipe */ .D9, _angular_common__WEBPACK_IMPORTED_MODULE_12__/* .AsyncPipe */ .Jj],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.card[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-1);\n}\n\n.main-section[_ngcontent-%COMP%] {\n  width: 765px;\n  display: flex;\n  justify-content: space-between;\n}\n\n.register-wrapper[_ngcontent-%COMP%] {\n  width: 476px;\n  height: 100%;\n  padding: 30px;\n  background: var(--gauzy-card-2);\n  border-radius: var(--border-radius);\n}\n.register-wrapper.dark[_ngcontent-%COMP%] {\n  background: #292933;\n}\n.register-wrapper[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  padding-left: 15px;\n  padding-right: 15px;\n}\n.register-wrapper[_ngcontent-%COMP%]   .title-wrapper[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.register-wrapper[_ngcontent-%COMP%]   .title-wrapper[_ngcontent-%COMP%]    > .title[_ngcontent-%COMP%] {\n  font-family: Inter;\n  font-size: 24px;\n  font-style: normal;\n  font-weight: 700;\n  line-height: 30px;\n  letter-spacing: 0em;\n  text-align: left;\n}\n.register-wrapper[_ngcontent-%COMP%]   .hr-div-strong[_ngcontent-%COMP%] {\n  width: 416px;\n  height: 1px;\n  border-radius: 1px;\n  transform: matrix(1, 0, 0, -1, 0, 0);\n  background: var(--border-alternative-color-4);\n  opacity: 0.15;\n  margin-bottom: 29px;\n  padding-left: 0;\n  padding-right: 0;\n}\n@media screen and (max-width: 490px) {\n  .register-wrapper[_ngcontent-%COMP%]   .hr-div-strong[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.register-wrapper[_ngcontent-%COMP%]   .hr-div-soft[_ngcontent-%COMP%] {\n  width: 416px;\n  height: 1px;\n  background: var(--border-alternative-color-4);\n  opacity: 0.05;\n  border-radius: 1px;\n  transform: matrix(1, 0, 0, -1, 0, 0);\n  padding-left: 0;\n  padding-right: 0;\n}\n@media screen and (max-width: 490px) {\n  .register-wrapper[_ngcontent-%COMP%]   .hr-div-soft[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.register-wrapper[_ngcontent-%COMP%]   .another-action[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  padding-top: 10px;\n  padding-left: 10px;\n  color: #808080;\n  font-family: Inter;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 17px;\n  letter-spacing: 0em;\n  text-align: left;\n}\n@media screen and (max-width: 490px) {\n  .register-wrapper[_ngcontent-%COMP%]   .another-action[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n}\n.register-wrapper[_ngcontent-%COMP%]   .another-action[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--color-primary-500);\n  text-decoration: none;\n  font-weight: bold;\n}\n.register-wrapper[_ngcontent-%COMP%]   .another-action[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n@media screen and (max-width: 490px) {\n  .register-wrapper[_ngcontent-%COMP%]   .form-control-group[_ngcontent-%COMP%] {\n    margin-bottom: 1rem;\n  }\n}\n\n.features-wrapper[_ngcontent-%COMP%] {\n  width: 260px;\n  height: 100%;\n}\n\n.svg-wrapper[_ngcontent-%COMP%] {\n  margin-bottom: 55px;\n  display: flex;\n  justify-content: space-between;\n}\n\n.form[_ngcontent-%COMP%] {\n  margin-top: 21px;\n  margin-bottom: 42px;\n}\n.form[_ngcontent-%COMP%]   .form-control-group[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.form[_ngcontent-%COMP%]   .btn-wrapper[_ngcontent-%COMP%] {\n  text-align: end;\n}\n@media screen and (max-width: 490px) {\n  .form[_ngcontent-%COMP%]   .btn-wrapper[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n}\n.form[_ngcontent-%COMP%]   .btn-wrapper[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%] {\n  padding: 13px 39px;\n  box-shadow: 0px 19px 15px -14px rgba(0, 0, 0, 0.22);\n  font-family: Inter;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 700;\n  line-height: 16px;\n  letter-spacing: -0.009em;\n  text-align: left;\n  padding: 13px 65px;\n}\n.form[_ngcontent-%COMP%]   .btn-wrapper[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%]:enabled {\n  background-color: #fa754e;\n  border: 1px solid #fa754e;\n  color: #ffffff;\n}\n@media screen and (max-width: 490px) {\n  .form[_ngcontent-%COMP%]   .accept-group[_ngcontent-%COMP%] {\n    margin-left: -10px;\n    min-width: calc(100% + 30px);\n    text-align: center;\n    margin-top: 0;\n  }\n  .form[_ngcontent-%COMP%]   .accept-group[_ngcontent-%COMP%]   .normal-terms-text[_ngcontent-%COMP%] {\n    font-family: Inter;\n    font-size: 10px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: 13px;\n    letter-spacing: 0em;\n    text-align: left;\n  }\n  .form[_ngcontent-%COMP%]   .accept-group[_ngcontent-%COMP%]   .terms-link[_ngcontent-%COMP%] {\n    font-family: Inter;\n    font-size: 10px;\n    font-style: normal;\n    font-weight: 600;\n    line-height: 13px;\n    letter-spacing: 0em;\n    text-align: left;\n  }\n}\n\n.links[_ngcontent-%COMP%] {\n  margin-top: 21px;\n  margin-bottom: 28px;\n  text-align: start;\n  color: #808080;\n}\n@media screen and (max-width: 490px) {\n  .links[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n}\n.links[_ngcontent-%COMP%]   .socials[_ngcontent-%COMP%] {\n  margin-left: -11px;\n}\n.links[_ngcontent-%COMP%]   .socials[_ngcontent-%COMP%]   .social-link[_ngcontent-%COMP%] {\n  margin: 0 10px 0 0;\n  border: 1px solid transparent;\n  border-radius: 12px;\n  width: 40px;\n  height: 40px;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n}\n@media screen and (max-width: 320px) {\n  .links[_ngcontent-%COMP%]   .socials[_ngcontent-%COMP%]   .social-link[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n}\n.links[_ngcontent-%COMP%]   .socials[_ngcontent-%COMP%]   .social-link[_ngcontent-%COMP%]   nb-icon[_ngcontent-%COMP%] {\n  height: 28px;\n  color: var(--background-alternative-color-2) !important;\n  opacity: 0.8;\n}\n@media screen and (max-width: 1024px) {\n  .links[_ngcontent-%COMP%]   .socials[_ngcontent-%COMP%]   .social-link[_ngcontent-%COMP%]   nb-icon[_ngcontent-%COMP%] {\n    height: 24px;\n  }\n}\n@media screen and (max-width: 320px) {\n  .links[_ngcontent-%COMP%]   .socials[_ngcontent-%COMP%]   .social-link[_ngcontent-%COMP%]   nb-icon[_ngcontent-%COMP%] {\n    height: 21px;\n  }\n}\n.links[_ngcontent-%COMP%]   .socials[_ngcontent-%COMP%]   .social-link[_ngcontent-%COMP%]:hover {\n  border: 1px solid var(--color-primary-500);\n}\n.links[_ngcontent-%COMP%]   .socials[_ngcontent-%COMP%]   .social-link[_ngcontent-%COMP%]:hover   *[_ngcontent-%COMP%] {\n  color: var(--color-primary-500) !important;\n}\n\n@media screen and (min-width: 491px) {\n  .theme-switch[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n  .label .text:not(:empty) {\n  padding-left: 5px !important;\n  vertical-align: middle;\n}\n\n@media screen and (max-width: 1024px) {\n  .register-wrapper[_ngcontent-%COMP%] {\n    padding: 20px 30px;\n  }\n  .register-wrapper[_ngcontent-%COMP%]   .another-action[_ngcontent-%COMP%] {\n    margin-top: 0;\n    padding-left: 10px;\n  }\n  .svg-wrapper[_ngcontent-%COMP%] {\n    margin-bottom: 30px;\n  }\n  .form[_ngcontent-%COMP%] {\n    margin-bottom: 25px;\n  }\n  .form[_ngcontent-%COMP%]   .accept-group[_ngcontent-%COMP%] {\n    margin-top: 15px;\n  }\n  .links[_ngcontent-%COMP%] {\n    margin-top: 10px;\n    margin-bottom: 10px;\n  }\n}\n@media screen and (max-width: 790px) {\n  .main-section[_ngcontent-%COMP%] {\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n  .features-wrapper[_ngcontent-%COMP%] {\n    width: 476px;\n    margin-top: 30px;\n  }\n}\n@media screen and (max-width: 490px) {\n  .main-section[_ngcontent-%COMP%], \n   .register-wrapper[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .register-wrapper[_ngcontent-%COMP%] {\n    padding: 20px 12px;\n  }\n  .register-wrapper[_ngcontent-%COMP%]   .title-wrapper[_ngcontent-%COMP%]    > .title[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  .features-wrapper[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n  .input-full-width {\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 0.5px 0.5px 0.5px inset;\n  border-radius: var(--border-radius);\n  background-color: var(--gauzy-input-background) !important;\n  border: unset;\n}\n\n  ngx-register .register-wrapper .input-full-width {\n  background-color: var(--gauzy-input-background) !important;\n}\n\n  ngx-register .register-wrapper.dark .input-full-width {\n  background-color: rgba(255, 255, 255, 0.15) !important;\n}"]
      });
    }
  };
  NgxRegisterComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_17__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .UntilDestroy */ .d)({
    checkProperties: true
  }), (0,tslib__WEBPACK_IMPORTED_MODULE_17__/* .__metadata */ .Sn)("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__/* .TranslateService */ .c$, _nebular_auth__WEBPACK_IMPORTED_MODULE_1__/* .NbAuthService */ .U_, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .ChangeDetectorRef */ .gRc, _angular_router__WEBPACK_IMPORTED_MODULE_7__/* .Router */ .Ix, _angular_router__WEBPACK_IMPORTED_MODULE_7__/* .ActivatedRoute */ .nX, Object])], NgxRegisterComponent);
  return NgxRegisterComponent;
})();


/***/ }),

/***/ 42171:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ EstimateEmailService)
/* harmony export */ });
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26024);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(64913);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26860);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45715);





let EstimateEmailService = /*#__PURE__*/(() => {
  class EstimateEmailService {
    constructor(http) {
      this.http = http;
    }
    validate(where, relations = []) {
      return this.http.get(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_0__/* .API_PREFIX */ .m4}/estimate-email/validate`, {
        params: (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .toParams */ .SV)({
          ...where,
          relations
        })
      });
    }
    static {
      this.ɵfac = function EstimateEmailService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || EstimateEmailService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵinject"] */ .KVO(_angular_common_http__WEBPACK_IMPORTED_MODULE_3__/* .HttpClient */ .Qq));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineInjectable"] */ .jDH({
        token: EstimateEmailService,
        factory: EstimateEmailService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return EstimateEmailService;
})();

/***/ }),

/***/ 44909:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   r: () => (/* binding */ Action)
/* harmony export */ });
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90204);

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

/***/ 45053:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   s: () => (/* binding */ observable)
/* harmony export */ });
const observable = /*#__PURE__*/(() => typeof Symbol === 'function' && Symbol.observable || '@@observable')();
//# sourceMappingURL=observable.js.map

/***/ }),

/***/ 46113:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   h: () => (/* binding */ mergeInternals)
/* harmony export */ });
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11603);
/* harmony import */ var _util_executeSchedule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(50952);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38405);



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

/***/ 46303:
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

/***/ 46908:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ isFunction)
/* harmony export */ });
function isFunction(value) {
  return typeof value === 'function';
}
//# sourceMappingURL=isFunction.js.map

/***/ }),

/***/ 48901:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ asapScheduler)
/* harmony export */ });
/* unused harmony export asap */
/* harmony import */ var _AsapAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76439);
/* harmony import */ var _AsapScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14508);


const asapScheduler = /*#__PURE__*/new _AsapScheduler__WEBPACK_IMPORTED_MODULE_0__/* .AsapScheduler */ .b(_AsapAction__WEBPACK_IMPORTED_MODULE_1__/* .AsapAction */ .M);
const asap = (/* unused pure expression or super */ null && (asapScheduler));
//# sourceMappingURL=asap.js.map

/***/ }),

/***/ 49118:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ identity)
/* harmony export */ });
function identity(x) {
  return x;
}
//# sourceMappingURL=identity.js.map

/***/ }),

/***/ 49454:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   w: () => (/* binding */ EMPTY)
/* harmony export */ });
/* unused harmony export empty */
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72288);

const EMPTY = /*#__PURE__*/new _Observable__WEBPACK_IMPORTED_MODULE_0__/* .Observable */ .c(subscriber => subscriber.complete());
function empty(scheduler) {
  return scheduler ? emptyScheduled(scheduler) : EMPTY;
}
function emptyScheduled(scheduler) {
  return new Observable(subscriber => scheduler.schedule(() => subscriber.complete()));
}
//# sourceMappingURL=empty.js.map

/***/ }),

/***/ 49973:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   x: () => (/* binding */ scheduleObservable)
/* harmony export */ });
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11603);
/* harmony import */ var _operators_observeOn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4946);
/* harmony import */ var _operators_subscribeOn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95078);



function scheduleObservable(input, scheduler) {
  return (0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_0__/* .innerFrom */ .Tg)(input).pipe((0,_operators_subscribeOn__WEBPACK_IMPORTED_MODULE_1__/* .subscribeOn */ ._)(scheduler), (0,_operators_observeOn__WEBPACK_IMPORTED_MODULE_2__/* .observeOn */ .Q)(scheduler));
}
//# sourceMappingURL=scheduleObservable.js.map

/***/ }),

/***/ 50242:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Q: () => (/* binding */ takeUntil)
/* harmony export */ });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82153);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38405);
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11603);
/* harmony import */ var _util_noop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(54239);




function takeUntil(notifier) {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__/* .operate */ .N)((source, subscriber) => {
    (0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_1__/* .innerFrom */ .Tg)(notifier).subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__/* .createOperatorSubscriber */ ._)(subscriber, () => subscriber.complete(), _util_noop__WEBPACK_IMPORTED_MODULE_3__/* .noop */ .l));
    !subscriber.closed && source.subscribe(subscriber);
  });
}
//# sourceMappingURL=takeUntil.js.map

/***/ }),

/***/ 50952:
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

/***/ 51265:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   u: () => (/* binding */ SocialLinksComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(27075);
/* harmony import */ var _gauzy_ui_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(48840);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12043);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70589);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(31712);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(908);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(56383);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(14572);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(19223);











function SocialLinksComponent_ng_container_0_ng_container_1_ng_container_5_ng_container_1_nb_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(0, "nb-icon", 7);
  }
  if (rf & 2) {
    const socialLink_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("icon", socialLink_r1.icon);
  }
}
function SocialLinksComponent_ng_container_0_ng_container_1_ng_container_5_ng_container_1_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(0);
  }
  if (rf & 2) {
    const socialLink_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", socialLink_r1.title, " ");
  }
}
function SocialLinksComponent_ng_container_0_ng_container_1_ng_container_5_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(1, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(2, SocialLinksComponent_ng_container_0_ng_container_1_ng_container_5_ng_container_1_nb_icon_2_Template, 1, 1, "nb-icon", 6)(3, SocialLinksComponent_ng_container_0_ng_container_1_ng_container_5_ng_container_1_ng_template_3_Template, 1, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplateRefExtractor"] */ .C5r);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const title_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(4);
    const socialLink_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("routerLink", socialLink_r1.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵattribute"] */ .BMQ("target", socialLink_r1.target);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", socialLink_r1.icon)("ngIfElse", title_r2);
  }
}
function SocialLinksComponent_ng_container_0_ng_container_1_ng_container_5_ng_container_2_nb_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(0, "nb-icon", 7);
  }
  if (rf & 2) {
    const socialLink_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("icon", socialLink_r1.icon);
  }
}
function SocialLinksComponent_ng_container_0_ng_container_1_ng_container_5_ng_container_2_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(0);
  }
  if (rf & 2) {
    const socialLink_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", socialLink_r1.title, " ");
  }
}
function SocialLinksComponent_ng_container_0_ng_container_1_ng_container_5_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(1, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(2, SocialLinksComponent_ng_container_0_ng_container_1_ng_container_5_ng_container_2_nb_icon_2_Template, 1, 1, "nb-icon", 6)(3, SocialLinksComponent_ng_container_0_ng_container_1_ng_container_5_ng_container_2_ng_template_3_Template, 1, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplateRefExtractor"] */ .C5r);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const title_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(4);
    const socialLink_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵattribute"] */ .BMQ("href", socialLink_r1.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵsanitizeUrl"] */ .B4B)("target", socialLink_r1.target);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", socialLink_r1.icon)("ngIfElse", title_r3);
  }
}
function SocialLinksComponent_ng_container_0_ng_container_1_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, SocialLinksComponent_ng_container_0_ng_container_1_ng_container_5_ng_container_1_Template, 5, 4, "ng-container", 1)(2, SocialLinksComponent_ng_container_0_ng_container_1_ng_container_5_ng_container_2_Template, 5, 4, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const socialLink_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", socialLink_r1.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", socialLink_r1.url);
  }
}
function SocialLinksComponent_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(4, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(5, SocialLinksComponent_ng_container_0_ng_container_1_ng_container_5_Template, 3, 2, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const socialLinks_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(3, 2, "LOGIN_PAGE.OR_SIGN_IN_WITH"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngForOf", socialLinks_r4);
  }
}
function SocialLinksComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, SocialLinksComponent_ng_container_0_ng_container_1_Template, 6, 4, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const socialLinks_r4 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", socialLinks_r4.length > 0);
  }
}
let SocialLinksComponent = /*#__PURE__*/(() => {
  let SocialLinksComponent = class SocialLinksComponent {
    constructor(_appService) {
      this._appService = _appService;
    }
    /**
     * Lifecycle hook called after Angular has initialized all data-bound properties of a directive.
     * Called once after the first ngOnChanges().
     */
    ngOnInit() {
      this.socialLinks$ = this._appService.getAppConfigs().pipe(
      /**
       * Map the application configurations to social links.
       */
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__/* .map */ .T)(configs => this.getSocialLinks(configs)),
      /**
       * Handle component lifecycle to avoid memory leaks.
       */
      (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__/* .untilDestroyed */ .s)(this));
    }
    /**
     * Get an array of social links based on application configuration.
     *
     * @param {IAppConfig} configs - The application configuration.
     * @returns {ISocialLink[]} Array of social link objects.
     */
    getSocialLinks(configs) {
      return [{
        url: _gauzy_ui_config__WEBPACK_IMPORTED_MODULE_3__/* .environment */ .c.GOOGLE_AUTH_LINK,
        icon: 'google-outline',
        show: configs.google_login
      }, {
        url: _gauzy_ui_config__WEBPACK_IMPORTED_MODULE_3__/* .environment */ .c.FACEBOOK_AUTH_LINK,
        icon: 'facebook-outline',
        show: configs.facebook_login
      }, {
        url: _gauzy_ui_config__WEBPACK_IMPORTED_MODULE_3__/* .environment */ .c.GITHUB_AUTH_LINK,
        icon: 'github-outline',
        show: configs.github_login
      }, {
        url: _gauzy_ui_config__WEBPACK_IMPORTED_MODULE_3__/* .environment */ .c.TWITTER_AUTH_LINK,
        icon: 'twitter-outline',
        show: configs.twitter_login
      }, {
        url: _gauzy_ui_config__WEBPACK_IMPORTED_MODULE_3__/* .environment */ .c.LINKEDIN_AUTH_LINK,
        icon: 'linkedin-outline',
        show: configs.linkedin_login
      }, {
        url: _gauzy_ui_config__WEBPACK_IMPORTED_MODULE_3__/* .environment */ .c.MICROSOFT_AUTH_LINK,
        icon: 'grid',
        show: configs.microsoft_login
      }].filter(item => !!item.show);
    }
    static {
      this.ɵfac = function SocialLinksComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || SocialLinksComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_4__/* .AppService */ .d));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: SocialLinksComponent,
        selectors: [["ngx-social-links"]],
        standalone: false,
        decls: 2,
        vars: 3,
        consts: [["title", ""], [4, "ngIf"], ["aria-label", "Social SignIn", 1, "links"], [1, "socials"], [4, "ngFor", "ngForOf"], [1, "social-link", 3, "routerLink"], [3, "icon", 4, "ngIf", "ngIfElse"], [3, "icon"], [1, "social-link"]],
        template: function SocialLinksComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(0, SocialLinksComponent_ng_container_0_Template, 2, 1, "ng-container", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(1, "async");
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(1, 1, ctx.socialLinks$));
          }
        },
        dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_5__/* .RouterLink */ .Wk, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__/* .NbIconComponent */ .tHu, _angular_common__WEBPACK_IMPORTED_MODULE_7__/* .NgForOf */ .Sq, _angular_common__WEBPACK_IMPORTED_MODULE_7__/* .NgIf */ .bT, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__/* .TranslatePipe */ .D9, _angular_common__WEBPACK_IMPORTED_MODULE_7__/* .AsyncPipe */ .Jj],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.card[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-1);\n}\n\n.links[_ngcontent-%COMP%] {\n  margin-top: 21px;\n  text-align: start;\n  color: #808080;\n}\n@media screen and (max-width: 490px) {\n  .links[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n}\n.links[_ngcontent-%COMP%]   .socials[_ngcontent-%COMP%] {\n  margin-left: -11px;\n}\n.links[_ngcontent-%COMP%]   .socials[_ngcontent-%COMP%]   .social-link[_ngcontent-%COMP%] {\n  margin: 0 10px 0 0;\n  border: 1px solid transparent;\n  border-radius: 12px;\n  width: 40px;\n  height: 40px;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n}\n@media screen and (max-width: 320px) {\n  .links[_ngcontent-%COMP%]   .socials[_ngcontent-%COMP%]   .social-link[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n}\n.links[_ngcontent-%COMP%]   .socials[_ngcontent-%COMP%]   .social-link[_ngcontent-%COMP%]   nb-icon[_ngcontent-%COMP%] {\n  height: 28px;\n  color: var(--background-alternative-color-2) !important;\n  opacity: 0.8;\n}\n@media screen and (max-width: 1024px) {\n  .links[_ngcontent-%COMP%]   .socials[_ngcontent-%COMP%]   .social-link[_ngcontent-%COMP%]   nb-icon[_ngcontent-%COMP%] {\n    height: 24px;\n  }\n}\n@media screen and (max-width: 320px) {\n  .links[_ngcontent-%COMP%]   .socials[_ngcontent-%COMP%]   .social-link[_ngcontent-%COMP%]   nb-icon[_ngcontent-%COMP%] {\n    height: 21px;\n  }\n}\n.links[_ngcontent-%COMP%]   .socials[_ngcontent-%COMP%]   .social-link[_ngcontent-%COMP%]:hover {\n  border: 1px solid var(--color-primary-500);\n}\n.links[_ngcontent-%COMP%]   .socials[_ngcontent-%COMP%]   .social-link[_ngcontent-%COMP%]:hover   *[_ngcontent-%COMP%] {\n  color: var(--color-primary-500) !important;\n}\n.links[_ngcontent-%COMP%]   .socials[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  margin-bottom: 25px;\n}"]
      });
    }
  };
  SocialLinksComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__/* .UntilDestroy */ .d)({
    checkProperties: true
  }), (0,tslib__WEBPACK_IMPORTED_MODULE_9__/* .__metadata */ .Sn)("design:paramtypes", [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_4__/* .AppService */ .d])], SocialLinksComponent);
  return SocialLinksComponent;
})();


/***/ }),

/***/ 53635:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G: () => (/* binding */ Immediate)
/* harmony export */ });
/* unused harmony export TestTools */
let nextHandle = 1;
let resolved;
const activeHandles = {};
function findAndClearHandle(handle) {
  if (handle in activeHandles) {
    delete activeHandles[handle];
    return true;
  }
  return false;
}
const Immediate = {
  setImmediate(cb) {
    const handle = nextHandle++;
    activeHandles[handle] = true;
    if (!resolved) {
      resolved = Promise.resolve();
    }
    resolved.then(() => findAndClearHandle(handle) && cb());
    return handle;
  },
  clearImmediate(handle) {
    findAndClearHandle(handle);
  }
};
const TestTools = {
  pending() {
    return Object.keys(activeHandles).length;
  }
};
//# sourceMappingURL=Immediate.js.map

/***/ }),

/***/ 53978:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   z: () => (/* binding */ EstimateEmailResolver)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(88862);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5488);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42171);



/**
 * Resolver function for validating an estimate email based on query parameters.
 *
 * @param route - The ActivatedRouteSnapshot containing route and query parameters.
 * @returns An Observable that emits an IEstimateEmail if validation is successful,
 *          or an empty Observable if parameters are missing or an error occurs.
 */
const EstimateEmailResolver = route => {
  // Injecting the EstimateEmailService
  const service = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__/* .inject */ .WQX)(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_1__/* .EstimateEmailService */ .M);
  // Extracting 'token' and 'email' from query parameters
  const token = route.queryParamMap.get('token');
  const email = route.queryParamMap.get('email');
  // Check if both 'email' and 'token' are present
  if (!email || !token) {
    console.error('Email or Token should not be blank');
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(); // Return an empty Observable if parameters are missing
  }
  // Validate the email with the token using the service
  return service.validate({
    email,
    token
  }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__/* .catchError */ .W)(error => {
    console.error('Error occurred while validating estimate email', error);
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(); // Return an empty Observable on error
  }));
};

/***/ }),

/***/ 54239:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   l: () => (/* binding */ noop)
/* harmony export */ });
function noop() {}
//# sourceMappingURL=noop.js.map

/***/ }),

/***/ 55985:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ NgxResetPasswordComponent)
/* harmony export */ });
/* harmony import */ var _nebular_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17523);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(908);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56383);
/* harmony import */ var _ui_core_theme_src_lib_components_theme_sidebar_theme_settings_components_theme_selector_switch_theme_switch_theme_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10360);
/* harmony import */ var _ui_core_theme_src_lib_components_gauzy_logo_gauzy_logo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85662);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(14572);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(10936);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(19223);









const _c0 = (a0, a1) => ({
  minLength: a0,
  maxLength: a1
});
function NgxResetPasswordComponent_nb_alert_11_li_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "li", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const error_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(error_r2);
  }
}
function NgxResetPasswordComponent_nb_alert_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-alert", 30)(1, "p", 31)(2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(3, "Oh snap!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(4, "ul", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(5, NgxResetPasswordComponent_nb_alert_11_li_5_Template, 2, 1, "li", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx_r2.errors);
  }
}
function NgxResetPasswordComponent_nb_alert_12_li_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "li", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const message_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(message_r4);
  }
}
function NgxResetPasswordComponent_nb_alert_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-alert", 35)(1, "p", 31)(2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(3, "Hooray!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(4, "ul", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(5, NgxResetPasswordComponent_nb_alert_12_li_5_Template, 2, 1, "li", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx_r2.messages);
  }
}
function NgxResetPasswordComponent_ng_container_26_p_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(2, 1, "RESET_PASSWORD_PAGE.VALIDATION.NEW_PASSWORD_REQUIRED"), " ");
  }
}
function NgxResetPasswordComponent_ng_container_26_p_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind2"] */ .i5U(2, 1, "RESET_PASSWORD_PAGE.VALIDATION.PASSWORD_SHOULD_CONTAIN", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction2"] */ .l_i(4, _c0, ctx_r2.getConfigValue("forms.validation.password.minLength"), ctx_r2.getConfigValue("forms.validation.password.maxLength"))), " ");
  }
}
function NgxResetPasswordComponent_ng_container_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, NgxResetPasswordComponent_ng_container_26_p_1_Template, 3, 3, "p", 36)(2, NgxResetPasswordComponent_ng_container_26_p_2_Template, 3, 7, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    const password_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", password_r5.errors == null ? null : password_r5.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", (password_r5.errors == null ? null : password_r5.errors.minlength) || (password_r5.errors == null ? null : password_r5.errors.maxlength));
  }
}
function NgxResetPasswordComponent_ng_container_37_p_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(2, 1, "RESET_PASSWORD_PAGE.VALIDATION.CONFIRM_PASSWORD_REQUIRED"), " ");
  }
}
function NgxResetPasswordComponent_ng_container_37_p_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(2, 1, "RESET_PASSWORD_PAGE.VALIDATION.PASSWORDS_NOT_MATCH"), " ");
  }
}
function NgxResetPasswordComponent_ng_container_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, NgxResetPasswordComponent_ng_container_37_p_1_Template, 3, 3, "p", 36)(2, NgxResetPasswordComponent_ng_container_37_p_2_Template, 3, 3, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    const password_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(22);
    const rePass_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", rePass_r6.invalid && (rePass_r6.errors == null ? null : rePass_r6.errors.required));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", password_r5.value != rePass_r6.value && !(rePass_r6.errors == null ? null : rePass_r6.errors.required));
  }
}
let NgxResetPasswordComponent = /*#__PURE__*/(() => {
  class NgxResetPasswordComponent extends _nebular_auth__WEBPACK_IMPORTED_MODULE_1__/* .NbResetPasswordComponent */ .AH {
    constructor() {
      super(...arguments);
      this.showPassword = false;
      this.showConfirmPassword = false;
    }
    static {
      this.ɵfac = /*@__PURE__*/(() => {
        let ɵNgxResetPasswordComponent_BaseFactory;
        return function NgxResetPasswordComponent_Factory(__ngFactoryType__) {
          return (ɵNgxResetPasswordComponent_BaseFactory || (ɵNgxResetPasswordComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetInheritedFactory"] */ .xGo(NgxResetPasswordComponent)))(__ngFactoryType__ || NgxResetPasswordComponent);
        };
      })();
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: NgxResetPasswordComponent,
        selectors: [["ngx-reset-password"]],
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
        decls: 56,
        vars: 55,
        consts: [["resetPassForm", "ngForm"], ["password", "ngModel"], ["rePass", "ngModel"], [1, "section-wrapper"], [1, "reset-password-wrapper"], [1, "svg-wrapper"], [1, "ever-logo-svg", 3, "isAccordion"], [1, "theme-switch", 3, "hasText"], ["id", "title", 1, "title"], [1, "sub-title"], ["outline", "danger", "role", "alert", 4, "ngIf"], ["outline", "success", "role", "alert", 4, "ngIf"], [1, "hr-div-strong"], ["aria-labelledby", "title", 1, "form", 3, "ngSubmit"], [1, "form-control-group"], ["for", "input-password", 1, "label"], ["nbInput", "", "id", "input-password", "name", "password", "autofocus", "", "fullWidth", "", "fieldSize", "large", 1, "first", 3, "ngModelChange", "ngModel", "type", "placeholder", "status", "required", "minlength", "maxlength"], ["nbSuffix", "", "nbButton", "", "size", "small", "ghost", "", 1, "show-password-icon", 3, "click"], ["pack", "eva", 3, "icon"], [4, "ngIf"], [1, "form-group"], ["for", "input-re-password", 1, "label"], ["nbInput", "", "id", "input-re-password", "name", "rePass", "fullWidth", "", "fieldSize", "large", 1, "last", 3, "ngModelChange", "ngModel", "type", "placeholder", "status", "required"], [1, "submit-btn-wrapper"], ["nbButton", "", 1, "submit-btn", 3, "disabled"], [1, "hr-div-soft"], ["aria-label", "Sign in or sign up", 1, "sign-in-or-up"], [1, "redirect-link-p"], ["routerLink", "../login", 1, "text-link"], ["routerLink", "../register", 1, "text-link"], ["outline", "danger", "role", "alert"], [1, "alert-title"], [1, "alert-message-list"], ["class", "alert-message", 4, "ngFor", "ngForOf"], [1, "alert-message"], ["outline", "success", "role", "alert"], ["class", "caption status-danger", 4, "ngIf"], [1, "caption", "status-danger"]],
        template: function NgxResetPasswordComponent_Template(rf, ctx) {
          if (rf & 1) {
            const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "section", 3)(1, "div", 4)(2, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(3, "ngx-gauzy-logo", 6)(4, "gauzy-switch-theme", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(5, "h1", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(7, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(8, "p", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(10, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(11, NgxResetPasswordComponent_nb_alert_11_Template, 6, 1, "nb-alert", 10)(12, NgxResetPasswordComponent_nb_alert_12_Template, 6, 1, "nb-alert", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(13, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(14, "form", 13, 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("ngSubmit", function NgxResetPasswordComponent_Template_form_ngSubmit_14_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx.resetPass());
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(16, "div", 14)(17, "label", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(19, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(20, "nb-form-field")(21, "input", 16, 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(23, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayListener"] */ .mxI("ngModelChange", function NgxResetPasswordComponent_Template_input_ngModelChange_21_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayBindingSet"] */ .DH7(ctx.user.password, $event) || (ctx.user.password = $event);
              return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj($event);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(24, "a", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function NgxResetPasswordComponent_Template_a_click_24_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx.showPassword = !ctx.showPassword);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(25, "nb-icon", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(26, NgxResetPasswordComponent_ng_container_26_Template, 3, 2, "ng-container", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(27, "div", 20)(28, "label", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(30, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(31, "nb-form-field")(32, "input", 22, 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(34, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayListener"] */ .mxI("ngModelChange", function NgxResetPasswordComponent_Template_input_ngModelChange_32_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayBindingSet"] */ .DH7(ctx.user.confirmPassword, $event) || (ctx.user.confirmPassword = $event);
              return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj($event);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(35, "a", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function NgxResetPasswordComponent_Template_a_click_35_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx.showConfirmPassword = !ctx.showConfirmPassword);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(36, "nb-icon", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(37, NgxResetPasswordComponent_ng_container_37_Template, 3, 2, "ng-container", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(38, "div", 23)(39, "button", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(40);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(41, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(42, "div", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(43, "section", 26)(44, "p", 27)(45, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(46);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(47, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(48, "a", 28)(49, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(50);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(51, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(52, "p", 27)(53, "a", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(54);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(55, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()()()();
          }
          if (rf & 2) {
            const resetPassForm_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(15);
            const password_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(22);
            const rePass_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(33);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("isAccordion", false);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("hasText", false);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(7, 35, "RESET_PASSWORD_PAGE.TITLE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(10, 37, "RESET_PASSWORD_PAGE.SUB_TITLE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.showMessages.error && (ctx.errors == null ? null : ctx.errors.length) && !ctx.submitted);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.showMessages.success && (ctx.messages == null ? null : ctx.messages.length) && !ctx.submitted);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(19, 39, "RESET_PASSWORD_PAGE.LABELS.NEW_PASSWORD"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayProperty"] */ .R50("ngModel", ctx.user.password);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("type", ctx.showPassword ? "text" : "password")("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(23, 41, "RESET_PASSWORD_PAGE.PLACEHOLDERS.NEW_PASSWORD"))("status", password_r5.dirty ? password_r5.invalid ? "danger" : "success" : "basic")("required", ctx.getConfigValue("forms.validation.password.required"))("minlength", ctx.getConfigValue("forms.validation.password.minLength"))("maxlength", ctx.getConfigValue("forms.validation.password.maxLength"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵattribute"] */ .BMQ("aria-invalid", password_r5.invalid && password_r5.touched ? true : null);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("icon", ctx.showPassword ? "eye-outline" : "eye-off-outline");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵattribute"] */ .BMQ("aria-label", ctx.showPassword ? "hide password" : "show password");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", password_r5.invalid && password_r5.touched);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(30, 43, "RESET_PASSWORD_PAGE.LABELS.CONFIRM_PASSWORD"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayProperty"] */ .R50("ngModel", ctx.user.confirmPassword);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("type", ctx.showConfirmPassword ? "text" : "password")("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(34, 45, "RESET_PASSWORD_PAGE.PLACEHOLDERS.CONFIRM_PASSWORD"))("status", rePass_r6.touched ? rePass_r6.invalid || password_r5.value != rePass_r6.value ? "danger" : "success" : "basic")("required", ctx.getConfigValue("forms.validation.password.required"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵattribute"] */ .BMQ("aria-invalid", rePass_r6.invalid && rePass_r6.touched ? true : null);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("icon", ctx.showConfirmPassword ? "eye-outline" : "eye-off-outline");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵattribute"] */ .BMQ("aria-label", ctx.showConfirmPassword ? "hide password" : "show password");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", rePass_r6.touched);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵclassProp"] */ .AVh("btn-pulse", ctx.submitted);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("disabled", ctx.submitted || !resetPassForm_r7.valid || password_r5.value != rePass_r6.value);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(41, 47, "BUTTONS.CHANGE_PASSWORD"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI("", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(47, 49, "RESET_PASSWORD_PAGE.LABELS.BACK_TO"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(51, 51, "BUTTONS.LOGIN"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(55, 53, "BUTTONS.REGISTER"), " ");
          }
        },
        dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__/* .RouterLink */ .Wk, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbAlertComponent */ .EVe, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbButtonComponent */ .YP2, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbFormFieldComponent */ .u_9, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbSuffixDirective */ .zb0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbIconComponent */ .tHu, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbInputDirective */ .i6h, _ui_core_theme_src_lib_components_theme_sidebar_theme_settings_components_theme_selector_switch_theme_switch_theme_component__WEBPACK_IMPORTED_MODULE_4__/* .SwitchThemeComponent */ .z, _ui_core_theme_src_lib_components_gauzy_logo_gauzy_logo_component__WEBPACK_IMPORTED_MODULE_5__/* .GauzyLogoComponent */ .p, _angular_common__WEBPACK_IMPORTED_MODULE_6__/* .NgForOf */ .Sq, _angular_common__WEBPACK_IMPORTED_MODULE_6__/* .NgIf */ .bT, _angular_forms__WEBPACK_IMPORTED_MODULE_7__/* ["ɵNgNoValidate"] */ .qT, _angular_forms__WEBPACK_IMPORTED_MODULE_7__/* .DefaultValueAccessor */ .me, _angular_forms__WEBPACK_IMPORTED_MODULE_7__/* .NgControlStatus */ .BC, _angular_forms__WEBPACK_IMPORTED_MODULE_7__/* .NgControlStatusGroup */ .cb, _angular_forms__WEBPACK_IMPORTED_MODULE_7__/* .RequiredValidator */ .YS, _angular_forms__WEBPACK_IMPORTED_MODULE_7__/* .MinLengthValidator */ .xh, _angular_forms__WEBPACK_IMPORTED_MODULE_7__/* .MaxLengthValidator */ .tU, _angular_forms__WEBPACK_IMPORTED_MODULE_7__/* .NgModel */ .vS, _angular_forms__WEBPACK_IMPORTED_MODULE_7__/* .NgForm */ .cV, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__/* .TranslatePipe */ .D9],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.card[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-1);\n}\n\n.reset-password-wrapper[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-2);\n  border-radius: var(--border-radius);\n  padding: 30px;\n  width: 476px;\n}\n.reset-password-wrapper[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  padding-left: 15px;\n  padding-right: 15px;\n}\n.reset-password-wrapper[_ngcontent-%COMP%]   .svg-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 57px;\n}\n.reset-password-wrapper[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-family: Inter;\n  font-size: 24px;\n  font-style: normal;\n  font-weight: 700;\n  line-height: 30px;\n  letter-spacing: 0em;\n  text-align: left !important;\n}\n.reset-password-wrapper[_ngcontent-%COMP%]   .sub-title[_ngcontent-%COMP%] {\n  width: 358px;\n  height: 34px;\n  font-family: \"Inter\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 17px;\n  display: flex;\n  align-items: center;\n  text-align: start;\n  margin-bottom: 15px;\n}\n.reset-password-wrapper[_ngcontent-%COMP%]   .hr-div-strong[_ngcontent-%COMP%] {\n  width: 416px;\n  height: 1px;\n  border-radius: 1px;\n  transform: matrix(1, 0, 0, -1, 0, 0);\n  background: var(--border-alternative-color-4);\n  opacity: 0.15;\n  margin-bottom: 29px;\n  padding-left: 0;\n  padding-right: 0;\n}\n@media screen and (max-width: 490px) {\n  .reset-password-wrapper[_ngcontent-%COMP%]   .hr-div-strong[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.reset-password-wrapper[_ngcontent-%COMP%]   .sign-in-or-up[_ngcontent-%COMP%] {\n  margin-top: 15px;\n}\n\n.form[_ngcontent-%COMP%]   .form-control-group[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.form[_ngcontent-%COMP%]   .form-control-group[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-family: \"Inter\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 11px;\n  line-height: 13px;\n  display: flex;\n  align-items: center;\n  letter-spacing: -0.01em;\n}\n.form[_ngcontent-%COMP%]   .submit-btn-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n}\n.form[_ngcontent-%COMP%]   .submit-btn-wrapper[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%] {\n  padding: 13px 39px;\n  box-shadow: 0px 19px 15px -14px rgba(0, 0, 0, 0.22);\n  font-family: Inter;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 700;\n  line-height: 16px;\n  letter-spacing: -0.009em;\n  text-align: left;\n  margin-bottom: 25px;\n  margin-top: 15px;\n}\n.form[_ngcontent-%COMP%]   .submit-btn-wrapper[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%]:enabled {\n  background-color: #fa754e;\n  border: 1px solid #fa754e;\n  color: #ffffff;\n}\n\n.hr-div-soft[_ngcontent-%COMP%] {\n  width: 416px;\n  height: 1px;\n  background: var(--border-alternative-color-4);\n  opacity: 0.05;\n  border-radius: 1px;\n  transform: matrix(1, 0, 0, -1, 0, 0);\n  padding-left: 0;\n  padding-right: 0;\n}\n@media screen and (max-width: 490px) {\n  .hr-div-soft[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n.redirect-link-p[_ngcontent-%COMP%] {\n  font-family: \"Inter\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 17px;\n  \n\n  color: #7e7e8f;\n  margin-bottom: 0;\n}\n.redirect-link-p[_ngcontent-%COMP%]   .text-link[_ngcontent-%COMP%] {\n  font-family: Inter;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 17px;\n  letter-spacing: 0em;\n  color: #6e49e8;\n  text-decoration: none;\n}\n\n@media screen and (min-width: 491px) {\n  .theme-switch[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n@media screen and (max-width: 490px) {\n  [_nghost-%COMP%], \n   .reset-password-wrapper[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .section-wrapper[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    height: 100vh;\n    width: 100%;\n    justify-content: center;\n    align-items: center;\n  }\n  .reset-password-wrapper[_ngcontent-%COMP%] {\n    padding: 12px 18px;\n  }\n  .reset-password-wrapper[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n    padding-left: 0px;\n    padding-right: 0px;\n  }\n  .reset-password-wrapper[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%], \n   .reset-password-wrapper[_ngcontent-%COMP%]   .sub-title[_ngcontent-%COMP%] {\n    width: 100%;\n    display: block;\n    text-align: center !important;\n  }\n  .form[_ngcontent-%COMP%]   .submit-btn-wrapper[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n}\n  .input-full-width {\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 0.5px 0.5px 0.5px inset;\n  border-radius: var(--border-radius);\n  background-color: var(--gauzy-input-background) !important;\n  border: unset;\n}\n\n  ngx-register .register-wrapper .input-full-width {\n  background-color: var(--gauzy-input-background) !important;\n}\n\n  ngx-register .register-wrapper.dark .input-full-width {\n  background-color: rgba(255, 255, 255, 0.15) !important;\n}"]
      });
    }
  }
  return NgxResetPasswordComponent;
})();

/***/ }),

/***/ 57107:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* binding */ from)
/* harmony export */ });
/* harmony import */ var _scheduled_scheduled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30682);
/* harmony import */ var _innerFrom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11603);


function from(input, scheduler) {
  return scheduler ? (0,_scheduled_scheduled__WEBPACK_IMPORTED_MODULE_0__/* .scheduled */ .c)(input, scheduler) : (0,_innerFrom__WEBPACK_IMPORTED_MODULE_1__/* .innerFrom */ .Tg)(input);
}
//# sourceMappingURL=from.js.map

/***/ }),

/***/ 57809:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   lI: () => (/* binding */ popScheduler)
/* harmony export */ });
/* unused harmony exports popResultSelector, popNumber */
/* harmony import */ var _isScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25483);


function last(arr) {
  return arr[arr.length - 1];
}
function popResultSelector(args) {
  return isFunction(last(args)) ? args.pop() : undefined;
}
function popScheduler(args) {
  return (0,_isScheduler__WEBPACK_IMPORTED_MODULE_0__/* .isScheduler */ .m)(last(args)) ? args.pop() : undefined;
}
function popNumber(args, defaultValue) {
  return typeof last(args) === 'number' ? args.pop() : defaultValue;
}
//# sourceMappingURL=args.js.map

/***/ }),

/***/ 57952:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: () => (/* binding */ InviteService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80189);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64913);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26024);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26860);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45715);





let InviteService = /*#__PURE__*/(() => {
  class InviteService {
    constructor(http) {
      this.http = http;
    }
    createWithEmails(createInput) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ ._)(this.http.post(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/invite/emails`, createInput));
    }
    getAll(relations, findInput) {
      const data = JSON.stringify({
        relations,
        findInput
      });
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ ._)(this.http.get(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/invite`, {
        params: {
          data
        }
      }));
    }
    validateInvite(relations, where) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ ._)(this.http.get(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/invite/validate`, {
        params: (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_2__/* .toParams */ .SV)({
          ...where,
          relations
        })
      }));
    }
    update(id, updateInput) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ ._)(this.http.put(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/invite/${id}`, updateInput));
    }
    acceptInvite(input) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ ._)(this.http.post(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/invite/accept`, input));
    }
    resendInvite(inviteResendInput) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ ._)(this.http.post(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/invite/resend`, inviteResendInput));
    }
    delete(id) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ ._)(this.http.delete(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/invite/${id}`));
    }
    inviteOrganizationContact(organizationContactId) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ ._)(this.http.put(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/invite/organization-contact/${organizationContactId}`, {}));
    }
    acceptOrganizationContactInvite(acceptInviteInput) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ ._)(this.http.post(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/invite/contact`, acceptInviteInput));
    }
    static {
      this.ɵfac = function InviteService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || InviteService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵinject"] */ .KVO(_angular_common_http__WEBPACK_IMPORTED_MODULE_4__/* .HttpClient */ .Qq));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdefineInjectable"] */ .jDH({
        token: InviteService,
        factory: InviteService.ɵfac
      });
    }
  }
  return InviteService;
})();

/***/ }),

/***/ 58561:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ mergeMap)
/* harmony export */ });
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70589);
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11603);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(82153);
/* harmony import */ var _mergeInternals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(46113);
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46908);





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

/***/ 59116:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   m: () => (/* binding */ pipeFromArray)
/* harmony export */ });
/* unused harmony export pipe */
/* harmony import */ var _identity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49118);

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

/***/ 60267:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   V: () => (/* binding */ scheduleArray)
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72288);

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

/***/ 61502:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A2: () => (/* binding */ errorNotification),
/* harmony export */   M7: () => (/* binding */ COMPLETE_NOTIFICATION),
/* harmony export */   ro: () => (/* binding */ nextNotification)
/* harmony export */ });
/* unused harmony export createNotification */
const COMPLETE_NOTIFICATION = /*#__PURE__*/(() => createNotification('C', undefined, undefined))();
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

/***/ 63308:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ AcceptClientInviteFormComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(73014);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10936);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(82106);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6992);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(78870);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(32120);
/* harmony import */ var _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38546);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(56383);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(19223);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(14572);
/* harmony import */ var _ui_core_shared_src_lib_user_forms_fields_password_password_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(12467);















const _c0 = (a0, a1) => ({
  "status-danger": a0,
  "status-success": a1
});
function AcceptClientInviteFormComponent_div_19_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(2, 1, "ACCEPT_INVITE.ACCEPT_INVITE_FORM.PASSWORDS_DO_NOT_MATCH"), " ");
  }
}
function AcceptClientInviteFormComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, AcceptClientInviteFormComponent_div_19_div_1_Template, 3, 3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r0.form.get("repeatPassword").errors.mustMatch);
  }
}
let AcceptClientInviteFormComponent = /*#__PURE__*/(() => {
  class AcceptClientInviteFormComponent extends _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_1__/* .TranslationBaseComponent */ .K {
    static buildForm(fb) {
      return fb.group({
        fullName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .Validators */ .k0.required],
        password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .Validators */ .k0.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .Validators */ .k0.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .Validators */ .k0.minLength(4)])],
        repeatPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .Validators */ .k0.required],
        agreeTerms: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .Validators */ .k0.requiredTrue]
      }, {
        validators: [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_3__/* .MatchValidator */ .e.mustMatch('password', 'repeatPassword')]
      });
    }
    constructor(fb, dialogService, translateService) {
      super(translateService);
      this.fb = fb;
      this.dialogService = dialogService;
      this.translateService = translateService;
      this.FormHelpers = _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_4__/* .FormHelpers */ .k;
      this.submitForm = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .bkB();
      this.form = AcceptClientInviteFormComponent.buildForm(this.fb);
    }
    ngOnInit() {}
    addClientOrganization() {
      var _this = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)(function* () {
        _this.organizationCreateInput = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_6__/* .firstValueFrom */ ._)(_this.dialogService.open(_gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_7__/* .OrganizationsMutationComponent */ .t, {
          closeOnBackdropClick: false
        }).onClose);
        _this.addedOrganization = !!_this.organizationCreateInput;
      })();
    }
    createClient() {
      if (this.form.invalid) {
        return;
      }
      if (this.addedOrganization) {
        const {
          fullName,
          password
        } = this.form.getRawValue();
        this.submitForm.emit({
          user: {
            firstName: fullName ? fullName.split(' ').slice(0, -1).join(' ') : null,
            lastName: fullName ? fullName.split(' ').slice(-1).join(' ') : null,
            email: this.invitation.email,
            role: this.invitation.role,
            tenant: this.tenant,
            tags: this.tags
          },
          password,
          contactOrganization: this.organizationCreateInput
        });
      }
    }
    ngOnDestroy() {}
    static {
      this.ɵfac = function AcceptClientInviteFormComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || AcceptClientInviteFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .UntypedFormBuilder */ .ze), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_nebular_theme__WEBPACK_IMPORTED_MODULE_8__/* .NbDialogService */ .S0W), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__/* .TranslateService */ .c$));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: AcceptClientInviteFormComponent,
        selectors: [["ga-accept-client-invite-form"]],
        inputs: {
          invitation: "invitation"
        },
        outputs: {
          submitForm: "submitForm"
        },
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
        decls: 36,
        vars: 52,
        consts: [[1, "accept-invite-form", 3, "formGroup"], [1, "row"], [1, "col-12"], [1, "form-group"], ["for", "fullNameInput", 1, "label"], ["fullWidth", "", "id", "fullNameInput", "nbInput", "", "formControlName", "fullName", "fieldSize", "large", 3, "placeholder", "ngClass"], ["formControlName", "password", 3, "id", "placeholder", "label", "ctrl", "fieldSize", "ngClass"], ["formControlName", "repeatPassword", 3, "id", "placeholder", "label", "ctrl", "fieldSize", "ngClass"], ["class", "invalid-feedback d-block", 4, "ngIf"], ["formControlName", "agreeTerms"], ["href", "#", "target", "_blank"], [1, "actions"], ["nbButton", "", "fullWidth", "", "status", "primary", 1, "mt-3", 3, "click", "disabled"], ["nbButton", "", "fullWidth", "", "status", "success", 1, "mt-3", 3, "click", "disabled"], [1, "invalid-feedback", "d-block"], [4, "ngIf"]],
        template: function AcceptClientInviteFormComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "form", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "label", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(6, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(7, "input", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(8, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(9, "div", 1)(10, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(11, "ngx-password-form-field", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(12, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(13, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(14, "div", 1)(15, "div", 2)(16, "ngx-password-form-field", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(17, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(18, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(19, AcceptClientInviteFormComponent_div_19_Template, 2, 1, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(20, "div", 1)(21, "div", 2)(22, "div", 3)(23, "nb-checkbox", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(25, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(26, "a", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(28, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(29, "div", 11)(30, "button", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function AcceptClientInviteFormComponent_Template_button_click_30_listener() {
              return ctx.addClientOrganization();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(31);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(32, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(33, "button", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function AcceptClientInviteFormComponent_Template_button_click_33_listener() {
              return ctx.createClient();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(34);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(35, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("formGroup", ctx.form);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(6, 23, "ACCEPT_INVITE.ACCEPT_INVITE_FORM.FULL_NAME"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(8, 25, "ACCEPT_INVITE.ACCEPT_INVITE_FORM.ENTER_YOUR_FULL_NAME"))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction2"] */ .l_i(43, _c0, ctx.FormHelpers.isInvalidControl(ctx.form, "fullName"), ctx.FormHelpers.isValidControl(ctx.form, "fullName")));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("id", "passwordInput")("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(12, 27, "ACCEPT_INVITE.ACCEPT_INVITE_FORM.PASSWORD"))("label", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(13, 29, "ACCEPT_INVITE.ACCEPT_INVITE_FORM.PASSWORD"))("ctrl", ctx.form.controls.password)("fieldSize", "large")("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction2"] */ .l_i(46, _c0, ctx.FormHelpers.isInvalidControl(ctx.form, "password"), ctx.FormHelpers.isValidControl(ctx.form, "password")));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("id", "repeatPasswordInput")("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(17, 31, "ACCEPT_INVITE.ACCEPT_INVITE_FORM.REPEAT_PASSWORD"))("label", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(18, 33, "ACCEPT_INVITE.ACCEPT_INVITE_FORM.REPEAT_PASSWORD"))("ctrl", ctx.form.controls.repeatPassword)("fieldSize", "large")("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction2"] */ .l_i(49, _c0, ctx.FormHelpers.isInvalidControl(ctx.form, "repeatPassword"), ctx.FormHelpers.isValidControl(ctx.form, "repeatPassword")));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.FormHelpers.isInvalidControl(ctx.form, "repeatPassword"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(25, 35, "ACCEPT_INVITE.ACCEPT_INVITE_FORM.AGREE_TO"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(28, 37, "ACCEPT_INVITE.ACCEPT_INVITE_FORM.TERMS_AND_CONDITIONS"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("disabled", ctx.form.invalid);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(32, 39, "ACCEPT_INVITE.ACCEPT_INVITE_FORM.ADD_ORGANIZATION"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("disabled", ctx.form.invalid || !ctx.addedOrganization);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(35, 41, "ACCEPT_INVITE.ACCEPT_INVITE_FORM.COMPLETE_REGISTRATION"), " ");
          }
        },
        dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_8__/* .NbButtonComponent */ .YP2, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__/* .NbCheckboxComponent */ .DMy, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__/* .NbInputDirective */ .i6h, _angular_common__WEBPACK_IMPORTED_MODULE_10__/* .NgClass */ .YU, _angular_common__WEBPACK_IMPORTED_MODULE_10__/* .NgIf */ .bT, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* ["ɵNgNoValidate"] */ .qT, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .DefaultValueAccessor */ .me, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .NgControlStatus */ .BC, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .NgControlStatusGroup */ .cb, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .FormGroupDirective */ .j4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .FormControlName */ .JD, _ui_core_shared_src_lib_user_forms_fields_password_password_component__WEBPACK_IMPORTED_MODULE_11__/* .PasswordFormFieldComponent */ .N, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__/* .TranslatePipe */ .D9],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   .item-invalid[_ngcontent-%COMP%]     .ng-select-container {\n  border: 1px solid;\n  border-color: var(--color-danger-default);\n}\n[_nghost-%COMP%]   .item-valid[_ngcontent-%COMP%]     .ng-select-container {\n  border: 1px solid;\n  border-color: var(--color-success-default);\n}"]
      });
    }
  }
  return AcceptClientInviteFormComponent;
})();

/***/ }),

/***/ 63570:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ai: () => (/* binding */ DiscountTaxTypeEnum),
/* harmony export */   BJ: () => (/* binding */ EstimateStatusTypesEnum),
/* harmony export */   Cj: () => (/* binding */ TaxCalculationTypeEnum),
/* harmony export */   RU: () => (/* binding */ InvoiceTypeEnum),
/* harmony export */   Vp: () => (/* binding */ EstimateColumnsEnum),
/* harmony export */   _d: () => (/* binding */ InvoiceColumnsEnum),
/* harmony export */   g0: () => (/* binding */ InvoiceStatusTypesEnum),
/* harmony export */   tq: () => (/* binding */ InvoiceTabsEnum)
/* harmony export */ });
var InvoiceTypeEnum = /*#__PURE__*/function (InvoiceTypeEnum) {
  InvoiceTypeEnum["BY_EMPLOYEE_HOURS"] = "BY_EMPLOYEE_HOURS";
  InvoiceTypeEnum["BY_PROJECT_HOURS"] = "BY_PROJECT_HOURS";
  InvoiceTypeEnum["BY_TASK_HOURS"] = "BY_TASK_HOURS";
  InvoiceTypeEnum["BY_PRODUCTS"] = "BY_PRODUCTS";
  InvoiceTypeEnum["BY_EXPENSES"] = "BY_EXPENSES";
  InvoiceTypeEnum["DETAILED_ITEMS"] = "DETAILED_ITEMS";
  return InvoiceTypeEnum;
}(InvoiceTypeEnum || {});
var DiscountTaxTypeEnum = /*#__PURE__*/function (DiscountTaxTypeEnum) {
  DiscountTaxTypeEnum["PERCENT"] = "PERCENT";
  DiscountTaxTypeEnum["FLAT_VALUE"] = "FLAT";
  return DiscountTaxTypeEnum;
}(DiscountTaxTypeEnum || {});
var InvoiceStatusTypesEnum = /*#__PURE__*/function (InvoiceStatusTypesEnum) {
  InvoiceStatusTypesEnum["DRAFT"] = "DRAFT";
  InvoiceStatusTypesEnum["SENT"] = "SENT";
  InvoiceStatusTypesEnum["VIEWED"] = "VIEWED";
  InvoiceStatusTypesEnum["FULLY_PAID"] = "FULLY_PAID";
  InvoiceStatusTypesEnum["PARTIALLY_PAID"] = "PARTIALLY_PAID";
  InvoiceStatusTypesEnum["OVERPAID"] = "OVERPAID";
  InvoiceStatusTypesEnum["VOID"] = "VOID";
  return InvoiceStatusTypesEnum;
}(InvoiceStatusTypesEnum || {});
var EstimateStatusTypesEnum = /*#__PURE__*/function (EstimateStatusTypesEnum) {
  EstimateStatusTypesEnum["DRAFT"] = "DRAFT";
  EstimateStatusTypesEnum["SENT"] = "SENT";
  EstimateStatusTypesEnum["VIEWED"] = "VIEWED";
  EstimateStatusTypesEnum["ACCEPTED"] = "ACCEPTED";
  EstimateStatusTypesEnum["REJECTED"] = "REJECTED";
  EstimateStatusTypesEnum["VOID"] = "VOID";
  return EstimateStatusTypesEnum;
}(EstimateStatusTypesEnum || {});
var InvoiceColumnsEnum = /*#__PURE__*/function (InvoiceColumnsEnum) {
  InvoiceColumnsEnum["INVOICE_DATE"] = "INVOICE_DATE";
  InvoiceColumnsEnum["DUE_DATE"] = "DUE_DATE";
  InvoiceColumnsEnum["STATUS"] = "STATUS";
  InvoiceColumnsEnum["TOTAL_VALUE"] = "TOTAL_VALUE";
  InvoiceColumnsEnum["CURRENCY"] = "CURRENCY";
  InvoiceColumnsEnum["TAX"] = "TAX";
  InvoiceColumnsEnum["TAX_2"] = "TAX_2";
  InvoiceColumnsEnum["DISCOUNT"] = "DISCOUNT";
  InvoiceColumnsEnum["CONTACT"] = "CONTACT";
  InvoiceColumnsEnum["PAID_STATUS"] = "PAID_STATUS";
  return InvoiceColumnsEnum;
}(InvoiceColumnsEnum || {});
var EstimateColumnsEnum = /*#__PURE__*/function (EstimateColumnsEnum) {
  EstimateColumnsEnum["ESTIMATE_DATE"] = "ESTIMATE_DATE";
  EstimateColumnsEnum["DUE_DATE"] = "DUE_DATE";
  EstimateColumnsEnum["STATUS"] = "STATUS";
  EstimateColumnsEnum["TOTAL_VALUE"] = "TOTAL_VALUE";
  EstimateColumnsEnum["CURRENCY"] = "CURRENCY";
  EstimateColumnsEnum["TAX"] = "TAX";
  EstimateColumnsEnum["TAX_2"] = "TAX_2";
  EstimateColumnsEnum["DISCOUNT"] = "DISCOUNT";
  EstimateColumnsEnum["CONTACT"] = "CONTACT";
  return EstimateColumnsEnum;
}(EstimateColumnsEnum || {});
var InvoiceTabsEnum = /*#__PURE__*/function (InvoiceTabsEnum) {
  InvoiceTabsEnum["ACTIONS"] = "ACTIONS";
  InvoiceTabsEnum["SEARCH"] = "SEARCH";
  InvoiceTabsEnum["HISTORY"] = "HISTORY";
  return InvoiceTabsEnum;
}(InvoiceTabsEnum || {});
var TaxCalculationTypeEnum = /*#__PURE__*/function (TaxCalculationTypeEnum) {
  TaxCalculationTypeEnum["SIMPLE"] = "SIMPLE";
  TaxCalculationTypeEnum["COMPOSED"] = "COMPOSED";
  return TaxCalculationTypeEnum;
}(TaxCalculationTypeEnum || {});

/***/ }),

/***/ 64251:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   X: () => (/* binding */ CurrencyComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(55598);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10936);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(52738);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(39855);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(41598);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(19223);
/* harmony import */ var _gauzy_ui_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(48840);
/* harmony import */ var _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38546);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(89664);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(71924);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26024);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(14572);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(55567);

















function CurrencyComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(1, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(3, 1, ctx_r1.placeholder || "FORM.LABELS.CURRENCY"), " ");
  }
}
function CurrencyComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(0);
  }
  if (rf & 2) {
    const item_r4 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", (item_r4 == null ? null : item_r4.currency) + " (" + (item_r4 == null ? null : item_r4.isoCode) + ")", " ");
  }
}
function CurrencyComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(0);
  }
  if (rf & 2) {
    const item_r5 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", (item_r5 == null ? null : item_r5.currency) + " (" + (item_r5 == null ? null : item_r5.isoCode) + ")", " ");
  }
}
let CurrencyComponent = /*#__PURE__*/(() => {
  let CurrencyComponent = class CurrencyComponent extends _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_1__/* .TranslationBaseComponent */ .K {
    get currency() {
      return this._currency;
    }
    set currency(val) {
      if ((0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_2__/* .isNotEmpty */ .hj)(val)) {
        this._currency = val;
        this.onChange(val);
        this.onTouched();
      }
    }
    get placeholder() {
      return this._placeholder;
    }
    set placeholder(val) {
      if (val) {
        this._placeholder = val;
      }
    }
    get label() {
      return this._label;
    }
    set label(val) {
      this._label = val;
    }
    constructor(translateService, cdr, currencyService, store) {
      super(translateService);
      this.translateService = translateService;
      this.cdr = cdr;
      this.currencyService = currencyService;
      this.store = store;
      this.formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .FormControl */ .MJ();
      this.optionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .bkB();
      this.loading = true;
      this.currencies$ = this.currencyService.currencies$;
      this._currencies = [];
      this.onChange = () => {};
      this.onTouched = () => {};
      /*
       * Getter & Setter for dynamic label display
       */
      this._label = true;
      this.currencyService.find$.next(true);
    }
    ngOnInit() {
      this.store.selectedOrganization$.pipe((0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_2__/* .distinctUntilChange */ .nI)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__/* .filter */ .p)(organization => !!organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .M)(organization => this.organization = organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .M)(({
        currency
      }) => {
        this.currency = currency || _gauzy_ui_config__WEBPACK_IMPORTED_MODULE_6__/* .environment */ .c.DEFAULT_CURRENCY;
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .M)(({
        currency
      }) => {
        this.formControl.setValue(currency);
        this.formControl.updateValueAndValidity();
      }), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__/* .untilDestroyed */ .s)(this)).subscribe();
      this.currencies$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .M)(currencies => this._currencies = currencies), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .M)(() => this.onSelectChange(this.currency)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .M)(() => this.loading = false), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__/* .untilDestroyed */ .s)(this)).subscribe();
    }
    ngAfterViewInit() {
      this.cdr.detectChanges();
    }
    onSelectChange(value) {
      if (this._currencies.length > 0) {
        const currency = this._currencies.find(currency => currency.isoCode === value);
        this.currency = !!currency ? currency.isoCode : null;
        this.onOptionChange(currency);
      }
    }
    onOptionChange($event) {
      this.optionChange.emit($event);
    }
    searchCurrency(term, item) {
      return item.isoCode.toLowerCase().includes(term.toLowerCase()) || item.currency.toLowerCase().includes(term.toLowerCase());
    }
    writeValue(value) {
      if (value) {
        this.currency = value;
      }
      this.cdr.detectChanges();
    }
    registerOnChange(fn) {
      this.onChange = fn;
    }
    registerOnTouched(fn) {
      this.onTouched = fn;
    }
    static {
      this.ɵfac = function CurrencyComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || CurrencyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__/* .TranslateService */ .c$), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* .ChangeDetectorRef */ .gRc), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_9__/* .CurrencyService */ .P), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_10__/* .Store */ .il));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: CurrencyComponent,
        selectors: [["ga-currency"]],
        inputs: {
          formControl: "formControl",
          currency: "currency",
          placeholder: "placeholder",
          label: "label"
        },
        outputs: {
          optionChange: "optionChange"
        },
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵProvidersFeature"] */ .Jv_([{
          provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .NG_VALUE_ACCESSOR */ .kq,
          useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__/* .forwardRef */ .Rfq)(() => CurrencyComponent),
          multi: true
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
        decls: 9,
        vars: 13,
        consts: [["select", ""], [1, "form-group", "currency-container"], [4, "ngIf"], ["bindValue", "isoCode", "appendTo", "body", 1, "currency-selector", 3, "clear", "change", "ngModelChange", "items", "clearable", "placeholder", "ngModel", "searchFn", "loading"], ["ng-option-tmp", ""], ["ng-label-tmp", ""], ["for", "currencySelect", 1, "label"]],
        template: function CurrencyComponent_Template(rf, ctx) {
          if (rf & 1) {
            const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(2, CurrencyComponent_ng_container_2_Template, 4, 3, "ng-container", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(3, "ng-select", 3, 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(5, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(6, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("clear", function CurrencyComponent_Template_ng_select_clear_3_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              const select_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(4);
              return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(select_r3.blur());
            })("change", function CurrencyComponent_Template_ng_select_change_3_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              const select_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(4);
              ctx.onOptionChange($event);
              return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(select_r3.blur());
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayListener"] */ .mxI("ngModelChange", function CurrencyComponent_Template_ng_select_ngModelChange_3_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayBindingSet"] */ .DH7(ctx.currency, $event) || (ctx.currency = $event);
              return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj($event);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(7, CurrencyComponent_ng_template_7_Template, 1, 1, "ng-template", 4)(8, CurrencyComponent_ng_template_8_Template, 1, 1, "ng-template", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.label);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵclassMap"] */ .HbH(ctx.formControl.invalid && ctx.formControl.touched ? "danger" : "basic");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("items", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(5, 9, ctx.currencies$))("clearable", false)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(6, 11, ctx.placeholder || "FORM.PLACEHOLDERS.ALL_CURRENCIES"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayProperty"] */ .R50("ngModel", ctx.currency);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("searchFn", ctx.searchCurrency)("loading", ctx.loading);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__/* .NgIf */ .bT, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .NgControlStatus */ .BC, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .NgModel */ .vS, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__/* .NgSelectComponent */ .vr, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__/* .NgOptionTemplateDirective */ .Uq, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__/* .NgLabelTemplateDirective */ .ZZ, _angular_common__WEBPACK_IMPORTED_MODULE_11__/* .AsyncPipe */ .Jj, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__/* .TranslatePipe */ .D9],
        styles: ["ng-dropdown-panel.currency-selector {\n  width: auto !important;\n}"]
      });
    }
  };
  CurrencyComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__/* .UntilDestroy */ .d)({
    checkProperties: true
  }), (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__metadata */ .Sn)("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__/* .TranslateService */ .c$, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .ChangeDetectorRef */ .gRc, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_9__/* .CurrencyService */ .P, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_10__/* .Store */ .il])], CurrencyComponent);
  return CurrencyComponent;
})();


/***/ }),

/***/ 64898:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   l: () => (/* binding */ isInteropObservable)
/* harmony export */ });
/* harmony import */ var _symbol_observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45053);
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46908);


function isInteropObservable(input) {
  return (0,_isFunction__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .T)(input[_symbol_observable__WEBPACK_IMPORTED_MODULE_1__/* .observable */ .s]);
}
//# sourceMappingURL=isInteropObservable.js.map

/***/ }),

/***/ 64967:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: () => (/* binding */ NgxAuthComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(27075);
/* harmony import */ var _nebular_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17523);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(19159);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9620);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(70589);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(97234);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8657);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12043);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(26860);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(14572);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(56383);
/* harmony import */ var _ui_core_theme_src_lib_components_theme_sidebar_theme_settings_components_theme_selector_switch_theme_switch_theme_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(10360);













const _c0 = a0 => ({
  register: a0
});
const _c1 = a0 => ({
  "hide-go-back": a0
});
let NgxAuthComponent = /*#__PURE__*/(() => {
  let NgxAuthComponent = class NgxAuthComponent extends _nebular_auth__WEBPACK_IMPORTED_MODULE_0__/* .NbAuthComponent */ .sK {
    constructor(auth, location, _router, _route) {
      super(auth, location);
      this.auth = auth;
      this.location = location;
      this._router = _router;
      this._route = _route;
      this.isRegister = false;
    }
    ngOnInit() {
      this.updateRegisterClass(this._router.url);
      // Create an observable to listen to query parameter changes in the current route.
      this.queryParams$ = this._route.queryParams.pipe(
      // Filter and ensure that query parameters are present.
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__/* .filter */ .p)(params => !!params),
      // Use 'untilDestroyed' to handle component lifecycle and avoid memory leaks.
      (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__/* .untilDestroyed */ .s)(this));
      // Listen to router events to update the register class.
      this._router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__/* .filter */ .p)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__/* .NavigationStart */ .Z), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__/* .map */ .T)(event => event), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .M)(event => {
        this.updateRegisterClass(event.url);
      })).subscribe();
    }
    /**
     * Update the register class based on the current URL.
     *
     * @param url
     */
    updateRegisterClass(url) {
      this.isRegister = url === '/auth/register';
    }
    /**
     * Go back to the return URL.
     */
    goBack() {
      // Access query parameters from the snapshot.
      const returnUrl = this._route.snapshot.queryParamMap.get('returnUrl');
      if (returnUrl) {
        if (this.isExternalUrl(returnUrl)) {
          // If it's an external URL, navigate to it using window.location.href.
          window.location.href = returnUrl;
        } else {
          // If it's an Angular app URL, navigate within the Angular application.
          this._router.navigate([returnUrl], {
            replaceUrl: true
          });
        }
      } else {
        // Handle the case when returnUrl is not provided.
        // You can navigate to a default route or display an error message.
        console.error('No return URL provided.');
      }
    }
    /**
     * Check if a URL is external (not part of the Angular app).
     */
    isExternalUrl(url) {
      const location = window.location;
      const currentOrigin = location.origin;
      return !url.startsWith(currentOrigin);
    }
    static {
      this.ɵfac = function NgxAuthComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || NgxAuthComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵdirectiveInject"] */ .rXU(_nebular_auth__WEBPACK_IMPORTED_MODULE_0__/* .NbAuthService */ .U_), _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_common__WEBPACK_IMPORTED_MODULE_7__/* .Location */ .aZ), _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_router__WEBPACK_IMPORTED_MODULE_3__/* .Router */ .Ix), _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_router__WEBPACK_IMPORTED_MODULE_3__/* .ActivatedRoute */ .nX));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵdefineComponent"] */ .VBU({
        type: NgxAuthComponent,
        selectors: [["ngx-auth"]],
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
        decls: 12,
        vars: 12,
        consts: [[1, "wrapper"], [1, "card"], [1, "header", 3, "ngClass"], [1, "navigation", 3, "ngClass"], ["aria-label", "Back", 1, "link", "back-link", 3, "click"], ["icon", "arrow-back"], [1, "theme-switch", 3, "hasText"], [1, "body", 3, "ngClass"], [1, "auth-block"]],
        template: function NgxAuthComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementStart"] */ .j41(0, "nb-layout")(1, "nb-layout-column", 0)(2, "nb-card", 1)(3, "nb-card-header", 2)(4, "nav", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵpipe"] */ .nI1(5, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementStart"] */ .j41(6, "a", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵlistener"] */ .bIt("click", function NgxAuthComponent_Template_a_click_6_listener() {
              return ctx.goBack();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelement"] */ .nrm(7, "nb-icon", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelement"] */ .nrm(8, "gauzy-switch-theme", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementStart"] */ .j41(9, "nb-card-body", 7)(10, "nb-auth-block", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelement"] */ .nrm(11, "router-outlet");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementEnd"] */ .k0s()()()()();
          }
          if (rf & 2) {
            let tmp_1_0;
            _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵproperty"] */ .Y8G("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵpureFunction1"] */ .eq3(6, _c0, ctx.isRegister));
            _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵproperty"] */ .Y8G("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵpureFunction1"] */ .eq3(8, _c1, !((tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵpipeBind1"] */ .bMT(5, 4, ctx.queryParams$)) == null ? null : tmp_1_0.returnUrl)));
            _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵproperty"] */ .Y8G("hasText", false);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵproperty"] */ .Y8G("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵpureFunction1"] */ .eq3(10, _c0, ctx.isRegister));
          }
        },
        dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__/* .RouterOutlet */ .n3, _nebular_auth__WEBPACK_IMPORTED_MODULE_0__/* .NbAuthBlockComponent */ .Rj, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__/* .NbCardComponent */ .SrT, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__/* .NbCardBodyComponent */ .KH5, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__/* .NbCardHeaderComponent */ .zJv, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__/* .NbIconComponent */ .tHu, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__/* .NbLayoutComponent */ .EAZ, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__/* .NbLayoutColumnComponent */ .U9P, _ui_core_theme_src_lib_components_theme_sidebar_theme_settings_components_theme_selector_switch_theme_switch_theme_component__WEBPACK_IMPORTED_MODULE_9__/* .SwitchThemeComponent */ .z, _angular_common__WEBPACK_IMPORTED_MODULE_10__/* .NgClass */ .YU, _angular_common__WEBPACK_IMPORTED_MODULE_10__/* .AsyncPipe */ .Jj],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.card[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-1);\n}\n\n.wrapper[_ngcontent-%COMP%] {\n  padding: 0 !important;\n}\n.wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  border: none;\n}\n.wrapper[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  border-bottom: none;\n  padding-top: 30px;\n  padding-left: 30px;\n  padding-right: 30px;\n  width: 100vw;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-radius: 0;\n}\n@media screen and (max-width: 490px) {\n  .wrapper[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n@media screen and (max-width: 490px) {\n  .wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n    height: auto;\n  }\n}\n.wrapper[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n@media screen and (max-width: 490px) {\n  .wrapper[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%] {\n    padding-left: 10px;\n    padding-right: 10px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n}\n.wrapper[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .auth-block[_ngcontent-%COMP%] {\n  min-width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n}\n.wrapper[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .auth-block[_ngcontent-%COMP%]    >   .ng-star-inserted {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.back-link[_ngcontent-%COMP%] {\n  border: 1px solid lightgray;\n  border-radius: 50%;\n  padding: 15px;\n  transition: all 0.3s ease;\n}\n.back-link[_ngcontent-%COMP%]:hover {\n  box-shadow: 5px 5px 30px -10px rgba(0, 0, 0, 0.3);\n  transition: all 0.3s ease;\n}\n\n.message-us-wrapper[_ngcontent-%COMP%] {\n  background: var(--color-primary-500);\n  padding: 20px;\n  border-radius: 20px;\n  position: absolute;\n  bottom: 30px;\n  right: 20px;\n  cursor: pointer;\n  box-shadow: 5px 5px 23px -5px rgba(0, 0, 0, 0.72);\n}\n.message-us-wrapper[_ngcontent-%COMP%]    > nb-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  color: var(--text-alternate-color);\n}\n@media screen and (max-width: 1024px) {\n  .message-us-wrapper[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n.register[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-1);\n}\n\n.hide-go-back[_ngcontent-%COMP%] {\n  visibility: hidden;\n}\n\n  ngx-register {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n@media screen and (max-width: 490px) {\n    ngx-forgot-password {\n    height: 100vh;\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n}"]
      });
    }
  };
  NgxAuthComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_11__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__/* .UntilDestroy */ .d)({
    checkProperties: true
  }), (0,tslib__WEBPACK_IMPORTED_MODULE_11__/* .__metadata */ .Sn)("design:paramtypes", [_nebular_auth__WEBPACK_IMPORTED_MODULE_0__/* .NbAuthService */ .U_, _angular_common__WEBPACK_IMPORTED_MODULE_7__/* .Location */ .aZ, _angular_router__WEBPACK_IMPORTED_MODULE_3__/* .Router */ .Ix, _angular_router__WEBPACK_IMPORTED_MODULE_3__/* .ActivatedRoute */ .nX])], NgxAuthComponent);
  return NgxAuthComponent;
})();


/***/ }),

/***/ 65947:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ readableStreamLikeToAsyncGenerator),
/* harmony export */   U: () => (/* binding */ isReadableStreamLike)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27075);
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46908);


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

/***/ 67178:
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

/***/ 68558:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O: () => (/* binding */ timer)
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(72288);
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35427);
/* harmony import */ var _util_isScheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25483);
/* harmony import */ var _util_isDate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(33464);




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

/***/ 68822:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   d: () => (/* binding */ immediateProvider)
/* harmony export */ });
/* harmony import */ var _util_Immediate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53635);

const {
  setImmediate,
  clearImmediate
} = _util_Immediate__WEBPACK_IMPORTED_MODULE_0__/* .Immediate */ .G;
const immediateProvider = {
  setImmediate(...args) {
    const {
      delegate
    } = immediateProvider;
    return ((delegate === null || delegate === void 0 ? void 0 : delegate.setImmediate) || setImmediate)(...args);
  },
  clearImmediate(handle) {
    const {
      delegate
    } = immediateProvider;
    return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearImmediate) || clearImmediate)(handle);
  },
  delegate: undefined
};
//# sourceMappingURL=immediateProvider.js.map

/***/ }),

/***/ 69716:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ Scheduler)
/* harmony export */ });
/* harmony import */ var _scheduler_dateTimestampProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67178);

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

/***/ 70291:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ createAuthRoutes)
/* harmony export */ });
/* harmony import */ var _nebular_auth__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(17523);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52127);
/* harmony import */ var _components_auth_auth_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(64967);
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(82813);
/* harmony import */ var _components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(99753);
/* harmony import */ var _components_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(55985);
/* harmony import */ var _components_confirm_email_confirm_email_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(789);
/* harmony import */ var _components_confirm_email_confirm_email_resolver__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(30470);
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39037);
/* harmony import */ var _components_accept_invite_accept_invite_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(87229);
/* harmony import */ var _components_estimate_email_estimate_email_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9073);
/* harmony import */ var _components_estimate_email_estimate_email_resolver__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(53978);
/* harmony import */ var _components_accept_client_invite_accept_client_invite_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(71919);













/**
 * Creates routes for the auth module.
 *
 * @param _pageRouteRegistryService An instance of PageRouteRegistryService
 * @returns An array of Route objects
 */
const createAuthRoutes = _pageRouteRegistryService => [{
  path: '',
  component: _components_auth_auth_component__WEBPACK_IMPORTED_MODULE_0__/* .NgxAuthComponent */ .v,
  children: [{
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }, {
    path: 'login',
    component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_1__/* .NgxLoginComponent */ .y,
    canActivate: [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_2__/* .NoAuthGuard */ .d]
  }, {
    path: 'register',
    component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_3__/* .NgxRegisterComponent */ .k,
    canActivate: [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_2__/* .NoAuthGuard */ .d]
  }, {
    path: 'request-password',
    component: _components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_4__/* .NgxForgotPasswordComponent */ .T,
    canActivate: [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_2__/* .NoAuthGuard */ .d]
  }, {
    path: 'reset-password',
    component: _components_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_5__/* .NgxResetPasswordComponent */ .L,
    canActivate: [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_2__/* .NoAuthGuard */ .d]
  }, {
    path: 'confirm-email',
    component: _components_confirm_email_confirm_email_component__WEBPACK_IMPORTED_MODULE_6__/* .ConfirmEmailComponent */ .a,
    canActivate: [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_2__/* .NoAuthGuard */ .d],
    resolve: {
      resolver: _components_confirm_email_confirm_email_resolver__WEBPACK_IMPORTED_MODULE_7__/* .ConfirmEmailResolver */ .R
    }
  }, {
    path: 'accept-invite',
    component: _components_accept_invite_accept_invite_component__WEBPACK_IMPORTED_MODULE_8__/* .AcceptInviteComponent */ .$,
    canActivate: [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_2__/* .NoAuthGuard */ .d]
  }, {
    path: 'accept-client-invite',
    component: _components_accept_client_invite_accept_client_invite_component__WEBPACK_IMPORTED_MODULE_9__/* .AcceptClientInviteComponent */ .G,
    canActivate: [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_2__/* .NoAuthGuard */ .d]
  }, {
    path: 'estimate',
    component: _components_estimate_email_estimate_email_component__WEBPACK_IMPORTED_MODULE_10__/* .EstimateEmailComponent */ .q,
    canActivate: [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_2__/* .NoAuthGuard */ .d],
    resolve: {
      estimate: _components_estimate_email_estimate_email_resolver__WEBPACK_IMPORTED_MODULE_11__/* .EstimateEmailResolver */ .z
    }
  }, {
    path: 'logout',
    component: _nebular_auth__WEBPACK_IMPORTED_MODULE_12__/* .NbLogoutComponent */ .k2
  }, ..._pageRouteRegistryService.getPageLocationRoutes('auth')]
}];

/***/ }),

/***/ 70589:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ map)
/* harmony export */ });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82153);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38405);


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

/***/ 71919:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G: () => (/* binding */ AcceptClientInviteComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73014);
/* harmony import */ var _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38546);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9620);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(15480);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(57952);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(54263);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19223);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(56383);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(14572);
/* harmony import */ var _accept_client_invite_form_accept_client_invite_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(63308);












const _c0 = a0 => ({
  organizationName: a0
});
const _c1 = a0 => ({
  email: a0
});
function AcceptClientInviteComponent_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 3)(1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(ctx_r0.inviteLoadErrorMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(5, 2, "ACCEPT_INVITE.INVALID_INVITE"), " ");
  }
}
function AcceptClientInviteComponent_div_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div")(1, "div", 4)(2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(8, "ga-accept-client-invite-form", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("submitForm", function AcceptClientInviteComponent_div_1_div_2_Template_ga_accept_client_invite_form_submitForm_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r0.submitForm($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind2"] */ .i5U(4, 3, "ACCEPT_INVITE.HEADING", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction1"] */ .eq3(9, _c0, ctx_r0.invitation == null ? null : ctx_r0.invitation.organization == null ? null : ctx_r0.invitation.organization.name)), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind2"] */ .i5U(7, 6, "ACCEPT_INVITE.SUB_HEADING", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction1"] */ .eq3(11, _c1, ctx_r0.invitation == null ? null : ctx_r0.invitation.email)), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("invitation", ctx_r0.invitation);
  }
}
function AcceptClientInviteComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, AcceptClientInviteComponent_div_1_div_1_Template, 6, 4, "div", 2)(2, AcceptClientInviteComponent_div_1_div_2_Template, 9, 13, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r0.inviteLoadErrorMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", !ctx_r0.inviteLoadErrorMessage);
  }
}
let AcceptClientInviteComponent = /*#__PURE__*/(() => {
  class AcceptClientInviteComponent extends _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_1__/* .TranslationBaseComponent */ .K {
    constructor(router, route, toastrService, translate, inviteService, _errorHandlingService) {
      var _this;
      super(translate);
      _this = this;
      this.router = router;
      this.route = route;
      this.toastrService = toastrService;
      this.translate = translate;
      this.inviteService = inviteService;
      this._errorHandlingService = _errorHandlingService;
      this.loading = true;
      this.inviteLoadErrorMessage = '';
      /**
       * Load the invitation
       *
       * @param email
       * @param token
       */
      this.loadInvite = /*#__PURE__*/function () {
        var _ref = (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(function* (email, token) {
          try {
            _this.invitation = yield _this.inviteService.validateInvite(['organization'], {
              email,
              token
            });
            _this.inviteLoadErrorMessage = '';
          } catch (error) {
            _this.inviteLoadErrorMessage = _this.getTranslation('ACCEPT_INVITE.INVITATION_NO_LONGER_VALID');
          }
          _this.loading = false;
        });
        return function (_x, _x2) {
          return _ref.apply(this, arguments);
        };
      }();
      /**
       * Accept the client invite
       *
       * @param input
       * @returns void
       */
      this.submitForm = /*#__PURE__*/function () {
        var _ref2 = (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(function* (input) {
          try {
            // Extract the name of the organization
            const name = input.contactOrganization.name;
            // Accept the client invite
            yield _this.inviteService.acceptOrganizationContactInvite({
              ...input,
              inviteId: _this.invitation.id
            });
            // Display a success toast message
            _this.toastrService.success('NOTES.ORGANIZATIONS.ADD_NEW_ORGANIZATION', {
              name
            });
            // Navigate to the login page
            _this.router.navigate(['/auth/login']);
          } catch (error) {
            console.log('Error while accepting client invite', error);
            _this._errorHandlingService.handleError(error);
          }
        });
        return function (_x3) {
          return _ref2.apply(this, arguments);
        };
      }();
    }
    ngOnInit() {
      var _this2 = this;
      this.route.queryParams.subscribe(/*#__PURE__*/function () {
        var _ref3 = (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(function* ({
          email,
          token
        }) {
          _this2.loadInvite(email, token);
        });
        return function (_x4) {
          return _ref3.apply(this, arguments);
        };
      }());
    }
    static {
      this.ɵfac = function AcceptClientInviteComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || AcceptClientInviteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_router__WEBPACK_IMPORTED_MODULE_3__/* .Router */ .Ix), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_router__WEBPACK_IMPORTED_MODULE_3__/* .ActivatedRoute */ .nX), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_4__/* .ToastrService */ .t), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__/* .TranslateService */ .c$), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_6__/* .InviteService */ .p), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_7__/* .ErrorHandlingService */ .X));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: AcceptClientInviteComponent,
        selectors: [["ga-accept-client-invite"]],
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
        decls: 2,
        vars: 2,
        consts: [["nbSpinnerStatus", "primary", 3, "nbSpinner"], [4, "ngIf"], ["class", "register-header", 4, "ngIf"], [1, "register-header"], [1, "register-header", "mb-2"], [3, "submitForm", "invitation"]],
        template: function AcceptClientInviteComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, AcceptClientInviteComponent_div_1_Template, 3, 2, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("nbSpinner", ctx.loading);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", !ctx.loading);
          }
        },
        dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_8__/* .NbSpinnerDirective */ .zwc, _angular_common__WEBPACK_IMPORTED_MODULE_9__/* .NgIf */ .bT, _accept_client_invite_form_accept_client_invite_form_component__WEBPACK_IMPORTED_MODULE_10__/* .AcceptClientInviteFormComponent */ .c, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__/* .TranslatePipe */ .D9],
        styles: [".register-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.register-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  text-align: center;\n}"]
      });
    }
  }
  return AcceptClientInviteComponent;
})();

/***/ }),

/***/ 72288:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ Observable)
/* harmony export */ });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86259);
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(90204);
/* harmony import */ var _symbol_observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45053);
/* harmony import */ var _util_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(59116);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(22331);
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(46908);
/* harmony import */ var _util_errorContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12309);







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

/***/ 75214:
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

/***/ 75648:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P: () => (/* binding */ ObjectUnsubscribedError)
/* harmony export */ });
/* harmony import */ var _createErrorClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33190);

const ObjectUnsubscribedError = /*#__PURE__*/(0,_createErrorClass__WEBPACK_IMPORTED_MODULE_0__/* .createErrorClass */ .L)(_super => function ObjectUnsubscribedErrorImpl() {
  _super(this);
  this.name = 'ObjectUnsubscribedError';
  this.message = 'object unsubscribed';
});
//# sourceMappingURL=ObjectUnsubscribedError.js.map

/***/ }),

/***/ 76439:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ AsapAction)
/* harmony export */ });
/* harmony import */ var _AsyncAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95272);
/* harmony import */ var _immediateProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68822);


class AsapAction extends _AsyncAction__WEBPACK_IMPORTED_MODULE_0__/* .AsyncAction */ .R {
  constructor(scheduler, work) {
    super(scheduler, work);
    this.scheduler = scheduler;
    this.work = work;
  }
  requestAsyncId(scheduler, id, delay = 0) {
    if (delay !== null && delay > 0) {
      return super.requestAsyncId(scheduler, id, delay);
    }
    scheduler.actions.push(this);
    return scheduler._scheduled || (scheduler._scheduled = _immediateProvider__WEBPACK_IMPORTED_MODULE_1__/* .immediateProvider */ .d.setImmediate(scheduler.flush.bind(scheduler, undefined)));
  }
  recycleAsyncId(scheduler, id, delay = 0) {
    var _a;
    if (delay != null ? delay > 0 : this.delay > 0) {
      return super.recycleAsyncId(scheduler, id, delay);
    }
    const {
      actions
    } = scheduler;
    if (id != null && ((_a = actions[actions.length - 1]) === null || _a === void 0 ? void 0 : _a.id) !== id) {
      _immediateProvider__WEBPACK_IMPORTED_MODULE_1__/* .immediateProvider */ .d.clearImmediate(id);
      if (scheduler._scheduled === id) {
        scheduler._scheduled = undefined;
      }
    }
    return undefined;
  }
}
//# sourceMappingURL=AsapAction.js.map

/***/ }),

/***/ 77369:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   k: () => (/* binding */ faqs)
/* harmony export */ });
const faqs = [{
  title: 'Reset password',
  icon: 'unlock-outline',
  content: 'Open your Account. You might need to sign in. Under "Security", select Signing in. Choose Password. You might need to sign in again. Enter your new password, then select Change Password.'
}, {
  title: 'Secure password',
  icon: 'umbrella-outline',
  content: 'For example, Use a password that has at least 8-16 characters, use at least one number, one uppercase letter one lowercase letter and one special symbol.'
}];

/***/ }),

/***/ 77817:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   V: () => (/* binding */ NgxLoginMagicComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(73014);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(27075);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(9620);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10936);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(82106);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(49454);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(28137);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(86422);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8657);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(97234);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5488);
/* harmony import */ var _nebular_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17523);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(12043);
/* harmony import */ var _gauzy_ui_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(48840);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(36042);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(54263);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(84059);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(908);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(56383);
/* harmony import */ var _ui_core_theme_src_lib_components_theme_sidebar_theme_settings_components_theme_selector_switch_theme_switch_theme_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(10360);
/* harmony import */ var _ui_core_theme_src_lib_components_gauzy_logo_gauzy_logo_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(85662);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(14572);
/* harmony import */ var _ui_core_shared_src_lib_directives_autocomplete_off_directive__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(21663);
/* harmony import */ var _ui_core_shared_src_lib_directives_debounce_click_directive__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(20345);
/* harmony import */ var _ui_core_shared_src_lib_directives_no_space_edges_directive__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(97040);
/* harmony import */ var _whats_new_whats_new_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(22569);
/* harmony import */ var _social_links_social_links_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(51265);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(19223);

var NgxLoginMagicComponent_1;


























const _c0 = (a0, a1) => ({
  "normal-text": a0,
  "minimum-text": a1
});
const _c1 = a0 => ({
  requiredLength: a0
});
const _c2 = a0 => ({
  countdown: a0
});
function NgxLoginMagicComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 30)(1, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(4, "b", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction2"] */ .l_i(8, _c0, (ctx_r1.email == null ? null : ctx_r1.email.value.length) < 30, (ctx_r1.email == null ? null : ctx_r1.email.value.length) >= 30));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(3, 4, "LOGIN_PAGE.LOGIN_MAGIC.SUCCESS_SENT_CODE_TITLE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(ctx_r1.email == null ? null : ctx_r1.email.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(9, 6, "LOGIN_PAGE.LOGIN_MAGIC.SUCCESS_SENT_CODE_SUB_TITLE"));
  }
}
function NgxLoginMagicComponent_nb_icon_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(0, "nb-icon", 33);
  }
}
function NgxLoginMagicComponent_ng_container_25_p_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(2, 1, "LOGIN_PAGE.VALIDATION.EMAIL_REQUIRED"), " ");
  }
}
function NgxLoginMagicComponent_ng_container_25_p_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(2, 1, "LOGIN_PAGE.VALIDATION.EMAIL_REAL_REQUIRED"), " ");
  }
}
function NgxLoginMagicComponent_ng_container_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, NgxLoginMagicComponent_ng_container_25_p_1_Template, 3, 3, "p", 34)(2, NgxLoginMagicComponent_ng_container_25_p_2_Template, 3, 3, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r1.email == null ? null : ctx_r1.email.errors == null ? null : ctx_r1.email.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r1.email == null ? null : ctx_r1.email.errors == null ? null : ctx_r1.email.errors.pattern);
  }
}
function NgxLoginMagicComponent_ng_container_26_ng_container_7_p_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(2, 1, "LOGIN_PAGE.VALIDATION.CODE_REQUIRED"), " ");
  }
}
function NgxLoginMagicComponent_ng_container_26_ng_container_7_p_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind2"] */ .i5U(2, 1, "LOGIN_PAGE.VALIDATION.CODE_REQUIRED_LENGTH", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction1"] */ .eq3(4, _c1, ctx_r1.code.errors == null ? null : ctx_r1.code.errors.minlength == null ? null : ctx_r1.code.errors.minlength.requiredLength)), " ");
  }
}
function NgxLoginMagicComponent_ng_container_26_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, NgxLoginMagicComponent_ng_container_26_ng_container_7_p_1_Template, 3, 3, "p", 34)(2, NgxLoginMagicComponent_ng_container_26_ng_container_7_p_2_Template, 3, 6, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r1.code.errors == null ? null : ctx_r1.code.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r1.code.errors == null ? null : ctx_r1.code.errors.minlength);
  }
}
function NgxLoginMagicComponent_ng_container_26_ng_template_8_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind2"] */ .i5U(2, 1, "LOGIN_PAGE.LOGIN_MAGIC.REQUEST_NEW_CODE_TITLE", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction1"] */ .eq3(4, _c2, ctx_r1.countdown)), " ");
  }
}
function NgxLoginMagicComponent_ng_container_26_ng_template_8_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("throttledClick", function NgxLoginMagicComponent_ng_container_26_ng_template_8_ng_template_2_Template_a_throttledClick_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.onResendCode());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(2, 1, "LOGIN_PAGE.LOGIN_MAGIC.RESEND_CODE_TITLE"), " ");
  }
}
function NgxLoginMagicComponent_ng_container_26_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, NgxLoginMagicComponent_ng_container_26_ng_template_8_ng_template_1_Template, 3, 6, "ng-template", 23)(2, NgxLoginMagicComponent_ng_container_26_ng_template_8_ng_template_2_Template, 3, 3, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplateRefExtractor"] */ .C5r);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const resendButton_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(3);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r1.isCodeResent)("ngIfElse", resendButton_r4);
  }
}
function NgxLoginMagicComponent_ng_container_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(1, "div", 15)(2, "label", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(5, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(7, NgxLoginMagicComponent_ng_container_26_ng_container_7_Template, 3, 2, "ng-container", 19)(8, NgxLoginMagicComponent_ng_container_26_ng_template_8_Template, 4, 2, "ng-template", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(4, 6, "LOGIN_PAGE.LABELS.CODE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(6, 8, "LOGIN_PAGE.PLACEHOLDERS.CODE"))("status", ctx_r1.code.dirty ? ctx_r1.code.invalid ? "danger" : "success" : "basic");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵattribute"] */ .BMQ("aria-invalid", ctx_r1.code.invalid && ctx_r1.code.touched ? true : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r1.code.invalid && ctx_r1.code.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r1.isCodeSent);
  }
}
function NgxLoginMagicComponent_ng_template_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "button", 41)(1, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("disabled", ctx_r1.form.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(3, 2, "BUTTONS.LOGIN"), " ");
  }
}
function NgxLoginMagicComponent_ng_template_33_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(0, "nb-icon", 44);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngClass", ctx_r1.isLoading ? "spinner" : "");
  }
}
function NgxLoginMagicComponent_ng_template_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function NgxLoginMagicComponent_ng_template_33_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.sendLoginCode());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(1, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(4, NgxLoginMagicComponent_ng_template_33_ng_template_4_Template, 1, 1, "ng-template", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("disabled", ctx_r1.email.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(3, 3, "BUTTONS.SEND_CODE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r1.isLoading);
  }
}
let NgxLoginMagicComponent = /*#__PURE__*/(() => {
  let NgxLoginMagicComponent = class NgxLoginMagicComponent extends _nebular_auth__WEBPACK_IMPORTED_MODULE_1__/* .NbLoginComponent */ .fB {
    static {
      NgxLoginMagicComponent_1 = this;
    }
    /**
     * Static method to build the magic login form using Angular's FormBuilder.
     *
     * @param fb - Angular FormBuilder instance.
     * @returns {FormGroup} - The built magic login form.
     */
    static buildForm(fb) {
      return fb.group({
        email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .Validators */ .k0.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .Validators */ .k0.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .Validators */ .k0.pattern(_gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_3__/* .patterns */ .q.email)])],
        code: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .Validators */ .k0.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .Validators */ .k0.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .Validators */ .k0.minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .Validators */ .k0.maxLength(6)])]
      });
    }
    /**
     * Gets the 'email' AbstractControl from the form.
     *
     * @returns {AbstractControl} - The 'email' form control.
     */
    get email() {
      return this.form.get('email');
    }
    /**
     * Gets the 'code' AbstractControl from the form.
     *
     * @returns {AbstractControl} - The 'code' form control.
     */
    get code() {
      return this.form.get('code');
    }
    constructor(_fb, _activatedRoute, nbAuthService, cdr, router, _authService, _errorHandlingService, options) {
      super(nbAuthService, options, cdr, router);
      this._fb = _fb;
      this._activatedRoute = _activatedRoute;
      this.nbAuthService = nbAuthService;
      this.cdr = cdr;
      this.router = router;
      this._authService = _authService;
      this._errorHandlingService = _errorHandlingService;
      this.isLoading = false;
      this.isCodeSent = false;
      this.isCodeResent = false;
      this.isDemo = _gauzy_ui_config__WEBPACK_IMPORTED_MODULE_4__/* .environment */ .c.DEMO;
      /**
       * FormGroup instance representing the magic login form.
       */
      this.form = NgxLoginMagicComponent_1.buildForm(this._fb);
    }
    /**
     *
     */
    ngOnInit() {
      // Create an observable to listen to query parameter changes in the current route.
      this._activatedRoute.queryParams.pipe(
      // Filter and ensure that query parameters are present.
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .filter */ .p)(params => !!params),
      // Tap into the observable to update the 'form.email' property with the 'email' query parameter.
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .M)(({
        email
      }) => {
        if (email) {
          this.form.patchValue({
            email
          });
          this.form.updateValueAndValidity();
        }
      }),
      // Use 'untilDestroyed' to handle component lifecycle and avoid memory leaks.
      (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__/* .untilDestroyed */ .s)(this)).subscribe();
    }
    /**
     *
     */
    ngOnDestroy() {
      this.stopTimer();
    }
    /**
     * Initiates the login process.
     *
     * @remarks
     * This method retrieves the email from the form, validates it, and sends a request to sign in
     * to workspaces using the authentication service. Error handling and loading indicator management
     * are included to ensure a smooth user experience.
     *
     * @returns An observable representing the login request.
     */
    sendLoginCode() {
      var _this = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A)(function* () {
        // Get the email value from the form
        const email = _this.form.get('email').value;
        if (!email) {
          return;
        }
        _this.isLoading = true;
        _this.isCodeSent = false;
        // Send a request to sign in to workspaces using the authentication service
        yield (0,rxjs__WEBPACK_IMPORTED_MODULE_9__/* .firstValueFrom */ ._)(_this._authService.sendSigninCode({
          email
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .catchError */ .W)(error => {
          // Handle and log errors using the error handling service
          _this._errorHandlingService.handleError(error);
          return rxjs__WEBPACK_IMPORTED_MODULE_11__/* .EMPTY */ .w;
        }),
        // Turn off loading indicator
        (0,rxjs__WEBPACK_IMPORTED_MODULE_12__/* .finalize */ .j)(() => {
          _this.isLoading = false;
          _this.isCodeSent = true;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .M)(() => _this.form.get('email').disable()),
        // Handle component lifecycle to avoid memory leaks
        (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__/* .untilDestroyed */ .s)(_this))); // Wait for the login request to complete
      })();
    }
    /**
     * Resend the sign-in code.
     */
    onResendCode() {
      var _this2 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A)(function* () {
        // Start the timer
        _this2.startTimer();
        // Get the email value from the form
        const email = _this2.form.get('email').value;
        // Check if email is present
        if (!email) {
          return;
        }
        try {
          // Send a request to sign in to workspaces using the authentication service
          yield (0,rxjs__WEBPACK_IMPORTED_MODULE_9__/* .firstValueFrom */ ._)(_this2._authService.sendSigninCode({
            email
          }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .catchError */ .W)(error => {
            // Handle and log errors using the error handling service
            _this2._errorHandlingService.handleError(error);
            return rxjs__WEBPACK_IMPORTED_MODULE_11__/* .EMPTY */ .w;
          }),
          // Handle component lifecycle to avoid memory leaks
          (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__/* .untilDestroyed */ .s)(_this2))); // Wait for the login request to complete
        } catch (error) {
          // Handle errors
          console.error('Error while resending sign-in code:', error);
        }
      })();
    }
    /**
     * Confirms the sign-in code.
     */
    confirmSignInCode() {
      var _this3 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A)(function* () {
        // Check if the form is invalid
        if (_this3.form.invalid) {
          return;
        }
        // Get the email and code values from the form
        const {
          email,
          code
        } = _this3.form.getRawValue();
        // Check if both email and code are present
        if (!email || !code) {
          return;
        }
        // Navigate to the 'auth/magic-sign-in' route with email and code as query parameters
        _this3.router.navigate(['auth/magic-sign-in'], {
          queryParams: {
            email,
            code
          }
        });
      })();
    }
    /**
     * Starts a timer for a countdown.
     */
    startTimer() {
      this.isCodeResent = true;
      this.countdown = 30;
      this.timer = (0,rxjs__WEBPACK_IMPORTED_MODULE_13__/* .interval */ .Y)(1000).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .M)(() => {
        if (this.countdown > 0) {
          this.countdown--;
        } else {
          this.stopTimer();
        }
      }), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__/* .untilDestroyed */ .s)(this)).subscribe();
    }
    /**
     * Stops the timer and resets the code resent flag.
     */
    stopTimer() {
      this.isCodeResent = false;
      if (this.timer) {
        this.timer.unsubscribe();
      }
    }
    static {
      this.ɵfac = function NgxLoginMagicComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || NgxLoginMagicComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .UntypedFormBuilder */ .ze), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_router__WEBPACK_IMPORTED_MODULE_14__/* .ActivatedRoute */ .nX), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_nebular_auth__WEBPACK_IMPORTED_MODULE_1__/* .NbAuthService */ .U_), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* .ChangeDetectorRef */ .gRc), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_router__WEBPACK_IMPORTED_MODULE_14__/* .Router */ .Ix), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_15__/* .AuthService */ .u), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_16__/* .ErrorHandlingService */ .X), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_nebular_auth__WEBPACK_IMPORTED_MODULE_1__/* .NB_AUTH_OPTIONS */ .$$));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: NgxLoginMagicComponent,
        selectors: [["ngx-login-magic"]],
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
        decls: 56,
        vars: 41,
        consts: [["formDirective", "ngForm"], ["sendCodeButtonTemplate", ""], ["resendButton", ""], [1, "login-container"], [1, "login-wrapper"], [1, "svg-wrapper"], [1, "ever-logo-svg", 3, "isAccordion"], [1, "theme-switch", 3, "hasText"], [1, "headings"], [1, "headings-inner"], ["id", "title", 1, "title"], [1, "sub-title"], [3, "ngIf"], [1, "hr-div-strong"], [3, "ngSubmit", "formGroup"], [1, "form-control-group"], ["for", "input-email", 1, "label"], ["name", "input-email", "id", "input-email", "nbInput", "", "fullWidth", "", "formControlName", "email", "noSpaceEdges", "", "autofocus", "", "autocomplete-off", "", 3, "placeholder", "status", "ngClass"], ["class", "edit-email", "nbSuffix", "", "nbButton", "", "size", "small", "ghost", "", "icon", "edit-outline", "nbTooltip", "edit email", "nbTooltipPosition", "top", 4, "ngIf"], [4, "ngIf"], [1, "submit-btn-wrapper"], ["href", "mailto:forgot@signimus.com", 1, "forgot-email", "caption-2", "forgot-email-big"], [1, "submit-inner-wrapper"], [3, "ngIf", "ngIfElse"], [1, "magic-description"], ["routerLink", "/auth/login"], [1, "hr-div-soft"], ["aria-label", "Register", 1, "another-action"], ["routerLink", "/auth/register", 1, "text-link"], [1, "features-wrapper"], [1, "sent-code-container"], [3, "ngClass"], [1, "title"], ["nbSuffix", "", "nbButton", "", "size", "small", "ghost", "", "icon", "edit-outline", "nbTooltip", "edit email", "nbTooltipPosition", "top", 1, "edit-email"], ["class", "caption status-danger", 4, "ngIf"], [1, "caption", "status-danger"], ["for", "input-code", 1, "label"], ["name", "input-code", "id", "input-code", "nbInput", "", "fullWidth", "", "formControlName", "code", "noSpaceEdges", "", "maxlength", "6", "autofocus", "", "autocomplete-off", "", 3, "placeholder", "status"], [1, "new-code-wrapper"], [1, "request-new-code"], ["debounceClick", "", 1, "resend-code", 3, "throttledClick"], ["type", "submit", "nbButton", "", "size", "tiny", 1, "submit-btn", 3, "disabled"], [1, "btn-text"], ["type", "button", "nbButton", "", "size", "tiny", 1, "submit-btn", 3, "click", "disabled"], ["icon", "loader-outline", 1, "btn-icon", 3, "ngClass"]],
        template: function NgxLoginMagicComponent_Template(rf, ctx) {
          if (rf & 1) {
            const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "section", 3)(1, "div", 4)(2, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(3, "ngx-gauzy-logo", 6)(4, "gauzy-switch-theme", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(5, "div", 8)(6, "div", 9)(7, "h2", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(9, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(10, "p", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(12, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(13, NgxLoginMagicComponent_ng_template_13_Template, 10, 11, "ng-template", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(14, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(15, "form", 14, 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("ngSubmit", function NgxLoginMagicComponent_Template_form_ngSubmit_15_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx.confirmSignInCode());
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(17, "div", 15)(18, "label", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(20, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(21, "nb-form-field");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(22, "input", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(23, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(24, NgxLoginMagicComponent_nb_icon_24_Template, 1, 0, "nb-icon", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(25, NgxLoginMagicComponent_ng_container_25_Template, 3, 2, "ng-container", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(26, NgxLoginMagicComponent_ng_container_26_Template, 9, 10, "ng-container", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(27, "div", 20)(28, "a", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(30, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(31, "div", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(32, NgxLoginMagicComponent_ng_template_32_Template, 4, 4, "ng-template", 23)(33, NgxLoginMagicComponent_ng_template_33_Template, 5, 5, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplateRefExtractor"] */ .C5r);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(35, "div", 24)(36, "p", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(37);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(38, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(39, "span", 11)(40, "a", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(41);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(42, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(43, "div", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(44, "section");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(45, "ngx-social-links");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(46, "div", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(47, "section", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(48);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(49, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(50, "a", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(51);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(52, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(53, "div", 29)(54, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(55, "ngx-whats-new");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
          }
          if (rf & 2) {
            const sendCodeButtonTemplate_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(34);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("isAccordion", false);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("hasText", false);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵclassMap"] */ .HbH(ctx.isDemo ? "headings-demo" : "");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(9, 23, "LOGIN_PAGE.TITLE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(12, 25, "LOGIN_PAGE.LOGIN_MAGIC.TITLE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.isCodeSent);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("formGroup", ctx.form);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(20, 27, "LOGIN_PAGE.LABELS.EMAIL"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(23, 29, "LOGIN_PAGE.PLACEHOLDERS.EMAIL"))("status", ctx.email.dirty ? ctx.email.invalid ? "danger" : "success" : "basic")("ngClass", ctx.isCodeSent ? "not-allowed" : "");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵattribute"] */ .BMQ("aria-invalid", ctx.email.invalid && ctx.email.touched ? true : null);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.isCodeSent);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.email.invalid && ctx.email.touched && !ctx.email.pristine);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.isCodeSent);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(30, 31, "LOGIN_PAGE.FORGOT_EMAIL_TITLE"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.isCodeSent)("ngIfElse", sendCodeButtonTemplate_r6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(38, 33, "LOGIN_PAGE.LOGIN_MAGIC.DESCRIPTION_TITLE"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(42, 35, "LOGIN_PAGE.LOGIN_MAGIC.OR_SIGN_IN_WITH_PASSWORD"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(49, 37, "LOGIN_PAGE.DO_NOT_HAVE_ACCOUNT_TITLE"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(52, 39, "BUTTONS.REGISTER"), " ");
          }
        },
        dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_17__/* .RouterLink */ .Wk, _nebular_theme__WEBPACK_IMPORTED_MODULE_18__/* .NbButtonComponent */ .YP2, _nebular_theme__WEBPACK_IMPORTED_MODULE_18__/* .NbFormFieldComponent */ .u_9, _nebular_theme__WEBPACK_IMPORTED_MODULE_18__/* .NbSuffixDirective */ .zb0, _nebular_theme__WEBPACK_IMPORTED_MODULE_18__/* .NbIconComponent */ .tHu, _nebular_theme__WEBPACK_IMPORTED_MODULE_18__/* .NbInputDirective */ .i6h, _nebular_theme__WEBPACK_IMPORTED_MODULE_18__/* .NbTooltipDirective */ .BmQ, _ui_core_theme_src_lib_components_theme_sidebar_theme_settings_components_theme_selector_switch_theme_switch_theme_component__WEBPACK_IMPORTED_MODULE_19__/* .SwitchThemeComponent */ .z, _ui_core_theme_src_lib_components_gauzy_logo_gauzy_logo_component__WEBPACK_IMPORTED_MODULE_20__/* .GauzyLogoComponent */ .p, _angular_common__WEBPACK_IMPORTED_MODULE_21__/* .NgClass */ .YU, _angular_common__WEBPACK_IMPORTED_MODULE_21__/* .NgIf */ .bT, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* ["ɵNgNoValidate"] */ .qT, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .DefaultValueAccessor */ .me, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .NgControlStatus */ .BC, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .NgControlStatusGroup */ .cb, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .MaxLengthValidator */ .tU, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .FormGroupDirective */ .j4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .FormControlName */ .JD, _ui_core_shared_src_lib_directives_autocomplete_off_directive__WEBPACK_IMPORTED_MODULE_22__/* .AutocompleteOffDirective */ .h, _ui_core_shared_src_lib_directives_debounce_click_directive__WEBPACK_IMPORTED_MODULE_23__/* .DebounceClickDirective */ .J, _ui_core_shared_src_lib_directives_no_space_edges_directive__WEBPACK_IMPORTED_MODULE_24__/* .NoSpaceEdgesDirective */ .h, _whats_new_whats_new_component__WEBPACK_IMPORTED_MODULE_25__/* .NgxWhatsNewComponent */ .Q, _social_links_social_links_component__WEBPACK_IMPORTED_MODULE_26__/* .SocialLinksComponent */ .u, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_27__/* .TranslatePipe */ .D9],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.card[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-1);\n}\n\n.login-container[_ngcontent-%COMP%] {\n  width: 765px;\n  position: relative;\n  display: flex;\n  justify-content: space-between;\n}\n.login-container[_ngcontent-%COMP%]   .login-wrapper[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-2);\n  border-radius: var(--border-radius);\n  box-sizing: border-box;\n  padding: 30px;\n  width: 476px;\n  height: 100%;\n}\n.login-container[_ngcontent-%COMP%]   .login-wrapper[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  padding-left: 15px;\n  padding-right: 15px;\n}\n.login-container[_ngcontent-%COMP%]   .login-wrapper[_ngcontent-%COMP%]   .svg-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.login-container[_ngcontent-%COMP%]   .login-wrapper[_ngcontent-%COMP%]   .svg-wrapper[_ngcontent-%COMP%]   .ever-logo-svg[_ngcontent-%COMP%] {\n  margin-bottom: 57px;\n}\n.login-container[_ngcontent-%COMP%]   .login-wrapper[_ngcontent-%COMP%]   .headings[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n  position: relative;\n}\n.login-container[_ngcontent-%COMP%]   .login-wrapper[_ngcontent-%COMP%]   .headings[_ngcontent-%COMP%]   .headings-inner[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-family: Inter;\n  font-size: 24px;\n  font-style: normal;\n  font-weight: 700;\n  line-height: 30px;\n  letter-spacing: 0em;\n  margin-bottom: 18px;\n  text-align: start;\n}\n.login-container[_ngcontent-%COMP%]   .login-wrapper[_ngcontent-%COMP%]   .headings[_ngcontent-%COMP%]   .headings-inner[_ngcontent-%COMP%]   .sub-title[_ngcontent-%COMP%] {\n  font-family: Inter;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 11px;\n  letter-spacing: 0em;\n  margin-bottom: 26px;\n  text-align: start;\n}\n.login-container[_ngcontent-%COMP%]   .login-wrapper[_ngcontent-%COMP%]   .headings[_ngcontent-%COMP%]   .sent-code-container[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n  margin-right: -20px;\n}\n.login-container[_ngcontent-%COMP%]   .login-wrapper[_ngcontent-%COMP%]   .headings[_ngcontent-%COMP%]   .sent-code-container[_ngcontent-%COMP%]   .normal-text[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n}\n.login-container[_ngcontent-%COMP%]   .login-wrapper[_ngcontent-%COMP%]   .headings[_ngcontent-%COMP%]   .sent-code-container[_ngcontent-%COMP%]   .minimum-text[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n}\n.login-container[_ngcontent-%COMP%]   .login-wrapper[_ngcontent-%COMP%]   .headings[_ngcontent-%COMP%]   .sent-code-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.login-container[_ngcontent-%COMP%]   .login-wrapper[_ngcontent-%COMP%]   .headings[_ngcontent-%COMP%]   .sent-code-container[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n}\n.login-container[_ngcontent-%COMP%]   .login-wrapper[_ngcontent-%COMP%]   .headings[_ngcontent-%COMP%]   .sent-code-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: var(--text-hint-color);\n}\n.login-container[_ngcontent-%COMP%]   .login-wrapper[_ngcontent-%COMP%]   .hr-div-strong[_ngcontent-%COMP%] {\n  width: 416px;\n  height: 1px;\n  border-radius: 1px;\n  transform: matrix(1, 0, 0, -1, 0, 0);\n  background: var(--border-alternative-color-4);\n  opacity: 0.15;\n  margin-bottom: 29px;\n  padding-left: 0;\n  padding-right: 0;\n}\n@media screen and (max-width: 490px) {\n  .login-container[_ngcontent-%COMP%]   .login-wrapper[_ngcontent-%COMP%]   .hr-div-strong[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.login-container[_ngcontent-%COMP%]   .login-wrapper[_ngcontent-%COMP%]   .hr-div-soft[_ngcontent-%COMP%] {\n  width: 416px;\n  height: 1px;\n  background: var(--border-alternative-color-4);\n  opacity: 0.05;\n  border-radius: 1px;\n  transform: matrix(1, 0, 0, -1, 0, 0);\n  padding-left: 0;\n  padding-right: 0;\n}\n@media screen and (max-width: 490px) {\n  .login-container[_ngcontent-%COMP%]   .login-wrapper[_ngcontent-%COMP%]   .hr-div-soft[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  margin-top: 29px;\n  margin-bottom: 42px;\n}\n.login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-control-group[_ngcontent-%COMP%]   .not-allowed[_ngcontent-%COMP%] {\n  cursor: not-allowed;\n}\n.login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-control-group[_ngcontent-%COMP%]   .edit-email[_ngcontent-%COMP%] {\n  transition: all;\n}\n.login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-control-group[_ngcontent-%COMP%]   .edit-email[_ngcontent-%COMP%]:hover {\n  color: var(--text-basic-color);\n}\n.login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .new-code-wrapper[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  text-align: right;\n  margin-top: 0.4rem;\n  margin-right: 0.4rem;\n}\n[dir=rtl][_ngcontent-%COMP%]   .login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .new-code-wrapper[_ngcontent-%COMP%] {\n  text-align: left;\n}\n[dir=rtl][_ngcontent-%COMP%]   .login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .new-code-wrapper[_ngcontent-%COMP%] {\n  margin-right: 0;\n}\n[dir=rtl][_ngcontent-%COMP%]   .login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .new-code-wrapper[_ngcontent-%COMP%] {\n  margin-left: 0.4rem;\n}\n.login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .new-code-wrapper[_ngcontent-%COMP%]   .resend-code[_ngcontent-%COMP%] {\n  margin-bottom: 0.4rem;\n}\n.login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .new-code-wrapper[_ngcontent-%COMP%]   .resend-code[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n.login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .new-code-wrapper[_ngcontent-%COMP%]   .request-new-code[_ngcontent-%COMP%] {\n  color: var(--text-hint-color);\n}\n.login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .submit-btn-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 2rem;\n}\n.login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .submit-btn-wrapper[_ngcontent-%COMP%]   .forgot-email[_ngcontent-%COMP%] {\n  text-decoration-line: underline;\n  margin-bottom: 0;\n  font-family: Inter;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 17px;\n  letter-spacing: -0.01em;\n  text-align: left;\n}\n@media screen and (max-width: 490px) {\n  .login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .submit-btn-wrapper[_ngcontent-%COMP%]   .forgot-email[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .submit-btn-wrapper[_ngcontent-%COMP%]   .forgot-email[_ngcontent-%COMP%]:hover {\n  color: #fa754e;\n}\n.login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .submit-btn-wrapper[_ngcontent-%COMP%]   .forgot-email-big[_ngcontent-%COMP%] {\n  display: block;\n}\n@media screen and (max-width: 490px) {\n  .login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .submit-btn-wrapper[_ngcontent-%COMP%]   .forgot-email-big[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .submit-btn-wrapper[_ngcontent-%COMP%]   .submit-inner-wrapper[_ngcontent-%COMP%] {\n  display: inline-flex;\n  flex-direction: column;\n  align-items: center;\n}\n.login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .submit-btn-wrapper[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%] {\n  padding: 13px 39px;\n  box-shadow: 0px 19px 15px -14px rgba(0, 0, 0, 0.22);\n  font-family: Inter;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 700;\n  line-height: 16px;\n  letter-spacing: -0.009em;\n  text-align: left;\n  padding: 13px 20px;\n  font-size: 14px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .submit-btn-wrapper[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%]:enabled {\n  background-color: #fa754e;\n  border: 1px solid #fa754e;\n  color: #ffffff;\n}\n.login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .submit-btn-wrapper[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%]   nb-icon[_ngcontent-%COMP%] {\n  position: relative;\n  background: transparent;\n}\n.login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .submit-btn-wrapper[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n.login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .accept-group[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n@media screen and (max-width: 490px) {\n  .login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .accept-group[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n  }\n}\n.login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .magic-description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: left;\n  font-size: 0.85rem;\n}\n.login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .magic-description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--link-text-color);\n}\n.login-container[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%] {\n  margin-top: 21px;\n  text-align: start;\n  color: #808080;\n}\n@media screen and (max-width: 490px) {\n  .login-container[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n}\n.login-container[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   .socials[_ngcontent-%COMP%] {\n  margin-left: -11px;\n}\n.login-container[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   .socials[_ngcontent-%COMP%]   .social-link[_ngcontent-%COMP%] {\n  margin: 0 10px 0 0;\n  border: 1px solid transparent;\n  border-radius: 12px;\n  width: 40px;\n  height: 40px;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n}\n@media screen and (max-width: 320px) {\n  .login-container[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   .socials[_ngcontent-%COMP%]   .social-link[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n}\n.login-container[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   .socials[_ngcontent-%COMP%]   .social-link[_ngcontent-%COMP%]   nb-icon[_ngcontent-%COMP%] {\n  height: 28px;\n  color: var(--background-alternative-color-2) !important;\n  opacity: 0.8;\n}\n@media screen and (max-width: 1024px) {\n  .login-container[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   .socials[_ngcontent-%COMP%]   .social-link[_ngcontent-%COMP%]   nb-icon[_ngcontent-%COMP%] {\n    height: 24px;\n  }\n}\n@media screen and (max-width: 320px) {\n  .login-container[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   .socials[_ngcontent-%COMP%]   .social-link[_ngcontent-%COMP%]   nb-icon[_ngcontent-%COMP%] {\n    height: 21px;\n  }\n}\n.login-container[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   .socials[_ngcontent-%COMP%]   .social-link[_ngcontent-%COMP%]:hover {\n  border: 1px solid var(--color-primary-500);\n}\n.login-container[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   .socials[_ngcontent-%COMP%]   .social-link[_ngcontent-%COMP%]:hover   *[_ngcontent-%COMP%] {\n  color: var(--color-primary-500) !important;\n}\n.login-container[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   .socials[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  margin-bottom: 25px;\n}\n.login-container[_ngcontent-%COMP%]   .another-action[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  padding-top: 10px;\n  padding-left: 10px;\n  color: #808080;\n  font-family: Inter;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 17px;\n  letter-spacing: 0em;\n  text-align: left;\n}\n@media screen and (max-width: 490px) {\n  .login-container[_ngcontent-%COMP%]   .another-action[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n}\n.login-container[_ngcontent-%COMP%]   .another-action[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--color-primary-500);\n  text-decoration: none;\n  font-weight: bold;\n}\n.login-container[_ngcontent-%COMP%]   .another-action[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n\n.features-wrapper[_ngcontent-%COMP%] {\n  width: 260px;\n}\n.features-wrapper[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding: 38px 15px;\n  background: var(--color-primary-transparent-default);\n  border-radius: var(--border-radius);\n}\n.features-wrapper[_ngcontent-%COMP%]   .card-body.dark[_ngcontent-%COMP%] {\n  background: var(--color-primary-700);\n}\n.features-wrapper[_ngcontent-%COMP%]   .card-body.dark[_ngcontent-%COMP%]   .custom-btn[_ngcontent-%COMP%] {\n  color: white;\n  background: #6e49e8;\n  border: 1px solid #6e49e8;\n}\n.features-wrapper[_ngcontent-%COMP%]   .features-card[_ngcontent-%COMP%] {\n  border: none;\n  background: var(--color-primary-transparent-default);\n  border-radius: var(--border-radius);\n  width: 100%;\n}\n.features-wrapper[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-family: Inter;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 19px;\n  letter-spacing: -0.009em;\n  text-align: left;\n  padding-left: 13px;\n}\n.features-wrapper[_ngcontent-%COMP%]   .sub-title[_ngcontent-%COMP%] {\n  font-family: Inter;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 17px;\n  letter-spacing: 0em;\n  text-align: left;\n  margin-bottom: 20px;\n  padding-left: 13px;\n  color: #7e7e8f;\n}\n.features-wrapper[_ngcontent-%COMP%]   .custom-btn[_ngcontent-%COMP%] {\n  box-shadow: 3px 11px 30px -17px #3366ff;\n  width: auto;\n  padding: 13px 28px;\n  display: inline-flex;\n  justify-content: flex-start;\n  background-color: white;\n  color: var(--color-primary-500);\n  border: 1px solid white;\n  font-family: Inter;\n  font-size: 15px;\n  font-style: normal;\n  font-weight: 700;\n  line-height: 16px;\n  letter-spacing: -0.009em;\n  text-align: left;\n}\n.features-wrapper[_ngcontent-%COMP%]   .custom-btn[_ngcontent-%COMP%]    > nb-icon[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 14px;\n}\n@media screen and (max-width: 1024px) {\n  .features-wrapper[_ngcontent-%COMP%]   .custom-btn[_ngcontent-%COMP%] {\n    padding: 10px 20px;\n  }\n}\n@media screen and (max-width: 790px) {\n  .features-wrapper[_ngcontent-%COMP%]   .custom-btn[_ngcontent-%COMP%] {\n    padding: 15px 25px;\n  }\n}\n.features-wrapper[_ngcontent-%COMP%]   .custom-btn[_ngcontent-%COMP%]:hover {\n  background-color: #fafafa;\n  border: 1px solid #fafafa;\n}\n\n@media screen and (max-width: 790px) {\n  .login-container[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n  }\n  .login-container[_ngcontent-%COMP%]   .another-action[_ngcontent-%COMP%] {\n    margin-top: 0;\n  }\n  .features-wrapper[_ngcontent-%COMP%] {\n    width: 476px;\n    margin-top: 30px;\n  }\n  .features-wrapper[_ngcontent-%COMP%]   .demo-credentials-buttons[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  .features-wrapper[_ngcontent-%COMP%]   .demo-credentials-buttons[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%], \n   .features-wrapper[_ngcontent-%COMP%]   .demo-credentials-buttons[_ngcontent-%COMP%]   .sub-title[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n}\n@media screen and (max-width: 490px) {\n  .login-container[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .login-container[_ngcontent-%COMP%]   .login-wrapper[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 20px 12px;\n  }\n  .login-container[_ngcontent-%COMP%]   .login-wrapper[_ngcontent-%COMP%]   .headings[_ngcontent-%COMP%]   .headings-inner[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .login-container[_ngcontent-%COMP%]   .login-wrapper[_ngcontent-%COMP%]   .headings[_ngcontent-%COMP%]   .headings-inner[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%], \n   .login-container[_ngcontent-%COMP%]   .login-wrapper[_ngcontent-%COMP%]   .headings[_ngcontent-%COMP%]   .headings-inner[_ngcontent-%COMP%]   .sub-title[_ngcontent-%COMP%] {\n    width: 100%;\n    text-align: center;\n  }\n  .login-container[_ngcontent-%COMP%]   .login-wrapper[_ngcontent-%COMP%]   .headings.headings-demo[_ngcontent-%COMP%] {\n    height: 135px;\n    align-items: flex-start;\n  }\n  .login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n    margin-bottom: 35px;\n  }\n  .login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .submit-btn-wrapper[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n  .login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .submit-btn-wrapper[_ngcontent-%COMP%]   .submit-inner-wrapper[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n  .login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .submit-btn-wrapper[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%] {\n    margin-bottom: 0;\n  }\n  .login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-control-group[_ngcontent-%COMP%] {\n    margin-bottom: 13px;\n  }\n  .login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n  }\n  .features-wrapper[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media screen and (max-width: 320px) {\n  .features-wrapper[_ngcontent-%COMP%]   .demo-credentials-buttons[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n    text-align: left;\n  }\n  .features-wrapper[_ngcontent-%COMP%]   .demo-credentials-buttons[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%], \n   .features-wrapper[_ngcontent-%COMP%]   .demo-credentials-buttons[_ngcontent-%COMP%]   .sub-title[_ngcontent-%COMP%] {\n    text-align: left;\n  }\n}\n.hr-div-soft[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n  width: 416px;\n  height: 1px;\n  background: var(--border-alternative-color-4);\n  opacity: 0.05;\n  border-radius: 1px;\n  transform: matrix(1, 0, 0, -1, 0, 0);\n  padding-left: 0;\n  padding-right: 0;\n}\n@media screen and (max-width: 490px) {\n  .hr-div-soft[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n@media screen and (min-width: 491px) {\n  .theme-switch[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n  .input-full-width {\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 0.5px 0.5px 0.5px inset;\n  border-radius: var(--border-radius);\n  background-color: var(--gauzy-input-background) !important;\n  border: unset;\n}\n\n  ngx-register .register-wrapper .input-full-width {\n  background-color: var(--gauzy-input-background) !important;\n}\n\n  ngx-register .register-wrapper.dark .input-full-width {\n  background-color: rgba(255, 255, 255, 0.15) !important;\n}\n\n  .remember-me .text {\n  font-family: Inter;\n  font-size: 13px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: 0em;\n  text-align: left;\n  color: var(--text-primary-color);\n}\n\n  .accordion-item-header-expanded {\n  border-bottom-left-radius: 0 !important;\n  border-bottom-right-radius: 0 !important;\n  border-bottom: 1px solid transparent;\n}"]
      });
    }
  };
  return NgxLoginMagicComponent;
})();
NgxLoginMagicComponent = NgxLoginMagicComponent_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_28__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__/* .UntilDestroy */ .d)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_28__/* .__metadata */ .Sn)("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .UntypedFormBuilder */ .ze, _angular_router__WEBPACK_IMPORTED_MODULE_14__/* .ActivatedRoute */ .nX, _nebular_auth__WEBPACK_IMPORTED_MODULE_1__/* .NbAuthService */ .U_, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .ChangeDetectorRef */ .gRc, _angular_router__WEBPACK_IMPORTED_MODULE_14__/* .Router */ .Ix, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_15__/* .AuthService */ .u, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_16__/* .ErrorHandlingService */ .X, Object])], NgxLoginMagicComponent);


/***/ }),

/***/ 79455:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   t: () => (/* binding */ ImageUploaderComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(55598);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(41598);
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(29087);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52738);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39855);
/* harmony import */ var _gauzy_ui_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(48840);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26024);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(64913);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(71924);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(14572);












let ImageUploaderComponent = /*#__PURE__*/(() => {
  let ImageUploaderComponent = class ImageUploaderComponent {
    get styles() {
      return this._styles;
    }
    set styles(styles) {
      this._styles = styles;
    }
    get folder() {
      return this._folder;
    }
    set folder(value) {
      this._folder = value;
    }
    constructor(store) {
      this.store = store;
      /*
       * Getter & Setter for dynamic file uploader style element
       */
      this._styles = {
        width: '100%',
        opacity: '0',
        position: 'absolute',
        zIndex: 3,
        cursor: 'pointer'
      };
      /*
       * Getter & Setter for dynamic image upload folder
       */
      this._folder = 'profile_pictures';
      this.changeHoverState = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .bkB();
      this.uploadedImageAsset = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .bkB();
      this.uploadImageAssetError = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .bkB();
    }
    ngOnInit() {
      this.store.selectedOrganization$.pipe((0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .distinctUntilChange */ .nI)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .filter */ .p)(organization => !!organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .tap */ .M)(organization => this.organization = organization), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .untilDestroyed */ .s)(this)).subscribe();
      this.store.user$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .filter */ .p)(user => !!user), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .tap */ .M)(user => this.user = user), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .tap */ .M)(() => this._loadUploaderSettings()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .untilDestroyed */ .s)(this)).subscribe();
    }
    ngAfterViewInit() {
      if (!this.uploader) {
        return;
      }
      this.uploader.onAfterAddingFile = file => {
        file.withCredentials = false;
      };
      this.uploader.onSuccessItem = (item, response, status) => {
        try {
          if (response) {
            const image = JSON.parse(response);
            this.uploadedImageAsset.emit(image);
          }
        } catch (error) {
          console.log('Error while uploaded image url', error);
        }
      };
      this.uploader.onErrorItem = (item, response, status) => {
        try {
          if (response) {
            const error = JSON.parse(response);
            this.uploadImageAssetError.emit(error);
          }
        } catch (error) {
          console.log('Error while uploaded image url error', error);
        }
      };
    }
    /**
     * Image asset upload handler
     */
    imageUploadHandler() {
      if (this.uploader.queue.length > 0) {
        this.uploader.queue[this.uploader.queue.length - 1].upload();
      }
    }
    /**
     * Load settings for the file uploader, including headers and additional form data.
     *
     * @returns void
     */
    _loadUploaderSettings() {
      if (!this.user) {
        return;
      }
      const token = this.store.token;
      const tenantId = this.user.tenantId;
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
        headers.push({
          name: 'Organization-Id',
          value: `${this.organization.id}`
        });
      }
      const uploaderOptions = {
        url: _gauzy_ui_config__WEBPACK_IMPORTED_MODULE_5__/* .environment */ .c.API_BASE_URL + `${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_6__/* .API_PREFIX */ .m4}/image-assets/upload/${this.folder}`,
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
      this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_7__/* .FileUploader */ .l0(uploaderOptions);
      // Adding additional form data
      this.uploader.onBuildItemForm = (fileItem, form) => {
        if (!!this.store.user.tenantId) {
          form.append('tenantId', tenantId);
        }
        if (!!this.organization) {
          form.append('organizationId', this.organization.id);
        }
      };
    }
    static {
      this.ɵfac = function ImageUploaderComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || ImageUploaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_8__/* .Store */ .il));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: ImageUploaderComponent,
        selectors: [["ngx-image-uploader"]],
        inputs: {
          styles: "styles",
          folder: "folder"
        },
        outputs: {
          changeHoverState: "changeHoverState",
          uploadedImageAsset: "uploadedImageAsset",
          uploadImageAssetError: "uploadImageAssetError"
        },
        standalone: false,
        decls: 1,
        vars: 2,
        consts: [["type", "file", "accept", "image/*", "ng2FileSelect", "", 3, "change", "mouseenter", "mouseleave", "ngStyle", "uploader"]],
        template: function ImageUploaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "input", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("change", function ImageUploaderComponent_Template_input_change_0_listener() {
              return ctx.imageUploadHandler();
            })("mouseenter", function ImageUploaderComponent_Template_input_mouseenter_0_listener() {
              return ctx.changeHoverState.emit(true);
            })("mouseleave", function ImageUploaderComponent_Template_input_mouseleave_0_listener() {
              return ctx.changeHoverState.emit(false);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngStyle", ctx.styles)("uploader", ctx.uploader);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__/* .NgStyle */ .B3, ng2_file_upload__WEBPACK_IMPORTED_MODULE_7__/* .FileSelectDirective */ .UJ],
        styles: ["input[_ngcontent-%COMP%] {\n  height: 100% !important;\n}"]
      });
    }
  };
  ImageUploaderComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_10__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .UntilDestroy */ .d)(), (0,tslib__WEBPACK_IMPORTED_MODULE_10__/* .__metadata */ .Sn)("design:paramtypes", [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_8__/* .Store */ .il])], ImageUploaderComponent);
  return ImageUploaderComponent;
})();


/***/ }),

/***/ 81557:
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

/***/ 82106:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ firstValueFrom)
/* harmony export */ });
/* harmony import */ var _util_EmptyError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5777);
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86259);


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

/***/ 82115:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   y: () => (/* binding */ isPromise)
/* harmony export */ });
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46908);

function isPromise(value) {
  return (0,_isFunction__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .T)(value === null || value === void 0 ? void 0 : value.then);
}
//# sourceMappingURL=isPromise.js.map

/***/ }),

/***/ 82153:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: () => (/* binding */ operate)
/* harmony export */ });
/* unused harmony export hasLift */
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46908);

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

/***/ 82167:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   s: () => (/* binding */ NgxRegisterSideFeaturesComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(27075);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12043);
/* harmony import */ var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(33977);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(87716);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14572);
/* harmony import */ var _register_side_single_feature_register_side_single_feature_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(38145);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(19223);









function NgxRegisterSideFeaturesComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "ngx-register-side-single-feature", 4)(2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const feature_r1 = ctx.$implicit;
    const last_r2 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("feature", feature_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵclassMap"] */ .HbH(last_r2 ? "hidden" : "");
  }
}
let NgxRegisterSideFeaturesComponent = /*#__PURE__*/(() => {
  let NgxRegisterSideFeaturesComponent = class NgxRegisterSideFeaturesComponent {
    constructor(_changelogService) {
      this._changelogService = _changelogService;
      this.subject$ = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_1__/* .Subject */ .B();
      this.items$ = this._changelogService.changelogs$;
    }
    ngOnInit() {
      this._changelogService.getAll({
        isFeature: 1
      }).pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__/* .untilDestroyed */ .s)(this)).subscribe();
    }
    static {
      this.ɵfac = function NgxRegisterSideFeaturesComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || NgxRegisterSideFeaturesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_3__/* .ChangelogService */ .m));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: NgxRegisterSideFeaturesComponent,
        selectors: [["ngx-register-side-features"]],
        standalone: false,
        decls: 6,
        vars: 6,
        consts: [[1, "main-section"], [1, "main-header"], ["class", "feature-wrapper", 4, "ngFor", "ngForOf"], [1, "feature-wrapper"], [3, "feature"], [1, "small-hr-div"]],
        template: function NgxRegisterSideFeaturesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "section", 0)(1, "h4", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(3, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(4, NgxRegisterSideFeaturesComponent_div_4_Template, 3, 3, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(5, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(3, 2, "CHANGELOG_MENU.GAUZY_FEATURES"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(5, 4, ctx.items$));
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__/* .NgForOf */ .Sq, _register_side_single_feature_register_side_single_feature_component__WEBPACK_IMPORTED_MODULE_5__/* .NgxRegisterSideSingleFeatureComponent */ .t, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__/* .TranslatePipe */ .D9, _angular_common__WEBPACK_IMPORTED_MODULE_4__/* .AsyncPipe */ .Jj],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.card[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-1);\n}\n\n.main-section[_ngcontent-%COMP%] {\n  background: linear-gradient(to bottom, var(--color-primary-400), var(--color-primary-600));\n  width: 100%;\n  height: 100%;\n  border-radius: 12px;\n  padding: 20px 20px 40px;\n}\n\n.main-header[_ngcontent-%COMP%] {\n  color: white;\n  font-family: Inter;\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 22px;\n  letter-spacing: -0.009em;\n  text-align: left;\n  margin-bottom: 39px;\n}\n\n.feature-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.small-hr-div[_ngcontent-%COMP%] {\n  width: 220px;\n  height: 1px;\n  background: rgba(255, 255, 255, 0.15);\n  border-radius: 1px;\n  transform: matrix(1, 0, 0, -1, 0, 0);\n  margin-bottom: 20px;\n  margin-top: 20px;\n}\n\n.hidden[_ngcontent-%COMP%] {\n  display: none;\n}\n\n@media screen and (max-width: 790px) {\n  .small-hr-div[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}"]
      });
    }
  };
  NgxRegisterSideFeaturesComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__/* .UntilDestroy */ .d)({
    checkProperties: true
  }), (0,tslib__WEBPACK_IMPORTED_MODULE_7__/* .__metadata */ .Sn)("design:paramtypes", [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_3__/* .ChangelogService */ .m])], NgxRegisterSideFeaturesComponent);
  return NgxRegisterSideFeaturesComponent;
})();


/***/ }),

/***/ 82813:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   y: () => (/* binding */ NgxLoginComponent)
/* harmony export */ });
/* harmony import */ var _nebular_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17523);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13271);
/* harmony import */ var _gauzy_ui_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(48840);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(84059);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(32833);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9620);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(908);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(49338);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(56383);
/* harmony import */ var _ui_core_theme_src_lib_components_theme_sidebar_theme_settings_components_theme_selector_switch_theme_switch_theme_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(10360);
/* harmony import */ var _ui_core_theme_src_lib_components_gauzy_logo_gauzy_logo_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(85662);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(14572);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(10936);
/* harmony import */ var _ui_core_shared_src_lib_directives_no_space_edges_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(97040);
/* harmony import */ var _whats_new_whats_new_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(22569);
/* harmony import */ var _social_links_social_links_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(51265);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(19223);























const _c0 = ["form"];
const _c1 = (a0, a1) => ({
  minLength: a0,
  maxLength: a1
});
function NgxLoginComponent_nb_accordion_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-accordion", 43)(1, "nb-accordion-item", 44)(2, "nb-accordion-item-header", 45)(3, "div", 46)(4, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(9, "nb-accordion-item-body", 48)(10, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(13, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(14, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(17, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(20, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(21, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(23, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(24, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(25, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(27, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(28, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(30, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(31, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(32, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(34, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(35, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(36, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(38, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(39, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(41, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(6, 11, "LOGIN_PAGE.DEMO.DEMO_TITLE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(8, 13, "LOGIN_PAGE.DEMO.CREDENTIALS_TITLE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(12, 15, "LOGIN_PAGE.DEMO.SUPER_ADMIN_TITLE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI("", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(16, 17, "LOGIN_PAGE.DEMO.LABELS.EMAIL"), " admin@ever.co");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI("", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(19, 19, "LOGIN_PAGE.DEMO.LABELS.PASSWORD"), " admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(23, 21, "LOGIN_PAGE.DEMO.ADMIN_TITLE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI("", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(27, 23, "LOGIN_PAGE.DEMO.LABELS.EMAIL"), " local.admin@ever.co");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI("", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(30, 25, "LOGIN_PAGE.DEMO.LABELS.PASSWORD"), " admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(34, 27, "LOGIN_PAGE.DEMO.EMPLOYEE_TITLE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI("", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(38, 29, "LOGIN_PAGE.DEMO.LABELS.EMAIL"), " employee@ever.co");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI("", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(41, 31, "LOGIN_PAGE.DEMO.LABELS.PASSWORD"), " 123456");
  }
}
function NgxLoginComponent_nb_alert_14_li_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "li", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const error_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", error_r2, " ");
  }
}
function NgxLoginComponent_nb_alert_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-alert", 49)(1, "p", 50)(2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(3, "Oh snap!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(4, "ul", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(5, NgxLoginComponent_nb_alert_14_li_5_Template, 2, 1, "li", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx_r2.errors);
  }
}
function NgxLoginComponent_nb_alert_15_li_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "li", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const message_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", message_r4, " ");
  }
}
function NgxLoginComponent_nb_alert_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-alert", 54)(1, "p", 50)(2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(3, "Hooray!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(4, "ul", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(5, NgxLoginComponent_nb_alert_15_li_5_Template, 2, 1, "li", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx_r2.messages);
  }
}
function NgxLoginComponent_ng_container_26_p_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "p", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(2, 1, "LOGIN_PAGE.VALIDATION.EMAIL_REQUIRED"), " ");
  }
}
function NgxLoginComponent_ng_container_26_p_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "p", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(2, 1, "LOGIN_PAGE.VALIDATION.EMAIL_REAL_REQUIRED"), " ");
  }
}
function NgxLoginComponent_ng_container_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, NgxLoginComponent_ng_container_26_p_1_Template, 3, 3, "p", 55)(2, NgxLoginComponent_ng_container_26_p_2_Template, 3, 3, "p", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    const email_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", email_r5.errors == null ? null : email_r5.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", email_r5.errors == null ? null : email_r5.errors.pattern);
  }
}
function NgxLoginComponent_ng_container_38_p_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "p", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(2, 1, "LOGIN_PAGE.VALIDATION.PASSWORD_NO_SPACE_EDGES"), " ");
  }
}
function NgxLoginComponent_ng_container_38_p_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "p", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(2, 1, "LOGIN_PAGE.VALIDATION.PASSWORD_REQUIRED"), " ");
  }
}
function NgxLoginComponent_ng_container_38_p_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "p", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind2"] */ .i5U(2, 1, "LOGIN_PAGE.VALIDATION.PASSWORD_SHOULD_CONTAIN", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction2"] */ .l_i(4, _c1, ctx_r2.getConfigValue("forms.validation.password.minLength"), ctx_r2.getConfigValue("forms.validation.password.maxLength"))), " ");
  }
}
function NgxLoginComponent_ng_container_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, NgxLoginComponent_ng_container_38_p_1_Template, 3, 3, "p", 55)(2, NgxLoginComponent_ng_container_38_p_2_Template, 3, 3, "p", 55)(3, NgxLoginComponent_ng_container_38_p_3_Template, 3, 7, "p", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    const password_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", password_r6.errors == null ? null : password_r6.errors.pattern);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", password_r6.errors == null ? null : password_r6.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", (password_r6.errors == null ? null : password_r6.errors.minlength) || (password_r6.errors == null ? null : password_r6.errors.maxlength));
  }
}
function NgxLoginComponent_nb_checkbox_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-checkbox", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayListener"] */ .mxI("ngModelChange", function NgxLoginComponent_nb_checkbox_40_Template_nb_checkbox_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r7);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayBindingSet"] */ .DH7(ctx_r2.user.rememberMe, $event) || (ctx_r2.user.rememberMe = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayProperty"] */ .R50("ngModel", ctx_r2.user.rememberMe);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(2, 2, "LOGIN_PAGE.REMEMBER_ME_TITLE"));
  }
}
function NgxLoginComponent_ng_container_73_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(1, "div", 58)(2, "nb-card", 59)(3, "nb-card-body", 60)(4, "h6", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(7, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(10, "button", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function NgxLoginComponent_ng_container_73_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r8);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r2.autoLogin(ctx_r2.RolesEnum.SUPER_ADMIN));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(11, "nb-icon", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(14, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(15, "button", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function NgxLoginComponent_ng_container_73_Template_button_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r8);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r2.autoLogin(ctx_r2.RolesEnum.ADMIN));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(18, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(19, "button", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function NgxLoginComponent_ng_container_73_Template_button_click_19_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r8);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r2.autoLogin(ctx_r2.RolesEnum.EMPLOYEE));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(21, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(6, 5, "LOGIN_PAGE.DEMO.TITLE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(9, 7, "LOGIN_PAGE.DEMO.SUB_TITLE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(13, 9, "BUTTONS.SUPER_ADMIN_DEMO"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(17, 11, "BUTTONS.ADMIN_DEMO"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(21, 13, "BUTTONS.EMPLOYEE_DEMO"), " ");
  }
}
function NgxLoginComponent_ng_template_74_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "ngx-whats-new");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
}
let NgxLoginComponent = /*#__PURE__*/(() => {
  class NgxLoginComponent extends _nebular_auth__WEBPACK_IMPORTED_MODULE_1__/* .NbLoginComponent */ .fB {
    constructor(cookieService, nbAuthService, cdr, router, electronService, el, options) {
      super(nbAuthService, options, cdr, router);
      this.cookieService = cookieService;
      this.nbAuthService = nbAuthService;
      this.cdr = cdr;
      this.router = router;
      this.electronService = electronService;
      this.el = el;
      this.isShown = false;
      this.RolesEnum = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__/* .RolesEnum */ .$;
      this.isDemo = _gauzy_ui_config__WEBPACK_IMPORTED_MODULE_3__/* .environment */ .c.DEMO;
      this.showPassword = false;
      this.passwordNoSpaceEdges = _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_4__/* .patterns */ .q.passwordNoSpaceEdges;
    }
    ngOnInit() {
      // -- to not block the scroll after logout
      const body = this.el.nativeElement.closest('body');
      body.removeAttribute('style');
      this.checkRememberdMe();
      this.autoFillCredential();
    }
    /**
     * Implemented Rememberd Me Feature
     */
    checkRememberdMe() {
      if (this.cookieService.check('rememberMe')) {
        const {
          email,
          rememberMe
        } = this.cookieService.getAll();
        this.user.email = email;
        this.user.rememberMe = rememberMe;
      }
    }
    collapseDemo() {
      if (this.isDemo) {
        this.isShown = !this.isShown;
      }
    }
    /**
     * Autofill Super Admin Credential By Default
     */
    autoFillCredential() {
      if (this.isDemo) {
        this.user.email = _gauzy_ui_config__WEBPACK_IMPORTED_MODULE_3__/* .environment */ .c.DEMO_SUPER_ADMIN_EMAIL;
        this.user.password = _gauzy_ui_config__WEBPACK_IMPORTED_MODULE_3__/* .environment */ .c.DEMO_SUPER_ADMIN_PASSWORD;
      }
    }
    /**
     * Automatic Login For Demo Server
     *
     * @param role
     */
    autoLogin(role) {
      if (this.isDemo) {
        switch (role) {
          case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__/* .RolesEnum */ .$.SUPER_ADMIN:
            this.autoFillCredential();
            break;
          case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__/* .RolesEnum */ .$.ADMIN:
            this.user.email = _gauzy_ui_config__WEBPACK_IMPORTED_MODULE_3__/* .environment */ .c.DEMO_ADMIN_EMAIL;
            this.user.password = _gauzy_ui_config__WEBPACK_IMPORTED_MODULE_3__/* .environment */ .c.DEMO_ADMIN_PASSWORD;
            break;
          case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__/* .RolesEnum */ .$.EMPLOYEE:
            this.user.email = _gauzy_ui_config__WEBPACK_IMPORTED_MODULE_3__/* .environment */ .c.DEMO_EMPLOYEE_EMAIL;
            this.user.password = _gauzy_ui_config__WEBPACK_IMPORTED_MODULE_3__/* .environment */ .c.DEMO_EMPLOYEE_PASSWORD;
            break;
          default:
            break;
        }
        this.form.ngSubmit.emit();
      }
    }
    static {
      this.ɵfac = function NgxLoginComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || NgxLoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__/* .CookieService */ .O), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_nebular_auth__WEBPACK_IMPORTED_MODULE_1__/* .NbAuthService */ .U_), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* .ChangeDetectorRef */ .gRc), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_router__WEBPACK_IMPORTED_MODULE_6__/* .Router */ .Ix), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_7__/* .ElectronService */ .Y), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* .ElementRef */ .aKT), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_nebular_auth__WEBPACK_IMPORTED_MODULE_1__/* .NB_AUTH_OPTIONS */ .$$));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: NgxLoginComponent,
        selectors: [["ngx-login"]],
        viewQuery: function NgxLoginComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵviewQuery"] */ .GBs(_c0, 5);
          }
          if (rf & 2) {
            let _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵqueryRefresh"] */ .mGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵloadQuery"] */ .lsd()) && (ctx.form = _t.first);
          }
        },
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
        decls: 76,
        vars: 71,
        consts: [["form", "ngForm"], ["email", "ngModel"], ["password", "ngModel"], ["whatsNew", ""], [1, "login-container"], [1, "login-wrapper"], [1, "svg-wrapper"], [1, "ever-logo-svg", 3, "isAccordion"], [1, "theme-switch", 3, "hasText"], [1, "headings"], [1, "headings-inner"], ["id", "title", 1, "title"], [1, "sub-title"], ["class", "demo-credentials-select", 4, "ngIf"], ["outline", "danger", "role", "alert", 4, "ngIf"], ["outline", "success", "role", "alert", 4, "ngIf"], [1, "hr-div-strong"], ["aria-labelledby", "title", 3, "ngSubmit"], [1, "form-control-group"], ["for", "input-email", 1, "label"], ["nbInput", "", "fullWidth", "", "name", "email", "noSpaceEdges", "", "id", "input-email", "pattern", ".+@.+\\..+", "fieldSize", "large", "autofocus", "", "autocomplete", "off", 3, "ngModelChange", "ngModel", "placeholder", "status", "required"], [4, "ngIf"], [1, "label-with-link"], ["for", "input-password", 1, "label"], ["nbInput", "", "fullWidth", "", "name", "password", "id", "input-password", "fieldSize", "large", "autocomplete", "off", 3, "ngModelChange", "ngModel", "pattern", "type", "placeholder", "status", "required", "minlength", "maxlength"], ["nbSuffix", "", "nbButton", "", "size", "small", "ghost", "", 1, "show-password-icon", 3, "click"], ["pack", "eva", 3, "icon"], [1, "form-control-group", "accept-group"], ["name", "rememberMe", "class", "remember-me", 3, "ngModel", "ngModelChange", 4, "ngIf"], [1, "submit-btn-wrapper"], ["routerLink", "/auth/request-password", 1, "forgot-password", "caption-2", "forgot-password-big"], [1, "submit-inner-wrapper"], ["routerLink", "/auth/request-password", 1, "forgot-password", "caption-2", "forgot-password-small"], ["type", "submit", "nbButton", "", "size", "small", 1, "submit-btn", 3, "disabled"], [1, "login-magic-wrapper"], ["routerLink", "/auth/login-magic"], [1, "hr-div-soft"], ["aria-label", "Sign In Workspace", 1, "another-action"], ["routerLink", "/auth/login-workspace", 1, "text-link"], ["aria-label", "Register", 1, "another-action"], ["routerLink", "/auth/register", 1, "text-link"], [1, "features-wrapper"], [4, "ngIf", "ngIfElse"], [1, "demo-credentials-select"], [1, "demo-credentials-select-item"], [1, "demo-credentials-header"], [1, "demo-credentials-head-text"], [1, "demo-text-span"], [1, "demo-credentials-body"], ["outline", "danger", "role", "alert"], [1, "alert-title"], [1, "alert-message-list"], ["class", "alert-message", 4, "ngFor", "ngForOf"], [1, "alert-message"], ["outline", "success", "role", "alert"], ["class", "caption status-danger", 4, "ngIf"], [1, "caption", "status-danger"], ["name", "rememberMe", 1, "remember-me", 3, "ngModelChange", "ngModel"], [1, "demo-credentials-buttons"], [1, "features-card"], [1, "card-body"], [1, "title"], ["nbButton", "", "fullWidth", "", "size", "small", 1, "mt-3", "custom-btn", 3, "click"], ["icon", "star"]],
        template: function NgxLoginComponent_Template(rf, ctx) {
          if (rf & 1) {
            const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "section", 4)(1, "div", 5)(2, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(3, "ngx-gauzy-logo", 7)(4, "gauzy-switch-theme", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(5, "div", 9)(6, "div", 10)(7, "h2", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(9, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(10, "p", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(12, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(13, NgxLoginComponent_nb_accordion_13_Template, 42, 33, "nb-accordion", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(14, NgxLoginComponent_nb_alert_14_Template, 6, 1, "nb-alert", 14)(15, NgxLoginComponent_nb_alert_15_Template, 6, 1, "nb-alert", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(16, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(17, "form", 17, 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("ngSubmit", function NgxLoginComponent_Template_form_ngSubmit_17_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx.login());
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(19, "div", 18)(20, "label", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(22, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(23, "input", 20, 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(25, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayListener"] */ .mxI("ngModelChange", function NgxLoginComponent_Template_input_ngModelChange_23_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayBindingSet"] */ .DH7(ctx.user.email, $event) || (ctx.user.email = $event);
              return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj($event);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(26, NgxLoginComponent_ng_container_26_Template, 3, 2, "ng-container", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(27, "div", 18)(28, "span", 22)(29, "label", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(31, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(32, "nb-form-field")(33, "input", 24, 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(35, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayListener"] */ .mxI("ngModelChange", function NgxLoginComponent_Template_input_ngModelChange_33_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayBindingSet"] */ .DH7(ctx.user.password, $event) || (ctx.user.password = $event);
              return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj($event);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(36, "a", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function NgxLoginComponent_Template_a_click_36_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx.showPassword = !ctx.showPassword);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(37, "nb-icon", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(38, NgxLoginComponent_ng_container_38_Template, 4, 3, "ng-container", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(39, "div", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(40, NgxLoginComponent_nb_checkbox_40_Template, 3, 4, "nb-checkbox", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(41, "div", 29)(42, "a", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(43);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(44, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(45, "div", 31)(46, "a", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(47);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(48, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(49, "button", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(50);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(51, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(52, "div", 34)(53, "a", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(54);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(55, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(56, "div", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(57, "section");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(58, "ngx-social-links");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(59, "div", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(60, "section", 37);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(61);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(62, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(63, "a", 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(64);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(65, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(66, "section", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(67);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(68, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(69, "a", 40);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(70);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(71, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(72, "div", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(73, NgxLoginComponent_ng_container_73_Template, 22, 15, "ng-container", 42)(74, NgxLoginComponent_ng_template_74_Template, 2, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplateRefExtractor"] */ .C5r);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
          }
          if (rf & 2) {
            const form_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(18);
            const email_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(24);
            const password_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(34);
            const whatsNew_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(75);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("isAccordion", false);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("hasText", false);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵclassMap"] */ .HbH(ctx.isDemo ? "headings-demo" : "");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(9, 43, "LOGIN_PAGE.TITLE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(12, 45, "LOGIN_PAGE.SUB_TITLE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", !(ctx.electronService == null ? null : ctx.electronService.isElectron) && ctx.isDemo);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.showMessages.error && (ctx.errors == null ? null : ctx.errors.length) && !ctx.submitted);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.showMessages.success && (ctx.messages == null ? null : ctx.messages.length) && !ctx.submitted);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(22, 47, "LOGIN_PAGE.LABELS.EMAIL"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayProperty"] */ .R50("ngModel", ctx.user.email);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(25, 49, "LOGIN_PAGE.PLACEHOLDERS.EMAIL"))("status", email_r5.dirty ? email_r5.invalid ? "danger" : "success" : "basic")("required", ctx.getConfigValue("forms.validation.email.required"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵattribute"] */ .BMQ("aria-invalid", email_r5.invalid && email_r5.touched ? true : null);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", email_r5.invalid && email_r5.touched);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(31, 51, "LOGIN_PAGE.LABELS.PASSWORD"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayProperty"] */ .R50("ngModel", ctx.user.password);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("pattern", ctx.passwordNoSpaceEdges)("type", ctx.showPassword ? "text" : "password")("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(35, 53, "LOGIN_PAGE.PLACEHOLDERS.PASSWORD"))("status", password_r6.dirty ? password_r6.invalid ? "danger" : "success" : "basic")("required", ctx.getConfigValue("forms.validation.password.required"))("minlength", ctx.getConfigValue("forms.validation.password.minLength"))("maxlength", ctx.getConfigValue("forms.validation.password.maxLength"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵattribute"] */ .BMQ("aria-invalid", password_r6.invalid && password_r6.touched ? true : null);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("icon", ctx.showPassword ? "eye-outline" : "eye-off-outline");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵattribute"] */ .BMQ("aria-label", ctx.showPassword ? "hide password" : "show password");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", password_r6.invalid && password_r6.touched);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.rememberMe);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(44, 55, "LOGIN_PAGE.FORGOT_PASSWORD_TITLE"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(48, 57, "LOGIN_PAGE.FORGOT_PASSWORD_TITLE"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵclassProp"] */ .AVh("btn-pulse", ctx.submitted);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("disabled", ctx.submitted || !form_r9.valid);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(51, 59, "BUTTONS.LOGIN"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(55, 61, "LOGIN_PAGE.LOGIN_MAGIC.TITLE"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(62, 63, "WORKSPACES.UNKNOWN_WORKSPACE"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(65, 65, "WORKSPACES.FIND_WORKSPACE"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(68, 67, "LOGIN_PAGE.DO_NOT_HAVE_ACCOUNT_TITLE"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(71, 69, "BUTTONS.REGISTER"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", !(ctx.electronService == null ? null : ctx.electronService.isElectron) && ctx.isDemo)("ngIfElse", whatsNew_r10);
          }
        },
        dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_8__/* .RouterLink */ .Wk, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbAccordionComponent */ .Ul7, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbAccordionItemComponent */ .vx8, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbAccordionItemHeaderComponent */ .Ig3, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbAccordionItemBodyComponent */ .LHJ, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbAlertComponent */ .EVe, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbButtonComponent */ .YP2, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbCardComponent */ .SrT, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbCardBodyComponent */ .KH5, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbCheckboxComponent */ .DMy, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbFormFieldComponent */ .u_9, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbSuffixDirective */ .zb0, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbIconComponent */ .tHu, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbInputDirective */ .i6h, _ui_core_theme_src_lib_components_theme_sidebar_theme_settings_components_theme_selector_switch_theme_switch_theme_component__WEBPACK_IMPORTED_MODULE_10__/* .SwitchThemeComponent */ .z, _ui_core_theme_src_lib_components_gauzy_logo_gauzy_logo_component__WEBPACK_IMPORTED_MODULE_11__/* .GauzyLogoComponent */ .p, _angular_common__WEBPACK_IMPORTED_MODULE_12__/* .NgForOf */ .Sq, _angular_common__WEBPACK_IMPORTED_MODULE_12__/* .NgIf */ .bT, _angular_forms__WEBPACK_IMPORTED_MODULE_13__/* ["ɵNgNoValidate"] */ .qT, _angular_forms__WEBPACK_IMPORTED_MODULE_13__/* .DefaultValueAccessor */ .me, _angular_forms__WEBPACK_IMPORTED_MODULE_13__/* .NgControlStatus */ .BC, _angular_forms__WEBPACK_IMPORTED_MODULE_13__/* .NgControlStatusGroup */ .cb, _angular_forms__WEBPACK_IMPORTED_MODULE_13__/* .RequiredValidator */ .YS, _angular_forms__WEBPACK_IMPORTED_MODULE_13__/* .MinLengthValidator */ .xh, _angular_forms__WEBPACK_IMPORTED_MODULE_13__/* .MaxLengthValidator */ .tU, _angular_forms__WEBPACK_IMPORTED_MODULE_13__/* .PatternValidator */ .R_, _angular_forms__WEBPACK_IMPORTED_MODULE_13__/* .NgModel */ .vS, _angular_forms__WEBPACK_IMPORTED_MODULE_13__/* .NgForm */ .cV, _ui_core_shared_src_lib_directives_no_space_edges_directive__WEBPACK_IMPORTED_MODULE_14__/* .NoSpaceEdgesDirective */ .h, _whats_new_whats_new_component__WEBPACK_IMPORTED_MODULE_15__/* .NgxWhatsNewComponent */ .Q, _social_links_social_links_component__WEBPACK_IMPORTED_MODULE_16__/* .SocialLinksComponent */ .u, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__/* .TranslatePipe */ .D9],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.card[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-1);\n}\n\n.login-container[_ngcontent-%COMP%] {\n  width: 765px;\n  position: relative;\n  display: flex;\n  justify-content: space-between;\n}\n.login-container[_ngcontent-%COMP%]   .login-wrapper[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-2);\n  border-radius: var(--border-radius);\n  box-sizing: border-box;\n  padding: 30px;\n  width: 476px;\n  height: 100%;\n}\n.login-container[_ngcontent-%COMP%]   .login-wrapper[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  padding-left: 15px;\n  padding-right: 15px;\n}\n.login-container[_ngcontent-%COMP%]   .login-wrapper[_ngcontent-%COMP%]   .svg-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.login-container[_ngcontent-%COMP%]   .login-wrapper[_ngcontent-%COMP%]   .svg-wrapper[_ngcontent-%COMP%]   .ever-logo-svg[_ngcontent-%COMP%] {\n  margin-bottom: 57px;\n}\n.login-container[_ngcontent-%COMP%]   .login-wrapper[_ngcontent-%COMP%]   .headings[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  position: relative;\n}\n.login-container[_ngcontent-%COMP%]   .login-wrapper[_ngcontent-%COMP%]   .headings[_ngcontent-%COMP%]   .headings-inner[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-family: Inter;\n  font-size: 24px;\n  font-style: normal;\n  font-weight: 700;\n  line-height: 30px;\n  letter-spacing: 0em;\n  margin-bottom: 18px;\n  text-align: start;\n}\n.login-container[_ngcontent-%COMP%]   .login-wrapper[_ngcontent-%COMP%]   .headings[_ngcontent-%COMP%]   .headings-inner[_ngcontent-%COMP%]   .sub-title[_ngcontent-%COMP%] {\n  font-family: Inter;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 11px;\n  letter-spacing: 0em;\n  margin-bottom: 26px;\n  text-align: start;\n}\n.login-container[_ngcontent-%COMP%]   .login-wrapper[_ngcontent-%COMP%]   .hr-div-strong[_ngcontent-%COMP%] {\n  width: 416px;\n  height: 1px;\n  border-radius: 1px;\n  transform: matrix(1, 0, 0, -1, 0, 0);\n  background: var(--border-alternative-color-4);\n  opacity: 0.15;\n  margin-bottom: 29px;\n  padding-left: 0;\n  padding-right: 0;\n}\n@media screen and (max-width: 490px) {\n  .login-container[_ngcontent-%COMP%]   .login-wrapper[_ngcontent-%COMP%]   .hr-div-strong[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.login-container[_ngcontent-%COMP%]   .login-wrapper[_ngcontent-%COMP%]   .hr-div-soft[_ngcontent-%COMP%] {\n  width: 416px;\n  height: 1px;\n  background: var(--border-alternative-color-4);\n  opacity: 0.05;\n  border-radius: 1px;\n  transform: matrix(1, 0, 0, -1, 0, 0);\n  padding-left: 0;\n  padding-right: 0;\n}\n@media screen and (max-width: 490px) {\n  .login-container[_ngcontent-%COMP%]   .login-wrapper[_ngcontent-%COMP%]   .hr-div-soft[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  margin-top: 29px;\n  margin-bottom: 42px;\n}\n.login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .submit-btn-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .submit-btn-wrapper[_ngcontent-%COMP%]   .forgot-password[_ngcontent-%COMP%] {\n  text-decoration-line: underline;\n  margin-bottom: 0;\n  font-family: Inter;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 17px;\n  letter-spacing: -0.01em;\n  text-align: left;\n}\n@media screen and (max-width: 490px) {\n  .login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .submit-btn-wrapper[_ngcontent-%COMP%]   .forgot-password[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .submit-btn-wrapper[_ngcontent-%COMP%]   .forgot-password[_ngcontent-%COMP%]:hover {\n  color: #fa754e;\n}\n.login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .submit-btn-wrapper[_ngcontent-%COMP%]   .forgot-password-big[_ngcontent-%COMP%] {\n  display: block;\n}\n@media screen and (max-width: 490px) {\n  .login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .submit-btn-wrapper[_ngcontent-%COMP%]   .forgot-password-big[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .submit-btn-wrapper[_ngcontent-%COMP%]   .forgot-password-small[_ngcontent-%COMP%] {\n  display: none;\n}\n.login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .submit-btn-wrapper[_ngcontent-%COMP%]   .submit-inner-wrapper[_ngcontent-%COMP%] {\n  display: inline-flex;\n  flex-direction: column;\n  align-items: center;\n}\n.login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .submit-btn-wrapper[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%] {\n  padding: 13px 39px;\n  box-shadow: 0px 19px 15px -14px rgba(0, 0, 0, 0.22);\n  font-family: Inter;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 700;\n  line-height: 16px;\n  letter-spacing: -0.009em;\n  text-align: left;\n  padding: 13px 59px;\n}\n.login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .submit-btn-wrapper[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%]:enabled {\n  background-color: #fa754e;\n  border: 1px solid #fa754e;\n  color: #ffffff;\n}\n.login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .accept-group[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n@media screen and (max-width: 490px) {\n  .login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .accept-group[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n  }\n}\n.login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .login-magic-wrapper[_ngcontent-%COMP%] {\n  margin: 3rem 0 0 0;\n}\n.login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .login-magic-wrapper[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.login-container[_ngcontent-%COMP%]   .another-action[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  padding-top: 10px;\n  padding-left: 10px;\n  color: #808080;\n  font-family: Inter;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 17px;\n  letter-spacing: 0em;\n  text-align: left;\n}\n@media screen and (max-width: 490px) {\n  .login-container[_ngcontent-%COMP%]   .another-action[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n}\n.login-container[_ngcontent-%COMP%]   .another-action[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--color-primary-500);\n  text-decoration: none;\n  font-weight: bold;\n}\n.login-container[_ngcontent-%COMP%]   .another-action[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n\n.features-wrapper[_ngcontent-%COMP%] {\n  width: 260px;\n}\n.features-wrapper[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding: 38px 15px;\n  background: var(--color-primary-transparent-default);\n  border-radius: var(--border-radius);\n}\n.features-wrapper[_ngcontent-%COMP%]   .card-body.dark[_ngcontent-%COMP%] {\n  background: var(--color-primary-700);\n}\n.features-wrapper[_ngcontent-%COMP%]   .card-body.dark[_ngcontent-%COMP%]   .custom-btn[_ngcontent-%COMP%] {\n  color: white;\n  background: #6e49e8;\n  border: 1px solid #6e49e8;\n}\n.features-wrapper[_ngcontent-%COMP%]   .features-card[_ngcontent-%COMP%] {\n  border: none;\n  background: var(--color-primary-transparent-default);\n  border-radius: var(--border-radius);\n  width: 100%;\n}\n.features-wrapper[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-family: Inter;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 19px;\n  letter-spacing: -0.009em;\n  text-align: left;\n  padding-left: 13px;\n}\n.features-wrapper[_ngcontent-%COMP%]   .sub-title[_ngcontent-%COMP%] {\n  font-family: Inter;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 17px;\n  letter-spacing: 0em;\n  text-align: left;\n  margin-bottom: 20px;\n  padding-left: 13px;\n  color: #7e7e8f;\n}\n.features-wrapper[_ngcontent-%COMP%]   .custom-btn[_ngcontent-%COMP%] {\n  box-shadow: 3px 11px 30px -17px #3366ff;\n  width: auto;\n  padding: 13px 28px;\n  display: inline-flex;\n  justify-content: flex-start;\n  background-color: white;\n  color: var(--color-primary-500);\n  border: 1px solid white;\n  font-family: Inter;\n  font-size: 15px;\n  font-style: normal;\n  font-weight: 700;\n  line-height: 16px;\n  letter-spacing: -0.009em;\n  text-align: left;\n}\n.features-wrapper[_ngcontent-%COMP%]   .custom-btn[_ngcontent-%COMP%]    > nb-icon[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 14px;\n}\n@media screen and (max-width: 1024px) {\n  .features-wrapper[_ngcontent-%COMP%]   .custom-btn[_ngcontent-%COMP%] {\n    padding: 10px 20px;\n  }\n}\n@media screen and (max-width: 790px) {\n  .features-wrapper[_ngcontent-%COMP%]   .custom-btn[_ngcontent-%COMP%] {\n    padding: 15px 25px;\n  }\n}\n.features-wrapper[_ngcontent-%COMP%]   .custom-btn[_ngcontent-%COMP%]:hover {\n  background-color: #fafafa;\n  border: 1px solid #fafafa;\n}\n\n.demo-credentials-select[_ngcontent-%COMP%] {\n  width: 200px;\n  position: absolute;\n  top: 0;\n  right: 0;\n  border-radius: var(--button-rectangle-border-radius);\n}\n.demo-credentials-select[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  z-index: 6;\n}\n.demo-credentials-select[_ngcontent-%COMP%], \n.demo-credentials-select[_ngcontent-%COMP%]   .demo-credentials-select-item[_ngcontent-%COMP%] {\n  border-radius: var(--button-rectangle-border-radius);\n  box-sizing: border-box;\n}\n.demo-credentials-select[_ngcontent-%COMP%]   .demo-credentials-select-item[_ngcontent-%COMP%] {\n  width: 200px;\n  position: relative;\n  z-index: 5;\n  background: var(--background-basic-color-2);\n  color: var(--text-basic-color);\n}\n.demo-credentials-select[_ngcontent-%COMP%]   .demo-credentials-header[_ngcontent-%COMP%] {\n  padding: 5px 5px 5px 15px;\n  box-sizing: border-box;\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  background: var(--background-basic-color-2);\n  color: var(--text-basic-color);\n  border-radius: 20px;\n}\n@media screen and (max-width: 490px) {\n  .demo-credentials-select[_ngcontent-%COMP%]   .demo-credentials-header[_ngcontent-%COMP%]   .demo-text-span[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n@media screen and (max-width: 790px) {\n  .login-container[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n  }\n  .login-container[_ngcontent-%COMP%]   .another-action[_ngcontent-%COMP%] {\n    margin-top: 0;\n  }\n  .features-wrapper[_ngcontent-%COMP%] {\n    width: 476px;\n    margin-top: 30px;\n  }\n  .features-wrapper[_ngcontent-%COMP%]   .demo-credentials-buttons[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  .features-wrapper[_ngcontent-%COMP%]   .demo-credentials-buttons[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%], \n   .features-wrapper[_ngcontent-%COMP%]   .demo-credentials-buttons[_ngcontent-%COMP%]   .sub-title[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n}\n@media screen and (max-width: 490px) {\n  .login-container[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .login-container[_ngcontent-%COMP%]   .login-wrapper[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 20px 12px;\n  }\n  .login-container[_ngcontent-%COMP%]   .login-wrapper[_ngcontent-%COMP%]   .headings[_ngcontent-%COMP%]   .headings-inner[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .login-container[_ngcontent-%COMP%]   .login-wrapper[_ngcontent-%COMP%]   .headings[_ngcontent-%COMP%]   .headings-inner[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%], \n   .login-container[_ngcontent-%COMP%]   .login-wrapper[_ngcontent-%COMP%]   .headings[_ngcontent-%COMP%]   .headings-inner[_ngcontent-%COMP%]   .sub-title[_ngcontent-%COMP%] {\n    width: 100%;\n    text-align: center;\n  }\n  .login-container[_ngcontent-%COMP%]   .login-wrapper[_ngcontent-%COMP%]   .headings.headings-demo[_ngcontent-%COMP%] {\n    height: 135px;\n    align-items: flex-start;\n  }\n  .login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n    margin-bottom: 35px;\n  }\n  .login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .submit-btn-wrapper[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n  .login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .submit-btn-wrapper[_ngcontent-%COMP%]   .submit-inner-wrapper[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n  .login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .submit-btn-wrapper[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%] {\n    margin-bottom: 0;\n  }\n  .login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-control-group[_ngcontent-%COMP%] {\n    margin-bottom: 13px;\n  }\n  .login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n  }\n  .features-wrapper[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .demo-credentials-select[_ngcontent-%COMP%] {\n    top: 83px;\n    left: 50%;\n    transform: translate(-50%);\n    z-index: 6;\n  }\n}\n@media screen and (max-width: 320px) {\n  .features-wrapper[_ngcontent-%COMP%]   .demo-credentials-buttons[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n    text-align: left;\n  }\n  .features-wrapper[_ngcontent-%COMP%]   .demo-credentials-buttons[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%], \n   .features-wrapper[_ngcontent-%COMP%]   .demo-credentials-buttons[_ngcontent-%COMP%]   .sub-title[_ngcontent-%COMP%] {\n    text-align: left;\n  }\n}\n.hr-div-soft[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n  width: 416px;\n  height: 1px;\n  background: var(--border-alternative-color-4);\n  opacity: 0.05;\n  border-radius: 1px;\n  transform: matrix(1, 0, 0, -1, 0, 0);\n  padding-left: 0;\n  padding-right: 0;\n}\n@media screen and (max-width: 490px) {\n  .hr-div-soft[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n@media screen and (min-width: 491px) {\n  .theme-switch[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n  .input-full-width {\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 0.5px 0.5px 0.5px inset;\n  border-radius: var(--border-radius);\n  background-color: var(--gauzy-input-background) !important;\n  border: unset;\n}\n\n  ngx-register .register-wrapper .input-full-width {\n  background-color: var(--gauzy-input-background) !important;\n}\n\n  ngx-register .register-wrapper.dark .input-full-width {\n  background-color: rgba(255, 255, 255, 0.15) !important;\n}\n\n  .remember-me .text {\n  font-family: Inter;\n  font-size: 13px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: 0em;\n  text-align: left;\n  color: var(--text-primary-color);\n}\n\n  .accordion-item-header-expanded {\n  border-bottom-left-radius: 0 !important;\n  border-bottom-right-radius: 0 !important;\n  border-bottom: 1px solid transparent;\n}"]
      });
    }
  }
  return NgxLoginComponent;
})();

/***/ }),

/***/ 84059:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: () => (/* binding */ patterns)
/* harmony export */ });
const patterns = {
  websiteUrl: /^((?:https?:\/\/)[^./]+(?:\.[^./]+)+(?:\/.*)?)$/,
  imageUrl: /^(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg))/,
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\.,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,})$/i,
  host: /^(([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]).)*([A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9-]*[A-Za-z0-9])$/,
  passwordNoSpaceEdges: /^(?!\s).*[^\s]$/
};

/***/ }),

/***/ 84091:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: () => (/* binding */ scheduleReadableStreamLike)
/* harmony export */ });
/* harmony import */ var _scheduleAsyncIterable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(97068);
/* harmony import */ var _util_isReadableStreamLike__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65947);


function scheduleReadableStreamLike(input, scheduler) {
  return (0,_scheduleAsyncIterable__WEBPACK_IMPORTED_MODULE_0__/* .scheduleAsyncIterable */ .M)((0,_util_isReadableStreamLike__WEBPACK_IMPORTED_MODULE_1__/* .readableStreamLikeToAsyncGenerator */ .C)(input), scheduler);
}
//# sourceMappingURL=scheduleReadableStreamLike.js.map

/***/ }),

/***/ 86259:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ms: () => (/* binding */ SafeSubscriber),
/* harmony export */   vU: () => (/* binding */ Subscriber)
/* harmony export */ });
/* unused harmony export EMPTY_OBSERVER */
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(46908);
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90204);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22331);
/* harmony import */ var _util_reportUnhandledError__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(92801);
/* harmony import */ var _util_noop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(54239);
/* harmony import */ var _NotificationFactories__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61502);
/* harmony import */ var _scheduler_timeoutProvider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(81557);
/* harmony import */ var _util_errorContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12309);








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

/***/ 86422:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Y: () => (/* binding */ interval)
/* harmony export */ });
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35427);
/* harmony import */ var _timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68558);


function interval(period = 0, scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__/* .asyncScheduler */ .E) {
  if (period < 0) {
    period = 0;
  }
  return (0,_timer__WEBPACK_IMPORTED_MODULE_1__/* .timer */ .O)(period, period, scheduler);
}
//# sourceMappingURL=interval.js.map

/***/ }),

/***/ 87229:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ AcceptInviteComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73014);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(27075);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9620);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19223);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(97234);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12043);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(15480);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(57952);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(71924);
/* harmony import */ var _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38546);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(56383);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(14572);
/* harmony import */ var _accept_invite_form_accept_invite_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(33920);















const _c0 = a0 => ({
  organizationName: a0
});
const _c1 = a0 => ({
  email: a0
});
function AcceptInviteComponent_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 3)(1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(ctx_r0.inviteLoadErrorMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(5, 2, "ACCEPT_INVITE.INVALID_INVITE"), " ");
  }
}
function AcceptInviteComponent_div_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div")(1, "div", 4)(2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(8, "ga-accept-invite-form", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("submitForm", function AcceptInviteComponent_div_1_div_2_Template_ga_accept_invite_form_submitForm_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r0.submitForm($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind2"] */ .i5U(4, 3, "ACCEPT_INVITE.HEADING", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction1"] */ .eq3(9, _c0, ctx_r0.invitation == null ? null : ctx_r0.invitation.organization == null ? null : ctx_r0.invitation.organization.name)), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind2"] */ .i5U(7, 6, "ACCEPT_INVITE.SUB_HEADING", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction1"] */ .eq3(11, _c1, ctx_r0.invitation == null ? null : ctx_r0.invitation.email)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("invitation", ctx_r0.invitation);
  }
}
function AcceptInviteComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, AcceptInviteComponent_div_1_div_1_Template, 6, 4, "div", 2)(2, AcceptInviteComponent_div_1_div_2_Template, 9, 13, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r0.inviteLoadErrorMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", !ctx_r0.inviteLoadErrorMessage);
  }
}
let AcceptInviteComponent = /*#__PURE__*/(() => {
  let AcceptInviteComponent = class AcceptInviteComponent extends _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_1__/* .TranslationBaseComponent */ .K {
    constructor(translateService, _router, _toastrService, _inviteService, _route, _store) {
      var _this;
      super(translateService);
      _this = this;
      this.translateService = translateService;
      this._router = _router;
      this._toastrService = _toastrService;
      this._inviteService = _inviteService;
      this._route = _route;
      this._store = _store;
      /**
       * Validates the invite using the provided email and token.
       * Loads the invitation details if successful, or sets an error message if not.
       *
       * @param param0 - Object containing the email and token for validation.
       */
      this.loadInvite = /*#__PURE__*/function () {
        var _ref = (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(function* ({
          email,
          token
        }) {
          _this.setLoading(true);
          try {
            _this.invitation = yield _this._inviteService.validateInvite([], {
              email,
              token
            });
          } catch {
            _this.inviteLoadErrorMessage = _this.getTranslation('ACCEPT_INVITE.INVITATION_NO_LONGER_VALID');
          } finally {
            _this.setLoading(false);
          }
        });
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }();
      /**
       * Submit the user registration form and accept the invite if present.
       * @param input IUserRegistrationInput - The user registration input data
       */
      this.submitForm = /*#__PURE__*/function () {
        var _ref2 = (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(function* (input) {
          try {
            const {
              user,
              password
            } = input;
            // Get token and email from query parameters if they exist
            const token = _this._route.snapshot.queryParamMap.get('token');
            const email = _this._route.snapshot.queryParamMap.get('email');
            // If invite is being accepted, attempt the authentication process
            try {
              const auth = yield _this._inviteService.acceptInvite({
                user,
                password,
                token,
                email
              });
              // If authentication is successful, store user and token info
              if (auth?.user && auth?.token) {
                const {
                  user,
                  token,
                  refresh_token
                } = auth;
                // Store user details and tokens in the app's state
                _this._store.userId = user.id;
                _this._store.token = token;
                _this._store.refresh_token = refresh_token;
                // Redirect to the home page
                yield _this._router.navigate(['/']);
              }
            } catch (error) {
              // In case of failure, redirect to the login page
              _this._router.navigate(['/auth/login']);
            }
          } catch (error) {
            // Show error message if something goes wrong during form submission
            _this._toastrService.danger(error, null, 'Could not create your account');
          }
        });
        return function (_x2) {
          return _ref2.apply(this, arguments);
        };
      }();
    }
    ngOnInit() {
      this._route.queryParams.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .tap */ .M)(({
        email,
        token
      }) => this.loadInvite({
        email,
        token
      })), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .untilDestroyed */ .s)(this)).subscribe();
    }
    /**
     * Sets the loading state.
     *
     * @param isLoading - Boolean indicating whether to set the loading state to true or false.
     */
    setLoading(isLoading) {
      this.loading = isLoading;
    }
    ngOnDestroy() {}
    static {
      this.ɵfac = function AcceptInviteComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || AcceptInviteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__/* .TranslateService */ .c$), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_router__WEBPACK_IMPORTED_MODULE_6__/* .Router */ .Ix), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_7__/* .ToastrService */ .t), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_8__/* .InviteService */ .p), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_router__WEBPACK_IMPORTED_MODULE_6__/* .ActivatedRoute */ .nX), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_9__/* .Store */ .il));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: AcceptInviteComponent,
        selectors: [["ng-component"]],
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
        decls: 2,
        vars: 2,
        consts: [["nbSpinnerStatus", "primary", 3, "nbSpinner"], [4, "ngIf"], ["class", "register-header", 4, "ngIf"], [1, "register-header"], [1, "register-header", "mb-2"], [3, "submitForm", "invitation"]],
        template: function AcceptInviteComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, AcceptInviteComponent_div_1_Template, 3, 2, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("nbSpinner", ctx.loading);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", !ctx.loading);
          }
        },
        dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_10__/* .NbSpinnerDirective */ .zwc, _angular_common__WEBPACK_IMPORTED_MODULE_11__/* .NgIf */ .bT, _accept_invite_form_accept_invite_form_component__WEBPACK_IMPORTED_MODULE_12__/* .AcceptInviteFormComponent */ .R, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__/* .TranslatePipe */ .D9],
        styles: [".register-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.register-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  text-align: center;\n}"]
      });
    }
  };
  AcceptInviteComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .UntilDestroy */ .d)({
    checkProperties: true
  }), (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__metadata */ .Sn)("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__/* .TranslateService */ .c$, _angular_router__WEBPACK_IMPORTED_MODULE_6__/* .Router */ .Ix, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_7__/* .ToastrService */ .t, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_8__/* .InviteService */ .p, _angular_router__WEBPACK_IMPORTED_MODULE_6__/* .ActivatedRoute */ .nX, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_9__/* .Store */ .il])], AcceptInviteComponent);
  return AcceptInviteComponent;
})();


/***/ }),

/***/ 87902:
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
const iterator = /*#__PURE__*/getSymbolIterator();
//# sourceMappingURL=iterator.js.map

/***/ }),

/***/ 88862:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   of: () => (/* binding */ of)
/* harmony export */ });
/* harmony import */ var _util_args__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57809);
/* harmony import */ var _from__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57107);


function of(...args) {
  const scheduler = (0,_util_args__WEBPACK_IMPORTED_MODULE_0__/* .popScheduler */ .lI)(args);
  return (0,_from__WEBPACK_IMPORTED_MODULE_1__/* .from */ .H)(args, scheduler);
}
//# sourceMappingURL=of.js.map

/***/ }),

/***/ 89664:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P: () => (/* binding */ CurrencyService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(55598);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(45715);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88326);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4644);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(55801);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52738);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39855);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(79708);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(41598);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(64913);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(26860);








let CurrencyService = /*#__PURE__*/(() => {
  let CurrencyService = class CurrencyService {
    constructor(http) {
      this.http = http;
      this._currencies$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__/* .BehaviorSubject */ .t([]);
      this.currencies$ = this._currencies$.asObservable();
      this.find$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__/* .Subject */ .B();
      this._loadCurrencies();
    }
    _loadCurrencies() {
      this.find$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .filter */ .p)(val => val === true), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .tap */ .M)(() => this.getAll()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .untilDestroyed */ .s)(this)).subscribe();
    }
    getAll() {
      const currencies$ = this._currencies$.getValue();
      if (currencies$.length > 0) {
        return rxjs__WEBPACK_IMPORTED_MODULE_5__/* .EMPTY */ .w;
      }
      return this.http.get(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_6__/* .API_PREFIX */ .m4}/currency`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .map */ .T)(({
        items,
        total
      }) => {
        this._currencies$.next(items);
        return {
          items,
          total
        };
      }), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .untilDestroyed */ .s)(this)).subscribe();
    }
    static {
      this.ɵfac = function CurrencyService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || CurrencyService)(_angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵinject"] */ .KVO(_angular_common_http__WEBPACK_IMPORTED_MODULE_9__/* .HttpClient */ .Qq));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵdefineInjectable"] */ .jDH({
        token: CurrencyService,
        factory: CurrencyService.ɵfac,
        providedIn: 'root'
      });
    }
  };
  CurrencyService = (0,tslib__WEBPACK_IMPORTED_MODULE_10__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .UntilDestroy */ .d)(), (0,tslib__WEBPACK_IMPORTED_MODULE_10__/* .__metadata */ .Sn)("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__/* .HttpClient */ .Qq])], CurrencyService);
  return CurrencyService;
})();


/***/ }),

/***/ 90204:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Kn: () => (/* binding */ EMPTY_SUBSCRIPTION),
/* harmony export */   Uv: () => (/* binding */ isSubscription),
/* harmony export */   yU: () => (/* binding */ Subscription)
/* harmony export */ });
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46908);
/* harmony import */ var _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18434);
/* harmony import */ var _util_arrRemove__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(75214);



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

/***/ 91892:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* binding */ SignInSuccessComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73014);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(97234);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8657);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26860);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(71924);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9620);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(56383);








let SignInSuccessComponent = /*#__PURE__*/(() => {
  class SignInSuccessComponent {
    constructor(_store, _route, _router) {
      var _this = this;
      this._store = _store;
      this._route = _route;
      this._router = _router;
      this._route.queryParams.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__/* .tap */ .M)(params => {
        // If no 'jwt' param is found, navigate to root
        if (!params.jwt) {
          this._router.navigate(['/']);
        }
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__/* .filter */ .p)(params => !!params.jwt) // Continue only if 'jwt' exists
      ).subscribe(/*#__PURE__*/function () {
        var _ref = (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(function* ({
          jwt,
          userId
        }) {
          _this._store.token = jwt;
          _this._store.userId = userId;
          yield _this._router.navigate(['/']);
        });
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    }
    static {
      this.ɵfac = function SignInSuccessComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || SignInSuccessComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_4__/* .Store */ .il), _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_router__WEBPACK_IMPORTED_MODULE_5__/* .ActivatedRoute */ .nX), _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_router__WEBPACK_IMPORTED_MODULE_5__/* .Router */ .Ix));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdefineComponent"] */ .VBU({
        type: SignInSuccessComponent,
        selectors: [["ga-sign-in-success"]],
        standalone: false,
        decls: 1,
        vars: 1,
        consts: [["nbSpinnerSize", "giant", "nbSpinnerStatus", "primary", "nbSpinnerMessage", "Loading", 3, "nbSpinner"]],
        template: function SignInSuccessComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelement"] */ .nrm(0, "nb-card", 0);
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Y8G("nbSpinner", true);
          }
        },
        dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_6__/* .NbCardComponent */ .SrT, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__/* .NbSpinnerDirective */ .zwc],
        encapsulation: 2
      });
    }
  }
  return SignInSuccessComponent;
})();

/***/ }),

/***/ 92801:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   m: () => (/* binding */ reportUnhandledError)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22331);
/* harmony import */ var _scheduler_timeoutProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81557);


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

/***/ 93806:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NgxAuthModule: () => (/* reexport safe */ _lib_auth_module__WEBPACK_IMPORTED_MODULE_0__.G),
/* harmony export */   SignInSuccessComponent: () => (/* reexport safe */ _lib_sign_in_success_sign_in_success_component__WEBPACK_IMPORTED_MODULE_2__.H),
/* harmony export */   SignInSuccessModule: () => (/* reexport safe */ _lib_sign_in_success_sign_in_success_module__WEBPACK_IMPORTED_MODULE_3__.a),
/* harmony export */   createAuthRoutes: () => (/* reexport safe */ _lib_auth_routes__WEBPACK_IMPORTED_MODULE_1__.Z)
/* harmony export */ });
/* harmony import */ var _lib_auth_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20614);
/* harmony import */ var _lib_auth_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70291);
/* harmony import */ var _lib_sign_in_success_sign_in_success_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(91892);
/* harmony import */ var _lib_sign_in_success_sign_in_success_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6003);
/**
 * Public API Surface of @gauzy/ui-auth
 */





/***/ }),

/***/ 94333:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   U: () => (/* binding */ InvoicesService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88326);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80189);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(64913);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26024);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(26860);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(45715);





let InvoicesService = /*#__PURE__*/(() => {
  class InvoicesService {
    constructor(http) {
      this.http = http;
      this.source = new rxjs__WEBPACK_IMPORTED_MODULE_0__/* .BehaviorSubject */ .t(false);
      this.currentData = this.source.asObservable();
    }
    getAll(where, relations = []) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ ._)(this.http.get(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_2__/* .API_PREFIX */ .m4}/invoices`, {
        params: (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_3__/* .toParams */ .SV)({
          where,
          relations
        })
      }));
    }
    getHighestInvoiceNumber(tenantId) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ ._)(this.http.get(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_2__/* .API_PREFIX */ .m4}/invoices/highest`, {
        params: (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_3__/* .toParams */ .SV)({
          tenantId
        })
      }));
    }
    getById(id, relations, findInput) {
      const data = JSON.stringify({
        relations,
        findInput
      });
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ ._)(this.http.get(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_2__/* .API_PREFIX */ .m4}/invoices/${id}`, {
        params: {
          data
        }
      }));
    }
    getPublicInvoice(id, token, relations = []) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ ._)(this.http.get(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_2__/* .API_PREFIX */ .m4}/public/invoice/${id}/${token}`, {
        params: (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_3__/* .toParams */ .SV)({
          relations
        })
      }));
    }
    add(invoice) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ ._)(this.http.post(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_2__/* .API_PREFIX */ .m4}/invoices`, invoice));
    }
    update(id, updateInput) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ ._)(this.http.put(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_2__/* .API_PREFIX */ .m4}/invoices/${id}`, updateInput));
    }
    updateEstimate(id, updateInput) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ ._)(this.http.put(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_2__/* .API_PREFIX */ .m4}/invoices/${id}/estimate`, updateInput));
    }
    updateAction(id, updateInput) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ ._)(this.http.put(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_2__/* .API_PREFIX */ .m4}/invoices/${id}/action`, updateInput));
    }
    updateWithoutAuth(id, token, input) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ ._)(this.http.put(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_2__/* .API_PREFIX */ .m4}/public/invoice/${id}/${token}`, input));
    }
    edit(invoice) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ ._)(this.http.put(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_2__/* .API_PREFIX */ .m4}/invoices/${invoice.id}`, invoice));
    }
    generateLink(id) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ ._)(this.http.put(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_2__/* .API_PREFIX */ .m4}/invoices/generate/${id}`, {}));
    }
    delete(id) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ ._)(this.http.delete(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_2__/* .API_PREFIX */ .m4}/invoices/${id}`));
    }
    sendEmail(email, invoiceNumber, invoiceId, isEstimate, organizationId, tenantId) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ ._)(this.http.put(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_2__/* .API_PREFIX */ .m4}/invoices/email/${email}`, {
        params: {
          isEstimate,
          invoiceNumber,
          invoiceId,
          organizationId,
          tenantId
        }
      }));
    }
    changeValue(message) {
      this.source.next(message);
    }
    downloadInvoicePdf(invoiceId) {
      return this.http.get(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_2__/* .API_PREFIX */ .m4}/invoices/download/${invoiceId}`, {
        responseType: 'blob'
      });
    }
    downloadInvoicePaymentPdf(invoiceId) {
      return this.http.get(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_2__/* .API_PREFIX */ .m4}/invoices/payment/download/${invoiceId}`, {
        responseType: 'blob'
      });
    }
    static {
      this.ɵfac = function InvoicesService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || InvoicesService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵinject"] */ .KVO(_angular_common_http__WEBPACK_IMPORTED_MODULE_5__/* .HttpClient */ .Qq));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdefineInjectable"] */ .jDH({
        token: InvoicesService,
        factory: InvoicesService.ɵfac
      });
    }
  }
  return InvoicesService;
})();

/***/ }),

/***/ 95078:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ subscribeOn)
/* harmony export */ });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82153);

function subscribeOn(scheduler, delay = 0) {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__/* .operate */ .N)((source, subscriber) => {
    subscriber.add(scheduler.schedule(() => source.subscribe(subscriber), delay));
  });
}
//# sourceMappingURL=subscribeOn.js.map

/***/ }),

/***/ 97040:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   h: () => (/* binding */ NoSpaceEdgesDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);


let NoSpaceEdgesDirective = /*#__PURE__*/(() => {
  class NoSpaceEdgesDirective {
    constructor(el) {
      this.el = el;
    }
    /**
     * Trims the input value and updates the element's value.
     *
     * @param {string} value - The input value to be trimmed.
     * @return {void} This function does not return anything.
     */
    onInput(value) {
      this.el.nativeElement.value = value.trim();
    }
    static {
      this.ɵfac = function NoSpaceEdgesDirective_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || NoSpaceEdgesDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* .ElementRef */ .aKT));
      };
    }
    static {
      this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineDirective"] */ .FsC({
        type: NoSpaceEdgesDirective,
        selectors: [["", "noSpaceEdges", ""]],
        hostBindings: function NoSpaceEdgesDirective_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("input", function NoSpaceEdgesDirective_input_HostBindingHandler($event) {
              return ctx.onInput($event.target.value);
            });
          }
        },
        standalone: false
      });
    }
  }
  return NoSpaceEdgesDirective;
})();

/***/ }),

/***/ 97068:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ scheduleAsyncIterable)
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72288);
/* harmony import */ var _util_executeSchedule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50952);


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

/***/ 97234:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ tap)
/* harmony export */ });
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46908);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(82153);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38405);
/* harmony import */ var _util_identity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(49118);




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

/***/ }),

/***/ 99753:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ NgxForgotPasswordComponent)
/* harmony export */ });
/* harmony import */ var _nebular_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17523);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(908);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56383);
/* harmony import */ var _ui_core_theme_src_lib_components_theme_sidebar_theme_settings_components_theme_selector_switch_theme_switch_theme_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10360);
/* harmony import */ var _ui_core_shared_src_lib_faq_faq_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(32785);
/* harmony import */ var _ui_core_theme_src_lib_components_gauzy_logo_gauzy_logo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(85662);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(14572);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(10936);
/* harmony import */ var _ui_core_shared_src_lib_directives_no_space_edges_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(97040);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(19223);











function NgxForgotPasswordComponent_nb_alert_11_li_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "li", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const error_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", error_r2, " ");
  }
}
function NgxForgotPasswordComponent_nb_alert_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-alert", 24)(1, "p", 25)(2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(5, "ul", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(6, NgxForgotPasswordComponent_nb_alert_11_li_6_Template, 2, 1, "li", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(4, 2, "FORGOT_PASSWORD_PAGE.ALERT_TITLE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx_r2.errors);
  }
}
function NgxForgotPasswordComponent_nb_alert_12_li_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "li", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const message_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", message_r4, " ");
  }
}
function NgxForgotPasswordComponent_nb_alert_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-alert", 29)(1, "p", 25)(2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(5, "ul", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(6, NgxForgotPasswordComponent_nb_alert_12_li_6_Template, 2, 1, "li", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(4, 2, "FORGOT_PASSWORD_PAGE.ALERT_SUCCESS_TITLE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx_r2.messages);
  }
}
function NgxForgotPasswordComponent_ng_container_23_p_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(2, 1, "FORGOT_PASSWORD_PAGE.VALIDATION.EMAIL_REQUIRED"), " ");
  }
}
function NgxForgotPasswordComponent_ng_container_23_p_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(2, 1, "FORGOT_PASSWORD_PAGE.VALIDATION.EMAIL_REAL_REQUIRED"), " ");
  }
}
function NgxForgotPasswordComponent_ng_container_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, NgxForgotPasswordComponent_ng_container_23_p_1_Template, 3, 3, "p", 30)(2, NgxForgotPasswordComponent_ng_container_23_p_2_Template, 3, 3, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    const email_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", email_r5.errors == null ? null : email_r5.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", email_r5.errors == null ? null : email_r5.errors.pattern);
  }
}
let NgxForgotPasswordComponent = /*#__PURE__*/(() => {
  class NgxForgotPasswordComponent extends _nebular_auth__WEBPACK_IMPORTED_MODULE_1__/* .NbRequestPasswordComponent */ .g_ {
    static {
      this.ɵfac = /*@__PURE__*/(() => {
        let ɵNgxForgotPasswordComponent_BaseFactory;
        return function NgxForgotPasswordComponent_Factory(__ngFactoryType__) {
          return (ɵNgxForgotPasswordComponent_BaseFactory || (ɵNgxForgotPasswordComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetInheritedFactory"] */ .xGo(NgxForgotPasswordComponent)))(__ngFactoryType__ || NgxForgotPasswordComponent);
        };
      })();
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: NgxForgotPasswordComponent,
        selectors: [["ngx-forgot-password"]],
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
        decls: 43,
        vars: 36,
        consts: [["requestPassForm", "ngForm"], ["email", "ngModel"], [1, "section-wrapper"], [1, "forgot-password-wrapper"], [1, "svg-wrapper"], [1, "ever-logo-svg", 3, "isAccordion"], [1, "theme-switch", 3, "hasText"], ["id", "title", 1, "title"], [1, "sub-title"], ["outline", "danger", "role", "alert", 4, "ngIf"], ["outline", "success", "role", "alert", 4, "ngIf"], [1, "hr-div-strong"], ["aria-labelledby", "title", 1, "form", 3, "ngSubmit"], [1, "form-control-group"], ["for", "input-email", 1, "label"], ["nbInput", "", "noSpaceEdges", "", "id", "input-email", "name", "email", "pattern", ".+@.+\\..+", "autofocus", "", "fullWidth", "", "fieldSize", "large", 3, "ngModelChange", "ngModel", "placeholder", "status", "required"], [4, "ngIf"], [1, "submit-btn-wrapper"], ["nbButton", "", "size", "small", 1, "submit-btn", 3, "disabled"], [1, "hr-div-soft"], ["aria-label", "Sign in or sign up", 1, "sign-in-or-up"], [1, "redirect-link-p"], ["routerLink", "/auth/login", 1, "text-link"], ["routerLink", "/auth/register", 1, "text-link"], ["outline", "danger", "role", "alert"], [1, "alert-title"], [1, "alert-message-list"], ["class", "alert-message", 4, "ngFor", "ngForOf"], [1, "alert-message"], ["outline", "success", "role", "alert"], ["class", "caption status-danger", 4, "ngIf"], [1, "caption", "status-danger"]],
        template: function NgxForgotPasswordComponent_Template(rf, ctx) {
          if (rf & 1) {
            const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "section", 2)(1, "div", 3)(2, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(3, "ngx-gauzy-logo", 5)(4, "gauzy-switch-theme", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(5, "h1", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(7, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(8, "p", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(10, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(11, NgxForgotPasswordComponent_nb_alert_11_Template, 7, 4, "nb-alert", 9)(12, NgxForgotPasswordComponent_nb_alert_12_Template, 7, 4, "nb-alert", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(13, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(14, "form", 12, 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("ngSubmit", function NgxForgotPasswordComponent_Template_form_ngSubmit_14_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx.requestPass());
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(16, "div", 13)(17, "label", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(19, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(20, "input", 15, 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(22, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayListener"] */ .mxI("ngModelChange", function NgxForgotPasswordComponent_Template_input_ngModelChange_20_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayBindingSet"] */ .DH7(ctx.user.email, $event) || (ctx.user.email = $event);
              return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj($event);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(23, NgxForgotPasswordComponent_ng_container_23_Template, 3, 2, "ng-container", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(24, "div", 17)(25, "button", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(27, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(28, "div", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(29, "section", 20)(30, "p", 21)(31, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(32);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(33, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(34, "a", 22)(35, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(36);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(37, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(38, "p", 21)(39, "a", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(40);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(41, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(42, "ngx-faq");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
          }
          if (rf & 2) {
            const requestPassForm_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(15);
            const email_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("isAccordion", false);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("hasText", false);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(7, 20, "FORGOT_PASSWORD_PAGE.TITLE"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(10, 22, "FORGOT_PASSWORD_PAGE.SUB_TITLE"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.showMessages.error && (ctx.errors == null ? null : ctx.errors.length) && !ctx.submitted);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.showMessages.success && (ctx.messages == null ? null : ctx.messages.length) && !ctx.submitted);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(19, 24, "FORGOT_PASSWORD_PAGE.LABELS.EMAIL"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayProperty"] */ .R50("ngModel", ctx.user.email);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(22, 26, "FORGOT_PASSWORD_PAGE.PLACEHOLDERS.EMAIL"))("status", email_r5.dirty ? email_r5.invalid ? "danger" : "success" : "basic")("required", ctx.getConfigValue("forms.validation.email.required"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵattribute"] */ .BMQ("aria-invalid", email_r5.invalid && email_r5.touched ? true : null);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", email_r5.invalid && email_r5.touched);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵclassProp"] */ .AVh("btn-pulse", ctx.submitted);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("disabled", ctx.submitted || !requestPassForm_r6.valid);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(27, 28, "FORGOT_PASSWORD_PAGE.REQUEST_PASSWORD_TEXT"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(33, 30, "FORGOT_PASSWORD_PAGE.BACK_TO_LOGIN"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(37, 32, "BUTTONS.LOGIN"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(41, 34, "BUTTONS.REGISTER"), " ");
          }
        },
        dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__/* .RouterLink */ .Wk, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbAlertComponent */ .EVe, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbButtonComponent */ .YP2, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbInputDirective */ .i6h, _ui_core_theme_src_lib_components_theme_sidebar_theme_settings_components_theme_selector_switch_theme_switch_theme_component__WEBPACK_IMPORTED_MODULE_4__/* .SwitchThemeComponent */ .z, _ui_core_shared_src_lib_faq_faq_component__WEBPACK_IMPORTED_MODULE_5__/* .NgxFaqComponent */ .d, _ui_core_theme_src_lib_components_gauzy_logo_gauzy_logo_component__WEBPACK_IMPORTED_MODULE_6__/* .GauzyLogoComponent */ .p, _angular_common__WEBPACK_IMPORTED_MODULE_7__/* .NgForOf */ .Sq, _angular_common__WEBPACK_IMPORTED_MODULE_7__/* .NgIf */ .bT, _angular_forms__WEBPACK_IMPORTED_MODULE_8__/* ["ɵNgNoValidate"] */ .qT, _angular_forms__WEBPACK_IMPORTED_MODULE_8__/* .DefaultValueAccessor */ .me, _angular_forms__WEBPACK_IMPORTED_MODULE_8__/* .NgControlStatus */ .BC, _angular_forms__WEBPACK_IMPORTED_MODULE_8__/* .NgControlStatusGroup */ .cb, _angular_forms__WEBPACK_IMPORTED_MODULE_8__/* .RequiredValidator */ .YS, _angular_forms__WEBPACK_IMPORTED_MODULE_8__/* .PatternValidator */ .R_, _angular_forms__WEBPACK_IMPORTED_MODULE_8__/* .NgModel */ .vS, _angular_forms__WEBPACK_IMPORTED_MODULE_8__/* .NgForm */ .cV, _ui_core_shared_src_lib_directives_no_space_edges_directive__WEBPACK_IMPORTED_MODULE_9__/* .NoSpaceEdgesDirective */ .h, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__/* .TranslatePipe */ .D9],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.card[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-1);\n}\n\n.section-wrapper[_ngcontent-%COMP%] {\n  width: 765px;\n  display: flex;\n  justify-content: space-between;\n}\n\n.forgot-password-wrapper[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-2);\n  border-radius: var(--border-radius);\n  padding: 30px;\n  width: 476px;\n}\n.forgot-password-wrapper[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  padding-left: 15px;\n  padding-right: 15px;\n}\n.forgot-password-wrapper[_ngcontent-%COMP%]   .svg-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 57px;\n}\n.forgot-password-wrapper[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-family: Inter;\n  font-size: 24px;\n  font-style: normal;\n  font-weight: 700;\n  line-height: 30px;\n  letter-spacing: 0em;\n  text-align: left;\n}\n.forgot-password-wrapper[_ngcontent-%COMP%]   .sub-title[_ngcontent-%COMP%] {\n  width: 358px;\n  height: 34px;\n  font-family: \"Inter\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 17px;\n  display: flex;\n  align-items: center;\n  text-align: start;\n  margin-bottom: 15px;\n}\n.forgot-password-wrapper[_ngcontent-%COMP%]   .hr-div-strong[_ngcontent-%COMP%] {\n  width: 416px;\n  height: 1px;\n  border-radius: 1px;\n  transform: matrix(1, 0, 0, -1, 0, 0);\n  background: var(--border-alternative-color-4);\n  opacity: 0.15;\n  margin-bottom: 29px;\n  padding-left: 0;\n  padding-right: 0;\n}\n@media screen and (max-width: 490px) {\n  .forgot-password-wrapper[_ngcontent-%COMP%]   .hr-div-strong[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n.form[_ngcontent-%COMP%]   .form-control-group[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.form[_ngcontent-%COMP%]   .form-control-group[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-family: \"Inter\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 11px;\n  line-height: 13px;\n  display: flex;\n  align-items: center;\n  letter-spacing: -0.01em;\n  color: #7e7e8f;\n}\n.form[_ngcontent-%COMP%]   .submit-btn-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n}\n.form[_ngcontent-%COMP%]   .submit-btn-wrapper[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%] {\n  padding: 13px 39px;\n  box-shadow: 0px 19px 15px -14px rgba(0, 0, 0, 0.22);\n  font-family: Inter;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 700;\n  line-height: 16px;\n  letter-spacing: -0.009em;\n  text-align: left;\n  margin-bottom: 46px;\n}\n.form[_ngcontent-%COMP%]   .submit-btn-wrapper[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%]:enabled {\n  background-color: #fa754e;\n  border: 1px solid #fa754e;\n  color: #ffffff;\n}\n\n.hr-div-soft[_ngcontent-%COMP%] {\n  width: 416px;\n  height: 1px;\n  background: var(--border-alternative-color-4);\n  opacity: 0.05;\n  border-radius: 1px;\n  transform: matrix(1, 0, 0, -1, 0, 0);\n  padding-left: 0;\n  padding-right: 0;\n}\n@media screen and (max-width: 490px) {\n  .hr-div-soft[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n.redirect-link-p[_ngcontent-%COMP%] {\n  font-family: \"Inter\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 17px;\n  \n\n  color: #7e7e8f;\n  margin-bottom: 0;\n}\n.redirect-link-p[_ngcontent-%COMP%]   .text-link[_ngcontent-%COMP%] {\n  font-family: Inter;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 17px;\n  letter-spacing: 0em;\n  color: var(--text-primary-color);\n  text-decoration: none;\n}\n\n@media screen and (min-width: 491px) {\n  .theme-switch[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n@media screen and (max-width: 790px) {\n  .section-wrapper[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n  }\n}\n@media screen and (max-width: 490px) {\n  .section-wrapper[_ngcontent-%COMP%], \n   .forgot-password-wrapper[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .forgot-password-wrapper[_ngcontent-%COMP%] {\n    padding: 12px 18px;\n  }\n  .forgot-password-wrapper[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n    padding-left: 0px;\n    padding-right: 0px;\n  }\n  .forgot-password-wrapper[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%], \n   .forgot-password-wrapper[_ngcontent-%COMP%]   .sub-title[_ngcontent-%COMP%] {\n    width: 100%;\n    text-align: center;\n  }\n  .form[_ngcontent-%COMP%]   .submit-btn-wrapper[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n}\n  .input-full-width {\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 0.5px 0.5px 0.5px inset;\n  border-radius: var(--border-radius);\n  background-color: var(--gauzy-input-background) !important;\n  border: unset;\n}\n\n  ngx-register .register-wrapper .input-full-width {\n  background-color: var(--gauzy-input-background) !important;\n}\n\n  ngx-register .register-wrapper.dark .input-full-width {\n  background-color: rgba(255, 255, 255, 0.15) !important;\n}"]
      });
    }
  }
  return NgxForgotPasswordComponent;
})();

/***/ })

}]);