"use strict";
(self["webpackChunkgauzy"] = self["webpackChunkgauzy"] || []).push([[2271],{

/***/ 11718:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G: () => (/* binding */ ScheduleRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(908);
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94026);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26860);




const routes = [{
  path: '',
  component: _layout_layout_component__WEBPACK_IMPORTED_MODULE_0__/* .LayoutComponent */ .C,
  children: [{
    path: '',
    loadChildren: () => Promise.all(/* import() */[__webpack_require__.e(170), __webpack_require__.e(5467)]).then(__webpack_require__.bind(__webpack_require__, 5467)).then(m => m.AvailabilitySlotsModule)
  }]
}];
let ScheduleRoutingModule = /*#__PURE__*/(() => {
  class ScheduleRoutingModule {
    static {
      this.ɵfac = function ScheduleRoutingModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || ScheduleRoutingModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineNgModule"] */ .$C({
        type: ScheduleRoutingModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__/* .RouterModule */ .iI.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__/* .RouterModule */ .iI]
      });
    }
  }
  return ScheduleRoutingModule;
})();

/***/ }),

/***/ 66781:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G: () => (/* binding */ AvailabilitySlotsService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80189);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(64913);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26860);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45715);





let AvailabilitySlotsService = /*#__PURE__*/(() => {
  class AvailabilitySlotsService {
    constructor(http) {
      this.http = http;
      this.AVAILABILITY_SLOTS_BASE_URI = `${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_0__/* .API_PREFIX */ .m4}/availability-slots`;
    }
    create(createInput) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ ._)(this.http.post(this.AVAILABILITY_SLOTS_BASE_URI, createInput));
    }
    createBulk(createInput) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ ._)(this.http.post(this.AVAILABILITY_SLOTS_BASE_URI + '/bulk', createInput));
    }
    getAll(relations, findInput) {
      const data = JSON.stringify({
        relations,
        findInput
      });
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ ._)(this.http.get(this.AVAILABILITY_SLOTS_BASE_URI, {
        params: {
          data
        }
      }));
    }
    update(id, updateInput) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ ._)(this.http.put(`${this.AVAILABILITY_SLOTS_BASE_URI}/${id}`, updateInput));
    }
    delete(id) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ ._)(this.http.delete(`${this.AVAILABILITY_SLOTS_BASE_URI}/${id}`));
    }
    static {
      this.ɵfac = function AvailabilitySlotsService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || AvailabilitySlotsService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵinject"] */ .KVO(_angular_common_http__WEBPACK_IMPORTED_MODULE_3__/* .HttpClient */ .Qq));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineInjectable"] */ .jDH({
        token: AvailabilitySlotsService,
        factory: AvailabilitySlotsService.ɵfac
      });
    }
  }
  return AvailabilitySlotsService;
})();

/***/ }),

/***/ 72271:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScheduleModule: () => (/* binding */ ScheduleModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14572);
/* harmony import */ var _schedule_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11718);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(38834);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(56383);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(19223);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(66781);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26860);








let ScheduleModule = /*#__PURE__*/(() => {
  class ScheduleModule {
    static {
      this.ɵfac = function ScheduleModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || ScheduleModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineNgModule"] */ .$C({
        type: ScheduleModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineInjector"] */ .G2t({
        providers: [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_2__/* .AvailabilitySlotsService */ .G],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__/* .CommonModule */ .MD, _schedule_routing_module__WEBPACK_IMPORTED_MODULE_0__/* .ScheduleRoutingModule */ .G, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_4__/* .SharedModule */ .G, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbRouteTabsetModule */ .x$5, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbCardModule */ .lVF, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__/* .TranslateModule */ .h.forChild()]
      });
    }
  }
  return ScheduleModule;
})();

/***/ }),

/***/ 94026:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ LayoutComponent)
/* harmony export */ });
/* harmony import */ var _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38546);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26860);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19223);
/* harmony import */ var _packages_ui_core_shared_src_lib_components_back_navigation_back_navigation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(90910);
/* harmony import */ var _packages_ui_core_shared_src_lib_components_header_title_header_title_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(49072);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(56383);







let LayoutComponent = /*#__PURE__*/(() => {
  class LayoutComponent extends _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_0__/* .TranslationBaseComponent */ .K {
    constructor(translateService) {
      super(translateService);
      this.translateService = translateService;
      this.tabs = [{
        title: this.getTranslation('SCHEDULE.RECURRING_AVAILABILITY'),
        route: '/pages/employees/schedules/recurring-availability'
      }, {
        title: this.getTranslation('SCHEDULE.DATE_SPECIFIC_AVAILABILITY'),
        route: '/pages/employees/schedules/date-specific-availability'
      }];
    }
    ngOnInit() {}
    static {
      this.ɵfac = function LayoutComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || LayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__/* .TranslateService */ .c$));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineComponent"] */ .VBU({
        type: LayoutComponent,
        selectors: [["ng-component"]],
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
        decls: 10,
        vars: 4,
        consts: [[1, "card-header-title"], [1, "p-0"], [3, "tabs"]],
        template: function LayoutComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "nb-card")(1, "nb-card-header", 0)(2, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(3, "ngx-back-navigation");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(4, "h4")(5, "ngx-header-title");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(7, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(8, "nb-card-body", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(9, "nb-route-tabset", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(7, 2, "MENU.SCHEDULES"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("tabs", ctx.tabs);
          }
        },
        dependencies: [_packages_ui_core_shared_src_lib_components_back_navigation_back_navigation_component__WEBPACK_IMPORTED_MODULE_3__/* .BackNavigationComponent */ .r, _packages_ui_core_shared_src_lib_components_header_title_header_title_component__WEBPACK_IMPORTED_MODULE_4__/* .HeaderTitleComponent */ .X, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbRouteTabsetComponent */ .ssE, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbCardComponent */ .SrT, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbCardBodyComponent */ .KH5, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbCardHeaderComponent */ .zJv, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__/* .TranslatePipe */ .D9],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  overflow: unset;\n}\n[_nghost-%COMP%]     nb-route-tabset .route-tab .tab-link {\n  border-radius: var(--border-radius) var(--border-radius) 0 0;\n}\n[_nghost-%COMP%]     nb-route-tabset .route-tab .tab-link svg {\n  fill: var(--text-primary-color);\n}\n[_nghost-%COMP%]     nb-route-tabset .route-tab .tab-link span {\n  display: inline-block;\n  text-transform: initial;\n}\n[_nghost-%COMP%]     nb-route-tabset .route-tab .tab-link span:first-letter {\n  text-transform: uppercase;\n}"]
      });
    }
  }
  return LayoutComponent;
})();

/***/ })

}]);