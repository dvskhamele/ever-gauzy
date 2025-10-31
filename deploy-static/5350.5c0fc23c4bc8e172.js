"use strict";
(self["webpackChunkgauzy"] = self["webpackChunkgauzy"] || []).push([[5350],{

/***/ 1879:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ ViewScreenshotsModalModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14572);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56383);
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(79475);
/* harmony import */ var ngx_moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(79415);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(19223);
/* harmony import */ var _dialogs_dialogs_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(18180);
/* harmony import */ var _table_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(57832);
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(38834);
/* harmony import */ var _gallery_gallery_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(81963);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);













let ViewScreenshotsModalModule = /*#__PURE__*/(() => {
  class ViewScreenshotsModalModule {
    static {
      this.ɵfac = function ViewScreenshotsModalModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || ViewScreenshotsModalModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .$C({
        type: ViewScreenshotsModalModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .CommonModule */ .MD, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbAlertModule */ .dQU, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbButtonModule */ .P5N, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbCardModule */ .lVF, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbDialogModule */ .nZv.forChild(), _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbIconModule */ .clu, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbProgressBarModule */ .XYW, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbTooltipModule */ .IB0, ngx_moment__WEBPACK_IMPORTED_MODULE_3__/* .MomentModule */ .Js, _shared_module__WEBPACK_IMPORTED_MODULE_4__/* .SharedModule */ .G, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbBadgeModule */ .iEK, ngx_permissions__WEBPACK_IMPORTED_MODULE_5__/* .NgxPermissionsModule */ .Ov.forChild(), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__/* .TranslateModule */ .h.forChild(), _dialogs_dialogs_module__WEBPACK_IMPORTED_MODULE_7__/* .DialogsModule */ .s, _gallery_gallery_module__WEBPACK_IMPORTED_MODULE_8__/* .GalleryModule */ .l, _table_components__WEBPACK_IMPORTED_MODULE_9__/* .TableComponentsModule */ .p]
      });
    }
  }
  return ViewScreenshotsModalModule;
})();

/***/ }),

/***/ 40887:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ GalleryDirective)
/* harmony export */ });
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86014);
/* harmony import */ var _gallery_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94373);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26860);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56383);
/* harmony import */ var _gallery_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10569);








let GalleryDirective = /*#__PURE__*/(() => {
  class GalleryDirective {
    // Input with Setter
    set disabled(value) {
      this.disableClick = value || false;
      if (this.disableClick) {
        this.el.nativeElement.classList.add('disabled');
      } else {
        this.el.nativeElement.classList.remove('disabled');
      }
    }
    constructor(el, nbDialogService, galleryService) {
      this.el = el;
      this.nbDialogService = nbDialogService;
      this.galleryService = galleryService;
      this.disableClick = false;
      // Inputs
      this.items = [];
    }
    /**
     * Host listener for click events
     */
    onClick() {
      // Check if clicking is disabled
      if (this.disableClick) {
        return;
      }
      // Deep copy the 'item' property
      let item = JSON.parse(JSON.stringify(this.item));
      // Extract the first item from the sorted array
      item = item instanceof Array ? item[0] : item;
      // Open a dialog (possibly a gallery) using NbDialogService
      this.nbDialogService.open(_gallery_component__WEBPACK_IMPORTED_MODULE_1__/* .GalleryComponent */ .A, {
        context: {
          item,
          employeeId: this.employeeId
        },
        dialogClass: 'fullscreen'
      });
    }
    ngOnInit() {
      // Check if 'item' is an array; if not, convert it to a single-element array
      const items = this.items instanceof Array ? this.items : [this.items];
      // Sort the 'item' array by 'createdAt'
      this.items = (0,underscore__WEBPACK_IMPORTED_MODULE_0__/* .sortBy */ .Ul)(items, 'recordedAt');
      // Append the sorted 'item' array to the gallery service
      this.galleryService.appendItems(this.items);
    }
    ngOnDestroy() {}
    static {
      this.ɵfac = function GalleryDirective_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || GalleryDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* .ElementRef */ .aKT), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .rXU(_nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbDialogService */ .S0W), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .rXU(_gallery_service__WEBPACK_IMPORTED_MODULE_4__/* .GalleryService */ .A));
      };
    }
    static {
      this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineDirective"] */ .FsC({
        type: GalleryDirective,
        selectors: [["", "ngxGallery", ""]],
        hostBindings: function GalleryDirective_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .bIt("click", function GalleryDirective_click_HostBindingHandler() {
              return ctx.onClick();
            });
          }
        },
        inputs: {
          items: "items",
          item: "item",
          employeeId: "employeeId",
          disabled: "disabled"
        },
        standalone: false
      });
    }
  }
  return GalleryDirective;
})();

/***/ }),

/***/ 47928:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: () => (/* binding */ ViewScreenshotsModalComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(73014);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(55598);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(56383);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(52738);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(39855);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(41598);
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86014);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(17785);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26024);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18470);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(71924);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(77020);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(15480);
/* harmony import */ var _view_time_log_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(71458);
/* harmony import */ var _gauzy_filters_timezone_filter__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(6195);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26860);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(14572);
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(79475);
/* harmony import */ var _components_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(32386);
/* harmony import */ var _directives_img_directive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(71466);
/* harmony import */ var _dialogs_directive_confirm_directive__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(34268);
/* harmony import */ var _table_components_contact_links_contact_links_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(55129);
/* harmony import */ var _table_components_project_project_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(27985);
/* harmony import */ var ngx_moment__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(79415);
/* harmony import */ var _pipes_date_format_pipe__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(11031);
/* harmony import */ var _pipes_duration_format_pipe__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(33867);
/* harmony import */ var _pipes_replace_pipe__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(25963);
/* harmony import */ var _pipes_time_format_pipe__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(47610);
/* harmony import */ var _pipes_utc_to_timezone_pipe__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(99843);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(19223);





























const _c0 = a0 => ({
  "danger-bordered": a0
});
const _c1 = a0 => [a0];
const _c2 = a0 => ({
  name: a0
});
function ViewScreenshotsModalComponent_ng_container_4_ng_template_23_div_4_button_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(1, "nb-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const image_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("nbTooltip", image_r2 == null ? null : image_r2.description);
  }
}
function ViewScreenshotsModalComponent_ng_container_4_ng_template_23_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "div", 10)(1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(2, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(3, ViewScreenshotsModalComponent_ng_container_4_ng_template_23_div_4_button_3_Template, 2, 1, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(4, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("click", function ViewScreenshotsModalComponent_ng_container_4_ng_template_23_div_4_Template_button_click_4_listener() {
      const image_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG(3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx_r2.deleteImage(image_r2, image_r2 == null ? null : image_r2.employee));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(5, "nb-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(6, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(8, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(9, "utcToTimezone");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(10, "dateFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(11, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(12, "utcToTimezone");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(13, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(14, "timeFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()();
  }
  if (rf & 2) {
    const image_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpureFunction1"] */ .eq3(22, _c0, (image_r2 == null ? null : image_r2.isWorkRelated) === false));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("src", image_r2 == null ? null : image_r2.thumbUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵsanitizeUrl"] */ .B4B);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngIf", image_r2 == null ? null : image_r2.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate2"] */ .Lme(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(10, 10, _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind2"] */ .i5U(9, 7, image_r2 == null ? null : image_r2.recordedAt, _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(8, 5, ctx_r2.timeZone$))), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind2"] */ .i5U(14, 19, _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind2"] */ .i5U(12, 14, image_r2 == null ? null : image_r2.recordedAt, _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(11, 12, ctx_r2.timeZone$)), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(13, 17, ctx_r2.timeFormat$)), " ");
  }
}
function ViewScreenshotsModalComponent_ng_container_4_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(4, ViewScreenshotsModalComponent_ng_container_4_ng_template_23_div_4_Template, 15, 24, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(2, 2, "TIMESHEET.SCREENSHOTS.SCREENSHOTS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx_r2.screenshots);
  }
}
function ViewScreenshotsModalComponent_ng_container_4_ng_container_24_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const app_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .JRh(app_r4);
  }
}
function ViewScreenshotsModalComponent_ng_container_4_ng_container_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(1, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(4, "div", 19)(5, "div", 20)(6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(7, ViewScreenshotsModalComponent_ng_container_4_ng_container_24_span_7_Template, 2, 1, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(3, 2, "TIMESHEET.APPS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx_r2.apps);
  }
}
function ViewScreenshotsModalComponent_ng_container_4_ng_container_28_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "div", 42)(1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(2, "ngx-avatar", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(4, "utcToTimezone");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(6, "timeFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(7, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(8, "utcToTimezone");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(9, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(10, "timeFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(12, "durationFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(13, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(14, "nb-badge", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const timeLog_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("id", ctx_r2.timeSlot == null ? null : ctx_r2.timeSlot.employee == null ? null : ctx_r2.timeSlot.employee.id)("employee", ctx_r2.timeSlot == null ? null : ctx_r2.timeSlot.employee)("name", ctx_r2.timeSlot == null ? null : ctx_r2.timeSlot.employee == null ? null : ctx_r2.timeSlot.employee.user == null ? null : ctx_r2.timeSlot.employee.user.name)("src", ctx_r2.timeSlot == null ? null : ctx_r2.timeSlot.employee == null ? null : ctx_r2.timeSlot.employee.user == null ? null : ctx_r2.timeSlot.employee.user.imageUrl)("caption", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind3"] */ .brH(6, 14, _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind2"] */ .i5U(4, 9, timeLog_r6 == null ? null : timeLog_r6.startedAt, _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(3, 7, ctx_r2.timeZone$)), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(5, 12, ctx_r2.timeFormat$), true) + " - " + (!(timeLog_r6 == null ? null : timeLog_r6.isRunning) ? _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind3"] */ .brH(10, 25, _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind2"] */ .i5U(8, 20, timeLog_r6 == null ? null : timeLog_r6.stoppedAt, _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(7, 18, ctx_r2.timeZone$)), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(9, 23, ctx_r2.timeFormat$), true) : _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(11, 29, "TIMESHEET.TILL_NOW")) + " (" + _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(12, 31, timeLog_r6 == null ? null : timeLog_r6.duration) + ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("status", ctx_r2.TimeLogsLabel[timeLog_r6 == null ? null : timeLog_r6.logType].status)("text", ctx_r2.TimeLogsLabel[timeLog_r6 == null ? null : timeLog_r6.logType].text);
  }
}
function ViewScreenshotsModalComponent_ng_container_4_ng_container_28_div_1_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(1, "nb-badge", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const timeLog_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("text", timeLog_r6 == null ? null : timeLog_r6.version);
  }
}
function ViewScreenshotsModalComponent_ng_container_4_ng_container_28_div_1_ngx_project_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(0, "ngx-project", 46);
  }
  if (rf & 2) {
    const timeLog_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("rowData", timeLog_r6);
  }
}
function ViewScreenshotsModalComponent_ng_container_4_ng_container_28_div_1_div_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "div", 28)(1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const timeLog_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI("", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(3, 2, "TIMESHEET.NOTES"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", timeLog_r6 == null ? null : timeLog_r6.description, " ");
  }
}
function ViewScreenshotsModalComponent_ng_container_4_ng_container_28_div_1_div_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "div", 28)(1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const timeLog_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI("", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(3, 2, "TIMESHEET.REASON"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", timeLog_r6 == null ? null : timeLog_r6.reason, " ");
  }
}
function ViewScreenshotsModalComponent_ng_container_4_ng_container_28_div_1_ng_container_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(1, "nb-alert", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("size", "tiny");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(3, 2, "TIMESHEET.RUNNING_TIMER_WARNING"), " ");
  }
}
function ViewScreenshotsModalComponent_ng_container_4_ng_container_28_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(1, ViewScreenshotsModalComponent_ng_container_4_ng_container_28_div_1_div_1_Template, 15, 33, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(2, "div", 26)(3, "div", 27)(4, "div", 28)(5, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(8, "div", 30)(9, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(10, "nb-badge", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(11, "replace");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(12, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(13, ViewScreenshotsModalComponent_ng_container_4_ng_container_28_div_1_div_13_Template, 2, 1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(14, "div", 28)(15, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(18, "ngx-contact-links", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(20, "div", 28)(21, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(23, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(25, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(26, ViewScreenshotsModalComponent_ng_container_4_ng_container_28_div_1_ngx_project_26_Template, 1, 1, "ngx-project", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(27, "div", 28)(28, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(30, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(31, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(33, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(34, ViewScreenshotsModalComponent_ng_container_4_ng_container_28_div_1_div_34_Template, 6, 4, "div", 35)(35, ViewScreenshotsModalComponent_ng_container_4_ng_container_28_div_1_div_35_Template, 6, 4, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(36, "div", 36)(37, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("click", function ViewScreenshotsModalComponent_ng_container_4_ng_container_28_div_1_Template_button_click_37_listener() {
      const timeLog_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r5).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG(3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx_r2.viewTimeLog(timeLog_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(38, "nb-icon", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(40, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(41, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(42, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("click", function ViewScreenshotsModalComponent_ng_container_4_ng_container_28_div_1_Template_button_click_41_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj($event.stopPropagation());
    })("confirm", function ViewScreenshotsModalComponent_ng_container_4_ng_container_28_div_1_Template_button_confirm_41_listener() {
      const timeLog_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r5).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG(3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx_r2.deleteTimeLog(timeLog_r6, ctx_r2.timeSlot == null ? null : ctx_r2.timeSlot.employee));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(43, "nb-icon", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(44, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(45, ViewScreenshotsModalComponent_ng_container_4_ng_container_28_div_1_ng_container_45_Template, 4, 4, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const timeLog_r6 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngxPermissionsOnly", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpureFunction1"] */ .eq3(41, _c1, ctx_r2.PermissionsEnum.CHANGE_SELECTED_EMPLOYEE));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI("", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(7, 17, "TIMESHEET.SOURCE"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("text", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(12, 23, _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind3"] */ .brH(11, 19, timeLog_r6 == null ? null : timeLog_r6.source, "_", " ")));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngIf", timeLog_r6 == null ? null : timeLog_r6.version);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI("", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(17, 25, "TIMESHEET.ORGANIZATION_CONTACT"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("value", (timeLog_r6 == null ? null : timeLog_r6.organizationContact) ? timeLog_r6 == null ? null : timeLog_r6.organizationContact : _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpureFunction1"] */ .eq3(43, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(19, 27, "TIMESHEET.NO_ORGANIZATION_CONTACT")));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI("", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(23, 29, "TIMESHEET.PROJECT"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", (timeLog_r6 == null ? null : timeLog_r6.project) ? "" : _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(25, 31, "TIMESHEET.NO_PROJECT"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngIf", timeLog_r6 == null ? null : timeLog_r6.project);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI("", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(30, 33, "TIMESHEET.TODO"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", (timeLog_r6 == null ? null : timeLog_r6.task) ? timeLog_r6 == null ? null : timeLog_r6.task == null ? null : timeLog_r6.task.title : _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(33, 35, "TIMESHEET.NO_TODO"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngIf", timeLog_r6 == null ? null : timeLog_r6.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngIf", timeLog_r6 == null ? null : timeLog_r6.reason);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(40, 37, "TIMESHEET.VIEW"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("message", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(42, 39, "TIMESHEET.DELETE_CONFIRM"))("disabled", timeLog_r6.isRunning);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngIf", timeLog_r6 == null ? null : timeLog_r6.isRunning);
  }
}
function ViewScreenshotsModalComponent_ng_container_4_ng_container_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(1, ViewScreenshotsModalComponent_ng_container_4_ng_container_28_div_1_Template, 46, 45, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx_r2.timeLogs);
  }
}
function ViewScreenshotsModalComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(1, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(4, "utcToTimezone");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(5, "dateFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(6, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(7, "utcToTimezone");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(8, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(9, "timeFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(10, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(11, "utcToTimezone");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(12, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(13, "timeFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(14, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(15, "nb-progress-bar", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(16, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(19, "amFromUnix");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(20, "amFromUtc");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(21, "amDateFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(22, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(23, ViewScreenshotsModalComponent_ng_container_4_ng_template_23_Template, 5, 4, "ng-template", 7)(24, ViewScreenshotsModalComponent_ng_container_4_ng_container_24_Template, 8, 4, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(25, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(27, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(28, ViewScreenshotsModalComponent_ng_container_4_ng_container_28_Template, 2, 1, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate3"] */ .E5c(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(5, 19, _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind2"] */ .i5U(4, 16, ctx_r2.timeSlot == null ? null : ctx_r2.timeSlot.startedAt, _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(3, 14, ctx_r2.timeZone$))), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind2"] */ .i5U(9, 28, _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind2"] */ .i5U(7, 23, ctx_r2.timeSlot == null ? null : ctx_r2.timeSlot.startedAt, _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(6, 21, ctx_r2.timeZone$)), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(8, 26, ctx_r2.timeFormat$)), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind2"] */ .i5U(13, 38, _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind2"] */ .i5U(11, 33, ctx_r2.timeSlot == null ? null : ctx_r2.timeSlot.stoppedAt, _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(10, 31, ctx_r2.timeZone$)), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(12, 36, ctx_r2.timeFormat$)), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("value", ctx_r2.timeSlot == null ? null : ctx_r2.timeSlot.percentage)("status", ctx_r2.progressStatus(ctx_r2.timeSlot == null ? null : ctx_r2.timeSlot.percentage))("displayValue", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate4"] */ .LHq(" ", (ctx_r2.timeSlot == null ? null : ctx_r2.timeSlot.percentage) || 0, "% ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(18, 41, "TIMESHEET.SCREENSHOTS.OF"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind2"] */ .i5U(21, 47, _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(20, 45, _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(19, 43, ctx_r2.timeSlot == null ? null : ctx_r2.timeSlot.duration)), "mm"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(22, 50, "ACTIVITY.MINUTES"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r2.screenshots.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngIf", (ctx_r2.apps == null ? null : ctx_r2.apps.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(27, 52, "TIMESHEET.SCREENSHOTS.TIME_LOG"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngIf", (ctx_r2.timeLogs == null ? null : ctx_r2.timeLogs.length) > 0);
  }
}
let ViewScreenshotsModalComponent = /*#__PURE__*/(() => {
  let ViewScreenshotsModalComponent = class ViewScreenshotsModalComponent {
    get timeSlot() {
      return this._timeSlot;
    }
    /**
     * Setter for the timeSlot property. Assigns the provided timeSlot value, processes
     * and formats the screenshots, and updates the local _timeSlot property accordingly.
     *
     * @param timeSlot - The TimeSlot object to be assigned.
     */
    set timeSlot(timeSlot) {
      if (timeSlot) {
        const screenshots = JSON.parse(JSON.stringify(timeSlot.screenshots));
        // Process and format the screenshots array
        this.screenshots = (0,underscore__WEBPACK_IMPORTED_MODULE_0__/* .sortBy */ .Ul)(screenshots, 'recordedAt').map(screenshot => ({
          employee: timeSlot.employee,
          ...screenshot
        }));
        // Update the _timeSlot object with formatted timestamps and other properties
        this._timeSlot = timeSlot;
      }
    }
    get screenshots() {
      return this._screenshots;
    }
    set screenshots(screenshots) {
      this._screenshots = screenshots;
    }
    get timeLogs() {
      return this._timeLogs;
    }
    set timeLogs(timeLogs) {
      this._timeLogs = (0,underscore__WEBPACK_IMPORTED_MODULE_0__/* .sortBy */ .Ul)(timeLogs, 'recordedAt');
    }
    constructor(_store, _dialogRef, _timesheetService, _nbDialogService, _toastrService, _timeZoneService) {
      this._store = _store;
      this._dialogRef = _dialogRef;
      this._timesheetService = _timesheetService;
      this._nbDialogService = _nbDialogService;
      this._toastrService = _toastrService;
      this._timeZoneService = _timeZoneService;
      this.progressStatus = _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_2__/* .progressStatus */ .Ux;
      this.TimeLogsLabel = _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_3__/* .TimeLogsLabel */ .F;
      this.PermissionsEnum = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_4__/* .PermissionsEnum */ .U;
      /*
       * Getter & Setter for Screenshots
       */
      this._screenshots = [];
      /*
       * Getter & Setter for Screenshots
       */
      this._timeLogs = [];
      /**
       * Array to store unique application names associated with the current time slot.
       * Used in the context of time logs and screenshots.
       */
      this.apps = [];
      this.timeZone$ = this._timeZoneService.timeZone$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .filter */ .p)(timeZone => !!timeZone));
      this.timeFormat$ = this._timeZoneService.timeFormat$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .filter */ .p)(timeFormat => !!timeFormat));
    }
    ngOnInit() {
      // Subscribe to the timeZone$ observable
      this._store.selectedOrganization$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .filter */ .p)(organization => !!organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .M)(organization => this.organization = organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .M)(() => this.getTimeSlot()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__/* .untilDestroyed */ .s)(this)).subscribe();
    }
    /**
     * Asynchronously retrieves and sets the time slot and associated time logs.
     *
     * @returns A Promise that resolves when the operation is complete.
     */
    getTimeSlot() {
      var _this = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A)(function* () {
        try {
          // Check if organization and time slot are available
          if (!_this.organization || !_this.timeSlot) {
            return;
          }
          // Retrieve time slot with specified relations
          _this.timeSlot = yield _this._timesheetService.getTimeSlot(_this.timeSlot.id, {
            relations: ['employee.user', 'screenshots', 'timeLogs.project', 'timeLogs.task', 'timeLogs.organizationContact', 'timeLogs.employee.user']
          });
          // Set the time logs property to the time logs of the retrieved time slot
          _this.timeLogs = _this.timeSlot.timeLogs;
          // Retrieve and set unique apps from the screenshots of the time slot
          _this.apps = _this.getScreenshotUniqueApps() || [];
        } catch (error) {
          // Handle errors by logging and displaying a toastr message
          console.error('Error while retrieving TimeSlot:', error);
          _this._toastrService.danger(error);
        }
      })();
    }
    /**
     * Closes the current dialog.
     */
    close() {
      this._dialogRef.close();
    }
    /**
     * Opens a modal to view details of a time log.
     *
     * @param timeLog - The time log to be viewed.
     */
    viewTimeLog(timeLog) {
      this._nbDialogService.open(_view_time_log_modal__WEBPACK_IMPORTED_MODULE_9__/* .ViewTimeLogModalComponent */ .x, {
        context: {
          timeLog
        }
      });
    }
    /**
     * Deletes a specific screenshot associated with an employee.
     *
     * @param screenshot - The screenshot to be deleted.
     * @param employee - The employee associated with the screenshot.
     * @returns void
     */
    deleteImage(screenshot, employee) {
      var _this2 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A)(function* () {
        if (!screenshot || !_this2.organization) {
          return;
        }
        try {
          const {
            name
          } = _this2.organization;
          const {
            organizationId,
            tenantId
          } = screenshot;
          // Delete the specified screenshot
          yield _this2._timesheetService.deleteScreenshot(screenshot.id, {
            organizationId,
            tenantId
          });
          // Remove the deleted screenshot from the local collection
          _this2.screenshots = _this2.screenshots.filter(item => item.id !== screenshot.id);
          // Display success message
          _this2._toastrService.success('TOASTR.MESSAGE.SCREENSHOT_DELETED', {
            name: employee.fullName,
            organization: name
          });
        } catch (error) {
          // Handle errors by logging and displaying a toastr message
          console.error('Error while deleting screenshot:', error);
          _this2._toastrService.danger(error);
        }
      })();
    }
    /**
     * Deletes a specific time log associated with an employee.
     *
     * @param timeLog - The time log to be deleted.
     * @param employee - The employee associated with the time log.
     * @returns void
     */
    deleteTimeLog(timeLog, employee) {
      var _this3 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A)(function* () {
        if (timeLog.isRunning) {
          return;
        }
        try {
          const {
            id: organizationId,
            name: organizationName
          } = _this3.organization;
          const request = {
            logIds: [timeLog.id],
            organizationId
          };
          // Delete the specified time log
          yield _this3._timesheetService.deleteLogs(request);
          // Display success message
          _this3._toastrService.success('TOASTR.MESSAGE.TIME_LOG_DELETED', {
            name: employee.fullName,
            organization: organizationName
          });
          // Close the dialog and emit an event indicating time log deletion
          _this3._dialogRef.close({
            timeLog: timeLog,
            isDelete: true
          });
        } catch (error) {
          // Handle errors by logging and displaying a toastr message
          console.error('Error while deleting TimeLog:', error);
          _this3._toastrService.danger(error);
        }
      })();
    }
    /**
     * Extracts unique applications from an array of screenshots,
     * handling the possibility of 'apps' being a string or an array.
     *
     * @returns An array containing unique application names.
     */
    getScreenshotUniqueApps() {
      // Use a Set to automatically handle uniqueness
      const uniqueAppsSet = new Set();
      if ((0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_2__/* .isNotEmpty */ .hj)(this.screenshots)) {
        // Iterate through each screenshot to collect unique apps
        this.screenshots.forEach(screenshot => {
          // Determine the format of 'apps' property and convert if needed
          const apps = screenshot.apps;
          const screenshotApps = Array.isArray(apps) ? apps : this.parseApps(apps);
          if ((0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_2__/* .isNotEmpty */ .hj)(screenshotApps)) {
            // Add each app to the Set to ensure uniqueness
            screenshotApps.forEach(app => {
              uniqueAppsSet.add(app);
            });
          }
        });
      }
      // Convert the Set back to an array for the final result
      return Array.from(uniqueAppsSet);
    }
    /**
     * Parses a string representation of applications as JSON,
     * returning the parsed array or an empty array if parsing fails.
     *
     * @param apps The string or array representation of applications.
     * @returns An array of application names.
     * @private
     */
    parseApps(apps) {
      if (typeof apps === 'string') {
        try {
          return JSON.parse(apps);
        } catch (error) {
          // Return an empty array if parsing fails
          return [];
        }
      }
      // If 'apps' is already an array, return it as is
      return apps;
    }
    static {
      this.ɵfac = function ViewScreenshotsModalComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || ViewScreenshotsModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_10__/* .Store */ .il), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbDialogRef */ .ybQ), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_12__/* .TimesheetService */ .k), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbDialogService */ .S0W), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_13__/* .ToastrService */ .t), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_filters_timezone_filter__WEBPACK_IMPORTED_MODULE_14__/* .TimeZoneService */ .F));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineComponent"] */ .VBU({
        type: ViewScreenshotsModalComponent,
        selectors: [["ngx-view-screenshots-modal"]],
        inputs: {
          timeSlot: "timeSlot",
          timeLogs: "timeLogs"
        },
        standalone: false,
        decls: 5,
        vars: 1,
        consts: [["size", "small", "nbButton", "", "ghost", "", "type", "button", 1, "close-button", 3, "click"], ["icon", "close-outline"], [1, "custom-scroll"], [4, "ngIf"], [1, "activity", "mb-3"], ["size", "tiny", 1, "mb-1", 3, "value", "status", "displayValue"], [1, "activity-count"], [3, "ngIf"], [1, "row", "mb-3", "justify-content-left"], ["class", "col-3 mb-2", 4, "ngFor", "ngForOf"], [1, "col-3", "mb-2"], [1, "screenshot", 3, "ngClass"], ["nb-card-image", "", "draggable", "false", 3, "src"], ["class", "ml-right info select-hidden", "status", "info", "nbButton", "", "size", "tiny", 3, "nbTooltip", 4, "ngIf"], ["status", "danger", "nbButton", "", "size", "tiny", 1, "ml-auto", "select-hidden", 3, "click"], ["icon", "trash-2-outline"], [1, "text-caption", "caption", "text-center", "mt-1"], ["status", "info", "nbButton", "", "size", "tiny", 1, "ml-right", "info", "select-hidden", 3, "nbTooltip"], ["icon", "info-outline"], [1, "row", "mb-3", "justify-content-start"], [1, "col-12"], ["class", "badge", 4, "ngFor", "ngForOf"], [1, "badge"], ["class", "mt-3 p-3 card", 4, "ngFor", "ngForOf"], [1, "mt-3", "p-3", "card"], ["class", "row", 4, "ngxPermissionsOnly"], [1, "mt-3", "row", "align-items-center"], [1, "col"], [1, "mb-2"], [1, "subtitle"], [1, "d-flex"], [1, "mr-1"], ["status", "primary", 1, "medium", 3, "text"], [3, "value"], [3, "rowData", 4, "ngIf"], ["class", "mb-2", 4, "ngIf"], [1, "col-auto"], ["nbButton", "", "status", "basic", "size", "small", 1, "action", "secondary", 3, "click"], ["icon", "eye-outline"], ["nbButton", "", "status", "basic", "size", "small", "ngxConfirmDialog", "", 1, "action", "danger", 3, "click", "confirm", "message", "disabled"], ["status", "danger", "icon", "trash-2-outline"], [1, "mt-3"], [1, "row"], [3, "id", "employee", "name", "src", "caption"], [3, "status", "text"], ["status", "info", 3, "text"], [3, "rowData"], ["status", "warning", 3, "size"]],
        template: function ViewScreenshotsModalComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "button", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("click", function ViewScreenshotsModalComponent_Template_button_click_0_listener() {
              return ctx.close();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(1, "nb-icon", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(2, "nb-card")(3, "nb-card-body", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(4, ViewScreenshotsModalComponent_ng_container_4_Template, 29, 54, "ng-container", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.timeSlot);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_15__/* .NgClass */ .YU, _angular_common__WEBPACK_IMPORTED_MODULE_15__/* .NgForOf */ .Sq, _angular_common__WEBPACK_IMPORTED_MODULE_15__/* .NgIf */ .bT, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbAlertComponent */ .EVe, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbButtonComponent */ .YP2, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbCardComponent */ .SrT, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbCardBodyComponent */ .KH5, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbIconComponent */ .tHu, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbProgressBarComponent */ .c0m, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbTooltipDirective */ .BmQ, ngx_permissions__WEBPACK_IMPORTED_MODULE_16__/* .NgxPermissionsDirective */ .f6, _components_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_17__/* .AvatarComponent */ .f, _directives_img_directive__WEBPACK_IMPORTED_MODULE_18__/* .ImgDirective */ .z, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbBadgeComponent */ .XyX, _dialogs_directive_confirm_directive__WEBPACK_IMPORTED_MODULE_19__/* .ConfirmDirective */ .o, _table_components_contact_links_contact_links_component__WEBPACK_IMPORTED_MODULE_20__/* .ContactLinksComponent */ .L, _table_components_project_project_component__WEBPACK_IMPORTED_MODULE_21__/* .ProjectComponent */ .t, _angular_common__WEBPACK_IMPORTED_MODULE_15__/* .AsyncPipe */ .Jj, _angular_common__WEBPACK_IMPORTED_MODULE_15__/* .TitleCasePipe */ .PV, ngx_moment__WEBPACK_IMPORTED_MODULE_22__/* .DateFormatPipe */ .az, ngx_moment__WEBPACK_IMPORTED_MODULE_22__/* .FromUnixPipe */ .Fn, ngx_moment__WEBPACK_IMPORTED_MODULE_22__/* .FromUtcPipe */ .f1, _pipes_date_format_pipe__WEBPACK_IMPORTED_MODULE_23__/* .DateFormatPipe */ .a, _pipes_duration_format_pipe__WEBPACK_IMPORTED_MODULE_24__/* .DurationFormatPipe */ .i, _pipes_replace_pipe__WEBPACK_IMPORTED_MODULE_25__/* .ReplacePipe */ .J, _pipes_time_format_pipe__WEBPACK_IMPORTED_MODULE_26__/* .TimeFormatPipe */ .z, _pipes_utc_to_timezone_pipe__WEBPACK_IMPORTED_MODULE_27__/* .UtcToTimezone */ .L, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_28__/* .TranslatePipe */ .D9],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.action[_ngcontent-%COMP%] {\n  box-shadow: var(--gauzy-shadow);\n  border: none;\n}\n.action[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}\n.action.info[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: var(--color-info-default);\n  color: white;\n  border-color: var(--color-info-default);\n}\n.action.info-text-1[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  color: var(--color-info-default);\n}\n.action.secondary[_ngcontent-%COMP%] {\n  color: #7e7e8f;\n}\n.action.success[_ngcontent-%COMP%] {\n  color: var(--color-success-default);\n}\n.action.warning[_ngcontent-%COMP%] {\n  color: rgb(245, 109, 88);\n}\n.action.orange[_ngcontent-%COMP%] {\n  color: rgb(255, 171, 45);\n}\n.action.primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n}\n.action.primary.soft[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: rgba(110, 73, 232, 0.1);\n}\n.action.select-nb[_ngcontent-%COMP%]     {\n  box-shadow: none;\n}\n.action.select-nb[_ngcontent-%COMP%]     .select-button {\n  box-shadow: var(--gauzy-shadow);\n  background: rgb(245, 245, 245);\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n.actions[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-2);\n  border-radius: var(--button-rectangle-border-radius);\n  padding: 2px 4px !important;\n}\n\n.gauzy-button-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n.card-custom-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n[_nghost-%COMP%]     input {\n  border-radius: var(--border-radius);\n  box-shadow: var(--gauzy-shadow) inset;\n}\n\n[_nghost-%COMP%] {\n  display: block;\n  position: relative;\n  width: 700px;\n  margin: auto;\n  overflow: auto;\n}\n[_nghost-%COMP%]   .close-button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 3px;\n  right: 5px;\n  z-index: 9;\n}\n[_nghost-%COMP%]   .screenshot[_ngcontent-%COMP%] {\n  position: relative;\n  width: 150px;\n  object-fit: cover;\n}\n[_nghost-%COMP%]   .screenshot[_ngcontent-%COMP%]   .select-hidden[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  right: 3px;\n  top: 3px;\n}\n[_nghost-%COMP%]   .screenshot[_ngcontent-%COMP%]:hover   .select-hidden[_ngcontent-%COMP%], [_nghost-%COMP%]   .screenshot[_ngcontent-%COMP%]:focus   .select-hidden[_ngcontent-%COMP%] {\n  display: flex;\n}\n[_nghost-%COMP%]   .screenshot[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  border-radius: var(--border-radius);\n}\n[_nghost-%COMP%]   .screenshot[_ngcontent-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n}\n[_nghost-%COMP%]   .screenshot[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  right: 36px;\n}\n[_nghost-%COMP%]     .progress-value span {\n  display: none;\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n  border-radius: var(--border-radius);\n  border: unset;\n}\n[_nghost-%COMP%]   .caption[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 400;\n  line-height: 11px;\n  letter-spacing: 0em;\n  color: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]   .badge[_ngcontent-%COMP%] {\n  color: var(--tag-filled-basic-text-color);\n  display: inline-block;\n  padding: 6px 4px;\n  background-color: var(--tag-filled-basic-background-color);\n  border-radius: 4px;\n  margin: 5px;\n}\n[_nghost-%COMP%]   nb-badge[_ngcontent-%COMP%] {\n  position: relative;\n  font-size: 14px;\n  font-weight: 600;\n  padding: 2px 4px;\n  border-radius: calc(var(--border-radius) / 2);\n}\n[_nghost-%COMP%]   nb-card-header[_ngcontent-%COMP%], \n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%], \n[_nghost-%COMP%]   nb-card-footer[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n[_nghost-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  text-align: left;\n  margin-bottom: 10px;\n  color: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]   .screenshot.danger-bordered[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border: 2px solid var(--color-danger-500) !important;\n}"]
      });
    }
  };
  ViewScreenshotsModalComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_29__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__/* .UntilDestroy */ .d)({
    checkProperties: true
  }), (0,tslib__WEBPACK_IMPORTED_MODULE_29__/* .__metadata */ .Sn)("design:paramtypes", [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_10__/* .Store */ .il, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbDialogRef */ .ybQ, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_12__/* .TimesheetService */ .k, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbDialogService */ .S0W, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_13__/* .ToastrService */ .t, _gauzy_filters_timezone_filter__WEBPACK_IMPORTED_MODULE_14__/* .TimeZoneService */ .F])], ViewScreenshotsModalComponent);
  return ViewScreenshotsModalComponent;
})();


/***/ }),

/***/ 55327:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   x: () => (/* binding */ ScreenshotsItemModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14572);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10936);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56383);
/* harmony import */ var ngx_moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(79415);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19223);
/* harmony import */ var _dialogs_dialogs_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(18180);
/* harmony import */ var _table_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(57832);
/* harmony import */ var _gallery_gallery_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(81963);
/* harmony import */ var _view_screenshots_modal_view_screenshots_modal_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1879);
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(38834);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);













let ScreenshotsItemModule = /*#__PURE__*/(() => {
  class ScreenshotsItemModule {
    static {
      this.ɵfac = function ScreenshotsItemModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || ScreenshotsItemModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .$C({
        type: ScreenshotsItemModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .CommonModule */ .MD, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .FormsModule */ .YN, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .ReactiveFormsModule */ .X1, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbButtonModule */ .P5N, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbCheckboxModule */ .Ad8, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbDialogModule */ .nZv.forChild(), _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbIconModule */ .clu, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbListModule */ .PD_, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbPopoverModule */ .Ofb, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbProgressBarModule */ .XYW, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbTooltipModule */ .IB0, ngx_moment__WEBPACK_IMPORTED_MODULE_4__/* .MomentModule */ .Js, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__/* .TranslateModule */ .h.forChild(), _shared_module__WEBPACK_IMPORTED_MODULE_6__/* .SharedModule */ .G, _dialogs_dialogs_module__WEBPACK_IMPORTED_MODULE_7__/* .DialogsModule */ .s, _gallery_gallery_module__WEBPACK_IMPORTED_MODULE_8__/* .GalleryModule */ .l, _table_components__WEBPACK_IMPORTED_MODULE_9__/* .TableComponentsModule */ .p, _view_screenshots_modal_view_screenshots_modal_module__WEBPACK_IMPORTED_MODULE_10__/* .ViewScreenshotsModalModule */ .a]
      });
    }
  }
  return ScreenshotsItemModule;
})();

/***/ }),

/***/ 81963:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   l: () => (/* binding */ GalleryModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14572);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19223);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56383);
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(38834);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);






let GalleryModule = /*#__PURE__*/(() => {
  class GalleryModule {
    static {
      this.ɵfac = function GalleryModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || GalleryModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .$C({
        type: GalleryModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .CommonModule */ .MD, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbButtonModule */ .P5N, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbDialogModule */ .nZv, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbIconModule */ .clu, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbTooltipModule */ .IB0, _shared_module__WEBPACK_IMPORTED_MODULE_3__/* .SharedModule */ .G, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__/* .TranslateModule */ .h.forChild()]
      });
    }
  }
  return GalleryModule;
})();

/***/ }),

/***/ 91439:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   z: () => (/* binding */ EmployeeLinksComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9620);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14572);
/* harmony import */ var _directives_img_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71466);





const _c0 = a0 => ({
  "link-text": a0
});
function EmployeeLinksComponent_ng_container_0_a_1_img_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(0, "img", 5);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("src", ctx_r1.value.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵsanitizeUrl"] */ .B4B);
  }
}
function EmployeeLinksComponent_ng_container_0_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function EmployeeLinksComponent_ng_container_0_a_1_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.navigateToEmployee());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, EmployeeLinksComponent_ng_container_0_a_1_img_1_Template, 1, 1, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction1"] */ .eq3(3, _c0, ctx_r1.isNavigation));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r1.value.imageUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", ctx_r1.value.name, " ");
  }
}
function EmployeeLinksComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, EmployeeLinksComponent_ng_container_0_a_1_Template, 4, 5, "a", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r1.value == null ? null : ctx_r1.value.name);
  }
}
let EmployeeLinksComponent = /*#__PURE__*/(() => {
  class EmployeeLinksComponent {
    constructor(_router) {
      this._router = _router;
      this.isNavigation = true;
    }
    /**
     * Navigates to the employee edit page if the necessary conditions are met.
     */
    navigateToEmployee() {
      // Check if either 'value' or 'isNavigation' is falsy
      if (!this.value || !this.isNavigation) {
        // If any condition is not met, return without navigating
        return;
      }
      // Navigate to the employee edit page with the ID from 'this.value.id'
      this._router.navigate([`/pages/employees/edit`, this.value.id]);
    }
    static {
      this.ɵfac = function EmployeeLinksComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || EmployeeLinksComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_router__WEBPACK_IMPORTED_MODULE_1__/* .Router */ .Ix));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: EmployeeLinksComponent,
        selectors: [["ngx-employee-links"]],
        inputs: {
          rowData: "rowData",
          value: "value",
          isNavigation: "isNavigation"
        },
        standalone: false,
        decls: 1,
        vars: 1,
        consts: [[4, "ngIf"], [3, "ngClass", "click", 4, "ngIf"], [3, "click", "ngClass"], ["width", "18px", "height", "18px", 3, "src", 4, "ngIf"], [1, "names-wrapper"], ["width", "18px", "height", "18px", 3, "src"]],
        template: function EmployeeLinksComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(0, EmployeeLinksComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.value);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__/* .NgClass */ .YU, _angular_common__WEBPACK_IMPORTED_MODULE_2__/* .NgIf */ .bT, _directives_img_directive__WEBPACK_IMPORTED_MODULE_3__/* .ImgDirective */ .z],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   a[_ngcontent-%COMP%] {\n  background-color: var(--color-primary-transparent-100);\n  border-radius: var(--button-rectangle-border-radius);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  width: fit-content;\n  color: var(--text-primary-color);\n}\n[dir=rtl]   [_nghost-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 5px 7px 5px 14px;\n}\n[dir=ltr]   [_nghost-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 5px 14px 5px 7px;\n}\n[_nghost-%COMP%]   a[_ngcontent-%COMP%]   .names-wrapper[_ngcontent-%COMP%] {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  max-width: 110px;\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 15px;\n  letter-spacing: 0em;\n}\n[_nghost-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: var(--button-rectangle-border-radius);\n}\n[dir=rtl]   [_nghost-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n[dir=ltr]   [_nghost-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n\n[_nghost-%COMP%] {\n  width: 100%;\n}", ".link-text[_ngcontent-%COMP%] {\n\t\t\t\tcursor: pointer;\n\t\t\t\ttext-decoration: none;\n\t\t\t}\n\t\t\t.link-text[_ngcontent-%COMP%]:hover {\n\t\t\t\ttext-decoration: underline;\n\t\t\t}"]
      });
    }
  }
  return EmployeeLinksComponent;
})();

/***/ }),

/***/ 93328:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ ScreenshotsItemComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(73014);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(55598);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26860);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(56383);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(52738);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(39855);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(53827);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(41598);
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86014);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(15788);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26024);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(64913);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(77020);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(15480);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(54263);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(71924);
/* harmony import */ var _view_screenshots_modal_view_screenshots_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(47928);
/* harmony import */ var _gallery_gallery_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(10569);
/* harmony import */ var _gauzy_filters_timezone_filter__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(6195);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(14572);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(10936);
/* harmony import */ var _directives_img_directive__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(71466);
/* harmony import */ var _dialogs_directive_confirm_directive__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(34268);
/* harmony import */ var _gallery_gallery_directive__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(40887);
/* harmony import */ var _table_components_employee_links_employee_links_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(91439);
/* harmony import */ var ngx_moment__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(79415);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(19223);
/* harmony import */ var _pipes_date_format_pipe__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(11031);
/* harmony import */ var _pipes_time_format_pipe__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(47610);
/* harmony import */ var _pipes_utc_to_timezone_pipe__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(99843);





























const _c0 = a0 => ({
  "danger-bordered": a0
});
const _c1 = a0 => ({
  "select-mode": a0
});
function ScreenshotsItemComponent_div_1_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(1, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(2, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(3, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG(2);
    const workedEmployeeTemplate_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵreference"] */ .sdS(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("nbPopover", workedEmployeeTemplate_r2)("nbPopoverTrigger", "hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("src", ctx_r0.lastScreenshot == null ? null : ctx_r0.lastScreenshot.thumbUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵsanitizeUrl"] */ .B4B);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", ctx_r0.employees.length, " ");
  }
}
function ScreenshotsItemComponent_div_1_ng_template_2_ng_container_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(1, "nb-checkbox", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtwoWayListener"] */ .mxI("ngModelChange", function ScreenshotsItemComponent_div_1_ng_template_2_ng_container_3_ng_container_1_Template_nb_checkbox_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r5);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG(4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtwoWayBindingSet"] */ .DH7(ctx_r0.isSelected, $event) || (ctx_r0.isSelected = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("click", function ScreenshotsItemComponent_div_1_ng_template_2_ng_container_3_ng_container_1_Template_nb_checkbox_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj($event.stopPropagation());
    })("ngModelChange", function ScreenshotsItemComponent_div_1_ng_template_2_ng_container_3_ng_container_1_Template_nb_checkbox_ngModelChange_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r5);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG(4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx_r0.toggleSelect(ctx_r0.timeSlot));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtwoWayProperty"] */ .R50("ngModel", ctx_r0.isSelected);
  }
}
function ScreenshotsItemComponent_div_1_ng_template_2_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(1, ScreenshotsItemComponent_div_1_ng_template_2_ng_container_3_ng_container_1_Template, 2, 1, "ng-container", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(2, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("click", function ScreenshotsItemComponent_div_1_ng_template_2_ng_container_3_Template_button_click_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj($event.stopPropagation());
    })("confirm", function ScreenshotsItemComponent_div_1_ng_template_2_ng_container_3_Template_button_confirm_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r4);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG(3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx_r0.deleteSlot(ctx_r0.timeSlot));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(4, "nb-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r0.multiple);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("message", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(3, 2, "ACTIVITY.DELETE_CONFIRM"));
  }
}
function ScreenshotsItemComponent_div_1_ng_template_2_button_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(1, "nb-icon", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("nbTooltip", ctx_r0.lastScreenshot == null ? null : ctx_r0.lastScreenshot.description);
  }
}
function ScreenshotsItemComponent_div_1_ng_template_2_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(1, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("click", function ScreenshotsItemComponent_div_1_ng_template_2_ng_container_6_Template_button_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r6);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("employeeId", ctx_r0.employeeId)("items", ctx_r0.screenshots)("item", ctx_r0.lastScreenshot);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(3, 4, "ACTIVITY.VIEW_SCREEN"), " ");
  }
}
function ScreenshotsItemComponent_div_1_ng_template_2_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(0, "img", 15);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("src", ctx_r0.lastScreenshot == null ? null : ctx_r0.lastScreenshot.thumbUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵsanitizeUrl"] */ .B4B);
  }
}
function ScreenshotsItemComponent_div_1_ng_template_2_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(0, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(1, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("src", ctx_r0.fallbackSvg, _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵsanitizeUrl"] */ .B4B);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(3, 2, "ACTIVITY.NO_SCREENSHOT"), " ");
  }
}
function ScreenshotsItemComponent_div_1_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("click", function ScreenshotsItemComponent_div_1_ng_template_2_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx_r0.toggleSelect(ctx_r0.timeSlot));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(1, "div", 19)(2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(3, ScreenshotsItemComponent_div_1_ng_template_2_ng_container_3_Template, 5, 4, "ng-container", 21)(4, ScreenshotsItemComponent_div_1_ng_template_2_button_4_Template, 2, 1, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(5, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(6, ScreenshotsItemComponent_div_1_ng_template_2_ng_container_6_Template, 4, 6, "ng-container", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(7, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("click", function ScreenshotsItemComponent_div_1_ng_template_2_Template_button_click_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG(2);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx_r0.viewInfo(ctx_r0.timeSlot));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(10, ScreenshotsItemComponent_div_1_ng_template_2_ng_template_10_Template, 1, 1, "ng-template", 7)(11, ScreenshotsItemComponent_div_1_ng_template_2_ng_template_11_Template, 4, 4, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplateRefExtractor"] */ .C5r);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const noImageEl_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵreference"] */ .sdS(12);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpureFunction1"] */ .eq3(9, _c1, ctx_r0.selectionMode));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r0.timeSlot == null ? null : ctx_r0.timeSlot.isAllowDelete);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r0.lastScreenshot == null ? null : ctx_r0.lastScreenshot.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngIf", (ctx_r0.timeSlot == null ? null : ctx_r0.timeSlot.screenshots == null ? null : ctx_r0.timeSlot.screenshots.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(9, 7, "ACTIVITY.VIEW_INFO"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r0.lastScreenshot)("ngIfElse", noImageEl_r7);
  }
}
function ScreenshotsItemComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(1, ScreenshotsItemComponent_div_1_ng_template_1_Template, 5, 4, "ng-template", 7)(2, ScreenshotsItemComponent_div_1_ng_template_2_Template, 13, 11, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplateRefExtractor"] */ .C5r);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(4, "div", 8)(5, "div", 9)(6, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(8, "utcToTimezone");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(9, "timeFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(10, "utcToTimezone");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(11, "timeFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(12, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(14, "utcToTimezone");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(15, "dateFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(16, "nb-progress-bar", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(17, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(19, "amFromUnix");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(20, "amFromUtc");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(21, "amDateFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(22, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()();
  }
  if (rf & 2) {
    const lastScreenshotTemplate_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵreference"] */ .sdS(3);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r0.employees && ctx_r0.employees.length > 1)("ngIfElse", lastScreenshotTemplate_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate2"] */ .Lme(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind2"] */ .i5U(9, 14, _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind2"] */ .i5U(8, 11, ctx_r0.timeSlot.startedAt, ctx_r0.timezone), ctx_r0.timeFormat), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind2"] */ .i5U(11, 20, _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind2"] */ .i5U(10, 17, ctx_r0.timeSlot.stoppedAt, ctx_r0.timezone), ctx_r0.timeFormat), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(15, 26, _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind2"] */ .i5U(14, 23, ctx_r0.timeSlot.startedAt, ctx_r0.timezone)), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("value", ctx_r0.timeSlot.percentage)("status", ctx_r0.progressStatus(ctx_r0.timeSlot.percentage))("displayValue", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate3"] */ .E5c(" ", ctx_r0.timeSlot.percentage || 0, "% of ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind2"] */ .i5U(21, 32, _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(20, 30, _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(19, 28, ctx_r0.timeSlot.duration)), "mm"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(22, 35, "ACTIVITY.MINUTES"), " ");
  }
}
function ScreenshotsItemComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(2, 1, "ACTIVITY.NO_ACTIVITY"), " ");
  }
}
function ScreenshotsItemComponent_ng_template_4_nb_list_item_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "nb-list-item", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(1, "ngx-employee-links", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const employee_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("value", employee_r9 == null ? null : employee_r9.user)("isNavigation", false);
  }
}
function ScreenshotsItemComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "nb-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(1, ScreenshotsItemComponent_ng_template_4_nb_list_item_1_Template, 2, 2, "nb-list-item", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx_r0.employees);
  }
}
let ScreenshotsItemComponent = /*#__PURE__*/(() => {
  let ScreenshotsItemComponent = class ScreenshotsItemComponent {
    get employees() {
      return this._employees;
    }
    set employees(employees) {
      this._employees = employees;
    }
    get timeSlot() {
      return this._timeSlot;
    }
    set timeSlot(timeSlot) {
      if (!timeSlot) return; // If timeSlot is falsy, return early
      // Create a deep copy of the screenshots to avoid modifying the original array
      let screenshots = JSON.parse(JSON.stringify(timeSlot.screenshots));
      // Map each screenshot with additional properties and employeeId
      this.screenshots = screenshots.map(screenshot => ({
        employeeId: timeSlot.employeeId,
        ...screenshot
      })) || [];
      if ((0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_2__/* .isNotEmpty */ .hj)(this.screenshots)) {
        // Check if all screenshots have isWorkRelated as false
        this.isShowBorder = this.screenshots.every(screenshot => screenshot.isWorkRelated === false);
      }
      // Assign a new object to _timeSlot with modified properties
      this._timeSlot = {
        ...timeSlot,
        isAllowDelete: this.isEnableDelete(timeSlot),
        screenshots: this.screenshots
      };
      // Sort screenshots by recordedAt in descending order
      screenshots = (0,underscore__WEBPACK_IMPORTED_MODULE_0__/* .sortBy */ .Ul)(screenshots, 'recordedAt').reverse();
      // Update lastScreenshot with the first screenshot if available
      this.lastScreenshot = screenshots.length > 0 ? screenshots[0] : null;
    }
    get screenshots() {
      return this._screenshots;
    }
    set screenshots(screenshots) {
      this._screenshots = screenshots;
    }
    get lastScreenshot() {
      return this._lastScreenshot;
    }
    set lastScreenshot(screenshot) {
      this._lastScreenshot = screenshot;
    }
    constructor(_nbDialogService, _timesheetService, _galleryService, _toastrService, _errorHandlingService, _store, _timeZoneService) {
      this._nbDialogService = _nbDialogService;
      this._timesheetService = _timesheetService;
      this._galleryService = _galleryService;
      this._toastrService = _toastrService;
      this._errorHandlingService = _errorHandlingService;
      this._store = _store;
      this._timeZoneService = _timeZoneService;
      this.isShowBorder = false;
      this.progressStatus = _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_2__/* .progressStatus */ .Ux;
      this.fallbackSvg = _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_3__/* .DEFAULT_SVG */ .pv;
      /*
       * Getter & Setter for dynamic enabled/disabled element
       */
      this._employees = [];
      this.multiple = true;
      this.selectionMode = false;
      this.galleryItems = [];
      this.delete = new _angular_core__WEBPACK_IMPORTED_MODULE_1__/* .EventEmitter */ .bkB();
      this.toggle = new _angular_core__WEBPACK_IMPORTED_MODULE_1__/* .EventEmitter */ .bkB();
      /*
       * Getter & Setter for Screenshots
       */
      this._screenshots = [];
      this.timezone = this._timeZoneService.currentTimeZone;
      this.timeFormat = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_4__/* .TimeFormatEnum */ .cS.FORMAT_12_HOURS;
    }
    ngOnInit() {
      this._store.selectedOrganization$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .filter */ .p)(organization => !!organization), (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_2__/* .distinctUntilChange */ .nI)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .M)(organization => this.organization = organization), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__/* .untilDestroyed */ .s)(this)).subscribe();
    }
    /**
     * Toggles the selection of a time slot.
     * If the time slot allows deletion, it emits the time slot's ID.
     *
     * @param {ITimeSlot} timeSlot - The time slot to toggle.
     */
    toggleSelect(timeSlot) {
      if (timeSlot.isAllowDelete) {
        const slotId = timeSlot.id;
        this.toggle.emit(slotId);
      }
    }
    /**
     * Deletes a time slot if deletion is allowed and handles related tasks.
     *
     * @param timeSlot The time slot to be deleted.
     */
    deleteSlot(timeSlot) {
      var _this = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A)(function* () {
        if (!timeSlot.isAllowDelete) {
          return;
        }
        try {
          // Destructure the organization ID and tenant ID from the organization object
          const {
            id: organizationId,
            tenantId
          } = _this.organization;
          // Delete time slots
          yield _this._timesheetService.deleteTimeSlots({
            ids: [timeSlot.id],
            organizationId,
            tenantId
          });
          // Remove related screenshots from the gallery
          const screenshotsToRemove = timeSlot.screenshots.map(screenshot => ({
            thumbUrl: screenshot.thumbUrl,
            fullUrl: screenshot.fullUrl,
            ...screenshot
          }));
          _this._galleryService.removeGalleryItems(screenshotsToRemove);
          // Display success message
          const employeeName = timeSlot.employee?.fullName?.trim() || 'Unknown Employee';
          // Display success message
          _this._toastrService.success('TOASTR.MESSAGE.SCREENSHOT_DELETED', {
            name: employeeName,
            organization: _this.organization.name
          });
          // Trigger delete event
          _this.delete.emit();
        } catch (error) {
          console.log('Error while deleting time slot', error);
          _this._errorHandlingService.handleError(error);
        }
      })();
    }
    /**
     * Opens a modal to view information about the provided time slot.
     *
     * @param timeSlot - The time slot for which information is to be viewed.
     */
    viewInfo(timeSlot) {
      const dialog$ = this._nbDialogService.open(_view_screenshots_modal_view_screenshots_modal_component__WEBPACK_IMPORTED_MODULE_9__/* .ViewScreenshotsModalComponent */ .v, {
        context: {
          timeSlot,
          timeLogs: timeSlot.timeLogs
        }
      });
      dialog$.onClose.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .filter */ .p)(data => Boolean(data && data['isDelete'])), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .M)(() => this.delete.emit()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .take */ .s)(1), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__/* .untilDestroyed */ .s)(this)).subscribe();
    }
    /**
     * Checks if the provided time slot can be deleted based on certain conditions.
     *
     * @param timeSlot - The time slot to be checked for deletion.
     * @returns True if deletion is allowed, false otherwise.
     */
    isEnableDelete(timeSlot) {
      return timeSlot.timeLogs.every(log => !log.isRunning);
    }
    ngOnDestroy() {}
    static {
      this.ɵfac = function ScreenshotsItemComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || ScreenshotsItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbDialogService */ .S0W), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_12__/* .TimesheetService */ .k), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_gallery_gallery_service__WEBPACK_IMPORTED_MODULE_13__/* .GalleryService */ .A), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_14__/* .ToastrService */ .t), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_15__/* .ErrorHandlingService */ .X), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_16__/* .Store */ .il), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_filters_timezone_filter__WEBPACK_IMPORTED_MODULE_17__/* .TimeZoneService */ .F));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineComponent"] */ .VBU({
        type: ScreenshotsItemComponent,
        selectors: [["ngx-screenshots-item"]],
        inputs: {
          employees: "employees",
          multiple: "multiple",
          selectionMode: "selectionMode",
          galleryItems: "galleryItems",
          isSelected: "isSelected",
          employeeId: "employeeId",
          timeSlot: "timeSlot",
          timezone: "timezone",
          timeFormat: "timeFormat"
        },
        outputs: {
          delete: "delete",
          toggle: "toggle"
        },
        standalone: false,
        decls: 6,
        vars: 5,
        consts: [["noActivity", ""], ["workedEmployeeTemplate", ""], ["lastScreenshotTemplate", ""], ["noImageEl", ""], [1, "card", 3, "ngClass"], ["class", "activity", 4, "ngIf", "ngIfElse"], [1, "activity"], [3, "ngIf", "ngIfElse"], [1, "slot-info", "text-left", "p-3"], [1, "time-span", "mb-4", "mt-1", "hour-label"], [1, "inline-time-span"], [1, "text-caption", "caption", "mt-2"], ["size", "tiny", 1, "mb-1", 3, "value", "status", "displayValue"], [1, "activity-count", "hour-label", "mt-2"], [1, "image-container", "curser-pointer", 3, "nbPopover", "nbPopoverTrigger"], ["draggable", "false", 3, "src"], [1, "screenshot-count"], [1, "fas", "fa-users"], [1, "image-container", "curser-pointer", 3, "click", "ngClass"], [1, "hover"], [1, "actions", "d-flex", "align-items-center", "w-100"], [4, "ngIf"], ["class", "ml-2", "status", "info", "nbButton", "", "size", "tiny", 3, "nbTooltip", 4, "ngIf"], [1, "view-button", "select-hidden"], ["nbButton", "", "size", "small", "status", "secondary", 3, "click"], ["status", "danger", "nbButton", "", "size", "tiny", "ngxConfirmDialog", "", 1, "ml-auto", "select-hidden", 3, "click", "confirm", "message"], ["icon", "trash-2-outline"], ["size", "tiny", 3, "ngModelChange", "click", "ngModel"], ["status", "info", "nbButton", "", "size", "tiny", 1, "ml-2", 3, "nbTooltip"], ["icon", "info-outline", "size", "small"], ["nbButton", "", "size", "small", "status", "primary", "ngxGallery", "", 1, "mr-1", 3, "click", "employeeId", "items", "item"], ["draggable", "false", 1, "default-image", 3, "src"], [1, "no-image", "p-3"], [1, "no-activity", "p-3", "text-center"], ["class", "row border-top align-items-center", 4, "ngFor", "ngForOf"], [1, "row", "border-top", "align-items-center"], [3, "value", "isNavigation"]],
        template: function ScreenshotsItemComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(1, ScreenshotsItemComponent_div_1_Template, 23, 37, "div", 5)(2, ScreenshotsItemComponent_ng_template_2_Template, 3, 3, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplateRefExtractor"] */ .C5r);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(4, ScreenshotsItemComponent_ng_template_4_Template, 2, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplateRefExtractor"] */ .C5r);
          }
          if (rf & 2) {
            const noActivity_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵreference"] */ .sdS(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpureFunction1"] */ .eq3(3, _c0, ctx.isShowBorder));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.timeSlot)("ngIfElse", noActivity_r10);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_18__/* .NgClass */ .YU, _angular_common__WEBPACK_IMPORTED_MODULE_18__/* .NgForOf */ .Sq, _angular_common__WEBPACK_IMPORTED_MODULE_18__/* .NgIf */ .bT, _angular_forms__WEBPACK_IMPORTED_MODULE_19__/* .NgControlStatus */ .BC, _angular_forms__WEBPACK_IMPORTED_MODULE_19__/* .NgModel */ .vS, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbButtonComponent */ .YP2, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbCheckboxComponent */ .DMy, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbIconComponent */ .tHu, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbListComponent */ .krR, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbListItemComponent */ .TdD, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbPopoverDirective */ .vs7, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbProgressBarComponent */ .c0m, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbTooltipDirective */ .BmQ, _directives_img_directive__WEBPACK_IMPORTED_MODULE_20__/* .ImgDirective */ .z, _dialogs_directive_confirm_directive__WEBPACK_IMPORTED_MODULE_21__/* .ConfirmDirective */ .o, _gallery_gallery_directive__WEBPACK_IMPORTED_MODULE_22__/* .GalleryDirective */ .M, _table_components_employee_links_employee_links_component__WEBPACK_IMPORTED_MODULE_23__/* .EmployeeLinksComponent */ .z, ngx_moment__WEBPACK_IMPORTED_MODULE_24__/* .DateFormatPipe */ .az, ngx_moment__WEBPACK_IMPORTED_MODULE_24__/* .FromUnixPipe */ .Fn, ngx_moment__WEBPACK_IMPORTED_MODULE_24__/* .FromUtcPipe */ .f1, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_25__/* .TranslatePipe */ .D9, _pipes_date_format_pipe__WEBPACK_IMPORTED_MODULE_26__/* .DateFormatPipe */ .a, _pipes_time_format_pipe__WEBPACK_IMPORTED_MODULE_27__/* .TimeFormatPipe */ .z, _pipes_utc_to_timezone_pipe__WEBPACK_IMPORTED_MODULE_28__/* .UtcToTimezone */ .L],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nnb-card[_ngcontent-%COMP%], \nnb-card-body[_ngcontent-%COMP%], \n.card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n  border: none;\n}\n\n  .filter-item-list {\n  flex-wrap: nowrap !important;\n}\n  .group-by-wrapper {\n  display: inline-flex;\n  align-items: center;\n  margin-bottom: 10px;\n}\n  .group-by-wrapper .label {\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 11px;\n  letter-spacing: 0em;\n}\n  .group-by-wrapper .select-button.select-button {\n  padding: 5px 12px !important;\n  border-radius: var(--select-rectangle-border-radius);\n  height: 30px;\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 15px;\n  letter-spacing: 0em;\n  min-width: auto;\n  display: flex;\n  align-items: center;\n}\n  .group-by-wrapper .select-button.select-button nb-select.shape-rectangle .select-button {\n  border-radius: var(--border-radius);\n  box-shadow: var(--gauzy-shadow);\n  height: 42px;\n  display: flex;\n  align-items: center;\n  border: none;\n}\n  .group-by-wrapper .select-button.select-button nb-select.appearance-outline.size-medium .select-button {\n  border: none;\n}\n  .group-by-wrapper .select-button.select-button nb-select button span {\n  display: block;\n  overflow-x: hidden;\n  text-overflow: ellipsis;\n}\n  .group-by-wrapper .select-button.select-button > span {\n  margin-right: 25px;\n}\n  .action-select {\n  border-radius: var(--select-rectangle-border-radius);\n  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.15);\n  height: 30px;\n}\n  .action-select button.select-button {\n  background-color: var(--gauzy-card-1) !important;\n  border-radius: var(--select-rectangle-border-radius);\n  padding-top: 2px !important;\n  padding-bottom: 0px !important;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  padding-left: 12px !important;\n}\n  .action-select button.select-button nb-icon {\n  color: var(--text-basic-color) !important;\n}\n  .nb-options {\n  width: auto !important;\n}\n\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n  border-radius: var(--border-radius);\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   nb-card-header[_ngcontent-%COMP%], \n[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   nb-accordion-item-header[_ngcontent-%COMP%] {\n  background-color: unset;\n  margin-bottom: 0;\n  border-bottom: none;\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n}\n[_nghost-%COMP%]   nb-card-header[_ngcontent-%COMP%], \n[_nghost-%COMP%]   nb-accordion-item-header[_ngcontent-%COMP%] {\n  background-color: unset;\n  padding: 20px;\n  border-bottom: none;\n}\n[_nghost-%COMP%]   nb-accordion-item-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n[_nghost-%COMP%]   nb-accordion-item-header[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  margin: 0 2rem;\n}\n[_nghost-%COMP%]   nb-accordion-item-body[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-sidebar-background-2);\n  border-radius: 0 0 var(--border-radius) var(--border-radius);\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n  padding: 1rem;\n  border-radius: 0 0 var(--border-radius) var(--border-radius);\n}\n[_nghost-%COMP%]   nb-card-body.report-body[_ngcontent-%COMP%] {\n  overflow: unset;\n  height: calc(100% - 6rem);\n}\n[dir=ltr]   [_nghost-%COMP%]   nb-card-body.report-body[_ngcontent-%COMP%] {\n  padding: 1rem 0.5rem 1rem 18px;\n}\n[dir=rtl]   [_nghost-%COMP%]   nb-card-body.report-body[_ngcontent-%COMP%] {\n  padding: 1rem 18px 1rem 0.5rem;\n}\n[_nghost-%COMP%]   nb-card-body.report-body[_ngcontent-%COMP%]   .report-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  overflow: auto;\n  height: 100%;\n}\n[dir=ltr]   [_nghost-%COMP%]   nb-card-body.report-body[_ngcontent-%COMP%]   .report-container[_ngcontent-%COMP%] {\n  padding-right: 0.5rem;\n}\n[dir=rtl]   [_nghost-%COMP%]   nb-card-body.report-body[_ngcontent-%COMP%]   .report-container[_ngcontent-%COMP%] {\n  padding-left: 0.5rem;\n}\n[_nghost-%COMP%]   .weekly-logs[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n[_nghost-%COMP%]   .not-found[_ngcontent-%COMP%] {\n  height: 100%;\n}\n[_nghost-%COMP%]   .budget-container[_ngcontent-%COMP%] {\n  padding-bottom: 6px !important;\n}\n[_nghost-%COMP%]     nb-select.shape-rectangle .select-button {\n  border-radius: calc(var(--button-rectangle-border-radius) / 1.625);\n  box-shadow: var(--gauzy-shadow);\n  height: 2rem;\n  display: flex;\n  align-items: center;\n  border: none;\n}\n[_nghost-%COMP%]     nb-select.appearance-outline.size-medium .select-button {\n  border: none;\n}\n[_nghost-%COMP%]     nb-select button span {\n  display: block;\n  overflow-x: hidden;\n  text-overflow: ellipsis;\n}\n\n[_nghost-%COMP%]   nb-accordion[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  row-gap: 1rem;\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   nb-accordion[_ngcontent-%COMP%]     .item-body {\n  border-radius: 0 0 var(--border-radius) var(--border-radius);\n}\n\n.table[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  margin-bottom: 0;\n}\n\n.daily-time-report[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%], \n.daily-time-report[_ngcontent-%COMP%]   nb-accordion-item-body[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n}\n\n.table-row[_ngcontent-%COMP%] {\n  border-radius: var(--border-radius);\n  height: 86px;\n  background-color: var(--gauzy-card-1);\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  margin-bottom: 10px;\n  padding-top: 10px;\n  padding-bottom: 20px;\n}\n\n.table-inner-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.columns-header[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n  border-radius: 8px;\n  margin-bottom: 10px;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 15px;\n  letter-spacing: 0em;\n}\n\n.responsive-table-header[_ngcontent-%COMP%] {\n  display: none;\n}\n\n[dir=rtl]   [_nghost-%COMP%]   .responsive-table-row[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n[dir=ltr]   [_nghost-%COMP%]   .responsive-table-row[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n\n.avatar-wrapper-outer[_ngcontent-%COMP%] {\n  max-width: 95%;\n  padding-top: 5px;\n  display: inline-flex;\n}\n.avatar-wrapper-outer[_ngcontent-%COMP%]   .inner-wrapper[_ngcontent-%COMP%] {\n  display: inline-flex !important;\n}\n\n@media only screen and (max-width: 991px) {\n  [dir=ltr]   [_nghost-%COMP%]     .group-by-wrapper {\n    margin-left: 10px;\n  }\n  [dir=rtl]   [_nghost-%COMP%]     .group-by-wrapper {\n    margin-right: 10px;\n  }\n  .columns-header[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .card[_ngcontent-%COMP%]   nb-accordion-item-body[_ngcontent-%COMP%], \n   .card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n    padding-left: 0;\n    padding-right: 0;\n  }\n  .table-row[_ngcontent-%COMP%] {\n    border-radius: 0;\n    margin-bottom: 15px;\n  }\n  .responsive-table-row[_ngcontent-%COMP%] {\n    width: 100% !important;\n    min-width: auto !important;\n    max-width: unset !important;\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    margin-bottom: 10px;\n    padding: 10px;\n    border-radius: var(--border-radius);\n    border-left: 1px solid var(--border-basic-color-4);\n  }\n  .responsive-table-header[_ngcontent-%COMP%] {\n    display: block;\n    font-size: 16px;\n    font-style: normal;\n    font-weight: 600;\n    line-height: 15px;\n    letter-spacing: 0em;\n  }\n  .responsive-table-content[_ngcontent-%COMP%], \n   .responsive-table-header[_ngcontent-%COMP%] {\n    width: 50%;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n  }\n  .table-row[_ngcontent-%COMP%] {\n    height: auto;\n  }\n  .table-inner-wrapper[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n@media only screen and (max-width: 767px) {\n  [_nghost-%COMP%]     .filters-range-wrapper {\n    flex-wrap: wrap !important;\n  }\n  [_nghost-%COMP%]     .filters .main-wrapper {\n    padding-left: 0;\n    padding-right: 0;\n  }\n    .filter-item-list {\n    flex-wrap: wrap !important;\n  }\n}\n.chart[_ngcontent-%COMP%] {\n  border-radius: var(--border-radius) !important;\n}\n\n[_nghost-%COMP%]   nb-badge[_ngcontent-%COMP%] {\n  position: relative;\n  font-size: 14px;\n  font-weight: 600;\n  padding: 2px 4px;\n  border-radius: calc(var(--border-radius) / 2);\n}\n\n[_nghost-%COMP%]     nb-progress-bar.size-tiny .progress-container {\n  height: 10px;\n  background-color: nb-theme(gauzy-card-2);\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%] {\n  border-radius: nb-theme(border-radius);\n  background: var(gauzy-sidebar-background-4);\n  box-shadow: var(--gauzy-shadow);\n  min-width: 189px;\n  max-width: 270px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  border: unset;\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0px 36px 18px -24px rgba(0, 0, 0, 0.15);\n}\n[_nghost-%COMP%]   .card.danger-bordered[_ngcontent-%COMP%] {\n  border: 2px solid nb-theme(color-danger-500) !important;\n}\n[_nghost-%COMP%]   .curser-pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n  border-radius: nb-theme(border-radius) nb-theme(border-radius) 0px 0px;\n}\n[_nghost-%COMP%]   .activity[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.1);\n  min-height: 130px;\n  position: relative;\n}\n[_nghost-%COMP%]   .activity[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]   .hover[_ngcontent-%COMP%] {\n  padding: 5px;\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.7);\n  opacity: 0;\n  z-index: 9;\n  align-items: center;\n  justify-content: center;\n  transition: opacity 0.5s;\n  border-radius: nb-theme(border-radius) nb-theme(border-radius) 0px 0px;\n}\n[_nghost-%COMP%]   .activity[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]   .view-button[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: space-around;\n}\n[_nghost-%COMP%]   .activity[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]   .view-button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 16px;\n  letter-spacing: -0.009em;\n  text-align: left;\n}\n[_nghost-%COMP%]   .activity[_ngcontent-%COMP%]   .image-container.select-mode[_ngcontent-%COMP%]   .hover[_ngcontent-%COMP%] {\n  justify-content: normal;\n}\n[_nghost-%COMP%]   .activity[_ngcontent-%COMP%]   .image-container.select-mode[_ngcontent-%COMP%]   .select-hidden[_ngcontent-%COMP%] {\n  display: none;\n}\n[_nghost-%COMP%]   .activity[_ngcontent-%COMP%]   .image-container.select-mode[_ngcontent-%COMP%]   .hover[_ngcontent-%COMP%], [_nghost-%COMP%]   .activity[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]:hover   .hover[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n[_nghost-%COMP%]   .activity[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]   .no-image[_ngcontent-%COMP%] {\n  padding: 8px;\n  background: rgba(0, 0, 0, 0.6);\n  color: #fff;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  border-radius: 5px;\n  text-align: center;\n}\n[_nghost-%COMP%]   .activity[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]   .screenshot-count[_ngcontent-%COMP%] {\n  padding: 8px;\n  background: rgba(0, 0, 0, 0.6);\n  color: nb-theme(color-danger-default);\n  position: absolute;\n  top: 0.5rem;\n  right: 0.5rem;\n  border-radius: nb-theme(border-radius);\n  text-align: center;\n}\n[_nghost-%COMP%]   .activity[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 130px;\n  border-radius: nb-theme(border-radius) nb-theme(border-radius) 0px 0px;\n  object-fit: cover;\n}\n[_nghost-%COMP%]   .activity[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]   img.default-image[_ngcontent-%COMP%] {\n  object-fit: contain;\n}\n[_nghost-%COMP%]   .no-activity[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-sidebar-background-4);\n  border-radius: var(--border-radius);\n}\n\n.hour-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 11px;\n  letter-spacing: 0em;\n  text-align: left;\n}\n\n  .cdk-overlay-container nb-overlay-container nb-list {\n  overflow: hidden !important;\n}\n\n.slot-info[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 11px;\n  letter-spacing: 0em;\n  text-align: left;\n}\n.slot-info[_ngcontent-%COMP%]   .caption[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 400;\n  line-height: 11px;\n  letter-spacing: 0em;\n  color: var(--gauzy-text-color-2);\n}\n.slot-info[_ngcontent-%COMP%]   .inline-time-span[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  font-size: 0.75rem;\n}"]
      });
    }
  };
  ScreenshotsItemComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_29__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__/* .UntilDestroy */ .d)({
    checkProperties: true
  }), (0,tslib__WEBPACK_IMPORTED_MODULE_29__/* .__metadata */ .Sn)("design:paramtypes", [_nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbDialogService */ .S0W, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_12__/* .TimesheetService */ .k, _gallery_gallery_service__WEBPACK_IMPORTED_MODULE_13__/* .GalleryService */ .A, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_14__/* .ToastrService */ .t, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_15__/* .ErrorHandlingService */ .X, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_16__/* .Store */ .il, _gauzy_filters_timezone_filter__WEBPACK_IMPORTED_MODULE_17__/* .TimeZoneService */ .F])], ScreenshotsItemComponent);
  return ScreenshotsItemComponent;
})();


/***/ })

}]);