"use strict";
(self["webpackChunkgauzy"] = self["webpackChunkgauzy"] || []).push([[8672],{

/***/ 8672:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FeatureModule: () => (/* binding */ FeatureModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14572);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56383);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19223);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(42472);
/* harmony import */ var _feature_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95625);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26860);







let FeatureModule = /*#__PURE__*/(() => {
  class FeatureModule {
    static {
      this.ɵfac = function FeatureModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || FeatureModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineNgModule"] */ .$C({
        type: FeatureModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__/* .CommonModule */ .MD, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbCardModule */ .lVF, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbRouteTabsetModule */ .x$5, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__/* .TranslateModule */ .h.forChild(), _feature_routing_module__WEBPACK_IMPORTED_MODULE_0__/* .FeatureRoutingModule */ .l, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_5__/* .FeatureToggleModule */ .H]
      });
    }
  }
  return FeatureModule;
})();

/***/ }),

/***/ 94493:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ FeatureComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(64411);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23423);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19223);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73246);
/* harmony import */ var _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38546);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26860);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(56383);








let FeatureComponent = class FeatureComponent extends _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_0__/* .TranslationBaseComponent */ .K {
  constructor(translateService) {
    super(translateService);
    this.translateService = translateService;
    this.tabs = [];
  }
  ngOnInit() {
    this._loadTabs();
    this._applyTranslationOnTabs();
  }
  _loadTabs() {
    this.tabs = [{
      title: this.getTranslation('MENU.TENANT'),
      route: this.getRoute('tenant'),
      queryParamsHandling: 'merge'
    }, {
      title: this.getTranslation('MENU.ORGANIZATION'),
      route: this.getRoute('organization'),
      queryParamsHandling: 'merge'
    }];
  }
  getRoute(tab) {
    return `/pages/settings/features/${tab}`;
  }
  _applyTranslationOnTabs() {
    this.translateService.onLangChange.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__/* .tap */ .M)(() => this._loadTabs()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__/* .untilDestroyed */ .s)(this)).subscribe();
  }
  static {
    this.ɵfac = function FeatureComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || FeatureComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__/* .TranslateService */ .c$));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdefineComponent"] */ .VBU({
      type: FeatureComponent,
      selectors: [["ngx-feature"]],
      standalone: false,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
      decls: 10,
      vars: 7,
      consts: [[1, "d-flex", "justify-content-between"], [1, "email-history-header"], [1, "menu-setting"], [1, "tabset"], [3, "tabs"]],
      template: function FeatureComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .j41(0, "nb-card")(1, "nb-card-header", 0)(2, "h4", 1)(3, "span", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ .EFF(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .nI1(5, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .k0s();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ .EFF(6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .nI1(7, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .k0s()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .j41(8, "nb-card-body", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelement"] */ .nrm(9, "nb-route-tabset", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .k0s()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .R7$(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .SpI("", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .bMT(5, 3, "MENU.SETTINGS"), "/ ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .bMT(7, 5, "MENU.FEATURES"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .R7$(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Y8G("tabs", ctx.tabs);
        }
      },
      dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbCardComponent */ .SrT, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbCardBodyComponent */ .KH5, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbCardHeaderComponent */ .zJv, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbRouteTabsetComponent */ .ssE, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__/* .TranslatePipe */ .D9],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  overflow: unset;\n}\n[_nghost-%COMP%]     nb-route-tabset .route-tab .tab-link {\n  border-radius: var(--border-radius) var(--border-radius) 0 0;\n}\n[_nghost-%COMP%]     nb-route-tabset .route-tab .tab-link svg {\n  fill: var(--text-primary-color);\n}\n[_nghost-%COMP%]     nb-route-tabset .route-tab .tab-link span {\n  display: inline-block;\n  text-transform: initial;\n}\n[_nghost-%COMP%]     nb-route-tabset .route-tab .tab-link span:first-letter {\n  text-transform: uppercase;\n}\n\n.tabset[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\nh4[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 600;\n  line-height: 30px;\n  letter-spacing: 0em;\n}\nh4[_ngcontent-%COMP%]   .menu-setting[_ngcontent-%COMP%] {\n  font-weight: 400;\n}"]
    });
  }
};
FeatureComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__/* .UntilDestroy */ .d)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_6__/* .__metadata */ .Sn)("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__/* .TranslateService */ .c$])], FeatureComponent);


/***/ }),

/***/ 95625:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   l: () => (/* binding */ FeatureRoutingModule)
/* harmony export */ });
/* unused harmony export redirectTo */
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(908);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4106);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17785);
/* harmony import */ var _feature_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94493);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(34261);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(26860);







function redirectTo() {
  return '/pages/dashboard';
}
const routes = [{
  path: '',
  component: _feature_component__WEBPACK_IMPORTED_MODULE_0__/* .FeatureComponent */ .c,
  canActivate: [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_1__/* .PermissionsGuard */ .a],
  data: {
    permissions: {
      only: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__/* .PermissionsEnum */ .U.ALL_ORG_VIEW],
      redirectTo
    }
  },
  children: [{
    path: '',
    redirectTo: 'tenant',
    pathMatch: 'full'
  }, {
    path: 'tenant',
    component: _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_3__/* .FeatureToggleComponent */ .U,
    data: {
      isOrganization: false,
      selectors: {
        project: false,
        employee: false,
        date: false,
        organization: false
      }
    }
  }, {
    path: 'organization',
    component: _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_3__/* .FeatureToggleComponent */ .U,
    data: {
      isOrganization: true,
      selectors: {
        project: false,
        employee: false,
        date: false,
        organization: true
      }
    }
  }]
}];
let FeatureRoutingModule = /*#__PURE__*/(() => {
  class FeatureRoutingModule {
    static {
      this.ɵfac = function FeatureRoutingModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || FeatureRoutingModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdefineNgModule"] */ .$C({
        type: FeatureRoutingModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__/* .RouterModule */ .iI.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_5__/* .RouterModule */ .iI]
      });
    }
  }
  return FeatureRoutingModule;
})();

/***/ })

}]);