"use strict";
(self["webpackChunkgauzy"] = self["webpackChunkgauzy"] || []).push([[7607],{

/***/ 5209:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Q: () => (/* binding */ IncomeMutationComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(73014);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(55598);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10936);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(56383);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4478);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(52738);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(39855);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(41598);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(19223);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(26024);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(71924);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(3289);
/* harmony import */ var _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38546);
/* harmony import */ var _forms_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(78870);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(26860);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(14572);
/* harmony import */ var _selectors_employee_employee_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(54982);
/* harmony import */ var _modules_currency_currency_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(64251);
/* harmony import */ var _contact_select_contact_select_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(84597);
/* harmony import */ var _tags_tags_color_input_tags_color_input_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(62177);

var IncomeMutationComponent_1;




















let IncomeMutationComponent = /*#__PURE__*/(() => {
  let IncomeMutationComponent = class IncomeMutationComponent extends _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_0__/* .TranslationBaseComponent */ .K {
    static {
      IncomeMutationComponent_1 = this;
    }
    get income() {
      return this._income;
    }
    set income(value) {
      this._income = value;
    }
    static buildForm(fb, self) {
      return fb.group({
        valueDate: [self.organizationSettingService.getDateFromOrganizationSettings(), _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .Validators */ .k0.required],
        amount: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .Validators */ .k0.required],
        organizationContact: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .Validators */ .k0.required],
        notes: [],
        currency: [],
        isBonus: [false],
        tags: [],
        employee: []
      });
    }
    constructor(fb, dialogRef, store, translateService, organizationSettingService) {
      super(translateService);
      this.fb = fb;
      this.dialogRef = dialogRef;
      this.store = store;
      this.translateService = translateService;
      this.organizationSettingService = organizationSettingService;
      this.FormHelpers = _forms_helpers__WEBPACK_IMPORTED_MODULE_2__/* .FormHelpers */ .k;
      /*
       * Income Mutation Form
       */
      this.form = IncomeMutationComponent_1.buildForm(this.fb, this);
    }
    ngOnInit() {
      this.store.selectedOrganization$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .debounceTime */ .B)(100), (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_4__/* .distinctUntilChange */ .nI)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .filter */ .p)(organization => !!organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .M)(organization => this.organization = organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .M)(() => this._initializeForm()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__/* .untilDestroyed */ .s)(this)).subscribe();
    }
    ngAfterViewInit() {}
    addOrEditIncome() {
      var _this = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A)(function* () {
        if (_this.form.invalid) {
          return;
        }
        _this.dialogRef.close(Object.assign({}, _this.form.getRawValue()));
      })();
    }
    close() {
      this.dialogRef.close();
    }
    _initializeForm() {
      if (this.income) {
        const {
          valueDate,
          amount,
          client,
          notes,
          currency,
          isBonus = false,
          tags,
          employee
        } = this.income;
        this.form.patchValue({
          valueDate: new Date(valueDate),
          amount: amount,
          organizationContact: client,
          notes: notes,
          currency: currency,
          isBonus: isBonus,
          tags: tags,
          employee: employee
        });
      }
    }
    selectedTagsHandler(tags) {
      if ((0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_4__/* .isNotEmpty */ .hj)(tags)) {
        this.form.patchValue({
          tags: tags
        });
        this.form.updateValueAndValidity();
      }
    }
    /**
     * Select Employee Selector
     *
     * @param employee
     */
    selectionEmployee(employee) {
      if (employee) {
        this.form.patchValue({
          employee: employee
        });
        this.form.updateValueAndValidity();
      }
    }
    /*
     * On Changed Currency Event Emitter
     */
    currencyChanged($event) {}
    static {
      this.ɵfac = function IncomeMutationComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || IncomeMutationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .UntypedFormBuilder */ .ze), _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵdirectiveInject"] */ .rXU(_nebular_theme__WEBPACK_IMPORTED_MODULE_10__/* .NbDialogRef */ .ybQ), _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_11__/* .Store */ .il), _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__/* .TranslateService */ .c$), _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_13__/* .OrganizationSettingService */ .r));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵdefineComponent"] */ .VBU({
        type: IncomeMutationComponent,
        selectors: [["ngx-income-mutation"]],
        inputs: {
          income: "income"
        },
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
        decls: 74,
        vars: 64,
        consts: [["formDirective", "ngForm"], ["employeeSelector", ""], ["valueDatePicker", ""], [1, "main"], [1, "d-flex", "flex-column"], [1, "cancel"], [1, "fas", "fa-times", 3, "click"], [1, "title"], [1, "body"], [3, "ngSubmit", "formGroup"], [1, "row", "employees"], [1, "col-sm-7", 3, "hidden"], ["for", "employee", 1, "label", 3, "hidden"], ["id", "employee", 3, "selectionChanged", "placeholder", "defaultSelected", "showAllEmployeesOption", "hidden", "skipGlobalChange"], [3, "ngClass"], [1, "form-group"], [1, "label"], ["formControlName", "organizationContact", 3, "addTag", "clearable", "searchable", "placeholder"], [1, "row"], [1, "col-sm-4"], ["formControlName", "valueDate", "nbInput", "", 3, "placeholder", "nbDatepicker", "status"], [1, "row", "mt-3"], [1, "col-sm-6"], ["formControlName", "currency", 3, "optionChange", "formControl"], ["nbInput", "", "type", "number", "step", "1", "fullWidth", "", "formControlName", "amount", "autocomplete", "off", 3, "min", "placeholder", "status"], [1, "col-sm-12"], [3, "selectedTagsEvent", "selectedTags", "isOrgLevel"], [1, "col"], [1, "form-group", "flex-container"], ["formControlName", "isBonus"], [1, "label", "info-font", 3, "nbTooltip"], ["icon", "info-outline"], ["nbInput", "", "fullWidth", "", "formControlName", "notes", 1, "notes", 3, "placeholder"], [1, "text-left"], ["status", "basic", "outline", "", "nbButton", "", 1, "mr-3", 3, "click"], ["status", "success", "nbButton", "", 3, "click", "disabled"]],
        template: function IncomeMutationComponent_Template(rf, ctx) {
          if (rf & 1) {
            const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵgetCurrentView"] */ .RV6();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementStart"] */ .j41(0, "nb-card", 3)(1, "nb-card-header", 4)(2, "div", 5)(3, "i", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵlistener"] */ .bIt("click", function IncomeMutationComponent_Template_i_click_3_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵresetView"] */ .Njj(ctx.close());
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementStart"] */ .j41(4, "h5", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtext"] */ .EFF(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipe"] */ .nI1(6, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementStart"] */ .j41(7, "nb-card-body", 8)(8, "form", 9, 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵlistener"] */ .bIt("ngSubmit", function IncomeMutationComponent_Template_form_ngSubmit_8_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵresetView"] */ .Njj(ctx.addOrEditIncome());
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementStart"] */ .j41(10, "div", 10)(11, "div", 11)(12, "label", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtext"] */ .EFF(13);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipe"] */ .nI1(14, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementStart"] */ .j41(15, "ga-employee-selector", 13, 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipe"] */ .nI1(17, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵlistener"] */ .bIt("selectionChanged", function IncomeMutationComponent_Template_ga_employee_selector_selectionChanged_15_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵresetView"] */ .Njj(ctx.selectionEmployee($event));
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementStart"] */ .j41(18, "div", 14)(19, "div", 15)(20, "label", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtext"] */ .EFF(21);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipe"] */ .nI1(22, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelement"] */ .nrm(23, "ga-contact-select", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipe"] */ .nI1(24, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementEnd"] */ .k0s()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementStart"] */ .j41(25, "div", 18)(26, "div", 19)(27, "label", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtext"] */ .EFF(28);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipe"] */ .nI1(29, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelement"] */ .nrm(30, "input", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipe"] */ .nI1(31, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelement"] */ .nrm(32, "nb-datepicker", null, 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementStart"] */ .j41(34, "div", 21)(35, "div", 22)(36, "ga-currency", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵlistener"] */ .bIt("optionChange", function IncomeMutationComponent_Template_ga_currency_optionChange_36_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵresetView"] */ .Njj(ctx.currencyChanged($event));
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementStart"] */ .j41(37, "div", 22)(38, "div", 15)(39, "label", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtext"] */ .EFF(40);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipe"] */ .nI1(41, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelement"] */ .nrm(42, "input", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipe"] */ .nI1(43, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementEnd"] */ .k0s()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementStart"] */ .j41(44, "div", 18)(45, "div", 25)(46, "div", 15)(47, "ga-tags-color-input", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵlistener"] */ .bIt("selectedTagsEvent", function IncomeMutationComponent_Template_ga_tags_color_input_selectedTagsEvent_47_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵresetView"] */ .Njj(ctx.selectedTagsHandler($event));
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementEnd"] */ .k0s()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementStart"] */ .j41(48, "div", 18)(49, "div", 27)(50, "div", 28)(51, "nb-checkbox", 29)(52, "span", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtext"] */ .EFF(53);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipe"] */ .nI1(54, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementStart"] */ .j41(55, "span", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipe"] */ .nI1(56, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtext"] */ .EFF(57, " \u00A0");
            _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelement"] */ .nrm(58, "nb-icon", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementEnd"] */ .k0s()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementStart"] */ .j41(59, "div", 18)(60, "div", 27)(61, "label", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtext"] */ .EFF(62);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipe"] */ .nI1(63, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementStart"] */ .j41(64, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelement"] */ .nrm(65, "textarea", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipe"] */ .nI1(66, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementEnd"] */ .k0s()()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementStart"] */ .j41(67, "nb-card-footer", 33)(68, "button", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵlistener"] */ .bIt("click", function IncomeMutationComponent_Template_button_click_68_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵresetView"] */ .Njj(ctx.close());
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtext"] */ .EFF(69);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipe"] */ .nI1(70, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementStart"] */ .j41(71, "button", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵlistener"] */ .bIt("click", function IncomeMutationComponent_Template_button_click_71_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              const formDirective_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵreference"] */ .sdS(9);
              return _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵresetView"] */ .Njj(formDirective_r2.ngSubmit.emit());
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtext"] */ .EFF(72);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipe"] */ .nI1(73, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementEnd"] */ .k0s()()();
          }
          if (rf & 2) {
            const valueDatePicker_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵreference"] */ .sdS(33);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipeBind1"] */ .bMT(6, 34, ctx.income ? "POP_UPS.EDIT_INCOME" : "POP_UPS.ADD_INCOME"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵproperty"] */ .Y8G("formGroup", ctx.form);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵproperty"] */ .Y8G("hidden", ctx.income);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵproperty"] */ .Y8G("hidden", ctx.income);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipeBind1"] */ .bMT(14, 36, "INCOME_PAGE.EMPLOYEES_GENERATE_INCOME"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipeBind1"] */ .bMT(17, 38, "INCOME_PAGE.EMPLOYEES_GENERATE_INCOME"))("defaultSelected", true)("showAllEmployeesOption", true)("hidden", ctx.income)("skipGlobalChange", true);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵproperty"] */ .Y8G("ngClass", ctx.income ? "col-sm-12" : "col-sm-5");
            _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipeBind1"] */ .bMT(22, 40, "POP_UPS.CONTACT"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵproperty"] */ .Y8G("addTag", true)("clearable", true)("searchable", true)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipeBind1"] */ .bMT(24, 42, "POP_UPS.ALL_CONTACTS"));
            _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipeBind1"] */ .bMT(29, 44, "POP_UPS.PICK_DATE"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipeBind1"] */ .bMT(31, 46, "POP_UPS.PICK_DATE"))("nbDatepicker", valueDatePicker_r3)("status", ctx.FormHelpers.isInvalidControl(ctx.form, "valueDate") ? "danger" : "basic");
            _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .R7$(6);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵproperty"] */ .Y8G("formControl", ctx.form.get("currency"));
            _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipeBind1"] */ .bMT(41, 48, "POP_UPS.AMOUNT"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵproperty"] */ .Y8G("min", 0)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipeBind1"] */ .bMT(43, 50, "POP_UPS.AMOUNT"))("status", ctx.FormHelpers.isInvalidControl(ctx.form, "amount") ? "danger" : "basic");
            _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵproperty"] */ .Y8G("selectedTags", ctx.form.get("tags").value)("isOrgLevel", true);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .R7$(6);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipeBind1"] */ .bMT(54, 52, "DASHBOARD_PAGE.DEVELOPER.BONUS"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵproperty"] */ .Y8G("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipeBind1"] */ .bMT(56, 54, "INCOME_PAGE.BONUS_HELP"));
            _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .R7$(7);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipeBind1"] */ .bMT(63, 56, "TIMER_TRACKER.DESCRIPTION"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipeBind1"] */ .bMT(66, 58, "POP_UPS.NOTES"));
            _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipeBind1"] */ .bMT(70, 60, "BUTTONS.CANCEL"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵproperty"] */ .Y8G("disabled", ctx.form.invalid);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipeBind1"] */ .bMT(73, 62, "BUTTONS.SAVE"), " ");
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_14__/* .NgClass */ .YU, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* ["ɵNgNoValidate"] */ .qT, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .DefaultValueAccessor */ .me, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .NumberValueAccessor */ .Q0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .NgControlStatus */ .BC, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .NgControlStatusGroup */ .cb, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .MinValidator */ .VZ, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__/* .NbCardComponent */ .SrT, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__/* .NbCardBodyComponent */ .KH5, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__/* .NbCardFooterComponent */ .VDm, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__/* .NbCardHeaderComponent */ .zJv, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .FormControlDirective */ .l_, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .FormGroupDirective */ .j4, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .FormControlName */ .JD, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__/* .NbButtonComponent */ .YP2, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__/* .NbIconComponent */ .tHu, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__/* .NbDatepickerDirective */ .OA9, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__/* .NbDatepickerComponent */ .k2z, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__/* .NbInputDirective */ .i6h, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__/* .NbCheckboxComponent */ .DMy, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__/* .NbTooltipDirective */ .BmQ, _selectors_employee_employee_component__WEBPACK_IMPORTED_MODULE_15__/* .EmployeeSelectorComponent */ .R, _modules_currency_currency_component__WEBPACK_IMPORTED_MODULE_16__/* .CurrencyComponent */ .X, _contact_select_contact_select_component__WEBPACK_IMPORTED_MODULE_17__/* .ContactSelectComponent */ .O, _tags_tags_color_input_tags_color_input_component__WEBPACK_IMPORTED_MODULE_18__/* .TagsColorInputComponent */ .i, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__/* .TranslatePipe */ .D9],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   i[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n}\n[dir=ltr]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n[dir=rtl]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--gauzy-text-color-1);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(245, 109, 88, 0.3);\n  border-width: 2px;\n  color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(245, 109, 88, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 16px;\n  letter-spacing: 0em;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(126, 126, 143, 0.3);\n  border-width: 2px;\n  color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(126, 126, 143, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(37, 184, 105, 0.3);\n  border-width: 2px;\n  color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(37, 184, 105, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[disabled][_ngcontent-%COMP%], \n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic.btn-disabled[_ngcontent-%COMP%] {\n  background-color: var(--button-outline-basic-disabled-background-color);\n  border-color: var(--button-outline-basic-disabled-border-color);\n  color: var(--button-outline-basic-disabled-text-color);\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].primary.appearance-filled.status-primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  border: unset;\n  background-color: var(--color-primary-transparent-default);\n  box-shadow: var(--gauzy-shadow) 0, 0, 0, 0.15;\n}\n[dir=ltr]   [_nghost-%COMP%]     input, \n[dir=ltr]   [_nghost-%COMP%]     textarea {\n  text-align: start;\n}\n[dir=rtl]   [_nghost-%COMP%]     input, \n[dir=rtl]   [_nghost-%COMP%]     textarea {\n  text-align: end;\n}\n[_nghost-%COMP%]     input, \n[_nghost-%COMP%]     nb-select.appearance-outline.status-basic .select-button, \n[_nghost-%COMP%]     .ng-select .ng-select-container {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n  height: 42px !important;\n}\n[_nghost-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder, \n[_nghost-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {\n  top: unset !important;\n}\n[_nghost-%COMP%]     label, \n[_nghost-%COMP%]     .label {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  color: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]     textarea {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n}\n[_nghost-%COMP%]     .ng-select .ng-select-container input, \n[_nghost-%COMP%]     nb-tag-list input {\n  background-color: unset !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n}\n\n.main[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%] {\n  width: 605px;\n}\n.main[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.main[_ngcontent-%COMP%]   .notes[_ngcontent-%COMP%] {\n  min-height: 5.5rem;\n  resize: none;\n}\n.main[_ngcontent-%COMP%]   nb-card-header[_ngcontent-%COMP%]   .employees[_ngcontent-%COMP%] {\n  margin-left: 20px;\n  padding-left: 20px;\n  border-left: 1px solid #edf1f7;\n  width: 220px;\n}\n.main[_ngcontent-%COMP%]   .employees[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n.main[_ngcontent-%COMP%]   .flex-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n.main[_ngcontent-%COMP%]   .info-font[_ngcontent-%COMP%] {\n  font-size: 2em;\n}"]
      });
    }
  };
  return IncomeMutationComponent;
})();
IncomeMutationComponent = IncomeMutationComponent_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_19__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__/* .UntilDestroy */ .d)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_19__/* .__metadata */ .Sn)("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .UntypedFormBuilder */ .ze, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__/* .NbDialogRef */ .ybQ, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_11__/* .Store */ .il, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__/* .TranslateService */ .c$, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_13__/* .OrganizationSettingService */ .r])], IncomeMutationComponent);


/***/ }),

/***/ 68240:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   h: () => (/* binding */ OrganizationContactFilterComponent)
/* harmony export */ });
/* harmony import */ var angular2_smart_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52345);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26860);
/* harmony import */ var _contact_select_contact_select_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(84597);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19223);





let OrganizationContactFilterComponent = /*#__PURE__*/(() => {
  class OrganizationContactFilterComponent extends angular2_smart_table__WEBPACK_IMPORTED_MODULE_0__/* .DefaultFilter */ .yG {
    constructor() {
      super();
    }
    /**
     *
     *
     */
    ngOnChanges(changes) {}
    /**
     *
     * @param value
     */
    onChange(value) {
      this.column.filterFunction(value, this.column.id);
    }
    static {
      this.ɵfac = function OrganizationContactFilterComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || OrganizationContactFilterComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineComponent"] */ .VBU({
        type: OrganizationContactFilterComponent,
        selectors: [["ga-contact-select-filter"]],
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3, _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵNgOnChangesFeature"] */ .OA$],
        decls: 2,
        vars: 4,
        consts: [[3, "onChanged", "clearable", "placeholder"]],
        template: function OrganizationContactFilterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "ga-contact-select", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(1, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("onChanged", function OrganizationContactFilterComponent_Template_ga_contact_select_onChanged_0_listener($event) {
              return ctx.onChange($event);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("clearable", true)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(1, 2, "PAYMENTS_PAGE.CONTACT"));
          }
        },
        dependencies: [_contact_select_contact_select_component__WEBPACK_IMPORTED_MODULE_2__/* .ContactSelectComponent */ .O, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__/* .TranslatePipe */ .D9],
        encapsulation: 2
      });
    }
  }
  return OrganizationContactFilterComponent;
})();

/***/ }),

/***/ 86764:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   f: () => (/* binding */ IncomeMutationModule)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10936);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14572);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(56383);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(55567);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(19223);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12272);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22688);
/* harmony import */ var _selectors_selectors_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(98048);
/* harmony import */ var _modules_currency_currency_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(43629);
/* harmony import */ var _contact_select_contact_select_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(11336);
/* harmony import */ var _tags_tags_color_input_tags_color_input_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(61444);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);












let IncomeMutationModule = /*#__PURE__*/(() => {
  class IncomeMutationModule {
    static {
      this.ɵfac = function IncomeMutationModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || IncomeMutationModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .$C({
        type: IncomeMutationModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .G2t({
        providers: [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_1__/* .IncomeService */ .H, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_2__/* .OrganizationsService */ .k],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__/* .CommonModule */ .MD, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .FormsModule */ .YN, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbCardModule */ .lVF, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .ReactiveFormsModule */ .X1, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbButtonModule */ .P5N, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbIconModule */ .clu, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__/* .NgSelectModule */ .MQ, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbDatepickerModule */ .TgK, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbInputModule */ .pty, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbSelectModule */ .VcP, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbCheckboxModule */ .Ad8, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbTooltipModule */ .IB0, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__/* .TranslateModule */ .h.forChild(), _selectors_selectors_module__WEBPACK_IMPORTED_MODULE_8__/* .SelectorsModule */ .b, _modules_currency_currency_module__WEBPACK_IMPORTED_MODULE_9__/* .CurrencyModule */ .C, _contact_select_contact_select_module__WEBPACK_IMPORTED_MODULE_10__/* .ContactSelectModule */ .T, _tags_tags_color_input_tags_color_input_module__WEBPACK_IMPORTED_MODULE_11__/* .TagsColorInputModule */ .x]
      });
    }
  }
  return IncomeMutationModule;
})();

/***/ })

}]);