"use strict";
(self["webpackChunkgauzy"] = self["webpackChunkgauzy"] || []).push([[1078],{

/***/ 1078:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EquipmentModule: () => (/* binding */ EquipmentModule)
/* harmony export */ });
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(56383);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(19223);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38834);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(82202);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4398);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(57832);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(80784);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(98722);
/* harmony import */ var _equipment_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27207);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26860);







let EquipmentModule = /*#__PURE__*/(() => {
  class EquipmentModule {
    static {
      this.ɵfac = function EquipmentModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || EquipmentModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineNgModule"] */ .$C({
        type: EquipmentModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [_equipment_routing_module__WEBPACK_IMPORTED_MODULE_0__/* .EquipmentRoutingModule */ .Z, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_2__/* .SharedModule */ .G, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_3__/* .UserFormsModule */ .D, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbCardModule */ .lVF, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbButtonModule */ .P5N, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbInputModule */ .pty, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbIconModule */ .clu, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbDialogModule */ .nZv.forChild(), _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_5__/* .EquipmentMutationModule */ .A, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_6__/* .TableComponentsModule */ .p, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_7__/* .CardGridModule */ .n, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__/* .TranslateModule */ .h.forChild(), _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbSpinnerModule */ .gYs, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_9__/* .SmartDataViewLayoutModule */ .H]
      });
    }
  }
  return EquipmentModule;
})();

/***/ }),

/***/ 27207:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ EquipmentRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(908);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4106);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17785);
/* harmony import */ var _equipment_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44935);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26860);






const routes = [{
  path: '',
  component: _equipment_component__WEBPACK_IMPORTED_MODULE_0__/* .EquipmentComponent */ .S,
  canActivate: [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_1__/* .PermissionsGuard */ .a],
  data: {
    permissions: {
      only: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__/* .PermissionsEnum */ .U.ALL_ORG_VIEW, _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__/* .PermissionsEnum */ .U.ORG_EQUIPMENT_VIEW],
      redirectTo: '/pages/dashboard'
    }
  }
}];
let EquipmentRoutingModule = /*#__PURE__*/(() => {
  class EquipmentRoutingModule {
    static {
      this.ɵfac = function EquipmentRoutingModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || EquipmentRoutingModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdefineNgModule"] */ .$C({
        type: EquipmentRoutingModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__/* .RouterModule */ .iI.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_4__/* .RouterModule */ .iI]
      });
    }
  }
  return EquipmentRoutingModule;
})();

/***/ }),

/***/ 44935:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ EquipmentComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(73014);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(64411);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(45715);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(9620);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(81236);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(19223);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(56383);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24237);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(71181);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(36950);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(73246);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(72781);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(23423);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(35665);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(59016);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(15480);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(71924);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(26024);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(46076);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(64913);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47108);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(76229);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(21968);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(91045);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(75119);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(55101);
/* harmony import */ var _auto_approve_auto_approve_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(51092);
/* harmony import */ var _inventory_components_inventory_table_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(45121);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(908);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(14572);
/* harmony import */ var _packages_ui_core_shared_src_lib_components_header_title_header_title_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(49072);
/* harmony import */ var _packages_ui_core_shared_src_lib_card_grid_card_grid_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(49517);
/* harmony import */ var angular2_smart_table__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(52345);
/* harmony import */ var _packages_ui_core_shared_src_lib_gauzy_button_action_gauzy_button_action_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(45293);
/* harmony import */ var _packages_ui_core_shared_src_lib_smart_data_layout_pagination_pagination_v2_pagination_v2_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(3456);



























function EquipmentComponent_ng_template_14_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "ngx-pagination", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("source", ctx_r1.smartTableSource);
  }
}
function EquipmentComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 11)(1, "angular2-smart-table", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("userRowSelect", function EquipmentComponent_ng_template_14_Template_angular2_smart_table_userRowSelect_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.selectEquipment($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(3, EquipmentComponent_ng_template_14_ng_container_3_Template, 2, 1, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("settings", ctx_r1.settingsSmartTable)("source", ctx_r1.smartTableSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r1.smartTableSource);
  }
}
function EquipmentComponent_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "ga-card-grid", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("onSelectedItem", function EquipmentComponent_ng_template_15_Template_ga_card_grid_onSelectedItem_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.selectEquipment($event));
    })("scroll", function EquipmentComponent_ng_template_15_Template_ga_card_grid_scroll_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.onScroll());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("totalItems", ctx_r1.pagination == null ? null : ctx_r1.pagination.totalItems)("settings", ctx_r1.settingsSmartTable)("source", ctx_r1.equipments);
  }
}
function EquipmentComponent_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 17)(1, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function EquipmentComponent_ng_template_17_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.save(ctx_r1.selectedEquipment));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(2, "nb-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(5, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function EquipmentComponent_ng_template_17_Template_button_click_5_listener() {
      const selectedItem_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r4).selectedItem;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.delete(selectedItem_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(6, "nb-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const selectedItem_r5 = ctx.selectedItem;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("disabled", !selectedItem_r5 && ctx_r1.disableButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(4, 3, "BUTTONS.EDIT"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("disabled", !selectedItem_r5 && ctx_r1.disableButton);
  }
}
function EquipmentComponent_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function EquipmentComponent_ng_template_19_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.save());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "nb-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(3, 1, "BUTTONS.ADD"), " ");
  }
}
let EquipmentComponent = class EquipmentComponent extends _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_1__/* .PaginationFilterBaseComponent */ .t {
  constructor(translateService, dialogService, equipmentService, toastrService, store, http, route) {
    super(translateService);
    this.translateService = translateService;
    this.dialogService = dialogService;
    this.equipmentService = equipmentService;
    this.toastrService = toastrService;
    this.store = store;
    this.http = http;
    this.route = route;
    this.loading = true;
    this.disableButton = true;
    this.equipments = [];
    this.dataLayoutStyle = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__/* .ComponentLayoutStyleEnum */ .IE.TABLE;
    this.componentLayoutStyleEnum = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__/* .ComponentLayoutStyleEnum */ .IE;
    this.equipments$ = this.subject$;
    this._refresh$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__/* .Subject */ .B();
    this.setView();
  }
  ngOnInit() {
    this._loadSmartTableSettings();
    this._applyTranslationOnSmartTable();
    this.equipments$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__/* .debounceTime */ .B)(100), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .M)(() => this.clearItem()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .M)(() => this.getEquipments()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__/* .untilDestroyed */ .s)(this)).subscribe();
    this.pagination$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__/* .debounceTime */ .B)(100), (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_7__/* .distinctUntilChange */ .nI)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .M)(() => this.equipments$.next(true)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__/* .untilDestroyed */ .s)(this)).subscribe();
    this.store.selectedOrganization$.pipe((0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_7__/* .distinctUntilChange */ .nI)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .filter */ .p)(organization => !!organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .M)(organization => this.organization = organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .M)(() => this._refresh$.next(true)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .M)(() => this.equipments$.next(true)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__/* .untilDestroyed */ .s)(this)).subscribe();
    this.route.queryParamMap.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .filter */ .p)(params => !!params && params.get('openAddDialog') === 'true'), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__/* .debounceTime */ .B)(1000), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .M)(() => this.save()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__/* .untilDestroyed */ .s)(this)).subscribe();
    this._refresh$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .filter */ .p)(() => this.dataLayoutStyle === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__/* .ComponentLayoutStyleEnum */ .IE.CARDS_GRID), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .M)(() => this.refreshPagination()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .M)(() => this.equipments = []), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__/* .untilDestroyed */ .s)(this)).subscribe();
  }
  ngOnDestroy() {}
  setView() {
    this.viewComponentName = _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_9__/* .ComponentEnum */ .L.EQUIPMENT;
    this.store.componentLayout$(this.viewComponentName).pipe((0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_7__/* .distinctUntilChange */ .nI)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .M)(componentLayout => this.dataLayoutStyle = componentLayout), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .M)(() => this.refreshPagination()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .filter */ .p)(componentLayout => componentLayout === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__/* .ComponentLayoutStyleEnum */ .IE.CARDS_GRID), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .M)(() => this.equipments = []), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .M)(() => this.equipments$.next(true)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__/* .untilDestroyed */ .s)(this)).subscribe();
  }
  _loadSmartTableSettings() {
    const pagination = this.getPagination();
    this.settingsSmartTable = {
      actions: false,
      selectedRowIndex: -1,
      pager: {
        display: false,
        perPage: pagination ? pagination.itemsPerPage : 10
      },
      noDataMessage: this.getTranslation('SM_TABLE.NO_DATA.EQUIPMENT'),
      columns: {
        image: {
          title: this.getTranslation('INVENTORY_PAGE.IMAGE'),
          width: '79px',
          isFilterable: false,
          type: 'custom',
          renderComponent: _inventory_components_inventory_table_components__WEBPACK_IMPORTED_MODULE_10__/* .ImageRowComponent */ .j,
          componentInitFunction: (instance, cell) => {
            instance.rowData = cell.getRow().getData();
            instance.value = cell.getRawValue();
          }
        },
        name: {
          title: this.getTranslation('EQUIPMENT_PAGE.EQUIPMENT_NAME'),
          type: 'custom',
          renderComponent: _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_11__/* .PictureNameTagsComponent */ .O,
          componentInitFunction: (instance, cell) => {
            instance.rowData = cell.getRow().getData();
            instance.value = cell.getRawValue();
          },
          filter: {
            type: 'custom',
            component: _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_12__/* .InputFilterComponent */ .U
          },
          filterFunction: value => {
            this.setFilter({
              field: 'name',
              search: value
            });
          }
        },
        type: {
          title: this.getTranslation('EQUIPMENT_PAGE.EQUIPMENT_TYPE'),
          type: 'string',
          filter: {
            type: 'custom',
            component: _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_12__/* .InputFilterComponent */ .U
          },
          filterFunction: value => {
            this.setFilter({
              field: 'type',
              search: value
            });
          }
        },
        serialNumber: {
          title: this.getTranslation('EQUIPMENT_PAGE.EQUIPMENT_SN'),
          type: 'string',
          filter: {
            type: 'custom',
            component: _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_12__/* .InputFilterComponent */ .U
          },
          filterFunction: value => {
            this.setFilter({
              field: 'serialNumber',
              search: value
            });
          }
        },
        manufacturedYear: {
          title: this.getTranslation('EQUIPMENT_PAGE.EQUIPMENT_MANUFACTURED_YEAR'),
          type: 'number',
          isFilterable: false
        },
        initialCost: {
          title: this.getTranslation('EQUIPMENT_PAGE.EQUIPMENT_INITIAL_COST'),
          type: 'number',
          isFilterable: false
        },
        currency: {
          title: this.getTranslation('EQUIPMENT_PAGE.EQUIPMENT_CURRENCY'),
          type: 'string',
          isFilterable: false
        },
        maxSharePeriod: {
          title: this.getTranslation('EQUIPMENT_PAGE.EQUIPMENT_MAX_SHARE_PERIOD'),
          type: 'number',
          isFilterable: false
        },
        autoApproveShare: {
          title: this.getTranslation('EQUIPMENT_PAGE.EQUIPMENT_AUTO_APPROVE'),
          type: 'custom',
          isFilterable: false,
          renderComponent: _auto_approve_auto_approve_component__WEBPACK_IMPORTED_MODULE_13__/* .AutoApproveComponent */ .q,
          componentInitFunction: (instance, cell) => {
            instance.rowData = cell.getRow().getData();
          }
        },
        tags: {
          title: this.getTranslation('SM_TABLE.TAGS'),
          type: 'custom',
          isFilterable: false,
          renderComponent: _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_14__/* .TagsOnlyComponent */ .F,
          componentInitFunction: (instance, cell) => {
            instance.rowData = cell.getRow().getData();
            instance.value = cell.getRawValue();
          }
        }
      }
    };
  }
  save(selectedItem) {
    var _this = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A)(function* () {
      if (selectedItem) {
        _this.selectEquipment({
          isSelected: true,
          data: selectedItem
        });
      } else {
        _this.selectEquipment({
          isSelected: false,
          data: null
        });
      }
      const dialog = _this.dialogService.open(_gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_16__/* .EquipmentMutationComponent */ .j, {
        context: {
          equipment: _this.selectedEquipment
        }
      });
      const equipment = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_17__/* .firstValueFrom */ ._)(dialog.onClose);
      if (equipment) {
        _this.toastrService.success('EQUIPMENT_PAGE.EQUIPMENT_SAVED', {
          name: equipment.name
        });
        _this._refresh$.next(true);
        _this.equipments$.next(true);
      }
    })();
  }
  delete(selectedItem) {
    var _this2 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A)(function* () {
      if (selectedItem) {
        _this2.selectEquipment({
          isSelected: true,
          data: selectedItem
        });
      }
      const result = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_17__/* .firstValueFrom */ ._)(_this2.dialogService.open(_gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_18__/* .DeleteConfirmationComponent */ .u).onClose);
      if (result) {
        yield _this2.equipmentService.delete(_this2.selectedEquipment.id);
        _this2._refresh$.next(true);
        _this2.equipments$.next(true);
        _this2.toastrService.success('EQUIPMENT_PAGE.EQUIPMENT_DELETED', {
          name: _this2.selectedEquipment.name
        });
      }
    })();
  }
  /*
   * Register Smart Table Source Config
   */
  setSmartTableSource() {
    if (!this.organization) {
      return;
    }
    this.loading = true;
    const {
      tenantId
    } = this.store.user;
    const {
      id: organizationId
    } = this.organization;
    this.smartTableSource = new _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_19__/* .ServerDataSource */ .N(this.http, {
      endPoint: `${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_20__/* .API_PREFIX */ .m4}/equipment/pagination`,
      relations: ['equipmentSharings', 'tags', 'image'],
      where: {
        organizationId,
        tenantId,
        ...(this.filters.where ? this.filters.where : {})
      },
      finalize: () => {
        if (this.dataLayoutStyle === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__/* .ComponentLayoutStyleEnum */ .IE.CARDS_GRID) {
          this.equipments.push(...this.smartTableSource.getData());
        }
        this.setPagination({
          ...this.getPagination(),
          totalItems: this.smartTableSource.count()
        });
        this.loading = false;
      }
    });
  }
  getEquipments() {
    var _this3 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A)(function* () {
      if (!_this3.organization) {
        return;
      }
      try {
        _this3.setSmartTableSource();
        const {
          activePage,
          itemsPerPage
        } = _this3.getPagination();
        _this3.smartTableSource.setPaging(activePage, itemsPerPage, false);
        if (_this3.dataLayoutStyle === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__/* .ComponentLayoutStyleEnum */ .IE.CARDS_GRID) {
          yield _this3.smartTableSource.getElements();
        }
      } catch (error) {
        _this3.toastrService.danger(error);
      }
    })();
  }
  selectEquipment({
    isSelected,
    data
  }) {
    this.disableButton = !isSelected;
    this.selectedEquipment = isSelected ? data : null;
  }
  /*
   * Clear selected item
   */
  clearItem() {
    this.selectEquipment({
      isSelected: false,
      data: null
    });
  }
  _applyTranslationOnSmartTable() {
    this.translateService.onLangChange.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .M)(() => this._loadSmartTableSettings()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__/* .untilDestroyed */ .s)(this)).subscribe();
  }
  static {
    this.ɵfac = function EquipmentComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || EquipmentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__/* .TranslateService */ .c$), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_nebular_theme__WEBPACK_IMPORTED_MODULE_22__/* .NbDialogService */ .S0W), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_23__/* .EquipmentService */ .m), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_24__/* .ToastrService */ .t), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_25__/* .Store */ .il), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_common_http__WEBPACK_IMPORTED_MODULE_26__/* .HttpClient */ .Qq), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_router__WEBPACK_IMPORTED_MODULE_27__/* .ActivatedRoute */ .nX));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
      type: EquipmentComponent,
      selectors: [["ng-component"]],
      standalone: false,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
      decls: 21,
      vars: 15,
      consts: [["gridLayout", ""], ["actionButtons", ""], ["visibleButton", ""], ["nbSpinnerStatus", "primary", "nbSpinnerSize", "large", 3, "nbSpinner"], [1, "d-flex", "flex-column", "pb-0"], [1, "card-header-title"], [3, "allowEmployee"], ["nbButton", "", "status", "primary", 1, "float-right", "action", "sharing", 3, "routerLink"], [1, "align-self-end"], [3, "isDisable", "buttonTemplate", "componentName", "buttonTemplateVisible"], [3, "ngIf", "ngIfElse"], [1, "table-scroll-container"], [2, "cursor", "pointer", 3, "userRowSelect", "settings", "source"], [1, "pagination-container", "align-self-end"], [4, "ngIf"], [3, "source"], [3, "onSelectedItem", "scroll", "totalItems", "settings", "source"], [1, "btn-group", "actions"], ["nbButton", "", "status", "basic", "size", "small", 1, "action", "primary", 3, "click", "disabled"], ["icon", "edit-outline", 1, "mr-1"], ["nbButton", "", "status", "basic", "size", "small", 1, "action", 3, "click", "disabled"], ["status", "danger", "icon", "trash-2-outline"], ["nbButton", "", "status", "success", "size", "small", 1, "action", 3, "click"], ["icon", "plus-outline", 1, "mr-1"]],
      template: function EquipmentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-card", 3)(1, "nb-card-header", 4)(2, "div", 5)(3, "h4")(4, "ngx-header-title", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(6, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(7, "div")(8, "button", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(10, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(11, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(12, "ngx-gauzy-button-action", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(13, "nb-card-body");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(14, EquipmentComponent_ng_template_14_Template, 4, 3, "ng-template", 10)(15, EquipmentComponent_ng_template_15_Template, 1, 3, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplateRefExtractor"] */ .C5r);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(17, EquipmentComponent_ng_template_17_Template, 7, 5, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplateRefExtractor"] */ .C5r)(19, EquipmentComponent_ng_template_19_Template, 4, 3, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplateRefExtractor"] */ .C5r);
        }
        if (rf & 2) {
          const gridLayout_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(16);
          const actionButtons_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(18);
          const visibleButton_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(20);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("nbSpinner", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("allowEmployee", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(6, 11, "EQUIPMENT_PAGE.HEADER"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("routerLink", "/pages/organization/equipment-sharing");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(10, 13, "BUTTONS.EQUIPMENT_SHARING"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("isDisable", ctx.disableButton)("buttonTemplate", actionButtons_r8)("componentName", ctx.viewComponentName)("buttonTemplateVisible", visibleButton_r9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.dataLayoutStyle === ctx.componentLayoutStyleEnum.TABLE)("ngIfElse", gridLayout_r7);
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_28__/* .RouterLink */ .Wk, _angular_common__WEBPACK_IMPORTED_MODULE_29__/* .NgIf */ .bT, _packages_ui_core_shared_src_lib_components_header_title_header_title_component__WEBPACK_IMPORTED_MODULE_30__/* .HeaderTitleComponent */ .X, _nebular_theme__WEBPACK_IMPORTED_MODULE_22__/* .NbCardComponent */ .SrT, _nebular_theme__WEBPACK_IMPORTED_MODULE_22__/* .NbCardBodyComponent */ .KH5, _nebular_theme__WEBPACK_IMPORTED_MODULE_22__/* .NbCardHeaderComponent */ .zJv, _nebular_theme__WEBPACK_IMPORTED_MODULE_22__/* .NbButtonComponent */ .YP2, _nebular_theme__WEBPACK_IMPORTED_MODULE_22__/* .NbIconComponent */ .tHu, _packages_ui_core_shared_src_lib_card_grid_card_grid_component__WEBPACK_IMPORTED_MODULE_31__/* .CardGridComponent */ .c, _nebular_theme__WEBPACK_IMPORTED_MODULE_22__/* .NbSpinnerDirective */ .zwc, angular2_smart_table__WEBPACK_IMPORTED_MODULE_32__/* .Angular2SmartTableComponent */ .T9, _packages_ui_core_shared_src_lib_gauzy_button_action_gauzy_button_action_component__WEBPACK_IMPORTED_MODULE_33__/* .GauzyButtonActionComponent */ .A, _packages_ui_core_shared_src_lib_smart_data_layout_pagination_pagination_v2_pagination_v2_component__WEBPACK_IMPORTED_MODULE_34__/* .PaginationV2Component */ .a, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__/* .TranslatePipe */ .D9],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.action[_ngcontent-%COMP%] {\n  box-shadow: var(--gauzy-shadow);\n  border: none;\n}\n.action[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}\n.action.info[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: var(--color-info-default);\n  color: white;\n  border-color: var(--color-info-default);\n}\n.action.info-text-1[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  color: var(--color-info-default);\n}\n.action.secondary[_ngcontent-%COMP%] {\n  color: #7e7e8f;\n}\n.action.success[_ngcontent-%COMP%] {\n  color: var(--color-success-default);\n}\n.action.warning[_ngcontent-%COMP%] {\n  color: rgb(245, 109, 88);\n}\n.action.orange[_ngcontent-%COMP%] {\n  color: rgb(255, 171, 45);\n}\n.action.primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n}\n.action.primary.soft[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: rgba(110, 73, 232, 0.1);\n}\n.action.select-nb[_ngcontent-%COMP%]     {\n  box-shadow: none;\n}\n.action.select-nb[_ngcontent-%COMP%]     .select-button {\n  box-shadow: var(--gauzy-shadow);\n  background: rgb(245, 245, 245);\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n.actions[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-2);\n  border-radius: var(--button-rectangle-border-radius);\n  padding: 2px 4px !important;\n}\n\n.gauzy-button-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n.card-custom-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n[_nghost-%COMP%]     input {\n  border-radius: var(--border-radius);\n  box-shadow: var(--gauzy-shadow) inset;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%], \n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   .table-scroll-container[_ngcontent-%COMP%], \n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .table-scroll-container[_ngcontent-%COMP%] {\n  flex-grow: 10;\n  max-height: unset;\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  border-radius: 0 0 var(--border-radius) var(--border-radius);\n}\n[dir=ltr]   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  padding: 1rem 0.5rem 1rem 18px;\n}\n[dir=rtl]   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  padding: 1rem 18px 1rem 0.5rem;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%], \n[_nghost-%COMP%]   nb-card-header[_ngcontent-%COMP%] {\n  border-radius: var(--border-radius);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  height: 100%;\n  border-radius: var(--border-radius);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-header[_ngcontent-%COMP%] {\n  flex: 0 1 auto;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  overflow: unset;\n  height: calc(100vh - var(--header-height) - var(--footer-height) - 11.5rem + 3.75rem);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-footer[_ngcontent-%COMP%] {\n  flex: 0 1 auto;\n}\n\n[nbButton].sharing.appearance-filled.status-primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  border: unset;\n  background-color: var(--color-primary-transparent-default);\n}\n\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  height: calc(100vh - var(--header-height) - var(--footer-height) - 11.5rem + 3.75rem - 0.5rem) !important;\n}"]
    });
  }
};
EquipmentComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_35__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__/* .UntilDestroy */ .d)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_35__/* .__metadata */ .Sn)("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__/* .TranslateService */ .c$, _nebular_theme__WEBPACK_IMPORTED_MODULE_22__/* .NbDialogService */ .S0W, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_23__/* .EquipmentService */ .m, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_24__/* .ToastrService */ .t, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_25__/* .Store */ .il, _angular_common_http__WEBPACK_IMPORTED_MODULE_26__/* .HttpClient */ .Qq, _angular_router__WEBPACK_IMPORTED_MODULE_27__/* .ActivatedRoute */ .nX])], EquipmentComponent);


/***/ }),

/***/ 51092:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: () => (/* binding */ AutoApproveComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14572);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56383);



function AutoApproveComponent_nb_icon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(0, "nb-icon", 2);
  }
}
function AutoApproveComponent_nb_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(0, "nb-icon", 3);
  }
}
let AutoApproveComponent = /*#__PURE__*/(() => {
  class AutoApproveComponent {
    static {
      this.ɵfac = function AutoApproveComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || AutoApproveComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: AutoApproveComponent,
        selectors: [["ngx-auto-approve"]],
        inputs: {
          value: "value",
          rowData: "rowData"
        },
        standalone: false,
        decls: 3,
        vars: 2,
        consts: [["status", "success", "icon", "checkmark", 4, "ngIf"], ["status", "danger", "icon", "close", 4, "ngIf"], ["status", "success", "icon", "checkmark"], ["status", "danger", "icon", "close"]],
        template: function AutoApproveComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, AutoApproveComponent_nb_icon_1_Template, 1, 0, "nb-icon", 0)(2, AutoApproveComponent_nb_icon_2_Template, 1, 0, "nb-icon", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.rowData.autoApproveShare);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", !ctx.rowData.autoApproveShare);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .NgIf */ .bT, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbIconComponent */ .tHu],
        encapsulation: 2
      });
    }
  }
  return AutoApproveComponent;
})();

/***/ }),

/***/ 59016:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   m: () => (/* binding */ EquipmentService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80189);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(64913);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26860);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45715);





let EquipmentService = /*#__PURE__*/(() => {
  class EquipmentService {
    constructor(http) {
      this.http = http;
      this.EQUIPMENT_URL = `${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_0__/* .API_PREFIX */ .m4}/equipment`;
    }
    getAll(relations, findInput) {
      const data = JSON.stringify({
        relations: relations || [],
        findInput
      });
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ ._)(this.http.get(`${this.EQUIPMENT_URL}`, {
        params: {
          data
        }
      }));
    }
    delete(id) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ ._)(this.http.delete(`${this.EQUIPMENT_URL}/${id}`));
    }
    save(equipment) {
      if (!equipment.id) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ ._)(this.http.post(this.EQUIPMENT_URL, equipment));
      } else {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ ._)(this.http.put(`${this.EQUIPMENT_URL}/${equipment.id}`, equipment));
      }
    }
    static {
      this.ɵfac = function EquipmentService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || EquipmentService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵinject"] */ .KVO(_angular_common_http__WEBPACK_IMPORTED_MODULE_3__/* .HttpClient */ .Qq));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineInjectable"] */ .jDH({
        token: EquipmentService,
        factory: EquipmentService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return EquipmentService;
})();

/***/ })

}]);