"use strict";
(self["webpackChunkgauzy"] = self["webpackChunkgauzy"] || []).push([[427],{

/***/ 4398:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ EquipmentMutationModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14572);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10936);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(56383);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(19223);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71924);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59016);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44495);
/* harmony import */ var _tags_tags_color_input_tags_color_input_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(61444);
/* harmony import */ var _modules_currency_currency_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(43629);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);










let EquipmentMutationModule = /*#__PURE__*/(() => {
  class EquipmentMutationModule {
    static {
      this.ɵfac = function EquipmentMutationModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || EquipmentMutationModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .$C({
        type: EquipmentMutationModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .G2t({
        providers: [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_1__/* .EquipmentService */ .m, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_2__/* .ImageAssetService */ .V, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_3__/* .Store */ .il],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__/* .CommonModule */ .MD, _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .FormsModule */ .YN, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__/* .NbCardModule */ .lVF, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__/* .NbIconModule */ .clu, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__/* .NbCheckboxModule */ .Ad8, _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .ReactiveFormsModule */ .X1, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__/* .NbButtonModule */ .P5N, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__/* .NbInputModule */ .pty, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__/* .NbSelectModule */ .VcP, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__/* .TranslateModule */ .h.forChild(), _tags_tags_color_input_tags_color_input_module__WEBPACK_IMPORTED_MODULE_8__/* .TagsColorInputModule */ .x, _modules_currency_currency_module__WEBPACK_IMPORTED_MODULE_9__/* .CurrencyModule */ .C]
      });
    }
  }
  return EquipmentMutationModule;
})();

/***/ }),

/***/ 75119:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   j: () => (/* binding */ EquipmentMutationComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(73014);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(55598);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(10936);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(56383);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(19223);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4644);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(52738);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(39855);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(80189);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(41598);
/* harmony import */ var _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38546);
/* harmony import */ var _gauzy_ui_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(48840);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(59016);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(44495);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(15480);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(71924);
/* harmony import */ var _select_asset_modal_select_asset_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(26161);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(14572);
/* harmony import */ var _tags_tags_color_input_tags_color_input_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(62177);
/* harmony import */ var _modules_currency_currency_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(64251);




















const _c0 = a0 => ({
  opacity: a0
});
const _c1 = (a0, a1) => ({
  "status-danger": a0,
  "status-success": a1
});
function EquipmentMutationComponent_form_8_img_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(0, "img", 44);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("src", ctx_r1.image == null ? null : ctx_r1.image.fullUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵsanitizeUrl"] */ .B4B);
  }
}
function EquipmentMutationComponent_form_8_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(0, "div", 45);
  }
}
function EquipmentMutationComponent_form_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "form", 10)(1, "div", 11)(2, "div", 12)(3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function EquipmentMutationComponent_form_8_Template_div_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.onAddImageClick());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnamespaceSVG"] */ .qSk();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(4, "svg", 14)(5, "defs");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(6, "path", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(7, "g", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(8, "circle", 17)(9, "circle", 18)(10, "use", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnamespaceHTML"] */ .joV();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(11, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(12, EquipmentMutationComponent_form_8_img_12_Template, 1, 1, "img", 21)(13, EquipmentMutationComponent_form_8_div_13_Template, 1, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(14, "div", 23)(15, "div", 24)(16, "label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(19, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(20, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(21, "div", 27)(22, "div", 28)(23, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(25, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(26, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(27, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(28, "div", 28)(29, "label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(31, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(32, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(33, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(34, "div", 27)(35, "div", 28)(36, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(38, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(39, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(40, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(41, "div", 28)(42, "label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(44, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(45, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(46, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(47, "div", 27)(48, "div", 28)(49, "label", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(51, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(52, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(53, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(54, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(55, "ga-currency", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(56, "div", 27)(57, "div", 39)(58, "ga-tags-color-input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("selectedTagsEvent", function EquipmentMutationComponent_form_8_Template_ga_tags_color_input_selectedTagsEvent_58_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.selectedTagsEvent($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(59, "div", 11)(60, "div", 41)(61, "div", 24)(62, "nb-checkbox", 42)(63, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(65, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(66, "input", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    let tmp_23_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("formGroup", ctx_r1.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction1"] */ .eq3(51, _c0, ctx_r1.hoverState ? "1" : "0.3"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction1"] */ .eq3(53, _c0, ctx_r1.hoverState ? "0.2" : "0"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r1.image && (ctx_r1.image == null ? null : ctx_r1.image.fullUrl));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", !ctx_r1.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(18, 25, "EQUIPMENT_PAGE.EQUIPMENT_NAME"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpropertyInterpolate"] */ .FS9("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(20, 27, "EQUIPMENT_PAGE.EQUIPMENT_NAME"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction2"] */ .l_i(55, _c1, ctx_r1.form.controls["name"].invalid && ctx_r1.form.controls["name"].dirty, ctx_r1.form.controls["name"].valid && ctx_r1.form.controls["name"].dirty));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(25, 29, "EQUIPMENT_PAGE.EQUIPMENT_TYPE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpropertyInterpolate"] */ .FS9("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(27, 31, "EQUIPMENT_PAGE.EQUIPMENT_TYPE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction2"] */ .l_i(58, _c1, ctx_r1.form.controls["type"].invalid && ctx_r1.form.controls["type"].dirty, ctx_r1.form.controls["type"].valid && ctx_r1.form.controls["type"].dirty));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(31, 33, "EQUIPMENT_PAGE.EQUIPMENT_MANUFACTURED_YEAR"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpropertyInterpolate"] */ .FS9("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(33, 35, "EQUIPMENT_PAGE.EQUIPMENT_MANUFACTURED_YEAR"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction2"] */ .l_i(61, _c1, ctx_r1.form.controls["manufacturedYear"].invalid && ctx_r1.form.controls["manufacturedYear"].dirty, ctx_r1.form.controls["manufacturedYear"].valid && ctx_r1.form.controls["manufacturedYear"].dirty));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(38, 37, "EQUIPMENT_PAGE.EQUIPMENT_SN"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpropertyInterpolate"] */ .FS9("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(40, 39, "EQUIPMENT_PAGE.EQUIPMENT_SN"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(44, 41, "EQUIPMENT_PAGE.EQUIPMENT_MAX_SHARE_PERIOD"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpropertyInterpolate"] */ .FS9("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(46, 43, "EQUIPMENT_PAGE.EQUIPMENT_MAX_SHARE_PERIOD"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction2"] */ .l_i(64, _c1, ctx_r1.form.controls["maxSharePeriod"].invalid && ctx_r1.form.controls["maxSharePeriod"].dirty, ctx_r1.form.controls["maxSharePeriod"].valid && ctx_r1.form.controls["maxSharePeriod"].dirty));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(51, 45, "EQUIPMENT_PAGE.EQUIPMENT_INITIAL_COST"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpropertyInterpolate"] */ .FS9("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(53, 47, "EQUIPMENT_PAGE.EQUIPMENT_INITIAL_COST"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction2"] */ .l_i(67, _c1, ctx_r1.form.controls["initialCost"].invalid && ctx_r1.form.controls["initialCost"].dirty, ctx_r1.form.controls["initialCost"].valid && ctx_r1.form.controls["initialCost"].dirty));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("selectedTags", (tmp_23_0 = ctx_r1.form.get("tags")) == null ? null : tmp_23_0.value)("isOrgLevel", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(65, 49, "EQUIPMENT_PAGE.EQUIPMENT_AUTO_APPROVE"));
  }
}
let EquipmentMutationComponent = /*#__PURE__*/(() => {
  let EquipmentMutationComponent = class EquipmentMutationComponent extends _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_1__/* .TranslationBaseComponent */ .K {
    constructor(dialogRef, dialogService, equipmentService, fb, translationService, store, imageAssetService, toastrService) {
      super(translationService);
      this.dialogRef = dialogRef;
      this.dialogService = dialogService;
      this.equipmentService = equipmentService;
      this.fb = fb;
      this.translationService = translationService;
      this.store = store;
      this.imageAssetService = imageAssetService;
      this.toastrService = toastrService;
      this.hoverState = false;
      this.newImageUploadedEvent$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__/* .Subject */ .B();
      this.newImageStoredEvent$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__/* .Subject */ .B();
    }
    ngOnInit() {
      var _this = this;
      this.selectedCurrency = this.store.selectedOrganization ? this.store.selectedOrganization.currency : _gauzy_ui_config__WEBPACK_IMPORTED_MODULE_3__/* .environment */ .c.DEFAULT_CURRENCY;
      this.initializeForm();
      this.image = this.equipment?.image || null;
      this.store.selectedOrganization$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__/* .filter */ .p)(organization => !!organization), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .M)(organization => this.organization = organization), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__/* .untilDestroyed */ .s)(this)).subscribe();
      this.newImageUploadedEvent$.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__/* .untilDestroyed */ .s)(this)).subscribe(/*#__PURE__*/function () {
        var _ref = (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A)(function* (resultData) {
          const newAsset = {
            name: resultData['original_filename'],
            url: resultData.url,
            width: resultData.width,
            height: resultData.height,
            isFeatured: false,
            organizationId: _this.organization.id,
            tenantId: _this.store.user.tenantId
          };
          let result = yield _this.imageAssetService.createImageAsset(newAsset);
          if (result) {
            _this.toastrService.success('INVENTORY_PAGE.IMAGE_SAVED');
            _this.newImageStoredEvent$.next(result);
          }
        });
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    }
    initializeForm() {
      var _this2 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A)(function* () {
        _this2.form = _this2.fb.group({
          tags: [_this2.equipment ? _this2.equipment.tags : []],
          name: [_this2.equipment ? _this2.equipment.name : '', _angular_forms__WEBPACK_IMPORTED_MODULE_8__/* .Validators */ .k0.required],
          type: [_this2.equipment ? _this2.equipment.type : ''],
          serialNumber: [_this2.equipment ? _this2.equipment.serialNumber : ''],
          manufacturedYear: [_this2.equipment ? _this2.equipment.manufacturedYear : null, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__/* .Validators */ .k0.min(1000)]],
          initialCost: [_this2.equipment ? _this2.equipment.initialCost : null, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__/* .Validators */ .k0.min(0)]],
          currency: [_this2.equipment ? _this2.equipment.currency : _this2.selectedCurrency, _angular_forms__WEBPACK_IMPORTED_MODULE_8__/* .Validators */ .k0.required],
          maxSharePeriod: [_this2.equipment ? _this2.equipment.maxSharePeriod : null],
          autoApproveShare: [_this2.equipment ? _this2.equipment.autoApproveShare : false],
          id: [_this2.equipment ? _this2.equipment.id : null]
        });
      })();
    }
    onAddImageClick() {
      var _this3 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A)(function* () {
        const dialog = _this3.dialogService.open(_select_asset_modal_select_asset_component__WEBPACK_IMPORTED_MODULE_9__/* .SelectAssetComponent */ .a, {
          context: {
            newImageUploadedEvent: _this3.newImageUploadedEvent$,
            newImageStoredEvent: _this3.newImageStoredEvent$,
            settings: {
              selectMultiple: false,
              deleteImageEnabled: false,
              uploadImageEnabled: true
            }
          }
        });
        let selectedImage = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_10__/* .firstValueFrom */ ._)(dialog.onClose);
        _this3.image = selectedImage ? selectedImage : _this3.image;
      })();
    }
    saveEquipment() {
      var _this4 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A)(function* () {
        if (!_this4.organization) {
          return;
        }
        if (!_this4.form.get('id').value) {
          delete _this4.form.value['id'];
        }
        const {
          tenantId
        } = _this4.store.user;
        const {
          id: organizationId
        } = _this4.organization;
        const equipment = yield _this4.equipmentService.save({
          ..._this4.form.value,
          tenantId,
          organizationId,
          image: _this4.image
        });
        _this4.closeDialog(equipment);
      })();
    }
    closeDialog(equipment) {
      var _this5 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A)(function* () {
        _this5.dialogRef.close(equipment);
      })();
    }
    selectedTagsEvent(selectedTags) {
      this.form.get('tags').setValue(selectedTags);
      this.form.get('tags').updateValueAndValidity();
    }
    static {
      this.ɵfac = function EquipmentMutationComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || EquipmentMutationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbDialogRef */ .ybQ), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbDialogService */ .S0W), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_12__/* .EquipmentService */ .m), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_forms__WEBPACK_IMPORTED_MODULE_8__/* .UntypedFormBuilder */ .ze), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__/* .TranslateService */ .c$), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_14__/* .Store */ .il), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_15__/* .ImageAssetService */ .V), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_16__/* .ToastrService */ .t));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: EquipmentMutationComponent,
        selectors: [["ngx-equipment-mutation"]],
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
        decls: 16,
        vars: 11,
        consts: [[1, "main"], [1, "d-flex", "flex-column"], [1, "cancel"], [1, "fas", "fa-times", 3, "click"], [1, "title"], [1, "body"], [3, "formGroup", 4, "ngIf"], [1, "text-left"], ["status", "basic", "outline", "", "nbButton", "", 1, "mr-2", 3, "click"], ["status", "success", "nbButton", "", 3, "click", "disabled"], [3, "formGroup"], [1, "row", "mt-3"], [1, "col-sm-3", "mb-5"], [1, "equipment-img", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "width", "68", "height", "68", "viewBox", "0 0 68 68", 3, "ngStyle"], ["id", "a", "d", "M28.667 31.333a2 2 0 1 0-.002-4.001 2 2 0 0 0 .002 4.001m13.333 12H26.748l9.34-7.793c.328-.279.923-.277 1.244-.001l6.001 5.12V42c0 .736-.597 1.333-1.333 1.333M26 24.667h16c.736 0 1.333.597 1.333 1.333v11.152l-4.27-3.643c-1.32-1.122-3.386-1.122-4.694-.008l-9.702 8.096V26c0-.736.597-1.333 1.333-1.333M42 22H26c-2.205 0-4 1.795-4 4v16c0 2.205 1.795 4 4 4h16c2.205 0 4-1.795 4-4V26c0-2.205-1.795-4-4-4"], ["fill", "none", "fill-rule", "evenodd"], ["cx", "34", "cy", "34", "r", "34", "fill", "#0091FF", "opacity", ".3"], ["cx", "34", "cy", "34", "r", "26", "fill", "#0091FF", "opacity", ".9"], ["fill", "#FFF", "fill-rule", "nonzero", 0, "xlink", "href", "#a"], [1, "image-overlay", 3, "ngStyle"], ["class", "featured-image", "alt", "Feature image", "style", "width: 150px", 3, "src", 4, "ngIf"], ["class", "featured-image no-image", "style", "width: 150px", 4, "ngIf"], [1, "col-sm-9", "pl-4", "mb-5"], [1, "form-group", "mb-3"], ["for", "name", 1, "label"], ["nbInput", "", "type", "text", "formControlName", "name", "fullWidth", "", 3, "placeholder", "ngClass"], [1, "row"], [1, "col-sm-6", "mb-3"], ["for", "type", 1, "label"], ["nbInput", "", "type", "text", "formControlName", "type", "fullWidth", "", 3, "placeholder", "ngClass"], ["for", "manufacturedYear", 1, "label"], ["nbInput", "", "type", "number", "formControlName", "manufacturedYear", "fullWidth", "", 3, "placeholder", "ngClass"], ["for", "serialNumber", 1, "label"], ["nbInput", "", "type", "text", "formControlName", "serialNumber", "fullWidth", "", 3, "placeholder"], ["nbInput", "", "type", "number", "formControlName", "maxSharePeriod", "fullWidth", "", 3, "placeholder", "ngClass"], ["for", "initialCost", 1, "label"], ["nbInput", "", "type", "number", "formControlName", "initialCost", "fullWidth", "", 3, "placeholder", "ngClass"], ["formControlName", "currency"], [1, "col-sm-12"], [3, "selectedTagsEvent", "selectedTags", "isOrgLevel"], [1, "col-sm-9", "mb-3"], ["formControlName", "autoApproveShare"], ["type", "hidden", "formControlName", "id"], ["alt", "Feature image", 1, "featured-image", 2, "width", "150px", 3, "src"], [1, "featured-image", "no-image", 2, "width", "150px"]],
        template: function EquipmentMutationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-card", 0)(1, "nb-card-header", 1)(2, "span", 2)(3, "i", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function EquipmentMutationComponent_Template_i_click_3_listener() {
              return ctx.closeDialog();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(4, "h5", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(6, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(7, "nb-card-body", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(8, EquipmentMutationComponent_form_8_Template, 67, 70, "form", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(9, "nb-card-footer", 7)(10, "button", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function EquipmentMutationComponent_Template_button_click_10_listener() {
              return ctx.dialogRef.close();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(12, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(13, "button", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function EquipmentMutationComponent_Template_button_click_13_listener() {
              return ctx.saveEquipment();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(15, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(6, 5, ctx.equipment ? "EQUIPMENT_PAGE.EDIT_EQUIPMENT" : "EQUIPMENT_PAGE.ADD_EQUIPMENT"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.form);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(12, 7, "BUTTONS.CANCEL"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("disabled", ctx.form.invalid);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(15, 9, "BUTTONS.SAVE"), " ");
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_17__/* .NgClass */ .YU, _angular_common__WEBPACK_IMPORTED_MODULE_17__/* .NgIf */ .bT, _angular_common__WEBPACK_IMPORTED_MODULE_17__/* .NgStyle */ .B3, _angular_forms__WEBPACK_IMPORTED_MODULE_8__/* ["ɵNgNoValidate"] */ .qT, _angular_forms__WEBPACK_IMPORTED_MODULE_8__/* .DefaultValueAccessor */ .me, _angular_forms__WEBPACK_IMPORTED_MODULE_8__/* .NumberValueAccessor */ .Q0, _angular_forms__WEBPACK_IMPORTED_MODULE_8__/* .NgControlStatus */ .BC, _angular_forms__WEBPACK_IMPORTED_MODULE_8__/* .NgControlStatusGroup */ .cb, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbCardComponent */ .SrT, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbCardBodyComponent */ .KH5, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbCardFooterComponent */ .VDm, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbCardHeaderComponent */ .zJv, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbCheckboxComponent */ .DMy, _angular_forms__WEBPACK_IMPORTED_MODULE_8__/* .FormGroupDirective */ .j4, _angular_forms__WEBPACK_IMPORTED_MODULE_8__/* .FormControlName */ .JD, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbButtonComponent */ .YP2, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbInputDirective */ .i6h, _tags_tags_color_input_tags_color_input_component__WEBPACK_IMPORTED_MODULE_18__/* .TagsColorInputComponent */ .i, _modules_currency_currency_component__WEBPACK_IMPORTED_MODULE_19__/* .CurrencyComponent */ .X, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__/* .TranslatePipe */ .D9],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   i[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n}\n[dir=ltr]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n[dir=rtl]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--gauzy-text-color-1);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(245, 109, 88, 0.3);\n  border-width: 2px;\n  color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(245, 109, 88, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 16px;\n  letter-spacing: 0em;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(126, 126, 143, 0.3);\n  border-width: 2px;\n  color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(126, 126, 143, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(37, 184, 105, 0.3);\n  border-width: 2px;\n  color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(37, 184, 105, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[disabled][_ngcontent-%COMP%], \n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic.btn-disabled[_ngcontent-%COMP%] {\n  background-color: var(--button-outline-basic-disabled-background-color);\n  border-color: var(--button-outline-basic-disabled-border-color);\n  color: var(--button-outline-basic-disabled-text-color);\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].primary.appearance-filled.status-primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  border: unset;\n  background-color: var(--color-primary-transparent-default);\n  box-shadow: var(--gauzy-shadow) 0, 0, 0, 0.15;\n}\n[dir=ltr]   [_nghost-%COMP%]     input, \n[dir=ltr]   [_nghost-%COMP%]     textarea {\n  text-align: start;\n}\n[dir=rtl]   [_nghost-%COMP%]     input, \n[dir=rtl]   [_nghost-%COMP%]     textarea {\n  text-align: end;\n}\n[_nghost-%COMP%]     input, \n[_nghost-%COMP%]     nb-select.appearance-outline.status-basic .select-button, \n[_nghost-%COMP%]     .ng-select .ng-select-container {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n  height: 42px !important;\n}\n[_nghost-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder, \n[_nghost-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {\n  top: unset !important;\n}\n[_nghost-%COMP%]     label, \n[_nghost-%COMP%]     .label {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  color: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]     textarea {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n}\n[_nghost-%COMP%]     .ng-select .ng-select-container input, \n[_nghost-%COMP%]     nb-tag-list input {\n  background-color: unset !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n}\n\n.equipment-img[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  cursor: pointer;\n  width: 145px;\n}\n.equipment-img[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  position: absolute;\n}\n.equipment-img[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   g[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%] {\n  fill: var(--text-primary-color);\n}\n.equipment-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], \n.equipment-img[_ngcontent-%COMP%]   .no-image[_ngcontent-%COMP%] {\n  border-radius: var(--border-radius);\n  height: 150px;\n  object-fit: cover;\n}\n.equipment-img[_ngcontent-%COMP%]   .no-image[_ngcontent-%COMP%] {\n  background-color: rgba(126, 126, 143, 0.1);\n}\n\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n  width: 645px;\n}"]
      });
    }
  };
  EquipmentMutationComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_20__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__/* .UntilDestroy */ .d)({
    checkProperties: true
  }), (0,tslib__WEBPACK_IMPORTED_MODULE_20__/* .__metadata */ .Sn)("design:paramtypes", [_nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbDialogRef */ .ybQ, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbDialogService */ .S0W, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_12__/* .EquipmentService */ .m, _angular_forms__WEBPACK_IMPORTED_MODULE_8__/* .UntypedFormBuilder */ .ze, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__/* .TranslateService */ .c$, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_14__/* .Store */ .il, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_15__/* .ImageAssetService */ .V, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_16__/* .ToastrService */ .t])], EquipmentMutationComponent);
  return EquipmentMutationComponent;
})();


/***/ })

}]);