"use strict";
(self["webpackChunkgauzy"] = self["webpackChunkgauzy"] || []).push([[9792],{

/***/ 3563:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: () => (/* binding */ RolePermissionsService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80189);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64913);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26024);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26860);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45715);





let RolePermissionsService = /*#__PURE__*/(() => {
  class RolePermissionsService {
    constructor(http) {
      this.http = http;
    }
    /**
     * Retrieves role permissions based on the specified filter criteria.
     *
     * @param {IRolePermissionFindInput} [where] - An optional filter object used to specify the criteria for retrieving role permissions.
     * @returns {Promise<IPagination<IRolePermission>>} - Returns a promise that resolves to a pagination object containing the role permissions.
     */
    getRolePermissions(where) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ ._)(this.http.get(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/role-permissions`, {
        params: (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_2__/* .toParams */ .SV)({
          where
        })
      }));
    }
    /**
     * Creates a new role permission.
     *
     * @param input - The input data for creating the role permission.
     * @returns A promise that resolves to the created role permission.
     */
    create(input) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ ._)(this.http.post(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/role-permissions`, input));
    }
    /**
     * Updates an existing role permission.
     *
     * @param id - The ID of the role permission to update.
     * @param input - The input data for updating the role permission.
     * @returns A promise that resolves to the updated role permission.
     */
    update(id, input) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ ._)(this.http.put(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/role-permissions/${id}`, input));
    }
    static {
      this.ɵfac = function RolePermissionsService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || RolePermissionsService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵinject"] */ .KVO(_angular_common_http__WEBPACK_IMPORTED_MODULE_4__/* .HttpClient */ .Qq));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdefineInjectable"] */ .jDH({
        token: RolePermissionsService,
        factory: RolePermissionsService.ɵfac
      });
    }
  }
  return RolePermissionsService;
})();

/***/ }),

/***/ 34121:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   k: () => (/* binding */ RolesPermissionsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(908);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4106);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17785);
/* harmony import */ var _roles_permissions_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70397);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26860);






const routes = [{
  path: '',
  component: _roles_permissions_component__WEBPACK_IMPORTED_MODULE_0__/* .RolesPermissionsComponent */ .B,
  canActivate: [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_1__/* .PermissionsGuard */ .a],
  data: {
    permissions: {
      only: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__/* .PermissionsEnum */ .U.CHANGE_ROLES_PERMISSIONS],
      redirectTo: '/pages/settings'
    },
    selectors: {
      project: false,
      employee: false,
      date: false,
      organization: false
    }
  }
}];
let RolesPermissionsRoutingModule = /*#__PURE__*/(() => {
  class RolesPermissionsRoutingModule {
    static {
      this.ɵfac = function RolesPermissionsRoutingModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || RolesPermissionsRoutingModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdefineNgModule"] */ .$C({
        type: RolesPermissionsRoutingModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__/* .RouterModule */ .iI.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_4__/* .RouterModule */ .iI]
      });
    }
  }
  return RolesPermissionsRoutingModule;
})();

/***/ }),

/***/ 69792:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RolesPermissionsModule: () => (/* binding */ RolesPermissionsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14572);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10936);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(56383);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(19223);
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(79475);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3563);
/* harmony import */ var _roles_permissions_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34121);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26860);










let RolesPermissionsModule = /*#__PURE__*/(() => {
  class RolesPermissionsModule {
    static {
      this.ɵfac = function RolesPermissionsModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || RolesPermissionsModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineNgModule"] */ .$C({
        type: RolesPermissionsModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineInjector"] */ .G2t({
        providers: [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_2__/* .RolePermissionsService */ .q],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__/* .CommonModule */ .MD, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .FormsModule */ .YN, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .ReactiveFormsModule */ .X1, _roles_permissions_routing_module__WEBPACK_IMPORTED_MODULE_0__/* .RolesPermissionsRoutingModule */ .k, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbAutocompleteModule */ .FUX, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbButtonModule */ .P5N, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbCardModule */ .lVF, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbFormFieldModule */ .NeG, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbIconModule */ .clu, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbInputModule */ .pty, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbSpinnerModule */ .gYs, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbToggleModule */ .jVr, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbTooltipModule */ .IB0, ngx_permissions__WEBPACK_IMPORTED_MODULE_6__/* .NgxPermissionsModule */ .Ov.forChild(), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__/* .TranslateModule */ .h.forChild()]
      });
    }
  }
  return RolesPermissionsModule;
})();

/***/ }),

/***/ 70397:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ RolesPermissionsComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(73014);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(64411);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(10936);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(45715);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(19223);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(50666);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(24237);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(97003);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(47060);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(71181);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(73246);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(72781);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(87081);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(23423);
/* harmony import */ var _gauzy_ui_config__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(48840);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13271);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17785);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(15480);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(3563);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(27038);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(71924);
/* harmony import */ var _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38546);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(14572);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(56383);
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(79475);




















const _c0 = ["input"];
const _c1 = () => ["CHANGE_ROLES_PERMISSIONS"];
const _c2 = a0 => ({
  name: a0
});
function RolesPermissionsComponent_nb_option_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const role_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    const input_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵclassMap"] */ .HbH(role_r2.name === input_r3.value ? "active" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("value", role_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", role_r2.name, " ");
  }
}
function RolesPermissionsComponent_div_24_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(1, "div", 20)(2, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function RolesPermissionsComponent_div_24_ng_container_1_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r4);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r4.createRole());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(4, "nb-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    const input_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(3, 2, "BUTTONS.CREATE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind2"] */ .i5U(6, 4, "BUTTONS.CREATE_NEW_ROLE", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction1"] */ .eq3(7, _c2, input_r3.value)), " ");
  }
}
function RolesPermissionsComponent_div_24_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(1, "div", 23)(2, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function RolesPermissionsComponent_div_24_ng_container_2_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r6);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r4.deleteRole());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(4, "nb-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(3, 2, "BUTTONS.DELETE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind2"] */ .i5U(6, 4, "BUTTONS.DELETE_EXISTING_ROLE", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction1"] */ .eq3(7, _c2, ctx_r4.role.name)), " ");
  }
}
function RolesPermissionsComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, RolesPermissionsComponent_div_24_ng_container_1_Template, 7, 9, "ng-container", 19)(2, RolesPermissionsComponent_div_24_ng_container_2_Template, 7, 9, "ng-container", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r4.isWantToCreate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r4.role && ctx_r4.role.isSystem === false && !ctx_r4.isWantToCreate);
  }
}
function RolesPermissionsComponent_nb_toggle_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-toggle", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayListener"] */ .mxI("checkedChange", function RolesPermissionsComponent_nb_toggle_32_Template_nb_toggle_checkedChange_0_listener($event) {
      const permission_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r7).$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayBindingSet"] */ .DH7(ctx_r4.enabledPermissions[permission_r8], $event) || (ctx_r4.enabledPermissions[permission_r8] = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("checkedChange", function RolesPermissionsComponent_nb_toggle_32_Template_nb_toggle_checkedChange_0_listener($event) {
      const permission_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r7).$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r4.permissionChanged(permission_r8, $event, !ctx_r4.isDisabledGeneralPermissions()));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(1, "div", 27)(2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(5, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
  }
  if (rf & 2) {
    const permission_r8 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayProperty"] */ .R50("checked", ctx_r4.enabledPermissions[permission_r8]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("disabled", ctx_r4.isDisabledGeneralPermissions());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(4, 4, "ORGANIZATIONS_PAGE.PERMISSIONS." + permission_r8));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(7, 6, "ORGANIZATIONS_PAGE.PERMISSIONS." + permission_r8));
  }
}
function RolesPermissionsComponent_nb_toggle_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-toggle", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayListener"] */ .mxI("checkedChange", function RolesPermissionsComponent_nb_toggle_41_Template_nb_toggle_checkedChange_0_listener($event) {
      const permission_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r9).$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayBindingSet"] */ .DH7(ctx_r4.enabledPermissions[permission_r10], $event) || (ctx_r4.enabledPermissions[permission_r10] = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("checkedChange", function RolesPermissionsComponent_nb_toggle_41_Template_nb_toggle_checkedChange_0_listener($event) {
      const permission_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r9).$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r4.permissionChanged(permission_r10, $event, !ctx_r4.isDisabledAdministrationPermissions()));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(1, "div", 27)(2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(5, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
  }
  if (rf & 2) {
    const permission_r10 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayProperty"] */ .R50("checked", ctx_r4.enabledPermissions[permission_r10]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("disabled", ctx_r4.isDisabledAdministrationPermissions());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(4, 4, "ORGANIZATIONS_PAGE.PERMISSIONS." + permission_r10));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(7, 6, "ORGANIZATIONS_PAGE.PERMISSIONS." + permission_r10));
  }
}
let RolesPermissionsComponent = class RolesPermissionsComponent extends _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_1__/* .TranslationBaseComponent */ .K {
  constructor(translateService, toastrService, rolePermissionsService, rolesService, store) {
    super(translateService);
    this.translateService = translateService;
    this.toastrService = toastrService;
    this.rolePermissionsService = rolePermissionsService;
    this.rolesService = rolesService;
    this.store = store;
    this.rolesEnum = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__/* .RolesEnum */ .$;
    this.permissionGroups = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__/* .PermissionGroups */ .q;
    this.isWantToCreate = false;
    this.enabledPermissions = {};
    this.roles = [];
    this.permissions = [];
    this.filteredGeneralPermissions = [];
    this.filteredAdminPermissions = [];
    this.roles$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)([]);
    this.permissions$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__/* .Subject */ .B();
    this.roleSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__/* .Subject */ .B();
    this.formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__/* .FormControl */ .MJ();
    this.searchControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__/* .FormControl */ .MJ('');
  }
  ngOnInit() {
    this.roleSubject$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .debounceTime */ .B)(100), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .tap */ .M)(() => this.getRoles()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__/* .untilDestroyed */ .s)(this)).subscribe();
    this.store.user$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .filter */ .p)(user => !!user), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .tap */ .M)(user => this.user = user), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .tap */ .M)(() => this.roleSubject$.next(true)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__/* .untilDestroyed */ .s)(this)).subscribe();
    this._setupSearchFilter();
  }
  ngAfterViewInit() {
    this.roles$ = this.formControl.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .debounceTime */ .B)(300), (0,rxjs__WEBPACK_IMPORTED_MODULE_11__/* .startWith */ .Z)(''), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__/* .map */ .T)(value => this._filter(value)));
    this.permissions$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .debounceTime */ .B)(300), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .tap */ .M)(() => this.loading = true), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .tap */ .M)(() => this.loadPermissions()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__/* .untilDestroyed */ .s)(this)).subscribe();
  }
  /**
   * Roles filters using substring
   *
   * @param value
   * @returns
   */
  _filter(value) {
    return this.roles.filter(role => !!role);
  }
  /**
   * Filtered roles options
   *
   * @param value
   * @returns
   */
  _getFilteredOptions(value) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(value).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__/* .map */ .T)(value => this._filter(value)));
  }
  /**
   * On autocomplete selection
   * @param role
   */
  onSelectionChange(role) {
    if (role) {
      this.roles$ = this._getFilteredOptions(role);
      this.onSelectedRole();
    }
  }
  /**
   * On input change
   */
  onInputChange() {
    const nativeElementValue = this.input.nativeElement.value;
    if (nativeElementValue) {
      const [role] = this.roles.filter(role => role.name === nativeElementValue);
      this.role = role;
      /**
       * We want to create new role
       */
      this.isWantToCreate = !this.roles.find(role => role.name === nativeElementValue);
    }
  }
  /**
   * Loads and sets the enabled permissions for the current role.
   */
  loadPermissions() {
    var _this = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A)(function* () {
      _this.enabledPermissions = {};
      if (!_this.role) return;
      try {
        const {
          id: roleId,
          tenantId
        } = _this.role;
        // Fetch role permissions and update the enabledPermissions map
        const {
          items: permissions
        } = yield _this.rolePermissionsService.getRolePermissions({
          roleId,
          tenantId
        });
        _this.permissions = permissions;
        _this.permissions.forEach(({
          permission,
          enabled
        }) => {
          _this.enabledPermissions[permission] = enabled;
        });
      } finally {
        _this.loading = false;
      }
    })();
  }
  /**
   * Handles the change in permission status and updates it accordingly.
   *
   * @param {string} permission - The name of the permission to be changed.
   * @param {boolean} enabled - Indicates whether the permission should be enabled or disabled.
   * @param {boolean} allowChange - Flag indicating whether the current user has the right to change the permission.
   * @returns {Promise<void>}
   */
  permissionChanged(permission, enabled, allowChange) {
    var _this2 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A)(function* () {
      // Check if the user has permission to make changes
      if (!allowChange) {
        _this2.toastrService.danger(_this2.getTranslation('TOASTR.MESSAGE.PERMISSION_UPDATE_ERROR'), _this2.getTranslation('TOASTR.TITLE.ERROR'));
        return;
      }
      try {
        const {
          id: roleId
        } = _this2.role;
        const {
          tenantId
        } = _this2.user;
        const permissionToEdit = _this2.permissions.find(p => p.permission === permission);
        const payload = {
          enabled,
          roleId,
          tenantId,
          permission
        };
        // Update or create the permission based on its existence
        if (permissionToEdit?.id) {
          yield _this2.rolePermissionsService.update(permissionToEdit.id, payload);
        } else {
          yield _this2.rolePermissionsService.create(payload);
        }
        // Display success message
        _this2.toastrService.success(_this2.getTranslation('TOASTR.MESSAGE.PERMISSION_UPDATED', {
          permissionName: _this2.getTranslation('ORGANIZATIONS_PAGE.PERMISSIONS.' + permission),
          roleName: _this2.formControl.value
        }), _this2.getTranslation('TOASTR.TITLE.SUCCESS'));
      } catch (error) {
        // Display error message
        _this2.toastrService.danger(_this2.getTranslation('TOASTR.MESSAGE.PERMISSION_UPDATE_ERROR'), _this2.getTranslation('TOASTR.TITLE.ERROR'));
      } finally {
        // Notify about permission update
        _this2.permissions$.next(true);
      }
    })();
  }
  /**
   * Handles the change of the currently selected role.
   */
  onSelectedRole() {
    this.role = this.getRoleByName(this.formControl.value);
    this.isWantToCreate = !this.role;
    this.permissions$.next(true);
  }
  /**
   * Retrieves a role by its name.
   *
   * @param {string} name - The name of the role to retrieve.
   * @returns {IRole | undefined} - The found role, or undefined if not found.
   */
  getRoleByName(name) {
    return this.roles.find(role => role.name === name);
  }
  /**
   * Retrieves administration permissions, removing certain permissions in DEMO mode.
   *
   * @returns {PermissionsEnum[]} - The filtered list of administration permissions.
   */
  getAdministrationPermissions() {
    const deniedPermissions = new Set([_gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__/* .PermissionsEnum */ .U.ACCESS_DELETE_ACCOUNT, _gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__/* .PermissionsEnum */ .U.ACCESS_DELETE_ALL_DATA]);
    return this.permissionGroups.ADMINISTRATION.filter(permission => !_gauzy_ui_config__WEBPACK_IMPORTED_MODULE_14__/* .environment */ .c.DEMO || !deniedPermissions.has(permission));
  }
  /**
   * GET all tenant roles
   */
  getRoles() {
    var _this3 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A)(function* () {
      _this3.roles$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)((yield _this3.rolesService.getAll()).items).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__/* .map */ .T)(roles => roles), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .tap */ .M)(roles => _this3.roles = roles), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .tap */ .M)(() => _this3.formControl.setValue(_this3.formControl.value || _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__/* .RolesEnum */ .$.EMPLOYEE)));
    })();
  }
  /**
   * Create New Role
   */
  createRole() {
    const value = this.input.nativeElement.value;
    this.rolesService.create({
      name: value
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .debounceTime */ .B)(100), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .tap */ .M)(() => this.roleSubject$.next(true)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .tap */ .M)(() => this.isWantToCreate = false), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .tap */ .M)(role => {
      this.toastrService.success(this.getTranslation('TOASTR.MESSAGE.ROLE_CREATED', {
        name: role.name
      }), this.getTranslation('TOASTR.TITLE.SUCCESS'));
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_15__/* .catchError */ .W)(error => {
      this.toastrService.error(this.getTranslation('TOASTR.MESSAGE.ROLE_CREATED_ERROR', {
        name: value
      }), this.getTranslation('TOASTR.TITLE.ERROR'));
      throw new Error(error);
    }), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__/* .untilDestroyed */ .s)(this)).subscribe();
  }
  /**
   * Delete existed role
   */
  deleteRole() {
    if (!this.role.isSystem) {
      this.rolesService.delete(this.role).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .debounceTime */ .B)(100), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .tap */ .M)(() => this.formControl.setValue('')), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .tap */ .M)(() => this.roleSubject$.next(true)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .tap */ .M)(result => {
        if (result.status === _angular_common_http__WEBPACK_IMPORTED_MODULE_16__/* .HttpStatusCode */ .kG.Forbidden) {
          throw new Error();
        }
        this.toastrService.success(this.getTranslation('TOASTR.MESSAGE.ROLE_DELETED', {
          name: this.role.name
        }), this.getTranslation('TOASTR.TITLE.SUCCESS'));
      }), (0,rxjs__WEBPACK_IMPORTED_MODULE_15__/* .catchError */ .W)(error => {
        this.toastrService.error(this.getTranslation('TOASTR.MESSAGE.ROLE_DELETED_ERROR', {
          name: this.role.name
        }), this.getTranslation('TOASTR.TITLE.ERROR'));
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(error);
      }), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__/* .untilDestroyed */ .s)(this)).subscribe();
    }
  }
  /**
   * Checks whether the General Group Permissions should be disabled.
   *
   * @returns {boolean} - Returns true if the general permissions are disabled; otherwise, false.
   */
  isDisabledGeneralPermissions() {
    if (!this.role) return true;
    // Disable permissions for "SUPER_ADMIN" role and when the current user's role is "ADMIN"
    const userRole = this.user.role.name;
    const roleName = this.role.name;
    return userRole === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__/* .RolesEnum */ .$.SUPER_ADMIN && roleName === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__/* .RolesEnum */ .$.SUPER_ADMIN || userRole === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__/* .RolesEnum */ .$.ADMIN && roleName === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__/* .RolesEnum */ .$.ADMIN;
  }
  /**
   * Disabled General Group Permissions
   *
   * @returns
   */
  isDisabledAdministrationPermissions() {
    if (!this.role) {
      return true;
    }
    /**
     * Disabled all administration permissions except "SUPER_ADMIN"
     */
    if (this.user.role.name === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__/* .RolesEnum */ .$.SUPER_ADMIN) {
      if (this.role.name === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__/* .RolesEnum */ .$.ADMIN) {
        return false;
      }
    }
    return true;
  }
  /**
   * Sets up a search filter with debounce to improve performance.
   */
  _setupSearchFilter() {
    this.searchControl.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .debounceTime */ .B)(300), (0,rxjs__WEBPACK_IMPORTED_MODULE_11__/* .startWith */ .Z)(''), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__/* .map */ .T)(searchTerm => {
      this.filteredGeneralPermissions = this._filterPermissions('GENERAL', searchTerm);
      this.filteredAdminPermissions = this._filterPermissions('ADMINISTRATION', searchTerm);
    })).subscribe();
  }
  /**
   * Filters permissions based on the search term.
   * @param group The group of permissions to filter ('GENERAL' or 'ADMINISTRATION')
   * @param searchTerm The term used for filtering permissions.
   * @returns The filtered list of permissions.
   */
  _filterPermissions(group, searchTerm = '') {
    const permissions = group === 'GENERAL' ? this.permissionGroups.GENERAL : this.getAdministrationPermissions();
    console.log(permissions);
    if (!searchTerm) return permissions;
    return permissions.filter(permission => this._formatPermissionForSearch(permission).includes(searchTerm.toLowerCase()));
  }
  _formatPermissionForSearch(permission) {
    return permission.replace(/_/g, ' ').toLowerCase();
  }
  ngOnDestroy() {}
  static {
    this.ɵfac = function RolesPermissionsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || RolesPermissionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__/* .TranslateService */ .c$), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_18__/* .ToastrService */ .t), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_19__/* .RolePermissionsService */ .q), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_20__/* .RoleService */ .W), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_21__/* .Store */ .il));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
      type: RolesPermissionsComponent,
      selectors: [["ga-org-roles-permissions"]],
      viewQuery: function RolesPermissionsComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵviewQuery"] */ .GBs(_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵqueryRefresh"] */ .mGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵloadQuery"] */ .lsd()) && (ctx.input = _t.first);
        }
      },
      standalone: false,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
      decls: 42,
      vars: 30,
      consts: [["input", ""], ["autocomplete", ""], [1, "menu-setting"], [1, "row"], [1, "col-6"], [1, "form-group"], ["nbInput", "", "fullWidth", "", 3, "input", "formControl", "placeholder", "nbAutocomplete"], ["nbSuffix", "", "nbButton", "", "ghost", ""], ["pack", "eva", 3, "click", "icon"], [3, "selectedChange"], [3, "value", "class", 4, "ngFor", "ngForOf"], ["type", "text", "nbInput", "", "fullWidth", "", "placeholder", "Search permissions...", 3, "formControl"], ["class", "col-6", 4, "ngxPermissionsOnly"], ["nbSpinnerSize", "large", 1, "row", "content", 3, "nbSpinner"], [1, "col-12", "col-xl-6"], [1, "permission-items-col"], ["labelPosition", "start", "status", "basic", 3, "checked", "disabled", "checkedChange", 4, "ngFor", "ngForOf"], ["icon", "question-mark-circle-outline", "size", "tiny", 3, "nbTooltip"], [3, "value"], [4, "ngIf"], [1, "actions", "create"], ["nbButton", "", "status", "success", "size", "small", 3, "click", "nbTooltip"], ["icon", "plus-outline"], [1, "actions", "delete"], ["nbButton", "", "status", "basic", "size", "small", 1, "action", 3, "click", "nbTooltip"], ["status", "danger", "icon", "trash-2-outline"], ["labelPosition", "start", "status", "basic", 3, "checkedChange", "checked", "disabled"], [1, "custom-permission-view"]],
      template: function RolesPermissionsComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-card")(1, "nb-card-header")(2, "h4")(3, "span", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(5, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(7, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(8, "nb-card-body")(9, "div", 3)(10, "div", 4)(11, "div", 5)(12, "nb-form-field")(13, "input", 6, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(15, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("input", function RolesPermissionsComponent_Template_input_input_13_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx.onInputChange());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(16, "button", 7)(17, "nb-icon", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function RolesPermissionsComponent_Template_nb_icon_click_17_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx.formControl.reset(ctx.rolesEnum.EMPLOYEE));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(18, "nb-autocomplete", 9, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("selectedChange", function RolesPermissionsComponent_Template_nb_autocomplete_selectedChange_18_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx.onSelectionChange($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(20, RolesPermissionsComponent_nb_option_20_Template, 2, 4, "nb-option", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(21, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(22, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(23, "input", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(24, RolesPermissionsComponent_div_24_Template, 3, 2, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(25, "div", 13)(26, "div", 14)(27, "nb-card")(28, "nb-card-header");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(29);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(30, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(31, "nb-card-body", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(32, RolesPermissionsComponent_nb_toggle_32_Template, 8, 8, "nb-toggle", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(33, "div", 14)(34, "nb-card")(35, "nb-card-header");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(36);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(37, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(38, "nb-icon", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(39, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(40, "nb-card-body", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(41, RolesPermissionsComponent_nb_toggle_41_Template, 8, 8, "nb-toggle", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()()()()();
        }
        if (rf & 2) {
          const autocomplete_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(19);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI("", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(5, 15, "MENU.SETTINGS"), "/");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(7, 17, "ORGANIZATIONS_PAGE.EDIT.ROLES_PERMISSIONS"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("formControl", ctx.formControl)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(15, 19, "FORM.PLACEHOLDERS.ROLE"))("nbAutocomplete", autocomplete_r11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("icon", "close");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(21, 21, ctx.roles$));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("formControl", ctx.searchControl);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngxPermissionsOnly", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction0"] */ .lJ4(29, _c1));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("nbSpinner", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(30, 23, "ORGANIZATIONS_PAGE.PERMISSIONS.GROUPS.GENERAL"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx.filteredGeneralPermissions);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI("", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(37, 25, "ORGANIZATIONS_PAGE.PERMISSIONS.GROUPS.ADMINISTRATION"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(39, 27, "ORGANIZATIONS_PAGE.PERMISSIONS.ONLY_ADMIN"));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx.filteredAdminPermissions);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_22__/* .NgForOf */ .Sq, _angular_common__WEBPACK_IMPORTED_MODULE_22__/* .NgIf */ .bT, _angular_forms__WEBPACK_IMPORTED_MODULE_6__/* .DefaultValueAccessor */ .me, _angular_forms__WEBPACK_IMPORTED_MODULE_6__/* .NgControlStatus */ .BC, _angular_forms__WEBPACK_IMPORTED_MODULE_6__/* .FormControlDirective */ .l_, _nebular_theme__WEBPACK_IMPORTED_MODULE_23__/* .NbAutocompleteComponent */ .SOk, _nebular_theme__WEBPACK_IMPORTED_MODULE_23__/* .NbAutocompleteDirective */ ._5S, _nebular_theme__WEBPACK_IMPORTED_MODULE_23__/* .NbOptionComponent */ .ZJ2, _nebular_theme__WEBPACK_IMPORTED_MODULE_23__/* .NbButtonComponent */ .YP2, _nebular_theme__WEBPACK_IMPORTED_MODULE_23__/* .NbCardComponent */ .SrT, _nebular_theme__WEBPACK_IMPORTED_MODULE_23__/* .NbCardBodyComponent */ .KH5, _nebular_theme__WEBPACK_IMPORTED_MODULE_23__/* .NbCardHeaderComponent */ .zJv, _nebular_theme__WEBPACK_IMPORTED_MODULE_23__/* .NbFormFieldComponent */ .u_9, _nebular_theme__WEBPACK_IMPORTED_MODULE_23__/* .NbSuffixDirective */ .zb0, _nebular_theme__WEBPACK_IMPORTED_MODULE_23__/* .NbIconComponent */ .tHu, _nebular_theme__WEBPACK_IMPORTED_MODULE_23__/* .NbInputDirective */ .i6h, _nebular_theme__WEBPACK_IMPORTED_MODULE_23__/* .NbSpinnerDirective */ .zwc, _nebular_theme__WEBPACK_IMPORTED_MODULE_23__/* .NbToggleComponent */ .YF2, _nebular_theme__WEBPACK_IMPORTED_MODULE_23__/* .NbTooltipDirective */ .BmQ, ngx_permissions__WEBPACK_IMPORTED_MODULE_24__/* .NgxPermissionsDirective */ .f6, _angular_common__WEBPACK_IMPORTED_MODULE_22__/* .AsyncPipe */ .Jj, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__/* .TranslatePipe */ .D9],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.action[_ngcontent-%COMP%] {\n  box-shadow: var(--gauzy-shadow);\n  border: none;\n}\n.action[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}\n.action.info[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: var(--color-info-default);\n  color: white;\n  border-color: var(--color-info-default);\n}\n.action.info-text-1[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  color: var(--color-info-default);\n}\n.action.secondary[_ngcontent-%COMP%] {\n  color: #7e7e8f;\n}\n.action.success[_ngcontent-%COMP%] {\n  color: var(--color-success-default);\n}\n.action.warning[_ngcontent-%COMP%] {\n  color: rgb(245, 109, 88);\n}\n.action.orange[_ngcontent-%COMP%] {\n  color: rgb(255, 171, 45);\n}\n.action.primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n}\n.action.primary.soft[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: rgba(110, 73, 232, 0.1);\n}\n.action.select-nb[_ngcontent-%COMP%]     {\n  box-shadow: none;\n}\n.action.select-nb[_ngcontent-%COMP%]     .select-button {\n  box-shadow: var(--gauzy-shadow);\n  background: rgb(245, 245, 245);\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n.actions[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-2);\n  border-radius: var(--button-rectangle-border-radius);\n  padding: 2px 4px !important;\n}\n\n.gauzy-button-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n.card-custom-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n[_nghost-%COMP%]     input {\n  border-radius: var(--border-radius);\n  box-shadow: var(--gauzy-shadow) inset;\n}\n\n.main-form[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.delete[_ngcontent-%COMP%], \n.create[_ngcontent-%COMP%] {\n  width: fit-content;\n  color: var(--color-danger-default);\n  padding-right: 10px;\n  font-weight: 600px;\n}\n\n.delete[_ngcontent-%COMP%] {\n  color: var(--color-danger-default);\n}\n\n.create[_ngcontent-%COMP%] {\n  color: var(--color-success-default);\n}\n\n.permission-items-col[_ngcontent-%COMP%]   nb-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.permission-items-col[_ngcontent-%COMP%]   nb-toggle[_ngcontent-%COMP%]     .toggle-label {\n  display: flex;\n  justify-content: space-between;\n  flex-grow: 1;\n}\n\nh4[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 600;\n  line-height: 30px;\n  letter-spacing: 0em;\n  text-align: left;\n}\nh4[_ngcontent-%COMP%]   .menu-setting[_ngcontent-%COMP%] {\n  font-weight: 400;\n}\n\n[dir=ltr]   [_nghost-%COMP%]   .col-12[_ngcontent-%COMP%] {\n  padding-right: 8px !important;\n}\n[dir=rtl]   [_nghost-%COMP%]   .col-12[_ngcontent-%COMP%] {\n  padding-left: 8px !important;\n}\n\n.menu-setting[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 400;\n  line-height: 30px;\n  letter-spacing: 0em;\n  text-align: left;\n}\n\n.content[_ngcontent-%COMP%] {\n  height: calc(100vh - 18.75rem);\n  overflow: auto;\n  padding: 0;\n  border-radius: var(--border-radius);\n}\n\n.custom-permission-view[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.custom-permission-view[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 19px;\n  letter-spacing: 0em;\n  text-align: left;\n  color: var(--gauzy-text-color-1);\n  margin-bottom: 5px;\n}\n.custom-permission-view[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 400;\n  line-height: 13px;\n  letter-spacing: 0em;\n  text-align: left;\n  color: var(--gauzy-text-color-2);\n}\n\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%], \n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n  overflow: unset;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-header[_ngcontent-%COMP%], \n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-header[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-sidebar-background-3);\n  padding: 0.625rem;\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 15px;\n  letter-spacing: 0em;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%], \n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n  border-radius: 0 0 var(--border-radius) var(--border-radius);\n}"]
    });
  }
};
RolesPermissionsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_25__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__/* .UntilDestroy */ .d)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_25__/* .__metadata */ .Sn)("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__/* .TranslateService */ .c$, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_18__/* .ToastrService */ .t, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_19__/* .RolePermissionsService */ .q, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_20__/* .RoleService */ .W, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_21__/* .Store */ .il])], RolesPermissionsComponent);


/***/ }),

/***/ 97003:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ startWith)
/* harmony export */ });
/* harmony import */ var _observable_concat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52623);
/* harmony import */ var _util_args__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13685);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7661);



function startWith(...values) {
  const scheduler = (0,_util_args__WEBPACK_IMPORTED_MODULE_0__/* .popScheduler */ .lI)(values);
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_1__/* .operate */ .N)((source, subscriber) => {
    (scheduler ? (0,_observable_concat__WEBPACK_IMPORTED_MODULE_2__/* .concat */ .x)(values, source, scheduler) : (0,_observable_concat__WEBPACK_IMPORTED_MODULE_2__/* .concat */ .x)(values, source)).subscribe(subscriber);
  });
}
//# sourceMappingURL=startWith.js.map

/***/ })

}]);