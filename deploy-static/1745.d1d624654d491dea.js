"use strict";
(self["webpackChunkgauzy"] = self["webpackChunkgauzy"] || []).push([[1745],{

/***/ 10151:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ AmountsOwedReportRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(908);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(60559);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20433);
/* harmony import */ var _amounts_owed_report_amounts_owed_report_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46116);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26860);






const routes = [{
  path: '',
  component: _amounts_owed_report_amounts_owed_report_component__WEBPACK_IMPORTED_MODULE_0__/* .AmountsOwedReportComponent */ .A,
  data: {
    datePicker: {
      unitOfTime: 'week'
    }
  },
  resolve: {
    dates: _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_1__/* .DateRangePickerResolver */ .Q,
    bookmarkParams: _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_2__/* .BookmarkQueryParamsResolver */ .x
  }
}];
let AmountsOwedReportRoutingModule = /*#__PURE__*/(() => {
  class AmountsOwedReportRoutingModule {
    static {
      this.ɵfac = function AmountsOwedReportRoutingModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || AmountsOwedReportRoutingModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdefineNgModule"] */ .$C({
        type: AmountsOwedReportRoutingModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__/* .RouterModule */ .iI.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_4__/* .RouterModule */ .iI]
      });
    }
  }
  return AmountsOwedReportRoutingModule;
})();

/***/ }),

/***/ 33302:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AmountsOwedReportModule: () => (/* binding */ AmountsOwedReportModule)
/* harmony export */ });
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(56383);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19223);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38834);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(263);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(76339);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(61801);
/* harmony import */ var _amounts_owed_report_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10151);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26860);






let AmountsOwedReportModule = /*#__PURE__*/(() => {
  class AmountsOwedReportModule {
    static {
      this.ɵfac = function AmountsOwedReportModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || AmountsOwedReportModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineNgModule"] */ .$C({
        type: AmountsOwedReportModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [_amounts_owed_report_routing_module__WEBPACK_IMPORTED_MODULE_0__/* .AmountsOwedReportRoutingModule */ .T, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_2__/* .SharedModule */ .G, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__/* .TranslateModule */ .h.forChild(), _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbIconModule */ .clu, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbSpinnerModule */ .gYs, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbCardModule */ .lVF, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbSelectModule */ .VcP, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_5__/* .AmountsOwedGridModule */ .F, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_6__/* .LineChartModule */ .J, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_7__/* .GauzyFiltersModule */ .Q]
      });
    }
  }
  return AmountsOwedReportModule;
})();

/***/ }),

/***/ 46116:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ AmountsOwedReportComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(73014);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(64411);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26860);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(23423);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(19223);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(72781);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(73246);
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(78543);
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86014);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(77020);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(93697);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(71924);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(28822);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(87793);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(26024);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(46915);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(35476);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(60166);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(6195);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(14572);
/* harmony import */ var _packages_ui_core_shared_src_lib_components_date_range_title_date_range_title_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(2538);
/* harmony import */ var _packages_ui_core_shared_src_lib_components_header_title_header_title_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(49072);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(56383);
/* harmony import */ var _packages_ui_core_shared_src_lib_report_amounts_owed_grid_amounts_owed_grid_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(88008);
/* harmony import */ var _packages_ui_core_shared_src_lib_report_charts_line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(5620);























function AmountsOwedReportComponent_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(1, "ngx-date-range-title", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("start", ctx_r0.request == null ? null : ctx_r0.request.startDate)("end", ctx_r0.request == null ? null : ctx_r0.request.endDate)("format", "dddd, LL");
  }
}
let AmountsOwedReportComponent = class AmountsOwedReportComponent extends _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_2__/* .BaseSelectorFilterComponent */ .U {
  constructor(timesheetService, cd, translateService, timesheetFilterService, store, dateRangePickerBuilderService, timeZoneService) {
    super(store, translateService, dateRangePickerBuilderService, timeZoneService);
    this.timesheetService = timesheetService;
    this.cd = cd;
    this.translateService = translateService;
    this.timesheetFilterService = timesheetFilterService;
    this.store = store;
    this.dateRangePickerBuilderService = dateRangePickerBuilderService;
    this.timeZoneService = timeZoneService;
    this.loading = false;
    this.groupBy = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__/* .ReportGroupFilterEnum */ .B.date;
    this.datePickerConfig$ = this.dateRangePickerBuilderService.datePickerConfig$;
    this.payloads$ = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_4__/* .BehaviorSubject */ .t(null);
  }
  ngOnInit() {
    this.subject$.pipe(
    // Filters out emissions when the organization is falsy
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .filter */ .p)(() => !!this.organization),
    // Performs a side effect: invokes the prepareRequest() method
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .M)(() => this.prepareRequest()),
    // Ensures that the subscription is automatically unsubscribed when the component is destroyed
    (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__/* .untilDestroyed */ .s)(this))
    // Subscribes to the observable
    .subscribe();
    this.payloads$.pipe(
    // Ensures that consecutive emissions are distinct
    (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_8__/* .distinctUntilChange */ .nI)(),
    // Filters out falsy payloads
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .filter */ .p)(payloads => !!payloads),
    // Performs a side effect: invokes the updateChart() method
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .M)(() => this.updateChart()),
    // Ensures that the subscription is automatically unsubscribed when the component is destroyed
    (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__/* .untilDestroyed */ .s)(this))
    // Subscribes to the observable
    .subscribe();
  }
  ngAfterViewInit() {
    this.cd.detectChanges();
  }
  /**
   * Prepares a request for a time log report and emits it to the 'payloads$' observable.
   * If the request or filters are empty, the method does nothing.
   *
   * @returns
   */
  prepareRequest() {
    // Check if either the request or filters are empty
    if ((0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_8__/* .isEmpty */ .Im)(this.request) || (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_8__/* .isEmpty */ .Im)(this.filters)) {
      return; // Do nothing if either is empty
    }
    // Construct the request for the time log report
    const request = {
      ...this.getFilterRequest(this.request),
      // Assuming this is a method to process the request
      groupBy: this.groupBy
    };
    // Emit the prepared request to the 'payloads$' observable
    this.payloads$.next(request);
  }
  /**
   * Handles changes in Gauzy timesheet filters.
   * @param filters - The updated filters.
   */
  filtersChange(filters) {
    // Check if the 'saveFilters' property of 'gauzyFiltersComponent' is truthy
    if (this.gauzyFiltersComponent.saveFilters) {
      // If true, set the 'filter' property of 'timesheetFilterService' to the updated filters
      this.timesheetFilterService.filter = filters;
    }
    // Create a shallow copy of the updated filters and assign it to the 'filters' property
    this.filters = Object.assign({}, filters);
    // Emit a signal to the 'subject$' observable, indicating that filters have changed
    this.subject$.next(true);
  }
  /**
   * Updates the chart with data for the amount owed report.
   * @returns A Promise that resolves when the chart is successfully updated.
   */
  updateChart() {
    var _this = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A)(function* () {
      // Check if the organization or request is not provided; resolve the Promise without further action
      if (!_this.organization || (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_8__/* .isEmpty */ .Im)(_this.request)) {
        return;
      }
      // Set the loading flag to true
      _this.loading = true;
      try {
        // Get the current payloads from the observable
        const payloads = _this.payloads$.getValue();
        // Fetch the owed amount report data from the timesheetService
        const logs = yield _this.timesheetService.getOwedAmountReportChartData(payloads);
        // Build datasets for the chart
        const datasets = [{
          label: _this.getTranslation('REPORT_PAGE.AMOUNT'),
          // Label for the dataset
          data: logs.map(log => log.value),
          // Array of data points
          borderColor: _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_10__/* .ChartUtil */ .D.CHART_COLORS.red,
          // Color of the dataset border
          backgroundColor: _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_10__/* .ChartUtil */ .D.transparentize(_gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_10__/* .ChartUtil */ .D.CHART_COLORS.red, 1),
          // Background color with transparency
          borderWidth: 2,
          // Width of the dataset border
          pointRadius: 2,
          // Radius of the data points
          pointHoverRadius: 4,
          // Radius of the data points on hover
          pointHoverBorderWidth: 4,
          // Width of the border of data points on hover
          tension: 0.4,
          // Tension of the spline curve connecting data points
          fill: false // Whether to fill the area under the line or not
        }];
        // Update the 'chartData' property with the processed data
        _this.charts = {
          labels: (0,underscore__WEBPACK_IMPORTED_MODULE_0__/* .pluck */ .Ey)(logs, 'date'),
          datasets
        };
      } catch (error) {
        // Log any errors during the process
        console.error('Error while retrieving amounts owed chart', error);
      } finally {
        // Set the loading flag to false, regardless of success or failure
        _this.loading = false;
      }
    })();
  }
  static {
    this.ɵfac = function AmountsOwedReportComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AmountsOwedReportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_11__/* .TimesheetService */ .k), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* .ChangeDetectorRef */ .gRc), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__/* .TranslateService */ .c$), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_13__/* .TimesheetFilterService */ .WG), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_14__/* .Store */ .il), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_15__/* .DateRangePickerBuilderService */ .i7), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_16__/* .TimeZoneService */ .F));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineComponent"] */ .VBU({
      type: AmountsOwedReportComponent,
      selectors: [["ga-amounts-owed-report"]],
      viewQuery: function AmountsOwedReportComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵviewQuery"] */ .GBs(_gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_17__/* .GauzyFiltersComponent */ .n, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵqueryRefresh"] */ .mGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵloadQuery"] */ .lsd()) && (ctx.gauzyFiltersComponent = _t.first);
        }
      },
      standalone: false,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
      decls: 21,
      vars: 14,
      consts: [["nbSpinnerStatus", "primary", "nbSpinnerSize", "large", 1, "card-scroll", 3, "nbSpinner"], [1, "row"], [1, "col-auto"], [4, "ngIf"], [1, "col-auto", "ml-auto"], [1, "filters"], [3, "filtersChange", "hasActivityLevelFilter", "hasSourceFilter", "hasLogTypeFilter", "saveFilters", "filters"], [1, "report-body"], [1, "report-container"], [1, "daily-time-report"], [1, "chart"], [3, "data"], [3, "filters"], [3, "start", "end", "format"]],
      template: function AmountsOwedReportComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "nb-card", 0)(1, "nb-card-header")(2, "div", 1)(3, "div", 2)(4, "h4")(5, "ngx-header-title");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(7, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(8, AmountsOwedReportComponent_ng_container_8_Template, 2, 3, "ng-container", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(9, "div", 1)(10, "div", 4)(11, "div", 5)(12, "ngx-gauzy-filters", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(13, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("filtersChange", function AmountsOwedReportComponent_Template_ngx_gauzy_filters_filtersChange_12_listener($event) {
            return ctx.filtersChange($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(14, "nb-card-body", 7)(15, "div", 8)(16, "div", 9)(17, "nb-card")(18, "nb-card-body", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(19, "ngx-line-chart", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(20, "ga-amounts-owed-grid", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("nbSpinner", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(7, 10, "REPORT_PAGE.AMOUNT_OWED"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngIf", (ctx.request == null ? null : ctx.request.startDate) && (ctx.request == null ? null : ctx.request.endDate));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("hasActivityLevelFilter", false)("hasSourceFilter", false)("hasLogTypeFilter", false)("saveFilters", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(13, 12, ctx.datePickerConfig$).isSaveDatePicker)("filters", ctx.filters);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("data", ctx.charts);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("filters", ctx.filters);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_18__/* .NgIf */ .bT, _packages_ui_core_shared_src_lib_components_date_range_title_date_range_title_component__WEBPACK_IMPORTED_MODULE_19__/* .DateRangeTitleComponent */ .D, _packages_ui_core_shared_src_lib_components_header_title_header_title_component__WEBPACK_IMPORTED_MODULE_20__/* .HeaderTitleComponent */ .X, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__/* .NbSpinnerDirective */ .zwc, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__/* .NbCardComponent */ .SrT, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__/* .NbCardBodyComponent */ .KH5, _nebular_theme__WEBPACK_IMPORTED_MODULE_21__/* .NbCardHeaderComponent */ .zJv, _packages_ui_core_shared_src_lib_report_amounts_owed_grid_amounts_owed_grid_component__WEBPACK_IMPORTED_MODULE_22__/* .AmountsOwedGridComponent */ .A, _packages_ui_core_shared_src_lib_report_charts_line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_23__/* .LineChartComponent */ .I, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_17__/* .GauzyFiltersComponent */ .n, _angular_common__WEBPACK_IMPORTED_MODULE_18__/* .AsyncPipe */ .Jj, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__/* .TranslatePipe */ .D9],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nnb-card[_ngcontent-%COMP%], \nnb-card-body[_ngcontent-%COMP%], \n.card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n  border: none;\n}\n\n  .filter-item-list {\n  flex-wrap: nowrap !important;\n}\n  .group-by-wrapper {\n  display: inline-flex;\n  align-items: center;\n  margin-bottom: 10px;\n}\n  .group-by-wrapper .label {\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 11px;\n  letter-spacing: 0em;\n}\n  .group-by-wrapper .select-button.select-button {\n  padding: 5px 12px !important;\n  border-radius: var(--select-rectangle-border-radius);\n  height: 30px;\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 15px;\n  letter-spacing: 0em;\n  min-width: auto;\n  display: flex;\n  align-items: center;\n}\n  .group-by-wrapper .select-button.select-button nb-select.shape-rectangle .select-button {\n  border-radius: var(--border-radius);\n  box-shadow: var(--gauzy-shadow);\n  height: 42px;\n  display: flex;\n  align-items: center;\n  border: none;\n}\n  .group-by-wrapper .select-button.select-button nb-select.appearance-outline.size-medium .select-button {\n  border: none;\n}\n  .group-by-wrapper .select-button.select-button nb-select button span {\n  display: block;\n  overflow-x: hidden;\n  text-overflow: ellipsis;\n}\n  .group-by-wrapper .select-button.select-button > span {\n  margin-right: 25px;\n}\n  .action-select {\n  border-radius: var(--select-rectangle-border-radius);\n  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.15);\n  height: 30px;\n}\n  .action-select button.select-button {\n  background-color: var(--gauzy-card-1) !important;\n  border-radius: var(--select-rectangle-border-radius);\n  padding-top: 2px !important;\n  padding-bottom: 0px !important;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  padding-left: 12px !important;\n}\n  .action-select button.select-button nb-icon {\n  color: var(--text-basic-color) !important;\n}\n  .nb-options {\n  width: auto !important;\n}\n\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n  border-radius: var(--border-radius);\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   nb-card-header[_ngcontent-%COMP%], \n[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   nb-accordion-item-header[_ngcontent-%COMP%] {\n  background-color: unset;\n  margin-bottom: 0;\n  border-bottom: none;\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n}\n[_nghost-%COMP%]   nb-card-header[_ngcontent-%COMP%], \n[_nghost-%COMP%]   nb-accordion-item-header[_ngcontent-%COMP%] {\n  background-color: unset;\n  padding: 20px;\n  border-bottom: none;\n}\n[_nghost-%COMP%]   nb-accordion-item-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n[_nghost-%COMP%]   nb-accordion-item-header[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  margin: 0 2rem;\n}\n[_nghost-%COMP%]   nb-accordion-item-body[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-sidebar-background-2);\n  border-radius: 0 0 var(--border-radius) var(--border-radius);\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n  padding: 1rem;\n  border-radius: 0 0 var(--border-radius) var(--border-radius);\n}\n[_nghost-%COMP%]   nb-card-body.report-body[_ngcontent-%COMP%] {\n  overflow: unset;\n  height: calc(100% - 6rem);\n}\n[dir=ltr]   [_nghost-%COMP%]   nb-card-body.report-body[_ngcontent-%COMP%] {\n  padding: 1rem 0.5rem 1rem 18px;\n}\n[dir=rtl]   [_nghost-%COMP%]   nb-card-body.report-body[_ngcontent-%COMP%] {\n  padding: 1rem 18px 1rem 0.5rem;\n}\n[_nghost-%COMP%]   nb-card-body.report-body[_ngcontent-%COMP%]   .report-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  overflow: auto;\n  height: 100%;\n}\n[dir=ltr]   [_nghost-%COMP%]   nb-card-body.report-body[_ngcontent-%COMP%]   .report-container[_ngcontent-%COMP%] {\n  padding-right: 0.5rem;\n}\n[dir=rtl]   [_nghost-%COMP%]   nb-card-body.report-body[_ngcontent-%COMP%]   .report-container[_ngcontent-%COMP%] {\n  padding-left: 0.5rem;\n}\n[_nghost-%COMP%]   .weekly-logs[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n[_nghost-%COMP%]   .not-found[_ngcontent-%COMP%] {\n  height: 100%;\n}\n[_nghost-%COMP%]   .budget-container[_ngcontent-%COMP%] {\n  padding-bottom: 6px !important;\n}\n[_nghost-%COMP%]     nb-select.shape-rectangle .select-button {\n  border-radius: calc(var(--button-rectangle-border-radius) / 1.625);\n  box-shadow: var(--gauzy-shadow);\n  height: 2rem;\n  display: flex;\n  align-items: center;\n  border: none;\n}\n[_nghost-%COMP%]     nb-select.appearance-outline.size-medium .select-button {\n  border: none;\n}\n[_nghost-%COMP%]     nb-select button span {\n  display: block;\n  overflow-x: hidden;\n  text-overflow: ellipsis;\n}\n\n[_nghost-%COMP%]   nb-accordion[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  row-gap: 1rem;\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   nb-accordion[_ngcontent-%COMP%]     .item-body {\n  border-radius: 0 0 var(--border-radius) var(--border-radius);\n}\n\n.table[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  margin-bottom: 0;\n}\n\n.daily-time-report[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%], \n.daily-time-report[_ngcontent-%COMP%]   nb-accordion-item-body[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n}\n\n.table-row[_ngcontent-%COMP%] {\n  border-radius: var(--border-radius);\n  height: 86px;\n  background-color: var(--gauzy-card-1);\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  margin-bottom: 10px;\n  padding-top: 10px;\n  padding-bottom: 20px;\n}\n\n.table-inner-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.columns-header[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n  border-radius: 8px;\n  margin-bottom: 10px;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 15px;\n  letter-spacing: 0em;\n}\n\n.responsive-table-header[_ngcontent-%COMP%] {\n  display: none;\n}\n\n[dir=rtl]   [_nghost-%COMP%]   .responsive-table-row[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n[dir=ltr]   [_nghost-%COMP%]   .responsive-table-row[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n\n.avatar-wrapper-outer[_ngcontent-%COMP%] {\n  max-width: 95%;\n  padding-top: 5px;\n  display: inline-flex;\n}\n.avatar-wrapper-outer[_ngcontent-%COMP%]   .inner-wrapper[_ngcontent-%COMP%] {\n  display: inline-flex !important;\n}\n\n@media only screen and (max-width: 991px) {\n  [dir=ltr]   [_nghost-%COMP%]     .group-by-wrapper {\n    margin-left: 10px;\n  }\n  [dir=rtl]   [_nghost-%COMP%]     .group-by-wrapper {\n    margin-right: 10px;\n  }\n  .columns-header[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .card[_ngcontent-%COMP%]   nb-accordion-item-body[_ngcontent-%COMP%], \n   .card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n    padding-left: 0;\n    padding-right: 0;\n  }\n  .table-row[_ngcontent-%COMP%] {\n    border-radius: 0;\n    margin-bottom: 15px;\n  }\n  .responsive-table-row[_ngcontent-%COMP%] {\n    width: 100% !important;\n    min-width: auto !important;\n    max-width: unset !important;\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    margin-bottom: 10px;\n    padding: 10px;\n    border-radius: var(--border-radius);\n    border-left: 1px solid var(--border-basic-color-4);\n  }\n  .responsive-table-header[_ngcontent-%COMP%] {\n    display: block;\n    font-size: 16px;\n    font-style: normal;\n    font-weight: 600;\n    line-height: 15px;\n    letter-spacing: 0em;\n  }\n  .responsive-table-content[_ngcontent-%COMP%], \n   .responsive-table-header[_ngcontent-%COMP%] {\n    width: 50%;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n  }\n  .table-row[_ngcontent-%COMP%] {\n    height: auto;\n  }\n  .table-inner-wrapper[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n@media only screen and (max-width: 767px) {\n  [_nghost-%COMP%]     .filters-range-wrapper {\n    flex-wrap: wrap !important;\n  }\n  [_nghost-%COMP%]     .filters .main-wrapper {\n    padding-left: 0;\n    padding-right: 0;\n  }\n    .filter-item-list {\n    flex-wrap: wrap !important;\n  }\n}\n.chart[_ngcontent-%COMP%] {\n  border-radius: var(--border-radius) !important;\n}\n\n[_nghost-%COMP%]   nb-badge[_ngcontent-%COMP%] {\n  position: relative;\n  font-size: 14px;\n  font-weight: 600;\n  padding: 2px 4px;\n  border-radius: calc(var(--border-radius) / 2);\n}"]
    });
  }
};
AmountsOwedReportComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_24__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__/* .UntilDestroy */ .d)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_24__/* .__metadata */ .Sn)("design:paramtypes", [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_11__/* .TimesheetService */ .k, _angular_core__WEBPACK_IMPORTED_MODULE_1__/* .ChangeDetectorRef */ .gRc, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__/* .TranslateService */ .c$, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_13__/* .TimesheetFilterService */ .WG, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_14__/* .Store */ .il, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_15__/* .DateRangePickerBuilderService */ .i7, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_16__/* .TimeZoneService */ .F])], AmountsOwedReportComponent);


/***/ }),

/***/ 59238:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   j: () => (/* binding */ NoDataMessageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14572);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56383);
/* harmony import */ var _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(50631);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19223);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);






let NoDataMessageModule = /*#__PURE__*/(() => {
  class NoDataMessageModule {
    static {
      this.ɵfac = function NoDataMessageModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || NoDataMessageModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .$C({
        type: NoDataMessageModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .CommonModule */ .MD, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbCardModule */ .lVF, _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_3__/* .NbEvaIconsModule */ .N, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbIconModule */ .clu, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__/* .TranslateModule */ .h.forChild()]
      });
    }
  }
  return NoDataMessageModule;
})();

/***/ }),

/***/ 60559:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   x: () => (/* binding */ BookmarkQueryParamsResolver)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(90999);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(55801);
/* harmony import */ var _services_store_store_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71924);
/* harmony import */ var _services_selector_builder_selector_builder_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(55780);
/* harmony import */ var _services_notification_error_handling_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(54263);





/**
 * The `BookmarkQueryParamsResolver` is responsible for constructing a set of query parameters
 * based on selected entities such as organization, employee, project, and team.
 * It retrieves the necessary state using injected services (`Store` and `SelectorBuilderService`)
 * and dynamically builds the query parameters if the respective selectors are active.
 *
 * @returns {Observable<Record<string, string>>} - An observable that emits a set of query parameters
 * with entity IDs mapped to their respective keys (e.g., `organizationId`, `employeeId`, etc.).
 * If there is an error or no matching selectors, an empty observable is returned.
 */
const BookmarkQueryParamsResolver = route => {
  // Get injected services
  const _store = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__/* .inject */ .WQX)(_services_store_store_service__WEBPACK_IMPORTED_MODULE_1__/* .Store */ .il);
  const _errorHandlingService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__/* .inject */ .WQX)(_services_notification_error_handling_service__WEBPACK_IMPORTED_MODULE_2__/* .ErrorHandlingService */ .X);
  try {
    // Get selectors visibility and selected entities
    const selectors = Object.assign({}, _services_selector_builder_selector_builder_service__WEBPACK_IMPORTED_MODULE_3__/* .DEFAULT_SELECTOR_VISIBILITY */ .z, route.data?.selectors);
    const {
      selectedOrganization,
      selectedEmployee,
      selectedProject,
      selectedTeam
    } = _store;
    // Map selectors to entity IDs
    const paramMappings = {
      organizationId: selectedOrganization?.id,
      employeeId: selectedEmployee?.id,
      projectId: selectedProject?.id,
      teamId: selectedTeam?.id
    };
    // Create queryParams by filtering out undefined values and matching selectors
    const queryParams = Object.entries(paramMappings).reduce((params, [key, value]) => {
      if (selectors[key.replace('Id', '')] && value) {
        params[key] = value;
      }
      return params;
    }, {});
    // Return null if organization ID is missing
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(queryParams); // Allow the route to resolve normally
  } catch (error) {
    // Handle any synchronous errors and redirect to "new integration" page
    console.log(`Error resolving entity query params: ${error}`);
    _errorHandlingService.handleError(error);
    return rxjs__WEBPACK_IMPORTED_MODULE_5__/* .EMPTY */ .w; // Return an empty observable
  }
};

/***/ }),

/***/ 61801:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Q: () => (/* binding */ GauzyFiltersModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14572);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10936);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56383);
/* harmony import */ var _angular_slider_ngx_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(24224);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19223);
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(10012);
/* harmony import */ var _timezone_filter_timezone_filter_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(35836);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);









let GauzyFiltersModule = /*#__PURE__*/(() => {
  class GauzyFiltersModule {
    static {
      this.ɵfac = function GauzyFiltersModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || GauzyFiltersModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .$C({
        type: GauzyFiltersModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .CommonModule */ .MD, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .FormsModule */ .YN, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbButtonModule */ .P5N, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbIconModule */ .clu, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbPopoverModule */ .Ofb, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbSelectModule */ .VcP, _angular_slider_ngx_slider__WEBPACK_IMPORTED_MODULE_4__/* .NgxSliderModule */ .Ti, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__/* .TranslateModule */ .h.forChild(), _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__/* .PipesModule */ .Y, _timezone_filter_timezone_filter_module__WEBPACK_IMPORTED_MODULE_7__/* .TimezoneFilterModule */ .G]
      });
    }
  }
  return GauzyFiltersModule;
})();

/***/ }),

/***/ 87793:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ ReportGroupFilterEnum)
/* harmony export */ });
var ReportGroupFilterEnum = /*#__PURE__*/function (ReportGroupFilterEnum) {
  ReportGroupFilterEnum["date"] = "date";
  ReportGroupFilterEnum["employee"] = "employee";
  ReportGroupFilterEnum["project"] = "project";
  ReportGroupFilterEnum["client"] = "client";
  return ReportGroupFilterEnum;
}(ReportGroupFilterEnum || {});

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


/***/ })

}]);