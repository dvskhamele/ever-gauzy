"use strict";
(self["webpackChunkgauzy"] = self["webpackChunkgauzy"] || []).push([[4445],{

/***/ 35388:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   b: () => (/* binding */ TranslatableService)
/* harmony export */ });
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81236);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26860);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19223);




let TranslatableService = /*#__PURE__*/(() => {
  class TranslatableService {
    constructor(translateService) {
      this.translateService = translateService;
    }
    /**
     * Retrieves the translated properties of an ITranslatable object based on the current language.
     *
     * @param {ITranslatable<any>} translatable - The ITranslatable object to be translated.
     * @param {string[]} translateProps - An array of property names to be translated.
     * @return {any} The translated ITranslatable object.
     */
    getTranslated(translatable, translateProps) {
      if (!translatable || !Array.isArray(translatable.translations)) {
        console.warn('Invalid translatable object or translations property:', translatable);
        return translatable;
      }
      const currentLangCode = this.translateService.currentLang || _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__/* .LanguagesEnum */ .TR.ENGLISH;
      const currentLangTranslation = translatable.translations.find(tr => tr.languageCode == currentLangCode);
      translateProps.forEach(prop => {
        if (currentLangTranslation) {
          translatable[prop] = currentLangTranslation[prop];
        } else {
          translatable[prop] = '(No Translation)';
        }
      });
      return translatable;
    }
    /**
     * Retrieves the translated value of a specific property from an ITranslatable object based on the current language.
     *
     * @param {ITranslatable<any>} translatable - The ITranslatable object to be translated.
     * @param {string} translateProperty - The name of the property to be translated.
     * @return {string} The translated value of the specified property.
     */
    getTranslatedProperty(translatable, translateProperty) {
      if (!translatable || !translateProperty) {
        console.warn('Invalid translatable object or translation property:', translatable, translateProperty);
        return null;
      }
      return this.getTranslated({
        ...translatable
      }, [translateProperty])[translateProperty];
    }
    static {
      this.ɵfac = function TranslatableService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || TranslatableService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵinject"] */ .KVO(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__/* .TranslateService */ .c$));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineInjectable"] */ .jDH({
        token: TranslatableService,
        factory: TranslatableService.ɵfac
      });
    }
  }
  return TranslatableService;
})();

/***/ }),

/***/ 43629:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ CurrencyModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14572);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10936);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(55567);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19223);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);






let CurrencyModule = /*#__PURE__*/(() => {
  class CurrencyModule {
    static {
      this.ɵfac = function CurrencyModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || CurrencyModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .$C({
        type: CurrencyModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .CommonModule */ .MD, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .FormsModule */ .YN, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .ReactiveFormsModule */ .X1, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_3__/* .NgSelectModule */ .MQ, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__/* .TranslateModule */ .h.forChild()]
      });
    }
  }
  return CurrencyModule;
})();

/***/ }),

/***/ 57705:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* binding */ InvoiceViewInnerModule)
/* harmony export */ });
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56383);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19223);
/* harmony import */ var angular2_smart_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52345);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94333);
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(38834);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);







let InvoiceViewInnerModule = /*#__PURE__*/(() => {
  class InvoiceViewInnerModule {
    static {
      this.ɵfac = function InvoiceViewInnerModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || InvoiceViewInnerModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .$C({
        type: InvoiceViewInnerModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .G2t({
        providers: [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_1__/* .InvoicesService */ .U],
        imports: [_nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbCardModule */ .lVF, angular2_smart_table__WEBPACK_IMPORTED_MODULE_3__/* .Angular2SmartTableModule */ .gQ, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__/* .TranslateModule */ .h.forChild(), _shared_module__WEBPACK_IMPORTED_MODULE_5__/* .SharedModule */ .G]
      });
    }
  }
  return InvoiceViewInnerModule;
})();

/***/ }),

/***/ 62694:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   m: () => (/* binding */ InvoiceViewInnerComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(73014);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(55598);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(14572);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(19223);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39855);
/* harmony import */ var angular2_smart_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52345);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(41598);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(63570);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(35388);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(71924);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(54263);
/* harmony import */ var _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38546);
/* harmony import */ var _pipes_currency_position_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(42128);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(56383);
/* harmony import */ var _pipes_date_format_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(11031);




















function InvoiceViewInnerComponent_ng_container_0_ng_template_14_Template(rf, ctx) {}
function InvoiceViewInnerComponent_ng_container_0_ng_container_64_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(4, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI("", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(3, 2, "INVOICES_PAGE.ALREADY_PAID"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI("", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(6, 4, "INVOICES_PAGE.AMOUNT_DUE"), ":");
  }
}
function InvoiceViewInnerComponent_ng_container_0_span_67_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(3, "position");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind2"] */ .i5U(3, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind2"] */ .i5U(2, 1, (ctx_r0.invoice == null ? null : ctx_r0.invoice.tax) || 0, ctx_r0.invoice == null ? null : ctx_r0.invoice.currency), ctx_r0.invoice == null ? null : ctx_r0.invoice.fromOrganization.currencyPosition), " ");
  }
}
function InvoiceViewInnerComponent_ng_container_0_span_68_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", (ctx_r0.invoice == null ? null : ctx_r0.invoice.tax) || 0, " % ");
  }
}
function InvoiceViewInnerComponent_ng_container_0_span_70_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(3, "position");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind2"] */ .i5U(3, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind2"] */ .i5U(2, 1, (ctx_r0.invoice == null ? null : ctx_r0.invoice.tax2) || 0, ctx_r0.invoice == null ? null : ctx_r0.invoice.currency), ctx_r0.invoice == null ? null : ctx_r0.invoice.fromOrganization.currencyPosition), " ");
  }
}
function InvoiceViewInnerComponent_ng_container_0_span_71_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", (ctx_r0.invoice == null ? null : ctx_r0.invoice.tax2) || 0, "% ");
  }
}
function InvoiceViewInnerComponent_ng_container_0_span_73_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(3, "position");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind2"] */ .i5U(3, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind2"] */ .i5U(2, 1, ctx_r0.invoice.discountValue || 0, ctx_r0.invoice == null ? null : ctx_r0.invoice.currency), ctx_r0.invoice == null ? null : ctx_r0.invoice.fromOrganization.currencyPosition), " ");
  }
}
function InvoiceViewInnerComponent_ng_container_0_span_74_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", (ctx_r0.invoice == null ? null : ctx_r0.invoice.discountValue) || 0, " % ");
  }
}
function InvoiceViewInnerComponent_ng_container_0_ng_container_80_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(1, "div", 20)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(4, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(5, "position");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(6, "div", 20)(7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(9, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(10, "position");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind2"] */ .i5U(5, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind2"] */ .i5U(4, 2, (ctx_r0.invoice == null ? null : ctx_r0.invoice.alreadyPaid) || 0, ctx_r0.invoice == null ? null : ctx_r0.invoice.currency), ctx_r0.invoice == null ? null : ctx_r0.invoice.fromOrganization == null ? null : ctx_r0.invoice.fromOrganization.currencyPosition), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind2"] */ .i5U(10, 11, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind2"] */ .i5U(9, 8, (ctx_r0.invoice == null ? null : ctx_r0.invoice.amountDue) || 0, ctx_r0.invoice == null ? null : ctx_r0.invoice.currency), ctx_r0.invoice == null ? null : ctx_r0.invoice.fromOrganization == null ? null : ctx_r0.invoice.fromOrganization.currencyPosition), " ");
  }
}
function InvoiceViewInnerComponent_ng_container_0_ng_container_81_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 24)(1, "h5", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI("", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(3, 2, "INVOICES_PAGE.INTERNAL_NOTE.INTERNAL_NOTE"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", ctx_r0.invoice.internalNote, " ");
  }
}
function InvoiceViewInnerComponent_ng_container_0_ng_container_81_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, InvoiceViewInnerComponent_ng_container_0_ng_container_81_div_1_Template, 5, 4, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r0.showInternalNote);
  }
}
function InvoiceViewInnerComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(1, "nb-card-body", 2)(2, "div", 3)(3, "div", 4)(4, "div", 5)(5, "div", 4)(6, "div", 6)(7, "h4", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(10, "h4", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(12, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(14, InvoiceViewInnerComponent_ng_container_0_ng_template_14_Template, 0, 0, "ng-template", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(15, "div", 10)(16, "div")(17, "div", 11)(18, "div")(19, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(21, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(22, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(24, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(25, "div", 14)(26, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(28, "dateFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(29, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(31, "dateFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(32, "div", 11)(33, "div")(34, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(36, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(37, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(38, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(40, "div", 15)(41, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(43, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(44, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(45, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(47, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(48, "angular2-smart-table", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(49, "div", 4)(50, "div", 18)(51, "div", 19)(52, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(54, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(55, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(57, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(58, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(60, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(61, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(63, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(64, InvoiceViewInnerComponent_ng_container_0_ng_container_64_Template, 7, 6, "ng-container", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(65, "div", 22)(66, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(67, InvoiceViewInnerComponent_ng_container_0_span_67_Template, 4, 7, "span", 21)(68, InvoiceViewInnerComponent_ng_container_0_span_68_Template, 2, 1, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(69, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(70, InvoiceViewInnerComponent_ng_container_0_span_70_Template, 4, 7, "span", 21)(71, InvoiceViewInnerComponent_ng_container_0_span_71_Template, 2, 1, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(72, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(73, InvoiceViewInnerComponent_ng_container_0_span_73_Template, 4, 7, "span", 21)(74, InvoiceViewInnerComponent_ng_container_0_span_74_Template, 2, 1, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(75, "div", 20)(76, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(78, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(79, "position");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(80, InvoiceViewInnerComponent_ng_container_0_ng_container_80_Template, 11, 14, "ng-container", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(81, InvoiceViewInnerComponent_ng_container_0_ng_container_81_Template, 2, 1, "ng-container", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("nbSpinner", ctx_r0.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(9, 28, !ctx_r0.isEstimate ? "INVOICES_PAGE.INVOICE_NUMBER" : "INVOICES_PAGE.ESTIMATE_NUMBER"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(ctx_r0.invoice == null ? null : ctx_r0.invoice.invoiceNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngTemplateOutlet", ctx_r0.buttonsOutlet);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(21, 30, !ctx_r0.isEstimate ? "INVOICES_PAGE.INVOICE_DATE" : "INVOICES_PAGE.ESTIMATE_DATE"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(24, 32, "INVOICES_PAGE.DUE_DATE"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(28, 34, ctx_r0.invoice == null ? null : ctx_r0.invoice.invoiceDate));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(31, 36, ctx_r0.invoice == null ? null : ctx_r0.invoice.dueDate));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(37, 40, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(36, 38, "INVOICES_PAGE.VIEW.FROM")), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(ctx_r0.invoice == null ? null : ctx_r0.invoice.fromOrganization == null ? null : ctx_r0.invoice.fromOrganization.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(44, 44, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(43, 42, "INVOICES_PAGE.VIEW.TO")), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(ctx_r0.invoice == null ? null : ctx_r0.invoice.toContact == null ? null : ctx_r0.invoice.toContact.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("settings", ctx_r0.settingsSmartTable)("source", ctx_r0.smartTableSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI("", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(54, 46, "INVOICES_PAGE.TAX"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI("", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(57, 48, "INVOICES_PAGE.TAX_2"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI("", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(60, 50, "INVOICES_PAGE.INVOICES_SELECT_DISCOUNT_VALUE"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI("", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(63, 52, "INVOICES_PAGE.TOTAL_VALUE"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r0.invoice.hasRemainingAmountInvoiced);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r0.invoice.taxType === ctx_r0.discountTaxTypes.FLAT_VALUE);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r0.invoice.taxType === ctx_r0.discountTaxTypes.PERCENT);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r0.invoice.taxType === ctx_r0.discountTaxTypes.FLAT_VALUE);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r0.invoice.taxType === ctx_r0.discountTaxTypes.PERCENT);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r0.invoice.discountType === ctx_r0.discountTaxTypes.FLAT_VALUE);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r0.invoice.discountType === ctx_r0.discountTaxTypes.PERCENT);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind2"] */ .i5U(79, 57, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind2"] */ .i5U(78, 54, (ctx_r0.invoice == null ? null : ctx_r0.invoice.totalValue) || 0, ctx_r0.invoice == null ? null : ctx_r0.invoice.currency), ctx_r0.invoice == null ? null : ctx_r0.invoice.fromOrganization == null ? null : ctx_r0.invoice.fromOrganization.currencyPosition), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r0.invoice.hasRemainingAmountInvoiced);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r0.invoice.internalNote);
  }
}
function InvoiceViewInnerComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(0, "div", 25);
  }
}
let InvoiceViewInnerComponent = /*#__PURE__*/(() => {
  let InvoiceViewInnerComponent = class InvoiceViewInnerComponent extends _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_1__/* .TranslationBaseComponent */ .K {
    constructor(translateService, _store, _translatableService, _currencyPipe, _currencyPipePosition, _errorHandlingService) {
      super(translateService);
      this.translateService = translateService;
      this._store = _store;
      this._translatableService = _translatableService;
      this._currencyPipe = _currencyPipe;
      this._currencyPipePosition = _currencyPipePosition;
      this._errorHandlingService = _errorHandlingService;
      this.smartTableSource = new angular2_smart_table__WEBPACK_IMPORTED_MODULE_2__/* .LocalDataSource */ .h0();
      this.loading = true;
      this.discountTaxTypes = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__/* .DiscountTaxTypeEnum */ .Ai;
      this.showInternalNote = !!this._store.user?.tenantId;
      this.isEstimate = false;
    }
    ngOnInit() {
      this._applyTranslationOnSmartTable();
      this._loadSmartTableSettings();
      this._loadSmartTableData();
    }
    /**
     * Load smart table settings
     */
    _loadSmartTableSettings() {
      this.settingsSmartTable = {
        hideSubHeader: true,
        selectedRowIndex: -1,
        actions: false,
        pager: {
          display: false
        },
        columns: {
          name: {
            title: this.getTranslation('INVOICES_PAGE.ITEM'),
            type: 'text',
            isFilterable: false
          },
          description: {
            title: this.getTranslation('INVOICES_PAGE.INVOICE_ITEM.DESCRIPTION'),
            type: 'text',
            isFilterable: false
          },
          quantity: {
            title: this.getTranslation('INVOICES_PAGE.INVOICE_ITEM.QUANTITY'),
            type: 'text',
            isFilterable: false
          },
          price: {
            title: this.getTranslation('INVOICES_PAGE.INVOICE_ITEM.PRICE'),
            type: 'text',
            isFilterable: false,
            valuePrepareFunction: (value, cell) => {
              // Get row data
              const row = cell.getRow().getData();
              // Get price transformed
              return this.getPipesTransform(row.price * row.quantity, row.currency, this.invoice.fromOrganization.currencyPosition);
            }
          },
          totalValue: {
            title: this.getTranslation('INVOICES_PAGE.INVOICE_ITEM.TOTAL_VALUE'),
            type: 'text',
            isFilterable: false,
            valuePrepareFunction: (value, cell) => {
              // Get row data
              const row = cell.getRow().getData();
              // Get price transformed
              return this.getPipesTransform(row.price * row.quantity, row.currency, this.invoice.fromOrganization.currencyPosition);
            }
          }
        }
      };
    }
    /**
     * Apply translation on smart table
     */
    _applyTranslationOnSmartTable() {
      this.translateService.onLangChange.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .tap */ .M)(() => this._loadSmartTableSettings()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .untilDestroyed */ .s)(this)).subscribe();
    }
    /**
     * Load smart table data
     */
    _loadSmartTableData() {
      var _this = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(function* () {
        _this.loading = true;
        try {
          // Map invoice items to smart table data
          const data = _this.invoice.invoiceItems?.map(item => {
            // Default inclusion
            const row = {
              description: item.description,
              quantity: item.quantity,
              price: item.price,
              totalValue: +item.totalValue,
              currency: _this.invoice.currency,
              id: item.id // Default inclusion
            };
            // Add name based on invoice type
            row['name'] = _this.getNameBasedOnInvoiceType(item);
            return row;
          });
          _this.smartTableSource.load(data);
        } catch (error) {
          console.log('Error while loading smart table data', error);
          _this._errorHandlingService.handleError(error);
        } finally {
          // Set loading to false
          _this.loading = false;
        }
      })();
    }
    /**
     * Determine name based on invoice type
     *
     * @param item Invoice item
     */
    getNameBasedOnInvoiceType(item) {
      // Return empty string if item is null
      if (!item) {
        return '';
      }
      switch (this.invoice.invoiceType) {
        case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__/* .InvoiceTypeEnum */ .RU.BY_EMPLOYEE_HOURS:
          return item.employeeId ? `${item.employee?.fullName}` : '';
        case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__/* .InvoiceTypeEnum */ .RU.BY_PROJECT_HOURS:
          return item.projectId ? item.project?.name : '';
        case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__/* .InvoiceTypeEnum */ .RU.BY_TASK_HOURS:
          return item.taskId ? item.task?.title : '';
        case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__/* .InvoiceTypeEnum */ .RU.BY_PRODUCTS:
          return item.productId ? this._translatableService.getTranslatedProperty(item.product, 'name') : '';
        case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__/* .InvoiceTypeEnum */ .RU.BY_EXPENSES:
          return item.expenseId ? item.expense?.purpose : '';
        default:
          delete this.settingsSmartTable['columns']['name'];
          return '';
        // Default case for name
      }
    }
    /**
     * This function transform simple number to currency format.
     *
     * @param value should be the number to transform
     * @param currencyCode should be the currency code of invoice
     * @param position should be the position of currency organization
     * @returns should be a string
     */
    getPipesTransform(value, currencyCode, position) {
      const transform = this._currencyPipe.transform(value, currencyCode);
      return this._currencyPipePosition.transform(transform, position);
    }
    ngOnDestroy() {}
    static {
      this.ɵfac = function InvoiceViewInnerComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || InvoiceViewInnerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__/* .TranslateService */ .c$), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_8__/* .Store */ .il), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_9__/* .TranslatableService */ .b), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_common__WEBPACK_IMPORTED_MODULE_10__/* .CurrencyPipe */ .oe), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_pipes_currency_position_pipe__WEBPACK_IMPORTED_MODULE_11__/* .CurrencyPositionPipe */ .n), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_12__/* .ErrorHandlingService */ .X));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: InvoiceViewInnerComponent,
        selectors: [["ga-invoice-view-inner"]],
        inputs: {
          invoice: "invoice",
          isEstimate: "isEstimate",
          buttonsOutlet: "buttonsOutlet"
        },
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵProvidersFeature"] */ .Jv_([_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_9__/* .TranslatableService */ .b, _angular_common__WEBPACK_IMPORTED_MODULE_10__/* .CurrencyPipe */ .oe, _pipes_currency_position_pipe__WEBPACK_IMPORTED_MODULE_11__/* .CurrencyPositionPipe */ .n]), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
        decls: 3,
        vars: 2,
        consts: [["noInvoiceTemplate", ""], [4, "ngIf", "ngIfElse"], ["nbSpinnerStatus", "primary", "nbSpinnerSize", "large", 3, "nbSpinner"], [1, "py-1"], [1, "d-flex", "justify-content-between"], [1, "mb-5", "w-100"], [1, "mb-5", "font-weight-bold"], [1, "d-inline", "mr-2"], [1, "d-inline"], [3, "ngTemplateOutlet"], [1, "d-flex", "justify-content-between", "w-100"], [1, "d-flex"], [1, "font-weight-bold"], [1, "font-weight-bold", "text-left"], [1, "ml-3", "mr-3"], [1, "ml-3"], [1, "table-scroll-container", "table"], [2, "cursor", "pointer", 3, "settings", "source"], [1, "d-flex", "w-50", "mt-3"], [1, "d-flex", "flex-column", "text-left", "font-weight-bold", "mr-5"], [1, "mt-2"], [4, "ngIf"], [1, "d-flex", "flex-column", "mr-5", "text-left"], ["class", "mt-3 w-50", 4, "ngIf"], [1, "mt-3", "w-50"], [1, "no-invoice-description"]],
        template: function InvoiceViewInnerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(0, InvoiceViewInnerComponent_ng_container_0_Template, 82, 60, "ng-container", 1)(1, InvoiceViewInnerComponent_ng_template_1_Template, 1, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplateRefExtractor"] */ .C5r);
          }
          if (rf & 2) {
            const noInvoiceTemplate_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.invoice)("ngIfElse", noInvoiceTemplate_r2);
          }
        },
        dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_13__/* .NbCardBodyComponent */ .KH5, angular2_smart_table__WEBPACK_IMPORTED_MODULE_2__/* .Angular2SmartTableComponent */ .T9, _angular_common__WEBPACK_IMPORTED_MODULE_10__/* .NgIf */ .bT, _angular_common__WEBPACK_IMPORTED_MODULE_10__/* .NgTemplateOutlet */ .T3, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__/* .TranslatePipe */ .D9, _angular_common__WEBPACK_IMPORTED_MODULE_10__/* .TitleCasePipe */ .PV, _angular_common__WEBPACK_IMPORTED_MODULE_10__/* .CurrencyPipe */ .oe, _pipes_currency_position_pipe__WEBPACK_IMPORTED_MODULE_11__/* .CurrencyPositionPipe */ .n, _pipes_date_format_pipe__WEBPACK_IMPORTED_MODULE_14__/* .DateFormatPipe */ .a],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.table[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  padding: 10px;\n  background-color: var(--gauzy-card-2);\n  max-height: 17.5rem;\n}\n\n.bottom-data-container[_ngcontent-%COMP%] {\n  width: 25%;\n  justify-content: space-between;\n  margin-left: auto;\n}\n\n  ga-invoice-view-inner {\n  padding: 0 100px;\n  padding-top: 25px;\n}"]
      });
    }
  };
  InvoiceViewInnerComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_15__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .UntilDestroy */ .d)({
    checkProperties: true
  }), (0,tslib__WEBPACK_IMPORTED_MODULE_15__/* .__metadata */ .Sn)("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__/* .TranslateService */ .c$, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_8__/* .Store */ .il, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_9__/* .TranslatableService */ .b, _angular_common__WEBPACK_IMPORTED_MODULE_10__/* .CurrencyPipe */ .oe, _pipes_currency_position_pipe__WEBPACK_IMPORTED_MODULE_11__/* .CurrencyPositionPipe */ .n, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_12__/* .ErrorHandlingService */ .X])], InvoiceViewInnerComponent);
  return InvoiceViewInnerComponent;
})();


/***/ }),

/***/ 63570:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ai: () => (/* binding */ DiscountTaxTypeEnum),
/* harmony export */   BJ: () => (/* binding */ EstimateStatusTypesEnum),
/* harmony export */   Cj: () => (/* binding */ TaxCalculationTypeEnum),
/* harmony export */   RU: () => (/* binding */ InvoiceTypeEnum),
/* harmony export */   Vp: () => (/* binding */ EstimateColumnsEnum),
/* harmony export */   _d: () => (/* binding */ InvoiceColumnsEnum),
/* harmony export */   g0: () => (/* binding */ InvoiceStatusTypesEnum),
/* harmony export */   tq: () => (/* binding */ InvoiceTabsEnum)
/* harmony export */ });
var InvoiceTypeEnum = /*#__PURE__*/function (InvoiceTypeEnum) {
  InvoiceTypeEnum["BY_EMPLOYEE_HOURS"] = "BY_EMPLOYEE_HOURS";
  InvoiceTypeEnum["BY_PROJECT_HOURS"] = "BY_PROJECT_HOURS";
  InvoiceTypeEnum["BY_TASK_HOURS"] = "BY_TASK_HOURS";
  InvoiceTypeEnum["BY_PRODUCTS"] = "BY_PRODUCTS";
  InvoiceTypeEnum["BY_EXPENSES"] = "BY_EXPENSES";
  InvoiceTypeEnum["DETAILED_ITEMS"] = "DETAILED_ITEMS";
  return InvoiceTypeEnum;
}(InvoiceTypeEnum || {});
var DiscountTaxTypeEnum = /*#__PURE__*/function (DiscountTaxTypeEnum) {
  DiscountTaxTypeEnum["PERCENT"] = "PERCENT";
  DiscountTaxTypeEnum["FLAT_VALUE"] = "FLAT";
  return DiscountTaxTypeEnum;
}(DiscountTaxTypeEnum || {});
var InvoiceStatusTypesEnum = /*#__PURE__*/function (InvoiceStatusTypesEnum) {
  InvoiceStatusTypesEnum["DRAFT"] = "DRAFT";
  InvoiceStatusTypesEnum["SENT"] = "SENT";
  InvoiceStatusTypesEnum["VIEWED"] = "VIEWED";
  InvoiceStatusTypesEnum["FULLY_PAID"] = "FULLY_PAID";
  InvoiceStatusTypesEnum["PARTIALLY_PAID"] = "PARTIALLY_PAID";
  InvoiceStatusTypesEnum["OVERPAID"] = "OVERPAID";
  InvoiceStatusTypesEnum["VOID"] = "VOID";
  return InvoiceStatusTypesEnum;
}(InvoiceStatusTypesEnum || {});
var EstimateStatusTypesEnum = /*#__PURE__*/function (EstimateStatusTypesEnum) {
  EstimateStatusTypesEnum["DRAFT"] = "DRAFT";
  EstimateStatusTypesEnum["SENT"] = "SENT";
  EstimateStatusTypesEnum["VIEWED"] = "VIEWED";
  EstimateStatusTypesEnum["ACCEPTED"] = "ACCEPTED";
  EstimateStatusTypesEnum["REJECTED"] = "REJECTED";
  EstimateStatusTypesEnum["VOID"] = "VOID";
  return EstimateStatusTypesEnum;
}(EstimateStatusTypesEnum || {});
var InvoiceColumnsEnum = /*#__PURE__*/function (InvoiceColumnsEnum) {
  InvoiceColumnsEnum["INVOICE_DATE"] = "INVOICE_DATE";
  InvoiceColumnsEnum["DUE_DATE"] = "DUE_DATE";
  InvoiceColumnsEnum["STATUS"] = "STATUS";
  InvoiceColumnsEnum["TOTAL_VALUE"] = "TOTAL_VALUE";
  InvoiceColumnsEnum["CURRENCY"] = "CURRENCY";
  InvoiceColumnsEnum["TAX"] = "TAX";
  InvoiceColumnsEnum["TAX_2"] = "TAX_2";
  InvoiceColumnsEnum["DISCOUNT"] = "DISCOUNT";
  InvoiceColumnsEnum["CONTACT"] = "CONTACT";
  InvoiceColumnsEnum["PAID_STATUS"] = "PAID_STATUS";
  return InvoiceColumnsEnum;
}(InvoiceColumnsEnum || {});
var EstimateColumnsEnum = /*#__PURE__*/function (EstimateColumnsEnum) {
  EstimateColumnsEnum["ESTIMATE_DATE"] = "ESTIMATE_DATE";
  EstimateColumnsEnum["DUE_DATE"] = "DUE_DATE";
  EstimateColumnsEnum["STATUS"] = "STATUS";
  EstimateColumnsEnum["TOTAL_VALUE"] = "TOTAL_VALUE";
  EstimateColumnsEnum["CURRENCY"] = "CURRENCY";
  EstimateColumnsEnum["TAX"] = "TAX";
  EstimateColumnsEnum["TAX_2"] = "TAX_2";
  EstimateColumnsEnum["DISCOUNT"] = "DISCOUNT";
  EstimateColumnsEnum["CONTACT"] = "CONTACT";
  return EstimateColumnsEnum;
}(EstimateColumnsEnum || {});
var InvoiceTabsEnum = /*#__PURE__*/function (InvoiceTabsEnum) {
  InvoiceTabsEnum["ACTIONS"] = "ACTIONS";
  InvoiceTabsEnum["SEARCH"] = "SEARCH";
  InvoiceTabsEnum["HISTORY"] = "HISTORY";
  return InvoiceTabsEnum;
}(InvoiceTabsEnum || {});
var TaxCalculationTypeEnum = /*#__PURE__*/function (TaxCalculationTypeEnum) {
  TaxCalculationTypeEnum["SIMPLE"] = "SIMPLE";
  TaxCalculationTypeEnum["COMPOSED"] = "COMPOSED";
  return TaxCalculationTypeEnum;
}(TaxCalculationTypeEnum || {});

/***/ }),

/***/ 94333:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   U: () => (/* binding */ InvoicesService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88326);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80189);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(64913);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26024);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(26860);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(45715);





let InvoicesService = /*#__PURE__*/(() => {
  class InvoicesService {
    constructor(http) {
      this.http = http;
      this.source = new rxjs__WEBPACK_IMPORTED_MODULE_0__/* .BehaviorSubject */ .t(false);
      this.currentData = this.source.asObservable();
    }
    getAll(where, relations = []) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ ._)(this.http.get(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_2__/* .API_PREFIX */ .m4}/invoices`, {
        params: (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_3__/* .toParams */ .SV)({
          where,
          relations
        })
      }));
    }
    getHighestInvoiceNumber(tenantId) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ ._)(this.http.get(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_2__/* .API_PREFIX */ .m4}/invoices/highest`, {
        params: (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_3__/* .toParams */ .SV)({
          tenantId
        })
      }));
    }
    getById(id, relations, findInput) {
      const data = JSON.stringify({
        relations,
        findInput
      });
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ ._)(this.http.get(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_2__/* .API_PREFIX */ .m4}/invoices/${id}`, {
        params: {
          data
        }
      }));
    }
    getPublicInvoice(id, token, relations = []) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ ._)(this.http.get(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_2__/* .API_PREFIX */ .m4}/public/invoice/${id}/${token}`, {
        params: (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_3__/* .toParams */ .SV)({
          relations
        })
      }));
    }
    add(invoice) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ ._)(this.http.post(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_2__/* .API_PREFIX */ .m4}/invoices`, invoice));
    }
    update(id, updateInput) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ ._)(this.http.put(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_2__/* .API_PREFIX */ .m4}/invoices/${id}`, updateInput));
    }
    updateEstimate(id, updateInput) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ ._)(this.http.put(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_2__/* .API_PREFIX */ .m4}/invoices/${id}/estimate`, updateInput));
    }
    updateAction(id, updateInput) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ ._)(this.http.put(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_2__/* .API_PREFIX */ .m4}/invoices/${id}/action`, updateInput));
    }
    updateWithoutAuth(id, token, input) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ ._)(this.http.put(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_2__/* .API_PREFIX */ .m4}/public/invoice/${id}/${token}`, input));
    }
    edit(invoice) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ ._)(this.http.put(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_2__/* .API_PREFIX */ .m4}/invoices/${invoice.id}`, invoice));
    }
    generateLink(id) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ ._)(this.http.put(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_2__/* .API_PREFIX */ .m4}/invoices/generate/${id}`, {}));
    }
    delete(id) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ ._)(this.http.delete(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_2__/* .API_PREFIX */ .m4}/invoices/${id}`));
    }
    sendEmail(email, invoiceNumber, invoiceId, isEstimate, organizationId, tenantId) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ ._)(this.http.put(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_2__/* .API_PREFIX */ .m4}/invoices/email/${email}`, {
        params: {
          isEstimate,
          invoiceNumber,
          invoiceId,
          organizationId,
          tenantId
        }
      }));
    }
    changeValue(message) {
      this.source.next(message);
    }
    downloadInvoicePdf(invoiceId) {
      return this.http.get(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_2__/* .API_PREFIX */ .m4}/invoices/download/${invoiceId}`, {
        responseType: 'blob'
      });
    }
    downloadInvoicePaymentPdf(invoiceId) {
      return this.http.get(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_2__/* .API_PREFIX */ .m4}/invoices/payment/download/${invoiceId}`, {
        responseType: 'blob'
      });
    }
    static {
      this.ɵfac = function InvoicesService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || InvoicesService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵinject"] */ .KVO(_angular_common_http__WEBPACK_IMPORTED_MODULE_5__/* .HttpClient */ .Qq));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdefineInjectable"] */ .jDH({
        token: InvoicesService,
        factory: InvoicesService.ɵfac
      });
    }
  }
  return InvoicesService;
})();

/***/ })

}]);