"use strict";
(self["webpackChunkgauzy"] = self["webpackChunkgauzy"] || []).push([[9327],{

/***/ 4106:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ PermissionsGuard)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90999);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79708);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56891);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26860);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(36042);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9620);






let PermissionsGuard = /*#__PURE__*/(() => {
  class PermissionsGuard {
    constructor(_authService, _router) {
      this._authService = _authService;
      this._router = _router;
    }
    /**
     * Asynchronously checks if the user is allowed to activate the route.
     *
     * @param {ActivatedRouteSnapshot} route - The route being navigated to.
     * @param {RouterStateSnapshot} state - The current state of the router.
     * @return {Observable<boolean>} A promise that resolves to a boolean indicating whether the user is allowed to activate the route.
     */
    canActivate(route, state) {
      return this._hasPermissions(route, state);
    }
    /**
     * Checks if the user is allowed to activate the child routes.
     *
     * @param {ActivatedRouteSnapshot} childRoute - The child route being navigated to.
     * @param {RouterStateSnapshot} state - The current state of the router.
     * @return {Observable<boolean>} An observable that resolves to a boolean indicating whether the user is allowed to activate the child routes.
     */
    canActivateChild(childRoute, state) {
      return this._hasPermissions(childRoute, state);
    }
    /**
     * Helper method to check permissions.
     *
     * @param {ActivatedRouteSnapshot} route - The route being navigated to.
     * @param {RouterStateSnapshot} state - The current state of the router.
     * @return {Observable<boolean>} An observable that resolves to a boolean indicating whether the user is allowed to activate the route.
     */
    _hasPermissions(route, state) {
      const permissions = route.data['permissions'];
      // No permissions required, allow access
      if (!permissions || permissions.only && permissions.only.length === 0) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(true);
      }
      // Retrieve required permissions from route
      const requiredPermissions = this.getRequiredPermissions(permissions, route);
      // Check if required permissions are valid
      if (!requiredPermissions) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(false); // Block access if permissions aren't valid
      }
      // Determine redirect path
      const redirectTo = this.getRedirectPath(permissions, route, state);
      // Check if the user has the necessary permissions
      return this._authService.hasPermissions(...requiredPermissions).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .map */ .T)(hasPermission => {
        if (hasPermission) {
          return true;
        }
        this._router.navigate([redirectTo]);
        return false;
      }), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__/* .catchError */ .W)(() => {
        this._router.navigate([redirectTo]);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(false);
      }));
    }
    /**
     * Retrieve the required permissions from the route.
     *
     * @param {any} permissions - The permissions object from the route.
     * @param {ActivatedRouteSnapshot} route - The current route.
     * @returns {PermissionsEnum[] | null} - An array of required permissions or null if invalid.
     */
    getRequiredPermissions(permissions, route) {
      let requiredPermissions = null;
      // Check if permissions.only is a function
      if (typeof permissions.only === 'function') {
        requiredPermissions = permissions.only(route) || [];
      } else {
        requiredPermissions = permissions.only || [];
      }
      // Ensure it's an array
      if (!Array.isArray(requiredPermissions)) {
        console.error('Expected permissions.only to be an array but received:', requiredPermissions);
        return null; // Block access if permissions aren't valid
      }
      return requiredPermissions;
    }
    /**
     * Determine the redirect path based on permissions configuration.
     *
     * @param {any} permissions - The permissions object from the route.
     * @param {ActivatedRouteSnapshot} route - The current route.
     * @param {RouterStateSnapshot} state - The current state of the router.
     * @returns {string} - The redirect path or the default redirection path.
     */
    getRedirectPath(permissions, route, state) {
      const defaultRedirectTo = '/pages/dashboard'; // Default redirection path
      // Check if redirectTo is a function and call it
      if (typeof permissions.redirectTo === 'function') {
        return permissions.redirectTo(route, state) || defaultRedirectTo; // Fallback to default
      }
      // Return the specified redirectTo or the default
      return permissions.redirectTo || defaultRedirectTo;
    }
    static {
      this.ɵfac = function PermissionsGuard_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || PermissionsGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵinject"] */ .KVO(_services__WEBPACK_IMPORTED_MODULE_4__/* .AuthService */ .u), _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵinject"] */ .KVO(_angular_router__WEBPACK_IMPORTED_MODULE_5__/* .Router */ .Ix));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdefineInjectable"] */ .jDH({
        token: PermissionsGuard,
        factory: PermissionsGuard.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return PermissionsGuard;
})();

/***/ }),

/***/ 13685:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R0: () => (/* binding */ popNumber),
/* harmony export */   lI: () => (/* binding */ popScheduler),
/* harmony export */   ms: () => (/* binding */ popResultSelector)
/* harmony export */ });
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61848);
/* harmony import */ var _isScheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59623);


function last(arr) {
  return arr[arr.length - 1];
}
function popResultSelector(args) {
  return (0,_isFunction__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .T)(last(args)) ? args.pop() : undefined;
}
function popScheduler(args) {
  return (0,_isScheduler__WEBPACK_IMPORTED_MODULE_1__/* .isScheduler */ .m)(last(args)) ? args.pop() : undefined;
}
function popNumber(args, defaultValue) {
  return typeof last(args) === 'number' ? args.pop() : defaultValue;
}
//# sourceMappingURL=args.js.map

/***/ }),

/***/ 20433:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Q: () => (/* binding */ DateRangePickerResolver)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(90999);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20381);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26024);



/**
 * Resolves the date range picker configuration based on the route parameters.
 *
 * @param route The activated route snapshot containing route information.
 * @param state The router state snapshot (not used but required in signature).
 * @returns An observable of type `IDateRangePicker` representing the resolved date range picker configuration.
 */
const DateRangePickerResolver = route => {
  // Extract the date range picker configuration from the route query parameters
  const {
    date,
    date_end,
    unit_of_time,
    is_custom_date = false
  } = route.queryParams;
  // Extract the unitOfTime from query parameters or route data
  const unitOfTime = unit_of_time ?? route.data.datePicker.unitOfTime;
  // Calculate the start date based on the route query parameter or the current date
  const startDate = date ? moment__WEBPACK_IMPORTED_MODULE_0__(date).startOf('day') : moment__WEBPACK_IMPORTED_MODULE_0__().startOf(unitOfTime);
  // Calculate the end date based on the route query parameter or the start date
  let endDate = date_end ? moment__WEBPACK_IMPORTED_MODULE_0__(date_end).endOf('day') : moment__WEBPACK_IMPORTED_MODULE_0__(startDate).endOf(unitOfTime);
  // Determine if a custom date range is being used
  const isCustomDate = (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .parseToBoolean */ .RR)(is_custom_date) ?? !!date_end;
  // Return an observable emitting the resolved date range picker configuration
  return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)({
    startDate: startDate.toDate(),
    endDate: endDate.toDate(),
    isCustomDate,
    unitOfTime
  });
};

/***/ }),

/***/ 20463:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GN: () => (/* binding */ ReportService)
/* harmony export */ });
/* unused harmony exports initialReportFilterState, ReportFilterStore, ReportFilterQuery */
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(64411);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(26024);
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71732);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(64913);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(36950);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26860);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(45715);








function initialReportFilterState() {
  return [];
}
let ReportFilterStore = class ReportFilterStore extends _datorama_akita__WEBPACK_IMPORTED_MODULE_0__/* .Store */ .il {
  constructor() {
    super(initialReportFilterState());
  }
  static {
    this.ɵfac = function ReportFilterStore_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ReportFilterStore)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineInjectable"] */ .jDH({
      token: ReportFilterStore,
      factory: ReportFilterStore.ɵfac,
      providedIn: 'root'
    });
  }
};
ReportFilterStore = (0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__decorate */ .Cg)([(0,_datorama_akita__WEBPACK_IMPORTED_MODULE_0__/* .StoreConfig */ .g7)({
  name: 'report-category',
  resettable: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__metadata */ .Sn)("design:paramtypes", [])], ReportFilterStore);

let ReportFilterQuery = /*#__PURE__*/(() => {
  class ReportFilterQuery extends _datorama_akita__WEBPACK_IMPORTED_MODULE_0__/* .Query */ .XK {
    constructor(store) {
      super(store);
      this.store = store;
    }
    static {
      this.ɵfac = function ReportFilterQuery_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || ReportFilterQuery)(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵinject"] */ .KVO(ReportFilterStore));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineInjectable"] */ .jDH({
        token: ReportFilterQuery,
        factory: ReportFilterQuery.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return ReportFilterQuery;
})();
let ReportService = /*#__PURE__*/(() => {
  class ReportService {
    get menuItems() {
      return this.reportQuery.getValue();
    }
    set menuItems(value) {
      this.reportStore.reset();
      this.reportStore.update(value);
    }
    constructor(http, reportStore, reportQuery) {
      this.http = http;
      this.reportStore = reportStore;
      this.reportQuery = reportQuery;
      this.menuItems$ = this.reportQuery.select(state => state);
    }
    getReportMenuItems(request = {}) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__/* .firstValueFrom */ ._)(this.http.get(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_4__/* .API_PREFIX */ .m4}/report/menu-items`, {
        params: request ? (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_5__/* .toParams */ .SV)(request) : {}
      })).then(resp => {
        this.menuItems = resp;
        return resp;
      });
    }
    getReports(request) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__/* .firstValueFrom */ ._)(this.http.get(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_4__/* .API_PREFIX */ .m4}/report`, {
        params: request ? (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_5__/* .toParams */ .SV)(request) : {}
      }));
    }
    updateReport(request) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__/* .firstValueFrom */ ._)(this.http.post(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_4__/* .API_PREFIX */ .m4}/report/menu-item`, request));
    }
    getReportCategories(request) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__/* .firstValueFrom */ ._)(this.http.get(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_4__/* .API_PREFIX */ .m4}/report/category`, {
        params: request ? (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_5__/* .toParams */ .SV)(request) : {}
      }));
    }
    static {
      this.ɵfac = function ReportService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || ReportService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵinject"] */ .KVO(_angular_common_http__WEBPACK_IMPORTED_MODULE_6__/* .HttpClient */ .Qq), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵinject"] */ .KVO(ReportFilterStore), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵinject"] */ .KVO(ReportFilterQuery));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineInjectable"] */ .jDH({
        token: ReportService,
        factory: ReportService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return ReportService;
})();

/***/ }),

/***/ 25413:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G: () => (/* binding */ EmptyError)
/* harmony export */ });
/* harmony import */ var _createErrorClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76258);

const EmptyError = (0,_createErrorClass__WEBPACK_IMPORTED_MODULE_0__/* .createErrorClass */ .L)(_super => function EmptyErrorImpl() {
  _super(this);
  this.name = 'EmptyError';
  this.message = 'no elements in sequence';
});
//# sourceMappingURL=EmptyError.js.map

/***/ }),

/***/ 36950:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ firstValueFrom)
/* harmony export */ });
/* harmony import */ var _util_EmptyError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25413);
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(64951);


function firstValueFrom(source, config) {
  const hasConfig = typeof config === 'object';
  return new Promise((resolve, reject) => {
    const subscriber = new _Subscriber__WEBPACK_IMPORTED_MODULE_0__/* .SafeSubscriber */ .Ms({
      next: value => {
        resolve(value);
        subscriber.unsubscribe();
      },
      error: reject,
      complete: () => {
        if (hasConfig) {
          resolve(config.defaultValue);
        } else {
          reject(new _util_EmptyError__WEBPACK_IMPORTED_MODULE_1__/* .EmptyError */ .G());
        }
      }
    });
    source.subscribe(subscriber);
  });
}
//# sourceMappingURL=firstValueFrom.js.map

/***/ }),

/***/ 39327:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PagesModule: () => (/* binding */ PagesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(14572);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56383);
/* harmony import */ var ngx_feature_toggle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(28955);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(36042);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(92381);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(31511);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(73288);
/* harmony import */ var _gauzy_ui_core_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(10316);
/* harmony import */ var _pages_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62198);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26860);









const NB_MODULES = [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbMenuModule */ .anj, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbToastrModule */ .EcJ.forRoot(), _nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbSpinnerModule */ .gYs, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbIconModule */ .clu];
let PagesModule = /*#__PURE__*/(() => {
  class PagesModule {
    static {
      this.ɵfac = function PagesModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || PagesModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineNgModule"] */ .$C({
        type: PagesModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineInjector"] */ .G2t({
        providers: [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_3__/* .AuthService */ .u, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_4__/* .RoleGuard */ .K],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__/* .CommonModule */ .MD, NB_MODULES, ngx_feature_toggle__WEBPACK_IMPORTED_MODULE_6__/* .FeatureToggleModule */ .Hf, _pages_routing_module__WEBPACK_IMPORTED_MODULE_0__/* .PagesRoutingModule */ .B, _gauzy_ui_core_theme__WEBPACK_IMPORTED_MODULE_7__/* .ThemeModule */ .O, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_8__/* .CommonNavModule */ .F, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_9__/* .MiscellaneousModule */ .r]
      });
    }
  }
  return PagesModule;
})();

/***/ }),

/***/ 45245:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   J: () => (/* binding */ IntegrationsService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79708);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(91925);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26024);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(64913);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(26860);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(45715);






let IntegrationsService = /*#__PURE__*/(() => {
  class IntegrationsService {
    constructor(_http) {
      this._http = _http;
    }
    fetchIntegrations(integrationTypeId, searchQuery = '', filter = 'all') {
      const filters = JSON.stringify({
        integrationTypeId,
        searchQuery,
        filter
      });
      return this._http.get(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_0__/* .API_PREFIX */ .m4}/integration`, {
        params: {
          filters
        }
      });
    }
    fetchIntegrationGroups() {
      return this._http.get(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_0__/* .API_PREFIX */ .m4}/integration/types`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__/* .map */ .T)(groups => groups.reduce((prev, current) => {
        const index = prev.findIndex(p => p.order === current.order);
        if (index > -1) {
          prev[index].integrationTypes = prev[index].integrationTypes.concat({
            name: current.name,
            id: current.id
          });
          return prev;
        }
        return prev.concat({
          groupName: current.groupName,
          order: current.order,
          integrationTypes: [{
            name: current.name,
            id: current.id
          }]
        });
      }, [])));
    }
    /**
     * Retrieve an integration tenant by specified options.
     *
     * @param input - The input options for finding the integration tenant.
     * @returns The integration tenant if found, or `false` if not found or an error occurs.
     */
    getIntegrationByOptions(input) {
      const params = (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_2__/* .buildHttpParams */ .n)(input);
      return this._http.get(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_0__/* .API_PREFIX */ .m4}/integration-tenant/integration`, {
        params
      });
    }
    /**
     * Get an IntegrationTenant by ID with optional relations.
     *
     * @param id - The ID of the IntegrationTenant.
     * @param relations - Optional relations for the request.
     * @returns {Observable<any>} An Observable of the HTTP response.
     */
    getIntegrationTenant(id, relations) {
      return this._http.get(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_0__/* .API_PREFIX */ .m4}/integration-tenant/${id}`, {
        params: (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_3__/* .toParams */ .SV)({
          ...relations
        })
      });
    }
    static {
      this.ɵfac = function IntegrationsService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || IntegrationsService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵinject"] */ .KVO(_angular_common_http__WEBPACK_IMPORTED_MODULE_5__/* .HttpClient */ .Qq));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdefineInjectable"] */ .jDH({
        token: IntegrationsService,
        factory: IntegrationsService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return IntegrationsService;
})();

/***/ }),

/***/ 59623:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   m: () => (/* binding */ isScheduler)
/* harmony export */ });
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61848);

function isScheduler(value) {
  return value && (0,_isFunction__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .T)(value.schedule);
}
//# sourceMappingURL=isScheduler.js.map

/***/ }),

/***/ 61851:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   h: () => (/* binding */ merge)
/* harmony export */ });
/* harmony import */ var _operators_mergeAll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(64060);
/* harmony import */ var _innerFrom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85783);
/* harmony import */ var _empty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(90010);
/* harmony import */ var _util_args__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13685);
/* harmony import */ var _from__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39127);





function merge(...args) {
  const scheduler = (0,_util_args__WEBPACK_IMPORTED_MODULE_0__/* .popScheduler */ .lI)(args);
  const concurrent = (0,_util_args__WEBPACK_IMPORTED_MODULE_0__/* .popNumber */ .R0)(args, Infinity);
  const sources = args;
  return !sources.length ? _empty__WEBPACK_IMPORTED_MODULE_1__/* .EMPTY */ .w : sources.length === 1 ? (0,_innerFrom__WEBPACK_IMPORTED_MODULE_2__/* .innerFrom */ .Tg)(sources[0]) : (0,_operators_mergeAll__WEBPACK_IMPORTED_MODULE_3__/* .mergeAll */ .U)(concurrent)((0,_from__WEBPACK_IMPORTED_MODULE_4__/* .from */ .H)(sources, scheduler));
}
//# sourceMappingURL=merge.js.map

/***/ }),

/***/ 62198:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ PagesRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(908);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(98028);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4106);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(17785);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20433);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(53207);
/* harmony import */ var _pages_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76496);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(26860);







const routes = [{
  path: '',
  component: _pages_component__WEBPACK_IMPORTED_MODULE_0__/* .PagesComponent */ .m,
  resolve: {
    user: _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_1__/* .UserResolver */ .u
  },
  children: [{
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }, {
    path: 'dashboard',
    loadChildren: () => Promise.all(/* import() */[__webpack_require__.e(2345), __webpack_require__.e(8722), __webpack_require__.e(3829), __webpack_require__.e(2177), __webpack_require__.e(3726), __webpack_require__.e(2759), __webpack_require__.e(8180), __webpack_require__.e(9099), __webpack_require__.e(5774), __webpack_require__.e(1458), __webpack_require__.e(543), __webpack_require__.e(1750), __webpack_require__.e(8956), __webpack_require__.e(9084), __webpack_require__.e(4373), __webpack_require__.e(5350), __webpack_require__.e(7288), __webpack_require__.e(1297), __webpack_require__.e(8760), __webpack_require__.e(6382), __webpack_require__.e(2076), __webpack_require__.e(8332)]).then(__webpack_require__.bind(__webpack_require__, 67862)).then(m => m.DashboardModule)
  }, {
    path: 'accounting',
    children: [{
      path: '',
      redirectTo: 'invoices',
      pathMatch: 'full'
    }, {
      path: 'income',
      loadChildren: () => Promise.all(/* import() */[__webpack_require__.e(2345), __webpack_require__.e(8722), __webpack_require__.e(3829), __webpack_require__.e(2177), __webpack_require__.e(3726), __webpack_require__.e(836), __webpack_require__.e(8870), __webpack_require__.e(2202), __webpack_require__.e(7607), __webpack_require__.e(5916)]).then(__webpack_require__.bind(__webpack_require__, 75238)).then(m => m.IncomeModule),
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
        dates: _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_2__/* .DateRangePickerResolver */ .Q
      }
    }, {
      path: 'expenses',
      loadChildren: () => Promise.all(/* import() */[__webpack_require__.e(2345), __webpack_require__.e(8722), __webpack_require__.e(3829), __webpack_require__.e(2177), __webpack_require__.e(3726), __webpack_require__.e(836), __webpack_require__.e(8870), __webpack_require__.e(2202), __webpack_require__.e(4243), __webpack_require__.e(2076), __webpack_require__.e(8471)]).then(__webpack_require__.bind(__webpack_require__, 25590)).then(m => m.ExpensesModule),
      data: {
        datePicker: {
          unitOfTime: 'month'
        }
      },
      resolve: {
        dates: _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_2__/* .DateRangePickerResolver */ .Q
      }
    }, {
      path: 'expense-recurring',
      loadChildren: () => Promise.all(/* import() */[__webpack_require__.e(2345), __webpack_require__.e(8722), __webpack_require__.e(5110), __webpack_require__.e(2427)]).then(__webpack_require__.bind(__webpack_require__, 32302)).then(m => m.ExpenseRecurringModule)
    }, {
      path: 'invoices',
      loadChildren: () => Promise.all(/* import() */[__webpack_require__.e(2345), __webpack_require__.e(8722), __webpack_require__.e(3829), __webpack_require__.e(2177), __webpack_require__.e(3726), __webpack_require__.e(836), __webpack_require__.e(8870), __webpack_require__.e(2202), __webpack_require__.e(6089), __webpack_require__.e(4445), __webpack_require__.e(5379), __webpack_require__.e(7256), __webpack_require__.e(9569), __webpack_require__.e(2076), __webpack_require__.e(9993)]).then(__webpack_require__.bind(__webpack_require__, 32404)).then(m => m.InvoicesModule),
      data: {
        selectors: {
          project: false,
          team: false,
          employee: false
        },
        datePicker: {
          unitOfTime: 'month'
        }
      }
    }, {
      path: 'payments',
      loadChildren: () => Promise.all(/* import() */[__webpack_require__.e(2345), __webpack_require__.e(8722), __webpack_require__.e(3829), __webpack_require__.e(2177), __webpack_require__.e(3726), __webpack_require__.e(836), __webpack_require__.e(6089), __webpack_require__.e(5379), __webpack_require__.e(9569), __webpack_require__.e(7642)]).then(__webpack_require__.bind(__webpack_require__, 27486)).then(m => m.PaymentsModule)
    }]
  }, {
    path: 'contacts',
    loadChildren: () => Promise.all(/* import() */[__webpack_require__.e(2345), __webpack_require__.e(8722), __webpack_require__.e(3829), __webpack_require__.e(2177), __webpack_require__.e(3726), __webpack_require__.e(836), __webpack_require__.e(8870), __webpack_require__.e(8334), __webpack_require__.e(9669), __webpack_require__.e(7622), __webpack_require__.e(7051)]).then(__webpack_require__.bind(__webpack_require__, 95150)).then(m => m.ContactsModule)
  }, {
    path: 'projects',
    loadChildren: () => Promise.all(/* import() */[__webpack_require__.e(2345), __webpack_require__.e(8722), __webpack_require__.e(3829), __webpack_require__.e(2177), __webpack_require__.e(3726), __webpack_require__.e(836), __webpack_require__.e(8870), __webpack_require__.e(2202), __webpack_require__.e(2759), __webpack_require__.e(166), __webpack_require__.e(8180), __webpack_require__.e(8334), __webpack_require__.e(9669), __webpack_require__.e(9099), __webpack_require__.e(5774), __webpack_require__.e(170), __webpack_require__.e(7178), __webpack_require__.e(1458), __webpack_require__.e(543), __webpack_require__.e(6588), __webpack_require__.e(1750), __webpack_require__.e(7478), __webpack_require__.e(8956), __webpack_require__.e(9084), __webpack_require__.e(4373), __webpack_require__.e(5350), __webpack_require__.e(3213), __webpack_require__.e(5110), __webpack_require__.e(2180), __webpack_require__.e(1588), __webpack_require__.e(9867), __webpack_require__.e(6161), __webpack_require__.e(7288), __webpack_require__.e(6089), __webpack_require__.e(6622), __webpack_require__.e(9860), __webpack_require__.e(1760), __webpack_require__.e(7204), __webpack_require__.e(3812), __webpack_require__.e(1707), __webpack_require__.e(236), __webpack_require__.e(1297), __webpack_require__.e(7483), __webpack_require__.e(4243), __webpack_require__.e(3734), __webpack_require__.e(588), __webpack_require__.e(6076), __webpack_require__.e(1232), __webpack_require__.e(7007), __webpack_require__.e(4445), __webpack_require__.e(5398), __webpack_require__.e(4232), __webpack_require__.e(8264), __webpack_require__.e(1094), __webpack_require__.e(427), __webpack_require__.e(7607), __webpack_require__.e(7140), __webpack_require__.e(7088), __webpack_require__.e(4916), __webpack_require__.e(5684), __webpack_require__.e(9882), __webpack_require__.e(5379), __webpack_require__.e(6747), __webpack_require__.e(7622), __webpack_require__.e(2076), __webpack_require__.e(4575)]).then(__webpack_require__.bind(__webpack_require__, 36747)).then(m => m.WorkInProgressModule),
    data: {
      selectors: {
        project: false,
        team: false,
        employee: false,
        date: false,
        organization: false
      }
    }
  }, {
    path: 'tasks',
    loadChildren: () => Promise.all(/* import() */[__webpack_require__.e(2345), __webpack_require__.e(8722), __webpack_require__.e(3829), __webpack_require__.e(2177), __webpack_require__.e(3726), __webpack_require__.e(836), __webpack_require__.e(8870), __webpack_require__.e(2202), __webpack_require__.e(543), __webpack_require__.e(1750), __webpack_require__.e(8956), __webpack_require__.e(3734), __webpack_require__.e(7256), __webpack_require__.e(6382), __webpack_require__.e(8984)]).then(__webpack_require__.bind(__webpack_require__, 25430)).then(m => m.TasksModule)
  }, {
    path: 'jobs',
    loadChildren: () => Promise.all(/* import() */[__webpack_require__.e(2345), __webpack_require__.e(8722), __webpack_require__.e(8870), __webpack_require__.e(8180), __webpack_require__.e(9084), __webpack_require__.e(5398), __webpack_require__.e(3242), __webpack_require__.e(2076), __webpack_require__.e(600)]).then(__webpack_require__.bind(__webpack_require__, 90600)).then(m => m.JobsModule)
  }, {
    path: 'sales',
    children: [{
      path: 'proposals',
      loadChildren: () => Promise.all(/* import() */[__webpack_require__.e(2345), __webpack_require__.e(8722), __webpack_require__.e(3829), __webpack_require__.e(2177), __webpack_require__.e(3726), __webpack_require__.e(836), __webpack_require__.e(8870), __webpack_require__.e(2202), __webpack_require__.e(8180), __webpack_require__.e(3242), __webpack_require__.e(9781)]).then(__webpack_require__.bind(__webpack_require__, 98203)).then(m => m.JobProposalModule)
    }, {
      path: 'estimates',
      loadChildren: () => Promise.all(/* import() */[__webpack_require__.e(2345), __webpack_require__.e(8722), __webpack_require__.e(3829), __webpack_require__.e(2177), __webpack_require__.e(3726), __webpack_require__.e(836), __webpack_require__.e(8870), __webpack_require__.e(2202), __webpack_require__.e(2759), __webpack_require__.e(166), __webpack_require__.e(8180), __webpack_require__.e(8334), __webpack_require__.e(9669), __webpack_require__.e(9099), __webpack_require__.e(5774), __webpack_require__.e(170), __webpack_require__.e(7178), __webpack_require__.e(1458), __webpack_require__.e(543), __webpack_require__.e(6588), __webpack_require__.e(1750), __webpack_require__.e(7478), __webpack_require__.e(8956), __webpack_require__.e(9084), __webpack_require__.e(4373), __webpack_require__.e(5350), __webpack_require__.e(3213), __webpack_require__.e(5110), __webpack_require__.e(2180), __webpack_require__.e(1588), __webpack_require__.e(9867), __webpack_require__.e(6161), __webpack_require__.e(7288), __webpack_require__.e(6089), __webpack_require__.e(6622), __webpack_require__.e(9860), __webpack_require__.e(1760), __webpack_require__.e(7204), __webpack_require__.e(3812), __webpack_require__.e(1707), __webpack_require__.e(236), __webpack_require__.e(1297), __webpack_require__.e(7483), __webpack_require__.e(4243), __webpack_require__.e(3734), __webpack_require__.e(588), __webpack_require__.e(6076), __webpack_require__.e(1232), __webpack_require__.e(7007), __webpack_require__.e(4445), __webpack_require__.e(5398), __webpack_require__.e(4232), __webpack_require__.e(8264), __webpack_require__.e(1094), __webpack_require__.e(427), __webpack_require__.e(7607), __webpack_require__.e(7140), __webpack_require__.e(7088), __webpack_require__.e(4916), __webpack_require__.e(5684), __webpack_require__.e(9882), __webpack_require__.e(5379), __webpack_require__.e(6747), __webpack_require__.e(7622), __webpack_require__.e(2076), __webpack_require__.e(4575)]).then(__webpack_require__.bind(__webpack_require__, 36747)).then(m => m.WorkInProgressModule),
      data: {
        selectors: {
          project: false,
          team: false,
          employee: false,
          date: false,
          organization: false
        }
      }
    }, {
      path: 'invoices',
      loadChildren: () => Promise.all(/* import() */[__webpack_require__.e(2345), __webpack_require__.e(8722), __webpack_require__.e(3829), __webpack_require__.e(2177), __webpack_require__.e(3726), __webpack_require__.e(836), __webpack_require__.e(8870), __webpack_require__.e(2202), __webpack_require__.e(6089), __webpack_require__.e(4445), __webpack_require__.e(5379), __webpack_require__.e(7256), __webpack_require__.e(9569), __webpack_require__.e(2076), __webpack_require__.e(9993)]).then(__webpack_require__.bind(__webpack_require__, 32404)).then(m => m.InvoicesModule),
      data: {
        selectors: {
          project: false,
          team: false,
          employee: false
        },
        datePicker: {
          unitOfTime: 'month'
        }
      },
      resolve: {
        dates: _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_2__/* .DateRangePickerResolver */ .Q
      }
    }, {
      path: 'payments',
      loadChildren: () => Promise.all(/* import() */[__webpack_require__.e(2345), __webpack_require__.e(8722), __webpack_require__.e(3829), __webpack_require__.e(2177), __webpack_require__.e(3726), __webpack_require__.e(836), __webpack_require__.e(6089), __webpack_require__.e(5379), __webpack_require__.e(9569), __webpack_require__.e(7642)]).then(__webpack_require__.bind(__webpack_require__, 27486)).then(m => m.PaymentsModule),
      data: {
        selectors: {
          employee: false
        },
        datePicker: {
          unitOfTime: 'month'
        }
      },
      resolve: {
        dates: _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_2__/* .DateRangePickerResolver */ .Q
      }
    }, {
      path: 'pipelines',
      loadChildren: () => Promise.all(/* import() */[__webpack_require__.e(2345), __webpack_require__.e(8722), __webpack_require__.e(3726), __webpack_require__.e(836), __webpack_require__.e(1750), __webpack_require__.e(2076), __webpack_require__.e(7898)]).then(__webpack_require__.bind(__webpack_require__, 87262)).then(m => m.PipelinesModule),
      data: {
        selectors: {
          project: false,
          team: false,
          employee: false,
          date: false
        }
      }
    }]
  }, {
    path: 'employees',
    children: [{
      path: '',
      loadChildren: () => Promise.all(/* import() */[__webpack_require__.e(2345), __webpack_require__.e(8722), __webpack_require__.e(3829), __webpack_require__.e(2177), __webpack_require__.e(3726), __webpack_require__.e(836), __webpack_require__.e(8870), __webpack_require__.e(2202), __webpack_require__.e(8334), __webpack_require__.e(9669), __webpack_require__.e(7478), __webpack_require__.e(9084), __webpack_require__.e(9867), __webpack_require__.e(7483), __webpack_require__.e(8388), __webpack_require__.e(2076), __webpack_require__.e(1526)]).then(__webpack_require__.bind(__webpack_require__, 21526)).then(m => m.EmployeesModule)
    }, {
      path: 'schedules',
      loadChildren: () => __webpack_require__.e(/* import() */ 2271).then(__webpack_require__.bind(__webpack_require__, 72271)).then(m => m.ScheduleModule),
      data: {
        selectors: {
          project: false,
          team: false
        }
      }
    }, {
      path: 'appointments',
      loadChildren: () => Promise.all(/* import() */[__webpack_require__.e(170), __webpack_require__.e(3213), __webpack_require__.e(7439)]).then(__webpack_require__.bind(__webpack_require__, 17016)).then(m => m.AppointmentModule),
      data: {
        selectors: {
          project: false,
          team: false
        },
        datePicker: {
          unitOfTime: 'week',
          isDisablePastDate: true
        }
      },
      resolve: {
        dates: _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_2__/* .DateRangePickerResolver */ .Q
      }
    }, {
      path: 'event-types',
      loadChildren: () => Promise.all(/* import() */[__webpack_require__.e(2345), __webpack_require__.e(8722), __webpack_require__.e(3829), __webpack_require__.e(2177), __webpack_require__.e(3726), __webpack_require__.e(836), __webpack_require__.e(8870), __webpack_require__.e(2202), __webpack_require__.e(2076), __webpack_require__.e(3507)]).then(__webpack_require__.bind(__webpack_require__, 87867)).then(m => m.EventTypeModule),
      data: {
        selectors: {
          project: false,
          team: false
        }
      }
    }, {
      path: 'time-off',
      loadChildren: () => Promise.all(/* import() */[__webpack_require__.e(2345), __webpack_require__.e(8722), __webpack_require__.e(3829), __webpack_require__.e(2177), __webpack_require__.e(3726), __webpack_require__.e(836), __webpack_require__.e(8870), __webpack_require__.e(2202), __webpack_require__.e(1760), __webpack_require__.e(7460), __webpack_require__.e(2076), __webpack_require__.e(8955)]).then(__webpack_require__.bind(__webpack_require__, 73150)).then(m => m.TimeOffModule)
    }, {
      path: 'approvals',
      loadChildren: () => Promise.all(/* import() */[__webpack_require__.e(2345), __webpack_require__.e(8722), __webpack_require__.e(3829), __webpack_require__.e(2177), __webpack_require__.e(3726), __webpack_require__.e(836), __webpack_require__.e(8870), __webpack_require__.e(4232), __webpack_require__.e(7460), __webpack_require__.e(4782)]).then(__webpack_require__.bind(__webpack_require__, 72870)).then(m => m.ApprovalsModule),
      data: {
        selectors: {
          project: false,
          team: false
        }
      }
    }, {
      path: 'positions',
      loadChildren: () => Promise.all(/* import() */[__webpack_require__.e(2345), __webpack_require__.e(8722), __webpack_require__.e(3829), __webpack_require__.e(2177), __webpack_require__.e(3726), __webpack_require__.e(836), __webpack_require__.e(2076), __webpack_require__.e(2825)]).then(__webpack_require__.bind(__webpack_require__, 10450)).then(m => m.PositionsModule),
      data: {
        selectors: {
          project: false,
          team: false,
          employee: false,
          date: false
        }
      }
    }, {
      path: 'employee-level',
      loadChildren: () => Promise.all(/* import() */[__webpack_require__.e(2345), __webpack_require__.e(8722), __webpack_require__.e(3829), __webpack_require__.e(2177), __webpack_require__.e(3726), __webpack_require__.e(836), __webpack_require__.e(2076), __webpack_require__.e(5014)]).then(__webpack_require__.bind(__webpack_require__, 87953)).then(m => m.EmployeeLevelModule),
      data: {
        selectors: {
          project: false,
          team: false,
          employee: false,
          date: false
        }
      }
    }, {
      path: 'recurring-expenses',
      loadChildren: () => Promise.all(/* import() */[__webpack_require__.e(2345), __webpack_require__.e(8722), __webpack_require__.e(5110), __webpack_require__.e(3251)]).then(__webpack_require__.bind(__webpack_require__, 10070)).then(m => m.RecurringExpensesEmployeeModule)
    }, {
      path: 'candidates',
      loadChildren: () => Promise.all(/* import() */[__webpack_require__.e(2345), __webpack_require__.e(8722), __webpack_require__.e(3829), __webpack_require__.e(2177), __webpack_require__.e(3726), __webpack_require__.e(836), __webpack_require__.e(8870), __webpack_require__.e(2202), __webpack_require__.e(8334), __webpack_require__.e(9669), __webpack_require__.e(170), __webpack_require__.e(7478), __webpack_require__.e(9867), __webpack_require__.e(3812), __webpack_require__.e(8388), __webpack_require__.e(2076), __webpack_require__.e(478)]).then(__webpack_require__.bind(__webpack_require__, 54428)).then(m => m.CandidatesModule)
    }]
  }, {
    path: 'organization',
    children: [{
      path: 'equipment',
      loadChildren: () => Promise.all(/* import() */[__webpack_require__.e(2345), __webpack_require__.e(8722), __webpack_require__.e(3829), __webpack_require__.e(2177), __webpack_require__.e(3726), __webpack_require__.e(836), __webpack_require__.e(8870), __webpack_require__.e(2202), __webpack_require__.e(6161), __webpack_require__.e(427), __webpack_require__.e(165), __webpack_require__.e(1078)]).then(__webpack_require__.bind(__webpack_require__, 1078)).then(m => m.EquipmentModule),
      data: {
        selectors: {
          project: false,
          team: false,
          employee: false,
          date: false
        }
      }
    }, {
      path: 'equipment-sharing',
      loadChildren: () => Promise.all(/* import() */[__webpack_require__.e(2345), __webpack_require__.e(8722), __webpack_require__.e(3829), __webpack_require__.e(2177), __webpack_require__.e(3726), __webpack_require__.e(836), __webpack_require__.e(8870), __webpack_require__.e(2202), __webpack_require__.e(7007), __webpack_require__.e(9554)]).then(__webpack_require__.bind(__webpack_require__, 6434)).then(m => m.EquipmentSharingModule),
      data: {
        selectors: {
          project: false,
          team: false,
          employee: true,
          date: false
        }
      }
    }, {
      path: 'equipment-sharing-policy',
      loadChildren: () => Promise.all(/* import() */[__webpack_require__.e(2345), __webpack_require__.e(8722), __webpack_require__.e(3726), __webpack_require__.e(836), __webpack_require__.e(8184)]).then(__webpack_require__.bind(__webpack_require__, 26200)).then(m => m.EquipmentSharingPolicyModule),
      data: {
        selectors: {
          project: false,
          team: false,
          employee: false,
          date: false
        }
      }
    }, {
      path: 'inventory',
      loadChildren: () => Promise.all(/* import() */[__webpack_require__.e(2345), __webpack_require__.e(8722), __webpack_require__.e(3829), __webpack_require__.e(2177), __webpack_require__.e(3726), __webpack_require__.e(836), __webpack_require__.e(8870), __webpack_require__.e(8334), __webpack_require__.e(9669), __webpack_require__.e(4373), __webpack_require__.e(6161), __webpack_require__.e(236), __webpack_require__.e(165), __webpack_require__.e(2076), __webpack_require__.e(6167)]).then(__webpack_require__.bind(__webpack_require__, 55266)).then(m => m.InventoryModule)
    }, {
      path: 'tags',
      loadChildren: () => Promise.all(/* import() */[__webpack_require__.e(2345), __webpack_require__.e(8722), __webpack_require__.e(3829), __webpack_require__.e(2177), __webpack_require__.e(3726), __webpack_require__.e(836), __webpack_require__.e(8870), __webpack_require__.e(2202), __webpack_require__.e(7088), __webpack_require__.e(6831)]).then(__webpack_require__.bind(__webpack_require__, 57322)).then(m => m.TagsModule),
      data: {
        selectors: {
          project: false,
          team: false,
          employee: false,
          date: false
        }
      }
    }, {
      path: 'expense-recurring',
      loadChildren: () => Promise.all(/* import() */[__webpack_require__.e(2345), __webpack_require__.e(8722), __webpack_require__.e(5110), __webpack_require__.e(2427)]).then(__webpack_require__.bind(__webpack_require__, 32302)).then(m => m.ExpenseRecurringModule)
    }, {
      path: 'help-center',
      loadChildren: () => Promise.all(/* import() */[__webpack_require__.e(2345), __webpack_require__.e(8722), __webpack_require__.e(3829), __webpack_require__.e(2177), __webpack_require__.e(8870), __webpack_require__.e(2202), __webpack_require__.e(7204), __webpack_require__.e(9171)]).then(__webpack_require__.bind(__webpack_require__, 95998)).then(m => m.HelpCenterModule),
      data: {
        selectors: {
          project: false,
          team: false,
          employee: false,
          date: false
        }
      }
    }, {
      path: 'approval-policy',
      loadChildren: () => Promise.all(/* import() */[__webpack_require__.e(2345), __webpack_require__.e(8722), __webpack_require__.e(3726), __webpack_require__.e(836), __webpack_require__.e(8870), __webpack_require__.e(1938)]).then(__webpack_require__.bind(__webpack_require__, 57238)).then(m => m.ApprovalPolicyModule),
      data: {
        selectors: {
          project: false,
          team: false,
          employee: false,
          date: false
        }
      }
    }, {
      path: 'documents',
      loadChildren: () => Promise.all(/* import() */[__webpack_require__.e(2345), __webpack_require__.e(8722), __webpack_require__.e(3726), __webpack_require__.e(836), __webpack_require__.e(9838)]).then(__webpack_require__.bind(__webpack_require__, 17457)).then(m => m.DocumentsModule),
      data: {
        selectors: {
          project: false,
          team: false,
          employee: false,
          date: false
        }
      }
    }, {
      path: 'employment-types',
      loadChildren: () => Promise.all(/* import() */[__webpack_require__.e(2345), __webpack_require__.e(8722), __webpack_require__.e(3829), __webpack_require__.e(2177), __webpack_require__.e(3726), __webpack_require__.e(836), __webpack_require__.e(835)]).then(__webpack_require__.bind(__webpack_require__, 72556)).then(m => m.EmploymentTypesModule)
    }, {
      path: 'vendors',
      loadChildren: () => Promise.all(/* import() */[__webpack_require__.e(2345), __webpack_require__.e(8722), __webpack_require__.e(3829), __webpack_require__.e(2177), __webpack_require__.e(3726), __webpack_require__.e(836), __webpack_require__.e(3861)]).then(__webpack_require__.bind(__webpack_require__, 63198)).then(m => m.VendorsModule),
      data: {
        selectors: {
          project: false,
          team: false,
          employee: false,
          date: false
        }
      }
    }, {
      path: 'departments',
      loadChildren: () => Promise.all(/* import() */[__webpack_require__.e(2345), __webpack_require__.e(8722), __webpack_require__.e(3829), __webpack_require__.e(2177), __webpack_require__.e(3726), __webpack_require__.e(836), __webpack_require__.e(6235)]).then(__webpack_require__.bind(__webpack_require__, 84318)).then(m => m.DepartmentsModule),
      data: {
        selectors: {
          project: false,
          team: false,
          employee: true,
          date: true
        }
      }
    }, {
      path: 'projects',
      loadChildren: () => Promise.all(/* import() */[__webpack_require__.e(2345), __webpack_require__.e(8722), __webpack_require__.e(3829), __webpack_require__.e(2177), __webpack_require__.e(3726), __webpack_require__.e(836), __webpack_require__.e(8870), __webpack_require__.e(543), __webpack_require__.e(1707), __webpack_require__.e(2076), __webpack_require__.e(2808)]).then(__webpack_require__.bind(__webpack_require__, 32200)).then(m => m.ProjectsModule),
      data: {
        selectors: {
          project: false,
          team: false,
          employee: true,
          date: true
        }
      }
    }, {
      path: 'teams',
      loadChildren: () => Promise.all(/* import() */[__webpack_require__.e(2345), __webpack_require__.e(8722), __webpack_require__.e(3829), __webpack_require__.e(2177), __webpack_require__.e(3726), __webpack_require__.e(836), __webpack_require__.e(391)]).then(__webpack_require__.bind(__webpack_require__, 10026)).then(m => m.TeamsModule),
      data: {
        selectors: {
          project: false,
          team: false,
          employee: true,
          date: true
        }
      }
    }]
  }, {
    path: 'goals',
    children: [{
      path: '',
      loadChildren: () => Promise.all(/* import() */[__webpack_require__.e(2345), __webpack_require__.e(8722), __webpack_require__.e(3829), __webpack_require__.e(2177), __webpack_require__.e(3726), __webpack_require__.e(836), __webpack_require__.e(543), __webpack_require__.e(8956), __webpack_require__.e(6622), __webpack_require__.e(5684), __webpack_require__.e(7256), __webpack_require__.e(7089), __webpack_require__.e(9702)]).then(__webpack_require__.bind(__webpack_require__, 79702)).then(m => m.GoalsModule),
      data: {
        selectors: {
          project: false,
          team: false
        }
      }
    }, {
      path: 'reports',
      loadChildren: () => Promise.all(/* import() */[__webpack_require__.e(2345), __webpack_require__.e(8722), __webpack_require__.e(3829), __webpack_require__.e(2177), __webpack_require__.e(3726), __webpack_require__.e(836), __webpack_require__.e(8870), __webpack_require__.e(2202), __webpack_require__.e(2759), __webpack_require__.e(166), __webpack_require__.e(8180), __webpack_require__.e(8334), __webpack_require__.e(9669), __webpack_require__.e(9099), __webpack_require__.e(5774), __webpack_require__.e(170), __webpack_require__.e(7178), __webpack_require__.e(1458), __webpack_require__.e(543), __webpack_require__.e(6588), __webpack_require__.e(1750), __webpack_require__.e(7478), __webpack_require__.e(8956), __webpack_require__.e(9084), __webpack_require__.e(4373), __webpack_require__.e(5350), __webpack_require__.e(3213), __webpack_require__.e(5110), __webpack_require__.e(2180), __webpack_require__.e(1588), __webpack_require__.e(9867), __webpack_require__.e(6161), __webpack_require__.e(7288), __webpack_require__.e(6089), __webpack_require__.e(6622), __webpack_require__.e(9860), __webpack_require__.e(1760), __webpack_require__.e(7204), __webpack_require__.e(3812), __webpack_require__.e(1707), __webpack_require__.e(236), __webpack_require__.e(1297), __webpack_require__.e(7483), __webpack_require__.e(4243), __webpack_require__.e(3734), __webpack_require__.e(588), __webpack_require__.e(6076), __webpack_require__.e(1232), __webpack_require__.e(7007), __webpack_require__.e(4445), __webpack_require__.e(5398), __webpack_require__.e(4232), __webpack_require__.e(8264), __webpack_require__.e(1094), __webpack_require__.e(427), __webpack_require__.e(7607), __webpack_require__.e(7140), __webpack_require__.e(7088), __webpack_require__.e(4916), __webpack_require__.e(5684), __webpack_require__.e(9882), __webpack_require__.e(5379), __webpack_require__.e(6747), __webpack_require__.e(7622), __webpack_require__.e(2076), __webpack_require__.e(4575)]).then(__webpack_require__.bind(__webpack_require__, 36747)).then(m => m.WorkInProgressModule),
      data: {
        selectors: {
          project: false,
          team: false,
          employee: false,
          date: false,
          organization: false
        }
      }
    }, {
      path: 'settings',
      loadChildren: () => Promise.all(/* import() */[__webpack_require__.e(2345), __webpack_require__.e(8722), __webpack_require__.e(3726), __webpack_require__.e(836), __webpack_require__.e(6622), __webpack_require__.e(7089), __webpack_require__.e(4102)]).then(__webpack_require__.bind(__webpack_require__, 60702)).then(m => m.GoalSettingsModule),
      data: {
        selectors: {
          project: false,
          team: false,
          employee: false,
          date: false
        }
      }
    }]
  }, {
    path: 'reports',
    children: [{
      path: '',
      redirectTo: 'all',
      pathMatch: 'full'
    }, {
      path: 'all',
      loadChildren: () => __webpack_require__.e(/* import() */ 2780).then(__webpack_require__.bind(__webpack_require__, 52780)).then(m => m.AllReportModule),
      data: {
        selectors: {
          project: false,
          team: false,
          employee: false,
          date: false,
          organization: true
        }
      }
    }, {
      path: 'time-activity',
      loadChildren: () => Promise.all(/* import() */[__webpack_require__.e(2759), __webpack_require__.e(166), __webpack_require__.e(9099), __webpack_require__.e(6588), __webpack_require__.e(2180), __webpack_require__.e(620)]).then(__webpack_require__.bind(__webpack_require__, 92698)).then(m => m.TimeReportsModule)
    }, {
      path: 'weekly',
      loadChildren: () => Promise.all(/* import() */[__webpack_require__.e(2759), __webpack_require__.e(166), __webpack_require__.e(9099), __webpack_require__.e(6588), __webpack_require__.e(8760), __webpack_require__.e(3922)]).then(__webpack_require__.bind(__webpack_require__, 73922)).then(m => m.WeeklyTimeReportsModule)
    }, {
      path: 'apps-urls',
      loadChildren: () => Promise.all(/* import() */[__webpack_require__.e(2759), __webpack_require__.e(166), __webpack_require__.e(588), __webpack_require__.e(4323)]).then(__webpack_require__.bind(__webpack_require__, 23716)).then(m => m.AppsUrlsReportModule)
    }, {
      path: 'manual-time-edits',
      loadChildren: () => Promise.all(/* import() */[__webpack_require__.e(2759), __webpack_require__.e(166), __webpack_require__.e(5176)]).then(__webpack_require__.bind(__webpack_require__, 15598)).then(m => m.ManualTimeModule)
    }, {
      path: 'accounting',
      loadChildren: () => Promise.all(/* import() */[__webpack_require__.e(2345), __webpack_require__.e(8722), __webpack_require__.e(3829), __webpack_require__.e(2177), __webpack_require__.e(3726), __webpack_require__.e(836), __webpack_require__.e(8870), __webpack_require__.e(2202), __webpack_require__.e(2759), __webpack_require__.e(166), __webpack_require__.e(8180), __webpack_require__.e(8334), __webpack_require__.e(9669), __webpack_require__.e(9099), __webpack_require__.e(5774), __webpack_require__.e(170), __webpack_require__.e(7178), __webpack_require__.e(1458), __webpack_require__.e(543), __webpack_require__.e(6588), __webpack_require__.e(1750), __webpack_require__.e(7478), __webpack_require__.e(8956), __webpack_require__.e(9084), __webpack_require__.e(4373), __webpack_require__.e(5350), __webpack_require__.e(3213), __webpack_require__.e(5110), __webpack_require__.e(2180), __webpack_require__.e(1588), __webpack_require__.e(9867), __webpack_require__.e(6161), __webpack_require__.e(7288), __webpack_require__.e(6089), __webpack_require__.e(6622), __webpack_require__.e(9860), __webpack_require__.e(1760), __webpack_require__.e(7204), __webpack_require__.e(3812), __webpack_require__.e(1707), __webpack_require__.e(236), __webpack_require__.e(1297), __webpack_require__.e(7483), __webpack_require__.e(4243), __webpack_require__.e(3734), __webpack_require__.e(588), __webpack_require__.e(6076), __webpack_require__.e(1232), __webpack_require__.e(7007), __webpack_require__.e(4445), __webpack_require__.e(5398), __webpack_require__.e(4232), __webpack_require__.e(8264), __webpack_require__.e(1094), __webpack_require__.e(427), __webpack_require__.e(7607), __webpack_require__.e(7140), __webpack_require__.e(7088), __webpack_require__.e(4916), __webpack_require__.e(5684), __webpack_require__.e(9882), __webpack_require__.e(5379), __webpack_require__.e(6747), __webpack_require__.e(7622), __webpack_require__.e(2076), __webpack_require__.e(4575)]).then(__webpack_require__.bind(__webpack_require__, 36747)).then(m => m.WorkInProgressModule),
      data: {
        selectors: {
          project: false,
          team: false,
          employee: false,
          date: false,
          organization: false
        }
      }
    }, {
      path: 'expense',
      loadChildren: () => Promise.all(/* import() */[__webpack_require__.e(2759), __webpack_require__.e(166), __webpack_require__.e(9099), __webpack_require__.e(6076), __webpack_require__.e(2076), __webpack_require__.e(1648)]).then(__webpack_require__.bind(__webpack_require__, 57382)).then(m => m.ExpensesReportModule)
    }, {
      path: 'payments',
      loadChildren: () => Promise.all(/* import() */[__webpack_require__.e(2759), __webpack_require__.e(166), __webpack_require__.e(9099), __webpack_require__.e(6089), __webpack_require__.e(1232), __webpack_require__.e(804)]).then(__webpack_require__.bind(__webpack_require__, 51226)).then(m => m.PaymentReportModule)
    }, {
      path: 'amounts-owed',
      loadChildren: () => Promise.all(/* import() */[__webpack_require__.e(2759), __webpack_require__.e(166), __webpack_require__.e(9099), __webpack_require__.e(8264), __webpack_require__.e(1745)]).then(__webpack_require__.bind(__webpack_require__, 33302)).then(m => m.AmountsOwedReportModule)
    }, {
      path: 'weekly-limits',
      loadChildren: () => Promise.all(/* import() */[__webpack_require__.e(2759), __webpack_require__.e(166), __webpack_require__.e(48)]).then(__webpack_require__.bind(__webpack_require__, 78822)).then(m => m.TimeLimitReportModule)
    }, {
      path: 'daily-limits',
      loadChildren: () => Promise.all(/* import() */[__webpack_require__.e(2759), __webpack_require__.e(166), __webpack_require__.e(48)]).then(__webpack_require__.bind(__webpack_require__, 78822)).then(m => m.TimeLimitReportModule)
    }, {
      path: 'project-budgets',
      loadChildren: () => Promise.all(/* import() */[__webpack_require__.e(2759), __webpack_require__.e(166), __webpack_require__.e(8116)]).then(__webpack_require__.bind(__webpack_require__, 71162)).then(m => m.ProjectBudgetsReportModule)
    }, {
      path: 'client-budgets',
      loadChildren: () => Promise.all(/* import() */[__webpack_require__.e(2759), __webpack_require__.e(166), __webpack_require__.e(3380)]).then(__webpack_require__.bind(__webpack_require__, 12506)).then(m => m.ClientBudgetsReportModule)
    }, {
      path: '*',
      component: _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_3__/* .NotFoundComponent */ .X
    }]
  }, {
    path: 'help',
    loadChildren: () => __webpack_require__.e(/* import() */ 5318).then(__webpack_require__.bind(__webpack_require__, 5318)).then(m => m.HelpModule)
  }, {
    path: 'about',
    loadChildren: () => __webpack_require__.e(/* import() */ 6118).then(__webpack_require__.bind(__webpack_require__, 36118)).then(m => m.AboutModule)
  }, {
    path: 'integrations',
    loadChildren: () => Promise.all(/* import() */[__webpack_require__.e(2345), __webpack_require__.e(8722), __webpack_require__.e(2076), __webpack_require__.e(5118)]).then(__webpack_require__.bind(__webpack_require__, 95118)).then(m => m.IntegrationsModule),
    canActivate: [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_4__/* .PermissionsGuard */ .a],
    data: {
      permissions: {
        only: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_5__/* .PermissionsEnum */ .U.INTEGRATION_ADD, _gauzy_contracts__WEBPACK_IMPORTED_MODULE_5__/* .PermissionsEnum */ .U.INTEGRATION_EDIT],
        redirectTo: '/pages/dashboard'
      },
      selectors: {
        project: false,
        team: false,
        employee: false,
        date: false,
        organization: true
      }
    }
  }, {
    path: 'candidates',
    loadChildren: () => Promise.all(/* import() */[__webpack_require__.e(2345), __webpack_require__.e(8722), __webpack_require__.e(3829), __webpack_require__.e(2177), __webpack_require__.e(3726), __webpack_require__.e(836), __webpack_require__.e(8870), __webpack_require__.e(2202), __webpack_require__.e(8334), __webpack_require__.e(9669), __webpack_require__.e(170), __webpack_require__.e(7478), __webpack_require__.e(9867), __webpack_require__.e(3812), __webpack_require__.e(8388), __webpack_require__.e(2076), __webpack_require__.e(478)]).then(__webpack_require__.bind(__webpack_require__, 54428)).then(m => m.CandidatesModule)
  }, {
    path: 'users',
    loadChildren: () => Promise.all(/* import() */[__webpack_require__.e(2345), __webpack_require__.e(8722), __webpack_require__.e(3829), __webpack_require__.e(2177), __webpack_require__.e(3726), __webpack_require__.e(836), __webpack_require__.e(8870), __webpack_require__.e(2202), __webpack_require__.e(8334), __webpack_require__.e(9669), __webpack_require__.e(7178), __webpack_require__.e(7478), __webpack_require__.e(1588), __webpack_require__.e(9860), __webpack_require__.e(9882), __webpack_require__.e(8388), __webpack_require__.e(1928), __webpack_require__.e(2076), __webpack_require__.e(4154)]).then(__webpack_require__.bind(__webpack_require__, 84154)).then(m => m.UsersModule),
    data: {
      selectors: {
        project: false,
        team: false,
        employee: false,
        date: false
      }
    }
  }, {
    path: 'organizations',
    loadChildren: () => Promise.all(/* import() */[__webpack_require__.e(2345), __webpack_require__.e(8722), __webpack_require__.e(3829), __webpack_require__.e(2177), __webpack_require__.e(3726), __webpack_require__.e(836), __webpack_require__.e(8870), __webpack_require__.e(2202), __webpack_require__.e(8334), __webpack_require__.e(9669), __webpack_require__.e(7178), __webpack_require__.e(9860), __webpack_require__.e(1928), __webpack_require__.e(8420)]).then(__webpack_require__.bind(__webpack_require__, 65438)).then(m => m.OrganizationsModule)
  }, {
    path: 'auth',
    loadChildren: () => Promise.all(/* import() */[__webpack_require__.e(3829), __webpack_require__.e(2177), __webpack_require__.e(8870), __webpack_require__.e(2202), __webpack_require__.e(1588), __webpack_require__.e(6096)]).then(__webpack_require__.bind(__webpack_require__, 61536)).then(m => m.AuthModule)
  }, {
    path: 'settings',
    loadChildren: () => Promise.all(/* import() */[__webpack_require__.e(3829), __webpack_require__.e(2177), __webpack_require__.e(8870), __webpack_require__.e(2202), __webpack_require__.e(2076), __webpack_require__.e(3795)]).then(__webpack_require__.bind(__webpack_require__, 58434)).then(m => m.SettingsModule)
  }, {
    path: 'legal',
    loadChildren: () => __webpack_require__.e(/* import() */ 2514).then(__webpack_require__.bind(__webpack_require__, 82514)).then(m => m.PageLegalModule)
  }, {
    path: '**',
    component: _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_3__/* .NotFoundComponent */ .X,
    data: {
      selectors: false
    }
  }]
}];
let PagesRoutingModule = /*#__PURE__*/(() => {
  class PagesRoutingModule {
    static {
      this.ɵfac = function PagesRoutingModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || PagesRoutingModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵdefineNgModule"] */ .$C({
        type: PagesRoutingModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__/* .RouterModule */ .iI.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_7__/* .RouterModule */ .iI]
      });
    }
  }
  return PagesRoutingModule;
})();

/***/ }),

/***/ 64060:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   U: () => (/* binding */ mergeAll)
/* harmony export */ });
/* harmony import */ var _mergeMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(99333);
/* harmony import */ var _util_identity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(89685);


function mergeAll(concurrent = Infinity) {
  return (0,_mergeMap__WEBPACK_IMPORTED_MODULE_0__/* .mergeMap */ .Z)(_util_identity__WEBPACK_IMPORTED_MODULE_1__/* .identity */ .D, concurrent);
}
//# sourceMappingURL=mergeAll.js.map

/***/ }),

/***/ 73891:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   J: () => (/* binding */ pairwise)
/* harmony export */ });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7661);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25969);


function pairwise() {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__/* .operate */ .N)((source, subscriber) => {
    let prev;
    let hasPrev = false;
    source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__/* .createOperatorSubscriber */ ._)(subscriber, value => {
      const p = prev;
      prev = value;
      hasPrev && subscriber.next([p, value]);
      hasPrev = true;
    }));
  });
}
//# sourceMappingURL=pairwise.js.map

/***/ }),

/***/ 76496:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   m: () => (/* binding */ PagesComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73014);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(64411);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(9620);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(19223);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(23423);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(72781);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(73246);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(73891);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(87081);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(61851);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(64320);
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(79475);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(26024);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(17785);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(43011);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(98035);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(71924);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(57044);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(93056);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(45245);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(90805);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(52528);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(37661);
/* harmony import */ var _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38546);
/* harmony import */ var _reports_all_report_report_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20463);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26860);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(14572);
/* harmony import */ var _packages_ui_core_theme_src_lib_layouts_one_column_one_column_layout__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(1340);
/* harmony import */ var _packages_ui_core_core_src_lib_components_main_nav_menu_main_nav_menu_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(23724);





















function PagesComponent_ngx_one_column_layout_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "ngx-one-column-layout");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(1, "ga-main-nav-menu")(2, "router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
  }
}
let PagesComponent = class PagesComponent extends _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_2__/* .TranslationBaseComponent */ .K {
  constructor(translate, _router, _route, _store, _reportService, _ngxPermissionsService, _usersService, _authStrategy, _integrationsService, _integrationEntitySettingServiceStoreService, _navMenuBuilderService, _permissionsService) {
    super(translate);
    this.translate = translate;
    this._router = _router;
    this._route = _route;
    this._store = _store;
    this._reportService = _reportService;
    this._ngxPermissionsService = _ngxPermissionsService;
    this._usersService = _usersService;
    this._authStrategy = _authStrategy;
    this._integrationsService = _integrationsService;
    this._integrationEntitySettingServiceStoreService = _integrationEntitySettingServiceStoreService;
    this._navMenuBuilderService = _navMenuBuilderService;
    this._permissionsService = _permissionsService;
    this.menu = [];
    this.reportMenuItems = [];
  }
  ngOnInit() {
    var _this = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(function* () {
      _this._route.data.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__/* .filter */ .p)(({
        user
      }) => !!user), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .M)(({
        user
      }) => {
        //When a new user registers & logs in for the first time, he/she does not have tenantId.
        //In this case, we have to redirect the user to the onboarding page to create their first organization, tenant, role.
        if (!user.tenantId) {
          _this._router.navigate(['/onboarding/tenant']);
          return;
        }
      }),
      // Handle component lifecycle to avoid memory leaks
      (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__/* .untilDestroyed */ .s)(_this)).subscribe();
      yield _this._createEntryPoint();
      _this._store.selectedOrganization$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__/* .filter */ .p)(organization => !!organization), (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_7__/* .distinctUntilChange */ .nI)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__/* .pairwise */ .J)(),
      // Pair each emitted value with the previous one
      (0,rxjs__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .M)(([previousOrganization]) => {
        // Remove the specified menu items for previous selected organization
        _this.removeOrganizationReportsMenuItems(previousOrganization);
      }), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__/* .untilDestroyed */ .s)(_this)).subscribe();
      _this._store.selectedOrganization$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__/* .filter */ .p)(organization => !!organization), (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_7__/* .distinctUntilChange */ .nI)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .M)(organization => _this.organization = organization), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .M)(() => _this.getReportsMenus()), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .M)(() => _this.getIntegrationEntitySettings()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__/* .untilDestroyed */ .s)(_this)).subscribe();
      _this._store.userRolePermissions$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__/* .filter */ .p)(permissions => (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_7__/* .isNotEmpty */ .hj)(permissions)), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__/* .map */ .T)(permissions => permissions.map(({
        permission
      }) => permission)), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .M)(permissions => {
        _this._ngxPermissionsService.flushPermissions();
        _this._ngxPermissionsService.loadPermissions(permissions);
      }), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__/* .untilDestroyed */ .s)(_this)).subscribe();
      _this._reportService.menuItems$.pipe((0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_7__/* .distinctUntilChange */ .nI)(), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__/* .untilDestroyed */ .s)(_this)).subscribe(menuItems => {
        // Convert the menuItems object to an array
        const reportItems = menuItems ? Object.values(menuItems) : [];
        _this.reportMenuItems = reportItems.map(item => ({
          id: item.slug,
          title: item.name,
          link: `/pages/reports/${item.slug}`,
          icon: item.iconClass,
          data: {
            translationKey: item.name
          }
        }));
        // Add the report menu items to the navigation menu
        _this.addOrRemoveOrganizationReportsMenuItems();
      });
    })();
  }
  /**
   * Executes after the view initialization.
   */
  ngAfterViewInit() {
    // Merge observables to handle changes in job matching entity settings
    const merge$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_10__/* .merge */ .h)(this._integrationEntitySettingServiceStoreService.jobMatchingEntity$.pipe((0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_7__/* .distinctUntilChange */ .nI)(),
    // Ensure that only distinct changes are considered
    (0,rxjs__WEBPACK_IMPORTED_MODULE_4__/* .filter */ .p)(({
      currentValue
    }) => !!currentValue),
    // Filter out falsy values
    (0,rxjs__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .M)(({
      currentValue
    }) => {
      // Update component properties based on the current job matching entity settings
      const isEmployeeJobMatchingEntity = !!currentValue.sync && !!currentValue.isActive;
      // Add or remove the jobs navigation menu items based on the current job matching entity
      isEmployeeJobMatchingEntity ? this.addJobsNavigationMenuItems() : this.removeJobsNavigationMenuItems();
    })), this._store.user$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_11__/* .take */ .s)(1), (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_7__/* .distinctUntilChange */ .nI)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__/* .filter */ .p)(user => !!user && !!user.employee?.id), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .M)(() => this.addTasksNavigationMenuItems())), this._store.selectedOrganization$.pipe((0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_7__/* .distinctUntilChange */ .nI)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__/* .filter */ .p)(organization => !!organization), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .M)(organization => this.addOrganizationManageMenuItem(organization))));
    // Subscribe to the merge$ observable
    merge$.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__/* .untilDestroyed */ .s)(this)).subscribe();
  }
  /**
   * Removes the report menu items associated with the current organization.
   *
   * This function checks if the organization is defined. If not, it logs a warning and exits early.
   * If the organization is defined, it constructs item IDs based on the organization and tenant ID
   * and removes these items from the navigation menu.
   *
   * @returns {void} This function does not return a value.
   */
  removeOrganizationReportsMenuItems(organization) {
    // Return early if the organization is not defined, logging a warning
    if (!organization) {
      console.warn(`Organization not defined. Unable to remove menu items.`);
      return;
    }
    // Destructure organization properties
    const {
      id: organizationId,
      tenantId
    } = organization;
    // Generate the item IDs to remove and call the service method
    const itemIdsToRemove = this.getReportMenuBaseItemIds().map(itemId => `${itemId}-${organizationId}-${tenantId}`);
    this._navMenuBuilderService.removeNavMenuItems(itemIdsToRemove, 'reports');
  }
  /**
   * Adds report menu items to the organization's navigation menu.
   */
  addOrRemoveOrganizationReportsMenuItems() {
    if (!this.organization) {
      console.warn('Organization not defined. Unable to add/remove menu items.');
      return;
    }
    const {
      id: organizationId,
      tenantId
    } = this.organization;
    // Remove old menu items before constructing new ones for the organization
    this.removeOrganizationReportsMenuItems(this.organization);
    // Iterate over each report and add it to the navigation menu
    this.reportMenuItems.forEach(report => {
      // Validate the structure of each report item
      if (report?.id && report?.title) {
        this._navMenuBuilderService.addNavMenuItem({
          id: `${report.id}-${organizationId}-${tenantId}`,
          // Unique identifier for the menu item
          title: report.title,
          // The title of the menu item
          icon: report.icon,
          // The icon class for the menu item
          link: report.link,
          // The link where the menu item directs
          data: report.data // The data associated with the menu item
        }, 'reports' // The id of the section where this item should be added
        );
      }
    });
  }
  /**
   * Retrieves the base item IDs for the report menu.
   * These IDs represent the default menu items that are available in the report menu.
   * @returns An array containing the base item IDs.
   */
  getReportMenuBaseItemIds() {
    // Define the base item IDs
    return ['amounts-owed',
    // Outstanding amounts
    'apps-urls',
    // Applications and URLs
    'client-budgets',
    // Budgets per client
    'daily-limits',
    // Daily spending limits
    'expense',
    // Expense reports
    'manual-time-edits',
    // Edits in time logs
    'payments',
    // Payment transactions
    'project-budgets',
    // Budgets per project
    'time-activity',
    // Time-based activities
    'weekly',
    // Weekly summaries
    'weekly-limits' // Weekly spending limits
    ];
  }
  /**
   * Adds navigation menu item for managing organization.
   */
  addOrganizationManageMenuItem(organization) {
    this._navMenuBuilderService.addNavMenuItem({
      id: 'organization-manage',
      // Unique identifier for the menu item
      title: 'Manage',
      // The title of the menu item
      icon: 'fas fa-globe-americas',
      // The icon class for the menu item, using FontAwesome in this case
      link: `/pages/organizations/edit/${organization?.id}`,
      // The link where the menu item directs
      pathMatch: 'prefix',
      data: {
        translationKey: 'MENU.MANAGE',
        permissionKeys: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_12__/* .PermissionsEnum */ .U.ALL_ORG_EDIT],
        // Key for translation (i18n)
        featureKey: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_13__/* .FeatureEnum */ .A9.FEATURE_ORGANIZATION //
      }
    }, 'organization', 'organization-equipment'); // The id of the section where this item should be added
  }
  /**
   * Adds navigation menu items for tasks.
   */
  addTasksNavigationMenuItems() {
    this._navMenuBuilderService.addNavMenuItem({
      id: 'tasks-my-tasks',
      // Unique identifier for the menu item
      title: 'My Tasks',
      // The title of the menu item
      icon: 'fas fa-user',
      // The icon class for the menu item, using FontAwesome in this case
      link: '/pages/tasks/me',
      // The link where the menu item directs
      data: {
        translationKey: 'MENU.MY_TASKS',
        // Key for translation (i18n)
        permissionKeys: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_12__/* .PermissionsEnum */ .U.ALL_ORG_VIEW, _gauzy_contracts__WEBPACK_IMPORTED_MODULE_12__/* .PermissionsEnum */ .U.ORG_TASK_VIEW],
        // Array of permission keys required for this item
        featureKey: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_13__/* .FeatureEnum */ .A9.FEATURE_MY_TASK,
        //
        ...(this._store.hasAnyPermission(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_12__/* .PermissionsEnum */ .U.ALL_ORG_EDIT, _gauzy_contracts__WEBPACK_IMPORTED_MODULE_12__/* .PermissionsEnum */ .U.ORG_TASK_ADD) && {
          add: '/pages/tasks/me?openAddDialog=true' //
        })
      }
    }, 'tasks', 'tasks-team'); // The id of the section where this item should be added
  }
  /**
   * Add navigation menu items for jobs browse and matching.
   */
  addJobsNavigationMenuItems() {
    this._navMenuBuilderService.addNavMenuItems([{
      id: 'jobs-browse',
      // Unique identifier for the menu item
      title: 'Browse',
      // The title of the menu item
      icon: 'fas fa-list',
      // The icon class for the menu item, using FontAwesome in this case
      link: '/pages/jobs/search',
      // The link where the menu item directs
      data: {
        translationKey: 'MENU.JOBS_SEARCH',
        // Key for translation (i18n)
        permissionKeys: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_12__/* .PermissionsEnum */ .U.ORG_JOB_SEARCH] // Array of permission keys required for this item
      }
    }, {
      id: 'jobs-matching',
      // Unique identifier for the menu item
      title: 'Matching',
      // The title of the menu item
      icon: 'fas fa-user',
      // The icon class for the menu item, using FontAwesome in this case
      link: '/pages/jobs/matching',
      // The link where the menu item directs
      data: {
        translationKey: 'MENU.JOBS_MATCHING',
        // Key for translation (i18n)
        permissionKeys: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_12__/* .PermissionsEnum */ .U.ORG_JOB_MATCHING_VIEW] // Array of permission keys required for this item
      }
    }], 'jobs', 'jobs-proposal-template'); // The id of the section where this item should be added
  }
  /**
   * Removes the navigation menu items related to jobs.
   */
  removeJobsNavigationMenuItems() {
    // Remove the specified menu items related to jobs from the 'jobs' section
    this._navMenuBuilderService.removeNavMenuItems(['jobs-browse', 'jobs-matching'], 'jobs');
  }
  /**
   * Retrieves and processes integration entity settings for the specified organization.
   * This function fetches integration data, filters, and updates the job matching entity state.
   * If the organization is not available, the function exits early.
   */
  getIntegrationEntitySettings() {
    // Check if the organization is available
    if (!this.organization) {
      return;
    }
    // Extract necessary properties from the organization
    const {
      id: organizationId,
      tenantId
    } = this.organization;
    // Fetch integration data from the service based on specified options
    const integration$ = this._integrationsService.getIntegrationByOptions({
      organizationId,
      tenantId,
      name: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_14__/* .IntegrationEnum */ .I5.GAUZY_AI,
      relations: ['entitySettings']
    });
    // Update job matching entity setting using the integration$ observable
    this._integrationEntitySettingServiceStoreService.updateAIJobMatchingEntity(integration$).subscribe();
  }
  /**
   * Retrieves the report menu items for a specific organization.
   *
   * @return {Promise<void>} - A promise that resolves when the report menu items are retrieved.
   */
  getReportsMenus() {
    var _this2 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(function* () {
      if (!_this2.organization) {
        return;
      }
      const {
        id: organizationId,
        tenantId
      } = _this2.organization;
      yield _this2._reportService.getReportMenuItems({
        tenantId,
        organizationId
      });
    })();
  }
  /*
   * This is app entry point after login
   */
  _createEntryPoint() {
    var _this3 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(function* () {
      const id = _this3._store.userId;
      if (!id) return;
      const relations = ['role', 'tenant', 'tenant.featureOrganizations', 'tenant.featureOrganizations.feature'];
      _this3.user = yield _this3._usersService.getMe(relations, true);
      _this3._authStrategy.electronAuthentication({
        user: _this3.user,
        token: _this3._store.token
      });
      //When a new user registers & logs in for the first time, he/she does not have tenantId.
      //In this case, we have to redirect the user to the onboarding page to create their first organization, tenant, role.
      if (!_this3.user.tenantId) {
        _this3._router.navigate(['/onboarding/tenant']);
        return;
      }
      _this3._store.user = _this3.user;
      //Load permissions
      _this3._permissionsService.loadPermissions();
      //tenant enabled/disabled features for relatives organizations
      const {
        tenant
      } = _this3.user;
      _this3._store.featureTenant = tenant.featureOrganizations.filter(item => !item.organizationId);
    })();
  }
  ngOnDestroy() {
    // Remove the report menu items associated with the current organization before destroying the component
    this.removeOrganizationReportsMenuItems(this.organization);
  }
  static {
    this.ɵfac = function PagesComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || PagesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__/* .TranslateService */ .c$), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_router__WEBPACK_IMPORTED_MODULE_16__/* .Router */ .Ix), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_router__WEBPACK_IMPORTED_MODULE_16__/* .ActivatedRoute */ .nX), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_17__/* .Store */ .il), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_reports_all_report_report_service__WEBPACK_IMPORTED_MODULE_0__/* .ReportService */ .GN), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(ngx_permissions__WEBPACK_IMPORTED_MODULE_18__/* .NgxPermissionsService */ .$R), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_19__/* .UsersService */ .g), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_20__/* .AuthStrategy */ .m), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_21__/* .IntegrationsService */ .J), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_22__/* .IntegrationEntitySettingServiceStoreService */ .t), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_23__/* .NavMenuBuilderService */ .v), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_24__/* .PermissionsService */ .K));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineComponent"] */ .VBU({
      type: PagesComponent,
      selectors: [["ngx-pages"]],
      standalone: false,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
      decls: 1,
      vars: 1,
      consts: [[4, "ngIf"]],
      template: function PagesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(0, PagesComponent_ngx_one_column_layout_0_Template, 3, 0, "ngx-one-column-layout", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngIf", !!ctx.menu && ctx.user);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_25__/* .NgIf */ .bT, _angular_router__WEBPACK_IMPORTED_MODULE_16__/* .RouterOutlet */ .n3, _packages_ui_core_theme_src_lib_layouts_one_column_one_column_layout__WEBPACK_IMPORTED_MODULE_26__/* .OneColumnLayoutComponent */ .i, _packages_ui_core_core_src_lib_components_main_nav_menu_main_nav_menu_component__WEBPACK_IMPORTED_MODULE_27__/* .MainNavMenuComponent */ .x],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n@media screen and (max-width: 1440px) {\n    .transition {\n    background: var(--gauzy-card-1);\n  }\n    .transition.show {\n    position: relative;\n    z-index: 10;\n    background: var(--gauzy-card-1) !important;\n    box-shadow: var(--gauzy-shadow);\n  }\n    .transition .actions {\n    background: var(--gauzy-card-1) !important;\n  }\n}\n[_nghost-%COMP%]     router-outlet + * {\n  display: block;\n  animation: _ngcontent-%COMP%_fade 1s;\n}\n@keyframes _ngcontent-%COMP%_fade {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n[_nghost-%COMP%]     angular2-smart-table nav {\n  width: 100%;\n}\n[_nghost-%COMP%]     angular2-smart-table .angular2-smart-row.selected {\n  background: rgba(99, 19, 19, 0.05);\n}\n[_nghost-%COMP%]     angular2-smart-table angular2-smart-table-title a {\n  color: var(--smart-table-fg);\n}\n[_nghost-%COMP%]     angular2-smart-table .form-control {\n  background-color: var(--input-basic-background-color);\n  border-color: var(--input-basic-border-color);\n  border-style: var(--input-border-style);\n  border-width: var(--input-border-width);\n  color: var(--input-basic-text-color);\n}\n[_nghost-%COMP%]     angular2-smart-table .form-control::placeholder {\n  color: var(--input-basic-placeholder-text-color);\n  text-overflow: ellipsis;\n}\n[_nghost-%COMP%]     angular2-smart-table :nth-child(2) {\n  overflow-x: unset !important;\n}"]
    });
  }
};
PagesComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_28__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__/* .UntilDestroy */ .d)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_28__/* .__metadata */ .Sn)("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__/* .TranslateService */ .c$, _angular_router__WEBPACK_IMPORTED_MODULE_16__/* .Router */ .Ix, _angular_router__WEBPACK_IMPORTED_MODULE_16__/* .ActivatedRoute */ .nX, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_17__/* .Store */ .il, _reports_all_report_report_service__WEBPACK_IMPORTED_MODULE_0__/* .ReportService */ .GN, ngx_permissions__WEBPACK_IMPORTED_MODULE_18__/* .NgxPermissionsService */ .$R, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_19__/* .UsersService */ .g, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_20__/* .AuthStrategy */ .m, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_21__/* .IntegrationsService */ .J, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_22__/* .IntegrationEntitySettingServiceStoreService */ .t, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_23__/* .NavMenuBuilderService */ .v, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_24__/* .PermissionsService */ .K])], PagesComponent);


/***/ }),

/***/ 90805:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   t: () => (/* binding */ IntegrationEntitySettingServiceStoreService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(55598);
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88326);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39855);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(52738);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(79708);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(41598);
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86014);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(98035);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(26860);







let IntegrationEntitySettingServiceStoreService = /*#__PURE__*/(() => {
  let IntegrationEntitySettingServiceStoreService = class IntegrationEntitySettingServiceStoreService {
    constructor() {
      // Declare a private BehaviorSubject named '_jobMatchingEntity$' with an initial value.
      // This BehaviorSubject will hold and emit the current state of job matching entity settings synchronization.
      this._jobMatchingEntity$ = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__/* .BehaviorSubject */ .t({
        previousValue: null,
        currentValue: null
      });
      this.jobMatchingEntity$ = this._jobMatchingEntity$.asObservable();
      // Declare a private BehaviorSubject named '_entitiesToSync$' with an initial value.
      // This BehaviorSubject will hold and emit the current state of entity settings synchronization.
      this._entitiesToSync$ = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__/* .BehaviorSubject */ .t({
        previousValue: [],
        currentValue: []
      });
      // Declare a public Observable named 'entitiesToSync$' that exposes the data from '_entitiesToSync$'.
      this.entitiesToSync$ = this._entitiesToSync$.asObservable();
    }
    /**
     * Create an IEntitySettingToSync object based on the provided items.
     * @param items - An array of IIntegrationEntitySetting items.
     * @returns An IEntitySettingToSync object containing previous and current values.
     */
    setEntitySettingsValue(items) {
      // Create an IEntitySettingToSync object
      this._entitiesToSync$.next({
        previousValue: (0,underscore__WEBPACK_IMPORTED_MODULE_0__/* .clone */ .o8)(items),
        // Clone the input items as the previous value
        currentValue: items // Set the input items as the current value
      });
    }
    /**
     * Get the current value of entity settings synchronization.
     * @returns The current value as an IEntitySettingToSync object.
     */
    getEntitySettingsValue() {
      // Use the 'getValue' method of '_entitiesToSync$' to retrieve the current value
      return this._entitiesToSync$.getValue();
    }
    /**
     * Sets the job matching entity state in the IntegrationEntitySettingServiceStoreService.
     * This function takes a new job matching entity setting and updates the internal state.
     *
     * @param newEntity - The new job matching entity setting to be set. It represents the updated state for job matching entities.
     */
    setJobMatchingEntity(newEntity) {
      // Retrieve the current value from the '_jobMatchingEntity$' BehaviorSubject
      const {
        currentValue
      } = this._jobMatchingEntity$.getValue();
      // Update the job matching entity state using 'next' on the BehaviorSubject
      this._jobMatchingEntity$.next({
        previousValue: currentValue,
        currentValue: newEntity
      });
    }
    /**
     * Updates the AI job matching entity setting in IntegrationEntitySettingServiceStoreService
     * based on the provided integration stream.
     *
     * @param integration$ - An Observable stream of IIntegrationTenant representing the integration data.
     * @returns An Observable stream of IIntegrationEntitySetting representing the updated AI job matching entity setting.
     */
    updateAIJobMatchingEntity(integration$) {
      return integration$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .tap */ .M)(integration => {
        if (!integration) {
          // If integration is falsy, set a default entity setting and exit the function
          this.setJobMatchingEntity({
            entity: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__/* .IntegrationEntity */ .c2.JOB_MATCHING,
            sync: false,
            isActive: false
          });
          return;
        }
      }),
      // Extracting the 'entitySettings' property from the 'integration_tenant' object
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .filter */ .p)(integration => !!integration && !!integration.isActive),
      // Maps the integration to its 'entitySettings' property
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .map */ .T)(integration => integration.entitySettings),
      // Finding the entity setting related to the specified entity type
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .map */ .T)(entitySettings => entitySettings.find(setting => setting.entity === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__/* .IntegrationEntity */ .c2.JOB_MATCHING)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .filter */ .p)(entity => !!entity),
      // Updating the specified component property with the fetched entity setting
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .tap */ .M)(entity => this.setJobMatchingEntity(entity)),
      // Handling the component lifecycle to avoid memory leaks
      (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__/* .untilDestroyed */ .s)(this));
    }
    static {
      this.ɵfac = function IntegrationEntitySettingServiceStoreService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || IntegrationEntitySettingServiceStoreService)();
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵdefineInjectable"] */ .jDH({
        token: IntegrationEntitySettingServiceStoreService,
        factory: IntegrationEntitySettingServiceStoreService.ɵfac,
        providedIn: 'root'
      });
    }
  };
  IntegrationEntitySettingServiceStoreService = (0,tslib__WEBPACK_IMPORTED_MODULE_8__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__/* .UntilDestroy */ .d)(), (0,tslib__WEBPACK_IMPORTED_MODULE_8__/* .__metadata */ .Sn)("design:paramtypes", [])], IntegrationEntitySettingServiceStoreService);
  return IntegrationEntitySettingServiceStoreService;
})();


/***/ }),

/***/ 98028:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   u: () => (/* binding */ UserResolver)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9620);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(70078);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4478);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(39855);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(56891);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(90999);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57044);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(54263);




/**
 * Resolves the current user data and handles navigation based on the user's tenant status.
 *
 * @returns An observable of the user ID or an observable of error in case of failure.
 */
const UserResolver = () => {
  const _router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__/* .inject */ .WQX)(_angular_router__WEBPACK_IMPORTED_MODULE_1__/* .Router */ .Ix);
  const _usersService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__/* .inject */ .WQX)(_services__WEBPACK_IMPORTED_MODULE_2__/* .UsersService */ .g);
  const _errorHandlingService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__/* .inject */ .WQX)(_services__WEBPACK_IMPORTED_MODULE_3__/* .ErrorHandlingService */ .X);
  // Fetch user data
  const user$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_4__/* .from */ .H)(_usersService.getMe());
  // Fetch user data from the service
  return user$.pipe(
  // Debounce the request to avoid excessive API calls
  (0,rxjs__WEBPACK_IMPORTED_MODULE_5__/* .debounceTime */ .B)(100),
  // Check if the user has a tenant ID
  (0,rxjs__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .M)(user => {
    if (!user.tenantId) {
      _router.navigate(['/onboarding/tenant']);
      return;
    }
  }),
  // Handle errors
  (0,rxjs__WEBPACK_IMPORTED_MODULE_7__/* .catchError */ .W)(error => {
    // Handle and log errors using the _errorHandlingService
    _errorHandlingService.handleError(error);
    // Return null to indicate an error
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(null);
  }));
};

/***/ })

}]);