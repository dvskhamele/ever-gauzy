"use strict";
(self["webpackChunkgauzy"] = self["webpackChunkgauzy"] || []).push([[5433],{

/***/ 10328:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   w: () => (/* binding */ ImportRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(908);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17785);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4106);
/* harmony import */ var _import_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26425);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26860);






const routes = [{
  path: '',
  component: _import_component__WEBPACK_IMPORTED_MODULE_0__/* .ImportComponent */ .P,
  canActivate: [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_1__/* .PermissionsGuard */ .a],
  data: {
    permissions: {
      only: route => {
        const token = route.queryParamMap.get('token');
        const userId = route.queryParamMap.get('userId');
        if (token && userId) {
          return [];
        } else {
          return [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__/* .PermissionsEnum */ .U.ALL_ORG_VIEW, _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__/* .PermissionsEnum */ .U.IMPORT_ADD];
        }
      },
      redirectTo: '/pages/settings'
    }
  }
}];
let ImportRoutingModule = /*#__PURE__*/(() => {
  class ImportRoutingModule {
    static {
      this.ɵfac = function ImportRoutingModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || ImportRoutingModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdefineNgModule"] */ .$C({
        type: ImportRoutingModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__/* .RouterModule */ .iI.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_4__/* .RouterModule */ .iI]
      });
    }
  }
  return ImportRoutingModule;
})();

/***/ }),

/***/ 15433:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ImportModule: () => (/* binding */ ImportModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14572);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45715);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10936);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(56383);
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(79475);
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(29087);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11513);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(19223);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(38834);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(46880);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(60176);
/* harmony import */ var _import_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10328);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26860);














let ImportModule = /*#__PURE__*/(() => {
  class ImportModule {
    static {
      this.ɵfac = function ImportModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || ImportModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineNgModule"] */ .$C({
        type: ImportModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineInjector"] */ .G2t({
        providers: [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_2__/* .ExportAllService */ .Z, (0,_angular_common_http__WEBPACK_IMPORTED_MODULE_3__/* .provideHttpClient */ .$R)((0,_angular_common_http__WEBPACK_IMPORTED_MODULE_3__/* .withInterceptorsFromDi */ .Sx)())],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__/* .CommonModule */ .MD, _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .FormsModule */ .YN, ng2_file_upload__WEBPACK_IMPORTED_MODULE_6__/* .FileUploadModule */ .eB, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbBadgeModule */ .iEK, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbButtonModule */ .P5N, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbCardModule */ .lVF, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbIconModule */ .clu, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbInputModule */ .pty, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbRadioModule */ .iyp, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbSpinnerModule */ .gYs, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbToastrModule */ .EcJ.forRoot(), _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbTooltipModule */ .IB0, _import_routing_module__WEBPACK_IMPORTED_MODULE_0__/* .ImportRoutingModule */ .w, ngx_permissions__WEBPACK_IMPORTED_MODULE_8__/* .NgxPermissionsModule */ .Ov.forChild(), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__/* .TranslateModule */ .h.forChild(), _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_10__/* .SharedModule */ .G, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_11__/* .FileUploaderModule */ .N, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_12__/* .GauzyButtonActionModule */ .N]
      });
    }
  }
  return ImportModule;
})();

/***/ }),

/***/ 26425:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P: () => (/* binding */ ImportComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(64411);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26860);
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(29087);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(56383);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(19223);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(72781);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(73246);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(23423);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(9620);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(95655);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(24237);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43277);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _gauzy_ui_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(48840);
/* harmony import */ var _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38546);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(64913);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(71924);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(49588);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(14572);
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(79475);
/* harmony import */ var _packages_ui_core_shared_src_lib_components_back_navigation_back_navigation_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(90910);
/* harmony import */ var _packages_ui_core_shared_src_lib_gauzy_button_action_gauzy_button_action_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(45293);
/* harmony import */ var _packages_ui_core_shared_src_lib_pipes_datetime_format_pipe__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(23830);
/* harmony import */ var _packages_ui_core_shared_src_lib_pipes_file_size_pipe__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(31571);



























const _c0 = a0 => ({
  width: a0
});
const _c1 = a0 => ({
  "nv-file-over": a0
});
const _c2 = a0 => ({
  "border-bottom-none": a0
});
function ImportComponent_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("onFileDrop", function ImportComponent_ng_container_12_Template_div_onFileDrop_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx_r2.dropFile($event));
    })("fileOver", function ImportComponent_ng_container_12_Template_div_fileOver_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx_r2.fileOverBase($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpureFunction1"] */ .eq3(5, _c1, ctx_r2.hasBaseDropZoneOver))("uploader", ctx_r2.uploader);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(3, 3, "MENU.IMPORT_EXPORT.DROP_FILE"), " ");
  }
}
function ImportComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(2, 1, "MENU.IMPORT_EXPORT.NO_DROP_FILE"), " ");
  }
}
function ImportComponent_div_34_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(1, "ngx-gauzy-button-action", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG(2);
    const visibleButton_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵreference"] */ .sdS(88);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("hasLayoutSelector", false)("isDisable", false)("buttonTemplateVisible", visibleButton_r5);
  }
}
function ImportComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(1, ImportComponent_div_34_ng_container_1_Template, 2, 3, "ng-container", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngxPermissionsOnly", ctx_r2.IMPORT_EXPORT_VIEW);
  }
}
function ImportComponent_div_58_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(2, "fileSize");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(2, 1, item_r7 == null ? null : item_r7.file == null ? null : item_r7.file.size), " ");
  }
}
function ImportComponent_div_58_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "div", 28)(1, "div", 45)(2, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(3, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpureFunction1"] */ .eq3(2, _c0, item_r7.progress + "%"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", item_r7 == null ? null : item_r7.progress, "% ");
  }
}
function ImportComponent_div_58_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(1, "nb-badge", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("text", ctx_r2.importStatus.SUCCESS);
  }
}
function ImportComponent_div_58_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(1, "nb-badge", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("text", ctx_r2.importStatus.CANCELLED);
  }
}
function ImportComponent_div_58_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(1, "nb-badge", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("text", ctx_r2.importStatus.IN_PROGRESS);
  }
}
function ImportComponent_div_58_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(1, "nb-badge", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("text", ctx_r2.importStatus.FAILED);
  }
}
function ImportComponent_div_58_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("click", function ImportComponent_div_58_Template_div_click_0_listener() {
      const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r6).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx_r2.selectItem(item_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(3, ImportComponent_div_58_div_3_Template, 3, 3, "div", 42)(4, ImportComponent_div_58_div_4_Template, 5, 4, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(5, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(6, ImportComponent_div_58_span_6_Template, 2, 1, "span", 20)(7, ImportComponent_div_58_span_7_Template, 2, 1, "span", 20)(8, ImportComponent_div_58_span_8_Template, 2, 1, "span", 20)(9, ImportComponent_div_58_span_9_Template, 2, 1, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    const lastItem_r8 = ctx.last;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpureFunction1"] */ .eq3(8, _c2, lastItem_r8));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", item_r7 == null ? null : item_r7.file == null ? null : item_r7.file.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r2.uploader.options.isHTML5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r2.uploader.options.isHTML5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngIf", item_r7.isUploaded && !item_r7.isError);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngIf", item_r7.isCancel);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngIf", item_r7.isUploading);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngIf", item_r7.isError);
  }
}
function ImportComponent_div_85_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(1, "nb-badge", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("text", ctx_r2.importStatus.SUCCESS);
  }
}
function ImportComponent_div_85_span_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(1, "nb-badge", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("text", ctx_r2.importStatus.FAILED);
  }
}
function ImportComponent_div_85_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "div", 51)(1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(3, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(5, "fileSize");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(6, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(8, "dateTimeFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(9, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(10, ImportComponent_div_85_span_10_Template, 2, 1, "span", 20)(11, ImportComponent_div_85_span_11_Template, 2, 1, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(12, "div", 52)(13, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("click", function ImportComponent_div_85_Template_button_click_13_listener() {
      const history_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r9).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx_r2.download(history_r10));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(14, "nb-icon", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()();
  }
  if (rf & 2) {
    const history_r10 = ctx.$implicit;
    const lastHistory_r11 = ctx.last;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpureFunction1"] */ .eq3(13, _c2, lastHistory_r11));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .JRh(history_r10.file);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(5, 7, history_r10.size));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(8, 9, history_r10.importDate), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngIf", history_r10.status === ctx_r2.importStatus.SUCCESS);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngIf", history_r10.status === ctx_r2.importStatus.FAILED);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(16, 11, "BUTTONS.DOWNLOAD"), " ");
  }
}
function ImportComponent_ng_template_87_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("click", function ImportComponent_ng_template_87_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r12);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx_r2.uploader.uploadAll());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(4, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("click", function ImportComponent_ng_template_87_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r12);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx_r2.uploader.cancelAll());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(8, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("click", function ImportComponent_ng_template_87_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r12);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx_r2.uploader.clearQueue());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(10, "nb-icon", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("disabled", !ctx_r2.uploader.getNotUploadedItems().length);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(3, 6, "MENU.IMPORT_EXPORT.IMPORT"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("disabled", !ctx_r2.uploader.isUploading);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(7, 8, "MENU.IMPORT_EXPORT.CANCEL"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("disabled", !ctx_r2.uploader.queue.length)("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(9, 10, "MENU.IMPORT_EXPORT.REMOVE"));
  }
}
let ImportComponent = class ImportComponent extends _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_2__/* .TranslationBaseComponent */ .K {
  constructor(route, toastrService, store, translateService, importService, cdr) {
    super(translateService);
    this.route = route;
    this.toastrService = toastrService;
    this.store = store;
    this.translateService = translateService;
    this.importService = importService;
    this.cdr = cdr;
    this.history$ = this.importService.history$;
    this.importDT = new Date();
    this.importTypeEnum = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__/* .ImportTypeEnum */ .f;
    this.importType = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__/* .ImportTypeEnum */ .f.MERGE;
    this.importStatus = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__/* .ImportStatusEnum */ .r;
    this.subject$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__/* .Subject */ .B();
  }
  ngOnInit() {
    this.store.user$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .filter */ .p)(user => !!user), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .M)(() => this.initUploader()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__/* .untilDestroyed */ .s)(this)).subscribe();
    this.subject$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .M)(() => this.getImportHistory()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__/* .untilDestroyed */ .s)(this)).subscribe();
  }
  ngAfterViewInit() {
    this.route.queryParamMap.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .filter */ .p)(params => !!params && !!params.get('importType')), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .M)(params => this.importType = params.get('importType')), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .M)(() => this.initUploader()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__/* .untilDestroyed */ .s)(this)).subscribe();
    this.subject$.next(true);
    this.cdr.detectChanges();
  }
  initUploader() {
    this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_8__/* .FileUploader */ .l0({
      url: _gauzy_ui_config__WEBPACK_IMPORTED_MODULE_9__/* .environment */ .c.API_BASE_URL + `${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_10__/* .API_PREFIX */ .m4}/import`,
      itemAlias: 'file',
      authTokenHeader: 'Authorization',
      authToken: `Bearer ${this.store.token}`,
      headers: [{
        name: 'Tenant-Id',
        value: `${this.store.user.tenantId}`
      }, {
        name: 'Organization-Id',
        value: `${this.store.selectedOrganization.id}`
      }]
    });
    this.uploader.onAfterAddingFile = file => {
      file.withCredentials = false;
    };
    this.uploader.onBuildItemForm = (item, form) => {
      form.append('importType', this.importType);
    };
    this.uploader.onCompleteItem = () => {
      this.subject$.next(true);
      this.initUploader();
    };
    this.hasBaseDropZoneOver = false;
  }
  onImportTypeChange(e) {
    this.importType = e;
    this.initUploader();
  }
  dropFile(e) {
    if (e[0].name !== 'archive.zip' || Object.values(e).length > 1) {
      this.uploader.clearQueue();
      this.alert();
    }
  }
  fileOverBase(e) {
    this.hasBaseDropZoneOver = e;
  }
  onFileClick(e) {
    if (e.target.files[0].name !== 'archive.zip') {
      this.uploader.clearQueue();
      this.alert();
    }
    e.target.value = '';
  }
  alert() {
    this.toastrService.danger(this.getTranslation('MENU.IMPORT_EXPORT.CORRECT_FILE_NAME'), this.getTranslation('MENU.IMPORT_EXPORT.WRONG_FILE_NAME'), {
      position: _nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbGlobalPhysicalPosition */ .yQv.TOP_RIGHT
    });
  }
  getImportHistory() {
    this.loading = true;
    this.importService.getHistory().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .M)(() => this.loading = false), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__/* .untilDestroyed */ .s)(this)).subscribe();
    this.cdr.detectChanges();
  }
  /**
   * Download Import History Files
   *
   * @param item
   */
  download(item) {
    if (item) {
      (0,file_saver__WEBPACK_IMPORTED_MODULE_0__.saveAs)(item.fullUrl, item.file);
    }
  }
  static {
    this.ɵfac = function ImportComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ImportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_router__WEBPACK_IMPORTED_MODULE_12__/* .ActivatedRoute */ .nX), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbToastrService */ .bxm), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_13__/* .Store */ .il), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__/* .TranslateService */ .c$), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_15__/* .ImportService */ .X), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* .ChangeDetectorRef */ .gRc));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineComponent"] */ .VBU({
      type: ImportComponent,
      selectors: [["ngx-import"]],
      standalone: false,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
      decls: 89,
      vars: 71,
      consts: [["noUpload", ""], ["fileInput", ""], ["visibleButton", ""], [1, "d-flex"], [1, "info-text", "m-0"], [1, "title"], [1, "message"], [1, "import-data"], [1, "import-zone"], [4, "ngIf", "ngIfElse"], [1, "ilmport_export_wrapper"], [1, "radio-buttons-group", 3, "valueChange", "value"], ["checked", "true", 3, "value"], [3, "value"], [1, "table-zone"], [1, "d-flex", "align-items-start", "justify-content-between"], [1, "uploader-zone"], ["outline", "", "status", "primary", "size", "small", "nbButton", "", 1, "button-import", 3, "click", "disabled"], [1, "btn-text"], ["type", "file", "accept", "application/zip", "ng2FileSelect", "", 2, "display", "none", 3, "change", "uploader"], [4, "ngIf"], [1, "queue-progress"], [1, "progress-percent"], [1, "progress", "w-100"], ["role", "progressbar", 1, "progress-bar", 3, "ngStyle"], [1, "row", "custom-header", "m-0", "align-items-center"], [1, "col-4"], [1, "col-1"], [1, "col-5"], [1, "col-2"], [1, "custom-body", "queue"], ["class", "row border-bottom m-0 py-3 align-items-center", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "mt-3"], ["nbSpinnerStatus", "primary", "nbSpinnerSize", "large", 3, "nbSpinner"], [1, "col-3"], [1, "custom-body", "history"], ["class", "row border-bottom m-0 py-3 align-items-center", 3, "ngClass", 4, "ngFor", "ngForOf"], ["ng2FileDrop", "", 1, "well", "my-drop-zone", 3, "onFileDrop", "fileOver", "ngClass", "uploader"], [1, "well", "my-drop-zone"], [4, "ngxPermissionsOnly"], [3, "hasLayoutSelector", "isDisable", "buttonTemplateVisible"], [1, "row", "border-bottom", "m-0", "py-3", "align-items-center", 3, "click", "ngClass"], ["class", "col-1", "style", "white-space: nowrap", 4, "ngIf"], ["class", "col-5", 4, "ngIf"], [1, "col-1", 2, "white-space", "nowrap"], [1, "d-flex", "align-items-center"], [1, "progress", "w-100", "mr-1", 2, "margin-bottom", "0", "height", "10px"], ["status", "success", 3, "text"], ["status", "warning", 3, "text"], ["status", "info", 3, "text"], ["status", "danger", 3, "text"], [1, "row", "border-bottom", "m-0", "py-3", "align-items-center", 3, "ngClass"], ["nowrap", "", 1, "col-3"], ["nbButton", "", "status", "basic", "size", "small", 1, "action", "primary", 3, "click"], ["icon", "download-outline"], ["nbButton", "", "type", "button", "status", "success", "size", "small", 1, "action", 3, "click", "disabled"], ["nbButton", "", "type", "button", "status", "warning", "size", "small", 1, "action", 3, "click", "disabled"], ["nbButton", "", "type", "button", "status", "basic", "size", "small", 1, "action", 3, "click", "disabled", "nbTooltip"], ["status", "danger", "icon", "trash-2-outline"]],
      template: function ImportComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetCurrentView"] */ .RV6();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "nb-card")(1, "nb-card-header", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(2, "ngx-back-navigation");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(3, "span", 4)(4, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(6, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(7, "span", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(9, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(10, "nb-card-body", 7)(11, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(12, ImportComponent_ng_container_12_Template, 4, 7, "ng-container", 9)(13, ImportComponent_ng_template_13_Template, 3, 3, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplateRefExtractor"] */ .C5r);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(15, "div", 10)(16, "nb-radio-group", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("valueChange", function ImportComponent_Template_nb_radio_group_valueChange_16_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx.onImportTypeChange($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(17, "nb-radio", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(19, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(20, "nb-radio", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(22, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(23, "div", 14)(24, "div", 15)(25, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(27, "button", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("click", function ImportComponent_Template_button_click_27_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r1);
            const fileInput_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵreference"] */ .sdS(33);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(fileInput_r4.click());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(28, "span", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(29);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(30, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(31, "titlecase");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(32, "input", 19, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("change", function ImportComponent_Template_input_change_32_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx.onFileClick($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(34, ImportComponent_div_34_Template, 2, 1, "div", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(35, "div", 21)(36, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(37);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(38, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(39, "span", 22)(40, "div", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(41, "div", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(42);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(43, "div")(44, "div", 25)(45, "div", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(46);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(47, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(48, "div", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(49);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(50, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(51, "div", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(52);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(53, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(54, "div", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(55);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(56, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(57, "div", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(58, ImportComponent_div_58_Template, 10, 10, "div", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(59, "nb-card", 32)(60, "nb-card-header")(61, "h4", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(62);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(63, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(64, "span", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(65);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(66, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(67, "nb-card-body", 33)(68, "div", 25)(69, "div", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(70);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(71, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(72, "div", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(73);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(74, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(75, "div", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(76);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(77, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(78, "div", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(79);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(80, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(81, "div", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(82);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(83, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(84, "div", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(85, ImportComponent_div_85_Template, 17, 15, "div", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(86, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(87, ImportComponent_ng_template_87_Template, 11, 12, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplateRefExtractor"] */ .C5r);
        }
        if (rf & 2) {
          let tmp_12_0;
          const noUpload_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵreference"] */ .sdS(14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(6, 31, "MENU.IMPORT_EXPORT.IMPORT_DATA"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(9, 33, "MENU.IMPORT_EXPORT.IMPORT_MESSAGE"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngIf", (ctx.uploader == null ? null : ctx.uploader.queue == null ? null : ctx.uploader.queue.length) === 0)("ngIfElse", noUpload_r13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("value", ctx.importType);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("value", ctx.importTypeEnum.MERGE);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(19, 35, "MENU.IMPORT_EXPORT.MERGE"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("value", ctx.importTypeEnum.CLEAN);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(22, 37, "MENU.IMPORT_EXPORT.CLEAN_UP"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", ctx.uploader == null ? null : ctx.uploader.queue == null ? null : (tmp_12_0 = ctx.uploader.queue.at(-1)) == null ? null : tmp_12_0.file == null ? null : tmp_12_0.file.name, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("disabled", (ctx.uploader == null ? null : ctx.uploader.queue == null ? null : ctx.uploader.queue.length) !== 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(31, 41, _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(30, 39, "MENU.IMPORT_EXPORT.BROWSE")));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("uploader", ctx.uploader);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngIf", (ctx.uploader == null ? null : ctx.uploader.queue == null ? null : ctx.uploader.queue.length) > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(38, 43, "MENU.IMPORT_EXPORT.QUEUE_PROGRESS"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpureFunction1"] */ .eq3(69, _c0, (ctx.uploader == null ? null : ctx.uploader.progress) + "%"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", ctx.uploader == null ? null : ctx.uploader.progress, "% ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(47, 45, "MENU.IMPORT_EXPORT.NAME"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(50, 47, "MENU.IMPORT_EXPORT.SIZE"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(53, 49, "MENU.IMPORT_EXPORT.PROGRESS"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(56, 51, "MENU.IMPORT_EXPORT.STATUS"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx.uploader.queue);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(63, 53, "MENU.IMPORT_EXPORT.IMPORT_HISTORY"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(66, 55, "MENU.IMPORT_EXPORT.IMPORT_HISTORY_MESSAGE"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("nbSpinner", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(71, 57, "MENU.IMPORT_EXPORT.NAME"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(74, 59, "MENU.IMPORT_EXPORT.SIZE"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(77, 61, "MENU.IMPORT_EXPORT.IMPORT_DATE_TIME"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(80, 63, "MENU.IMPORT_EXPORT.STATUS"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(83, 65, "MENU.IMPORT_EXPORT.ACTIONS"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(86, 67, ctx.history$));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_16__/* .NgClass */ .YU, _angular_common__WEBPACK_IMPORTED_MODULE_16__/* .NgForOf */ .Sq, _angular_common__WEBPACK_IMPORTED_MODULE_16__/* .NgIf */ .bT, _angular_common__WEBPACK_IMPORTED_MODULE_16__/* .NgStyle */ .B3, ng2_file_upload__WEBPACK_IMPORTED_MODULE_8__/* .FileDropDirective */ .Ff, ng2_file_upload__WEBPACK_IMPORTED_MODULE_8__/* .FileSelectDirective */ .UJ, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbBadgeComponent */ .XyX, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbButtonComponent */ .YP2, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbCardComponent */ .SrT, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbCardBodyComponent */ .KH5, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbCardHeaderComponent */ .zJv, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbIconComponent */ .tHu, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbRadioComponent */ .XIt, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbRadioGroupComponent */ .yZH, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbSpinnerDirective */ .zwc, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbTooltipDirective */ .BmQ, ngx_permissions__WEBPACK_IMPORTED_MODULE_17__/* .NgxPermissionsDirective */ .f6, _packages_ui_core_shared_src_lib_components_back_navigation_back_navigation_component__WEBPACK_IMPORTED_MODULE_18__/* .BackNavigationComponent */ .r, _packages_ui_core_shared_src_lib_gauzy_button_action_gauzy_button_action_component__WEBPACK_IMPORTED_MODULE_19__/* .GauzyButtonActionComponent */ .A, _angular_common__WEBPACK_IMPORTED_MODULE_16__/* .AsyncPipe */ .Jj, _angular_common__WEBPACK_IMPORTED_MODULE_16__/* .TitleCasePipe */ .PV, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__/* .TranslatePipe */ .D9, _packages_ui_core_shared_src_lib_pipes_datetime_format_pipe__WEBPACK_IMPORTED_MODULE_20__/* .DateTimeFormatPipe */ .V, _packages_ui_core_shared_src_lib_pipes_file_size_pipe__WEBPACK_IMPORTED_MODULE_21__/* .FileSizePipe */ .s],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.action[_ngcontent-%COMP%] {\n  box-shadow: var(--gauzy-shadow);\n  border: none;\n}\n.action[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}\n.action.info[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: var(--color-info-default);\n  color: white;\n  border-color: var(--color-info-default);\n}\n.action.info-text-1[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  color: var(--color-info-default);\n}\n.action.secondary[_ngcontent-%COMP%] {\n  color: #7e7e8f;\n}\n.action.success[_ngcontent-%COMP%] {\n  color: var(--color-success-default);\n}\n.action.warning[_ngcontent-%COMP%] {\n  color: rgb(245, 109, 88);\n}\n.action.orange[_ngcontent-%COMP%] {\n  color: rgb(255, 171, 45);\n}\n.action.primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n}\n.action.primary.soft[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: rgba(110, 73, 232, 0.1);\n}\n.action.select-nb[_ngcontent-%COMP%]     {\n  box-shadow: none;\n}\n.action.select-nb[_ngcontent-%COMP%]     .select-button {\n  box-shadow: var(--gauzy-shadow);\n  background: rgb(245, 245, 245);\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n.actions[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-2);\n  border-radius: var(--button-rectangle-border-radius);\n  padding: 2px 4px !important;\n}\n\n.gauzy-button-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n.card-custom-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n[_nghost-%COMP%]     input {\n  border-radius: var(--border-radius);\n  box-shadow: var(--gauzy-shadow) inset;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   .header-title-with-back[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 50px;\n}\n[dir=rtl]   [_nghost-%COMP%]   .header-title-with-back[_ngcontent-%COMP%] {\n  gap: 24px;\n}\n[dir=rtl]   [_nghost-%COMP%]     ngx-back-navigation button {\n  margin-right: 0px !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%], \n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n}\n[_nghost-%COMP%]   nb-card.card-body[_ngcontent-%COMP%], \n[_nghost-%COMP%]   nb-card-body.card-body[_ngcontent-%COMP%] {\n  height: calc(100vh - 21rem);\n  overflow: auto;\n  padding: 1rem;\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  border-radius: 0 0 var(--border-radius) var(--border-radius);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  margin-bottom: 0.625rem;\n}\n[_nghost-%COMP%]   nb-checkbox[_ngcontent-%COMP%]     span.checked + span.text {\n  color: var(--text-primary-color);\n}\n[_nghost-%COMP%]   nb-checkbox[_ngcontent-%COMP%]     span.text {\n  font-size: 11px;\n  font-weight: 400;\n  line-height: 13px;\n  letter-spacing: 0em;\n  text-align: left;\n  color: var(--gauzy-text-color-2);\n}\n\n[_nghost-%COMP%]     .download {\n  padding: 0.5rem;\n  background-color: var(--gauzy-card-2);\n  border-radius: var(--button-rectangle-border-radius);\n}\n[dir=ltr]   [_nghost-%COMP%]     .download {\n  float: right;\n}\n[dir=rtl]   [_nghost-%COMP%]     .download {\n  float: left;\n}\n[_nghost-%COMP%]     .download .action {\n  box-shadow: var(--gauzy-shadow) 0, 0, 0, 0.15;\n}\n\n.info-text[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 50px;\n}\n\n.title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 600;\n  line-height: 30px;\n  letter-spacing: 0em;\n  text-align: left;\n  color: var(--gauzy-text-color-1);\n  white-space: nowrap;\n}\n\n.message[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 17px;\n  letter-spacing: 0em;\n  text-align: left;\n  color: var(--gauzy-text-color-2);\n}\n\n.well[_ngcontent-%COMP%] {\n  height: 180px;\n  width: 180px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--gauzy-text-color-2);\n}\n\n.my-drop-zone[_ngcontent-%COMP%] {\n  border: dashed 3px var(--gauzy-border-default-color);\n  border-radius: var(--border-radius);\n}\n\n.nv-file-over[_ngcontent-%COMP%] {\n  border: dashed 3px red;\n  border-radius: var(--border-radius);\n}\n\n\n\n.another-file-over-class[_ngcontent-%COMP%] {\n  border: dashed 3px green;\n  border-radius: var(--border-radius);\n}\n\n.import-data[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n}\n\n.import-zone[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.table-zone[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.table-zone[_ngcontent-%COMP%]   .queue-progress[_ngcontent-%COMP%] {\n  margin: 2rem 0;\n  width: 80%;\n}\n.table-zone[_ngcontent-%COMP%]   .queue-progress[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%], \n.table-zone[_ngcontent-%COMP%]   .queue-progress[_ngcontent-%COMP%]   .progress-percent[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 17px;\n  letter-spacing: 0em;\n  text-align: left;\n}\n.table-zone[_ngcontent-%COMP%]   .queue-progress[_ngcontent-%COMP%]   .progress-percent[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n}\n.table-zone[_ngcontent-%COMP%]   .queue-progress[_ngcontent-%COMP%]   .progress[_ngcontent-%COMP%] {\n  height: 1.25rem;\n}\n.table-zone[_ngcontent-%COMP%]   .progress[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n  border-radius: var(--button-rectangle-border-radius);\n}\n.table-zone[_ngcontent-%COMP%]   .progress[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%] {\n  background-color: var(--background-primary-color-1);\n  border-radius: var(--button-rectangle-border-radius);\n}\n\n.button-import[_ngcontent-%COMP%] {\n  height: 24px;\n  border-width: 2px;\n  border-color: var(--color-primary-transparent-default) !important;\n}\n\n.btn-text[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 16px;\n  letter-spacing: -0.009em;\n  text-align: left;\n}\n\n[_nghost-%COMP%]     nb-radio span.text {\n  color: var(--gauzy-text-color-2);\n  font-size: 11px;\n  font-weight: 400;\n  line-height: 13px;\n  letter-spacing: 0em;\n  text-align: left;\n}\n[_nghost-%COMP%]     ngx-gauzy-button-action .actions-container {\n  padding: 0 !important;\n}\n\n.custom-header[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 15px;\n  letter-spacing: 0em;\n  text-align: left;\n  color: var(--gauzy-text-color-2);\n  background: var(--gauzy-card-3);\n  border-radius: var(--border-radius);\n  padding: 3px;\n  height: 42px;\n  padding-left: 6px;\n}\n\n.uploader-zone[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 19px;\n  letter-spacing: 0em;\n  text-align: left;\n}\n\n.custom-body[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-4);\n  border-radius: var(--border-radius);\n  margin-top: 6px;\n  padding-left: 6px;\n  overflow: auto;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 17px;\n  letter-spacing: 0em;\n  text-align: left;\n}\n.custom-body.history[_ngcontent-%COMP%] {\n  max-height: calc(100vh - 45rem);\n}\n.custom-body[_ngcontent-%COMP%]   .border-bottom[_ngcontent-%COMP%] {\n  border-bottom: 1px solid rgba(126, 126, 143, 0.1) !important;\n}\n.custom-body[_ngcontent-%COMP%]   [nbButton].appearance-outline.status-primary[_ngcontent-%COMP%] {\n  border: none;\n}\n.custom-body[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%], \n.custom-body[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.custom-body[_ngcontent-%COMP%]   .selected[_ngcontent-%COMP%] {\n  background-color: rgba(126, 126, 143, 0.1);\n  box-shadow: -6px 0 0 0 rgba(0, 0, 0, 0.15);\n  border-radius: 8px 0 0 8px;\n}\n.custom-body[_ngcontent-%COMP%]   .selected.border-bottom[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n\nnb-badge[_ngcontent-%COMP%] {\n  position: relative;\n  border-radius: 4px;\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 15px;\n  letter-spacing: 0em;\n  text-align: left;\n  padding: 4px 8px;\n}"]
    });
  }
};
ImportComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_22__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__/* .UntilDestroy */ .d)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_22__/* .__metadata */ .Sn)("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_12__/* .ActivatedRoute */ .nX, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbToastrService */ .bxm, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_13__/* .Store */ .il, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__/* .TranslateService */ .c$, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_15__/* .ImportService */ .X, _angular_core__WEBPACK_IMPORTED_MODULE_1__/* .ChangeDetectorRef */ .gRc])], ImportComponent);


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

/***/ 49588:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   X: () => (/* binding */ ImportService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88326);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39855);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64913);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26860);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45715);






let ImportService = /*#__PURE__*/(() => {
  class ImportService {
    constructor(http) {
      this.http = http;
      this._history$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__/* .BehaviorSubject */ .t([]);
      this.history$ = this._history$.asObservable();
    }
    /**
     * Fetches import history from the server and updates the history observable.
     * @returns Observable of IPagination<IImportHistory>
     */
    getHistory() {
      return this.http.get(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/import/history`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .tap */ .M)(({
        items
      }) => this._history$.next(items)));
    }
    static {
      this.ɵfac = function ImportService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || ImportService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵinject"] */ .KVO(_angular_common_http__WEBPACK_IMPORTED_MODULE_4__/* .HttpClient */ .Qq));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdefineInjectable"] */ .jDH({
        token: ImportService,
        factory: ImportService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return ImportService;
})();

/***/ }),

/***/ 60176:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: () => (/* binding */ GauzyButtonActionModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14572);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56383);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19223);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(87466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);






let GauzyButtonActionModule = /*#__PURE__*/(() => {
  class GauzyButtonActionModule {
    static {
      this.ɵfac = function GauzyButtonActionModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || GauzyButtonActionModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .$C({
        type: GauzyButtonActionModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .CommonModule */ .MD, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbButtonModule */ .P5N, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbIconModule */ .clu, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__/* .TranslateModule */ .h.forChild(), _components_components_module__WEBPACK_IMPORTED_MODULE_4__/* .ComponentsModule */ .h]
      });
    }
  }
  return GauzyButtonActionModule;
})();

/***/ })

}]);