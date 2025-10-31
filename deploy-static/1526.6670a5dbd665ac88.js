"use strict";
(self["webpackChunkgauzy"] = self["webpackChunkgauzy"] || []).push([[1526],{

/***/ 508:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   V: () => (/* binding */ EditEmployeeOtherSettingsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(64411);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(26860);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(10936);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(72781);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73246);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(23423);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20381);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _gauzy_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99253);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(14486);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(56383);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(55567);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(14572);
/* harmony import */ var _packages_ui_core_shared_src_lib_modules_selectors_timezone_selector_timezone_selector_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(73230);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(19223);
var EditEmployeeOtherSettingsComponent_1;

















const _c0 = ["accordion"];
const _c1 = ["general"];
const _c2 = ["integrations"];
const _c3 = ["timer"];
const _c4 = ["agent"];
const _c5 = a0 => ({
  active: a0
});
let EditEmployeeOtherSettingsComponent = /*#__PURE__*/(() => {
  let EditEmployeeOtherSettingsComponent = class EditEmployeeOtherSettingsComponent {
    static {
      EditEmployeeOtherSettingsComponent_1 = this;
    }
    set content(content) {
      if (content) {
        this.accordion = content;
        this.cdr.detectChanges();
      }
    }
    static buildForm(fb) {
      return fb.group({
        timeZone: [],
        timeFormat: [],
        upworkId: [],
        linkedInId: [],
        allowManualTime: [false],
        allowModifyTime: [false],
        allowDeleteTime: [false],
        allowScreenshotCapture: [true],
        allowAgentAppExit: [true],
        allowLogoutFromAgentApp: [true],
        trackKeyboardMouseActivity: [false],
        trackAllDisplays: [true]
      });
    }
    constructor(cdr, fb, employeeStore) {
      this.cdr = cdr;
      this.fb = fb;
      this.employeeStore = employeeStore;
      this.listOfTimeFormats = _gauzy_constants__WEBPACK_IMPORTED_MODULE_1__/* .DEFAULT_TIME_FORMATS */ .Fo;
      /**
       * Employee other settings settings
       */
      this.form = EditEmployeeOtherSettingsComponent_1.buildForm(this.fb);
    }
    /**
     *
     */
    ngOnInit() {
      this.employeeStore.selectedEmployee$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__/* .filter */ .p)(employee => !!employee), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__/* .tap */ .M)(employee => {
        this.selectedEmployee = employee;
        this._patchFormValue(employee);
      }), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .untilDestroyed */ .s)(this)).subscribe();
    }
    /**
     * Patches the form with employee data or default values if data is unavailable.
     *
     * @param {IEmployee} employee - The employee object containing user data.
     * @returns {void}
     */
    _patchFormValue(employee) {
      if (!employee) return;
      const {
        user,
        upworkId,
        linkedInId,
        allowManualTime,
        allowDeleteTime,
        allowModifyTime,
        allowScreenshotCapture,
        allowAgentAppExit,
        allowLogoutFromAgentApp,
        trackKeyboardMouseActivity,
        trackAllDisplays
      } = employee;
      this.form.patchValue({
        timeZone: user?.timeZone ?? moment__WEBPACK_IMPORTED_MODULE_0__.tz.guess(),
        timeFormat: user?.timeFormat,
        upworkId,
        linkedInId,
        allowManualTime,
        allowDeleteTime,
        allowModifyTime,
        allowScreenshotCapture,
        allowAgentAppExit: allowAgentAppExit ?? true,
        allowLogoutFromAgentApp: allowLogoutFromAgentApp ?? true,
        trackKeyboardMouseActivity: trackKeyboardMouseActivity ?? false,
        trackAllDisplays: trackAllDisplays ?? true
      });
      this.form.updateValueAndValidity();
    }
    /**
     * Handles the form submission, updating employee and user settings if valid.
     *
     * @param {NgForm} form - The form reference for submission.
     * @returns {void}
     */
    onSubmit(form) {
      if (form.invalid) return;
      const {
        organizationId,
        tenantId
      } = this.selectedEmployee;
      const {
        timeZone,
        timeFormat,
        upworkId,
        linkedInId,
        allowManualTime,
        allowDeleteTime,
        allowModifyTime,
        allowScreenshotCapture,
        allowAgentAppExit,
        allowLogoutFromAgentApp,
        trackKeyboardMouseActivity,
        trackAllDisplays
      } = this.form.value;
      this.employeeStore.updateUserForm({
        timeZone,
        timeFormat
      });
      this.employeeStore.updateEmployeeForm({
        upworkId,
        linkedInId,
        organizationId,
        tenantId,
        allowManualTime,
        allowDeleteTime,
        allowModifyTime,
        allowScreenshotCapture,
        allowAgentAppExit,
        allowLogoutFromAgentApp,
        trackKeyboardMouseActivity,
        trackAllDisplays
      });
    }
    /**
     *
     */
    ngOnDestroy() {}
    static {
      this.ɵfac = function EditEmployeeOtherSettingsComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || EditEmployeeOtherSettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_core__WEBPACK_IMPORTED_MODULE_5__/* .ChangeDetectorRef */ .gRc), _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_forms__WEBPACK_IMPORTED_MODULE_6__/* .FormBuilder */ .ok), _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_7__/* .EmployeeStore */ .oO));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdefineComponent"] */ .VBU({
        type: EditEmployeeOtherSettingsComponent,
        selectors: [["ga-edit-employee-settings"]],
        viewQuery: function EditEmployeeOtherSettingsComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵviewQuery"] */ .GBs(_c0, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵviewQuery"] */ .GBs(_c1, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵviewQuery"] */ .GBs(_c2, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵviewQuery"] */ .GBs(_c3, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵviewQuery"] */ .GBs(_c4, 5);
          }
          if (rf & 2) {
            let _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵqueryRefresh"] */ .mGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵloadQuery"] */ .lsd()) && (ctx.content = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵqueryRefresh"] */ .mGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵloadQuery"] */ .lsd()) && (ctx.general = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵqueryRefresh"] */ .mGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵloadQuery"] */ .lsd()) && (ctx.integrations = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵqueryRefresh"] */ .mGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵloadQuery"] */ .lsd()) && (ctx.timer = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵqueryRefresh"] */ .mGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵloadQuery"] */ .lsd()) && (ctx.agent = _t.first);
          }
        },
        standalone: false,
        decls: 149,
        vars: 113,
        consts: [["ngForm", "ngForm"], ["accordion", ""], ["general", ""], ["timer", ""], ["agent", ""], ["integrations", ""], ["novalidate", "", 1, "main-form", 3, "ngSubmit", "formGroup"], [1, "aside-nav"], [1, "settings-section-header"], [3, "click"], [3, "ngClass"], [1, "fields-section"], [1, "accordion-section"], [3, "expanded"], [1, "fields"], [1, "row"], [1, "col-6"], ["formControlName", "timeZone"], [1, "form-group"], ["for", "timeZone", 1, "label"], ["id", "timeFormat", "appendTo", "body", "formControlName", "timeFormat", 3, "itemsChange", "items", "placeholder", "searchable", "clearable"], [1, "fields", "time-tracker"], [1, "col-xl-6", "col-12", "pt-2"], [1, "form-group", "invite-toggle"], ["formControlName", "allowManualTime", "status", "primary", "labelPosition", "start", 1, "d-block"], ["ghost", "", "nbButton", "", "size", "small", "status", "info", 3, "nbTooltip"], ["icon", "info"], ["formControlName", "allowModifyTime", "status", "primary", "labelPosition", "start", 1, "d-block"], ["formControlName", "allowDeleteTime", "labelPosition", "start", "status", "primary", 1, "d-block"], [1, "col-xl-6", "col-12", "pt-2", "form-group", "invite-toggle"], ["formControlName", "allowScreenshotCapture", "status", "primary", "labelPosition", "start", 1, "d-block"], ["ghost", "", "nbButton", "", "size", "small", "status", "info", 1, "p-0", 3, "nbTooltip"], ["formControlName", "trackKeyboardMouseActivity", "status", "primary", "labelPosition", "start", 1, "d-block"], ["formControlName", "trackAllDisplays", "status", "primary", "labelPosition", "start", 1, "d-block"], ["formControlName", "allowAgentAppExit", "status", "primary", "labelPosition", "start", 1, "d-block"], ["formControlName", "allowLogoutFromAgentApp", "status", "primary", "labelPosition", "start", 1, "d-block"], [1, "label"], ["formControlName", "upworkId", "fullWidth", "", "nbInput", "", 3, "placeholder"], ["formControlName", "linkedInId", "fullWidth", "", "nbInput", "", 3, "placeholder"], [1, "actions"], ["nbButton", "", "status", "success"]],
        template: function EditEmployeeOtherSettingsComponent_Template(rf, ctx) {
          if (rf & 1) {
            const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵgetCurrentView"] */ .RV6();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .j41(0, "form", 6, 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵlistener"] */ .bIt("ngSubmit", function EditEmployeeOtherSettingsComponent_Template_form_ngSubmit_0_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              const ngForm_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵreference"] */ .sdS(1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵresetView"] */ .Njj(ctx.onSubmit(ngForm_r2));
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .j41(2, "aside", 7)(3, "h4", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ .EFF(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .nI1(5, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .j41(6, "ul")(7, "span", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵlistener"] */ .bIt("click", function EditEmployeeOtherSettingsComponent_Template_span_click_7_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              const general_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵreference"] */ .sdS(28);
              return _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵresetView"] */ .Njj(general_r3.toggle());
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .j41(8, "li", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ .EFF(9);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .nI1(10, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .j41(11, "span", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵlistener"] */ .bIt("click", function EditEmployeeOtherSettingsComponent_Template_span_click_11_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              const timer_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵreference"] */ .sdS(45);
              return _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵresetView"] */ .Njj(timer_r4.toggle());
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .j41(12, "li", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ .EFF(13);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .nI1(14, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .j41(15, "span", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵlistener"] */ .bIt("click", function EditEmployeeOtherSettingsComponent_Template_span_click_15_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              const agent_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵreference"] */ .sdS(100);
              return _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵresetView"] */ .Njj(agent_r5.toggle());
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .j41(16, "li", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ .EFF(17);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .nI1(18, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .j41(19, "span", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵlistener"] */ .bIt("click", function EditEmployeeOtherSettingsComponent_Template_span_click_19_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              const integrations_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵreference"] */ .sdS(124);
              return _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵresetView"] */ .Njj(integrations_r6.toggle());
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .j41(20, "li", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ .EFF(21);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .nI1(22, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .k0s()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .j41(23, "section", 11)(24, "div", 12)(25, "nb-accordion", null, 1)(27, "nb-accordion-item", 13, 2)(29, "nb-accordion-item-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ .EFF(30);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .nI1(31, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .j41(32, "nb-accordion-item-body")(33, "div", 14)(34, "div", 15)(35, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelement"] */ .nrm(36, "ga-timezone-selector", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .j41(37, "div", 16)(38, "div", 18)(39, "label", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ .EFF(40);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .nI1(41, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .j41(42, "ng-select", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .nI1(43, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtwoWayListener"] */ .mxI("itemsChange", function EditEmployeeOtherSettingsComponent_Template_ng_select_itemsChange_42_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtwoWayBindingSet"] */ .DH7(ctx.listOfTimeFormats, $event) || (ctx.listOfTimeFormats = $event);
              return _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵresetView"] */ .Njj($event);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .k0s()()()()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .j41(44, "nb-accordion-item", null, 3)(46, "nb-accordion-item-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ .EFF(47);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .nI1(48, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .j41(49, "nb-accordion-item-body")(50, "div", 21)(51, "div", 15)(52, "div", 22)(53, "div", 23)(54, "nb-toggle", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ .EFF(55);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .nI1(56, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .j41(57, "button", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .nI1(58, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelement"] */ .nrm(59, "nb-icon", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .k0s()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .j41(60, "div", 22)(61, "div", 23)(62, "nb-toggle", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ .EFF(63);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .nI1(64, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .j41(65, "button", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .nI1(66, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelement"] */ .nrm(67, "nb-icon", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .k0s()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .j41(68, "div", 22)(69, "div", 23)(70, "nb-toggle", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ .EFF(71);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .nI1(72, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .j41(73, "button", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .nI1(74, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelement"] */ .nrm(75, "nb-icon", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .k0s()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .j41(76, "div", 29)(77, "nb-toggle", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ .EFF(78);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .nI1(79, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .j41(80, "button", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .nI1(81, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelement"] */ .nrm(82, "nb-icon", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .k0s()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .j41(83, "div", 22)(84, "div", 23)(85, "nb-toggle", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ .EFF(86);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .nI1(87, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .j41(88, "button", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .nI1(89, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelement"] */ .nrm(90, "nb-icon", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .k0s()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .j41(91, "div", 22)(92, "div", 23)(93, "nb-toggle", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ .EFF(94);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .nI1(95, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .j41(96, "button", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .nI1(97, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelement"] */ .nrm(98, "nb-icon", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .k0s()()()()()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .j41(99, "nb-accordion-item", null, 4)(101, "nb-accordion-item-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ .EFF(102);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .nI1(103, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .j41(104, "nb-accordion-item-body")(105, "div", 21)(106, "div", 15)(107, "div", 22)(108, "div", 23)(109, "nb-toggle", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ .EFF(110);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .nI1(111, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .j41(112, "button", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .nI1(113, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelement"] */ .nrm(114, "nb-icon", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .k0s()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .j41(115, "div", 22)(116, "div", 23)(117, "nb-toggle", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ .EFF(118);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .nI1(119, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .j41(120, "button", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .nI1(121, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelement"] */ .nrm(122, "nb-icon", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .k0s()()()()()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .j41(123, "nb-accordion-item", null, 5)(125, "nb-accordion-item-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ .EFF(126);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .nI1(127, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .j41(128, "nb-accordion-item-body")(129, "div", 14)(130, "div", 15)(131, "div", 16)(132, "div", 18)(133, "label", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ .EFF(134);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .nI1(135, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelement"] */ .nrm(136, "input", 37);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .nI1(137, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .j41(138, "div", 16)(139, "div", 18)(140, "label", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ .EFF(141);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .nI1(142, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelement"] */ .nrm(143, "input", 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .nI1(144, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .k0s()()()()()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .j41(145, "div", 39)(146, "button", 40);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ .EFF(147);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .nI1(148, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .k0s()()()();
          }
          if (rf & 2) {
            const general_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵreference"] */ .sdS(28);
            const timer_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵreference"] */ .sdS(45);
            const agent_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵreference"] */ .sdS(100);
            const integrations_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵreference"] */ .sdS(124);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Y8G("formGroup", ctx.form);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .bMT(5, 41, "EMPLOYEES_PAGE.EDIT_EMPLOYEE.SETTINGS_SECTION"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Y8G("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpureFunction1"] */ .eq3(105, _c5, general_r3 == null ? null : general_r3.expanded));
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .bMT(10, 43, "EMPLOYEES_PAGE.EDIT_EMPLOYEE.GENERAL_SETTINGS"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Y8G("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpureFunction1"] */ .eq3(107, _c5, timer_r4 == null ? null : timer_r4.expanded));
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .bMT(14, 45, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.TIMER_SETTINGS"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Y8G("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpureFunction1"] */ .eq3(109, _c5, agent_r5 == null ? null : agent_r5.expanded));
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .bMT(18, 47, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.AGENT_SETTINGS"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Y8G("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpureFunction1"] */ .eq3(111, _c5, integrations_r6 == null ? null : integrations_r6.expanded));
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .bMT(22, 49, "EMPLOYEES_PAGE.EDIT_EMPLOYEE.INTEGRATIONS"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .R7$(6);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Y8G("expanded", true);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .bMT(31, 51, "EMPLOYEES_PAGE.EDIT_EMPLOYEE.GENERAL_SETTINGS"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .R7$(10);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .bMT(41, 53, "FORM.LABELS.TIME_FORMAT"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtwoWayProperty"] */ .R50("items", ctx.listOfTimeFormats);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .bMT(43, 55, "FORM.PLACEHOLDERS.TIME_FORMAT"))("searchable", false)("clearable", false);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .bMT(48, 57, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.TIMER_SETTINGS"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .R7$(8);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .bMT(56, 59, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.ALLOW_MANUAL_TIME"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Y8G("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .bMT(58, 61, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.TOOLTIP.ALLOW_MANUAL_TIME_INFO"));
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .R7$(6);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .bMT(64, 63, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.ALLOW_MODIFY_TIME"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Y8G("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .bMT(66, 65, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.TOOLTIP.ALLOW_MODIFY_TIME_INFO"));
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .R7$(6);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .bMT(72, 67, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.ALLOW_DELETE_TIME"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Y8G("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .bMT(74, 69, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.TOOLTIP.ALLOW_DELETE_TIME_INFO"));
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .bMT(79, 71, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.ALLOW_SCREEN_CAPTURE"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Y8G("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .bMT(81, 73, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.ALLOW_SCREEN_CAPTURE_INFO"));
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .R7$(6);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .bMT(87, 75, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.TRACK_KEYBOARD_MOUSE_ACTIVITY"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Y8G("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .bMT(89, 77, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.TRACK_KEYBOARD_MOUSE_ACTIVITY_INFO"));
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .R7$(6);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .bMT(95, 79, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.TRACK_ALL_DISPLAYS"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Y8G("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .bMT(97, 81, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.TRACK_ALL_DISPLAYS_INFO"));
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .R7$(6);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .bMT(103, 83, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.AGENT_SETTINGS"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .R7$(8);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .bMT(111, 85, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.ALLOW_AGENT_APP_EXIT"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Y8G("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .bMT(113, 87, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.ALLOW_AGENT_APP_EXIT_INFO"));
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .R7$(6);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .bMT(119, 89, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.ALLOW_LOGOUT_FROM_AGENT_APP"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Y8G("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .bMT(121, 91, "ORGANIZATIONS_PAGE.EDIT.SETTINGS.ALLOW_LOGOUT_FROM_AGENT_APP_INFO"));
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .R7$(6);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .bMT(127, 93, "EMPLOYEES_PAGE.EDIT_EMPLOYEE.INTEGRATIONS"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .R7$(8);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .bMT(135, 95, "FORM.LABELS.UPWORK_ID"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .bMT(137, 97, "FORM.PLACEHOLDERS.UPWORK_ID"));
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .bMT(142, 99, "FORM.LABELS.LINKEDIN_ID"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .bMT(144, 101, "FORM.PLACEHOLDERS.LINKEDIN_ID"));
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .bMT(148, 103, "BUTTONS.SAVE"), " ");
          }
        },
        dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_8__/* .NbAccordionComponent */ .Ul7, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__/* .NbAccordionItemComponent */ .vx8, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__/* .NbAccordionItemHeaderComponent */ .Ig3, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__/* .NbAccordionItemBodyComponent */ .LHJ, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__/* .NbButtonComponent */ .YP2, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__/* .NbIconComponent */ .tHu, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__/* .NbInputDirective */ .i6h, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__/* .NbToggleComponent */ .YF2, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__/* .NbTooltipDirective */ .BmQ, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__/* .NgSelectComponent */ .vr, _angular_common__WEBPACK_IMPORTED_MODULE_10__/* .NgClass */ .YU, _angular_forms__WEBPACK_IMPORTED_MODULE_6__/* ["ɵNgNoValidate"] */ .qT, _angular_forms__WEBPACK_IMPORTED_MODULE_6__/* .DefaultValueAccessor */ .me, _angular_forms__WEBPACK_IMPORTED_MODULE_6__/* .NgControlStatus */ .BC, _angular_forms__WEBPACK_IMPORTED_MODULE_6__/* .NgControlStatusGroup */ .cb, _angular_forms__WEBPACK_IMPORTED_MODULE_6__/* .FormGroupDirective */ .j4, _angular_forms__WEBPACK_IMPORTED_MODULE_6__/* .FormControlName */ .JD, _packages_ui_core_shared_src_lib_modules_selectors_timezone_selector_timezone_selector_component__WEBPACK_IMPORTED_MODULE_11__/* .TimeZoneSelectorComponent */ .S, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__/* .TranslatePipe */ .D9],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%] {\n  height: 100%;\n}\n\n[_nghost-%COMP%]   .main-form[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: var(--gauzy-card-2);\n  display: flex;\n  justify-content: space-between;\n  padding: 20px;\n  overflow: hidden;\n  height: calc(100vh - 19.25rem);\n}\n[dir=ltr]   [_nghost-%COMP%]   .main-form[_ngcontent-%COMP%] {\n  padding-right: 8px;\n}\n[dir=rtl]   [_nghost-%COMP%]   .main-form[_ngcontent-%COMP%] {\n  padding-left: 8px;\n}\n\n.aside-nav[_ngcontent-%COMP%] {\n  width: 180px;\n  background-color: var(--gauzy-card-3);\n  padding: 13px 18px;\n  border-radius: var(--border-radius);\n  height: fit-content;\n}\n.aside-nav[_ngcontent-%COMP%]   .settings-section-header[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 17px;\n  letter-spacing: 0em;\n  text-align: left;\n  margin-bottom: 18px;\n}\n.aside-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  padding-left: 0;\n  padding-right: 0;\n  display: inline-flex;\n  flex-direction: column;\n  height: fit-content;\n}\n.aside-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline-flex;\n  padding: 10px 15px;\n  margin-bottom: 10px;\n  font-size: 13px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 16px;\n  letter-spacing: 0em;\n  text-align: left;\n  background: var(--gauzy-sidebar-background-3);\n  border-radius: var(--button-rectangle-border-radius);\n  list-style: none;\n  cursor: pointer;\n  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.15);\n}\n.aside-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%] {\n  background: var(--background-basic-color-1);\n  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.15) inset;\n}\n\n.actions[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n\n.fields-section[_ngcontent-%COMP%] {\n  width: calc(100% - 230px);\n}\n\n[_nghost-%COMP%]   .accordion-section[_ngcontent-%COMP%] {\n  overflow: auto;\n  max-height: calc(100% - 3rem);\n}\n[dir=ltr]   [_nghost-%COMP%]   .accordion-section[_ngcontent-%COMP%] {\n  padding-right: 8px;\n}\n[dir=rtl]   [_nghost-%COMP%]   .accordion-section[_ngcontent-%COMP%] {\n  padding-left: 8px;\n}\n\nnb-accordion[_ngcontent-%COMP%] {\n  box-shadow: none;\n}\nnb-accordion[_ngcontent-%COMP%]   nb-accordion-item-header[_ngcontent-%COMP%] {\n  border-bottom: none;\n  border-radius: 0.5rem;\n  padding-left: 20px;\n  padding-right: 20px;\n}\nnb-accordion[_ngcontent-%COMP%]   nb-accordion-item-header[_ngcontent-%COMP%]     nb-icon {\n  border-radius: 6px;\n  width: 23px;\n  height: 23px;\n  border: 1px solid rgba(66, 66, 66, 0.2);\n}\nnb-accordion[_ngcontent-%COMP%]   nb-accordion-item-header[_ngcontent-%COMP%], \nnb-accordion[_ngcontent-%COMP%]   nb-accordion-item-body[_ngcontent-%COMP%], \nnb-accordion[_ngcontent-%COMP%]   nb-accordion-item[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-3);\n}\nnb-accordion[_ngcontent-%COMP%]   nb-accordion-item-body[_ngcontent-%COMP%] {\n  padding-left: 15px;\n  padding-right: 15px;\n}\nnb-accordion[_ngcontent-%COMP%]   nb-accordion-item[_ngcontent-%COMP%] {\n  border-radius: 0.5rem;\n  margin-bottom: 20px;\n}\nnb-accordion[_ngcontent-%COMP%]   nb-accordion-item[_ngcontent-%COMP%]   .item-body[_ngcontent-%COMP%] {\n  padding: 15px;\n}\nnb-accordion[_ngcontent-%COMP%]   nb-accordion-item[_ngcontent-%COMP%]:first-of-type     .select-button, \nnb-accordion[_ngcontent-%COMP%]   nb-accordion-item[_ngcontent-%COMP%]:first-of-type     .ng-select-container {\n  background-color: var(--background-basic-color-1) !important;\n}\nnb-accordion[_ngcontent-%COMP%]   nb-accordion-item[_ngcontent-%COMP%]:first-of-type     .date-picker-form ng-select {\n  width: 60%;\n}\nnb-accordion[_ngcontent-%COMP%]   nb-accordion-item[_ngcontent-%COMP%]:first-of-type   .fields[_ngcontent-%COMP%] {\n  width: 75%;\n}\n@media only screen and (max-width: 767px) {\n  nb-accordion[_ngcontent-%COMP%]   nb-accordion-item[_ngcontent-%COMP%]:first-of-type   .fields[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\nnb-accordion[_ngcontent-%COMP%]   nb-accordion-item[_ngcontent-%COMP%]:first-of-type   .time-format-select[_ngcontent-%COMP%] {\n  width: 30%;\n}\nnb-accordion[_ngcontent-%COMP%]   nb-accordion-item[_ngcontent-%COMP%]:first-of-type   .row[_ngcontent-%COMP%] {\n  align-items: center;\n}\nnb-accordion[_ngcontent-%COMP%]   nb-accordion-item[_ngcontent-%COMP%]:nth-of-type(2)   .select-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n}\nnb-accordion[_ngcontent-%COMP%]   nb-accordion-item[_ngcontent-%COMP%]:nth-of-type(2)   .label[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\nnb-accordion[_ngcontent-%COMP%]   nb-accordion-item[_ngcontent-%COMP%]:nth-of-type(2)   .design-select[_ngcontent-%COMP%] {\n  width: 140px;\n  margin-right: 15px;\n}\n@media only screen and (max-width: 767px) {\n  nb-accordion[_ngcontent-%COMP%]   nb-accordion-item[_ngcontent-%COMP%]:nth-of-type(2)   .color-pick[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\nnb-accordion[_ngcontent-%COMP%]   nb-accordion-item[_ngcontent-%COMP%]:nth-of-type(3)   .row[_ngcontent-%COMP%] {\n  padding-left: 0 !important;\n  padding-right: 0 !important;\n}\nnb-accordion[_ngcontent-%COMP%]   nb-accordion-item[_ngcontent-%COMP%]:nth-of-type(3)   .row.fiscal-years[_ngcontent-%COMP%] {\n  width: 400px;\n  display: flex;\n  justify-content: space-between;\n  margin-left: -5px;\n  margin-right: -5px;\n}\n@media only screen and (max-width: 991px) {\n  nb-accordion[_ngcontent-%COMP%]   nb-accordion-item[_ngcontent-%COMP%]:nth-of-type(3)   .row.fiscal-years[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n}\n@media only screen and (max-width: 767px) {\n  nb-accordion[_ngcontent-%COMP%]   nb-accordion-item[_ngcontent-%COMP%]:nth-of-type(3)   .row.fiscal-years[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\nnb-accordion[_ngcontent-%COMP%]   nb-accordion-item[_ngcontent-%COMP%]:nth-of-type(3)   .row.fiscal-years[_ngcontent-%COMP%]   .year-pick[_ngcontent-%COMP%] {\n  width: 170px;\n}\n@media only screen and (max-width: 767px) {\n  nb-accordion[_ngcontent-%COMP%]   nb-accordion-item[_ngcontent-%COMP%]:nth-of-type(3)   .row.fiscal-years[_ngcontent-%COMP%]   .year-pick[_ngcontent-%COMP%] {\n    width: 49%;\n  }\n}\nnb-accordion[_ngcontent-%COMP%]   nb-accordion-item[_ngcontent-%COMP%]:nth-of-type(3)   .row.toggles[_ngcontent-%COMP%] {\n  width: 500px;\n  display: flex;\n  flex-direction: column;\n  margin-left: -5px;\n  margin-right: -5px;\n}\n@media only screen and (max-width: 991px) {\n  nb-accordion[_ngcontent-%COMP%]   nb-accordion-item[_ngcontent-%COMP%]:nth-of-type(3)   .row.toggles[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n}\n@media only screen and (max-width: 767px) {\n  nb-accordion[_ngcontent-%COMP%]   nb-accordion-item[_ngcontent-%COMP%]:nth-of-type(3)   .row.toggles[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\nnb-accordion[_ngcontent-%COMP%]   nb-accordion-item[_ngcontent-%COMP%]:nth-of-type(3)   .row.toggles[_ngcontent-%COMP%]   .invite-toggle[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n}\nnb-accordion[_ngcontent-%COMP%]   nb-accordion-item[_ngcontent-%COMP%]:nth-of-type(3)   .row.half-width-inputs[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  margin-bottom: 10px;\n  padding-left: 0;\n  padding-right: 0;\n}\n@media only screen and (max-width: 480px) {\n  nb-accordion[_ngcontent-%COMP%]   nb-accordion-item[_ngcontent-%COMP%]:nth-of-type(3)   .row.half-width-inputs[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\nnb-accordion[_ngcontent-%COMP%]   nb-accordion-item[_ngcontent-%COMP%]:nth-of-type(5)   .row[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding: 10px;\n}\nnb-accordion[_ngcontent-%COMP%]   nb-accordion-item[_ngcontent-%COMP%]:nth-of-type(6)   .row[_ngcontent-%COMP%] {\n  width: 50%;\n}\n@media only screen and (max-width: 767px) {\n  nb-accordion[_ngcontent-%COMP%]   nb-accordion-item[_ngcontent-%COMP%]:nth-of-type(6)   .row[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\nnb-accordion[_ngcontent-%COMP%]   nb-accordion-item[_ngcontent-%COMP%]:nth-of-type(6)   .form-group[_ngcontent-%COMP%] {\n  width: 100%;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n@media only screen and (max-width: 991px) {\n  nb-accordion[_ngcontent-%COMP%]   nb-accordion-item[_ngcontent-%COMP%]:nth-of-type(6)   .form-group[_ngcontent-%COMP%] {\n    padding-right: 0;\n    padding-left: 0;\n  }\n}\nnb-accordion[_ngcontent-%COMP%]   nb-accordion-item[_ngcontent-%COMP%]:nth-of-type(7)   .col-6[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n@media only screen and (max-width: 480px) {\n  nb-accordion[_ngcontent-%COMP%]   nb-accordion-item[_ngcontent-%COMP%]:nth-of-type(7)   .row[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n@media only screen and (max-width: 991px) {\n  .row[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: space-between;\n    margin-left: 0;\n    margin-right: 0;\n  }\n  .col-6[_ngcontent-%COMP%] {\n    padding-right: 0;\n    padding-left: 0;\n  }\n  nb-accordion[_ngcontent-%COMP%]   nb-accordion-item-body[_ngcontent-%COMP%] {\n    padding-left: 0;\n    padding-right: 0;\n  }\n  nb-accordion[_ngcontent-%COMP%]   nb-accordion-item[_ngcontent-%COMP%]:nth-of-type(2)   .select-wrapper[_ngcontent-%COMP%] {\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n  }\n  nb-accordion[_ngcontent-%COMP%]   nb-accordion-item[_ngcontent-%COMP%]:nth-of-type(2)   .design-select[_ngcontent-%COMP%] {\n    width: 49%;\n    margin-right: 0;\n  }\n}\n@media only screen and (max-width: 767px) {\n  .col-6[_ngcontent-%COMP%] {\n    padding-right: 0;\n  }\n  .main-form[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .fields-section[_ngcontent-%COMP%] {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n  }\n  .actions[_ngcontent-%COMP%] {\n    order: 2;\n    margin-bottom: 0;\n  }\n}\n@media only screen and (max-width: 480px) {\n  .col-6[_ngcontent-%COMP%] {\n    max-width: 100%;\n    width: 100%;\n    min-width: 100%;\n    margin-bottom: 5px;\n  }\n  .row[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n[_nghost-%COMP%]     nb-toggle {\n  padding: 10px;\n  border: 1px solid var(--gauzy-border-default-color);\n  border-radius: var(--border-radius);\n}\n[_nghost-%COMP%]     nb-toggle > label {\n  margin-bottom: 0;\n}\n\n[_nghost-%COMP%]     .toggle {\n  border: 1px solid #7e7e8f !important;\n  background-color: #7e7e8f !important;\n}\n[_nghost-%COMP%]     .toggle.checked {\n  background-color: var(--text-primary-color) !important;\n  border: 1px solid var(--text-primary-color) !important;\n}\n[_nghost-%COMP%]     .toggle.checked + span {\n  color: var(--text-primary-color);\n}"]
      });
    }
  };
  return EditEmployeeOtherSettingsComponent;
})();
EditEmployeeOtherSettingsComponent = EditEmployeeOtherSettingsComponent_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .UntilDestroy */ .d)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__metadata */ .Sn)("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_5__/* .ChangeDetectorRef */ .gRc, _angular_forms__WEBPACK_IMPORTED_MODULE_6__/* .FormBuilder */ .ok, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_7__/* .EmployeeStore */ .oO])], EditEmployeeOtherSettingsComponent);


/***/ }),

/***/ 761:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   U: () => (/* binding */ EditEmployeeComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(64411);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26860);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9620);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(19159);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71181);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(57733);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(72781);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(73246);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(23423);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(19223);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(17785);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(26024);
/* harmony import */ var _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38546);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(34187);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(71924);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(54263);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(14572);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(56383);
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(79475);
/* harmony import */ var _packages_ui_core_shared_src_lib_components_back_navigation_back_navigation_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(90910);
/* harmony import */ var _packages_ui_core_shared_src_lib_directives_img_directive__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(71466);
/* harmony import */ var _packages_ui_core_shared_src_lib_favorite_toggle_favorite_toggle_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(6421);
/* harmony import */ var _edit_employee_profile_edit_employee_profile_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80589);
























const _c0 = () => ["PUBLIC_PAGE_EDIT"];
function EditEmployeeComponent_div_2_nb_icon_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(0, "nb-icon", 21);
  }
}
function EditEmployeeComponent_div_2_ngx_favorite_toggle_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "ngx-favorite-toggle", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("favoriteToggled", function EditEmployeeComponent_div_2_ngx_favorite_toggle_12_Template_ngx_favorite_toggle_favoriteToggled_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx_r2.onFavoriteToggled($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("entityType", "Employee")("entityId", ctx_r2.selectedEmployee.id)("entityName", ctx_r2.selectedEmployee.user == null ? null : ctx_r2.selectedEmployee.user.name)("showLabel", false);
  }
}
function EditEmployeeComponent_div_2_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("click", function EditEmployeeComponent_div_2_ng_template_16_Template_span_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx_r2.editPublicPage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(1, "nb-icon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(3, 1, "ORGANIZATIONS_PAGE.EDIT_PUBLIC_PAGE"), " ");
  }
}
function EditEmployeeComponent_div_2_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(2, 2, "FORM.USERNAME"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .JRh(ctx_r2.selectedEmployee == null ? null : ctx_r2.selectedEmployee.user == null ? null : ctx_r2.selectedEmployee.user.username);
  }
}
function EditEmployeeComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "div", 6)(1, "div", 7)(2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(3, "ngx-back-navigation");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(5, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(6, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(7, EditEmployeeComponent_div_2_nb_icon_7_Template, 1, 0, "nb-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(8, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(10, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(12, EditEmployeeComponent_div_2_ngx_favorite_toggle_12_Template, 1, 4, "ngx-favorite-toggle", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(13, "div", 9)(14, "div", 16)(15, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(16, EditEmployeeComponent_div_2_ng_template_16_Template, 4, 3, "ng-template", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(17, EditEmployeeComponent_div_2_div_17_Template, 5, 4, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(18, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(20, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(21, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("src", (ctx_r2.selectedEmployee == null ? null : ctx_r2.selectedEmployee.user == null ? null : ctx_r2.selectedEmployee.user.image == null ? null : ctx_r2.selectedEmployee.user.image.fullUrl) || (ctx_r2.selectedEmployee == null ? null : ctx_r2.selectedEmployee.user == null ? null : ctx_r2.selectedEmployee.user.imageUrl), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵsanitizeUrl"] */ .B4B);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r2.selectedEmployee == null ? null : ctx_r2.selectedEmployee.isVerified);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", ctx_r2.selectedEmployee == null ? null : ctx_r2.selectedEmployee.user == null ? null : ctx_r2.selectedEmployee.user.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", ctx_r2.selectedEmployee == null ? null : ctx_r2.selectedEmployee.organizationPosition == null ? null : ctx_r2.selectedEmployee.organizationPosition.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r2.selectedEmployee);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngxPermissionsOnly", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpureFunction0"] */ .lJ4(11, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r2.selectedEmployee == null ? null : ctx_r2.selectedEmployee.user == null ? null : ctx_r2.selectedEmployee.user.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(20, 9, "FORM.EMAIL"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .JRh(ctx_r2.selectedEmployee == null ? null : ctx_r2.selectedEmployee.user == null ? null : ctx_r2.selectedEmployee.user.email);
  }
}
function EditEmployeeComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(2, 1, "EMPLOYEES_PAGE.SELECT_EMPLOYEE_MSG"));
  }
}
let EditEmployeeComponent = class EditEmployeeComponent extends _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_2__/* .TranslationBaseComponent */ .K {
  constructor(route, router, store, translateService, cdr, _urlSerializer, _location, _errorHandlingService) {
    super(translateService);
    this.route = route;
    this.router = router;
    this.store = store;
    this.translateService = translateService;
    this.cdr = cdr;
    this._urlSerializer = _urlSerializer;
    this._location = _location;
    this._errorHandlingService = _errorHandlingService;
  }
  ngOnInit() {
    this.store.selectedEmployee$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__/* .debounceTime */ .B)(200), (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_4__/* .distinctUntilChange */ .nI)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .filter */ .p)(employee => !!employee && !!employee.id), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .M)(employee => this.selectedEmployeeFromHeader = employee), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .M)(({
      id
    }) => {
      this.cdr.detectChanges();
      this.router.navigate(['/pages/employees/edit', id, this.route.firstChild.snapshot.routeConfig.path]);
    }), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__/* .untilDestroyed */ .s)(this)).subscribe();
    this.store.selectedOrganization$.pipe((0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_4__/* .distinctUntilChange */ .nI)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .filter */ .p)(organization => !!organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .M)(organization => this.organization = organization), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__/* .untilDestroyed */ .s)(this)).subscribe();
  }
  ngAfterViewInit() {
    // Watch for both route data and parameter changes to handle navigation between different employees
    (0,rxjs__WEBPACK_IMPORTED_MODULE_8__/* .combineLatest */ .z)([this.route.data, this.route.params]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__/* .debounceTime */ .B)(300), (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_4__/* .distinctUntilChange */ .nI)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .filter */ .p)(([data, params]) => !!data && !!data.employee && !!params && !!params.id), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .M)(([data, params]) => {
      // Clear previous employee data when navigating to a different employee
      if (this.selectedEmployee && this.selectedEmployee.id !== params.id) {
        this.selectedEmployee = null;
      }
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .M)(([{
      employee
    }, params]) => this.selectedEmployee = employee), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .M)(([{
      employee
    }, params]) => {
      try {
        if (employee.startedWorkOn) {
          setTimeout(() => {
            this.store.selectedEmployee = {
              id: employee.id,
              firstName: employee.user.firstName,
              lastName: employee.user.lastName,
              fullName: employee.user.name,
              imageUrl: employee.user.imageUrl,
              tags: employee.user.tags || [],
              skills: employee.skills || []
            };
          }, 500);
        }
      } catch (error) {
        this.router.navigate(['/pages/employees']);
      }
    }), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__/* .untilDestroyed */ .s)(this)).subscribe();
  }
  /**
   * Update the image asset for the selected employee
   * @param image The image asset to update
   */
  updateImage(image) {
    try {
      if (image) {
        // Update the image for the selected employee
        this.selectedEmployee.user.image = image;
        // Alternatively, update the selectedEmployee in the store with the new image URL
        this.store.selectedEmployee = {
          ...this.store.selectedEmployee,
          imageUrl: image?.fullUrl
        };
      }
    } catch (error) {
      console.error('Error while updating profile avatar:', error);
      // Handle and log errors
      this._errorHandlingService.handleError(error);
    }
  }
  /**
   * Create URL tree for edit public employee page
   *
   * @returns
   */
  editPublicPage() {
    if (!this.organization || !this.selectedEmployee) {
      return;
    }
    const {
      id,
      profile_link
    } = this.organization;
    const {
      id: employeeId,
      profile_link: employeeProfileLink
    } = this.selectedEmployee;
    // The call to Location.prepareExternalUrl is the key thing here.
    let tree = this.router.createUrlTree([`/share/organization/${profile_link}/${id}/${employeeProfileLink}/${employeeId}`]);
    // As far as I can tell you don't really need the UrlSerializer.
    const externalUrl = this._location.prepareExternalUrl(this._urlSerializer.serialize(tree));
    window.open(externalUrl, '_blank');
  }
  /**
   * Handle favorite toggle event
   */
  onFavoriteToggled(_event) {
    // The FavoriteToggleComponent already shows success/error messages
    // Additional logic can be added here if needed (analytics, state updates, etc.)
  }
  ngOnDestroy() {
    this.store.user$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .filter */ .p)(user => !!user), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .M)(user => {
      if (!!user && this.store.hasPermission(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_9__/* .PermissionsEnum */ .U.CHANGE_SELECTED_EMPLOYEE)) {
        this.store.selectedEmployee = _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_10__/* .ALL_EMPLOYEES_SELECTED */ .O;
      }
    }), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__/* .untilDestroyed */ .s)(this)).subscribe();
  }
  static {
    this.ɵfac = function EditEmployeeComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || EditEmployeeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_router__WEBPACK_IMPORTED_MODULE_11__/* .ActivatedRoute */ .nX), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_router__WEBPACK_IMPORTED_MODULE_11__/* .Router */ .Ix), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_12__/* .Store */ .il), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__/* .TranslateService */ .c$), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* .ChangeDetectorRef */ .gRc), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_router__WEBPACK_IMPORTED_MODULE_11__/* .UrlSerializer */ .Sd), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_common__WEBPACK_IMPORTED_MODULE_14__/* .Location */ .aZ), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_15__/* .ErrorHandlingService */ .X));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineComponent"] */ .VBU({
      type: EditEmployeeComponent,
      selectors: [["ngx-edit-employee"]],
      standalone: false,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
      decls: 7,
      vars: 2,
      consts: [["noName", ""], [1, "employee-edit"], [1, "header"], ["class", "header-container", 4, "ngIf", "ngIfElse"], [1, "p-0"], [3, "updatedImage"], [1, "header-container"], [1, "d-flex", "align-items-start", "justify-content-between", "w-100"], [1, "d-flex", "align-items-start"], [1, "employee-info"], ["alt", "Employee Avatar", 1, "employee-image", 3, "src"], [1, "employee-details", "flex-column", "align-items-start"], ["class", "icon-verified", "icon", "checkmark-circle-2", "status", "primary", 4, "ngIf"], [1, "employee-name"], [1, "employee-position"], ["size", "small", "status", "basic", "spacing", "detail", 3, "entityType", "entityId", "entityName", "showLabel", "favoriteToggled", 4, "ngIf"], [1, "employee-details"], [1, "edit-public-page"], [3, "ngxPermissionsOnly"], ["class", "transparent", 4, "ngIf"], [1, "transparent"], ["icon", "checkmark-circle-2", "status", "primary", 1, "icon-verified"], ["size", "small", "status", "basic", "spacing", "detail", 3, "favoriteToggled", "entityType", "entityId", "entityName", "showLabel"], [1, "edit-public-button", 3, "click"], ["icon", "edit-outline", 1, "mr-1"]],
      template: function EditEmployeeComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetCurrentView"] */ .RV6();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "nb-card", 1)(1, "nb-card-header", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(2, EditEmployeeComponent_div_2_Template, 23, 12, "div", 3)(3, EditEmployeeComponent_ng_template_3_Template, 3, 3, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplateRefExtractor"] */ .C5r);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(5, "nb-card-body", 4)(6, "ngx-edit-employee-profile", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("updatedImage", function EditEmployeeComponent_Template_ngx_edit_employee_profile_updatedImage_6_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx.updateImage($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()();
        }
        if (rf & 2) {
          const noName_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵreference"] */ .sdS(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.selectedEmployeeFromHeader && ctx.selectedEmployeeFromHeader.id)("ngIfElse", noName_r5);
        }
      },
      dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_16__/* .NbCardComponent */ .SrT, _nebular_theme__WEBPACK_IMPORTED_MODULE_16__/* .NbCardBodyComponent */ .KH5, _nebular_theme__WEBPACK_IMPORTED_MODULE_16__/* .NbCardHeaderComponent */ .zJv, _nebular_theme__WEBPACK_IMPORTED_MODULE_16__/* .NbIconComponent */ .tHu, ngx_permissions__WEBPACK_IMPORTED_MODULE_17__/* .NgxPermissionsDirective */ .f6, _angular_common__WEBPACK_IMPORTED_MODULE_18__/* .NgIf */ .bT, _packages_ui_core_shared_src_lib_components_back_navigation_back_navigation_component__WEBPACK_IMPORTED_MODULE_19__/* .BackNavigationComponent */ .r, _packages_ui_core_shared_src_lib_directives_img_directive__WEBPACK_IMPORTED_MODULE_20__/* .ImgDirective */ .z, _packages_ui_core_shared_src_lib_favorite_toggle_favorite_toggle_component__WEBPACK_IMPORTED_MODULE_21__/* .FavoriteToggleComponent */ .M, _edit_employee_profile_edit_employee_profile_component__WEBPACK_IMPORTED_MODULE_0__/* .EditEmployeeProfileComponent */ .F, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__/* .TranslatePipe */ .D9],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.edit-icon[_ngcontent-%COMP%] {\n  margin-left: 30px;\n  position: relative;\n  width: 36px;\n}\n.edit-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  position: absolute;\n}\n.edit-icon[_ngcontent-%COMP%]   nb-icon[_ngcontent-%COMP%] {\n  position: absolute;\n}\n\n.employee-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  object-fit: cover;\n}\n\n.edit-icon[_ngcontent-%COMP%] {\n  margin-left: 30px;\n  position: relative;\n  width: 36px;\n}\n.edit-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  position: absolute;\n}\n.edit-icon[_ngcontent-%COMP%]   nb-icon[_ngcontent-%COMP%] {\n  position: absolute;\n}\n\n.edit-public-page[_ngcontent-%COMP%]   .edit-public-button[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  padding: 2px 12px;\n  box-sizing: border-box;\n  border-radius: var(--button-rectangle-border-radius);\n  border: 2px solid var(--color-primary-transparent-default);\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 11px;\n  letter-spacing: 0em;\n  text-align: left;\n  color: var(--text-primary-color);\n  cursor: pointer;\n}\n\n.setting-name[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: bold;\n}\n\n.body-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 35px;\n}\n\n.mutation-card.setting-block[_ngcontent-%COMP%] {\n  background: #eaf3fc;\n}\n\n.transparent[_ngcontent-%COMP%] {\n  opacity: 0.7;\n}\n\n.settings-body[_ngcontent-%COMP%] {\n  padding: 35px;\n}\n\n.sub-header[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  font-weight: bold;\n}\n\n.header-content[_ngcontent-%COMP%] {\n  display: flex;\n}\n.header-content[_ngcontent-%COMP%]   .header-info[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 560px;\n  padding-left: 30px;\n}\n\n.icon-verified[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  height: 100%;\n  border-radius: var(--border-radius);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-header[_ngcontent-%COMP%] {\n  flex: 0 1 auto;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  overflow: hidden;\n  height: calc(100vh - var(--header-height) - var(--footer-height) - 11.5rem + 3.5rem);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-footer[_ngcontent-%COMP%] {\n  flex: 0 1 auto;\n}\n[_nghost-%COMP%]     input, \n[_nghost-%COMP%]     nb-select.appearance-outline.status-basic .select-button, \n[_nghost-%COMP%]     .ng-select .ng-select-container {\n  background-color: var(--gauzy-card-1) !important;\n  border: none;\n  height: 42px !important;\n}\n[_nghost-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder, \n[_nghost-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {\n  top: unset !important;\n}\n[_nghost-%COMP%]     label, \n[_nghost-%COMP%]     .label {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  color: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]     textarea {\n  background-color: var(--gauzy-card-1) !important;\n  border: none;\n}\n[_nghost-%COMP%]     .ng-select .ng-select-container input, \n[_nghost-%COMP%]     nb-tag-list input {\n  background-color: unset !important;\n}", "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.header[_ngcontent-%COMP%] {\n  padding: 30px;\n}\n.header[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.header[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   .employee-info[_ngcontent-%COMP%], \n.header[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   .org-info[_ngcontent-%COMP%] {\n  display: flex;\n}\n.header[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   .employee-info[_ngcontent-%COMP%]   .employee-image[_ngcontent-%COMP%], \n.header[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   .employee-info[_ngcontent-%COMP%]   .org-image[_ngcontent-%COMP%], \n.header[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   .org-info[_ngcontent-%COMP%]   .employee-image[_ngcontent-%COMP%], \n.header[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   .org-info[_ngcontent-%COMP%]   .org-image[_ngcontent-%COMP%] {\n  max-width: 70px;\n  max-height: 70px;\n  border-radius: 13px;\n  margin-right: 24px;\n  margin-left: 24px;\n}\n.header[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   .employee-details[_ngcontent-%COMP%], \n.header[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   .org-details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.header[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   .employee-details[_ngcontent-%COMP%]   .employee-name[_ngcontent-%COMP%], \n.header[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   .employee-details[_ngcontent-%COMP%]   .org-name[_ngcontent-%COMP%], \n.header[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   .org-details[_ngcontent-%COMP%]   .employee-name[_ngcontent-%COMP%], \n.header[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   .org-details[_ngcontent-%COMP%]   .org-name[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 18px;\n}\n.header[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   .employee-details[_ngcontent-%COMP%]   .employee-position[_ngcontent-%COMP%], \n.header[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   .employee-details[_ngcontent-%COMP%]   .org-position[_ngcontent-%COMP%], \n.header[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   .org-details[_ngcontent-%COMP%]   .employee-position[_ngcontent-%COMP%], \n.header[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   .org-details[_ngcontent-%COMP%]   .org-position[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\n.open[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.body[_ngcontent-%COMP%] {\n  padding: 36px;\n  display: flex;\n  justify-content: space-between;\n}\n.body[_ngcontent-%COMP%]   .half-content[_ngcontent-%COMP%] {\n  width: 49%;\n}\n.body[_ngcontent-%COMP%]   .info-block[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 20px;\n  width: 100%;\n  height: 84px;\n  border-radius: 4px;\n  padding: 29px;\n  background-color: #f6f9fc;\n  cursor: pointer;\n}\n.body[_ngcontent-%COMP%]   .info-block[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 2px 9px 0 rgba(0, 0, 0, 0.26);\n  transform: translateY(-1px);\n}\n.body[_ngcontent-%COMP%]   .info-block[_ngcontent-%COMP%]   .info-text[_ngcontent-%COMP%], \n.body[_ngcontent-%COMP%]   .info-block[_ngcontent-%COMP%]   .info-value[_ngcontent-%COMP%] {\n  display: flex;\n  font-size: 18px;\n  color: #333333;\n}\n.body[_ngcontent-%COMP%]   .info-block[_ngcontent-%COMP%]   .info-text[_ngcontent-%COMP%]   .profit-positive-color[_ngcontent-%COMP%], \n.body[_ngcontent-%COMP%]   .info-block[_ngcontent-%COMP%]   .info-value[_ngcontent-%COMP%]   .profit-positive-color[_ngcontent-%COMP%] {\n  color: #66de0b;\n}\n.body[_ngcontent-%COMP%]   .info-block[_ngcontent-%COMP%]   .info-text[_ngcontent-%COMP%]   .profit-negative-color[_ngcontent-%COMP%], \n.body[_ngcontent-%COMP%]   .info-block[_ngcontent-%COMP%]   .info-value[_ngcontent-%COMP%]   .profit-negative-color[_ngcontent-%COMP%] {\n  color: #ff7b00;\n}\n.body[_ngcontent-%COMP%]   .info-block[_ngcontent-%COMP%]   .info-text[_ngcontent-%COMP%]   .expense-color[_ngcontent-%COMP%], \n.body[_ngcontent-%COMP%]   .info-block[_ngcontent-%COMP%]   .info-value[_ngcontent-%COMP%]   .expense-color[_ngcontent-%COMP%] {\n  color: #dbc300;\n}\n.body[_ngcontent-%COMP%]   .info-block[_ngcontent-%COMP%]   .info-text[_ngcontent-%COMP%]   .income-color[_ngcontent-%COMP%], \n.body[_ngcontent-%COMP%]   .info-block[_ngcontent-%COMP%]   .info-value[_ngcontent-%COMP%]   .income-color[_ngcontent-%COMP%] {\n  color: #089c17;\n}\n.body[_ngcontent-%COMP%]   .info-block[_ngcontent-%COMP%]   .info-text[_ngcontent-%COMP%] {\n  flex-direction: column;\n  justify-content: center;\n}\n.body[_ngcontent-%COMP%]   .info-block[_ngcontent-%COMP%]   .info-value[_ngcontent-%COMP%] {\n  flex-direction: row;\n  align-items: center;\n}\n.body[_ngcontent-%COMP%]   .info-block[_ngcontent-%COMP%]   .info-value[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 24px;\n  margin-right: 12px;\n}\n.body[_ngcontent-%COMP%]   .bonus[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  width: 100%;\n}\n.body[_ngcontent-%COMP%]   .bonus[_ngcontent-%COMP%]   .bonus-value[_ngcontent-%COMP%] {\n  margin-right: 39px;\n}\n.body[_ngcontent-%COMP%]   .bonus[_ngcontent-%COMP%]   .bonus-value[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:first-child {\n  text-align: right;\n  font-size: 16px;\n  margin-bottom: 15px;\n  margin-right: 3px;\n}\n.body[_ngcontent-%COMP%]   .bonus[_ngcontent-%COMP%]   .bonus-value[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:last-child {\n  font-size: 46px;\n  font-weight: bold;\n  color: #0091ff;\n}\n.body[_ngcontent-%COMP%]   .bonus[_ngcontent-%COMP%]   .bonus-value[_ngcontent-%COMP%]   .negative-bonus-color[_ngcontent-%COMP%] {\n  color: red;\n}\n.body[_ngcontent-%COMP%]   .bonus[_ngcontent-%COMP%]   .bonus-disclaimer[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  margin-right: 39px;\n  font-size: 0.7rem;\n  width: 215px;\n}\n\n  nb-route-tabset .route-tab .tab-link {\n  border-radius: var(--border-radius) var(--border-radius) 0 0;\n}\n  nb-route-tabset .route-tab .tab-link svg {\n  fill: var(--text-primary-color);\n}\n  nb-route-tabset .route-tab .tab-link span {\n  display: inline-block;\n  text-transform: initial;\n}\n  nb-route-tabset .route-tab .tab-link span:first-letter {\n  text-transform: uppercase;\n}"]
    });
  }
};
EditEmployeeComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_22__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__/* .UntilDestroy */ .d)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_22__/* .__metadata */ .Sn)("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_11__/* .ActivatedRoute */ .nX, _angular_router__WEBPACK_IMPORTED_MODULE_11__/* .Router */ .Ix, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_12__/* .Store */ .il, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__/* .TranslateService */ .c$, _angular_core__WEBPACK_IMPORTED_MODULE_1__/* .ChangeDetectorRef */ .gRc, _angular_router__WEBPACK_IMPORTED_MODULE_11__/* .UrlSerializer */ .Sd, _angular_common__WEBPACK_IMPORTED_MODULE_14__/* .Location */ .aZ, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_15__/* .ErrorHandlingService */ .X])], EditEmployeeComponent);


/***/ }),

/***/ 4255:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ EditEmployeeEmploymentComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(73014);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(64411);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(10936);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(23423);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(26024);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57733);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71181);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(72781);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(73246);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(98106);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(71924);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(14486);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(85317);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(51530);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(31324);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(93573);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(15480);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var ckeditor4_angular__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(27697);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(56383);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(55567);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(14572);
/* harmony import */ var _packages_ui_core_shared_src_lib_tags_tags_color_input_tags_color_input_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(62177);
/* harmony import */ var _packages_ui_core_shared_src_lib_skills_skills_input_skills_input_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(63592);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(19223);

var EditEmployeeEmploymentComponent_1;



















function EditEmployeeEmploymentComponent_form_3_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 5)(1, "div", 29)(2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(4, 1, "FORM.NOTIFICATIONS.STARTED_WORK_ON"), " ");
  }
}
function EditEmployeeEmploymentComponent_form_3_ng_option_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "ng-option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const empL_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("value", empL_r2.level);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(empL_r2.level);
  }
}
function EditEmployeeEmploymentComponent_form_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "form", 3)(1, "div", 4)(2, "div", 5)(3, "div", 6)(4, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(7, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(9, "nb-datepicker", null, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(11, EditEmployeeEmploymentComponent_form_3_div_11_Template, 5, 3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(12, "div", 4)(13, "div", 10)(14, "div", 6)(15, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(18, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(20, "div", 4)(21, "div", 10)(22, "div", 6)(23, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(25, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(26, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(27, "ckeditor", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(28, "div", 4)(29, "div", 5)(30, "div", 6)(31, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(33, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(34, "ng-select", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(35, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(36, "div", 5)(37, "div", 6)(38, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(40, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(41, "ng-select", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(42, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(43, EditEmployeeEmploymentComponent_form_3_ng_option_43_Template, 2, 2, "ng-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(44, "div", 4)(45, "div", 10)(46, "div", 6)(47, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(49, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(50, "ng-select", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(51, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(52, "div", 10)(53, "div", 6)(54, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(56, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(57, "ng-select", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(58, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(59, "div", 4)(60, "div", 5)(61, "div", 6)(62, "ga-tags-color-input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("selectedTagsEvent", function EditEmployeeEmploymentComponent_form_3_Template_ga_tags_color_input_selectedTagsEvent_62_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r2.selectedTagsHandler($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(63, "div", 5)(64, "div", 6)(65, "ngx-skills-input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("selectedSkillsEvent", function EditEmployeeEmploymentComponent_form_3_Template_ngx_skills_input_selectedSkillsEvent_65_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r2.selectedSkillsHandler($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(66, "div", 4)(67, "div", 10)(68, "div", 6)(69, "nb-checkbox", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(71, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(72, "div", 27)(73, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function EditEmployeeEmploymentComponent_form_3_Template_button_click_73_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r2.submitForm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(75, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
  }
  if (rf & 2) {
    const datepicker_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(10);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("formGroup", ctx_r2.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(6, 32, "FORM.LABELS.START_DATE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpropertyInterpolate"] */ .FS9("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(8, 34, "FORM.PLACEHOLDERS.START_DATE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("nbDatepicker", datepicker_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r2.form.get("startedWorkOn").value === null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(17, 36, "FORM.LABELS.SHORT_DESCRIPTION"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpropertyInterpolate"] */ .FS9("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(19, 38, "FORM.PLACEHOLDERS.EG_FULL_STACK_WEB_DEVELOPER"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(25, 40, "FORM.LABELS.DESCRIPTION"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("formControl", ctx_r2.form.get("description"))("config", ctx_r2.ckConfig);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(33, 42, "EMPLOYEES_PAGE.EDIT_EMPLOYEE.EMPLOYMENT_TYPE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpropertyInterpolate"] */ .FS9("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(35, 44, "EMPLOYEES_PAGE.EDIT_EMPLOYEE.EMPLOYMENT_TYPE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("items", ctx_r2.employmentTypes)("searchable", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(40, 46, "EMPLOYEES_PAGE.EDIT_EMPLOYEE.EMPLOYEE_LEVEL"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpropertyInterpolate1"] */ .Mz_("placeholder", "", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(42, 48, "FORM.LABELS.EMPLOYEE_LEVEL"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx_r2.employeeLevels);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(49, 50, "EMPLOYEES_PAGE.EDIT_EMPLOYEE.DEPARTMENT"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpropertyInterpolate"] */ .FS9("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(51, 52, "FORM.PLACEHOLDERS.ALL_DEPARTMENTS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("items", ctx_r2.departments)("searchable", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(56, 54, "EMPLOYEES_PAGE.EDIT_EMPLOYEE.POSITION"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpropertyInterpolate"] */ .FS9("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(58, 56, "FORM.PLACEHOLDERS.ALL_POSITIONS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("items", ctx_r2.positions)("searchable", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("selectedTags", ctx_r2.form.get("tags").value)("isOrgLevel", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("selectedSkills", ctx_r2.form.get("skills").value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(71, 58, "EMPLOYEES_PAGE.EDIT_EMPLOYEE.DISPLAY_BONUS_ANONYMOUSLY"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("disabled", ctx_r2.form.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(75, 60, "BUTTONS.SAVE"), " ");
  }
}
let EditEmployeeEmploymentComponent = /*#__PURE__*/(() => {
  let EditEmployeeEmploymentComponent = class EditEmployeeEmploymentComponent {
    static {
      EditEmployeeEmploymentComponent_1 = this;
    }
    /**
     * Builds and returns an Angular UntypedFormGroup with various form controls.
     *
     * @param fb - An instance of Angular's UntypedFormBuilder, used to create form groups and form controls.
     * @returns An UntypedFormGroup containing a collection of predefined form controls.
     */
    static buildForm(fb) {
      // Create a new form group with a collection of form controls, all initialized to empty arrays.
      const form = fb.group({
        organizationEmploymentTypes: [],
        // Employment types within an organization.
        employeeLevel: [],
        // Levels of employees.
        anonymousBonus: [],
        // Anonymous bonuses for employees.
        organizationDepartments: [],
        // Organization's departments.
        organizationPosition: [],
        // Positions within an organization.
        tags: [],
        // Tags for categorization.
        skills: [],
        // Skills required or obtained.
        short_description: [],
        // A brief description.
        description: [],
        // A detailed description.
        startedWorkOn: [] // Date when work started.
      });
      // Return the constructed form group.
      return form;
    }
    constructor(fb, store, toastrService, employeeStore, employeeLevelService, organizationDepartmentsService, organizationPositionsService, organizationEmploymentTypeService) {
      this.fb = fb;
      this.store = store;
      this.toastrService = toastrService;
      this.employeeStore = employeeStore;
      this.employeeLevelService = employeeLevelService;
      this.organizationDepartmentsService = organizationDepartmentsService;
      this.organizationPositionsService = organizationPositionsService;
      this.organizationEmploymentTypeService = organizationEmploymentTypeService;
      this.employmentTypes = [];
      this.employeeLevels = [];
      this.departments = [];
      this.positions = [];
      this.ckConfig = {
        ..._gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_1__/* .ckEditorConfig */ .a,
        height: '200'
      };
      this.form = EditEmployeeEmploymentComponent_1.buildForm(this.fb);
    }
    ngOnInit() {
      const storeOrganization$ = this.store.selectedOrganization$;
      const storeEmployee$ = this.employeeStore.selectedEmployee$;
      (0,rxjs__WEBPACK_IMPORTED_MODULE_2__/* .combineLatest */ .z)([storeOrganization$, storeEmployee$]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .debounceTime */ .B)(300), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .filter */ .p)(([organization, employee]) => !!organization && !!employee), (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_5__/* .distinctUntilChange */ .nI)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .M)(([organization, employee]) => {
        this.organization = organization;
        this.selectedEmployee = employee;
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .M)(() => this._initializeForm(this.selectedEmployee)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .M)(() => this.initialMethods()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__/* .untilDestroyed */ .s)(this)).subscribe();
    }
    initialMethods() {
      this.getPositions();
      this.getEmploymentTypes();
      this.getEmployeeLevels();
      this.getDepartments();
    }
    /**
     * Fetches the list of departments for a given organization and tenant.
     * Stores the retrieved departments in a class-level property.
     */
    getDepartments() {
      var _this = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A)(function* () {
        // Extract the organization ID and tenant ID from the class's organization property
        const {
          id: organizationId,
          tenantId
        } = _this.organization;
        // Fetch departments using the organizationDepartmentsService with provided tenant and organization IDs
        const {
          items
        } = yield _this.organizationDepartmentsService.getAll([], {
          tenantId,
          organizationId
        });
        // Store the fetched list of departments in the class-level property
        _this.departments = items;
      })();
    }
    /**
     * Fetches the list of positions for a given organization and tenant.
     * Stores the retrieved positions in a class-level property.
     */
    getPositions() {
      var _this2 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A)(function* () {
        // Extract the organization ID and tenant ID from the class's organization property
        const {
          id: organizationId,
          tenantId
        } = _this2.organization;
        // Fetch positions from the organizationPositionsService with the given tenant and organization IDs
        const {
          items
        } = yield _this2.organizationPositionsService.getAll({
          tenantId,
          organizationId
        });
        // Store the retrieved positions in the class-level property
        _this2.positions = items;
      })();
    }
    /**
     * Fetches employment types for a given organization and tenant, and stores them in a class-level property.
     */
    getEmploymentTypes() {
      // Extract the organization ID and tenant ID from the class's organization property
      const {
        id: organizationId,
        tenantId
      } = this.organization;
      // Fetch employment types from the service and subscribe to the observable for asynchronous updates
      this.organizationEmploymentTypeService.getAll([], {
        tenantId,
        organizationId
      }).pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__/* .untilDestroyed */ .s)(this)) // Ensure the subscription is destroyed when the component is destroyed
      .subscribe(types => {
        // Store the fetched employment types in a class-level property
        this.employmentTypes = types.items;
      });
    }
    /**
     * Fetches the employee levels for a given organization and tenant.
     * Stores the retrieved employee levels in a class-level property.
     */
    getEmployeeLevels() {
      var _this3 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A)(function* () {
        // Extract organizationId and tenantId from the organization object
        const {
          id: organizationId,
          tenantId
        } = _this3.organization;
        // Fetch employee levels using the employeeLevelService with provided tenant and organization IDs
        const {
          items
        } = yield _this3.employeeLevelService.getAll([], {
          tenantId,
          organizationId
        });
        // Store the fetched employee levels in the class-level property
        _this3.employeeLevels = items;
      })();
    }
    handleImageUploadError(error) {
      this.toastrService.danger(error);
    }
    submitForm() {
      var _this4 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A)(function* () {
        if (_this4.form.valid) {
          const {
            id: organizationId
          } = _this4.organization;
          _this4.employeeStore.employeeForm = {
            ..._this4.form.getRawValue(),
            organizationId
          };
        }
      })();
    }
    /**
     * Handles the selection of tags and updates the form.
     *
     * @param tags - An array of ITag objects representing the selected tags.
     */
    selectedTagsHandler(tags) {
      // Update the 'tags' field in the form with the new array of tags
      this.form.get('tags').setValue(tags);
      // Ensure the form's validity is updated after changing the tags
      this.form.updateValueAndValidity();
    }
    /**
     * Handles the selection of skills and updates the form.
     *
     * @param skills - An array of ISkill objects representing the selected skills.
     */
    selectedSkillsHandler(skills) {
      // Update the 'skills' field in the form with the new array of skills
      this.form.get('skills').setValue(skills);
      // Ensure the form's validity is updated after changing the skills
      this.form.updateValueAndValidity();
    }
    /**
     * Initializes the form with the given employee's data.
     *
     * @param employee - The employee object whose details are used to initialize the form.
     */
    _initializeForm(employee) {
      // Apply the values from the employee object to the form, setting default values if the employee data is undefined
      this.form.patchValue({
        organizationEmploymentTypes: employee?.organizationEmploymentTypes || [],
        // Default to empty array
        organizationDepartments: employee?.organizationDepartments || [],
        // Default to empty array
        employeeLevel: employee?.employeeLevel,
        // Could be undefined or null
        anonymousBonus: employee?.anonymousBonus,
        // Could be undefined or null
        organizationPosition: employee?.organizationPosition || null,
        // Default to null
        tags: employee?.tags || [],
        // Default to empty array
        skills: employee?.skills || [],
        // Default to empty array
        short_description: employee?.short_description,
        // Could be undefined or null
        description: employee?.description,
        // Could be undefined or null
        startedWorkOn: employee?.startedWorkOn ? new Date(employee.startedWorkOn) : null // Converts to Date or null
      });
    }
    ngOnDestroy() {}
    static {
      this.ɵfac = function EditEmployeeEmploymentComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || EditEmployeeEmploymentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_forms__WEBPACK_IMPORTED_MODULE_9__/* .UntypedFormBuilder */ .ze), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_10__/* .Store */ .il), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_11__/* .ToastrService */ .t), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_12__/* .EmployeeStore */ .oO), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_13__/* .EmployeeLevelService */ .E), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_14__/* .OrganizationDepartmentsService */ .I), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_15__/* .OrganizationPositionsService */ .v), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_16__/* .OrganizationEmploymentTypesService */ .m));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: EditEmployeeEmploymentComponent,
        selectors: [["ga-edit-employee-employment"]],
        standalone: false,
        decls: 4,
        vars: 1,
        consts: [["datepicker", ""], [1, "form-container"], [3, "formGroup", 4, "ngIf"], [3, "formGroup"], [1, "row"], [1, "col-md-6"], [1, "form-group"], ["for", "startedWork", 1, "label"], ["nbInput", "", "fullWidth", "", "formControlName", "startedWorkOn", 3, "nbDatepicker", "placeholder"], ["class", "col-md-6", 4, "ngIf"], [1, "col"], ["for", "shortDescription", 1, "label"], ["fullWidth", "", "id", "shortDescription", "type", "text", "nbInput", "", "formControlName", "short_description", 3, "placeholder"], [1, "label"], [1, "ck-editor"], [1, "description", 3, "formControl", "config"], ["for", "employmentType", 1, "label"], ["id", "employmentType", "formControlName", "organizationEmploymentTypes", "bindLabel", "name", "appendTo", "body", "multiple", "true", 3, "items", "searchable", "placeholder"], ["for", "empLevelInput", 1, "label"], ["appendTo", "body", "formControlName", "employeeLevel", 3, "placeholder"], [3, "value", 4, "ngFor", "ngForOf"], ["id", "departmentInput", "formControlName", "organizationDepartments", "bindLabel", "name", "multiple", "true", "appendTo", "body", 3, "items", "searchable", "placeholder"], ["for", "positionInput", 1, "label"], ["id", "positionInput", "formControlName", "organizationPosition", "bindLabel", "name", "appendTo", "body", 3, "items", "searchable", "placeholder"], [3, "selectedTagsEvent", "selectedTags", "isOrgLevel"], [3, "selectedSkillsEvent", "selectedSkills"], ["formControlName", "anonymousBonus"], [1, "actions"], ["nbButton", "", "status", "success", 3, "click", "disabled"], [1, "notes"], [3, "value"]],
        template: function EditEmployeeEmploymentComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-card")(1, "nb-card-body")(2, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(3, EditEmployeeEmploymentComponent_form_3_Template, 76, 62, "form", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.form);
          }
        },
        dependencies: [ckeditor4_angular__WEBPACK_IMPORTED_MODULE_17__/* .CKEditorComponent */ .h, _nebular_theme__WEBPACK_IMPORTED_MODULE_18__/* .NbButtonComponent */ .YP2, _nebular_theme__WEBPACK_IMPORTED_MODULE_18__/* .NbCardComponent */ .SrT, _nebular_theme__WEBPACK_IMPORTED_MODULE_18__/* .NbCardBodyComponent */ .KH5, _nebular_theme__WEBPACK_IMPORTED_MODULE_18__/* .NbCheckboxComponent */ .DMy, _nebular_theme__WEBPACK_IMPORTED_MODULE_18__/* .NbDatepickerDirective */ .OA9, _nebular_theme__WEBPACK_IMPORTED_MODULE_18__/* .NbDatepickerComponent */ .k2z, _nebular_theme__WEBPACK_IMPORTED_MODULE_18__/* .NbInputDirective */ .i6h, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_19__/* .NgSelectComponent */ .vr, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_19__/* .NgOptionComponent */ .xt, _angular_common__WEBPACK_IMPORTED_MODULE_20__/* .NgForOf */ .Sq, _angular_common__WEBPACK_IMPORTED_MODULE_20__/* .NgIf */ .bT, _angular_forms__WEBPACK_IMPORTED_MODULE_9__/* ["ɵNgNoValidate"] */ .qT, _angular_forms__WEBPACK_IMPORTED_MODULE_9__/* .DefaultValueAccessor */ .me, _angular_forms__WEBPACK_IMPORTED_MODULE_9__/* .NgControlStatus */ .BC, _angular_forms__WEBPACK_IMPORTED_MODULE_9__/* .NgControlStatusGroup */ .cb, _angular_forms__WEBPACK_IMPORTED_MODULE_9__/* .FormControlDirective */ .l_, _angular_forms__WEBPACK_IMPORTED_MODULE_9__/* .FormGroupDirective */ .j4, _angular_forms__WEBPACK_IMPORTED_MODULE_9__/* .FormControlName */ .JD, _packages_ui_core_shared_src_lib_tags_tags_color_input_tags_color_input_component__WEBPACK_IMPORTED_MODULE_21__/* .TagsColorInputComponent */ .i, _packages_ui_core_shared_src_lib_skills_skills_input_skills_input_component__WEBPACK_IMPORTED_MODULE_22__/* .SkillsInputComponent */ .o, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__/* .TranslatePipe */ .D9],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.notes[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  padding: 10px;\n  border-radius: var(--border-radius);\n  background-color: var(--color-warning-transparent-100);\n}\n\n.notes[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--color-warning-default);\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-align: justify;\n}\n\n.card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n  border: unset;\n}\n\n[_nghost-%COMP%] {\n  background: var(--gauzy-card-2);\n  overflow-y: auto;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  height: 100%;\n  border-radius: var(--border-radius);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-header[_ngcontent-%COMP%] {\n  flex: 0 1 auto;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  overflow: auto;\n  height: calc(100vh - var(--header-height) - var(--footer-height) - 11.5rem + 0.25rem);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-footer[_ngcontent-%COMP%] {\n  flex: 0 1 auto;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  border-radius: 0;\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n  padding: 1rem;\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-sidebar-background-2);\n  border-radius: var(--border-radius);\n  padding: 1rem;\n}"]
      });
    }
  };
  return EditEmployeeEmploymentComponent;
})();
EditEmployeeEmploymentComponent = EditEmployeeEmploymentComponent_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_24__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__/* .UntilDestroy */ .d)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_24__/* .__metadata */ .Sn)("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_9__/* .UntypedFormBuilder */ .ze, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_10__/* .Store */ .il, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_11__/* .ToastrService */ .t, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_12__/* .EmployeeStore */ .oO, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_13__/* .EmployeeLevelService */ .E, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_14__/* .OrganizationDepartmentsService */ .I, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_15__/* .OrganizationPositionsService */ .v, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_16__/* .OrganizationEmploymentTypesService */ .m])], EditEmployeeEmploymentComponent);


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

/***/ 6475:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ EditEmployeeProjectsComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(73014);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(64411);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23423);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(19223);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24237);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(57733);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73246);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(72781);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(17785);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(26024);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(42433);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(15480);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(14486);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(71924);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(54263);
/* harmony import */ var _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38546);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(26860);
/* harmony import */ var _packages_ui_core_shared_src_lib_employee_edit_employee_membership_form_edit_employee_membership_form_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(41762);














let EditEmployeeProjectsComponent = class EditEmployeeProjectsComponent extends _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_0__/* .TranslationBaseComponent */ .K {
  constructor(translateService, _organizationProjectsService, _toastrService, _employeeStore, _store, _errorHandlingService) {
    super(translateService);
    this.translateService = translateService;
    this._organizationProjectsService = _organizationProjectsService;
    this._toastrService = _toastrService;
    this._employeeStore = _employeeStore;
    this._store = _store;
    this._errorHandlingService = _errorHandlingService;
    this.subject$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__/* .Subject */ .B();
    this.organizationProjects = [];
    this.employeeProjects = [];
  }
  ngOnInit() {
    this.subject$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .tap */ .M)(() => this.loadProjects()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__/* .untilDestroyed */ .s)(this)).subscribe();
    const storeOrganization$ = this._store.selectedOrganization$;
    const storeEmployee$ = this._employeeStore.selectedEmployee$;
    (0,rxjs__WEBPACK_IMPORTED_MODULE_4__/* .combineLatest */ .z)([storeOrganization$, storeEmployee$]).pipe((0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_5__/* .distinctUntilChange */ .nI)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .filter */ .p)(([organization, employee]) => !!organization && !!employee), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .tap */ .M)(([organization, employee]) => {
      this.organization = organization;
      this.selectedEmployee = employee;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .tap */ .M)(() => this.subject$.next(true)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__/* .untilDestroyed */ .s)(this)).subscribe();
  }
  /**
   * Submits the form to update the employee's project association.
   *
   * If the `member` exists in the input, the method will either update or remove the employee's project assignment
   * and provide feedback through a success or error toastr notification.
   *
   * @param input The input data containing information about the employee and the project.
   * @param removed A flag indicating whether the employee was removed from or added to the project.
   */
  submitForm(input, removed) {
    var _this = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A)(function* () {
      if (!_this.organization || !input.member) {
        return;
      }
      const {
        id: organizationId,
        tenantId
      } = _this.organization;
      try {
        // Update the employee's project assignment
        yield _this._organizationProjectsService.updateByEmployee({
          addedProjectIds: input.addedEntityIds,
          removedProjectIds: input.removedEntityIds,
          member: input.member,
          organizationId,
          tenantId
        });
        // Show success message based on the action performed (added or removed)
        const message = removed ? 'TOASTR.MESSAGE.EMPLOYEE_PROJECT_REMOVED' : 'TOASTR.MESSAGE.EMPLOYEE_PROJECT_ADDED';
        _this._toastrService.success(message);
      } catch (error) {
        // Show error message in case of failure
        _this._toastrService.danger('TOASTR.MESSAGE.EMPLOYEE_EDIT_ERROR');
      } finally {
        // Notify subscribers that the operation is complete
        _this.subject$.next(true);
      }
    })();
  }
  /**
   * Loads organization and employee assigned projects.
   *
   * This method loads the projects assigned to the selected employee and all organization projects,
   * then filters out the employee's assigned projects from the full list of organization projects.
   */
  loadProjects() {
    var _this2 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A)(function* () {
      // Load employee projects and all organization projects
      yield _this2.loadSelectedEmployeeProjects();
      // Get all organization projects
      const organizationProjects = yield _this2.getOrganizationProjects();
      // Filter out employee's assigned projects from the organization projects list
      _this2.organizationProjects = organizationProjects.filter(orgProject => !_this2.employeeProjects.some(empProject => empProject.id === orgProject.id));
    })();
  }
  /**
   * Fetches projects assigned to the selected employee.
   *
   * This method loads the projects associated with the selected employee if the user has the necessary permissions
   * and the organization is available.
   *
   * @returns A Promise that resolves once the employee projects are loaded.
   */
  loadSelectedEmployeeProjects() {
    var _this3 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A)(function* () {
      if (!_this3.organization || !_this3._store.hasAnyPermission(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_8__/* .PermissionsEnum */ .U.ALL_ORG_VIEW, _gauzy_contracts__WEBPACK_IMPORTED_MODULE_8__/* .PermissionsEnum */ .U.ORG_PROJECT_VIEW)) {
        return;
      }
      const {
        id: organizationId,
        tenantId
      } = _this3.organization;
      const {
        id: selectedEmployeeId
      } = _this3.selectedEmployee;
      try {
        // Fetch and assign employee projects to the component property
        _this3.employeeProjects = yield _this3._organizationProjectsService.getAllByEmployee(selectedEmployeeId, {
          organizationId,
          tenantId
        });
      } catch (error) {
        console.error('Error loading selected employee projects:', error);
        _this3._errorHandlingService.handleError(error);
      }
    })();
  }
  /**
   * Fetches all projects within the organization.
   *
   * This method retrieves all projects in the organization if the user has the required permissions
   * and the organization is available.
   *
   * @returns A Promise that resolves to an array of organization projects.
   */
  getOrganizationProjects() {
    var _this4 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A)(function* () {
      if (!_this4.organization || !_this4._store.hasAnyPermission(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_8__/* .PermissionsEnum */ .U.ALL_ORG_VIEW, _gauzy_contracts__WEBPACK_IMPORTED_MODULE_8__/* .PermissionsEnum */ .U.ORG_PROJECT_VIEW)) {
        return [];
      }
      const {
        id: organizationId,
        tenantId
      } = _this4.organization;
      try {
        // Fetch and return all organization projects
        const result = yield _this4._organizationProjectsService.getAll([], {
          organizationId,
          tenantId
        });
        return result.items;
      } catch (error) {
        console.error('Error fetching organization projects:', error);
        // Handle errors
        _this4._errorHandlingService.handleError(error);
        return [];
      }
    })();
  }
  ngOnDestroy() {}
  static {
    this.ɵfac = function EditEmployeeProjectsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || EditEmployeeProjectsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__/* .TranslateService */ .c$), _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_11__/* .OrganizationProjectsService */ .d), _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_12__/* .ToastrService */ .t), _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_13__/* .EmployeeStore */ .oO), _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_14__/* .Store */ .il), _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_15__/* .ErrorHandlingService */ .X));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵdefineComponent"] */ .VBU({
      type: EditEmployeeProjectsComponent,
      selectors: [["ga-edit-employee-projects"]],
      standalone: false,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
      decls: 4,
      vars: 9,
      consts: [[1, "container-projects"], [3, "entitiesAdded", "entitiesRemoved", "selectedEmployee", "organizationEntities", "employeeEntities", "placeholder", "title"]],
      template: function EditEmployeeProjectsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementStart"] */ .j41(0, "div", 0)(1, "ga-edit-employee-membership", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipe"] */ .nI1(2, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipe"] */ .nI1(3, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵlistener"] */ .bIt("entitiesAdded", function EditEmployeeProjectsComponent_Template_ga_edit_employee_membership_entitiesAdded_1_listener($event) {
            return ctx.submitForm($event, false);
          })("entitiesRemoved", function EditEmployeeProjectsComponent_Template_ga_edit_employee_membership_entitiesRemoved_1_listener($event) {
            return ctx.submitForm($event, true);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementEnd"] */ .k0s()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .R7$();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵproperty"] */ .Y8G("selectedEmployee", ctx.selectedEmployee)("organizationEntities", ctx.organizationProjects)("employeeEntities", ctx.employeeProjects)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipeBind1"] */ .bMT(2, 5, "FORM.PLACEHOLDERS.PROJECTS"))("title", _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipeBind1"] */ .bMT(3, 7, "EMPLOYEES_PAGE.EDIT_EMPLOYEE.EMPLOYEE_PROJECTS"));
        }
      },
      dependencies: [_packages_ui_core_shared_src_lib_employee_edit_employee_membership_form_edit_employee_membership_form_component__WEBPACK_IMPORTED_MODULE_16__/* .EditEmployeeMembershipFormComponent */ .C, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__/* .TranslatePipe */ .D9],
      styles: ["[_nghost-%COMP%] {\n\t\t\t\theight: calc(100vh - 20.5rem);\n\n\t\t\t\t.container-projects {\n\t\t\t\t\tpadding: 1rem;\n\t\t\t\t\tbackground-color: var(--gauzy-card-2);\n\t\t\t\t\theight: 100%;\n\t\t\t\t}\n\n\t\t\t\tnb-card {\n\t\t\t\t\tbackground-color: var(--gauzy-card-3) !important;\n\t\t\t\t\tborder-radius: var(--card-border-radius);\n\t\t\t\t}\n\t\t\t}"]
    });
  }
};
EditEmployeeProjectsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_17__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__/* .UntilDestroy */ .d)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_17__/* .__metadata */ .Sn)("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__/* .TranslateService */ .c$, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_11__/* .OrganizationProjectsService */ .d, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_12__/* .ToastrService */ .t, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_13__/* .EmployeeStore */ .oO, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_14__/* .Store */ .il, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_15__/* .ErrorHandlingService */ .X])], EditEmployeeProjectsComponent);


/***/ }),

/***/ 12624:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   t: () => (/* binding */ LanguageSelectorComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73014);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(55598);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(25023);
/* harmony import */ var _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38546);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(19223);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(71924);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52738);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39855);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(41598);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(10936);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(14572);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(56383);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(55567);

















function LanguageSelectorComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainer"] */ .eu8(0);
  }
}
function LanguageSelectorComponent_ng_template_1_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(3);
  }
  if (rf & 2) {
    const newLanguageName_r3 = ctx.searchTerm;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(2, 2, "LANGUAGE_PAGE.ADD_NEW_LANGUAGE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(": ", newLanguageName_r3, " ");
  }
}
function LanguageSelectorComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "ng-select", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("change", function LanguageSelectorComponent_ng_template_1_Template_ng_select_change_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.onChangeLanguage($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayListener"] */ .mxI("ngModelChange", function LanguageSelectorComponent_ng_template_1_Template_ng_select_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayBindingSet"] */ .DH7(ctx_r1.selectedLanguageCode, $event) || (ctx_r1.selectedLanguageCode = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, LanguageSelectorComponent_ng_template_1_ng_template_1_Template, 4, 4, "ng-template", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("items", ctx_r1.languages)("loading", ctx_r1.loading)("addTag", ctx_r1.addTag ? ctx_r1.addLanguage : null)("closeOnSelect", true)("size", ctx_r1.size)("clearable", ctx_r1.clearable)("placeholder", ctx_r1.placeholder);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayProperty"] */ .R50("ngModel", ctx_r1.selectedLanguageCode);
  }
}
function LanguageSelectorComponent_ng_template_3_nb_option_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const language_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("value", language_r5.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", language_r5.name, " ");
  }
}
function LanguageSelectorComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-select", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("selectedChange", function LanguageSelectorComponent_ng_template_3_Template_nb_select_selectedChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.onSelectedChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayListener"] */ .mxI("ngModelChange", function LanguageSelectorComponent_ng_template_3_Template_nb_select_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayBindingSet"] */ .DH7(ctx_r1.selectedLanguageCode, $event) || (ctx_r1.selectedLanguageCode = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, LanguageSelectorComponent_ng_template_3_nb_option_1_Template, 2, 2, "nb-option", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("size", ctx_r1.size)("placeholder", ctx_r1.placeholder);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayProperty"] */ .R50("ngModel", ctx_r1.selectedLanguageCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx_r1.languages);
  }
}
let LanguageSelectorComponent = /*#__PURE__*/(() => {
  let LanguageSelectorComponent = class LanguageSelectorComponent extends _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_1__/* .TranslationBaseComponent */ .K {
    get placeholder() {
      return this._placeholder;
    }
    set placeholder(value) {
      this._placeholder = value;
    }
    get clearable() {
      return this._clearable;
    }
    set clearable(value) {
      this._clearable = value;
    }
    get addTag() {
      return this._addTag;
    }
    set addTag(value) {
      this._addTag = value;
    }
    get selectedLanguageCode() {
      return this._selectedLanguageCode;
    }
    set selectedLanguageCode(value) {
      if (value) {
        this._selectedLanguageCode = value;
        this.onChange(value);
        this.onTouch(value);
      }
    }
    get template() {
      return this._template;
    }
    set template(value) {
      this._template = value;
    }
    get size() {
      return this._size;
    }
    set size(value) {
      this._size = value;
    }
    constructor(languagesService, translate, store, cd) {
      var _this;
      super(translate);
      _this = this;
      this.languagesService = languagesService;
      this.translate = translate;
      this.store = store;
      this.cd = cd;
      this.onChange = () => {};
      this.onTouch = () => {};
      /*
       * Getter & Setter for dynamic placeholder
       */
      this._placeholder = this.getTranslation('MENU.LANGUAGE');
      /*
       * Getter & Setter for automatic language selection as per selected language
       */
      this.selectBy = 'code';
      /*
       * Getter & Setter for dynamic template size
       */
      this._size = 'medium';
      this.selectedLanguageEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .bkB();
      this.addLanguage = /*#__PURE__*/function () {
        var _ref = (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(function* (languageName) {
          const newLanguage = {
            name: languageName,
            color: '#' + Math.floor(Math.random() * 16777215).toString(16),
            description: ''
          };
          _this.loading = true;
          const language = yield _this.languagesService.insertLanguage(newLanguage);
          _this.loading = false;
          return language;
        });
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }();
      this.store.preferredLanguage$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .filter */ .p)(preferredLanguage => !!preferredLanguage), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .tap */ .M)(preferredLanguage => this.selectedLanguageCode = preferredLanguage), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .untilDestroyed */ .s)(this)).subscribe();
    }
    onChangeLanguage(currentSelection) {
      let selectedLanguage;
      if (this.selectBy === 'object') {
        selectedLanguage = currentSelection;
      } else {
        selectedLanguage = currentSelection?.code || this.selectedLanguageCode;
      }
      this.selectedLanguageEvent.emit(selectedLanguage);
    }
    onSelectedChange(code) {
      this.cd.detectChanges();
      let selectedLanguage;
      if (this.selectBy === 'object') {
        selectedLanguage = this.getLanguageByCode(code);
      } else {
        selectedLanguage = code || this.selectedLanguageCode;
      }
      this.selectedLanguageEvent.emit(selectedLanguage);
    }
    writeValue(value) {
      this._selectedLanguageCode = value;
    }
    registerOnChange(fn) {
      this.onChange = fn;
    }
    registerOnTouched(fn) {
      this.onTouch = fn;
    }
    ngOnInit() {
      var _this2 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(function* () {
        yield _this2.getAllLanguages();
        if (_this2.selectBy === 'object') {
          _this2.checkPreFilledLanguage();
        }
      })();
    }
    getAllLanguages() {
      var _this3 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(function* () {
        const {
          items
        } = yield _this3.languagesService.getAllLanguages();
        _this3.languages = items;
      })();
    }
    checkPreFilledLanguage() {
      if (!this.selectedLanguageCode) {
        return;
      }
      if (this.languages?.length > 0) {
        const selectedLanguage = this.getLanguageByCode(this.selectedLanguageCode);
        this.onChangeLanguage(selectedLanguage);
      }
    }
    getLanguageByCode(code) {
      return this.languages.find(language => code === language.code);
    }
    static {
      this.ɵfac = function LanguageSelectorComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || LanguageSelectorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_6__/* .LanguagesService */ .D), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__/* .TranslateService */ .c$), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_8__/* .Store */ .il), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* .ChangeDetectorRef */ .gRc));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: LanguageSelectorComponent,
        selectors: [["ngx-language-selector"]],
        inputs: {
          placeholder: "placeholder",
          clearable: "clearable",
          addTag: "addTag",
          selectedLanguageCode: "selectedLanguageCode",
          selectBy: "selectBy",
          template: "template",
          size: "size"
        },
        outputs: {
          selectedLanguageEvent: "selectedLanguageEvent"
        },
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵProvidersFeature"] */ .Jv_([{
          provide: _angular_forms__WEBPACK_IMPORTED_MODULE_9__/* .NG_VALUE_ACCESSOR */ .kq,
          useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__/* .forwardRef */ .Rfq)(() => LanguageSelectorComponent),
          multi: true
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
        decls: 5,
        vars: 3,
        consts: [["ngSelectTemplate", ""], ["nbSelectTemplate", ""], [4, "ngIf", "ngIfThen", "ngIfElse"], ["appendTo", "body", "bindLabel", "name", "bindValue", "code", 3, "change", "ngModelChange", "items", "loading", "addTag", "closeOnSelect", "size", "clearable", "placeholder", "ngModel"], ["ng-tag-tmp", ""], ["fullWidth", "", 3, "selectedChange", "ngModelChange", "size", "placeholder", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]],
        template: function LanguageSelectorComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(0, LanguageSelectorComponent_ng_container_0_Template, 1, 0, "ng-container", 2)(1, LanguageSelectorComponent_ng_template_1_Template, 2, 8, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplateRefExtractor"] */ .C5r)(3, LanguageSelectorComponent_ng_template_3_Template, 2, 4, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplateRefExtractor"] */ .C5r);
          }
          if (rf & 2) {
            const ngSelectTemplate_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(2);
            const nbSelectTemplate_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx._template === "ng-select")("ngIfThen", ngSelectTemplate_r6)("ngIfElse", nbSelectTemplate_r7);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__/* .NgForOf */ .Sq, _angular_common__WEBPACK_IMPORTED_MODULE_10__/* .NgIf */ .bT, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbSelectComponent */ .S81, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbOptionComponent */ .ZJ2, _angular_forms__WEBPACK_IMPORTED_MODULE_9__/* .NgControlStatus */ .BC, _angular_forms__WEBPACK_IMPORTED_MODULE_9__/* .NgModel */ .vS, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__/* .NgSelectComponent */ .vr, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__/* .NgTagTemplateDirective */ .BW, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__/* .TranslatePipe */ .D9],
        styles: [".language-color[_ngcontent-%COMP%] {\n  position: unset;\n  display: inline-flex;\n  align-self: center;\n  width: 1rem;\n  height: 1rem;\n  margin-right: 1em;\n  margin-left: 1em;\n}\n\n.language-label[_ngcontent-%COMP%] {\n  display: unset;\n  margin-right: 0.7em;\n}"]
      });
    }
  };
  LanguageSelectorComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .UntilDestroy */ .d)({
    checkProperties: true
  }), (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__metadata */ .Sn)("design:paramtypes", [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_6__/* .LanguagesService */ .D, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__/* .TranslateService */ .c$, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_8__/* .Store */ .il, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .ChangeDetectorRef */ .gRc])], LanguageSelectorComponent);
  return LanguageSelectorComponent;
})();


/***/ }),

/***/ 15529:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   z: () => (/* binding */ EditEmployeeMainComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(73014);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(64411);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10936);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(23423);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57733);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(72781);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(73246);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(71924);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(14486);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(54263);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(56383);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(14572);
/* harmony import */ var _packages_ui_core_shared_src_lib_directives_img_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(71466);
/* harmony import */ var _packages_ui_core_shared_src_lib_image_uploader_image_uploader_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(79455);
/* harmony import */ var _packages_ui_core_shared_src_lib_language_language_selector_language_selector_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(12624);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(19223);

var EditEmployeeMainComponent_1;
















const _c0 = a0 => ({
  opacity: a0
});
function EditEmployeeMainComponent_img_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "img", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("mouseenter", function EditEmployeeMainComponent_img_12_Template_img_mouseenter_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.hoverState = true);
    })("mouseleave", function EditEmployeeMainComponent_img_12_Template_img_mouseleave_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.hoverState = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("src", ctx_r1.form.get("imageUrl").value, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵsanitizeUrl"] */ .B4B);
  }
}
function EditEmployeeMainComponent_nb_badge_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(0, "nb-badge", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(1, "translate");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("text", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(1, 1, "EMPLOYEES_PAGE.EDIT_EMPLOYEE.VETTED"));
  }
}
function EditEmployeeMainComponent_div_14_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate2"] */ .Lme(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(2, 2, "EMPLOYEES_PAGE.EDIT_EMPLOYEE.JOB_SUCCESS"), ": ", ctx_r1.selectedEmployee.jobSuccess, "% ");
  }
}
function EditEmployeeMainComponent_div_14_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate2"] */ .Lme(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(2, 2, "EMPLOYEES_PAGE.EDIT_EMPLOYEE.TOTAL_JOBS"), ": ", ctx_r1.selectedEmployee.totalJobs, " ");
  }
}
function EditEmployeeMainComponent_div_14_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate2"] */ .Lme(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(2, 2, "EMPLOYEES_PAGE.EDIT_EMPLOYEE.TOTAL_HOURS"), ": ", ctx_r1.selectedEmployee.totalWorkHours, " ");
  }
}
function EditEmployeeMainComponent_div_14_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate4"] */ .LHq(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(2, 4, "EMPLOYEES_PAGE.EDIT_EMPLOYEE.RATE"), ": ", ctx_r1.selectedEmployee.billRateCurrency, " ", ctx_r1.selectedEmployee.billRateValue, " / ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(3, 6, "EMPLOYEES_PAGE.EDIT_EMPLOYEE.HR"), " ");
  }
}
function EditEmployeeMainComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, EditEmployeeMainComponent_div_14_div_1_Template, 3, 4, "div", 36)(2, EditEmployeeMainComponent_div_14_div_2_Template, 3, 4, "div", 36)(3, EditEmployeeMainComponent_div_14_div_3_Template, 3, 4, "div", 36)(4, EditEmployeeMainComponent_div_14_div_4_Template, 4, 8, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r1.selectedEmployee.jobSuccess);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r1.selectedEmployee.totalJobs);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r1.selectedEmployee.totalWorkHours);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r1.selectedEmployee.billRateCurrency && ctx_r1.selectedEmployee.billRateValue);
  }
}
/**
 * This component contains the properties stored within the User Entity of an Employee.
 * Any property which is either stored directly in the Employee entity or as a relation of the Employee entity should NOT be put in this Component
 */
let EditEmployeeMainComponent = /*#__PURE__*/(() => {
  let EditEmployeeMainComponent = class EditEmployeeMainComponent {
    static {
      EditEmployeeMainComponent_1 = this;
    }
    static buildForm(fb) {
      return fb.group({
        username: [],
        email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .Validators */ .k0.required],
        firstName: [],
        lastName: [],
        preferredLanguage: [],
        profile_link: [],
        imageId: [],
        imageUrl: [{
          value: null,
          disabled: true
        }]
      });
    }
    constructor(_fb, _store, _employeeStore, _errorHandlingService) {
      this._fb = _fb;
      this._store = _store;
      this._employeeStore = _employeeStore;
      this._errorHandlingService = _errorHandlingService;
      /*
       * Employee Main Mutation Form
       */
      this.form = EditEmployeeMainComponent_1.buildForm(this._fb);
    }
    ngOnInit() {
      const storeOrganization$ = this._store.selectedOrganization$;
      const storeEmployee$ = this._employeeStore.selectedEmployee$;
      (0,rxjs__WEBPACK_IMPORTED_MODULE_2__/* .combineLatest */ .z)([storeOrganization$, storeEmployee$]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .filter */ .p)(([organization, employee]) => !!organization && !!employee), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .tap */ .M)(([organization, employee]) => {
        this.organization = organization;
        this.selectedEmployee = employee;
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .tap */ .M)(() => this._initializeFormValue(this.selectedEmployee)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .untilDestroyed */ .s)(this)).subscribe();
    }
    /**
     * Handles errors that occur during image upload.
     *
     * @param error - The error object to handle.
     */
    handleImageUploadError(error) {
      // Delegate error handling to the _errorHandlingService
      this._errorHandlingService.handleError(error);
    }
    /**
     * Upload employee image/avatar
     *
     * @param image
     */
    updateImageAsset(image) {
      var _this = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(function* () {
        try {
          if (image) {
            // Update user form data in store (assuming updateUserForm is async)
            yield _this._employeeStore.updateUserForm({
              imageId: image.id,
              image
            });
          }
        } catch (error) {
          // Handle and log errors
          _this._errorHandlingService.handleError(error);
        }
      })();
    }
    /**
     * Submit employee main profile
     *
     * @returns
     */
    submitForm() {
      var _this2 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(function* () {
        if (_this2.form.invalid || !_this2.organization) {
          return;
        }
        const {
          id: organizationId,
          tenantId
        } = _this2.organization;
        const values = {
          organizationId,
          tenantId,
          ...(_this2.form.valid ? _this2.form.value : {})
        };
        // Update user form data in store (assuming updateUserForm is async)
        yield _this2._employeeStore.updateUserForm(values);
        yield _this2._employeeStore.updateEmployeeForm(values);
      })();
    }
    /**
     * Initialize the form values with the given employee's data.
     *
     * @param employee - The employee whose data will be used to initialize the form.
     */
    _initializeFormValue(employee) {
      // Patch the form with the employee's user data
      this.form.patchValue({
        username: employee.user.username,
        email: employee.user.email,
        firstName: employee.user.firstName,
        lastName: employee.user.lastName,
        imageUrl: employee.user.image?.fullUrl || employee.user.imageUrl,
        imageId: employee.user.imageId,
        preferredLanguage: employee.user.preferredLanguage,
        profile_link: employee.profile_link
      });
    }
    ngOnDestroy() {}
    static {
      this.ɵfac = function EditEmployeeMainComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || EditEmployeeMainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .UntypedFormBuilder */ .ze), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_7__/* .Store */ .il), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_8__/* .EmployeeStore */ .oO), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_9__/* .ErrorHandlingService */ .X));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: EditEmployeeMainComponent,
        selectors: [["ga-edit-employee-main"]],
        standalone: false,
        decls: 66,
        vars: 51,
        consts: [[1, "content"], [1, "organization-container", "w-25", "d-flex", "flex-column"], [1, "organization-photo"], [3, "changeHoverState", "uploadedImageAsset", "uploadImageAssetError"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "width", "68", "height", "68", "viewBox", "0 0 68 68", 3, "ngStyle"], ["id", "a", "d", "M28.667 31.333a2 2 0 1 0-.002-4.001 2 2 0 0 0 .002 4.001m13.333 12H26.748l9.34-7.793c.328-.279.923-.277 1.244-.001l6.001 5.12V42c0 .736-.597 1.333-1.333 1.333M26 24.667h16c.736 0 1.333.597 1.333 1.333v11.152l-4.27-3.643c-1.32-1.122-3.386-1.122-4.694-.008l-9.702 8.096V26c0-.736.597-1.333 1.333-1.333M42 22H26c-2.205 0-4 1.795-4 4v16c0 2.205 1.795 4 4 4h16c2.205 0 4-1.795 4-4V26c0-2.205-1.795-4-4-4"], ["fill", "none", "fill-rule", "evenodd"], ["cx", "34", "cy", "34", "r", "34", "fill", "#0091FF", "opacity", ".3"], ["cx", "34", "cy", "34", "r", "26", "fill", "#0091FF", "opacity", ".9"], ["fill", "#FFF", "fill-rule", "nonzero", 0, "xlink", "href", "#a"], [3, "ngStyle"], ["alt", "Profile Photo", 3, "src", "mouseenter", "mouseleave", 4, "ngIf"], ["status", "success", "style", "position: relative; margin-top: 20px", "position", "bottom-left", 3, "text", 4, "ngIf"], [4, "ngIf"], [1, "employee-form", "w-75"], [3, "formGroup"], [1, "row"], [1, "col"], [1, "form-group"], ["for", "usernameInput", 1, "label"], ["fullWidth", "", "id", "usernameInput", "type", "text", "nbInput", "", "formControlName", "username", 3, "placeholder"], ["for", "emailInput", 1, "label"], ["fullWidth", "", "id", "emailInput", "type", "email", "nbInput", "", "formControlName", "email", 3, "placeholder"], ["for", "firstNameInput", 1, "label"], ["fullWidth", "", "id", "firstNameInput", "type", "text", "nbInput", "", "formControlName", "firstName", 3, "placeholder"], ["for", "lastNameInput", 1, "label"], ["fullWidth", "", "id", "lastNameInput", "type", "text", "nbInput", "", "formControlName", "lastName", 3, "placeholder"], [1, "col-sm-6"], ["for", "preferredLanguage", 1, "label"], ["selectBy", "object", "formControlName", "preferredLanguage", 1, "d-block", 3, "placeholder", "template"], ["for", "profileLinkInput", 1, "label"], ["fullWidth", "", "id", "profileLinkInput", "type", "text", "nbInput", "", "formControlName", "profile_link", 3, "placeholder"], [1, "actions"], ["nbButton", "", "status", "success", 3, "click", "disabled"], ["alt", "Profile Photo", 3, "mouseenter", "mouseleave", "src"], ["status", "success", "position", "bottom-left", 2, "position", "relative", "margin-top", "20px", 3, "text"], ["class", "employee-optional-info", 4, "ngIf"], [1, "employee-optional-info"]],
        template: function EditEmployeeMainComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "ngx-image-uploader", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("changeHoverState", function EditEmployeeMainComponent_Template_ngx_image_uploader_changeHoverState_3_listener($event) {
              return ctx.hoverState = $event;
            })("uploadedImageAsset", function EditEmployeeMainComponent_Template_ngx_image_uploader_uploadedImageAsset_3_listener($event) {
              return ctx.updateImageAsset($event);
            })("uploadImageAssetError", function EditEmployeeMainComponent_Template_ngx_image_uploader_uploadImageAssetError_3_listener($event) {
              return ctx.handleImageUploadError($event);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnamespaceSVG"] */ .qSk();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(4, "svg", 4)(5, "defs");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(6, "path", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(7, "g", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(8, "circle", 7)(9, "circle", 8)(10, "use", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnamespaceHTML"] */ .joV();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(11, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(12, EditEmployeeMainComponent_img_12_Template, 1, 1, "img", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(13, EditEmployeeMainComponent_nb_badge_13_Template, 2, 3, "nb-badge", 12)(14, EditEmployeeMainComponent_div_14_Template, 5, 4, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(15, "div", 14)(16, "form", 15)(17, "div", 16)(18, "div", 17)(19, "div", 18)(20, "label", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(22, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(23, "input", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(24, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(25, "div", 17)(26, "div", 18)(27, "label", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(29, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(30, "input", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(31, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(32, "div", 16)(33, "div", 17)(34, "div", 18)(35, "label", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(36);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(37, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(38, "input", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(39, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(40, "div", 17)(41, "div", 18)(42, "label", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(43);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(44, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(45, "input", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(46, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(47, "div", 16)(48, "div", 27)(49, "div", 18)(50, "label", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(51);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(52, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(53, "ngx-language-selector", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(54, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(55, "div", 27)(56, "div", 18)(57, "label", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(58);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(59, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(60, "input", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(61, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(62, "div", 32)(63, "button", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function EditEmployeeMainComponent_Template_button_click_63_listener() {
              return ctx.submitForm();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(64);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(65, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction1"] */ .eq3(47, _c0, ctx.hoverState ? "1" : "0.3"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction1"] */ .eq3(49, _c0, ctx.hoverState ? "0.2" : "0"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.form);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.selectedEmployee && ctx.selectedEmployee.isVetted);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.selectedEmployee);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("formGroup", ctx.form);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(22, 21, "FORM.USERNAME"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpropertyInterpolate"] */ .FS9("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(24, 23, "FORM.USERNAME"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(29, 25, "FORM.EMAIL"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpropertyInterpolate"] */ .FS9("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(31, 27, "FORM.EMAIL"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(37, 29, "FORM.LABELS.FIRST_NAME"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpropertyInterpolate"] */ .FS9("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(39, 31, "FORM.PLACEHOLDERS.FIRST_NAME"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(44, 33, "FORM.LABELS.LAST_NAME"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpropertyInterpolate"] */ .FS9("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(46, 35, "FORM.PLACEHOLDERS.LAST_NAME"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(52, 37, "FORM.LABELS.PREFERRED_LANGUAGE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(54, 39, "FORM.PLACEHOLDERS.PREFERRED_LANGUAGE"))("template", "ng-select");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(59, 41, "FORM.LABELS.PROFILE_LINK"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpropertyInterpolate"] */ .FS9("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(61, 43, "FORM.PLACEHOLDERS.PROFILE_LINK"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("disabled", ctx.form.invalid);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(65, 45, "BUTTONS.SAVE"), " ");
          }
        },
        dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_10__/* .NbBadgeComponent */ .XyX, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__/* .NbButtonComponent */ .YP2, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__/* .NbInputDirective */ .i6h, _angular_common__WEBPACK_IMPORTED_MODULE_11__/* .NgIf */ .bT, _angular_common__WEBPACK_IMPORTED_MODULE_11__/* .NgStyle */ .B3, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* ["ɵNgNoValidate"] */ .qT, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .DefaultValueAccessor */ .me, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .NgControlStatus */ .BC, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .NgControlStatusGroup */ .cb, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .FormGroupDirective */ .j4, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .FormControlName */ .JD, _packages_ui_core_shared_src_lib_directives_img_directive__WEBPACK_IMPORTED_MODULE_12__/* .ImgDirective */ .z, _packages_ui_core_shared_src_lib_image_uploader_image_uploader_component__WEBPACK_IMPORTED_MODULE_13__/* .ImageUploaderComponent */ .t, _packages_ui_core_shared_src_lib_language_language_selector_language_selector_component__WEBPACK_IMPORTED_MODULE_14__/* .LanguageSelectorComponent */ .t, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__/* .TranslatePipe */ .D9],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%] {\n  height: 100%;\n}\n[dir=ltr]   [_nghost-%COMP%] {\n  border-radius: 0 var(--border-radius) var(--border-radius) var(--border-radius);\n}\n[dir=rtl]   [_nghost-%COMP%] {\n  border-radius: var(--border-radius) 0 var(--border-radius) var(--border-radius);\n}\n\n[_nghost-%COMP%]   .content[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100%;\n  background-color: var(--gauzy-card-2);\n  padding: 1rem;\n}\n[dir=ltr]   [_nghost-%COMP%]   .content[_ngcontent-%COMP%] {\n  border-radius: 0 var(--border-radius) var(--border-radius) var(--border-radius);\n}\n[dir=rtl]   [_nghost-%COMP%]   .content[_ngcontent-%COMP%] {\n  border-radius: var(--border-radius) 0 var(--border-radius) var(--border-radius);\n}\n[_nghost-%COMP%]   .content.main[_ngcontent-%COMP%] {\n  height: calc(100vh - 19.25rem);\n}\n\n[_nghost-%COMP%]   .organization-container[_ngcontent-%COMP%] {\n  padding: 15px;\n  position: relative;\n  display: flex;\n  align-items: flex-start;\n  flex-direction: column;\n  transition: transform 150ms ease-in-out;\n  background-color: rgba(126, 126, 143, 0.1);\n  border-radius: var(--border-radius);\n  width: 563px;\n  height: 100%;\n}\n[_nghost-%COMP%]   .organization-container[_ngcontent-%COMP%]   .organization-photo[_ngcontent-%COMP%] {\n  width: fit-content;\n  height: fit-content;\n  position: relative;\n  margin-left: 0 !important;\n}\n[_nghost-%COMP%]   .organization-container[_ngcontent-%COMP%]   .organization-photo[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  pointer-events: none;\n  background: black;\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  border-radius: var(--border-radius);\n}\n[_nghost-%COMP%]   .organization-container[_ngcontent-%COMP%]   .organization-photo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n  border-radius: var(--border-radius);\n}\n[_nghost-%COMP%]   .organization-container[_ngcontent-%COMP%]   .organization-photo[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  position: absolute;\n  z-index: 3;\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .organization-container[_ngcontent-%COMP%]   .organization-photo[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  z-index: 2;\n  transition: opacity 0.2s ease-in;\n  opacity: 0.3;\n  position: absolute;\n  top: calc(50% - 34px);\n  left: calc(50% - 34px);\n}\n[_nghost-%COMP%]   .organization-container[_ngcontent-%COMP%]   .employees-count-text[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 15px;\n  letter-spacing: 0em;\n}\n[dir=ltr]   [_nghost-%COMP%]   .organization-container[_ngcontent-%COMP%]   .employees-count-text[_ngcontent-%COMP%] {\n  margin-left: 1px;\n}\n[dir=rtl]   [_nghost-%COMP%]   .organization-container[_ngcontent-%COMP%]   .employees-count-text[_ngcontent-%COMP%] {\n  margin-right: 1px;\n}\n\n.main-form[_ngcontent-%COMP%] {\n  width: 100%;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n.main-form[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%] {\n  margin-top: 60px;\n}\n\n.row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\n  max-width: 50%;\n}\n\n  ga-currency .form-group {\n  display: inline-flex;\n  flex-direction: column;\n  min-width: 180px;\n}\n\n.tax-form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.tax-form-group[_ngcontent-%COMP%]   #taxIdInput[_ngcontent-%COMP%] {\n  width: 80%;\n}\n\n.registration-form-group[_ngcontent-%COMP%] {\n  display: inline-flex;\n  flex-direction: column;\n}\n\n  nb-select.shape-rectangle .select-button {\n  border-radius: var(--border-radius);\n}\n\n@media only screen and (max-width: 991px) {\n  .organization-container[_ngcontent-%COMP%] {\n    width: 350px;\n  }\n  .registration-form-group[_ngcontent-%COMP%]   #registrationDate[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .tax-form-group[_ngcontent-%COMP%]   #taxIdInput[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n    ga-currency .form-group {\n    display: flex;\n    flex-direction: column;\n  }\n}\n@media only screen and (max-width: 767px) {\n  [_nghost-%COMP%] {\n    height: auto;\n  }\n  .content[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .organization-container[_ngcontent-%COMP%], \n   .main-form[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .main-form[_ngcontent-%COMP%] {\n    padding: 0;\n    margin-top: 20px;\n  }\n  .row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    max-width: 100%;\n    margin-left: 0;\n  }\n  .row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\n    max-width: 100%;\n    padding: 0;\n  }\n  .form-group[_ngcontent-%COMP%] {\n    width: 100% !important;\n  }\n  .tax-form-group[_ngcontent-%COMP%]   #taxIdInput[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .registration-form-group[_ngcontent-%COMP%]   #registrationDate[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n    ga-currency .form-group {\n    display: flex;\n  }\n  .col-6[_ngcontent-%COMP%] {\n    max-width: 100%;\n    padding: 0 !important;\n  }\n  .main-form[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%] {\n    margin-top: 20px;\n  }\n}", "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.employee-optional-info[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.organization-container[_ngcontent-%COMP%] {\n  background-color: rgba(126, 126, 143, 0.1);\n}\n\n.organization-photo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n  box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.25);\n  object-fit: cover;\n  border-radius: var(--border-radius);\n}\n\n.content[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\n[_nghost-%COMP%] {\n  padding: 0;\n  overflow-y: auto;\n  max-height: calc(100vh - 20.5rem);\n  border-radius: 0 var(--border-radius) var(--border-radius) var(--border-radius);\n}\n[dir=ltr]   [_nghost-%COMP%]     .employee-form {\n  padding-left: 1rem;\n}\n[dir=rtl]   [_nghost-%COMP%]     .employee-form {\n  padding-right: 1rem;\n}\n[_nghost-%COMP%]   .employee-form[_ngcontent-%COMP%] {\n  overflow: auto;\n  overflow-x: hidden;\n}"]
      });
    }
  };
  return EditEmployeeMainComponent;
})();
EditEmployeeMainComponent = EditEmployeeMainComponent_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_16__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .UntilDestroy */ .d)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_16__/* .__metadata */ .Sn)("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .UntypedFormBuilder */ .ze, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_7__/* .Store */ .il, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_8__/* .EmployeeStore */ .oO, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_9__/* .ErrorHandlingService */ .X])], EditEmployeeMainComponent);


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

/***/ 19882:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P: () => (/* binding */ RecurringExpenseBlockModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14572);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56383);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19223);
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(38834);
/* harmony import */ var _smart_data_layout_smart_data_view_layout_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(98722);
/* harmony import */ var _recurring_expense_history_recurring_expense_history_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(78230);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);








let RecurringExpenseBlockModule = /*#__PURE__*/(() => {
  class RecurringExpenseBlockModule {
    static {
      this.ɵfac = function RecurringExpenseBlockModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || RecurringExpenseBlockModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .$C({
        type: RecurringExpenseBlockModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .CommonModule */ .MD, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbIconModule */ .clu, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbTooltipModule */ .IB0, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__/* .TranslateModule */ .h.forChild(), _shared_module__WEBPACK_IMPORTED_MODULE_4__/* .SharedModule */ .G, _smart_data_layout_smart_data_view_layout_module__WEBPACK_IMPORTED_MODULE_5__/* .SmartDataViewLayoutModule */ .H, _recurring_expense_history_recurring_expense_history_module__WEBPACK_IMPORTED_MODULE_6__/* .RecurringExpenseHistoryModule */ .g]
      });
    }
  }
  return RecurringExpenseBlockModule;
})();

/***/ }),

/***/ 20517:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   w: () => (/* binding */ EmployeeTimeTrackingStatusComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14572);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19223);



function EmployeeTimeTrackingStatusComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div")(1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(3, 1, "EMPLOYEES_PAGE.ENABLED"), " ");
  }
}
function EmployeeTimeTrackingStatusComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div")(1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(3, 1, "EMPLOYEES_PAGE.DISABLED"), " ");
  }
}
let EmployeeTimeTrackingStatusComponent = /*#__PURE__*/(() => {
  class EmployeeTimeTrackingStatusComponent {
    static {
      this.ɵfac = function EmployeeTimeTrackingStatusComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || EmployeeTimeTrackingStatusComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: EmployeeTimeTrackingStatusComponent,
        selectors: [["employee-time-tracking-status"]],
        inputs: {
          rowData: "rowData"
        },
        standalone: false,
        decls: 3,
        vars: 2,
        consts: [["disableTimeTrackingStatus", ""], [3, "ngIf", "ngIfElse"], [1, "badge", "badge-success"], [1, "badge", "badge-danger"]],
        template: function EmployeeTimeTrackingStatusComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(0, EmployeeTimeTrackingStatusComponent_ng_template_0_Template, 4, 3, "ng-template", 1)(1, EmployeeTimeTrackingStatusComponent_ng_template_1_Template, 4, 3, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplateRefExtractor"] */ .C5r);
          }
          if (rf & 2) {
            const disableTimeTrackingStatus_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.rowData.isTrackingEnabled)("ngIfElse", disableTimeTrackingStatus_r1);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .NgIf */ .bT, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__/* .TranslatePipe */ .D9],
        styles: [".badge-disabled[_ngcontent-%COMP%] {\n  background-color: #ccc;\n}\n\n.badge[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 4px 8px;\n}\n\ndiv[_ngcontent-%COMP%] {\n  \n\n  \n\n  border-radius: 0.25rem;\n  align-content: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: auto;\n  \n\n  flex: none;\n  order: 0;\n  flex-grow: 0;\n  margin: 4px 0px;\n  \n\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 15px;\n  letter-spacing: 0em;\n  text-align: left;\n}"]
      });
    }
  }
  return EmployeeTimeTrackingStatusComponent;
})();

/***/ }),

/***/ 21526:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmployeesModule: () => (/* binding */ EmployeesModule)
/* harmony export */ });
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(56383);
/* harmony import */ var ckeditor4_angular__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(27697);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(55567);
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(79475);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(22688);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(86616);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(32629);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(93573);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(96941);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(19223);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(38834);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(57832);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(43125);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(8116);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(91963);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(54462);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(41030);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(27478);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(51210);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(66277);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(19882);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(61444);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(72391);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(66609);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(28195);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(38249);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(58504);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(59743);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(98722);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(80784);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(95041);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(44944);
/* harmony import */ var _edit_employee_edit_employee_profile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93159);
/* harmony import */ var _edit_employee_edit_employee_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(761);
/* harmony import */ var _employees_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24519);
/* harmony import */ var _employees_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(63111);
/* harmony import */ var _manage_employee_invite_manage_employee_invite_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(24715);
/* harmony import */ var _table_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(37807);
/* harmony import */ var _table_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(58989);
/* harmony import */ var _table_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(27074);
/* harmony import */ var _table_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(86695);
/* harmony import */ var _table_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(56397);
/* harmony import */ var _table_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(20517);
/* harmony import */ var _edit_employee_edit_employee_profile_edit_employee_networks_edit_employee_networks_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(76065);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(26860);


















const COMPONENTS = [_employees_component__WEBPACK_IMPORTED_MODULE_3__/* .EmployeesComponent */ .L, _table_components__WEBPACK_IMPORTED_MODULE_5__/* .EmployeeBonusComponent */ .r, _table_components__WEBPACK_IMPORTED_MODULE_6__/* .EmployeeAverageIncomeComponent */ .w, _table_components__WEBPACK_IMPORTED_MODULE_7__/* .EmployeeAverageExpensesComponent */ .S, _table_components__WEBPACK_IMPORTED_MODULE_8__/* .EmployeeAverageBonusComponent */ .e, _table_components__WEBPACK_IMPORTED_MODULE_9__/* .EmployeeWorkStatusComponent */ .F, _table_components__WEBPACK_IMPORTED_MODULE_10__/* .EmployeeTimeTrackingStatusComponent */ .w, _edit_employee_edit_employee_component__WEBPACK_IMPORTED_MODULE_1__/* .EditEmployeeComponent */ .U, _edit_employee_edit_employee_profile__WEBPACK_IMPORTED_MODULE_0__/* .EditEmployeeProfileComponent */ .FW, _edit_employee_edit_employee_profile__WEBPACK_IMPORTED_MODULE_0__/* .EditEmployeeMainComponent */ .zw, _edit_employee_edit_employee_profile__WEBPACK_IMPORTED_MODULE_0__/* .EditEmployeeRatesComponent */ .fw, _manage_employee_invite_manage_employee_invite_component__WEBPACK_IMPORTED_MODULE_11__/* .ManageEmployeeInviteComponent */ .k, _edit_employee_edit_employee_profile__WEBPACK_IMPORTED_MODULE_0__/* .EditEmployeeProjectsComponent */ .SJ, _edit_employee_edit_employee_profile__WEBPACK_IMPORTED_MODULE_0__/* .EditEmployeeContactComponent */ .ws, _edit_employee_edit_employee_profile__WEBPACK_IMPORTED_MODULE_0__/* .EditEmployeeHiringComponent */ .Rx, _edit_employee_edit_employee_profile__WEBPACK_IMPORTED_MODULE_0__/* .EditEmployeeLocationComponent */ .N4, _edit_employee_edit_employee_profile__WEBPACK_IMPORTED_MODULE_0__/* .EditEmployeeEmploymentComponent */ .c, _edit_employee_edit_employee_profile_edit_employee_networks_edit_employee_networks_component__WEBPACK_IMPORTED_MODULE_4__/* .EditEmployeeNetworksComponent */ .p, _edit_employee_edit_employee_profile__WEBPACK_IMPORTED_MODULE_0__/* .EditEmployeeOtherSettingsComponent */ .V9];
let EmployeesModule = /*#__PURE__*/(() => {
  class EmployeesModule {
    static {
      this.ɵfac = function EmployeesModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || EmployeesModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵdefineNgModule"] */ .$C({
        type: EmployeesModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵdefineInjector"] */ .G2t({
        providers: [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_13__/* .OrganizationsService */ .k, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_14__/* .InviteGuard */ .D, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_15__/* .CandidatesService */ .S, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_16__/* .OrganizationEmploymentTypesService */ .m, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_17__/* .SkillsService */ .M],
        imports: [ckeditor4_angular__WEBPACK_IMPORTED_MODULE_18__/* .CKEditorModule */ .w, _nebular_theme__WEBPACK_IMPORTED_MODULE_19__/* .NbAccordionModule */ .LtP, _nebular_theme__WEBPACK_IMPORTED_MODULE_19__/* .NbActionsModule */ ._A2, _nebular_theme__WEBPACK_IMPORTED_MODULE_19__/* .NbBadgeModule */ .iEK, _nebular_theme__WEBPACK_IMPORTED_MODULE_19__/* .NbButtonModule */ .P5N, _nebular_theme__WEBPACK_IMPORTED_MODULE_19__/* .NbCardModule */ .lVF, _nebular_theme__WEBPACK_IMPORTED_MODULE_19__/* .NbCheckboxModule */ .Ad8, _nebular_theme__WEBPACK_IMPORTED_MODULE_19__/* .NbDatepickerModule */ .TgK, _nebular_theme__WEBPACK_IMPORTED_MODULE_19__/* .NbDialogModule */ .nZv.forChild(), _nebular_theme__WEBPACK_IMPORTED_MODULE_19__/* .NbIconModule */ .clu, _nebular_theme__WEBPACK_IMPORTED_MODULE_19__/* .NbInputModule */ .pty, _nebular_theme__WEBPACK_IMPORTED_MODULE_19__/* .NbRouteTabsetModule */ .x$5, _nebular_theme__WEBPACK_IMPORTED_MODULE_19__/* .NbSelectModule */ .VcP, _nebular_theme__WEBPACK_IMPORTED_MODULE_19__/* .NbSpinnerModule */ .gYs, _nebular_theme__WEBPACK_IMPORTED_MODULE_19__/* .NbTabsetModule */ .AfG, _nebular_theme__WEBPACK_IMPORTED_MODULE_19__/* .NbToggleModule */ .jVr, _nebular_theme__WEBPACK_IMPORTED_MODULE_19__/* .NbTooltipModule */ .IB0, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_20__/* .NgSelectModule */ .MQ, ngx_permissions__WEBPACK_IMPORTED_MODULE_21__/* .NgxPermissionsModule */ .Ov.forChild(), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_22__/* .TranslateModule */ .h.forChild(), _employees_routing_module__WEBPACK_IMPORTED_MODULE_2__/* .EmployeesRoutingModule */ .i, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_23__/* .SharedModule */ .G, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_24__/* .TableComponentsModule */ .p, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_25__/* .EmployeeMutationModule */ .k, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_26__/* .EmployeeEndWorkModule */ .$, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_27__/* .RecurringExpenseMutationModule */ .P, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_28__/* .ImageUploaderModule */ .M, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_29__/* .InviteMutationModule */ .h, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_30__/* .InviteTableModule */ .s, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_31__/* .RecurringExpenseDeleteConfirmationModule */ .u, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_32__/* .EditEmployeeMembershipFormModule */ .j, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_33__/* .RecurringExpenseBlockModule */ .P, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_34__/* .TagsColorInputModule */ .x, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_35__/* .SkillsInputModule */ .h, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_36__/* .EmployeeLocationModule */ .K, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_37__/* .EmployeeRatesModule */ .M, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_38__/* .EmployeeStartWorkModule */ .Q, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_39__/* .FavoriteToggleModule */ .F, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_40__/* .LanguageSelectorModule */ .A, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_41__/* .SmartDataViewLayoutModule */ .H, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_42__/* .CardGridModule */ .n, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_43__/* .TimeZoneSelectorModule */ .F, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_44__/* .DynamicTabsModule */ .A]
      });
    }
  }
  return EmployeesModule;
})();

/***/ }),

/***/ 21547:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   z: () => (/* binding */ EmployeeResolver)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9620);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(50666);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(47060);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(88319);




/**
 * Resolver function for fetching employee data by ID.
 *
 * @param route - The activated route snapshot containing route parameters.
 * @returns An observable of type IEmployee or `null` in case of an error.
 */
const EmployeeResolver = route => {
  // Injecting the necessary services
  const _router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__/* .inject */ .WQX)(_angular_router__WEBPACK_IMPORTED_MODULE_1__/* .Router */ .Ix);
  const _employeeService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__/* .inject */ .WQX)(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_2__/* .EmployeesService */ .r);
  try {
    // Extract employee ID from the route parameters
    const employeeId = route.paramMap.get('id');
    // Check if employee ID is present
    if (!employeeId) {
      // Return an observable emitting null if no employee ID is present
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(null);
    }
    // Fetch employee data by ID using the employee service
    return _employeeService.getEmployeeById(employeeId, ['user', 'user.image', 'organizationPosition']).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__/* .catchError */ .W)(() => {
      // Handle errors and navigate to employees page if an error occurs
      _router.navigate(['/pages/employees']);
      // Return an observable emitting null in case of an error
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(null);
    }));
  } catch (error) {
    // Handle synchronous errors by navigating to the employees page
    _router.navigate(['/pages/employees']);
    // Return an observable emitting null
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(null);
  }
};

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

/***/ 24519:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   i: () => (/* binding */ EmployeesRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(908);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(17785);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4106);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(86616);
/* harmony import */ var _employees_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63111);
/* harmony import */ var _manage_employee_invite_manage_employee_invite_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(24715);
/* harmony import */ var _edit_employee_edit_employee_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(761);
/* harmony import */ var _edit_employee_edit_employee_profile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(93159);
/* harmony import */ var _employee_resolver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(21547);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(26860);










const selectors = {
  team: false,
  project: false,
  employee: false,
  date: false,
  organization: false
};
const routes = [{
  path: '',
  component: _employees_component__WEBPACK_IMPORTED_MODULE_0__/* .EmployeesComponent */ .L,
  canActivate: [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_3__/* .PermissionsGuard */ .a],
  data: {
    // The data table identifier for the route
    dataTableId: 'employee-manage',
    // The permission required to access the route
    permissions: {
      only: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_4__/* .PermissionsEnum */ .U.ORG_EMPLOYEES_VIEW],
      redirectTo: '/pages/dashboard'
    },
    // The selectors for the route
    selectors: {
      team: false,
      project: false,
      employee: false,
      date: false
    }
  }
}, {
  path: 'edit/:id',
  component: _edit_employee_edit_employee_component__WEBPACK_IMPORTED_MODULE_1__/* .EditEmployeeComponent */ .U,
  canActivate: [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_3__/* .PermissionsGuard */ .a],
  data: {
    // The tabset identifier for the route
    tabsetId: 'employee-edit',
    // The permission required to access the route
    permissions: {
      only: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_4__/* .PermissionsEnum */ .U.ORG_EMPLOYEES_EDIT, _gauzy_contracts__WEBPACK_IMPORTED_MODULE_4__/* .PermissionsEnum */ .U.PROFILE_EDIT],
      redirectTo: '/pages/dashboard'
    },
    // The selectors for the route
    selectors
  },
  resolve: {
    employee: _employee_resolver__WEBPACK_IMPORTED_MODULE_5__/* .EmployeeResolver */ .z
  },
  children: [{
    path: '',
    redirectTo: 'account',
    pathMatch: 'full'
  }, {
    path: 'account',
    component: _edit_employee_edit_employee_profile__WEBPACK_IMPORTED_MODULE_2__/* .EditEmployeeMainComponent */ .zw,
    data: {
      selectors
    }
  }, {
    path: 'networks',
    component: _edit_employee_edit_employee_profile__WEBPACK_IMPORTED_MODULE_2__/* .EditEmployeeNetworksComponent */ .pc,
    data: {
      selectors
    }
  }, {
    path: 'rates',
    component: _edit_employee_edit_employee_profile__WEBPACK_IMPORTED_MODULE_2__/* .EditEmployeeRatesComponent */ .fw,
    data: {
      selectors
    }
  }, {
    path: 'projects',
    component: _edit_employee_edit_employee_profile__WEBPACK_IMPORTED_MODULE_2__/* .EditEmployeeProjectsComponent */ .SJ,
    canActivate: [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_3__/* .PermissionsGuard */ .a],
    data: {
      // The selectors for the route
      selectors,
      // The permission required to access the route
      permissions: {
        only: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_4__/* .PermissionsEnum */ .U.ALL_ORG_VIEW, _gauzy_contracts__WEBPACK_IMPORTED_MODULE_4__/* .PermissionsEnum */ .U.ORG_PROJECT_VIEW],
        redirectTo: '/pages/dashboard'
      }
    }
  }, {
    path: 'contacts',
    component: _edit_employee_edit_employee_profile__WEBPACK_IMPORTED_MODULE_2__/* .EditEmployeeContactComponent */ .ws,
    data: {
      selectors
    }
  }, {
    path: 'location',
    component: _edit_employee_edit_employee_profile__WEBPACK_IMPORTED_MODULE_2__/* .EditEmployeeLocationComponent */ .N4,
    data: {
      selectors
    }
  }, {
    path: 'hiring',
    component: _edit_employee_edit_employee_profile__WEBPACK_IMPORTED_MODULE_2__/* .EditEmployeeHiringComponent */ .Rx,
    data: {
      selectors
    }
  }, {
    path: 'employment',
    component: _edit_employee_edit_employee_profile__WEBPACK_IMPORTED_MODULE_2__/* .EditEmployeeEmploymentComponent */ .c,
    data: {
      selectors
    }
  }, {
    path: 'settings',
    component: _edit_employee_edit_employee_profile__WEBPACK_IMPORTED_MODULE_2__/* .EditEmployeeOtherSettingsComponent */ .V9,
    data: {
      selectors
    }
  }]
}, {
  path: 'invites',
  component: _manage_employee_invite_manage_employee_invite_component__WEBPACK_IMPORTED_MODULE_6__/* .ManageEmployeeInviteComponent */ .k,
  canActivate: [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_7__/* .InviteGuard */ .D],
  data: {
    expectedPermissions: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_4__/* .PermissionsEnum */ .U.ORG_INVITE_EDIT, _gauzy_contracts__WEBPACK_IMPORTED_MODULE_4__/* .PermissionsEnum */ .U.ORG_INVITE_VIEW],
    selectors: {
      project: false,
      employee: false,
      date: false
    }
  }
}, {
  path: 'timesheets',
  loadChildren: () => __webpack_require__.e(/* import() */ 9379).then(__webpack_require__.bind(__webpack_require__, 51760)).then(m => m.TimesheetModule)
}, {
  path: 'activity',
  loadChildren: () => Promise.all(/* import() */[__webpack_require__.e(2759), __webpack_require__.e(166), __webpack_require__.e(7288), __webpack_require__.e(9888)]).then(__webpack_require__.bind(__webpack_require__, 49888)).then(m => m.ActivityModule)
}];
let EmployeesRoutingModule = /*#__PURE__*/(() => {
  class EmployeesRoutingModule {
    static {
      this.ɵfac = function EmployeesRoutingModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || EmployeesRoutingModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵdefineNgModule"] */ .$C({
        type: EmployeesRoutingModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__/* .RouterModule */ .iI.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_9__/* .RouterModule */ .iI]
      });
    }
  }
  return EmployeesRoutingModule;
})();

/***/ }),

/***/ 24715:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   k: () => (/* binding */ ManageEmployeeInviteComponent)
/* harmony export */ });
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(99418);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26860);
/* harmony import */ var _packages_ui_core_shared_src_lib_invite_invites_invites_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37095);



let ManageEmployeeInviteComponent = /*#__PURE__*/(() => {
  class ManageEmployeeInviteComponent {
    constructor() {
      this.invitationTypeEnum = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__/* .InvitationTypeEnum */ .Tq;
    }
    static {
      this.ɵfac = function ManageEmployeeInviteComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || ManageEmployeeInviteComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineComponent"] */ .VBU({
        type: ManageEmployeeInviteComponent,
        selectors: [["ga-manage-employee-invite"]],
        standalone: false,
        decls: 1,
        vars: 1,
        consts: [[3, "invitationType"]],
        template: function ManageEmployeeInviteComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(0, "ga-invites", 0);
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("invitationType", ctx.invitationTypeEnum.EMPLOYEE);
          }
        },
        dependencies: [_packages_ui_core_shared_src_lib_invite_invites_invites_component__WEBPACK_IMPORTED_MODULE_2__/* .InvitesComponent */ .M],
        encapsulation: 2
      });
    }
  }
  return ManageEmployeeInviteComponent;
})();

/***/ }),

/***/ 27074:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ EmployeeAverageExpensesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);

let EmployeeAverageExpensesComponent = /*#__PURE__*/(() => {
  class EmployeeAverageExpensesComponent {
    static {
      this.ɵfac = function EmployeeAverageExpensesComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || EmployeeAverageExpensesComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: EmployeeAverageExpensesComponent,
        selectors: [["ga-employee-average-expenses"]],
        inputs: {
          rowData: "rowData",
          value: "value"
        },
        standalone: false,
        decls: 3,
        vars: 1,
        consts: [[1, "text-center"], [1, "d-block"]],
        template: function EmployeeAverageExpensesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 0)(1, "strong", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(ctx.rowData.averageExpenses);
          }
        },
        encapsulation: 2
      });
    }
  }
  return EmployeeAverageExpensesComponent;
})();

/***/ }),

/***/ 27697:
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

/***/ 30105:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ EditEmployeeHiringComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(64411);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10936);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72781);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73246);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23423);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22779);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(14486);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(71924);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(26860);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(56383);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(19223);










let EditEmployeeHiringComponent = class EditEmployeeHiringComponent {
  constructor(fb, employeeStore, store) {
    this.fb = fb;
    this.employeeStore = employeeStore;
    this.store = store;
    this.form = this.fb.group({
      offerDate: [],
      acceptDate: [],
      rejectDate: []
    }, {
      validators: [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_0__/* .CompareDateValidator */ .A.validateDate('offerDate', 'acceptDate'), _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_0__/* .CompareDateValidator */ .A.validateDate('offerDate', 'rejectDate')]
    });
  }
  ngOnInit() {
    this.employeeStore.selectedEmployee$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__/* .filter */ .p)(employee => !!employee), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .tap */ .M)(employee => this.selectedEmployee = employee), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .tap */ .M)(employee => this._patchForm(employee)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__/* .untilDestroyed */ .s)(this)).subscribe();
  }
  /**
   * Submits the form if it is valid. Updates the employeeStore with the form values
   * and additional information such as organizationId and tenantId.
   */
  submitForm() {
    if (!this.form.invalid) {
      return;
    }
    // Extract organizationId and tenantId from the selected organization
    const {
      id: organizationId,
      tenantId
    } = this.store.selectedOrganization;
    // Update the employee form in the store with the form values and additional info
    this.employeeStore.employeeForm = {
      ...this.form.value,
      organizationId,
      tenantId
    };
  }
  /**
   * Patches the form with values from the provided employee object.
   * Converts date fields to Date objects if they are present, otherwise sets them to null.
   *
   * @param employee - The employee object containing data to patch the form.
   */
  _patchForm(employee) {
    // Utility function to convert date string to Date object or null
    const toDateOrNull = date => date ? new Date(date) : null;
    // Patch form with the employee data, converting dates using the utility function
    this.form.patchValue({
      offerDate: toDateOrNull(employee.offerDate),
      acceptDate: toDateOrNull(employee.acceptDate),
      rejectDate: toDateOrNull(employee.rejectDate)
    });
  }
  ngOnDestroy() {}
  static {
    this.ɵfac = function EditEmployeeHiringComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || EditEmployeeHiringComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .UntypedFormBuilder */ .ze), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_6__/* .EmployeeStore */ .oO), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_7__/* .Store */ .il));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdefineComponent"] */ .VBU({
      type: EditEmployeeHiringComponent,
      selectors: [["ga-edit-employee-hiring"]],
      standalone: false,
      decls: 37,
      vars: 28,
      consts: [["offerDatePicker", ""], ["acceptDatePicker", ""], ["rejectDatePicker", ""], [1, "m-3"], [3, "formGroup"], [1, "row"], [1, "col"], [1, "form-group"], ["for", "offerDateInput", 1, "label"], ["fullWidth", "", "id", "offerDateInput", "formControlName", "offerDate", "nbInput", "", "autocomplete", "off", 3, "nbDatepicker", "placeholder"], ["for", "acceptDateInput", 1, "label"], ["fullWidth", "", "id", "acceptDateInput", "formControlName", "acceptDate", "nbInput", "", "autocomplete", "off", 3, "nbDatepicker", "placeholder", "status"], ["for", "rejectDateInput", 1, "label"], ["fullWidth", "", "id", "rejectDateInput", "formControlName", "rejectDate", "nbInput", "", "autocomplete", "off", 3, "nbDatepicker", "placeholder", "status"], [1, "actions"], ["nbButton", "", "status", "success", 3, "click", "disabled"]],
      template: function EditEmployeeHiringComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵgetCurrentView"] */ .RV6();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(0, "nb-card", 3)(1, "nb-card-body")(2, "form", 4)(3, "div", 5)(4, "div", 6)(5, "div", 7)(6, "label", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ .EFF(7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .nI1(8, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelement"] */ .nrm(9, "input", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .nI1(10, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelement"] */ .nrm(11, "nb-datepicker", null, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(13, "div", 6)(14, "div", 7)(15, "label", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ .EFF(16);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .nI1(17, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelement"] */ .nrm(18, "input", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .nI1(19, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelement"] */ .nrm(20, "nb-datepicker", null, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(22, "div", 5)(23, "div", 6)(24, "div", 7)(25, "label", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ .EFF(26);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .nI1(27, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelement"] */ .nrm(28, "input", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .nI1(29, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelement"] */ .nrm(30, "nb-datepicker", null, 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelement"] */ .nrm(32, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(33, "div", 14)(34, "button", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵlistener"] */ .bIt("click", function EditEmployeeHiringComponent_Template_button_click_34_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵrestoreView"] */ .eBV(_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵresetView"] */ .Njj(ctx.submitForm());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ .EFF(35);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .nI1(36, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s()()()()();
        }
        if (rf & 2) {
          const offerDatePicker_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵreference"] */ .sdS(12);
          const acceptDatePicker_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵreference"] */ .sdS(21);
          const rejectDatePicker_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵreference"] */ .sdS(31);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Y8G("formGroup", ctx.form);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .bMT(8, 14, "FORM.LABELS.OFFER_DATE"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Y8G("nbDatepicker", offerDatePicker_r2)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .bMT(10, 16, "POP_UPS.PICK_DATE"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .bMT(17, 18, "FORM.LABELS.ACCEPT_DATE"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Y8G("nbDatepicker", acceptDatePicker_r3)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .bMT(19, 20, "POP_UPS.PICK_DATE"))("status", ctx.form.get("acceptDate").invalid ? "danger" : "basic");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .bMT(27, 22, "FORM.LABELS.REJECT_DATE"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Y8G("nbDatepicker", rejectDatePicker_r4)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .bMT(29, 24, "POP_UPS.PICK_DATE"))("status", ctx.form.get("rejectDate").invalid ? "danger" : "basic");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Y8G("disabled", ctx.form.invalid);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .bMT(36, 26, "BUTTONS.SAVE"), " ");
        }
      },
      dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_8__/* .NbButtonComponent */ .YP2, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__/* .NbCardComponent */ .SrT, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__/* .NbCardBodyComponent */ .KH5, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__/* .NbDatepickerDirective */ .OA9, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__/* .NbDatepickerComponent */ .k2z, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__/* .NbInputDirective */ .i6h, _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* ["ɵNgNoValidate"] */ .qT, _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .DefaultValueAccessor */ .me, _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .NgControlStatus */ .BC, _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .NgControlStatusGroup */ .cb, _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .FormGroupDirective */ .j4, _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .FormControlName */ .JD, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__/* .TranslatePipe */ .D9],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%] {\n  height: 100%;\n}\n[dir=ltr]   [_nghost-%COMP%] {\n  border-radius: 0 var(--border-radius) var(--border-radius) var(--border-radius);\n}\n[dir=rtl]   [_nghost-%COMP%] {\n  border-radius: var(--border-radius) 0 var(--border-radius) var(--border-radius);\n}\n\n[_nghost-%COMP%]   .content[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100%;\n  background-color: var(--gauzy-card-2);\n  padding: 1rem;\n}\n[dir=ltr]   [_nghost-%COMP%]   .content[_ngcontent-%COMP%] {\n  border-radius: 0 var(--border-radius) var(--border-radius) var(--border-radius);\n}\n[dir=rtl]   [_nghost-%COMP%]   .content[_ngcontent-%COMP%] {\n  border-radius: var(--border-radius) 0 var(--border-radius) var(--border-radius);\n}\n[_nghost-%COMP%]   .content.main[_ngcontent-%COMP%] {\n  height: calc(100vh - 19.25rem);\n}\n\n[_nghost-%COMP%]   .organization-container[_ngcontent-%COMP%] {\n  padding: 15px;\n  position: relative;\n  display: flex;\n  align-items: flex-start;\n  flex-direction: column;\n  transition: transform 150ms ease-in-out;\n  background-color: rgba(126, 126, 143, 0.1);\n  border-radius: var(--border-radius);\n  width: 563px;\n  height: 100%;\n}\n[_nghost-%COMP%]   .organization-container[_ngcontent-%COMP%]   .organization-photo[_ngcontent-%COMP%] {\n  width: fit-content;\n  height: fit-content;\n  position: relative;\n  margin-left: 0 !important;\n}\n[_nghost-%COMP%]   .organization-container[_ngcontent-%COMP%]   .organization-photo[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  pointer-events: none;\n  background: black;\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  border-radius: var(--border-radius);\n}\n[_nghost-%COMP%]   .organization-container[_ngcontent-%COMP%]   .organization-photo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n  border-radius: var(--border-radius);\n}\n[_nghost-%COMP%]   .organization-container[_ngcontent-%COMP%]   .organization-photo[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  position: absolute;\n  z-index: 3;\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .organization-container[_ngcontent-%COMP%]   .organization-photo[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  z-index: 2;\n  transition: opacity 0.2s ease-in;\n  opacity: 0.3;\n  position: absolute;\n  top: calc(50% - 34px);\n  left: calc(50% - 34px);\n}\n[_nghost-%COMP%]   .organization-container[_ngcontent-%COMP%]   .employees-count-text[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 15px;\n  letter-spacing: 0em;\n}\n[dir=ltr]   [_nghost-%COMP%]   .organization-container[_ngcontent-%COMP%]   .employees-count-text[_ngcontent-%COMP%] {\n  margin-left: 1px;\n}\n[dir=rtl]   [_nghost-%COMP%]   .organization-container[_ngcontent-%COMP%]   .employees-count-text[_ngcontent-%COMP%] {\n  margin-right: 1px;\n}\n\n.main-form[_ngcontent-%COMP%] {\n  width: 100%;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n.main-form[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%] {\n  margin-top: 60px;\n}\n\n.row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\n  max-width: 50%;\n}\n\n  ga-currency .form-group {\n  display: inline-flex;\n  flex-direction: column;\n  min-width: 180px;\n}\n\n.tax-form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.tax-form-group[_ngcontent-%COMP%]   #taxIdInput[_ngcontent-%COMP%] {\n  width: 80%;\n}\n\n.registration-form-group[_ngcontent-%COMP%] {\n  display: inline-flex;\n  flex-direction: column;\n}\n\n  nb-select.shape-rectangle .select-button {\n  border-radius: var(--border-radius);\n}\n\n@media only screen and (max-width: 991px) {\n  .organization-container[_ngcontent-%COMP%] {\n    width: 350px;\n  }\n  .registration-form-group[_ngcontent-%COMP%]   #registrationDate[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .tax-form-group[_ngcontent-%COMP%]   #taxIdInput[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n    ga-currency .form-group {\n    display: flex;\n    flex-direction: column;\n  }\n}\n@media only screen and (max-width: 767px) {\n  [_nghost-%COMP%] {\n    height: auto;\n  }\n  .content[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .organization-container[_ngcontent-%COMP%], \n   .main-form[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .main-form[_ngcontent-%COMP%] {\n    padding: 0;\n    margin-top: 20px;\n  }\n  .row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    max-width: 100%;\n    margin-left: 0;\n  }\n  .row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\n    max-width: 100%;\n    padding: 0;\n  }\n  .form-group[_ngcontent-%COMP%] {\n    width: 100% !important;\n  }\n  .tax-form-group[_ngcontent-%COMP%]   #taxIdInput[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .registration-form-group[_ngcontent-%COMP%]   #registrationDate[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n    ga-currency .form-group {\n    display: flex;\n  }\n  .col-6[_ngcontent-%COMP%] {\n    max-width: 100%;\n    padding: 0 !important;\n  }\n  .main-form[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%] {\n    margin-top: 20px;\n  }\n}", "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%] {\n  background-color: var(--gauzy-card-2);\n  border-radius: var(--border-radius);\n  overflow-y: auto;\n  max-height: calc(100vh - 20.5rem);\n}\n\nnb-card-body[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-sidebar-background-2);\n  border-radius: var(--border-radius);\n}"]
    });
  }
};
EditEmployeeHiringComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_10__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__/* .UntilDestroy */ .d)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_10__/* .__metadata */ .Sn)("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .UntypedFormBuilder */ .ze, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_6__/* .EmployeeStore */ .oO, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_7__/* .Store */ .il])], EditEmployeeHiringComponent);


/***/ }),

/***/ 37807:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   r: () => (/* binding */ EmployeeBonusComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);

let EmployeeBonusComponent = /*#__PURE__*/(() => {
  class EmployeeBonusComponent {
    static {
      this.ɵfac = function EmployeeBonusComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || EmployeeBonusComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: EmployeeBonusComponent,
        selectors: [["ng-component"]],
        inputs: {
          rowData: "rowData"
        },
        standalone: false,
        decls: 3,
        vars: 1,
        consts: [[1, "text-center"], [1, "d-block"]],
        template: function EmployeeBonusComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 0)(1, "strong", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(ctx.rowData.bonus);
          }
        },
        encapsulation: 2
      });
    }
  }
  return EmployeeBonusComponent;
})();

/***/ }),

/***/ 44689:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: () => (/* binding */ EditEmployeeLocationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _packages_ui_core_shared_src_lib_employee_employee_location_employee_location_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95934);


let EditEmployeeLocationComponent = /*#__PURE__*/(() => {
  class EditEmployeeLocationComponent {
    static {
      this.ɵfac = function EditEmployeeLocationComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || EditEmployeeLocationComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: EditEmployeeLocationComponent,
        selectors: [["ga-edit-employee-location"]],
        standalone: false,
        decls: 1,
        vars: 1,
        consts: [[3, "isEmployee"]],
        template: function EditEmployeeLocationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(0, "ga-employee-location", 0);
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("isEmployee", true);
          }
        },
        dependencies: [_packages_ui_core_shared_src_lib_employee_employee_location_employee_location_component__WEBPACK_IMPORTED_MODULE_1__/* .EmployeeLocationComponent */ .H],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%] {\n  overflow-y: auto;\n  height: calc(100vh - 20.5rem);\n}\n[_nghost-%COMP%]     .container {\n  max-width: none;\n}\n[dir=ltr]   [_nghost-%COMP%]     .container .col-4 {\n  padding-left: 0 !important;\n}\n[dir=rtl]   [_nghost-%COMP%]     .container .col-4 {\n  padding-right: 0 !important;\n}\n[_nghost-%COMP%]     nb-card {\n  padding: 1rem;\n}\n[_nghost-%COMP%]     nb-card nb-card-body {\n  margin: 0 !important;\n}"]
      });
    }
  }
  return EditEmployeeLocationComponent;
})();

/***/ }),

/***/ 51210:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   u: () => (/* binding */ RecurringExpenseDeleteConfirmationModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14572);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10936);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56383);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19223);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);






let RecurringExpenseDeleteConfirmationModule = /*#__PURE__*/(() => {
  class RecurringExpenseDeleteConfirmationModule {
    static {
      this.ɵfac = function RecurringExpenseDeleteConfirmationModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || RecurringExpenseDeleteConfirmationModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .$C({
        type: RecurringExpenseDeleteConfirmationModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .CommonModule */ .MD, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .FormsModule */ .YN, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .ReactiveFormsModule */ .X1, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbRadioModule */ .iyp, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbCardModule */ .lVF, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbButtonModule */ .P5N, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__/* .TranslateModule */ .h.forChild()]
      });
    }
  }
  return RecurringExpenseDeleteConfirmationModule;
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

/***/ 58989:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   w: () => (/* binding */ EmployeeAverageIncomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);

let EmployeeAverageIncomeComponent = /*#__PURE__*/(() => {
  class EmployeeAverageIncomeComponent {
    static {
      this.ɵfac = function EmployeeAverageIncomeComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || EmployeeAverageIncomeComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: EmployeeAverageIncomeComponent,
        selectors: [["ga-employee-average-income"]],
        inputs: {
          rowData: "rowData",
          value: "value"
        },
        standalone: false,
        decls: 3,
        vars: 1,
        consts: [[1, "text-center"], [1, "d-block"]],
        template: function EmployeeAverageIncomeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 0)(1, "strong", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(ctx.rowData.averageIncome);
          }
        },
        encapsulation: 2
      });
    }
  }
  return EmployeeAverageIncomeComponent;
})();

/***/ }),

/***/ 59743:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ LanguageSelectorModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14572);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10936);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56383);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(55567);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(19223);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25023);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);








let LanguageSelectorModule = /*#__PURE__*/(() => {
  class LanguageSelectorModule {
    static {
      this.ɵfac = function LanguageSelectorModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || LanguageSelectorModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .$C({
        type: LanguageSelectorModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .G2t({
        providers: [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_1__/* .LanguagesService */ .D],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__/* .CommonModule */ .MD, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbSelectModule */ .VcP, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbBadgeModule */ .iEK, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .FormsModule */ .YN, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__/* .NgSelectModule */ .MQ, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__/* .TranslateModule */ .h.forChild()]
      });
    }
  }
  return LanguageSelectorModule;
})();

/***/ }),

/***/ 63111:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ EmployeesComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(73014);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(64411);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(9620);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(45715);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(56383);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(19223);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(24237);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(71181);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(73246);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(72781);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(36950);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(23423);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(35665);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(88319);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(71924);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(15480);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(54263);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(14486);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(28634);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(17134);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17785);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(81236);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(99418);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(15788);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(56314);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(46076);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(26024);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(64913);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47108);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(91137);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(49362);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(6231);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(55101);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(59230);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(76229);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(21968);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(47944);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(87791);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(91045);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(87494);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(11031);
/* harmony import */ var _table_components__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(58989);
/* harmony import */ var _table_components__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(27074);
/* harmony import */ var _table_components__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(86695);
/* harmony import */ var _table_components__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(20517);
/* harmony import */ var _table_components__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(56397);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(908);
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(79475);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(14572);
/* harmony import */ var _packages_ui_core_shared_src_lib_components_header_title_header_title_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(49072);
/* harmony import */ var _packages_ui_core_shared_src_lib_components_layout_selector_layout_selector_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(51102);
/* harmony import */ var _packages_ui_core_shared_src_lib_directives_debounce_click_directive__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(20345);
/* harmony import */ var _packages_ui_core_shared_src_lib_directives_under_construction_directive__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(67063);
/* harmony import */ var _packages_ui_core_shared_src_lib_favorite_toggle_favorite_toggle_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(6421);
/* harmony import */ var angular2_smart_table__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(52345);
/* harmony import */ var _packages_ui_core_shared_src_lib_gauzy_button_action_gauzy_button_action_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(45293);
/* harmony import */ var _packages_ui_core_shared_src_lib_smart_data_layout_pagination_pagination_v2_pagination_v2_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(3456);
/* harmony import */ var _packages_ui_core_shared_src_lib_card_grid_card_grid_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(49517);
































const _c0 = ["grid"];
const _c1 = ["actionButtons"];
const _c2 = a0 => [a0];
const _c3 = a0 => ({
  $implicit: a0
});
const _c4 = (a0, a1) => [a0, a1];
const _c5 = () => ["ORG_EMPLOYEES_VIEW"];
function EmployeesComponent_ng_template_10_ng_template_0_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("routerLink", "/pages/employees/invites");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(2, 2, "BUTTONS.MANAGE_INVITES"), " ");
  }
}
function EmployeesComponent_ng_template_10_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(0, EmployeesComponent_ng_template_10_ng_template_0_ng_template_0_Template, 3, 4, "ng-template", 18);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r1.organization == null ? null : ctx_r1.organization.invitesAllowed);
  }
}
function EmployeesComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(0, EmployeesComponent_ng_template_10_ng_template_0_Template, 1, 1, "ng-template", 9);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngxPermissionsOnly", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction1"] */ .eq3(1, _c2, ctx_r1.PermissionsEnum.ORG_INVITE_VIEW));
  }
}
function EmployeesComponent_ng_template_21_ng_template_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "ngx-pagination", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("source", ctx_r1.smartTableSource);
  }
}
function EmployeesComponent_ng_template_21_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 23)(1, "angular2-smart-table", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("userRowSelect", function EmployeesComponent_ng_template_21_ng_template_1_Template_angular2_smart_table_userRowSelect_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.selectEmployee($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(2, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(3, EmployeesComponent_ng_template_21_ng_template_1_ng_container_3_Template, 2, 1, "ng-container", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("settings", ctx_r1.settingsSmartTable)("source", ctx_r1.smartTableSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r1.smartTableSource);
  }
}
function EmployeesComponent_ng_template_21_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 28)(1, "ga-card-grid", 29, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("onSelectedItem", function EmployeesComponent_ng_template_21_ng_template_2_Template_ga_card_grid_onSelectedItem_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.selectEmployee($event));
    })("scroll", function EmployeesComponent_ng_template_21_ng_template_2_Template_ga_card_grid_scroll_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.onScroll());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("totalItems", ctx_r1.pagination == null ? null : ctx_r1.pagination.totalItems)("settings", ctx_r1.settingsSmartTable)("source", ctx_r1.employees);
  }
}
function EmployeesComponent_ng_template_21_3_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(2, 1, "SETTINGS_MENU.NO_LAYOUT"));
  }
}
function EmployeesComponent_ng_template_21_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(0, EmployeesComponent_ng_template_21_3_ng_template_0_Template, 3, 3, "ng-template");
  }
}
function EmployeesComponent_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, EmployeesComponent_ng_template_21_ng_template_1_Template, 4, 3, "ng-template", 21)(2, EmployeesComponent_ng_template_21_ng_template_2_Template, 3, 3, "ng-template", 21)(3, EmployeesComponent_ng_template_21_3_Template, 1, 0, null, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngSwitch", ctx_r1.dataLayoutStyle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngSwitchCase", ctx_r1.componentLayoutStyleEnum.TABLE);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngSwitchCase", ctx_r1.componentLayoutStyleEnum.CARDS_GRID);
  }
}
function EmployeesComponent_ng_template_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(0, "div");
  }
}
function EmployeesComponent_ng_template_23_ng_template_0_ng_template_0_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function EmployeesComponent_ng_template_23_ng_template_0_ng_template_0_ng_template_0_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.invite());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "nb-icon", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(3, 1, "BUTTONS.INVITE"), " ");
  }
}
function EmployeesComponent_ng_template_23_ng_template_0_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(0, EmployeesComponent_ng_template_23_ng_template_0_ng_template_0_ng_template_0_Template, 4, 3, "ng-template", 18);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r1.organization == null ? null : ctx_r1.organization.invitesAllowed);
  }
}
function EmployeesComponent_ng_template_23_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(0, EmployeesComponent_ng_template_23_ng_template_0_ng_template_0_Template, 1, 1, "ng-template", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(1, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function EmployeesComponent_ng_template_23_ng_template_0_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.add());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(2, "nb-icon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngxPermissionsOnly", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction1"] */ .eq3(4, _c2, ctx_r1.PermissionsEnum.ORG_INVITE_EDIT));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(4, 2, "BUTTONS.ADD"), " ");
  }
}
function EmployeesComponent_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(0, EmployeesComponent_ng_template_23_ng_template_0_Template, 5, 6, "ng-template", 9);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngxPermissionsOnly", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction1"] */ .eq3(1, _c2, ctx_r1.PermissionsEnum.ORG_EMPLOYEES_EDIT));
  }
}
function EmployeesComponent_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function EmployeesComponent_ng_template_25_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.startEmployeeWork());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "nb-icon", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(3, 1, "BUTTONS.START_WORK"), " ");
  }
}
function EmployeesComponent_ng_template_27_ngx_favorite_toggle_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "ngx-favorite-toggle", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("favoriteToggled", function EmployeesComponent_ng_template_27_ngx_favorite_toggle_1_Template_ngx_favorite_toggle_favoriteToggled_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r8);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.onEmployeeFavoriteToggled($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("entityType", "Employee")("entityId", ctx_r1.selectedEmployee.id)("entityName", ctx_r1.getEmployeeDisplayName(ctx_r1.selectedEmployee))("disabled", ctx_r1.disabledButton)("showLabel", false);
  }
}
function EmployeesComponent_ng_template_27_ng_template_2_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "nb-icon", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(4, 1, "BUTTONS.VIEW"), " ");
  }
}
function EmployeesComponent_ng_template_27_ng_template_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(1, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("throttledClick", function EmployeesComponent_ng_template_27_ng_template_2_ng_container_1_Template_button_throttledClick_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r10);
      const selectedItem_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.restoreToWork(selectedItem_r11));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(2, "nb-icon", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(4, 1, "BUTTONS.RESTORE"), " ");
  }
}
function EmployeesComponent_ng_template_27_ng_template_2_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(1, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("throttledClick", function EmployeesComponent_ng_template_27_ng_template_2_ng_container_2_ng_container_1_Template_button_throttledClick_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r13);
      const selectedItem_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(3).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.timeTrackingAction(selectedItem_r11));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(2, "nb-icon", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const selectedItem_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(4, 1, (selectedItem_r11 == null ? null : selectedItem_r11.isTrackingEnabled) ? "BUTTONS.TIME_TRACKING_DISABLE" : "BUTTONS.TIME_TRACKING_ENABLE"), " ");
  }
}
function EmployeesComponent_ng_template_27_ng_template_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, EmployeesComponent_ng_template_27_ng_template_2_ng_container_2_ng_container_1_Template, 5, 3, "ng-container", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(2, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function EmployeesComponent_ng_template_27_ng_template_2_ng_container_2_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r12);
      const selectedItem_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj((selectedItem_r11 == null ? null : selectedItem_r11.endWork) ? ctx_r1.backToWork(selectedItem_r11) : ctx_r1.endWork(selectedItem_r11));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(3, "nb-icon", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const selectedItem_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2).$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", selectedItem_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("disabled", ctx_r1.disableButton || !(selectedItem_r11 == null ? null : selectedItem_r11.isActive));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(5, 3, selectedItem_r11 && (selectedItem_r11 == null ? null : selectedItem_r11.endWork) ? "EMPLOYEES_PAGE.BACK_TO_WORK" : "EMPLOYEES_PAGE.END_WORK"), " ");
  }
}
function EmployeesComponent_ng_template_27_ng_template_2_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(1, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function EmployeesComponent_ng_template_27_ng_template_2_ng_container_7_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r14);
      const selectedItem_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.delete(selectedItem_r11));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(3, "nb-icon", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(2, 1, "BUTTONS.DELETE"));
  }
}
function EmployeesComponent_ng_template_27_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(0, EmployeesComponent_ng_template_27_ng_template_2_ng_template_0_Template, 5, 3, "ng-template", 39)(1, EmployeesComponent_ng_template_27_ng_template_2_ng_container_1_Template, 5, 3, "ng-container", 26)(2, EmployeesComponent_ng_template_27_ng_template_2_ng_container_2_Template, 6, 5, "ng-container", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(3, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function EmployeesComponent_ng_template_27_ng_template_2_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r9);
      const selectedItem_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.edit(selectedItem_r11));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(4, "nb-icon", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(7, EmployeesComponent_ng_template_27_ng_template_2_ng_container_7_Template, 4, 3, "ng-container", 26);
  }
  if (rf & 2) {
    const selectedItem_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    const startWork_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", selectedItem_r11 && (selectedItem_r11 == null ? null : selectedItem_r11.isDeleted));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", (ctx_r1.selectedEmployee == null ? null : ctx_r1.selectedEmployee.startedWorkOn) && (ctx_r1.selectedEmployee == null ? null : ctx_r1.selectedEmployee.isActive) && !(ctx_r1.selectedEmployee == null ? null : ctx_r1.selectedEmployee.workStatus))("ngIfElse", startWork_r15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("disabled", ctx_r1.disableButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(6, 6, "BUTTONS.EDIT"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", selectedItem_r11 && !(selectedItem_r11 == null ? null : selectedItem_r11.isDeleted));
  }
}
function EmployeesComponent_ng_template_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, EmployeesComponent_ng_template_27_ngx_favorite_toggle_1_Template, 1, 5, "ngx-favorite-toggle", 37)(2, EmployeesComponent_ng_template_27_ng_template_2_Template, 8, 8, "ng-template", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r1.selectedEmployee);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngxPermissionsOnly", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction2"] */ .l_i(2, _c4, ctx_r1.PermissionsEnum.ORG_EMPLOYEES_EDIT, ctx_r1.PermissionsEnum.ORG_EMPLOYEES_VIEW));
  }
}
let EmployeesComponent = class EmployeesComponent extends _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_1__/* .PaginationFilterBaseComponent */ .t {
  set grid(content) {
    if (content) {
      this._grid = content;
    }
  }
  constructor(translateService, _employeesService, _dialogService, _store, _router, _toastrService, _route, _errorHandlingService, _employeeStore, _httpClient, _dateFormatPipe, _pageDataTableRegistryService, genericFavoriteService) {
    super(translateService);
    this.translateService = translateService;
    this._employeesService = _employeesService;
    this._dialogService = _dialogService;
    this._store = _store;
    this._router = _router;
    this._toastrService = _toastrService;
    this._route = _route;
    this._errorHandlingService = _errorHandlingService;
    this._employeeStore = _employeeStore;
    this._httpClient = _httpClient;
    this._dateFormatPipe = _dateFormatPipe;
    this._pageDataTableRegistryService = _pageDataTableRegistryService;
    this.genericFavoriteService = genericFavoriteService;
    this.dataTableId = this._route.snapshot.data.dataTableId; // The identifier for the data table
    this.employees = [];
    this.viewComponentName = _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_2__/* .ComponentEnum */ .L.EMPLOYEES;
    this.PermissionsEnum = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__/* .PermissionsEnum */ .U;
    this.dataLayoutStyle = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_4__/* .ComponentLayoutStyleEnum */ .IE.TABLE;
    this.componentLayoutStyleEnum = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_4__/* .ComponentLayoutStyleEnum */ .IE;
    this.bonusForSelectedMonth = 0;
    this.disableButton = true;
    this.includeDeleted = false;
    this.loading = false;
    this.refresh$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__/* .Subject */ .B();
    this.employees$ = this.subject$;
    this.favoriteEmployees = [];
    this.setView();
  }
  ngOnInit() {
    this._registerDataTableColumns();
    this._loadSmartTableSettings();
    this._subscribeToQueryParams();
    this.employees$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__/* .debounceTime */ .B)(300), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .M)(() => this.clearItem()), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .M)(() => this.getEmployees()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__/* .untilDestroyed */ .s)(this)).subscribe();
    this.pagination$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__/* .debounceTime */ .B)(100), (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_9__/* .distinctUntilChange */ .nI)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .M)(() => this.employees$.next(true)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__/* .untilDestroyed */ .s)(this)).subscribe();
    this._store.selectedOrganization$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__/* .debounceTime */ .B)(100), (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_9__/* .distinctUntilChange */ .nI)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_10__/* .filter */ .p)(organization => !!organization), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .M)(organization => this.organization = organization), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .M)(() => this._additionalColumns()), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .M)(() => this.refresh$.next(true)), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .M)(() => this.employees$.next(true)), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .M)(() => this.loadFavoriteEmployees()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__/* .untilDestroyed */ .s)(this)).subscribe();
    this.refresh$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__/* .filter */ .p)(() => this.dataLayoutStyle === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_4__/* .ComponentLayoutStyleEnum */ .IE.CARDS_GRID), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .M)(() => this.refreshPagination()), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .M)(() => this.employees = []), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__/* .untilDestroyed */ .s)(this)).subscribe();
  }
  ngAfterViewInit() {
    this._applyTranslationOnSmartTable();
  }
  /**
   * Subscribes to the query parameters and performs actions based on the 'openAddDialog' parameter.
   */
  _subscribeToQueryParams() {
    this._route.queryParamMap.pipe(
    // Check if 'openAddDialog' is set to 'true' and filter out falsy values
    (0,rxjs__WEBPACK_IMPORTED_MODULE_10__/* .filter */ .p)(params => params?.get('openAddDialog') === 'true'),
    // Trigger the add method
    (0,rxjs__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .M)(() => this.add()),
    // Automatically unsubscribe when component is destroyed
    (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__/* .untilDestroyed */ .s)(this)).subscribe();
  }
  /**
   * Checks if the current user has the necessary permissions to perform button actions.
   * @returns A boolean indicating whether the user has the required permissions.
   */
  haveBtnActionPermissions() {
    return !this._store.hasAllPermissions(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__/* .PermissionsEnum */ .U.ORG_EMPLOYEES_EDIT, _gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__/* .PermissionsEnum */ .U.ORG_INVITE_EDIT);
  }
  /**
   * @description
   * This method sets the view layout for the component based on the current layout configuration.
   * It listens for layout changes from the store and updates the `dataLayoutStyle`.
   * Depending on the layout (e.g., if it's `CARDS_GRID`), it clears the employee list and triggers a refresh.
   */
  setView() {
    this._store.componentLayout$(this.viewComponentName).pipe((0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_9__/* .distinctUntilChange */ .nI)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .M)(componentLayout => this.dataLayoutStyle = componentLayout), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .M)(() => this.refreshPagination()), (0,rxjs__WEBPACK_IMPORTED_MODULE_10__/* .filter */ .p)(componentLayout => componentLayout === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_4__/* .ComponentLayoutStyleEnum */ .IE.CARDS_GRID), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .M)(() => this.employees = []), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .M)(() => this.employees$.next(true)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__/* .untilDestroyed */ .s)(this)).subscribe();
  }
  /**
   * Selects an employee based on the given parameters.
   * @param param0 Object containing selection information.
   */
  selectEmployee({
    isSelected,
    data
  }) {
    // Update selected employee and button state
    this.selectedEmployee = isSelected ? data : null;
    this.disableButton = !isSelected;
    // Check if using cards grid and custom component instance is AllowScreenshotCaptureComponent
    if (this.dataLayoutStyle === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_4__/* .ComponentLayoutStyleEnum */ .IE.CARDS_GRID && this._grid) {
      const customComponentInstance = this._grid.customComponentInstance();
      // Handle AllowScreenshotCaptureComponent specific logic
      if (customComponentInstance?.constructor === _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_11__/* .AllowScreenshotCaptureComponent */ .r) {
        this.disableButton = true;
        const instance = customComponentInstance;
        this._updateAllowScreenshotCapture(instance.rowData, !instance.allowed);
        this._grid.clearCustomViewComponent();
        this.clearItem();
      }
    }
  }
  /**
   * Add multiple employees to the organization.
   * Handles dialog response, displays success toast on employee addition,
   * and refreshes UI after completion.
   */
  add() {
    var _this = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A)(function* () {
      // Check if organization is defined
      if (!_this.organization) {
        return;
      }
      const {
        name
      } = _this.organization;
      // Open employee mutation dialog
      const dialog = _this._dialogService.open(_gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_13__/* .EmployeeMutationComponent */ .P);
      try {
        // Wait for dialog response
        const employees = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_14__/* .firstValueFrom */ ._)(dialog.onClose);
        // Process response if available
        if (employees) {
          employees.forEach(employee => {
            const {
              firstName,
              lastName
            } = employee.user;
            const fullName = firstName && lastName ? `${firstName} ${lastName}` : 'Unknown Employee';
            _this._toastrService.success('TOASTR.MESSAGE.EMPLOYEE_ADDED', {
              name: fullName,
              organization: name
            });
          });
        }
      } catch (error) {
        // Handle errors
        console.log('Error while adding employee', error);
        _this._errorHandlingService.handleError(error);
      } finally {
        // Refresh UI
        _this.refresh$.next(true);
        _this.employees$.next(true);
      }
    })();
  }
  /**
   * Navigates to the edit page for the selected employee if available.
   * If no employee is selected, navigates to the default edit page.
   * @param selectedItem The employee view model to edit
   */
  edit(selectedItem) {
    if (selectedItem) {
      // Select the employee
      this.selectEmployee({
        isSelected: true,
        data: selectedItem
      });
      // Navigate to edit page for the selected employee
      this._router.navigate(['/pages/employees/edit', selectedItem.id]);
    } else if (this.selectedEmployee) {
      // Navigate to edit page for the currently selected employee
      this._router.navigate(['/pages/employees/edit', this.selectedEmployee.id]);
    }
  }
  /**
   * Opens an invitation dialog for adding new employees.
   * Waits for the dialog to close before proceeding.
   */
  invite() {
    var _this2 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A)(function* () {
      try {
        const dialog = _this2._dialogService.open(_gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_15__/* .InviteMutationComponent */ .w, {
          context: {
            invitationType: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_16__/* .InvitationTypeEnum */ .Tq.EMPLOYEE
          }
        });
        yield (0,rxjs__WEBPACK_IMPORTED_MODULE_14__/* .firstValueFrom */ ._)(dialog.onClose);
        // Optionally handle any post-invitation logic here
      } catch (error) {
        console.log('Error while inviting employee', error);
        _this2._errorHandlingService.handleError(error);
      }
    })();
  }
  /**
   * Deletes the selected employee after confirmation.
   *
   * @param selectedItem The employee view model to delete.
   */
  delete(selectedItem) {
    var _this3 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A)(function* () {
      if (selectedItem) {
        _this3.selectEmployee({
          isSelected: true,
          data: selectedItem
        });
      }
      if (!_this3.organization || !_this3.selectedEmployee) {
        return;
      }
      const {
        id: organizationId,
        tenantId
      } = _this3.organization;
      const {
        fullName,
        id: employeeId
      } = _this3.selectedEmployee;
      // Open the delete confirmation dialog
      const confirmationDialog = _this3._dialogService.open(_gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_17__/* .DeleteConfirmationComponent */ .u, {
        context: {
          recordType: `${fullName} ${_this3.getTranslation('FORM.DELETE_CONFIRMATION.EMPLOYEE')}`
        }
      });
      // Wait for the dialog to close
      confirmationDialog.onClose.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__/* .untilDestroyed */ .s)(_this3)).subscribe(/*#__PURE__*/function () {
        var _ref = (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A)(function* (result) {
          if (result) {
            try {
              yield _this3._employeesService.softRemove(employeeId, {
                organizationId,
                tenantId
              });
              _this3._employeeStore.employeeAction = {
                action: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_18__/* .CrudActionEnum */ .GD.DELETED,
                employees: [_this3.selectedEmployee]
              };
              // Get the full name of the selected employee
              const name = _this3.selectedEmployee.fullName.trim() || 'Unknown Employee';
              // Display a success toast message
              _this3._toastrService.success('TOASTR.MESSAGE.EMPLOYEE_INACTIVE', {
                name
              });
            } catch (error) {
              console.log('Error while deleting employee', error);
              _this3._errorHandlingService.handleError(error);
            } finally {
              _this3.refresh$.next(true);
              _this3.employees$.next(true);
            }
          }
        });
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    })();
  }
  /**
   * Ends work for the selected employee after confirmation.
   *
   * @param selectedItem The employee view model for which work is ended.
   */
  endWork(selectedItem) {
    var _this4 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A)(function* () {
      if (selectedItem) {
        _this4.selectEmployee({
          isSelected: true,
          data: selectedItem
        });
      }
      if (!_this4.organization || !_this4.selectedEmployee) {
        return;
      }
      const {
        id: organizationId,
        tenantId
      } = _this4.organization;
      // Open the end work dialog
      const dialog = _this4._dialogService.open(_gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_19__/* .EmployeeEndWorkComponent */ .A, {
        context: {
          endWorkValue: _this4.selectedEmployee.endWork,
          startWorkValue: _this4.selectedEmployee.startedWorkOn,
          employeeFullName: _this4.selectedEmployee.fullName
        }
      });
      try {
        const data = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_14__/* .firstValueFrom */ ._)(dialog.onClose);
        if (!data) {
          return;
        }
        // Update the employee's endWork property
        yield _this4._employeesService.setEmployeeEndWork(_this4.selectedEmployee.id, data, {
          organizationId,
          tenantId
        });
        // Get the full name of the selected employee
        const name = _this4.selectedEmployee.fullName.trim() || 'Unknown Employee';
        // Show a success toastr message
        _this4._toastrService.success('TOASTR.MESSAGE.EMPLOYEE_INACTIVE', {
          name
        });
      } catch (error) {
        console.log('Error while ending employee work', error);
        _this4._errorHandlingService.handleError(error);
      } finally {
        _this4.refresh$.next(true);
        _this4.employees$.next(true);
      }
    })();
  }
  /**
   * Brings the selected employee back to work after confirmation.
   *
   * @param selectedItem The employee view model for which work is resumed.
   */
  backToWork(selectedItem) {
    var _this5 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A)(function* () {
      if (selectedItem) {
        _this5.selectEmployee({
          isSelected: true,
          data: selectedItem
        });
      }
      if (!_this5.organization || !_this5.selectedEmployee) {
        return;
      }
      const {
        id: organizationId,
        tenantId
      } = _this5.organization;
      // Open the end work dialog
      const dialog = _this5._dialogService.open(_gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_19__/* .EmployeeEndWorkComponent */ .A, {
        context: {
          backToWork: true,
          employeeFullName: _this5.selectedEmployee.fullName
        }
      });
      const data = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_14__/* .firstValueFrom */ ._)(dialog.onClose);
      if (!data) {
        return;
      }
      try {
        // Update the employee's endWork property
        yield _this5._employeesService.setEmployeeEndWork(_this5.selectedEmployee.id, null, {
          organizationId,
          tenantId
        });
        // Get the full name of the selected employee
        const name = _this5.selectedEmployee.fullName.trim() || 'Unknown Employee';
        // Display a success toast message
        _this5._toastrService.success('TOASTR.MESSAGE.EMPLOYEE_ACTIVE', {
          name
        });
      } catch (error) {
        console.log('Error while backing employee work', error);
        _this5._errorHandlingService.handleError(error);
      } finally {
        _this5.refresh$.next(true);
        _this5.employees$.next(true);
      }
    })();
  }
  /**
   * Restore deleted employee to active status.
   *
   * @param selectedItem The employee view model to restore.
   */
  restoreToWork(selectedItem) {
    var _this6 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A)(function* () {
      _this6.selectEmployee({
        isSelected: true,
        data: selectedItem
      });
      if (!_this6.organization || !_this6.selectedEmployee) {
        return;
      }
      try {
        const {
          id: organizationId,
          tenantId
        } = _this6.organization;
        yield _this6._employeesService.softRecover(_this6.selectedEmployee.id, {
          organizationId,
          tenantId
        });
        // Get the full name of the selected employee
        const name = _this6.selectedEmployee.fullName.trim() || 'Unknown Employee';
        // Display a success toast message
        _this6._toastrService.success('TOASTR.MESSAGE.EMPLOYEE_ACTIVE', {
          name
        });
      } catch (error) {
        _this6._errorHandlingService.handleError(error);
      } finally {
        _this6.refresh$.next(true);
        _this6.employees$.next(true);
      }
    })();
  }
  /**
   * Enable or disable time tracking status for the selected employee.
   *
   * @param selectedItem The employee view model to perform time tracking action on.
   */
  timeTrackingAction(selectedItem) {
    var _this7 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A)(function* () {
      _this7.selectEmployee({
        isSelected: true,
        data: selectedItem
      });
      if (!_this7.organization || !_this7.selectedEmployee) {
        return;
      }
      try {
        const {
          id: organizationId,
          tenantId
        } = _this7.organization;
        const {
          isTrackingEnabled
        } = _this7.selectedEmployee;
        // // Get the full name of the selected employee
        const name = _this7.selectedEmployee.fullName.trim() || 'Unknown Employee';
        // Update the employee's timeTrackingEnabled property
        yield _this7._employeesService.setEmployeeTimeTrackingStatus(_this7.selectedEmployee.id, !isTrackingEnabled, {
          organizationId,
          tenantId
        });
        const toastMessageKey = isTrackingEnabled ? 'TOASTR.MESSAGE.EMPLOYEE_TIME_TRACKING_DISABLED' : 'TOASTR.MESSAGE.EMPLOYEE_TIME_TRACKING_ENABLED';
        _this7._toastrService.success(toastMessageKey, {
          name
        });
      } catch (error) {
        console.log('Error while enabling/disabling time tracking', error);
        _this7._errorHandlingService.handleError(error);
      } finally {
        _this7.refresh$.next(true);
        _this7.employees$.next(true);
      }
    })();
  }
  /*
   * Register Smart Table Source Config
   */
  setSmartTableSource() {
    if (!this.organization) {
      return; // Early exit if organization is undefined
    }
    try {
      this.loading = true; // Indicate loading state
      const {
        id: organizationId,
        tenantId
      } = this.organization;
      this.smartTableSource = new _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_20__/* .ServerDataSource */ .N(this._httpClient, {
        endPoint: `${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_21__/* .API_PREFIX */ .m4}/employee/pagination`,
        relations: ['user', 'tags'],
        withDeleted: this.includeDeleted,
        // Include soft-deleted records if flag is true
        where: {
          organizationId,
          tenantId,
          ...(this.filters.where ? this.filters.where : {}) // Include additional filter conditions
        },
        resultMap: employee => {
          return {
            ...employee,
            // Spread employee properties
            ...this.employeeMapper(employee) // Map additional properties
          };
        },
        finalize: () => {
          this.updatePagination(this.smartTableSource.count());
          this.loading = false; // Update loading state
        }
      });
    } finally {
      this.loading = false; // Update loading state
    }
  }
  /**
   * Update pagination information
   * @param totalItems - Total items returned from the server
   */
  updatePagination(totalItems) {
    this.setPagination({
      ...this.getPagination(),
      totalItems
    });
  }
  /**
   * Fetch and display employees based on current organization settings and layout style.
   */
  getEmployees() {
    var _this8 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A)(function* () {
      try {
        if (!_this8.organization) {
          return;
        }
        _this8.setSmartTableSource();
        // Configure pagination
        const {
          activePage,
          itemsPerPage
        } = _this8.getPagination();
        // Set paging
        _this8.smartTableSource.setPaging(activePage, itemsPerPage, false);
        // Fetch elements based on layout style
        if (_this8.dataLayoutStyle === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_4__/* .ComponentLayoutStyleEnum */ .IE.CARDS_GRID) {
          yield _this8.smartTableSource.getElements();
          _this8.employees.push(..._this8.smartTableSource.getData());
        }
      } catch (error) {
        console.log('Error while fetching employees', error);
        _this8._errorHandlingService.handleError(error); // Example: Use your error handling service or method here
      }
    })();
  }
  /**
   * Maps an IEmployee object to a formatted employee object.
   *
   * @param employee The IEmployee object to map.
   * @returns The formatted employee object.
   */
  employeeMapper(employee) {
    const {
      id,
      user = {},
      isActive,
      endWork,
      tags,
      averageIncome = 0,
      averageExpenses = 0,
      averageBonus = 0,
      startedWorkOn,
      isTrackingEnabled,
      isDeleted
    } = employee;
    const {
      name = '',
      email = '',
      imageUrl = ''
    } = user;
    // Format start and end work dates, and create the work status range
    const start = startedWorkOn ? this._dateFormatPipe.transform(startedWorkOn, null, 'LL') : '';
    const end = endWork ? this._dateFormatPipe.transform(endWork, null, 'LL') : '';
    const workStatus = [start, end].filter(Boolean).join(' - ');
    // Return the mapped object
    return {
      fullName: name || '',
      // Ensure default values for safety
      email: email || '',
      id,
      isActive,
      endWork: endWork ? new Date(endWork) : '',
      workStatus: endWork ? workStatus : '',
      imageUrl: imageUrl || '',
      tags: tags || [],
      bonus: this.bonusForSelectedMonth,
      // TODO: load real bonus and bonusDate
      averageIncome: Math.floor(averageIncome),
      averageExpenses: Math.floor(averageExpenses),
      averageBonus: Math.floor(averageBonus),
      bonusDate: Date.now(),
      // Placeholder for actual bonus date
      employeeId: id,
      employee,
      startedWorkOn,
      isTrackingEnabled,
      isDeleted
    };
  }
  /**
   * Registers custom columns for the 'employee-manage' data table.
   * This method defines and registers the columns with various properties,
   * including a custom filter function and a rendering component.
   */
  _registerDataTableColumns() {
    const columns = [{
      dataTableId: this.dataTableId,
      columnId: 'fullName',
      order: 0,
      title: () => this.getTranslation('SM_TABLE.FULL_NAME'),
      type: 'custom',
      class: 'align-row',
      width: '20%',
      isFilterable: true,
      renderComponent: _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_22__/* .PictureNameTagsComponent */ .O,
      componentInitFunction: (instance, cell) => {
        instance.rowData = cell.getRow().getData();
        instance.value = cell.getRawValue();
      },
      filter: {
        type: 'custom',
        component: _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_23__/* .InputFilterComponent */ .U
      },
      filterFunction: this._getFilterFunction('user.name')
    }, {
      dataTableId: this.dataTableId,
      columnId: 'email',
      order: 1,
      title: () => this.getTranslation('SM_TABLE.EMAIL'),
      type: 'text',
      class: 'align-row',
      width: '20%',
      isFilterable: true,
      filter: {
        type: 'custom',
        component: _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_23__/* .InputFilterComponent */ .U
      },
      filterFunction: this._getFilterFunction('user.email')
    }, {
      dataTableId: this.dataTableId,
      columnId: 'averageIncome',
      order: 2,
      title: () => this.getTranslation('SM_TABLE.INCOME'),
      type: 'custom',
      isFilterable: false,
      isSortable: true,
      class: 'text-center',
      width: '5%',
      renderComponent: _table_components__WEBPACK_IMPORTED_MODULE_24__/* .EmployeeAverageIncomeComponent */ .w,
      componentInitFunction: (instance, cell) => {
        instance.rowData = cell.getRow().getData();
      }
    }, {
      dataTableId: this.dataTableId,
      columnId: 'averageExpenses',
      order: 3,
      title: () => this.getTranslation('SM_TABLE.EXPENSES'),
      type: 'custom',
      isFilterable: false,
      isSortable: true,
      class: 'text-center',
      width: '5%',
      renderComponent: _table_components__WEBPACK_IMPORTED_MODULE_25__/* .EmployeeAverageExpensesComponent */ .S,
      componentInitFunction: (instance, cell) => {
        instance.rowData = cell.getRow().getData();
      }
    }, {
      dataTableId: this.dataTableId,
      columnId: 'averageBonus',
      order: 4,
      title: () => this.getTranslation('SM_TABLE.BONUS_AVG'),
      type: 'custom',
      isFilterable: false,
      isSortable: true,
      class: 'text-center',
      width: '5%',
      renderComponent: _table_components__WEBPACK_IMPORTED_MODULE_26__/* .EmployeeAverageBonusComponent */ .e,
      componentInitFunction: (instance, cell) => {
        instance.rowData = cell.getRow().getData();
      }
    }, {
      dataTableId: this.dataTableId,
      columnId: 'isTrackingEnabled',
      order: 5,
      title: () => this.getTranslation('SM_TABLE.TIME_TRACKING'),
      type: 'custom',
      isFilterable: true,
      isSortable: true,
      class: 'text-center',
      width: '5%',
      filter: {
        type: 'custom',
        component: _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_27__/* .ToggleFilterComponent */ .K
      },
      filterFunction: this._getFilterFunction('isTrackingEnabled'),
      renderComponent: _table_components__WEBPACK_IMPORTED_MODULE_28__/* .EmployeeTimeTrackingStatusComponent */ .w,
      componentInitFunction: (instance, cell) => {
        instance.rowData = cell.getRow().getData();
      }
    }, {
      dataTableId: this.dataTableId,
      columnId: 'tags',
      order: 6,
      title: () => this.getTranslation('SM_TABLE.TAGS'),
      type: 'custom',
      width: '20%',
      isFilterable: true,
      isSortable: false,
      filter: {
        type: 'custom',
        component: _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_29__/* .TagsColorFilterComponent */ .Y
      },
      filterFunction: tags => {
        const tagIds = tags.map(tag => tag.id);
        this.setFilter({
          field: 'tags',
          search: tagIds
        });
        return tags.length > 0;
      },
      renderComponent: _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_30__/* .TagsOnlyComponent */ .F,
      componentInitFunction: (instance, cell) => {
        instance.rowData = cell.getRow().getData();
        instance.value = cell.getValue();
      }
    }, {
      dataTableId: this.dataTableId,
      columnId: 'workStatus',
      order: 7,
      title: () => this.getTranslation('SM_TABLE.STATUS'),
      type: 'custom',
      class: 'text-center',
      width: '5%',
      isFilterable: true,
      isSortable: false,
      filter: {
        type: 'custom',
        component: _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_27__/* .ToggleFilterComponent */ .K
      },
      filterFunction: isActive => {
        this.setFilter({
          field: 'isActive',
          search: isActive
        });
        return isActive;
      },
      renderComponent: _table_components__WEBPACK_IMPORTED_MODULE_31__/* .EmployeeWorkStatusComponent */ .F,
      componentInitFunction: (instance, cell) => {
        instance.rowData = cell.getRow().getData();
      }
    }];
    columns.forEach(column => {
      this._pageDataTableRegistryService.registerPageDataTableColumn(column);
    });
  }
  /**
   * Helper function to create a reusable filter function for columns.
   * @param field - The field to filter by.
   */
  _getFilterFunction(field) {
    return value => {
      this.setFilter({
        field,
        search: value
      });
      return value.length > 0; // Return `true` if the value is non-empty
    };
  }
  /**
   * Retrieves the registered columns for the 'employee-manage' data table.
   *
   * This method fetches all the column configurations registered under the
   * 'employee-manage' data table from the PageDataTableRegistryService.
   * It returns the columns in the format of `IColumns`, which can be used for rendering or
   * further manipulation in the smart table.
   *
   * @returns {IColumns} The column configurations for the 'employee-manage' table.
   */
  getColumns() {
    // Fetch and return the columns for 'employee-manage' data table
    return this._pageDataTableRegistryService.getPageDataTableColumns(this.dataTableId);
  }
  /**
   * Load Smart Table settings
   */
  _loadSmartTableSettings() {
    // Get pagination settings
    const {
      itemsPerPage
    } = this.getPagination() || {
      itemsPerPage: this.minItemPerPage
    };
    // Configure Smart Table settings
    this.settingsSmartTable = {
      actions: false,
      noDataMessage: this.getTranslation('SM_TABLE.NO_DATA.EMPLOYEE'),
      pager: {
        display: false,
        perPage: itemsPerPage
      },
      columns: {
        ...this.getColumns()
      }
    };
  }
  /**
   * Adds an additional column to the Smart Table settings based on the organization's configuration.
   * This method checks if screenshot capture is allowed and configures the Smart Table accordingly.
   */
  _additionalColumns() {
    // Check if organization context is available
    if (!this.organization) {
      return;
    }
    // Destructure properties for clarity
    const {
      allowScreenshotCapture
    } = this.organization;
    // Check if screenshot capture is allowed and hide the column if not
    this._pageDataTableRegistryService.registerPageDataTableColumn({
      dataTableId: this.dataTableId,
      // The identifier for the data table location
      columnId: 'allowScreenshotCapture',
      // The identifier for the column
      order: 8,
      // The order of the column in the table
      title: () => this.getTranslation('SM_TABLE.SCREEN_CAPTURE'),
      // The title of the column
      type: 'custom',
      // The type of the column
      class: 'text-center',
      // The class of the column
      width: '5%',
      // The width of the column
      isFilterable: true,
      // Indicates whether the column is filterable
      isSortable: false,
      hide: allowScreenshotCapture === false,
      filter: {
        type: 'custom',
        component: _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_27__/* .ToggleFilterComponent */ .K
      },
      filterFunction: isEnable => {
        this.setFilter({
          field: 'allowScreenshotCapture',
          search: isEnable
        });
        return isEnable;
      },
      renderComponent: _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_11__/* .AllowScreenshotCaptureComponent */ .r,
      // The component to render the column
      componentInitFunction: (instance, cell) => {
        instance.rowData = cell.getRow().getData();
        instance.value = cell.getValue();
        // Subscribe to the allowScreenshotCaptureChange event
        instance.allowScreenshotCaptureChange.subscribe({
          next: isAllow => {
            // Clear selected items and update allowScreenshotCapture
            this.clearItem();
            this._updateAllowScreenshotCapture(instance.rowData, isAllow);
          },
          error: err => {
            console.warn(err);
          }
        });
      }
    });
    // Update the settingsSmartTable with the new columns
    this.settingsSmartTable = {
      ...this.settingsSmartTable,
      columns: this.getColumns()
    };
  }
  /**
   * Update the allowScreenshotCapture setting for an employee.
   *
   * @param employee The employee to update.
   * @param isAllowed Boolean indicating if screenshot capture is allowed.
   */
  _updateAllowScreenshotCapture(employee, isAllowed) {
    var _this9 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A)(function* () {
      try {
        const {
          id: organizationId,
          tenantId
        } = _this9.organization;
        // Get the full name of the employee
        const name = employee.fullName.trim() || 'Unknown Employee';
        yield _this9._employeesService.update(employee.id, {
          allowScreenshotCapture: isAllowed,
          organizationId,
          tenantId
        }); // Await the update operation
        _this9._toastrService.success('TOASTR.MESSAGE.SCREEN_CAPTURE_CHANGED', {
          name
        });
      } catch (error) {
        // Handle errors using your error handling service or method
        _this9._errorHandlingService.handleError(error);
      }
    })();
  }
  /**
   * Change the includeDeleted flag and trigger refresh signals.
   *
   * @param checked Boolean indicating if deleted items should be included.
   */
  changeIncludeDeleted(checked) {
    this.includeDeleted = checked;
    this.refresh$.next(true);
    this.employees$.next(true);
  }
  /**
   *	Apply translation on Smart Table
   */
  _applyTranslationOnSmartTable() {
    this.translateService.onLangChange.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .M)(() => this._loadSmartTableSettings()), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .M)(() => this._additionalColumns()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__/* .untilDestroyed */ .s)(this)).subscribe();
  }
  /*
   * Clear selected item
   */
  clearItem() {
    this.selectEmployee({
      isSelected: false,
      data: null
    });
  }
  /**
   * Start employee's work process.
   */
  startEmployeeWork() {
    var _this0 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A)(function* () {
      if (!_this0.organization || !_this0.selectedEmployee) {
        return;
      }
      const {
        id: organizationId,
        tenantId
      } = _this0.organization;
      // Get the full name of the selected employee
      const name = _this0.selectedEmployee.fullName.trim() || 'Unknown Employee';
      // Open the start work dialog
      const dialog = _this0._dialogService.open(_gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_32__/* .EmployeeStartWorkComponent */ .H, {
        context: {
          employeeFullName: name
        }
      });
      // Wait for the dialog to close
      const data = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_14__/* .firstValueFrom */ ._)(dialog.onClose);
      if (!data) {
        return;
      }
      try {
        // Update the employee's startWork property
        yield _this0._employeesService.setEmployeeStartWork(_this0.selectedEmployee.id, data, {
          organizationId,
          tenantId
        });
        // Get the full name of the selected employee
        _this0._toastrService.success('TOASTR.MESSAGE.AUTHORIZED_TO_WORK', {
          name
        });
      } catch (error) {
        console.log('Error while starting employee work', error);
        _this0._errorHandlingService.handleError(error);
      } finally {
        _this0.refresh$.next(true);
        _this0.employees$.next(true);
      }
    })();
  }
  /**
   * Loads the list of favorite employees for the current user or all for admin using the generic service.
   */
  loadFavoriteEmployees() {
    var _this1 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A)(function* () {
      try {
        _this1.favoriteEmployees = yield _this1.genericFavoriteService.loadFavorites(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_33__/* .BaseEntityEnum */ .k.Employee, _this1.organization);
      } catch (error) {
        console.error('Error loading favorite employees:', error);
        _this1._errorHandlingService.handleError(error);
      }
    })();
  }
  /**
   * Handle employee favorite toggle event from the new component
   */
  onEmployeeFavoriteToggled(_event) {
    // Reload favorites to keep the list in sync
    this.loadFavoriteEmployees();
  }
  getEmployeeDisplayName(employee) {
    return (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_9__/* .getEntityDisplayName */ .fl)(employee);
  }
  ngOnDestroy() {}
  static {
    this.ɵfac = function EmployeesComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || EmployeesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_34__/* .TranslateService */ .c$), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_35__/* .EmployeesService */ .r), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_nebular_theme__WEBPACK_IMPORTED_MODULE_36__/* .NbDialogService */ .S0W), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_37__/* .Store */ .il), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_router__WEBPACK_IMPORTED_MODULE_38__/* .Router */ .Ix), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_39__/* .ToastrService */ .t), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_router__WEBPACK_IMPORTED_MODULE_38__/* .ActivatedRoute */ .nX), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_40__/* .ErrorHandlingService */ .X), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_41__/* .EmployeeStore */ .oO), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_common_http__WEBPACK_IMPORTED_MODULE_42__/* .HttpClient */ .Qq), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_43__/* .DateFormatPipe */ .a), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_44__/* .PageDataTableRegistryService */ .A), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_45__/* .GenericFavoriteService */ .X));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
      type: EmployeesComponent,
      selectors: [["ga-employees-list"]],
      viewQuery: function EmployeesComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵviewQuery"] */ .GBs(_c0, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵviewQuery"] */ .GBs(_c1, 7);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵqueryRefresh"] */ .mGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵloadQuery"] */ .lsd()) && (ctx.grid = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵqueryRefresh"] */ .mGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵloadQuery"] */ .lsd()) && (ctx.actionButtons = _t.first);
        }
      },
      standalone: false,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
      decls: 29,
      vars: 26,
      consts: [["visibleButtons", ""], ["startWork", ""], ["actionButtons", ""], ["grid", ""], ["nbSpinnerStatus", "primary", "nbSpinnerSize", "large", 3, "nbSpinner"], [1, "d-flex", "flex-column", "pb-0"], [1, "card-header-title"], [3, "allowEmployee"], [1, "mr-2"], [3, "ngxPermissionsOnly"], [1, "gauzy-button-container"], [3, "hasLayoutSelector", "isDisable", "hidden"], ["buttonTemplate", "", 3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["buttonTemplateVisible", "", 3, "ngTemplateOutlet"], [1, "custom-toggle"], ["status", "danger", 3, "checkedChange"], [3, "componentName"], [3, "ngxPermissionsExcept"], [3, "ngIf"], ["nbButton", "", "status", "primary", 3, "routerLink"], [3, "ngSwitch"], [3, "ngSwitchCase"], [4, "ngSwitchDefault"], [1, "table-scroll-container"], [2, "cursor", "pointer", 3, "userRowSelect", "settings", "source"], [1, "pagination-container"], [4, "ngIf"], [3, "source"], [1, "grid"], [3, "onSelectedItem", "scroll", "totalItems", "settings", "source"], ["nbButton", "", "size", "small", "status", "success", 3, "click"], ["icon", "plus-outline", 1, "mr-1"], ["nbButton", "", "status", "info", "size", "small", 1, "action", 3, "click"], ["icon", "email-outline", 1, "mr-1"], ["nbButton", "", "size", "small", "status", "basic", 1, "action", "text-info", 3, "click"], ["icon", "person-done-outline"], [1, "btn-group", "actions"], ["size", "small", "status", "basic", "spacing", "list", 3, "entityType", "entityId", "entityName", "disabled", "showLabel", "favoriteToggled", 4, "ngIf"], ["size", "small", "status", "basic", "spacing", "list", 3, "favoriteToggled", "entityType", "entityId", "entityName", "disabled", "showLabel"], ["ngxPermissionsOnly", "ORG_EMPLOYEES_VIEW"], [4, "ngIf", "ngIfElse"], ["nbButton", "", "size", "small", "status", "basic", 1, "action", "primary", 3, "click", "disabled"], ["icon", "edit-outline", 1, "mr-1"], ["status", "basic", "size", "small", "nbButton", "", "underConstruction", "", 1, "action", "secondary"], ["icon", "eye-outline", "pack", "eva"], ["nbButton", "", "size", "small", "debounceClick", "", "status", "info", 1, "action", 3, "throttledClick"], ["nbButton", "", "size", "small", "status", "basic", 1, "action", "orange", 3, "click", "disabled"], ["icon", "person-delete-outline"], ["debounceClick", "", "nbButton", "", "size", "small", "status", "basic", 1, "action", "warning", 3, "throttledClick"], ["icon", "edit-outline"], ["nbButton", "", "size", "small", "status", "basic", 1, "action", 3, "click", "nbTooltip"], ["status", "danger", "icon", "trash-2-outline"]],
      template: function EmployeesComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-card", 4)(1, "nb-card-header", 5)(2, "div", 6)(3, "div", 6)(4, "h4")(5, "ngx-header-title", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(7, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(8, "div", 6)(9, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(10, EmployeesComponent_ng_template_10_Template, 1, 3, "ng-template", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(11, "div", 10)(12, "ngx-gauzy-button-action", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainer"] */ .eu8(13, 12)(14, 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(15, "div", 14)(16, "nb-toggle", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("checkedChange", function EmployeesComponent_Template_nb_toggle_checkedChange_16_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx.changeIncludeDeleted($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(17);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(18, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(19, "ga-layout-selector", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(20, "nb-card-body");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(21, EmployeesComponent_ng_template_21_Template, 4, 3, "ng-template", 9)(22, EmployeesComponent_ng_template_22_Template, 1, 0, "ng-template", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(23, EmployeesComponent_ng_template_23_Template, 1, 3, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplateRefExtractor"] */ .C5r)(25, EmployeesComponent_ng_template_25_Template, 4, 3, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplateRefExtractor"] */ .C5r)(27, EmployeesComponent_ng_template_27_Template, 3, 5, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplateRefExtractor"] */ .C5r);
        }
        if (rf & 2) {
          const visibleButtons_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(24);
          const actionButtons_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(28);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("nbSpinner", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("allowEmployee", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(7, 14, "EMPLOYEES_PAGE.HEADER"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngxPermissionsOnly", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction1"] */ .eq3(18, _c2, ctx.PermissionsEnum.ORG_EMPLOYEES_VIEW));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("hasLayoutSelector", false)("isDisable", ctx.disableButton)("hidden", ctx.haveBtnActionPermissions());
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngTemplateOutlet", actionButtons_r17)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction1"] */ .eq3(20, _c3, ctx.selectedEmployee));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngTemplateOutlet", visibleButtons_r16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(18, 16, "FORM.CHECKBOXES.INCLUDE_DELETED"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("componentName", ctx.viewComponentName);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngxPermissionsOnly", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction2"] */ .l_i(22, _c4, ctx.PermissionsEnum.ALL_ORG_VIEW, ctx.PermissionsEnum.ORG_EMPLOYEES_VIEW));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngxPermissionsExcept", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction0"] */ .lJ4(25, _c5));
        }
      },
      dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_36__/* .NbButtonComponent */ .YP2, _nebular_theme__WEBPACK_IMPORTED_MODULE_36__/* .NbCardComponent */ .SrT, _nebular_theme__WEBPACK_IMPORTED_MODULE_36__/* .NbCardBodyComponent */ .KH5, _nebular_theme__WEBPACK_IMPORTED_MODULE_36__/* .NbCardHeaderComponent */ .zJv, _nebular_theme__WEBPACK_IMPORTED_MODULE_36__/* .NbIconComponent */ .tHu, _nebular_theme__WEBPACK_IMPORTED_MODULE_36__/* .NbSpinnerDirective */ .zwc, _nebular_theme__WEBPACK_IMPORTED_MODULE_36__/* .NbToggleComponent */ .YF2, _nebular_theme__WEBPACK_IMPORTED_MODULE_36__/* .NbTooltipDirective */ .BmQ, ngx_permissions__WEBPACK_IMPORTED_MODULE_46__/* .NgxPermissionsDirective */ .f6, _angular_router__WEBPACK_IMPORTED_MODULE_47__/* .RouterLink */ .Wk, _angular_common__WEBPACK_IMPORTED_MODULE_48__/* .NgIf */ .bT, _angular_common__WEBPACK_IMPORTED_MODULE_48__/* .NgTemplateOutlet */ .T3, _angular_common__WEBPACK_IMPORTED_MODULE_48__/* .NgSwitch */ .ux, _angular_common__WEBPACK_IMPORTED_MODULE_48__/* .NgSwitchCase */ .e1, _angular_common__WEBPACK_IMPORTED_MODULE_48__/* .NgSwitchDefault */ .fG, _packages_ui_core_shared_src_lib_components_header_title_header_title_component__WEBPACK_IMPORTED_MODULE_49__/* .HeaderTitleComponent */ .X, _packages_ui_core_shared_src_lib_components_layout_selector_layout_selector_component__WEBPACK_IMPORTED_MODULE_50__/* .LayoutSelectorComponent */ .d, _packages_ui_core_shared_src_lib_directives_debounce_click_directive__WEBPACK_IMPORTED_MODULE_51__/* .DebounceClickDirective */ .J, _packages_ui_core_shared_src_lib_directives_under_construction_directive__WEBPACK_IMPORTED_MODULE_52__/* .UnderConstructionDirective */ .r, _packages_ui_core_shared_src_lib_favorite_toggle_favorite_toggle_component__WEBPACK_IMPORTED_MODULE_53__/* .FavoriteToggleComponent */ .M, angular2_smart_table__WEBPACK_IMPORTED_MODULE_54__/* .Angular2SmartTableComponent */ .T9, _packages_ui_core_shared_src_lib_gauzy_button_action_gauzy_button_action_component__WEBPACK_IMPORTED_MODULE_55__/* .GauzyButtonActionComponent */ .A, _packages_ui_core_shared_src_lib_smart_data_layout_pagination_pagination_v2_pagination_v2_component__WEBPACK_IMPORTED_MODULE_56__/* .PaginationV2Component */ .a, _packages_ui_core_shared_src_lib_card_grid_card_grid_component__WEBPACK_IMPORTED_MODULE_57__/* .CardGridComponent */ .c, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_34__/* .TranslatePipe */ .D9],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.action[_ngcontent-%COMP%] {\n  box-shadow: var(--gauzy-shadow);\n  border: none;\n}\n.action[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}\n.action.info[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: var(--color-info-default);\n  color: white;\n  border-color: var(--color-info-default);\n}\n.action.info-text-1[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  color: var(--color-info-default);\n}\n.action.secondary[_ngcontent-%COMP%] {\n  color: #7e7e8f;\n}\n.action.success[_ngcontent-%COMP%] {\n  color: var(--color-success-default);\n}\n.action.warning[_ngcontent-%COMP%] {\n  color: rgb(245, 109, 88);\n}\n.action.orange[_ngcontent-%COMP%] {\n  color: rgb(255, 171, 45);\n}\n.action.primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n}\n.action.primary.soft[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: rgba(110, 73, 232, 0.1);\n}\n.action.select-nb[_ngcontent-%COMP%]     {\n  box-shadow: none;\n}\n.action.select-nb[_ngcontent-%COMP%]     .select-button {\n  box-shadow: var(--gauzy-shadow);\n  background: rgb(245, 245, 245);\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n.actions[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-2);\n  border-radius: var(--button-rectangle-border-radius);\n  padding: 2px 4px !important;\n}\n\n.gauzy-button-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n.card-custom-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n[_nghost-%COMP%]     input {\n  border-radius: var(--border-radius);\n  box-shadow: var(--gauzy-shadow) inset;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%], \n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   .table-scroll-container[_ngcontent-%COMP%], \n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .table-scroll-container[_ngcontent-%COMP%] {\n  flex-grow: 10;\n  max-height: unset;\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  border-radius: 0 0 var(--border-radius) var(--border-radius);\n}\n[dir=ltr]   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  padding: 1rem 0.5rem 1rem 18px;\n}\n[dir=rtl]   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  padding: 1rem 18px 1rem 0.5rem;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%], \n[_nghost-%COMP%]   nb-card-header[_ngcontent-%COMP%] {\n  border-radius: var(--border-radius);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  height: 100%;\n  border-radius: var(--border-radius);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-header[_ngcontent-%COMP%] {\n  flex: 0 1 auto;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  overflow: unset;\n  height: calc(100vh - var(--header-height) - var(--footer-height) - 11.5rem + 3.75rem);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-footer[_ngcontent-%COMP%] {\n  flex: 0 1 auto;\n}\n\nnb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n}\nnb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  height: calc(100vh - 17.75rem) !important;\n}\n\n.btn-group.actions[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\n.gauzy-button-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n[_nghost-%COMP%]   .custom-toggle[_ngcontent-%COMP%] {\n  margin: 0 28px 0 12px;\n  padding-top: 5px;\n}\n[_nghost-%COMP%]   .custom-toggle[_ngcontent-%COMP%]     nb-toggle.status-danger .toggle.checked {\n  background-color: rgb(245, 109, 88);\n  border-color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   .custom-toggle[_ngcontent-%COMP%]     nb-toggle.status-danger .text {\n  color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   .custom-toggle[_ngcontent-%COMP%]     nb-toggle.status-danger .toggle {\n  background-color: var(--color-primary-transparent-default);\n  border-color: var(--color-primary-transparent-default);\n}\n[_nghost-%COMP%]   .grid[_ngcontent-%COMP%] {\n  height: 100%;\n  overflow: auto;\n}"]
    });
  }
};
EmployeesComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_58__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__/* .UntilDestroy */ .d)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_58__/* .__metadata */ .Sn)("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_34__/* .TranslateService */ .c$, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_35__/* .EmployeesService */ .r, _nebular_theme__WEBPACK_IMPORTED_MODULE_36__/* .NbDialogService */ .S0W, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_37__/* .Store */ .il, _angular_router__WEBPACK_IMPORTED_MODULE_38__/* .Router */ .Ix, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_39__/* .ToastrService */ .t, _angular_router__WEBPACK_IMPORTED_MODULE_38__/* .ActivatedRoute */ .nX, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_40__/* .ErrorHandlingService */ .X, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_41__/* .EmployeeStore */ .oO, _angular_common_http__WEBPACK_IMPORTED_MODULE_42__/* .HttpClient */ .Qq, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_43__/* .DateFormatPipe */ .a, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_44__/* .PageDataTableRegistryService */ .A, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_45__/* .GenericFavoriteService */ .X])], EmployeesComponent);


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

/***/ 73230:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ TimeZoneSelectorComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(55598);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26860);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10936);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(41598);
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73247);
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(55567);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19223);









function TimeZoneSelectorComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(0);
  }
  if (rf & 2) {
    const item_r1 = ctx.item;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", ctx_r1.getTimeZoneWithOffset(item_r1), " ");
  }
}
function TimeZoneSelectorComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(0);
  }
  if (rf & 2) {
    const item_r3 = ctx.item;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", ctx_r1.getTimeZoneWithOffset(item_r3), " ");
  }
}
let TimeZoneSelectorComponent = /*#__PURE__*/(() => {
  let TimeZoneSelectorComponent = class TimeZoneSelectorComponent {
    set timeZone(val) {
      this._timeZone = val;
      this.onChange(val);
      this.onTouched(val);
    }
    get timeZone() {
      return this._timeZone;
    }
    constructor() {
      this.listOfZones = moment_timezone__WEBPACK_IMPORTED_MODULE_0__.tz.names().filter(zone => zone.includes('/'));
      this.onChange = () => {};
      this.onTouched = () => {};
      this.onChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__/* .EventEmitter */ .bkB();
    }
    /**
     *
     */
    ngOnInit() {}
    /**
     *
     * @param zone
     * @returns
     */
    getTimeZoneWithOffset(zone) {
      let cutZone = zone;
      if (zone.includes('/')) {
        cutZone = zone.split('/')[1];
      }
      const offset = moment_timezone__WEBPACK_IMPORTED_MODULE_0__.tz(zone).format('zZ');
      return '(' + offset + ') ' + cutZone;
    }
    /**
     *
     * @param value
     */
    writeValue(value) {
      if (value) {
        this._timeZone = value;
      }
    }
    /**
     *
     * @param fn
     */
    registerOnChange(fn) {
      this.onChange = fn;
    }
    /**
     *
     * @param fn
     */
    registerOnTouched(fn) {
      this.onTouched = fn;
    }
    /**
     *
     * @param timeZone
     */
    selectTimeZone(timeZone) {
      this.timeZone = timeZone;
      this.onChanged.emit(timeZone);
    }
    /**
     *
     */
    ngOnDestroy() {}
    static {
      this.ɵfac = function TimeZoneSelectorComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || TimeZoneSelectorComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineComponent"] */ .VBU({
        type: TimeZoneSelectorComponent,
        selectors: [["ga-timezone-selector"]],
        inputs: {
          timeZone: "timeZone"
        },
        outputs: {
          onChanged: "onChanged"
        },
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵProvidersFeature"] */ .Jv_([{
          provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .NG_VALUE_ACCESSOR */ .kq,
          useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__/* .forwardRef */ .Rfq)(() => TimeZoneSelectorComponent),
          multi: true
        }])],
        decls: 8,
        vars: 10,
        consts: [[1, "form-group"], ["for", "timeZone", 1, "label"], ["id", "timeZone", "appendTo", "body", 3, "itemsChange", "ngModelChange", "change", "items", "placeholder", "searchable", "clearable", "ngModel"], ["ng-option-tmp", ""], ["ng-label-tmp", ""]],
        template: function TimeZoneSelectorComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "div", 0)(1, "label", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(3, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(4, "ng-select", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(5, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtwoWayListener"] */ .mxI("itemsChange", function TimeZoneSelectorComponent_Template_ng_select_itemsChange_4_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtwoWayBindingSet"] */ .DH7(ctx.listOfZones, $event) || (ctx.listOfZones = $event);
              return $event;
            })("ngModelChange", function TimeZoneSelectorComponent_Template_ng_select_ngModelChange_4_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtwoWayBindingSet"] */ .DH7(ctx.timeZone, $event) || (ctx.timeZone = $event);
              return $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("change", function TimeZoneSelectorComponent_Template_ng_select_change_4_listener($event) {
              return ctx.selectTimeZone($event);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(6, TimeZoneSelectorComponent_ng_template_6_Template, 1, 1, "ng-template", 3)(7, TimeZoneSelectorComponent_ng_template_7_Template, 1, 1, "ng-template", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(3, 6, "FORM.LABELS.CHOOSE_TIME_ZONE"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtwoWayProperty"] */ .R50("items", ctx.listOfZones);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(5, 8, "FORM.PLACEHOLDERS.CHOOSE_TIME_ZONE"))("searchable", true)("clearable", true);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtwoWayProperty"] */ .R50("ngModel", ctx.timeZone);
          }
        },
        dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .NgControlStatus */ .BC, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .NgModel */ .vS, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_3__/* .NgSelectComponent */ .vr, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_3__/* .NgOptionTemplateDirective */ .Uq, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_3__/* .NgLabelTemplateDirective */ .ZZ, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__/* .TranslatePipe */ .D9],
        encapsulation: 2
      });
    }
  };
  TimeZoneSelectorComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__/* .UntilDestroy */ .d)({
    checkProperties: true
  }), (0,tslib__WEBPACK_IMPORTED_MODULE_5__/* .__metadata */ .Sn)("design:paramtypes", [])], TimeZoneSelectorComponent);
  return TimeZoneSelectorComponent;
})();


/***/ }),

/***/ 73459:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   f: () => (/* binding */ EditEmployeeRatesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _packages_ui_core_shared_src_lib_employee_employee_rates_employee_rates_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(83108);


let EditEmployeeRatesComponent = /*#__PURE__*/(() => {
  class EditEmployeeRatesComponent {
    static {
      this.ɵfac = function EditEmployeeRatesComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || EditEmployeeRatesComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: EditEmployeeRatesComponent,
        selectors: [["ga-edit-employee-rates"]],
        standalone: false,
        decls: 1,
        vars: 1,
        consts: [[3, "isEmployee"]],
        template: function EditEmployeeRatesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(0, "ga-employee-rates", 0);
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("isEmployee", true);
          }
        },
        dependencies: [_packages_ui_core_shared_src_lib_employee_employee_rates_employee_rates_component__WEBPACK_IMPORTED_MODULE_1__/* .EmployeeRatesComponent */ .V],
        styles: ["[_nghost-%COMP%] {\n        \t\toverflow-y: auto;\n\t\t\t\theight: calc(100vh - 20.5rem);\n\t\t\t}"]
      });
    }
  }
  return EditEmployeeRatesComponent;
})();

/***/ }),

/***/ 75721:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   w: () => (/* binding */ EditEmployeeContactComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73014);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(64411);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(19223);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23423);
/* harmony import */ var _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38546);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(941);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(15480);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(14486);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(71924);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26860);
/* harmony import */ var _packages_ui_core_shared_src_lib_employee_edit_employee_membership_form_edit_employee_membership_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(41762);











let EditEmployeeContactComponent = class EditEmployeeContactComponent extends _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_0__/* .TranslationBaseComponent */ .K {
  constructor(organizationContactService, toastrService, employeeStore, translateService, store) {
    super(translateService);
    this.organizationContactService = organizationContactService;
    this.toastrService = toastrService;
    this.employeeStore = employeeStore;
    this.translateService = translateService;
    this.store = store;
    this.organizationContact = [];
    this.employeeContact = [];
  }
  ngOnInit() {
    this.store.selectedOrganization$.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_1__/* .untilDestroyed */ .s)(this)).subscribe(organization => {
      this.organization = organization;
    });
    this.employeeStore.selectedEmployee$.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_1__/* .untilDestroyed */ .s)(this)).subscribe(emp => {
      this.selectedEmployee = emp;
      if (this.selectedEmployee) {
        this.loadContacts();
      }
    });
  }
  ngOnDestroy() {}
  submitForm(formInput, removed) {
    var _this = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(function* () {
      try {
        if (formInput.member) {
          yield _this.organizationContactService.updateByEmployee(formInput);
          _this.loadContacts();
          _this.toastrService.success(removed ? 'TOASTR.MESSAGE.EMPLOYEE_CLIENT_REMOVED' : 'TOASTR.MESSAGE.EMPLOYEE_CLIENT_ADDED');
        }
      } catch (error) {
        _this.toastrService.danger('TOASTR.MESSAGE.EMPLOYEE_EDIT_ERROR');
      }
    })();
  }
  loadContacts() {
    var _this2 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(function* () {
      yield _this2.loadSelectedEmployeeContacts();
      const orgContacts = yield _this2.getOrganizationContact();
      const selectedContactsIds = _this2.employeeContact.map(d => d.id);
      if (orgContacts) {
        _this2.organizationContact = orgContacts.filter(contact => selectedContactsIds.indexOf(contact.id) < 0);
      }
    })();
  }
  loadSelectedEmployeeContacts() {
    var _this3 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(function* () {
      if (!_this3.organization) {
        return;
      }
      const {
        tenantId
      } = _this3.store.user;
      const organizationId = _this3.organization.id;
      _this3.employeeContact = yield _this3.organizationContactService.getAllByEmployee(_this3.selectedEmployee.id, {
        organizationId,
        tenantId
      });
    })();
  }
  getOrganizationContact() {
    var _this4 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(function* () {
      if (!_this4.organization) {
        return;
      }
      const {
        id: organizationId,
        tenantId
      } = _this4.organization;
      const {
        items = []
      } = yield _this4.organizationContactService.getAll([], {
        organizationId,
        tenantId
      });
      return items;
    })();
  }
  static {
    this.ɵfac = function EditEmployeeContactComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || EditEmployeeContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_4__/* .OrganizationContactService */ .$), _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_5__/* .ToastrService */ .t), _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_6__/* .EmployeeStore */ .oO), _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__/* .TranslateService */ .c$), _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_8__/* .Store */ .il));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdefineComponent"] */ .VBU({
      type: EditEmployeeContactComponent,
      selectors: [["ga-edit-employee-contacts"]],
      standalone: false,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
      decls: 4,
      vars: 9,
      consts: [[1, "container-contact"], [3, "entitiesAdded", "entitiesRemoved", "selectedEmployee", "organizationEntities", "employeeEntities", "placeholder", "title"]],
      template: function EditEmployeeContactComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .j41(0, "div", 0)(1, "ga-edit-employee-membership", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .nI1(2, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .nI1(3, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵlistener"] */ .bIt("entitiesAdded", function EditEmployeeContactComponent_Template_ga_edit_employee_membership_entitiesAdded_1_listener($event) {
            return ctx.submitForm($event, false);
          })("entitiesRemoved", function EditEmployeeContactComponent_Template_ga_edit_employee_membership_entitiesRemoved_1_listener($event) {
            return ctx.submitForm($event, true);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .k0s()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .R7$();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Y8G("selectedEmployee", ctx.selectedEmployee)("organizationEntities", ctx.organizationContact)("employeeEntities", ctx.employeeContact)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .bMT(2, 5, "FORM.PLACEHOLDERS.CONTACTS"))("title", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .bMT(3, 7, "EMPLOYEES_PAGE.EDIT_EMPLOYEE.EMPLOYEE_CONTACTS"));
        }
      },
      dependencies: [_packages_ui_core_shared_src_lib_employee_edit_employee_membership_form_edit_employee_membership_form_component__WEBPACK_IMPORTED_MODULE_9__/* .EditEmployeeMembershipFormComponent */ .C, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__/* .TranslatePipe */ .D9],
      styles: ["[_nghost-%COMP%] {\n\t\t\t\toverflow-y: auto;\n\t\t\t\theight: calc(100vh - 20.5rem);\n\n\t\t\t\t.container-contact {\n\t\t\t\t\tbackground-color: var(--gauzy-card-2);\n\t\t\t\t\tpadding: 1rem;\n\t\t\t\t\theight: 100%;\n\t\t\t\t}\n\n\t\t\t\tnb-card {\n\t\t\t\t\tmargin: 0 !important;\n\t\t\t\t\tbackground-color: var(--gauzy-card-3) !important;\n\t\t\t\t\tborder-radius: var(--card-border-radius);\n\t\t\t\t}\n\t\t\t}"]
    });
  }
};
EditEmployeeContactComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_10__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_1__/* .UntilDestroy */ .d)(), (0,tslib__WEBPACK_IMPORTED_MODULE_10__/* .__metadata */ .Sn)("design:paramtypes", [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_4__/* .OrganizationContactService */ .$, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_5__/* .ToastrService */ .t, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_6__/* .EmployeeStore */ .oO, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__/* .TranslateService */ .c$, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_8__/* .Store */ .il])], EditEmployeeContactComponent);


/***/ }),

/***/ 76065:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: () => (/* binding */ EditEmployeeNetworksComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(64411);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(10936);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57733);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(72781);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(73246);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(23423);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26024);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(60911);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(71924);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(14486);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(26860);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(56383);
/* harmony import */ var _packages_ui_core_shared_src_lib_directives_autocomplete_off_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(21663);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(19223);













let EditEmployeeNetworksComponent = class EditEmployeeNetworksComponent {
  constructor(fb, store, employeeStore) {
    this.fb = fb;
    this.store = store;
    this.employeeStore = employeeStore;
    // Mutation Form
    this.form = this.fb.group({
      linkedInUrl: [],
      facebookUrl: [],
      instagramUrl: [],
      twitterUrl: [],
      githubUrl: [],
      gitlabUrl: [],
      upworkUrl: [],
      stackoverflowUrl: []
    }, {
      validators: [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_0__/* .UrlPatternValidator */ .i.websiteUrlValidator('linkedInUrl'), _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_0__/* .UrlPatternValidator */ .i.websiteUrlValidator('facebookUrl'), _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_0__/* .UrlPatternValidator */ .i.websiteUrlValidator('instagramUrl'), _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_0__/* .UrlPatternValidator */ .i.websiteUrlValidator('twitterUrl'), _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_0__/* .UrlPatternValidator */ .i.websiteUrlValidator('githubUrl'), _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_0__/* .UrlPatternValidator */ .i.websiteUrlValidator('gitlabUrl'), _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_0__/* .UrlPatternValidator */ .i.websiteUrlValidator('upworkUrl')]
    });
  }
  ngOnInit() {
    const storeOrganization$ = this.store.selectedOrganization$;
    const storeEmployee$ = this.employeeStore.selectedEmployee$;
    (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .combineLatest */ .z)([storeOrganization$, storeEmployee$]).pipe((0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_2__/* .distinctUntilChange */ .nI)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .filter */ .p)(([organization, employee]) => !!organization && !!employee), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .tap */ .M)(([organization, employee]) => {
      this.organization = organization;
      this.selectedEmployee = employee;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .tap */ .M)(() => this._patchForm(this.selectedEmployee)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .untilDestroyed */ .s)(this)).subscribe();
  }
  /**
   * Patches the form with employee's URL values.
   * @param employee - The employee object containing URL properties to patch the form.
   */
  _patchForm(employee) {
    if (!employee) {
      return;
    }
    // Extract and prepare URL fields with default empty string if undefined
    const {
      linkedInUrl = '',
      facebookUrl = '',
      instagramUrl = '',
      twitterUrl = '',
      githubUrl = '',
      gitlabUrl = '',
      upworkUrl = '',
      stackoverflowUrl = ''
    } = employee;
    // Patch form with extracted values
    this.form.patchValue({
      linkedInUrl,
      facebookUrl,
      instagramUrl,
      twitterUrl,
      githubUrl,
      gitlabUrl,
      upworkUrl,
      stackoverflowUrl
    });
  }
  /**
   * Submits the form by setting the employee form values in the employee store.
   * If the form is invalid, it stops execution.
   */
  submitForm() {
    try {
      // Check if the form is valid
      if (this.form.invalid) {
        // Optionally, you might want to add some user feedback or logging here
        return;
      }
      // Extract organization ID from the selected organization in the store
      const {
        id: organizationId,
        tenantId
      } = this.store.selectedOrganization;
      // Update the employee form in the employee store with form values and organization ID
      this.employeeStore.employeeForm = {
        ...this.form.value,
        organizationId,
        tenantId
      };
    } catch (error) {
      // Optionally, you might want to add some user feedback or logging here
      console.error('Error while submitting form:', error);
    }
  }
  ngOnDestroy() {}
  static {
    this.ɵfac = function EditEmployeeNetworksComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || EditEmployeeNetworksComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_forms__WEBPACK_IMPORTED_MODULE_7__/* .UntypedFormBuilder */ .ze), _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_8__/* .Store */ .il), _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_9__/* .EmployeeStore */ .oO));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵdefineComponent"] */ .VBU({
      type: EditEmployeeNetworksComponent,
      selectors: [["ga-edit-employee-networks"]],
      standalone: false,
      decls: 59,
      vars: 53,
      consts: [[1, "m-3"], ["autocomplete-off", "", 3, "ngSubmit", "formGroup"], [1, "row"], [1, "col-sm-3"], [1, "form-group"], ["for", "linkedIn", 1, "label", 3, "innerHtml"], ["fullWidth", "", "id", "linkedIn", "type", "text", "nbInput", "", "formControlName", "linkedInUrl", 3, "placeholder"], ["for", "facebook", 1, "label", 3, "innerHtml"], ["fullWidth", "", "id", "facebook", "type", "text", "nbInput", "", "formControlName", "facebookUrl", 3, "placeholder"], ["for", "instagram", 1, "label", 3, "innerHtml"], ["fullWidth", "", "id", "instagram", "type", "text", "nbInput", "", "formControlName", "instagramUrl", 3, "placeholder"], ["for", "twitter", 1, "label", 3, "innerHtml"], ["fullWidth", "", "id", "twitter", "type", "text", "nbInput", "", "formControlName", "twitterUrl", 3, "placeholder"], ["for", "github", 1, "label", 3, "innerHtml"], ["fullWidth", "", "id", "github", "type", "text", "nbInput", "", "formControlName", "githubUrl", 3, "placeholder"], ["for", "gitlab", 1, "label", 3, "innerHtml"], ["fullWidth", "", "id", "gitlab", "type", "text", "nbInput", "", "formControlName", "gitlabUrl", 3, "placeholder"], ["for", "upwork", 1, "label", 3, "innerHtml"], ["fullWidth", "", "id", "upwork", "type", "text", "nbInput", "", "formControlName", "upworkUrl", 3, "placeholder"], ["for", "stackoverflow", 1, "label", 3, "innerHtml"], ["fullWidth", "", "id", "stackoverflow", "type", "text", "nbInput", "", "formControlName", "stackoverflowUrl", 3, "placeholder"], [1, "actions"], ["nbButton", "", "type", "submit", "status", "success", 3, "disabled"]],
      template: function EditEmployeeNetworksComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementStart"] */ .j41(0, "nb-card", 0)(1, "nb-card-body")(2, "form", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵlistener"] */ .bIt("ngSubmit", function EditEmployeeNetworksComponent_Template_form_ngSubmit_2_listener() {
            return ctx.submitForm();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementStart"] */ .j41(3, "div", 2)(4, "div", 3)(5, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelement"] */ .nrm(6, "label", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵpipe"] */ .nI1(7, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelement"] */ .nrm(8, "input", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵpipe"] */ .nI1(9, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementEnd"] */ .k0s()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementStart"] */ .j41(10, "div", 3)(11, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelement"] */ .nrm(12, "label", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵpipe"] */ .nI1(13, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelement"] */ .nrm(14, "input", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵpipe"] */ .nI1(15, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementEnd"] */ .k0s()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementStart"] */ .j41(16, "div", 2)(17, "div", 3)(18, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelement"] */ .nrm(19, "label", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵpipe"] */ .nI1(20, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelement"] */ .nrm(21, "input", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵpipe"] */ .nI1(22, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementEnd"] */ .k0s()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementStart"] */ .j41(23, "div", 3)(24, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelement"] */ .nrm(25, "label", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵpipe"] */ .nI1(26, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelement"] */ .nrm(27, "input", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵpipe"] */ .nI1(28, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementEnd"] */ .k0s()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementStart"] */ .j41(29, "div", 2)(30, "div", 3)(31, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelement"] */ .nrm(32, "label", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵpipe"] */ .nI1(33, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelement"] */ .nrm(34, "input", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵpipe"] */ .nI1(35, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementEnd"] */ .k0s()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementStart"] */ .j41(36, "div", 3)(37, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelement"] */ .nrm(38, "label", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵpipe"] */ .nI1(39, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelement"] */ .nrm(40, "input", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵpipe"] */ .nI1(41, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementEnd"] */ .k0s()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementStart"] */ .j41(42, "div", 2)(43, "div", 3)(44, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelement"] */ .nrm(45, "label", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵpipe"] */ .nI1(46, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelement"] */ .nrm(47, "input", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵpipe"] */ .nI1(48, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementEnd"] */ .k0s()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementStart"] */ .j41(49, "div", 3)(50, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelement"] */ .nrm(51, "label", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵpipe"] */ .nI1(52, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelement"] */ .nrm(53, "input", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵpipe"] */ .nI1(54, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementEnd"] */ .k0s()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementStart"] */ .j41(55, "div", 21)(56, "button", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵtext"] */ .EFF(57);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵpipe"] */ .nI1(58, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementEnd"] */ .k0s()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵproperty"] */ .Y8G("formGroup", ctx.form);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵadvance"] */ .R7$(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵproperty"] */ .Y8G("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵpipeBind1"] */ .bMT(7, 19, "FORM.LABELS.LINKEDIN"), _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵsanitizeHtml"] */ .npT);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵpipeBind1"] */ .bMT(9, 21, "FORM.PLACEHOLDERS.LINKEDIN"));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵadvance"] */ .R7$(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵproperty"] */ .Y8G("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵpipeBind1"] */ .bMT(13, 23, "FORM.LABELS.FACEBOOK"), _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵsanitizeHtml"] */ .npT);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵpipeBind1"] */ .bMT(15, 25, "FORM.PLACEHOLDERS.FACEBOOK"));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵadvance"] */ .R7$(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵproperty"] */ .Y8G("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵpipeBind1"] */ .bMT(20, 27, "FORM.LABELS.INSTAGRAM"), _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵsanitizeHtml"] */ .npT);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵpipeBind1"] */ .bMT(22, 29, "FORM.PLACEHOLDERS.INSTAGRAM"));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵadvance"] */ .R7$(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵproperty"] */ .Y8G("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵpipeBind1"] */ .bMT(26, 31, "FORM.LABELS.TWITTER"), _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵsanitizeHtml"] */ .npT);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵpipeBind1"] */ .bMT(28, 33, "FORM.PLACEHOLDERS.TWITTER"));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵadvance"] */ .R7$(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵproperty"] */ .Y8G("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵpipeBind1"] */ .bMT(33, 35, "FORM.LABELS.GITHUB"), _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵsanitizeHtml"] */ .npT);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵpipeBind1"] */ .bMT(35, 37, "FORM.PLACEHOLDERS.GITHUB"));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵadvance"] */ .R7$(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵproperty"] */ .Y8G("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵpipeBind1"] */ .bMT(39, 39, "FORM.LABELS.GITLAB"), _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵsanitizeHtml"] */ .npT);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵpipeBind1"] */ .bMT(41, 41, "FORM.PLACEHOLDERS.GITLAB"));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵadvance"] */ .R7$(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵproperty"] */ .Y8G("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵpipeBind1"] */ .bMT(46, 43, "FORM.LABELS.UPWORK"), _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵsanitizeHtml"] */ .npT);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵpipeBind1"] */ .bMT(48, 45, "FORM.PLACEHOLDERS.UPWORK"));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵadvance"] */ .R7$(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵproperty"] */ .Y8G("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵpipeBind1"] */ .bMT(52, 47, "FORM.LABELS.STACK_OVERFLOW"), _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵsanitizeHtml"] */ .npT);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵpipeBind1"] */ .bMT(54, 49, "FORM.PLACEHOLDERS.STACK_OVERFLOW"));
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵadvance"] */ .R7$(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵproperty"] */ .Y8G("disabled", ctx.form.invalid);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵadvance"] */ .R7$();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵpipeBind1"] */ .bMT(58, 51, "BUTTONS.SAVE"), " ");
        }
      },
      dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_10__/* .NbButtonComponent */ .YP2, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__/* .NbCardComponent */ .SrT, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__/* .NbCardBodyComponent */ .KH5, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__/* .NbInputDirective */ .i6h, _angular_forms__WEBPACK_IMPORTED_MODULE_7__/* ["ɵNgNoValidate"] */ .qT, _angular_forms__WEBPACK_IMPORTED_MODULE_7__/* .DefaultValueAccessor */ .me, _angular_forms__WEBPACK_IMPORTED_MODULE_7__/* .NgControlStatus */ .BC, _angular_forms__WEBPACK_IMPORTED_MODULE_7__/* .NgControlStatusGroup */ .cb, _angular_forms__WEBPACK_IMPORTED_MODULE_7__/* .FormGroupDirective */ .j4, _angular_forms__WEBPACK_IMPORTED_MODULE_7__/* .FormControlName */ .JD, _packages_ui_core_shared_src_lib_directives_autocomplete_off_directive__WEBPACK_IMPORTED_MODULE_11__/* .AutocompleteOffDirective */ .h, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__/* .TranslatePipe */ .D9],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%] {\n  height: 100%;\n}\n[dir=ltr]   [_nghost-%COMP%] {\n  border-radius: 0 var(--border-radius) var(--border-radius) var(--border-radius);\n}\n[dir=rtl]   [_nghost-%COMP%] {\n  border-radius: var(--border-radius) 0 var(--border-radius) var(--border-radius);\n}\n\n[_nghost-%COMP%]   .content[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100%;\n  background-color: var(--gauzy-card-2);\n  padding: 1rem;\n}\n[dir=ltr]   [_nghost-%COMP%]   .content[_ngcontent-%COMP%] {\n  border-radius: 0 var(--border-radius) var(--border-radius) var(--border-radius);\n}\n[dir=rtl]   [_nghost-%COMP%]   .content[_ngcontent-%COMP%] {\n  border-radius: var(--border-radius) 0 var(--border-radius) var(--border-radius);\n}\n[_nghost-%COMP%]   .content.main[_ngcontent-%COMP%] {\n  height: calc(100vh - 19.25rem);\n}\n\n[_nghost-%COMP%]   .organization-container[_ngcontent-%COMP%] {\n  padding: 15px;\n  position: relative;\n  display: flex;\n  align-items: flex-start;\n  flex-direction: column;\n  transition: transform 150ms ease-in-out;\n  background-color: rgba(126, 126, 143, 0.1);\n  border-radius: var(--border-radius);\n  width: 563px;\n  height: 100%;\n}\n[_nghost-%COMP%]   .organization-container[_ngcontent-%COMP%]   .organization-photo[_ngcontent-%COMP%] {\n  width: fit-content;\n  height: fit-content;\n  position: relative;\n  margin-left: 0 !important;\n}\n[_nghost-%COMP%]   .organization-container[_ngcontent-%COMP%]   .organization-photo[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  pointer-events: none;\n  background: black;\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  border-radius: var(--border-radius);\n}\n[_nghost-%COMP%]   .organization-container[_ngcontent-%COMP%]   .organization-photo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n  border-radius: var(--border-radius);\n}\n[_nghost-%COMP%]   .organization-container[_ngcontent-%COMP%]   .organization-photo[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  position: absolute;\n  z-index: 3;\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .organization-container[_ngcontent-%COMP%]   .organization-photo[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  z-index: 2;\n  transition: opacity 0.2s ease-in;\n  opacity: 0.3;\n  position: absolute;\n  top: calc(50% - 34px);\n  left: calc(50% - 34px);\n}\n[_nghost-%COMP%]   .organization-container[_ngcontent-%COMP%]   .employees-count-text[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 15px;\n  letter-spacing: 0em;\n}\n[dir=ltr]   [_nghost-%COMP%]   .organization-container[_ngcontent-%COMP%]   .employees-count-text[_ngcontent-%COMP%] {\n  margin-left: 1px;\n}\n[dir=rtl]   [_nghost-%COMP%]   .organization-container[_ngcontent-%COMP%]   .employees-count-text[_ngcontent-%COMP%] {\n  margin-right: 1px;\n}\n\n.main-form[_ngcontent-%COMP%] {\n  width: 100%;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n.main-form[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%] {\n  margin-top: 60px;\n}\n\n.row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\n  max-width: 50%;\n}\n\n  ga-currency .form-group {\n  display: inline-flex;\n  flex-direction: column;\n  min-width: 180px;\n}\n\n.tax-form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.tax-form-group[_ngcontent-%COMP%]   #taxIdInput[_ngcontent-%COMP%] {\n  width: 80%;\n}\n\n.registration-form-group[_ngcontent-%COMP%] {\n  display: inline-flex;\n  flex-direction: column;\n}\n\n  nb-select.shape-rectangle .select-button {\n  border-radius: var(--border-radius);\n}\n\n@media only screen and (max-width: 991px) {\n  .organization-container[_ngcontent-%COMP%] {\n    width: 350px;\n  }\n  .registration-form-group[_ngcontent-%COMP%]   #registrationDate[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .tax-form-group[_ngcontent-%COMP%]   #taxIdInput[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n    ga-currency .form-group {\n    display: flex;\n    flex-direction: column;\n  }\n}\n@media only screen and (max-width: 767px) {\n  [_nghost-%COMP%] {\n    height: auto;\n  }\n  .content[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .organization-container[_ngcontent-%COMP%], \n   .main-form[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .main-form[_ngcontent-%COMP%] {\n    padding: 0;\n    margin-top: 20px;\n  }\n  .row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    max-width: 100%;\n    margin-left: 0;\n  }\n  .row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\n    max-width: 100%;\n    padding: 0;\n  }\n  .form-group[_ngcontent-%COMP%] {\n    width: 100% !important;\n  }\n  .tax-form-group[_ngcontent-%COMP%]   #taxIdInput[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .registration-form-group[_ngcontent-%COMP%]   #registrationDate[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n    ga-currency .form-group {\n    display: flex;\n  }\n  .col-6[_ngcontent-%COMP%] {\n    max-width: 100%;\n    padding: 0 !important;\n  }\n  .main-form[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%] {\n    margin-top: 20px;\n  }\n}", "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%] {\n  background-color: var(--gauzy-card-2);\n  border-radius: var(--border-radius);\n  overflow-y: auto;\n  max-height: calc(100vh - 20.5rem);\n}\n\nnb-card-body[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-sidebar-background-2);\n  border-radius: var(--border-radius);\n}"]
    });
  }
};
EditEmployeeNetworksComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .UntilDestroy */ .d)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__metadata */ .Sn)("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_7__/* .UntypedFormBuilder */ .ze, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_8__/* .Store */ .il, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_9__/* .EmployeeStore */ .oO])], EditEmployeeNetworksComponent);


/***/ }),

/***/ 78230:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: () => (/* binding */ RecurringExpenseHistoryModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14572);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56383);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19223);
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(38834);
/* harmony import */ var _smart_data_layout_smart_data_view_layout_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(98722);
/* harmony import */ var _table_components_table_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(57832);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);








let RecurringExpenseHistoryModule = /*#__PURE__*/(() => {
  class RecurringExpenseHistoryModule {
    static {
      this.ɵfac = function RecurringExpenseHistoryModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || RecurringExpenseHistoryModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .$C({
        type: RecurringExpenseHistoryModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .CommonModule */ .MD, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbIconModule */ .clu, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__/* .TranslateModule */ .h.forChild(), _shared_module__WEBPACK_IMPORTED_MODULE_4__/* .SharedModule */ .G, _smart_data_layout_smart_data_view_layout_module__WEBPACK_IMPORTED_MODULE_5__/* .SmartDataViewLayoutModule */ .H, _table_components_table_components_module__WEBPACK_IMPORTED_MODULE_6__/* .TableComponentsModule */ .p]
      });
    }
  }
  return RecurringExpenseHistoryModule;
})();

/***/ }),

/***/ 80589:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ EditEmployeeProfileComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(73014);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(64411);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26860);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9620);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(19223);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24237);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71181);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(73246);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(72781);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(36950);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(23423);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(17785);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(14486);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(88319);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(57044);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(15480);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(54263);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(71924);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(22550);
/* harmony import */ var _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38546);
/* harmony import */ var _packages_ui_core_shared_src_lib_components_dynamic_tabs_dynamic_tabs_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(90628);















let EditEmployeeProfileComponent = class EditEmployeeProfileComponent extends _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_0__/* .TranslationBaseComponent */ .K {
  constructor(translateService, _route, _employeeService, _userService, _toastrService, _employeeStore, _errorHandlingService, _store, _pageTabRegistryService) {
    super(translateService);
    this.translateService = translateService;
    this._route = _route;
    this._employeeService = _employeeService;
    this._userService = _userService;
    this._toastrService = _toastrService;
    this._employeeStore = _employeeStore;
    this._errorHandlingService = _errorHandlingService;
    this._store = _store;
    this._pageTabRegistryService = _pageTabRegistryService;
    this.tabsetId = this._route.snapshot.data.tabsetId; // The identifier for the tabset
    this.subject$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__/* .Subject */ .B();
    this.updatedImage = new _angular_core__WEBPACK_IMPORTED_MODULE_2__/* .EventEmitter */ .bkB();
  }
  ngOnInit() {
    this.subject$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__/* .debounceTime */ .B)(300), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__/* .tap */ .M)(() => this._getEmployeeProfile()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .untilDestroyed */ .s)(this)).subscribe();
    this._route.params.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__/* .filter */ .p)(params => !!params && !!params.id), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__/* .tap */ .M)(params => {
      // Update employeeId when route parameters change
      this.employeeId = params.id;
      this._registerPageTabs();
      this.subject$.next(true);
    }), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .untilDestroyed */ .s)(this)).subscribe();
    this._employeeStore.userForm$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__/* .tap */ .M)(value => {
      this.submitUserForm(value);
    }), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .untilDestroyed */ .s)(this)).subscribe();
    this._employeeStore.employeeForm$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__/* .tap */ .M)(value => {
      this.submitEmployeeForm(value);
    }), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .untilDestroyed */ .s)(this)).subscribe();
  }
  ngAfterViewInit() {
    this._applyTranslationOnTabs();
  }
  /**
   * Constructs a route URL for a specific tab in the 'edit-employee' view.
   *
   * This method dynamically generates the route URL based on the employee's ID
   * and the tab passed as a parameter. It is used to navigate between
   * different sections (tabs) of the employee edit page.
   *
   * @param {string} tab - The name of the tab for which to generate the route.
   * @returns {string} - The complete route URL for the specified tab.
   */
  getRoute(tab) {
    return `/pages/employees/edit/${this.employeeId}/${tab}`;
  }
  /**
   * Registers custom tabs for the 'employee-edit' page.
   * This method defines and registers the various tabs, their icons, routes, and titles.
   */
  _registerPageTabs() {
    const tabs = this._createTabsConfig();
    // Register each tab using the page tab registry service
    tabs.forEach(tab => this._pageTabRegistryService.registerPageTab(tab));
  }
  /**
   * Creates the configuration for the tabs used in the 'employee-edit' page.
   * @returns An array of PageTabRegistryConfig objects.
   */
  _createTabsConfig() {
    return [{
      tabsetId: this.tabsetId,
      tabId: 'account',
      tabIcon: 'person-outline',
      tabsetType: 'route',
      tabTitle: _i18n => _i18n.getTranslation('EMPLOYEES_PAGE.EDIT_EMPLOYEE.ACCOUNT'),
      order: 0,
      responsive: true,
      route: this.getRoute('account')
    }, {
      tabsetId: this.tabsetId,
      tabId: 'networks',
      tabIcon: 'at-outline',
      tabsetType: 'route',
      tabTitle: _i18n => _i18n.getTranslation('EMPLOYEES_PAGE.EDIT_EMPLOYEE.NETWORKS'),
      order: 1,
      responsive: true,
      route: this.getRoute('networks')
    }, {
      tabsetId: this.tabsetId,
      tabId: 'employment',
      tabIcon: 'browser-outline',
      tabsetType: 'route',
      tabTitle: _i18n => _i18n.getTranslation('EMPLOYEES_PAGE.EDIT_EMPLOYEE.EMPLOYMENT'),
      order: 2,
      responsive: true,
      route: this.getRoute('employment')
    }, {
      tabsetId: this.tabsetId,
      tabId: 'hiring',
      tabIcon: 'browser-outline',
      tabsetType: 'route',
      tabTitle: _i18n => _i18n.getTranslation('EMPLOYEES_PAGE.EDIT_EMPLOYEE.HIRING'),
      order: 3,
      responsive: true,
      route: this.getRoute('hiring')
    }, {
      tabsetId: this.tabsetId,
      tabId: 'location',
      tabIcon: 'pin-outline',
      tabsetType: 'route',
      tabTitle: _i18n => _i18n.getTranslation('EMPLOYEES_PAGE.EDIT_EMPLOYEE.LOCATION'),
      order: 4,
      responsive: true,
      route: this.getRoute('location')
    }, {
      tabsetId: this.tabsetId,
      tabId: 'rates',
      tabIcon: 'pricetags-outline',
      tabsetType: 'route',
      tabTitle: _i18n => _i18n.getTranslation('EMPLOYEES_PAGE.EDIT_EMPLOYEE.RATES'),
      order: 5,
      responsive: true,
      route: this.getRoute('rates')
    }, {
      tabsetId: this.tabsetId,
      tabId: 'projects',
      tabIcon: 'book-open-outline',
      tabsetType: 'route',
      tabTitle: _i18n => _i18n.getTranslation('EMPLOYEES_PAGE.EDIT_EMPLOYEE.PROJECTS'),
      order: 6,
      responsive: true,
      route: this.getRoute('projects'),
      permissions: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_7__/* .PermissionsEnum */ .U.ALL_ORG_VIEW, _gauzy_contracts__WEBPACK_IMPORTED_MODULE_7__/* .PermissionsEnum */ .U.ORG_PROJECT_VIEW]
    }, {
      tabsetId: this.tabsetId,
      tabId: 'contacts',
      tabIcon: 'book-outline',
      tabsetType: 'route',
      tabTitle: _i18n => _i18n.getTranslation('EMPLOYEES_PAGE.EDIT_EMPLOYEE.CONTACTS'),
      order: 7,
      responsive: true,
      route: this.getRoute('contacts')
    }, {
      tabsetId: this.tabsetId,
      tabId: 'settings',
      tabIcon: 'settings-outline',
      tabsetType: 'route',
      tabTitle: _i18n => _i18n.getTranslation('EMPLOYEES_PAGE.EDIT_EMPLOYEE.SETTINGS'),
      order: 8,
      responsive: true,
      route: this.getRoute('settings')
    }];
  }
  /**
   * Retrieves and sets the profile of the selected employee
   *
   * @returns
   */
  _getEmployeeProfile() {
    var _this = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A)(function* () {
      try {
        if (!_this.employeeId) {
          return;
        }
        // Fetch employee data from the service
        const employee = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_9__/* .firstValueFrom */ ._)(_this._employeeService.getEmployeeById(_this.employeeId, ['user', 'organizationDepartments', 'organizationPosition', 'organizationEmploymentTypes', 'tags', 'skills', 'contact']));
        // Set the selected employee in the store and component
        _this._employeeStore.selectedEmployee = _this.selectedEmployee = employee;
        // Set the employee name for display
        _this.employeeName = employee?.user?.name || employee?.user?.username || 'Unknown Employee';
      } catch (error) {
        // Handle errors gracefully
        console.error('Error fetching employee profile:', error);
        _this._errorHandlingService.handleError(error);
      }
    })();
  }
  /**
   * Submit the employee form with updated data
   *
   * @param value - The updated employee form data to submit.
   */
  submitEmployeeForm(value) {
    var _this2 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A)(function* () {
      if (value) {
        try {
          /**
           * (ORG_EMPLOYEES_EDIT) permission can update employee whole profile only.
           * But employee can not update whole profile except some of the fields provided by UI
           * We will define later, which fields allow to employee to update from the form
           */
          if (_this2._store.hasPermission(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_7__/* .PermissionsEnum */ .U.ORG_EMPLOYEES_EDIT)) {
            yield _this2._employeeService.update(_this2.selectedEmployee.id, value);
          } else {
            // Update only allowed fields if user does not have full edit permission
            yield _this2._employeeService.updateProfile(_this2.selectedEmployee.id, value);
          }
          // Show success message on successful update
          _this2._toastrService.success('TOASTR.MESSAGE.EMPLOYEE_PROFILE_UPDATE', {
            name: _this2.employeeName
          });
        } catch (error) {
          // Handle and log errors
          console.log('Error while updating employee profile:', error);
          _this2._errorHandlingService.handleError(error);
        } finally {
          // Notify subscribers that form submission is complete
          _this2.subject$.next(true);
        }
      }
    })();
  }
  /**
   * Submit the user form with updated data
   *
   * @param user - The updated user data to submit.
   */
  submitUserForm(user) {
    var _this3 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A)(function* () {
      if (user) {
        try {
          // Update the user using userService
          yield _this3._userService.update(_this3.selectedEmployee.user.id, user);
          if (!!user.image) {
            // Emit event for updated image (assuming this emits an event when the image is updated)
            _this3.updatedImage.emit(user.image);
          }
          // Show success message based on whether email was updated or not
          if (!user.email) {
            _this3._toastrService.success('TOASTR.MESSAGE.IMAGE_UPDATED');
          } else {
            _this3._toastrService.success('TOASTR.MESSAGE.EMPLOYEE_PROFILE_UPDATE', {
              name: _this3.employeeName
            });
          }
        } catch (error) {
          // Handle and log errors
          console.log('Error while updating user profile:', error);
          _this3._errorHandlingService.handleError(error);
        } finally {
          // Notify subscribers that form submission is complete
          _this3.subject$.next(true);
        }
      }
    })();
  }
  /**
   * Applies translations to the page tabs.
   */
  _applyTranslationOnTabs() {
    this.translateService.onLangChange.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__/* .tap */ .M)(() => this._registerPageTabs()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .untilDestroyed */ .s)(this)).subscribe();
  }
  ngOnDestroy() {}
  static {
    this.ɵfac = function EditEmployeeProfileComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || EditEmployeeProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__/* .TranslateService */ .c$), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_router__WEBPACK_IMPORTED_MODULE_11__/* .ActivatedRoute */ .nX), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_12__/* .EmployeesService */ .r), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_13__/* .UsersService */ .g), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_14__/* .ToastrService */ .t), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_15__/* .EmployeeStore */ .oO), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_16__/* .ErrorHandlingService */ .X), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_17__/* .Store */ .il), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_18__/* .PageTabRegistryService */ .R));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineComponent"] */ .VBU({
      type: EditEmployeeProfileComponent,
      selectors: [["ngx-edit-employee-profile"]],
      outputs: {
        updatedImage: "updatedImage"
      },
      standalone: false,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵProvidersFeature"] */ .Jv_([_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_15__/* .EmployeeStore */ .oO]), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
      decls: 1,
      vars: 1,
      consts: [[1, "tabset-container", 3, "tabsetId"]],
      template: function EditEmployeeProfileComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ .nrm(0, "gz-dynamic-tabs", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("tabsetId", ctx.tabsetId);
        }
      },
      dependencies: [_packages_ui_core_shared_src_lib_components_dynamic_tabs_dynamic_tabs_component__WEBPACK_IMPORTED_MODULE_19__/* .DynamicTabsComponent */ .d],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]     input, \n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]     nb-select.appearance-outline.status-basic .select-button, \n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]     .ng-select .ng-select-container {\n  background-color: var(--gauzy-card-1) !important;\n  border: none;\n  height: 42px !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder, \n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {\n  top: unset !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]     label, \n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]     .label {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  color: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]     textarea {\n  background-color: var(--gauzy-card-1) !important;\n  border: none;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]     .ng-select .ng-select-container input, \n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]     nb-tag-list input {\n  background-color: unset !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]     ngx-image-uploader input {\n  height: 100% !important;\n}\n\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  padding: 50px 70px;\n}\n@media only screen and (max-width: 1532px) {\n  [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n    padding: 30px 40px;\n  }\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .navigate[_ngcontent-%COMP%] {\n  display: flex;\n  margin-bottom: 35px;\n  cursor: pointer;\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .navigate[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: 7px;\n  font-size: 14px;\n  color: #2a2c39;\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  display: flex;\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .employee-container[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  transition: transform 150ms ease-in-out;\n}\n[dir=rtl]   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .employee-container[_ngcontent-%COMP%] {\n  padding-left: 70px;\n}\n[dir=ltr]   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .employee-container[_ngcontent-%COMP%] {\n  padding-right: 70px;\n}\n[dir=rtl]   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .employee-container[_ngcontent-%COMP%] {\n  margin-left: 70px;\n}\n[dir=ltr]   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .employee-container[_ngcontent-%COMP%] {\n  margin-right: 70px;\n}\n[dir=rtl]   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .employee-container[_ngcontent-%COMP%] {\n  border-left: 1px solid rgba(0, 0, 0, 0.1);\n}\n[dir=ltr]   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .employee-container[_ngcontent-%COMP%] {\n  border-right: 1px solid rgba(0, 0, 0, 0.1);\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .employee-container[_ngcontent-%COMP%]   .employee-photo[_ngcontent-%COMP%] {\n  width: fit-content;\n  height: 200px;\n  position: relative;\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .employee-container[_ngcontent-%COMP%]   .employee-photo[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  pointer-events: none;\n  background: black;\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  border-radius: 13px;\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .employee-container[_ngcontent-%COMP%]   .employee-photo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 200px;\n  border-radius: 13px;\n  object-fit: cover;\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .employee-container[_ngcontent-%COMP%]   .employee-photo[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100% !important;\n  opacity: 0;\n  position: absolute;\n  z-index: 3;\n  cursor: pointer;\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .employee-container[_ngcontent-%COMP%]   .employee-photo[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  z-index: 2;\n  transition: opacity 0.2s ease-in;\n  opacity: 0.3;\n  position: absolute;\n  top: calc(50% - 34px);\n  left: calc(50% - 34px);\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .employee-container[_ngcontent-%COMP%]   .employee-photo[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   g[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%] {\n  fill: var(--text-primary-color);\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  position: relative;\n  margin-top: 10px;\n  display: flex;\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .employee-form[_ngcontent-%COMP%] {\n  width: 60%;\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  width: 100%;\n  margin-top: 30px;\n}\n\n[_nghost-%COMP%]     .tabset-container .route-tabset {\n  overflow-x: scroll;\n  overflow-y: hidden;\n}\n[_nghost-%COMP%]     .tabset-container .route-tabset::-webkit-scrollbar {\n  \n\n  display: none;\n  \n\n  -ms-overflow-style: none;\n  \n\n  scrollbar-width: none;\n}\n@media only screen and (max-width: 1280px) {\n  [_nghost-%COMP%]     .tabset-container .route-tabset li a.tab-link {\n    display: flex !important;\n  }\n  [_nghost-%COMP%]     .tabset-container .route-tabset li a.tab-link nb-icon {\n    margin-bottom: 0;\n  }\n}"]
    });
  }
};
EditEmployeeProfileComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_20__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .UntilDestroy */ .d)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_20__/* .__metadata */ .Sn)("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__/* .TranslateService */ .c$, _angular_router__WEBPACK_IMPORTED_MODULE_11__/* .ActivatedRoute */ .nX, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_12__/* .EmployeesService */ .r, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_13__/* .UsersService */ .g, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_14__/* .ToastrService */ .t, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_15__/* .EmployeeStore */ .oO, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_16__/* .ErrorHandlingService */ .X, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_17__/* .Store */ .il, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_18__/* .PageTabRegistryService */ .R])], EditEmployeeProfileComponent);


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

/***/ 86695:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: () => (/* binding */ EmployeeAverageBonusComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);

let EmployeeAverageBonusComponent = /*#__PURE__*/(() => {
  class EmployeeAverageBonusComponent {
    static {
      this.ɵfac = function EmployeeAverageBonusComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || EmployeeAverageBonusComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: EmployeeAverageBonusComponent,
        selectors: [["ga-employee-average-bonus"]],
        inputs: {
          rowData: "rowData"
        },
        standalone: false,
        decls: 3,
        vars: 1,
        consts: [[1, "text-center"], [1, "d-block"]],
        template: function EmployeeAverageBonusComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 0)(1, "strong", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(ctx.rowData.averageBonus);
          }
        },
        encapsulation: 2
      });
    }
  }
  return EmployeeAverageBonusComponent;
})();

/***/ }),

/***/ 87791:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Y: () => (/* binding */ TagsColorFilterComponent)
/* harmony export */ });
/* harmony import */ var angular2_smart_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52345);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26860);
/* harmony import */ var _tags_tags_color_input_tags_color_input_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(62177);




let TagsColorFilterComponent = /*#__PURE__*/(() => {
  class TagsColorFilterComponent extends angular2_smart_table__WEBPACK_IMPORTED_MODULE_0__/* .DefaultFilter */ .yG {
    constructor() {
      super();
    }
    ngOnChanges(changes) {}
    /**
     *
     * @param tags
     */
    selectedTagsEvent(value) {
      this.column.filterFunction(value, this.column.id);
    }
    static {
      this.ɵfac = function TagsColorFilterComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || TagsColorFilterComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineComponent"] */ .VBU({
        type: TagsColorFilterComponent,
        selectors: [["ga-tag-color-filter"]],
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3, _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵNgOnChangesFeature"] */ .OA$],
        decls: 1,
        vars: 3,
        consts: [[3, "selectedTagsEvent", "multiple", "isOrgLevel", "label"]],
        template: function TagsColorFilterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "ga-tags-color-input", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("selectedTagsEvent", function TagsColorFilterComponent_Template_ga_tags_color_input_selectedTagsEvent_0_listener($event) {
              return ctx.selectedTagsEvent($event);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("multiple", true)("isOrgLevel", true)("label", false);
          }
        },
        dependencies: [_tags_tags_color_input_tags_color_input_component__WEBPACK_IMPORTED_MODULE_2__/* .TagsColorInputComponent */ .i],
        encapsulation: 2
      });
    }
  }
  return TagsColorFilterComponent;
})();

/***/ }),

/***/ 91963:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P: () => (/* binding */ RecurringExpenseMutationModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14572);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10936);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(56383);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(55567);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(19223);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22688);
/* harmony import */ var _selectors_selectors_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(98048);
/* harmony import */ var _modules_currency_currency_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(43629);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);










let RecurringExpenseMutationModule = /*#__PURE__*/(() => {
  class RecurringExpenseMutationModule {
    static {
      this.ɵfac = function RecurringExpenseMutationModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || RecurringExpenseMutationModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .$C({
        type: RecurringExpenseMutationModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .G2t({
        providers: [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_1__/* .OrganizationsService */ .k],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__/* .CommonModule */ .MD, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .FormsModule */ .YN, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .ReactiveFormsModule */ .X1, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbAlertModule */ .dQU, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbButtonModule */ .P5N, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbCardModule */ .lVF, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbCheckboxModule */ .Ad8, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbDatepickerModule */ .TgK, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbIconModule */ .clu, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbInputModule */ .pty, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbSelectModule */ .VcP, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbSpinnerModule */ .gYs, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbTooltipModule */ .IB0, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__/* .NgSelectModule */ .MQ, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__/* .TranslateModule */ .h.forChild(), _selectors_selectors_module__WEBPACK_IMPORTED_MODULE_7__/* .SelectorsModule */ .b, _modules_currency_currency_module__WEBPACK_IMPORTED_MODULE_8__/* .CurrencyModule */ .C]
      });
    }
  }
  return RecurringExpenseMutationModule;
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

/***/ 93159:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FW: () => (/* reexport safe */ _edit_employee_profile_component__WEBPACK_IMPORTED_MODULE_9__.F),
/* harmony export */   N4: () => (/* reexport safe */ _edit_employee_location_edit_employee_location_component__WEBPACK_IMPORTED_MODULE_3__.N),
/* harmony export */   Rx: () => (/* reexport safe */ _edit_employee_hiring_edit_employee_hiring_component__WEBPACK_IMPORTED_MODULE_2__.R),
/* harmony export */   SJ: () => (/* reexport safe */ _edit_employee_projects_edit_employee_projects_component__WEBPACK_IMPORTED_MODULE_6__.S),
/* harmony export */   V9: () => (/* reexport safe */ _edit_employee_settings_edit_employee_other_settings_component__WEBPACK_IMPORTED_MODULE_8__.V),
/* harmony export */   c: () => (/* reexport safe */ _edit_employee_employment_edit_employee_employment_component__WEBPACK_IMPORTED_MODULE_1__.c),
/* harmony export */   fw: () => (/* reexport safe */ _edit_employee_rate_edit_employee_rate_component__WEBPACK_IMPORTED_MODULE_7__.f),
/* harmony export */   pc: () => (/* reexport safe */ _edit_employee_networks_edit_employee_networks_component__WEBPACK_IMPORTED_MODULE_5__.p),
/* harmony export */   ws: () => (/* reexport safe */ _edit_employee_contact_edit_employee_contact_component__WEBPACK_IMPORTED_MODULE_0__.w),
/* harmony export */   zw: () => (/* reexport safe */ _edit_employee_main_edit_employee_main_component__WEBPACK_IMPORTED_MODULE_4__.z)
/* harmony export */ });
/* harmony import */ var _edit_employee_contact_edit_employee_contact_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75721);
/* harmony import */ var _edit_employee_employment_edit_employee_employment_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4255);
/* harmony import */ var _edit_employee_hiring_edit_employee_hiring_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(30105);
/* harmony import */ var _edit_employee_location_edit_employee_location_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(44689);
/* harmony import */ var _edit_employee_main_edit_employee_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(15529);
/* harmony import */ var _edit_employee_networks_edit_employee_networks_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(76065);
/* harmony import */ var _edit_employee_projects_edit_employee_projects_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6475);
/* harmony import */ var _edit_employee_rate_edit_employee_rate_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(73459);
/* harmony import */ var _edit_employee_settings_edit_employee_other_settings_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(508);
/* harmony import */ var _edit_employee_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(80589);











/***/ }),

/***/ 95041:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ TimeZoneSelectorModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14572);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10936);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(55567);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19223);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);






let TimeZoneSelectorModule = /*#__PURE__*/(() => {
  class TimeZoneSelectorModule {
    static {
      this.ɵfac = function TimeZoneSelectorModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || TimeZoneSelectorModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .$C({
        type: TimeZoneSelectorModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .CommonModule */ .MD, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .FormsModule */ .YN, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .ReactiveFormsModule */ .X1, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__/* .TranslateModule */ .h.forChild(), _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__/* .NgSelectModule */ .MQ]
      });
    }
  }
  return TimeZoneSelectorModule;
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