"use strict";
(self["webpackChunkgauzy"] = self["webpackChunkgauzy"] || []).push([[6375],{

/***/ 2760:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScreenshotModule: () => (/* binding */ ScreenshotModule)
/* harmony export */ });
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56383);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19223);
/* harmony import */ var ngx_moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(79415);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19015);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(81963);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(61801);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(59238);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(55327);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(38834);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(65029);
/* harmony import */ var _screenshot_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30065);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26860);








// Nebular Modules
const NB_MODULES = [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbButtonModule */ .P5N, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbCheckboxModule */ .Ad8, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbDialogModule */ .nZv.forChild(), _nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbIconModule */ .clu, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbSpinnerModule */ .gYs];
let ScreenshotModule = /*#__PURE__*/(() => {
  class ScreenshotModule {
    static {
      this.ɵfac = function ScreenshotModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || ScreenshotModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineNgModule"] */ .$C({
        type: ScreenshotModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [NB_MODULES, ngx_moment__WEBPACK_IMPORTED_MODULE_3__/* .MomentModule */ .Js, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__/* .TranslateModule */ .h.forChild(), _screenshot_routing_module__WEBPACK_IMPORTED_MODULE_0__/* .ScreenshotRoutingModule */ .P, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_5__/* .DailyStatisticsModule */ .R, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_6__/* .GalleryModule */ .l, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_7__/* .GauzyFiltersModule */ .Q, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_8__/* .NoDataMessageModule */ .j, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_9__/* .ScreenshotsItemModule */ .x, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_10__/* .SharedModule */ .G, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_11__/* .ViewTimeLogModalModule */ .k]
      });
    }
  }
  return ScreenshotModule;
})();

/***/ }),

/***/ 5114:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ ScreenshotComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(73014);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(64411);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9620);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(39127);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(72781);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(73246);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(29421);
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(78543);
/* harmony import */ var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(24237);
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86014);
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73247);
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(23423);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(56383);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(19223);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(17785);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(26024);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(77020);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(93697);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(71924);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(28822);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(46915);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(55101);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(60166);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(10569);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(6195);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26860);
/* harmony import */ var _packages_ui_core_shared_src_lib_report_daily_statistics_daily_statistics_daily_statistics_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(64926);
/* harmony import */ var _packages_ui_core_shared_src_lib_smart_data_layout_no_data_message_no_data_message_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(95959);
/* harmony import */ var _packages_ui_core_shared_src_lib_timesheet_screenshots_screenshots_item_screenshots_item_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(93328);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(14572);
/* harmony import */ var _packages_ui_core_shared_src_lib_pipes_time_format_pipe__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(47610);




























const _c0 = a0 => ({
  "px-3": a0
});
function ScreenshotComponent_ng_template_7_div_0_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(0, "div")(1, "ngx-screenshots-item", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .bIt("delete", function ScreenshotComponent_ng_template_7_div_0_div_8_Template_ngx_screenshots_item_delete_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .eBV(_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .XpG(3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .Njj(ctx_r2.deleteSlot());
    })("toggle", function ScreenshotComponent_ng_template_7_div_0_div_8_Template_ngx_screenshots_item_toggle_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .eBV(_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .XpG(3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .Njj(ctx_r2.toggleSelect($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const timeSlot_r4 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .XpG(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("timeFormat", ctx_r2.filters == null ? null : ctx_r2.filters.timeFormat)("timezone", ctx_r2.filters == null ? null : ctx_r2.filters.timeZone)("employees", timeSlot_r4 == null ? null : timeSlot_r4.employees)("timeSlot", timeSlot_r4)("selectionMode", ctx_r2.selectedIdsCount > 0)("isSelected", ctx_r2.selectedIds[timeSlot_r4 == null ? null : timeSlot_r4.id]);
  }
}
function ScreenshotComponent_ng_template_7_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(0, "div", 11)(1, "div", 12)(2, "div", 13)(3, "h6", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(5, "timeFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(6, "timeFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(7, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .DNE(8, ScreenshotComponent_ng_template_7_div_0_div_8_Template, 2, 6, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s()()();
  }
  if (rf & 2) {
    const hourSlot_r5 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate2"] */ .Lme(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind2"] */ .i5U(5, 3, hourSlot_r5.startTime, ctx_r2.filters == null ? null : ctx_r2.filters.timeFormat), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind2"] */ .i5U(6, 6, hourSlot_r5.endTime, ctx_r2.filters == null ? null : ctx_r2.filters.timeFormat), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("ngForOf", hourSlot_r5.timeSlots);
  }
}
function ScreenshotComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .DNE(0, ScreenshotComponent_ng_template_7_div_0_Template, 9, 9, "div", 10);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx_r2.timeSlots);
  }
}
function ScreenshotComponent_ng_template_8_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ .nrm(1, "ngx-no-data-message", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("message", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(2, 1, "ACTIVITY.NO_RECORD_FOUND"));
  }
}
function ScreenshotComponent_ng_template_8_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ .nrm(0, "ngx-no-data-message", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(1, "translate");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("message", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(1, 1, "ACTIVITY.NO_SCREENSHOTS"));
  }
}
function ScreenshotComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .DNE(0, ScreenshotComponent_ng_template_8_ng_container_0_Template, 3, 3, "ng-container", 18)(1, ScreenshotComponent_ng_template_8_ng_template_1_Template, 2, 3, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplateRefExtractor"] */ .C5r);
  }
  if (rf & 2) {
    const noFoundScreenshot_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵreference"] */ .sdS(2);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("ngIf", !ctx_r2.request.employeeIds)("ngIfElse", noFoundScreenshot_r6);
  }
}
function ScreenshotComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(0, "div", 20)(1, "div", 21)(2, "div", 22)(3, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(5, "div", 24)(6, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .bIt("click", function ScreenshotComponent_div_10_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .eBV(_r7);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .Njj(ctx_r2.toggleAllSelect());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(8, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .bIt("click", function ScreenshotComponent_div_10_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .eBV(_r7);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .Njj(ctx_r2.deleteSlots());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ .nrm(9, "nb-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .SpI("", ctx_r2.selectedIdsCount, " Screen selected");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", ctx_r2.allSelected ? "Unselect All" : "Select All", " ");
  }
}
let ScreenshotComponent = class ScreenshotComponent extends _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_3__/* .BaseSelectorFilterComponent */ .U {
  constructor(translateService, _router, _timesheetService, _timesheetFilterService, _nbDialogService, _galleryService, store, dateRangePickerBuilderService, timeZoneService) {
    super(store, translateService, dateRangePickerBuilderService, timeZoneService);
    this.translateService = translateService;
    this._router = _router;
    this._timesheetService = _timesheetService;
    this._timesheetFilterService = _timesheetFilterService;
    this._nbDialogService = _nbDialogService;
    this._galleryService = _galleryService;
    this.store = store;
    this.dateRangePickerBuilderService = dateRangePickerBuilderService;
    this.timeZoneService = timeZoneService;
    this.payloads$ = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_4__/* .BehaviorSubject */ .t(null);
    this.screenshots$ = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_5__/* .Subject */ .B();
    this.filters = this.request;
    this.selectedIds = {};
    this.screenshotsUrls = [];
    this.selectedIdsCount = 0;
    this.allSelected = false;
    this.originalTimeSlots = [];
    this.datePickerConfig$ = this.dateRangePickerBuilderService.datePickerConfig$;
  }
  ngOnInit() {
    this.screenshots$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .filter */ .p)(() => !!this.organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .M)(() => this.getTimeSlotsScreenshots()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__/* .untilDestroyed */ .s)(this)).subscribe();
    this.subject$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .filter */ .p)(() => !!this.organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .M)(() => this.prepareRequest()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__/* .untilDestroyed */ .s)(this)).subscribe();
    this.payloads$.pipe((0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_9__/* .distinctUntilChange */ .nI)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .filter */ .p)(payloads => !!payloads), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .M)(() => this.screenshots$.next(true)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__/* .untilDestroyed */ .s)(this)).subscribe();
  }
  ngAfterViewInit() {
    this._router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .filter */ .p)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_10__/* .NavigationStart */ .Z), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .M)(() => this._galleryService.clearGallery()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__/* .untilDestroyed */ .s)(this)).subscribe();
  }
  /**
   * Handles changes in time log filters.
   * If the saveFilters flag is enabled, saves the filters using the timesheetFilterService.
   * Updates the component's filters and notifies subscribers about the filter change.
   *
   * @param filters The new set of filters for time logs.
   */
  filtersChange(filters) {
    // Check if the saveFilters flag is enabled
    if (this.gauzyFiltersComponent.saveFilters) {
      // Save filters using the timesheetFilterService if saveFilters is enabled
      this._timesheetFilterService.filter = filters;
    }
    // Update the component's filters by creating a shallow copy of the filters object
    this.filters = {
      ...filters
    };
    // Notify subscribers about the filter change
    this.subject$.next(true);
  }
  /**
   * Prepare Unique Request Always
   *
   * @returns
   */
  prepareRequest() {
    if ((0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_9__/* .isEmpty */ .Im)(this.request) || (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_9__/* .isEmpty */ .Im)(this.filters)) {
      return;
    }
    // Extract specific properties from filters
    const appliedFilter = (0,underscore__WEBPACK_IMPORTED_MODULE_0__/* .pick */ .Up)(this.filters, 'source', 'activityLevel', 'logType');
    // Construct request object
    const request = {
      ...appliedFilter,
      ...this.getFilterRequest(this.request),
      relations: [
      // Include additional relations based on permissions
      ...(this.store.hasPermission(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_11__/* .PermissionsEnum */ .U.CHANGE_SELECTED_EMPLOYEE) ? ['employee.user'] : []), 'screenshots', 'timeLogs']
    };
    this.payloads$.next(request);
  }
  /**
   * Retrieves daily time slot data and screenshots for the current organization.
   */
  getTimeSlotsScreenshots() {
    var _this = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A)(function* () {
      // Check if organization is available and request payload is not empty
      if (!_this.organization || (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_9__/* .isEmpty */ .Im)(_this.request)) {
        return;
      }
      // Set loading state to true
      _this.loading = true;
      try {
        // Clear existing screenshots URLs
        _this.screenshotsUrls = [];
        _this.timeSlots = [];
        _this.originalTimeSlots = [];
        // Fetch time slots data using provided payloads
        const payloads = _this.payloads$.getValue();
        const timeSlots = yield _this._timesheetService.getTimeSlots(payloads);
        // Store original time slots and group them
        _this.originalTimeSlots = timeSlots;
        _this.timeSlots = _this.groupTimeSlots(timeSlots);
      } catch (error) {
        // Handle any errors that occur during data retrieval
        console.log('Error while retrieving screenshots for employee', error);
      } finally {
        // Set loading state back to false
        _this.loading = false;
      }
    })();
  }
  /**
   * Toggles the selection state of a time slot identified by its ID.
   * If a slotId is provided, toggles the selection state of the corresponding slot.
   * Otherwise, updates all selections based on the current state of selectedIds.
   *
   * @param slotId The ID of the time slot to toggle selection for.
   */
  toggleSelect(slotId) {
    if (slotId) {
      // Toggle the selection state of the time slot identified by slotId
      this.selectedIds[slotId] = !this.selectedIds[slotId];
    }
    // Update selections based on the current state of selectedIds
    this.updateSelections();
  }
  /**
   * Toggles the selection state of all time slots.
   * Iterates through each time slot in selectedIds and toggles its selection state.
   * After toggling all selections, updates the selections.
   */
  toggleAllSelect() {
    for (const key in this.selectedIds) {
      if (this.selectedIds.hasOwnProperty(key)) {
        // Toggle the selection state of each time slot
        this.selectedIds[key] = !this.allSelected;
      }
    }
    // Update selections after toggling all time slots
    this.updateSelections();
  }
  /**
   * Updates the selection state of time slots based on the selectedIds object.
   * Counts the number of selected time slots and updates the allSelected flag accordingly.
   */
  updateSelections() {
    // Count the number of selected time slots
    this.selectedIdsCount = Object.values(this.selectedIds).filter(val => val === true).length;
    // Update the allSelected flag based on the number of selected time slots
    this.allSelected = this.selectedIdsCount === Object.values(this.selectedIds).length;
  }
  /**
   * Initiates the deletion of a time slot.
   * Notifies subscribers about the deletion request by emitting a value through the screenshots$ subject.
   */
  deleteSlot() {
    // Notify subscribers about the deletion request
    this.screenshots$.next(true);
  }
  /**
   * Initiates the deletion of multiple time slots.
   * Opens a dialog for confirmation, then proceeds with the deletion if confirmed.
   * After deletion, updates the screenshot gallery and notifies subscribers about the deletion.
   */
  deleteSlots() {
    // Open a confirmation dialog for deleting time slots
    const dialog$ = this._nbDialogService.open(_gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_13__/* .DeleteConfirmationComponent */ .u);
    dialog$.onClose.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .filter */ .p)(type => type === 'ok'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__/* .switchMap */ .n)(() => {
      // Extract IDs of selected time slots
      const ids = Object.keys(this.selectedIds).filter(key => this.selectedIds[key]);
      // Construct request object with organization ID
      const {
        id: organizationId,
        tenantId
      } = this.organization;
      // Call the deleteTimeSlots API with forceDelete set to true
      const api$ = this._timesheetService.deleteTimeSlots({
        ids,
        organizationId,
        tenantId
      });
      // Convert the promise to an observable and handle deletion
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_15__/* .from */ .H)(api$).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .M)(() => this._deleteScreenshotGallery(ids)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .M)(() => this.screenshots$.next(true)));
    }), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__/* .untilDestroyed */ .s)(this)).subscribe();
  }
  /**
   * Groups time slots by hour and prepares data for display.
   * Also generates screenshot URLs and calculates employee work on the same time slots.
   *
   * @param timeSlots An array of time slots to be grouped.
   * @returns An array of grouped time slots for display.
   */
  groupTimeSlots(timeSlots) {
    this.selectedIds = {};
    if (this.checkAllCheckbox) {
      this.checkAllCheckbox.checked = false;
      this.checkAllCheckbox.indeterminate = false;
    }
    const groupTimeSlots = (0,underscore__WEBPACK_IMPORTED_MODULE_0__/* .chain */ .cy)(timeSlots).map(timeSlot => {
      this.selectedIds[timeSlot.id] = false;
      // Concatenate screenshot URLs
      this.screenshotsUrls = this.screenshotsUrls.concat(timeSlot.screenshots.map(screenshot => ({
        thumbUrl: screenshot.thumbUrl,
        fullUrl: screenshot.fullUrl
      })));
      return timeSlot;
    }).groupBy(timeSlot => (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_9__/* .toTimezone */ .xT)(timeSlot?.startedAt, this.filters?.timeZone).format('HH')).mapObject((hourTimeSlots, hour) => {
      const groupByMinutes = (0,underscore__WEBPACK_IMPORTED_MODULE_0__/* .chain */ .cy)(hourTimeSlots).groupBy(timeSlot => (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_9__/* .toTimezone */ .xT)(timeSlot.startedAt, this.filters?.timeZone).format('mm')).value();
      /**
       * First sort by screenshots then after index by of hoursTimeSlots
       * So, we can display screenshots in UI
       */
      const byMinutes = (0,underscore__WEBPACK_IMPORTED_MODULE_0__/* .indexBy */ .wQ)((0,underscore__WEBPACK_IMPORTED_MODULE_0__/* .sortBy */ .Ul)(hourTimeSlots, 'screenshots'), timeSlot => (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_9__/* .toTimezone */ .xT)(timeSlot?.startedAt, this.filters?.timeZone).format('mm'));
      timeSlots = ['00', '10', '20', '30', '40', '50'].map(key => {
        /**
         * Calculate employees work on same time slots by minutes
         */
        if (key in byMinutes) {
          byMinutes[key]['employees'] = (0,underscore__WEBPACK_IMPORTED_MODULE_0__/* .chain */ .cy)(groupByMinutes[key]).groupBy(timeSlot => timeSlot.employeeId).values().flatten().map(timeSlot => timeSlot.employee).value();
        }
        return byMinutes[key] || null;
      });
      const time = moment_timezone__WEBPACK_IMPORTED_MODULE_1__().set('hour', parseInt(hour, 0)).set('minute', 0);
      const startTime = time.format('HH:mm');
      const endTime = time.add(1, 'hour').format('HH:mm');
      return {
        startTime,
        endTime,
        timeSlots
      };
    }).values().sortBy(({
      startTime
    }) => moment_timezone__WEBPACK_IMPORTED_MODULE_1__(startTime, 'HH:mm').toDate().getTime()).value();
    this.updateSelections();
    return groupTimeSlots;
  }
  /**
   * Deletes screenshots associated with the specified time slots from the gallery.
   *
   * @param timeSlotIds An array of time slot IDs whose screenshots should be removed from the gallery.
   */
  _deleteScreenshotGallery(timeSlotIds) {
    if ((0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_9__/* .isNotEmpty */ .hj)(this.originalTimeSlots)) {
      // Extract all screenshots from time slots that match the provided time slot IDs
      const screenshotsToRemove = this.originalTimeSlots.filter(timeSlot => timeSlotIds.includes(timeSlot.id)).flatMap(timeSlot => timeSlot.screenshots.map(screenshot => ({
        thumbUrl: screenshot.thumbUrl,
        fullUrl: screenshot.fullUrl,
        ...screenshot // Include other properties from the screenshot
      })));
      // Remove the extracted gallery items from the gallery
      this._galleryService.removeGalleryItems(screenshotsToRemove);
    }
  }
  ngOnDestroy() {
    this._galleryService.clearGallery();
  }
  static {
    this.ɵfac = function ScreenshotComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ScreenshotComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__/* .TranslateService */ .c$), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_router__WEBPACK_IMPORTED_MODULE_10__/* .Router */ .Ix), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_17__/* .TimesheetService */ .k), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_18__/* .TimesheetFilterService */ .WG), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .rXU(_nebular_theme__WEBPACK_IMPORTED_MODULE_19__/* .NbDialogService */ .S0W), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_20__/* .GalleryService */ .A), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_21__/* .Store */ .il), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_22__/* .DateRangePickerBuilderService */ .i7), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_23__/* .TimeZoneService */ .F));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineComponent"] */ .VBU({
      type: ScreenshotComponent,
      selectors: [["ngx-screenshots"]],
      viewQuery: function ScreenshotComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵviewQuery"] */ .GBs(_gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_24__/* .GauzyFiltersComponent */ .n, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵqueryRefresh"] */ .mGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵloadQuery"] */ .lsd()) && (ctx.gauzyFiltersComponent = _t.first);
        }
      },
      standalone: false,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
      decls: 11,
      vars: 12,
      consts: [["notFound", ""], ["noFoundScreenshot", ""], [1, "custom-card"], [1, "filters", "mt-1", "mb-3"], [3, "filtersChange", "isTimeFormat", "saveFilters"], [1, "mt-3", 3, "filters"], [1, "custom-card-body"], ["nbSpinnerSize", "giant", "nbSpinnerStatus", "primary", 1, "h-100", 3, "ngClass", "nbSpinner"], [3, "ngIf", "ngIfElse"], ["class", "selected-items-action", 4, "ngIf"], ["class", "row hour-slot-group", 4, "ngFor", "ngForOf"], [1, "row", "hour-slot-group"], [1, "col", "p-0"], [1, "mb-4"], [1, "hour-label"], [1, "row", "grid-container"], [4, "ngFor", "ngForOf"], [3, "delete", "toggle", "timeFormat", "timezone", "employees", "timeSlot", "selectionMode", "isSelected"], [4, "ngIf", "ngIfElse"], [3, "message"], [1, "selected-items-action"], [1, "card", "p-4", "w-100"], [1, "row", "align-items-center"], [1, "col"], [1, "col-auto"], ["status", "info", "nbButton", "", "size", "small", 1, "ml-auto", "mr-2", "select-hidden", 3, "click"], ["status", "danger", "nbButton", "", "size", "small", 1, "ml-auto", "select-hidden", 3, "click"], ["icon", "trash-2-outline"]],
      template: function ScreenshotComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵgetCurrentView"] */ .RV6();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(0, "div", 2)(1, "div", 3)(2, "ngx-gauzy-filters", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(3, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .bIt("filtersChange", function ScreenshotComponent_Template_ngx_gauzy_filters_filtersChange_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .eBV(_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .Njj(ctx.filtersChange($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ .nrm(4, "ga-daily-statistics", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(5, "div", 6)(6, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .DNE(7, ScreenshotComponent_ng_template_7_Template, 1, 1, "ng-template", 8)(8, ScreenshotComponent_ng_template_8_Template, 3, 2, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplateRefExtractor"] */ .C5r);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .DNE(10, ScreenshotComponent_div_10_Template, 10, 2, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s()();
        }
        if (rf & 2) {
          const notFound_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵreference"] */ .sdS(9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("isTimeFormat", true)("saveFilters", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(3, 8, ctx.datePickerConfig$).isSaveDatePicker);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("filters", ctx.filters);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpureFunction1"] */ .eq3(10, _c0, (ctx.timeSlots == null ? null : ctx.timeSlots.length) > 0))("nbSpinner", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("ngIf", (ctx.timeSlots == null ? null : ctx.timeSlots.length) > 0)("ngIfElse", notFound_r8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.selectedIdsCount > 0);
        }
      },
      dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_19__/* .NbButtonComponent */ .YP2, _nebular_theme__WEBPACK_IMPORTED_MODULE_19__/* .NbIconComponent */ .tHu, _nebular_theme__WEBPACK_IMPORTED_MODULE_19__/* .NbSpinnerDirective */ .zwc, _packages_ui_core_shared_src_lib_report_daily_statistics_daily_statistics_daily_statistics_component__WEBPACK_IMPORTED_MODULE_25__/* .DailyStatisticsComponent */ .w, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_24__/* .GauzyFiltersComponent */ .n, _packages_ui_core_shared_src_lib_smart_data_layout_no_data_message_no_data_message_component__WEBPACK_IMPORTED_MODULE_26__/* .NoDataMessageComponent */ ._, _packages_ui_core_shared_src_lib_timesheet_screenshots_screenshots_item_screenshots_item_component__WEBPACK_IMPORTED_MODULE_27__/* .ScreenshotsItemComponent */ .A, _angular_common__WEBPACK_IMPORTED_MODULE_28__/* .NgClass */ .YU, _angular_common__WEBPACK_IMPORTED_MODULE_28__/* .NgForOf */ .Sq, _angular_common__WEBPACK_IMPORTED_MODULE_28__/* .NgIf */ .bT, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__/* .TranslatePipe */ .D9, _angular_common__WEBPACK_IMPORTED_MODULE_28__/* .AsyncPipe */ .Jj, _packages_ui_core_shared_src_lib_pipes_time_format_pipe__WEBPACK_IMPORTED_MODULE_29__/* .TimeFormatPipe */ .z],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nnb-card[_ngcontent-%COMP%], \nnb-card-body[_ngcontent-%COMP%], \n.card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n  border: none;\n}\n\n  .filter-item-list {\n  flex-wrap: nowrap !important;\n}\n  .group-by-wrapper {\n  display: inline-flex;\n  align-items: center;\n  margin-bottom: 10px;\n}\n  .group-by-wrapper .label {\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 11px;\n  letter-spacing: 0em;\n}\n  .group-by-wrapper .select-button.select-button {\n  padding: 5px 12px !important;\n  border-radius: var(--select-rectangle-border-radius);\n  height: 30px;\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 15px;\n  letter-spacing: 0em;\n  min-width: auto;\n  display: flex;\n  align-items: center;\n}\n  .group-by-wrapper .select-button.select-button nb-select.shape-rectangle .select-button {\n  border-radius: var(--border-radius);\n  box-shadow: var(--gauzy-shadow);\n  height: 42px;\n  display: flex;\n  align-items: center;\n  border: none;\n}\n  .group-by-wrapper .select-button.select-button nb-select.appearance-outline.size-medium .select-button {\n  border: none;\n}\n  .group-by-wrapper .select-button.select-button nb-select button span {\n  display: block;\n  overflow-x: hidden;\n  text-overflow: ellipsis;\n}\n  .group-by-wrapper .select-button.select-button > span {\n  margin-right: 25px;\n}\n  .action-select {\n  border-radius: var(--select-rectangle-border-radius);\n  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.15);\n  height: 30px;\n}\n  .action-select button.select-button {\n  background-color: var(--gauzy-card-1) !important;\n  border-radius: var(--select-rectangle-border-radius);\n  padding-top: 2px !important;\n  padding-bottom: 0px !important;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  padding-left: 12px !important;\n}\n  .action-select button.select-button nb-icon {\n  color: var(--text-basic-color) !important;\n}\n  .nb-options {\n  width: auto !important;\n}\n\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n  border-radius: var(--border-radius);\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   nb-card-header[_ngcontent-%COMP%], \n[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   nb-accordion-item-header[_ngcontent-%COMP%] {\n  background-color: unset;\n  margin-bottom: 0;\n  border-bottom: none;\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n}\n[_nghost-%COMP%]   nb-card-header[_ngcontent-%COMP%], \n[_nghost-%COMP%]   nb-accordion-item-header[_ngcontent-%COMP%] {\n  background-color: unset;\n  padding: 20px;\n  border-bottom: none;\n}\n[_nghost-%COMP%]   nb-accordion-item-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n[_nghost-%COMP%]   nb-accordion-item-header[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  margin: 0 2rem;\n}\n[_nghost-%COMP%]   nb-accordion-item-body[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-sidebar-background-2);\n  border-radius: 0 0 var(--border-radius) var(--border-radius);\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n  padding: 1rem;\n  border-radius: 0 0 var(--border-radius) var(--border-radius);\n}\n[_nghost-%COMP%]   nb-card-body.report-body[_ngcontent-%COMP%] {\n  overflow: unset;\n  height: calc(100% - 6rem);\n}\n[dir=ltr]   [_nghost-%COMP%]   nb-card-body.report-body[_ngcontent-%COMP%] {\n  padding: 1rem 0.5rem 1rem 18px;\n}\n[dir=rtl]   [_nghost-%COMP%]   nb-card-body.report-body[_ngcontent-%COMP%] {\n  padding: 1rem 18px 1rem 0.5rem;\n}\n[_nghost-%COMP%]   nb-card-body.report-body[_ngcontent-%COMP%]   .report-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  overflow: auto;\n  height: 100%;\n}\n[dir=ltr]   [_nghost-%COMP%]   nb-card-body.report-body[_ngcontent-%COMP%]   .report-container[_ngcontent-%COMP%] {\n  padding-right: 0.5rem;\n}\n[dir=rtl]   [_nghost-%COMP%]   nb-card-body.report-body[_ngcontent-%COMP%]   .report-container[_ngcontent-%COMP%] {\n  padding-left: 0.5rem;\n}\n[_nghost-%COMP%]   .weekly-logs[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n[_nghost-%COMP%]   .not-found[_ngcontent-%COMP%] {\n  height: 100%;\n}\n[_nghost-%COMP%]   .budget-container[_ngcontent-%COMP%] {\n  padding-bottom: 6px !important;\n}\n[_nghost-%COMP%]     nb-select.shape-rectangle .select-button {\n  border-radius: calc(var(--button-rectangle-border-radius) / 1.625);\n  box-shadow: var(--gauzy-shadow);\n  height: 2rem;\n  display: flex;\n  align-items: center;\n  border: none;\n}\n[_nghost-%COMP%]     nb-select.appearance-outline.size-medium .select-button {\n  border: none;\n}\n[_nghost-%COMP%]     nb-select button span {\n  display: block;\n  overflow-x: hidden;\n  text-overflow: ellipsis;\n}\n\n[_nghost-%COMP%]   nb-accordion[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  row-gap: 1rem;\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   nb-accordion[_ngcontent-%COMP%]     .item-body {\n  border-radius: 0 0 var(--border-radius) var(--border-radius);\n}\n\n.table[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  margin-bottom: 0;\n}\n\n.daily-time-report[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%], \n.daily-time-report[_ngcontent-%COMP%]   nb-accordion-item-body[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n}\n\n.table-row[_ngcontent-%COMP%] {\n  border-radius: var(--border-radius);\n  height: 86px;\n  background-color: var(--gauzy-card-1);\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  margin-bottom: 10px;\n  padding-top: 10px;\n  padding-bottom: 20px;\n}\n\n.table-inner-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.columns-header[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n  border-radius: 8px;\n  margin-bottom: 10px;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 15px;\n  letter-spacing: 0em;\n}\n\n.responsive-table-header[_ngcontent-%COMP%] {\n  display: none;\n}\n\n[dir=rtl]   [_nghost-%COMP%]   .responsive-table-row[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n[dir=ltr]   [_nghost-%COMP%]   .responsive-table-row[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n\n.avatar-wrapper-outer[_ngcontent-%COMP%] {\n  max-width: 95%;\n  padding-top: 5px;\n  display: inline-flex;\n}\n.avatar-wrapper-outer[_ngcontent-%COMP%]   .inner-wrapper[_ngcontent-%COMP%] {\n  display: inline-flex !important;\n}\n\n@media only screen and (max-width: 991px) {\n  [dir=ltr]   [_nghost-%COMP%]     .group-by-wrapper {\n    margin-left: 10px;\n  }\n  [dir=rtl]   [_nghost-%COMP%]     .group-by-wrapper {\n    margin-right: 10px;\n  }\n  .columns-header[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .card[_ngcontent-%COMP%]   nb-accordion-item-body[_ngcontent-%COMP%], \n   .card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n    padding-left: 0;\n    padding-right: 0;\n  }\n  .table-row[_ngcontent-%COMP%] {\n    border-radius: 0;\n    margin-bottom: 15px;\n  }\n  .responsive-table-row[_ngcontent-%COMP%] {\n    width: 100% !important;\n    min-width: auto !important;\n    max-width: unset !important;\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    margin-bottom: 10px;\n    padding: 10px;\n    border-radius: var(--border-radius);\n    border-left: 1px solid var(--border-basic-color-4);\n  }\n  .responsive-table-header[_ngcontent-%COMP%] {\n    display: block;\n    font-size: 16px;\n    font-style: normal;\n    font-weight: 600;\n    line-height: 15px;\n    letter-spacing: 0em;\n  }\n  .responsive-table-content[_ngcontent-%COMP%], \n   .responsive-table-header[_ngcontent-%COMP%] {\n    width: 50%;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n  }\n  .table-row[_ngcontent-%COMP%] {\n    height: auto;\n  }\n  .table-inner-wrapper[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n@media only screen and (max-width: 767px) {\n  [_nghost-%COMP%]     .filters-range-wrapper {\n    flex-wrap: wrap !important;\n  }\n  [_nghost-%COMP%]     .filters .main-wrapper {\n    padding-left: 0;\n    padding-right: 0;\n  }\n    .filter-item-list {\n    flex-wrap: wrap !important;\n  }\n}\n.chart[_ngcontent-%COMP%] {\n  border-radius: var(--border-radius) !important;\n}\n\n[_nghost-%COMP%]   nb-badge[_ngcontent-%COMP%] {\n  position: relative;\n  font-size: 14px;\n  font-weight: 600;\n  padding: 2px 4px;\n  border-radius: calc(var(--border-radius) / 2);\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   .custom-card[_ngcontent-%COMP%] {\n  border-radius: 0 var(--border-radius) var(--border-radius) var(--border-radius);\n  background-color: var(--gauzy-card-2);\n}\n[dir=ltr]   [_nghost-%COMP%]   .custom-card[_ngcontent-%COMP%] {\n  padding: 1rem 0.5rem 1rem 18px;\n}\n[dir=rtl]   [_nghost-%COMP%]   .custom-card[_ngcontent-%COMP%] {\n  padding: 1rem 18px 1rem 0.5rem;\n}\n[_nghost-%COMP%]   .custom-card[_ngcontent-%COMP%]   .custom-card-body[_ngcontent-%COMP%] {\n  overflow-y: overlay;\n  overflow-x: hidden;\n  padding-right: 11px;\n  height: calc(100vh - 31.25rem);\n}\n\n[dir=ltr]   [_nghost-%COMP%]   .filters[_ngcontent-%COMP%] {\n  padding-right: 0.5rem;\n}\n[dir=rtl]   [_nghost-%COMP%]   .filters[_ngcontent-%COMP%] {\n  padding-left: 0.5rem;\n}\n\n[_nghost-%COMP%]   ga-daily-grid[_ngcontent-%COMP%]     .no-data {\n  min-height: 10rem;\n  height: calc(100vh - 34rem) !important;\n}\n\n[_nghost-%COMP%]     nb-progress-bar.size-tiny .progress-container {\n  height: 4px;\n}\n[_nghost-%COMP%]   .curser-pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .activity[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.1);\n  min-height: 130px;\n  position: relative;\n}\n[_nghost-%COMP%]   .activity[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]   .hover[_ngcontent-%COMP%] {\n  padding: 5px;\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.7);\n  opacity: 0;\n  z-index: 9;\n  align-items: center;\n  justify-content: center;\n  transition: opacity 0.5s;\n}\n[_nghost-%COMP%]   .activity[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]   .view-button[_ngcontent-%COMP%] {\n  height: 100%;\n  flex-grow: 1;\n  display: flex;\n  align-items: center;\n}\n[_nghost-%COMP%]   .activity[_ngcontent-%COMP%]   .image-container.select-mode[_ngcontent-%COMP%]   .hover[_ngcontent-%COMP%] {\n  justify-content: normal;\n}\n[_nghost-%COMP%]   .activity[_ngcontent-%COMP%]   .image-container.select-mode[_ngcontent-%COMP%]   .select-hidden[_ngcontent-%COMP%] {\n  display: none;\n}\n[_nghost-%COMP%]   .activity[_ngcontent-%COMP%]   .image-container.select-mode[_ngcontent-%COMP%]   .hover[_ngcontent-%COMP%], [_nghost-%COMP%]   .activity[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]:hover   .hover[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n[_nghost-%COMP%]   .activity[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]   .no-image[_ngcontent-%COMP%] {\n  padding: 8px;\n  background: rgba(0, 0, 0, 0.6);\n  color: #fff;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  border-radius: 5px;\n  text-align: center;\n}\n[_nghost-%COMP%]   .activity[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 130px;\n  object-fit: cover;\n}\n[_nghost-%COMP%]   .activity[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]   img.default-image[_ngcontent-%COMP%] {\n  object-fit: contain;\n}\n[_nghost-%COMP%]   .selected-items-action[_ngcontent-%COMP%] {\n  max-width: 500px;\n  width: 90%;\n  position: fixed;\n  bottom: 0;\n  display: flex;\n  flex-direction: row;\n  left: 0;\n  right: 0;\n  margin: auto;\n  z-index: 99;\n}\n[_nghost-%COMP%]     .progress-value span {\n  display: none;\n}\n[_nghost-%COMP%]   .custom-card[_ngcontent-%COMP%]   .custom-card-body[_ngcontent-%COMP%] {\n  height: calc(100vh - 31rem);\n}\n\n.hour-slot-group[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n  padding: 15px;\n  border-radius: nb-theme(border-radius);\n  background-color: nb-theme(background-basic-color-1);\n}\n\n.grid-container[_ngcontent-%COMP%] {\n  display: grid;\n  align-items: center;\n  justify-content: start;\n  column-gap: 1rem;\n  grid-gap: 1rem;\n  grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr));\n  padding: 0 1rem;\n}\n\n.hour-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 17px;\n  letter-spacing: 0em;\n  text-align: left;\n  text-transform: none;\n}\n\n@media screen and (min-width: 1690px) {\n  .grid-container[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(6, 1fr);\n  }\n}"]
    });
  }
};
ScreenshotComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_30__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__/* .UntilDestroy */ .d)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_30__/* .__metadata */ .Sn)("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__/* .TranslateService */ .c$, _angular_router__WEBPACK_IMPORTED_MODULE_10__/* .Router */ .Ix, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_17__/* .TimesheetService */ .k, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_18__/* .TimesheetFilterService */ .WG, _nebular_theme__WEBPACK_IMPORTED_MODULE_19__/* .NbDialogService */ .S0W, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_20__/* .GalleryService */ .A, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_21__/* .Store */ .il, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_22__/* .DateRangePickerBuilderService */ .i7, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_23__/* .TimeZoneService */ .F])], ScreenshotComponent);


/***/ }),

/***/ 6269:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ EmployeeMultiSelectModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14572);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10936);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56383);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19223);
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(38834);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);







let EmployeeMultiSelectModule = /*#__PURE__*/(() => {
  class EmployeeMultiSelectModule {
    static {
      this.ɵfac = function EmployeeMultiSelectModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || EmployeeMultiSelectModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .$C({
        type: EmployeeMultiSelectModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .CommonModule */ .MD, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .FormsModule */ .YN, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .ReactiveFormsModule */ .X1, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbSelectModule */ .VcP, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__/* .TranslateModule */ .h.forChild(), _shared_module__WEBPACK_IMPORTED_MODULE_5__/* .SharedModule */ .G]
      });
    }
  }
  return EmployeeMultiSelectModule;
})();

/***/ }),

/***/ 27985:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   t: () => (/* binding */ ProjectComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73014);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14572);
/* harmony import */ var _directives_img_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71466);




function ProjectComponent_div_0_img_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(0, "img", 5);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpropertyInterpolate"] */ .FS9("src", ctx_r0.project.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵsanitizeUrl"] */ .B4B);
  }
}
function ProjectComponent_div_0_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" Members count ", ctx_r0.project == null ? null : ctx_r0.project.count, " ");
  }
}
function ProjectComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, ProjectComponent_div_0_img_1_Template, 1, 1, "img", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(2, "span")(3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(5, ProjectComponent_div_0_div_5_Template, 2, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r0.project == null ? null : ctx_r0.project.imageUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(ctx_r0.project == null ? null : ctx_r0.project.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r0.project == null ? null : ctx_r0.project.count);
  }
}
function ProjectComponent_div_1_ng_container_1_img_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(0, "img", 5);
  }
  if (rf & 2) {
    const project_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpropertyInterpolate"] */ .FS9("src", project_r2.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵsanitizeUrl"] */ .B4B);
  }
}
function ProjectComponent_div_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, ProjectComponent_div_1_ng_container_1_img_1_Template, 1, 1, "img", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const project_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", project_r2 == null ? null : project_r2.imageUrl);
  }
}
function ProjectComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, ProjectComponent_div_1_ng_container_1_Template, 2, 1, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx_r0.projects);
  }
}
let ProjectComponent = /*#__PURE__*/(() => {
  class ProjectComponent {
    constructor() {
      this.organization = null;
      this.project = {
        name: null,
        count: null,
        imageUrl: null
      };
      this.projects = [];
    }
    ngOnInit() {
      this.init();
    }
    init() {
      var _this = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(function* () {
        if (_this.rowData?.project || _this.value?.project) {
          _this.project.name = _this.rowData?.project?.name || _this.value?.project?.name;
          _this.project.count = _this.rowData?.project?.membersCount || _this.value?.project?.membersCount;
          _this.project.imageUrl = _this.rowData?.project?.imageUrl || _this.value?.project?.imageUrl;
        } else if (_this.rowData.projects) {
          _this.projects = _this.rowData.projects.map(project => {
            return {
              name: project.name,
              count: project.membersCount,
              imageUrl: project.imageUrl
            };
          });
        }
      })();
    }
    static {
      this.ɵfac = function ProjectComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || ProjectComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: ProjectComponent,
        selectors: [["ngx-project"]],
        inputs: {
          value: "value",
          rowData: "rowData"
        },
        standalone: false,
        decls: 2,
        vars: 2,
        consts: [["class", "project-render", 4, "ngIf"], [1, "project-render"], [3, "src", 4, "ngIf"], [1, "name"], ["class", "member", 4, "ngIf"], [3, "src"], [1, "member"], [4, "ngFor", "ngForOf"]],
        template: function ProjectComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(0, ProjectComponent_div_0_Template, 6, 3, "div", 0)(1, ProjectComponent_div_1_Template, 2, 1, "div", 0);
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.project);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.projects);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__/* .NgForOf */ .Sq, _angular_common__WEBPACK_IMPORTED_MODULE_2__/* .NgIf */ .bT, _directives_img_directive__WEBPACK_IMPORTED_MODULE_3__/* .ImgDirective */ .z],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.project-render[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: flex-start;\n  gap: 10px;\n}\n.project-render[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: var(--border-radius);\n  box-shadow: var(--gauzy-shadow);\n  object-fit: cover;\n}\n.project-render[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   .member[_ngcontent-%COMP%] {\n  color: var(--gauzy-text-color-2);\n  font-size: 11px;\n  font-weight: 400;\n  line-height: 13px;\n  letter-spacing: 0em;\n}\n.project-render[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  color: var(--gauzy-text-color-1);\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 17px;\n  letter-spacing: 0em;\n}"]
      });
    }
  }
  return ProjectComponent;
})();

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

/***/ 30065:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P: () => (/* binding */ ScreenshotRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(908);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(60559);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20433);
/* harmony import */ var _screenshot_screenshot_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5114);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26860);






const routes = [{
  path: '',
  component: _screenshot_screenshot_component__WEBPACK_IMPORTED_MODULE_0__/* .ScreenshotComponent */ .C,
  data: {
    title: 'ACTIVITY.SCREENSHOTS',
    datePicker: {
      unitOfTime: 'day',
      isLockDatePicker: true,
      isSaveDatePicker: true,
      isSingleDatePicker: true,
      isDisableFutureDate: true
    }
  },
  resolve: {
    dates: _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_1__/* .DateRangePickerResolver */ .Q,
    bookmarkParams: _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_2__/* .BookmarkQueryParamsResolver */ .x
  }
}];
let ScreenshotRoutingModule = /*#__PURE__*/(() => {
  class ScreenshotRoutingModule {
    static {
      this.ɵfac = function ScreenshotRoutingModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || ScreenshotRoutingModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdefineNgModule"] */ .$C({
        type: ScreenshotRoutingModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__/* .RouterModule */ .iI.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_4__/* .RouterModule */ .iI]
      });
    }
  }
  return ScreenshotRoutingModule;
})();

/***/ }),

/***/ 55129:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ ContactLinksComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9620);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14572);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56383);
/* harmony import */ var _directives_img_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(71466);






function ContactLinksComponent_ng_container_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", ctx_r1.value.name.substr(0, 1).toUpperCase(), " ");
  }
}
function ContactLinksComponent_ng_container_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("src", ctx_r1.value == null ? null : ctx_r1.value.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵsanitizeUrl"] */ .B4B);
  }
}
function ContactLinksComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function ContactLinksComponent_ng_container_1_Template_div_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.navigateToContact());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(2, ContactLinksComponent_ng_container_1_div_2_Template, 2, 1, "div", 3)(3, ContactLinksComponent_ng_container_1_div_3_Template, 2, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(4, "div", 5)(5, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("nbTooltip", ctx_r1.value.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", !ctx_r1.value.imageUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r1.value.imageUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(ctx_r1.value.name);
  }
}
let ContactLinksComponent = /*#__PURE__*/(() => {
  class ContactLinksComponent {
    constructor(_router) {
      this._router = _router;
    }
    /**
     * Navigates to the contact view page for the current value.
     *
     * @return {void} This function does not return anything.
     */
    navigateToContact() {
      if (!this.value) {
        return;
      }
      this._router.navigate([`/pages/contacts/view`, this.value.id]);
    }
    static {
      this.ɵfac = function ContactLinksComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || ContactLinksComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_router__WEBPACK_IMPORTED_MODULE_1__/* .Router */ .Ix));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: ContactLinksComponent,
        selectors: [["ngx-contact-links"]],
        inputs: {
          rowData: "rowData",
          value: "value"
        },
        standalone: false,
        decls: 2,
        vars: 1,
        consts: [[1, "contact-links-container"], [4, "ngIf"], [1, "inner-wrapper", 3, "click", "nbTooltip"], ["class", "prefix", 4, "ngIf"], ["class", "avatar", 4, "ngIf"], [1, "names-wrapper"], [1, "link-text"], [1, "prefix"], [1, "avatar"], [3, "src"]],
        template: function ContactLinksComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, ContactLinksComponent_ng_container_1_Template, 7, 4, "ng-container", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.value == null ? null : ctx.value.name);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__/* .NgIf */ .bT, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbTooltipDirective */ .BmQ, _directives_img_directive__WEBPACK_IMPORTED_MODULE_4__/* .ImgDirective */ .z],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   .contact-links-container[_ngcontent-%COMP%] {\n  width: 100%;\n}\n[_nghost-%COMP%]   .contact-links-container[_ngcontent-%COMP%]   .inner-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: rgba(36, 189, 255, 0.1);\n  border-radius: var(--button-rectangle-border-radius);\n  overflow: hidden;\n  width: fit-content;\n}\n[dir=ltr]   [_nghost-%COMP%]   .contact-links-container[_ngcontent-%COMP%]   .inner-wrapper[_ngcontent-%COMP%] {\n  padding: 5px 14px 5px 7px;\n}\n[dir=rtl]   [_nghost-%COMP%]   .contact-links-container[_ngcontent-%COMP%]   .inner-wrapper[_ngcontent-%COMP%] {\n  padding: 5px 7px 5px 14px;\n}\n[_nghost-%COMP%]   .contact-links-container[_ngcontent-%COMP%]   .inner-wrapper[_ngcontent-%COMP%]   .names-wrapper[_ngcontent-%COMP%] {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  max-width: 110px;\n}\n[_nghost-%COMP%]   .contact-links-container[_ngcontent-%COMP%]   .inner-wrapper[_ngcontent-%COMP%]   .link-text[_ngcontent-%COMP%] {\n  cursor: pointer;\n  text-decoration: none;\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 15px;\n  letter-spacing: 0em;\n  white-space: nowrap;\n  width: 100%;\n  text-overflow: ellipsis;\n  color: var(--text-primary-color);\n}\n[_nghost-%COMP%]   .contact-links-container[_ngcontent-%COMP%]   .inner-wrapper[_ngcontent-%COMP%]   .link-text[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n[_nghost-%COMP%]   .contact-links-container[_ngcontent-%COMP%]   .inner-wrapper[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  display: flex;\n}\n[_nghost-%COMP%]   .contact-links-container[_ngcontent-%COMP%]   .inner-wrapper[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  object-fit: cover;\n  border-radius: var(--button-rectangle-border-radius);\n}\n[_nghost-%COMP%]   .contact-links-container[_ngcontent-%COMP%]   .inner-wrapper[_ngcontent-%COMP%]   .prefix[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 4px 5px;\n  gap: 10px;\n  width: 18px;\n  height: 18px;\n  background: #7e7e8f;\n  border-radius: var(--button-rectangle-border-radius);\n  \n\n  flex: none;\n  order: 0;\n  flex-grow: 0;\n  \n\n  font-size: 8px;\n  font-weight: 600;\n  line-height: 10px;\n  letter-spacing: 0em;\n  text-align: center;\n  color: white;\n}"]
      });
    }
  }
  return ContactLinksComponent;
})();

/***/ }),

/***/ 57201:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* binding */ EditTimeLogModalModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14572);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10936);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56383);
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(79475);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19223);
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(38834);
/* harmony import */ var _dialogs_dialogs_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(18180);
/* harmony import */ var _selectors_project__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(37383);
/* harmony import */ var _selectors_team__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(72943);
/* harmony import */ var _timer_picker_timer_picker_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1618);
/* harmony import */ var _employee_employee_multi_select_employee_multi_select_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6269);
/* harmony import */ var _contact_selector_contact_selector_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(4222);
/* harmony import */ var _tasks_task_select_task_select_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(34987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
















let EditTimeLogModalModule = /*#__PURE__*/(() => {
  class EditTimeLogModalModule {
    static {
      this.ɵfac = function EditTimeLogModalModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || EditTimeLogModalModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .$C({
        type: EditTimeLogModalModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .CommonModule */ .MD, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .FormsModule */ .YN, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .ReactiveFormsModule */ .X1, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbButtonModule */ .P5N, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbCardModule */ .lVF, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbCheckboxModule */ .Ad8, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbAutocompleteModule */ .FUX, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbFormFieldModule */ .NeG, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbIconModule */ .clu, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbInputModule */ .pty, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbSpinnerModule */ .gYs, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbTooltipModule */ .IB0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbSelectModule */ .VcP, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbOptionModule */ .OKj, ngx_permissions__WEBPACK_IMPORTED_MODULE_4__/* .NgxPermissionsModule */ .Ov.forChild(), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__/* .TranslateModule */ .h.forChild(), _shared_module__WEBPACK_IMPORTED_MODULE_6__/* .SharedModule */ .G, _dialogs_dialogs_module__WEBPACK_IMPORTED_MODULE_7__/* .DialogsModule */ .s, _timer_picker_timer_picker_module__WEBPACK_IMPORTED_MODULE_8__/* .TimerPickerModule */ .O, _tasks_task_select_task_select_module__WEBPACK_IMPORTED_MODULE_9__/* .TaskSelectModule */ .k, _selectors_project__WEBPACK_IMPORTED_MODULE_10__/* .ProjectSelectModule */ .A, _selectors_team__WEBPACK_IMPORTED_MODULE_11__/* .TeamSelectModule */ .i, _employee_employee_multi_select_employee_multi_select_module__WEBPACK_IMPORTED_MODULE_12__/* .EmployeeMultiSelectModule */ .I, _contact_selector_contact_selector_module__WEBPACK_IMPORTED_MODULE_13__/* .ContactSelectorModule */ .q]
      });
    }
  }
  return EditTimeLogModalModule;
})();

/***/ }),

/***/ 57354:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O: () => (/* binding */ EmployeeSelectComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73014);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(55598);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10936);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4644);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(39855);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(39938);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(52738);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4478);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(41598);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(17785);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(88319);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(28822);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(71924);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(14572);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(56383);
/* harmony import */ var _components_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(32386);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(19223);

















function EmployeeSelectComponent_label_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "label", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(2, 1, ctx_r0.label));
  }
}
function EmployeeSelectComponent_ng_template_1_nb_option_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-option", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "ngx-avatar", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const employee_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("value", employee_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("src", employee_r3.user == null ? null : employee_r3.user.imageUrl)("name", employee_r3.user == null ? null : employee_r3.user.name)("isOption", true);
  }
}
function EmployeeSelectComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-select", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("selectedChange", function EmployeeSelectComponent_ng_template_1_Template_nb_select_selectedChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r0.onMembersSelected($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayListener"] */ .mxI("selectedChange", function EmployeeSelectComponent_ng_template_1_Template_nb_select_selectedChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayBindingSet"] */ .DH7(ctx_r0.preSelected, $event) || (ctx_r0.preSelected = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(2, EmployeeSelectComponent_ng_template_1_nb_option_2_Template, 2, 4, "nb-option", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("formControl", ctx_r0.select)("multiple", ctx_r0.multiple)("disabled", ctx_r0.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayProperty"] */ .R50("selected", ctx_r0.preSelected);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(1, 6, ctx_r0.placeholder));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx_r0.employees);
  }
}
let EmployeeSelectComponent = /*#__PURE__*/(() => {
  let EmployeeSelectComponent = class EmployeeSelectComponent {
    set reset(value) {
      if (value) {
        if (this.multiple) {
          this.select.setValue([]);
          this.select.updateValueAndValidity();
        } else {
          this.select.reset();
        }
      }
    }
    get allEmployees() {
      return this._allEmployees;
    }
    set allEmployees(value) {
      this._allEmployees = value;
      this.employees = this._allEmployees;
    }
    get selectedEmployeeIds() {
      return this.val;
    }
    set selectedEmployeeIds(value) {
      this.preSelected = value;
      this.select.setValue(value);
      this.select.updateValueAndValidity();
    }
    set employees(employees) {
      this._employees = employees;
      this.onLoadEmployees.emit(employees);
    }
    get employees() {
      return this._employees;
    }
    constructor(employeesService, store, dateRangePickerBuilderService) {
      this.employeesService = employeesService;
      this.store = store;
      this.dateRangePickerBuilderService = dateRangePickerBuilderService;
      /**
       * Getter & Setter for employees
       */
      this._employees = [];
      this.selectedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .bkB();
      this.onLoadEmployees = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .bkB();
      this.multiple = true;
      this.label = 'FORM.PLACEHOLDERS.ADD_REMOVE_EMPLOYEES';
      this.disabled = false;
      this.placeholder = 'FORM.PLACEHOLDERS.ADD_REMOVE_EMPLOYEES';
      this.select = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .FormControl */ .MJ();
      this.val = null;
      this.changeValue$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__/* .Subject */ .B();
      this.onChange = () => {};
      this.onTouched = () => {};
      this.organization = this.store.selectedOrganization;
    }
    set employeeId(value) {
      this.changeValue$.next(value);
    }
    get employeeId() {
      return this.val;
    }
    ngOnInit() {
      var _this = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(function* () {
        _this.changeValue$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .debounceTime */ .B)(100), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .untilDestroyed */ .s)(_this)).subscribe(value => {
          _this.checkForMultiSelectValue(value);
          _this.onChange(_this.val);
        });
        _this.select.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .M)(value => _this.employeeId = value), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .untilDestroyed */ .s)(_this)).subscribe();
        const selectedDateRange$ = _this.dateRangePickerBuilderService.selectedDateRange$;
        (0,rxjs__WEBPACK_IMPORTED_MODULE_7__/* .combineLatest */ .z)([selectedDateRange$]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__/* .filter */ .p)(([dateRange]) => !!dateRange), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .M)(([dateRange]) => {
          _this.selectedDateRange = dateRange;
        }), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .M)(/*#__PURE__*/(0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(function* () {
          if (!_this.allEmployees || _this.allEmployees.length === 0) {
            yield _this.getWorkingEmployees();
          }
          _this.select.setValue(_this.preSelected);
          _this.loaded = true;
        })), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .untilDestroyed */ .s)(_this)).subscribe();
      })();
    }
    checkForMultiSelectValue(val) {
      if (this.multiple) {
        this.val = val instanceof Array ? val : [val];
      } else {
        this.val = val instanceof Array ? val[0] : val;
      }
    }
    onMembersSelected(selectEvent) {
      this.selectedChange.emit(selectEvent);
    }
    writeValue(value) {
      this.changeValue$.next(value);
    }
    registerOnChange(fn) {
      this.onChange = fn;
    }
    registerOnTouched(fn) {
      this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
      this.disabled = isDisabled;
    }
    /**
     * Get working employees of the selected month
     */
    getWorkingEmployees() {
      var _this2 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(function* () {
        if (!_this2.store.hasAnyPermission(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_9__/* .PermissionsEnum */ .U.CHANGE_SELECTED_EMPLOYEE) && !_this2.store.hasAnyPermission(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_9__/* .PermissionsEnum */ .U.SELECT_EMPLOYEE)) {
          return;
        }
        const {
          tenantId
        } = _this2.store.user;
        const {
          id: organizationId
        } = _this2.organization;
        const {
          items = []
        } = yield _this2.employeesService.getWorking(organizationId, tenantId, _this2.selectedDateRange, true);
        _this2.employees = items;
      })();
    }
    ngOnDestroy() {}
    static {
      this.ɵfac = function EmployeeSelectComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || EmployeeSelectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_10__/* .EmployeesService */ .r), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_11__/* .Store */ .il), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_12__/* .DateRangePickerBuilderService */ .i7));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: EmployeeSelectComponent,
        selectors: [["ga-employee-multi-select"]],
        inputs: {
          reset: "reset",
          allEmployees: "allEmployees",
          selectedEmployeeIds: "selectedEmployeeIds",
          multiple: "multiple",
          label: "label",
          disabled: "disabled",
          placeholder: "placeholder"
        },
        outputs: {
          selectedChange: "selectedChange",
          onLoadEmployees: "onLoadEmployees"
        },
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵProvidersFeature"] */ .Jv_([{
          provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .NG_VALUE_ACCESSOR */ .kq,
          useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__/* .forwardRef */ .Rfq)(() => EmployeeSelectComponent),
          multi: true
        }])],
        decls: 2,
        vars: 2,
        consts: [["class", "label", 4, "ngIf"], [3, "ngIf"], [1, "label"], ["fullWidth", "", 3, "selectedChange", "formControl", "multiple", "disabled", "selected", "placeholder"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["size", "sm", 3, "src", "name", "isOption"]],
        template: function EmployeeSelectComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(0, EmployeeSelectComponent_label_0_Template, 3, 3, "label", 0)(1, EmployeeSelectComponent_ng_template_1_Template, 3, 8, "ng-template", 1);
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.label);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.loaded);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__/* .NgForOf */ .Sq, _angular_common__WEBPACK_IMPORTED_MODULE_13__/* .NgIf */ .bT, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .NgControlStatus */ .BC, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .FormControlDirective */ .l_, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbSelectComponent */ .S81, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbOptionComponent */ .ZJ2, _components_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_15__/* .AvatarComponent */ .f, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__/* .TranslatePipe */ .D9],
        styles: ["[_nghost-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container {\n  flex-wrap: nowrap;\n  overflow: hidden;\n}\n\nngx-avatar[_ngcontent-%COMP%]     .inner-wrapper {\n  display: flex;\n  flex-direction: row;\n}\nngx-avatar[_ngcontent-%COMP%]     .inner-wrapper .names-wrapper {\n  margin: 0 10px;\n}"]
      });
    }
  };
  EmployeeSelectComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_17__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .UntilDestroy */ .d)({
    checkProperties: true
  }), (0,tslib__WEBPACK_IMPORTED_MODULE_17__/* .__metadata */ .Sn)("design:paramtypes", [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_10__/* .EmployeesService */ .r, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_11__/* .Store */ .il, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_12__/* .DateRangePickerBuilderService */ .i7])], EmployeeSelectComponent);
  return EmployeeSelectComponent;
})();


/***/ }),

/***/ 65029:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   k: () => (/* binding */ ViewTimeLogModalModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14572);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(56383);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19223);
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(38834);
/* harmony import */ var _dialogs_dialogs_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(18180);
/* harmony import */ var _table_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(57832);
/* harmony import */ var _edit_time_log_modal_edit_time_log_modal_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(57201);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);










let ViewTimeLogModalModule = /*#__PURE__*/(() => {
  class ViewTimeLogModalModule {
    static {
      this.ɵfac = function ViewTimeLogModalModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || ViewTimeLogModalModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .$C({
        type: ViewTimeLogModalModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .CommonModule */ .MD, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__/* .TranslateModule */ .h.forChild(), _shared_module__WEBPACK_IMPORTED_MODULE_3__/* .SharedModule */ .G, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbCardModule */ .lVF, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbButtonModule */ .P5N, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbDialogModule */ .nZv.forChild(), _edit_time_log_modal_edit_time_log_modal_module__WEBPACK_IMPORTED_MODULE_5__/* .EditTimeLogModalModule */ .H, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbIconModule */ .clu, _dialogs_dialogs_module__WEBPACK_IMPORTED_MODULE_6__/* .DialogsModule */ .s, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbAlertModule */ .dQU, _table_components__WEBPACK_IMPORTED_MODULE_7__/* .TableComponentsModule */ .p]
      });
    }
  }
  return ViewTimeLogModalModule;
})();

/***/ })

}]);