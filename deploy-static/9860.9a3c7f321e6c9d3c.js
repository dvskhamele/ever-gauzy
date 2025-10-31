"use strict";
(self["webpackChunkgauzy"] = self["webpackChunkgauzy"] || []).push([[9860],{

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

/***/ 37175:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: () => (/* binding */ OrganizationsMutationModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14572);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10936);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(56383);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(55567);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(19223);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(51530);
/* harmony import */ var _image_uploader_image_uploader_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(54462);
/* harmony import */ var _remove_lodash_remove_lodash_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(88148);
/* harmony import */ var _organizations_step_form_organizations_step_form_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(66285);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);












let OrganizationsMutationModule = /*#__PURE__*/(() => {
  class OrganizationsMutationModule {
    static {
      this.ɵfac = function OrganizationsMutationModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || OrganizationsMutationModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .$C({
        type: OrganizationsMutationModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .G2t({
        providers: [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_1__/* .OrganizationDepartmentsService */ .I],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__/* .CommonModule */ .MD, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .FormsModule */ .YN, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .ReactiveFormsModule */ .X1, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbCardModule */ .lVF, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbButtonModule */ .P5N, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbIconModule */ .clu, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__/* .NgSelectModule */ .MQ, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbInputModule */ .pty, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbDatepickerModule */ .TgK, _image_uploader_image_uploader_module__WEBPACK_IMPORTED_MODULE_6__/* .ImageUploaderModule */ .M, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbSelectModule */ .VcP, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbToastrModule */ .EcJ.forRoot(), _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbListModule */ .PD_, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbStepperModule */ .QyE, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbToggleModule */ .jVr, _remove_lodash_remove_lodash_module__WEBPACK_IMPORTED_MODULE_7__/* .RemoveLodashModule */ .q, _organizations_step_form_organizations_step_form_module__WEBPACK_IMPORTED_MODULE_8__/* .OrganizationsStepFormModule */ .Z, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__/* .TranslateModule */ .h.forChild()]
      });
    }
  }
  return OrganizationsMutationModule;
})();

/***/ }),

/***/ 41639:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Q: () => (/* binding */ OrganizationWithTagsComponent)
/* harmony export */ });
/* harmony import */ var _picture_name_tags_picture_name_tags_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76229);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56383);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19223);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14572);
/* harmony import */ var _directives_img_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(71466);








function OrganizationWithTagsComponent_div_0_img_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(0, "img", 7);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpropertyInterpolate"] */ .FS9("src", ctx_r0.rowData.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵsanitizeUrl"] */ .B4B);
  }
}
function OrganizationWithTagsComponent_div_0_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI("Members count ", ctx_r0.rowData == null ? null : ctx_r0.rowData.totalEmployees, "");
  }
}
function OrganizationWithTagsComponent_div_0_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "nb-badge", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵstyleProp"] */ .xc7("background", ctx_r0.background(ctx_r0.rowData == null ? null : ctx_r0.rowData.color))("color", ctx_r0.backgroundContrast(ctx_r0.rowData == null ? null : ctx_r0.rowData.brandColor));
  }
}
function OrganizationWithTagsComponent_div_0_div_8_nb_badge_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(0, "nb-badge", 12);
  }
  if (rf & 2) {
    const tag_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵstyleProp"] */ .xc7("background", ctx_r0.background(tag_r2.color))("color", ctx_r0.backgroundContrast(tag_r2.color));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpropertyInterpolate"] */ .FS9("text", tag_r2.name);
  }
}
function OrganizationWithTagsComponent_div_0_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, OrganizationWithTagsComponent_div_0_div_8_nb_badge_1_Template, 1, 5, "nb-badge", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx_r0.rowData.tags);
  }
}
function OrganizationWithTagsComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 1)(1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(2, OrganizationWithTagsComponent_div_0_img_2_Template, 1, 1, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(3, "span")(4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(6, OrganizationWithTagsComponent_div_0_div_6_Template, 2, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(7, OrganizationWithTagsComponent_div_0_ng_template_7_Template, 2, 4, "ng-template", 5)(8, OrganizationWithTagsComponent_div_0_div_8_Template, 2, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r0.rowData);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(ctx_r0.rowData == null ? null : ctx_r0.rowData.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r0.rowData == null ? null : ctx_r0.rowData.totalEmployees);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r0.rowData == null ? null : ctx_r0.rowData.isDefault);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r0.rowData.tags.length > 0);
  }
}
let OrganizationWithTagsComponent = /*#__PURE__*/(() => {
  class OrganizationWithTagsComponent extends _picture_name_tags_picture_name_tags_component__WEBPACK_IMPORTED_MODULE_1__/* .PictureNameTagsComponent */ .O {
    constructor(themeService, translateService) {
      super(themeService, translateService);
      this.themeService = themeService;
      this.translateService = translateService;
    }
    static {
      this.ɵfac = function OrganizationWithTagsComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || OrganizationWithTagsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbThemeService */ .NS1), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__/* .TranslateService */ .c$));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: OrganizationWithTagsComponent,
        selectors: [["gauzy-organization-with-tags"]],
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
        decls: 1,
        vars: 1,
        consts: [["class", "organization-render-container", 4, "ngIf"], [1, "organization-render-container"], [1, "organization-render"], [3, "src", 4, "ngIf"], ["class", "member", 4, "ngIf"], [3, "ngIf"], ["class", "tags", 4, "ngIf"], [3, "src"], [1, "member"], [1, "tags"], ["position", "centered", "text", "Default", 1, "color"], ["class", "color", "position", "centered", 3, "background", "text", "color", 4, "ngFor", "ngForOf"], ["position", "centered", 1, "color", 3, "text"]],
        template: function OrganizationWithTagsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(0, OrganizationWithTagsComponent_div_0_Template, 9, 5, "div", 0);
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.rowData);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__/* .NgForOf */ .Sq, _angular_common__WEBPACK_IMPORTED_MODULE_4__/* .NgIf */ .bT, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbBadgeComponent */ .XyX, _directives_img_directive__WEBPACK_IMPORTED_MODULE_5__/* .ImgDirective */ .z],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.organization-render-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.organization-render-container[_ngcontent-%COMP%]   .organization-render[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: flex-start;\n}\n.organization-render-container[_ngcontent-%COMP%]   .organization-render[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: 6px;\n  margin: 0 5px;\n  box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.25);\n  object-fit: cover;\n}\n.organization-render-container[_ngcontent-%COMP%]   .organization-render[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   .member[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: rgba(126, 126, 143, 0.75);\n}\n.organization-render-container[_ngcontent-%COMP%]   .tags[_ngcontent-%COMP%] {\n  margin: 10px 5px 0px 5px;\n}\n.organization-render-container[_ngcontent-%COMP%]   .tags[_ngcontent-%COMP%]   .color[_ngcontent-%COMP%] {\n  position: static;\n  margin-top: 5px;\n  margin-right: 5px;\n  display: inline-block;\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: 0em;\n  padding: 3px 8px;\n}"]
      });
    }
  }
  return OrganizationWithTagsComponent;
})();

/***/ }),

/***/ 51210:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   u: () => (/* binding */ RecurringExpenseDeleteConfirmationModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14572);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10936);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56383);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19223);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);






let RecurringExpenseDeleteConfirmationModule = /*#__PURE__*/(() => {
  class RecurringExpenseDeleteConfirmationModule {
    static {
      this.ɵfac = function RecurringExpenseDeleteConfirmationModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || RecurringExpenseDeleteConfirmationModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .$C({
        type: RecurringExpenseDeleteConfirmationModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .CommonModule */ .MD, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .FormsModule */ .YN, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .ReactiveFormsModule */ .X1, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbRadioModule */ .iyp, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbCardModule */ .lVF, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbButtonModule */ .P5N, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__/* .TranslateModule */ .h.forChild()]
      });
    }
  }
  return RecurringExpenseDeleteConfirmationModule;
})();

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

/***/ 91963:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P: () => (/* binding */ RecurringExpenseMutationModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14572);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10936);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(56383);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(55567);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(19223);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22688);
/* harmony import */ var _selectors_selectors_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(98048);
/* harmony import */ var _modules_currency_currency_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(43629);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);










let RecurringExpenseMutationModule = /*#__PURE__*/(() => {
  class RecurringExpenseMutationModule {
    static {
      this.ɵfac = function RecurringExpenseMutationModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || RecurringExpenseMutationModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .$C({
        type: RecurringExpenseMutationModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .G2t({
        providers: [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_1__/* .OrganizationsService */ .k],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__/* .CommonModule */ .MD, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .FormsModule */ .YN, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .ReactiveFormsModule */ .X1, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbAlertModule */ .dQU, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbButtonModule */ .P5N, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbCardModule */ .lVF, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbCheckboxModule */ .Ad8, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbDatepickerModule */ .TgK, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbIconModule */ .clu, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbInputModule */ .pty, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbSelectModule */ .VcP, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbSpinnerModule */ .gYs, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbTooltipModule */ .IB0, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__/* .NgSelectModule */ .MQ, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__/* .TranslateModule */ .h.forChild(), _selectors_selectors_module__WEBPACK_IMPORTED_MODULE_7__/* .SelectorsModule */ .b, _modules_currency_currency_module__WEBPACK_IMPORTED_MODULE_8__/* .CurrencyModule */ .C]
      });
    }
  }
  return RecurringExpenseMutationModule;
})();

/***/ })

}]);