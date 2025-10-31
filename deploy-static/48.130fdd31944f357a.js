"use strict";
(self["webpackChunkgauzy"] = self["webpackChunkgauzy"] || []).push([[48],{

/***/ 21160:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   i: () => (/* binding */ ProgressStatusModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14572);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56383);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);



let ProgressStatusModule = /*#__PURE__*/(() => {
  class ProgressStatusModule {
    static {
      this.ɵfac = function ProgressStatusModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || ProgressStatusModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .$C({
        type: ProgressStatusModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .CommonModule */ .MD, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbProgressBarModule */ .XYW]
      });
    }
  }
  return ProgressStatusModule;
})();

/***/ }),

/***/ 35836:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G: () => (/* binding */ TimezoneFilterModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14572);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56383);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19223);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);





let TimezoneFilterModule = /*#__PURE__*/(() => {
  class TimezoneFilterModule {
    static {
      this.ɵfac = function TimezoneFilterModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || TimezoneFilterModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .$C({
        type: TimezoneFilterModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .CommonModule */ .MD, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbButtonModule */ .P5N, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbIconModule */ .clu, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbPopoverModule */ .Ofb, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__/* .TranslateModule */ .h.forChild()]
      });
    }
  }
  return TimezoneFilterModule;
})();

/***/ }),

/***/ 42071:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   r: () => (/* binding */ TimeLimitReportRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(908);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(60559);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20433);
/* harmony import */ var _time_limit_report_time_limit_report_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(97860);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26860);






const routes = [{
  path: '',
  component: _time_limit_report_time_limit_report_component__WEBPACK_IMPORTED_MODULE_0__/* .TimeLimitReportComponent */ .Y,
  data: {
    duration: 'day',
    title: 'REPORT_PAGE.DAILY_LIMIT_REPORT',
    datePicker: {
      unitOfTime: 'week'
    }
  },
  resolve: {
    dates: _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_1__/* .DateRangePickerResolver */ .Q,
    bookmarkParams: _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_2__/* .BookmarkQueryParamsResolver */ .x
  }
}];
let TimeLimitReportRoutingModule = /*#__PURE__*/(() => {
  class TimeLimitReportRoutingModule {
    static {
      this.ɵfac = function TimeLimitReportRoutingModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || TimeLimitReportRoutingModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdefineNgModule"] */ .$C({
        type: TimeLimitReportRoutingModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__/* .RouterModule */ .iI.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_4__/* .RouterModule */ .iI]
      });
    }
  }
  return TimeLimitReportRoutingModule;
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

/***/ 72991:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ ProjectColumnViewModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14572);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19223);
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(38834);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);





let ProjectColumnViewModule = /*#__PURE__*/(() => {
  class ProjectColumnViewModule {
    static {
      this.ɵfac = function ProjectColumnViewModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || ProjectColumnViewModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .$C({
        type: ProjectColumnViewModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .CommonModule */ .MD, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__/* .TranslateModule */ .h.forChild(), _shared_module__WEBPACK_IMPORTED_MODULE_3__/* .SharedModule */ .G]
      });
    }
  }
  return ProjectColumnViewModule;
})();

/***/ }),

/***/ 76339:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   J: () => (/* binding */ LineChartModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14572);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56383);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19223);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);





let LineChartModule = /*#__PURE__*/(() => {
  class LineChartModule {
    static {
      this.ɵfac = function LineChartModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || LineChartModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .$C({
        type: LineChartModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .CommonModule */ .MD, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbIconModule */ .clu, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__/* .TranslateModule */ .h.forChild()]
      });
    }
  }
  return LineChartModule;
})();

/***/ }),

/***/ 78822:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TimeLimitReportModule: () => (/* binding */ TimeLimitReportModule)
/* harmony export */ });
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(56383);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19223);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38834);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(76339);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(21160);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(61801);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(72991);
/* harmony import */ var _time_limit_report_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42071);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26860);






let TimeLimitReportModule = /*#__PURE__*/(() => {
  class TimeLimitReportModule {
    static {
      this.ɵfac = function TimeLimitReportModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || TimeLimitReportModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineNgModule"] */ .$C({
        type: TimeLimitReportModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [_time_limit_report_routing_module__WEBPACK_IMPORTED_MODULE_0__/* .TimeLimitReportRoutingModule */ .r, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_2__/* .SharedModule */ .G, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__/* .TranslateModule */ .h.forChild(), _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbIconModule */ .clu, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbSpinnerModule */ .gYs, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbCardModule */ .lVF, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbSelectModule */ .VcP, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_5__/* .LineChartModule */ .J, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_6__/* .ProgressStatusModule */ .i, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_7__/* .GauzyFiltersModule */ .Q, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_8__/* .ProjectColumnViewModule */ .R]
      });
    }
  }
  return TimeLimitReportModule;
})();

/***/ }),

/***/ 84080:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: () => (/* binding */ ProjectColumnViewComponent)
/* harmony export */ });
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64913);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14572);
/* harmony import */ var _directives_img_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71466);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19223);





function ProjectColumnViewComponent_div_0_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(0, "img", 9);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("src", ctx_r0.project == null ? null : ctx_r0.project.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵsanitizeUrl"] */ .B4B);
  }
}
function ProjectColumnViewComponent_div_0_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(0, "img", 10);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("src", ctx_r0.fallbackSvg, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵsanitizeUrl"] */ .B4B);
  }
}
function ProjectColumnViewComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 3)(1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(2, ProjectColumnViewComponent_div_0_ng_template_2_Template, 1, 1, "ng-template", 5)(3, ProjectColumnViewComponent_div_0_ng_template_3_Template, 1, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplateRefExtractor"] */ .C5r);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(5, "div", 6)(6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(8, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
  }
  if (rf & 2) {
    const noImageEl_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(4);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r0.project == null ? null : ctx_r0.project.imageUrl)("ngIfElse", noImageEl_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("title", ctx_r0.project == null ? null : ctx_r0.project.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI("", ctx_r0.project == null ? null : ctx_r0.project.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI("Members count ", ctx_r0.project == null ? null : ctx_r0.project.membersCount, "");
  }
}
function ProjectColumnViewComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(2, 1, "REPORT_PAGE.NO_PROJECT"));
  }
}
let ProjectColumnViewComponent = /*#__PURE__*/(() => {
  class ProjectColumnViewComponent {
    constructor() {
      this.fallbackSvg = _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .DEFAULT_SVG */ .pv;
    }
    static {
      this.ɵfac = function ProjectColumnViewComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || ProjectColumnViewComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: ProjectColumnViewComponent,
        selectors: [["ga-project-column-view"]],
        inputs: {
          project: "project"
        },
        standalone: false,
        decls: 3,
        vars: 2,
        consts: [["noProject", ""], ["noImageEl", ""], ["class", "single-project-template", 4, "ngIf", "ngIfElse"], [1, "single-project-template"], [1, "logo-wrapper"], [3, "ngIf", "ngIfElse"], [1, "headers-wrapper"], [1, "main-header", 3, "title"], [1, "employees-count"], ["draggable", "false", 3, "src"], ["draggable", "false", 1, "default-image", 3, "src"]],
        template: function ProjectColumnViewComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(0, ProjectColumnViewComponent_div_0_Template, 10, 5, "div", 2)(1, ProjectColumnViewComponent_ng_template_1_Template, 3, 3, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplateRefExtractor"] */ .C5r);
          }
          if (rf & 2) {
            const noProject_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.project)("ngIfElse", noProject_r3);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__/* .NgIf */ .bT, _directives_img_directive__WEBPACK_IMPORTED_MODULE_3__/* .ImgDirective */ .z, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__/* .TranslatePipe */ .D9],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%] {\n  width: 100%;\n}\n[_nghost-%COMP%]   .single-project-template[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding-top: 5px;\n}\n[_nghost-%COMP%]   .single-project-template[_ngcontent-%COMP%]   .logo-wrapper[_ngcontent-%COMP%] {\n  min-width: 28px;\n  min-height: 28px;\n  width: 28px;\n  height: 28px;\n}\n[dir=rtl]   [_nghost-%COMP%]   .single-project-template[_ngcontent-%COMP%]   .logo-wrapper[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n[dir=ltr]   [_nghost-%COMP%]   .single-project-template[_ngcontent-%COMP%]   .logo-wrapper[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n[_nghost-%COMP%]   .single-project-template[_ngcontent-%COMP%]   .logo-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  border-radius: var(--border-radius);\n  box-shadow: var(--gauzy-shadow) 0, 0, 0, 0.15;\n}\n[_nghost-%COMP%]   .single-project-template[_ngcontent-%COMP%]   .headers-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n[_nghost-%COMP%]   .single-project-template[_ngcontent-%COMP%]   .headers-wrapper[_ngcontent-%COMP%]   .main-header[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 17px;\n  letter-spacing: 0em;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n[_nghost-%COMP%]   .single-project-template[_ngcontent-%COMP%]   .headers-wrapper[_ngcontent-%COMP%]   .employees-count[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 13px;\n  letter-spacing: 0em;\n}"]
      });
    }
  }
  return ProjectColumnViewComponent;
})();

/***/ }),

/***/ 89294:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* binding */ ProgressStatusComponent)
/* harmony export */ });
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26024);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26860);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56383);



let ProgressStatusComponent = /*#__PURE__*/(() => {
  class ProgressStatusComponent {
    get percentage() {
      return this._percentage;
    }
    set percentage(value) {
      this._percentage = value;
    }
    get defaultStatus() {
      return this._defaultStatus;
    }
    set defaultStatus(value) {
      this._defaultStatus = value;
    }
    constructor() {
      this.progressStatus = _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_0__/* .progressStatus */ .Ux;
    }
    ngOnInit() {}
    static {
      this.ɵfac = function ProgressStatusComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || ProgressStatusComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineComponent"] */ .VBU({
        type: ProgressStatusComponent,
        selectors: [["ngx-progress-status"]],
        inputs: {
          percentage: "percentage",
          defaultStatus: "defaultStatus"
        },
        standalone: false,
        decls: 5,
        vars: 4,
        consts: [[1, "wrapper"], [1, "percentage-col"], [1, "progress-col"], ["size", "tiny", 3, "value", "status", "displayValue"]],
        template: function ProgressStatusComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "div", 0)(1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(3, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(4, "nb-progress-bar", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI("", ctx.percentage, "%");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("value", ctx.percentage)("status", ctx.defaultStatus ? ctx.defaultStatus : ctx.progressStatus(ctx.percentage))("displayValue", true);
          }
        },
        dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbProgressBarComponent */ .c0m],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n[_nghost-%COMP%] {\n  display: block;\n}\n[_nghost-%COMP%]   .percentage-col[_ngcontent-%COMP%] {\n  width: 90px;\n}\n[_nghost-%COMP%]     nb-progress-bar .progress-container {\n  height: 5px !important;\n}\n[_nghost-%COMP%]     nb-progress-bar .progress-value span {\n  display: none;\n}\n\n.report-progress[_nghost-%COMP%], .report-progress   [_nghost-%COMP%] {\n  width: 100%;\n}\n.report-progress[_nghost-%COMP%]   .percentage-col[_ngcontent-%COMP%], .report-progress   [_nghost-%COMP%]   .percentage-col[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  width: 60px;\n}\n.report-progress[_nghost-%COMP%]   .progress-col[_ngcontent-%COMP%], .report-progress   [_nghost-%COMP%]   .progress-col[_ngcontent-%COMP%] {\n  width: 75%;\n  display: flex;\n  align-items: flex-end;\n}\n.report-progress[_nghost-%COMP%]     .progress-container, .report-progress   [_nghost-%COMP%]     .progress-container {\n  height: 10px !important;\n}\n.report-progress[_nghost-%COMP%]     nb-progress-bar, .report-progress   [_nghost-%COMP%]     nb-progress-bar {\n  width: 100%;\n}\n.report-progress[_nghost-%COMP%]   .wrapper[_ngcontent-%COMP%], .report-progress   [_nghost-%COMP%]   .wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n}\n\n@media only screen and (max-width: 480px) {\n  .wrapper[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n}"]
      });
    }
  }
  return ProgressStatusComponent;
})();

/***/ }),

/***/ 97860:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Y: () => (/* binding */ TimeLimitReportComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(73014);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(64411);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9620);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(23423);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73246);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(72781);
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(78543);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(19223);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(26024);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(77020);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(71924);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(93697);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(28822);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46915);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(60166);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(6195);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(14572);
/* harmony import */ var _packages_ui_core_shared_src_lib_components_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(32386);
/* harmony import */ var _packages_ui_core_shared_src_lib_components_date_range_title_date_range_title_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(2538);
/* harmony import */ var _packages_ui_core_shared_src_lib_components_header_title_header_title_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(49072);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(56383);
/* harmony import */ var _packages_ui_core_shared_src_lib_progress_status_progress_status_progress_status_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(89294);
/* harmony import */ var _packages_ui_core_shared_src_lib_report_project_column_view_project_column_view_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(84080);
/* harmony import */ var _packages_ui_core_shared_src_lib_pipes_date_format_pipe__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(11031);
/* harmony import */ var _packages_ui_core_shared_src_lib_pipes_duration_format_pipe__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(33867);


























const _c0 = a0 => ({
  $implicit: a0
});
function TimeLimitReportComponent_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "ngx-date-range-title", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("start", ctx_r1.request == null ? null : ctx_r1.request.startDate)("end", ctx_r1.request == null ? null : ctx_r1.request.endDate)("format", "dddd, LL");
  }
}
function TimeLimitReportComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(0, "div", 24);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("nbSpinner", ctx_r1.loading)("nbSpinnerSize", "giant")("nbSpinnerStatus", "primary");
  }
}
function TimeLimitReportComponent_ng_template_17_nb_card_0_div_5_ng_template_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainer"] */ .eu8(0);
  }
}
function TimeLimitReportComponent_ng_template_17_nb_card_0_div_5_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(0, TimeLimitReportComponent_ng_template_17_nb_card_0_div_5_ng_template_2_ng_container_0_Template, 1, 0, "ng-container", 35);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(4);
    const weeklyHeadings_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngTemplateOutlet", weeklyHeadings_r3);
  }
}
function TimeLimitReportComponent_ng_template_17_nb_card_0_div_5_ng_template_3_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainer"] */ .eu8(0);
  }
}
function TimeLimitReportComponent_ng_template_17_nb_card_0_div_5_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(0, TimeLimitReportComponent_ng_template_17_nb_card_0_div_5_ng_template_3_ng_container_0_Template, 1, 0, "ng-container", 35);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(4);
    const dailyHeadings_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngTemplateOutlet", dailyHeadings_r4);
  }
}
function TimeLimitReportComponent_ng_template_17_nb_card_0_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 32)(1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(2, TimeLimitReportComponent_ng_template_17_nb_card_0_div_5_ng_template_2_Template, 1, 1, "ng-template", 34)(3, TimeLimitReportComponent_ng_template_17_nb_card_0_div_5_ng_template_3_Template, 1, 1, "ng-template", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r1.duration === "week");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r1.duration === "day");
  }
}
function TimeLimitReportComponent_ng_template_17_nb_card_0_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(2, 1, "REPORT_PAGE.NO_EMPLOYEES_WORKED"), " ");
  }
}
function TimeLimitReportComponent_ng_template_17_nb_card_0_div_9_ng_template_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainer"] */ .eu8(0);
  }
}
function TimeLimitReportComponent_ng_template_17_nb_card_0_div_9_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(0, TimeLimitReportComponent_ng_template_17_nb_card_0_div_9_ng_template_2_ng_container_0_Template, 1, 0, "ng-container", 39);
  }
  if (rf & 2) {
    const timeLogRow_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(3);
    const weeklyTable_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngTemplateOutlet", weeklyTable_r6)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction1"] */ .eq3(2, _c0, timeLogRow_r5));
  }
}
function TimeLimitReportComponent_ng_template_17_nb_card_0_div_9_ng_template_3_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainer"] */ .eu8(0);
  }
}
function TimeLimitReportComponent_ng_template_17_nb_card_0_div_9_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(0, TimeLimitReportComponent_ng_template_17_nb_card_0_div_9_ng_template_3_ng_container_0_Template, 1, 0, "ng-container", 39);
  }
  if (rf & 2) {
    const timeLogRow_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(3);
    const dailyTable_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngTemplateOutlet", dailyTable_r7)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction1"] */ .eq3(2, _c0, timeLogRow_r5));
  }
}
function TimeLimitReportComponent_ng_template_17_nb_card_0_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 37)(1, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(2, TimeLimitReportComponent_ng_template_17_nb_card_0_div_9_ng_template_2_Template, 1, 4, "ng-template", 34)(3, TimeLimitReportComponent_ng_template_17_nb_card_0_div_9_ng_template_3_Template, 1, 4, "ng-template", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r1.duration === "week");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r1.duration === "day");
  }
}
function TimeLimitReportComponent_ng_template_17_nb_card_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-card", 26)(1, "nb-card-header", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(3, "dateFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(4, "nb-card-body", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(5, TimeLimitReportComponent_ng_template_17_nb_card_0_div_5_Template, 4, 2, "div", 29)(6, TimeLimitReportComponent_ng_template_17_nb_card_0_ng_template_6_Template, 3, 3, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplateRefExtractor"] */ .C5r);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(8, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(9, TimeLimitReportComponent_ng_template_17_nb_card_0_div_9_Template, 4, 2, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
  }
  if (rf & 2) {
    const day_r8 = ctx.$implicit;
    const noEmployees_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(3, 4, day_r8.date), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", (day_r8.employees == null ? null : day_r8.employees.length) > 0)("ngIfElse", noEmployees_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngForOf", day_r8.employees);
  }
}
function TimeLimitReportComponent_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(0, TimeLimitReportComponent_ng_template_17_nb_card_0_Template, 10, 6, "nb-card", 25);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx_r1.dailyData);
  }
}
function TimeLimitReportComponent_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-card")(1, "nb-card-body")(2, "div", 40)(3, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(5, 1, "REPORT_PAGE.NO_EMPLOYEES"), " ");
  }
}
function TimeLimitReportComponent_ng_template_20_ga_project_column_view_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(0, "ga-project-column-view", 43);
  }
  if (rf & 2) {
    const project_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("project", project_r10);
  }
}
function TimeLimitReportComponent_ng_template_20_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(2, 1, "REPORT_PAGE.NO_PROJECT"));
  }
}
function TimeLimitReportComponent_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(0, TimeLimitReportComponent_ng_template_20_ga_project_column_view_0_Template, 1, 1, "ga-project-column-view", 42)(1, TimeLimitReportComponent_ng_template_20_ng_template_1_Template, 3, 3, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplateRefExtractor"] */ .C5r);
  }
  if (rf & 2) {
    const project_r10 = ctx.$implicit;
    const noProjects_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", project_r10)("ngIfElse", noProjects_r11);
  }
}
function TimeLimitReportComponent_ng_template_22_span_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const task_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI("", task_r12 == null ? null : task_r12.title, " ");
  }
}
function TimeLimitReportComponent_ng_template_22_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(2, 1, "REPORT_PAGE.NO_TASK"));
  }
}
function TimeLimitReportComponent_ng_template_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(0, TimeLimitReportComponent_ng_template_22_span_0_Template, 2, 1, "span", 44)(1, TimeLimitReportComponent_ng_template_22_ng_template_1_Template, 3, 3, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplateRefExtractor"] */ .C5r);
  }
  if (rf & 2) {
    const task_r12 = ctx.$implicit;
    const noTaSK_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", task_r12)("ngIfElse", noTaSK_r13);
  }
}
function TimeLimitReportComponent_ng_template_24_ngx_avatar_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(0, "ngx-avatar", 47);
  }
  if (rf & 2) {
    const employee_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("src", employee_r14 == null ? null : employee_r14.user == null ? null : employee_r14.user.imageUrl)("name", employee_r14 == null ? null : employee_r14.user == null ? null : employee_r14.user.name)("id", employee_r14 == null ? null : employee_r14.id)("employee", employee_r14);
  }
}
function TimeLimitReportComponent_ng_template_24_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(2, 1, "REPORT_PAGE.NO_EMPLOYEE"));
  }
}
function TimeLimitReportComponent_ng_template_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, TimeLimitReportComponent_ng_template_24_ngx_avatar_1_Template, 1, 4, "ngx-avatar", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(2, TimeLimitReportComponent_ng_template_24_ng_template_2_Template, 3, 3, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplateRefExtractor"] */ .C5r);
  }
  if (rf & 2) {
    const employee_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", employee_r14);
  }
}
function TimeLimitReportComponent_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(3, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(6, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(9, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(12, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(2, 5, "REPORT_PAGE.EMPLOYEE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(5, 7, "REPORT_PAGE.LIMIT"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(8, 9, "REPORT_PAGE.SPENT_HOURS"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(11, 11, "REPORT_PAGE.ACTIVITY"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(14, 13, "REPORT_PAGE.REMAINING_HOURS"), " ");
  }
}
function TimeLimitReportComponent_ng_template_28_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainer"] */ .eu8(0);
  }
}
function TimeLimitReportComponent_ng_template_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 48)(1, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(4, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(5, TimeLimitReportComponent_ng_template_28_ng_container_5_Template, 1, 0, "ng-container", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(6, "div", 49)(7, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(10, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(12, "durationFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(13, "div", 50)(14, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(17, "div", 54)(18, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(20, "durationFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(21, "div", 51)(22, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(24, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(25, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(26, "ngx-progress-status", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(27, "div", 57)(28, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(30, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(31, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(33, "durationFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const timeLogRow_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    const employeeEl_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(3, 11, "REPORT_PAGE.EMPLOYEE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngTemplateOutlet", employeeEl_r16)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction1"] */ .eq3(27, _c0, timeLogRow_r15 == null ? null : timeLogRow_r15.employee));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(9, 13, "REPORT_PAGE.LIMIT"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(12, 15, timeLogRow_r15.limit), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(16, 17, "REPORT_PAGE.SPENT_HOURS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(20, 19, timeLogRow_r15.duration));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(24, 21, "REPORT_PAGE.ACTIVITY"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("percentage", timeLogRow_r15.durationPercentage);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(30, 23, "REPORT_PAGE.TO_DO"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", timeLogRow_r15.limit - timeLogRow_r15.duration > 0 ? _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(33, 25, timeLogRow_r15.limit - timeLogRow_r15.duration) : 0, " ");
  }
}
function TimeLimitReportComponent_ng_template_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(3, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(6, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(9, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(12, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(2, 5, "REPORT_PAGE.EMPLOYEE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(5, 7, "REPORT_PAGE.ACTIVITY"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" 8 ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(8, 9, "REPORT_PAGE.SPENT_HOURS"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(11, 11, "REPORT_PAGE.REMAINING_HOURS"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(14, 13, "REPORT_PAGE.LIMIT"), " ");
  }
}
function TimeLimitReportComponent_ng_template_32_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainer"] */ .eu8(0);
  }
}
function TimeLimitReportComponent_ng_template_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 48)(1, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(4, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(5, TimeLimitReportComponent_ng_template_32_ng_container_5_Template, 1, 0, "ng-container", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(6, "div", 51)(7, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(10, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(11, "ngx-progress-status", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(12, "div", 50)(13, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(16, "div", 54)(17, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(19, "durationFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(20, "div", 52)(21, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(23, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(24, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(26, "durationFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(27, "div", 49)(28, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(30, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(31, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(33, "durationFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const timeLogRow_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    const employeeEl_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(3, 11, "REPORT_PAGE.EMPLOYEE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngTemplateOutlet", employeeEl_r16)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction1"] */ .eq3(27, _c0, timeLogRow_r17 == null ? null : timeLogRow_r17.employee));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(9, 13, "REPORT_PAGE.ACTIVITY"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("percentage", timeLogRow_r17.durationPercentage);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(15, 15, "REPORT_PAGE.SPENT_HOURS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(19, 17, timeLogRow_r17.duration));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(23, 19, "REPORT_PAGE.TO_DO"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", timeLogRow_r17.limit - timeLogRow_r17.duration > 0 ? _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(26, 21, timeLogRow_r17.limit - timeLogRow_r17.duration) : 0, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(30, 23, "REPORT_PAGE.LIMIT"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(33, 25, timeLogRow_r17.limit), " ");
  }
}
let TimeLimitReportComponent = class TimeLimitReportComponent extends _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_1__/* .BaseSelectorFilterComponent */ .U {
  constructor(cd, activatedRoute, timesheetService, translateService, store, timesheetFilterService, dateRangePickerBuilderService, timeZoneService) {
    super(store, translateService, dateRangePickerBuilderService, timeZoneService);
    this.cd = cd;
    this.activatedRoute = activatedRoute;
    this.timesheetService = timesheetService;
    this.translateService = translateService;
    this.store = store;
    this.timesheetFilterService = timesheetFilterService;
    this.dateRangePickerBuilderService = dateRangePickerBuilderService;
    this.timeZoneService = timeZoneService;
    this.loading = false;
    this.datePickerConfig$ = this.dateRangePickerBuilderService.datePickerConfig$;
    this.payloads$ = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__/* .BehaviorSubject */ .t(null);
  }
  ngOnInit() {
    this.activatedRoute.data.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .tap */ .M)(data => {
      this.duration = data.duration || 'day';
      this.title = data.title;
    }), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .untilDestroyed */ .s)(this)).subscribe();
    this.subject$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .filter */ .p)(() => !!this.organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .tap */ .M)(() => this.prepareRequest()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .untilDestroyed */ .s)(this)).subscribe();
    this.payloads$.pipe((0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_6__/* .distinctUntilChange */ .nI)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .filter */ .p)(payloads => !!payloads), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .tap */ .M)(() => this.getTimeLimitReport()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .untilDestroyed */ .s)(this)).subscribe();
  }
  ngAfterViewInit() {
    this.cd.detectChanges();
  }
  /**
   * Get header selectors request and Gauzy timesheet filters request.
   */
  prepareRequest() {
    if ((0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_6__/* .isEmpty */ .Im)(this.request) || (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_6__/* .isEmpty */ .Im)(this.filters)) {
      return;
    }
    // Create a request object of type IGetTimeLimitReportInput
    const request = {
      ...this.getFilterRequest(this.request),
      duration: this.duration
    };
    // Notify subscribers about the filter change
    this.payloads$.next(request);
  }
  /**
   * Updates Gauzy timesheet default filters, saves the filters if configured to do so,
   * and notifies subscribers about the change.
   *
   * @param filters - An object representing time log filters (ITimeLogFilters).
   */
  filtersChange(filters) {
    // Save filters to the timesheetFilterService if configured to do so
    if (this.gauzyFiltersComponent.saveFilters) {
      this.timesheetFilterService.filter = filters;
    }
    // Create a shallow copy of the filters and update the class property
    this.filters = {
      ...filters
    };
    // Notify subscribers about the filter change
    this.subject$.next(true);
  }
  /**
   * Retrieves time limit reports, updates the 'dailyData' property, and handles loading state.
   *
   * @returns
   */
  getTimeLimitReport() {
    var _this = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A)(function* () {
      // Check if organization or request is not provided, resolve the Promise without further action
      if (!_this.organization || (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_6__/* .isEmpty */ .Im)(_this.request)) {
        return;
      }
      // Set the loading flag to true
      _this.loading = true;
      try {
        // Get the current payloads from the observable
        const payloads = _this.payloads$.getValue();
        // Fetch the time limit report data from the timesheetService
        _this.dailyData = yield _this.timesheetService.getTimeLimit(payloads);
      } catch (error) {
        // Log any errors during the process
        console.error(`Error while retrieving ${_this.title} time limit report`, error);
      } finally {
        // Set the loading flag to false, regardless of success or failure
        _this.loading = false;
      }
    })();
  }
  static {
    this.ɵfac = function TimeLimitReportComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || TimeLimitReportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* .ChangeDetectorRef */ .gRc), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_router__WEBPACK_IMPORTED_MODULE_8__/* .ActivatedRoute */ .nX), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_9__/* .TimesheetService */ .k), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__/* .TranslateService */ .c$), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_11__/* .Store */ .il), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_12__/* .TimesheetFilterService */ .WG), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_13__/* .DateRangePickerBuilderService */ .i7), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_14__/* .TimeZoneService */ .F));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
      type: TimeLimitReportComponent,
      selectors: [["ga-time-limit-report"]],
      viewQuery: function TimeLimitReportComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵviewQuery"] */ .GBs(_gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_15__/* .GauzyFiltersComponent */ .n, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵqueryRefresh"] */ .mGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵloadQuery"] */ .lsd()) && (ctx.gauzyFiltersComponent = _t.first);
        }
      },
      standalone: false,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
      decls: 34,
      vars: 11,
      consts: [["notFound", ""], ["projectEl", ""], ["taskEl", ""], ["employeeEl", ""], ["weeklyHeadings", ""], ["weeklyTable", ""], ["dailyHeadings", ""], ["dailyTable", ""], ["noEmployees", ""], ["noProjects", ""], ["noTaSK", ""], ["noEmployee", ""], [1, "card-scroll"], [1, "row"], [1, "col-auto"], [4, "ngIf"], [1, "col-auto", "ml-auto"], [3, "filtersChange", "filters", "saveFilters"], [1, "report-body"], [1, "report-container"], [1, "table"], ["class", "time-logs row-table", 3, "nbSpinner", "nbSpinnerSize", "nbSpinnerStatus", 4, "ngIf"], [3, "ngIf", "ngIfElse"], [3, "start", "end", "format"], [1, "time-logs", "row-table", 3, "nbSpinner", "nbSpinnerSize", "nbSpinnerStatus"], ["class", "card", 4, "ngFor", "ngForOf"], [1, "card"], [1, "card-title"], [1, "budget-container"], ["class", "columns-header", 4, "ngIf", "ngIfElse"], [1, "cart-body", "project-row"], ["class", "table-row", 4, "ngFor", "ngForOf"], [1, "columns-header"], [1, "table-inner-wrapper", "font-weight-bold", "align-items-center"], [3, "ngIf"], [4, "ngTemplateOutlet"], [1, "ml-3"], [1, "table-row"], [1, "table-inner-wrapper"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "row", "font-weight-bold", "py-5", "align-items-center"], [1, "col", "text-center"], [3, "project", 4, "ngIf", "ngIfElse"], [3, "project"], [4, "ngIf", "ngIfElse"], [1, "avatar-wrapper-outer"], ["class", "report-table", 3, "src", "name", "id", "employee", 4, "ngIf"], [1, "report-table", 3, "src", "name", "id", "employee"], [1, "responsive-table-row", "employee-column"], [1, "responsive-table-row", "limit-column"], [1, "responsive-table-row", "spent-column"], [1, "responsive-table-row", "activity-column"], [1, "responsive-table-row", "remaining-column"], [1, "responsive-table-header"], [1, "responsive-table-content", "project-name"], [1, "duration-span"], ["defaultStatus", "success", 1, "w-100", "report-progress", 3, "percentage"], [1, "responsive-table-row", "remaining-column", "remaining-content"], [1, "responsive-table-content", "day-col"]],
      template: function TimeLimitReportComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-card", 12)(1, "nb-card-header")(2, "div", 13)(3, "div", 14)(4, "h4")(5, "ngx-header-title");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(7, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(8, TimeLimitReportComponent_ng_container_8_Template, 2, 3, "ng-container", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(9, "div", 13)(10, "div", 16)(11, "ngx-gauzy-filters", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(12, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("filtersChange", function TimeLimitReportComponent_Template_ngx_gauzy_filters_filtersChange_11_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx.filtersChange($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(13, "nb-card-body", 18)(14, "div", 19)(15, "div", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(16, TimeLimitReportComponent_div_16_Template, 1, 3, "div", 21)(17, TimeLimitReportComponent_ng_template_17_Template, 1, 1, "ng-template", 22)(18, TimeLimitReportComponent_ng_template_18_Template, 6, 3, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplateRefExtractor"] */ .C5r);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(20, TimeLimitReportComponent_ng_template_20_Template, 3, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplateRefExtractor"] */ .C5r)(22, TimeLimitReportComponent_ng_template_22_Template, 3, 2, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplateRefExtractor"] */ .C5r)(24, TimeLimitReportComponent_ng_template_24_Template, 4, 1, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplateRefExtractor"] */ .C5r)(26, TimeLimitReportComponent_ng_template_26_Template, 15, 15, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplateRefExtractor"] */ .C5r)(28, TimeLimitReportComponent_ng_template_28_Template, 34, 29, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplateRefExtractor"] */ .C5r)(30, TimeLimitReportComponent_ng_template_30_Template, 15, 15, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplateRefExtractor"] */ .C5r)(32, TimeLimitReportComponent_ng_template_32_Template, 34, 29, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplateRefExtractor"] */ .C5r);
        }
        if (rf & 2) {
          const notFound_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(19);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(7, 7, ctx.title), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", (ctx.request == null ? null : ctx.request.startDate) && (ctx.request == null ? null : ctx.request.endDate));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("filters", ctx.filters)("saveFilters", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(12, 9, ctx.datePickerConfig$).isSaveDatePicker);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", (ctx.dailyData == null ? null : ctx.dailyData.length) > 0)("ngIfElse", notFound_r18);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_16__/* .NgForOf */ .Sq, _angular_common__WEBPACK_IMPORTED_MODULE_16__/* .NgIf */ .bT, _angular_common__WEBPACK_IMPORTED_MODULE_16__/* .NgTemplateOutlet */ .T3, _packages_ui_core_shared_src_lib_components_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_17__/* .AvatarComponent */ .f, _packages_ui_core_shared_src_lib_components_date_range_title_date_range_title_component__WEBPACK_IMPORTED_MODULE_18__/* .DateRangeTitleComponent */ .D, _packages_ui_core_shared_src_lib_components_header_title_header_title_component__WEBPACK_IMPORTED_MODULE_19__/* .HeaderTitleComponent */ .X, _nebular_theme__WEBPACK_IMPORTED_MODULE_20__/* .NbSpinnerDirective */ .zwc, _nebular_theme__WEBPACK_IMPORTED_MODULE_20__/* .NbCardComponent */ .SrT, _nebular_theme__WEBPACK_IMPORTED_MODULE_20__/* .NbCardBodyComponent */ .KH5, _nebular_theme__WEBPACK_IMPORTED_MODULE_20__/* .NbCardHeaderComponent */ .zJv, _packages_ui_core_shared_src_lib_progress_status_progress_status_progress_status_component__WEBPACK_IMPORTED_MODULE_21__/* .ProgressStatusComponent */ .H, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_15__/* .GauzyFiltersComponent */ .n, _packages_ui_core_shared_src_lib_report_project_column_view_project_column_view_component__WEBPACK_IMPORTED_MODULE_22__/* .ProjectColumnViewComponent */ .q, _angular_common__WEBPACK_IMPORTED_MODULE_16__/* .AsyncPipe */ .Jj, _packages_ui_core_shared_src_lib_pipes_date_format_pipe__WEBPACK_IMPORTED_MODULE_23__/* .DateFormatPipe */ .a, _packages_ui_core_shared_src_lib_pipes_duration_format_pipe__WEBPACK_IMPORTED_MODULE_24__/* .DurationFormatPipe */ .i, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__/* .TranslatePipe */ .D9],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nnb-card[_ngcontent-%COMP%], \nnb-card-body[_ngcontent-%COMP%], \n.card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n  border: none;\n}\n\n  .filter-item-list {\n  flex-wrap: nowrap !important;\n}\n  .group-by-wrapper {\n  display: inline-flex;\n  align-items: center;\n  margin-bottom: 10px;\n}\n  .group-by-wrapper .label {\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 11px;\n  letter-spacing: 0em;\n}\n  .group-by-wrapper .select-button.select-button {\n  padding: 5px 12px !important;\n  border-radius: var(--select-rectangle-border-radius);\n  height: 30px;\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 15px;\n  letter-spacing: 0em;\n  min-width: auto;\n  display: flex;\n  align-items: center;\n}\n  .group-by-wrapper .select-button.select-button nb-select.shape-rectangle .select-button {\n  border-radius: var(--border-radius);\n  box-shadow: var(--gauzy-shadow);\n  height: 42px;\n  display: flex;\n  align-items: center;\n  border: none;\n}\n  .group-by-wrapper .select-button.select-button nb-select.appearance-outline.size-medium .select-button {\n  border: none;\n}\n  .group-by-wrapper .select-button.select-button nb-select button span {\n  display: block;\n  overflow-x: hidden;\n  text-overflow: ellipsis;\n}\n  .group-by-wrapper .select-button.select-button > span {\n  margin-right: 25px;\n}\n  .action-select {\n  border-radius: var(--select-rectangle-border-radius);\n  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.15);\n  height: 30px;\n}\n  .action-select button.select-button {\n  background-color: var(--gauzy-card-1) !important;\n  border-radius: var(--select-rectangle-border-radius);\n  padding-top: 2px !important;\n  padding-bottom: 0px !important;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  padding-left: 12px !important;\n}\n  .action-select button.select-button nb-icon {\n  color: var(--text-basic-color) !important;\n}\n  .nb-options {\n  width: auto !important;\n}\n\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n  border-radius: var(--border-radius);\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   nb-card-header[_ngcontent-%COMP%], \n[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   nb-accordion-item-header[_ngcontent-%COMP%] {\n  background-color: unset;\n  margin-bottom: 0;\n  border-bottom: none;\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n}\n[_nghost-%COMP%]   nb-card-header[_ngcontent-%COMP%], \n[_nghost-%COMP%]   nb-accordion-item-header[_ngcontent-%COMP%] {\n  background-color: unset;\n  padding: 20px;\n  border-bottom: none;\n}\n[_nghost-%COMP%]   nb-accordion-item-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n[_nghost-%COMP%]   nb-accordion-item-header[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  margin: 0 2rem;\n}\n[_nghost-%COMP%]   nb-accordion-item-body[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-sidebar-background-2);\n  border-radius: 0 0 var(--border-radius) var(--border-radius);\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n  padding: 1rem;\n  border-radius: 0 0 var(--border-radius) var(--border-radius);\n}\n[_nghost-%COMP%]   nb-card-body.report-body[_ngcontent-%COMP%] {\n  overflow: unset;\n  height: calc(100% - 6rem);\n}\n[dir=ltr]   [_nghost-%COMP%]   nb-card-body.report-body[_ngcontent-%COMP%] {\n  padding: 1rem 0.5rem 1rem 18px;\n}\n[dir=rtl]   [_nghost-%COMP%]   nb-card-body.report-body[_ngcontent-%COMP%] {\n  padding: 1rem 18px 1rem 0.5rem;\n}\n[_nghost-%COMP%]   nb-card-body.report-body[_ngcontent-%COMP%]   .report-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  overflow: auto;\n  height: 100%;\n}\n[dir=ltr]   [_nghost-%COMP%]   nb-card-body.report-body[_ngcontent-%COMP%]   .report-container[_ngcontent-%COMP%] {\n  padding-right: 0.5rem;\n}\n[dir=rtl]   [_nghost-%COMP%]   nb-card-body.report-body[_ngcontent-%COMP%]   .report-container[_ngcontent-%COMP%] {\n  padding-left: 0.5rem;\n}\n[_nghost-%COMP%]   .weekly-logs[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n[_nghost-%COMP%]   .not-found[_ngcontent-%COMP%] {\n  height: 100%;\n}\n[_nghost-%COMP%]   .budget-container[_ngcontent-%COMP%] {\n  padding-bottom: 6px !important;\n}\n[_nghost-%COMP%]     nb-select.shape-rectangle .select-button {\n  border-radius: calc(var(--button-rectangle-border-radius) / 1.625);\n  box-shadow: var(--gauzy-shadow);\n  height: 2rem;\n  display: flex;\n  align-items: center;\n  border: none;\n}\n[_nghost-%COMP%]     nb-select.appearance-outline.size-medium .select-button {\n  border: none;\n}\n[_nghost-%COMP%]     nb-select button span {\n  display: block;\n  overflow-x: hidden;\n  text-overflow: ellipsis;\n}\n\n[_nghost-%COMP%]   nb-accordion[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  row-gap: 1rem;\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   nb-accordion[_ngcontent-%COMP%]     .item-body {\n  border-radius: 0 0 var(--border-radius) var(--border-radius);\n}\n\n.table[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  margin-bottom: 0;\n}\n\n.daily-time-report[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%], \n.daily-time-report[_ngcontent-%COMP%]   nb-accordion-item-body[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n}\n\n.table-row[_ngcontent-%COMP%] {\n  border-radius: var(--border-radius);\n  height: 86px;\n  background-color: var(--gauzy-card-1);\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  margin-bottom: 10px;\n  padding-top: 10px;\n  padding-bottom: 20px;\n}\n\n.table-inner-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.columns-header[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n  border-radius: 8px;\n  margin-bottom: 10px;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 15px;\n  letter-spacing: 0em;\n}\n\n.responsive-table-header[_ngcontent-%COMP%] {\n  display: none;\n}\n\n[dir=rtl]   [_nghost-%COMP%]   .responsive-table-row[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n[dir=ltr]   [_nghost-%COMP%]   .responsive-table-row[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n\n.avatar-wrapper-outer[_ngcontent-%COMP%] {\n  max-width: 95%;\n  padding-top: 5px;\n  display: inline-flex;\n}\n.avatar-wrapper-outer[_ngcontent-%COMP%]   .inner-wrapper[_ngcontent-%COMP%] {\n  display: inline-flex !important;\n}\n\n@media only screen and (max-width: 991px) {\n  [dir=ltr]   [_nghost-%COMP%]     .group-by-wrapper {\n    margin-left: 10px;\n  }\n  [dir=rtl]   [_nghost-%COMP%]     .group-by-wrapper {\n    margin-right: 10px;\n  }\n  .columns-header[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .card[_ngcontent-%COMP%]   nb-accordion-item-body[_ngcontent-%COMP%], \n   .card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n    padding-left: 0;\n    padding-right: 0;\n  }\n  .table-row[_ngcontent-%COMP%] {\n    border-radius: 0;\n    margin-bottom: 15px;\n  }\n  .responsive-table-row[_ngcontent-%COMP%] {\n    width: 100% !important;\n    min-width: auto !important;\n    max-width: unset !important;\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    margin-bottom: 10px;\n    padding: 10px;\n    border-radius: var(--border-radius);\n    border-left: 1px solid var(--border-basic-color-4);\n  }\n  .responsive-table-header[_ngcontent-%COMP%] {\n    display: block;\n    font-size: 16px;\n    font-style: normal;\n    font-weight: 600;\n    line-height: 15px;\n    letter-spacing: 0em;\n  }\n  .responsive-table-content[_ngcontent-%COMP%], \n   .responsive-table-header[_ngcontent-%COMP%] {\n    width: 50%;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n  }\n  .table-row[_ngcontent-%COMP%] {\n    height: auto;\n  }\n  .table-inner-wrapper[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n@media only screen and (max-width: 767px) {\n  [_nghost-%COMP%]     .filters-range-wrapper {\n    flex-wrap: wrap !important;\n  }\n  [_nghost-%COMP%]     .filters .main-wrapper {\n    padding-left: 0;\n    padding-right: 0;\n  }\n    .filter-item-list {\n    flex-wrap: wrap !important;\n  }\n}\n.chart[_ngcontent-%COMP%] {\n  border-radius: var(--border-radius) !important;\n}\n\n[_nghost-%COMP%]   nb-badge[_ngcontent-%COMP%] {\n  position: relative;\n  font-size: 14px;\n  font-weight: 600;\n  padding: 2px 4px;\n  border-radius: calc(var(--border-radius) / 2);\n}\n\n[_nghost-%COMP%] {\n  display: block;\n}\n\n.employee-column[_ngcontent-%COMP%] {\n  width: 20%;\n  min-width: 165px;\n  max-width: 200px;\n}\n\n.limit-column[_ngcontent-%COMP%] {\n  width: 20%;\n}\n\n.spent-column[_ngcontent-%COMP%] {\n  width: 10%;\n}\n\n.activity-column[_ngcontent-%COMP%] {\n  width: 35%;\n}\n\n.remaining-column[_ngcontent-%COMP%] {\n  width: 15%;\n}\n\n.remaining-content[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\n@media only screen and (max-width: 1280px) {\n  .spent-column[_ngcontent-%COMP%] {\n    width: 15%;\n  }\n  .activity-column[_ngcontent-%COMP%] {\n    width: 30%;\n  }\n}"]
    });
  }
};
TimeLimitReportComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_25__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .UntilDestroy */ .d)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_25__/* .__metadata */ .Sn)("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* .ChangeDetectorRef */ .gRc, _angular_router__WEBPACK_IMPORTED_MODULE_8__/* .ActivatedRoute */ .nX, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_9__/* .TimesheetService */ .k, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__/* .TranslateService */ .c$, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_11__/* .Store */ .il, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_12__/* .TimesheetFilterService */ .WG, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_13__/* .DateRangePickerBuilderService */ .i7, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_14__/* .TimeZoneService */ .F])], TimeLimitReportComponent);


/***/ }),

/***/ 99253:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $i: () => (/* binding */ DEFAULT_SCREENSHOT_FREQUENCY_OPTIONS),
/* harmony export */   Fo: () => (/* binding */ DEFAULT_TIME_FORMATS),
/* harmony export */   Y$: () => (/* binding */ DEFAULT_INVITE_EXPIRY_PERIOD),
/* harmony export */   Zo: () => (/* binding */ DEFAULT_PROFIT_BASED_BONUS),
/* harmony export */   _E: () => (/* binding */ DEFAULT_DATE_FORMATS),
/* harmony export */   bO: () => (/* binding */ DEFAULT_STANDARD_WORK_HOURS_PER_DAY),
/* harmony export */   pU: () => (/* binding */ DEFAULT_ACTIVITY_PROOF_DURATIONS),
/* harmony export */   sL: () => (/* binding */ DEFAULT_INACTIVITY_TIME_LIMITS),
/* harmony export */   xm: () => (/* binding */ DEFAULT_REVENUE_BASED_BONUS)
/* harmony export */ });
/**
 * Array containing the default time formats.
 */
const DEFAULT_TIME_FORMATS = [12, 24];
/**
 * Default standard work hours per day.
 * - Typically set to 8 hours, aligning with standard full-time work schedules.
 */
const DEFAULT_STANDARD_WORK_HOURS_PER_DAY = 8;
/**
 * Default profit-based bonus percentage.
 * - Represents a 75% bonus based on profit metrics.
 */
const DEFAULT_PROFIT_BASED_BONUS = 75;
/**
 * Default revenue-based bonus percentage.
 * - Represents a 10% bonus based on revenue metrics.
 */
const DEFAULT_REVENUE_BASED_BONUS = 10;
/**
 * Default invite expiry period in days.
 * - Invitations expire after 7 days by default.
 */
const DEFAULT_INVITE_EXPIRY_PERIOD = 7;
/**
 * Array of default date formats.
 * - 'L': Locale-specific date representation (e.g., 09/04/1986).
 * - 'LL': Full month name, day, and year (e.g., September 4, 1986).
 * - 'dddd, LL': Day of the week, full month name, day, and year (e.g., Thursday, September 4, 1986).
 */
const DEFAULT_DATE_FORMATS = ['L', 'LL', 'dddd, LL'];
/**
 * Array of default inactivity time limits in minutes.
 * - Specifies time limits after which a user is considered inactive.
 * - Common values: 1, 5, 10, 20, 30 minutes.
 */
const DEFAULT_INACTIVITY_TIME_LIMITS = [1, 5, 10, 20, 30];
/**
 * Array of default activity proof durations in minutes.
 * - Defines durations for capturing proof of activity.
 * - Common values: 1, 3, 5, 10 minutes.
 */
const DEFAULT_ACTIVITY_PROOF_DURATIONS = [1, 3, 5, 10];
/**
 * Array of default screenshot frequency options in minutes.
 * - Determines how frequently screenshots are taken to monitor activity.
 * - Common values: 1, 3, 5, 10 minutes.
 */
const DEFAULT_SCREENSHOT_FREQUENCY_OPTIONS = [1, 3, 5, 10];

/***/ })

}]);