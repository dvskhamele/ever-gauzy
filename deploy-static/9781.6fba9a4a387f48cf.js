"use strict";
(self["webpackChunkgauzy"] = self["webpackChunkgauzy"] || []).push([[9781],{

/***/ 1513:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   k: () => (/* binding */ ProposalLayoutComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4637);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41104);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12990);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(30920);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(47594);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(19223);
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(79475);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26024);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(71924);
/* harmony import */ var _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(82465);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(26860);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9620);














let ProposalLayoutComponent = /*#__PURE__*/(() => {
  let ProposalLayoutComponent = class ProposalLayoutComponent {
    constructor(_translateService, _ngxPermissionsService, _store, _i18nService) {
      this._translateService = _translateService;
      this._ngxPermissionsService = _ngxPermissionsService;
      this._store = _store;
      this._i18nService = _i18nService;
      this.initializeUiPermissions(); // Initialize UI permissions
      this.initializeUiLanguagesAndLocale(); // Initialize UI languages and Update Locale
    }
    /**
     * Initialize UI permissions
     */
    initializeUiPermissions() {
      // Load permissions
      const permissions = this._store.userRolePermissions.map(({
        permission
      }) => permission);
      this._ngxPermissionsService.flushPermissions(); // Flush permissions
      this._ngxPermissionsService.loadPermissions(permissions); // Load permissions
    }
    /**
     * Initialize UI languages and Update Locale
     */
    initializeUiLanguagesAndLocale() {
      // Observable that emits when preferred language changes.
      const preferredLanguage$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .merge */ .h)(this._store.preferredLanguage$, this._i18nService.preferredLanguage$).pipe((0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .distinctUntilChange */ .nI)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__/* .filter */ .p)(lang => !!lang), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__/* .tap */ .M)(lang => {
        this._translateService.use(lang);
      }), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .untilDestroyed */ .s)(this));
      // Subscribe to initiate the stream
      preferredLanguage$.subscribe();
    }
    /**
     * Unsubscribe from all subscriptions
     */
    ngOnDestroy() {}
    static {
      this.ɵfac = function ProposalLayoutComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || ProposalLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__/* .TranslateService */ .c$), _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdirectiveInject"] */ .rXU(ngx_permissions__WEBPACK_IMPORTED_MODULE_7__/* .NgxPermissionsService */ .$R), _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_8__/* .Store */ .il), _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_9__/* .I18nService */ .W));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdefineComponent"] */ .VBU({
        type: ProposalLayoutComponent,
        selectors: [["gz-proposal-layout"]],
        standalone: false,
        decls: 1,
        vars: 0,
        template: function ProposalLayoutComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelement"] */ .nrm(0, "router-outlet");
          }
        },
        dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_10__/* .RouterOutlet */ .n3],
        styles: ["[_nghost-%COMP%] {\n\t\t\t\theight: 100%;\n\t\t\t\tdisplay: block;\n\t\t\t}"]
      });
    }
  };
  ProposalLayoutComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_11__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .UntilDestroy */ .d)(), (0,tslib__WEBPACK_IMPORTED_MODULE_11__/* .__metadata */ .Sn)("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__/* .TranslateService */ .c$, ngx_permissions__WEBPACK_IMPORTED_MODULE_7__/* .NgxPermissionsService */ .$R, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_8__/* .Store */ .il, _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_9__/* .I18nService */ .W])], ProposalLayoutComponent);
  return ProposalLayoutComponent;
})();


/***/ }),

/***/ 3289:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   r: () => (/* binding */ OrganizationSettingService)
/* harmony export */ });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20381);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15788);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26860);
/* harmony import */ var _store_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71924);
/* harmony import */ var _selector_builder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(28822);







let OrganizationSettingService = /*#__PURE__*/(() => {
  class OrganizationSettingService {
    constructor(store, dateRangePickerBuilderService) {
      this.store = store;
      this.dateRangePickerBuilderService = dateRangePickerBuilderService;
    }
    /**
     * Retrieves a date based on the organization settings.
     * If the organization's default value date type is set to 'END_OF_MONTH',
     * returns the end of the month for the provided startDate.
     * If the organization's default value date type is set to 'START_OF_MONTH',
     * returns the start of the month for the provided startDate.
     * If the organization's default value date type is not set or is invalid,
     * returns the current date.
     * @returns
     */
    getDateFromOrganizationSettings() {
      const startDate = this.dateRangePickerBuilderService?.selectedDateRange?.startDate ?? new Date();
      if (this.store.selectedOrganization) {
        switch (this.store.selectedOrganization.defaultValueDateType) {
          case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__/* .DefaultValueDateTypeEnum */ .CZ.END_OF_MONTH:
            {
              return moment__WEBPACK_IMPORTED_MODULE_0__(startDate).endOf('month').toDate();
            }
          case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__/* .DefaultValueDateTypeEnum */ .CZ.START_OF_MONTH:
            {
              return moment__WEBPACK_IMPORTED_MODULE_0__(startDate).startOf('month').toDate();
            }
          default:
            {
              return moment__WEBPACK_IMPORTED_MODULE_0__().toDate();
            }
        }
      }
      return moment__WEBPACK_IMPORTED_MODULE_0__(startDate).toDate();
    }
    static {
      this.ɵfac = function OrganizationSettingService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || OrganizationSettingService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵinject"] */ .KVO(_store_store_service__WEBPACK_IMPORTED_MODULE_3__/* .Store */ .il), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵinject"] */ .KVO(_selector_builder__WEBPACK_IMPORTED_MODULE_4__/* .DateRangePickerBuilderService */ .i7));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineInjectable"] */ .jDH({
        token: OrganizationSettingService,
        factory: OrganizationSettingService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return OrganizationSettingService;
})();

/***/ }),

/***/ 6313:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ ClickableLinkComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);

let ClickableLinkComponent = /*#__PURE__*/(() => {
  class ClickableLinkComponent {
    constructor() {
      this.target = '_blank';
    }
    ngOnInit() {
      // Your custom logic here
    }
    static {
      this.ɵfac = function ClickableLinkComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || ClickableLinkComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: ClickableLinkComponent,
        selectors: [["ngx-clickable-link"]],
        inputs: {
          value: "value",
          rowData: "rowData",
          href: "href",
          target: "target"
        },
        standalone: false,
        decls: 2,
        vars: 3,
        consts: [[3, "href", "target"]],
        template: function ClickableLinkComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "a", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("href", ctx.rowData[ctx.href], _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵsanitizeUrl"] */ .B4B)("target", ctx.target);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", ctx.value, " ");
          }
        },
        styles: ["a[_ngcontent-%COMP%] {\n  color: rgb(0, 136, 254);\n  text-decoration: none;\n}"]
      });
    }
  }
  return ClickableLinkComponent;
})();

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

/***/ 9366:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G: () => (/* binding */ createProposalsRoutes)
/* harmony export */ });
/* harmony import */ var _components_proposal_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1513);

/**
 * Creates proposal routes for the application
 *
 * @param _pageRouteRegistryService An instance of PageRouteRegistryService
 * @returns An array of Route objects
 */
const createProposalsRoutes = _pageRouteRegistryService => [{
  path: '',
  component: _components_proposal_layout_component__WEBPACK_IMPORTED_MODULE_0__/* .ProposalLayoutComponent */ .k,
  children: _pageRouteRegistryService.getPageLocationRoutes('proposals')
}];

/***/ }),

/***/ 11336:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ ContactSelectModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14572);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10936);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19223);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(55567);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);






let ContactSelectModule = /*#__PURE__*/(() => {
  class ContactSelectModule {
    static {
      this.ɵfac = function ContactSelectModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || ContactSelectModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .$C({
        type: ContactSelectModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .CommonModule */ .MD, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .FormsModule */ .YN, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_3__/* .NgSelectModule */ .MQ, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__/* .TranslateModule */ .h.forChild()]
      });
    }
  }
  return ContactSelectModule;
})();

/***/ }),

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

/***/ 14433:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   t: () => (/* binding */ JobTitleComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);

let JobTitleComponent = /*#__PURE__*/(() => {
  class JobTitleComponent {
    static {
      this.ɵfac = function JobTitleComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || JobTitleComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: JobTitleComponent,
        selectors: [["ng-component"]],
        inputs: {
          rowData: "rowData",
          value: "value"
        },
        standalone: false,
        decls: 2,
        vars: 1,
        template: function JobTitleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(ctx.rowData.jobTitle);
          }
        },
        encapsulation: 2
      });
    }
  }
  return JobTitleComponent;
})();

/***/ }),

/***/ 16119:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   z: () => (/* binding */ TaskBadgeViewComponentModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14572);
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10012);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);



let TaskBadgeViewComponentModule = /*#__PURE__*/(() => {
  class TaskBadgeViewComponentModule {
    static {
      this.ɵfac = function TaskBadgeViewComponentModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || TaskBadgeViewComponentModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .$C({
        type: TaskBadgeViewComponentModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .CommonModule */ .MD, _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_2__/* .PipesModule */ .Y]
      });
    }
  }
  return TaskBadgeViewComponentModule;
})();

/***/ }),

/***/ 17492:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   f: () => (/* binding */ ProductCategorySelectorModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14572);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10936);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(55567);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19223);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);






let ProductCategorySelectorModule = /*#__PURE__*/(() => {
  class ProductCategorySelectorModule {
    static {
      this.ɵfac = function ProductCategorySelectorModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || ProductCategorySelectorModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .$C({
        type: ProductCategorySelectorModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .CommonModule */ .MD, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .FormsModule */ .YN, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__/* .TranslateModule */ .h.forChild(), _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__/* .NgSelectModule */ .MQ]
      });
    }
  }
  return ProductCategorySelectorModule;
})();

/***/ }),

/***/ 18471:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   w: () => (/* binding */ TaskStatusSelectModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14572);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10936);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(55567);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19223);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57972);
/* harmony import */ var _task_badge_view_task_badge_view_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(16119);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);








let TaskStatusSelectModule = /*#__PURE__*/(() => {
  class TaskStatusSelectModule {
    static {
      this.ɵfac = function TaskStatusSelectModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || TaskStatusSelectModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .$C({
        type: TaskStatusSelectModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .G2t({
        providers: [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_1__/* .TaskStatusesService */ .f],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__/* .CommonModule */ .MD, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .FormsModule */ .YN, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__/* .NgSelectModule */ .MQ, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__/* .TranslateModule */ .h.forChild(), _task_badge_view_task_badge_view_module__WEBPACK_IMPORTED_MODULE_6__/* .TaskBadgeViewComponentModule */ .z]
      });
    }
  }
  return TaskStatusSelectModule;
})();

/***/ }),

/***/ 21968:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   U: () => (/* binding */ InputFilterComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10936);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4478);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45808);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39855);
/* harmony import */ var angular2_smart_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52345);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(26860);






let InputFilterComponent = /*#__PURE__*/(() => {
  class InputFilterComponent extends angular2_smart_table__WEBPACK_IMPORTED_MODULE_0__/* .DefaultFilter */ .yG {
    constructor() {
      super();
      this.inputControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .FormControl */ .MJ();
    }
    ngOnInit() {
      // Subscribe to value changes of the inputControl
      this.subscription = this.inputControl.valueChanges.pipe(
      // Apply a debounce time to reduce the frequency of value changes
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .debounceTime */ .B)(this.debounceTime),
      // Ensure distinct values to avoid redundant operations
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .distinctUntilChanged */ .F)(),
      // Use tap to perform a side effect, invoking the filterFunction of the column
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .tap */ .M)(value => this.column.filterFunction(value, this.column.id)))
      // Subscribe to the observable
      .subscribe();
    }
    /**
     *
     * @param changes
     */
    ngOnChanges(changes) {}
    /**
     * Lifecycle hook called just before the component is destroyed.
     */
    ngOnDestroy() {
      // Unsubscribe from the subscription to avoid memory leaks.
      this.subscription.unsubscribe();
    }
    static {
      this.ɵfac = function InputFilterComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || InputFilterComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdefineComponent"] */ .VBU({
        type: InputFilterComponent,
        selectors: [["ga-input-filter-selector"]],
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3, _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵNgOnChangesFeature"] */ .OA$],
        decls: 1,
        vars: 2,
        consts: [[1, "form-control", 3, "formControl", "placeholder"]],
        template: function InputFilterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelement"] */ .nrm(0, "input", 0);
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Y8G("formControl", ctx.inputControl)("placeholder", ctx.column.title);
          }
        },
        dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .DefaultValueAccessor */ .me, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .NgControlStatus */ .BC, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .FormControlDirective */ .l_],
        encapsulation: 2
      });
    }
  }
  return InputFilterComponent;
})();

/***/ }),

/***/ 23921:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   n: () => (/* binding */ ProposalRegisterComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(73014);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(4637);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(26860);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10936);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(12990);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(30920);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(19223);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(9620);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(47594);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(56383);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20381);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(26024);
/* harmony import */ var _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38546);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(60911);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(71924);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(76527);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(15480);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(3289);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(54263);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(98106);
/* harmony import */ var ckeditor4_angular__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(76682);
/* harmony import */ var _ui_core_shared_src_lib_components_back_navigation_back_navigation_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(90910);
/* harmony import */ var _ui_core_shared_src_lib_components_header_title_header_title_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(49072);
/* harmony import */ var _ui_core_shared_src_lib_tags_tags_color_input_tags_color_input_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(62177);
/* harmony import */ var _ui_core_shared_src_lib_proposal_template_select_proposal_template_select_proposal_template_select_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(99434);
/* harmony import */ var _ui_core_shared_src_lib_contact_select_contact_select_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(84597);
/* harmony import */ var _ui_core_shared_src_lib_selectors_employee_employee_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(54982);

var ProposalRegisterComponent_1;


























const _c0 = () => ({
  standalone: true
});
let ProposalRegisterComponent = /*#__PURE__*/(() => {
  let ProposalRegisterComponent = class ProposalRegisterComponent extends _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_1__/* .TranslationBaseComponent */ .K {
    static {
      ProposalRegisterComponent_1 = this;
    }
    static buildForm(fb, self) {
      return fb.group({
        jobPostUrl: [],
        valueDate: [self._organizationSettingService.getDateFromOrganizationSettings(), _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .Validators */ .k0.required],
        jobPostContent: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .Validators */ .k0.required],
        proposalContent: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .Validators */ .k0.required],
        tags: [],
        organizationContact: [],
        employee: []
      }, {
        validators: [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_3__/* .UrlPatternValidator */ .i.websiteUrlValidator('jobPostUrl')]
      });
    }
    constructor(translateService, _fb, _store, _router, _dateService, _proposalsService, _toastrService, _cdRef, _organizationSettingService, _errorHandlingService) {
      super(translateService);
      this.translateService = translateService;
      this._fb = _fb;
      this._store = _store;
      this._router = _router;
      this._dateService = _dateService;
      this._proposalsService = _proposalsService;
      this._toastrService = _toastrService;
      this._cdRef = _cdRef;
      this._organizationSettingService = _organizationSettingService;
      this._errorHandlingService = _errorHandlingService;
      this.ckConfig = _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_4__/* .ckEditorConfig */ .a;
      /*
       * Payment Mutation Form
       */
      this.form = ProposalRegisterComponent_1.buildForm(this._fb, this);
      this.minDate = this._dateService.addMonth(this._dateService.today(), 0);
    }
    ngOnInit() {
      this._store.selectedOrganization$.pipe((0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_5__/* .distinctUntilChange */ .nI)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .filter */ .p)(organization => !!organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .M)(organization => this.organization = organization), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__/* .untilDestroyed */ .s)(this)).subscribe();
    }
    ngAfterViewInit() {
      this._cdRef.detectChanges();
    }
    /**
     * Select Employee Selector
     *
     * @param employee
     */
    selectionEmployee(employee) {
      if (employee) {
        this.form.patchValue({
          employee: employee
        });
        this.form.updateValueAndValidity();
      }
      this.proposalTemplateId = null;
    }
    /**
     * Updates the 'proposalContent' field in the form based on a given template.
     *
     * @param item An `IEmployeeProposalTemplate` object. If `null` or empty, the 'proposalContent' field is set to `null`.
     */
    onProposalTemplateChange(item) {
      // Check if the provided item is not empty
      if ((0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_5__/* .isNotEmpty */ .hj)(item)) {
        // Set 'proposalContent' field in the form with the content from the item
        this.form.patchValue({
          proposalContent: item.content
        });
      } else {
        // If item is empty or null, clear 'proposalContent' field
        this.form.patchValue({
          proposalContent: null
        });
      }
      // Ensure the form updates its state after patching values
      this.form.updateValueAndValidity();
    }
    /**
     * Registers a new proposal based on the form input, validating required conditions.
     *
     * If the form is valid and an organization is set, it extracts relevant data from the form,
     * creates a proposal via the proposalsService, and navigates to the appropriate page.
     *
     * Displays success or error messages based on the operation's outcome.
     *
     * @returns A promise that resolves when the proposal is registered or rejects with an error.
     */
    registerProposal() {
      var _this = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A)(function* () {
        // Return early if organization is not set or form is invalid
        if (!_this.organization || _this.form.invalid) {
          return;
        }
        const {
          jobPostUrl,
          valueDate,
          jobPostContent,
          proposalContent,
          organizationContact,
          tags = [],
          employee
        } = _this.form.value; // Extract form values
        if (!employee) {
          // No employee selected, show a specific message
          _this._toastrService.success('NOTES.PROPOSALS.REGISTER_PROPOSAL_NO_EMPLOYEE_SELECTED', null, 'TOASTR.MESSAGE.REGISTER_PROPOSAL_NO_EMPLOYEE_MSG');
          return; // Exit early if no employee is selected
        }
        try {
          const {
            id: organizationId,
            tenantId
          } = _this.organization; // Extract current tenant ID & organization ID
          // Create the new proposal with the collected data
          yield _this._proposalsService.create({
            organizationId,
            tenantId,
            jobPostUrl,
            valueDate: moment__WEBPACK_IMPORTED_MODULE_0__(valueDate).startOf('day').toDate(),
            // Start of day to avoid time discrepancies
            jobPostContent,
            proposalContent,
            employee: {
              id: employee.id
            },
            employeeId: employee.id,
            organizationContact: {
              id: organizationContact.id
            },
            organizationContactId: organizationContact.id,
            tags
          });
          // Show success message and navigate to the sales/proposals page with query params
          _this._toastrService.success('NOTES.PROPOSALS.REGISTER_PROPOSAL');
          // Navigate to the proposals page with query params
          _this._router.navigate(['/pages/sales/proposals'], {
            queryParams: {
              date: moment__WEBPACK_IMPORTED_MODULE_0__(valueDate).format('MM-DD-YYYY')
            }
          });
        } catch (error) {
          // Handle error cases, show an appropriate message
          _this._errorHandlingService.handleError(error);
        }
      })();
    }
    /**
     * Sets the 'organizationContact' field on the form with the given value.
     *
     * @param organizationContact The selected organization contact to be set in the form.
     */
    selectOrganizationContact(contact) {
      this.form.get('organizationContact').setValue(contact);
      this.form.get('organizationContact').updateValueAndValidity();
    }
    /**
     * Sets the 'tags' field on the form with the given list of tags.
     *
     * @param tags An array of selected tags to be set in the form.
     */
    selectedTagsEvent(tags) {
      this.form.get('tags').setValue(tags);
      this.form.get('tags').updateValueAndValidity();
    }
    ngOnDestroy() {}
    static {
      this.ɵfac = function ProposalRegisterComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || ProposalRegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__/* .TranslateService */ .c$), _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .UntypedFormBuilder */ .ze), _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_12__/* .Store */ .il), _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_router__WEBPACK_IMPORTED_MODULE_13__/* .Router */ .Ix), _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵdirectiveInject"] */ .rXU(_nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbDateService */ .Att), _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_15__/* .ProposalsService */ .p), _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_16__/* .ToastrService */ .t), _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_core__WEBPACK_IMPORTED_MODULE_10__/* .ChangeDetectorRef */ .gRc), _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_17__/* .OrganizationSettingService */ .r), _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_18__/* .ErrorHandlingService */ .X));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵdefineComponent"] */ .VBU({
        type: ProposalRegisterComponent,
        selectors: [["ga-proposal-register"]],
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
        decls: 70,
        vars: 52,
        consts: [["proposalForm", "ngForm"], ["valueDatePicker", ""], [1, "card"], [1, "d-flex", "card-header"], [1, "card-body"], [3, "ngSubmit", "formGroup"], [1, "container"], [1, "row"], [1, "col-sm-3"], [1, "form-group"], [1, "label"], ["id", "authorInput", 1, "employees", 3, "selectionChanged", "skipGlobalChange", "defaultSelected"], [3, "selectedChange", "ngModelChange", "ngModelOptions", "ngModel", "employeeId"], ["formControlName", "organizationContact", 3, "onChanged", "addTag", "searchable", "placeholder"], [1, "col-xl-6"], ["nbInput", "", "fullWidth", "", "type", "text", "formControlName", "jobPostUrl", "autocomplete", "on", 3, "placeholder"], ["formControlName", "valueDate", "nbInput", "", "fullWidth", "", 3, "placeholder", "nbDatepicker"], [3, "min"], [3, "selectedTagsEvent", "selectedTags", "isOrgLevel"], ["formControlName", "jobPostContent", 3, "config"], ["div", "", 1, "col-xl-6"], ["formControlName", "proposalContent", 3, "config"], [1, "text-left", "card-footer"], ["status", "success", "nbButton", "", 1, "register-btn", 3, "click", "disabled"]],
        template: function ProposalRegisterComponent_Template(rf, ctx) {
          if (rf & 1) {
            const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵgetCurrentView"] */ .RV6();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementStart"] */ .j41(0, "nb-card", 2)(1, "nb-card-header", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelement"] */ .nrm(2, "ngx-back-navigation");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementStart"] */ .j41(3, "h4")(4, "ngx-header-title");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵtext"] */ .EFF(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵpipe"] */ .nI1(6, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementEnd"] */ .k0s()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementStart"] */ .j41(7, "nb-card-body", 4)(8, "form", 5, 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵlistener"] */ .bIt("ngSubmit", function ProposalRegisterComponent_Template_form_ngSubmit_8_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵresetView"] */ .Njj(ctx.registerProposal());
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementStart"] */ .j41(10, "div", 6)(11, "div", 7)(12, "div", 8)(13, "div", 9)(14, "label", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵtext"] */ .EFF(15);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵpipe"] */ .nI1(16, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementStart"] */ .j41(17, "ga-employee-selector", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵlistener"] */ .bIt("selectionChanged", function ProposalRegisterComponent_Template_ga_employee_selector_selectionChanged_17_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵresetView"] */ .Njj(ctx.selectionEmployee($event));
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementEnd"] */ .k0s()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementStart"] */ .j41(18, "div", 7)(19, "div", 8)(20, "div", 9)(21, "label", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵtext"] */ .EFF(22);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵpipe"] */ .nI1(23, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementStart"] */ .j41(24, "ngx-proposal-template-select", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵlistener"] */ .bIt("selectedChange", function ProposalRegisterComponent_Template_ngx_proposal_template_select_selectedChange_24_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵresetView"] */ .Njj(ctx.onProposalTemplateChange($event));
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵtwoWayListener"] */ .mxI("ngModelChange", function ProposalRegisterComponent_Template_ngx_proposal_template_select_ngModelChange_24_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵtwoWayBindingSet"] */ .DH7(ctx.proposalTemplateId, $event) || (ctx.proposalTemplateId = $event);
              return _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵresetView"] */ .Njj($event);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementEnd"] */ .k0s()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementStart"] */ .j41(25, "div", 8)(26, "div", 9)(27, "label", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵtext"] */ .EFF(28);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵpipe"] */ .nI1(29, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementStart"] */ .j41(30, "ga-contact-select", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵpipe"] */ .nI1(31, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵlistener"] */ .bIt("onChanged", function ProposalRegisterComponent_Template_ga_contact_select_onChanged_30_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵresetView"] */ .Njj(ctx.selectOrganizationContact($event));
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementEnd"] */ .k0s()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementStart"] */ .j41(32, "div", 7)(33, "div", 14)(34, "div", 9)(35, "label", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵtext"] */ .EFF(36);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵpipe"] */ .nI1(37, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelement"] */ .nrm(38, "input", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵpipe"] */ .nI1(39, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementStart"] */ .j41(40, "div", 8)(41, "div", 9)(42, "label", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵtext"] */ .EFF(43);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵpipe"] */ .nI1(44, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelement"] */ .nrm(45, "input", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵpipe"] */ .nI1(46, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelement"] */ .nrm(47, "nb-datepicker", 17, 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementStart"] */ .j41(49, "div", 8)(50, "ga-tags-color-input", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵlistener"] */ .bIt("selectedTagsEvent", function ProposalRegisterComponent_Template_ga_tags_color_input_selectedTagsEvent_50_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵresetView"] */ .Njj(ctx.selectedTagsEvent($event));
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementEnd"] */ .k0s()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementStart"] */ .j41(51, "div", 7)(52, "div", 14)(53, "nb-card")(54, "nb-card-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵtext"] */ .EFF(55);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵpipe"] */ .nI1(56, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementStart"] */ .j41(57, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelement"] */ .nrm(58, "ckeditor", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementEnd"] */ .k0s()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementStart"] */ .j41(59, "div", 20)(60, "nb-card")(61, "nb-card-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵtext"] */ .EFF(62);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵpipe"] */ .nI1(63, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementStart"] */ .j41(64, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelement"] */ .nrm(65, "ckeditor", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementEnd"] */ .k0s()()()()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementStart"] */ .j41(66, "nb-card-footer", 22)(67, "button", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵlistener"] */ .bIt("click", function ProposalRegisterComponent_Template_button_click_67_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              const proposalForm_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵreference"] */ .sdS(9);
              return _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵresetView"] */ .Njj(proposalForm_r2.ngSubmit.emit());
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵtext"] */ .EFF(68);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵpipe"] */ .nI1(69, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementEnd"] */ .k0s()()();
          }
          if (rf & 2) {
            const valueDatePicker_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵreference"] */ .sdS(48);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵpipeBind1"] */ .bMT(6, 27, "PROPOSALS_PAGE.REGISTER.REGISTER_PROPOSALS"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵproperty"] */ .Y8G("formGroup", ctx.form);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵadvance"] */ .R7$(7);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵpipeBind1"] */ .bMT(16, 29, "PROPOSALS_PAGE.REGISTER.AUTHOR"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵproperty"] */ .Y8G("skipGlobalChange", true)("defaultSelected", true);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵpipeBind1"] */ .bMT(23, 31, "PROPOSALS_PAGE.REGISTER.TEMPLATE"), "");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵproperty"] */ .Y8G("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵpureFunction0"] */ .lJ4(51, _c0));
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵtwoWayProperty"] */ .R50("ngModel", ctx.proposalTemplateId);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵproperty"] */ .Y8G("employeeId", ctx.selectedEmployee == null ? null : ctx.selectedEmployee.id);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵpipeBind1"] */ .bMT(29, 33, "POP_UPS.CONTACT"));
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵproperty"] */ .Y8G("addTag", true)("searchable", true)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵpipeBind1"] */ .bMT(31, 35, "POP_UPS.CONTACT"));
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵadvance"] */ .R7$(6);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵtextInterpolate1"] */ .SpI("", _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵpipeBind1"] */ .bMT(37, 37, "PROPOSALS_PAGE.REGISTER.JOB_POST_URL"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵpipeBind1"] */ .bMT(39, 39, "PROPOSALS_PAGE.REGISTER.JOB_POST_URL"));
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵtextInterpolate1"] */ .SpI("", _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵpipeBind1"] */ .bMT(44, 41, "PROPOSALS_PAGE.REGISTER.PROPOSAL_DATE"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵpipeBind1"] */ .bMT(46, 43, "PROPOSALS_PAGE.REGISTER.PROPOSAL_DATE"))("nbDatepicker", valueDatePicker_r3);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵproperty"] */ .Y8G("min", ctx.minDate);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵproperty"] */ .Y8G("selectedTags", ctx.form.get("tags").value)("isOrgLevel", true);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵpipeBind1"] */ .bMT(56, 45, "PROPOSALS_PAGE.REGISTER.JOB_POST_CONTENT"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵproperty"] */ .Y8G("config", ctx.ckConfig);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵpipeBind1"] */ .bMT(63, 47, "PROPOSALS_PAGE.REGISTER.PROPOSALS_CONTENT"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵproperty"] */ .Y8G("config", ctx.ckConfig);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵproperty"] */ .Y8G("disabled", ctx.form.invalid);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵpipeBind1"] */ .bMT(69, 49, "PROPOSALS_PAGE.REGISTER.REGISTER_PROPOSALS"), " ");
          }
        },
        dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbButtonComponent */ .YP2, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbCardComponent */ .SrT, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbCardBodyComponent */ .KH5, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbCardFooterComponent */ .VDm, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbCardHeaderComponent */ .zJv, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbDatepickerDirective */ .OA9, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbDatepickerComponent */ .k2z, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbInputDirective */ .i6h, ckeditor4_angular__WEBPACK_IMPORTED_MODULE_19__/* .CKEditorComponent */ .h, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* ["ɵNgNoValidate"] */ .qT, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .DefaultValueAccessor */ .me, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .NgControlStatus */ .BC, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .NgControlStatusGroup */ .cb, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .NgModel */ .vS, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .FormGroupDirective */ .j4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .FormControlName */ .JD, _ui_core_shared_src_lib_components_back_navigation_back_navigation_component__WEBPACK_IMPORTED_MODULE_20__/* .BackNavigationComponent */ .r, _ui_core_shared_src_lib_components_header_title_header_title_component__WEBPACK_IMPORTED_MODULE_21__/* .HeaderTitleComponent */ .X, _ui_core_shared_src_lib_tags_tags_color_input_tags_color_input_component__WEBPACK_IMPORTED_MODULE_22__/* .TagsColorInputComponent */ .i, _ui_core_shared_src_lib_proposal_template_select_proposal_template_select_proposal_template_select_component__WEBPACK_IMPORTED_MODULE_23__/* .ProposalTemplateSelectComponent */ .y, _ui_core_shared_src_lib_contact_select_contact_select_component__WEBPACK_IMPORTED_MODULE_24__/* .ContactSelectComponent */ .O, _ui_core_shared_src_lib_selectors_employee_employee_component__WEBPACK_IMPORTED_MODULE_25__/* .EmployeeSelectorComponent */ .R, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__/* .TranslatePipe */ .D9],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.register-btn[_ngcontent-%COMP%] {\n  margin: 20px;\n}\n\n.upload-btn[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.wrapper-top[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-gap: 3em;\n  text-align: center;\n}\n.wrapper-top[_ngcontent-%COMP%]   .prop-card[_ngcontent-%COMP%] {\n  align-items: center;\n  padding: 2em;\n}\n@media (max-width: 1120px) {\n  .wrapper-top[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n@media (max-width: 600px) {\n  .wrapper-top[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n\n.wrapper-bottom[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-gap: 2em;\n  text-align: left;\n  height: fit-content;\n}\n.wrapper-bottom[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 1em;\n}\n.wrapper-bottom[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding: 0 2em;\n}\n@media (max-width: 900px) {\n  .wrapper-bottom[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n\n[dir=rtl]   [_nghost-%COMP%]     .card-header {\n  gap: 2rem;\n}\n[dir=rtl]   [_nghost-%COMP%]     .card-header ngx-back-navigation button {\n  margin: 3px 0 0 0 !important;\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  height: 100%;\n  border-radius: var(--border-radius);\n  border: unset;\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  flex: 0 1 auto;\n  border-bottom: unset;\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  overflow: overlay;\n  height: calc(100vh - var(--header-height) - var(--footer-height) - 11.5rem + 1.5rem);\n  background-color: var(--gauzy-card-2);\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%] {\n  border: unset;\n  flex: 0 1 auto;\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%], \n[_nghost-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-2);\n}\n[_nghost-%COMP%]     input, \n[_nghost-%COMP%]     nb-select.appearance-outline.status-basic .select-button, \n[_nghost-%COMP%]     .ng-select .ng-select-container {\n  background-color: var(--gauzy-card-1) !important;\n  border: none;\n  height: 42px !important;\n}\n[_nghost-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder, \n[_nghost-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {\n  top: unset !important;\n}\n[_nghost-%COMP%]     label, \n[_nghost-%COMP%]     .label {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  color: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]     textarea {\n  background-color: var(--gauzy-card-1) !important;\n  border: none;\n}\n[_nghost-%COMP%]     .ng-select .ng-select-container input, \n[_nghost-%COMP%]     nb-tag-list input {\n  background-color: unset !important;\n}"]
      });
    }
  };
  return ProposalRegisterComponent;
})();
ProposalRegisterComponent = ProposalRegisterComponent_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_26__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__/* .UntilDestroy */ .d)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_26__/* .__metadata */ .Sn)("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__/* .TranslateService */ .c$, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .UntypedFormBuilder */ .ze, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_12__/* .Store */ .il, _angular_router__WEBPACK_IMPORTED_MODULE_13__/* .Router */ .Ix, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbDateService */ .Att, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_15__/* .ProposalsService */ .p, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_16__/* .ToastrService */ .t, _angular_core__WEBPACK_IMPORTED_MODULE_10__/* .ChangeDetectorRef */ .gRc, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_17__/* .OrganizationSettingService */ .r, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_18__/* .ErrorHandlingService */ .X])], ProposalRegisterComponent);


/***/ }),

/***/ 24906:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   r: () => (/* binding */ ProposalTemplateSelectModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14572);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10936);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56383);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19223);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);






let ProposalTemplateSelectModule = /*#__PURE__*/(() => {
  class ProposalTemplateSelectModule {
    static {
      this.ɵfac = function ProposalTemplateSelectModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || ProposalTemplateSelectModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .$C({
        type: ProposalTemplateSelectModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .CommonModule */ .MD, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .FormsModule */ .YN, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbSelectModule */ .VcP, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__/* .TranslateModule */ .h.forChild()]
      });
    }
  }
  return ProposalTemplateSelectModule;
})();

/***/ }),

/***/ 28259:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   of: () => (/* binding */ of)
/* harmony export */ });
/* harmony import */ var _util_args__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59828);
/* harmony import */ var _from__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3522);


function of(...args) {
  const scheduler = (0,_util_args__WEBPACK_IMPORTED_MODULE_0__/* .popScheduler */ .lI)(args);
  return (0,_from__WEBPACK_IMPORTED_MODULE_1__/* .from */ .H)(args, scheduler);
}
//# sourceMappingURL=of.js.map

/***/ }),

/***/ 28826:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* binding */ ExpenseCategorySelectModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14572);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10936);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19223);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56383);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(55567);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);







let ExpenseCategorySelectModule = /*#__PURE__*/(() => {
  class ExpenseCategorySelectModule {
    static {
      this.ɵfac = function ExpenseCategorySelectModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || ExpenseCategorySelectModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .$C({
        type: ExpenseCategorySelectModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .CommonModule */ .MD, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbSelectModule */ .VcP, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .FormsModule */ .YN, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__/* .TranslateModule */ .h.forChild(), _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__/* .NgSelectModule */ .MQ]
      });
    }
  }
  return ExpenseCategorySelectModule;
})();

/***/ }),

/***/ 37666:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   s: () => (/* binding */ ProposalStatusEnum)
/* harmony export */ });
/**
 * Proposal Status Enum
 */
var ProposalStatusEnum = /*#__PURE__*/function (ProposalStatusEnum) {
  ProposalStatusEnum["SENT"] = "SENT";
  ProposalStatusEnum["ACCEPTED"] = "ACCEPTED";
  return ProposalStatusEnum;
}(ProposalStatusEnum || {});

/***/ }),

/***/ 37822:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   j9: () => (/* binding */ BaseChartDirective)
/* harmony export */ });
/* unused harmony exports NG_CHARTS_CONFIGURATION, ThemeService, provideCharts, withDefaultRegisterables */
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(75256);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(79756);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(17998);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87474);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(84140);






const NG_CHARTS_CONFIGURATION = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .InjectionToken */ .nKC('Configuration for ngCharts');
/**
 * Provide all the default registerable as defined by Chart.js
 */
function withDefaultRegisterables(...registerables$1) {
  return {
    registerables: [...registerables, ...registerables$1]
  };
}
/**
 * Provide configuration for ngCharts. In most cases, you have to pass it some registerables. So either
 * `withDefaultRegisterables()`, or a custom list of registerables tailored to your needs to reduce bundle size.
 */
function provideCharts(...configurations) {
  const config = merge({}, ...configurations);
  return {
    provide: NG_CHARTS_CONFIGURATION,
    useValue: config
  };
}
let ThemeService = /*#__PURE__*/(() => {
  class ThemeService {
    constructor() {
      this.colorschemesOptions = new rxjs__WEBPACK_IMPORTED_MODULE_1__/* .BehaviorSubject */ .t(undefined);
    }
    setColorschemesOptions(options) {
      this.pColorschemesOptions = options;
      this.colorschemesOptions.next(options);
    }
    getColorschemesOptions() {
      return this.pColorschemesOptions;
    }
    static {
      this.ɵfac = function ThemeService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || ThemeService)();
      };
    }
    static {
      this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjectable"] */ .jDH({
        token: ThemeService,
        factory: ThemeService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return ThemeService;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let BaseChartDirective = /*#__PURE__*/(() => {
  class BaseChartDirective {
    constructor(element, zone, themeService, config) {
      this.zone = zone;
      this.themeService = themeService;
      this.type = 'bar';
      this.plugins = [];
      this.chartClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .bkB();
      this.chartHover = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .bkB();
      this.subs = [];
      this.themeOverrides = {};
      if (config?.registerables) {
        chart_js__WEBPACK_IMPORTED_MODULE_2__/* .Chart */ .t1.register(...config.registerables);
      }
      if (config?.defaults) {
        chart_js__WEBPACK_IMPORTED_MODULE_3__.d.set(config.defaults);
      }
      this.ctx = element.nativeElement.getContext('2d');
      this.subs.push(this.themeService.colorschemesOptions.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .distinctUntilChanged */ .F)()).subscribe(r => this.themeChanged(r)));
    }
    ngOnChanges(changes) {
      const requireRender = ['type'];
      const propertyNames = Object.getOwnPropertyNames(changes);
      if (propertyNames.some(key => requireRender.includes(key)) || propertyNames.every(key => changes[key].isFirstChange())) {
        this.render();
      } else {
        const config = this.getChartConfiguration();
        // Using assign to avoid changing the original object reference
        if (this.chart) {
          Object.assign(this.chart.config.data, config.data);
          if (this.chart.config.plugins) {
            Object.assign(this.chart.config.plugins, config.plugins);
          }
          if (this.chart.config.options) {
            Object.assign(this.chart.config.options, config.options);
          }
        }
        this.update();
      }
    }
    ngOnDestroy() {
      if (this.chart) {
        this.chart.destroy();
        this.chart = void 0;
      }
      this.subs.forEach(s => s.unsubscribe());
    }
    render() {
      if (this.chart) {
        this.chart.destroy();
      }
      return this.zone.runOutsideAngular(() => this.chart = new chart_js__WEBPACK_IMPORTED_MODULE_2__/* .Chart */ .t1(this.ctx, this.getChartConfiguration()));
    }
    update(mode) {
      if (this.chart) {
        this.zone.runOutsideAngular(() => this.chart?.update(mode));
      }
    }
    hideDataset(index, hidden) {
      if (this.chart) {
        this.chart.getDatasetMeta(index).hidden = hidden;
        this.update();
      }
    }
    isDatasetHidden(index) {
      return this.chart?.getDatasetMeta(index)?.hidden;
    }
    toBase64Image() {
      return this.chart?.toBase64Image();
    }
    themeChanged(options) {
      this.themeOverrides = options;
      if (this.chart) {
        if (this.chart.config.options) {
          Object.assign(this.chart.config.options, this.getChartOptions());
        }
        this.update();
      }
    }
    getChartOptions() {
      return (0,lodash_es__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)({
        onHover: (event, active) => {
          if (!this.chartHover.observed && !this.chartHover.observers?.length) {
            return;
          }
          this.zone.run(() => this.chartHover.emit({
            event,
            active
          }));
        },
        onClick: (event, active) => {
          if (!this.chartClick.observed && !this.chartClick.observers?.length) {
            return;
          }
          this.zone.run(() => this.chartClick.emit({
            event,
            active
          }));
        }
      }, this.themeOverrides, this.options, {
        plugins: {
          legend: {
            display: this.legend
          }
        }
      });
    }
    getChartConfiguration() {
      return {
        type: this.type,
        data: this.getChartData(),
        options: this.getChartOptions(),
        plugins: this.plugins
      };
    }
    getChartData() {
      return this.data ? this.data : {
        labels: this.labels || [],
        datasets: this.datasets || []
      };
    }
    static {
      this.ɵfac = function BaseChartDirective_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || BaseChartDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* .ElementRef */ .aKT), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* .NgZone */ .SKi), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(ThemeService), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(NG_CHARTS_CONFIGURATION, 8));
      };
    }
    static {
      this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineDirective"] */ .FsC({
        type: BaseChartDirective,
        selectors: [["canvas", "baseChart", ""]],
        inputs: {
          type: "type",
          legend: "legend",
          data: "data",
          options: "options",
          plugins: "plugins",
          labels: "labels",
          datasets: "datasets"
        },
        outputs: {
          chartClick: "chartClick",
          chartHover: "chartHover"
        },
        exportAs: ["base-chart"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵNgOnChangesFeature"] */ .OA$]
      });
    }
  }
  return BaseChartDirective;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/*
 * Public API Surface of ng2-charts
 */

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=ng2-charts.mjs.map

/***/ }),

/***/ 39756:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K: () => (/* binding */ JobProposalModule)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(73014);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(45715);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(9620);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(908);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56383);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(55567);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19223);
/* harmony import */ var ckeditor4_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76682);
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(79475);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(17785);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4106);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(6828);
/* harmony import */ var _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(99209);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8539);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(20433);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(38834);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(61444);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(57832);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(82202);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(80784);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(24906);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(98722);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(11336);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(68000);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(98048);
/* harmony import */ var _job_proposal_routes__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(9366);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(23921);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(90349);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(93141);
/* harmony import */ var _components_proposal_proposal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(45227);
/* harmony import */ var _resolvers_proposal_details_resolver__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(78537);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(26860);





























/**
 * Redirects to the dashboard page
 *
 * @returns
 */
function redirectTo() {
  return '/pages/dashboard';
}
/**
 * NB Modules
 */
const NB_MODULES = [_nebular_theme__WEBPACK_IMPORTED_MODULE_0__/* .NbBadgeModule */ .iEK, _nebular_theme__WEBPACK_IMPORTED_MODULE_0__/* .NbButtonModule */ .P5N, _nebular_theme__WEBPACK_IMPORTED_MODULE_0__/* .NbCardModule */ .lVF, _nebular_theme__WEBPACK_IMPORTED_MODULE_0__/* .NbDatepickerModule */ .TgK, _nebular_theme__WEBPACK_IMPORTED_MODULE_0__/* .NbDialogModule */ .nZv, _nebular_theme__WEBPACK_IMPORTED_MODULE_0__/* .NbIconModule */ .clu, _nebular_theme__WEBPACK_IMPORTED_MODULE_0__/* .NbInputModule */ .pty, _nebular_theme__WEBPACK_IMPORTED_MODULE_0__/* .NbSpinnerModule */ .gYs, _nebular_theme__WEBPACK_IMPORTED_MODULE_0__/* .NbTooltipModule */ .IB0];
/**
 * Third Party Modules
 */
const THIRD_PARTY_MODULES = [ckeditor4_angular__WEBPACK_IMPORTED_MODULE_1__/* .CKEditorModule */ .w, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_2__/* .NgSelectModule */ .MQ, ngx_permissions__WEBPACK_IMPORTED_MODULE_3__/* .NgxPermissionsModule */ .Ov.forRoot(), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__/* .TranslateModule */ .h.forRoot({
  defaultLanguage: (0,_gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_5__/* .getBrowserLanguage */ .x)(),
  // Get the browser language and fall back to a default if needed
  loader: {
    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__/* .TranslateLoader */ .Wr,
    useFactory: _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_6__/* .HttpLoaderFactory */ .M,
    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__/* .HttpClient */ .Qq]
  }
})];
let JobProposalModule = /*#__PURE__*/(() => {
  class JobProposalModule {
    static {
      this.hasRegisteredPageRoutes = false;
    } // Flag to check if routes have been registered
    constructor(_pageRouteRegistryService) {
      this._pageRouteRegistryService = _pageRouteRegistryService;
      // Register the routes
      this.registerPageRoutes();
    }
    /**
     * Registers routes for the Jobs proposal template module.
     * Ensures that routes are registered only once.
     *
     * @returns {void}
     */
    registerPageRoutes() {
      var _this = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A)(function* () {
        if (JobProposalModule.hasRegisteredPageRoutes) {
          return;
        }
        // Register Job Proposal Page Routes
        _this._pageRouteRegistryService.registerPageRoute({
          // Register the location 'jobs'
          location: 'proposals',
          // Register the path 'proposal-template'
          path: '',
          // Register the component
          component: _components_proposal_proposal_component__WEBPACK_IMPORTED_MODULE_9__/* .ProposalComponent */ .S,
          // Register the canActivate guard
          canActivate: [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_10__/* .PermissionsGuard */ .a],
          // Register the data object
          data: {
            selectors: {
              project: false,
              team: false
            },
            datePicker: {
              unitOfTime: 'month'
            }
          },
          resolve: {
            dates: _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_11__/* .DateRangePickerResolver */ .Q
          }
        });
        // Register Job Proposal Register Page Routes
        _this._pageRouteRegistryService.registerPageRoute({
          // Register the location 'jobs'
          location: 'proposals',
          // Register the path 'proposal-template'
          path: 'register',
          // Register the component
          component: _components__WEBPACK_IMPORTED_MODULE_12__/* .ProposalRegisterComponent */ .n,
          // Register the canActivate guard
          canActivate: [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_10__/* .PermissionsGuard */ .a],
          // Register the data object
          data: {
            permissions: {
              only: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_13__/* .PermissionsEnum */ .U.ORG_PROPOSALS_EDIT],
              redirectTo
            },
            selectors: {
              employee: false,
              project: false,
              team: false
            },
            datePicker: {
              unitOfTime: 'month'
            }
          },
          resolve: {
            dates: _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_11__/* .DateRangePickerResolver */ .Q
          }
        });
        // Register Job Proposal Details Page Routes
        _this._pageRouteRegistryService.registerPageRoute({
          // Register the location 'jobs'
          location: 'proposals',
          // Register the path 'proposal-template'
          path: 'details/:id',
          // Register the component
          component: _components__WEBPACK_IMPORTED_MODULE_14__/* .ProposalDetailsComponent */ .S,
          // Register the canActivate guard
          canActivate: [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_10__/* .PermissionsGuard */ .a],
          // Register the data object
          data: {
            permissions: {
              only: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_13__/* .PermissionsEnum */ .U.ORG_PROPOSALS_VIEW],
              redirectTo
            },
            selectors: false
          },
          resolve: {
            proposal: _resolvers_proposal_details_resolver__WEBPACK_IMPORTED_MODULE_15__/* .ProposalDetailsResolver */ .T
          }
        });
        // Register Job Proposal Edit Page Routes
        _this._pageRouteRegistryService.registerPageRoute({
          // Register the location 'jobs'
          location: 'proposals',
          // Register the path 'proposal-template'
          path: 'edit/:id',
          // Register the component
          component: _components__WEBPACK_IMPORTED_MODULE_16__/* .ProposalEditComponent */ .A,
          // Register the canActivate guard
          canActivate: [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_10__/* .PermissionsGuard */ .a],
          // Register the data object
          data: {
            permissions: {
              only: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_13__/* .PermissionsEnum */ .U.ORG_PROPOSALS_EDIT],
              redirectTo
            },
            selectors: false
          },
          resolve: {
            proposal: _resolvers_proposal_details_resolver__WEBPACK_IMPORTED_MODULE_15__/* .ProposalDetailsResolver */ .T
          }
        });
        // Set hasRegisteredRoutes to true
        JobProposalModule.hasRegisteredPageRoutes = true;
      })();
    }
    static {
      this.ɵfac = function JobProposalModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || JobProposalModule)(_angular_core__WEBPACK_IMPORTED_MODULE_17__/* ["ɵɵinject"] */ .KVO(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_18__/* .PageRouteRegistryService */ .L));
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_17__/* ["ɵɵdefineNgModule"] */ .$C({
        type: JobProposalModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_17__/* ["ɵɵdefineInjector"] */ .G2t({
        providers: [{
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_19__/* .ROUTES */ .bw,
          useFactory: service => (0,_job_proposal_routes__WEBPACK_IMPORTED_MODULE_20__/* .createProposalsRoutes */ .G)(service),
          deps: [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_18__/* .PageRouteRegistryService */ .L],
          multi: true
        }],
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_21__/* .RouterModule */ .iI.forChild([]), NB_MODULES, THIRD_PARTY_MODULES, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_22__/* .SharedModule */ .G, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_23__/* .TagsColorInputModule */ .x, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_24__/* .TableComponentsModule */ .p, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_25__/* .UserFormsModule */ .D, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_26__/* .CardGridModule */ .n, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_27__/* .ProposalTemplateSelectModule */ .r, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_28__/* .SmartDataViewLayoutModule */ .H, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_29__/* .ContactSelectModule */ .T, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_30__/* .TableFiltersModule */ .K, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_31__/* .SelectorsModule */ .b, _angular_router__WEBPACK_IMPORTED_MODULE_21__/* .RouterModule */ .iI]
      });
    }
  }
  return JobProposalModule;
})();

/***/ }),

/***/ 40159:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ ProposalPieChartComponent)
/* harmony export */ });
/* harmony import */ var _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38546);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26860);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56383);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19223);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(37822);







let ProposalPieChartComponent = /*#__PURE__*/(() => {
  class ProposalPieChartComponent extends _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_0__/* .TranslationBaseComponent */ .K {
    constructor(nbThemeService, translateService) {
      super(translateService);
      this.nbThemeService = nbThemeService;
      this.options = {};
    }
    ngAfterViewInit() {
      this.subscription = this.nbThemeService.getJsTheme().subscribe(config => {
        const {
          warningLight,
          infoLight,
          dangerLight,
          successLight,
          primaryLight,
          echarts
        } = config.variables;
        // Set the chart options
        this.options = this.getChartOptions(warningLight, infoLight, dangerLight, successLight, primaryLight, echarts);
      });
    }
    /**
     * Returns the chart options based on the provided theme variables.
     *
     * @param warningLight
     * @param infoLight
     * @param dangerLight
     * @param successLight
     * @param primaryLight
     * @param echarts
     * @returns
     */
    getChartOptions(warningLight, infoLight, dangerLight, successLight, primaryLight, echarts) {
      return {
        backgroundColor: echarts.bg,
        color: [warningLight, infoLight, dangerLight, successLight, primaryLight],
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: [this.getTranslation('PROPOSALS_PAGE.ACCEPTED_PROPOSALS'), this.getTranslation('PROPOSALS_PAGE.TOTAL_PROPOSALS')],
          textStyle: {
            color: echarts.textColor
          }
        },
        series: [{
          name: this.getTranslation('PROPOSALS_PAGE.PROPOSALS'),
          type: 'pie',
          radius: '80%',
          center: ['50%', '50%'],
          data: this.values,
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: echarts.itemHoverShadowColor
            }
          },
          label: {
            normal: {
              textStyle: {
                color: echarts.textColor
              }
            }
          },
          labelLine: {
            normal: {
              lineStyle: {
                color: echarts.axisLineColor
              }
            }
          }
        }]
      };
    }
    ngOnDestroy() {
      this.subscription?.unsubscribe();
    }
    static {
      this.ɵfac = function ProposalPieChartComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || ProposalPieChartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbThemeService */ .NS1), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__/* .TranslateService */ .c$));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineComponent"] */ .VBU({
        type: ProposalPieChartComponent,
        selectors: [["ngx-proposal-pie-chart"]],
        inputs: {
          values: "values"
        },
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
        decls: 1,
        vars: 1,
        consts: [["baseChart", "", 1, "echart", 3, "options"]],
        template: function ProposalPieChartComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(0, "canvas", 0);
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("options", ctx.options);
          }
        },
        dependencies: [ng2_charts__WEBPACK_IMPORTED_MODULE_4__/* .BaseChartDirective */ .j9],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   ngx-echarts-pie[_ngcontent-%COMP%], \n[_nghost-%COMP%]   ngx-echarts-bar[_ngcontent-%COMP%], \n[_nghost-%COMP%]   ngx-echarts-line[_ngcontent-%COMP%], \n[_nghost-%COMP%]   ngx-echarts-multiple-xaxis[_ngcontent-%COMP%], \n[_nghost-%COMP%]   ngx-echarts-area-stack[_ngcontent-%COMP%], \n[_nghost-%COMP%]   ngx-echarts-bar-animation[_ngcontent-%COMP%], \n[_nghost-%COMP%]   ngx-echarts-radar[_ngcontent-%COMP%] {\n  display: block;\n  height: var(--card-height-medium);\n  width: 100%;\n}\n[_nghost-%COMP%]     .echart {\n  height: 100%;\n  width: 100%;\n}"]
      });
    }
  }
  return ProposalPieChartComponent;
})();

/***/ }),

/***/ 44161:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   s: () => (/* binding */ ProposalStatusComponent)
/* harmony export */ });
/* harmony import */ var _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38546);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19223);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14572);





function ProposalStatusComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 2)(1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(3, 1, "BUTTONS.SENT"), " ");
  }
}
function ProposalStatusComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 2)(1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(3, 1, "BUTTONS.ACCEPTED"), " ");
  }
}
let ProposalStatusComponent = /*#__PURE__*/(() => {
  class ProposalStatusComponent extends _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_1__/* .TranslationBaseComponent */ .K {
    constructor(translateService) {
      super(translateService);
    }
    static {
      this.ɵfac = function ProposalStatusComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || ProposalStatusComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__/* .TranslateService */ .c$));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: ProposalStatusComponent,
        selectors: [["ga-proposal-status"]],
        inputs: {
          rowData: "rowData",
          value: "value"
        },
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
        decls: 3,
        vars: 2,
        consts: [["accepted", ""], ["class", "text-center d-block", 4, "ngIf", "ngIfElse"], [1, "text-center", "d-block"], [1, "badge-warning"], [1, "badge-success"]],
        template: function ProposalStatusComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(0, ProposalStatusComponent_div_0_Template, 4, 3, "div", 1)(1, ProposalStatusComponent_ng_template_1_Template, 4, 3, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplateRefExtractor"] */ .C5r);
          }
          if (rf & 2) {
            const accepted_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.rowData.status == "SENT")("ngIfElse", accepted_r1);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__/* .NgIf */ .bT, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__/* .TranslatePipe */ .D9],
        styles: ["div[_ngcontent-%COMP%] {\n  border-radius: 1rem;\n  align-content: center;\n  display: flex;\n  justify-content: center;\n}\n\n.badge-warning[_ngcontent-%COMP%] {\n  text-align: center;\n  color: white;\n  padding: 5px 30px;\n  margin-bottom: 5px;\n}\n\n.badge-success[_ngcontent-%COMP%] {\n  text-align: center;\n  color: white;\n  padding: 5px 30px;\n  margin-bottom: 5px;\n}"]
      });
    }
  }
  return ProposalStatusComponent;
})();

/***/ }),

/***/ 45227:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ ProposalComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(73014);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(4637);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(9620);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(45715);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(24728);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4582);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(42898);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(30920);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(12990);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(56383);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(19223);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(47594);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(81236);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(37666);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(17785);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(35665);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(71924);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(28822);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(76527);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(15480);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(54263);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(46076);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(26024);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(64913);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47108);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(55101);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(18857);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(47825);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(33829);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(21968);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(6313);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(55129);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(68240);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(91439);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(90475);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(91045);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(87791);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(15130);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(908);
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(79475);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(14572);
/* harmony import */ var _ui_core_shared_src_lib_components_header_title_header_title_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(49072);
/* harmony import */ var _ui_core_shared_src_lib_directives_under_construction_directive__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(67063);
/* harmony import */ var _ui_core_shared_src_lib_card_grid_card_grid_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(49517);
/* harmony import */ var angular2_smart_table__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(52345);
/* harmony import */ var _ui_core_shared_src_lib_gauzy_button_action_gauzy_button_action_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(45293);
/* harmony import */ var _ui_core_shared_src_lib_smart_data_layout_pagination_pagination_v2_pagination_v2_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(3456);



























const _c0 = () => ["/pages/jobs/proposal-template"];
const _c1 = (a0, a1) => ({
  item: a0,
  buttonSize: a1
});
const _c2 = () => ["/pages/sales/proposals/register"];
function ProposalComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "nb-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(4, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction0"] */ .lJ4(6, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(4, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(3, 2, "BUTTONS.MANAGE_TEMPLATES")), " ");
  }
}
function ProposalComponent_ng_template_12_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "ngx-pagination", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("source", ctx_r1.smartTableSource);
  }
}
function ProposalComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 16)(1, "angular2-smart-table", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("userRowSelect", function ProposalComponent_ng_template_12_Template_angular2_smart_table_userRowSelect_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.selectProposal($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(3, ProposalComponent_ng_template_12_ng_container_3_Template, 2, 1, "ng-container", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("settings", ctx_r1.smartTableSettings)("source", ctx_r1.smartTableSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r1.smartTableSource);
  }
}
function ProposalComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "ga-card-grid", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("onSelectedItem", function ProposalComponent_ng_template_13_Template_ga_card_grid_onSelectedItem_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.selectProposal($event));
    })("scroll", function ProposalComponent_ng_template_13_Template_ga_card_grid_scroll_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.onScroll());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("totalItems", ctx_r1.pagination == null ? null : ctx_r1.pagination.totalItems)("settings", ctx_r1.smartTableSettings)("source", ctx_r1.proposals);
  }
}
function ProposalComponent_ng_template_15_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "nb-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(4, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function ProposalComponent_ng_template_15_ng_template_1_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r4);
      const selectedItem_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG().selectedItem;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.details(selectedItem_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(5, "nb-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainer"] */ .eu8(8, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(9, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function ProposalComponent_ng_template_15_ng_template_1_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.edit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(10, "nb-icon", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(13, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function ProposalComponent_ng_template_15_ng_template_1_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r4);
      const selectedItem_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG().selectedItem;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.delete(selectedItem_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(15, "nb-icon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    const buttonSize_r7 = ctx_r5.buttonSize;
    const selectedItem_r5 = ctx_r5.selectedItem;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    const statusButtonTemplate_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("disabled", ctx_r1.disableButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(3, 10, "BUTTONS.VIEW"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("disabled", ctx_r1.disableButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(7, 12, "BUTTONS.DETAILS"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngTemplateOutlet", statusButtonTemplate_r8)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction2"] */ .l_i(18, _c1, ctx_r1.selectedProposal || selectedItem_r5, buttonSize_r7));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("disabled", ctx_r1.disableButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(12, 14, "BUTTONS.EDIT"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(14, 16, "BUTTONS.DELETE"))("disabled", ctx_r1.disableButton);
  }
}
function ProposalComponent_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, ProposalComponent_ng_template_15_ng_template_1_Template, 16, 21, "ng-template", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
}
function ProposalComponent_ng_template_17_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(1, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function ProposalComponent_ng_template_17_ng_container_0_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r9);
      const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG().item;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj((item_r10 == null ? null : item_r10.status) === ctx_r1.proposalStatusEnum.SENT ? ctx_r1.switchToAccepted(item_r10) : ctx_r1.switchToSent(item_r10));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(2, "nb-icon", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG().item;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("disabled", !item_r10 || ctx_r1.disableButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(5, 2, (item_r10 == null ? null : item_r10.status) === ctx_r1.proposalStatusEnum.ACCEPTED ? "BUTTONS.MARK_AS_SENT" : "BUTTONS.MARK_AS_ACCEPTED"), " ");
  }
}
function ProposalComponent_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(0, ProposalComponent_ng_template_17_ng_container_0_Template, 6, 4, "ng-container", 19);
  }
  if (rf & 2) {
    const item_r10 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", item_r10 == null ? null : item_r10.status);
  }
}
function ProposalComponent_ng_template_19_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "nb-icon", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction0"] */ .lJ4(4, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(3, 2, "BUTTONS.ADD"), " ");
  }
}
function ProposalComponent_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(0, ProposalComponent_ng_template_19_ng_template_0_Template, 4, 5, "ng-template", 8);
  }
}
function ProposalComponent_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 36)(1, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(4, "div", 37)(5, "div")(6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(11, "div")(12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(17, "div")(18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(20, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(21, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(3, 7, "PROPOSALS_PAGE.STATISTICS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI("", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(8, 9, "PROPOSALS_PAGE.ACCEPTED_PROPOSALS"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(ctx_r1.countAccepted);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI("", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(14, 11, "PROPOSALS_PAGE.TOTAL_PROPOSALS"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(ctx_r1.totalProposals);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI("", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(20, 13, "PROPOSALS_PAGE.SUCCESS_RATE"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(ctx_r1.successRate);
  }
}
let ProposalComponent = /*#__PURE__*/(() => {
  let ProposalComponent = class ProposalComponent extends _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_1__/* .PaginationFilterBaseComponent */ .t {
    constructor(translateService, _store, _dateRangePickerBuilderService, _router, _proposalsService, _toastrService, _dialogService, _errorHandlingService, _httpClient) {
      super(translateService);
      this.translateService = translateService;
      this._store = _store;
      this._dateRangePickerBuilderService = _dateRangePickerBuilderService;
      this._router = _router;
      this._proposalsService = _proposalsService;
      this._toastrService = _toastrService;
      this._dialogService = _dialogService;
      this._errorHandlingService = _errorHandlingService;
      this._httpClient = _httpClient;
      this.proposals = [];
      this.dataLayoutStyle = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__/* .ComponentLayoutStyleEnum */ .IE.TABLE;
      this.componentLayoutStyleEnum = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__/* .ComponentLayoutStyleEnum */ .IE;
      this.viewComponentName = _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_3__/* .ComponentEnum */ .L.PROPOSALS;
      this.proposalStatusEnum = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_4__/* .ProposalStatusEnum */ .s;
      this.countAccepted = 0;
      this.loading = false;
      this.disableButton = true;
      this.proposals$ = this.subject$;
      this._refresh$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__/* .Subject */ .B();
      /**
       * Maps a proposal status to a text label and a corresponding badge class.
       * @param cell - The proposal status.
       * @returns {object} - An object containing the text label and badge class.
       */
      this.statusMapper = cell => {
        let badgeClass;
        let statusText;
        if (cell === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_4__/* .ProposalStatusEnum */ .s.SENT) {
          badgeClass = 'warning';
          statusText = this.getTranslation('BUTTONS.SENT');
        } else {
          badgeClass = 'success';
          statusText = this.getTranslation('BUTTONS.ACCEPTED');
        }
        return {
          text: statusText,
          class: badgeClass
        };
      };
      /**
       * Maps properties of an IProposal object to a new object with a modified structure.
       *
       * @param item - The IProposal object to be mapped.
       * @returns {object} - The mapped object.
       */
      this.proposalMapper = item => ({
        id: item.id,
        valueDate: item.valueDate,
        jobPostUrl: item.jobPostUrl,
        jobTitle: item.jobPostContent.toString().replace(/<[^>]*(>|$)|&nbsp;/g, '').split(/[\s,\n]+/).slice(0, 3).join(' '),
        jobPostContent: item.jobPostContent,
        proposalContent: item.proposalContent,
        tags: item.tags,
        status: item.status,
        statusBadge: this.statusMapper(item.status),
        author: item.employee,
        organizationContact: item.organizationContact ? item.organizationContact : null
      });
      this.setView();
    }
    ngOnInit() {
      this._loadSmartTableSettings();
      this._applyTranslationOnSmartTable();
      // Subscribe to changes in the proposals$ observable stream
      this.proposals$.pipe(
      // Wait for 100 milliseconds to debounce rapid changes
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .debounceTime */ .B)(100),
      // Clear the selected item
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .M)(() => this.clearItem()),
      // Retrieve and update the proposals
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .M)(() => this.getProposals()),
      // Unsubscribe when the component is destroyed
      (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__/* .untilDestroyed */ .s)(this)).subscribe();
      // Subscribe to changes in the pagination$ observable stream
      this.pagination$.pipe(
      // Wait for 100 milliseconds to debounce rapid changes
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .debounceTime */ .B)(100),
      // Only react when the pagination value changes
      (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_9__/* .distinctUntilChange */ .nI)(),
      // Trigger a refresh of proposals
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .M)(() => this.proposals$.next(true)),
      // Unsubscribe when the component is destroyed
      (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__/* .untilDestroyed */ .s)(this)).subscribe();
      // Combine observable streams to react to changes in organization, date range, and employee
      const storeOrganization$ = this._store.selectedOrganization$;
      const storeDateRange$ = this._dateRangePickerBuilderService.selectedDateRange$;
      const storeEmployee$ = this._store.selectedEmployee$;
      (0,rxjs__WEBPACK_IMPORTED_MODULE_10__/* .combineLatest */ .z)([storeOrganization$, storeDateRange$, storeEmployee$]).pipe(
      // Wait for 500 milliseconds to debounce rapid changes
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .debounceTime */ .B)(500),
      // Only react when both organization and date range are available
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__/* .filter */ .p)(([organization, dateRange]) => !!organization && !!dateRange),
      // Only react when there's a change in the combined values
      (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_9__/* .distinctUntilChange */ .nI)(),
      // Update component properties based on the latest values
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .M)(([organization, dateRange, employee]) => {
        this.organization = organization;
        this.selectedDateRange = dateRange;
        this.selectedEmployeeId = employee ? employee.id : null;
      }),
      // Trigger refresh actions
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .M)(() => this._refresh$.next(true)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .M)(() => this.proposals$.next(true)),
      // Unsubscribe when the component is destroyed
      (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__/* .untilDestroyed */ .s)(this)).subscribe();
      // Subscribe to changes in the _refresh$ observable stream
      this._refresh$.pipe(
      // Only react when the data layout style is CARDS_GRID
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__/* .filter */ .p)(() => this.dataLayoutStyle === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__/* .ComponentLayoutStyleEnum */ .IE.CARDS_GRID),
      // Trigger a refresh of pagination
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .M)(() => this.refreshPagination()),
      // Reset the proposals array
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .M)(() => this.proposals = []),
      // Unsubscribe when the component is destroyed
      (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__/* .untilDestroyed */ .s)(this)).subscribe();
    }
    ngAfterViewInit() {
      // Check if a user exists in the store and the user lacks a specific permission
      if (this._store.user && !this._store.hasPermission(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_12__/* .PermissionsEnum */ .U.CHANGE_SELECTED_EMPLOYEE)) {
        // Delete the 'author' column from the smartTableSettings.columns object
        delete this.smartTableSettings['columns']['author'];
        // Clone the smartTableSettings object to trigger change detection
        this.smartTableSettings = Object.assign({}, this.smartTableSettings);
      }
    }
    /**
     * Sets the view based on the component layout.
     */
    setView() {
      this._store.componentLayout$(this.viewComponentName).pipe((0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_9__/* .distinctUntilChange */ .nI)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .M)(componentLayout => this.dataLayoutStyle = componentLayout), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .M)(() => this.refreshPagination()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__/* .filter */ .p)(componentLayout => componentLayout === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__/* .ComponentLayoutStyleEnum */ .IE.CARDS_GRID),
      // If the layout style is CARDS_GRID, reset the proposals array
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .M)(() => this.proposals = []),
      // Trigger a refresh of proposals
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .M)(() => this.proposals$.next(true)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__/* .untilDestroyed */ .s)(this)).subscribe();
    }
    /**
     * Navigates to the edit page of a proposal.
     * @param selectedItem - The proposal item for which edit page is to be displayed.
     */
    edit(selectedItem) {
      // If a proposal item is selected, mark it as selected
      if (selectedItem) {
        this.selectProposal({
          isSelected: true,
          data: selectedItem
        });
      }
      // If a proposal is selected, navigate to its edit page
      if (this.selectedProposal) {
        this._router.navigate([`/pages/sales/proposals/edit`, this.selectedProposal.id]);
      }
    }
    /**
     * Navigates to the details page of a proposal.
     * @param selectedItem - The proposal item for which details are to be displayed.
     */
    details(selectedItem) {
      // If a proposal item is selected, mark it as selected
      if (selectedItem) {
        this.selectProposal({
          isSelected: true,
          data: selectedItem
        });
      }
      // If a proposal is selected, navigate to its details page
      if (this.selectedProposal) {
        this._router.navigate([`/pages/sales/proposals/details`, this.selectedProposal.id]);
      }
    }
    /**
     * Deletes a proposal after user confirmation.
     * @param selectedItem - The proposal item to be deleted.
     */
    delete(selectedItem) {
      var _this = this;
      // If a proposal item is selected, mark it as selected
      if (selectedItem) {
        this.selectProposal({
          isSelected: true,
          data: selectedItem
        });
      }
      // Open the dialog for user confirmation
      const dialogRef = this._dialogService.open(_gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_13__/* .DeleteConfirmationComponent */ .u, {
        context: {
          recordType: 'Proposal'
        }
      });
      // Wait for the dialog to close and get the result
      dialogRef.onClose.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__/* .untilDestroyed */ .s)(this)).subscribe(/*#__PURE__*/function () {
        var _ref = (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A)(function* (dialogResult) {
          try {
            // If there is a result and a proposal is selected
            if (dialogResult) {
              if (!_this.selectedProposal) {
                return;
              }
              const {
                id: proposalId
              } = _this.selectedProposal;
              // Delete the proposal
              yield _this._proposalsService.delete(proposalId);
              // Display a success message
              _this._toastrService.success('NOTES.PROPOSALS.DELETE_PROPOSAL');
            }
          } catch (error) {
            // Handle errors during the process
            _this._errorHandlingService.handleError(error);
          } finally {
            // Trigger refresh actions
            _this._refresh$.next(true);
            _this.proposals$.next(true);
          }
        });
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    }
    /**
     * Switches the status of a proposal to "ACCEPTED" after user confirmation.
     * @param selectedItem - The proposal item to be switched.
     */
    switchToAccepted(selectedItem) {
      var _this2 = this;
      // If a proposal item is selected, mark it as selected
      if (selectedItem) {
        this.selectProposal({
          isSelected: true,
          data: selectedItem
        });
      }
      // Open the dialog for user confirmation
      const dialogRef = this._dialogService.open(_gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_15__/* .ActionConfirmationComponent */ .x, {
        context: {
          recordType: 'status'
        }
      });
      // Wait for the dialog to close and get the result
      dialogRef.onClose.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__/* .untilDestroyed */ .s)(this)).subscribe(/*#__PURE__*/function () {
        var _ref2 = (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A)(function* (dialogResult) {
          try {
            // If there is a result and a proposal is selected
            if (dialogResult) {
              if (!_this2.selectedProposal) {
                return;
              }
              const {
                id: organizationId,
                tenantId
              } = _this2.organization;
              const {
                id: proposalId
              } = _this2.selectedProposal;
              // Update the proposal status to "ACCEPTED"
              yield _this2._proposalsService.update(proposalId, {
                status: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_4__/* .ProposalStatusEnum */ .s.ACCEPTED,
                organizationId,
                tenantId
              });
              // TODO: Translate the success message
              _this2._toastrService.success('NOTES.PROPOSALS.PROPOSAL_ACCEPTED');
            }
          } catch (error) {
            // Handle errors during the process
            _this2._errorHandlingService.handleError(error);
          } finally {
            // Trigger refresh actions
            _this2._refresh$.next(true);
            _this2.proposals$.next(true);
          }
        });
        return function (_x2) {
          return _ref2.apply(this, arguments);
        };
      }());
    }
    /**
     * Switches the status of a proposal to "SENT" after user confirmation.
     * @param selectedItem - The proposal item to be switched.
     */
    switchToSent(selectedItem) {
      var _this3 = this;
      // If a proposal item is selected, mark it as selected
      if (selectedItem) {
        this.selectProposal({
          isSelected: true,
          data: selectedItem
        });
      }
      // Open the dialog for user confirmation
      const dialogRef = this._dialogService.open(_gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_15__/* .ActionConfirmationComponent */ .x, {
        context: {
          recordType: 'status'
        }
      });
      // Wait for the dialog to close and get the result
      dialogRef.onClose.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__/* .untilDestroyed */ .s)(this)).subscribe(/*#__PURE__*/function () {
        var _ref3 = (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A)(function* (dialogResult) {
          try {
            // If there is a result, proceed with creating a new income
            if (dialogResult) {
              if (!_this3.selectedProposal) {
                return;
              }
              const {
                id: organizationId,
                tenantId
              } = _this3.organization;
              const {
                id: proposalId
              } = _this3.selectedProposal;
              // Update the proposal status to "SENT"
              yield _this3._proposalsService.update(proposalId, {
                status: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_4__/* .ProposalStatusEnum */ .s.SENT,
                organizationId,
                tenantId
              });
              _this3._toastrService.success('NOTES.PROPOSALS.PROPOSAL_SENT');
            }
          } catch (error) {
            // Handle errors during the process
            _this3._errorHandlingService.handleError(error);
          } finally {
            _this3._refresh$.next(true);
            _this3.proposals$.next(true);
          }
        });
        return function (_x3) {
          return _ref3.apply(this, arguments);
        };
      }());
    }
    /**
     * Load Smart Table settings to configure the component.
     */
    _loadSmartTableSettings() {
      const pagination = this.getPagination();
      this.smartTableSettings = {
        actions: false,
        editable: true,
        selectedRowIndex: -1,
        pager: {
          display: false,
          perPage: pagination ? pagination.itemsPerPage : 10
        },
        noDataMessage: this.getTranslation('SM_TABLE.NO_DATA.PROPOSAL'),
        columns: {
          valueDate: {
            title: this.getTranslation('SM_TABLE.DATE'),
            type: 'custom',
            width: '10%',
            isFilterable: false,
            sortDirection: 'desc',
            renderComponent: _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_16__/* .DateViewComponent */ .l,
            componentInitFunction: (instance, cell) => {
              instance.rowData = cell.getRow().getData();
              instance.value = cell.getValue();
            }
          },
          jobTitle: {
            title: this.getTranslation('SM_TABLE.JOB_TITLE'),
            type: this.dataLayoutStyle === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__/* .ComponentLayoutStyleEnum */ .IE.TABLE ? 'custom' : 'string',
            width: '25%',
            renderComponent: this.dataLayoutStyle === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__/* .ComponentLayoutStyleEnum */ .IE.TABLE ? _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_17__/* .NotesWithTagsComponent */ .i : null,
            componentInitFunction: (instance, cell) => {
              instance.rowData = cell.getRow().getData();
              instance.value = cell.getValue();
            },
            filter: {
              type: 'custom',
              component: _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_18__/* .InputFilterComponent */ .U
            },
            filterFunction: value => {
              this.setFilter({
                field: 'jobPostContent',
                search: value
              });
            }
          },
          jobPostUrl: {
            title: this.getTranslation('SM_TABLE.JOB_POST_URL'),
            type: 'custom',
            // Set column type to 'custom'
            width: '25%',
            isFilterable: false,
            renderComponent: _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_19__/* .ClickableLinkComponent */ .E,
            componentInitFunction: (instance, cell) => {
              instance.rowData = cell.getRow().getData();
              instance.value = cell.getValue();
              instance.href = 'jobPostUrl';
            }
          },
          organizationContact: {
            title: this.getTranslation('SM_TABLE.CONTACT_NAME'),
            type: 'custom',
            width: '20%',
            renderComponent: _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_20__/* .ContactLinksComponent */ .L,
            componentInitFunction: (instance, cell) => {
              instance.rowData = cell.getRow().getData();
              instance.value = cell.getRawValue();
            },
            filter: {
              type: 'custom',
              component: _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_21__/* .OrganizationContactFilterComponent */ .h
            },
            filterFunction: value => {
              this.setFilter({
                field: 'organizationContactId',
                search: value?.id || null
              });
            }
          },
          author: {
            title: this.getTranslation('SM_TABLE.AUTHOR'),
            type: 'custom',
            width: '20%',
            isFilterable: false,
            renderComponent: _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_22__/* .EmployeeLinksComponent */ .z,
            valuePrepareFunction: value => ({
              id: value?.id,
              name: value?.user?.name,
              fullName: value?.fullName,
              imageUrl: value?.user?.imageUrl
            }),
            componentInitFunction: (instance, cell) => {
              instance.value = cell.getValue();
            }
          },
          statusBadge: {
            title: this.getTranslation('SM_TABLE.STATUS'),
            type: 'custom',
            width: '5%',
            class: 'text-center',
            isFilterable: false,
            renderComponent: _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_23__/* .StatusBadgeComponent */ .v,
            componentInitFunction: (instance, cell) => {
              instance.value = cell.getRawValue();
            }
          }
        }
      };
      if (this.dataLayoutStyle === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__/* .ComponentLayoutStyleEnum */ .IE.CARDS_GRID) {
        this.smartTableSettings['columns']['tags'] = {
          title: this.getTranslation('SM_TABLE.TAGS'),
          type: 'custom',
          width: '20%',
          class: 'align-row',
          renderComponent: _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_24__/* .TagsOnlyComponent */ .F,
          componentInitFunction: (instance, cell) => {
            instance.rowData = cell.getRow().getData();
            instance.value = cell.getRawValue();
          },
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
          isSortable: false
        };
      }
    }
    /**
     * Handles the selection of a proposal.
     * @param isSelected - A boolean indicating whether the proposal is selected.
     * @param data - The proposal data.
     */
    selectProposal({
      isSelected,
      data
    }) {
      // Update the disableButton property based on the isSelected value
      this.disableButton = !isSelected;
      // Update the selectedProposal property based on the isSelected value
      this.selectedProposal = isSelected ? data : null;
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
        id: organizationId,
        tenantId
      } = this.organization;
      const {
        startDate,
        endDate
      } = (0,_gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_26__/* .getAdjustDateRangeFutureAllowed */ .Yi)(this.selectedDateRange);
      this.smartTableSource = new _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_27__/* .ServerDataSource */ .N(this._httpClient, {
        endPoint: `${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_28__/* .API_PREFIX */ .m4}/proposal/pagination`,
        relations: ['organization', 'employee', 'employee.user', 'tags', 'organizationContact'],
        join: {
          ...(this.filters.join ? this.filters.join : {})
        },
        where: {
          organizationId,
          tenantId,
          ...(this.selectedEmployeeId ? {
            employeeId: this.selectedEmployeeId
          } : {}),
          valueDate: {
            startDate: (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_9__/* .toUTC */ .q5)(startDate).format('YYYY-MM-DD HH:mm:ss'),
            endDate: (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_9__/* .toUTC */ .q5)(endDate).format('YYYY-MM-DD HH:mm:ss')
          },
          ...(this.filters.where ? this.filters.where : {})
        },
        resultMap: proposal => this.proposalMapper(proposal),
        finalize: () => {
          // Calculate the statistics
          this.calculateStatistics();
          // Set pagination
          this.setPagination({
            ...this.getPagination(),
            totalItems: this.smartTableSource.count()
          });
          this.loading = false;
        }
      });
    }
    /**
     * Calculates and updates statistics related to proposals.
     */
    calculateStatistics() {
      // Reset the count of accepted proposals
      this.countAccepted = 0;
      // Retrieve the proposals from the smart table source
      const proposals = this.smartTableSource.getData();
      // Count the accepted proposals using Array.reduce
      this.countAccepted = proposals.reduce((count, proposal) => count + (proposal.status === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_4__/* .ProposalStatusEnum */ .s.ACCEPTED ? 1 : 0), 0);
      // Update the total number of proposals
      this.totalProposals = proposals.length;
      // Calculate the success rate
      this.successRate = this.totalProposals ? `${(this.countAccepted / this.totalProposals * 100).toFixed(0)} %` : '0 %';
    }
    /**
     * Retrieves proposals, sets up smart table source, and updates component state.
     * @returns {Promise<void>} A Promise that resolves when the operation is complete.
     */
    getProposals() {
      var _this4 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A)(function* () {
        // Check if 'organization' is not defined
        if (!_this4.organization) {
          return; // If not defined, exit the function
        }
        try {
          // Set up the smart table source
          _this4.setSmartTableSource();
          // Get current pagination settings
          const {
            activePage,
            itemsPerPage
          } = _this4.getPagination();
          // Set paging and sorting for the smart table source
          _this4.smartTableSource.setPaging(activePage, itemsPerPage, false);
          // Set sort for the smart table source
          _this4.smartTableSource.setSort([{
            field: 'valueDate',
            direction: 'desc'
          }], false);
          // If the layout style is GRID, initiate GRID view pagination
          if (_this4.dataLayoutStyle === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__/* .ComponentLayoutStyleEnum */ .IE.CARDS_GRID) {
            // If the layout style is GRID, initiate GRID view pagination
            yield _this4.smartTableSource.getElements();
            // Update the 'proposals' array with the retrieved data
            _this4.proposals.push(..._this4.smartTableSource.getData());
            // Set pagination information based on the smart table source
            _this4.setPagination({
              ..._this4.getPagination(),
              totalItems: _this4.smartTableSource.count()
            });
          }
        } catch (error) {
          // Handle errors by displaying a danger toastr message
          _this4._errorHandlingService.handleError(error);
        }
      })();
    }
    /**
     * Applies translation updates on the smart table when the language changes.
     */
    _applyTranslationOnSmartTable() {
      // Subscribe to the onLangChange event from the translateService
      this.translateService.onLangChange.pipe(
      // Trigger the _loadSmartTableSettings method when the language changes
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .M)(() => this._loadSmartTableSettings()),
      // Unsubscribe when the component is destroyed to avoid memory leaks
      (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__/* .untilDestroyed */ .s)(this)).subscribe();
    }
    /*
     * Clear selected item
     */
    clearItem() {
      this.selectProposal({
        isSelected: false,
        data: null
      });
    }
    ngOnDestroy() {}
    static {
      this.ɵfac = function ProposalComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || ProposalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_29__/* .TranslateService */ .c$), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_30__/* .Store */ .il), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_31__/* .DateRangePickerBuilderService */ .i7), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_router__WEBPACK_IMPORTED_MODULE_32__/* .Router */ .Ix), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_33__/* .ProposalsService */ .p), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_34__/* .ToastrService */ .t), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_nebular_theme__WEBPACK_IMPORTED_MODULE_35__/* .NbDialogService */ .S0W), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_36__/* .ErrorHandlingService */ .X), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_common_http__WEBPACK_IMPORTED_MODULE_37__/* .HttpClient */ .Qq));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: ProposalComponent,
        selectors: [["ga-proposal-list"]],
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
        decls: 23,
        vars: 11,
        consts: [["gridLayout", ""], ["actionButtons", ""], ["statusButtonTemplate", ""], ["visibleButton", ""], ["statisticsTemplate", ""], ["nbSpinnerStatus", "primary", "nbSpinnerSize", "large", 3, "nbSpinner"], [1, "card-custom-header"], [1, "card-header-title"], ["ngxPermissionsOnly", "ORG_PROPOSAL_TEMPLATES_VIEW"], [3, "ngTemplateOutlet"], [1, "gauzy-button-container"], [3, "buttonTemplateVisible", "isDisable", "buttonTemplate", "componentName"], [1, "content"], [3, "ngIf", "ngIfElse"], ["nbButton", "", "status", "info", "size", "small", 1, "action", 3, "routerLink"], ["icon", "file-text-outline"], [1, "table-scroll-container", "custom-table"], [2, "cursor", "pointer", 3, "userRowSelect", "settings", "source"], [1, "pagination-container"], [4, "ngIf"], [3, "source"], [3, "onSelectedItem", "scroll", "totalItems", "settings", "source"], [1, "btn-group", "actions"], ["ngxPermissionsOnly", "ORG_PROPOSALS_EDIT"], ["nbButton", "", "type", "button", "status", "basic", "size", "small", "underConstruction", "", 1, "action", "secondary", 3, "disabled"], ["icon", "eye-outline", "pack", "eva"], ["nbButton", "", "type", "button", "status", "basic", "size", "small", 1, "action", "primary", 3, "click", "disabled"], ["icon", "info-outline"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["icon", "edit-outline"], ["nbButton", "", "type", "button", "status", "basic", "size", "small", 1, "action", 3, "click", "nbTooltip", "disabled"], ["status", "danger", "icon", "trash-2-outline"], ["nbButton", "", "type", "button", "size", "small", "status", "basic", 1, "action", "warning", 3, "click", "disabled"], ["icon", "done-all-outline"], ["nbButton", "", "type", "button", "status", "success", "size", "small", 1, "", 3, "routerLink"], ["icon", "plus-outline"], [1, "statistics"], [1, "custom-container"]],
        template: function ProposalComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-card", 5)(1, "nb-card-header", 6)(2, "div", 7)(3, "h4")(4, "ngx-header-title");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(6, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(7, ProposalComponent_ng_template_7_Template, 5, 7, "ng-template", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainer"] */ .eu8(8, 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(9, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(10, "ngx-gauzy-button-action", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(11, "nb-card-body", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(12, ProposalComponent_ng_template_12_Template, 4, 3, "ng-template", 13)(13, ProposalComponent_ng_template_13_Template, 1, 3, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplateRefExtractor"] */ .C5r);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(15, ProposalComponent_ng_template_15_Template, 2, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplateRefExtractor"] */ .C5r)(17, ProposalComponent_ng_template_17_Template, 1, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplateRefExtractor"] */ .C5r)(19, ProposalComponent_ng_template_19_Template, 1, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplateRefExtractor"] */ .C5r)(21, ProposalComponent_ng_template_21_Template, 23, 15, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplateRefExtractor"] */ .C5r);
          }
          if (rf & 2) {
            const gridLayout_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(14);
            const actionButtons_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(16);
            const visibleButton_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(20);
            const statisticsTemplate_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("nbSpinner", ctx.loading);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(6, 9, "PROPOSALS_PAGE.HEADER"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngTemplateOutlet", statisticsTemplate_r14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("buttonTemplateVisible", visibleButton_r13)("isDisable", ctx.disableButton)("buttonTemplate", actionButtons_r12)("componentName", ctx.viewComponentName);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.dataLayoutStyle === ctx.componentLayoutStyleEnum.TABLE)("ngIfElse", gridLayout_r11);
          }
        },
        dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_38__/* .RouterLink */ .Wk, _nebular_theme__WEBPACK_IMPORTED_MODULE_35__/* .NbButtonComponent */ .YP2, _nebular_theme__WEBPACK_IMPORTED_MODULE_35__/* .NbCardComponent */ .SrT, _nebular_theme__WEBPACK_IMPORTED_MODULE_35__/* .NbCardBodyComponent */ .KH5, _nebular_theme__WEBPACK_IMPORTED_MODULE_35__/* .NbCardHeaderComponent */ .zJv, _nebular_theme__WEBPACK_IMPORTED_MODULE_35__/* .NbIconComponent */ .tHu, _nebular_theme__WEBPACK_IMPORTED_MODULE_35__/* .NbSpinnerDirective */ .zwc, _nebular_theme__WEBPACK_IMPORTED_MODULE_35__/* .NbTooltipDirective */ .BmQ, ngx_permissions__WEBPACK_IMPORTED_MODULE_39__/* .NgxPermissionsDirective */ .f6, _angular_common__WEBPACK_IMPORTED_MODULE_40__/* .NgIf */ .bT, _angular_common__WEBPACK_IMPORTED_MODULE_40__/* .NgTemplateOutlet */ .T3, _ui_core_shared_src_lib_components_header_title_header_title_component__WEBPACK_IMPORTED_MODULE_41__/* .HeaderTitleComponent */ .X, _ui_core_shared_src_lib_directives_under_construction_directive__WEBPACK_IMPORTED_MODULE_42__/* .UnderConstructionDirective */ .r, _ui_core_shared_src_lib_card_grid_card_grid_component__WEBPACK_IMPORTED_MODULE_43__/* .CardGridComponent */ .c, angular2_smart_table__WEBPACK_IMPORTED_MODULE_44__/* .Angular2SmartTableComponent */ .T9, _ui_core_shared_src_lib_gauzy_button_action_gauzy_button_action_component__WEBPACK_IMPORTED_MODULE_45__/* .GauzyButtonActionComponent */ .A, _ui_core_shared_src_lib_smart_data_layout_pagination_pagination_v2_pagination_v2_component__WEBPACK_IMPORTED_MODULE_46__/* .PaginationV2Component */ .a, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_29__/* .TranslatePipe */ .D9, _angular_common__WEBPACK_IMPORTED_MODULE_40__/* .TitleCasePipe */ .PV],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.action[_ngcontent-%COMP%] {\n  box-shadow: var(--gauzy-shadow);\n  border: none;\n}\n.action[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}\n.action.info[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: var(--color-info-default);\n  color: white;\n  border-color: var(--color-info-default);\n}\n.action.info-text-1[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  color: var(--color-info-default);\n}\n.action.secondary[_ngcontent-%COMP%] {\n  color: #7e7e8f;\n}\n.action.success[_ngcontent-%COMP%] {\n  color: var(--color-success-default);\n}\n.action.warning[_ngcontent-%COMP%] {\n  color: rgb(245, 109, 88);\n}\n.action.orange[_ngcontent-%COMP%] {\n  color: rgb(255, 171, 45);\n}\n.action.primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n}\n.action.primary.soft[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: rgba(110, 73, 232, 0.1);\n}\n.action.select-nb[_ngcontent-%COMP%]     {\n  box-shadow: none;\n}\n.action.select-nb[_ngcontent-%COMP%]     .select-button {\n  box-shadow: var(--gauzy-shadow);\n  background: rgb(245, 245, 245);\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n.actions[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-2);\n  border-radius: var(--button-rectangle-border-radius);\n  padding: 2px 4px !important;\n}\n\n.gauzy-button-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n.card-custom-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n[_nghost-%COMP%]     input {\n  border-radius: var(--border-radius);\n  box-shadow: var(--gauzy-shadow) inset;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%], \n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   .table-scroll-container[_ngcontent-%COMP%], \n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .table-scroll-container[_ngcontent-%COMP%] {\n  flex-grow: 10;\n  max-height: unset;\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  border-radius: 0 0 var(--border-radius) var(--border-radius);\n}\n[dir=ltr]   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  padding: 1rem 0.5rem 1rem 18px;\n}\n[dir=rtl]   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  padding: 1rem 18px 1rem 0.5rem;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%], \n[_nghost-%COMP%]   nb-card-header[_ngcontent-%COMP%] {\n  border-radius: var(--border-radius);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  height: 100%;\n  border-radius: var(--border-radius);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-header[_ngcontent-%COMP%] {\n  flex: 0 1 auto;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  overflow: unset;\n  height: calc(100vh - var(--header-height) - var(--footer-height) - 11.5rem + 3.75rem);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-footer[_ngcontent-%COMP%] {\n  flex: 0 1 auto;\n}\n\n.statistics[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.5rem 0.75rem 0.5625rem 0.8125rem;\n  background: rgba(0, 136, 254, 0.05);\n  border-radius: nb-theme(border-radius);\n  margin-top: 1rem;\n}\n.statistics[_ngcontent-%COMP%]   .custom-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 40%;\n}\n.statistics[_ngcontent-%COMP%]   .custom-container[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:last-child {\n  font-size: 1.0625rem;\n}\n\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  height: calc(100vh - 21.5rem) !important;\n}"]
      });
    }
  };
  ProposalComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_47__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__/* .UntilDestroy */ .d)({
    checkProperties: true
  }), (0,tslib__WEBPACK_IMPORTED_MODULE_47__/* .__metadata */ .Sn)("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_29__/* .TranslateService */ .c$, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_30__/* .Store */ .il, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_31__/* .DateRangePickerBuilderService */ .i7, _angular_router__WEBPACK_IMPORTED_MODULE_32__/* .Router */ .Ix, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_33__/* .ProposalsService */ .p, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_34__/* .ToastrService */ .t, _nebular_theme__WEBPACK_IMPORTED_MODULE_35__/* .NbDialogService */ .S0W, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_36__/* .ErrorHandlingService */ .X, _angular_common_http__WEBPACK_IMPORTED_MODULE_37__/* .HttpClient */ .Qq])], ProposalComponent);
  return ProposalComponent;
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

/***/ 47825:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   l: () => (/* binding */ DateViewComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14572);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56383);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19223);
/* harmony import */ var _pipes_date_format_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11031);





function DateViewComponent_nb_icon_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(0, "nb-icon", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(1, "translate");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(1, 1, "POP_UPS.RECURRING_EXPENSE"));
  }
}
let DateViewComponent = /*#__PURE__*/(() => {
  class DateViewComponent {
    static {
      this.ɵfac = function DateViewComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || DateViewComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: DateViewComponent,
        selectors: [["ngx-date-view"]],
        inputs: {
          value: "value",
          rowData: "rowData"
        },
        standalone: false,
        decls: 4,
        vars: 4,
        consts: [["icon", "sync-outline", 3, "nbTooltip", 4, "ngIf"], ["icon", "sync-outline", 3, "nbTooltip"]],
        template: function DateViewComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "dateFormat");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(3, DateViewComponent_nb_icon_3_Template, 2, 3, "nb-icon", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(2, 2, ctx.value), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.rowData == null ? null : ctx.rowData.recurring);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .NgIf */ .bT, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbIconComponent */ .tHu, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbTooltipDirective */ .BmQ, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__/* .TranslatePipe */ .D9, _pipes_date_format_pipe__WEBPACK_IMPORTED_MODULE_4__/* .DateFormatPipe */ .a],
        encapsulation: 2
      });
    }
  }
  return DateViewComponent;
})();

/***/ }),

/***/ 55129:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ ContactLinksComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9620);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14572);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56383);
/* harmony import */ var _directives_img_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(71466);






function ContactLinksComponent_ng_container_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", ctx_r1.value.name.substr(0, 1).toUpperCase(), " ");
  }
}
function ContactLinksComponent_ng_container_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("src", ctx_r1.value == null ? null : ctx_r1.value.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵsanitizeUrl"] */ .B4B);
  }
}
function ContactLinksComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function ContactLinksComponent_ng_container_1_Template_div_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.navigateToContact());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(2, ContactLinksComponent_ng_container_1_div_2_Template, 2, 1, "div", 3)(3, ContactLinksComponent_ng_container_1_div_3_Template, 2, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(4, "div", 5)(5, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("nbTooltip", ctx_r1.value.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", !ctx_r1.value.imageUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r1.value.imageUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(ctx_r1.value.name);
  }
}
let ContactLinksComponent = /*#__PURE__*/(() => {
  class ContactLinksComponent {
    constructor(_router) {
      this._router = _router;
    }
    /**
     * Navigates to the contact view page for the current value.
     *
     * @return {void} This function does not return anything.
     */
    navigateToContact() {
      if (!this.value) {
        return;
      }
      this._router.navigate([`/pages/contacts/view`, this.value.id]);
    }
    static {
      this.ɵfac = function ContactLinksComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || ContactLinksComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_router__WEBPACK_IMPORTED_MODULE_1__/* .Router */ .Ix));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: ContactLinksComponent,
        selectors: [["ngx-contact-links"]],
        inputs: {
          rowData: "rowData",
          value: "value"
        },
        standalone: false,
        decls: 2,
        vars: 1,
        consts: [[1, "contact-links-container"], [4, "ngIf"], [1, "inner-wrapper", 3, "click", "nbTooltip"], ["class", "prefix", 4, "ngIf"], ["class", "avatar", 4, "ngIf"], [1, "names-wrapper"], [1, "link-text"], [1, "prefix"], [1, "avatar"], [3, "src"]],
        template: function ContactLinksComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, ContactLinksComponent_ng_container_1_Template, 7, 4, "ng-container", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.value == null ? null : ctx.value.name);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__/* .NgIf */ .bT, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbTooltipDirective */ .BmQ, _directives_img_directive__WEBPACK_IMPORTED_MODULE_4__/* .ImgDirective */ .z],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   .contact-links-container[_ngcontent-%COMP%] {\n  width: 100%;\n}\n[_nghost-%COMP%]   .contact-links-container[_ngcontent-%COMP%]   .inner-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: rgba(36, 189, 255, 0.1);\n  border-radius: var(--button-rectangle-border-radius);\n  overflow: hidden;\n  width: fit-content;\n}\n[dir=ltr]   [_nghost-%COMP%]   .contact-links-container[_ngcontent-%COMP%]   .inner-wrapper[_ngcontent-%COMP%] {\n  padding: 5px 14px 5px 7px;\n}\n[dir=rtl]   [_nghost-%COMP%]   .contact-links-container[_ngcontent-%COMP%]   .inner-wrapper[_ngcontent-%COMP%] {\n  padding: 5px 7px 5px 14px;\n}\n[_nghost-%COMP%]   .contact-links-container[_ngcontent-%COMP%]   .inner-wrapper[_ngcontent-%COMP%]   .names-wrapper[_ngcontent-%COMP%] {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  max-width: 110px;\n}\n[_nghost-%COMP%]   .contact-links-container[_ngcontent-%COMP%]   .inner-wrapper[_ngcontent-%COMP%]   .link-text[_ngcontent-%COMP%] {\n  cursor: pointer;\n  text-decoration: none;\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 15px;\n  letter-spacing: 0em;\n  white-space: nowrap;\n  width: 100%;\n  text-overflow: ellipsis;\n  color: var(--text-primary-color);\n}\n[_nghost-%COMP%]   .contact-links-container[_ngcontent-%COMP%]   .inner-wrapper[_ngcontent-%COMP%]   .link-text[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n[_nghost-%COMP%]   .contact-links-container[_ngcontent-%COMP%]   .inner-wrapper[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  display: flex;\n}\n[_nghost-%COMP%]   .contact-links-container[_ngcontent-%COMP%]   .inner-wrapper[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  object-fit: cover;\n  border-radius: var(--button-rectangle-border-radius);\n}\n[_nghost-%COMP%]   .contact-links-container[_ngcontent-%COMP%]   .inner-wrapper[_ngcontent-%COMP%]   .prefix[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 4px 5px;\n  gap: 10px;\n  width: 18px;\n  height: 18px;\n  background: #7e7e8f;\n  border-radius: var(--button-rectangle-border-radius);\n  \n\n  flex: none;\n  order: 0;\n  flex-grow: 0;\n  \n\n  font-size: 8px;\n  font-weight: 600;\n  line-height: 10px;\n  letter-spacing: 0em;\n  text-align: center;\n  color: white;\n}"]
      });
    }
  }
  return ContactLinksComponent;
})();

/***/ }),

/***/ 55384:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   z: () => (/* binding */ VendorSelectModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14572);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10936);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19223);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56383);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(55567);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);







let VendorSelectModule = /*#__PURE__*/(() => {
  class VendorSelectModule {
    static {
      this.ɵfac = function VendorSelectModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || VendorSelectModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .$C({
        type: VendorSelectModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .CommonModule */ .MD, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbSelectModule */ .VcP, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .FormsModule */ .YN, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__/* .TranslateModule */ .h.forChild(), _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__/* .NgSelectModule */ .MQ]
      });
    }
  }
  return VendorSelectModule;
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

/***/ 57972:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   f: () => (/* binding */ TaskStatusesService)
/* harmony export */ });
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64913);
/* harmony import */ var _crud_crud_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7718);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26860);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45715);





let TaskStatusesService = /*#__PURE__*/(() => {
  class TaskStatusesService extends _crud_crud_service__WEBPACK_IMPORTED_MODULE_0__/* .CrudService */ .m {
    static {
      this.API_URL = `${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/task-statuses`;
    }
    constructor(http) {
      super(http, TaskStatusesService.API_URL);
    }
    static {
      this.ɵfac = function TaskStatusesService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || TaskStatusesService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵinject"] */ .KVO(_angular_common_http__WEBPACK_IMPORTED_MODULE_3__/* .HttpClient */ .Qq));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineInjectable"] */ .jDH({
        token: TaskStatusesService,
        factory: TaskStatusesService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return TaskStatusesService;
})();

/***/ }),

/***/ 61444:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   x: () => (/* binding */ TagsColorInputModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14572);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56383);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10936);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(55567);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63545);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(19223);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);








let TagsColorInputModule = /*#__PURE__*/(() => {
  class TagsColorInputModule {
    static {
      this.ɵfac = function TagsColorInputModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || TagsColorInputModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .$C({
        type: TagsColorInputModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .G2t({
        providers: [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_1__/* .TagsService */ .D],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__/* .CommonModule */ .MD, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbSelectModule */ .VcP, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbBadgeModule */ .iEK, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .FormsModule */ .YN, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__/* .NgSelectModule */ .MQ, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__/* .TranslateModule */ .h.forChild()]
      });
    }
  }
  return TagsColorInputModule;
})();

/***/ }),

/***/ 65407:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   W: () => (/* binding */ catchError)
/* harmony export */ });
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14524);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23214);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70636);



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

/***/ 65735:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K: () => (/* binding */ ProposalTemplateService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80189);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(64913);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26024);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26860);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45715);





let ProposalTemplateService = /*#__PURE__*/(() => {
  class ProposalTemplateService {
    constructor(http) {
      this.http = http;
      this.API_URL = `${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_0__/* .API_PREFIX */ .m4}/employee-proposal-template`;
    }
    /**
     * Fetches all employee proposal templates based on the given request parameters.
     *
     * @param request - An optional object containing query parameters to filter and sort the results.
     * @returns A promise that resolves with a pagination object containing the list of employee proposal templates.
     */
    getAll(request = {}) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ ._)(this.http.get(this.API_URL, {
        params: (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_2__/* .toParams */ .SV)(request)
      }));
    }
    /**
     * Creates a new employee proposal template with the provided input data.
     *
     * @param input - An object containing the data for the new employee proposal template.
     * @returns A promise that resolves with the created employee proposal template.
     */
    create(input) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ ._)(this.http.post(this.API_URL, input));
    }
    /**
     * Updates an existing employee proposal template with the given ID using the provided data.
     *
     * @param id - The ID of the employee proposal template to update.
     * @param request - An object containing the updated data for the employee proposal template.
     * @returns A promise that resolves with the updated employee proposal template.
     */
    update(id, request) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ ._)(this.http.put(`${this.API_URL}/${id}`, request));
    }
    /**
     * Sets the specified employee proposal template as the default template.
     *
     * @param id - The ID of the employee proposal template to set as default.
     * @param input - An object containing any additional data required for making the template default.
     * @returns A promise that resolves with the updated employee proposal template.
     */
    makeDefault(id, input) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ ._)(this.http.patch(`${this.API_URL}/${id}/make-default`, input));
    }
    /**
     * Deletes the employee proposal template with the specified ID.
     *
     * @param id - The ID of the employee proposal template to delete.
     * @returns A promise that resolves when the employee proposal template has been deleted.
     */
    delete(id) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ ._)(this.http.delete(`${this.API_URL}/${id}`));
    }
    static {
      this.ɵfac = function ProposalTemplateService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || ProposalTemplateService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵinject"] */ .KVO(_angular_common_http__WEBPACK_IMPORTED_MODULE_4__/* .HttpClient */ .Qq));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdefineInjectable"] */ .jDH({
        token: ProposalTemplateService,
        factory: ProposalTemplateService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return ProposalTemplateService;
})();

/***/ }),

/***/ 68000:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K: () => (/* binding */ TableFiltersModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14572);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10936);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(56383);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(59086);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(55567);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19223);
/* harmony import */ var _expenses_expense_category_select_expense_category_select_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(28826);
/* harmony import */ var _vendor_select_vendor_select_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(55384);
/* harmony import */ var _tags_tags_color_input_tags_color_input_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(61444);
/* harmony import */ var _contact_select_contact_select_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(11336);
/* harmony import */ var _tasks_task_status_select_task_status_select_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(18471);
/* harmony import */ var _product__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(17492);
/* harmony import */ var _product__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(87736);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);














let TableFiltersModule = /*#__PURE__*/(() => {
  class TableFiltersModule {
    static {
      this.ɵfac = function TableFiltersModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || TableFiltersModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .$C({
        type: TableFiltersModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .CommonModule */ .MD, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .FormsModule */ .YN, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .ReactiveFormsModule */ .X1, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_3__/* .NgSelectModule */ .MQ, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__/* .TranslateModule */ .h.forChild(), _tags_tags_color_input_tags_color_input_module__WEBPACK_IMPORTED_MODULE_5__/* .TagsColorInputModule */ .x, _vendor_select_vendor_select_module__WEBPACK_IMPORTED_MODULE_6__/* .VendorSelectModule */ .z, _expenses_expense_category_select_expense_category_select_module__WEBPACK_IMPORTED_MODULE_7__/* .ExpenseCategorySelectModule */ .H, _product__WEBPACK_IMPORTED_MODULE_8__/* .ProductCategorySelectorModule */ .f, _product__WEBPACK_IMPORTED_MODULE_9__/* .ProductTypeSelectorModule */ .f, _contact_select_contact_select_module__WEBPACK_IMPORTED_MODULE_10__/* .ContactSelectModule */ .T, _tasks_task_status_select_task_status_select_module__WEBPACK_IMPORTED_MODULE_11__/* .TaskStatusSelectModule */ .w, _nebular_theme__WEBPACK_IMPORTED_MODULE_12__/* .NbToggleModule */ .jVr, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__/* .FontAwesomeModule */ .dX]
      });
    }
  }
  return TableFiltersModule;
})();

/***/ }),

/***/ 68240:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   h: () => (/* binding */ OrganizationContactFilterComponent)
/* harmony export */ });
/* harmony import */ var angular2_smart_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52345);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26860);
/* harmony import */ var _contact_select_contact_select_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(84597);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19223);





let OrganizationContactFilterComponent = /*#__PURE__*/(() => {
  class OrganizationContactFilterComponent extends angular2_smart_table__WEBPACK_IMPORTED_MODULE_0__/* .DefaultFilter */ .yG {
    constructor() {
      super();
    }
    /**
     *
     *
     */
    ngOnChanges(changes) {}
    /**
     *
     * @param value
     */
    onChange(value) {
      this.column.filterFunction(value, this.column.id);
    }
    static {
      this.ɵfac = function OrganizationContactFilterComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || OrganizationContactFilterComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineComponent"] */ .VBU({
        type: OrganizationContactFilterComponent,
        selectors: [["ga-contact-select-filter"]],
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3, _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵNgOnChangesFeature"] */ .OA$],
        decls: 2,
        vars: 4,
        consts: [[3, "onChanged", "clearable", "placeholder"]],
        template: function OrganizationContactFilterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "ga-contact-select", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(1, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("onChanged", function OrganizationContactFilterComponent_Template_ga_contact_select_onChanged_0_listener($event) {
              return ctx.onChange($event);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("clearable", true)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(1, 2, "PAYMENTS_PAGE.CONTACT"));
          }
        },
        dependencies: [_contact_select_contact_select_component__WEBPACK_IMPORTED_MODULE_2__/* .ContactSelectComponent */ .O, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__/* .TranslatePipe */ .D9],
        encapsulation: 2
      });
    }
  }
  return OrganizationContactFilterComponent;
})();

/***/ }),

/***/ 76527:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: () => (/* binding */ ProposalsService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80189);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26024);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64913);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26860);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45715);






let ProposalsService = /*#__PURE__*/(() => {
  class ProposalsService {
    constructor(http) {
      this.http = http;
    }
    /**
     * Retrieves all proposals with optional filtering by relations and conditions.
     *
     * @param relations - An array of strings specifying the related entities to include in the results.
     * @param where - An optional object specifying the conditions to filter the proposals.
     * @returns A promise that resolves to an object containing a list of proposals and pagination details.
     */
    getAll(relations = [], where) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ ._)(this.http.get(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/proposal`, {
        params: (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_2__/* .toParams */ .SV)({
          where,
          relations
        })
      }));
    }
    /**
     * Creates a new proposal with the given input data.
     *
     * @param input - The data required to create a new proposal, conforming to the IProposalCreateInput interface.
     * @returns A promise that resolves to the newly created proposal.
     */
    create(input) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ ._)(this.http.post(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/proposal`, input));
    }
    /**
     * Updates an existing proposal with the given ID using the provided input data.
     *
     * @param id - The unique identifier of the proposal to update.
     * @param input - The data to update the proposal with, conforming to the IProposalCreateInput interface.
     * @returns A promise that resolves to the updated proposal.
     */
    update(id, input) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ ._)(this.http.put(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/proposal/${id}`, input));
    }
    /**
     * Deletes a proposal with the given ID.
     *
     * @param id - The unique identifier of the proposal to delete.
     * @returns A promise that resolves to the deleted proposal.
     */
    delete(id) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ ._)(this.http.delete(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/proposal/${id}`));
    }
    /**
     * Retrieves a proposal by its unique ID, with optional inclusion of related entities.
     *
     * @param id - The unique identifier of the proposal to retrieve.
     * @param relations - An array of strings specifying the related entities to include in the result.
     * @returns An observable that emits the retrieved proposal, enriched with the specified relations.
     */
    getById(id, relations = []) {
      return this.http.get(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/proposal/${id}`, {
        params: (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_2__/* .toParams */ .SV)({
          relations
        })
      });
    }
    static {
      this.ɵfac = function ProposalsService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || ProposalsService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵinject"] */ .KVO(_angular_common_http__WEBPACK_IMPORTED_MODULE_4__/* .HttpClient */ .Qq));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdefineInjectable"] */ .jDH({
        token: ProposalsService,
        factory: ProposalsService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return ProposalsService;
})();

/***/ }),

/***/ 78537:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ ProposalDetailsResolver)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9620);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(28259);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(65407);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76527);




/**
 * Resolver function to fetch a proposal by its ID.
 * If an error occurs, the user is redirected to the employees page.
 *
 * @param route The activated route snapshot containing the route parameters.
 * @param state The route state snapshot.
 * @returns An observable that emits the resolved proposal or `null` in case of an error.
 */
const ProposalDetailsResolver = route => {
  // Injecting the necessary services
  const _proposalsService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__/* .inject */ .WQX)(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_1__/* .ProposalsService */ .p);
  const _router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__/* .inject */ .WQX)(_angular_router__WEBPACK_IMPORTED_MODULE_2__/* .Router */ .Ix);
  // Extracting proposal ID from route parameters
  const proposalId = route.params['id'];
  // Check if proposal ID is present
  if (!proposalId) {
    // Return an observable emitting null if proposal ID is not present
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(null);
  }
  // Get proposal by ID
  return _proposalsService.getById(proposalId, ['employee', 'employee.user', 'tags', 'organizationContact']).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__/* .catchError */ .W)(() => {
    // Redirect to the employees page if an error occurs
    _router.navigate(['/pages/employees']);
    // Return an observable emitting null to indicate the failure
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(null);
  }));
};

/***/ }),

/***/ 84140:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ distinctUntilChanged)
/* harmony export */ });
/* harmony import */ var _util_identity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7747);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70636);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23214);



function distinctUntilChanged(comparator, keySelector = _util_identity__WEBPACK_IMPORTED_MODULE_0__/* .identity */ .D) {
  comparator = comparator !== null && comparator !== void 0 ? comparator : defaultCompare;
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_1__/* .operate */ .N)((source, subscriber) => {
    let previousKey;
    let first = true;
    source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__/* .createOperatorSubscriber */ ._)(subscriber, value => {
      const currentKey = keySelector(value);
      if (first || !comparator(previousKey, currentKey)) {
        first = false;
        previousKey = currentKey;
        subscriber.next(value);
      }
    }));
  });
}
function defaultCompare(a, b) {
  return a === b;
}
//# sourceMappingURL=distinctUntilChanged.js.map

/***/ }),

/***/ 84597:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O: () => (/* binding */ ContactSelectComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73014);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(55598);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(10936);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4644);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(79708);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4478);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(39855);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(52738);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(41598);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(19223);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(73465);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(17785);
/* harmony import */ var _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38546);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(71924);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(15480);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(54263);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(941);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(55567);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(14572);


















function ContactSelectComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(0);
  }
  if (rf & 2) {
    const item_r1 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", item_r1.name, " ");
  }
}
function ContactSelectComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 3)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const item_r2 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(item_r2.name);
  }
}
let ContactSelectComponent = /*#__PURE__*/(() => {
  let ContactSelectComponent = class ContactSelectComponent extends _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_1__/* .TranslationBaseComponent */ .K {
    get disabled() {
      return this._disabled;
    }
    set disabled(value) {
      this._disabled = value;
    }
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
    get searchable() {
      return this._searchable;
    }
    set searchable(value) {
      this._searchable = value;
    }
    set organizationContact(val) {
      this._organizationContact = val;
      this.onChange(val);
      this.onTouched(val);
    }
    get organizationContact() {
      return this._organizationContact;
    }
    constructor(translateService, store, toastrService, errorHandler, organizationContactService) {
      var _this;
      super(translateService);
      _this = this;
      this.translateService = translateService;
      this.store = store;
      this.toastrService = toastrService;
      this.errorHandler = errorHandler;
      this.organizationContactService = organizationContactService;
      this.contacts = [];
      this.subject$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__/* .Subject */ .B();
      /*
       * Getter & Setter for dynamic enabled/disabled element
       */
      this._disabled = false;
      /*
       * Getter & Setter for dynamic add tag option
       */
      this._addTag = false;
      /*
       * Getter & Setter for dynamic searchable option
       */
      this._searchable = true;
      this.onChange = () => {};
      this.onTouched = () => {};
      this.onChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .bkB();
      /**
       * Adds a new organization contact with the specified name.
       *
       * @param name The name of the contact to add.
       * @returns A promise that resolves to the created organization contact object.
       */
      this.addOrganizationContact = /*#__PURE__*/function () {
        var _ref = (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(function* (name) {
          if (!_this.organization) {
            return null;
          }
          const {
            tenantId
          } = _this.store.user;
          const {
            id: organizationId
          } = _this.organization;
          try {
            const contact = yield _this.organizationContactService.create({
              name,
              contactType: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_4__/* .ContactType */ .Pm.CLIENT,
              organizationId,
              organization: {
                id: organizationId
              },
              tenantId,
              tenant: {
                id: tenantId
              }
            });
            _this.toastrService.success(_this.getTranslation('NOTES.ORGANIZATIONS.EDIT_ORGANIZATIONS_CONTACTS.ADD_CONTACT', {
              name
            }), _this.getTranslation('TOASTR.TITLE.SUCCESS'));
            return contact;
          } catch (error) {
            _this.errorHandler.handleError(error);
            // Optionally, re-throw or return null to indicate failure
            return null;
          }
        });
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }();
    }
    ngOnInit() {
      this.subject$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .debounceTime */ .B)(100), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .M)(() => this.getContacts()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__/* .untilDestroyed */ .s)(this)).subscribe();
      this.store.selectedOrganization$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .filter */ .p)(organization => !!organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .M)(organization => this.organization = organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .M)(() => this.subject$.next(true)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__/* .untilDestroyed */ .s)(this)).subscribe();
      this.hasEditEmployee$ = this.store.userRolePermissions$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__/* .map */ .T)(() => this.store.hasPermission(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_10__/* .PermissionsEnum */ .U.ORG_EMPLOYEES_EDIT)));
    }
    getContacts() {
      var _this2 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(function* () {
        const {
          tenantId
        } = _this2.store.user;
        const {
          id: organizationId
        } = _this2.organization;
        const {
          items = []
        } = yield _this2.organizationContactService.getAll([], {
          organizationId,
          tenantId
        });
        _this2.contacts = items;
      })();
    }
    writeValue(value) {
      if (value) {
        this._organizationContact = value;
      }
    }
    registerOnChange(fn) {
      this.onChange = fn;
    }
    registerOnTouched(fn) {
      this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
      this.disabled = isDisabled;
    }
    selectContact(contact) {
      this.organizationContact = contact;
      this.onChanged.emit(contact);
    }
    searchContact(term, item) {
      if (item.name) {
        return item.name.toLowerCase().includes(term.toLowerCase());
      }
    }
    ngOnDestroy() {}
    static {
      this.ɵfac = function ContactSelectComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || ContactSelectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__/* .TranslateService */ .c$), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_12__/* .Store */ .il), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_13__/* .ToastrService */ .t), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_14__/* .ErrorHandlingService */ .X), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_15__/* .OrganizationContactService */ .$));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: ContactSelectComponent,
        selectors: [["ga-contact-select"]],
        inputs: {
          disabled: "disabled",
          placeholder: "placeholder",
          clearable: "clearable",
          addTag: "addTag",
          searchable: "searchable"
        },
        outputs: {
          onChanged: "onChanged"
        },
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵProvidersFeature"] */ .Jv_([{
          provide: _angular_forms__WEBPACK_IMPORTED_MODULE_16__/* .NG_VALUE_ACCESSOR */ .kq,
          useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__/* .forwardRef */ .Rfq)(() => ContactSelectComponent),
          multi: true
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
        decls: 5,
        vars: 12,
        consts: [["bindLabel", "name", "appendTo", "body", 3, "change", "ngModelChange", "addTag", "clearable", "disabled", "searchable", "items", "ngModel", "placeholder", "searchFn"], ["ng-option-tmp", ""], ["ng-label-tmp", ""], [1, "selector-template"]],
        template: function ContactSelectComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "ng-select", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(1, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("change", function ContactSelectComponent_Template_ng_select_change_0_listener($event) {
              return ctx.selectContact($event);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayListener"] */ .mxI("ngModelChange", function ContactSelectComponent_Template_ng_select_ngModelChange_0_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayBindingSet"] */ .DH7(ctx.organizationContact, $event) || (ctx.organizationContact = $event);
              return $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(3, ContactSelectComponent_ng_template_3_Template, 1, 1, "ng-template", 1)(4, ContactSelectComponent_ng_template_4_Template, 3, 1, "ng-template", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("addTag", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(1, 8, ctx.hasEditEmployee$) && ctx.addTag ? ctx.addOrganizationContact : null)("clearable", ctx.clearable)("disabled", ctx.disabled)("searchable", ctx.searchable)("items", ctx.contacts);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayProperty"] */ .R50("ngModel", ctx.organizationContact);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(2, 10, ctx.placeholder || "POP_UPS.ALL_CONTACTS"))("searchFn", ctx.searchContact);
          }
        },
        dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_16__/* .NgControlStatus */ .BC, _angular_forms__WEBPACK_IMPORTED_MODULE_16__/* .NgModel */ .vS, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_17__/* .NgSelectComponent */ .vr, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_17__/* .NgOptionTemplateDirective */ .Uq, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_17__/* .NgLabelTemplateDirective */ .ZZ, _angular_common__WEBPACK_IMPORTED_MODULE_18__/* .AsyncPipe */ .Jj, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__/* .TranslatePipe */ .D9],
        encapsulation: 2
      });
    }
  };
  ContactSelectComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_19__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__/* .UntilDestroy */ .d)({
    checkProperties: true
  }), (0,tslib__WEBPACK_IMPORTED_MODULE_19__/* .__metadata */ .Sn)("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__/* .TranslateService */ .c$, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_12__/* .Store */ .il, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_13__/* .ToastrService */ .t, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_14__/* .ErrorHandlingService */ .X, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_15__/* .OrganizationContactService */ .$])], ContactSelectComponent);
  return ContactSelectComponent;
})();


/***/ }),

/***/ 87736:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   f: () => (/* binding */ ProductTypeSelectorModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14572);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10936);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(55567);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19223);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);






let ProductTypeSelectorModule = /*#__PURE__*/(() => {
  class ProductTypeSelectorModule {
    static {
      this.ɵfac = function ProductTypeSelectorModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || ProductTypeSelectorModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .$C({
        type: ProductTypeSelectorModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .CommonModule */ .MD, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .FormsModule */ .YN, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__/* .TranslateModule */ .h.forChild(), _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__/* .NgSelectModule */ .MQ]
      });
    }
  }
  return ProductTypeSelectorModule;
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

/***/ }),

/***/ 90349:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ ProposalDetailsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(4637);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(86388);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9620);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(47594);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12990);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(30920);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(42898);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(71924);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(56383);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(14572);
/* harmony import */ var _ui_core_shared_src_lib_components_back_navigation_back_navigation_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(90910);
/* harmony import */ var _ui_core_shared_src_lib_directives_img_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(71466);
/* harmony import */ var _table_components_proposal_status_proposal_status_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(44161);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(19223);
/* harmony import */ var _ui_core_shared_src_lib_pipes_date_format_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(11031);

















function ProposalDetailsComponent_ng_container_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(1, "nb-card", 18)(2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(3, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(4, "div", 21)(5, "h6", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(8, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("src", ctx_r0.proposal == null ? null : ctx_r0.proposal.author == null ? null : ctx_r0.proposal.author.user == null ? null : ctx_r0.proposal.author.user.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵsanitizeUrl"] */ .B4B);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(7, 3, "PROPOSALS_PAGE.PROPOSAL_DETAILS.AUTHOR"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", ctx_r0.proposal == null ? null : ctx_r0.proposal.author == null ? null : ctx_r0.proposal.author.fullName, " ");
  }
}
function ProposalDetailsComponent_ga_proposal_status_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(0, "ga-proposal-status", 23);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("rowData", ctx_r0.proposal);
  }
}
function ProposalDetailsComponent_a_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("href", ctx_r0.jobPostLink, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵsanitizeUrl"] */ .B4B);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(2, 2, "PROPOSALS_PAGE.PROPOSAL_DETAILS.VIEW_JOB_POST"), " ");
  }
}
function ProposalDetailsComponent_ng_container_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "nb-badge", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const tag_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵstyleProp"] */ .xc7("background", tag_r2.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("text", tag_r2.name);
  }
}
let ProposalDetailsComponent = /*#__PURE__*/(() => {
  let ProposalDetailsComponent = class ProposalDetailsComponent {
    constructor(route, store, sanitizer, router) {
      this.route = route;
      this.store = store;
      this.sanitizer = sanitizer;
      this.router = router;
    }
    ngOnInit() {
      this.store.user$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__/* .filter */ .p)(user => !!user), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .tap */ .M)(user => this.user = user), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .tap */ .M)(user => this.employee = user?.employee), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__/* .untilDestroyed */ .s)(this)).subscribe();
    }
    ngAfterViewInit() {
      this.route.data.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .debounceTime */ .B)(100), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__/* .filter */ .p)(data => !!data && !!data.proposal), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .tap */ .M)(({
        proposal
      }) => {
        try {
          this.proposal = Object.assign({}, proposal, {
            jobPostLink: proposal.jobPostUrl ? proposal.jobPostUrl : '',
            jobTitle: proposal.jobPostContent.toString().replace(/<[^>]*(>|$)|&nbsp;/g, '').split(/[\s,\n]+/).slice(0, 3).join(' '),
            author: proposal.employee
          });
          this.setProposal();
        } catch (error) {
          this.router.navigate(['/pages/sales/proposals']);
        }
      }), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__/* .untilDestroyed */ .s)(this)).subscribe();
    }
    /**
     * Sets the proposal data.
     */
    setProposal() {
      this.jobPostLink = this.proposal.jobPostUrl;
      this.jobPostContent = this.sanitizer.bypassSecurityTrustHtml(this.proposal.jobPostContent);
      this.proposalContent = this.sanitizer.bypassSecurityTrustHtml(this.proposal.proposalContent);
    }
    /**
     * Navigates to the edit page of the proposal.
     */
    edit() {
      if (this.proposal) {
        this.router.navigate([`/pages/sales/proposals/edit`, this.proposal.id]);
      }
    }
    ngOnDestroy() {}
    static {
      this.ɵfac = function ProposalDetailsComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || ProposalDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_router__WEBPACK_IMPORTED_MODULE_5__/* .ActivatedRoute */ .nX), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_6__/* .Store */ .il), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__/* .DomSanitizer */ .up), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_router__WEBPACK_IMPORTED_MODULE_5__/* .Router */ .Ix));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: ProposalDetailsComponent,
        selectors: [["ngx-proposal-details"]],
        standalone: false,
        decls: 52,
        vars: 33,
        consts: [[1, "card-header-title"], ["nbButton", "", "type", "button", "status", "basic", "size", "small", 1, "action", "primary", 3, "click"], ["icon", "edit-outline"], [1, "main-content"], [1, "row"], [1, "col-xl-3", "col-12", "d-flex", "flex-column"], [4, "ngIf"], [1, "custom", "status"], [3, "rowData", 4, "ngIf"], [1, "col-xl-9", "col-12"], [1, "col-lg-6", "col-12"], [1, "custom", "job"], [1, "role"], ["target", "_blank", 3, "href", 4, "ngIf"], [1, "custom", "cont"], [3, "innerHTML"], [1, "tags"], [4, "ngFor", "ngForOf"], [1, "custom", "author", "d-flex", "flex-row", "p-3"], [1, "image-container"], ["alt", "", 3, "src"], [1, "identity"], [1, "name"], [3, "rowData"], ["target", "_blank", 3, "href"], [1, "color", 3, "text"]],
        template: function ProposalDetailsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-card")(1, "nb-card-header", 0)(2, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(3, "ngx-back-navigation");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(4, "h4");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(6, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(7, "div")(8, "button", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function ProposalDetailsComponent_Template_button_click_8_listener() {
              return ctx.edit();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(9, "nb-icon", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(11, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(12, "nb-card-body", 3)(13, "div", 4)(14, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(15, ProposalDetailsComponent_ng_container_15_Template, 10, 5, "ng-container", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(16, "nb-card", 7)(17, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(19, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(20, ProposalDetailsComponent_ga_proposal_status_20_Template, 1, 1, "ga-proposal-status", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(21, "div", 9)(22, "div", 4)(23, "div", 10)(24, "nb-card", 11)(25, "h6", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(27, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(28, ProposalDetailsComponent_a_28_Template, 3, 4, "a", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(29, "div", 10)(30, "nb-card", 11)(31, "h6", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(32);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(33, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(34);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(35, "date");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(36, "dateFormat");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(37, "div", 4)(38, "div", 10)(39, "nb-card", 14)(40, "h6", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(41);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(42, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(43, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(44, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(45, ProposalDetailsComponent_ng_container_45_Template, 2, 3, "ng-container", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(46, "div", 10)(47, "nb-card", 14)(48, "h6", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(49);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(50, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(51, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()()()()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(6, 14, "PROPOSALS_PAGE.PROPOSAL_DETAILS.PROPOSAL_DETAILS"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(11, 16, "BUTTONS.EDIT"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", !(ctx.employee == null ? null : ctx.employee.id));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(19, 18, "PROPOSALS_PAGE.PROPOSAL_DETAILS.STATUS"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.proposal);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(27, 20, "PROPOSALS_PAGE.PROPOSAL_DETAILS.JOB_POST_URL"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.jobPostLink);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(33, 22, "PROPOSALS_PAGE.PROPOSAL_DETAILS.PROPOSAL_SENT_ON"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(36, 27, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind2"] */ .i5U(35, 24, ctx.proposal == null ? null : ctx.proposal.valueDate, "shortDate")), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(42, 29, "PROPOSALS_PAGE.PROPOSAL_DETAILS.JOB_POST_CONTENT"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("innerHTML", ctx.jobPostContent, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵsanitizeHtml"] */ .npT);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx.proposal == null ? null : ctx.proposal.tags);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(50, 31, "PROPOSALS_PAGE.PROPOSAL_DETAILS.PROPOSAL_CONTENT"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("innerHTML", ctx.proposalContent, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵsanitizeHtml"] */ .npT);
          }
        },
        dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_8__/* .NbBadgeComponent */ .XyX, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__/* .NbButtonComponent */ .YP2, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__/* .NbCardComponent */ .SrT, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__/* .NbCardBodyComponent */ .KH5, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__/* .NbCardHeaderComponent */ .zJv, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__/* .NbIconComponent */ .tHu, _angular_common__WEBPACK_IMPORTED_MODULE_9__/* .NgForOf */ .Sq, _angular_common__WEBPACK_IMPORTED_MODULE_9__/* .NgIf */ .bT, _ui_core_shared_src_lib_components_back_navigation_back_navigation_component__WEBPACK_IMPORTED_MODULE_10__/* .BackNavigationComponent */ .r, _ui_core_shared_src_lib_directives_img_directive__WEBPACK_IMPORTED_MODULE_11__/* .ImgDirective */ .z, _table_components_proposal_status_proposal_status_component__WEBPACK_IMPORTED_MODULE_12__/* .ProposalStatusComponent */ .s, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__/* .TranslatePipe */ .D9, _angular_common__WEBPACK_IMPORTED_MODULE_9__/* .DatePipe */ .vh, _ui_core_shared_src_lib_pipes_date_format_pipe__WEBPACK_IMPORTED_MODULE_14__/* .DateFormatPipe */ .a],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.action[_ngcontent-%COMP%] {\n  box-shadow: var(--gauzy-shadow);\n  border: none;\n}\n.action[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}\n.action.info[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: var(--color-info-default);\n  color: white;\n  border-color: var(--color-info-default);\n}\n.action.info-text-1[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  color: var(--color-info-default);\n}\n.action.secondary[_ngcontent-%COMP%] {\n  color: #7e7e8f;\n}\n.action.success[_ngcontent-%COMP%] {\n  color: var(--color-success-default);\n}\n.action.warning[_ngcontent-%COMP%] {\n  color: rgb(245, 109, 88);\n}\n.action.orange[_ngcontent-%COMP%] {\n  color: rgb(255, 171, 45);\n}\n.action.primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n}\n.action.primary.soft[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: rgba(110, 73, 232, 0.1);\n}\n.action.select-nb[_ngcontent-%COMP%]     {\n  box-shadow: none;\n}\n.action.select-nb[_ngcontent-%COMP%]     .select-button {\n  box-shadow: var(--gauzy-shadow);\n  background: rgb(245, 245, 245);\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n.actions[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-2);\n  border-radius: var(--button-rectangle-border-radius);\n  padding: 2px 4px !important;\n}\n\n.gauzy-button-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n.card-custom-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n[_nghost-%COMP%]     input {\n  border-radius: var(--border-radius);\n  box-shadow: var(--gauzy-shadow) inset;\n}\n\n.tags[_ngcontent-%COMP%] {\n  padding-top: 0.25rem !important;\n  padding-bottom: 2rem !important;\n}\n\nnb-badge[_ngcontent-%COMP%] {\n  position: relative !important;\n}\nnb-badge[_ngcontent-%COMP%]:not(:first-child) {\n  margin-left: 0.3rem !important;\n}\n\n.card-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.wrapper-top[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  grid-gap: 2em;\n  text-align: center;\n}\n.wrapper-top[_ngcontent-%COMP%]   .prop-card[_ngcontent-%COMP%] {\n  align-items: center;\n}\n@media (max-width: 1120px) {\n  .wrapper-top[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n@media (max-width: 600px) {\n  .wrapper-top[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n\n.wrapper-bottom[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-gap: 2em;\n  text-align: left;\n  height: fit-content;\n}\n.wrapper-bottom[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 1em;\n}\n.wrapper-bottom[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding: 0 2em;\n}\n@media (max-width: 900px) {\n  .wrapper-bottom[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n\nh4[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 500;\n  line-height: 30px;\n  letter-spacing: 0em;\n}\n\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  height: 100%;\n  border-radius: var(--border-radius);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-header[_ngcontent-%COMP%] {\n  flex: 0 1 auto;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  overflow: auto;\n  height: calc(100vh - var(--header-height) - var(--footer-height) - 11.5rem + 7.5rem);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-footer[_ngcontent-%COMP%] {\n  flex: 0 1 auto;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-2);\n}\n\n.main-content[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-2);\n}\n\n.image-container[_ngcontent-%COMP%] {\n  object-fit: cover;\n}\n.image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 32px;\n}\n\n.custom[_ngcontent-%COMP%] {\n  align-items: center;\n  background-color: var(--gauzy-card-2);\n  margin-bottom: 1rem;\n}\n.custom[_ngcontent-%COMP%]   .role[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 17px;\n  letter-spacing: 0em;\n  text-align: left;\n}\n.custom.author[_ngcontent-%COMP%] {\n  height: 84px;\n}\n.custom.author[_ngcontent-%COMP%]   .identity[_ngcontent-%COMP%] {\n  align-items: center;\n  margin: 0 10px;\n}\n.custom.author[_ngcontent-%COMP%]   .identity[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 15px;\n  letter-spacing: 0em;\n  text-align: left;\n  color: var(--text-primary-color);\n}\n.custom.status[_ngcontent-%COMP%] {\n  height: 48px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  padding: 10px;\n}\n.custom.status[_ngcontent-%COMP%]     ga-proposal-status div > div {\n  margin-top: 5px;\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 11px;\n  letter-spacing: 0em;\n  text-align: left;\n  padding: 7px 14px;\n  border-radius: 4px;\n}\n.custom.job[_ngcontent-%COMP%] {\n  height: 84px;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  padding: 10px;\n}\n.custom.cont[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  padding: 10px;\n}"]
      });
    }
  };
  ProposalDetailsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_15__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__/* .UntilDestroy */ .d)({
    checkProperties: true
  }), (0,tslib__WEBPACK_IMPORTED_MODULE_15__/* .__metadata */ .Sn)("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__/* .ActivatedRoute */ .nX, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_6__/* .Store */ .il, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__/* .DomSanitizer */ .up, _angular_router__WEBPACK_IMPORTED_MODULE_5__/* .Router */ .Ix])], ProposalDetailsComponent);
  return ProposalDetailsComponent;
})();


/***/ }),

/***/ 91045:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ TagsOnlyComponent)
/* harmony export */ });
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(81236);
/* harmony import */ var _notes_with_tags_notes_with_tags_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14572);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(56383);
/* harmony import */ var _directives_img_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(71466);






function TagsOnlyComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("src", ctx_r0.value == null ? null : ctx_r0.value.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵsanitizeUrl"] */ .B4B);
  }
}
function TagsOnlyComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(ctx_r0.value == null ? null : ctx_r0.value.name);
  }
}
function TagsOnlyComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(ctx_r0.value == null ? null : ctx_r0.value.level);
  }
}
function TagsOnlyComponent_ng_template_5_nb_badge_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(0, "nb-badge", 6);
  }
  if (rf & 2) {
    const tag_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵstyleProp"] */ .xc7("background", ctx_r0.background(tag_r2 == null ? null : tag_r2.color))("color", ctx_r0.backgroundContrast(tag_r2.color));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("text", tag_r2.name);
  }
}
function TagsOnlyComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(0, TagsOnlyComponent_ng_template_5_nb_badge_0_Template, 1, 5, "nb-badge", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(1, "async");
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngForOf", (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(1, 1, ctx_r0.data)) == null ? null : tmp_1_0.labels);
  }
}
function TagsOnlyComponent_ng_template_7_nb_badge_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(0, "nb-badge", 6);
  }
  if (rf & 2) {
    const tag_r3 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵstyleProp"] */ .xc7("background", ctx_r0.background(tag_r3 == null ? null : tag_r3.color))("color", ctx_r0.backgroundContrast(tag_r3.color));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("text", tag_r3.name);
  }
}
function TagsOnlyComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(0, TagsOnlyComponent_ng_template_7_nb_badge_0_Template, 1, 5, "nb-badge", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(1, "async");
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngForOf", (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(1, 1, ctx_r0.data)) == null ? null : tmp_1_0.tags);
  }
}
let TagsOnlyComponent = /*#__PURE__*/(() => {
  class TagsOnlyComponent extends _notes_with_tags_notes_with_tags_component__WEBPACK_IMPORTED_MODULE_1__/* .NotesWithTagsComponent */ .i {
    constructor() {
      super(...arguments);
      this.ComponentLayoutStyleEnum = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__/* .ComponentLayoutStyleEnum */ .IE;
    }
    static {
      this.ɵfac = /*@__PURE__*/(() => {
        let ɵTagsOnlyComponent_BaseFactory;
        return function TagsOnlyComponent_Factory(__ngFactoryType__) {
          return (ɵTagsOnlyComponent_BaseFactory || (ɵTagsOnlyComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetInheritedFactory"] */ .xGo(TagsOnlyComponent)))(__ngFactoryType__ || TagsOnlyComponent);
        };
      })();
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: TagsOnlyComponent,
        selectors: [["ga-only-tags"]],
        inputs: {
          value: "value"
        },
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
        decls: 9,
        vars: 11,
        consts: [[3, "ngClass"], [4, "ngIf"], [1, "tags", "mt-2", 3, "ngClass"], [3, "ngIf"], ["height", "30", "width", "50", "alt", "Avatar", 1, "avatar", 3, "src"], ["class", "color", "position", "centered", 3, "background", "color", "text", 4, "ngFor", "ngForOf"], ["position", "centered", 1, "color", 3, "text"]],
        template: function TagsOnlyComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, TagsOnlyComponent_div_1_Template, 2, 1, "div", 1)(2, TagsOnlyComponent_div_2_Template, 2, 1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(3, TagsOnlyComponent_div_3_Template, 2, 1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(4, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(5, TagsOnlyComponent_ng_template_5_Template, 2, 3, "ng-template", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(6, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(7, TagsOnlyComponent_ng_template_7_Template, 2, 3, "ng-template", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(8, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
          }
          if (rf & 2) {
            let tmp_5_0;
            let tmp_6_0;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngClass", ctx.layout === ctx.ComponentLayoutStyleEnum.CARDS_GRID ? "contacts-img" : "");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.value == null ? null : ctx.value.imageUrl);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.value == null ? null : ctx.value.name);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.value == null ? null : ctx.value.level);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngClass", ctx.layout === "CARDS_GRID" ? "tags-right" : "");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ((tmp_5_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(6, 7, ctx.data)) == null ? null : tmp_5_0.labels == null ? null : tmp_5_0.labels.length) > 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ((tmp_6_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(8, 9, ctx.data)) == null ? null : tmp_6_0.tags == null ? null : tmp_6_0.tags.length) > 0);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__/* .NgClass */ .YU, _angular_common__WEBPACK_IMPORTED_MODULE_3__/* .NgForOf */ .Sq, _angular_common__WEBPACK_IMPORTED_MODULE_3__/* .NgIf */ .bT, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbBadgeComponent */ .XyX, _directives_img_directive__WEBPACK_IMPORTED_MODULE_5__/* .ImgDirective */ .z, _angular_common__WEBPACK_IMPORTED_MODULE_3__/* .AsyncPipe */ .Jj],
        styles: [".color[_ngcontent-%COMP%] {\n  position: static;\n  margin-top: 5px;\n  margin-right: 5px;\n  display: inline-block;\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: 0em;\n  padding: 3px 8px;\n}\n\n.tags[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n}\n\n.tags-right[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n}\n\n.contacts-img[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n\n.avatar[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n}"]
      });
    }
  }
  return TagsOnlyComponent;
})();

/***/ }),

/***/ 93141:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ ProposalEditComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(73014);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(4637);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(26860);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10936);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(9620);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(19223);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(47594);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(42898);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(12990);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(30920);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(60911);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(15480);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(76527);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(3289);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(54263);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(26024);
/* harmony import */ var _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38546);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(98106);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(56383);
/* harmony import */ var ckeditor4_angular__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(76682);
/* harmony import */ var _ui_core_shared_src_lib_components_back_navigation_back_navigation_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(90910);
/* harmony import */ var _ui_core_shared_src_lib_tags_tags_color_input_tags_color_input_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(62177);
/* harmony import */ var _ui_core_shared_src_lib_contact_select_contact_select_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(84597);

var ProposalEditComponent_1;





















let ProposalEditComponent = /*#__PURE__*/(() => {
  let ProposalEditComponent = class ProposalEditComponent extends _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_0__/* .TranslationBaseComponent */ .K {
    static {
      ProposalEditComponent_1 = this;
    }
    static buildForm(fb, self) {
      return fb.group({
        jobPostUrl: [],
        valueDate: [self._organizationSettingService.getDateFromOrganizationSettings(), _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .Validators */ .k0.required],
        jobPostContent: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .Validators */ .k0.required],
        proposalContent: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .Validators */ .k0.required],
        tags: [],
        organizationContact: [],
        employee: []
      }, {
        validators: [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_2__/* .UrlPatternValidator */ .i.websiteUrlValidator('jobPostUrl')]
      });
    }
    constructor(translateService, _route, _fb, _router, _toastrService, _proposalsService, _organizationSettingService, _cdRef, _errorHandlingService) {
      super(translateService);
      this.translateService = translateService;
      this._route = _route;
      this._fb = _fb;
      this._router = _router;
      this._toastrService = _toastrService;
      this._proposalsService = _proposalsService;
      this._organizationSettingService = _organizationSettingService;
      this._cdRef = _cdRef;
      this._errorHandlingService = _errorHandlingService;
      this.ckConfig = _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_3__/* .ckEditorConfig */ .a;
      /*
       * Proposal Mutation Form
       */
      this.form = ProposalEditComponent_1.buildForm(this._fb, this);
    }
    ngOnInit() {
      this._route.data.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .debounceTime */ .B)(100), (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_5__/* .distinctUntilChange */ .nI)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .filter */ .p)(data => !!data && !!data.proposal), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .M)(({
        proposal
      }) => this.selectProposal(proposal)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .M)(() => this._patchFormValue()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__/* .untilDestroyed */ .s)(this)).subscribe();
    }
    ngAfterViewInit() {
      this._cdRef.detectChanges();
    }
    /**
     * Selects the proposal and sets the form values.
     *
     * @param proposal
     */
    selectProposal(proposal) {
      try {
        this.proposal = Object.assign({}, proposal, {
          jobPostLink: proposal.jobPostUrl ? proposal.jobPostUrl : '',
          jobTitle: proposal.jobPostContent.toString().replace(/<[^>]*(>|$)|&nbsp;/g, '').split(/[\s,\n]+/).slice(0, 3).join(' '),
          author: proposal.employee
        });
      } catch (error) {
        console.log('Error while selecting proposal', error);
        this._router.navigate(['/pages/sales/proposals']);
      }
    }
    /**
     * Patches the form with values from the current proposal, if available.
     *
     * This method populates the form fields with data from the existing proposal,
     * which is useful for initializing or editing a form.
     */
    _patchFormValue() {
      if (!this.proposal) {
        console.warn('No proposal found to patch the form.');
        return;
      }
      const {
        jobPostUrl,
        valueDate,
        jobPostContent,
        proposalContent,
        organizationContact,
        tags = [],
        employee
      } = this.proposal;
      this.form.patchValue({
        jobPostUrl,
        valueDate,
        jobPostContent,
        proposalContent,
        organizationContact,
        tags,
        employee
      });
      this.form.updateValueAndValidity(); // Ensure the form's state is consistent
    }
    /**
     * Edits an existing proposal if the form is valid and a proposal is specified.
     *
     * This function updates a proposal based on the form's input values. It validates the form,
     * extracts necessary information, and uses the `proposalsService` to perform the update.
     * Success or error messages are displayed based on the outcome.
     *
     * @returns A promise that resolves upon successful editing or rejects with an error.
     */
    editProposal() {
      var _this = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A)(function* () {
        // Check if the form is valid and the proposal exists
        if (!_this.form.valid || !_this.proposal) {
          return; // Return early if preconditions are not met
        }
        try {
          const {
            organizationId,
            tenantId
          } = _this.proposal; // Extract the tenant ID & organization ID from the existing proposal
          // Get the necessary data from the form
          const {
            jobPostContent,
            jobPostUrl,
            proposalContent,
            tags,
            organizationContact
          } = _this.form.value;
          // Update the proposal with new values
          yield _this._proposalsService.update(_this.proposal.id, {
            tenantId,
            organizationId,
            jobPostContent,
            jobPostUrl,
            proposalContent,
            tags,
            organizationContact
          });
          // Show success message upon successful update
          _this._toastrService.success('NOTES.PROPOSALS.EDIT_PROPOSAL');
          // Navigate to the proposals page after editing
          _this._router.navigate(['/pages/sales/proposals']);
        } catch (error) {
          console.log('Error while editing proposal', error);
          // Handle errors that occur during the update
          _this._errorHandlingService.handleError(error);
        }
      })();
    }
    /**
     * Updates the 'tags' field in the form based on the selected tags.
     *
     * @param tags An array of selected tags to be set in the form.
     */
    selectedTagsEvent(tags) {
      this.form.get('tags').setValue(tags);
      this.form.get('tags').updateValueAndValidity();
    }
    static {
      this.ɵfac = function ProposalEditComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || ProposalEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__/* .TranslateService */ .c$), _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_router__WEBPACK_IMPORTED_MODULE_12__/* .ActivatedRoute */ .nX), _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .UntypedFormBuilder */ .ze), _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_router__WEBPACK_IMPORTED_MODULE_12__/* .Router */ .Ix), _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_13__/* .ToastrService */ .t), _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_14__/* .ProposalsService */ .p), _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_15__/* .OrganizationSettingService */ .r), _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_core__WEBPACK_IMPORTED_MODULE_10__/* .ChangeDetectorRef */ .gRc), _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_16__/* .ErrorHandlingService */ .X));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵdefineComponent"] */ .VBU({
        type: ProposalEditComponent,
        selectors: [["ngx-proposal-edit"]],
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
        decls: 44,
        vars: 33,
        consts: [[1, "main"], [1, "d-flex"], [3, "formGroup"], [1, "container"], [1, "row"], [1, "col-sm-4"], [1, "form-group"], [1, "label"], ["nbInput", "", "fullWidth", "", "type", "text", "formControlName", "jobPostUrl", "autocomplete", "on", 3, "placeholder"], ["formControlName", "organizationContact", 3, "addTag", "clearable", "searchable", "placeholder"], [3, "selectedTagsEvent", "selectedTags", "isOrgLevel"], [1, "row", "text-editors"], [1, "col-sm-6"], ["formControlName", "jobPostContent", 3, "config"], ["formControlName", "proposalContent", 3, "config"], [1, "text-left"], ["status", "success", "nbButton", "", 1, "edit-btn", 3, "click", "disabled"]],
        template: function ProposalEditComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementStart"] */ .j41(0, "nb-card", 0)(1, "nb-card-header", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelement"] */ .nrm(2, "ngx-back-navigation");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementStart"] */ .j41(3, "h4");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵtext"] */ .EFF(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵpipe"] */ .nI1(5, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementStart"] */ .j41(6, "nb-card-body")(7, "form", 2)(8, "div", 3)(9, "div", 4)(10, "div", 5)(11, "div", 6)(12, "label", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵtext"] */ .EFF(13);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵpipe"] */ .nI1(14, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelement"] */ .nrm(15, "input", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵpipe"] */ .nI1(16, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementStart"] */ .j41(17, "div", 5)(18, "div", 6)(19, "label", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵtext"] */ .EFF(20);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵpipe"] */ .nI1(21, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelement"] */ .nrm(22, "ga-contact-select", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵpipe"] */ .nI1(23, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementStart"] */ .j41(24, "div", 5)(25, "div", 6)(26, "ga-tags-color-input", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵlistener"] */ .bIt("selectedTagsEvent", function ProposalEditComponent_Template_ga_tags_color_input_selectedTagsEvent_26_listener($event) {
              return ctx.selectedTagsEvent($event);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementEnd"] */ .k0s()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementStart"] */ .j41(27, "div", 11)(28, "div", 12)(29, "div", 6)(30, "label", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵtext"] */ .EFF(31);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵpipe"] */ .nI1(32, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelement"] */ .nrm(33, "ckeditor", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementStart"] */ .j41(34, "div", 12)(35, "div", 6)(36, "label", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵtext"] */ .EFF(37);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵpipe"] */ .nI1(38, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelement"] */ .nrm(39, "ckeditor", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementEnd"] */ .k0s()()()()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementStart"] */ .j41(40, "nb-card-footer", 15)(41, "button", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵlistener"] */ .bIt("click", function ProposalEditComponent_Template_button_click_41_listener() {
              return ctx.editProposal();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵtext"] */ .EFF(42);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵpipe"] */ .nI1(43, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementEnd"] */ .k0s()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵpipeBind1"] */ .bMT(5, 17, "PROPOSALS_PAGE.EDIT_PROPOSAL.EDIT_PROPOSAL"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵproperty"] */ .Y8G("formGroup", ctx.form);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵadvance"] */ .R7$(6);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵpipeBind1"] */ .bMT(14, 19, "PROPOSALS_PAGE.EDIT_PROPOSAL.JOB_POST_URL"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵpipeBind1"] */ .bMT(16, 21, "PROPOSALS_PAGE.EDIT_PROPOSAL.PLACEHOLDER.JOB_POST_URL"));
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵpipeBind1"] */ .bMT(21, 23, "POP_UPS.CONTACT"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵproperty"] */ .Y8G("addTag", true)("clearable", true)("searchable", true)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵpipeBind1"] */ .bMT(23, 25, "POP_UPS.CONTACT"));
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵproperty"] */ .Y8G("selectedTags", ctx.form.get("tags").value)("isOrgLevel", true);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵpipeBind1"] */ .bMT(32, 27, "PROPOSALS_PAGE.EDIT_PROPOSAL.JOB_POST_CONTENT"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵproperty"] */ .Y8G("config", ctx.ckConfig);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵpipeBind1"] */ .bMT(38, 29, "PROPOSALS_PAGE.EDIT_PROPOSAL.PROPOSAL_CONTENT"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵproperty"] */ .Y8G("config", ctx.ckConfig);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵproperty"] */ .Y8G("disabled", ctx.form.invalid);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵpipeBind1"] */ .bMT(43, 31, "PROPOSALS_PAGE.EDIT_PROPOSAL.EDIT_PROPOSAL_BUTTON"), " ");
          }
        },
        dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_17__/* .NbButtonComponent */ .YP2, _nebular_theme__WEBPACK_IMPORTED_MODULE_17__/* .NbCardComponent */ .SrT, _nebular_theme__WEBPACK_IMPORTED_MODULE_17__/* .NbCardBodyComponent */ .KH5, _nebular_theme__WEBPACK_IMPORTED_MODULE_17__/* .NbCardFooterComponent */ .VDm, _nebular_theme__WEBPACK_IMPORTED_MODULE_17__/* .NbCardHeaderComponent */ .zJv, _nebular_theme__WEBPACK_IMPORTED_MODULE_17__/* .NbInputDirective */ .i6h, ckeditor4_angular__WEBPACK_IMPORTED_MODULE_18__/* .CKEditorComponent */ .h, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* ["ɵNgNoValidate"] */ .qT, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .DefaultValueAccessor */ .me, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .NgControlStatus */ .BC, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .NgControlStatusGroup */ .cb, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .FormGroupDirective */ .j4, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .FormControlName */ .JD, _ui_core_shared_src_lib_components_back_navigation_back_navigation_component__WEBPACK_IMPORTED_MODULE_19__/* .BackNavigationComponent */ .r, _ui_core_shared_src_lib_tags_tags_color_input_tags_color_input_component__WEBPACK_IMPORTED_MODULE_20__/* .TagsColorInputComponent */ .i, _ui_core_shared_src_lib_contact_select_contact_select_component__WEBPACK_IMPORTED_MODULE_21__/* .ContactSelectComponent */ .O, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__/* .TranslatePipe */ .D9],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.text-editors[_ngcontent-%COMP%] {\n  \n\n  padding: 0 15px;\n}\n\n[_nghost-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 500;\n  line-height: 30px;\n  letter-spacing: 0em;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  height: 100%;\n  border-radius: var(--border-radius);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-header[_ngcontent-%COMP%] {\n  flex: 0 1 auto;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  overflow: overlay;\n  height: calc(100vh - var(--header-height) - var(--footer-height) - 11.5rem + 3.5rem);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-footer[_ngcontent-%COMP%] {\n  flex: 0 1 auto;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%], \n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%], \n[_nghost-%COMP%]   nb-card-footer[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n}\n[_nghost-%COMP%]     input, \n[_nghost-%COMP%]     nb-select.appearance-outline.status-basic .select-button, \n[_nghost-%COMP%]     .ng-select .ng-select-container {\n  background-color: var(--gauzy-card-1) !important;\n  border: none;\n  height: 42px !important;\n}\n[_nghost-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder, \n[_nghost-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {\n  top: unset !important;\n}\n[_nghost-%COMP%]     label, \n[_nghost-%COMP%]     .label {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  color: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]     textarea {\n  background-color: var(--gauzy-card-1) !important;\n  border: none;\n}\n[_nghost-%COMP%]     .ng-select .ng-select-container input, \n[_nghost-%COMP%]     nb-tag-list input {\n  background-color: unset !important;\n}"]
      });
    }
  };
  return ProposalEditComponent;
})();
ProposalEditComponent = ProposalEditComponent_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_22__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__/* .UntilDestroy */ .d)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_22__/* .__metadata */ .Sn)("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__/* .TranslateService */ .c$, _angular_router__WEBPACK_IMPORTED_MODULE_12__/* .ActivatedRoute */ .nX, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .UntypedFormBuilder */ .ze, _angular_router__WEBPACK_IMPORTED_MODULE_12__/* .Router */ .Ix, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_13__/* .ToastrService */ .t, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_14__/* .ProposalsService */ .p, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_15__/* .OrganizationSettingService */ .r, _angular_core__WEBPACK_IMPORTED_MODULE_10__/* .ChangeDetectorRef */ .gRc, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_16__/* .ErrorHandlingService */ .X])], ProposalEditComponent);


/***/ }),

/***/ 95959:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ NoDataMessageComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(55598);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(41598);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19223);
/* harmony import */ var _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38546);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26860);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56383);







const _c0 = [[["", "message", ""]]];
const _c1 = ["[message]"];
let NoDataMessageComponent = /*#__PURE__*/(() => {
  let NoDataMessageComponent = class NoDataMessageComponent extends _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_0__/* .TranslationBaseComponent */ .K {
    constructor(translateService) {
      super(translateService);
      this.translateService = translateService;
      this.title = this.getTranslation('SM_TABLE.NO_DATA_MESSAGE');
    }
    ngOnInit() {}
    static {
      this.ɵfac = function NoDataMessageComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || NoDataMessageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__/* .TranslateService */ .c$));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineComponent"] */ .VBU({
        type: NoDataMessageComponent,
        selectors: [["ngx-no-data-message"]],
        inputs: {
          title: "title",
          message: "message"
        },
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
        ngContentSelectors: _c1,
        decls: 11,
        vars: 2,
        consts: [[1, "p-0", "no-data-found"], [1, "row", "align-items-center", "h-100"], [1, "col-12"], [1, "text-center", "d-flex", "justify-content-center", "py-3"], ["icon", "bar-chart-2-outline", 1, "no-record-icon"], [1, "text-center", "m-0"], [1, "text-center"]],
        template: function NoDataMessageComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵprojectionDef"] */ .NAR(_c0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "nb-card", 0)(1, "nb-card-body")(2, "div", 1)(3, "div", 2)(4, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(5, "nb-icon", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(6, "h5", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(8, "p", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵprojection"] */ .SdG(10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", ctx.title, " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", ctx.message, " ");
          }
        },
        dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbCardComponent */ .SrT, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbCardBodyComponent */ .KH5, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbIconComponent */ .tHu],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.no-data-found[_ngcontent-%COMP%] {\n  overflow-y: hidden;\n  background-color: var(--gauzy-card-1) !important;\n  height: 100% !important;\n  margin: 0;\n}\n\nh5[_ngcontent-%COMP%], \ndiv[_ngcontent-%COMP%] {\n  color: var(--gauzy-text-color-1);\n  font-weight: 600;\n  font-size: 18px;\n}\n\ndiv[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n}\n\np[_ngcontent-%COMP%] {\n  color: var(--gauzy-text-color-2);\n}\n\n.no-record-icon[_ngcontent-%COMP%] {\n  transform: rotate(0.75turn) scaleY(-1);\n  font-size: 48px;\n}\n\n[_nghost-%COMP%] {\n  height: 100%;\n}"]
      });
    }
  };
  NoDataMessageComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .UntilDestroy */ .d)({
    checkProperties: true
  }), (0,tslib__WEBPACK_IMPORTED_MODULE_4__/* .__metadata */ .Sn)("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__/* .TranslateService */ .c$])], NoDataMessageComponent);
  return NoDataMessageComponent;
})();


/***/ }),

/***/ 98203:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddEditProposalTemplateComponent: () => (/* reexport safe */ _lib_proposal_template_components_add_edit_proposal_template_add_edit_proposal_template_component__WEBPACK_IMPORTED_MODULE_2__.L),
/* harmony export */   JobProposalModule: () => (/* reexport safe */ _lib_proposal_job_proposal_module__WEBPACK_IMPORTED_MODULE_4__.K),
/* harmony export */   JobProposalTemplateModule: () => (/* reexport safe */ _lib_proposal_template_job_proposal_template_module__WEBPACK_IMPORTED_MODULE_0__.JobProposalTemplateModule),
/* harmony export */   JobTitleComponent: () => (/* reexport safe */ _lib_proposal_components_table_components_job_title_job_title_component__WEBPACK_IMPORTED_MODULE_11__.t),
/* harmony export */   ProposalDetailsComponent: () => (/* reexport safe */ _lib_proposal_components_proposal_details_proposal_details_component__WEBPACK_IMPORTED_MODULE_8__.S),
/* harmony export */   ProposalDetailsResolver: () => (/* reexport safe */ _lib_proposal_resolvers_proposal_details_resolver__WEBPACK_IMPORTED_MODULE_13__.T),
/* harmony export */   ProposalEditComponent: () => (/* reexport safe */ _lib_proposal_components_proposal_edit_proposal_edit_component__WEBPACK_IMPORTED_MODULE_9__.A),
/* harmony export */   ProposalLayoutComponent: () => (/* reexport safe */ _lib_proposal_components_proposal_layout_component__WEBPACK_IMPORTED_MODULE_6__.k),
/* harmony export */   ProposalPieChartComponent: () => (/* reexport safe */ _lib_proposal_components_proposal_pie_chart_proposal_pie_chart_component__WEBPACK_IMPORTED_MODULE_10__.E),
/* harmony export */   ProposalRegisterComponent: () => (/* reexport safe */ _lib_proposal_components_proposal_register_proposal_register_component__WEBPACK_IMPORTED_MODULE_7__.n),
/* harmony export */   ProposalStatusComponent: () => (/* reexport safe */ _lib_proposal_components_table_components_proposal_status_proposal_status_component__WEBPACK_IMPORTED_MODULE_12__.s),
/* harmony export */   ProposalTemplateComponent: () => (/* reexport safe */ _lib_proposal_template_components_proposal_template_proposal_template_component__WEBPACK_IMPORTED_MODULE_3__.w),
/* harmony export */   ProposalTemplateTabsEnum: () => (/* reexport safe */ _lib_proposal_template_components_proposal_template_proposal_template_component__WEBPACK_IMPORTED_MODULE_3__.K),
/* harmony export */   createJobProposalTemplateRoutes: () => (/* reexport safe */ _lib_proposal_template_job_proposal_template_routes__WEBPACK_IMPORTED_MODULE_1__.a),
/* harmony export */   createProposalsRoutes: () => (/* reexport safe */ _lib_proposal_job_proposal_routes__WEBPACK_IMPORTED_MODULE_5__.G)
/* harmony export */ });
/* harmony import */ var _lib_proposal_template_job_proposal_template_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(97206);
/* harmony import */ var _lib_proposal_template_job_proposal_template_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79120);
/* harmony import */ var _lib_proposal_template_components_add_edit_proposal_template_add_edit_proposal_template_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22852);
/* harmony import */ var _lib_proposal_template_components_proposal_template_proposal_template_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19486);
/* harmony import */ var _lib_proposal_job_proposal_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39756);
/* harmony import */ var _lib_proposal_job_proposal_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9366);
/* harmony import */ var _lib_proposal_components_proposal_layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1513);
/* harmony import */ var _lib_proposal_components_proposal_register_proposal_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(23921);
/* harmony import */ var _lib_proposal_components_proposal_details_proposal_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(90349);
/* harmony import */ var _lib_proposal_components_proposal_edit_proposal_edit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(93141);
/* harmony import */ var _lib_proposal_components_proposal_pie_chart_proposal_pie_chart_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(40159);
/* harmony import */ var _lib_proposal_components_table_components_job_title_job_title_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(14433);
/* harmony import */ var _lib_proposal_components_table_components_proposal_status_proposal_status_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(44161);
/* harmony import */ var _lib_proposal_resolvers_proposal_details_resolver__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(78537);
/**
 * Public API Surface of @gauzy/plugin-job-proposal-ui
 */
// Proposal Templates Module and Routes


// Proposal Template Components


// Proposals Module and Routes


// Proposal Components





// Table Components


// Proposal Resolvers


/***/ }),

/***/ 99434:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   y: () => (/* binding */ ProposalTemplateSelectComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(73014);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(55598);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(10936);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4644);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4478);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39855);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(52738);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(41598);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(26024);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(65735);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(71924);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(54263);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(14572);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(56383);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(19223);














const _c0 = ["*"];
function ProposalTemplateSelectComponent_nb_option_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-option", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const proposalTemplate_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("value", proposalTemplate_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", proposalTemplate_r1.name, " ");
  }
}
let ProposalTemplateSelectComponent = /*#__PURE__*/(() => {
  let ProposalTemplateSelectComponent = class ProposalTemplateSelectComponent {
    get employeeId() {
      return this._employeeId;
    }
    set employeeId(value) {
      this._employeeId = value;
      this.subject$.next(true);
    }
    set proposalTemplateId(val) {
      this._proposalTemplateId = val;
      // Emit selected proposal template
      this.onChange(val);
      this.onTouched(val);
    }
    get proposalTemplateId() {
      return this._proposalTemplateId;
    }
    constructor(_proposalTemplateService, _store, _errorHandlingService) {
      this._proposalTemplateService = _proposalTemplateService;
      this._store = _store;
      this._errorHandlingService = _errorHandlingService;
      this.proposalTemplates = [];
      this.subject$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__/* .Subject */ .B();
      this.onChange = () => {};
      this.onTouched = () => {};
      this.disabled = false;
      this.multiple = false;
      this.selectedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .bkB();
    }
    ngOnInit() {
      this.subject$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .debounceTime */ .B)(500), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .tap */ .M)(() => this.getProposalTemplates()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .untilDestroyed */ .s)(this)).subscribe();
      this._store.selectedOrganization$.pipe((0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_5__/* .distinctUntilChange */ .nI)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .filter */ .p)(organization => !!organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .tap */ .M)(organization => this.organization = organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .tap */ .M)(() => this.subject$.next(true)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .untilDestroyed */ .s)(this)).subscribe();
    }
    /**
     * Write value
     * @param value - The value to be written, can be a string or an array of strings
     */
    writeValue(value) {
      if (this.multiple) {
        this._proposalTemplateId = value instanceof Array ? value : [value];
      } else {
        this._proposalTemplateId = value;
      }
    }
    /**
     * On selected change
     * @param selectedItem - The ID of the selected item
     */
    onSelectedChange(selectedItem) {
      const proposalTemplate = this.proposalTemplates.find(({
        id
      }) => id === selectedItem);
      this.selectedChange.emit(proposalTemplate || null);
    }
    /**
     * Register on change
     * @param fn - A function that takes a number (rating) as an argument and returns void
     */
    registerOnChange(fn) {
      this.onChange = fn;
    }
    /**
     * Register on touched
     * @param fn - A function that takes no arguments and returns void
     */
    registerOnTouched(fn) {
      this.onTouched = fn;
    }
    /**
     * Set disabled state
     * @param isDisabled - A boolean indicating whether the control should be disabled
     */
    setDisabledState(isDisabled) {
      this.disabled = isDisabled;
    }
    /**
     * Get proposal templates
     */
    getProposalTemplates() {
      var _this = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A)(function* () {
        try {
          const {
            id: organizationId,
            tenantId
          } = _this.organization;
          const {
            employeeId
          } = _this;
          const {
            items = []
          } = yield _this._proposalTemplateService.getAll({
            where: {
              organizationId,
              tenantId,
              ...(employeeId ? {
                employeeId
              } : {})
            }
          });
          _this.proposalTemplates = items;
          _this.defaultSelectedTemplate();
        } catch (error) {
          console.log('Error while getting proposal templates', error);
          // Handle and log errors
          _this._errorHandlingService.handleError(error);
        }
      })();
    }
    /**
     * Set default selected proposal template
     */
    defaultSelectedTemplate() {
      // Find default proposal template
      const proposalTemplate = this.proposalTemplates.find(({
        isDefault
      }) => isDefault === true);
      this.proposalTemplateId = proposalTemplate?.id || null;
      // Emit selected proposal template
      this.onSelectedChange(this.proposalTemplateId);
    }
    static {
      this.ɵfac = function ProposalTemplateSelectComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || ProposalTemplateSelectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_8__/* .ProposalTemplateService */ .K), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_9__/* .Store */ .il), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_10__/* .ErrorHandlingService */ .X));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: ProposalTemplateSelectComponent,
        selectors: [["ngx-proposal-template-select"]],
        inputs: {
          disabled: "disabled",
          multiple: "multiple",
          employeeId: "employeeId"
        },
        outputs: {
          selectedChange: "selectedChange"
        },
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵProvidersFeature"] */ .Jv_([{
          provide: _angular_forms__WEBPACK_IMPORTED_MODULE_11__/* .NG_VALUE_ACCESSOR */ .kq,
          useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__/* .forwardRef */ .Rfq)(() => ProposalTemplateSelectComponent),
          multi: true
        }])],
        ngContentSelectors: _c0,
        decls: 4,
        vars: 7,
        consts: [[1, "multiple-select", 3, "selectedChange", "disabled", "multiple", "placeholder", "selected"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]],
        template: function ProposalTemplateSelectComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵprojectionDef"] */ .NAR();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-select", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(1, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayListener"] */ .mxI("selectedChange", function ProposalTemplateSelectComponent_Template_nb_select_selectedChange_0_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayBindingSet"] */ .DH7(ctx.proposalTemplateId, $event) || (ctx.proposalTemplateId = $event);
              return $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("selectedChange", function ProposalTemplateSelectComponent_Template_nb_select_selectedChange_0_listener($event) {
              return ctx.onSelectedChange($event);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(2, ProposalTemplateSelectComponent_nb_option_2_Template, 2, 2, "nb-option", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵprojection"] */ .SdG(3);
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("disabled", ctx.disabled)("multiple", ctx.multiple)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(1, 5, "PROPOSAL_TEMPLATE.SELECT_PROPOSAL_TEMPLATE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayProperty"] */ .R50("selected", ctx.proposalTemplateId);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx.proposalTemplates);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__/* .NgForOf */ .Sq, _nebular_theme__WEBPACK_IMPORTED_MODULE_13__/* .NbSelectComponent */ .S81, _nebular_theme__WEBPACK_IMPORTED_MODULE_13__/* .NbOptionComponent */ .ZJ2, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__/* .TranslatePipe */ .D9],
        styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n[_nghost-%COMP%]   nb-select[_ngcontent-%COMP%] {\n  width: 100%;\n}"]
      });
    }
  };
  ProposalTemplateSelectComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_15__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .UntilDestroy */ .d)(), (0,tslib__WEBPACK_IMPORTED_MODULE_15__/* .__metadata */ .Sn)("design:paramtypes", [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_8__/* .ProposalTemplateService */ .K, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_9__/* .Store */ .il, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_10__/* .ErrorHandlingService */ .X])], ProposalTemplateSelectComponent);
  return ProposalTemplateSelectComponent;
})();


/***/ })

}]);