"use strict";
(self["webpackChunkgauzy"] = self["webpackChunkgauzy"] || []).push([[1588],{

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

/***/ 8252:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ EditProfileFormModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14572);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10936);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(56383);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(55567);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(19223);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22688);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27038);
/* harmony import */ var _forms_user_forms_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(82202);
/* harmony import */ var _image_uploader_image_uploader_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(54462);
/* harmony import */ var _tags_tags_color_input_tags_color_input_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(61444);
/* harmony import */ var _language_language_selector__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(59743);
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(38834);
/* harmony import */ var _forms_fields__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(38434);
/* harmony import */ var _forms_fields__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(33288);
/* harmony import */ var _forms_fields__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(10726);
/* harmony import */ var _table_components__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(57832);
/* harmony import */ var _modules_selectors__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(95041);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
















let EditProfileFormModule = /*#__PURE__*/(() => {
  class EditProfileFormModule {
    static {
      this.ɵfac = function EditProfileFormModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || EditProfileFormModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .$C({
        type: EditProfileFormModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .G2t({
        providers: [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_1__/* .OrganizationsService */ .k, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_2__/* .RoleService */ .W],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__/* .CommonModule */ .MD, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .FormsModule */ .YN, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .ReactiveFormsModule */ .X1, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbButtonModule */ .P5N, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbCardModule */ .lVF, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbIconModule */ .clu, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbInputModule */ .pty, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbSelectModule */ .VcP, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbBadgeModule */ .iEK, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbFormFieldModule */ .NeG, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__/* .NgSelectModule */ .MQ, _tags_tags_color_input_tags_color_input_module__WEBPACK_IMPORTED_MODULE_7__/* .TagsColorInputModule */ .x, _forms_user_forms_module__WEBPACK_IMPORTED_MODULE_8__/* .UserFormsModule */ .D, _image_uploader_image_uploader_module__WEBPACK_IMPORTED_MODULE_9__/* .ImageUploaderModule */ .M, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__/* .TranslateModule */ .h.forChild(), _language_language_selector__WEBPACK_IMPORTED_MODULE_11__/* .LanguageSelectorModule */ .A, _shared_module__WEBPACK_IMPORTED_MODULE_12__/* .SharedModule */ .G, _forms_fields__WEBPACK_IMPORTED_MODULE_13__/* .PasswordFormFieldModule */ .G, _forms_fields__WEBPACK_IMPORTED_MODULE_14__/* .RoleFormFieldModule */ .N, _table_components__WEBPACK_IMPORTED_MODULE_15__/* .TableComponentsModule */ .p, _modules_selectors__WEBPACK_IMPORTED_MODULE_16__/* .TimeZoneSelectorModule */ .F, _forms_fields__WEBPACK_IMPORTED_MODULE_17__/* .PhoneFormInputModule */ .n]
      });
    }
  }
  return EditProfileFormModule;
})();

/***/ }),

/***/ 10409:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   h: () => (/* binding */ EditProfileFormComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(73014);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(55598);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10936);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(41598);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4644);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4478);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(39855);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(52738);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(80189);
/* harmony import */ var _gauzy_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(99253);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(13271);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6992);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(92553);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(36042);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(57044);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(71924);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(15480);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(54263);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(27038);
/* harmony import */ var _forms_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(78870);
/* harmony import */ var _regex__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(84059);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(14572);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(56383);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(55567);
/* harmony import */ var _tags_tags_color_input_tags_color_input_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(62177);
/* harmony import */ var _image_uploader_image_uploader_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(79455);
/* harmony import */ var _language_language_selector_language_selector_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(12624);
/* harmony import */ var _directives_autocomplete_off_directive__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(21663);
/* harmony import */ var _directives_img_directive__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(71466);
/* harmony import */ var _forms_fields_password_password_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(12467);
/* harmony import */ var _forms_fields_role_role_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(33589);
/* harmony import */ var _table_components_role_role_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(53291);
/* harmony import */ var _modules_selectors_timezone_selector_timezone_selector_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(73230);
/* harmony import */ var _forms_fields_phone_phone_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(96247);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(19223);

var EditProfileFormComponent_1;



























const _c0 = a0 => ({
  opacity: a0
});
function EditProfileFormComponent_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainer"] */ .eu8(0);
  }
}
function EditProfileFormComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(0, "gauzy-role", 33);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("value", ctx_r1.role);
  }
}
function EditProfileFormComponent_div_29_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(2, 1, "PROFILE_PAGE.VALIDATION.PASSWORDS_DO_NOT_MATCH"), " ");
  }
}
function EditProfileFormComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, EditProfileFormComponent_div_29_div_1_Template, 3, 3, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r1.form.get("repeatPassword").errors.mustMatch);
  }
}
function EditProfileFormComponent_div_36_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(2, 1, "PROFILE_PAGE.VALIDATION.EMAIL_REQUIRED"), " ");
  }
}
function EditProfileFormComponent_div_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, EditProfileFormComponent_div_36_div_1_Template, 3, 3, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r1.form.get("email").errors.required);
  }
}
function EditProfileFormComponent_div_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 24)(1, "ngx-role-form-field", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("selectedChange", function EditProfileFormComponent_div_41_Template_ngx_role_form_field_selectedChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.onSelectionChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("id", "role")("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(2, 4, "FORM.PLACEHOLDERS.ROLE"))("label", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(3, 6, "FORM.LABELS.ROLE"))("excludes", ctx_r1.excludes);
  }
}
function EditProfileFormComponent_ng_template_63_img_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "img", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("mouseenter", function EditProfileFormComponent_ng_template_63_img_9_Template_img_mouseenter_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.hoverState = true);
    })("mouseleave", function EditProfileFormComponent_ng_template_63_img_9_Template_img_mouseleave_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.hoverState = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("src", ctx_r1.form.get("imageUrl").value, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵsanitizeUrl"] */ .B4B);
  }
}
function EditProfileFormComponent_ng_template_63_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "ngx-image-uploader", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("changeHoverState", function EditProfileFormComponent_ng_template_63_Template_ngx_image_uploader_changeHoverState_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.hoverState = $event);
    })("uploadedImageAsset", function EditProfileFormComponent_ng_template_63_Template_ngx_image_uploader_uploadedImageAsset_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.updateImageAsset($event));
    })("uploadImageAssetError", function EditProfileFormComponent_ng_template_63_Template_ngx_image_uploader_uploadImageAssetError_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.handleImageUploadError($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnamespaceSVG"] */ .qSk();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(1, "svg", 38)(2, "defs");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(3, "path", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(4, "g", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(5, "circle", 41)(6, "circle", 42)(7, "use", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnamespaceHTML"] */ .joV();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(8, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(9, EditProfileFormComponent_ng_template_63_img_9_Template, 1, 1, "img", 45);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction1"] */ .eq3(3, _c0, ctx_r1.hoverState ? "1" : "0.3"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction1"] */ .eq3(5, _c0, ctx_r1.hoverState ? "0.2" : "0"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", !!ctx_r1.form);
  }
}
let EditProfileFormComponent = /*#__PURE__*/(() => {
  let EditProfileFormComponent = class EditProfileFormComponent {
    static {
      EditProfileFormComponent_1 = this;
    }
    get selectedUser() {
      return this._selectedUser;
    }
    set selectedUser(value) {
      this._selectedUser = value;
    }
    get allowRoleChange() {
      return this._allowRoleChange;
    }
    set allowRoleChange(value) {
      this._allowRoleChange = value;
    }
    static buildForm(fb) {
      return fb.group({
        firstName: [],
        lastName: [],
        email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .Validators */ .k0.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .Validators */ .k0.email]],
        imageUrl: [{
          value: null,
          disabled: true
        }],
        imageId: [],
        password: [],
        repeatPassword: [],
        role: [],
        tags: [],
        preferredLanguage: [],
        timeZone: [],
        timeFormat: [],
        phoneNumber: []
      }, {
        validators: [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_2__/* .MatchValidator */ .e.mustMatch('password', 'repeatPassword')]
      });
    }
    constructor(_fb, _authService, _userService, _store, _toastrService, _errorHandler, _roleService) {
      this._fb = _fb;
      this._authService = _authService;
      this._userService = _userService;
      this._store = _store;
      this._toastrService = _toastrService;
      this._errorHandler = _errorHandler;
      this._roleService = _roleService;
      this.FormHelpers = _forms_helpers__WEBPACK_IMPORTED_MODULE_3__/* .FormHelpers */ .k;
      this.listOfTimeFormats = _gauzy_constants__WEBPACK_IMPORTED_MODULE_4__/* .DEFAULT_TIME_FORMATS */ .Fo;
      this.user$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__/* .Subject */ .B();
      /*
       * Getter & Setter for allow role change
       */
      this._allowRoleChange = false;
      this.userSubmitted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .bkB();
      this.form = EditProfileFormComponent_1.buildForm(this._fb);
      this.excludes = [];
    }
    ngOnInit() {
      var _this = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(function* () {
        _this.excludeRoles();
        _this.user$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__/* .debounceTime */ .B)(100), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__/* .tap */ .M)(() => _this.getUserProfile()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__/* .untilDestroyed */ .s)(_this)).subscribe();
        _this._store.user$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__/* .filter */ .p)(user => !!user), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__/* .tap */ .M)(user => _this.user = user), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__/* .tap */ .M)(() => _this.user$.next(true)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__/* .untilDestroyed */ .s)(_this)).subscribe();
      })();
    }
    /**
     * Excludes roles based on the user's permissions.
     * Adds the SUPER_ADMIN role to the excludes list if the user lacks SUPER_ADMIN privileges.
     */
    excludeRoles() {
      var _this2 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(function* () {
        try {
          // Check if the user has the SUPER_ADMIN role
          const hasSuperAdminRole = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_11__/* .firstValueFrom */ ._)(_this2._authService.hasRole([_gauzy_contracts__WEBPACK_IMPORTED_MODULE_12__/* .RolesEnum */ .$.SUPER_ADMIN]));
          // Add SUPER_ADMIN to the excludes list if the user lacks the role
          if (!hasSuperAdminRole) {
            _this2.excludes.push(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_12__/* .RolesEnum */ .$.SUPER_ADMIN);
          }
        } catch (error) {
          _this2._errorHandler?.handleError(error); // Optional error handling if applicable
        }
      })();
    }
    /**
     * Retrieves the profile of the selected user or the current user.
     * Fetches user details including tags and role, and updates the form.
     */
    getUserProfile() {
      var _this3 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(function* () {
        try {
          // Get the user ID from the selected user or fallback to the current user
          const userId = _this3.selectedUser?.id || _this3.user?.id;
          if (!userId) {
            throw new Error('User ID is missing.');
          }
          // Fetch user details with specific relations
          const user = yield _this3._userService.getUserById(userId, ['tags', 'role']);
          // Patch the form with the retrieved user data
          _this3._patchForm({
            ...user
          });
        } catch (error) {
          _this3._errorHandler?.handleError(error); // Handle errors gracefully
        }
      })();
    }
    handleImageUploadError(error) {
      this._toastrService.danger(error);
    }
    updateImageAsset(image) {
      var _this4 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(function* () {
        _this4._store.user = {
          ..._this4._store.user,
          imageId: image.id
        };
        let request = {
          imageId: image.id
        };
        if (_this4.allowRoleChange) {
          const {
            tenantId
          } = _this4._store.user;
          const role = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_11__/* .firstValueFrom */ ._)(_this4._roleService.getRoleByOptions({
            name: _this4.form.get('role').value.name,
            tenantId
          }));
          request = {
            ...request,
            role
          };
        }
        try {
          yield _this4._userService.update(_this4.selectedUser ? _this4.selectedUser.id : _this4._store.userId, request).then(res => {
            try {
              if (res) {
                _this4._store.user = {
                  ..._this4._store.user,
                  imageUrl: res.imageUrl
                };
              }
              _this4._toastrService.success('TOASTR.MESSAGE.IMAGE_UPDATED');
            } catch (error) {
              console.log('Error while uploading profile avatar', error);
            }
          });
        } catch (error) {
          _this4._errorHandler.handleError(error);
        }
      })();
    }
    submitForm() {
      var _this5 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(function* () {
        const {
          timeFormat,
          timeZone
        } = _this5.form.value;
        const {
          email,
          firstName,
          lastName,
          tags,
          preferredLanguage,
          password,
          phoneNumber
        } = _this5.form.value;
        if (!_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_13__/* .EmailValidator */ .D.isValid(email, _regex__WEBPACK_IMPORTED_MODULE_14__/* .patterns */ .q.email)) {
          _this5._toastrService.error('TOASTR.MESSAGE.EMAIL_SHOULD_BE_REAL');
          return;
        }
        let request = {
          email,
          firstName,
          lastName,
          tags,
          preferredLanguage,
          timeZone,
          timeFormat,
          phoneNumber
        };
        if (password) {
          request = {
            ...request,
            hash: password
          };
        }
        if (_this5.allowRoleChange) {
          const {
            tenantId
          } = _this5._store.user;
          const role = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_11__/* .firstValueFrom */ ._)(_this5._roleService.getRoleByOptions({
            name: _this5.form.get('role').value.name,
            tenantId
          }));
          request = {
            ...request,
            role
          };
        }
        try {
          yield _this5._userService.update(_this5.selectedUser ? _this5.selectedUser.id : _this5._store.userId, request).then(() => {
            if ((_this5.selectedUser ? _this5.selectedUser.id : _this5._store.userId) === _this5._store.user.id) {
              _this5._store.user.email = request.email;
            }
            _this5._toastrService.success('TOASTR.MESSAGE.PROFILE_UPDATED');
            _this5.userSubmitted.emit();
            /**
             * selectedUser is null for edit profile and populated in User edit
             * Update app language when current user's profile is modified.
             */
            if (_this5.selectedUser && _this5.selectedUser.id !== _this5._store.userId) {
              return;
            }
            _this5._store.preferredLanguage = preferredLanguage;
          });
        } catch (error) {
          _this5._errorHandler.handleError(error);
        }
      })();
    }
    _patchForm(user) {
      if (!user) {
        return;
      }
      this.form.patchValue({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        imageUrl: user.imageUrl,
        imageId: user.imageId,
        role: user.role,
        tags: user.tags,
        preferredLanguage: user.preferredLanguage,
        timeZone: user.timeZone,
        timeFormat: user.timeFormat,
        phoneNumber: user.phoneNumber
      });
      this.role = user.role;
    }
    /**
     *
     * @param tags
     */
    selectedTagsHandler(tags) {
      this.form.get('tags').setValue(tags);
      this.form.get('tags').updateValueAndValidity();
    }
    /**
     * On Selection Change
     * @param role
     */
    onSelectionChange(role) {
      this.form.get('role').setValue(role);
      this.form.get('role').updateValueAndValidity();
    }
    ngOnDestroy() {}
    static {
      this.ɵfac = function EditProfileFormComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || EditProfileFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .UntypedFormBuilder */ .ze), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_15__/* .AuthService */ .u), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_16__/* .UsersService */ .g), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_17__/* .Store */ .il), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_18__/* .ToastrService */ .t), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_19__/* .ErrorHandlingService */ .X), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_20__/* .RoleService */ .W));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: EditProfileFormComponent,
        selectors: [["ngx-profile"]],
        inputs: {
          selectedUser: "selectedUser",
          allowRoleChange: "allowRoleChange"
        },
        outputs: {
          userSubmitted: "userSubmitted"
        },
        standalone: false,
        decls: 65,
        vars: 55,
        consts: [["imageUploaderTemplate", ""], [1, "card-scroll"], [1, "content"], [1, "employee-container"], [1, "employee-photo"], [4, "ngTemplateOutlet"], [3, "ngIf"], [1, "employee-form"], ["autocomplete-off", "", 3, "formGroup"], [1, "row"], [1, "col"], [1, "form-group"], ["for", "firstName", 1, "label", 3, "innerText"], ["fullWidth", "", "id", "firstName", "type", "text", "nbInput", "", "formControlName", "firstName"], ["for", "lastName", 1, "label", 3, "innerText"], ["fullWidth", "", "id", "lastName", "type", "text", "nbInput", "", "formControlName", "lastName"], ["id", "'password'", "formControlName", "password", 3, "placeholder", "label", "ctrl", "autocomplete"], ["formControlName", "repeatPassword", 3, "id", "placeholder", "label", "ctrl", "autocomplete"], ["class", "invalid-feedback d-block", 4, "ngIf"], [1, "col-6"], ["for", "email", 1, "label", 3, "innerText"], ["fullWidth", "", "id", "email", "type", "email", "nbInput", "", "formControlName", "email", 3, "status"], [3, "selectedTagsEvent", "selectedTags", "isTenantLevel"], ["class", "col-sm-6", 4, "ngIf"], [1, "col-sm-6"], ["for", "preferredLanguage", 1, "label", 3, "innerText"], ["formControlName", "preferredLanguage", 1, "d-block", 3, "placeholder", "template"], ["formControlName", "timeZone"], ["formControlName", "phoneNumber"], ["for", "timeZone", 1, "label"], ["id", "timeFormat", "appendTo", "body", "formControlName", "timeFormat", 3, "itemsChange", "items", "placeholder", "searchable", "clearable"], [1, "actions"], ["nbButton", "", "status", "success", 3, "click", "disabled"], [1, "badge", 3, "value"], [1, "invalid-feedback", "d-block"], [4, "ngIf"], ["formControlName", "role", 3, "selectedChange", "id", "placeholder", "label", "excludes"], [3, "changeHoverState", "uploadedImageAsset", "uploadImageAssetError"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "width", "68", "height", "68", "viewBox", "0 0 68 68", 3, "ngStyle"], ["id", "a", "d", "M28.667 31.333a2 2 0 1 0-.002-4.001 2 2 0 0 0 .002 4.001m13.333 12H26.748l9.34-7.793c.328-.279.923-.277 1.244-.001l6.001 5.12V42c0 .736-.597 1.333-1.333 1.333M26 24.667h16c.736 0 1.333.597 1.333 1.333v11.152l-4.27-3.643c-1.32-1.122-3.386-1.122-4.694-.008l-9.702 8.096V26c0-.736.597-1.333 1.333-1.333M42 22H26c-2.205 0-4 1.795-4 4v16c0 2.205 1.795 4 4 4h16c2.205 0 4-1.795 4-4V26c0-2.205-1.795-4-4-4"], ["fill", "none", "fill-rule", "evenodd"], ["cx", "34", "cy", "34", "r", "34", "fill", "#0091FF", "opacity", ".3"], ["cx", "34", "cy", "34", "r", "26", "fill", "#0091FF", "opacity", ".9"], ["fill", "#FFF", "fill-rule", "nonzero", 0, "xlink", "href", "#a"], [1, "image-overlay", 3, "ngStyle"], ["alt", "Profile Photo", 3, "src", "mouseenter", "mouseleave", 4, "ngIf"], ["alt", "Profile Photo", 3, "mouseenter", "mouseleave", "src"]],
        template: function EditProfileFormComponent_Template(rf, ctx) {
          if (rf & 1) {
            const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-card", 1)(1, "nb-card-body")(2, "div", 2)(3, "div", 3)(4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(5, EditProfileFormComponent_ng_container_5_Template, 1, 0, "ng-container", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(6, EditProfileFormComponent_ng_template_6_Template, 1, 1, "ng-template", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(7, "div", 7)(8, "form", 8)(9, "div", 9)(10, "div", 10)(11, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(12, "label", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(13, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(14, "input", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(15, "div", 10)(16, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(17, "label", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(18, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(19, "input", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(20, "div", 9)(21, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(22, "ngx-password-form-field", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(23, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(24, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(25, "div", 10)(26, "ngx-password-form-field", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(27, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(28, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(29, EditProfileFormComponent_div_29_Template, 2, 1, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(30, "div", 9)(31, "div", 19)(32, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(33, "label", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(34, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(35, "input", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(36, EditProfileFormComponent_div_36_Template, 2, 1, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(37, "div", 19)(38, "div", 11)(39, "ga-tags-color-input", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("selectedTagsEvent", function EditProfileFormComponent_Template_ga_tags_color_input_selectedTagsEvent_39_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx.selectedTagsHandler($event));
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(40, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(41, EditProfileFormComponent_div_41_Template, 4, 8, "div", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(42, "div", 24)(43, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(44, "label", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(45, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(46, "ngx-language-selector", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(47, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(48, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(49, "ga-timezone-selector", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(50, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(51, "ngx-phone-form-input", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(52, "div", 19)(53, "div", 11)(54, "label", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(55);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(56, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(57, "ng-select", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(58, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayListener"] */ .mxI("itemsChange", function EditProfileFormComponent_Template_ng_select_itemsChange_57_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayBindingSet"] */ .DH7(ctx.listOfTimeFormats, $event) || (ctx.listOfTimeFormats = $event);
              return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj($event);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(59, "div", 31)(60, "button", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function EditProfileFormComponent_Template_button_click_60_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx.submitForm());
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(61);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(62, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()()()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(63, EditProfileFormComponent_ng_template_63_Template, 10, 7, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplateRefExtractor"] */ .C5r);
          }
          if (rf & 2) {
            const imageUploaderTemplate_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(64);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngTemplateOutlet", imageUploaderTemplate_r6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.role);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("formGroup", ctx.form);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("innerText", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(13, 31, "PROFILE_PAGE.FIRST_NAME"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("innerText", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(18, 33, "PROFILE_PAGE.LAST_NAME"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(23, 35, "PROFILE_PAGE.PASSWORD"))("label", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(24, 37, "PROFILE_PAGE.PASSWORD"))("ctrl", ctx.form.get("password"))("autocomplete", "new-password");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("id", "reset-password")("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(27, 39, "PROFILE_PAGE.REPEAT_PASSWORD"))("label", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(28, 41, "PROFILE_PAGE.REPEAT_PASSWORD"))("ctrl", ctx.form.get("repeatPassword"))("autocomplete", "new-password");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.FormHelpers.isInvalidControl(ctx.form, "repeatPassword"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("innerText", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(34, 43, "PROFILE_PAGE.EMAIL"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("status", ctx.FormHelpers.isInvalidControl(ctx.form, "email") ? "danger" : "basic");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.FormHelpers.isInvalidControl(ctx.form, "email"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("selectedTags", ctx.form.get("tags").value)("isTenantLevel", true);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.allowRoleChange);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("innerText", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(45, 45, "FORM.LABELS.PREFERRED_LANGUAGE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(47, 47, "FORM.PLACEHOLDERS.PREFERRED_LANGUAGE"))("template", "ng-select");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(56, 49, "FORM.LABELS.TIME_FORMAT"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayProperty"] */ .R50("items", ctx.listOfTimeFormats);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(58, 51, "FORM.PLACEHOLDERS.TIME_FORMAT"))("searchable", false)("clearable", false);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("disabled", ctx.form.invalid);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(62, 53, "PROFILE_PAGE.SAVE"), " ");
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_21__/* .NgIf */ .bT, _angular_common__WEBPACK_IMPORTED_MODULE_21__/* .NgTemplateOutlet */ .T3, _angular_common__WEBPACK_IMPORTED_MODULE_21__/* .NgStyle */ .B3, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* ["ɵNgNoValidate"] */ .qT, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .DefaultValueAccessor */ .me, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .NgControlStatus */ .BC, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .NgControlStatusGroup */ .cb, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .FormGroupDirective */ .j4, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .FormControlName */ .JD, _nebular_theme__WEBPACK_IMPORTED_MODULE_22__/* .NbButtonComponent */ .YP2, _nebular_theme__WEBPACK_IMPORTED_MODULE_22__/* .NbCardComponent */ .SrT, _nebular_theme__WEBPACK_IMPORTED_MODULE_22__/* .NbCardBodyComponent */ .KH5, _nebular_theme__WEBPACK_IMPORTED_MODULE_22__/* .NbInputDirective */ .i6h, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_23__/* .NgSelectComponent */ .vr, _tags_tags_color_input_tags_color_input_component__WEBPACK_IMPORTED_MODULE_24__/* .TagsColorInputComponent */ .i, _image_uploader_image_uploader_component__WEBPACK_IMPORTED_MODULE_25__/* .ImageUploaderComponent */ .t, _language_language_selector_language_selector_component__WEBPACK_IMPORTED_MODULE_26__/* .LanguageSelectorComponent */ .t, _directives_autocomplete_off_directive__WEBPACK_IMPORTED_MODULE_27__/* .AutocompleteOffDirective */ .h, _directives_img_directive__WEBPACK_IMPORTED_MODULE_28__/* .ImgDirective */ .z, _forms_fields_password_password_component__WEBPACK_IMPORTED_MODULE_29__/* .PasswordFormFieldComponent */ .N, _forms_fields_role_role_component__WEBPACK_IMPORTED_MODULE_30__/* .RoleFormFieldComponent */ .U, _table_components_role_role_component__WEBPACK_IMPORTED_MODULE_31__/* .RoleComponent */ .a, _modules_selectors_timezone_selector_timezone_selector_component__WEBPACK_IMPORTED_MODULE_32__/* .TimeZoneSelectorComponent */ .S, _forms_fields_phone_phone_component__WEBPACK_IMPORTED_MODULE_33__/* .PhoneFormInputComponent */ .Y, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_34__/* .TranslatePipe */ .D9],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]     input, \n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]     nb-select.appearance-outline.status-basic .select-button, \n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]     .ng-select .ng-select-container {\n  background-color: var(--gauzy-card-1) !important;\n  border: none;\n  height: 42px !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder, \n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {\n  top: unset !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]     label, \n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]     .label {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  color: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]     textarea {\n  background-color: var(--gauzy-card-1) !important;\n  border: none;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]     .ng-select .ng-select-container input, \n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]     nb-tag-list input {\n  background-color: unset !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]     ngx-image-uploader input {\n  height: 100% !important;\n}\n\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  padding: 50px 70px;\n}\n@media only screen and (max-width: 1532px) {\n  [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n    padding: 30px 40px;\n  }\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .navigate[_ngcontent-%COMP%] {\n  display: flex;\n  margin-bottom: 35px;\n  cursor: pointer;\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .navigate[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: 7px;\n  font-size: 14px;\n  color: #2a2c39;\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  display: flex;\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .employee-container[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  transition: transform 150ms ease-in-out;\n}\n[dir=rtl]   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .employee-container[_ngcontent-%COMP%] {\n  padding-left: 70px;\n}\n[dir=ltr]   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .employee-container[_ngcontent-%COMP%] {\n  padding-right: 70px;\n}\n[dir=rtl]   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .employee-container[_ngcontent-%COMP%] {\n  margin-left: 70px;\n}\n[dir=ltr]   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .employee-container[_ngcontent-%COMP%] {\n  margin-right: 70px;\n}\n[dir=rtl]   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .employee-container[_ngcontent-%COMP%] {\n  border-left: 1px solid rgba(0, 0, 0, 0.1);\n}\n[dir=ltr]   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .employee-container[_ngcontent-%COMP%] {\n  border-right: 1px solid rgba(0, 0, 0, 0.1);\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .employee-container[_ngcontent-%COMP%]   .employee-photo[_ngcontent-%COMP%] {\n  width: fit-content;\n  height: 200px;\n  position: relative;\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .employee-container[_ngcontent-%COMP%]   .employee-photo[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  pointer-events: none;\n  background: black;\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  border-radius: 13px;\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .employee-container[_ngcontent-%COMP%]   .employee-photo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 200px;\n  border-radius: 13px;\n  object-fit: cover;\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .employee-container[_ngcontent-%COMP%]   .employee-photo[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100% !important;\n  opacity: 0;\n  position: absolute;\n  z-index: 3;\n  cursor: pointer;\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .employee-container[_ngcontent-%COMP%]   .employee-photo[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  z-index: 2;\n  transition: opacity 0.2s ease-in;\n  opacity: 0.3;\n  position: absolute;\n  top: calc(50% - 34px);\n  left: calc(50% - 34px);\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .employee-container[_ngcontent-%COMP%]   .employee-photo[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   g[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%] {\n  fill: var(--text-primary-color);\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  position: relative;\n  margin-top: 10px;\n  display: flex;\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .employee-form[_ngcontent-%COMP%] {\n  width: 60%;\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  width: 100%;\n  margin-top: 30px;\n}"]
      });
    }
  };
  return EditProfileFormComponent;
})();
EditProfileFormComponent = EditProfileFormComponent_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_35__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__/* .UntilDestroy */ .d)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_35__/* .__metadata */ .Sn)("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .UntypedFormBuilder */ .ze, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_15__/* .AuthService */ .u, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_16__/* .UsersService */ .g, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_17__/* .Store */ .il, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_18__/* .ToastrService */ .t, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_19__/* .ErrorHandlingService */ .X, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_20__/* .RoleService */ .W])], EditProfileFormComponent);


/***/ }),

/***/ 10726:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   n: () => (/* binding */ PhoneFormInputModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14572);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10936);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(56383);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19223);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);






let PhoneFormInputModule = /*#__PURE__*/(() => {
  class PhoneFormInputModule {
    static {
      this.ɵfac = function PhoneFormInputModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || PhoneFormInputModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .$C({
        type: PhoneFormInputModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .CommonModule */ .MD, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .FormsModule */ .YN, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .ReactiveFormsModule */ .X1, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__/* .TranslateModule */ .h.forChild(), _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbInputModule */ .pty]
      });
    }
  }
  return PhoneFormInputModule;
})();

/***/ }),

/***/ 12624:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   t: () => (/* binding */ LanguageSelectorComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73014);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(55598);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(25023);
/* harmony import */ var _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38546);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(19223);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(71924);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52738);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39855);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(41598);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(10936);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(14572);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(56383);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(55567);

















function LanguageSelectorComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainer"] */ .eu8(0);
  }
}
function LanguageSelectorComponent_ng_template_1_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(3);
  }
  if (rf & 2) {
    const newLanguageName_r3 = ctx.searchTerm;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(2, 2, "LANGUAGE_PAGE.ADD_NEW_LANGUAGE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(": ", newLanguageName_r3, " ");
  }
}
function LanguageSelectorComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "ng-select", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("change", function LanguageSelectorComponent_ng_template_1_Template_ng_select_change_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.onChangeLanguage($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayListener"] */ .mxI("ngModelChange", function LanguageSelectorComponent_ng_template_1_Template_ng_select_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayBindingSet"] */ .DH7(ctx_r1.selectedLanguageCode, $event) || (ctx_r1.selectedLanguageCode = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, LanguageSelectorComponent_ng_template_1_ng_template_1_Template, 4, 4, "ng-template", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("items", ctx_r1.languages)("loading", ctx_r1.loading)("addTag", ctx_r1.addTag ? ctx_r1.addLanguage : null)("closeOnSelect", true)("size", ctx_r1.size)("clearable", ctx_r1.clearable)("placeholder", ctx_r1.placeholder);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayProperty"] */ .R50("ngModel", ctx_r1.selectedLanguageCode);
  }
}
function LanguageSelectorComponent_ng_template_3_nb_option_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const language_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("value", language_r5.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", language_r5.name, " ");
  }
}
function LanguageSelectorComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-select", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("selectedChange", function LanguageSelectorComponent_ng_template_3_Template_nb_select_selectedChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.onSelectedChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayListener"] */ .mxI("ngModelChange", function LanguageSelectorComponent_ng_template_3_Template_nb_select_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayBindingSet"] */ .DH7(ctx_r1.selectedLanguageCode, $event) || (ctx_r1.selectedLanguageCode = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, LanguageSelectorComponent_ng_template_3_nb_option_1_Template, 2, 2, "nb-option", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("size", ctx_r1.size)("placeholder", ctx_r1.placeholder);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayProperty"] */ .R50("ngModel", ctx_r1.selectedLanguageCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx_r1.languages);
  }
}
let LanguageSelectorComponent = /*#__PURE__*/(() => {
  let LanguageSelectorComponent = class LanguageSelectorComponent extends _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_1__/* .TranslationBaseComponent */ .K {
    get placeholder() {
      return this._placeholder;
    }
    set placeholder(value) {
      this._placeholder = value;
    }
    get clearable() {
      return this._clearable;
    }
    set clearable(value) {
      this._clearable = value;
    }
    get addTag() {
      return this._addTag;
    }
    set addTag(value) {
      this._addTag = value;
    }
    get selectedLanguageCode() {
      return this._selectedLanguageCode;
    }
    set selectedLanguageCode(value) {
      if (value) {
        this._selectedLanguageCode = value;
        this.onChange(value);
        this.onTouch(value);
      }
    }
    get template() {
      return this._template;
    }
    set template(value) {
      this._template = value;
    }
    get size() {
      return this._size;
    }
    set size(value) {
      this._size = value;
    }
    constructor(languagesService, translate, store, cd) {
      var _this;
      super(translate);
      _this = this;
      this.languagesService = languagesService;
      this.translate = translate;
      this.store = store;
      this.cd = cd;
      this.onChange = () => {};
      this.onTouch = () => {};
      /*
       * Getter & Setter for dynamic placeholder
       */
      this._placeholder = this.getTranslation('MENU.LANGUAGE');
      /*
       * Getter & Setter for automatic language selection as per selected language
       */
      this.selectBy = 'code';
      /*
       * Getter & Setter for dynamic template size
       */
      this._size = 'medium';
      this.selectedLanguageEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .bkB();
      this.addLanguage = /*#__PURE__*/function () {
        var _ref = (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(function* (languageName) {
          const newLanguage = {
            name: languageName,
            color: '#' + Math.floor(Math.random() * 16777215).toString(16),
            description: ''
          };
          _this.loading = true;
          const language = yield _this.languagesService.insertLanguage(newLanguage);
          _this.loading = false;
          return language;
        });
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }();
      this.store.preferredLanguage$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .filter */ .p)(preferredLanguage => !!preferredLanguage), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .tap */ .M)(preferredLanguage => this.selectedLanguageCode = preferredLanguage), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .untilDestroyed */ .s)(this)).subscribe();
    }
    onChangeLanguage(currentSelection) {
      let selectedLanguage;
      if (this.selectBy === 'object') {
        selectedLanguage = currentSelection;
      } else {
        selectedLanguage = currentSelection?.code || this.selectedLanguageCode;
      }
      this.selectedLanguageEvent.emit(selectedLanguage);
    }
    onSelectedChange(code) {
      this.cd.detectChanges();
      let selectedLanguage;
      if (this.selectBy === 'object') {
        selectedLanguage = this.getLanguageByCode(code);
      } else {
        selectedLanguage = code || this.selectedLanguageCode;
      }
      this.selectedLanguageEvent.emit(selectedLanguage);
    }
    writeValue(value) {
      this._selectedLanguageCode = value;
    }
    registerOnChange(fn) {
      this.onChange = fn;
    }
    registerOnTouched(fn) {
      this.onTouch = fn;
    }
    ngOnInit() {
      var _this2 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(function* () {
        yield _this2.getAllLanguages();
        if (_this2.selectBy === 'object') {
          _this2.checkPreFilledLanguage();
        }
      })();
    }
    getAllLanguages() {
      var _this3 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(function* () {
        const {
          items
        } = yield _this3.languagesService.getAllLanguages();
        _this3.languages = items;
      })();
    }
    checkPreFilledLanguage() {
      if (!this.selectedLanguageCode) {
        return;
      }
      if (this.languages?.length > 0) {
        const selectedLanguage = this.getLanguageByCode(this.selectedLanguageCode);
        this.onChangeLanguage(selectedLanguage);
      }
    }
    getLanguageByCode(code) {
      return this.languages.find(language => code === language.code);
    }
    static {
      this.ɵfac = function LanguageSelectorComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || LanguageSelectorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_6__/* .LanguagesService */ .D), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__/* .TranslateService */ .c$), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_8__/* .Store */ .il), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* .ChangeDetectorRef */ .gRc));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: LanguageSelectorComponent,
        selectors: [["ngx-language-selector"]],
        inputs: {
          placeholder: "placeholder",
          clearable: "clearable",
          addTag: "addTag",
          selectedLanguageCode: "selectedLanguageCode",
          selectBy: "selectBy",
          template: "template",
          size: "size"
        },
        outputs: {
          selectedLanguageEvent: "selectedLanguageEvent"
        },
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵProvidersFeature"] */ .Jv_([{
          provide: _angular_forms__WEBPACK_IMPORTED_MODULE_9__/* .NG_VALUE_ACCESSOR */ .kq,
          useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__/* .forwardRef */ .Rfq)(() => LanguageSelectorComponent),
          multi: true
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
        decls: 5,
        vars: 3,
        consts: [["ngSelectTemplate", ""], ["nbSelectTemplate", ""], [4, "ngIf", "ngIfThen", "ngIfElse"], ["appendTo", "body", "bindLabel", "name", "bindValue", "code", 3, "change", "ngModelChange", "items", "loading", "addTag", "closeOnSelect", "size", "clearable", "placeholder", "ngModel"], ["ng-tag-tmp", ""], ["fullWidth", "", 3, "selectedChange", "ngModelChange", "size", "placeholder", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]],
        template: function LanguageSelectorComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(0, LanguageSelectorComponent_ng_container_0_Template, 1, 0, "ng-container", 2)(1, LanguageSelectorComponent_ng_template_1_Template, 2, 8, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplateRefExtractor"] */ .C5r)(3, LanguageSelectorComponent_ng_template_3_Template, 2, 4, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplateRefExtractor"] */ .C5r);
          }
          if (rf & 2) {
            const ngSelectTemplate_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(2);
            const nbSelectTemplate_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx._template === "ng-select")("ngIfThen", ngSelectTemplate_r6)("ngIfElse", nbSelectTemplate_r7);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__/* .NgForOf */ .Sq, _angular_common__WEBPACK_IMPORTED_MODULE_10__/* .NgIf */ .bT, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbSelectComponent */ .S81, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbOptionComponent */ .ZJ2, _angular_forms__WEBPACK_IMPORTED_MODULE_9__/* .NgControlStatus */ .BC, _angular_forms__WEBPACK_IMPORTED_MODULE_9__/* .NgModel */ .vS, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__/* .NgSelectComponent */ .vr, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__/* .NgTagTemplateDirective */ .BW, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__/* .TranslatePipe */ .D9],
        styles: [".language-color[_ngcontent-%COMP%] {\n  position: unset;\n  display: inline-flex;\n  align-self: center;\n  width: 1rem;\n  height: 1rem;\n  margin-right: 1em;\n  margin-left: 1em;\n}\n\n.language-label[_ngcontent-%COMP%] {\n  display: unset;\n  margin-right: 0.7em;\n}"]
      });
    }
  };
  LanguageSelectorComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .UntilDestroy */ .d)({
    checkProperties: true
  }), (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__metadata */ .Sn)("design:paramtypes", [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_6__/* .LanguagesService */ .D, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__/* .TranslateService */ .c$, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_8__/* .Store */ .il, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .ChangeDetectorRef */ .gRc])], LanguageSelectorComponent);
  return LanguageSelectorComponent;
})();


/***/ }),

/***/ 53291:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ RoleComponent)
/* harmony export */ });
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13271);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14572);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56383);
/* harmony import */ var _pipes_replace_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(25963);





function RoleComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "nb-badge", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "replace");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("status", ctx_r0.status)("text", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind3"] */ .brH(2, 2, ctx_r0.role == null ? null : ctx_r0.role.name, "_", " "));
  }
}
let RoleComponent = /*#__PURE__*/(() => {
  class RoleComponent {
    get status() {
      return this._status;
    }
    set status(value) {
      this._status = value;
    }
    get role() {
      return this._role;
    }
    set role(value) {
      this._role = value;
    }
    constructor() {}
    ngOnInit() {
      this.role = this.value;
      switch (this.role.name) {
        case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__/* .RolesEnum */ .$.ADMIN:
          this.status = 'primary';
          break;
        case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__/* .RolesEnum */ .$.CANDIDATE:
          this.status = 'control';
          break;
        case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__/* .RolesEnum */ .$.SUPER_ADMIN:
          this.status = 'success';
          break;
        case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__/* .RolesEnum */ .$.DATA_ENTRY:
          this.status = 'info';
          break;
        case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__/* .RolesEnum */ .$.INTERVIEWER:
          this.status = 'primary';
          break;
        case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__/* .RolesEnum */ .$.MANAGER:
          this.status = 'danger';
          break;
        case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__/* .RolesEnum */ .$.VIEWER:
          this.status = 'warning';
          break;
        case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__/* .RolesEnum */ .$.EMPLOYEE:
          this.status = 'info';
          break;
        default:
          break;
      }
    }
    static {
      this.ɵfac = function RoleComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || RoleComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: RoleComponent,
        selectors: [["gauzy-role"]],
        inputs: {
          value: "value",
          status: "status",
          role: "role"
        },
        standalone: false,
        decls: 2,
        vars: 1,
        consts: [[1, "badge-container"], [4, "ngIf"], ["position", "left", 3, "status", "text"]],
        template: function RoleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, RoleComponent_ng_container_1_Template, 3, 6, "ng-container", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.role);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__/* .NgIf */ .bT, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbBadgeComponent */ .XyX, _pipes_replace_pipe__WEBPACK_IMPORTED_MODULE_4__/* .ReplacePipe */ .J],
        styles: [".badge-container[_ngcontent-%COMP%]   nb-badge[_ngcontent-%COMP%] {\n  position: relative;\n  border-radius: 4px;\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 15px;\n  letter-spacing: 0em;\n  text-align: left;\n}"]
      });
    }
  }
  return RoleComponent;
})();

/***/ }),

/***/ 59743:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ LanguageSelectorModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14572);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10936);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56383);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(55567);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(19223);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25023);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);








let LanguageSelectorModule = /*#__PURE__*/(() => {
  class LanguageSelectorModule {
    static {
      this.ɵfac = function LanguageSelectorModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || LanguageSelectorModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .$C({
        type: LanguageSelectorModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .G2t({
        providers: [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_1__/* .LanguagesService */ .D],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__/* .CommonModule */ .MD, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbSelectModule */ .VcP, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbBadgeModule */ .iEK, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .FormsModule */ .YN, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__/* .NgSelectModule */ .MQ, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__/* .TranslateModule */ .h.forChild()]
      });
    }
  }
  return LanguageSelectorModule;
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

/***/ 96247:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Y: () => (/* binding */ PhoneFormInputComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(55598);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10936);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(41598);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56383);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19223);








let PhoneFormInputComponent = /*#__PURE__*/(() => {
  let PhoneFormInputComponent = class PhoneFormInputComponent {
    set phoneNumber(val) {
      this._phoneNumber = val;
      this.onChange(val);
      this.onTouched(val);
    }
    get phoneNumber() {
      return this._phoneNumber;
    }
    get placeholder() {
      return this._placeholder;
    }
    set placeholder(value) {
      this._placeholder = value;
    }
    constructor() {
      this.onChange = () => {};
      this.onTouched = () => {};
      this.onChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .bkB();
    }
    /**
     *
     */
    ngOnInit() {}
    /**
     *
     * @param value
     */
    writeValue(value) {
      if (value) {
        this._phoneNumber = value;
      }
    }
    /**
     *
     * @param fn
     */
    registerOnChange(fn) {
      this.onChange = fn;
    }
    /**
     *
     * @param fn
     */
    registerOnTouched(fn) {
      this.onTouched = fn;
    }
    /**
     *
     */
    ngOnDestroy() {}
    static {
      this.ɵfac = function PhoneFormInputComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || PhoneFormInputComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: PhoneFormInputComponent,
        selectors: [["ngx-phone-form-input"]],
        inputs: {
          phoneNumber: "phoneNumber",
          placeholder: "placeholder"
        },
        outputs: {
          onChanged: "onChanged"
        },
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵProvidersFeature"] */ .Jv_([{
          provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .NG_VALUE_ACCESSOR */ .kq,
          useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__/* .forwardRef */ .Rfq)(() => PhoneFormInputComponent),
          multi: true
        }])],
        decls: 6,
        vars: 7,
        consts: [[1, "form-group"], ["for", "phoneNumber", 1, "label"], ["fullWidth", "", "id", "phoneNumber", "type", "phoneNumber", "nbInput", "", 3, "ngModelChange", "placeholder", "ngModel"]],
        template: function PhoneFormInputComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 0)(1, "label", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(3, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(4, "input", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(5, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayListener"] */ .mxI("ngModelChange", function PhoneFormInputComponent_Template_input_ngModelChange_4_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayBindingSet"] */ .DH7(ctx.phoneNumber, $event) || (ctx.phoneNumber = $event);
              return $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(3, 3, "FORM.LABELS.PHONE_NUMBER"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(5, 5, ctx.placeholder || "FORM.PLACEHOLDERS.PHONE_NUMBER"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayProperty"] */ .R50("ngModel", ctx.phoneNumber);
          }
        },
        dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .DefaultValueAccessor */ .me, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .NgControlStatus */ .BC, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .NgModel */ .vS, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbInputDirective */ .i6h, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__/* .TranslatePipe */ .D9],
        encapsulation: 2
      });
    }
  };
  PhoneFormInputComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .UntilDestroy */ .d)({
    checkProperties: true
  }), (0,tslib__WEBPACK_IMPORTED_MODULE_4__/* .__metadata */ .Sn)("design:paramtypes", [])], PhoneFormInputComponent);
  return PhoneFormInputComponent;
})();


/***/ })

}]);