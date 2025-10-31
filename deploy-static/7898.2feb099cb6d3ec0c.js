"use strict";
(self["webpackChunkgauzy"] = self["webpackChunkgauzy"] || []).push([[7898],{

/***/ 2138:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   w: () => (/* binding */ PipelinesRouting)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(908);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(17785);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4106);
/* harmony import */ var _pipelines_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62015);
/* harmony import */ var _pipeline_deals_pipeline_deals_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21129);
/* harmony import */ var _pipeline_deals_pipeline_deal_form_pipeline_deal_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(54634);
/* harmony import */ var _routes_pipeline_resolver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(70490);
/* harmony import */ var _routes_deal_resolver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(20722);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(26860);










const routes = [{
  path: '',
  component: _pipelines_component__WEBPACK_IMPORTED_MODULE_0__/* .PipelinesComponent */ .r,
  canActivate: [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_3__/* .PermissionsGuard */ .a],
  data: {
    permissions: {
      only: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_4__/* .PermissionsEnum */ .U.VIEW_SALES_PIPELINES],
      redirectTo: '/pages/dashboard'
    }
  }
}, {
  path: ':pipelineId/deals',
  component: _pipeline_deals_pipeline_deals_component__WEBPACK_IMPORTED_MODULE_1__/* .PipelineDealsComponent */ .l,
  canActivate: [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_3__/* .PermissionsGuard */ .a],
  data: {
    permissions: {
      only: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_4__/* .PermissionsEnum */ .U.VIEW_SALES_PIPELINES],
      redirectTo: '/pages/dashboard'
    }
  },
  resolve: {
    pipeline: _routes_pipeline_resolver__WEBPACK_IMPORTED_MODULE_5__/* .PipelineResolver */ .f
  }
}, {
  path: ':pipelineId/deals/create',
  component: _pipeline_deals_pipeline_deal_form_pipeline_deal_form_component__WEBPACK_IMPORTED_MODULE_2__/* .PipelineDealFormComponent */ .C,
  canActivate: [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_3__/* .PermissionsGuard */ .a],
  data: {
    permissions: {
      only: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_4__/* .PermissionsEnum */ .U.VIEW_SALES_PIPELINES],
      redirectTo: '/pages/dashboard'
    }
  },
  resolve: {
    pipeline: _routes_pipeline_resolver__WEBPACK_IMPORTED_MODULE_5__/* .PipelineResolver */ .f
  }
}, {
  path: ':pipelineId/deals/:dealId/edit',
  component: _pipeline_deals_pipeline_deal_form_pipeline_deal_form_component__WEBPACK_IMPORTED_MODULE_2__/* .PipelineDealFormComponent */ .C,
  canActivate: [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_3__/* .PermissionsGuard */ .a],
  data: {
    permissions: {
      only: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_4__/* .PermissionsEnum */ .U.VIEW_SALES_PIPELINES],
      redirectTo: '/pages/dashboard'
    }
  },
  resolve: {
    pipeline: _routes_pipeline_resolver__WEBPACK_IMPORTED_MODULE_5__/* .PipelineResolver */ .f,
    deal: _routes_deal_resolver__WEBPACK_IMPORTED_MODULE_6__/* .DealResolver */ .R
  }
}];
let PipelinesRouting = /*#__PURE__*/(() => {
  class PipelinesRouting {
    static {
      this.ɵfac = function PipelinesRouting_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || PipelinesRouting)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵdefineNgModule"] */ .$C({
        type: PipelinesRouting
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__/* .RouterModule */ .iI.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_8__/* .RouterModule */ .iI]
      });
    }
  }
  return PipelinesRouting;
})();

/***/ }),

/***/ 2502:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   U: () => (/* binding */ dateTimestampProvider)
/* harmony export */ });
const dateTimestampProvider = {
  now() {
    return (dateTimestampProvider.delegate || Date).now();
  },
  delegate: undefined
};
//# sourceMappingURL=dateTimestampProvider.js.map

/***/ }),

/***/ 4977:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ PipelineTabsEnum)
/* harmony export */ });
var PipelineTabsEnum = /*#__PURE__*/function (PipelineTabsEnum) {
  PipelineTabsEnum["ACTIONS"] = "ACTIONS";
  PipelineTabsEnum["SEARCH"] = "SEARCH";
  return PipelineTabsEnum;
}(PipelineTabsEnum || {});

/***/ }),

/***/ 10519:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   y: () => (/* binding */ StageFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10936);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(84409);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(55101);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(56383);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(71924);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(14572);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(71750);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(19223);












function StageFormComponent_nb_accordion_item_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-accordion-item", 4)(1, "nb-accordion-item-header")(2, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function StageFormComponent_nb_accordion_item_9_Template_button_click_2_listener() {
      const i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1).index;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      ctx_r2.isAdding && ctx_r2.control.length - 1 === i_r2 && (ctx_r2.isAdding = false);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r2.deleteStage(i_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(3, "nb-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(4, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(6, "nb-accordion-item-body")(7, "nb-form-field")(8, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(11, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(13, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(14, "nb-form-field")(15, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(18, "textarea", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
  }
  if (rf & 2) {
    const stage_r4 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("formGroup", stage_r4)("expanded", ctx_r2.isAdding && ctx_r2.control.length - 1 === i_r2)("cdkDragData", stage_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", stage_r4.value.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(10, 8, "FORM.PLACEHOLDERS.NAME"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(12, 10, "FORM.PLACEHOLDERS.NAME"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(17, 12, "FORM.PLACEHOLDERS.DESCRIPTION"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(19, 14, "FORM.PLACEHOLDERS.DESCRIPTION"));
  }
}
let StageFormComponent = /*#__PURE__*/(() => {
  class StageFormComponent {
    constructor(controlContainer, dialogService, fb, store) {
      this.controlContainer = controlContainer;
      this.dialogService = dialogService;
      this.fb = fb;
      this.store = store;
      this.isAdding = false;
    }
    ngOnInit() {
      this.control = this.controlContainer.control;
      this.stages?.forEach(({
        id,
        name,
        description
      }) => {
        this.pushNewStage({
          id,
          name,
          description
        });
      });
    }
    reorder(event) {
      const index = this.control.controls.indexOf(event.item.data);
      this.control.removeAt(index);
      this.control.insert(event.currentIndex, event.item.data);
    }
    pushNewStage({
      id,
      name,
      description
    } = {}) {
      const {
        pipelineId
      } = this;
      const tenantId = this.store.user.tenantId;
      const organizationId = this.store.selectedOrganization.id;
      this.control.push(this.fb.group({
        ...(pipelineId ? {
          pipelineId: [pipelineId, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .Validators */ .k0.required]
        } : {}),
        ...(id ? {
          id: [id, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .Validators */ .k0.required]
        } : {}),
        name: [name, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .Validators */ .k0.required],
        description: [description],
        tenantId,
        organizationId
      }));
    }
    deleteStage(index) {
      this.dialogService.open(_gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_2__/* .DeleteConfirmationComponent */ .u, {
        context: {
          recordType: 'Stage'
        }
      }).onClose.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .first */ .$)()).subscribe(res => {
        if (res) {
          this.control.removeAt(index);
        }
      });
    }
    static {
      this.ɵfac = function StageFormComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || StageFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .ControlContainer */ .ZU), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbDialogService */ .S0W), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .UntypedFormBuilder */ .ze), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_5__/* .Store */ .il));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: StageFormComponent,
        selectors: [["ga-stage-form"]],
        inputs: {
          stages: [0, "values", "stages"],
          pipelineId: "pipelineId"
        },
        standalone: false,
        decls: 10,
        vars: 4,
        consts: [["nbButton", "", "type", "button", "size", "tiny", 2, "float", "right", 3, "click"], ["pack", "eva", "status", "success", "icon", "plus-circle-outline"], ["cdkDropList", "", 3, "cdkDropListDropped"], ["cdkDrag", "", 3, "formGroup", "expanded", "cdkDragData", 4, "ngFor", "ngForOf"], ["cdkDrag", "", 3, "formGroup", "expanded", "cdkDragData"], ["nbButton", "", "size", "tiny", "status", "warning", "type", "button", 3, "click"], ["pack", "eva", "icon", "trash-2-outline"], [1, "ml-2"], ["for", "name", 1, "label"], ["nbInput", "", "fullWidth", "", "formControlName", "name", "type", "text", 3, "placeholder"], ["for", "description", 1, "label"], ["nbInput", "", "fullWidth", "", "formControlName", "description", 3, "placeholder"]],
        template: function StageFormComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-card")(1, "nb-card-header")(2, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(4, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(5, "button", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function StageFormComponent_Template_button_click_5_listener() {
              ctx.isAdding = true;
              return ctx.pushNewStage({
                name: ""
              });
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(6, "nb-icon", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(7, "nb-card-body")(8, "nb-accordion", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("cdkDropListDropped", function StageFormComponent_Template_nb_accordion_cdkDropListDropped_8_listener($event) {
              return ctx.reorder($event);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(9, StageFormComponent_nb_accordion_item_9_Template, 20, 16, "nb-accordion-item", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(4, 2, "PIPELINES_PAGE.HEADER_STAGES"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx.control.controls);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__/* .NgForOf */ .Sq, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .DefaultValueAccessor */ .me, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .NgControlStatus */ .BC, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .NgControlStatusGroup */ .cb, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .FormGroupDirective */ .j4, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .FormControlName */ .JD, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbAccordionComponent */ .Ul7, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbAccordionItemComponent */ .vx8, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbAccordionItemHeaderComponent */ .Ig3, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbAccordionItemBodyComponent */ .LHJ, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbFormFieldComponent */ .u_9, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__/* .CdkDropList */ .O7, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__/* .CdkDrag */ .T1, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbButtonComponent */ .YP2, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbInputDirective */ .i6h, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbCardComponent */ .SrT, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbCardBodyComponent */ .KH5, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbCardHeaderComponent */ .zJv, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbIconComponent */ .tHu, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__/* .TranslatePipe */ .D9],
        encapsulation: 2
      });
    }
  }
  return StageFormComponent;
})();

/***/ }),

/***/ 11043:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   x: () => (/* binding */ PipelinesService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(80189);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64913);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26024);
/* harmony import */ var _crud_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(55256);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(26860);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(45715);






let PipelinesService = /*#__PURE__*/(() => {
  class PipelinesService extends _crud_service__WEBPACK_IMPORTED_MODULE_0__/* .Service */ .k {
    constructor(http) {
      super({
        http,
        basePath: `${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/pipelines`
      });
      this.http = http;
    }
    /**
     * Fetches all pipelines with optional relations and filtering conditions.
     *
     * @param relations - An optional array of relation names to include in the response.
     * @param where - Optional filtering conditions.
     * @returns A promise that resolves with the paginated pipelines.
     */
    getAll(relations, where) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__/* .firstValueFrom */ ._)(this.http.get(`${this.basePath}`, {
        params: (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_3__/* .toParams */ .SV)({
          where,
          relations
        })
      }));
    }
    /**
     * Fetches a pipeline by its ID with optional relations.
     *
     * @param id - The ID of the pipeline to fetch.
     * @param relations - An array of relation names to include in the response.
     * @returns A promise that resolves with the pipeline.
     */
    getById(id, where, relations = []) {
      return this.http.get(`${this.basePath}/${id}`, {
        params: (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_3__/* .toParams */ .SV)({
          where,
          relations
        })
      });
    }
    /**
     * Find deals associated with a specific pipeline
     *
     * @param pipelineId The ID of the pipeline
     * @param where Filter conditions for fetching the deals
     * @returns A promise of paginated deals
     */
    getPipelineDeals(pipelineId, where, relations = []) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__/* .firstValueFrom */ ._)(this.http.get(`${this.basePath}/${pipelineId}/deals`, {
        params: (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_3__/* .toParams */ .SV)({
          where,
          relations
        })
      }));
    }
    static {
      this.ɵfac = function PipelinesService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || PipelinesService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵinject"] */ .KVO(_angular_common_http__WEBPACK_IMPORTED_MODULE_5__/* .HttpClient */ .Qq));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdefineInjectable"] */ .jDH({
        token: PipelinesService,
        factory: PipelinesService.ɵfac
      });
    }
  }
  return PipelinesService;
})();

/***/ }),

/***/ 11768:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ Scheduler)
/* harmony export */ });
/* harmony import */ var _scheduler_dateTimestampProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2502);

class Scheduler {
  constructor(schedulerActionCtor, now = Scheduler.now) {
    this.schedulerActionCtor = schedulerActionCtor;
    this.now = now;
  }
  schedule(work, delay = 0, state) {
    return new this.schedulerActionCtor(this, work).schedule(state, delay);
  }
}
Scheduler.now = _scheduler_dateTimestampProvider__WEBPACK_IMPORTED_MODULE_0__/* .dateTimestampProvider */ .U.now;
//# sourceMappingURL=Scheduler.js.map

/***/ }),

/***/ 13344:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   U: () => (/* binding */ defaultIfEmpty)
/* harmony export */ });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7661);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25969);


function defaultIfEmpty(defaultValue) {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__/* .operate */ .N)((source, subscriber) => {
    let hasValue = false;
    source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__/* .createOperatorSubscriber */ ._)(subscriber, value => {
      hasValue = true;
      subscriber.next(value);
    }, () => {
      if (!hasValue) {
        subscriber.next(defaultValue);
      }
      subscriber.complete();
    }));
  });
}
//# sourceMappingURL=defaultIfEmpty.js.map

/***/ }),

/***/ 13845:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: () => (/* binding */ CreatedByUserComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9620);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14572);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56383);
/* harmony import */ var _directives_img_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(71466);






function CreatedByUserComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(1, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function CreatedByUserComponent_ng_container_1_Template_a_click_1_listener() {
      const createdByUser_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1).ngIf;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r2.edit(createdByUser_r2.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(2, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const createdByUser_r2 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("nbTooltip", createdByUser_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("src", createdByUser_r2.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵsanitizeUrl"] */ .B4B);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(createdByUser_r2.name);
  }
}
function CreatedByUserComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(ctx_r2.value);
  }
}
let CreatedByUserComponent = /*#__PURE__*/(() => {
  class CreatedByUserComponent {
    constructor(router) {
      this.router = router;
    }
    /**
     * Navigates to the employee edit page using the provided ID.
     *
     * @param id - The unique identifier of the employee to edit.
     */
    edit(id) {
      if (!id) {
        console.error('Invalid employee id. Cannot proceed with editing.');
        return;
      }
      this.router.navigate([`/pages/employees/edit/${id}`]);
    }
    static {
      this.ɵfac = function CreatedByUserComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || CreatedByUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_router__WEBPACK_IMPORTED_MODULE_1__/* .Router */ .Ix));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: CreatedByUserComponent,
        selectors: [["ngx-created-by-user"]],
        inputs: {
          value: "value",
          rowData: "rowData"
        },
        standalone: false,
        decls: 4,
        vars: 2,
        consts: [["noUser", ""], [1, "avatar-container"], [4, "ngIf", "ngIfElse"], [1, "avatar", 3, "click", "nbTooltip"], ["type", "createdByUser", 1, "img", 3, "src"], [1, "names-wrapper"]],
        template: function CreatedByUserComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, CreatedByUserComponent_ng_container_1_Template, 5, 3, "ng-container", 2)(2, CreatedByUserComponent_ng_template_2_Template, 2, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplateRefExtractor"] */ .C5r);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
          }
          if (rf & 2) {
            const noUser_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.rowData == null ? null : ctx.rowData.createdByUser)("ngIfElse", noUser_r4);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__/* .NgIf */ .bT, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbTooltipDirective */ .BmQ, _directives_img_directive__WEBPACK_IMPORTED_MODULE_4__/* .ImgDirective */ .z],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\na[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n[_nghost-%COMP%]   .avatar-container[_ngcontent-%COMP%] {\n  width: 100%;\n}\n[_nghost-%COMP%]   .avatar-container[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  border: 2px solid var(--border-basic-color-1);\n  background-color: var(--color-primary-transparent-default);\n  color: var(--text-primary-color);\n  border-radius: var(--button-rectangle-border-radius);\n  gap: 8px;\n  display: flex;\n  align-items: center;\n  width: fit-content;\n}\n[dir=ltr]   [_nghost-%COMP%]   .avatar-container[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  padding: 5px 14px 5px 7px;\n}\n[dir=rtl]   [_nghost-%COMP%]   .avatar-container[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  padding: 5px 7px 5px 14px;\n}\n[_nghost-%COMP%]   .avatar-container[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]   .names-wrapper[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  max-width: 110px;\n}\n[_nghost-%COMP%]   .avatar-container[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  border-radius: var(--button-rectangle-border-radius);\n}"]
      });
    }
  }
  return CreatedByUserComponent;
})();

/***/ }),

/***/ 16061:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ AsyncAction)
/* harmony export */ });
/* harmony import */ var _Action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43273);
/* harmony import */ var _intervalProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(83451);
/* harmony import */ var _util_arrRemove__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27805);



class AsyncAction extends _Action__WEBPACK_IMPORTED_MODULE_0__/* .Action */ .r {
  constructor(scheduler, work) {
    super(scheduler, work);
    this.scheduler = scheduler;
    this.work = work;
    this.pending = false;
  }
  schedule(state, delay = 0) {
    var _a;
    if (this.closed) {
      return this;
    }
    this.state = state;
    const id = this.id;
    const scheduler = this.scheduler;
    if (id != null) {
      this.id = this.recycleAsyncId(scheduler, id, delay);
    }
    this.pending = true;
    this.delay = delay;
    this.id = (_a = this.id) !== null && _a !== void 0 ? _a : this.requestAsyncId(scheduler, this.id, delay);
    return this;
  }
  requestAsyncId(scheduler, _id, delay = 0) {
    return _intervalProvider__WEBPACK_IMPORTED_MODULE_1__/* .intervalProvider */ .f.setInterval(scheduler.flush.bind(scheduler, this), delay);
  }
  recycleAsyncId(_scheduler, id, delay = 0) {
    if (delay != null && this.delay === delay && this.pending === false) {
      return id;
    }
    if (id != null) {
      _intervalProvider__WEBPACK_IMPORTED_MODULE_1__/* .intervalProvider */ .f.clearInterval(id);
    }
    return undefined;
  }
  execute(state, delay) {
    if (this.closed) {
      return new Error('executing a cancelled action');
    }
    this.pending = false;
    const error = this._execute(state, delay);
    if (error) {
      return error;
    } else if (this.pending === false && this.id != null) {
      this.id = this.recycleAsyncId(this.scheduler, this.id, null);
    }
  }
  _execute(state, _delay) {
    let errored = false;
    let errorValue;
    try {
      this.work(state);
    } catch (e) {
      errored = true;
      errorValue = e ? e : new Error('Scheduled action threw falsy error');
    }
    if (errored) {
      this.unsubscribe();
      return errorValue;
    }
  }
  unsubscribe() {
    if (!this.closed) {
      const {
        id,
        scheduler
      } = this;
      const {
        actions
      } = scheduler;
      this.work = this.state = this.scheduler = null;
      this.pending = false;
      (0,_util_arrRemove__WEBPACK_IMPORTED_MODULE_2__/* .arrRemove */ .o)(actions, this);
      if (id != null) {
        this.id = this.recycleAsyncId(scheduler, id, null);
      }
      this.delay = null;
      super.unsubscribe();
    }
  }
}
//# sourceMappingURL=AsyncAction.js.map

/***/ }),

/***/ 20722:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ DealResolver)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(50666);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(39127);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(47060);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71924);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(69432);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(54263);



/**
 * Resolver function to fetch a deal by its ID.
 *
 * @param route The activated route snapshot containing the route parameters.
 * @returns An observable of IDeal or null if no dealId is present.
 */
const DealResolver = route => {
  const store = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__/* .inject */ .WQX)(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_1__/* .Store */ .il);
  const dealsService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__/* .inject */ .WQX)(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_2__/* .DealsService */ .T);
  const errorHandlingService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__/* .inject */ .WQX)(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_3__/* .ErrorHandlingService */ .X);
  // Extract deal ID from route parameters
  const dealId = route.params['dealId'];
  // If deal ID is not present, return null
  if (!dealId) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(null);
  }
  // Extract organization ID and tenant ID from store
  const {
    id: organizationId,
    tenantId
  } = store.selectedOrganization;
  // Fetch deal by ID from the service
  return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__/* .from */ .H)(dealsService.getById(dealId, {
    organizationId,
    tenantId
  }, ['client'])).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__/* .catchError */ .W)(error => {
    // Handle and log errors
    errorHandlingService.handleError(error);
    // Return null on error
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(error);
  }));
};

/***/ }),

/***/ 21129:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   l: () => (/* binding */ PipelineDealsComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(73014);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(64411);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10936);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(9620);
/* harmony import */ var angular2_smart_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(52345);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(19223);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(56383);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(81236);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(46076);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(26024);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(69432);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(11043);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(15480);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(71924);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(54263);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(72781);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(73246);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(71181);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(24237);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(29421);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(87081);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(57733);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(47060);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(50666);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(36950);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(23423);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47108);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(13845);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(55101);
/* harmony import */ var _table_components_pipeline_deal_excerpt_pipeline_deal_excerpt_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(38119);
/* harmony import */ var _table_components_pipeline_deal_probability_pipeline_deal_probability_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(42419);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(908);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(14572);
/* harmony import */ var _packages_ui_core_shared_src_lib_card_grid_card_grid_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(49517);
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(79475);
/* harmony import */ var _packages_ui_core_shared_src_lib_components_back_navigation_back_navigation_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(90910);
/* harmony import */ var _packages_ui_core_shared_src_lib_gauzy_button_action_gauzy_button_action_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(45293);
/* harmony import */ var _packages_ui_core_shared_src_lib_smart_data_layout_pagination_pagination_v2_pagination_v2_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(3456);






























const _c0 = a0 => ["./", a0, "edit"];
const _c1 = () => ["./create"];
function PipelineDealsComponent_nb_card_header_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-card-header", 13)(1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(2, "ngx-back-navigation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(3, "h4")(4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(7, " | ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(10, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(11, "ngx-gauzy-button-action", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const pipeline_r2 = ctx.ngIf;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    const actionButtons_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(19);
    const visibleButton_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(6, 6, "PIPELINE_DEALS_PAGE.HEADER"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", pipeline_r2 == null ? null : pipeline_r2.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("buttonTemplateVisible", visibleButton_r5)("buttonTemplate", actionButtons_r4)("componentName", ctx_r2.viewComponentName)("isDisable", ctx_r2.disableButton);
  }
}
function PipelineDealsComponent_nb_option_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const stage_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("value", stage_r6.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", stage_r6.name, " ");
  }
}
function PipelineDealsComponent_ng_container_12_ng_template_1_Template(rf, ctx) {}
function PipelineDealsComponent_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, PipelineDealsComponent_ng_container_12_ng_template_1_Template, 0, 0, "ng-template", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    const tableLayout_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(15);
    const gridLayout_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngTemplateOutlet", ctx_r2.dataLayoutStyle === ctx_r2.componentLayoutStyleEnum.TABLE ? tableLayout_r7 : gridLayout_r8);
  }
}
function PipelineDealsComponent_ng_template_14_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "ngx-pagination", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("source", ctx_r2.smartTableSource);
  }
}
function PipelineDealsComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 17)(1, "angular2-smart-table", 18, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("userRowSelect", function PipelineDealsComponent_ng_template_14_Template_angular2_smart_table_userRowSelect_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r9);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r2.selectPipelineDeals($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(3, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(4, PipelineDealsComponent_ng_template_14_ng_container_4_Template, 2, 1, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("settings", ctx_r2.smartTableSettings)("source", ctx_r2.smartTableSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r2.smartTableSource);
  }
}
function PipelineDealsComponent_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 21)(1, "ga-card-grid", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("onSelectedItem", function PipelineDealsComponent_ng_template_16_Template_ga_card_grid_onSelectedItem_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r10);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r2.selectPipelineDeals($event));
    })("scroll", function PipelineDealsComponent_ng_template_16_Template_ga_card_grid_scroll_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r10);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r2.onScroll());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("settings", ctx_r2.smartTableSettings)("source", ctx_r2.deals)("totalItems", ctx_r2.pagination == null ? null : ctx_r2.pagination.totalItems);
  }
}
function PipelineDealsComponent_ng_template_18_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "nb-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(5, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function PipelineDealsComponent_ng_template_18_ng_template_1_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r11);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r2.deleteDeal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(7, "nb-icon", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction1"] */ .eq3(9, _c0, ctx_r2.selectedDeal == null ? null : ctx_r2.selectedDeal.id))("disabled", ctx_r2.disableButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(4, 5, "BUTTONS.EDIT"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("disabled", ctx_r2.disableButton)("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(6, 7, "BUTTONS.DELETE"));
  }
}
function PipelineDealsComponent_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, PipelineDealsComponent_ng_template_18_ng_template_1_Template, 8, 11, "ng-template", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
}
function PipelineDealsComponent_ng_template_20_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "nb-icon", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction0"] */ .lJ4(4, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(3, 2, "BUTTONS.ADD"), " ");
  }
}
function PipelineDealsComponent_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(0, PipelineDealsComponent_ng_template_20_ng_template_0_Template, 4, 5, "ng-template", 24);
  }
}
let PipelineDealsComponent = class PipelineDealsComponent extends _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_1__/* .PaginationFilterBaseComponent */ .t {
  /**
   * Checks if the current layout style is grid.
   */
  get _isGridLayout() {
    return this.dataLayoutStyle === this.componentLayoutStyleEnum.CARDS_GRID;
  }
  /**
   * Public getter to be used in the template.
   */
  get isGridLayout() {
    return this._isGridLayout;
  }
  constructor(translateService, _cdr, _dealsService, _dialogService, _pipelinesService, _toastrService, _store, _activatedRoute, _errorHandlingService) {
    super(translateService);
    this.translateService = translateService;
    this._cdr = _cdr;
    this._dealsService = _dealsService;
    this._dialogService = _dialogService;
    this._pipelinesService = _pipelinesService;
    this._toastrService = _toastrService;
    this._store = _store;
    this._activatedRoute = _activatedRoute;
    this._errorHandlingService = _errorHandlingService;
    this.viewComponentName = _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_2__/* .ComponentEnum */ .L.PIPELINE_DEALS;
    this.dataLayoutStyle = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__/* .ComponentLayoutStyleEnum */ .IE.TABLE;
    this.componentLayoutStyleEnum = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__/* .ComponentLayoutStyleEnum */ .IE;
    this.stageFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .FormControl */ .MJ();
    this.refresh$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__/* .Subject */ .B();
    this.smartTableSource = new angular2_smart_table__WEBPACK_IMPORTED_MODULE_6__/* .LocalDataSource */ .h0([]);
    this.deals = [];
    this.loading = false;
    this.disableButton = true;
    this.setView();
  }
  ngOnInit() {
    this._applyTranslationOnSmartTable();
    this._loadSmartTableSettings();
    this.pipeline$ = this._activatedRoute.params.pipe(
    // Filter for the presence of pipelineId in route params
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .filter */ .p)(({
      pipelineId
    }) => !!pipelineId),
    // Switch to route data stream once pipelineId is confirmed
    (0,rxjs__WEBPACK_IMPORTED_MODULE_8__/* .switchMap */ .n)(() => this._activatedRoute.data),
    // Exclude falsy values from the emitted values
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .filter */ .p)(({
      pipeline
    }) => !!pipeline),
    // Map the pipeline to the pipeline property
    (0,rxjs__WEBPACK_IMPORTED_MODULE_9__/* .map */ .T)(({
      pipeline
    }) => pipeline),
    // Tap operator for side effects - setting the form property
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .tap */ .M)(pipeline => this.pipeline = pipeline),
    // Handle component lifecycle to avoid memory leaks
    (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__/* .untilDestroyed */ .s)(this));
    // Combine pipeline$ and subject$
    this.deals$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_12__/* .combineLatest */ .z)([this.pipeline$, this.subject$]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .tap */ .M)(() => {
      this.loading = true;
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__/* .switchMap */ .n)(([pipeline, _]) => {
      // Extract pipeline properties
      const {
        id: pipelineId,
        organizationId,
        tenantId
      } = pipeline;
      // Fetch pipeline deals
      return this._pipelinesService.getPipelineDeals(pipelineId, {
        organizationId,
        tenantId
      }, ['stage', 'createdByUser']);
    }),
    // Map the contacts to the clients property
    (0,rxjs__WEBPACK_IMPORTED_MODULE_9__/* .map */ .T)(({
      items
    }) => items),
    // Tap operator for side effects - setting the deals property
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .tap */ .M)(deals => this.getPipelineDeals(deals)),
    // Catch errors
    (0,rxjs__WEBPACK_IMPORTED_MODULE_13__/* .catchError */ .W)(error => {
      console.error('Error fetching pipeline deals:', error);
      // Handle and log errors
      this._errorHandlingService.handleError(error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.of)([]);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .tap */ .M)(() => {
      this.loading = false;
    }), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__/* .untilDestroyed */ .s)(this));
    this.pagination$.pipe(
    // Debounce the observable to wait for 100 milliseconds of inactivity
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__/* .debounceTime */ .B)(100),
    // Ensure distinct values are emitted
    (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_16__/* .distinctUntilChange */ .nI)(),
    // Update view
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .tap */ .M)(() => this.subject$.next(true)),
    // Unsubscribe from the observable when the component is destroyed
    (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__/* .untilDestroyed */ .s)(this)).subscribe();
    this.refresh$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .filter */ .p)(() => this.isGridLayout), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .tap */ .M)(() => this.refreshPagination()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .tap */ .M)(() => this.deals = []), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__/* .untilDestroyed */ .s)(this)).subscribe();
  }
  ngAfterViewInit() {
    this._cdr.detectChanges();
  }
  /**
   * Fetches and sets the pipeline deals.
   */
  getPipelineDeals(deals) {
    var _this = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A)(function* () {
      if (!_this.pipeline) {
        return;
      }
      // Add stage to deals
      deals = deals.map(deal => ({
        ...deal,
        stage: _this.pipeline.stages.find(({
          id
        }) => id === deal.stageId)
      }));
      // Set the smart table source
      _this.smartTableSource = new angular2_smart_table__WEBPACK_IMPORTED_MODULE_6__/* .LocalDataSource */ .h0();
      yield _this.smartTableSource.load(deals);
      // Get pagination details
      const {
        activePage,
        itemsPerPage
      } = _this.getPagination();
      // Set paging for the smart table source
      _this.smartTableSource.setPaging(activePage, itemsPerPage, false);
      _this.setPagination({
        ..._this.getPagination(),
        totalItems: _this.deals.length
      });
      // Set the smart table source
      _this._loadDataGridLayout();
    })();
  }
  /**
   * Sets the view based on the selected component layout style.
   */
  setView() {
    this._store.componentLayout$(this.viewComponentName).pipe(
    // Only emit a new value if it's distinct from the previous one
    (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_16__/* .distinctUntilChange */ .nI)(),
    // Update the dataLayoutStyle based on the component layout
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .tap */ .M)(componentLayout => this.dataLayoutStyle = componentLayout),
    // Trigger pagination refresh
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .tap */ .M)(() => this.refreshPagination()),
    // filter grid layout
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .filter */ .p)(() => this.isGridLayout),
    // Clear deals
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .tap */ .M)(() => {
      this.deals = [];
      this.stageFormControl.reset();
    }),
    // emit value immediately
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .tap */ .M)(() => this.subject$.next(true)),
    // Automatically unsubscribe when the component is destroyed
    (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__/* .untilDestroyed */ .s)(this)).subscribe();
  }
  /**
   * Sets up a ServerDataSource for retrieving pipeline deals from a server.
   */
  _loadSmartTableSettings() {
    // Get pagination details
    const pagination = this.getPagination();
    // Set up smart table settings
    this.smartTableSettings = {
      actions: false,
      noDataMessage: this.getTranslation('SM_TABLE.NO_RESULT'),
      selectedRowIndex: -1,
      pager: {
        display: false,
        perPage: pagination ? pagination.itemsPerPage : this.minItemPerPage
      },
      columns: {
        title: {
          title: this.getTranslation('SM_TABLE.TITLE'),
          type: 'string',
          isFilterable: true,
          width: '30%'
        },
        stage: {
          title: this.getTranslation('SM_TABLE.STAGE'),
          type: 'custom',
          width: '30%',
          isFilterable: false,
          renderComponent: _table_components_pipeline_deal_excerpt_pipeline_deal_excerpt_component__WEBPACK_IMPORTED_MODULE_18__/* .PipelineDealExcerptComponent */ .$,
          componentInitFunction: (instance, cell) => {
            instance.rowData = cell.getRow().getData();
            instance.value = cell.getValue();
          }
        },
        createdByUser: {
          title: this.getTranslation('SM_TABLE.CREATED_BY'),
          type: 'custom',
          width: '30%',
          isFilterable: false,
          renderComponent: _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_19__/* .CreatedByUserComponent */ .q,
          componentInitFunction: (instance, cell) => {
            instance.rowData = cell.getRow().getData();
            instance.value = cell.getValue();
          }
        },
        probability: {
          title: this.getTranslation('PIPELINE_DEAL_CREATE_PAGE.PROBABILITY'),
          type: 'custom',
          isFilterable: true,
          width: '10%',
          class: 'text-center',
          renderComponent: _table_components_pipeline_deal_probability_pipeline_deal_probability_component__WEBPACK_IMPORTED_MODULE_20__/* .PipelineDealProbabilityComponent */ .Z,
          componentInitFunction: (instance, cell) => {
            instance.rowData = cell.getRow().getData();
            instance.value = cell.getValue();
          }
        }
      }
    };
  }
  /**
   * Loads data in grid layout if the current layout style is grid.
   */
  _loadDataGridLayout() {
    var _this2 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A)(function* () {
      if (_this2.isGridLayout) {
        try {
          const deals = yield _this2.smartTableSource.getElements();
          _this2.deals = deals; // Override the existing array with fetched deals
        } catch (error) {
          console.error('Error loading grid layout data:', error);
          _this2._errorHandlingService.handleError(error);
        }
      }
    })();
  }
  /**
   * Filter deals in the smart table data source by stageId.
   */
  filterDealsByStage(stageId) {
    var _this3 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A)(function* () {
      // Set header selectors filters configuration
      _this3.smartTableSource.setFilter([...(stageId ? [{
        field: 'stageId',
        search: stageId
      }] : [])], true);
      if (_this3.isGridLayout) {
        try {
          const deals = yield _this3.smartTableSource.getElements();
          _this3.deals = deals; // Override the existing array with fetched deals
        } catch (error) {
          console.error('Error loading grid layout data:', error);
          _this3._errorHandlingService.handleError(error);
        }
      }
    })();
  }
  /**
   * Deletes the current deal after user confirmation.
   */
  deleteDeal() {
    var _this4 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A)(function* () {
      // Open a dialog to handle manual job application
      const dialog = _this4._dialogService.open(_gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_21__/* .DeleteConfirmationComponent */ .u, {
        context: {
          recordType: _this4.getTranslation('PIPELINE_DEALS_PAGE.RECORD_TYPE', _this4.selectedDeal)
        },
        hasScroll: false
      });
      try {
        // Wait for dialog result
        const canProceed = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_22__/* .firstValueFrom */ ._)(dialog.onClose);
        // Process job application if result is available
        if ('ok' === canProceed) {
          yield _this4._dealsService.delete(_this4.selectedDeal.id);
          _this4._toastrService.success('PIPELINE_DEALS_PAGE.DEAL_DELETED', {
            name: _this4.selectedDeal.title
          });
        }
      } catch (error) {
        console.log('Error while deleting pipeline deal', error);
        // Handle and log errors
        _this4._errorHandlingService.handleError(error);
      } finally {
        _this4.subject$.next(true);
      }
    })();
  }
  /**
   * Select or deselect pipeline deals
   *
   * @param param0 An object containing `isSelected` and `data`
   */
  selectPipelineDeals({
    isSelected,
    data
  }) {
    this.disableButton = !isSelected;
    this.selectedDeal = isSelected ? data : null;
  }
  /*
   * Clear selected item
   */
  clearItem() {
    this.selectPipelineDeals({
      isSelected: false,
      data: null
    });
  }
  /**
   * Listens for language changes and triggers the loading of Smart Table settings.
   * Unsubscribes when the component is destroyed.
   */
  _applyTranslationOnSmartTable() {
    this.translateService.onLangChange.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .tap */ .M)(() => this._loadSmartTableSettings()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__/* .untilDestroyed */ .s)(this)).subscribe();
  }
  ngOnDestroy() {}
  static {
    this.ɵfac = function PipelineDealsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || PipelineDealsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__/* .TranslateService */ .c$), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* .ChangeDetectorRef */ .gRc), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_24__/* .DealsService */ .T), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_nebular_theme__WEBPACK_IMPORTED_MODULE_25__/* .NbDialogService */ .S0W), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_26__/* .PipelinesService */ .x), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_27__/* .ToastrService */ .t), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_28__/* .Store */ .il), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_router__WEBPACK_IMPORTED_MODULE_29__/* .ActivatedRoute */ .nX), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_30__/* .ErrorHandlingService */ .X));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
      type: PipelineDealsComponent,
      selectors: [["ga-pipeline-deals"]],
      standalone: false,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
      decls: 22,
      vars: 16,
      consts: [["tableLayout", ""], ["gridLayout", ""], ["actionButtons", ""], ["visibleButton", ""], ["pipelineDealsTable", ""], ["nbSpinnerSize", "large", "nbSpinnerStatus", "primary", 1, "card-scroll", 3, "nbSpinner"], ["class", "card-header-title", 4, "ngIf"], [1, "row", "btn-container", "mb-3"], [1, "col"], [3, "selectedChange", "formControl", "placeholder"], [2, "white-space", "nowrap", 3, "value"], ["style", "white-space: nowrap", 3, "value", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "card-header-title"], [1, "gauzy-button-container"], [3, "buttonTemplateVisible", "buttonTemplate", "componentName", "isDisable"], [3, "ngTemplateOutlet"], [1, "table-scroll-container"], [2, "cursor", "pointer", 3, "userRowSelect", "settings", "source"], [1, "pagination-container"], [3, "source"], [1, "grid"], [3, "onSelectedItem", "scroll", "settings", "source", "totalItems"], [1, "btn-group", "actions"], ["ngxPermissionsOnly", "EDIT_SALES_PIPELINES"], ["nbButton", "", "size", "small", "status", "basic", 1, "action", "primary", 2, "cursor", "pointer", 3, "routerLink", "disabled"], ["icon", "edit-outline", "pack", "eva"], ["nbButton", "", "size", "small", "status", "basic", 1, "action", 2, "cursor", "pointer", 3, "click", "disabled", "nbTooltip"], ["icon", "trash-2-outline", "pack", "eva", "status", "danger"], ["nbButton", "", "size", "small", "status", "success", 3, "routerLink"], ["icon", "plus-outline"]],
      template: function PipelineDealsComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-card", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, PipelineDealsComponent_nb_card_header_1_Template, 12, 8, "nb-card-header", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(3, "nb-card-body")(4, "div", 7)(5, "div", 8)(6, "nb-select", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(7, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("selectedChange", function PipelineDealsComponent_Template_nb_select_selectedChange_6_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx.filterDealsByStage($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(8, "nb-option", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(10, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(11, PipelineDealsComponent_nb_option_11_Template, 2, 2, "nb-option", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(12, PipelineDealsComponent_ng_container_12_Template, 2, 1, "ng-container", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(13, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(14, PipelineDealsComponent_ng_template_14_Template, 5, 3, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplateRefExtractor"] */ .C5r)(16, PipelineDealsComponent_ng_template_16_Template, 2, 3, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplateRefExtractor"] */ .C5r)(18, PipelineDealsComponent_ng_template_18_Template, 2, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplateRefExtractor"] */ .C5r)(20, PipelineDealsComponent_ng_template_20_Template, 1, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplateRefExtractor"] */ .C5r);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("nbSpinner", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(2, 8, ctx.pipeline$));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("formControl", ctx.stageFormControl)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(7, 10, "PIPELINE_DEALS_PAGE.FILTER_BY_STAGE"));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("value", "");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(10, 12, "PIPELINE_DEALS_PAGE.ALL_STAGES"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx.pipeline == null ? null : ctx.pipeline.stages);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(13, 14, ctx.deals$));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_31__/* .NgForOf */ .Sq, _angular_common__WEBPACK_IMPORTED_MODULE_31__/* .NgIf */ .bT, _angular_common__WEBPACK_IMPORTED_MODULE_31__/* .NgTemplateOutlet */ .T3, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .NgControlStatus */ .BC, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .FormControlDirective */ .l_, _nebular_theme__WEBPACK_IMPORTED_MODULE_25__/* .NbSpinnerDirective */ .zwc, _angular_router__WEBPACK_IMPORTED_MODULE_32__/* .RouterLink */ .Wk, _nebular_theme__WEBPACK_IMPORTED_MODULE_25__/* .NbButtonComponent */ .YP2, _nebular_theme__WEBPACK_IMPORTED_MODULE_25__/* .NbSelectComponent */ .S81, _nebular_theme__WEBPACK_IMPORTED_MODULE_25__/* .NbOptionComponent */ .ZJ2, _nebular_theme__WEBPACK_IMPORTED_MODULE_25__/* .NbCardComponent */ .SrT, _nebular_theme__WEBPACK_IMPORTED_MODULE_25__/* .NbCardBodyComponent */ .KH5, _nebular_theme__WEBPACK_IMPORTED_MODULE_25__/* .NbCardHeaderComponent */ .zJv, _nebular_theme__WEBPACK_IMPORTED_MODULE_25__/* .NbIconComponent */ .tHu, _packages_ui_core_shared_src_lib_card_grid_card_grid_component__WEBPACK_IMPORTED_MODULE_33__/* .CardGridComponent */ .c, ngx_permissions__WEBPACK_IMPORTED_MODULE_34__/* .NgxPermissionsDirective */ .f6, _packages_ui_core_shared_src_lib_components_back_navigation_back_navigation_component__WEBPACK_IMPORTED_MODULE_35__/* .BackNavigationComponent */ .r, angular2_smart_table__WEBPACK_IMPORTED_MODULE_6__/* .Angular2SmartTableComponent */ .T9, _packages_ui_core_shared_src_lib_gauzy_button_action_gauzy_button_action_component__WEBPACK_IMPORTED_MODULE_36__/* .GauzyButtonActionComponent */ .A, _packages_ui_core_shared_src_lib_smart_data_layout_pagination_pagination_v2_pagination_v2_component__WEBPACK_IMPORTED_MODULE_37__/* .PaginationV2Component */ .a, _angular_common__WEBPACK_IMPORTED_MODULE_31__/* .AsyncPipe */ .Jj, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__/* .TranslatePipe */ .D9],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.action[_ngcontent-%COMP%] {\n  box-shadow: var(--gauzy-shadow);\n  border: none;\n}\n.action[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}\n.action.info[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: var(--color-info-default);\n  color: white;\n  border-color: var(--color-info-default);\n}\n.action.info-text-1[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  color: var(--color-info-default);\n}\n.action.secondary[_ngcontent-%COMP%] {\n  color: #7e7e8f;\n}\n.action.success[_ngcontent-%COMP%] {\n  color: var(--color-success-default);\n}\n.action.warning[_ngcontent-%COMP%] {\n  color: rgb(245, 109, 88);\n}\n.action.orange[_ngcontent-%COMP%] {\n  color: rgb(255, 171, 45);\n}\n.action.primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n}\n.action.primary.soft[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: rgba(110, 73, 232, 0.1);\n}\n.action.select-nb[_ngcontent-%COMP%]     {\n  box-shadow: none;\n}\n.action.select-nb[_ngcontent-%COMP%]     .select-button {\n  box-shadow: var(--gauzy-shadow);\n  background: rgb(245, 245, 245);\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n.actions[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-2);\n  border-radius: var(--button-rectangle-border-radius);\n  padding: 2px 4px !important;\n}\n\n.gauzy-button-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n.card-custom-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n[_nghost-%COMP%]     input {\n  border-radius: var(--border-radius);\n  box-shadow: var(--gauzy-shadow) inset;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%], \n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   .table-scroll-container[_ngcontent-%COMP%], \n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .table-scroll-container[_ngcontent-%COMP%] {\n  flex-grow: 10;\n  max-height: unset;\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  border-radius: 0 0 var(--border-radius) var(--border-radius);\n}\n[dir=ltr]   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  padding: 1rem 0.5rem 1rem 18px;\n}\n[dir=rtl]   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  padding: 1rem 18px 1rem 0.5rem;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%], \n[_nghost-%COMP%]   nb-card-header[_ngcontent-%COMP%] {\n  border-radius: var(--border-radius);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  height: 100%;\n  border-radius: var(--border-radius);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-header[_ngcontent-%COMP%] {\n  flex: 0 1 auto;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  overflow: unset;\n  height: calc(100vh - var(--header-height) - var(--footer-height) - 11.5rem + 3.75rem);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-footer[_ngcontent-%COMP%] {\n  flex: 0 1 auto;\n}\n\n[_nghost-%COMP%]   .card-header-title[_ngcontent-%COMP%] {\n  width: 100%;\n  justify-content: flex-start;\n}\n[_nghost-%COMP%]   nb-select[_ngcontent-%COMP%] {\n  min-width: 9rem;\n}\n[_nghost-%COMP%]   .grid[_ngcontent-%COMP%] {\n  height: 100%;\n  overflow: auto;\n}"]
    });
  }
};
PipelineDealsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_38__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__/* .UntilDestroy */ .d)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_38__/* .__metadata */ .Sn)("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__/* .TranslateService */ .c$, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .ChangeDetectorRef */ .gRc, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_24__/* .DealsService */ .T, _nebular_theme__WEBPACK_IMPORTED_MODULE_25__/* .NbDialogService */ .S0W, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_26__/* .PipelinesService */ .x, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_27__/* .ToastrService */ .t, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_28__/* .Store */ .il, _angular_router__WEBPACK_IMPORTED_MODULE_29__/* .ActivatedRoute */ .nX, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_30__/* .ErrorHandlingService */ .X])], PipelineDealsComponent);


/***/ }),

/***/ 21968:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   U: () => (/* binding */ InputFilterComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10936);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4478);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45808);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39855);
/* harmony import */ var angular2_smart_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52345);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(26860);






let InputFilterComponent = /*#__PURE__*/(() => {
  class InputFilterComponent extends angular2_smart_table__WEBPACK_IMPORTED_MODULE_0__/* .DefaultFilter */ .yG {
    constructor() {
      super();
      this.inputControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .FormControl */ .MJ();
    }
    ngOnInit() {
      // Subscribe to value changes of the inputControl
      this.subscription = this.inputControl.valueChanges.pipe(
      // Apply a debounce time to reduce the frequency of value changes
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .debounceTime */ .B)(this.debounceTime),
      // Ensure distinct values to avoid redundant operations
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .distinctUntilChanged */ .F)(),
      // Use tap to perform a side effect, invoking the filterFunction of the column
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .tap */ .M)(value => this.column.filterFunction(value, this.column.id)))
      // Subscribe to the observable
      .subscribe();
    }
    /**
     *
     * @param changes
     */
    ngOnChanges(changes) {}
    /**
     * Lifecycle hook called just before the component is destroyed.
     */
    ngOnDestroy() {
      // Unsubscribe from the subscription to avoid memory leaks.
      this.subscription.unsubscribe();
    }
    static {
      this.ɵfac = function InputFilterComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || InputFilterComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdefineComponent"] */ .VBU({
        type: InputFilterComponent,
        selectors: [["ga-input-filter-selector"]],
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3, _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵNgOnChangesFeature"] */ .OA$],
        decls: 1,
        vars: 2,
        consts: [[1, "form-control", 3, "formControl", "placeholder"]],
        template: function InputFilterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelement"] */ .nrm(0, "input", 0);
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Y8G("formControl", ctx.inputControl)("placeholder", ctx.column.title);
          }
        },
        dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .DefaultValueAccessor */ .me, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .NgControlStatus */ .BC, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .FormControlDirective */ .l_],
        encapsulation: 2
      });
    }
  }
  return InputFilterComponent;
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

/***/ 35665:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: () => (/* binding */ ServerDataSource)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(80189);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(79708);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39855);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(56891);
/* harmony import */ var angular2_smart_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52345);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(26024);
/* harmony import */ var _server_source_conf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59395);





class ServerDataSource extends angular2_smart_table__WEBPACK_IMPORTED_MODULE_0__/* .LocalDataSource */ .h0 {
  constructor(http, conf = {}) {
    super();
    this.http = http;
    this.lastRequestCount = 0;
    this.conf = new _server_source_conf__WEBPACK_IMPORTED_MODULE_1__/* .ServerSourceConf */ .b(conf);
    if (!this.conf.endPoint) {
      throw new Error('At least endPoint must be specified as a configuration of the server data source.');
    }
  }
  count() {
    return this.lastRequestCount;
  }
  getData() {
    return this.data;
  }
  getElements() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__/* .firstValueFrom */ ._)(this.requestElements().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .map */ .T)(res => {
      this.lastRequestCount = this.extractTotalFromResponse(res);
      this.data = this.extractDataFromResponse(res);
      return this.data;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .tap */ .M)(() => {
      if (this.conf.finalize) {
        this.conf.finalize();
      }
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .catchError */ .W)(error => {
      if (this.conf.finalize) {
        this.conf.finalize();
      }
      // failed from server then call finalize method
      throw new Error(error);
    })));
  }
  /**
   * Extracts array of data from server response
   * @param res
   * @returns {any}
   */
  extractDataFromResponse(res) {
    const rawData = res.body;
    let data = !!this.conf.dataKey ? rawData[this.conf.dataKey] : rawData;
    try {
      if (data instanceof Array) {
        return this.conf.resultMap ? data.map(this.conf.resultMap).filter(Boolean) : data;
      }
      throw new Error(`Data must be an array. Please check that data extracted from the server response by the key '${this.conf.dataKey}' exists and is array.`);
    } catch (error) {
      console.log(`Failed to extract data from response: ${error}`);
      return data;
    }
  }
  /**
   * Extracts total rows count from the server response
   * Looks for the count in the headers first, then in the response body
   * @param res
   * @returns {any}
   */
  extractTotalFromResponse(res) {
    if (res.headers.has(this.conf.totalKey)) {
      return +res.headers.get(this.conf.totalKey);
    } else {
      const rawData = res.body;
      return rawData[this.conf.totalKey] || 0;
    }
  }
  requestElements() {
    let httpParams = this.createRequestParams();
    return this.http.get(this.conf.endPoint, {
      params: httpParams,
      observe: 'response'
    });
  }
  createRequestParams() {
    const requestParams = {
      ...(this.conf.where ? {
        where: this.conf.where
      } : {}),
      ...(this.conf.join ? {
        join: this.conf.join
      } : {}),
      ...(this.conf.relations ? {
        relations: this.conf.relations
      } : {}),
      ...(this.conf.withDeleted ? {
        withDeleted: this.conf.withDeleted
      } : {}),
      ...((0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_6__/* .isNotEmpty */ .hj)(this.conf.select) ? {
        select: this.conf.select
      } : {}),
      ...this.addSortRequestParams(),
      ...this.addFilterRequestParams(),
      ...this.addPagerRequestParams()
    };
    return (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_6__/* .toParams */ .SV)(requestParams);
  }
  /**
   * Adds sorting parameters to the request based on the sorting configuration.
   *
   * This function processes the `sortConf` configuration and extracts the field
   * and its direction (ascending or descending) to create a sorting object.
   * If a field does not have a valid direction, it will be skipped, and a warning
   * will be logged. The resulting sorting parameters are returned as part of an
   * object that can be used in a request.
   *
   * @returns {Object} An object containing the sorting parameters.
   */
  addSortRequestParams() {
    if (this.sortConf) {
      // Initialize an object to hold sorting orders
      const orders = {};
      // Iterate through the sort configuration array
      this.sortConf.forEach(fieldConf => {
        // Ensure the field configuration has a valid direction
        if (fieldConf.direction) {
          // Convert direction to uppercase (e.g., ASC or DESC) and add it to orders
          orders[fieldConf.field] = fieldConf.direction.toUpperCase();
        } else {
          // Log a warning if the direction is not defined
          console.warn(`Direction is not defined for field: ${fieldConf.field}`);
        }
      });
      // Return the sorting orders wrapped in the expected format
      return {
        [this.conf.sortDirKey]: orders
      };
    } else {
      // Return an empty object if there is no sorting configuration
      return {};
    }
  }
  /**
   * Add additional smart datatables filters to the request parameters.
   *
   * @returns {Object} The constructed filter object for request parameters.
   */
  addFilterRequestParams() {
    // Check if filter configuration is defined
    if (!this.filterConf) {
      // If not defined, return an empty object
      return {};
    }
    // Initialize an object to store filter values
    const filters = {};
    // Iterate over each filter configuration
    this.filterConf.forEach(({
      field,
      search
    }) => {
      // Check if search value is truthy, and add it to filters
      if (search) {
        filters[field] = search;
      }
    });
    // Construct and return the final filter object with the specified key
    return {
      [this.conf.filterFieldKey]: filters
    };
  }
  addPagerRequestParams() {
    try {
      if (this.pagingConf) {
        if (typeof this.pagingConf['page'] === 'number' && typeof this.pagingConf['perPage'] === 'number') {
          return {
            [this.conf.pagerPageKey]: this.pagingConf['page'],
            [this.conf.pagerLimitKey]: this.pagingConf['perPage']
          };
        }
        return {};
      } else {
        return {};
      }
    } catch (error) {
      console.log('Error while retrieving pagination configuration', error);
      return {};
    }
  }
}

/***/ }),

/***/ 36902:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: () => (/* binding */ AsyncScheduler)
/* harmony export */ });
/* harmony import */ var _Scheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11768);

class AsyncScheduler extends _Scheduler__WEBPACK_IMPORTED_MODULE_0__/* .Scheduler */ ._ {
  constructor(SchedulerAction, now = _Scheduler__WEBPACK_IMPORTED_MODULE_0__/* .Scheduler */ ._.now) {
    super(SchedulerAction, now);
    this.actions = [];
    this._active = false;
  }
  flush(action) {
    const {
      actions
    } = this;
    if (this._active) {
      actions.push(action);
      return;
    }
    let error;
    this._active = true;
    do {
      if (error = action.execute(action.state, action.delay)) {
        break;
      }
    } while (action = actions.shift());
    this._active = false;
    if (error) {
      while (action = actions.shift()) {
        action.unsubscribe();
      }
      throw error;
    }
  }
}
//# sourceMappingURL=AsyncScheduler.js.map

/***/ }),

/***/ 38119:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ PipelineDealExcerptComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);

let PipelineDealExcerptComponent = /*#__PURE__*/(() => {
  class PipelineDealExcerptComponent {
    static {
      this.ɵfac = function PipelineDealExcerptComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || PipelineDealExcerptComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: PipelineDealExcerptComponent,
        selectors: [["ga-pipeline-excerpt"]],
        inputs: {
          value: "value",
          rowData: "rowData"
        },
        standalone: false,
        decls: 1,
        vars: 1,
        template: function PipelineDealExcerptComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(0);
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(ctx.rowData == null ? null : ctx.rowData.stage == null ? null : ctx.rowData.stage.name);
          }
        },
        encapsulation: 2
      });
    }
  }
  return PipelineDealExcerptComponent;
})();

/***/ }),

/***/ 42419:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ PipelineDealProbabilityComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14572);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19223);



function PipelineDealProbabilityComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate2"] */ .Lme("", ctx_r0.probability, " - ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(2, 2, "PIPELINE_DEALS_PAGE.LOW"), "");
  }
}
function PipelineDealProbabilityComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate2"] */ .Lme("", ctx_r0.probability, " - ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(2, 2, "PIPELINE_DEALS_PAGE.LOW"), "");
  }
}
function PipelineDealProbabilityComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate2"] */ .Lme(" ", ctx_r0.probability, " - ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(2, 2, "PIPELINE_DEALS_PAGE.MEDIUM"), " ");
  }
}
function PipelineDealProbabilityComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate2"] */ .Lme(" ", ctx_r0.probability, " - ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(2, 2, "PIPELINE_DEALS_PAGE.MEDIUM"), " ");
  }
}
function PipelineDealProbabilityComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate2"] */ .Lme("", ctx_r0.probability, " - ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(2, 2, "PIPELINE_DEALS_PAGE.HIGH"), "");
  }
}
function PipelineDealProbabilityComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate2"] */ .Lme(" ", ctx_r0.probability, " - ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(2, 2, "PIPELINE_DEALS_PAGE.UNKNOWN"), " ");
  }
}
let PipelineDealProbabilityComponent = /*#__PURE__*/(() => {
  class PipelineDealProbabilityComponent {
    ngOnInit() {
      this.probability = this.rowData.probability;
    }
    static {
      this.ɵfac = function PipelineDealProbabilityComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || PipelineDealProbabilityComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: PipelineDealProbabilityComponent,
        selectors: [["ga-pipeline-deal-probability"]],
        inputs: {
          value: "value",
          rowData: "rowData"
        },
        standalone: false,
        decls: 7,
        vars: 6,
        consts: [[1, "text-center", 2, "border-radius", "0.25rem", "min-width", "5rem", 3, "ngSwitch"], ["class", "badge-danger", 4, "ngSwitchCase"], ["class", "badge-warning", 4, "ngSwitchCase"], ["class", "badge-success", 4, "ngSwitchCase"], ["class", "badge-primary", 4, "ngSwitchDefault"], [1, "badge-danger"], [1, "badge-warning"], [1, "badge-success"], [1, "badge-primary"]],
        template: function PipelineDealProbabilityComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, PipelineDealProbabilityComponent_div_1_Template, 3, 4, "div", 1)(2, PipelineDealProbabilityComponent_div_2_Template, 3, 4, "div", 1)(3, PipelineDealProbabilityComponent_div_3_Template, 3, 4, "div", 2)(4, PipelineDealProbabilityComponent_div_4_Template, 3, 4, "div", 2)(5, PipelineDealProbabilityComponent_div_5_Template, 3, 4, "div", 3)(6, PipelineDealProbabilityComponent_div_6_Template, 3, 4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngSwitch", ctx.probability);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngSwitchCase", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngSwitchCase", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngSwitchCase", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngSwitchCase", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngSwitchCase", 5);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .NgSwitch */ .ux, _angular_common__WEBPACK_IMPORTED_MODULE_1__/* .NgSwitchCase */ .e1, _angular_common__WEBPACK_IMPORTED_MODULE_1__/* .NgSwitchDefault */ .fG, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__/* .TranslatePipe */ .D9],
        encapsulation: 2
      });
    }
  }
  return PipelineDealProbabilityComponent;
})();

/***/ }),

/***/ 42883:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: () => (/* binding */ throwIfEmpty)
/* harmony export */ });
/* harmony import */ var _util_EmptyError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25413);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7661);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25969);



function throwIfEmpty(errorFactory = defaultErrorFactory) {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__/* .operate */ .N)((source, subscriber) => {
    let hasValue = false;
    source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__/* .createOperatorSubscriber */ ._)(subscriber, value => {
      hasValue = true;
      subscriber.next(value);
    }, () => hasValue ? subscriber.complete() : subscriber.error(errorFactory())));
  });
}
function defaultErrorFactory() {
  return new _util_EmptyError__WEBPACK_IMPORTED_MODULE_2__/* .EmptyError */ .G();
}
//# sourceMappingURL=throwIfEmpty.js.map

/***/ }),

/***/ 43273:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   r: () => (/* binding */ Action)
/* harmony export */ });
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(60640);

class Action extends _Subscription__WEBPACK_IMPORTED_MODULE_0__/* .Subscription */ .yU {
  constructor(scheduler, work) {
    super();
  }
  schedule(state, delay = 0) {
    return this;
  }
}
//# sourceMappingURL=Action.js.map

/***/ }),

/***/ 45293:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ GauzyButtonActionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14572);
/* harmony import */ var _components_layout_selector_layout_selector_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(51102);





const _c0 = [[["", "buttonTemplateVisible", ""]], [["", "buttonTemplate", ""]]];
const _c1 = ["[buttonTemplateVisible]", "[buttonTemplate]"];
function GauzyButtonActionComponent_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainer"] */ .eu8(0);
  }
}
function GauzyButtonActionComponent_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainer"] */ .eu8(0);
  }
}
function GauzyButtonActionComponent_ga_layout_selector_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(0, "ga-layout-selector", 5);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("componentName", ctx_r0.componentName);
  }
}
let GauzyButtonActionComponent = /*#__PURE__*/(() => {
  class GauzyButtonActionComponent {
    constructor() {
      this.isDisable = true;
      this.hasLayoutSelector = true;
    }
    /**
     * not implemented
     */
    ngOnInit() {}
    static {
      this.ɵfac = function GauzyButtonActionComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || GauzyButtonActionComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: GauzyButtonActionComponent,
        selectors: [["ngx-gauzy-button-action"]],
        inputs: {
          isDisable: "isDisable",
          hasLayoutSelector: "hasLayoutSelector",
          componentName: "componentName",
          buttonTemplate: "buttonTemplate",
          buttonTemplateVisible: "buttonTemplateVisible"
        },
        standalone: false,
        ngContentSelectors: _c1,
        decls: 9,
        vars: 5,
        consts: [[1, "actions-container"], [1, "transition-container"], [3, "ngClass"], [4, "ngTemplateOutlet"], [3, "componentName", 4, "ngIf"], [3, "componentName"]],
        template: function GauzyButtonActionComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵprojectionDef"] */ .NAR(_c0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵprojection"] */ .SdG(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(5, GauzyButtonActionComponent_ng_container_5_Template, 1, 0, "ng-container", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(6, GauzyButtonActionComponent_ng_container_6_Template, 1, 0, "ng-container", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵprojection"] */ .SdG(7, 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(8, GauzyButtonActionComponent_ga_layout_selector_8_Template, 1, 1, "ga-layout-selector", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngClass", !ctx.isDisable ? "transition show" : "transition hide");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngClass", !ctx.isDisable ? "transition show" : "transition show-button");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngTemplateOutlet", ctx.buttonTemplateVisible);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngTemplateOutlet", ctx.buttonTemplate);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.hasLayoutSelector);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .NgClass */ .YU, _angular_common__WEBPACK_IMPORTED_MODULE_1__/* .NgIf */ .bT, _angular_common__WEBPACK_IMPORTED_MODULE_1__/* .NgTemplateOutlet */ .T3, _components_layout_selector_layout_selector_component__WEBPACK_IMPORTED_MODULE_2__/* .LayoutSelectorComponent */ .d],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.action[_ngcontent-%COMP%] {\n  box-shadow: var(--gauzy-shadow);\n  border: none;\n}\n.action[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}\n.action.info[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: var(--color-info-default);\n  color: white;\n  border-color: var(--color-info-default);\n}\n.action.info-text-1[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  color: var(--color-info-default);\n}\n.action.secondary[_ngcontent-%COMP%] {\n  color: #7e7e8f;\n}\n.action.success[_ngcontent-%COMP%] {\n  color: var(--color-success-default);\n}\n.action.warning[_ngcontent-%COMP%] {\n  color: rgb(245, 109, 88);\n}\n.action.orange[_ngcontent-%COMP%] {\n  color: rgb(255, 171, 45);\n}\n.action.primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n}\n.action.primary.soft[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: rgba(110, 73, 232, 0.1);\n}\n.action.select-nb[_ngcontent-%COMP%]     {\n  box-shadow: none;\n}\n.action.select-nb[_ngcontent-%COMP%]     .select-button {\n  box-shadow: var(--gauzy-shadow);\n  background: rgb(245, 245, 245);\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n.actions[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-2);\n  border-radius: var(--button-rectangle-border-radius);\n  padding: 2px 4px !important;\n}\n\n.gauzy-button-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n.card-custom-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n[_nghost-%COMP%]     input {\n  border-radius: var(--border-radius);\n  box-shadow: var(--gauzy-shadow) inset;\n}\n\n[_nghost-%COMP%]   .actions-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  padding: 1rem 0;\n}\n[dir=rtl]   [_nghost-%COMP%]   .actions-container[_ngcontent-%COMP%] {\n  left: 0;\n}\n[dir=ltr]   [_nghost-%COMP%]   .actions-container[_ngcontent-%COMP%] {\n  right: 0;\n}\n\n[_nghost-%COMP%]   .transition-container[_ngcontent-%COMP%] {\n  overflow-x: hidden;\n  border-radius: var(--button-rectangle-border-radius);\n}\n[_nghost-%COMP%]   .transition-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-2);\n  border-radius: var(--button-rectangle-border-radius);\n  padding: 2px 4px;\n}\n[dir=ltr]   [_nghost-%COMP%]   .transition-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n[dir=rtl]   [_nghost-%COMP%]   .transition-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n\n[_nghost-%COMP%]   .transition[_ngcontent-%COMP%] {\n  display: flex;\n}\n[_nghost-%COMP%]   .transition.hide[_ngcontent-%COMP%] {\n  transition: all 0.1s ease-in;\n}\n[dir=rtl]   [_nghost-%COMP%]   .transition.hide[_ngcontent-%COMP%] {\n  transform: translateX(-100%);\n}\n[dir=ltr]   [_nghost-%COMP%]   .transition.hide[_ngcontent-%COMP%] {\n  transform: translateX(100%);\n}\n[_nghost-%COMP%]   .transition.show[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: translateX(0%);\n  transition: all 0.2s ease-out;\n}\n[_nghost-%COMP%]   .transition.show-button[_ngcontent-%COMP%] {\n  transition: all 0.15s ease-out;\n}\n[dir=rtl]   [_nghost-%COMP%]   .transition.show-button[_ngcontent-%COMP%] {\n  transform: translateX(100%);\n}\n[dir=ltr]   [_nghost-%COMP%]   .transition.show-button[_ngcontent-%COMP%] {\n  transform: translateX(-100%);\n}\n\n[dir=ltr]   [_nghost-%COMP%]   ga-layout-selector[_ngcontent-%COMP%] {\n  margin-left: 20px;\n}\n[dir=rtl]   [_nghost-%COMP%]   ga-layout-selector[_ngcontent-%COMP%] {\n  margin-right: 20px;\n}"]
      });
    }
  }
  return GauzyButtonActionComponent;
})();

/***/ }),

/***/ 54634:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ PipelineDealFormComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(73014);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(64411);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(9620);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10936);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(72781);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(73246);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(29421);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(87081);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(47060);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(50666);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(23423);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(19223);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26024);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(71924);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(69432);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(941);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(15480);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(54263);
/* harmony import */ var _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38546);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(14572);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(56383);
/* harmony import */ var _packages_ui_core_shared_src_lib_components_back_navigation_back_navigation_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(90910);


















function PipelineDealFormComponent_nb_card_1_nb_option_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const stage_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("value", stage_r2.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", stage_r2.name, " ");
  }
}
function PipelineDealFormComponent_nb_card_1_nb_option_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const client_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("value", client_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", client_r3.name, " ");
  }
}
function PipelineDealFormComponent_nb_card_1_nb_option_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const probability_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("value", probability_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", probability_r4, " ");
  }
}
function PipelineDealFormComponent_nb_card_1_ng_template_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("disabled", ctx_r4.form.invalid || ctx_r4.form.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(2, 2, "BUTTONS.UPDATE"), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵsanitizeHtml"] */ .npT);
  }
}
function PipelineDealFormComponent_nb_card_1_ng_template_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("disabled", ctx_r4.form.invalid || ctx_r4.form.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(2, 2, "BUTTONS.CREATE"), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵsanitizeHtml"] */ .npT);
  }
}
function PipelineDealFormComponent_nb_card_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-card", 3)(1, "nb-card-header", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(2, "ngx-back-navigation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(7, "nb-card-body")(8, "nb-form-field")(9, "div", 5)(10, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(13, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(15, "nb-form-field")(16, "div", 5)(17, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(20, "nb-select", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(21, PipelineDealFormComponent_nb_card_1_nb_option_21_Template, 2, 2, "nb-option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(22, "nb-form-field")(23, "div", 5)(24, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(26, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(27, "nb-select", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(28, PipelineDealFormComponent_nb_card_1_nb_option_28_Template, 2, 2, "nb-option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(29, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(30, "nb-form-field")(31, "div", 5)(32, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(34, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(35, "nb-select", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(36, PipelineDealFormComponent_nb_card_1_nb_option_36_Template, 2, 2, "nb-option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(37, "nb-card-footer", 15)(38, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function PipelineDealFormComponent_nb_card_1_Template_button_click_38_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r4.cancel());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(40, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(41, PipelineDealFormComponent_nb_card_1_ng_template_41_Template, 3, 4, "ng-template", 17)(42, PipelineDealFormComponent_nb_card_1_ng_template_42_Template, 3, 4, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplateRefExtractor"] */ .C5r);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const pipeline_r6 = ctx.ngIf;
    const createButtonTemplate_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(43);
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind2"] */ .i5U(6, 16, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(5, 14, ctx_r4.deal$) ? "PIPELINE_DEAL_EDIT_PAGE.HEADER" : "PIPELINE_DEAL_CREATE_PAGE.HEADER", pipeline_r6), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(12, 19, "SM_TABLE.TITLE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(14, 21, "SM_TABLE.TITLE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(19, 23, "PIPELINE_DEAL_CREATE_PAGE.SELECT_STAGE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngForOf", pipeline_r6 == null ? null : pipeline_r6.stages);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(26, 25, "PIPELINE_DEAL_CREATE_PAGE.SELECT_CLIENT"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("selected", ctx_r4.selectedClient);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(29, 27, ctx_r4.clients$));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(34, 29, "PIPELINE_DEAL_CREATE_PAGE.PROBABILITY"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("selected", ctx_r4.selectedProbability);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx_r4.probabilities);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(40, 31, "BUTTONS.CANCEL"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r4.deal == null ? null : ctx_r4.deal.id)("ngIfElse", createButtonTemplate_r7);
  }
}
let PipelineDealFormComponent = class PipelineDealFormComponent extends _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_1__/* .TranslationBaseComponent */ .K {
  constructor(translateService, _router, _fb, _store, _dealsService, _activatedRoute, _clientsService, _toastrService, _errorHandlingService) {
    super(translateService);
    this.translateService = translateService;
    this._router = _router;
    this._fb = _fb;
    this._store = _store;
    this._dealsService = _dealsService;
    this._activatedRoute = _activatedRoute;
    this._clientsService = _clientsService;
    this._toastrService = _toastrService;
    this._errorHandlingService = _errorHandlingService;
    this.probabilities = [0, 1, 2, 3, 4, 5];
    this.clients = [];
    // Form Builders
    this.form = this._fb.group({
      stageId: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .Validators */ .k0.required],
      title: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .Validators */ .k0.required],
      clientId: [null],
      probability: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .Validators */ .k0.required]
    });
  }
  ngOnInit() {
    // Setting up the organization$ observable pipeline
    this.clients$ = this._store.selectedOrganization$.pipe(
    // Ensure only distinct values are emitted
    (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_3__/* .distinctUntilChange */ .nI)(),
    // Exclude falsy values from the emitted values
    (0,rxjs__WEBPACK_IMPORTED_MODULE_4__/* .filter */ .p)(organization => !!organization),
    // Tap operator for side effects - setting the organization property
    (0,rxjs__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .M)(organization => this.organization = organization),
    // Switch to route data stream once organization is confirmed
    (0,rxjs__WEBPACK_IMPORTED_MODULE_6__/* .switchMap */ .n)(() => {
      // Extract organization properties
      const {
        id: organizationId,
        tenantId
      } = this.organization;
      // Fetch contacts
      return this._clientsService.getAll([], {
        organizationId,
        tenantId
      });
    }),
    // Map the contacts to the clients property
    (0,rxjs__WEBPACK_IMPORTED_MODULE_7__/* .map */ .T)(({
      items
    }) => items),
    // Handle errors
    (0,rxjs__WEBPACK_IMPORTED_MODULE_8__/* .catchError */ .W)(error => {
      console.error('Error fetching organization contacts:', error);
      // Handle and log errors
      this._errorHandlingService.handleError(error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)([]);
    }),
    // Handle component lifecycle to avoid memory leaks
    (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__/* .untilDestroyed */ .s)(this));
    this.pipeline$ = this._activatedRoute.params.pipe(
    // Filter for the presence of pipelineId in route params
    (0,rxjs__WEBPACK_IMPORTED_MODULE_4__/* .filter */ .p)(({
      pipelineId
    }) => !!pipelineId),
    // Switch to route data stream once pipelineId is confirmed
    (0,rxjs__WEBPACK_IMPORTED_MODULE_6__/* .switchMap */ .n)(() => this._activatedRoute.data),
    // Exclude falsy values from the emitted values
    (0,rxjs__WEBPACK_IMPORTED_MODULE_4__/* .filter */ .p)(({
      pipeline
    }) => !!pipeline),
    // Map the pipeline to the pipeline property
    (0,rxjs__WEBPACK_IMPORTED_MODULE_7__/* .map */ .T)(({
      pipeline
    }) => pipeline),
    // Tap operator for side effects - setting the form property
    (0,rxjs__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .M)(pipeline => {
      this.pipeline = pipeline;
      this.form.patchValue({
        stageId: this.pipeline.stages[0]?.id
      });
    }),
    // Handle component lifecycle to avoid memory leaks
    (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__/* .untilDestroyed */ .s)(this));
    this.deal$ = this._activatedRoute.params.pipe(
    // Filter for the presence of dealId in route params
    (0,rxjs__WEBPACK_IMPORTED_MODULE_4__/* .filter */ .p)(({
      dealId
    }) => !!dealId),
    // Switch to route data stream once dealId is confirmed
    (0,rxjs__WEBPACK_IMPORTED_MODULE_6__/* .switchMap */ .n)(() => this._activatedRoute.data),
    // Exclude falsy values from the emitted values
    (0,rxjs__WEBPACK_IMPORTED_MODULE_4__/* .filter */ .p)(({
      deal
    }) => !!deal),
    // Map the deal to the deal property
    (0,rxjs__WEBPACK_IMPORTED_MODULE_7__/* .map */ .T)(({
      deal
    }) => deal),
    // Tap operator for side effects - setting the form property
    (0,rxjs__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .M)(deal => {
      this.deal = deal;
      this.patchFormValue(deal);
    }),
    // Handle component lifecycle to avoid memory leaks
    (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__/* .untilDestroyed */ .s)(this));
  }
  /**
   * Patch form values with the deal data
   *
   * @param deal The deal object containing data to patch into the form
   */
  patchFormValue(deal) {
    const {
      title,
      stageId,
      probability,
      clientId
    } = deal;
    this.form.patchValue({
      title,
      stageId,
      probability,
      clientId
    });
    this.selectedProbability = probability;
  }
  /**
   * Submits the form data for creating or updating a deal.
   *
   * This method handles the submission of form data for either creating a new deal
   * or updating an existing one. It also manages form state (disable/enable) and
   * displays success notifications.
   *
   * @returns {Promise<void>} A promise that resolves when the form submission is complete.
   */
  onSubmit() {
    var _this = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A)(function* () {
      const {
        organization,
        form
      } = _this;
      // If no organization is selected, do not proceed
      if (!organization) {
        return;
      }
      // Extract organizationId and tenantId from the selected organization
      const {
        id: organizationId,
        tenantId
      } = organization;
      // Merge the form values with organizationId and tenantId
      const value = {
        ...form.value,
        organizationId,
        tenantId
      };
      // Disable the form to prevent further input during submission
      form.disable();
      try {
        // Determine whether to create a new deal or update an existing one
        if (_this.deal) {
          yield _this._dealsService.update(_this.deal?.id, value);
        } else {
          yield _this._dealsService.create(value);
        }
        // Determine the success message based on whether it's a create or update operation
        const successMessage = _this.deal?.id ? 'PIPELINE_DEALS_PAGE.DEAL_EDITED' : 'PIPELINE_DEALS_PAGE.DEAL_ADDED';
        // Display a success notification with the deal title
        _this._toastrService.success(successMessage, {
          name: value.title
        });
        // Navigate to the appropriate route after successful submission
        _this._router.navigate([_this.deal?.id ? '../..' : '..'], {
          relativeTo: _this._activatedRoute
        });
      } catch (error) {
        // Handle and log errors
        _this._errorHandlingService.handleError(error);
      } finally {
        // If an error occurs, re-enable the form for further input
        form.enable();
      }
    })();
  }
  /**
   * Cancels the form submission.
   */
  cancel() {
    window.history.back();
  }
  ngOnDestroy() {}
  static {
    this.ɵfac = function PipelineDealFormComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || PipelineDealFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__/* .TranslateService */ .c$), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_router__WEBPACK_IMPORTED_MODULE_13__/* .Router */ .Ix), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .UntypedFormBuilder */ .ze), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_14__/* .Store */ .il), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_15__/* .DealsService */ .T), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_router__WEBPACK_IMPORTED_MODULE_13__/* .ActivatedRoute */ .nX), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_16__/* .OrganizationContactService */ .$), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_17__/* .ToastrService */ .t), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_18__/* .ErrorHandlingService */ .X));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
      type: PipelineDealFormComponent,
      selectors: [["ga-pipeline-deals-form"]],
      standalone: false,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
      decls: 3,
      vars: 4,
      consts: [["createButtonTemplate", ""], [3, "ngSubmit", "formGroup"], ["class", "card-scroll", 4, "ngIf"], [1, "card-scroll"], [2, "display", "flex"], [1, "form-group"], ["for", "title", 1, "label"], ["nbInput", "", "type", "text", "formControlName", "title", 3, "placeholder"], ["for", "stageId", 1, "label"], ["formControlName", "stageId"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "client", 1, "label"], ["formControlName", "clientId", "placeholder", "Clients", 3, "selected"], ["for", "probability", 1, "label"], ["formControlName", "probability", "placeholder", "(0-low / 5-high)", 3, "selected"], [1, "text-left"], ["nbButton", "", "type", "button", "status", "basic", 1, "ml-2", 3, "click"], [3, "ngIf", "ngIfElse"], [3, "value"], ["type", "submit", "nbButton", "", "status", "info", 1, "mr-3", "ml-3", 3, "disabled"], [3, "innerHTML"], ["type", "submit", "nbButton", "", "status", "primary", 1, "mr-3", "ml-3", 3, "disabled"]],
      template: function PipelineDealFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "form", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("ngSubmit", function PipelineDealFormComponent_Template_form_ngSubmit_0_listener() {
            return ctx.onSubmit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, PipelineDealFormComponent_nb_card_1_Template, 44, 33, "nb-card", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("formGroup", ctx.form);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(2, 2, ctx.pipeline$));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_19__/* .NgForOf */ .Sq, _angular_common__WEBPACK_IMPORTED_MODULE_19__/* .NgIf */ .bT, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* ["ɵNgNoValidate"] */ .qT, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .DefaultValueAccessor */ .me, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .NgControlStatus */ .BC, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .NgControlStatusGroup */ .cb, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .FormGroupDirective */ .j4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .FormControlName */ .JD, _nebular_theme__WEBPACK_IMPORTED_MODULE_20__/* .NbFormFieldComponent */ .u_9, _nebular_theme__WEBPACK_IMPORTED_MODULE_20__/* .NbButtonComponent */ .YP2, _nebular_theme__WEBPACK_IMPORTED_MODULE_20__/* .NbSelectComponent */ .S81, _nebular_theme__WEBPACK_IMPORTED_MODULE_20__/* .NbOptionComponent */ .ZJ2, _nebular_theme__WEBPACK_IMPORTED_MODULE_20__/* .NbInputDirective */ .i6h, _nebular_theme__WEBPACK_IMPORTED_MODULE_20__/* .NbCardComponent */ .SrT, _nebular_theme__WEBPACK_IMPORTED_MODULE_20__/* .NbCardBodyComponent */ .KH5, _nebular_theme__WEBPACK_IMPORTED_MODULE_20__/* .NbCardFooterComponent */ .VDm, _nebular_theme__WEBPACK_IMPORTED_MODULE_20__/* .NbCardHeaderComponent */ .zJv, _packages_ui_core_shared_src_lib_components_back_navigation_back_navigation_component__WEBPACK_IMPORTED_MODULE_21__/* .BackNavigationComponent */ .r, _angular_common__WEBPACK_IMPORTED_MODULE_19__/* .AsyncPipe */ .Jj, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__/* .TranslatePipe */ .D9],
      styles: [".form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column !important;\n  min-width: 20rem;\n  margin-bottom: 2rem;\n}\n\nnb-card-body[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n}"]
    });
  }
};
PipelineDealFormComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_22__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__/* .UntilDestroy */ .d)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_22__/* .__metadata */ .Sn)("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__/* .TranslateService */ .c$, _angular_router__WEBPACK_IMPORTED_MODULE_13__/* .Router */ .Ix, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .UntypedFormBuilder */ .ze, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_14__/* .Store */ .il, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_15__/* .DealsService */ .T, _angular_router__WEBPACK_IMPORTED_MODULE_13__/* .ActivatedRoute */ .nX, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_16__/* .OrganizationContactService */ .$, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_17__/* .ToastrService */ .t, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_18__/* .ErrorHandlingService */ .X])], PipelineDealFormComponent);


/***/ }),

/***/ 55101:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   u: () => (/* binding */ DeleteConfirmationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56383);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14572);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19223);





function DeleteConfirmationComponent_span_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(2, 1, "FORM.DELETE_CONFIRMATION.RECORD"), " ");
  }
}
let DeleteConfirmationComponent = /*#__PURE__*/(() => {
  class DeleteConfirmationComponent {
    constructor(dialogRef) {
      this.dialogRef = dialogRef;
      this.isRecord = true;
    }
    close() {
      this.dialogRef.close();
    }
    delete() {
      this.dialogRef.close('ok');
    }
    static {
      this.ɵfac = function DeleteConfirmationComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || DeleteConfirmationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbDialogRef */ .ybQ));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: DeleteConfirmationComponent,
        selectors: [["ga-delete-confirmation"]],
        standalone: false,
        decls: 21,
        vars: 16,
        consts: [[1, "center"], [1, "cancel"], [1, "fas", "fa-times", 3, "click"], [1, "title"], [4, "ngIf"], ["status", "basic", "outline", "", "nbButton", "", 3, "click"], ["status", "danger", "nbButton", "", 1, "mr-3", "ml-3", 3, "click"]],
        template: function DeleteConfirmationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-card", 0)(1, "nb-card-header")(2, "span", 1)(3, "i", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function DeleteConfirmationComponent_Template_i_click_3_listener() {
              return ctx.close();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(4, "h6", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(6, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(7, "nb-card-body")(8, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(10, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(11, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(12, DeleteConfirmationComponent_span_12_Template, 3, 3, "span", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(13, "? ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(14, "nb-card-footer")(15, "button", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function DeleteConfirmationComponent_Template_button_click_15_listener() {
              return ctx.close();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(17, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(18, "button", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function DeleteConfirmationComponent_Template_button_click_18_listener() {
              return ctx.delete();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(20, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(6, 6, "FORM.CONFIRM"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate2"] */ .Lme(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(10, 8, "FORM.DELETE_CONFIRMATION.SURE"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(11, 10, ctx.recordType), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.isRecord);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(17, 12, "BUTTONS.CANCEL"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(20, 14, "BUTTONS.OK"), " ");
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__/* .NgIf */ .bT, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbButtonComponent */ .YP2, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbCardComponent */ .SrT, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbCardBodyComponent */ .KH5, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbCardFooterComponent */ .VDm, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbCardHeaderComponent */ .zJv, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__/* .TranslatePipe */ .D9],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   i[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n}\n[dir=ltr]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n[dir=rtl]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--gauzy-text-color-1);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(245, 109, 88, 0.3);\n  border-width: 2px;\n  color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(245, 109, 88, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 16px;\n  letter-spacing: 0em;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(126, 126, 143, 0.3);\n  border-width: 2px;\n  color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(126, 126, 143, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(37, 184, 105, 0.3);\n  border-width: 2px;\n  color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(37, 184, 105, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[disabled][_ngcontent-%COMP%], \n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic.btn-disabled[_ngcontent-%COMP%] {\n  background-color: var(--button-outline-basic-disabled-background-color);\n  border-color: var(--button-outline-basic-disabled-border-color);\n  color: var(--button-outline-basic-disabled-text-color);\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].primary.appearance-filled.status-primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  border: unset;\n  background-color: var(--color-primary-transparent-default);\n  box-shadow: var(--gauzy-shadow) 0, 0, 0, 0.15;\n}\n[dir=ltr]   [_nghost-%COMP%]     input, \n[dir=ltr]   [_nghost-%COMP%]     textarea {\n  text-align: start;\n}\n[dir=rtl]   [_nghost-%COMP%]     input, \n[dir=rtl]   [_nghost-%COMP%]     textarea {\n  text-align: end;\n}\n[_nghost-%COMP%]     input, \n[_nghost-%COMP%]     nb-select.appearance-outline.status-basic .select-button, \n[_nghost-%COMP%]     .ng-select .ng-select-container {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n  height: 42px !important;\n}\n[_nghost-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder, \n[_nghost-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {\n  top: unset !important;\n}\n[_nghost-%COMP%]     label, \n[_nghost-%COMP%]     .label {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  color: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]     textarea {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n}\n[_nghost-%COMP%]     .ng-select .ng-select-container input, \n[_nghost-%COMP%]     nb-tag-list input {\n  background-color: unset !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n}\n\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: nb-theme(gauzy-card-1);\n}\n[_nghost-%COMP%]   .center[_ngcontent-%COMP%] {\n  width: 300px;\n}"]
      });
    }
  }
  return DeleteConfirmationComponent;
})();

/***/ }),

/***/ 55256:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   k: () => (/* binding */ Service)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80189);

class Service {
  constructor({
    http,
    basePath
  }) {
    this.basePath = basePath;
    this.http = http;
  }
  create(data) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ ._)(this.http.post(this.basePath, data));
  }
  find(idOrRelations, filter) {
    if (!arguments.length) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ ._)(this.http.get(this.basePath));
    } else if ('string' === typeof idOrRelations) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ ._)(this.http.get(`${this.basePath}/${idOrRelations}`));
    }
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ ._)(this.http.get(this.basePath, {
      params: {
        data: JSON.stringify({
          relations: idOrRelations,
          filter
        })
      }
    }));
  }
  update(id, data) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ ._)(this.http.put(`${this.basePath}/${id}`, data));
  }
  delete(id) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ ._)(this.http.delete(`${this.basePath}/${id}`));
  }
}

/***/ }),

/***/ 57733:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   z: () => (/* binding */ combineLatest)
/* harmony export */ });
/* unused harmony export combineLatestInit */
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(35484);
/* harmony import */ var _util_argsArgArrayOrObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67306);
/* harmony import */ var _from__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39127);
/* harmony import */ var _util_identity__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(89685);
/* harmony import */ var _util_mapOneOrManyArgs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(86289);
/* harmony import */ var _util_args__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13685);
/* harmony import */ var _util_createObject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(82795);
/* harmony import */ var _operators_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(25969);
/* harmony import */ var _util_executeSchedule__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(12508);









function combineLatest(...args) {
  const scheduler = (0,_util_args__WEBPACK_IMPORTED_MODULE_0__/* .popScheduler */ .lI)(args);
  const resultSelector = (0,_util_args__WEBPACK_IMPORTED_MODULE_0__/* .popResultSelector */ .ms)(args);
  const {
    args: observables,
    keys
  } = (0,_util_argsArgArrayOrObject__WEBPACK_IMPORTED_MODULE_1__/* .argsArgArrayOrObject */ .D)(args);
  if (observables.length === 0) {
    return (0,_from__WEBPACK_IMPORTED_MODULE_2__/* .from */ .H)([], scheduler);
  }
  const result = new _Observable__WEBPACK_IMPORTED_MODULE_3__/* .Observable */ .c(combineLatestInit(observables, scheduler, keys ? values => (0,_util_createObject__WEBPACK_IMPORTED_MODULE_4__/* .createObject */ .e)(keys, values) : _util_identity__WEBPACK_IMPORTED_MODULE_5__/* .identity */ .D));
  return resultSelector ? result.pipe((0,_util_mapOneOrManyArgs__WEBPACK_IMPORTED_MODULE_6__/* .mapOneOrManyArgs */ .I)(resultSelector)) : result;
}
function combineLatestInit(observables, scheduler, valueTransform = _util_identity__WEBPACK_IMPORTED_MODULE_5__/* .identity */ .D) {
  return subscriber => {
    maybeSchedule(scheduler, () => {
      const {
        length
      } = observables;
      const values = new Array(length);
      let active = length;
      let remainingFirstValues = length;
      for (let i = 0; i < length; i++) {
        maybeSchedule(scheduler, () => {
          const source = (0,_from__WEBPACK_IMPORTED_MODULE_2__/* .from */ .H)(observables[i], scheduler);
          let hasFirstValue = false;
          source.subscribe((0,_operators_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_7__/* .createOperatorSubscriber */ ._)(subscriber, value => {
            values[i] = value;
            if (!hasFirstValue) {
              hasFirstValue = true;
              remainingFirstValues--;
            }
            if (!remainingFirstValues) {
              subscriber.next(valueTransform(values.slice()));
            }
          }, () => {
            if (! --active) {
              subscriber.complete();
            }
          }));
        }, subscriber);
      }
    }, subscriber);
  };
}
function maybeSchedule(scheduler, execute, subscription) {
  if (scheduler) {
    (0,_util_executeSchedule__WEBPACK_IMPORTED_MODULE_8__/* .executeSchedule */ .N)(subscription, scheduler, execute);
  } else {
    execute();
  }
}
//# sourceMappingURL=combineLatest.js.map

/***/ }),

/***/ 59395:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   b: () => (/* binding */ ServerSourceConf)
/* harmony export */ });
let ServerSourceConf = /*#__PURE__*/(() => {
  class ServerSourceConf {
    static {
      this.SORT_FIELD_KEY = 'orderBy';
    }
    static {
      this.SORT_DIR_KEY = 'order';
    }
    static {
      this.PAGER_PAGE_KEY = 'skip';
    }
    static {
      this.PAGER_LIMIT_KEY = 'take';
    }
    static {
      this.FILTER_FIELD_KEY = 'filters';
    }
    static {
      this.TOTAL_KEY = 'total';
    }
    static {
      this.DATA_KEY = 'items';
    }
    constructor({
      resultMap = null,
      finalize = null,
      endPoint = '',
      sortFieldKey = '',
      sortDirKey = '',
      pagerPageKey = '',
      pagerLimitKey = '',
      filterFieldKey = '',
      totalKey = '',
      dataKey = '',
      where = '',
      join = '',
      relations = [],
      withDeleted = false,
      select = {}
    } = {}) {
      this.endPoint = endPoint ? endPoint : '';
      this.sortFieldKey = sortFieldKey ? sortFieldKey : ServerSourceConf.SORT_FIELD_KEY;
      this.sortDirKey = sortDirKey ? sortDirKey : ServerSourceConf.SORT_DIR_KEY;
      this.pagerPageKey = pagerPageKey ? pagerPageKey : ServerSourceConf.PAGER_PAGE_KEY;
      this.pagerLimitKey = pagerLimitKey ? pagerLimitKey : ServerSourceConf.PAGER_LIMIT_KEY;
      this.filterFieldKey = filterFieldKey ? filterFieldKey : ServerSourceConf.FILTER_FIELD_KEY;
      this.totalKey = totalKey ? totalKey : ServerSourceConf.TOTAL_KEY;
      this.dataKey = dataKey ? dataKey : ServerSourceConf.DATA_KEY;
      this.where = where;
      this.join = join;
      this.relations = relations;
      this.resultMap = resultMap;
      this.finalize = finalize;
      this.withDeleted = withDeleted;
      this.select = select;
    }
  }
  return ServerSourceConf;
})();

/***/ }),

/***/ 62015:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   r: () => (/* binding */ PipelinesComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(73014);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(64411);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(45715);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(10936);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(9620);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(19223);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(56383);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(78543);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(24237);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(36950);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(71181);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(73246);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(72781);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(23423);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(81236);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4977);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20408);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(35665);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(11043);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(15480);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(71924);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(54263);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(26024);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(46076);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(64913);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47108);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(21968);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(90475);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(55101);
/* harmony import */ var _pipeline_form_pipeline_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84327);
/* harmony import */ var _stage_stage_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(86279);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26860);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(14572);
/* harmony import */ var _packages_ui_core_shared_src_lib_card_grid_card_grid_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(49517);
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(79475);
/* harmony import */ var _packages_ui_core_shared_src_lib_components_header_title_header_title_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(49072);
/* harmony import */ var angular2_smart_table__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(52345);
/* harmony import */ var _packages_ui_core_shared_src_lib_gauzy_button_action_gauzy_button_action_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(45293);
/* harmony import */ var _packages_ui_core_shared_src_lib_smart_data_layout_pagination_pagination_v2_pagination_v2_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(3456);

var PipelinesComponent_1;





























function PipelinesComponent_ng_container_13_ng_template_1_Template(rf, ctx) {}
function PipelinesComponent_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(1, PipelinesComponent_ng_container_13_ng_template_1_Template, 0, 0, "ng-template", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
    const tableLayout_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵreference"] */ .sdS(67);
    const gridLayout_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵreference"] */ .sdS(69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngTemplateOutlet", ctx_r1.dataLayoutStyle === ctx_r1.componentLayoutStyleEnum.TABLE ? tableLayout_r3 : gridLayout_r4);
  }
}
function PipelinesComponent_ng_container_60_ng_template_1_Template(rf, ctx) {}
function PipelinesComponent_ng_container_60_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(1, PipelinesComponent_ng_container_60_ng_template_1_Template, 0, 0, "ng-template", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
    const tableLayout_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵreference"] */ .sdS(67);
    const gridLayout_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵreference"] */ .sdS(69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngTemplateOutlet", ctx_r1.dataLayoutStyle === ctx_r1.componentLayoutStyleEnum.TABLE ? tableLayout_r3 : gridLayout_r4);
  }
}
function PipelinesComponent_ng_template_62_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("click", function PipelinesComponent_ng_template_62_ng_template_1_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r5);
      const selectedItem_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG().selectedItem;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx_r1.viewDeals(selectedItem_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(1, "nb-icon", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const selectedItem_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG().selectedItem;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("disabled", !selectedItem_r6 && ctx_r1.disableButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(4, 2, "PIPELINES_PAGE.VIEW_DEALS"), " ");
  }
}
function PipelinesComponent_ng_template_62_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("click", function PipelinesComponent_ng_template_62_ng_template_2_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r7);
      const selectedItem_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG().selectedItem;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx_r1.editPipeline(selectedItem_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(1, "nb-icon", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(5, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("click", function PipelinesComponent_ng_template_62_ng_template_2_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r7);
      const selectedItem_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG().selectedItem;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx_r1.deletePipeline(selectedItem_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(7, "nb-icon", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const selectedItem_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG().selectedItem;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("disabled", !selectedItem_r6 && ctx_r1.disableButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(4, 4, "BUTTONS.EDIT"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("disabled", !selectedItem_r6 && ctx_r1.disableButton)("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(6, 6, "BUTTONS.DELETE"));
  }
}
function PipelinesComponent_ng_template_62_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(1, PipelinesComponent_ng_template_62_ng_template_1_Template, 5, 4, "ng-template", 35)(2, PipelinesComponent_ng_template_62_ng_template_2_Template, 8, 8, "ng-template", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
  }
}
function PipelinesComponent_ng_template_64_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("click", function PipelinesComponent_ng_template_64_ng_template_0_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r8);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx_r1.createPipeline());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(1, "nb-icon", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(3, 1, "BUTTONS.ADD"), " ");
  }
}
function PipelinesComponent_ng_template_64_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(0, PipelinesComponent_ng_template_64_ng_template_0_Template, 4, 3, "ng-template", 36);
  }
}
function PipelinesComponent_ng_template_66_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(1, "ngx-pagination", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("source", ctx_r1.smartTableSource);
  }
}
function PipelinesComponent_ng_template_66_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "div", 45)(1, "angular2-smart-table", 46, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("userRowSelect", function PipelinesComponent_ng_template_66_Template_angular2_smart_table_userRowSelect_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx_r1.selectPipeline($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(3, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(4, PipelinesComponent_ng_template_66_ng_container_4_Template, 2, 1, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("settings", ctx_r1.smartTableSettings)("source", ctx_r1.smartTableSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r1.smartTableSource);
  }
}
function PipelinesComponent_ng_template_68_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "div", 49)(1, "ga-card-grid", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("onSelectedItem", function PipelinesComponent_ng_template_68_Template_ga_card_grid_onSelectedItem_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r10);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx_r1.selectPipeline($event));
    })("scroll", function PipelinesComponent_ng_template_68_Template_ga_card_grid_scroll_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r10);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx_r1.onScroll());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("totalItems", ctx_r1.pagination == null ? null : ctx_r1.pagination.totalItems)("settings", ctx_r1.smartTableSettings)("source", ctx_r1.pipelines);
  }
}
let PipelinesComponent = /*#__PURE__*/(() => {
  let PipelinesComponent = class PipelinesComponent extends _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_2__/* .PaginationFilterBaseComponent */ .t {
    static {
      PipelinesComponent_1 = this;
    }
    static searchBuildForm(fb) {
      return fb.group({
        name: [],
        stages: [],
        status: []
      }, {
        validators: [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_3__/* .AtLeastOneFieldValidator */ .P]
      });
    }
    constructor(translateService, fb, pipelinesService, toastrService, dialogService, store, httpClient, errorHandlingService, router, route) {
      super(translateService);
      this.translateService = translateService;
      this.fb = fb;
      this.pipelinesService = pipelinesService;
      this.toastrService = toastrService;
      this.dialogService = dialogService;
      this.store = store;
      this.httpClient = httpClient;
      this.errorHandlingService = errorHandlingService;
      this.router = router;
      this.route = route;
      this.dataLayoutStyle = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_4__/* .ComponentLayoutStyleEnum */ .IE.TABLE;
      this.componentLayoutStyleEnum = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_4__/* .ComponentLayoutStyleEnum */ .IE;
      this.pipelines = [];
      this.disableButton = true;
      this.loading = false;
      this.pipelineTabsEnum = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_5__/* .PipelineTabsEnum */ .M;
      this.pipelines$ = this.subject$;
      this.nbTab$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__/* .BehaviorSubject */ .t(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_5__/* .PipelineTabsEnum */ .M.ACTIONS);
      this._refresh$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__/* .Subject */ .B();
      /*
       * Search Tab Form
       */
      this.searchForm = PipelinesComponent_1.searchBuildForm(this.fb);
      /**
       * Maps the status value to an object with text and class properties.
       * @param value - The status value to be mapped.
       * @returns An object with text and class properties.
       */
      this.statusMapper = value => {
        // Determine the badge class based on the status value
        const badgeClass = value ? 'success' : 'warning';
        // Map the status value to a translated text
        const statusText = value ? this.getTranslation('PIPELINES_PAGE.ACTIVE') : this.getTranslation('PIPELINES_PAGE.INACTIVE');
        // Return an object with text and class properties
        return {
          text: statusText,
          class: badgeClass
        };
      };
      this.setView();
    }
    ngOnInit() {
      this._loadSmartTableSettings();
      this._applyTranslationOnSmartTable();
      // Subscribe to changes in the pipelines$ observable stream
      this.pipelines$.pipe(
      // Debounce the observable to wait for 100 milliseconds of inactivity
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .debounceTime */ .B)(100),
      // Perform the 'clearItem' action when the observable emits a value
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .tap */ .M)(() => this.clearItem()),
      // Perform the 'getPipelines' action when the observable emits a value
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .tap */ .M)(() => this.getPipelines()),
      // Unsubscribe from the observable when the component is destroyed
      (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__/* .untilDestroyed */ .s)(this)).subscribe();
      // Subscribe to changes in the nbTab$ observable stream
      this.nbTab$.pipe(
      // Ensure distinct values are emitted
      (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_11__/* .distinctUntilChange */ .nI)(),
      // Debounce the observable to wait for 100 milliseconds of inactivity
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .debounceTime */ .B)(100),
      // Filter the observable based on a condition
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__/* .filter */ .p)(() => this.dataLayoutStyle === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_4__/* .ComponentLayoutStyleEnum */ .IE.CARDS_GRID),
      // Perform the 'next' action on _refresh$ and pipelines$ observables
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .tap */ .M)(() => this._refresh$.next(true)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .tap */ .M)(() => this.pipelines$.next(true)),
      // Unsubscribe from the observable when the component is destroyed
      (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__/* .untilDestroyed */ .s)(this)).subscribe();
      // Subscribe to changes in the pagination$ observable stream
      this.pagination$.pipe(
      // Debounce the observable to wait for 100 milliseconds of inactivity
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .debounceTime */ .B)(100),
      // Ensure distinct values are emitted
      (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_11__/* .distinctUntilChange */ .nI)(),
      // Perform the 'next' action on the pipelines$ observable
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .tap */ .M)(() => this.pipelines$.next(true)),
      // Unsubscribe from the observable when the component is destroyed
      (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__/* .untilDestroyed */ .s)(this)).subscribe();
      // Subscribe to changes in the selectedOrganization$ observable stream
      this.store.selectedOrganization$.pipe(
      // Debounce the observable to wait for 100 milliseconds of inactivity
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .debounceTime */ .B)(100),
      // Filter out falsy values and ensure organization is truthy
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__/* .filter */ .p)(organization => !!organization),
      // Ensure distinct values are emitted
      (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_11__/* .distinctUntilChange */ .nI)(),
      // Perform the 'tap' action to assign the organization to the component property
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .tap */ .M)(organization => this.organization = organization),
      // Perform additional actions: trigger _refresh$ and pipelines$ observables
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .tap */ .M)(() => this._refresh$.next(true)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .tap */ .M)(() => this.pipelines$.next(true)),
      // Unsubscribe from the observable when the component is destroyed
      (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__/* .untilDestroyed */ .s)(this)).subscribe();
      // Subscribe to changes in the _refresh$ observable stream
      this._refresh$.pipe(
      // Filter out values when dataLayoutStyle is not CARDS_GRID
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__/* .filter */ .p)(() => this.dataLayoutStyle === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_4__/* .ComponentLayoutStyleEnum */ .IE.CARDS_GRID),
      // Perform the 'tap' action to refresh pagination
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .tap */ .M)(() => this.refreshPagination()),
      // Perform the 'tap' action to clear the pipelines array
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .tap */ .M)(() => this.pipelines = []),
      // Unsubscribe from the observable when the component is destroyed
      (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__/* .untilDestroyed */ .s)(this)).subscribe();
      // Subscribe to changes in the query parameters
      this.route.queryParamMap.pipe(
      // Only proceed if query parameters are present and 'openAddDialog' is 'true'
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__/* .filter */ .p)(params => !!params && params.get('openAddDialog') === 'true'),
      // Wait for 1000 milliseconds of inactivity
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .debounceTime */ .B)(1000),
      // Trigger the createPipeline method
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .tap */ .M)(() => this.createPipeline()),
      // Automatically unsubscribe when the component is destroyed
      (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__/* .untilDestroyed */ .s)(this)).subscribe();
    }
    /**
     * Sets up the initial view configuration and subscribes to changes in the component layout.
     */
    setView() {
      // Set the default view component name to PROPOSALS
      this.viewComponentName = _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_13__/* .ComponentEnum */ .L.PROPOSALS;
      // Subscribe to changes in the component layout
      this.store.componentLayout$(this.viewComponentName).pipe(
      // Wait for 300 milliseconds of inactivity
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .debounceTime */ .B)(300),
      // Only emit a new value if it's distinct from the previous one
      (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_11__/* .distinctUntilChange */ .nI)(),
      // Update the dataLayoutStyle based on the component layout
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .tap */ .M)(componentLayout => this.dataLayoutStyle = componentLayout),
      // Trigger pagination refresh
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .tap */ .M)(() => this.refreshPagination()),
      // Only proceed if the component layout is CARDS_GRID
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__/* .filter */ .p)(componentLayout => componentLayout === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_4__/* .ComponentLayoutStyleEnum */ .IE.CARDS_GRID),
      // Clear the pipelines array
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .tap */ .M)(() => this.pipelines = []),
      // Trigger the pipelines$ observable
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .tap */ .M)(() => this.pipelines$.next(true)),
      // Automatically unsubscribe when the component is destroyed
      (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__/* .untilDestroyed */ .s)(this)).subscribe();
    }
    /**
     * Loads and configures the settings for the Smart Table used in the context of pipelines.
     */
    _loadSmartTableSettings() {
      // Get pagination settings
      const pagination = this.getPagination();
      // Configure Smart Table settings
      this.smartTableSettings = {
        actions: false,
        selectedRowIndex: -1,
        noDataMessage: this.getTranslation('SM_TABLE.NO_DATA.PIPELINE'),
        pager: {
          display: false,
          perPage: pagination ? pagination.itemsPerPage : this.minItemPerPage
        },
        columns: {
          name: {
            type: 'string',
            title: this.getTranslation('SM_TABLE.NAME'),
            width: '30%',
            filter: {
              type: 'custom',
              component: _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_14__/* .InputFilterComponent */ .U
            },
            filterFunction: value => {
              this.setFilter({
                field: 'name',
                search: value
              });
            }
          },
          description: {
            type: 'string',
            title: this.getTranslation('SM_TABLE.DESCRIPTION'),
            width: '30%',
            filter: {
              type: 'custom',
              component: _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_14__/* .InputFilterComponent */ .U
            },
            filterFunction: value => {
              this.setFilter({
                field: 'description',
                search: value
              });
            }
          },
          stages: {
            title: this.getTranslation('SM_TABLE.STAGE'),
            type: 'custom',
            width: '30%',
            isFilterable: false,
            renderComponent: _stage_stage_component__WEBPACK_IMPORTED_MODULE_15__/* .StageComponent */ .G,
            componentInitFunction: (instance, cell) => {
              instance.value = cell.getRawValue();
            }
          },
          status: {
            title: this.getTranslation('SM_TABLE.STATUS'),
            type: 'custom',
            isFilterable: false,
            width: '10%',
            renderComponent: _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_16__/* .StatusBadgeComponent */ .v,
            componentInitFunction: (instance, cell) => {
              instance.value = cell.getRawValue();
            }
          }
        }
      };
    }
    /**
     * Applies translations to the Smart Table.
     */
    _applyTranslationOnSmartTable() {
      // Subscribe to language change events using the translateService
      this.translateService.onLangChange.pipe(
      // When a language change is detected, execute the following actions
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .tap */ .M)(() => {
        // Load or reload the Smart Table settings to reflect language changes
        this._loadSmartTableSettings();
      }),
      // Automatically unsubscribe when the component is destroyed
      (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__/* .untilDestroyed */ .s)(this))
      // Subscribe to the observable
      .subscribe();
    }
    /**
     * Registers the Smart Table source configuration for pipelines.
     */
    setSmartTableSource() {
      // Check if the organization is defined
      if (!this.organization) {
        return;
      }
      // Set loading to true while fetching data
      this.loading = true;
      // Extract organization and tenant information
      const {
        id: organizationId,
        tenantId
      } = this.organization;
      // Create a new ServerDataSource for pipelines
      this.smartTableSource = new _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_17__/* .ServerDataSource */ .N(this.httpClient, {
        endPoint: `${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_18__/* .API_PREFIX */ .m4}/pipelines/pagination`,
        relations: ['stages'],
        join: {
          alias: 'pipeline',
          leftJoin: {
            stages: 'pipeline.stages'
          },
          ...(this.filters.join ? this.filters.join : {})
        },
        where: {
          organizationId,
          tenantId,
          ...(this.filters.where ? this.filters.where : {})
        },
        resultMap: pipeline => {
          // Map the pipeline and include the status using the statusMapper
          return Object.assign({}, pipeline, {
            status: this.statusMapper(pipeline.isActive)
          });
        },
        finalize: () => {
          // If the data layout style is CARDS_GRID, push data to pipelines array
          if (this.dataLayoutStyle === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_4__/* .ComponentLayoutStyleEnum */ .IE.CARDS_GRID) {
            this.pipelines.push(...this.smartTableSource.getData());
          }
          // Set pagination with the total count from the Smart Table source
          this.setPagination({
            ...this.getPagination(),
            totalItems: this.smartTableSource.count()
          });
          // Set loading to false as data fetching is complete
          this.loading = false;
        }
      });
    }
    /**
     * Fetches and sets up the pipelines data for the Smart Table.
     * Handles pagination based on the current layout style.
     */
    getPipelines() {
      var _this = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A)(function* () {
        // Check if organization is available
        if (!_this.organization) {
          return;
        }
        try {
          // Set up the Smart Table source configuration
          _this.setSmartTableSource();
          // Get pagination settings
          const {
            activePage,
            itemsPerPage
          } = _this.getPagination();
          // Set paging for the Smart Table source
          _this.smartTableSource.setPaging(activePage, itemsPerPage, false);
          // If the layout style is CARDS_GRID, initiate GRID view pagination
          if (_this.dataLayoutStyle === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_4__/* .ComponentLayoutStyleEnum */ .IE.CARDS_GRID) {
            yield _this.smartTableSource.getElements();
          }
        } catch (error) {
          // Handle errors using the error handling service
          _this.errorHandlingService.handleError(error);
        }
      })();
    }
    /**
     * Deletes a pipeline after user confirmation.
     * @param selectedItem - The pipeline item to be deleted.
     */
    deletePipeline(selectedItem) {
      var _this2 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A)(function* () {
        // If a pipeline item is provided, select it
        if (selectedItem) {
          _this2.selectPipeline({
            isSelected: true,
            data: selectedItem
          });
        }
        // Open a dialog to handle manual job application
        const dialog = _this2.dialogService.open(_gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_20__/* .DeleteConfirmationComponent */ .u, {
          context: {
            recordType: _this2.getTranslation('PIPELINES_PAGE.RECORD_TYPE', _this2.pipeline)
          },
          hasScroll: false
        });
        try {
          // Wait for dialog result
          const confirmationResult = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_21__/* .firstValueFrom */ ._)(dialog.onClose);
          // If the user confirms, proceed with deletion
          if ('ok' === confirmationResult) {
            // Delete the selected pipeline
            yield _this2.pipelinesService.delete(_this2.pipeline.id);
            // Display a success message
            _this2.toastrService.success('TOASTR.MESSAGE.PIPELINE_DELETED', {
              name: _this2.pipeline.name
            });
          }
        } catch (error) {
          // Handle errors using the error handling service
          _this2.errorHandlingService.handleError(error);
        } finally {
          // Trigger a refresh for the component and pipelines
          _this2._refresh$.next(true);
          _this2.pipelines$.next(true);
        }
      })();
    }
    /**
     * Creates a new pipeline after user input.
     */
    createPipeline() {
      var _this3 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A)(function* () {
        // Ensure there is a selected organization
        if (!_this3.organization) {
          return;
        }
        try {
          // Open the PipelineFormComponent with the provided context
          const dialogRef = _this3.dialogService.open(_pipeline_form_pipeline_form_component__WEBPACK_IMPORTED_MODULE_0__/* .PipelineFormComponent */ .q);
          // Wait for the dialog to close and get the result
          const pipeline = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_21__/* .firstValueFrom */ ._)(dialogRef.onClose);
          // If data is received, display a success message and trigger refresh
          if (pipeline) {
            _this3.toastrService.success('TOASTR.MESSAGE.PIPELINE_CREATED', {
              name: pipeline.name
            });
          }
        } catch (error) {
          // Handle errors using the error handling service
          _this3.errorHandlingService.handleError(error);
        } finally {
          _this3._refresh$.next(true);
          _this3.pipelines$.next(true);
        }
      })();
    }
    /**
     * Edits the details of a selected pipeline after user input.
     * @param selectedItem - The pipeline to be edited.
     */
    editPipeline(selectedItem) {
      var _this4 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A)(function* () {
        // If a pipeline is selected, update the selected pipeline
        if (selectedItem) {
          _this4.selectPipeline({
            isSelected: true,
            data: selectedItem
          });
        }
        try {
          // Ensure there is a selected organization
          if (!_this4.organization) {
            return;
          }
          // If there is a selected pipeline, update its details
          if (_this4.pipeline) {
            // Open the PipelineFormComponent with the provided context
            const dialogRef = _this4.dialogService.open(_pipeline_form_pipeline_form_component__WEBPACK_IMPORTED_MODULE_0__/* .PipelineFormComponent */ .q, {
              context: {
                pipeline: _this4.pipeline
              }
            });
            // Wait for the dialog to close and get the result
            const pipeline = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_21__/* .firstValueFrom */ ._)(dialogRef.onClose);
            // If data is received, display a success message and trigger refresh
            if (pipeline) {
              _this4.toastrService.success('TOASTR.MESSAGE.PIPELINE_UPDATED', {
                name: _this4.pipeline.name
              });
            }
          }
        } catch (error) {
          // Handle errors using the error handling service
          _this4.errorHandlingService.handleError(error);
        } finally {
          _this4._refresh$.next(true);
          _this4.pipelines$.next(true);
        }
      })();
    }
    /**
     * Navigates to the "Deals" page for the selected pipeline.
     * @param selectedItem - The selected pipeline.
     */
    viewDeals(selectedItem) {
      try {
        // If a pipeline is selected, update the selected pipeline
        if (selectedItem) {
          this.selectPipeline({
            isSelected: true,
            data: selectedItem
          });
        }
        // Ensure there is a valid pipeline before navigating
        if (this.pipeline) {
          // Construct the route for navigating to the "Deals" page
          const dealsPageRoute = `/pages/sales/pipelines/${this.pipeline.id}/deals`;
          // Navigate to the "Deals" page
          this.router.navigate([dealsPageRoute]);
        } else {
          // Handle the case where there is no selected pipeline
          throw new Error('No pipeline selected.');
        }
      } catch (error) {
        // Handle errors using the error handling service
        this.errorHandlingService.handleError(error);
      }
    }
    /**
     * Updates the state when a pipeline is selected or deselected.
     * @param param0 - Object containing information about the selection (isSelected, data).
     */
    selectPipeline({
      isSelected,
      data
    }) {
      // Update the disableButton property based on the isSelected value
      this.disableButton = !isSelected;
      // Update the pipeline property based on the isSelected value
      this.pipeline = isSelected ? data : null;
    }
    /*
     * Clear selected item
     */
    clearItem() {
      this.selectPipeline({
        isSelected: false,
        data: null
      });
    }
    /**
     * Handles the change event when a tab is selected.
     * @param tab - The selected tab.
     */
    onChangeTab(tab) {
      // Update the nbTab$ observable with the ID of the currently selected tab
      this.nbTab$.next(tab.tabId);
    }
    /**
     * Handles the search functionality based on the values from the search form.
     */
    search() {
      // Destructure values from the searchForm
      const {
        status,
        name,
        stages
      } = this.searchForm.getRawValue();
      // Set filters based on the extracted values
      if ((0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_11__/* .isNotNullOrUndefined */ .Gh)(status)) {
        this.setFilter({
          field: 'isActive',
          search: status
        }, false);
      }
      if ((0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_11__/* .isNotNullOrUndefined */ .Gh)(name)) {
        this.setFilter({
          field: 'name',
          search: name
        }, false);
      }
      if ((0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_11__/* .isNotNullOrUndefined */ .Gh)(stages)) {
        this.setFilter({
          field: 'stages',
          search: stages
        }, false);
      }
      // Check if there are filters set
      if ((0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_11__/* .isNotEmpty */ .hj)(this.filters)) {
        // Refresh pagination, update data, and trigger a refresh of the pipelines
        this.refreshPagination();
        this._refresh$.next(true);
        this.pipelines$.next(true);
      }
    }
    /**
     * Resets the search form, clears filters, and triggers a refresh of the pipelines.
     */
    reset() {
      // Reset the search form to its initial state
      this.searchForm.reset();
      // Clear the filters
      this._filters = {};
      // Trigger a refresh of the data related to pipelines
      this._refresh$.next(true);
      this.pipelines$.next(true);
    }
    ngOnDestroy() {}
    static {
      this.ɵfac = function PipelinesComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || PipelinesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_22__/* .TranslateService */ .c$), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_forms__WEBPACK_IMPORTED_MODULE_23__/* .UntypedFormBuilder */ .ze), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_24__/* .PipelinesService */ .x), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_25__/* .ToastrService */ .t), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_nebular_theme__WEBPACK_IMPORTED_MODULE_26__/* .NbDialogService */ .S0W), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_27__/* .Store */ .il), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_common_http__WEBPACK_IMPORTED_MODULE_28__/* .HttpClient */ .Qq), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_29__/* .ErrorHandlingService */ .X), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_router__WEBPACK_IMPORTED_MODULE_30__/* .Router */ .Ix), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_router__WEBPACK_IMPORTED_MODULE_30__/* .ActivatedRoute */ .nX));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineComponent"] */ .VBU({
        type: PipelinesComponent,
        selectors: [["ga-pipelines"]],
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
        decls: 70,
        vars: 62,
        consts: [["actionButtons", ""], ["visibleButton", ""], ["tableLayout", ""], ["gridLayout", ""], ["pipelineTable", ""], ["nbSpinnerStatus", "primary", "nbSpinnerSize", "large", 3, "nbSpinner"], [1, "card-custom-header"], [1, "card-header-title"], [3, "allowEmployee"], [1, "p-0"], [1, "gauzy-button-container"], [3, "buttonTemplateVisible", "isDisable", "buttonTemplate", "componentName"], [1, "mt-4", 3, "changeTab"], [3, "tabTitle", "tabId"], [4, "ngIf"], [1, "search-tab", 3, "tabTitle", "tabId"], [1, "mb-3"], [3, "collapsed"], [3, "ngSubmit", "formGroup"], [1, "row"], [1, "col-xl-4", "col-lg-12"], ["for", "name"], [1, "w-100"], ["formControlName", "name", "type", "text", "fullWidth", "", "nbInput", "", "id", "name", 3, "placeholder"], [1, "col-xl-2", "col-lg-4", "col-12"], ["for", "stages"], ["type", "text", "nbInput", "", "fullWidth", "", "id", "stages", "formControlName", "stages", 3, "placeholder"], ["for", "status"], ["fullWidth", "", "id", "status", "formControlName", "status", 3, "placeholder"], [3, "value"], [1, "col-12", "mt-3"], ["type", "submit", "nbButton", "", "size", "small", "status", "success", "outline", "", 3, "disabled"], ["type", "reset", "nbButton", "", "size", "small", "status", "basic", "outline", "", 3, "click", "disabled"], [3, "ngTemplateOutlet"], [1, "btn-group", "actions"], ["ngxPermissionsOnly", "VIEW_SALES_PIPELINES"], ["ngxPermissionsOnly", "EDIT_SALES_PIPELINES"], ["status", "basic", "size", "small", "nbButton", "", 1, "action", "secondary", 3, "click", "disabled"], ["icon", "eye-outline", "pack", "eva"], ["size", "small", "status", "basic", "nbButton", "", 1, "action", "primary", 2, "cursor", "pointer", 3, "click", "disabled"], ["icon", "edit-outline", "pack", "eva"], ["status", "basic", "size", "small", "nbButton", "", 1, "action", 2, "cursor", "pointer", 3, "click", "disabled", "nbTooltip"], ["status", "danger", "icon", "trash-2-outline", "pack", "eva"], ["nbButton", "", "status", "success", "size", "small", 3, "click"], ["icon", "plus-outline"], [1, "table-scroll-container"], [2, "cursor", "pointer", 3, "userRowSelect", "settings", "source"], [1, "pagination-container"], [3, "source"], [1, "grid"], [3, "onSelectedItem", "scroll", "totalItems", "settings", "source"]],
        template: function PipelinesComponent_Template(rf, ctx) {
          if (rf & 1) {
            const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetCurrentView"] */ .RV6();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "nb-card", 5)(1, "nb-card-header", 6)(2, "div", 7)(3, "h4")(4, "ngx-header-title", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(6, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(7, "nb-card-body", 9)(8, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(9, "ngx-gauzy-button-action", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(10, "nb-tabset", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("changeTab", function PipelinesComponent_Template_nb_tabset_changeTab_10_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx.onChangeTab($event));
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(11, "nb-tab", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(12, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(13, PipelinesComponent_ng_container_13_Template, 2, 1, "ng-container", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(14, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(15, "nb-tab", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(16, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(17, "nb-accordion", 16)(18, "nb-accordion-item", 17)(19, "nb-accordion-item-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(20);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(21, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(22, "nb-accordion-item-body")(23, "form", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("ngSubmit", function PipelinesComponent_Template_form_ngSubmit_23_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx.search());
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(24, "div", 19)(25, "div", 20)(26, "label", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(27);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(28, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(29, "div", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(30, "input", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(31, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(32, "div", 24)(33, "label", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(34);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(35, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(36, "div", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(37, "input", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(38, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(39, "div", 24)(40, "label", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(41);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(42, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(43, "div", 22)(44, "nb-select", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(45, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(46, "nb-option", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(47);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(48, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(49, "nb-option", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(50);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(51, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(52, "div", 19)(53, "div", 30)(54, "button", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(55);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(56, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(57, "button", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("click", function PipelinesComponent_Template_button_click_57_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx.reset());
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(58);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(59, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()()()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(60, PipelinesComponent_ng_container_60_Template, 2, 1, "ng-container", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(61, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(62, PipelinesComponent_ng_template_62_Template, 3, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplateRefExtractor"] */ .C5r)(64, PipelinesComponent_ng_template_64_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplateRefExtractor"] */ .C5r)(66, PipelinesComponent_ng_template_66_Template, 5, 3, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplateRefExtractor"] */ .C5r)(68, PipelinesComponent_ng_template_68_Template, 2, 3, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplateRefExtractor"] */ .C5r);
          }
          if (rf & 2) {
            const actionButtons_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵreference"] */ .sdS(63);
            const visibleButton_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵreference"] */ .sdS(65);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("nbSpinner", ctx.loading);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("allowEmployee", false);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(6, 30, "PIPELINES_PAGE.HEADER"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("buttonTemplateVisible", visibleButton_r12)("isDisable", ctx.disableButton)("buttonTemplate", actionButtons_r11)("componentName", ctx.viewComponentName);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("tabTitle", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(12, 32, "PIPELINES_PAGE.BROWSE"))("tabId", ctx.pipelineTabsEnum.ACTIONS);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(14, 34, ctx.nbTab$) === ctx.pipelineTabsEnum.ACTIONS);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("tabTitle", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(16, 36, "PIPELINES_PAGE.SEARCH"))("tabId", ctx.pipelineTabsEnum.SEARCH);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("collapsed", false);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(21, 38, "PIPELINES_PAGE.SEARCH_PIPELINE"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("formGroup", ctx.searchForm);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(28, 40, "PIPELINES_PAGE.NAME"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(31, 42, "PIPELINES_PAGE.NAME"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(35, 44, "PIPELINES_PAGE.STAGE"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(38, 46, "PIPELINES_PAGE.SEARCH_STAGE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(42, 48, "PIPELINES_PAGE.STATUS"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(45, 50, "PIPELINES_PAGE.ALL_STATUS"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("value", true);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(48, 52, "PIPELINES_PAGE.ACTIVE"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("value", false);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(51, 54, "PIPELINES_PAGE.INACTIVE"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("disabled", ctx.searchForm.invalid);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(56, 56, "PIPELINES_PAGE.SEARCH"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("disabled", ctx.searchForm.invalid);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(59, 58, "PIPELINES_PAGE.RESET"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(61, 60, ctx.nbTab$) === ctx.pipelineTabsEnum.SEARCH);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_31__/* .NgIf */ .bT, _angular_common__WEBPACK_IMPORTED_MODULE_31__/* .NgTemplateOutlet */ .T3, _angular_forms__WEBPACK_IMPORTED_MODULE_23__/* ["ɵNgNoValidate"] */ .qT, _angular_forms__WEBPACK_IMPORTED_MODULE_23__/* .DefaultValueAccessor */ .me, _angular_forms__WEBPACK_IMPORTED_MODULE_23__/* .NgControlStatus */ .BC, _angular_forms__WEBPACK_IMPORTED_MODULE_23__/* .NgControlStatusGroup */ .cb, _angular_forms__WEBPACK_IMPORTED_MODULE_23__/* .FormGroupDirective */ .j4, _angular_forms__WEBPACK_IMPORTED_MODULE_23__/* .FormControlName */ .JD, _nebular_theme__WEBPACK_IMPORTED_MODULE_26__/* .NbAccordionComponent */ .Ul7, _nebular_theme__WEBPACK_IMPORTED_MODULE_26__/* .NbAccordionItemComponent */ .vx8, _nebular_theme__WEBPACK_IMPORTED_MODULE_26__/* .NbAccordionItemHeaderComponent */ .Ig3, _nebular_theme__WEBPACK_IMPORTED_MODULE_26__/* .NbAccordionItemBodyComponent */ .LHJ, _nebular_theme__WEBPACK_IMPORTED_MODULE_26__/* .NbSpinnerDirective */ .zwc, _nebular_theme__WEBPACK_IMPORTED_MODULE_26__/* .NbButtonComponent */ .YP2, _nebular_theme__WEBPACK_IMPORTED_MODULE_26__/* .NbSelectComponent */ .S81, _nebular_theme__WEBPACK_IMPORTED_MODULE_26__/* .NbOptionComponent */ .ZJ2, _nebular_theme__WEBPACK_IMPORTED_MODULE_26__/* .NbInputDirective */ .i6h, _nebular_theme__WEBPACK_IMPORTED_MODULE_26__/* .NbCardComponent */ .SrT, _nebular_theme__WEBPACK_IMPORTED_MODULE_26__/* .NbCardBodyComponent */ .KH5, _nebular_theme__WEBPACK_IMPORTED_MODULE_26__/* .NbCardHeaderComponent */ .zJv, _nebular_theme__WEBPACK_IMPORTED_MODULE_26__/* .NbIconComponent */ .tHu, _packages_ui_core_shared_src_lib_card_grid_card_grid_component__WEBPACK_IMPORTED_MODULE_32__/* .CardGridComponent */ .c, ngx_permissions__WEBPACK_IMPORTED_MODULE_33__/* .NgxPermissionsDirective */ .f6, _packages_ui_core_shared_src_lib_components_header_title_header_title_component__WEBPACK_IMPORTED_MODULE_34__/* .HeaderTitleComponent */ .X, angular2_smart_table__WEBPACK_IMPORTED_MODULE_35__/* .Angular2SmartTableComponent */ .T9, _packages_ui_core_shared_src_lib_gauzy_button_action_gauzy_button_action_component__WEBPACK_IMPORTED_MODULE_36__/* .GauzyButtonActionComponent */ .A, _packages_ui_core_shared_src_lib_smart_data_layout_pagination_pagination_v2_pagination_v2_component__WEBPACK_IMPORTED_MODULE_37__/* .PaginationV2Component */ .a, _nebular_theme__WEBPACK_IMPORTED_MODULE_26__/* .NbTabsetComponent */ .Hsi, _nebular_theme__WEBPACK_IMPORTED_MODULE_26__/* .NbTabComponent */ .d3K, _angular_common__WEBPACK_IMPORTED_MODULE_31__/* .AsyncPipe */ .Jj, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_22__/* .TranslatePipe */ .D9],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.action[_ngcontent-%COMP%] {\n  box-shadow: var(--gauzy-shadow);\n  border: none;\n}\n.action[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}\n.action.info[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: var(--color-info-default);\n  color: white;\n  border-color: var(--color-info-default);\n}\n.action.info-text-1[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  color: var(--color-info-default);\n}\n.action.secondary[_ngcontent-%COMP%] {\n  color: #7e7e8f;\n}\n.action.success[_ngcontent-%COMP%] {\n  color: var(--color-success-default);\n}\n.action.warning[_ngcontent-%COMP%] {\n  color: rgb(245, 109, 88);\n}\n.action.orange[_ngcontent-%COMP%] {\n  color: rgb(255, 171, 45);\n}\n.action.primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n}\n.action.primary.soft[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: rgba(110, 73, 232, 0.1);\n}\n.action.select-nb[_ngcontent-%COMP%]     {\n  box-shadow: none;\n}\n.action.select-nb[_ngcontent-%COMP%]     .select-button {\n  box-shadow: var(--gauzy-shadow);\n  background: rgb(245, 245, 245);\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n.actions[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-2);\n  border-radius: var(--button-rectangle-border-radius);\n  padding: 2px 4px !important;\n}\n\n.gauzy-button-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n.card-custom-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n[_nghost-%COMP%]     input {\n  border-radius: var(--border-radius);\n  box-shadow: var(--gauzy-shadow) inset;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%], \n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   .table-scroll-container[_ngcontent-%COMP%], \n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .table-scroll-container[_ngcontent-%COMP%] {\n  flex-grow: 10;\n  max-height: unset;\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  border-radius: 0 0 var(--border-radius) var(--border-radius);\n}\n[dir=ltr]   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  padding: 1rem 0.5rem 1rem 18px;\n}\n[dir=rtl]   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  padding: 1rem 18px 1rem 0.5rem;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%], \n[_nghost-%COMP%]   nb-card-header[_ngcontent-%COMP%] {\n  border-radius: var(--border-radius);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  height: 100%;\n  border-radius: var(--border-radius);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-header[_ngcontent-%COMP%] {\n  flex: 0 1 auto;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  overflow: unset;\n  height: calc(100vh - var(--header-height) - var(--footer-height) - 11.5rem + 3.75rem);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-footer[_ngcontent-%COMP%] {\n  flex: 0 1 auto;\n}\n\n[_nghost-%COMP%] {\n  height: 100%;\n}\n[_nghost-%COMP%]   nb-tab.content-active[_ngcontent-%COMP%] {\n  padding: 1rem;\n  height: calc(100% - 3rem);\n  border-radius: 0 0 var(--border-radius) var(--border-radius);\n  overflow: unset;\n  display: flex;\n  flex-direction: column;\n}\n[dir=ltr]   [_nghost-%COMP%]   nb-tab.content-active[_ngcontent-%COMP%] {\n  padding: 1rem 0.5rem 1rem 18px;\n}\n[dir=rtl]   [_nghost-%COMP%]   nb-tab.content-active[_ngcontent-%COMP%] {\n  padding: 1rem 18px 1rem 0.5rem;\n}\n[dir=ltr]   [_nghost-%COMP%]   nb-tab.content-active[_ngcontent-%COMP%]   nb-accordion[_ngcontent-%COMP%] {\n  margin-right: 0.625rem;\n}\n[dir=rtl]   [_nghost-%COMP%]   nb-tab.content-active[_ngcontent-%COMP%]   nb-accordion[_ngcontent-%COMP%] {\n  margin-left: 0.625rem;\n}\n[_nghost-%COMP%]   nb-tabset[_ngcontent-%COMP%] {\n  height: calc(100% - 1.5rem);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%], \n[_nghost-%COMP%]   nb-tab.content-active[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  overflow: unset;\n  background-color: unset;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n[_nghost-%COMP%]   .gauzy-button-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n}\n[dir=ltr]   [_nghost-%COMP%]   .gauzy-button-container[_ngcontent-%COMP%] {\n  right: 18px;\n}\n[dir=rtl]   [_nghost-%COMP%]   .gauzy-button-container[_ngcontent-%COMP%] {\n  left: 18px;\n}\n\nnb-accordion-item-header[_ngcontent-%COMP%]     nb-icon {\n  border: 1px solid var(--border-basic-color-4);\n  border-radius: var(--input-rectangle-border-radius);\n  width: 1.75rem;\n  height: 1.75rem;\n}\n\n.grid[_ngcontent-%COMP%] {\n  overflow: auto;\n  height: 100%;\n}"]
      });
    }
  };
  return PipelinesComponent;
})();
PipelinesComponent = PipelinesComponent_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_38__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__/* .UntilDestroy */ .d)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_38__/* .__metadata */ .Sn)("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_22__/* .TranslateService */ .c$, _angular_forms__WEBPACK_IMPORTED_MODULE_23__/* .UntypedFormBuilder */ .ze, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_24__/* .PipelinesService */ .x, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_25__/* .ToastrService */ .t, _nebular_theme__WEBPACK_IMPORTED_MODULE_26__/* .NbDialogService */ .S0W, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_27__/* .Store */ .il, _angular_common_http__WEBPACK_IMPORTED_MODULE_28__/* .HttpClient */ .Qq, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_29__/* .ErrorHandlingService */ .X, _angular_router__WEBPACK_IMPORTED_MODULE_30__/* .Router */ .Ix, _angular_router__WEBPACK_IMPORTED_MODULE_30__/* .ActivatedRoute */ .nX])], PipelinesComponent);


/***/ }),

/***/ 67306:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ argsArgArrayOrObject)
/* harmony export */ });
const {
  isArray
} = Array;
const {
  getPrototypeOf,
  prototype: objectProto,
  keys: getKeys
} = Object;
function argsArgArrayOrObject(args) {
  if (args.length === 1) {
    const first = args[0];
    if (isArray(first)) {
      return {
        args: first,
        keys: null
      };
    }
    if (isPOJO(first)) {
      const keys = getKeys(first);
      return {
        args: keys.map(key => first[key]),
        keys
      };
    }
  }
  return {
    args: args,
    keys: null
  };
}
function isPOJO(obj) {
  return obj && typeof obj === 'object' && getPrototypeOf(obj) === objectProto;
}
//# sourceMappingURL=argsArgArrayOrObject.js.map

/***/ }),

/***/ 69432:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ DealsService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(80189);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64913);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26024);
/* harmony import */ var _crud_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(55256);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(26860);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(45715);






let DealsService = /*#__PURE__*/(() => {
  class DealsService extends _crud_service__WEBPACK_IMPORTED_MODULE_0__/* .Service */ .k {
    constructor(http) {
      super({
        http,
        basePath: `${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/deals`
      });
      this.http = http;
    }
    /**
     * Fetch all deals with optional relations and filter conditions
     *
     * @param relations Array of relation names to include in the result
     * @param where Filter conditions for fetching deals
     * @returns A promise of paginated deals
     */
    getAll(relations, where) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__/* .firstValueFrom */ ._)(this.http.get(`${this.basePath}`, {
        params: (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_3__/* .toParams */ .SV)({
          where,
          relations
        })
      }));
    }
    /**
     * Fetch a deal by its ID with optional relations and filter conditions
     *
     * @param id The ID of the deal to fetch
     * @param where Filter conditions for fetching the deal
     * @param relations Array of relation names to include in the result
     * @returns A promise of the fetched deal
     */
    getById(id, where, relations = []) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__/* .firstValueFrom */ ._)(this.http.get(`${this.basePath}/${id}`, {
        params: (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_3__/* .toParams */ .SV)({
          where,
          relations
        })
      }));
    }
    static {
      this.ɵfac = function DealsService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || DealsService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵinject"] */ .KVO(_angular_common_http__WEBPACK_IMPORTED_MODULE_5__/* .HttpClient */ .Qq));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdefineInjectable"] */ .jDH({
        token: DealsService,
        factory: DealsService.ɵfac
      });
    }
  }
  return DealsService;
})();

/***/ }),

/***/ 70490:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   f: () => (/* binding */ PipelineResolver)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9620);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(50666);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(87081);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(47060);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71924);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11043);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(54263);




/**
 * Resolves a pipeline entity by its ID from the route parameters.
 *
 * @param route - The activated route snapshot containing route information.
 * @returns An observable of the pipeline entity or null.
 */
const PipelineResolver = route => {
  // Injecting the necessary services
  const store = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__/* .inject */ .WQX)(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_1__/* .Store */ .il);
  const router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__/* .inject */ .WQX)(_angular_router__WEBPACK_IMPORTED_MODULE_2__/* .Router */ .Ix);
  const pipelinesService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__/* .inject */ .WQX)(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_3__/* .PipelinesService */ .x);
  const errorHandlingService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__/* .inject */ .WQX)(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_4__/* .ErrorHandlingService */ .X);
  // Extracting pipeline ID from route parameters
  const pipelineId = route.params['pipelineId'];
  if (!pipelineId) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(null); // Return null if pipeline ID is not present
  }
  // Extracting organization ID and tenant ID from store
  const {
    id: organizationId,
    tenantId
  } = store.selectedOrganization;
  // Get pipeline entity from the service
  return pipelinesService.getById(pipelineId, {
    organizationId,
    tenantId
  }, ['stages', 'createdByUser']).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__/* .map */ .T)(pipeline => {
    if (pipeline.organizationId !== organizationId) {
      router.navigate(['pages/sales/pipelines']);
      return null; // Return null if organization ID does not match
    }
    return pipeline;
  }), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__/* .catchError */ .W)(error => {
    // Handle and log errors
    errorHandlingService.handleError(error);
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(null); // Return null on error
  }));
};

/***/ }),

/***/ 71181:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ debounceTime)
/* harmony export */ });
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(89751);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7661);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25969);



function debounceTime(dueTime, scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__/* .asyncScheduler */ .E) {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_1__/* .operate */ .N)((source, subscriber) => {
    let activeTask = null;
    let lastValue = null;
    let lastTime = null;
    const emit = () => {
      if (activeTask) {
        activeTask.unsubscribe();
        activeTask = null;
        const value = lastValue;
        lastValue = null;
        subscriber.next(value);
      }
    };
    function emitWhenIdle() {
      const targetTime = lastTime + dueTime;
      const now = scheduler.now();
      if (now < targetTime) {
        activeTask = this.schedule(undefined, targetTime - now);
        subscriber.add(activeTask);
        return;
      }
      emit();
    }
    source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__/* .createOperatorSubscriber */ ._)(subscriber, value => {
      lastValue = value;
      lastTime = scheduler.now();
      if (!activeTask) {
        activeTask = scheduler.schedule(emitWhenIdle, dueTime);
        subscriber.add(activeTask);
      }
    }, () => {
      emit();
      subscriber.complete();
    }, undefined, () => {
      lastValue = activeTask = null;
    }));
  });
}
//# sourceMappingURL=debounceTime.js.map

/***/ }),

/***/ 82795:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: () => (/* binding */ createObject)
/* harmony export */ });
function createObject(keys, values) {
  return keys.reduce((result, key, i) => (result[key] = values[i], result), {});
}
//# sourceMappingURL=createObject.js.map

/***/ }),

/***/ 83451:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   f: () => (/* binding */ intervalProvider)
/* harmony export */ });
const intervalProvider = {
  setInterval(handler, timeout, ...args) {
    const {
      delegate
    } = intervalProvider;
    if (delegate === null || delegate === void 0 ? void 0 : delegate.setInterval) {
      return delegate.setInterval(handler, timeout, ...args);
    }
    return setInterval(handler, timeout, ...args);
  },
  clearInterval(handle) {
    const {
      delegate
    } = intervalProvider;
    return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearInterval) || clearInterval)(handle);
  },
  delegate: undefined
};
//# sourceMappingURL=intervalProvider.js.map

/***/ }),

/***/ 84327:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: () => (/* binding */ PipelineFormComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(73014);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(64411);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10936);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(72781);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(73246);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(56383);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(23423);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(11043);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(71924);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(54263);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26024);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(14572);
/* harmony import */ var _stage_form_stage_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(10519);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(19223);















function PipelineFormComponent_ng_template_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("disabled", ctx_r1.form.invalid || ctx_r1.form.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(2, 2, "BUTTONS.UPDATE"), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵsanitizeHtml"] */ .npT);
  }
}
function PipelineFormComponent_ng_template_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("disabled", ctx_r1.form.invalid || ctx_r1.form.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(2, 2, "BUTTONS.CREATE"), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵsanitizeHtml"] */ .npT);
  }
}
let PipelineFormComponent = class PipelineFormComponent {
  set pipeline(value) {
    this._pipeline = value;
    this.onPipelineChange(value);
  }
  get pipeline() {
    return this._pipeline;
  }
  constructor(_dialogRef, _pipelinesService, _fb, _store, _errorHandlingService) {
    this._dialogRef = _dialogRef;
    this._pipelinesService = _pipelinesService;
    this._fb = _fb;
    this._store = _store;
    this._errorHandlingService = _errorHandlingService;
    this.isActive = true;
    /**
     * Form property setter and getter.
     */
    this.form = this._fb.group({
      name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .Validators */ .k0.required],
      description: [''],
      stages: this._fb.array([]),
      isActive: [this.isActive]
    });
  }
  ngOnInit() {
    this._store.selectedOrganization$.pipe((0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_2__/* .distinctUntilChange */ .nI)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .filter */ .p)(organization => !!organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .tap */ .M)(organization => this.organization = organization), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .untilDestroyed */ .s)(this)).subscribe();
  }
  /**
   * Handles changes to the pipeline input.
   * @param value The new pipeline value
   */
  onPipelineChange(pipeline) {
    this.isActive = pipeline.isActive ?? true;
    // Patch form values with the new pipeline data
    this.form.patchValue({
      name: pipeline.name,
      description: pipeline.description,
      isActive: this.isActive,
      stages: pipeline.stages
    });
  }
  /**
   * Closes the dialog.
   */
  closeDialog() {
    this._dialogRef.close();
  }
  /**
   * Toggles the isActive property between true and false.
   */
  setIsActive() {
    this.isActive = !this.isActive;
  }
  /**
   * Persists the form data by either creating a new entity or updating an existing one.
   * This method handles the dialog closure and error logging as well.
   */
  persist() {
    var _this = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(function* () {
      if (!_this.organization) {
        return;
      }
      // Destructure the organization details and form value
      const {
        id: organizationId,
        tenantId
      } = _this.organization;
      const value = {
        ..._this.form.value,
        organizationId,
        tenantId,
        isArchived: !_this.isActive
      };
      try {
        // Determine whether to create or update based on the presence of an ID
        const entity = _this.pipeline?.id ? yield _this._pipelinesService.update(_this.pipeline.id, value) : yield _this._pipelinesService.create(value);
        // Close the dialog with the returned entity
        _this._dialogRef.close(entity);
      } catch (error) {
        // Handle and log any error that occurs during the persistence process
        console.error(`Error occurred while persisting data: ${error.message}`);
        _this._errorHandlingService.handleError(error);
      }
    })();
  }
  static {
    this.ɵfac = function PipelineFormComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || PipelineFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbDialogRef */ .ybQ), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_8__/* .PipelinesService */ .x), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .UntypedFormBuilder */ .ze), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_9__/* .Store */ .il), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_10__/* .ErrorHandlingService */ .X));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
      type: PipelineFormComponent,
      selectors: [["ga-pipeline-mutation-form"]],
      inputs: {
        pipeline: "pipeline"
      },
      standalone: false,
      decls: 38,
      vars: 27,
      consts: [["createButtonTemplate", ""], [3, "ngSubmit", "formGroup"], [2, "width", "750px"], [1, "cancel"], [1, "fas", "fa-times", 3, "click"], [1, "title"], [1, "row"], [1, "col"], ["for", "name", 1, "label"], ["type", "text", "nbInput", "", "formControlName", "name", "fullWidth", "", 3, "placeholder"], ["for", "description", 1, "label"], ["nbInput", "", "formControlName", "description", "fullWidth", "", "fullHeight", "", 3, "placeholder"], ["formControlName", "isActive", 3, "checkedChange", "checked"], ["formArrayName", "stages", 3, "pipelineId", "values"], [1, "text-left"], ["nbButton", "", "type", "button", "status", "basic", 3, "click"], [3, "innerHTML"], [3, "ngIf", "ngIfElse"], ["type", "submit", "nbButton", "", "status", "info", 1, "mr-3", "ml-3", 3, "disabled"], ["type", "submit", "nbButton", "", "status", "primary", 1, "mr-3", "ml-3", 3, "disabled"]],
      template: function PipelineFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "form", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("ngSubmit", function PipelineFormComponent_Template_form_ngSubmit_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx.persist());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(1, "nb-card", 2)(2, "nb-card-header")(3, "div", 3)(4, "span")(5, "i", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function PipelineFormComponent_Template_i_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx.closeDialog());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(6, "h4", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(8, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(9, "nb-card-body")(10, "div", 6)(11, "div", 7)(12, "nb-form-field")(13, "label", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(14);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(15, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(16, "input", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(17, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(18, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(19, "nb-form-field")(20, "label", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(21);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(22, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(23, "textarea", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(24, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(25, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(26, "nb-checkbox", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("checkedChange", function PipelineFormComponent_Template_nb_checkbox_checkedChange_26_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx.setIsActive());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(27);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(28, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(29, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(30, "ga-stage-form", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(31, "nb-card-footer", 14)(32, "button", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function PipelineFormComponent_Template_button_click_32_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx.closeDialog());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(33, "span", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(34, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(35, PipelineFormComponent_ng_template_35_Template, 3, 4, "ng-template", 17)(36, PipelineFormComponent_ng_template_36_Template, 3, 4, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplateRefExtractor"] */ .C5r);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
        }
        if (rf & 2) {
          const createButtonTemplate_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(37);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("formGroup", ctx.form);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(8, 13, (ctx.pipeline == null ? null : ctx.pipeline.id) ? "PIPELINES_PAGE.HEADER_FORM_EDIT" : "PIPELINES_PAGE.HEADER_FORM_CREATE"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(15, 15, "FORM.PLACEHOLDERS.NAME"));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(17, 17, "FORM.PLACEHOLDERS.NAME"));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(22, 19, "FORM.PLACEHOLDERS.DESCRIPTION"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(24, 21, "FORM.PLACEHOLDERS.DESCRIPTION"));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("checked", ctx.isActive);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(28, 23, "PIPELINES_PAGE.ACTIVE"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("pipelineId", ctx.pipeline == null ? null : ctx.pipeline.id)("values", ctx.pipeline == null ? null : ctx.pipeline.stages);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(34, 25, "BUTTONS.CANCEL"), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵsanitizeHtml"] */ .npT);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.pipeline == null ? null : ctx.pipeline.id)("ngIfElse", createButtonTemplate_r3);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__/* .NgIf */ .bT, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* ["ɵNgNoValidate"] */ .qT, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .DefaultValueAccessor */ .me, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .NgControlStatus */ .BC, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .NgControlStatusGroup */ .cb, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .FormGroupDirective */ .j4, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .FormControlName */ .JD, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .FormArrayName */ .v8, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbFormFieldComponent */ .u_9, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbButtonComponent */ .YP2, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbInputDirective */ .i6h, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbCheckboxComponent */ .DMy, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbCardComponent */ .SrT, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbCardBodyComponent */ .KH5, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbCardFooterComponent */ .VDm, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbCardHeaderComponent */ .zJv, _stage_form_stage_form_component__WEBPACK_IMPORTED_MODULE_12__/* .StageFormComponent */ .y, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__/* .TranslatePipe */ .D9],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   i[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n}\n[dir=ltr]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n[dir=rtl]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--gauzy-text-color-1);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(245, 109, 88, 0.3);\n  border-width: 2px;\n  color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(245, 109, 88, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 16px;\n  letter-spacing: 0em;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(126, 126, 143, 0.3);\n  border-width: 2px;\n  color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(126, 126, 143, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(37, 184, 105, 0.3);\n  border-width: 2px;\n  color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(37, 184, 105, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[disabled][_ngcontent-%COMP%], \n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic.btn-disabled[_ngcontent-%COMP%] {\n  background-color: var(--button-outline-basic-disabled-background-color);\n  border-color: var(--button-outline-basic-disabled-border-color);\n  color: var(--button-outline-basic-disabled-text-color);\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].primary.appearance-filled.status-primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  border: unset;\n  background-color: var(--color-primary-transparent-default);\n  box-shadow: var(--gauzy-shadow) 0, 0, 0, 0.15;\n}\n[dir=ltr]   [_nghost-%COMP%]     input, \n[dir=ltr]   [_nghost-%COMP%]     textarea {\n  text-align: start;\n}\n[dir=rtl]   [_nghost-%COMP%]     input, \n[dir=rtl]   [_nghost-%COMP%]     textarea {\n  text-align: end;\n}\n[_nghost-%COMP%]     input, \n[_nghost-%COMP%]     nb-select.appearance-outline.status-basic .select-button, \n[_nghost-%COMP%]     .ng-select .ng-select-container {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n  height: 42px !important;\n}\n[_nghost-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder, \n[_nghost-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {\n  top: unset !important;\n}\n[_nghost-%COMP%]     label, \n[_nghost-%COMP%]     .label {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  color: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]     textarea {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n}\n[_nghost-%COMP%]     .ng-select .ng-select-container input, \n[_nghost-%COMP%]     nb-tag-list input {\n  background-color: unset !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n}"]
    });
  }
};
PipelineFormComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_14__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .UntilDestroy */ .d)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_14__/* .__metadata */ .Sn)("design:paramtypes", [_nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbDialogRef */ .ybQ, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_8__/* .PipelinesService */ .x, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .UntypedFormBuilder */ .ze, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_9__/* .Store */ .il, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_10__/* .ErrorHandlingService */ .X])], PipelineFormComponent);


/***/ }),

/***/ 84409:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ first)
/* harmony export */ });
/* harmony import */ var _util_EmptyError__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(25413);
/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72781);
/* harmony import */ var _take__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(64320);
/* harmony import */ var _defaultIfEmpty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13344);
/* harmony import */ var _throwIfEmpty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(42883);
/* harmony import */ var _util_identity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(89685);






function first(predicate, defaultValue) {
  const hasDefaultValue = arguments.length >= 2;
  return source => source.pipe(predicate ? (0,_filter__WEBPACK_IMPORTED_MODULE_0__/* .filter */ .p)((v, i) => predicate(v, i, source)) : _util_identity__WEBPACK_IMPORTED_MODULE_1__/* .identity */ .D, (0,_take__WEBPACK_IMPORTED_MODULE_2__/* .take */ .s)(1), hasDefaultValue ? (0,_defaultIfEmpty__WEBPACK_IMPORTED_MODULE_3__/* .defaultIfEmpty */ .U)(defaultValue) : (0,_throwIfEmpty__WEBPACK_IMPORTED_MODULE_4__/* .throwIfEmpty */ .v)(() => new _util_EmptyError__WEBPACK_IMPORTED_MODULE_5__/* .EmptyError */ .G()));
}
//# sourceMappingURL=first.js.map

/***/ }),

/***/ 86279:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G: () => (/* binding */ StageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14572);


function StageComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div")(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const stage_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(stage_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(stage_r1.description);
  }
}
let StageComponent = /*#__PURE__*/(() => {
  class StageComponent {
    constructor() {}
    ngOnInit() {
      this.pipelineStages = this.value;
    }
    static {
      this.ɵfac = function StageComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || StageComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: StageComponent,
        selectors: [["gauzy-stage"]],
        inputs: {
          value: "value"
        },
        standalone: false,
        decls: 1,
        vars: 1,
        consts: [[4, "ngFor", "ngForOf"]],
        template: function StageComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(0, StageComponent_div_0_Template, 5, 2, "div", 0);
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx.pipelineStages);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .NgForOf */ .Sq],
        styles: ["div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child {\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 15px;\n  letter-spacing: 0em;\n  text-align: left;\n}\ndiv[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:last-child {\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 15px;\n  letter-spacing: 0em;\n  text-align: left;\n}"]
      });
    }
  }
  return StageComponent;
})();

/***/ }),

/***/ 86289:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ mapOneOrManyArgs)
/* harmony export */ });
/* harmony import */ var _operators_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87081);

const {
  isArray
} = Array;
function callOrApply(fn, args) {
  return isArray(args) ? fn(...args) : fn(args);
}
function mapOneOrManyArgs(fn) {
  return (0,_operators_map__WEBPACK_IMPORTED_MODULE_0__/* .map */ .T)(args => callOrApply(fn, args));
}
//# sourceMappingURL=mapOneOrManyArgs.js.map

/***/ }),

/***/ 87262:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PipelinesModule: () => (/* binding */ PipelinesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14572);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(56383);
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(79475);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(71750);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(19223);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(80784);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(38834);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(98722);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10936);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11043);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(69432);
/* harmony import */ var _pipelines_routing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2138);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26860);













let PipelinesModule = /*#__PURE__*/(() => {
  class PipelinesModule {
    static {
      this.ɵfac = function PipelinesModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || PipelinesModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineNgModule"] */ .$C({
        type: PipelinesModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineInjector"] */ .G2t({
        providers: [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_2__/* .PipelinesService */ .x, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_3__/* .DealsService */ .T],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__/* .CommonModule */ .MD, _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .ReactiveFormsModule */ .X1, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__/* .NbDialogModule */ .nZv.forChild(), _nebular_theme__WEBPACK_IMPORTED_MODULE_6__/* .NbAccordionModule */ .LtP, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__/* .NbFormFieldModule */ .NeG, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__/* .NbSpinnerModule */ .gYs, _pipelines_routing__WEBPACK_IMPORTED_MODULE_0__/* .PipelinesRouting */ .w, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__/* .TranslateModule */ .h.forChild(), _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__/* .DragDropModule */ .ad, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__/* .NbButtonModule */ .P5N, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__/* .NbSelectModule */ .VcP, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__/* .NbInputModule */ .pty, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__/* .NbCheckboxModule */ .Ad8, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__/* .NbCardModule */ .lVF, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__/* .NbIconModule */ .clu, _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .FormsModule */ .YN, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_9__/* .CardGridModule */ .n, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_10__/* .SharedModule */ .G, ngx_permissions__WEBPACK_IMPORTED_MODULE_11__/* .NgxPermissionsModule */ .Ov.forChild(), _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_12__/* .SmartDataViewLayoutModule */ .H, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__/* .NbTabsetModule */ .AfG]
      });
    }
  }
  return PipelinesModule;
})();

/***/ }),

/***/ 89751:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ asyncScheduler),
/* harmony export */   b: () => (/* binding */ async)
/* harmony export */ });
/* harmony import */ var _AsyncAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16061);
/* harmony import */ var _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36902);


const asyncScheduler = new _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__/* .AsyncScheduler */ .q(_AsyncAction__WEBPACK_IMPORTED_MODULE_1__/* .AsyncAction */ .R);
const async = asyncScheduler;
//# sourceMappingURL=async.js.map

/***/ }),

/***/ 90475:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: () => (/* binding */ StatusBadgeComponent)
/* harmony export */ });
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81236);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26860);


let StatusBadgeComponent = /*#__PURE__*/(() => {
  class StatusBadgeComponent {
    constructor() {}
    ngOnInit() {
      if (this.value && this.value.text) {
        if (this.layout === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__/* .ComponentLayoutStyleEnum */ .IE.CARDS_GRID) {
          if (typeof this.value === 'object') {
            this.text = this.value['text'];
            this.badgeClass = 'badge badge-' + this.value['class'];
          } else {
            this.text = this.value;
          }
        } else {
          this.text = this.value['text'];
          this.badgeClass = 'badge badge-' + this.value['class'];
        }
      }
    }
    static {
      this.ɵfac = function StatusBadgeComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || StatusBadgeComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineComponent"] */ .VBU({
        type: StatusBadgeComponent,
        selectors: [["ga-status-badge"]],
        inputs: {
          value: "value",
          layout: "layout"
        },
        standalone: false,
        decls: 1,
        vars: 3,
        consts: [[3, "innerHtml"]],
        template: function StatusBadgeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(0, "div", 0);
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵclassMap"] */ .HbH(ctx.badgeClass);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("innerHtml", ctx.text, _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵsanitizeHtml"] */ .npT);
          }
        },
        styles: ["div[_ngcontent-%COMP%] {\n  border-radius: 0.25rem;\n  align-content: center;\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  height: 23px;\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 15px;\n  letter-spacing: 0em;\n  text-align: left;\n}\n\n.badge[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}"]
      });
    }
  }
  return StatusBadgeComponent;
})();

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