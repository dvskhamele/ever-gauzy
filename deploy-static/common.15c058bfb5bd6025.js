(self["webpackChunkgauzy"] = self["webpackChunkgauzy"] || []).push([[2076],{

/***/ 6828:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ PageRouteRegistryService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);


let PageRouteRegistryService = /*#__PURE__*/(() => {
  class PageRouteRegistryService {
    constructor() {
      /**
       * Registry for storing page route configurations.
       *
       * This Map stores arrays of PageRouteRegistryConfig objects, keyed by PageRouteRegistryId.
       */
      this.registry = new Map();
    }
    /**
     * Retrieves a read-only snapshot of the page route registry.
     *
     * This method returns a new `Map` instance based on the current state of the `registry`.
     * This approach ensures that the original `registry` remains unchanged and protected
     * from direct modifications, preserving encapsulation and immutability.
     *
     * @returns A `ReadonlyMap` containing the current page route registry. This map
     *          provides a snapshot of the registry's state and cannot be modified,
     *          ensuring that internal data integrity is maintained.
     */
    getRegistry() {
      // Create and return a new Map to provide an immutable view of the current registry state
      return new Map(this.registry);
    }
    /**
     * Register a single page route configuration.
     *
     * This method registers a new page route configuration in the service's internal registry.
     * It ensures that the configuration has a valid location property and checks if a route
     * with the same location already exists to prevent duplicate entries. If the configuration
     * is valid and unique, it adds it to the registry.
     *
     * @param config The configuration for the page route.
     * @throws Will throw an error if the configuration does not have a location property.
     * @throws Will throw an error if a route with the same location has already been registered.
     */
    registerPageRoute(config) {
      // Check if the configuration has a location property
      if (!config.location) {
        throw new Error('Page route configuration must have a location property');
      }
      // Get all registered routes for the specified location
      const routes = this.registry.get(config.location) || [];
      // Check if a route with the same location and path already exists
      const isMatchingRoute = routes.some(route => route.location === config.location && route.path === config.path);
      // Check if a route with the same location already exists
      if (isMatchingRoute) {
        throw new Error(`A page with the location "${config.location}" and path "${config.path}" has already been registered`);
      }
      // Add the new route configuration to the list of routes for the specified location
      routes.push(config);
      // Update the registry with the new list of routes for the specified location
      this.registry.set(config.location, routes);
    }
    /**
     * Register multiple page route configurations.
     *
     * This method registers multiple new page route configurations in the service's internal registry.
     * It ensures that each configuration has a valid location property and checks if a route with the same
     * location already exists to prevent duplicate entries. If the configurations are valid and unique,
     * it adds them to the registry.
     *
     * @param configs The array of configurations for the page routes.
     * @throws Will throw an error if a route with the same location and path has already been registered.
     */
    registerPageRoutes(configs) {
      configs.forEach(config => this.registerPageRoute(config));
    }
    /**
     * Filters out duplicate route configurations based on location and path combinations.
     *
     * @param configs The array of route configurations.
     * @returns The array of unique route configurations.
     */
    _filterConfigs(configs) {
      // Use a Set to track unique location combinations
      const location = new Set();
      // Filter out duplicate configurations based on the location and path
      return configs.filter(config => {
        // Create a unique identifier for the combination of location and path
        const identifier = `${config.location}-${config.path}`;
        // Check if the unique identifier is already in the Set
        if (location.has(identifier)) {
          return false; // Duplicate found, filter it out
        }
        // Add the unique identifier to the Set
        location.add(identifier);
        return true; // Not a duplicate, keep it
      });
    }
    /**
     * Get all registered routes for a specific location.
     *
     * This method retrieves all registered route configurations for a specified location identifier.
     * It maps the internal route configurations to Angular Route objects.
     *
     * @param location The page location identifier.
     * @returns The array of registered routes for the specified location.
     */
    getPageLocationRoutes(location) {
      // Get all registered routes for the specified location
      let configs = this.registry.get(location) || [];
      // Filter out duplicate route configurations based on location combinations
      configs = this._filterConfigs(configs);
      // Map each route configuration to a route object
      return configs.map(config => {
        // Create a new route object
        const route = {
          path: config.path,
          // Add path property
          pathMatch: config.path ? 'prefix' : 'full',
          // Set pathMatch property
          data: config.data || {},
          // Add data property if it exists
          canActivate: config.canActivate || [] // Add canActivate property if it exists
        };
        // Check if the route configuration has a component or loadChildren property
        if (config.component) {
          // Set the component property to the config object
          route.component = config.component;
        } else if (config.loadChildren) {
          // Set the loadChildren property to the config object
          route.loadChildren = config.loadChildren;
        }
        // Check if the route configuration has a resolve property
        if (config.resolve) {
          // Set the resolve property to the config object
          route.resolve = config.resolve;
        }
        // Check if the route configuration has additional route options
        if (config.route) {
          Object.assign(route, config.route);
        }
        // Return the route object
        return route;
      });
    }
    static {
      this.ɵfac = function PageRouteRegistryService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || PageRouteRegistryService)();
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjectable"] */ .jDH({
        token: PageRouteRegistryService,
        factory: PageRouteRegistryService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return PageRouteRegistryService;
})();

/***/ }),

/***/ 10976:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ _asyncIterator)
/* harmony export */ });
function _asyncIterator(r) {
  var n,
    t,
    o,
    e = 2;
  for ("undefined" != typeof Symbol && (t = Symbol.asyncIterator, o = Symbol.iterator); e--;) {
    if (t && null != (n = r[t])) return n.call(r);
    if (o && null != (n = r[o])) return new AsyncFromSyncIterator(n.call(r));
    t = "@@asyncIterator", o = "@@iterator";
  }
  throw new TypeError("Object is not async iterable");
}
function AsyncFromSyncIterator(r) {
  function AsyncFromSyncIteratorContinuation(r) {
    if (Object(r) !== r) return Promise.reject(new TypeError(r + " is not an object."));
    var n = r.done;
    return Promise.resolve(r.value).then(function (r) {
      return {
        value: r,
        done: n
      };
    });
  }
  return AsyncFromSyncIterator = function AsyncFromSyncIterator(r) {
    this.s = r, this.n = r.next;
  }, AsyncFromSyncIterator.prototype = {
    s: null,
    n: null,
    next: function next() {
      return AsyncFromSyncIteratorContinuation(this.n.apply(this.s, arguments));
    },
    "return": function _return(r) {
      var n = this.s["return"];
      return void 0 === n ? Promise.resolve({
        value: r,
        done: !0
      }) : AsyncFromSyncIteratorContinuation(n.apply(this.s, arguments));
    },
    "throw": function _throw(r) {
      var n = this.s["return"];
      return void 0 === n ? Promise.reject(r) : AsyncFromSyncIteratorContinuation(n.apply(this.s, arguments));
    }
  }, new AsyncFromSyncIterator(r);
}


/***/ }),

/***/ 16283:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   J: () => (/* binding */ IntegrationResolver)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9620);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(90999);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(56891);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(55801);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45245);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71924);




/**
 * Resolver function to fetch integration tenant details before activating a specific route.
 *
 * @param route - The activated route snapshot.
 * @returns An observable containing integration tenant details or an empty observable on error.
 */
const IntegrationResolver = route => {
  // Inject the required services
  const _router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__/* .inject */ .WQX)(_angular_router__WEBPACK_IMPORTED_MODULE_1__/* .Router */ .Ix);
  const _integrationsService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__/* .inject */ .WQX)(_services__WEBPACK_IMPORTED_MODULE_2__/* .IntegrationsService */ .J);
  const _store = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__/* .inject */ .WQX)(_services__WEBPACK_IMPORTED_MODULE_3__/* .Store */ .il);
  try {
    // Get Integration name and relations from route data
    const name = route.data.integration;
    const relations = route.data.relations || [];
    // Extract organization ID and tenant ID from store
    const {
      id: organizationId,
      tenantId
    } = _store.selectedOrganization;
    if (!organizationId) {
      // Return null if organization ID is missing
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(null);
    }
    // Fetch integration details by options
    const integration$ = _integrationsService.getIntegrationByOptions({
      organizationId,
      tenantId,
      name,
      relations
    });
    // Handle errors and redirect if an error occurs
    return integration$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__/* .catchError */ .W)(() => {
      if (route.data.allowMissingIntegration) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(false);
      }
      // Redirect to the "new integration" page if an error occurs
      _router.navigate(['/pages/integrations/new']);
      // Return an empty observable to prevent further actions
      return rxjs__WEBPACK_IMPORTED_MODULE_6__/* .EMPTY */ .w;
    }));
  } catch (error) {
    // Handle any synchronous errors and redirect to "new integration" page
    _router.navigate(['/pages/integrations/new']);
    // Return an empty observable
    return rxjs__WEBPACK_IMPORTED_MODULE_6__/* .EMPTY */ .w;
  }
};

/***/ }),

/***/ 16460:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: () => (/* binding */ isValidDate)
/* harmony export */ });
function isValidDate(value) {
  return value instanceof Date && !isNaN(value);
}
//# sourceMappingURL=isDate.js.map

/***/ }),

/***/ 17609:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   m: () => (/* binding */ TriggerParentClickDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);


let TriggerParentClickDirective = /*#__PURE__*/(() => {
  class TriggerParentClickDirective {
    constructor(el) {
      this.el = el;
    }
    onClick(event) {
      // Get the parent element
      const parent = this.el.nativeElement.parentElement;
      // Trigger the click event on the parent element
      if (parent) {
        const parentClickEvent = new MouseEvent('click', {
          bubbles: false,
          cancelable: true
        });
        parent.dispatchEvent(parentClickEvent);
      }
      // Stop the event from propagating to prevent any other handlers
      event.stopPropagation();
    }
    static {
      this.ɵfac = function TriggerParentClickDirective_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || TriggerParentClickDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* .ElementRef */ .aKT));
      };
    }
    static {
      this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineDirective"] */ .FsC({
        type: TriggerParentClickDirective,
        selectors: [["", "triggerParentClick", ""]],
        hostBindings: function TriggerParentClickDirective_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function TriggerParentClickDirective_click_HostBindingHandler($event) {
              return ctx.onClick($event);
            });
          }
        },
        standalone: false
      });
    }
  }
  return TriggerParentClickDirective;
})();

/***/ }),

/***/ 20408:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P: () => (/* binding */ AtLeastOneFieldValidator)
/* harmony export */ });
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26024);

/**
 * Validates that at least one field in the group has a valid, non-null, and non-undefined value.
 *
 * @param group - The form group to validate.
 * @returns A validation error object if no valid value is found in the group, otherwise null.
 */
function AtLeastOneFieldValidator(group) {
  if (!group || !group.controls) {
    return {
      requiredAtLeastOne: true
    };
  }
  const hasValidValue = Object.values(group.controls).some(control => control.valid && (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_0__/* .isNotNullOrUndefined */ .Gh)(control.value));
  return hasValidValue ? null : {
    requiredAtLeastOne: true
  };
}

/***/ }),

/***/ 20825:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ ExpensesService)
/* harmony export */ });
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26024);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80189);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64913);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26860);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45715);






let ExpensesService = /*#__PURE__*/(() => {
  class ExpensesService {
    constructor(http) {
      this.http = http;
    }
    create(createInput) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ ._)(this.http.post(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/expense`, createInput));
    }
    getMyAllWithSplitExpenses(relations, filterDate) {
      const data = JSON.stringify({
        relations,
        filterDate
      });
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ ._)(this.http.get(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/expense/me`, {
        params: {
          data
        }
      }));
    }
    getById(id) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ ._)(this.http.get(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/expense/${id}`));
    }
    getAllWithSplitExpenses(employeeId, relations, filterDate) {
      const data = JSON.stringify({
        relations,
        filterDate
      });
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ ._)(this.http.get(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/expense/include-split/${employeeId}`, {
        params: {
          data
        }
      }));
    }
    getAll(relations, findInput, filterDate) {
      const data = JSON.stringify({
        relations,
        findInput,
        filterDate
      });
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ ._)(this.http.get(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/expense`, {
        params: {
          data
        }
      }));
    }
    update(id, updateInput) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ ._)(this.http.put(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/expense/${id}`, updateInput));
    }
    delete(expenseId, input) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ ._)(this.http.delete(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/expense/${expenseId}`, {
        params: (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_2__/* .toParams */ .SV)({
          ...input
        })
      }));
    }
    getDailyExpensesReport(request = {}) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ ._)(this.http.get(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/expense/report`, {
        params: (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_2__/* .toParams */ .SV)(request)
      }));
    }
    /**
     * Retrieves expense report chart data based on the provided request parameters.
     * @param request - The request parameters for fetching expense report data.
     * @returns A Promise that resolves to an array of IExpenseReportData objects.
     */
    getExpenseReportCharts(request = {}) {
      // Construct the URL for the API endpoint
      const url = `${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/expense/report/daily-chart`;
      // Convert the request parameters to an HTTP params object
      const params = (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_2__/* .toParams */ .SV)(request);
      // Make an HTTP GET request using Angular's HttpClient, and convert the observable to a Promise
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ ._)(this.http.get(url, {
        params
      }));
    }
    static {
      this.ɵfac = function ExpensesService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || ExpensesService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵinject"] */ .KVO(_angular_common_http__WEBPACK_IMPORTED_MODULE_4__/* .HttpClient */ .Qq));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdefineInjectable"] */ .jDH({
        token: ExpensesService,
        factory: ExpensesService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return ExpensesService;
})();

/***/ }),

/***/ 24059:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   x: () => (/* binding */ RangeFilterComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10936);
/* harmony import */ var angular2_smart_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52345);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4478);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45808);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(52738);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(39855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(26860);





let RangeFilterComponent = /*#__PURE__*/(() => {
  class RangeFilterComponent extends angular2_smart_table__WEBPACK_IMPORTED_MODULE_0__/* .DefaultFilter */ .yG {
    constructor() {
      super();
      this.rangeControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .FormGroup */ .gE({
        min: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .FormControl */ .MJ(),
        max: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .FormControl */ .MJ()
      });
    }
    ngOnInit() {
      // Subscribe to both min and max value changes with optimized operators
      this.subscription = this.rangeControl.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__/* .debounceTime */ .B)(this.debounceTime),
      // Reduce unnecessary requests
      (0,rxjs__WEBPACK_IMPORTED_MODULE_3__/* .distinctUntilChanged */ .F)((prev, curr) => prev.min === curr.min && prev.max === curr.max),
      // Compare min and max values
      (0,rxjs__WEBPACK_IMPORTED_MODULE_4__/* .filter */ .p)(({
        min,
        max
      }) => min !== null || max !== null),
      // Only process when at least one value is provided
      (0,rxjs__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .M)(({
        min,
        max
      }) => this.column.filterFunction({
        min,
        max
      }, this.column.id))).subscribe();
    }
    ngOnDestroy() {
      // Cleanup subscription to avoid memory leaks
      if (this.subscription) {
        this.subscription.unsubscribe();
      }
    }
    static {
      this.ɵfac = function RangeFilterComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || RangeFilterComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵdefineComponent"] */ .VBU({
        type: RangeFilterComponent,
        selectors: [["ga-range-filter-selector"]],
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
        decls: 5,
        vars: 2,
        consts: [[1, "d-flex"], ["placeholder", "Min", "type", "number", "aria-label", "Minimum value", 1, "form-control", "me-2", 3, "formControl"], ["aria-hidden", "true"], ["placeholder", "Max", "type", "number", "aria-label", "Maximum value", 1, "form-control", 3, "formControl"]],
        template: function RangeFilterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementStart"] */ .j41(0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelement"] */ .nrm(1, "input", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementStart"] */ .j41(2, "span", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵtext"] */ .EFF(3, "-");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelement"] */ .nrm(4, "input", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementEnd"] */ .k0s();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵproperty"] */ .Y8G("formControl", ctx.rangeControl.controls.min);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵproperty"] */ .Y8G("formControl", ctx.rangeControl.controls.max);
          }
        },
        dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .DefaultValueAccessor */ .me, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .NumberValueAccessor */ .Q0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .NgControlStatus */ .BC, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .FormControlDirective */ .l_],
        encapsulation: 2
      });
    }
  }
  return RangeFilterComponent;
})();

/***/ }),

/***/ 28634:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ PageDataTableRegistryService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);


let PageDataTableRegistryService = /*#__PURE__*/(() => {
  class PageDataTableRegistryService {
    constructor() {
      /**
       * Registry for storing page data table column configurations.
       *
       * This Map stores arrays of PageDataTableRegistryConfig objects, keyed by PageDataTableRegistryId.
       */
      this.registry = new Map();
    }
    /**
     * Retrieves a read-only copy of the data table registry.
     *
     * This method returns a new `Map` instance based on the current state of the registry.
     * This approach ensures that the original `registry` is not directly modified by
     * external code, preserving immutability and encapsulation.
     *
     * @returns A `ReadonlyMap` containing the current data table registry. This map
     *          cannot be modified, ensuring that the internal state remains unchanged.
     */
    getRegistry() {
      // Return a new Map to provide a snapshot of the current registry state
      return new Map(this.registry);
    }
    /**
     * Register a column configurations.
     *
     * This method registers a new column configuration in the service's internal registry.
     * It ensures that each configuration has a valid location property and checks if a column with the same
     * location and id already exists to prevent duplicate entries. If the configurations are valid and unique,
     * it adds them to the registry.
     *
     * @param config The configuration for the column.
     * @throws Will throw an error if a column with the same location and id has already been registered.
     */
    registerPageDataTableColumn(config) {
      if (!config.dataTableId) {
        throw new Error('A data table column configuration must have a dataTableId property');
      }
      // Get all registered columns for the specified location
      const columns = this.registry.get(config.dataTableId) || [];
      // Find the index of the column with the same location and columnId
      const existing = columns.findIndex(column => column.dataTableId === config.dataTableId && column.columnId === config.columnId);
      if (existing !== -1) {
        // Replace the existing column with the new one
        columns[existing] = config;
      } else {
        // Add the new column configuration to the list
        columns.push(config);
      }
      // Update the registry with the new list of columns for the specified location
      this.registry.set(config.dataTableId, columns);
    }
    /**
     * Register multiple column configurations.
     *
     * This method registers multiple new column configurations in the service's internal registry.
     * It ensures that each configuration has a valid location property and checks if a column with the same
     * location and id already exists to prevent duplicate entries. If the configurations are valid and unique,
     * it adds them to the registry.
     *
     * @param configs The array of configurations for the columns.
     * @throws Will throw an error if a column with the same location and id has already been registered.
     */
    registerPageDataTableColumns(configs) {
      configs.forEach(config => this.registerPageDataTableColumn(config));
    }
    /**
     * Retrieves the data table column configurations associated with a specific registry ID.
     *
     * This method fetches an array of `PageDataTableRegistryConfig` objects that are associated with the provided
     * `PageDataTableRegistryId`. If any configurations are found, they are sorted based on their `order` property in
     * ascending order. If no configurations are found, an empty array is returned.
     *
     * @param dataTableId The identifier for the data table.
     * @returns An array of `PageDataTableRegistryConfig` objects associated with the specified `dataTableId`,
     *          sorted by the `order` property in ascending order.
     */
    getColumnsByDataTableId(dataTableId) {
      const columns = this.registry.get(dataTableId) || [];
      // Sort the columns by the 'order' property in ascending order
      return [...columns].sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
    }
    /**
     * Maps a PageDataTableRegistryConfig object to an IColumn object.
     *
     * @param config The PageDataTableRegistryConfig object to map.
     * @returns The corresponding IColumn object.
     */
    mapConfigToColumn(config) {
      const column = {
        ...(config.title && {
          title: typeof config.title === 'function' ? config.title() : config.title
        }),
        type: config.type,
        width: config.width,
        isSortable: config.isSortable ?? false,
        isEditable: config.isEditable ?? false,
        isFilterable: config.isFilterable ?? false,
        hide: config.hide ?? false,
        ...(config.editor && {
          editor: config.editor
        }),
        ...(config.renderComponent && {
          renderComponent: config.renderComponent
        }),
        ...(config.valuePrepareFunction && {
          valuePrepareFunction: config.valuePrepareFunction
        }),
        ...(config.componentInitFunction && {
          componentInitFunction: config.componentInitFunction
        }),
        ...(config.filter && {
          filter: config.filter
        }),
        ...(config.filterFunction && {
          filterFunction: config.filterFunction
        })
      };
      // Check if the column configuration has additional column options
      if (config.column) {
        Object.assign(column, config.column);
      }
      return column; // Return the mapped IColumn object
    }
    /**
     * Retrieves a list of unique columns for a specific page location, based on the provided location.
     *
     * This method fetches all registered data table columns for the specified `PageDataTableRegistryId`,
     * removes any duplicate columns based on their location and ID, and maps the remaining configurations
     * to an array of `IColumn` objects.
     *
     * The uniqueness of each column is determined by the combination of its location and ID. If a duplicate
     * column is found (i.e., one with the same location and ID as another), it is filtered out. The resulting
     * list of columns is returned.
     *
     * @param registryId - The identifier used to look up the data table column configurations for a specific page location.
     * @returns An array of `IColumn` objects representing the unique columns for the specified page location.
     */
    getPageDataTableColumns(dataTableId) {
      // Get all registered columns for the specified location
      let columns = this.getColumnsByDataTableId(dataTableId);
      // Use a Set to track unique location-id combinations
      const dataTableIds = new Set();
      // Filter the configurations to remove duplicates based on the unique identifier
      columns = columns.filter(config => {
        // Create a unique identifier for the combination of location and id
        const identifier = `${config.dataTableId}-${config.columnId}`;
        // Check if the unique identifier is already in the Set
        if (dataTableIds.has(identifier) || config.hide) {
          return false; // Duplicate found, filter it out
        }
        // Add the unique identifier to the Set
        dataTableIds.add(identifier);
        return true; // Not a duplicate, keep it
      });
      // Map each unique configuration to an IColumn object
      return columns.reduce((acc, config) => {
        const column = this.mapConfigToColumn(config); // Use the mapping function
        acc[config.columnId] = column; // Add the column to the accumulator
        return acc;
      }, {});
    }
    /**
     * Retrieves a specific column configuration by its dataTableId and columnId.
     *
     * @param dataTableId The identifier for the data table.
     * @param columnId The identifier for the column.
     * @returns The `IColumn` object for the specified column, or `null` if not found.
     */
    getColumnById(dataTableId, columnId) {
      const columns = this.registry.get(dataTableId) || [];
      const config = columns.find(column => column.columnId === columnId);
      return config ? {
        [columnId]: this.mapConfigToColumn(config)
      } : null;
    }
    /**
     * Deletes a data table from the registry.
     *
     * This method removes the specified data table from the registry. If the data table does not exist,
     * it logs a warning message. Additionally, if the operation is successful, it logs an informational message.
     *
     * @param dataTableId The identifier of the data table to be removed.
     * @returns void
     */
    deleteDataTable(dataTableId) {
      // Check if the data table exists in the registry
      if (!this.registry.has(dataTableId)) {
        console.warn(`Data table with id "${dataTableId}" does not exist in the registry.`);
        return;
      }
      try {
        // Remove the data table from the registry
        this.registry.delete(dataTableId);
        console.log(`Data table with id "${dataTableId}" has been successfully removed from the registry.`);
      } catch (error) {
        console.error(`Failed to remove data table with id "${dataTableId}": ${error.message}`);
      }
    }
    static {
      this.ɵfac = function PageDataTableRegistryService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || PageDataTableRegistryService)();
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjectable"] */ .jDH({
        token: PageDataTableRegistryService,
        factory: PageDataTableRegistryService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return PageDataTableRegistryService;
})();

/***/ }),

/***/ 31324:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: () => (/* binding */ OrganizationPositionsService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80189);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64913);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26860);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45715);





let OrganizationPositionsService = /*#__PURE__*/(() => {
  class OrganizationPositionsService {
    constructor(http) {
      this.http = http;
    }
    create(createInput) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ ._)(this.http.post(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/organization-positions`, createInput));
    }
    getAll(findInput, relations) {
      const data = JSON.stringify({
        relations,
        findInput
      });
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ ._)(this.http.get(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/organization-positions`, {
        params: {
          data
        }
      }));
    }
    update(id, updateInput) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ ._)(this.http.put(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/organization-positions/${id}`, updateInput));
    }
    delete(id) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ ._)(this.http.delete(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/organization-positions/${id}`));
    }
    static {
      this.ɵfac = function OrganizationPositionsService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || OrganizationPositionsService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵinject"] */ .KVO(_angular_common_http__WEBPACK_IMPORTED_MODULE_3__/* .HttpClient */ .Qq));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineInjectable"] */ .jDH({
        token: OrganizationPositionsService,
        factory: OrganizationPositionsService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return OrganizationPositionsService;
})();

/***/ }),

/***/ 33810:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   V: () => (/* binding */ createRoutes)
/* harmony export */ });
/* harmony import */ var _miscellaneous_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76437);
/* harmony import */ var _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(53207);


/**
 * Creates miscellaneous routes for the application
 *
 * @param _pageRouteRegistryService An instance of PageRouteRegistryService
 * @returns An array of Route objects
 */
const createRoutes = _pageRouteRegistryService => [{
  path: '',
  component: _miscellaneous_component__WEBPACK_IMPORTED_MODULE_0__/* .MiscellaneousComponent */ .o,
  children: [{
    path: '',
    redirectTo: '404',
    pathMatch: 'full'
  }, {
    path: '404',
    component: _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_1__/* .NotFoundComponent */ .X
  }]
}];

/***/ }),

/***/ 43277:
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (a, b) {
  if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (b),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}
})(this, function () {
  "use strict";

  function b(a, b) {
    return "undefined" == typeof b ? b = {
      autoBom: !1
    } : "object" != typeof b && (console.warn("Deprecated: Expected third argument to be a object"), b = {
      autoBom: !b
    }), b.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type) ? new Blob(["\uFEFF", a], {
      type: a.type
    }) : a;
  }
  function c(a, b, c) {
    var d = new XMLHttpRequest();
    d.open("GET", a), d.responseType = "blob", d.onload = function () {
      g(d.response, b, c);
    }, d.onerror = function () {
      console.error("could not download file");
    }, d.send();
  }
  function d(a) {
    var b = new XMLHttpRequest();
    b.open("HEAD", a, !1);
    try {
      b.send();
    } catch (a) {}
    return 200 <= b.status && 299 >= b.status;
  }
  function e(a) {
    try {
      a.dispatchEvent(new MouseEvent("click"));
    } catch (c) {
      var b = document.createEvent("MouseEvents");
      b.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), a.dispatchEvent(b);
    }
  }
  var f = "object" == typeof window && window.window === window ? window : "object" == typeof self && self.self === self ? self : "object" == typeof global && global.global === global ? global : void 0,
    a = f.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent),
    g = f.saveAs || ("object" != typeof window || window !== f ? function () {} : "download" in HTMLAnchorElement.prototype && !a ? function (b, g, h) {
      var i = f.URL || f.webkitURL,
        j = document.createElement("a");
      g = g || b.name || "download", j.download = g, j.rel = "noopener", "string" == typeof b ? (j.href = b, j.origin === location.origin ? e(j) : d(j.href) ? c(b, g, h) : e(j, j.target = "_blank")) : (j.href = i.createObjectURL(b), setTimeout(function () {
        i.revokeObjectURL(j.href);
      }, 4E4), setTimeout(function () {
        e(j);
      }, 0));
    } : "msSaveOrOpenBlob" in navigator ? function (f, g, h) {
      if (g = g || f.name || "download", "string" != typeof f) navigator.msSaveOrOpenBlob(b(f, h), g);else if (d(f)) c(f, g, h);else {
        var i = document.createElement("a");
        i.href = f, i.target = "_blank", setTimeout(function () {
          e(i);
        });
      }
    } : function (b, d, e, g) {
      if (g = g || open("", "_blank"), g && (g.document.title = g.document.body.innerText = "downloading..."), "string" == typeof b) return c(b, d, e);
      var h = "application/octet-stream" === b.type,
        i = /constructor/i.test(f.HTMLElement) || f.safari,
        j = /CriOS\/[\d]+/.test(navigator.userAgent);
      if ((j || h && i || a) && "undefined" != typeof FileReader) {
        var k = new FileReader();
        k.onloadend = function () {
          var a = k.result;
          a = j ? a : a.replace(/^data:[^;]*;/, "data:attachment/file;"), g ? g.location.href = a : location = a, g = null;
        }, k.readAsDataURL(b);
      } else {
        var l = f.URL || f.webkitURL,
          m = l.createObjectURL(b);
        g ? g.location = m : location.href = m, g = null, setTimeout(function () {
          l.revokeObjectURL(m);
        }, 4E4);
      }
    });
  f.saveAs = g.saveAs = g,  true && (module.exports = g);
});

//# sourceMappingURL=FileSaver.min.js.map

/***/ }),

/***/ 47060:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   W: () => (/* binding */ catchError)
/* harmony export */ });
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85783);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25969);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7661);



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

/***/ 49226:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O: () => (/* binding */ timer)
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35484);
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(89751);
/* harmony import */ var _util_isScheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59623);
/* harmony import */ var _util_isDate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16460);




function timer(dueTime = 0, intervalOrScheduler, scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__/* .async */ .b) {
  let intervalDuration = -1;
  if (intervalOrScheduler != null) {
    if ((0,_util_isScheduler__WEBPACK_IMPORTED_MODULE_1__/* .isScheduler */ .m)(intervalOrScheduler)) {
      scheduler = intervalOrScheduler;
    } else {
      intervalDuration = intervalOrScheduler;
    }
  }
  return new _Observable__WEBPACK_IMPORTED_MODULE_2__/* .Observable */ .c(subscriber => {
    let due = (0,_util_isDate__WEBPACK_IMPORTED_MODULE_3__/* .isValidDate */ .v)(dueTime) ? +dueTime - scheduler.now() : dueTime;
    if (due < 0) {
      due = 0;
    }
    let n = 0;
    return scheduler.schedule(function () {
      if (!subscriber.closed) {
        subscriber.next(n++);
        if (0 <= intervalDuration) {
          this.schedule(undefined, intervalDuration);
        } else {
          subscriber.complete();
        }
      }
    }, due);
  });
}
//# sourceMappingURL=timer.js.map

/***/ }),

/***/ 50666:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   of: () => (/* binding */ of)
/* harmony export */ });
/* harmony import */ var _util_args__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13685);
/* harmony import */ var _from__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39127);


function of(...args) {
  const scheduler = (0,_util_args__WEBPACK_IMPORTED_MODULE_0__/* .popScheduler */ .lI)(args);
  return (0,_from__WEBPACK_IMPORTED_MODULE_1__/* .from */ .H)(args, scheduler);
}
//# sourceMappingURL=of.js.map

/***/ }),

/***/ 52623:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   x: () => (/* binding */ concat)
/* harmony export */ });
/* harmony import */ var _operators_concatAll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(64312);
/* harmony import */ var _util_args__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13685);
/* harmony import */ var _from__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39127);



function concat(...args) {
  return (0,_operators_concatAll__WEBPACK_IMPORTED_MODULE_0__/* .concatAll */ .K)()((0,_from__WEBPACK_IMPORTED_MODULE_1__/* .from */ .H)(args, (0,_util_args__WEBPACK_IMPORTED_MODULE_2__/* .popScheduler */ .lI)(args)));
}
//# sourceMappingURL=concat.js.map

/***/ }),

/***/ 53207:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   X: () => (/* binding */ NotFoundComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9620);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56383);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19223);





let NotFoundComponent = /*#__PURE__*/(() => {
  class NotFoundComponent {
    constructor(router) {
      this.router = router;
    }
    /**
     * After view init
     */
    ngAfterViewInit() {
      setTimeout(() => this.goToHome(), 3000);
    }
    /**
     * Redirect to home page
     */
    goToHome() {
      this.router.navigate(['/pages/dashboard']);
    }
    static {
      this.ɵfac = function NotFoundComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || NotFoundComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_router__WEBPACK_IMPORTED_MODULE_1__/* .Router */ .Ix));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: NotFoundComponent,
        selectors: [["ngx-not-found"]],
        standalone: false,
        decls: 19,
        vars: 12,
        consts: [[1, "row"], [1, "col-md-12"], [1, "flex-centered", "col-xl-4", "col-lg-6", "col-md-8", "col-sm-12"], [1, "not-found-num"], [1, "title"], [1, "sub-title"], [1, "redirect-home-title"], ["type", "button", 1, "btn", "btn-block", "btn-hero-primary", 3, "click"]],
        template: function NotFoundComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 0)(1, "div", 1)(2, "nb-card")(3, "nb-card-body")(4, "div", 2)(5, "h2", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(6, "404");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(7, "h3", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(9, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(10, "small", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(12, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(13, "p", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(15, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(16, "button", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function NotFoundComponent_Template_button_click_16_listener() {
              return ctx.goToHome();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(18, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()()()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(9, 4, "PAGE_NOT_FOUND.404_PAGE_NOT_FOUND"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(12, 6, "PAGE_NOT_FOUND.THE_PAGE_YOU_WERE_LOOKING_FOR_DOES_NOT_EXIST"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(15, 8, "PAGE_NOT_FOUND.REDIRECT_TO_HOME"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(18, 10, "PAGE_NOT_FOUND.TAKE_ME_HOME"), " ");
          }
        },
        dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbCardComponent */ .SrT, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbCardBodyComponent */ .KH5, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__/* .TranslatePipe */ .D9],
        styles: [".flex-centered[_ngcontent-%COMP%] {\n  max-width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  flex-grow: 1;\n}\n\n  ngx-not-found {\n  height: 100%;\n}\n\n.row[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\nnb-card[_ngcontent-%COMP%] {\n  height: 100%;\n  background-color: transparent;\n}\n\nnb-card-body[_ngcontent-%COMP%] {\n  display: flex;\n  margin: auto;\n  width: 70%;\n  height: 70%;\n  background-color: var(--card-background-color);\n  flex-grow: 0;\n  flex-basis: auto;\n  flex-shrink: 1;\n  border-radius: var(--border-radius);\n}\n\n.not-found-num[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 8rem;\n  margin: 3rem 0;\n}\n\n.title[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.sub-title[_ngcontent-%COMP%] {\n  text-align: center;\n  display: block;\n  margin-bottom: 3rem;\n  color: var(--color-basic-600);\n  font-weight: bold;\n}\n\n.redirect-home-title[_ngcontent-%COMP%] {\n  color: var(--color-basic-600);\n  font-weight: bold;\n  margin-bottom: 0;\n}\n\n.btn[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n  color: var(--color-primary-500);\n  font-weight: bold;\n}"]
      });
    }
  }
  return NotFoundComponent;
})();

/***/ }),

/***/ 56397:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ EmployeeWorkStatusComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56383);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14572);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19223);




function EmployeeWorkStatusComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div")(1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(3, 1, "EMPLOYEES_PAGE.DELETED"), " ");
  }
}
function EmployeeWorkStatusComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div")(1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(3, 1, "EMPLOYEES_PAGE.ACTIVE"), " ");
  }
}
function EmployeeWorkStatusComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(1, 2, "EMPLOYEES_PAGE.NOT_STARTED_HELP"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(4, 4, "EMPLOYEES_PAGE.NOT_STARTED"), " ");
  }
}
function EmployeeWorkStatusComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 7)(1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(3, 2, "EMPLOYEES_PAGE.WORK_ENDED"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", ctx_r0.rowData.workStatus, "\n");
  }
}
let EmployeeWorkStatusComponent = /*#__PURE__*/(() => {
  class EmployeeWorkStatusComponent {
    static {
      this.ɵfac = function EmployeeWorkStatusComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || EmployeeWorkStatusComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: EmployeeWorkStatusComponent,
        selectors: [["ga-employee-work-status"]],
        inputs: {
          rowData: "rowData"
        },
        standalone: false,
        decls: 4,
        vars: 4,
        consts: [[4, "ngIf"], [3, "nbTooltip", 4, "ngIf"], ["class", "text-center d-block", 4, "ngIf"], [1, "badge", "badge-danger"], [1, "badge", "badge-success"], [3, "nbTooltip"], [1, "badge", "badge-disabled"], [1, "text-center", "d-block"]],
        template: function EmployeeWorkStatusComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(0, EmployeeWorkStatusComponent_div_0_Template, 4, 3, "div", 0)(1, EmployeeWorkStatusComponent_div_1_Template, 4, 3, "div", 0)(2, EmployeeWorkStatusComponent_div_2_Template, 5, 6, "div", 1)(3, EmployeeWorkStatusComponent_div_3_Template, 5, 4, "div", 2);
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.rowData == null ? null : ctx.rowData.isDeleted);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.rowData == null ? null : ctx.rowData.isActive);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", !ctx.rowData.startedWorkOn);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.rowData.workStatus);
          }
        },
        dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbTooltipDirective */ .BmQ, _angular_common__WEBPACK_IMPORTED_MODULE_2__/* .NgIf */ .bT, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__/* .TranslatePipe */ .D9],
        styles: [".badge-disabled[_ngcontent-%COMP%] {\n  background-color: #ccc;\n}\n\n.badge[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 4px 8px;\n}\n\ndiv[_ngcontent-%COMP%] {\n  \n\n  \n\n  border-radius: 0.25rem;\n  align-content: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: auto;\n  \n\n  flex: none;\n  order: 0;\n  flex-grow: 0;\n  margin: 4px 0px;\n  \n\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 15px;\n  letter-spacing: 0em;\n  text-align: left;\n}"]
      });
    }
  }
  return EmployeeWorkStatusComponent;
})();

/***/ }),

/***/ 59520:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   b: () => (/* binding */ ProductService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80189);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(64913);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26860);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45715);





let ProductService = /*#__PURE__*/(() => {
  class ProductService {
    constructor(http) {
      this.http = http;
      this.PRODUCTS_URL = `${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_0__/* .API_PREFIX */ .m4}/products`;
    }
    getAll(relations, findInput, languageCode) {
      const data = JSON.stringify({
        relations,
        findInput
      });
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ ._)(this.http.get(`${this.PRODUCTS_URL}/local/${languageCode}`, {
        params: {
          data
        }
      }));
    }
    count(findInput) {
      const data = JSON.stringify(findInput);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ ._)(this.http.get(`${this.PRODUCTS_URL}/count`, {
        params: {
          data
        }
      }));
    }
    getAllTranslated(options, params, languageCode) {
      const data = JSON.stringify({
        relations: options.relations,
        options: options.findInput
      });
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ ._)(this.http.get(`${this.PRODUCTS_URL}/local/${languageCode}`, {
        params: {
          data,
          ...params
        }
      }));
    }
    getOneTranslated(id, relations, languageCode) {
      const data = JSON.stringify({
        relations
      });
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ ._)(this.http.get(`${this.PRODUCTS_URL}/local/${languageCode}/${id}`, {
        params: {
          data
        }
      }));
    }
    getById(id, relations, findInput) {
      const data = JSON.stringify({
        relations,
        findInput
      });
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ ._)(this.http.get(`${this.PRODUCTS_URL}/${id}`, {
        params: {
          data
        }
      }));
    }
    create(product) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ ._)(this.http.post(`${this.PRODUCTS_URL}`, product));
    }
    update(product) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ ._)(this.http.put(`${this.PRODUCTS_URL}/${product.id}`, product));
    }
    delete(id) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ ._)(this.http.delete(`${this.PRODUCTS_URL}/${id}`));
    }
    addGalleryImages(id, images) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ ._)(this.http.post(`${this.PRODUCTS_URL}/add-images/${id}`, images));
    }
    deleteGalleryImage(id, image) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ ._)(this.http.delete(`${this.PRODUCTS_URL}/${id}/gallery-image/${image.id}`));
    }
    setAsFeatured(id, image) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ ._)(this.http.post(`${this.PRODUCTS_URL}/set-as-featured/${id}`, image));
    }
    deleteFeaturedImage(id) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ ._)(this.http.delete(`${this.PRODUCTS_URL}/featured-image/${id}`));
    }
    static {
      this.ɵfac = function ProductService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || ProductService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵinject"] */ .KVO(_angular_common_http__WEBPACK_IMPORTED_MODULE_3__/* .HttpClient */ .Qq));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineInjectable"] */ .jDH({
        token: ProductService,
        factory: ProductService.ɵfac
      });
    }
  }
  return ProductService;
})();

/***/ }),

/***/ 64312:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K: () => (/* binding */ concatAll)
/* harmony export */ });
/* harmony import */ var _mergeAll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(64060);

function concatAll() {
  return (0,_mergeAll__WEBPACK_IMPORTED_MODULE_0__/* .mergeAll */ .U)(1);
}
//# sourceMappingURL=concatAll.js.map

/***/ }),

/***/ 73288:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   r: () => (/* binding */ MiscellaneousModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(14572);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9620);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(908);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56383);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(19223);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6828);
/* harmony import */ var _miscellaneous_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(33810);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26860);









const NB_MODULES = [_nebular_theme__WEBPACK_IMPORTED_MODULE_0__/* .NbCardModule */ .lVF, _nebular_theme__WEBPACK_IMPORTED_MODULE_0__/* .NbButtonModule */ .P5N];
let MiscellaneousModule = /*#__PURE__*/(() => {
  class MiscellaneousModule {
    static {
      this.ɵfac = function MiscellaneousModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MiscellaneousModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineNgModule"] */ .$C({
        type: MiscellaneousModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineInjector"] */ .G2t({
        providers: [{
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_2__/* .ROUTES */ .bw,
          useFactory: service => (0,_miscellaneous_routes__WEBPACK_IMPORTED_MODULE_3__/* .createRoutes */ .V)(service),
          deps: [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_4__/* .PageRouteRegistryService */ .L],
          multi: true
        }],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__/* .CommonModule */ .MD, _angular_router__WEBPACK_IMPORTED_MODULE_6__/* .RouterModule */ .iI.forChild([]), NB_MODULES, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__/* .TranslateModule */ .h.forChild()]
      });
    }
  }
  return MiscellaneousModule;
})();

/***/ }),

/***/ 75308:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   w: () => (/* binding */ EventTypeService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80189);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(64913);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26860);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45715);





let EventTypeService = /*#__PURE__*/(() => {
  class EventTypeService {
    constructor(http) {
      this.http = http;
      this.API_BASE_URI = `${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_0__/* .API_PREFIX */ .m4}/event-type`;
    }
    /**
     * Creates a new event type.
     *
     * @param input - The input data to create a new event type.
     * @returns An observable of the created event type.
     */
    create(input) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ ._)(this.http.post(this.API_BASE_URI, input));
    }
    /**
     * Gets an event type by ID.
     *
     * @param id - The ID of the event type to get.
     * @param relations - Optional array of relations to include in the response.
     * @returns An observable of the event type.
     */
    getEventTypeById(id, relations) {
      const data = JSON.stringify({
        relations
      });
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ ._)(this.http.get(`${this.API_BASE_URI}/${id}`, {
        params: {
          data
        }
      }));
    }
    /**
     * Gets all event types.
     *
     * @param relations
     * @param findInput
     * @returns
     */
    getAll(relations, findInput) {
      const data = JSON.stringify({
        relations,
        findInput
      });
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ ._)(this.http.get(this.API_BASE_URI, {
        params: {
          data
        }
      }));
    }
    /**
     * Updates an event type.
     *
     * @param id
     * @param input
     * @returns
     */
    update(id, input) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ ._)(this.http.put(`${this.API_BASE_URI}/${id}`, input));
    }
    /**
     * Deletes an event type.
     *
     * @param id
     * @returns
     */
    delete(id) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ ._)(this.http.delete(`${this.API_BASE_URI}/${id}`));
    }
    static {
      this.ɵfac = function EventTypeService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || EventTypeService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵinject"] */ .KVO(_angular_common_http__WEBPACK_IMPORTED_MODULE_3__/* .HttpClient */ .Qq));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineInjectable"] */ .jDH({
        token: EventTypeService,
        factory: EventTypeService.ɵfac
      });
    }
  }
  return EventTypeService;
})();

/***/ }),

/***/ 76437:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   o: () => (/* binding */ MiscellaneousComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9620);


let MiscellaneousComponent = /*#__PURE__*/(() => {
  class MiscellaneousComponent {
    static {
      this.ɵfac = function MiscellaneousComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MiscellaneousComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: MiscellaneousComponent,
        selectors: [["ngx-miscellaneous-outlet"]],
        standalone: false,
        decls: 1,
        vars: 0,
        template: function MiscellaneousComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(0, "router-outlet");
          }
        },
        dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__/* .RouterOutlet */ .n3],
        encapsulation: 2
      });
    }
  }
  return MiscellaneousComponent;
})();

/***/ }),

/***/ 76965:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   j: () => (/* binding */ finalize)
/* harmony export */ });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7661);

function finalize(callback) {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__/* .operate */ .N)((source, subscriber) => {
    try {
      source.subscribe(subscriber);
    } finally {
      subscriber.add(callback);
    }
  });
}
//# sourceMappingURL=finalize.js.map

/***/ }),

/***/ 77485:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ ToggleSwitcherComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(55598);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88326);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39855);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41598);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14572);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(56383);
/* harmony import */ var _directives_trigger_parent_click_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(17609);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(19223);









function ToggleSwitcherComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "translate");
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(2, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(1, 1, ctx_r0.switcher$) ? "BUTTONS.ENABLED" : "BUTTONS.DISABLED"), " ");
  }
}
let ToggleSwitcherComponent = /*#__PURE__*/(() => {
  let ToggleSwitcherComponent = class ToggleSwitcherComponent {
    /**
     * Getter method for retrieving the toggle switch state as an Observable.
     *
     * @returns An Observable<boolean> that emits the current state and subsequent changes of the toggle switch.
     */
    get switcher$() {
      return this._switcher$.asObservable();
    }
    /**
     * Getter for retrieving the current value.
     *
     * @returns The current value of the dynamic element.
     */
    get value() {
      return this._value;
    }
    /**
     * Setter for updating the dynamic value.
     * This setter is decorated with @Input to allow external components to bind and update the value.
     *
     * @param value - The new value to set for the dynamic element.
     */
    set value(value) {
      // Updates the dynamic element's value using a BehaviorSubject or similar mechanism.
      this._switcher$.next(value);
      // Stores the value in the local variable for future reference.
      this._value = value;
    }
    /**
     * Getter for retrieving the current boolean label.
     *
     * @returns The current boolean label.
     */
    get label() {
      return this._label;
    }
    /**
     * Setter for updating the boolean label.
     * This setter is decorated with @Input to allow external components to bind and update the label.
     *
     * @param value - The new boolean label value.
     */
    set label(value) {
      // Update the boolean label with the provided value.
      this._label = value;
    }
    constructor() {
      /**
       * A class member that represents a boolean switch or toggle using a BehaviorSubject.
       */
      this._switcher$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__/* .BehaviorSubject */ .t(false);
      /**
       * A class member and getter/setter for managing a boolean label.
       */
      this._label = true;
      /**
       * An @Output property that emits a boolean value when an event occurs.
       *
       * This is used to create a custom event named 'switched' that can be listened to by external components.
       */
      this.onSwitched = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .bkB();
    }
    /**
     * The ngOnInit lifecycle hook is called when the component is initialized.
     * This method subscribes to the 'switched' Observable, and upon changes, updates the '_switcher$' BehaviorSubject.
     */
    ngOnInit() {
      this.onSwitched.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__/* .tap */ .M)(enable => this._switcher$.next(enable)),
      // The 'untilDestroyed' operator helps to automatically unsubscribe when the component is destroyed.
      (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__/* .untilDestroyed */ .s)(this)).subscribe(); // Subscribe to the Observable but perform actions in 'tap'.
    }
    /**
     * Handles a change event for a boolean value.
     *
     * @param event - A boolean value representing the change event.
     */
    onCheckedChange(event) {
      // Emits the provided boolean 'event' using the 'switched' EventEmitter.
      this.onSwitched.emit(event);
    }
    static {
      this.ɵfac = function ToggleSwitcherComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || ToggleSwitcherComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: ToggleSwitcherComponent,
        selectors: [["ngx-toggle-switcher"]],
        inputs: {
          value: "value",
          rowData: "rowData",
          label: "label"
        },
        outputs: {
          onSwitched: "onSwitched"
        },
        standalone: false,
        decls: 4,
        vars: 4,
        consts: [["status", "primary", "triggerParentClick", "", 3, "checkedChange", "checked"], [3, "ngIf"]],
        template: function ToggleSwitcherComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div")(1, "nb-toggle", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("checkedChange", function ToggleSwitcherComponent_Template_nb_toggle_checkedChange_1_listener($event) {
              return ctx.onCheckedChange($event);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(3, ToggleSwitcherComponent_ng_template_3_Template, 3, 5, "ng-template", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("checked", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(2, 2, ctx.switcher$));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.label);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__/* .NgIf */ .bT, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbToggleComponent */ .YF2, _directives_trigger_parent_click_directive__WEBPACK_IMPORTED_MODULE_6__/* .TriggerParentClickDirective */ .m, _angular_common__WEBPACK_IMPORTED_MODULE_4__/* .AsyncPipe */ .Jj, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__/* .TranslatePipe */ .D9],
        encapsulation: 2
      });
    }
  };
  ToggleSwitcherComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__/* .UntilDestroy */ .d)({
    checkProperties: true
  }), (0,tslib__WEBPACK_IMPORTED_MODULE_8__/* .__metadata */ .Sn)("design:paramtypes", [])], ToggleSwitcherComponent);
  return ToggleSwitcherComponent;
})();


/***/ }),

/***/ 79034:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   z: () => (/* binding */ EmployeeStatisticsService)
/* harmony export */ });
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26024);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80189);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64913);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26860);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45715);






let EmployeeStatisticsService = /*#__PURE__*/(() => {
  class EmployeeStatisticsService {
    constructor(http) {
      this.http = http;
    }
    /**
     * Gets the aggregated statistics for all employees of the organization from the start of time till now.
     * If date is provided in findInput it will return only for the month selected.
     */
    getAggregateStatisticsByOrganizationId(findInput) {
      const data = JSON.stringify({
        findInput
      });
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ ._)(this.http.get(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/employee-statistics/aggregate`, {
        params: {
          data
        }
      }));
    }
    /**
     * Gets the statistics for the selected employee for the last 12 months.
     * If date is provided in findInput it will return only for the month selected.
     * @param employeeId The id of the employee.
     * @param findInput Object containing valueDate.
     * @returns Promise<EmployeeStatistics>
     */
    getStatisticsByEmployeeId(employeeId, findInput) {
      const data = JSON.stringify({
        findInput
      });
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ ._)(this.http.get(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/employee-statistics/months/${employeeId}`, {
        params: {
          data
        }
      }));
    }
    /**
     * Gets the statistics for the selected employee for the last N months.
     * @param findInput Object containing valueDate, employeeId, Months.
     * @returns Promise<MonthAggregatedEmployeeStatistics[]>
     */
    getAggregatedStatisticsByEmployeeId(where) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ ._)(this.http.get(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/employee-statistics/months`, {
        params: (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_2__/* .toParams */ .SV)({
          ...where
        })
      }));
    }
    /**
     * Gets the statistics history for the selected employee for the last N months.
     * @param findInput Object containing valueDate, employeeId, Months and History Type.
     * @returns Promise<EmployeeStatisticsHistory[]
     */
    getEmployeeStatisticsHistory(findInput) {
      const data = JSON.stringify({
        findInput
      });
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ ._)(this.http.get(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/employee-statistics/history`, {
        params: {
          data
        }
      }));
    }
    static {
      this.ɵfac = function EmployeeStatisticsService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || EmployeeStatisticsService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵinject"] */ .KVO(_angular_common_http__WEBPACK_IMPORTED_MODULE_4__/* .HttpClient */ .Qq));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdefineInjectable"] */ .jDH({
        token: EmployeeStatisticsService,
        factory: EmployeeStatisticsService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return EmployeeStatisticsService;
})();

/***/ }),

/***/ 80477:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DP: () => (/* binding */ ExpenseTypesEnum),
/* harmony export */   gl: () => (/* binding */ ExpenseStatusesEnum),
/* harmony export */   kY: () => (/* binding */ TaxTypesEnum)
/* harmony export */ });
var ExpenseTypesEnum = /*#__PURE__*/function (ExpenseTypesEnum) {
  ExpenseTypesEnum["TAX_DEDUCTIBLE"] = "TAX_DEDUCTIBLE";
  ExpenseTypesEnum["NOT_TAX_DEDUCTIBLE"] = "NOT_TAX_DEDUCTIBLE";
  ExpenseTypesEnum["BILLABLE_TO_CONTACT"] = "BILLABLE_TO_CONTACT";
  return ExpenseTypesEnum;
}(ExpenseTypesEnum || {});
var TaxTypesEnum = /*#__PURE__*/function (TaxTypesEnum) {
  TaxTypesEnum["PERCENTAGE"] = "PERCENTAGE";
  TaxTypesEnum["VALUE"] = "VALUE";
  return TaxTypesEnum;
}(TaxTypesEnum || {});
var ExpenseStatusesEnum = /*#__PURE__*/function (ExpenseStatusesEnum) {
  ExpenseStatusesEnum["INVOICED"] = "INVOICED";
  ExpenseStatusesEnum["UNINVOICED"] = "UNINVOICED";
  ExpenseStatusesEnum["PAID"] = "PAID";
  ExpenseStatusesEnum["NOT_BILLABLE"] = "NOT_BILLABLE";
  return ExpenseStatusesEnum;
}(ExpenseStatusesEnum || {});

/***/ }),

/***/ 85317:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ EmployeeLevelService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80189);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64913);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26860);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45715);





let EmployeeLevelService = /*#__PURE__*/(() => {
  class EmployeeLevelService {
    constructor(http) {
      this.http = http;
    }
    getAll(relations, findInput) {
      const data = JSON.stringify({
        relations: relations || [],
        findInput
      });
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ ._)(this.http.get(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/employee-level`, {
        params: {
          data
        }
      }));
    }
    create(employeeLevel) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ ._)(this.http.post(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/employee-level`, employeeLevel));
    }
    delete(id) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ ._)(this.http.delete(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/employee-level/${id}`));
    }
    update(id, employeeLevel) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ ._)(this.http.put(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/employee-level/${id}`, employeeLevel));
    }
    static {
      this.ɵfac = function EmployeeLevelService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || EmployeeLevelService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵinject"] */ .KVO(_angular_common_http__WEBPACK_IMPORTED_MODULE_3__/* .HttpClient */ .Qq));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineInjectable"] */ .jDH({
        token: EmployeeLevelService,
        factory: EmployeeLevelService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return EmployeeLevelService;
})();

/***/ }),

/***/ 87399:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   b: () => (/* binding */ AccountingTemplateTypeEnum)
/* harmony export */ });
var AccountingTemplateTypeEnum = /*#__PURE__*/function (AccountingTemplateTypeEnum) {
  AccountingTemplateTypeEnum["INVOICE"] = "invoice";
  AccountingTemplateTypeEnum["ESTIMATE"] = "estimate";
  AccountingTemplateTypeEnum["RECEIPT"] = "receipt";
  return AccountingTemplateTypeEnum;
}(AccountingTemplateTypeEnum || {});

/***/ }),

/***/ 92381:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K: () => (/* binding */ RoleGuard)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73014);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80189);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26860);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9620);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(36042);







let RoleGuard = /*#__PURE__*/(() => {
  class RoleGuard {
    constructor(router, authService) {
      this.router = router;
      this.authService = authService;
    }
    /**
     * Asynchronously checks if the user has the expected role to activate a route.
     *
     * @param {ActivatedRouteSnapshot} route - The route to be activated.
     * @param {RouterStateSnapshot} state - The current router state.
     * @return {Promise<boolean>} A promise that resolves to true if the user has the expected role, false otherwise.
     */
    canActivate(route, state) {
      var _this = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(function* () {
        const expectedRole = route.data['expectedRole'];
        const hasRole = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ ._)(_this.authService.hasRole(expectedRole));
        if (hasRole) {
          return true;
        }
        _this.router.navigate(['/auth/login'], {
          queryParams: {
            returnUrl: state.url
          }
        });
        return false;
      })();
    }
    static {
      this.ɵfac = function RoleGuard_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || RoleGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵinject"] */ .KVO(_angular_router__WEBPACK_IMPORTED_MODULE_3__/* .Router */ .Ix), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵinject"] */ .KVO(_services__WEBPACK_IMPORTED_MODULE_4__/* .AuthService */ .u));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineInjectable"] */ .jDH({
        token: RoleGuard,
        factory: RoleGuard.ɵfac
      });
    }
  }
  return RoleGuard;
})();

/***/ }),

/***/ 94380:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ AccountingTemplateService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80189);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64913);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26024);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26860);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45715);





let AccountingTemplateService = /*#__PURE__*/(() => {
  class AccountingTemplateService {
    constructor(http) {
      this.http = http;
    }
    getAll(relations, where) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ ._)(this.http.get(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/accounting-template`, {
        params: (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_2__/* .toParams */ .SV)({
          where,
          relations
        })
      }));
    }
    getById(id) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ ._)(this.http.get(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/accounting-template/${id}`));
    }
    getTemplate(request) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ ._)(this.http.get(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/accounting-template/template`, {
        params: (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_2__/* .toParams */ .SV)({
          ...request
        })
      }));
    }
    generateTemplatePreview(request) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ ._)(this.http.post(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/accounting-template/template/preview`, {
        request
      }));
    }
    saveTemplate(data) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ ._)(this.http.post(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/accounting-template/template/save`, {
        ...data
      }));
    }
    updateTemplate(id, data) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ ._)(this.http.put(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/accounting-template/${id}`, data));
    }
    static {
      this.ɵfac = function AccountingTemplateService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || AccountingTemplateService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵinject"] */ .KVO(_angular_common_http__WEBPACK_IMPORTED_MODULE_4__/* .HttpClient */ .Qq));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdefineInjectable"] */ .jDH({
        token: AccountingTemplateService,
        factory: AccountingTemplateService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return AccountingTemplateService;
})();

/***/ }),

/***/ 96789:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Y: () => (/* binding */ generateCsv)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73014);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43277);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_0__);


function generateCsv(_x, _x2, _x3) {
  return _generateCsv.apply(this, arguments);
}
function _generateCsv() {
  _generateCsv = (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(function* (data, headers, fileName) {
    const replacer = (key, value) => value === null ? 'N/A' : value;
    const header = Object.keys(data[0]);
    const csv = data.map(row => header.map(fieldName => JSON.stringify(row[fieldName], replacer)).join(','));
    csv.unshift(headers);
    var BOM = '\uFEFF';
    const csvArray = BOM + csv.join('\r\n');
    var blob = new Blob([csvArray], {
      type: 'text/csv;charset=utf-8'
    });
    (0,file_saver__WEBPACK_IMPORTED_MODULE_0__.saveAs)(blob, `${fileName}.csv`);
  });
  return _generateCsv.apply(this, arguments);
}

/***/ }),

/***/ 97121:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P: () => (/* binding */ IntegrationEntitySettingService)
/* harmony export */ });
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(64913);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26860);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45715);




let IntegrationEntitySettingService = /*#__PURE__*/(() => {
  class IntegrationEntitySettingService {
    constructor(_http) {
      this._http = _http;
    }
    /**
     * Retrieve entity settings for a given integration.
     * @param integrationId - The ID of the integration.
     * @returns An observable of entity settings.
     */
    getEntitySettings(integrationId) {
      const url = `${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_0__/* .API_PREFIX */ .m4}/integration-entity-setting/integration/${integrationId}`;
      return this._http.get(url);
    }
    /**
     * Update entity settings for a given integration.
     * @param integrationId - The ID of the integration.
     * @param settings - The entity settings to update.
     * @returns An observable of updated entity settings.
     */
    updateEntitySettings(integrationId, settings) {
      const url = `${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_0__/* .API_PREFIX */ .m4}/integration-entity-setting/integration/${integrationId}`;
      return this._http.put(url, settings);
    }
    static {
      this.ɵfac = function IntegrationEntitySettingService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || IntegrationEntitySettingService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵinject"] */ .KVO(_angular_common_http__WEBPACK_IMPORTED_MODULE_2__/* .HttpClient */ .Qq));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineInjectable"] */ .jDH({
        token: IntegrationEntitySettingService,
        factory: IntegrationEntitySettingService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return IntegrationEntitySettingService;
})();

/***/ })

}]);