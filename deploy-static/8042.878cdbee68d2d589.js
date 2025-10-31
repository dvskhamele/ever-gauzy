"use strict";
(self["webpackChunkgauzy"] = self["webpackChunkgauzy"] || []).push([[8042],{

/***/ 2308:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ delay)
/* harmony export */ });
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(89751);
/* harmony import */ var _delayWhen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16920);
/* harmony import */ var _observable_timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49226);



function delay(due, scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__/* .asyncScheduler */ .E) {
  const duration = (0,_observable_timer__WEBPACK_IMPORTED_MODULE_1__/* .timer */ .O)(due, scheduler);
  return (0,_delayWhen__WEBPACK_IMPORTED_MODULE_2__/* .delayWhen */ .o)(() => duration);
}
//# sourceMappingURL=delay.js.map

/***/ }),

/***/ 2600:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   u: () => (/* binding */ mapTo)
/* harmony export */ });
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87081);

function mapTo(value) {
  return (0,_map__WEBPACK_IMPORTED_MODULE_0__/* .map */ .T)(() => value);
}
//# sourceMappingURL=mapTo.js.map

/***/ }),

/***/ 11170:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ ExternalRedirectComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);

let ExternalRedirectComponent = /*#__PURE__*/(() => {
  class ExternalRedirectComponent {
    constructor() {}
    ngOnInit() {
      console.log('Redirecting to external URL');
    }
    static {
      this.ɵfac = function ExternalRedirectComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || ExternalRedirectComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: ExternalRedirectComponent,
        selectors: [["ngx-external-redirect"]],
        standalone: false,
        decls: 0,
        vars: 0,
        template: function ExternalRedirectComponent_Template(rf, ctx) {},
        encapsulation: 2
      });
    }
  }
  return ExternalRedirectComponent;
})();

/***/ }),

/***/ 11513:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ ExportAllService)
/* harmony export */ });
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(64913);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26860);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45715);




let ExportAllService = /*#__PURE__*/(() => {
  class ExportAllService {
    constructor(http) {
      this.http = http;
    }
    downloadAllData() {
      return this.http.get(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_0__/* .API_PREFIX */ .m4}/download`, {
        responseType: 'blob'
      });
    }
    downloadExportTemplates() {
      return this.http.get(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_0__/* .API_PREFIX */ .m4}/export/template`, {
        responseType: 'blob'
      });
    }
    downloadSpecificTable(names) {
      const data = JSON.stringify({
        entities: {
          names
        }
      });
      if (!names) return;
      return this.http.get(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_0__/* .API_PREFIX */ .m4}/export/filter`, {
        responseType: 'blob',
        params: {
          data
        }
      });
    }
    static {
      this.ɵfac = function ExportAllService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || ExportAllService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵinject"] */ .KVO(_angular_common_http__WEBPACK_IMPORTED_MODULE_2__/* .HttpClient */ .Qq));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineInjectable"] */ .jDH({
        token: ExportAllService,
        factory: ExportAllService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return ExportAllService;
})();

/***/ }),

/***/ 16920:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   o: () => (/* binding */ delayWhen)
/* harmony export */ });
/* harmony import */ var _observable_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52623);
/* harmony import */ var _take__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64320);
/* harmony import */ var _ignoreElements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(89392);
/* harmony import */ var _mapTo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2600);
/* harmony import */ var _mergeMap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(99333);
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85783);






function delayWhen(delayDurationSelector, subscriptionDelay) {
  if (subscriptionDelay) {
    return source => (0,_observable_concat__WEBPACK_IMPORTED_MODULE_0__/* .concat */ .x)(subscriptionDelay.pipe((0,_take__WEBPACK_IMPORTED_MODULE_1__/* .take */ .s)(1), (0,_ignoreElements__WEBPACK_IMPORTED_MODULE_2__/* .ignoreElements */ .w)()), source.pipe(delayWhen(delayDurationSelector)));
  }
  return (0,_mergeMap__WEBPACK_IMPORTED_MODULE_3__/* .mergeMap */ .Z)((value, index) => (0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_4__/* .innerFrom */ .Tg)(delayDurationSelector(value, index)).pipe((0,_take__WEBPACK_IMPORTED_MODULE_1__/* .take */ .s)(1), (0,_mapTo__WEBPACK_IMPORTED_MODULE_5__/* .mapTo */ .u)(value)));
}
//# sourceMappingURL=delayWhen.js.map

/***/ }),

/***/ 18042:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ImportExportModule: () => (/* binding */ ImportExportModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14572);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(56383);
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(79475);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(19223);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18180);
/* harmony import */ var _import_export_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87003);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26860);









let ImportExportModule = /*#__PURE__*/(() => {
  class ImportExportModule {
    static {
      this.ɵfac = function ImportExportModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || ImportExportModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineNgModule"] */ .$C({
        type: ImportExportModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__/* .CommonModule */ .MD, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_3__/* .DialogsModule */ .s, _import_export_routing_module__WEBPACK_IMPORTED_MODULE_0__/* .ImportExportRoutingModule */ .M, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbButtonModule */ .P5N, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbCardModule */ .lVF, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbIconModule */ .clu, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbSpinnerModule */ .gYs, ngx_permissions__WEBPACK_IMPORTED_MODULE_5__/* .NgxPermissionsModule */ .Ov.forChild(), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__/* .TranslateModule */ .h.forChild()]
      });
    }
  }
  return ImportExportModule;
})();

/***/ }),

/***/ 27337:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* binding */ concatMap)
/* harmony export */ });
/* harmony import */ var _mergeMap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99333);
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61848);


function concatMap(project, resultSelector) {
  return (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .T)(resultSelector) ? (0,_mergeMap__WEBPACK_IMPORTED_MODULE_1__/* .mergeMap */ .Z)(project, resultSelector, 1) : (0,_mergeMap__WEBPACK_IMPORTED_MODULE_1__/* .mergeMap */ .Z)(project, 1);
}
//# sourceMappingURL=concatMap.js.map

/***/ }),

/***/ 29421:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   n: () => (/* binding */ switchMap)
/* harmony export */ });
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85783);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7661);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25969);



function switchMap(project, resultSelector) {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__/* .operate */ .N)((source, subscriber) => {
    let innerSubscriber = null;
    let index = 0;
    let isComplete = false;
    const checkComplete = () => isComplete && !innerSubscriber && subscriber.complete();
    source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__/* .createOperatorSubscriber */ ._)(subscriber, value => {
      innerSubscriber === null || innerSubscriber === void 0 ? void 0 : innerSubscriber.unsubscribe();
      let innerIndex = 0;
      const outerIndex = index++;
      (0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_2__/* .innerFrom */ .Tg)(project(value, outerIndex)).subscribe(innerSubscriber = (0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__/* .createOperatorSubscriber */ ._)(subscriber, innerValue => subscriber.next(resultSelector ? resultSelector(value, innerValue, outerIndex, innerIndex++) : innerValue), () => {
        innerSubscriber = null;
        checkComplete();
      }));
    }, () => {
      isComplete = true;
      checkComplete();
    }));
  });
}
//# sourceMappingURL=switchMap.js.map

/***/ }),

/***/ 35547:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   z: () => (/* binding */ GauzyCloudService)
/* harmony export */ });
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(64913);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26860);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45715);




let GauzyCloudService = /*#__PURE__*/(() => {
  class GauzyCloudService {
    constructor(_http) {
      this._http = _http;
    }
    migrateIntoCloud(payload) {
      return this._http.post(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_0__/* .API_PREFIX */ .m4}/cloud/migrate`, payload);
    }
    migrateTenant(payload, token) {
      return this._http.post(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_0__/* .API_PREFIX */ .m4}/cloud/migrate/tenant/${token}`, {
        ...payload
      });
    }
    migrateOrganization(payload, token) {
      return this._http.post(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_0__/* .API_PREFIX */ .m4}/cloud/migrate/organization/${token}`, {
        ...payload
      });
    }
    static {
      this.ɵfac = function GauzyCloudService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || GauzyCloudService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵinject"] */ .KVO(_angular_common_http__WEBPACK_IMPORTED_MODULE_2__/* .HttpClient */ .Qq));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineInjectable"] */ .jDH({
        token: GauzyCloudService,
        factory: GauzyCloudService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return GauzyCloudService;
})();

/***/ }),

/***/ 67165:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ ExternalRedirectGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);

let ExternalRedirectGuard = /*#__PURE__*/(() => {
  class ExternalRedirectGuard {
    /**
     * Checks if navigation can proceed.
     *
     * @param route - The activated route snapshot containing route parameters.
     * @returns {boolean} - Returns false to prevent navigation to the route and true to allow navigation.
     */
    canActivate(route) {
      const externalUrl = route.paramMap.get('redirect');
      // If an external URL is provided in the route parameters
      if (externalUrl) {
        window.open(externalUrl, '_blank'); // Open the URL in a new tab
        return false; // Prevent navigation to the current route
      }
      return true; // Allow navigation if no external URL is found
    }
    static {
      this.ɵfac = function ExternalRedirectGuard_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || ExternalRedirectGuard)();
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjectable"] */ .jDH({
        token: ExternalRedirectGuard,
        factory: ExternalRedirectGuard.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return ExternalRedirectGuard;
})();

/***/ }),

/***/ 87003:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ ImportExportRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(908);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17785);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4106);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(67165);
/* harmony import */ var _import_export_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(89819);
/* harmony import */ var _external_redirect_external_redirect_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11170);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(26860);







const routes = [{
  path: '',
  component: _import_export_component__WEBPACK_IMPORTED_MODULE_0__/* .ImportExportComponent */ .p,
  canActivate: [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_1__/* .PermissionsGuard */ .a],
  data: {
    permissions: {
      only: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__/* .PermissionsEnum */ .U.ALL_ORG_VIEW, _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__/* .PermissionsEnum */ .U.IMPORT_ADD, _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__/* .PermissionsEnum */ .U.EXPORT_ADD],
      redirectTo: '/pages/settings'
    }
  }
}, {
  path: 'export',
  loadChildren: () => __webpack_require__.e(/* import() */ 3391).then(__webpack_require__.bind(__webpack_require__, 53391)).then(m => m.ExportModule)
}, {
  path: 'import',
  loadChildren: () => __webpack_require__.e(/* import() */ 5433).then(__webpack_require__.bind(__webpack_require__, 15433)).then(m => m.ImportModule)
}, {
  path: 'external-redirect',
  component: _external_redirect_external_redirect_component__WEBPACK_IMPORTED_MODULE_3__/* .ExternalRedirectComponent */ .F,
  canActivate: [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_4__/* .ExternalRedirectGuard */ .R]
}];
let ImportExportRoutingModule = /*#__PURE__*/(() => {
  class ImportExportRoutingModule {
    static {
      this.ɵfac = function ImportExportRoutingModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || ImportExportRoutingModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdefineNgModule"] */ .$C({
        type: ImportExportRoutingModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__/* .RouterModule */ .iI.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_6__/* .RouterModule */ .iI]
      });
    }
  }
  return ImportExportRoutingModule;
})();

/***/ }),

/***/ 89392:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   w: () => (/* binding */ ignoreElements)
/* harmony export */ });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7661);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25969);
/* harmony import */ var _util_noop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67600);



function ignoreElements() {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__/* .operate */ .N)((source, subscriber) => {
    source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__/* .createOperatorSubscriber */ ._)(subscriber, _util_noop__WEBPACK_IMPORTED_MODULE_2__/* .noop */ .l));
  });
}
//# sourceMappingURL=ignoreElements.js.map

/***/ }),

/***/ 89819:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: () => (/* binding */ ImportExportComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(73014);
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncIterator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(10976);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(64411);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43277);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(9620);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(72781);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(73246);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(47060);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(29421);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2308);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(27337);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(76965);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(50666);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(90010);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(36950);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(19223);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(23423);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(17785);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(95655);
/* harmony import */ var _gauzy_ui_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(48840);
/* harmony import */ var _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38546);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(11513);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(35547);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(4846);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(71924);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(15480);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(54263);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26860);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(14572);
/* harmony import */ var _packages_ui_core_shared_src_lib_dialogs_directive_prompt_directive__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(49554);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(56383);
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(79475);





















const _c0 = a0 => [a0];
function ImportExportComponent_ng_container_26_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("callback", function ImportExportComponent_ng_container_26_button_2_Template_button_callback_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx_r1.onMigrateIntoCloud($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(4, "nb-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("inputType", "password")("title", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(1, 5, "MENU.IMPORT_EXPORT.MIGRATE_TO_CLOUD"))("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(2, 7, "FORM.PASSWORD"))("label", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(3, 9, "FORM.PASSWORD"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(6, 11, "MENU.IMPORT_EXPORT.MIGRATE_TO_CLOUD"), " ");
  }
}
function ImportExportComponent_ng_container_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(2, ImportExportComponent_ng_container_26_button_2_Template, 7, 13, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngxPermissionsOnly", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpureFunction1"] */ .eq3(1, _c0, ctx_r1.permissionsEnum.MIGRATE_GAUZY_CLOUD));
  }
}
function ImportExportComponent_ng_container_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(3, 1, "MENU.IMPORT_EXPORT.MIGRATE_TO_CLOUD_INFO"), " ");
  }
}
let ImportExportComponent = class ImportExportComponent extends _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_2__/* .TranslationBaseComponent */ .K {
  constructor(exportAll, gauzyCloudService, userOrganizationService, router, store, translateService, toastrService, serializer, _errorHandlingService) {
    super(translateService);
    this.exportAll = exportAll;
    this.gauzyCloudService = gauzyCloudService;
    this.userOrganizationService = userOrganizationService;
    this.router = router;
    this.store = store;
    this.translateService = translateService;
    this.toastrService = toastrService;
    this.serializer = serializer;
    this._errorHandlingService = _errorHandlingService;
    this.environment = _gauzy_ui_config__WEBPACK_IMPORTED_MODULE_3__/* .environment */ .c;
    this.permissionsEnum = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_4__/* .PermissionsEnum */ .U;
    this.userOrganizations = [];
  }
  ngOnInit() {
    this.store.user$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .filter */ .p)(user => !!user), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .M)(user => this.user = user), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .M)(() => this.getOrganizations()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__/* .untilDestroyed */ .s)(this)).subscribe();
  }
  importPage() {
    this.router.navigate(['/pages/settings/import-export/import']);
  }
  exportPage() {
    this.router.navigate(['/pages/settings/import-export/export']);
  }
  onDownloadTemplates() {
    this.exportAll.downloadExportTemplates().pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__/* .untilDestroyed */ .s)(this)).subscribe(data => (0,file_saver__WEBPACK_IMPORTED_MODULE_0__.saveAs)(data, `archive.zip`));
  }
  /*
   * Migrate Self Hosted to Gauzy Cloud Hosted
   */
  onMigrateIntoCloud(password) {
    var _this = this;
    const {
      id: sourceId,
      firstName,
      lastName,
      username,
      thirdPartyId,
      email,
      imageUrl,
      preferredComponentLayout,
      preferredLanguage,
      tenant: {
        id: tenantId,
        name
      }
    } = this.user;
    const register = {
      user: {
        firstName,
        lastName,
        username,
        thirdPartyId,
        email,
        preferredComponentLayout,
        preferredLanguage,
        imageUrl
      },
      isImporting: true,
      sourceId,
      password,
      confirmPassword: password
    };
    this.loading = true;
    try {
      this.gauzyCloudService.migrateIntoCloud(register).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .catchError */ .W)(error => {
        this._errorHandlingService.handleError(error);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)(rxjs__WEBPACK_IMPORTED_MODULE_10__/* .EMPTY */ .w);
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__/* .switchMap */ .n)(response => {
        if (response) {
          if (response['status']) {
            const statuses = [400, 404];
            if (statuses.includes(response['status'])) {
              this._errorHandlingService.handleError(response);
              return rxjs__WEBPACK_IMPORTED_MODULE_10__/* .EMPTY */ .w;
            }
          }
          const {
            token,
            user
          } = response;
          this.token = token;
          this.gauzyUser = user;
          return this.gauzyCloudService.migrateTenant({
            name,
            isImporting: true,
            sourceId: tenantId,
            userSourceId: sourceId
          }, token);
        }
        return rxjs__WEBPACK_IMPORTED_MODULE_10__/* .EMPTY */ .w;
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__/* .delay */ .c)(1000), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__/* .concatMap */ .H)(/*#__PURE__*/function () {
        var _ref = (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A)(function* (tenant) {
          if (tenant) {
            var _iteratorAbruptCompletion = false;
            var _didIteratorError = false;
            var _iteratorError;
            try {
              for (var _iterator = (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncIterator_js__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A)(_this.userOrganizations), _step; _iteratorAbruptCompletion = !(_step = yield _iterator.next()).done; _iteratorAbruptCompletion = false) {
                const {
                  id: userOrganizationSourceId,
                  organization
                } = _step.value;
                {
                  yield (0,rxjs__WEBPACK_IMPORTED_MODULE_16__/* .firstValueFrom */ ._)(_this.gauzyCloudService.migrateOrganization({
                    ..._this.mapOrganization(organization, tenant, userOrganizationSourceId)
                  }, _this.token));
                }
              }
            } catch (err) {
              _didIteratorError = true;
              _iteratorError = err;
            } finally {
              try {
                if (_iteratorAbruptCompletion && _iterator.return != null) {
                  yield _iterator.return();
                }
              } finally {
                if (_didIteratorError) {
                  throw _iteratorError;
                }
              }
            }
            return yield (0,rxjs__WEBPACK_IMPORTED_MODULE_16__/* .firstValueFrom */ ._)((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)(tenant));
          }
          return yield (0,rxjs__WEBPACK_IMPORTED_MODULE_16__/* .firstValueFrom */ ._)((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)(rxjs__WEBPACK_IMPORTED_MODULE_10__/* .EMPTY */ .w));
        });
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .M)({
        next: x => {
          this.toastrService.success('MENU.IMPORT_EXPORT.MIGRATE_SUCCESSFULLY', {
            tenant: name
          });
          const externalUrl = _gauzy_ui_config__WEBPACK_IMPORTED_MODULE_3__/* .environment */ .c.GAUZY_CLOUD_APP;
          const tree = this.router.createUrlTree(['/pages/settings/import-export/import'], {
            queryParams: {
              token: this.token,
              userId: this.gauzyUser.id,
              importType: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_17__/* .ImportTypeEnum */ .f.MERGE
            }
          });
          let redirect;
          if (externalUrl.indexOf('#') !== -1) {
            redirect = externalUrl + '' + this.serializer.serialize(tree);
          } else {
            redirect = externalUrl + '/#' + this.serializer.serialize(tree);
          }
          setTimeout(() => {
            this.router.navigate(['/pages/settings/import-export/external-redirect', {
              redirect
            }]);
          }, 1500);
        },
        error: err => {
          this._errorHandlingService.handleError(err);
        }
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__/* .finalize */ .j)(() => this.loading = false), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__/* .untilDestroyed */ .s)(this)).subscribe();
    } catch (error) {
      this.toastrService.danger(error);
    }
  }
  getOrganizations() {
    var _this2 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A)(function* () {
      const {
        id: userId,
        tenantId
      } = _this2.user;
      const {
        items = []
      } = yield _this2.userOrganizationService.getAll(['organization', 'organization.contact'], {
        userId,
        tenantId
      });
      _this2.userOrganizations = items;
    })();
  }
  mapOrganization(organization, tenant, userOrganizationSourceId) {
    const {
      currency,
      defaultValueDateType,
      bonusType,
      imageUrl,
      id: sourceId
    } = organization;
    delete organization['id'];
    delete organization['contactId'];
    return {
      ...organization,
      imageUrl,
      tenant,
      tenantId: tenant.id,
      currency: currency,
      defaultValueDateType: defaultValueDateType,
      bonusType: bonusType,
      isImporting: true,
      sourceId,
      userOrganizationSourceId
    };
  }
  static {
    this.ɵfac = function ImportExportComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ImportExportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_19__/* .ExportAllService */ .Z), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_20__/* .GauzyCloudService */ .z), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_21__/* .UsersOrganizationsService */ .K), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_router__WEBPACK_IMPORTED_MODULE_22__/* .Router */ .Ix), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_23__/* .Store */ .il), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__/* .TranslateService */ .c$), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_25__/* .ToastrService */ .t), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_router__WEBPACK_IMPORTED_MODULE_22__/* .UrlSerializer */ .Sd), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_26__/* .ErrorHandlingService */ .X));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineComponent"] */ .VBU({
      type: ImportExportComponent,
      selectors: [["ngx-import-export"]],
      standalone: false,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
      decls: 40,
      vars: 27,
      consts: [["nbSpinnerStatus", "primary", "nbSpinnerSize", "large", 1, "card-scroll", 3, "nbSpinner"], [1, "menu-setting"], [1, "row"], [1, "col-sm-12", "button-imports"], [1, "button-import"], ["nbButton", "", "shape", "round", "status", "success", "size", "small", 1, "action", 3, "click"], ["icon", "upload-outline"], ["nbButton", "", "status", "info", "size", "small", 1, "action", 3, "click"], ["icon", "download-outline"], ["nbButton", "", "size", "small", 1, "action", 3, "click"], ["icon", "file-text-outline"], [4, "ngIf"], [1, "row", "mt-4"], [1, "col-sm-12"], [1, "info"], ["class", "action", "nbButton", "", "size", "small", "status", "warning", "ngxPromptDialog", "", 3, "inputType", "title", "placeholder", "label", "callback", 4, "ngxPermissionsOnly"], ["nbButton", "", "size", "small", "status", "warning", "ngxPromptDialog", "", 1, "action", 3, "callback", "inputType", "title", "placeholder", "label"]],
      template: function ImportExportComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "nb-card", 0)(1, "nb-card-header")(2, "h4")(3, "span", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(5, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(7, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(8, "nb-card-body")(9, "div", 2)(10, "div", 3)(11, "div", 4)(12, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("click", function ImportExportComponent_Template_button_click_12_listener() {
            return ctx.importPage();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(13, "nb-icon", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(15, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(16, "div", 4)(17, "button", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("click", function ImportExportComponent_Template_button_click_17_listener() {
            return ctx.exportPage();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(18, "nb-icon", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(20, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(21, "div", 4)(22, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("click", function ImportExportComponent_Template_button_click_22_listener() {
            return ctx.onDownloadTemplates();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(23, "nb-icon", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(25, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(26, ImportExportComponent_ng_container_26_Template, 3, 3, "ng-container", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(27, "div", 12)(28, "div", 13)(29, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(30);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(31, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(32, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(33);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(34, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(35, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(36);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(37, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(38, ImportExportComponent_ng_container_38_Template, 4, 3, "ng-container", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(39, "router-outlet");
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("nbSpinner", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI("", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(5, 11, "MENU.SETTINGS"), "/");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(7, 13, "MENU.IMPORT_EXPORT.IMPORT_EXPORT_DATA"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(15, 15, "MENU.IMPORT_EXPORT.IMPORT"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(20, 17, "MENU.IMPORT_EXPORT.EXPORT"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(25, 19, "MENU.IMPORT_EXPORT.DOWNLOAD_TEMPLATES"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngIf", !ctx.environment.DEMO);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(31, 21, "MENU.IMPORT_EXPORT.IMPORT_INFO"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(34, 23, "MENU.IMPORT_EXPORT.EXPORT_INFO"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(37, 25, "MENU.IMPORT_EXPORT.DOWNLOAD_TEMPLATES_INFO"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngIf", !ctx.environment.DEMO);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_27__/* .NgIf */ .bT, _packages_ui_core_shared_src_lib_dialogs_directive_prompt_directive__WEBPACK_IMPORTED_MODULE_28__/* .PromptDirective */ .Q, _angular_router__WEBPACK_IMPORTED_MODULE_22__/* .RouterOutlet */ .n3, _nebular_theme__WEBPACK_IMPORTED_MODULE_29__/* .NbButtonComponent */ .YP2, _nebular_theme__WEBPACK_IMPORTED_MODULE_29__/* .NbCardComponent */ .SrT, _nebular_theme__WEBPACK_IMPORTED_MODULE_29__/* .NbCardBodyComponent */ .KH5, _nebular_theme__WEBPACK_IMPORTED_MODULE_29__/* .NbCardHeaderComponent */ .zJv, _nebular_theme__WEBPACK_IMPORTED_MODULE_29__/* .NbIconComponent */ .tHu, _nebular_theme__WEBPACK_IMPORTED_MODULE_29__/* .NbSpinnerDirective */ .zwc, ngx_permissions__WEBPACK_IMPORTED_MODULE_30__/* .NgxPermissionsDirective */ .f6, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__/* .TranslatePipe */ .D9],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.action[_ngcontent-%COMP%] {\n  box-shadow: var(--gauzy-shadow);\n  border: none;\n}\n.action[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}\n.action.info[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: var(--color-info-default);\n  color: white;\n  border-color: var(--color-info-default);\n}\n.action.info-text-1[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  color: var(--color-info-default);\n}\n.action.secondary[_ngcontent-%COMP%] {\n  color: #7e7e8f;\n}\n.action.success[_ngcontent-%COMP%] {\n  color: var(--color-success-default);\n}\n.action.warning[_ngcontent-%COMP%] {\n  color: rgb(245, 109, 88);\n}\n.action.orange[_ngcontent-%COMP%] {\n  color: rgb(255, 171, 45);\n}\n.action.primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n}\n.action.primary.soft[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: rgba(110, 73, 232, 0.1);\n}\n.action.select-nb[_ngcontent-%COMP%]     {\n  box-shadow: none;\n}\n.action.select-nb[_ngcontent-%COMP%]     .select-button {\n  box-shadow: var(--gauzy-shadow);\n  background: rgb(245, 245, 245);\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n.actions[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-2);\n  border-radius: var(--button-rectangle-border-radius);\n  padding: 2px 4px !important;\n}\n\n.gauzy-button-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n.card-custom-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n[_nghost-%COMP%]     input {\n  border-radius: var(--border-radius);\n  box-shadow: var(--gauzy-shadow) inset;\n}\n\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%], \n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n  border-radius: var(--border-radius);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   .button-imports[_ngcontent-%COMP%], \n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .button-imports[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   .button-import[_ngcontent-%COMP%], \n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .button-import[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n  padding: 5px;\n  border-radius: 2rem;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%], \n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 15px;\n  letter-spacing: 0em;\n  text-align: left;\n  color: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], \n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 600;\n  line-height: 30px;\n  letter-spacing: 0em;\n  text-align: left;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   .menu-setting[_ngcontent-%COMP%], \n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   .menu-setting[_ngcontent-%COMP%] {\n  font-weight: 400;\n}"]
    });
  }
};
ImportExportComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_31__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__/* .UntilDestroy */ .d)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_31__/* .__metadata */ .Sn)("design:paramtypes", [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_19__/* .ExportAllService */ .Z, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_20__/* .GauzyCloudService */ .z, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_21__/* .UsersOrganizationsService */ .K, _angular_router__WEBPACK_IMPORTED_MODULE_22__/* .Router */ .Ix, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_23__/* .Store */ .il, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__/* .TranslateService */ .c$, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_25__/* .ToastrService */ .t, _angular_router__WEBPACK_IMPORTED_MODULE_22__/* .UrlSerializer */ .Sd, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_26__/* .ErrorHandlingService */ .X])], ImportExportComponent);


/***/ }),

/***/ 95655:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   f: () => (/* binding */ ImportTypeEnum),
/* harmony export */   r: () => (/* binding */ ImportStatusEnum)
/* harmony export */ });
var ImportTypeEnum = /*#__PURE__*/function (ImportTypeEnum) {
  ImportTypeEnum["MERGE"] = "merge";
  ImportTypeEnum["CLEAN"] = "clean";
  return ImportTypeEnum;
}(ImportTypeEnum || {});
var ImportStatusEnum = /*#__PURE__*/function (ImportStatusEnum) {
  ImportStatusEnum["SUCCESS"] = "Success";
  ImportStatusEnum["FAILED"] = "Failed";
  ImportStatusEnum["CANCELLED"] = "Cancelled";
  ImportStatusEnum["IN_PROGRESS"] = "In Progress";
  return ImportStatusEnum;
}(ImportStatusEnum || {});

/***/ })

}]);