"use strict";
(self["webpackChunkgauzy"] = self["webpackChunkgauzy"] || []).push([[9379],{

/***/ 10175:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   m: () => (/* binding */ TimesheetLayoutComponent)
/* harmony export */ });
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17785);
/* harmony import */ var _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38546);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19223);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9620);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(22550);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(28822);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(56383);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(14572);
/* harmony import */ var _packages_ui_core_shared_src_lib_components_date_range_title_date_range_title_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2538);
/* harmony import */ var _packages_ui_core_shared_src_lib_components_header_title_header_title_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(49072);
/* harmony import */ var _packages_ui_core_shared_src_lib_components_dynamic_tabs_dynamic_tabs_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(90628);














function TimesheetLayoutComponent_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "ngx-date-range-title", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const selectedDateRange_r1 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("start", selectedDateRange_r1 == null ? null : selectedDateRange_r1.startDate)("end", selectedDateRange_r1 == null ? null : selectedDateRange_r1.endDate)("format", "dddd, LL");
  }
}
let TimesheetLayoutComponent = /*#__PURE__*/(() => {
  class TimesheetLayoutComponent extends _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_1__/* .TranslationBaseComponent */ .K {
    constructor(translateService, _route, _pageTabRegistryService, _dateRangePickerBuilderService) {
      super(translateService);
      this.translateService = translateService;
      this._route = _route;
      this._pageTabRegistryService = _pageTabRegistryService;
      this._dateRangePickerBuilderService = _dateRangePickerBuilderService;
      this.tabsetId = this._route.snapshot.data.tabsetId; // The identifier for the tabset
      this.selectedDateRange$ = this._dateRangePickerBuilderService.selectedDateRange$;
    }
    ngOnInit() {
      // Register the page tabs
      this.registerPageTabs();
    }
    /**
     * Registers page tabs for the timesheet module.
     * Ensures that tabs are registered only once.
     *
     * @returns {void}
     */
    registerPageTabs() {
      // Register the daily timesheet tab
      this._pageTabRegistryService.registerPageTab({
        tabsetId: this.tabsetId,
        // The identifier for the tabset
        tabId: 'daily',
        // The identifier for the tab
        tabsetType: 'route',
        // The type of tabset to use
        route: '/pages/employees/timesheets/daily',
        // The route for the tab
        tabTitle: () => this.getTranslation('TIMESHEET.DAILY'),
        // The title for the tab
        responsive: true,
        // Whether the tab is responsive
        activeLinkOptions: {
          exact: false
        },
        // The options for the active link
        order: 1,
        // The order of the tab
        permissions: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__/* .PermissionsEnum */ .U.TIME_TRACKER, _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__/* .PermissionsEnum */ .U.ALL_ORG_EDIT, _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__/* .PermissionsEnum */ .U.TIME_TRACKING_DASHBOARD] // The permissions required to view the daily timesheet
      });
      // Register the weekly timesheet tab
      this._pageTabRegistryService.registerPageTab({
        tabsetId: this.tabsetId,
        // The identifier for the tabset
        tabId: 'weekly',
        // The identifier for the tab
        tabsetType: 'route',
        // The type of tabset to use
        route: '/pages/employees/timesheets/weekly',
        // The route for the tab
        tabTitle: () => this.getTranslation('TIMESHEET.WEEKLY'),
        // The title for the tab
        responsive: true,
        // Whether the tab is responsive
        activeLinkOptions: {
          exact: false
        },
        // The options for the active link
        order: 2,
        // The order of the tab
        permissions: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__/* .PermissionsEnum */ .U.TIME_TRACKER, _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__/* .PermissionsEnum */ .U.ALL_ORG_EDIT, _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__/* .PermissionsEnum */ .U.TIME_TRACKING_DASHBOARD] // The permissions required to view the weekly timesheet
      });
      // Register the calendar timesheet tab
      this._pageTabRegistryService.registerPageTab({
        tabsetId: this.tabsetId,
        // The identifier for the tabset
        tabId: 'calendar',
        // The identifier for the tab
        tabsetType: 'route',
        // The type of tabset to use
        route: '/pages/employees/timesheets/calendar',
        // The route for the tab
        tabTitle: () => this.getTranslation('TIMESHEET.CALENDAR'),
        // The title for the tab
        responsive: true,
        // Whether the tab is responsive
        activeLinkOptions: {
          exact: false
        },
        // The options for the active link
        order: 3,
        // The order of the tab
        permissions: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__/* .PermissionsEnum */ .U.TIME_TRACKER, _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__/* .PermissionsEnum */ .U.ALL_ORG_EDIT, _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__/* .PermissionsEnum */ .U.TIME_TRACKING_DASHBOARD] // The permissions required to view the calendar timesheet
      });
      // Register the approvals tab
      this._pageTabRegistryService.registerPageTab({
        tabsetId: this.tabsetId,
        // The identifier for the tabset
        tabId: 'approvals',
        // The identifier for the tab
        tabsetType: 'route',
        // The type of tabset to use
        route: '/pages/employees/timesheets/approvals',
        // The route for the tab
        tabTitle: () => this.getTranslation('TIMESHEET.APPROVALS'),
        // The title for the tab
        responsive: true,
        // Whether the tab is responsive
        activeLinkOptions: {
          exact: false
        },
        // The options for the active link
        order: 4,
        // The order of the tab
        permissions: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__/* .PermissionsEnum */ .U.CAN_APPROVE_TIMESHEET]
      });
    }
    ngOnDestroy() {}
    static {
      this.ɵfac = function TimesheetLayoutComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || TimesheetLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__/* .TranslateService */ .c$), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_router__WEBPACK_IMPORTED_MODULE_4__/* .ActivatedRoute */ .nX), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_5__/* .PageTabRegistryService */ .R), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_6__/* .DateRangePickerBuilderService */ .i7));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: TimesheetLayoutComponent,
        selectors: [["ngx-timesheet-layout"]],
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
        decls: 11,
        vars: 7,
        consts: [[1, "header"], [1, "col-auto"], [4, "ngIf"], [1, "p-0"], [3, "tabsetId"], [3, "start", "end", "format"]],
        template: function TimesheetLayoutComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-card")(1, "nb-card-header", 0)(2, "div", 1)(3, "h4")(4, "ngx-header-title");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(6, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(7, TimesheetLayoutComponent_ng_container_7_Template, 2, 3, "ng-container", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(8, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(9, "nb-card-body", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(10, "gz-dynamic-tabs", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(6, 3, "MENU.TIMESHEETS"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(8, 5, ctx.selectedDateRange$));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("tabsetId", ctx.tabsetId);
          }
        },
        dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbCardComponent */ .SrT, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbCardBodyComponent */ .KH5, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbCardHeaderComponent */ .zJv, _angular_common__WEBPACK_IMPORTED_MODULE_8__/* .NgIf */ .bT, _packages_ui_core_shared_src_lib_components_date_range_title_date_range_title_component__WEBPACK_IMPORTED_MODULE_9__/* .DateRangeTitleComponent */ .D, _packages_ui_core_shared_src_lib_components_header_title_header_title_component__WEBPACK_IMPORTED_MODULE_10__/* .HeaderTitleComponent */ .X, _packages_ui_core_shared_src_lib_components_dynamic_tabs_dynamic_tabs_component__WEBPACK_IMPORTED_MODULE_11__/* .DynamicTabsComponent */ .d, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__/* .TranslatePipe */ .D9, _angular_common__WEBPACK_IMPORTED_MODULE_8__/* .AsyncPipe */ .Jj],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  overflow: unset;\n}\n[_nghost-%COMP%]     nb-route-tabset .route-tab .tab-link {\n  border-radius: var(--border-radius) var(--border-radius) 0 0;\n}\n[_nghost-%COMP%]     nb-route-tabset .route-tab .tab-link svg {\n  fill: var(--text-primary-color);\n}\n[_nghost-%COMP%]     nb-route-tabset .route-tab .tab-link span {\n  display: inline-block;\n  text-transform: initial;\n}\n[_nghost-%COMP%]     nb-route-tabset .route-tab .tab-link span:first-letter {\n  text-transform: uppercase;\n}\n\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n}"]
      });
    }
  }
  return TimesheetLayoutComponent;
})();

/***/ }),

/***/ 18970:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   h: () => (/* binding */ createTimesheetRoutes)
/* harmony export */ });
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10175);

/**
 * Create and configures routes for the timesheet module.
 *
 * @param _pageRouteRegistryService
 * @returns
 */
const createTimesheetRoutes = _pageRouteRegistryService => [{
  path: '',
  component: _layout_layout_component__WEBPACK_IMPORTED_MODULE_0__/* .TimesheetLayoutComponent */ .m,
  data: {
    tabsetId: 'timesheet'
  },
  children: [{
    path: '',
    redirectTo: 'daily',
    pathMatch: 'full'
  }, {
    path: 'daily',
    loadChildren: () => Promise.all(/* import() */[__webpack_require__.e(2759), __webpack_require__.e(166), __webpack_require__.e(8180), __webpack_require__.e(5774), __webpack_require__.e(1458), __webpack_require__.e(2076), __webpack_require__.e(8402)]).then(__webpack_require__.bind(__webpack_require__, 19121)).then(m => m.DailyModule)
  }, {
    path: 'weekly',
    loadChildren: () => Promise.all(/* import() */[__webpack_require__.e(2759), __webpack_require__.e(166), __webpack_require__.e(8180), __webpack_require__.e(5774), __webpack_require__.e(1458), __webpack_require__.e(1094), __webpack_require__.e(8760), __webpack_require__.e(9664)]).then(__webpack_require__.bind(__webpack_require__, 26461)).then(m => m.WeeklyModule)
  }, {
    path: 'calendar',
    loadChildren: () => Promise.all(/* import() */[__webpack_require__.e(2759), __webpack_require__.e(166), __webpack_require__.e(8180), __webpack_require__.e(5774), __webpack_require__.e(170), __webpack_require__.e(1458), __webpack_require__.e(9812)]).then(__webpack_require__.bind(__webpack_require__, 12955)).then(m => m.CalendarModule)
  }, {
    path: 'approvals',
    loadChildren: () => Promise.all(/* import() */[__webpack_require__.e(2759), __webpack_require__.e(166), __webpack_require__.e(2665)]).then(__webpack_require__.bind(__webpack_require__, 95046)).then(m => m.ApprovalsModule)
  }, ..._pageRouteRegistryService.getPageLocationRoutes('timesheet')]
}, {
  path: ':id',
  loadChildren: () => Promise.all(/* import() */[__webpack_require__.e(8180), __webpack_require__.e(5774), __webpack_require__.e(8626)]).then(__webpack_require__.bind(__webpack_require__, 84041)).then(m => m.ViewModule)
}];

/***/ }),

/***/ 51760:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TimesheetModule: () => (/* binding */ TimesheetModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9620);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(908);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(56383);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(19223);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6828);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(38834);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(44944);
/* harmony import */ var _timesheet_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18970);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);









let TimesheetModule = /*#__PURE__*/(() => {
  class TimesheetModule {
    static {
      this.ɵfac = function TimesheetModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || TimesheetModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .$C({
        type: TimesheetModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .G2t({
        providers: [{
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_1__/* .ROUTES */ .bw,
          useFactory: service => (0,_timesheet_routes__WEBPACK_IMPORTED_MODULE_2__/* .createTimesheetRoutes */ .h)(service),
          deps: [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_3__/* .PageRouteRegistryService */ .L],
          multi: true
        }],
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__/* .RouterModule */ .iI.forChild([]), _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbCardModule */ .lVF, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__/* .TranslateModule */ .h.forChild(), _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_7__/* .SharedModule */ .G, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_8__/* .DynamicTabsModule */ .A, _angular_router__WEBPACK_IMPORTED_MODULE_4__/* .RouterModule */ .iI]
      });
    }
  }
  return TimesheetModule;
})();

/***/ })

}]);