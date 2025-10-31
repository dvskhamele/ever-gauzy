"use strict";
(self["webpackChunkgauzy"] = self["webpackChunkgauzy"] || []).push([[6915],{

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

/***/ 48692:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WorkspaceCreateModule: () => (/* binding */ WorkspaceCreateModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(14572);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(10936);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(908);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(56383);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(19223);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(38834);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(66285);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(38434);
/* harmony import */ var _gauzy_ui_core_theme__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(10316);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(55818);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22688);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(57044);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(20173);
/* harmony import */ var _workspace_create_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(64840);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(79510);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(28553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26860);













const routes = [{
  path: '',
  component: _workspace_create_component__WEBPACK_IMPORTED_MODULE_0__/* .WorkspaceCreateComponent */ .n
}];
let WorkspaceCreateModule = /*#__PURE__*/(() => {
  class WorkspaceCreateModule {
    static {
      this.ɵfac = function WorkspaceCreateModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || WorkspaceCreateModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineNgModule"] */ .$C({
        type: WorkspaceCreateModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineInjector"] */ .G2t({
        providers: [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_2__/* .TenantService */ .I, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_3__/* .OrganizationsService */ .k, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_4__/* .UsersService */ .g, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_5__/* .WorkspaceAuthService */ .J, _shared__WEBPACK_IMPORTED_MODULE_6__/* .CountdownTimerService */ .Q],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__/* .CommonModule */ .MD, _angular_forms__WEBPACK_IMPORTED_MODULE_8__/* .ReactiveFormsModule */ .X1, _angular_router__WEBPACK_IMPORTED_MODULE_9__/* .RouterModule */ .iI.forChild(routes), _nebular_theme__WEBPACK_IMPORTED_MODULE_10__/* .NbButtonModule */ .P5N, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__/* .NbIconModule */ .clu, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__/* .NbCardModule */ .lVF, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__/* .NbInputModule */ .pty, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__/* .NbFormFieldModule */ .NeG, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__/* .NbSpinnerModule */ .gYs, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__/* .NbTooltipModule */ .IB0, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__/* .TranslateModule */ .h.forChild(), _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_12__/* .SharedModule */ .G, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_13__/* .OrganizationsStepFormModule */ .Z, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_14__/* .PasswordFormFieldModule */ .G, _gauzy_ui_core_theme__WEBPACK_IMPORTED_MODULE_15__/* .ThemeModule */ .O, _shared__WEBPACK_IMPORTED_MODULE_16__/* .WorkspaceSharedModule */ .J]
      });
    }
  }
  return WorkspaceCreateModule;
})();

/***/ }),

/***/ 51530:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ OrganizationDepartmentsService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80189);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64913);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26860);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45715);





let OrganizationDepartmentsService = /*#__PURE__*/(() => {
  class OrganizationDepartmentsService {
    constructor(http) {
      this.http = http;
    }
    create(createInput) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ ._)(this.http.post(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/organization-department`, createInput));
    }
    getAllByEmployee(id) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ ._)(this.http.get(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/organization-department/employee/${id}`));
    }
    getAll(relations, findInput, order) {
      const data = JSON.stringify({
        relations,
        findInput,
        order
      });
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ ._)(this.http.get(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/organization-department`, {
        params: {
          data
        }
      }));
    }
    update(id, updateInput) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ ._)(this.http.put(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/organization-department/${id}`, updateInput));
    }
    updateByEmployee(updateInput) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ ._)(this.http.put(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/organization-department/employee`, updateInput));
    }
    delete(id) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ ._)(this.http.delete(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/organization-department/${id}`));
    }
    static {
      this.ɵfac = function OrganizationDepartmentsService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || OrganizationDepartmentsService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵinject"] */ .KVO(_angular_common_http__WEBPACK_IMPORTED_MODULE_3__/* .HttpClient */ .Qq));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineInjectable"] */ .jDH({
        token: OrganizationDepartmentsService,
        factory: OrganizationDepartmentsService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return OrganizationDepartmentsService;
})();

/***/ }),

/***/ 64840:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   n: () => (/* binding */ WorkspaceCreateComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(73014);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(81816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10936);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(38228);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19223);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6992);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(54263);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(71924);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(20173);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2543);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(79510);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(14572);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(56383);
/* harmony import */ var _ui_core_shared_src_lib_organizations_organizations_step_form_organizations_step_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(34797);
/* harmony import */ var _shared_email_code_form_email_code_form_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(88438);
/* harmony import */ var _shared_workspace_header_workspace_header_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(49710);
/* harmony import */ var _shared_workspace_selection_workspace_selection_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(26370);

var WorkspaceCreateComponent_1;


















function WorkspaceCreateComponent_section_0_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(1, "ga-workspace-header", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("close", function WorkspaceCreateComponent_section_0_ng_container_2_Template_ga_workspace_header_close_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.closeWindow());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(2, "ga-email-code-form", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("sendCode", function WorkspaceCreateComponent_section_0_ng_container_2_Template_ga_email_code_form_sendCode_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.sendSigninCode());
    })("resendCode", function WorkspaceCreateComponent_section_0_ng_container_2_Template_ga_email_code_form_resendCode_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.onResendCode());
    })("submitForm", function WorkspaceCreateComponent_section_0_ng_container_2_Template_ga_email_code_form_submitForm_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.confirmSignInCode());
    })("editEmail", function WorkspaceCreateComponent_section_0_ng_container_2_Template_ga_email_code_form_editEmail_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.onEditEmail());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("form", ctx_r1.form)("isLoading", ctx_r1.isLoading)("isCodeSent", ctx_r1.isCodeSent)("isCodeResent", ctx_r1.isCodeResent)("countdown", ctx_r1.countdown)("showForgotEmailLink", false);
  }
}
function WorkspaceCreateComponent_section_0_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(1, "ga-workspace-header", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("close", function WorkspaceCreateComponent_section_0_ng_container_3_Template_ga_workspace_header_close_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.closeWindow());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(2, "ga-workspace-selection", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("workspaceSelected", function WorkspaceCreateComponent_section_0_ng_container_3_Template_ga_workspace_selection_workspaceSelected_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.signInWorkspace($event));
    })("createWorkspace", function WorkspaceCreateComponent_section_0_ng_container_3_Template_ga_workspace_selection_createWorkspace_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.continueToCreation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("workspaces", ctx_r1.workspaces)("confirmedEmail", ctx_r1.confirmedEmail)("totalWorkspaces", ctx_r1.totalWorkspaces)("showCreateButton", true);
  }
}
function WorkspaceCreateComponent_section_0_ng_container_4_div_10_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(2, 1, "REGISTER_PAGE.VALIDATION.FULL_NAME_REQUIRED"), " ");
  }
}
function WorkspaceCreateComponent_section_0_ng_container_4_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, WorkspaceCreateComponent_section_0_ng_container_4_div_10_span_1_Template, 3, 3, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r1.fullName.errors == null ? null : ctx_r1.fullName.errors.required);
  }
}
function WorkspaceCreateComponent_section_0_ng_container_4_div_20_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(2, 1, "REGISTER_PAGE.VALIDATION.PASSWORD_REQUIRED"), " ");
  }
}
function WorkspaceCreateComponent_section_0_ng_container_4_div_20_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(2, 1, "REGISTER_PAGE.VALIDATION.PASSWORD_MIN_LENGTH"), " ");
  }
}
function WorkspaceCreateComponent_section_0_ng_container_4_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, WorkspaceCreateComponent_section_0_ng_container_4_div_20_span_1_Template, 3, 3, "span", 4)(2, WorkspaceCreateComponent_section_0_ng_container_4_div_20_span_2_Template, 3, 3, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r1.password.errors == null ? null : ctx_r1.password.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r1.password.errors == null ? null : ctx_r1.password.errors.minlength);
  }
}
function WorkspaceCreateComponent_section_0_ng_container_4_div_30_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(2, 1, "REGISTER_PAGE.VALIDATION.CONFIRM_PASSWORD_REQUIRED"), " ");
  }
}
function WorkspaceCreateComponent_section_0_ng_container_4_div_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, WorkspaceCreateComponent_section_0_ng_container_4_div_30_span_1_Template, 3, 3, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r1.confirmPassword.errors == null ? null : ctx_r1.confirmPassword.errors.required);
  }
}
function WorkspaceCreateComponent_section_0_ng_container_4_div_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(2, 1, "REGISTER_PAGE.VALIDATION.PASSWORDS_NOT_MATCH"), " ");
  }
}
function WorkspaceCreateComponent_section_0_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(1, "ga-workspace-header", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("close", function WorkspaceCreateComponent_section_0_ng_container_4_Template_ga_workspace_header_close_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.closeWindow());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(2, "div", 10)(3, "form", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("ngSubmit", function WorkspaceCreateComponent_section_0_ng_container_4_Template_form_ngSubmit_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.continueToWorkspaceCreation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(4, "div", 12)(5, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(8, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(10, WorkspaceCreateComponent_section_0_ng_container_4_div_10_Template, 2, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(11, "div", 12)(12, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(15, "nb-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(16, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(18, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function WorkspaceCreateComponent_section_0_ng_container_4_Template_a_click_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.showPassword = !ctx_r1.showPassword);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(19, "nb-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(20, WorkspaceCreateComponent_section_0_ng_container_4_div_20_Template, 3, 2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(21, "div", 12)(22, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(24, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(25, "nb-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(26, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(27, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(28, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function WorkspaceCreateComponent_section_0_ng_container_4_Template_a_click_28_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.showConfirmPassword = !ctx_r1.showConfirmPassword);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(29, "nb-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(30, WorkspaceCreateComponent_section_0_ng_container_4_div_30_Template, 2, 1, "div", 15)(31, WorkspaceCreateComponent_section_0_ng_container_4_div_31_Template, 3, 3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(32, "div", 22)(33, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(35, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("formGroup", ctx_r1.accountForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(7, 23, "REGISTER_PAGE.PLACEHOLDERS.FULL_NAME"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(9, 25, "REGISTER_PAGE.PLACEHOLDERS.FULL_NAME"))("status", ctx_r1.fullName.dirty ? ctx_r1.fullName.invalid ? "danger" : "success" : "basic");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵattribute"] */ .BMQ("aria-invalid", ctx_r1.fullName.invalid && ctx_r1.fullName.touched ? true : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r1.fullName.invalid && ctx_r1.fullName.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(14, 27, "REGISTER_PAGE.LABELS.PASSWORD"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("type", ctx_r1.showPassword ? "text" : "password")("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(17, 29, "REGISTER_PAGE.PLACEHOLDERS.PASSWORD"))("status", ctx_r1.password.dirty ? ctx_r1.password.invalid ? "danger" : "success" : "basic");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("icon", ctx_r1.showPassword ? "eye-outline" : "eye-off-outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵattribute"] */ .BMQ("aria-label", ctx_r1.showPassword ? "hide password" : "show password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r1.password.invalid && ctx_r1.password.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(24, 31, "REGISTER_PAGE.LABELS.CONFIRM_PASSWORD"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("type", ctx_r1.showConfirmPassword ? "text" : "password")("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(27, 33, "REGISTER_PAGE.PLACEHOLDERS.CONFIRM_PASSWORD"))("status", ctx_r1.confirmPassword.dirty ? ctx_r1.confirmPassword.invalid || (ctx_r1.accountForm.errors == null ? null : ctx_r1.accountForm.errors["mustMatch"]) ? "danger" : "success" : "basic");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("icon", ctx_r1.showConfirmPassword ? "eye-outline" : "eye-off-outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵattribute"] */ .BMQ("aria-label", ctx_r1.showConfirmPassword ? "hide password" : "show password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r1.confirmPassword.invalid && ctx_r1.confirmPassword.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", (ctx_r1.accountForm.errors == null ? null : ctx_r1.accountForm.errors["mustMatch"]) && ctx_r1.confirmPassword.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("disabled", ctx_r1.accountForm.invalid || ctx_r1.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(35, 35, "BUTTONS.CONTINUE"), " ");
  }
}
function WorkspaceCreateComponent_section_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "section", 2)(1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(2, WorkspaceCreateComponent_section_0_ng_container_2_Template, 3, 6, "ng-container", 4)(3, WorkspaceCreateComponent_section_0_ng_container_3_Template, 3, 4, "ng-container", 4)(4, WorkspaceCreateComponent_section_0_ng_container_4_Template, 36, 37, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", !ctx_r1.showWorkspaceSelection && !ctx_r1.showCreationStep && !ctx_r1.showAccountCreation);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r1.showWorkspaceSelection);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r1.showAccountCreation);
  }
}
function WorkspaceCreateComponent_section_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "section", 25)(1, "ga-workspace-header", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("close", function WorkspaceCreateComponent_section_1_Template_ga_workspace_header_close_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.closeWindow());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(2, "div", 10)(3, "ga-organizations-step-form", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("createOrganization", function WorkspaceCreateComponent_section_1_Template_ga_organizations_step_form_createOrganization_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.onboardUser($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("loading", ctx_r1.isLoading)("isOnboarding", true);
  }
}
let WorkspaceCreateComponent = /*#__PURE__*/(() => {
  let WorkspaceCreateComponent = class WorkspaceCreateComponent extends _shared__WEBPACK_IMPORTED_MODULE_1__/* .BaseWorkspaceAuthComponent */ ._ {
    static {
      WorkspaceCreateComponent_1 = this;
    }
    /**
     * Static method to build the account creation form using Angular's FormBuilder.
     * Reuses existing form validation patterns from AcceptInviteFormComponent
     */
    static buildAccountForm(fb) {
      return fb.group({
        fullName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .Validators */ .k0.required],
        password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .Validators */ .k0.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .Validators */ .k0.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .Validators */ .k0.minLength(4)])],
        confirmPassword: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .Validators */ .k0.required]
      }, {
        validators: [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_3__/* .MatchValidator */ .e.mustMatch('password', 'confirmPassword')]
      });
    }
    /**
     * Getter for the fullName form control.
     */
    get fullName() {
      return this.accountForm.controls['fullName'];
    }
    /**
     * Getter for the password form control.
     */
    get password() {
      return this.accountForm.controls['password'];
    }
    /**
     * Getter for the confirmPassword form control.
     */
    get confirmPassword() {
      return this.accountForm.controls['confirmPassword'];
    }
    constructor(translateService, _fb, cdr, _errorHandlingService, _store, _workspaceAuthService, _timerService) {
      super(translateService, _fb, cdr, _errorHandlingService, _store, _workspaceAuthService, _timerService);
      this.translateService = translateService;
      this._fb = _fb;
      this.cdr = cdr;
      this._errorHandlingService = _errorHandlingService;
      this._store = _store;
      this._workspaceAuthService = _workspaceAuthService;
      this._timerService = _timerService;
      // Creation step state
      this.showCreationStep = false;
      this.showAccountCreation = false;
      this.showPassword = false;
      this.showConfirmPassword = false;
      /**
       * FormGroup instance representing the account creation form (profile + password).
       */
      this.accountForm = WorkspaceCreateComponent_1.buildAccountForm(this._fb);
    }
    /**
     * Handle edit email button click
     */
    onEditEmail() {
      this.isCodeSent = false;
      this.form.get('email').enable();
      this.form.get('code').reset();
      this.isCodeResent = false;
      this._timerService.stopTimer();
    }
    /**
     * Continue to account creation step (fullName, password)
     */
    continueToCreation() {
      this.showWorkspaceSelection = false;
      this.showAccountCreation = true;
    }
    /**
     * Continue to workspace creation step after account creation
     */
    continueToWorkspaceCreation() {
      if (this.accountForm.invalid) {
        this.accountForm.markAllAsTouched();
        return;
      }
      this.showAccountCreation = false;
      this.showCreationStep = true;
    }
    /**
     * Handle component-specific logic after confirmation response.
     * For workspace creation: show workspace selection if user has workspaces, otherwise go to creation.
     */
    handleConfirmationResponse(response) {
      const {
        total_workspaces
      } = response;
      // If user has workspaces, show selection
      if (total_workspaces > 0) {
        this.showWorkspaceSelection = true;
        this.showAccountCreation = false;
        this.showCreationStep = false;
      } else {
        this.showWorkspaceSelection = false;
        this.showAccountCreation = false;
        this.showCreationStep = true;
      }
    }
    /**
     * Handle workspace creation from onboarding form using the workspace auth service.
     */
    onboardUser(organization) {
      var _this = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(function* () {
        _this.isLoading = true;
        try {
          // Ensure account form is valid before using its values
          if (_this.accountForm.invalid) {
            _this.accountForm.markAllAsTouched();
            return;
          }
          // Get user registration data from account form
          const {
            fullName,
            password,
            confirmPassword
          } = _this.accountForm.getRawValue();
          // Split fullName into firstName and lastName for the service
          const parts = fullName.trim().split(/\s+/);
          const [firstName = '', ...rest] = parts;
          const lastName = rest.join(' ');
          const userRegistrationData = {
            firstName,
            lastName,
            password,
            confirmPassword
          };
          // Use the workspace auth service to handle the complex onboarding flow
          yield _this._workspaceAuthService.onboardUser(organization, userRegistrationData, _this.confirmedEmail);
          window.location.href = '/';
        } catch (error) {
          _this._errorHandlingService.handleError(error);
        } finally {
          _this.isLoading = false;
        }
      })();
    }
    static {
      this.ɵfac = function WorkspaceCreateComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || WorkspaceCreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__/* .TranslateService */ .c$), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .UntypedFormBuilder */ .ze), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* .ChangeDetectorRef */ .gRc), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_6__/* .ErrorHandlingService */ .X), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_7__/* .Store */ .il), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_8__/* .WorkspaceAuthService */ .J), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_shared__WEBPACK_IMPORTED_MODULE_9__/* .CountdownTimerService */ .Q));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: WorkspaceCreateComponent,
        selectors: [["ga-workspace-create"]],
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
        decls: 2,
        vars: 2,
        consts: [["class", "login-container", 4, "ngIf"], ["class", "workspace-creation-container", 4, "ngIf"], [1, "login-container"], [1, "login-wrapper"], [4, "ngIf"], ["title", "WORKSPACES.CREATE.TITLE", "subtitle", "WORKSPACES.CREATE.SUBTITLE", 3, "close"], ["successSentCodeTitle", "WORKSPACES.CREATE.SUCCESS_SENT_CODE_TITLE", "successSentCodeSubTitle", "WORKSPACES.CREATE.SUCCESS_SENT_CODE_SUB_TITLE", 3, "sendCode", "resendCode", "submitForm", "editEmail", "form", "isLoading", "isCodeSent", "isCodeResent", "countdown", "showForgotEmailLink"], [3, "close"], [3, "workspaceSelected", "createWorkspace", "workspaces", "confirmedEmail", "totalWorkspaces", "showCreateButton"], ["title", "WORKSPACE_CREATE.ACCOUNT_CREATION.TITLE", "subtitle", "WORKSPACE_CREATE.ACCOUNT_CREATION.SUBTITLE", 3, "close"], [1, "creation-content"], [3, "ngSubmit", "formGroup"], [1, "form-group"], ["for", "fullName"], ["id", "fullName", "type", "text", "nbInput", "", "fullWidth", "", "formControlName", "fullName", "autocomplete", "name", 3, "placeholder", "status"], ["class", "error-message", 4, "ngIf"], ["for", "password"], ["id", "password", "nbInput", "", "fullWidth", "", "formControlName", "password", "autocomplete", "new-password", 3, "type", "placeholder", "status"], ["nbSuffix", "", "nbButton", "", "size", "small", "ghost", "", 3, "click"], ["pack", "eva", 3, "icon"], ["for", "confirmPassword"], ["id", "confirmPassword", "nbInput", "", "fullWidth", "", "formControlName", "confirmPassword", "autocomplete", "confirm-password", 3, "type", "placeholder", "status"], [1, "submit-btn-wrapper"], ["type", "submit", "nbButton", "", "status", "primary", "size", "medium", 1, "submit-btn", 3, "disabled"], [1, "error-message"], [1, "workspace-creation-container"], ["title", "WORKSPACE_CREATE.WORKSPACE_SETUP.TITLE", "subtitle", "WORKSPACE_CREATE.WORKSPACE_SETUP.SUBTITLE", 3, "close"], [3, "createOrganization", "loading", "isOnboarding"]],
        template: function WorkspaceCreateComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(0, WorkspaceCreateComponent_section_0_Template, 5, 3, "section", 0)(1, WorkspaceCreateComponent_section_1_Template, 4, 2, "section", 1);
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", !ctx.showCreationStep);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.showCreationStep);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__/* .NgIf */ .bT, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* ["ɵNgNoValidate"] */ .qT, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .DefaultValueAccessor */ .me, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .NgControlStatus */ .BC, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .NgControlStatusGroup */ .cb, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .FormGroupDirective */ .j4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .FormControlName */ .JD, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbButtonComponent */ .YP2, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbIconComponent */ .tHu, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbInputDirective */ .i6h, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbFormFieldComponent */ .u_9, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbSuffixDirective */ .zb0, _ui_core_shared_src_lib_organizations_organizations_step_form_organizations_step_form_component__WEBPACK_IMPORTED_MODULE_12__/* .OrganizationsStepFormComponent */ .m, _shared_email_code_form_email_code_form_component__WEBPACK_IMPORTED_MODULE_13__/* .EmailCodeFormComponent */ .F, _shared_workspace_header_workspace_header_component__WEBPACK_IMPORTED_MODULE_14__/* .WorkspaceHeaderComponent */ .E, _shared_workspace_selection_workspace_selection_component__WEBPACK_IMPORTED_MODULE_15__/* .WorkspaceSelectionComponent */ .J, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__/* .TranslatePipe */ .D9],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.card[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-1);\n}\n\n.login-container[_ngcontent-%COMP%] {\n  width: 765px;\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 100vh;\n  margin: 0 auto;\n}\n.login-container[_ngcontent-%COMP%]   .login-wrapper[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-2);\n  border-radius: var(--border-radius);\n  box-sizing: border-box;\n  padding: 30px;\n  width: 476px;\n  height: 100%;\n}\n.login-container[_ngcontent-%COMP%]   .login-wrapper[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  padding-left: 15px;\n  padding-right: 15px;\n}\n.login-container[_ngcontent-%COMP%]   .login-wrapper[_ngcontent-%COMP%]   .svg-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 57px;\n}\n.login-container[_ngcontent-%COMP%]   .login-wrapper[_ngcontent-%COMP%]   .headings[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  position: relative;\n}\n.login-container[_ngcontent-%COMP%]   .login-wrapper[_ngcontent-%COMP%]   .headings[_ngcontent-%COMP%]   .headings-inner[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-family: Inter;\n  font-size: 24px;\n  font-style: normal;\n  font-weight: 700;\n  line-height: 30px;\n  letter-spacing: 0em;\n  margin-bottom: 18px;\n  text-align: start;\n}\n.login-container[_ngcontent-%COMP%]   .login-wrapper[_ngcontent-%COMP%]   .headings[_ngcontent-%COMP%]   .headings-inner[_ngcontent-%COMP%]   .sub-title[_ngcontent-%COMP%] {\n  font-family: Inter;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 1.4;\n  letter-spacing: 0em;\n  margin-bottom: 26px;\n  text-align: start;\n}\n.login-container[_ngcontent-%COMP%]   .login-wrapper[_ngcontent-%COMP%]   .hr-div-strong[_ngcontent-%COMP%] {\n  width: 416px;\n  height: 1px;\n  border-radius: 1px;\n  transform: matrix(1, 0, 0, -1, 0, 0);\n  background: var(--border-alternative-color-4);\n  opacity: 0.15;\n  margin-bottom: 29px;\n  padding-left: 0;\n  padding-right: 0;\n}\n@media screen and (max-width: 490px) {\n  .login-container[_ngcontent-%COMP%]   .login-wrapper[_ngcontent-%COMP%]   .hr-div-strong[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.login-container[_ngcontent-%COMP%]   .login-wrapper[_ngcontent-%COMP%]   .hr-div-soft[_ngcontent-%COMP%] {\n  width: 416px;\n  height: 1px;\n  background: var(--border-alternative-color-4);\n  opacity: 0.05;\n  border-radius: 1px;\n  transform: matrix(1, 0, 0, -1, 0, 0);\n  padding-left: 0;\n  padding-right: 0;\n}\n@media screen and (max-width: 490px) {\n  .login-container[_ngcontent-%COMP%]   .login-wrapper[_ngcontent-%COMP%]   .hr-div-soft[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  margin-top: 29px;\n  margin-bottom: 42px;\n}\n.login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-control-group[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .submit-btn-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .submit-btn-wrapper[_ngcontent-%COMP%]   .forgot-email[_ngcontent-%COMP%] {\n  text-decoration-line: underline;\n  margin-bottom: 0;\n  font-family: Inter;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 17px;\n  letter-spacing: -0.01em;\n  text-align: left;\n}\n.login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .submit-btn-wrapper[_ngcontent-%COMP%]   .forgot-email[_ngcontent-%COMP%]:hover {\n  color: #fa754e;\n}\n.login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .submit-btn-wrapper[_ngcontent-%COMP%]   .submit-inner-wrapper[_ngcontent-%COMP%] {\n  display: inline-flex;\n  flex-direction: column;\n  align-items: center;\n}\n.login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .submit-btn-wrapper[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%] {\n  padding: 13px 39px;\n  box-shadow: 0px 19px 15px -14px rgba(0, 0, 0, 0.22);\n  font-family: Inter;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 700;\n  line-height: 16px;\n  letter-spacing: -0.009em;\n  text-align: left;\n  padding: 13px 65px;\n}\n.login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .submit-btn-wrapper[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%]:enabled {\n  background-color: #fa754e;\n  border: 1px solid #fa754e;\n  color: #ffffff;\n}\n.login-container[_ngcontent-%COMP%]   .another-action[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  padding-top: 10px;\n  padding-left: 10px;\n  color: #808080;\n  font-family: Inter;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 17px;\n  letter-spacing: 0em;\n  text-align: left;\n}\n@media screen and (max-width: 490px) {\n  .login-container[_ngcontent-%COMP%]   .another-action[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n}\n.login-container[_ngcontent-%COMP%]   .another-action[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--color-primary-500);\n  text-decoration: none;\n  font-weight: bold;\n}\n.login-container[_ngcontent-%COMP%]   .another-action[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n\n@media screen and (max-width: 790px) {\n  .login-container[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n  }\n  .login-container[_ngcontent-%COMP%]   .another-action[_ngcontent-%COMP%] {\n    margin-top: 0;\n  }\n}\n@media screen and (max-width: 490px) {\n  .login-container[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .login-container[_ngcontent-%COMP%]   .login-wrapper[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 20px 12px;\n  }\n  .login-container[_ngcontent-%COMP%]   .login-wrapper[_ngcontent-%COMP%]   .headings[_ngcontent-%COMP%]   .headings-inner[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .login-container[_ngcontent-%COMP%]   .login-wrapper[_ngcontent-%COMP%]   .headings[_ngcontent-%COMP%]   .headings-inner[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%], .login-container[_ngcontent-%COMP%]   .login-wrapper[_ngcontent-%COMP%]   .headings[_ngcontent-%COMP%]   .headings-inner[_ngcontent-%COMP%]   .sub-title[_ngcontent-%COMP%] {\n    width: 100%;\n    text-align: center;\n  }\n  .login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n    margin-bottom: 35px;\n  }\n  .login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .submit-btn-wrapper[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n  .login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .submit-btn-wrapper[_ngcontent-%COMP%]   .submit-inner-wrapper[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n  .login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .submit-btn-wrapper[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%] {\n    margin-bottom: 0;\n  }\n  .login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-control-group[_ngcontent-%COMP%] {\n    margin-bottom: 13px;\n  }\n}\n  .input-full-width {\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 0.5px 0.5px 0.5px inset;\n  border-radius: var(--border-radius);\n  background-color: var(--gauzy-input-background) !important;\n  border: unset;\n}\n\n  ngx-register .register-wrapper .input-full-width {\n  background-color: var(--gauzy-input-background) !important;\n}\n\n  ngx-register .register-wrapper.dark .input-full-width {\n  background-color: rgba(255, 255, 255, 0.15) !important;\n}\n\n.creation-content[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.creation-content[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 0.5rem;\n  font-weight: 600;\n  color: var(--text-basic-color);\n}\n.creation-content[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.creation-content[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%] {\n  margin-top: 0.25rem;\n  font-size: 0.75rem;\n  color: var(--status-danger);\n}\n.creation-content[_ngcontent-%COMP%]   .submit-btn-wrapper[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n  display: flex;\n  justify-content: center;\n}\n.creation-content[_ngcontent-%COMP%]   .submit-btn-wrapper[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%] {\n  min-width: 200px;\n  padding: 0.75rem 1.5rem;\n}\n.creation-content[_ngcontent-%COMP%]   .submit-btn-wrapper[_ngcontent-%COMP%]   .submit-btn.btn-pulse[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_pulse 1.5s infinite;\n}\n\n@keyframes _ngcontent-%COMP%_pulse {\n  0% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.05);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n@media (max-width: 768px) {\n  .login-container[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .login-container[_ngcontent-%COMP%]   .login-wrapper[_ngcontent-%COMP%] {\n    padding: 20px;\n    max-width: 100%;\n  }\n  .login-container[_ngcontent-%COMP%]   .login-wrapper[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n    padding-left: 10px;\n    padding-right: 10px;\n  }\n}\n@media (max-width: 480px) {\n  .login-container[_ngcontent-%COMP%] {\n    padding: 0.5rem;\n  }\n  .login-container[_ngcontent-%COMP%]   .login-wrapper[_ngcontent-%COMP%] {\n    padding: 15px;\n  }\n  .login-container[_ngcontent-%COMP%]   .login-wrapper[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n    padding-left: 5px;\n    padding-right: 5px;\n  }\n}\n[_nghost-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  position: relative;\n}\n\n.creation-content[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: none;\n}\n.creation-content[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%] {\n  margin-top: 21px;\n  margin-bottom: 42px;\n}\n.creation-content[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.creation-content[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 0.5rem;\n  font-weight: 600;\n  color: var(--text-basic-color);\n}\n.creation-content[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%] {\n  margin-top: 0.25rem;\n  font-size: 0.75rem;\n  color: var(--status-danger);\n}\n.creation-content[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .submit-btn-wrapper[_ngcontent-%COMP%] {\n  text-align: end;\n}\n@media screen and (max-width: 490px) {\n  .creation-content[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .submit-btn-wrapper[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n}\n.creation-content[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .submit-btn-wrapper[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%] {\n  padding: 13px 39px;\n  box-shadow: 0px 19px 15px -14px rgba(0, 0, 0, 0.22);\n  font-family: Inter;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 700;\n  line-height: 16px;\n  letter-spacing: -0.009em;\n  text-align: left;\n  padding: 13px 65px;\n}\n.creation-content[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .submit-btn-wrapper[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%]:enabled {\n  background-color: #fa754e;\n  border: 1px solid #fa754e;\n  color: #ffffff;\n}\n\n.workspace-creation-container[_ngcontent-%COMP%] {\n  min-width: 60%;\n}"],
        changeDetection: 0
      });
    }
  };
  return WorkspaceCreateComponent;
})();
WorkspaceCreateComponent = WorkspaceCreateComponent_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_16__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_17__/* .UntilDestroy */ .d)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_16__/* .__metadata */ .Sn)("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__/* .TranslateService */ .c$, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .UntypedFormBuilder */ .ze, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .ChangeDetectorRef */ .gRc, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_6__/* .ErrorHandlingService */ .X, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_7__/* .Store */ .il, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_8__/* .WorkspaceAuthService */ .J, _shared__WEBPACK_IMPORTED_MODULE_9__/* .CountdownTimerService */ .Q])], WorkspaceCreateComponent);


/***/ }),

/***/ 66285:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ OrganizationsStepFormModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14572);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10936);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(56383);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(55567);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(19223);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(51530);
/* harmony import */ var _image_uploader_image_uploader_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(54462);
/* harmony import */ var _remove_lodash_remove_lodash_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(88148);
/* harmony import */ var _tags_tags_color_input_tags_color_input_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(61444);
/* harmony import */ var _forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(9669);
/* harmony import */ var _forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(48052);
/* harmony import */ var _modules_currency__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(43629);
/* harmony import */ var _modules_country__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(93818);
/* harmony import */ var _modules_selectors__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(95041);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
















let OrganizationsStepFormModule = /*#__PURE__*/(() => {
  class OrganizationsStepFormModule {
    static {
      this.ɵfac = function OrganizationsStepFormModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || OrganizationsStepFormModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .$C({
        type: OrganizationsStepFormModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .G2t({
        providers: [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_1__/* .OrganizationDepartmentsService */ .I],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__/* .CommonModule */ .MD, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .FormsModule */ .YN, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .ReactiveFormsModule */ .X1, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbCardModule */ .lVF, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbButtonModule */ .P5N, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbIconModule */ .clu, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__/* .NgSelectModule */ .MQ, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbInputModule */ .pty, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbDatepickerModule */ .TgK, _image_uploader_image_uploader_module__WEBPACK_IMPORTED_MODULE_6__/* .ImageUploaderModule */ .M, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbSelectModule */ .VcP, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbToastrModule */ .EcJ.forRoot(), _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbListModule */ .PD_, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbStepperModule */ .QyE, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbToggleModule */ .jVr, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbSpinnerModule */ .gYs, _remove_lodash_remove_lodash_module__WEBPACK_IMPORTED_MODULE_7__/* .RemoveLodashModule */ .q, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbTooltipModule */ .IB0, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__/* .TranslateModule */ .h.forChild(), _tags_tags_color_input_tags_color_input_module__WEBPACK_IMPORTED_MODULE_9__/* .TagsColorInputModule */ .x, _modules_currency__WEBPACK_IMPORTED_MODULE_10__/* .CurrencyModule */ .C, _modules_country__WEBPACK_IMPORTED_MODULE_11__/* .CountryModule */ .j, _forms__WEBPACK_IMPORTED_MODULE_12__/* .LocationFormModule */ .C, _forms__WEBPACK_IMPORTED_MODULE_13__/* .LeafletMapModule */ .q, _modules_selectors__WEBPACK_IMPORTED_MODULE_14__/* .TimeZoneSelectorModule */ .F]
      });
    }
  }
  return OrganizationsStepFormModule;
})();

/***/ }),

/***/ 88148:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: () => (/* binding */ RemoveLodashModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);

let RemoveLodashModule = /*#__PURE__*/(() => {
  class RemoveLodashModule {
    static {
      this.ɵfac = function RemoveLodashModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || RemoveLodashModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .$C({
        type: RemoveLodashModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .G2t({});
    }
  }
  return RemoveLodashModule;
})();

/***/ }),

/***/ 95041:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ TimeZoneSelectorModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14572);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10936);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(55567);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19223);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);






let TimeZoneSelectorModule = /*#__PURE__*/(() => {
  class TimeZoneSelectorModule {
    static {
      this.ɵfac = function TimeZoneSelectorModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || TimeZoneSelectorModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .$C({
        type: TimeZoneSelectorModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .CommonModule */ .MD, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .FormsModule */ .YN, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .ReactiveFormsModule */ .X1, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__/* .TranslateModule */ .h.forChild(), _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__/* .NgSelectModule */ .MQ]
      });
    }
  }
  return TimeZoneSelectorModule;
})();

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

/***/ })

}]);