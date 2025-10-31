"use strict";
(self["webpackChunkgauzy"] = self["webpackChunkgauzy"] || []).push([[5379],{

/***/ 3289:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   r: () => (/* binding */ OrganizationSettingService)
/* harmony export */ });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20381);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15788);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26860);
/* harmony import */ var _store_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71924);
/* harmony import */ var _selector_builder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(28822);







let OrganizationSettingService = /*#__PURE__*/(() => {
  class OrganizationSettingService {
    constructor(store, dateRangePickerBuilderService) {
      this.store = store;
      this.dateRangePickerBuilderService = dateRangePickerBuilderService;
    }
    /**
     * Retrieves a date based on the organization settings.
     * If the organization's default value date type is set to 'END_OF_MONTH',
     * returns the end of the month for the provided startDate.
     * If the organization's default value date type is set to 'START_OF_MONTH',
     * returns the start of the month for the provided startDate.
     * If the organization's default value date type is not set or is invalid,
     * returns the current date.
     * @returns
     */
    getDateFromOrganizationSettings() {
      const startDate = this.dateRangePickerBuilderService?.selectedDateRange?.startDate ?? new Date();
      if (this.store.selectedOrganization) {
        switch (this.store.selectedOrganization.defaultValueDateType) {
          case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__/* .DefaultValueDateTypeEnum */ .CZ.END_OF_MONTH:
            {
              return moment__WEBPACK_IMPORTED_MODULE_0__(startDate).endOf('month').toDate();
            }
          case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__/* .DefaultValueDateTypeEnum */ .CZ.START_OF_MONTH:
            {
              return moment__WEBPACK_IMPORTED_MODULE_0__(startDate).startOf('month').toDate();
            }
          default:
            {
              return moment__WEBPACK_IMPORTED_MODULE_0__().toDate();
            }
        }
      }
      return moment__WEBPACK_IMPORTED_MODULE_0__(startDate).toDate();
    }
    static {
      this.ɵfac = function OrganizationSettingService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || OrganizationSettingService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵinject"] */ .KVO(_store_store_service__WEBPACK_IMPORTED_MODULE_3__/* .Store */ .il), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵinject"] */ .KVO(_selector_builder__WEBPACK_IMPORTED_MODULE_4__/* .DateRangePickerBuilderService */ .i7));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineInjectable"] */ .jDH({
        token: OrganizationSettingService,
        factory: OrganizationSettingService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return OrganizationSettingService;
})();

/***/ }),

/***/ 43151:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   x: () => (/* binding */ PaymentMethodEnum)
/* harmony export */ });
var PaymentMethodEnum = /*#__PURE__*/function (PaymentMethodEnum) {
  PaymentMethodEnum["BANK_TRANSFER"] = "BANK_TRANSFER";
  PaymentMethodEnum["CASH"] = "CASH";
  PaymentMethodEnum["CHEQUE"] = "CHEQUE";
  PaymentMethodEnum["CREDIT_CARD"] = "CREDIT_CARD";
  PaymentMethodEnum["DEBIT"] = "DEBIT";
  PaymentMethodEnum["ONLINE"] = "ONLINE";
  return PaymentMethodEnum;
}(PaymentMethodEnum || {});

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

/***/ 91045:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ TagsOnlyComponent)
/* harmony export */ });
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(81236);
/* harmony import */ var _notes_with_tags_notes_with_tags_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14572);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(56383);
/* harmony import */ var _directives_img_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(71466);






function TagsOnlyComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("src", ctx_r0.value == null ? null : ctx_r0.value.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵsanitizeUrl"] */ .B4B);
  }
}
function TagsOnlyComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(ctx_r0.value == null ? null : ctx_r0.value.name);
  }
}
function TagsOnlyComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(ctx_r0.value == null ? null : ctx_r0.value.level);
  }
}
function TagsOnlyComponent_ng_template_5_nb_badge_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(0, "nb-badge", 6);
  }
  if (rf & 2) {
    const tag_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵstyleProp"] */ .xc7("background", ctx_r0.background(tag_r2 == null ? null : tag_r2.color))("color", ctx_r0.backgroundContrast(tag_r2.color));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("text", tag_r2.name);
  }
}
function TagsOnlyComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(0, TagsOnlyComponent_ng_template_5_nb_badge_0_Template, 1, 5, "nb-badge", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(1, "async");
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngForOf", (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(1, 1, ctx_r0.data)) == null ? null : tmp_1_0.labels);
  }
}
function TagsOnlyComponent_ng_template_7_nb_badge_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(0, "nb-badge", 6);
  }
  if (rf & 2) {
    const tag_r3 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵstyleProp"] */ .xc7("background", ctx_r0.background(tag_r3 == null ? null : tag_r3.color))("color", ctx_r0.backgroundContrast(tag_r3.color));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("text", tag_r3.name);
  }
}
function TagsOnlyComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(0, TagsOnlyComponent_ng_template_7_nb_badge_0_Template, 1, 5, "nb-badge", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(1, "async");
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngForOf", (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(1, 1, ctx_r0.data)) == null ? null : tmp_1_0.tags);
  }
}
let TagsOnlyComponent = /*#__PURE__*/(() => {
  class TagsOnlyComponent extends _notes_with_tags_notes_with_tags_component__WEBPACK_IMPORTED_MODULE_1__/* .NotesWithTagsComponent */ .i {
    constructor() {
      super(...arguments);
      this.ComponentLayoutStyleEnum = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__/* .ComponentLayoutStyleEnum */ .IE;
    }
    static {
      this.ɵfac = /*@__PURE__*/(() => {
        let ɵTagsOnlyComponent_BaseFactory;
        return function TagsOnlyComponent_Factory(__ngFactoryType__) {
          return (ɵTagsOnlyComponent_BaseFactory || (ɵTagsOnlyComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetInheritedFactory"] */ .xGo(TagsOnlyComponent)))(__ngFactoryType__ || TagsOnlyComponent);
        };
      })();
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: TagsOnlyComponent,
        selectors: [["ga-only-tags"]],
        inputs: {
          value: "value"
        },
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
        decls: 9,
        vars: 11,
        consts: [[3, "ngClass"], [4, "ngIf"], [1, "tags", "mt-2", 3, "ngClass"], [3, "ngIf"], ["height", "30", "width", "50", "alt", "Avatar", 1, "avatar", 3, "src"], ["class", "color", "position", "centered", 3, "background", "color", "text", 4, "ngFor", "ngForOf"], ["position", "centered", 1, "color", 3, "text"]],
        template: function TagsOnlyComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, TagsOnlyComponent_div_1_Template, 2, 1, "div", 1)(2, TagsOnlyComponent_div_2_Template, 2, 1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(3, TagsOnlyComponent_div_3_Template, 2, 1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(4, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(5, TagsOnlyComponent_ng_template_5_Template, 2, 3, "ng-template", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(6, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(7, TagsOnlyComponent_ng_template_7_Template, 2, 3, "ng-template", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(8, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
          }
          if (rf & 2) {
            let tmp_5_0;
            let tmp_6_0;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngClass", ctx.layout === ctx.ComponentLayoutStyleEnum.CARDS_GRID ? "contacts-img" : "");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.value == null ? null : ctx.value.imageUrl);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.value == null ? null : ctx.value.name);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.value == null ? null : ctx.value.level);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngClass", ctx.layout === "CARDS_GRID" ? "tags-right" : "");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ((tmp_5_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(6, 7, ctx.data)) == null ? null : tmp_5_0.labels == null ? null : tmp_5_0.labels.length) > 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ((tmp_6_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(8, 9, ctx.data)) == null ? null : tmp_6_0.tags == null ? null : tmp_6_0.tags.length) > 0);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__/* .NgClass */ .YU, _angular_common__WEBPACK_IMPORTED_MODULE_3__/* .NgForOf */ .Sq, _angular_common__WEBPACK_IMPORTED_MODULE_3__/* .NgIf */ .bT, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbBadgeComponent */ .XyX, _directives_img_directive__WEBPACK_IMPORTED_MODULE_5__/* .ImgDirective */ .z, _angular_common__WEBPACK_IMPORTED_MODULE_3__/* .AsyncPipe */ .Jj],
        styles: [".color[_ngcontent-%COMP%] {\n  position: static;\n  margin-top: 5px;\n  margin-right: 5px;\n  display: inline-block;\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: 0em;\n  padding: 3px 8px;\n}\n\n.tags[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n}\n\n.tags-right[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n}\n\n.contacts-img[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n\n.avatar[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n}"]
      });
    }
  }
  return TagsOnlyComponent;
})();

/***/ })

}]);