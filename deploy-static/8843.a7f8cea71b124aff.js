"use strict";
(self["webpackChunkgauzy"] = self["webpackChunkgauzy"] || []).push([[8843],{

/***/ 168:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   x: () => (/* binding */ EntityWithMembersModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14572);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56383);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19223);
/* harmony import */ var _table_components_table_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(57832);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);







let EntityWithMembersModule = /*#__PURE__*/(() => {
  class EntityWithMembersModule {
    static {
      this.ɵfac = function EntityWithMembersModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || EntityWithMembersModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .$C({
        type: EntityWithMembersModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .CommonModule */ .MD, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbBadgeModule */ .iEK, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbCardModule */ .lVF, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbButtonModule */ .P5N, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbIconModule */ .clu, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbInputModule */ .pty, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbSelectModule */ .VcP, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbTooltipModule */ .IB0, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbToastrModule */ .EcJ.forRoot(), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__/* .TranslateModule */ .h.forChild(), _table_components_table_components_module__WEBPACK_IMPORTED_MODULE_4__/* .TableComponentsModule */ .p]
      });
    }
  }
  return EntityWithMembersModule;
})();

/***/ }),

/***/ 2902:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: () => (/* binding */ OrganizationVendorsService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80189);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64913);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26860);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45715);





let OrganizationVendorsService = /*#__PURE__*/(() => {
  class OrganizationVendorsService {
    constructor(http) {
      this.http = http;
    }
    create(createInput) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ ._)(this.http.post(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/organization-vendors`, createInput));
    }
    getAll(findInput, relations, order) {
      const data = JSON.stringify({
        relations,
        findInput,
        order
      });
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ ._)(this.http.get(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/organization-vendors`, {
        params: {
          data
        }
      }));
    }
    update(id, updateInput) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ ._)(this.http.put(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/organization-vendors/${id}`, updateInput));
    }
    delete(id) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ ._)(this.http.delete(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/organization-vendors/${id}`));
    }
    static {
      this.ɵfac = function OrganizationVendorsService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || OrganizationVendorsService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵinject"] */ .KVO(_angular_common_http__WEBPACK_IMPORTED_MODULE_3__/* .HttpClient */ .Qq));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineInjectable"] */ .jDH({
        token: OrganizationVendorsService,
        factory: OrganizationVendorsService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return OrganizationVendorsService;
})();

/***/ }),

/***/ 6269:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ EmployeeMultiSelectModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14572);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10936);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56383);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19223);
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(38834);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);







let EmployeeMultiSelectModule = /*#__PURE__*/(() => {
  class EmployeeMultiSelectModule {
    static {
      this.ɵfac = function EmployeeMultiSelectModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || EmployeeMultiSelectModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .$C({
        type: EmployeeMultiSelectModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .CommonModule */ .MD, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .FormsModule */ .YN, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .ReactiveFormsModule */ .X1, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbSelectModule */ .VcP, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__/* .TranslateModule */ .h.forChild(), _shared_module__WEBPACK_IMPORTED_MODULE_5__/* .SharedModule */ .G]
      });
    }
  }
  return EmployeeMultiSelectModule;
})();

/***/ }),

/***/ 11263:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: () => (/* binding */ OrganizationTaskSettingService)
/* harmony export */ });
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64913);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26024);
/* harmony import */ var _crud_crud_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7718);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26860);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45715);





let OrganizationTaskSettingService = /*#__PURE__*/(() => {
  class OrganizationTaskSettingService extends _crud_crud_service__WEBPACK_IMPORTED_MODULE_0__/* .CrudService */ .m {
    static {
      this.API_URL = `${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/organization-task-setting`;
    }
    constructor(http) {
      super(http, OrganizationTaskSettingService.API_URL);
    }
    /**
     * Retrieves organization task settings based on provided parameters.
     * @param params The parameters used to find the organization task setting.
     * @returns An Observable that emits the organization task setting.
     */
    getByOrganization(params) {
      return this.http.get(`${this.API_URL}/organization`, {
        params: (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_2__/* .toParams */ .SV)(params)
      });
    }
    static {
      this.ɵfac = function OrganizationTaskSettingService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || OrganizationTaskSettingService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵinject"] */ .KVO(_angular_common_http__WEBPACK_IMPORTED_MODULE_4__/* .HttpClient */ .Qq));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdefineInjectable"] */ .jDH({
        token: OrganizationTaskSettingService,
        factory: OrganizationTaskSettingService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return OrganizationTaskSettingService;
})();

/***/ }),

/***/ 26908:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ EditOrganizationMainComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(73014);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(64411);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(26860);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10936);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(9620);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(15788);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(19223);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(23423);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71181);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(72781);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(73246);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(87081);
/* harmony import */ var _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38546);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26024);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(64913);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(22688);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(15480);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(96643);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(71924);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(54263);
/* harmony import */ var _packages_ui_core_shared_src_lib_tags_tags_color_input_tags_color_input_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(62177);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(56383);
/* harmony import */ var _packages_ui_core_shared_src_lib_image_uploader_image_uploader_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(79455);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(14572);
/* harmony import */ var _packages_ui_core_shared_src_lib_directives_img_directive__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(71466);
/* harmony import */ var _packages_ui_core_shared_src_lib_modules_currency_currency_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(64251);

var EditOrganizationMainComponent_1;























const _c0 = a0 => ({
  opacity: a0
});
let EditOrganizationMainComponent = /*#__PURE__*/(() => {
  let EditOrganizationMainComponent = class EditOrganizationMainComponent extends _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_0__/* .TranslationBaseComponent */ .K {
    static {
      EditOrganizationMainComponent_1 = this;
    }
    static buildForm(fb) {
      return fb.group({
        tags: [null],
        currency: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .Validators */ .k0.required],
        name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .Validators */ .k0.required],
        officialName: [null],
        profile_link: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .Validators */ .k0.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .Validators */ .k0.pattern('^[a-z0-9-]+$')]],
        taxId: [null],
        registrationDate: [null],
        website: [null],
        imageUrl: [{
          value: null,
          disabled: true
        }],
        imageId: []
      });
    }
    constructor(route, router, fb, organizationService, toastrService, organizationEditStore, translateService, store, cdr, errorHandler) {
      super(translateService);
      this.route = route;
      this.router = router;
      this.fb = fb;
      this.organizationService = organizationService;
      this.toastrService = toastrService;
      this.organizationEditStore = organizationEditStore;
      this.translateService = translateService;
      this.store = store;
      this.cdr = cdr;
      this.errorHandler = errorHandler;
      /*
       * Organization Mutation Form
       */
      this.form = EditOrganizationMainComponent_1.buildForm(this.fb);
    }
    ngOnInit() {
      this.route.parent.data.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__/* .debounceTime */ .B)(100), (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_3__/* .distinctUntilChange */ .nI)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .filter */ .p)(data => !!data && !!data.organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .M)(({
        employeesCount
      }) => this.employeesCount = employeesCount), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .map */ .T)(({
        organization
      }) => organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .M)(organization => this.organization = organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .M)(() => this._setFormValues()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__/* .untilDestroyed */ .s)(this)).subscribe();
    }
    ngOnDestroy() {}
    ngAfterViewInit() {
      this.cdr.detectChanges();
    }
    /**
     * Upload organization image/avatar
     *
     * @param image
     */
    updateImageAsset(image) {
      var _this = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A)(function* () {
        try {
          if (image && image.id) {
            _this.form.get('imageId').setValue(image.id);
            _this.form.get('imageUrl').setValue(image.fullUrl);
          } else {
            _this.form.get('imageUrl').setValue(_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_9__/* .DUMMY_PROFILE_IMAGE */ .vO);
          }
          yield _this.updateOrganizationSettings();
          _this.form.updateValueAndValidity();
        } catch (error) {
          console.log('Error while updating organization avatars');
          _this.errorHandler.handleError(error);
        }
      })();
    }
    handleImageUploadError(error) {
      // Delegate error handling to the _errorHandlingService
      this.errorHandler.handleError(error);
    }
    /**
     * Update organization main settings
     *
     * @returns
     */
    updateOrganizationSettings() {
      var _this2 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A)(function* () {
        if (!_this2.organization || _this2.form.invalid) {
          return;
        }
        try {
          const organization = yield _this2.organizationService.update(_this2.organization.id, {
            defaultValueDateType: _this2.organization.defaultValueDateType,
            ..._this2.form.value
          });
          if (organization) {
            _this2.organizationEditStore.organizationAction = {
              organization,
              action: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_10__/* .CrudActionEnum */ .GD.UPDATED
            };
            _this2.store.selectedOrganization = organization;
          }
          if (_this2.organization) {
            _this2.toastrService.success(`TOASTR.MESSAGE.MAIN_ORGANIZATION_UPDATED`, {
              name: _this2.organization.name
            });
          }
          _this2.router.navigate([`/pages/organizations`]);
        } catch (error) {
          console.log('Error while updating organization main details', error);
          _this2.errorHandler.handleError(error);
        }
      })();
    }
    /**
     * Pre filled default form fields
     *
     * @returns
     */
    _setFormValues() {
      var _this3 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A)(function* () {
        if (!_this3.organization) {
          return;
        }
        _this3.form.setValue({
          imageId: _this3.organization.imageId || null,
          imageUrl: _this3.organization.imageUrl || null,
          tags: _this3.organization.tags || [],
          currency: _this3.organization.currency || null,
          name: _this3.organization.name || null,
          officialName: _this3.organization.officialName || null,
          profile_link: _this3.organization.profile_link || null,
          taxId: _this3.organization.taxId || null,
          website: _this3.organization.website || null,
          registrationDate: _this3.organization.registrationDate ? new Date(_this3.organization.registrationDate) : null
        });
        const {
          id: organizationId,
          tenantId
        } = _this3.organization;
        const values = {
          organizationId,
          tenantId,
          ...(_this3.form.valid ? _this3.form.value : {})
        };
        yield _this3.organizationEditStore.updateOrganizationForm(values);
        _this3.form.updateValueAndValidity();
      })();
    }
    /**
     * On Changed Tags Event Emitter
     *
     * @param tags
     */
    selectedTagsEvent(tags) {
      this.form.get('tags').setValue(tags);
      this.form.get('tags').updateValueAndValidity();
    }
    /*
     * On Changed Currency Event Emitter
     */
    currencyChanged($event) {}
    static {
      this.ɵfac = function EditOrganizationMainComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || EditOrganizationMainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_router__WEBPACK_IMPORTED_MODULE_12__/* .ActivatedRoute */ .nX), _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_router__WEBPACK_IMPORTED_MODULE_12__/* .Router */ .Ix), _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .UntypedFormBuilder */ .ze), _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_13__/* .OrganizationsService */ .k), _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_14__/* .ToastrService */ .t), _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_15__/* .OrganizationEditStore */ .vO), _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__/* .TranslateService */ .c$), _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_17__/* .Store */ .il), _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_core__WEBPACK_IMPORTED_MODULE_11__/* .ChangeDetectorRef */ .gRc), _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_18__/* .ErrorHandlingService */ .X));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵdefineComponent"] */ .VBU({
        type: EditOrganizationMainComponent,
        selectors: [["ga-edit-org-main"]],
        inputs: {
          organization: "organization"
        },
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
        decls: 69,
        vars: 54,
        consts: [["registrationDate", ""], [1, "content", "main"], [1, "organization-container"], [1, "organization-photo", "ml-4"], [3, "changeHoverState", "uploadedImageAsset", "uploadImageAssetError", "folder"], [1, "image-overlay", 3, "ngStyle"], ["alt", "Organization Photo", 3, "mouseenter", "mouseleave", "src"], [1, "employees-count-text", "mt-2"], [1, "main-form", 3, "formGroup"], [1, "fields"], [1, "row"], [1, "col"], [1, "form-group"], ["for", "nameInput", 1, "label"], ["fullWidth", "", "id", "nameInput", "type", "text", "nbInput", "", "formControlName", "name", 3, "placeholder"], ["formControlName", "currency", 3, "optionChange", "formControl"], [1, "col-6"], ["for", "officialNameInput", 1, "label"], ["fullWidth", "", "id", "officialNameInput", "type", "text", "nbInput", "", "formControlName", "officialName", 3, "placeholder"], [1, "form-group", "tax-form-group"], ["for", "taxIdInput", 1, "label"], ["fullWidth", "", "id", "taxIdInput", "type", "text", "nbInput", "", "formControlName", "taxId", 3, "placeholder"], ["for", "profileLinkInput", 1, "label"], ["fullWidth", "", "id", "profileLinkInput", "type", "text", "nbInput", "", "formControlName", "profile_link", 3, "placeholder"], [3, "selectedTagsEvent", "selectedTags", "isOrgLevel"], [1, "form-group", "registration-form-group"], ["for", "registrationDate", 1, "label"], ["nbInput", "", "fullWidth", "", "id", "registrationDate", "formControlName", "registrationDate", 3, "placeholder", "nbDatepicker"], ["for", "website", 1, "label"], ["nbInput", "", "fullWidth", "", "id", "website", "formControlName", "website", 3, "placeholder"], [1, "actions"], ["nbButton", "", "status", "success", 3, "click", "disabled"]],
        template: function EditOrganizationMainComponent_Template(rf, ctx) {
          if (rf & 1) {
            const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵgetCurrentView"] */ .RV6();
            _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵelementStart"] */ .j41(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "ngx-image-uploader", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵlistener"] */ .bIt("changeHoverState", function EditOrganizationMainComponent_Template_ngx_image_uploader_changeHoverState_3_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵresetView"] */ .Njj(ctx.hoverState = $event);
            })("uploadedImageAsset", function EditOrganizationMainComponent_Template_ngx_image_uploader_uploadedImageAsset_3_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵresetView"] */ .Njj(ctx.updateImageAsset($event));
            })("uploadImageAssetError", function EditOrganizationMainComponent_Template_ngx_image_uploader_uploadImageAssetError_3_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵresetView"] */ .Njj(ctx.handleImageUploadError($event));
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵelement"] */ .nrm(4, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵelementStart"] */ .j41(5, "img", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵlistener"] */ .bIt("mouseenter", function EditOrganizationMainComponent_Template_img_mouseenter_5_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵresetView"] */ .Njj(ctx.hoverState = true);
            })("mouseleave", function EditOrganizationMainComponent_Template_img_mouseleave_5_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵresetView"] */ .Njj(ctx.hoverState = false);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵelementStart"] */ .j41(6, "h6", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵtext"] */ .EFF(7);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵpipe"] */ .nI1(8, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵelementStart"] */ .j41(9, "form", 8)(10, "div", 9)(11, "div", 10)(12, "div", 11)(13, "div", 12)(14, "label", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵtext"] */ .EFF(15);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵpipe"] */ .nI1(16, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵelement"] */ .nrm(17, "input", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵpipe"] */ .nI1(18, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵelementStart"] */ .j41(19, "div", 11)(20, "span")(21, "ga-currency", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵlistener"] */ .bIt("optionChange", function EditOrganizationMainComponent_Template_ga_currency_optionChange_21_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵresetView"] */ .Njj(ctx.currencyChanged($event));
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵelementEnd"] */ .k0s()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵelementStart"] */ .j41(22, "div", 10)(23, "div", 16)(24, "div", 12)(25, "label", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵtext"] */ .EFF(26);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵpipe"] */ .nI1(27, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵelement"] */ .nrm(28, "input", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵpipe"] */ .nI1(29, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵelementStart"] */ .j41(30, "div", 16)(31, "div", 19)(32, "label", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵtext"] */ .EFF(33);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵpipe"] */ .nI1(34, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵelement"] */ .nrm(35, "input", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵpipe"] */ .nI1(36, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵelementEnd"] */ .k0s()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵelementStart"] */ .j41(37, "div", 10)(38, "div", 16)(39, "div", 12)(40, "label", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵtext"] */ .EFF(41);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵpipe"] */ .nI1(42, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵelement"] */ .nrm(43, "input", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵpipe"] */ .nI1(44, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵelementStart"] */ .j41(45, "div", 16)(46, "div", 12)(47, "ga-tags-color-input", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵlistener"] */ .bIt("selectedTagsEvent", function EditOrganizationMainComponent_Template_ga_tags_color_input_selectedTagsEvent_47_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵresetView"] */ .Njj(ctx.selectedTagsEvent($event));
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵelementEnd"] */ .k0s()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵelementStart"] */ .j41(48, "div", 10)(49, "div", 16)(50, "div", 25)(51, "label", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵtext"] */ .EFF(52);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵpipe"] */ .nI1(53, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵelement"] */ .nrm(54, "input", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵpipe"] */ .nI1(55, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵelement"] */ .nrm(56, "nb-datepicker", null, 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵelementStart"] */ .j41(58, "div", 16)(59, "div", 12)(60, "label", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵtext"] */ .EFF(61);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵpipe"] */ .nI1(62, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵelement"] */ .nrm(63, "input", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵpipe"] */ .nI1(64, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵelementEnd"] */ .k0s()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵelementStart"] */ .j41(65, "div", 30)(66, "button", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵlistener"] */ .bIt("click", function EditOrganizationMainComponent_Template_button_click_66_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵresetView"] */ .Njj(ctx.updateOrganizationSettings());
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵtext"] */ .EFF(67);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵpipe"] */ .nI1(68, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵelementEnd"] */ .k0s()()()();
          }
          if (rf & 2) {
            const registrationDate_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵreference"] */ .sdS(57);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵproperty"] */ .Y8G("folder", "organization_avatars");
            _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵproperty"] */ .Y8G("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵpureFunction1"] */ .eq3(52, _c0, ctx.hoverState ? "0.2" : "0"));
            _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵproperty"] */ .Y8G("src", ctx.form.get("imageUrl").value, _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵsanitizeUrl"] */ .B4B);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵtextInterpolate2"] */ .Lme(" ", ctx.employeesCount, " ", _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵpipeBind1"] */ .bMT(8, 24, "ORGANIZATIONS_PAGE.EMPLOYEES"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵproperty"] */ .Y8G("formGroup", ctx.form);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵadvance"] */ .R7$(6);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵpipeBind1"] */ .bMT(16, 26, "FORM.LABELS.NAME"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵpipeBind1"] */ .bMT(18, 28, "FORM.PLACEHOLDERS.NAME"));
            _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵproperty"] */ .Y8G("formControl", ctx.form.get("currency"));
            _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵpipeBind1"] */ .bMT(27, 30, "FORM.LABELS.OFFICIAL_NAME"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵpipeBind1"] */ .bMT(29, 32, "FORM.PLACEHOLDERS.OFFICIAL_NAME"));
            _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵpipeBind1"] */ .bMT(34, 34, "FORM.LABELS.TAX_ID"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵpipeBind1"] */ .bMT(36, 36, "FORM.PLACEHOLDERS.TAX_ID"));
            _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵadvance"] */ .R7$(6);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵpipeBind1"] */ .bMT(42, 38, "FORM.LABELS.PROFILE_LINK"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵpipeBind1"] */ .bMT(44, 40, "FORM.PLACEHOLDERS.PROFILE_LINK"));
            _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵproperty"] */ .Y8G("selectedTags", ctx.form.get("tags").value)("isOrgLevel", true);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵpipeBind1"] */ .bMT(53, 42, "FORM.LABELS.REGISTRATION_DATE"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵpipeBind1"] */ .bMT(55, 44, "FORM.PLACEHOLDERS.REGISTRATION_DATE"))("nbDatepicker", registrationDate_r2);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵadvance"] */ .R7$(7);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵpipeBind1"] */ .bMT(62, 46, "FORM.LABELS.WEBSITE"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵpipeBind1"] */ .bMT(64, 48, "FORM.PLACEHOLDERS.WEBSITE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵproperty"] */ .Y8G("disabled", ctx.form.invalid);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__/* ["ɵɵpipeBind1"] */ .bMT(68, 50, "BUTTONS.SAVE"), " ");
          }
        },
        dependencies: [_packages_ui_core_shared_src_lib_tags_tags_color_input_tags_color_input_component__WEBPACK_IMPORTED_MODULE_19__/* .TagsColorInputComponent */ .i, _nebular_theme__WEBPACK_IMPORTED_MODULE_20__/* .NbButtonComponent */ .YP2, _nebular_theme__WEBPACK_IMPORTED_MODULE_20__/* .NbInputDirective */ .i6h, _packages_ui_core_shared_src_lib_image_uploader_image_uploader_component__WEBPACK_IMPORTED_MODULE_21__/* .ImageUploaderComponent */ .t, _nebular_theme__WEBPACK_IMPORTED_MODULE_20__/* .NbDatepickerDirective */ .OA9, _nebular_theme__WEBPACK_IMPORTED_MODULE_20__/* .NbDatepickerComponent */ .k2z, _angular_common__WEBPACK_IMPORTED_MODULE_22__/* .NgStyle */ .B3, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* ["ɵNgNoValidate"] */ .qT, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .DefaultValueAccessor */ .me, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .NgControlStatus */ .BC, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .NgControlStatusGroup */ .cb, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .FormControlDirective */ .l_, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .FormGroupDirective */ .j4, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .FormControlName */ .JD, _packages_ui_core_shared_src_lib_directives_img_directive__WEBPACK_IMPORTED_MODULE_23__/* .ImgDirective */ .z, _packages_ui_core_shared_src_lib_modules_currency_currency_component__WEBPACK_IMPORTED_MODULE_24__/* .CurrencyComponent */ .X, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__/* .TranslatePipe */ .D9],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%] {\n  height: 100%;\n}\n[dir=ltr]   [_nghost-%COMP%] {\n  border-radius: 0 var(--border-radius) var(--border-radius) var(--border-radius);\n}\n[dir=rtl]   [_nghost-%COMP%] {\n  border-radius: var(--border-radius) 0 var(--border-radius) var(--border-radius);\n}\n\n[_nghost-%COMP%]   .content[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100%;\n  background-color: var(--gauzy-card-2);\n  padding: 1rem;\n}\n[dir=ltr]   [_nghost-%COMP%]   .content[_ngcontent-%COMP%] {\n  border-radius: 0 var(--border-radius) var(--border-radius) var(--border-radius);\n}\n[dir=rtl]   [_nghost-%COMP%]   .content[_ngcontent-%COMP%] {\n  border-radius: var(--border-radius) 0 var(--border-radius) var(--border-radius);\n}\n[_nghost-%COMP%]   .content.main[_ngcontent-%COMP%] {\n  height: calc(100vh - 19.25rem);\n}\n\n[_nghost-%COMP%]   .organization-container[_ngcontent-%COMP%] {\n  padding: 15px;\n  position: relative;\n  display: flex;\n  align-items: flex-start;\n  flex-direction: column;\n  transition: transform 150ms ease-in-out;\n  background-color: rgba(126, 126, 143, 0.1);\n  border-radius: var(--border-radius);\n  width: 563px;\n  height: 100%;\n}\n[_nghost-%COMP%]   .organization-container[_ngcontent-%COMP%]   .organization-photo[_ngcontent-%COMP%] {\n  width: fit-content;\n  height: fit-content;\n  position: relative;\n  margin-left: 0 !important;\n}\n[_nghost-%COMP%]   .organization-container[_ngcontent-%COMP%]   .organization-photo[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  pointer-events: none;\n  background: black;\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  border-radius: var(--border-radius);\n}\n[_nghost-%COMP%]   .organization-container[_ngcontent-%COMP%]   .organization-photo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n  border-radius: var(--border-radius);\n}\n[_nghost-%COMP%]   .organization-container[_ngcontent-%COMP%]   .organization-photo[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  position: absolute;\n  z-index: 3;\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .organization-container[_ngcontent-%COMP%]   .organization-photo[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  z-index: 2;\n  transition: opacity 0.2s ease-in;\n  opacity: 0.3;\n  position: absolute;\n  top: calc(50% - 34px);\n  left: calc(50% - 34px);\n}\n[_nghost-%COMP%]   .organization-container[_ngcontent-%COMP%]   .employees-count-text[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 15px;\n  letter-spacing: 0em;\n}\n[dir=ltr]   [_nghost-%COMP%]   .organization-container[_ngcontent-%COMP%]   .employees-count-text[_ngcontent-%COMP%] {\n  margin-left: 1px;\n}\n[dir=rtl]   [_nghost-%COMP%]   .organization-container[_ngcontent-%COMP%]   .employees-count-text[_ngcontent-%COMP%] {\n  margin-right: 1px;\n}\n\n.main-form[_ngcontent-%COMP%] {\n  width: 100%;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n.main-form[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%] {\n  margin-top: 60px;\n}\n\n.row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\n  max-width: 50%;\n}\n\n  ga-currency .form-group {\n  display: inline-flex;\n  flex-direction: column;\n  min-width: 180px;\n}\n\n.tax-form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.tax-form-group[_ngcontent-%COMP%]   #taxIdInput[_ngcontent-%COMP%] {\n  width: 80%;\n}\n\n.registration-form-group[_ngcontent-%COMP%] {\n  display: inline-flex;\n  flex-direction: column;\n}\n\n  nb-select.shape-rectangle .select-button {\n  border-radius: var(--border-radius);\n}\n\n@media only screen and (max-width: 991px) {\n  .organization-container[_ngcontent-%COMP%] {\n    width: 350px;\n  }\n  .registration-form-group[_ngcontent-%COMP%]   #registrationDate[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .tax-form-group[_ngcontent-%COMP%]   #taxIdInput[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n    ga-currency .form-group {\n    display: flex;\n    flex-direction: column;\n  }\n}\n@media only screen and (max-width: 767px) {\n  [_nghost-%COMP%] {\n    height: auto;\n  }\n  .content[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .organization-container[_ngcontent-%COMP%], \n   .main-form[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .main-form[_ngcontent-%COMP%] {\n    padding: 0;\n    margin-top: 20px;\n  }\n  .row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    max-width: 100%;\n    margin-left: 0;\n  }\n  .row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\n    max-width: 100%;\n    padding: 0;\n  }\n  .form-group[_ngcontent-%COMP%] {\n    width: 100% !important;\n  }\n  .tax-form-group[_ngcontent-%COMP%]   #taxIdInput[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .registration-form-group[_ngcontent-%COMP%]   #registrationDate[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n    ga-currency .form-group {\n    display: flex;\n  }\n  .col-6[_ngcontent-%COMP%] {\n    max-width: 100%;\n    padding: 0 !important;\n  }\n  .main-form[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%] {\n    margin-top: 20px;\n  }\n}"]
      });
    }
  };
  return EditOrganizationMainComponent;
})();
EditOrganizationMainComponent = EditOrganizationMainComponent_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_25__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__/* .UntilDestroy */ .d)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_25__/* .__metadata */ .Sn)("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_12__/* .ActivatedRoute */ .nX, _angular_router__WEBPACK_IMPORTED_MODULE_12__/* .Router */ .Ix, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .UntypedFormBuilder */ .ze, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_13__/* .OrganizationsService */ .k, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_14__/* .ToastrService */ .t, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_15__/* .OrganizationEditStore */ .vO, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__/* .TranslateService */ .c$, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_17__/* .Store */ .il, _angular_core__WEBPACK_IMPORTED_MODULE_11__/* .ChangeDetectorRef */ .gRc, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_18__/* .ErrorHandlingService */ .X])], EditOrganizationMainComponent);


/***/ }),

/***/ 33392:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   n: () => (/* binding */ EditOrganizationTaskSettingResolver)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9620);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(50666);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(90010);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(47060);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71924);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11263);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(26024);





/**
 * Resolver function to fetch organization task settings by organization ID.
 * If an error occurs, the user is redirected to the organizations page.
 *
 * @param route - The activated route snapshot containing the route parameters.
 * @returns An observable that emits the organization task settings or an empty observable on error.
 */
const EditOrganizationTaskSettingResolver = route => {
  // Inject necessary services
  const _router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__/* .inject */ .WQX)(_angular_router__WEBPACK_IMPORTED_MODULE_1__/* .Router */ .Ix);
  const _store = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__/* .inject */ .WQX)(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_2__/* .Store */ .il);
  const _organizationTaskSettingService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__/* .inject */ .WQX)(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_3__/* .OrganizationTaskSettingService */ .e);
  // Extract organization ID from route parameters
  const organizationId = route.params['id'];
  // If no organization ID is provided, return an empty observable
  if ((0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_4__/* .isEmpty */ .Im)(organizationId)) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(rxjs__WEBPACK_IMPORTED_MODULE_6__/* .EMPTY */ .w);
  }
  // Get tenant ID from the selected organization in the store
  const {
    tenantId
  } = _store.selectedOrganization;
  // Attempt to fetch organization task settings
  return _organizationTaskSettingService.getByOrganization({
    organizationId,
    tenantId
  }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__/* .catchError */ .W)(() => {
    // Navigate to the organizations page in case of an error
    _router.navigate(['/pages/organizations']);
    // Return EMPTY observable
    return rxjs__WEBPACK_IMPORTED_MODULE_6__/* .EMPTY */ .w;
  }));
};

/***/ }),

/***/ 49721:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: () => (/* binding */ EditOrganizationSettingsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(64411);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9620);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23423);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19223);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73246);
/* harmony import */ var _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38546);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26860);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(56383);










let EditOrganizationSettingsComponent = class EditOrganizationSettingsComponent extends _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_0__/* .TranslationBaseComponent */ .K {
  constructor(route, translateService) {
    super(translateService);
    this.route = route;
    this.translateService = translateService;
    this.tabs = [];
  }
  ngOnInit() {
    this.route.params.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__/* .tap */ .M)(() => this.loadTabs()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__/* .untilDestroyed */ .s)(this)).subscribe();
  }
  ngAfterViewInit() {
    this._applyTranslationOnTabs();
  }
  getRoute(tab) {
    return `/pages/organizations/edit/${this.route.snapshot.paramMap.get('id')}/${tab}`;
  }
  loadTabs() {
    this.tabs = [{
      title: this.getTranslation('ORGANIZATIONS_PAGE.MAIN'),
      icon: 'person-outline',
      responsive: true,
      route: this.getRoute('main'),
      queryParamsHandling: 'merge'
    }, {
      title: this.getTranslation('ORGANIZATIONS_PAGE.LOCATION'),
      icon: 'pin-outline',
      responsive: true,
      route: this.getRoute('location'),
      queryParamsHandling: 'merge'
    }, {
      title: this.getTranslation('ORGANIZATIONS_PAGE.SETTINGS'),
      icon: 'settings-outline',
      responsive: true,
      route: this.getRoute('settings'),
      queryParamsHandling: 'merge'
    }];
  }
  _applyTranslationOnTabs() {
    this.translateService.onLangChange.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__/* .tap */ .M)(() => this.loadTabs()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__/* .untilDestroyed */ .s)(this)).subscribe();
  }
  static {
    this.ɵfac = function EditOrganizationSettingsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || EditOrganizationSettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_router__WEBPACK_IMPORTED_MODULE_4__/* .ActivatedRoute */ .nX), _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__/* .TranslateService */ .c$));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdefineComponent"] */ .VBU({
      type: EditOrganizationSettingsComponent,
      selectors: [["ngx-edit-organization-settings"]],
      inputs: {
        organization: "organization"
      },
      standalone: false,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
      decls: 2,
      vars: 1,
      consts: [[1, "org-settings"], ["fullWidth", "", 3, "tabs"]],
      template: function EditOrganizationSettingsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .j41(0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelement"] */ .nrm(1, "nb-route-tabset", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .k0s();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .R7$();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Y8G("tabs", ctx.tabs);
        }
      },
      dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_6__/* .NbRouteTabsetComponent */ .ssE],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]     input, \n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]     nb-select.appearance-outline.status-basic .select-button, \n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]     .ng-select .ng-select-container {\n  background-color: var(--gauzy-card-1) !important;\n  border: none;\n  height: 42px !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder, \n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {\n  top: unset !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]     label, \n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]     .label {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  color: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]     textarea {\n  background-color: var(--gauzy-card-1) !important;\n  border: none;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]     .ng-select .ng-select-container input, \n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]     nb-tag-list input {\n  background-color: unset !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]     ngx-image-uploader input {\n  height: 100% !important;\n}\n\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  padding: 50px 70px;\n}\n@media only screen and (max-width: 1532px) {\n  [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n    padding: 30px 40px;\n  }\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .navigate[_ngcontent-%COMP%] {\n  display: flex;\n  margin-bottom: 35px;\n  cursor: pointer;\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .navigate[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: 7px;\n  font-size: 14px;\n  color: #2a2c39;\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  display: flex;\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .employee-container[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  transition: transform 150ms ease-in-out;\n}\n[dir=rtl]   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .employee-container[_ngcontent-%COMP%] {\n  padding-left: 70px;\n}\n[dir=ltr]   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .employee-container[_ngcontent-%COMP%] {\n  padding-right: 70px;\n}\n[dir=rtl]   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .employee-container[_ngcontent-%COMP%] {\n  margin-left: 70px;\n}\n[dir=ltr]   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .employee-container[_ngcontent-%COMP%] {\n  margin-right: 70px;\n}\n[dir=rtl]   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .employee-container[_ngcontent-%COMP%] {\n  border-left: 1px solid rgba(0, 0, 0, 0.1);\n}\n[dir=ltr]   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .employee-container[_ngcontent-%COMP%] {\n  border-right: 1px solid rgba(0, 0, 0, 0.1);\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .employee-container[_ngcontent-%COMP%]   .employee-photo[_ngcontent-%COMP%] {\n  width: fit-content;\n  height: 200px;\n  position: relative;\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .employee-container[_ngcontent-%COMP%]   .employee-photo[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  pointer-events: none;\n  background: black;\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  border-radius: 13px;\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .employee-container[_ngcontent-%COMP%]   .employee-photo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 200px;\n  border-radius: 13px;\n  object-fit: cover;\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .employee-container[_ngcontent-%COMP%]   .employee-photo[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100% !important;\n  opacity: 0;\n  position: absolute;\n  z-index: 3;\n  cursor: pointer;\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .employee-container[_ngcontent-%COMP%]   .employee-photo[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  z-index: 2;\n  transition: opacity 0.2s ease-in;\n  opacity: 0.3;\n  position: absolute;\n  top: calc(50% - 34px);\n  left: calc(50% - 34px);\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .employee-container[_ngcontent-%COMP%]   .employee-photo[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   g[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%] {\n  fill: var(--text-primary-color);\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  position: relative;\n  margin-top: 10px;\n  display: flex;\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .employee-form[_ngcontent-%COMP%] {\n  width: 60%;\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  width: 100%;\n  margin-top: 30px;\n}\n\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.org-settings[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background-color: unset;\n}\n\nnb-tab[_ngcontent-%COMP%], \nnb-tabset[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\nnb-card-body[_ngcontent-%COMP%] {\n  overflow-y: hidden;\n}\n\n.header[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n[_nghost-%COMP%]     nb-route-tabset ul.route-tabset {\n  padding: 0;\n  flex-wrap: wrap;\n  border-bottom: none;\n  margin-bottom: 0 !important;\n}\n[_nghost-%COMP%]     nb-route-tabset li:last-of-type {\n  margin-left: auto;\n}\n@media only screen and (max-width: 480px) {\n  [_nghost-%COMP%]     nb-route-tabset li:last-of-type {\n    margin-left: 0;\n  }\n}\n[_nghost-%COMP%]     nb-route-tabset li svg {\n  fill: #7e7e8f !important;\n}\n[_nghost-%COMP%]     nb-route-tabset li.active .tab-link {\n  background: var(--gauzy-card-2);\n  transition: background 0.5s ease-in-out;\n}\n[_nghost-%COMP%]     nb-route-tabset li.active svg, [_nghost-%COMP%]     nb-route-tabset li:hover svg {\n  fill: var(--text-primary-color) !important;\n}\n[_nghost-%COMP%]     nb-route-tabset li .tab-link {\n  display: flex !important;\n  justify-content: space-between;\n  align-items: center;\n  transition: background 0.5s ease-in-out;\n}\n[_nghost-%COMP%]     nb-route-tabset li .tab-link:before {\n  width: 0 !important;\n}\n@media only screen and (max-width: 1532px) {\n  [_nghost-%COMP%]     nb-route-tabset li .tab-link {\n    padding: 0.7142857143rem 1.4285714286rem;\n  }\n}\n@media only screen and (max-width: 1440px) {\n  [_nghost-%COMP%]     nb-route-tabset li .tab-link {\n    padding: 0.7142857143rem 1.7857142857rem;\n  }\n}\n@media only screen and (max-width: 1280px) {\n  [_nghost-%COMP%]     nb-route-tabset li .tab-link {\n    padding: 0.7142857143rem 1.4285714286rem;\n  }\n}\n[_nghost-%COMP%]     nb-route-tabset li .tab-link nb-icon {\n  margin: 0;\n  margin-right: 5px;\n  margin-left: -5px;\n  width: 18px;\n  height: 19px;\n}\n[_nghost-%COMP%]     nb-route-tabset .tab-text {\n  margin-left: 0 !important;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 16px;\n  letter-spacing: 0em;\n}\n\n  .full-width .route-tabset {\n  display: flex;\n  justify-content: flex-start !important;\n}\n@media only screen and (max-width: 480px) {\n    .full-width .route-tabset {\n    justify-content: center !important;\n  }\n}\n\n@media only screen and (max-width: 480px) {\n  .org-settings[_ngcontent-%COMP%] {\n    height: auto;\n  }\n}"]
    });
  }
};
EditOrganizationSettingsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__/* .UntilDestroy */ .d)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_7__/* .__metadata */ .Sn)("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__/* .ActivatedRoute */ .nX, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__/* .TranslateService */ .c$])], EditOrganizationSettingsComponent);


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

/***/ 68843:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditOrganizationModule: () => (/* binding */ EditOrganizationModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14572);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56383);
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(79475);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19223);
/* harmony import */ var _edit_organization_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98946);
/* harmony import */ var _edit_organization_settings_edit_organization_settings_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(76844);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26860);









let EditOrganizationModule = /*#__PURE__*/(() => {
  class EditOrganizationModule {
    static {
      this.ɵfac = function EditOrganizationModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || EditOrganizationModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineNgModule"] */ .$C({
        type: EditOrganizationModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__/* .CommonModule */ .MD, _edit_organization_routing_module__WEBPACK_IMPORTED_MODULE_0__/* .EditOrganizationRoutingModule */ .c, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbCardModule */ .lVF, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbRouteTabsetModule */ .x$5, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbIconModule */ .clu, ngx_permissions__WEBPACK_IMPORTED_MODULE_4__/* .NgxPermissionsModule */ .Ov.forChild(), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__/* .TranslateModule */ .h.forChild(), _edit_organization_settings_edit_organization_settings_module__WEBPACK_IMPORTED_MODULE_6__/* .EditOrganizationSettingsModule */ .F]
      });
    }
  }
  return EditOrganizationModule;
})();

/***/ }),

/***/ 70035:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   i: () => (/* binding */ OrganizationResolver)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9620);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(50666);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(90010);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(71181);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(73246);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(47060);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(26024);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71924);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22688);






/**
 * Resolver function to fetch organization details before activating the route.
 *
 * @param route - The activated route snapshot.
 * @returns An observable that emits organization details or an empty observable on error.
 */
const OrganizationResolver = route => {
  // Inject necessary services
  const _router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__/* .inject */ .WQX)(_angular_router__WEBPACK_IMPORTED_MODULE_1__/* .Router */ .Ix);
  const _store = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__/* .inject */ .WQX)(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_2__/* .Store */ .il);
  const _organizationsService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__/* .inject */ .WQX)(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_3__/* .OrganizationsService */ .k);
  // Extract organization ID from the route parameters
  const organizationId = route.params.id;
  // If no organization ID is provided, return EMPTY observable
  if ((0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_4__/* .isEmpty */ .Im)(organizationId)) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(rxjs__WEBPACK_IMPORTED_MODULE_6__/* .EMPTY */ .w);
  }
  // Extract relations data if available
  const relations = route.firstChild?.data?.relations || [];
  // Attempt to fetch the organization details
  return _organizationsService.getById(organizationId, relations).pipe(
  // Debounce the request to avoid excessive API calls
  (0,rxjs__WEBPACK_IMPORTED_MODULE_7__/* .debounceTime */ .B)(200),
  // Update the selected organization and organizationId in the store
  (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .tap */ .M)(organization => {
    // Update the selected organization and organizationId in the store
    _store.selectedOrganization = organization;
    _store.organizationId = organization.id;
  }),
  // Handle errors
  (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .catchError */ .W)(error => {
    // Log the error and return EMPTY observable
    console.error('Error fetching organization details:', error);
    // Navigate to organizations page on error
    _router.navigate(['/pages/organizations']);
    // Return EMPTY observable to prevent further actions
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(rxjs__WEBPACK_IMPORTED_MODULE_6__/* .EMPTY */ .w);
  }));
};

/***/ }),

/***/ 72710:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: () => (/* binding */ EditOrganizationOtherSettingsComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(73014);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(64411);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14572);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26860);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10936);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(9620);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(71181);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(72781);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(87081);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(73246);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20381);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(19223);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(23423);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(56383);
/* harmony import */ var _gauzy_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(99253);
/* harmony import */ var _gauzy_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(94571);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(15788);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(85920);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(87399);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(26024);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(22688);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(11263);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(15480);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(96643);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(71924);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(94380);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(33829);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(55567);
/* harmony import */ var _packages_ui_core_shared_src_lib_directives_debounce_click_directive__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(20345);
/* harmony import */ var _packages_ui_core_shared_src_lib_timer_picker_timer_picker_timer_picker_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(81386);
/* harmony import */ var _packages_ui_core_shared_src_lib_modules_selectors_timezone_selector_timezone_selector_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(73230);

var EditOrganizationOtherSettingsComponent_1;


























const _c0 = ["general"];
const _c1 = ["design"];
const _c2 = ["accounting"];
const _c3 = ["bonus"];
const _c4 = ["invites"];
const _c5 = ["dateLimit"];
const _c6 = ["agent"];
const _c7 = ["timer"];
const _c8 = ["integrations"];
const _c9 = ["taskSetting"];
const _c10 = ["accordion"];
const _c11 = a0 => ({
  active: a0
});
const _c12 = a0 => ({
  "status-danger": a0
});
const _c13 = a0 => ({
  start: a0
});
function EditOrganizationOtherSettingsComponent_nb_option_72_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "nb-option", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const weekday_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("value", weekday_r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(2, 2, "SM_TABLE." + weekday_r12), " ");
  }
}
function EditOrganizationOtherSettingsComponent_nb_option_91_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "nb-option", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const type_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("value", type_r13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(2, 2, "SM_TABLE." + type_r13), " ");
  }
}
function EditOrganizationOtherSettingsComponent_nb_option_99_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "nb-option", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const code_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("value", code_r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(2, 2, "SM_TABLE.REGION." + code_r14), " ");
  }
}
function EditOrganizationOtherSettingsComponent_nb_option_107_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "nb-option", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const numFormat_r15 = ctx.$implicit;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("value", numFormat_r15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", ctx_r15.numberFormatPreview(numFormat_r15), " ");
  }
}
function EditOrganizationOtherSettingsComponent_nb_option_115_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "nb-option", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const format_r17 = ctx.$implicit;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("value", format_r17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", ctx_r15.dateFormatPreview(format_r17), " ");
  }
}
function EditOrganizationOtherSettingsComponent_nb_option_132_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "nb-option", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const item_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("value", item_r18.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", item_r18 == null ? null : item_r18.key, " ");
  }
}
function EditOrganizationOtherSettingsComponent_nb_option_149_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "nb-option", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const type_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("value", type_r19.toUpperCase());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", type_r19, " ");
  }
}
function EditOrganizationOtherSettingsComponent_nb_option_156_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "nb-option", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const pos_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("value", pos_r20.toUpperCase());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", pos_r20, " ");
  }
}
function EditOrganizationOtherSettingsComponent_div_208_nb_option_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "nb-option", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const template_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("value", template_r22.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(2, 2, "ACCOUNTING_TEMPLATES_PAGE.TEMPLATE_NAMES." + template_r22.name), " ");
  }
}
function EditOrganizationOtherSettingsComponent_div_208_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "div", 34)(1, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(4, "nb-select", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("selectedChange", function EditOrganizationOtherSettingsComponent_div_208_Template_nb_select_selectedChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r21);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx_r15.selectTemplate($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(6, EditOrganizationOtherSettingsComponent_div_208_nb_option_6_Template, 3, 4, "nb-option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(3, 3, "FORM.LABELS.DEFAULT_INVOICE_TEMPLATE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(5, 5, "FORM.PLACEHOLDERS.INVOICE_TEMPLATE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx_r15.invoiceTemplates);
  }
}
function EditOrganizationOtherSettingsComponent_nb_option_216_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "nb-option", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const template_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("value", template_r23.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(2, 2, "ACCOUNTING_TEMPLATES_PAGE.TEMPLATE_NAMES." + template_r23.name), " ");
  }
}
function EditOrganizationOtherSettingsComponent_nb_option_223_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "nb-option", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const template_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("value", template_r24.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(2, 2, "ACCOUNTING_TEMPLATES_PAGE.TEMPLATE_NAMES." + template_r24.name), " ");
  }
}
function EditOrganizationOtherSettingsComponent_nb_option_243_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "nb-option", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const type_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("value", type_r25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(2, 2, "SM_TABLE." + type_r25), " ");
  }
}
function EditOrganizationOtherSettingsComponent_div_374_nb_option_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "nb-option", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const inactivity_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("value", inactivity_r26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", inactivity_r26, " ");
  }
}
function EditOrganizationOtherSettingsComponent_div_374_nb_option_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "nb-option", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const proof_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("value", proof_r27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", proof_r27, " ");
  }
}
function EditOrganizationOtherSettingsComponent_div_374_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "div", 33)(1, "div", 125)(2, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(5, "button", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(7, "nb-icon", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(8, "nb-select", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(10, EditOrganizationOtherSettingsComponent_div_374_nb_option_10_Template, 2, 2, "nb-option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(11, "div", 125)(12, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(15, "button", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(17, "nb-icon", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(18, "nb-select", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(20, EditOrganizationOtherSettingsComponent_div_374_nb_option_20_Template, 2, 2, "nb-option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()();
  }
  if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(4, 8, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.INACTIVITY_TIME_LIMIT"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(6, 10, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.INACTIVITY_TIME_LIMIT_INFO"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(9, 12, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.INACTIVITY_TIME_LIMIT"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx_r15.listOfInactivityLimits);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(14, 14, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.ACTIVITY_PROOF_DURATION"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(16, 16, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.ACTIVITY_PROOF_DURATION_INFO"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(19, 18, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.ACTIVITY_PROOF_DURATION"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx_r15.listOfActivityProofDuration);
  }
}
function EditOrganizationOtherSettingsComponent_div_385_nb_option_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "nb-option", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const screenshotFrequency_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("value", screenshotFrequency_r28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", screenshotFrequency_r28, " ");
  }
}
function EditOrganizationOtherSettingsComponent_div_385_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "div", 33)(1, "div", 128)(2, "nb-toggle", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(5, "button", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(7, "nb-icon", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(8, "div", 128)(9, "nb-toggle", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(12, "button", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(14, "nb-icon", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(15, "div", 131)(16, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(19, "button", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(20, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(21, "nb-icon", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(22, "nb-select", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(23, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(24, EditOrganizationOtherSettingsComponent_div_385_nb_option_24_Template, 2, 2, "nb-option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()();
  }
  if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(4, 8, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.RANDOM_SCREENSHOT"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(6, 10, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.RANDOM_SCREENSHOT_INFO"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(11, 12, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.TRACK_ON_SLEEP"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(13, 14, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.TRACK_ON_SLEEP_INFO"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(18, 16, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.SCREENSHOT_FREQUENCY"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(20, 18, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.SCREENSHOT_FREQUENCY_INFO"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(23, 20, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.INACTIVITY_TIME_LIMIT"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx_r15.screenshotFrequencyOptions);
  }
}
function EditOrganizationOtherSettingsComponent_nb_option_397_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "nb-option", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const hour_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("value", hour_r29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", hour_r29, " ");
  }
}
function EditOrganizationOtherSettingsComponent_nb_option_514_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "nb-option", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const type_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("value", type_r30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(2, 2, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.PROOF_OF_COMPLETION_TYPE_DROPDOWN." + type_r30), " ");
  }
}
let EditOrganizationOtherSettingsComponent = /*#__PURE__*/(() => {
  let EditOrganizationOtherSettingsComponent = class EditOrganizationOtherSettingsComponent extends _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_2__/* .NotesWithTagsComponent */ .i {
    static {
      EditOrganizationOtherSettingsComponent_1 = this;
    }
    get isTrackInactivity() {
      return this.form.get('allowTrackInactivity').value;
    }
    static buildForm(fb) {
      const currentYear = new Date().getFullYear();
      const startOfYear = (0,_angular_common__WEBPACK_IMPORTED_MODULE_3__/* .formatDate */ .Yq)(new Date(currentYear, 0, 1), 'yyyy-MM-dd', 'en'); // January 1st
      const endOfYear = (0,_angular_common__WEBPACK_IMPORTED_MODULE_3__/* .formatDate */ .Yq)(new Date(currentYear, 11, 31), 'yyyy-MM-dd', 'en'); // December 31st
      return fb.group({
        name: [],
        currency: [],
        defaultValueDateType: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .Validators */ .k0.required],
        regionCode: [],
        defaultAlignmentType: [],
        brandColor: [],
        dateFormat: [],
        timeZone: [],
        startWeekOn: [],
        defaultStartTime: [],
        defaultEndTime: [],
        numberFormat: [],
        bonusType: [],
        bonusPercentage: [],
        invitesAllowed: [false],
        inviteExpiryPeriod: [],
        fiscalStartDate: [startOfYear],
        fiscalEndDate: [endOfYear],
        futureDateAllowed: [false],
        allowManualTime: [],
        allowModifyTime: [],
        allowDeleteTime: [],
        allowTrackInactivity: [],
        inactivityTimeLimit: [1],
        activityProofDuration: [1],
        requireReason: [],
        requireDescription: [],
        requireProject: [],
        requireTask: [],
        requireClient: [],
        timeFormat: [12],
        separateInvoiceItemTaxAndDiscount: [],
        defaultInvoiceEstimateTerms: [],
        fiscalInformation: [],
        currencyPosition: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_5__/* .CurrencyPosition */ .F2.LEFT],
        discountAfterTax: [],
        convertAcceptedEstimates: [false],
        daysUntilDue: [],
        invoiceTemplate: [],
        estimateTemplate: [],
        receiptTemplate: [],
        isDefault: [],
        isRemoveIdleTime: [false],
        allowScreenshotCapture: [true],
        upworkOrganizationId: [null],
        upworkOrganizationName: [null],
        randomScreenshot: [false],
        trackOnSleep: [false],
        screenshotFrequency: [10],
        enforced: [false],
        standardWorkHoursPerDay: [_gauzy_constants__WEBPACK_IMPORTED_MODULE_6__/* .DEFAULT_STANDARD_WORK_HOURS_PER_DAY */ .bO],
        allowAgentAppExit: [true],
        allowLogoutFromAgentApp: [true],
        trackKeyboardMouseActivity: [false],
        trackAllDisplays: [true]
      });
    }
    set content(content) {
      if (content) {
        this.accordion = content;
        this._cdr.detectChanges();
      }
    }
    static buildTaskSettingForm(fb) {
      return fb.group({
        isTasksPrivacyEnabled: [],
        isTasksMultipleAssigneesEnabled: [],
        isTasksManualTimeEnabled: [],
        isTasksGroupEstimationEnabled: [],
        isTasksEstimationInHoursEnabled: [],
        isTasksEstimationInStoryPointsEnabled: [],
        isTasksProofOfCompletionEnabled: [],
        tasksProofOfCompletionType: [],
        // Enum
        isTasksLinkedEnabled: [],
        isTasksCommentsEnabled: [],
        isTasksHistoryEnabled: [],
        isTasksAcceptanceCriteriaEnabled: [],
        isTasksDraftsEnabled: [],
        isTasksNotifyLeftEnabled: [],
        tasksNotifyLeftPeriodDays: [],
        isTasksAutoCloseEnabled: [],
        tasksAutoClosePeriodDays: [],
        isTasksAutoArchiveEnabled: [],
        tasksAutoArchivePeriodDays: [],
        isTasksAutoStatusEnabled: []
      });
    }
    /**
     * Check if the form is enforced.
     */
    get isEnforced() {
      return this.form.get('enforced').value;
    }
    constructor(translateService, themeService, _route, _router, _fb, _cdr, _organizationService, _organizationTaskSettingService, _toastrService, _organizationEditStore, _store, _accountingTemplateService) {
      super(themeService, translateService);
      this.translateService = translateService;
      this.themeService = themeService;
      this._route = _route;
      this._router = _router;
      this._fb = _fb;
      this._cdr = _cdr;
      this._organizationService = _organizationService;
      this._organizationTaskSettingService = _organizationTaskSettingService;
      this._toastrService = _toastrService;
      this._organizationEditStore = _organizationEditStore;
      this._store = _store;
      this._accountingTemplateService = _accountingTemplateService;
      this.defaultOrganizationSelection = [{
        key: 'Yes',
        value: true
      }, {
        key: 'No',
        value: false
      }];
      this.defaultValueDateTypes = Object.values(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_5__/* .DefaultValueDateTypeEnum */ .CZ);
      this.defaultAlignmentTypes = Object.values(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_5__/* .AlignmentOptions */ .Qb);
      this.defaultCurrencyPosition = Object.values(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_5__/* .CurrencyPosition */ .F2);
      this.defaultBonusTypes = Object.values(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_5__/* .BonusTypeEnum */ .x2);
      this.defaultTaskProofOfCompletionTypes = Object.values(_gauzy_constants__WEBPACK_IMPORTED_MODULE_7__/* .TaskProofOfCompletionTypeEnum */ .QL);
      this.invoiceTemplates = [];
      this.estimateTemplates = [];
      this.receiptTemplates = [];
      this.listOfDateFormats = _gauzy_constants__WEBPACK_IMPORTED_MODULE_6__/* .DEFAULT_DATE_FORMATS */ ._E;
      this.listOfTimeFormats = _gauzy_constants__WEBPACK_IMPORTED_MODULE_6__/* .DEFAULT_TIME_FORMATS */ .Fo;
      this.listOfInactivityLimits = _gauzy_constants__WEBPACK_IMPORTED_MODULE_6__/* .DEFAULT_INACTIVITY_TIME_LIMITS */ .sL;
      this.listOfActivityProofDuration = _gauzy_constants__WEBPACK_IMPORTED_MODULE_6__/* .DEFAULT_ACTIVITY_PROOF_DURATIONS */ .pU;
      this.screenshotFrequencyOptions = _gauzy_constants__WEBPACK_IMPORTED_MODULE_6__/* .DEFAULT_SCREENSHOT_FREQUENCY_OPTIONS */ .$i;
      this.numberFormats = ['USD', 'BGN', 'ILS'];
      this.weekdays = Object.values(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_5__/* .WeekDaysEnum */ .ru);
      this.regionCodes = Object.keys(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_5__/* .RegionsEnum */ .ZD);
      this.regions = Object.values(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_5__/* .RegionsEnum */ .ZD);
      this.standardWorkHoursPerDayOptions = Array.from({
        length: 24
      }, (_, i) => i + 1); // Creates an array from 1 to 24
      /*
       * Organization Mutation Form
       */
      this.form = EditOrganizationOtherSettingsComponent_1.buildForm(this._fb);
      /*
       * Organization Task Setting
       */
      this.taskSettingForm = EditOrganizationOtherSettingsComponent_1.buildTaskSettingForm(this._fb);
    }
    ngOnInit() {
      this._route.parent.data.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .debounceTime */ .B)(100), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .filter */ .p)(data => {
        return !!data && (!!data.organization || !!data.organizationTaskSetting);
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .map */ .T)(({
        organization,
        organizationTaskSetting
      }) => {
        return {
          organization,
          organizationTaskSetting
        };
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__/* .tap */ .M)(data => {
        this.organization = data.organization;
        this.organizationTaskSetting = data.organizationTaskSetting;
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__/* .tap */ .M)(data => this.regionCode = data.organization.regionCode), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__/* .tap */ .M)(() => this._setFormValues()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__/* .tap */ .M)(() => this._getTemplates()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_12__/* .untilDestroyed */ .s)(this)).subscribe();
    }
    ngAfterViewInit() {
      /**
       * Organization upwork organization integration ID controls value changes
       */
      const upworkOrganizationId = this.form.get('upworkOrganizationId');
      const upworkOrganizationName = this.form.get('upworkOrganizationName');
      /**
       * Emits an event every time the value of the control changes.
       * It also emits an event each time you call enable() or disable()
       */
      upworkOrganizationId.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__/* .tap */ .M)(value => {
        if (value) {
          upworkOrganizationName.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .Validators */ .k0.required]);
        } else {
          upworkOrganizationName.setValidators(null);
        }
        upworkOrganizationName.updateValueAndValidity();
      })).subscribe();
      /**
       * Emits an event every time the value of the control changes.
       * It also emits an event each time you call enable() or disable()
       */
      const regionCode = this.form.get('regionCode');
      regionCode.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__/* .tap */ .M)(value => this.regionCode = value), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_12__/* .untilDestroyed */ .s)(this)).subscribe();
      /**
       * Emits an event every time the value of the control changes.
       * It also emits an event each time you call enable() or disable()
       */
      const bonusTypeControl = this.form.get('bonusType');
      bonusTypeControl.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__/* .tap */ .M)(bonusType => {
        this.onChangedBonusPercentage(bonusType);
      }), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_12__/* .untilDestroyed */ .s)(this)).subscribe();
      /**
       * Emits an event every time the value of the control changes.
       * It also emits an event each time you call enable() or disable()
       */
      const invitesAllowedControl = this.form.get('invitesAllowed');
      invitesAllowedControl.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__/* .tap */ .M)(invitesAllowed => {
        this.toggleInviteExpiryPeriod(invitesAllowed);
      }), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_12__/* .untilDestroyed */ .s)(this)).subscribe();
      /**
       * Emits an event every time the value of the control changes.
       * It also emits an event each time you call enable() or disable()
       */
      const isTasksProofOfCompletionEnabledControl = this.taskSettingForm.get('isTasksProofOfCompletionEnabled');
      isTasksProofOfCompletionEnabledControl.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__/* .tap */ .M)(taskProofOfCompletionEnabled => {
        this.toggleTasksProofOfCompletionType(taskProofOfCompletionEnabled);
      }), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_12__/* .untilDestroyed */ .s)(this)).subscribe();
      /**
       * Emits an event every time the value of the control changes.
       * It also emits an event each time you call enable() or disable()
       */
      const isTasksNotifyLeftEnabledControl = this.taskSettingForm.get('isTasksNotifyLeftEnabled');
      isTasksNotifyLeftEnabledControl.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__/* .tap */ .M)(taskNotifyEnabled => {
        this.toggleTasksNotifyLeftPeriodDays(taskNotifyEnabled);
      }), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_12__/* .untilDestroyed */ .s)(this)).subscribe();
      /**
       * Emits an event every time the value of the control changes.
       * It also emits an event each time you call enable() or disable()
       */
      const isTasksAutoCloseEnabledControl = this.taskSettingForm.get('isTasksAutoCloseEnabled');
      isTasksAutoCloseEnabledControl.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__/* .tap */ .M)(taskAutoCloseEnabled => {
        this.toggleTasksAutoClosePeriodDays(taskAutoCloseEnabled);
      }), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_12__/* .untilDestroyed */ .s)(this)).subscribe();
      /**
       * Emits an event every time the value of the control changes.
       * It also emits an event each time you call enable() or disable()
       */
      const isTasksAutoArchiveEnabledControl = this.taskSettingForm.get('isTasksAutoArchiveEnabled');
      isTasksAutoArchiveEnabledControl.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__/* .tap */ .M)(taskAutoArchiveEnabled => {
        this.toggleTasksAutoArchivePeriodDays(taskAutoArchiveEnabled);
      }), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_12__/* .untilDestroyed */ .s)(this)).subscribe();
    }
    /**
     * Returns a preview of the current date based on the specified date format
     * and the regionCode locale (defaults to English if none is provided).
     *
     * @param format - A string representing the desired date format (e.g., 'YYYY-MM-DD')
     * @returns A formatted date string based on the specified format
     */
    dateFormatPreview(format) {
      if (!format) return;
      const locale = this.regionCode || _gauzy_contracts__WEBPACK_IMPORTED_MODULE_5__/* .RegionsEnum */ .ZD.EN;
      return moment__WEBPACK_IMPORTED_MODULE_0__().locale(locale).format(format);
    }
    /**
     * Returns a preview of a formatted number (e.g., 12345.67) based on the specified currency format.
     * The function selects the appropriate locale based on the provided currency and formats the number.
     *
     * @param format - A string representing the desired currency format (e.g., 'USD', 'BGN', 'ILS')
     * @returns A formatted number string in the specified currency
     */
    numberFormatPreview(format) {
      const number = 12345.67;
      const currencyLocaleMap = {
        [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_13__/* .CurrenciesEnum */ .X.BGN]: 'bg',
        // Bulgarian
        [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_13__/* .CurrenciesEnum */ .X.USD]: 'en',
        // US English
        [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_13__/* .CurrenciesEnum */ .X.ILS]: 'he' // Hebrew (Israel)
      };
      // Get the locale code based on the provided currency format
      const locale = currencyLocaleMap[format] || 'en'; // Default to 'en' if no match
      // Format the number using the selected locale
      return number.toLocaleString(locale, {
        style: 'currency',
        currency: format,
        currencyDisplay: 'symbol'
      });
    }
    /**
     * Update organization settings
     */
    updateOrganizationSettings() {
      var _this = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A)(function* () {
        // Validate the form and check if organization exists
        if (_this.form.invalid || !_this.organization) {
          return;
        }
        // Extract organization ID and update organization settings
        const {
          id: organizationId,
          name
        } = _this.organization;
        try {
          const organization = yield _this._organizationService.update(organizationId, _this.form.value);
          // Update the organization in the store
          _this._organizationEditStore.organizationAction = {
            organization,
            action: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_5__/* .CrudActionEnum */ .GD.UPDATED
          };
          _this._store.selectedOrganization = organization;
        } catch (error) {
          console.error('Error while updating organization settings', error);
          return; // Exit early if an error occurs
        }
        // Update organization task settings
        _this.updateOrganizationTaskSetting();
        // Save selected templates
        yield _this.saveTemplate(_this.selectedInvoiceTemplate);
        yield _this.saveTemplate(_this.selectedEstimateTemplate);
        yield _this.saveTemplate(_this.selectedReceiptTemplate);
        // Show success message
        _this._toastrService.success(`TOASTR.MESSAGE.ORGANIZATION_SETTINGS_UPDATED`, {
          name
        });
        // Navigate back
        _this.goBack();
      })();
    }
    /**
     * Update organization task settings.
     *
     * @returns A subscription for the create or update operation.
     *
     * @throws Throws an error and displays a toastr message if the operation fails.
     */
    updateOrganizationTaskSetting() {
      // Check if the organization is available.
      if (!this.organization) {
        return;
      }
      // Extract organization information from the current organization.
      const {
        id: organizationId,
        tenantId
      } = this.organization;
      // Prepare the task setting input.
      const input = {
        ...this.taskSettingForm.value,
        organizationId,
        tenantId
      };
      // Determine the service method based on the existence of organizationTaskSetting.
      const method$ = this.organizationTaskSetting ? this._organizationTaskSettingService.update(this.organizationTaskSetting.id, input) : this._organizationTaskSettingService.create(input);
      // Perform the create or update operation and subscribe to the result.
      return method$.subscribe({
        next: () => {
          // You can add success logic here if needed, like displaying a success message.
        },
        error: () => {
          // Display a toastr error message if the operation fails.
          this._toastrService.error(`TOASTR.MESSAGE.ORGANIZATION_TASK_SETTINGS_UPDATE_ERROR`);
        }
      });
    }
    goBack() {
      if (this.organization && this.organization.id) {
        this._router.navigate([`/pages/organizations/edit/${this.organization.id}`]);
      } else {
        // Handle the case where the organization ID is not available
        console.warn('Organization ID is not available for navigation.');
      }
    }
    /**
     * Helper function to get the default bonus based on the bonus type.
     *
     * @param bonusType - The type of bonus to determine the default value for.
     * @returns The default bonus percentage based on the bonus type.
     */
    getDefaultBonus(bonusType) {
      switch (bonusType) {
        case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_5__/* .BonusTypeEnum */ .x2.PROFIT_BASED_BONUS:
          return _gauzy_constants__WEBPACK_IMPORTED_MODULE_6__/* .DEFAULT_PROFIT_BASED_BONUS */ .Zo;
        case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_5__/* .BonusTypeEnum */ .x2.REVENUE_BASED_BONUS:
          return _gauzy_constants__WEBPACK_IMPORTED_MODULE_6__/* .DEFAULT_REVENUE_BASED_BONUS */ .xm;
        default:
          return 0;
      }
    }
    /**
     * Handles changes to the bonus type and updates the bonus percentage control accordingly.
     *
     * @param bonusType - The selected bonus type, which determines the default bonus percentage and validation rules.
     */
    onChangedBonusPercentage(bonusType) {
      const bonusPercentageControl = this.form.get('bonusPercentage');
      if (bonusType) {
        const defaultBonus = this.getDefaultBonus(bonusType);
        bonusPercentageControl.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .Validators */ .k0.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .Validators */ .k0.min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .Validators */ .k0.max(100)]);
        bonusPercentageControl.setValue(this.organization.bonusPercentage || defaultBonus);
        bonusPercentageControl.enable();
      } else {
        bonusPercentageControl.setValidators(null);
        bonusPercentageControl.setValue(null);
        bonusPercentageControl.disable();
      }
      bonusPercentageControl.updateValueAndValidity();
    }
    /**
     * Invite expire toggle switch
     * Enabled/Disabled InviteExpiryPeriod form control
     *
     * @param inviteExpiry - Determines whether the invite expiry feature is enabled or disabled.
     */
    toggleInviteExpiryPeriod(inviteExpiry) {
      const inviteExpiryPeriodControl = this.form.get('inviteExpiryPeriod');
      const {
        inviteExpiryPeriod
      } = this.organization;
      if (inviteExpiry) {
        inviteExpiryPeriodControl.enable();
        inviteExpiryPeriodControl.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .Validators */ .k0.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .Validators */ .k0.min(1)]);
      } else {
        inviteExpiryPeriodControl.disable();
        inviteExpiryPeriodControl.setValidators(null);
      }
      inviteExpiryPeriodControl.setValue(inviteExpiryPeriod || _gauzy_constants__WEBPACK_IMPORTED_MODULE_6__/* .DEFAULT_INVITE_EXPIRY_PERIOD */ .Y$);
      inviteExpiryPeriodControl.updateValueAndValidity();
    }
    /**
     * Tasks Proof Of Completion toggle switch
     * Enabled/Disabled tasksProofOfCompletionType form control
     *
     * @param taskProofCompletion
     * @returns
     */
    toggleTasksProofOfCompletionType(taskProofCompletion) {
      const taskProofOfCompletionTypeControl = this.taskSettingForm.get('tasksProofOfCompletionType');
      const {
        tasksProofOfCompletionType
      } = this.organizationTaskSetting || {};
      if (taskProofCompletion) {
        taskProofOfCompletionTypeControl.enable();
        taskProofOfCompletionTypeControl.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .Validators */ .k0.required]);
      } else {
        taskProofOfCompletionTypeControl.disable();
        taskProofOfCompletionTypeControl.setValidators(null);
      }
      taskProofOfCompletionTypeControl.setValue(tasksProofOfCompletionType || _gauzy_constants__WEBPACK_IMPORTED_MODULE_7__/* .DEFAULT_PROOF_COMPLETION_TYPE */ .D4);
      taskProofOfCompletionTypeControl.updateValueAndValidity();
    }
    /**
     * Task Notify Left Period toggle switch
     * Enabled/Disabled tasksNotifyLeftPeriodDays form control
     *
     * @param taskNotify
     * @returns
     */
    toggleTasksNotifyLeftPeriodDays(taskNotify) {
      const taskNotifyPeriodControl = this.taskSettingForm.get('tasksNotifyLeftPeriodDays');
      const {
        tasksNotifyLeftPeriodDays
      } = this.organizationTaskSetting || {};
      if (taskNotify) {
        taskNotifyPeriodControl.enable();
        taskNotifyPeriodControl.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .Validators */ .k0.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .Validators */ .k0.min(1)]);
      } else {
        taskNotifyPeriodControl.disable();
        taskNotifyPeriodControl.setValidators(null);
      }
      taskNotifyPeriodControl.setValue(tasksNotifyLeftPeriodDays || _gauzy_constants__WEBPACK_IMPORTED_MODULE_7__/* .DEFAULT_TASK_NOTIFY_PERIOD */ .oU);
      taskNotifyPeriodControl.updateValueAndValidity();
    }
    /**
     * Tasks Auto Close toggle switch
     * Enabled/Disabled tasksAutoClosePeriodDays form control
     *
     * @param taskAutoClose
     * @returns
     */
    toggleTasksAutoClosePeriodDays(taskAutoClose) {
      const taskAutoClosePeriodControl = this.taskSettingForm.get('tasksAutoClosePeriodDays');
      const {
        tasksAutoClosePeriodDays
      } = this.organizationTaskSetting || {};
      if (taskAutoClose) {
        taskAutoClosePeriodControl.enable();
        taskAutoClosePeriodControl.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .Validators */ .k0.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .Validators */ .k0.min(1)]);
      } else {
        taskAutoClosePeriodControl.disable();
        taskAutoClosePeriodControl.setValidators(null);
      }
      taskAutoClosePeriodControl.setValue(tasksAutoClosePeriodDays || _gauzy_constants__WEBPACK_IMPORTED_MODULE_7__/* .DEFAULT_AUTO_CLOSE_ISSUE_PERIOD */ .hw);
      taskAutoClosePeriodControl.updateValueAndValidity();
    }
    /**
     * Tasks Auto Archive toggle switch
     * Enabled/Disabled tasksAutoArchivePeriodDays form control
     *
     * @param taskAutoArchive
     * @returns
     */
    toggleTasksAutoArchivePeriodDays(taskAutoArchive) {
      const taskAutoArchivePeriodControl = this.taskSettingForm.get('tasksAutoArchivePeriodDays');
      const {
        tasksAutoArchivePeriodDays
      } = this.organizationTaskSetting || {};
      if (taskAutoArchive) {
        taskAutoArchivePeriodControl.enable();
        taskAutoArchivePeriodControl.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .Validators */ .k0.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .Validators */ .k0.min(1)]);
      } else {
        taskAutoArchivePeriodControl.disable();
        taskAutoArchivePeriodControl.setValidators(null);
      }
      taskAutoArchivePeriodControl.setValue(tasksAutoArchivePeriodDays || _gauzy_constants__WEBPACK_IMPORTED_MODULE_7__/* .DEFAULT_AUTO_CLOSE_ISSUE_PERIOD */ .hw);
      taskAutoArchivePeriodControl.updateValueAndValidity();
    }
    /**
     * Retrieves the accounting templates for the current organization and categorizes them
     * into invoice, estimate, and receipt templates.
     *
     * @returns A Promise that resolves when the templates are successfully retrieved and categorized.
     */
    _getTemplates() {
      var _this2 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A)(function* () {
        if (!_this2.organization) {
          return;
        }
        const {
          id: organizationId,
          tenantId
        } = _this2.organization;
        const {
          items = []
        } = yield _this2._accountingTemplateService.getAll([], {
          languageCode: _this2._store.preferredLanguage,
          organizationId,
          tenantId
        });
        // Function to ensure no duplicate templates are added to the lists
        const addUniqueTemplate = (templates, template) => {
          if (!templates.some(t => t.id === template.id)) {
            templates.push(template);
          }
        };
        items.forEach(template => {
          switch (template.templateType) {
            case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_15__/* .AccountingTemplateTypeEnum */ .b.INVOICE:
              addUniqueTemplate(_this2.invoiceTemplates, template);
              break;
            case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_15__/* .AccountingTemplateTypeEnum */ .b.ESTIMATE:
              addUniqueTemplate(_this2.estimateTemplates, template);
              break;
            case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_15__/* .AccountingTemplateTypeEnum */ .b.RECEIPT:
              addUniqueTemplate(_this2.receiptTemplates, template);
              break;
            default:
              // Ignore templates that don't match predefined types
              break;
          }
        });
      })();
    }
    /**
     * Selects a specific template based on the event (template ID) and assigns
     * it to the correct template type (INVOICE, ESTIMATE, or RECEIPT).
     *
     * @param event - The ID of the template selected by the user.
     */
    selectTemplate(event) {
      var _this3 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A)(function* () {
        const template = yield _this3._accountingTemplateService.getById(event);
        // Attach organization details to the template
        template['organization'] = _this3.organization;
        template['organizationId'] = _this3.organization.id;
        // Assign the template based on its type
        switch (template.templateType) {
          case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_15__/* .AccountingTemplateTypeEnum */ .b.INVOICE:
            _this3.selectedInvoiceTemplate = template;
            break;
          case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_15__/* .AccountingTemplateTypeEnum */ .b.ESTIMATE:
            _this3.selectedEstimateTemplate = template;
            break;
          case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_15__/* .AccountingTemplateTypeEnum */ .b.RECEIPT:
            _this3.selectedReceiptTemplate = template;
            break;
          default:
            // Handle unknown template types if needed
            break;
        }
      })();
    }
    /**
     * Saves an updated accounting template by calling the accounting template service.
     *
     * @param template - The accounting template to be saved.
     */
    saveTemplate(template) {
      var _this4 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A)(function* () {
        if (template) {
          yield _this4._accountingTemplateService.updateTemplate(template.id, template);
        }
      })();
    }
    /**
     * Sets the value of the `FormGroup`. It accepts an object that matches
     *
     * ### Set the complete value for the form group
     *
     * @returns
     */
    _setFormValues() {
      if (!this.organization) {
        return;
      }
      this._organizationEditStore.selectedOrganization = this.organization;
      this._setDefaultAccountingTemplates();
      this.form.patchValue({
        ...this.organization,
        // This will patch all matching form controls
        fiscalStartDate: this.organization.fiscalStartDate,
        // Apply specific formatting/transformation if needed
        fiscalEndDate: this.organization.fiscalEndDate // Apply specific formatting/transformation if needed
      });
      this.form.updateValueAndValidity();
      const {
        isTasksPrivacyEnabled = false,
        isTasksMultipleAssigneesEnabled = false,
        isTasksManualTimeEnabled = false,
        isTasksGroupEstimationEnabled = false,
        isTasksEstimationInHoursEnabled = false,
        isTasksEstimationInStoryPointsEnabled = false,
        isTasksProofOfCompletionEnabled = false,
        tasksProofOfCompletionType = _gauzy_constants__WEBPACK_IMPORTED_MODULE_7__/* .DEFAULT_PROOF_COMPLETION_TYPE */ .D4,
        isTasksLinkedEnabled = false,
        isTasksCommentsEnabled = false,
        isTasksHistoryEnabled = false,
        isTasksAcceptanceCriteriaEnabled = false,
        isTasksDraftsEnabled = false,
        isTasksNotifyLeftEnabled = false,
        tasksNotifyLeftPeriodDays = _gauzy_constants__WEBPACK_IMPORTED_MODULE_7__/* .DEFAULT_TASK_NOTIFY_PERIOD */ .oU,
        isTasksAutoCloseEnabled = false,
        tasksAutoClosePeriodDays = _gauzy_constants__WEBPACK_IMPORTED_MODULE_7__/* .DEFAULT_AUTO_CLOSE_ISSUE_PERIOD */ .hw,
        isTasksAutoArchiveEnabled = false,
        tasksAutoArchivePeriodDays = _gauzy_constants__WEBPACK_IMPORTED_MODULE_7__/* .DEFAULT_AUTO_ARCHIVE_ISSUE_PERIOD */ .Fj,
        isTasksAutoStatusEnabled = false
      } = this.organizationTaskSetting || {};
      this.taskSettingForm.patchValue({
        isTasksPrivacyEnabled,
        isTasksMultipleAssigneesEnabled,
        isTasksManualTimeEnabled,
        isTasksGroupEstimationEnabled,
        isTasksEstimationInHoursEnabled,
        isTasksEstimationInStoryPointsEnabled,
        isTasksProofOfCompletionEnabled,
        tasksProofOfCompletionType,
        isTasksLinkedEnabled,
        isTasksCommentsEnabled,
        isTasksHistoryEnabled,
        isTasksAcceptanceCriteriaEnabled,
        isTasksDraftsEnabled,
        isTasksNotifyLeftEnabled,
        tasksNotifyLeftPeriodDays,
        isTasksAutoCloseEnabled,
        tasksAutoClosePeriodDays,
        isTasksAutoArchiveEnabled,
        tasksAutoArchivePeriodDays,
        isTasksAutoStatusEnabled
      });
      this.taskSettingForm.updateValueAndValidity();
      /**
       * Default selected accounting templates dropdowns
       */
      const invoiceTemplateControl = this.form.get('invoiceTemplate');
      invoiceTemplateControl.setValue(this.selectedInvoiceTemplate ? this.selectedInvoiceTemplate.id : null);
      invoiceTemplateControl.updateValueAndValidity();
      const estimateTemplateControl = this.form.get('estimateTemplate');
      estimateTemplateControl.setValue(this.selectedEstimateTemplate ? this.selectedEstimateTemplate.id : null);
      estimateTemplateControl.updateValueAndValidity();
      const receiptTemplateControl = this.form.get('receiptTemplate');
      receiptTemplateControl.setValue(this.selectedReceiptTemplate ? this.selectedReceiptTemplate.id : null);
      receiptTemplateControl.updateValueAndValidity();
    }
    /**
     * Set default organization selected accounting templates
     *
     * @returns
     */
    _setDefaultAccountingTemplates() {
      if (!this.organization || (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_16__/* .isEmpty */ .Im)(this.organization.accountingTemplates)) {
        return;
      }
      if (this.organization.accountingTemplates) {
        this.organization.accountingTemplates.forEach(template => {
          switch (template.templateType) {
            case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_15__/* .AccountingTemplateTypeEnum */ .b.INVOICE:
              this.selectedInvoiceTemplate = template;
              break;
            case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_15__/* .AccountingTemplateTypeEnum */ .b.ESTIMATE:
              this.selectedEstimateTemplate = template;
              break;
            case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_15__/* .AccountingTemplateTypeEnum */ .b.RECEIPT:
              this.selectedReceiptTemplate = template;
              break;
            default:
              break;
          }
        });
      }
    }
    ngOnDestroy() {}
    static {
      this.ɵfac = function EditOrganizationOtherSettingsComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || EditOrganizationOtherSettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__/* .TranslateService */ .c$), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_nebular_theme__WEBPACK_IMPORTED_MODULE_18__/* .NbThemeService */ .NS1), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_router__WEBPACK_IMPORTED_MODULE_19__/* .ActivatedRoute */ .nX), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_router__WEBPACK_IMPORTED_MODULE_19__/* .Router */ .Ix), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .UntypedFormBuilder */ .ze), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* .ChangeDetectorRef */ .gRc), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_20__/* .OrganizationsService */ .k), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_21__/* .OrganizationTaskSettingService */ .e), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_22__/* .ToastrService */ .t), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_23__/* .OrganizationEditStore */ .vO), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_24__/* .Store */ .il), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_25__/* .AccountingTemplateService */ .$));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineComponent"] */ .VBU({
        type: EditOrganizationOtherSettingsComponent,
        selectors: [["ga-edit-org-other-settings"]],
        viewQuery: function EditOrganizationOtherSettingsComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵviewQuery"] */ .GBs(_c0, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵviewQuery"] */ .GBs(_c1, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵviewQuery"] */ .GBs(_c2, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵviewQuery"] */ .GBs(_c3, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵviewQuery"] */ .GBs(_c4, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵviewQuery"] */ .GBs(_c5, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵviewQuery"] */ .GBs(_c6, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵviewQuery"] */ .GBs(_c7, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵviewQuery"] */ .GBs(_c8, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵviewQuery"] */ .GBs(_c9, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵviewQuery"] */ .GBs(_c10, 5);
          }
          if (rf & 2) {
            let _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵqueryRefresh"] */ .mGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵloadQuery"] */ .lsd()) && (ctx.general = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵqueryRefresh"] */ .mGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵloadQuery"] */ .lsd()) && (ctx.design = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵqueryRefresh"] */ .mGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵloadQuery"] */ .lsd()) && (ctx.accounting = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵqueryRefresh"] */ .mGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵloadQuery"] */ .lsd()) && (ctx.bonus = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵqueryRefresh"] */ .mGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵloadQuery"] */ .lsd()) && (ctx.invites = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵqueryRefresh"] */ .mGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵloadQuery"] */ .lsd()) && (ctx.dateLimit = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵqueryRefresh"] */ .mGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵloadQuery"] */ .lsd()) && (ctx.agent = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵqueryRefresh"] */ .mGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵloadQuery"] */ .lsd()) && (ctx.timer = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵqueryRefresh"] */ .mGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵloadQuery"] */ .lsd()) && (ctx.integrations = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵqueryRefresh"] */ .mGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵloadQuery"] */ .lsd()) && (ctx.taskSetting = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵqueryRefresh"] */ .mGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵloadQuery"] */ .lsd()) && (ctx.content = _t.first);
          }
        },
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
        decls: 632,
        vars: 505,
        consts: [["accordion", ""], ["general", ""], ["generalBody", ""], ["design", ""], ["designBody", ""], ["accounting", ""], ["accountingBody", ""], ["bonus", ""], ["bonusBody", ""], ["invites", ""], ["invitesBody", ""], ["dateLimit", ""], ["dateLimitBody", ""], ["timer", ""], ["timerBody", ""], ["agent", ""], ["agentBody", ""], ["taskSetting", ""], ["taskSettingBody", ""], ["integrations", ""], ["integrationsBody", ""], [1, "main-form", 3, "formGroup"], [1, "aside-nav"], [1, "settings-section-header"], [3, "click"], [3, "ngClass"], [1, "fields-section"], [1, "actions"], ["debounceClick", "", "nbButton", "", "status", "success", 3, "throttledClick", "disabled"], [1, "accordion-section"], [3, "expanded"], [3, "hidden"], [1, "fields"], [1, "row"], [1, "col-6"], ["formControlName", "timeZone"], [1, "form-group"], ["for", "startWeekOnSelect", 1, "label"], ["size", "medium", "formControlName", "startWeekOn", "id", "startWeekOnSelect", "fullWidth", "true", 1, "d-block", 3, "placeholder"], [3, "value", 4, "ngFor", "ngForOf"], [1, "form-group", "col-6", "date-picker-form"], [1, "label"], ["fullWidth", "", "formControlName", "defaultStartTime"], ["fullWidth", "", "formControlName", "defaultEndTime"], ["size", "medium", "formControlName", "defaultValueDateType", "fullWidth", "", 1, "d-block", 3, "placeholder"], ["size", "medium", "formControlName", "regionCode", "fullWidth", "", 1, "d-block", 3, "placeholder"], ["size", "medium", "formControlName", "numberFormat", "fullWidth", "", 1, "d-block", 3, "placeholder"], ["size", "medium", "formControlName", "dateFormat", "fullWidth", "", 1, "d-block", 3, "placeholder"], ["appendTo", "body", "formControlName", "timeFormat", 1, "time-format-select", 3, "items", "clearable", "searchable"], ["nbButton", "", "status", "info", "size", "small", "ghost", "", 1, "p-0", 3, "nbTooltip"], ["icon", "info"], ["size", "medium", "formControlName", "isDefault", "fullWidth", "", 1, "d-block", 3, "placeholder"], [1, "select-wrapper"], [1, "form-group", "design-select"], ["size", "medium", "formControlName", "defaultAlignmentType", "fullWidth", "", 1, "d-block", 3, "placeholder"], ["size", "medium", "formControlName", "currencyPosition", "fullWidth", "", 1, "d-block", 3, "placeholder"], [1, "row", "fiscal-years"], [1, "year-pick"], ["fullWidth", "", "id", "fiscalStartDate", "type", "date", "nbInput", "", "value", "2017-06-01", "formControlName", "fiscalStartDate"], ["fullWidth", "", "type", "date", "id", "fiscalEndDate", "nbInput", "", "formControlName", "fiscalEndDate"], [1, "row", "toggles"], [1, "form-group", "toggle-switch"], ["formControlName", "separateInvoiceItemTaxAndDiscount", "status", "primary", "labelPosition", "start", 1, "d-block"], ["formControlName", "discountAfterTax", "status", "primary", "labelPosition", "start", 1, "d-block"], ["formControlName", "convertAcceptedEstimates", "status", "primary", "labelPosition", "start", 1, "d-block"], [1, "row", "half-width-inputs"], ["formControlName", "daysUntilDue", "fullWidth", "", "type", "number", "nbInput", "", 3, "placeholder"], ["class", "col-6", 4, "ngIf"], ["size", "medium", "formControlName", "estimateTemplate", "fullWidth", "", 3, "selectedChange", "placeholder"], ["size", "medium", "formControlName", "receiptTemplate", "fullWidth", "", 3, "selectedChange", "placeholder"], ["size", "medium", "formControlName", "bonusType", "fullWidth", "", 1, "d-block", 3, "placeholder"], [3, "value"], ["nbInput", "", "type", "number", "formControlName", "bonusPercentage", "fullWidth", "", 1, "d-block", 3, "min", "placeholder", "ngClass"], ["formControlName", "invitesAllowed", "status", "primary", "labelPosition", "start", 1, "d-block"], ["nbInput", "", "type", "number", "formControlName", "inviteExpiryPeriod", "fullWidth", "", 1, "d-block", 3, "min", "placeholder", "ngClass"], ["formControlName", "futureDateAllowed", "status", "primary", "labelPosition", "start", 1, "d-block"], [1, "fields", "time-tracker"], [1, "col-xl-6", "col-12", "pt-2"], [1, "form-group", "invite-toggle"], ["formControlName", "allowManualTime", "status", "primary", "labelPosition", "start", 1, "d-block"], ["ghost", "", "nbButton", "", "size", "small", "status", "info", 3, "nbTooltip"], ["formControlName", "allowModifyTime", "status", "primary", "labelPosition", "start", 1, "d-block"], ["formControlName", "allowDeleteTime", "labelPosition", "start", "status", "primary", 1, "d-block"], [1, "col-xl-6", "col-12", "pt-2", "form-group", "invite-toggle"], ["formControlName", "allowScreenshotCapture", "status", "primary", "labelPosition", "start", 1, "d-block"], ["ghost", "", "nbButton", "", "size", "small", "status", "info", 1, "p-0", 3, "nbTooltip"], ["formControlName", "requireReason", "status", "primary", "labelPosition", "start", 1, "d-block"], ["formControlName", "requireDescription", "status", "primary", "labelPosition", "start", 1, "d-block"], ["formControlName", "requireProject", "status", "primary", "labelPosition", "start", 1, "d-block"], ["formControlName", "requireTask", "status", "primary", "labelPosition", "start", 1, "d-block"], ["formControlName", "requireClient", "labelPosition", "start", "status", "primary", 1, "d-block"], ["formControlName", "isRemoveIdleTime", "status", "primary", "labelPosition", "start", 1, "d-block"], ["formControlName", "allowTrackInactivity", "labelPosition", "start", "status", "primary", 1, "d-block", 3, "ngClass"], [1, "col-12"], ["class", "row", 4, "ngIf"], ["formControlName", "enforced", "labelPosition", "start", "status", "primary", 1, "d-block", 3, "ngClass"], ["formControlName", "standardWorkHoursPerDay", "fullWidth", "", "size", "medium", 3, "placeholder"], ["formControlName", "trackKeyboardMouseActivity", "status", "primary", "labelPosition", "start", 1, "d-block"], ["formControlName", "trackAllDisplays", "status", "primary", "labelPosition", "start", 1, "d-block"], ["formControlName", "allowAgentAppExit", "status", "primary", "labelPosition", "start", 1, "d-block"], ["formControlName", "allowLogoutFromAgentApp", "status", "primary", "labelPosition", "start", 1, "d-block"], [3, "formGroup"], ["formControlName", "isTasksPrivacyEnabled", "status", "primary", "labelPosition", "start", 1, "d-block"], ["formControlName", "isTasksMultipleAssigneesEnabled", "status", "primary", "labelPosition", "start", 1, "d-block"], ["formControlName", "isTasksManualTimeEnabled", "status", "primary", "labelPosition", "start", 1, "d-block"], ["formControlName", "isTasksGroupEstimationEnabled", "status", "primary", "labelPosition", "start", 1, "d-block"], ["formControlName", "isTasksEstimationInHoursEnabled", "status", "primary", "labelPosition", "start", 1, "d-block"], ["formControlName", "isTasksEstimationInStoryPointsEnabled", "status", "primary", "labelPosition", "start", 1, "d-block"], ["formControlName", "isTasksProofOfCompletionEnabled", "status", "primary", "labelPosition", "start", 1, "d-block"], ["size", "medium", "formControlName", "tasksProofOfCompletionType", "fullWidth", "", 1, "d-block", 3, "placeholder"], ["formControlName", "isTasksLinkedEnabled", "status", "primary", "labelPosition", "start", 1, "d-block"], ["formControlName", "isTasksCommentsEnabled", "status", "primary", "labelPosition", "start", 1, "d-block"], ["formControlName", "isTasksHistoryEnabled", "status", "primary", "labelPosition", "start", 1, "d-block"], ["formControlName", "isTasksAcceptanceCriteriaEnabled", "status", "primary", "labelPosition", "start", 1, "d-block"], ["formControlName", "isTasksDraftsEnabled", "status", "primary", "labelPosition", "start", 1, "d-block"], ["formControlName", "isTasksAutoStatusEnabled", "status", "primary", "labelPosition", "start", 1, "d-block"], ["formControlName", "isTasksNotifyLeftEnabled", "status", "primary", "labelPosition", "start", 1, "d-block"], ["nbInput", "", "type", "number", "formControlName", "tasksNotifyLeftPeriodDays", "fullWidth", "", 1, "d-block", 3, "min", "placeholder", "ngClass"], ["formControlName", "isTasksAutoCloseEnabled", "status", "primary", "labelPosition", "start", 1, "d-block"], ["nbInput", "", "type", "number", "formControlName", "tasksAutoClosePeriodDays", "fullWidth", "", 1, "d-block", 3, "min", "placeholder", "ngClass"], ["formControlName", "isTasksAutoArchiveEnabled", "status", "primary", "labelPosition", "start", 1, "d-block"], ["nbInput", "", "type", "number", "formControlName", "tasksAutoArchivePeriodDays", "fullWidth", "", 1, "d-block", 3, "min", "placeholder", "ngClass"], ["formControlName", "upworkOrganizationId", "fullWidth", "", "nbInput", "", 3, "placeholder"], ["formControlName", "upworkOrganizationName", "fullWidth", "", "nbInput", "", 3, "placeholder"], ["size", "medium", "fullWidth", "", "formControlName", "invoiceTemplate", 3, "selectedChange", "placeholder"], [1, "col-xl-6", "col-12"], ["formControlName", "inactivityTimeLimit", "fullWidth", "", "size", "medium", 3, "placeholder"], ["formControlName", "activityProofDuration", "fullWidth", "", "size", "medium", 3, "placeholder"], [1, "col-12", "mt-2"], ["formControlName", "randomScreenshot", "labelPosition", "start", "status", "primary", 1, "d-block"], ["formControlName", "trackOnSleep", "labelPosition", "start", "status", "primary", 1, "d-block"], [1, "col-6", "mt-2"], ["formControlName", "screenshotFrequency", "fullWidth", "", "size", "medium", 3, "placeholder"]],
        template: function EditOrganizationOtherSettingsComponent_Template(rf, ctx) {
          if (rf & 1) {
            const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetCurrentView"] */ .RV6();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "form", 21)(1, "aside", 22)(2, "h4", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(4, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(5, "ul")(6, "span", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("click", function EditOrganizationOtherSettingsComponent_Template_span_click_6_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              const general_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵreference"] */ .sdS(55);
              return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(general_r2.toggle());
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(7, "li", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(9, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(10, "span", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("click", function EditOrganizationOtherSettingsComponent_Template_span_click_10_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              const design_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵreference"] */ .sdS(134);
              return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(design_r3.toggle());
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(11, "li", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(13, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(14, "span", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("click", function EditOrganizationOtherSettingsComponent_Template_span_click_14_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              const accounting_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵreference"] */ .sdS(158);
              return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(accounting_r4.toggle());
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(15, "li", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(17, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(18, "span", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("click", function EditOrganizationOtherSettingsComponent_Template_span_click_18_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              const bonus_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵreference"] */ .sdS(225);
              return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(bonus_r5.toggle());
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(19, "li", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(20);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(21, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(22, "span", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("click", function EditOrganizationOtherSettingsComponent_Template_span_click_22_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              const invites_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵreference"] */ .sdS(252);
              return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(invites_r6.toggle());
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(23, "li", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(24);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(25, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(26, "span", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("click", function EditOrganizationOtherSettingsComponent_Template_span_click_26_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              const dateLimit_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵreference"] */ .sdS(276);
              return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(dateLimit_r7.toggle());
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(27, "li", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(28);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(29, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(30, "span", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("click", function EditOrganizationOtherSettingsComponent_Template_span_click_30_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              const timer_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵreference"] */ .sdS(292);
              return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(timer_r8.toggle());
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(31, "li", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(32);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(33, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(34, "span", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("click", function EditOrganizationOtherSettingsComponent_Template_span_click_34_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              const agent_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵreference"] */ .sdS(415);
              return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(agent_r9.toggle());
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(35, "li", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(36);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(37, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(38, "span", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("click", function EditOrganizationOtherSettingsComponent_Template_span_click_38_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              const taskSetting_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵreference"] */ .sdS(440);
              return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(taskSetting_r10.toggle());
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(39, "li", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(40);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(41, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(42, "span", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("click", function EditOrganizationOtherSettingsComponent_Template_span_click_42_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              const integrations_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵreference"] */ .sdS(606);
              return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(integrations_r11.toggle());
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(43, "li", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(44);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(45, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(46, "section", 26)(47, "div", 27)(48, "button", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("throttledClick", function EditOrganizationOtherSettingsComponent_Template_button_throttledClick_48_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx.updateOrganizationSettings());
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(49);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(50, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(51, "div", 29)(52, "nb-accordion", null, 0)(54, "nb-accordion-item", 30, 1)(56, "nb-accordion-item-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(57);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(58, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(59, "nb-accordion-item-body", 31, 2)(61, "div", 32)(62, "div", 33)(63, "div", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(64, "ga-timezone-selector", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(65, "div", 34)(66, "div", 36)(67, "label", 37);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(68);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(69, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(70, "nb-select", 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(71, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(72, EditOrganizationOtherSettingsComponent_nb_option_72_Template, 3, 4, "nb-option", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(73, "div", 40)(74, "label", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(75);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(76, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(77, "ga-timer-picker", 42);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(78, "div", 40)(79, "label", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(80);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(81, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(82, "ga-timer-picker", 43);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(83, "div", 33)(84, "div", 34)(85, "div", 36)(86, "label", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(87);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(88, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(89, "nb-select", 44);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(90, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(91, EditOrganizationOtherSettingsComponent_nb_option_91_Template, 3, 4, "nb-option", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(92, "div", 34)(93, "div", 36)(94, "label", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(95);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(96, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(97, "nb-select", 45);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(98, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(99, EditOrganizationOtherSettingsComponent_nb_option_99_Template, 3, 4, "nb-option", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(100, "div", 34)(101, "div", 36)(102, "label", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(103);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(104, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(105, "nb-select", 46);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(106, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(107, EditOrganizationOtherSettingsComponent_nb_option_107_Template, 2, 2, "nb-option", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(108, "div", 34)(109, "div", 36)(110, "label", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(111);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(112, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(113, "nb-select", 47);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(114, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(115, EditOrganizationOtherSettingsComponent_nb_option_115_Template, 2, 2, "nb-option", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(116, "div", 34)(117, "div", 36)(118, "label", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(119);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(120, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(121, "ng-select", 48);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(122, "div", 34)(123, "div", 36)(124, "label", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(125);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(126, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(127, "button", 49);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(128, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(129, "nb-icon", 50);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(130, "nb-select", 51);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(131, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(132, EditOrganizationOtherSettingsComponent_nb_option_132_Template, 2, 2, "nb-option", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()()()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(133, "nb-accordion-item", null, 3)(135, "nb-accordion-item-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(136);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(137, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(138, "nb-accordion-item-body", 31, 4)(140, "div", 32)(141, "div", 33)(142, "div", 52)(143, "div", 53)(144, "label", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(145);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(146, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(147, "nb-select", 54);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(148, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(149, EditOrganizationOtherSettingsComponent_nb_option_149_Template, 2, 2, "nb-option", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(150, "div", 53)(151, "label", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(152);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(153, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(154, "nb-select", 55);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(155, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(156, EditOrganizationOtherSettingsComponent_nb_option_156_Template, 2, 2, "nb-option", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()()()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(157, "nb-accordion-item", null, 5)(159, "nb-accordion-item-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(160);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(161, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(162, "nb-accordion-item-body", 31, 6)(164, "div", 32)(165, "div", 56)(166, "div", 57)(167, "div", 36)(168, "label", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(169);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(170, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(171, "input", 58);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(172, "div", 57)(173, "div", 36)(174, "label", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(175);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(176, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(177, "input", 59);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(178, "div", 60)(179, "div", 61)(180, "label", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(181);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(182, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(183, "nb-toggle", 62);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(184);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(185, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(186, "div", 61)(187, "label", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(188);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(189, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(190, "nb-toggle", 63);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(191);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(192, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(193, "div", 61)(194, "label", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(195);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(196, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(197, "nb-toggle", 64);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(198);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(199, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(200, "div", 65)(201, "div", 34)(202, "div", 36)(203, "label", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(204);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(205, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(206, "input", 66);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(207, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(208, EditOrganizationOtherSettingsComponent_div_208_Template, 7, 7, "div", 67);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(209, "div", 65)(210, "div", 34)(211, "label", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(212);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(213, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(214, "nb-select", 68);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(215, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("selectedChange", function EditOrganizationOtherSettingsComponent_Template_nb_select_selectedChange_214_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx.selectTemplate($event));
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(216, EditOrganizationOtherSettingsComponent_nb_option_216_Template, 3, 4, "nb-option", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(217, "div", 34)(218, "label", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(219);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(220, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(221, "nb-select", 69);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(222, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("selectedChange", function EditOrganizationOtherSettingsComponent_Template_nb_select_selectedChange_221_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx.selectTemplate($event));
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(223, EditOrganizationOtherSettingsComponent_nb_option_223_Template, 3, 4, "nb-option", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(224, "nb-accordion-item", null, 7)(226, "nb-accordion-item-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(227);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(228, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(229, "nb-accordion-item-body", 31, 8)(231, "div", 32)(232, "div", 33)(233, "div", 34)(234, "div", 36)(235, "label", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(236);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(237, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(238, "nb-select", 70);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(239, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(240, "nb-option", 71);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(241);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(242, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(243, EditOrganizationOtherSettingsComponent_nb_option_243_Template, 3, 4, "nb-option", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(244, "div", 34)(245, "div", 36)(246, "label", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(247);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(248, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(249, "input", 72);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(250, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(251, "nb-accordion-item", null, 9)(253, "nb-accordion-item-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(254);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(255, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(256, "nb-accordion-item-body", 31, 10)(258, "div", 32)(259, "div", 33)(260, "div", 34)(261, "div", 61)(262, "label", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(263);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(264, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(265, "nb-toggle", 73);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(266);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(267, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(268, "div", 34)(269, "div", 36)(270, "label", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(271);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(272, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(273, "input", 74);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(274, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(275, "nb-accordion-item", null, 11)(277, "nb-accordion-item-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(278);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(279, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(280, "nb-accordion-item-body", 31, 12)(282, "div", 32)(283, "div", 33)(284, "div", 61)(285, "label", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(286);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(287, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(288, "nb-toggle", 75);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(289);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(290, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(291, "nb-accordion-item", null, 13)(293, "nb-accordion-item-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(294);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(295, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(296, "nb-accordion-item-body", 31, 14)(298, "div", 76)(299, "div", 33)(300, "div", 77)(301, "div", 78)(302, "nb-toggle", 79);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(303);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(304, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(305, "button", 80);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(306, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(307, "nb-icon", 50);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(308, "div", 77)(309, "div", 78)(310, "nb-toggle", 81);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(311);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(312, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(313, "button", 80);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(314, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(315, "nb-icon", 50);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(316, "div", 77)(317, "div", 78)(318, "nb-toggle", 82);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(319);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(320, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(321, "button", 80);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(322, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(323, "nb-icon", 50);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(324, "div", 83)(325, "nb-toggle", 84);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(326);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(327, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(328, "button", 85);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(329, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(330, "nb-icon", 50);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(331, "div", 33)(332, "div", 77)(333, "div", 78)(334, "nb-toggle", 86);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(335);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(336, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(337, "div", 77)(338, "div", 78)(339, "nb-toggle", 87);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(340);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(341, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(342, "div", 77)(343, "div", 78)(344, "nb-toggle", 88);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(345);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(346, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(347, "div", 77)(348, "div", 78)(349, "nb-toggle", 89);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(350);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(351, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(352, "div", 77)(353, "div", 78)(354, "nb-toggle", 90);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(355);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(356, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(357, "div", 83)(358, "nb-toggle", 91);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(359);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(360, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(361, "button", 85);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(362, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(363, "nb-icon", 50);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(364, "div", 77)(365, "div", 78)(366, "nb-toggle", 92)(367, "div", 33)(368, "div", 93);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(369);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(370, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(371, "button", 85);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(372, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(373, "nb-icon", 50);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(374, EditOrganizationOtherSettingsComponent_div_374_Template, 21, 20, "div", 94);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(375, "div", 77)(376, "div", 78)(377, "nb-toggle", 95)(378, "div", 33)(379, "div", 93);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(380);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(381, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(382, "button", 85);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(383, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(384, "nb-icon", 50);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(385, EditOrganizationOtherSettingsComponent_div_385_Template, 25, 22, "div", 94);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(386, "div", 77)(387, "div", 34)(388, "div", 36)(389, "label", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(390);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(391, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(392, "button", 85);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(393, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(394, "nb-icon", 50);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(395, "nb-select", 96);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(396, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(397, EditOrganizationOtherSettingsComponent_nb_option_397_Template, 2, 2, "nb-option", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(398, "div", 77)(399, "div", 78)(400, "nb-toggle", 97);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(401);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(402, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(403, "button", 80);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(404, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(405, "nb-icon", 50);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(406, "div", 77)(407, "div", 78)(408, "nb-toggle", 98);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(409);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(410, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(411, "button", 80);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(412, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(413, "nb-icon", 50);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()()()()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(414, "nb-accordion-item", null, 15)(416, "nb-accordion-item-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(417);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(418, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(419, "nb-accordion-item-body", 31, 16)(421, "div", 76)(422, "div", 33)(423, "div", 77)(424, "div", 78)(425, "nb-toggle", 99);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(426);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(427, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(428, "button", 80);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(429, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(430, "nb-icon", 50);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(431, "div", 77)(432, "div", 78)(433, "nb-toggle", 100);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(434);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(435, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(436, "button", 80);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(437, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(438, "nb-icon", 50);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()()()()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(439, "nb-accordion-item", 101, 17)(441, "nb-accordion-item-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(442);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(443, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(444, "nb-accordion-item-body", 31, 18)(446, "div", 32)(447, "div", 33)(448, "div", 34)(449, "div", 61)(450, "nb-toggle", 102);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(451);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(452, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(453, "button", 80);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(454, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(455, "nb-icon", 50);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(456, "div", 34)(457, "div", 61)(458, "nb-toggle", 103);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(459);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(460, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(461, "button", 80);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(462, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(463, "nb-icon", 50);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(464, "div", 33)(465, "div", 34)(466, "div", 61)(467, "nb-toggle", 104);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(468);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(469, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(470, "button", 80);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(471, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(472, "nb-icon", 50);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(473, "div", 34)(474, "div", 61)(475, "nb-toggle", 105);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(476);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(477, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(478, "button", 80);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(479, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(480, "nb-icon", 50);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(481, "div", 33)(482, "div", 34)(483, "div", 61)(484, "nb-toggle", 106);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(485);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(486, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(487, "button", 80);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(488, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(489, "nb-icon", 50);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(490, "div", 34)(491, "div", 61)(492, "nb-toggle", 107);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(493);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(494, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(495, "button", 80);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(496, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(497, "nb-icon", 50);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(498, "div", 33)(499, "div", 34)(500, "div", 61)(501, "nb-toggle", 108);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(502);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(503, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(504, "button", 80);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(505, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(506, "nb-icon", 50);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(507, "div", 34)(508, "div", 36)(509, "nb-select", 109);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(510, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(511, "nb-option", 71);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(512);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(513, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(514, EditOrganizationOtherSettingsComponent_nb_option_514_Template, 3, 4, "nb-option", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(515, "div", 33)(516, "div", 34)(517, "div", 61)(518, "nb-toggle", 110);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(519);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(520, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(521, "button", 80);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(522, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(523, "nb-icon", 50);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(524, "div", 34)(525, "div", 61)(526, "nb-toggle", 111);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(527);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(528, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(529, "button", 80);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(530, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(531, "nb-icon", 50);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(532, "div", 33)(533, "div", 34)(534, "div", 61)(535, "nb-toggle", 112);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(536);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(537, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(538, "button", 80);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(539, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(540, "nb-icon", 50);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(541, "div", 34)(542, "div", 61)(543, "nb-toggle", 113);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(544);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(545, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(546, "button", 80);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(547, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(548, "nb-icon", 50);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(549, "div", 33)(550, "div", 34)(551, "div", 61)(552, "nb-toggle", 114);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(553);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(554, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(555, "button", 80);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(556, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(557, "nb-icon", 50);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(558, "div", 34)(559, "div", 61)(560, "nb-toggle", 115);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(561);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(562, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(563, "button", 80);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(564, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(565, "nb-icon", 50);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(566, "div", 33)(567, "div", 34)(568, "div", 61)(569, "nb-toggle", 116);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(570);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(571, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(572, "button", 80);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(573, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(574, "nb-icon", 50);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(575, "div", 34)(576, "div", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(577, "input", 117);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(578, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(579, "div", 33)(580, "div", 34)(581, "div", 61)(582, "nb-toggle", 118);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(583);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(584, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(585, "button", 80);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(586, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(587, "nb-icon", 50);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(588, "div", 34)(589, "div", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(590, "input", 119);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(591, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(592, "div", 33)(593, "div", 34)(594, "div", 61)(595, "nb-toggle", 120);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(596);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(597, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(598, "button", 80);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(599, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(600, "nb-icon", 50);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(601, "div", 34)(602, "div", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(603, "input", 121);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(604, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(605, "nb-accordion-item", null, 19)(607, "nb-accordion-item-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(608);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(609, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(610, "nb-accordion-item-body", 31, 20)(612, "div", 32)(613, "div", 33)(614, "div", 34)(615, "div", 36)(616, "label", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(617);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(618, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(619, "button", 80);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(620, "nb-icon", 50);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(621, "input", 122);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(622, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(623, "div", 34)(624, "div", 36)(625, "label", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(626);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(627, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(628, "button", 80);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(629, "nb-icon", 50);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(630, "input", 123);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(631, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()()()()()()()()();
          }
          if (rf & 2) {
            const general_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵreference"] */ .sdS(55);
            const generalBody_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵreference"] */ .sdS(60);
            const design_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵreference"] */ .sdS(134);
            const designBody_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵreference"] */ .sdS(139);
            const accounting_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵreference"] */ .sdS(158);
            const accountingBody_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵreference"] */ .sdS(163);
            const bonus_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵreference"] */ .sdS(225);
            const bonusBody_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵreference"] */ .sdS(230);
            const invites_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵreference"] */ .sdS(252);
            const invitesBody_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵreference"] */ .sdS(257);
            const dateLimit_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵreference"] */ .sdS(276);
            const dateLimitBody_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵreference"] */ .sdS(281);
            const timer_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵreference"] */ .sdS(292);
            const timerBody_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵreference"] */ .sdS(297);
            const agent_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵreference"] */ .sdS(415);
            const agentBody_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵreference"] */ .sdS(420);
            const taskSetting_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵreference"] */ .sdS(440);
            const taskSettingBody_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵreference"] */ .sdS(445);
            const integrations_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵreference"] */ .sdS(606);
            const integrationsBody_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵreference"] */ .sdS(611);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("formGroup", ctx.form);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(4, 195, "ORGANIZATIONS_PAGE.EDIT.SETTINGS_SECTION"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpureFunction1"] */ .eq3(471, _c11, general_r2 == null ? null : general_r2.expanded));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(9, 197, "ORGANIZATIONS_PAGE.EDIT.GENERAL_SETTINGS"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpureFunction1"] */ .eq3(473, _c11, design_r3 == null ? null : design_r3.expanded));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(13, 199, "ORGANIZATIONS_PAGE.EDIT.DESIGN"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpureFunction1"] */ .eq3(475, _c11, accounting_r4 == null ? null : accounting_r4.expanded));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(17, 201, "ORGANIZATIONS_PAGE.EDIT.ACCOUNTING"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpureFunction1"] */ .eq3(477, _c11, bonus_r5 == null ? null : bonus_r5.expanded));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(21, 203, "ORGANIZATIONS_PAGE.EDIT.BONUS"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpureFunction1"] */ .eq3(479, _c11, invites_r6 == null ? null : invites_r6.expanded));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(25, 205, "ORGANIZATIONS_PAGE.EDIT.INVITE"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpureFunction1"] */ .eq3(481, _c11, dateLimit_r7 == null ? null : dateLimit_r7.expanded));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(29, 207, "ORGANIZATIONS_PAGE.EDIT.DATE_LIMIT"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpureFunction1"] */ .eq3(483, _c11, timer_r8 == null ? null : timer_r8.expanded));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(33, 209, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.TIMER_SETTINGS"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpureFunction1"] */ .eq3(485, _c11, agent_r9 == null ? null : agent_r9.expanded));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(37, 211, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.AGENT_SETTINGS"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpureFunction1"] */ .eq3(487, _c11, taskSetting_r10 == null ? null : taskSetting_r10.expanded));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(41, 213, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.TASK_SETTING"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpureFunction1"] */ .eq3(489, _c11, integrations_r11 == null ? null : integrations_r11.expanded));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(45, 215, "ORGANIZATIONS_PAGE.EDIT.INTEGRATIONS"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("disabled", ctx.form.invalid);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(50, 217, "BUTTONS.SAVE"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("expanded", true);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(58, 219, "ORGANIZATIONS_PAGE.EDIT.GENERAL_SETTINGS"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("hidden", (generalBody_r31 == null ? null : generalBody_r31.state) === "collapsed");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(69, 221, "FORM.LABELS.START_WEEK_ON"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(71, 223, "FORM.PLACEHOLDERS.START_WEEK_ON"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx.weekdays);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(76, 225, "FORM.LABELS.START_TIME"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(81, 227, "FORM.LABELS.END_TIME"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(88, 229, "FORM.LABELS.DATE_TYPE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(90, 231, "FORM.PLACEHOLDERS.DATE_TYPE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx.defaultValueDateTypes);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(96, 233, "ORGANIZATIONS_PAGE.EDIT.REGIONS"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(98, 235, "FORM.PLACEHOLDERS.REGIONS"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx.regionCodes);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(104, 237, "FORM.PLACEHOLDERS.NUMBER_FORMAT"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(106, 239, "FORM.PLACEHOLDERS.NUMBER_FORMAT"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx.numberFormats);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(112, 241, "FORM.LABELS.DATE_FORMAT"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(114, 243, "FORM.PLACEHOLDERS.CHOOSE_FORMAT"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx.listOfDateFormats);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(120, 245, "FORM.LABELS.TIME_FORMAT"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("items", ctx.listOfTimeFormats)("clearable", false)("searchable", false);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(126, 247, "FORM.LABELS.DEFAULT"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(128, 249, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.ALLOW_TO_SET_DEFAULT_ORGANIZATION"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(131, 251, "FORM.PLACEHOLDERS.DEFAULT"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx.defaultOrganizationSelection);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(137, 253, "ORGANIZATIONS_PAGE.EDIT.DESIGN"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("hidden", (designBody_r32 == null ? null : designBody_r32.state) === "collapsed");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(146, 255, "FORM.LABELS.LOGO_ALIGNMENT"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(148, 257, "FORM.PLACEHOLDERS.ALIGN_LOGO_TO"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx.defaultAlignmentTypes);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(153, 259, "FORM.PLACEHOLDERS.CURRENCY_POSITION"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(155, 261, "FORM.PLACEHOLDERS.CURRENCY_POSITION"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx.defaultCurrencyPosition);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(161, 263, "ORGANIZATIONS_PAGE.EDIT.ACCOUNTING"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("hidden", (accountingBody_r33 == null ? null : accountingBody_r33.state) === "collapsed");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(170, 265, "FORM.LABELS.FISCAL_YEAR_START_DATE"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(176, 267, "FORM.LABELS.FISCAL_YEAR_END_DATE"), "");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(182, 269, "FORM.LABELS.TAX_AND_DISCOUNT_INVOICE_ITEMS_SEPARATELY"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(185, 271, "FORM.LABELS.ALLOW_TAXING_AND_DISCOUNTING_OF_INVOICE_ITEMS_SEPARATELY"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(189, 273, "FORM.LABELS.DISCOUNT_AFTER_TAX"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(192, 275, "FORM.LABELS.APPLY_DISCOUNT_AFTER_TAX_FOR_INVOICES_AND_ESTIMATES"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(196, 277, "FORM.LABELS.CONVERT_ESTIMATES"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(199, 279, "FORM.LABELS.ALLOW_CONVERTING"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(205, 281, "FORM.LABELS.DEFAULT_DAYS"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(207, 283, "FORM.PLACEHOLDERS.DAYS_UNTIL_DUE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.invoiceTemplates);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(213, 285, "FORM.LABELS.DEFAULT_ESTIMATE_TEMPLATE"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(215, 287, "FORM.PLACEHOLDERS.ESTIMATE_TEMPLATE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx.estimateTemplates);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(220, 289, "FORM.LABELS.DEFAULT_RECEIPT_TEMPLATE"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(222, 291, "FORM.PLACEHOLDERS.RECEIPT_TEMPLATE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx.receiptTemplates);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(228, 293, "ORGANIZATIONS_PAGE.EDIT.BONUS"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("hidden", (bonusBody_r34 == null ? null : bonusBody_r34.state) === "collapsed");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(237, 295, "FORM.LABELS.TYPE_OF_BONUS"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(239, 297, "FORM.PLACEHOLDERS.TYPE_OF_BONUS"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("value", null);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(242, 299, "SM_TABLE.NONE"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx.defaultBonusTypes);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(248, 301, "FORM.LABELS.BONUS_PERCENTAGE"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("min", 0)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(250, 303, "FORM.PLACEHOLDERS.BONUS_PERCENTAGE"))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpureFunction1"] */ .eq3(491, _c12, ctx.form.get("bonusPercentage").invalid));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(255, 305, "ORGANIZATIONS_PAGE.EDIT.INVITE"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("hidden", (invitesBody_r35 == null ? null : invitesBody_r35.state) === "collapsed");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(264, 307, "FORM.LABELS.ENABLE_DISABLE_INVITES"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(267, 309, "FORM.LABELS.ALLOW_USER_INVITES"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(272, 311, "FORM.LABELS.INVITE_EXPIRY_PERIOD"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("min", 0)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(274, 313, "FORM.PLACEHOLDERS.INVITE_EXPIRY_PERIOD"))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpureFunction1"] */ .eq3(493, _c12, ctx.form.get("inviteExpiryPeriod").invalid));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(279, 315, "ORGANIZATIONS_PAGE.EDIT.DATE_LIMIT"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("hidden", (dateLimitBody_r36 == null ? null : dateLimitBody_r36.state) === "collapsed");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(287, 317, "FORM.LABELS.ENABLE_DISABLE_FUTURE_DATE"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(290, 319, "FORM.LABELS.ALLOW_FUTURE_DATE"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(295, 321, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.TIMER_SETTINGS"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("hidden", (timerBody_r37 == null ? null : timerBody_r37.state) === "collapsed");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(304, 323, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.ALLOW_MANUAL_TIME"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(306, 325, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.TOOLTIP.ALLOW_MANUAL_TIME_INFO"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(312, 327, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.ALLOW_MODIFY_TIME"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(314, 329, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.TOOLTIP.ALLOW_MODIFY_TIME_INFO"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(320, 331, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.ALLOW_DELETE_TIME"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(322, 333, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.TOOLTIP.ALLOW_DELETE_TIME_INFO"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(327, 335, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.ALLOW_SCREEN_CAPTURE"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(329, 337, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.ALLOW_SCREEN_CAPTURE_INFO"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(336, 339, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.REQUIRE_REASON"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(341, 341, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.REQUIRE_DESCRIPTION"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(346, 343, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.REQUIRE_PROJECT"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(351, 345, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.REQUIRE_TASK"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(356, 347, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.REQUIRE_CLIENT"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(360, 349, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.DELETE_IDLE_TIME"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(362, 351, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.DELETE_IDLE_TIME_INFO"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpureFunction1"] */ .eq3(495, _c13, ctx.isTrackInactivity));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(370, 353, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.ENABLE_DETECTION_INACTIVITY"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(372, 355, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.TOOLTIP.ENABLE_DETECTION_INACTIVITY_INFO"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.isTrackInactivity);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpureFunction1"] */ .eq3(497, _c13, ctx.isEnforced));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(381, 357, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.ENFORCED"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(383, 359, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.ENFORCED_INFO"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.isEnforced);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(391, 361, "FORM.LABELS.STANDARD_WORK_HOURS_PER_DAY"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(393, 363, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.TOOLTIP.STANDARD_WORK_HOURS_PER_DAY"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(396, 365, "FORM.PLACEHOLDERS.STANDARD_WORK_HOURS_PER_DAY"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx.standardWorkHoursPerDayOptions);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(402, 367, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.TRACK_KEYBOARD_MOUSE_ACTIVITY"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(404, 369, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.TOOLTIP.TRACK_KEYBOARD_MOUSE_ACTIVITY_INFO"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(410, 371, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.TRACK_ALL_DISPLAYS"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(412, 373, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.TOOLTIP.TRACK_ALL_DISPLAYS_INFO"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(418, 375, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.AGENT_SETTINGS"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("hidden", (agentBody_r38 == null ? null : agentBody_r38.state) === "collapsed");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(427, 377, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.ALLOW_AGENT_APP_EXIT"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(429, 379, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.TOOLTIP.ALLOW_AGENT_APP_EXIT_INFO"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(435, 381, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.ALLOW_LOGOUT_FROM_AGENT_APP"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(437, 383, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.TOOLTIP.ALLOW_LOGOUT_FROM_AGENT_APP_INFO"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("formGroup", ctx.taskSettingForm);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(443, 385, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.TASK_SETTING"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("hidden", (taskSettingBody_r39 == null ? null : taskSettingBody_r39.state) === "collapsed");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(452, 387, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.TASK_PRIVACY"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(454, 389, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.TOOLTIP.TASK_PRIVACY_ENABLED_INFO"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(460, 391, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.MULTIPLE_ASSIGNEE"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(462, 393, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.TOOLTIP.TASK_MULTIPLE_ASSIGNEE_ENABLED_INFO"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(469, 395, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.MANUAL_TIME"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(471, 397, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.TOOLTIP.TASK_MANUAL_TIME_ENABLED_INFO"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(477, 399, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.GROUP_ESTIMATION"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(479, 401, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.TOOLTIP.TASK_GROUP_ESTIMATION_ENABLED_INFO"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(486, 403, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.ESTIMATION_IN_HOUR"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(488, 405, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.TOOLTIP.TASK_ESTIMATION_IN_HOUR_ENABLED_INFO"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(494, 407, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.ESTIMATION_IN_STORY_POINT"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(496, 409, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.TOOLTIP.TASK_ESTIMATION_IN_STORY_POINT_ENABLED_INFO"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(503, 411, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.PROOF_OF_COMPLETION"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(505, 413, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.TOOLTIP.TASK_PROOF_OF_COMPLETION_ENABLED_INFO"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(510, 415, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.PROOF_OF_COMPLETION_TYPE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("value", null);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(513, 417, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.PROOF_OF_COMPLETION_TYPE_DROPDOWN.NONE"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx.defaultTaskProofOfCompletionTypes);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(520, 419, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.LINKED_ISSUE"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(522, 421, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.TOOLTIP.TASK_LINKED_ISSUE_ENABLED_INFO"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(528, 423, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.COMMENT"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(530, 425, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.TOOLTIP.TASK_COMMENTS_ENABLED_INFO"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(537, 427, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.HISTORY"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(539, 429, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.TOOLTIP.TASK_HISTORY_ENABLED_INFO"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(545, 431, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.ACCEPTANCE_CRITERIA"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(547, 433, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.TOOLTIP.TASK_ACCEPTANCE_CRITERIA_ENABLED_INFO"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(554, 435, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.DRAFT_ISSUE"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(556, 437, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.TOOLTIP.TASK_DRAFT_ISSUE_ENABLED_INFO"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(562, 439, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.AUTO_STATUS"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(564, 441, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.TOOLTIP.TASK_AUTO_STATUS_ENABLED_INFO"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(571, 443, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.NOTIFY_TASK_LEFT"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(573, 445, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.TOOLTIP.TASK_NOTIFY_LEFT_ENABLED_INFO"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("min", 0)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(578, 447, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.NOTIFY_TASK_LEFT_PERIOD"))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpureFunction1"] */ .eq3(499, _c12, ctx.taskSettingForm.get("tasksNotifyLeftPeriodDays").invalid));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(584, 449, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.AUTO_CLOSE_ISSUE"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(586, 451, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.TOOLTIP.TASK_AUTO_CLOSE_ENABLED_INFO"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("min", 0)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(591, 453, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.AUTO_CLOSE_ISSUE_PERIOD"))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpureFunction1"] */ .eq3(501, _c12, ctx.taskSettingForm.get("tasksAutoClosePeriodDays").invalid));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(597, 455, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.AUTO_ARCHIVE_ISSUE"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(599, 457, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.TOOLTIP.TASK_AUTO_ARCHIVE_ENABLED_INFO"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("min", 0)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(604, 459, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.AUTO_ARCHIVE_ISSUE_PERIOD"))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpureFunction1"] */ .eq3(503, _c12, ctx.taskSettingForm.get("tasksAutoArchivePeriodDays").invalid));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(609, 461, "ORGANIZATIONS_PAGE.EDIT.INTEGRATIONS"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("hidden", (integrationsBody_r40 == null ? null : integrationsBody_r40.state) === "collapsed");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(618, 463, "FORM.LABELS.UPWORK_ORGANIZATION_ID"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(622, 465, "FORM.PLACEHOLDERS.UPWORK_ORGANIZATION_ID"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(627, 467, "FORM.LABELS.UPWORK_ORGANIZATION_NAME"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(631, 469, "FORM.PLACEHOLDERS.UPWORK_ORGANIZATION_NAME"));
          }
        },
        dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_18__/* .NbButtonComponent */ .YP2, _nebular_theme__WEBPACK_IMPORTED_MODULE_18__/* .NbInputDirective */ .i6h, _nebular_theme__WEBPACK_IMPORTED_MODULE_18__/* .NbIconComponent */ .tHu, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_26__/* .NgSelectComponent */ .vr, _nebular_theme__WEBPACK_IMPORTED_MODULE_18__/* .NbTooltipDirective */ .BmQ, _nebular_theme__WEBPACK_IMPORTED_MODULE_18__/* .NbSelectComponent */ .S81, _nebular_theme__WEBPACK_IMPORTED_MODULE_18__/* .NbOptionComponent */ .ZJ2, _nebular_theme__WEBPACK_IMPORTED_MODULE_18__/* .NbToggleComponent */ .YF2, _angular_common__WEBPACK_IMPORTED_MODULE_3__/* .NgClass */ .YU, _angular_common__WEBPACK_IMPORTED_MODULE_3__/* .NgForOf */ .Sq, _angular_common__WEBPACK_IMPORTED_MODULE_3__/* .NgIf */ .bT, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* ["ɵNgNoValidate"] */ .qT, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .DefaultValueAccessor */ .me, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .NumberValueAccessor */ .Q0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .NgControlStatus */ .BC, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .NgControlStatusGroup */ .cb, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .MinValidator */ .VZ, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .FormGroupDirective */ .j4, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .FormControlName */ .JD, _packages_ui_core_shared_src_lib_directives_debounce_click_directive__WEBPACK_IMPORTED_MODULE_27__/* .DebounceClickDirective */ .J, _packages_ui_core_shared_src_lib_timer_picker_timer_picker_timer_picker_component__WEBPACK_IMPORTED_MODULE_28__/* .TimerPickerComponent */ .f, _nebular_theme__WEBPACK_IMPORTED_MODULE_18__/* .NbAccordionComponent */ .Ul7, _nebular_theme__WEBPACK_IMPORTED_MODULE_18__/* .NbAccordionItemComponent */ .vx8, _nebular_theme__WEBPACK_IMPORTED_MODULE_18__/* .NbAccordionItemHeaderComponent */ .Ig3, _nebular_theme__WEBPACK_IMPORTED_MODULE_18__/* .NbAccordionItemBodyComponent */ .LHJ, _packages_ui_core_shared_src_lib_modules_selectors_timezone_selector_timezone_selector_component__WEBPACK_IMPORTED_MODULE_29__/* .TimeZoneSelectorComponent */ .S, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__/* .TranslatePipe */ .D9],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%] {\n  height: 100%;\n}\n\n[_nghost-%COMP%]   .main-form[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: var(--gauzy-card-2);\n  display: flex;\n  justify-content: space-between;\n  padding: 20px;\n  overflow: hidden;\n  height: calc(100vh - 19.25rem);\n  overflow-y: scroll;\n}\n[dir=ltr]   [_nghost-%COMP%]   .main-form[_ngcontent-%COMP%] {\n  padding-right: 8px;\n}\n[dir=rtl]   [_nghost-%COMP%]   .main-form[_ngcontent-%COMP%] {\n  padding-left: 8px;\n}\n\n.aside-nav[_ngcontent-%COMP%] {\n  width: 180px;\n  background-color: var(--gauzy-card-3);\n  padding: 13px 18px;\n  border-radius: var(--border-radius);\n  height: fit-content;\n}\n.aside-nav[_ngcontent-%COMP%]   .settings-section-header[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 17px;\n  letter-spacing: 0em;\n  text-align: left;\n  margin-bottom: 18px;\n}\n.aside-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  padding-left: 0;\n  padding-right: 0;\n  display: inline-flex;\n  flex-direction: column;\n  height: fit-content;\n}\n.aside-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline-flex;\n  padding: 10px 15px;\n  margin-bottom: 10px;\n  font-size: 13px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 16px;\n  letter-spacing: 0em;\n  text-align: left;\n  background: var(--gauzy-sidebar-background-3);\n  border-radius: var(--button-rectangle-border-radius);\n  list-style: none;\n  cursor: pointer;\n  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.15);\n}\n.aside-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%] {\n  background: var(--background-basic-color-1);\n  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.15) inset;\n}\n\n.actions[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n\n.fields-section[_ngcontent-%COMP%] {\n  width: calc(100% - 230px);\n}\n\n[_nghost-%COMP%]   .accordion-section[_ngcontent-%COMP%] {\n  overflow: auto;\n  max-height: calc(100% - 3rem);\n}\n[dir=ltr]   [_nghost-%COMP%]   .accordion-section[_ngcontent-%COMP%] {\n  padding-right: 8px;\n}\n[dir=rtl]   [_nghost-%COMP%]   .accordion-section[_ngcontent-%COMP%] {\n  padding-left: 8px;\n}\n\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n\n.col-6[_ngcontent-%COMP%] {\n  padding-left: 10px;\n  padding-right: 10px;\n  max-width: 49% !important;\n}\n\n.active[_ngcontent-%COMP%] {\n  background: #ffffff;\n}\n\nnb-accordion[_ngcontent-%COMP%] {\n  box-shadow: none;\n}\nnb-accordion[_ngcontent-%COMP%]   nb-accordion-item-header[_ngcontent-%COMP%] {\n  border-bottom: none;\n  border-radius: 0.5rem;\n  padding-left: 20px;\n  padding-right: 20px;\n}\nnb-accordion[_ngcontent-%COMP%]   nb-accordion-item-header[_ngcontent-%COMP%]     nb-icon {\n  border-radius: 6px;\n  width: 23px;\n  height: 23px;\n  border: 1px solid rgba(66, 66, 66, 0.2);\n}\nnb-accordion[_ngcontent-%COMP%]   nb-accordion-item-header[_ngcontent-%COMP%], \nnb-accordion[_ngcontent-%COMP%]   nb-accordion-item-body[_ngcontent-%COMP%], \nnb-accordion[_ngcontent-%COMP%]   nb-accordion-item[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-3);\n}\nnb-accordion[_ngcontent-%COMP%]   nb-accordion-item-body[_ngcontent-%COMP%] {\n  padding-left: 15px;\n  padding-right: 15px;\n}\nnb-accordion[_ngcontent-%COMP%]   nb-accordion-item[_ngcontent-%COMP%] {\n  border-radius: 0.5rem;\n  margin-bottom: 20px;\n}\nnb-accordion[_ngcontent-%COMP%]   nb-accordion-item[_ngcontent-%COMP%]   .item-body[_ngcontent-%COMP%] {\n  padding: 15px;\n}\nnb-accordion[_ngcontent-%COMP%]   nb-accordion-item[_ngcontent-%COMP%]:first-of-type     .select-button, \nnb-accordion[_ngcontent-%COMP%]   nb-accordion-item[_ngcontent-%COMP%]:first-of-type     .ng-select-container {\n  background-color: var(--background-basic-color-1) !important;\n}\nnb-accordion[_ngcontent-%COMP%]   nb-accordion-item[_ngcontent-%COMP%]:first-of-type     .date-picker-form ng-select {\n  width: 60%;\n}\nnb-accordion[_ngcontent-%COMP%]   nb-accordion-item[_ngcontent-%COMP%]:first-of-type   .fields[_ngcontent-%COMP%] {\n  width: 75%;\n}\n@media only screen and (max-width: 767px) {\n  nb-accordion[_ngcontent-%COMP%]   nb-accordion-item[_ngcontent-%COMP%]:first-of-type   .fields[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\nnb-accordion[_ngcontent-%COMP%]   nb-accordion-item[_ngcontent-%COMP%]:first-of-type   .time-format-select[_ngcontent-%COMP%] {\n  width: 30%;\n}\nnb-accordion[_ngcontent-%COMP%]   nb-accordion-item[_ngcontent-%COMP%]:first-of-type   .row[_ngcontent-%COMP%] {\n  align-items: center;\n}\nnb-accordion[_ngcontent-%COMP%]   nb-accordion-item[_ngcontent-%COMP%]:nth-of-type(2)   .select-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n}\nnb-accordion[_ngcontent-%COMP%]   nb-accordion-item[_ngcontent-%COMP%]:nth-of-type(2)   .label[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\nnb-accordion[_ngcontent-%COMP%]   nb-accordion-item[_ngcontent-%COMP%]:nth-of-type(2)   .design-select[_ngcontent-%COMP%] {\n  width: 140px;\n  margin-right: 15px;\n}\n@media only screen and (max-width: 767px) {\n  nb-accordion[_ngcontent-%COMP%]   nb-accordion-item[_ngcontent-%COMP%]:nth-of-type(2)   .color-pick[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\nnb-accordion[_ngcontent-%COMP%]   nb-accordion-item[_ngcontent-%COMP%]:nth-of-type(3)   .row[_ngcontent-%COMP%] {\n  padding-left: 0 !important;\n  padding-right: 0 !important;\n}\nnb-accordion[_ngcontent-%COMP%]   nb-accordion-item[_ngcontent-%COMP%]:nth-of-type(3)   .row.fiscal-years[_ngcontent-%COMP%] {\n  width: 400px;\n  display: flex;\n  justify-content: space-between;\n  margin-left: -5px;\n  margin-right: -5px;\n}\n@media only screen and (max-width: 991px) {\n  nb-accordion[_ngcontent-%COMP%]   nb-accordion-item[_ngcontent-%COMP%]:nth-of-type(3)   .row.fiscal-years[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n}\n@media only screen and (max-width: 767px) {\n  nb-accordion[_ngcontent-%COMP%]   nb-accordion-item[_ngcontent-%COMP%]:nth-of-type(3)   .row.fiscal-years[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\nnb-accordion[_ngcontent-%COMP%]   nb-accordion-item[_ngcontent-%COMP%]:nth-of-type(3)   .row.fiscal-years[_ngcontent-%COMP%]   .year-pick[_ngcontent-%COMP%] {\n  width: 170px;\n}\n@media only screen and (max-width: 767px) {\n  nb-accordion[_ngcontent-%COMP%]   nb-accordion-item[_ngcontent-%COMP%]:nth-of-type(3)   .row.fiscal-years[_ngcontent-%COMP%]   .year-pick[_ngcontent-%COMP%] {\n    width: 49%;\n  }\n}\nnb-accordion[_ngcontent-%COMP%]   nb-accordion-item[_ngcontent-%COMP%]:nth-of-type(3)   .row.toggles[_ngcontent-%COMP%] {\n  width: 500px;\n  display: flex;\n  flex-direction: column;\n  margin-left: -5px;\n  margin-right: -5px;\n}\n@media only screen and (max-width: 991px) {\n  nb-accordion[_ngcontent-%COMP%]   nb-accordion-item[_ngcontent-%COMP%]:nth-of-type(3)   .row.toggles[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n}\n@media only screen and (max-width: 767px) {\n  nb-accordion[_ngcontent-%COMP%]   nb-accordion-item[_ngcontent-%COMP%]:nth-of-type(3)   .row.toggles[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\nnb-accordion[_ngcontent-%COMP%]   nb-accordion-item[_ngcontent-%COMP%]:nth-of-type(3)   .row.toggles[_ngcontent-%COMP%]   .toggle-switch[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n}\nnb-accordion[_ngcontent-%COMP%]   nb-accordion-item[_ngcontent-%COMP%]:nth-of-type(3)   .row.half-width-inputs[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  margin-bottom: 10px;\n  padding-left: 0;\n  padding-right: 0;\n}\n@media only screen and (max-width: 480px) {\n  nb-accordion[_ngcontent-%COMP%]   nb-accordion-item[_ngcontent-%COMP%]:nth-of-type(3)   .row.half-width-inputs[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\nnb-accordion[_ngcontent-%COMP%]   nb-accordion-item[_ngcontent-%COMP%]:nth-of-type(5)   .row[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding: 10px;\n}\nnb-accordion[_ngcontent-%COMP%]   nb-accordion-item[_ngcontent-%COMP%]:nth-of-type(6)   .row[_ngcontent-%COMP%] {\n  width: 50%;\n}\n@media only screen and (max-width: 767px) {\n  nb-accordion[_ngcontent-%COMP%]   nb-accordion-item[_ngcontent-%COMP%]:nth-of-type(6)   .row[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\nnb-accordion[_ngcontent-%COMP%]   nb-accordion-item[_ngcontent-%COMP%]:nth-of-type(6)   .form-group[_ngcontent-%COMP%] {\n  width: 100%;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n@media only screen and (max-width: 991px) {\n  nb-accordion[_ngcontent-%COMP%]   nb-accordion-item[_ngcontent-%COMP%]:nth-of-type(6)   .form-group[_ngcontent-%COMP%] {\n    padding-right: 0;\n    padding-left: 0;\n  }\n}\nnb-accordion[_ngcontent-%COMP%]   nb-accordion-item[_ngcontent-%COMP%]:nth-of-type(7)   .col-6[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n@media only screen and (max-width: 480px) {\n  nb-accordion[_ngcontent-%COMP%]   nb-accordion-item[_ngcontent-%COMP%]:nth-of-type(7)   .row[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\nnb-accordion[_ngcontent-%COMP%]   nb-accordion-item[_ngcontent-%COMP%]:nth-of-type(8)   .col-6[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\nnb-accordion[_ngcontent-%COMP%]   nb-accordion-item[_ngcontent-%COMP%]:nth-of-type(8)   .col-12[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n}\n@media only screen and (max-width: 480px) {\n  nb-accordion[_ngcontent-%COMP%]   nb-accordion-item[_ngcontent-%COMP%]:nth-of-type(8)   .row[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n[_nghost-%COMP%]     .ng-placeholder, \n  .ng-value {\n  z-index: 2;\n}\n\n[_nghost-%COMP%]     nb-select   button {\n  margin-right: 10px;\n  background-color: var(--background-basic-color-1) !important;\n  border-radius: var(--border-radius) !important;\n}\n\n[_nghost-%COMP%]     nb-toggle {\n  padding: 10px;\n  border: 1px solid var(--gauzy-border-default-color);\n  border-radius: var(--border-radius);\n}\n[_nghost-%COMP%]     nb-toggle > label {\n  margin-bottom: 0;\n}\n\n[_nghost-%COMP%]     .toggle {\n  border: 1px solid #7e7e8f !important;\n  background-color: #7e7e8f !important;\n}\n[_nghost-%COMP%]     .toggle.checked {\n  background-color: var(--text-primary-color) !important;\n  border: 1px solid var(--text-primary-color) !important;\n}\n[_nghost-%COMP%]     .toggle.checked + span {\n  color: var(--text-primary-color);\n}\n\n[_nghost-%COMP%]     .ng-trigger {\n  overflow: visible !important;\n}\n[_nghost-%COMP%]     .ng-trigger .item-body {\n  overflow: visible !important;\n  overflow-x: visible !important;\n}\n\n[_nghost-%COMP%]     .select-button {\n  margin: 0;\n}\n\n@media only screen and (max-width: 991px) {\n  .row[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: space-between;\n    margin-left: 0;\n    margin-right: 0;\n  }\n  .col-6[_ngcontent-%COMP%] {\n    padding-right: 0;\n    padding-left: 0;\n  }\n  nb-accordion[_ngcontent-%COMP%]   nb-accordion-item-body[_ngcontent-%COMP%] {\n    padding-left: 0;\n    padding-right: 0;\n  }\n  nb-accordion[_ngcontent-%COMP%]   nb-accordion-item[_ngcontent-%COMP%]:first-of-type     .date-picker-form ng-select {\n    width: 100%;\n  }\n  nb-accordion[_ngcontent-%COMP%]   nb-accordion-item[_ngcontent-%COMP%]:first-of-type   .fields[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  nb-accordion[_ngcontent-%COMP%]   nb-accordion-item[_ngcontent-%COMP%]:first-of-type   .time-format-select[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  nb-accordion[_ngcontent-%COMP%]   nb-accordion-item[_ngcontent-%COMP%]:nth-of-type(2)   .color-pick[_ngcontent-%COMP%] {\n    max-width: 100%;\n    min-width: 100%;\n  }\n  nb-accordion[_ngcontent-%COMP%]   nb-accordion-item[_ngcontent-%COMP%]:nth-of-type(2)   .select-wrapper[_ngcontent-%COMP%] {\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n  }\n  nb-accordion[_ngcontent-%COMP%]   nb-accordion-item[_ngcontent-%COMP%]:nth-of-type(2)   .design-select[_ngcontent-%COMP%] {\n    width: 49%;\n    margin-right: 0;\n  }\n}\n@media only screen and (max-width: 767px) {\n  .col-6[_ngcontent-%COMP%] {\n    padding-right: 0;\n  }\n  .main-form[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .aside-nav[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-bottom: 20px;\n  }\n  .aside-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    display: inline;\n    height: auto;\n  }\n  .aside-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    margin-right: 7px;\n  }\n  .fields-section[_ngcontent-%COMP%] {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n  }\n  .actions[_ngcontent-%COMP%] {\n    order: 2;\n    margin-bottom: 0;\n  }\n}\n@media only screen and (max-width: 480px) {\n  .col-6[_ngcontent-%COMP%] {\n    max-width: 100%;\n    width: 100%;\n    min-width: 100%;\n    margin-bottom: 5px;\n  }\n  .row[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.invite-toggle[_ngcontent-%COMP%]   nb-toggle[_ngcontent-%COMP%] {\n  display: flex;\n}\n.invite-toggle[_ngcontent-%COMP%]   nb-toggle[_ngcontent-%COMP%]     .toggle-label {\n  display: flex;\n  justify-content: space-between;\n  flex-grow: 1;\n}\n.invite-toggle[_ngcontent-%COMP%]   nb-toggle[_ngcontent-%COMP%]     .toggle-label .toggle {\n  min-width: 2rem;\n}\n.invite-toggle[_ngcontent-%COMP%]   nb-toggle.start[_ngcontent-%COMP%]  .toggle-label {\n  align-items: flex-start;\n}\n.invite-toggle[_ngcontent-%COMP%]   nb-toggle.start[_ngcontent-%COMP%]  .toggle-label span.text {\n  width: 100%;\n}\n\n#temporary[_ngcontent-%COMP%] {\n  padding-bottom: 215px;\n}\n\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  overflow: visible;\n}\n\n.time-tracker[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  margin-left: -0.5rem;\n  margin-right: -0.5rem;\n}\n.time-tracker[_ngcontent-%COMP%]   .col-xl-6[_ngcontent-%COMP%], \n.time-tracker[_ngcontent-%COMP%]   .col-12[_ngcontent-%COMP%] {\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n}"]
      });
    }
  };
  return EditOrganizationOtherSettingsComponent;
})();
EditOrganizationOtherSettingsComponent = EditOrganizationOtherSettingsComponent_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_30__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_12__/* .UntilDestroy */ .d)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_30__/* .__metadata */ .Sn)("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__/* .TranslateService */ .c$, _nebular_theme__WEBPACK_IMPORTED_MODULE_18__/* .NbThemeService */ .NS1, _angular_router__WEBPACK_IMPORTED_MODULE_19__/* .ActivatedRoute */ .nX, _angular_router__WEBPACK_IMPORTED_MODULE_19__/* .Router */ .Ix, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .UntypedFormBuilder */ .ze, _angular_core__WEBPACK_IMPORTED_MODULE_1__/* .ChangeDetectorRef */ .gRc, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_20__/* .OrganizationsService */ .k, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_21__/* .OrganizationTaskSettingService */ .e, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_22__/* .ToastrService */ .t, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_23__/* .OrganizationEditStore */ .vO, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_24__/* .Store */ .il, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_25__/* .AccountingTemplateService */ .$])], EditOrganizationOtherSettingsComponent);


/***/ }),

/***/ 74000:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K: () => (/* binding */ EditOrganizationLocationComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(73014);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(64411);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(9620);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(10936);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71181);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(72781);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(87081);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(73246);
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93105);
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(19223);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(23423);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(15788);
/* harmony import */ var _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38546);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(26024);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(22688);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(15480);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(96643);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(71924);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19426);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(26860);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(56383);
/* harmony import */ var _packages_ui_core_shared_src_lib_forms_maps_leaflet_leaflet_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(7281);





















const _c0 = ["locationFormDirective"];
const _c1 = ["leafletTemplate"];
let EditOrganizationLocationComponent = class EditOrganizationLocationComponent extends _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_1__/* .TranslationBaseComponent */ .K {
  constructor(route, fb, organizationService, toastrService, organizationEditStore, store, translateService) {
    super(translateService);
    this.route = route;
    this.fb = fb;
    this.organizationService = organizationService;
    this.toastrService = toastrService;
    this.organizationEditStore = organizationEditStore;
    this.store = store;
    this.translateService = translateService;
    this.form = _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_2__/* .LocationFormComponent */ .f.buildForm(this.fb);
  }
  ngOnInit() {
    this.setValidator();
  }
  ngAfterViewInit() {
    this.route.parent.data.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .debounceTime */ .B)(100), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .filter */ .p)(data => !!data && !!data.organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .map */ .T)(({
      organization
    }) => organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .M)(organization => this.organization = organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .M)(organization => this.organizationEditStore.selectedOrganization = organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .M)(() => this._setLocationFormValue()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__/* .untilDestroyed */ .s)(this)).subscribe();
  }
  updateOrganizationSettings() {
    var _this = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A)(function* () {
      if (!_this.organization || _this.form.invalid) {
        return;
      }
      try {
        const {
          tenantId
        } = _this.store.user;
        const {
          id: organizationId
        } = _this.organization;
        const location = _this.locationFormDirective.getValue();
        const {
          coordinates
        } = location['loc'];
        delete location['loc'];
        const [latitude, longitude] = coordinates;
        const contact = {
          organizationId,
          tenantId,
          latitude,
          longitude,
          ...location
        };
        const rawValue = {
          ..._this.form.getRawValue(),
          name: _this.organization.name,
          currency: _this.organization.currency,
          defaultValueDateType: _this.organization.defaultValueDateType,
          contact
        };
        const organization = yield _this.organizationService.update(_this.organization.id, rawValue);
        if (organization) {
          _this.organizationEditStore.organizationAction = {
            organization,
            action: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_9__/* .CrudActionEnum */ .GD.UPDATED
          };
          _this.store.selectedOrganization = organization;
        }
        if (_this.organization) {
          _this.toastrService.success(`TOASTR.MESSAGE.ORGANIZATION_LOCATION_UPDATED`, {
            name: _this.organization.name
          });
        }
      } catch (error) {
        console.log('Error while updating organization location', error);
        _this.toastrService.danger(error);
      }
    })();
  }
  /**
   * Initialized Location Form Value
   *
   * @returns
   */
  _setLocationFormValue() {
    if (!this.organization) {
      return;
    }
    setTimeout(() => {
      const organization = this.organization;
      const {
        contact
      } = organization;
      if ((0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_10__/* .isNotEmpty */ .hj)(contact)) {
        if (this.locationFormDirective) {
          this.locationFormDirective.setValue({
            country: contact.country || null,
            city: contact.city || null,
            postcode: contact.postcode || null,
            address: contact.address || null,
            address2: contact.address2 || null,
            loc: {
              type: 'Point',
              coordinates: [contact.latitude || null, contact.longitude || null]
            }
          });
        }
        if (this.leafletTemplate) {
          this.leafletTemplate.addMarker(new leaflet__WEBPACK_IMPORTED_MODULE_0__.LatLng(contact.latitude || null, contact.longitude || null));
        }
      }
    }, 200);
  }
  /*
   * Google Place and Leaflet Map Coordinates Changed Event Emitter
   */
  onCoordinatesChanges($event) {
    const {
      loc: {
        coordinates
      }
    } = this.locationFormDirective.getValue();
    const [lat, lng] = coordinates;
    this.leafletTemplate.addMarker(new leaflet__WEBPACK_IMPORTED_MODULE_0__.LatLng(lat, lng));
  }
  /*
   * Leaflet Map Click Event Emitter
   */
  onMapClicked(latlng) {
    if (this.locationFormDirective) {
      const {
        lat,
        lng
      } = latlng;
      this.locationFormDirective.setValue({
        ...this.locationFormDirective.getValue(),
        country: '',
        loc: {
          type: 'Point',
          coordinates: [lat, lng]
        }
      });
      this.locationFormDirective.onCoordinatesChanged();
    }
  }
  setValidator() {
    if (!this.form) {
      return;
    }
    this.form.get('country').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_11__/* .Validators */ .k0.required]);
    this.form.get('city').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_11__/* .Validators */ .k0.required]);
    this.form.get('address').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_11__/* .Validators */ .k0.required]);
    this.form.get('address2').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_11__/* .Validators */ .k0.required]);
    this.form.get('postcode').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_11__/* .Validators */ .k0.required]);
    this.form.updateValueAndValidity();
  }
  /*
   * Google Place Geometry Changed Event Emitter
   */
  onGeometrySend(geometry) {}
  ngOnDestroy() {}
  static {
    this.ɵfac = function EditOrganizationLocationComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || EditOrganizationLocationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_router__WEBPACK_IMPORTED_MODULE_13__/* .ActivatedRoute */ .nX), _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_forms__WEBPACK_IMPORTED_MODULE_11__/* .UntypedFormBuilder */ .ze), _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_14__/* .OrganizationsService */ .k), _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_15__/* .ToastrService */ .t), _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_16__/* .OrganizationEditStore */ .vO), _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_17__/* .Store */ .il), _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__/* .TranslateService */ .c$));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵdefineComponent"] */ .VBU({
      type: EditOrganizationLocationComponent,
      selectors: [["ga-edit-org-location"]],
      viewQuery: function EditOrganizationLocationComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵviewQuery"] */ .GBs(_c0, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵviewQuery"] */ .GBs(_c1, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵqueryRefresh"] */ .mGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵloadQuery"] */ .lsd()) && (ctx.locationFormDirective = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵqueryRefresh"] */ .mGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵloadQuery"] */ .lsd()) && (ctx.leafletTemplate = _t.first);
        }
      },
      inputs: {
        organization: "organization"
      },
      standalone: false,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
      decls: 10,
      vars: 7,
      consts: [["locationFormDirective", ""], ["leafletTemplate", ""], [1, "main-form", 3, "formGroup"], [1, "location-form-wrapper"], [3, "mapCoordinatesEmitter", "mapGeometryEmitter", "form", "showAutocompleteSearch"], [1, "actions"], ["nbButton", "", "status", "success", 3, "click", "disabled"], [3, "mapClicked"]],
      template: function EditOrganizationLocationComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵgetCurrentView"] */ .RV6();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵelementStart"] */ .j41(0, "form", 2)(1, "div", 3)(2, "ga-location-form", 4, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵlistener"] */ .bIt("mapCoordinatesEmitter", function EditOrganizationLocationComponent_Template_ga_location_form_mapCoordinatesEmitter_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵrestoreView"] */ .eBV(_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵresetView"] */ .Njj(ctx.onCoordinatesChanges($event));
          })("mapGeometryEmitter", function EditOrganizationLocationComponent_Template_ga_location_form_mapGeometryEmitter_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵrestoreView"] */ .eBV(_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵresetView"] */ .Njj(ctx.onGeometrySend($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵelementEnd"] */ .k0s();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵelementStart"] */ .j41(4, "div", 5)(5, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵlistener"] */ .bIt("click", function EditOrganizationLocationComponent_Template_button_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵrestoreView"] */ .eBV(_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵresetView"] */ .Njj(ctx.updateOrganizationSettings());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵtext"] */ .EFF(6);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵpipe"] */ .nI1(7, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵelementEnd"] */ .k0s()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵelementStart"] */ .j41(8, "ga-leaflet-map", 7, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵlistener"] */ .bIt("mapClicked", function EditOrganizationLocationComponent_Template_ga_leaflet_map_mapClicked_8_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵrestoreView"] */ .eBV(_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵresetView"] */ .Njj(ctx.onMapClicked($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵelementEnd"] */ .k0s()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵproperty"] */ .Y8G("formGroup", ctx.form);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵproperty"] */ .Y8G("form", ctx.form)("showAutocompleteSearch", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵadvance"] */ .R7$(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵproperty"] */ .Y8G("disabled", ctx.form.invalid);
          _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵadvance"] */ .R7$();
          _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵpipeBind1"] */ .bMT(7, 5, "BUTTONS.SAVE"), " ");
        }
      },
      dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_19__/* .NbButtonComponent */ .YP2, _angular_forms__WEBPACK_IMPORTED_MODULE_11__/* ["ɵNgNoValidate"] */ .qT, _angular_forms__WEBPACK_IMPORTED_MODULE_11__/* .NgControlStatusGroup */ .cb, _angular_forms__WEBPACK_IMPORTED_MODULE_11__/* .FormGroupDirective */ .j4, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_2__/* .LocationFormComponent */ .f, _packages_ui_core_shared_src_lib_forms_maps_leaflet_leaflet_component__WEBPACK_IMPORTED_MODULE_20__/* .LeafletMapComponent */ .x, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__/* .TranslatePipe */ .D9],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.ng-star-inserted[_nghost-%COMP%] {\n  min-height: 100%;\n  height: 100%;\n}\n[_nghost-%COMP%]     input {\n  background-color: var(--background-basic-color-1) !important;\n}\n\n.main-form[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  padding: 20px;\n  background-color: var(--gauzy-card-2);\n  height: calc(100vh - 19.25rem);\n}\n.main-form[_ngcontent-%COMP%]   .location-form-wrapper[_ngcontent-%COMP%] {\n  width: 40%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.main-form[_ngcontent-%COMP%]   .location-form-wrapper[_ngcontent-%COMP%]     nb-select.shape-rectangle .select-button {\n  border-radius: 8px;\n  background-color: var(--background-basic-color-1);\n}\n.main-form[_ngcontent-%COMP%]   .location-form-wrapper[_ngcontent-%COMP%]     .form-group {\n  margin-bottom: 6px;\n}\n.main-form[_ngcontent-%COMP%]   ga-leaflet-map[_ngcontent-%COMP%] {\n  width: 60%;\n}\n  .main-form ga-leaflet-map .row {\n  height: 100%;\n  margin: 0 !important;\n}\n  .main-form ga-leaflet-map .col-12 {\n  height: 100%;\n  padding: 0;\n}\n  .main-form ga-leaflet-map .leaflet-container {\n  height: 100% !important;\n  border-radius: 6px;\n}\n.main-form[_ngcontent-%COMP%]     .col-sm-12 {\n  margin-top: 10px;\n  margin-bottom: 5px;\n}\n.main-form[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%] {\n  margin-top: 15px;\n}\n\n.content[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 50px 0px;\n}\n\n@media only screen and (max-width: 767px) {\n  .ng-star-inserted[_nghost-%COMP%] {\n    height: auto;\n  }\n  .main-form[_ngcontent-%COMP%] {\n    flex-direction: column;\n    justify-content: flex-start;\n  }\n  .main-form[_ngcontent-%COMP%]   .location-form-wrapper[_ngcontent-%COMP%], .main-form[_ngcontent-%COMP%]   ga-leaflet-map[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .main-form[_ngcontent-%COMP%]   .location-form-wrapper[_ngcontent-%COMP%]     .row .col-4 {\n    width: 100%;\n  }\n  .main-form[_ngcontent-%COMP%]   ga-leaflet-map[_ngcontent-%COMP%] {\n    order: 1;\n    margin-top: 30px;\n    height: 500px;\n  }\n  .main-form[_ngcontent-%COMP%]     .col-sm-12 {\n    margin-bottom: 15px;\n  }\n}\n@media only screen and (max-width: 480px) {\n  .main-form[_ngcontent-%COMP%]   ga-leaflet-map[_ngcontent-%COMP%] {\n    height: 350px;\n  }\n}"]
    });
  }
};
EditOrganizationLocationComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_21__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__/* .UntilDestroy */ .d)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_21__/* .__metadata */ .Sn)("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_13__/* .ActivatedRoute */ .nX, _angular_forms__WEBPACK_IMPORTED_MODULE_11__/* .UntypedFormBuilder */ .ze, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_14__/* .OrganizationsService */ .k, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_15__/* .ToastrService */ .t, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_16__/* .OrganizationEditStore */ .vO, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_17__/* .Store */ .il, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__/* .TranslateService */ .c$])], EditOrganizationLocationComponent);


/***/ }),

/***/ 76844:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ EditOrganizationSettingsModule)
/* harmony export */ });
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(56383);
/* harmony import */ var ngx_color_picker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(69493);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(55567);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(19223);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(51530);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2902);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(86036);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(31324);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(941);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(96643);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(14486);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(57952);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(57832);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(61444);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(37175);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(82202);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(54462);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(88148);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(168);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(6269);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(46880);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(38834);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(1618);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(43629);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(9669);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(48052);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(95041);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(98722);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);









let EditOrganizationSettingsModule = /*#__PURE__*/(() => {
  class EditOrganizationSettingsModule {
    static {
      this.ɵfac = function EditOrganizationSettingsModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || EditOrganizationSettingsModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .$C({
        type: EditOrganizationSettingsModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .G2t({
        providers: [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_1__/* .OrganizationDepartmentsService */ .I, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_2__/* .OrganizationVendorsService */ .g, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_3__/* .OrganizationExpenseCategoriesService */ .L, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_4__/* .OrganizationPositionsService */ .v, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_5__/* .OrganizationContactService */ .$, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_6__/* .OrganizationEditStore */ .vO, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_7__/* .EmployeeStore */ .oO, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_8__/* .InviteService */ .p],
        imports: [_nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbBadgeModule */ .iEK, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_10__/* .TableComponentsModule */ .p, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_11__/* .TagsColorInputModule */ .x, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbCardModule */ .lVF, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbButtonModule */ .P5N, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbInputModule */ .pty, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbIconModule */ .clu, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbSpinnerModule */ .gYs, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbActionsModule */ ._A2, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__/* .NgSelectModule */ .MQ, ngx_color_picker__WEBPACK_IMPORTED_MODULE_13__/* .ColorPickerComponent */ .h_, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbTooltipModule */ .IB0, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbDialogModule */ .nZv.forChild(), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__/* .TranslateModule */ .h.forChild(), _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_15__/* .OrganizationsMutationModule */ .g, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_16__/* .UserFormsModule */ .D, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_17__/* .ImageUploaderModule */ .M, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbSelectModule */ .VcP, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_18__/* .RemoveLodashModule */ .q, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbListModule */ .PD_, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbTabsetModule */ .AfG, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbRouteTabsetModule */ .x$5, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbDatepickerModule */ .TgK, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbToggleModule */ .jVr, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_19__/* .EntityWithMembersModule */ .x, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_20__/* .EmployeeMultiSelectModule */ .I, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_11__/* .TagsColorInputModule */ .x, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_21__/* .FileUploaderModule */ .N, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_22__/* .SharedModule */ .G, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_23__/* .TimerPickerModule */ .O, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_24__/* .CurrencyModule */ .C, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_25__/* .LocationFormModule */ .C, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_26__/* .LeafletMapModule */ .q, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbAccordionModule */ .LtP, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_27__/* .TimeZoneSelectorModule */ .F, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_28__/* .SmartDataViewLayoutModule */ .H]
      });
    }
  }
  return EditOrganizationSettingsModule;
})();

/***/ }),

/***/ 81724:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ EditOrganizationComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(64411);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9620);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(19159);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(17785);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71181);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(72781);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(87081);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(73246);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(19223);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(23423);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(26024);
/* harmony import */ var _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38546);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(71924);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26860);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(14572);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(56383);
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(79475);
/* harmony import */ var _edit_organization_settings_edit_organization_settings_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49721);



















function EditOrganizationComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainer"] */ .eu8(0);
  }
}
function EditOrganizationComponent_ng_template_5_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("click", function EditOrganizationComponent_ng_template_5_ng_template_11_Template_span_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx_r1.editPublicPage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(1, "nb-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(3, 1, "ORGANIZATIONS_PAGE.EDIT_PUBLIC_PAGE"), " ");
  }
}
function EditOrganizationComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "div", 6)(1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(2, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(3, "div", 9)(4, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(6, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(8, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(10, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(11, EditOrganizationComponent_ng_template_5_ng_template_11_Template, 4, 3, "ng-template", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("src", (ctx_r1.organization == null ? null : ctx_r1.organization.image == null ? null : ctx_r1.organization.image.fullUrl) || (ctx_r1.organization == null ? null : ctx_r1.organization.imageUrl), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵsanitizeUrl"] */ .B4B);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", ctx_r1.organization == null ? null : ctx_r1.organization.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate2"] */ .Lme(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(8, 4, ctx_r1.organization == null ? null : ctx_r1.organization.totalEmployees), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(9, 6, "ORGANIZATIONS_PAGE.EMPLOYEES"), " ");
  }
}
function EditOrganizationComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(2, 1, "POP_UPS.SELECT_ORGANIZATION"));
  }
}
let EditOrganizationComponent = class EditOrganizationComponent extends _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_2__/* .TranslationBaseComponent */ .K {
  constructor(router, route, store, translateService, _urlSerializer, _location) {
    super(translateService);
    this.router = router;
    this.route = route;
    this.store = store;
    this.translateService = translateService;
    this._urlSerializer = _urlSerializer;
    this._location = _location;
  }
  ngOnInit() {
    this.route.data.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__/* .debounceTime */ .B)(100), (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_4__/* .distinctUntilChange */ .nI)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .filter */ .p)(data => !!data && !!data.organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .map */ .T)(({
      organization
    }) => organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .M)(organization => this.organization = organization), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__/* .untilDestroyed */ .s)(this)).subscribe();
    this.store.selectedOrganization$.pipe((0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_4__/* .distinctUntilChange */ .nI)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .filter */ .p)(organization => !!organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .M)(organization => this.organization = organization), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__/* .untilDestroyed */ .s)(this)).subscribe();
  }
  ngAfterViewInit() {
    this.store.selectedOrganization$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .filter */ .p)(organization => !!organization), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__/* .debounceTime */ .B)(200), (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_4__/* .distinctUntilChange */ .nI)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .M)(organization => {
      this.router.navigate(['/pages/organizations/edit', organization.id, this.route.firstChild.snapshot.routeConfig.path]);
    }), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__/* .untilDestroyed */ .s)(this)).subscribe();
  }
  /**
   * Create URL tree for organization edit public page
   *
   * @returns
   */
  editPublicPage() {
    if (!this.organization || !this.store.hasPermission(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_9__/* .PermissionsEnum */ .U.PUBLIC_PAGE_EDIT)) {
      return;
    }
    const {
      id,
      profile_link
    } = this.organization;
    // The call to Location.prepareExternalUrl is the key thing here.
    let tree = this.router.createUrlTree([`/share/organization/${profile_link}/${id}`]);
    // As far as I can tell you don't really need the UrlSerializer.
    const externalUrl = this._location.prepareExternalUrl(this._urlSerializer.serialize(tree));
    window.open(externalUrl, '_blank');
  }
  ngOnDestroy() {}
  static {
    this.ɵfac = function EditOrganizationComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || EditOrganizationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_router__WEBPACK_IMPORTED_MODULE_10__/* .Router */ .Ix), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_router__WEBPACK_IMPORTED_MODULE_10__/* .ActivatedRoute */ .nX), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_11__/* .Store */ .il), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__/* .TranslateService */ .c$), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_router__WEBPACK_IMPORTED_MODULE_10__/* .UrlSerializer */ .Sd), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_common__WEBPACK_IMPORTED_MODULE_13__/* .Location */ .aZ));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineComponent"] */ .VBU({
      type: EditOrganizationComponent,
      selectors: [["ng-component"]],
      standalone: false,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
      decls: 9,
      vars: 4,
      consts: [["organizationTemplate", ""], ["selectTemplate", ""], [1, "org-edit", "card-scroll"], [1, "header"], [4, "ngIf", "ngIfThen", "ngIfElse"], [3, "organization"], [1, "header-container"], [1, "org-info"], ["alt", "Organization Avatar", 1, "org-image", 3, "src"], [1, "org-details"], [1, "org-name"], [1, "org-position"], ["ngxPermissionsOnly", "PUBLIC_PAGE_EDIT"], [1, "edit-public-page", 3, "click"], ["icon", "edit-outline", 1, "mr-1"]],
      template: function EditOrganizationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "nb-card", 2)(1, "nb-card-header", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(2, EditOrganizationComponent_ng_container_2_Template, 1, 0, "ng-container", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(3, "nb-card-body");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(4, "ngx-edit-organization-settings", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(5, EditOrganizationComponent_ng_template_5_Template, 12, 8, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplateRefExtractor"] */ .C5r)(7, EditOrganizationComponent_ng_template_7_Template, 3, 3, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplateRefExtractor"] */ .C5r);
        }
        if (rf & 2) {
          const organizationTemplate_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵreference"] */ .sdS(6);
          const selectTemplate_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵreference"] */ .sdS(8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.organization)("ngIfThen", organizationTemplate_r3)("ngIfElse", selectTemplate_r4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("organization", ctx.organization);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_14__/* .NgIf */ .bT, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__/* .NbCardComponent */ .SrT, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__/* .NbCardBodyComponent */ .KH5, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__/* .NbCardHeaderComponent */ .zJv, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__/* .NbIconComponent */ .tHu, ngx_permissions__WEBPACK_IMPORTED_MODULE_16__/* .NgxPermissionsDirective */ .f6, _edit_organization_settings_edit_organization_settings_component__WEBPACK_IMPORTED_MODULE_0__/* .EditOrganizationSettingsComponent */ .q, _angular_common__WEBPACK_IMPORTED_MODULE_14__/* .JsonPipe */ .TG, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__/* .TranslatePipe */ .D9],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   .card-scroll[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n}\n[_nghost-%COMP%]   .card-scroll[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  padding-left: 20px;\n  padding-right: 20px;\n  padding-top: 25px;\n  border-bottom: none;\n}\n[_nghost-%COMP%]   .card-scroll[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n[_nghost-%COMP%]   .card-scroll[_ngcontent-%COMP%]   .org-image[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n}\n[dir=ltr]   [_nghost-%COMP%]   .card-scroll[_ngcontent-%COMP%]   .org-image[_ngcontent-%COMP%] {\n  margin-right: 17px !important;\n}\n[dir=ltr]   [_nghost-%COMP%]   .card-scroll[_ngcontent-%COMP%]   .org-image[_ngcontent-%COMP%] {\n  margin-left: 0px !important;\n}\n[dir=rtl]   [_nghost-%COMP%]   .card-scroll[_ngcontent-%COMP%]   .org-image[_ngcontent-%COMP%] {\n  margin-right: 0px !important;\n}\n[dir=rtl]   [_nghost-%COMP%]   .card-scroll[_ngcontent-%COMP%]   .org-image[_ngcontent-%COMP%] {\n  margin-left: 17px !important;\n}\n[_nghost-%COMP%]   .card-scroll[_ngcontent-%COMP%]   .org-name[_ngcontent-%COMP%] {\n  font-size: 14px !important;\n  font-style: normal;\n  font-weight: 600 !important;\n  line-height: 17px;\n  letter-spacing: 0em;\n  margin-bottom: 3px;\n}\n[_nghost-%COMP%]   .card-scroll[_ngcontent-%COMP%]   .org-position[_ngcontent-%COMP%] {\n  font-size: 12px !important;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 15px;\n  letter-spacing: 0em;\n}\n[_nghost-%COMP%]   .card-scroll[_ngcontent-%COMP%]   .edit-public-page[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  padding: 2px 12px;\n  box-sizing: border-box;\n  border-radius: var(--button-rectangle-border-radius);\n  border: 2px solid var(--color-primary-transparent-default);\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 11px;\n  letter-spacing: 0em;\n  text-align: left;\n  color: var(--text-primary-color);\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .card-scroll[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\n.edit-icon[_ngcontent-%COMP%] {\n  margin-left: 30px;\n  position: relative;\n  width: 36px;\n}\n.edit-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  position: absolute;\n}\n.edit-icon[_ngcontent-%COMP%]   nb-icon[_ngcontent-%COMP%] {\n  position: absolute;\n}\n\n.org-details[_ngcontent-%COMP%]   .edit-public-page[_ngcontent-%COMP%] {\n  cursor: pointer;\n  color: #027ad6;\n  padding-top: 3px;\n}\n\n.setting-name[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: bold;\n}\n\n.body-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 35px;\n}\n\n.mutation-card.setting-block[_ngcontent-%COMP%] {\n  background: #eaf3fc;\n}\n\n.transparent[_ngcontent-%COMP%] {\n  opacity: 0.7;\n}\n\n.settings-body[_ngcontent-%COMP%] {\n  padding: 35px;\n}\n\n.sub-header[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  font-weight: bold;\n}\n\n.header-content[_ngcontent-%COMP%] {\n  display: flex;\n}\n.header-content[_ngcontent-%COMP%]   .header-info[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 560px;\n  padding-left: 30px;\n}\n\n@media only screen and (max-width: 480px) {\n  .header[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .org-image[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n  }\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  height: unset;\n}\n[_nghost-%COMP%]     input, \n[_nghost-%COMP%]     nb-select.appearance-outline.status-basic .select-button, \n[_nghost-%COMP%]     .ng-select .ng-select-container {\n  background-color: var(--gauzy-card-1) !important;\n  border: none;\n  height: 42px !important;\n}\n[_nghost-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder, \n[_nghost-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {\n  top: unset !important;\n}\n[_nghost-%COMP%]     label, \n[_nghost-%COMP%]     .label {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  color: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]     textarea {\n  background-color: var(--gauzy-card-1) !important;\n  border: none;\n}\n[_nghost-%COMP%]     .ng-select .ng-select-container input, \n[_nghost-%COMP%]     nb-tag-list input {\n  background-color: unset !important;\n}", "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.header[_ngcontent-%COMP%] {\n  padding: 30px;\n}\n.header[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.header[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   .employee-info[_ngcontent-%COMP%], \n.header[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   .org-info[_ngcontent-%COMP%] {\n  display: flex;\n}\n.header[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   .employee-info[_ngcontent-%COMP%]   .employee-image[_ngcontent-%COMP%], \n.header[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   .employee-info[_ngcontent-%COMP%]   .org-image[_ngcontent-%COMP%], \n.header[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   .org-info[_ngcontent-%COMP%]   .employee-image[_ngcontent-%COMP%], \n.header[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   .org-info[_ngcontent-%COMP%]   .org-image[_ngcontent-%COMP%] {\n  max-width: 70px;\n  max-height: 70px;\n  border-radius: 13px;\n  margin-right: 24px;\n  margin-left: 24px;\n}\n.header[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   .employee-details[_ngcontent-%COMP%], \n.header[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   .org-details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.header[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   .employee-details[_ngcontent-%COMP%]   .employee-name[_ngcontent-%COMP%], \n.header[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   .employee-details[_ngcontent-%COMP%]   .org-name[_ngcontent-%COMP%], \n.header[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   .org-details[_ngcontent-%COMP%]   .employee-name[_ngcontent-%COMP%], \n.header[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   .org-details[_ngcontent-%COMP%]   .org-name[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 18px;\n}\n.header[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   .employee-details[_ngcontent-%COMP%]   .employee-position[_ngcontent-%COMP%], \n.header[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   .employee-details[_ngcontent-%COMP%]   .org-position[_ngcontent-%COMP%], \n.header[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   .org-details[_ngcontent-%COMP%]   .employee-position[_ngcontent-%COMP%], \n.header[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   .org-details[_ngcontent-%COMP%]   .org-position[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\n.open[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.body[_ngcontent-%COMP%] {\n  padding: 36px;\n  display: flex;\n  justify-content: space-between;\n}\n.body[_ngcontent-%COMP%]   .half-content[_ngcontent-%COMP%] {\n  width: 49%;\n}\n.body[_ngcontent-%COMP%]   .info-block[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 20px;\n  width: 100%;\n  height: 84px;\n  border-radius: 4px;\n  padding: 29px;\n  background-color: #f6f9fc;\n  cursor: pointer;\n}\n.body[_ngcontent-%COMP%]   .info-block[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 2px 9px 0 rgba(0, 0, 0, 0.26);\n  transform: translateY(-1px);\n}\n.body[_ngcontent-%COMP%]   .info-block[_ngcontent-%COMP%]   .info-text[_ngcontent-%COMP%], \n.body[_ngcontent-%COMP%]   .info-block[_ngcontent-%COMP%]   .info-value[_ngcontent-%COMP%] {\n  display: flex;\n  font-size: 18px;\n  color: #333333;\n}\n.body[_ngcontent-%COMP%]   .info-block[_ngcontent-%COMP%]   .info-text[_ngcontent-%COMP%]   .profit-positive-color[_ngcontent-%COMP%], \n.body[_ngcontent-%COMP%]   .info-block[_ngcontent-%COMP%]   .info-value[_ngcontent-%COMP%]   .profit-positive-color[_ngcontent-%COMP%] {\n  color: #66de0b;\n}\n.body[_ngcontent-%COMP%]   .info-block[_ngcontent-%COMP%]   .info-text[_ngcontent-%COMP%]   .profit-negative-color[_ngcontent-%COMP%], \n.body[_ngcontent-%COMP%]   .info-block[_ngcontent-%COMP%]   .info-value[_ngcontent-%COMP%]   .profit-negative-color[_ngcontent-%COMP%] {\n  color: #ff7b00;\n}\n.body[_ngcontent-%COMP%]   .info-block[_ngcontent-%COMP%]   .info-text[_ngcontent-%COMP%]   .expense-color[_ngcontent-%COMP%], \n.body[_ngcontent-%COMP%]   .info-block[_ngcontent-%COMP%]   .info-value[_ngcontent-%COMP%]   .expense-color[_ngcontent-%COMP%] {\n  color: #dbc300;\n}\n.body[_ngcontent-%COMP%]   .info-block[_ngcontent-%COMP%]   .info-text[_ngcontent-%COMP%]   .income-color[_ngcontent-%COMP%], \n.body[_ngcontent-%COMP%]   .info-block[_ngcontent-%COMP%]   .info-value[_ngcontent-%COMP%]   .income-color[_ngcontent-%COMP%] {\n  color: #089c17;\n}\n.body[_ngcontent-%COMP%]   .info-block[_ngcontent-%COMP%]   .info-text[_ngcontent-%COMP%] {\n  flex-direction: column;\n  justify-content: center;\n}\n.body[_ngcontent-%COMP%]   .info-block[_ngcontent-%COMP%]   .info-value[_ngcontent-%COMP%] {\n  flex-direction: row;\n  align-items: center;\n}\n.body[_ngcontent-%COMP%]   .info-block[_ngcontent-%COMP%]   .info-value[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 24px;\n  margin-right: 12px;\n}\n.body[_ngcontent-%COMP%]   .bonus[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  width: 100%;\n}\n.body[_ngcontent-%COMP%]   .bonus[_ngcontent-%COMP%]   .bonus-value[_ngcontent-%COMP%] {\n  margin-right: 39px;\n}\n.body[_ngcontent-%COMP%]   .bonus[_ngcontent-%COMP%]   .bonus-value[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:first-child {\n  text-align: right;\n  font-size: 16px;\n  margin-bottom: 15px;\n  margin-right: 3px;\n}\n.body[_ngcontent-%COMP%]   .bonus[_ngcontent-%COMP%]   .bonus-value[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:last-child {\n  font-size: 46px;\n  font-weight: bold;\n  color: #0091ff;\n}\n.body[_ngcontent-%COMP%]   .bonus[_ngcontent-%COMP%]   .bonus-value[_ngcontent-%COMP%]   .negative-bonus-color[_ngcontent-%COMP%] {\n  color: red;\n}\n.body[_ngcontent-%COMP%]   .bonus[_ngcontent-%COMP%]   .bonus-disclaimer[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  margin-right: 39px;\n  font-size: 0.7rem;\n  width: 215px;\n}\n\n  nb-route-tabset .route-tab .tab-link {\n  border-radius: var(--border-radius) var(--border-radius) 0 0;\n}\n  nb-route-tabset .route-tab .tab-link svg {\n  fill: var(--text-primary-color);\n}\n  nb-route-tabset .route-tab .tab-link span {\n  display: inline-block;\n  text-transform: initial;\n}\n  nb-route-tabset .route-tab .tab-link span:first-letter {\n  text-transform: uppercase;\n}"]
    });
  }
};
EditOrganizationComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_17__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__/* .UntilDestroy */ .d)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_17__/* .__metadata */ .Sn)("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_10__/* .Router */ .Ix, _angular_router__WEBPACK_IMPORTED_MODULE_10__/* .ActivatedRoute */ .nX, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_11__/* .Store */ .il, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__/* .TranslateService */ .c$, _angular_router__WEBPACK_IMPORTED_MODULE_10__/* .UrlSerializer */ .Sd, _angular_common__WEBPACK_IMPORTED_MODULE_13__/* .Location */ .aZ])], EditOrganizationComponent);


/***/ }),

/***/ 86036:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ OrganizationExpenseCategoriesService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80189);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64913);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26860);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45715);





let OrganizationExpenseCategoriesService = /*#__PURE__*/(() => {
  class OrganizationExpenseCategoriesService {
    constructor(http) {
      this.http = http;
    }
    create(createInput) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ ._)(this.http.post(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/expense-categories`, createInput));
    }
    getAll(findInput, relations) {
      const data = JSON.stringify({
        findInput,
        relations
      });
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ ._)(this.http.get(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/expense-categories`, {
        params: {
          data
        }
      }));
    }
    update(id, updateInput) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ ._)(this.http.put(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/expense-categories/${id}`, updateInput));
    }
    delete(id) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ ._)(this.http.delete(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/expense-categories/${id}`));
    }
    static {
      this.ɵfac = function OrganizationExpenseCategoriesService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || OrganizationExpenseCategoriesService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵinject"] */ .KVO(_angular_common_http__WEBPACK_IMPORTED_MODULE_3__/* .HttpClient */ .Qq));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineInjectable"] */ .jDH({
        token: OrganizationExpenseCategoriesService,
        factory: OrganizationExpenseCategoriesService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return OrganizationExpenseCategoriesService;
})();

/***/ }),

/***/ 94571:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D4: () => (/* binding */ DEFAULT_PROOF_COMPLETION_TYPE),
/* harmony export */   Fj: () => (/* binding */ DEFAULT_AUTO_ARCHIVE_ISSUE_PERIOD),
/* harmony export */   QL: () => (/* binding */ TaskProofOfCompletionTypeEnum),
/* harmony export */   hw: () => (/* binding */ DEFAULT_AUTO_CLOSE_ISSUE_PERIOD),
/* harmony export */   oU: () => (/* binding */ DEFAULT_TASK_NOTIFY_PERIOD)
/* harmony export */ });
/**
 * Enumeration for task proof of completion types.
 * Defines whether the proof of task completion is publicly visible or private.
 */
var TaskProofOfCompletionTypeEnum = /*#__PURE__*/function (TaskProofOfCompletionTypeEnum) {
  TaskProofOfCompletionTypeEnum["PUBLIC"] = "PUBLIC";
  TaskProofOfCompletionTypeEnum["PRIVATE"] = "PRIVATE";
  return TaskProofOfCompletionTypeEnum;
}(TaskProofOfCompletionTypeEnum || {});
/**
 * Default period (in days) before sending a notification about a pending task.
 */
const DEFAULT_TASK_NOTIFY_PERIOD = 7;
/**
 * Default period (in days) before an unresolved issue is automatically closed.
 */
const DEFAULT_AUTO_CLOSE_ISSUE_PERIOD = 7;
/**
 * Default period (in days) before an inactive issue is automatically archived.
 */
const DEFAULT_AUTO_ARCHIVE_ISSUE_PERIOD = 7;
/**
 * Default proof of completion type for a task, set to PRIVATE.
 */
const DEFAULT_PROOF_COMPLETION_TYPE = TaskProofOfCompletionTypeEnum.PRIVATE;

/***/ }),

/***/ 98946:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ EditOrganizationRoutingModule)
/* harmony export */ });
/* unused harmony export redirectTo */
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(908);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4106);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(17785);
/* harmony import */ var _edit_organization_settings_edit_organization_main_edit_organization_main_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26908);
/* harmony import */ var _edit_organization_settings_edit_organization_location_edit_organization_location_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74000);
/* harmony import */ var _edit_organization_settings_edit_organization_other_settings_edit_organization_other_settings_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(72710);
/* harmony import */ var _edit_organization_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(81724);
/* harmony import */ var _edit_organization_task_setting_resolver__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(33392);
/* harmony import */ var _organization_resolver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(70035);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(26860);











function redirectTo() {
  return '/pages/dashboard';
}
const routes = [{
  path: ':id',
  component: _edit_organization_component__WEBPACK_IMPORTED_MODULE_3__/* .EditOrganizationComponent */ .R,
  canActivate: [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_4__/* .PermissionsGuard */ .a],
  data: {
    permissions: {
      only: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_5__/* .PermissionsEnum */ .U.ALL_ORG_EDIT],
      redirectTo
    }
  },
  resolve: {
    organization: _organization_resolver__WEBPACK_IMPORTED_MODULE_6__/* .OrganizationResolver */ .i,
    organizationTaskSetting: _edit_organization_task_setting_resolver__WEBPACK_IMPORTED_MODULE_7__/* .EditOrganizationTaskSettingResolver */ .n
  },
  runGuardsAndResolvers: 'always',
  children: [{
    path: '',
    redirectTo: 'main',
    pathMatch: 'full'
  }, {
    path: 'main',
    component: _edit_organization_settings_edit_organization_main_edit_organization_main_component__WEBPACK_IMPORTED_MODULE_0__/* .EditOrganizationMainComponent */ .M,
    data: {
      relations: ['tags'],
      selectors: {
        project: false,
        team: false,
        employee: false,
        date: false
      }
    }
  }, {
    path: 'location',
    component: _edit_organization_settings_edit_organization_location_edit_organization_location_component__WEBPACK_IMPORTED_MODULE_1__/* .EditOrganizationLocationComponent */ .K,
    data: {
      relations: ['contact'],
      selectors: {
        project: false,
        team: false,
        employee: false,
        date: false
      }
    }
  }, {
    path: 'settings',
    component: _edit_organization_settings_edit_organization_other_settings_edit_organization_other_settings_component__WEBPACK_IMPORTED_MODULE_2__/* .EditOrganizationOtherSettingsComponent */ .q,
    data: {
      relations: ['accountingTemplates'],
      selectors: {
        project: false,
        team: false,
        employee: false,
        date: false
      }
    }
  }]
}];
let EditOrganizationRoutingModule = /*#__PURE__*/(() => {
  class EditOrganizationRoutingModule {
    static {
      this.ɵfac = function EditOrganizationRoutingModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || EditOrganizationRoutingModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵdefineNgModule"] */ .$C({
        type: EditOrganizationRoutingModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__/* .RouterModule */ .iI.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_9__/* .RouterModule */ .iI]
      });
    }
  }
  return EditOrganizationRoutingModule;
})();

/***/ })

}]);