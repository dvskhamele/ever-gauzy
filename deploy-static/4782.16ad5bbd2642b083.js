"use strict";
(self["webpackChunkgauzy"] = self["webpackChunkgauzy"] || []).push([[4782],{

/***/ 592:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ RequestApprovalStatusTypesEnum),
/* harmony export */   X: () => (/* binding */ RequestApprovalStatus)
/* harmony export */ });
var RequestApprovalStatusTypesEnum = /*#__PURE__*/function (RequestApprovalStatusTypesEnum) {
  RequestApprovalStatusTypesEnum[RequestApprovalStatusTypesEnum["REQUESTED"] = 1] = "REQUESTED";
  RequestApprovalStatusTypesEnum[RequestApprovalStatusTypesEnum["APPROVED"] = 2] = "APPROVED";
  RequestApprovalStatusTypesEnum[RequestApprovalStatusTypesEnum["REFUSED"] = 3] = "REFUSED";
  return RequestApprovalStatusTypesEnum;
}(RequestApprovalStatusTypesEnum || {});
const RequestApprovalStatus = {
  REQUESTED: 1,
  APPROVED: 2,
  REFUSED: 3
};

/***/ }),

/***/ 5962:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   U: () => (/* binding */ RequestApprovalActionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13271);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(592);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71924);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(56383);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(14572);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(19223);








function RequestApprovalActionComponent_button_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function RequestApprovalActionComponent_button_0_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.approval());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(2, 1, "APPROVAL_REQUEST_PAGE.APPROVE"), "\n");
  }
}
function RequestApprovalActionComponent_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function RequestApprovalActionComponent_button_1_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.refuse());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(2, 1, "APPROVAL_REQUEST_PAGE.REFUSE"), "\n");
  }
}
let RequestApprovalActionComponent = /*#__PURE__*/(() => {
  class RequestApprovalActionComponent {
    constructor(store) {
      this.store = store;
      this.isApproval = true;
      this.isRefuse = true;
      this.isSuperAdmin = false;
      this.updateResult = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .bkB();
    }
    ngOnInit() {
      const {
        role
      } = this.store.user;
      if (role && role.name === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__/* .RolesEnum */ .$.SUPER_ADMIN) {
        this.isSuperAdmin = true;
      }
      if (this.rowData && this.rowData.status) {
        if (this.isSuperAdmin) {
          switch (this.rowData.status.value) {
            case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__/* .RequestApprovalStatusTypesEnum */ .B.APPROVED:
              this.isApproval = false;
              this.isRefuse = true;
              break;
            case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__/* .RequestApprovalStatusTypesEnum */ .B.REFUSED:
              this.isApproval = true;
              this.isRefuse = false;
              break;
            default:
              this.isApproval = true;
              this.isRefuse = true;
              break;
          }
        } else {
          switch (this.rowData.status.value) {
            case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__/* .RequestApprovalStatusTypesEnum */ .B.APPROVED:
            case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__/* .RequestApprovalStatusTypesEnum */ .B.REFUSED:
              this.isApproval = false;
              this.isRefuse = false;
              break;
            default:
              this.isApproval = true;
              this.isRefuse = true;
              break;
          }
        }
      }
    }
    approval() {
      const params = {
        isApproval: true,
        data: this.rowData
      };
      this.updateResult.emit(params);
    }
    refuse() {
      const params = {
        isApproval: false,
        data: this.rowData
      };
      this.updateResult.emit(params);
    }
    static {
      this.ɵfac = function RequestApprovalActionComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || RequestApprovalActionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_3__/* .Store */ .il));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: RequestApprovalActionComponent,
        selectors: [["ngx-request-approval-action"]],
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
        consts: [["nbButton", "", "status", "success", "size", "small", "class", "req-green", 3, "click", 4, "ngIf"], ["nbButton", "", "status", "danger", "size", "small", "class", "req-red", 3, "click", 4, "ngIf"], ["nbButton", "", "status", "success", "size", "small", 1, "req-green", 3, "click"], ["nbButton", "", "status", "danger", "size", "small", 1, "req-red", 3, "click"]],
        template: function RequestApprovalActionComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(0, RequestApprovalActionComponent_button_0_Template, 3, 3, "button", 0)(1, RequestApprovalActionComponent_button_1_Template, 3, 3, "button", 1);
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.isApproval);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.isRefuse);
          }
        },
        dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbButtonComponent */ .YP2, _angular_common__WEBPACK_IMPORTED_MODULE_5__/* .NgIf */ .bT, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__/* .TranslatePipe */ .D9],
        encapsulation: 2
      });
    }
  }
  return RequestApprovalActionComponent;
})();

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

/***/ 13015:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   f: () => (/* binding */ TaskTeamsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14572);


function TaskTeamsComponent_ng_container_0_ng_container_1_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const team_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵstyleProp"] */ .xc7("font-size", "11px");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI("Members ", team_r1 == null ? null : team_r1.members == null ? null : team_r1.members.length, "");
  }
}
function TaskTeamsComponent_ng_container_0_ng_container_1_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1, ", ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
}
function TaskTeamsComponent_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(1, "span")(2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(4, TaskTeamsComponent_ng_container_0_ng_container_1_div_4_Template, 2, 3, "div", 2)(5, TaskTeamsComponent_ng_container_0_ng_container_1_span_5_Template, 2, 0, "span", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const team_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(team_r1.name || team_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", team_r1 == null ? null : team_r1.members);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", i_r2 !== ctx_r2.value.length - 1);
  }
}
function TaskTeamsComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, TaskTeamsComponent_ng_container_0_ng_container_1_Template, 6, 3, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx_r2.value);
  }
}
let TaskTeamsComponent = /*#__PURE__*/(() => {
  class TaskTeamsComponent {
    constructor() {}
    static {
      this.ɵfac = function TaskTeamsComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || TaskTeamsComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: TaskTeamsComponent,
        selectors: [["ngx-task-teams"]],
        inputs: {
          rowData: "rowData",
          value: "value"
        },
        standalone: false,
        decls: 1,
        vars: 1,
        consts: [[4, "ngIf"], [4, "ngFor", "ngForOf"], [3, "font-size", 4, "ngIf"]],
        template: function TaskTeamsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(0, TaskTeamsComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.value);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .NgForOf */ .Sq, _angular_common__WEBPACK_IMPORTED_MODULE_1__/* .NgIf */ .bT],
        encapsulation: 2
      });
    }
  }
  return TaskTeamsComponent;
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

/***/ 13845:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: () => (/* binding */ CreatedByUserComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9620);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14572);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56383);
/* harmony import */ var _directives_img_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(71466);






function CreatedByUserComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(1, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function CreatedByUserComponent_ng_container_1_Template_a_click_1_listener() {
      const createdByUser_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1).ngIf;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r2.edit(createdByUser_r2.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(2, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const createdByUser_r2 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("nbTooltip", createdByUser_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("src", createdByUser_r2.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵsanitizeUrl"] */ .B4B);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(createdByUser_r2.name);
  }
}
function CreatedByUserComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(ctx_r2.value);
  }
}
let CreatedByUserComponent = /*#__PURE__*/(() => {
  class CreatedByUserComponent {
    constructor(router) {
      this.router = router;
    }
    /**
     * Navigates to the employee edit page using the provided ID.
     *
     * @param id - The unique identifier of the employee to edit.
     */
    edit(id) {
      if (!id) {
        console.error('Invalid employee id. Cannot proceed with editing.');
        return;
      }
      this.router.navigate([`/pages/employees/edit/${id}`]);
    }
    static {
      this.ɵfac = function CreatedByUserComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || CreatedByUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_router__WEBPACK_IMPORTED_MODULE_1__/* .Router */ .Ix));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: CreatedByUserComponent,
        selectors: [["ngx-created-by-user"]],
        inputs: {
          value: "value",
          rowData: "rowData"
        },
        standalone: false,
        decls: 4,
        vars: 2,
        consts: [["noUser", ""], [1, "avatar-container"], [4, "ngIf", "ngIfElse"], [1, "avatar", 3, "click", "nbTooltip"], ["type", "createdByUser", 1, "img", 3, "src"], [1, "names-wrapper"]],
        template: function CreatedByUserComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, CreatedByUserComponent_ng_container_1_Template, 5, 3, "ng-container", 2)(2, CreatedByUserComponent_ng_template_2_Template, 2, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplateRefExtractor"] */ .C5r);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
          }
          if (rf & 2) {
            const noUser_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.rowData == null ? null : ctx.rowData.createdByUser)("ngIfElse", noUser_r4);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__/* .NgIf */ .bT, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbTooltipDirective */ .BmQ, _directives_img_directive__WEBPACK_IMPORTED_MODULE_4__/* .ImgDirective */ .z],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\na[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n[_nghost-%COMP%]   .avatar-container[_ngcontent-%COMP%] {\n  width: 100%;\n}\n[_nghost-%COMP%]   .avatar-container[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  border: 2px solid var(--border-basic-color-1);\n  background-color: var(--color-primary-transparent-default);\n  color: var(--text-primary-color);\n  border-radius: var(--button-rectangle-border-radius);\n  gap: 8px;\n  display: flex;\n  align-items: center;\n  width: fit-content;\n}\n[dir=ltr]   [_nghost-%COMP%]   .avatar-container[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  padding: 5px 14px 5px 7px;\n}\n[dir=rtl]   [_nghost-%COMP%]   .avatar-container[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  padding: 5px 7px 5px 14px;\n}\n[_nghost-%COMP%]   .avatar-container[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]   .names-wrapper[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  max-width: 110px;\n}\n[_nghost-%COMP%]   .avatar-container[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  border-radius: var(--button-rectangle-border-radius);\n}"]
      });
    }
  }
  return CreatedByUserComponent;
})();

/***/ }),

/***/ 31144:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   b: () => (/* binding */ ApprovalPolicyService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80189);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26024);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(64913);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26860);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45715);






let ApprovalPolicyService = /*#__PURE__*/(() => {
  class ApprovalPolicyService {
    constructor(http) {
      this.http = http;
      this.APPROVAL_POLICY_URL = `${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_0__/* .API_PREFIX */ .m4}/approval-policy`;
    }
    getAll(relations, where) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ ._)(this.http.get(`${this.APPROVAL_POLICY_URL}`, {
        params: (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_2__/* .toParams */ .SV)({
          where,
          relations
        })
      }));
    }
    getForRequestApproval(relations, findInput) {
      const data = JSON.stringify({
        relations,
        findInput
      });
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ ._)(this.http.get(`${this.APPROVAL_POLICY_URL}/request-approval`, {
        params: {
          data
        }
      }));
    }
    delete(id) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ ._)(this.http.delete(`${this.APPROVAL_POLICY_URL}/${id}`));
    }
    save(approvalPolicy) {
      if (!approvalPolicy.id) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ ._)(this.http.post(this.APPROVAL_POLICY_URL, approvalPolicy));
      } else {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ ._)(this.http.put(`${this.APPROVAL_POLICY_URL}/${approvalPolicy.id}`, approvalPolicy));
      }
    }
    static {
      this.ɵfac = function ApprovalPolicyService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || ApprovalPolicyService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵinject"] */ .KVO(_angular_common_http__WEBPACK_IMPORTED_MODULE_4__/* .HttpClient */ .Qq));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdefineInjectable"] */ .jDH({
        token: ApprovalPolicyService,
        factory: ApprovalPolicyService.ɵfac
      });
    }
  }
  return ApprovalPolicyService;
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

/***/ 72870:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ApprovalsModule: () => (/* binding */ ApprovalsModule)
/* harmony export */ });
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56383);
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(79475);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(19223);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(80784);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(38834);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(10942);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(98722);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(88528);
/* harmony import */ var _approvals_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98839);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26860);










let ApprovalsModule = /*#__PURE__*/(() => {
  class ApprovalsModule {
    static {
      this.ɵfac = function ApprovalsModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || ApprovalsModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineNgModule"] */ .$C({
        type: ApprovalsModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineInjector"] */ .G2t({
        providers: [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_2__/* .RequestApprovalService */ .U],
        imports: [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbBadgeModule */ .iEK, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbButtonModule */ .P5N, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbCardModule */ .lVF, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbCheckboxModule */ .Ad8, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbDialogModule */ .nZv.forChild(), _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbIconModule */ .clu, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbInputModule */ .pty, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbRouteTabsetModule */ .x$5, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbSelectModule */ .VcP, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbSpinnerModule */ .gYs, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_4__/* .CardGridModule */ .n, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbTooltipModule */ .IB0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbRadioModule */ .iyp, _approvals_routing_module__WEBPACK_IMPORTED_MODULE_0__/* .ApprovalsRoutingModule */ .j, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_5__/* .SharedModule */ .G, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_6__/* .RequestApprovalMutationModule */ .E, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__/* .TranslateModule */ .h.forChild(), ngx_permissions__WEBPACK_IMPORTED_MODULE_8__/* .NgxPermissionsModule */ .Ov.forChild(), _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_9__/* .SmartDataViewLayoutModule */ .H]
      });
    }
  }
  return ApprovalsModule;
})();

/***/ }),

/***/ 87735:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: () => (/* binding */ ApprovalsComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(73014);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(64411);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(9620);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(19223);
/* harmony import */ var angular2_smart_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52345);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(57733);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(36950);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(71181);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(73246);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(72781);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(84409);
/* harmony import */ var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(24237);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(23423);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(56383);
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86014);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(81236);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(592);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(88528);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(71924);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(15480);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(26024);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(46076);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47108);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(76229);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(13845);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(47825);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(39457);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(13015);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(90475);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(40127);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(55101);
/* harmony import */ var _table_components_approval_policy_approval_policy_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(82754);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26860);
/* harmony import */ var _packages_ui_core_shared_src_lib_card_grid_card_grid_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(49517);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(14572);
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(79475);
/* harmony import */ var _packages_ui_core_shared_src_lib_components_header_title_header_title_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(49072);
/* harmony import */ var _packages_ui_core_shared_src_lib_directives_under_construction_directive__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(67063);
/* harmony import */ var _packages_ui_core_shared_src_lib_gauzy_button_action_gauzy_button_action_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(45293);
/* harmony import */ var _packages_ui_core_shared_src_lib_smart_data_layout_pagination_pagination_v2_pagination_v2_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(3456);
/* harmony import */ var _table_components_request_approval_action_request_approval_action_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(5962);






























function ApprovalsComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("click", function ApprovalsComponent_ng_template_8_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx_r1.manageApprovalPolicy());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(2, 1, "APPROVAL_REQUEST_PAGE.APPROVAL_POLICY"), " ");
  }
}
function ApprovalsComponent_ng_template_12_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(1, "ngx-pagination", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("source", ctx_r1.smartTableSource);
  }
}
function ApprovalsComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "div", 11)(1, "angular2-smart-table", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("userRowSelect", function ApprovalsComponent_ng_template_12_Template_angular2_smart_table_userRowSelect_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx_r1.selectRequestApproval($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(3, ApprovalsComponent_ng_template_12_ng_container_3_Template, 2, 1, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("settings", ctx_r1.settingsSmartTable)("source", ctx_r1.smartTableSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r1.smartTableSource);
  }
}
function ApprovalsComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "ga-card-grid", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("scroll", function ApprovalsComponent_ng_template_13_Template_ga_card_grid_scroll_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx_r1.onScroll());
    })("onSelectedItem", function ApprovalsComponent_ng_template_13_Template_ga_card_grid_onSelectedItem_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx_r1.selectRequestApproval($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("totalItems", ctx_r1.pagination == null ? null : ctx_r1.pagination.totalItems)("settings", ctx_r1.settingsSmartTable)("source", ctx_r1.requestApprovalData);
  }
}
function ApprovalsComponent_ng_template_15_ngx_request_approval_action_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "ngx-request-approval-action", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("updateResult", function ApprovalsComponent_ng_template_15_ngx_request_approval_action_1_Template_ngx_request_approval_action_updateResult_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx_r1.onUpdateResult($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("rowData", ctx_r1.selectedRequestApproval);
  }
}
function ApprovalsComponent_ng_template_15_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("click", function ApprovalsComponent_ng_template_15_ng_template_6_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r7);
      const selectedItem_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG().selectedItem;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx_r1.save(false, selectedItem_r8));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(1, "nb-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const selectedItem_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG().selectedItem;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("disabled", !selectedItem_r8 && ctx_r1.disableButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(3, 2, "BUTTONS.EDIT"), " ");
  }
}
function ApprovalsComponent_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(1, ApprovalsComponent_ng_template_15_ngx_request_approval_action_1_Template, 1, 1, "ngx-request-approval-action", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(2, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(3, "nb-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(6, ApprovalsComponent_ng_template_15_ng_template_6_Template, 4, 4, "ng-template", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(7, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("click", function ApprovalsComponent_ng_template_15_Template_button_click_7_listener() {
      const selectedItem_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r5).selectedItem;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx_r1.delete(selectedItem_r8));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(9, "nb-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const selectedItem_r8 = ctx.selectedItem;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r1.selectedRequestApproval);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("disabled", !selectedItem_r8 && ctx_r1.disableButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(5, 5, "BUTTONS.VIEW"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("disabled", !selectedItem_r8 && ctx_r1.disableButton)("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(8, 7, "BUTTONS.DELETE"));
  }
}
function ApprovalsComponent_ng_template_17_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("click", function ApprovalsComponent_ng_template_17_ng_template_0_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx_r1.save(true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(1, "nb-icon", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI("", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(3, 1, "BUTTONS.ADD"), " ");
  }
}
function ApprovalsComponent_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(0, ApprovalsComponent_ng_template_17_ng_template_0_Template, 4, 3, "ng-template", 21);
  }
}
let ApprovalsComponent = class ApprovalsComponent extends _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_2__/* .PaginationFilterBaseComponent */ .t {
  constructor(translateService, approvalRequestService, store, dialogService, toastrService, router, route) {
    super(translateService);
    this.translateService = translateService;
    this.approvalRequestService = approvalRequestService;
    this.store = store;
    this.dialogService = dialogService;
    this.toastrService = toastrService;
    this.router = router;
    this.route = route;
    this.disableButton = true;
    this.smartTableSource = new angular2_smart_table__WEBPACK_IMPORTED_MODULE_3__/* .LocalDataSource */ .h0();
    this.hasEditPermission = false;
    this.dataLayoutStyle = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_4__/* .ComponentLayoutStyleEnum */ .IE.TABLE;
    this.componentLayoutStyleEnum = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_4__/* .ComponentLayoutStyleEnum */ .IE;
    this.requestApprovalData = [];
    this._refresh$ = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_5__/* .Subject */ .B();
  }
  ngOnInit() {
    this.subject$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .debounceTime */ .B)(300), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .M)(() => this.clearItem()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .M)(() => this.getApprovals()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__/* .untilDestroyed */ .s)(this)).subscribe();
    this.pagination$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .debounceTime */ .B)(100), (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_9__/* .distinctUntilChange */ .nI)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .M)(() => this.subject$.next(true)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__/* .untilDestroyed */ .s)(this)).subscribe();
    (0,rxjs__WEBPACK_IMPORTED_MODULE_10__/* .combineLatest */ .z)([this.store.selectedEmployee$, this.store.selectedOrganization$]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .debounceTime */ .B)(300), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__/* .filter */ .p)(([employee, organization]) => !!organization && !!employee), (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_9__/* .distinctUntilChange */ .nI)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .M)(([employee, organization]) => {
      this.selectedEmployeeId = employee.id;
      this.organization = organization;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .M)(() => this._refresh$.next(true)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .M)(() => this.subject$.next(true)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__/* .untilDestroyed */ .s)(this)).subscribe();
    this.route.queryParamMap.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__/* .filter */ .p)(params => !!params && params.get('openAddDialog') === 'true'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .debounceTime */ .B)(1000), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .M)(() => this.save(true)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__/* .untilDestroyed */ .s)(this)).subscribe();
    this._refresh$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__/* .filter */ .p)(() => this.isGridLayout), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .M)(() => this.refreshPagination()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .M)(() => this.requestApprovalData = []), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__/* .untilDestroyed */ .s)(this)).subscribe();
    this._applyTranslationOnSmartTable();
    this._loadSmartTableSettings();
    this.setView();
  }
  setView() {
    this.viewComponentName = _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_12__/* .ComponentEnum */ .L.APPROVALS;
    this.store.componentLayout$(this.viewComponentName).pipe((0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_9__/* .distinctUntilChange */ .nI)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .M)(componentLayout => this.dataLayoutStyle = componentLayout), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .M)(() => this.refreshPagination()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__/* .filter */ .p)(componentLayout => componentLayout === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_4__/* .ComponentLayoutStyleEnum */ .IE.CARDS_GRID), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .M)(() => this.requestApprovalData = []), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .M)(() => this.subject$.next(true)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__/* .untilDestroyed */ .s)(this)).subscribe();
  }
  selectRequestApproval(_x) {
    var _this = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A)(function* ({
      isSelected,
      data
    }) {
      _this.selectedRequestApproval = null;
      _this.disableButton = !isSelected;
      setTimeout(() => {
        _this.selectedRequestApproval = isSelected ? data : null;
      }, 50);
    }).apply(this, arguments);
  }
  getApprovals() {
    var _this2 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A)(function* () {
      if (!_this2.organization) {
        return;
      }
      _this2.loading = true;
      const {
        tenantId
      } = _this2.store.user;
      const {
        id: organizationId
      } = _this2.organization;
      const {
        activePage,
        itemsPerPage
      } = _this2.getPagination();
      const buffersItems = [];
      let items = [];
      if (_this2.selectedEmployeeId) {
        items = (yield _this2.approvalRequestService.getByEmployeeId(_this2.selectedEmployeeId, ['requestApprovals'], {
          organizationId,
          tenantId
        })).items;
      } else {
        items = (yield _this2.approvalRequestService.getAll(['employeeApprovals', 'employeeApprovals.employee', 'employeeApprovals.employee.user', 'teamApprovals', 'teamApprovals.team', 'tags', 'createdByUser'], {
          organizationId,
          tenantId
        })).items;
        if (items.length > 0) {
          items.filter(item => {
            item.employees = (0,underscore__WEBPACK_IMPORTED_MODULE_0__/* .pluck */ .Ey)(item.employeeApprovals, 'employee');
            item.teams = (0,underscore__WEBPACK_IMPORTED_MODULE_0__/* .pluck */ .Ey)(item.teamApprovals, 'team');
            return item;
          });
        }
      }
      items.map(item => {
        buffersItems.push({
          ...item,
          status: _this2.statusMapper(item)
        });
      });
      _this2.smartTableSource.setPaging(activePage, itemsPerPage, false);
      _this2.smartTableSource.load(buffersItems);
      if (_this2.isGridLayout) _this2._loadGridLayoutData();
      _this2.setPagination({
        ..._this2.getPagination(),
        totalItems: _this2.smartTableSource.count()
      });
      _this2.loading = false;
    })();
  }
  get isGridLayout() {
    return this.dataLayoutStyle === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_4__/* .ComponentLayoutStyleEnum */ .IE.CARDS_GRID;
  }
  _loadGridLayoutData() {
    var _this3 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A)(function* () {
      _this3.requestApprovalData.push(...(yield _this3.smartTableSource.getElements()));
    })();
  }
  _loadSmartTableSettings() {
    var _this4 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A)(function* () {
      const pagination = _this4.getPagination();
      _this4.settingsSmartTable = {
        actions: false,
        pager: {
          display: false,
          perPage: pagination ? pagination.itemsPerPage : _this4.minItemPerPage
        },
        noDataMessage: _this4.getTranslation('SM_TABLE.NO_DATA.APPROVAL_REQUEST'),
        columns: {
          name: {
            title: _this4.getTranslation('APPROVAL_REQUEST_PAGE.APPROVAL_REQUEST_NAME'),
            type: 'custom',
            renderComponent: _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_14__/* .PictureNameTagsComponent */ .O,
            componentInitFunction: (instance, cell) => {
              instance.rowData = cell.getRow().getData();
              instance.value = cell.getValue();
            }
          },
          min_count: {
            title: _this4.getTranslation('APPROVAL_REQUEST_PAGE.APPROVAL_REQUEST_MIN_COUNT'),
            type: 'number',
            isFilterable: false
          },
          approvalPolicy: {
            title: _this4.getTranslation('APPROVAL_REQUEST_PAGE.APPROVAL_REQUEST_APPROVAL_POLICY'),
            type: 'custom',
            isFilterable: false,
            renderComponent: _table_components_approval_policy_approval_policy_component__WEBPACK_IMPORTED_MODULE_15__/* .ApprovalPolicyComponent */ .b,
            componentInitFunction: (instance, cell) => {
              instance.value = cell.getRawValue();
            }
          },
          createdByUser: {
            title: _this4.getTranslation('APPROVAL_REQUEST_PAGE.CREATED_BY'),
            type: 'custom',
            isFilterable: false,
            renderComponent: _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_16__/* .CreatedByUserComponent */ .q,
            componentInitFunction: (instance, cell) => {
              instance.rowData = cell.getRow().getData();
            }
          },
          createdAt: {
            title: _this4.getTranslation('APPROVAL_REQUEST_PAGE.CREATED_AT'),
            type: 'custom',
            isFilterable: false,
            renderComponent: _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_17__/* .DateViewComponent */ .l,
            componentInitFunction: (instance, cell) => {
              instance.rowData = cell.getRow().getData();
              instance.value = cell.getValue();
            }
          },
          employees: {
            title: _this4.getTranslation('APPROVAL_REQUEST_PAGE.EMPLOYEES'),
            type: 'custom',
            isFilterable: false,
            renderComponent: _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_18__/* .EmployeeWithLinksComponent */ .j,
            componentInitFunction: (instance, cell) => {
              instance.rowData = cell.getRow().getData();
              instance.value = cell.getRawValue();
            }
          },
          teams: {
            title: _this4.getTranslation('APPROVAL_REQUEST_PAGE.TEAMS'),
            type: 'custom',
            isFilterable: false,
            renderComponent: _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_19__/* .TaskTeamsComponent */ .f,
            componentInitFunction: (instance, cell) => {
              instance.value = cell.getRawValue();
            }
          },
          status: {
            title: _this4.getTranslation('APPROVAL_REQUEST_PAGE.APPROVAL_REQUEST_STATUS'),
            type: 'custom',
            width: '5%',
            isFilterable: false,
            renderComponent: _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_20__/* .StatusBadgeComponent */ .v,
            componentInitFunction: (instance, cell) => {
              instance.value = cell.getValue();
            }
          }
        }
      };
    })();
  }
  /**
   * Maps a status value to its corresponding text, value, and CSS class.
   *
   * @param row - The row containing the status property.
   * @returns An object with text, value, and class properties.
   */
  statusMapper(row) {
    let value;
    // Map status values to their corresponding text
    switch (row.status) {
      case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_21__/* .RequestApprovalStatusTypesEnum */ .B.APPROVED:
        value = this.getTranslation('APPROVAL_REQUEST_PAGE.APPROVED');
        break;
      case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_21__/* .RequestApprovalStatusTypesEnum */ .B.REFUSED:
        value = this.getTranslation('APPROVAL_REQUEST_PAGE.REFUSED');
        break;
      default:
        value = this.getTranslation('APPROVAL_REQUEST_PAGE.REQUESTED');
        break;
    }
    // Determine the CSS class based on the mapped status text
    const badgeClass = ['approved'].includes(value.toLowerCase()) ? 'success' : ['requested'].includes(value.toLowerCase()) ? 'warning' : 'danger';
    // Return an object with text, value, and class properties
    return {
      text: value,
      value: row.status,
      class: badgeClass
    };
  }
  onUpdateResult(params) {
    this.handleEvent(params);
  }
  approval(rowData) {
    const params = {
      isApproval: true,
      data: rowData
    };
    this.handleEvent(params);
  }
  refuse(rowData) {
    const params = {
      isApproval: false,
      data: rowData
    };
    this.handleEvent(params);
  }
  handleEvent(params) {
    var _this5 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A)(function* () {
      if (!_this5.organization) {
        return;
      }
      if (params.isApproval) {
        const request = yield _this5.approvalRequestService.approvalRequestByAdmin(params.data.id);
        if (request) {
          _this5.toastrService.success('APPROVAL_REQUEST_PAGE.APPROVAL_SUCCESS', {
            name: params.data.name
          });
        }
      } else {
        const request = yield _this5.approvalRequestService.refuseRequestByAdmin(params.data.id);
        if (request) {
          _this5.toastrService.success('APPROVAL_REQUEST_PAGE.REFUSE_SUCCESS', {
            name: params.data.name
          });
        }
      }
      _this5._refresh$.next(true);
      _this5.subject$.next(true);
    })();
  }
  _applyTranslationOnSmartTable() {
    this.translateService.onLangChange.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__/* .untilDestroyed */ .s)(this)).subscribe(() => {
      this._refresh$.next(true);
      this.subject$.next(true);
    });
  }
  manageApprovalPolicy() {
    this.router.navigate(['/pages/organization/approval-policy']);
  }
  save(isCreate, selectedItem) {
    var _this6 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A)(function* () {
      let dialog;
      if (selectedItem) {
        _this6.selectRequestApproval({
          isSelected: true,
          data: selectedItem
        });
      }
      if (!isCreate) {
        dialog = _this6.dialogService.open(_gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_22__/* .RequestApprovalMutationComponent */ .R, {
          context: {
            requestApproval: _this6.selectedRequestApproval
          }
        });
      } else {
        dialog = _this6.dialogService.open(_gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_22__/* .RequestApprovalMutationComponent */ .R);
      }
      const requestApproval = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_23__/* .firstValueFrom */ ._)(dialog.onClose.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_24__/* .first */ .$)()));
      if (requestApproval) {
        _this6.toastrService.success(isCreate ? 'APPROVAL_REQUEST_PAGE.APPROVAL_REQUEST_CREATED' : 'APPROVAL_REQUEST_PAGE.APPROVAL_REQUEST_UPDATED', {
          name: requestApproval.name
        });
        _this6._refresh$.next(true);
        _this6.subject$.next(true);
      }
    })();
  }
  delete(selectedItem) {
    var _this7 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A)(function* () {
      if (selectedItem) {
        _this7.selectRequestApproval({
          isSelected: true,
          data: selectedItem
        });
      }
      const result = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_23__/* .firstValueFrom */ ._)(_this7.dialogService.open(_gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_25__/* .DeleteConfirmationComponent */ .u).onClose);
      if (result) {
        const isSuccess = yield _this7.approvalRequestService.delete(_this7.selectedRequestApproval.id);
        if (isSuccess) {
          _this7.toastrService.success('APPROVAL_REQUEST_PAGE.APPROVAL_REQUEST_DELETED', {
            name: _this7.selectedRequestApproval.name
          });
          _this7._refresh$.next(true);
          _this7.subject$.next(true);
        }
      }
    })();
  }
  /*
   * Clear selected item
   */
  clearItem() {
    this.selectRequestApproval({
      isSelected: false,
      data: null
    });
  }
  ngOnDestroy() {}
  static {
    this.ɵfac = function ApprovalsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ApprovalsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_26__/* .TranslateService */ .c$), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_27__/* .RequestApprovalService */ .U), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_28__/* .Store */ .il), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_nebular_theme__WEBPACK_IMPORTED_MODULE_29__/* .NbDialogService */ .S0W), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_30__/* .ToastrService */ .t), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_router__WEBPACK_IMPORTED_MODULE_31__/* .Router */ .Ix), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_router__WEBPACK_IMPORTED_MODULE_31__/* .ActivatedRoute */ .nX));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineComponent"] */ .VBU({
      type: ApprovalsComponent,
      selectors: [["ngx-approvals"]],
      standalone: false,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
      decls: 19,
      vars: 10,
      consts: [["gridLayout", ""], ["actionButtons", ""], ["visibleButton", ""], ["nbSpinnerStatus", "primary", "nbSpinnerSize", "large", 3, "nbSpinner"], [1, "d-flex", "flex-column", "pb-0"], [1, "card-header-title"], ["ngxPermissionsOnly", "APPROVALS_POLICY_VIEW"], [1, "gauzy-button-container"], [3, "buttonTemplateVisible", "buttonTemplate", "isDisable", "componentName"], [3, "ngIf", "ngIfElse"], ["nbButton", "", "outline", "", "status", "primary", "size", "small", 1, "action", 3, "click"], [1, "table-scroll-container"], [2, "cursor", "pointer", 3, "userRowSelect", "settings", "source"], [1, "pagination-container"], [4, "ngIf"], [3, "source"], [3, "scroll", "onSelectedItem", "totalItems", "settings", "source"], [1, "btn-group", "actions"], [3, "rowData", "updateResult", 4, "ngIf"], ["nbButton", "", "status", "basic", "size", "small", "underConstruction", "", 1, "action", "secondary", 3, "disabled"], ["icon", "eye-outline"], ["ngxPermissionsOnly", "REQUEST_APPROVAL_EDIT"], ["nbButton", "", "status", "basic", "size", "small", 1, "action", 3, "click", "disabled", "nbTooltip"], ["status", "danger", "icon", "trash-2-outline"], [3, "updateResult", "rowData"], ["nbButton", "", "status", "basic", "size", "small", 1, "action", "primary", 3, "click", "disabled"], ["icon", "edit-outline"], ["nbButton", "", "status", "success", "size", "small", 3, "click"], ["icon", "plus-outline", 1, "mr-1"]],
      template: function ApprovalsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "nb-card", 3)(1, "nb-card-header", 4)(2, "div", 5)(3, "h4")(4, "ngx-header-title");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(6, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(7, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(8, ApprovalsComponent_ng_template_8_Template, 3, 3, "ng-template", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(9, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(10, "ngx-gauzy-button-action", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(11, "nb-card-body");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(12, ApprovalsComponent_ng_template_12_Template, 4, 3, "ng-template", 9)(13, ApprovalsComponent_ng_template_13_Template, 1, 3, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplateRefExtractor"] */ .C5r);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(15, ApprovalsComponent_ng_template_15_Template, 10, 9, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplateRefExtractor"] */ .C5r)(17, ApprovalsComponent_ng_template_17_Template, 1, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplateRefExtractor"] */ .C5r);
        }
        if (rf & 2) {
          const gridLayout_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵreference"] */ .sdS(14);
          const actionButtons_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵreference"] */ .sdS(16);
          const visibleButton_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵreference"] */ .sdS(18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("nbSpinner", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(6, 8, "APPROVAL_REQUEST_PAGE.HEADER"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("buttonTemplateVisible", visibleButton_r12)("buttonTemplate", actionButtons_r11)("isDisable", ctx.disableButton)("componentName", ctx.viewComponentName);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.dataLayoutStyle === ctx.componentLayoutStyleEnum.TABLE)("ngIfElse", gridLayout_r10);
        }
      },
      dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_29__/* .NbButtonComponent */ .YP2, _nebular_theme__WEBPACK_IMPORTED_MODULE_29__/* .NbCardComponent */ .SrT, _nebular_theme__WEBPACK_IMPORTED_MODULE_29__/* .NbCardBodyComponent */ .KH5, _nebular_theme__WEBPACK_IMPORTED_MODULE_29__/* .NbCardHeaderComponent */ .zJv, _nebular_theme__WEBPACK_IMPORTED_MODULE_29__/* .NbIconComponent */ .tHu, _nebular_theme__WEBPACK_IMPORTED_MODULE_29__/* .NbSpinnerDirective */ .zwc, _packages_ui_core_shared_src_lib_card_grid_card_grid_component__WEBPACK_IMPORTED_MODULE_32__/* .CardGridComponent */ .c, _nebular_theme__WEBPACK_IMPORTED_MODULE_29__/* .NbTooltipDirective */ .BmQ, _angular_common__WEBPACK_IMPORTED_MODULE_33__/* .NgIf */ .bT, ngx_permissions__WEBPACK_IMPORTED_MODULE_34__/* .NgxPermissionsDirective */ .f6, _packages_ui_core_shared_src_lib_components_header_title_header_title_component__WEBPACK_IMPORTED_MODULE_35__/* .HeaderTitleComponent */ .X, _packages_ui_core_shared_src_lib_directives_under_construction_directive__WEBPACK_IMPORTED_MODULE_36__/* .UnderConstructionDirective */ .r, angular2_smart_table__WEBPACK_IMPORTED_MODULE_3__/* .Angular2SmartTableComponent */ .T9, _packages_ui_core_shared_src_lib_gauzy_button_action_gauzy_button_action_component__WEBPACK_IMPORTED_MODULE_37__/* .GauzyButtonActionComponent */ .A, _packages_ui_core_shared_src_lib_smart_data_layout_pagination_pagination_v2_pagination_v2_component__WEBPACK_IMPORTED_MODULE_38__/* .PaginationV2Component */ .a, _table_components_request_approval_action_request_approval_action_component__WEBPACK_IMPORTED_MODULE_39__/* .RequestApprovalActionComponent */ .U, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_26__/* .TranslatePipe */ .D9],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.action[_ngcontent-%COMP%] {\n  box-shadow: var(--gauzy-shadow);\n  border: none;\n}\n.action[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}\n.action.info[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: var(--color-info-default);\n  color: white;\n  border-color: var(--color-info-default);\n}\n.action.info-text-1[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  color: var(--color-info-default);\n}\n.action.secondary[_ngcontent-%COMP%] {\n  color: #7e7e8f;\n}\n.action.success[_ngcontent-%COMP%] {\n  color: var(--color-success-default);\n}\n.action.warning[_ngcontent-%COMP%] {\n  color: rgb(245, 109, 88);\n}\n.action.orange[_ngcontent-%COMP%] {\n  color: rgb(255, 171, 45);\n}\n.action.primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n}\n.action.primary.soft[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: rgba(110, 73, 232, 0.1);\n}\n.action.select-nb[_ngcontent-%COMP%]     {\n  box-shadow: none;\n}\n.action.select-nb[_ngcontent-%COMP%]     .select-button {\n  box-shadow: var(--gauzy-shadow);\n  background: rgb(245, 245, 245);\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n.actions[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-2);\n  border-radius: var(--button-rectangle-border-radius);\n  padding: 2px 4px !important;\n}\n\n.gauzy-button-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n.card-custom-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n[_nghost-%COMP%]     input {\n  border-radius: var(--border-radius);\n  box-shadow: var(--gauzy-shadow) inset;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%], \n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   .table-scroll-container[_ngcontent-%COMP%], \n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .table-scroll-container[_ngcontent-%COMP%] {\n  flex-grow: 10;\n  max-height: unset;\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  border-radius: 0 0 var(--border-radius) var(--border-radius);\n}\n[dir=ltr]   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  padding: 1rem 0.5rem 1rem 18px;\n}\n[dir=rtl]   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  padding: 1rem 18px 1rem 0.5rem;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%], \n[_nghost-%COMP%]   nb-card-header[_ngcontent-%COMP%] {\n  border-radius: var(--border-radius);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  height: 100%;\n  border-radius: var(--border-radius);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-header[_ngcontent-%COMP%] {\n  flex: 0 1 auto;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  overflow: unset;\n  height: calc(100vh - var(--header-height) - var(--footer-height) - 11.5rem + 3.75rem);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-footer[_ngcontent-%COMP%] {\n  flex: 0 1 auto;\n}\n\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  height: calc(100vh - 17.5rem) !important;\n}\n\nngx-request-approval-action[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 0 5px;\n}\nngx-request-approval-action[_ngcontent-%COMP%]     button {\n  box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.15);\n}\nngx-request-approval-action[_ngcontent-%COMP%]     button.req-green {\n  background-color: rgb(0, 214, 143) !important;\n  border-color: rgb(0, 214, 143) !important;\n}\nngx-request-approval-action[_ngcontent-%COMP%]     button.req-red {\n  background-color: rgb(255, 94, 94) !important;\n  border-color: rgb(255, 94, 94) !important;\n}"]
    });
  }
};
ApprovalsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_40__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__/* .UntilDestroy */ .d)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_40__/* .__metadata */ .Sn)("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_26__/* .TranslateService */ .c$, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_27__/* .RequestApprovalService */ .U, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_28__/* .Store */ .il, _nebular_theme__WEBPACK_IMPORTED_MODULE_29__/* .NbDialogService */ .S0W, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_30__/* .ToastrService */ .t, _angular_router__WEBPACK_IMPORTED_MODULE_31__/* .Router */ .Ix, _angular_router__WEBPACK_IMPORTED_MODULE_31__/* .ActivatedRoute */ .nX])], ApprovalsComponent);


/***/ }),

/***/ 98839:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   j: () => (/* binding */ ApprovalsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(908);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17785);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4106);
/* harmony import */ var _approvals_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87735);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26860);






const routes = [{
  path: '',
  component: _approvals_component__WEBPACK_IMPORTED_MODULE_0__/* .ApprovalsComponent */ .e,
  canActivate: [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_1__/* .PermissionsGuard */ .a],
  data: {
    permissions: {
      only: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__/* .PermissionsEnum */ .U.REQUEST_APPROVAL_VIEW],
      redirectTo: '/pages/dashboard'
    }
  }
}];
let ApprovalsRoutingModule = /*#__PURE__*/(() => {
  class ApprovalsRoutingModule {
    static {
      this.ɵfac = function ApprovalsRoutingModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || ApprovalsRoutingModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdefineNgModule"] */ .$C({
        type: ApprovalsRoutingModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__/* .RouterModule */ .iI.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_4__/* .RouterModule */ .iI]
      });
    }
  }
  return ApprovalsRoutingModule;
})();

/***/ })

}]);