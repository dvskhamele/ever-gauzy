"use strict";
(self["webpackChunkgauzy"] = self["webpackChunkgauzy"] || []).push([[6747],{

/***/ 1154:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A9: () => (/* reexport safe */ _gallery_component__WEBPACK_IMPORTED_MODULE_0__.A),
/* harmony export */   AF: () => (/* reexport safe */ _gallery_service__WEBPACK_IMPORTED_MODULE_3__.A),
/* harmony export */   M4: () => (/* reexport safe */ _gallery_directive__WEBPACK_IMPORTED_MODULE_1__.M),
/* harmony export */   Sx: () => (/* reexport safe */ _gallery_component__WEBPACK_IMPORTED_MODULE_0__.S),
/* harmony export */   lg: () => (/* reexport safe */ _gallery_module__WEBPACK_IMPORTED_MODULE_2__.l)
/* harmony export */ });
/* harmony import */ var _gallery_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94373);
/* harmony import */ var _gallery_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(40887);
/* harmony import */ var _gallery_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(81963);
/* harmony import */ var _gallery_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10569);





/***/ }),

/***/ 1686:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* reexport safe */ _workspaces_module__WEBPACK_IMPORTED_MODULE_1__.L),
/* harmony export */   e: () => (/* reexport safe */ _workspaces_component__WEBPACK_IMPORTED_MODULE_0__.e)
/* harmony export */ });
/* harmony import */ var _workspaces_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52995);
/* harmony import */ var _workspaces_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73586);



/***/ }),

/***/ 2016:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Y: () => (/* binding */ FileProviderSelectorComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(55598);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10936);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(41598);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(51474);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14572);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(56383);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19223);










function FileProviderSelectorComponent_ng_template_0_nb_option_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-option", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(1, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(3, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const providerName_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("value", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(1, 2, providerName_r3.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(3, 4, providerName_r3 == null ? null : providerName_r3.label), " ");
  }
}
function FileProviderSelectorComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 1)(1, "label", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(4, "nb-select", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayListener"] */ .mxI("ngModelChange", function FileProviderSelectorComponent_ng_template_0_Template_nb_select_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayBindingSet"] */ .DH7(ctx_r1.provider, $event) || (ctx_r1.provider = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("selectedChange", function FileProviderSelectorComponent_ng_template_0_Template_nb_select_selectedChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.onSelectionChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(5, FileProviderSelectorComponent_ng_template_0_nb_option_5_Template, 4, 6, "nb-option", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(3, 3, "SETTINGS_FILE_STORAGE.FILE_PROVIDER"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayProperty"] */ .R50("ngModel", ctx_r1.provider);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx_r1.fileStorageProviders);
  }
}
let FileProviderSelectorComponent = /*#__PURE__*/(() => {
  let FileProviderSelectorComponent = class FileProviderSelectorComponent {
    constructor() {
      this.fileStorageProviders = [];
      this.onChange = () => {};
      this.onTouched = () => {};
      this.onSelectionChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .bkB();
    }
    set provider(val) {
      this._provider = val;
      this.onChange(val);
      this.onTouched(val);
    }
    get provider() {
      return this._provider;
    }
    ngOnInit() {
      this.fileStorageProviders = Object.keys(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__/* .FileStorageProviderEnum */ .o).map(label => ({
        label,
        value: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__/* .FileStorageProviderEnum */ .o[label]
      }));
    }
    /**
     *
     * @param value
     */
    writeValue(value) {
      if (value) {
        this._provider = value;
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
     * On changed file storage provider
     *
     * @param provider
     */
    onSelectionChange(provider) {
      if (provider) {
        this.onSelectionChanged.emit(provider);
      }
    }
    static {
      this.ɵfac = function FileProviderSelectorComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || FileProviderSelectorComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: FileProviderSelectorComponent,
        selectors: [["file-provider-selector"]],
        inputs: {
          provider: "provider"
        },
        outputs: {
          onSelectionChanged: "onSelectionChanged"
        },
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵProvidersFeature"] */ .Jv_([{
          provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .NG_VALUE_ACCESSOR */ .kq,
          useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__/* .forwardRef */ .Rfq)(() => FileProviderSelectorComponent),
          multi: true
        }])],
        decls: 1,
        vars: 1,
        consts: [[3, "ngIf"], [1, "form-group"], [1, "label"], ["size", "medium", 1, "d-block", 3, "ngModelChange", "selectedChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]],
        template: function FileProviderSelectorComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(0, FileProviderSelectorComponent_ng_template_0_Template, 6, 5, "ng-template", 0);
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.fileStorageProviders.length > 0);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__/* .NgForOf */ .Sq, _angular_common__WEBPACK_IMPORTED_MODULE_3__/* .NgIf */ .bT, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .NgControlStatus */ .BC, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .NgModel */ .vS, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbSelectComponent */ .S81, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbOptionComponent */ .ZJ2, _angular_common__WEBPACK_IMPORTED_MODULE_3__/* .UpperCasePipe */ .Pc, _angular_common__WEBPACK_IMPORTED_MODULE_3__/* .TitleCasePipe */ .PV, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__/* .TranslatePipe */ .D9],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]     nb-select.shape-rectangle .select-button {\n  border-radius: calc(var(--button-rectangle-border-radius) / 1.625);\n  box-shadow: var(--gauzy-shadow);\n  height: 42px;\n  display: flex;\n  align-items: center;\n  border: none;\n}\n[_nghost-%COMP%]     nb-select.appearance-outline.size-medium .select-button {\n  border: none;\n}\n[_nghost-%COMP%]     nb-select button span {\n  display: block;\n  overflow-x: hidden;\n  text-overflow: ellipsis;\n}\n[_nghost-%COMP%]   .d-block[_ngcontent-%COMP%] {\n  width: 10rem;\n}\n[_nghost-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n}"]
      });
    }
  };
  FileProviderSelectorComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__/* .UntilDestroy */ .d)({
    checkProperties: true
  })], FileProviderSelectorComponent);
  return FileProviderSelectorComponent;
})();


/***/ }),

/***/ 2751:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ck: () => (/* reexport safe */ _location__WEBPACK_IMPORTED_MODULE_1__.C),
/* harmony export */   f0: () => (/* reexport safe */ _location__WEBPACK_IMPORTED_MODULE_1__.f),
/* harmony export */   kr: () => (/* reexport safe */ _helpers__WEBPACK_IMPORTED_MODULE_0__.k),
/* harmony export */   q_: () => (/* reexport safe */ _maps__WEBPACK_IMPORTED_MODULE_2__.q),
/* harmony export */   xt: () => (/* reexport safe */ _maps__WEBPACK_IMPORTED_MODULE_2__.x)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78870);
/* harmony import */ var _location__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11287);
/* harmony import */ var _maps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(77395);




/***/ }),

/***/ 3253:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ EntityWithMembersCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14572);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56383);
/* harmony import */ var _table_components_notes_with_tags_notes_with_tags_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(33829);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19223);







const _c0 = ["*"];
function EntityWithMembersCardComponent_div_9_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 13)(1, "div", 14)(2, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(3, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const member_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpropertyInterpolate1"] */ .Mz_("href", "/pages/employees/edit/", member_r1.id, "/profile", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵsanitizeUrl"] */ .B4B);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpropertyInterpolate"] */ .FS9("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(4, 6, "ORGANIZATIONS_PAGE.EDIT.CLICK_EMPLOYEE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("src", member_r1.user.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵsanitizeUrl"] */ .B4B);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate2"] */ .Lme("", member_r1.user.firstName, " ", member_r1.user.lastName, " ");
  }
}
function EntityWithMembersCardComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, EntityWithMembersCardComponent_div_9_div_1_Template, 7, 8, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx_r1.entityWithMembers.members);
  }
}
function EntityWithMembersCardComponent_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(1, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function EntityWithMembersCardComponent_ng_container_11_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.navigateContact(ctx_r1.entityWithMembers));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(2, "nb-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(4, 1, "BUTTONS.VIEW"), " ");
  }
}
let EntityWithMembersCardComponent = /*#__PURE__*/(() => {
  class EntityWithMembersCardComponent {
    constructor() {
      this.visibleViewButton = false;
      this.remove = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .bkB();
      this.edit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .bkB();
      this.view = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .bkB();
    }
    removeEntity(id) {
      this.remove.emit(id);
    }
    editEntity(id) {
      this.edit.emit(id);
    }
    navigateContact(item) {
      this.view.emit(item);
    }
    static {
      this.ɵfac = function EntityWithMembersCardComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || EntityWithMembersCardComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: EntityWithMembersCardComponent,
        selectors: [["ga-entity-with-members-card"]],
        inputs: {
          entityWithMembers: "entityWithMembers",
          public: "public",
          visibleViewButton: "visibleViewButton",
          layout: "layout"
        },
        outputs: {
          remove: "remove",
          edit: "edit",
          view: "view"
        },
        standalone: false,
        ngContentSelectors: _c0,
        decls: 20,
        vars: 14,
        consts: [[1, "card-body", 2, "padding", "0 !important"], [2, "padding", "0.5rem"], [1, "header-container"], [3, "rowData", "layout"], [1, "members-count"], [1, "team-card"], [4, "ngIf"], [1, "button-container"], ["nbButton", "", "status", "success", "size", "tiny", 1, "mr-2", 3, "click"], ["icon", "edit-outline", 1, "mr-1"], ["size", "tiny", "nbButton", "", "status", "danger", 1, "mr-2", 3, "click"], ["icon", "trash-2-outline", 1, "mr-2"], ["class", "name-container", 4, "ngFor", "ngForOf"], [1, "name-container"], [1, "image-container"], ["target", "_blank", 3, "href"], [3, "nbTooltip", "src"], ["nbButton", "", "status", "info", "size", "tiny", 1, "mr-2", 3, "click"], ["icon", "eye-outline", 1, "mr-1"]],
        template: function EntityWithMembersCardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵprojectionDef"] */ .NAR();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-card", 0)(1, "nb-card-header", 1)(2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(3, "ga-notes-with-tags", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(6, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵprojection"] */ .SdG(7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(8, "nb-card-body", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(9, EntityWithMembersCardComponent_div_9_Template, 2, 1, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(10, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(11, EntityWithMembersCardComponent_ng_container_11_Template, 5, 3, "ng-container", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(12, "button", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function EntityWithMembersCardComponent_Template_button_click_12_listener() {
              return ctx.editEntity(ctx.entityWithMembers.id);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(13, "nb-icon", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(15, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(16, "button", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function EntityWithMembersCardComponent_Template_button_click_16_listener() {
              return ctx.removeEntity(ctx.entityWithMembers.id);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(17, "nb-icon", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(19, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("rowData", ctx.entityWithMembers)("layout", ctx.layout);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate2"] */ .Lme(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(6, 8, "FORM.PLACEHOLDERS.MEMBERS_COUNT"), " ", ctx.entityWithMembers.members ? ctx.entityWithMembers.members.length : 0, " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.entityWithMembers.members && ctx.entityWithMembers.members.length > 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.visibleViewButton);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI("", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(15, 10, "BUTTONS.EDIT"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI("", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(19, 12, "BUTTONS.DELETE"), " ");
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .NgForOf */ .Sq, _angular_common__WEBPACK_IMPORTED_MODULE_1__/* .NgIf */ .bT, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbCardComponent */ .SrT, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbCardBodyComponent */ .KH5, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbCardHeaderComponent */ .zJv, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbButtonComponent */ .YP2, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbIconComponent */ .tHu, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbTooltipDirective */ .BmQ, _table_components_notes_with_tags_notes_with_tags_component__WEBPACK_IMPORTED_MODULE_3__/* .NotesWithTagsComponent */ .i, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__/* .TranslatePipe */ .D9],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n[_nghost-%COMP%]   .card-body[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%] {\n  text-align: center;\n  position: relative;\n}\n[_nghost-%COMP%]   .card-body[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   .members-count[_ngcontent-%COMP%] {\n  font-size: 0.7em;\n  color: darkgray;\n}\n[_nghost-%COMP%]   .card-body[_ngcontent-%COMP%]   .team-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n[_nghost-%COMP%]   .card-body[_ngcontent-%COMP%]   .team-card[_ngcontent-%COMP%]   .name-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 10px;\n}\n[_nghost-%COMP%]   .card-body[_ngcontent-%COMP%]   .team-card[_ngcontent-%COMP%]   .name-container[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%] {\n  width: 70px;\n  height: 50px;\n  display: flex;\n}\n[_nghost-%COMP%]   .card-body[_ngcontent-%COMP%]   .team-card[_ngcontent-%COMP%]   .name-container[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100%;\n  max-width: 70px;\n}\n[_nghost-%COMP%]   .card-body[_ngcontent-%COMP%]   .team-card[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%] {\n  display: flex;\n  width: 160px;\n  justify-content: space-between;\n  margin-top: 15px;\n}\n[dir=ltr]   [_nghost-%COMP%]   .card-body[_ngcontent-%COMP%]   .team-card[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%] {\n  margin-left: 9px;\n}\n[dir=rtl]   [_nghost-%COMP%]   .card-body[_ngcontent-%COMP%]   .team-card[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%] {\n  margin-right: 9px;\n}\n\n.color[_ngcontent-%COMP%] {\n  position: static;\n  margin-top: 5px;\n  display: inline-block;\n}\n[dir=ltr][_ngcontent-%COMP%]   .color[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n[dir=rtl][_ngcontent-%COMP%]   .color[_ngcontent-%COMP%] {\n  margin-left: 5px;\n}\n\n.tags[_ngcontent-%COMP%] {\n  display: flex;\n  width: 200px;\n  flex-wrap: wrap;\n}"]
      });
    }
  }
  return EntityWithMembersCardComponent;
})();

/***/ }),

/***/ 3420:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* reexport safe */ _approval_policy_mutation_module__WEBPACK_IMPORTED_MODULE_0__.H),
/* harmony export */   e: () => (/* reexport safe */ _approval_policy_mutation_component__WEBPACK_IMPORTED_MODULE_1__.e)
/* harmony export */ });
/* harmony import */ var _approval_policy_mutation_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29206);
/* harmony import */ var _approval_policy_mutation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88807);



/***/ }),

/***/ 3701:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FZ: () => (/* binding */ DIRECTIVES),
/* harmony export */   Hd: () => (/* reexport safe */ _outside_directive__WEBPACK_IMPORTED_MODULE_3__.H),
/* harmony export */   JB: () => (/* reexport safe */ _debounce_click_directive__WEBPACK_IMPORTED_MODULE_1__.J),
/* harmony export */   Xd: () => (/* reexport safe */ _time_tracking_authorized_directive__WEBPACK_IMPORTED_MODULE_6__.X),
/* harmony export */   Zw: () => (/* reexport safe */ _read_more__WEBPACK_IMPORTED_MODULE_5__.Z),
/* harmony export */   bu: () => (/* reexport safe */ _text_mask_directive__WEBPACK_IMPORTED_MODULE_8__.b),
/* harmony export */   hn: () => (/* reexport safe */ _autocomplete_off_directive__WEBPACK_IMPORTED_MODULE_0__.h),
/* harmony export */   ht: () => (/* reexport safe */ _no_space_edges_directive__WEBPACK_IMPORTED_MODULE_7__.h),
/* harmony export */   mF: () => (/* reexport safe */ _trigger_parent_click_directive__WEBPACK_IMPORTED_MODULE_9__.m),
/* harmony export */   rR: () => (/* reexport safe */ _under_construction_directive__WEBPACK_IMPORTED_MODULE_4__.r),
/* harmony export */   zV: () => (/* reexport safe */ _img_directive__WEBPACK_IMPORTED_MODULE_2__.z)
/* harmony export */ });
/* harmony import */ var _autocomplete_off_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21663);
/* harmony import */ var _debounce_click_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20345);
/* harmony import */ var _img_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71466);
/* harmony import */ var _outside_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16074);
/* harmony import */ var _under_construction_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(67063);
/* harmony import */ var _read_more__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9312);
/* harmony import */ var _time_tracking_authorized_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6485);
/* harmony import */ var _no_space_edges_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(97040);
/* harmony import */ var _text_mask_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(56511);
/* harmony import */ var _trigger_parent_click_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(17609);




















const DIRECTIVES = [_autocomplete_off_directive__WEBPACK_IMPORTED_MODULE_0__/* .AutocompleteOffDirective */ .h, _debounce_click_directive__WEBPACK_IMPORTED_MODULE_1__/* .DebounceClickDirective */ .J, _img_directive__WEBPACK_IMPORTED_MODULE_2__/* .ImgDirective */ .z, _read_more__WEBPACK_IMPORTED_MODULE_5__/* .ReadMoreDirective */ .Z, _time_tracking_authorized_directive__WEBPACK_IMPORTED_MODULE_6__/* .TimeTrackingAuthorizedDirective */ .X, _outside_directive__WEBPACK_IMPORTED_MODULE_3__/* .OutsideDirective */ .H, _under_construction_directive__WEBPACK_IMPORTED_MODULE_4__/* .UnderConstructionDirective */ .r, _no_space_edges_directive__WEBPACK_IMPORTED_MODULE_7__/* .NoSpaceEdgesDirective */ .h, _text_mask_directive__WEBPACK_IMPORTED_MODULE_8__/* .TextMaskDirective */ .b, _trigger_parent_click_directive__WEBPACK_IMPORTED_MODULE_9__/* .TriggerParentClickDirective */ .m];

/***/ }),

/***/ 3775:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $A: () => (/* reexport safe */ _goal_level_select_goal_level_select_component__WEBPACK_IMPORTED_MODULE_2__.$),
/* harmony export */   Jv: () => (/* reexport safe */ _goal_custom_unit_goal_custom_unit_module__WEBPACK_IMPORTED_MODULE_1__.J),
/* harmony export */   Kh: () => (/* reexport safe */ _goal_custom_unit_goal_custom_unit_select_component__WEBPACK_IMPORTED_MODULE_0__.K),
/* harmony export */   dC: () => (/* reexport safe */ _goal_templates_goal_templates_module__WEBPACK_IMPORTED_MODULE_5__.d),
/* harmony export */   ig: () => (/* reexport safe */ _goal_level_select_goal_level_select_module__WEBPACK_IMPORTED_MODULE_3__.i),
/* harmony export */   sR: () => (/* reexport safe */ _goal_templates_goal_templates_component__WEBPACK_IMPORTED_MODULE_4__.s)
/* harmony export */ });
/* harmony import */ var _goal_custom_unit_goal_custom_unit_select_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95722);
/* harmony import */ var _goal_custom_unit_goal_custom_unit_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1546);
/* harmony import */ var _goal_level_select_goal_level_select_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(80833);
/* harmony import */ var _goal_level_select_goal_level_select_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(48100);
/* harmony import */ var _goal_templates_goal_templates_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(18289);
/* harmony import */ var _goal_templates_goal_templates_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(55047);







/***/ }),

/***/ 3960:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F$: () => (/* reexport safe */ _timezone_selector__WEBPACK_IMPORTED_MODULE_0__.F),
/* harmony export */   H0: () => (/* reexport safe */ _file_provider_selector__WEBPACK_IMPORTED_MODULE_1__.H),
/* harmony export */   Sp: () => (/* reexport safe */ _timezone_selector__WEBPACK_IMPORTED_MODULE_0__.S),
/* harmony export */   YE: () => (/* reexport safe */ _file_provider_selector__WEBPACK_IMPORTED_MODULE_1__.Y)
/* harmony export */ });
/* harmony import */ var _timezone_selector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86436);
/* harmony import */ var _file_provider_selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8675);



/***/ }),

/***/ 4392:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* reexport safe */ _progress_status_progress_status_component__WEBPACK_IMPORTED_MODULE_0__.H),
/* harmony export */   i: () => (/* reexport safe */ _progress_status_module__WEBPACK_IMPORTED_MODULE_1__.i)
/* harmony export */ });
/* harmony import */ var _progress_status_progress_status_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(89294);
/* harmony import */ var _progress_status_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21160);



/***/ }),

/***/ 5043:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H0: () => (/* reexport safe */ _star_rating_output_component__WEBPACK_IMPORTED_MODULE_1__.H),
/* harmony export */   S4: () => (/* reexport safe */ _star_rating_output_component__WEBPACK_IMPORTED_MODULE_1__.S),
/* harmony export */   jp: () => (/* reexport safe */ _star_rating_output_module__WEBPACK_IMPORTED_MODULE_0__.j)
/* harmony export */ });
/* harmony import */ var _star_rating_output_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87009);
/* harmony import */ var _star_rating_output_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21838);



/***/ }),

/***/ 5181:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Bl: () => (/* reexport safe */ _recurring_expense_mutation_recurring_expense_setting__WEBPACK_IMPORTED_MODULE_13__.B),
/* harmony export */   H2: () => (/* reexport safe */ _expense_category_select_expense_category_select_module__WEBPACK_IMPORTED_MODULE_1__.H),
/* harmony export */   HM: () => (/* reexport safe */ _expenses_mutation_attach_receipt_attach_receipt_component__WEBPACK_IMPORTED_MODULE_2__.H),
/* harmony export */   Pv: () => (/* reexport safe */ _recurring_expense_block_recurring_expense_block_module__WEBPACK_IMPORTED_MODULE_6__.P),
/* harmony export */   Pw: () => (/* reexport safe */ _recurring_expense_mutation_recurring_expense_mutation_module__WEBPACK_IMPORTED_MODULE_12__.P),
/* harmony export */   Q5: () => (/* reexport safe */ _recurring_expense_block_recurring_expense_block_component__WEBPACK_IMPORTED_MODULE_5__.Q),
/* harmony export */   SD: () => (/* reexport safe */ _recurring_expense_mutation_recurring_expense_mutation_component__WEBPACK_IMPORTED_MODULE_11__.S),
/* harmony export */   f0: () => (/* reexport safe */ _expenses_mutation_expenses_mutation_module__WEBPACK_IMPORTED_MODULE_4__.f),
/* harmony export */   gz: () => (/* reexport safe */ _recurring_expense_history_recurring_expense_history_module__WEBPACK_IMPORTED_MODULE_10__.g),
/* harmony export */   ki: () => (/* reexport safe */ _expenses_mutation_expenses_mutation_component__WEBPACK_IMPORTED_MODULE_3__.k),
/* harmony export */   n1: () => (/* reexport safe */ _recurring_expense_delete_confirmation_recurring_expense_delete_confirmation_component__WEBPACK_IMPORTED_MODULE_7__.n),
/* harmony export */   nw: () => (/* reexport safe */ _recurring_expense_history_recurring_expense_history_component__WEBPACK_IMPORTED_MODULE_9__.n),
/* harmony export */   uT: () => (/* reexport safe */ _recurring_expense_delete_confirmation_recurring_expense_delete_confirmation_module__WEBPACK_IMPORTED_MODULE_8__.u),
/* harmony export */   w6: () => (/* reexport safe */ _expense_category_select_expense_category_select_component__WEBPACK_IMPORTED_MODULE_0__.w)
/* harmony export */ });
/* harmony import */ var _expense_category_select_expense_category_select_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93979);
/* harmony import */ var _expense_category_select_expense_category_select_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28826);
/* harmony import */ var _expenses_mutation_attach_receipt_attach_receipt_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56358);
/* harmony import */ var _expenses_mutation_expenses_mutation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(647);
/* harmony import */ var _expenses_mutation_expenses_mutation_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(59382);
/* harmony import */ var _recurring_expense_block_recurring_expense_block_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10059);
/* harmony import */ var _recurring_expense_block_recurring_expense_block_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(19882);
/* harmony import */ var _recurring_expense_delete_confirmation_recurring_expense_delete_confirmation_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8171);
/* harmony import */ var _recurring_expense_delete_confirmation_recurring_expense_delete_confirmation_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(51210);
/* harmony import */ var _recurring_expense_history_recurring_expense_history_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(27143);
/* harmony import */ var _recurring_expense_history_recurring_expense_history_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(78230);
/* harmony import */ var _recurring_expense_mutation_recurring_expense_mutation_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(17109);
/* harmony import */ var _recurring_expense_mutation_recurring_expense_mutation_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(91963);
/* harmony import */ var _recurring_expense_mutation_recurring_expense_setting__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(584);















/***/ }),

/***/ 5310:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   z: () => (/* binding */ PaymentMethodFilterComponent)
/* harmony export */ });
/* harmony import */ var angular2_smart_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52345);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(43151);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14572);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(55567);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19223);







function PaymentMethodFilterComponent_ng_option_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "ng-option", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const paymentMethod_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("value", paymentMethod_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(2, 2, "INVOICES_PAGE.PAYMENTS." + paymentMethod_r1), " ");
  }
}
let PaymentMethodFilterComponent = /*#__PURE__*/(() => {
  class PaymentMethodFilterComponent extends angular2_smart_table__WEBPACK_IMPORTED_MODULE_1__/* .DefaultFilter */ .yG {
    constructor() {
      super();
      this.paymentMethods = Object.values(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__/* .PaymentMethodEnum */ .x);
    }
    /**
     *
     * @param changes
     */
    ngOnChanges(changes) {}
    /**
     *
     * @param value
     */
    onChange(value) {
      console.log({
        value
      });
      this.column.filterFunction(value, this.column.id);
    }
    static {
      this.ɵfac = function PaymentMethodFilterComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || PaymentMethodFilterComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: PaymentMethodFilterComponent,
        selectors: [["ga-payment-method-filter"]],
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵNgOnChangesFeature"] */ .OA$],
        decls: 3,
        vars: 6,
        consts: [[3, "change", "clearable", "closeOnSelect", "placeholder"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]],
        template: function PaymentMethodFilterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "ng-select", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(1, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("change", function PaymentMethodFilterComponent_Template_ng_select_change_0_listener($event) {
              return ctx.onChange($event);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(2, PaymentMethodFilterComponent_ng_option_2_Template, 3, 4, "ng-option", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("clearable", true)("closeOnSelect", true)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(1, 4, "INVOICES_PAGE.PAYMENTS.PAYMENT_METHOD"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx.paymentMethods);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__/* .NgForOf */ .Sq, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__/* .NgSelectComponent */ .vr, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__/* .NgOptionComponent */ .xt, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__/* .TranslatePipe */ .D9],
        encapsulation: 2
      });
    }
  }
  return PaymentMethodFilterComponent;
})();

/***/ }),

/***/ 6313:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ ClickableLinkComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);

let ClickableLinkComponent = /*#__PURE__*/(() => {
  class ClickableLinkComponent {
    constructor() {
      this.target = '_blank';
    }
    ngOnInit() {
      // Your custom logic here
    }
    static {
      this.ɵfac = function ClickableLinkComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || ClickableLinkComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: ClickableLinkComponent,
        selectors: [["ngx-clickable-link"]],
        inputs: {
          value: "value",
          rowData: "rowData",
          href: "href",
          target: "target"
        },
        standalone: false,
        decls: 2,
        vars: 3,
        consts: [[3, "href", "target"]],
        template: function ClickableLinkComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "a", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("href", ctx.rowData[ctx.href], _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵsanitizeUrl"] */ .B4B)("target", ctx.target);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", ctx.value, " ");
          }
        },
        styles: ["a[_ngcontent-%COMP%] {\n  color: rgb(0, 136, 254);\n  text-decoration: none;\n}"]
      });
    }
  }
  return ClickableLinkComponent;
})();

/***/ }),

/***/ 7878:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K: () => (/* binding */ EmployeeScheduleModule)
/* harmony export */ });
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56383);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19223);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);




let EmployeeScheduleModule = /*#__PURE__*/(() => {
  class EmployeeScheduleModule {
    static {
      this.ɵfac = function EmployeeScheduleModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || EmployeeScheduleModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .$C({
        type: EmployeeScheduleModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbButtonModule */ .P5N, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbCardModule */ .lVF, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__/* .TranslateModule */ .h.forChild()]
      });
    }
  }
  return EmployeeScheduleModule;
})();

/***/ }),

/***/ 8675:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* reexport safe */ _file_provider_selector_module__WEBPACK_IMPORTED_MODULE_1__.H),
/* harmony export */   Y: () => (/* reexport safe */ _file_provider_selector_component__WEBPACK_IMPORTED_MODULE_0__.Y)
/* harmony export */ });
/* harmony import */ var _file_provider_selector_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2016);
/* harmony import */ var _file_provider_selector_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(51989);



/***/ }),

/***/ 9312:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ ReadMoreDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);


let ReadMoreDirective = /*#__PURE__*/(() => {
  class ReadMoreDirective {
    constructor(el) {
      this.el = el;
      this.hideToggle = true;
      this.isCollapsed = true;
    }
    /**
     * @inheritDoc
     */
    ngAfterViewInit() {
      this.text = this.elementChange.innerHTML;
      this.toggleView();
      if (!this.hideToggle) {
        this.el.nativeElement.classList.remove('hidden');
      } else {
        this.el.nativeElement.classList.add('hidden');
      }
      this.el.nativeElement.addEventListener('click', event => {
        event.preventDefault();
        this.toggleView();
      });
    }
    /**
     * @inheritDoc
     */
    ngOnChanges() {
      if (this.text) {
        this.toggleView();
      }
    }
    /**
     * Toogle view - full text or not
     */
    toggleView() {
      if (this.text.length <= this.maxLength) {
        this.el.nativeElement.querySelector('.more').style.display = 'none';
        this.el.nativeElement.querySelector('.less').style.display = 'none';
        return;
      }
      this.determineView();
      this.isCollapsed = !this.isCollapsed;
      if (this.isCollapsed) {
        this.el.nativeElement.querySelector('.more').style.display = 'none';
        this.el.nativeElement.querySelector('.less').style.display = 'inherit';
      } else {
        this.el.nativeElement.querySelector('.more').style.display = 'inherit';
        this.el.nativeElement.querySelector('.less').style.display = 'none';
      }
    }
    /**
     * Determine view
     */
    determineView() {
      const _elementChange = this.elementChange; //document.getElementById(this.elementChange.id);
      if (this.text.length <= this.maxLength) {
        this.currentText = this.text;
        _elementChange.innerHTML = this.currentText;
        this.isCollapsed = false;
        this.hideToggle = true;
        return;
      }
      this.hideToggle = false;
      if (this.isCollapsed === true) {
        this.currentText = this.text.substring(0, this.maxLength) + '...';
        _elementChange.innerHTML = this.currentText;
      } else if (this.isCollapsed === false) {
        this.currentText = this.text;
        _elementChange.innerHTML = this.currentText;
      }
    }
    static {
      this.ɵfac = function ReadMoreDirective_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || ReadMoreDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* .ElementRef */ .aKT));
      };
    }
    static {
      this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineDirective"] */ .FsC({
        type: ReadMoreDirective,
        selectors: [["", "readMore", ""]],
        inputs: {
          maxLength: [0, "readMore-length", "maxLength"],
          elementChange: [0, "readMore-element", "elementChange"]
        },
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵNgOnChangesFeature"] */ .OA$]
      });
    }
  }
  return ReadMoreDirective;
})();

/***/ }),

/***/ 9563:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Eh: () => (/* reexport safe */ _countdown_confirmation_countdown_confirmation_component__WEBPACK_IMPORTED_MODULE_5__.E),
/* harmony export */   Ks: () => (/* reexport safe */ _candidate_action_confirmation_candidate_action_confirmation_component__WEBPACK_IMPORTED_MODULE_3__.K),
/* harmony export */   Sd: () => (/* reexport safe */ _basic_info_basic_info_form_component__WEBPACK_IMPORTED_MODULE_2__.S),
/* harmony export */   u5: () => (/* reexport safe */ _delete_confirmation_delete_confirmation_component__WEBPACK_IMPORTED_MODULE_4__.u),
/* harmony export */   x6: () => (/* reexport safe */ _action_confirmation_action_confirmation_component__WEBPACK_IMPORTED_MODULE_0__.x),
/* harmony export */   xJ: () => (/* reexport safe */ _archive_confirmation_archive_confirmation_component__WEBPACK_IMPORTED_MODULE_1__.x)
/* harmony export */ });
/* harmony import */ var _action_confirmation_action_confirmation_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18857);
/* harmony import */ var _archive_confirmation_archive_confirmation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78115);
/* harmony import */ var _basic_info_basic_info_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24250);
/* harmony import */ var _candidate_action_confirmation_candidate_action_confirmation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(83993);
/* harmony import */ var _delete_confirmation_delete_confirmation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(55101);
/* harmony import */ var _countdown_confirmation_countdown_confirmation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(75453);







/***/ }),

/***/ 11287:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* reexport safe */ _location_form_module__WEBPACK_IMPORTED_MODULE_1__.C),
/* harmony export */   f: () => (/* reexport safe */ _location_form_component__WEBPACK_IMPORTED_MODULE_0__.f)
/* harmony export */ });
/* harmony import */ var _location_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19426);
/* harmony import */ var _location_form_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9669);



/***/ }),

/***/ 11584:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $B: () => (/* reexport safe */ _mobile_timer_icon__WEBPACK_IMPORTED_MODULE_3__.$),
/* harmony export */   GG: () => (/* reexport safe */ _timer_synced__WEBPACK_IMPORTED_MODULE_2__.G),
/* harmony export */   Ij: () => (/* reexport safe */ _team_timer_icon__WEBPACK_IMPORTED_MODULE_7__.I),
/* harmony export */   KN: () => (/* reexport safe */ _hubstaff_timer_icon__WEBPACK_IMPORTED_MODULE_5__.K),
/* harmony export */   LQ: () => (/* reexport safe */ _web_timer_icon__WEBPACK_IMPORTED_MODULE_1__.L),
/* harmony export */   UT: () => (/* reexport safe */ _browser_extension_timer_icon__WEBPACK_IMPORTED_MODULE_6__.U),
/* harmony export */   XE: () => (/* reexport safe */ _upwork_timer_icon__WEBPACK_IMPORTED_MODULE_4__.X),
/* harmony export */   h2: () => (/* reexport safe */ _desktop_timer_icon__WEBPACK_IMPORTED_MODULE_0__.h)
/* harmony export */ });
/* harmony import */ var _desktop_timer_icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19536);
/* harmony import */ var _web_timer_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8110);
/* harmony import */ var _timer_synced__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25200);
/* harmony import */ var _mobile_timer_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13364);
/* harmony import */ var _upwork_timer_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(23502);
/* harmony import */ var _hubstaff_timer_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(71723);
/* harmony import */ var _browser_extension_timer_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(32592);
/* harmony import */ var _team_timer_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(36473);









/***/ }),

/***/ 12321:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   k: () => (/* reexport safe */ _view_time_log_modal_module__WEBPACK_IMPORTED_MODULE_1__.k),
/* harmony export */   x: () => (/* reexport safe */ _view_time_log_modal_component__WEBPACK_IMPORTED_MODULE_0__.x)
/* harmony export */ });
/* harmony import */ var _view_time_log_modal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71458);
/* harmony import */ var _view_time_log_modal_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65029);



/***/ }),

/***/ 12616:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Cq: () => (/* reexport safe */ _widget_widget_service__WEBPACK_IMPORTED_MODULE_14__.C),
/* harmony export */   Gs: () => (/* reexport safe */ _profit_history_table_components_expense_table_component__WEBPACK_IMPORTED_MODULE_8__.G),
/* harmony export */   Gu: () => (/* reexport safe */ _window_window_component__WEBPACK_IMPORTED_MODULE_17__.G),
/* harmony export */   Io: () => (/* reexport safe */ _window_layout_window_layout_component__WEBPACK_IMPORTED_MODULE_20__.I),
/* harmony export */   L7: () => (/* reexport safe */ _widget_widget_module__WEBPACK_IMPORTED_MODULE_13__.L),
/* harmony export */   LM: () => (/* reexport safe */ _window_layout_window_layout_module__WEBPACK_IMPORTED_MODULE_21__.L),
/* harmony export */   Nx: () => (/* reexport safe */ _widget_layout_widget_layout_module__WEBPACK_IMPORTED_MODULE_16__.N),
/* harmony export */   O9: () => (/* reexport safe */ _records_history_records_history_component__WEBPACK_IMPORTED_MODULE_10__.O),
/* harmony export */   W: () => (/* reexport safe */ _widget_widget_component__WEBPACK_IMPORTED_MODULE_12__.W),
/* harmony export */   WN: () => (/* reexport safe */ _info_block_info_block_module__WEBPACK_IMPORTED_MODULE_5__.W),
/* harmony export */   XC: () => (/* reexport safe */ _records_history_records_history_module__WEBPACK_IMPORTED_MODULE_11__.X),
/* harmony export */   YW: () => (/* reexport safe */ _concretes_contexts_layout_persistance_class__WEBPACK_IMPORTED_MODULE_0__.Y),
/* harmony export */   Ys: () => (/* reexport safe */ _widget_layout_widget_layout_component__WEBPACK_IMPORTED_MODULE_15__.Y),
/* harmony export */   ZU: () => (/* reexport safe */ _concretes_strategies_database_strategy_class__WEBPACK_IMPORTED_MODULE_3__.Z),
/* harmony export */   fT: () => (/* reexport safe */ _info_block_info_block_component__WEBPACK_IMPORTED_MODULE_4__.f),
/* harmony export */   gv: () => (/* reexport safe */ _concretes_contexts_persistance_class__WEBPACK_IMPORTED_MODULE_2__.g),
/* harmony export */   m: () => (/* reexport safe */ _profit_history_profit_history_component__WEBPACK_IMPORTED_MODULE_6__.m),
/* harmony export */   nd: () => (/* reexport safe */ _window_window_module__WEBPACK_IMPORTED_MODULE_18__.n),
/* harmony export */   rJ: () => (/* reexport safe */ _profit_history_table_components_income_table_component__WEBPACK_IMPORTED_MODULE_9__.r),
/* harmony export */   s7: () => (/* reexport safe */ _window_window_service__WEBPACK_IMPORTED_MODULE_19__.s),
/* harmony export */   ti: () => (/* reexport safe */ _profit_history_profit_history_module__WEBPACK_IMPORTED_MODULE_7__.t),
/* harmony export */   u: () => (/* reexport safe */ _concretes_contexts_persistance_takers_class__WEBPACK_IMPORTED_MODULE_1__.u)
/* harmony export */ });
/* harmony import */ var _concretes_contexts_layout_persistance_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50168);
/* harmony import */ var _concretes_contexts_persistance_takers_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(66126);
/* harmony import */ var _concretes_contexts_persistance_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22345);
/* harmony import */ var _concretes_strategies_database_strategy_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56366);
/* harmony import */ var _info_block_info_block_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(82912);
/* harmony import */ var _info_block_info_block_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(97935);
/* harmony import */ var _profit_history_profit_history_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(41674);
/* harmony import */ var _profit_history_profit_history_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(21949);
/* harmony import */ var _profit_history_table_components_expense_table_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(68192);
/* harmony import */ var _profit_history_table_components_income_table_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(45793);
/* harmony import */ var _records_history_records_history_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7390);
/* harmony import */ var _records_history_records_history_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(26769);
/* harmony import */ var _widget_widget_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(89824);
/* harmony import */ var _widget_widget_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(80367);
/* harmony import */ var _widget_widget_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(36376);
/* harmony import */ var _widget_layout_widget_layout_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(43138);
/* harmony import */ var _widget_layout_widget_layout_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(85797);
/* harmony import */ var _window_window_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(84984);
/* harmony import */ var _window_window_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(7991);
/* harmony import */ var _window_window_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(14096);
/* harmony import */ var _window_layout_window_layout_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(52146);
/* harmony import */ var _window_layout_window_layout_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(89429);























/***/ }),

/***/ 12717:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c_: () => (/* reexport safe */ _tags_mutation_component__WEBPACK_IMPORTED_MODULE_2__.c),
/* harmony export */   fw: () => (/* reexport safe */ _tags_mutation_module__WEBPACK_IMPORTED_MODULE_3__.f),
/* harmony export */   iK: () => (/* reexport safe */ _tags_color_input_tags_color_input_component__WEBPACK_IMPORTED_MODULE_0__.i),
/* harmony export */   xi: () => (/* reexport safe */ _tags_color_input_tags_color_input_module__WEBPACK_IMPORTED_MODULE_1__.x)
/* harmony export */ });
/* harmony import */ var _tags_color_input_tags_color_input_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62177);
/* harmony import */ var _tags_color_input_tags_color_input_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61444);
/* harmony import */ var _tags_mutation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(77627);
/* harmony import */ var _tags_mutation_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16602);





/***/ }),

/***/ 13214:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* reexport safe */ _gauzy_button_action_component__WEBPACK_IMPORTED_MODULE_0__.A),
/* harmony export */   N: () => (/* reexport safe */ _gauzy_button_action_module__WEBPACK_IMPORTED_MODULE_1__.N)
/* harmony export */ });
/* harmony import */ var _gauzy_button_action_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45293);
/* harmony import */ var _gauzy_button_action_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(60176);



/***/ }),

/***/ 13921:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   x: () => (/* reexport safe */ _language_utils__WEBPACK_IMPORTED_MODULE_0__.x)
/* harmony export */ });
/* harmony import */ var _language_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8539);


/***/ }),

/***/ 14625:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* reexport safe */ _danger_zone_mutation_module__WEBPACK_IMPORTED_MODULE_1__.B),
/* harmony export */   c: () => (/* reexport safe */ _danger_zone_mutation_danger_zone_mutation_component__WEBPACK_IMPORTED_MODULE_0__.c)
/* harmony export */ });
/* harmony import */ var _danger_zone_mutation_danger_zone_mutation_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22565);
/* harmony import */ var _danger_zone_mutation_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78883);



/***/ }),

/***/ 15021:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Bd: () => (/* reexport safe */ _select_asset_module__WEBPACK_IMPORTED_MODULE_3__.B),
/* harmony export */   Hf: () => (/* reexport safe */ _img_preview_img_preview_component__WEBPACK_IMPORTED_MODULE_1__.H),
/* harmony export */   Kk: () => (/* reexport safe */ _img_asset_img_asset_component__WEBPACK_IMPORTED_MODULE_0__.K),
/* harmony export */   ah: () => (/* reexport safe */ _select_asset_component__WEBPACK_IMPORTED_MODULE_2__.a)
/* harmony export */ });
/* harmony import */ var _img_asset_img_asset_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(55063);
/* harmony import */ var _img_preview_img_preview_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(90523);
/* harmony import */ var _select_asset_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26161);
/* harmony import */ var _select_asset_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5844);





/***/ }),

/***/ 16532:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $W: () => (/* reexport safe */ _employee_end_work_popup_employee_end_work_module__WEBPACK_IMPORTED_MODULE_3__.$),
/* harmony export */   Am: () => (/* reexport safe */ _employee_end_work_popup_employee_end_work_component__WEBPACK_IMPORTED_MODULE_2__.A),
/* harmony export */   CH: () => (/* reexport safe */ _edit_employee_membership_form_edit_employee_membership_form_component__WEBPACK_IMPORTED_MODULE_0__.C),
/* harmony export */   HV: () => (/* reexport safe */ _employee_location_employee_location_component__WEBPACK_IMPORTED_MODULE_4__.H),
/* harmony export */   HX: () => (/* reexport safe */ _employee_start_work_employee_start_work_component__WEBPACK_IMPORTED_MODULE_12__.H),
/* harmony export */   I6: () => (/* reexport safe */ _employee_multi_select_employee_multi_select_module__WEBPACK_IMPORTED_MODULE_7__.I),
/* harmony export */   Kn: () => (/* reexport safe */ _employee_location_employee_location_module__WEBPACK_IMPORTED_MODULE_5__.K),
/* harmony export */   Md: () => (/* reexport safe */ _employee_rates_employee_rates_module__WEBPACK_IMPORTED_MODULE_11__.M),
/* harmony export */   Ow: () => (/* reexport safe */ _employee_multi_select_employee_multi_select_component__WEBPACK_IMPORTED_MODULE_6__.O),
/* harmony export */   P9: () => (/* reexport safe */ _employee_mutation_employee_mutation_component__WEBPACK_IMPORTED_MODULE_8__.P),
/* harmony export */   Qw: () => (/* reexport safe */ _employee_start_work_employee_start_work_module__WEBPACK_IMPORTED_MODULE_13__.Q),
/* harmony export */   V9: () => (/* reexport safe */ _employee_rates_employee_rates_component__WEBPACK_IMPORTED_MODULE_10__.V),
/* harmony export */   j6: () => (/* reexport safe */ _edit_employee_membership_form_edit_employee_membership_form_module__WEBPACK_IMPORTED_MODULE_1__.j),
/* harmony export */   k_: () => (/* reexport safe */ _employee_mutation_employee_mutation_module__WEBPACK_IMPORTED_MODULE_9__.k)
/* harmony export */ });
/* harmony import */ var _edit_employee_membership_form_edit_employee_membership_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41762);
/* harmony import */ var _edit_employee_membership_form_edit_employee_membership_form_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(66277);
/* harmony import */ var _employee_end_work_popup_employee_end_work_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59230);
/* harmony import */ var _employee_end_work_popup_employee_end_work_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8116);
/* harmony import */ var _employee_location_employee_location_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(95934);
/* harmony import */ var _employee_location_employee_location_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(66609);
/* harmony import */ var _employee_multi_select_employee_multi_select_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(57354);
/* harmony import */ var _employee_multi_select_employee_multi_select_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6269);
/* harmony import */ var _employee_mutation_employee_mutation_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(49362);
/* harmony import */ var _employee_mutation_employee_mutation_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(43125);
/* harmony import */ var _employee_rates_employee_rates_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(83108);
/* harmony import */ var _employee_rates_employee_rates_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(28195);
/* harmony import */ var _employee_start_work_employee_start_work_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(87494);
/* harmony import */ var _employee_start_work_employee_start_work_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(38249);















/***/ }),

/***/ 17087:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   l: () => (/* binding */ TrustHtmlLinkComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _pipes_text_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43826);


let TrustHtmlLinkComponent = /*#__PURE__*/(() => {
  class TrustHtmlLinkComponent {
    static {
      this.ɵfac = function TrustHtmlLinkComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || TrustHtmlLinkComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: TrustHtmlLinkComponent,
        selectors: [["ngx-security-trust-html"]],
        inputs: {
          value: "value",
          rowData: "rowData"
        },
        standalone: false,
        decls: 2,
        vars: 3,
        consts: [[3, "innerHTML"]],
        template: function TrustHtmlLinkComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(0, "p", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(1, "nl2br");
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(1, 1, ctx.value), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵsanitizeHtml"] */ .npT);
          }
        },
        dependencies: [_pipes_text_pipe__WEBPACK_IMPORTED_MODULE_1__/* .Nl2BrPipe */ .V],
        encapsulation: 2
      });
    }
  }
  return TrustHtmlLinkComponent;
})();

/***/ }),

/***/ 17124:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AS: () => (/* reexport safe */ _dynamic_tabs_dynamic_tabs_module__WEBPACK_IMPORTED_MODULE_12__.A),
/* harmony export */   DG: () => (/* reexport safe */ _date_range_title_date_range_title_component__WEBPACK_IMPORTED_MODULE_6__.D),
/* harmony export */   HT: () => (/* reexport safe */ _badge_label_badge_label_component__WEBPACK_IMPORTED_MODULE_4__.H),
/* harmony export */   Ll: () => (/* reexport safe */ _popup_popup_component__WEBPACK_IMPORTED_MODULE_9__.L),
/* harmony export */   X9: () => (/* reexport safe */ _header_title_header_title_component__WEBPACK_IMPORTED_MODULE_7__.X),
/* harmony export */   XF: () => (/* reexport safe */ _components_module__WEBPACK_IMPORTED_MODULE_0__.X),
/* harmony export */   ZS: () => (/* reexport safe */ _alert_modal_alert_modal_component__WEBPACK_IMPORTED_MODULE_1__.Z),
/* harmony export */   be: () => (/* reexport safe */ _dashboard_skeleton_dashboard_skeleton_component__WEBPACK_IMPORTED_MODULE_5__.b),
/* harmony export */   dm: () => (/* reexport safe */ _dynamic_tabs_dynamic_tabs_component__WEBPACK_IMPORTED_MODULE_11__.d),
/* harmony export */   ds: () => (/* reexport safe */ _layout_selector_layout_selector_component__WEBPACK_IMPORTED_MODULE_8__.d),
/* harmony export */   fw: () => (/* reexport safe */ _avatar_avatar_component__WEBPACK_IMPORTED_MODULE_2__.f),
/* harmony export */   hI: () => (/* reexport safe */ _components_module__WEBPACK_IMPORTED_MODULE_0__.h),
/* harmony export */   i5: () => (/* reexport safe */ _search_input_search_input_component__WEBPACK_IMPORTED_MODULE_10__.i),
/* harmony export */   ro: () => (/* reexport safe */ _back_navigation_back_navigation_component__WEBPACK_IMPORTED_MODULE_3__.r)
/* harmony export */ });
/* harmony import */ var _components_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87466);
/* harmony import */ var _alert_modal_alert_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52742);
/* harmony import */ var _avatar_avatar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32386);
/* harmony import */ var _back_navigation_back_navigation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(90910);
/* harmony import */ var _badge_label_badge_label_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(31170);
/* harmony import */ var _dashboard_skeleton_dashboard_skeleton_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(73120);
/* harmony import */ var _date_range_title_date_range_title_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2538);
/* harmony import */ var _header_title_header_title_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(49072);
/* harmony import */ var _layout_selector_layout_selector_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(51102);
/* harmony import */ var _popup_popup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2242);
/* harmony import */ var _search_input_search_input_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(26890);
/* harmony import */ var _dynamic_tabs_dynamic_tabs_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(90628);
/* harmony import */ var _dynamic_tabs_dynamic_tabs_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(44944);














/***/ }),

/***/ 17323:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ generatePdf)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73014);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63570);


function generatePdf(_x, _x2, _x3, _x4, _x5) {
  return _generatePdf.apply(this, arguments);
}
function _generatePdf() {
  _generatePdf = (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(function* (invoice, organization, organizationContact, service, translatedText) {
    const body = [];
    for (const item of invoice.invoiceItems) {
      let currentItem = [];
      switch (invoice.invoiceType) {
        case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__/* .InvoiceTypeEnum */ .RU.BY_EMPLOYEE_HOURS:
          const employee = yield service.getEmployeeById(item.employeeId, ['user']);
          currentItem = [`${employee.user.firstName} ${employee.user.lastName}`, `${item.description}`, `${item.quantity}`, `${invoice.currency} ${item.price}`, `${invoice.currency} ${item.totalValue}`];
          break;
        case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__/* .InvoiceTypeEnum */ .RU.BY_PROJECT_HOURS:
          const project = yield service.getById(item.projectId);
          currentItem = [`${project.name}`, `${item.description}`, `${item.quantity}`, `${invoice.currency} ${item.price}`, `${invoice.currency} ${item.totalValue}`];
          break;
        case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__/* .InvoiceTypeEnum */ .RU.BY_TASK_HOURS:
          const task = yield service.getById(item.taskId);
          currentItem = [`${task.title}`, `${item.description}`, `${item.quantity}`, `${invoice.currency} ${item.price}`, `${invoice.currency} ${item.totalValue}`];
          break;
        case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__/* .InvoiceTypeEnum */ .RU.BY_PRODUCTS:
          const product = yield service.getById(item.productId);
          currentItem = [`${product.name}`, `${item.description}`, `${item.quantity}`, `${invoice.currency} ${item.price}`, `${invoice.currency} ${item.totalValue}`];
          break;
        case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__/* .InvoiceTypeEnum */ .RU.BY_EXPENSES:
          const expense = yield service.getById(item.expenseId);
          currentItem = [`${expense.purpose}`, `${item.description}`, `${item.quantity}`, `${invoice.currency} ${item.price}`, `${invoice.currency} ${item.totalValue}`];
          break;
        default:
          break;
      }
      body.push(currentItem);
    }
    let widths;
    let tableHeader;
    if (invoice.invoiceType === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__/* .InvoiceTypeEnum */ .RU.DETAILED_ITEMS) {
      widths = ['25%', '25%', '25%', '25%'];
      tableHeader = [translatedText.description, translatedText.quantity, translatedText.price, translatedText.totalValue];
    } else {
      widths = ['20%', '20%', '20%', '20%', '20%'];
      tableHeader = [translatedText.item, translatedText.description, translatedText.quantity, translatedText.price, translatedText.totalValue];
    }
    const docDefinition = {
      content: [{
        columns: [{
          width: '*',
          text: `${invoice.isEstimate ? translatedText.estimate : translatedText.invoice} ${translatedText.number}: ${invoice.invoiceNumber}`
        }]
      }, ' ', ' ', {
        columns: [{
          width: '50%',
          text: `${translatedText.from}: ${organization.name}`
        }, {
          width: '50%',
          text: `${translatedText.to}: ${organizationContact.name}`
        }]
      }, ' ', ' ', {
        columns: [{
          width: '50%',
          text: `${invoice.isEstimate ? translatedText.estimate : translatedText.invoice} ${translatedText.date}: ${invoice.invoiceDate.toString().slice(0, 10)}`
        }, {
          width: '50%',
          text: `${translatedText.dueDate}: ${invoice.dueDate.toString().slice(0, 10)}`
        }]
      }, ' ', ' ', {
        columns: [{
          width: '50%',
          text: `${translatedText.discountValue}: ${invoice.discountValue}`
        }, {
          width: '50%',
          text: `${translatedText.discountType}: ${invoice.discountType}`
        }]
      }, ' ', ' ', {
        columns: [{
          width: '50%',
          text: `${translatedText.taxValue}: ${invoice.tax}`
        }, {
          width: '50%',
          text: `${translatedText.taxType}: ${invoice.taxType}`
        }]
      }, ' ', ' ', {
        columns: [{
          width: '50%',
          text: `${translatedText.totalValue}: ${invoice.currency} ${invoice.totalValue}`
        }, {
          width: '50%',
          text: `${translatedText.currency}: ${invoice.currency}`
        }]
      }, invoice.hasRemainingAmountInvoiced ? ' ' : '', invoice.hasRemainingAmountInvoiced ? ' ' : '', {
        columns: invoice.hasRemainingAmountInvoiced ? [{
          width: '50%',
          text: `${translatedText.alreadyPaid}: ${invoice.currency} ${invoice.alreadyPaid}`
        }, {
          width: '50%',
          text: `${translatedText.amountDue}: ${invoice.currency} ${invoice.amountDue}`
        }] : []
      }, ' ', ' ', `${translatedText.paid}: ${invoice.paid ? translatedText.yes : translatedText.no}`, ' ', ' ', `${translatedText.terms}: ${invoice.terms}`, ' ', ' ', {
        table: {
          widths: widths,
          body: [tableHeader, ...body]
        }
      }]
    };
    return docDefinition;
  });
  return _generatePdf.apply(this, arguments);
}

/***/ }),

/***/ 17887:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ab: () => (/* reexport safe */ _visibility_visibility_component__WEBPACK_IMPORTED_MODULE_41__.A),
/* harmony export */   Cx: () => (/* reexport safe */ _email_email_component__WEBPACK_IMPORTED_MODULE_14__.C),
/* harmony export */   EG: () => (/* reexport safe */ _clickable_link_clickable_link_component__WEBPACK_IMPORTED_MODULE_2__.E),
/* harmony export */   FE: () => (/* reexport safe */ _tags_only_tags_only_component__WEBPACK_IMPORTED_MODULE_35__.F),
/* harmony export */   Fk: () => (/* reexport safe */ _toggle_switcher_toggle_switcher_component__WEBPACK_IMPORTED_MODULE_38__.F),
/* harmony export */   GN: () => (/* reexport safe */ _github_resync_button_resync_button_component__WEBPACK_IMPORTED_MODULE_21__.G),
/* harmony export */   H8: () => (/* reexport safe */ _editors_non_editable_number_editor_component__WEBPACK_IMPORTED_MODULE_42__.H),
/* harmony export */   IU: () => (/* reexport safe */ _document_url_document_url_component__WEBPACK_IMPORTED_MODULE_10__.I),
/* harmony export */   JA: () => (/* reexport safe */ _editors_job_search_availability_editor_component__WEBPACK_IMPORTED_MODULE_13__.J),
/* harmony export */   Jb: () => (/* reexport safe */ _employees_merged_teams_employees_merged_teams_component__WEBPACK_IMPORTED_MODULE_17__.J),
/* harmony export */   Lc: () => (/* reexport safe */ _contact_links_contact_links_component__WEBPACK_IMPORTED_MODULE_4__.L),
/* harmony export */   M9: () => (/* reexport safe */ _github_issue_title_description_issue_title_description_component__WEBPACK_IMPORTED_MODULE_19__.M),
/* harmony export */   N2: () => (/* reexport safe */ _status_view_status_view_component__WEBPACK_IMPORTED_MODULE_34__.N),
/* harmony export */   Oh: () => (/* reexport safe */ _picture_name_tags_picture_name_tags_component__WEBPACK_IMPORTED_MODULE_27__.O),
/* harmony export */   PT: () => (/* reexport safe */ _contact_with_tags_contact_with_tags_component__WEBPACK_IMPORTED_MODULE_5__.P),
/* harmony export */   Ph: () => (/* reexport safe */ _external_link_external_link_component__WEBPACK_IMPORTED_MODULE_18__.P),
/* harmony export */   QM: () => (/* reexport safe */ _organization_with_tags_organization_with_tags_component__WEBPACK_IMPORTED_MODULE_25__.Q),
/* harmony export */   Te: () => (/* reexport safe */ _phone_url_phone_url_component__WEBPACK_IMPORTED_MODULE_26__.T),
/* harmony export */   Wg: () => (/* reexport safe */ _project_organization_project_organization_component__WEBPACK_IMPORTED_MODULE_31__.W),
/* harmony export */   X5: () => (/* reexport safe */ _created_at_created_at_component__WEBPACK_IMPORTED_MODULE_7__.X),
/* harmony export */   aY: () => (/* reexport safe */ _role_role_component__WEBPACK_IMPORTED_MODULE_33__.a),
/* harmony export */   f8: () => (/* reexport safe */ _value_with_units_value_with_units_component__WEBPACK_IMPORTED_MODULE_40__.f),
/* harmony export */   fH: () => (/* reexport safe */ _task_teams_task_teams_component__WEBPACK_IMPORTED_MODULE_37__.f),
/* harmony export */   hI: () => (/* reexport safe */ _github_repository_repository_component__WEBPACK_IMPORTED_MODULE_20__.h),
/* harmony export */   hR: () => (/* reexport safe */ _document_date_document_date_component__WEBPACK_IMPORTED_MODULE_9__.h),
/* harmony export */   iz: () => (/* reexport safe */ _notes_with_tags_notes_with_tags_component__WEBPACK_IMPORTED_MODULE_24__.i),
/* harmony export */   jD: () => (/* reexport safe */ _employee_with_links_employee_with_links_component__WEBPACK_IMPORTED_MODULE_16__.j),
/* harmony export */   jV: () => (/* reexport safe */ _income_amount_income_amount_component__WEBPACK_IMPORTED_MODULE_22__.j),
/* harmony export */   kW: () => (/* reexport safe */ _company_logo_company_logo_component__WEBPACK_IMPORTED_MODULE_3__.k),
/* harmony export */   lR: () => (/* reexport safe */ _trust_html_trust_html_component__WEBPACK_IMPORTED_MODULE_39__.l),
/* harmony export */   ln: () => (/* reexport safe */ _date_view_date_view_component__WEBPACK_IMPORTED_MODULE_8__.l),
/* harmony export */   pP: () => (/* reexport safe */ _table_components_module__WEBPACK_IMPORTED_MODULE_43__.p),
/* harmony export */   qQ: () => (/* reexport safe */ _created_by_created_by_user_component__WEBPACK_IMPORTED_MODULE_6__.q),
/* harmony export */   rm: () => (/* reexport safe */ _allow_screenshot_capture_allow_screenshot_capture_component__WEBPACK_IMPORTED_MODULE_0__.r),
/* harmony export */   s8: () => (/* reexport safe */ _invoice_total_value_invoice_total_value_component__WEBPACK_IMPORTED_MODULE_23__.s),
/* harmony export */   sH: () => (/* reexport safe */ _project_organization_grid_project_organization_grid_component__WEBPACK_IMPORTED_MODULE_30__.s),
/* harmony export */   tR: () => (/* reexport safe */ _editors_employee_link_editor_component__WEBPACK_IMPORTED_MODULE_12__.t),
/* harmony export */   tm: () => (/* reexport safe */ _project_organization_employees_project_organization_employees_component__WEBPACK_IMPORTED_MODULE_28__.t),
/* harmony export */   to: () => (/* reexport safe */ _project_project_component__WEBPACK_IMPORTED_MODULE_32__.t),
/* harmony export */   vI: () => (/* reexport safe */ _assigned_to_assigned_to_component__WEBPACK_IMPORTED_MODULE_1__.v),
/* harmony export */   vb: () => (/* reexport safe */ _task_estimate_task_estimate_component__WEBPACK_IMPORTED_MODULE_36__.v),
/* harmony export */   wt: () => (/* reexport safe */ _project_organization_grid_details_project_organization_grid_details_component__WEBPACK_IMPORTED_MODULE_29__.w),
/* harmony export */   yo: () => (/* reexport safe */ _editors_number_editor_component__WEBPACK_IMPORTED_MODULE_11__.y),
/* harmony export */   zx: () => (/* reexport safe */ _employee_links_employee_links_component__WEBPACK_IMPORTED_MODULE_15__.z)
/* harmony export */ });
/* harmony import */ var _allow_screenshot_capture_allow_screenshot_capture_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91137);
/* harmony import */ var _assigned_to_assigned_to_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9453);
/* harmony import */ var _clickable_link_clickable_link_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6313);
/* harmony import */ var _company_logo_company_logo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(84621);
/* harmony import */ var _contact_links_contact_links_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(55129);
/* harmony import */ var _contact_with_tags_contact_with_tags_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(80801);
/* harmony import */ var _created_by_created_by_user_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(13845);
/* harmony import */ var _created_at_created_at_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(13715);
/* harmony import */ var _date_view_date_view_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(47825);
/* harmony import */ var _document_date_document_date_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(79289);
/* harmony import */ var _document_url_document_url_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(47301);
/* harmony import */ var _editors_number_editor_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(34362);
/* harmony import */ var _editors_employee_link_editor_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(19774);
/* harmony import */ var _editors_job_search_availability_editor_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(13409);
/* harmony import */ var _email_email_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(20873);
/* harmony import */ var _employee_links_employee_links_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(91439);
/* harmony import */ var _employee_with_links_employee_with_links_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(39457);
/* harmony import */ var _employees_merged_teams_employees_merged_teams_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(23249);
/* harmony import */ var _external_link_external_link_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(71021);
/* harmony import */ var _github_issue_title_description_issue_title_description_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(38721);
/* harmony import */ var _github_repository_repository_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(22339);
/* harmony import */ var _github_resync_button_resync_button_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(34269);
/* harmony import */ var _income_amount_income_amount_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(28005);
/* harmony import */ var _invoice_total_value_invoice_total_value_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(70793);
/* harmony import */ var _notes_with_tags_notes_with_tags_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(33829);
/* harmony import */ var _organization_with_tags_organization_with_tags_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(41639);
/* harmony import */ var _phone_url_phone_url_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(31693);
/* harmony import */ var _picture_name_tags_picture_name_tags_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(76229);
/* harmony import */ var _project_organization_employees_project_organization_employees_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(51681);
/* harmony import */ var _project_organization_grid_details_project_organization_grid_details_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(41809);
/* harmony import */ var _project_organization_grid_project_organization_grid_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(63861);
/* harmony import */ var _project_organization_project_organization_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(28633);
/* harmony import */ var _project_project_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(27985);
/* harmony import */ var _role_role_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(53291);
/* harmony import */ var _status_view_status_view_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(35657);
/* harmony import */ var _tags_only_tags_only_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(91045);
/* harmony import */ var _task_estimate_task_estimate_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(45657);
/* harmony import */ var _task_teams_task_teams_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(13015);
/* harmony import */ var _toggle_switcher_toggle_switcher_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(77485);
/* harmony import */ var _trust_html_trust_html_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(17087);
/* harmony import */ var _value_with_units_value_with_units_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(96419);
/* harmony import */ var _visibility_visibility_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(93363);
/* harmony import */ var _editors_non_editable_number_editor_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(12109);
/* harmony import */ var _table_components_module__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(57832);











































// Export the table components main module


/***/ }),

/***/ 18131:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Y: () => (/* binding */ EquipmentSharingPolicyMutationModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14572);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10936);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(56383);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(55567);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(19223);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34946);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);








let EquipmentSharingPolicyMutationModule = /*#__PURE__*/(() => {
  class EquipmentSharingPolicyMutationModule {
    static {
      this.ɵfac = function EquipmentSharingPolicyMutationModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || EquipmentSharingPolicyMutationModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .$C({
        type: EquipmentSharingPolicyMutationModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .G2t({
        providers: [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_1__/* .EquipmentSharingPolicyService */ .i],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__/* .CommonModule */ .MD, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .FormsModule */ .YN, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .ReactiveFormsModule */ .X1, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbCardModule */ .lVF, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbIconModule */ .clu, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbCheckboxModule */ .Ad8, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbButtonModule */ .P5N, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbInputModule */ .pty, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbSelectModule */ .VcP, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbRadioModule */ .iyp, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__/* .NgSelectModule */ .MQ, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__/* .TranslateModule */ .h.forChild()]
      });
    }
  }
  return EquipmentSharingPolicyMutationModule;
})();

/***/ }),

/***/ 21850:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: () => (/* reexport safe */ _contact_selector_component__WEBPACK_IMPORTED_MODULE_0__.N),
/* harmony export */   q: () => (/* reexport safe */ _contact_selector_module__WEBPACK_IMPORTED_MODULE_1__.q)
/* harmony export */ });
/* harmony import */ var _contact_selector_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90975);
/* harmony import */ var _contact_selector_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4222);



/***/ }),

/***/ 22339:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   h: () => (/* binding */ GithubRepositoryComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _directives_img_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71466);


let GithubRepositoryComponent = /*#__PURE__*/(() => {
  class GithubRepositoryComponent {
    constructor() {}
    ngOnInit() {}
    static {
      this.ɵfac = function GithubRepositoryComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || GithubRepositoryComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: GithubRepositoryComponent,
        selectors: [["ngx-github-repository"]],
        inputs: {
          value: "value",
          rowData: "rowData"
        },
        standalone: false,
        decls: 5,
        vars: 1,
        consts: [[1, "repository-render"], ["src", "assets/images/integrations/github.svg"], [1, "name"]],
        template: function GithubRepositoryComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "img", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(2, "span")(3, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(ctx.rowData == null ? null : ctx.rowData.customFields == null ? null : ctx.rowData.customFields.repository == null ? null : ctx.rowData.customFields.repository.fullName);
          }
        },
        dependencies: [_directives_img_directive__WEBPACK_IMPORTED_MODULE_1__/* .ImgDirective */ .z],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.repository-render[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: flex-start;\n  gap: 10px;\n}\n.repository-render[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: nb-theme(border-radius);\n  box-shadow: var(--gauzy-shadow);\n  object-fit: cover;\n}\n.repository-render[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  color: var(--gauzy-text-color-1);\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 17px;\n  letter-spacing: 0em;\n}"]
      });
    }
  }
  return GithubRepositoryComponent;
})();

/***/ }),

/***/ 22565:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ DangerZoneMutationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26860);
/* harmony import */ var _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38546);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19223);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56383);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(15480);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10936);










const _c0 = a0 => ({
  type: a0
});
let DangerZoneMutationComponent = /*#__PURE__*/(() => {
  class DangerZoneMutationComponent extends _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_0__/* .TranslationBaseComponent */ .K {
    constructor(translate, dialogRef, toastrService) {
      super(translate);
      this.translate = translate;
      this.dialogRef = dialogRef;
      this.toastrService = toastrService;
      this.emitData = new _angular_core__WEBPACK_IMPORTED_MODULE_1__/* .EventEmitter */ .bkB();
    }
    close() {
      this.dialogRef.close();
    }
    sendData() {
      this.emitData.emit(this.data);
    }
    delete() {
      if (this.data === this.recordType) {
        this.dialogRef.close('ok');
      } else {
        this.toastrService.danger('NOTES.DANGER_ZONE.WRONG_INPUT_DATA');
      }
    }
    static {
      this.ɵfac = function DangerZoneMutationComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || DangerZoneMutationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__/* .TranslateService */ .c$), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbDialogRef */ .ybQ), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_4__/* .ToastrService */ .t));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineComponent"] */ .VBU({
        type: DangerZoneMutationComponent,
        selectors: [["ga-danger-zone-mutation"]],
        outputs: {
          emitData: "emitData"
        },
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
        decls: 21,
        vars: 17,
        consts: [[1, "center"], ["type", "text", 1, "form-control", "border", "border-danger", 3, "ngModelChange", "input", "ngModel"], ["status", "danger", "nbButton", "", 1, "mr-3", 3, "click"], ["status", "info", "nbButton", "", 3, "click"]],
        template: function DangerZoneMutationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "nb-card", 0)(1, "nb-card-header")(2, "h6");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(4, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(5, "nb-card-body")(6, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(8, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(10, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(11, "br")(12, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(13, "input", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtwoWayListener"] */ .mxI("ngModelChange", function DangerZoneMutationComponent_Template_input_ngModelChange_13_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtwoWayBindingSet"] */ .DH7(ctx.data, $event) || (ctx.data = $event);
              return $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("input", function DangerZoneMutationComponent_Template_input_input_13_listener() {
              return ctx.sendData();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(14, "nb-card-footer")(15, "button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("click", function DangerZoneMutationComponent_Template_button_click_15_listener() {
              return ctx.delete();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(17, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(18, "button", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("click", function DangerZoneMutationComponent_Template_button_click_18_listener() {
              return ctx.close();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(19);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(20, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(4, 6, "FORM.CONFIRM"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", ctx.title, " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind2"] */ .i5U(10, 8, "NOTES.DANGER_ZONE.RECORD_TYPE", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpureFunction1"] */ .eq3(15, _c0, ctx.recordType)), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtwoWayProperty"] */ .R50("ngModel", ctx.data);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(17, 11, "BUTTONS.OK"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(20, 13, "BUTTONS.CANCEL"), " ");
          }
        },
        dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .DefaultValueAccessor */ .me, _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .NgControlStatus */ .BC, _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .NgModel */ .vS, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbButtonComponent */ .YP2, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbCardComponent */ .SrT, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbCardBodyComponent */ .KH5, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbCardFooterComponent */ .VDm, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbCardHeaderComponent */ .zJv, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__/* .TranslatePipe */ .D9],
        styles: ["span[_ngcontent-%COMP%] {\n  color: red;\n}\n\nnb-card[_ngcontent-%COMP%] {\n  border: 1px solid red;\n}\n\nnb-card-body[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.center[_ngcontent-%COMP%] {\n  align-items: center;\n  width: 500px;\n}"]
      });
    }
  }
  return DangerZoneMutationComponent;
})();

/***/ }),

/***/ 23425:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HO: () => (/* reexport safe */ _time_off_holiday_mutation_time_off_holiday_mutation_component__WEBPACK_IMPORTED_MODULE_1__.H),
/* harmony export */   IG: () => (/* reexport safe */ _settings_mutation_time_off_settings_mutation_component__WEBPACK_IMPORTED_MODULE_0__.I),
/* harmony export */   IM: () => (/* reexport safe */ _time_off_mutation_module__WEBPACK_IMPORTED_MODULE_2__.I),
/* harmony export */   NH: () => (/* reexport safe */ _time_off_policy_select_time_off_policy_select_module__WEBPACK_IMPORTED_MODULE_4__.N),
/* harmony export */   WC: () => (/* reexport safe */ _time_off_request_mutation_time_off_request_mutation_component__WEBPACK_IMPORTED_MODULE_5__.W),
/* harmony export */   ax: () => (/* reexport safe */ _time_off_policy_select_time_off_policy_select_component__WEBPACK_IMPORTED_MODULE_3__.a)
/* harmony export */ });
/* harmony import */ var _settings_mutation_time_off_settings_mutation_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(99823);
/* harmony import */ var _time_off_holiday_mutation_time_off_holiday_mutation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70999);
/* harmony import */ var _time_off_mutation_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1870);
/* harmony import */ var _time_off_policy_select_time_off_policy_select_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(31675);
/* harmony import */ var _time_off_policy_select_time_off_policy_select_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(23226);
/* harmony import */ var _time_off_request_mutation_time_off_request_mutation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(89019);







/***/ }),

/***/ 25230:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   YZ: () => (/* reexport safe */ _team_default_team__WEBPACK_IMPORTED_MODULE_0__.Y),
/* harmony export */   iQ: () => (/* reexport safe */ _team_module__WEBPACK_IMPORTED_MODULE_2__.i),
/* harmony export */   sV: () => (/* reexport safe */ _team_team_component__WEBPACK_IMPORTED_MODULE_1__.s)
/* harmony export */ });
/* harmony import */ var _team_default_team__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12769);
/* harmony import */ var _team_team_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42148);
/* harmony import */ var _team_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(72943);




/***/ }),

/***/ 25293:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Hp: () => (/* reexport safe */ _smart_data_view_layout_module__WEBPACK_IMPORTED_MODULE_0__.H),
/* harmony export */   _: () => (/* reexport safe */ _no_data_message_no_data_message_component__WEBPACK_IMPORTED_MODULE_2__._),
/* harmony export */   aS: () => (/* reexport safe */ _pagination_pagination_v2_pagination_v2_component__WEBPACK_IMPORTED_MODULE_5__.a),
/* harmony export */   eK: () => (/* reexport safe */ _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_3__.e),
/* harmony export */   j7: () => (/* reexport safe */ _no_data_message_no_data_message_module__WEBPACK_IMPORTED_MODULE_1__.j),
/* harmony export */   tI: () => (/* reexport safe */ _pagination_pagination_filter_base_component__WEBPACK_IMPORTED_MODULE_4__.t)
/* harmony export */ });
/* harmony import */ var _smart_data_view_layout_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98722);
/* harmony import */ var _no_data_message_no_data_message_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59238);
/* harmony import */ var _no_data_message_no_data_message_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(95959);
/* harmony import */ var _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(81073);
/* harmony import */ var _pagination_pagination_filter_base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(47108);
/* harmony import */ var _pagination_pagination_v2_pagination_v2_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3456);
// Modules


// Components





/***/ }),

/***/ 27564:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K$: () => (/* reexport safe */ _project_module_table_project_module_table_module__WEBPACK_IMPORTED_MODULE_3__.K),
/* harmony export */   gH: () => (/* reexport safe */ _project_module_mutation_project_module_mutation_component__WEBPACK_IMPORTED_MODULE_0__.g),
/* harmony export */   vD: () => (/* reexport safe */ _project_module_mutation_project_module_mutation_module__WEBPACK_IMPORTED_MODULE_1__.v),
/* harmony export */   zT: () => (/* reexport safe */ _project_module_table_project_module_table_component__WEBPACK_IMPORTED_MODULE_2__.z)
/* harmony export */ });
/* harmony import */ var _project_module_mutation_project_module_mutation_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28722);
/* harmony import */ var _project_module_mutation_project_module_mutation_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87605);
/* harmony import */ var _project_module_table_project_module_table_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38226);
/* harmony import */ var _project_module_table_project_module_table_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21781);





/***/ }),

/***/ 28458:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* reexport safe */ _edit_time_log_modal_module__WEBPACK_IMPORTED_MODULE_1__.H),
/* harmony export */   c: () => (/* reexport safe */ _edit_time_log_modal_component__WEBPACK_IMPORTED_MODULE_0__.c)
/* harmony export */ });
/* harmony import */ var _edit_time_log_modal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15774);
/* harmony import */ var _edit_time_log_modal_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57201);



/***/ }),

/***/ 28971:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   k: () => (/* reexport safe */ _gauzy_editable_grid_component__WEBPACK_IMPORTED_MODULE_0__.k),
/* harmony export */   x: () => (/* reexport safe */ _gauzy_editable_grid_module__WEBPACK_IMPORTED_MODULE_1__.x)
/* harmony export */ });
/* harmony import */ var _gauzy_editable_grid_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29350);
/* harmony import */ var _gauzy_editable_grid_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6761);



/***/ }),

/***/ 29206:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* binding */ ApprovalPolicyMutationModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14572);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10936);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(56383);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(55567);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(19223);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31144);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71924);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);









let ApprovalPolicyMutationModule = /*#__PURE__*/(() => {
  class ApprovalPolicyMutationModule {
    static {
      this.ɵfac = function ApprovalPolicyMutationModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || ApprovalPolicyMutationModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .$C({
        type: ApprovalPolicyMutationModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .G2t({
        providers: [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_1__/* .ApprovalPolicyService */ .b, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_2__/* .Store */ .il],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__/* .CommonModule */ .MD, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .FormsModule */ .YN, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .ReactiveFormsModule */ .X1, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbCardModule */ .lVF, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbIconModule */ .clu, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbCheckboxModule */ .Ad8, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbButtonModule */ .P5N, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbInputModule */ .pty, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbSelectModule */ .VcP, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbRadioModule */ .iyp, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__/* .NgSelectModule */ .MQ, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__/* .TranslateModule */ .h.forChild()]
      });
    }
  }
  return ApprovalPolicyMutationModule;
})();

/***/ }),

/***/ 29387:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F7: () => (/* reexport safe */ _timezone_filter__WEBPACK_IMPORTED_MODULE_3__.F7),
/* harmony export */   FQ: () => (/* reexport safe */ _timezone_filter__WEBPACK_IMPORTED_MODULE_3__.FQ),
/* harmony export */   GY: () => (/* reexport safe */ _timezone_filter__WEBPACK_IMPORTED_MODULE_3__.GY),
/* harmony export */   Q7: () => (/* reexport safe */ _gauzy_filters_module__WEBPACK_IMPORTED_MODULE_2__.Q),
/* harmony export */   UO: () => (/* reexport safe */ _base_selector_filter_base_selector_filter_component__WEBPACK_IMPORTED_MODULE_0__.U),
/* harmony export */   no: () => (/* reexport safe */ _gauzy_filters_component__WEBPACK_IMPORTED_MODULE_1__.n)
/* harmony export */ });
/* harmony import */ var _base_selector_filter_base_selector_filter_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46915);
/* harmony import */ var _gauzy_filters_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(60166);
/* harmony import */ var _gauzy_filters_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(61801);
/* harmony import */ var _timezone_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(66540);





/***/ }),

/***/ 29678:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   h: () => (/* reexport safe */ _skills_input_skills_input_module__WEBPACK_IMPORTED_MODULE_1__.h),
/* harmony export */   o: () => (/* reexport safe */ _skills_input_skills_input_component__WEBPACK_IMPORTED_MODULE_0__.o)
/* harmony export */ });
/* harmony import */ var _skills_input_skills_input_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63592);
/* harmony import */ var _skills_input_skills_input_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72391);



/***/ }),

/***/ 30457:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* reexport safe */ _language_selector_module__WEBPACK_IMPORTED_MODULE_1__.A),
/* harmony export */   t: () => (/* reexport safe */ _language_selector_component__WEBPACK_IMPORTED_MODULE_0__.t)
/* harmony export */ });
/* harmony import */ var _language_selector_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12624);
/* harmony import */ var _language_selector_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59743);



/***/ }),

/***/ 31693:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ PhoneUrlComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);

let PhoneUrlComponent = /*#__PURE__*/(() => {
  class PhoneUrlComponent {
    constructor() {}
    static {
      this.ɵfac = function PhoneUrlComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || PhoneUrlComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: PhoneUrlComponent,
        selectors: [["ga-phone-url"]],
        inputs: {
          value: "value",
          rowData: "rowData"
        },
        standalone: false,
        decls: 2,
        vars: 2,
        consts: [[3, "href"]],
        template: function PhoneUrlComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "a", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("href", "tel:" + (ctx.rowData == null ? null : ctx.rowData.primaryPhone), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵsanitizeUrl"] */ .B4B);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(ctx.rowData == null ? null : ctx.rowData.primaryPhone);
          }
        },
        styles: ["a[_ngcontent-%COMP%] {\n  color: rgb(0, 136, 254);\n  text-decoration: underline;\n}"]
      });
    }
  }
  return PhoneUrlComponent;
})();

/***/ }),

/***/ 32785:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   d: () => (/* binding */ NgxFaqComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(55598);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(41598);
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88326);
/* harmony import */ var _faq_setting__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(77369);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14572);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(56383);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19223);








function NgxFaqComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 4)(1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(2, "nb-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(3, "h6", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(5, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(7, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("icon", item_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(item_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(item_r1.content);
  }
}
let NgxFaqComponent = /*#__PURE__*/(() => {
  let NgxFaqComponent = class NgxFaqComponent {
    constructor() {
      this._faqs$ = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__/* .BehaviorSubject */ .t([]);
      this.faqs$ = this._faqs$.asObservable();
    }
    ngOnInit() {
      this._faqs$.next(_faq_setting__WEBPACK_IMPORTED_MODULE_2__/* .faqs */ .k);
    }
    ngOnDestroy() {}
    static {
      this.ɵfac = function NgxFaqComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || NgxFaqComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: NgxFaqComponent,
        selectors: [["ngx-faq"]],
        standalone: false,
        decls: 11,
        vars: 9,
        consts: [[1, "faq"], [1, "faq-heading"], ["class", "single-faq", 4, "ngFor", "ngForOf"], ["nbButton", "", "outline", "", "status", "primary", "size", "small", 1, "learn-more"], [1, "single-faq"], [1, "heading-wrapper"], [3, "icon"], [1, "side-small-heading"], [1, "side-description"], [1, "hr-div-soft"]],
        template: function NgxFaqComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 0)(1, "div")(2, "h5", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(4, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(5, NgxFaqComponent_div_5_Template, 8, 3, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(6, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(7, "span")(8, "button", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(10, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(4, 3, "FORGOT_PASSWORD_PAGE.FAQ_TITLE"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(6, 5, ctx.faqs$));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(10, 7, "FORGOT_PASSWORD_PAGE.FAQ_LEARN_MORE"), " ");
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__/* .NgForOf */ .Sq, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbButtonComponent */ .YP2, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbIconComponent */ .tHu, _angular_common__WEBPACK_IMPORTED_MODULE_3__/* .AsyncPipe */ .Jj, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__/* .TranslatePipe */ .D9],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.faq[_ngcontent-%COMP%] {\n  width: 260px;\n  padding: 20px;\n  background: rgba(245, 109, 88, 0.05);\n  border-radius: var(--border-radius);\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.faq[_ngcontent-%COMP%]   .faq-heading[_ngcontent-%COMP%], \n.faq[_ngcontent-%COMP%]   .single-faq[_ngcontent-%COMP%] {\n  padding-left: 8px;\n  padding-right: 8px;\n}\n.faq[_ngcontent-%COMP%]   .faq-heading[_ngcontent-%COMP%] {\n  font-family: Inter;\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 22px;\n  letter-spacing: -0.009em;\n  text-align: left;\n  color: var(--text-basic-color);\n  margin-bottom: 19px;\n}\n.faq[_ngcontent-%COMP%]   .heading-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n}\n.faq[_ngcontent-%COMP%]   .heading-wrapper[_ngcontent-%COMP%]   nb-icon[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  color: var(--color-primary-500);\n}\n.faq[_ngcontent-%COMP%]   .heading-wrapper[_ngcontent-%COMP%]   .side-small-heading[_ngcontent-%COMP%] {\n  font-family: Inter;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 17px;\n  letter-spacing: 0em;\n  text-align: left;\n  color: var(--text-basic-color);\n}\n.faq[_ngcontent-%COMP%]   .side-description[_ngcontent-%COMP%] {\n  font-family: Inter;\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 16px;\n  letter-spacing: 0em;\n  text-align: left;\n  color: var(--text-basic-color);\n}\n.faq[_ngcontent-%COMP%]   .learn-more[_ngcontent-%COMP%] {\n  margin-top: 34px;\n}\n.faq[_ngcontent-%COMP%]   .hr-div-soft[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 15px;\n}\n\n@media screen and (max-width: 790px) {\n  .faq[_ngcontent-%COMP%] {\n    width: 476px;\n    margin-top: 30px;\n  }\n}\n@media screen and (max-width: 490px) {\n  .faq[_ngcontent-%COMP%] {\n    display: none;\n  }\n}"]
      });
    }
  };
  NgxFaqComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__/* .UntilDestroy */ .d)({
    checkProperties: true
  })], NgxFaqComponent);
  return NgxFaqComponent;
})();


/***/ }),

/***/ 33694:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H0: () => (/* reexport safe */ _star_rating_output__WEBPACK_IMPORTED_MODULE_1__.H0),
/* harmony export */   S4: () => (/* reexport safe */ _star_rating_output__WEBPACK_IMPORTED_MODULE_1__.S4),
/* harmony export */   im: () => (/* reexport safe */ _star_rating_input__WEBPACK_IMPORTED_MODULE_0__.i),
/* harmony export */   jp: () => (/* reexport safe */ _star_rating_output__WEBPACK_IMPORTED_MODULE_1__.jp),
/* harmony export */   pr: () => (/* reexport safe */ _star_rating_input__WEBPACK_IMPORTED_MODULE_0__.p)
/* harmony export */ });
/* harmony import */ var _star_rating_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85742);
/* harmony import */ var _star_rating_output__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5043);



/***/ }),

/***/ 33763:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Cm: () => (/* reexport safe */ _product_type_selector_product_type_selector_component__WEBPACK_IMPORTED_MODULE_2__.C),
/* harmony export */   G7: () => (/* reexport safe */ _product_mutation_product_type_mutation_product_type_mutation_component__WEBPACK_IMPORTED_MODULE_5__.G),
/* harmony export */   MI: () => (/* reexport safe */ _product_mutation_product_category_mutation_product_category_mutation_component__WEBPACK_IMPORTED_MODULE_4__.M),
/* harmony export */   WU: () => (/* reexport safe */ _product_category_selector_product_category_selector_component__WEBPACK_IMPORTED_MODULE_0__.W),
/* harmony export */   fP: () => (/* reexport safe */ _product_category_selector_product_category_selector_module__WEBPACK_IMPORTED_MODULE_1__.f),
/* harmony export */   fj: () => (/* reexport safe */ _product_type_selector_product_type_selector_module__WEBPACK_IMPORTED_MODULE_3__.f),
/* harmony export */   nw: () => (/* reexport safe */ _product_mutation_product_option_group_translation_product_option_group_translation_component__WEBPACK_IMPORTED_MODULE_6__.n),
/* harmony export */   rk: () => (/* reexport safe */ _product_mutation_product_mutation_module__WEBPACK_IMPORTED_MODULE_7__.r)
/* harmony export */ });
/* harmony import */ var _product_category_selector_product_category_selector_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37041);
/* harmony import */ var _product_category_selector_product_category_selector_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17492);
/* harmony import */ var _product_type_selector_product_type_selector_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45413);
/* harmony import */ var _product_type_selector_product_type_selector_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(87736);
/* harmony import */ var _product_mutation_product_category_mutation_product_category_mutation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(96403);
/* harmony import */ var _product_mutation_product_type_mutation_product_type_mutation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(89735);
/* harmony import */ var _product_mutation_product_option_group_translation_product_option_group_translation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(54983);
/* harmony import */ var _product_mutation_product_mutation_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(49624);









/***/ }),

/***/ 34269:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G: () => (/* binding */ ResyncButtonComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56383);
/* harmony import */ var _directives_debounce_click_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20345);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19223);





let ResyncButtonComponent = /*#__PURE__*/(() => {
  class ResyncButtonComponent {
    constructor() {
      /**
       * An output property for emitting click events.
       *
       * This output property emits events of type Event when a click event occurs.
       */
      this.clicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .bkB();
    }
    /**
     * Getter for retrieving the current value.
     *
     * @returns The current value of the dynamic element.
     */
    get value() {
      return this._value;
    }
    /**
     * Setter for updating the dynamic value.
     * This setter is decorated with @Input to allow external components to bind and update the value.
     *
     * @param value - The new value to set for the dynamic element.
     */
    set value(value) {
      // Stores the value in the local variable for future reference.
      this._value = value;
    }
    /**
     * Handle a click event, conditionally emitting it for further processing.
     *
     * @param event - The click event to be handled.
     */
    onClicked(event) {
      // Access the repository data from the component's rowData.
      const repository = this.rowData.customFields?.repository;
      // Check if the repository data exists and has synchronization enabled.
      if (!repository || !repository.hasSyncEnabled) {
        return; // If repository is missing or synchronization is not enabled, exit the function.
      }
      // Emit the event using an EventEmitter, possibly to notify other parts of the application.
      this.clicked.emit(event);
    }
    static {
      this.ɵfac = function ResyncButtonComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || ResyncButtonComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: ResyncButtonComponent,
        selectors: [["ngx-resync-button"]],
        inputs: {
          value: "value",
          rowData: "rowData"
        },
        outputs: {
          clicked: "clicked"
        },
        standalone: false,
        decls: 5,
        vars: 4,
        consts: [["nbButton", "", "status", "primary", "debounceClick", "", 1, "mr-2", 3, "throttledClick", "disabled"], [1, "sync-container"], ["icon", "sync-outline", 1, "sync"]],
        template: function ResyncButtonComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "button", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("throttledClick", function ResyncButtonComponent_Template_button_throttledClick_0_listener($event) {
              return ctx.onClicked($event);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(2, "nb-icon", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(4, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("disabled", !(ctx.rowData == null ? null : ctx.rowData.customFields == null ? null : ctx.rowData.customFields.repository == null ? null : ctx.rowData.customFields.repository.hasSyncEnabled));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(4, 2, "BUTTONS.RESYNC"), " ");
          }
        },
        dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbButtonComponent */ .YP2, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbIconComponent */ .tHu, _directives_debounce_click_directive__WEBPACK_IMPORTED_MODULE_2__/* .DebounceClickDirective */ .J, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__/* .TranslatePipe */ .D9],
        encapsulation: 2
      });
    }
  }
  return ResyncButtonComponent;
})();

/***/ }),

/***/ 34606:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A7: () => (/* reexport safe */ _amounts_owed_grid_amounts_owed_grid_component__WEBPACK_IMPORTED_MODULE_2__.A),
/* harmony export */   Dy: () => (/* reexport safe */ _charts_line_chart_chart_utils__WEBPACK_IMPORTED_MODULE_6__.D),
/* harmony export */   FO: () => (/* reexport safe */ _expenses_report_grid_expenses_report_grid_component__WEBPACK_IMPORTED_MODULE_11__.F),
/* harmony export */   Fw: () => (/* reexport safe */ _amounts_owed_grid_amounts_owed_grid_module__WEBPACK_IMPORTED_MODULE_3__.F),
/* harmony export */   Il: () => (/* reexport safe */ _charts_line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_4__.I),
/* harmony export */   JK: () => (/* reexport safe */ _charts_line_chart_line_chart_module__WEBPACK_IMPORTED_MODULE_5__.J),
/* harmony export */   RC: () => (/* reexport safe */ _daily_statistics_daily_statistics_module__WEBPACK_IMPORTED_MODULE_10__.R),
/* harmony export */   R_: () => (/* reexport safe */ _project_column_view_project_column_view_module__WEBPACK_IMPORTED_MODULE_16__.R),
/* harmony export */   Uc: () => (/* reexport safe */ _payment_report_grid_payment_report_grid_component__WEBPACK_IMPORTED_MODULE_13__.U),
/* harmony export */   XN: () => (/* reexport safe */ _activities_report_grid_activities_report_grid_component__WEBPACK_IMPORTED_MODULE_0__.X),
/* harmony export */   aZ: () => (/* reexport safe */ _activities_report_grid_activities_report_grid_module__WEBPACK_IMPORTED_MODULE_1__.a),
/* harmony export */   dx: () => (/* reexport safe */ _payment_report_grid_payment_report_grid_module__WEBPACK_IMPORTED_MODULE_14__.d),
/* harmony export */   eB: () => (/* reexport safe */ _expenses_report_grid_expenses_report_grid_module__WEBPACK_IMPORTED_MODULE_12__.e),
/* harmony export */   i9: () => (/* reexport safe */ _daily_grid_daily_grid_module__WEBPACK_IMPORTED_MODULE_8__.i),
/* harmony export */   pO: () => (/* reexport safe */ _daily_grid_daily_grid_component__WEBPACK_IMPORTED_MODULE_7__.p),
/* harmony export */   qe: () => (/* reexport safe */ _project_column_view_project_column_view_component__WEBPACK_IMPORTED_MODULE_15__.q),
/* harmony export */   wz: () => (/* reexport safe */ _daily_statistics_daily_statistics_daily_statistics_component__WEBPACK_IMPORTED_MODULE_9__.w)
/* harmony export */ });
/* harmony import */ var _activities_report_grid_activities_report_grid_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(372);
/* harmony import */ var _activities_report_grid_activities_report_grid_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72851);
/* harmony import */ var _amounts_owed_grid_amounts_owed_grid_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(88008);
/* harmony import */ var _amounts_owed_grid_amounts_owed_grid_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(263);
/* harmony import */ var _charts_line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5620);
/* harmony import */ var _charts_line_chart_line_chart_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(76339);
/* harmony import */ var _charts_line_chart_chart_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(35476);
/* harmony import */ var _daily_grid_daily_grid_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(82062);
/* harmony import */ var _daily_grid_daily_grid_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(47137);
/* harmony import */ var _daily_statistics_daily_statistics_daily_statistics_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(64926);
/* harmony import */ var _daily_statistics_daily_statistics_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(19015);
/* harmony import */ var _expenses_report_grid_expenses_report_grid_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(16900);
/* harmony import */ var _expenses_report_grid_expenses_report_grid_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(38659);
/* harmony import */ var _payment_report_grid_payment_report_grid_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(10372);
/* harmony import */ var _payment_report_grid_payment_report_grid_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(82755);
/* harmony import */ var _project_column_view_project_column_view_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(84080);
/* harmony import */ var _project_column_view_project_column_view_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(72991);



















/***/ }),

/***/ 35842:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AH: () => (/* reexport safe */ _screenshots_item_screenshots_item_component__WEBPACK_IMPORTED_MODULE_0__.A),
/* harmony export */   az: () => (/* reexport safe */ _view_screenshots_modal_view_screenshots_modal_module__WEBPACK_IMPORTED_MODULE_3__.a),
/* harmony export */   v$: () => (/* reexport safe */ _view_screenshots_modal_view_screenshots_modal_component__WEBPACK_IMPORTED_MODULE_2__.v),
/* harmony export */   xq: () => (/* reexport safe */ _screenshots_item_screenshots_item_module__WEBPACK_IMPORTED_MODULE_1__.x)
/* harmony export */ });
/* harmony import */ var _screenshots_item_screenshots_item_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93328);
/* harmony import */ var _screenshots_item_screenshots_item_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(55327);
/* harmony import */ var _view_screenshots_modal_view_screenshots_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47928);
/* harmony import */ var _view_screenshots_modal_view_screenshots_modal_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1879);





/***/ }),

/***/ 36140:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* reexport safe */ _approvals_mutation_module__WEBPACK_IMPORTED_MODULE_0__.E),
/* harmony export */   R: () => (/* reexport safe */ _approvals_mutation_component__WEBPACK_IMPORTED_MODULE_1__.R)
/* harmony export */ });
/* harmony import */ var _approvals_mutation_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10942);
/* harmony import */ var _approvals_mutation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(40127);



/***/ }),

/***/ 36747:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ALL_EMPLOYEES_SELECTED: () => (/* reexport safe */ _lib_selectors__WEBPACK_IMPORTED_MODULE_52__.Ol),
/* harmony export */   ALL_PROJECT_SELECTED: () => (/* reexport safe */ _lib_selectors__WEBPACK_IMPORTED_MODULE_52__.Kj),
/* harmony export */   ALL_TEAM_SELECTED: () => (/* reexport safe */ _lib_selectors__WEBPACK_IMPORTED_MODULE_52__.YZ),
/* harmony export */   ActionConfirmationComponent: () => (/* reexport safe */ _lib_user__WEBPACK_IMPORTED_MODULE_67__.x6),
/* harmony export */   ActivitiesReportGridComponent: () => (/* reexport safe */ _lib_report__WEBPACK_IMPORTED_MODULE_50__.XN),
/* harmony export */   ActivitiesReportGridModule: () => (/* reexport safe */ _lib_report__WEBPACK_IMPORTED_MODULE_50__.aZ),
/* harmony export */   ActivityItemComponent: () => (/* reexport safe */ _lib_timesheet__WEBPACK_IMPORTED_MODULE_66__.GV),
/* harmony export */   ActivityItemModule: () => (/* reexport safe */ _lib_timesheet__WEBPACK_IMPORTED_MODULE_66__.rA),
/* harmony export */   AddIconComponent: () => (/* reexport safe */ _lib_sidebar__WEBPACK_IMPORTED_MODULE_32__.Aj),
/* harmony export */   AddIconModule: () => (/* reexport safe */ _lib_sidebar__WEBPACK_IMPORTED_MODULE_32__.V0),
/* harmony export */   AddTaskDialogComponent: () => (/* reexport safe */ _lib_tasks__WEBPACK_IMPORTED_MODULE_61__.qO),
/* harmony export */   AddTaskDialogModule: () => (/* reexport safe */ _lib_tasks__WEBPACK_IMPORTED_MODULE_61__.BY),
/* harmony export */   AlertComponent: () => (/* reexport safe */ _lib_dialogs__WEBPACK_IMPORTED_MODULE_11__.Cy),
/* harmony export */   AlertDirective: () => (/* reexport safe */ _lib_dialogs__WEBPACK_IMPORTED_MODULE_11__.K5),
/* harmony export */   AlertModalComponent: () => (/* reexport safe */ _lib_components__WEBPACK_IMPORTED_MODULE_7__.ZS),
/* harmony export */   AllowScreenshotCaptureComponent: () => (/* reexport safe */ _lib_table_components__WEBPACK_IMPORTED_MODULE_58__.rm),
/* harmony export */   AmountsOwedGridComponent: () => (/* reexport safe */ _lib_report__WEBPACK_IMPORTED_MODULE_50__.A7),
/* harmony export */   AmountsOwedGridModule: () => (/* reexport safe */ _lib_report__WEBPACK_IMPORTED_MODULE_50__.Fw),
/* harmony export */   AppointmentCalendarComponent: () => (/* reexport safe */ _lib_appointments__WEBPACK_IMPORTED_MODULE_1__.BH),
/* harmony export */   AppointmentCalendarModule: () => (/* reexport safe */ _lib_appointments__WEBPACK_IMPORTED_MODULE_1__.kd),
/* harmony export */   ApprovalPolicyMutationComponent: () => (/* reexport safe */ _lib_approval_policy__WEBPACK_IMPORTED_MODULE_2__.e),
/* harmony export */   ApprovalPolicyMutationModule: () => (/* reexport safe */ _lib_approval_policy__WEBPACK_IMPORTED_MODULE_2__.H),
/* harmony export */   ArchiveConfirmationComponent: () => (/* reexport safe */ _lib_user__WEBPACK_IMPORTED_MODULE_67__.xJ),
/* harmony export */   AssignedToComponent: () => (/* reexport safe */ _lib_table_components__WEBPACK_IMPORTED_MODULE_58__.vI),
/* harmony export */   AttachReceiptComponent: () => (/* reexport safe */ _lib_expenses__WEBPACK_IMPORTED_MODULE_18__.HM),
/* harmony export */   AutocompleteOffDirective: () => (/* reexport safe */ _lib_directives__WEBPACK_IMPORTED_MODULE_12__.hn),
/* harmony export */   AvatarComponent: () => (/* reexport safe */ _lib_components__WEBPACK_IMPORTED_MODULE_7__.fw),
/* harmony export */   BackNavigationComponent: () => (/* reexport safe */ _lib_components__WEBPACK_IMPORTED_MODULE_7__.ro),
/* harmony export */   BadgeLabelComponent: () => (/* reexport safe */ _lib_components__WEBPACK_IMPORTED_MODULE_7__.HT),
/* harmony export */   BaseSelectorFilterComponent: () => (/* reexport safe */ _lib_timesheet__WEBPACK_IMPORTED_MODULE_66__.UO),
/* harmony export */   BasicInfoFormComponent: () => (/* reexport safe */ _lib_user__WEBPACK_IMPORTED_MODULE_67__.Sd),
/* harmony export */   BrowserExtensionTimerIcon: () => (/* reexport safe */ _lib_time_tracker__WEBPACK_IMPORTED_MODULE_64__.UT),
/* harmony export */   CandidateActionConfirmationComponent: () => (/* reexport safe */ _lib_user__WEBPACK_IMPORTED_MODULE_67__.Ks),
/* harmony export */   CandidateCalendarInfoComponent: () => (/* reexport safe */ _lib_candidate__WEBPACK_IMPORTED_MODULE_4__.jw),
/* harmony export */   CandidateCalendarInfoModule: () => (/* reexport safe */ _lib_candidate__WEBPACK_IMPORTED_MODULE_4__.Yb),
/* harmony export */   CandidateCriterionsFormComponent: () => (/* reexport safe */ _lib_candidate__WEBPACK_IMPORTED_MODULE_4__.JV),
/* harmony export */   CandidateCvComponent: () => (/* reexport safe */ _lib_candidate__WEBPACK_IMPORTED_MODULE_4__.OT),
/* harmony export */   CandidateEmailComponent: () => (/* reexport safe */ _lib_candidate__WEBPACK_IMPORTED_MODULE_4__.vV),
/* harmony export */   CandidateInterviewFeedbackComponent: () => (/* reexport safe */ _lib_candidate__WEBPACK_IMPORTED_MODULE_4__.xO),
/* harmony export */   CandidateInterviewFeedbackModule: () => (/* reexport safe */ _lib_candidate__WEBPACK_IMPORTED_MODULE_4__.wm),
/* harmony export */   CandidateInterviewFormComponent: () => (/* reexport safe */ _lib_candidate__WEBPACK_IMPORTED_MODULE_4__._9),
/* harmony export */   CandidateInterviewInfoComponent: () => (/* reexport safe */ _lib_candidate__WEBPACK_IMPORTED_MODULE_4__.QB),
/* harmony export */   CandidateInterviewInfoModule: () => (/* reexport safe */ _lib_candidate__WEBPACK_IMPORTED_MODULE_4__.V2),
/* harmony export */   CandidateInterviewMutationComponent: () => (/* reexport safe */ _lib_candidate__WEBPACK_IMPORTED_MODULE_4__.Xz),
/* harmony export */   CandidateInterviewMutationModule: () => (/* reexport safe */ _lib_candidate__WEBPACK_IMPORTED_MODULE_4__.WD),
/* harmony export */   CandidateInterviewerSelectComponent: () => (/* reexport safe */ _lib_candidate__WEBPACK_IMPORTED_MODULE_4__.NY),
/* harmony export */   CandidateInterviewerSelectModule: () => (/* reexport safe */ _lib_candidate__WEBPACK_IMPORTED_MODULE_4__._P),
/* harmony export */   CandidateMultiSelectComponent: () => (/* reexport safe */ _lib_candidate__WEBPACK_IMPORTED_MODULE_4__.y3),
/* harmony export */   CandidateMultiSelectModule: () => (/* reexport safe */ _lib_candidate__WEBPACK_IMPORTED_MODULE_4__.Nn),
/* harmony export */   CandidateMutationComponent: () => (/* reexport safe */ _lib_candidate__WEBPACK_IMPORTED_MODULE_4__.Ku),
/* harmony export */   CandidateMutationModule: () => (/* reexport safe */ _lib_candidate__WEBPACK_IMPORTED_MODULE_4__.DH),
/* harmony export */   CandidateNotificationFormComponent: () => (/* reexport safe */ _lib_candidate__WEBPACK_IMPORTED_MODULE_4__.oc),
/* harmony export */   CandidateSelectComponent: () => (/* reexport safe */ _lib_candidate__WEBPACK_IMPORTED_MODULE_4__.V_),
/* harmony export */   CandidateSelectModule: () => (/* reexport safe */ _lib_candidate__WEBPACK_IMPORTED_MODULE_4__._H),
/* harmony export */   CardGridComponent: () => (/* reexport safe */ _lib_card_grid__WEBPACK_IMPORTED_MODULE_10__.cK),
/* harmony export */   CardGridModule: () => (/* reexport safe */ _lib_card_grid__WEBPACK_IMPORTED_MODULE_10__.n4),
/* harmony export */   ChartUtil: () => (/* reexport safe */ _lib_report__WEBPACK_IMPORTED_MODULE_50__.Dy),
/* harmony export */   ClickableLinkComponent: () => (/* reexport safe */ _lib_table_components__WEBPACK_IMPORTED_MODULE_58__.EG),
/* harmony export */   ClientNamesComponent: () => (/* reexport safe */ _lib_invite__WEBPACK_IMPORTED_MODULE_27__.bh),
/* harmony export */   CompanyLogoComponent: () => (/* reexport safe */ _lib_table_components__WEBPACK_IMPORTED_MODULE_58__.kW),
/* harmony export */   Components: () => (/* reexport safe */ _lib_components__WEBPACK_IMPORTED_MODULE_7__.XF),
/* harmony export */   ComponentsModule: () => (/* reexport safe */ _lib_components__WEBPACK_IMPORTED_MODULE_7__.hI),
/* harmony export */   ConfirmComponent: () => (/* reexport safe */ _lib_dialogs__WEBPACK_IMPORTED_MODULE_11__.YQ),
/* harmony export */   ConfirmDirective: () => (/* reexport safe */ _lib_dialogs__WEBPACK_IMPORTED_MODULE_11__.ob),
/* harmony export */   ContactLinksComponent: () => (/* reexport safe */ _lib_table_components__WEBPACK_IMPORTED_MODULE_58__.Lc),
/* harmony export */   ContactSelectComponent: () => (/* reexport safe */ _lib_contact_select__WEBPACK_IMPORTED_MODULE_8__.O),
/* harmony export */   ContactSelectModule: () => (/* reexport safe */ _lib_contact_select__WEBPACK_IMPORTED_MODULE_8__.T),
/* harmony export */   ContactSelectorComponent: () => (/* reexport safe */ _lib_contact_selector__WEBPACK_IMPORTED_MODULE_9__.N),
/* harmony export */   ContactSelectorModule: () => (/* reexport safe */ _lib_contact_selector__WEBPACK_IMPORTED_MODULE_9__.q),
/* harmony export */   ContactWithTagsComponent: () => (/* reexport safe */ _lib_table_components__WEBPACK_IMPORTED_MODULE_58__.PT),
/* harmony export */   CountdownConfirmationComponent: () => (/* reexport safe */ _lib_user__WEBPACK_IMPORTED_MODULE_67__.Eh),
/* harmony export */   CounterPointComponent: () => (/* reexport safe */ _lib_counter_point__WEBPACK_IMPORTED_MODULE_5__.K9),
/* harmony export */   CounterPointModule: () => (/* reexport safe */ _lib_counter_point__WEBPACK_IMPORTED_MODULE_5__.td),
/* harmony export */   CountryComponent: () => (/* reexport safe */ _lib_modules_country__WEBPACK_IMPORTED_MODULE_38__.u),
/* harmony export */   CountryModule: () => (/* reexport safe */ _lib_modules_country__WEBPACK_IMPORTED_MODULE_38__.j),
/* harmony export */   CreatedAtComponent: () => (/* reexport safe */ _lib_table_components__WEBPACK_IMPORTED_MODULE_58__.X5),
/* harmony export */   CreatedByUserComponent: () => (/* reexport safe */ _lib_table_components__WEBPACK_IMPORTED_MODULE_58__.qQ),
/* harmony export */   CurrencyComponent: () => (/* reexport safe */ _lib_modules_currency__WEBPACK_IMPORTED_MODULE_39__.X),
/* harmony export */   CurrencyModule: () => (/* reexport safe */ _lib_modules_currency__WEBPACK_IMPORTED_MODULE_39__.C),
/* harmony export */   CurrencyPositionPipe: () => (/* reexport safe */ _lib_pipes__WEBPACK_IMPORTED_MODULE_42__.nV),
/* harmony export */   CustomViewComponent: () => (/* reexport safe */ _lib_card_grid__WEBPACK_IMPORTED_MODULE_10__.q9),
/* harmony export */   DEFAULT_CATEGORIES: () => (/* reexport safe */ _lib_expenses__WEBPACK_IMPORTED_MODULE_18__.Bl),
/* harmony export */   DIRECTIVES: () => (/* reexport safe */ _lib_directives__WEBPACK_IMPORTED_MODULE_12__.FZ),
/* harmony export */   DailyGridComponent: () => (/* reexport safe */ _lib_report__WEBPACK_IMPORTED_MODULE_50__.pO),
/* harmony export */   DailyGridModule: () => (/* reexport safe */ _lib_report__WEBPACK_IMPORTED_MODULE_50__.i9),
/* harmony export */   DailyStatisticsComponent: () => (/* reexport safe */ _lib_report__WEBPACK_IMPORTED_MODULE_50__.wz),
/* harmony export */   DailyStatisticsModule: () => (/* reexport safe */ _lib_report__WEBPACK_IMPORTED_MODULE_50__.RC),
/* harmony export */   DangerZoneMutationComponent: () => (/* reexport safe */ _lib_settings__WEBPACK_IMPORTED_MODULE_57__.c),
/* harmony export */   DangerZoneMutationModule: () => (/* reexport safe */ _lib_settings__WEBPACK_IMPORTED_MODULE_57__.B),
/* harmony export */   DashboardSkeletonComponent: () => (/* reexport safe */ _lib_components__WEBPACK_IMPORTED_MODULE_7__.be),
/* harmony export */   DatabaseStrategy: () => (/* reexport safe */ _lib_dashboard__WEBPACK_IMPORTED_MODULE_14__.ZU),
/* harmony export */   DateFormatPipe: () => (/* reexport safe */ _lib_pipes__WEBPACK_IMPORTED_MODULE_42__.az),
/* harmony export */   DateRangePickerComponent: () => (/* reexport safe */ _lib_selectors__WEBPACK_IMPORTED_MODULE_52__.fI),
/* harmony export */   DateRangePickerResolver: () => (/* reexport safe */ _lib_selectors__WEBPACK_IMPORTED_MODULE_52__.Qq),
/* harmony export */   DateRangeTitleComponent: () => (/* reexport safe */ _lib_components__WEBPACK_IMPORTED_MODULE_7__.DG),
/* harmony export */   DateSelectorComponent: () => (/* reexport safe */ _lib_selectors__WEBPACK_IMPORTED_MODULE_52__.$O),
/* harmony export */   DateTimeFormatPipe: () => (/* reexport safe */ _lib_pipes__WEBPACK_IMPORTED_MODULE_42__.Vv),
/* harmony export */   DateViewComponent: () => (/* reexport safe */ _lib_table_components__WEBPACK_IMPORTED_MODULE_58__.ln),
/* harmony export */   DebounceClickDirective: () => (/* reexport safe */ _lib_directives__WEBPACK_IMPORTED_MODULE_12__.JB),
/* harmony export */   DeleteBaseComponent: () => (/* reexport safe */ _lib_sidebar__WEBPACK_IMPORTED_MODULE_32__.I_),
/* harmony export */   DeleteBaseModule: () => (/* reexport safe */ _lib_sidebar__WEBPACK_IMPORTED_MODULE_32__.V3),
/* harmony export */   DeleteCategoryComponent: () => (/* reexport safe */ _lib_sidebar__WEBPACK_IMPORTED_MODULE_32__.Tb),
/* harmony export */   DeleteCategoryModule: () => (/* reexport safe */ _lib_sidebar__WEBPACK_IMPORTED_MODULE_32__.Uk),
/* harmony export */   DeleteConfirmationComponent: () => (/* reexport safe */ _lib_user__WEBPACK_IMPORTED_MODULE_67__.u5),
/* harmony export */   DeleteFeedbackComponent: () => (/* reexport safe */ _lib_candidate__WEBPACK_IMPORTED_MODULE_4__.qM),
/* harmony export */   DeleteFeedbackModule: () => (/* reexport safe */ _lib_candidate__WEBPACK_IMPORTED_MODULE_4__.T1),
/* harmony export */   DeleteInterviewComponent: () => (/* reexport safe */ _lib_candidate__WEBPACK_IMPORTED_MODULE_4__.CS),
/* harmony export */   DeleteInterviewModule: () => (/* reexport safe */ _lib_candidate__WEBPACK_IMPORTED_MODULE_4__.nD),
/* harmony export */   DepartmentNamesComponent: () => (/* reexport safe */ _lib_invite__WEBPACK_IMPORTED_MODULE_27__.wp),
/* harmony export */   DesktopTimerIcon: () => (/* reexport safe */ _lib_time_tracker__WEBPACK_IMPORTED_MODULE_64__.h2),
/* harmony export */   DialogsModule: () => (/* reexport safe */ _lib_dialogs__WEBPACK_IMPORTED_MODULE_11__.ss),
/* harmony export */   DirectivesModule: () => (/* reexport safe */ _lib_directives_directives_module__WEBPACK_IMPORTED_MODULE_13__.h),
/* harmony export */   DocumentDateTableComponent: () => (/* reexport safe */ _lib_table_components__WEBPACK_IMPORTED_MODULE_58__.hR),
/* harmony export */   DocumentUrlTableComponent: () => (/* reexport safe */ _lib_table_components__WEBPACK_IMPORTED_MODULE_58__.IU),
/* harmony export */   DurationFormatPipe: () => (/* reexport safe */ _lib_pipes__WEBPACK_IMPORTED_MODULE_42__.il),
/* harmony export */   DynamicTabsComponent: () => (/* reexport safe */ _lib_components__WEBPACK_IMPORTED_MODULE_7__.dm),
/* harmony export */   DynamicTabsModule: () => (/* reexport safe */ _lib_components__WEBPACK_IMPORTED_MODULE_7__.AS),
/* harmony export */   EditEmployeeMembershipFormComponent: () => (/* reexport safe */ _lib_employee__WEBPACK_IMPORTED_MODULE_15__.CH),
/* harmony export */   EditEmployeeMembershipFormModule: () => (/* reexport safe */ _lib_employee__WEBPACK_IMPORTED_MODULE_15__.j6),
/* harmony export */   EditProfileFormComponent: () => (/* reexport safe */ _lib_user__WEBPACK_IMPORTED_MODULE_67__.h7),
/* harmony export */   EditProfileFormModule: () => (/* reexport safe */ _lib_user__WEBPACK_IMPORTED_MODULE_67__.ct),
/* harmony export */   EditTimeLogModalComponent: () => (/* reexport safe */ _lib_timesheet__WEBPACK_IMPORTED_MODULE_66__.cu),
/* harmony export */   EditTimeLogModalModule: () => (/* reexport safe */ _lib_timesheet__WEBPACK_IMPORTED_MODULE_66__.HQ),
/* harmony export */   EmailComponent: () => (/* reexport safe */ _lib_table_components__WEBPACK_IMPORTED_MODULE_58__.Cx),
/* harmony export */   EmailInviteFormComponent: () => (/* reexport safe */ _lib_invite__WEBPACK_IMPORTED_MODULE_27__.Vx),
/* harmony export */   EmployeeEndWorkComponent: () => (/* reexport safe */ _lib_employee__WEBPACK_IMPORTED_MODULE_15__.Am),
/* harmony export */   EmployeeEndWorkModule: () => (/* reexport safe */ _lib_employee__WEBPACK_IMPORTED_MODULE_15__.$W),
/* harmony export */   EmployeeLinkEditorComponent: () => (/* reexport safe */ _lib_table_components__WEBPACK_IMPORTED_MODULE_58__.tR),
/* harmony export */   EmployeeLinksComponent: () => (/* reexport safe */ _lib_table_components__WEBPACK_IMPORTED_MODULE_58__.zx),
/* harmony export */   EmployeeLocationComponent: () => (/* reexport safe */ _lib_employee__WEBPACK_IMPORTED_MODULE_15__.HV),
/* harmony export */   EmployeeLocationModule: () => (/* reexport safe */ _lib_employee__WEBPACK_IMPORTED_MODULE_15__.Kn),
/* harmony export */   EmployeeMultiSelectModule: () => (/* reexport safe */ _lib_employee__WEBPACK_IMPORTED_MODULE_15__.I6),
/* harmony export */   EmployeeMutationComponent: () => (/* reexport safe */ _lib_employee__WEBPACK_IMPORTED_MODULE_15__.P9),
/* harmony export */   EmployeeMutationModule: () => (/* reexport safe */ _lib_employee__WEBPACK_IMPORTED_MODULE_15__.k_),
/* harmony export */   EmployeeRatesComponent: () => (/* reexport safe */ _lib_employee__WEBPACK_IMPORTED_MODULE_15__.V9),
/* harmony export */   EmployeeRatesModule: () => (/* reexport safe */ _lib_employee__WEBPACK_IMPORTED_MODULE_15__.Md),
/* harmony export */   EmployeeScheduleComponent: () => (/* reexport safe */ _lib_appointments__WEBPACK_IMPORTED_MODULE_1__.ZV),
/* harmony export */   EmployeeScheduleModule: () => (/* reexport safe */ _lib_appointments__WEBPACK_IMPORTED_MODULE_1__.KU),
/* harmony export */   EmployeeSelectComponent: () => (/* reexport safe */ _lib_employee__WEBPACK_IMPORTED_MODULE_15__.Ow),
/* harmony export */   EmployeeSelectorComponent: () => (/* reexport safe */ _lib_selectors__WEBPACK_IMPORTED_MODULE_52__.R7),
/* harmony export */   EmployeeStartWorkComponent: () => (/* reexport safe */ _lib_employee__WEBPACK_IMPORTED_MODULE_15__.HX),
/* harmony export */   EmployeeStartWorkModule: () => (/* reexport safe */ _lib_employee__WEBPACK_IMPORTED_MODULE_15__.Qw),
/* harmony export */   EmployeeWithLinksComponent: () => (/* reexport safe */ _lib_table_components__WEBPACK_IMPORTED_MODULE_58__.jD),
/* harmony export */   EmployeesMergedTeamsComponent: () => (/* reexport safe */ _lib_table_components__WEBPACK_IMPORTED_MODULE_58__.Jb),
/* harmony export */   EntityWithMembersCardComponent: () => (/* reexport safe */ _lib_entity_with_members_card__WEBPACK_IMPORTED_MODULE_17__.a),
/* harmony export */   EntityWithMembersModule: () => (/* reexport safe */ _lib_entity_with_members_card__WEBPACK_IMPORTED_MODULE_17__.x),
/* harmony export */   EquipmentMutationComponent: () => (/* reexport safe */ _lib_equipment__WEBPACK_IMPORTED_MODULE_16__.j4),
/* harmony export */   EquipmentMutationModule: () => (/* reexport safe */ _lib_equipment__WEBPACK_IMPORTED_MODULE_16__.A$),
/* harmony export */   EquipmentSharingMutationComponent: () => (/* reexport safe */ _lib_equipment__WEBPACK_IMPORTED_MODULE_16__.Fi),
/* harmony export */   EquipmentSharingMutationModule: () => (/* reexport safe */ _lib_equipment__WEBPACK_IMPORTED_MODULE_16__.Qs),
/* harmony export */   EquipmentSharingPolicyMutationComponent: () => (/* reexport safe */ _lib_equipment__WEBPACK_IMPORTED_MODULE_16__.xb),
/* harmony export */   EquipmentSharingPolicyMutationModule: () => (/* reexport safe */ _lib_equipment__WEBPACK_IMPORTED_MODULE_16__.YX),
/* harmony export */   ExpenseCategoryFilterComponent: () => (/* reexport safe */ _lib_table_filters__WEBPACK_IMPORTED_MODULE_59__.Ud),
/* harmony export */   ExpenseCategorySelectComponent: () => (/* reexport safe */ _lib_expenses__WEBPACK_IMPORTED_MODULE_18__.w6),
/* harmony export */   ExpenseCategorySelectModule: () => (/* reexport safe */ _lib_expenses__WEBPACK_IMPORTED_MODULE_18__.H2),
/* harmony export */   ExpenseTableComponent: () => (/* reexport safe */ _lib_dashboard__WEBPACK_IMPORTED_MODULE_14__.Gs),
/* harmony export */   ExpensesMutationComponent: () => (/* reexport safe */ _lib_expenses__WEBPACK_IMPORTED_MODULE_18__.ki),
/* harmony export */   ExpensesMutationModule: () => (/* reexport safe */ _lib_expenses__WEBPACK_IMPORTED_MODULE_18__.f0),
/* harmony export */   ExpensesReportGridComponent: () => (/* reexport safe */ _lib_report__WEBPACK_IMPORTED_MODULE_50__.FO),
/* harmony export */   ExpensesReportGridModule: () => (/* reexport safe */ _lib_report__WEBPACK_IMPORTED_MODULE_50__.eB),
/* harmony export */   ExternalLinkComponent: () => (/* reexport safe */ _lib_table_components__WEBPACK_IMPORTED_MODULE_58__.Ph),
/* harmony export */   FavoriteToggleComponent: () => (/* reexport safe */ _lib_favorite_toggle__WEBPACK_IMPORTED_MODULE_21__.M),
/* harmony export */   FavoriteToggleModule: () => (/* reexport safe */ _lib_favorite_toggle__WEBPACK_IMPORTED_MODULE_21__.F),
/* harmony export */   FeatureToggleComponent: () => (/* reexport safe */ _lib_feature_toggle__WEBPACK_IMPORTED_MODULE_22__.U),
/* harmony export */   FeatureToggleModule: () => (/* reexport safe */ _lib_feature_toggle__WEBPACK_IMPORTED_MODULE_22__.H),
/* harmony export */   FileProviderSelectorComponent: () => (/* reexport safe */ _lib_modules_selectors__WEBPACK_IMPORTED_MODULE_40__.YE),
/* harmony export */   FileProviderSelectorModule: () => (/* reexport safe */ _lib_modules_selectors__WEBPACK_IMPORTED_MODULE_40__.H0),
/* harmony export */   FileSizePipe: () => (/* reexport safe */ _lib_pipes__WEBPACK_IMPORTED_MODULE_42__.sy),
/* harmony export */   FileUploaderInputComponent: () => (/* reexport safe */ _lib_file_uploader_input__WEBPACK_IMPORTED_MODULE_23__.e),
/* harmony export */   FileUploaderModule: () => (/* reexport safe */ _lib_file_uploader_input__WEBPACK_IMPORTED_MODULE_23__.N),
/* harmony export */   FilterArrayPipe: () => (/* reexport safe */ _lib_pipes__WEBPACK_IMPORTED_MODULE_42__.OG),
/* harmony export */   FormHelpers: () => (/* reexport safe */ _lib_forms__WEBPACK_IMPORTED_MODULE_24__.kr),
/* harmony export */   GalleryComponent: () => (/* reexport safe */ _lib_gallery__WEBPACK_IMPORTED_MODULE_25__.A9),
/* harmony export */   GalleryDirective: () => (/* reexport safe */ _lib_gallery__WEBPACK_IMPORTED_MODULE_25__.M4),
/* harmony export */   GalleryModule: () => (/* reexport safe */ _lib_gallery__WEBPACK_IMPORTED_MODULE_25__.lg),
/* harmony export */   GalleryService: () => (/* reexport safe */ _lib_gallery__WEBPACK_IMPORTED_MODULE_25__.AF),
/* harmony export */   GauzyButtonActionComponent: () => (/* reexport safe */ _lib_gauzy_button_action__WEBPACK_IMPORTED_MODULE_26__.A),
/* harmony export */   GauzyButtonActionModule: () => (/* reexport safe */ _lib_gauzy_button_action__WEBPACK_IMPORTED_MODULE_26__.N),
/* harmony export */   GauzyEditableGridComponent: () => (/* reexport safe */ _lib_editable_grid__WEBPACK_IMPORTED_MODULE_19__.k),
/* harmony export */   GauzyEditableGridModule: () => (/* reexport safe */ _lib_editable_grid__WEBPACK_IMPORTED_MODULE_19__.x),
/* harmony export */   GauzyFiltersComponent: () => (/* reexport safe */ _lib_timesheet__WEBPACK_IMPORTED_MODULE_66__.no),
/* harmony export */   GauzyFiltersModule: () => (/* reexport safe */ _lib_timesheet__WEBPACK_IMPORTED_MODULE_66__.Q7),
/* harmony export */   GithubIssueTitleDescriptionComponent: () => (/* reexport safe */ _lib_table_components__WEBPACK_IMPORTED_MODULE_58__.M9),
/* harmony export */   GithubRepositoryComponent: () => (/* reexport safe */ _lib_table_components__WEBPACK_IMPORTED_MODULE_58__.hI),
/* harmony export */   GoalCustomUnitModule: () => (/* reexport safe */ _lib_goal__WEBPACK_IMPORTED_MODULE_70__.Jv),
/* harmony export */   GoalCustomUnitSelectComponent: () => (/* reexport safe */ _lib_goal__WEBPACK_IMPORTED_MODULE_70__.Kh),
/* harmony export */   GoalLevelSelectComponent: () => (/* reexport safe */ _lib_goal__WEBPACK_IMPORTED_MODULE_70__.$A),
/* harmony export */   GoalLevelSelectModule: () => (/* reexport safe */ _lib_goal__WEBPACK_IMPORTED_MODULE_70__.ig),
/* harmony export */   GoalTemplatesComponent: () => (/* reexport safe */ _lib_goal__WEBPACK_IMPORTED_MODULE_70__.sR),
/* harmony export */   GoalTemplatesModule: () => (/* reexport safe */ _lib_goal__WEBPACK_IMPORTED_MODULE_70__.dC),
/* harmony export */   HashNumberPipe: () => (/* reexport safe */ _lib_pipes__WEBPACK_IMPORTED_MODULE_42__.q),
/* harmony export */   HeaderTitleComponent: () => (/* reexport safe */ _lib_components__WEBPACK_IMPORTED_MODULE_7__.X9),
/* harmony export */   HubstaffTimerIcon: () => (/* reexport safe */ _lib_time_tracker__WEBPACK_IMPORTED_MODULE_64__.KN),
/* harmony export */   ImageAssetComponent: () => (/* reexport safe */ _lib_image_asset__WEBPACK_IMPORTED_MODULE_35__.D),
/* harmony export */   ImageAssetModule: () => (/* reexport safe */ _lib_image_asset__WEBPACK_IMPORTED_MODULE_35__.g),
/* harmony export */   ImagePreviewComponent: () => (/* reexport safe */ _lib_select_asset_modal__WEBPACK_IMPORTED_MODULE_51__.Hf),
/* harmony export */   ImageUploaderBaseComponent: () => (/* reexport safe */ _lib_image_uploader__WEBPACK_IMPORTED_MODULE_36__.a_),
/* harmony export */   ImageUploaderComponent: () => (/* reexport safe */ _lib_image_uploader__WEBPACK_IMPORTED_MODULE_36__.tb),
/* harmony export */   ImageUploaderModule: () => (/* reexport safe */ _lib_image_uploader__WEBPACK_IMPORTED_MODULE_36__.Mv),
/* harmony export */   ImgDirective: () => (/* reexport safe */ _lib_directives__WEBPACK_IMPORTED_MODULE_12__.zV),
/* harmony export */   IncomeExpenseAmountComponent: () => (/* reexport safe */ _lib_table_components__WEBPACK_IMPORTED_MODULE_58__.jV),
/* harmony export */   IncomeMutationComponent: () => (/* reexport safe */ _lib_income__WEBPACK_IMPORTED_MODULE_28__.Q),
/* harmony export */   IncomeMutationModule: () => (/* reexport safe */ _lib_income__WEBPACK_IMPORTED_MODULE_28__.f),
/* harmony export */   IncomeTableComponent: () => (/* reexport safe */ _lib_dashboard__WEBPACK_IMPORTED_MODULE_14__.rJ),
/* harmony export */   InfoBlockComponent: () => (/* reexport safe */ _lib_dashboard__WEBPACK_IMPORTED_MODULE_14__.fT),
/* harmony export */   InfoBlockModule: () => (/* reexport safe */ _lib_dashboard__WEBPACK_IMPORTED_MODULE_14__.WN),
/* harmony export */   InputFilterComponent: () => (/* reexport safe */ _lib_table_filters__WEBPACK_IMPORTED_MODULE_59__.UZ),
/* harmony export */   InviteFormsModule: () => (/* reexport safe */ _lib_invite__WEBPACK_IMPORTED_MODULE_27__.xp),
/* harmony export */   InviteMutationComponent: () => (/* reexport safe */ _lib_invite__WEBPACK_IMPORTED_MODULE_27__.wi),
/* harmony export */   InviteMutationModule: () => (/* reexport safe */ _lib_invite__WEBPACK_IMPORTED_MODULE_27__.hl),
/* harmony export */   InviteTableModule: () => (/* reexport safe */ _lib_invite__WEBPACK_IMPORTED_MODULE_27__.sl),
/* harmony export */   InvitesComponent: () => (/* reexport safe */ _lib_invite__WEBPACK_IMPORTED_MODULE_27__.MP),
/* harmony export */   InvoiceTotalValueComponent: () => (/* reexport safe */ _lib_table_components__WEBPACK_IMPORTED_MODULE_58__.s8),
/* harmony export */   InvoiceViewInnerComponent: () => (/* reexport safe */ _lib_invoice__WEBPACK_IMPORTED_MODULE_29__.mL),
/* harmony export */   InvoiceViewInnerModule: () => (/* reexport safe */ _lib_invoice__WEBPACK_IMPORTED_MODULE_29__.HA),
/* harmony export */   JobBudgetPipe: () => (/* reexport safe */ _lib_pipes__WEBPACK_IMPORTED_MODULE_42__.xM),
/* harmony export */   JobSearchAvailabilityEditorComponent: () => (/* reexport safe */ _lib_table_components__WEBPACK_IMPORTED_MODULE_58__.JA),
/* harmony export */   KnowledgeBaseComponent: () => (/* reexport safe */ _lib_sidebar__WEBPACK_IMPORTED_MODULE_32__.$3),
/* harmony export */   KnowledgeBaseModule: () => (/* reexport safe */ _lib_sidebar__WEBPACK_IMPORTED_MODULE_32__.s2),
/* harmony export */   LanguageSelectorComponent: () => (/* reexport safe */ _lib_language_language_selector__WEBPACK_IMPORTED_MODULE_37__.t),
/* harmony export */   LanguageSelectorModule: () => (/* reexport safe */ _lib_language_language_selector__WEBPACK_IMPORTED_MODULE_37__.A),
/* harmony export */   LayoutPersistance: () => (/* reexport safe */ _lib_dashboard__WEBPACK_IMPORTED_MODULE_14__.YW),
/* harmony export */   LayoutSelectorComponent: () => (/* reexport safe */ _lib_components__WEBPACK_IMPORTED_MODULE_7__.ds),
/* harmony export */   LeafletMapComponent: () => (/* reexport safe */ _lib_forms__WEBPACK_IMPORTED_MODULE_24__.xt),
/* harmony export */   LeafletMapModule: () => (/* reexport safe */ _lib_forms__WEBPACK_IMPORTED_MODULE_24__.q_),
/* harmony export */   LineChartComponent: () => (/* reexport safe */ _lib_report__WEBPACK_IMPORTED_MODULE_50__.Il),
/* harmony export */   LineChartModule: () => (/* reexport safe */ _lib_report__WEBPACK_IMPORTED_MODULE_50__.JK),
/* harmony export */   LocationFormComponent: () => (/* reexport safe */ _lib_forms__WEBPACK_IMPORTED_MODULE_24__.f0),
/* harmony export */   LocationFormModule: () => (/* reexport safe */ _lib_forms__WEBPACK_IMPORTED_MODULE_24__.Ck),
/* harmony export */   ManageAppointmentComponent: () => (/* reexport safe */ _lib_appointments__WEBPACK_IMPORTED_MODULE_1__.Eo),
/* harmony export */   ManageAppointmentModule: () => (/* reexport safe */ _lib_appointments__WEBPACK_IMPORTED_MODULE_1__.Bp),
/* harmony export */   MiscellaneousComponent: () => (/* reexport safe */ _lib_miscellaneous__WEBPACK_IMPORTED_MODULE_71__.ou),
/* harmony export */   MiscellaneousModule: () => (/* reexport safe */ _lib_miscellaneous__WEBPACK_IMPORTED_MODULE_71__.rS),
/* harmony export */   MobileTimerIcon: () => (/* reexport safe */ _lib_time_tracker__WEBPACK_IMPORTED_MODULE_64__.$B),
/* harmony export */   NO_EMPLOYEE_SELECTED: () => (/* reexport safe */ _lib_selectors__WEBPACK_IMPORTED_MODULE_52__.zJ),
/* harmony export */   NgxFaqComponent: () => (/* reexport safe */ _lib_faq__WEBPACK_IMPORTED_MODULE_20__.d),
/* harmony export */   NgxFaqModule: () => (/* reexport safe */ _lib_faq__WEBPACK_IMPORTED_MODULE_20__.G),
/* harmony export */   NgxImageAssetComponent: () => (/* reexport safe */ _lib_select_asset_modal__WEBPACK_IMPORTED_MODULE_51__.Kk),
/* harmony export */   Nl2BrPipe: () => (/* reexport safe */ _lib_pipes__WEBPACK_IMPORTED_MODULE_42__.Vp),
/* harmony export */   NoDataMessageComponent: () => (/* reexport safe */ _lib_smart_data_layout__WEBPACK_IMPORTED_MODULE_53__._),
/* harmony export */   NoDataMessageModule: () => (/* reexport safe */ _lib_smart_data_layout__WEBPACK_IMPORTED_MODULE_53__.j7),
/* harmony export */   NoSpaceEdgesDirective: () => (/* reexport safe */ _lib_directives__WEBPACK_IMPORTED_MODULE_12__.ht),
/* harmony export */   NonEditableNumberEditorComponent: () => (/* reexport safe */ _lib_table_components__WEBPACK_IMPORTED_MODULE_58__.H8),
/* harmony export */   NotFoundComponent: () => (/* reexport safe */ _lib_miscellaneous__WEBPACK_IMPORTED_MODULE_71__.X1),
/* harmony export */   NotesWithTagsComponent: () => (/* reexport safe */ _lib_table_components__WEBPACK_IMPORTED_MODULE_58__.iz),
/* harmony export */   NumberEditorComponent: () => (/* reexport safe */ _lib_table_components__WEBPACK_IMPORTED_MODULE_58__.yo),
/* harmony export */   OrganizationContactFilterComponent: () => (/* reexport safe */ _lib_table_filters__WEBPACK_IMPORTED_MODULE_59__.hV),
/* harmony export */   OrganizationSelectorComponent: () => (/* reexport safe */ _lib_selectors__WEBPACK_IMPORTED_MODULE_52__.mJ),
/* harmony export */   OrganizationTeamFilterComponent: () => (/* reexport safe */ _lib_table_filters__WEBPACK_IMPORTED_MODULE_59__.SE),
/* harmony export */   OrganizationWithTagsComponent: () => (/* reexport safe */ _lib_table_components__WEBPACK_IMPORTED_MODULE_58__.QM),
/* harmony export */   OrganizationsMutationComponent: () => (/* reexport safe */ _lib_organizations__WEBPACK_IMPORTED_MODULE_41__.t7),
/* harmony export */   OrganizationsMutationModule: () => (/* reexport safe */ _lib_organizations__WEBPACK_IMPORTED_MODULE_41__.gV),
/* harmony export */   OrganizationsStepFormComponent: () => (/* reexport safe */ _lib_organizations__WEBPACK_IMPORTED_MODULE_41__.m9),
/* harmony export */   OrganizationsStepFormModule: () => (/* reexport safe */ _lib_organizations__WEBPACK_IMPORTED_MODULE_41__.ZN),
/* harmony export */   OutsideDirective: () => (/* reexport safe */ _lib_directives__WEBPACK_IMPORTED_MODULE_12__.Hd),
/* harmony export */   PaginationComponent: () => (/* reexport safe */ _lib_smart_data_layout__WEBPACK_IMPORTED_MODULE_53__.eK),
/* harmony export */   PaginationFilterBaseComponent: () => (/* reexport safe */ _lib_smart_data_layout__WEBPACK_IMPORTED_MODULE_53__.tI),
/* harmony export */   PaginationV2Component: () => (/* reexport safe */ _lib_smart_data_layout__WEBPACK_IMPORTED_MODULE_53__.aS),
/* harmony export */   PasswordFormFieldComponent: () => (/* reexport safe */ _lib_user__WEBPACK_IMPORTED_MODULE_67__.N_),
/* harmony export */   PasswordFormFieldModule: () => (/* reexport safe */ _lib_user__WEBPACK_IMPORTED_MODULE_67__.G7),
/* harmony export */   PaymentMethodFilterComponent: () => (/* reexport safe */ _lib_table_filters__WEBPACK_IMPORTED_MODULE_59__.zH),
/* harmony export */   PaymentReportGridComponent: () => (/* reexport safe */ _lib_report__WEBPACK_IMPORTED_MODULE_50__.Uc),
/* harmony export */   PaymentReportGridModule: () => (/* reexport safe */ _lib_report__WEBPACK_IMPORTED_MODULE_50__.dx),
/* harmony export */   Persistance: () => (/* reexport safe */ _lib_dashboard__WEBPACK_IMPORTED_MODULE_14__.gv),
/* harmony export */   PersistanceTakers: () => (/* reexport safe */ _lib_dashboard__WEBPACK_IMPORTED_MODULE_14__.u),
/* harmony export */   PhoneFormInputComponent: () => (/* reexport safe */ _lib_user__WEBPACK_IMPORTED_MODULE_67__.Y4),
/* harmony export */   PhoneFormInputModule: () => (/* reexport safe */ _lib_user__WEBPACK_IMPORTED_MODULE_67__.n8),
/* harmony export */   PhoneUrlComponent: () => (/* reexport safe */ _lib_table_components__WEBPACK_IMPORTED_MODULE_58__.Te),
/* harmony export */   PictureNameTagsComponent: () => (/* reexport safe */ _lib_table_components__WEBPACK_IMPORTED_MODULE_58__.Oh),
/* harmony export */   Pipes: () => (/* reexport safe */ _lib_pipes__WEBPACK_IMPORTED_MODULE_42__.MM),
/* harmony export */   PipesModule: () => (/* reexport safe */ _lib_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_43__.Y),
/* harmony export */   Point: () => (/* reexport safe */ _lib_counter_point__WEBPACK_IMPORTED_MODULE_5__.bR),
/* harmony export */   ProductCategoryFilterComponent: () => (/* reexport safe */ _lib_table_filters__WEBPACK_IMPORTED_MODULE_59__.Pb),
/* harmony export */   ProductCategoryMutationComponent: () => (/* reexport safe */ _lib_product__WEBPACK_IMPORTED_MODULE_44__.MI),
/* harmony export */   ProductCategorySelectorComponent: () => (/* reexport safe */ _lib_product__WEBPACK_IMPORTED_MODULE_44__.WU),
/* harmony export */   ProductCategorySelectorModule: () => (/* reexport safe */ _lib_product__WEBPACK_IMPORTED_MODULE_44__.fP),
/* harmony export */   ProductMutationModule: () => (/* reexport safe */ _lib_product__WEBPACK_IMPORTED_MODULE_44__.rk),
/* harmony export */   ProductOptionGroupTranslationsComponent: () => (/* reexport safe */ _lib_product__WEBPACK_IMPORTED_MODULE_44__.nw),
/* harmony export */   ProductTypeFilterComponent: () => (/* reexport safe */ _lib_table_filters__WEBPACK_IMPORTED_MODULE_59__.$V),
/* harmony export */   ProductTypeMutationComponent: () => (/* reexport safe */ _lib_product__WEBPACK_IMPORTED_MODULE_44__.G7),
/* harmony export */   ProductTypeSelectorComponent: () => (/* reexport safe */ _lib_product__WEBPACK_IMPORTED_MODULE_44__.Cm),
/* harmony export */   ProductTypeSelectorModule: () => (/* reexport safe */ _lib_product__WEBPACK_IMPORTED_MODULE_44__.fj),
/* harmony export */   ProfitHistoryComponent: () => (/* reexport safe */ _lib_dashboard__WEBPACK_IMPORTED_MODULE_14__.m),
/* harmony export */   ProfitHistoryModule: () => (/* reexport safe */ _lib_dashboard__WEBPACK_IMPORTED_MODULE_14__.ti),
/* harmony export */   ProgressStatusComponent: () => (/* reexport safe */ _lib_progress_status__WEBPACK_IMPORTED_MODULE_33__.H),
/* harmony export */   ProgressStatusModule: () => (/* reexport safe */ _lib_progress_status__WEBPACK_IMPORTED_MODULE_33__.i),
/* harmony export */   ProjectColumnViewComponent: () => (/* reexport safe */ _lib_report__WEBPACK_IMPORTED_MODULE_50__.qe),
/* harmony export */   ProjectColumnViewModule: () => (/* reexport safe */ _lib_report__WEBPACK_IMPORTED_MODULE_50__.R_),
/* harmony export */   ProjectComponent: () => (/* reexport safe */ _lib_table_components__WEBPACK_IMPORTED_MODULE_58__.to),
/* harmony export */   ProjectModuleMutationComponent: () => (/* reexport safe */ _lib_project_module__WEBPACK_IMPORTED_MODULE_46__.gH),
/* harmony export */   ProjectModuleMutationModule: () => (/* reexport safe */ _lib_project_module__WEBPACK_IMPORTED_MODULE_46__.vD),
/* harmony export */   ProjectModuleTableComponent: () => (/* reexport safe */ _lib_project_module__WEBPACK_IMPORTED_MODULE_46__.zT),
/* harmony export */   ProjectModuleTableModule: () => (/* reexport safe */ _lib_project_module__WEBPACK_IMPORTED_MODULE_46__.K$),
/* harmony export */   ProjectMutationComponent: () => (/* reexport safe */ _lib_project__WEBPACK_IMPORTED_MODULE_45__.a),
/* harmony export */   ProjectMutationModule: () => (/* reexport safe */ _lib_project__WEBPACK_IMPORTED_MODULE_45__.r),
/* harmony export */   ProjectNamesComponent: () => (/* reexport safe */ _lib_invite__WEBPACK_IMPORTED_MODULE_27__.Hh),
/* harmony export */   ProjectOrganizationComponent: () => (/* reexport safe */ _lib_table_components__WEBPACK_IMPORTED_MODULE_58__.Wg),
/* harmony export */   ProjectOrganizationEmployeesComponent: () => (/* reexport safe */ _lib_table_components__WEBPACK_IMPORTED_MODULE_58__.tm),
/* harmony export */   ProjectOrganizationGridComponent: () => (/* reexport safe */ _lib_table_components__WEBPACK_IMPORTED_MODULE_58__.sH),
/* harmony export */   ProjectOrganizationGridDetailsComponent: () => (/* reexport safe */ _lib_table_components__WEBPACK_IMPORTED_MODULE_58__.wt),
/* harmony export */   ProjectSelectModule: () => (/* reexport safe */ _lib_selectors__WEBPACK_IMPORTED_MODULE_52__.AI),
/* harmony export */   ProjectSelectorComponent: () => (/* reexport safe */ _lib_selectors__WEBPACK_IMPORTED_MODULE_52__.aB),
/* harmony export */   PromptComponent: () => (/* reexport safe */ _lib_dialogs__WEBPACK_IMPORTED_MODULE_11__.c4),
/* harmony export */   PromptDirective: () => (/* reexport safe */ _lib_dialogs__WEBPACK_IMPORTED_MODULE_11__.Qv),
/* harmony export */   ProposalTemplateSelectComponent: () => (/* reexport safe */ _lib_proposal_template_select__WEBPACK_IMPORTED_MODULE_47__.y),
/* harmony export */   ProposalTemplateSelectModule: () => (/* reexport safe */ _lib_proposal_template_select__WEBPACK_IMPORTED_MODULE_47__.r),
/* harmony export */   QuickActionsComponent: () => (/* reexport safe */ _lib_dialogs__WEBPACK_IMPORTED_MODULE_11__.gO),
/* harmony export */   RangeFilterComponent: () => (/* reexport safe */ _lib_table_filters__WEBPACK_IMPORTED_MODULE_59__.x$),
/* harmony export */   ReadMoreDirective: () => (/* reexport safe */ _lib_directives__WEBPACK_IMPORTED_MODULE_12__.Zw),
/* harmony export */   RecordsHistoryComponent: () => (/* reexport safe */ _lib_dashboard__WEBPACK_IMPORTED_MODULE_14__.O9),
/* harmony export */   RecordsHistoryModule: () => (/* reexport safe */ _lib_dashboard__WEBPACK_IMPORTED_MODULE_14__.XC),
/* harmony export */   RecurringExpenseBlockComponent: () => (/* reexport safe */ _lib_expenses__WEBPACK_IMPORTED_MODULE_18__.Q5),
/* harmony export */   RecurringExpenseBlockModule: () => (/* reexport safe */ _lib_expenses__WEBPACK_IMPORTED_MODULE_18__.Pv),
/* harmony export */   RecurringExpenseDeleteConfirmationComponent: () => (/* reexport safe */ _lib_expenses__WEBPACK_IMPORTED_MODULE_18__.n1),
/* harmony export */   RecurringExpenseDeleteConfirmationModule: () => (/* reexport safe */ _lib_expenses__WEBPACK_IMPORTED_MODULE_18__.uT),
/* harmony export */   RecurringExpenseHistoryComponent: () => (/* reexport safe */ _lib_expenses__WEBPACK_IMPORTED_MODULE_18__.nw),
/* harmony export */   RecurringExpenseHistoryModule: () => (/* reexport safe */ _lib_expenses__WEBPACK_IMPORTED_MODULE_18__.gz),
/* harmony export */   RecurringExpenseMutationComponent: () => (/* reexport safe */ _lib_expenses__WEBPACK_IMPORTED_MODULE_18__.SD),
/* harmony export */   RecurringExpenseMutationModule: () => (/* reexport safe */ _lib_expenses__WEBPACK_IMPORTED_MODULE_18__.Pw),
/* harmony export */   RemoveLodashModule: () => (/* reexport safe */ _lib_remove_lodash__WEBPACK_IMPORTED_MODULE_48__.q),
/* harmony export */   RemoveLodashPipe: () => (/* reexport safe */ _lib_remove_lodash__WEBPACK_IMPORTED_MODULE_48__.Z),
/* harmony export */   ReplacePipe: () => (/* reexport safe */ _lib_pipes__WEBPACK_IMPORTED_MODULE_42__.J$),
/* harmony export */   RepositorySelectorComponent: () => (/* reexport safe */ _lib_integrations__WEBPACK_IMPORTED_MODULE_30__.J),
/* harmony export */   RepositorySelectorModule: () => (/* reexport safe */ _lib_integrations__WEBPACK_IMPORTED_MODULE_30__.e),
/* harmony export */   RequestApprovalMutationComponent: () => (/* reexport safe */ _lib_approvals__WEBPACK_IMPORTED_MODULE_3__.R),
/* harmony export */   RequestApprovalMutationModule: () => (/* reexport safe */ _lib_approvals__WEBPACK_IMPORTED_MODULE_3__.E),
/* harmony export */   ResendConfirmationComponent: () => (/* reexport safe */ _lib_invite__WEBPACK_IMPORTED_MODULE_27__.cQ),
/* harmony export */   ResyncButtonComponent: () => (/* reexport safe */ _lib_table_components__WEBPACK_IMPORTED_MODULE_58__.GN),
/* harmony export */   RoleComponent: () => (/* reexport safe */ _lib_table_components__WEBPACK_IMPORTED_MODULE_58__.aY),
/* harmony export */   RoleFormFieldComponent: () => (/* reexport safe */ _lib_user__WEBPACK_IMPORTED_MODULE_67__.U$),
/* harmony export */   RoleFormFieldModule: () => (/* reexport safe */ _lib_user__WEBPACK_IMPORTED_MODULE_67__.N8),
/* harmony export */   SMTPComponent: () => (/* reexport safe */ _lib_smtp__WEBPACK_IMPORTED_MODULE_54__.W),
/* harmony export */   SMTPModule: () => (/* reexport safe */ _lib_smtp__WEBPACK_IMPORTED_MODULE_54__.L),
/* harmony export */   SafeHtmlPipe: () => (/* reexport safe */ _lib_pipes__WEBPACK_IMPORTED_MODULE_42__.$n),
/* harmony export */   SafeUrlPipe: () => (/* reexport safe */ _lib_pipes__WEBPACK_IMPORTED_MODULE_42__.d6),
/* harmony export */   ScreenshotsItemComponent: () => (/* reexport safe */ _lib_timesheet__WEBPACK_IMPORTED_MODULE_66__.AH),
/* harmony export */   ScreenshotsItemModule: () => (/* reexport safe */ _lib_timesheet__WEBPACK_IMPORTED_MODULE_66__.xq),
/* harmony export */   SearchInputComponent: () => (/* reexport safe */ _lib_components__WEBPACK_IMPORTED_MODULE_7__.i5),
/* harmony export */   SelectAssetComponent: () => (/* reexport safe */ _lib_select_asset_modal__WEBPACK_IMPORTED_MODULE_51__.ah),
/* harmony export */   SelectAssetModule: () => (/* reexport safe */ _lib_select_asset_modal__WEBPACK_IMPORTED_MODULE_51__.Bd),
/* harmony export */   SelectorsModule: () => (/* reexport safe */ _lib_selectors__WEBPACK_IMPORTED_MODULE_52__.bv),
/* harmony export */   SharedModule: () => (/* reexport safe */ _lib_shared_module__WEBPACK_IMPORTED_MODULE_0__.G),
/* harmony export */   SidebarComponent: () => (/* reexport safe */ _lib_sidebar__WEBPACK_IMPORTED_MODULE_32__.kc),
/* harmony export */   SidebarModule: () => (/* reexport safe */ _lib_sidebar__WEBPACK_IMPORTED_MODULE_32__.nA),
/* harmony export */   SingleStatisticComponent: () => (/* reexport safe */ _lib_single_statistic__WEBPACK_IMPORTED_MODULE_31__.k),
/* harmony export */   SingleStatisticModule: () => (/* reexport safe */ _lib_single_statistic__WEBPACK_IMPORTED_MODULE_31__.R),
/* harmony export */   SkillsInputComponent: () => (/* reexport safe */ _lib_skills__WEBPACK_IMPORTED_MODULE_34__.o),
/* harmony export */   SkillsInputModule: () => (/* reexport safe */ _lib_skills__WEBPACK_IMPORTED_MODULE_34__.h),
/* harmony export */   SmartDataViewLayoutModule: () => (/* reexport safe */ _lib_smart_data_layout__WEBPACK_IMPORTED_MODULE_53__.Hp),
/* harmony export */   SprintDialogComponent: () => (/* reexport safe */ _lib_tasks_sprint_settings_view__WEBPACK_IMPORTED_MODULE_62__.MX),
/* harmony export */   StarRatingInputComponent: () => (/* reexport safe */ _lib_star_rating__WEBPACK_IMPORTED_MODULE_55__.pr),
/* harmony export */   StarRatingInputModule: () => (/* reexport safe */ _lib_star_rating__WEBPACK_IMPORTED_MODULE_55__.im),
/* harmony export */   StarRatingOutputComponent: () => (/* reexport safe */ _lib_star_rating__WEBPACK_IMPORTED_MODULE_55__.S4),
/* harmony export */   StarRatingOutputModule: () => (/* reexport safe */ _lib_star_rating__WEBPACK_IMPORTED_MODULE_55__.jp),
/* harmony export */   StarsIcon: () => (/* reexport safe */ _lib_star_rating__WEBPACK_IMPORTED_MODULE_55__.H0),
/* harmony export */   StatusBadgeComponent: () => (/* reexport safe */ _lib_status_badge__WEBPACK_IMPORTED_MODULE_56__.v),
/* harmony export */   StatusBadgeModule: () => (/* reexport safe */ _lib_status_badge__WEBPACK_IMPORTED_MODULE_56__.u),
/* harmony export */   StatusViewComponent: () => (/* reexport safe */ _lib_table_components__WEBPACK_IMPORTED_MODULE_58__.N2),
/* harmony export */   TableComponentsModule: () => (/* reexport safe */ _lib_table_components__WEBPACK_IMPORTED_MODULE_58__.pP),
/* harmony export */   TableFiltersModule: () => (/* reexport safe */ _lib_table_filters__WEBPACK_IMPORTED_MODULE_59__.Kx),
/* harmony export */   TagsColorFilterComponent: () => (/* reexport safe */ _lib_table_filters__WEBPACK_IMPORTED_MODULE_59__.Yt),
/* harmony export */   TagsColorInputComponent: () => (/* reexport safe */ _lib_tags__WEBPACK_IMPORTED_MODULE_60__.iK),
/* harmony export */   TagsColorInputModule: () => (/* reexport safe */ _lib_tags__WEBPACK_IMPORTED_MODULE_60__.xi),
/* harmony export */   TagsMutationComponent: () => (/* reexport safe */ _lib_tags__WEBPACK_IMPORTED_MODULE_60__.c_),
/* harmony export */   TagsMutationModule: () => (/* reexport safe */ _lib_tags__WEBPACK_IMPORTED_MODULE_60__.fw),
/* harmony export */   TagsOnlyComponent: () => (/* reexport safe */ _lib_table_components__WEBPACK_IMPORTED_MODULE_58__.FE),
/* harmony export */   TaskBadgeViewComponent: () => (/* reexport safe */ _lib_tasks__WEBPACK_IMPORTED_MODULE_61__.ZO),
/* harmony export */   TaskBadgeViewComponentModule: () => (/* reexport safe */ _lib_tasks__WEBPACK_IMPORTED_MODULE_61__.zR),
/* harmony export */   TaskEstimateComponent: () => (/* reexport safe */ _lib_table_components__WEBPACK_IMPORTED_MODULE_58__.vb),
/* harmony export */   TaskNumberFieldComponent: () => (/* reexport safe */ _lib_tasks__WEBPACK_IMPORTED_MODULE_61__.Cl),
/* harmony export */   TaskNumberFieldModule: () => (/* reexport safe */ _lib_tasks__WEBPACK_IMPORTED_MODULE_61__.Ls),
/* harmony export */   TaskPrioritySelectComponent: () => (/* reexport safe */ _lib_tasks__WEBPACK_IMPORTED_MODULE_61__.Z1),
/* harmony export */   TaskPrioritySelectModule: () => (/* reexport safe */ _lib_tasks__WEBPACK_IMPORTED_MODULE_61__.Ql),
/* harmony export */   TaskSelectModule: () => (/* reexport safe */ _lib_tasks__WEBPACK_IMPORTED_MODULE_61__.kN),
/* harmony export */   TaskSelectorComponent: () => (/* reexport safe */ _lib_tasks__WEBPACK_IMPORTED_MODULE_61__.WI),
/* harmony export */   TaskSizeSelectComponent: () => (/* reexport safe */ _lib_tasks__WEBPACK_IMPORTED_MODULE_61__.OW),
/* harmony export */   TaskSizeSelectModule: () => (/* reexport safe */ _lib_tasks__WEBPACK_IMPORTED_MODULE_61__.nR),
/* harmony export */   TaskStatusFilterComponent: () => (/* reexport safe */ _lib_table_filters__WEBPACK_IMPORTED_MODULE_59__.XY),
/* harmony export */   TaskStatusSelectComponent: () => (/* reexport safe */ _lib_tasks__WEBPACK_IMPORTED_MODULE_61__.vJ),
/* harmony export */   TaskStatusSelectModule: () => (/* reexport safe */ _lib_tasks__WEBPACK_IMPORTED_MODULE_61__.wu),
/* harmony export */   TaskTeamsComponent: () => (/* reexport safe */ _lib_table_components__WEBPACK_IMPORTED_MODULE_58__.fH),
/* harmony export */   TasksSprintSettingsViewComponent: () => (/* reexport safe */ _lib_tasks_sprint_settings_view__WEBPACK_IMPORTED_MODULE_62__.wn),
/* harmony export */   TasksSprintSettingsViewModule: () => (/* reexport safe */ _lib_tasks_sprint_settings_view__WEBPACK_IMPORTED_MODULE_62__.fr),
/* harmony export */   TeamSelectModule: () => (/* reexport safe */ _lib_selectors__WEBPACK_IMPORTED_MODULE_52__.iQ),
/* harmony export */   TeamSelectorComponent: () => (/* reexport safe */ _lib_selectors__WEBPACK_IMPORTED_MODULE_52__.sV),
/* harmony export */   TeamTimerIcon: () => (/* reexport safe */ _lib_time_tracker__WEBPACK_IMPORTED_MODULE_64__.Ij),
/* harmony export */   TextMaskDirective: () => (/* reexport safe */ _lib_directives__WEBPACK_IMPORTED_MODULE_12__.bu),
/* harmony export */   TimeFormatPipe: () => (/* reexport safe */ _lib_pipes__WEBPACK_IMPORTED_MODULE_42__.zu),
/* harmony export */   TimeOffHolidayMutationComponent: () => (/* reexport safe */ _lib_time_off__WEBPACK_IMPORTED_MODULE_63__.HO),
/* harmony export */   TimeOffMutationModule: () => (/* reexport safe */ _lib_time_off__WEBPACK_IMPORTED_MODULE_63__.IM),
/* harmony export */   TimeOffPolicySelectComponent: () => (/* reexport safe */ _lib_time_off__WEBPACK_IMPORTED_MODULE_63__.ax),
/* harmony export */   TimeOffPolicySelectModule: () => (/* reexport safe */ _lib_time_off__WEBPACK_IMPORTED_MODULE_63__.NH),
/* harmony export */   TimeOffRequestMutationComponent: () => (/* reexport safe */ _lib_time_off__WEBPACK_IMPORTED_MODULE_63__.WC),
/* harmony export */   TimeOffSettingsMutationComponent: () => (/* reexport safe */ _lib_time_off__WEBPACK_IMPORTED_MODULE_63__.IG),
/* harmony export */   TimeTrackerComponent: () => (/* reexport safe */ _lib_time_tracker__WEBPACK_IMPORTED_MODULE_64__.rg),
/* harmony export */   TimeTrackerModule: () => (/* reexport safe */ _lib_time_tracker__WEBPACK_IMPORTED_MODULE_64__.uc),
/* harmony export */   TimeTrackerStatusComponent: () => (/* reexport safe */ _lib_time_tracker__WEBPACK_IMPORTED_MODULE_64__.FI),
/* harmony export */   TimeTrackerStatusModule: () => (/* reexport safe */ _lib_time_tracker__WEBPACK_IMPORTED_MODULE_64__.Oh),
/* harmony export */   TimeTrackerStatusService: () => (/* reexport safe */ _lib_time_tracker__WEBPACK_IMPORTED_MODULE_64__.JW),
/* harmony export */   TimeTrackingAuthorizedDirective: () => (/* reexport safe */ _lib_directives__WEBPACK_IMPORTED_MODULE_12__.Xd),
/* harmony export */   TimeZoneSelectorComponent: () => (/* reexport safe */ _lib_modules_selectors__WEBPACK_IMPORTED_MODULE_40__.Sp),
/* harmony export */   TimeZoneSelectorModule: () => (/* reexport safe */ _lib_modules_selectors__WEBPACK_IMPORTED_MODULE_40__.F$),
/* harmony export */   TimeZoneService: () => (/* reexport safe */ _lib_timesheet__WEBPACK_IMPORTED_MODULE_66__.FQ),
/* harmony export */   TimerIconFactory: () => (/* reexport safe */ _lib_time_tracker__WEBPACK_IMPORTED_MODULE_64__.pJ),
/* harmony export */   TimerPickerComponent: () => (/* reexport safe */ _lib_timer_picker__WEBPACK_IMPORTED_MODULE_65__.fK),
/* harmony export */   TimerPickerModule: () => (/* reexport safe */ _lib_timer_picker__WEBPACK_IMPORTED_MODULE_65__.Oi),
/* harmony export */   TimerRangePickerComponent: () => (/* reexport safe */ _lib_timer_picker__WEBPACK_IMPORTED_MODULE_65__.Gq),
/* harmony export */   TimerSynced: () => (/* reexport safe */ _lib_time_tracker__WEBPACK_IMPORTED_MODULE_64__.GG),
/* harmony export */   TimezoneFilterComponent: () => (/* reexport safe */ _lib_timesheet__WEBPACK_IMPORTED_MODULE_66__.F7),
/* harmony export */   TimezoneFilterModule: () => (/* reexport safe */ _lib_timesheet__WEBPACK_IMPORTED_MODULE_66__.GY),
/* harmony export */   TimezoneSelectorComponent: () => (/* reexport safe */ _lib_appointments__WEBPACK_IMPORTED_MODULE_1__.i1),
/* harmony export */   TimezoneSelectorModule: () => (/* reexport safe */ _lib_appointments__WEBPACK_IMPORTED_MODULE_1__.hZ),
/* harmony export */   ToggleFilterComponent: () => (/* reexport safe */ _lib_table_filters__WEBPACK_IMPORTED_MODULE_59__.Kt),
/* harmony export */   ToggleSwitcherComponent: () => (/* reexport safe */ _lib_table_components__WEBPACK_IMPORTED_MODULE_58__.Fk),
/* harmony export */   TriggerParentClickDirective: () => (/* reexport safe */ _lib_directives__WEBPACK_IMPORTED_MODULE_12__.mF),
/* harmony export */   TruncatePipe: () => (/* reexport safe */ _lib_pipes__WEBPACK_IMPORTED_MODULE_42__.HO),
/* harmony export */   TrustHtmlLinkComponent: () => (/* reexport safe */ _lib_table_components__WEBPACK_IMPORTED_MODULE_58__.lR),
/* harmony export */   UnderConstructionDirective: () => (/* reexport safe */ _lib_directives__WEBPACK_IMPORTED_MODULE_12__.rR),
/* harmony export */   UnderConstructionPopupComponent: () => (/* reexport safe */ _lib_components__WEBPACK_IMPORTED_MODULE_7__.Ll),
/* harmony export */   UpworkTimerIcon: () => (/* reexport safe */ _lib_time_tracker__WEBPACK_IMPORTED_MODULE_64__.XE),
/* harmony export */   UserFormsModule: () => (/* reexport safe */ _lib_user__WEBPACK_IMPORTED_MODULE_67__.D$),
/* harmony export */   UserMultiSelectModule: () => (/* reexport safe */ _lib_user__WEBPACK_IMPORTED_MODULE_67__.zE),
/* harmony export */   UserMutationComponent: () => (/* reexport safe */ _lib_user__WEBPACK_IMPORTED_MODULE_67__.yY),
/* harmony export */   UserMutationModule: () => (/* reexport safe */ _lib_user__WEBPACK_IMPORTED_MODULE_67__.fj),
/* harmony export */   UserOrganizationsMultiSelectModule: () => (/* reexport safe */ _lib_user__WEBPACK_IMPORTED_MODULE_67__.hb),
/* harmony export */   UserOrganizationsSelectComponent: () => (/* reexport safe */ _lib_user__WEBPACK_IMPORTED_MODULE_67__.zB),
/* harmony export */   UserSelectComponent: () => (/* reexport safe */ _lib_user__WEBPACK_IMPORTED_MODULE_67__.BG),
/* harmony export */   UtcToLocalPipe: () => (/* reexport safe */ _lib_pipes__WEBPACK_IMPORTED_MODULE_42__.d1),
/* harmony export */   UtcToTimezone: () => (/* reexport safe */ _lib_pipes__WEBPACK_IMPORTED_MODULE_42__.Lu),
/* harmony export */   ValueWithUnitComponent: () => (/* reexport safe */ _lib_table_components__WEBPACK_IMPORTED_MODULE_58__.f8),
/* harmony export */   VendorFilterComponent: () => (/* reexport safe */ _lib_table_filters__WEBPACK_IMPORTED_MODULE_59__._M),
/* harmony export */   ViewScreenshotsModalComponent: () => (/* reexport safe */ _lib_timesheet__WEBPACK_IMPORTED_MODULE_66__.v$),
/* harmony export */   ViewScreenshotsModalModule: () => (/* reexport safe */ _lib_timesheet__WEBPACK_IMPORTED_MODULE_66__.az),
/* harmony export */   ViewTimeLogComponent: () => (/* reexport safe */ _lib_timesheet__WEBPACK_IMPORTED_MODULE_66__.Uh),
/* harmony export */   ViewTimeLogModalComponent: () => (/* reexport safe */ _lib_timesheet__WEBPACK_IMPORTED_MODULE_66__.xC),
/* harmony export */   ViewTimeLogModalModule: () => (/* reexport safe */ _lib_timesheet__WEBPACK_IMPORTED_MODULE_66__.kQ),
/* harmony export */   ViewTimeLogModule: () => (/* reexport safe */ _lib_timesheet__WEBPACK_IMPORTED_MODULE_66__.dA),
/* harmony export */   VisibilityComponent: () => (/* reexport safe */ _lib_table_components__WEBPACK_IMPORTED_MODULE_58__.Ab),
/* harmony export */   WebTimerIcon: () => (/* reexport safe */ _lib_time_tracker__WEBPACK_IMPORTED_MODULE_64__.LQ),
/* harmony export */   WidgetComponent: () => (/* reexport safe */ _lib_dashboard__WEBPACK_IMPORTED_MODULE_14__.W),
/* harmony export */   WidgetLayoutComponent: () => (/* reexport safe */ _lib_dashboard__WEBPACK_IMPORTED_MODULE_14__.Ys),
/* harmony export */   WidgetLayoutModule: () => (/* reexport safe */ _lib_dashboard__WEBPACK_IMPORTED_MODULE_14__.Nx),
/* harmony export */   WidgetModule: () => (/* reexport safe */ _lib_dashboard__WEBPACK_IMPORTED_MODULE_14__.L7),
/* harmony export */   WidgetService: () => (/* reexport safe */ _lib_dashboard__WEBPACK_IMPORTED_MODULE_14__.Cq),
/* harmony export */   WindowComponent: () => (/* reexport safe */ _lib_dashboard__WEBPACK_IMPORTED_MODULE_14__.Gu),
/* harmony export */   WindowLayoutComponent: () => (/* reexport safe */ _lib_dashboard__WEBPACK_IMPORTED_MODULE_14__.Io),
/* harmony export */   WindowLayoutModule: () => (/* reexport safe */ _lib_dashboard__WEBPACK_IMPORTED_MODULE_14__.LM),
/* harmony export */   WindowModule: () => (/* reexport safe */ _lib_dashboard__WEBPACK_IMPORTED_MODULE_14__.nd),
/* harmony export */   WindowService: () => (/* reexport safe */ _lib_dashboard__WEBPACK_IMPORTED_MODULE_14__.s7),
/* harmony export */   WorkInProgressComponent: () => (/* reexport safe */ _lib_work_in_progress__WEBPACK_IMPORTED_MODULE_69__.xb),
/* harmony export */   WorkInProgressModule: () => (/* reexport safe */ _lib_work_in_progress__WEBPACK_IMPORTED_MODULE_69__.gt),
/* harmony export */   WorkspacesComponent: () => (/* reexport safe */ _lib_workspaces__WEBPACK_IMPORTED_MODULE_68__.e),
/* harmony export */   WorkspacesModule: () => (/* reexport safe */ _lib_workspaces__WEBPACK_IMPORTED_MODULE_68__.L),
/* harmony export */   ckEditorConfig: () => (/* reexport safe */ _lib_ckeditor_config__WEBPACK_IMPORTED_MODULE_6__.a),
/* harmony export */   createRoutes: () => (/* reexport safe */ _lib_miscellaneous__WEBPACK_IMPORTED_MODULE_71__.V1),
/* harmony export */   createWorkInProgressRoutes: () => (/* reexport safe */ _lib_work_in_progress__WEBPACK_IMPORTED_MODULE_69__.so),
/* harmony export */   dayOfWeekAsString: () => (/* reexport safe */ _lib_selectors__WEBPACK_IMPORTED_MODULE_52__.Rc),
/* harmony export */   fadeInOutAnimation: () => (/* reexport safe */ _lib_gallery__WEBPACK_IMPORTED_MODULE_25__.Sx),
/* harmony export */   generateCsv: () => (/* reexport safe */ _lib_invoice__WEBPACK_IMPORTED_MODULE_29__.Y_),
/* harmony export */   generatePdf: () => (/* reexport safe */ _lib_invoice__WEBPACK_IMPORTED_MODULE_29__.Mp),
/* harmony export */   getAdjustDateRangeFutureAllowed: () => (/* reexport safe */ _lib_selectors__WEBPACK_IMPORTED_MODULE_52__.Yi),
/* harmony export */   getBrowserLanguage: () => (/* reexport safe */ _lib_utils__WEBPACK_IMPORTED_MODULE_72__.x),
/* harmony export */   patterns: () => (/* reexport safe */ _lib_regex__WEBPACK_IMPORTED_MODULE_49__.q),
/* harmony export */   richTextCKEditorConfig: () => (/* reexport safe */ _lib_ckeditor_config__WEBPACK_IMPORTED_MODULE_6__.Z),
/* harmony export */   shiftUTCtoLocal: () => (/* reexport safe */ _lib_selectors__WEBPACK_IMPORTED_MODULE_52__.tq)
/* harmony export */ });
/* harmony import */ var _lib_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38834);
/* harmony import */ var _lib_appointments__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69970);
/* harmony import */ var _lib_approval_policy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3420);
/* harmony import */ var _lib_approvals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(36140);
/* harmony import */ var _lib_candidate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(74053);
/* harmony import */ var _lib_counter_point__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85555);
/* harmony import */ var _lib_ckeditor_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(98106);
/* harmony import */ var _lib_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(17124);
/* harmony import */ var _lib_contact_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(78767);
/* harmony import */ var _lib_contact_selector__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(21850);
/* harmony import */ var _lib_card_grid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(75757);
/* harmony import */ var _lib_dialogs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(59581);
/* harmony import */ var _lib_directives__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3701);
/* harmony import */ var _lib_directives_directives_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(78818);
/* harmony import */ var _lib_dashboard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(12616);
/* harmony import */ var _lib_employee__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(16532);
/* harmony import */ var _lib_equipment__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(75872);
/* harmony import */ var _lib_entity_with_members_card__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(57509);
/* harmony import */ var _lib_expenses__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(5181);
/* harmony import */ var _lib_editable_grid__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(28971);
/* harmony import */ var _lib_faq__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(46616);
/* harmony import */ var _lib_favorite_toggle__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(64827);
/* harmony import */ var _lib_feature_toggle__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(68049);
/* harmony import */ var _lib_file_uploader_input__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(85857);
/* harmony import */ var _lib_forms__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(2751);
/* harmony import */ var _lib_gallery__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(1154);
/* harmony import */ var _lib_gauzy_button_action__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(13214);
/* harmony import */ var _lib_invite__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(83874);
/* harmony import */ var _lib_income__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(36867);
/* harmony import */ var _lib_invoice__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(57491);
/* harmony import */ var _lib_integrations__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(90071);
/* harmony import */ var _lib_single_statistic__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(88263);
/* harmony import */ var _lib_sidebar__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(70268);
/* harmony import */ var _lib_progress_status__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(4392);
/* harmony import */ var _lib_skills__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(29678);
/* harmony import */ var _lib_image_asset__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(48904);
/* harmony import */ var _lib_image_uploader__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(69270);
/* harmony import */ var _lib_language_language_selector__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(30457);
/* harmony import */ var _lib_modules_country__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(79832);
/* harmony import */ var _lib_modules_currency__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(68565);
/* harmony import */ var _lib_modules_selectors__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(3960);
/* harmony import */ var _lib_organizations__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(47312);
/* harmony import */ var _lib_pipes__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(31953);
/* harmony import */ var _lib_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(10012);
/* harmony import */ var _lib_product__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(33763);
/* harmony import */ var _lib_project__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(89589);
/* harmony import */ var _lib_project_module__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(27564);
/* harmony import */ var _lib_proposal_template_select__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(72798);
/* harmony import */ var _lib_remove_lodash__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(87746);
/* harmony import */ var _lib_regex__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(37367);
/* harmony import */ var _lib_report__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(34606);
/* harmony import */ var _lib_select_asset_modal__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(15021);
/* harmony import */ var _lib_selectors__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(74794);
/* harmony import */ var _lib_smart_data_layout__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(25293);
/* harmony import */ var _lib_smtp__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(70564);
/* harmony import */ var _lib_star_rating__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(33694);
/* harmony import */ var _lib_status_badge__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(45424);
/* harmony import */ var _lib_settings__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(14625);
/* harmony import */ var _lib_table_components__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(17887);
/* harmony import */ var _lib_table_filters__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(63830);
/* harmony import */ var _lib_tags__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(12717);
/* harmony import */ var _lib_tasks__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(49858);
/* harmony import */ var _lib_tasks_sprint_settings_view__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(37045);
/* harmony import */ var _lib_time_off__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(23425);
/* harmony import */ var _lib_time_tracker__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(39432);
/* harmony import */ var _lib_timer_picker__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(78158);
/* harmony import */ var _lib_timesheet__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(37588);
/* harmony import */ var _lib_user__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(44044);
/* harmony import */ var _lib_workspaces__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(1686);
/* harmony import */ var _lib_work_in_progress__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(66305);
/* harmony import */ var _lib_goal__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(3775);
/* harmony import */ var _lib_miscellaneous__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(91176);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(13921);
/*
 * Public API Surface of @gauzy/ui-core/shared
 */











































































/***/ }),

/***/ 36867:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Q: () => (/* reexport safe */ _income_mutation_income_mutation_component__WEBPACK_IMPORTED_MODULE_0__.Q),
/* harmony export */   f: () => (/* reexport safe */ _income_mutation_income_mutation_module__WEBPACK_IMPORTED_MODULE_1__.f)
/* harmony export */ });
/* harmony import */ var _income_mutation_income_mutation_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5209);
/* harmony import */ var _income_mutation_income_mutation_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86764);



/***/ }),

/***/ 36967:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G: () => (/* binding */ NgxFaqModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14572);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56383);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19223);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);





let NgxFaqModule = /*#__PURE__*/(() => {
  class NgxFaqModule {
    static {
      this.ɵfac = function NgxFaqModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || NgxFaqModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .$C({
        type: NgxFaqModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .CommonModule */ .MD, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbButtonModule */ .P5N, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbIconModule */ .clu, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__/* .TranslateModule */ .h.forChild()]
      });
    }
  }
  return NgxFaqModule;
})();

/***/ }),

/***/ 37045:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MX: () => (/* reexport safe */ _sprint_dialog_sprint_dialog_component__WEBPACK_IMPORTED_MODULE_0__.M),
/* harmony export */   fr: () => (/* reexport safe */ _tasks_sprint_settings_view_module__WEBPACK_IMPORTED_MODULE_2__.f),
/* harmony export */   wn: () => (/* reexport safe */ _tasks_sprint_settings_view_component__WEBPACK_IMPORTED_MODULE_1__.w)
/* harmony export */ });
/* harmony import */ var _sprint_dialog_sprint_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39199);
/* harmony import */ var _tasks_sprint_settings_view_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65217);
/* harmony import */ var _tasks_sprint_settings_view_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94500);




/***/ }),

/***/ 37367:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: () => (/* reexport safe */ _regex_patterns_const__WEBPACK_IMPORTED_MODULE_0__.q)
/* harmony export */ });
/* harmony import */ var _regex_patterns_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84059);


/***/ }),

/***/ 37588:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AH: () => (/* reexport safe */ _screenshots__WEBPACK_IMPORTED_MODULE_2__.AH),
/* harmony export */   F7: () => (/* reexport safe */ _gauzy_filters__WEBPACK_IMPORTED_MODULE_1__.F7),
/* harmony export */   FQ: () => (/* reexport safe */ _gauzy_filters__WEBPACK_IMPORTED_MODULE_1__.FQ),
/* harmony export */   GV: () => (/* reexport safe */ _activities__WEBPACK_IMPORTED_MODULE_0__.G),
/* harmony export */   GY: () => (/* reexport safe */ _gauzy_filters__WEBPACK_IMPORTED_MODULE_1__.GY),
/* harmony export */   HQ: () => (/* reexport safe */ _edit_time_log_modal__WEBPACK_IMPORTED_MODULE_3__.H),
/* harmony export */   Q7: () => (/* reexport safe */ _gauzy_filters__WEBPACK_IMPORTED_MODULE_1__.Q7),
/* harmony export */   UO: () => (/* reexport safe */ _gauzy_filters__WEBPACK_IMPORTED_MODULE_1__.UO),
/* harmony export */   Uh: () => (/* reexport safe */ _view_time_log__WEBPACK_IMPORTED_MODULE_5__.U),
/* harmony export */   az: () => (/* reexport safe */ _screenshots__WEBPACK_IMPORTED_MODULE_2__.az),
/* harmony export */   cu: () => (/* reexport safe */ _edit_time_log_modal__WEBPACK_IMPORTED_MODULE_3__.c),
/* harmony export */   dA: () => (/* reexport safe */ _view_time_log__WEBPACK_IMPORTED_MODULE_5__.d),
/* harmony export */   kQ: () => (/* reexport safe */ _view_time_log_modal__WEBPACK_IMPORTED_MODULE_4__.k),
/* harmony export */   no: () => (/* reexport safe */ _gauzy_filters__WEBPACK_IMPORTED_MODULE_1__.no),
/* harmony export */   rA: () => (/* reexport safe */ _activities__WEBPACK_IMPORTED_MODULE_0__.r),
/* harmony export */   v$: () => (/* reexport safe */ _screenshots__WEBPACK_IMPORTED_MODULE_2__.v$),
/* harmony export */   xC: () => (/* reexport safe */ _view_time_log_modal__WEBPACK_IMPORTED_MODULE_4__.x),
/* harmony export */   xq: () => (/* reexport safe */ _screenshots__WEBPACK_IMPORTED_MODULE_2__.xq)
/* harmony export */ });
/* harmony import */ var _activities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(54640);
/* harmony import */ var _gauzy_filters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29387);
/* harmony import */ var _screenshots__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35842);
/* harmony import */ var _edit_time_log_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(28458);
/* harmony import */ var _view_time_log_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12321);
/* harmony import */ var _view_time_log__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(43265);







/***/ }),

/***/ 37704:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AI: () => (/* reexport safe */ _project_module__WEBPACK_IMPORTED_MODULE_2__.A),
/* harmony export */   Kj: () => (/* reexport safe */ _project_default_project__WEBPACK_IMPORTED_MODULE_0__.K),
/* harmony export */   aB: () => (/* reexport safe */ _project_project_component__WEBPACK_IMPORTED_MODULE_1__.a)
/* harmony export */ });
/* harmony import */ var _project_default_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65499);
/* harmony import */ var _project_project_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46582);
/* harmony import */ var _project_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37383);




/***/ }),

/***/ 38721:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ GithubIssueTitleDescriptionComponent)
/* harmony export */ });
/* harmony import */ var _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38546);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19223);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14572);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(56383);
/* harmony import */ var _tags_only_tags_only_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(91045);
/* harmony import */ var _trust_html_trust_html_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(17087);








function GithubIssueTitleDescriptionComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(0, "ga-only-tags", 10);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("value", ctx_r0.rowData == null ? null : ctx_r0.rowData.labels)("rowData", ctx_r0.rowData);
  }
}
let GithubIssueTitleDescriptionComponent = /*#__PURE__*/(() => {
  class GithubIssueTitleDescriptionComponent extends _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_1__/* .TranslationBaseComponent */ .K {
    constructor(translateService) {
      super(translateService);
      this.translateService = translateService;
    }
    /**
     *
     * @returns
     */
    openIssue() {
      if (!this.rowData) {
        return;
      }
      if (this.rowData?.html_url) {
        window.open(this.rowData.html_url, '_blank');
      }
    }
    static {
      this.ɵfac = function GithubIssueTitleDescriptionComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || GithubIssueTitleDescriptionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__/* .TranslateService */ .c$));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: GithubIssueTitleDescriptionComponent,
        selectors: [["issue-title-description"]],
        inputs: {
          rowData: "rowData",
          value: "value"
        },
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
        decls: 11,
        vars: 4,
        consts: [[1, "issue-details"], [1, "issue-header"], [1, "issue-labels"], [3, "ngIf"], [1, "issue-title"], ["href", "javascript:void(0)", 3, "click"], ["icon", "eye-outline", "pack", "eva", 3, "nbTooltip"], [1, "issue-body"], [1, "issue-description"], [3, "value"], [3, "value", "rowData"]],
        template: function GithubIssueTitleDescriptionComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 0)(1, "div", 1)(2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(3, GithubIssueTitleDescriptionComponent_ng_template_3_Template, 1, 2, "ng-template", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(4, "div", 4)(5, "a", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function GithubIssueTitleDescriptionComponent_Template_a_click_5_listener() {
              return ctx.openIssue();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(6, "nb-icon", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(8, "div", 7)(9, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(10, "ngx-security-trust-html", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.rowData == null ? null : ctx.rowData.labels);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("nbTooltip", ctx.rowData == null ? null : ctx.rowData.title);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", ctx.rowData == null ? null : ctx.rowData.title, " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("value", ctx.rowData == null ? null : ctx.rowData.body);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__/* .NgIf */ .bT, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbIconComponent */ .tHu, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbTooltipDirective */ .BmQ, _tags_only_tags_only_component__WEBPACK_IMPORTED_MODULE_5__/* .TagsOnlyComponent */ .F, _trust_html_trust_html_component__WEBPACK_IMPORTED_MODULE_6__/* .TrustHtmlLinkComponent */ .l],
        styles: ["[_nghost-%COMP%]   .issue-details[_ngcontent-%COMP%] {\n  letter-spacing: 0em;\n  text-align: left;\n}\n[_nghost-%COMP%]   .issue-details[_ngcontent-%COMP%]   .issue-header[_ngcontent-%COMP%]   .issue-labels[_ngcontent-%COMP%] {\n  font-size: 14px;\n  display: block;\n  margin-top: 15px;\n}\n[_nghost-%COMP%]   .issue-details[_ngcontent-%COMP%]   .issue-header[_ngcontent-%COMP%]   .issue-title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  text-decoration: none;\n  padding-top: 10px;\n}\n[_nghost-%COMP%]   .issue-details[_ngcontent-%COMP%]   .issue-header[_ngcontent-%COMP%]   .issue-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--text-basic-color);\n}\n[_nghost-%COMP%]   .issue-details[_ngcontent-%COMP%]   .issue-header[_ngcontent-%COMP%]   .issue-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n}\n[_nghost-%COMP%]   .issue-details[_ngcontent-%COMP%]   .issue-body[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n[_nghost-%COMP%]   .issue-details[_ngcontent-%COMP%]   .issue-body[_ngcontent-%COMP%]   .issue-description[_ngcontent-%COMP%] {\n  font-size: 14px;\n  margin-top: 10px;\n  line-height: 17px;\n}"]
      });
    }
  }
  return GithubIssueTitleDescriptionComponent;
})();

/***/ }),

/***/ 39432:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $B: () => (/* reexport safe */ _components_time_tracker_status_concretes__WEBPACK_IMPORTED_MODULE_0__.$B),
/* harmony export */   FI: () => (/* reexport safe */ _components_time_tracker_status_time_tracker_status_component__WEBPACK_IMPORTED_MODULE_2__.F),
/* harmony export */   GG: () => (/* reexport safe */ _components_time_tracker_status_concretes__WEBPACK_IMPORTED_MODULE_0__.GG),
/* harmony export */   Ij: () => (/* reexport safe */ _components_time_tracker_status_concretes__WEBPACK_IMPORTED_MODULE_0__.Ij),
/* harmony export */   JW: () => (/* reexport safe */ _components_time_tracker_status_time_tracker_status_service__WEBPACK_IMPORTED_MODULE_4__.J),
/* harmony export */   KN: () => (/* reexport safe */ _components_time_tracker_status_concretes__WEBPACK_IMPORTED_MODULE_0__.KN),
/* harmony export */   LQ: () => (/* reexport safe */ _components_time_tracker_status_concretes__WEBPACK_IMPORTED_MODULE_0__.LQ),
/* harmony export */   Oh: () => (/* reexport safe */ _components_time_tracker_status_time_tracker_status_module__WEBPACK_IMPORTED_MODULE_3__.O),
/* harmony export */   UT: () => (/* reexport safe */ _components_time_tracker_status_concretes__WEBPACK_IMPORTED_MODULE_0__.UT),
/* harmony export */   XE: () => (/* reexport safe */ _components_time_tracker_status_concretes__WEBPACK_IMPORTED_MODULE_0__.XE),
/* harmony export */   h2: () => (/* reexport safe */ _components_time_tracker_status_concretes__WEBPACK_IMPORTED_MODULE_0__.h2),
/* harmony export */   pJ: () => (/* reexport safe */ _components_time_tracker_status_factory__WEBPACK_IMPORTED_MODULE_1__.p),
/* harmony export */   rg: () => (/* reexport safe */ _time_tracker_time_tracker_component__WEBPACK_IMPORTED_MODULE_5__.r),
/* harmony export */   uc: () => (/* reexport safe */ _time_tracker_module__WEBPACK_IMPORTED_MODULE_6__.u)
/* harmony export */ });
/* harmony import */ var _components_time_tracker_status_concretes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11584);
/* harmony import */ var _components_time_tracker_status_factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67974);
/* harmony import */ var _components_time_tracker_status_time_tracker_status_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52247);
/* harmony import */ var _components_time_tracker_status_time_tracker_status_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(70118);
/* harmony import */ var _components_time_tracker_status_time_tracker_status_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(88079);
/* harmony import */ var _time_tracker_time_tracker_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(48324);
/* harmony import */ var _time_tracker_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(90906);








/***/ }),

/***/ 43265:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   U: () => (/* reexport safe */ _view_time_log_component__WEBPACK_IMPORTED_MODULE_0__.U),
/* harmony export */   d: () => (/* reexport safe */ _view_time_log_module__WEBPACK_IMPORTED_MODULE_1__.d)
/* harmony export */ });
/* harmony import */ var _view_time_log_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51702);
/* harmony import */ var _view_time_log_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58233);



/***/ }),

/***/ 44044:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BG: () => (/* reexport safe */ _user_multi_select_user_multi_select_component__WEBPACK_IMPORTED_MODULE_2__.B),
/* harmony export */   D$: () => (/* reexport safe */ _forms_user_forms_module__WEBPACK_IMPORTED_MODULE_9__.D),
/* harmony export */   Eh: () => (/* reexport safe */ _forms__WEBPACK_IMPORTED_MODULE_8__.Eh),
/* harmony export */   G7: () => (/* reexport safe */ _forms_fields__WEBPACK_IMPORTED_MODULE_10__.G7),
/* harmony export */   Ks: () => (/* reexport safe */ _forms__WEBPACK_IMPORTED_MODULE_8__.Ks),
/* harmony export */   N8: () => (/* reexport safe */ _forms_fields__WEBPACK_IMPORTED_MODULE_10__.N8),
/* harmony export */   N_: () => (/* reexport safe */ _forms_fields__WEBPACK_IMPORTED_MODULE_10__.N_),
/* harmony export */   Sd: () => (/* reexport safe */ _forms__WEBPACK_IMPORTED_MODULE_8__.Sd),
/* harmony export */   U$: () => (/* reexport safe */ _forms_fields__WEBPACK_IMPORTED_MODULE_10__.U$),
/* harmony export */   Y4: () => (/* reexport safe */ _forms_fields__WEBPACK_IMPORTED_MODULE_10__.Y4),
/* harmony export */   ct: () => (/* reexport safe */ _edit_profile_form_edit_profile_form_module__WEBPACK_IMPORTED_MODULE_1__.c),
/* harmony export */   fj: () => (/* reexport safe */ _user_mutation_user_mutation_module__WEBPACK_IMPORTED_MODULE_5__.f),
/* harmony export */   h7: () => (/* reexport safe */ _edit_profile_form_edit_profile_form_component__WEBPACK_IMPORTED_MODULE_0__.h),
/* harmony export */   hb: () => (/* reexport safe */ _user_organizations_multi_select_user_organizations_multi_select_module__WEBPACK_IMPORTED_MODULE_7__.h),
/* harmony export */   n8: () => (/* reexport safe */ _forms_fields__WEBPACK_IMPORTED_MODULE_10__.n8),
/* harmony export */   u5: () => (/* reexport safe */ _forms__WEBPACK_IMPORTED_MODULE_8__.u5),
/* harmony export */   x6: () => (/* reexport safe */ _forms__WEBPACK_IMPORTED_MODULE_8__.x6),
/* harmony export */   xJ: () => (/* reexport safe */ _forms__WEBPACK_IMPORTED_MODULE_8__.xJ),
/* harmony export */   yY: () => (/* reexport safe */ _user_mutation_user_mutation_component__WEBPACK_IMPORTED_MODULE_4__.y),
/* harmony export */   zB: () => (/* reexport safe */ _user_organizations_multi_select_user_organizations_multi_select_component__WEBPACK_IMPORTED_MODULE_6__.z),
/* harmony export */   zE: () => (/* reexport safe */ _user_multi_select_user_multi_select_module__WEBPACK_IMPORTED_MODULE_3__.z)
/* harmony export */ });
/* harmony import */ var _edit_profile_form_edit_profile_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10409);
/* harmony import */ var _edit_profile_form_edit_profile_form_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8252);
/* harmony import */ var _user_multi_select_user_multi_select_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17173);
/* harmony import */ var _user_multi_select_user_multi_select_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(86888);
/* harmony import */ var _user_mutation_user_mutation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(74225);
/* harmony import */ var _user_mutation_user_mutation_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10548);
/* harmony import */ var _user_organizations_multi_select_user_organizations_multi_select_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(35945);
/* harmony import */ var _user_organizations_multi_select_user_organizations_multi_select_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(11388);
/* harmony import */ var _forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9563);
/* harmony import */ var _forms_user_forms_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(82202);
/* harmony import */ var _forms_fields__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(93689);












/***/ }),

/***/ 45424:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   u: () => (/* reexport safe */ _status_badge_module__WEBPACK_IMPORTED_MODULE_0__.u),
/* harmony export */   v: () => (/* reexport safe */ _status_badge_component__WEBPACK_IMPORTED_MODULE_1__.v)
/* harmony export */ });
/* harmony import */ var _status_badge_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13706);
/* harmony import */ var _status_badge_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(90475);



/***/ }),

/***/ 45657:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: () => (/* binding */ TaskEstimateComponent)
/* harmony export */ });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20381);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26860);


let TaskEstimateComponent = /*#__PURE__*/(() => {
  class TaskEstimateComponent {
    transformSeconds() {
      if (!this.value) {
        return '';
      }
      const duration = moment__WEBPACK_IMPORTED_MODULE_0__.duration(this.value, 'seconds');
      const days = duration.days();
      const hours = duration.hours() >= 10 ? duration.hours() : '0' + duration.hours();
      const minutes = duration.minutes() >= 10 ? duration.minutes() : '0' + duration.minutes();
      return `${days}d ${hours}h ${minutes}m`;
    }
    static {
      this.ɵfac = function TaskEstimateComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || TaskEstimateComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineComponent"] */ .VBU({
        type: TaskEstimateComponent,
        selectors: [["ng-component"]],
        standalone: false,
        decls: 1,
        vars: 1,
        template: function TaskEstimateComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(0);
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", ctx.transformSeconds(), " ");
          }
        },
        encapsulation: 2
      });
    }
  }
  return TaskEstimateComponent;
})();

/***/ }),

/***/ 46616:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G: () => (/* reexport safe */ _faq_module__WEBPACK_IMPORTED_MODULE_0__.G),
/* harmony export */   d: () => (/* reexport safe */ _faq_component__WEBPACK_IMPORTED_MODULE_1__.d)
/* harmony export */ });
/* harmony import */ var _faq_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36967);
/* harmony import */ var _faq_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(32785);



/***/ }),

/***/ 47312:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZN: () => (/* reexport safe */ _organizations_step_form_organizations_step_form_module__WEBPACK_IMPORTED_MODULE_3__.Z),
/* harmony export */   gV: () => (/* reexport safe */ _organizations_mutation_organizations_mutation_module__WEBPACK_IMPORTED_MODULE_1__.g),
/* harmony export */   m9: () => (/* reexport safe */ _organizations_step_form_organizations_step_form_component__WEBPACK_IMPORTED_MODULE_2__.m),
/* harmony export */   t7: () => (/* reexport safe */ _organizations_mutation_organizations_mutation_component__WEBPACK_IMPORTED_MODULE_0__.t)
/* harmony export */ });
/* harmony import */ var _organizations_mutation_organizations_mutation_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32120);
/* harmony import */ var _organizations_mutation_organizations_mutation_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37175);
/* harmony import */ var _organizations_step_form_organizations_step_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34797);
/* harmony import */ var _organizations_step_form_organizations_step_form_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(66285);





/***/ }),

/***/ 48904:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* reexport safe */ _image_asset_component__WEBPACK_IMPORTED_MODULE_0__.D),
/* harmony export */   g: () => (/* reexport safe */ _image_asset_module__WEBPACK_IMPORTED_MODULE_1__.g)
/* harmony export */ });
/* harmony import */ var _image_asset_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(97446);
/* harmony import */ var _image_asset_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99820);



/***/ }),

/***/ 49858:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BY: () => (/* reexport safe */ _add_task_dialog_add_task_dialog_module__WEBPACK_IMPORTED_MODULE_1__.B),
/* harmony export */   Cl: () => (/* reexport safe */ _task_number_task_number_field_component__WEBPACK_IMPORTED_MODULE_4__.C),
/* harmony export */   Ls: () => (/* reexport safe */ _task_number_task_number_field_module__WEBPACK_IMPORTED_MODULE_5__.L),
/* harmony export */   OW: () => (/* reexport safe */ _task_size_select_task_size_select_component__WEBPACK_IMPORTED_MODULE_10__.O),
/* harmony export */   Ql: () => (/* reexport safe */ _task_priority_select_task_priority_select_module__WEBPACK_IMPORTED_MODULE_7__.Q),
/* harmony export */   WI: () => (/* reexport safe */ _task_select_task_task_component__WEBPACK_IMPORTED_MODULE_8__.W),
/* harmony export */   Z1: () => (/* reexport safe */ _task_priority_select_task_priority_select_component__WEBPACK_IMPORTED_MODULE_6__.Z),
/* harmony export */   ZO: () => (/* reexport safe */ _task_badge_view_task_badge_view_component__WEBPACK_IMPORTED_MODULE_2__.Z),
/* harmony export */   kN: () => (/* reexport safe */ _task_select_task_select_module__WEBPACK_IMPORTED_MODULE_9__.k),
/* harmony export */   nR: () => (/* reexport safe */ _task_size_select_task_size_select_module__WEBPACK_IMPORTED_MODULE_11__.n),
/* harmony export */   qO: () => (/* reexport safe */ _add_task_dialog_add_task_dialog_component__WEBPACK_IMPORTED_MODULE_0__.q),
/* harmony export */   vJ: () => (/* reexport safe */ _task_status_select_task_status_select_component__WEBPACK_IMPORTED_MODULE_12__.v),
/* harmony export */   wu: () => (/* reexport safe */ _task_status_select_task_status_select_module__WEBPACK_IMPORTED_MODULE_13__.w),
/* harmony export */   zR: () => (/* reexport safe */ _task_badge_view_task_badge_view_module__WEBPACK_IMPORTED_MODULE_3__.z)
/* harmony export */ });
/* harmony import */ var _add_task_dialog_add_task_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38956);
/* harmony import */ var _add_task_dialog_add_task_dialog_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(251);
/* harmony import */ var _task_badge_view_task_badge_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1720);
/* harmony import */ var _task_badge_view_task_badge_view_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16119);
/* harmony import */ var _task_number_task_number_field_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45997);
/* harmony import */ var _task_number_task_number_field_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(31664);
/* harmony import */ var _task_priority_select_task_priority_select_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(18912);
/* harmony import */ var _task_priority_select_task_priority_select_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(45455);
/* harmony import */ var _task_select_task_task_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(33765);
/* harmony import */ var _task_select_task_select_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(34987);
/* harmony import */ var _task_size_select_task_size_select_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(26954);
/* harmony import */ var _task_size_select_task_size_select_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(90845);
/* harmony import */ var _task_status_select_task_status_select_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(25448);
/* harmony import */ var _task_status_select_task_status_select_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(18471);















/***/ }),

/***/ 51474:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   o: () => (/* binding */ FileStorageProviderEnum)
/* harmony export */ });
// Enum representing different file storage providers
var FileStorageProviderEnum = /*#__PURE__*/function (FileStorageProviderEnum) {
  FileStorageProviderEnum["LOCAL"] = "LOCAL";
  FileStorageProviderEnum["S3"] = "S3";
  FileStorageProviderEnum["WASABI"] = "WASABI";
  FileStorageProviderEnum["CLOUDINARY"] = "CLOUDINARY";
  FileStorageProviderEnum["DIGITALOCEAN"] = "DIGITALOCEAN";
  return FileStorageProviderEnum;
}(FileStorageProviderEnum || {});

/***/ }),

/***/ 51560:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Qq: () => (/* reexport safe */ _date_range_picker_resolver__WEBPACK_IMPORTED_MODULE_2__.Q),
/* harmony export */   Rc: () => (/* reexport safe */ _date_picker_utils__WEBPACK_IMPORTED_MODULE_1__.Rc),
/* harmony export */   Yi: () => (/* reexport safe */ _date_picker_utils__WEBPACK_IMPORTED_MODULE_1__.Yi),
/* harmony export */   fI: () => (/* reexport safe */ _date_range_picker_component__WEBPACK_IMPORTED_MODULE_0__.f),
/* harmony export */   tq: () => (/* reexport safe */ _date_picker_utils__WEBPACK_IMPORTED_MODULE_1__.tq)
/* harmony export */ });
/* harmony import */ var _date_range_picker_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61992);
/* harmony import */ var _date_picker_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15130);
/* harmony import */ var _date_range_picker_resolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20433);




/***/ }),

/***/ 51989:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* binding */ FileProviderSelectorModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14572);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10936);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56383);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19223);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);






let FileProviderSelectorModule = /*#__PURE__*/(() => {
  class FileProviderSelectorModule {
    static {
      this.ɵfac = function FileProviderSelectorModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || FileProviderSelectorModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .$C({
        type: FileProviderSelectorModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .CommonModule */ .MD, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .FormsModule */ .YN, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbSelectModule */ .VcP, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__/* .TranslateModule */ .h.forChild()]
      });
    }
  }
  return FileProviderSelectorModule;
})();

/***/ }),

/***/ 52532:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   m: () => (/* reexport safe */ _organization_component__WEBPACK_IMPORTED_MODULE_0__.m)
/* harmony export */ });
/* harmony import */ var _organization_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68008);


/***/ }),

/***/ 54640:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G: () => (/* reexport safe */ _activity_item_activity_item_component__WEBPACK_IMPORTED_MODULE_0__.G),
/* harmony export */   r: () => (/* reexport safe */ _activity_item_activity_item_module__WEBPACK_IMPORTED_MODULE_1__.r)
/* harmony export */ });
/* harmony import */ var _activity_item_activity_item_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17254);
/* harmony import */ var _activity_item_activity_item_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(93865);



/***/ }),

/***/ 56366:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ DatabaseStrategy)
/* harmony export */ });
class DatabaseStrategy {
  get serializables() {
    throw new Error('Method not implemented.');
  }
  set serializables(value) {
    throw new Error('Method not implemented.');
  }
  serialize() {
    throw new Error('Method not implemented.');
  }
  deSerialize() {
    throw new Error('Method not implemented.');
  }
}

/***/ }),

/***/ 56372:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   x: () => (/* binding */ EquipmentSharingPolicyMutationComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73014);
/* harmony import */ var _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38546);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10936);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26860);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(56383);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(34946);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(19223);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(14572);












const _c0 = (a0, a1) => ({
  "status-danger": a0,
  "status-success": a1
});
let EquipmentSharingPolicyMutationComponent = /*#__PURE__*/(() => {
  class EquipmentSharingPolicyMutationComponent extends _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_0__/* .TranslationBaseComponent */ .K {
    constructor(dialogRef, equipmentSharingPolicyService, fb, translationService) {
      super(translationService);
      this.dialogRef = dialogRef;
      this.equipmentSharingPolicyService = equipmentSharingPolicyService;
      this.fb = fb;
      this.translationService = translationService;
      this.form = this.fb.group({
        name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .Validators */ .k0.required],
        description: []
      });
    }
    ngOnInit() {
      this.initializeForm();
    }
    /**
     * Initialize the form with values from the existing equipment sharing policy.
     * If no policy exists, the form fields are set to empty strings.
     */
    initializeForm() {
      var _this = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(function* () {
        _this.form.patchValue({
          name: _this.equipmentSharingPolicy ? _this.equipmentSharingPolicy.name : '',
          description: _this.equipmentSharingPolicy ? _this.equipmentSharingPolicy.description : ''
        });
      })();
    }
    /**
     * Close the dialog with the given equipment sharing policy.
     * If no policy is provided, the dialog closes without passing any data.
     *
     * @param policy - The equipment sharing policy to pass when closing the dialog.
     */
    closeDialog(policy) {
      var _this2 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(function* () {
        _this2.dialogRef.close(policy);
      })();
    }
    /**
     * Save the equipment sharing policy.
     * Determines whether to create a new policy or update an existing one based on the presence of an ID.
     */
    saveEquipmentSharingPolicy() {
      var _this3 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(function* () {
        const {
          id: organizationId,
          tenantId
        } = _this3.selectedOrganization;
        const {
          name,
          description
        } = _this3.form.value;
        // Create an Equipment Sharing Policy object
        const equipmentSharingPolicy = {
          name,
          description,
          organizationId,
          tenantId
        };
        let equipmentPolicy;
        if (_this3.equipmentSharingPolicy) {
          const {
            id
          } = _this3.equipmentSharingPolicy;
          // Update existing policy
          equipmentPolicy = yield _this3.equipmentSharingPolicyService.update(id, equipmentSharingPolicy);
        } else {
          // Create new policy
          equipmentPolicy = yield _this3.equipmentSharingPolicyService.create(equipmentSharingPolicy);
        }
        // Close the dialog and pass the created/updated policy
        _this3.closeDialog(equipmentPolicy);
      })();
    }
    static {
      this.ɵfac = function EquipmentSharingPolicyMutationComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || EquipmentSharingPolicyMutationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .rXU(_nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbDialogRef */ .ybQ), _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_5__/* .EquipmentSharingPolicyService */ .i), _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .UntypedFormBuilder */ .ze), _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__/* .TranslateService */ .c$));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdefineComponent"] */ .VBU({
        type: EquipmentSharingPolicyMutationComponent,
        selectors: [["ngx-equipment-sharing-policy-mutation"]],
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
        decls: 29,
        vars: 27,
        consts: [[1, "main"], [1, "d-flex", "flex-column"], [1, "cancel"], [1, "fas", "fa-times", 3, "click"], [1, "title"], [1, "body"], [3, "formGroup"], [1, "row"], [1, "col-sm-12", "mb-3"], ["for", "name", 1, "label"], ["nbInput", "", "type", "text", "formControlName", "name", "fullWidth", "", 3, "placeholder", "ngClass"], ["for", "Description", 1, "label"], ["nbInput", "", "type", "text", "formControlName", "description", "fullWidth", "", 3, "placeholder"], [1, "text-left"], ["nbButton", "", "status", "basic", "outline", "", 1, "delete", "mr-3", 3, "click"], ["status", "success", "nbButton", "", 3, "click", "disabled"]],
        template: function EquipmentSharingPolicyMutationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .j41(0, "nb-card", 0)(1, "nb-card-header", 1)(2, "span", 2)(3, "i", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵlistener"] */ .bIt("click", function EquipmentSharingPolicyMutationComponent_Template_i_click_3_listener() {
              return ctx.closeDialog();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .j41(4, "h5", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ .EFF(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .nI1(6, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .j41(7, "nb-card-body", 5)(8, "form", 6)(9, "div", 7)(10, "div", 8)(11, "label", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ .EFF(12);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .nI1(13, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelement"] */ .nrm(14, "input", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .nI1(15, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .j41(16, "div", 8)(17, "label", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ .EFF(18);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .nI1(19, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelement"] */ .nrm(20, "input", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .nI1(21, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .k0s()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .j41(22, "nb-card-footer", 13)(23, "button", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵlistener"] */ .bIt("click", function EquipmentSharingPolicyMutationComponent_Template_button_click_23_listener() {
              return ctx.closeDialog();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ .EFF(24);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .nI1(25, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .j41(26, "button", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵlistener"] */ .bIt("click", function EquipmentSharingPolicyMutationComponent_Template_button_click_26_listener() {
              return ctx.saveEquipmentSharingPolicy();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ .EFF(27);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .nI1(28, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .k0s()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .bMT(6, 10, ctx.equipmentSharingPolicy ? "EQUIPMENT_SHARING_POLICY_PAGE.EDIT_EQUIPMENT_SHARING_POLICY" : "EQUIPMENT_SHARING_POLICY_PAGE.ADD_EQUIPMENT_SHARING_POLICY"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Y8G("formGroup", ctx.form);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .bMT(13, 12, "EQUIPMENT_SHARING_POLICY_PAGE.EQUIPMENT_SHARING_POLICY_NAME"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .bMT(15, 14, "EQUIPMENT_SHARING_POLICY_PAGE.EQUIPMENT_SHARING_POLICY_NAME"))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpureFunction2"] */ .l_i(24, _c0, ctx.form.controls["name"].invalid && ctx.form.controls["name"].dirty, ctx.form.controls["name"].valid && ctx.form.controls["name"].dirty));
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .bMT(19, 16, "EQUIPMENT_SHARING_POLICY_PAGE.EQUIPMENT_SHARING_POLICY_DESCRIPTION"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .bMT(21, 18, "EQUIPMENT_SHARING_POLICY_PAGE.EQUIPMENT_SHARING_POLICY_DESCRIPTION"));
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .bMT(25, 20, "BUTTONS.CANCEL"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Y8G("disabled", ctx.form.invalid);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .bMT(28, 22, "BUTTONS.SAVE"), " ");
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__/* .NgClass */ .YU, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* ["ɵNgNoValidate"] */ .qT, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .DefaultValueAccessor */ .me, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .NgControlStatus */ .BC, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .NgControlStatusGroup */ .cb, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .FormGroupDirective */ .j4, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .FormControlName */ .JD, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbCardComponent */ .SrT, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbCardBodyComponent */ .KH5, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbCardFooterComponent */ .VDm, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbCardHeaderComponent */ .zJv, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbButtonComponent */ .YP2, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbInputDirective */ .i6h, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__/* .TranslatePipe */ .D9],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   i[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n}\n[dir=ltr]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n[dir=rtl]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--gauzy-text-color-1);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(245, 109, 88, 0.3);\n  border-width: 2px;\n  color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(245, 109, 88, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 16px;\n  letter-spacing: 0em;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(126, 126, 143, 0.3);\n  border-width: 2px;\n  color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(126, 126, 143, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(37, 184, 105, 0.3);\n  border-width: 2px;\n  color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(37, 184, 105, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[disabled][_ngcontent-%COMP%], \n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic.btn-disabled[_ngcontent-%COMP%] {\n  background-color: var(--button-outline-basic-disabled-background-color);\n  border-color: var(--button-outline-basic-disabled-border-color);\n  color: var(--button-outline-basic-disabled-text-color);\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].primary.appearance-filled.status-primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  border: unset;\n  background-color: var(--color-primary-transparent-default);\n  box-shadow: var(--gauzy-shadow) 0, 0, 0, 0.15;\n}\n[dir=ltr]   [_nghost-%COMP%]     input, \n[dir=ltr]   [_nghost-%COMP%]     textarea {\n  text-align: start;\n}\n[dir=rtl]   [_nghost-%COMP%]     input, \n[dir=rtl]   [_nghost-%COMP%]     textarea {\n  text-align: end;\n}\n[_nghost-%COMP%]     input, \n[_nghost-%COMP%]     nb-select.appearance-outline.status-basic .select-button, \n[_nghost-%COMP%]     .ng-select .ng-select-container {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n  height: 42px !important;\n}\n[_nghost-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder, \n[_nghost-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {\n  top: unset !important;\n}\n[_nghost-%COMP%]     label, \n[_nghost-%COMP%]     .label {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  color: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]     textarea {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n}\n[_nghost-%COMP%]     .ng-select .ng-select-container input, \n[_nghost-%COMP%]     nb-tag-list input {\n  background-color: unset !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n}\n\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n}\n\n[dir=ltr]   [_nghost-%COMP%]   .col-sm-3[_ngcontent-%COMP%] {\n  padding-left: 0;\n}\n[dir=rtl]   [_nghost-%COMP%]   .col-sm-3[_ngcontent-%COMP%] {\n  padding-right: 0;\n}\n\n.status-label[_ngcontent-%COMP%] {\n  font-weight: bold;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: var(--border-radius);\n}\n.status-label[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 15px;\n  padding: 0;\n  margin: 0;\n  text-transform: uppercase;\n}\n\n.status-label.requested[_ngcontent-%COMP%] {\n  background: #ffc94d;\n}\n\n.status-label.approved[_ngcontent-%COMP%] {\n  background: #03e88c;\n}\n\n.status-label.active[_ngcontent-%COMP%] {\n  background: #e45959;\n}\n\nnb-radio-group[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.text-danger[_ngcontent-%COMP%] {\n  max-width: 100%;\n  font-size: 12px;\n  margin-top: 5px;\n}\n\n.main[_ngcontent-%COMP%] {\n  min-width: 800px;\n}\n\n[_nghost-%COMP%]   .main[_ngcontent-%COMP%] {\n  width: 445px;\n  min-width: unset;\n}"]
      });
    }
  }
  return EquipmentSharingPolicyMutationComponent;
})();

/***/ }),

/***/ 56511:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   b: () => (/* binding */ TextMaskDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);


let TextMaskDirective = /*#__PURE__*/(() => {
  class TextMaskDirective {
    // Constructor to inject dependencies
    constructor(el, renderer) {
      this.el = el;
      this.renderer = renderer;
      // Default configuration for text masking
      this._config = {
        text: '',
        showOriginal: false,
        replacement: 0.5
      };
    }
    // Apply the configured text mask to the element
    applyTextMask() {
      // Get the text based on the showOriginal configuration
      const text = this.config.showOriginal ? this.config.text : this.maskText(this.config.text);
      // Set the masked or original text to the element's inner text
      this.renderer.setProperty(this.el.nativeElement, 'innerText', text);
    }
    // Mask the given text based on the configured replacement percentage
    maskText(value) {
      // If text is not provided, return an empty string
      if (!value) {
        return '';
      }
      // Convert the text into an array of characters
      const text = value.split('');
      // Replace the specified percentage of characters with asterisks ('*')
      for (let i = 0; i < Math.floor(this.config.replacement * text.length); i++) {
        text[i] = '*';
      }
      // Join the array back into a string and return the masked text
      return text.join('');
    }
    // Getter for the current configuration
    get config() {
      return this._config;
    }
    // Setter for updating the configuration and applying the text mask
    set config(partialConfig) {
      // Merge the provided partial configuration with the default configuration
      Object.assign(this._config, partialConfig);
      // Apply the text mask with the updated configuration
      this.applyTextMask();
    }
    static {
      this.ɵfac = function TextMaskDirective_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || TextMaskDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* .ElementRef */ .aKT), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* .Renderer2 */ .sFG));
      };
    }
    static {
      this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineDirective"] */ .FsC({
        type: TextMaskDirective,
        selectors: [["", "gaTextMask", ""]],
        inputs: {
          config: "config"
        },
        standalone: false
      });
    }
  }
  return TextMaskDirective;
})();

/***/ }),

/***/ 57491:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HA: () => (/* reexport safe */ _components_inner_component_invoice_view_inner_module__WEBPACK_IMPORTED_MODULE_1__.H),
/* harmony export */   Mp: () => (/* reexport safe */ _generate_pdf__WEBPACK_IMPORTED_MODULE_3__.M),
/* harmony export */   Y_: () => (/* reexport safe */ _generate_csv__WEBPACK_IMPORTED_MODULE_2__.Y),
/* harmony export */   mL: () => (/* reexport safe */ _components_inner_component_invoice_view_inner_component__WEBPACK_IMPORTED_MODULE_0__.m)
/* harmony export */ });
/* harmony import */ var _components_inner_component_invoice_view_inner_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62694);
/* harmony import */ var _components_inner_component_invoice_view_inner_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57705);
/* harmony import */ var _generate_csv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(96789);
/* harmony import */ var _generate_pdf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17323);





/***/ }),

/***/ 57509:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* reexport safe */ _entity_with_members_card_component__WEBPACK_IMPORTED_MODULE_0__.a),
/* harmony export */   x: () => (/* reexport safe */ _entity_with_members_card_module__WEBPACK_IMPORTED_MODULE_1__.x)
/* harmony export */ });
/* harmony import */ var _entity_with_members_card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3253);
/* harmony import */ var _entity_with_members_card_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(168);



/***/ }),

/***/ 57943:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ ManageAppointmentModule)
/* harmony export */ });
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56383);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(55567);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19223);
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(38834);
/* harmony import */ var _employee_schedules_employee_schedule_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7878);
/* harmony import */ var _timer_picker_timer_picker_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1618);
/* harmony import */ var _employee_employee_multi_select_employee_multi_select_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6269);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);









let ManageAppointmentModule = /*#__PURE__*/(() => {
  class ManageAppointmentModule {
    static {
      this.ɵfac = function ManageAppointmentModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || ManageAppointmentModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .$C({
        type: ManageAppointmentModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbButtonModule */ .P5N, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbCardModule */ .lVF, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbCheckboxModule */ .Ad8, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbIconModule */ .clu, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbInputModule */ .pty, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbSpinnerModule */ .gYs, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_2__/* .NgSelectModule */ .MQ, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__/* .TranslateModule */ .h.forChild(), _shared_module__WEBPACK_IMPORTED_MODULE_4__/* .SharedModule */ .G, _employee_schedules_employee_schedule_module__WEBPACK_IMPORTED_MODULE_5__/* .EmployeeScheduleModule */ .K, _timer_picker_timer_picker_module__WEBPACK_IMPORTED_MODULE_6__/* .TimerPickerModule */ .O, _employee_employee_multi_select_employee_multi_select_module__WEBPACK_IMPORTED_MODULE_7__/* .EmployeeMultiSelectModule */ .I]
      });
    }
  }
  return ManageAppointmentModule;
})();

/***/ }),

/***/ 58071:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* reexport safe */ _date_component__WEBPACK_IMPORTED_MODULE_0__.$)
/* harmony export */ });
/* harmony import */ var _date_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14086);


/***/ }),

/***/ 59581:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Cy: () => (/* reexport safe */ _alert_alert_component__WEBPACK_IMPORTED_MODULE_1__.C),
/* harmony export */   K5: () => (/* reexport safe */ _directive__WEBPACK_IMPORTED_MODULE_5__.K5),
/* harmony export */   Qv: () => (/* reexport safe */ _directive__WEBPACK_IMPORTED_MODULE_5__.Qv),
/* harmony export */   YQ: () => (/* reexport safe */ _confirm_confirm_component__WEBPACK_IMPORTED_MODULE_2__.Y),
/* harmony export */   c4: () => (/* reexport safe */ _prompt_prompt_component__WEBPACK_IMPORTED_MODULE_3__.c),
/* harmony export */   gO: () => (/* reexport safe */ _quick_actions_quick_actions_component__WEBPACK_IMPORTED_MODULE_4__.g),
/* harmony export */   ob: () => (/* reexport safe */ _directive__WEBPACK_IMPORTED_MODULE_5__.ob),
/* harmony export */   ss: () => (/* reexport safe */ _dialogs_module__WEBPACK_IMPORTED_MODULE_0__.s)
/* harmony export */ });
/* harmony import */ var _dialogs_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18180);
/* harmony import */ var _alert_alert_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22447);
/* harmony import */ var _confirm_confirm_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74863);
/* harmony import */ var _prompt_prompt_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(89697);
/* harmony import */ var _quick_actions_quick_actions_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(92375);
/* harmony import */ var _directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(92099);







/***/ }),

/***/ 63830:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $V: () => (/* reexport safe */ _product_type_filter_component__WEBPACK_IMPORTED_MODULE_12__.$),
/* harmony export */   Kt: () => (/* reexport safe */ _toggle_filter_toggle_filter_component__WEBPACK_IMPORTED_MODULE_9__.K),
/* harmony export */   Kx: () => (/* reexport safe */ _table_filters_module__WEBPACK_IMPORTED_MODULE_6__.K),
/* harmony export */   Pb: () => (/* reexport safe */ _product_category_filter_component__WEBPACK_IMPORTED_MODULE_11__.P),
/* harmony export */   SE: () => (/* reexport safe */ _organization_team_filter_component__WEBPACK_IMPORTED_MODULE_3__.S),
/* harmony export */   UZ: () => (/* reexport safe */ _input_filter_component__WEBPACK_IMPORTED_MODULE_1__.U),
/* harmony export */   Ud: () => (/* reexport safe */ _expense_category_filter_component__WEBPACK_IMPORTED_MODULE_0__.U),
/* harmony export */   XY: () => (/* reexport safe */ _task_status_filter_component__WEBPACK_IMPORTED_MODULE_8__.X),
/* harmony export */   Yt: () => (/* reexport safe */ _tags_color_filter_component__WEBPACK_IMPORTED_MODULE_7__.Y),
/* harmony export */   _M: () => (/* reexport safe */ _vendor_filter_component__WEBPACK_IMPORTED_MODULE_10__._),
/* harmony export */   hV: () => (/* reexport safe */ _organization_contact_filter_component__WEBPACK_IMPORTED_MODULE_2__.h),
/* harmony export */   x$: () => (/* reexport safe */ _range_filter_component__WEBPACK_IMPORTED_MODULE_5__.x),
/* harmony export */   zH: () => (/* reexport safe */ _payment_method_filter_component__WEBPACK_IMPORTED_MODULE_4__.z)
/* harmony export */ });
/* harmony import */ var _expense_category_filter_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16631);
/* harmony import */ var _input_filter_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21968);
/* harmony import */ var _organization_contact_filter_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(68240);
/* harmony import */ var _organization_team_filter_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(78433);
/* harmony import */ var _payment_method_filter_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5310);
/* harmony import */ var _range_filter_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(24059);
/* harmony import */ var _table_filters_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(68000);
/* harmony import */ var _tags_color_filter_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(87791);
/* harmony import */ var _task_status_filter_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(51782);
/* harmony import */ var _toggle_filter_toggle_filter_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(47944);
/* harmony import */ var _vendor_filter_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(82672);
/* harmony import */ var _product_category_filter_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(91748);
/* harmony import */ var _product_type_filter_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(89160);














/***/ }),

/***/ 64827:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* reexport safe */ _favorite_toggle_module__WEBPACK_IMPORTED_MODULE_1__.F),
/* harmony export */   M: () => (/* reexport safe */ _favorite_toggle_component__WEBPACK_IMPORTED_MODULE_0__.M)
/* harmony export */ });
/* harmony import */ var _favorite_toggle_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6421);
/* harmony import */ var _favorite_toggle_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58504);



/***/ }),

/***/ 66305:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   gt: () => (/* reexport safe */ _work_in_progress_module__WEBPACK_IMPORTED_MODULE_1__.g),
/* harmony export */   so: () => (/* reexport safe */ _work_in_progress_routes__WEBPACK_IMPORTED_MODULE_2__.s),
/* harmony export */   xb: () => (/* reexport safe */ _work_in_progress_component__WEBPACK_IMPORTED_MODULE_0__.x)
/* harmony export */ });
/* harmony import */ var _work_in_progress_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83605);
/* harmony import */ var _work_in_progress_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41064);
/* harmony import */ var _work_in_progress_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32626);




/***/ }),

/***/ 66540:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F7: () => (/* reexport safe */ _timezone_filter_component__WEBPACK_IMPORTED_MODULE_1__.F),
/* harmony export */   FQ: () => (/* reexport safe */ _time_zone_service__WEBPACK_IMPORTED_MODULE_0__.F),
/* harmony export */   GY: () => (/* reexport safe */ _timezone_filter_module__WEBPACK_IMPORTED_MODULE_2__.G)
/* harmony export */ });
/* harmony import */ var _time_zone_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6195);
/* harmony import */ var _timezone_filter_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95465);
/* harmony import */ var _timezone_filter_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35836);




/***/ }),

/***/ 67974:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: () => (/* reexport safe */ _timer_icon_factory__WEBPACK_IMPORTED_MODULE_0__.p)
/* harmony export */ });
/* harmony import */ var _timer_icon_factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23078);


/***/ }),

/***/ 68049:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* reexport safe */ _feature_toggle_module__WEBPACK_IMPORTED_MODULE_0__.H),
/* harmony export */   U: () => (/* reexport safe */ _feature_toggle_component__WEBPACK_IMPORTED_MODULE_1__.U)
/* harmony export */ });
/* harmony import */ var _feature_toggle_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42472);
/* harmony import */ var _feature_toggle_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34261);



/***/ }),

/***/ 68565:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* reexport safe */ _currency_module__WEBPACK_IMPORTED_MODULE_0__.C),
/* harmony export */   X: () => (/* reexport safe */ _currency_component__WEBPACK_IMPORTED_MODULE_1__.X)
/* harmony export */ });
/* harmony import */ var _currency_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43629);
/* harmony import */ var _currency_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64251);



/***/ }),

/***/ 68928:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: () => (/* binding */ RemoveLodashPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);

let RemoveLodashPipe = /*#__PURE__*/(() => {
  class RemoveLodashPipe {
    transform(value, args) {
      if (value) {
        return value.split('_').join(' ');
      } else {
        return value;
      }
    }
    static {
      this.ɵfac = function RemoveLodashPipe_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || RemoveLodashPipe)();
      };
    }
    static {
      this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefinePipe"] */ .EJ8({
        name: "removeLodash",
        type: RemoveLodashPipe,
        pure: true,
        standalone: false
      });
    }
  }
  return RemoveLodashPipe;
})();

/***/ }),

/***/ 69270:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Mv: () => (/* reexport safe */ _image_uploader_module__WEBPACK_IMPORTED_MODULE_2__.M),
/* harmony export */   a_: () => (/* reexport safe */ _image_uploader_base_component__WEBPACK_IMPORTED_MODULE_0__.a),
/* harmony export */   tb: () => (/* reexport safe */ _image_uploader_component__WEBPACK_IMPORTED_MODULE_1__.t)
/* harmony export */ });
/* harmony import */ var _image_uploader_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33755);
/* harmony import */ var _image_uploader_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79455);
/* harmony import */ var _image_uploader_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(54462);




/***/ }),

/***/ 69970:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BH: () => (/* reexport safe */ _appointment_calendar_appointment_calendar_component__WEBPACK_IMPORTED_MODULE_0__.B),
/* harmony export */   Bp: () => (/* reexport safe */ _manage_appointment_manage_appointment_module__WEBPACK_IMPORTED_MODULE_5__.B),
/* harmony export */   Eo: () => (/* reexport safe */ _manage_appointment_manage_appointment_component__WEBPACK_IMPORTED_MODULE_4__.E),
/* harmony export */   KU: () => (/* reexport safe */ _employee_schedules_employee_schedule_module__WEBPACK_IMPORTED_MODULE_3__.K),
/* harmony export */   ZV: () => (/* reexport safe */ _employee_schedules_employee_schedule_component__WEBPACK_IMPORTED_MODULE_2__.Z),
/* harmony export */   hZ: () => (/* reexport safe */ _timezone_selector_timezone_selector_module__WEBPACK_IMPORTED_MODULE_7__.h),
/* harmony export */   i1: () => (/* reexport safe */ _timezone_selector_timezone_selector_component__WEBPACK_IMPORTED_MODULE_6__.i),
/* harmony export */   kd: () => (/* reexport safe */ _appointment_calendar_appointment_calendar_module__WEBPACK_IMPORTED_MODULE_1__.k)
/* harmony export */ });
/* harmony import */ var _appointment_calendar_appointment_calendar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32270);
/* harmony import */ var _appointment_calendar_appointment_calendar_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81697);
/* harmony import */ var _employee_schedules_employee_schedule_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19255);
/* harmony import */ var _employee_schedules_employee_schedule_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7878);
/* harmony import */ var _manage_appointment_manage_appointment_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(34776);
/* harmony import */ var _manage_appointment_manage_appointment_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(57943);
/* harmony import */ var _timezone_selector_timezone_selector_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(49064);
/* harmony import */ var _timezone_selector_timezone_selector_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(58151);









/***/ }),

/***/ 70268:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $3: () => (/* reexport safe */ _knowledge_base_knowledge_base_component__WEBPACK_IMPORTED_MODULE_6__.$),
/* harmony export */   Aj: () => (/* reexport safe */ _add_icon_add_icon_component__WEBPACK_IMPORTED_MODULE_0__.A),
/* harmony export */   I_: () => (/* reexport safe */ _delete_base_delete_base_component__WEBPACK_IMPORTED_MODULE_2__.I),
/* harmony export */   Tb: () => (/* reexport safe */ _delete_category_delete_category_component__WEBPACK_IMPORTED_MODULE_4__.T),
/* harmony export */   Uk: () => (/* reexport safe */ _delete_category_delete_category_module__WEBPACK_IMPORTED_MODULE_5__.U),
/* harmony export */   V0: () => (/* reexport safe */ _add_icon_add_icon_module__WEBPACK_IMPORTED_MODULE_1__.V),
/* harmony export */   V3: () => (/* reexport safe */ _delete_base_delete_base_module__WEBPACK_IMPORTED_MODULE_3__.V),
/* harmony export */   kc: () => (/* reexport safe */ _sidebar_component__WEBPACK_IMPORTED_MODULE_8__.k),
/* harmony export */   nA: () => (/* reexport safe */ _sidebar_module__WEBPACK_IMPORTED_MODULE_9__.n),
/* harmony export */   s2: () => (/* reexport safe */ _knowledge_base_knowledge_base_module__WEBPACK_IMPORTED_MODULE_7__.s)
/* harmony export */ });
/* harmony import */ var _add_icon_add_icon_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81002);
/* harmony import */ var _add_icon_add_icon_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39101);
/* harmony import */ var _delete_base_delete_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41858);
/* harmony import */ var _delete_base_delete_base_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(40357);
/* harmony import */ var _delete_category_delete_category_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(47850);
/* harmony import */ var _delete_category_delete_category_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(57181);
/* harmony import */ var _knowledge_base_knowledge_base_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9256);
/* harmony import */ var _knowledge_base_knowledge_base_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(77543);
/* harmony import */ var _sidebar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(49161);
/* harmony import */ var _sidebar_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(70460);











/***/ }),

/***/ 70564:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* reexport safe */ _smtp_module__WEBPACK_IMPORTED_MODULE_1__.L),
/* harmony export */   W: () => (/* reexport safe */ _smtp_component__WEBPACK_IMPORTED_MODULE_0__.W)
/* harmony export */ });
/* harmony import */ var _smtp_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10135);
/* harmony import */ var _smtp_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37414);



/***/ }),

/***/ 72798:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   r: () => (/* reexport safe */ _proposal_template_select_module__WEBPACK_IMPORTED_MODULE_1__.r),
/* harmony export */   y: () => (/* reexport safe */ _proposal_template_select_proposal_template_select_component__WEBPACK_IMPORTED_MODULE_0__.y)
/* harmony export */ });
/* harmony import */ var _proposal_template_select_proposal_template_select_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(99434);
/* harmony import */ var _proposal_template_select_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24906);



/***/ }),

/***/ 74053:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CS: () => (/* reexport safe */ _candidate_confirmation_delete_interview_delete_interview_component__WEBPACK_IMPORTED_MODULE_4__.C),
/* harmony export */   DH: () => (/* reexport safe */ _candidate_mutation_candidate_mutation_module__WEBPACK_IMPORTED_MODULE_18__.D),
/* harmony export */   JV: () => (/* reexport safe */ _candidate_interview_mutation_candidate_criterions_form_candidate_criterions_form_component__WEBPACK_IMPORTED_MODULE_11__.J),
/* harmony export */   Ku: () => (/* reexport safe */ _candidate_mutation_candidate_mutation_component__WEBPACK_IMPORTED_MODULE_17__.K),
/* harmony export */   NY: () => (/* reexport safe */ _selectors_candidate_interviewer_select_candidate_interviewer_select_component__WEBPACK_IMPORTED_MODULE_23__.N),
/* harmony export */   Nn: () => (/* reexport safe */ _selectors_candidate_multi_select_candidate_multi_select_module__WEBPACK_IMPORTED_MODULE_20__.N),
/* harmony export */   OT: () => (/* reexport safe */ _candidate_cv_candidate_cv_component__WEBPACK_IMPORTED_MODULE_6__.O),
/* harmony export */   QB: () => (/* reexport safe */ _candidate_interview_info_candidate_interview_info_component__WEBPACK_IMPORTED_MODULE_9__.Q),
/* harmony export */   T1: () => (/* reexport safe */ _candidate_confirmation_delete_feedback_delete_feedback_module__WEBPACK_IMPORTED_MODULE_3__.T),
/* harmony export */   V2: () => (/* reexport safe */ _candidate_interview_info_candidate_interview_info_module__WEBPACK_IMPORTED_MODULE_10__.V),
/* harmony export */   V_: () => (/* reexport safe */ _selectors_candidate_select_candidate_select_component__WEBPACK_IMPORTED_MODULE_21__.V),
/* harmony export */   WD: () => (/* reexport safe */ _candidate_interview_mutation_candidate_interview_mutation_module__WEBPACK_IMPORTED_MODULE_14__.W),
/* harmony export */   Xz: () => (/* reexport safe */ _candidate_interview_mutation_candidate_interview_mutation_component__WEBPACK_IMPORTED_MODULE_13__.X),
/* harmony export */   Yb: () => (/* reexport safe */ _candidate_calendar_info_candidate_calendar_info_module__WEBPACK_IMPORTED_MODULE_1__.Y),
/* harmony export */   _9: () => (/* reexport safe */ _candidate_interview_mutation_candidate_interview_form_candidate_interview_form_component__WEBPACK_IMPORTED_MODULE_12__._),
/* harmony export */   _H: () => (/* reexport safe */ _selectors_candidate_select_candidate_select_module__WEBPACK_IMPORTED_MODULE_22__._),
/* harmony export */   _P: () => (/* reexport safe */ _selectors_candidate_interviewer_select_candidate_interviewer_select_module__WEBPACK_IMPORTED_MODULE_24__._),
/* harmony export */   jw: () => (/* reexport safe */ _candidate_calendar_info_candidate_calendar_info_component__WEBPACK_IMPORTED_MODULE_0__.j),
/* harmony export */   nD: () => (/* reexport safe */ _candidate_confirmation_delete_interview_delete_interview_module__WEBPACK_IMPORTED_MODULE_5__.n),
/* harmony export */   oc: () => (/* reexport safe */ _candidate_interview_mutation_candidate_notification_form_candidate_notification_form_component__WEBPACK_IMPORTED_MODULE_16__.o),
/* harmony export */   qM: () => (/* reexport safe */ _candidate_confirmation_delete_feedback_delete_feedback_component__WEBPACK_IMPORTED_MODULE_2__.q),
/* harmony export */   vV: () => (/* reexport safe */ _candidate_interview_mutation_candidate_notification_form_candidate_email_candidate_email_component__WEBPACK_IMPORTED_MODULE_15__.v),
/* harmony export */   wm: () => (/* reexport safe */ _candidate_interview_feedback_candidate_interview_feedback_module__WEBPACK_IMPORTED_MODULE_8__.w),
/* harmony export */   xO: () => (/* reexport safe */ _candidate_interview_feedback_candidate_interview_feedback_component__WEBPACK_IMPORTED_MODULE_7__.x),
/* harmony export */   y3: () => (/* reexport safe */ _selectors_candidate_multi_select_candidate_multi_select_component__WEBPACK_IMPORTED_MODULE_19__.y)
/* harmony export */ });
/* harmony import */ var _candidate_calendar_info_candidate_calendar_info_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82599);
/* harmony import */ var _candidate_calendar_info_candidate_calendar_info_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96598);
/* harmony import */ var _candidate_confirmation_delete_feedback_delete_feedback_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37957);
/* harmony import */ var _candidate_confirmation_delete_feedback_delete_feedback_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(89848);
/* harmony import */ var _candidate_confirmation_delete_interview_delete_interview_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(15225);
/* harmony import */ var _candidate_confirmation_delete_interview_delete_interview_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(49676);
/* harmony import */ var _candidate_cv_candidate_cv_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(98723);
/* harmony import */ var _candidate_interview_feedback_candidate_interview_feedback_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(11459);
/* harmony import */ var _candidate_interview_feedback_candidate_interview_feedback_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(56274);
/* harmony import */ var _candidate_interview_info_candidate_interview_info_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(46125);
/* harmony import */ var _candidate_interview_info_candidate_interview_info_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(76592);
/* harmony import */ var _candidate_interview_mutation_candidate_criterions_form_candidate_criterions_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4293);
/* harmony import */ var _candidate_interview_mutation_candidate_interview_form_candidate_interview_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(35823);
/* harmony import */ var _candidate_interview_mutation_candidate_interview_mutation_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(94251);
/* harmony import */ var _candidate_interview_mutation_candidate_interview_mutation_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(78890);
/* harmony import */ var _candidate_interview_mutation_candidate_notification_form_candidate_email_candidate_email_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(55122);
/* harmony import */ var _candidate_interview_mutation_candidate_notification_form_candidate_notification_form_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(97205);
/* harmony import */ var _candidate_mutation_candidate_mutation_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(31823);
/* harmony import */ var _candidate_mutation_candidate_mutation_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(14062);
/* harmony import */ var _selectors_candidate_multi_select_candidate_multi_select_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(79768);
/* harmony import */ var _selectors_candidate_multi_select_candidate_multi_select_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(16311);
/* harmony import */ var _selectors_candidate_select_candidate_select_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(67552);
/* harmony import */ var _selectors_candidate_select_candidate_select_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(32239);
/* harmony import */ var _selectors_candidate_interviewer_select_candidate_interviewer_select_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(4890);
/* harmony import */ var _selectors_candidate_interviewer_select_candidate_interviewer_select_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(40653);


























/***/ }),

/***/ 74794:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $O: () => (/* reexport safe */ _date__WEBPACK_IMPORTED_MODULE_1__.$),
/* harmony export */   AI: () => (/* reexport safe */ _project__WEBPACK_IMPORTED_MODULE_5__.AI),
/* harmony export */   Kj: () => (/* reexport safe */ _project__WEBPACK_IMPORTED_MODULE_5__.Kj),
/* harmony export */   Ol: () => (/* reexport safe */ _employee__WEBPACK_IMPORTED_MODULE_3__.Ol),
/* harmony export */   Qq: () => (/* reexport safe */ _date_range_picker__WEBPACK_IMPORTED_MODULE_2__.Qq),
/* harmony export */   R7: () => (/* reexport safe */ _employee__WEBPACK_IMPORTED_MODULE_3__.R7),
/* harmony export */   Rc: () => (/* reexport safe */ _date_range_picker__WEBPACK_IMPORTED_MODULE_2__.Rc),
/* harmony export */   YZ: () => (/* reexport safe */ _team__WEBPACK_IMPORTED_MODULE_6__.YZ),
/* harmony export */   Yi: () => (/* reexport safe */ _date_range_picker__WEBPACK_IMPORTED_MODULE_2__.Yi),
/* harmony export */   aB: () => (/* reexport safe */ _project__WEBPACK_IMPORTED_MODULE_5__.aB),
/* harmony export */   bv: () => (/* reexport safe */ _selectors_module__WEBPACK_IMPORTED_MODULE_0__.b),
/* harmony export */   fI: () => (/* reexport safe */ _date_range_picker__WEBPACK_IMPORTED_MODULE_2__.fI),
/* harmony export */   iQ: () => (/* reexport safe */ _team__WEBPACK_IMPORTED_MODULE_6__.iQ),
/* harmony export */   mJ: () => (/* reexport safe */ _organization__WEBPACK_IMPORTED_MODULE_4__.m),
/* harmony export */   sV: () => (/* reexport safe */ _team__WEBPACK_IMPORTED_MODULE_6__.sV),
/* harmony export */   tq: () => (/* reexport safe */ _date_range_picker__WEBPACK_IMPORTED_MODULE_2__.tq),
/* harmony export */   zJ: () => (/* reexport safe */ _employee__WEBPACK_IMPORTED_MODULE_3__.zJ)
/* harmony export */ });
/* harmony import */ var _selectors_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98048);
/* harmony import */ var _date__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58071);
/* harmony import */ var _date_range_picker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(51560);
/* harmony import */ var _employee__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(98319);
/* harmony import */ var _organization__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(52532);
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(37704);
/* harmony import */ var _team__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(25230);








/***/ }),

/***/ 75757:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cK: () => (/* reexport safe */ _card_grid_component__WEBPACK_IMPORTED_MODULE_1__.c),
/* harmony export */   n4: () => (/* reexport safe */ _card_grid_module__WEBPACK_IMPORTED_MODULE_2__.n),
/* harmony export */   q9: () => (/* reexport safe */ _card_grid_custom_component__WEBPACK_IMPORTED_MODULE_0__.q)
/* harmony export */ });
/* harmony import */ var _card_grid_custom_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31835);
/* harmony import */ var _card_grid_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49517);
/* harmony import */ var _card_grid_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(80784);




/***/ }),

/***/ 75872:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A$: () => (/* reexport safe */ _equipment_mutation_module__WEBPACK_IMPORTED_MODULE_1__.A),
/* harmony export */   Fi: () => (/* reexport safe */ _equipment_sharing_equipment_sharing_mutation_component__WEBPACK_IMPORTED_MODULE_2__.F),
/* harmony export */   Qs: () => (/* reexport safe */ _equipment_sharing_equipment_sharing_mutation_module__WEBPACK_IMPORTED_MODULE_3__.Q),
/* harmony export */   YX: () => (/* reexport safe */ _equipment_sharing_policy_equipment_sharing_policy_mutation_module__WEBPACK_IMPORTED_MODULE_5__.Y),
/* harmony export */   j4: () => (/* reexport safe */ _equipment_mutation_component__WEBPACK_IMPORTED_MODULE_0__.j),
/* harmony export */   xb: () => (/* reexport safe */ _equipment_sharing_policy_equipment_sharing_policy_mutation_component__WEBPACK_IMPORTED_MODULE_4__.x)
/* harmony export */ });
/* harmony import */ var _equipment_mutation_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75119);
/* harmony import */ var _equipment_mutation_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4398);
/* harmony import */ var _equipment_sharing_equipment_sharing_mutation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(98610);
/* harmony import */ var _equipment_sharing_equipment_sharing_mutation_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(30037);
/* harmony import */ var _equipment_sharing_policy_equipment_sharing_policy_mutation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(56372);
/* harmony import */ var _equipment_sharing_policy_equipment_sharing_policy_mutation_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(18131);







/***/ }),

/***/ 77369:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   k: () => (/* binding */ faqs)
/* harmony export */ });
const faqs = [{
  title: 'Reset password',
  icon: 'unlock-outline',
  content: 'Open your Account. You might need to sign in. Under "Security", select Signing in. Choose Password. You might need to sign in again. Enter your new password, then select Change Password.'
}, {
  title: 'Secure password',
  icon: 'umbrella-outline',
  content: 'For example, Use a password that has at least 8-16 characters, use at least one number, one uppercase letter one lowercase letter and one special symbol.'
}];

/***/ }),

/***/ 77395:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: () => (/* reexport safe */ _leaflet_leaflet_module__WEBPACK_IMPORTED_MODULE_0__.q),
/* harmony export */   x: () => (/* reexport safe */ _leaflet_leaflet_component__WEBPACK_IMPORTED_MODULE_1__.x)
/* harmony export */ });
/* harmony import */ var _leaflet_leaflet_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48052);
/* harmony import */ var _leaflet_leaflet_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7281);



/***/ }),

/***/ 78158:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Gq: () => (/* reexport safe */ _timer_range_picker_timer_range_picker_component__WEBPACK_IMPORTED_MODULE_2__.G),
/* harmony export */   Oi: () => (/* reexport safe */ _timer_picker_module__WEBPACK_IMPORTED_MODULE_1__.O),
/* harmony export */   fK: () => (/* reexport safe */ _timer_picker_timer_picker_component__WEBPACK_IMPORTED_MODULE_0__.f)
/* harmony export */ });
/* harmony import */ var _timer_picker_timer_picker_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81386);
/* harmony import */ var _timer_picker_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1618);
/* harmony import */ var _timer_range_picker_timer_range_picker_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(68122);




/***/ }),

/***/ 78767:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O: () => (/* reexport safe */ _contact_select_component__WEBPACK_IMPORTED_MODULE_0__.O),
/* harmony export */   T: () => (/* reexport safe */ _contact_select_module__WEBPACK_IMPORTED_MODULE_1__.T)
/* harmony export */ });
/* harmony import */ var _contact_select_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84597);
/* harmony import */ var _contact_select_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11336);



/***/ }),

/***/ 78883:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ DangerZoneMutationModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14572);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10936);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(56383);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(19223);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(36042);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27038);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12272);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);







let DangerZoneMutationModule = /*#__PURE__*/(() => {
  class DangerZoneMutationModule {
    static {
      this.ɵfac = function DangerZoneMutationModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || DangerZoneMutationModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .$C({
        type: DangerZoneMutationModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .G2t({
        providers: [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_1__/* .AuthService */ .u, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_2__/* .RoleService */ .W, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_3__/* .IncomeService */ .H],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__/* .CommonModule */ .MD, _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .FormsModule */ .YN, _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .ReactiveFormsModule */ .X1, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__/* .NbButtonModule */ .P5N, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__/* .NbCardModule */ .lVF, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__/* .NbDatepickerModule */ .TgK, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__/* .NbIconModule */ .clu, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__/* .NbInputModule */ .pty, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__/* .NbListModule */ .PD_, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__/* .NbSelectModule */ .VcP, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__/* .NbToastrModule */ .EcJ, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__/* .TranslateModule */ .h.forChild()]
      });
    }
  }
  return DangerZoneMutationModule;
})();

/***/ }),

/***/ 79832:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   j: () => (/* reexport safe */ _country_module__WEBPACK_IMPORTED_MODULE_0__.j),
/* harmony export */   u: () => (/* reexport safe */ _country_component__WEBPACK_IMPORTED_MODULE_1__.u)
/* harmony export */ });
/* harmony import */ var _country_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93818);
/* harmony import */ var _country_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42491);



/***/ }),

/***/ 83874:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Hh: () => (/* reexport safe */ _invites_project_names_project_names_component__WEBPACK_IMPORTED_MODULE_6__.H),
/* harmony export */   MP: () => (/* reexport safe */ _invites_invites_component__WEBPACK_IMPORTED_MODULE_8__.M),
/* harmony export */   Vx: () => (/* reexport safe */ _forms_email_invite_form_email_invite_form_component__WEBPACK_IMPORTED_MODULE_0__.V),
/* harmony export */   bh: () => (/* reexport safe */ _invites_client_names_client_names_component__WEBPACK_IMPORTED_MODULE_4__.b),
/* harmony export */   cQ: () => (/* reexport safe */ _invites_resend_confirmation_resend_confirmation_component__WEBPACK_IMPORTED_MODULE_7__.c),
/* harmony export */   hl: () => (/* reexport safe */ _invite_mutation_invite_mutation_module__WEBPACK_IMPORTED_MODULE_3__.h),
/* harmony export */   sl: () => (/* reexport safe */ _invites_invites_module__WEBPACK_IMPORTED_MODULE_9__.s),
/* harmony export */   wi: () => (/* reexport safe */ _invite_mutation_invite_mutation_component__WEBPACK_IMPORTED_MODULE_2__.w),
/* harmony export */   wp: () => (/* reexport safe */ _invites_department_names_department_names_component__WEBPACK_IMPORTED_MODULE_5__.w),
/* harmony export */   xp: () => (/* reexport safe */ _forms_invite_forms_module__WEBPACK_IMPORTED_MODULE_1__.x)
/* harmony export */ });
/* harmony import */ var _forms_email_invite_form_email_invite_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44911);
/* harmony import */ var _forms_invite_forms_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26298);
/* harmony import */ var _invite_mutation_invite_mutation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6231);
/* harmony import */ var _invite_mutation_invite_mutation_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41030);
/* harmony import */ var _invites_client_names_client_names_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19916);
/* harmony import */ var _invites_department_names_department_names_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(82546);
/* harmony import */ var _invites_project_names_project_names_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(57394);
/* harmony import */ var _invites_resend_confirmation_resend_confirmation_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(34190);
/* harmony import */ var _invites_invites_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(37095);
/* harmony import */ var _invites_invites_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(27478);











/***/ }),

/***/ 84621:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   k: () => (/* binding */ CompanyLogoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14572);


let CompanyLogoComponent = /*#__PURE__*/(() => {
  class CompanyLogoComponent {
    static {
      this.ɵfac = function CompanyLogoComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || CompanyLogoComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: CompanyLogoComponent,
        selectors: [["ga-company-logo"]],
        inputs: {
          value: "value",
          rowData: "rowData"
        },
        standalone: false,
        decls: 2,
        vars: 4,
        template: function CompanyLogoComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(0, "i");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(1, "lowercase");
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵclassMap"] */ .HbH(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(1, 2, "fab fa-" + (ctx.rowData == null ? null : ctx.rowData.name)));
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .LowerCasePipe */ .GH],
        styles: ["i[_ngcontent-%COMP%] {\n  font-family: Font Awesome 5 Brands;\n  font-size: 18px;\n  font-weight: 400;\n  line-height: 21px;\n  letter-spacing: 0em;\n  text-align: left;\n  color: var(--gauzy-text-color-1);\n  padding: 0.75rem;\n}"]
      });
    }
  }
  return CompanyLogoComponent;
})();

/***/ }),

/***/ 85555:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K9: () => (/* reexport safe */ _counter_point_component__WEBPACK_IMPORTED_MODULE_1__.K),
/* harmony export */   bR: () => (/* reexport safe */ _point_point_class__WEBPACK_IMPORTED_MODULE_2__.b),
/* harmony export */   td: () => (/* reexport safe */ _counter_point_module__WEBPACK_IMPORTED_MODULE_0__.t)
/* harmony export */ });
/* harmony import */ var _counter_point_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4024);
/* harmony import */ var _counter_point_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10949);
/* harmony import */ var _point_point_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(54718);




/***/ }),

/***/ 85742:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   i: () => (/* reexport safe */ _star_rating_input_module__WEBPACK_IMPORTED_MODULE_0__.i),
/* harmony export */   p: () => (/* reexport safe */ _star_rating_input_component__WEBPACK_IMPORTED_MODULE_1__.p)
/* harmony export */ });
/* harmony import */ var _star_rating_input_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73203);
/* harmony import */ var _star_rating_input_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62804);



/***/ }),

/***/ 85857:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: () => (/* reexport safe */ _file_uploader_input_module__WEBPACK_IMPORTED_MODULE_1__.N),
/* harmony export */   e: () => (/* reexport safe */ _file_uploader_input_component__WEBPACK_IMPORTED_MODULE_0__.e)
/* harmony export */ });
/* harmony import */ var _file_uploader_input_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53437);
/* harmony import */ var _file_uploader_input_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46880);



/***/ }),

/***/ 86436:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* reexport safe */ _timezone_selector_module__WEBPACK_IMPORTED_MODULE_1__.F),
/* harmony export */   S: () => (/* reexport safe */ _timezone_selector_component__WEBPACK_IMPORTED_MODULE_0__.S)
/* harmony export */ });
/* harmony import */ var _timezone_selector_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73230);
/* harmony import */ var _timezone_selector_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95041);



/***/ }),

/***/ 87746:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* reexport safe */ _remove_lodash_pipe__WEBPACK_IMPORTED_MODULE_1__.q),
/* harmony export */   q: () => (/* reexport safe */ _remove_lodash_module__WEBPACK_IMPORTED_MODULE_0__.q)
/* harmony export */ });
/* harmony import */ var _remove_lodash_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88148);
/* harmony import */ var _remove_lodash_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68928);



/***/ }),

/***/ 88263:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* reexport safe */ _single_statistic_module__WEBPACK_IMPORTED_MODULE_1__.R),
/* harmony export */   k: () => (/* reexport safe */ _single_statistic_component__WEBPACK_IMPORTED_MODULE_0__.k)
/* harmony export */ });
/* harmony import */ var _single_statistic_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98701);
/* harmony import */ var _single_statistic_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39536);



/***/ }),

/***/ 88807:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: () => (/* binding */ ApprovalPolicyMutationComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(73014);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(55598);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10936);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(56383);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(41598);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(19223);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52738);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39855);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(71924);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(31144);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(15480);
/* harmony import */ var _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38546);
/* harmony import */ var _forms_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(78870);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(26860);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(14572);

var ApprovalPolicyMutationComponent_1;
















const _c0 = ["formDirective"];
const _c1 = (a0, a1) => ({
  "status-danger": a0,
  "status-success": a1
});
let ApprovalPolicyMutationComponent = /*#__PURE__*/(() => {
  let ApprovalPolicyMutationComponent = class ApprovalPolicyMutationComponent extends _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_0__/* .TranslationBaseComponent */ .K {
    static {
      ApprovalPolicyMutationComponent_1 = this;
    }
    get approvalPolicy() {
      return this._approvalPolicy;
    }
    set approvalPolicy(value) {
      this._approvalPolicy = value;
      this.patchForm();
    }
    static buildForm(fb) {
      return fb.group({
        name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .Validators */ .k0.required],
        description: []
      });
    }
    constructor(dialogRef, approvalPolicyService, fb, translationService, store, toastrService) {
      super(translationService);
      this.dialogRef = dialogRef;
      this.approvalPolicyService = approvalPolicyService;
      this.fb = fb;
      this.translationService = translationService;
      this.store = store;
      this.toastrService = toastrService;
      this.FormHelpers = _forms_helpers__WEBPACK_IMPORTED_MODULE_2__/* .FormHelpers */ .k;
      /*
       * Approval Policy Mutation Form
       */
      this.form = ApprovalPolicyMutationComponent_1.buildForm(this.fb);
    }
    ngOnInit() {
      this.store.selectedOrganization$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .filter */ .p)(organization => !!organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .tap */ .M)(organization => this.organization = organization), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .untilDestroyed */ .s)(this)).subscribe();
    }
    patchForm() {
      this.form.setValue({
        name: this.approvalPolicy ? this.approvalPolicy.name : '',
        description: this.approvalPolicy ? this.approvalPolicy.description : ''
      });
      this.form.updateValueAndValidity();
    }
    closeDialog(approvalPolicy) {
      this.onReset();
      this.dialogRef.close(approvalPolicy);
    }
    onSubmit() {
      var _this = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(function* () {
        if (_this.form.invalid || !_this.formDirective.submitted || !_this.organization) {
          return;
        }
        const {
          tenantId
        } = _this.store.user;
        const {
          id: organizationId
        } = _this.organization;
        const {
          name
        } = _this.form.getRawValue();
        const {
          items: existingPolicies
        } = yield _this.approvalPolicyService.getAll([], {
          name,
          organizationId,
          tenantId
        });
        // For a new policy, any existing policy with the same name is a duplicate
        // For an existing policy, only other policies with different IDs are duplicates
        const isDuplicate = _this.approvalPolicy ? existingPolicies.some(policy => policy.id !== _this.approvalPolicy.id) : existingPolicies.length > 0;
        if (isDuplicate) {
          _this.toastrService.danger(_this.getTranslation('TOASTR.MESSAGE.APPROVAL_POLICY_ALREADY_EXISTS', {
            name
          }));
          return;
        }
        const approvalPolicy = {
          tenantId,
          organizationId,
          ..._this.form.getRawValue(),
          ...(_this.approvalPolicy ? {
            id: _this.approvalPolicy.id
          } : {})
        };
        try {
          const result = yield _this.approvalPolicyService.save(approvalPolicy);
          _this.closeDialog(result);
        } catch (error) {
          console.error('Error while creating/updating approval policy', error);
          _this.toastrService.danger(error);
        }
      })();
    }
    /**
     * Reset approval policy mutation form after save
     */
    onReset() {
      this.formDirective.reset();
    }
    static {
      this.ɵfac = function ApprovalPolicyMutationComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || ApprovalPolicyMutationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵdirectiveInject"] */ .rXU(_nebular_theme__WEBPACK_IMPORTED_MODULE_8__/* .NbDialogRef */ .ybQ), _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_9__/* .ApprovalPolicyService */ .b), _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .UntypedFormBuilder */ .ze), _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__/* .TranslateService */ .c$), _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_11__/* .Store */ .il), _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_12__/* .ToastrService */ .t));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵdefineComponent"] */ .VBU({
        type: ApprovalPolicyMutationComponent,
        selectors: [["ngx-approval-policy-mutation"]],
        viewQuery: function ApprovalPolicyMutationComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵviewQuery"] */ .GBs(_c0, 5);
          }
          if (rf & 2) {
            let _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵqueryRefresh"] */ .mGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵloadQuery"] */ .lsd()) && (ctx.formDirective = _t.first);
          }
        },
        inputs: {
          approvalPolicy: "approvalPolicy"
        },
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
        decls: 30,
        vars: 27,
        consts: [["formDirective", "ngForm"], [1, "d-flex", "flex-column"], [1, "cancel"], [1, "fas", "fa-times", 3, "click"], [1, "title"], [1, "body"], [3, "ngSubmit", "formGroup"], [1, "row"], [1, "col-sm-12", "mb-3"], ["for", "name", 1, "label"], ["nbInput", "", "type", "text", "formControlName", "name", "fullWidth", "", 3, "placeholder", "ngClass"], ["for", "Description", 1, "label"], ["nbInput", "", "formControlName", "description", "fullWidth", "", "rows", "4", 3, "placeholder"], ["status", "basic", "outline", "", "nbButton", "", 1, "mr-3", 3, "click"], ["status", "success", "nbButton", "", 3, "click", "disabled"]],
        template: function ApprovalPolicyMutationComponent_Template(rf, ctx) {
          if (rf & 1) {
            const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵgetCurrentView"] */ .RV6();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵelementStart"] */ .j41(0, "nb-card")(1, "nb-card-header", 1)(2, "span", 2)(3, "i", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵlistener"] */ .bIt("click", function ApprovalPolicyMutationComponent_Template_i_click_3_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵresetView"] */ .Njj(ctx.closeDialog());
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵelementStart"] */ .j41(4, "h5", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵtext"] */ .EFF(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵpipe"] */ .nI1(6, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵelementStart"] */ .j41(7, "nb-card-body", 5)(8, "form", 6, 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵlistener"] */ .bIt("ngSubmit", function ApprovalPolicyMutationComponent_Template_form_ngSubmit_8_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵresetView"] */ .Njj(ctx.onSubmit());
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵelementStart"] */ .j41(10, "div", 7)(11, "div", 8)(12, "label", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵtext"] */ .EFF(13);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵpipe"] */ .nI1(14, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵelement"] */ .nrm(15, "input", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵpipe"] */ .nI1(16, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵelementStart"] */ .j41(17, "div", 8)(18, "label", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵtext"] */ .EFF(19);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵpipe"] */ .nI1(20, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵelement"] */ .nrm(21, "textarea", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵpipe"] */ .nI1(22, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵelementEnd"] */ .k0s()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵelementStart"] */ .j41(23, "nb-card-footer")(24, "button", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵlistener"] */ .bIt("click", function ApprovalPolicyMutationComponent_Template_button_click_24_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵresetView"] */ .Njj(ctx.closeDialog());
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵtext"] */ .EFF(25);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵpipe"] */ .nI1(26, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵelementStart"] */ .j41(27, "button", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵlistener"] */ .bIt("click", function ApprovalPolicyMutationComponent_Template_button_click_27_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              const formDirective_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵreference"] */ .sdS(9);
              return _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵresetView"] */ .Njj(formDirective_r2.onSubmit());
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵtext"] */ .EFF(28);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵpipe"] */ .nI1(29, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵelementEnd"] */ .k0s()()();
          }
          if (rf & 2) {
            const formDirective_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵreference"] */ .sdS(9);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵpipeBind1"] */ .bMT(6, 10, ctx.approvalPolicy ? "APPROVAL_POLICY_PAGE.EDIT_APPROVAL_POLICY" : "APPROVAL_POLICY_PAGE.ADD_APPROVAL_POLICY"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵproperty"] */ .Y8G("formGroup", ctx.form);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵpipeBind1"] */ .bMT(14, 12, "APPROVAL_POLICY_PAGE.APPROVAL_POLICY_NAME"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵpipeBind1"] */ .bMT(16, 14, "APPROVAL_POLICY_PAGE.APPROVAL_POLICY_NAME"))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵpureFunction2"] */ .l_i(24, _c1, ctx.FormHelpers.isInvalidControl(ctx.form, "name"), ctx.FormHelpers.isValidControl(ctx.form, "name")));
            _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵpipeBind1"] */ .bMT(20, 16, "APPROVAL_POLICY_PAGE.APPROVAL_POLICY_DESCRIPTION"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵpipeBind1"] */ .bMT(22, 18, "APPROVAL_POLICY_PAGE.APPROVAL_POLICY_DESCRIPTION"));
            _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵpipeBind1"] */ .bMT(26, 20, "BUTTONS.CANCEL"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵproperty"] */ .Y8G("disabled", ctx.form.invalid || formDirective_r2.submitted);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵpipeBind1"] */ .bMT(29, 22, "BUTTONS.SAVE"), " ");
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__/* .NgClass */ .YU, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* ["ɵNgNoValidate"] */ .qT, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .DefaultValueAccessor */ .me, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .NgControlStatus */ .BC, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .NgControlStatusGroup */ .cb, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .FormGroupDirective */ .j4, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .FormControlName */ .JD, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__/* .NbCardComponent */ .SrT, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__/* .NbCardBodyComponent */ .KH5, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__/* .NbCardFooterComponent */ .VDm, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__/* .NbCardHeaderComponent */ .zJv, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__/* .NbButtonComponent */ .YP2, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__/* .NbInputDirective */ .i6h, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__/* .TranslatePipe */ .D9],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   i[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n}\n[dir=ltr]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n[dir=rtl]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--gauzy-text-color-1);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(245, 109, 88, 0.3);\n  border-width: 2px;\n  color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(245, 109, 88, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 16px;\n  letter-spacing: 0em;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(126, 126, 143, 0.3);\n  border-width: 2px;\n  color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(126, 126, 143, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(37, 184, 105, 0.3);\n  border-width: 2px;\n  color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(37, 184, 105, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[disabled][_ngcontent-%COMP%], \n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic.btn-disabled[_ngcontent-%COMP%] {\n  background-color: var(--button-outline-basic-disabled-background-color);\n  border-color: var(--button-outline-basic-disabled-border-color);\n  color: var(--button-outline-basic-disabled-text-color);\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].primary.appearance-filled.status-primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  border: unset;\n  background-color: var(--color-primary-transparent-default);\n  box-shadow: var(--gauzy-shadow) 0, 0, 0, 0.15;\n}\n[dir=ltr]   [_nghost-%COMP%]     input, \n[dir=ltr]   [_nghost-%COMP%]     textarea {\n  text-align: start;\n}\n[dir=rtl]   [_nghost-%COMP%]     input, \n[dir=rtl]   [_nghost-%COMP%]     textarea {\n  text-align: end;\n}\n[_nghost-%COMP%]     input, \n[_nghost-%COMP%]     nb-select.appearance-outline.status-basic .select-button, \n[_nghost-%COMP%]     .ng-select .ng-select-container {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n  height: 42px !important;\n}\n[_nghost-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder, \n[_nghost-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {\n  top: unset !important;\n}\n[_nghost-%COMP%]     label, \n[_nghost-%COMP%]     .label {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  color: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]     textarea {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n}\n[_nghost-%COMP%]     .ng-select .ng-select-container input, \n[_nghost-%COMP%]     nb-tag-list input {\n  background-color: unset !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n}\n\n.in-valid[_ngcontent-%COMP%] {\n  border: 1px solid #ff3d71;\n  border-radius: 0.25rem;\n}\n\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n}"]
      });
    }
  };
  return ApprovalPolicyMutationComponent;
})();
ApprovalPolicyMutationComponent = ApprovalPolicyMutationComponent_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_14__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .UntilDestroy */ .d)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_14__/* .__metadata */ .Sn)("design:paramtypes", [_nebular_theme__WEBPACK_IMPORTED_MODULE_8__/* .NbDialogRef */ .ybQ, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_9__/* .ApprovalPolicyService */ .b, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .UntypedFormBuilder */ .ze, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__/* .TranslateService */ .c$, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_11__/* .Store */ .il, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_12__/* .ToastrService */ .t])], ApprovalPolicyMutationComponent);


/***/ }),

/***/ 89589:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* reexport safe */ _project_mutation_project_mutation_component__WEBPACK_IMPORTED_MODULE_1__.a),
/* harmony export */   r: () => (/* reexport safe */ _project_mutation_project_mutation_module__WEBPACK_IMPORTED_MODULE_0__.r)
/* harmony export */ });
/* harmony import */ var _project_mutation_project_mutation_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91998);
/* harmony import */ var _project_mutation_project_mutation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86815);



/***/ }),

/***/ 90071:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   J: () => (/* reexport safe */ _github_repository_selector_repository_selector_component__WEBPACK_IMPORTED_MODULE_0__.J),
/* harmony export */   e: () => (/* reexport safe */ _github_repository_selector_repository_selector_module__WEBPACK_IMPORTED_MODULE_1__.e)
/* harmony export */ });
/* harmony import */ var _github_repository_selector_repository_selector_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53025);
/* harmony import */ var _github_repository_selector_repository_selector_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26852);



/***/ }),

/***/ 91176:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   V1: () => (/* reexport safe */ _miscellaneous_routes__WEBPACK_IMPORTED_MODULE_2__.V),
/* harmony export */   X1: () => (/* reexport safe */ _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__.X),
/* harmony export */   ou: () => (/* reexport safe */ _miscellaneous_component__WEBPACK_IMPORTED_MODULE_1__.o),
/* harmony export */   rS: () => (/* reexport safe */ _miscellaneous_module__WEBPACK_IMPORTED_MODULE_0__.r)
/* harmony export */ });
/* harmony import */ var _miscellaneous_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73288);
/* harmony import */ var _miscellaneous_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76437);
/* harmony import */ var _miscellaneous_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(33810);
/* harmony import */ var _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(53207);





/***/ }),

/***/ 92099:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K5: () => (/* reexport safe */ _alert_directive__WEBPACK_IMPORTED_MODULE_0__.K),
/* harmony export */   Qv: () => (/* reexport safe */ _prompt_directive__WEBPACK_IMPORTED_MODULE_2__.Q),
/* harmony export */   ob: () => (/* reexport safe */ _confirm_directive__WEBPACK_IMPORTED_MODULE_1__.o)
/* harmony export */ });
/* harmony import */ var _alert_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25466);
/* harmony import */ var _confirm_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34268);
/* harmony import */ var _prompt_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(49554);




/***/ }),

/***/ 93689:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G7: () => (/* reexport safe */ _password_password_module__WEBPACK_IMPORTED_MODULE_1__.G),
/* harmony export */   N8: () => (/* reexport safe */ _role_role_module__WEBPACK_IMPORTED_MODULE_5__.N),
/* harmony export */   N_: () => (/* reexport safe */ _password_password_component__WEBPACK_IMPORTED_MODULE_0__.N),
/* harmony export */   U$: () => (/* reexport safe */ _role_role_component__WEBPACK_IMPORTED_MODULE_4__.U),
/* harmony export */   Y4: () => (/* reexport safe */ _phone_phone_component__WEBPACK_IMPORTED_MODULE_2__.Y),
/* harmony export */   n8: () => (/* reexport safe */ _phone_phone_module__WEBPACK_IMPORTED_MODULE_3__.n)
/* harmony export */ });
/* harmony import */ var _password_password_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12467);
/* harmony import */ var _password_password_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38434);
/* harmony import */ var _phone_phone_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(96247);
/* harmony import */ var _phone_phone_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10726);
/* harmony import */ var _role_role_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(33589);
/* harmony import */ var _role_role_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(33288);







/***/ }),

/***/ 97040:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   h: () => (/* binding */ NoSpaceEdgesDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);


let NoSpaceEdgesDirective = /*#__PURE__*/(() => {
  class NoSpaceEdgesDirective {
    constructor(el) {
      this.el = el;
    }
    /**
     * Trims the input value and updates the element's value.
     *
     * @param {string} value - The input value to be trimmed.
     * @return {void} This function does not return anything.
     */
    onInput(value) {
      this.el.nativeElement.value = value.trim();
    }
    static {
      this.ɵfac = function NoSpaceEdgesDirective_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || NoSpaceEdgesDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* .ElementRef */ .aKT));
      };
    }
    static {
      this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineDirective"] */ .FsC({
        type: NoSpaceEdgesDirective,
        selectors: [["", "noSpaceEdges", ""]],
        hostBindings: function NoSpaceEdgesDirective_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("input", function NoSpaceEdgesDirective_input_HostBindingHandler($event) {
              return ctx.onInput($event.target.value);
            });
          }
        },
        standalone: false
      });
    }
  }
  return NoSpaceEdgesDirective;
})();

/***/ }),

/***/ 98319:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ol: () => (/* reexport safe */ _default_employee__WEBPACK_IMPORTED_MODULE_0__.O),
/* harmony export */   R7: () => (/* reexport safe */ _employee_component__WEBPACK_IMPORTED_MODULE_1__.R),
/* harmony export */   zJ: () => (/* reexport safe */ _default_employee__WEBPACK_IMPORTED_MODULE_0__.z)
/* harmony export */ });
/* harmony import */ var _default_employee__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34187);
/* harmony import */ var _employee_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54982);



/***/ })

}]);