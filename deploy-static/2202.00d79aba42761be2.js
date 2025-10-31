"use strict";
(self["webpackChunkgauzy"] = self["webpackChunkgauzy"] || []).push([[2202],{

/***/ 12272:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* binding */ IncomeService)
/* harmony export */ });
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64913);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26024);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80189);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26860);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45715);





let IncomeService = /*#__PURE__*/(() => {
  class IncomeService {
    constructor(http) {
      this.http = http;
    }
    create(createInput) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ ._)(this.http.post(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/income`, createInput));
    }
    getMyAll(relations, findInput, filterDate) {
      const data = JSON.stringify({
        relations,
        findInput,
        filterDate
      });
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ ._)(this.http.get(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/income/me`, {
        params: {
          data
        }
      }));
    }
    getAll(relations, findInput, filterDate) {
      const data = JSON.stringify({
        relations,
        findInput,
        filterDate
      });
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ ._)(this.http.get(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/income`, {
        params: {
          data
        }
      }));
    }
    update(id, updateInput) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ ._)(this.http.put(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/income/${id}`, updateInput));
    }
    delete(incomeId, input) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ ._)(this.http.delete(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/income/${incomeId}`, {
        params: (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_2__/* .toParams */ .SV)({
          ...input
        })
      }));
    }
    static {
      this.ɵfac = function IncomeService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || IncomeService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵinject"] */ .KVO(_angular_common_http__WEBPACK_IMPORTED_MODULE_4__/* .HttpClient */ .Qq));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdefineInjectable"] */ .jDH({
        token: IncomeService,
        factory: IncomeService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return IncomeService;
})();

/***/ }),

/***/ 12467:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: () => (/* binding */ PasswordFormFieldComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(55598);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10936);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(41598);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(19223);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4478);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(26024);
/* harmony import */ var _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38546);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(14572);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(56383);













const _c0 = ["input"];
const _c1 = [[["", 8, "invalid-feedback"]]];
const _c2 = [".invalid-feedback"];
function PasswordFormFieldComponent_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function PasswordFormFieldComponent_button_5_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r3);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r3.showPassword = !ctx_r3.showPassword);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "nb-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("icon", ctx_r3.showPassword ? "eye-outline" : "eye-off-outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵattribute"] */ .BMQ("aria-label", ctx_r3.showPassword ? "hide password" : "show password");
  }
}
let PasswordFormFieldComponent = /*#__PURE__*/(() => {
  let PasswordFormFieldComponent = class PasswordFormFieldComponent extends _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_1__/* .TranslationBaseComponent */ .K {
    /**
     * Getter & Setter accessor including call the onchange callback
     */
    get value() {
      return this.innerValue;
    }
    set value(v) {
      if (v !== this.innerValue) {
        this.innerValue = v;
      }
    }
    get ctrl() {
      return this._ctrl;
    }
    set ctrl(value) {
      this._ctrl = value;
    }
    get label() {
      return this._label;
    }
    set label(value) {
      this._label = value;
    }
    get placeholder() {
      return this._placeholder;
    }
    set placeholder(value) {
      this._placeholder = value;
    }
    get icon() {
      return this._icon;
    }
    set icon(value) {
      this._icon = value;
    }
    get id() {
      return this._id;
    }
    set id(value) {
      this._id = value;
    }
    get fieldSize() {
      return this._fieldSize;
    }
    set fieldSize(value) {
      this._fieldSize = value;
    }
    get ngClass() {
      return this._ngClass;
    }
    set ngClass(value) {
      this._ngClass = value;
    }
    constructor(translateService) {
      super(translateService);
      this.translateService = translateService;
      this.showPassword = false;
      //The internal data model for form control value access
      this.innerValue = '';
      this.onChange = _ => {};
      this.onTouched = _ => {};
      /*
       * Getter & Setter accessor for dynamic form control
       */
      this._ctrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .FormControl */ .MJ();
      /*
       * Getter & Setter accessor for dynamic placeholder
       */
      this._icon = true;
      /*
       * Getter & Setter for dynamic field size
       */
      this._fieldSize = 'medium';
      this.onInputChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .bkB();
    }
    ngOnChanges() {}
    ngAfterViewInit() {
      this.ctrl.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .debounceTime */ .B)(100), (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_4__/* .distinctUntilChange */ .nI)(), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .untilDestroyed */ .s)(this)).subscribe(() => {
        // check condition if the form control is RESET
        if ((0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_4__/* .isEmpty */ .Im)(this.ctrl.value)) {
          this.innerValue = '';
          this.inputRef.nativeElement.value = '';
        }
        this.onInputChanged.emit(this.ctrl.value);
      });
    }
    // event fired when input value is changed. later propagated up to the form control using the custom value accessor interface
    onInputChange(e, value) {
      //set changed value
      this.innerValue = value;
      // propagate value into form control using control value accessor interface
      this.onChange(this.innerValue);
    }
    //from control value accessor interface
    writeValue(value) {
      this.innerValue = value;
    }
    //from control value accessor interface
    registerOnChange(fn) {
      this.onChange = fn;
    }
    //from control value accessor interface
    registerOnTouched(fn) {
      this.onTouched = fn;
    }
    ngOnDestroy() {}
    static {
      this.ɵfac = function PasswordFormFieldComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || PasswordFormFieldComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__/* .TranslateService */ .c$));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: PasswordFormFieldComponent,
        selectors: [["ngx-password-form-field"]],
        viewQuery: function PasswordFormFieldComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵviewQuery"] */ .GBs(_c0, 5);
          }
          if (rf & 2) {
            let _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵqueryRefresh"] */ .mGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵloadQuery"] */ .lsd()) && (ctx.inputRef = _t.first);
          }
        },
        inputs: {
          ctrl: "ctrl",
          label: "label",
          placeholder: "placeholder",
          icon: "icon",
          id: "id",
          fieldSize: "fieldSize",
          ngClass: "ngClass",
          autocomplete: "autocomplete"
        },
        outputs: {
          onInputChanged: "onInputChanged"
        },
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵProvidersFeature"] */ .Jv_([{
          provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .NG_VALUE_ACCESSOR */ .kq,
          useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__/* .forwardRef */ .Rfq)(() => PasswordFormFieldComponent),
          multi: true
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵNgOnChangesFeature"] */ .OA$],
        ngContentSelectors: _c2,
        decls: 7,
        vars: 11,
        consts: [["input", ""], [1, "form-group"], [1, "label", 3, "innerText"], ["fullWidth", "", "nbInput", "", 3, "blur", "fieldSize", "formControl", "status", "ngClass", "autocomplete"], ["nbSuffix", "", "nbButton", "", "ghost", "", "type", "button", 3, "click", 4, "ngIf"], ["nbSuffix", "", "nbButton", "", "ghost", "", "type", "button", 3, "click"], ["pack", "eva", 3, "icon"]],
        template: function PasswordFormFieldComponent_Template(rf, ctx) {
          if (rf & 1) {
            const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵprojectionDef"] */ .NAR(_c1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "label", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(2, "nb-form-field")(3, "input", 3, 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("blur", function PasswordFormFieldComponent_Template_input_blur_3_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              const input_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(4);
              return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx.onInputChange($event, input_r2.value));
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(5, PasswordFormFieldComponent_button_5_Template, 2, 2, "button", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵprojection"] */ .SdG(6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("innerText", ctx.label);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵattribute"] */ .BMQ("for", ctx.id);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("fieldSize", ctx.fieldSize)("formControl", ctx.ctrl)("status", ctx.ctrl.invalid && (ctx.ctrl.touched || ctx.ctrl.dirty) ? "danger" : "basic")("ngClass", ctx.ngClass)("autocomplete", ctx.autocomplete);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵattribute"] */ .BMQ("type", ctx.showPassword ? "text" : "password")("placeholder", ctx.placeholder)("id", ctx.id);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.icon);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__/* .NgClass */ .YU, _angular_common__WEBPACK_IMPORTED_MODULE_7__/* .NgIf */ .bT, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .DefaultValueAccessor */ .me, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .NgControlStatus */ .BC, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .FormControlDirective */ .l_, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__/* .NbButtonComponent */ .YP2, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__/* .NbFormFieldComponent */ .u_9, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__/* .NbSuffixDirective */ .zb0, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__/* .NbIconComponent */ .tHu, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__/* .NbInputDirective */ .i6h],
        encapsulation: 2
      });
    }
  };
  PasswordFormFieldComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .UntilDestroy */ .d)({
    checkProperties: true
  }), (0,tslib__WEBPACK_IMPORTED_MODULE_9__/* .__metadata */ .Sn)("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__/* .TranslateService */ .c$])], PasswordFormFieldComponent);
  return PasswordFormFieldComponent;
})();


/***/ }),

/***/ 13271:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ RolesEnum)
/* harmony export */ });
/* unused harmony export SYSTEM_DEFAULT_ROLES */
var RolesEnum = /*#__PURE__*/function (RolesEnum) {
  RolesEnum["SUPER_ADMIN"] = "SUPER_ADMIN";
  RolesEnum["ADMIN"] = "ADMIN";
  RolesEnum["DATA_ENTRY"] = "DATA_ENTRY";
  RolesEnum["EMPLOYEE"] = "EMPLOYEE";
  RolesEnum["CANDIDATE"] = "CANDIDATE";
  RolesEnum["MANAGER"] = "MANAGER";
  RolesEnum["VIEWER"] = "VIEWER";
  RolesEnum["INTERVIEWER"] = "INTERVIEWER";
  return RolesEnum;
}(RolesEnum || {});
/** Default system role */
const SYSTEM_DEFAULT_ROLES = [RolesEnum.SUPER_ADMIN, RolesEnum.ADMIN, RolesEnum.EMPLOYEE, RolesEnum.CANDIDATE, RolesEnum.VIEWER];

/***/ }),

/***/ 14508:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   b: () => (/* binding */ AsapScheduler)
/* harmony export */ });
/* harmony import */ var _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75753);

class AsapScheduler extends _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__/* .AsyncScheduler */ .q {
  flush(action) {
    this._active = true;
    const flushId = this._scheduled;
    this._scheduled = undefined;
    const {
      actions
    } = this;
    let error;
    action = action || actions.shift();
    do {
      if (error = action.execute(action.state, action.delay)) {
        break;
      }
    } while ((action = actions[0]) && action.id === flushId && actions.shift());
    this._active = false;
    if (error) {
      while ((action = actions[0]) && action.id === flushId && actions.shift()) {
        action.unsubscribe();
      }
      throw error;
    }
  }
}
//# sourceMappingURL=AsapScheduler.js.map

/***/ }),

/***/ 18857:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   x: () => (/* binding */ ActionConfirmationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56383);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19223);




let ActionConfirmationComponent = /*#__PURE__*/(() => {
  class ActionConfirmationComponent {
    constructor(dialogRef) {
      this.dialogRef = dialogRef;
    }
    close() {
      this.dialogRef.close();
    }
    confirm() {
      this.dialogRef.close('ok');
    }
    static {
      this.ɵfac = function ActionConfirmationComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || ActionConfirmationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbDialogRef */ .ybQ));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: ActionConfirmationComponent,
        selectors: [["ga-action-confirmation"]],
        standalone: false,
        decls: 18,
        vars: 13,
        consts: [[1, "cancel"], [1, "fas", "fa-times", 3, "click"], [1, "title"], ["status", "basic", "outline", "", "nbButton", "", 3, "click"], ["status", "success", "nbButton", "", 1, "mr-3", "ml-3", 3, "click"]],
        template: function ActionConfirmationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-card")(1, "nb-card-header")(2, "span", 0)(3, "i", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function ActionConfirmationComponent_Template_i_click_3_listener() {
              return ctx.close();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(4, "h6", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(6, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(7, "nb-card-body")(8, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(10, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(11, "nb-card-footer")(12, "button", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function ActionConfirmationComponent_Template_button_click_12_listener() {
              return ctx.close();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(14, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(15, "button", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function ActionConfirmationComponent_Template_button_click_15_listener() {
              return ctx.confirm();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(17, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(6, 5, "POP_UPS.CONFIRM"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate2"] */ .Lme(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(10, 7, "POP_UPS.ARE_YOU_SURE_YOU_WANT_TO_CHANGE_THE"), " ", ctx.recordType, "? ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(14, 9, "POP_UPS.CANCEL"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(17, 11, "POP_UPS.OK"), " ");
          }
        },
        dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbButtonComponent */ .YP2, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbCardComponent */ .SrT, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbCardBodyComponent */ .KH5, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbCardFooterComponent */ .VDm, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbCardHeaderComponent */ .zJv, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__/* .TranslatePipe */ .D9],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   i[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n}\n[dir=ltr]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n[dir=rtl]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--gauzy-text-color-1);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(245, 109, 88, 0.3);\n  border-width: 2px;\n  color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(245, 109, 88, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 16px;\n  letter-spacing: 0em;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(126, 126, 143, 0.3);\n  border-width: 2px;\n  color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(126, 126, 143, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(37, 184, 105, 0.3);\n  border-width: 2px;\n  color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(37, 184, 105, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[disabled][_ngcontent-%COMP%], \n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic.btn-disabled[_ngcontent-%COMP%] {\n  background-color: var(--button-outline-basic-disabled-background-color);\n  border-color: var(--button-outline-basic-disabled-border-color);\n  color: var(--button-outline-basic-disabled-text-color);\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].primary.appearance-filled.status-primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  border: unset;\n  background-color: var(--color-primary-transparent-default);\n  box-shadow: var(--gauzy-shadow) 0, 0, 0, 0.15;\n}\n[dir=ltr]   [_nghost-%COMP%]     input, \n[dir=ltr]   [_nghost-%COMP%]     textarea {\n  text-align: start;\n}\n[dir=rtl]   [_nghost-%COMP%]     input, \n[dir=rtl]   [_nghost-%COMP%]     textarea {\n  text-align: end;\n}\n[_nghost-%COMP%]     input, \n[_nghost-%COMP%]     nb-select.appearance-outline.status-basic .select-button, \n[_nghost-%COMP%]     .ng-select .ng-select-container {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n  height: 42px !important;\n}\n[_nghost-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder, \n[_nghost-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {\n  top: unset !important;\n}\n[_nghost-%COMP%]     label, \n[_nghost-%COMP%]     .label {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  color: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]     textarea {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n}\n[_nghost-%COMP%]     .ng-select .ng-select-container input, \n[_nghost-%COMP%]     nb-tag-list input {\n  background-color: unset !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n}\n\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: nb-theme(gauzy-card-1);\n}\n[_nghost-%COMP%]   .center[_ngcontent-%COMP%] {\n  width: 300px;\n}", "nb-card-footer[_ngcontent-%COMP%] {\n\t\t\t\ttext-align: left;\n\t\t\t\twidth: 100%;\n\t\t\t}\n\t\t\t.center[_ngcontent-%COMP%] {\n\t\t\t\talign-items: center;\n\t\t\t\twidth: 300px;\n\t\t\t}"]
      });
    }
  }
  return ActionConfirmationComponent;
})();

/***/ }),

/***/ 20345:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   J: () => (/* binding */ DebounceClickDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26860);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4644);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4478);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39855);



let DebounceClickDirective = /*#__PURE__*/(() => {
  class DebounceClickDirective {
    constructor() {
      this.clicks = new rxjs__WEBPACK_IMPORTED_MODULE_0__/* .Subject */ .B();
      this.debounceTime = 300;
      this.throttledClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__/* .EventEmitter */ .bkB();
    }
    /**
     * Handles the click event and emits it after a debounce time.
     *
     * @param {Event} event - The click event object.
     * @return {void} This function does not return a value.
     */
    clickEvent(event) {
      event.preventDefault();
      event.stopPropagation();
      this.clicks.next(event);
    }
    ngOnInit() {
      this.subscription = this.clicks.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__/* .debounceTime */ .B)(this.debounceTime), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__/* .tap */ .M)(e => this.throttledClick.emit(e))).subscribe();
    }
    ngOnDestroy() {
      if (this.subscription) {
        this.subscription.unsubscribe();
      }
    }
    static {
      this.ɵfac = function DebounceClickDirective_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || DebounceClickDirective)();
      };
    }
    static {
      this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineDirective"] */ .FsC({
        type: DebounceClickDirective,
        selectors: [["", "debounceClick", ""]],
        hostBindings: function DebounceClickDirective_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("click", function DebounceClickDirective_click_HostBindingHandler($event) {
              return ctx.clickEvent($event);
            });
          }
        },
        inputs: {
          debounceTime: "debounceTime"
        },
        outputs: {
          throttledClick: "throttledClick"
        },
        standalone: false
      });
    }
  }
  return DebounceClickDirective;
})();

/***/ }),

/***/ 21663:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   h: () => (/* binding */ AutocompleteOffDirective)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48901);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26860);



/**
 * Alterates autocomplete="off" attribute on chrome because it's ignoring it in case of credentials, address or credit card data type.
 */
let AutocompleteOffDirective = /*#__PURE__*/(() => {
  class AutocompleteOffDirective {
    constructor(_renderer, _el, _zone) {
      this._renderer = _renderer;
      this._el = _el;
      this._zone = _zone;
    }
    ngOnInit() {
      this._zone.runOutsideAngular(() => {
        if (this._el.nativeElement && this._el.nativeElement.hasAttribute('autocomplete-off')) {
          /**
           * disabled autocomplete for form
           */
          rxjs__WEBPACK_IMPORTED_MODULE_0__/* .asapScheduler */ .$.schedule(() => this._el.nativeElement.setAttribute('autocomplete', 'off'));
          /**
           * disabled autocomplete for all inputs inside form
           */
          const inputs = Array.prototype.slice.call(this._el.nativeElement.querySelectorAll('input'));
          inputs.forEach(element => {
            this._renderer.setAttribute(element, 'autocomplete', 'off');
            this._renderer.setAttribute(element, 'autocorrect', 'off');
            this._renderer.setAttribute(element, 'autocapitalize', 'none');
            this._renderer.setAttribute(element, 'spellcheck', 'false');
          });
        }
      });
    }
    static {
      this.ɵfac = function AutocompleteOffDirective_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || AutocompleteOffDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* .Renderer2 */ .sFG), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* .ElementRef */ .aKT), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* .NgZone */ .SKi));
      };
    }
    static {
      this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineDirective"] */ .FsC({
        type: AutocompleteOffDirective,
        selectors: [["", "autocomplete-off", ""]],
        standalone: false
      });
    }
  }
  return AutocompleteOffDirective;
})();

/***/ }),

/***/ 22779:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ CompareDateValidator)
/* harmony export */ });
/* harmony import */ var _has_required__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91107);

class CompareDateValidator {
  /**
   * Validates the date range between two form fields.
   * @param fromField The name of the 'from' date form control.
   * @param toField The name of the 'to' date form control.
   * @returns A validator function that returns an object if validation fails, or null if validation succeeds.
   */
  static validateDate(fromField, toField) {
    return formGroup => {
      const fromDate = formGroup.get(fromField);
      const toDate = formGroup.get(toField);
      // Check if both 'from' and 'to' dates are not null and 'from' date is after 'to' date
      if (fromDate.value !== null && toDate.value !== null && fromDate.value > toDate.value) {
        // Set error on 'to' date control and return error object
        toDate.setErrors({
          invalid: true
        });
        return {
          [toField]: true
        };
      }
      // Check if 'from' date control has a required field error
      if ((0,_has_required__WEBPACK_IMPORTED_MODULE_0__/* .hasRequiredField */ .A)(fromDate)) {
        fromDate.setErrors({
          required: true
        });
      } else {
        // Clear any existing errors on 'from' date control
        fromDate.setErrors(null);
      }
      // Check if 'to' date control has a required field error
      if ((0,_has_required__WEBPACK_IMPORTED_MODULE_0__/* .hasRequiredField */ .A)(toDate)) {
        toDate.setErrors({
          required: true
        });
      } else {
        // Clear any existing errors on 'to' date control
        toDate.setErrors(null);
      }
      // If validation passes, return null
      return null;
    };
  }
}

/***/ }),

/***/ 24250:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ BasicInfoFormComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(73014);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(55598);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10936);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(19159);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(13271);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(52738);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(39855);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(80189);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(19223);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(41598);
/* harmony import */ var _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38546);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22779);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(60911);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(36042);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(27038);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(88319);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(32629);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(71924);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(54263);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(26024);
/* harmony import */ var _forms_helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(78870);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(14572);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(56383);
/* harmony import */ var _directives_autocomplete_off_directive__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(21663);
/* harmony import */ var _directives_img_directive__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(71466);
/* harmony import */ var _file_uploader_input_file_uploader_input_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(53437);
/* harmony import */ var _tags_tags_color_input_tags_color_input_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(62177);
/* harmony import */ var _fields_password_password_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(12467);
/* harmony import */ var _fields_role_role_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(33589);

var BasicInfoFormComponent_1;
























const _c0 = ["imagePreview"];
function BasicInfoFormComponent_ng_container_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(1, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(3, 1, "FORM.ERROR.INVALID_IMAGE_URL"), " ");
  }
}
function BasicInfoFormComponent_ng_container_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(1, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(3, 1, "TOASTR.MESSAGE.NAME_REQUIRED"), " ");
  }
}
function BasicInfoFormComponent_ng_container_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(1, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(3, 1, "TOASTR.MESSAGE.NAME_REQUIRED"), " ");
  }
}
function BasicInfoFormComponent_ng_container_62_p_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(2, 1, "TOASTR.MESSAGE.EMAIL_SHOULD_BE_REAL"), " ");
  }
}
function BasicInfoFormComponent_ng_container_62_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, BasicInfoFormComponent_ng_container_62_p_1_Template, 3, 3, "p", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r1.form.controls.email.errors == null ? null : ctx_r1.form.controls.email.errors.pattern);
  }
}
function BasicInfoFormComponent_ng_container_68_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(1, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(3, 1, "TOASTR.MESSAGE.PASSWORD_REQUIRED"), " ");
  }
}
function BasicInfoFormComponent_ng_container_70_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(1, "div", 24)(2, "ngx-role-form-field", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("selectedChange", function BasicInfoFormComponent_ng_container_70_Template_ngx_role_form_field_selectedChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.onSelectionChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(3, 3, "FORM.PLACEHOLDERS.ROLE"))("label", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(4, 5, "FORM.LABELS.ROLE"))("excludes", ctx_r1.excludes);
  }
}
function BasicInfoFormComponent_div_71_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 45)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(3, 1, "FORM.NOTIFICATIONS.STARTED_WORK_ON"), " ");
  }
}
function BasicInfoFormComponent_div_71_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 24)(1, "div", 20)(2, "label", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(5, "input", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(7, "nb-datepicker", null, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(9, BasicInfoFormComponent_div_71_div_9_Template, 4, 3, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const startWorkOnDatepicker_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(8);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(4, 4, "FORM.LABELS.START_DATE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("nbDatepicker", startWorkOnDatepicker_r4)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(6, 6, "FORM.PLACEHOLDERS.START_DATE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r1.form.get("startedWorkOn").touched && ctx_r1.form.get("startedWorkOn").value == null);
  }
}
function BasicInfoFormComponent_div_72_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 24)(1, "div", 20)(2, "label", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(5, "input", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(7, "nb-datepicker", null, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const appliedDatePicker_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(4, 3, "FORM.LABELS.APPLIED_DATE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("nbDatepicker", appliedDatePicker_r5)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(6, 5, "POP_UPS.PICK_DATE"));
  }
}
function BasicInfoFormComponent_div_73_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 24)(1, "div", 20)(2, "label", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(5, "input", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(7, "nb-datepicker", null, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const rejectDatePicker_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(8);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(4, 4, "FORM.LABELS.REJECT_DATE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("nbDatepicker", rejectDatePicker_r6)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(6, 6, "POP_UPS.PICK_DATE"))("status", ctx_r1.FormHelpers.isInvalidControl(ctx_r1.form, "rejectDate") ? "danger" : "basic");
  }
}
function BasicInfoFormComponent_div_74_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 8)(1, "div", 24)(2, "div", 20)(3, "label", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(6, "input", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(8, "nb-datepicker", null, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(10, "div", 24)(11, "div", 20)(12, "label", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(15, "input", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(17, "nb-datepicker", null, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
  }
  if (rf & 2) {
    const offerDatePicker_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(9);
    const acceptDatePicker_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(18);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(5, 7, "FORM.LABELS.OFFER_DATE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("nbDatepicker", offerDatePicker_r7)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(7, 9, "POP_UPS.PICK_DATE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(14, 11, "FORM.LABELS.ACCEPT_DATE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("nbDatepicker", acceptDatePicker_r8)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(16, 13, "POP_UPS.PICK_DATE"))("status", ctx_r1.FormHelpers.isInvalidControl(ctx_r1.form, "acceptDate") ? "danger" : "basic");
  }
}
function BasicInfoFormComponent_div_79_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 8)(1, "div", 24)(2, "div", 20)(3, "label", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(6, "input", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(5, 2, "FORM.LABELS.SOURCE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(7, 4, "POP_UPS.SOURCE"));
  }
}
function BasicInfoFormComponent_ng_container_80_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 8)(1, "div", 11)(2, "div", 20)(3, "nb-checkbox", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(5, 1, "FORM.LABELS.ENABLE_EMPLOYEE_FEATURES"), " ");
  }
}
function BasicInfoFormComponent_ng_container_80_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, BasicInfoFormComponent_ng_container_80_div_1_Template, 6, 3, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r1.enableEmployee());
  }
}
let BasicInfoFormComponent = /*#__PURE__*/(() => {
  let BasicInfoFormComponent = class BasicInfoFormComponent extends _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_1__/* .TranslationBaseComponent */ .K {
    static {
      BasicInfoFormComponent_1 = this;
    }
    get isCandidate() {
      return this._isCandidate;
    }
    set isCandidate(value) {
      this._isCandidate = value;
    }
    get isEmployee() {
      return this._isEmployee;
    }
    set isEmployee(value) {
      this._isEmployee = value;
    }
    get isShowRole() {
      return this._isShowRole;
    }
    set isShowRole(value) {
      this._isShowRole = value;
      this.setRoleValidations(value);
    }
    static buildForm(fb, self) {
      return fb.group({
        firstName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .Validators */ .k0.required],
        lastName: [null],
        username: [null],
        email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .Validators */ .k0.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .Validators */ .k0.email]],
        imageUrl: {
          value: null,
          disabled: true
        },
        imageId: [null],
        password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .Validators */ .k0.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .Validators */ .k0.minLength(4)]],
        startedWorkOn: [null],
        role: [null],
        offerDate: [null],
        acceptDate: [null],
        appliedDate: [null],
        rejectDate: [null],
        source: [null],
        tags: [self.selectedTags],
        featureAsEmployee: [false]
      }, {
        validators: [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_3__/* .CompareDateValidator */ .A.validateDate('offerDate', 'acceptDate'), _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_3__/* .CompareDateValidator */ .A.validateDate('offerDate', 'rejectDate'), _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_4__/* .UrlPatternValidator */ .i.imageUrlValidator('imageUrl')]
      });
    }
    constructor(translateService, _location, _fb, _authService, _roleService, _employeesService, _candidatesService, _store, _errorHandlingService) {
      super(translateService);
      this.translateService = translateService;
      this._location = _location;
      this._fb = _fb;
      this._authService = _authService;
      this._roleService = _roleService;
      this._employeesService = _employeesService;
      this._candidatesService = _candidatesService;
      this._store = _store;
      this._errorHandlingService = _errorHandlingService;
      this.FormHelpers = _forms_helpers__WEBPACK_IMPORTED_MODULE_5__/* .FormHelpers */ .k;
      this.excludes = [];
      this.selectedTags = [];
      /*
       * Getter & Setter for check is for candidate mutation
       */
      this._isCandidate = false;
      /*
       * Getter & Setter for check is for employee mutation
       */
      this._isEmployee = false;
      /*
       * Getter & Setter for dynamic hide/show roles dropdown
       */
      this._isShowRole = false;
      this.form = BasicInfoFormComponent_1.buildForm(this._fb, this);
    }
    ngOnInit() {
      this.excludeRoles();
      this._store.selectedOrganization$.pipe((0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_6__/* .distinctUntilChange */ .nI)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__/* .filter */ .p)(organization => !!organization), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__/* .tap */ .M)(organization => this.organization = organization), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__/* .filter */ .p)(() => !!this._location.getState()), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__/* .tap */ .M)(() => this.patchUsingLocationState(this._location.getState())), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__/* .untilDestroyed */ .s)(this)).subscribe();
    }
    /**
     * Excludes the SUPER_ADMIN role if the current user doesn't have the necessary permissions.
     */
    excludeRoles() {
      var _this = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A)(function* () {
        const hasSuperAdminRole = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_11__/* .firstValueFrom */ ._)(_this._authService.hasRole([_gauzy_contracts__WEBPACK_IMPORTED_MODULE_12__/* .RolesEnum */ .$.SUPER_ADMIN]));
        if (!hasSuperAdminRole) {
          _this.excludes.push(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_12__/* .RolesEnum */ .$.SUPER_ADMIN);
        }
      })();
    }
    /**
     * Checks if the current form's role is either SUPER_ADMIN or ADMIN.
     *
     * @returns A boolean indicating whether the role is SUPER_ADMIN or ADMIN.
     */
    enableEmployee() {
      const role = this.form.get('role').value?.name;
      return role === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_12__/* .RolesEnum */ .$.SUPER_ADMIN || role === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_12__/* .RolesEnum */ .$.ADMIN;
    }
    get showImageMeta() {
      return this.form.get('imageUrl') && this.form.get('imageUrl').value;
    }
    /**
     * Registers a user with different roles
     *
     * @param defaultRoleName - Default role to assign if none is specified
     * @param organizationId - ID of the organization
     * @param createdByUserId - ID of the user who created this user
     * @returns A promise of the created user or employee
     */
    registerUser(defaultRoleName, organizationId, createdByUserId) {
      var _this2 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A)(function* () {
        if (_this2.form.invalid) {
          return;
        }
        const {
          firstName,
          lastName,
          email,
          username,
          password,
          tags,
          imageUrl,
          imageId,
          featureAsEmployee,
          role: formRole
        } = _this2.form.value;
        const {
          tenantId,
          tenant
        } = _this2._store.user;
        // Remove unnecessary featureOrganizations property
        delete tenant.featureOrganizations;
        const roleName = formRole?.name || defaultRoleName;
        const role = yield _this2.getRole(roleName, tenantId);
        const user = {
          firstName,
          lastName,
          email,
          username: username || null,
          imageUrl,
          imageId,
          role,
          tenant,
          tags
        };
        if (role.name === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_12__/* .RolesEnum */ .$.EMPLOYEE) {
          return yield _this2.createEmployee(user);
        } else if (role.name === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_12__/* .RolesEnum */ .$.CANDIDATE) {
          return yield _this2.createCandidate(user);
        } else {
          return yield _this2.createUser(user, password, organizationId, createdByUserId, featureAsEmployee);
        }
      })();
    }
    /**
     * Creates a user with the specified attributes, either as an employee or a regular user.
     *
     * @param user - The user details.
     * @param password - The password for the user.
     * @param organizationId - (Optional) The ID of the organization.
     * @param createdByUserId - (Optional) The ID of the user who created this user.
     * @param featureAsEmployee - (Optional) Whether to create the user as an employee.
     * @returns A promise resolving to the created user or employee.
     */
    createUser(user, password, organizationId, createdByUserId, featureAsEmployee) {
      var _this3 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A)(function* () {
        return yield (0,rxjs__WEBPACK_IMPORTED_MODULE_11__/* .firstValueFrom */ ._)(_this3._authService.register({
          user,
          password,
          confirmPassword: password,
          organizationId,
          createdByUserId,
          featureAsEmployee
        }));
      })();
    }
    /**
     * Fetches a role based on the provided role name and tenant ID.
     *
     * @param roleName - The name of the role to fetch.
     * @param tenantId - The ID of the tenant to which the role belongs.
     * @returns A promise resolving to the role object.
     */
    getRole(roleName, tenantId) {
      var _this4 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A)(function* () {
        return yield (0,rxjs__WEBPACK_IMPORTED_MODULE_11__/* .firstValueFrom */ ._)(_this4._roleService.getRoleByOptions({
          name: roleName,
          tenantId
        }));
      })();
    }
    /**
     * Delete existing image
     */
    deleteImageUrl() {
      this.form.get('imageId').setValue(null);
      this.form.get('imageId').updateValueAndValidity();
      this.form.get('imageUrl').setValue(null);
      this.form.get('imageUrl').updateValueAndValidity();
    }
    /**
     * Handle selected tags
     *
     * @param tags An array of tags to set in the form control.
     */
    selectedTagsHandler(tags) {
      this.form.get('tags').setValue(tags);
      this.form.get('tags').updateValueAndValidity();
    }
    ngAfterViewInit() {
      this._setupLogoUrlValidation();
    }
    /**
     * Upload profile image/avatar
     *
     * @param image
     */
    updateImageAsset(image) {
      try {
        if (image && image.id) {
          this.form.get('imageId').setValue(image.id);
          this.form.get('imageUrl').setValue(image.fullUrl);
          this.form.updateValueAndValidity();
          const imageUrlControl = this.form.get('imageUrl');
          imageUrlControl.disable();
        }
      } catch (error) {
        console.log('Error while updating user profile/avatar by uploading');
      }
    }
    /**
     * Upload third party URL as image/avatar
     *
     * @param imageUrl The URL of the image to update in the form control.
     */
    updateImageUrl(imageUrl) {
      try {
        const imageUrlControl = this.form.get('imageUrl');
        if (imageUrl) {
          imageUrlControl.enable();
          imageUrlControl.setValue(imageUrl);
        } else {
          imageUrlControl.setValue(null);
          imageUrlControl.disable();
        }
      } catch (error) {
        console.error('Error while updating user profile/avatar by third party URL:', error);
      }
    }
    /**
     * Sets up validation for image URL based on image loading status.
     */
    _setupLogoUrlValidation() {
      // Clear errors on image load
      this.imagePreviewElement.nativeElement.onload = () => {
        this.form.get('imageUrl').setErrors(null);
      };
      // Set error on image load error, if showImageMeta is true
      this.imagePreviewElement.nativeElement.onerror = () => {
        if (this.showImageMeta) {
          this.form.get('imageUrl').setErrors({
            invalidUrl: true
          });
        }
      };
    }
    /**
     * Handle selection change for roles.
     *
     * @param role The selected role object.
     */
    onSelectionChange(role) {
      if (this.isShowRole) {
        this.isCandidate = role.name === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_12__/* .RolesEnum */ .$.CANDIDATE;
        this.isEmployee = role.name === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_12__/* .RolesEnum */ .$.EMPLOYEE;
      }
    }
    /**
     * SET role field validations based on the given value.
     *
     * @param value Indicates whether role validation is required (true) or not (false).
     */
    setRoleValidations(value) {
      const control = this.form.get('role');
      if (value) {
        control.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .Validators */ .k0.required]);
      } else {
        control.clearValidators();
      }
      control.updateValueAndValidity();
    }
    /**
     * Create an employee from the user page.
     *
     * @param user The user object containing employee details.
     * @returns A promise that resolves to the created employee.
     */
    createEmployee(user) {
      var _this5 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A)(function* () {
        const {
          id: organizationId,
          tenantId
        } = _this5.organization;
        const {
          password,
          tags
        } = _this5.form.value;
        const {
          offerDate = null,
          acceptDate = null,
          rejectDate = null,
          startedWorkOn = null
        } = _this5.form.value;
        const employee = {
          tenantId,
          user,
          startedWorkOn,
          password,
          organizationId,
          organization: {
            id: organizationId
          },
          offerDate,
          acceptDate,
          rejectDate,
          tags
        };
        try {
          // Create the employee using the employeesService
          return yield (0,rxjs__WEBPACK_IMPORTED_MODULE_11__/* .firstValueFrom */ ._)(_this5._employeesService.create(employee));
        } catch (error) {
          // Handle any errors here, e.g., log them or rethrow as needed
          _this5._errorHandlingService.handleError(`Failed to create employee: ${error.message}`);
        }
      })();
    }
    /**
     * Create a candidate from user page.
     *
     * @param user The IUser object containing candidate's user details.
     * @returns A Promise resolving to the created ICandidate object.
     */
    createCandidate(user) {
      var _this6 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A)(function* () {
        const {
          id: organizationId,
          tenantId
        } = _this6.organization;
        const {
          password,
          tags
        } = _this6.form.value;
        const {
          appliedDate = null,
          rejectDate = null,
          source: sourceName = null
        } = _this6.form.value;
        let source = null;
        if (sourceName !== null) {
          source = {
            name: sourceName,
            tenantId,
            organizationId
          };
        }
        const candidate = {
          user,
          password,
          documents: [],
          appliedDate,
          source,
          rejectDate,
          tags,
          tenantId,
          organizationId
        };
        try {
          // Create the candidate using the _candidatesService
          return yield (0,rxjs__WEBPACK_IMPORTED_MODULE_11__/* .firstValueFrom */ ._)(_this6._candidatesService.create(candidate));
        } catch (error) {
          // Handle any errors here, e.g., log them or rethrow as needed
          _this6._errorHandlingService.handleError(`Failed to create candidate: ${error.message}`);
        }
      })();
    }
    /**
     * GET location old state & patch form value
     * We are using such functionality for create new employee from header selector
     *
     * @param state
     */
    patchUsingLocationState(state) {
      if (!this.form) {
        return;
      }
      this.form.patchValue({
        ...state
      });
      this.form.updateValueAndValidity();
    }
    static {
      this.ɵfac = function BasicInfoFormComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || BasicInfoFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__/* .TranslateService */ .c$), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_common__WEBPACK_IMPORTED_MODULE_14__/* .Location */ .aZ), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .UntypedFormBuilder */ .ze), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_15__/* .AuthService */ .u), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_16__/* .RoleService */ .W), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_17__/* .EmployeesService */ .r), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_18__/* .CandidatesService */ .S), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_19__/* .Store */ .il), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_20__/* .ErrorHandlingService */ .X));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: BasicInfoFormComponent,
        selectors: [["ga-user-basic-info-form"]],
        viewQuery: function BasicInfoFormComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵviewQuery"] */ .GBs(_c0, 5);
          }
          if (rf & 2) {
            let _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵqueryRefresh"] */ .mGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵloadQuery"] */ .lsd()) && (ctx.imagePreviewElement = _t.first);
          }
        },
        inputs: {
          selectedTags: "selectedTags",
          isCandidate: "isCandidate",
          isEmployee: "isEmployee",
          isShowRole: "isShowRole"
        },
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
        decls: 81,
        vars: 70,
        consts: [["imagePreview", ""], ["email", ""], ["startWorkOnDatepicker", ""], ["appliedDatePicker", ""], ["rejectDatePicker", ""], ["offerDatePicker", ""], ["acceptDatePicker", ""], ["autocomplete-off", "", "no-validate", "", 3, "formGroup"], [1, "row"], [1, "col-3"], [1, "form-group", "row", 3, "hidden"], [1, "col-sm-12"], [1, "row", "preview-img", 3, "hidden"], [1, "image"], ["alt", "Invalid image", 1, "img-rounded", 3, "src"], ["nbButton", "", "status", "basic", "size", "small", 1, "trash-icon", 3, "click"], ["status", "danger", "icon", "trash-2-outline", 3, "title"], [1, "far", "fa-image"], ["nbButton", "", "status", "basic", "size", "small", 1, "trash-icon"], [1, "col-9"], [1, "form-group"], ["for", "inputImageUrl", 1, "label"], ["id", "inputImageUrl", 3, "uploadedImageAsset", "uploadedImgUrl", "placeholder", "fileUrl"], [4, "ngIf"], [1, "col"], ["for", "firstName", 1, "label"], ["nbInput", "", "type", "text", "id", "firstName", "fullWidth", "", "formControlName", "firstName", 3, "placeholder", "status"], ["for", "lastName", 1, "label"], ["nbInput", "", "type", "text", "id", "lastName", "fullWidth", "", "formControlName", "lastName", 3, "placeholder", "status"], [1, "col-4"], ["for", "username", 1, "label"], ["nbInput", "", "type", "text", "id", "username", "fullWidth", "", "formControlName", "username", 3, "placeholder", "status"], [1, "col-8"], ["for", "email", 1, "label"], ["autofocus", "", "pattern", ".+@.+\\..+", "type", "email", "nbInput", "", "type", "email", "id", "email", "fullWidth", "", "formControlName", "email", 3, "placeholder", "status"], ["id", "password", "formControlName", "password", 3, "placeholder", "label", "ctrl"], ["class", "col", 4, "ngIf"], ["class", "row", 4, "ngIf"], [3, "selectedTagsEvent", "selectedTags", "isOrgLevel"], [1, "caption", "status-danger", "mt-1"], ["class", "caption status-danger mt-1", 4, "ngIf"], ["id", "role", "formControlName", "role", 3, "selectedChange", "placeholder", "label", "excludes"], ["for", "startedWork", 1, "label"], ["nbInput", "", "fullWidth", "", "formControlName", "startedWorkOn", 3, "nbDatepicker", "placeholder"], ["class", "notes", 4, "ngIf"], [1, "notes"], ["for", "appliedDate", 1, "label"], ["fullWidth", "", "id", "appliedDate", "formControlName", "appliedDate", "nbInput", "", 3, "nbDatepicker", "placeholder"], ["for", "rejectDate", 1, "label"], ["fullWidth", "", "id", "rejectDate", "formControlName", "rejectDate", "nbInput", "", 3, "nbDatepicker", "placeholder", "status"], ["for", "offerDate", 1, "label"], ["fullWidth", "", "id", "offerDate", "formControlName", "offerDate", "nbInput", "", 3, "nbDatepicker", "placeholder"], ["for", "acceptDate", 1, "label"], ["fullWidth", "", "id", "acceptDate", "formControlName", "acceptDate", "nbInput", "", 3, "nbDatepicker", "placeholder", "status"], ["for", "source", 1, "label"], ["fullWidth", "", "id", "source", "formControlName", "source", "nbInput", "", 3, "placeholder"], ["formControlName", "featureAsEmployee"]],
        template: function BasicInfoFormComponent_Template(rf, ctx) {
          if (rf & 1) {
            const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "form", 7)(1, "div", 8)(2, "div", 9)(3, "div", 10)(4, "div", 11)(5, "div", 12)(6, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(7, "img", 14, 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(9, "button", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function BasicInfoFormComponent_Template_button_click_9_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx.deleteImageUrl());
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(10, "nb-icon", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(11, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(12, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(13, "div", 12)(14, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(15, "i", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(16, "button", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(17, "nb-icon", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(18, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(19, "div", 19)(20, "div", 8)(21, "div", 11)(22, "div", 20)(23, "label", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(25, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(26, "ngx-file-uploader-input", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(27, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("uploadedImageAsset", function BasicInfoFormComponent_Template_ngx_file_uploader_input_uploadedImageAsset_26_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx.updateImageAsset($event));
            })("uploadedImgUrl", function BasicInfoFormComponent_Template_ngx_file_uploader_input_uploadedImgUrl_26_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx.updateImageUrl($event));
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(28, BasicInfoFormComponent_ng_container_28_Template, 4, 3, "ng-container", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(29, "div", 8)(30, "div", 24)(31, "div", 20)(32, "label", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(33);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(34, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(35, "input", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(36, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(37, BasicInfoFormComponent_ng_container_37_Template, 4, 3, "ng-container", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(38, "div", 24)(39, "div", 20)(40, "label", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(41);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(42, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(43, "input", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(44, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(45, "div", 8)(46, "div", 29)(47, "div", 20)(48, "label", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(49);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(50, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(51, "input", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(52, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(53, BasicInfoFormComponent_ng_container_53_Template, 4, 3, "ng-container", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(54, "div", 32)(55, "div", 20)(56, "label", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(57);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(58, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(59, "input", 34, 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(61, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(62, BasicInfoFormComponent_ng_container_62_Template, 2, 1, "ng-container", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(63, "div", 8)(64, "div", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(65, "ngx-password-form-field", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(66, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(67, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(68, BasicInfoFormComponent_ng_container_68_Template, 4, 3, "ng-container", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(69, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(70, BasicInfoFormComponent_ng_container_70_Template, 5, 7, "ng-container", 23)(71, BasicInfoFormComponent_div_71_Template, 10, 8, "div", 36)(72, BasicInfoFormComponent_div_72_Template, 9, 7, "div", 36)(73, BasicInfoFormComponent_div_73_Template, 9, 8, "div", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(74, BasicInfoFormComponent_div_74_Template, 19, 15, "div", 37);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(75, "div", 8)(76, "div", 24)(77, "div", 20)(78, "ga-tags-color-input", 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("selectedTagsEvent", function BasicInfoFormComponent_Template_ga_tags_color_input_selectedTagsEvent_78_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx.selectedTagsHandler($event));
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(79, BasicInfoFormComponent_div_79_Template, 8, 6, "div", 37)(80, BasicInfoFormComponent_ng_container_80_Template, 2, 1, "ng-container", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
          }
          if (rf & 2) {
            let tmp_13_0;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("formGroup", ctx.form);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("hidden", ctx.form.get("imageUrl").invalid);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("hidden", !ctx.showImageMeta);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("src", ctx.form.get("imageUrl").value, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵsanitizeUrl"] */ .B4B);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(11, 40, "FORM.PLACEHOLDERS.REMOVE_IMAGE"))("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(12, 42, "FORM.PLACEHOLDERS.REMOVE_IMAGE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("hidden", ctx.showImageMeta);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(18, 44, "FORM.PLACEHOLDERS.REMOVE_IMAGE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(25, 46, "FORM.LABELS.IMAGE_URL"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(27, 48, "FORM.PLACEHOLDERS.UPLOADER_PLACEHOLDER"))("fileUrl", ctx.form.get("imageUrl").value);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ((tmp_13_0 = ctx.form.get("imageUrl")) == null ? null : tmp_13_0.value) !== null && ctx.FormHelpers.isInvalidControl(ctx.form, "imageUrl"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(34, 50, "FORM.LABELS.FIRST_NAME"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(36, 52, "FORM.PLACEHOLDERS.FIRST_NAME"))("status", ctx.FormHelpers.isInvalidControl(ctx.form, "firstName") ? "danger" : "basic");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.FormHelpers.isInvalidControl(ctx.form, "firstName"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(42, 54, "FORM.LABELS.LAST_NAME"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(44, 56, "FORM.PLACEHOLDERS.LAST_NAME"))("status", ctx.FormHelpers.isInvalidControl(ctx.form, "lastName") ? "danger" : "basic");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(50, 58, "FORM.USERNAME"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(52, 60, "FORM.USERNAME"))("status", ctx.FormHelpers.isInvalidControl(ctx.form, "username") ? "danger" : "basic");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.FormHelpers.isInvalidControl(ctx.form, "username"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(58, 62, "FORM.EMAIL"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(61, 64, "FORM.EMAIL"))("status", ctx.FormHelpers.isInvalidControl(ctx.form, "email") ? "danger" : "basic");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.FormHelpers.isInvalidControl(ctx.form, "email"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(66, 66, "FORM.PASSWORD"))("label", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(67, 68, "FORM.PASSWORD"))("ctrl", ctx.form.controls.password);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.FormHelpers.isInvalidControl(ctx.form, "password"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.isShowRole);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.isEmployee);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.isCandidate);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.isEmployee || ctx.isCandidate);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.isEmployee);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("selectedTags", ctx.form.get("tags").value)("isOrgLevel", true);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.isCandidate);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.isShowRole);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_21__/* .NgIf */ .bT, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* ["ɵNgNoValidate"] */ .qT, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .DefaultValueAccessor */ .me, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .NgControlStatus */ .BC, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .NgControlStatusGroup */ .cb, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .PatternValidator */ .R_, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .FormGroupDirective */ .j4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .FormControlName */ .JD, _nebular_theme__WEBPACK_IMPORTED_MODULE_22__/* .NbButtonComponent */ .YP2, _nebular_theme__WEBPACK_IMPORTED_MODULE_22__/* .NbCheckboxComponent */ .DMy, _nebular_theme__WEBPACK_IMPORTED_MODULE_22__/* .NbDatepickerDirective */ .OA9, _nebular_theme__WEBPACK_IMPORTED_MODULE_22__/* .NbDatepickerComponent */ .k2z, _nebular_theme__WEBPACK_IMPORTED_MODULE_22__/* .NbIconComponent */ .tHu, _nebular_theme__WEBPACK_IMPORTED_MODULE_22__/* .NbInputDirective */ .i6h, _directives_autocomplete_off_directive__WEBPACK_IMPORTED_MODULE_23__/* .AutocompleteOffDirective */ .h, _directives_img_directive__WEBPACK_IMPORTED_MODULE_24__/* .ImgDirective */ .z, _file_uploader_input_file_uploader_input_component__WEBPACK_IMPORTED_MODULE_25__/* .FileUploaderInputComponent */ .e, _tags_tags_color_input_tags_color_input_component__WEBPACK_IMPORTED_MODULE_26__/* .TagsColorInputComponent */ .i, _fields_password_password_component__WEBPACK_IMPORTED_MODULE_27__/* .PasswordFormFieldComponent */ .N, _fields_role_role_component__WEBPACK_IMPORTED_MODULE_28__/* .RoleFormFieldComponent */ .U, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__/* .TranslatePipe */ .D9],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.preview-img[_ngcontent-%COMP%] {\n  padding-left: 14px;\n  padding-right: 16px;\n}\n\n.remove-icon[_ngcontent-%COMP%] {\n  padding-left: 7px;\n  padding-right: 7px;\n  padding-top: 2px;\n}\n.remove-icon[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.notes[_ngcontent-%COMP%] {\n  text-indent: 1em;\n  max-width: 360px;\n}\n.notes[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #eac72d;\n  font-size: 0.75rem;\n  font-weight: 300;\n  line-height: initial;\n}\n\n.image[_ngcontent-%COMP%] {\n  position: relative;\n  height: 98px;\n  width: 130px;\n  border-radius: var(--border-radius) !important;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: rgba(126, 126, 143, 0.1);\n}\n.image[_ngcontent-%COMP%]   .img-rounded[_ngcontent-%COMP%] {\n  object-fit: cover;\n  max-height: 98px;\n  max-width: 130px;\n  border-radius: var(--border-radius) !important;\n}\n.image[_ngcontent-%COMP%]   .trash-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n}"]
      });
    }
  };
  return BasicInfoFormComponent;
})();
BasicInfoFormComponent = BasicInfoFormComponent_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_29__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__/* .UntilDestroy */ .d)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_29__/* .__metadata */ .Sn)("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__/* .TranslateService */ .c$, _angular_common__WEBPACK_IMPORTED_MODULE_14__/* .Location */ .aZ, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .UntypedFormBuilder */ .ze, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_15__/* .AuthService */ .u, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_16__/* .RoleService */ .W, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_17__/* .EmployeesService */ .r, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_18__/* .CandidatesService */ .S, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_19__/* .Store */ .il, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_20__/* .ErrorHandlingService */ .X])], BasicInfoFormComponent);


/***/ }),

/***/ 24737:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: () => (/* binding */ patterns)
/* harmony export */ });
const patterns = {
  websiteUrl: /^((?:https?:\/\/)[^./]+(?:\.[^./]+)+(?:\/.*)?)$/,
  imageUrl: /^(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg))/,
  email: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
  host: /^(([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]).)*([A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9-]*[A-Za-z0-9])$/,
  passwordNoSpaceEdges: /^(?!\s).*[^\s]$/
};

/***/ }),

/***/ 27038:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   W: () => (/* binding */ RoleService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(80189);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(64913);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26024);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26860);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45715);





let RoleService = /*#__PURE__*/(() => {
  class RoleService {
    constructor(http) {
      this.http = http;
    }
    getRoleByOptions(options) {
      return this.http.get(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_0__/* .API_PREFIX */ .m4}/roles/options`, {
        params: (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .toParams */ .SV)({
          ...options
        })
      });
    }
    getAll() {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__/* .firstValueFrom */ ._)(this.http.get(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_0__/* .API_PREFIX */ .m4}/roles`));
    }
    create(role) {
      return this.http.post(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_0__/* .API_PREFIX */ .m4}/roles`, {
        ...role
      });
    }
    delete(role) {
      return this.http.delete(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_0__/* .API_PREFIX */ .m4}/roles/${role.id}`);
    }
    getRoleById(roleId) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__/* .firstValueFrom */ ._)(this.http.get(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_0__/* .API_PREFIX */ .m4}/roles/${roleId}`));
    }
    static {
      this.ɵfac = function RoleService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || RoleService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵinject"] */ .KVO(_angular_common_http__WEBPACK_IMPORTED_MODULE_4__/* .HttpClient */ .Qq));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdefineInjectable"] */ .jDH({
        token: RoleService,
        factory: RoleService.ɵfac
      });
    }
  }
  return RoleService;
})();

/***/ }),

/***/ 32629:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ CandidatesService)
/* harmony export */ });
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(79180);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(80189);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26024);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(64913);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(26860);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(45715);







let CandidatesService = /*#__PURE__*/(() => {
  class CandidatesService {
    constructor(http) {
      this.http = http;
    }
    getAll(relations = [], where) {
      return this.http.get(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_0__/* .API_PREFIX */ .m4}/candidate`, {
        params: (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .toParams */ .SV)({
          where,
          relations
        })
      });
    }
    getCandidateById(id, relations = [], where = {}) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__/* .firstValueFrom */ ._)(this.http.get(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_0__/* .API_PREFIX */ .m4}/candidate/${id}`, {
        params: (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .toParams */ .SV)({
          where,
          relations
        })
      }));
    }
    delete(id) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__/* .firstValueFrom */ ._)(this.http.delete(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_0__/* .API_PREFIX */ .m4}/candidate/${id}`));
    }
    update(id, body) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__/* .firstValueFrom */ ._)(this.http.put(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_0__/* .API_PREFIX */ .m4}/candidate/${id}`, body));
    }
    create(body) {
      return this.http.post(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_0__/* .API_PREFIX */ .m4}/candidate`, body);
    }
    createBulk(body) {
      return this.http.post(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_0__/* .API_PREFIX */ .m4}/candidate/bulk`, body);
    }
    /**
     * Set candidate as archived
     *
     * @param id
     * @param body
     * @returns
     */
    setCandidateAsArchived(id, input) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__/* .firstValueFrom */ ._)(this.http.put(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_0__/* .API_PREFIX */ .m4}/candidate/${id}`, {
        isArchived: true,
        ...input
      }));
    }
    /**
     * Set candidate hired as employee
     *
     * @param id
     * @returns
     */
    setCandidateAsHired(id) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__/* .firstValueFrom */ ._)(this.http.put(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_0__/* .API_PREFIX */ .m4}/candidate/${id}/hired`, {}));
    }
    /**
     * Set candidate as rejected application
     *
     * @param id
     * @returns
     */
    setCandidateAsRejected(id) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__/* .firstValueFrom */ ._)(this.http.put(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_0__/* .API_PREFIX */ .m4}/candidate/${id}/rejected`, {}));
    }
    /**
     * Set candidate as applied application
     *
     * @param id
     * @returns
     */
    setCandidateAsApplied(id) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__/* .firstValueFrom */ ._)(this.http.put(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_0__/* .API_PREFIX */ .m4}/candidate/${id}`, {
        status: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__/* .CandidateStatusEnum */ .P.APPLIED
      }));
    }
    static {
      this.ɵfac = function CandidatesService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || CandidatesService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵinject"] */ .KVO(_angular_common_http__WEBPACK_IMPORTED_MODULE_5__/* .HttpClient */ .Qq));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdefineInjectable"] */ .jDH({
        token: CandidatesService,
        factory: CandidatesService.ɵfac
      });
    }
  }
  return CandidatesService;
})();

/***/ }),

/***/ 33288:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: () => (/* binding */ RoleFormFieldModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14572);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10936);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19223);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56383);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);






let RoleFormFieldModule = /*#__PURE__*/(() => {
  class RoleFormFieldModule {
    static {
      this.ɵfac = function RoleFormFieldModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || RoleFormFieldModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .$C({
        type: RoleFormFieldModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .CommonModule */ .MD, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .FormsModule */ .YN, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .ReactiveFormsModule */ .X1, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbSelectModule */ .VcP, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__/* .TranslateModule */ .h.forChild()]
      });
    }
  }
  return RoleFormFieldModule;
})();

/***/ }),

/***/ 33589:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   U: () => (/* binding */ RoleFormFieldComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(73014);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(55598);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10936);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(90999);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52738);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(79708);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39855);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(41598);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(71924);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(27038);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(14572);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(56383);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(19223);















function RoleFormFieldComponent_nb_option_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-option", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const role_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("value", role_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", role_r1.name, " ");
  }
}
let RoleFormFieldComponent = /*#__PURE__*/(() => {
  let RoleFormFieldComponent = class RoleFormFieldComponent {
    get excludes() {
      return this._excludes;
    }
    set excludes(value) {
      this._excludes = value;
    }
    get id() {
      return this._id;
    }
    set id(value) {
      this._id = value;
    }
    get size() {
      return this._size;
    }
    set size(value) {
      this._size = value;
    }
    get placeholder() {
      return this._placeholder;
    }
    set placeholder(value) {
      this._placeholder = value;
    }
    get label() {
      return this._label;
    }
    set label(value) {
      this._label = value;
    }
    get ctrl() {
      return this._ctrl;
    }
    set ctrl(value) {
      this._ctrl = value;
    }
    set role(value) {
      this._role = value;
      this.onChange(value);
      this.onTouched(value);
    }
    get role() {
      return this._role;
    }
    get roleId() {
      return this._roleId;
    }
    set roleId(value) {
      this._roleId = value;
    }
    constructor(store, rolesService) {
      this.store = store;
      this.rolesService = rolesService;
      this.roles = [];
      this.roles$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)([]);
      this.onChange = () => {};
      this.onTouched = () => {};
      /**
       * Getter & Setter for dynamic remove role from options
       */
      this._excludes = [];
      /*
       * Getter & Setter for dynamic field size
       */
      this._size = 'medium';
      /*
       * Getter & Setter accessor for form control
       */
      this._ctrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .FormControl */ .MJ();
      this.selectedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .bkB();
    }
    ngOnInit() {
      this.store.user$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__/* .filter */ .p)(user => !!user), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .tap */ .M)(() => this.renderRoles()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .untilDestroyed */ .s)(this)).subscribe();
    }
    /**
     * GET all tenant roles
     * Excludes role if needed
     */
    renderRoles() {
      var _this = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(function* () {
        _this.roles$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)((yield _this.rolesService.getAll()).items).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__/* .map */ .T)(roles => roles.filter(role => !_this.excludes.includes(role.name))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .tap */ .M)(roles => _this.roles = roles));
      })();
    }
    /**
     * Write Value
     * @param value
     */
    writeValue(value) {
      if (value) {
        this.roleId = value.id;
      }
    }
    registerOnChange(fn) {
      this.onChange = fn;
    }
    registerOnTouched(fn) {
      this.onTouched = fn;
    }
    /**
     * On Selection Change
     * @param role
     */
    onSelectionChange(roleId) {
      if (roleId) {
        this.role = this.getRoleById(roleId);
        if (this.role) {
          this.selectedChange.emit(this.role);
        }
      }
    }
    /**
     * GET role by ID
     *
     * @param value
     * @returns
     */
    getRoleById(value) {
      return this.roles.find(role => value === role.id);
    }
    ngOnDestroy() {}
    static {
      this.ɵfac = function RoleFormFieldComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || RoleFormFieldComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_8__/* .Store */ .il), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_9__/* .RoleService */ .W));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: RoleFormFieldComponent,
        selectors: [["ngx-role-form-field"]],
        inputs: {
          excludes: "excludes",
          id: "id",
          size: "size",
          placeholder: "placeholder",
          label: "label",
          ctrl: "ctrl"
        },
        outputs: {
          selectedChange: "selectedChange"
        },
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵProvidersFeature"] */ .Jv_([{
          provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .NG_VALUE_ACCESSOR */ .kq,
          useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__/* .forwardRef */ .Rfq)(() => RoleFormFieldComponent),
          multi: true
        }])],
        decls: 8,
        vars: 15,
        consts: [[1, "form-group"], [1, "label"], ["fullWidth", "", 3, "selectedChange", "ngModelChange", "placeholder", "size", "formControl", "ngModel", "status"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]],
        template: function RoleFormFieldComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 0)(1, "label", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(3, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(4, "nb-select", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(5, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("selectedChange", function RoleFormFieldComponent_Template_nb_select_selectedChange_4_listener($event) {
              return ctx.onSelectionChange($event);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayListener"] */ .mxI("ngModelChange", function RoleFormFieldComponent_Template_nb_select_ngModelChange_4_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayBindingSet"] */ .DH7(ctx.roleId, $event) || (ctx.roleId = $event);
              return $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(6, RoleFormFieldComponent_nb_option_6_Template, 2, 2, "nb-option", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(7, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵattribute"] */ .BMQ("for", ctx.id);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(3, 9, ctx.label || "FORM.LABELS.ROLE"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(5, 11, ctx.placeholder || "FORM.PLACEHOLDERS.ROLE"))("size", ctx.size)("formControl", ctx.ctrl);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayProperty"] */ .R50("ngModel", ctx.roleId);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("status", ctx.ctrl.invalid && (ctx.ctrl.touched || ctx.ctrl.dirty) ? "danger" : "basic");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵattribute"] */ .BMQ("id", ctx.id);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(7, 13, ctx.roles$));
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__/* .NgForOf */ .Sq, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .NgControlStatus */ .BC, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .FormControlDirective */ .l_, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbSelectComponent */ .S81, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbOptionComponent */ .ZJ2, _angular_common__WEBPACK_IMPORTED_MODULE_10__/* .AsyncPipe */ .Jj, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__/* .TranslatePipe */ .D9],
        encapsulation: 2
      });
    }
  };
  RoleFormFieldComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .UntilDestroy */ .d)({
    checkProperties: true
  }), (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__metadata */ .Sn)("design:paramtypes", [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_8__/* .Store */ .il, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_9__/* .RoleService */ .W])], RoleFormFieldComponent);
  return RoleFormFieldComponent;
})();


/***/ }),

/***/ 33755:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ ImageUploaderBaseComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(73014);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(55598);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(41598);
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(29087);
/* harmony import */ var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4644);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52738);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39855);
/* harmony import */ var _gauzy_ui_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(48840);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26024);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(64913);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(71924);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(26860);











let ImageUploaderBaseComponent = /*#__PURE__*/(() => {
  let ImageUploaderBaseComponent = class ImageUploaderBaseComponent {
    get folder() {
      return this._folder;
    }
    set folder(value) {
      this._folder = value;
      this.setUploaderConfigurationOptions();
    }
    constructor(store) {
      this.store = store;
      this.subject$ = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_0__/* .Subject */ .B();
      /*
       * Getter & Setter for dynamic image upload folder
       */
      this._folder = 'profile_pictures';
      this.onInit();
    }
    onInit() {
      this.store.selectedOrganization$.pipe((0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .distinctUntilChange */ .nI)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .filter */ .p)(organization => !!organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .tap */ .M)(organization => this.organization = organization), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .untilDestroyed */ .s)(this)).subscribe();
      this.store.user$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .filter */ .p)(user => !!user), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .tap */ .M)(user => this.user = user), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .tap */ .M)(() => this.setUploaderConfigurationOptions()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .untilDestroyed */ .s)(this)).subscribe();
    }
    /**
     * Set file uploader configuration options
     */
    setUploaderConfigurationOptions() {
      if (!this.user) {
        return;
      }
      const {
        token
      } = this.store;
      const {
        tenantId
      } = this.user;
      const headers = [];
      headers.push({
        name: 'Authorization',
        value: `Bearer ${token}`
      });
      headers.push({
        name: 'Tenant-Id',
        value: tenantId
      });
      const uploaderOptions = {
        url: _gauzy_ui_config__WEBPACK_IMPORTED_MODULE_5__/* .environment */ .c.API_BASE_URL + `${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_6__/* .API_PREFIX */ .m4}/image-assets/upload/${this.folder}`,
        method: 'POST',
        // XHR request method
        autoUpload: true,
        // Upload files automatically upon addition to upload queue
        isHTML5: true,
        // Use xhrTransport in favor of iframeTransport
        removeAfterUpload: true,
        // Calculate progress independently for each uploaded file
        headers: headers // XHR request headers
      };
      this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_7__/* .FileUploader */ .l0(uploaderOptions);
      // Adding additional form data
      this.uploader.onBuildItemForm = (fileItem, form) => {
        if (!!this.store.user.tenantId) {
          form.append('tenantId', tenantId);
        }
        if (!!this.organization) {
          form.append('organizationId', this.organization.id);
        }
      };
    }
    /**
     * Get image metadata using by Image URL
     *
     * @param url
     * @returns
     */
    getImageMetadata(url) {
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A)(function* () {
        try {
          return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => resolve(img);
            img.onerror = error => reject(false);
            img.src = url;
          });
        } catch (error) {
          console.log('Error while retrieving image metadata', error);
        }
      })();
    }
    static {
      this.ɵfac = function ImageUploaderBaseComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || ImageUploaderBaseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_10__/* .Store */ .il));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵdefineComponent"] */ .VBU({
        type: ImageUploaderBaseComponent,
        selectors: [["ng-component"]],
        inputs: {
          folder: "folder"
        },
        standalone: false,
        decls: 0,
        vars: 0,
        template: function ImageUploaderBaseComponent_Template(rf, ctx) {},
        encapsulation: 2
      });
    }
  };
  ImageUploaderBaseComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_11__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .UntilDestroy */ .d)({
    checkProperties: true
  }), (0,tslib__WEBPACK_IMPORTED_MODULE_11__/* .__metadata */ .Sn)("design:paramtypes", [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_10__/* .Store */ .il])], ImageUploaderBaseComponent);
  return ImageUploaderBaseComponent;
})();


/***/ }),

/***/ 38434:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G: () => (/* binding */ PasswordFormFieldModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14572);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10936);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19223);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56383);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);






let PasswordFormFieldModule = /*#__PURE__*/(() => {
  class PasswordFormFieldModule {
    static {
      this.ɵfac = function PasswordFormFieldModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || PasswordFormFieldModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .$C({
        type: PasswordFormFieldModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .CommonModule */ .MD, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .FormsModule */ .YN, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .ReactiveFormsModule */ .X1, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbButtonModule */ .P5N, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbFormFieldModule */ .NeG, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbIconModule */ .clu, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbInputModule */ .pty, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__/* .TranslateModule */ .h.forChild()]
      });
    }
  }
  return PasswordFormFieldModule;
})();

/***/ }),

/***/ 48901:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ asapScheduler)
/* harmony export */ });
/* unused harmony export asap */
/* harmony import */ var _AsapAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76439);
/* harmony import */ var _AsapScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14508);


const asapScheduler = /*#__PURE__*/new _AsapScheduler__WEBPACK_IMPORTED_MODULE_0__/* .AsapScheduler */ .b(_AsapAction__WEBPACK_IMPORTED_MODULE_1__/* .AsapAction */ .M);
const asap = (/* unused pure expression or super */ null && (asapScheduler));
//# sourceMappingURL=asap.js.map

/***/ }),

/***/ 53437:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: () => (/* binding */ FileUploaderInputComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73014);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26860);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10936);
/* harmony import */ var _image_uploader_image_uploader_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33755);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(71924);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(56383);
/* harmony import */ var _directives_debounce_click_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(20345);
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(29087);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(14572);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(19223);













let FileUploaderInputComponent = /*#__PURE__*/(() => {
  class FileUploaderInputComponent extends _image_uploader_image_uploader_base_component__WEBPACK_IMPORTED_MODULE_0__/* .ImageUploaderBaseComponent */ .a {
    get placeholder() {
      return this._placeholder;
    }
    set placeholder(value) {
      this._placeholder = value;
    }
    get locale() {
      return this._locale;
    }
    set locale(value) {
      this._locale = value;
    }
    get fileUrl() {
      return this._fileUrl;
    }
    set fileUrl(fileUrl) {
      this._fileUrl = fileUrl;
      this.inputControl.setValue(fileUrl);
      this.inputControl.updateValueAndValidity();
    }
    constructor(store) {
      super(store);
      this.store = store;
      this.inputControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .FormControl */ .MJ();
      this.loading = false;
      this.uploadedImageAsset = new _angular_core__WEBPACK_IMPORTED_MODULE_2__/* .EventEmitter */ .bkB();
      this.uploadedImgUrl = new _angular_core__WEBPACK_IMPORTED_MODULE_2__/* .EventEmitter */ .bkB();
      this.uploadedImgData = new _angular_core__WEBPACK_IMPORTED_MODULE_2__/* .EventEmitter */ .bkB();
    }
    ngOnInit() {}
    ngAfterViewInit() {
      this.uploader.onAfterAddingFile = file => {
        file.withCredentials = false;
      };
      this.uploader.onSuccessItem = (item, response, status) => {
        try {
          if (response) {
            const image = JSON.parse(response);
            this.uploadedImageAsset.emit(image);
            this.uploadedImgData.emit(image);
            this.inputControl.setValue(image.fullUrl);
            this.inputControl.updateValueAndValidity();
          }
        } catch (error) {
          console.log('Error while uploaded image url', error);
        }
      };
      this.uploader.onErrorItem = (item, response, status) => {
        try {
          if (response) {
            const error = JSON.parse(response);
            console.log(error);
          }
        } catch (error) {
          console.log('Error while uploaded image url error', error);
        }
      };
    }
    /**
     * When input changed file URL
     *
     * @param event
     */
    inputUrlChanged() {
      var _this = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(function* () {
        const fileUrl = _this.inputControl.value;
        if (fileUrl) {
          try {
            yield _this._setupImage(fileUrl);
            _this.uploadedImgUrl.emit(fileUrl);
          } catch (error) {
            console.log('Error while retrieving image from URL', error);
          }
        }
      })();
    }
    /**
     * Image asset upload handler
     */
    imageUploadHandler() {
      if (this.uploader.queue.length > 0) {
        this.uploader.queue[this.uploader.queue.length - 1].upload();
      }
    }
    /**
     * Get image metadata and setup image object
     *
     * @param imgUrl
     * @returns
     */
    _setupImage(imgUrl) {
      var _this2 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(function* () {
        try {
          const img = yield _this2.getImageMetadata(imgUrl);
          const width = img['width'];
          const height = img['height'];
          const orientation = width !== height ? width > height ? 2 : 1 : 0;
          const locale = _this2.locale;
          const url = imgUrl;
          return {
            locale,
            url,
            width,
            height,
            orientation
          };
        } catch (error) {
          return error;
        }
      })();
    }
    static {
      this.ɵfac = function FileUploaderInputComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || FileUploaderInputComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_4__/* .Store */ .il));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineComponent"] */ .VBU({
        type: FileUploaderInputComponent,
        selectors: [["ngx-file-uploader-input"]],
        inputs: {
          placeholder: "placeholder",
          locale: "locale",
          fileUrl: "fileUrl"
        },
        outputs: {
          uploadedImageAsset: "uploadedImageAsset",
          uploadedImgUrl: "uploadedImgUrl",
          uploadedImgData: "uploadedImgData"
        },
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
        decls: 10,
        vars: 9,
        consts: [["fileInput", ""], ["nbSpinnerStatus", "primary", 1, "file-uploader-container"], ["type", "text", 1, "form-control", 3, "change", "placeholder", "formControl"], ["type", "file", "id", "fileInput", "ng2FileSelect", "", 3, "change", "hidden", "uploader"], ["nbButton", "", "status", "primary", "outline", "", "size", "tiny", "debounceClick", "", 3, "throttledClick"], [1, "far", "fa-folder", "mr-1"], [1, "text"]],
        template: function FileUploaderInputComponent_Template(rf, ctx) {
          if (rf & 1) {
            const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵgetCurrentView"] */ .RV6();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(0, "div", 1)(1, "input", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .bIt("change", function FileUploaderInputComponent_Template_input_change_1_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .Njj(ctx.inputUrlChanged());
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(2, "input", 3, 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .bIt("change", function FileUploaderInputComponent_Template_input_change_2_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .Njj(ctx.imageUploadHandler());
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(4, "button", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .bIt("throttledClick", function FileUploaderInputComponent_Template_button_throttledClick_4_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              const fileInput_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵreference"] */ .sdS(3);
              return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .Njj(fileInput_r2.click());
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ .nrm(5, "i", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(6, "span", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(8, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(9, "titlecase");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("placeholder", ctx.placeholder)("formControl", ctx.inputControl);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("hidden", true)("uploader", ctx.uploader);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(9, 7, _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(8, 5, "BROWSE")), " ");
          }
        },
        dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .DefaultValueAccessor */ .me, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .NgControlStatus */ .BC, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .FormControlDirective */ .l_, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbButtonComponent */ .YP2, _directives_debounce_click_directive__WEBPACK_IMPORTED_MODULE_6__/* .DebounceClickDirective */ .J, ng2_file_upload__WEBPACK_IMPORTED_MODULE_7__/* .FileSelectDirective */ .UJ, _angular_common__WEBPACK_IMPORTED_MODULE_8__/* .TitleCasePipe */ .PV, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__/* .TranslatePipe */ .D9],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.file-uploader-container[_ngcontent-%COMP%] {\n  padding: 0;\n  position: relative;\n  border-radius: nb-theme(border-radius);\n}\n.file-uploader-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 8px;\n  top: calc(50% - 12px);\n  height: 24px;\n  border-width: 2px;\n  border-color: nb-theme(color-primary-transparent-default);\n}\n.file-uploader-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding-right: 6.25rem;\n  border-radius: nb-theme(border-radius);\n}\n.file-uploader-container[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 16px;\n  letter-spacing: -0.009em;\n}"]
      });
    }
  }
  return FileUploaderInputComponent;
})();

/***/ }),

/***/ 53635:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G: () => (/* binding */ Immediate)
/* harmony export */ });
/* unused harmony export TestTools */
let nextHandle = 1;
let resolved;
const activeHandles = {};
function findAndClearHandle(handle) {
  if (handle in activeHandles) {
    delete activeHandles[handle];
    return true;
  }
  return false;
}
const Immediate = {
  setImmediate(cb) {
    const handle = nextHandle++;
    activeHandles[handle] = true;
    if (!resolved) {
      resolved = Promise.resolve();
    }
    resolved.then(() => findAndClearHandle(handle) && cb());
    return handle;
  },
  clearImmediate(handle) {
    findAndClearHandle(handle);
  }
};
const TestTools = {
  pending() {
    return Object.keys(activeHandles).length;
  }
};
//# sourceMappingURL=Immediate.js.map

/***/ }),

/***/ 60911:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   i: () => (/* binding */ UrlPatternValidator)
/* harmony export */ });
/* harmony import */ var _regex_patterns_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24737);

class UrlPatternValidator {
  /**
   * Validate website URLs based on the provided pattern.
   * @param field The name of the website URL form control.
   * @returns A validator function to validate the website URL field.
   */
  static websiteUrlValidator(field) {
    return formGroup => {
      const control = formGroup.get(field);
      return UrlPatternValidator.urlAbstractValidator(control, _regex_patterns_const__WEBPACK_IMPORTED_MODULE_0__/* .patterns */ .q.websiteUrl);
    };
  }
  /**
   * Validate image URLs based on the provided pattern.
   * @param field The name of the image URL form control.
   * @returns A validator function to validate the image URL field.
   */
  static imageUrlValidator(field) {
    return formGroup => {
      const control = formGroup.get(field);
      return UrlPatternValidator.urlAbstractValidator(control, _regex_patterns_const__WEBPACK_IMPORTED_MODULE_0__/* .patterns */ .q.imageUrl);
    };
  }
  /**
   * Validate URLs based on the provided pattern.
   * @param control The form control to validate.
   * @param pattern The regular expression pattern to match against.
   * @returns An object containing validation errors, or null if validation passes.
   */
  static urlAbstractValidator(control, pattern) {
    if (control.value && !UrlPatternValidator.isValidUrl(control.value, pattern)) {
      control.setErrors({
        invalid: true
      });
      return {
        urlValid: false
      };
    }
    control.setErrors(null);
    return null;
  }
  /**
   * Check if the URL is valid based on the provided RegExp pattern.
   * @param urlString The URL to validate.
   * @param regExp The RegExp pattern to match against.
   * @returns True if the URL is valid, otherwise false.
   */
  static isValidUrl(urlString, regExp) {
    try {
      return new RegExp(regExp).test(urlString);
    } catch (error) {
      return false;
    }
  }
}

/***/ }),

/***/ 68822:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   d: () => (/* binding */ immediateProvider)
/* harmony export */ });
/* harmony import */ var _util_Immediate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53635);

const {
  setImmediate,
  clearImmediate
} = _util_Immediate__WEBPACK_IMPORTED_MODULE_0__/* .Immediate */ .G;
const immediateProvider = {
  setImmediate(...args) {
    const {
      delegate
    } = immediateProvider;
    return ((delegate === null || delegate === void 0 ? void 0 : delegate.setImmediate) || setImmediate)(...args);
  },
  clearImmediate(handle) {
    const {
      delegate
    } = immediateProvider;
    return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearImmediate) || clearImmediate)(handle);
  },
  delegate: undefined
};
//# sourceMappingURL=immediateProvider.js.map

/***/ }),

/***/ 75453:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ CountdownConfirmationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56383);
/* harmony import */ var ngx_countdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(86653);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19223);





let CountdownConfirmationComponent = /*#__PURE__*/(() => {
  class CountdownConfirmationComponent {
    constructor(dialogRef) {
      this.dialogRef = dialogRef;
      this.countDownConfig = {
        leftTime: 5
      };
    }
    /**
     * Handles an action event triggered by the countdown.
     *
     * @param event - The CountdownEvent object containing details about the action.
     *                 Example: { action: 'done', left: 0 }
     * - If the action is 'done', this method closes the dialog and emits a 'continue' signal.
     */
    handleActionEvent(event) {
      if (event.action === 'done') {
        this.dialogRef.close('continue');
      }
    }
    /**
     * Closes the current dialog.
     *
     * This method is typically used to dismiss the dialog without performing
     * any additional actions or sending a signal.
     */
    close() {
      this.dialogRef.close();
    }
    /**
     * Continues the current flow of execution.
     *
     * This method closes the dialog and sends a 'continue' signal to indicate
     * that the user has chosen to proceed with the next step.
     */
    continue() {
      this.dialogRef.close('continue');
    }
    static {
      this.ɵfac = function CountdownConfirmationComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || CountdownConfirmationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbDialogRef */ .ybQ));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: CountdownConfirmationComponent,
        selectors: [["ga-countdown-confirmation"]],
        standalone: false,
        decls: 24,
        vars: 20,
        consts: [["cd", ""], [1, "center"], [1, "mt-2"], [3, "event", "config"], ["status", "danger", "nbButton", "", 1, "mr-3", 3, "click"], ["status", "info", "nbButton", "", 3, "click"]],
        template: function CountdownConfirmationComponent_Template(rf, ctx) {
          if (rf & 1) {
            const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-card", 1)(1, "nb-card-header")(2, "h6");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(4, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(5, "nb-card-body")(6, "span")(7, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(10, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(11, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(12, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(14, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(15, "countdown", 3, 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("event", function CountdownConfirmationComponent_Template_countdown_event_15_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx.handleActionEvent($event));
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(17, "nb-card-footer")(18, "button", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function CountdownConfirmationComponent_Template_button_click_18_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx.continue());
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(20, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(21, "button", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function CountdownConfirmationComponent_Template_button_click_21_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx.close());
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(23, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(4, 8, "FORM.CONFIRM"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(ctx.recordType);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate2"] */ .Lme(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(10, 10, "FORM.COUNTDOWN_CONFIRMATION.WAS"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(11, 12, ctx.isEnabled ? "FORM.COUNTDOWN_CONFIRMATION.ENABLED" : "FORM.COUNTDOWN_CONFIRMATION.DISABLED") + "?", " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(14, 14, "FORM.COUNTDOWN_CONFIRMATION.WAIT_UNTIL_RELOAD"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("config", ctx.countDownConfig);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(20, 16, "BUTTONS.CONTINUE"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(23, 18, "BUTTONS.CANCEL"), " ");
          }
        },
        dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbButtonComponent */ .YP2, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbCardComponent */ .SrT, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbCardBodyComponent */ .KH5, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbCardFooterComponent */ .VDm, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbCardHeaderComponent */ .zJv, ngx_countdown__WEBPACK_IMPORTED_MODULE_2__/* .CountdownComponent */ .Hc, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__/* .TranslatePipe */ .D9],
        styles: ["nb-card-body[_ngcontent-%COMP%] {\n\t\t\t\ttext-align: center;\n\t\t\t}\n\n\t\t\t.center[_ngcontent-%COMP%] {\n\t\t\t\talign-items: center;\n\t\t\t\twidth: 350px;\n\t\t\t}"]
      });
    }
  }
  return CountdownConfirmationComponent;
})();

/***/ }),

/***/ 76439:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ AsapAction)
/* harmony export */ });
/* harmony import */ var _AsyncAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95272);
/* harmony import */ var _immediateProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68822);


class AsapAction extends _AsyncAction__WEBPACK_IMPORTED_MODULE_0__/* .AsyncAction */ .R {
  constructor(scheduler, work) {
    super(scheduler, work);
    this.scheduler = scheduler;
    this.work = work;
  }
  requestAsyncId(scheduler, id, delay = 0) {
    if (delay !== null && delay > 0) {
      return super.requestAsyncId(scheduler, id, delay);
    }
    scheduler.actions.push(this);
    return scheduler._scheduled || (scheduler._scheduled = _immediateProvider__WEBPACK_IMPORTED_MODULE_1__/* .immediateProvider */ .d.setImmediate(scheduler.flush.bind(scheduler, undefined)));
  }
  recycleAsyncId(scheduler, id, delay = 0) {
    var _a;
    if (delay != null ? delay > 0 : this.delay > 0) {
      return super.recycleAsyncId(scheduler, id, delay);
    }
    const {
      actions
    } = scheduler;
    if (id != null && ((_a = actions[actions.length - 1]) === null || _a === void 0 ? void 0 : _a.id) !== id) {
      _immediateProvider__WEBPACK_IMPORTED_MODULE_1__/* .immediateProvider */ .d.clearImmediate(id);
      if (scheduler._scheduled === id) {
        scheduler._scheduled = undefined;
      }
    }
    return undefined;
  }
}
//# sourceMappingURL=AsapAction.js.map

/***/ }),

/***/ 78115:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   x: () => (/* binding */ ArchiveConfirmationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56383);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19223);




let ArchiveConfirmationComponent = /*#__PURE__*/(() => {
  class ArchiveConfirmationComponent {
    constructor(dialogRef) {
      this.dialogRef = dialogRef;
    }
    close() {
      this.dialogRef.close();
    }
    archive() {
      this.dialogRef.close('ok');
    }
    static {
      this.ɵfac = function ArchiveConfirmationComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || ArchiveConfirmationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbDialogRef */ .ybQ));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: ArchiveConfirmationComponent,
        selectors: [["ga-archive-confirmation"]],
        standalone: false,
        decls: 19,
        vars: 16,
        consts: [[1, "d-flex", "flex-column"], [1, "cancel"], [1, "fas", "fa-times", 3, "click"], [1, "title"], ["status", "basic", "outline", "", "nbButton", "", 3, "click"], ["status", "danger", "nbButton", "", 1, "mr-3", "ml-3", 3, "click"]],
        template: function ArchiveConfirmationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-card")(1, "nb-card-header", 0)(2, "span", 1)(3, "i", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function ArchiveConfirmationComponent_Template_i_click_3_listener() {
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
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(12, "nb-card-footer")(13, "button", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function ArchiveConfirmationComponent_Template_button_click_13_listener() {
              return ctx.close();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(15, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(16, "button", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function ArchiveConfirmationComponent_Template_button_click_16_listener() {
              return ctx.archive();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(18, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(6, 6, "FORM.CONFIRM"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate3"] */ .E5c(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(10, 8, "FORM.ARCHIVE_CONFIRMATION.SURE"), " ", ctx.recordType, " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(11, 10, "FORM.DELETE_CONFIRMATION.RECORD"), "? ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(15, 12, "BUTTONS.CANCEL"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(18, 14, "BUTTONS.OK"), " ");
          }
        },
        dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbButtonComponent */ .YP2, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbCardComponent */ .SrT, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbCardBodyComponent */ .KH5, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbCardFooterComponent */ .VDm, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbCardHeaderComponent */ .zJv, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__/* .TranslatePipe */ .D9],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   i[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n}\n[dir=ltr]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n[dir=rtl]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--gauzy-text-color-1);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(245, 109, 88, 0.3);\n  border-width: 2px;\n  color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(245, 109, 88, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 16px;\n  letter-spacing: 0em;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(126, 126, 143, 0.3);\n  border-width: 2px;\n  color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(126, 126, 143, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(37, 184, 105, 0.3);\n  border-width: 2px;\n  color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(37, 184, 105, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[disabled][_ngcontent-%COMP%], \n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic.btn-disabled[_ngcontent-%COMP%] {\n  background-color: var(--button-outline-basic-disabled-background-color);\n  border-color: var(--button-outline-basic-disabled-border-color);\n  color: var(--button-outline-basic-disabled-text-color);\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].primary.appearance-filled.status-primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  border: unset;\n  background-color: var(--color-primary-transparent-default);\n  box-shadow: var(--gauzy-shadow) 0, 0, 0, 0.15;\n}\n[dir=ltr]   [_nghost-%COMP%]     input, \n[dir=ltr]   [_nghost-%COMP%]     textarea {\n  text-align: start;\n}\n[dir=rtl]   [_nghost-%COMP%]     input, \n[dir=rtl]   [_nghost-%COMP%]     textarea {\n  text-align: end;\n}\n[_nghost-%COMP%]     input, \n[_nghost-%COMP%]     nb-select.appearance-outline.status-basic .select-button, \n[_nghost-%COMP%]     .ng-select .ng-select-container {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n  height: 42px !important;\n}\n[_nghost-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder, \n[_nghost-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {\n  top: unset !important;\n}\n[_nghost-%COMP%]     label, \n[_nghost-%COMP%]     .label {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  color: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]     textarea {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n}\n[_nghost-%COMP%]     .ng-select .ng-select-container input, \n[_nghost-%COMP%]     nb-tag-list input {\n  background-color: unset !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n}\n\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: nb-theme(gauzy-card-1);\n}\n[_nghost-%COMP%]   .center[_ngcontent-%COMP%] {\n  width: 300px;\n}"]
      });
    }
  }
  return ArchiveConfirmationComponent;
})();

/***/ }),

/***/ 79180:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P: () => (/* binding */ CandidateStatusEnum)
/* harmony export */ });
var CandidateStatusEnum = /*#__PURE__*/function (CandidateStatusEnum) {
  CandidateStatusEnum["APPLIED"] = "APPLIED";
  CandidateStatusEnum["REJECTED"] = "REJECTED";
  CandidateStatusEnum["HIRED"] = "HIRED";
  return CandidateStatusEnum;
}(CandidateStatusEnum || {});

/***/ }),

/***/ 82202:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ UserFormsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(14572);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(10936);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(56383);
/* harmony import */ var ngx_countdown__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(86653);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(55567);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(19223);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(36042);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(27038);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(12272);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(63545);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(32629);
/* harmony import */ var _file_uploader_input_file_uploader_input_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(46880);
/* harmony import */ var _tags_tags_color_input_tags_color_input_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(61444);
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(38834);
/* harmony import */ var _fields__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(38434);
/* harmony import */ var _fields__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(33288);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24250);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(55101);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18857);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(78115);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(83993);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(75453);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(26860);














const COMPONENTS = [___WEBPACK_IMPORTED_MODULE_0__/* .BasicInfoFormComponent */ .S, ___WEBPACK_IMPORTED_MODULE_1__/* .DeleteConfirmationComponent */ .u, ___WEBPACK_IMPORTED_MODULE_2__/* .ActionConfirmationComponent */ .x, ___WEBPACK_IMPORTED_MODULE_3__/* .ArchiveConfirmationComponent */ .x, ___WEBPACK_IMPORTED_MODULE_4__/* .CandidateActionConfirmationComponent */ .K, ___WEBPACK_IMPORTED_MODULE_5__/* .CountdownConfirmationComponent */ .E];
let UserFormsModule = /*#__PURE__*/(() => {
  class UserFormsModule {
    static {
      this.ɵfac = function UserFormsModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || UserFormsModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵdefineNgModule"] */ .$C({
        type: UserFormsModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵdefineInjector"] */ .G2t({
        providers: [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_7__/* .AuthService */ .u, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_8__/* .RoleService */ .W, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_9__/* .IncomeService */ .H, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_10__/* .TagsService */ .D, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_11__/* .CandidatesService */ .S],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__/* .CommonModule */ .MD, _angular_forms__WEBPACK_IMPORTED_MODULE_13__/* .FormsModule */ .YN, _angular_forms__WEBPACK_IMPORTED_MODULE_13__/* .ReactiveFormsModule */ .X1, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbBadgeModule */ .iEK, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbButtonModule */ .P5N, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbCardModule */ .lVF, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbCheckboxModule */ .Ad8, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbDatepickerModule */ .TgK, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbIconModule */ .clu, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbInputModule */ .pty, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbSelectModule */ .VcP, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_15__/* .NgSelectModule */ .MQ, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__/* .TranslateModule */ .h.forChild(), _shared_module__WEBPACK_IMPORTED_MODULE_17__/* .SharedModule */ .G, _file_uploader_input_file_uploader_input_module__WEBPACK_IMPORTED_MODULE_18__/* .FileUploaderModule */ .N, _tags_tags_color_input_tags_color_input_module__WEBPACK_IMPORTED_MODULE_19__/* .TagsColorInputModule */ .x, ngx_countdown__WEBPACK_IMPORTED_MODULE_20__/* .CountdownModule */ .U3, _fields__WEBPACK_IMPORTED_MODULE_21__/* .PasswordFormFieldModule */ .G, _fields__WEBPACK_IMPORTED_MODULE_22__/* .RoleFormFieldModule */ .N]
      });
    }
  }
  return UserFormsModule;
})();

/***/ }),

/***/ 83993:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K: () => (/* binding */ CandidateActionConfirmationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56383);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14572);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19223);





function CandidateActionConfirmationComponent_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(2, 1, "FORM.CANDIDATE_ACTION_CONFIRMATION.REJECT"));
  }
}
function CandidateActionConfirmationComponent_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(2, 1, "FORM.CANDIDATE_ACTION_CONFIRMATION.HIRE"));
  }
}
let CandidateActionConfirmationComponent = /*#__PURE__*/(() => {
  class CandidateActionConfirmationComponent {
    constructor(dialogRef) {
      this.dialogRef = dialogRef;
    }
    close() {
      this.dialogRef.close();
    }
    action() {
      this.dialogRef.close('ok');
    }
    static {
      this.ɵfac = function CandidateActionConfirmationComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || CandidateActionConfirmationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbDialogRef */ .ybQ));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: CandidateActionConfirmationComponent,
        selectors: [["ga-candidate-action-confirmation"]],
        standalone: false,
        decls: 20,
        vars: 18,
        consts: [[1, "center"], [4, "ngIf"], ["status", "danger", "nbButton", "", 1, "mr-3", 3, "click"], ["status", "info", "nbButton", "", 3, "click"]],
        template: function CandidateActionConfirmationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-card", 0)(1, "nb-card-header")(2, "h6");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(4, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(5, "nb-card-body")(6, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(8, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(9, CandidateActionConfirmationComponent_span_9_Template, 3, 3, "span", 1)(10, CandidateActionConfirmationComponent_span_10_Template, 3, 3, "span", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(12, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(13, "nb-card-footer")(14, "button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function CandidateActionConfirmationComponent_Template_button_click_14_listener() {
              return ctx.action();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(16, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(17, "button", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function CandidateActionConfirmationComponent_Template_button_click_17_listener() {
              return ctx.close();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(19, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(4, 8, "FORM.CONFIRM"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(8, 10, "FORM.CANDIDATE_ACTION_CONFIRMATION.SURE"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.isReject);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", !ctx.isReject);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate2"] */ .Lme(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(12, 12, "FORM.CANDIDATE_ACTION_CONFIRMATION.CANDIDATE"), " ", ctx.recordType, " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(16, 14, "BUTTONS.OK"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(19, 16, "BUTTONS.CANCEL"), " ");
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__/* .NgIf */ .bT, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbButtonComponent */ .YP2, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbCardComponent */ .SrT, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbCardBodyComponent */ .KH5, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbCardFooterComponent */ .VDm, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbCardHeaderComponent */ .zJv, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__/* .TranslatePipe */ .D9],
        styles: ["nb-card-body[_ngcontent-%COMP%] {\n\t\t\t\ttext-align: center;\n\t\t\t}\n\n\t\t\t.center[_ngcontent-%COMP%] {\n\t\t\t\talign-items: center;\n\t\t\t\twidth: 300px;\n\t\t\t}"]
      });
    }
  }
  return CandidateActionConfirmationComponent;
})();

/***/ }),

/***/ 86653:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Hc: () => (/* binding */ CountdownComponent),
/* harmony export */   U3: () => (/* binding */ CountdownModule)
/* harmony export */ });
/* unused harmony exports COUNTDOWN_CONFIG, CountdownStatus, CountdownTimer, provideCountdown */
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14572);



const _c0 = a0 => ({
  $implicit: a0
});
function CountdownComponent_Conditional_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainer"] */ .eu8(0);
  }
}
function CountdownComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(0, CountdownComponent_Conditional_0_ng_container_0_Template, 1, 0, "ng-container", 1);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngTemplateOutlet", ctx_r0.render)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction1"] */ .eq3(2, _c0, ctx_r0.i));
  }
}
function CountdownComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(0, "span", 0);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("innerHTML", ctx_r0.i.text, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵsanitizeHtml"] */ .npT);
  }
}
var CountdownStatus = /*#__PURE__*/function (CountdownStatus) {
  CountdownStatus[CountdownStatus["ing"] = 0] = "ing";
  CountdownStatus[CountdownStatus["pause"] = 1] = "pause";
  CountdownStatus[CountdownStatus["stop"] = 2] = "stop";
  CountdownStatus[CountdownStatus["done"] = 3] = "done";
  return CountdownStatus;
}(CountdownStatus || {});
let CountdownTimer = /*#__PURE__*/(() => {
  class CountdownTimer {
    constructor() {
      this.ngZone = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__/* .inject */ .WQX)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* .NgZone */ .SKi);
      this.fns = [];
      this.commands = [];
      this.nextTime = 0;
      this.ing = false;
    }
    start() {
      if (this.ing === true) {
        return;
      }
      this.ing = true;
      this.nextTime = +new Date();
      this.ngZone.runOutsideAngular(() => {
        this.process();
      });
    }
    process() {
      while (this.commands.length) {
        this.commands.shift()();
      }
      let diff = +new Date() - this.nextTime;
      const count = 1 + Math.floor(diff / 100);
      diff = 100 - diff % 100;
      this.nextTime += 100 * count;
      for (let i = 0, len = this.fns.length; i < len; i += 2) {
        let frequency = this.fns[i + 1];
        // 100/s
        if (0 === frequency) {
          this.fns[i](count);
          // 1000/s
        } else {
          // 先把末位至0，再每次加2
          frequency += 2 * count - 1;
          const step = Math.floor(frequency / 20);
          if (step > 0) {
            this.fns[i](step);
          }
          // 把末位还原成1
          this.fns[i + 1] = frequency % 20 + 1;
        }
      }
      if (!this.ing) {
        return;
      }
      setTimeout(() => this.process(), diff);
    }
    add(fn, frequency) {
      this.commands.push(() => {
        this.fns.push(fn);
        this.fns.push(frequency === 1000 ? 1 : 0);
        this.ing = true;
      });
      return this;
    }
    remove(fn) {
      this.commands.push(() => {
        const i = this.fns.indexOf(fn);
        if (i !== -1) {
          this.fns.splice(i, 2);
        }
        this.ing = this.fns.length > 0;
      });
      return this;
    }
    static {
      this.ɵfac = function CountdownTimer_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || CountdownTimer)();
      };
    }
    static {
      this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjectable"] */ .jDH({
        token: CountdownTimer,
        factory: CountdownTimer.ɵfac
      });
    }
  }
  return CountdownTimer;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
const COUNTDOWN_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .InjectionToken */ .nKC('COUNTDOWN_CONFIG');
function provideCountdown(config) {
  return makeEnvironmentProviders([{
    provide: COUNTDOWN_CONFIG,
    useValue: config
  }]);
}
let CountdownComponent = /*#__PURE__*/(() => {
  class CountdownComponent {
    constructor() {
      this.locale = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__/* .inject */ .WQX)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* .LOCALE_ID */ .xe9);
      this.timer = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__/* .inject */ .WQX)(CountdownTimer);
      this.cdr = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__/* .inject */ .WQX)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* .ChangeDetectorRef */ .gRc);
      this.ngZone = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__/* .inject */ .WQX)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* .NgZone */ .SKi);
      this.defCog = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__/* .inject */ .WQX)(COUNTDOWN_CONFIG, {
        optional: true
      });
      this.frequency = 1000;
      this._notify = {};
      this.status = CountdownStatus.ing;
      this.isDestroy = false;
      this.i = {};
      this.left = 0;
      this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .bkB();
    }
    set config(i) {
      if (i.notify != null && !Array.isArray(i.notify) && i.notify > 0) {
        i.notify = [i.notify];
      }
      this._config = i;
    }
    get config() {
      return this._config;
    }
    /**
     * Start countdown, you must manually call when `demand: false`
     */
    begin() {
      this.status = CountdownStatus.ing;
      this.callEvent('start');
    }
    /**
     * Restart countdown
     */
    restart() {
      if (this.status !== CountdownStatus.stop) {
        this.destroy();
      }
      this.init();
      this.callEvent('restart');
    }
    /**
     * Stop countdown, must call `restart` when stopped, it's different from pause, unable to recover
     */
    stop() {
      if (this.status === CountdownStatus.stop) {
        return;
      }
      this.status = CountdownStatus.stop;
      this.destroy();
      this.callEvent('stop');
    }
    /**
     * Pause countdown, you can use `resume` to recover again
     */
    pause() {
      if (this.status === CountdownStatus.stop || this.status === CountdownStatus.pause) {
        return;
      }
      this.status = CountdownStatus.pause;
      this.callEvent('pause');
    }
    /**
     * Resume countdown
     */
    resume() {
      if (this.status === CountdownStatus.stop || this.status !== CountdownStatus.pause) {
        return;
      }
      this.status = CountdownStatus.ing;
      this.callEvent('resume');
    }
    callEvent(action) {
      this.event.emit({
        action,
        left: this.left,
        status: this.status,
        text: this.i.text
      });
    }
    init() {
      const config = this.config = {
        demand: false,
        leftTime: 0,
        format: 'HH:mm:ss',
        timezone: '+0000',
        formatDate: ({
          date,
          formatStr,
          timezone
        }) => {
          return (0,_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .formatDate */ .Yq)(new Date(date), formatStr, this.locale, timezone || '+0000');
        },
        ...this.defCog,
        ...this.config
      };
      const frq = this.frequency = ~config.format.indexOf('S') ? 100 : 1000;
      this.status = config.demand ? CountdownStatus.pause : CountdownStatus.ing;
      this.getLeft();
      // bind reflow to me
      const _reflow = this.reflow;
      this.reflow = (count = 0, force = false) => _reflow.apply(this, [count, force]);
      if (Array.isArray(config.notify)) {
        config.notify.forEach(time => {
          if (time < 1) {
            throw new Error(`The notify config must be a positive integer.`);
          }
          time = time * 1000;
          time = time - time % frq;
          this._notify[time] = true;
        });
      }
      this.timer.add(this.reflow, frq).start();
      this.reflow(0, true);
    }
    destroy() {
      this.timer.remove(this.reflow);
      return this;
    }
    /**
     * 更新时钟
     */
    reflow(count = 0, force = false) {
      if (this.isDestroy) {
        return;
      }
      const {
        status,
        config,
        _notify
      } = this;
      if (!force && status !== CountdownStatus.ing) {
        return;
      }
      let value = this.left = this.left - this.frequency * count;
      if (value < 1) {
        value = 0;
      }
      this.i = {
        value,
        text: config.formatDate({
          date: value,
          formatStr: config.format,
          timezone: config.timezone
        })
      };
      if (typeof config.prettyText === 'function') {
        this.i.text = config.prettyText(this.i.text);
      }
      this.cdr.detectChanges();
      if (config.notify === 0 || _notify[value]) {
        this.ngZone.run(() => {
          this.callEvent('notify');
        });
      }
      if (value === 0) {
        this.ngZone.run(() => {
          this.status = CountdownStatus.done;
          this.destroy();
          this.callEvent('done');
        });
      }
    }
    /**
     * 获取倒计时剩余帧数
     */
    getLeft() {
      const {
        config,
        frequency
      } = this;
      let left = config.leftTime * 1000;
      const end = config.stopTime;
      if (!left && end) {
        left = end - new Date().getTime();
      }
      this.left = left - left % frequency;
    }
    ngOnInit() {
      this.init();
      if (!this.config.demand) {
        this.begin();
      }
    }
    ngOnDestroy() {
      this.isDestroy = true;
      this.destroy();
    }
    ngOnChanges(changes) {
      if (!changes.config.firstChange) {
        this.restart();
      }
    }
    static {
      this.ɵfac = function CountdownComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || CountdownComponent)();
      };
    }
    static {
      this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: CountdownComponent,
        selectors: [["countdown"]],
        hostVars: 2,
        hostBindings: function CountdownComponent_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵclassProp"] */ .AVh("count-down", true);
          }
        },
        inputs: {
          config: "config",
          render: "render"
        },
        outputs: {
          event: "event"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵProvidersFeature"] */ .Jv_([CountdownTimer]), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵNgOnChangesFeature"] */ .OA$],
        decls: 2,
        vars: 1,
        consts: [[3, "innerHTML"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]],
        template: function CountdownComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(0, CountdownComponent_Conditional_0_Template, 1, 4, "ng-container")(1, CountdownComponent_Conditional_1_Template, 1, 1, "span", 0);
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵconditional"] */ .vxM(ctx.render ? 0 : 1);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .NgTemplateOutlet */ .T3],
        styles: [".count-down{font-variant-numeric:tabular-nums}\n"],
        encapsulation: 2,
        changeDetection: 0
      });
    }
  }
  return CountdownComponent;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let CountdownModule = /*#__PURE__*/(() => {
  class CountdownModule {
    static {
      this.ɵfac = function CountdownModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || CountdownModule)();
      };
    }
    static {
      this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .$C({
        type: CountdownModule
      });
    }
    static {
      this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .G2t({});
    }
  }
  return CountdownModule;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=ngx-countdown.mjs.map

/***/ }),

/***/ 91107:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ hasRequiredField)
/* harmony export */ });
/**
 * Checks if a form control has a required field error.
 * @param control The form control to check.
 * @returns True if the control has a required field error, otherwise false.
 */
const hasRequiredField = control => {
  // Check if the control exists
  if (!control) {
    return false;
  }
  // Check if the control has a validator
  if (!control.validator) {
    return false;
  }
  // Check if the control has a 'required' error
  return !!(control.errors && control.errors['required']);
};

/***/ })

}]);