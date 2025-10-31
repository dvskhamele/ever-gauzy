"use strict";
(self["webpackChunkgauzy"] = self["webpackChunkgauzy"] || []).push([[5398],{

/***/ 12109:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* binding */ NonEditableNumberEditorComponent)
/* harmony export */ });
/* harmony import */ var angular2_smart_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52345);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26860);


let NonEditableNumberEditorComponent = /*#__PURE__*/(() => {
  class NonEditableNumberEditorComponent extends angular2_smart_table__WEBPACK_IMPORTED_MODULE_0__/* .DefaultEditor */ .ny {
    ngOnInit() {
      const value = this.cell.getValue();
      if (value === null || value === undefined) {
        console.warn('Cell value is null or undefined');
        this.cellValue = '';
      } else if (typeof value === 'number' || typeof value === 'string') {
        this.cellValue = value;
      } else {
        console.error('Unexpected cell value type:', typeof value);
        this.cellValue = '';
      }
    }
    static {
      this.ɵfac = /*@__PURE__*/(() => {
        let ɵNonEditableNumberEditorComponent_BaseFactory;
        return function NonEditableNumberEditorComponent_Factory(__ngFactoryType__) {
          return (ɵNonEditableNumberEditorComponent_BaseFactory || (ɵNonEditableNumberEditorComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetInheritedFactory"] */ .xGo(NonEditableNumberEditorComponent)))(__ngFactoryType__ || NonEditableNumberEditorComponent);
        };
      })();
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineComponent"] */ .VBU({
        type: NonEditableNumberEditorComponent,
        selectors: [["ng-component"]],
        inputs: {
          cell: "cell"
        },
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
        decls: 2,
        vars: 1,
        template: function NonEditableNumberEditorComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", ctx.cellValue, " ");
          }
        },
        encapsulation: 2
      });
    }
  }
  return NonEditableNumberEditorComponent;
})();

/***/ }),

/***/ 13409:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   J: () => (/* binding */ JobSearchAvailabilityEditorComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(55598);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(26860);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52738);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39855);
/* harmony import */ var angular2_smart_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52345);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(41598);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26024);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(71924);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(95692);
/* harmony import */ var _toggle_switcher_toggle_switcher_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(77485);











let JobSearchAvailabilityEditorComponent = /*#__PURE__*/(() => {
  let JobSearchAvailabilityEditorComponent = class JobSearchAvailabilityEditorComponent extends angular2_smart_table__WEBPACK_IMPORTED_MODULE_0__/* .DefaultEditor */ .ny {
    constructor(_cdr, _store, _jobSearchStoreService) {
      super();
      this._cdr = _cdr;
      this._store = _store;
      this._jobSearchStoreService = _jobSearchStoreService;
    }
    ngOnInit() {
      this._store.selectedOrganization$.pipe((0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .distinctUntilChange */ .nI)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__/* .filter */ .p)(organization => !!organization), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__/* .tap */ .M)(organization => {
        this.organization = organization;
        this.employee = this.cell.getRow()?.getData();
      }), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .untilDestroyed */ .s)(this)).subscribe();
    }
    ngAfterViewInit() {
      if (!this.switcher) {
        return;
      }
      this.switcher.value = this.employee?.isJobSearchActive || false;
      this._cdr.detectChanges(); // Force change detection to update the UI
    }
    /**
     * Updates the job search availability status of an employee within the organization.
     *
     * @param isJobSearchActive - A boolean flag indicating whether the job search is active.
     */
    updateJobSearchAvailability(isJobSearchActive) {
      try {
        // Call the service to update the job search availability status
        this._jobSearchStoreService.updateJobSearchAvailability(this.organization, this.employee, isJobSearchActive);
      } catch (error) {
        // Log the error for debugging purposes
        console.log('Error while updating job search availability:', error);
      }
    }
    static {
      this.ɵfac = function JobSearchAvailabilityEditorComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || JobSearchAvailabilityEditorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_core__WEBPACK_IMPORTED_MODULE_5__/* .ChangeDetectorRef */ .gRc), _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_6__/* .Store */ .il), _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_7__/* .JobSearchStoreService */ ._));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdefineComponent"] */ .VBU({
        type: JobSearchAvailabilityEditorComponent,
        selectors: [["ng-component"]],
        viewQuery: function JobSearchAvailabilityEditorComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵviewQuery"] */ .GBs(_toggle_switcher_toggle_switcher_component__WEBPACK_IMPORTED_MODULE_8__/* .ToggleSwitcherComponent */ .F, 5);
          }
          if (rf & 2) {
            let _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵqueryRefresh"] */ .mGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵloadQuery"] */ .lsd()) && (ctx.switcher = _t.first);
          }
        },
        inputs: {
          cell: "cell"
        },
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
        decls: 1,
        vars: 1,
        consts: [[3, "onSwitched", "label"]],
        template: function JobSearchAvailabilityEditorComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .j41(0, "ngx-toggle-switcher", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵlistener"] */ .bIt("onSwitched", function JobSearchAvailabilityEditorComponent_Template_ngx_toggle_switcher_onSwitched_0_listener($event) {
              return ctx.updateJobSearchAvailability($event);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .k0s();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Y8G("label", false);
          }
        },
        dependencies: [_toggle_switcher_toggle_switcher_component__WEBPACK_IMPORTED_MODULE_8__/* .ToggleSwitcherComponent */ .F],
        encapsulation: 2
      });
    }
  };
  JobSearchAvailabilityEditorComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .UntilDestroy */ .d)({
    checkProperties: true
  }), (0,tslib__WEBPACK_IMPORTED_MODULE_9__/* .__metadata */ .Sn)("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_5__/* .ChangeDetectorRef */ .gRc, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_6__/* .Store */ .il, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_7__/* .JobSearchStoreService */ ._])], JobSearchAvailabilityEditorComponent);
  return JobSearchAvailabilityEditorComponent;
})();


/***/ }),

/***/ 13706:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   u: () => (/* binding */ StatusBadgeModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14572);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10936);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56383);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);




let StatusBadgeModule = /*#__PURE__*/(() => {
  class StatusBadgeModule {
    static {
      this.ɵfac = function StatusBadgeModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || StatusBadgeModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .$C({
        type: StatusBadgeModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .CommonModule */ .MD, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .FormsModule */ .YN, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .ReactiveFormsModule */ .X1, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbBadgeModule */ .iEK]
      });
    }
  }
  return StatusBadgeModule;
})();

/***/ }),

/***/ 19774:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   t: () => (/* binding */ EmployeeLinkEditorComponent)
/* harmony export */ });
/* harmony import */ var angular2_smart_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52345);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14572);
/* harmony import */ var _directives_img_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71466);




function EmployeeLinkEditorComponent_ng_container_0_a_1_img_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(0, "img", 3);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("src", ctx_r0.value.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵsanitizeUrl"] */ .B4B);
  }
}
function EmployeeLinkEditorComponent_ng_container_0_a_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, EmployeeLinkEditorComponent_ng_container_0_a_1_img_1_Template, 1, 1, "img", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r0.value.imageUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", ctx_r0.value.name, " ");
  }
}
function EmployeeLinkEditorComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, EmployeeLinkEditorComponent_ng_container_0_a_1_Template, 4, 2, "a", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r0.value == null ? null : ctx_r0.value.name);
  }
}
let EmployeeLinkEditorComponent = /*#__PURE__*/(() => {
  class EmployeeLinkEditorComponent extends angular2_smart_table__WEBPACK_IMPORTED_MODULE_1__/* .DefaultEditor */ .ny {
    ngOnInit() {
      const employee = this.cell.getRow().getData();
      this.value = employee?.user ?? null;
    }
    static {
      this.ɵfac = /*@__PURE__*/(() => {
        let ɵEmployeeLinkEditorComponent_BaseFactory;
        return function EmployeeLinkEditorComponent_Factory(__ngFactoryType__) {
          return (ɵEmployeeLinkEditorComponent_BaseFactory || (ɵEmployeeLinkEditorComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetInheritedFactory"] */ .xGo(EmployeeLinkEditorComponent)))(__ngFactoryType__ || EmployeeLinkEditorComponent);
        };
      })();
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: EmployeeLinkEditorComponent,
        selectors: [["ng-component"]],
        inputs: {
          cell: "cell"
        },
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
        decls: 1,
        vars: 1,
        consts: [[4, "ngIf"], ["width", "18px", "height", "18px", 3, "src", 4, "ngIf"], [1, "names-wrapper"], ["width", "18px", "height", "18px", 3, "src"]],
        template: function EmployeeLinkEditorComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(0, EmployeeLinkEditorComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.value);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__/* .NgIf */ .bT, _directives_img_directive__WEBPACK_IMPORTED_MODULE_3__/* .ImgDirective */ .z],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   a[_ngcontent-%COMP%] {\n  background-color: var(--color-primary-transparent-100);\n  border-radius: var(--button-rectangle-border-radius);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  width: fit-content;\n  color: var(--text-primary-color);\n}\n[dir=rtl]   [_nghost-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 5px 7px 5px 14px;\n}\n[dir=ltr]   [_nghost-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 5px 14px 5px 7px;\n}\n[_nghost-%COMP%]   a[_ngcontent-%COMP%]   .names-wrapper[_ngcontent-%COMP%] {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  max-width: 110px;\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 15px;\n  letter-spacing: 0em;\n}\n[_nghost-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: var(--button-rectangle-border-radius);\n}\n[dir=rtl]   [_nghost-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n[dir=ltr]   [_nghost-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n\n[_nghost-%COMP%] {\n  width: 100%;\n}"]
      });
    }
  }
  return EmployeeLinkEditorComponent;
})();

/***/ }),

/***/ 24906:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   r: () => (/* binding */ ProposalTemplateSelectModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14572);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10936);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56383);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19223);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);






let ProposalTemplateSelectModule = /*#__PURE__*/(() => {
  class ProposalTemplateSelectModule {
    static {
      this.ɵfac = function ProposalTemplateSelectModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || ProposalTemplateSelectModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .$C({
        type: ProposalTemplateSelectModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .CommonModule */ .MD, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .FormsModule */ .YN, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbSelectModule */ .VcP, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__/* .TranslateModule */ .h.forChild()]
      });
    }
  }
  return ProposalTemplateSelectModule;
})();

/***/ }),

/***/ 34362:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   y: () => (/* binding */ NumberEditorComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26860);
/* harmony import */ var angular2_smart_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52345);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10936);




let NumberEditorComponent = /*#__PURE__*/(() => {
  class NumberEditorComponent extends angular2_smart_table__WEBPACK_IMPORTED_MODULE_0__/* .DefaultEditor */ .ny {
    constructor() {
      super();
      this.onConfirm = new _angular_core__WEBPACK_IMPORTED_MODULE_1__/* .EventEmitter */ .bkB();
    }
    ngOnInit() {
      // Get the value from the cell
      if (this.cell.getValue()) {
        // Set the cell value to the new raw value
        this.cellValue = this.cell.getNewRawValue();
        // Set the value on the cell
        this.cell.setValue(this.cell.getNewRawValue());
      }
    }
    /**
     * Handles the input change event.
     *
     * @param event - The input change event.
     */
    onInputChange(event) {
      // Get the input element
      const inputElement = event.target;
      // Get the value from the input element
      const value = inputElement.value;
      // Set the value on the cell
      this.cell.setValue(value);
    }
    static {
      this.ɵfac = function NumberEditorComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || NumberEditorComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineComponent"] */ .VBU({
        type: NumberEditorComponent,
        selectors: [["ng-component"]],
        inputs: {
          cell: "cell"
        },
        outputs: {
          onConfirm: "onConfirm"
        },
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
        decls: 1,
        vars: 4,
        consts: [[1, "form-control", 3, "ngModelChange", "input", "min", "type", "ngModel", "name"]],
        template: function NumberEditorComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "input", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtwoWayListener"] */ .mxI("ngModelChange", function NumberEditorComponent_Template_input_ngModelChange_0_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtwoWayBindingSet"] */ .DH7(ctx.cellValue, $event) || (ctx.cellValue = $event);
              return $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("input", function NumberEditorComponent_Template_input_input_0_listener($event) {
              return ctx.onInputChange($event);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("min", 0)("type", "number");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtwoWayProperty"] */ .R50("ngModel", ctx.cellValue);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("name", ctx.cell.getId());
          }
        },
        dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .DefaultValueAccessor */ .me, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .NgControlStatus */ .BC, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .NgModel */ .vS],
        encapsulation: 2
      });
    }
  }
  return NumberEditorComponent;
})();

/***/ }),

/***/ 65735:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K: () => (/* binding */ ProposalTemplateService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80189);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(64913);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26024);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26860);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45715);





let ProposalTemplateService = /*#__PURE__*/(() => {
  class ProposalTemplateService {
    constructor(http) {
      this.http = http;
      this.API_URL = `${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_0__/* .API_PREFIX */ .m4}/employee-proposal-template`;
    }
    /**
     * Fetches all employee proposal templates based on the given request parameters.
     *
     * @param request - An optional object containing query parameters to filter and sort the results.
     * @returns A promise that resolves with a pagination object containing the list of employee proposal templates.
     */
    getAll(request = {}) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ ._)(this.http.get(this.API_URL, {
        params: (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_2__/* .toParams */ .SV)(request)
      }));
    }
    /**
     * Creates a new employee proposal template with the provided input data.
     *
     * @param input - An object containing the data for the new employee proposal template.
     * @returns A promise that resolves with the created employee proposal template.
     */
    create(input) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ ._)(this.http.post(this.API_URL, input));
    }
    /**
     * Updates an existing employee proposal template with the given ID using the provided data.
     *
     * @param id - The ID of the employee proposal template to update.
     * @param request - An object containing the updated data for the employee proposal template.
     * @returns A promise that resolves with the updated employee proposal template.
     */
    update(id, request) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ ._)(this.http.put(`${this.API_URL}/${id}`, request));
    }
    /**
     * Sets the specified employee proposal template as the default template.
     *
     * @param id - The ID of the employee proposal template to set as default.
     * @param input - An object containing any additional data required for making the template default.
     * @returns A promise that resolves with the updated employee proposal template.
     */
    makeDefault(id, input) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ ._)(this.http.patch(`${this.API_URL}/${id}/make-default`, input));
    }
    /**
     * Deletes the employee proposal template with the specified ID.
     *
     * @param id - The ID of the employee proposal template to delete.
     * @returns A promise that resolves when the employee proposal template has been deleted.
     */
    delete(id) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ ._)(this.http.delete(`${this.API_URL}/${id}`));
    }
    static {
      this.ɵfac = function ProposalTemplateService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || ProposalTemplateService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵinject"] */ .KVO(_angular_common_http__WEBPACK_IMPORTED_MODULE_4__/* .HttpClient */ .Qq));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdefineInjectable"] */ .jDH({
        token: ProposalTemplateService,
        factory: ProposalTemplateService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return ProposalTemplateService;
})();

/***/ }),

/***/ 73800:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ JobService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80189);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64913);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26024);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26860);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45715);





let JobService = /*#__PURE__*/(() => {
  class JobService {
    constructor(http) {
      this.http = http;
    }
    /**
     * Fetches job posts based on the given request parameters.
     *
     * @param request - An optional object of type IGetEmployeeJobPostInput containing filter parameters for fetching job posts.
     * @returns A promise that resolves to an IPagination<IEmployeeJobPost> object containing the paginated job posts.
     */
    getJobs(request) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ ._)(this.http.get(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/employee-job`, {
        params: request ? (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_2__/* .toParams */ .SV)(request) : {}
      }));
    }
    /**
     * Retrieves job statistics for employees based on the provided request parameters.
     *
     * @param request - Parameters for filtering and retrieving job statistics.
     * @returns A promise that resolves with the job statistics data.
     */
    getEmployeeJobsStatistics(request) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ ._)(this.http.get(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/employee-job/statistics`, {
        params: (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_2__/* .toParams */ .SV)(request)
      }));
    }
    /**
     * Updates the job search status and statistics for an employee.
     *
     * @param id - The ID of the employee.
     * @param statistics - An object containing job search status and statistics to be updated.
     * @returns A promise that resolves with the updated employee's job search status and statistics.
     */
    updateJobSearchStatus(id, statistics) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ ._)(this.http.put(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/employee-job/${id}/job-search-status`, statistics));
    }
    /**
     * Hides a job post based on the given request parameters.
     *
     * @param request - An object of type IVisibilityJobPostInput containing the necessary parameters to hide a job post.
     * @returns A promise that resolves to a boolean indicating whether the job post was successfully hidden.
     */
    hideJob(request) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ ._)(this.http.post(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/employee-job/hide`, request));
    }
    /**
     * Updates the application status of a job post.
     *
     * @param request - An object of type IEmployeeJobApplication containing the necessary parameters to update the application status of a job post.
     * @returns A promise that resolves to an IUpdateEmployeeJobPostAppliedResult object containing the result of the update operation.
     */
    updateApplied(request) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ ._)(this.http.post(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/employee-job/updateApplied`, request));
    }
    /**
     * Applies for a job post based on the given request parameters.
     *
     * @param request - An object of type IEmployeeJobApplication containing the necessary parameters to apply for a job post.
     * @returns A promise that resolves to an IEmployeeJobApplicationAppliedResult object containing the result of the application operation.
     */
    applyJob(request) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ ._)(this.http.post(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/employee-job/apply`, request));
    }
    /**
     * Create employee job application record.
     * We use AI to generate proposal for employee.
     *
     * @param request
     * @returns
     */
    preProcessEmployeeJobApplication(request) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ ._)(this.http.post(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/employee-job/pre-process`, request));
    }
    /**
     * To generate proposal for specific employee job application
     *
     * @param employeeJobApplicationId
     * @returns
     */
    generateAIProposal(employeeJobApplicationId) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ ._)(this.http.post(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/employee-job/generate-proposal/${employeeJobApplicationId}`, {}));
    }
    /**
     * Get employee job application where proposal generated by AI
     *
     * @param employeeJobApplicationId
     * @returns
     */
    getEmployeeJobApplication(employeeJobApplicationId) {
      return this.http.get(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/employee-job/application/${employeeJobApplicationId}`);
    }
    static {
      this.ɵfac = function JobService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || JobService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵinject"] */ .KVO(_angular_common_http__WEBPACK_IMPORTED_MODULE_4__/* .HttpClient */ .Qq));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdefineInjectable"] */ .jDH({
        token: JobService,
        factory: JobService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return JobService;
})();

/***/ }),

/***/ 95692:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ JobSearchStoreService)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73014);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26860);
/* harmony import */ var _job_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73800);
/* harmony import */ var _notification_toastr_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15480);






let JobSearchStoreService = /*#__PURE__*/(() => {
  class JobSearchStoreService {
    constructor(_jobService, _toastrService) {
      this._jobService = _jobService;
      this._toastrService = _toastrService;
    }
    /**
     * Updates the job search availability status of an employee within the organization.
     *
     * @param organization - The current organization context.
     * @param employee - The employee object to update.
     * @param isJobSearchActive - A boolean flag indicating whether the job search is active.
     * @returns {Promise<void>} - A Promise resolving to void.
     */
    updateJobSearchAvailability(organization, employee, isJobSearchActive) {
      var _this = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(function* () {
        try {
          // Ensure the organization context is available before proceeding.
          if (!organization) {
            console.warn('No organization provided to update job search availability.');
            return;
          }
          // Destructure organization properties for clarity.
          const {
            id: organizationId,
            tenantId
          } = organization;
          // Update the job search status using the employeesService.
          yield _this._jobService.updateJobSearchStatus(employee.id, {
            isJobSearchActive,
            organizationId,
            tenantId
          });
          // Display a success toastr notification based on the job search status.
          const toastrMessageKey = isJobSearchActive ? 'TOASTR.MESSAGE.EMPLOYEE_JOB_STATUS_ACTIVE' : 'TOASTR.MESSAGE.EMPLOYEE_JOB_STATUS_INACTIVE';
          const fullName = employee.fullName.trim() || 'Unknown Employee';
          _this._toastrService.success(toastrMessageKey, {
            name: fullName
          });
        } catch (error) {
          // Display an error toastr notification in case of any exceptions.
          const errorMessage = error?.message || 'An error occurred while updating the job search availability.';
          console.error('Error while updating job search availability:', error?.message);
          _this._toastrService.danger(errorMessage);
        }
      })();
    }
    static {
      this.ɵfac = function JobSearchStoreService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || JobSearchStoreService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵinject"] */ .KVO(_job_service__WEBPACK_IMPORTED_MODULE_2__/* .JobService */ .L), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵinject"] */ .KVO(_notification_toastr_service__WEBPACK_IMPORTED_MODULE_3__/* .ToastrService */ .t));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineInjectable"] */ .jDH({
        token: JobSearchStoreService,
        factory: JobSearchStoreService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return JobSearchStoreService;
})();

/***/ }),

/***/ 99434:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   y: () => (/* binding */ ProposalTemplateSelectComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(73014);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(55598);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(10936);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4644);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4478);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39855);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(52738);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(41598);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(26024);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(65735);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(71924);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(54263);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(14572);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(56383);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(19223);














const _c0 = ["*"];
function ProposalTemplateSelectComponent_nb_option_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-option", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const proposalTemplate_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("value", proposalTemplate_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", proposalTemplate_r1.name, " ");
  }
}
let ProposalTemplateSelectComponent = /*#__PURE__*/(() => {
  let ProposalTemplateSelectComponent = class ProposalTemplateSelectComponent {
    get employeeId() {
      return this._employeeId;
    }
    set employeeId(value) {
      this._employeeId = value;
      this.subject$.next(true);
    }
    set proposalTemplateId(val) {
      this._proposalTemplateId = val;
      // Emit selected proposal template
      this.onChange(val);
      this.onTouched(val);
    }
    get proposalTemplateId() {
      return this._proposalTemplateId;
    }
    constructor(_proposalTemplateService, _store, _errorHandlingService) {
      this._proposalTemplateService = _proposalTemplateService;
      this._store = _store;
      this._errorHandlingService = _errorHandlingService;
      this.proposalTemplates = [];
      this.subject$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__/* .Subject */ .B();
      this.onChange = () => {};
      this.onTouched = () => {};
      this.disabled = false;
      this.multiple = false;
      this.selectedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .bkB();
    }
    ngOnInit() {
      this.subject$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .debounceTime */ .B)(500), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .tap */ .M)(() => this.getProposalTemplates()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .untilDestroyed */ .s)(this)).subscribe();
      this._store.selectedOrganization$.pipe((0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_5__/* .distinctUntilChange */ .nI)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .filter */ .p)(organization => !!organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .tap */ .M)(organization => this.organization = organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .tap */ .M)(() => this.subject$.next(true)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .untilDestroyed */ .s)(this)).subscribe();
    }
    /**
     * Write value
     * @param value - The value to be written, can be a string or an array of strings
     */
    writeValue(value) {
      if (this.multiple) {
        this._proposalTemplateId = value instanceof Array ? value : [value];
      } else {
        this._proposalTemplateId = value;
      }
    }
    /**
     * On selected change
     * @param selectedItem - The ID of the selected item
     */
    onSelectedChange(selectedItem) {
      const proposalTemplate = this.proposalTemplates.find(({
        id
      }) => id === selectedItem);
      this.selectedChange.emit(proposalTemplate || null);
    }
    /**
     * Register on change
     * @param fn - A function that takes a number (rating) as an argument and returns void
     */
    registerOnChange(fn) {
      this.onChange = fn;
    }
    /**
     * Register on touched
     * @param fn - A function that takes no arguments and returns void
     */
    registerOnTouched(fn) {
      this.onTouched = fn;
    }
    /**
     * Set disabled state
     * @param isDisabled - A boolean indicating whether the control should be disabled
     */
    setDisabledState(isDisabled) {
      this.disabled = isDisabled;
    }
    /**
     * Get proposal templates
     */
    getProposalTemplates() {
      var _this = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A)(function* () {
        try {
          const {
            id: organizationId,
            tenantId
          } = _this.organization;
          const {
            employeeId
          } = _this;
          const {
            items = []
          } = yield _this._proposalTemplateService.getAll({
            where: {
              organizationId,
              tenantId,
              ...(employeeId ? {
                employeeId
              } : {})
            }
          });
          _this.proposalTemplates = items;
          _this.defaultSelectedTemplate();
        } catch (error) {
          console.log('Error while getting proposal templates', error);
          // Handle and log errors
          _this._errorHandlingService.handleError(error);
        }
      })();
    }
    /**
     * Set default selected proposal template
     */
    defaultSelectedTemplate() {
      // Find default proposal template
      const proposalTemplate = this.proposalTemplates.find(({
        isDefault
      }) => isDefault === true);
      this.proposalTemplateId = proposalTemplate?.id || null;
      // Emit selected proposal template
      this.onSelectedChange(this.proposalTemplateId);
    }
    static {
      this.ɵfac = function ProposalTemplateSelectComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || ProposalTemplateSelectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_8__/* .ProposalTemplateService */ .K), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_9__/* .Store */ .il), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_10__/* .ErrorHandlingService */ .X));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: ProposalTemplateSelectComponent,
        selectors: [["ngx-proposal-template-select"]],
        inputs: {
          disabled: "disabled",
          multiple: "multiple",
          employeeId: "employeeId"
        },
        outputs: {
          selectedChange: "selectedChange"
        },
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵProvidersFeature"] */ .Jv_([{
          provide: _angular_forms__WEBPACK_IMPORTED_MODULE_11__/* .NG_VALUE_ACCESSOR */ .kq,
          useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__/* .forwardRef */ .Rfq)(() => ProposalTemplateSelectComponent),
          multi: true
        }])],
        ngContentSelectors: _c0,
        decls: 4,
        vars: 7,
        consts: [[1, "multiple-select", 3, "selectedChange", "disabled", "multiple", "placeholder", "selected"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]],
        template: function ProposalTemplateSelectComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵprojectionDef"] */ .NAR();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-select", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(1, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayListener"] */ .mxI("selectedChange", function ProposalTemplateSelectComponent_Template_nb_select_selectedChange_0_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayBindingSet"] */ .DH7(ctx.proposalTemplateId, $event) || (ctx.proposalTemplateId = $event);
              return $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("selectedChange", function ProposalTemplateSelectComponent_Template_nb_select_selectedChange_0_listener($event) {
              return ctx.onSelectedChange($event);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(2, ProposalTemplateSelectComponent_nb_option_2_Template, 2, 2, "nb-option", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵprojection"] */ .SdG(3);
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("disabled", ctx.disabled)("multiple", ctx.multiple)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(1, 5, "PROPOSAL_TEMPLATE.SELECT_PROPOSAL_TEMPLATE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayProperty"] */ .R50("selected", ctx.proposalTemplateId);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx.proposalTemplates);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__/* .NgForOf */ .Sq, _nebular_theme__WEBPACK_IMPORTED_MODULE_13__/* .NbSelectComponent */ .S81, _nebular_theme__WEBPACK_IMPORTED_MODULE_13__/* .NbOptionComponent */ .ZJ2, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__/* .TranslatePipe */ .D9],
        styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n[_nghost-%COMP%]   nb-select[_ngcontent-%COMP%] {\n  width: 100%;\n}"]
      });
    }
  };
  ProposalTemplateSelectComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_15__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .UntilDestroy */ .d)(), (0,tslib__WEBPACK_IMPORTED_MODULE_15__/* .__metadata */ .Sn)("design:paramtypes", [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_8__/* .ProposalTemplateService */ .K, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_9__/* .Store */ .il, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_10__/* .ErrorHandlingService */ .X])], ProposalTemplateSelectComponent);
  return ProposalTemplateSelectComponent;
})();


/***/ })

}]);