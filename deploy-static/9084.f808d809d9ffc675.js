"use strict";
(self["webpackChunkgauzy"] = self["webpackChunkgauzy"] || []).push([[9084],{

/***/ 22550:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ PageTabRegistryService)
/* harmony export */ });
/* harmony import */ var _store_store_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71924);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);





let PageTabRegistryService = /*#__PURE__*/(() => {
  class PageTabRegistryService {
    constructor(_store) {
      this._store = _store;
      this.logging = false;
      /**
       * Registry for storing page tab configurations.
       *
       * This Map stores arrays of PageTabRegistryConfig objects, keyed by PageTabsetRegistryId.
       */
      this.registry = new Map();
    }
    /**
     * Retrieves the current tab registry.
     *
     * This method returns a map of tab configurations, organized by their tabset identifiers.
     *
     * @returns A `Map` where each key is a `PageTabsetRegistryId` and each value is an array of
     *          `PageTabRegistryConfig` objects associated with that tabset.
     */
    getRegistry() {
      return new Map(this.registry); // Return a new Map to ensure immutability
    }
    /**
     * Register a single page tab configuration.
     *
     * This method registers a new page tab configuration in the service's internal registry.
     * It ensures that the configuration has a valid tabset property and checks if a tab
     * with the same tabsetId already exists to prevent duplicate entries. If the configuration
     * is valid and unique, it adds it to the registry.
     *
     * @param config The configuration for the page tab.
     * @throws Will throw an error if the configuration does not have a location property.
     * @throws Will throw an error if a tab with the same location has already been registered.
     */
    registerPageTab(config) {
      // Check if the configuration has a location property
      if (!config.tabsetId) {
        throw new Error('Page tab configuration must have a tabsetId property');
      }
      // Call addPageTab to handle the addition or update of the tab
      this.addPageTab(config, config.tabsetId);
    }
    /**
     * Adds a new page tab to the specified tab set.
     *
     * @param config The configuration object representing the new tab to add.
     * @param tabsetId The identifier of the tab set to which the new tab should be added.
     */
    addPageTab(config, tabsetId) {
      // Check if the configuration has a location property
      if (!config.tabsetId) {
        throw new Error('Page tab configuration must have a tabsetId property');
      }
      // Get the list of tabs for the specified tab set from the registry, or initialize as an empty array if not found
      const tabs = this.registry.get(tabsetId) || [];
      // Ensure config is defined before accessing its properties
      config.order = config.order ?? 0; // Set the default order to 0 if not provided
      config.hide = config.hide ?? false; // Set the default hide to false if not provided
      config.responsive = config.responsive ?? true; // Set the default responsive to true if not provided
      config.active = config.active ?? false; // Set the default active to false if not provided
      // Find the index of an existing tab with the same tabId in the specified tab set
      const existing = tabs.findIndex(tab => tab.tabId === config.tabId);
      // If the tab exists, replace it with the new configuration
      if (existing !== -1) {
        // If the tab exists, replace it with the new configuration
        tabs[existing] = config;
      } else {
        // If the tab does not exist, add the new tab configuration to the list
        tabs.push(config);
      }
      // Update the registry with the modified list of tabs for the specified tabset
      this.registry.set(tabsetId, tabs);
    }
    /**
     * Removes a page tab from the specified tab set.
     *
     * This method retrieves the list of tabs associated with the provided `tabsetId`,
     * finds the tab with the specified `tabId`, removes it from the list, and updates
     * the registry. If the tabset becomes empty after removal, it also removes the tabset
     * entry from the registry.
     *
     * @param tabsetId The identifier of the tab set from which the tab should be removed.
     * @param tabId The identifier of the tab to remove.
     */
    removePageTab(tabsetId, tabId) {
      // Retrieve the list of tabs for the specified tabset, or initialize as an empty array if not found
      const tabs = this.registry.get(tabsetId) || [];
      // Find the index of the tab with the specified tabId
      const index = tabs.findIndex(tab => tab.tabId === tabId);
      // If the tab exists in the list, remove it
      if (index !== -1) {
        // Remove the tab from the list
        tabs.splice(index, 1);
        // Update the registry with the modified list of tabs
        if (tabs.length > 0) {
          this.registry.set(tabsetId, tabs);
        } else {
          // Remove the tabset entry from the registry if no tabs are left
          this.registry.delete(tabsetId);
        }
      }
    }
    /**
     * Register multiple page tab configurations.
     *
     * This method registers multiple new page tab configurations in the service's internal registry.
     * It ensures that each configuration has a valid tabset property and checks if a tab with the same
     * tabsetId already exists to prevent duplicate entries. If the configurations are valid and unique,
     * it adds them to the registry.
     *
     * @param configs The array of configurations for the page tabs.
     * @throws Will throw an error if a tab with the same location and path has already been registered.
     */
    registerPageTabs(configs) {
      configs.forEach(config => this.registerPageTab(config));
    }
    /**
     * Get all page tabs for a specified tabset, sorted by their order.
     *
     * This method retrieves the registered tabs for a given `tabsetId` from the registry,
     * sorts them based on their `order` property, and returns the sorted array.
     * If no tabs are registered for the specified `tabsetId`, it returns an empty array.
     *
     * @param tabsetId The identifier for the tabset.
     * @returns An array of `PageTabRegistryConfig` objects, sorted by their `order` property.
     */
    getPageTabsByOrder(tabsetId) {
      // Retrieve the tabs for the specified tabsetId from the registry
      const tabs = this.registry.get(tabsetId) || [];
      // If tabs exist, sort them by the 'order' property; otherwise, return an empty array
      return tabs?.sort((a, b) => (a.order ?? 0) - (b.order ?? 0)) || [];
    }
    /**
     * Retrieves all unique page tabs for a specified tabset.
     *
     * This method first retrieves all the tabs associated with the given `tabsetId`, then
     * ensures that each tab is unique based on its `tabId` by using a `Map`. Finally, it returns
     * an array of these unique tabs.
     *
     * @param tabsetId The identifier for the tabset whose tabs are to be retrieved.
     * @returns An array of unique page tabs for the specified tabset.
     */
    getPageTabset(tabsetId) {
      // Get all permitted registered tabs for the specified tabset, ordered as required
      const tabs = this.getPermittedPageTabset(tabsetId);
      // Create a map to track unique tabs based on tabId
      const uniqueTabsMap = new Map();
      // Iterate through tabs and add them to the map if not already present
      tabs.forEach(tab => {
        // Ensure only unique tabs are added
        uniqueTabsMap.set(tab.tabId, tab);
      });
      // Convert the map values to an array and return
      return Array.from(uniqueTabsMap.values());
    }
    /**
     * Get all permitted registered tabs for a specified tabset.
     *
     * This method retrieves all tabs registered for the given `tabsetId` and filters them
     * based on the current user's permissions. Only tabs that the user is allowed to view
     * are included in the returned array.
     *
     * @param tabsetId The identifier for the tabset whose permitted tabs are to be retrieved.
     * @returns An array of `PageTabRegistryConfig` objects representing the permitted tabs for the specified tabset.
     */
    getPermittedPageTabset(tabsetId) {
      // Retrieve all registered tabs for the specified tabset
      const tabs = this.getPageTabsByOrder(tabsetId);
      // Filter the tabs based on permissions
      return tabs.filter(tab => this.verifyPermissions(tab));
    }
    /**
     * Verify if the current user has the required permissions to view the tab.
     *
     * This method checks whether the current user has the necessary permissions to access a given tab.
     * If the tab specifies permissions, the method will validate if the user meets the criteria.
     * If no permissions are specified, the tab is accessible by default.
     * If `requireAllPermissions` is `true`, the user must have all specified permissions.
     * If `requireAllPermissions` is `false` or not specified, the user must have at least one of the permissions.
     *
     * @param tab The tab configuration object containing the permissions and other settings.
     * @returns `true` if the user has the required permissions to view the tab, `false` otherwise.
     */
    verifyPermissions(tab) {
      // If the tab has no permissions specified, allow it by default
      if (!tab.permissions) {
        return true;
      }
      // If requireAllPermissions is true, check if the user has all the permissions
      if (tab.requireAllPermissions) {
        return Array.isArray(tab.permissions) ? this._store.hasAllPermissions(...tab.permissions) : this._store.hasPermission(tab.permissions);
      }
      // Otherwise, check if the user has at least one of the permissions
      return Array.isArray(tab.permissions) ? this._store.hasAnyPermission(...tab.permissions) : this._store.hasPermission(tab.permissions);
    }
    /**
     * @description
     * Deletes a tabset from the registry.
     *
     * This method removes a tabset identified by the provided `tabsetId` from the internal registry.
     * If the specified `tabsetId` does not exist in the registry, the function will simply return
     * without making any changes.
     *
     * @param tabsetId The identifier for the tabset to delete.
     */
    deleteTabset(tabsetId) {
      // Check if the tabset exists in the registry
      if (!this.registry.has(tabsetId)) {
        // Log the warning if logging is enabled
        if (this.logging) {
          console.warn(`Tabset with id "${tabsetId}" does not exist in the registry.`);
        }
        return;
      }
      try {
        // Remove the tabset from the registry
        this.registry.delete(tabsetId);
        // Log the warning if logging is enabled
        if (this.logging) {
          console.log(`Tabset with id "${tabsetId}" has been successfully removed from the registry.`);
        }
      } catch (error) {
        console.error(`Failed to remove tabset with id "${tabsetId}": ${error.message}`);
      }
    }
    /**
     * @description
     * Retrieves the component or template associated with a specific tab ID for a given tabset.
     *
     * This method looks up the tabset using the provided `tabsetId`, then searches for the tab
     * with the specified `tabId` within that tabset. If the tab is found, it returns either the
     * component or the template based on the tab's configuration; otherwise, it returns `undefined`.
     *
     * @param tabsetId The identifier of the tabset to retrieve tabs from.
     * @param tabId The identifier of the tab whose component or template is to be retrieved.
     * @returns The component or template associated with the specified tab ID, or `undefined` if neither is found.
     */
    getComponentOrTemplateForTab(tabsetId, tabId) {
      // Retrieve the list of tabs for the specified tabsetId
      const tabs = this.getPageTabset(tabsetId);
      // Ensure that tabs is an array and check if the tab exists
      if (Array.isArray(tabs)) {
        // Find the tab with the specified tabId
        const tab = tabs.find(t => t.tabId === tabId);
        // Return the component if it exists, otherwise return the template
        return tab?.component || tab?.template;
      }
      // Return undefined if the tabs could not be retrieved or are not an array
      return undefined;
    }
    static {
      this.ɵfac = function PageTabRegistryService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || PageTabRegistryService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵinject"] */ .KVO(_store_store_service__WEBPACK_IMPORTED_MODULE_1__/* .Store */ .il));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjectable"] */ .jDH({
        token: PageTabRegistryService,
        factory: PageTabRegistryService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return PageTabRegistryService;
})();

/***/ }),

/***/ 44944:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ DynamicTabsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14572);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56383);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26860);



// Nebular Modules
const NB_MODULES = [_nebular_theme__WEBPACK_IMPORTED_MODULE_0__/* .NbTabsetModule */ .AfG, _nebular_theme__WEBPACK_IMPORTED_MODULE_0__/* .NbRouteTabsetModule */ .x$5];
let DynamicTabsModule = /*#__PURE__*/(() => {
  class DynamicTabsModule {
    static {
      this.ɵfac = function DynamicTabsModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || DynamicTabsModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineNgModule"] */ .$C({
        type: DynamicTabsModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__/* .CommonModule */ .MD, NB_MODULES]
      });
    }
  }
  return DynamicTabsModule;
})();

/***/ }),

/***/ 90628:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   d: () => (/* binding */ DynamicTabsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(55598);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19223);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41598);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39855);
/* harmony import */ var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4644);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(22550);
/* harmony import */ var _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(82465);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(14572);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(56383);














const _c0 = ["tabContent"];
function DynamicTabsComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "nb-route-tabset", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("tabs", ctx_r0.tabs);
  }
}
function DynamicTabsComponent_ng_template_1_nb_tab_1_ng_template_1_Template(rf, ctx) {}
function DynamicTabsComponent_ng_template_1_nb_tab_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-tab", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, DynamicTabsComponent_ng_template_1_nb_tab_1_ng_template_1_Template, 0, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplateRefExtractor"] */ .C5r);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const tab_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("tabTitle", tab_r2 == null ? null : tab_r2.title)("tabIcon", tab_r2 == null ? null : tab_r2.icon)("tabId", tab_r2 == null ? null : tab_r2.tabId)("active", tab_r2 == null ? null : tab_r2.active)("disabled", tab_r2 == null ? null : tab_r2.disabled)("responsive", tab_r2 == null ? null : tab_r2.responsive)("route", tab_r2 == null ? null : tab_r2.route);
  }
}
function DynamicTabsComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-tabset");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, DynamicTabsComponent_ng_template_1_nb_tab_1_Template, 3, 7, "nb-tab", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx_r0.tabs);
  }
}
let DynamicTabsComponent = /*#__PURE__*/(() => {
  let DynamicTabsComponent = class DynamicTabsComponent {
    /**
     * Determines if all tabs in the tabset have the tabsetType set to 'route'.
     *
     * @returns true if all tabs in the tabset have tabsetType set to 'route', false otherwise.
     */
    get isRouterTabset() {
      const tabs = this.getRegisteredTabs(this.tabsetId);
      // If there are no tabs or tabs is undefined, assume it's not a router tabset.
      if (!tabs || tabs.length === 0) {
        return false;
      }
      // Check if every tab has tabsetType set to 'route'
      return tabs.every(tab => tab.tabsetType === 'route');
    }
    constructor(_cdr, _translateService, _pageTabRegistryService, _i18n) {
      this._cdr = _cdr;
      this._translateService = _translateService;
      this._pageTabRegistryService = _pageTabRegistryService;
      this._i18n = _i18n;
      this.tabs = []; // Define the structure of tabs according to your needs
      this.reload$ = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_1__/* .Subject */ .B(); // Subject to trigger reload of tabs
    }
    ngOnInit() {
      this._initializeTabs();
      this._applyTranslationOnTabs();
      this._setupReloadTabsListener();
    }
    ngAfterViewInit() {
      this._loadTabsContent(); // Load the tab content for each tab in the tabset
    }
    /**
     * Setup listener for reloading tabs.
     */
    _setupReloadTabsListener() {
      this.reload$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .tap */ .M)(() => this._initializeTabs()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__/* .untilDestroyed */ .s)(this)).subscribe();
    }
    /**
     * Load the tab content for each tab in the tabset.
     */
    _loadTabsContent() {
      // Load the tab content for each tab in the tabset
      this.tabContents.forEach((container, index) => {
        // Get the tab configuration for the current index
        const tab = this.tabs[index];
        // Get the component or template for the tab
        const content = this._pageTabRegistryService.getComponentOrTemplateForTab(this.tabsetId, tab.tabId);
        // Check if the content is a template or component
        if (content instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .TemplateRef */ .C4Q) {
          this.loadTemplateForTab(content, container); // Handle template loading
        } else if (content instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .Type */ .ZUJ) {
          this.loadComponentForTab(content, container); // Handle component loading
        }
      });
      // Detect changes after loading tab content
      this._cdr.detectChanges();
    }
    /**
     * Initializes the tabs for the component based on the provided tabset ID.
     *
     * This function retrieves all registered tabs for the specified tabset ID
     * using the `getRegisteredNbTabs` method and assigns them to the `tabs`
     * property. This allows the component to display the correct set of tabs
     * dynamically.
     */
    _initializeTabs() {
      // Retrieve and set the tabs based on the tabsetId
      this.tabs = this.getRegisteredNbTabs(this.tabsetId);
      this._cdr.detectChanges();
    }
    /**
     * Retrieve and filter tabs for a specified tabset.
     *
     * @param tabsetId The identifier for the tabset.
     * @returns An array of PageTabRegistryConfig objects for the specified tabset, excluding tabs with hide set to true.
     */
    getRegisteredTabs(tabsetId) {
      return this._pageTabRegistryService.getPageTabset(tabsetId).filter(tab => !tab.hide);
    }
    /**
     * Get all registered tabs for a specified tabset.
     *
     * This function retrieves the registered tabs from the PageTabRegistryService
     * and maps each tab configuration to an NbRouteTab object, which can be used
     * by the Nebular tabset component. The title is translated if necessary,
     * and other properties like icon, disabled state, responsive behavior, and route
     * are mapped accordingly.
     *
     * @param tabsetId The identifier for the tabset.
     * @returns An array of NbRouteTab objects representing the registered tabs.
     */
    getRegisteredNbTabs(tabsetId) {
      // Map each tab configuration to an NbRouteTab object
      return this.getRegisteredTabs(tabsetId).map(tab => {
        // Create a new route tab object
        const route = {
          ...(tab.tabTitle && {
            title: typeof tab.tabTitle === 'function' ? tab.tabTitle(this._i18n) : tab.tabTitle
          }),
          ...(tab.tabId && {
            tabId: tab.tabId
          }),
          ...(tab.route && {
            route: tab.route
          }),
          ...(tab.tabIcon && {
            icon: tab.tabIcon
          }),
          ...(tab.responsive && {
            responsive: tab.responsive
          }),
          ...(tab.activeLinkOptions && {
            activeLinkOptions: tab.activeLinkOptions
          }),
          disabled: !!tab.disabled,
          active: !!tab.active
        };
        // Check if the tabset is a router tabset
        if (!this.isRouterTabset) {
          // Check if the route configuration has a component or loadChildren property
          if (tab.template) {
            // Set the template property to the config object
            route.template = tab.template;
          } else if (tab.component) {
            // Set the component property to the config object
            route.component = tab.component;
          }
        }
        // Return the route object
        return route;
      });
    }
    /**
     * Applies translations to dynamic tabs.
     *
     * This function listens for language change events and re-initializes the tabs
     * when the language changes. This ensures that the tabs are always displayed
     * in the correct language.
     */
    _applyTranslationOnTabs() {
      // Listen for language change events from the translation service
      this._translateService.onLangChange.pipe(
      // Re-initialize the tabs when the language changes
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .tap */ .M)(() => this.reload$.next(true)),
      // Automatically unsubscribe when the component is destroyed
      (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__/* .untilDestroyed */ .s)(this)).subscribe();
    }
    /**
     * Loads a template into a specified container.
     *
     * This method clears any existing content in the provided container
     * and then creates an embedded view for the given template, inserting
     * it into the container.
     *
     * @param template The template to be loaded into the container.
     * @param container The container where the template will be inserted.
     */
    loadTemplateForTab(template, container) {
      // Clear any existing content in the container
      container.clear();
      // Create an embedded view for the provided template and insert it into the container
      container.createEmbeddedView(template);
    }
    /**
     * Create and insert a dynamic component into the specified ViewContainerRef.
     *
     * This method clears any existing content in the provided container,
     * then creates a new instance of the specified component and inserts it
     * into the container.
     *
     * @param component The component to be created dynamically.
     * @param container The ViewContainerRef where the component should be inserted.
     */
    loadComponentForTab(component, container) {
      // Ensure the container is available and clear any existing content
      container.clear();
      // Create and insert the component into the view container
      container.createComponent(component);
    }
    ngOnDestroy() {}
    static {
      this.ɵfac = function DynamicTabsComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || DynamicTabsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* .ChangeDetectorRef */ .gRc), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__/* .TranslateService */ .c$), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_5__/* .PageTabRegistryService */ .R), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_6__/* .I18nService */ .W));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: DynamicTabsComponent,
        selectors: [["gz-dynamic-tabs"]],
        viewQuery: function DynamicTabsComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵviewQuery"] */ .GBs(_c0, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .ViewContainerRef */ .c1b);
          }
          if (rf & 2) {
            let _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵqueryRefresh"] */ .mGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵloadQuery"] */ .lsd()) && (ctx.tabContents = _t);
          }
        },
        inputs: {
          tabsetId: "tabsetId"
        },
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵProvidersFeature"] */ .Jv_([])],
        decls: 3,
        vars: 2,
        consts: [["staticTabs", ""], ["tabContent", ""], [4, "ngIf", "ngIfElse"], [3, "tabs"], [3, "tabTitle", "tabIcon", "tabId", "active", "disabled", "responsive", "route", 4, "ngFor", "ngForOf"], [3, "tabTitle", "tabIcon", "tabId", "active", "disabled", "responsive", "route"]],
        template: function DynamicTabsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(0, DynamicTabsComponent_ng_container_0_Template, 2, 1, "ng-container", 2)(1, DynamicTabsComponent_ng_template_1_Template, 2, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplateRefExtractor"] */ .C5r);
          }
          if (rf & 2) {
            const staticTabs_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.isRouterTabset)("ngIfElse", staticTabs_r3);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__/* .NgForOf */ .Sq, _angular_common__WEBPACK_IMPORTED_MODULE_7__/* .NgIf */ .bT, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__/* .NbTabsetComponent */ .Hsi, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__/* .NbTabComponent */ .d3K, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__/* .NbRouteTabsetComponent */ .ssE],
        encapsulation: 2
      });
    }
  };
  DynamicTabsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__/* .UntilDestroy */ .d)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__/* .__metadata */ .Sn)("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* .ChangeDetectorRef */ .gRc, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__/* .TranslateService */ .c$, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_5__/* .PageTabRegistryService */ .R, _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_6__/* .I18nService */ .W])], DynamicTabsComponent);
  return DynamicTabsComponent;
})();


/***/ })

}]);