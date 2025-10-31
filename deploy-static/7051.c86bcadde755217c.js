"use strict";
(self["webpackChunkgauzy"] = self["webpackChunkgauzy"] || []).push([[7051,8927],{

/***/ 2502:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   U: () => (/* binding */ dateTimestampProvider)
/* harmony export */ });
const dateTimestampProvider = {
  now() {
    return (dateTimestampProvider.delegate || Date).now();
  },
  delegate: undefined
};
//# sourceMappingURL=dateTimestampProvider.js.map

/***/ }),

/***/ 6269:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ EmployeeMultiSelectModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14572);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10936);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56383);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19223);
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(38834);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);







let EmployeeMultiSelectModule = /*#__PURE__*/(() => {
  class EmployeeMultiSelectModule {
    static {
      this.ɵfac = function EmployeeMultiSelectModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || EmployeeMultiSelectModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .$C({
        type: EmployeeMultiSelectModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .CommonModule */ .MD, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .FormsModule */ .YN, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .ReactiveFormsModule */ .X1, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbSelectModule */ .VcP, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__/* .TranslateModule */ .h.forChild(), _shared_module__WEBPACK_IMPORTED_MODULE_5__/* .SharedModule */ .G]
      });
    }
  }
  return EmployeeMultiSelectModule;
})();

/***/ }),

/***/ 7718:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   m: () => (/* binding */ CrudService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53827);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26024);


class CrudService {
  constructor(http, API_URL) {
    this.http = http;
    this.API_URL = API_URL;
  }
  /**
   * The create() method accepts a partial model as an argument and returns the created model from the server.
   *
   * @param entity
   * @returns
   */
  create(entity) {
    return this.http.post(`${this.API_URL}`, entity).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__/* .take */ .s)(1));
  }
  /**
   * The get() method returns an Observable with a list of all existing resources.
   *
   * @returns
   */
  get(params) {
    return this.http.get(`${this.API_URL}`, {
      params: (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .toParams */ .SV)({
        ...params
      })
    });
  }
  /**
   * When we want to update an existing resource, we’ll use the update() method.
   *
   * @param id
   * @param entity
   * @returns
   */
  update(id, entity) {
    return this.http.put(`${this.API_URL}/${id}`, entity).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__/* .take */ .s)(1));
  }
  /**
   * When we want to delete an existing resource, we’ll use the delete() method.
   *
   * @param id
   * @returns
   */
  delete(id) {
    return this.http.delete(`${this.API_URL}/${id}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__/* .take */ .s)(1));
  }
}

/***/ }),

/***/ 11768:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ Scheduler)
/* harmony export */ });
/* harmony import */ var _scheduler_dateTimestampProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2502);

class Scheduler {
  constructor(schedulerActionCtor, now = Scheduler.now) {
    this.schedulerActionCtor = schedulerActionCtor;
    this.now = now;
  }
  schedule(work, delay = 0, state) {
    return new this.schedulerActionCtor(this, work).schedule(state, delay);
  }
}
Scheduler.now = _scheduler_dateTimestampProvider__WEBPACK_IMPORTED_MODULE_0__/* .dateTimestampProvider */ .U.now;
//# sourceMappingURL=Scheduler.js.map

/***/ }),

/***/ 14031:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   d: () => (/* binding */ ContactsComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(73014);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(64411);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26860);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(9620);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(45715);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(81236);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(73465);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(56383);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(19223);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(24237);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(57733);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(36950);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(73246);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(71181);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(72781);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(23423);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(35665);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(941);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(42433);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(15480);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(71924);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(35976);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(17134);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(26024);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(46076);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(64913);
/* harmony import */ var _invite_contact_invite_contact_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(68863);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47108);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(80801);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(21968);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(39457);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(27985);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(55101);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(56314);
/* harmony import */ var _packages_ui_core_shared_src_lib_card_grid_card_grid_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(49517);
/* harmony import */ var _packages_ui_core_shared_src_lib_favorite_toggle_favorite_toggle_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(6421);
/* harmony import */ var angular2_smart_table__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(52345);
/* harmony import */ var _packages_ui_core_shared_src_lib_gauzy_button_action_gauzy_button_action_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(45293);
/* harmony import */ var _packages_ui_core_shared_src_lib_smart_data_layout_pagination_pagination_v2_pagination_v2_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(3456);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(14572);
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(79475);
/* harmony import */ var _packages_ui_core_shared_src_lib_components_header_title_header_title_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(49072);
/* harmony import */ var _contact_mutation_contact_mutation_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90687);
/* harmony import */ var _table_components_contact_action_contact_action_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(23825);
































const _c0 = ["actionButtons"];
const _c1 = a0 => ({
  mutation: a0
});
function ContactsComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(1, "ngx-gauzy-button-action", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
    const actionButtons_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵreference"] */ .sdS(13);
    const visible_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵreference"] */ .sdS(15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("componentName", ctx_r0.viewComponentName)("isDisable", ctx_r0.disableButton)("buttonTemplate", actionButtons_r2)("buttonTemplateVisible", visible_r3);
  }
}
function ContactsComponent_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(1, "ga-contact-mutation", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("canceled", function ContactsComponent_ng_container_9_Template_ga_contact_mutation_canceled_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r4);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx_r0.cancel());
    })("addOrEditOrganizationContact", function ContactsComponent_ng_container_9_Template_ga_contact_mutation_addOrEditOrganizationContact_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r4);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx_r0.addOrEditOrganizationContact($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("contactType", ctx_r0.contactType)("organizationContact", ctx_r0.selectedOrganizationContact)("projectsWithoutOrganizationContacts", ctx_r0.projectsWithoutOrganizationContacts);
  }
}
function ContactsComponent_ng_template_10_ng_template_0_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(1, "ngx-pagination", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("source", ctx_r0.smartTableSource);
  }
}
function ContactsComponent_ng_template_10_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "div", 14)(1, "angular2-smart-table", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("userRowSelect", function ContactsComponent_ng_template_10_ng_template_0_Template_angular2_smart_table_userRowSelect_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r5);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx_r0.selectContact($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(3, ContactsComponent_ng_template_10_ng_template_0_ng_container_3_Template, 2, 1, "ng-container", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("settings", ctx_r0.settingsSmartTable)("source", ctx_r0.smartTableSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r0.smartTableSource);
  }
}
function ContactsComponent_ng_template_10_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "ga-card-grid", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("onSelectedItem", function ContactsComponent_ng_template_10_ng_template_1_Template_ga_card_grid_onSelectedItem_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r6);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx_r0.selectContact($event));
    })("scroll", function ContactsComponent_ng_template_10_ng_template_1_Template_ga_card_grid_scroll_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r6);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx_r0.onScroll());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("totalItems", ctx_r0.pagination == null ? null : ctx_r0.pagination.totalItems)("settings", ctx_r0.settingsSmartTable)("source", ctx_r0.organizationContacts);
  }
}
function ContactsComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(0, ContactsComponent_ng_template_10_ng_template_0_Template, 4, 3, "ng-template", 13)(1, ContactsComponent_ng_template_10_ng_template_1_Template, 1, 3, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplateRefExtractor"] */ .C5r);
  }
  if (rf & 2) {
    const gridLayout_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵreference"] */ .sdS(2);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r0.dataLayoutStyle === ctx_r0.componentLayoutStyleEnum.TABLE)("ngIfElse", gridLayout_r7);
  }
}
function ContactsComponent_ng_template_12_ngx_favorite_toggle_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "ngx-favorite-toggle", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("favoriteToggled", function ContactsComponent_ng_template_12_ngx_favorite_toggle_0_Template_ngx_favorite_toggle_favoriteToggled_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r8);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx_r0.onContactFavoriteToggled($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("entityType", "OrganizationContact")("entityId", ctx_r0.selectedOrganizationContact.id)("entityName", ctx_r0.selectedOrganizationContact.name)("disabled", ctx_r0.disableButton)("showLabel", false);
  }
}
function ContactsComponent_ng_template_12_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "div", 23)(1, "ngx-contact-action", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("updateResult", function ContactsComponent_ng_template_12_ng_template_1_Template_ngx_contact_action_updateResult_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r9);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx_r0.onUpdateResult($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(2, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("click", function ContactsComponent_ng_template_12_ng_template_1_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r9);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx_r0.navigateToContact(ctx_r0.selectedOrganizationContact));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(3, "nb-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(6, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("click", function ContactsComponent_ng_template_12_ng_template_1_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r9);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx_r0.editOrganizationContact(ctx_r0.selectedOrganizationContact));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(7, "nb-icon", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(10, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("click", function ContactsComponent_ng_template_12_ng_template_1_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r9);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx_r0.removeOrganizationContact(ctx_r0.selectedOrganizationContact == null ? null : ctx_r0.selectedOrganizationContact.id, ctx_r0.selectedOrganizationContact == null ? null : ctx_r0.selectedOrganizationContact.name));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(12, "nb-icon", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("rowData", ctx_r0.selectedOrganizationContact);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("disabled", !ctx_r0.selectedOrganizationContact && ctx_r0.disableButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(5, 7, "BUTTONS.VIEW"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("disabled", !ctx_r0.selectedOrganizationContact && ctx_r0.disableButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(9, 9, "BUTTONS.EDIT"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("disabled", !ctx_r0.selectedOrganizationContact && ctx_r0.disableButton)("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(11, 11, "BUTTONS.DELETE"));
  }
}
function ContactsComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(0, ContactsComponent_ng_template_12_ngx_favorite_toggle_0_Template, 1, 5, "ngx-favorite-toggle", 20)(1, ContactsComponent_ng_template_12_ng_template_1_Template, 13, 13, "ng-template", 21);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r0.selectedOrganizationContact);
  }
}
function ContactsComponent_ng_template_14_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("click", function ContactsComponent_ng_template_14_ng_template_0_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r10);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx_r0.invite());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(1, "nb-icon", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(4, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("click", function ContactsComponent_ng_template_14_ng_template_0_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r10);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx_r0.add());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(5, "nb-icon", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(3, 2, "BUTTONS.INVITE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(7, 4, "BUTTONS.ADD"), " ");
  }
}
function ContactsComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(0, ContactsComponent_ng_template_14_ng_template_0_Template, 8, 6, "ng-template", 21);
  }
}
let ContactsComponent = class ContactsComponent extends _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_2__/* .PaginationFilterBaseComponent */ .t {
  get contactType() {
    return this._contactType;
  }
  set contactType(value) {
    this._contactType = value;
  }
  constructor(organizationContactService, organizationProjectsService, toastrService, store, translateService, dialogService, route, countryService, cd, _router, http, genericFavoriteService) {
    super(translateService);
    this.organizationContactService = organizationContactService;
    this.organizationProjectsService = organizationProjectsService;
    this.toastrService = toastrService;
    this.store = store;
    this.translateService = translateService;
    this.dialogService = dialogService;
    this.route = route;
    this.countryService = countryService;
    this.cd = cd;
    this._router = _router;
    this.http = http;
    this.genericFavoriteService = genericFavoriteService;
    this.organizationContacts = [];
    this.projectsWithoutOrganizationContacts = [];
    this.dataLayoutStyle = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__/* .ComponentLayoutStyleEnum */ .IE.CARDS_GRID;
    this.componentLayoutStyleEnum = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__/* .ComponentLayoutStyleEnum */ .IE;
    this.contactOrganizationInviteStatus = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_4__/* .ContactOrganizationInviteStatus */ .$y;
    this.countries = [];
    this.disableButton = true;
    this.loading = false;
    this.favoriteContacts = [];
    this.contacts$ = this.subject$;
    this._refresh$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__/* .Subject */ .B();
    /*
     * Getter & Setter for contact type
     */
    this._contactType = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_4__/* .ContactType */ .Pm.CUSTOMER;
    this.countryService.find$.next(true);
  }
  ngOnInit() {
    var _this = this;
    this._applyTranslationOnSmartTable();
    this.route.data.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .M)(params => this.contactType = params.contactType), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .M)(() => this.setView()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .M)(() => this._loadSmartTableSettings()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__/* .untilDestroyed */ .s)(this)).subscribe();
    this.contacts$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .debounceTime */ .B)(100), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .M)(() => this.clearItem()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .M)(/*#__PURE__*/(0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A)(function* () {
      yield _this.loadProjectsWithoutOrganizationContacts();
      yield _this.getContacts();
    })), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__/* .untilDestroyed */ .s)(this)).subscribe();
    this.pagination$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .debounceTime */ .B)(100), (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_10__/* .distinctUntilChange */ .nI)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .M)(() => this.contacts$.next(true)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__/* .untilDestroyed */ .s)(this)).subscribe();
    const storeOrganization$ = this.store.selectedOrganization$;
    const storeEmployee$ = this.store.selectedEmployee$;
    (0,rxjs__WEBPACK_IMPORTED_MODULE_11__/* .combineLatest */ .z)([storeOrganization$, storeEmployee$]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .debounceTime */ .B)(300), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__/* .filter */ .p)(([organization]) => !!organization), (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_10__/* .distinctUntilChange */ .nI)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .M)(([organization, employee]) => {
      this.organization = organization;
      this.selectedEmployeeId = employee ? employee.id : null;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .M)(() => this._refresh$.next(true)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .M)(() => this.contacts$.next(true)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .M)(() => this.loadFavoriteContacts()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__/* .untilDestroyed */ .s)(this)).subscribe();
    this.route.queryParamMap.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__/* .filter */ .p)(params => !!params), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__/* .filter */ .p)(params => params.get('openAddDialog') === 'true'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .debounceTime */ .B)(1000), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .M)(() => this.add()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__/* .untilDestroyed */ .s)(this)).subscribe();
    this.route.queryParamMap.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__/* .filter */ .p)(params => !!params), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__/* .filter */ .p)(params => !!params.get('id')), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .M)(/*#__PURE__*/function () {
      var _ref2 = (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A)(function* (params) {
        return yield _this._initEditMethod(params.get('id'));
      });
      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__/* .untilDestroyed */ .s)(this)).subscribe();
    this.countryService.countries$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .M)(countries => this.countries = countries), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__/* .untilDestroyed */ .s)(this)).subscribe();
    this._refresh$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__/* .filter */ .p)(() => this.dataLayoutStyle === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__/* .ComponentLayoutStyleEnum */ .IE.CARDS_GRID), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .M)(() => this.refreshPagination()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .M)(() => this.organizationContacts = []), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__/* .untilDestroyed */ .s)(this)).subscribe();
  }
  _initEditMethod(id) {
    var _this2 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A)(function* () {
      if (id) {
        _this2.loading = true;
        const {
          tenantId
        } = _this2.store.user;
        try {
          const items = yield _this2.organizationContactService.getById(id, tenantId, ['projects', 'members', 'members.user', 'tags', 'contact']);
          if (items) {
            _this2.editOrganizationContact(items);
          }
        } catch (error) {
          _this2.toastrService.danger(_this2.getTranslation('TOASTR.TITLE.ERROR'));
        }
        _this2.loading = false;
        _this2.cd.detectChanges();
      }
    })();
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
      noDataMessage: this.getNoDataMessage(),
      columns: {
        name: {
          title: this.getTranslation('ORGANIZATIONS_PAGE.NAME'),
          width: '15%',
          type: 'custom',
          class: 'align-row',
          renderComponent: _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_13__/* .ContactWithTagsComponent */ .P,
          componentInitFunction: (instance, cell) => {
            instance.rowData = cell.getRow().getData();
            instance.value = cell.getValue();
          },
          filter: {
            type: 'custom',
            component: _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_14__/* .InputFilterComponent */ .U
          },
          filterFunction: name => {
            this.setFilter({
              field: 'name',
              search: name
            });
          }
        },
        members: {
          title: this.getTranslation('ORGANIZATIONS_PAGE.EDIT.TEAMS_PAGE.MEMBERS'),
          type: 'custom',
          isFilterable: false,
          renderComponent: _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_15__/* .EmployeeWithLinksComponent */ .j,
          componentInitFunction: (instance, cell) => {
            instance.rowData = cell.getRow().getData();
            instance.value = cell.getRawValue();
          }
        },
        primaryPhone: {
          title: this.getTranslation('CONTACTS_PAGE.PHONE'),
          type: 'string',
          filter: {
            type: 'custom',
            component: _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_14__/* .InputFilterComponent */ .U
          },
          filterFunction: primaryPhone => {
            this.setFilter({
              field: 'primaryPhone',
              search: primaryPhone
            });
          }
        },
        primaryEmail: {
          title: this.getTranslation('CONTACTS_PAGE.EMAIL'),
          type: 'string',
          filter: {
            type: 'custom',
            component: _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_14__/* .InputFilterComponent */ .U
          },
          filterFunction: primaryEmail => {
            this.setFilter({
              field: 'primaryEmail',
              search: primaryEmail
            });
          }
        },
        projects: {
          title: this.getTranslation('CONTACTS_PAGE.PROJECTS'),
          type: 'custom',
          isFilterable: false,
          renderComponent: _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_16__/* .ProjectComponent */ .t,
          componentInitFunction: (instance, cell) => {
            instance.rowData = cell.getRow().getData();
            instance.value = cell.getValue();
          }
        },
        country: {
          title: this.getTranslation('CONTACTS_PAGE.COUNTRY'),
          type: 'string',
          isFilterable: false,
          valuePrepareFunction: value => this.getCountry(value)
        },
        city: {
          title: this.getTranslation('CONTACTS_PAGE.CITY'),
          type: 'string',
          isFilterable: false
        }
      }
    };
  }
  getNoDataMessage() {
    let noDataMessage;
    switch (this.contactType) {
      case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_4__/* .ContactType */ .Pm.CLIENT:
        noDataMessage = this.getTranslation('SM_TABLE.NO_DATA.CLIENT');
        break;
      case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_4__/* .ContactType */ .Pm.LEAD:
        noDataMessage = this.getTranslation('SM_TABLE.NO_DATA.LEAD');
        break;
      default:
        noDataMessage = this.getTranslation('SM_TABLE.NO_DATA.CONTACT');
        break;
    }
    return noDataMessage;
  }
  onUpdateResult(params) {
    if (params) this.invite(params);
  }
  selectContact({
    isSelected,
    data
  }) {
    this.disableButton = !isSelected;
    this.selectedOrganizationContact = isSelected ? data : null;
  }
  removeOrganizationContact(id, name) {
    var _this3 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A)(function* () {
      const result = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_17__/* .firstValueFrom */ ._)(_this3.dialogService.open(_gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_18__/* .DeleteConfirmationComponent */ .u, {
        context: {
          recordType: 'Contact'
        }
      }).onClose);
      if (result) {
        yield _this3.organizationContactService.delete(_this3.selectedOrganizationContact ? _this3.selectedOrganizationContact.id : id);
        _this3.toastrService.success('NOTES.ORGANIZATIONS.EDIT_ORGANIZATIONS_CONTACTS.REMOVE_CONTACT', {
          name: _this3.selectedOrganizationContact ? _this3.selectedOrganizationContact.name : name
        });
        _this3._refresh$.next(true);
        _this3.contacts$.next(true);
      }
    })();
  }
  setView() {
    switch (this.contactType) {
      case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_4__/* .ContactType */ .Pm.CLIENT:
        this.viewComponentName = _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_19__/* .ComponentEnum */ .L.CLIENTS;
        break;
      case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_4__/* .ContactType */ .Pm.LEAD:
        this.viewComponentName = _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_19__/* .ComponentEnum */ .L.LEADS;
        break;
      default:
        this.viewComponentName = _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_19__/* .ComponentEnum */ .L.CUSTOMERS;
        break;
    }
    this.store.componentLayout$(this.viewComponentName).pipe((0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_10__/* .distinctUntilChange */ .nI)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .M)(componentLayout => this.dataLayoutStyle = componentLayout), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .M)(() => this.refreshPagination()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__/* .filter */ .p)(componentLayout => componentLayout === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__/* .ComponentLayoutStyleEnum */ .IE.CARDS_GRID), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .M)(() => this.organizationContacts = []), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .M)(() => this.contacts$.next(true)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__/* .untilDestroyed */ .s)(this)).subscribe();
  }
  /**
   * Manages adding or updating an organization contact and displays relevant notifications.
   *
   * @param organizationContact
   * @returns
   */
  addOrEditOrganizationContact(organizationContact) {
    var _this4 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A)(function* () {
      if (!_this4.organization) {
        return;
      }
      const contact = _this4.extractLocation(organizationContact.contact);
      const request = {
        ...organizationContact,
        contact
      };
      try {
        if (organizationContact.name) {
          const {
            name
          } = organizationContact;
          if (organizationContact.id) {
            yield _this4.organizationContactService.update(organizationContact.id, request);
            _this4.toastrService.success('NOTES.ORGANIZATIONS.EDIT_ORGANIZATIONS_CONTACTS.UPDATE_CONTACT', {
              name
            });
          } else {
            yield _this4.organizationContactService.create(request);
            _this4.toastrService.success('NOTES.ORGANIZATIONS.EDIT_ORGANIZATIONS_CONTACTS.ADD_CONTACT', {
              name
            });
          }
          _this4.showAddCard = !_this4.showAddCard;
          _this4._refresh$.next(true);
          _this4.contacts$.next(true);
        } else {
          _this4.toastrService.danger('NOTES.ORGANIZATIONS.EDIT_ORGANIZATIONS_CONTACTS.INVALID_CONTACT_DATA');
        }
      } catch (error) {
        _this4.toastrService.danger(error);
      }
    })();
  }
  /**
   * A contact object with organization and tenant details from the current organization context.
   *
   * @param contact The contact object to be enriched.
   * @returns An enriched contact object containing location details, organization, and tenant information.
   */
  extractLocation(contact) {
    if (!this.organization) {
      return;
    }
    const {
      id: organizationId,
      tenantId
    } = this.organization;
    return {
      ...contact,
      organizationId,
      organization: {
        id: organizationId
      },
      tenantId,
      tenant: {
        id: tenantId
      }
    };
  }
  /*
   * Register Smart Table Source Config
   */
  setSmartTableSource() {
    if (!this.organization) {
      return;
    }
    const {
      tenantId
    } = this.store.user;
    const {
      id: organizationId
    } = this.organization;
    try {
      this.smartTableSource = new _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_20__/* .ServerDataSource */ .N(this.http, {
        endPoint: `${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_21__/* .API_PREFIX */ .m4}/organization-contact/pagination`,
        relations: ['projects.members', 'members.user', 'tags', 'contact'],
        join: {
          alias: 'organization_contact',
          leftJoin: {
            members: 'organization_contact.members'
          }
        },
        where: {
          organizationId,
          tenantId,
          contactType: this.contactType,
          ...(this.selectedEmployeeId ? {
            members: [this.selectedEmployeeId]
          } : {}),
          ...(this.filters.where ? this.filters.where : {})
        },
        resultMap: contact => {
          return Object.assign({}, contact, {
            country: contact.contact ? contact.contact.country : '',
            city: contact.contact ? contact.contact.city : '',
            street: contact.contact ? contact.contact.address : '',
            street2: contact.contact ? contact.contact.address2 : '',
            postcode: contact.contact ? contact.contact.postcode : null,
            fax: contact.contact ? contact.contact.fax : '',
            website: contact.contact ? contact.contact.website : '',
            fiscalInformation: contact.contact ? contact.contact.fiscalInformation : ''
          });
        },
        finalize: () => {
          this.setPagination({
            ...this.getPagination(),
            totalItems: this.smartTableSource.count()
          });
          this.loading = false;
        }
      });
    } catch (error) {
      this.toastrService.danger(this.getTranslation('TOASTR.TITLE.ERROR'));
    }
  }
  getContacts() {
    var _this5 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A)(function* () {
      if (!_this5.organization) {
        return;
      }
      try {
        _this5.setSmartTableSource();
        const {
          activePage,
          itemsPerPage
        } = _this5.getPagination();
        _this5.smartTableSource.setPaging(activePage, itemsPerPage, false);
        yield _this5._loadGridLayoutData();
      } catch (error) {
        _this5.toastrService.danger(error);
      }
    })();
  }
  _loadGridLayoutData() {
    var _this6 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A)(function* () {
      if (_this6.dataLayoutStyle === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__/* .ComponentLayoutStyleEnum */ .IE.CARDS_GRID) {
        _this6.organizationContacts.push(...(yield _this6.smartTableSource.getElements()));
      }
    })();
  }
  loadProjectsWithoutOrganizationContacts() {
    var _this7 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A)(function* () {
      if (!_this7.organization) {
        return;
      }
      _this7.loading = true;
      const {
        tenantId
      } = _this7.store.user;
      const {
        id: organizationId
      } = _this7.organization;
      try {
        const {
          items
        } = yield _this7.organizationProjectsService.getAll(['organizationContact'], {
          organizationId,
          tenantId,
          organizationContactId: null
        });
        _this7.projectsWithoutOrganizationContacts = items;
      } catch (error) {
        _this7.toastrService.danger(_this7.getTranslation('TOASTR.TITLE.ERROR'));
      }
      _this7.cd.detectChanges();
    })();
  }
  cancel() {
    this.loading = true;
    this.selectedOrganizationContact = null;
    this.showAddCard = !this.showAddCard;
  }
  editOrganizationContact(organizationContact) {
    var _this8 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A)(function* () {
      yield _this8.loadProjectsWithoutOrganizationContacts();
      _this8.selectedOrganizationContact = organizationContact;
      _this8.showAddCard = true;
      _this8.loading = false;
    })();
  }
  add() {
    var _this9 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A)(function* () {
      _this9.selectedOrganizationContact = null;
      _this9.showAddCard = true;
    })();
  }
  /**
   * Redirect contact/client/customer to view page
   *
   * @returns
   */
  navigateToContact(selectedItem) {
    if (selectedItem) {
      this.selectContact({
        isSelected: true,
        data: selectedItem
      });
    }
    if (!this.selectedOrganizationContact) {
      return;
    }
    const {
      id
    } = this.selectedOrganizationContact;
    this._router.navigate([`/pages/contacts/view`, id]);
  }
  invite(selectedOrganizationContact) {
    var _this0 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A)(function* () {
      try {
        const {
          id: organizationId
        } = _this0.organization;
        const dialog = _this0.dialogService.open(_invite_contact_invite_contact_component__WEBPACK_IMPORTED_MODULE_22__/* .InviteContactComponent */ .j, {
          context: {
            organizationId,
            organizationContact: selectedOrganizationContact,
            contactType: _this0.contactType,
            selectedOrganization: _this0.organization
          }
        });
        const result = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_17__/* .firstValueFrom */ ._)(dialog.onClose);
        if (result) {
          _this0._refresh$.next(true);
          _this0.contacts$.next(true);
          _this0.toastrService.success('NOTES.ORGANIZATIONS.EDIT_ORGANIZATIONS_CONTACTS.INVITE_CONTACT', {
            name: result.name
          });
        }
      } catch (error) {
        _this0.toastrService.danger('NOTES.ORGANIZATIONS.EDIT_ORGANIZATIONS_CONTACTS.INVITE_CONTACT_ERROR');
      }
    })();
  }
  _applyTranslationOnSmartTable() {
    this.translateService.onLangChange.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .M)(() => this._loadSmartTableSettings()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__/* .untilDestroyed */ .s)(this)).subscribe();
  }
  /*
   * Clear selected item
   */
  clearItem() {
    this.selectContact({
      isSelected: false,
      data: null
    });
  }
  /**
   * Returns the country name based on the ISO code.
   *
   * @param isoCode - ISO code of the country.
   * @returns The country name or null if not found.
   */
  getCountry(isoCode) {
    // Logic to find the country based on the ISO code
    const country = this.countries.find(item => item.isoCode === isoCode);
    // Return the country name if found, otherwise return null
    return country?.country ?? null;
  }
  /**
   * Loads the list of favorite contacts for the current user or all for admin using the generic service.
   */
  loadFavoriteContacts() {
    var _this1 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A)(function* () {
      try {
        _this1.favoriteContacts = yield _this1.genericFavoriteService.loadFavorites(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_23__/* .BaseEntityEnum */ .k.OrganizationContact, _this1.organization, _this1.selectedEmployeeId || _this1.store.user?.employee?.id);
      } catch (error) {
        _this1.toastrService.danger(_this1.getTranslation('FAVORITES.ERROR.LOAD_FAILED'));
      }
    })();
  }
  /**
   * Handle contact favorite toggle event from the new component
   */
  onContactFavoriteToggled(_event) {
    // Reload favorites to keep the list in sync
    this.loadFavoriteContacts();
  }
  ngOnDestroy() {}
  static {
    this.ɵfac = function ContactsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ContactsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_24__/* .OrganizationContactService */ .$), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_25__/* .OrganizationProjectsService */ .d), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_26__/* .ToastrService */ .t), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_27__/* .Store */ .il), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_28__/* .TranslateService */ .c$), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_nebular_theme__WEBPACK_IMPORTED_MODULE_29__/* .NbDialogService */ .S0W), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_router__WEBPACK_IMPORTED_MODULE_30__/* .ActivatedRoute */ .nX), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_31__/* .CountryService */ .o), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* .ChangeDetectorRef */ .gRc), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_router__WEBPACK_IMPORTED_MODULE_30__/* .Router */ .Ix), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_common_http__WEBPACK_IMPORTED_MODULE_32__/* .HttpClient */ .Qq), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_33__/* .GenericFavoriteService */ .X));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineComponent"] */ .VBU({
      type: ContactsComponent,
      selectors: [["ngx-contacts-list"]],
      viewQuery: function ContactsComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵviewQuery"] */ .GBs(_c0, 7);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵqueryRefresh"] */ .mGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵloadQuery"] */ .lsd()) && (ctx.actionButtons = _t.first);
        }
      },
      inputs: {
        contactType: "contactType"
      },
      standalone: false,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
      decls: 16,
      vars: 10,
      consts: [["layout", ""], ["actionButtons", ""], ["visible", ""], ["gridLayout", ""], ["nbSpinnerStatus", "primary", "nbSpinnerSize", "large", 3, "nbSpinner"], [1, "d-flex", "flex-column", "pb-0"], [1, "main-header"], ["class", "align-self-end", 4, "ngIf"], [1, "custom-card", 3, "ngClass"], [4, "ngIf", "ngIfElse"], [1, "align-self-end"], [3, "componentName", "isDisable", "buttonTemplate", "buttonTemplateVisible"], [1, "w-100", 3, "canceled", "addOrEditOrganizationContact", "contactType", "organizationContact", "projectsWithoutOrganizationContacts"], [3, "ngIf", "ngIfElse"], [1, "table-scroll-container"], [2, "cursor", "pointer", 3, "userRowSelect", "settings", "source"], [1, "pagination-container", "align-self-end"], [4, "ngIf"], [3, "source"], [3, "onSelectedItem", "scroll", "totalItems", "settings", "source"], ["size", "small", "status", "basic", "spacing", "list", 3, "entityType", "entityId", "entityName", "disabled", "showLabel", "favoriteToggled", 4, "ngIf"], ["ngxPermissionsOnly", "ORG_CONTACT_EDIT"], ["size", "small", "status", "basic", "spacing", "list", 3, "favoriteToggled", "entityType", "entityId", "entityName", "disabled", "showLabel"], [1, "btn-group", "actions"], [3, "updateResult", "rowData"], ["nbButton", "", "status", "basic", "size", "small", 1, "action", "secondary", 3, "click", "disabled"], ["icon", "eye-outline", 1, "mr-1"], ["nbButton", "", "status", "basic", "size", "small", 1, "action", "primary", 3, "click", "disabled"], ["icon", "edit-outline", 1, "mr-1"], ["nbButton", "", "status", "basic", "size", "small", "size", "small", 1, "action", 3, "click", "disabled", "nbTooltip"], ["status", "danger", "icon", "trash-2-outline"], ["nbButton", "", "size", "small", "status", "basic", 1, "action", "info", 3, "click"], ["icon", "email-outline", 1, "mr-1"], ["nbButton", "", "size", "small", "status", "success", 1, "action", 3, "click"], ["icon", "plus-outline", 1, "mr-1"]],
      template: function ContactsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "nb-card", 4)(1, "nb-card-header", 5)(2, "div", 6)(3, "h4")(4, "ngx-header-title");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(6, "titlecase");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(7, ContactsComponent_div_7_Template, 2, 4, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(8, "nb-card-body", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(9, ContactsComponent_ng_container_9_Template, 2, 3, "ng-container", 9)(10, ContactsComponent_ng_template_10_Template, 3, 2, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplateRefExtractor"] */ .C5r);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(12, ContactsComponent_ng_template_12_Template, 2, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplateRefExtractor"] */ .C5r)(14, ContactsComponent_ng_template_14_Template, 1, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplateRefExtractor"] */ .C5r);
        }
        if (rf & 2) {
          const layout_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵreference"] */ .sdS(11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("nbSpinner", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(6, 6, ctx.contactType + "s"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngIf", !ctx.showAddCard);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpureFunction1"] */ .eq3(8, _c1, ctx.showAddCard));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.showAddCard)("ngIfElse", layout_r11);
        }
      },
      dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_29__/* .NbButtonComponent */ .YP2, _nebular_theme__WEBPACK_IMPORTED_MODULE_29__/* .NbCardComponent */ .SrT, _nebular_theme__WEBPACK_IMPORTED_MODULE_29__/* .NbCardBodyComponent */ .KH5, _nebular_theme__WEBPACK_IMPORTED_MODULE_29__/* .NbCardHeaderComponent */ .zJv, _nebular_theme__WEBPACK_IMPORTED_MODULE_29__/* .NbIconComponent */ .tHu, _nebular_theme__WEBPACK_IMPORTED_MODULE_29__/* .NbSpinnerDirective */ .zwc, _nebular_theme__WEBPACK_IMPORTED_MODULE_29__/* .NbTooltipDirective */ .BmQ, _packages_ui_core_shared_src_lib_card_grid_card_grid_component__WEBPACK_IMPORTED_MODULE_34__/* .CardGridComponent */ .c, _packages_ui_core_shared_src_lib_favorite_toggle_favorite_toggle_component__WEBPACK_IMPORTED_MODULE_35__/* .FavoriteToggleComponent */ .M, angular2_smart_table__WEBPACK_IMPORTED_MODULE_36__/* .Angular2SmartTableComponent */ .T9, _packages_ui_core_shared_src_lib_gauzy_button_action_gauzy_button_action_component__WEBPACK_IMPORTED_MODULE_37__/* .GauzyButtonActionComponent */ .A, _packages_ui_core_shared_src_lib_smart_data_layout_pagination_pagination_v2_pagination_v2_component__WEBPACK_IMPORTED_MODULE_38__/* .PaginationV2Component */ .a, _angular_common__WEBPACK_IMPORTED_MODULE_39__/* .NgClass */ .YU, _angular_common__WEBPACK_IMPORTED_MODULE_39__/* .NgIf */ .bT, ngx_permissions__WEBPACK_IMPORTED_MODULE_40__/* .NgxPermissionsDirective */ .f6, _packages_ui_core_shared_src_lib_components_header_title_header_title_component__WEBPACK_IMPORTED_MODULE_41__/* .HeaderTitleComponent */ .X, _contact_mutation_contact_mutation_component__WEBPACK_IMPORTED_MODULE_0__/* .ContactMutationComponent */ .F, _table_components_contact_action_contact_action_component__WEBPACK_IMPORTED_MODULE_42__/* .ContactActionComponent */ .C, _angular_common__WEBPACK_IMPORTED_MODULE_39__/* .TitleCasePipe */ .PV, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_28__/* .TranslatePipe */ .D9],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.action[_ngcontent-%COMP%] {\n  box-shadow: var(--gauzy-shadow);\n  border: none;\n}\n.action[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}\n.action.info[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: var(--color-info-default);\n  color: white;\n  border-color: var(--color-info-default);\n}\n.action.info-text-1[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  color: var(--color-info-default);\n}\n.action.secondary[_ngcontent-%COMP%] {\n  color: #7e7e8f;\n}\n.action.success[_ngcontent-%COMP%] {\n  color: var(--color-success-default);\n}\n.action.warning[_ngcontent-%COMP%] {\n  color: rgb(245, 109, 88);\n}\n.action.orange[_ngcontent-%COMP%] {\n  color: rgb(255, 171, 45);\n}\n.action.primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n}\n.action.primary.soft[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: rgba(110, 73, 232, 0.1);\n}\n.action.select-nb[_ngcontent-%COMP%]     {\n  box-shadow: none;\n}\n.action.select-nb[_ngcontent-%COMP%]     .select-button {\n  box-shadow: var(--gauzy-shadow);\n  background: rgb(245, 245, 245);\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n.actions[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-2);\n  border-radius: var(--button-rectangle-border-radius);\n  padding: 2px 4px !important;\n}\n\n.gauzy-button-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n.card-custom-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n[_nghost-%COMP%]     input {\n  border-radius: var(--border-radius);\n  box-shadow: var(--gauzy-shadow) inset;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%], \n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   .table-scroll-container[_ngcontent-%COMP%], \n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .table-scroll-container[_ngcontent-%COMP%] {\n  flex-grow: 10;\n  max-height: unset;\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  border-radius: 0 0 var(--border-radius) var(--border-radius);\n}\n[dir=ltr]   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  padding: 1rem 0.5rem 1rem 18px;\n}\n[dir=rtl]   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  padding: 1rem 18px 1rem 0.5rem;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%], \n[_nghost-%COMP%]   nb-card-header[_ngcontent-%COMP%] {\n  border-radius: var(--border-radius);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  height: 100%;\n  border-radius: var(--border-radius);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-header[_ngcontent-%COMP%] {\n  flex: 0 1 auto;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  overflow: unset;\n  height: calc(100vh - var(--header-height) - var(--footer-height) - 11.5rem + 3.75rem);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-footer[_ngcontent-%COMP%] {\n  flex: 0 1 auto;\n}\n\n.contact-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n.contact-list[_ngcontent-%COMP%]   .member-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  max-width: 340px;\n  width: 100%;\n}\n.contact-list[_ngcontent-%COMP%]   .contact-info[_ngcontent-%COMP%] {\n  padding-right: 12px;\n  display: flex;\n  flex-direction: column;\n}\n.contact-list[_ngcontent-%COMP%]   .contact-info[_ngcontent-%COMP%]   .info-line[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  font-size: 0.7em;\n  color: darkgray;\n}\n.contact-list[_ngcontent-%COMP%]   .contact-info[_ngcontent-%COMP%]   .info-line[_ngcontent-%COMP%]   .info-value[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  text-align: end;\n}\n.contact-list[_ngcontent-%COMP%]   .contact-info[_ngcontent-%COMP%]   .info-line[_ngcontent-%COMP%]   .info-value[_ngcontent-%COMP%]   .info-list-item[_ngcontent-%COMP%]:not(:last-child)::after {\n  content: \",\";\n  margin-right: 5px;\n}\n\n.main-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n[_nghost-%COMP%]   nb-card-body.mutation[_ngcontent-%COMP%] {\n  height: calc(100vh - var(--header-height) - var(--footer-height) - 11.5rem + 3.75rem + 4.75rem) !important;\n}"]
    });
  }
};
ContactsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_43__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__/* .UntilDestroy */ .d)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_43__/* .__metadata */ .Sn)("design:paramtypes", [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_24__/* .OrganizationContactService */ .$, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_25__/* .OrganizationProjectsService */ .d, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_26__/* .ToastrService */ .t, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_27__/* .Store */ .il, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_28__/* .TranslateService */ .c$, _nebular_theme__WEBPACK_IMPORTED_MODULE_29__/* .NbDialogService */ .S0W, _angular_router__WEBPACK_IMPORTED_MODULE_30__/* .ActivatedRoute */ .nX, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_31__/* .CountryService */ .o, _angular_core__WEBPACK_IMPORTED_MODULE_1__/* .ChangeDetectorRef */ .gRc, _angular_router__WEBPACK_IMPORTED_MODULE_30__/* .Router */ .Ix, _angular_common_http__WEBPACK_IMPORTED_MODULE_32__/* .HttpClient */ .Qq, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_33__/* .GenericFavoriteService */ .X])], ContactsComponent);


/***/ }),

/***/ 16061:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ AsyncAction)
/* harmony export */ });
/* harmony import */ var _Action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43273);
/* harmony import */ var _intervalProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(83451);
/* harmony import */ var _util_arrRemove__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27805);



class AsyncAction extends _Action__WEBPACK_IMPORTED_MODULE_0__/* .Action */ .r {
  constructor(scheduler, work) {
    super(scheduler, work);
    this.scheduler = scheduler;
    this.work = work;
    this.pending = false;
  }
  schedule(state, delay = 0) {
    var _a;
    if (this.closed) {
      return this;
    }
    this.state = state;
    const id = this.id;
    const scheduler = this.scheduler;
    if (id != null) {
      this.id = this.recycleAsyncId(scheduler, id, delay);
    }
    this.pending = true;
    this.delay = delay;
    this.id = (_a = this.id) !== null && _a !== void 0 ? _a : this.requestAsyncId(scheduler, this.id, delay);
    return this;
  }
  requestAsyncId(scheduler, _id, delay = 0) {
    return _intervalProvider__WEBPACK_IMPORTED_MODULE_1__/* .intervalProvider */ .f.setInterval(scheduler.flush.bind(scheduler, this), delay);
  }
  recycleAsyncId(_scheduler, id, delay = 0) {
    if (delay != null && this.delay === delay && this.pending === false) {
      return id;
    }
    if (id != null) {
      _intervalProvider__WEBPACK_IMPORTED_MODULE_1__/* .intervalProvider */ .f.clearInterval(id);
    }
    return undefined;
  }
  execute(state, delay) {
    if (this.closed) {
      return new Error('executing a cancelled action');
    }
    this.pending = false;
    const error = this._execute(state, delay);
    if (error) {
      return error;
    } else if (this.pending === false && this.id != null) {
      this.id = this.recycleAsyncId(this.scheduler, this.id, null);
    }
  }
  _execute(state, _delay) {
    let errored = false;
    let errorValue;
    try {
      this.work(state);
    } catch (e) {
      errored = true;
      errorValue = e ? e : new Error('Scheduled action threw falsy error');
    }
    if (errored) {
      this.unsubscribe();
      return errorValue;
    }
  }
  unsubscribe() {
    if (!this.closed) {
      const {
        id,
        scheduler
      } = this;
      const {
        actions
      } = scheduler;
      this.work = this.state = this.scheduler = null;
      this.pending = false;
      (0,_util_arrRemove__WEBPACK_IMPORTED_MODULE_2__/* .arrRemove */ .o)(actions, this);
      if (id != null) {
        this.id = this.recycleAsyncId(scheduler, id, null);
      }
      this.delay = null;
      super.unsubscribe();
    }
  }
}
//# sourceMappingURL=AsyncAction.js.map

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

/***/ 23825:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ ContactActionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56383);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14572);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19223);






function ContactActionComponent_button_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function ContactActionComponent_button_0_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.invite(ctx_r1.rowData));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "nb-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI("", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(3, 1, "BUTTONS.INVITE"), "\n");
  }
}
function ContactActionComponent_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function ContactActionComponent_button_1_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.invite(ctx_r1.rowData));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "nb-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI("", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(3, 1, "BUTTONS.INVITE_AGAIN"), "\n");
  }
}
let ContactActionComponent = /*#__PURE__*/(() => {
  class ContactActionComponent {
    constructor() {
      this.updateResult = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .bkB();
    }
    invite(data) {
      this.updateResult.emit(data);
    }
    static {
      this.ɵfac = function ContactActionComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || ContactActionComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: ContactActionComponent,
        selectors: [["ngx-contact-action"]],
        inputs: {
          rowData: "rowData",
          layout: "layout",
          value: "value"
        },
        outputs: {
          updateResult: "updateResult"
        },
        standalone: false,
        decls: 2,
        vars: 2,
        consts: [["size", "small", "class", "action", "nbButton", "", "status", "success", 3, "click", 4, "ngIf"], ["size", "small", "class", "action info-text-1", "status", "basic", "nbButton", "", 3, "click", 4, "ngIf"], ["size", "small", "nbButton", "", "status", "success", 1, "action", 3, "click"], ["icon", "email-outline", 1, "mr-1"], ["size", "small", "status", "basic", "nbButton", "", 1, "action", "info-text-1", 3, "click"]],
        template: function ContactActionComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(0, ContactActionComponent_button_0_Template, 4, 3, "button", 0)(1, ContactActionComponent_button_1_Template, 4, 3, "button", 1);
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", !(ctx.rowData == null ? null : ctx.rowData.inviteStatus) || (ctx.rowData == null ? null : ctx.rowData.inviteStatus) === "NOT_INVITED");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", (ctx.rowData == null ? null : ctx.rowData.inviteStatus) === "INVITED");
          }
        },
        dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbButtonComponent */ .YP2, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbIconComponent */ .tHu, _angular_common__WEBPACK_IMPORTED_MODULE_2__/* .NgIf */ .bT, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__/* .TranslatePipe */ .D9],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.action[_ngcontent-%COMP%] {\n  box-shadow: var(--gauzy-shadow);\n  border: none;\n}\n.action[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}\n.action.info[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: var(--color-info-default);\n  color: white;\n  border-color: var(--color-info-default);\n}\n.action.info-text-1[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  color: var(--color-info-default);\n}\n.action.secondary[_ngcontent-%COMP%] {\n  color: #7e7e8f;\n}\n.action.success[_ngcontent-%COMP%] {\n  color: var(--color-success-default);\n}\n.action.warning[_ngcontent-%COMP%] {\n  color: rgb(245, 109, 88);\n}\n.action.orange[_ngcontent-%COMP%] {\n  color: rgb(255, 171, 45);\n}\n.action.primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n}\n.action.primary.soft[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: rgba(110, 73, 232, 0.1);\n}\n.action.select-nb[_ngcontent-%COMP%]     {\n  box-shadow: none;\n}\n.action.select-nb[_ngcontent-%COMP%]     .select-button {\n  box-shadow: var(--gauzy-shadow);\n  background: rgb(245, 245, 245);\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n.actions[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-2);\n  border-radius: var(--button-rectangle-border-radius);\n  padding: 2px 4px !important;\n}\n\n.gauzy-button-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n.card-custom-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n[_nghost-%COMP%]     input {\n  border-radius: var(--border-radius);\n  box-shadow: var(--gauzy-shadow) inset;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%], \n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   .table-scroll-container[_ngcontent-%COMP%], \n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .table-scroll-container[_ngcontent-%COMP%] {\n  flex-grow: 10;\n  max-height: unset;\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  border-radius: 0 0 var(--border-radius) var(--border-radius);\n}\n[dir=ltr]   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  padding: 1rem 0.5rem 1rem 18px;\n}\n[dir=rtl]   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  padding: 1rem 18px 1rem 0.5rem;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%], \n[_nghost-%COMP%]   nb-card-header[_ngcontent-%COMP%] {\n  border-radius: var(--border-radius);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  height: 100%;\n  border-radius: var(--border-radius);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-header[_ngcontent-%COMP%] {\n  flex: 0 1 auto;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  overflow: unset;\n  height: calc(100vh - var(--header-height) - var(--footer-height) - 11.5rem + 3.75rem);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-footer[_ngcontent-%COMP%] {\n  flex: 0 1 auto;\n}\n\n.contact-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n.contact-list[_ngcontent-%COMP%]   .member-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  max-width: 340px;\n  width: 100%;\n}\n.contact-list[_ngcontent-%COMP%]   .contact-info[_ngcontent-%COMP%] {\n  padding-right: 12px;\n  display: flex;\n  flex-direction: column;\n}\n.contact-list[_ngcontent-%COMP%]   .contact-info[_ngcontent-%COMP%]   .info-line[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  font-size: 0.7em;\n  color: darkgray;\n}\n.contact-list[_ngcontent-%COMP%]   .contact-info[_ngcontent-%COMP%]   .info-line[_ngcontent-%COMP%]   .info-value[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  text-align: end;\n}\n.contact-list[_ngcontent-%COMP%]   .contact-info[_ngcontent-%COMP%]   .info-line[_ngcontent-%COMP%]   .info-value[_ngcontent-%COMP%]   .info-list-item[_ngcontent-%COMP%]:not(:last-child)::after {\n  content: \",\";\n  margin-right: 5px;\n}\n\n.main-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n[_nghost-%COMP%]   nb-card-body.mutation[_ngcontent-%COMP%] {\n  height: calc(100vh - var(--header-height) - var(--footer-height) - 11.5rem + 3.75rem + 4.75rem) !important;\n}"]
      });
    }
  }
  return ContactActionComponent;
})();

/***/ }),

/***/ 27775:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: () => (/* binding */ ContactsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(908);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17785);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73465);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4106);
/* harmony import */ var _contacts_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14031);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(26860);






const CONTACT_VIEW_PERMISSION = {
  permissions: {
    only: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__/* .PermissionsEnum */ .U.ALL_ORG_EDIT, _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__/* .PermissionsEnum */ .U.ORG_CONTACT_VIEW],
    redirectTo: '/pages/contacts/visitors'
  }
};
const routes = [{
  path: '',
  redirectTo: 'customers',
  pathMatch: 'full'
}, {
  path: 'visitors',
  loadChildren: () => Promise.all(/* import() */[__webpack_require__.e(2202), __webpack_require__.e(2759), __webpack_require__.e(166), __webpack_require__.e(8180), __webpack_require__.e(9099), __webpack_require__.e(5774), __webpack_require__.e(170), __webpack_require__.e(7178), __webpack_require__.e(1458), __webpack_require__.e(543), __webpack_require__.e(6588), __webpack_require__.e(1750), __webpack_require__.e(7478), __webpack_require__.e(8956), __webpack_require__.e(9084), __webpack_require__.e(4373), __webpack_require__.e(5350), __webpack_require__.e(3213), __webpack_require__.e(5110), __webpack_require__.e(2180), __webpack_require__.e(1588), __webpack_require__.e(9867), __webpack_require__.e(6161), __webpack_require__.e(7288), __webpack_require__.e(6089), __webpack_require__.e(6622), __webpack_require__.e(9860), __webpack_require__.e(1760), __webpack_require__.e(7204), __webpack_require__.e(3812), __webpack_require__.e(1707), __webpack_require__.e(236), __webpack_require__.e(1297), __webpack_require__.e(7483), __webpack_require__.e(4243), __webpack_require__.e(3734), __webpack_require__.e(588), __webpack_require__.e(6076), __webpack_require__.e(1232), __webpack_require__.e(7007), __webpack_require__.e(4445), __webpack_require__.e(5398), __webpack_require__.e(4232), __webpack_require__.e(8264), __webpack_require__.e(1094), __webpack_require__.e(427), __webpack_require__.e(7607), __webpack_require__.e(7140), __webpack_require__.e(7088), __webpack_require__.e(4916), __webpack_require__.e(5684), __webpack_require__.e(9882), __webpack_require__.e(5379), __webpack_require__.e(6747), __webpack_require__.e(2076), __webpack_require__.e(4946)]).then(__webpack_require__.bind(__webpack_require__, 36747)).then(m => m.WorkInProgressModule),
  data: {
    selectors: {
      project: false,
      employee: false,
      date: false,
      organization: false
    }
  }
}, {
  path: 'clients',
  component: _contacts_component__WEBPACK_IMPORTED_MODULE_0__/* .ContactsComponent */ .d,
  canActivate: [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_2__/* .PermissionsGuard */ .a],
  data: {
    ...CONTACT_VIEW_PERMISSION,
    selectors: {
      project: false,
      date: true
    },
    contactType: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__/* .ContactType */ .Pm.CLIENT
  }
}, {
  path: 'customers',
  component: _contacts_component__WEBPACK_IMPORTED_MODULE_0__/* .ContactsComponent */ .d,
  canActivate: [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_2__/* .PermissionsGuard */ .a],
  data: {
    ...CONTACT_VIEW_PERMISSION,
    selectors: {
      project: false,
      date: true
    },
    contactType: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__/* .ContactType */ .Pm.CUSTOMER
  }
}, {
  path: 'leads',
  component: _contacts_component__WEBPACK_IMPORTED_MODULE_0__/* .ContactsComponent */ .d,
  canActivate: [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_2__/* .PermissionsGuard */ .a],
  data: {
    ...CONTACT_VIEW_PERMISSION,
    selectors: {
      project: false,
      date: true
    },
    contactType: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__/* .ContactType */ .Pm.LEAD
  }
}, {
  path: 'view/:id',
  loadChildren: () => __webpack_require__.e(/* import() */ 6489).then(__webpack_require__.bind(__webpack_require__, 56489)).then(m => m.ContactViewModule),
  data: {
    ...CONTACT_VIEW_PERMISSION,
    selectors: {
      project: false,
      date: false
    }
  }
}];
let ContactsRoutingModule = /*#__PURE__*/(() => {
  class ContactsRoutingModule {
    static {
      this.ɵfac = function ContactsRoutingModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || ContactsRoutingModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdefineNgModule"] */ .$C({
        type: ContactsRoutingModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__/* .RouterModule */ .iI.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_5__/* .RouterModule */ .iI]
      });
    }
  }
  return ContactsRoutingModule;
})();

/***/ }),

/***/ 35665:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: () => (/* binding */ ServerDataSource)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(80189);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(79708);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39855);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(56891);
/* harmony import */ var angular2_smart_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52345);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(26024);
/* harmony import */ var _server_source_conf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59395);





class ServerDataSource extends angular2_smart_table__WEBPACK_IMPORTED_MODULE_0__/* .LocalDataSource */ .h0 {
  constructor(http, conf = {}) {
    super();
    this.http = http;
    this.lastRequestCount = 0;
    this.conf = new _server_source_conf__WEBPACK_IMPORTED_MODULE_1__/* .ServerSourceConf */ .b(conf);
    if (!this.conf.endPoint) {
      throw new Error('At least endPoint must be specified as a configuration of the server data source.');
    }
  }
  count() {
    return this.lastRequestCount;
  }
  getData() {
    return this.data;
  }
  getElements() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__/* .firstValueFrom */ ._)(this.requestElements().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .map */ .T)(res => {
      this.lastRequestCount = this.extractTotalFromResponse(res);
      this.data = this.extractDataFromResponse(res);
      return this.data;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .tap */ .M)(() => {
      if (this.conf.finalize) {
        this.conf.finalize();
      }
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .catchError */ .W)(error => {
      if (this.conf.finalize) {
        this.conf.finalize();
      }
      // failed from server then call finalize method
      throw new Error(error);
    })));
  }
  /**
   * Extracts array of data from server response
   * @param res
   * @returns {any}
   */
  extractDataFromResponse(res) {
    const rawData = res.body;
    let data = !!this.conf.dataKey ? rawData[this.conf.dataKey] : rawData;
    try {
      if (data instanceof Array) {
        return this.conf.resultMap ? data.map(this.conf.resultMap).filter(Boolean) : data;
      }
      throw new Error(`Data must be an array. Please check that data extracted from the server response by the key '${this.conf.dataKey}' exists and is array.`);
    } catch (error) {
      console.log(`Failed to extract data from response: ${error}`);
      return data;
    }
  }
  /**
   * Extracts total rows count from the server response
   * Looks for the count in the headers first, then in the response body
   * @param res
   * @returns {any}
   */
  extractTotalFromResponse(res) {
    if (res.headers.has(this.conf.totalKey)) {
      return +res.headers.get(this.conf.totalKey);
    } else {
      const rawData = res.body;
      return rawData[this.conf.totalKey] || 0;
    }
  }
  requestElements() {
    let httpParams = this.createRequestParams();
    return this.http.get(this.conf.endPoint, {
      params: httpParams,
      observe: 'response'
    });
  }
  createRequestParams() {
    const requestParams = {
      ...(this.conf.where ? {
        where: this.conf.where
      } : {}),
      ...(this.conf.join ? {
        join: this.conf.join
      } : {}),
      ...(this.conf.relations ? {
        relations: this.conf.relations
      } : {}),
      ...(this.conf.withDeleted ? {
        withDeleted: this.conf.withDeleted
      } : {}),
      ...((0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_6__/* .isNotEmpty */ .hj)(this.conf.select) ? {
        select: this.conf.select
      } : {}),
      ...this.addSortRequestParams(),
      ...this.addFilterRequestParams(),
      ...this.addPagerRequestParams()
    };
    return (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_6__/* .toParams */ .SV)(requestParams);
  }
  /**
   * Adds sorting parameters to the request based on the sorting configuration.
   *
   * This function processes the `sortConf` configuration and extracts the field
   * and its direction (ascending or descending) to create a sorting object.
   * If a field does not have a valid direction, it will be skipped, and a warning
   * will be logged. The resulting sorting parameters are returned as part of an
   * object that can be used in a request.
   *
   * @returns {Object} An object containing the sorting parameters.
   */
  addSortRequestParams() {
    if (this.sortConf) {
      // Initialize an object to hold sorting orders
      const orders = {};
      // Iterate through the sort configuration array
      this.sortConf.forEach(fieldConf => {
        // Ensure the field configuration has a valid direction
        if (fieldConf.direction) {
          // Convert direction to uppercase (e.g., ASC or DESC) and add it to orders
          orders[fieldConf.field] = fieldConf.direction.toUpperCase();
        } else {
          // Log a warning if the direction is not defined
          console.warn(`Direction is not defined for field: ${fieldConf.field}`);
        }
      });
      // Return the sorting orders wrapped in the expected format
      return {
        [this.conf.sortDirKey]: orders
      };
    } else {
      // Return an empty object if there is no sorting configuration
      return {};
    }
  }
  /**
   * Add additional smart datatables filters to the request parameters.
   *
   * @returns {Object} The constructed filter object for request parameters.
   */
  addFilterRequestParams() {
    // Check if filter configuration is defined
    if (!this.filterConf) {
      // If not defined, return an empty object
      return {};
    }
    // Initialize an object to store filter values
    const filters = {};
    // Iterate over each filter configuration
    this.filterConf.forEach(({
      field,
      search
    }) => {
      // Check if search value is truthy, and add it to filters
      if (search) {
        filters[field] = search;
      }
    });
    // Construct and return the final filter object with the specified key
    return {
      [this.conf.filterFieldKey]: filters
    };
  }
  addPagerRequestParams() {
    try {
      if (this.pagingConf) {
        if (typeof this.pagingConf['page'] === 'number' && typeof this.pagingConf['perPage'] === 'number') {
          return {
            [this.conf.pagerPageKey]: this.pagingConf['page'],
            [this.conf.pagerLimitKey]: this.pagingConf['perPage']
          };
        }
        return {};
      } else {
        return {};
      }
    } catch (error) {
      console.log('Error while retrieving pagination configuration', error);
      return {};
    }
  }
}

/***/ }),

/***/ 36902:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: () => (/* binding */ AsyncScheduler)
/* harmony export */ });
/* harmony import */ var _Scheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11768);

class AsyncScheduler extends _Scheduler__WEBPACK_IMPORTED_MODULE_0__/* .Scheduler */ ._ {
  constructor(SchedulerAction, now = _Scheduler__WEBPACK_IMPORTED_MODULE_0__/* .Scheduler */ ._.now) {
    super(SchedulerAction, now);
    this.actions = [];
    this._active = false;
  }
  flush(action) {
    const {
      actions
    } = this;
    if (this._active) {
      actions.push(action);
      return;
    }
    let error;
    this._active = true;
    do {
      if (error = action.execute(action.state, action.delay)) {
        break;
      }
    } while (action = actions.shift());
    this._active = false;
    if (error) {
      while (action = actions.shift()) {
        action.unsubscribe();
      }
      throw error;
    }
  }
}
//# sourceMappingURL=AsyncScheduler.js.map

/***/ }),

/***/ 43273:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   r: () => (/* binding */ Action)
/* harmony export */ });
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(60640);

class Action extends _Subscription__WEBPACK_IMPORTED_MODULE_0__/* .Subscription */ .yU {
  constructor(scheduler, work) {
    super();
  }
  schedule(state, delay = 0) {
    return this;
  }
}
//# sourceMappingURL=Action.js.map

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

/***/ 46880:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: () => (/* binding */ FileUploaderModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14572);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10936);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56383);
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(29087);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19223);
/* harmony import */ var _directives_directives_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(78818);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);








let FileUploaderModule = /*#__PURE__*/(() => {
  class FileUploaderModule {
    static {
      this.ɵfac = function FileUploaderModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || FileUploaderModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .$C({
        type: FileUploaderModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .CommonModule */ .MD, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .FormsModule */ .YN, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .ReactiveFormsModule */ .X1, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbButtonModule */ .P5N, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbSpinnerModule */ .gYs, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__/* .TranslateModule */ .h.forChild(), _directives_directives_module__WEBPACK_IMPORTED_MODULE_5__/* .DirectivesModule */ .h, ng2_file_upload__WEBPACK_IMPORTED_MODULE_6__/* .FileUploadModule */ .eB]
      });
    }
  }
  return FileUploaderModule;
})();

/***/ }),

/***/ 55101:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   u: () => (/* binding */ DeleteConfirmationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56383);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14572);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19223);





function DeleteConfirmationComponent_span_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(2, 1, "FORM.DELETE_CONFIRMATION.RECORD"), " ");
  }
}
let DeleteConfirmationComponent = /*#__PURE__*/(() => {
  class DeleteConfirmationComponent {
    constructor(dialogRef) {
      this.dialogRef = dialogRef;
      this.isRecord = true;
    }
    close() {
      this.dialogRef.close();
    }
    delete() {
      this.dialogRef.close('ok');
    }
    static {
      this.ɵfac = function DeleteConfirmationComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || DeleteConfirmationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbDialogRef */ .ybQ));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: DeleteConfirmationComponent,
        selectors: [["ga-delete-confirmation"]],
        standalone: false,
        decls: 21,
        vars: 16,
        consts: [[1, "center"], [1, "cancel"], [1, "fas", "fa-times", 3, "click"], [1, "title"], [4, "ngIf"], ["status", "basic", "outline", "", "nbButton", "", 3, "click"], ["status", "danger", "nbButton", "", 1, "mr-3", "ml-3", 3, "click"]],
        template: function DeleteConfirmationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-card", 0)(1, "nb-card-header")(2, "span", 1)(3, "i", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function DeleteConfirmationComponent_Template_i_click_3_listener() {
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
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(12, DeleteConfirmationComponent_span_12_Template, 3, 3, "span", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(13, "? ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(14, "nb-card-footer")(15, "button", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function DeleteConfirmationComponent_Template_button_click_15_listener() {
              return ctx.close();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(17, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(18, "button", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function DeleteConfirmationComponent_Template_button_click_18_listener() {
              return ctx.delete();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(20, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(6, 6, "FORM.CONFIRM"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate2"] */ .Lme(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(10, 8, "FORM.DELETE_CONFIRMATION.SURE"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(11, 10, ctx.recordType), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.isRecord);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(17, 12, "BUTTONS.CANCEL"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(20, 14, "BUTTONS.OK"), " ");
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__/* .NgIf */ .bT, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbButtonComponent */ .YP2, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbCardComponent */ .SrT, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbCardBodyComponent */ .KH5, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbCardFooterComponent */ .VDm, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbCardHeaderComponent */ .zJv, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__/* .TranslatePipe */ .D9],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   i[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n}\n[dir=ltr]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n[dir=rtl]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--gauzy-text-color-1);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(245, 109, 88, 0.3);\n  border-width: 2px;\n  color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(245, 109, 88, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 16px;\n  letter-spacing: 0em;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(126, 126, 143, 0.3);\n  border-width: 2px;\n  color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(126, 126, 143, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(37, 184, 105, 0.3);\n  border-width: 2px;\n  color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(37, 184, 105, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[disabled][_ngcontent-%COMP%], \n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic.btn-disabled[_ngcontent-%COMP%] {\n  background-color: var(--button-outline-basic-disabled-background-color);\n  border-color: var(--button-outline-basic-disabled-border-color);\n  color: var(--button-outline-basic-disabled-text-color);\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].primary.appearance-filled.status-primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  border: unset;\n  background-color: var(--color-primary-transparent-default);\n  box-shadow: var(--gauzy-shadow) 0, 0, 0, 0.15;\n}\n[dir=ltr]   [_nghost-%COMP%]     input, \n[dir=ltr]   [_nghost-%COMP%]     textarea {\n  text-align: start;\n}\n[dir=rtl]   [_nghost-%COMP%]     input, \n[dir=rtl]   [_nghost-%COMP%]     textarea {\n  text-align: end;\n}\n[_nghost-%COMP%]     input, \n[_nghost-%COMP%]     nb-select.appearance-outline.status-basic .select-button, \n[_nghost-%COMP%]     .ng-select .ng-select-container {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n  height: 42px !important;\n}\n[_nghost-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder, \n[_nghost-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {\n  top: unset !important;\n}\n[_nghost-%COMP%]     label, \n[_nghost-%COMP%]     .label {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  color: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]     textarea {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n}\n[_nghost-%COMP%]     .ng-select .ng-select-container input, \n[_nghost-%COMP%]     nb-tag-list input {\n  background-color: unset !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n}\n\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: nb-theme(gauzy-card-1);\n}\n[_nghost-%COMP%]   .center[_ngcontent-%COMP%] {\n  width: 300px;\n}"]
      });
    }
  }
  return DeleteConfirmationComponent;
})();

/***/ }),

/***/ 57354:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O: () => (/* binding */ EmployeeSelectComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73014);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(55598);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10936);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4644);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(39855);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(39938);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(52738);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4478);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(41598);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(17785);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(88319);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(28822);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(71924);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(14572);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(56383);
/* harmony import */ var _components_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(32386);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(19223);

















function EmployeeSelectComponent_label_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "label", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(2, 1, ctx_r0.label));
  }
}
function EmployeeSelectComponent_ng_template_1_nb_option_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-option", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "ngx-avatar", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const employee_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("value", employee_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("src", employee_r3.user == null ? null : employee_r3.user.imageUrl)("name", employee_r3.user == null ? null : employee_r3.user.name)("isOption", true);
  }
}
function EmployeeSelectComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-select", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("selectedChange", function EmployeeSelectComponent_ng_template_1_Template_nb_select_selectedChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r0.onMembersSelected($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayListener"] */ .mxI("selectedChange", function EmployeeSelectComponent_ng_template_1_Template_nb_select_selectedChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayBindingSet"] */ .DH7(ctx_r0.preSelected, $event) || (ctx_r0.preSelected = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(2, EmployeeSelectComponent_ng_template_1_nb_option_2_Template, 2, 4, "nb-option", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("formControl", ctx_r0.select)("multiple", ctx_r0.multiple)("disabled", ctx_r0.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayProperty"] */ .R50("selected", ctx_r0.preSelected);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(1, 6, ctx_r0.placeholder));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx_r0.employees);
  }
}
let EmployeeSelectComponent = /*#__PURE__*/(() => {
  let EmployeeSelectComponent = class EmployeeSelectComponent {
    set reset(value) {
      if (value) {
        if (this.multiple) {
          this.select.setValue([]);
          this.select.updateValueAndValidity();
        } else {
          this.select.reset();
        }
      }
    }
    get allEmployees() {
      return this._allEmployees;
    }
    set allEmployees(value) {
      this._allEmployees = value;
      this.employees = this._allEmployees;
    }
    get selectedEmployeeIds() {
      return this.val;
    }
    set selectedEmployeeIds(value) {
      this.preSelected = value;
      this.select.setValue(value);
      this.select.updateValueAndValidity();
    }
    set employees(employees) {
      this._employees = employees;
      this.onLoadEmployees.emit(employees);
    }
    get employees() {
      return this._employees;
    }
    constructor(employeesService, store, dateRangePickerBuilderService) {
      this.employeesService = employeesService;
      this.store = store;
      this.dateRangePickerBuilderService = dateRangePickerBuilderService;
      /**
       * Getter & Setter for employees
       */
      this._employees = [];
      this.selectedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .bkB();
      this.onLoadEmployees = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .bkB();
      this.multiple = true;
      this.label = 'FORM.PLACEHOLDERS.ADD_REMOVE_EMPLOYEES';
      this.disabled = false;
      this.placeholder = 'FORM.PLACEHOLDERS.ADD_REMOVE_EMPLOYEES';
      this.select = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .FormControl */ .MJ();
      this.val = null;
      this.changeValue$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__/* .Subject */ .B();
      this.onChange = () => {};
      this.onTouched = () => {};
      this.organization = this.store.selectedOrganization;
    }
    set employeeId(value) {
      this.changeValue$.next(value);
    }
    get employeeId() {
      return this.val;
    }
    ngOnInit() {
      var _this = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(function* () {
        _this.changeValue$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .debounceTime */ .B)(100), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .untilDestroyed */ .s)(_this)).subscribe(value => {
          _this.checkForMultiSelectValue(value);
          _this.onChange(_this.val);
        });
        _this.select.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .M)(value => _this.employeeId = value), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .untilDestroyed */ .s)(_this)).subscribe();
        const selectedDateRange$ = _this.dateRangePickerBuilderService.selectedDateRange$;
        (0,rxjs__WEBPACK_IMPORTED_MODULE_7__/* .combineLatest */ .z)([selectedDateRange$]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__/* .filter */ .p)(([dateRange]) => !!dateRange), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .M)(([dateRange]) => {
          _this.selectedDateRange = dateRange;
        }), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .M)(/*#__PURE__*/(0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(function* () {
          if (!_this.allEmployees || _this.allEmployees.length === 0) {
            yield _this.getWorkingEmployees();
          }
          _this.select.setValue(_this.preSelected);
          _this.loaded = true;
        })), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .untilDestroyed */ .s)(_this)).subscribe();
      })();
    }
    checkForMultiSelectValue(val) {
      if (this.multiple) {
        this.val = val instanceof Array ? val : [val];
      } else {
        this.val = val instanceof Array ? val[0] : val;
      }
    }
    onMembersSelected(selectEvent) {
      this.selectedChange.emit(selectEvent);
    }
    writeValue(value) {
      this.changeValue$.next(value);
    }
    registerOnChange(fn) {
      this.onChange = fn;
    }
    registerOnTouched(fn) {
      this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
      this.disabled = isDisabled;
    }
    /**
     * Get working employees of the selected month
     */
    getWorkingEmployees() {
      var _this2 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(function* () {
        if (!_this2.store.hasAnyPermission(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_9__/* .PermissionsEnum */ .U.CHANGE_SELECTED_EMPLOYEE) && !_this2.store.hasAnyPermission(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_9__/* .PermissionsEnum */ .U.SELECT_EMPLOYEE)) {
          return;
        }
        const {
          tenantId
        } = _this2.store.user;
        const {
          id: organizationId
        } = _this2.organization;
        const {
          items = []
        } = yield _this2.employeesService.getWorking(organizationId, tenantId, _this2.selectedDateRange, true);
        _this2.employees = items;
      })();
    }
    ngOnDestroy() {}
    static {
      this.ɵfac = function EmployeeSelectComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || EmployeeSelectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_10__/* .EmployeesService */ .r), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_11__/* .Store */ .il), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_12__/* .DateRangePickerBuilderService */ .i7));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: EmployeeSelectComponent,
        selectors: [["ga-employee-multi-select"]],
        inputs: {
          reset: "reset",
          allEmployees: "allEmployees",
          selectedEmployeeIds: "selectedEmployeeIds",
          multiple: "multiple",
          label: "label",
          disabled: "disabled",
          placeholder: "placeholder"
        },
        outputs: {
          selectedChange: "selectedChange",
          onLoadEmployees: "onLoadEmployees"
        },
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵProvidersFeature"] */ .Jv_([{
          provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .NG_VALUE_ACCESSOR */ .kq,
          useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__/* .forwardRef */ .Rfq)(() => EmployeeSelectComponent),
          multi: true
        }])],
        decls: 2,
        vars: 2,
        consts: [["class", "label", 4, "ngIf"], [3, "ngIf"], [1, "label"], ["fullWidth", "", 3, "selectedChange", "formControl", "multiple", "disabled", "selected", "placeholder"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["size", "sm", 3, "src", "name", "isOption"]],
        template: function EmployeeSelectComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(0, EmployeeSelectComponent_label_0_Template, 3, 3, "label", 0)(1, EmployeeSelectComponent_ng_template_1_Template, 3, 8, "ng-template", 1);
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.label);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.loaded);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__/* .NgForOf */ .Sq, _angular_common__WEBPACK_IMPORTED_MODULE_13__/* .NgIf */ .bT, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .NgControlStatus */ .BC, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .FormControlDirective */ .l_, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbSelectComponent */ .S81, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbOptionComponent */ .ZJ2, _components_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_15__/* .AvatarComponent */ .f, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__/* .TranslatePipe */ .D9],
        styles: ["[_nghost-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container {\n  flex-wrap: nowrap;\n  overflow: hidden;\n}\n\nngx-avatar[_ngcontent-%COMP%]     .inner-wrapper {\n  display: flex;\n  flex-direction: row;\n}\nngx-avatar[_ngcontent-%COMP%]     .inner-wrapper .names-wrapper {\n  margin: 0 10px;\n}"]
      });
    }
  };
  EmployeeSelectComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_17__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .UntilDestroy */ .d)({
    checkProperties: true
  }), (0,tslib__WEBPACK_IMPORTED_MODULE_17__/* .__metadata */ .Sn)("design:paramtypes", [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_10__/* .EmployeesService */ .r, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_11__/* .Store */ .il, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_12__/* .DateRangePickerBuilderService */ .i7])], EmployeeSelectComponent);
  return EmployeeSelectComponent;
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

/***/ 59395:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   b: () => (/* binding */ ServerSourceConf)
/* harmony export */ });
let ServerSourceConf = /*#__PURE__*/(() => {
  class ServerSourceConf {
    static {
      this.SORT_FIELD_KEY = 'orderBy';
    }
    static {
      this.SORT_DIR_KEY = 'order';
    }
    static {
      this.PAGER_PAGE_KEY = 'skip';
    }
    static {
      this.PAGER_LIMIT_KEY = 'take';
    }
    static {
      this.FILTER_FIELD_KEY = 'filters';
    }
    static {
      this.TOTAL_KEY = 'total';
    }
    static {
      this.DATA_KEY = 'items';
    }
    constructor({
      resultMap = null,
      finalize = null,
      endPoint = '',
      sortFieldKey = '',
      sortDirKey = '',
      pagerPageKey = '',
      pagerLimitKey = '',
      filterFieldKey = '',
      totalKey = '',
      dataKey = '',
      where = '',
      join = '',
      relations = [],
      withDeleted = false,
      select = {}
    } = {}) {
      this.endPoint = endPoint ? endPoint : '';
      this.sortFieldKey = sortFieldKey ? sortFieldKey : ServerSourceConf.SORT_FIELD_KEY;
      this.sortDirKey = sortDirKey ? sortDirKey : ServerSourceConf.SORT_DIR_KEY;
      this.pagerPageKey = pagerPageKey ? pagerPageKey : ServerSourceConf.PAGER_PAGE_KEY;
      this.pagerLimitKey = pagerLimitKey ? pagerLimitKey : ServerSourceConf.PAGER_LIMIT_KEY;
      this.filterFieldKey = filterFieldKey ? filterFieldKey : ServerSourceConf.FILTER_FIELD_KEY;
      this.totalKey = totalKey ? totalKey : ServerSourceConf.TOTAL_KEY;
      this.dataKey = dataKey ? dataKey : ServerSourceConf.DATA_KEY;
      this.where = where;
      this.join = join;
      this.relations = relations;
      this.resultMap = resultMap;
      this.finalize = finalize;
      this.withDeleted = withDeleted;
      this.select = select;
    }
  }
  return ServerSourceConf;
})();

/***/ }),

/***/ 61444:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   x: () => (/* binding */ TagsColorInputModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14572);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56383);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10936);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(55567);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63545);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(19223);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);








let TagsColorInputModule = /*#__PURE__*/(() => {
  class TagsColorInputModule {
    static {
      this.ɵfac = function TagsColorInputModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || TagsColorInputModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .$C({
        type: TagsColorInputModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .G2t({
        providers: [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_1__/* .TagsService */ .D],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__/* .CommonModule */ .MD, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbSelectModule */ .VcP, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbBadgeModule */ .iEK, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .FormsModule */ .YN, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__/* .NgSelectModule */ .MQ, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__/* .TranslateModule */ .h.forChild()]
      });
    }
  }
  return TagsColorInputModule;
})();

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

/***/ 68863:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   j: () => (/* binding */ InviteContactComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73014);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10936);
/* harmony import */ var _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38546);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(56383);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19223);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(15480);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(941);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(57044);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(57952);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(14572);













function InviteContactComponent_form_8_ng_container_17_p_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(2, 1, "TOASTR.MESSAGE.PHONE_REQUIRED"), " ");
  }
}
function InviteContactComponent_form_8_ng_container_17_p_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(2, 1, "TOASTR.MESSAGE.PHONE_CONTAINS_ONLY_NUMBERS"), " ");
  }
}
function InviteContactComponent_form_8_ng_container_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, InviteContactComponent_form_8_ng_container_17_p_1_Template, 3, 3, "p", 18)(2, InviteContactComponent_form_8_ng_container_17_p_2_Template, 3, 3, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r0.form.controls.primaryPhone.errors == null ? null : ctx_r0.form.controls.primaryPhone.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r0.form.controls.primaryPhone.errors == null ? null : ctx_r0.form.controls.primaryPhone.errors.pattern);
  }
}
function InviteContactComponent_form_8_ng_container_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(1, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(3, 1, "NOTES.ORGANIZATIONS.EDIT_ORGANIZATIONS_CONTACTS.EMAIL_EXISTS"), " ");
  }
}
function InviteContactComponent_form_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "form", 10)(1, "div", 11)(2, "div", 12)(3, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(6, "input", 14, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(9, "div", 11)(10, "div", 12)(11, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(14, "input", 15, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(17, InviteContactComponent_form_8_ng_container_17_Template, 3, 2, "ng-container", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(18, "div", 11)(19, "div", 12)(20, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(22, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(23, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(24, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(25, InviteContactComponent_form_8_ng_container_25_Template, 4, 3, "ng-container", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("formGroup", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(5, 14, "SM_TABLE.CONTACT_NAME"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpropertyInterpolate"] */ .FS9("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(8, 16, "SM_TABLE.CONTACT_NAME"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("status", ctx_r0.form.controls.name.touched ? ctx_r0.form.controls.name.value == 0 ? "danger" : "basic" : "basic");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵattribute"] */ .BMQ("aria-invalid", ctx_r0.form.controls.name.invalid && ctx_r0.form.controls.name.touched ? true : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(13, 18, "ORGANIZATIONS_PAGE.EDIT.PHONE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpropertyInterpolate"] */ .FS9("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(16, 20, "ORGANIZATIONS_PAGE.EDIT.PHONE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("status", ctx_r0.form.controls.primaryPhone.dirty ? ctx_r0.form.controls.primaryPhone.invalid ? "danger" : "basic" : "basic");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵattribute"] */ .BMQ("aria-invalid", ctx_r0.form.controls.primaryPhone.invalid && ctx_r0.form.controls.primaryPhone.touched ? true : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r0.form.controls.primaryPhone.invalid && ctx_r0.form.controls.primaryPhone.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(22, 22, "FORM.LABELS.EMAIL_INVITATION"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpropertyInterpolate"] */ .FS9("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(24, 24, "SM_TABLE.EMAIL"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("status", ctx_r0.form.controls.primaryEmail.dirty && ctx_r0.form.controls.primaryEmail.invalid ? "danger" : "basic");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r0.form.controls.primaryEmail.errors && ctx_r0.form.controls.primaryEmail.errors.exists);
  }
}
let InviteContactComponent = /*#__PURE__*/(() => {
  class InviteContactComponent extends _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_1__/* .TranslationBaseComponent */ .K {
    constructor(dialogRef, translateService, toastrService, fb, organizationContactService, usersService, inviteService, cdr) {
      super(translateService);
      this.dialogRef = dialogRef;
      this.translateService = translateService;
      this.toastrService = toastrService;
      this.fb = fb;
      this.organizationContactService = organizationContactService;
      this.usersService = usersService;
      this.inviteService = inviteService;
      this.cdr = cdr;
      this.organizationId = '';
      this.organizationContact = undefined;
    }
    ngOnInit() {
      var _this = this;
      this.form = this.fb.group({
        name: [this.organizationContact ? this.organizationContact.name : '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .Validators */ .k0.required],
        primaryEmail: [this.organizationContact ? this.organizationContact.primaryEmail : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .Validators */ .k0.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .Validators */ .k0.email]],
        primaryPhone: [this.organizationContact ? this.organizationContact.primaryPhone : '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .Validators */ .k0.required]
      }, {
        asyncValidators: function () {
          var _ref = (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(function* (form) {
            const user = yield _this.usersService.getUserByEmail(form.get('primaryEmail').value);
            if (!!user) {
              form.get('primaryEmail').setErrors({
                invalid: true
              });
              form.get('primaryEmail').setErrors({
                exists: true
              });
            }
          });
          return function asyncValidators(_x) {
            return _ref.apply(this, arguments);
          };
        }()
      });
    }
    ngAfterViewInit() {
      this.cdr.detectChanges();
    }
    closeDialog(organizationContact) {
      this.dialogRef.close(organizationContact);
    }
    inviteContact() {
      var _this2 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(function* () {
        const organizationContact = yield _this2.addOrEditOrganizationContact();
        try {
          if (organizationContact) {
            const invited = _this2.inviteService.inviteOrganizationContact(organizationContact.id);
            _this2.closeDialog(invited);
          }
        } catch (error) {
          _this2.toastrService.danger(error);
        }
      })();
    }
    addOrEditOrganizationContact() {
      var _this3 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(function* () {
        try {
          if (_this3.organizationContact) {
            return yield _this3.organizationContactService.create({
              ..._this3.organizationContact,
              tenantId: _this3.selectedOrganization.tenantId,
              contactType: _this3.contactType,
              ..._this3.form.getRawValue()
            });
          } else if (_this3.form.valid) {
            return yield _this3.organizationContactService.create({
              organizationId: _this3.organizationId,
              tenantId: _this3.selectedOrganization.tenantId,
              contactType: _this3.contactType,
              ..._this3.form.getRawValue()
            });
          }
        } catch (error) {
          _this3.toastrService.danger(error);
        }
        return null;
      })();
    }
    static {
      this.ɵfac = function InviteContactComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || InviteContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbDialogRef */ .ybQ), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__/* .TranslateService */ .c$), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_6__/* .ToastrService */ .t), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .UntypedFormBuilder */ .ze), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_7__/* .OrganizationContactService */ .$), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_8__/* .UsersService */ .g), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_9__/* .InviteService */ .p), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* .ChangeDetectorRef */ .gRc));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: InviteContactComponent,
        selectors: [["ga-invite-contact"]],
        inputs: {
          organizationId: "organizationId",
          contactType: "contactType",
          organizationContact: "organizationContact",
          selectedOrganization: "selectedOrganization"
        },
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
        decls: 16,
        vars: 11,
        consts: [["name", ""], ["phone", ""], [1, "d-flex", "flex-column"], [1, "cancel"], [1, "fas", "fa-times", 3, "click"], [1, "title"], [3, "formGroup", 4, "ngIf"], [1, "text-left"], ["status", "basic", "size", "small", "outline", "", "nbButton", "", 1, "mr-2", 3, "click"], ["status", "success", "size", "small", "nbButton", "", 1, "mr-2", 3, "click", "disabled"], [3, "formGroup"], [1, "row"], [1, "form-group", "col-12"], ["for", "emailsSelect", 1, "label"], ["type", "text", "nbInput", "", "fullWidth", "", "formControlName", "name", 3, "placeholder", "status"], ["pattern", "[0-9]{0,30}", "type", "text", "nbInput", "", "fullWidth", "", "formControlName", "primaryPhone", 3, "placeholder", "status"], [4, "ngIf"], ["fullWidth", "", "id", "emailInput", "type", "text", "nbInput", "", "formControlName", "primaryEmail", 3, "placeholder", "status"], ["class", "caption status-danger", 4, "ngIf"], [1, "caption", "status-danger"]],
        template: function InviteContactComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-card")(1, "nb-card-header", 2)(2, "span", 3)(3, "i", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function InviteContactComponent_Template_i_click_3_listener() {
              return ctx.closeDialog();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(4, "h5", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(6, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(7, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(8, InviteContactComponent_form_8_Template, 26, 26, "form", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(9, "nb-card-footer", 7)(10, "button", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function InviteContactComponent_Template_button_click_10_listener() {
              return ctx.closeDialog();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(12, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(13, "button", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function InviteContactComponent_Template_button_click_13_listener() {
              return ctx.inviteContact();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(15, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(6, 5, "ORGANIZATIONS_PAGE.INVITE_CONTACT"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.form);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(12, 7, "BUTTONS.CANCEL"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("disabled", ctx.form.invalid);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(15, 9, "ORGANIZATIONS_PAGE.EMAIL_INVITE"), " ");
          }
        },
        dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbButtonComponent */ .YP2, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbCardComponent */ .SrT, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbCardBodyComponent */ .KH5, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbCardFooterComponent */ .VDm, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbCardHeaderComponent */ .zJv, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbInputDirective */ .i6h, _angular_common__WEBPACK_IMPORTED_MODULE_10__/* .NgIf */ .bT, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* ["ɵNgNoValidate"] */ .qT, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .DefaultValueAccessor */ .me, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .NgControlStatus */ .BC, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .NgControlStatusGroup */ .cb, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .PatternValidator */ .R_, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .FormGroupDirective */ .j4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .FormControlName */ .JD, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__/* .TranslatePipe */ .D9],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   i[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n}\n[dir=ltr]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n[dir=rtl]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--gauzy-text-color-1);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(245, 109, 88, 0.3);\n  border-width: 2px;\n  color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(245, 109, 88, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 16px;\n  letter-spacing: 0em;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(126, 126, 143, 0.3);\n  border-width: 2px;\n  color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(126, 126, 143, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(37, 184, 105, 0.3);\n  border-width: 2px;\n  color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(37, 184, 105, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[disabled][_ngcontent-%COMP%], \n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic.btn-disabled[_ngcontent-%COMP%] {\n  background-color: var(--button-outline-basic-disabled-background-color);\n  border-color: var(--button-outline-basic-disabled-border-color);\n  color: var(--button-outline-basic-disabled-text-color);\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].primary.appearance-filled.status-primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  border: unset;\n  background-color: var(--color-primary-transparent-default);\n  box-shadow: var(--gauzy-shadow) 0, 0, 0, 0.15;\n}\n[dir=ltr]   [_nghost-%COMP%]     input, \n[dir=ltr]   [_nghost-%COMP%]     textarea {\n  text-align: start;\n}\n[dir=rtl]   [_nghost-%COMP%]     input, \n[dir=rtl]   [_nghost-%COMP%]     textarea {\n  text-align: end;\n}\n[_nghost-%COMP%]     input, \n[_nghost-%COMP%]     nb-select.appearance-outline.status-basic .select-button, \n[_nghost-%COMP%]     .ng-select .ng-select-container {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n  height: 42px !important;\n}\n[_nghost-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder, \n[_nghost-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {\n  top: unset !important;\n}\n[_nghost-%COMP%]     label, \n[_nghost-%COMP%]     .label {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  color: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]     textarea {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n}\n[_nghost-%COMP%]     .ng-select .ng-select-container input, \n[_nghost-%COMP%]     nb-tag-list input {\n  background-color: unset !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n}\n\nnb-card[_ngcontent-%COMP%] {\n  width: 645px;\n  background-color: var(--gauzy-card-1);\n}\nnb-card[_ngcontent-%COMP%]   nb-card-header[_ngcontent-%COMP%]   nb-icon.close[_ngcontent-%COMP%] {\n  cursor: pointer;\n}"]
      });
    }
  }
  return InviteContactComponent;
})();

/***/ }),

/***/ 71181:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ debounceTime)
/* harmony export */ });
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(89751);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7661);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25969);



function debounceTime(dueTime, scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__/* .asyncScheduler */ .E) {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_1__/* .operate */ .N)((source, subscriber) => {
    let activeTask = null;
    let lastValue = null;
    let lastTime = null;
    const emit = () => {
      if (activeTask) {
        activeTask.unsubscribe();
        activeTask = null;
        const value = lastValue;
        lastValue = null;
        subscriber.next(value);
      }
    };
    function emitWhenIdle() {
      const targetTime = lastTime + dueTime;
      const now = scheduler.now();
      if (now < targetTime) {
        activeTask = this.schedule(undefined, targetTime - now);
        subscriber.add(activeTask);
        return;
      }
      emit();
    }
    source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__/* .createOperatorSubscriber */ ._)(subscriber, value => {
      lastValue = value;
      lastTime = scheduler.now();
      if (!activeTask) {
        activeTask = scheduler.schedule(emitWhenIdle, dueTime);
        subscriber.add(activeTask);
      }
    }, () => {
      emit();
      subscriber.complete();
    }, undefined, () => {
      lastValue = activeTask = null;
    }));
  });
}
//# sourceMappingURL=debounceTime.js.map

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

/***/ 83451:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   f: () => (/* binding */ intervalProvider)
/* harmony export */ });
const intervalProvider = {
  setInterval(handler, timeout, ...args) {
    const {
      delegate
    } = intervalProvider;
    if (delegate === null || delegate === void 0 ? void 0 : delegate.setInterval) {
      return delegate.setInterval(handler, timeout, ...args);
    }
    return setInterval(handler, timeout, ...args);
  },
  clearInterval(handle) {
    const {
      delegate
    } = intervalProvider;
    return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearInterval) || clearInterval)(handle);
  },
  delegate: undefined
};
//# sourceMappingURL=intervalProvider.js.map

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

/***/ 89751:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ asyncScheduler),
/* harmony export */   b: () => (/* binding */ async)
/* harmony export */ });
/* harmony import */ var _AsyncAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16061);
/* harmony import */ var _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36902);


const asyncScheduler = new _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__/* .AsyncScheduler */ .q(_AsyncAction__WEBPACK_IMPORTED_MODULE_1__/* .AsyncAction */ .R);
const async = asyncScheduler;
//# sourceMappingURL=async.js.map

/***/ }),

/***/ 90687:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ ContactMutationComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(73014);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(64411);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26860);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10936);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(73465);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(71181);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(72781);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(73246);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(19223);
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93105);
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(23423);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(26024);
/* harmony import */ var _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38546);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(78870);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(19426);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(30545);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(71924);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(42433);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(15480);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(54263);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(56383);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(55567);
/* harmony import */ var _packages_ui_core_shared_src_lib_employee_employee_multi_select_employee_multi_select_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(57354);
/* harmony import */ var _packages_ui_core_shared_src_lib_image_uploader_image_uploader_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(79455);
/* harmony import */ var _packages_ui_core_shared_src_lib_forms_maps_leaflet_leaflet_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(7281);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(14572);
/* harmony import */ var _packages_ui_core_shared_src_lib_components_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(32386);
/* harmony import */ var _packages_ui_core_shared_src_lib_components_back_navigation_back_navigation_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(90910);
/* harmony import */ var _packages_ui_core_shared_src_lib_directives_img_directive__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(71466);
/* harmony import */ var _packages_ui_core_shared_src_lib_tags_tags_color_input_tags_color_input_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(62177);

var ContactMutationComponent_1;





























const _c0 = ["leafletTemplate"];
const _c1 = ["locationFormDirective"];
const _c2 = ["stepper"];
const _c3 = a0 => ({
  opacity: a0
});
function ContactMutationComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(1, "translate");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(1, 1, "CONTACTS_PAGE.MAIN"), " ");
  }
}
function ContactMutationComponent__svg_svg_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnamespaceSVG"] */ .qSk();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "svg", 55)(1, "defs");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(2, "path", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(3, "g", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(4, "circle", 58)(5, "circle", 59)(6, "use", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpureFunction1"] */ .eq3(1, _c3, ctx_r1.hoverState ? "1" : "0.3"));
  }
}
function ContactMutationComponent_img_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "img", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("mouseenter", function ContactMutationComponent_img_20_Template_img_mouseenter_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx_r1.hoverState = true);
    })("mouseleave", function ContactMutationComponent_img_20_Template_img_mouseleave_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx_r1.hoverState = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("src", ctx_r1.contMainForm.get("imageUrl").value, _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵsanitizeUrl"] */ .B4B);
  }
}
function ContactMutationComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "div", 62)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(2, "i", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(3, "Add or Drop Image");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
  }
}
function ContactMutationComponent_ng_container_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(1, "p", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(3, 1, "TOASTR.MESSAGE.NAME_REQUIRED"), " ");
  }
}
function ContactMutationComponent_ng_container_40_p_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "p", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(2, 1, "TOASTR.MESSAGE.EMAIL_SHOULD_BE_REAL"), " ");
  }
}
function ContactMutationComponent_ng_container_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(1, ContactMutationComponent_ng_container_40_p_1_Template, 3, 3, "p", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r1.contMainForm.controls.primaryEmail.errors == null ? null : ctx_r1.contMainForm.controls.primaryEmail.errors.pattern);
  }
}
function ContactMutationComponent_ng_option_84_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "ng-option", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const type_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("value", type_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .JRh(type_r4);
  }
}
function ContactMutationComponent_ng_template_98_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(1, "translate");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(1, 1, "CONTACTS_PAGE.ADDRESS"));
  }
}
function ContactMutationComponent_form_100_ng_container_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(1, "ga-leaflet-map", 76, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("mapClicked", function ContactMutationComponent_form_100_ng_container_17_Template_ga_leaflet_map_mapClicked_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx_r1.onMapClicked($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
}
function ContactMutationComponent_form_100_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "form", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("ngSubmit", function ContactMutationComponent_form_100_Template_form_ngSubmit_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx_r1.locationForm.markAsDirty());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(1, "div", 68)(2, "div", 69)(3, "div", 70)(4, "ga-location-form", 71, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("mapCoordinatesEmitter", function ContactMutationComponent_form_100_Template_ga_location_form_mapCoordinatesEmitter_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx_r1.onCoordinatesChanges($event));
    })("mapGeometryEmitter", function ContactMutationComponent_form_100_Template_ga_location_form_mapGeometryEmitter_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx_r1.onGeometrySend($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(6, "div")(7, "button", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(10, "button", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(13, "button", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("click", function ContactMutationComponent_form_100_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx_r1.cancel());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(16, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(17, ContactMutationComponent_form_100_ng_container_17_Template, 3, 0, "ng-container", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
    const stepper_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵreference"] */ .sdS(8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("formGroup", ctx_r1.locationForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("form", ctx_r1.locationForm)("showAutocompleteSearch", true)("showCoordinateInput", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(9, 9, "BUTTONS.PREVIOUS"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("disabled", ctx_r1.locationForm.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(12, 11, "BUTTONS.NEXT"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(15, 13, "BUTTONS.CANCEL"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngIf", stepper_r7._selectedIndex === 1);
  }
}
function ContactMutationComponent_nb_step_101_nb_option_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "nb-option", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(2, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const budgetType_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("value", budgetType_r9.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(2, 2, budgetType_r9.value), " ");
  }
}
function ContactMutationComponent_nb_step_101_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(1, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(2, "label", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(4, "input", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(3, 3, "FORM.PLACEHOLDERS.HOURS"), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵsanitizeHtml"] */ .npT);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("min", 0)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(5, 5, "FORM.PLACEHOLDERS.HOURS"));
  }
}
function ContactMutationComponent_nb_step_101_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(1, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(2, "label", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(4, "input", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(3, 3, "FORM.PLACEHOLDERS.COST"), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵsanitizeHtml"] */ .npT);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("min", 0)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(5, 5, "FORM.PLACEHOLDERS.COST"));
  }
}
function ContactMutationComponent_nb_step_101_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "nb-step", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("ngSubmit", function ContactMutationComponent_nb_step_101_Template_nb_step_ngSubmit_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r8);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx_r1.budgetForm.markAsDirty());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(2, "form", 78)(3, "div", 26)(4, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(5, "label", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(7, "nb-select", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(9, ContactMutationComponent_nb_step_101_nb_option_9_Template, 3, 4, "nb-option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(10, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(11, ContactMutationComponent_nb_step_101_ng_container_11_Template, 6, 7, "ng-container", 30)(12, ContactMutationComponent_nb_step_101_ng_container_12_Template, 6, 7, "ng-container", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(13, "div", 42)(14, "button", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(17, "button", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(20, "button", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("click", function ContactMutationComponent_nb_step_101_Template_button_click_20_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r8);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx_r1.cancel());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(22, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("stepControl", ctx_r1.budgetForm)("label", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(1, 12, "CONTACTS_PAGE.BUDGET"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("formGroup", ctx_r1.budgetForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(6, 14, "FORM.PLACEHOLDERS.BUDGET_TYPE"), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵsanitizeHtml"] */ .npT);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(8, 16, "FORM.PLACEHOLDERS.BUDGET_TYPE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(10, 18, ctx_r1.organizationContactBudgetTypeEnum));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r1.budgetType === ctx_r1.organizationContactBudgetTypeEnum.HOURS);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r1.budgetType === ctx_r1.organizationContactBudgetTypeEnum.COST);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(16, 20, "BUTTONS.PREVIOUS"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("disabled", ctx_r1.budgetForm.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(19, 22, "BUTTONS.NEXT"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(22, 24, "BUTTONS.CANCEL"), " ");
  }
}
function ContactMutationComponent_ng_template_104_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(1, "translate");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(1, 1, "CONTACTS_PAGE.MEMBERS"));
  }
}
function ContactMutationComponent_div_111_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(1, "ngx-avatar", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const member_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("src", member_r10.user.imageUrl)("name", member_r10.user.name)("id", member_r10.id)("employee", member_r10)("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(2, 5, "ORGANIZATIONS_PAGE.EDIT.CLICK_EMPLOYEE"));
  }
}
function ContactMutationComponent_div_111_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "div", 49)(1, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(2, ContactMutationComponent_div_111_div_2_Template, 3, 7, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx_r1.selectedMembers);
  }
}
let ContactMutationComponent = /*#__PURE__*/(() => {
  let ContactMutationComponent = class ContactMutationComponent extends _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_2__/* .TranslationBaseComponent */ .K {
    static {
      ContactMutationComponent_1 = this;
    }
    get organizationContact() {
      return this._organizationContact;
    }
    set organizationContact(value) {
      this._organizationContact = value;
      if (value) {
        this.syncOrganizationContactMembers();
      }
    }
    get projectsWithoutOrganizationContacts() {
      return this._projectsWithoutOrganizationContacts;
    }
    set projectsWithoutOrganizationContacts(value) {
      this._projectsWithoutOrganizationContacts = value;
    }
    get contactType() {
      return this._contactType;
    }
    set contactType(value) {
      this._contactType = value;
    }
    static buildMainForm(formBuilder) {
      const form = formBuilder.group({
        imageId: [null],
        imageUrl: [null],
        tags: [],
        name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .Validators */ .k0.required]],
        primaryEmail: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .Validators */ .k0.email]],
        primaryPhone: [null],
        projects: [],
        contactType: [],
        fax: [null],
        website: [null],
        fiscalInformation: [null]
      });
      return form;
    }
    static buildBudgetForm(formBuilder) {
      const form = formBuilder.group({
        budget: [],
        budgetType: []
      });
      return form;
    }
    /*
     * Getter form control value for budgetType
     */
    get budgetType() {
      return this.budgetForm.get('budgetType').value;
    }
    /*
     * Getter form control value for budgetType
     */
    get tags() {
      return this.contMainForm.get('tags').value;
    }
    constructor(fb, store, organizationProjectsService, toastrService, translateService, errorHandler, filterArrayPipe) {
      var _this;
      super(translateService);
      _this = this;
      this.fb = fb;
      this.store = store;
      this.organizationProjectsService = organizationProjectsService;
      this.toastrService = toastrService;
      this.translateService = translateService;
      this.errorHandler = errorHandler;
      this.filterArrayPipe = filterArrayPipe;
      this.FormHelpers = _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_4__/* .FormHelpers */ .k;
      /*
       * Output event emitter for cancel process event
       */
      this.canceled = new _angular_core__WEBPACK_IMPORTED_MODULE_1__/* .EventEmitter */ .bkB();
      /*
       * Output event emitter for add/edit organization contact event
       */
      this.addOrEditOrganizationContact = new _angular_core__WEBPACK_IMPORTED_MODULE_1__/* .EventEmitter */ .bkB();
      this.members = [];
      this.selectedMembers = [];
      this.contactTypes = Object.values(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_5__/* .ContactType */ .Pm);
      this.projects = [];
      this.employees = [];
      this.organizationContactBudgetTypeEnum = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_5__/* .OrganizationContactBudgetTypeEnum */ .S3;
      /**
       * Main Content Stepper Form Group
       */
      this.contMainForm = ContactMutationComponent_1.buildMainForm(this.fb);
      /**
       * Location Stepper Form Group
       */
      this.locationForm = _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_6__/* .LocationFormComponent */ .f.buildForm(this.fb);
      /**
       * Budget Stepper Form Group
       */
      this.budgetForm = ContactMutationComponent_1.buildBudgetForm(this.fb);
      /**
       * Add a new project.
       *
       * @param name Name of the project
       * @returns A Promise resolving to the newly created IOrganizationProject
       */
      this.addNewProject = /*#__PURE__*/function () {
        var _ref = (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A)(function* (name) {
          try {
            const {
              tenantId
            } = _this.store.user;
            const {
              id: organizationId
            } = _this.organization;
            const project = yield _this.organizationProjectsService.create({
              name,
              organizationId,
              tenantId,
              members: []
            });
            _this.toastrService.success('NOTES.ORGANIZATIONS.EDIT_ORGANIZATIONS_PROJECTS.ADD_PROJECT', {
              name
            });
            return project;
          } catch (error) {
            _this.errorHandler.handleError(error);
          }
        });
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }();
      /**
       * Transforms an IEmployee into an IOrganizationProjectEmployee.
       *
       * @param employee The employee to transform.
       * @param project The project to associate with the employee.
       * @param organization The organization context.
       * @returns The transformed IOrganizationProjectEmployee object.
       */
      this.transformToProjectEmployee = (employee, project, organization) => ({
        ...employee,
        employeeId: employee.id,
        organizationProject: project,
        // Assign the current project
        organizationProjectId: project.id,
        // Assign the project's ID
        organizationId: organization.id,
        // Assign the organization's ID
        tenantId: organization.tenantId // Assign the organization's tenant ID
      });
    }
    ngOnInit() {
      const storeOrganization$ = this.store.selectedOrganization$;
      storeOrganization$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .debounceTime */ .B)(200), (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_9__/* .distinctUntilChange */ .nI)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .filter */ .p)(organization => !!organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__/* .tap */ .M)(organization => this.organization = organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__/* .tap */ .M)(() => this._patchForm()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__/* .tap */ .M)(() => this._getProjects()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_12__/* .untilDestroyed */ .s)(this)).subscribe();
    }
    /**
     * Sync organization contact members.
     * Updates `selectedEmployeeIds` based on the members of the organization contact.
     */
    syncOrganizationContactMembers() {
      this.selectedEmployeeIds = this.organizationContact?.members?.map(member => member.id) ?? [];
    }
    /**
     * Load employees from multiple selected employees
     *
     * @param employees
     */
    onLoadEmployees(employees) {
      this.employees = employees;
      this.selectedMembers = this.filterArrayPipe.transform(this.employees, this.selectedEmployeeIds);
    }
    /**
     * Fetches all projects associated with the current organization and user tenant, and updates the 'projects' property.
     */
    _getProjects() {
      var _this2 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A)(function* () {
        try {
          const {
            tenantId
          } = _this2.store.user;
          const {
            id: organizationId
          } = _this2.organization;
          const {
            items
          } = yield _this2.organizationProjectsService.getAll([], {
            organizationId,
            tenantId
          });
          _this2.projects = items;
        } catch (error) {
          console.error('Error fetching projects:', error);
        }
      })();
    }
    _patchForm() {
      if (!this.organization) {
        return;
      }
      const orgContact = this.organizationContact;
      //
      this.contMainForm.patchValue({
        imageId: orgContact?.imageId ?? null,
        imageUrl: orgContact?.imageUrl ?? null,
        tags: orgContact?.tags ?? [],
        name: orgContact?.name ?? null,
        primaryEmail: orgContact?.primaryEmail ?? null,
        primaryPhone: orgContact?.primaryPhone ?? null,
        projects: orgContact?.projects ?? [],
        contactType: orgContact?.contactType ?? this.contactType,
        fax: orgContact?.contact?.fax ?? null,
        website: orgContact?.contact?.website ?? null,
        fiscalInformation: orgContact?.contact?.fiscalInformation ?? null
      });
      this.contMainForm.updateValueAndValidity();
      //
      this.budgetForm.patchValue({
        budgetType: orgContact?.budgetType ?? _gauzy_contracts__WEBPACK_IMPORTED_MODULE_5__/* .OrganizationContactBudgetTypeEnum */ .S3.HOURS,
        budget: orgContact?.budget ?? null
      });
      this.budgetForm.updateValueAndValidity();
      this._setLocationForm();
    }
    /**
     *
     * @returns
     */
    _setLocationForm() {
      if (!this.organizationContact) {
        return;
      }
      setTimeout(() => {
        const {
          contact
        } = this.organizationContact;
        if (contact) {
          const {
            country,
            city,
            postcode,
            address,
            address2,
            latitude,
            longitude
          } = contact;
          this.locationFormDirective.setValue({
            country,
            city,
            postcode,
            address,
            address2,
            loc: {
              type: 'Point',
              coordinates: [latitude, longitude]
            }
          });
        }
      }, 200);
    }
    handleImageUploadError(error) {
      this.errorHandler.handleError(error);
    }
    /**
     * Upload employee image/avatar
     *
     * @param image
     */
    updateImageAsset(image) {
      var _this3 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A)(function* () {
        if (image) {
          _this3.contMainForm.get('imageId').setValue(image.id);
          _this3.contMainForm.get('imageUrl').setValue(image.fullUrl);
        }
        _this3.contMainForm.updateValueAndValidity();
      })();
    }
    onMembersSelected(members) {
      this.members = members;
      this.selectedMembers = this.filterArrayPipe.transform(this.employees, this.members);
    }
    cancel() {
      this.canceled.emit();
    }
    /**
     * Submits and processes form data for organizational contacts.
     * Validates main form, consolidates data from multiple forms, processes members and project info,
     * and emits the combined data for further action.
     */
    submitForm() {
      var _this4 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A)(function* () {
        if (_this4.contMainForm.invalid) {
          return;
        }
        const {
          id: organizationId,
          tenantId
        } = _this4.organization;
        const data = _this4.contMainForm.value;
        const budget = _this4.budgetForm.value;
        const locationData = _this4.locationFormDirective.getValue();
        const {
          fax,
          fiscalInformation,
          website
        } = _this4.contMainForm.value;
        // Extract and destructure coordinates
        const {
          coordinates,
          ...location
        } = locationData.loc;
        const [latitude, longitude] = coordinates;
        // Construct the contact object
        const contact = {
          latitude,
          longitude,
          fiscalInformation,
          website,
          fax,
          ...location,
          organizationId,
          organization: {
            id: organizationId
          },
          tenantId,
          tenant: {
            id: tenantId
          },
          ...(_this4.organizationContact?.contact?.id && {
            id: _this4.organizationContact.contact.id
          })
        };
        // Consolidate member IDs and retrieve corresponding employees
        const members = _this4.getSelectedMembers();
        // Retrieve and process projects with assigned members
        const projects = _this4.assignMembersToProjects(data.projects ?? [], members);
        // Step 5: Emit the consolidated data
        _this4.emitConsolidatedData({
          budget,
          data,
          projects,
          members,
          contact
        });
      })();
    }
    /**
     * Retrieves selected members based on member IDs or selected employees.
     * @returns An array of IEmployee objects.
     */
    getSelectedMembers() {
      // Step 1: Get the list of member IDs
      const memberIds = this.members || this.selectedEmployeeIds || [];
      // Step 2: Find corresponding IEmployee objects and filter out any falsy values
      const members = memberIds.map(id => this.employees.find(e => e.id === id)).filter(Boolean);
      // Fallback to selectedMembers if no members found
      return members.length ? members : this.selectedMembers;
    }
    /**
     * Assigns selected members to each project by transforming them into IOrganizationProjectEmployee objects.
     * @param projects The array of projects to which members will be assigned.
     * @param members The array of selected IEmployee objects.
     * @returns The updated array of projects with assigned members.
     */
    assignMembersToProjects(projects, members) {
      return projects.map(project => {
        // Get the project members and transform them into IOrganizationProjectEmployee objects
        const projectMembers = members.map(employee => this.transformToProjectEmployee(employee, project, this.organization));
        const combinedMembers = [...(Array.isArray(projectMembers) ? projectMembers : []), ...(Array.isArray(project.members) ? project.members : [])];
        const uniqueMembers = Array.from(new Map(combinedMembers.map(member => [member.id, member])).values());
        return {
          ...project,
          managerIds: uniqueMembers.filter(member => member.isManager).map(member => member.employeeId),
          memberIds: uniqueMembers.filter(member => !member.isManager).map(member => member.employeeId)
        };
      });
    }
    /**
     * Emits the consolidated data for further processing.
     *
     * @param payload The data to be emitted.
     */
    emitConsolidatedData(payload) {
      const {
        budget,
        data,
        projects,
        members,
        contact
      } = payload;
      const {
        id: organizationId,
        tenantId
      } = this.organization;
      // Emit the consolidated data
      this.addOrEditOrganizationContact.emit({
        ...budget,
        ...data,
        projects,
        members,
        contact,
        organizationId,
        organization: {
          id: organizationId
        },
        tenantId,
        tenant: {
          id: tenantId
        },
        ...(this.organizationContact?.id && {
          id: this.organizationContact.id
        })
      });
    }
    /**
     * Updates the 'tags' field in 'contMainForm' with the selected tags and validate the form.
     * @param tags An array of selected tag objects.
     */
    selectedTagsEvent(tags) {
      this.contMainForm.patchValue({
        tags
      });
      this.contMainForm.updateValueAndValidity();
    }
    /**
     * Progresses the stepper and adds a map marker on the second step.
     */
    nextStep() {
      this.stepper.next();
      // Assuming the second step is related to map operations.
      if (this.stepper.selectedIndex === 1) {
        // Directly destructure 'coordinates' from the location form value.
        const {
          loc: {
            coordinates: [lat, lng]
          }
        } = this.locationFormDirective.getValue();
        // Delay marker addition to ensure the map is ready. Adjust delay as needed.
        setTimeout(() => {
          this.leafletTemplate.addMarker(new leaflet__WEBPACK_IMPORTED_MODULE_0__.LatLng(lat, lng));
        }, 200);
      }
    }
    /*
     * Google Place and Leaflet Map Coordinates Changed Event Emitter
     */
    onCoordinatesChanges($event) {
      const {
        loc: {
          coordinates
        }
      } = this.locationFormDirective.getValue();
      const [lat, lng] = coordinates;
      if (this.leafletTemplate) {
        this.leafletTemplate.addMarker(new leaflet__WEBPACK_IMPORTED_MODULE_0__.LatLng(lat, lng));
      }
    }
    /**
     * Handles click events on the Leaflet map. Updates the location form with the clicked coordinates
     * and resets some location-related fields. It also triggers a recalculation of dependent form values.
     *
     * @param latlng The latitude and longitude object from the map click event.
     */
    onMapClicked(latlng) {
      const location = this.locationFormDirective.getValue();
      this.locationFormDirective.setValue({
        ...location,
        country: '',
        loc: {
          type: 'Point',
          coordinates: [latlng.lat, latlng.lng]
        }
      });
      this.locationFormDirective.onCoordinatesChanged();
    }
    /*
     * Google Place Geometry Changed Event Emitter
     */
    onGeometrySend(geometry) {}
    static {
      this.ɵfac = function ContactMutationComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || ContactMutationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .UntypedFormBuilder */ .ze), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_13__/* .Store */ .il), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_14__/* .OrganizationProjectsService */ .d), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_15__/* .ToastrService */ .t), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__/* .TranslateService */ .c$), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_17__/* .ErrorHandlingService */ .X), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_18__/* .FilterArrayPipe */ .O));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineComponent"] */ .VBU({
        type: ContactMutationComponent,
        selectors: [["ga-contact-mutation"]],
        viewQuery: function ContactMutationComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵviewQuery"] */ .GBs(_c0, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵviewQuery"] */ .GBs(_c1, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵviewQuery"] */ .GBs(_c2, 5);
          }
          if (rf & 2) {
            let _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵqueryRefresh"] */ .mGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵloadQuery"] */ .lsd()) && (ctx.leafletTemplate = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵqueryRefresh"] */ .mGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵloadQuery"] */ .lsd()) && (ctx.locationFormDirective = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵqueryRefresh"] */ .mGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵloadQuery"] */ .lsd()) && (ctx.stepper = _t.first);
          }
        },
        inputs: {
          organizationContact: "organizationContact",
          projectsWithoutOrganizationContacts: "projectsWithoutOrganizationContacts",
          contactType: "contactType"
        },
        outputs: {
          canceled: "canceled",
          addOrEditOrganizationContact: "addOrEditOrganizationContact"
        },
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
        decls: 119,
        vars: 100,
        consts: [["stepper", ""], ["mainStep", ""], ["name", ""], ["email", ""], ["phone", ""], ["website", ""], ["fax", ""], ["fiscalInformation", ""], ["addressStep", ""], ["membersStep", ""], ["locationFormDirective", ""], ["leafletTemplate", ""], [1, "d-flex"], [3, "click", "haveLink"], ["disableStepNavigation", ""], [3, "stepControl", "label"], [1, "custom-card"], [1, "contact-form", "d-flex", "flex-nowrap", "justify-content-between", 3, "ngSubmit", "formGroup"], [1, "contact-container"], [1, "contact-photo"], [3, "changeHoverState", "uploadedImageAsset", "uploadImageAssetError"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "width", "68", "height", "68", "viewBox", "0 0 68 68", 3, "ngStyle", 4, "ngIf"], [1, "image-overlay", 3, "ngStyle"], ["alt", "Contact Photo", 3, "src", "mouseenter", "mouseleave", 4, "ngIf"], ["class", "image", 4, "ngIf"], [1, "fields", "container"], [1, "row"], [1, "form-group", "col-7"], [1, "label"], ["id", "name", "type", "text", "nbInput", "", "fullWidth", "", "formControlName", "name", 3, "placeholder", "status"], [4, "ngIf"], ["id", "email", "autofocus", "", "pattern", ".+@.+\\..+", "type", "email", "nbInput", "", "fullWidth", "", "formControlName", "primaryEmail", 3, "placeholder", "status"], [1, "form-group", "col-5"], ["type", "text", "nbInput", "", "fullWidth", "", "formControlName", "primaryPhone", 3, "placeholder"], ["type", "text", "nbInput", "", "fullWidth", "", "formControlName", "website", 3, "placeholder"], ["type", "text", "nbInput", "", "fullWidth", "", "formControlName", "fax", 3, "placeholder"], ["type", "text", "nbInput", "", "fullWidth", "", "formControlName", "fiscalInformation", 3, "placeholder"], ["bindLabel", "name", "formControlName", "projects", "appendTo", "body", 3, "addTag", "items", "multiple", "searchable", "placeholder"], ["formControlName", "contactType", "appendTo", "body", 3, "clearable", "searchable", "placeholder"], [3, "value", 4, "ngFor", "ngForOf"], [1, "form-group", "col-12"], [3, "selectedTagsEvent", "selectedTags", "isOrgLevel"], [1, "buttons"], ["nbButton", "", "status", "basic", "outline", "", 1, "green", "mr-2", 3, "click", "disabled"], ["nbButton", "", "status", "basic", "outline", "", 3, "click"], ["class", "step-container custom-card", 3, "formGroup", "ngSubmit", 4, "ngIf"], [3, "stepControl", "label", "ngSubmit", 4, "ngIf"], [3, "label"], [1, "fields", "custom-card"], [1, "col-6"], [1, "form-group"], [3, "onLoadEmployees", "selectedChange", "selectedEmployeeIds"], ["class", "col-6", 4, "ngIf"], ["status", "basic", "outline", "", "nbButton", "", "nbStepperPrevious", "", 1, "gray", "mr-2"], ["nbButton", "", "status", "success", "nbStepperNext", "", 1, "mr-2", "ml-2", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "width", "68", "height", "68", "viewBox", "0 0 68 68", 3, "ngStyle"], ["id", "a", "d", "M28.667 31.333a2 2 0 1 0-.002-4.001 2 2 0 0 0 .002 4.001m13.333 12H26.748l9.34-7.793c.328-.279.923-.277 1.244-.001l6.001 5.12V42c0 .736-.597 1.333-1.333 1.333M26 24.667h16c.736 0 1.333.597 1.333 1.333v11.152l-4.27-3.643c-1.32-1.122-3.386-1.122-4.694-.008l-9.702 8.096V26c0-.736.597-1.333 1.333-1.333M42 22H26c-2.205 0-4 1.795-4 4v16c0 2.205 1.795 4 4 4h16c2.205 0 4-1.795 4-4V26c0-2.205-1.795-4-4-4"], ["fill", "none", "fill-rule", "evenodd"], ["cx", "34", "cy", "34", "r", "34", "fill", "#0091FF", "opacity", ".3"], ["cx", "34", "cy", "34", "r", "26", "fill", "#0091FF", "opacity", ".9"], ["fill", "#FFF", "fill-rule", "nonzero", 0, "xlink", "href", "#a"], ["alt", "Contact Photo", 3, "mouseenter", "mouseleave", "src"], [1, "image"], [1, "fas", "fa-image"], [1, "caption", "status-danger", "mt-1"], ["class", "caption status-danger mt-1", 4, "ngIf"], [3, "value"], [1, "step-container", "custom-card", 3, "ngSubmit", "formGroup"], [1, "fields", "h-100"], [1, "row", "h-100"], [1, "col-5", "h-100", "d-flex", "flex-column", "justify-content-between"], [3, "mapCoordinatesEmitter", "mapGeometryEmitter", "form", "showAutocompleteSearch", "showCoordinateInput"], ["nbButton", "", "nbStepperPrevious", "", "status", "basic", "outline", "", 1, "gray", "mr-2"], ["nbButton", "", "status", "basic", "outline", "", "nbStepperNext", "", 1, "green", "mr-2", 3, "disabled"], ["nbButton", "", "status", "basic", "outline", "", 1, "mr-2", 3, "click"], [1, "col-7"], [3, "mapClicked"], [3, "ngSubmit", "stepControl", "label"], [1, "custom-card", 3, "formGroup"], [1, "form-group", "col-3"], [1, "label", 3, "innerHtml"], ["fullWidth", "", "formControlName", "budgetType", 3, "placeholder"], ["nbInput", "", "type", "number", "fullWidth", "", "formControlName", "budget", 3, "min", "placeholder"], [1, "team-card"], ["class", "name-container", 4, "ngFor", "ngForOf"], [1, "name-container"], [1, "report-table", 3, "src", "name", "id", "employee", "nbTooltip"]],
        template: function ContactMutationComponent_Template(rf, ctx) {
          if (rf & 1) {
            const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetCurrentView"] */ .RV6();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "nb-card")(1, "nb-card-header", 12)(2, "ngx-back-navigation", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("click", function ContactMutationComponent_Template_ngx_back_navigation_click_2_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx.cancel());
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(3, "h4");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(5, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(6, "nb-card-body")(7, "nb-stepper", 14, 0)(9, "nb-step", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(10, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(11, ContactMutationComponent_ng_template_11_Template, 2, 3, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplateRefExtractor"] */ .C5r);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(13, "div", 16)(14, "form", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("ngSubmit", function ContactMutationComponent_Template_form_ngSubmit_14_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx.contMainForm.markAsDirty());
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(15, "div", 18)(16, "div", 19)(17, "ngx-image-uploader", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("changeHoverState", function ContactMutationComponent_Template_ngx_image_uploader_changeHoverState_17_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx.hoverState = $event);
            })("uploadedImageAsset", function ContactMutationComponent_Template_ngx_image_uploader_uploadedImageAsset_17_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx.updateImageAsset($event));
            })("uploadImageAssetError", function ContactMutationComponent_Template_ngx_image_uploader_uploadImageAssetError_17_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx.handleImageUploadError($event));
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(18, ContactMutationComponent__svg_svg_18_Template, 7, 3, "svg", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(19, "div", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(20, ContactMutationComponent_img_20_Template, 1, 1, "img", 23)(21, ContactMutationComponent_div_21_Template, 4, 0, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(22, "div", 25)(23, "div", 26)(24, "div", 27)(25, "label", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(26);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(27, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(28, "input", 29, 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(30, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(31, ContactMutationComponent_ng_container_31_Template, 4, 3, "ng-container", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(32, "div", 26)(33, "div", 27)(34, "label", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(35);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(36, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(37, "input", 31, 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(39, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(40, ContactMutationComponent_ng_container_40_Template, 2, 1, "ng-container", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(41, "div", 32)(42, "label", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(43);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(44, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(45, "input", 33, 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(47, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(48, "div", 26)(49, "div", 27)(50, "label", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(51);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(52, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(53, "input", 34, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(55, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(56, "div", 32)(57, "label", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(58);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(59, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(60, "input", 35, 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(62, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(63, "div", 26)(64, "div", 27)(65, "label", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(66);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(67, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(68, "input", 36, 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(70, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(71, "div", 26)(72, "div", 27)(73, "label", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(74);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(75, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(76, "ng-select", 37);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(77, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(78, "div", 32)(79, "label", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(80);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(81, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(82, "ng-select", 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(83, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(84, ContactMutationComponent_ng_option_84_Template, 2, 2, "ng-option", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(85, "div", 26)(86, "div", 40)(87, "ga-tags-color-input", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("selectedTagsEvent", function ContactMutationComponent_Template_ga_tags_color_input_selectedTagsEvent_87_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx.selectedTagsEvent($event));
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(88, "div", 42)(89, "div", 12)(90, "button", 43);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("click", function ContactMutationComponent_Template_button_click_90_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx.nextStep());
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(91);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(92, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(93, "button", 44);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("click", function ContactMutationComponent_Template_button_click_93_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx.cancel());
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(94);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(95, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(96, "nb-step", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(97, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(98, ContactMutationComponent_ng_template_98_Template, 2, 3, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplateRefExtractor"] */ .C5r)(100, ContactMutationComponent_form_100_Template, 18, 15, "form", 45);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(101, ContactMutationComponent_nb_step_101_Template, 23, 26, "nb-step", 46);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(102, "nb-step", 47);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(103, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(104, ContactMutationComponent_ng_template_104_Template, 2, 3, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplateRefExtractor"] */ .C5r);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(106, "div", 48)(107, "div", 26)(108, "div", 49)(109, "div", 50)(110, "ga-employee-multi-select", 51);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("onLoadEmployees", function ContactMutationComponent_Template_ga_employee_multi_select_onLoadEmployees_110_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx.onLoadEmployees($event));
            })("selectedChange", function ContactMutationComponent_Template_ga_employee_multi_select_selectedChange_110_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx.onMembersSelected($event));
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(111, ContactMutationComponent_div_111_Template, 3, 1, "div", 52);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(112, "div", 42)(113, "button", 53);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(114);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(115, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(116, "button", 54);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("click", function ContactMutationComponent_Template_button_click_116_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx.submitForm());
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(117);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(118, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()()()()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("haveLink", true);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(5, 50, ctx.organizationContact ? "ORGANIZATIONS_PAGE.EDIT.EDIT_CONTACT" : "ORGANIZATIONS_PAGE.EDIT.ADD_NEW_CONTACT"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("stepControl", ctx.contMainForm)("label", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(10, 52, "CONTACTS_PAGE.MAIN"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("formGroup", ctx.contMainForm);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.contMainForm && ctx.contMainForm.get("imageUrl").value);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpureFunction1"] */ .eq3(98, _c3, ctx.hoverState ? "0.2" : "0"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.contMainForm && ctx.contMainForm.get("imageUrl").value);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngIf", !ctx.contMainForm || !ctx.contMainForm.get("imageUrl").value);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(27, 54, "ORGANIZATIONS_PAGE.EDIT.NAME"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(30, 56, "ORGANIZATIONS_PAGE.EDIT.NAME"))("status", ctx.FormHelpers.isInvalidControl(ctx.contMainForm, "name") ? "danger" : "basic");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.FormHelpers.isInvalidControl(ctx.contMainForm, "name"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(36, 58, "ORGANIZATIONS_PAGE.EDIT.PRIMARY_EMAIL"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(39, 60, "ORGANIZATIONS_PAGE.EDIT.PRIMARY_EMAIL"))("status", ctx.FormHelpers.isInvalidControl(ctx.contMainForm, "primaryEmail") ? "danger" : "basic");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.FormHelpers.isInvalidControl(ctx.contMainForm, "primaryEmail"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(44, 62, "ORGANIZATIONS_PAGE.EDIT.PHONE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(47, 64, "ORGANIZATIONS_PAGE.EDIT.PHONE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(52, 66, "ORGANIZATIONS_PAGE.EDIT.WEBSITE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(55, 68, "ORGANIZATIONS_PAGE.EDIT.WEBSITE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(59, 70, "ORGANIZATIONS_PAGE.EDIT.FAX"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(62, 72, "ORGANIZATIONS_PAGE.EDIT.FAX"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(67, 74, "ORGANIZATIONS_PAGE.EDIT.FISCAL_INFORMATION"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(70, 76, "ORGANIZATIONS_PAGE.EDIT.FISCAL_INFORMATION"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(75, 78, "ORGANIZATIONS_PAGE.EDIT.PROJECTS"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("addTag", ctx.addNewProject)("items", ctx.projects)("multiple", true)("searchable", true)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(77, 80, "ORGANIZATIONS_PAGE.EDIT.PROJECTS"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(81, 82, "CONTACTS_PAGE.CONTACT_TYPE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("clearable", false)("searchable", false)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(83, 84, "CONTACTS_PAGE.CONTACT_TYPE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx.contactTypes);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("selectedTags", ctx.tags)("isOrgLevel", true);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("disabled", ctx.contMainForm.invalid);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(92, 86, "BUTTONS.NEXT"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(95, 88, "BUTTONS.CANCEL"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("stepControl", ctx.locationForm)("label", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(97, 90, "CONTACTS_PAGE.ADDRESS"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.locationForm);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.budgetForm);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("label", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(103, 92, "CONTACTS_PAGE.MEMBERS"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("selectedEmployeeIds", ctx.selectedEmployeeIds);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.selectedMembers);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(115, 94, "BUTTONS.PREVIOUS"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(118, 96, "BUTTONS.SAVE"), " ");
          }
        },
        dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_19__/* .NbButtonComponent */ .YP2, _nebular_theme__WEBPACK_IMPORTED_MODULE_19__/* .NbCardComponent */ .SrT, _nebular_theme__WEBPACK_IMPORTED_MODULE_19__/* .NbCardBodyComponent */ .KH5, _nebular_theme__WEBPACK_IMPORTED_MODULE_19__/* .NbCardHeaderComponent */ .zJv, _nebular_theme__WEBPACK_IMPORTED_MODULE_19__/* .NbInputDirective */ .i6h, _nebular_theme__WEBPACK_IMPORTED_MODULE_19__/* .NbSelectComponent */ .S81, _nebular_theme__WEBPACK_IMPORTED_MODULE_19__/* .NbOptionComponent */ .ZJ2, _nebular_theme__WEBPACK_IMPORTED_MODULE_19__/* .NbStepperComponent */ .RCE, _nebular_theme__WEBPACK_IMPORTED_MODULE_19__/* .NbStepComponent */ .oYO, _nebular_theme__WEBPACK_IMPORTED_MODULE_19__/* .NbStepperNextDirective */ .Se1, _nebular_theme__WEBPACK_IMPORTED_MODULE_19__/* .NbStepperPreviousDirective */ .e09, _nebular_theme__WEBPACK_IMPORTED_MODULE_19__/* .NbTooltipDirective */ .BmQ, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_20__/* .NgSelectComponent */ .vr, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_20__/* .NgOptionComponent */ .xt, _packages_ui_core_shared_src_lib_employee_employee_multi_select_employee_multi_select_component__WEBPACK_IMPORTED_MODULE_21__/* .EmployeeSelectComponent */ .O, _packages_ui_core_shared_src_lib_image_uploader_image_uploader_component__WEBPACK_IMPORTED_MODULE_22__/* .ImageUploaderComponent */ .t, _packages_ui_core_shared_src_lib_forms_maps_leaflet_leaflet_component__WEBPACK_IMPORTED_MODULE_23__/* .LeafletMapComponent */ .x, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_6__/* .LocationFormComponent */ .f, _angular_common__WEBPACK_IMPORTED_MODULE_24__/* .NgForOf */ .Sq, _angular_common__WEBPACK_IMPORTED_MODULE_24__/* .NgIf */ .bT, _angular_common__WEBPACK_IMPORTED_MODULE_24__/* .NgStyle */ .B3, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* ["ɵNgNoValidate"] */ .qT, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .DefaultValueAccessor */ .me, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .NumberValueAccessor */ .Q0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .NgControlStatus */ .BC, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .NgControlStatusGroup */ .cb, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .PatternValidator */ .R_, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .MinValidator */ .VZ, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .FormGroupDirective */ .j4, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .FormControlName */ .JD, _packages_ui_core_shared_src_lib_components_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_25__/* .AvatarComponent */ .f, _packages_ui_core_shared_src_lib_components_back_navigation_back_navigation_component__WEBPACK_IMPORTED_MODULE_26__/* .BackNavigationComponent */ .r, _packages_ui_core_shared_src_lib_directives_img_directive__WEBPACK_IMPORTED_MODULE_27__/* .ImgDirective */ .z, _packages_ui_core_shared_src_lib_tags_tags_color_input_tags_color_input_component__WEBPACK_IMPORTED_MODULE_28__/* .TagsColorInputComponent */ .i, _angular_common__WEBPACK_IMPORTED_MODULE_24__/* .TitleCasePipe */ .PV, _angular_common__WEBPACK_IMPORTED_MODULE_24__/* .KeyValuePipe */ .lG, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__/* .TranslatePipe */ .D9],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   i[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n}\n[dir=ltr]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n[dir=rtl]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--gauzy-text-color-1);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(245, 109, 88, 0.3);\n  border-width: 2px;\n  color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(245, 109, 88, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 16px;\n  letter-spacing: 0em;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(126, 126, 143, 0.3);\n  border-width: 2px;\n  color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(126, 126, 143, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(37, 184, 105, 0.3);\n  border-width: 2px;\n  color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(37, 184, 105, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[disabled][_ngcontent-%COMP%], \n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic.btn-disabled[_ngcontent-%COMP%] {\n  background-color: var(--button-outline-basic-disabled-background-color);\n  border-color: var(--button-outline-basic-disabled-border-color);\n  color: var(--button-outline-basic-disabled-text-color);\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].primary.appearance-filled.status-primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  border: unset;\n  background-color: var(--color-primary-transparent-default);\n  box-shadow: var(--gauzy-shadow) 0, 0, 0, 0.15;\n}\n[dir=ltr]   [_nghost-%COMP%]     input, \n[dir=ltr]   [_nghost-%COMP%]     textarea {\n  text-align: start;\n}\n[dir=rtl]   [_nghost-%COMP%]     input, \n[dir=rtl]   [_nghost-%COMP%]     textarea {\n  text-align: end;\n}\n[_nghost-%COMP%]     input, \n[_nghost-%COMP%]     nb-select.appearance-outline.status-basic .select-button, \n[_nghost-%COMP%]     .ng-select .ng-select-container {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n  height: 42px !important;\n}\n[_nghost-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder, \n[_nghost-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {\n  top: unset !important;\n}\n[_nghost-%COMP%]     label, \n[_nghost-%COMP%]     .label {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  color: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]     textarea {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n}\n[_nghost-%COMP%]     .ng-select .ng-select-container input, \n[_nghost-%COMP%]     nb-tag-list input {\n  background-color: unset !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n}\n\n.contact-container[_ngcontent-%COMP%] {\n  transition: transform 150ms ease-in-out;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  margin-right: 3rem;\n}\n.contact-container[_ngcontent-%COMP%]   .contact-photo[_ngcontent-%COMP%] {\n  width: fit-content;\n  height: 294px;\n  position: relative;\n}\n.contact-container[_ngcontent-%COMP%]   .contact-photo[_ngcontent-%COMP%]   .image-overlay[_ngcontent-%COMP%] {\n  pointer-events: none;\n  background: black;\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  border-radius: var(--border-radius);\n}\n.contact-container[_ngcontent-%COMP%]   .contact-photo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], \n.contact-container[_ngcontent-%COMP%]   .contact-photo[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\n  width: 299px;\n  height: 294px;\n  object-fit: cover;\n  border-radius: var(--border-radius);\n}\n.contact-container[_ngcontent-%COMP%]   .contact-photo[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\n  background-color: rgba(126, 126, 143, 0.1);\n}\n.contact-container[_ngcontent-%COMP%]   .contact-photo[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n.contact-container[_ngcontent-%COMP%]   .contact-photo[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  color: rgb(126, 126, 143);\n  z-index: 2;\n  transition: opacity 0.2s ease-in;\n  position: absolute;\n  top: calc(50% - 8px);\n  left: calc(50% - 70.5px);\n}\n.contact-container[_ngcontent-%COMP%]   .contact-photo[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  z-index: 2;\n  transition: opacity 0.2s ease-in;\n  opacity: 0.3;\n  position: absolute;\n  top: calc(50% - 34px);\n  left: calc(50% - 34px);\n}\n.contact-container[_ngcontent-%COMP%]   .contact-photo[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   g[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%] {\n  fill: var(--text-primary-color);\n}\n\n.contact-form[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.team-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.team-card[_ngcontent-%COMP%]   .name-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 10px;\n}\n.team-card[_ngcontent-%COMP%]   .name-container[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%] {\n  width: 70px;\n  height: 50px;\n  display: flex;\n}\n.team-card[_ngcontent-%COMP%]   .name-container[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100%;\n  max-width: 70px;\n}\n.team-card[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%] {\n  display: flex;\n  width: 160px;\n  justify-content: space-between;\n  margin-top: 15px;\n  margin-left: 9px;\n}\n\n.buttons[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 2.75rem;\n  bottom: 1.4rem;\n}\n\nh4[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 600;\n  line-height: 30px;\n  letter-spacing: 0em;\n}\n\n[_nghost-%COMP%] {\n  height: 100%;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%], \n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%], \n[_nghost-%COMP%]   nb-card-header[_ngcontent-%COMP%] {\n  background-color: unset;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%], \n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%], \n[_nghost-%COMP%]   nb-stepper[_ngcontent-%COMP%] {\n  height: 100%;\n  padding-bottom: 0 !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  margin: -1rem;\n  border: var(--gauzy-card-2);\n}\n[_nghost-%COMP%]   nb-stepper[_ngcontent-%COMP%]     .step-content {\n  overflow-y: auto;\n  height: calc(100vh - 20.75rem);\n}\n[_nghost-%COMP%]   .custom-card[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n[_nghost-%COMP%]     ngx-image-uploader input {\n  height: 100% !important;\n}\n[_nghost-%COMP%]     input, \n[_nghost-%COMP%]     nb-select.appearance-outline.status-basic .select-button, \n[_nghost-%COMP%]     .ng-select .ng-select-container {\n  background-color: var(--gauzy-card-1) !important;\n  border: none;\n  height: 42px !important;\n}\n[_nghost-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder, \n[_nghost-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {\n  top: unset !important;\n}\n[_nghost-%COMP%]     label, \n[_nghost-%COMP%]     .label {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  color: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]     textarea {\n  background-color: var(--gauzy-card-1) !important;\n  border: none;\n}\n[_nghost-%COMP%]     .ng-select .ng-select-container input, \n[_nghost-%COMP%]     nb-tag-list input {\n  background-color: unset !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: transparent;\n}"]
      });
    }
  };
  return ContactMutationComponent;
})();
ContactMutationComponent = ContactMutationComponent_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_29__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_12__/* .UntilDestroy */ .d)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_29__/* .__metadata */ .Sn)("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .UntypedFormBuilder */ .ze, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_13__/* .Store */ .il, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_14__/* .OrganizationProjectsService */ .d, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_15__/* .ToastrService */ .t, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__/* .TranslateService */ .c$, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_17__/* .ErrorHandlingService */ .X, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_18__/* .FilterArrayPipe */ .O])], ContactMutationComponent);


/***/ }),

/***/ 95150:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContactsModule: () => (/* binding */ ContactsModule)
/* harmony export */ });
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(56383);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(55567);
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(79475);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(19223);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(941);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(42433);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(57952);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(80784);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6269);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(58504);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(46880);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(54462);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(48052);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(9669);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(98722);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(38834);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(61444);
/* harmony import */ var _contact_mutation_contact_mutation_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90687);
/* harmony import */ var _contacts_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27775);
/* harmony import */ var _contacts_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14031);
/* harmony import */ var _invite_contact_invite_contact_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(68863);
/* harmony import */ var _table_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(23825);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(26860);















const COMPONENTS = [_contacts_component__WEBPACK_IMPORTED_MODULE_2__/* .ContactsComponent */ .d, _invite_contact_invite_contact_component__WEBPACK_IMPORTED_MODULE_3__/* .InviteContactComponent */ .j, _contact_mutation_contact_mutation_component__WEBPACK_IMPORTED_MODULE_0__/* .ContactMutationComponent */ .F, _table_components__WEBPACK_IMPORTED_MODULE_4__/* .ContactActionComponent */ .C];
let ContactsModule = /*#__PURE__*/(() => {
  class ContactsModule {
    static {
      this.ɵfac = function ContactsModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || ContactsModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdefineNgModule"] */ .$C({
        type: ContactsModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdefineInjector"] */ .G2t({
        providers: [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_6__/* .OrganizationContactService */ .$, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_7__/* .OrganizationProjectsService */ .d, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_8__/* .InviteService */ .p],
        imports: [_nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbButtonModule */ .P5N, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbCardModule */ .lVF, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbDialogModule */ .nZv.forChild(), _nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbIconModule */ .clu, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbInputModule */ .pty, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbSelectModule */ .VcP, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbSpinnerModule */ .gYs, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbStepperModule */ .QyE, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbToggleModule */ .jVr, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbTooltipModule */ .IB0, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__/* .NgSelectModule */ .MQ, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_11__/* .CardGridModule */ .n, _contacts_routing_module__WEBPACK_IMPORTED_MODULE_1__/* .ContactsRoutingModule */ .g, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_12__/* .EmployeeMultiSelectModule */ .I, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_13__/* .FavoriteToggleModule */ .F, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_14__/* .FileUploaderModule */ .N, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_15__/* .ImageUploaderModule */ .M, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_16__/* .LeafletMapModule */ .q, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_17__/* .LocationFormModule */ .C, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_18__/* .SmartDataViewLayoutModule */ .H, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_19__/* .SharedModule */ .G, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_20__/* .TagsColorInputModule */ .x, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__/* .TranslateModule */ .h.forChild(), ngx_permissions__WEBPACK_IMPORTED_MODULE_22__/* .NgxPermissionsModule */ .Ov.forChild()]
      });
    }
  }
  return ContactsModule;
})();

/***/ }),

/***/ 95959:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ NoDataMessageComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(55598);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(41598);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19223);
/* harmony import */ var _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38546);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26860);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56383);







const _c0 = [[["", "message", ""]]];
const _c1 = ["[message]"];
let NoDataMessageComponent = /*#__PURE__*/(() => {
  let NoDataMessageComponent = class NoDataMessageComponent extends _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_0__/* .TranslationBaseComponent */ .K {
    constructor(translateService) {
      super(translateService);
      this.translateService = translateService;
      this.title = this.getTranslation('SM_TABLE.NO_DATA_MESSAGE');
    }
    ngOnInit() {}
    static {
      this.ɵfac = function NoDataMessageComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || NoDataMessageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__/* .TranslateService */ .c$));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineComponent"] */ .VBU({
        type: NoDataMessageComponent,
        selectors: [["ngx-no-data-message"]],
        inputs: {
          title: "title",
          message: "message"
        },
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
        ngContentSelectors: _c1,
        decls: 11,
        vars: 2,
        consts: [[1, "p-0", "no-data-found"], [1, "row", "align-items-center", "h-100"], [1, "col-12"], [1, "text-center", "d-flex", "justify-content-center", "py-3"], ["icon", "bar-chart-2-outline", 1, "no-record-icon"], [1, "text-center", "m-0"], [1, "text-center"]],
        template: function NoDataMessageComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵprojectionDef"] */ .NAR(_c0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "nb-card", 0)(1, "nb-card-body")(2, "div", 1)(3, "div", 2)(4, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(5, "nb-icon", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(6, "h5", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(8, "p", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵprojection"] */ .SdG(10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", ctx.title, " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", ctx.message, " ");
          }
        },
        dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbCardComponent */ .SrT, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbCardBodyComponent */ .KH5, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbIconComponent */ .tHu],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.no-data-found[_ngcontent-%COMP%] {\n  overflow-y: hidden;\n  background-color: var(--gauzy-card-1) !important;\n  height: 100% !important;\n  margin: 0;\n}\n\nh5[_ngcontent-%COMP%], \ndiv[_ngcontent-%COMP%] {\n  color: var(--gauzy-text-color-1);\n  font-weight: 600;\n  font-size: 18px;\n}\n\ndiv[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n}\n\np[_ngcontent-%COMP%] {\n  color: var(--gauzy-text-color-2);\n}\n\n.no-record-icon[_ngcontent-%COMP%] {\n  transform: rotate(0.75turn) scaleY(-1);\n  font-size: 48px;\n}\n\n[_nghost-%COMP%] {\n  height: 100%;\n}"]
      });
    }
  };
  NoDataMessageComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .UntilDestroy */ .d)({
    checkProperties: true
  }), (0,tslib__WEBPACK_IMPORTED_MODULE_4__/* .__metadata */ .Sn)("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__/* .TranslateService */ .c$])], NoDataMessageComponent);
  return NoDataMessageComponent;
})();


/***/ })

}]);