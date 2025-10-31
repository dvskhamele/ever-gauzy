"use strict";
(self["webpackChunkgauzy"] = self["webpackChunkgauzy"] || []).push([[2759],{

/***/ 46915:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   U: () => (/* binding */ BaseSelectorFilterComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(55598);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4644);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39938);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4478);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(52738);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(39855);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(41598);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(19223);
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86014);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(26024);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(71924);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(28822);
/* harmony import */ var _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38546);
/* harmony import */ var _timezone_filter__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(6195);
/* harmony import */ var _selectors_date_range_picker_date_picker_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(15130);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(26860);















let BaseSelectorFilterComponent = /*#__PURE__*/(() => {
  let BaseSelectorFilterComponent = class BaseSelectorFilterComponent extends _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_1__/* .TranslationBaseComponent */ .K {
    constructor(store, translateService, dateRangePickerBuilderService, timeZoneService) {
      super(translateService);
      this.store = store;
      this.translateService = translateService;
      this.dateRangePickerBuilderService = dateRangePickerBuilderService;
      this.timeZoneService = timeZoneService;
      this.request = {
        employeeIds: [],
        projectIds: [],
        teamIds: []
      };
      this.subject$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__/* .Subject */ .B();
      this.onInit();
    }
    /**
     * Subscribes to multiple observables representing selected values, combines them, and reacts to changes.
     * Adjusts the 'organization', 'request.employeeIds', 'request.projectIds', 'request.teamIds',
     * and 'request' properties based on the emitted values.
     * Emits a value to the 'subject$' subject and ensures the subscription is unsubscribed onDestroy.
     */
    onInit() {
      const storeOrganization$ = this.store.selectedOrganization$;
      const storeDateRange$ = this.dateRangePickerBuilderService.selectedDateRange$;
      const storeProject$ = this.store.selectedProject$;
      const storeEmployee$ = this.store.selectedEmployee$;
      const storeTeam$ = this.store.selectedTeam$;
      (0,rxjs__WEBPACK_IMPORTED_MODULE_3__/* .combineLatest */ .z)([storeOrganization$, storeDateRange$, storeEmployee$, storeProject$, storeTeam$]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__/* .debounceTime */ .B)(300), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .filter */ .p)(([organization, dateRange]) => !!organization && !!dateRange), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .M)(([organization, dateRange, employee, project, team]) => {
        if (organization) {
          this.organization = organization;
          this.request.employeeIds = employee?.id ? [employee.id] : [];
          this.request.projectIds = project?.id ? [project.id] : [];
          this.request.teamIds = team?.id ? [team.id] : [];
          if (dateRange) {
            this.request = {
              ...this.request,
              ...dateRange
            };
          }
        }
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .M)(() => this.subject$.next(true)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__/* .untilDestroyed */ .s)(this)).subscribe();
    }
    /**
     * Transforms a given ITimeLogFilters object by adjusting date range, extracting organizationId and tenantId,
     * and formatting dates to UTC.
     * @param request - The original ITimeLogFilters object to be transformed.
     * @returns The modified ITimeLogFilters object.
     */
    getFilterRequest(request) {
      // Retrieve adjusted start and end dates using getAdjustDateRangeFutureAllowed
      const {
        startDate,
        endDate
      } = (0,_selectors_date_range_picker_date_picker_utils__WEBPACK_IMPORTED_MODULE_8__/* .getAdjustDateRangeFutureAllowed */ .Yi)(request);
      // Extract organizationId and tenantId from the organization object
      const {
        id: organizationId,
        tenantId
      } = this.organization;
      const timeZone = this.timeZoneService.currentTimeZone;
      // Create a selectorFilters object containing projectIds, employeeIds, and teamIds
      const selectorFilters = (0,underscore__WEBPACK_IMPORTED_MODULE_0__/* .pick */ .Up)(this.request, 'projectIds', 'employeeIds', 'teamIds');
      // Build the final ITimeLogFilters object
      const filterRequest = {
        ...selectorFilters,
        organizationId,
        tenantId,
        startDate: (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_9__/* .toUtcOffset */ .Tt)(startDate, timeZone).format('YYYY-MM-DD HH:mm:ss'),
        endDate: (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_9__/* .toUtcOffset */ .Tt)(endDate, timeZone).format('YYYY-MM-DD HH:mm:ss'),
        // Set the 'timezone' property to the determined timezone
        timeZone
      };
      // Return the modified ITimeLogFilters object
      return filterRequest;
    }
    static {
      this.ɵfac = function BaseSelectorFilterComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || BaseSelectorFilterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_11__/* .Store */ .il), _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__/* .TranslateService */ .c$), _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_13__/* .DateRangePickerBuilderService */ .i7), _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵdirectiveInject"] */ .rXU(_timezone_filter__WEBPACK_IMPORTED_MODULE_14__/* .TimeZoneService */ .F));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵdefineComponent"] */ .VBU({
        type: BaseSelectorFilterComponent,
        selectors: [["ng-component"]],
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
        decls: 0,
        vars: 0,
        template: function BaseSelectorFilterComponent_Template(rf, ctx) {},
        encapsulation: 2
      });
    }
  };
  BaseSelectorFilterComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_15__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__/* .UntilDestroy */ .d)({
    checkProperties: true
  }), (0,tslib__WEBPACK_IMPORTED_MODULE_15__/* .__metadata */ .Sn)("design:paramtypes", [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_11__/* .Store */ .il, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__/* .TranslateService */ .c$, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_13__/* .DateRangePickerBuilderService */ .i7, _timezone_filter__WEBPACK_IMPORTED_MODULE_14__/* .TimeZoneService */ .F])], BaseSelectorFilterComponent);
  return BaseSelectorFilterComponent;
})();


/***/ }),

/***/ 95465:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ TimezoneFilterComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(73014);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(55598);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26860);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(9620);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(41598);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(52738);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(39938);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(39855);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(19223);
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73247);
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _gauzy_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(99253);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15788);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(17785);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(26024);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(71924);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(48386);
/* harmony import */ var _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38546);
/* harmony import */ var _time_zone_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(6195);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(14572);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(56383);























const _c0 = ["popover"];
const _c1 = a0 => ({
  visibility: a0
});
function TimezoneFilterComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(0);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", ctx_r0.getTimeZoneWithOffset(), " ");
  }
}
function TimezoneFilterComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(0);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" / ", ctx_r0.selectedTimeFormat, " hour ");
  }
}
function TimezoneFilterComponent_ng_template_6_ng_container_1_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("click", function TimezoneFilterComponent_ng_template_6_ng_container_1_ng_container_5_Template_div_click_1_listener() {
      const timeZoneOption_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r2).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG(3);
      ctx_r0.updateSelectedTimeZone(timeZoneOption_r3.value);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx_r0.closePopover());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(2, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const timeZoneOption_r3 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpureFunction1"] */ .eq3(2, _c1, ctx_r0.selectedTimeZone === timeZoneOption_r3.value ? "visible" : "hidden"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .JRh(timeZoneOption_r3.label);
  }
}
function TimezoneFilterComponent_ng_template_6_ng_container_1_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
}
function TimezoneFilterComponent_ng_template_6_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(1, "div", 7)(2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(5, TimezoneFilterComponent_ng_template_6_ng_container_1_ng_container_5_Template, 5, 4, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(6, TimezoneFilterComponent_ng_template_6_ng_container_1_ng_container_6_Template, 2, 0, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(4, 3, "TIMESHEET.TIME_ZONE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx_r0.timeZoneOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r0.isTimeFormat);
  }
}
function TimezoneFilterComponent_ng_template_6_ng_container_2_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("click", function TimezoneFilterComponent_ng_template_6_ng_container_2_ng_container_5_Template_div_click_1_listener() {
      const timeFormatsOption_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r4).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG(3);
      ctx_r0.updateSelectedTimeFormat(timeFormatsOption_r5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx_r0.closePopover());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(2, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const timeFormatsOption_r5 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpureFunction1"] */ .eq3(2, _c1, ctx_r0.selectedTimeFormat === timeFormatsOption_r5 ? "visible" : "hidden"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI("", timeFormatsOption_r5, " hour");
  }
}
function TimezoneFilterComponent_ng_template_6_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(1, "div", 7)(2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(5, TimezoneFilterComponent_ng_template_6_ng_container_2_ng_container_5_Template, 5, 4, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(4, 2, "TIMESHEET.TIME_FORMAT"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx_r0.timeFormatsOptions);
  }
}
function TimezoneFilterComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(1, TimezoneFilterComponent_ng_template_6_ng_container_1_Template, 7, 5, "ng-container", 6)(2, TimezoneFilterComponent_ng_template_6_ng_container_2_Template, 6, 4, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r0.isTimezone);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r0.isTimeFormat);
  }
}
let TimezoneFilterComponent = /*#__PURE__*/(() => {
  let TimezoneFilterComponent = class TimezoneFilterComponent extends _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_2__/* .TranslationBaseComponent */ .K {
    constructor(translateService, _route, _store, _navigationService, _timeZoneService) {
      super(translateService);
      this.translateService = translateService;
      this._route = _route;
      this._store = _store;
      this._navigationService = _navigationService;
      this._timeZoneService = _timeZoneService;
      this.timeZoneOptions = [{
        value: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__/* .TimeZoneEnum */ .zG.UTC_TIMEZONE,
        label: this.getTranslation('TIMESHEET.TIME_ZONE_OPTION.UTC')
      }, {
        value: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__/* .TimeZoneEnum */ .zG.ORG_TIMEZONE,
        label: this.getTranslation('TIMESHEET.TIME_ZONE_OPTION.ORG_TIMEZONE')
      }, {
        value: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__/* .TimeZoneEnum */ .zG.MINE_TIMEZONE,
        label: this.getTranslation('TIMESHEET.TIME_ZONE_OPTION.MY_TIMEZONE')
      }];
      this.timeFormatsOptions = _gauzy_constants__WEBPACK_IMPORTED_MODULE_4__/* .DEFAULT_TIME_FORMATS */ .Fo;
      this.selectedTimeFormat = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__/* .TimeFormatEnum */ .cS.FORMAT_12_HOURS;
      this.selectedTimeZone = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__/* .TimeZoneEnum */ .zG.UTC_TIMEZONE;
      this.isTimezone = true;
      this.isTimeFormat = true;
      this.timeZoneChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__/* .EventEmitter */ .bkB();
      this.timeFormatChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__/* .EventEmitter */ .bkB();
    }
    ngOnInit() {
      // Extract query parameter
      const queryParams$ = this._route.queryParams.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__/* .filter */ .p)(params => !!params), (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_6__/* .distinctUntilChange */ .nI)());
      const storeOrganization$ = this._store.selectedOrganization$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__/* .filter */ .p)(organization => !!organization), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__/* .filter */ .p)(() => this.hasChangeSelectedEmployeePermission()), (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_6__/* .distinctUntilChange */ .nI)());
      (0,rxjs__WEBPACK_IMPORTED_MODULE_7__/* .combineLatest */ .z)([queryParams$, storeOrganization$]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .tap */ .M)(([queryParams, organization]) => {
        if (this.isTimeFormat) this.applyTimeFormat(queryParams, organization.timeFormat);
        if (this.isTimezone) this.applyTimeZone(queryParams, _gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__/* .TimeZoneEnum */ .zG.ORG_TIMEZONE);
      }),
      // Handle component lifecycle to avoid memory leaks
      (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__/* .untilDestroyed */ .s)(this)).subscribe();
    }
    ngAfterViewInit() {
      // Extract query parameter
      const queryParams$ = this._route.queryParams.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__/* .filter */ .p)(params => !!params), (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_6__/* .distinctUntilChange */ .nI)());
      const storeUser$ = this._store.user$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__/* .filter */ .p)(user => !!user), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__/* .filter */ .p)(() => !this.hasChangeSelectedEmployeePermission()));
      (0,rxjs__WEBPACK_IMPORTED_MODULE_7__/* .combineLatest */ .z)([queryParams$, storeUser$]).pipe((0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_6__/* .distinctUntilChange */ .nI)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .tap */ .M)(([queryParams, user]) => {
        if (this.isTimeFormat) this.applyTimeFormat(queryParams, user.timeFormat);
        if (this.isTimezone) this.applyTimeZone(queryParams, _gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__/* .TimeZoneEnum */ .zG.MINE_TIMEZONE);
      }),
      // Handle component lifecycle to avoid memory leaks
      (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__/* .untilDestroyed */ .s)(this)).subscribe();
    }
    /**
     * Applies the appropriate time format based on query parameters, organization settings, and employee settings.
     *
     * @param queryParams The query parameters from the route.
     * @param organization The organization details.
     */
    applyTimeFormat(queryParams, timeFormat) {
      const {
        time_format
      } = queryParams;
      // Apply query parameters first
      if (time_format) {
        this.selectTimeFormat(parseInt(time_format, 10));
      } else {
        this.selectTimeFormat(timeFormat);
      }
    }
    /**
     * Applies the appropriate time zone based on query parameters and organization settings.
     * @param queryParams The query parameters from the route.
     * @param organization The organization details.
     */
    applyTimeZone(queryParams, timeZone) {
      const {
        time_zone
      } = queryParams;
      // Apply query parameters first
      if (time_zone) {
        this.selectTimeZone(time_zone);
      } else {
        this.selectTimeZone(timeZone);
      }
    }
    /**
     * Sets the selected time format based on the provided time format.
     *
     * @param timeFormat The time format to set.
     */
    selectTimeFormat(timeFormat) {
      const is24Hours = timeFormat == _gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__/* .TimeFormatEnum */ .cS.FORMAT_24_HOURS;
      this.selectedTimeFormat = is24Hours ? _gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__/* .TimeFormatEnum */ .cS.FORMAT_24_HOURS : _gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__/* .TimeFormatEnum */ .cS.FORMAT_12_HOURS;
      // Set the time format using the TimeZoneService
      this._timeZoneService.setTimeFormat(this.selectedTimeFormat);
      // Emit the timeFormatChange event with the new time format
      this.timeFormatChange.emit(this.selectedTimeFormat);
    }
    /**
     * Sets the selected timezone based on the provided timezone enum value.
     *
     * @param timeZone The timezone enum value to set.
     */
    selectTimeZone(timeZone) {
      switch (timeZone) {
        case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__/* .TimeZoneEnum */ .zG.ORG_TIMEZONE:
        case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__/* .TimeZoneEnum */ .zG.MINE_TIMEZONE:
          this.selectedTimeZone = timeZone;
          break;
        default:
          this.selectedTimeZone = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__/* .TimeZoneEnum */ .zG.UTC_TIMEZONE;
          break;
      }
      // Get the moment timezone string representation of the selected timezone
      const timezone = this.getMomentTimezone(this.selectedTimeZone);
      // Set the timezone using the TimeZoneService
      this._timeZoneService.setTimeZone(timezone);
      // Emit the timeZoneChange event with the new timezone
      this.timeZoneChange.emit(timezone);
    }
    /**
     * Updates the selected time format and updates the corresponding query parameter.
     *
     * @param timeFormat The time format to update.
     */
    updateSelectedTimeFormat(timeFormat) {
      var _this = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A)(function* () {
        // Update the selected time format
        _this.selectTimeFormat(timeFormat);
        // Updates the query parameters of the current route without navigating away.
        yield _this._navigationService.updateQueryParams({
          time_format: timeFormat.toString()
        });
      })();
    }
    /**
     * Updates the selected time zone and updates the corresponding query parameter.
     *
     * @param timeZone The time zone to update.
     */
    updateSelectedTimeZone(timeZone) {
      var _this2 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A)(function* () {
        // Update the selected time zone
        _this2.selectTimeZone(timeZone);
        // Updates the query parameters of the current route without navigating away.
        yield _this2._navigationService.updateQueryParams({
          time_zone: timeZone.toString()
        });
      })();
    }
    /**
     * Retrieves the timezone abbreviation with the region and city for the given zone.
     *
     * @returns
     */
    getTimeZoneWithOffset() {
      const zone = this._timeZoneService.currentTimeZone;
      let region = '';
      let city = '';
      // Split the zone into region and city if it contains '/'
      if (zone.includes('/')) {
        [region, city] = zone.split('/');
        city = city.replace('_', ' '); // Replace underscores with spaces if any
      } else {
        city = zone;
      }
      // Get the timezone abbreviation
      const offset = moment_timezone__WEBPACK_IMPORTED_MODULE_0__.tz(zone).format('z');
      // Construct the return string
      return `${offset}: ${region} - ${city}`;
    }
    /**
     * Gets the time zone based on the selected time zone.
     *
     * @returns The time zone string.
     */
    getMomentTimezone(zone) {
      const defaultTimeZone = 'Etc/UTC';
      let timeZone;
      switch (zone) {
        case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__/* .TimeZoneEnum */ .zG.MINE_TIMEZONE:
          timeZone = this._store.user?.timeZone || moment_timezone__WEBPACK_IMPORTED_MODULE_0__.tz.guess();
          break;
        case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__/* .TimeZoneEnum */ .zG.ORG_TIMEZONE:
          timeZone = this._store.selectedOrganization?.timeZone || defaultTimeZone;
          break;
        case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__/* .TimeZoneEnum */ .zG.UTC_TIMEZONE:
        default:
          timeZone = defaultTimeZone;
          break;
      }
      return timeZone;
    }
    /**
     * Checks if the current user has the permission to change the selected employee.
     *
     * @returns A boolean indicating if the user has the CHANGE_SELECTED_EMPLOYEE permission.
     */
    hasChangeSelectedEmployeePermission() {
      return this._store.hasPermission(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_11__/* .PermissionsEnum */ .U.CHANGE_SELECTED_EMPLOYEE);
    }
    /**
     * Closes the popover.
     * This method is triggered by a click event on the popover button
     * and hides the popover using the NbPopoverDirective's hide method.
     */
    closePopover() {
      this.popover.hide();
    }
    /**
     *
     */
    ngOnDestroy() {}
    static {
      this.ɵfac = function TimezoneFilterComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || TimezoneFilterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__/* .TranslateService */ .c$), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_router__WEBPACK_IMPORTED_MODULE_13__/* .ActivatedRoute */ .nX), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_14__/* .Store */ .il), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_15__/* .NavigationService */ .o), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_time_zone_service__WEBPACK_IMPORTED_MODULE_16__/* .TimeZoneService */ .F));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineComponent"] */ .VBU({
        type: TimezoneFilterComponent,
        selectors: [["ga-timezone-filter"]],
        viewQuery: function TimezoneFilterComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵviewQuery"] */ .GBs(_c0, 7);
          }
          if (rf & 2) {
            let _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵqueryRefresh"] */ .mGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵloadQuery"] */ .lsd()) && (ctx.popover = _t.first);
          }
        },
        inputs: {
          isTimezone: "isTimezone",
          isTimeFormat: "isTimeFormat"
        },
        outputs: {
          timeZoneChange: "timeZoneChange",
          timeFormatChange: "timeFormatChange"
        },
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
        decls: 8,
        vars: 3,
        consts: [["popover", "nbPopover"], ["nbPopoverTemplate", ""], ["nbButton", "", "size", "small", "status", "basic", "nbPopoverPlacement", "bottom", "nbPopoverTrigger", "click", 1, "popover-button", 3, "nbPopover"], [3, "ngIf"], ["icon", "more-vertical-outline"], [1, "popover-body"], [4, "ngIf"], [1, "category"], [1, "view"], [4, "ngFor", "ngForOf"], [1, "title", 3, "click"], [1, "fas", "fa-check", 3, "ngStyle"], [1, "line"]],
        template: function TimezoneFilterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "button", 2, 0)(2, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(3, TimezoneFilterComponent_ng_template_3_Template, 1, 1, "ng-template", 3)(4, TimezoneFilterComponent_ng_template_4_Template, 1, 1, "ng-template", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(5, "nb-icon", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(6, TimezoneFilterComponent_ng_template_6_Template, 3, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplateRefExtractor"] */ .C5r);
          }
          if (rf & 2) {
            const nbPopoverTemplate_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵreference"] */ .sdS(7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("nbPopover", nbPopoverTemplate_r6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.isTimezone);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.isTimeFormat);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_17__/* .NgForOf */ .Sq, _angular_common__WEBPACK_IMPORTED_MODULE_17__/* .NgIf */ .bT, _angular_common__WEBPACK_IMPORTED_MODULE_17__/* .NgStyle */ .B3, _nebular_theme__WEBPACK_IMPORTED_MODULE_18__/* .NbButtonComponent */ .YP2, _nebular_theme__WEBPACK_IMPORTED_MODULE_18__/* .NbIconComponent */ .tHu, _nebular_theme__WEBPACK_IMPORTED_MODULE_18__/* .NbPopoverDirective */ .vs7, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__/* .TranslatePipe */ .D9],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   .popover-button[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 400;\n}\n[_nghost-%COMP%]   .popover-button[nbButton][_ngcontent-%COMP%] {\n  color: var(--gauzy-text-color-1);\n  background-color: var(--gauzy-card-1);\n}\n[_nghost-%COMP%]   .popover-button[_ngcontent-%COMP%]   nb-icon[_ngcontent-%COMP%] {\n  height: 11px;\n  width: 11px;\n}\n\n.popover-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  padding: 10px;\n  gap: 10px;\n  min-width: 150px;\n}\n.popover-body[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 10px;\n  width: 100%;\n}\n.popover-body[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%]   .view[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 600;\n  line-height: 12px;\n  letter-spacing: 0em;\n  color: rgba(126, 126, 143, 0.5);\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n  gap: 1rem;\n  width: 100%;\n}\n.popover-body[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 12px;\n  letter-spacing: 0em;\n  color: var(--gauzy-text-color-2);\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  cursor: pointer;\n  width: 100%;\n}\n.popover-body[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%] {\n  border-bottom: 0.5px solid rgba(126, 126, 143, 0.25);\n  width: 100%;\n}"]
      });
    }
  };
  TimezoneFilterComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_19__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__/* .UntilDestroy */ .d)({
    checkProperties: true
  }), (0,tslib__WEBPACK_IMPORTED_MODULE_19__/* .__metadata */ .Sn)("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__/* .TranslateService */ .c$, _angular_router__WEBPACK_IMPORTED_MODULE_13__/* .ActivatedRoute */ .nX, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_14__/* .Store */ .il, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_15__/* .NavigationService */ .o, _time_zone_service__WEBPACK_IMPORTED_MODULE_16__/* .TimeZoneService */ .F])], TimezoneFilterComponent);
  return TimezoneFilterComponent;
})();


/***/ })

}]);