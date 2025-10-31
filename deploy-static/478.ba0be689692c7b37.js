"use strict";
(self["webpackChunkgauzy"] = self["webpackChunkgauzy"] || []).push([[478],{

/***/ 1272:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ EditCandidateHistoryComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _packages_ui_core_shared_src_lib_work_in_progress_work_in_progress_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(83605);


let EditCandidateHistoryComponent = /*#__PURE__*/(() => {
  class EditCandidateHistoryComponent {
    static {
      this.ɵfac = function EditCandidateHistoryComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || EditCandidateHistoryComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: EditCandidateHistoryComponent,
        selectors: [["ga-edit-candidate-history"]],
        standalone: false,
        decls: 1,
        vars: 0,
        template: function EditCandidateHistoryComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(0, "ga-wip");
          }
        },
        dependencies: [_packages_ui_core_shared_src_lib_work_in_progress_work_in_progress_component__WEBPACK_IMPORTED_MODULE_1__/* .WorkInProgressComponent */ .x],
        encapsulation: 2
      });
    }
  }
  return EditCandidateHistoryComponent;
})();

/***/ }),

/***/ 2556:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   U: () => (/* binding */ CandidatePersonalQualitiesComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(73014);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24237);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10936);
/* harmony import */ var _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38546);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12614);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(15480);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(91099);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(71924);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(19223);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(56383);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(14572);














function CandidatePersonalQualitiesComponent_form_6_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div")(1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(2, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const i_r1 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("formGroupName", i_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpropertyInterpolate"] */ .FS9("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(3, 2, "FORM.PLACEHOLDERS.ADD_CANDIDATE_QUALITY"));
  }
}
function CandidatePersonalQualitiesComponent_form_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "form", 11)(1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(2, CandidatePersonalQualitiesComponent_form_6_div_2_Template, 4, 4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("formGroup", ctx_r1.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx_r1.qualities == null ? null : ctx_r1.qualities.controls);
  }
}
function CandidatePersonalQualitiesComponent_nb_card_body_16_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const name_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", name_r3, " ");
  }
}
function CandidatePersonalQualitiesComponent_nb_card_body_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-card-body", 16)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(4, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(5, CandidatePersonalQualitiesComponent_nb_card_body_16_div_5_Template, 2, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(3, 2, "CANDIDATES_PAGE.CRITERIONS.ALREADY_EXISTED"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx_r1.existedQualNames);
  }
}
function CandidatePersonalQualitiesComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 20)(1, "div", 21)(2, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(4, "div", 23)(5, "nb-icon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function CandidatePersonalQualitiesComponent_div_18_Template_nb_icon_click_5_listener() {
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r4);
      const quality_r6 = ctx_r4.$implicit;
      const i_r7 = ctx_r4.index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.edit(i_r7, quality_r6.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(6, "nb-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function CandidatePersonalQualitiesComponent_div_18_Template_nb_icon_click_6_listener() {
      const quality_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r4).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.remove(quality_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()()();
  }
  if (rf & 2) {
    const quality_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(quality_r6.name);
  }
}
let CandidatePersonalQualitiesComponent = /*#__PURE__*/(() => {
  class CandidatePersonalQualitiesComponent extends _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_1__/* .TranslationBaseComponent */ .K {
    constructor(fb, toastrService, translateService, candidatePersonalQualitiesService, store) {
      super(translateService);
      this.fb = fb;
      this.toastrService = toastrService;
      this.translateService = translateService;
      this.candidatePersonalQualitiesService = candidatePersonalQualitiesService;
      this.store = store;
      this._ngDestroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__/* .Subject */ .B();
      this.editId = null;
      this.qualityNames = [];
    }
    ngOnInit() {
      this.store.selectedOrganization$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .takeUntil */ .Q)(this._ngDestroy$)).subscribe(organization => {
        if (organization) {
          this.organization = organization;
          this._initializeForm();
          this.loadQualities();
        }
      });
    }
    cancel() {
      this.qualities.reset();
    }
    _initializeForm() {
      var _this = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(function* () {
        _this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .UntypedFormGroup */ .J3({
          qualities: _this.fb.array([])
        });
        const qualitiesForm = _this.qualities;
        qualitiesForm.push(_this.fb.group({
          name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .Validators */ .k0.required]
        }));
        _this.form.valueChanges.subscribe(item => {
          _this.existedQualNames = [];
          const enteredName = item.qualities[0].name;
          _this.personalQualitiesList.forEach(el => {
            if (enteredName !== '' && el.name.toLocaleLowerCase().includes(enteredName)) {
              _this.existedQualNames.push(el.name);
            }
          });
        });
      })();
    }
    loadQualities() {
      var _this2 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(function* () {
        const {
          id: organizationId,
          tenantId
        } = _this2.organization;
        const res = yield _this2.candidatePersonalQualitiesService.getAll({
          organizationId,
          tenantId
        });
        if (res) {
          _this2.personalQualitiesList = res.items.filter(item => !item.interviewId);
          _this2.qualityNames = [];
          _this2.personalQualitiesList.forEach(tech => {
            _this2.qualityNames.push(tech.name.toLocaleLowerCase());
          });
        }
      })();
    }
    save() {
      var _this3 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(function* () {
        const {
          id: organizationId,
          tenantId
        } = _this3.organization;
        const qualitiesForm = _this3.qualities;
        const formValue = {
          ...qualitiesForm.value[0]
        };
        const targetValue = Object.assign(formValue, {
          organizationId,
          tenantId
        });
        if (_this3.editId !== null) {
          _this3.update(targetValue);
        } else {
          _this3.create(targetValue);
        }
        qualitiesForm.reset();
      })();
    }
    update(formValue) {
      var _this4 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(function* () {
        if (!_this4.qualityNames.includes(formValue.name.toLocaleLowerCase())) {
          try {
            yield _this4.candidatePersonalQualitiesService.update(_this4.editId, {
              ...formValue
            });
            _this4.editId = null;
            _this4.toastrService.success('TOASTR.MESSAGE.PERSONAL_QUALITIES_UPDATED', {
              name: formValue.name
            });
            _this4.loadQualities();
          } catch (error) {
            _this4.toastrError(error);
          }
        } else {
          _this4.toastrService.danger('CANDIDATES_PAGE.CRITERIONS.TOASTR_ALREADY_EXIST');
        }
      })();
    }
    create(formValue) {
      var _this5 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(function* () {
        if (!_this5.qualityNames.includes(formValue.name.toLocaleLowerCase())) {
          try {
            yield _this5.candidatePersonalQualitiesService.create({
              ...formValue
            });
            _this5.toastrService.success('TOASTR.MESSAGE.PERSONAL_QUALITIES_CREATED', {
              name: formValue.name
            });
            _this5.loadQualities();
          } catch (error) {
            _this5.toastrError(error);
          }
        } else {
          _this5.toastrService.danger('CANDIDATES_PAGE.CRITERIONS.TOASTR_ALREADY_EXIST');
        }
      })();
    }
    edit(index, id) {
      var _this6 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(function* () {
        _this6.editId = id;
        _this6.form.controls.qualities.patchValue([_this6.personalQualitiesList[index]]);
      })();
    }
    remove(quantity) {
      var _this7 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(function* () {
        try {
          yield _this7.candidatePersonalQualitiesService.delete(quantity.id);
          _this7.loadQualities();
          _this7.toastrService.success('TOASTR.MESSAGE.PERSONAL_QUALITIES_DELETED', {
            name: quantity.name
          });
        } catch (error) {
          _this7.toastrError(error);
        }
      })();
    }
    ngOnDestroy() {
      this._ngDestroy$.next();
      this._ngDestroy$.complete();
    }
    toastrError(error) {
      this.toastrService.danger(this.getTranslation('NOTES.CANDIDATE.EXPERIENCE.ERROR', {
        error: error.error ? error.error.message : error.message
      }), this.getTranslation('TOASTR.TITLE.ERROR'));
    }
    /*
     * Getter for candidate qualities form controls array
     */
    get qualities() {
      return this.form.get('qualities');
    }
    static {
      this.ɵfac = function CandidatePersonalQualitiesComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || CandidatePersonalQualitiesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .UntypedFormBuilder */ .ze), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_6__/* .ToastrService */ .t), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__/* .TranslateService */ .c$), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_8__/* .CandidatePersonalQualitiesService */ .W), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_9__/* .Store */ .il));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: CandidatePersonalQualitiesComponent,
        selectors: [["ga-candidate-personal-qualities"]],
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
        decls: 19,
        vars: 12,
        consts: [[1, "add-criterion-card", "mb-0"], [1, "row", "m-0", "mt-2"], ["class", "col-12 pl-0", 3, "formGroup", 4, "ngIf"], [1, "row", "m-0", "mt-3"], [1, "col-2", "pl-1", "pr-0"], ["nbButton", "", "outline", "", "status", "basic", 1, "w-100", 3, "click"], [1, "col-2", "pl-2", "pr-1"], ["nbButton", "", "status", "success", 1, "w-100", 3, "click"], ["class", "existedNames", 4, "ngIf"], [1, "qualities"], ["class", "qualities-card", 4, "ngFor", "ngForOf"], [1, "col-12", "pl-0", 3, "formGroup"], ["formArrayName", "qualities"], [4, "ngFor", "ngForOf"], [3, "formGroupName"], ["formControlName", "name", "nbInput", "", "type", "text", "fullWidth", "", 1, "col-12", 3, "placeholder"], [1, "existedNames"], [1, "existedNames-card"], ["class", "existedName", 4, "ngFor", "ngForOf"], [1, "existedName"], [1, "qualities-card"], [1, "quality"], [1, "quality-text"], [1, "quality-buttons"], ["icon", "edit", 1, "quality-buttons-icons", "pl-1", 3, "click"], ["icon", "close", 1, "quality-buttons-icons", "pl-1", 3, "click"]],
        template: function CandidatePersonalQualitiesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-card", 0)(1, "nb-card-header")(2, "h6");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(4, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(5, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(6, CandidatePersonalQualitiesComponent_form_6_Template, 3, 2, "form", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(7, "div", 3)(8, "span", 4)(9, "button", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function CandidatePersonalQualitiesComponent_Template_button_click_9_listener() {
              return ctx.cancel();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(11, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(12, "span", 6)(13, "button", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function CandidatePersonalQualitiesComponent_Template_button_click_13_listener() {
              return ctx.save();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(15, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(16, CandidatePersonalQualitiesComponent_nb_card_body_16_Template, 6, 4, "nb-card-body", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(17, "nb-card-body", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(18, CandidatePersonalQualitiesComponent_div_18_Template, 7, 1, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(4, 6, "CANDIDATES_PAGE.CRITERIONS.PERSONAL_QUALITIES"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.form);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(11, 8, "BUTTONS.CANCEL"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(15, 10, "BUTTONS.SAVE"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", (ctx.existedQualNames == null ? null : ctx.existedQualNames.length) > 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx.personalQualitiesList);
          }
        },
        dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_10__/* .NbButtonComponent */ .YP2, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__/* .NbCardComponent */ .SrT, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__/* .NbCardBodyComponent */ .KH5, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__/* .NbCardHeaderComponent */ .zJv, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__/* .NbIconComponent */ .tHu, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__/* .NbInputDirective */ .i6h, _angular_common__WEBPACK_IMPORTED_MODULE_11__/* .NgForOf */ .Sq, _angular_common__WEBPACK_IMPORTED_MODULE_11__/* .NgIf */ .bT, _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* ["ɵNgNoValidate"] */ .qT, _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .DefaultValueAccessor */ .me, _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .NgControlStatus */ .BC, _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .NgControlStatusGroup */ .cb, _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .FormGroupDirective */ .j4, _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .FormControlName */ .JD, _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .FormGroupName */ .$R, _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .FormArrayName */ .v8, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__/* .TranslatePipe */ .D9],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   i[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n}\n[dir=ltr]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n[dir=rtl]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--gauzy-text-color-1);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(245, 109, 88, 0.3);\n  border-width: 2px;\n  color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(245, 109, 88, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 16px;\n  letter-spacing: 0em;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(126, 126, 143, 0.3);\n  border-width: 2px;\n  color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(126, 126, 143, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(37, 184, 105, 0.3);\n  border-width: 2px;\n  color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(37, 184, 105, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[disabled][_ngcontent-%COMP%], \n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic.btn-disabled[_ngcontent-%COMP%] {\n  background-color: var(--button-outline-basic-disabled-background-color);\n  border-color: var(--button-outline-basic-disabled-border-color);\n  color: var(--button-outline-basic-disabled-text-color);\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].primary.appearance-filled.status-primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  border: unset;\n  background-color: var(--color-primary-transparent-default);\n  box-shadow: var(--gauzy-shadow) 0, 0, 0, 0.15;\n}\n[dir=ltr]   [_nghost-%COMP%]     input, \n[dir=ltr]   [_nghost-%COMP%]     textarea {\n  text-align: start;\n}\n[dir=rtl]   [_nghost-%COMP%]     input, \n[dir=rtl]   [_nghost-%COMP%]     textarea {\n  text-align: end;\n}\n[_nghost-%COMP%]     input, \n[_nghost-%COMP%]     nb-select.appearance-outline.status-basic .select-button, \n[_nghost-%COMP%]     .ng-select .ng-select-container {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n  height: 42px !important;\n}\n[_nghost-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder, \n[_nghost-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {\n  top: unset !important;\n}\n[_nghost-%COMP%]     label, \n[_nghost-%COMP%]     .label {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  color: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]     textarea {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n}\n[_nghost-%COMP%]     .ng-select .ng-select-container input, \n[_nghost-%COMP%]     nb-tag-list input {\n  background-color: unset !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n}\n\n.add-criterion[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: flex-start;\n}\n.add-criterion-card[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n\n.qualities[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.qualities-card[_ngcontent-%COMP%] {\n  width: 49%;\n}\n\n.quality[_ngcontent-%COMP%] {\n  margin: 0.2rem 0;\n  padding: 1rem;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  background-color: var(--gauzy-card-1);\n  border-radius: var(--border-radius);\n}\n.quality-text[_ngcontent-%COMP%] {\n  font-weight: 500;\n  margin: 0;\n}\n.quality-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n}\n.quality-buttons-icons[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  cursor: pointer;\n}\n\n.existedNames[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: flex-start;\n  flex-wrap: wrap;\n}\n.existedNames-card[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  margin-top: 0.5rem;\n}\n.existedNames[_ngcontent-%COMP%]   .existedName[_ngcontent-%COMP%] {\n  border: 1px #ff3d70 solid;\n  margin: 0.2rem 0;\n  padding: 1rem;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  width: 49%;\n  font-weight: 500;\n}\n\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n}\n[_nghost-%COMP%]     input, \n[_nghost-%COMP%]     nb-select.appearance-outline.status-basic .select-button, \n[_nghost-%COMP%]     .ng-select .ng-select-container {\n  background-color: var(--gauzy-card-1) !important;\n  border: none;\n  height: 42px !important;\n}\n[_nghost-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder, \n[_nghost-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {\n  top: unset !important;\n}\n[_nghost-%COMP%]     label, \n[_nghost-%COMP%]     .label {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  color: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]     textarea {\n  background-color: var(--gauzy-card-1) !important;\n  border: none;\n}\n[_nghost-%COMP%]     .ng-select .ng-select-container input, \n[_nghost-%COMP%]     nb-tag-list input {\n  background-color: unset !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n}\n\nh6[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 17px;\n  letter-spacing: -0.01em;\n}"]
      });
    }
  }
  return CandidatePersonalQualitiesComponent;
})();

/***/ }),

/***/ 4185:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ CandidateSkillsService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80189);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26024);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64913);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26860);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45715);






let CandidateSkillsService = /*#__PURE__*/(() => {
  class CandidateSkillsService {
    constructor(http) {
      this.http = http;
    }
    create(createInput) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ ._)(this.http.post(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/candidate-skills`, createInput));
    }
    getAll(where) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ ._)(this.http.get(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/candidate-skills`, {
        params: (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_2__/* .toParams */ .SV)({
          where
        })
      }));
    }
    update(id, updateInput) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ ._)(this.http.put(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/candidate-skills/${id}`, updateInput));
    }
    delete(id) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ ._)(this.http.delete(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/candidate-skills/${id}`));
    }
    static {
      this.ɵfac = function CandidateSkillsService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || CandidateSkillsService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵinject"] */ .KVO(_angular_common_http__WEBPACK_IMPORTED_MODULE_4__/* .HttpClient */ .Qq));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdefineInjectable"] */ .jDH({
        token: CandidateSkillsService,
        factory: CandidateSkillsService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return CandidateSkillsService;
})();

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

/***/ 6421:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ FavoriteToggleComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(73014);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(55598);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(41598);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(19223);
/* harmony import */ var _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38546);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(17134);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(71924);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(15480);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52738);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39855);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(14572);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(56383);















function FavoriteToggleComponent_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", ctx_r0.buttonLabel, " ");
  }
}
let FavoriteToggleComponent = /*#__PURE__*/(() => {
  let FavoriteToggleComponent = class FavoriteToggleComponent extends _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_1__/* .TranslationBaseComponent */ .K {
    constructor(translateService, _genericFavoriteService, _store, _toastrService) {
      super(translateService);
      this.translateService = translateService;
      this._genericFavoriteService = _genericFavoriteService;
      this._store = _store;
      this._toastrService = _toastrService;
      this.size = 'small';
      this.status = 'basic';
      this.disabled = false;
      this.showLabel = false;
      this.spacing = 'default';
      this.favoriteToggled = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .bkB();
      this.favorites = [];
      this.loading = false;
    }
    ngOnInit() {
      // Watch for organization changes
      this._store.selectedOrganization$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .filter */ .p)(organization => !!organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .tap */ .M)(organization => {
        this.organization = organization;
        this._loadFavorites();
      }), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .untilDestroyed */ .s)(this)).subscribe();
    }
    /**
     * Load favorites for the current entity type
     */
    _loadFavorites() {
      var _this = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)(function* () {
        if (!_this.organization || !_this.entityType) {
          return;
        }
        try {
          _this.favorites = yield _this._genericFavoriteService.loadFavorites(_this.entityType, _this.organization, _this._store.user?.employee?.id);
        } catch (error) {
          console.error('Error loading favorites:', error);
          _this.favorites = [];
        }
      })();
    }
    /**
     * Check if the current entity is a favorite
     */
    get isFavorite() {
      if (!this.entityId || !this.entityType || !this.favorites) {
        return false;
      }
      return this._genericFavoriteService.isFavorite(this.entityId, this.entityType, this.favorites);
    }
    /**
     * Get CSS classes for the button based on spacing preference
     */
    get buttonClasses() {
      const baseClass = 'favorite-toggle-button';
      const activeClass = this.isFavorite ? 'favorite-active' : '';
      const spacingClass = this.spacing === 'detail' ? 'favorite-toggle-detail' : this.spacing === 'list' ? 'favorite-toggle-list' : '';
      return [baseClass, activeClass, spacingClass].filter(Boolean).join(' ');
    }
    /**
     * Get the favorite object for the current entity
     */
    get favoriteObject() {
      if (!this.entityId || !this.entityType || !this.favorites) {
        return undefined;
      }
      return this._genericFavoriteService.getFavoriteForEntity(this.entityId, this.entityType, this.favorites);
    }
    /**
     * Get the appropriate icon based on favorite status
     */
    get icon() {
      return this.isFavorite ? 'star' : 'star-outline';
    }
    /**
     * Get the appropriate icon status based on favorite status
     */
    get iconStatus() {
      return this.isFavorite ? 'warning' : this.status;
    }
    /**
     * Get the appropriate tooltip text
     */
    get tooltipText() {
      const entityName = this.entityName || 'item';
      return this.isFavorite ? this.getTranslation('BUTTONS.REMOVE_FROM_FAVORITES', {
        name: entityName
      }) : this.getTranslation('BUTTONS.ADD_TO_FAVORITES', {
        name: entityName
      });
    }
    /**
     * Get the appropriate button label
     */
    get buttonLabel() {
      return this.isFavorite ? this.getTranslation('BUTTONS.REMOVE_FROM_FAVORITES') : this.getTranslation('BUTTONS.ADD_TO_FAVORITES');
    }
    /**
     * Toggle favorite status
     */
    toggleFavorite() {
      var _this2 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)(function* () {
        if (!_this2.entityType || !_this2.entityId || !_this2.organization || _this2.disabled || _this2.loading) {
          return;
        }
        _this2.loading = true;
        try {
          yield _this2._genericFavoriteService.toggleFavorite(_this2.entityType, _this2.entityId, _this2.organization, _this2._store.user?.employee?.id, _this2.favorites);
          // Reload favorites to get updated state
          yield _this2._loadFavorites();
          // Emit the toggle event
          _this2.favoriteToggled.emit({
            isFavorite: _this2.isFavorite,
            favorite: _this2.favoriteObject
          });
          // Show success message
          const entityName = _this2.entityName || 'item';
          const messageKey = _this2.isFavorite ? 'TOASTR.MESSAGE.FAVORITE_ADDED' : 'TOASTR.MESSAGE.FAVORITE_REMOVED';
          _this2._toastrService.success(messageKey, {
            name: entityName
          });
        } catch (error) {
          console.error('Error toggling favorite:', error);
          _this2._toastrService.danger('TOASTR.MESSAGE.FAVORITE_ERROR');
        } finally {
          _this2.loading = false;
        }
      })();
    }
    ngOnDestroy() {}
    static {
      this.ɵfac = function FavoriteToggleComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || FavoriteToggleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__/* .TranslateService */ .c$), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_7__/* .GenericFavoriteService */ .X), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_8__/* .Store */ .il), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_9__/* .ToastrService */ .t));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: FavoriteToggleComponent,
        selectors: [["ngx-favorite-toggle"]],
        inputs: {
          entityType: "entityType",
          entityId: "entityId",
          entityName: "entityName",
          size: "size",
          status: "status",
          disabled: "disabled",
          showLabel: "showLabel",
          spacing: "spacing"
        },
        outputs: {
          favoriteToggled: "favoriteToggled"
        },
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
        decls: 3,
        vars: 13,
        consts: [["type", "button", "nbButton", "", "role", "switch", 3, "click", "status", "size", "disabled", "nbTooltip"], [3, "icon", "status"], ["class", "button-label", 4, "ngIf"], [1, "button-label"]],
        template: function FavoriteToggleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "button", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function FavoriteToggleComponent_Template_button_click_0_listener() {
              return ctx.toggleFavorite();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "nb-icon", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(2, FavoriteToggleComponent_span_2_Template, 2, 1, "span", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵclassMap"] */ .HbH(ctx.buttonClasses);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("status", ctx.status)("size", ctx.size)("disabled", ctx.disabled || ctx.loading)("nbTooltip", ctx.tooltipText);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵattribute"] */ .BMQ("aria-label", ctx.tooltipText || (ctx.entityName ? "Toggle " + ctx.entityName : "Toggle favorite"))("aria-pressed", ctx.isFavorite);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵclassProp"] */ .AVh("spin", ctx.loading);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("icon", ctx.loading ? "loader-outline" : ctx.icon)("status", ctx.iconStatus);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.showLabel);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__/* .NgIf */ .bT, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbButtonComponent */ .YP2, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbIconComponent */ .tHu, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbTooltipDirective */ .BmQ],
        styles: ["[_nghost-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.favorite-toggle-button[_ngcontent-%COMP%] {\n  transition: all 0.2s ease-in-out;\n  margin: 0 0.25rem;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  vertical-align: middle;\n  line-height: 1;\n}\n.favorite-toggle-button[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n}\n.favorite-toggle-button.favorite-active[_ngcontent-%COMP%]   nb-icon[_ngcontent-%COMP%] {\n  color: var(--warning-color, #ffaa00);\n}\n.favorite-toggle-button[_ngcontent-%COMP%]   .button-label[_ngcontent-%COMP%] {\n  margin-left: 0.5rem;\n}\n.favorite-toggle-button[_ngcontent-%COMP%]   nb-icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.favorite-toggle-button[_ngcontent-%COMP%]   nb-icon.spin[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n\n.favorite-toggle-detail[_ngcontent-%COMP%] {\n  margin-left: 1rem;\n  margin-right: 0.5rem;\n}\n\n.favorite-toggle-list[_ngcontent-%COMP%] {\n  margin: 0 0.125rem;\n}\n\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}"]
      });
    }
  };
  FavoriteToggleComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_12__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .UntilDestroy */ .d)({
    checkProperties: true
  }), (0,tslib__WEBPACK_IMPORTED_MODULE_12__/* .__metadata */ .Sn)("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__/* .TranslateService */ .c$, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_7__/* .GenericFavoriteService */ .X, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_8__/* .Store */ .il, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_9__/* .ToastrService */ .t])], FavoriteToggleComponent);
  return FavoriteToggleComponent;
})();


/***/ }),

/***/ 16736:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: () => (/* binding */ CriterionsRatingChartComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73014);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(64411);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56383);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23423);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(91081);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(78477);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(14572);
/* harmony import */ var _packages_ui_core_shared_src_lib_candidate_selectors_candidate_interviewer_select_candidate_interviewer_select_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4890);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(19223);












function CriterionsRatingChartComponent_div_0_nb_option_group_3_nb_option_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const interview_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("value", interview_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", interview_r3.title, " ");
  }
}
function CriterionsRatingChartComponent_div_0_nb_option_group_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-option-group", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, CriterionsRatingChartComponent_div_0_nb_option_group_3_nb_option_1_Template, 2, 2, "nb-option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const candidate_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("title", candidate_r4.user.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngForOf", candidate_r4.interview);
  }
}
function CriterionsRatingChartComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 3)(1, "nb-select", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("selectedChange", function CriterionsRatingChartComponent_div_0_Template_nb_select_selectedChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.onInterviewSelected($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(3, CriterionsRatingChartComponent_div_0_nb_option_group_3_Template, 2, 2, "nb-option-group", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(4, "div", 6)(5, "ga-candidate-interviewer-select", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("selectedChange", function CriterionsRatingChartComponent_div_0_Template_ga_candidate_interviewer_select_selectedChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.onMembersSelected($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(2, 8, "CANDIDATES_PAGE.STATISTIC.SELECT_INTERVIEW"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx_r1.candidates);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("reset", ctx_r1.isResetSelect)("disabled", ctx_r1.currentInterview ? false : true)("isAllMembers", true)("disabledIds", ctx_r1.disabledIds)("interviewers", ctx_r1.currentEmployee)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(6, 10, "FORM.PLACEHOLDERS.ADD_REMOVE_INTERVIEWER"));
  }
}
function CriterionsRatingChartComponent_div_1_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(2, 1, "CANDIDATES_PAGE.STATISTIC.SELECT_INTERVIEW_INTERVIEWER"), " ");
  }
}
function CriterionsRatingChartComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "nb-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(2, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(5, CriterionsRatingChartComponent_div_1_span_5_Template, 3, 3, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(4, 2, "CANDIDATES_PAGE.STATISTIC.NO_DATA"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r1.candidates.length > 0);
  }
}
function CriterionsRatingChartComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "canvas", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("type", "bar")("data", ctx_r1.data)("options", ctx_r1.options);
  }
}
let CriterionsRatingChartComponent = class CriterionsRatingChartComponent {
  constructor(themeService, candidateFeedbacksService) {
    this.themeService = themeService;
    this.candidateFeedbacksService = candidateFeedbacksService;
    this.labels = [];
    this.rating = [];
    this.currentEmployee = [];
    this.disabledIds = [];
    this.candidates = [];
    this.interviews = [];
    this.employees = [];
    this.backgroundColor = [];
  }
  onMembersSelected(id) {
    var _this = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(function* () {
      alert(id);
      _this.isResetSelect = false;
      const ratings = [];
      const res = yield _this.candidateFeedbacksService.getAll(['interviewer', 'criterionsRating'], {
        candidateId: _this.currentInterview.candidateId
      });
      if (res) {
        _this.feedbacks = res.items.filter(item => item.interviewId && item.interviewId === _this.currentInterview.id);
        _this.feedbacks.forEach(feedback => {
          if (id === 'all') {
            const rating = [];
            _this.labels = [];
            _this.getRating(feedback, rating);
            ratings.push(rating);
          }
          if (feedback.interviewer) {
            if (feedback.interviewer.employeeId === id) {
              _this.getRating(feedback);
            }
          }
        });
        if (id === 'all') {
          _this.rating = _this.calcAllRating(ratings);
        }
        _this.loadChart();
      }
    })();
  }
  getRating(feedback, rating) {
    this.rating = [];
    this.labels = [];
    feedback.criterionsRating.forEach(crItem => {
      this.currentInterview.technologies.forEach(techItem => {
        if (techItem.id === crItem.technologyId) {
          techItem.rating = crItem.rating;
          rating ? rating.push(techItem.rating) : this.rating.push(techItem.rating);
          this.labels.push(techItem.name);
        }
      });
      this.currentInterview.personalQualities.forEach(qualItem => {
        if (qualItem.id === crItem.personalQualityId) {
          qualItem.rating = crItem.rating;
          rating ? rating.push(qualItem.rating) : this.rating.push(qualItem.rating);
          this.labels.push(qualItem.name);
        }
      });
    });
  }
  calcAllRating(ratings) {
    const sumArr = [];
    ratings.forEach(x => sumArr.length = x.length);
    sumArr.fill(0);
    ratings.forEach(x => x.forEach((item, index) => sumArr[index] += item));
    const result = [];
    sumArr.forEach(x => result.push((x / ratings.length).toFixed(2)));
    return result;
  }
  onInterviewSelected(interview) {
    var _this2 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(function* () {
      _this2.rating = [];
      _this2.labels = [];
      _this2.interviews.forEach(interviewItem => interviewItem.id === interview.id ? _this2.currentInterview = interviewItem : null);
      _this2.isResetSelect = true;
      _this2.currentEmployee = [];
      const allIds = [];
      const allFbIds = [];
      const res = yield _this2.candidateFeedbacksService.getAll(['interviewer', 'criterionsRating'], {
        candidateId: interview.candidateId
      });
      if (res) {
        const feedbacks = res.items.filter(item => item.interviewId && item.interviewId === interview.id);
        if (feedbacks.length > 0) {
          feedbacks.forEach(feedback => {
            if (feedback.interviewer) {
              allFbIds.push(feedback.interviewer.employeeId);
            }
            _this2.loadColor(feedback);
          });
        }
        if (_this2.currentInterview) {
          for (const interviewer of _this2.currentInterview.interviewers) {
            allIds.push(interviewer.employeeId);
            if (_this2.employees) {
              _this2.employees.forEach(item => {
                if (interviewer.employeeId === item.id) {
                  interviewer.employeeName = item.user.name;
                  interviewer.employeeImageUrl = item.user.imageUrl;
                  _this2.currentEmployee.push(item);
                }
              });
            }
          }
        }
        _this2.disabledIds = allIds.filter(x => !allFbIds.includes(x));
        _this2.loadChart();
      }
    })();
  }
  loadChart() {
    this.themeService.getJsTheme().pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__/* .untilDestroyed */ .s)(this)).subscribe(() => {
      this.data = {
        labels: this.labels,
        datasets: [{
          maxBarThickness: 150,
          label: 'Criterion ratings from interviewer(s)',
          backgroundColor: this.backgroundColor,
          data: this.rating
        }]
      };
      this.options = {
        responsive: true,
        maintainAspectRatio: false,
        elements: {
          rectangle: {
            borderWidth: 2
          }
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      };
    });
  }
  loadColor(feedback) {
    for (let i = 0; i < feedback.criterionsRating.length; i++) {
      const color = i % 2 === 0 ? 'rgba(255, 206, 86, 0.2)' : 'rgba(255, 99, 132, 0.2)';
      this.backgroundColor.push(color);
    }
  }
  ngOnDestroy() {}
  static {
    this.ɵfac = function CriterionsRatingChartComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CriterionsRatingChartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbThemeService */ .NS1), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_4__/* .CandidateFeedbacksService */ .R));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
      type: CriterionsRatingChartComponent,
      selectors: [["ga-criterions-rating-chart"]],
      inputs: {
        candidates: "candidates",
        interviews: "interviews",
        employees: "employees"
      },
      standalone: false,
      decls: 3,
      vars: 3,
      consts: [["class", "selectors", 4, "ngIf"], ["class", "no-data", 4, "ngIf"], [4, "ngIf"], [1, "selectors"], [1, "select", 3, "selectedChange", "placeholder"], [3, "title", 4, "ngFor", "ngForOf"], [1, "select-interviewer"], [3, "selectedChange", "reset", "disabled", "isAllMembers", "disabledIds", "interviewers", "placeholder"], [3, "title"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "no-data"], ["icon", "info-outline", 1, "no-data-icon"], [1, "no-data-text"], ["class", "no-data-text", 4, "ngIf"], ["baseChart", "", 2, "height", "400px", "width", "100%", 3, "type", "data", "options"]],
      template: function CriterionsRatingChartComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(0, CriterionsRatingChartComponent_div_0_Template, 7, 12, "div", 0)(1, CriterionsRatingChartComponent_div_1_Template, 6, 4, "div", 1)(2, CriterionsRatingChartComponent_ng_container_2_Template, 2, 3, "ng-container", 2);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.candidates.length > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.rating.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", (ctx.rating == null ? null : ctx.rating.length) > 0);
        }
      },
      dependencies: [ng2_charts__WEBPACK_IMPORTED_MODULE_5__/* .BaseChartDirective */ .j9, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbIconComponent */ .tHu, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbSelectComponent */ .S81, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbOptionComponent */ .ZJ2, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbOptionGroupComponent */ .UwO, _angular_common__WEBPACK_IMPORTED_MODULE_6__/* .NgForOf */ .Sq, _angular_common__WEBPACK_IMPORTED_MODULE_6__/* .NgIf */ .bT, _packages_ui_core_shared_src_lib_candidate_selectors_candidate_interviewer_select_candidate_interviewer_select_component__WEBPACK_IMPORTED_MODULE_7__/* .CandidateInterviewerSelectComponent */ .N, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__/* .TranslatePipe */ .D9],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.title[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n}\n\n.select[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.selectors[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-start;\n  margin: 0 0 1.25rem 0;\n}\n\n[_nghost-%COMP%]   .select-interviewer[_ngcontent-%COMP%] {\n  width: 20rem;\n}\n[dir=ltr]   [_nghost-%COMP%]   .select-interviewer[_ngcontent-%COMP%] {\n  padding-left: 1rem;\n}\n[dir=rtl]   [_nghost-%COMP%]   .select-interviewer[_ngcontent-%COMP%] {\n  padding-right: 1rem;\n}\n\n.no-data[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  border: 1px #e5e5e5 solid;\n  height: 150px;\n}\n.no-data-text[_ngcontent-%COMP%] {\n  color: #909cb4;\n}\n.no-data-icon[_ngcontent-%COMP%] {\n  font-size: 1.5rem !important;\n  color: #909cb4;\n}"]
    });
  }
};
CriterionsRatingChartComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__/* .UntilDestroy */ .d)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_9__/* .__metadata */ .Sn)("design:paramtypes", [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbThemeService */ .NS1, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_4__/* .CandidateFeedbacksService */ .R])], CriterionsRatingChartComponent);


/***/ }),

/***/ 17134:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   X: () => (/* binding */ GenericFavoriteService)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73014);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17785);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26860);
/* harmony import */ var _favorite_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56630);
/* harmony import */ var _favorite_store_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(99530);
/* harmony import */ var _store_store_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(71924);









let GenericFavoriteService = /*#__PURE__*/(() => {
  class GenericFavoriteService {
    constructor(favoriteService, favoriteStoreService, store) {
      this.favoriteService = favoriteService;
      this.favoriteStoreService = favoriteStoreService;
      this.store = store;
    }
    /**
     * Loads the list of favorites for a given entity type, for the current user or all for admin.
     * @param entityType The BaseEntityEnum type (e.g., Employee, OrganizationProject, etc.)
     * @param organization The current organization
     * @param employeeId (optional) The employee ID (if not admin)
     */
    loadFavorites(entityType, organization, employeeId) {
      var _this = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(function* () {
        const {
          id: organizationId,
          tenantId
        } = organization || {};
        if (!organizationId || !tenantId) {
          return [];
        }
        const isAdmin = _this.store.hasAnyPermission(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__/* .PermissionsEnum */ .U.ALL_ORG_VIEW);
        let items = [];
        if (isAdmin && !employeeId) {
          // Admin: fetch all favorites for the organization
          const result = yield _this.favoriteService.findAll({
            where: {
              organizationId,
              tenantId,
              entity: entityType
            }
          });
          items = result.items;
        } else {
          // Normal user: fetch only the current employee's favorites
          const effectiveEmployeeId = employeeId || _this.store.user?.employee?.id;
          if (!effectiveEmployeeId) {
            return [];
          }
          const result = yield _this.favoriteService.findByEmployee({
            where: {
              organizationId,
              tenantId,
              employeeId: effectiveEmployeeId,
              entity: entityType
            }
          });
          items = result.items;
        }
        return items;
      })();
    }
    /**
     * Adds or removes an entity from favorites, then refreshes the sidebar menu.
     * @param entityType The BaseEntityEnum type
     * @param entityId The ID of the entity
     * @param organization The current organization
     * @param employeeId (optional) The employee ID
     * @param currentFavorites The current list of favorites for this entity type
     */
    toggleFavorite(entityType, entityId, organization, employeeId, currentFavorites) {
      var _this2 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(function* () {
        if (!entityType || !entityId || !organization?.id || !organization?.tenantId) {
          throw new Error('Invalid parameters: entityType, entityId, and organization with id/tenantId are required');
        }
        if (!Array.isArray(currentFavorites)) {
          throw new Error('currentFavorites must be an array');
        }
        try {
          const isFav = _this2.isFavorite(entityId, entityType, currentFavorites);
          if (isFav) {
            // Remove from favorites
            const fav = _this2.getFavoriteForEntity(entityId, entityType, currentFavorites);
            if (fav) {
              yield _this2.favoriteService.delete(fav.id);
            }
          } else {
            // Add to favorites
            const {
              id: organizationId,
              tenantId
            } = organization;
            const effectiveEmployeeId = employeeId || _this2.store.user?.employee?.id;
            const input = {
              entity: entityType,
              entityId,
              organizationId,
              tenantId,
              employeeId: effectiveEmployeeId
            };
            yield _this2.favoriteService.create(input);
          }
          // Refresh the sidebar menu
          // Refresh the sidebar menu
          _this2.favoriteStoreService.refreshFavorites();
        } catch (error) {
          console.error('Error toggling favorite:', error);
          throw new Error('Failed to update favorite status');
        }
      })();
    }
    /**
     * Checks if an entity is a favorite in the provided list.
     * @param entityId The ID of the entity
     * @param entityType The BaseEntityEnum type
     * @param favorites The list of favorites
     */
    isFavorite(entityId, entityType, favorites) {
      return favorites.some(fav => fav.entityId === entityId && fav.entity === entityType);
    }
    /**
     * Finds the favorite object for a given entity in the provided list.
     * @param entityId The ID of the entity
     * @param entityType The BaseEntityEnum type
     * @param favorites The list of favorites
     */
    getFavoriteForEntity(entityId, entityType, favorites) {
      return favorites.find(fav => fav.entityId === entityId && fav.entity === entityType);
    }
    static {
      this.ɵfac = function GenericFavoriteService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || GenericFavoriteService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵinject"] */ .KVO(_favorite_service__WEBPACK_IMPORTED_MODULE_3__/* .FavoriteService */ .U), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵinject"] */ .KVO(_favorite_store_service__WEBPACK_IMPORTED_MODULE_4__/* .FavoriteStoreService */ .z), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵinject"] */ .KVO(_store_store_service__WEBPACK_IMPORTED_MODULE_5__/* .Store */ .il));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineInjectable"] */ .jDH({
        token: GenericFavoriteService,
        factory: GenericFavoriteService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return GenericFavoriteService;
})();

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

/***/ 27548:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ EditCandidateHiringComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73014);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(64411);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10936);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(84536);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23423);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(56383);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(14572);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(19223);











function EditCandidateHiringComponent_form_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "form", 4)(1, "div", 5)(2, "div", 6)(3, "div", 7)(4, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(7, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(9, "nb-datepicker", null, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(11, "div", 6)(12, "div", 7)(13, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(16, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(18, "nb-datepicker", null, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(20, "div", 5)(21, "div", 6)(22, "div", 7)(23, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(25, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(26, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(27, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(28, "nb-datepicker", null, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(30, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(31, "div", 14)(32, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function EditCandidateHiringComponent_form_2_Template_button_click_32_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.submitForm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(34, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
  }
  if (rf & 2) {
    const appliedDatePicker_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(10);
    const hiredDatePicker_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(19);
    const rejectDatePicker_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(29);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("formGroup", ctx_r1.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(6, 12, "FORM.LABELS.APPLIED_DATE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpropertyInterpolate"] */ .FS9("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(8, 14, "POP_UPS.PICK_DATE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("nbDatepicker", appliedDatePicker_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(15, 16, "FORM.LABELS.HIRED_DATE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpropertyInterpolate"] */ .FS9("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(17, 18, "POP_UPS.PICK_DATE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("nbDatepicker", hiredDatePicker_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(25, 20, "FORM.LABELS.REJECT_DATE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpropertyInterpolate"] */ .FS9("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(27, 22, "POP_UPS.PICK_DATE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("nbDatepicker", rejectDatePicker_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("disabled", ctx_r1.form.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(34, 24, "BUTTONS.SAVE"), " ");
  }
}
let EditCandidateHiringComponent = class EditCandidateHiringComponent {
  constructor(fb, candidateStore) {
    this.fb = fb;
    this.candidateStore = candidateStore;
  }
  ngOnInit() {
    this.candidateStore.selectedCandidate$.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_1__/* .untilDestroyed */ .s)(this)).subscribe(candidate => {
      this.selectedCandidate = candidate;
      if (this.selectedCandidate) {
        this._initializeForm(this.selectedCandidate);
      }
    });
  }
  submitForm() {
    var _this = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(function* () {
      if (_this.form.valid) {
        _this.candidateStore.candidateForm = {
          ..._this.form.value
        };
      }
    })();
  }
  _initializeForm(candidate) {
    this.form = this.fb.group({
      appliedDate: [candidate.appliedDate],
      hiredDate: [candidate.hiredDate],
      rejectDate: [candidate.rejectDate]
    });
  }
  ngOnDestroy() {}
  static {
    this.ɵfac = function EditCandidateHiringComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || EditCandidateHiringComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .UntypedFormBuilder */ .ze), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_4__/* .CandidateStore */ .R));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
      type: EditCandidateHiringComponent,
      selectors: [["ga-edit-candidate-hiring"]],
      standalone: false,
      decls: 3,
      vars: 1,
      consts: [["appliedDatePicker", ""], ["hiredDatePicker", ""], ["rejectDatePicker", ""], [3, "formGroup", 4, "ngIf"], [3, "formGroup"], [1, "row"], [1, "col"], [1, "form-group"], ["for", "appliedDateInput", 1, "label"], ["fullWidth", "", "id", "appliedDateInput", "formControlName", "appliedDate", "nbInput", "", "autocomplete", "off", 3, "nbDatepicker", "placeholder"], ["for", "hiredDateInput", 1, "label"], ["fullWidth", "", "id", "hiredDateInput", "formControlName", "hiredDate", "nbInput", "", "autocomplete", "off", 3, "nbDatepicker", "placeholder"], ["for", "rejectDateInput", 1, "label"], ["fullWidth", "", "id", "rejectDateInput", "formControlName", "rejectDate", "nbInput", "", "autocomplete", "off", 3, "nbDatepicker", "placeholder"], [1, "actions"], ["nbButton", "", "status", "success", 3, "click", "disabled"]],
      template: function EditCandidateHiringComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-card")(1, "nb-card-body");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(2, EditCandidateHiringComponent_form_2_Template, 35, 26, "form", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.form);
        }
      },
      dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbButtonComponent */ .YP2, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbCardComponent */ .SrT, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbCardBodyComponent */ .KH5, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbDatepickerDirective */ .OA9, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbDatepickerComponent */ .k2z, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbInputDirective */ .i6h, _angular_common__WEBPACK_IMPORTED_MODULE_6__/* .NgIf */ .bT, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* ["ɵNgNoValidate"] */ .qT, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .DefaultValueAccessor */ .me, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .NgControlStatus */ .BC, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .NgControlStatusGroup */ .cb, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .FormGroupDirective */ .j4, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .FormControlName */ .JD, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__/* .TranslatePipe */ .D9],
      styles: ["[_nghost-%COMP%] {\n  overflow-y: auto;\n  max-height: calc(100vh - 28rem);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n}"]
    });
  }
};
EditCandidateHiringComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_1__/* .UntilDestroy */ .d)(), (0,tslib__WEBPACK_IMPORTED_MODULE_8__/* .__metadata */ .Sn)("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .UntypedFormBuilder */ .ze, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_4__/* .CandidateStore */ .R])], EditCandidateHiringComponent);


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

/***/ 33894:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O: () => (/* binding */ InterviewActionsTableComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38546);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19223);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56383);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14572);







const _c0 = (a0, a1) => ({
  enabled: a0,
  disabled: a1
});
function InterviewActionsTableComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(2, 1, "CANDIDATES_PAGE.MANAGE_INTERVIEWS.PAST"), " ");
  }
}
function InterviewActionsTableComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(2, 1, "CANDIDATES_PAGE.ARCHIVED"), " ");
  }
}
function InterviewActionsTableComponent_div_9_nb_icon_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function InterviewActionsTableComponent_div_9_nb_icon_1_Template_nb_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r2.addFeedback());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpropertyInterpolate3"] */ .yjJ("nbTooltip", "", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(1, 4, "CANDIDATES_PAGE.MANAGE_INTERVIEWS.ADD_FEEDBACK"), "\n\t\t\t\t\t(", ctx_r2.rowData.feedbacks.length, "/", ctx_r2.rowData.interviewers.length, ")");
  }
}
function InterviewActionsTableComponent_div_9_nb_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function InterviewActionsTableComponent_div_9_nb_icon_2_Template_nb_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r2.addFeedback());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpropertyInterpolate1"] */ .Mz_("nbTooltip", "", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(1, 2, "CANDIDATES_PAGE.MANAGE_INTERVIEWS.ADD_FEEDBACK"), " ");
  }
}
function InterviewActionsTableComponent_div_9_nb_icon_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function InterviewActionsTableComponent_div_9_nb_icon_5_Template_nb_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r2.archive());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpropertyInterpolate"] */ .FS9("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(1, 2, "CANDIDATES_PAGE.MANAGE_INTERVIEWS.ARCHIVE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction2"] */ .l_i(4, _c0, !ctx_r2.rowData.isArchived, ctx_r2.rowData.isArchived));
  }
}
function InterviewActionsTableComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, InterviewActionsTableComponent_div_9_nb_icon_1_Template, 2, 6, "nb-icon", 9)(2, InterviewActionsTableComponent_div_9_nb_icon_2_Template, 2, 4, "nb-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(3, "nb-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function InterviewActionsTableComponent_div_9_Template_nb_icon_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r2.editInterview());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(5, InterviewActionsTableComponent_div_9_nb_icon_5_Template, 2, 7, "nb-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(6, "nb-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function InterviewActionsTableComponent_div_9_Template_nb_icon_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r2.removeInterview());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r2.isPastInterview(ctx_r2.rowData));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", !ctx_r2.isPastInterview(ctx_r2.rowData));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpropertyInterpolate"] */ .FS9("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(4, 7, "CANDIDATES_PAGE.MANAGE_INTERVIEWS.EDIT"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction2"] */ .l_i(11, _c0, !ctx_r2.isPastInterview(ctx_r2.rowData), ctx_r2.isPastInterview(ctx_r2.rowData)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r2.rowData.showArchive);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpropertyInterpolate"] */ .FS9("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(7, 9, "CANDIDATES_PAGE.MANAGE_INTERVIEWS.DELETE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction2"] */ .l_i(14, _c0, !ctx_r2.isPastInterview(ctx_r2.rowData), ctx_r2.isPastInterview(ctx_r2.rowData)));
  }
}
let InterviewActionsTableComponent = /*#__PURE__*/(() => {
  class InterviewActionsTableComponent extends _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_1__/* .TranslationBaseComponent */ .K {
    constructor(translateService) {
      super(translateService);
      this.translateService = translateService;
      this.updateResult = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .bkB();
    }
    ngOnInit() {}
    ngOnDestroy() {}
    isPastInterview(interview) {
      const now = new Date().getTime();
      if (new Date(interview.startTime).getTime() > now) {
        return false;
      } else {
        return true;
      }
    }
    removeInterview() {
      const params = {
        type: 'remove',
        data: this.rowData
      };
      this.updateResult.emit(params);
    }
    archive() {
      const params = {
        type: 'archive',
        data: this.rowData
      };
      this.updateResult.emit(params);
    }
    addFeedback() {
      const params = {
        type: 'feedback',
        data: this.rowData
      };
      this.updateResult.emit(params);
    }
    editInterview() {
      const params = {
        type: 'edit',
        data: this.rowData
      };
      this.updateResult.emit(params);
    }
    static {
      this.ɵfac = function InterviewActionsTableComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || InterviewActionsTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__/* .TranslateService */ .c$));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: InterviewActionsTableComponent,
        selectors: [["ga-interview-actions"]],
        inputs: {
          rowData: "rowData"
        },
        outputs: {
          updateResult: "updateResult"
        },
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
        decls: 10,
        vars: 7,
        consts: [[1, "update"], [1, "badges"], ["class", "badge badge-primary", 4, "ngIf"], ["class", "badge badge-warning", 4, "ngIf"], [1, "title"], ["class", "btn", 4, "ngIf"], [1, "badge", "badge-primary"], [1, "badge", "badge-warning"], [1, "btn"], ["nbTooltipPlacement", "top", "icon", "message-square-outline", "class", "icons enabled", 3, "nbTooltip", "click", 4, "ngIf"], ["nbTooltipPlacement", "top", "icon", "message-square-outline", "class", "icons disabled", 3, "nbTooltip", "click", 4, "ngIf"], ["icon", "edit-outline", "nbTooltipPlacement", "top", 1, "icons", "ml-2", 3, "click", "nbTooltip", "ngClass"], ["nbTooltipPlacement", "top", "icon", "archive-outline", "class", "icons ml-2", 3, "nbTooltip", "ngClass", "click", 4, "ngIf"], ["icon", "close", "nbTooltipPlacement", "top", 1, "icons", "ml-2", 3, "click", "nbTooltip", "ngClass"], ["nbTooltipPlacement", "top", "icon", "message-square-outline", 1, "icons", "enabled", 3, "click", "nbTooltip"], ["nbTooltipPlacement", "top", "icon", "message-square-outline", 1, "icons", "disabled", 3, "click", "nbTooltip"], ["nbTooltipPlacement", "top", "icon", "archive-outline", 1, "icons", "ml-2", 3, "click", "nbTooltip", "ngClass"]],
        template: function InterviewActionsTableComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 0)(1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(2, InterviewActionsTableComponent_div_2_Template, 3, 3, "div", 2)(3, InterviewActionsTableComponent_div_3_Template, 3, 3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(4, "span", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(5, " updated: ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(6, "span", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(8, "date");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(9, InterviewActionsTableComponent_div_9_Template, 8, 17, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.isPastInterview(ctx.rowData));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.rowData.isArchived && ctx.rowData.showArchive);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind2"] */ .i5U(8, 4, ctx.rowData == null ? null : ctx.rowData.updatedAt, "short"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", !ctx.rowData.hideActions);
          }
        },
        dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbIconComponent */ .tHu, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbTooltipDirective */ .BmQ, _angular_common__WEBPACK_IMPORTED_MODULE_4__/* .NgClass */ .YU, _angular_common__WEBPACK_IMPORTED_MODULE_4__/* .NgIf */ .bT, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__/* .TranslatePipe */ .D9, _angular_common__WEBPACK_IMPORTED_MODULE_4__/* .DatePipe */ .vh],
        styles: [".badge-warning[_ngcontent-%COMP%] {\n\t\t\t\tbackground-color: #fa0;\n\t\t\t}\n\t\t\t.badges[_ngcontent-%COMP%] {\n\t\t\t\tdisplay: flex;\n\t\t\t\tjustify-content: space-between;\n\t\t\t\talign-items: center;\n\t\t\t}\n\t\t\t.badge-primary[_ngcontent-%COMP%] {\n\t\t\t\tbackground-color: #0095ff;\n\t\t\t}\n\t\t\t.badge[_ngcontent-%COMP%] {\n\t\t\t\ttext-align: center;\n\t\t\t\tpadding: 4px 8px;\n\t\t\t\tfont-size: 12px;\n\t\t\t\tfont-weight: 600;\n\t\t\t\tline-height: 15px;\n\t\t\t\tletter-spacing: 0em;\n\t\t\t\ttext-align: left;\n\t\t\t}\n\t\t\t.update[_ngcontent-%COMP%] {\n\t\t\t\tdisplay: flex;\n\t\t\t\tflex-direction: column;\n\t\t\t\tjustify-content: center;\n\t\t\t\talign-items: flex-start;\n\t\t\t}\n\t\t\t.title[_ngcontent-%COMP%] {\n\t\t\t\tcolor: #8f9bb3;\n\t\t\t\tfont-size: 12px;\n\t\t\t}\n\t\t\t.icons[_ngcontent-%COMP%] {\n\t\t\t\tfont-size: 1.3rem;\n\t\t\t\tcursor: pointer !important;\n\t\t\t}\n\t\t\t.enabled[_ngcontent-%COMP%] {\n\t\t\t\tcolor: #222b45 !important;\n\t\t\t}\n\t\t\t.icons[_ngcontent-%COMP%]:active {\n\t\t\t\ttransform: translateY(2px);\n\t\t\t}\n\t\t\t.disabled[_ngcontent-%COMP%] {\n\t\t\t\tcolor: rgba(143, 155, 179, 0.48) !important;\n\t\t\t}\n\t\t\t.btn[_ngcontent-%COMP%] {\n\t\t\t\tdisplay: flex;\n\t\t\t\tflex-direction: row;\n\t\t\t\tjustify-content: space-between;\n\t\t\t\talign-items: center;\n\t\t\t}"]
      });
    }
  }
  return InterviewActionsTableComponent;
})();

/***/ }),

/***/ 35334:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   y: () => (/* binding */ CandidateRatingChartComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(64411);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56383);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23423);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(78477);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14572);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19223);








function CandidateRatingChartComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "canvas", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("type", "bar")("data", ctx_r0.data)("options", ctx_r0.options);
  }
}
function CandidateRatingChartComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "nb-icon", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(4, 1, "CANDIDATES_PAGE.STATISTIC.NO_DATA"));
  }
}
let CandidateRatingChartComponent = class CandidateRatingChartComponent {
  constructor(themeService) {
    this.themeService = themeService;
    this.labels = [];
    this.rating = [];
    this.backgroundColor = [];
    this.candidates = [];
  }
  ngOnInit() {
    this.initializeChart();
    this.themeService.getJsTheme().pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_1__/* .untilDestroyed */ .s)(this)).subscribe(() => {
      // Set chart data with labels, ratings, and background colors
      this.data = {
        labels: this.labels,
        datasets: [{
          maxBarThickness: 150,
          label: 'Overall rating',
          data: this.rating,
          backgroundColor: this.backgroundColor
        }]
      };
      this.options = {
        responsive: true,
        maintainAspectRatio: false,
        elements: {
          rectangle: {
            borderWidth: 2
          }
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      };
    });
  }
  /**
   * Initializes the chart data based on candidates' ratings and names.
   */
  initializeChart() {
    const colors = ['rgba(89, 139, 255, 0.2)', 'rgba(0, 214, 143, 0.2)'];
    this.candidates.forEach((candidate, index) => {
      // Determine background color based on index
      const backgroundColor = colors[index % 2];
      this.backgroundColor.push(backgroundColor);
      // Push candidate's name to labels array
      const candidateName = candidate.user?.name || 'Unknown';
      this.labels.push(candidateName);
      // Push candidate's ratings, formatted to 2 decimal places, to ratings array if available
      if (candidate.ratings) {
        const formattedRating = parseFloat(candidate.ratings.toFixed(2));
        this.rating.push(formattedRating);
      }
    });
  }
  ngOnDestroy() {}
  static {
    this.ɵfac = function CandidateRatingChartComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CandidateRatingChartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbThemeService */ .NS1));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
      type: CandidateRatingChartComponent,
      selectors: [["ga-overall-rating-chart"]],
      inputs: {
        candidates: "candidates"
      },
      standalone: false,
      decls: 3,
      vars: 2,
      consts: [["noDataTemplate", ""], [4, "ngIf", "ngIfElse"], ["baseChart", "", 2, "height", "400px", "width", "100%", 3, "type", "data", "options"], [1, "no-data"], ["icon", "info-outline", 1, "info-icon"]],
      template: function CandidateRatingChartComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(0, CandidateRatingChartComponent_ng_container_0_Template, 2, 3, "ng-container", 1)(1, CandidateRatingChartComponent_ng_template_1_Template, 5, 3, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplateRefExtractor"] */ .C5r);
        }
        if (rf & 2) {
          const noDataTemplate_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", (ctx.rating == null ? null : ctx.rating.length) > 0 && (ctx.candidates == null ? null : ctx.candidates.length) > 0)("ngIfElse", noDataTemplate_r2);
        }
      },
      dependencies: [ng2_charts__WEBPACK_IMPORTED_MODULE_3__/* .BaseChartDirective */ .j9, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbIconComponent */ .tHu, _angular_common__WEBPACK_IMPORTED_MODULE_4__/* .NgIf */ .bT, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__/* .TranslatePipe */ .D9],
      encapsulation: 2
    });
  }
};
CandidateRatingChartComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_1__/* .UntilDestroy */ .d)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_6__/* .__metadata */ .Sn)("design:paramtypes", [_nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbThemeService */ .NS1])], CandidateRatingChartComponent);


/***/ }),

/***/ 35414:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G: () => (/* binding */ ManageCandidateInterviewsComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(73014);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(64411);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(19223);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73246);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(72781);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24237);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(36950);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(56383);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(23423);
/* harmony import */ var _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38546);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(9620);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(71924);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(15480);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(90022);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(94251);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(14572);
/* harmony import */ var _packages_ui_core_shared_src_lib_components_back_navigation_back_navigation_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(90910);
/* harmony import */ var _packages_ui_core_shared_src_lib_components_header_title_header_title_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(49072);




















function ManageCandidateInterviewsComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 5)(1, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function ManageCandidateInterviewsComponent_div_9_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.addInterview());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(2, "nb-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(4, 1, "CANDIDATES_PAGE.EDIT_CANDIDATE.INTERVIEW.ADD_INTERVIEW"), " ");
  }
}
let ManageCandidateInterviewsComponent = class ManageCandidateInterviewsComponent extends _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_1__/* .TranslationBaseComponent */ .K {
  constructor(translateService, dialogService, toastrService, candidateInterviewService, store, route) {
    super(translateService);
    this.translateService = translateService;
    this.dialogService = dialogService;
    this.toastrService = toastrService;
    this.candidateInterviewService = candidateInterviewService;
    this.store = store;
    this.route = route;
    this.interviews$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__/* .Subject */ .B();
    this.interviews = [];
    this.TAB_ID = 'ga-ak-97';
  }
  ngOnInit() {
    this._loadTabs();
    this._applyTranslationOnTabs();
    this._currentTabName();
  }
  ngAfterViewInit() {
    this.interviews$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .tap */ .M)(() => this._getInterviews()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .untilDestroyed */ .s)(this)).subscribe();
    this.store.selectedOrganization$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .filter */ .p)(organization => !!organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .tap */ .M)(organization => this.organization = organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .tap */ .M)(() => this.interviews$.next(true)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .untilDestroyed */ .s)(this)).subscribe();
  }
  getRoute(tab) {
    return `/pages/employees/candidates/interviews/${tab}`;
  }
  _loadTabs() {
    this.tabs = [{
      title: this.getTranslation('CANDIDATES_PAGE.MANAGE_INTERVIEWS.CALENDAR'),
      responsive: true,
      route: this.getRoute('calendar')
    }, {
      title: this.getTranslation('CANDIDATES_PAGE.MANAGE_INTERVIEWS.INTERVIEWS'),
      responsive: true,
      tabId: this.TAB_ID,
      route: this.getRoute('interview_panel')
    }, {
      title: this.getTranslation('CANDIDATES_PAGE.MANAGE_INTERVIEWS.CRITERIONS'),
      responsive: true,
      route: this.getRoute('criterion')
    }];
  }
  _currentTabName() {
    const arr = this.route.children[0].snapshot.url;
    const last = arr.at(-1);
    this.currentTab = last.path === 'interview_panel' ? this.TAB_ID : null;
  }
  addInterview() {
    var _this = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(function* () {
      const dialog = _this.dialogService.open(_gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_7__/* .CandidateInterviewMutationComponent */ .X, {
        context: {
          headerTitle: _this.getTranslation('CANDIDATES_PAGE.EDIT_CANDIDATE.INTERVIEW.SCHEDULE_INTERVIEW'),
          isCalendar: true,
          interviews: _this.interviews
        }
      });
      const data = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_8__/* .firstValueFrom */ ._)(dialog.onClose);
      if (data) {
        _this.toastrService.success(`TOASTR.MESSAGE.CANDIDATE_EDIT_CREATED`, {
          name: data.title
        });
      }
      _this.interviews$.next(true);
    })();
  }
  _getInterviews() {
    var _this2 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(function* () {
      const {
        tenantId
      } = _this2.store.user;
      const {
        id: organizationId
      } = _this2.organization;
      _this2.interviews = (yield (0,rxjs__WEBPACK_IMPORTED_MODULE_8__/* .firstValueFrom */ ._)(_this2.candidateInterviewService.getAll(['feedbacks', 'interviewers', 'technologies', 'personalQualities', 'candidate'], {
        organizationId,
        tenantId
      }))).items;
    })();
  }
  _applyTranslationOnTabs() {
    this.translateService.onLangChange.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .tap */ .M)(() => this._loadTabs()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .untilDestroyed */ .s)(this)).subscribe();
  }
  onChangeTab(event) {
    if (event) this.currentTab = event.tabId;
  }
  ngOnDestroy() {}
  static {
    this.ɵfac = function ManageCandidateInterviewsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ManageCandidateInterviewsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__/* .TranslateService */ .c$), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_nebular_theme__WEBPACK_IMPORTED_MODULE_10__/* .NbDialogService */ .S0W), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_11__/* .ToastrService */ .t), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_12__/* .CandidateInterviewService */ .C), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_13__/* .Store */ .il), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_router__WEBPACK_IMPORTED_MODULE_14__/* .ActivatedRoute */ .nX));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
      type: ManageCandidateInterviewsComponent,
      selectors: [["ga-manage-candidate-interviews"]],
      standalone: false,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
      decls: 11,
      vars: 6,
      consts: [[1, "card-header-title"], [3, "allowEmployee"], [1, "p-0"], ["class", "add-btn mt-2 mb-2", 4, "ngIf"], [3, "changeTab", "tabs"], [1, "add-btn", "mt-2", "mb-2"], ["nbButton", "", "size", "small", "status", "primary", 3, "click"], ["icon", "plus-outline"]],
      template: function ManageCandidateInterviewsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-card")(1, "nb-card-header", 0)(2, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(3, "ngx-back-navigation");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(4, "h4")(5, "ngx-header-title", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(7, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(8, "nb-card-body", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(9, ManageCandidateInterviewsComponent_div_9_Template, 5, 3, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(10, "nb-route-tabset", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("changeTab", function ManageCandidateInterviewsComponent_Template_nb_route_tabset_changeTab_10_listener($event) {
            return ctx.onChangeTab($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("allowEmployee", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(7, 4, "CANDIDATES_PAGE.MANAGE_INTERVIEWS.MANAGE_INTERVIEWS"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.currentTab !== ctx.TAB_ID);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("tabs", ctx.tabs);
        }
      },
      dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_10__/* .NbButtonComponent */ .YP2, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__/* .NbCardComponent */ .SrT, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__/* .NbCardBodyComponent */ .KH5, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__/* .NbCardHeaderComponent */ .zJv, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__/* .NbIconComponent */ .tHu, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__/* .NbRouteTabsetComponent */ .ssE, _angular_common__WEBPACK_IMPORTED_MODULE_15__/* .NgIf */ .bT, _packages_ui_core_shared_src_lib_components_back_navigation_back_navigation_component__WEBPACK_IMPORTED_MODULE_16__/* .BackNavigationComponent */ .r, _packages_ui_core_shared_src_lib_components_header_title_header_title_component__WEBPACK_IMPORTED_MODULE_17__/* .HeaderTitleComponent */ .X, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__/* .TranslatePipe */ .D9],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n  .nb-theme-default .tab-link:focus {\n  outline: none !important;\n}\n\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  overflow: unset;\n  height: 100%;\n}\n[_nghost-%COMP%]     .route-tabset .route-tab a.tab-link {\n  border-radius: var(--border-radius) var(--border-radius) 0 0;\n}\n[_nghost-%COMP%]     .route-tabset .route-tab a.tab-link span.tab-text {\n  text-transform: lowercase;\n  display: block;\n}\n[_nghost-%COMP%]     .route-tabset .route-tab a.tab-link span.tab-text:first-letter {\n  text-transform: uppercase;\n}\n\n[_nghost-%COMP%]   .add-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -8px;\n  background-color: var(--gauzy-card-2);\n  padding: 8px;\n  border-radius: var(--button-rectangle-border-radius);\n}\n[dir=ltr]   [_nghost-%COMP%]   .add-btn[_ngcontent-%COMP%] {\n  right: 1rem;\n}\n[dir=rtl]   [_nghost-%COMP%]   .add-btn[_ngcontent-%COMP%] {\n  left: 1rem;\n}"]
    });
  }
};
ManageCandidateInterviewsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_18__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .UntilDestroy */ .d)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_18__/* .__metadata */ .Sn)("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__/* .TranslateService */ .c$, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__/* .NbDialogService */ .S0W, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_11__/* .ToastrService */ .t, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_12__/* .CandidateInterviewService */ .C, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_13__/* .Store */ .il, _angular_router__WEBPACK_IMPORTED_MODULE_14__/* .ActivatedRoute */ .nX])], ManageCandidateInterviewsComponent);


/***/ }),

/***/ 37494:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   n: () => (/* binding */ InterviewersTableComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _packages_ui_core_shared_src_lib_table_components_employee_with_links_employee_with_links_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39457);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14572);



function InterviewersTableComponent_ngx_employee_with_links_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(0, "ngx-employee-with-links", 1);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("value", ctx_r0.rowData == null ? null : ctx_r0.rowData.employees);
  }
}
let InterviewersTableComponent = /*#__PURE__*/(() => {
  class InterviewersTableComponent {
    static {
      this.ɵfac = function InterviewersTableComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || InterviewersTableComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: InterviewersTableComponent,
        selectors: [["ga-interview-interviewers"]],
        inputs: {
          rowData: "rowData"
        },
        standalone: false,
        decls: 1,
        vars: 1,
        consts: [[3, "value", 4, "ngIf"], [3, "value"]],
        template: function InterviewersTableComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(0, InterviewersTableComponent_ngx_employee_with_links_0_Template, 1, 1, "ngx-employee-with-links", 0);
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", (ctx.rowData.employees == null ? null : ctx.rowData.employees.length) > 0);
          }
        },
        dependencies: [_packages_ui_core_shared_src_lib_table_components_employee_with_links_employee_with_links_component__WEBPACK_IMPORTED_MODULE_1__/* .EmployeeWithLinksComponent */ .j, _angular_common__WEBPACK_IMPORTED_MODULE_2__/* .NgIf */ .bT],
        encapsulation: 2
      });
    }
  }
  return InterviewersTableComponent;
})();

/***/ }),

/***/ 39457:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   j: () => (/* binding */ EmployeeWithLinksComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71924);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9620);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14572);
/* harmony import */ var _directives_img_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(71466);







function EmployeeWithLinksComponent_ng_container_1_div_1_ng_container_2_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function EmployeeWithLinksComponent_ng_container_1_div_1_ng_container_2_a_1_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
      const employee_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r2.selectEmployee(employee_r2, employee_r2.user.firstName, employee_r2.user.lastName, employee_r2.user.imageUrl));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const employee_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("src", employee_r2.user.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵsanitizeUrl"] */ .B4B);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate2"] */ .Lme("", employee_r2.user.firstName, " ", employee_r2.user.lastName, "");
  }
}
function EmployeeWithLinksComponent_ng_container_1_div_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, EmployeeWithLinksComponent_ng_container_1_div_1_ng_container_2_a_1_Template, 4, 3, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const employee_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", employee_r2 == null ? null : employee_r2.user);
  }
}
function EmployeeWithLinksComponent_ng_container_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 3)(1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(2, EmployeeWithLinksComponent_ng_container_1_div_1_ng_container_2_Template, 2, 1, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const groups_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngForOf", groups_r4);
  }
}
function EmployeeWithLinksComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, EmployeeWithLinksComponent_ng_container_1_div_1_Template, 3, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r2.value);
  }
}
let EmployeeWithLinksComponent = /*#__PURE__*/(() => {
  class EmployeeWithLinksComponent {
    constructor(store, router) {
      this.store = store;
      this.router = router;
      this.employees = [];
    }
    ngOnInit() {
      this.initializeGrouping();
    }
    /**
     * Initializes the grouping of employees into groups of size 3.
     *
     * This function takes no parameters and modifies the `employees` property of the class.
     * It iterates over the `value` property of the class and groups employees into arrays of size 3.
     * The resulting groups are stored in the `employees` property.
     *
     * @return {void} This function does not return anything.
     */
    initializeGrouping() {
      if (!this.value) {
        return;
      }
      const GROUP = 3;
      const SIZE = this.value.length;
      let count = 0;
      let group = [];
      for (let employee of this.value) {
        if ((2 * count - 1) % GROUP === 0) {
          group.push(employee);
          this.employees.push(group);
          group = [];
        } else {
          group.push(employee);
          if (SIZE - count < GROUP - 1 && SIZE - count > 0) {
            this.employees.push(group);
          }
        }
        count++;
      }
    }
    /**
     * Selects an employee and updates the store with the selected employee's information.
     *
     * @param {ISelectedEmployee} employee - The employee to be selected.
     * @param {string} firstName - The first name of the selected employee.
     * @param {string} lastName - The last name of the selected employee.
     * @param {string} imageUrl - The URL of the selected employee's image.
     * @return {void} This function does not return anything.
     */
    selectEmployee(employee, firstName, lastName, imageUrl) {
      this.store.selectedEmployee = employee;
      this.store.selectedEmployee.firstName = firstName;
      this.store.selectedEmployee.lastName = lastName;
      this.store.selectedEmployee.imageUrl = imageUrl;
      //
      this.navigateToEmployeeStatistics(employee.id);
    }
    /**
     * Navigates to the employee statistics page.
     *
     * @param {IEmployee['id']} id - The ID of the employee.
     * @return {void} This function does not return a value.
     */
    navigateToEmployeeStatistics(id) {
      if (id) this.router.navigate([`/pages/employees/edit/${id}/account`]);
    }
    static {
      this.ɵfac = function EmployeeWithLinksComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || EmployeeWithLinksComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_1__/* .Store */ .il), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_router__WEBPACK_IMPORTED_MODULE_2__/* .Router */ .Ix));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: EmployeeWithLinksComponent,
        selectors: [["ngx-employee-with-links"]],
        inputs: {
          rowData: "rowData",
          value: "value"
        },
        standalone: false,
        decls: 2,
        vars: 1,
        consts: [[1, "main"], [4, "ngFor", "ngForOf"], ["class", "avatar-container", 4, "ngIf"], [1, "avatar-container"], [1, "avatar-group"], ["class", "avatar", 3, "click", 4, "ngIf"], [1, "avatar", 3, "click"], ["type", "user", 1, "img", 3, "src"]],
        template: function EmployeeWithLinksComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, EmployeeWithLinksComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx.employees);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__/* .NgForOf */ .Sq, _angular_common__WEBPACK_IMPORTED_MODULE_3__/* .NgIf */ .bT, _directives_img_directive__WEBPACK_IMPORTED_MODULE_4__/* .ImgDirective */ .z],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   .avatar-container[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  flex-direction: column;\n  height: 2.5rem;\n}\n[_nghost-%COMP%]   .avatar-container[_ngcontent-%COMP%]   .avatar-group[_ngcontent-%COMP%] {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n[_nghost-%COMP%]   .avatar-container[_ngcontent-%COMP%]   .avatar-group[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-primary-background);\n  object-fit: cover;\n  color: var(--text-primary-color);\n  border-radius: var(--button-rectangle-border-radius);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  width: 5rem;\n  display: inline-block;\n  cursor: pointer;\n}\n[dir=ltr]   [_nghost-%COMP%]   .avatar-container[_ngcontent-%COMP%]   .avatar-group[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  padding: 5px 14px 5px 7px;\n}\n[dir=rtl]   [_nghost-%COMP%]   .avatar-container[_ngcontent-%COMP%]   .avatar-group[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  padding: 5px 7px 5px 14px;\n}\n[_nghost-%COMP%]   .avatar-container[_ngcontent-%COMP%]   .avatar-group[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  border-radius: var(--border-radius);\n}\n[dir=ltr]   [_nghost-%COMP%]   .avatar-container[_ngcontent-%COMP%]   .avatar-group[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n[dir=rtl]   [_nghost-%COMP%]   .avatar-container[_ngcontent-%COMP%]   .avatar-group[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n[_nghost-%COMP%]   .avatar-container[_ngcontent-%COMP%]   .avatar-group[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]:hover {\n  text-overflow: clip;\n  width: fit-content;\n}\n\n.avatar-group[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  border: 2px solid #ffffff;\n}\n\n.avatar-group[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]:hover {\n  z-index: 3;\n}\n\n[dir=ltr]   [_nghost-%COMP%]   .avatar-group[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]    + .avatar[_ngcontent-%COMP%] {\n  margin-left: -4rem;\n}\n[dir=rtl]   [_nghost-%COMP%]   .avatar-group[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]    + .avatar[_ngcontent-%COMP%] {\n  margin-right: -4rem;\n}\n\n.main[_ngcontent-%COMP%] {\n  width: 7rem;\n}"]
      });
    }
  }
  return EmployeeWithLinksComponent;
})();

/***/ }),

/***/ 41140:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ InterviewCriterionsTableComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14572);


function InterviewCriterionsTableComponent_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "li")(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const tech_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", tech_r1.name, " ");
  }
}
function InterviewCriterionsTableComponent_li_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "li")(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const qual_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", qual_r2.name, " ");
  }
}
let InterviewCriterionsTableComponent = /*#__PURE__*/(() => {
  class InterviewCriterionsTableComponent {
    static {
      this.ɵfac = function InterviewCriterionsTableComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || InterviewCriterionsTableComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: InterviewCriterionsTableComponent,
        selectors: [["ga-interview-criterions"]],
        inputs: {
          rowData: "rowData"
        },
        standalone: false,
        decls: 3,
        vars: 2,
        consts: [[2, "padding-left", "10px", "margin", "0"], [4, "ngFor", "ngForOf"]],
        template: function InterviewCriterionsTableComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "ul", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, InterviewCriterionsTableComponent_li_1_Template, 3, 1, "li", 1)(2, InterviewCriterionsTableComponent_li_2_Template, 3, 1, "li", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx.rowData.technologies);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx.rowData.personalQualities);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .NgForOf */ .Sq],
        styles: ["ul[_ngcontent-%COMP%] {\n\t\t\t\tlist-style-type: '- ';\n\t\t\t}"]
      });
    }
  }
  return InterviewCriterionsTableComponent;
})();

/***/ }),

/***/ 42165:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   h: () => (/* binding */ CandidatesRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(908);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(17785);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(4106);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(86616);
/* harmony import */ var _edit_candidate_edit_candidate_profile_edit_candidate_interview_edit_candidate_interview_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(79646);
/* harmony import */ var _candidates_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47209);
/* harmony import */ var _manage_candidate_invite_manage_candidate_invite_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(86170);
/* harmony import */ var _edit_candidate_edit_candidate_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(47131);
/* harmony import */ var _edit_candidate_edit_candidate_profile_edit_candidate_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(62241);
/* harmony import */ var _edit_candidate_edit_candidate_profile_edit_candidate_main_edit_candidate_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(64383);
/* harmony import */ var _edit_candidate_edit_candidate_profile_edit_candidate_documents_edit_candidate_documents_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(79748);
/* harmony import */ var _edit_candidate_edit_candidate_profile_edit_candidate_history_edit_candidate_history_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(1272);
/* harmony import */ var _edit_candidate_edit_candidate_profile_edit_candidate_location_edit_candidate_location_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(54800);
/* harmony import */ var _edit_candidate_edit_candidate_profile_edit_candidate_hiring_edit_candidate_hiring_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(27548);
/* harmony import */ var _edit_candidate_edit_candidate_profile_edit_candidate_employment_edit_candidate_employment_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(44752);
/* harmony import */ var _edit_candidate_edit_candidate_profile_edit_candidate_tasks_edit_candidate_tasks_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(74224);
/* harmony import */ var _edit_candidate_edit_candidate_profile_edit_candidate_experience_edit_candidate_experience_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(73408);
/* harmony import */ var _edit_candidate_edit_candidate_profile_edit_candidate_rates_edit_candidate_rates_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(97838);
/* harmony import */ var _edit_candidate_edit_candidate_profile_edit_candidate_feedbacks_edit_candidate_feedbacks_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(76448);
/* harmony import */ var _manage_candidate_interviews_manage_candidate_interviews_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(35414);
/* harmony import */ var _candidate_statistic_candidate_statistic_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(53178);
/* harmony import */ var _manage_candidate_interviews_interview_calendar_interview_calendar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(56537);
/* harmony import */ var _manage_candidate_interviews_interview_panel_interview_panel_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(50023);
/* harmony import */ var _manage_candidate_interviews_interview_criterions_interview_criterions_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(59193);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(26860);

























const routes = [{
  path: '',
  component: _candidates_component__WEBPACK_IMPORTED_MODULE_1__/* .CandidatesComponent */ .w,
  canActivate: [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_13__/* .PermissionsGuard */ .a],
  data: {
    permissions: {
      only: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_14__/* .PermissionsEnum */ .U.ORG_CANDIDATES_VIEW],
      redirectTo: '/pages/dashboard'
    },
    selectors: {
      project: false
    }
  }
}, {
  path: 'edit/:id',
  component: _edit_candidate_edit_candidate_component__WEBPACK_IMPORTED_MODULE_15__/* .EditCandidateComponent */ .Z,
  canActivate: [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_13__/* .PermissionsGuard */ .a],
  data: {
    permissions: {
      only: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_14__/* .PermissionsEnum */ .U.ORG_CANDIDATES_EDIT],
      redirectTo: '/pages/dashboard'
    }
  }
}, {
  path: 'edit/:id/profile',
  component: _edit_candidate_edit_candidate_profile_edit_candidate_profile_component__WEBPACK_IMPORTED_MODULE_2__/* .EditCandidateProfileComponent */ .w,
  canActivate: [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_13__/* .PermissionsGuard */ .a],
  data: {
    permissions: {
      only: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_14__/* .PermissionsEnum */ .U.ORG_CANDIDATES_EDIT],
      redirectTo: '/pages/dashboard'
    }
  },
  children: [{
    path: '',
    redirectTo: 'account',
    pathMatch: 'full'
  }, {
    path: 'account',
    component: _edit_candidate_edit_candidate_profile_edit_candidate_main_edit_candidate_main_component__WEBPACK_IMPORTED_MODULE_3__/* .EditCandidateMainComponent */ .W,
    data: {
      selectors: {
        project: false,
        employee: false,
        organization: false,
        date: false
      }
    }
  }, {
    path: 'rates',
    component: _edit_candidate_edit_candidate_profile_edit_candidate_rates_edit_candidate_rates_component__WEBPACK_IMPORTED_MODULE_16__/* .EditCandidateRatesComponent */ .g,
    data: {
      selectors: {
        project: false,
        employee: false,
        organization: false,
        date: false
      }
    }
  }, {
    path: 'tasks',
    component: _edit_candidate_edit_candidate_profile_edit_candidate_tasks_edit_candidate_tasks_component__WEBPACK_IMPORTED_MODULE_17__/* .EditCandidateTasksComponent */ .Z,
    data: {
      selectors: {
        project: false,
        employee: false,
        organization: false,
        date: false
      }
    }
  }, {
    path: 'experience',
    component: _edit_candidate_edit_candidate_profile_edit_candidate_experience_edit_candidate_experience_component__WEBPACK_IMPORTED_MODULE_7__/* .EditCandidateExperienceComponent */ .z,
    data: {
      selectors: {
        project: false,
        employee: false,
        organization: false,
        date: false
      }
    }
  }, {
    path: 'documents',
    component: _edit_candidate_edit_candidate_profile_edit_candidate_documents_edit_candidate_documents_component__WEBPACK_IMPORTED_MODULE_4__/* .EditCandidateDocumentsComponent */ .z,
    data: {
      selectors: {
        project: false,
        employee: false,
        organization: false,
        date: false
      }
    }
  }, {
    path: 'feedbacks',
    component: _edit_candidate_edit_candidate_profile_edit_candidate_feedbacks_edit_candidate_feedbacks_component__WEBPACK_IMPORTED_MODULE_8__/* .EditCandidateFeedbacksComponent */ .H,
    data: {
      selectors: {
        project: false,
        employee: false,
        organization: false,
        date: false
      }
    }
  }, {
    path: 'history',
    component: _edit_candidate_edit_candidate_profile_edit_candidate_history_edit_candidate_history_component__WEBPACK_IMPORTED_MODULE_18__/* .EditCandidateHistoryComponent */ .B,
    data: {
      selectors: {
        project: false,
        employee: false,
        organization: false,
        date: false
      }
    }
  }, {
    path: 'location',
    component: _edit_candidate_edit_candidate_profile_edit_candidate_location_edit_candidate_location_component__WEBPACK_IMPORTED_MODULE_19__/* .EditCandidateLocationComponent */ .q,
    data: {
      selectors: {
        project: false,
        employee: false,
        organization: false,
        date: false
      }
    }
  }, {
    path: 'hiring',
    component: _edit_candidate_edit_candidate_profile_edit_candidate_hiring_edit_candidate_hiring_component__WEBPACK_IMPORTED_MODULE_5__/* .EditCandidateHiringComponent */ .a,
    data: {
      selectors: {
        project: false,
        employee: false,
        organization: false,
        date: false
      }
    }
  }, {
    path: 'employment',
    component: _edit_candidate_edit_candidate_profile_edit_candidate_employment_edit_candidate_employment_component__WEBPACK_IMPORTED_MODULE_6__/* .EditCandidateEmploymentComponent */ .d,
    data: {
      selectors: {
        project: false,
        employee: false,
        organization: false,
        date: false
      }
    }
  }, {
    path: 'interview',
    component: _edit_candidate_edit_candidate_profile_edit_candidate_interview_edit_candidate_interview_component__WEBPACK_IMPORTED_MODULE_0__/* .EditCandidateInterviewComponent */ .i,
    data: {
      selectors: {
        project: false,
        employee: false,
        organization: false,
        date: false
      }
    }
  }]
}, {
  path: 'invites',
  component: _manage_candidate_invite_manage_candidate_invite_component__WEBPACK_IMPORTED_MODULE_20__/* .ManageCandidateInviteComponent */ .x,
  canActivate: [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_21__/* .InviteGuard */ .D],
  data: {
    expectedPermissions: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_14__/* .PermissionsEnum */ .U.ORG_INVITE_EDIT, _gauzy_contracts__WEBPACK_IMPORTED_MODULE_14__/* .PermissionsEnum */ .U.ORG_INVITE_VIEW],
    selectors: {
      project: false,
      employee: false,
      date: false
    }
  }
}, {
  path: 'interviews',
  component: _manage_candidate_interviews_manage_candidate_interviews_component__WEBPACK_IMPORTED_MODULE_9__/* .ManageCandidateInterviewsComponent */ .G,
  canActivate: [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_13__/* .PermissionsGuard */ .a],
  data: {
    permissions: {
      only: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_14__/* .PermissionsEnum */ .U.ORG_CANDIDATES_INTERVIEW_EDIT],
      redirectTo: '/pages/dashboard'
    }
  },
  children: [{
    path: '',
    redirectTo: 'calendar',
    pathMatch: 'full'
  }, {
    path: 'calendar',
    component: _manage_candidate_interviews_interview_calendar_interview_calendar_component__WEBPACK_IMPORTED_MODULE_11__/* .InterviewCalendarComponent */ .x,
    data: {
      selectors: {
        project: false,
        employee: false,
        date: false,
        team: false
      }
    }
  }, {
    path: 'interview_panel',
    component: _manage_candidate_interviews_interview_panel_interview_panel_component__WEBPACK_IMPORTED_MODULE_12__/* .InterviewPanelComponent */ .J,
    data: {
      selectors: {
        project: false,
        employee: false,
        date: false,
        team: false
      }
    }
  }, {
    path: 'criterion',
    component: _manage_candidate_interviews_interview_criterions_interview_criterions_component__WEBPACK_IMPORTED_MODULE_22__/* .InterviewCriterionsComponent */ .t,
    data: {
      selectors: {
        project: false,
        employee: false,
        date: false,
        team: false
      }
    }
  }]
}, {
  path: 'statistic',
  component: _candidate_statistic_candidate_statistic_component__WEBPACK_IMPORTED_MODULE_10__/* .CandidateStatisticComponent */ .H,
  canActivate: [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_13__/* .PermissionsGuard */ .a],
  data: {
    permissions: {
      only: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_14__/* .PermissionsEnum */ .U.ORG_CANDIDATES_VIEW],
      redirectTo: '/pages/dashboard'
    },
    selectors: {
      project: false,
      employee: false,
      date: false
    }
  }
}];
let CandidatesRoutingModule = /*#__PURE__*/(() => {
  class CandidatesRoutingModule {
    static {
      this.ɵfac = function CandidatesRoutingModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || CandidatesRoutingModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_23__/* ["ɵɵdefineNgModule"] */ .$C({
        type: CandidatesRoutingModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_23__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_24__/* .RouterModule */ .iI.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_24__/* .RouterModule */ .iI]
      });
    }
  }
  return CandidatesRoutingModule;
})();

/***/ }),

/***/ 43240:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   u: () => (/* binding */ CandidateSourceComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);

let CandidateSourceComponent = /*#__PURE__*/(() => {
  class CandidateSourceComponent {
    static {
      this.ɵfac = function CandidateSourceComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || CandidateSourceComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: CandidateSourceComponent,
        selectors: [["ng-component"]],
        inputs: {
          rowData: "rowData",
          value: "value"
        },
        standalone: false,
        decls: 3,
        vars: 1,
        consts: [[1, "text-center"], [1, "d-block"]],
        template: function CandidateSourceComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 0)(1, "strong", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", ctx.rowData.source == null ? null : ctx.rowData.source.name, " ");
          }
        },
        encapsulation: 2
      });
    }
  }
  return CandidateSourceComponent;
})();

/***/ }),

/***/ 43548:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   V: () => (/* binding */ CandidateTechnologiesComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(73014);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24237);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10936);
/* harmony import */ var _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38546);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12614);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(15480);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(51637);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(71924);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(19223);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(56383);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(14572);














function CandidateTechnologiesComponent_form_6_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div")(1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(2, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const i_r1 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("formGroupName", i_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpropertyInterpolate"] */ .FS9("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(3, 2, "FORM.PLACEHOLDERS.ADD_TECHNOLOGY"));
  }
}
function CandidateTechnologiesComponent_form_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "form", 11)(1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(2, CandidateTechnologiesComponent_form_6_div_2_Template, 4, 4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("formGroup", ctx_r1.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx_r1.technologies == null ? null : ctx_r1.technologies.controls);
  }
}
function CandidateTechnologiesComponent_nb_card_body_16_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const name_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", name_r3, " ");
  }
}
function CandidateTechnologiesComponent_nb_card_body_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-card-body", 16)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(4, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(5, CandidateTechnologiesComponent_nb_card_body_16_div_5_Template, 2, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(3, 2, "CANDIDATES_PAGE.CRITERIONS.ALREADY_EXISTED"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx_r1.existedTechNames);
  }
}
function CandidateTechnologiesComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 20)(1, "div", 21)(2, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(4, "div", 23)(5, "nb-icon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function CandidateTechnologiesComponent_div_18_Template_nb_icon_click_5_listener() {
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r4);
      const technology_r6 = ctx_r4.$implicit;
      const i_r7 = ctx_r4.index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.edit(i_r7, technology_r6.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(6, "nb-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function CandidateTechnologiesComponent_div_18_Template_nb_icon_click_6_listener() {
      const technology_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r4).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.remove(technology_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()()();
  }
  if (rf & 2) {
    const technology_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(technology_r6.name);
  }
}
let CandidateTechnologiesComponent = /*#__PURE__*/(() => {
  class CandidateTechnologiesComponent extends _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_1__/* .TranslationBaseComponent */ .K {
    constructor(fb, toastrService, translateService, candidateTechnologiesService, store) {
      super(translateService);
      this.fb = fb;
      this.toastrService = toastrService;
      this.translateService = translateService;
      this.candidateTechnologiesService = candidateTechnologiesService;
      this.store = store;
      this._ngDestroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__/* .Subject */ .B();
      this.technologyNames = [];
      this.editId = null;
    }
    ngOnInit() {
      this.store.selectedOrganization$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .takeUntil */ .Q)(this._ngDestroy$)).subscribe(organization => {
        if (organization) {
          this.organization = organization;
          this._initializeForm();
          this.loadTechnologies();
        }
      });
    }
    cancel() {
      this.form.controls.technologies.reset();
    }
    _initializeForm() {
      var _this = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(function* () {
        _this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .UntypedFormGroup */ .J3({
          technologies: _this.fb.array([])
        });
        const technologyForm = _this.form.controls.technologies;
        technologyForm.push(_this.fb.group({
          name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .Validators */ .k0.required]
        }));
        _this.form.valueChanges.subscribe(item => {
          _this.existedTechNames = [];
          const enteredName = item.technologies[0].name;
          _this.technologiesList.forEach(el => {
            if (enteredName !== '' && el.name.toLocaleLowerCase().includes(enteredName)) {
              _this.existedTechNames.push(el.name);
            }
          });
        });
      })();
    }
    loadTechnologies() {
      var _this2 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(function* () {
        const {
          id: organizationId,
          tenantId
        } = _this2.organization;
        const res = yield _this2.candidateTechnologiesService.getAll({
          organizationId,
          tenantId
        });
        if (res) {
          _this2.technologiesList = res.items.filter(item => !item.interviewId);
          _this2.technologyNames = [];
          _this2.technologiesList.forEach(tech => {
            _this2.technologyNames.push(tech.name.toLocaleLowerCase());
          });
        }
      })();
    }
    save() {
      var _this3 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(function* () {
        const {
          id: organizationId,
          tenantId
        } = _this3.organization;
        const technologiesForm = _this3.technologies;
        const formValue = {
          ...technologiesForm.value[0]
        };
        const targetValue = Object.assign(formValue, {
          organizationId,
          tenantId
        });
        if (_this3.editId !== null) {
          _this3.update(targetValue);
        } else {
          _this3.create(targetValue);
        }
        technologiesForm.reset();
      })();
    }
    update(formValue) {
      var _this4 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(function* () {
        if (!_this4.technologyNames.includes(formValue.name.toLocaleLowerCase())) {
          try {
            yield _this4.candidateTechnologiesService.update(_this4.editId, {
              ...formValue
            });
            _this4.editId = null;
            _this4.toastrService.success('TOASTR.MESSAGE.TECHNOLOGY_STACK_UPDATED', {
              name: formValue.name
            });
            _this4.loadTechnologies();
          } catch (error) {
            _this4.toastrError(error);
          }
        } else {
          _this4.toastrService.danger(_this4.getTranslation('CANDIDATES_PAGE.CRITERIONS.TOASTR_ALREADY_EXIST'), _this4.getTranslation('TOASTR.TITLE.ERROR'));
        }
      })();
    }
    create(formValue) {
      var _this5 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(function* () {
        if (!_this5.technologyNames.includes(formValue.name.toLocaleLowerCase())) {
          try {
            yield _this5.candidateTechnologiesService.create({
              ...formValue
            });
            _this5.toastrService.success('TOASTR.MESSAGE.TECHNOLOGY_STACK_CREATED', {
              name: formValue.name
            });
            _this5.loadTechnologies();
          } catch (error) {
            _this5.toastrError(error);
          }
        } else {
          _this5.toastrService.danger('CANDIDATES_PAGE.CRITERIONS.TOASTR_ALREADY_EXIST');
        }
      })();
    }
    edit(index, id) {
      var _this6 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(function* () {
        _this6.editId = id;
        _this6.form.controls.technologies.patchValue([_this6.technologiesList[index]]);
      })();
    }
    remove(technology) {
      var _this7 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(function* () {
        try {
          yield _this7.candidateTechnologiesService.delete(technology.id);
          _this7.loadTechnologies();
          _this7.toastrService.success('TOASTR.MESSAGE.TECHNOLOGY_STACK_DELETED', {
            name: technology.name
          });
        } catch (error) {
          _this7.toastrError(error);
        }
      })();
    }
    ngOnDestroy() {
      this._ngDestroy$.next();
      this._ngDestroy$.complete();
    }
    toastrError(error) {
      this.toastrService.danger(this.getTranslation('NOTES.CANDIDATE.EXPERIENCE.ERROR', {
        error: error.error ? error.error.message : error.message
      }), this.getTranslation('TOASTR.TITLE.ERROR'));
    }
    /*
     * Getter for candidate technology form controls array
     */
    get technologies() {
      return this.form.get('technologies');
    }
    static {
      this.ɵfac = function CandidateTechnologiesComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || CandidateTechnologiesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .UntypedFormBuilder */ .ze), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_6__/* .ToastrService */ .t), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__/* .TranslateService */ .c$), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_8__/* .CandidateTechnologiesService */ .d), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_9__/* .Store */ .il));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: CandidateTechnologiesComponent,
        selectors: [["ga-candidate-technologies"]],
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
        decls: 19,
        vars: 12,
        consts: [[1, "add-criterion-card", "mb-0"], [1, "row", "m-0", "mt-2"], ["class", "col-12 pl-0", 3, "formGroup", 4, "ngIf"], [1, "row", "m-0", "mt-3"], [1, "col-2", "pl-1", "pr-0"], ["nbButton", "", "outline", "", "status", "basic", 1, "w-100", 3, "click"], [1, "col-2", "pl-2", "pr-1"], ["nbButton", "", "status", "success", 1, "w-100", 3, "click"], ["class", "existedNames", 4, "ngIf"], [1, "technologies"], ["class", "technologies-card", 4, "ngFor", "ngForOf"], [1, "col-12", "pl-0", 3, "formGroup"], ["formArrayName", "technologies"], [4, "ngFor", "ngForOf"], [3, "formGroupName"], ["formControlName", "name", "nbInput", "", "type", "text", "fullWidth", "", 1, "col-12", 3, "placeholder"], [1, "existedNames"], [1, "existedNames-card"], ["class", "existedName", 4, "ngFor", "ngForOf"], [1, "existedName"], [1, "technologies-card"], [1, "technology"], [1, "technology-text"], [1, "technology-buttons"], ["icon", "edit", 1, "technology-buttons-icons", "pl-1", 3, "click"], ["icon", "close", 1, "technology-buttons-icons", "pl-1", 3, "click"]],
        template: function CandidateTechnologiesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-card", 0)(1, "nb-card-header")(2, "h6");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(4, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(5, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(6, CandidateTechnologiesComponent_form_6_Template, 3, 2, "form", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(7, "div", 3)(8, "span", 4)(9, "button", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function CandidateTechnologiesComponent_Template_button_click_9_listener() {
              return ctx.cancel();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(11, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(12, "span", 6)(13, "button", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function CandidateTechnologiesComponent_Template_button_click_13_listener() {
              return ctx.save();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(15, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(16, CandidateTechnologiesComponent_nb_card_body_16_Template, 6, 4, "nb-card-body", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(17, "nb-card-body", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(18, CandidateTechnologiesComponent_div_18_Template, 7, 1, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(4, 6, "CANDIDATES_PAGE.CRITERIONS.TECHNOLOGY_STACK"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.form);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(11, 8, "BUTTONS.CANCEL"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(15, 10, "BUTTONS.SAVE"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", (ctx.existedTechNames == null ? null : ctx.existedTechNames.length) > 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx.technologiesList);
          }
        },
        dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_10__/* .NbButtonComponent */ .YP2, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__/* .NbCardComponent */ .SrT, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__/* .NbCardBodyComponent */ .KH5, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__/* .NbCardHeaderComponent */ .zJv, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__/* .NbIconComponent */ .tHu, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__/* .NbInputDirective */ .i6h, _angular_common__WEBPACK_IMPORTED_MODULE_11__/* .NgForOf */ .Sq, _angular_common__WEBPACK_IMPORTED_MODULE_11__/* .NgIf */ .bT, _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* ["ɵNgNoValidate"] */ .qT, _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .DefaultValueAccessor */ .me, _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .NgControlStatus */ .BC, _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .NgControlStatusGroup */ .cb, _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .FormGroupDirective */ .j4, _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .FormControlName */ .JD, _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .FormGroupName */ .$R, _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .FormArrayName */ .v8, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__/* .TranslatePipe */ .D9],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   i[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n}\n[dir=ltr]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n[dir=rtl]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--gauzy-text-color-1);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(245, 109, 88, 0.3);\n  border-width: 2px;\n  color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(245, 109, 88, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 16px;\n  letter-spacing: 0em;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(126, 126, 143, 0.3);\n  border-width: 2px;\n  color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(126, 126, 143, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(37, 184, 105, 0.3);\n  border-width: 2px;\n  color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(37, 184, 105, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[disabled][_ngcontent-%COMP%], \n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic.btn-disabled[_ngcontent-%COMP%] {\n  background-color: var(--button-outline-basic-disabled-background-color);\n  border-color: var(--button-outline-basic-disabled-border-color);\n  color: var(--button-outline-basic-disabled-text-color);\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].primary.appearance-filled.status-primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  border: unset;\n  background-color: var(--color-primary-transparent-default);\n  box-shadow: var(--gauzy-shadow) 0, 0, 0, 0.15;\n}\n[dir=ltr]   [_nghost-%COMP%]     input, \n[dir=ltr]   [_nghost-%COMP%]     textarea {\n  text-align: start;\n}\n[dir=rtl]   [_nghost-%COMP%]     input, \n[dir=rtl]   [_nghost-%COMP%]     textarea {\n  text-align: end;\n}\n[_nghost-%COMP%]     input, \n[_nghost-%COMP%]     nb-select.appearance-outline.status-basic .select-button, \n[_nghost-%COMP%]     .ng-select .ng-select-container {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n  height: 42px !important;\n}\n[_nghost-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder, \n[_nghost-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {\n  top: unset !important;\n}\n[_nghost-%COMP%]     label, \n[_nghost-%COMP%]     .label {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  color: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]     textarea {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n}\n[_nghost-%COMP%]     .ng-select .ng-select-container input, \n[_nghost-%COMP%]     nb-tag-list input {\n  background-color: unset !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n}\n\n.add-criterion[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: flex-start;\n}\n.add-criterion-card[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n\n.technologies[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.technologies-card[_ngcontent-%COMP%] {\n  width: 49%;\n}\n\n.technology[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n  border-radius: var(--border-radius);\n  margin: 0.2rem 0;\n  padding: 1rem;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n}\n.technology-text[_ngcontent-%COMP%] {\n  font-weight: 500;\n  margin: 0;\n}\n.technology-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n}\n.technology-buttons-icons[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  cursor: pointer;\n}\n\n.existedNames[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: flex-start;\n  flex-wrap: wrap;\n  background-color: rgba(50, 50, 50, 0.08);\n}\n.existedNames-card[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  margin-top: 0.5rem;\n}\n.existedNames[_ngcontent-%COMP%]   .existedName[_ngcontent-%COMP%] {\n  border: 1px #ff3d70 solid;\n  margin: 0.2rem 0;\n  padding: 1rem;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  width: 49%;\n  font-weight: 500;\n}\n\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n}\n[_nghost-%COMP%]     input, \n[_nghost-%COMP%]     nb-select.appearance-outline.status-basic .select-button, \n[_nghost-%COMP%]     .ng-select .ng-select-container {\n  background-color: var(--gauzy-card-1) !important;\n  border: none;\n  height: 42px !important;\n}\n[_nghost-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder, \n[_nghost-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {\n  top: unset !important;\n}\n[_nghost-%COMP%]     label, \n[_nghost-%COMP%]     .label {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  color: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]     textarea {\n  background-color: var(--gauzy-card-1) !important;\n  border: none;\n}\n[_nghost-%COMP%]     .ng-select .ng-select-container input, \n[_nghost-%COMP%]     nb-tag-list input {\n  background-color: unset !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n}\n\nh6[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 17px;\n  letter-spacing: -0.01em;\n}"]
      });
    }
  }
  return CandidateTechnologiesComponent;
})();

/***/ }),

/***/ 44752:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   d: () => (/* binding */ EditCandidateEmploymentComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73014);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(64411);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10936);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72781);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73246);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23423);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(84536);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(51530);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(31324);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(93573);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(85317);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(15480);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(71924);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(26860);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(56383);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(55567);
/* harmony import */ var _packages_ui_core_shared_src_lib_tags_tags_color_input_tags_color_input_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(62177);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(19223);

var EditCandidateEmploymentComponent_1;














let EditCandidateEmploymentComponent = /*#__PURE__*/(() => {
  let EditCandidateEmploymentComponent = class EditCandidateEmploymentComponent {
    static {
      EditCandidateEmploymentComponent_1 = this;
    }
    static buildForm(fb) {
      return fb.group({
        organizationEmploymentTypes: [],
        candidateLevel: [],
        organizationDepartments: [],
        organizationPosition: [],
        tags: []
      });
    }
    constructor(fb, store, toastrService, candidateStore, organizationDepartmentsService, organizationPositionsService, organizationEmploymentTypeService, employeeLevelService) {
      this.fb = fb;
      this.store = store;
      this.toastrService = toastrService;
      this.candidateStore = candidateStore;
      this.organizationDepartmentsService = organizationDepartmentsService;
      this.organizationPositionsService = organizationPositionsService;
      this.organizationEmploymentTypeService = organizationEmploymentTypeService;
      this.employeeLevelService = employeeLevelService;
      this.employmentTypes = [];
      this.departments = [];
      this.positions = [];
      this.candidateLevels = [];
      /*
       * Edit Candidate Employment Mutation Form
       */
      this.form = EditCandidateEmploymentComponent_1.buildForm(this.fb);
    }
    ngOnInit() {
      this.candidateStore.selectedCandidate$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__/* .filter */ .p)(candidate => !!candidate), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__/* .tap */ .M)(candidate => this.selectedCandidate = candidate), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__/* .tap */ .M)(candidate => this._syncEmployment(candidate)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__/* .untilDestroyed */ .s)(this)).subscribe();
      this.store.selectedOrganization$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__/* .filter */ .p)(organization => !!organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__/* .tap */ .M)(organization => this.organization = organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__/* .tap */ .M)(() => this._initMethods()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__/* .untilDestroyed */ .s)(this)).subscribe();
    }
    _initMethods() {
      this.getPositions();
      this.getEmploymentTypes();
      this.getDepartments();
      this.getEmployeeLevel();
    }
    getEmployeeLevel() {
      var _this = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(function* () {
        if (!_this.organization) {
          return;
        }
        const {
          id: organizationId
        } = _this.organization;
        const {
          tenantId
        } = _this.store.user;
        const {
          items = []
        } = yield _this.employeeLevelService.getAll([], {
          tenantId,
          organizationId
        });
        _this.candidateLevels = items;
      })();
    }
    getDepartments() {
      var _this2 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(function* () {
        if (!_this2.organization) {
          return;
        }
        const {
          id: organizationId
        } = _this2.organization;
        const {
          tenantId
        } = _this2.store.user;
        const {
          items
        } = yield _this2.organizationDepartmentsService.getAll([], {
          organizationId,
          tenantId
        });
        _this2.departments = items;
      })();
    }
    getPositions() {
      if (!this.organization) {
        return;
      }
      const {
        id: organizationId
      } = this.organization;
      const {
        tenantId
      } = this.store.user;
      this.organizationPositionsService.getAll({
        organizationId,
        tenantId
      }).then(data => {
        const {
          items
        } = data;
        this.positions = items;
      });
    }
    getEmploymentTypes() {
      if (!this.organization) {
        return;
      }
      const {
        id: organizationId
      } = this.organization;
      const {
        tenantId
      } = this.store.user;
      this.organizationEmploymentTypeService.getAll([], {
        organizationId,
        tenantId
      }).pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__/* .untilDestroyed */ .s)(this)).subscribe(types => {
        this.employmentTypes = types.items;
      });
    }
    handleImageUploadError(error) {
      this.toastrService.danger(error);
    }
    submitForm() {
      if (this.form.valid) {
        this.candidateStore.candidateForm = {
          ...this.form.getRawValue()
        };
      }
    }
    selectedTagsHandler(tags) {
      this.form.get('tags').setValue(tags);
      this.form.get('tags').updateValueAndValidity();
    }
    _syncEmployment(candidate) {
      this.form.patchValue({
        organizationEmploymentTypes: candidate.organizationEmploymentTypes || null,
        candidateLevel: candidate.candidateLevel || null,
        organizationDepartments: candidate.organizationDepartments || null,
        organizationPosition: candidate.organizationPosition || null,
        tags: candidate.tags || []
      });
    }
    ngOnDestroy() {}
    static {
      this.ɵfac = function EditCandidateEmploymentComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || EditCandidateEmploymentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .UntypedFormBuilder */ .ze), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_6__/* .Store */ .il), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_7__/* .ToastrService */ .t), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_8__/* .CandidateStore */ .R), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_9__/* .OrganizationDepartmentsService */ .I), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_10__/* .OrganizationPositionsService */ .v), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_11__/* .OrganizationEmploymentTypesService */ .m), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_12__/* .EmployeeLevelService */ .E));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdefineComponent"] */ .VBU({
        type: EditCandidateEmploymentComponent,
        selectors: [["ga-edit-candidate-employment"]],
        standalone: false,
        decls: 41,
        vars: 38,
        consts: [[3, "formGroup"], [1, "row"], [1, "col-md-6"], [1, "form-group"], ["for", "employmentType", 1, "label"], ["id", "employmentType", "formControlName", "organizationEmploymentTypes", "bindLabel", "name", "multiple", "true", "appendTo", "body", 3, "items", "searchable", "placeholder"], ["for", "empLevelInput", 1, "label"], ["bindLabel", "level", "bindValue", "level", "appendTo", "body", "formControlName", "candidateLevel", 3, "items", "placeholder"], [1, "col"], [1, "label"], ["id", "departmentInput", "formControlName", "organizationDepartments", "bindLabel", "name", "multiple", "true", "appendTo", "body", 3, "items", "searchable", "placeholder"], ["for", "positionInput", 1, "label"], ["id", "positionInput", "formControlName", "organizationPosition", "bindLabel", "name", "appendTo", "body", 3, "items", "searchable", "placeholder"], [3, "selectedTagsEvent", "selectedTags", "isOrgLevel"], [1, "actions"], ["nbButton", "", "status", "success", 3, "click", "disabled"]],
        template: function EditCandidateEmploymentComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(0, "nb-card")(1, "nb-card-body")(2, "form", 0)(3, "div", 1)(4, "div", 2)(5, "div", 3)(6, "label", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ .EFF(7);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .nI1(8, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelement"] */ .nrm(9, "ng-select", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .nI1(10, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(11, "div", 2)(12, "div", 3)(13, "label", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ .EFF(14);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .nI1(15, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelement"] */ .nrm(16, "ng-select", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .nI1(17, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(18, "div", 1)(19, "div", 8)(20, "div", 3)(21, "label", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ .EFF(22);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .nI1(23, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelement"] */ .nrm(24, "ng-select", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .nI1(25, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(26, "div", 8)(27, "div", 3)(28, "label", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ .EFF(29);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .nI1(30, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelement"] */ .nrm(31, "ng-select", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .nI1(32, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(33, "div", 1)(34, "div", 2)(35, "div", 3)(36, "ga-tags-color-input", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵlistener"] */ .bIt("selectedTagsEvent", function EditCandidateEmploymentComponent_Template_ga_tags_color_input_selectedTagsEvent_36_listener($event) {
              return ctx.selectedTagsHandler($event);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(37, "div", 14)(38, "button", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵlistener"] */ .bIt("click", function EditCandidateEmploymentComponent_Template_button_click_38_listener() {
              return ctx.submitForm();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ .EFF(39);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .nI1(40, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s()()()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Y8G("formGroup", ctx.form);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .bMT(8, 20, "CANDIDATES_PAGE.EDIT_CANDIDATE.EMPLOYMENT_TYPE"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Y8G("items", ctx.employmentTypes)("searchable", false)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .bMT(10, 22, "CANDIDATES_PAGE.EDIT_CANDIDATE.EMPLOYMENT_TYPE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .bMT(15, 24, "CANDIDATES_PAGE.EDIT_CANDIDATE.CANDIDATES_LEVEL"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Y8G("items", ctx.candidateLevels)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .bMT(17, 26, "CANDIDATES_PAGE.EDIT_CANDIDATE.CANDIDATES_LEVEL"));
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(6);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .bMT(23, 28, "CANDIDATES_PAGE.EDIT_CANDIDATE.DEPARTMENT"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Y8G("items", ctx.departments)("searchable", false)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .bMT(25, 30, "FORM.PLACEHOLDERS.ALL_DEPARTMENTS"));
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .bMT(30, 32, "CANDIDATES_PAGE.EDIT_CANDIDATE.POSITION"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Y8G("items", ctx.positions)("searchable", false)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .bMT(32, 34, "FORM.PLACEHOLDERS.ALL_POSITIONS"));
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Y8G("selectedTags", ctx.form.get("tags").value)("isOrgLevel", true);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Y8G("disabled", ctx.form.invalid);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .bMT(40, 36, "BUTTONS.SAVE"), " ");
          }
        },
        dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_13__/* .NbButtonComponent */ .YP2, _nebular_theme__WEBPACK_IMPORTED_MODULE_13__/* .NbCardComponent */ .SrT, _nebular_theme__WEBPACK_IMPORTED_MODULE_13__/* .NbCardBodyComponent */ .KH5, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_14__/* .NgSelectComponent */ .vr, _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* ["ɵNgNoValidate"] */ .qT, _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .NgControlStatus */ .BC, _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .NgControlStatusGroup */ .cb, _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .FormGroupDirective */ .j4, _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .FormControlName */ .JD, _packages_ui_core_shared_src_lib_tags_tags_color_input_tags_color_input_component__WEBPACK_IMPORTED_MODULE_15__/* .TagsColorInputComponent */ .i, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__/* .TranslatePipe */ .D9],
        styles: [".notes[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  padding: 10px;\n  border-radius: 5px;\n  text-indent: 1em;\n}\n\n.notes[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #eac72d;\n  font-size: 0.75rem;\n  font-weight: 700;\n}\n\n[_nghost-%COMP%] {\n  overflow-y: auto;\n  max-height: calc(100vh - 28rem);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n}"]
      });
    }
  };
  return EditCandidateEmploymentComponent;
})();
EditCandidateEmploymentComponent = EditCandidateEmploymentComponent_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_17__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__/* .UntilDestroy */ .d)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_17__/* .__metadata */ .Sn)("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .UntypedFormBuilder */ .ze, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_6__/* .Store */ .il, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_7__/* .ToastrService */ .t, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_8__/* .CandidateStore */ .R, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_9__/* .OrganizationDepartmentsService */ .I, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_10__/* .OrganizationPositionsService */ .v, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_11__/* .OrganizationEmploymentTypesService */ .m, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_12__/* .EmployeeLevelService */ .E])], EditCandidateEmploymentComponent);


/***/ }),

/***/ 47131:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ EditCandidateComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73014);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(17785);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24237);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(36950);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(26024);
/* harmony import */ var _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38546);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12614);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(46125);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(90022);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(71924);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(32629);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9620);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(19223);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(56383);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(14572);
/* harmony import */ var _packages_ui_core_shared_src_lib_components_back_navigation_back_navigation_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(90910);
/* harmony import */ var _packages_ui_core_shared_src_lib_directives_img_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(71466);
/* harmony import */ var _packages_ui_core_shared_src_lib_favorite_toggle_favorite_toggle_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(6421);





















const _c0 = () => ({
  color: "white"
});
function EditCandidateComponent_ngx_favorite_toggle_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "ngx-favorite-toggle", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("favoriteToggled", function EditCandidateComponent_ngx_favorite_toggle_11_Template_ngx_favorite_toggle_favoriteToggled_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.onFavoriteToggled($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("entityType", "Candidate")("entityId", ctx_r1.selectedCandidate.id)("entityName", ctx_r1.candidateFullName)("showLabel", false);
  }
}
function EditCandidateComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(2, 2, "FORM.USERNAME"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(ctx_r1.selectedCandidate == null ? null : ctx_r1.selectedCandidate.user.username);
  }
}
function EditCandidateComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(0, "div", 18);
  }
}
function EditCandidateComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnamespaceSVG"] */ .qSk();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(1, "svg", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(2, "circle", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnamespaceHTML"] */ .joV();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(3, "nb-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function EditCandidateComponent_div_23_Template_nb_icon_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.editCandidate());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("options", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction0"] */ .lJ4(1, _c0));
  }
}
let EditCandidateComponent = /*#__PURE__*/(() => {
  class EditCandidateComponent extends _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_1__/* .TranslationBaseComponent */ .K {
    constructor(candidateInterviewService, router, store, candidatesService, route, translateService, dialogService) {
      super(translateService);
      this.candidateInterviewService = candidateInterviewService;
      this.router = router;
      this.store = store;
      this.candidatesService = candidatesService;
      this.route = route;
      this.translateService = translateService;
      this.dialogService = dialogService;
      this._ngDestroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__/* .Subject */ .B();
      this.candidateName = 'Candidate';
      this.hasEditPermission = false;
    }
    ngOnInit() {
      var _this = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(function* () {
        _this.store.userRolePermissions$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .takeUntil */ .Q)(_this._ngDestroy$)).subscribe(() => {
          _this.hasEditPermission = _this.store.hasPermission(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_5__/* .PermissionsEnum */ .U.ORG_CANDIDATES_EDIT);
        });
        _this.route.params.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .takeUntil */ .Q)(_this._ngDestroy$)).subscribe(/*#__PURE__*/function () {
          var _ref = (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(function* (params) {
            const id = params.id;
            const {
              items
            } = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_6__/* .firstValueFrom */ ._)(_this.candidatesService.getAll(['user'], {
              id
            }));
            _this.selectedCandidate = items[0];
            _this.loadInterview();
            const checkUsername = _this.selectedCandidate.user.username;
            _this.candidateName = checkUsername ? checkUsername : 'Candidate';
          });
          return function (_x) {
            return _ref.apply(this, arguments);
          };
        }());
      })();
    }
    loadInterview() {
      var _this2 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(function* () {
        const interviews = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_6__/* .firstValueFrom */ ._)(_this2.candidateInterviewService.getAll(['interviewers', 'technologies', 'personalQualities', 'feedbacks'], {
          candidateId: _this2.selectedCandidate.id
        }));
        if (interviews) {
          _this2.interviewList = interviews.items;
        }
      })();
    }
    interviewInfo() {
      var _this3 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(function* () {
        if (_this3.interviewList.length > 0) {
          _this3.dialogService.open(_gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_7__/* .CandidateInterviewInfoComponent */ .Q, {
            context: {
              interviews: _this3.interviewList,
              selectedCandidate: _this3.selectedCandidate,
              isSlider: true
            }
          });
        }
      })();
    }
    editCandidate() {
      this.router.navigate(['/pages/employees/candidates/edit/' + this.selectedCandidate.id + '/profile']);
    }
    /**
     * Handle favorite toggle event
     */
    onFavoriteToggled(_event) {
      // The FavoriteToggleComponent already shows success/error messages
      // Additional logic can be added here if needed (analytics, state updates, etc.)
    }
    get candidateFullName() {
      return (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_8__/* .getEntityDisplayName */ .fl)(this.selectedCandidate);
    }
    ngOnDestroy() {
      this._ngDestroy$.next();
      this._ngDestroy$.complete();
    }
    static {
      this.ɵfac = function EditCandidateComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || EditCandidateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_9__/* .CandidateInterviewService */ .C), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_router__WEBPACK_IMPORTED_MODULE_10__/* .Router */ .Ix), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_11__/* .Store */ .il), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_12__/* .CandidatesService */ .S), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_router__WEBPACK_IMPORTED_MODULE_10__/* .ActivatedRoute */ .nX), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__/* .TranslateService */ .c$), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbDialogService */ .S0W));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: EditCandidateComponent,
        selectors: [["ga-edit-candidate"]],
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
        decls: 25,
        vars: 11,
        consts: [[1, "employee-edit", "card-scroll"], [1, "header"], [1, "header-container"], [1, "d-flex", "justify-content-between", "align-items-start", "w-100"], [2, "display", "flex"], [1, "employee-info"], ["alt", "Candidate Avatar", 1, "employee-image", 3, "src"], [1, "employee-details"], [1, "employee-name"], ["size", "small", "status", "basic", "spacing", "detail", 3, "entityType", "entityId", "entityName", "showLabel", "favoriteToggled", 4, "ngIf"], ["class", "transparent", 4, "ngIf"], [1, "transparent"], [1, "notification", 3, "click"], ["icon", "bell-outline", 1, "bell"], ["class", "exist", 4, "ngIf"], ["class", "employee-details edit-icon", 4, "ngIf"], [1, "settings-body"], ["size", "small", "status", "basic", "spacing", "detail", 3, "favoriteToggled", "entityType", "entityId", "entityName", "showLabel"], [1, "exist"], [1, "employee-details", "edit-icon"], ["xmlns", "http://www.w3.org/2000/svg", "width", "36", "height", "36", "viewBox", "0 0 36 36"], ["cx", "18", "cy", "18", "r", "18", "fill", "#0091FF", "fill-rule", "evenodd"], ["icon", "edit-outline", 1, "ml-2", "open", 3, "click", "options"]],
        template: function EditCandidateComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-card", 0)(1, "nb-card-header", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(5, "ngx-back-navigation");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(6, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(7, "img", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(8, "div", 7)(9, "span", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(11, EditCandidateComponent_ngx_favorite_toggle_11_Template, 1, 4, "ngx-favorite-toggle", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(12, "div", 5)(13, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(14, EditCandidateComponent_div_14_Template, 5, 4, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(15, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(17, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(18, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(20, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function EditCandidateComponent_Template_div_click_20_listener() {
              return ctx.interviewInfo();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(21, "nb-icon", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(22, EditCandidateComponent_div_22_Template, 1, 0, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(23, EditCandidateComponent_div_23_Template, 4, 2, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(24, "nb-card-body", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("src", ctx.selectedCandidate == null ? null : ctx.selectedCandidate.user.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵsanitizeUrl"] */ .B4B);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate2"] */ .Lme("", ctx.selectedCandidate == null ? null : ctx.selectedCandidate.user.firstName, " ", ctx.selectedCandidate == null ? null : ctx.selectedCandidate.user.lastName, "");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.selectedCandidate);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.selectedCandidate == null ? null : ctx.selectedCandidate.user.username);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(17, 9, "FORM.EMAIL"), ": ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(ctx.selectedCandidate == null ? null : ctx.selectedCandidate.user.email);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", (ctx.interviewList == null ? null : ctx.interviewList.length) > 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.hasEditPermission);
          }
        },
        dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbCardComponent */ .SrT, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbCardBodyComponent */ .KH5, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbCardHeaderComponent */ .zJv, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbIconComponent */ .tHu, _angular_common__WEBPACK_IMPORTED_MODULE_15__/* .NgIf */ .bT, _packages_ui_core_shared_src_lib_components_back_navigation_back_navigation_component__WEBPACK_IMPORTED_MODULE_16__/* .BackNavigationComponent */ .r, _packages_ui_core_shared_src_lib_directives_img_directive__WEBPACK_IMPORTED_MODULE_17__/* .ImgDirective */ .z, _packages_ui_core_shared_src_lib_favorite_toggle_favorite_toggle_component__WEBPACK_IMPORTED_MODULE_18__/* .FavoriteToggleComponent */ .M, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__/* .TranslatePipe */ .D9],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.header[_ngcontent-%COMP%] {\n  padding: 30px;\n}\n.header[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.header[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   .employee-info[_ngcontent-%COMP%], \n.header[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   .org-info[_ngcontent-%COMP%] {\n  display: flex;\n}\n.header[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   .employee-info[_ngcontent-%COMP%]   .employee-image[_ngcontent-%COMP%], \n.header[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   .employee-info[_ngcontent-%COMP%]   .org-image[_ngcontent-%COMP%], \n.header[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   .org-info[_ngcontent-%COMP%]   .employee-image[_ngcontent-%COMP%], \n.header[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   .org-info[_ngcontent-%COMP%]   .org-image[_ngcontent-%COMP%] {\n  max-width: 70px;\n  max-height: 70px;\n  border-radius: 13px;\n  margin-right: 24px;\n  margin-left: 24px;\n}\n.header[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   .employee-details[_ngcontent-%COMP%], \n.header[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   .org-details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.header[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   .employee-details[_ngcontent-%COMP%]   .employee-name[_ngcontent-%COMP%], \n.header[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   .employee-details[_ngcontent-%COMP%]   .org-name[_ngcontent-%COMP%], \n.header[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   .org-details[_ngcontent-%COMP%]   .employee-name[_ngcontent-%COMP%], \n.header[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   .org-details[_ngcontent-%COMP%]   .org-name[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 18px;\n}\n.header[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   .employee-details[_ngcontent-%COMP%]   .employee-position[_ngcontent-%COMP%], \n.header[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   .employee-details[_ngcontent-%COMP%]   .org-position[_ngcontent-%COMP%], \n.header[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   .org-details[_ngcontent-%COMP%]   .employee-position[_ngcontent-%COMP%], \n.header[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   .org-details[_ngcontent-%COMP%]   .org-position[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\n.open[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.body[_ngcontent-%COMP%] {\n  padding: 36px;\n  display: flex;\n  justify-content: space-between;\n}\n.body[_ngcontent-%COMP%]   .half-content[_ngcontent-%COMP%] {\n  width: 49%;\n}\n.body[_ngcontent-%COMP%]   .info-block[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 20px;\n  width: 100%;\n  height: 84px;\n  border-radius: 4px;\n  padding: 29px;\n  background-color: #f6f9fc;\n  cursor: pointer;\n}\n.body[_ngcontent-%COMP%]   .info-block[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 2px 9px 0 rgba(0, 0, 0, 0.26);\n  transform: translateY(-1px);\n}\n.body[_ngcontent-%COMP%]   .info-block[_ngcontent-%COMP%]   .info-text[_ngcontent-%COMP%], \n.body[_ngcontent-%COMP%]   .info-block[_ngcontent-%COMP%]   .info-value[_ngcontent-%COMP%] {\n  display: flex;\n  font-size: 18px;\n  color: #333333;\n}\n.body[_ngcontent-%COMP%]   .info-block[_ngcontent-%COMP%]   .info-text[_ngcontent-%COMP%]   .profit-positive-color[_ngcontent-%COMP%], \n.body[_ngcontent-%COMP%]   .info-block[_ngcontent-%COMP%]   .info-value[_ngcontent-%COMP%]   .profit-positive-color[_ngcontent-%COMP%] {\n  color: #66de0b;\n}\n.body[_ngcontent-%COMP%]   .info-block[_ngcontent-%COMP%]   .info-text[_ngcontent-%COMP%]   .profit-negative-color[_ngcontent-%COMP%], \n.body[_ngcontent-%COMP%]   .info-block[_ngcontent-%COMP%]   .info-value[_ngcontent-%COMP%]   .profit-negative-color[_ngcontent-%COMP%] {\n  color: #ff7b00;\n}\n.body[_ngcontent-%COMP%]   .info-block[_ngcontent-%COMP%]   .info-text[_ngcontent-%COMP%]   .expense-color[_ngcontent-%COMP%], \n.body[_ngcontent-%COMP%]   .info-block[_ngcontent-%COMP%]   .info-value[_ngcontent-%COMP%]   .expense-color[_ngcontent-%COMP%] {\n  color: #dbc300;\n}\n.body[_ngcontent-%COMP%]   .info-block[_ngcontent-%COMP%]   .info-text[_ngcontent-%COMP%]   .income-color[_ngcontent-%COMP%], \n.body[_ngcontent-%COMP%]   .info-block[_ngcontent-%COMP%]   .info-value[_ngcontent-%COMP%]   .income-color[_ngcontent-%COMP%] {\n  color: #089c17;\n}\n.body[_ngcontent-%COMP%]   .info-block[_ngcontent-%COMP%]   .info-text[_ngcontent-%COMP%] {\n  flex-direction: column;\n  justify-content: center;\n}\n.body[_ngcontent-%COMP%]   .info-block[_ngcontent-%COMP%]   .info-value[_ngcontent-%COMP%] {\n  flex-direction: row;\n  align-items: center;\n}\n.body[_ngcontent-%COMP%]   .info-block[_ngcontent-%COMP%]   .info-value[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 24px;\n  margin-right: 12px;\n}\n.body[_ngcontent-%COMP%]   .bonus[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  width: 100%;\n}\n.body[_ngcontent-%COMP%]   .bonus[_ngcontent-%COMP%]   .bonus-value[_ngcontent-%COMP%] {\n  margin-right: 39px;\n}\n.body[_ngcontent-%COMP%]   .bonus[_ngcontent-%COMP%]   .bonus-value[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:first-child {\n  text-align: right;\n  font-size: 16px;\n  margin-bottom: 15px;\n  margin-right: 3px;\n}\n.body[_ngcontent-%COMP%]   .bonus[_ngcontent-%COMP%]   .bonus-value[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:last-child {\n  font-size: 46px;\n  font-weight: bold;\n  color: #0091ff;\n}\n.body[_ngcontent-%COMP%]   .bonus[_ngcontent-%COMP%]   .bonus-value[_ngcontent-%COMP%]   .negative-bonus-color[_ngcontent-%COMP%] {\n  color: red;\n}\n.body[_ngcontent-%COMP%]   .bonus[_ngcontent-%COMP%]   .bonus-disclaimer[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  margin-right: 39px;\n  font-size: 0.7rem;\n  width: 215px;\n}\n\n  nb-route-tabset .route-tab .tab-link {\n  border-radius: var(--border-radius) var(--border-radius) 0 0;\n}\n  nb-route-tabset .route-tab .tab-link svg {\n  fill: var(--text-primary-color);\n}\n  nb-route-tabset .route-tab .tab-link span {\n  display: inline-block;\n  text-transform: initial;\n}\n  nb-route-tabset .route-tab .tab-link span:first-letter {\n  text-transform: uppercase;\n}", "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   .notification[_ngcontent-%COMP%] {\n  margin-top: 18px;\n  position: relative;\n  display: inline-block;\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  background-color: rgb(0, 145, 255);\n}\n[dir=ltr]   [_nghost-%COMP%]   .notification[_ngcontent-%COMP%] {\n  margin-left: 20px;\n}\n[dir=rtl]   [_nghost-%COMP%]   .notification[_ngcontent-%COMP%] {\n  margin-right: 20px;\n}\n[dir=ltr]   [_nghost-%COMP%]   .notification[_ngcontent-%COMP%] {\n  margin-right: -20px;\n}\n[dir=rtl]   [_nghost-%COMP%]   .notification[_ngcontent-%COMP%] {\n  margin-left: -20px;\n}\n\n.notification[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n[_nghost-%COMP%]   .exist[_ngcontent-%COMP%] {\n  position: absolute;\n  font-size: 8px;\n  top: 9px;\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background-color: #f10;\n}\n[dir=ltr]   [_nghost-%COMP%]   .exist[_ngcontent-%COMP%] {\n  right: 8px;\n}\n[dir=rtl]   [_nghost-%COMP%]   .exist[_ngcontent-%COMP%] {\n  left: 8px;\n}\n\n[_nghost-%COMP%]   .bell[_ngcontent-%COMP%] {\n  color: white !important;\n  font-size: 18px;\n  position: absolute;\n  margin-top: 9px;\n}\n[dir=ltr]   [_nghost-%COMP%]   .bell[_ngcontent-%COMP%] {\n  margin-left: 9px;\n}\n[dir=rtl]   [_nghost-%COMP%]   .bell[_ngcontent-%COMP%] {\n  margin-right: 9px;\n}\n\n[_nghost-%COMP%]   .edit-icon[_ngcontent-%COMP%] {\n  position: relative;\n  width: 36px;\n}\n[dir=ltr]   [_nghost-%COMP%]   .edit-icon[_ngcontent-%COMP%] {\n  margin-left: 30px;\n}\n[dir=rtl]   [_nghost-%COMP%]   .edit-icon[_ngcontent-%COMP%] {\n  margin-right: 30px;\n}\n[_nghost-%COMP%]   .edit-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  position: absolute;\n}\n[_nghost-%COMP%]   .edit-icon[_ngcontent-%COMP%]   nb-icon[_ngcontent-%COMP%] {\n  position: absolute;\n}\n\n.header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: stretch;\n  padding: 1rem;\n}\n\n.org-details[_ngcontent-%COMP%]   .edit-public-page[_ngcontent-%COMP%] {\n  cursor: pointer;\n  color: #027ad6;\n  padding-top: 3px;\n}\n\n.setting-name[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: bold;\n}\n\n.body-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 35px;\n}\n\n.mutation-card.setting-block[_ngcontent-%COMP%] {\n  background: #eaf3fc;\n}\n\n.transparent[_ngcontent-%COMP%] {\n  opacity: 0.7;\n}\n\n.settings-body[_ngcontent-%COMP%] {\n  padding: 35px;\n}\n\n.sub-header[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  font-weight: bold;\n}\n\n[_nghost-%COMP%]   .header-content[_ngcontent-%COMP%] {\n  display: flex;\n}\n[_nghost-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-info[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 560px;\n}\n[dir=ltr]   [_nghost-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-info[_ngcontent-%COMP%] {\n  padding-left: 30px;\n}\n[dir=rtl]   [_nghost-%COMP%]   .header-content[_ngcontent-%COMP%]   .header-info[_ngcontent-%COMP%] {\n  padding-right: 30px;\n}"]
      });
    }
  }
  return EditCandidateComponent;
})();

/***/ }),

/***/ 47209:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   w: () => (/* binding */ CandidatesComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(73014);
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncIterator_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(10976);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(64411);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(81236);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(79180);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(99418);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(56314);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(19223);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(45715);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(71181);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(73246);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(72781);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(24237);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(36950);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(56383);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(9620);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(23423);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(26024);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(46076);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(64913);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(35665);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(32629);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(15480);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(71924);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(54263);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(17134);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47108);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(31823);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(6231);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(76229);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(21968);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(47825);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(91045);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(78115);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(83993);
/* harmony import */ var _table_components__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(43240);
/* harmony import */ var _table_components__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(72010);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(79475);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(14572);
/* harmony import */ var _packages_ui_core_shared_src_lib_components_header_title_header_title_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(49072);
/* harmony import */ var _packages_ui_core_shared_src_lib_components_layout_selector_layout_selector_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(51102);
/* harmony import */ var _packages_ui_core_shared_src_lib_card_grid_card_grid_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(49517);
/* harmony import */ var _packages_ui_core_shared_src_lib_favorite_toggle_favorite_toggle_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(6421);
/* harmony import */ var angular2_smart_table__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(52345);
/* harmony import */ var _packages_ui_core_shared_src_lib_gauzy_button_action_gauzy_button_action_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(45293);
/* harmony import */ var _packages_ui_core_shared_src_lib_smart_data_layout_pagination_pagination_v2_pagination_v2_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(3456);






























function CandidatesComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function CandidatesComponent_ng_template_8_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r2.goTo("interviews"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(3, 1, "BUTTONS.MANAGE_INTERVIEWS"), " ");
  }
}
function CandidatesComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function CandidatesComponent_ng_template_9_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r2.goTo("invites"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(3, 1, "BUTTONS.MANAGE_INVITES"), " ");
  }
}
function CandidatesComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function CandidatesComponent_ng_template_10_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r2.goTo("statistic"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(3, 1, "BUTTONS.CANDIDATE_STATISTIC"), " ");
  }
}
function CandidatesComponent_ng_template_18_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "ngx-pagination", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("source", ctx_r2.smartTableSource);
  }
}
function CandidatesComponent_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 20)(1, "div")(2, "angular2-smart-table", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("userRowSelect", function CandidatesComponent_ng_template_18_Template_angular2_smart_table_userRowSelect_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r6);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r2.selectCandidate($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(3, CandidatesComponent_ng_template_18_ng_container_3_Template, 2, 1, "ng-container", 22);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("settings", ctx_r2.settingsSmartTable)("source", ctx_r2.sourceSmartTable);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r2.smartTableSource);
  }
}
function CandidatesComponent_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "ga-card-grid", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("onSelectedItem", function CandidatesComponent_ng_template_19_Template_ga_card_grid_onSelectedItem_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r7);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r2.selectCandidate($event));
    })("scroll", function CandidatesComponent_ng_template_19_Template_ga_card_grid_scroll_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r7);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r2.onScroll());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("totalItems", ctx_r2.pagination == null ? null : ctx_r2.pagination.totalItems)("settings", ctx_r2.settingsSmartTable)("source", ctx_r2.candidates);
  }
}
function CandidatesComponent_ng_template_21_ngx_favorite_toggle_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "ngx-favorite-toggle", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("favoriteToggled", function CandidatesComponent_ng_template_21_ngx_favorite_toggle_1_Template_ngx_favorite_toggle_favoriteToggled_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r8);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r2.onCandidateFavoriteToggled($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const selectedItem_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG().selectedItem;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("entityType", "Candidate")("entityId", selectedItem_r9.id)("entityName", ctx_r2.getCandidateDisplayName(selectedItem_r9))("disabled", ctx_r2.disableButton)("showLabel", false);
  }
}
function CandidatesComponent_ng_template_21_ng_template_2_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(1, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function CandidatesComponent_ng_template_21_ng_template_2_ng_container_8_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r11);
      const selectedItem_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2).selectedItem;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r2.hire(selectedItem_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(2, "nb-icon", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(5, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function CandidatesComponent_ng_template_21_ng_template_2_ng_container_8_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r11);
      const selectedItem_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2).selectedItem;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r2.reject(selectedItem_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(6, "nb-icon", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const selectedItem_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2).selectedItem;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("disabled", !selectedItem_r9 && ctx_r2.disableButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI("", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(4, 4, "BUTTONS.HIRE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("disabled", !selectedItem_r9 && ctx_r2.disableButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI("", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(8, 6, "BUTTONS.REJECT"), " ");
  }
}
function CandidatesComponent_ng_template_21_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function CandidatesComponent_ng_template_21_ng_template_2_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r10);
      const selectedItem_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG().selectedItem;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r2.edit(selectedItem_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "nb-icon", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(4, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function CandidatesComponent_ng_template_21_ng_template_2_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r10);
      const selectedItem_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG().selectedItem;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r2.archive(selectedItem_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(5, "nb-icon", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(8, CandidatesComponent_ng_template_21_ng_template_2_ng_container_8_Template, 9, 8, "ng-container", 22);
  }
  if (rf & 2) {
    const selectedItem_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG().selectedItem;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("disabled", !selectedItem_r9 && ctx_r2.disableButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate2"] */ .Lme("", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(3, 6, "BUTTONS.EDIT"), " ", selectedItem_r9 == null ? null : selectedItem_r9.status, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("disabled", !selectedItem_r9 && ctx_r2.disableButton || (selectedItem_r9 == null ? null : selectedItem_r9.isArchived));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI("", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(7, 8, "BUTTONS.ARCHIVE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", (ctx_r2.selectedCandidate == null ? null : ctx_r2.selectedCandidate.status) === ctx_r2.candidateStatusEnum.APPLIED);
  }
}
function CandidatesComponent_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, CandidatesComponent_ng_template_21_ngx_favorite_toggle_1_Template, 1, 5, "ngx-favorite-toggle", 26)(2, CandidatesComponent_ng_template_21_ng_template_2_Template, 9, 10, "ng-template", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const selectedItem_r9 = ctx.selectedItem;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", selectedItem_r9);
  }
}
function CandidatesComponent_ng_template_23_ng_template_0_button_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function CandidatesComponent_ng_template_23_ng_template_0_button_0_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r12);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r2.invite());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "nb-icon", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI("", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(3, 1, "BUTTONS.INVITE"), " ");
  }
}
function CandidatesComponent_ng_template_23_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(0, CandidatesComponent_ng_template_23_ng_template_0_button_0_Template, 4, 3, "button", 37);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r2.organizationInvitesAllowed);
  }
}
function CandidatesComponent_ng_template_23_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function CandidatesComponent_ng_template_23_ng_template_1_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r13);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r2.add());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "nb-icon", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI("", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(3, 1, "BUTTONS.ADD"), " ");
  }
}
function CandidatesComponent_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(0, CandidatesComponent_ng_template_23_ng_template_0_Template, 1, 1, "ng-template", 9)(1, CandidatesComponent_ng_template_23_ng_template_1_Template, 4, 3, "ng-template", 27);
  }
}
let CandidatesComponent = class CandidatesComponent extends _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_1__/* .PaginationFilterBaseComponent */ .t {
  constructor(candidatesService, dialogService, toastrService, store, router, route, translateService, errorHandler, http, genericFavoriteService) {
    super(translateService);
    this.candidatesService = candidatesService;
    this.dialogService = dialogService;
    this.toastrService = toastrService;
    this.store = store;
    this.router = router;
    this.route = route;
    this.translateService = translateService;
    this.errorHandler = errorHandler;
    this.http = http;
    this.genericFavoriteService = genericFavoriteService;
    this.includeArchived = false;
    this.loading = false;
    this.organizationInvitesAllowed = false;
    this.disableButton = true;
    this.dataLayoutStyle = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__/* .ComponentLayoutStyleEnum */ .IE.TABLE;
    this.componentLayoutStyleEnum = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__/* .ComponentLayoutStyleEnum */ .IE;
    this.candidateStatusEnum = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__/* .CandidateStatusEnum */ .P;
    this.candidates = [];
    this.candidates$ = this.subject$;
    this._refresh$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__/* .Subject */ .B();
    this.favoriteCandidates = [];
    this.setView();
  }
  ngOnInit() {
    this._loadSmartTableSettings();
    this._applyTranslationOnSmartTable();
    this.candidates$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .debounceTime */ .B)(100), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .M)(() => this._clearItem()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .M)(() => this.getCandidates()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__/* .untilDestroyed */ .s)(this)).subscribe();
    this.pagination$.pipe((0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_8__/* .distinctUntilChange */ .nI)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .M)(() => this.candidates$.next(true)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__/* .untilDestroyed */ .s)(this)).subscribe();
    this.store.selectedOrganization$.pipe((0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_8__/* .distinctUntilChange */ .nI)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .filter */ .p)(organization => !!organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .M)(organization => this.organization = organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .M)(({
      invitesAllowed
    }) => this.organizationInvitesAllowed = invitesAllowed), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .M)(() => this._refresh$.next(true)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .M)(() => this.candidates$.next(true)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .M)(() => this.loadFavoriteCandidates()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__/* .untilDestroyed */ .s)(this)).subscribe();
    this.route.queryParamMap.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .filter */ .p)(params => !!params && params.get('openAddDialog') === 'true'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .debounceTime */ .B)(1000), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .M)(() => this.add()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__/* .untilDestroyed */ .s)(this)).subscribe();
    this._refresh$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .filter */ .p)(() => this._isGridLayout), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .M)(() => this.refreshPagination()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .M)(() => this.candidates = []), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__/* .untilDestroyed */ .s)(this)).subscribe();
  }
  /**
   *
   * @param page
   */
  goTo(page) {
    this.router.navigate([`/pages/employees/candidates/${page}`]);
  }
  /**
   *
   */
  setView() {
    this.viewComponentName = _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_10__/* .ComponentEnum */ .L.CANDIDATES;
    this.store.componentLayout$(this.viewComponentName).pipe((0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_8__/* .distinctUntilChange */ .nI)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .M)(componentLayout => this.dataLayoutStyle = componentLayout), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .M)(() => this.refreshPagination()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .filter */ .p)(componentLayout => componentLayout === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__/* .ComponentLayoutStyleEnum */ .IE.CARDS_GRID), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .M)(() => this.candidates = []), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .M)(() => this.candidates$.next(true)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__/* .untilDestroyed */ .s)(this)).subscribe();
  }
  /**
   *
   * @param param0
   */
  selectCandidate({
    isSelected,
    data
  }) {
    this.disableButton = !isSelected;
    this.selectedCandidate = isSelected ? data : null;
  }
  /**
   *
   */
  add() {
    var _this = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A)(function* () {
      try {
        const {
          name
        } = _this.organization;
        const dialog = _this.dialogService.open(_gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_12__/* .CandidateMutationComponent */ .K);
        const candidates = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_13__/* .firstValueFrom */ ._)(dialog.onClose);
        if (candidates) {
          var _iteratorAbruptCompletion = false;
          var _didIteratorError = false;
          var _iteratorError;
          try {
            for (var _iterator = (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncIterator_js__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A)(candidates), _step; _iteratorAbruptCompletion = !(_step = yield _iterator.next()).done; _iteratorAbruptCompletion = false) {
              const candidate = _step.value;
              {
                if (candidate.user) {
                  const {
                    firstName,
                    lastName
                  } = candidate.user;
                  let fullName = 'Candidate';
                  if (firstName || lastName) {
                    fullName = `${firstName} ${lastName}`;
                  }
                  _this.toastrService.success('TOASTR.MESSAGE.CANDIDATE_CREATED', {
                    name: fullName,
                    organization: name
                  });
                }
              }
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (_iteratorAbruptCompletion && _iterator.return != null) {
                yield _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }
          _this.candidates$.next(true);
        }
      } catch (error) {
        console.log('Error, while creating bulk candidate', error);
      }
    })();
  }
  /**
   *
   * @param selectedItem
   * @returns
   */
  edit(selectedItem) {
    if (selectedItem) {
      this.selectCandidate({
        isSelected: true,
        data: selectedItem
      });
    }
    if (!this.selectedCandidate) {
      return;
    }
    const candidateId = this.selectedCandidate.id;
    this.router.navigate(['/pages/employees/candidates/edit', candidateId, 'profile']);
  }
  /**
   *
   */
  invite() {
    var _this2 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A)(function* () {
      const dialog = _this2.dialogService.open(_gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_15__/* .InviteMutationComponent */ .w, {
        context: {
          invitationType: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_16__/* .InvitationTypeEnum */ .Tq.CANDIDATE
        }
      });
      yield (0,rxjs__WEBPACK_IMPORTED_MODULE_13__/* .firstValueFrom */ ._)(dialog.onClose);
    })();
  }
  /**
   *
   */
  manageInvites() {
    this.router.navigate(['/pages/employees/candidates/invites']);
  }
  /**
   *
   */
  manageInterviews() {
    this.router.navigate(['/pages/employees/candidates/interviews']);
  }
  /**
   *
   * @returns
   */
  setSmartTableSource() {
    if (!this.organization) {
      return;
    }
    this.loading = true;
    const {
      id: organizationId,
      tenantId
    } = this.organization;
    this.sourceSmartTable = new _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_17__/* .ServerDataSource */ .N(this.http, {
      endPoint: _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_18__/* .API_PREFIX */ .m4 + '/candidate/pagination',
      relations: ['user', 'source', 'tags'],
      join: {
        alias: 'candidate',
        leftJoin: {
          user: 'candidate.user'
        },
        ...(this.filters.join ? this.filters.join : {})
      },
      where: {
        organizationId,
        tenantId,
        isArchived: !this.includeArchived,
        ...(this.filters.where ? this.filters.where : {})
      },
      resultMap: candidate => {
        return Object.assign({}, candidate, {
          fullName: candidate.user.name,
          email: candidate.user.email,
          id: candidate.id,
          source: candidate.source,
          rating: candidate.ratings,
          status: candidate.status,
          isArchived: candidate.isArchived,
          imageUrl: candidate.user.imageUrl,
          tags: candidate.tags,
          appliedDate: candidate.appliedDate,
          hiredDate: candidate.hiredDate,
          rejectDate: candidate.rejectDate
        });
      },
      finalize: () => {
        if (this._isGridLayout) this.candidates.push(...this.sourceSmartTable.getData());
        this.setPagination({
          ...this.getPagination(),
          totalItems: this.sourceSmartTable.count()
        });
        this.loading = false;
      }
    });
  }
  /**
   *
   */
  get _isGridLayout() {
    return this.dataLayoutStyle === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__/* .ComponentLayoutStyleEnum */ .IE.CARDS_GRID;
  }
  /**
   * GET all candidates lists
   *
   * @returns
   */
  getCandidates() {
    var _this3 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A)(function* () {
      if (!_this3.organization) {
        return;
      }
      try {
        _this3.setSmartTableSource();
        const {
          activePage,
          itemsPerPage
        } = _this3.getPagination();
        _this3.sourceSmartTable.setPaging(activePage, itemsPerPage, false);
        if (_this3._isGridLayout) _this3._loadCardLayoutData();
      } catch (error) {
        _this3.toastrService.danger(error, _this3.getTranslation('TOASTR.TITLE.ERROR'));
      }
    })();
  }
  /**
   * GET CARD Layout candidates lists
   */
  _loadCardLayoutData() {
    var _this4 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A)(function* () {
      try {
        yield _this4.sourceSmartTable.getElements();
      } catch (error) {
        _this4.toastrService.danger(error, _this4.getTranslation('TOASTR.TITLE.ERROR'));
      }
    })();
  }
  /**
   * Load smart tables settings configurations
   */
  _loadSmartTableSettings() {
    const pagination = this.getPagination();
    this.settingsSmartTable = {
      actions: false,
      selectedRowIndex: -1,
      pager: {
        display: false,
        perPage: pagination ? pagination.itemsPerPage : 10
      },
      noDataMessage: this.getTranslation('SM_TABLE.NO_DATA.CANDIDATE'),
      columns: {
        fullName: {
          title: this.getTranslation('SM_TABLE.FULL_NAME'),
          type: 'custom',
          class: 'align-row',
          renderComponent: _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_19__/* .PictureNameTagsComponent */ .O,
          componentInitFunction: (instance, cell) => {
            instance.rowData = cell.getRow().getData();
            instance.value = cell.getValue();
          },
          filter: {
            type: 'custom',
            component: _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_20__/* .InputFilterComponent */ .U
          },
          filterFunction: value => {
            this.setFilter({
              field: 'user.name',
              search: value
            });
          }
        },
        email: {
          title: this.getTranslation('SM_TABLE.EMAIL'),
          type: 'email',
          class: 'email-column',
          filter: {
            type: 'custom',
            component: _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_20__/* .InputFilterComponent */ .U
          },
          filterFunction: value => {
            this.setFilter({
              field: 'user.email',
              search: value
            });
          }
        },
        source: {
          title: this.getTranslation('SM_TABLE.SOURCE'),
          type: 'custom',
          class: 'text-center',
          width: '200px',
          isFilterable: false,
          renderComponent: _table_components__WEBPACK_IMPORTED_MODULE_21__/* .CandidateSourceComponent */ .u,
          componentInitFunction: (instance, cell) => {
            instance.rowData = cell.getRow().getData();
          }
        },
        appliedDate: {
          title: this.getTranslation('SM_TABLE.APPLIED_DATE'),
          type: 'custom',
          isFilterable: false,
          renderComponent: _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_22__/* .DateViewComponent */ .l,
          componentInitFunction: (instance, cell) => {
            instance.value = cell.getValue();
          }
        },
        hiredDate: {
          title: this.getTranslation('SM_TABLE.HIRED_DATE'),
          type: 'custom',
          isFilterable: false,
          renderComponent: _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_22__/* .DateViewComponent */ .l,
          componentInitFunction: (instance, cell) => {
            instance.value = cell.getValue();
          }
        },
        rejectDate: {
          title: this.getTranslation('SM_TABLE.REJECTED_DATE'),
          type: 'custom',
          isFilterable: false,
          renderComponent: _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_22__/* .DateViewComponent */ .l,
          componentInitFunction: (instance, cell) => {
            instance.value = cell.getValue();
          }
        },
        tags: {
          title: this.getTranslation('SM_TABLE.TAGS'),
          type: 'custom',
          width: '5%',
          isFilterable: false,
          renderComponent: _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_23__/* .TagsOnlyComponent */ .F,
          componentInitFunction: (instance, cell) => {
            instance.rowData = cell.getRow().getData();
            instance.value = cell.getValue();
          }
        },
        status: {
          title: this.getTranslation('SM_TABLE.STATUS'),
          type: 'custom',
          class: 'text-center',
          width: '5%',
          isFilterable: false,
          renderComponent: _table_components__WEBPACK_IMPORTED_MODULE_24__/* .CandidateStatusComponent */ .j,
          componentInitFunction: (instance, cell) => {
            instance.rowData = cell.getRow().getData();
            instance.value = cell.getValue();
          }
        }
      }
    };
  }
  /**
   *
   * @param checked
   */
  changeIncludeArchived(checked) {
    this.includeArchived = checked;
    this.candidates$.next(true);
  }
  /**
   * Archive a candidate with confirmation.
   * @param selectedItem - The candidate to be archive.
   */
  archive(selectedItem) {
    var _this5 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A)(function* () {
      if (selectedItem) {
        _this5.selectCandidate({
          isSelected: true,
          data: selectedItem
        });
      }
      // Open a confirmation dialog for the hiring action.
      const dialogRef = _this5.dialogService.open(_gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_25__/* .ArchiveConfirmationComponent */ .x, {
        context: {
          recordType: _this5.selectedCandidate.fullName + ' ' + _this5.getTranslation('FORM.ARCHIVE_CONFIRMATION.CANDIDATE')
        }
      });
      dialogRef.onClose.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__/* .untilDestroyed */ .s)(_this5) // Ensures the observable is properly managed to prevent memory leaks.
      ).subscribe(/*#__PURE__*/function () {
        var _ref = (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A)(function* (result) {
          if (!result) return; // If the dialog is closed without confirmation, exit the function.
          try {
            const {
              id: organizationId,
              tenantId
            } = _this5.organization;
            const {
              id,
              fullName
            } = _this5.selectedCandidate;
            yield _this5.candidatesService.setCandidateAsArchived(id, {
              organizationId,
              tenantId
            }); // Set the candidate as Archived.
            _this5.toastrService.success('TOASTR.MESSAGE.CANDIDATE_ARCHIVED', {
              name: fullName
            });
          } catch (error) {
            // Handle any errors that occur during the process.
            _this5.errorHandler.handleError(error);
          } finally {
            // Refresh the candidate list and update the UI.
            _this5._refresh$.next(true);
            _this5.candidates$.next(true);
          }
        });
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    })();
  }
  /**
   * Rejects a candidate with confirmation.
   * @param selectedItem - The candidate to be rejected.
   */
  reject(selectedItem) {
    var _this6 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A)(function* () {
      if (selectedItem) {
        _this6.selectCandidate({
          isSelected: true,
          data: selectedItem
        });
      }
      // Open a confirmation dialog for the hiring action.
      const dialogRef = _this6.dialogService.open(_gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_26__/* .CandidateActionConfirmationComponent */ .K, {
        context: {
          recordType: _this6.selectedCandidate.fullName,
          isReject: true
        }
      });
      // Handle the dialog close event.
      dialogRef.onClose.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__/* .untilDestroyed */ .s)(_this6) // Ensures the observable is properly managed to prevent memory leaks.
      ).subscribe(/*#__PURE__*/function () {
        var _ref2 = (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A)(function* (result) {
          if (!result) return; // If the dialog is closed without confirmation, exit the function.
          try {
            const {
              id,
              fullName
            } = _this6.selectedCandidate;
            yield _this6.candidatesService.setCandidateAsRejected(id); // Set the candidate status to 'rejected'.
            // Show a success message using the toastr service.
            _this6.toastrService.success('TOASTR.MESSAGE.CANDIDATE_REJECTED', {
              name: fullName
            });
          } catch (error) {
            // Handle any errors that occur during the process.
            _this6.errorHandler.handleError(error);
          } finally {
            // Refresh the candidate list and update the UI.
            _this6._refresh$.next(true);
            _this6.candidates$.next(true);
          }
        });
        return function (_x2) {
          return _ref2.apply(this, arguments);
        };
      }());
    })();
  }
  /**
   * Initiates the hiring process for a selected candidate.
   * Opens a confirmation dialog, and if confirmed, sets the candidate status to 'hired'.
   *
   * @param selectedItem - Optional candidate data to be selected and processed.
   */
  hire(selectedItem) {
    var _this7 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A)(function* () {
      // If a specific candidate is passed, select it.
      if (selectedItem) {
        _this7.selectCandidate({
          isSelected: true,
          data: selectedItem
        });
      }
      // Open a confirmation dialog for the hiring action.
      const dialogRef = _this7.dialogService.open(_gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_26__/* .CandidateActionConfirmationComponent */ .K, {
        context: {
          recordType: _this7.selectedCandidate.fullName,
          isReject: false
        }
      });
      // Handle the dialog close event.
      dialogRef.onClose.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__/* .untilDestroyed */ .s)(_this7) // Ensures the observable is properly managed to prevent memory leaks.
      ).subscribe(/*#__PURE__*/function () {
        var _ref3 = (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A)(function* (result) {
          if (!result) return; // If the dialog is closed without confirmation, exit the function.
          try {
            const {
              id,
              fullName
            } = _this7.selectedCandidate;
            yield _this7.candidatesService.setCandidateAsHired(id); // Set the candidate status to 'hired'.
            // Show a success message using the toastr service.
            _this7.toastrService.success('TOASTR.MESSAGE.CANDIDATE_HIRED', {
              name: fullName
            });
          } catch (error) {
            // Handle any errors that occur during the process.
            _this7.errorHandler.handleError(error);
          } finally {
            // Refresh the candidate list and update the UI.
            _this7._refresh$.next(true);
            _this7.candidates$.next(true);
          }
        });
        return function (_x3) {
          return _ref3.apply(this, arguments);
        };
      }());
    })();
  }
  _applyTranslationOnSmartTable() {
    this.translateService.onLangChange.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .M)(() => this._loadSmartTableSettings()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__/* .untilDestroyed */ .s)(this)).subscribe();
  }
  /*
   * Clear selected item
   */
  _clearItem() {
    this.selectCandidate({
      isSelected: false,
      data: null
    });
  }
  /**
   * Loads the list of favorite candidates for the current user or all for admin using the generic service.
   */
  loadFavoriteCandidates() {
    var _this8 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A)(function* () {
      try {
        _this8.favoriteCandidates = yield _this8.genericFavoriteService.loadFavorites(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_27__/* .BaseEntityEnum */ .k.Candidate, _this8.organization, _this8.store.user?.employee?.id);
      } catch (error) {
        _this8.errorHandler.handleError(error);
      }
    })();
  }
  /**
   * Handle candidate favorite toggle event from the new component
   */
  onCandidateFavoriteToggled(_event) {
    // Reload favorites to keep the list in sync
    this.loadFavoriteCandidates();
  }
  getCandidateDisplayName(candidate) {
    return (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_8__/* .getEntityDisplayName */ .fl)(candidate);
  }
  ngOnDestroy() {}
  static {
    this.ɵfac = function CandidatesComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CandidatesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_28__/* .CandidatesService */ .S), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_nebular_theme__WEBPACK_IMPORTED_MODULE_29__/* .NbDialogService */ .S0W), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_30__/* .ToastrService */ .t), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_31__/* .Store */ .il), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_router__WEBPACK_IMPORTED_MODULE_32__/* .Router */ .Ix), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_router__WEBPACK_IMPORTED_MODULE_32__/* .ActivatedRoute */ .nX), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_33__/* .TranslateService */ .c$), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_34__/* .ErrorHandlingService */ .X), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_common_http__WEBPACK_IMPORTED_MODULE_35__/* .HttpClient */ .Qq), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_36__/* .GenericFavoriteService */ .X));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
      type: CandidatesComponent,
      selectors: [["ng-component"]],
      standalone: false,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
      decls: 25,
      vars: 15,
      consts: [["gridLayout", ""], ["actionButtons", ""], ["visibleButton", ""], ["nbSpinnerStatus", "primary", "nbSpinnerSize", "large", 3, "nbSpinner"], [1, "d-flex", "flex-column", "pb-0"], [1, "card-header-title"], [3, "allowEmployee"], [1, "float-right"], ["ngxPermissionsOnly", "ORG_CANDIDATES_INTERVIEW_EDIT"], ["ngxPermissionsOnly", "ORG_INVITE_EDIT"], ["ngxPermissionsOnly", "ORG_CANDIDATES_VIEW"], [1, "align-self-end", "d-flex", "align-items-center"], [3, "buttonTemplate", "buttonTemplateVisible", "isDisable", "hasLayoutSelector"], ["status", "primary", 1, "custom-toggle", "ml-3", "mr-3", 3, "checkedChange"], [3, "componentName"], [3, "ngIf", "ngIfElse"], ["nbButton", "", "status", "primary", "size", "small", "outline", "", 1, "action", "header", 3, "click"], [1, "fas", "fa-user-friends"], [1, "far", "fa-envelope"], [1, "far", "fa-chart-bar"], [1, "table-scroll-container", "custom-table"], [2, "cursor", "pointer", 3, "userRowSelect", "settings", "source"], [4, "ngIf"], [3, "source"], [3, "onSelectedItem", "scroll", "totalItems", "settings", "source"], [1, "btn-group", "actions"], ["size", "small", "status", "basic", "spacing", "list", 3, "entityType", "entityId", "entityName", "disabled", "showLabel", "favoriteToggled", 4, "ngIf"], ["ngxPermissionsOnly", "ORG_CANDIDATES_EDIT"], ["size", "small", "status", "basic", "spacing", "list", 3, "favoriteToggled", "entityType", "entityId", "entityName", "disabled", "showLabel"], ["nbButton", "", "size", "small", 1, "action", "primary", 3, "click", "disabled"], ["icon", "edit-outline", 1, "mr-1"], ["nbButton", "", "size", "small", 1, "action", "secondary", 3, "click", "disabled"], ["icon", "archive-outline", 1, "mr-1"], ["nbButton", "", "status", "basic", "size", "small", 1, "action", "success", 3, "click", "disabled"], ["icon", "person-done-outline", 1, "mr-1"], ["nbButton", "", "status", "basic", "size", "small", 1, "action", "warning", 3, "click", "disabled"], ["icon", "person-remove-outline", 1, "mr-1"], ["nbButton", "", "status", "primary", "size", "small", "class", "action", 3, "click", 4, "ngIf"], ["nbButton", "", "status", "primary", "size", "small", 1, "action", 3, "click"], ["icon", "email-outline", 1, "mr-1"], ["nbButton", "", "status", "success", "size", "small", 1, "action", 3, "click"], ["icon", "plus-outline", 1, "mr-1"]],
      template: function CandidatesComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-card", 3)(1, "nb-card-header", 4)(2, "div", 5)(3, "h4")(4, "ngx-header-title", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(6, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(7, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(8, CandidatesComponent_ng_template_8_Template, 4, 3, "ng-template", 8)(9, CandidatesComponent_ng_template_9_Template, 4, 3, "ng-template", 9)(10, CandidatesComponent_ng_template_10_Template, 4, 3, "ng-template", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(11, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(12, "ngx-gauzy-button-action", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(13, "nb-toggle", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("checkedChange", function CandidatesComponent_Template_nb_toggle_checkedChange_13_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx.changeIncludeArchived($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(14);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(15, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(16, "ga-layout-selector", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(17, "nb-card-body");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(18, CandidatesComponent_ng_template_18_Template, 4, 3, "ng-template", 15)(19, CandidatesComponent_ng_template_19_Template, 1, 3, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplateRefExtractor"] */ .C5r);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(21, CandidatesComponent_ng_template_21_Template, 3, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplateRefExtractor"] */ .C5r)(23, CandidatesComponent_ng_template_23_Template, 2, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplateRefExtractor"] */ .C5r);
        }
        if (rf & 2) {
          const gridLayout_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(20);
          const actionButtons_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(22);
          const visibleButton_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(24);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("nbSpinner", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("allowEmployee", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(6, 11, "CANDIDATES_PAGE.HEADER"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("buttonTemplate", actionButtons_r15)("buttonTemplateVisible", visibleButton_r16)("isDisable", ctx.disableButton)("hasLayoutSelector", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(15, 13, "FORM.CHECKBOXES.INCLUDE_ARCHIVED"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("componentName", ctx.viewComponentName);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.dataLayoutStyle === ctx.componentLayoutStyleEnum.TABLE)("ngIfElse", gridLayout_r14);
        }
      },
      dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_29__/* .NbButtonComponent */ .YP2, _nebular_theme__WEBPACK_IMPORTED_MODULE_29__/* .NbCardComponent */ .SrT, _nebular_theme__WEBPACK_IMPORTED_MODULE_29__/* .NbCardBodyComponent */ .KH5, _nebular_theme__WEBPACK_IMPORTED_MODULE_29__/* .NbCardHeaderComponent */ .zJv, _nebular_theme__WEBPACK_IMPORTED_MODULE_29__/* .NbIconComponent */ .tHu, _nebular_theme__WEBPACK_IMPORTED_MODULE_29__/* .NbSpinnerDirective */ .zwc, _nebular_theme__WEBPACK_IMPORTED_MODULE_29__/* .NbToggleComponent */ .YF2, ngx_permissions__WEBPACK_IMPORTED_MODULE_37__/* .NgxPermissionsDirective */ .f6, _angular_common__WEBPACK_IMPORTED_MODULE_38__/* .NgIf */ .bT, _packages_ui_core_shared_src_lib_components_header_title_header_title_component__WEBPACK_IMPORTED_MODULE_39__/* .HeaderTitleComponent */ .X, _packages_ui_core_shared_src_lib_components_layout_selector_layout_selector_component__WEBPACK_IMPORTED_MODULE_40__/* .LayoutSelectorComponent */ .d, _packages_ui_core_shared_src_lib_card_grid_card_grid_component__WEBPACK_IMPORTED_MODULE_41__/* .CardGridComponent */ .c, _packages_ui_core_shared_src_lib_favorite_toggle_favorite_toggle_component__WEBPACK_IMPORTED_MODULE_42__/* .FavoriteToggleComponent */ .M, angular2_smart_table__WEBPACK_IMPORTED_MODULE_43__/* .Angular2SmartTableComponent */ .T9, _packages_ui_core_shared_src_lib_gauzy_button_action_gauzy_button_action_component__WEBPACK_IMPORTED_MODULE_44__/* .GauzyButtonActionComponent */ .A, _packages_ui_core_shared_src_lib_smart_data_layout_pagination_pagination_v2_pagination_v2_component__WEBPACK_IMPORTED_MODULE_45__/* .PaginationV2Component */ .a, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_33__/* .TranslatePipe */ .D9],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.action[_ngcontent-%COMP%] {\n  box-shadow: var(--gauzy-shadow);\n  border: none;\n}\n.action[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}\n.action.info[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: var(--color-info-default);\n  color: white;\n  border-color: var(--color-info-default);\n}\n.action.info-text-1[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  color: var(--color-info-default);\n}\n.action.secondary[_ngcontent-%COMP%] {\n  color: #7e7e8f;\n}\n.action.success[_ngcontent-%COMP%] {\n  color: var(--color-success-default);\n}\n.action.warning[_ngcontent-%COMP%] {\n  color: rgb(245, 109, 88);\n}\n.action.orange[_ngcontent-%COMP%] {\n  color: rgb(255, 171, 45);\n}\n.action.primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n}\n.action.primary.soft[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: rgba(110, 73, 232, 0.1);\n}\n.action.select-nb[_ngcontent-%COMP%]     {\n  box-shadow: none;\n}\n.action.select-nb[_ngcontent-%COMP%]     .select-button {\n  box-shadow: var(--gauzy-shadow);\n  background: rgb(245, 245, 245);\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n.actions[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-2);\n  border-radius: var(--button-rectangle-border-radius);\n  padding: 2px 4px !important;\n}\n\n.gauzy-button-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n.card-custom-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n[_nghost-%COMP%]     input {\n  border-radius: var(--border-radius);\n  box-shadow: var(--gauzy-shadow) inset;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.action[_ngcontent-%COMP%] {\n  box-shadow: var(--gauzy-shadow);\n  border: none;\n}\n.action[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}\n.action.info[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: var(--color-info-default);\n  color: white;\n  border-color: var(--color-info-default);\n}\n.action.info-text-1[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  color: var(--color-info-default);\n}\n.action.secondary[_ngcontent-%COMP%] {\n  color: #7e7e8f;\n}\n.action.success[_ngcontent-%COMP%] {\n  color: var(--color-success-default);\n}\n.action.warning[_ngcontent-%COMP%] {\n  color: rgb(245, 109, 88);\n}\n.action.orange[_ngcontent-%COMP%] {\n  color: rgb(255, 171, 45);\n}\n.action.primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n}\n.action.primary.soft[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: rgba(110, 73, 232, 0.1);\n}\n.action.select-nb[_ngcontent-%COMP%]     {\n  box-shadow: none;\n}\n.action.select-nb[_ngcontent-%COMP%]     .select-button {\n  box-shadow: var(--gauzy-shadow);\n  background: rgb(245, 245, 245);\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n.actions[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-2);\n  border-radius: var(--button-rectangle-border-radius);\n  padding: 2px 4px !important;\n}\n\n.gauzy-button-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n.card-custom-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n[_nghost-%COMP%]     input {\n  border-radius: var(--border-radius);\n  box-shadow: var(--gauzy-shadow) inset;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%], \n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   .table-scroll-container[_ngcontent-%COMP%], \n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .table-scroll-container[_ngcontent-%COMP%] {\n  flex-grow: 10;\n  max-height: unset;\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  border-radius: 0 0 var(--border-radius) var(--border-radius);\n}\n[dir=ltr]   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  padding: 1rem 0.5rem 1rem 18px;\n}\n[dir=rtl]   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  padding: 1rem 18px 1rem 0.5rem;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%], \n[_nghost-%COMP%]   nb-card-header[_ngcontent-%COMP%] {\n  border-radius: var(--border-radius);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  height: 100%;\n  border-radius: var(--border-radius);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-header[_ngcontent-%COMP%] {\n  flex: 0 1 auto;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  overflow: unset;\n  height: calc(100vh - var(--header-height) - var(--footer-height) - 11.5rem + 3.75rem);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-footer[_ngcontent-%COMP%] {\n  flex: 0 1 auto;\n}\n\n.manage-btn[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n}\n\n[_nghost-%COMP%]   .grid-scroll-container[_ngcontent-%COMP%]   .flex-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: flex-start;\n  padding: 0;\n  margin: 0;\n  list-style: none;\n}\n[_nghost-%COMP%]   .grid-scroll-container[_ngcontent-%COMP%]   .flex-container[_ngcontent-%COMP%]   .flex-item[_ngcontent-%COMP%] {\n  border: 0.0625rem solid #e4e9f2;\n  border-radius: 0.25rem;\n  width: 23%;\n  margin: 10px;\n}\n[_nghost-%COMP%]   .grid-scroll-container[_ngcontent-%COMP%]   .flex-container[_ngcontent-%COMP%]   .flex-item[_ngcontent-%COMP%]   .fullName[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  padding: 1rem 1.5rem;\n  line-height: 40px;\n  font-size: 1.5em;\n}\n[_nghost-%COMP%]   .grid-scroll-container[_ngcontent-%COMP%]   .flex-container[_ngcontent-%COMP%]   .flex-item[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n}\n[_nghost-%COMP%]   .grid-scroll-container[_ngcontent-%COMP%]   .flex-container[_ngcontent-%COMP%]   .flex-item[_ngcontent-%COMP%]   .email[_ngcontent-%COMP%] {\n  padding-right: 1.5rem;\n  bottom: 36px;\n  position: relative;\n}\n[dir=ltr]   [_nghost-%COMP%]   .grid-scroll-container[_ngcontent-%COMP%]   .flex-container[_ngcontent-%COMP%]   .flex-item[_ngcontent-%COMP%]   .email[_ngcontent-%COMP%] {\n  text-align: right;\n}\n[dir=rtl]   [_nghost-%COMP%]   .grid-scroll-container[_ngcontent-%COMP%]   .flex-container[_ngcontent-%COMP%]   .flex-item[_ngcontent-%COMP%]   .email[_ngcontent-%COMP%] {\n  text-align: left;\n}\n[_nghost-%COMP%]   .grid-scroll-container[_ngcontent-%COMP%]   .flex-container[_ngcontent-%COMP%]   .flex-item[_ngcontent-%COMP%]   .info-line[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 0.8em;\n  color: darkgray;\n  line-height: 0px;\n  padding: 0.7rem 1.5rem;\n  \n\n}\n[_nghost-%COMP%]   .grid-scroll-container[_ngcontent-%COMP%]   .flex-container[_ngcontent-%COMP%]   .flex-item[_ngcontent-%COMP%]   .info-line[_ngcontent-%COMP%]   .info-meta[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n[dir=ltr]   [_nghost-%COMP%]   .grid-scroll-container[_ngcontent-%COMP%]   .flex-container[_ngcontent-%COMP%]   .flex-item[_ngcontent-%COMP%]   .info-line[_ngcontent-%COMP%]   .info-meta[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n[dir=rtl]   [_nghost-%COMP%]   .grid-scroll-container[_ngcontent-%COMP%]   .flex-container[_ngcontent-%COMP%]   .flex-item[_ngcontent-%COMP%]   .info-line[_ngcontent-%COMP%]   .info-meta[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n[_nghost-%COMP%]   .grid-scroll-container[_ngcontent-%COMP%]   .flex-container[_ngcontent-%COMP%]   .flex-item[_ngcontent-%COMP%]   .info-line[_ngcontent-%COMP%]   .info-value[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  text-align: end;\n  color: black;\n  font-size: 1em;\n}\n[_nghost-%COMP%]   .grid-scroll-container[_ngcontent-%COMP%]   .flex-container[_ngcontent-%COMP%]   .flex-item[_ngcontent-%COMP%]   .info-line[_ngcontent-%COMP%]   .status-badge[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 10px 30px;\n  border-radius: 0.25rem;\n  color: #fff;\n}\n[_nghost-%COMP%]   .grid-scroll-container[_ngcontent-%COMP%]   .flex-container[_ngcontent-%COMP%]   .flex-item[_ngcontent-%COMP%]   .info-line[_ngcontent-%COMP%]   .badge-danger[_ngcontent-%COMP%] {\n  background-color: #ff3d71;\n}\n[_nghost-%COMP%]   .grid-scroll-container[_ngcontent-%COMP%]   .flex-container[_ngcontent-%COMP%]   .flex-item[_ngcontent-%COMP%]   .info-line[_ngcontent-%COMP%]   .badge-success[_ngcontent-%COMP%] {\n  background-color: #00d68f;\n}\n[_nghost-%COMP%]   .grid-scroll-container[_ngcontent-%COMP%]   .flex-container[_ngcontent-%COMP%]   .flex-item[_ngcontent-%COMP%]   .info-line[_ngcontent-%COMP%]   .badge-primary[_ngcontent-%COMP%] {\n  background-color: #0095ff;\n}\n[_nghost-%COMP%]   .grid-scroll-container[_ngcontent-%COMP%]   .flex-container[_ngcontent-%COMP%]   .flex-item[_ngcontent-%COMP%]   .info-line[_ngcontent-%COMP%]   .badge-warning[_ngcontent-%COMP%] {\n  background-color: #fa0;\n}\n[_nghost-%COMP%]   .grid-scroll-container[_ngcontent-%COMP%]   .flex-container[_ngcontent-%COMP%]   .flex-item[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%] {\n  justify-content: space-around;\n  display: flex;\n}\n\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  height: calc(100vh - var(--header-height) - var(--footer-height) - 11.5rem + 3.75rem - 0.25rem) !important;\n}\n[_nghost-%COMP%]     .toggle-label {\n  margin-bottom: 0;\n}\n[_nghost-%COMP%]     [nbButton].header.appearance-outline.status-primary {\n  border-width: 0px;\n  align-items: center;\n  gap: 6px;\n}\n[_nghost-%COMP%]   .custom-toggle[_ngcontent-%COMP%]     span.text {\n  color: var(--text-primary-color);\n}"]
    });
  }
};
CandidatesComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_46__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__/* .UntilDestroy */ .d)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_46__/* .__metadata */ .Sn)("design:paramtypes", [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_28__/* .CandidatesService */ .S, _nebular_theme__WEBPACK_IMPORTED_MODULE_29__/* .NbDialogService */ .S0W, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_30__/* .ToastrService */ .t, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_31__/* .Store */ .il, _angular_router__WEBPACK_IMPORTED_MODULE_32__/* .Router */ .Ix, _angular_router__WEBPACK_IMPORTED_MODULE_32__/* .ActivatedRoute */ .nX, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_33__/* .TranslateService */ .c$, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_34__/* .ErrorHandlingService */ .X, _angular_common_http__WEBPACK_IMPORTED_MODULE_35__/* .HttpClient */ .Qq, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_36__/* .GenericFavoriteService */ .X])], CandidatesComponent);


/***/ }),

/***/ 48696:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   f: () => (/* binding */ EditCandidateEducationComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(73014);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(64411);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(19223);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(10936);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(23423);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(81236);
/* harmony import */ var angular2_smart_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52345);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(46076);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(15480);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(84536);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(71924);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(69372);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(73246);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47108);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(47825);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(56383);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(14572);
/* harmony import */ var _packages_ui_core_shared_src_lib_card_grid_card_grid_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(49517);
/* harmony import */ var _packages_ui_core_shared_src_lib_gauzy_button_action_gauzy_button_action_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(45293);




















function EditCandidateEducationComponent_div_4_form_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div")(1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(2, "input", 20, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(5, "input", 21, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(8, "input", 22, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(11, "input", 23, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(14, "nb-datepicker", null, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(16, "textarea", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(18, "\t\t\t\t\t\t\t");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
  }
  if (rf & 2) {
    const i_r2 = ctx.index;
    const appliedDatePicker_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("formGroupName", i_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpropertyInterpolate"] */ .FS9("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(4, 7, "FORM.PLACEHOLDERS.ADD_EDUCATION.SCHOOL_NAME"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpropertyInterpolate"] */ .FS9("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(7, 9, "FORM.PLACEHOLDERS.ADD_EDUCATION.DEGREE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpropertyInterpolate"] */ .FS9("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(10, 11, "FORM.PLACEHOLDERS.ADD_EDUCATION.FIELD_OF_STUDY"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpropertyInterpolate"] */ .FS9("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(13, 13, "FORM.PLACEHOLDERS.ADD_EDUCATION.DATE_OF_COMPLETION"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("nbDatepicker", appliedDatePicker_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpropertyInterpolate"] */ .FS9("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(17, 15, "FORM.PLACEHOLDERS.ADD_EDUCATION.ADDITIONAL_NOTES"));
  }
}
function EditCandidateEducationComponent_div_4_form_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "form", 16)(1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(2, EditCandidateEducationComponent_div_4_form_1_div_2_Template, 19, 17, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("formGroup", ctx_r3.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx_r3.educations == null ? null : ctx_r3.educations.controls);
  }
}
function EditCandidateEducationComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, EditCandidateEducationComponent_div_4_form_1_Template, 3, 2, "form", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(2, "div", 12)(3, "span", 13)(4, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function EditCandidateEducationComponent_div_4_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r3.submitForm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(7, "span", 13)(8, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function EditCandidateEducationComponent_div_4_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r3.cancel());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r3.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(6, 3, "BUTTONS.SAVE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(10, 5, "BUTTONS.CANCEL"), " ");
  }
}
function EditCandidateEducationComponent_nb_card_body_5_angular2_smart_table_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "angular2-smart-table", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("userRowSelect", function EditCandidateEducationComponent_nb_card_body_5_angular2_smart_table_2_Template_angular2_smart_table_userRowSelect_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r5);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r3.selectEducation($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("settings", ctx_r3.settingsSmartTable)("source", ctx_r3.sourceSmartTable);
  }
}
function EditCandidateEducationComponent_nb_card_body_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-card-body")(1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(2, EditCandidateEducationComponent_nb_card_body_5_angular2_smart_table_2_Template, 1, 2, "angular2-smart-table", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r3.dataLayoutStyle === "TABLE");
  }
}
function EditCandidateEducationComponent_nb_card_body_6_ga_card_grid_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "ga-card-grid", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("onSelectedItem", function EditCandidateEducationComponent_nb_card_body_6_ga_card_grid_1_Template_ga_card_grid_onSelectedItem_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r6);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r3.selectEducation($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("totalItems", ctx_r3.pagination == null ? null : ctx_r3.pagination.totalItems)("settings", ctx_r3.settingsSmartTable)("source", ctx_r3.educationList);
  }
}
function EditCandidateEducationComponent_nb_card_body_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-card-body");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, EditCandidateEducationComponent_nb_card_body_6_ga_card_grid_1_Template, 1, 3, "ga-card-grid", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r3.dataLayoutStyle === "CARDS_GRID");
  }
}
function EditCandidateEducationComponent_ng_template_7_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 31)(1, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function EditCandidateEducationComponent_ng_template_7_div_0_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r7);
      const selectedItem_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG().selectedItem;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r3.editEducation(selectedItem_r8));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(2, "nb-icon", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(5, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function EditCandidateEducationComponent_ng_template_7_div_0_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r7);
      const selectedItem_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG().selectedItem;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r3.removeEducation(selectedItem_r8));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(7, "nb-icon", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const selectedItem_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG().selectedItem;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("disabled", !selectedItem_r8 && ctx_r3.disableButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(4, 4, "BUTTONS.EDIT"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("disabled", !selectedItem_r8 && ctx_r3.disableButton)("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(6, 6, "BUTTONS.DELETE"));
  }
}
function EditCandidateEducationComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(0, EditCandidateEducationComponent_ng_template_7_div_0_Template, 8, 8, "div", 30);
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r3.dataLayoutStyle === "TABLE" && !ctx_r3.showAddCard && (ctx_r3.educationList == null ? null : ctx_r3.educationList.length));
  }
}
function EditCandidateEducationComponent_ng_template_9_button_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function EditCandidateEducationComponent_ng_template_9_button_0_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r9);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r3.add());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "nb-icon", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(3, 1, "BUTTONS.ADD"), " ");
  }
}
function EditCandidateEducationComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(0, EditCandidateEducationComponent_ng_template_9_button_0_Template, 4, 3, "button", 36);
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", !ctx_r3.showAddCard);
  }
}
let EditCandidateEducationComponent = class EditCandidateEducationComponent extends _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_1__/* .PaginationFilterBaseComponent */ .t {
  constructor(toastrService, translateService, candidateStore, fb, store, candidateEducationsService) {
    super(translateService);
    this.toastrService = toastrService;
    this.translateService = translateService;
    this.candidateStore = candidateStore;
    this.fb = fb;
    this.store = store;
    this.candidateEducationsService = candidateEducationsService;
    this.educationList = [];
    this.sourceSmartTable = new angular2_smart_table__WEBPACK_IMPORTED_MODULE_2__/* .LocalDataSource */ .h0();
    this.dataLayoutStyle = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__/* .ComponentLayoutStyleEnum */ .IE.TABLE;
    this.disableButton = true;
    this.setView();
  }
  ngOnInit() {
    var _this = this;
    this.candidateStore.selectedCandidate$.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .untilDestroyed */ .s)(this)).subscribe(/*#__PURE__*/function () {
      var _ref = (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)(function* (candidate) {
        if (candidate) {
          _this.candidateId = candidate.id;
          _this.selectedOrganization = _this.store.selectedOrganization;
          yield _this._initializeForm();
          yield _this.loadEducations();
          yield _this.loadSmartTable();
          _this._applyTranslationOnSmartTable();
        }
      });
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
  }
  _initializeForm() {
    var _this2 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)(function* () {
      _this2.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__/* .UntypedFormGroup */ .J3({
        educations: _this2.fb.array([])
      });
      const educationForm = _this2.educations;
      educationForm.push(_this2.fb.group({
        schoolName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__/* .Validators */ .k0.required],
        degree: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__/* .Validators */ .k0.required],
        field: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__/* .Validators */ .k0.required],
        completionDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__/* .Validators */ .k0.required],
        notes: ['']
      }));
    })();
  }
  editEducation(education) {
    const selectedItem = education ? education : this.selectedEducation;
    this.showAddCard = !this.showAddCard;
    this.educations.patchValue([selectedItem]);
    this.selectedEducation = selectedItem;
  }
  selectEducation({
    isSelected,
    data
  }) {
    this.disableButton = !isSelected;
    this.selectedEducation = isSelected ? data : null;
  }
  showCard() {
    this.showAddCard = !this.showAddCard;
    this.educations.reset();
  }
  cancel() {
    this.showAddCard = false;
    this.educations.value.length = 0;
    this.selectedEducation = null;
    this.form.reset();
  }
  add() {
    this.showAddCard = true;
    this.selectedEducation = null;
    this.form.reset();
  }
  loadEducations() {
    var _this3 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)(function* () {
      _this3.loading = true;
      const {
        id: organizationId,
        tenantId
      } = _this3.selectedOrganization;
      const {
        items = []
      } = yield _this3.candidateEducationsService.getAll({
        candidateId: _this3.candidateId,
        organizationId,
        tenantId
      });
      _this3.educationList = items;
      _this3.sourceSmartTable.load(items);
      _this3.setPagination({
        ..._this3.getPagination(),
        totalItems: _this3.sourceSmartTable.count()
      });
      _this3.loading = false;
    })();
  }
  loadSmartTable() {
    var _this4 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)(function* () {
      _this4.settingsSmartTable = {
        actions: false,
        selectedRowIndex: -1,
        columns: {
          schoolName: {
            title: _this4.getTranslation('CANDIDATES_PAGE.EDIT_CANDIDATE.SCHOOL_NAME'),
            type: 'string'
          },
          degree: {
            title: _this4.getTranslation('CANDIDATES_PAGE.EDIT_CANDIDATE.DEGREE'),
            type: 'string',
            isFilterable: false
          },
          field: {
            title: _this4.getTranslation('CANDIDATES_PAGE.EDIT_CANDIDATE.FIELD'),
            type: 'string'
          },
          notes: {
            title: _this4.getTranslation('CANDIDATES_PAGE.EDIT_CANDIDATE.ADDITIONAL_NOTES'),
            type: 'string',
            isFilterable: false
          },
          completionDate: {
            title: _this4.getTranslation('CANDIDATES_PAGE.EDIT_CANDIDATE.COMPLETION_DATE'),
            type: 'custom',
            isFilterable: false,
            renderComponent: _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_7__/* .DateViewComponent */ .l,
            componentInitFunction: (instance, cell) => {
              instance.rowData = cell.getRow().getData();
              instance.value = cell.getValue();
            }
          }
        }
      };
    })();
  }
  setView() {
    this.viewComponentName = _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_8__/* .ComponentEnum */ .L.EDUCATION;
    this.store.componentLayout$(this.viewComponentName).pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .untilDestroyed */ .s)(this)).subscribe(componentLayout => {
      this.dataLayoutStyle = componentLayout;
      this.selectedEducation = this.dataLayoutStyle === 'CARDS_GRID' ? null : this.selectedEducation;
    });
  }
  submitForm() {
    var _this5 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)(function* () {
      const {
        id: organizationId,
        tenantId
      } = _this5.selectedOrganization;
      const educationForm = _this5.educations;
      if (educationForm.invalid) {
        _this5.toastrService.success('TOASTR.MESSAGE.CANDIDATE_EDUCATION_REQUIRED', null, 'NOTES.CANDIDATE.EXPERIENCE.INVALID_FORM');
        return;
      }
      const formValue = {
        ...educationForm.value[0]
      };
      if (_this5.selectedEducation) {
        //editing existing education
        try {
          yield _this5.candidateEducationsService.update(_this5.selectedEducation.id, {
            ...formValue,
            organizationId,
            tenantId
          });
          _this5.toastrService.success('TOASTR.MESSAGE.CANDIDATE_EDUCATION_UPDATED', {
            name: formValue.schoolName
          });
          _this5.loadEducations();
        } catch (error) {
          _this5.toastrError(error);
        }
      } else {
        //creating education
        try {
          yield _this5.candidateEducationsService.create({
            ...formValue,
            candidateId: _this5.candidateId,
            organizationId,
            tenantId
          });
          _this5.toastrService.success('TOASTR.MESSAGE.CANDIDATE_EDUCATION_CREATED', {
            name: formValue.schoolName
          });
          _this5.loadEducations();
        } catch (error) {
          _this5.toastrError(error);
        }
      }
      _this5.cancel();
    })();
  }
  removeEducation(education) {
    var _this6 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)(function* () {
      const selectedItem = education ? education : _this6.selectedEducation;
      try {
        yield _this6.candidateEducationsService.delete(selectedItem.id);
        _this6.selectedEducation = null;
        _this6.disableButton = true;
        _this6.toastrService.success('TOASTR.MESSAGE.CANDIDATE_EDUCATION_DELETED', {
          name: selectedItem.schoolName
        });
        _this6.loadEducations();
      } catch (error) {
        _this6.toastrError(error);
      }
    })();
  }
  toastrError(error) {
    this.toastrService.danger(error);
  }
  _applyTranslationOnSmartTable() {
    this.translateService.onLangChange.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .tap */ .M)(() => this.loadSmartTable()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .untilDestroyed */ .s)(this)).subscribe();
  }
  /*
   * Getter for educations form controls array
   */
  get educations() {
    return this.form.get('educations');
  }
  ngOnDestroy() {}
  static {
    this.ɵfac = function EditCandidateEducationComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || EditCandidateEducationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_10__/* .ToastrService */ .t), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__/* .TranslateService */ .c$), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_12__/* .CandidateStore */ .R), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_forms__WEBPACK_IMPORTED_MODULE_6__/* .UntypedFormBuilder */ .ze), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_13__/* .Store */ .il), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_14__/* .CandidateEducationsService */ ._));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
      type: EditCandidateEducationComponent,
      selectors: [["ga-edit-candidate-education"]],
      standalone: false,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
      decls: 11,
      vars: 9,
      consts: [["actionButtons", ""], ["visibleButton", ""], ["addInput", ""], ["appliedDatePicker", ""], ["nbSpinnerStatus", "primary", "nbSpinnerSize", "large", 3, "nbSpinner"], [1, "pb-0", "pt-0"], [1, "d-flex", "justify-content-end"], [3, "buttonTemplate", "buttonTemplateVisible", "hasLayoutSelector", "isDisable", "componentName"], ["class", "row m-0", 4, "ngIf"], [4, "ngIf"], [1, "row", "m-0"], ["class", "col-11", 3, "formGroup", 4, "ngIf"], [1, "col-1"], [1, "col-2", "pl-2", "pr-0"], ["nbButton", "", "status", "success", 1, "w-100", "form-btn", 3, "click"], ["outline", "", "nbButton", "", "status", "basic", 1, "w-100", "form-btn", 3, "click"], [1, "col-11", 3, "formGroup"], ["formArrayName", "educations"], [4, "ngFor", "ngForOf"], [3, "formGroupName"], ["nbInput", "", "formControlName", "schoolName", "type", "text", "fullWidth", "", 1, "col-5", 3, "placeholder"], ["nbInput", "", "formControlName", "degree", "type", "text", "fullWidth", "", 1, "col-5", 3, "placeholder"], ["nbInput", "", "formControlName", "field", "type", "text", "fullWidth", "", 1, "col-5", 3, "placeholder"], ["readonly", "", "nbInput", "", "type", "text", "formControlName", "completionDate", "fullWidth", "", 1, "col-5", 3, "placeholder", "nbDatepicker"], ["nbInput", "", "formControlName", "notes", 1, "notes", "col-5", 3, "placeholder"], [1, "table-scroll-container"], ["style", "cursor: pointer", 3, "settings", "source", "userRowSelect", 4, "ngIf"], [2, "cursor", "pointer", 3, "userRowSelect", "settings", "source"], [3, "totalItems", "settings", "source", "onSelectedItem", 4, "ngIf"], [3, "onSelectedItem", "totalItems", "settings", "source"], ["class", "btn-group actions", 4, "ngIf"], [1, "btn-group", "actions"], ["nbButton", "", "status", "basic", "size", "small", 1, "action", "primary", 3, "click", "disabled"], ["icon", "edit-outline", 1, "mr-1"], ["nbButton", "", "status", "basic", "size", "small", 1, "action", 3, "click", "disabled", "nbTooltip"], ["status", "danger", "icon", "trash-2-outline"], ["nbButton", "", "status", "success", "class", "action", "size", "small", 3, "click", 4, "ngIf"], ["nbButton", "", "status", "success", "size", "small", 1, "action", 3, "click"], ["icon", "plus-outline"]],
      template: function EditCandidateEducationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-card", 4)(1, "nb-card-header", 5)(2, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(3, "ngx-gauzy-button-action", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(4, EditCandidateEducationComponent_div_4_Template, 11, 7, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(5, EditCandidateEducationComponent_nb_card_body_5_Template, 3, 1, "nb-card-body", 9)(6, EditCandidateEducationComponent_nb_card_body_6_Template, 2, 1, "nb-card-body", 9)(7, EditCandidateEducationComponent_ng_template_7_Template, 1, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplateRefExtractor"] */ .C5r);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(9, EditCandidateEducationComponent_ng_template_9_Template, 1, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplateRefExtractor"] */ .C5r);
        }
        if (rf & 2) {
          const actionButtons_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(8);
          const visibleButton_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("nbSpinner", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("buttonTemplate", actionButtons_r10)("buttonTemplateVisible", visibleButton_r11)("hasLayoutSelector", !ctx.showAddCard)("isDisable", ctx.disableButton)("componentName", ctx.viewComponentName);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.showAddCard);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.educationList == null ? null : ctx.educationList.length);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.educationList == null ? null : ctx.educationList.length);
        }
      },
      dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_15__/* .NbButtonComponent */ .YP2, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__/* .NbCardComponent */ .SrT, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__/* .NbCardBodyComponent */ .KH5, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__/* .NbCardHeaderComponent */ .zJv, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__/* .NbDatepickerDirective */ .OA9, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__/* .NbDatepickerComponent */ .k2z, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__/* .NbIconComponent */ .tHu, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__/* .NbInputDirective */ .i6h, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__/* .NbSpinnerDirective */ .zwc, _nebular_theme__WEBPACK_IMPORTED_MODULE_15__/* .NbTooltipDirective */ .BmQ, _angular_common__WEBPACK_IMPORTED_MODULE_16__/* .NgForOf */ .Sq, _angular_common__WEBPACK_IMPORTED_MODULE_16__/* .NgIf */ .bT, _angular_forms__WEBPACK_IMPORTED_MODULE_6__/* ["ɵNgNoValidate"] */ .qT, _angular_forms__WEBPACK_IMPORTED_MODULE_6__/* .DefaultValueAccessor */ .me, _angular_forms__WEBPACK_IMPORTED_MODULE_6__/* .NgControlStatus */ .BC, _angular_forms__WEBPACK_IMPORTED_MODULE_6__/* .NgControlStatusGroup */ .cb, _angular_forms__WEBPACK_IMPORTED_MODULE_6__/* .FormGroupDirective */ .j4, _angular_forms__WEBPACK_IMPORTED_MODULE_6__/* .FormControlName */ .JD, _angular_forms__WEBPACK_IMPORTED_MODULE_6__/* .FormGroupName */ .$R, _angular_forms__WEBPACK_IMPORTED_MODULE_6__/* .FormArrayName */ .v8, _packages_ui_core_shared_src_lib_card_grid_card_grid_component__WEBPACK_IMPORTED_MODULE_17__/* .CardGridComponent */ .c, angular2_smart_table__WEBPACK_IMPORTED_MODULE_2__/* .Angular2SmartTableComponent */ .T9, _packages_ui_core_shared_src_lib_gauzy_button_action_gauzy_button_action_component__WEBPACK_IMPORTED_MODULE_18__/* .GauzyButtonActionComponent */ .A, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__/* .TranslatePipe */ .D9],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.action[_ngcontent-%COMP%] {\n  box-shadow: var(--gauzy-shadow);\n  border: none;\n}\n.action[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}\n.action.info[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: var(--color-info-default);\n  color: white;\n  border-color: var(--color-info-default);\n}\n.action.info-text-1[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  color: var(--color-info-default);\n}\n.action.secondary[_ngcontent-%COMP%] {\n  color: #7e7e8f;\n}\n.action.success[_ngcontent-%COMP%] {\n  color: var(--color-success-default);\n}\n.action.warning[_ngcontent-%COMP%] {\n  color: rgb(245, 109, 88);\n}\n.action.orange[_ngcontent-%COMP%] {\n  color: rgb(255, 171, 45);\n}\n.action.primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n}\n.action.primary.soft[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: rgba(110, 73, 232, 0.1);\n}\n.action.select-nb[_ngcontent-%COMP%]     {\n  box-shadow: none;\n}\n.action.select-nb[_ngcontent-%COMP%]     .select-button {\n  box-shadow: var(--gauzy-shadow);\n  background: rgb(245, 245, 245);\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n.actions[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-2);\n  border-radius: var(--button-rectangle-border-radius);\n  padding: 2px 4px !important;\n}\n\n.gauzy-button-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n.card-custom-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n[_nghost-%COMP%]     input {\n  border-radius: var(--border-radius);\n  box-shadow: var(--gauzy-shadow) inset;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   i[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n}\n[dir=ltr]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n[dir=rtl]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--gauzy-text-color-1);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(245, 109, 88, 0.3);\n  border-width: 2px;\n  color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(245, 109, 88, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 16px;\n  letter-spacing: 0em;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(126, 126, 143, 0.3);\n  border-width: 2px;\n  color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(126, 126, 143, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(37, 184, 105, 0.3);\n  border-width: 2px;\n  color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(37, 184, 105, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[disabled][_ngcontent-%COMP%], \n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic.btn-disabled[_ngcontent-%COMP%] {\n  background-color: var(--button-outline-basic-disabled-background-color);\n  border-color: var(--button-outline-basic-disabled-border-color);\n  color: var(--button-outline-basic-disabled-text-color);\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].primary.appearance-filled.status-primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  border: unset;\n  background-color: var(--color-primary-transparent-default);\n  box-shadow: var(--gauzy-shadow) 0, 0, 0, 0.15;\n}\n[dir=ltr]   [_nghost-%COMP%]     input, \n[dir=ltr]   [_nghost-%COMP%]     textarea {\n  text-align: start;\n}\n[dir=rtl]   [_nghost-%COMP%]     input, \n[dir=rtl]   [_nghost-%COMP%]     textarea {\n  text-align: end;\n}\n[_nghost-%COMP%]     input, \n[_nghost-%COMP%]     nb-select.appearance-outline.status-basic .select-button, \n[_nghost-%COMP%]     .ng-select .ng-select-container {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n  height: 42px !important;\n}\n[_nghost-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder, \n[_nghost-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {\n  top: unset !important;\n}\n[_nghost-%COMP%]     label, \n[_nghost-%COMP%]     .label {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  color: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]     textarea {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n}\n[_nghost-%COMP%]     .ng-select .ng-select-container input, \n[_nghost-%COMP%]     nb-tag-list input {\n  background-color: unset !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n}\n\n.education-form[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n.notes[_ngcontent-%COMP%] {\n  max-width: 41.6666666667% !important;\n  margin: 0.5rem 1.5rem;\n}\n\ninput[_ngcontent-%COMP%] {\n  width: 90%;\n  margin: 0.5rem 1.5rem;\n}\n\n.form-btn[_ngcontent-%COMP%] {\n  margin: 0.5rem 0;\n}\n\n.education-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.education-line[_ngcontent-%COMP%] {\n  margin: 0.2rem 0;\n}\n\n.education-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n\n.header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.header[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  padding: 0px;\n}\n\nform[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n  border-radius: var(--border-radius);\n  padding: 1rem;\n}\n\n[_nghost-%COMP%]     input, \n[_nghost-%COMP%]     nb-select.appearance-outline.status-basic .select-button, \n[_nghost-%COMP%]     .ng-select .ng-select-container {\n  background-color: var(--gauzy-card-1) !important;\n  border: none;\n  height: 42px !important;\n}\n[_nghost-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder, \n[_nghost-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {\n  top: unset !important;\n}\n[_nghost-%COMP%]     label, \n[_nghost-%COMP%]     .label {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  color: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]     textarea {\n  background-color: var(--gauzy-card-1) !important;\n  border: none;\n}\n[_nghost-%COMP%]     .ng-select .ng-select-container input, \n[_nghost-%COMP%]     nb-tag-list input {\n  background-color: unset !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: transparent;\n}\n[_nghost-%COMP%]   .table-scroll-container[_ngcontent-%COMP%]     input, \n[_nghost-%COMP%]   .table-scroll-container[_ngcontent-%COMP%]     nb-select.appearance-outline.status-basic .select-button, \n[_nghost-%COMP%]   .table-scroll-container[_ngcontent-%COMP%]     .ng-select .ng-select-container {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n  height: 2rem !important;\n}\n[_nghost-%COMP%]   .table-scroll-container[_ngcontent-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder, \n[_nghost-%COMP%]   .table-scroll-container[_ngcontent-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {\n  top: unset !important;\n}\n[_nghost-%COMP%]   .table-scroll-container[_ngcontent-%COMP%]     label, \n[_nghost-%COMP%]   .table-scroll-container[_ngcontent-%COMP%]     .label {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  color: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]   .table-scroll-container[_ngcontent-%COMP%]     textarea {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n}\n[_nghost-%COMP%]   .table-scroll-container[_ngcontent-%COMP%]     .ng-select .ng-select-container input, \n[_nghost-%COMP%]   .table-scroll-container[_ngcontent-%COMP%]     nb-tag-list input {\n  background-color: unset !important;\n}"]
    });
  }
};
EditCandidateEducationComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_19__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .UntilDestroy */ .d)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_19__/* .__metadata */ .Sn)("design:paramtypes", [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_10__/* .ToastrService */ .t, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__/* .TranslateService */ .c$, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_12__/* .CandidateStore */ .R, _angular_forms__WEBPACK_IMPORTED_MODULE_6__/* .UntypedFormBuilder */ .ze, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_13__/* .Store */ .il, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_14__/* .CandidateEducationsService */ ._])], EditCandidateEducationComponent);


/***/ }),

/***/ 49177:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   i: () => (/* binding */ InterviewStarRatingComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _packages_ui_core_shared_src_lib_star_rating_star_rating_output_star_rating_output_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21838);


let InterviewStarRatingComponent = /*#__PURE__*/(() => {
  class InterviewStarRatingComponent {
    static {
      this.ɵfac = function InterviewStarRatingComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || InterviewStarRatingComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: InterviewStarRatingComponent,
        selectors: [["ga-interview-rating"]],
        inputs: {
          rowData: "rowData"
        },
        standalone: false,
        decls: 2,
        vars: 1,
        consts: [[1, "rating"], [3, "rate"]],
        template: function InterviewStarRatingComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "ga-star-rating-output", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("rate", ctx.rowData.rating);
          }
        },
        dependencies: [_packages_ui_core_shared_src_lib_star_rating_star_rating_output_star_rating_output_component__WEBPACK_IMPORTED_MODULE_1__/* .StarRatingOutputComponent */ .S],
        encapsulation: 2
      });
    }
  }
  return InterviewStarRatingComponent;
})();

/***/ }),

/***/ 49644:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ InterviewDateTableComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14572);


let InterviewDateTableComponent = /*#__PURE__*/(() => {
  class InterviewDateTableComponent {
    static {
      this.ɵfac = function InterviewDateTableComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || InterviewDateTableComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: InterviewDateTableComponent,
        selectors: [["ga-interview-date"]],
        inputs: {
          rowData: "rowData"
        },
        standalone: false,
        decls: 10,
        vars: 12,
        consts: [[1, "start-column"], [2, "text-align", "center"]],
        template: function InterviewDateTableComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 0)(1, "strong", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(3, "date");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(4, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(6, "date");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(7, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(9, "date");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI("", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind2"] */ .i5U(3, 3, ctx.rowData == null ? null : ctx.rowData.startTime, "shortDate"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind2"] */ .i5U(6, 6, ctx.rowData == null ? null : ctx.rowData.startTime, "shortTime"), "");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI("", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind2"] */ .i5U(9, 9, ctx.rowData == null ? null : ctx.rowData.endTime, "shortTime"), " ");
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .DatePipe */ .vh],
        styles: [".start-column[_ngcontent-%COMP%] {\n\t\t\t\tdisplay: flex;\n\t\t\t\tflex-direction: column;\n\t\t\t\tjustify-content: center;\n\t\t\t\talign-items: flex-start;\n\t\t\t}"]
      });
    }
  }
  return InterviewDateTableComponent;
})();

/***/ }),

/***/ 50023:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   J: () => (/* binding */ InterviewPanelComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(73014);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(64411);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(24237);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(72781);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(36950);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(19223);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(81236);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(71181);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(73246);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(9620);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(56383);
/* harmony import */ var angular2_smart_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52345);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(23423);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(26024);
/* harmony import */ var _table_components_rating_rating_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(49177);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(46076);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(71924);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(15480);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(90022);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(54263);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(84536);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(32629);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(88319);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(91081);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47108);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(76229);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(11459);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(78115);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(94251);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(15225);
/* harmony import */ var _table_components__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(49644);
/* harmony import */ var _table_components__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(37494);
/* harmony import */ var _table_components__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(41140);
/* harmony import */ var _table_components__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(33894);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(14572);
/* harmony import */ var _packages_ui_core_shared_src_lib_card_grid_card_grid_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(49517);
/* harmony import */ var _packages_ui_core_shared_src_lib_employee_employee_multi_select_employee_multi_select_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(57354);
/* harmony import */ var _packages_ui_core_shared_src_lib_gauzy_button_action_gauzy_button_action_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(45293);
/* harmony import */ var _packages_ui_core_shared_src_lib_smart_data_layout_pagination_pagination_v2_pagination_v2_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(3456);



























const _c0 = ["interviewsTable"];
function InterviewPanelComponent_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(1, "ga-employee-multi-select", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("selectedChange", function InterviewPanelComponent_ng_container_6_Template_ga_employee_multi_select_selectedChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r2.onEmployeeSelected($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("multiple", true)("label", false)("allEmployees", ctx_r2.employeeList)("reset", ctx_r2.isResetSelect);
  }
}
function InterviewPanelComponent_ng_template_18_ng_container_4_Template(rf, ctx) {
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
function InterviewPanelComponent_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 17)(1, "angular2-smart-table", 18, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("userRowSelect", function InterviewPanelComponent_ng_template_18_Template_angular2_smart_table_userRowSelect_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r2.selectInterview($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(3, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(4, InterviewPanelComponent_ng_template_18_ng_container_4_Template, 2, 1, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("settings", ctx_r2.settingsSmartTable)("source", ctx_r2.sourceSmartTable);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r2.smartTableSource);
  }
}
function InterviewPanelComponent_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 21)(1, "ga-card-grid", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("onSelectedItem", function InterviewPanelComponent_ng_template_19_Template_ga_card_grid_onSelectedItem_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r2.selectInterview($event));
    })("scroll", function InterviewPanelComponent_ng_template_19_Template_ga_card_grid_scroll_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r2.onScroll());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("totalItems", ctx_r2.pagination == null ? null : ctx_r2.pagination.totalItems)("settings", ctx_r2.settingsSmartTable)("source", ctx_r2.tableInterviewList);
  }
}
function InterviewPanelComponent_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function InterviewPanelComponent_ng_template_21_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r6);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r2.addInterview());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "nb-icon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(3, 1, "CANDIDATES_PAGE.EDIT_CANDIDATE.INTERVIEW.ADD_INTERVIEW"), " ");
  }
}
function InterviewPanelComponent_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 25)(1, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function InterviewPanelComponent_ng_template_23_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r7);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r2.addFeedback(ctx_r2.selectedInterview));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(2, "nb-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(5, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function InterviewPanelComponent_ng_template_23_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r7);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r2.editInterview(ctx_r2.selectedInterview == null ? null : ctx_r2.selectedInterview.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(6, "nb-icon", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(9, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function InterviewPanelComponent_ng_template_23_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r7);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r2.archive(ctx_r2.selectedInterview));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(10, "nb-icon", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(13, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function InterviewPanelComponent_ng_template_23_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r7);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r2.removeInterview(ctx_r2.selectedInterview == null ? null : ctx_r2.selectedInterview.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(15, "nb-icon", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(4, 4, "BUTTONS.FEEDBACK"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(8, 6, "BUTTONS.EDIT"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(12, 8, "BUTTONS.ARCHIVE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(14, 10, "BUTTONS.DELETE"));
  }
}
let InterviewPanelComponent = class InterviewPanelComponent extends _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_1__/* .PaginationFilterBaseComponent */ .t {
  constructor(dialogService, translateService, store, toastrService, candidateInterviewService, router, errorHandler, candidateStore, candidatesService, employeesService, candidateFeedbacksService) {
    super(translateService);
    this.dialogService = dialogService;
    this.translateService = translateService;
    this.store = store;
    this.toastrService = toastrService;
    this.candidateInterviewService = candidateInterviewService;
    this.router = router;
    this.errorHandler = errorHandler;
    this.candidateStore = candidateStore;
    this.candidatesService = candidatesService;
    this.employeesService = employeesService;
    this.candidateFeedbacksService = candidateFeedbacksService;
    this.tableInterviewList = [];
    this.includeArchived = false;
    this.onlyPast = false;
    this.onlyFuture = false;
    this.sourceSmartTable = new angular2_smart_table__WEBPACK_IMPORTED_MODULE_2__/* .LocalDataSource */ .h0();
    this.selectedEmployees = [];
    this.dataLayoutStyle = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__/* .ComponentLayoutStyleEnum */ .IE.TABLE;
    this.disabled = true;
    this._refresh$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__/* .Subject */ .B();
    this.setView();
  }
  ngOnInit() {
    this._loadSmartTableSettings();
    this._applyTranslationOnSmartTable();
    this.subject$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .debounceTime */ .B)(300), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .M)(() => this.loadInterviews()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__/* .untilDestroyed */ .s)(this)).subscribe();
    this.pagination$.pipe((0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_8__/* .distinctUntilChange */ .nI)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .M)(() => this.subject$.next(true)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__/* .untilDestroyed */ .s)(this)).subscribe();
    this.store.selectedOrganization$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .debounceTime */ .B)(300), (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_8__/* .distinctUntilChange */ .nI)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__/* .filter */ .p)(organization => !!organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .M)(organization => this.organization = organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .M)(() => this._refresh$.next(true)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .M)(() => this.subject$.next(true)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__/* .untilDestroyed */ .s)(this)).subscribe(organization => {
      if (organization) {
        this.getCandidates();
        this.candidateStore.interviewList$.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__/* .untilDestroyed */ .s)(this)).subscribe();
      }
    });
    this._refresh$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__/* .filter */ .p)(() => this.dataLayoutStyle === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__/* .ComponentLayoutStyleEnum */ .IE.CARDS_GRID), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .M)(() => this.refreshPagination()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .M)(() => this.tableInterviewList = []), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__/* .untilDestroyed */ .s)(this)).subscribe();
  }
  /**
   *
   * @returns
   */
  getCandidates() {
    if (!this.organization) {
      return;
    }
    const {
      id: organizationId,
      tenantId
    } = this.organization;
    const candidates$ = this.candidatesService.getAll(['user'], {
      organizationId,
      tenantId
    });
    candidates$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .M)(({
      items
    }) => this.candidates = items), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__/* .untilDestroyed */ .s)(this)).subscribe();
  }
  onEmployeeSelected(empIds) {
    this.selectedEmployees = empIds;
    this.interviewList = this.findByEmployee(this.allInterviews);
    const tableList = this.findByEmployee(this.tableInterviewList);
    this.sourceSmartTable.load(tableList);
    this._loadGridLayoutData();
    this.setPagination({
      ...this.getPagination(),
      totalItems: this.sourceSmartTable.count()
    });
  }
  findByEmployee(list) {
    if (!this.selectedEmployees[0]) {
      this.interviewList = list;
    } else {
      const result = [];
      list.forEach(interview => {
        interview.interviewers.forEach(interviewer => {
          this.selectedEmployees.forEach(item => {
            if (item === interviewer.employeeId && !result.includes(interview)) {
              result.push(interview);
            }
          });
        });
      });
      this.interviewList = result;
    }
    return this.interviewList;
  }
  loadInterviews() {
    var _this = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A)(function* () {
      if (!_this.organization) {
        return;
      }
      const {
        id: organizationId,
        tenantId
      } = _this.organization;
      try {
        _this.loading = true;
        const {
          activePage,
          itemsPerPage
        } = _this.getPagination();
        const res = yield _this.candidateFeedbacksService.getAll(['interviewer'], {
          organizationId,
          tenantId
        });
        if (res) {
          _this.allFeedbacks = res.items;
        }
        const {
          items
        } = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_11__/* .firstValueFrom */ ._)(_this.employeesService.getAll(['user'], {
          organizationId,
          tenantId
        }));
        _this.employeeList = items;
        const interviews = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_11__/* .firstValueFrom */ ._)(_this.candidateInterviewService.getAll(['feedbacks', 'interviewers', 'technologies', 'personalQualities', 'candidate'], {
          organizationId,
          tenantId
        }));
        if (interviews) {
          _this.interviewList = interviews.items;
          _this.allInterviews = interviews.items;
          let tableInterviewList = [];
          const result = [];
          _this.interviewList.forEach(interview => {
            const employees = [];
            interview.interviewers.forEach(interviewer => {
              _this.employeeList.forEach(employee => {
                if (interviewer.employeeId === employee.id) {
                  interviewer.employeeImageUrl = employee.user.imageUrl;
                  interviewer.employeeName = employee.user.name;
                  employees.push(employee);
                }
              });
            });
            _this.candidates.forEach(candidate => {
              if (candidate.id === interview?.candidate?.id) {
                interview.candidate.user = candidate.user;
                result.push({
                  ...interview,
                  fullName: candidate.user.name,
                  imageUrl: candidate.user.imageUrl,
                  employees: employees,
                  showArchive: true,
                  allFeedbacks: _this.allFeedbacks,
                  hideActions: true
                });
              }
            });
          });
          // for grid view
          _this.interviewList = _this.onlyPast ? _this.filterInterviewByTime(_this.interviewList, true) : _this.interviewList;
          _this.interviewList = _this.onlyFuture ? _this.filterInterviewByTime(_this.interviewList, false) : _this.interviewList;
          _this.interviewList = _this.includeArchivedCheck(_this.includeArchived, _this.interviewList);
          //for table view
          tableInterviewList = _this.includeArchivedCheck(_this.includeArchived, result);
          tableInterviewList = _this.onlyPast ? _this.filterInterviewByTime(tableInterviewList, true) : tableInterviewList;
          tableInterviewList = _this.onlyFuture ? _this.filterInterviewByTime(tableInterviewList, false) : tableInterviewList;
          _this.sourceSmartTable.setPaging(activePage, itemsPerPage, false);
          _this.sourceSmartTable.load(_this._getUniquesById(tableInterviewList));
          _this._loadGridLayoutData();
          _this.setPagination({
            ..._this.getPagination(),
            totalItems: _this.sourceSmartTable.count()
          });
        }
      } catch (error) {
        console.log('Error while getting candidate interviews', error);
      } finally {
        _this.loading = false;
      }
    })();
  }
  _getUniquesById(array) {
    return array.filter((value, index, self) => index === self.findIndex(({
      id
    }) => id === value.id));
  }
  _loadGridLayoutData() {
    var _this2 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A)(function* () {
      if (_this2.dataLayoutStyle === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__/* .ComponentLayoutStyleEnum */ .IE.CARDS_GRID) {
        _this2.tableInterviewList.push(...(yield _this2.sourceSmartTable.getElements()));
        _this2.tableInterviewList = _this2._getUniquesById(_this2.tableInterviewList);
      }
    })();
  }
  filterInterviewByTime(list, isPast) {
    const now = new Date().getTime();
    return list.filter(item => isPast ? new Date(item.startTime).getTime() < now : new Date(item.startTime).getTime() > now);
  }
  includeArchivedCheck(includeArchived, list) {
    let res = [];
    if (!includeArchived) {
      list.forEach(interview => {
        if (!interview.isArchived) {
          res.push(interview);
        }
      });
    } else {
      res = list;
    }
    return res;
  }
  _loadSmartTableSettings() {
    const pagination = this.getPagination();
    this.settingsSmartTable = {
      actions: false,
      noDataMessage: this.getTranslation('SM_TABLE.NO_DATA.INTERVIEW'),
      pager: {
        display: false,
        perPage: pagination ? pagination.itemsPerPage : this.minItemPerPage
      },
      columns: {
        fullName: {
          title: this.getTranslation('CANDIDATES_PAGE.MANAGE_INTERVIEWS.CANDIDATE'),
          type: 'custom',
          class: 'align-row',
          renderComponent: _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_12__/* .PictureNameTagsComponent */ .O,
          componentInitFunction: (instance, cell) => {
            instance.rowData = cell.getRow().getData();
            instance.value = cell.getValue();
          }
        },
        title: {
          title: this.getTranslation('CANDIDATES_PAGE.MANAGE_INTERVIEWS.TITLE'),
          type: 'string'
        },
        date: {
          title: this.getTranslation('CANDIDATES_PAGE.MANAGE_INTERVIEWS.DATE'),
          type: 'custom',
          width: '120px',
          isFilterable: false,
          renderComponent: _table_components__WEBPACK_IMPORTED_MODULE_13__/* .InterviewDateTableComponent */ .F,
          componentInitFunction: (instance, cell) => {
            instance.rowData = cell.getRow().getData();
          }
        },
        rating: {
          title: this.getTranslation('CANDIDATES_PAGE.MANAGE_INTERVIEWS.RATING'),
          type: 'custom',
          isFilterable: false,
          renderComponent: _table_components_rating_rating_component__WEBPACK_IMPORTED_MODULE_14__/* .InterviewStarRatingComponent */ .i,
          componentInitFunction: (instance, cell) => {
            instance.rowData = cell.getRow().getData();
          }
        },
        employees: {
          title: this.getTranslation('CANDIDATES_PAGE.MANAGE_INTERVIEWS.INTERVIEWERS'),
          type: 'custom',
          width: '155px',
          isFilterable: false,
          renderComponent: _table_components__WEBPACK_IMPORTED_MODULE_15__/* .InterviewersTableComponent */ .n,
          componentInitFunction: (instance, cell) => {
            instance.rowData = cell.getRow().getData();
          }
        },
        criterions: {
          title: this.getTranslation('CANDIDATES_PAGE.MANAGE_INTERVIEWS.CRITERIONS'),
          type: 'custom',
          isFilterable: false,
          renderComponent: _table_components__WEBPACK_IMPORTED_MODULE_16__/* .InterviewCriterionsTableComponent */ .F,
          componentInitFunction: (instance, cell) => {
            instance.rowData = cell.getRow().getData();
          }
        },
        location: {
          title: this.getTranslation('CANDIDATES_PAGE.MANAGE_INTERVIEWS.LOCATION'),
          type: 'string'
        },
        note: {
          title: this.getTranslation('CANDIDATES_PAGE.MANAGE_INTERVIEWS.NOTES'),
          type: 'string',
          isFilterable: false
        },
        actions: {
          title: this.getTranslation('SM_TABLE.LAST_UPDATED'),
          width: '10%',
          type: 'custom',
          isFilterable: false,
          renderComponent: _table_components__WEBPACK_IMPORTED_MODULE_17__/* .InterviewActionsTableComponent */ .O,
          componentInitFunction: (instance, cell) => {
            instance.rowData = cell.getRow().getData();
            instance.updateResult.subscribe(params => {
              switch (params.type) {
                case 'feedback':
                  this.addFeedback(params.data);
                  break;
                case 'archive':
                  this.archive(params.data);
                  break;
                case 'edit':
                  this.editInterview(params.data.id);
                  break;
                case 'remove':
                  this.removeInterview(params.data.id);
                  break;
              }
            });
          }
        }
      }
    };
  }
  setView() {
    this.viewComponentName = _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_18__/* .ComponentEnum */ .L.TEAMS;
    this.store.componentLayout$(this.viewComponentName).pipe((0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_8__/* .distinctUntilChange */ .nI)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .M)(componentLayout => this.dataLayoutStyle = componentLayout), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .M)(() => this.refreshPagination()), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__/* .filter */ .p)(() => this.dataLayoutStyle === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__/* .ComponentLayoutStyleEnum */ .IE.CARDS_GRID), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .M)(() => this.tableInterviewList = []), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .M)(() => this.subject$.next(true)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__/* .untilDestroyed */ .s)(this)).subscribe();
  }
  changeIncludeArchived(checked) {
    this.includeArchived = checked;
    this._refresh$.next(true);
    this.subject$.next(true);
  }
  changePast(checked) {
    this.onlyPast = checked;
    if (this.onlyFuture) {
      this.onlyFuture = false;
    }
    this._refresh$.next(true);
    this.subject$.next(true);
  }
  changeFuture(checked) {
    this.onlyFuture = checked;
    if (this.onlyPast) {
      this.onlyPast = false;
    }
    this._refresh$.next(true);
    this.subject$.next(true);
  }
  addFeedback(interview) {
    var _this3 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A)(function* () {
      if (!_this3.isPastInterview(interview)) {
        _this3.toastrService.warning('CANDIDATES_PAGE.MANAGE_INTERVIEWS.FEEDBACK_PROHIBIT');
      } else {
        if (interview.feedbacks.length !== interview.interviewers.length) {
          const dialog = _this3.dialogService.open(_gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_19__/* .CandidateInterviewFeedbackComponent */ .x, {
            context: {
              currentInterview: interview,
              candidateId: interview.candidate.id,
              interviewId: interview.id
            }
          });
          const data = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_11__/* .firstValueFrom */ ._)(dialog.onClose);
          if (data) {
            _this3._refresh$.next(true);
            _this3.subject$.next(true);
            _this3.toastrService.success('TOASTR.MESSAGE.INTERVIEW_FEEDBACK_CREATED', {
              name: interview.title
            });
          }
        } else {
          _this3.toastrService.warning('TOASTR.MESSAGE.CANDIDATE_FEEDBACK_ABILITY');
        }
      }
    })();
  }
  archive(interview) {
    var _this4 = this;
    if (interview.isArchived) {
      this.toastrService.warning('TOASTR.MESSAGE.ARCHIVE_INTERVIEW');
    } else {
      this.dialogService.open(_gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_20__/* .ArchiveConfirmationComponent */ .x, {
        context: {
          recordType: `${interview.title}`
        }
      }).onClose.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__/* .untilDestroyed */ .s)(this)).subscribe(/*#__PURE__*/function () {
        var _ref = (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A)(function* (result) {
          if (result) {
            try {
              yield _this4.candidateInterviewService.setInterviewAsArchived(interview.id);
              _this4.toastrService.success('TOASTR.MESSAGE.ARCHIVE_INTERVIEW_SET', {
                name: interview.title
              });
              _this4._refresh$.next(true);
              _this4.subject$.next(true);
            } catch (error) {
              _this4.errorHandler.handleError(error);
            }
          }
        });
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    }
  }
  editInterview(id) {
    var _this5 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A)(function* () {
      const currentInterview = _this5.interviewList.find(item => item.id === id);
      if (_this5.isPastInterview(currentInterview)) {
        _this5.toastrService.warning('TOASTR.MESSAGE.EDIT_PAST_INTERVIEW');
      } else {
        const {
          id: organizationId,
          tenantId
        } = _this5.organization;
        const candidate = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_11__/* .firstValueFrom */ ._)(_this5.candidatesService.getAll(['user'], {
          id: currentInterview.candidate.id,
          organizationId,
          tenantId
        }));
        const dialog = _this5.dialogService.open(_gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_21__/* .CandidateInterviewMutationComponent */ .X, {
          context: {
            headerTitle: _this5.getTranslation('CANDIDATES_PAGE.EDIT_CANDIDATE.INTERVIEW.EDIT_INTERVIEW'),
            editData: currentInterview,
            selectedCandidate: candidate.items[0],
            interviewId: id,
            interviews: _this5.interviewList
          }
        });
        const data = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_11__/* .firstValueFrom */ ._)(dialog.onClose);
        if (data) {
          _this5.toastrService.success('TOASTR.MESSAGE.INTERVIEW_UPDATED', {
            name: data.title
          });
          _this5._refresh$.next(true);
          _this5.subject$.next(true);
        }
      }
    })();
  }
  removeInterview(id) {
    var _this6 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A)(function* () {
      const currentInterview = _this6.interviewList.find(item => item.id === id);
      if (_this6.isPastInterview(currentInterview)) {
        _this6.toastrService.warning('TOASTR.MESSAGE.DELETE_PAST_INTERVIEW');
      } else {
        const dialog = _this6.dialogService.open(_gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_22__/* .DeleteInterviewComponent */ .C, {
          context: {
            interview: currentInterview
          }
        });
        const data = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_11__/* .firstValueFrom */ ._)(dialog.onClose);
        if (data) {
          _this6.toastrService.success('TOASTR.MESSAGE.INTERVIEW_DELETED', {
            name: data.title
          });
          _this6._refresh$.next(true);
          _this6.subject$.next(true);
        }
      }
    })();
  }
  goToCandidate(id) {
    this.router.navigate([`/pages/employees/candidates/edit/${id}/profile`]);
  }
  isPastInterview(interview) {
    const now = new Date().getTime();
    if (new Date(interview.startTime).getTime() > now) {
      return false;
    } else {
      return true;
    }
  }
  openEmployees(id) {
    this.router.navigate([`/pages/employees/edit/${id}`]);
  }
  ngOnDestroy() {}
  _applyTranslationOnSmartTable() {
    this.translateService.onLangChange.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .M)(() => this._loadSmartTableSettings()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__/* .untilDestroyed */ .s)(this)).subscribe();
  }
  selectInterview(interview) {
    this.selectedInterview = interview.data;
    this.disabled = !interview.isSelected;
  }
  addInterview() {
    var _this7 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A)(function* () {
      const dialog = _this7.dialogService.open(_gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_21__/* .CandidateInterviewMutationComponent */ .X, {
        context: {
          headerTitle: _this7.getTranslation('CANDIDATES_PAGE.EDIT_CANDIDATE.INTERVIEW.SCHEDULE_INTERVIEW'),
          isCalendar: true,
          interviews: _this7.interviewList
        }
      });
      const data = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_11__/* .firstValueFrom */ ._)(dialog.onClose);
      if (data) {
        _this7.toastrService.success(`TOASTR.MESSAGE.CANDIDATE_EDIT_CREATED`, {
          name: data.title
        });
      }
      _this7._refresh$.next(true);
      _this7.subject$.next(true);
    })();
  }
  static {
    this.ɵfac = function InterviewPanelComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || InterviewPanelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_nebular_theme__WEBPACK_IMPORTED_MODULE_23__/* .NbDialogService */ .S0W), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__/* .TranslateService */ .c$), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_25__/* .Store */ .il), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_26__/* .ToastrService */ .t), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_27__/* .CandidateInterviewService */ .C), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_router__WEBPACK_IMPORTED_MODULE_28__/* .Router */ .Ix), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_29__/* .ErrorHandlingService */ .X), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_30__/* .CandidateStore */ .R), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_31__/* .CandidatesService */ .S), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_32__/* .EmployeesService */ .r), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_33__/* .CandidateFeedbacksService */ .R));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
      type: InterviewPanelComponent,
      selectors: [["ga-interview-panel"]],
      viewQuery: function InterviewPanelComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵviewQuery"] */ .GBs(_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵqueryRefresh"] */ .mGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵloadQuery"] */ .lsd()) && (ctx.interviewsTable = _t.first);
        }
      },
      standalone: false,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
      decls: 25,
      vars: 19,
      consts: [["gridLayout", ""], ["visible", ""], ["actions", ""], ["interviewsTable", ""], [1, "card"], [1, "card-header"], [1, "d-flex", "flex-column"], [1, "d-flex", "flex-column", "align-items-end", "gauzy-action", "mt-2"], [3, "buttonTemplate", "buttonTemplateVisible", "componentName", "isDisable"], [1, "header"], [4, "ngIf"], [1, "btn"], ["status", "basic", 3, "checkedChange", "checked"], ["status", "basic", 3, "checkedChange"], ["nbSpinnerSize", "giant", "nbSpinnerStatus", "primary", 1, "card-body", "d-flex", "flex-column", "justify-content-between", "interview-panel", 3, "nbSpinner"], [3, "ngIf", "ngIfElse"], [1, "select", 3, "selectedChange", "multiple", "label", "allEmployees", "reset"], [1, "table-scroll-container", "custom-table"], [1, "interviews-table", 2, "cursor", "pointer", 3, "userRowSelect", "settings", "source"], [1, "pagination-container"], [3, "source"], [1, "custom-grid"], [3, "onSelectedItem", "scroll", "totalItems", "settings", "source"], ["nbButton", "", "status", "primary", "size", "small", 1, "action", 3, "click"], ["icon", "plus-outline"], [1, "btn-group", "actions"], ["nbButton", "", "status", "basic", "size", "small", 1, "action", "secondary", 3, "click"], ["icon", "message-square-outline", 1, "mr-1"], ["nbButton", "", "status", "basic", "size", "small", 1, "action", "primary", 3, "click"], ["icon", "edit-outline", 1, "mr-1"], ["icon", "archive-outline", 1, "mr-1"], ["nbButton", "", "status", "basic", "size", "small", 1, "action", 3, "click", "nbTooltip"], ["status", "danger", "icon", "trash-2-outline"]],
      template: function InterviewPanelComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-card-body", 4)(1, "div", 5)(2, "div", 6)(3, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(4, "ngx-gauzy-button-action", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(5, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(6, InterviewPanelComponent_ng_container_6_Template, 2, 4, "ng-container", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(7, "div", 11)(8, "nb-checkbox", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("checkedChange", function InterviewPanelComponent_Template_nb_checkbox_checkedChange_8_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx.changePast($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(10, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(11, "nb-checkbox", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("checkedChange", function InterviewPanelComponent_Template_nb_checkbox_checkedChange_11_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx.changeFuture($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(13, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(14, "nb-checkbox", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("checkedChange", function InterviewPanelComponent_Template_nb_checkbox_checkedChange_14_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx.changeIncludeArchived($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(16, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(17, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(18, InterviewPanelComponent_ng_template_18_Template, 5, 3, "ng-template", 15)(19, InterviewPanelComponent_ng_template_19_Template, 2, 3, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplateRefExtractor"] */ .C5r);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(21, InterviewPanelComponent_ng_template_21_Template, 4, 3, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplateRefExtractor"] */ .C5r)(23, InterviewPanelComponent_ng_template_23_Template, 16, 12, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplateRefExtractor"] */ .C5r);
        }
        if (rf & 2) {
          const gridLayout_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(20);
          const visible_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(22);
          const actions_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(24);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("buttonTemplate", actions_r10)("buttonTemplateVisible", visible_r9)("componentName", ctx.viewComponentName)("isDisable", ctx.disabled);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", (ctx.allInterviews == null ? null : ctx.allInterviews.length) > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("checked", ctx.onlyPast);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(10, 13, "FORM.CHECKBOXES.ONLY_PAST"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("checked", ctx.onlyFuture);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(13, 15, "FORM.CHECKBOXES.ONLY_FUTURE"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(16, 17, "FORM.CHECKBOXES.INCLUDE_ARCHIVED"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("nbSpinner", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.dataLayoutStyle === "TABLE")("ngIfElse", gridLayout_r8);
        }
      },
      dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_23__/* .NbButtonComponent */ .YP2, _nebular_theme__WEBPACK_IMPORTED_MODULE_23__/* .NbCardBodyComponent */ .KH5, _nebular_theme__WEBPACK_IMPORTED_MODULE_23__/* .NbCheckboxComponent */ .DMy, _nebular_theme__WEBPACK_IMPORTED_MODULE_23__/* .NbIconComponent */ .tHu, _nebular_theme__WEBPACK_IMPORTED_MODULE_23__/* .NbSpinnerDirective */ .zwc, _nebular_theme__WEBPACK_IMPORTED_MODULE_23__/* .NbTooltipDirective */ .BmQ, _angular_common__WEBPACK_IMPORTED_MODULE_34__/* .NgIf */ .bT, _packages_ui_core_shared_src_lib_card_grid_card_grid_component__WEBPACK_IMPORTED_MODULE_35__/* .CardGridComponent */ .c, _packages_ui_core_shared_src_lib_employee_employee_multi_select_employee_multi_select_component__WEBPACK_IMPORTED_MODULE_36__/* .EmployeeSelectComponent */ .O, angular2_smart_table__WEBPACK_IMPORTED_MODULE_2__/* .Angular2SmartTableComponent */ .T9, _packages_ui_core_shared_src_lib_gauzy_button_action_gauzy_button_action_component__WEBPACK_IMPORTED_MODULE_37__/* .GauzyButtonActionComponent */ .A, _packages_ui_core_shared_src_lib_smart_data_layout_pagination_pagination_v2_pagination_v2_component__WEBPACK_IMPORTED_MODULE_38__/* .PaginationV2Component */ .a, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__/* .TranslatePipe */ .D9],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.action[_ngcontent-%COMP%] {\n  box-shadow: var(--gauzy-shadow);\n  border: none;\n}\n.action[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}\n.action.info[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: var(--color-info-default);\n  color: white;\n  border-color: var(--color-info-default);\n}\n.action.info-text-1[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  color: var(--color-info-default);\n}\n.action.secondary[_ngcontent-%COMP%] {\n  color: #7e7e8f;\n}\n.action.success[_ngcontent-%COMP%] {\n  color: var(--color-success-default);\n}\n.action.warning[_ngcontent-%COMP%] {\n  color: rgb(245, 109, 88);\n}\n.action.orange[_ngcontent-%COMP%] {\n  color: rgb(255, 171, 45);\n}\n.action.primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n}\n.action.primary.soft[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: rgba(110, 73, 232, 0.1);\n}\n.action.select-nb[_ngcontent-%COMP%]     {\n  box-shadow: none;\n}\n.action.select-nb[_ngcontent-%COMP%]     .select-button {\n  box-shadow: var(--gauzy-shadow);\n  background: rgb(245, 245, 245);\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n.actions[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-2);\n  border-radius: var(--button-rectangle-border-radius);\n  padding: 2px 4px !important;\n}\n\n.gauzy-button-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n.card-custom-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n[_nghost-%COMP%]     input {\n  border-radius: var(--border-radius);\n  box-shadow: var(--gauzy-shadow) inset;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: stretch;\n  width: 100%;\n  border: none;\n  padding: 0;\n  overflow: unset;\n  background-color: var(--gauzy-card-2);\n}\n[_nghost-%COMP%]   .card-filter[_ngcontent-%COMP%] {\n  padding-bottom: 1.5rem;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n}\n\n.card-header[_ngcontent-%COMP%] {\n  background: unset;\n}\n\n.header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n}\n.header[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 1rem;\n}\n\n.select[_ngcontent-%COMP%] {\n  width: 18rem;\n}\n\n[_nghost-%COMP%]   .card-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n[_nghost-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 300px;\n}\n[_nghost-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  padding: 0.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n[_nghost-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-header-badge[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n}\n[_nghost-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%] {\n  text-align: center;\n}\n[_nghost-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .interview-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 0.5rem;\n}\n[_nghost-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .interview-card[_ngcontent-%COMP%]   .name-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 10px;\n}\n[_nghost-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .interview-card[_ngcontent-%COMP%]   .name-container[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  color: #3366ff;\n}\n[_nghost-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .interview-card[_ngcontent-%COMP%]   .name-container[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%] {\n  width: 70px;\n  height: 50px;\n  display: flex;\n  justify-content: center;\n}\n[dir=ltr]   [_nghost-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .interview-card[_ngcontent-%COMP%]   .name-container[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n[dir=rtl]   [_nghost-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .interview-card[_ngcontent-%COMP%]   .name-container[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n[_nghost-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .interview-card[_ngcontent-%COMP%]   .name-container[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100%;\n  max-width: 70px;\n}\n[_nghost-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .interview-card[_ngcontent-%COMP%]   .team-members[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\n[_nghost-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: auto;\n  flex-wrap: wrap;\n}\n\n.btn[_ngcontent-%COMP%] {\n  margin: 0.2rem;\n}\n\n.badge-warning[_ngcontent-%COMP%] {\n  background-color: #fa0;\n}\n\n.badge-primary[_ngcontent-%COMP%] {\n  background-color: #0095ff;\n}\n\n.badge[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 5px;\n  margin-left: 0.2rem;\n}\n\n.client-info[_ngcontent-%COMP%] {\n  padding: 0px 12px;\n  display: flex;\n  flex-direction: column;\n}\n.client-info[_ngcontent-%COMP%]   .info-line[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  font-size: 0.7em;\n  color: darkgray;\n}\n.client-info[_ngcontent-%COMP%]   .info-line[_ngcontent-%COMP%]   .info-value[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  text-align: end;\n}\n.client-info[_ngcontent-%COMP%]   .info-line[_ngcontent-%COMP%]   .info-value[_ngcontent-%COMP%]   .info-list-item[_ngcontent-%COMP%]:not(:last-child)::after {\n  content: \",\";\n}\n[dir=ltr][_ngcontent-%COMP%]   .client-info[_ngcontent-%COMP%]   .info-line[_ngcontent-%COMP%]   .info-value[_ngcontent-%COMP%]   .info-list-item[_ngcontent-%COMP%]:not(:last-child)::after {\n  margin-right: 5px;\n}\n[dir=rtl][_ngcontent-%COMP%]   .client-info[_ngcontent-%COMP%]   .info-line[_ngcontent-%COMP%]   .info-value[_ngcontent-%COMP%]   .info-list-item[_ngcontent-%COMP%]:not(:last-child)::after {\n  margin-left: 5px;\n}\n.client-info[_ngcontent-%COMP%]   .info-line[_ngcontent-%COMP%]   .criterions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  text-align: end;\n}\n\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  height: 100%;\n  border-radius: var(--border-radius);\n  border: unset;\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  flex: 0 1 auto;\n  border-bottom: unset;\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  overflow: unset;\n  height: calc(100vh - var(--header-height) - var(--footer-height) - 11.5rem);\n  background-color: var(--gauzy-card-2);\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%] {\n  border: unset;\n  flex: 0 1 auto;\n}\n[_nghost-%COMP%]   .custom-table[_ngcontent-%COMP%] {\n  max-height: unset;\n}\n[_nghost-%COMP%]   .custom-grid[_ngcontent-%COMP%] {\n  height: 100%;\n  overflow-y: auto;\n}\n[_nghost-%COMP%]     .header nb-select.shape-rectangle .select-button {\n  border-radius: calc(var(--button-rectangle-border-radius) / 1.625);\n  box-shadow: var(--gauzy-shadow);\n  height: 2rem;\n  display: flex;\n  align-items: center;\n  border: none;\n}\n[_nghost-%COMP%]     .header nb-select.appearance-outline.size-medium .select-button {\n  border: none;\n}\n[_nghost-%COMP%]     .header nb-select button span {\n  display: block;\n  overflow-x: hidden;\n  text-overflow: ellipsis;\n}\n\n[_nghost-%COMP%]   .gauzy-action[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -4.5rem;\n}\n[dir=ltr]   [_nghost-%COMP%]   .gauzy-action[_ngcontent-%COMP%] {\n  right: 1rem;\n}\n[dir=rtl]   [_nghost-%COMP%]   .gauzy-action[_ngcontent-%COMP%] {\n  left: 1rem;\n}\n\n.no-data-found[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n[dir=ltr]   [_nghost-%COMP%]   .interview-panel[_ngcontent-%COMP%] {\n  padding-right: 0.5rem !important;\n}\n[dir=rtl]   [_nghost-%COMP%]   .interview-panel[_ngcontent-%COMP%] {\n  padding-left: 0.5rem !important;\n}"]
    });
  }
};
InterviewPanelComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_39__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__/* .UntilDestroy */ .d)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_39__/* .__metadata */ .Sn)("design:paramtypes", [_nebular_theme__WEBPACK_IMPORTED_MODULE_23__/* .NbDialogService */ .S0W, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__/* .TranslateService */ .c$, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_25__/* .Store */ .il, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_26__/* .ToastrService */ .t, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_27__/* .CandidateInterviewService */ .C, _angular_router__WEBPACK_IMPORTED_MODULE_28__/* .Router */ .Ix, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_29__/* .ErrorHandlingService */ .X, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_30__/* .CandidateStore */ .R, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_31__/* .CandidatesService */ .S, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_32__/* .EmployeesService */ .r, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_33__/* .CandidateFeedbacksService */ .R])], InterviewPanelComponent);


/***/ }),

/***/ 53178:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* binding */ CandidateStatisticComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(64411);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(50666);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(72781);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(29421);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(87081);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(47060);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(23423);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(32629);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(90022);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(88319);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(71924);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(54263);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(26024);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(26860);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(56383);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(14572);
/* harmony import */ var _packages_ui_core_shared_src_lib_components_back_navigation_back_navigation_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(90910);
/* harmony import */ var _packages_ui_core_shared_src_lib_components_header_title_header_title_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(49072);
/* harmony import */ var _candidate_statistic_charts_overall_rating_chart_overall_rating_chart_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35334);
/* harmony import */ var _candidate_statistic_charts_criterions_rating_chart_criterions_rating_chart_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16736);
/* harmony import */ var _candidate_statistic_charts_interview_rating_chart_interview_rating_chart_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(89269);
/* harmony import */ var _candidate_statistic_charts_average_criterions_rating_chart_average_criterions_rating_chart_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(54216);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(19223);

















function CandidateStatisticComponent_ng_container_15_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelement"] */ .nrm(0, "ga-overall-rating-chart", 5);
  }
  if (rf & 2) {
    const candidates_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .XpG().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Y8G("candidates", candidates_r1);
  }
}
function CandidateStatisticComponent_ng_container_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .DNE(1, CandidateStatisticComponent_ng_container_15_ng_template_1_Template, 1, 1, "ng-template", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const candidates_r1 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Y8G("ngIf", candidates_r1.length > 0);
  }
}
function CandidateStatisticComponent_ng_container_23_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelement"] */ .nrm(0, "ga-interview-rating-chart", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .nI1(1, "async");
  }
  if (rf & 2) {
    const candidates_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .XpG().ngIf;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Y8G("candidates", candidates_r2)("employees", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .bMT(1, 2, ctx_r2.employees$));
  }
}
function CandidateStatisticComponent_ng_container_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .DNE(1, CandidateStatisticComponent_ng_container_23_ng_template_1_Template, 2, 4, "ng-template", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const candidates_r2 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Y8G("ngIf", candidates_r2.length > 0);
  }
}
function CandidateStatisticComponent_ng_container_31_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelement"] */ .nrm(0, "ga-criterions-rating-chart", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .nI1(1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .nI1(2, "async");
  }
  if (rf & 2) {
    const candidates_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .XpG().ngIf;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Y8G("candidates", candidates_r4)("interviews", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .bMT(1, 3, ctx_r2.interviews$))("employees", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .bMT(2, 5, ctx_r2.employees$));
  }
}
function CandidateStatisticComponent_ng_container_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .DNE(1, CandidateStatisticComponent_ng_container_31_ng_template_1_Template, 3, 7, "ng-template", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const candidates_r4 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Y8G("ngIf", candidates_r4.length > 0);
  }
}
function CandidateStatisticComponent_ng_container_39_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelement"] */ .nrm(0, "ga-average-criterions-rating-chart", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .nI1(1, "async");
  }
  if (rf & 2) {
    const candidates_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .XpG().ngIf;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Y8G("candidates", candidates_r5)("interviews", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .bMT(1, 2, ctx_r2.interviews$));
  }
}
function CandidateStatisticComponent_ng_container_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .DNE(1, CandidateStatisticComponent_ng_container_39_ng_template_1_Template, 2, 4, "ng-template", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const candidates_r5 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Y8G("ngIf", candidates_r5.length > 0);
  }
}
let CandidateStatisticComponent = class CandidateStatisticComponent {
  constructor(_candidatesService, _candidateInterviewService, _employeesService, _store, _errorHandlingService) {
    this._candidatesService = _candidatesService;
    this._candidateInterviewService = _candidateInterviewService;
    this._employeesService = _employeesService;
    this._store = _store;
    this._errorHandlingService = _errorHandlingService;
  }
  ngOnInit() {
    this.organization$ = this._store.selectedOrganization$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .filter */ .p)(organization => !!organization), (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_6__/* .distinctUntilChange */ .nI)());
    this.candidates$ = this.getData$((organizationId, tenantId) => this._candidatesService.getAll(['user', 'interview', 'feedbacks'], {
      organizationId,
      tenantId
    }));
    this.employees$ = this.getData$((organizationId, tenantId) => this._employeesService.getAll(['user'], {
      organizationId,
      tenantId
    }));
    this.interviews$ = this.getData$((organizationId, tenantId) => this._candidateInterviewService.getAll(['feedbacks', 'interviewers', 'technologies', 'personalQualities'], {
      organizationId,
      tenantId
    }));
  }
  /**
   * Generic method to fetch data based on organization and tenant IDs.
   *
   * @param serviceMethod A function that takes organizationId and tenantId, and returns an Observable of IPagination.
   * @returns An Observable of the items array of type T.
   */
  getData$(serviceMethod) {
    return this.organization$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .switchMap */ .n)(organization => {
      const {
        id: organizationId,
        tenantId
      } = organization;
      if (!organizationId) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)([]);
      }
      return serviceMethod(organizationId, tenantId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .map */ .T)(({
        items
      }) => items), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .catchError */ .W)(error => {
        this._errorHandlingService.handleError(error);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)([]);
      }), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__/* .untilDestroyed */ .s)(this));
    }), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__/* .untilDestroyed */ .s)(this));
  }
  ngOnDestroy() {}
  static {
    this.ɵfac = function CandidateStatisticComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CandidateStatisticComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_12__/* .CandidatesService */ .S), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_13__/* .CandidateInterviewService */ .C), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_14__/* .EmployeesService */ .r), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_15__/* .Store */ .il), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_16__/* .ErrorHandlingService */ .X));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdefineComponent"] */ .VBU({
      type: CandidateStatisticComponent,
      selectors: [["ga-candidate-statistic"]],
      standalone: false,
      decls: 41,
      vars: 28,
      consts: [[1, "card-scroll"], [2, "display", "flex"], [3, "allowEmployee"], [4, "ngIf"], [3, "ngIf"], [3, "candidates"], [3, "candidates", "employees"], [3, "candidates", "interviews", "employees"], [3, "candidates", "interviews"]],
      template: function CandidateStatisticComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(0, "nb-card", 0)(1, "nb-card-header", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelement"] */ .nrm(2, "ngx-back-navigation");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(3, "h4")(4, "ngx-header-title", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ .EFF(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .nI1(6, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(7, "nb-card-body")(8, "nb-accordion")(9, "nb-accordion-item")(10, "nb-accordion-item-header")(11, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ .EFF(12);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .nI1(13, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(14, "nb-accordion-item-body");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .DNE(15, CandidateStatisticComponent_ng_container_15_Template, 2, 1, "ng-container", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .nI1(16, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(17, "nb-accordion-item")(18, "nb-accordion-item-header")(19, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ .EFF(20);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .nI1(21, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(22, "nb-accordion-item-body");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .DNE(23, CandidateStatisticComponent_ng_container_23_Template, 2, 1, "ng-container", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .nI1(24, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(25, "nb-accordion-item")(26, "nb-accordion-item-header")(27, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ .EFF(28);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .nI1(29, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(30, "nb-accordion-item-body");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .DNE(31, CandidateStatisticComponent_ng_container_31_Template, 2, 1, "ng-container", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .nI1(32, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(33, "nb-accordion-item")(34, "nb-accordion-item-header")(35, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ .EFF(36);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .nI1(37, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(38, "nb-accordion-item-body");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .DNE(39, CandidateStatisticComponent_ng_container_39_Template, 2, 1, "ng-container", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .nI1(40, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Y8G("allowEmployee", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .bMT(6, 10, "CANDIDATES_PAGE.STATISTIC.STATISTICS"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .bMT(13, 12, "CANDIDATES_PAGE.STATISTIC.RATING"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Y8G("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .bMT(16, 14, ctx.candidates$));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .bMT(21, 16, "CANDIDATES_PAGE.STATISTIC.INTERVIEWER_ASSESSMENT"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Y8G("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .bMT(24, 18, ctx.candidates$));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .bMT(29, 20, "CANDIDATES_PAGE.STATISTIC.CRITERIONS_RATING"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Y8G("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .bMT(32, 22, ctx.candidates$));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .bMT(37, 24, "CANDIDATES_PAGE.STATISTIC.CANDIDATE_CRITERIONS_RATING"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Y8G("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .bMT(40, 26, ctx.candidates$));
        }
      },
      dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_17__/* .NbAccordionComponent */ .Ul7, _nebular_theme__WEBPACK_IMPORTED_MODULE_17__/* .NbAccordionItemComponent */ .vx8, _nebular_theme__WEBPACK_IMPORTED_MODULE_17__/* .NbAccordionItemHeaderComponent */ .Ig3, _nebular_theme__WEBPACK_IMPORTED_MODULE_17__/* .NbAccordionItemBodyComponent */ .LHJ, _nebular_theme__WEBPACK_IMPORTED_MODULE_17__/* .NbCardComponent */ .SrT, _nebular_theme__WEBPACK_IMPORTED_MODULE_17__/* .NbCardBodyComponent */ .KH5, _nebular_theme__WEBPACK_IMPORTED_MODULE_17__/* .NbCardHeaderComponent */ .zJv, _angular_common__WEBPACK_IMPORTED_MODULE_18__/* .NgIf */ .bT, _packages_ui_core_shared_src_lib_components_back_navigation_back_navigation_component__WEBPACK_IMPORTED_MODULE_19__/* .BackNavigationComponent */ .r, _packages_ui_core_shared_src_lib_components_header_title_header_title_component__WEBPACK_IMPORTED_MODULE_20__/* .HeaderTitleComponent */ .X, _candidate_statistic_charts_overall_rating_chart_overall_rating_chart_component__WEBPACK_IMPORTED_MODULE_0__/* .CandidateRatingChartComponent */ .y, _candidate_statistic_charts_criterions_rating_chart_criterions_rating_chart_component__WEBPACK_IMPORTED_MODULE_1__/* .CriterionsRatingChartComponent */ .p, _candidate_statistic_charts_interview_rating_chart_interview_rating_chart_component__WEBPACK_IMPORTED_MODULE_2__/* .InterviewRatingChartComponent */ .s, _candidate_statistic_charts_average_criterions_rating_chart_average_criterions_rating_chart_component__WEBPACK_IMPORTED_MODULE_3__/* .AverageCriterionsRatingChartComponent */ .M, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__/* .TranslatePipe */ .D9, _angular_common__WEBPACK_IMPORTED_MODULE_18__/* .AsyncPipe */ .Jj],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   nb-accordion-item-header[_ngcontent-%COMP%]     nb-icon {\n  border: 1px solid var(--border-basic-color-4);\n  border-radius: var(--border-radius);\n  width: 1.75rem;\n  height: 1.75rem;\n}\n[_nghost-%COMP%]   nb-accordion[_ngcontent-%COMP%] {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   nb-accordion-item-header[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n}\n[_nghost-%COMP%]   nb-accordion-item-body[_ngcontent-%COMP%]     .item-body {\n  padding: 1.5rem;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%], \n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-2);\n}\n\nh6[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 16px;\n  letter-spacing: 0em;\n  text-align: center;\n}"]
    });
  }
};
CandidateStatisticComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_22__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__/* .UntilDestroy */ .d)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_22__/* .__metadata */ .Sn)("design:paramtypes", [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_12__/* .CandidatesService */ .S, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_13__/* .CandidateInterviewService */ .C, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_14__/* .EmployeesService */ .r, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_15__/* .Store */ .il, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_16__/* .ErrorHandlingService */ .X])], CandidateStatisticComponent);


/***/ }),

/***/ 54216:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ AverageCriterionsRatingChartComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73014);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(64411);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(56383);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73246);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23423);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(91081);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(78477);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(14572);
/* harmony import */ var _packages_ui_core_shared_src_lib_candidate_selectors_candidate_select_candidate_select_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(67552);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(19223);













function AverageCriterionsRatingChartComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(1, "div", 1)(2, "ga-candidate-select", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("selectedChange", function AverageCriterionsRatingChartComponent_ng_container_0_Template_ga_candidate_select_selectedChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.onMembersSelected($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(3, 1, "FORM.PLACEHOLDERS.ADD_REMOVE_CANDIDATE"));
  }
}
function AverageCriterionsRatingChartComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "canvas", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("type", "bar")("data", ctx_r1.data)("options", ctx_r1.options);
  }
}
function AverageCriterionsRatingChartComponent_ng_container_2_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(2, 1, "CANDIDATES_PAGE.STATISTIC.SELECT_CANDIDATE"), " ");
  }
}
function AverageCriterionsRatingChartComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(2, "nb-icon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(3, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(6, AverageCriterionsRatingChartComponent_ng_container_2_span_6_Template, 3, 3, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(5, 2, "CANDIDATES_PAGE.STATISTIC.NO_DATA"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r1.candidates.length > 0);
  }
}
let AverageCriterionsRatingChartComponent = class AverageCriterionsRatingChartComponent {
  constructor(themeService, candidateFeedbacksService) {
    this.themeService = themeService;
    this.candidateFeedbacksService = candidateFeedbacksService;
    this.labels = [];
    this.rating = [];
    this.backgroundColor = [];
  }
  ngOnInit() {
    this.themeService.getJsTheme().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__/* .tap */ .M)(() => this.initializeChartOptions()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__/* .untilDestroyed */ .s)(this)).subscribe();
  }
  /**
   *
   * @param id
   */
  onMembersSelected(candidateId) {
    var _this = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(function* () {
      const res = yield _this.candidateFeedbacksService.getAll(['interviewer', 'criterionsRating'], {
        candidateId
      });
      if (res) {
        const currInterviews = [];
        _this.feedbacks = res.items.filter(item => item.interviewId);
        const criterionsRating = [];
        _this.feedbacks.forEach(feedback => {
          _this.interviews.forEach(interview => {
            if (interview.id === feedback.interviewId && !currInterviews.includes(interview)) {
              currInterviews.push(interview);
            }
          });
          feedback.criterionsRating.forEach(criterionEl => {
            currInterviews.forEach(interview => {
              interview.personalQualities.forEach(pq => {
                if (pq.id === criterionEl.personalQualityId) {
                  criterionsRating.push({
                    name: pq.name,
                    rating: criterionEl.rating
                  });
                }
              });
              interview.technologies.forEach(t => {
                if (t.id === criterionEl.technologyId) {
                  criterionsRating.push({
                    name: t.name,
                    rating: criterionEl.rating
                  });
                }
              });
            });
          });
        });
        _this.labels = [];
        _this.rating = [];
        _this.rating = _this.getCriterionsRating(criterionsRating).map(x => x.rating);
        _this.labels = _this.getCriterionsRating(criterionsRating).map(x => x.name);
        _this.initializeChartOptions();
      }
    })();
  }
  /**
   *
   * @param criterionsRating
   * @returns
   */
  getCriterionsRating(criterionsRating) {
    return criterionsRating.reduce((prev, curr) => {
      const existing = prev.find(data => data.name === curr.name);
      if (!existing) {
        return [...prev, {
          ...curr,
          rating: [curr.rating]
        }];
      }
      existing.rating.push(curr.rating);
      return [...prev];
    }, []).map(data => {
      this.initializeChartBackgroundColor(data.rating);
      const rating = (data.rating.reduce((prev, curr) => prev + curr) / data.rating.length).toFixed(2);
      return {
        ...data,
        rating
      };
    });
  }
  /**
   * Initializes chart data and options.
   */
  initializeChartOptions() {
    this.data = {
      labels: this.labels,
      datasets: [{
        maxBarThickness: 150,
        label: `Average criterion's rating`,
        backgroundColor: this.backgroundColor,
        data: this.rating
      }]
    };
    this.options = {
      responsive: true,
      maintainAspectRatio: false,
      elements: {
        rectangle: {
          borderWidth: 2
        }
      },
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    };
  }
  /**
   * Initializes the chart data based on candidates' ratings and names.
   */
  initializeChartBackgroundColor(data) {
    data.forEach((item, index) => {
      // Determine background color based on index
      const backgroundColor = index % 2 === 0 ? 'rgba(75, 192, 192, 0.2)' : 'rgba(153, 102, 255, 0.2)';
      this.backgroundColor.push(backgroundColor);
    });
  }
  ngOnDestroy() {}
  static {
    this.ɵfac = function AverageCriterionsRatingChartComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AverageCriterionsRatingChartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbThemeService */ .NS1), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_5__/* .CandidateFeedbacksService */ .R));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
      type: AverageCriterionsRatingChartComponent,
      selectors: [["ga-average-criterions-rating-chart"]],
      inputs: {
        candidates: "candidates",
        interviews: "interviews"
      },
      standalone: false,
      decls: 3,
      vars: 3,
      consts: [[4, "ngIf"], [1, "select"], [3, "selectedChange", "placeholder"], ["baseChart", "", 2, "height", "400px", "width", "100%", 3, "type", "data", "options"], [1, "no-data"], ["icon", "info-outline", 1, "no-data-icon"], [1, "no-data-text"], ["class", "no-data-text", 4, "ngIf"]],
      template: function AverageCriterionsRatingChartComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(0, AverageCriterionsRatingChartComponent_ng_container_0_Template, 4, 3, "ng-container", 0)(1, AverageCriterionsRatingChartComponent_ng_container_1_Template, 2, 3, "ng-container", 0)(2, AverageCriterionsRatingChartComponent_ng_container_2_Template, 7, 4, "ng-container", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.candidates.length > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", (ctx.rating == null ? null : ctx.rating.length) > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", (ctx.rating == null ? null : ctx.rating.length) === 0);
        }
      },
      dependencies: [ng2_charts__WEBPACK_IMPORTED_MODULE_6__/* .BaseChartDirective */ .j9, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbIconComponent */ .tHu, _angular_common__WEBPACK_IMPORTED_MODULE_7__/* .NgIf */ .bT, _packages_ui_core_shared_src_lib_candidate_selectors_candidate_select_candidate_select_component__WEBPACK_IMPORTED_MODULE_8__/* .CandidateSelectComponent */ .V, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__/* .TranslatePipe */ .D9],
      styles: [".select[_ngcontent-%COMP%] {\n  width: 20rem;\n  margin: 0 0 1.25rem 0;\n}\n\n.no-data[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  border: 1px #e5e5e5 solid;\n  height: 150px;\n}\n.no-data-text[_ngcontent-%COMP%] {\n  color: #909cb4;\n}\n.no-data-icon[_ngcontent-%COMP%] {\n  font-size: 1.5rem !important;\n  color: #909cb4;\n}"]
    });
  }
};
AverageCriterionsRatingChartComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_10__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__/* .UntilDestroy */ .d)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_10__/* .__metadata */ .Sn)("design:paramtypes", [_nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbThemeService */ .NS1, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_5__/* .CandidateFeedbacksService */ .R])], AverageCriterionsRatingChartComponent);


/***/ }),

/***/ 54428:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CandidatesModule: () => (/* binding */ CandidatesModule)
/* harmony export */ });
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(56383);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(55567);
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(79475);
/* harmony import */ var _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(48637);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(22688);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(86616);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(93573);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(32629);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(4998);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(91099);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(51637);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(19223);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(57832);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(38834);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(54462);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(46880);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(32239);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(40653);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(61444);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(14062);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(78890);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(76592);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(41030);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(27478);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(66609);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(28195);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(73203);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(80784);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(87009);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(16311);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(6269);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(56274);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(49676);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(89848);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(58504);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(98722);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(41064);
/* harmony import */ var _edit_candidate_edit_candidate_profile_edit_candidate_tasks_edit_candidate_tasks_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(74224);
/* harmony import */ var _edit_candidate_edit_candidate_profile_edit_candidate_profile_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62241);
/* harmony import */ var _edit_candidate_edit_candidate_profile_edit_candidate_main_edit_candidate_main_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64383);
/* harmony import */ var _edit_candidate_edit_candidate_profile_edit_candidate_location_edit_candidate_location_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(54800);
/* harmony import */ var _edit_candidate_edit_candidate_profile_edit_candidate_history_edit_candidate_history_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(1272);
/* harmony import */ var _edit_candidate_edit_candidate_profile_edit_candidate_experience_edit_candidate_experience_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73408);
/* harmony import */ var _edit_candidate_edit_candidate_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(47131);
/* harmony import */ var _candidates_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(47209);
/* harmony import */ var _candidates_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(42165);
/* harmony import */ var _table_components_candidate_status_candidate_status_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(72010);
/* harmony import */ var _manage_candidate_invite_manage_candidate_invite_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(86170);
/* harmony import */ var _edit_candidate_edit_candidate_profile_edit_candidate_documents_edit_candidate_documents_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(79748);
/* harmony import */ var _edit_candidate_edit_candidate_profile_edit_candidate_employment_edit_candidate_employment_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(44752);
/* harmony import */ var _edit_candidate_edit_candidate_profile_edit_candidate_hiring_edit_candidate_hiring_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(27548);
/* harmony import */ var _edit_candidate_edit_candidate_profile_edit_candidate_rates_edit_candidate_rates_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(97838);
/* harmony import */ var _edit_candidate_edit_candidate_profile_edit_candidate_experience_edit_candidate_skills_edit_candidate_skills_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(77687);
/* harmony import */ var _edit_candidate_edit_candidate_profile_edit_candidate_experience_edit_candidate_education_edit_candidate_education_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(48696);
/* harmony import */ var _edit_candidate_edit_candidate_profile_edit_candidate_experience_edit_candidate_experience_edit_candidate_experience_form_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(89989);
/* harmony import */ var _edit_candidate_edit_candidate_profile_edit_candidate_feedbacks_edit_candidate_feedbacks_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(76448);
/* harmony import */ var _table_components_candidate_source_candidate_source_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(43240);
/* harmony import */ var _edit_candidate_edit_candidate_profile_edit_candidate_interview_edit_candidate_interview_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(79646);
/* harmony import */ var _manage_candidate_interviews_manage_candidate_interviews_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(35414);
/* harmony import */ var _candidate_statistic_candidate_statistic_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(53178);
/* harmony import */ var _manage_candidate_interviews_interview_calendar_interview_calendar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(56537);
/* harmony import */ var _manage_candidate_interviews_interview_panel_interview_panel_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(50023);
/* harmony import */ var _manage_candidate_interviews_interview_criterions_interview_criterions_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(59193);
/* harmony import */ var _manage_candidate_interviews_interview_criterions_candidate_technologies_candidate_technologies_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(43548);
/* harmony import */ var _manage_candidate_interviews_interview_criterions_candidate_personal_qualities_candidate_personal_qualities_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(2556);
/* harmony import */ var _candidate_statistic_candidate_statistic_charts_criterions_rating_chart_criterions_rating_chart_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(16736);
/* harmony import */ var _candidate_statistic_candidate_statistic_charts_overall_rating_chart_overall_rating_chart_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(35334);
/* harmony import */ var _candidate_statistic_candidate_statistic_charts_interview_rating_chart_interview_rating_chart_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(89269);
/* harmony import */ var _candidate_statistic_candidate_statistic_charts_average_criterions_rating_chart_average_criterions_rating_chart_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(54216);
/* harmony import */ var _manage_candidate_interviews_interview_panel_table_components_rating_rating_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(49177);
/* harmony import */ var _manage_candidate_interviews_interview_panel_table_components_criterions_criterions_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(41140);
/* harmony import */ var _manage_candidate_interviews_interview_panel_table_components_date_date_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(49644);
/* harmony import */ var _manage_candidate_interviews_interview_panel_table_components_interviewers_interviewers_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(37494);
/* harmony import */ var _manage_candidate_interviews_interview_panel_table_components_actions_actions_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(33894);
/* harmony import */ var _edit_candidate_edit_candidate_profile_edit_candidate_feedbacks_table_components_status_status_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(85871);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(26860);

















































const COMPONENTS = [_candidates_component__WEBPACK_IMPORTED_MODULE_3__/* .CandidatesComponent */ .w, _table_components_candidate_status_candidate_status_component__WEBPACK_IMPORTED_MODULE_19__/* .CandidateStatusComponent */ .j, _table_components_candidate_source_candidate_source_component__WEBPACK_IMPORTED_MODULE_20__/* .CandidateSourceComponent */ .u, _edit_candidate_edit_candidate_component__WEBPACK_IMPORTED_MODULE_21__/* .EditCandidateComponent */ .Z, _edit_candidate_edit_candidate_profile_edit_candidate_documents_edit_candidate_documents_component__WEBPACK_IMPORTED_MODULE_5__/* .EditCandidateDocumentsComponent */ .z, _edit_candidate_edit_candidate_profile_edit_candidate_feedbacks_edit_candidate_feedbacks_component__WEBPACK_IMPORTED_MODULE_9__/* .EditCandidateFeedbacksComponent */ .H, _edit_candidate_edit_candidate_profile_edit_candidate_employment_edit_candidate_employment_component__WEBPACK_IMPORTED_MODULE_6__/* .EditCandidateEmploymentComponent */ .d, _edit_candidate_edit_candidate_profile_edit_candidate_experience_edit_candidate_experience_component__WEBPACK_IMPORTED_MODULE_2__/* .EditCandidateExperienceComponent */ .z, _edit_candidate_edit_candidate_profile_edit_candidate_hiring_edit_candidate_hiring_component__WEBPACK_IMPORTED_MODULE_7__/* .EditCandidateHiringComponent */ .a, _edit_candidate_edit_candidate_profile_edit_candidate_history_edit_candidate_history_component__WEBPACK_IMPORTED_MODULE_22__/* .EditCandidateHistoryComponent */ .B, _edit_candidate_edit_candidate_profile_edit_candidate_location_edit_candidate_location_component__WEBPACK_IMPORTED_MODULE_23__/* .EditCandidateLocationComponent */ .q, _edit_candidate_edit_candidate_profile_edit_candidate_main_edit_candidate_main_component__WEBPACK_IMPORTED_MODULE_1__/* .EditCandidateMainComponent */ .W, _edit_candidate_edit_candidate_profile_edit_candidate_profile_component__WEBPACK_IMPORTED_MODULE_0__/* .EditCandidateProfileComponent */ .w, _edit_candidate_edit_candidate_profile_edit_candidate_rates_edit_candidate_rates_component__WEBPACK_IMPORTED_MODULE_24__/* .EditCandidateRatesComponent */ .g, _edit_candidate_edit_candidate_profile_edit_candidate_tasks_edit_candidate_tasks_component__WEBPACK_IMPORTED_MODULE_25__/* .EditCandidateTasksComponent */ .Z, _edit_candidate_edit_candidate_profile_edit_candidate_interview_edit_candidate_interview_component__WEBPACK_IMPORTED_MODULE_10__/* .EditCandidateInterviewComponent */ .i, _manage_candidate_invite_manage_candidate_invite_component__WEBPACK_IMPORTED_MODULE_26__/* .ManageCandidateInviteComponent */ .x, _candidate_statistic_candidate_statistic_component__WEBPACK_IMPORTED_MODULE_12__/* .CandidateStatisticComponent */ .H, _edit_candidate_edit_candidate_profile_edit_candidate_experience_edit_candidate_skills_edit_candidate_skills_component__WEBPACK_IMPORTED_MODULE_27__/* .EditCandidateSkillsComponent */ .Z, _edit_candidate_edit_candidate_profile_edit_candidate_experience_edit_candidate_education_edit_candidate_education_component__WEBPACK_IMPORTED_MODULE_8__/* .EditCandidateEducationComponent */ .f, _edit_candidate_edit_candidate_profile_edit_candidate_experience_edit_candidate_experience_edit_candidate_experience_form_component__WEBPACK_IMPORTED_MODULE_28__/* .EditCandidateExperienceFormComponent */ .b, _manage_candidate_interviews_manage_candidate_interviews_component__WEBPACK_IMPORTED_MODULE_11__/* .ManageCandidateInterviewsComponent */ .G, _manage_candidate_interviews_interview_calendar_interview_calendar_component__WEBPACK_IMPORTED_MODULE_13__/* .InterviewCalendarComponent */ .x, _manage_candidate_interviews_interview_panel_interview_panel_component__WEBPACK_IMPORTED_MODULE_14__/* .InterviewPanelComponent */ .J, _candidate_statistic_candidate_statistic_charts_overall_rating_chart_overall_rating_chart_component__WEBPACK_IMPORTED_MODULE_16__/* .CandidateRatingChartComponent */ .y, _candidate_statistic_candidate_statistic_charts_criterions_rating_chart_criterions_rating_chart_component__WEBPACK_IMPORTED_MODULE_15__/* .CriterionsRatingChartComponent */ .p, _candidate_statistic_candidate_statistic_charts_interview_rating_chart_interview_rating_chart_component__WEBPACK_IMPORTED_MODULE_17__/* .InterviewRatingChartComponent */ .s, _candidate_statistic_candidate_statistic_charts_average_criterions_rating_chart_average_criterions_rating_chart_component__WEBPACK_IMPORTED_MODULE_18__/* .AverageCriterionsRatingChartComponent */ .M, _manage_candidate_interviews_interview_criterions_interview_criterions_component__WEBPACK_IMPORTED_MODULE_29__/* .InterviewCriterionsComponent */ .t, _manage_candidate_interviews_interview_criterions_candidate_technologies_candidate_technologies_component__WEBPACK_IMPORTED_MODULE_30__/* .CandidateTechnologiesComponent */ .V, _manage_candidate_interviews_interview_criterions_candidate_personal_qualities_candidate_personal_qualities_component__WEBPACK_IMPORTED_MODULE_31__/* .CandidatePersonalQualitiesComponent */ .U, _manage_candidate_interviews_interview_panel_table_components_rating_rating_component__WEBPACK_IMPORTED_MODULE_32__/* .InterviewStarRatingComponent */ .i, _manage_candidate_interviews_interview_panel_table_components_criterions_criterions_component__WEBPACK_IMPORTED_MODULE_33__/* .InterviewCriterionsTableComponent */ .F, _manage_candidate_interviews_interview_panel_table_components_date_date_component__WEBPACK_IMPORTED_MODULE_34__/* .InterviewDateTableComponent */ .F, _manage_candidate_interviews_interview_panel_table_components_interviewers_interviewers_component__WEBPACK_IMPORTED_MODULE_35__/* .InterviewersTableComponent */ .n, _manage_candidate_interviews_interview_panel_table_components_actions_actions_component__WEBPACK_IMPORTED_MODULE_36__/* .InterviewActionsTableComponent */ .O, _edit_candidate_edit_candidate_profile_edit_candidate_feedbacks_table_components_status_status_component__WEBPACK_IMPORTED_MODULE_37__/* .FeedbackStatusTableComponent */ .f];
let CandidatesModule = /*#__PURE__*/(() => {
  class CandidatesModule {
    static {
      this.ɵfac = function CandidatesModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || CandidatesModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_38__/* ["ɵɵdefineNgModule"] */ .$C({
        type: CandidatesModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_38__/* ["ɵɵdefineInjector"] */ .G2t({
        providers: [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_39__/* .OrganizationsService */ .k, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_40__/* .InviteGuard */ .D, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_41__/* .OrganizationEmploymentTypesService */ .m, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_42__/* .CandidatesService */ .S, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_43__/* .CandidateInterviewersService */ .y, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_44__/* .CandidatePersonalQualitiesService */ .W, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_45__/* .CandidateTechnologiesService */ .d],
        imports: [_fullcalendar_angular__WEBPACK_IMPORTED_MODULE_46__/* .FullCalendarModule */ .E, _nebular_theme__WEBPACK_IMPORTED_MODULE_47__/* .NbAccordionModule */ .LtP, _nebular_theme__WEBPACK_IMPORTED_MODULE_47__/* .NbActionsModule */ ._A2, _nebular_theme__WEBPACK_IMPORTED_MODULE_47__/* .NbBadgeModule */ .iEK, _nebular_theme__WEBPACK_IMPORTED_MODULE_47__/* .NbButtonModule */ .P5N, _nebular_theme__WEBPACK_IMPORTED_MODULE_47__/* .NbCardModule */ .lVF, _nebular_theme__WEBPACK_IMPORTED_MODULE_47__/* .NbCheckboxModule */ .Ad8, _nebular_theme__WEBPACK_IMPORTED_MODULE_47__/* .NbContextMenuModule */ .DkL, _nebular_theme__WEBPACK_IMPORTED_MODULE_47__/* .NbDatepickerModule */ .TgK, _nebular_theme__WEBPACK_IMPORTED_MODULE_47__/* .NbDialogModule */ .nZv.forChild(), _nebular_theme__WEBPACK_IMPORTED_MODULE_47__/* .NbIconModule */ .clu, _nebular_theme__WEBPACK_IMPORTED_MODULE_47__/* .NbInputModule */ .pty, _nebular_theme__WEBPACK_IMPORTED_MODULE_47__/* .NbMenuModule */ .anj, _nebular_theme__WEBPACK_IMPORTED_MODULE_47__/* .NbRadioModule */ .iyp, _nebular_theme__WEBPACK_IMPORTED_MODULE_47__/* .NbRouteTabsetModule */ .x$5, _nebular_theme__WEBPACK_IMPORTED_MODULE_47__/* .NbSelectModule */ .VcP, _nebular_theme__WEBPACK_IMPORTED_MODULE_47__/* .NbSpinnerModule */ .gYs, _nebular_theme__WEBPACK_IMPORTED_MODULE_47__/* .NbTabsetModule */ .AfG, _nebular_theme__WEBPACK_IMPORTED_MODULE_47__/* .NbToggleModule */ .jVr, _nebular_theme__WEBPACK_IMPORTED_MODULE_47__/* .NbTooltipModule */ .IB0, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_48__/* .NgSelectModule */ .MQ, ngx_permissions__WEBPACK_IMPORTED_MODULE_49__/* .NgxPermissionsModule */ .Ov.forChild(), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_50__/* .TranslateModule */ .h.forChild(), _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_51__/* .TableComponentsModule */ .p, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_52__/* .SharedModule */ .G, _candidates_routing_module__WEBPACK_IMPORTED_MODULE_4__/* .CandidatesRoutingModule */ .h, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_53__/* .ImageUploaderModule */ .M, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_54__/* .FileUploaderModule */ .N, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_55__/* .CandidateSelectModule */ ._, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_56__/* .CandidateInterviewerSelectModule */ ._, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_57__/* .TagsColorInputModule */ .x, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_58__/* .CandidateMutationModule */ .D, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_59__/* .CandidateInterviewMutationModule */ .W, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_60__/* .CandidateInterviewInfoModule */ .V, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_61__/* .InviteMutationModule */ .h, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_62__/* .InviteTableModule */ .s, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_63__/* .EmployeeLocationModule */ .K, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_64__/* .EmployeeRatesModule */ .M, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_65__/* .StarRatingInputModule */ .i, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_66__/* .CardGridModule */ .n, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_67__/* .StarRatingOutputModule */ .j, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_68__/* .CandidateMultiSelectModule */ .N, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_69__/* .EmployeeMultiSelectModule */ .I, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_70__/* .CandidateInterviewFeedbackModule */ .w, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_71__/* .DeleteInterviewModule */ .n, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_72__/* .DeleteFeedbackModule */ .T, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_73__/* .FavoriteToggleModule */ .F, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_74__/* .SmartDataViewLayoutModule */ .H, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_75__/* .WorkInProgressModule */ .g]
      });
    }
  }
  return CandidatesModule;
})();

/***/ }),

/***/ 54800:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: () => (/* binding */ EditCandidateLocationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _packages_ui_core_shared_src_lib_employee_employee_location_employee_location_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95934);


let EditCandidateLocationComponent = /*#__PURE__*/(() => {
  class EditCandidateLocationComponent {
    static {
      this.ɵfac = function EditCandidateLocationComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || EditCandidateLocationComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: EditCandidateLocationComponent,
        selectors: [["ga-edit-candidate-location"]],
        standalone: false,
        decls: 1,
        vars: 1,
        consts: [[3, "isCandidate"]],
        template: function EditCandidateLocationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(0, "ga-employee-location", 0);
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("isCandidate", true);
          }
        },
        dependencies: [_packages_ui_core_shared_src_lib_employee_employee_location_employee_location_component__WEBPACK_IMPORTED_MODULE_1__/* .EmployeeLocationComponent */ .H],
        styles: ["[_nghost-%COMP%] {\n\t\t\t\toverflow-y: auto;\n\t\t\t\tmax-height: calc(100vh - 28rem);\n\t\t\t}"]
      });
    }
  }
  return EditCandidateLocationComponent;
})();

/***/ }),

/***/ 56537:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   x: () => (/* binding */ InterviewCalendarComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(73014);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(64411);
/* harmony import */ var _fullcalendar_core_internal__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(56236);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(19223);
/* harmony import */ var _fullcalendar_bootstrap__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(85604);
/* harmony import */ var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(47564);
/* harmony import */ var _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(93791);
/* harmony import */ var _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(2466);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(56383);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(72781);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(73246);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(29421);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(87081);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(24237);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(47060);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(50666);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(36950);
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86014);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(23423);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20381);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(38546);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(90022);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(15480);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(88319);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(71924);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(54263);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(26024);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(94251);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(46125);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26860);
/* harmony import */ var _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(48637);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(14572);
/* harmony import */ var _packages_ui_core_shared_src_lib_candidate_selectors_candidate_multi_select_candidate_multi_select_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(79768);
/* harmony import */ var _packages_ui_core_shared_src_lib_employee_employee_multi_select_employee_multi_select_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(57354);



























const _c0 = ["calendar"];
function InterviewCalendarComponent_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ .nrm(1, "full-calendar", 6, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("options", ctx_r0.calendarOptions);
  }
}
let InterviewCalendarComponent = class InterviewCalendarComponent extends _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_3__/* .TranslationBaseComponent */ .K {
  constructor(translateService, _nbDialogService, _candidateInterviewService, _toastrService, _employeesService, _store, _errorHandlingService) {
    super(translateService);
    this.translateService = translateService;
    this._nbDialogService = _nbDialogService;
    this._candidateInterviewService = _candidateInterviewService;
    this._toastrService = _toastrService;
    this._employeesService = _employeesService;
    this._store = _store;
    this._errorHandlingService = _errorHandlingService;
    this.calendarOptions = {
      events: []
    };
    this.selectedCandidates = [];
    this.selectedEmployees = [];
    this.calendarEvents = [];
    this.interviews = [];
    this.subject$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__/* .Subject */ .B();
    this.getCalendarOption();
  }
  ngOnInit() {
    this.organization$ = this._store.selectedOrganization$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .filter */ .p)(organization => !!organization), (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_6__/* .distinctUntilChange */ .nI)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .M)(organization => {
      this.organization = organization;
      this.subject$.next(true);
    }));
    this.subject$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .filter */ .p)(() => !!this.organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .switchMap */ .n)(() => {
      // Extract organization properties
      const {
        id: organizationId,
        tenantId
      } = this.organization;
      return this._candidateInterviewService.getAll(['interviewers'], {
        organizationId,
        tenantId,
        isActive: true,
        isArchived: false
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .map */ .T)(({
        items
      }) => items), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .M)(interviews => this.mappedInterviews(interviews)), (0,rxjs__WEBPACK_IMPORTED_MODULE_10__/* .catchError */ .W)(error => {
        // Handle and log errors
        this._errorHandlingService.handleError(error);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.of)([]);
      }),
      // Handle component lifecycle to avoid memory leaks
      (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_12__/* .untilDestroyed */ .s)(this));
    })).subscribe();
  }
  ngAfterViewInit() {
    this.employees$ = this.organization$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .switchMap */ .n)(organization => {
      // Extract organization properties
      const {
        id: organizationId,
        tenantId
      } = organization;
      return this._employeesService.getAll(['user'], {
        organizationId,
        tenantId
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .map */ .T)(({
        items
      }) => items), (0,rxjs__WEBPACK_IMPORTED_MODULE_10__/* .catchError */ .W)(error => {
        // Handle and log errors
        this._errorHandlingService.handleError(error);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.of)([]);
      }),
      // Handle component lifecycle to avoid memory leaks
      (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_12__/* .untilDestroyed */ .s)(this));
    }),
    // Handle component lifecycle to avoid memory leaks
    (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_12__/* .untilDestroyed */ .s)(this));
  }
  /**
   * Returns the configuration options for the calendar.
   *
   * @returns An object containing calendar options.
   */
  getCalendarOption() {
    this.calendarOptions = {
      initialView: 'timeGridWeek',
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      },
      themeSystem: 'bootstrap',
      plugins: [_fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Ay, _fullcalendar_bootstrap__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A],
      weekends: true,
      height: 'auto',
      selectable: true,
      select: this.handleEventSelect.bind(this),
      dateClick: this.handleDateClick.bind(this),
      eventMouseEnter: this.handleEventMouseEnter.bind(this),
      eventMouseLeave: this.handleEventMouseLeave.bind(this),
      eventClick: this.handleEventClick.bind(this)
    };
  }
  /**
   * Maps an array of candidate interviews to calendar events and updates the calendarEvents property.
   * Each interview is converted into an event object and added to the calendarEvents array.
   * After processing all interviews, the mappedCalendarEvents method is called.
   *
   * @param interviews - An array of candidate interviews to be mapped to calendar events.
   */
  mappedInterviews(interviews) {
    this.calendarEvents = interviews.map(interview => ({
      title: interview.title,
      start: interview.startTime,
      end: interview.endTime,
      candidateId: interview.candidateId,
      id: interview.id,
      extendedProps: {
        id: interview.id
      },
      backgroundColor: '#36f',
      employeeIds: (0,underscore__WEBPACK_IMPORTED_MODULE_0__/* .pluck */ .Ey)(interview.interviewers, 'employeeId')
    }));
    // Maps an array of calendar events and updates the calendarEvents property.
    this.mappedCalendarEvents();
  }
  /**
   * Handles the selection of candidates.
   * Updates the isCandidate flag and selectedCandidates with the selected candidate IDs,
   * and triggers the mapping of calendar events.
   *
   * @param ids - An array of selected candidate IDs.
   */
  onCandidateSelected(ids) {
    var _this = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A)(function* () {
      _this.selectedCandidates = ids;
      _this.mappedCalendarEvents();
    })();
  }
  /**
   * Handles the selection of employees.
   * Updates the isEmployee flag and selectedEmployees with the selected employee IDs,
   * and triggers the mapping of calendar events.
   *
   * @param ids - An array of selected employee IDs.
   */
  onEmployeeSelected(ids) {
    var _this2 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A)(function* () {
      _this2.selectedEmployees = ids;
      _this2.mappedCalendarEvents();
    })();
  }
  /**
   * Handles any additional processing or updates needed after mapping calendar events.
   * Filters calendar events based on the selected candidates and employees.
   */
  mappedCalendarEvents() {
    var _this3 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A)(function* () {
      let events = [];
      const isCandidateSelected = _this3.selectedCandidates.length;
      const isEmployeeSelected = _this3.selectedEmployees.length;
      if (isCandidateSelected === 0 && isEmployeeSelected === 0) {
        // If there are no filters, use all calendar events
        _this3.calendarOptions.events = _this3.calendarEvents;
        return;
      }
      for (const event of _this3.calendarEvents) {
        const isMatchCandidate = _this3.selectedCandidates.includes(event.candidateId);
        const isMatchEmployee = event.employeeIds.some(id => _this3.selectedEmployees.includes(id));
        if (isMatchCandidate && isMatchEmployee || isCandidateSelected > 0 && isMatchCandidate || isEmployeeSelected > 0 && isMatchEmployee) {
          events.push(event);
        }
      }
      _this3.calendarOptions.events = events;
    })();
  }
  /**
   * Opens a dialog for scheduling an interview within the selected date range.
   * If the dialog closes with data, a success message is displayed.
   *
   * @param selectedRange - The date range for scheduling an interview (optional).
   */
  add(selectedRange) {
    var _this4 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A)(function* () {
      try {
        const dialog = _this4._nbDialogService.open(_gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_18__/* .CandidateInterviewMutationComponent */ .X, {
          context: {
            headerTitle: _this4.getTranslation('CANDIDATES_PAGE.EDIT_CANDIDATE.INTERVIEW.SCHEDULE_INTERVIEW'),
            isCalendar: true,
            selectedRangeCalendar: selectedRange,
            interviews: _this4.interviews
          }
        });
        const data = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_19__/* .firstValueFrom */ ._)(dialog.onClose);
        if (data) {
          _this4._toastrService.success(`TOASTR.MESSAGE.CANDIDATE_EDIT_CREATED`, {
            name: data.title
          });
        }
      } catch (error) {
        // Handle and log errors
        _this4._errorHandlingService.handleError(error);
      } finally {
        _this4.subject$.next(true);
      }
    })();
  }
  /**
   * Determines if the date selection is allowed based on the criteria.
   *
   * @param param0 - An object containing the start and end dates of the selection.
   * @returns {boolean} - Returns true if the selection is allowed, false otherwise.
   */
  selectAllow({
    start,
    end
  }) {
    return moment__WEBPACK_IMPORTED_MODULE_1__(start).isSame(moment__WEBPACK_IMPORTED_MODULE_1__(end), 'day');
  }
  /**
   * Handles the event click action by opening a modal dialog to view the time log details.
   *
   * @param param0 - An object containing the clicked event.
   */
  handleEventClick({
    event
  }) {
    const id = event._def.extendedProps.id;
    this._nbDialogService.open(_gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_20__/* .CandidateInterviewInfoComponent */ .Q, {
      context: {
        interviewId: id,
        interviews: this.interviews,
        isSlider: false
      }
    });
  }
  /**
   * Handles the date click event in the calendar.
   * If the current view is 'dayGridMonth', changes the view to 'timeGridWeek' starting from the clicked date.
   *
   * @param event - The event object containing details about the clicked date.
   */
  handleDateClick(event) {
    if (event.view.type === 'dayGridMonth') {
      if (this.calendarComponent) {
        this.calendarComponent.getApi().changeView('timeGridWeek', event.date);
      }
    }
  }
  /**
   * Handles the event selection in the calendar.
   * If the selected event's start time is in the future, adds the event. Otherwise, disables the cursor.
   *
   * @param event - The event object containing details about the selected event.
   */
  handleEventSelect(event) {
    const now = new Date().getTime();
    if (now < event.start.getTime()) {
      this.add({
        start: event.start,
        end: event.end
      });
    } else {
      (0,_fullcalendar_core_internal__WEBPACK_IMPORTED_MODULE_21__.av)();
    }
  }
  /**
   * Handles the mouse enter event over a calendar event.
   * Checks if the event element has overflow and, if so, un-sets its position style.
   *
   * @param param0 - The event object containing details about the hovered element.
   */
  handleEventMouseEnter({
    el
  }) {
    if (this.hasOverflow(el.querySelector('.fc-event-main'))) {
      el.style.position = 'unset';
    }
  }
  /**
   * Handles the mouse leave event over a calendar event.
   * Removes the style attribute from the event element.
   *
   * @param param0 - The event object containing details about the hovered element.
   */
  handleEventMouseLeave({
    el
  }) {
    el.removeAttribute('style');
  }
  /**
   * Checks if a given element has overflow.
   * Temporarily sets the overflow style to 'hidden' if it is not already set,
   * checks for overflow, and then restores the original overflow style.
   *
   * @param el - The element to check for overflow.
   * @returns A boolean indicating whether the element has overflow.
   */
  hasOverflow(el) {
    if (!el) {
      return;
    }
    const curOverflow = el.style ? el.style.overflow : 'hidden';
    if (!curOverflow || curOverflow === 'visible') {
      el.style.overflow = 'hidden';
    }
    const isOverflowing = el.clientWidth < el.scrollWidth || el.clientHeight < el.scrollHeight;
    if (el.style) {
      el.style.overflow = curOverflow;
    }
    return isOverflowing;
  }
  ngOnDestroy() {}
  static {
    this.ɵfac = function InterviewCalendarComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || InterviewCalendarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_22__/* .TranslateService */ .c$), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .rXU(_nebular_theme__WEBPACK_IMPORTED_MODULE_23__/* .NbDialogService */ .S0W), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_24__/* .CandidateInterviewService */ .C), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_25__/* .ToastrService */ .t), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_26__/* .EmployeesService */ .r), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_27__/* .Store */ .il), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_28__/* .ErrorHandlingService */ .X));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineComponent"] */ .VBU({
      type: InterviewCalendarComponent,
      selectors: [["ga-interview-calendar"]],
      viewQuery: function InterviewCalendarComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵviewQuery"] */ .GBs(_c0, 7);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵqueryRefresh"] */ .mGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵloadQuery"] */ .lsd()) && (ctx.calendarComponent = _t.first);
        }
      },
      standalone: false,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
      decls: 11,
      vars: 8,
      consts: [["calendar", ""], [1, "main-header"], [1, "buttons"], [1, "multi-select", 3, "selectedChange", "allEmployees", "label"], [1, "multi-select", 3, "selectedChange"], [4, "ngIf"], [1, "custom-calendar", 3, "options"]],
      template: function InterviewCalendarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(0, "nb-card")(1, "nb-card-header", 1)(2, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(4, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(5, "div", 2)(6, "ga-employee-multi-select", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(7, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .bIt("selectedChange", function InterviewCalendarComponent_Template_ga_employee_multi_select_selectedChange_6_listener($event) {
            return ctx.onEmployeeSelected($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(8, "ga-candidate-multi-select", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .bIt("selectedChange", function InterviewCalendarComponent_Template_ga_candidate_multi_select_selectedChange_8_listener($event) {
            return ctx.onCandidateSelected($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(9, "nb-card-body");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .DNE(10, InterviewCalendarComponent_ng_container_10_Template, 3, 1, "ng-container", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(4, 4, "CANDIDATES_PAGE.EDIT_CANDIDATE.INTERVIEW.SCHEDULED_INTERVIEWS"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("allEmployees", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(7, 6, ctx.employees$))("label", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.calendarOptions);
        }
      },
      dependencies: [_fullcalendar_angular__WEBPACK_IMPORTED_MODULE_29__/* .FullCalendarComponent */ .x, _nebular_theme__WEBPACK_IMPORTED_MODULE_23__/* .NbCardComponent */ .SrT, _nebular_theme__WEBPACK_IMPORTED_MODULE_23__/* .NbCardBodyComponent */ .KH5, _nebular_theme__WEBPACK_IMPORTED_MODULE_23__/* .NbCardHeaderComponent */ .zJv, _angular_common__WEBPACK_IMPORTED_MODULE_30__/* .NgIf */ .bT, _packages_ui_core_shared_src_lib_candidate_selectors_candidate_multi_select_candidate_multi_select_component__WEBPACK_IMPORTED_MODULE_31__/* .CandidateMultiSelectComponent */ .y, _packages_ui_core_shared_src_lib_employee_employee_multi_select_employee_multi_select_component__WEBPACK_IMPORTED_MODULE_32__/* .EmployeeSelectComponent */ .O, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_22__/* .TranslatePipe */ .D9, _angular_common__WEBPACK_IMPORTED_MODULE_30__/* .AsyncPipe */ .Jj],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.main-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.buttons[_ngcontent-%COMP%] {\n  width: 45rem;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n}\n\n  .buttons {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n  .buttons nb-select.shape-rectangle .select-button {\n  border-radius: calc(var(--button-rectangle-border-radius) / 1.625);\n  box-shadow: var(--gauzy-shadow);\n  height: 2rem;\n  display: flex;\n  align-items: center;\n  border: none;\n}\n  .buttons nb-select.appearance-outline.size-medium .select-button {\n  border: none;\n}\n  .buttons nb-select button span {\n  display: block;\n  overflow-x: hidden;\n  text-overflow: ellipsis;\n}\n\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%], \n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n}\n[dir=ltr]   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  padding: 0.75rem 0.5rem 0.75rem 0.75rem !important;\n}\n[dir=rtl]   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  padding: 0.75rem 0.75rem 0.75rem 0.5rem !important;\n}\n[_nghost-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  line-height: 22px;\n  letter-spacing: 0em;\n}\n[_nghost-%COMP%]   .custom-calendar[_ngcontent-%COMP%] {\n  overflow-y: auto;\n  height: calc(100vh - 21.75rem);\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  height: 100%;\n  border-radius: var(--border-radius);\n  border: unset;\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  flex: 0 1 auto;\n  border-bottom: unset;\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  overflow: unset;\n  height: calc(100vh - var(--header-height) - var(--footer-height) - 11.5rem);\n  background-color: var(--gauzy-card-2);\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%] {\n  border: unset;\n  flex: 0 1 auto;\n}"]
    });
  }
};
InterviewCalendarComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_33__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_12__/* .UntilDestroy */ .d)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_33__/* .__metadata */ .Sn)("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_22__/* .TranslateService */ .c$, _nebular_theme__WEBPACK_IMPORTED_MODULE_23__/* .NbDialogService */ .S0W, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_24__/* .CandidateInterviewService */ .C, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_25__/* .ToastrService */ .t, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_26__/* .EmployeesService */ .r, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_27__/* .Store */ .il, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_28__/* .ErrorHandlingService */ .X])], InterviewCalendarComponent);


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

/***/ 58504:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ FavoriteToggleModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14572);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56383);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19223);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);




let FavoriteToggleModule = /*#__PURE__*/(() => {
  class FavoriteToggleModule {
    static {
      this.ɵfac = function FavoriteToggleModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || FavoriteToggleModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .$C({
        type: FavoriteToggleModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .CommonModule */ .MD, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbButtonModule */ .P5N, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbIconModule */ .clu, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbTooltipModule */ .IB0, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__/* .TranslateModule */ .h]
      });
    }
  }
  return FavoriteToggleModule;
})();

/***/ }),

/***/ 59193:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   t: () => (/* binding */ InterviewCriterionsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _candidate_technologies_candidate_technologies_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43548);
/* harmony import */ var _candidate_personal_qualities_candidate_personal_qualities_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2556);



let InterviewCriterionsComponent = /*#__PURE__*/(() => {
  class InterviewCriterionsComponent {
    constructor() {}
    static {
      this.ɵfac = function InterviewCriterionsComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || InterviewCriterionsComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: InterviewCriterionsComponent,
        selectors: [["ga-interview-criterions"]],
        standalone: false,
        decls: 3,
        vars: 0,
        consts: [[1, "add-criterion"], [1, "add-criterion-card"]],
        template: function InterviewCriterionsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "ga-candidate-technologies", 1)(2, "ga-candidate-personal-qualities", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
          }
        },
        dependencies: [_candidate_technologies_candidate_technologies_component__WEBPACK_IMPORTED_MODULE_1__/* .CandidateTechnologiesComponent */ .V, _candidate_personal_qualities_candidate_personal_qualities_component__WEBPACK_IMPORTED_MODULE_2__/* .CandidatePersonalQualitiesComponent */ .U],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.add-criterion[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: flex-start;\n  background-color: var(--gauzy-card-2);\n  padding: 1rem;\n  border-radius: var(--border-radius);\n  height: calc(100vh - 16.5rem);\n  overflow-y: auto;\n}\n.add-criterion-card[_ngcontent-%COMP%] {\n  width: 49.5%;\n}"]
      });
    }
  }
  return InterviewCriterionsComponent;
})();

/***/ }),

/***/ 62241:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   w: () => (/* binding */ EditCandidateProfileComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73014);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(64411);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(19159);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9620);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(56383);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(19223);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(84536);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(32629);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(57044);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(15480);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(54263);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(90022);
/* harmony import */ var _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38546);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(71924);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23423);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(46125);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(36950);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(14572);
/* harmony import */ var _packages_ui_core_shared_src_lib_components_back_navigation_back_navigation_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(90910);



















function EditCandidateProfileComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(ctx_r0.selectedCandidate == null ? null : ctx_r0.selectedCandidate.user == null ? null : ctx_r0.selectedCandidate.user.name);
  }
}
function EditCandidateProfileComponent_span_8_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainer"] */ .eu8(0);
  }
}
function EditCandidateProfileComponent_span_8_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(0);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" (", ctx_r0.selectedCandidate == null ? null : ctx_r0.selectedCandidate.user.username, ") ");
  }
}
function EditCandidateProfileComponent_span_8_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(0);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" '", ctx_r0.selectedCandidate == null ? null : ctx_r0.selectedCandidate.user.username, "' ");
  }
}
function EditCandidateProfileComponent_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, EditCandidateProfileComponent_span_8_ng_container_1_Template, 1, 0, "ng-container", 11)(2, EditCandidateProfileComponent_span_8_ng_template_2_Template, 1, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplateRefExtractor"] */ .C5r)(4, EditCandidateProfileComponent_span_8_ng_template_4_Template, 1, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplateRefExtractor"] */ .C5r);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const withBraces_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(3);
    const withQuotes_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(5);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r0.selectedCandidate == null ? null : ctx_r0.selectedCandidate.user.name)("ngIfThen", withBraces_r2)("ngIfElse", withQuotes_r3);
  }
}
function EditCandidateProfileComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(0, "div", 12);
  }
}
let EditCandidateProfileComponent = class EditCandidateProfileComponent extends _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_1__/* .TranslationBaseComponent */ .K {
  constructor(route, location, candidatesService, candidateStore, userService, toastrService, errorHandler, dialogService, candidateInterviewService, translateService, store) {
    super(translateService);
    this.route = route;
    this.location = location;
    this.candidatesService = candidatesService;
    this.candidateStore = candidateStore;
    this.userService = userService;
    this.toastrService = toastrService;
    this.errorHandler = errorHandler;
    this.dialogService = dialogService;
    this.candidateInterviewService = candidateInterviewService;
    this.translateService = translateService;
    this.store = store;
    this.candidateName = 'Candidate';
  }
  ngOnInit() {
    this.route.params.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__/* .untilDestroyed */ .s)(this)).subscribe(params => {
      this.routeParams = params;
      this.store.selectedOrganization$.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__/* .untilDestroyed */ .s)(this)).subscribe(organization => {
        if (organization) {
          this.selectedOrganization = this.store.selectedOrganization;
          this._loadCandidateData();
        }
      });
    });
    this.candidateStore.userForm$.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__/* .untilDestroyed */ .s)(this)).subscribe(value => {
      this.submitUserForm(value);
    });
    this.candidateStore.candidateForm$.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__/* .untilDestroyed */ .s)(this)).subscribe(value => {
      this.submitCandidateForm(value);
    });
    this.loadTabs();
    this._applyTranslationOnTabs();
  }
  loadInterviews() {
    var _this = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(function* () {
      const {
        id: organizationId,
        tenantId
      } = _this.selectedOrganization;
      const interviews = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_4__/* .firstValueFrom */ ._)(_this.candidateInterviewService.getAll(['interviewers', 'technologies', 'personalQualities', 'feedbacks'], {
        candidateId: _this.selectedCandidate.id,
        organizationId,
        tenantId
      }));
      if (interviews) {
        _this.interviewList = interviews.items;
        const now = new Date().getTime();
        _this.futureInterviews = _this.interviewList.filter(item => new Date(item.startTime).getTime() > now);
      }
    })();
  }
  interviewInfo() {
    var _this2 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(function* () {
      if (_this2.futureInterviews.length > 0) {
        _this2.dialogService.open(_gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_5__/* .CandidateInterviewInfoComponent */ .Q, {
          context: {
            interviews: _this2.futureInterviews,
            selectedCandidate: _this2.selectedCandidate,
            isSlider: true
          }
        });
      }
    })();
  }
  getRoute(tab) {
    return `/pages/employees/candidates/edit/${this.routeParams.id}/profile/${tab}`;
  }
  loadTabs() {
    this.tabs = [{
      title: this.getTranslation('CANDIDATES_PAGE.EDIT_CANDIDATE.ACCOUNT'),
      icon: 'person-outline',
      responsive: true,
      route: this.getRoute('account')
    }, {
      title: this.getTranslation('CANDIDATES_PAGE.EDIT_CANDIDATE.EMPLOYMENT'),
      icon: 'browser-outline',
      responsive: true,
      route: this.getRoute('employment')
    }, {
      title: this.getTranslation('CANDIDATES_PAGE.EDIT_CANDIDATE.HIRING'),
      icon: 'map-outline',
      responsive: true,
      route: this.getRoute('hiring')
    }, {
      title: this.getTranslation('CANDIDATES_PAGE.EDIT_CANDIDATE.LOCATION'),
      icon: 'pin-outline',
      responsive: true,
      route: this.getRoute('location')
    }, {
      title: this.getTranslation('CANDIDATES_PAGE.EDIT_CANDIDATE.RATE'),
      icon: 'pricetags-outline',
      responsive: true,
      route: this.getRoute('rates')
    }, {
      title: this.getTranslation('CANDIDATES_PAGE.EDIT_CANDIDATE.TASKS'),
      icon: 'layers-outline',
      responsive: true,
      route: this.getRoute('tasks')
    }, {
      title: this.getTranslation('CANDIDATES_PAGE.EDIT_CANDIDATE.EXPERIENCE'),
      icon: 'book-open-outline',
      responsive: true,
      route: this.getRoute('experience')
    }, {
      title: this.getTranslation('CANDIDATES_PAGE.EDIT_CANDIDATE.HISTORY'),
      icon: 'archive-outline',
      responsive: true,
      route: this.getRoute('history')
    }, {
      title: this.getTranslation('CANDIDATES_PAGE.EDIT_CANDIDATE.DOCUMENTS'),
      icon: 'file-text-outline',
      responsive: true,
      route: this.getRoute('documents')
    }, {
      title: this.getTranslation('CANDIDATES_PAGE.EDIT_CANDIDATE.INTERVIEW.INTERVIEW'),
      icon: 'people-outline',
      responsive: true,
      route: this.getRoute('interview')
    }, {
      title: this.getTranslation('CANDIDATES_PAGE.EDIT_CANDIDATE.FEEDBACKS'),
      icon: 'message-square-outline',
      responsive: true,
      route: this.getRoute('feedbacks')
    }];
  }
  goBack() {
    this.location.back();
  }
  submitCandidateForm(value) {
    var _this3 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(function* () {
      if (value) {
        try {
          const {
            organizationId,
            tenantId
          } = _this3.selectedCandidate;
          yield _this3.candidatesService.update(_this3.selectedCandidate.id, {
            ...value,
            organizationId,
            tenantId
          });
          _this3.toastrService.success('TOASTR.MESSAGE.CANDIDATE_PROFILE_UPDATE', {
            name: _this3.candidateName
          });
          _this3._loadCandidateData();
        } catch (error) {
          _this3.errorHandler.handleError(error);
        }
      }
    })();
  }
  /**
   * This is to update the User details of an Candidate.
   * Do NOT use this function to update any details which are NOT stored in the User Entity.
   */
  submitUserForm(value) {
    var _this4 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(function* () {
      if (value) {
        try {
          yield _this4.userService.update(_this4.selectedCandidate.user.id, value);
          _this4.toastrService.success('TOASTR.MESSAGE.CANDIDATE_PROFILE_UPDATE', {
            name: _this4.candidateName
          });
          _this4._loadCandidateData();
        } catch (error) {
          _this4.errorHandler.handleError(error);
        }
      }
    })();
  }
  _loadCandidateData() {
    var _this5 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(function* () {
      const {
        id
      } = _this5.routeParams;
      const {
        tenantId
      } = _this5.store.user;
      const {
        id: organizationId
      } = _this5.selectedOrganization;
      const candidate = yield _this5.candidatesService.getCandidateById(id, ['user', 'tags', 'contact', 'organizationPosition', 'organizationDepartments', 'organizationEmploymentTypes'], {
        organizationId,
        tenantId
      });
      if (!candidate) {
        return false;
      }
      _this5.selectedCandidate = candidate;
      const checkUsername = _this5.selectedCandidate.user.username;
      _this5.candidateName = checkUsername ? checkUsername : 'Candidate';
      _this5.candidateStore.selectedCandidate = _this5.selectedCandidate;
      _this5.loadInterviews();
    })();
  }
  _applyTranslationOnTabs() {
    this.translateService.onLangChange.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__/* .untilDestroyed */ .s)(this)).subscribe(() => {
      this.loadTabs();
    });
  }
  ngOnDestroy() {}
  static {
    this.ɵfac = function EditCandidateProfileComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || EditCandidateProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_router__WEBPACK_IMPORTED_MODULE_6__/* .ActivatedRoute */ .nX), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_common__WEBPACK_IMPORTED_MODULE_7__/* .Location */ .aZ), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_8__/* .CandidatesService */ .S), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_9__/* .CandidateStore */ .R), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_10__/* .UsersService */ .g), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_11__/* .ToastrService */ .t), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_12__/* .ErrorHandlingService */ .X), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_nebular_theme__WEBPACK_IMPORTED_MODULE_13__/* .NbDialogService */ .S0W), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_14__/* .CandidateInterviewService */ .C), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__/* .TranslateService */ .c$), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_16__/* .Store */ .il));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
      type: EditCandidateProfileComponent,
      selectors: [["ga-edit-candidate-profile"]],
      standalone: false,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵProvidersFeature"] */ .Jv_([_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_9__/* .CandidateStore */ .R]), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
      decls: 14,
      vars: 7,
      consts: [["withBraces", ""], ["withQuotes", ""], [1, "card-scroll"], [1, "card-header-title"], [3, "ngIf"], [4, "ngIf"], [1, "notification", 3, "click"], ["icon", "bell-outline", 1, "bell"], ["class", "exist", 4, "ngIf"], [1, "p-3"], [3, "tabs"], [4, "ngIf", "ngIfThen", "ngIfElse"], [1, "exist"]],
      template: function EditCandidateProfileComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-card", 2)(1, "nb-card-header", 3)(2, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(3, "ngx-back-navigation");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(4, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(6, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(7, EditCandidateProfileComponent_ng_template_7_Template, 2, 1, "ng-template", 4)(8, EditCandidateProfileComponent_span_8_Template, 6, 3, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(9, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function EditCandidateProfileComponent_Template_div_click_9_listener() {
            return ctx.interviewInfo();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(10, "nb-icon", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(11, EditCandidateProfileComponent_div_11_Template, 1, 0, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(12, "nb-card-body", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(13, "nb-route-tabset", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(6, 5, "CANDIDATES_PAGE.EDIT_CANDIDATE.HEADER"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.selectedCandidate == null ? null : ctx.selectedCandidate.user == null ? null : ctx.selectedCandidate.user.name);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.selectedCandidate == null ? null : ctx.selectedCandidate.user == null ? null : ctx.selectedCandidate.user.username);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", (ctx.futureInterviews == null ? null : ctx.futureInterviews.length) > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("tabs", ctx.tabs);
        }
      },
      dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_13__/* .NbCardComponent */ .SrT, _nebular_theme__WEBPACK_IMPORTED_MODULE_13__/* .NbCardBodyComponent */ .KH5, _nebular_theme__WEBPACK_IMPORTED_MODULE_13__/* .NbCardHeaderComponent */ .zJv, _nebular_theme__WEBPACK_IMPORTED_MODULE_13__/* .NbIconComponent */ .tHu, _nebular_theme__WEBPACK_IMPORTED_MODULE_13__/* .NbRouteTabsetComponent */ .ssE, _angular_common__WEBPACK_IMPORTED_MODULE_17__/* .NgIf */ .bT, _packages_ui_core_shared_src_lib_components_back_navigation_back_navigation_component__WEBPACK_IMPORTED_MODULE_18__/* .BackNavigationComponent */ .r, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__/* .TranslatePipe */ .D9],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]     input, \n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]     nb-select.appearance-outline.status-basic .select-button, \n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]     .ng-select .ng-select-container {\n  background-color: var(--gauzy-card-1) !important;\n  border: none;\n  height: 42px !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder, \n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {\n  top: unset !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]     label, \n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]     .label {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  color: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]     textarea {\n  background-color: var(--gauzy-card-1) !important;\n  border: none;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]     .ng-select .ng-select-container input, \n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]     nb-tag-list input {\n  background-color: unset !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]     ngx-image-uploader input {\n  height: 100% !important;\n}\n\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  padding: 50px 70px;\n}\n@media only screen and (max-width: 1532px) {\n  [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n    padding: 30px 40px;\n  }\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .navigate[_ngcontent-%COMP%] {\n  display: flex;\n  margin-bottom: 35px;\n  cursor: pointer;\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .navigate[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: 7px;\n  font-size: 14px;\n  color: #2a2c39;\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  display: flex;\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .employee-container[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  transition: transform 150ms ease-in-out;\n}\n[dir=rtl]   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .employee-container[_ngcontent-%COMP%] {\n  padding-left: 70px;\n}\n[dir=ltr]   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .employee-container[_ngcontent-%COMP%] {\n  padding-right: 70px;\n}\n[dir=rtl]   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .employee-container[_ngcontent-%COMP%] {\n  margin-left: 70px;\n}\n[dir=ltr]   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .employee-container[_ngcontent-%COMP%] {\n  margin-right: 70px;\n}\n[dir=rtl]   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .employee-container[_ngcontent-%COMP%] {\n  border-left: 1px solid rgba(0, 0, 0, 0.1);\n}\n[dir=ltr]   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .employee-container[_ngcontent-%COMP%] {\n  border-right: 1px solid rgba(0, 0, 0, 0.1);\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .employee-container[_ngcontent-%COMP%]   .employee-photo[_ngcontent-%COMP%] {\n  width: fit-content;\n  height: 200px;\n  position: relative;\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .employee-container[_ngcontent-%COMP%]   .employee-photo[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  pointer-events: none;\n  background: black;\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  border-radius: 13px;\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .employee-container[_ngcontent-%COMP%]   .employee-photo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 200px;\n  border-radius: 13px;\n  object-fit: cover;\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .employee-container[_ngcontent-%COMP%]   .employee-photo[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100% !important;\n  opacity: 0;\n  position: absolute;\n  z-index: 3;\n  cursor: pointer;\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .employee-container[_ngcontent-%COMP%]   .employee-photo[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  z-index: 2;\n  transition: opacity 0.2s ease-in;\n  opacity: 0.3;\n  position: absolute;\n  top: calc(50% - 34px);\n  left: calc(50% - 34px);\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .employee-container[_ngcontent-%COMP%]   .employee-photo[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   g[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%] {\n  fill: var(--text-primary-color);\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  position: relative;\n  margin-top: 10px;\n  display: flex;\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .employee-form[_ngcontent-%COMP%] {\n  width: 60%;\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  width: 100%;\n  margin-top: 30px;\n}\n\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.notification[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  background-color: rgb(0, 145, 255);\n}\n\n.notification[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n[_nghost-%COMP%]   .bell[_ngcontent-%COMP%] {\n  color: white !important;\n  font-size: 18px;\n  position: absolute;\n  margin-top: 9px;\n}\n[dir=ltr]   [_nghost-%COMP%]   .bell[_ngcontent-%COMP%] {\n  margin-left: 9px;\n}\n[dir=rtl]   [_nghost-%COMP%]   .bell[_ngcontent-%COMP%] {\n  margin-right: 9px;\n}\n\n[_nghost-%COMP%]   .exist[_ngcontent-%COMP%] {\n  position: absolute;\n  font-size: 8px;\n  top: 9px;\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background-color: #f10;\n}\n[dir=ltr]   [_nghost-%COMP%]   .exist[_ngcontent-%COMP%] {\n  right: 8px;\n}\n[dir=rtl]   [_nghost-%COMP%]   .exist[_ngcontent-%COMP%] {\n  left: 8px;\n}\n\n.nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n}\n\n.org-settings[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  overflow: unset;\n  height: calc(100vh - 20rem);\n}\n[_nghost-%COMP%]     .route-tabset .route-tab a.tab-link {\n  border-radius: var(--border-radius) var(--border-radius) 0 0;\n}\n[_nghost-%COMP%]     .route-tabset .route-tab a.tab-link span.tab-text {\n  text-transform: lowercase;\n  display: block;\n}\n[_nghost-%COMP%]     .route-tabset .route-tab a.tab-link span.tab-text:first-letter {\n  text-transform: uppercase;\n}\n\n[_nghost-%COMP%]     nb-route-tabset ul.route-tabset {\n  padding: 0;\n}\n@media only screen and (max-width: 1532px) {\n  [_nghost-%COMP%]     nb-route-tabset ul.route-tabset {\n    flex-wrap: wrap;\n  }\n}\n[_nghost-%COMP%]     nb-route-tabset .tab-link {\n  padding: 0.6428571429rem 1.4285714286rem;\n}\n@media only screen and (max-width: 1532px) {\n  [_nghost-%COMP%]     nb-route-tabset .tab-link {\n    padding: 0.7142857143rem 1.4285714286rem;\n  }\n}\n@media only screen and (max-width: 1440px) {\n  [_nghost-%COMP%]     nb-route-tabset .tab-link {\n    padding: 0.7142857143rem 1.7857142857rem;\n  }\n}\n@media only screen and (max-width: 1280px) {\n  [_nghost-%COMP%]     nb-route-tabset .tab-link {\n    padding: 0.7142857143rem 1.4285714286rem;\n  }\n}\n[_nghost-%COMP%]     nb-route-tabset .tab-link nb-icon {\n  display: block;\n  margin: auto;\n  margin-bottom: 8px;\n}\n\nh4[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 600;\n  line-height: 30px;\n  letter-spacing: 0em;\n}\n\n[_nghost-%COMP%]     input, \n[_nghost-%COMP%]     nb-select.appearance-outline.status-basic .select-button, \n[_nghost-%COMP%]     .ng-select .ng-select-container {\n  background-color: var(--gauzy-card-1) !important;\n  border: none;\n  height: 42px !important;\n}\n[_nghost-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder, \n[_nghost-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {\n  top: unset !important;\n}\n[_nghost-%COMP%]     label, \n[_nghost-%COMP%]     .label {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  color: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]     textarea {\n  background-color: var(--gauzy-card-1) !important;\n  border: none;\n}\n[_nghost-%COMP%]     .ng-select .ng-select-container input, \n[_nghost-%COMP%]     nb-tag-list input {\n  background-color: unset !important;\n}"]
    });
  }
};
EditCandidateProfileComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_19__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__/* .UntilDestroy */ .d)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_19__/* .__metadata */ .Sn)("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__/* .ActivatedRoute */ .nX, _angular_common__WEBPACK_IMPORTED_MODULE_7__/* .Location */ .aZ, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_8__/* .CandidatesService */ .S, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_9__/* .CandidateStore */ .R, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_10__/* .UsersService */ .g, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_11__/* .ToastrService */ .t, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_12__/* .ErrorHandlingService */ .X, _nebular_theme__WEBPACK_IMPORTED_MODULE_13__/* .NbDialogService */ .S0W, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_14__/* .CandidateInterviewService */ .C, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__/* .TranslateService */ .c$, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_16__/* .Store */ .il])], EditCandidateProfileComponent);


/***/ }),

/***/ 64383:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   W: () => (/* binding */ EditCandidateMainComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(73014);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(64411);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10936);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(23423);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(57733);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72781);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73246);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(71924);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(15480);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(84536);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26024);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(26860);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(56383);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(14572);
/* harmony import */ var _packages_ui_core_shared_src_lib_directives_img_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(71466);
/* harmony import */ var _packages_ui_core_shared_src_lib_image_uploader_image_uploader_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(79455);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(19223);
















const _c0 = a0 => ({
  opacity: a0
});
/**
 * This component contains the properties stored within the User Entity of an candidate.
 * Any property which is either stored directly in the candidate entity or as a relation of the candidate entity should NOT be put in this Component
 */
let EditCandidateMainComponent = class EditCandidateMainComponent {
  constructor(_fb, _store, _toastrService, _candidateStore) {
    this._fb = _fb;
    this._store = _store;
    this._toastrService = _toastrService;
    this._candidateStore = _candidateStore;
    /*
     * Candidate Main Mutation Form
     */
    this.form = this._fb.group({
      username: [],
      email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__/* .Validators */ .k0.required],
      firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__/* .Validators */ .k0.required],
      lastName: [],
      imageUrl: [{
        value: null,
        disabled: true
      }],
      imageId: []
    });
  }
  ngOnInit() {
    const storeOrganization$ = this._store.selectedOrganization$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__/* .filter */ .p)(organization => !!organization), (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_2__/* .distinctUntilChange */ .nI)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .tap */ .M)(organization => {
      this.organization = organization;
    }));
    const storeCandidate$ = this._candidateStore.selectedCandidate$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__/* .filter */ .p)(candidate => !!candidate), (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_2__/* .distinctUntilChange */ .nI)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .tap */ .M)(candidate => {
      this.selectedCandidate = candidate;
    }));
    (0,rxjs__WEBPACK_IMPORTED_MODULE_4__/* .combineLatest */ .z)([storeOrganization$, storeCandidate$]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .tap */ .M)(() => this._initializeFormValue(this.selectedCandidate)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .untilDestroyed */ .s)(this)).subscribe();
  }
  /**
   * Handles form submission and updates the candidate store with the form value.
   */
  onSubmit() {
    var _this = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(function* () {
      try {
        if (_this.form.valid) {
          // Update user form data in store (assuming updateUserForm is async)
          yield _this._candidateStore.updateUserForm(_this.form.value);
        }
      } catch (error) {
        _this.handleSubmissionError(error);
      }
    })();
  }
  /**
   * Initializes form values with the given candidate data.
   *
   * @param candidate - The candidate data to initialize the form with.
   */
  _initializeFormValue(candidate) {
    const {
      username,
      email,
      firstName,
      lastName,
      imageUrl,
      imageId
    } = candidate?.user || {};
    this.form.patchValue({
      username,
      email,
      firstName,
      lastName,
      imageUrl,
      imageId
    });
  }
  /**
   * Upload candidate image/avatar
   *
   * @param image - The image asset to update.
   */
  updateImageAsset(image) {
    var _this2 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(function* () {
      if (image) {
        try {
          yield _this2._candidateStore.updateUserForm({
            imageId: image.id
          });
        } catch (error) {
          console.error('Error while updating candidate avatar:', error);
          _this2.handleImageUploadError(error);
        }
      }
    })();
  }
  /**
   * Handles errors during form submission.
   *
   * @param error - The error object to handle.
   */
  handleSubmissionError(error) {
    // Optional: Implement error handling logic (e.g., show error message)
    console.error('Form submission error:', error);
    this._toastrService.danger(error);
  }
  /**
   * Handle errors during image upload.
   *
   * @param error - The error object to handle.
   */
  handleImageUploadError(error) {
    this._toastrService.danger('Error uploading image: ' + (error.message || error));
  }
  ngOnDestroy() {}
  static {
    this.ɵfac = function EditCandidateMainComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || EditCandidateMainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_forms__WEBPACK_IMPORTED_MODULE_0__/* .UntypedFormBuilder */ .ze), _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_8__/* .Store */ .il), _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_9__/* .ToastrService */ .t), _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_10__/* .CandidateStore */ .R));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵdefineComponent"] */ .VBU({
      type: EditCandidateMainComponent,
      selectors: [["ga-edit-candidate-main"]],
      standalone: false,
      decls: 49,
      vars: 36,
      consts: [[1, "content"], [1, "organization-container", "w-25", "d-flex", "flex-column"], [1, "organization-photo"], [3, "changeHoverState", "uploadedImageAsset", "uploadImageAssetError"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "width", "68", "height", "68", "viewBox", "0 0 68 68", 3, "ngStyle"], ["id", "a", "d", "M28.667 31.333a2 2 0 1 0-.002-4.001 2 2 0 0 0 .002 4.001m13.333 12H26.748l9.34-7.793c.328-.279.923-.277 1.244-.001l6.001 5.12V42c0 .736-.597 1.333-1.333 1.333M26 24.667h16c.736 0 1.333.597 1.333 1.333v11.152l-4.27-3.643c-1.32-1.122-3.386-1.122-4.694-.008l-9.702 8.096V26c0-.736.597-1.333 1.333-1.333M42 22H26c-2.205 0-4 1.795-4 4v16c0 2.205 1.795 4 4 4h16c2.205 0 4-1.795 4-4V26c0-2.205-1.795-4-4-4"], ["fill", "none", "fill-rule", "evenodd"], ["cx", "34", "cy", "34", "r", "34", "fill", "#0091FF", "opacity", ".3"], ["cx", "34", "cy", "34", "r", "26", "fill", "#0091FF", "opacity", ".9"], ["fill", "#FFF", "fill-rule", "nonzero", 0, "xlink", "href", "#a"], [3, "ngStyle"], ["alt", "Profile Photo", 3, "mouseenter", "mouseleave", "src"], [1, "employee-form", "w-75", "pl-3", "pr-3"], [3, "ngSubmit", "formGroup"], [1, "row"], [1, "col"], [1, "form-group"], ["for", "usernameInput", 1, "label"], ["fullWidth", "", "id", "usernameInput", "type", "text", "nbInput", "", "formControlName", "username", 3, "placeholder"], ["for", "emailInput", 1, "label"], ["fullWidth", "", "id", "emailInput", "type", "email", "nbInput", "", "formControlName", "email", 3, "placeholder"], ["for", "firstNameInput", 1, "label"], ["fullWidth", "", "id", "firstNameInput", "type", "text", "nbInput", "", "formControlName", "firstName", 3, "placeholder"], ["for", "lastNameInput", 1, "label"], ["fullWidth", "", "id", "lastNameInput", "type", "text", "nbInput", "", "formControlName", "lastName", 3, "placeholder"], [1, "actions"], ["type", "submit", "nbButton", "", "status", "success", 3, "disabled"]],
      template: function EditCandidateMainComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵelementStart"] */ .j41(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "ngx-image-uploader", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵlistener"] */ .bIt("changeHoverState", function EditCandidateMainComponent_Template_ngx_image_uploader_changeHoverState_3_listener($event) {
            return ctx.hoverState = $event;
          })("uploadedImageAsset", function EditCandidateMainComponent_Template_ngx_image_uploader_uploadedImageAsset_3_listener($event) {
            return ctx.updateImageAsset($event);
          })("uploadImageAssetError", function EditCandidateMainComponent_Template_ngx_image_uploader_uploadImageAssetError_3_listener($event) {
            return ctx.handleImageUploadError($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵelementEnd"] */ .k0s();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵnamespaceSVG"] */ .qSk();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵelementStart"] */ .j41(4, "svg", 4)(5, "defs");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵelement"] */ .nrm(6, "path", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵelementEnd"] */ .k0s();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵelementStart"] */ .j41(7, "g", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵelement"] */ .nrm(8, "circle", 7)(9, "circle", 8)(10, "use", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵelementEnd"] */ .k0s()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵnamespaceHTML"] */ .joV();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵelement"] */ .nrm(11, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵelementStart"] */ .j41(12, "img", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵlistener"] */ .bIt("mouseenter", function EditCandidateMainComponent_Template_img_mouseenter_12_listener() {
            return ctx.hoverState = true;
          })("mouseleave", function EditCandidateMainComponent_Template_img_mouseleave_12_listener() {
            return ctx.hoverState = false;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵelementEnd"] */ .k0s()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵelementStart"] */ .j41(13, "div", 12)(14, "form", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵlistener"] */ .bIt("ngSubmit", function EditCandidateMainComponent_Template_form_ngSubmit_14_listener() {
            return ctx.onSubmit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵelementStart"] */ .j41(15, "div", 14)(16, "div", 15)(17, "div", 16)(18, "label", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵtext"] */ .EFF(19);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵpipe"] */ .nI1(20, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵelementEnd"] */ .k0s();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵelement"] */ .nrm(21, "input", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵpipe"] */ .nI1(22, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵelementEnd"] */ .k0s()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵelementStart"] */ .j41(23, "div", 15)(24, "div", 16)(25, "label", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵtext"] */ .EFF(26);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵpipe"] */ .nI1(27, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵelementEnd"] */ .k0s();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵelement"] */ .nrm(28, "input", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵpipe"] */ .nI1(29, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵelementEnd"] */ .k0s()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵelementStart"] */ .j41(30, "div", 14)(31, "div", 15)(32, "div", 16)(33, "label", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵtext"] */ .EFF(34);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵpipe"] */ .nI1(35, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵelementEnd"] */ .k0s();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵelement"] */ .nrm(36, "input", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵpipe"] */ .nI1(37, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵelementEnd"] */ .k0s()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵelementStart"] */ .j41(38, "div", 15)(39, "div", 16)(40, "label", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵtext"] */ .EFF(41);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵpipe"] */ .nI1(42, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵelementEnd"] */ .k0s();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵelement"] */ .nrm(43, "input", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵpipe"] */ .nI1(44, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵelementEnd"] */ .k0s()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵelementStart"] */ .j41(45, "div", 25)(46, "button", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵtext"] */ .EFF(47);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵpipe"] */ .nI1(48, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵelementEnd"] */ .k0s()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵadvance"] */ .R7$(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵproperty"] */ .Y8G("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵpureFunction1"] */ .eq3(32, _c0, ctx.hoverState ? "1" : "0.3"));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵadvance"] */ .R7$(7);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵproperty"] */ .Y8G("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵpureFunction1"] */ .eq3(34, _c0, ctx.hoverState ? "0.2" : "0"));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵadvance"] */ .R7$();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵproperty"] */ .Y8G("src", ctx.form.get("imageUrl").value, _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵsanitizeUrl"] */ .B4B);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵproperty"] */ .Y8G("formGroup", ctx.form);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵadvance"] */ .R7$(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵpipeBind1"] */ .bMT(20, 14, "FORM.USERNAME"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵpipeBind1"] */ .bMT(22, 16, "FORM.USERNAME"));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵadvance"] */ .R7$(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵpipeBind1"] */ .bMT(27, 18, "FORM.EMAIL"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵpipeBind1"] */ .bMT(29, 20, "FORM.EMAIL"));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵadvance"] */ .R7$(6);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵpipeBind1"] */ .bMT(35, 22, "FORM.LABELS.FIRST_NAME"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵpipeBind1"] */ .bMT(37, 24, "FORM.PLACEHOLDERS.FIRST_NAME"));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵadvance"] */ .R7$(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵpipeBind1"] */ .bMT(42, 26, "FORM.LABELS.LAST_NAME"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵpipeBind1"] */ .bMT(44, 28, "FORM.PLACEHOLDERS.LAST_NAME"));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵadvance"] */ .R7$(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵproperty"] */ .Y8G("disabled", ctx.form.invalid);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵadvance"] */ .R7$();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵpipeBind1"] */ .bMT(48, 30, "BUTTONS.SAVE"), " ");
        }
      },
      dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbButtonComponent */ .YP2, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbInputDirective */ .i6h, _angular_common__WEBPACK_IMPORTED_MODULE_12__/* .NgStyle */ .B3, _angular_forms__WEBPACK_IMPORTED_MODULE_0__/* ["ɵNgNoValidate"] */ .qT, _angular_forms__WEBPACK_IMPORTED_MODULE_0__/* .DefaultValueAccessor */ .me, _angular_forms__WEBPACK_IMPORTED_MODULE_0__/* .NgControlStatus */ .BC, _angular_forms__WEBPACK_IMPORTED_MODULE_0__/* .NgControlStatusGroup */ .cb, _angular_forms__WEBPACK_IMPORTED_MODULE_0__/* .FormGroupDirective */ .j4, _angular_forms__WEBPACK_IMPORTED_MODULE_0__/* .FormControlName */ .JD, _packages_ui_core_shared_src_lib_directives_img_directive__WEBPACK_IMPORTED_MODULE_13__/* .ImgDirective */ .z, _packages_ui_core_shared_src_lib_image_uploader_image_uploader_component__WEBPACK_IMPORTED_MODULE_14__/* .ImageUploaderComponent */ .t, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__/* .TranslatePipe */ .D9],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%] {\n  height: 100%;\n}\n[dir=ltr]   [_nghost-%COMP%] {\n  border-radius: 0 var(--border-radius) var(--border-radius) var(--border-radius);\n}\n[dir=rtl]   [_nghost-%COMP%] {\n  border-radius: var(--border-radius) 0 var(--border-radius) var(--border-radius);\n}\n\n[_nghost-%COMP%]   .content[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100%;\n  background-color: var(--gauzy-card-2);\n  padding: 1rem;\n}\n[dir=ltr]   [_nghost-%COMP%]   .content[_ngcontent-%COMP%] {\n  border-radius: 0 var(--border-radius) var(--border-radius) var(--border-radius);\n}\n[dir=rtl]   [_nghost-%COMP%]   .content[_ngcontent-%COMP%] {\n  border-radius: var(--border-radius) 0 var(--border-radius) var(--border-radius);\n}\n[_nghost-%COMP%]   .content.main[_ngcontent-%COMP%] {\n  height: calc(100vh - 19.25rem);\n}\n\n[_nghost-%COMP%]   .organization-container[_ngcontent-%COMP%] {\n  padding: 15px;\n  position: relative;\n  display: flex;\n  align-items: flex-start;\n  flex-direction: column;\n  transition: transform 150ms ease-in-out;\n  background-color: rgba(126, 126, 143, 0.1);\n  border-radius: var(--border-radius);\n  width: 563px;\n  height: 100%;\n}\n[_nghost-%COMP%]   .organization-container[_ngcontent-%COMP%]   .organization-photo[_ngcontent-%COMP%] {\n  width: fit-content;\n  height: fit-content;\n  position: relative;\n  margin-left: 0 !important;\n}\n[_nghost-%COMP%]   .organization-container[_ngcontent-%COMP%]   .organization-photo[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  pointer-events: none;\n  background: black;\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  border-radius: var(--border-radius);\n}\n[_nghost-%COMP%]   .organization-container[_ngcontent-%COMP%]   .organization-photo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n  border-radius: var(--border-radius);\n}\n[_nghost-%COMP%]   .organization-container[_ngcontent-%COMP%]   .organization-photo[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  position: absolute;\n  z-index: 3;\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .organization-container[_ngcontent-%COMP%]   .organization-photo[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  z-index: 2;\n  transition: opacity 0.2s ease-in;\n  opacity: 0.3;\n  position: absolute;\n  top: calc(50% - 34px);\n  left: calc(50% - 34px);\n}\n[_nghost-%COMP%]   .organization-container[_ngcontent-%COMP%]   .employees-count-text[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 15px;\n  letter-spacing: 0em;\n}\n[dir=ltr]   [_nghost-%COMP%]   .organization-container[_ngcontent-%COMP%]   .employees-count-text[_ngcontent-%COMP%] {\n  margin-left: 1px;\n}\n[dir=rtl]   [_nghost-%COMP%]   .organization-container[_ngcontent-%COMP%]   .employees-count-text[_ngcontent-%COMP%] {\n  margin-right: 1px;\n}\n\n.main-form[_ngcontent-%COMP%] {\n  width: 100%;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n.main-form[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%] {\n  margin-top: 60px;\n}\n\n.row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\n  max-width: 50%;\n}\n\n  ga-currency .form-group {\n  display: inline-flex;\n  flex-direction: column;\n  min-width: 180px;\n}\n\n.tax-form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.tax-form-group[_ngcontent-%COMP%]   #taxIdInput[_ngcontent-%COMP%] {\n  width: 80%;\n}\n\n.registration-form-group[_ngcontent-%COMP%] {\n  display: inline-flex;\n  flex-direction: column;\n}\n\n  nb-select.shape-rectangle .select-button {\n  border-radius: var(--border-radius);\n}\n\n@media only screen and (max-width: 991px) {\n  .organization-container[_ngcontent-%COMP%] {\n    width: 350px;\n  }\n  .registration-form-group[_ngcontent-%COMP%]   #registrationDate[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .tax-form-group[_ngcontent-%COMP%]   #taxIdInput[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n    ga-currency .form-group {\n    display: flex;\n    flex-direction: column;\n  }\n}\n@media only screen and (max-width: 767px) {\n  [_nghost-%COMP%] {\n    height: auto;\n  }\n  .content[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .organization-container[_ngcontent-%COMP%], \n   .main-form[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .main-form[_ngcontent-%COMP%] {\n    padding: 0;\n    margin-top: 20px;\n  }\n  .row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    max-width: 100%;\n    margin-left: 0;\n  }\n  .row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\n    max-width: 100%;\n    padding: 0;\n  }\n  .form-group[_ngcontent-%COMP%] {\n    width: 100% !important;\n  }\n  .tax-form-group[_ngcontent-%COMP%]   #taxIdInput[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .registration-form-group[_ngcontent-%COMP%]   #registrationDate[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n    ga-currency .form-group {\n    display: flex;\n  }\n  .col-6[_ngcontent-%COMP%] {\n    max-width: 100%;\n    padding: 0 !important;\n  }\n  .main-form[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%] {\n    margin-top: 20px;\n  }\n}", "[_nghost-%COMP%] {\n\t\t\t\toverflow-y: auto;\n\t\t\t\tmax-height: calc(100vh - 24rem);\n\t\t\t\theight: 100%;\n\t\t\t}"]
    });
  }
};
EditCandidateMainComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_16__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .UntilDestroy */ .d)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_16__/* .__metadata */ .Sn)("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_0__/* .UntypedFormBuilder */ .ze, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_8__/* .Store */ .il, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_9__/* .ToastrService */ .t, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_10__/* .CandidateStore */ .R])], EditCandidateMainComponent);


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

/***/ 69372:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ CandidateEducationsService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80189);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26024);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64913);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26860);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45715);






let CandidateEducationsService = /*#__PURE__*/(() => {
  class CandidateEducationsService {
    constructor(http) {
      this.http = http;
    }
    create(createInput) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ ._)(this.http.post(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/candidate-educations`, createInput));
    }
    getAll(where) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ ._)(this.http.get(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/candidate-educations`, {
        params: (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_2__/* .toParams */ .SV)({
          where
        })
      }));
    }
    update(id, updateInput) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ ._)(this.http.put(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/candidate-educations/${id}`, updateInput));
    }
    delete(id) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ ._)(this.http.delete(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/candidate-educations/${id}`));
    }
    static {
      this.ɵfac = function CandidateEducationsService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || CandidateEducationsService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵinject"] */ .KVO(_angular_common_http__WEBPACK_IMPORTED_MODULE_4__/* .HttpClient */ .Qq));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdefineInjectable"] */ .jDH({
        token: CandidateEducationsService,
        factory: CandidateEducationsService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return CandidateEducationsService;
})();

/***/ }),

/***/ 70163:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   z: () => (/* binding */ CandidateDocumentsService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80189);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26024);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64913);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26860);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45715);






let CandidateDocumentsService = /*#__PURE__*/(() => {
  class CandidateDocumentsService {
    constructor(http) {
      this.http = http;
    }
    create(createInput) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ ._)(this.http.post(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/candidate-documents`, createInput));
    }
    getAll(where) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ ._)(this.http.get(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/candidate-documents`, {
        params: (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_2__/* .toParams */ .SV)({
          where
        })
      }));
    }
    update(id, updateInput) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ ._)(this.http.put(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/candidate-documents/${id}`, updateInput));
    }
    delete(id) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ ._)(this.http.delete(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/candidate-documents/${id}`));
    }
    static {
      this.ɵfac = function CandidateDocumentsService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || CandidateDocumentsService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵinject"] */ .KVO(_angular_common_http__WEBPACK_IMPORTED_MODULE_4__/* .HttpClient */ .Qq));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdefineInjectable"] */ .jDH({
        token: CandidateDocumentsService,
        factory: CandidateDocumentsService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return CandidateDocumentsService;
})();

/***/ }),

/***/ 72010:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   j: () => (/* binding */ CandidateStatusComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14572);
/* harmony import */ var _packages_ui_core_shared_src_lib_star_rating_star_rating_output_star_rating_output_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21838);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19223);




function CandidateStatusComponent_div_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div")(1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(3, 1, "CANDIDATES_PAGE.APPLIED"), " ");
  }
}
function CandidateStatusComponent_div_2_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div")(1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(3, 1, "CANDIDATES_PAGE.HIRED"), " ");
  }
}
function CandidateStatusComponent_div_2_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div")(1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(3, 1, "CANDIDATES_PAGE.REJECTED"), " ");
  }
}
function CandidateStatusComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, CandidateStatusComponent_div_2_div_1_Template, 4, 3, "div", 2)(2, CandidateStatusComponent_div_2_div_2_Template, 4, 3, "div", 2)(3, CandidateStatusComponent_div_2_div_3_Template, 4, 3, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r0.rowData.status === "APPLIED");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r0.rowData.status === "HIRED");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r0.rowData.status === "REJECTED");
  }
}
function CandidateStatusComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div")(1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(3, 1, "CANDIDATES_PAGE.ARCHIVED"), " ");
  }
}
let CandidateStatusComponent = /*#__PURE__*/(() => {
  class CandidateStatusComponent {
    static {
      this.ɵfac = function CandidateStatusComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || CandidateStatusComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: CandidateStatusComponent,
        selectors: [["ng-component"]],
        inputs: {
          rowData: "rowData",
          value: "value"
        },
        standalone: false,
        decls: 4,
        vars: 3,
        consts: [[1, "rating"], [3, "rate"], [4, "ngIf"], [1, "badge", "badge-primary"], [1, "badge", "badge-success"], [1, "badge", "badge-danger"], [1, "badge", "badge-warning"]],
        template: function CandidateStatusComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "ga-star-rating-output", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(2, CandidateStatusComponent_div_2_Template, 4, 3, "div", 2)(3, CandidateStatusComponent_div_3_Template, 4, 3, "div", 2);
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("rate", ctx.rowData.rating);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", !ctx.rowData.isArchived);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.rowData.isArchived);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .NgIf */ .bT, _packages_ui_core_shared_src_lib_star_rating_star_rating_output_star_rating_output_component__WEBPACK_IMPORTED_MODULE_2__/* .StarRatingOutputComponent */ .S, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__/* .TranslatePipe */ .D9],
        styles: [".badge-danger[_ngcontent-%COMP%] {\n  background-color: #ff3d71;\n}\n\n.badge-success[_ngcontent-%COMP%] {\n  background-color: #00d68f;\n}\n\n.badge-primary[_ngcontent-%COMP%] {\n  background-color: #0095ff;\n}\n\n.badge-warning[_ngcontent-%COMP%] {\n  background-color: #fa0;\n  color: #fff;\n}\n\ndiv[_ngcontent-%COMP%] {\n  border-radius: 0.25rem;\n  align-content: center;\n  display: flex;\n  justify-content: flex-start;\n}\n\n.badge[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 4px 8px;\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 15px;\n  letter-spacing: 0em;\n  text-align: left;\n}\n\n.rating[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}"]
      });
    }
  }
  return CandidateStatusComponent;
})();

/***/ }),

/***/ 73408:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   z: () => (/* binding */ EditCandidateExperienceComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26860);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56383);
/* harmony import */ var _edit_candidate_skills_edit_candidate_skills_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(77687);
/* harmony import */ var _edit_candidate_education_edit_candidate_education_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48696);
/* harmony import */ var _edit_candidate_experience_edit_candidate_experience_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(89989);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19223);






let EditCandidateExperienceComponent = /*#__PURE__*/(() => {
  class EditCandidateExperienceComponent {
    static {
      this.ɵfac = function EditCandidateExperienceComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || EditCandidateExperienceComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineComponent"] */ .VBU({
        type: EditCandidateExperienceComponent,
        selectors: [["ga-edit-candidate-experience"]],
        standalone: false,
        decls: 10,
        vars: 9,
        consts: [[2, "padding", "1rem"], [1, "custom-tab", 2, "padding", "1rem", 3, "tabTitle"], [2, "padding", "1rem", 3, "tabTitle"]],
        template: function EditCandidateExperienceComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "nb-tabset", 0)(1, "nb-tab", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(2, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(3, "ga-edit-candidate-education");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(4, "nb-tab", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(5, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(6, "ga-edit-candidate-experience-form");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(7, "nb-tab", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(8, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(9, "ga-edit-candidate-skills");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpropertyInterpolate"] */ .FS9("tabTitle", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(2, 3, "CANDIDATES_PAGE.EDIT_CANDIDATE.EDUCATION"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpropertyInterpolate"] */ .FS9("tabTitle", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(5, 5, "CANDIDATES_PAGE.EDIT_CANDIDATE.EXPERIENCE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpropertyInterpolate"] */ .FS9("tabTitle", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(8, 7, "CANDIDATES_PAGE.EDIT_CANDIDATE.SKILLS"));
          }
        },
        dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbTabsetComponent */ .Hsi, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbTabComponent */ .d3K, _edit_candidate_skills_edit_candidate_skills_component__WEBPACK_IMPORTED_MODULE_3__/* .EditCandidateSkillsComponent */ .Z, _edit_candidate_education_edit_candidate_education_component__WEBPACK_IMPORTED_MODULE_0__/* .EditCandidateEducationComponent */ .f, _edit_candidate_experience_edit_candidate_experience_form_component__WEBPACK_IMPORTED_MODULE_4__/* .EditCandidateExperienceFormComponent */ .b, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__/* .TranslatePipe */ .D9],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%] {\n  border-radius: var(--border-radius);\n  background-color: var(--gauzy-card-2);\n}\n[_nghost-%COMP%]   nb-tab[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n}\n[_nghost-%COMP%]     nb-tabset .tab .tab-link span.tab-text {\n  text-transform: lowercase;\n  display: block;\n}\n[_nghost-%COMP%]     nb-tabset .tab .tab-link span.tab-text:first-letter {\n  text-transform: uppercase;\n}\n\nnb-tab.content-active[_ngcontent-%COMP%] {\n  max-height: calc(100vh - 30rem);\n  overflow-y: auto;\n  border-radius: var(--border-radius);\n}\n\nnb-tab.content-active.custom-tab[_ngcontent-%COMP%] {\n  border-radius: 0 var(--border-radius) var(--border-radius) var(--border-radius);\n}"]
      });
    }
  }
  return EditCandidateExperienceComponent;
})();

/***/ }),

/***/ 74224:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ EditCandidateTasksComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _packages_ui_core_shared_src_lib_work_in_progress_work_in_progress_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(83605);


let EditCandidateTasksComponent = /*#__PURE__*/(() => {
  class EditCandidateTasksComponent {
    static {
      this.ɵfac = function EditCandidateTasksComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || EditCandidateTasksComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: EditCandidateTasksComponent,
        selectors: [["ga-edit-candidate-tasks"]],
        standalone: false,
        decls: 1,
        vars: 0,
        template: function EditCandidateTasksComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(0, "ga-wip");
          }
        },
        dependencies: [_packages_ui_core_shared_src_lib_work_in_progress_work_in_progress_component__WEBPACK_IMPORTED_MODULE_1__/* .WorkInProgressComponent */ .x],
        encapsulation: 2
      });
    }
  }
  return EditCandidateTasksComponent;
})();

/***/ }),

/***/ 76166:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   h: () => (/* binding */ CKEditorComponent),
/* harmony export */   w: () => (/* binding */ CKEditorModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26860);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14572);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10936);
/* harmony import */ var ckeditor4_integrations_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92640);






/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */
function CKEditorComponent_ng_template_0_Template(rf, ctx) {}
let CKEditorComponent = /*#__PURE__*/(() => {
  class CKEditorComponent {
    constructor(elementRef, ngZone) {
      this.elementRef = elementRef;
      this.ngZone = ngZone;
      /**
       * CKEditor 4 script url address. Script will be loaded only if CKEDITOR namespace is missing.
       *
       * Defaults to 'https://cdn.ckeditor.com/4.22.1/standard-all/ckeditor.js'
       */
      this.editorUrl = 'https://cdn.ckeditor.com/4.22.1/standard-all/ckeditor.js';
      /**
       * Tag name of the editor component.
       *
       * The default tag is `textarea`.
       */
      this.tagName = 'textarea';
      /**
       * The type of the editor interface.
       *
       * By default editor interface will be initialized as `classic` editor.
       * You can also choose to create an editor with `inline` interface type instead.
       *
       * See https://ckeditor.com/docs/ckeditor4/latest/guide/dev_uitypes.html
       * and https://ckeditor.com/docs/ckeditor4/latest/examples/fixedui.html
       * to learn more.
       */
      this.type = "classic" /* CLASSIC */;
      /**
       * Fired when the CKEDITOR https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR.html namespace
       * is loaded. It only triggers once, no matter how many CKEditor 4 components are initialised.
       * Can be used for convenient changes in the namespace, e.g. for adding external plugins.
       */
      this.namespaceLoaded = new _angular_core__WEBPACK_IMPORTED_MODULE_1__/* .EventEmitter */ .bkB();
      /**
       * Fires when the editor is ready. It corresponds with the `editor#instanceReady`
       * https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_editor.html#event-instanceReady
       * event.
       */
      this.ready = new _angular_core__WEBPACK_IMPORTED_MODULE_1__/* .EventEmitter */ .bkB();
      /**
       * Fires when the editor data is loaded, e.g. after calling setData()
       * https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_editor.html#method-setData
       * editor's method. It corresponds with the `editor#dataReady`
       * https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_editor.html#event-dataReady event.
       */
      this.dataReady = new _angular_core__WEBPACK_IMPORTED_MODULE_1__/* .EventEmitter */ .bkB();
      /**
       * Fires when the content of the editor has changed. It corresponds with the `editor#change`
       * https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_editor.html#event-change
       * event. For performance reasons this event may be called even when data didn't really changed.
       * Please note that this event will only be fired when `undo` plugin is loaded. If you need to
       * listen for editor changes (e.g. for two-way data binding), use `dataChange` event instead.
       */
      this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__/* .EventEmitter */ .bkB();
      /**
       * Fires when the content of the editor has changed. In contrast to `change` - only emits when
       * data really changed thus can be successfully used with `[data]` and two way `[(data)]` binding.
       *
       * See more: https://angular.io/guide/template-syntax#two-way-binding---
       */
      this.dataChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__/* .EventEmitter */ .bkB();
      /**
       * Fires when the native dragStart event occurs. It corresponds with the `editor#dragstart`
       * https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_editor.html#event-dragstart
       * event.
       */
      this.dragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_1__/* .EventEmitter */ .bkB();
      /**
       * Fires when the native dragEnd event occurs. It corresponds with the `editor#dragend`
       * https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_editor.html#event-dragend
       * event.
       */
      this.dragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__/* .EventEmitter */ .bkB();
      /**
       * Fires when the native drop event occurs. It corresponds with the `editor#drop`
       * https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_editor.html#event-drop
       * event.
       */
      this.drop = new _angular_core__WEBPACK_IMPORTED_MODULE_1__/* .EventEmitter */ .bkB();
      /**
       * Fires when the file loader response is received. It corresponds with the `editor#fileUploadResponse`
       * https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_editor.html#event-fileUploadResponse
       * event.
       */
      this.fileUploadResponse = new _angular_core__WEBPACK_IMPORTED_MODULE_1__/* .EventEmitter */ .bkB();
      /**
       * Fires when the file loader should send XHR. It corresponds with the `editor#fileUploadRequest`
       * https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_editor.html#event-fileUploadRequest
       * event.
       */
      this.fileUploadRequest = new _angular_core__WEBPACK_IMPORTED_MODULE_1__/* .EventEmitter */ .bkB();
      /**
       * Fires when the editing area of the editor is focused. It corresponds with the `editor#focus`
       * https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_editor.html#event-focus
       * event.
       */
      this.focus = new _angular_core__WEBPACK_IMPORTED_MODULE_1__/* .EventEmitter */ .bkB();
      /**
       * Fires after the user initiated a paste action, but before the data is inserted.
       * It corresponds with the `editor#paste`
       * https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_editor.html#event-paste
       * event.
       */
      this.paste = new _angular_core__WEBPACK_IMPORTED_MODULE_1__/* .EventEmitter */ .bkB();
      /**
       * Fires after the `paste` event if content was modified. It corresponds with the `editor#afterPaste`
       * https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_editor.html#event-afterPaste
       * event.
       */
      this.afterPaste = new _angular_core__WEBPACK_IMPORTED_MODULE_1__/* .EventEmitter */ .bkB();
      /**
       * Fires when the editing view of the editor is blurred. It corresponds with the `editor#blur`
       * https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_editor.html#event-blur
       * event.
       */
      this.blur = new _angular_core__WEBPACK_IMPORTED_MODULE_1__/* .EventEmitter */ .bkB();
      /**
       * If the component is read–only before the editor instance is created, it remembers that state,
       * so the editor can become read–only once it is ready.
       */
      this._readOnly = null;
      this._data = null;
      this._destroyed = false;
    }
    /**
     * Keeps track of the editor's data.
     *
     * It's also decorated as an input which is useful when not using the ngModel.
     *
     * See https://angular.io/api/forms/NgModel to learn more.
     */
    set data(data) {
      if (data === this._data) {
        return;
      }
      if (this.instance) {
        this.instance.setData(data);
        // Data may be changed by ACF.
        this._data = this.instance.getData();
        return;
      }
      this._data = data;
    }
    get data() {
      return this._data;
    }
    /**
     * When set to `true`, the editor becomes read-only.
     *
     * See https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_editor.html#property-readOnly
     * to learn more.
     */
    set readOnly(isReadOnly) {
      if (this.instance) {
        this.instance.setReadOnly(isReadOnly);
        return;
      }
      // Delay setting read-only state until editor initialization.
      this._readOnly = isReadOnly;
    }
    get readOnly() {
      if (this.instance) {
        return this.instance.readOnly;
      }
      return this._readOnly;
    }
    ngAfterViewInit() {
      (0,ckeditor4_integrations_common__WEBPACK_IMPORTED_MODULE_0__/* .getEditorNamespace */ .$)(this.editorUrl, namespace => {
        this.namespaceLoaded.emit(namespace);
      }).then(() => {
        // Check if component instance was destroyed before `ngAfterViewInit` call (#110).
        // Here, `this.instance` is still not initialized and so additional flag is needed.
        if (this._destroyed) {
          return;
        }
        this.ngZone.runOutsideAngular(this.createEditor.bind(this));
      }).catch(window.console.error);
    }
    ngOnDestroy() {
      this._destroyed = true;
      this.ngZone.runOutsideAngular(() => {
        if (this.instance) {
          this.instance.destroy();
          this.instance = null;
        }
      });
    }
    writeValue(value) {
      this.data = value;
    }
    registerOnChange(callback) {
      this.onChange = callback;
    }
    registerOnTouched(callback) {
      this.onTouched = callback;
    }
    createEditor() {
      const element = document.createElement(this.tagName);
      this.elementRef.nativeElement.appendChild(element);
      const userInstanceReadyCallback = this.config?.on?.instanceReady;
      const defaultConfig = {
        delayIfDetached: true
      };
      const config = {
        ...defaultConfig,
        ...this.config
      };
      if (typeof config.on === 'undefined') {
        config.on = {};
      }
      config.on.instanceReady = evt => {
        const editor = evt.editor;
        this.instance = editor;
        // Read only state may change during instance initialization.
        this.readOnly = this._readOnly !== null ? this._readOnly : this.instance.readOnly;
        this.subscribe(this.instance);
        const undo = editor.undoManager;
        if (this.data !== null) {
          undo && undo.lock();
          editor.setData(this.data, {
            callback: () => {
              // Locking undoManager prevents 'change' event.
              // Trigger it manually to updated bound data.
              if (this.data !== editor.getData()) {
                undo ? editor.fire('change') : editor.fire('dataReady');
              }
              undo && undo.unlock();
              this.ngZone.run(() => {
                if (typeof userInstanceReadyCallback === 'function') {
                  userInstanceReadyCallback(evt);
                }
                this.ready.emit(evt);
              });
            }
          });
        } else {
          this.ngZone.run(() => {
            if (typeof userInstanceReadyCallback === 'function') {
              userInstanceReadyCallback(evt);
            }
            this.ready.emit(evt);
          });
        }
      };
      if (this.type === "inline" /* INLINE */) {
        CKEDITOR.inline(element, config);
      } else {
        CKEDITOR.replace(element, config);
      }
    }
    subscribe(editor) {
      editor.on('focus', evt => {
        this.ngZone.run(() => {
          this.focus.emit(evt);
        });
      });
      editor.on('paste', evt => {
        this.ngZone.run(() => {
          this.paste.emit(evt);
        });
      });
      editor.on('afterPaste', evt => {
        this.ngZone.run(() => {
          this.afterPaste.emit(evt);
        });
      });
      editor.on('dragend', evt => {
        this.ngZone.run(() => {
          this.dragEnd.emit(evt);
        });
      });
      editor.on('dragstart', evt => {
        this.ngZone.run(() => {
          this.dragStart.emit(evt);
        });
      });
      editor.on('drop', evt => {
        this.ngZone.run(() => {
          this.drop.emit(evt);
        });
      });
      editor.on('fileUploadRequest', evt => {
        this.ngZone.run(() => {
          this.fileUploadRequest.emit(evt);
        });
      });
      editor.on('fileUploadResponse', evt => {
        this.ngZone.run(() => {
          this.fileUploadResponse.emit(evt);
        });
      });
      editor.on('blur', evt => {
        this.ngZone.run(() => {
          if (this.onTouched) {
            this.onTouched();
          }
          this.blur.emit(evt);
        });
      });
      editor.on('dataReady', this.propagateChange, this);
      if (this.instance.undoManager) {
        editor.on('change', this.propagateChange, this);
      }
      // If 'undo' plugin is not loaded, listen to 'selectionCheck' event instead. (#54).
      else {
        editor.on('selectionCheck', this.propagateChange, this);
      }
    }
    propagateChange(event) {
      this.ngZone.run(() => {
        const newData = this.instance.getData();
        if (event.name === 'change') {
          this.change.emit(event);
        } else if (event.name === 'dataReady') {
          this.dataReady.emit(event);
        }
        if (newData === this.data) {
          return;
        }
        this._data = newData;
        this.dataChange.emit(newData);
        if (this.onChange) {
          this.onChange(newData);
        }
      });
    }
  }
  CKEditorComponent.ɵfac = function CKEditorComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || CKEditorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* .ElementRef */ .aKT), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* .NgZone */ .SKi));
  };
  CKEditorComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineComponent"] */ .VBU({
    type: CKEditorComponent,
    selectors: [["ckeditor"]],
    inputs: {
      config: "config",
      editorUrl: "editorUrl",
      tagName: "tagName",
      type: "type",
      data: "data",
      readOnly: "readOnly"
    },
    outputs: {
      namespaceLoaded: "namespaceLoaded",
      ready: "ready",
      dataReady: "dataReady",
      change: "change",
      dataChange: "dataChange",
      dragStart: "dragStart",
      dragEnd: "dragEnd",
      drop: "drop",
      fileUploadResponse: "fileUploadResponse",
      fileUploadRequest: "fileUploadRequest",
      focus: "focus",
      paste: "paste",
      afterPaste: "afterPaste",
      blur: "blur"
    },
    standalone: false,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵProvidersFeature"] */ .Jv_([{
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .NG_VALUE_ACCESSOR */ .kq,
      useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__/* .forwardRef */ .Rfq)(() => CKEditorComponent),
      multi: true
    }])],
    decls: 1,
    vars: 0,
    template: function CKEditorComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(0, CKEditorComponent_ng_template_0_Template, 0, 0, "ng-template");
      }
    },
    encapsulation: 2
  });
  return CKEditorComponent;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */

/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */
let CKEditorModule = /*#__PURE__*/(() => {
  class CKEditorModule {}
  CKEditorModule.ɵfac = function CKEditorModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || CKEditorModule)();
  };
  CKEditorModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineNgModule"] */ .$C({
    type: CKEditorModule
  });
  CKEditorModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineInjector"] */ .G2t({
    imports: [[_angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .FormsModule */ .YN, _angular_common__WEBPACK_IMPORTED_MODULE_3__/* .CommonModule */ .MD]]
  });
  return CKEditorModule;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=ckeditor4-angular.mjs.map

/***/ }),

/***/ 76448:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* binding */ EditCandidateFeedbacksComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(73014);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(64411);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10936);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(56383);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(19223);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(23423);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(36950);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(73246);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(81236);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(79180);
/* harmony import */ var angular2_smart_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52345);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(46076);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(91081);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(15480);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(84536);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(88319);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(32629);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(71924);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(90022);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(42987);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47108);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(37957);
/* harmony import */ var _manage_candidate_interviews_interview_panel_table_components_interviewers_interviewers_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(37494);
/* harmony import */ var _manage_candidate_interviews_interview_panel_table_components_rating_rating_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(49177);
/* harmony import */ var _table_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(85871);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(14572);
/* harmony import */ var _packages_ui_core_shared_src_lib_star_rating_star_rating_input_star_rating_input_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(62804);
/* harmony import */ var _packages_ui_core_shared_src_lib_card_grid_card_grid_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(49517);
/* harmony import */ var _packages_ui_core_shared_src_lib_star_rating_star_rating_output_star_rating_output_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(21838);
/* harmony import */ var _packages_ui_core_shared_src_lib_employee_employee_multi_select_employee_multi_select_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(57354);
/* harmony import */ var _packages_ui_core_shared_src_lib_gauzy_button_action_gauzy_button_action_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(45293);



























const _c0 = () => ({
  standalone: true
});
const _c1 = a0 => ({
  width: a0
});
const _c2 = () => ["feedbacks", 0, "technologies"];
const _c3 = () => ["feedbacks", 0, "personalQualities"];
function EditCandidateFeedbacksComponent_div_2_div_1_nb_select_1_nb_option_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const interview_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpropertyInterpolate"] */ .FS9("value", interview_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(interview_r3.title);
  }
}
function EditCandidateFeedbacksComponent_div_2_div_1_nb_select_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-select", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("selectedChange", function EditCandidateFeedbacksComponent_div_2_div_1_nb_select_1_Template_nb_select_selectedChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.onInterviewSelected($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(1, "nb-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(4, EditCandidateFeedbacksComponent_div_2_div_1_nb_select_1_nb_option_4_Template, 2, 2, "nb-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("formControl", ctx_r1.selectInterview);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("value", ctx_r1.all);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(3, 4, "CANDIDATES_PAGE.EDIT_CANDIDATE.ALL_FEEDBACKS"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx_r1.interviewList);
  }
}
function EditCandidateFeedbacksComponent_div_2_div_1_ga_employee_multi_select_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "ga-employee-multi-select", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("selectedChange", function EditCandidateFeedbacksComponent_div_2_div_1_ga_employee_multi_select_2_Template_ga_employee_multi_select_selectedChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.onEmployeeSelected($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("multiple", false)("label", false)("reset", ctx_r1.isEmployeeReset)("allEmployees", ctx_r1.employeeList)("reset", ctx_r1.isResetSelect);
  }
}
function EditCandidateFeedbacksComponent_div_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, EditCandidateFeedbacksComponent_div_2_div_1_nb_select_1_Template, 5, 6, "nb-select", 11)(2, EditCandidateFeedbacksComponent_div_2_div_1_ga_employee_multi_select_2_Template, 1, 5, "ga-employee-multi-select", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r1.dataLayoutStyle === "CARDS_GRID");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r1.dataLayoutStyle === "CARDS_GRID");
  }
}
function EditCandidateFeedbacksComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, EditCandidateFeedbacksComponent_div_2_div_1_Template, 3, 2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(2, "ngx-gauzy-button-action", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    const visible_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(8);
    const actionButtons_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngClass", (ctx_r1.allFeedbacks == null ? null : ctx_r1.allFeedbacks.length) > 0 ? "main-btn" : "main-btn justify-content-end");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", (ctx_r1.allFeedbacks == null ? null : ctx_r1.allFeedbacks.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("buttonTemplate", actionButtons_r6)("buttonTemplateVisible", visible_r5)("componentName", ctx_r1.viewComponentName)("isDisable", ctx_r1.disableButton);
  }
}
function EditCandidateFeedbacksComponent_div_3_form_2_div_2_div_2_ga_star_rating_output_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(0, "ga-star-rating-output", 42);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("rate", ctx_r1.averageRating);
  }
}
function EditCandidateFeedbacksComponent_div_3_form_2_div_2_div_2_ga_star_rating_input_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(0, "ga-star-rating-input", 43);
  }
}
function EditCandidateFeedbacksComponent_div_3_form_2_div_2_div_2_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate2"] */ .Lme(" (", ctx_r1.statusHire, "/", ctx_r1.interviewersHire == null ? null : ctx_r1.interviewersHire.length, ") ");
  }
}
function EditCandidateFeedbacksComponent_div_3_form_2_div_2_div_2_div_15_div_5_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const i_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG().index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", ctx_r1.technologiesList[i_r9] == null ? null : ctx_r1.technologiesList[i_r9].name, " ");
  }
}
function EditCandidateFeedbacksComponent_div_3_form_2_div_2_div_2_div_15_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, EditCandidateFeedbacksComponent_div_3_form_2_div_2_div_2_div_15_div_5_span_1_Template, 2, 1, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(2, "ga-star-rating-input", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const technologyRating_r10 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r1.technologiesList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("formControl", technologyRating_r10);
  }
}
function EditCandidateFeedbacksComponent_div_3_form_2_div_2_div_2_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 44)(1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(4, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(5, EditCandidateFeedbacksComponent_div_3_form_2_div_2_div_2_div_15_div_5_Template, 3, 2, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction1"] */ .eq3(5, _c1, (ctx_r1.personalQualitiesList == null ? null : ctx_r1.personalQualitiesList.length) === 0 ? "100%" : "48%"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(3, 3, "CANDIDATES_PAGE.CRITERIONS.TECHNOLOGY_STACK"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx_r1.form.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction0"] */ .lJ4(7, _c2)).controls);
  }
}
function EditCandidateFeedbacksComponent_div_3_form_2_div_2_div_2_div_16_div_5_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const i_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG().index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", ctx_r1.personalQualitiesList[i_r11] == null ? null : ctx_r1.personalQualitiesList[i_r11].name, " ");
  }
}
function EditCandidateFeedbacksComponent_div_3_form_2_div_2_div_2_div_16_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, EditCandidateFeedbacksComponent_div_3_form_2_div_2_div_2_div_16_div_5_span_1_Template, 2, 1, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(2, "ga-star-rating-input", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const personalQualityRating_r12 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r1.personalQualitiesList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("formControl", personalQualityRating_r12);
  }
}
function EditCandidateFeedbacksComponent_div_3_form_2_div_2_div_2_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 44)(1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(4, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(5, EditCandidateFeedbacksComponent_div_3_form_2_div_2_div_2_div_16_div_5_Template, 3, 2, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction1"] */ .eq3(5, _c1, (ctx_r1.technologiesList == null ? null : ctx_r1.technologiesList.length) === 0 ? "100%" : "48%"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(3, 3, "CANDIDATES_PAGE.CRITERIONS.PERSONAL_QUALITIES"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx_r1.form.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction0"] */ .lJ4(7, _c3)).controls);
  }
}
function EditCandidateFeedbacksComponent_div_3_form_2_div_2_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 33)(1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(2, EditCandidateFeedbacksComponent_div_3_form_2_div_2_div_2_ga_star_rating_output_2_Template, 1, 1, "ga-star-rating-output", 35)(3, EditCandidateFeedbacksComponent_div_3_form_2_div_2_div_2_ga_star_rating_input_3_Template, 1, 0, "ga-star-rating-input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(4, "nb-radio-group", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayListener"] */ .mxI("ngModelChange", function EditCandidateFeedbacksComponent_div_3_form_2_div_2_div_2_Template_nb_radio_group_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r8);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayBindingSet"] */ .DH7(ctx_r1.status, $event) || (ctx_r1.status = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(5, "nb-radio", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(8, EditCandidateFeedbacksComponent_div_3_form_2_div_2_div_2_span_8_Template, 2, 2, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(9, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(10, "nb-radio", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(13, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(14, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(15, EditCandidateFeedbacksComponent_div_3_form_2_div_2_div_2_div_15_Template, 6, 8, "div", 41)(16, EditCandidateFeedbacksComponent_div_3_form_2_div_2_div_2_div_16_Template, 6, 8, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", (ctx_r1.technologiesList == null ? null : ctx_r1.technologiesList.length) > 0 || (ctx_r1.personalQualitiesList == null ? null : ctx_r1.personalQualitiesList.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", (ctx_r1.technologiesList == null ? null : ctx_r1.technologiesList.length) === 0 && (ctx_r1.personalQualitiesList == null ? null : ctx_r1.personalQualitiesList.length) === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayProperty"] */ .R50("ngModel", ctx_r1.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction0"] */ .lJ4(15, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("value", "HIRED");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(7, 11, "CANDIDATES_PAGE.EDIT_CANDIDATE.INTERVIEW.HIRE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", (ctx_r1.interviewersHire == null ? null : ctx_r1.interviewersHire.length) > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("value", "REJECTED");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI("", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(12, 13, "CANDIDATES_PAGE.EDIT_CANDIDATE.INTERVIEW.REJECT"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", (ctx_r1.technologiesList == null ? null : ctx_r1.technologiesList.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", (ctx_r1.personalQualitiesList == null ? null : ctx_r1.personalQualitiesList.length) > 0);
  }
}
function EditCandidateFeedbacksComponent_div_3_form_2_div_2_ga_star_rating_input_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(0, "ga-star-rating-input", 43);
  }
}
function EditCandidateFeedbacksComponent_div_3_form_2_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div")(1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(2, EditCandidateFeedbacksComponent_div_3_form_2_div_2_div_2_Template, 17, 16, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(3, "div", 28)(4, "div", 29)(5, "label", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(8, EditCandidateFeedbacksComponent_div_3_form_2_div_2_ga_star_rating_input_8_Template, 1, 0, "ga-star-rating-input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(9, "textarea", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(11, "\t\t\t\t\t\t\t\t\t");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()()();
  }
  if (rf & 2) {
    const i_r13 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("formGroupName", i_r13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r1.feedbackInterviewId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(7, 5, "FORM.LABELS.FEEDBACK_DESCRIPTION"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", !ctx_r1.feedbackInterviewId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpropertyInterpolate"] */ .FS9("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(10, 7, "FORM.PLACEHOLDERS.FEEDBACK_DESCRIPTION"));
  }
}
function EditCandidateFeedbacksComponent_div_3_form_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "form", 23)(1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(2, EditCandidateFeedbacksComponent_div_3_form_2_div_2_Template, 12, 9, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("formGroup", ctx_r1.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx_r1.form.controls.feedbacks == null ? null : ctx_r1.form.controls.feedbacks.controls);
  }
}
function EditCandidateFeedbacksComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 17)(1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(2, EditCandidateFeedbacksComponent_div_3_form_2_Template, 3, 2, "form", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(3, "div", 20)(4, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function EditCandidateFeedbacksComponent_div_3_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.submitForm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(7, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function EditCandidateFeedbacksComponent_div_3_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.cancel());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r1.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(6, 3, "BUTTONS.SAVE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(9, 5, "BUTTONS.CANCEL"), " ");
  }
}
function EditCandidateFeedbacksComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 52)(1, "angular2-smart-table", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("userRowSelect", function EditCandidateFeedbacksComponent_div_5_Template_angular2_smart_table_userRowSelect_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r14);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.selectFeedback($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("settings", ctx_r1.settingsSmartTable)("source", ctx_r1.sourceSmartTable);
  }
}
function EditCandidateFeedbacksComponent_ga_card_grid_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "ga-card-grid", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("onSelectedItem", function EditCandidateFeedbacksComponent_ga_card_grid_6_Template_ga_card_grid_onSelectedItem_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r15);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.selectFeedback($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("totalItems", ctx_r1.pagination == null ? null : ctx_r1.pagination.totalItems)("settings", ctx_r1.settingsSmartTable)("source", ctx_r1.feedbackList);
  }
}
function EditCandidateFeedbacksComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function EditCandidateFeedbacksComponent_ng_template_7_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r16);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.cancel());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "nb-icon", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI("", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(3, 1, "BUTTONS.ADD"), " ");
  }
}
function EditCandidateFeedbacksComponent_ng_template_9_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 58)(1, "button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function EditCandidateFeedbacksComponent_ng_template_9_div_0_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r17);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.editFeedback());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(2, "nb-icon", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(5, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function EditCandidateFeedbacksComponent_ng_template_9_div_0_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r17);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.removeFeedback());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(7, "nb-icon", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const selectedItem_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG().selectedItem;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("disabled", !selectedItem_r18 && ctx_r1.disableButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(4, 4, "BUTTONS.EDIT"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("disabled", !selectedItem_r18 && ctx_r1.disableButton)("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(6, 6, "BUTTONS.DELETE"));
  }
}
function EditCandidateFeedbacksComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(0, EditCandidateFeedbacksComponent_ng_template_9_div_0_Template, 8, 8, "div", 57);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r1.dataLayoutStyle === "TABLE" && !ctx_r1.showAddCard);
  }
}
let EditCandidateFeedbacksComponent = class EditCandidateFeedbacksComponent extends _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_1__/* .PaginationFilterBaseComponent */ .t {
  constructor(fb, candidateFeedbacksService, toastrService, translateService, candidateStore, employeesService, dialogService, candidatesService, store, candidateInterviewService, candidateCriterionsRatingService) {
    super(translateService);
    this.fb = fb;
    this.candidateFeedbacksService = candidateFeedbacksService;
    this.toastrService = toastrService;
    this.translateService = translateService;
    this.candidateStore = candidateStore;
    this.employeesService = employeesService;
    this.dialogService = dialogService;
    this.candidatesService = candidatesService;
    this.store = store;
    this.candidateInterviewService = candidateInterviewService;
    this.candidateCriterionsRatingService = candidateCriterionsRatingService;
    this.feedbackId = null;
    this.feedbackList = [];
    this.allFeedbacks = [];
    this.disableButton = true;
    this.all = 'all';
    this.interviewersHire = [];
    this.interviewers = [];
    this.isCancel = false;
    this.selectInterview = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .FormControl */ .MJ();
    this.sourceSmartTable = new angular2_smart_table__WEBPACK_IMPORTED_MODULE_3__/* .LocalDataSource */ .h0();
    this.dataLayoutStyle = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_4__/* .ComponentLayoutStyleEnum */ .IE.TABLE;
    this.setView();
  }
  ngOnInit() {
    this.candidateStore.selectedCandidate$.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .untilDestroyed */ .s)(this)).subscribe(candidate => {
      if (candidate) {
        this.selectedOrganization = this.store.selectedOrganization;
        this.candidateId = candidate.id;
        this._initializeForm();
        this.loadInterviews();
        this.getEmployees();
        this._applyTranslationOnSmartTable();
      }
    });
    this.loadSmartTableSettings();
    this.selectInterview.setValue('all');
  }
  getEmployees() {
    var _this = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(function* () {
      _this.loading = true;
      const {
        tenantId
      } = _this.store.user;
      const {
        id: organizationId
      } = _this.selectedOrganization;
      const {
        items
      } = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_7__/* .firstValueFrom */ ._)(_this.employeesService.getAll(['user'], {
        organizationId,
        tenantId
      }));
      _this.employeeList = items;
      _this.loading = false;
    })();
  }
  setView() {
    this.viewComponentName = _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_8__/* .ComponentEnum */ .L.FEEDBACKS;
    this.store.componentLayout$(this.viewComponentName).pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .untilDestroyed */ .s)(this)).subscribe(componentLayout => {
      this.dataLayoutStyle = componentLayout;
      this.selectedFeedback = this.dataLayoutStyle === 'CARDS_GRID' ? null : this.selectedFeedback;
    });
  }
  _initializeForm() {
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .UntypedFormGroup */ .J3({
      feedbacks: this.fb.array([])
    });
    const feedbackForm = this.feedbacks;
    feedbackForm.push(this.fb.group({
      description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .Validators */ .k0.required],
      rating: [this.averageRating ? this.averageRating : null],
      technologies: this.fb.array([]),
      personalQualities: this.fb.array([])
    }));
  }
  loadSmartTableSettings() {
    var _this2 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(function* () {
      _this2.settingsSmartTable = {
        actions: false,
        selectedRowIndex: -1,
        columns: {
          description: {
            title: _this2.getTranslation('CANDIDATES_PAGE.EDIT_CANDIDATE.DESCRIPTION'),
            type: 'string',
            isFilterable: false
          },
          rating: {
            title: _this2.getTranslation('CANDIDATES_PAGE.MANAGE_INTERVIEWS.RATING'),
            type: 'custom',
            width: '136px',
            isFilterable: false,
            renderComponent: _manage_candidate_interviews_interview_panel_table_components_rating_rating_component__WEBPACK_IMPORTED_MODULE_9__/* .InterviewStarRatingComponent */ .i,
            componentInitFunction: (instance, cell) => {
              instance.rowData = cell.getRow().getData();
            }
          },
          interviewTitle: {
            title: _this2.getTranslation('CANDIDATES_PAGE.EDIT_CANDIDATE.INTERVIEW.INTERVIEW'),
            type: 'string',
            width: '200px'
          },
          employees: {
            title: _this2.getTranslation('CANDIDATES_PAGE.EDIT_CANDIDATE.INTERVIEWER'),
            type: 'custom',
            width: '130px',
            isFilterable: false,
            renderComponent: _manage_candidate_interviews_interview_panel_table_components_interviewers_interviewers_component__WEBPACK_IMPORTED_MODULE_10__/* .InterviewersTableComponent */ .n,
            componentInitFunction: (instance, cell) => {
              instance.rowData = cell.getRow().getData();
            }
          },
          status: {
            title: _this2.getTranslation('CANDIDATES_PAGE.EDIT_CANDIDATE.FEEDBACK_STATUS'),
            type: 'custom',
            width: '5%',
            renderComponent: _table_components__WEBPACK_IMPORTED_MODULE_11__/* .FeedbackStatusTableComponent */ .f,
            componentInitFunction: (instance, cell) => {
              instance.rowData = cell.getRow().getData();
            }
          }
        },
        pager: {
          display: true,
          perPage: 8
        }
      };
    })();
  }
  loadFeedbacks() {
    var _this3 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(function* () {
      const {
        id: organizationId,
        tenantId
      } = _this3.selectedOrganization;
      const res = yield _this3.candidateFeedbacksService.getAll(['interviewer', 'criterionsRating'], {
        candidateId: _this3.candidateId,
        organizationId,
        tenantId
      });
      if (res) {
        _this3.feedbackList = res.items;
        _this3.allFeedbacks = res.items;
        const feedbacksForTable = [];
        _this3.feedbackList.forEach(fb => {
          const interview = _this3.interviewList.find(item => item.id === fb.interviewId);
          feedbacksForTable.push({
            ...fb,
            interviewTitle: interview ? interview.title : null,
            employees: fb.interviewer ? [_this3.employeeList.find(emp => emp.id === fb.interviewer.employeeId)] : null
          });
        });
        _this3.sourceSmartTable.load(feedbacksForTable);
        if (_this3.dataLayoutStyle === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_4__/* .ComponentLayoutStyleEnum */ .IE.CARDS_GRID) {
          _this3._loadGridLayoutData();
        }
        _this3.setPagination({
          ..._this3.getPagination(),
          totalItems: _this3.sourceSmartTable.count()
        });
        return _this3.feedbackList;
      }
    })();
  }
  _loadGridLayoutData() {
    var _this4 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(function* () {
      _this4.feedbackList = yield _this4.sourceSmartTable.getElements();
    })();
  }
  loadCriterions(feedback) {
    var _this5 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(function* () {
      if (feedback.interviewId) {
        _this5.currentInterview = _this5.interviewList.find(item => item.id === feedback.interviewId);
        _this5.technologiesList = _this5.currentInterview.technologies;
        _this5.personalQualitiesList = _this5.currentInterview.personalQualities;
        feedback.criterionsRating.forEach(item => {
          _this5.technologiesList.forEach(tech => tech.id === item.technologyId ? tech.rating = item.rating : null);
          _this5.personalQualitiesList.forEach(qual => qual.id === item.personalQualityId ? qual.rating = item.rating : null);
        });
      }
      const techRating = _this5.form.get(['feedbacks', 0, 'technologies']);
      const qualRating = _this5.form.get(['feedbacks', 0, 'personalQualities']);
      if (qualRating.controls.length < _this5.personalQualitiesList.length) {
        _this5.personalQualitiesList.forEach(item => {
          qualRating.push(_this5.fb.control(item.rating));
        });
      }
      if (techRating.controls.length < _this5.technologiesList.length) {
        _this5.technologiesList.forEach(item => {
          techRating.push(_this5.fb.control(item.rating));
        });
      }
      _this5.form.valueChanges.subscribe(item => {
        _this5.averageRating = _this5.setRating(item.feedbacks[0].technologies, item.feedbacks[0].personalQualities);
      });
    })();
  }
  setRating(technologies, qualities) {
    this.technologiesList.forEach((tech, index) => tech.rating = technologies[index]);
    this.personalQualitiesList.forEach((qual, index) => qual.rating = qualities[index]);
    const techSum = technologies.length > 0 ? technologies.reduce((sum, current) => sum + current, 0) / technologies.length : 0;
    const qualSum = qualities.length > 0 ? qualities.reduce((sum, current) => sum + current, 0) / qualities.length : 0;
    const isSomeEmpty = (technologies.length > 0 ? 1 : 0) + (qualities.length > 0 ? 1 : 0);
    const res = techSum || qualSum ? (techSum + qualSum) / isSomeEmpty : 0;
    return res;
  }
  loadInterviews() {
    var _this6 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(function* () {
      const {
        tenantId
      } = _this6.store.user;
      const {
        id: organizationId
      } = _this6.selectedOrganization;
      const result = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_7__/* .firstValueFrom */ ._)(_this6.candidateInterviewService.getAll(['feedbacks', 'interviewers', 'technologies', 'personalQualities'], {
        candidateId: _this6.candidateId,
        organizationId,
        tenantId
      }));
      const {
        items
      } = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_7__/* .firstValueFrom */ ._)(_this6.candidatesService.getAll(['user', 'interview', 'feedbacks'], {
        organizationId,
        tenantId
      }));
      if (result) {
        _this6.interviewList = result.items;
        _this6.interviewList.forEach(interview => {
          items.forEach(candidate => {
            if (interview.candidateId === candidate.id) {
              interview.candidate = candidate;
            }
          });
        });
        _this6.loading = true;
        const feedbackList = yield _this6.loadFeedbacks();
        feedbackList.forEach(fb => {
          const currentInterview = _this6.interviewList.find(interview => fb.interviewId && interview.id === fb.interviewId);
          fb.interviewTitle = currentInterview ? currentInterview.title : '';
          if (fb.interviewer) {
            _this6.employeeList.forEach(item => {
              if (fb.interviewId && fb.interviewer.employeeId === item.id) {
                fb.interviewer.employeeImageUrl = item.user.imageUrl;
                fb.interviewer.employeeName = item.user.name;
              }
            });
          }
        });
        const uniq = {};
        _this6.interviewList = _this6.interviewList.filter(obj => !uniq[obj.id] && (uniq[obj.id] = true));
      }
      _this6.loading = false;
    })();
  }
  editFeedback(feedback) {
    this.cancel();
    this.currentFeedback = feedback ? feedback : this.selectedFeedback;
    this._initializeForm();
    if (this.currentFeedback.criterionsRating.length) {
      this.loadCriterions(this.currentFeedback);
    }
    this.showAddCard = this.showAddCard ? this.showAddCard : !this.showAddCard;
    this.form.controls.feedbacks.patchValue([this.currentFeedback]);
    this.feedbackId = this.currentFeedback.id;
    if (this.currentFeedback.interviewId) {
      this.status = this.currentFeedback.status;
      this.feedbackInterviewer = this.currentFeedback.interviewer;
      this.feedbackInterviewId = this.currentFeedback.interviewId;
      this.interviewers = this.interviewList.find(interview => this.feedbackInterviewId === interview.id).interviewers;
      this.getStatusHire(this.feedbackInterviewId);
      this.interviewersHire = this.interviewers ? this.interviewers : null;
      this.averageRating = this.currentFeedback.rating;
    }
  }
  onEmployeeSelected(id) {
    this.isEmployeeReset = false;
    this.selectInterview.reset();
    this.feedbackList = this.allFeedbacks.filter(fb => fb.interviewId && id === fb.interviewer.employeeId);
  }
  submitForm() {
    const feedbackForm = this.form.controls.feedbacks;
    const formValue = {
      ...feedbackForm.value[0]
    };
    if (feedbackForm.valid) {
      if (this.feedbackId !== null) {
        this.updateFeedback(formValue);
      } else {
        this.createFeedback(formValue);
      }
    } else {
      this.toastrInvalid();
    }
  }
  updateFeedback(formValue) {
    var _this7 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(function* () {
      try {
        const {
          id: organizationId,
          tenantId
        } = _this7.selectedOrganization;
        yield _this7.candidateCriterionsRatingService.updateBulk(_this7.currentFeedback.criterionsRating, formValue['technologies'], formValue['personalQualities']);
        yield _this7.candidateFeedbacksService.update(_this7.feedbackId, {
          description: formValue.description,
          rating: _this7.technologiesList.length === 0 && _this7.personalQualitiesList.length === 0 ? formValue.rating : _this7.averageRating,
          interviewer: _this7.feedbackInterviewer,
          status: _this7.status,
          organizationId,
          tenantId
        });
        _this7.toastrService.success('TOASTR.MESSAGE.CANDIDATE_FEEDBACK_UPDATED');
        _this7.loadInterviews();
        _this7.setStatus(_this7.status);
        _this7.showAddCard = !_this7.showAddCard;
        _this7.feedbacks.reset();
      } catch (error) {
        _this7.toastrError(error);
      }
      _this7.feedbackId = null;
    })();
  }
  createFeedback(formValue) {
    var _this8 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(function* () {
      try {
        const {
          id: organizationId,
          tenantId
        } = _this8.selectedOrganization;
        yield _this8.candidateFeedbacksService.create({
          ...formValue,
          candidateId: _this8.candidateId,
          organizationId,
          tenantId
        });
        _this8.toastrService.success('TOASTR.MESSAGE.CANDIDATE_FEEDBACK_CREATED');
        _this8.loadInterviews();
        _this8.showAddCard = !_this8.showAddCard;
        _this8.feedbacks.reset();
      } catch (error) {
        _this8.toastrError(error);
      }
    })();
  }
  getStatusHire(interviewId) {
    var _this9 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(function* () {
      _this9.statusHire = 0;
      const feedbacks = _this9.feedbackList.filter(fb => fb.interviewId === interviewId);
      feedbacks.forEach(fb => {
        if (fb.interviewId === interviewId) {
          _this9.statusHire = fb.status === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_12__/* .CandidateStatusEnum */ .P.HIRED ? _this9.statusHire + 1 : _this9.statusHire;
        }
      });
    })();
  }
  setStatus(status) {
    var _this0 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(function* () {
      _this0.getStatusHire(_this0.feedbackInterviewId);
      if (status === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_12__/* .CandidateStatusEnum */ .P.REJECTED) {
        yield _this0.candidatesService.setCandidateAsRejected(_this0.candidateId);
      } else if (_this0.interviewers && _this0.statusHire === _this0.interviewers.length) {
        yield _this0.candidatesService.setCandidateAsHired(_this0.candidateId);
      } else {
        yield _this0.candidatesService.setCandidateAsApplied(_this0.candidateId);
      }
    })();
  }
  removeFeedback(id) {
    var _this1 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(function* () {
      const dialog = _this1.dialogService.open(_gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_13__/* .DeleteFeedbackComponent */ .q, {
        context: {
          feedbackId: id ? id : _this1.selectedFeedback.id
        }
      });
      const data = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_7__/* .firstValueFrom */ ._)(dialog.onClose);
      if (data) {
        _this1.toastrService.success('TOASTR.MESSAGE.CANDIDATE_FEEDBACK_DELETED');
        _this1.loadInterviews();
      }
    })();
  }
  selectFeedback({
    isSelected,
    data
  }) {
    this.disableButton = !isSelected;
    this.selectedFeedback = isSelected ? data : null;
  }
  onInterviewSelected(value) {
    this.isEmployeeReset = true;
    this.feedbackList = this.allFeedbacks;
    if (value !== 'all') {
      this.feedbackList = this.feedbackList.filter(fb => fb.interviewId === value);
    }
  }
  toastrError(error) {
    this.toastrService.danger(error);
  }
  toastrInvalid() {
    this.toastrService.danger(this.getTranslation('NOTES.CANDIDATE.INVALID_FORM'), this.getTranslation('TOASTR.MESSAGE.CANDIDATE_FEEDBACK_REQUIRED'));
  }
  cancel() {
    this.showAddCard = !this.showAddCard;
    this.feedbacks.reset();
    this.form.reset();
    this.status = null;
    this.feedbackInterviewer = null;
    this.feedbackInterviewId = null;
    this.interviewers = [];
  }
  _applyTranslationOnSmartTable() {
    this.translateService.onLangChange.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_14__/* .tap */ .M)(() => this.loadSmartTableSettings()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .untilDestroyed */ .s)(this)).subscribe();
  }
  /*
   * Getter for candidate feedback form controls array
   */
  get feedbacks() {
    return this.form.get('feedbacks');
  }
  ngOnDestroy() {}
  static {
    this.ɵfac = function EditCandidateFeedbacksComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || EditCandidateFeedbacksComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .UntypedFormBuilder */ .ze), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_15__/* .CandidateFeedbacksService */ .R), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_16__/* .ToastrService */ .t), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__/* .TranslateService */ .c$), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_18__/* .CandidateStore */ .R), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_19__/* .EmployeesService */ .r), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_nebular_theme__WEBPACK_IMPORTED_MODULE_20__/* .NbDialogService */ .S0W), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_21__/* .CandidatesService */ .S), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_22__/* .Store */ .il), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_23__/* .CandidateInterviewService */ .C), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_24__/* .CandidateCriterionsRatingService */ .c));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
      type: EditCandidateFeedbacksComponent,
      selectors: [["ga-edit-candidate-feedbacks"]],
      standalone: false,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
      decls: 11,
      vars: 5,
      consts: [["visible", ""], ["actionButtons", ""], [3, "ngClass", 4, "ngIf"], ["class", "add-card", 4, "ngIf"], ["nbSpinnerSize", "giant", "nbSpinnerStatus", "primary", 3, "nbSpinner"], ["class", "table-scroll-container", 4, "ngIf"], [3, "totalItems", "settings", "source", "onSelectedItem", 4, "ngIf"], [3, "ngClass"], ["class", "filters", 4, "ngIf"], [3, "buttonTemplate", "buttonTemplateVisible", "componentName", "isDisable"], [1, "filters"], ["class", "select mr-3 show", "placeholder", "Select interview", 3, "formControl", "selectedChange", 4, "ngIf"], ["class", "select mr-3", 3, "multiple", "label", "reset", "allEmployees", "selectedChange", 4, "ngIf"], ["placeholder", "Select interview", 1, "select", "mr-3", "show", 3, "selectedChange", "formControl"], [3, "value"], [3, "value", 4, "ngFor", "ngForOf"], [1, "select", "mr-3", 3, "selectedChange", "multiple", "label", "reset", "allEmployees"], [1, "add-card"], [1, "feedbacks-card-wrap"], ["class", "form", 3, "formGroup", 4, "ngIf"], [1, "buttons"], ["nbButton", "", "status", "success", 1, "w-100", 3, "click"], ["nbButton", "", "status", "basic", "outline", "", 1, "w-100", 3, "click"], [1, "form", 3, "formGroup"], ["formArrayName", "feedbacks", 1, "w-100"], [4, "ngFor", "ngForOf"], [3, "formGroupName"], ["class", "criterions-rating", 4, "ngIf"], [1, "add-card-wrap"], [1, "label-wrap"], ["for", "description", 1, "label"], ["formControlName", "rating", "class", "stars-optional", 4, "ngIf"], ["id", "description", "nbInput", "", "formControlName", "description", 1, "description", 3, "placeholder"], [1, "criterions-rating"], [1, "criterions-rating-radio-group"], ["class", "stars-output", 3, "rate", 4, "ngIf"], [1, "radio-group", 3, "ngModelChange", "ngModel", "ngModelOptions"], [4, "ngIf"], [1, "fas", "fa-thumbs-up", "success"], [1, "fas", "error", "fa-thumbs-down"], [1, "form-blocks"], ["class", "form-block", 3, "ngStyle", 4, "ngIf"], [1, "stars-output", 3, "rate"], ["formControlName", "rating", 1, "stars-optional"], [1, "form-block", 3, "ngStyle"], [1, "label", "mb-2"], [1, "form-block-criterion"], ["class", "form-block-criterion-item", 4, "ngFor", "ngForOf"], [1, "form-block-criterion-item"], ["class", "form-block-criterion-title", 4, "ngIf"], [3, "formControl"], [1, "form-block-criterion-title"], [1, "table-scroll-container"], [2, "cursor", "pointer", 3, "userRowSelect", "settings", "source"], [3, "onSelectedItem", "totalItems", "settings", "source"], ["nbButton", "", "status", "success", 1, "action", 3, "click"], ["icon", "plus-outline", 1, "mr-1"], ["class", "btn-group actions", 4, "ngIf"], [1, "btn-group", "actions"], ["nbButton", "", "status", "basic", "size", "small", 1, "action", "primary", 3, "click", "disabled"], ["icon", "edit-outline", 1, "mr-1"], ["nbButton", "", "status", "basic", "size", "small", 1, "action", 3, "click", "disabled", "nbTooltip"], ["status", "danger", "icon", "trash-2-outline"]],
      template: function EditCandidateFeedbacksComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-card")(1, "nb-card-header");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(2, EditCandidateFeedbacksComponent_div_2_Template, 3, 6, "div", 2)(3, EditCandidateFeedbacksComponent_div_3_Template, 10, 7, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(4, "nb-card-body", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(5, EditCandidateFeedbacksComponent_div_5_Template, 2, 2, "div", 5)(6, EditCandidateFeedbacksComponent_ga_card_grid_6_Template, 1, 3, "ga-card-grid", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(7, EditCandidateFeedbacksComponent_ng_template_7_Template, 4, 3, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplateRefExtractor"] */ .C5r)(9, EditCandidateFeedbacksComponent_ng_template_9_Template, 1, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplateRefExtractor"] */ .C5r);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", !ctx.showAddCard);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.showAddCard);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("nbSpinner", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.dataLayoutStyle === "TABLE");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", (ctx.feedbackList == null ? null : ctx.feedbackList.length) && ctx.dataLayoutStyle === "CARDS_GRID");
        }
      },
      dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_20__/* .NbButtonComponent */ .YP2, _nebular_theme__WEBPACK_IMPORTED_MODULE_20__/* .NbCardComponent */ .SrT, _nebular_theme__WEBPACK_IMPORTED_MODULE_20__/* .NbCardBodyComponent */ .KH5, _nebular_theme__WEBPACK_IMPORTED_MODULE_20__/* .NbCardHeaderComponent */ .zJv, _nebular_theme__WEBPACK_IMPORTED_MODULE_20__/* .NbIconComponent */ .tHu, _nebular_theme__WEBPACK_IMPORTED_MODULE_20__/* .NbInputDirective */ .i6h, _nebular_theme__WEBPACK_IMPORTED_MODULE_20__/* .NbRadioComponent */ .XIt, _nebular_theme__WEBPACK_IMPORTED_MODULE_20__/* .NbRadioGroupComponent */ .yZH, _nebular_theme__WEBPACK_IMPORTED_MODULE_20__/* .NbSelectComponent */ .S81, _nebular_theme__WEBPACK_IMPORTED_MODULE_20__/* .NbOptionComponent */ .ZJ2, _nebular_theme__WEBPACK_IMPORTED_MODULE_20__/* .NbSpinnerDirective */ .zwc, _nebular_theme__WEBPACK_IMPORTED_MODULE_20__/* .NbTooltipDirective */ .BmQ, _angular_common__WEBPACK_IMPORTED_MODULE_25__/* .NgClass */ .YU, _angular_common__WEBPACK_IMPORTED_MODULE_25__/* .NgForOf */ .Sq, _angular_common__WEBPACK_IMPORTED_MODULE_25__/* .NgIf */ .bT, _angular_common__WEBPACK_IMPORTED_MODULE_25__/* .NgStyle */ .B3, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* ["ɵNgNoValidate"] */ .qT, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .DefaultValueAccessor */ .me, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .NgControlStatus */ .BC, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .NgControlStatusGroup */ .cb, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .NgModel */ .vS, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .FormControlDirective */ .l_, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .FormGroupDirective */ .j4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .FormControlName */ .JD, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .FormGroupName */ .$R, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .FormArrayName */ .v8, _packages_ui_core_shared_src_lib_star_rating_star_rating_input_star_rating_input_component__WEBPACK_IMPORTED_MODULE_26__/* .StarRatingInputComponent */ .p, _packages_ui_core_shared_src_lib_card_grid_card_grid_component__WEBPACK_IMPORTED_MODULE_27__/* .CardGridComponent */ .c, _packages_ui_core_shared_src_lib_star_rating_star_rating_output_star_rating_output_component__WEBPACK_IMPORTED_MODULE_28__/* .StarRatingOutputComponent */ .S, _packages_ui_core_shared_src_lib_employee_employee_multi_select_employee_multi_select_component__WEBPACK_IMPORTED_MODULE_29__/* .EmployeeSelectComponent */ .O, angular2_smart_table__WEBPACK_IMPORTED_MODULE_3__/* .Angular2SmartTableComponent */ .T9, _packages_ui_core_shared_src_lib_gauzy_button_action_gauzy_button_action_component__WEBPACK_IMPORTED_MODULE_30__/* .GauzyButtonActionComponent */ .A, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__/* .TranslatePipe */ .D9],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.action[_ngcontent-%COMP%] {\n  box-shadow: var(--gauzy-shadow);\n  border: none;\n}\n.action[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}\n.action.info[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: var(--color-info-default);\n  color: white;\n  border-color: var(--color-info-default);\n}\n.action.info-text-1[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  color: var(--color-info-default);\n}\n.action.secondary[_ngcontent-%COMP%] {\n  color: #7e7e8f;\n}\n.action.success[_ngcontent-%COMP%] {\n  color: var(--color-success-default);\n}\n.action.warning[_ngcontent-%COMP%] {\n  color: rgb(245, 109, 88);\n}\n.action.orange[_ngcontent-%COMP%] {\n  color: rgb(255, 171, 45);\n}\n.action.primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n}\n.action.primary.soft[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: rgba(110, 73, 232, 0.1);\n}\n.action.select-nb[_ngcontent-%COMP%]     {\n  box-shadow: none;\n}\n.action.select-nb[_ngcontent-%COMP%]     .select-button {\n  box-shadow: var(--gauzy-shadow);\n  background: rgb(245, 245, 245);\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n.actions[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-2);\n  border-radius: var(--button-rectangle-border-radius);\n  padding: 2px 4px !important;\n}\n\n.gauzy-button-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n.card-custom-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n[_nghost-%COMP%]     input {\n  border-radius: var(--border-radius);\n  box-shadow: var(--gauzy-shadow) inset;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   i[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n}\n[dir=ltr]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n[dir=rtl]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--gauzy-text-color-1);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(245, 109, 88, 0.3);\n  border-width: 2px;\n  color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(245, 109, 88, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 16px;\n  letter-spacing: 0em;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(126, 126, 143, 0.3);\n  border-width: 2px;\n  color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(126, 126, 143, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(37, 184, 105, 0.3);\n  border-width: 2px;\n  color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(37, 184, 105, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[disabled][_ngcontent-%COMP%], \n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic.btn-disabled[_ngcontent-%COMP%] {\n  background-color: var(--button-outline-basic-disabled-background-color);\n  border-color: var(--button-outline-basic-disabled-border-color);\n  color: var(--button-outline-basic-disabled-text-color);\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].primary.appearance-filled.status-primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  border: unset;\n  background-color: var(--color-primary-transparent-default);\n  box-shadow: var(--gauzy-shadow) 0, 0, 0, 0.15;\n}\n[dir=ltr]   [_nghost-%COMP%]     input, \n[dir=ltr]   [_nghost-%COMP%]     textarea {\n  text-align: start;\n}\n[dir=rtl]   [_nghost-%COMP%]     input, \n[dir=rtl]   [_nghost-%COMP%]     textarea {\n  text-align: end;\n}\n[_nghost-%COMP%]     input, \n[_nghost-%COMP%]     nb-select.appearance-outline.status-basic .select-button, \n[_nghost-%COMP%]     .ng-select .ng-select-container {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n  height: 42px !important;\n}\n[_nghost-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder, \n[_nghost-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {\n  top: unset !important;\n}\n[_nghost-%COMP%]     label, \n[_nghost-%COMP%]     .label {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  color: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]     textarea {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n}\n[_nghost-%COMP%]     .ng-select .ng-select-container input, \n[_nghost-%COMP%]     nb-tag-list input {\n  background-color: unset !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n}\n\n.form[_ngcontent-%COMP%] {\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n}\n\n.filters[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: flex-end;\n}\n\n.feedbacks-line[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: flex-start;\n  width: 100%;\n}\n\n.top-blocks[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: stretch;\n  width: 98%;\n}\n\n.block[_ngcontent-%COMP%] {\n  border: 0.0625rem solid #e4e9f2;\n  padding: 0.5rem;\n  width: 12rem;\n  border-radius: 5px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.bottom-block[_ngcontent-%COMP%] {\n  width: 98%;\n  padding: 0.5rem 0.35rem 0 0.35rem;\n}\n\n.feedbacks-add-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n}\n\n.add-card-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n[_nghost-%COMP%]   .buttons[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: fit-content;\n  align-self: flex-start;\n}\n[dir=ltr]   [_nghost-%COMP%]   .buttons[_ngcontent-%COMP%] {\n  margin-left: 1rem;\n}\n[dir=rtl]   [_nghost-%COMP%]   .buttons[_ngcontent-%COMP%] {\n  margin-right: 1rem;\n}\n\n.description[_ngcontent-%COMP%] {\n  min-height: 8rem !important;\n  max-width: 100% !important;\n}\n\n.label-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 0.2rem;\n  max-width: 70rem;\n}\n\n.feedbacks-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.add-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: flex-end;\n  border: none;\n}\n.add-card[_ngcontent-%COMP%]     input, \n.add-card[_ngcontent-%COMP%]     nb-select.appearance-outline.status-basic .select-button, \n.add-card[_ngcontent-%COMP%]     .ng-select .ng-select-container {\n  background-color: var(--gauzy-card-1) !important;\n  border: none;\n  height: 42px !important;\n}\n.add-card[_ngcontent-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder, \n.add-card[_ngcontent-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {\n  top: unset !important;\n}\n.add-card[_ngcontent-%COMP%]     label, \n.add-card[_ngcontent-%COMP%]     .label {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  color: var(--gauzy-text-color-2);\n}\n.add-card[_ngcontent-%COMP%]     textarea {\n  background-color: var(--gauzy-card-1) !important;\n  border: none;\n}\n.add-card[_ngcontent-%COMP%]     .ng-select .ng-select-container input, \n.add-card[_ngcontent-%COMP%]     nb-tag-list input {\n  background-color: unset !important;\n}\n.add-card[_ngcontent-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n}\n\n.feedbacks-card-wrap[_ngcontent-%COMP%] {\n  min-width: 645px;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  padding: 1rem;\n  border-radius: var(--border-radius);\n}\n\n.form-group[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n[_nghost-%COMP%]   .radio-group[_ngcontent-%COMP%] {\n  flex-direction: row;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n[dir=ltr]   [_nghost-%COMP%]   .radio-group[_ngcontent-%COMP%] {\n  margin-left: 1rem;\n}\n[dir=rtl]   [_nghost-%COMP%]   .radio-group[_ngcontent-%COMP%] {\n  margin-right: 1rem;\n}\n\n[_nghost-%COMP%]   .fas[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n[dir=ltr]   [_nghost-%COMP%]   .fas[_ngcontent-%COMP%] {\n  padding-left: 3px;\n}\n[dir=rtl]   [_nghost-%COMP%]   .fas[_ngcontent-%COMP%] {\n  padding-right: 3px;\n}\n\n.success[_ngcontent-%COMP%] {\n  color: #00d68f;\n}\n\n.error[_ngcontent-%COMP%] {\n  color: #ff3d71;\n}\n\n.image-small[_ngcontent-%COMP%] {\n  max-width: 35px;\n  max-height: 35px;\n  border-radius: 13px;\n}\n\n.feedback-info[_ngcontent-%COMP%] {\n  flex-direction: row;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  margin-bottom: 0.5rem;\n}\n\n[dir=ltr]   [_nghost-%COMP%]   .rating[_ngcontent-%COMP%] {\n  padding-left: 1rem;\n}\n[dir=rtl]   [_nghost-%COMP%]   .rating[_ngcontent-%COMP%] {\n  padding-right: 1rem;\n}\n\n.feedback-status[_ngcontent-%COMP%] {\n  flex-direction: row;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  margin-bottom: 0;\n}\n\n.main-btn[_ngcontent-%COMP%] {\n  flex-direction: row;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.main-btn[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n\n.select[_ngcontent-%COMP%] {\n  width: 17rem;\n}\n\n.center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.label-wrap[_ngcontent-%COMP%] {\n  flex-direction: row;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n\n[dir=ltr]   [_nghost-%COMP%]   .stars-optional[_ngcontent-%COMP%] {\n  margin: 0 0 0.5rem 1rem;\n}\n[dir=rtl]   [_nghost-%COMP%]   .stars-optional[_ngcontent-%COMP%] {\n  margin: 0 1rem 0.5rem 0;\n}\n\n[dir=ltr]   [_nghost-%COMP%]   .stars-output[_ngcontent-%COMP%] {\n  padding-left: 1rem;\n}\n[dir=rtl]   [_nghost-%COMP%]   .stars-output[_ngcontent-%COMP%] {\n  padding-right: 1rem;\n}\n\n[_nghost-%COMP%]   .criterions-rating[_ngcontent-%COMP%] {\n  flex-direction: column;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  width: 100%;\n  background-color: var(--gauzy-card-4);\n  padding: 1rem 0;\n  margin-bottom: 0.5rem;\n  border-radius: var(--border-radius);\n}\n[_nghost-%COMP%]   .criterions-rating-radio-group[_ngcontent-%COMP%] {\n  flex-direction: row;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n}\n[_nghost-%COMP%]   .criterions-rating[_ngcontent-%COMP%]   .form-blocks[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: stretch;\n  flex-wrap: wrap;\n  width: 100%;\n}\n[_nghost-%COMP%]   .criterions-rating[_ngcontent-%COMP%]   .form-blocks[_ngcontent-%COMP%]   .form-block[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: stretch;\n  flex-wrap: wrap;\n  padding: 1rem;\n}\n[_nghost-%COMP%]   .criterions-rating[_ngcontent-%COMP%]   .form-blocks[_ngcontent-%COMP%]   .form-block-criterion[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n}\n[_nghost-%COMP%]   .criterions-rating[_ngcontent-%COMP%]   .form-blocks[_ngcontent-%COMP%]   .form-block-criterion-title[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 1.5rem;\n}\n[dir=ltr]   [_nghost-%COMP%]   .criterions-rating[_ngcontent-%COMP%]   .form-blocks[_ngcontent-%COMP%]   .form-block-criterion-title[_ngcontent-%COMP%] {\n  margin-right: 0.15rem;\n}\n[dir=rtl]   [_nghost-%COMP%]   .criterions-rating[_ngcontent-%COMP%]   .form-blocks[_ngcontent-%COMP%]   .form-block-criterion-title[_ngcontent-%COMP%] {\n  margin-left: 0.15rem;\n}\n[_nghost-%COMP%]   .criterions-rating[_ngcontent-%COMP%]   .form-blocks[_ngcontent-%COMP%]   .form-block-criterion-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  border: 1px #e4e9f2 solid;\n  padding: 0.2rem 0.5rem;\n  border-radius: 0.2rem;\n}\n[dir=ltr]   [_nghost-%COMP%]   .criterions-rating[_ngcontent-%COMP%]   .form-blocks[_ngcontent-%COMP%]   .form-block-criterion-item[_ngcontent-%COMP%] {\n  margin: 0.15rem 0.15rem 0.15rem 0;\n}\n[dir=rtl]   [_nghost-%COMP%]   .criterions-rating[_ngcontent-%COMP%]   .form-blocks[_ngcontent-%COMP%]   .form-block-criterion-item[_ngcontent-%COMP%] {\n  margin: 0.15rem 0 0.15rem 0.15rem;\n}\n\n[_nghost-%COMP%] {\n  overflow-y: auto;\n  max-height: calc(100vh - 28rem);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%], \n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%], \n[_nghost-%COMP%]   .feedbacks-card-wrap[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n}\n[_nghost-%COMP%]     input, \n[_nghost-%COMP%]     nb-select.appearance-outline.status-basic .select-button, \n[_nghost-%COMP%]     .ng-select .ng-select-container {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n  height: 2rem !important;\n}\n[_nghost-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder, \n[_nghost-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {\n  top: unset !important;\n}\n[_nghost-%COMP%]     label, \n[_nghost-%COMP%]     .label {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  color: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]     textarea {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n}\n[_nghost-%COMP%]     .ng-select .ng-select-container input, \n[_nghost-%COMP%]     nb-tag-list input {\n  background-color: unset !important;\n}"]
    });
  }
};
EditCandidateFeedbacksComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_31__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .UntilDestroy */ .d)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_31__/* .__metadata */ .Sn)("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .UntypedFormBuilder */ .ze, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_15__/* .CandidateFeedbacksService */ .R, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_16__/* .ToastrService */ .t, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__/* .TranslateService */ .c$, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_18__/* .CandidateStore */ .R, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_19__/* .EmployeesService */ .r, _nebular_theme__WEBPACK_IMPORTED_MODULE_20__/* .NbDialogService */ .S0W, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_21__/* .CandidatesService */ .S, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_22__/* .Store */ .il, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_23__/* .CandidateInterviewService */ .C, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_24__/* .CandidateCriterionsRatingService */ .c])], EditCandidateFeedbacksComponent);


/***/ }),

/***/ 77687:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ EditCandidateSkillsComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(73014);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24237);
/* harmony import */ var _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38546);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(12614);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(10936);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(81236);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(46076);
/* harmony import */ var angular2_smart_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(52345);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(15480);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(84536);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(71924);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(4185);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(19223);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(56383);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(14572);
/* harmony import */ var _packages_ui_core_shared_src_lib_components_layout_selector_layout_selector_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(51102);
/* harmony import */ var _packages_ui_core_shared_src_lib_card_grid_card_grid_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(49517);


















function EditCandidateSkillsComponent_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function EditCandidateSkillsComponent_button_3_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.add());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "nb-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(3, 1, "BUTTONS.ADD"), " ");
  }
}
function EditCandidateSkillsComponent_ga_layout_selector_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(0, "ga-layout-selector", 10);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpropertyInterpolate"] */ .FS9("componentName", ctx_r1.viewComponentName);
  }
}
function EditCandidateSkillsComponent_div_5_form_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div")(1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(2, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const i_r4 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("formGroupName", i_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpropertyInterpolate"] */ .FS9("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(3, 2, "FORM.PLACEHOLDERS.ADD_SKILL"));
  }
}
function EditCandidateSkillsComponent_div_5_form_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "form", 13)(1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(2, EditCandidateSkillsComponent_div_5_form_1_div_2_Template, 4, 4, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(3, "div", 16)(4, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function EditCandidateSkillsComponent_div_5_form_1_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.submitForm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(7, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function EditCandidateSkillsComponent_div_5_form_1_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.showAddCard = !ctx_r1.showAddCard);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("formGroup", ctx_r1.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx_r1.skills == null ? null : ctx_r1.skills.controls);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(6, 4, "BUTTONS.SAVE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(9, 6, "BUTTONS.CANCEL"), " ");
  }
}
function EditCandidateSkillsComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, EditCandidateSkillsComponent_div_5_form_1_Template, 10, 8, "form", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r1.form);
  }
}
function EditCandidateSkillsComponent_nb_card_body_6_nb_card_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const skill_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", skill_r5.name, "");
  }
}
function EditCandidateSkillsComponent_nb_card_body_6_nb_card_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "input", 26, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(3, "div", 27)(4, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function EditCandidateSkillsComponent_nb_card_body_6_nb_card_1_div_3_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r6);
      const i_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG().index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.cancel(i_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(7, "div", 27)(8, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function EditCandidateSkillsComponent_nb_card_body_6_nb_card_1_div_3_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r6);
      const editInput_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(2);
      const i_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG().index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.editSkill(editInput_r8.value, i_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
  }
  if (rf & 2) {
    const skill_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("value", skill_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(6, 3, "BUTTONS.CANCEL"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(10, 5, "BUTTONS.UPDATE"), " ");
  }
}
function EditCandidateSkillsComponent_nb_card_body_6_nb_card_1_nb_actions_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-actions", 30)(1, "nb-action", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function EditCandidateSkillsComponent_nb_card_body_6_nb_card_1_nb_actions_4_Template_nb_action_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r9);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      const skill_r5 = ctx_r9.$implicit;
      const i_r7 = ctx_r9.index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.showEditCard(i_r7, skill_r5.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(2, "nb-action", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function EditCandidateSkillsComponent_nb_card_body_6_nb_card_1_nb_actions_4_Template_nb_action_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r9);
      const skill_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.removeSkill(skill_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
  }
}
function EditCandidateSkillsComponent_nb_card_body_6_nb_card_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-card", 22)(1, "nb-card-body");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(2, EditCandidateSkillsComponent_nb_card_body_6_nb_card_1_span_2_Template, 2, 1, "span", 7)(3, EditCandidateSkillsComponent_nb_card_body_6_nb_card_1_div_3_Template, 11, 7, "div", 23)(4, EditCandidateSkillsComponent_nb_card_body_6_nb_card_1_nb_actions_4_Template, 3, 0, "nb-actions", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const i_r7 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", !ctx_r1.showEditDiv[i_r7]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r1.showEditDiv[i_r7]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", !ctx_r1.showEditDiv[i_r7]);
  }
}
function EditCandidateSkillsComponent_nb_card_body_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-card-body");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, EditCandidateSkillsComponent_nb_card_body_6_nb_card_1_Template, 5, 3, "nb-card", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx_r1.skillList);
  }
}
function EditCandidateSkillsComponent_nb_card_body_7_ga_card_grid_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(0, "ga-card-grid", 34);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    const actionButtons_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("totalItems", ctx_r1.pagination == null ? null : ctx_r1.pagination.totalItems)("settings", ctx_r1.settingsSmartTable)("source", ctx_r1.skillList)("buttonTemplate", actionButtons_r11);
  }
}
function EditCandidateSkillsComponent_nb_card_body_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-card-body");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, EditCandidateSkillsComponent_nb_card_body_7_ga_card_grid_1_Template, 1, 4, "ga-card-grid", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r1.dataLayoutStyle === "CARDS_GRID");
  }
}
function EditCandidateSkillsComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function EditCandidateSkillsComponent_ng_template_8_Template_button_click_0_listener() {
      const selectedItem_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r12).selectedItem;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.gridEdit(selectedItem_r13));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "nb-icon", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(4, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function EditCandidateSkillsComponent_ng_template_8_Template_button_click_4_listener() {
      const selectedItem_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r12).selectedItem;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.removeSkill(selectedItem_r13.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(5, "nb-icon", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const buttonSize_r14 = ctx.buttonSize;
    const selectedItem_r13 = ctx.selectedItem;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("disabled", !selectedItem_r13 && ctx_r1.disableButton)("size", buttonSize_r14 || "medium");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(3, 6, "BUTTONS.EDIT"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("disabled", !selectedItem_r13 && ctx_r1.disableButton)("size", buttonSize_r14 || "medium");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(7, 8, "BUTTONS.DELETE"), " ");
  }
}
let EditCandidateSkillsComponent = /*#__PURE__*/(() => {
  class EditCandidateSkillsComponent extends _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_1__/* .TranslationBaseComponent */ .K {
    constructor(toastrService, translateService, candidateStore, store, fb, candidateSkillsService) {
      super(translateService);
      this.toastrService = toastrService;
      this.translateService = translateService;
      this.candidateStore = candidateStore;
      this.store = store;
      this.fb = fb;
      this.candidateSkillsService = candidateSkillsService;
      this._ngDestroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__/* .Subject */ .B();
      this.showEditDiv = [];
      this.skillId = null;
      this.skillList = [];
      this.dataLayoutStyle = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__/* .ComponentLayoutStyleEnum */ .IE.TABLE;
      this.sourceSmartTable = new angular2_smart_table__WEBPACK_IMPORTED_MODULE_4__/* .LocalDataSource */ .h0();
      this.setView();
    }
    ngOnInit() {
      this.candidateStore.selectedCandidate$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .takeUntil */ .Q)(this._ngDestroy$)).subscribe(candidate => {
        if (candidate) {
          this.selectedOrganization = this.store.selectedOrganization;
          this.candidateId = candidate.id;
          this._initializeForm();
          this.loadSkills();
          this.loadSmartTable();
          this._applyTranslationOnSmartTable();
        }
      });
    }
    _initializeForm() {
      var _this = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(function* () {
        _this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__/* .UntypedFormGroup */ .J3({
          skills: _this.fb.array([])
        });
        const skillForm = _this.skills;
        skillForm.push(_this.fb.group({
          name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__/* .Validators */ .k0.required]
        }));
      })();
    }
    add() {
      this.showAddCard = true;
      this.skillId = null;
      this.form.reset();
    }
    setView() {
      this.viewComponentName = _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_8__/* .ComponentEnum */ .L.SKILLS;
      this.store.componentLayout$(this.viewComponentName).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .takeUntil */ .Q)(this._ngDestroy$)).subscribe(componentLayout => {
        this.dataLayoutStyle = componentLayout;
      });
    }
    loadSkills() {
      var _this2 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(function* () {
        const {
          id: organizationId,
          tenantId
        } = _this2.selectedOrganization;
        const {
          items = []
        } = yield _this2.candidateSkillsService.getAll({
          candidateId: _this2.candidateId,
          organizationId,
          tenantId
        });
        _this2.skillList = items;
      })();
    }
    showEditCard(index, id) {
      this.showEditDiv[index] = true;
      this.skillId = id;
    }
    removeSkill(skill) {
      var _this3 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(function* () {
        try {
          yield _this3.candidateSkillsService.delete(skill.id);
          _this3.toastrService.success('TOASTR.MESSAGE.CANDIDATE_SKILL_DELETED', {
            name: skill.name
          });
          _this3.loadSkills();
        } catch (error) {
          _this3.toastrError(error);
        }
      })();
    }
    submitForm() {
      if (this.skillId) {
        const skillForm = this.skills;
        if (skillForm.valid) {
          const formValue = {
            ...skillForm.value[0]
          };
          this.editSkill(formValue.name);
        }
      } else {
        this.addSkill();
      }
    }
    editSkill(name, index) {
      var _this4 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(function* () {
        if (name !== '') {
          try {
            yield _this4.candidateSkillsService.update(_this4.skillId, {
              name: name
            });
            _this4.loadSkills();
            _this4.toastrService.success('TOASTR.MESSAGE.CANDIDATE_SKILL_UPDATED', {
              name
            });
            _this4.skills.reset();
            _this4.showEditDiv[index] = !_this4.showEditDiv[index];
            _this4.showAddCard = false;
          } catch (error) {
            _this4.toastrError(error);
          }
          _this4.skillId = null;
        } else {
          _this4.toastrService.danger(_this4.getTranslation('NOTES.CANDIDATE.EXPERIENCE.INVALID_FIELD'), _this4.getTranslation('TOASTR.MESSAGE.CANDIDATE_SKILLS_REQUIRED'));
        }
      })();
    }
    loadSmartTable() {
      var _this5 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(function* () {
        _this5.settingsSmartTable = {
          actions: false,
          columns: {
            name: {
              title: _this5.getTranslation('CANDIDATES_PAGE.EDIT_CANDIDATE.NAME'),
              type: 'string'
            }
          }
        };
      })();
    }
    gridEdit(skill) {
      this.showAddCard = true;
      this.skills.patchValue([skill]);
      this.skillId = skill.id;
    }
    cancel(index) {
      this.showEditDiv[index] = !this.showEditDiv[index];
      this.skillId = null;
    }
    showCard() {
      this.showAddCard = !this.showAddCard;
      this.form.controls.skills.reset();
    }
    addSkill() {
      var _this6 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(function* () {
        const {
          id: organizationId,
          tenantId
        } = _this6.selectedOrganization;
        const skillForm = _this6.form.controls.skills;
        if (skillForm.valid) {
          const formValue = {
            ...skillForm.value[0]
          };
          try {
            yield _this6.candidateSkillsService.create({
              ...formValue,
              candidateId: _this6.candidateId,
              organizationId,
              tenantId
            });
            _this6.toastrService.success('TOASTR.MESSAGE.CANDIDATE_SKILL_CREATED', {
              name: formValue.name
            });
            _this6.loadSkills();
          } catch (error) {
            _this6.toastrError(error);
          }
          _this6.showAddCard = false;
          skillForm.reset();
        } else {
          _this6.toastrService.danger(_this6.getTranslation('NOTES.CANDIDATE.EXPERIENCE.INVALID_FIELD'), _this6.getTranslation('TOASTR.MESSAGE.CANDIDATE_SKILLS_REQUIRED'));
        }
      })();
    }
    toastrError(error) {
      this.toastrService.danger(this.getTranslation('NOTES.CANDIDATE.EXPERIENCE.ERROR', {
        error: error.error ? error.error.message : error.message
      }), this.getTranslation('TOASTR.TITLE.ERROR'));
    }
    _applyTranslationOnSmartTable() {
      this.translateService.onLangChange.subscribe(() => {
        this.loadSmartTable();
      });
    }
    ngOnDestroy() {
      this._ngDestroy$.next();
      this._ngDestroy$.complete();
    }
    /*
     * Getter for candidate skills form controls array
     */
    get skills() {
      return this.form.get('skills');
    }
    static {
      this.ɵfac = function EditCandidateSkillsComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || EditCandidateSkillsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_9__/* .ToastrService */ .t), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__/* .TranslateService */ .c$), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_11__/* .CandidateStore */ .R), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_12__/* .Store */ .il), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_forms__WEBPACK_IMPORTED_MODULE_7__/* .UntypedFormBuilder */ .ze), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_13__/* .CandidateSkillsService */ .R));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: EditCandidateSkillsComponent,
        selectors: [["ga-edit-candidate-skills"]],
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
        decls: 10,
        vars: 5,
        consts: [["actionButtons", ""], ["editInput", ""], [2, "display", "flex", "justify-content", "flex-end", "align-items", "center"], [1, "btn-group", "actions", "mr-1"], ["nbButton", "", "status", "success", "class", "action", "size", "small", 3, "click", 4, "ngIf"], ["class", "ml-3", 3, "componentName", 4, "ngIf"], ["class", "container", 4, "ngIf"], [4, "ngIf"], ["nbButton", "", "status", "success", "size", "small", 1, "action", 3, "click"], ["icon", "plus-outline"], [1, "ml-3", 3, "componentName"], [1, "container"], ["class", "row", 3, "formGroup", 4, "ngIf"], [1, "row", 3, "formGroup"], ["formArrayName", "skills", 1, "col-11", "pl-0"], [4, "ngFor", "ngForOf"], [1, "col-1", "pr-0"], ["nbButton", "", "status", "success", 1, "w-100", 3, "click"], ["nbButton", "", "outline", "", "status", "basic", 1, "w-100", 3, "click"], [3, "formGroupName"], ["formControlName", "name", "nbInput", "", "type", "text", "fullWidth", "", 1, "col-12", 3, "placeholder"], ["class", "skill", 4, "ngFor", "ngForOf"], [1, "skill"], ["class", "row m-0", 4, "ngIf"], ["class", "float-right", "e", "medium", 4, "ngIf"], [1, "row", "m-0"], ["nbInput", "", "type", "text", "fullWidth", "", 1, "col-10", 3, "value"], [1, "col-1"], ["outline", "", "nbButton", "", "status", "basic", 3, "click"], ["nbButton", "", "status", "success", 3, "click"], ["e", "medium", 1, "float-right"], ["icon", "edit", 1, "d-inline", "pr-2", 3, "click"], ["icon", "close", 1, "d-inline", "pr-0", "pl-2", 3, "click"], [3, "totalItems", "settings", "source", "buttonTemplate", 4, "ngIf"], [3, "totalItems", "settings", "source", "buttonTemplate"], ["nbButton", "", "status", "info", 1, "mr-2", 3, "click", "disabled", "size"], ["icon", "edit-outline", 1, "mr-1"], ["nbButton", "", "status", "danger", 1, "mr-2", 3, "click", "disabled", "size"], ["icon", "archive-outline", 1, "mr-1"]],
        template: function EditCandidateSkillsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-card")(1, "nb-card-header", 2)(2, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(3, EditCandidateSkillsComponent_button_3_Template, 4, 3, "button", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(4, EditCandidateSkillsComponent_ga_layout_selector_4_Template, 1, 1, "ga-layout-selector", 5)(5, EditCandidateSkillsComponent_div_5_Template, 2, 1, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(6, EditCandidateSkillsComponent_nb_card_body_6_Template, 2, 1, "nb-card-body", 7)(7, EditCandidateSkillsComponent_nb_card_body_7_Template, 2, 1, "nb-card-body", 7)(8, EditCandidateSkillsComponent_ng_template_8_Template, 8, 10, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplateRefExtractor"] */ .C5r);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", !ctx.showAddCard);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", !ctx.showAddCard);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.showAddCard);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", (ctx.skillList == null ? null : ctx.skillList.length) && ctx.dataLayoutStyle === "TABLE");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.skillList == null ? null : ctx.skillList.length);
          }
        },
        dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbActionComponent */ .kK0, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbActionsComponent */ .pb1, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbButtonComponent */ .YP2, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbCardComponent */ .SrT, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbCardBodyComponent */ .KH5, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbCardHeaderComponent */ .zJv, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbIconComponent */ .tHu, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbInputDirective */ .i6h, _angular_common__WEBPACK_IMPORTED_MODULE_15__/* .NgForOf */ .Sq, _angular_common__WEBPACK_IMPORTED_MODULE_15__/* .NgIf */ .bT, _angular_forms__WEBPACK_IMPORTED_MODULE_7__/* ["ɵNgNoValidate"] */ .qT, _angular_forms__WEBPACK_IMPORTED_MODULE_7__/* .DefaultValueAccessor */ .me, _angular_forms__WEBPACK_IMPORTED_MODULE_7__/* .NgControlStatus */ .BC, _angular_forms__WEBPACK_IMPORTED_MODULE_7__/* .NgControlStatusGroup */ .cb, _angular_forms__WEBPACK_IMPORTED_MODULE_7__/* .FormGroupDirective */ .j4, _angular_forms__WEBPACK_IMPORTED_MODULE_7__/* .FormControlName */ .JD, _angular_forms__WEBPACK_IMPORTED_MODULE_7__/* .FormGroupName */ .$R, _angular_forms__WEBPACK_IMPORTED_MODULE_7__/* .FormArrayName */ .v8, _packages_ui_core_shared_src_lib_components_layout_selector_layout_selector_component__WEBPACK_IMPORTED_MODULE_16__/* .LayoutSelectorComponent */ .d, _packages_ui_core_shared_src_lib_card_grid_card_grid_component__WEBPACK_IMPORTED_MODULE_17__/* .CardGridComponent */ .c, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__/* .TranslatePipe */ .D9],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.action[_ngcontent-%COMP%] {\n  box-shadow: var(--gauzy-shadow);\n  border: none;\n}\n.action[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}\n.action.info[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: var(--color-info-default);\n  color: white;\n  border-color: var(--color-info-default);\n}\n.action.info-text-1[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  color: var(--color-info-default);\n}\n.action.secondary[_ngcontent-%COMP%] {\n  color: #7e7e8f;\n}\n.action.success[_ngcontent-%COMP%] {\n  color: var(--color-success-default);\n}\n.action.warning[_ngcontent-%COMP%] {\n  color: rgb(245, 109, 88);\n}\n.action.orange[_ngcontent-%COMP%] {\n  color: rgb(255, 171, 45);\n}\n.action.primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n}\n.action.primary.soft[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: rgba(110, 73, 232, 0.1);\n}\n.action.select-nb[_ngcontent-%COMP%]     {\n  box-shadow: none;\n}\n.action.select-nb[_ngcontent-%COMP%]     .select-button {\n  box-shadow: var(--gauzy-shadow);\n  background: rgb(245, 245, 245);\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n.actions[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-2);\n  border-radius: var(--button-rectangle-border-radius);\n  padding: 2px 4px !important;\n}\n\n.gauzy-button-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n.card-custom-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n[_nghost-%COMP%]     input {\n  border-radius: var(--border-radius);\n  box-shadow: var(--gauzy-shadow) inset;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   i[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n}\n[dir=ltr]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n[dir=rtl]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--gauzy-text-color-1);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(245, 109, 88, 0.3);\n  border-width: 2px;\n  color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(245, 109, 88, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 16px;\n  letter-spacing: 0em;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(126, 126, 143, 0.3);\n  border-width: 2px;\n  color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(126, 126, 143, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(37, 184, 105, 0.3);\n  border-width: 2px;\n  color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(37, 184, 105, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[disabled][_ngcontent-%COMP%], \n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic.btn-disabled[_ngcontent-%COMP%] {\n  background-color: var(--button-outline-basic-disabled-background-color);\n  border-color: var(--button-outline-basic-disabled-border-color);\n  color: var(--button-outline-basic-disabled-text-color);\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].primary.appearance-filled.status-primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  border: unset;\n  background-color: var(--color-primary-transparent-default);\n  box-shadow: var(--gauzy-shadow) 0, 0, 0, 0.15;\n}\n[dir=ltr]   [_nghost-%COMP%]     input, \n[dir=ltr]   [_nghost-%COMP%]     textarea {\n  text-align: start;\n}\n[dir=rtl]   [_nghost-%COMP%]     input, \n[dir=rtl]   [_nghost-%COMP%]     textarea {\n  text-align: end;\n}\n[_nghost-%COMP%]     input, \n[_nghost-%COMP%]     nb-select.appearance-outline.status-basic .select-button, \n[_nghost-%COMP%]     .ng-select .ng-select-container {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n  height: 42px !important;\n}\n[_nghost-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder, \n[_nghost-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {\n  top: unset !important;\n}\n[_nghost-%COMP%]     label, \n[_nghost-%COMP%]     .label {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  color: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]     textarea {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n}\n[_nghost-%COMP%]     .ng-select .ng-select-container input, \n[_nghost-%COMP%]     nb-tag-list input {\n  background-color: unset !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n}\n\nform[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n  border-radius: var(--border-radius);\n  padding: 1rem;\n}\n\n.skill[_ngcontent-%COMP%] {\n  background-color: var(--background-basic-color-1);\n  margin-bottom: 8px;\n}\n\n[_nghost-%COMP%]     input, \n[_nghost-%COMP%]     nb-select.appearance-outline.status-basic .select-button, \n[_nghost-%COMP%]     .ng-select .ng-select-container {\n  background-color: var(--gauzy-card-1) !important;\n  border: none;\n  height: 42px !important;\n}\n[_nghost-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder, \n[_nghost-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {\n  top: unset !important;\n}\n[_nghost-%COMP%]     label, \n[_nghost-%COMP%]     .label {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  color: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]     textarea {\n  background-color: var(--gauzy-card-1) !important;\n  border: none;\n}\n[_nghost-%COMP%]     .ng-select .ng-select-container input, \n[_nghost-%COMP%]     nb-tag-list input {\n  background-color: unset !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n}"]
      });
    }
  }
  return EditCandidateSkillsComponent;
})();

/***/ }),

/***/ 79646:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   i: () => (/* binding */ EditCandidateInterviewComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(73014);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(64411);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(56383);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(19223);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(72781);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(73246);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(36950);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(23423);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(81236);
/* harmony import */ var angular2_smart_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52345);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(32629);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(88319);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(91081);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(90022);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(84536);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(71924);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(15480);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(46076);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(26024);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47108);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(94251);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(11459);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(15225);
/* harmony import */ var _manage_candidate_interviews_interview_panel_table_components_actions_actions_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(33894);
/* harmony import */ var _manage_candidate_interviews_interview_panel_table_components_date_date_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(49644);
/* harmony import */ var _manage_candidate_interviews_interview_panel_table_components_rating_rating_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(49177);
/* harmony import */ var _manage_candidate_interviews_interview_panel_table_components_interviewers_interviewers_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(37494);
/* harmony import */ var _manage_candidate_interviews_interview_panel_table_components_criterions_criterions_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(41140);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(14572);
/* harmony import */ var _packages_ui_core_shared_src_lib_card_grid_card_grid_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(49517);
/* harmony import */ var _packages_ui_core_shared_src_lib_gauzy_button_action_gauzy_button_action_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(45293);

























function EditCandidateInterviewComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 9)(1, "nb-checkbox", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("checkedChange", function EditCandidateInterviewComponent_div_6_Template_nb_checkbox_checkedChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.changePast($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(4, "nb-checkbox", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("checkedChange", function EditCandidateInterviewComponent_div_6_Template_nb_checkbox_checkedChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.changeFuture($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("checked", ctx_r1.onlyPast);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI("", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(3, 4, "FORM.CHECKBOXES.ONLY_PAST"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("checked", ctx_r1.onlyFuture);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI("", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(6, 6, "FORM.CHECKBOXES.ONLY_FUTURE"), " ");
  }
}
function EditCandidateInterviewComponent_ng_container_7_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 14)(1, "angular2-smart-table", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("userRowSelect", function EditCandidateInterviewComponent_ng_container_7_div_1_Template_angular2_smart_table_userRowSelect_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.selectInterview($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("settings", ctx_r1.settingsSmartTable)("source", ctx_r1.sourceSmartTable);
  }
}
function EditCandidateInterviewComponent_ng_container_7_ga_card_grid_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "ga-card-grid", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("onSelectedItem", function EditCandidateInterviewComponent_ng_container_7_ga_card_grid_2_Template_ga_card_grid_onSelectedItem_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.selectInterview($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("totalItems", ctx_r1.pagination == null ? null : ctx_r1.pagination.totalItems)("settings", ctx_r1.settingsSmartTable)("source", ctx_r1.tableInterviewList);
  }
}
function EditCandidateInterviewComponent_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, EditCandidateInterviewComponent_ng_container_7_div_1_Template, 2, 2, "div", 12)(2, EditCandidateInterviewComponent_ng_container_7_ga_card_grid_2_Template, 1, 3, "ga-card-grid", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r1.dataLayoutStyle === "TABLE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r1.dataLayoutStyle === "CARDS_GRID");
  }
}
function EditCandidateInterviewComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function EditCandidateInterviewComponent_ng_template_8_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.add());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "nb-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI("", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(3, 1, "BUTTONS.ADD"), " ");
  }
}
function EditCandidateInterviewComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 19)(1, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function EditCandidateInterviewComponent_ng_template_10_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.addInterviewFeedback(ctx_r1.selectedInterview == null ? null : ctx_r1.selectedInterview.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(2, "nb-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(5, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function EditCandidateInterviewComponent_ng_template_10_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.editInterview(ctx_r1.selectedInterview == null ? null : ctx_r1.selectedInterview.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(6, "nb-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(9, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function EditCandidateInterviewComponent_ng_template_10_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.removeInterview(ctx_r1.selectedInterview == null ? null : ctx_r1.selectedInterview.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(11, "nb-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(4, 3, "BUTTONS.FEEDBACK"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(8, 5, "BUTTONS.EDIT"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(10, 7, "BUTTONS.DELETE"));
  }
}
let EditCandidateInterviewComponent = class EditCandidateInterviewComponent extends _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_1__/* .PaginationFilterBaseComponent */ .t {
  constructor(dialogService, candidatesService, employeesService, candidateFeedbacksService, candidateInterviewService, translateService, candidateStore, store, toastrService) {
    super(translateService);
    this.dialogService = dialogService;
    this.candidatesService = candidatesService;
    this.employeesService = employeesService;
    this.candidateFeedbacksService = candidateFeedbacksService;
    this.candidateInterviewService = candidateInterviewService;
    this.translateService = translateService;
    this.candidateStore = candidateStore;
    this.store = store;
    this.toastrService = toastrService;
    this.onlyPast = false;
    this.onlyFuture = false;
    this.sourceSmartTable = new angular2_smart_table__WEBPACK_IMPORTED_MODULE_2__/* .LocalDataSource */ .h0();
    this.dataLayoutStyle = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__/* .ComponentLayoutStyleEnum */ .IE.TABLE;
    this.tableInterviewList = [];
    this.disabled = true;
    this.selectedInterview = {
      data: null,
      isSelected: false
    };
    this.setView();
  }
  ngOnInit() {
    this._loadSmartTableSettings();
    this._applyTranslationOnSmartTable();
    this.candidateStore.selectedCandidate$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .filter */ .p)(candidate => !!candidate), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .M)(candidate => this.selectedCandidate = candidate), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__/* .untilDestroyed */ .s)(this)).subscribe(candidate => {
      if (candidate) {
        this.selectedOrganization = this.store.selectedOrganization;
        this.candidateId = candidate.id;
        this.loadInterview();
        const {
          tenantId
        } = this.store.user;
        const {
          id: organizationId
        } = this.selectedOrganization;
        this.candidatesService.getAll(['user'], {
          organizationId,
          tenantId
        }).pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__/* .untilDestroyed */ .s)(this)).subscribe(candidates => {
          this.candidates = candidates.items;
        });
      }
    });
  }
  setView() {
    this.viewComponentName = _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_7__/* .ComponentEnum */ .L.INTERVIEWS;
    this.store.componentLayout$(this.viewComponentName).pipe((0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_8__/* .distinctUntilChange */ .nI)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .M)(componentLayout => this.dataLayoutStyle = componentLayout), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__/* .untilDestroyed */ .s)(this)).subscribe();
  }
  _loadSmartTableSettings() {
    this.settingsSmartTable = {
      actions: false,
      selectedRowIndex: -1,
      columns: {
        title: {
          title: this.getTranslation('CANDIDATES_PAGE.MANAGE_INTERVIEWS.TITLE'),
          type: 'string'
        },
        date: {
          title: this.getTranslation('CANDIDATES_PAGE.MANAGE_INTERVIEWS.DATE'),
          type: 'custom',
          width: '120px',
          isFilterable: false,
          renderComponent: _manage_candidate_interviews_interview_panel_table_components_date_date_component__WEBPACK_IMPORTED_MODULE_9__/* .InterviewDateTableComponent */ .F,
          componentInitFunction: (instance, cell) => {
            instance.rowData = cell.getRow().getData();
          }
        },
        rating: {
          title: this.getTranslation('CANDIDATES_PAGE.MANAGE_INTERVIEWS.RATING'),
          type: 'custom',
          width: '136px',
          isFilterable: false,
          renderComponent: _manage_candidate_interviews_interview_panel_table_components_rating_rating_component__WEBPACK_IMPORTED_MODULE_10__/* .InterviewStarRatingComponent */ .i,
          componentInitFunction: (instance, cell) => {
            instance.rowData = cell.getRow().getData();
          }
        },
        employees: {
          title: this.getTranslation('CANDIDATES_PAGE.MANAGE_INTERVIEWS.INTERVIEWERS'),
          type: 'custom',
          width: '155px',
          isFilterable: false,
          renderComponent: _manage_candidate_interviews_interview_panel_table_components_interviewers_interviewers_component__WEBPACK_IMPORTED_MODULE_11__/* .InterviewersTableComponent */ .n,
          componentInitFunction: (instance, cell) => {
            instance.rowData = cell.getRow().getData();
          }
        },
        criterions: {
          title: this.getTranslation('CANDIDATES_PAGE.MANAGE_INTERVIEWS.CRITERIONS'),
          type: 'custom',
          isFilterable: false,
          renderComponent: _manage_candidate_interviews_interview_panel_table_components_criterions_criterions_component__WEBPACK_IMPORTED_MODULE_12__/* .InterviewCriterionsTableComponent */ .F,
          componentInitFunction: (instance, cell) => {
            instance.rowData = cell.getRow().getData();
          }
        },
        location: {
          title: this.getTranslation('CANDIDATES_PAGE.MANAGE_INTERVIEWS.LOCATION'),
          type: 'string'
        },
        note: {
          title: this.getTranslation('CANDIDATES_PAGE.MANAGE_INTERVIEWS.NOTES'),
          type: 'string',
          isFilterable: false
        },
        actions: {
          title: this.getTranslation('SM_TABLE.LAST_UPDATED'),
          width: '150px',
          type: 'custom',
          isFilterable: false,
          renderComponent: _manage_candidate_interviews_interview_panel_table_components_actions_actions_component__WEBPACK_IMPORTED_MODULE_13__/* .InterviewActionsTableComponent */ .O,
          componentInitFunction: (instance, cell) => {
            instance.rowData = cell.getRow().getData();
            instance.updateResult.subscribe(params => {
              switch (params.type) {
                case 'feedback':
                  this.addInterviewFeedback(params.data.id);
                  break;
                case 'edit':
                  this.editInterview(params.data.id);
                  break;
                case 'remove':
                  this.removeInterview(params.data.id);
                  break;
              }
            });
          }
        }
      },
      pager: {
        display: true,
        perPage: 8
      }
    };
  }
  add() {
    var _this = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A)(function* () {
      const dialog = _this.dialogService.open(_gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_15__/* .CandidateInterviewMutationComponent */ .X, {
        context: {
          headerTitle: _this.getTranslation('CANDIDATES_PAGE.EDIT_CANDIDATE.INTERVIEW.SCHEDULE_INTERVIEW'),
          selectedCandidate: _this.selectedCandidate,
          interviews: _this.interviewList
        }
      });
      const data = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_16__/* .firstValueFrom */ ._)(dialog.onClose);
      if (data) {
        _this.toastrService.success('TOASTR.MESSAGE.CANDIDATE_INTERVIEW_CREATED', {
          name: data.title
        });
        _this.loadInterview();
      }
    })();
  }
  loadInterview() {
    var _this2 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A)(function* () {
      if (!_this2.selectedOrganization) {
        return;
      }
      _this2.loading = true;
      const {
        tenantId
      } = _this2.store.user;
      const {
        id: organizationId
      } = _this2.selectedOrganization;
      const {
        items: allFeedbacks = []
      } = yield _this2.candidateFeedbacksService.getAll(['interviewer'], {
        organizationId,
        tenantId
      });
      _this2.allFeedbacks = allFeedbacks;
      const {
        items
      } = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_16__/* .firstValueFrom */ ._)(_this2.employeesService.getAll(['user'], {
        organizationId,
        tenantId
      }));
      _this2.employeeList = items;
      const interviews = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_16__/* .firstValueFrom */ ._)(_this2.candidateInterviewService.getAll(['feedbacks', 'interviewers', 'technologies', 'personalQualities', 'candidate'], {
        candidateId: _this2.candidateId,
        organizationId,
        tenantId
      }));
      if (interviews) {
        _this2.interviewList = interviews.items;
        _this2.allInterviews = interviews.items;
        _this2.tableInterviewList = [];
        if ((0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_8__/* .isNotEmpty */ .hj)(_this2.interviewList)) {
          _this2.interviewList.forEach(interview => {
            const employees = [];
            interview.interviewers.forEach(interviewer => {
              _this2.employeeList.forEach(employee => {
                if (interviewer.employeeId === employee.id) {
                  interviewer.employeeImageUrl = employee.user.imageUrl;
                  interviewer.employeeName = employee.user.name;
                  employees.push(employee);
                }
              });
            });
            _this2.candidates.forEach(item => {
              if (item.id === interview.candidate.id) {
                interview.candidate.user = item.user;
              }
            });
            interview.employees = employees;
            _this2.tableInterviewList.push({
              ...interview,
              fullName: _this2.selectedCandidate.user.name,
              imageUrl: _this2.selectedCandidate.user.imageUrl,
              showArchive: false,
              employees: employees,
              allFeedbacks: _this2.allFeedbacks,
              hideActions: true
            });
          });
        }
      }
      _this2.interviewList = _this2.onlyPast ? _this2.filterInterviewByTime(_this2.interviewList, true) : _this2.interviewList;
      _this2.interviewList = _this2.onlyFuture ? _this2.filterInterviewByTime(_this2.interviewList, false) : _this2.interviewList;
      _this2.tableInterviewList = _this2.onlyPast ? _this2.filterInterviewByTime(_this2.tableInterviewList, true) : _this2.tableInterviewList;
      _this2.tableInterviewList = _this2.onlyFuture ? _this2.filterInterviewByTime(_this2.tableInterviewList, false) : _this2.tableInterviewList;
      _this2.sourceSmartTable.load(_this2.tableInterviewList);
      _this2.setPagination({
        ..._this2.getPagination(),
        totalItems: _this2.sourceSmartTable.count()
      });
      _this2.loading = false;
    })();
  }
  addInterviewFeedback(id) {
    var _this3 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A)(function* () {
      const currentInterview = _this3.interviewList.find(item => item.id === id);
      if (currentInterview.feedbacks.length !== currentInterview.interviewers.length) {
        const dialog = _this3.dialogService.open(_gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_17__/* .CandidateInterviewFeedbackComponent */ .x, {
          context: {
            currentInterview: currentInterview,
            candidateId: _this3.selectedCandidate.id,
            interviewId: id
          }
        });
        const data = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_16__/* .firstValueFrom */ ._)(dialog.onClose);
        if (data) {
          _this3.toastrService.success('TOASTR.MESSAGE.INTERVIEW_FEEDBACK_CREATED', {
            name: currentInterview.title
          });
          _this3.loadInterview();
        }
      } else {
        _this3.toastrService.warning('TOASTR.MESSAGE.CANDIDATE_FEEDBACK_ABILITY');
      }
    })();
  }
  editInterview(id) {
    var _this4 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A)(function* () {
      const currentInterview = _this4.interviewList.find(item => item.id === id);
      const dialog = _this4.dialogService.open(_gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_15__/* .CandidateInterviewMutationComponent */ .X, {
        context: {
          headerTitle: _this4.getTranslation('CANDIDATES_PAGE.EDIT_CANDIDATE.INTERVIEW.EDIT_INTERVIEW'),
          editData: currentInterview,
          selectedCandidate: _this4.selectedCandidate,
          interviewId: id,
          interviews: _this4.interviewList
        }
      });
      const data = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_16__/* .firstValueFrom */ ._)(dialog.onClose);
      if (data) {
        _this4.toastrService.success('TOASTR.MESSAGE.CANDIDATE_INTERVIEW_UPDATED', {
          name: data.title
        });
        _this4.loadInterview();
      }
    })();
  }
  isPastInterview(interview) {
    const now = new Date().getTime();
    if (new Date(interview.startTime).getTime() > now) {
      return false;
    } else {
      return true;
    }
  }
  changePast(checked) {
    this.onlyPast = checked;
    if (this.onlyFuture) {
      this.onlyFuture = false;
    }
    this.loadInterview();
  }
  changeFuture(checked) {
    this.onlyFuture = checked;
    if (this.onlyPast) {
      this.onlyPast = false;
    }
    this.loadInterview();
  }
  filterInterviewByTime(list, isPast) {
    const now = new Date().getTime();
    return list.filter(item => isPast ? new Date(item.startTime).getTime() < now : new Date(item.startTime).getTime() > now);
  }
  removeInterview(id) {
    var _this5 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A)(function* () {
      const currentInterview = _this5.interviewList.find(item => item.id === id);
      const dialog = _this5.dialogService.open(_gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_18__/* .DeleteInterviewComponent */ .C, {
        context: {
          interview: currentInterview
        }
      });
      const data = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_16__/* .firstValueFrom */ ._)(dialog.onClose);
      if (data) {
        _this5.toastrService.success('TOASTR.MESSAGE.CANDIDATE_INTERVIEW_DELETED', {
          name: data.title
        });
        _this5.loadInterview();
      }
    })();
  }
  _applyTranslationOnSmartTable() {
    this.translateService.onLangChange.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .M)(() => this._loadSmartTableSettings()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__/* .untilDestroyed */ .s)(this)).subscribe();
  }
  ngOnDestroy() {}
  selectInterview(interview) {
    this.disabled = !interview.isSelected;
    this.selectedInterview = interview.data;
  }
  static {
    this.ɵfac = function EditCandidateInterviewComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || EditCandidateInterviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_nebular_theme__WEBPACK_IMPORTED_MODULE_19__/* .NbDialogService */ .S0W), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_20__/* .CandidatesService */ .S), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_21__/* .EmployeesService */ .r), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_22__/* .CandidateFeedbacksService */ .R), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_23__/* .CandidateInterviewService */ .C), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__/* .TranslateService */ .c$), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_25__/* .CandidateStore */ .R), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_26__/* .Store */ .il), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_27__/* .ToastrService */ .t));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
      type: EditCandidateInterviewComponent,
      selectors: [["ga-edit-candidate-interview"]],
      standalone: false,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
      decls: 12,
      vars: 7,
      consts: [["visible", ""], ["actions", ""], [1, "pb-0"], [1, "d-flex", "flex-column"], [1, "d-flex", "flex-column", "align-items-end"], [3, "buttonTemplate", "buttonTemplateVisible", "componentName", "isDisable"], ["nbSpinnerSize", "giant", "nbSpinnerStatus", "primary", 1, "custom-card-body", 3, "nbSpinner"], ["class", "checkboxes mb-3", 4, "ngIf"], [4, "ngIf"], [1, "checkboxes", "mb-3"], ["status", "basic", 1, "mr-3", "ml-3", 3, "checkedChange", "checked"], ["status", "basic", 3, "checkedChange", "checked"], ["class", "table-scroll-container", 4, "ngIf"], [3, "totalItems", "settings", "source", "onSelectedItem", 4, "ngIf"], [1, "table-scroll-container"], [2, "cursor", "pointer", 3, "userRowSelect", "settings", "source"], [3, "onSelectedItem", "totalItems", "settings", "source"], ["nbButton", "", "status", "success", 1, "action", 3, "click"], ["icon", "plus-outline"], [1, "btn-group", "actions"], ["nbButton", "", "status", "basic", "size", "small", 1, "action", "secondary", 3, "click"], ["icon", "message-square-outline", 1, "mr-1"], ["nbButton", "", "status", "basic", "size", "small", 1, "action", "primary", 3, "click"], ["icon", "edit-outline", 1, "mr-1"], ["nbButton", "", "status", "basic", "size", "small", 1, "action", 3, "click", "nbTooltip"], ["status", "danger", "icon", "trash-2-outline"]],
      template: function EditCandidateInterviewComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-card")(1, "nb-card-header", 2)(2, "div", 3)(3, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(4, "ngx-gauzy-button-action", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(5, "nb-card-body", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(6, EditCandidateInterviewComponent_div_6_Template, 7, 8, "div", 7)(7, EditCandidateInterviewComponent_ng_container_7_Template, 3, 2, "ng-container", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(8, EditCandidateInterviewComponent_ng_template_8_Template, 4, 3, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplateRefExtractor"] */ .C5r)(10, EditCandidateInterviewComponent_ng_template_10_Template, 12, 9, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplateRefExtractor"] */ .C5r);
        }
        if (rf & 2) {
          const visible_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(9);
          const actions_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("buttonTemplate", actions_r8)("buttonTemplateVisible", visible_r7)("componentName", ctx.viewComponentName)("isDisable", ctx.disabled);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("nbSpinner", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", (ctx.allInterviews == null ? null : ctx.allInterviews.length) > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", (ctx.interviewList == null ? null : ctx.interviewList.length) > 0);
        }
      },
      dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_19__/* .NbButtonComponent */ .YP2, _nebular_theme__WEBPACK_IMPORTED_MODULE_19__/* .NbCardComponent */ .SrT, _nebular_theme__WEBPACK_IMPORTED_MODULE_19__/* .NbCardBodyComponent */ .KH5, _nebular_theme__WEBPACK_IMPORTED_MODULE_19__/* .NbCardHeaderComponent */ .zJv, _nebular_theme__WEBPACK_IMPORTED_MODULE_19__/* .NbCheckboxComponent */ .DMy, _nebular_theme__WEBPACK_IMPORTED_MODULE_19__/* .NbIconComponent */ .tHu, _nebular_theme__WEBPACK_IMPORTED_MODULE_19__/* .NbSpinnerDirective */ .zwc, _nebular_theme__WEBPACK_IMPORTED_MODULE_19__/* .NbTooltipDirective */ .BmQ, _angular_common__WEBPACK_IMPORTED_MODULE_28__/* .NgIf */ .bT, _packages_ui_core_shared_src_lib_card_grid_card_grid_component__WEBPACK_IMPORTED_MODULE_29__/* .CardGridComponent */ .c, angular2_smart_table__WEBPACK_IMPORTED_MODULE_2__/* .Angular2SmartTableComponent */ .T9, _packages_ui_core_shared_src_lib_gauzy_button_action_gauzy_button_action_component__WEBPACK_IMPORTED_MODULE_30__/* .GauzyButtonActionComponent */ .A, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__/* .TranslatePipe */ .D9],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.action[_ngcontent-%COMP%] {\n  box-shadow: var(--gauzy-shadow);\n  border: none;\n}\n.action[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}\n.action.info[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: var(--color-info-default);\n  color: white;\n  border-color: var(--color-info-default);\n}\n.action.info-text-1[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  color: var(--color-info-default);\n}\n.action.secondary[_ngcontent-%COMP%] {\n  color: #7e7e8f;\n}\n.action.success[_ngcontent-%COMP%] {\n  color: var(--color-success-default);\n}\n.action.warning[_ngcontent-%COMP%] {\n  color: rgb(245, 109, 88);\n}\n.action.orange[_ngcontent-%COMP%] {\n  color: rgb(255, 171, 45);\n}\n.action.primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n}\n.action.primary.soft[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: rgba(110, 73, 232, 0.1);\n}\n.action.select-nb[_ngcontent-%COMP%]     {\n  box-shadow: none;\n}\n.action.select-nb[_ngcontent-%COMP%]     .select-button {\n  box-shadow: var(--gauzy-shadow);\n  background: rgb(245, 245, 245);\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n.actions[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-2);\n  border-radius: var(--button-rectangle-border-radius);\n  padding: 2px 4px !important;\n}\n\n.gauzy-button-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n.card-custom-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n[_nghost-%COMP%]     input {\n  border-radius: var(--border-radius);\n  box-shadow: var(--gauzy-shadow) inset;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.right-block[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.checkboxes[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n}\n\n[_nghost-%COMP%]   .card-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n[_nghost-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 300px;\n  margin: 20px;\n}\n[_nghost-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  padding: 0.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n[_nghost-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-header-badge[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n}\n[_nghost-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%] {\n  text-align: center;\n}\n[_nghost-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .interview-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 0.5rem;\n}\n[_nghost-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .interview-card[_ngcontent-%COMP%]   .name-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 10px;\n}\n[_nghost-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .interview-card[_ngcontent-%COMP%]   .name-container[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  color: #3366ff;\n}\n[_nghost-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .interview-card[_ngcontent-%COMP%]   .name-container[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%] {\n  width: 70px;\n  height: 50px;\n  display: flex;\n  justify-content: center;\n  margin-right: 10px;\n}\n[dir=ltr]   [_nghost-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .interview-card[_ngcontent-%COMP%]   .name-container[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n[dir=rtl]   [_nghost-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .interview-card[_ngcontent-%COMP%]   .name-container[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n[_nghost-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .interview-card[_ngcontent-%COMP%]   .name-container[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100%;\n  max-width: 70px;\n}\n[_nghost-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .interview-card[_ngcontent-%COMP%]   .team-members[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\n[_nghost-%COMP%]   .card-container[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: auto;\n  flex-wrap: wrap;\n}\n\n.header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.header[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n}\n\n[_nghost-%COMP%]   .badge[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 5px;\n}\n[dir=ltr]   [_nghost-%COMP%]   .badge[_ngcontent-%COMP%] {\n  margin-left: 0.2rem;\n}\n[dir=rtl]   [_nghost-%COMP%]   .badge[_ngcontent-%COMP%] {\n  margin-right: 0.2rem;\n}\n\n[_nghost-%COMP%]   .client-info[_ngcontent-%COMP%] {\n  padding: 0px 12px;\n  display: flex;\n  flex-direction: column;\n}\n[_nghost-%COMP%]   .client-info[_ngcontent-%COMP%]   .info-line[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  font-size: 0.7em;\n  color: darkgray;\n}\n[_nghost-%COMP%]   .client-info[_ngcontent-%COMP%]   .info-line[_ngcontent-%COMP%]   .info-value[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  text-align: end;\n}\n[_nghost-%COMP%]   .client-info[_ngcontent-%COMP%]   .info-line[_ngcontent-%COMP%]   .info-value[_ngcontent-%COMP%]   .info-list-item[_ngcontent-%COMP%]:not(:last-child)::after {\n  content: \",\";\n}\n[dir=ltr]   [_nghost-%COMP%]   .client-info[_ngcontent-%COMP%]   .info-line[_ngcontent-%COMP%]   .info-value[_ngcontent-%COMP%]   .info-list-item[_ngcontent-%COMP%]:not(:last-child)::after {\n  margin-right: 5px;\n}\n[dir=rtl]   [_nghost-%COMP%]   .client-info[_ngcontent-%COMP%]   .info-line[_ngcontent-%COMP%]   .info-value[_ngcontent-%COMP%]   .info-list-item[_ngcontent-%COMP%]:not(:last-child)::after {\n  margin-left: 5px;\n}\n[_nghost-%COMP%]   .client-info[_ngcontent-%COMP%]   .info-line[_ngcontent-%COMP%]   .criterions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  text-align: end;\n}\n\n.btn[_ngcontent-%COMP%] {\n  margin: 0.2rem;\n}\n\n.badge-warning[_ngcontent-%COMP%] {\n  background-color: #fa0;\n}\n\n.badge-primary[_ngcontent-%COMP%] {\n  background-color: #0095ff;\n}\n\n[_nghost-%COMP%] {\n  overflow-y: auto;\n  max-height: calc(100vh - 28rem);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%], \n[_nghost-%COMP%]   .custom-card-body[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n}\n[_nghost-%COMP%]     input, \n[_nghost-%COMP%]     nb-select.appearance-outline.status-basic .select-button, \n[_nghost-%COMP%]     .ng-select .ng-select-container {\n  background-color: var(--gauzy-card-1) !important;\n  border: none;\n  height: 2rem !important;\n}\n[_nghost-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder, \n[_nghost-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {\n  top: unset !important;\n}\n[_nghost-%COMP%]     label, \n[_nghost-%COMP%]     .label {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  color: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]     textarea {\n  background-color: var(--gauzy-card-1) !important;\n  border: none;\n}\n[_nghost-%COMP%]     .ng-select .ng-select-container input, \n[_nghost-%COMP%]     nb-tag-list input {\n  background-color: unset !important;\n}"]
    });
  }
};
EditCandidateInterviewComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_31__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__/* .UntilDestroy */ .d)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_31__/* .__metadata */ .Sn)("design:paramtypes", [_nebular_theme__WEBPACK_IMPORTED_MODULE_19__/* .NbDialogService */ .S0W, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_20__/* .CandidatesService */ .S, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_21__/* .EmployeesService */ .r, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_22__/* .CandidateFeedbacksService */ .R, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_23__/* .CandidateInterviewService */ .C, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__/* .TranslateService */ .c$, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_25__/* .CandidateStore */ .R, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_26__/* .Store */ .il, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_27__/* .ToastrService */ .t])], EditCandidateInterviewComponent);


/***/ }),

/***/ 79748:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   z: () => (/* binding */ EditCandidateDocumentsComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(73014);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(64411);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10936);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(19223);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(73246);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(23423);
/* harmony import */ var angular2_smart_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52345);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(81236);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(46076);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(26024);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(70163);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(15480);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(84536);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(71924);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47108);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(47301);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(79289);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(56383);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(14572);
/* harmony import */ var _packages_ui_core_shared_src_lib_components_layout_selector_layout_selector_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(51102);
/* harmony import */ var _packages_ui_core_shared_src_lib_candidate_candidate_cv_candidate_cv_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(98723);
/* harmony import */ var _packages_ui_core_shared_src_lib_card_grid_card_grid_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(49517);
/* harmony import */ var _packages_ui_core_shared_src_lib_pipes_datetime_format_pipe__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(23830);

var EditCandidateDocumentsComponent_1;




















const _c0 = ["candidateCv"];
function EditCandidateDocumentsComponent_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function EditCandidateDocumentsComponent_button_2_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.showCard());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "nb-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI("", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(3, 1, "BUTTONS.ADD"), " ");
  }
}
function EditCandidateDocumentsComponent_ga_layout_selector_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(0, "ga-layout-selector", 11);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("componentName", ctx_r1.viewComponentName);
  }
}
function EditCandidateDocumentsComponent_div_4_form_2_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div")(1, "div", 24)(2, "div", 25)(3, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(6, "input", 27, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
  }
  if (rf & 2) {
    const i_r4 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("formGroupName", i_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(5, 3, "FORM.LABELS.DOCUMENT_NAME"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpropertyInterpolate"] */ .FS9("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(8, 5, "FORM.PLACEHOLDERS.DOCUMENT_NAME"));
  }
}
function EditCandidateDocumentsComponent_div_4_form_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "form", 21)(1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(2, EditCandidateDocumentsComponent_div_4_form_2_div_2_Template, 9, 7, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("formGroup", ctx_r1.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx_r1.documents == null ? null : ctx_r1.documents.controls);
  }
}
function EditCandidateDocumentsComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 12)(1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(2, EditCandidateDocumentsComponent_div_4_form_2_Template, 3, 2, "form", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(3, "div", 15)(4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(7, "ga-candidate-cv", 17, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(9, "span", 18)(10, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function EditCandidateDocumentsComponent_div_4_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.submitForm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(13, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function EditCandidateDocumentsComponent_div_4_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.cancel());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r1.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(6, 6, "FORM.LABELS.DOCUMENT_URL"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("documentUrl", ctx_r1.documentUrl)("isDocument", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(12, 8, "BUTTONS.SAVE"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(15, 10, "BUTTONS.CANCEL"), " ");
  }
}
function EditCandidateDocumentsComponent_nb_card_body_5_nb_card_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-card", 30)(1, "nb-card-body", 31)(2, "div", 32)(3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(4, "nb-icon", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(5, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(7, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(9, "dateTimeFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(10, "nb-actions", 36)(11, "nb-action", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function EditCandidateDocumentsComponent_nb_card_body_5_nb_card_1_Template_nb_action_click_11_listener() {
      const document_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r5).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.editDocument(document_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(12, "nb-action", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function EditCandidateDocumentsComponent_nb_card_body_5_nb_card_1_Template_nb_action_click_12_listener() {
      const document_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r5).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.removeDocument(document_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()()();
  }
  if (rf & 2) {
    const document_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("href", document_r6.documentUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵsanitizeUrl"] */ .B4B);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", document_r6.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(9, 3, document_r6.updatedAt), " ");
  }
}
function EditCandidateDocumentsComponent_nb_card_body_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-card-body", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, EditCandidateDocumentsComponent_nb_card_body_5_nb_card_1_Template, 13, 5, "nb-card", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx_r1.documentList);
  }
}
function EditCandidateDocumentsComponent_ga_card_grid_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(0, "ga-card-grid", 39);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    const actionButtons_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("totalItems", ctx_r1.pagination == null ? null : ctx_r1.pagination.totalItems)("settings", ctx_r1.settingsSmartTable)("source", ctx_r1.documentList)("buttonTemplate", actionButtons_r7);
  }
}
function EditCandidateDocumentsComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function EditCandidateDocumentsComponent_ng_template_8_Template_button_click_0_listener() {
      const selectedItem_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r8).selectedItem;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.editDocument(selectedItem_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "nb-icon", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(4, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function EditCandidateDocumentsComponent_ng_template_8_Template_button_click_4_listener() {
      const selectedItem_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r8).selectedItem;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.removeDocument(selectedItem_r9.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(5, "nb-icon", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const buttonSize_r10 = ctx.buttonSize;
    const selectedItem_r9 = ctx.selectedItem;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("disabled", !selectedItem_r9 && ctx_r1.disableButton)("size", buttonSize_r10 || "medium");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(3, 6, "BUTTONS.EDIT"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("disabled", !selectedItem_r9 && ctx_r1.disableButton)("size", buttonSize_r10 || "medium");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(7, 8, "BUTTONS.DELETE"), " ");
  }
}
let EditCandidateDocumentsComponent = /*#__PURE__*/(() => {
  let EditCandidateDocumentsComponent = class EditCandidateDocumentsComponent extends _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_1__/* .PaginationFilterBaseComponent */ .t {
    static {
      EditCandidateDocumentsComponent_1 = this;
    }
    static buildForm(fb) {
      const form = fb.group({
        documents: fb.array([])
      });
      const documentForm = form.controls.documents;
      documentForm.push(fb.group({
        name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .Validators */ .k0.required],
        documentUrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .Validators */ .k0.required]
      }));
      return form;
    }
    constructor(fb, candidateDocumentsService, toastrService, translateService, candidateStore, store) {
      super(translateService);
      this.fb = fb;
      this.candidateDocumentsService = candidateDocumentsService;
      this.toastrService = toastrService;
      this.translateService = translateService;
      this.candidateStore = candidateStore;
      this.store = store;
      this.documentId = null;
      this.documentList = [];
      this.smartTableSource = new angular2_smart_table__WEBPACK_IMPORTED_MODULE_3__/* .LocalDataSource */ .h0();
      this.componentLayoutStyleEnum = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_4__/* .ComponentLayoutStyleEnum */ .IE;
      this.dataLayoutStyle = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_4__/* .ComponentLayoutStyleEnum */ .IE.TABLE;
      this.documentUrl = '';
      /*
       * Candidate Document Mutation Form
       */
      this.form = EditCandidateDocumentsComponent_1.buildForm(this.fb);
      this.setView();
    }
    ngOnInit() {
      this.candidateStore.selectedCandidate$.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .untilDestroyed */ .s)(this)).subscribe(candidate => {
        if (candidate) {
          this.selectedOrganization = this.store.selectedOrganization;
          this.candidateId = candidate.id;
          this.loadDocuments();
          this.loadSmartTable();
        }
      });
    }
    ngAfterViewInit() {
      this._applyTranslationOnSmartTable();
    }
    setView() {
      this.viewComponentName = _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_6__/* .ComponentEnum */ .L.DOCUMENTS;
      this.store.componentLayout$(this.viewComponentName).pipe((0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_7__/* .distinctUntilChange */ .nI)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .tap */ .M)(componentLayout => this.dataLayoutStyle = componentLayout), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .untilDestroyed */ .s)(this)).subscribe();
    }
    loadSmartTable() {
      this.settingsSmartTable = {
        actions: false,
        columns: {
          name: {
            title: this.getTranslation('ORGANIZATIONS_PAGE.NAME'),
            type: 'string'
          },
          documentUrl: {
            title: this.getTranslation('ORGANIZATIONS_PAGE.DOCUMENT_URL'),
            type: 'custom',
            renderComponent: _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_9__/* .DocumentUrlTableComponent */ .I
          },
          updated: {
            title: this.getTranslation('ORGANIZATIONS_PAGE.UPDATED'),
            type: 'custom',
            renderComponent: _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_10__/* .DocumentDateTableComponent */ .h
          }
        }
      };
    }
    loadDocuments() {
      var _this = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A)(function* () {
        if (!_this.selectedOrganization) {
          return;
        }
        const {
          tenantId
        } = _this.store.user;
        const {
          id: organizationId
        } = _this.selectedOrganization;
        const {
          items = []
        } = yield _this.candidateDocumentsService.getAll({
          candidateId: _this.candidateId,
          organizationId,
          tenantId
        });
        _this.documentList = items;
        _this.smartTableSource.load(items);
        _this.setPagination({
          ..._this.getPagination(),
          totalItems: _this.smartTableSource.count()
        });
      })();
    }
    showCard() {
      this.showAddCard = !this.showAddCard;
      this.documents.reset();
    }
    editDocument(doc) {
      this.showAddCard = !this.showAddCard;
      this.form.controls.documents.patchValue([doc]);
      this.documentId = doc.id;
      this.documentUrl = doc.documentUrl;
    }
    cancel() {
      this.showAddCard = !this.showAddCard;
      this.documents.value.length = 0;
      this.documentUrl = '';
    }
    submitForm() {
      var _this2 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A)(function* () {
        const documentForm = _this2.documents;
        const formValue = {
          ...documentForm.value[0]
        };
        _this2.formCv = _this2.candidateCv.form;
        formValue.documentUrl = _this2.formCv.get('cvUrl').value;
        if (_this2.documentId !== null) {
          //editing existing document
          formValue.documentUrl = formValue.documentUrl === '' ? _this2.documentUrl : formValue.documentUrl;
          if (formValue.name !== '') {
            _this2.updateDocument(formValue);
          } else {
            _this2.toastrInvalid();
          }
        } else {
          //creating document
          if (formValue.documentUrl !== '' && formValue.name !== '') {
            _this2.createDocument(formValue);
          } else {
            _this2.toastrInvalid();
          }
        }
      })();
    }
    updateDocument(formValue) {
      var _this3 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A)(function* () {
        try {
          if (!_this3.selectedOrganization) {
            return;
          }
          const {
            tenantId
          } = _this3.store.user;
          const {
            id: organizationId
          } = _this3.selectedOrganization;
          yield _this3.candidateDocumentsService.update(_this3.documentId, {
            ...formValue,
            organizationId,
            tenantId
          });
          _this3.loadDocuments();
          _this3.toastrService.success('TOASTR.MESSAGE.CANDIDATE_DOCUMENT_UPDATED', {
            name: formValue.name
          });
          _this3.showAddCard = !_this3.showAddCard;
          _this3.form.controls.documents.reset();
        } catch (error) {
          _this3.toastrError(error);
        }
        _this3.documentId = null;
        _this3.documentUrl = '';
      })();
    }
    createDocument(formValue) {
      var _this4 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A)(function* () {
        try {
          if (!_this4.selectedOrganization) {
            return;
          }
          const {
            tenantId
          } = _this4.store.user;
          const {
            id: organizationId
          } = _this4.selectedOrganization;
          yield _this4.candidateDocumentsService.create({
            ...formValue,
            candidateId: _this4.candidateId,
            organizationId,
            tenantId
          });
          _this4.toastrService.success('TOASTR.MESSAGE.CANDIDATE_DOCUMENT_CREATED', {
            name: formValue.name
          });
          _this4.loadDocuments();
          _this4.showAddCard = !_this4.showAddCard;
          _this4.documents.reset();
        } catch (error) {
          _this4.toastrError(error);
        }
      })();
    }
    removeDocument(document) {
      var _this5 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A)(function* () {
        try {
          yield _this5.candidateDocumentsService.delete(document.id);
          _this5.toastrService.success('TOASTR.MESSAGE.CANDIDATE_DOCUMENT_DELETED', {
            name: document.name
          });
          _this5.loadDocuments();
        } catch (error) {
          _this5.toastrError(error);
        }
      })();
    }
    toastrError(error) {
      this.toastrService.danger('NOTES.CANDIDATE.EXPERIENCE.ERROR', 'TOASTR.TITLE.ERROR', {
        error: error.error ? error.error.message : error.message
      });
    }
    toastrInvalid() {
      this.toastrService.danger('NOTES.CANDIDATE.INVALID_FORM', 'TOASTR.TITLE.ERROR', 'TOASTR.MESSAGE.CANDIDATE_DOCUMENT_REQUIRED');
    }
    _applyTranslationOnSmartTable() {
      this.translateService.onLangChange.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .tap */ .M)(() => this.loadSmartTable()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .untilDestroyed */ .s)(this)).subscribe();
    }
    ngOnDestroy() {}
    /*
     * Getter for candidate documents form controls array
     */
    get documents() {
      return this.form.get('documents');
    }
    static {
      this.ɵfac = function EditCandidateDocumentsComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || EditCandidateDocumentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .UntypedFormBuilder */ .ze), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_12__/* .CandidateDocumentsService */ .z), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_13__/* .ToastrService */ .t), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__/* .TranslateService */ .c$), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_15__/* .CandidateStore */ .R), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_16__/* .Store */ .il));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: EditCandidateDocumentsComponent,
        selectors: [["ga-edit-candidate-documents"]],
        viewQuery: function EditCandidateDocumentsComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵviewQuery"] */ .GBs(_c0, 5);
          }
          if (rf & 2) {
            let _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵqueryRefresh"] */ .mGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵloadQuery"] */ .lsd()) && (ctx.candidateCv = _t.first);
          }
        },
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
        decls: 10,
        vars: 5,
        consts: [["actionButtons", ""], ["candidateCv", ""], ["addInput", ""], [1, "header", "pb-0"], ["nbButton", "", "status", "success", "class", "action mr-3", "size", "small", 3, "click", 4, "ngIf"], [3, "componentName", 4, "ngIf"], ["class", "row documents-card-container m-0", 4, "ngIf"], ["class", "pb-0", 4, "ngIf"], [3, "totalItems", "settings", "source", "buttonTemplate", 4, "ngIf"], ["nbButton", "", "status", "success", "size", "small", 1, "action", "mr-3", 3, "click"], ["icon", "plus-outline", 1, "mr-1"], [3, "componentName"], [1, "row", "documents-card-container", "m-0"], [1, "col-10", "documents-card", "custom-form"], ["class", "col-5", 3, "formGroup", 4, "ngIf"], [1, "col-7"], [1, "label"], [3, "documentUrl", "isDocument"], [1, "col-2", "d-flex", "flex-column"], ["nbButton", "", "status", "success", 1, "form-btn", "w-100", 3, "click"], ["nbButton", "", "outline", "", "status", "basic", 1, "form-btn", "w-100", 3, "click"], [1, "col-5", 3, "formGroup"], ["formArrayName", "documents"], [4, "ngFor", "ngForOf"], [1, "documents-add-card", 3, "formGroupName"], [1, "col-12", "add-card-wrapp"], ["for", "documentName", 1, "label"], ["id", "documentName", "nbInput", "", "formControlName", "name", "type", "text", "fullWidth", "", 1, "col-12", 3, "placeholder"], [1, "pb-0"], ["class", "document", 4, "ngFor", "ngForOf"], [1, "document"], [1, "documents-card"], [1, "documents-line"], ["icon", "file-text-outline", 1, "doc-icon"], [3, "href"], [1, "document-data"], ["e", "medium", 1, "float-right"], ["icon", "edit", 1, "d-inline", "pr-2", 3, "click"], ["icon", "close", 1, "d-inline", "pr-0", "pl-2", 3, "click"], [3, "totalItems", "settings", "source", "buttonTemplate"], ["nbButton", "", "status", "info", 1, "mr-2", 3, "click", "disabled", "size"], ["icon", "edit-outline", 1, "mr-1"], ["nbButton", "", "status", "danger", 1, "mr-2", 3, "click", "disabled", "size"], ["icon", "archive-outline", 1, "mr-1"]],
        template: function EditCandidateDocumentsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-card")(1, "nb-card-header", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(2, EditCandidateDocumentsComponent_button_2_Template, 4, 3, "button", 4)(3, EditCandidateDocumentsComponent_ga_layout_selector_3_Template, 1, 1, "ga-layout-selector", 5)(4, EditCandidateDocumentsComponent_div_4_Template, 16, 12, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(5, EditCandidateDocumentsComponent_nb_card_body_5_Template, 2, 1, "nb-card-body", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(6, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(7, EditCandidateDocumentsComponent_ga_card_grid_7_Template, 1, 4, "ga-card-grid", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(8, EditCandidateDocumentsComponent_ng_template_8_Template, 8, 10, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplateRefExtractor"] */ .C5r);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", !ctx.showAddCard);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", !ctx.showAddCard);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.showAddCard);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", (ctx.documentList == null ? null : ctx.documentList.length) && ctx.dataLayoutStyle === ctx.componentLayoutStyleEnum.TABLE);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", (ctx.documentList == null ? null : ctx.documentList.length) && ctx.dataLayoutStyle === ctx.componentLayoutStyleEnum.CARDS_GRID);
          }
        },
        dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_17__/* .NbActionComponent */ .kK0, _nebular_theme__WEBPACK_IMPORTED_MODULE_17__/* .NbActionsComponent */ .pb1, _nebular_theme__WEBPACK_IMPORTED_MODULE_17__/* .NbButtonComponent */ .YP2, _nebular_theme__WEBPACK_IMPORTED_MODULE_17__/* .NbCardComponent */ .SrT, _nebular_theme__WEBPACK_IMPORTED_MODULE_17__/* .NbCardBodyComponent */ .KH5, _nebular_theme__WEBPACK_IMPORTED_MODULE_17__/* .NbCardHeaderComponent */ .zJv, _nebular_theme__WEBPACK_IMPORTED_MODULE_17__/* .NbIconComponent */ .tHu, _nebular_theme__WEBPACK_IMPORTED_MODULE_17__/* .NbInputDirective */ .i6h, _angular_common__WEBPACK_IMPORTED_MODULE_18__/* .NgForOf */ .Sq, _angular_common__WEBPACK_IMPORTED_MODULE_18__/* .NgIf */ .bT, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* ["ɵNgNoValidate"] */ .qT, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .DefaultValueAccessor */ .me, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .NgControlStatus */ .BC, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .NgControlStatusGroup */ .cb, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .FormGroupDirective */ .j4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .FormControlName */ .JD, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .FormGroupName */ .$R, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .FormArrayName */ .v8, _packages_ui_core_shared_src_lib_components_layout_selector_layout_selector_component__WEBPACK_IMPORTED_MODULE_19__/* .LayoutSelectorComponent */ .d, _packages_ui_core_shared_src_lib_candidate_candidate_cv_candidate_cv_component__WEBPACK_IMPORTED_MODULE_20__/* .CandidateCvComponent */ .O, _packages_ui_core_shared_src_lib_card_grid_card_grid_component__WEBPACK_IMPORTED_MODULE_21__/* .CardGridComponent */ .c, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__/* .TranslatePipe */ .D9, _packages_ui_core_shared_src_lib_pipes_datetime_format_pipe__WEBPACK_IMPORTED_MODULE_22__/* .DateTimeFormatPipe */ .V],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.action[_ngcontent-%COMP%] {\n  box-shadow: var(--gauzy-shadow);\n  border: none;\n}\n.action[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}\n.action.info[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: var(--color-info-default);\n  color: white;\n  border-color: var(--color-info-default);\n}\n.action.info-text-1[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  color: var(--color-info-default);\n}\n.action.secondary[_ngcontent-%COMP%] {\n  color: #7e7e8f;\n}\n.action.success[_ngcontent-%COMP%] {\n  color: var(--color-success-default);\n}\n.action.warning[_ngcontent-%COMP%] {\n  color: rgb(245, 109, 88);\n}\n.action.orange[_ngcontent-%COMP%] {\n  color: rgb(255, 171, 45);\n}\n.action.primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n}\n.action.primary.soft[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: rgba(110, 73, 232, 0.1);\n}\n.action.select-nb[_ngcontent-%COMP%]     {\n  box-shadow: none;\n}\n.action.select-nb[_ngcontent-%COMP%]     .select-button {\n  box-shadow: var(--gauzy-shadow);\n  background: rgb(245, 245, 245);\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n.actions[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-2);\n  border-radius: var(--button-rectangle-border-radius);\n  padding: 2px 4px !important;\n}\n\n.gauzy-button-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n.card-custom-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n[_nghost-%COMP%]     input {\n  border-radius: var(--border-radius);\n  box-shadow: var(--gauzy-shadow) inset;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   i[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n}\n[dir=ltr]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n[dir=rtl]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--gauzy-text-color-1);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(245, 109, 88, 0.3);\n  border-width: 2px;\n  color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(245, 109, 88, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 16px;\n  letter-spacing: 0em;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(126, 126, 143, 0.3);\n  border-width: 2px;\n  color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(126, 126, 143, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(37, 184, 105, 0.3);\n  border-width: 2px;\n  color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(37, 184, 105, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[disabled][_ngcontent-%COMP%], \n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic.btn-disabled[_ngcontent-%COMP%] {\n  background-color: var(--button-outline-basic-disabled-background-color);\n  border-color: var(--button-outline-basic-disabled-border-color);\n  color: var(--button-outline-basic-disabled-text-color);\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].primary.appearance-filled.status-primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  border: unset;\n  background-color: var(--color-primary-transparent-default);\n  box-shadow: var(--gauzy-shadow) 0, 0, 0, 0.15;\n}\n[dir=ltr]   [_nghost-%COMP%]     input, \n[dir=ltr]   [_nghost-%COMP%]     textarea {\n  text-align: start;\n}\n[dir=rtl]   [_nghost-%COMP%]     input, \n[dir=rtl]   [_nghost-%COMP%]     textarea {\n  text-align: end;\n}\n[_nghost-%COMP%]     input, \n[_nghost-%COMP%]     nb-select.appearance-outline.status-basic .select-button, \n[_nghost-%COMP%]     .ng-select .ng-select-container {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n  height: 42px !important;\n}\n[_nghost-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder, \n[_nghost-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {\n  top: unset !important;\n}\n[_nghost-%COMP%]     label, \n[_nghost-%COMP%]     .label {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  color: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]     textarea {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n}\n[_nghost-%COMP%]     .ng-select .ng-select-container input, \n[_nghost-%COMP%]     nb-tag-list input {\n  background-color: unset !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n}\n\n.documents-form[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\ninput[_ngcontent-%COMP%] {\n  height: 36px;\n}\n\n.form-btn[_ngcontent-%COMP%] {\n  margin: 0.5rem 0;\n}\n\n.documents-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.documents-line[_ngcontent-%COMP%] {\n  margin: 0.2rem 0;\n}\n\n.documents-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n\n.documents-add-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: flex-start;\n}\n\n.add-card-wrapp[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0 0 20px 0;\n}\n\n.button[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  margin-top: 0.5rem;\n}\n\n.label[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n}\n\n.document-data[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: grey;\n}\n\n.doc-icon[_ngcontent-%COMP%] {\n  color: #3365ff !important;\n}\n\n.header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  border-color: 1px solid black;\n}\n\n.documents-card-container[_ngcontent-%COMP%] {\n  background-color: rgba(126, 126, 143, 0.05);\n  border-radius: var(--border-radius);\n  padding: 1rem;\n}\n\n.custom-form[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n  border-radius: var(--border-radius);\n  padding: 1rem;\n}\n\n[_nghost-%COMP%] {\n  overflow-y: auto;\n  max-height: calc(100vh - 27rem);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n}\n[_nghost-%COMP%]   nb-card.document[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n  margin-bottom: 8px;\n}\n[_nghost-%COMP%]     input, \n[_nghost-%COMP%]     nb-select.appearance-outline.status-basic .select-button, \n[_nghost-%COMP%]     .ng-select .ng-select-container {\n  background-color: var(--gauzy-card-1) !important;\n  border: none;\n  height: 42px !important;\n}\n[_nghost-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder, \n[_nghost-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {\n  top: unset !important;\n}\n[_nghost-%COMP%]     label, \n[_nghost-%COMP%]     .label {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  color: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]     textarea {\n  background-color: var(--gauzy-card-1) !important;\n  border: none;\n}\n[_nghost-%COMP%]     .ng-select .ng-select-container input, \n[_nghost-%COMP%]     nb-tag-list input {\n  background-color: unset !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n}"]
      });
    }
  };
  return EditCandidateDocumentsComponent;
})();
EditCandidateDocumentsComponent = EditCandidateDocumentsComponent_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_23__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .UntilDestroy */ .d)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_23__/* .__metadata */ .Sn)("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .UntypedFormBuilder */ .ze, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_12__/* .CandidateDocumentsService */ .z, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_13__/* .ToastrService */ .t, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__/* .TranslateService */ .c$, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_15__/* .CandidateStore */ .R, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_16__/* .Store */ .il])], EditCandidateDocumentsComponent);


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

/***/ 85871:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   f: () => (/* binding */ FeedbackStatusTableComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14572);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19223);



function FeedbackStatusTableComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div")(1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(3, 1, "CANDIDATES_PAGE.REJECTED"), " ");
  }
}
function FeedbackStatusTableComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div")(1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(3, 1, "CANDIDATES_PAGE.HIRED"), " ");
  }
}
let FeedbackStatusTableComponent = /*#__PURE__*/(() => {
  class FeedbackStatusTableComponent {
    static {
      this.ɵfac = function FeedbackStatusTableComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || FeedbackStatusTableComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: FeedbackStatusTableComponent,
        selectors: [["ga-feedback-status"]],
        inputs: {
          rowData: "rowData"
        },
        standalone: false,
        decls: 2,
        vars: 2,
        consts: [[4, "ngIf"], [1, "badge", "badge-danger"], [1, "badge", "badge-success"]],
        template: function FeedbackStatusTableComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(0, FeedbackStatusTableComponent_div_0_Template, 4, 3, "div", 0)(1, FeedbackStatusTableComponent_div_1_Template, 4, 3, "div", 0);
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", (ctx.rowData == null ? null : ctx.rowData.status) === "REJECTED");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", (ctx.rowData == null ? null : ctx.rowData.status) === "HIRED");
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .NgIf */ .bT, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__/* .TranslatePipe */ .D9],
        styles: [".badge-danger[_ngcontent-%COMP%] {\n\t\t\t\tbackground-color: #ff3d71;\n\t\t\t}\n\t\t\t.badge-success[_ngcontent-%COMP%] {\n\t\t\t\tbackground-color: #00d68f;\n\t\t\t}\n\t\t\t.badge[_ngcontent-%COMP%] {\n\t\t\t\twidth: fit-content;\n\t\t\t\tdisplay: flex;\n\t\t\t\tjustify-content: center;\n\t\t\t\talign-items: center;\n\t\t\t\tpadding: 5px 8px;\n\t\t\t\tfont-size: 12px;\n\t\t\t\tfont-weight: 600;\n\t\t\t\tline-height: 15px;\n\t\t\t\tletter-spacing: 0em;\n\t\t\t\ttext-align: left;\n\t\t\t}"]
      });
    }
  }
  return FeedbackStatusTableComponent;
})();

/***/ }),

/***/ 86170:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   x: () => (/* binding */ ManageCandidateInviteComponent)
/* harmony export */ });
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(99418);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26860);
/* harmony import */ var _packages_ui_core_shared_src_lib_invite_invites_invites_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37095);



let ManageCandidateInviteComponent = /*#__PURE__*/(() => {
  class ManageCandidateInviteComponent {
    constructor() {
      this.invitationTypeEnum = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__/* .InvitationTypeEnum */ .Tq;
    }
    static {
      this.ɵfac = function ManageCandidateInviteComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || ManageCandidateInviteComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineComponent"] */ .VBU({
        type: ManageCandidateInviteComponent,
        selectors: [["ga-manage-candidate-invite"]],
        standalone: false,
        decls: 1,
        vars: 1,
        consts: [[3, "invitationType"]],
        template: function ManageCandidateInviteComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(0, "ga-invites", 0);
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("invitationType", ctx.invitationTypeEnum.CANDIDATE);
          }
        },
        dependencies: [_packages_ui_core_shared_src_lib_invite_invites_invites_component__WEBPACK_IMPORTED_MODULE_2__/* .InvitesComponent */ .M],
        encapsulation: 2
      });
    }
  }
  return ManageCandidateInviteComponent;
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

/***/ 89269:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   s: () => (/* binding */ InterviewRatingChartComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73014);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(64411);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(56383);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23423);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(91081);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73246);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(78477);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(14572);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(19223);












function InterviewRatingChartComponent_ng_container_0_nb_option_group_3_nb_option_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-option", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const interview_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("value", interview_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", interview_r3.title, " ");
  }
}
function InterviewRatingChartComponent_ng_container_0_nb_option_group_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-option-group", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, InterviewRatingChartComponent_ng_container_0_nb_option_group_3_nb_option_1_Template, 2, 2, "nb-option", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const candidate_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("title", candidate_r4.user == null ? null : candidate_r4.user.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngForOf", candidate_r4.interview);
  }
}
function InterviewRatingChartComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(1, "nb-select", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("selectedChange", function InterviewRatingChartComponent_ng_container_0_Template_nb_select_selectedChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.onInterviewSelected($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(3, InterviewRatingChartComponent_ng_container_0_nb_option_group_3_Template, 2, 2, "nb-option-group", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(2, 2, "CANDIDATES_PAGE.STATISTIC.SELECT_INTERVIEW"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx_r1.candidates);
  }
}
function InterviewRatingChartComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "canvas", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("type", "bar")("data", ctx_r1.data)("options", ctx_r1.options);
  }
}
function InterviewRatingChartComponent_ng_container_2_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(2, 1, "CANDIDATES_PAGE.STATISTIC.SELECT_INTERVIEW"), " ");
  }
}
function InterviewRatingChartComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(2, "nb-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(3, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(6, InterviewRatingChartComponent_ng_container_2_span_6_Template, 3, 3, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(5, 2, "CANDIDATES_PAGE.STATISTIC.NO_DATA"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r1.candidates.length > 0);
  }
}
let InterviewRatingChartComponent = class InterviewRatingChartComponent {
  constructor(themeService, candidateFeedbacksService) {
    this.themeService = themeService;
    this.candidateFeedbacksService = candidateFeedbacksService;
    this.labels = [];
    this.rating = [];
    this.interviews = [];
    this.backgroundColor = [];
    this.candidates = [];
    this.employees = [];
  }
  ngOnInit() {
    this.initializeChartBackgroundColor();
    this.themeService.getJsTheme().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__/* .tap */ .M)(() => this.initializeChartOptions()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__/* .untilDestroyed */ .s)(this)).subscribe();
  }
  /**
   *
   * @param interview
   */
  onInterviewSelected(interview) {
    var _this = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(function* () {
      _this.rating = [];
      _this.labels = [];
      const {
        items = []
      } = yield _this.candidateFeedbacksService.getAll(['interviewer', 'interviewer.employee'], {
        candidateId: interview.candidateId
      });
      if (items) {
        const feedbacks = items.filter(item => item.interviewId && item.interviewId === interview.id);
        for (const item of feedbacks) {
          _this.rating.push(parseFloat((+item.rating).toFixed(2)));
          _this.employees.forEach(employee => {
            if (item.interviewer?.employeeId) {
              if (item.interviewer?.employeeId === employee.id) {
                _this.labels.push(employee.user.name);
              }
            }
          });
        }
        _this.initializeChartOptions();
      }
    })();
  }
  /**
   * Initializes chart data and options.
   */
  initializeChartOptions() {
    this.data = {
      labels: this.labels,
      datasets: [{
        maxBarThickness: 150,
        label: 'Rating per interview',
        backgroundColor: this.backgroundColor,
        data: this.rating
      }]
    };
    this.options = {
      responsive: true,
      maintainAspectRatio: false,
      elements: {
        rectangle: {
          borderWidth: 2
        }
      },
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    };
  }
  /**
   * Initializes the chart data based on candidates' ratings and names.
   */
  initializeChartBackgroundColor() {
    const colors = ['rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)'];
    this.candidates.forEach((candidate, index) => {
      // Determine background color based on index
      const backgroundColor = colors[index % 2];
      this.backgroundColor.push(backgroundColor);
    });
  }
  ngOnDestroy() {}
  static {
    this.ɵfac = function InterviewRatingChartComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || InterviewRatingChartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbThemeService */ .NS1), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_5__/* .CandidateFeedbacksService */ .R));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
      type: InterviewRatingChartComponent,
      selectors: [["ga-interview-rating-chart"]],
      inputs: {
        candidates: "candidates",
        employees: "employees"
      },
      standalone: false,
      decls: 3,
      vars: 3,
      consts: [[4, "ngIf"], [1, "select", 3, "selectedChange", "placeholder"], [3, "title", 4, "ngFor", "ngForOf"], [3, "title"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["baseChart", "", 2, "height", "400px", "width", "100%", 3, "type", "data", "options"], [1, "no-data"], ["icon", "info-outline", 1, "no-data-icon"], [1, "no-data-text"], ["class", "no-data-text", 4, "ngIf"]],
      template: function InterviewRatingChartComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(0, InterviewRatingChartComponent_ng_container_0_Template, 4, 4, "ng-container", 0)(1, InterviewRatingChartComponent_ng_container_1_Template, 2, 3, "ng-container", 0)(2, InterviewRatingChartComponent_ng_container_2_Template, 7, 4, "ng-container", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.candidates.length > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", (ctx.rating == null ? null : ctx.rating.length) > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", (ctx.rating == null ? null : ctx.rating.length) === 0);
        }
      },
      dependencies: [ng2_charts__WEBPACK_IMPORTED_MODULE_6__/* .BaseChartDirective */ .j9, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbIconComponent */ .tHu, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbSelectComponent */ .S81, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbOptionComponent */ .ZJ2, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbOptionGroupComponent */ .UwO, _angular_common__WEBPACK_IMPORTED_MODULE_7__/* .NgForOf */ .Sq, _angular_common__WEBPACK_IMPORTED_MODULE_7__/* .NgIf */ .bT, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__/* .TranslatePipe */ .D9],
      styles: [".select[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0 0 1.25rem 0;\n}\n\n.no-data[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  border: 1px #e5e5e5 solid;\n  height: 150px;\n}\n.no-data-text[_ngcontent-%COMP%] {\n  color: #909cb4;\n}\n.no-data-icon[_ngcontent-%COMP%] {\n  font-size: 1.5rem !important;\n  color: #909cb4;\n}"]
    });
  }
};
InterviewRatingChartComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__/* .UntilDestroy */ .d)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_9__/* .__metadata */ .Sn)("design:paramtypes", [_nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbThemeService */ .NS1, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_5__/* .CandidateFeedbacksService */ .R])], InterviewRatingChartComponent);


/***/ }),

/***/ 89989:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   b: () => (/* binding */ EditCandidateExperienceFormComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(73014);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(10936);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(12614);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24237);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(81236);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(46076);
/* harmony import */ var angular2_smart_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(52345);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47108);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(15480);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(84536);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(71924);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(97855);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(19223);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(56383);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(14572);
/* harmony import */ var _packages_ui_core_shared_src_lib_card_grid_card_grid_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(49517);
/* harmony import */ var _packages_ui_core_shared_src_lib_gauzy_button_action_gauzy_button_action_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(45293);



















const _c0 = ["experienceTable"];
function EditCandidateExperienceFormComponent_div_4_form_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div")(1, "div", 19)(2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(3, "input", 21, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(6, "input", 22, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(9, "textarea", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(11, "\t\t\t\t\t\t\t");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
  }
  if (rf & 2) {
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("formGroupName", i_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpropertyInterpolate"] */ .FS9("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(5, 4, "FORM.PLACEHOLDERS.ADD_EXPERIENCE.OCCUPATION"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpropertyInterpolate"] */ .FS9("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(8, 6, "FORM.PLACEHOLDERS.ADD_EXPERIENCE.DURATION"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpropertyInterpolate"] */ .FS9("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(10, 8, "FORM.PLACEHOLDERS.ADD_EXPERIENCE.DESCRIPTION"));
  }
}
function EditCandidateExperienceFormComponent_div_4_form_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "form", 16)(1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(2, EditCandidateExperienceFormComponent_div_4_form_1_div_2_Template, 12, 10, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("formGroup", ctx_r2.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx_r2.experiences == null ? null : ctx_r2.experiences.controls);
  }
}
function EditCandidateExperienceFormComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, EditCandidateExperienceFormComponent_div_4_form_1_Template, 3, 2, "form", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(2, "div", 12)(3, "span", 13)(4, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function EditCandidateExperienceFormComponent_div_4_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r2.submitForm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(7, "span", 13)(8, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function EditCandidateExperienceFormComponent_div_4_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r2.cancel());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r2.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(6, 3, "BUTTONS.SAVE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(10, 5, "BUTTONS.CANCEL"), " ");
  }
}
function EditCandidateExperienceFormComponent_nb_card_body_5_angular2_smart_table_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "angular2-smart-table", 27, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("userRowSelect", function EditCandidateExperienceFormComponent_nb_card_body_5_angular2_smart_table_2_Template_angular2_smart_table_userRowSelect_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r2.selectExperience($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("settings", ctx_r2.settingsSmartTable)("source", ctx_r2.sourceSmartTable);
  }
}
function EditCandidateExperienceFormComponent_nb_card_body_5_ga_card_grid_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "ga-card-grid", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("onSelectedItem", function EditCandidateExperienceFormComponent_nb_card_body_5_ga_card_grid_3_Template_ga_card_grid_onSelectedItem_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r2.selectExperience($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("totalItems", ctx_r2.pagination == null ? null : ctx_r2.pagination.totalItems)("settings", ctx_r2.settingsSmartTable)("source", ctx_r2.experienceList);
  }
}
function EditCandidateExperienceFormComponent_nb_card_body_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-card-body")(1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(2, EditCandidateExperienceFormComponent_nb_card_body_5_angular2_smart_table_2_Template, 2, 2, "angular2-smart-table", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(3, EditCandidateExperienceFormComponent_nb_card_body_5_ga_card_grid_3_Template, 1, 3, "ga-card-grid", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r2.dataLayoutStyle === "TABLE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r2.dataLayoutStyle === "CARDS_GRID");
  }
}
function EditCandidateExperienceFormComponent_ng_template_6_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 30)(1, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function EditCandidateExperienceFormComponent_ng_template_6_div_0_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r6);
      const selectedItem_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG().selectedItem;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r2.editExperience(selectedItem_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(2, "nb-icon", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(5, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function EditCandidateExperienceFormComponent_ng_template_6_div_0_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r6);
      const selectedItem_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG().selectedItem;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r2.removeExperience(selectedItem_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(7, "nb-icon", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const selectedItem_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG().selectedItem;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("disabled", !selectedItem_r7 && ctx_r2.disableButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(4, 4, "BUTTONS.EDIT"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("disabled", !selectedItem_r7 && ctx_r2.disableButton)("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(6, 6, "BUTTONS.DELETE"));
  }
}
function EditCandidateExperienceFormComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(0, EditCandidateExperienceFormComponent_ng_template_6_div_0_Template, 8, 8, "div", 29);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r2.dataLayoutStyle === "TABLE" && !ctx_r2.showAddCard && (ctx_r2.experienceList == null ? null : ctx_r2.experienceList.length));
  }
}
function EditCandidateExperienceFormComponent_ng_template_8_button_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function EditCandidateExperienceFormComponent_ng_template_8_button_0_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r8);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r2.add());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "nb-icon", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(3, 1, "BUTTONS.ADD"), " ");
  }
}
function EditCandidateExperienceFormComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(0, EditCandidateExperienceFormComponent_ng_template_8_button_0_Template, 4, 3, "button", 35);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", !ctx_r2.showAddCard);
  }
}
let EditCandidateExperienceFormComponent = /*#__PURE__*/(() => {
  class EditCandidateExperienceFormComponent extends _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_1__/* .PaginationFilterBaseComponent */ .t {
    constructor(toastrService, translateService, candidateStore, fb, store, candidateExperienceService) {
      super(translateService);
      this.toastrService = toastrService;
      this.translateService = translateService;
      this.candidateStore = candidateStore;
      this.fb = fb;
      this.store = store;
      this.candidateExperienceService = candidateExperienceService;
      this.disableButton = true;
      this.experienceList = [];
      this._ngDestroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__/* .Subject */ .B();
      this.dataLayoutStyle = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__/* .ComponentLayoutStyleEnum */ .IE.TABLE;
      this.sourceSmartTable = new angular2_smart_table__WEBPACK_IMPORTED_MODULE_4__/* .LocalDataSource */ .h0();
      this.setView();
    }
    ngOnInit() {
      this.candidateStore.selectedCandidate$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .takeUntil */ .Q)(this._ngDestroy$)).subscribe(candidate => {
        if (candidate) {
          this.selectedOrganization = this.store.selectedOrganization;
          this.candidateId = candidate.id;
          this._initializeForm();
          this.loadExperience();
          this.loadSmartTable();
          this._applyTranslationOnSmartTable();
        }
      });
    }
    _initializeForm() {
      var _this = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(function* () {
        _this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__/* .UntypedFormGroup */ .J3({
          experiences: _this.fb.array([])
        });
        const experienceForm = _this.experiences;
        experienceForm.push(_this.fb.group({
          occupation: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__/* .Validators */ .k0.required],
          // organization: ['', Validators.required],
          duration: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__/* .Validators */ .k0.required],
          description: ['']
        }));
      })();
    }
    loadExperience() {
      var _this2 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(function* () {
        _this2.loading = true;
        const {
          id: organizationId,
          tenantId
        } = _this2.selectedOrganization;
        const {
          items = []
        } = yield _this2.candidateExperienceService.getAll({
          candidateId: _this2.candidateId,
          organizationId,
          tenantId
        }, ['organization']);
        _this2.experienceList = items;
        _this2.sourceSmartTable.load(items);
        _this2.setPagination({
          ..._this2.getPagination(),
          totalItems: _this2.sourceSmartTable.count()
        });
        _this2.loading = false;
      })();
    }
    editExperience(experience) {
      const selectedItem = experience ? experience : this.selectedExperience;
      this.showAddCard = true;
      this.experiences.patchValue([selectedItem]);
      this.selectedExperience = selectedItem;
    }
    showCard() {
      this.showAddCard = !this.showAddCard;
      this.experiences.reset();
    }
    cancel() {
      this.showAddCard = false;
      this.experiences.value.length = 0;
      this.selectedExperience = null;
      this.form.reset();
    }
    submitForm() {
      var _this3 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(function* () {
        const {
          id: organizationId,
          tenantId
        } = _this3.selectedOrganization;
        const experienceForm = _this3.experiences;
        if (experienceForm.invalid) {
          _this3.toastrService.danger('TOASTR.MESSAGE.CANDIDATE_EXPERIENCE_REQUIRED', 'NOTES.CANDIDATE.EXPERIENCE.INVALID_FORM');
          return;
        }
        const formValue = {
          ...experienceForm.value[0]
        };
        if (_this3.selectedExperience) {
          //editing existing experience
          try {
            yield _this3.candidateExperienceService.update(_this3.selectedExperience.id, {
              ...formValue,
              organizationId,
              tenantId
            });
            _this3.loadExperience();
            _this3.toastrService.success('TOASTR.MESSAGE.CANDIDATE_EXPERIENCE_UPDATED', {
              name: formValue.occupation
            });
          } catch (error) {
            _this3.toastrError(error);
          }
        } else {
          //creating experience
          try {
            yield _this3.candidateExperienceService.create({
              ...formValue,
              candidateId: _this3.candidateId,
              organizationId,
              tenantId
            });
            _this3.toastrService.success('TOASTR.MESSAGE.CANDIDATE_EXPERIENCE_CREATED', {
              name: formValue.occupation
            });
            _this3.loadExperience();
          } catch (error) {
            _this3.toastrError(error);
          }
        }
        _this3.cancel();
      })();
    }
    removeExperience(experience) {
      var _this4 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(function* () {
        const selectedItem = experience ? experience : _this4.selectedExperience;
        try {
          yield _this4.candidateExperienceService.delete(selectedItem.id);
          _this4.selectedExperience = null;
          _this4.disableButton = true;
          _this4.toastrService.success('TOASTR.MESSAGE.CANDIDATE_EXPERIENCE_DELETED', {
            name: selectedItem.occupation
          });
          _this4.loadExperience();
        } catch (error) {
          _this4.toastrError(error);
        }
      })();
    }
    selectExperience({
      isSelected,
      data
    }) {
      const selectedExperience = isSelected ? data : null;
      if (this.experienceTable) {
        this.experienceTable.grid.dataSet.willSelect = false;
      }
      this.disableButton = !isSelected;
      this.selectedExperience = selectedExperience;
    }
    add() {
      this.showAddCard = true;
      this.selectedExperience = null;
      this.form.reset();
    }
    loadSmartTable() {
      var _this5 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(function* () {
        _this5.settingsSmartTable = {
          actions: false,
          columns: {
            occupation: {
              title: _this5.getTranslation('CANDIDATES_PAGE.EDIT_CANDIDATE.OCCUPATION'),
              type: 'string'
            },
            organization: {
              title: _this5.getTranslation('CANDIDATES_PAGE.EDIT_CANDIDATE.ORGANIZATION'),
              type: 'string',
              valuePrepareFunction: (value, item) => {
                if (item.hasOwnProperty('organization')) {
                  return item.organization ? item.organization.name : null;
                }
                return value;
              }
            },
            duration: {
              title: _this5.getTranslation('CANDIDATES_PAGE.EDIT_CANDIDATE.DURATION'),
              type: 'string',
              isFilterable: false
            },
            description: {
              title: _this5.getTranslation('CANDIDATES_PAGE.EDIT_CANDIDATE.DESCRIPTION'),
              type: 'string',
              isFilterable: false
            }
          }
        };
      })();
    }
    toastrError(error) {
      this.toastrService.danger(this.getTranslation('NOTES.CANDIDATE.EXPERIENCE.ERROR', {
        error: error.error ? error.error.message : error.message
      }), this.getTranslation('TOASTR.TITLE.ERROR'));
    }
    setView() {
      this.viewComponentName = _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_8__/* .ComponentEnum */ .L.EXPERIENCE;
      this.store.componentLayout$(this.viewComponentName).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .takeUntil */ .Q)(this._ngDestroy$)).subscribe(componentLayout => {
        this.dataLayoutStyle = componentLayout;
        this.selectedExperience = this.dataLayoutStyle === 'CARDS_GRID' ? null : this.selectedExperience;
      });
    }
    _applyTranslationOnSmartTable() {
      this.translateService.onLangChange.subscribe(() => {
        this.loadSmartTable();
      });
    }
    ngOnDestroy() {
      this._ngDestroy$.next();
      this._ngDestroy$.complete();
    }
    /*
     * Getter for educations form controls array
     */
    get experiences() {
      return this.form.get('experiences');
    }
    static {
      this.ɵfac = function EditCandidateExperienceFormComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || EditCandidateExperienceFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_9__/* .ToastrService */ .t), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__/* .TranslateService */ .c$), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_11__/* .CandidateStore */ .R), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_forms__WEBPACK_IMPORTED_MODULE_7__/* .UntypedFormBuilder */ .ze), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_12__/* .Store */ .il), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_13__/* .CandidateExperienceService */ .V));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: EditCandidateExperienceFormComponent,
        selectors: [["ga-edit-candidate-experience-form"]],
        viewQuery: function EditCandidateExperienceFormComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵviewQuery"] */ .GBs(_c0, 5);
          }
          if (rf & 2) {
            let _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵqueryRefresh"] */ .mGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵloadQuery"] */ .lsd()) && (ctx.experienceTable = _t.first);
          }
        },
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
        decls: 10,
        vars: 8,
        consts: [["actionButtons", ""], ["visibleButton", ""], ["addInput", ""], ["experienceTable", ""], ["nbSpinnerStatus", "primary", "nbSpinnerSize", "large", 3, "nbSpinner"], [1, "pb-0", "pt-0"], [1, "d-flex", "justify-content-end"], [3, "buttonTemplate", "buttonTemplateVisible", "hasLayoutSelector", "isDisable", "componentName"], ["class", "row m-0 w-100", 4, "ngIf"], [4, "ngIf"], [1, "row", "m-0", "w-100"], ["class", "col-11", 3, "formGroup", 4, "ngIf"], [1, "col-1"], [1, "col-2", "pl-2", "pr-0"], ["nbButton", "", "status", "success", "size", "small", 1, "w-100", "form-btn", 3, "click"], ["nbButton", "", "status", "basic", "size", "small", "outline", "", 1, "w-100", "form-btn", 3, "click"], [1, "col-11", 3, "formGroup"], ["formArrayName", "experiences"], [4, "ngFor", "ngForOf"], [1, "experience-add-card", 3, "formGroupName"], [1, "col-6", "add-card-wrapp"], ["nbInput", "", "formControlName", "occupation", "type", "text", "fullWidth", "", 1, "col-10", 3, "placeholder"], ["nbInput", "", "formControlName", "duration", "type", "text", "fullWidth", "", 1, "col-10", 3, "placeholder"], ["nbInput", "", "formControlName", "description", 1, "description", "col-6", 3, "placeholder"], [1, "table-scroll-container"], ["style", "cursor: pointer", 3, "settings", "source", "userRowSelect", 4, "ngIf"], [3, "totalItems", "settings", "source", "onSelectedItem", 4, "ngIf"], [2, "cursor", "pointer", 3, "userRowSelect", "settings", "source"], [3, "onSelectedItem", "totalItems", "settings", "source"], ["class", "btn-group actions", 4, "ngIf"], [1, "btn-group", "actions"], ["nbButton", "", "status", "basic", "size", "small", 1, "action", "primary", 3, "click", "disabled"], ["icon", "edit-outline", 1, "mr-1"], ["nbButton", "", "status", "basic", "size", "small", 1, "action", 3, "click", "disabled", "nbTooltip"], ["status", "danger", "icon", "trash-2-outline"], ["nbButton", "", "status", "success", "class", "action", "size", "small", 3, "click", 4, "ngIf"], ["nbButton", "", "status", "success", "size", "small", 1, "action", 3, "click"], ["icon", "plus-outline"]],
        template: function EditCandidateExperienceFormComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-card", 4)(1, "nb-card-header", 5)(2, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(3, "ngx-gauzy-button-action", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(4, EditCandidateExperienceFormComponent_div_4_Template, 11, 7, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(5, EditCandidateExperienceFormComponent_nb_card_body_5_Template, 4, 2, "nb-card-body", 9)(6, EditCandidateExperienceFormComponent_ng_template_6_Template, 1, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplateRefExtractor"] */ .C5r);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(8, EditCandidateExperienceFormComponent_ng_template_8_Template, 1, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplateRefExtractor"] */ .C5r);
          }
          if (rf & 2) {
            const actionButtons_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(7);
            const visibleButton_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("nbSpinner", ctx.loading);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("buttonTemplate", actionButtons_r9)("buttonTemplateVisible", visibleButton_r10)("hasLayoutSelector", !ctx.showAddCard)("isDisable", ctx.disableButton)("componentName", ctx.viewComponentName);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.showAddCard);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.experienceList == null ? null : ctx.experienceList.length);
          }
        },
        dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbButtonComponent */ .YP2, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbCardComponent */ .SrT, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbCardBodyComponent */ .KH5, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbCardHeaderComponent */ .zJv, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbIconComponent */ .tHu, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbInputDirective */ .i6h, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbSpinnerDirective */ .zwc, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbTooltipDirective */ .BmQ, _angular_common__WEBPACK_IMPORTED_MODULE_15__/* .NgForOf */ .Sq, _angular_common__WEBPACK_IMPORTED_MODULE_15__/* .NgIf */ .bT, _angular_forms__WEBPACK_IMPORTED_MODULE_7__/* ["ɵNgNoValidate"] */ .qT, _angular_forms__WEBPACK_IMPORTED_MODULE_7__/* .DefaultValueAccessor */ .me, _angular_forms__WEBPACK_IMPORTED_MODULE_7__/* .NgControlStatus */ .BC, _angular_forms__WEBPACK_IMPORTED_MODULE_7__/* .NgControlStatusGroup */ .cb, _angular_forms__WEBPACK_IMPORTED_MODULE_7__/* .FormGroupDirective */ .j4, _angular_forms__WEBPACK_IMPORTED_MODULE_7__/* .FormControlName */ .JD, _angular_forms__WEBPACK_IMPORTED_MODULE_7__/* .FormGroupName */ .$R, _angular_forms__WEBPACK_IMPORTED_MODULE_7__/* .FormArrayName */ .v8, _packages_ui_core_shared_src_lib_card_grid_card_grid_component__WEBPACK_IMPORTED_MODULE_16__/* .CardGridComponent */ .c, angular2_smart_table__WEBPACK_IMPORTED_MODULE_4__/* .Angular2SmartTableComponent */ .T9, _packages_ui_core_shared_src_lib_gauzy_button_action_gauzy_button_action_component__WEBPACK_IMPORTED_MODULE_17__/* .GauzyButtonActionComponent */ .A, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__/* .TranslatePipe */ .D9],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.action[_ngcontent-%COMP%] {\n  box-shadow: var(--gauzy-shadow);\n  border: none;\n}\n.action[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}\n.action.info[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: var(--color-info-default);\n  color: white;\n  border-color: var(--color-info-default);\n}\n.action.info-text-1[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  color: var(--color-info-default);\n}\n.action.secondary[_ngcontent-%COMP%] {\n  color: #7e7e8f;\n}\n.action.success[_ngcontent-%COMP%] {\n  color: var(--color-success-default);\n}\n.action.warning[_ngcontent-%COMP%] {\n  color: rgb(245, 109, 88);\n}\n.action.orange[_ngcontent-%COMP%] {\n  color: rgb(255, 171, 45);\n}\n.action.primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n}\n.action.primary.soft[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: rgba(110, 73, 232, 0.1);\n}\n.action.select-nb[_ngcontent-%COMP%]     {\n  box-shadow: none;\n}\n.action.select-nb[_ngcontent-%COMP%]     .select-button {\n  box-shadow: var(--gauzy-shadow);\n  background: rgb(245, 245, 245);\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n.actions[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-2);\n  border-radius: var(--button-rectangle-border-radius);\n  padding: 2px 4px !important;\n}\n\n.gauzy-button-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n.card-custom-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n[_nghost-%COMP%]     input {\n  border-radius: var(--border-radius);\n  box-shadow: var(--gauzy-shadow) inset;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   i[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n}\n[dir=ltr]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n[dir=rtl]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--gauzy-text-color-1);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(245, 109, 88, 0.3);\n  border-width: 2px;\n  color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(245, 109, 88, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 16px;\n  letter-spacing: 0em;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(126, 126, 143, 0.3);\n  border-width: 2px;\n  color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(126, 126, 143, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(37, 184, 105, 0.3);\n  border-width: 2px;\n  color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(37, 184, 105, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[disabled][_ngcontent-%COMP%], \n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic.btn-disabled[_ngcontent-%COMP%] {\n  background-color: var(--button-outline-basic-disabled-background-color);\n  border-color: var(--button-outline-basic-disabled-border-color);\n  color: var(--button-outline-basic-disabled-text-color);\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].primary.appearance-filled.status-primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  border: unset;\n  background-color: var(--color-primary-transparent-default);\n  box-shadow: var(--gauzy-shadow) 0, 0, 0, 0.15;\n}\n[dir=ltr]   [_nghost-%COMP%]     input, \n[dir=ltr]   [_nghost-%COMP%]     textarea {\n  text-align: start;\n}\n[dir=rtl]   [_nghost-%COMP%]     input, \n[dir=rtl]   [_nghost-%COMP%]     textarea {\n  text-align: end;\n}\n[_nghost-%COMP%]     input, \n[_nghost-%COMP%]     nb-select.appearance-outline.status-basic .select-button, \n[_nghost-%COMP%]     .ng-select .ng-select-container {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n  height: 42px !important;\n}\n[_nghost-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder, \n[_nghost-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {\n  top: unset !important;\n}\n[_nghost-%COMP%]     label, \n[_nghost-%COMP%]     .label {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  color: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]     textarea {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n}\n[_nghost-%COMP%]     .ng-select .ng-select-container input, \n[_nghost-%COMP%]     nb-tag-list input {\n  background-color: unset !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n}\n\n.experience-form[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n.description[_ngcontent-%COMP%] {\n  max-width: 41.6666666667% !important;\n  margin: 0.5rem 0;\n  max-height: 9.55rem;\n  height: 9.55rem;\n}\n\ninput[_ngcontent-%COMP%] {\n  width: 90%;\n  margin: 0.5rem 1.5rem;\n}\n\n.form-btn[_ngcontent-%COMP%] {\n  margin: 0.5rem 0;\n}\n\n.experience-add-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: flex-start;\n}\n\n.add-card-wrapp[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n}\n\n.header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.header[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  padding: 0px;\n}\n\nform[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n  border-radius: var(--border-radius);\n  padding: 1rem;\n}\n\n[_nghost-%COMP%]     input, \n[_nghost-%COMP%]     nb-select.appearance-outline.status-basic .select-button, \n[_nghost-%COMP%]     .ng-select .ng-select-container {\n  background-color: var(--gauzy-card-1) !important;\n  border: none;\n  height: 42px !important;\n}\n[_nghost-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder, \n[_nghost-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {\n  top: unset !important;\n}\n[_nghost-%COMP%]     label, \n[_nghost-%COMP%]     .label {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  color: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]     textarea {\n  background-color: var(--gauzy-card-1) !important;\n  border: none;\n}\n[_nghost-%COMP%]     .ng-select .ng-select-container input, \n[_nghost-%COMP%]     nb-tag-list input {\n  background-color: unset !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: transparent;\n}\n[_nghost-%COMP%]   .table-scroll-container[_ngcontent-%COMP%]     input, \n[_nghost-%COMP%]   .table-scroll-container[_ngcontent-%COMP%]     nb-select.appearance-outline.status-basic .select-button, \n[_nghost-%COMP%]   .table-scroll-container[_ngcontent-%COMP%]     .ng-select .ng-select-container {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n  height: 2rem !important;\n}\n[_nghost-%COMP%]   .table-scroll-container[_ngcontent-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder, \n[_nghost-%COMP%]   .table-scroll-container[_ngcontent-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {\n  top: unset !important;\n}\n[_nghost-%COMP%]   .table-scroll-container[_ngcontent-%COMP%]     label, \n[_nghost-%COMP%]   .table-scroll-container[_ngcontent-%COMP%]     .label {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  color: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]   .table-scroll-container[_ngcontent-%COMP%]     textarea {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n}\n[_nghost-%COMP%]   .table-scroll-container[_ngcontent-%COMP%]     .ng-select .ng-select-container input, \n[_nghost-%COMP%]   .table-scroll-container[_ngcontent-%COMP%]     nb-tag-list input {\n  background-color: unset !important;\n}"]
      });
    }
  }
  return EditCandidateExperienceFormComponent;
})();

/***/ }),

/***/ 92640:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ getEditorNamespace)
/* harmony export */ });
/* unused harmony export debounce */
/**
 * @license Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */
function loadScript(src, opts, cb) {
  var head = document.head || document.getElementsByTagName('head')[0];
  var script = document.createElement('script');
  if (typeof opts === 'function') {
    cb = opts;
    opts = {};
  }
  opts = opts || {};
  cb = cb || function () {};
  script.type = opts.type || 'text/javascript';
  script.charset = opts.charset || 'utf8';
  script.async = 'async' in opts ? !!opts.async : true;
  script.src = src;
  if (opts.attrs) {
    setAttributes(script, opts.attrs);
  }
  if (opts.text) {
    script.text = String(opts.text);
  }
  var onend = 'onload' in script ? stdOnEnd : ieOnEnd;
  onend(script, cb);
  if (!script.onload) {
    stdOnEnd(script, cb);
  }
  head.appendChild(script);
}
function setAttributes(script, attrs) {
  for (var attr in attrs) {
    script.setAttribute(attr, attrs[attr]);
  }
}
function stdOnEnd(script, cb) {
  script.onload = function () {
    this.onerror = this.onload = null;
    cb(null, script);
  };
  script.onerror = function () {
    this.onerror = this.onload = null;
    cb(new Error('Failed to load ' + this.src), script);
  };
}
function ieOnEnd(script, cb) {
  script.onreadystatechange = function () {
    if (this.readyState != 'complete' && this.readyState != 'loaded') {
      return;
    }
    this.onreadystatechange = null;
    cb(null, script);
  };
}
var promise;
function getEditorNamespace(editorURL, onNamespaceLoaded) {
  if ('CKEDITOR' in window) {
    return Promise.resolve(CKEDITOR);
  }
  if (typeof editorURL !== 'string' || editorURL.length < 1) {
    return Promise.reject(new TypeError('CKEditor URL must be a non-empty string.'));
  }
  if (!promise) {
    promise = getEditorNamespace.scriptLoader(editorURL).then(function (res) {
      if (onNamespaceLoaded) {
        onNamespaceLoaded(res);
      }
      return res;
    });
  }
  return promise;
}
getEditorNamespace.scriptLoader = function (editorURL) {
  return new Promise(function (scriptResolve, scriptReject) {
    loadScript(editorURL, function (err) {
      promise = undefined;
      if (err) {
        return scriptReject(err);
      } else if (!window.CKEDITOR) {
        return scriptReject(new Error('Script loaded from editorUrl doesn\'t provide CKEDITOR namespace.'));
      }
      scriptResolve(CKEDITOR);
    });
  });
};
function debounce(fn, delay) {
  var context = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var cancel;
  return function () {
    clearTimeout(cancel);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    cancel = setTimeout(fn.bind.apply(fn, [context].concat(args)), delay);
  };
}


/***/ }),

/***/ 97838:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: () => (/* binding */ EditCandidateRatesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _packages_ui_core_shared_src_lib_employee_employee_rates_employee_rates_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(83108);


let EditCandidateRatesComponent = /*#__PURE__*/(() => {
  class EditCandidateRatesComponent {
    static {
      this.ɵfac = function EditCandidateRatesComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || EditCandidateRatesComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: EditCandidateRatesComponent,
        selectors: [["ga-edit-candidate-rates"]],
        standalone: false,
        decls: 1,
        vars: 1,
        consts: [[3, "isCandidate"]],
        template: function EditCandidateRatesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(0, "ga-employee-rates", 0);
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("isCandidate", true);
          }
        },
        dependencies: [_packages_ui_core_shared_src_lib_employee_employee_rates_employee_rates_component__WEBPACK_IMPORTED_MODULE_1__/* .EmployeeRatesComponent */ .V],
        styles: ["[_nghost-%COMP%] {\n\t\t\t\toverflow-y: auto;\n\t\t\t\tmax-height: calc(100vh - 28rem);\n\t\t\t}"]
      });
    }
  }
  return EditCandidateRatesComponent;
})();

/***/ }),

/***/ 97855:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   V: () => (/* binding */ CandidateExperienceService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80189);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26024);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64913);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26860);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45715);






let CandidateExperienceService = /*#__PURE__*/(() => {
  class CandidateExperienceService {
    constructor(http) {
      this.http = http;
    }
    create(createInput) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ ._)(this.http.post(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/candidate-experience`, createInput));
    }
    getAll(where, relations = []) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ ._)(this.http.get(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/candidate-experience`, {
        params: (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_2__/* .toParams */ .SV)({
          where,
          relations
        })
      }));
    }
    update(id, updateInput) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ ._)(this.http.put(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/candidate-experience/${id}`, updateInput));
    }
    delete(id) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ ._)(this.http.delete(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/candidate-experience/${id}`));
    }
    static {
      this.ɵfac = function CandidateExperienceService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || CandidateExperienceService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵinject"] */ .KVO(_angular_common_http__WEBPACK_IMPORTED_MODULE_4__/* .HttpClient */ .Qq));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdefineInjectable"] */ .jDH({
        token: CandidateExperienceService,
        factory: CandidateExperienceService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return CandidateExperienceService;
})();

/***/ }),

/***/ 98106:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ richTextCKEditorConfig),
/* harmony export */   a: () => (/* binding */ ckEditorConfig)
/* harmony export */ });
const ckEditorConfig = {
  width: '100%',
  height: '320',
  toolbar: [{
    name: 'document',
    items: ['Source', '-', 'Save', 'NewPage', 'ExportPdf', 'Preview', 'Print', '-', 'Templates']
  }, {
    name: 'clipboard',
    items: ['Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', '-', 'Undo', 'Redo']
  }, {
    name: 'editing',
    items: ['Find', 'Replace', '-', 'SelectAll', '-', 'Scayt']
  }, {
    name: 'forms',
    items: ['Form', 'Checkbox', 'Radio', 'TextField', 'Textarea', 'Select', 'Button', 'ImageButton', 'HiddenField']
  }, '/', {
    name: 'basicstyles',
    items: ['Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript', '-', 'CopyFormatting', 'RemoveFormat']
  }],
  toolbarCanCollapse: true
};
const richTextCKEditorConfig = {
  width: '100%',
  height: '320',
  toolbar: [{
    name: 'document',
    items: ['Source']
  }, {
    name: 'basicstyles',
    items: ['Bold', 'Italic', 'Underline']
  }, {
    name: 'paragraph',
    items: ['JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock', 'NumberedList', 'BulletedList', 'Checkbox', 'Blockquote', 'Code']
  }, {
    name: 'styles',
    items: ['Format', 'Link', 'Heading']
  }],
  toolbarCanCollapse: true,
  format_tags: 'p;h1;h2;pre'
};

/***/ })

}]);