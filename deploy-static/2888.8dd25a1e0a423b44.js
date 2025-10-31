"use strict";
(self["webpackChunkgauzy"] = self["webpackChunkgauzy"] || []).push([[2888,8539],{

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

/***/ 32888:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MaintenanceModeComponent: () => (/* reexport safe */ _lib_maintenance_mode_component__WEBPACK_IMPORTED_MODULE_2__.o),
/* harmony export */   MaintenanceModeModule: () => (/* reexport safe */ _lib_maintenance_mode_module__WEBPACK_IMPORTED_MODULE_0__.j),
/* harmony export */   createMaintenanceRoutes: () => (/* reexport safe */ _lib_maintenance_mode_routes__WEBPACK_IMPORTED_MODULE_1__.i)
/* harmony export */ });
/* harmony import */ var _lib_maintenance_mode_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(54225);
/* harmony import */ var _lib_maintenance_mode_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65803);
/* harmony import */ var _lib_maintenance_mode_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39838);
/**
 * Entry point for all public APIs of the @gauzy/plugin-maintenance-ui package.
 */




/***/ }),

/***/ 39838:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   o: () => (/* binding */ MaintenanceModeComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73014);
/* harmony import */ var _gauzy_ui_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48840);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26860);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71924);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5600);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19159);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(56383);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(19223);









const _c0 = a0 => ({
  companySite: a0
});
let MaintenanceModeComponent = /*#__PURE__*/(() => {
  class MaintenanceModeComponent {
    constructor(_store, _location, _serverConnectionService) {
      this._store = _store;
      this._location = _location;
      this._serverConnectionService = _serverConnectionService;
      this.noInternetLogo = _gauzy_ui_config__WEBPACK_IMPORTED_MODULE_0__/* .environment */ .c['NO_INTERNET_LOGO'];
    }
    ngOnInit() {
      this.checkConnection();
    }
    /**
     * Checks the server connection every 5 seconds.
     */
    checkConnection() {
      var _this = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(function* () {
        const url = _gauzy_ui_config__WEBPACK_IMPORTED_MODULE_0__/* .environment */ .c.API_BASE_URL;
        console.log('Checking server connection to URL: ', url);
        _this.interval = setInterval(/*#__PURE__*/(0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(function* () {
          console.log('Checking server connection...');
          yield _this._serverConnectionService.checkServerConnection(url);
          // Check if the server is online
          if (Number(_this._store.serverConnection) === 200) {
            console.log('Server is online');
            clearInterval(_this.interval);
            _this._location.back();
          } else {
            console.log('Server is offline');
          }
        }), 5000);
      })();
    }
    /**
     * Checks if the company site is defined in the environment.
     *
     * @return {string} The company site name.
     */
    get companySite() {
      return _gauzy_ui_config__WEBPACK_IMPORTED_MODULE_0__/* .environment */ .c.COMPANY_SITE_NAME;
    }
    ngOnDestroy() {}
    static {
      this.ɵfac = function MaintenanceModeComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MaintenanceModeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_3__/* .Store */ .il), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_common__WEBPACK_IMPORTED_MODULE_4__/* .Location */ .aZ), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_5__/* .ServerConnectionService */ .p));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineComponent"] */ .VBU({
        type: MaintenanceModeComponent,
        selectors: [["ga-maintenance-mode"]],
        standalone: false,
        decls: 9,
        vars: 7,
        consts: [["scroll", "false", 1, "info-page"], [1, "maintenance-mode-content"], [1, "logo"], [3, "src"], [1, "info-message"], [1, "mt-4"]],
        template: function MaintenanceModeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(0, "nb-layout")(1, "nb-layout-column", 0)(2, "div", 1)(3, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ .nrm(4, "img", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(5, "div", 4)(6, "h3", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(8, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s()()()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("src", ctx.noInternetLogo, _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵsanitizeUrl"] */ .B4B);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind2"] */ .i5U(8, 2, "GAUZY_MAINTENANCE", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpureFunction1"] */ .eq3(5, _c0, ctx.companySite)));
          }
        },
        dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_6__/* .NbLayoutComponent */ .EAZ, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__/* .NbLayoutColumnComponent */ .U9P, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__/* .TranslatePipe */ .D9],
        styles: [".info-page[_ngcontent-%COMP%] {\n  padding: 0 !important;\n}\n.info-page[_ngcontent-%COMP%]   .maintenance-mode-content[_ngcontent-%COMP%] {\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  height: 100%;\n  flex-direction: column;\n}\n.info-page[_ngcontent-%COMP%]   .maintenance-mode-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-height: 96px;\n  max-width: 300px;\n  width: auto;\n}\n.info-page[_ngcontent-%COMP%]   .maintenance-mode-content[_ngcontent-%COMP%]   .info-message[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: red;\n  width: 100%;\n}"]
      });
    }
  }
  return MaintenanceModeComponent;
})();

/***/ }),

/***/ 54225:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   j: () => (/* binding */ MaintenanceModeModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14572);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(45715);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9620);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(908);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(56383);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19223);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6828);
/* harmony import */ var _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(99209);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8539);
/* harmony import */ var _maintenance_mode_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65803);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);











let MaintenanceModeModule = /*#__PURE__*/(() => {
  class MaintenanceModeModule {
    static {
      this.ɵfac = function MaintenanceModeModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MaintenanceModeModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .$C({
        type: MaintenanceModeModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .G2t({
        providers: [{
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_1__/* .ROUTES */ .bw,
          useFactory: service => (0,_maintenance_mode_routes__WEBPACK_IMPORTED_MODULE_2__/* .createMaintenanceRoutes */ .i)(service),
          deps: [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_3__/* .PageRouteRegistryService */ .L],
          multi: true
        }],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__/* .CommonModule */ .MD, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__/* .TranslateModule */ .h.forRoot({
          defaultLanguage: (0,_gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_6__/* .getBrowserLanguage */ .x)(),
          // Get the browser language and fall back to a default if needed
          loader: {
            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__/* .TranslateLoader */ .Wr,
            useFactory: _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_7__/* .HttpLoaderFactory */ .M,
            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_8__/* .HttpClient */ .Qq]
          }
        }), _nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbLayoutModule */ .llX, _angular_router__WEBPACK_IMPORTED_MODULE_10__/* .RouterModule */ .iI]
      });
    }
  }
  return MaintenanceModeModule;
})();

/***/ }),

/***/ 65803:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   i: () => (/* binding */ createMaintenanceRoutes)
/* harmony export */ });
/* harmony import */ var _maintenance_mode_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39838);

/**
 * Creates the routes for the maintenance mode plugin.
 *
 * @param _pageRouteRegistryService An instance of PageRouteRegistryService
 * @returns An array of Route objects
 */
const createMaintenanceRoutes = _pageRouteRegistryService => [{
  path: '',
  component: _maintenance_mode_component__WEBPACK_IMPORTED_MODULE_0__/* .MaintenanceModeComponent */ .o
}];

/***/ })

}]);