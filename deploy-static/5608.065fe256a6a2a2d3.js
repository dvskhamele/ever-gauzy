"use strict";
(self["webpackChunkgauzy"] = self["webpackChunkgauzy"] || []).push([[5608],{

/***/ 42472:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* binding */ FeatureToggleModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14572);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(56383);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19223);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11904);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(69520);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);






let FeatureToggleModule = /*#__PURE__*/(() => {
  class FeatureToggleModule {
    static {
      this.ɵfac = function FeatureToggleModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || FeatureToggleModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .$C({
        type: FeatureToggleModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .G2t({
        providers: [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_1__/* .FeatureService */ .w, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_2__/* .FeatureStoreService */ .v],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__/* .CommonModule */ .MD, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbButtonModule */ .P5N, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbCardModule */ .lVF, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbCheckboxModule */ .Ad8, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbIconModule */ .clu, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbListModule */ .PD_, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbSpinnerModule */ .gYs, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbToggleModule */ .jVr, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__/* .TranslateModule */ .h.forChild()]
      });
    }
  }
  return FeatureToggleModule;
})();

/***/ }),

/***/ 48690:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   i: () => (/* binding */ GeneralSettingComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56383);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19223);



let GeneralSettingComponent = /*#__PURE__*/(() => {
  class GeneralSettingComponent {
    constructor() {}
    ngOnInit() {}
    static {
      this.ɵfac = function GeneralSettingComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || GeneralSettingComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: GeneralSettingComponent,
        selectors: [["ga-general-settings"]],
        standalone: false,
        decls: 6,
        vars: 6,
        consts: [[1, "card-scroll"]],
        template: function GeneralSettingComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-card", 0)(1, "nb-card-header")(2, "h4");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(4, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(5, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate2"] */ .Lme("", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(4, 2, "MENU.SETTINGS"), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(5, 4, "MENU.GENERAL"), "");
          }
        },
        dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbCardComponent */ .SrT, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbCardHeaderComponent */ .zJv, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__/* .TranslatePipe */ .D9],
        encapsulation: 2
      });
    }
  }
  return GeneralSettingComponent;
})();

/***/ }),

/***/ 69520:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: () => (/* binding */ FeatureStoreService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88326);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(70078);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(55801);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39855);
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86014);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(26860);
/* harmony import */ var _feature_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(11904);






let FeatureStoreService = /*#__PURE__*/(() => {
  class FeatureStoreService {
    constructor(_featureService) {
      this._featureService = _featureService;
      this._features$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__/* .BehaviorSubject */ .t([]);
      this.features$ = this._features$.asObservable();
      this._blocks$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__/* .BehaviorSubject */ .t([]);
      this.blocks$ = this._blocks$.asObservable();
      this._featureOrganizations$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__/* .BehaviorSubject */ .t([]);
      this.featureOrganizations$ = this._featureOrganizations$.asObservable();
      this._featureToggles$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__/* .BehaviorSubject */ .t([]);
      this.featureToggles$ = this._featureToggles$.asObservable();
    }
    loadUnleashFeatures() {
      const promise = this._featureService.getFeatureToggleDefinition();
      const observable = (0,rxjs__WEBPACK_IMPORTED_MODULE_2__/* .from */ .H)(promise);
      return observable.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .tap */ .M)(items => {
        this._featureToggles$.next(items);
      }));
    }
    loadFeatures(relations) {
      const features$ = this._features$.getValue();
      if (features$.length > 0) {
        return rxjs__WEBPACK_IMPORTED_MODULE_4__/* .EMPTY */ .w;
      }
      return this._featureService.getParentFeatures(relations).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .tap */ .M)(({
        items
      }) => {
        this._features$.next(items);
        this._blocks$.next(underscore__WEBPACK_IMPORTED_MODULE_0__/* .chunk */ .iv(items, 2));
      }));
    }
    loadFeatureOrganizations(relations, findInput) {
      return this._featureService.getFeatureOrganizations(findInput, relations).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .tap */ .M)(({
        items
      }) => this._featureOrganizations$.next(items)));
    }
    changedFeature(payload) {
      return this._featureService.featureToggle(payload);
    }
    static {
      this.ɵfac = function FeatureStoreService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || FeatureStoreService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵinject"] */ .KVO(_feature_service__WEBPACK_IMPORTED_MODULE_6__/* .FeatureService */ .w));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdefineInjectable"] */ .jDH({
        token: FeatureStoreService,
        factory: FeatureStoreService.ɵfac
      });
    }
  }
  return FeatureStoreService;
})();

/***/ }),

/***/ 71201:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   V: () => (/* binding */ GeneralSettingRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(908);
/* harmony import */ var _general_setting_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48690);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26860);




const routes = [{
  path: '',
  component: _general_setting_component__WEBPACK_IMPORTED_MODULE_0__/* .GeneralSettingComponent */ .i
}];
let GeneralSettingRoutingModule = /*#__PURE__*/(() => {
  class GeneralSettingRoutingModule {
    static {
      this.ɵfac = function GeneralSettingRoutingModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || GeneralSettingRoutingModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineNgModule"] */ .$C({
        type: GeneralSettingRoutingModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__/* .RouterModule */ .iI.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__/* .RouterModule */ .iI]
      });
    }
  }
  return GeneralSettingRoutingModule;
})();

/***/ }),

/***/ 95608:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GeneralSettingModule: () => (/* binding */ GeneralSettingModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14572);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56383);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19223);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(42472);
/* harmony import */ var _general_setting_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71201);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26860);







let GeneralSettingModule = /*#__PURE__*/(() => {
  class GeneralSettingModule {
    static {
      this.ɵfac = function GeneralSettingModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || GeneralSettingModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineNgModule"] */ .$C({
        type: GeneralSettingModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__/* .CommonModule */ .MD, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbCardModule */ .lVF, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbRouteTabsetModule */ .x$5, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__/* .TranslateModule */ .h.forChild(), _general_setting_routing_module__WEBPACK_IMPORTED_MODULE_0__/* .GeneralSettingRoutingModule */ .V, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_5__/* .FeatureToggleModule */ .H]
      });
    }
  }
  return GeneralSettingModule;
})();

/***/ })

}]);