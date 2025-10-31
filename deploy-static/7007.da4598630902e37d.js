"use strict";
(self["webpackChunkgauzy"] = self["webpackChunkgauzy"] || []).push([[7007],{

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

/***/ 19013:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   s: () => (/* binding */ EquipmentSharingService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80189);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(592);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(64913);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26860);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45715);






let EquipmentSharingService = /*#__PURE__*/(() => {
  class EquipmentSharingService {
    constructor(http) {
      this.http = http;
      this.EQUIPMENT_SHARING_URL = `${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_0__/* .API_PREFIX */ .m4}/equipment-sharing`;
    }
    /**
     * Retrieves all equipment sharing records.
     *
     * @returns A promise that resolves to an array of equipment sharing records.
     */
    getAll() {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ ._)(this.http.get(`${this.EQUIPMENT_SHARING_URL}`));
    }
    /**
     * Retrieves equipment sharing records for a specific organization.
     *
     * @param id - The unique identifier of the organization.
     * @returns A promise that resolves to an array of equipment sharing records associated with the given organization.
     */
    getByOrganizationId(id) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ ._)(this.http.get(`${this.EQUIPMENT_SHARING_URL}/organization/${id}`));
    }
    /**
     * Retrieves equipment sharing records by the author (employee) user ID.
     *
     * @param id - The unique identifier of the author user.
     * @returns A promise that resolves to an array of equipment sharing records created by the specified user.
     */
    getByEmployeeId(id) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ ._)(this.http.get(`${this.EQUIPMENT_SHARING_URL}/employee/${id}`));
    }
    /**
     * Deletes an equipment sharing record by its ID.
     *
     * @param id - The unique identifier of the equipment sharing record to delete.
     * @returns A promise that resolves when the deletion is complete.
     */
    delete(id) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ ._)(this.http.delete(`${this.EQUIPMENT_SHARING_URL}/${id}`));
    }
    /**
     * Creates a new equipment sharing record for a specific organization.
     *
     * @param equipmentSharing - The input data required to create the equipment sharing record.
     * @param organizationId - The ID of the organization that the record belongs to.
     * @returns A promise that resolves to the newly created equipment sharing record.
     */
    create(equipmentSharing, organizationId) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ ._)(this.http.post(`${this.EQUIPMENT_SHARING_URL}/organization/${organizationId}`, equipmentSharing));
    }
    /**
     * Updates an existing equipment sharing record.
     *
     * @param id - The unique identifier of the equipment sharing record to update.
     * @param input - The updated data for the equipment sharing record.
     * @returns A promise that resolves to the updated equipment sharing record.
     */
    update(id, input) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ ._)(this.http.put(`${this.EQUIPMENT_SHARING_URL}/${id}`, input));
    }
    /**
     * Approves an equipment sharing request.
     *
     * @param id - The unique identifier of the equipment sharing record to approve.
     * @returns A promise that resolves to the equipment sharing record updated with the approved status.
     */
    approval(id) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ ._)(this.http.put(`${this.EQUIPMENT_SHARING_URL}/approval/${id}`, {
        status: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__/* .RequestApprovalStatusTypesEnum */ .B.APPROVED
      }));
    }
    /**
     * Refuses an equipment sharing request.
     *
     * @param id - The unique identifier of the equipment sharing record to refuse.
     * @returns A promise that resolves to the equipment sharing record updated with the refused status.
     */
    refuse(id) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ ._)(this.http.put(`${this.EQUIPMENT_SHARING_URL}/refuse/${id}`, {
        status: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__/* .RequestApprovalStatusTypesEnum */ .B.REFUSED
      }));
    }
    static {
      this.ɵfac = function EquipmentSharingService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || EquipmentSharingService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵinject"] */ .KVO(_angular_common_http__WEBPACK_IMPORTED_MODULE_4__/* .HttpClient */ .Qq));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdefineInjectable"] */ .jDH({
        token: EquipmentSharingService,
        factory: EquipmentSharingService.ɵfac
      });
    }
  }
  return EquipmentSharingService;
})();

/***/ }),

/***/ 30037:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Q: () => (/* binding */ EquipmentSharingMutationModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(14572);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(10936);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(56383);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(55567);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(19223);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71924);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19013);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(59016);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(34946);
/* harmony import */ var _employee_employee_multi_select_employee_multi_select_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6269);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);










let EquipmentSharingMutationModule = /*#__PURE__*/(() => {
  class EquipmentSharingMutationModule {
    static {
      this.ɵfac = function EquipmentSharingMutationModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || EquipmentSharingMutationModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .$C({
        type: EquipmentSharingMutationModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .G2t({
        providers: [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_1__/* .EquipmentSharingService */ .s, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_2__/* .Store */ .il, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_3__/* .EquipmentService */ .m, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_4__/* .EquipmentSharingPolicyService */ .i],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__/* .CommonModule */ .MD, _angular_forms__WEBPACK_IMPORTED_MODULE_6__/* .FormsModule */ .YN, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbCardModule */ .lVF, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbIconModule */ .clu, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbCheckboxModule */ .Ad8, _angular_forms__WEBPACK_IMPORTED_MODULE_6__/* .ReactiveFormsModule */ .X1, _angular_forms__WEBPACK_IMPORTED_MODULE_6__/* .FormsModule */ .YN, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbButtonModule */ .P5N, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbInputModule */ .pty, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbSelectModule */ .VcP, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbDatepickerModule */ .TgK, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__/* .NgSelectModule */ .MQ, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbRadioModule */ .iyp, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__/* .TranslateModule */ .h.forChild(), _employee_employee_multi_select_employee_multi_select_module__WEBPACK_IMPORTED_MODULE_10__/* .EmployeeMultiSelectModule */ .I]
      });
    }
  }
  return EquipmentSharingMutationModule;
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

/***/ 31488:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ EquipmentSharingStatusEnum),
/* harmony export */   Z: () => (/* binding */ EquipmentSharingParticipantEnum)
/* harmony export */ });
var EquipmentSharingStatusEnum = /*#__PURE__*/function (EquipmentSharingStatusEnum) {
  EquipmentSharingStatusEnum["REQUESTED"] = "REQUESTED";
  EquipmentSharingStatusEnum["APPROVED"] = "APPROVED";
  EquipmentSharingStatusEnum["REFUSED"] = "REFUSED";
  return EquipmentSharingStatusEnum;
}(EquipmentSharingStatusEnum || {});
var EquipmentSharingParticipantEnum = /*#__PURE__*/function (EquipmentSharingParticipantEnum) {
  EquipmentSharingParticipantEnum["EMPLOYEE"] = "EMPLOYEE";
  EquipmentSharingParticipantEnum["TEAM"] = "TEAM";
  return EquipmentSharingParticipantEnum;
}(EquipmentSharingParticipantEnum || {});

/***/ }),

/***/ 34946:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   i: () => (/* binding */ EquipmentSharingPolicyService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80189);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(64913);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26024);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26860);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45715);





let EquipmentSharingPolicyService = /*#__PURE__*/(() => {
  class EquipmentSharingPolicyService {
    constructor(http) {
      this.http = http;
      this.EQUIPMENT_SHARING_POLICY_URL = `${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_0__/* .API_PREFIX */ .m4}/equipment-sharing-policy`;
    }
    /**
     * Get all equipment sharing policies with optional filtering and relations.
     *
     * @param where - Conditions to filter the equipment sharing policies.
     * @param relations - Optional relations to include in the result.
     * @returns A promise that resolves to a paginated list of equipment sharing policies.
     */
    getAll(where, relations = []) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ ._)(this.http.get(`${this.EQUIPMENT_SHARING_POLICY_URL}`, {
        params: (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_2__/* .toParams */ .SV)({
          where,
          relations
        })
      }));
    }
    /**
     * Delete an equipment sharing policy by ID.
     *
     * @param id - The ID of the equipment sharing policy to delete.
     * @returns A promise that resolves when the equipment sharing policy has been deleted.
     */
    delete(id) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ ._)(this.http.delete(`${this.EQUIPMENT_SHARING_POLICY_URL}/${id}`));
    }
    /**
     * Create a new equipment sharing policy.
     *
     * @param input - The equipment sharing policy data to create.
     * @returns A promise that resolves to the created equipment sharing policy.
     */
    create(input) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ ._)(this.http.post(this.EQUIPMENT_SHARING_POLICY_URL, input));
    }
    /**
     * Update an existing equipment sharing policy.
     *
     * @param id - The ID of the equipment sharing policy to update.
     * @param input - The updated equipment sharing policy data.
     * @returns A promise that resolves to the updated equipment sharing policy.
     */
    update(id, input) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .firstValueFrom */ ._)(this.http.put(`${this.EQUIPMENT_SHARING_POLICY_URL}/${id}`, input));
    }
    static {
      this.ɵfac = function EquipmentSharingPolicyService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || EquipmentSharingPolicyService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵinject"] */ .KVO(_angular_common_http__WEBPACK_IMPORTED_MODULE_4__/* .HttpClient */ .Qq));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdefineInjectable"] */ .jDH({
        token: EquipmentSharingPolicyService,
        factory: EquipmentSharingPolicyService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return EquipmentSharingPolicyService;
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

/***/ }),

/***/ 98610:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ EquipmentSharingMutationComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(73014);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(55598);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(10936);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31488);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(592);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(56383);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(26024);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(52738);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(19223);
/* harmony import */ var _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38546);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(19013);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(59016);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(71924);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(88319);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(5855);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(34946);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(41598);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(14572);
/* harmony import */ var _employee_employee_multi_select_employee_multi_select_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(57354);


















const _c0 = (a0, a1, a2) => ({
  active: a0,
  requested: a1,
  approved: a2
});
const _c1 = a0 => ({
  "status-danger": a0
});
function EquipmentSharingMutationComponent_form_8_nb_option_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("value", item_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", item_r3.name, " ");
  }
}
function EquipmentSharingMutationComponent_form_8_nb_option_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const policy_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("value", policy_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", policy_r4.name, "");
  }
}
function EquipmentSharingMutationComponent_form_8_ng_container_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(1, "div", 20)(2, "ga-employee-multi-select", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("selectedChange", function EquipmentSharingMutationComponent_form_8_ng_container_28_Template_ga_employee_multi_select_selectedChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.onEmployeesSelected($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("selectedEmployeeIds", ctx_r1.form.get("employees").value)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(3, 2, "FORM.PLACEHOLDERS.CHOOSE_EMPLOYEES"));
  }
}
function EquipmentSharingMutationComponent_form_8_ng_container_29_nb_option_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const team_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("value", team_r7.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", team_r7.name, " ");
  }
}
function EquipmentSharingMutationComponent_form_8_ng_container_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(1, "div", 20)(2, "nb-select", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("selectedChange", function EquipmentSharingMutationComponent_form_8_ng_container_29_Template_nb_select_selectedChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.onTeamsSelected($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(4, EquipmentSharingMutationComponent_form_8_ng_container_29_nb_option_4_Template, 2, 2, "nb-option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("selected", ctx_r1.selectedTeams)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(3, 3, "FORM.PLACEHOLDERS.CHOOSE_TEAMS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx_r1.teams);
  }
}
function EquipmentSharingMutationComponent_form_8_div_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", ctx_r1.shareStartDay.errors.beforeRequestDayMsg, " ");
  }
}
function EquipmentSharingMutationComponent_form_8_div_52_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", ctx_r1.shareEndDay.errors.exceedAllowedDaysMsg, " ");
  }
}
function EquipmentSharingMutationComponent_form_8_div_52_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", ctx_r1.shareEndDay.errors.beforeStartDateMsg, " ");
  }
}
function EquipmentSharingMutationComponent_form_8_div_52_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", ctx_r1.shareEndDay.errors.itemInUseMsg, " ");
  }
}
function EquipmentSharingMutationComponent_form_8_div_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, EquipmentSharingMutationComponent_form_8_div_52_div_1_Template, 2, 1, "div", 30)(2, EquipmentSharingMutationComponent_form_8_div_52_div_2_Template, 2, 1, "div", 30)(3, EquipmentSharingMutationComponent_form_8_div_52_div_3_Template, 2, 1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r1.shareEndDay.errors.exceedAllowedDays);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r1.shareEndDay.errors.beforeStartDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r1.shareEndDay.errors.itemInUse);
  }
}
function EquipmentSharingMutationComponent_form_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "form", 12)(1, "div", 13)(2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(3, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(5, "div", 14)(6, "nb-select", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("selectedChange", function EquipmentSharingMutationComponent_form_8_Template_nb_select_selectedChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.setRequestStatus($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(8, EquipmentSharingMutationComponent_form_8_nb_option_8_Template, 2, 2, "nb-option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(9, "div", 18)(10, "div", 19)(11, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(13, "div", 13)(14, "div", 20)(15, "nb-select", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("selectedChange", function EquipmentSharingMutationComponent_form_8_Template_nb_select_selectedChange_15_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.onEquipmentSharingPolicySelected($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(17, EquipmentSharingMutationComponent_form_8_nb_option_17_Template, 2, 2, "nb-option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(18, "div", 13)(19, "div", 20)(20, "nb-radio-group", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("valueChange", function EquipmentSharingMutationComponent_form_8_Template_nb_radio_group_valueChange_20_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.onParticipantsChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(21, "nb-radio", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(23, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(24, "nb-radio", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(26, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(27, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(28, EquipmentSharingMutationComponent_form_8_ng_container_28_Template, 4, 4, "ng-container", 24)(29, EquipmentSharingMutationComponent_form_8_ng_container_29_Template, 5, 5, "ng-container", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(30, "div", 13)(31, "div", 25)(32, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(33, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(34, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(35, "nb-datepicker", null, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(37, "div", 25)(38, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(39, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(40, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(41, "nb-datepicker", 29, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayListener"] */ .mxI("dateChange", function EquipmentSharingMutationComponent_form_8_Template_nb_datepicker_dateChange_41_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayBindingSet"] */ .DH7(ctx_r1.date1, $event) || (ctx_r1.date1 = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(43, EquipmentSharingMutationComponent_form_8_div_43_Template, 2, 1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(44, "div", 13)(45, "div", 25)(46, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(47, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(48, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(49, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(50, "nb-datepicker", 29, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayListener"] */ .mxI("dateChange", function EquipmentSharingMutationComponent_form_8_Template_nb_datepicker_dateChange_50_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayBindingSet"] */ .DH7(ctx_r1.date2, $event) || (ctx_r1.date2 = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(52, EquipmentSharingMutationComponent_form_8_div_52_Template, 4, 3, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()()();
  }
  if (rf & 2) {
    const shareRequestDatePicker_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(36);
    const shareStartDatePicker_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(42);
    const shareEndDatePicker_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(51);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("formGroup", ctx_r1.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(4, 31, "FORM.PLACEHOLDERS.NAME"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(7, 33, "FORM.LABELS.SELECT_EQUIPMENT"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx_r1.equipmentItems);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction3"] */ .sMw(49, _c0, ctx_r1.requestStatus === ctx_r1.requestStatuses[2], ctx_r1.requestStatus === ctx_r1.requestStatuses[0], ctx_r1.requestStatus === ctx_r1.requestStatuses[1]));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(ctx_r1.getStatus(ctx_r1.requestStatus));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpropertyInterpolate"] */ .FS9("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(16, 35, "FORM.PLACEHOLDERS.CHOOSE_APPROVAL_POLICY"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("selected", ctx_r1.selectedEquipmentSharingPolicy);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx_r1.equipmentSharingPolicies);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("value", ctx_r1.participants);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("value", ctx_r1.equipmentSharingParticipantEnum.EMPLOYEE);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI("", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(23, 37, "APPROVAL_REQUEST_PAGE.EMPLOYEES"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("value", ctx_r1.equipmentSharingParticipantEnum.TEAM);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI("", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(26, 39, "APPROVAL_REQUEST_PAGE.TEAMS"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r1.participants === ctx_r1.equipmentSharingParticipantEnum.EMPLOYEE);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r1.participants === ctx_r1.equipmentSharingParticipantEnum.TEAM);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpropertyInterpolate"] */ .FS9("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(34, 41, "FORM.LABELS.SELECT_SHARE_REQUEST_DATE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("nbDatepicker", shareRequestDatePicker_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpropertyInterpolate"] */ .FS9("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(40, 43, "FORM.LABELS.SELECT_SHARE_START_DATE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("nbDatepicker", shareStartDatePicker_r9)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction1"] */ .eq3(53, _c1, ctx_r1.shareStartDay.invalid && ctx_r1.shareStartDay.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayProperty"] */ .R50("date", ctx_r1.date1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("filter", ctx_r1.filter);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r1.shareStartDay.dirty && ctx_r1.shareStartDay.errors && ctx_r1.shareStartDay.errors.beforeRequestDay);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpropertyInterpolate"] */ .FS9("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(48, 45, "POP_UPS.PICK_DATE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpropertyInterpolate"] */ .FS9("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(49, 47, "FORM.LABELS.SELECT_SHARE_END_DATE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("nbDatepicker", shareEndDatePicker_r10)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction1"] */ .eq3(55, _c1, ctx_r1.shareEndDay.invalid && ctx_r1.shareEndDay.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayProperty"] */ .R50("date", ctx_r1.date2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("filter", ctx_r1.filter);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r1.shareEndDay.dirty && ctx_r1.shareEndDay.errors);
  }
}
let EquipmentSharingMutationComponent = /*#__PURE__*/(() => {
  let EquipmentSharingMutationComponent = class EquipmentSharingMutationComponent extends _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_1__/* .TranslationBaseComponent */ .K {
    constructor(dialogRef, equipmentSharingService, equipmentService, store, fb, translationService, employeesService, organizationTeamsService, equipmentSharingPolicyService) {
      super(translationService);
      this.dialogRef = dialogRef;
      this.equipmentSharingService = equipmentSharingService;
      this.equipmentService = equipmentService;
      this.store = store;
      this.fb = fb;
      this.translationService = translationService;
      this.employeesService = employeesService;
      this.organizationTeamsService = organizationTeamsService;
      this.equipmentSharingPolicyService = equipmentSharingPolicyService;
      this.employees = [];
      this.participants = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__/* .EquipmentSharingParticipantEnum */ .Z.EMPLOYEE;
      this.selectedEmployees = [];
      this.selectedTeams = [];
      this.equipmentSharingPolicies = [];
      this.requestStatuses = Object.values(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__/* .RequestApprovalStatus */ .X);
      this.equipmentSharingParticipantEnum = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__/* .EquipmentSharingParticipantEnum */ .Z;
      this.date1 = new Date();
      this.date2 = new Date();
      this.filter = this.datePickerFilterPredicate.bind(this);
      this.periodsUnderUse = [];
    }
    ngOnInit() {
      this.store.selectedOrganization$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .filter */ .p)(organization => !!organization), (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_5__/* .distinctUntilChange */ .nI)(), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__/* .untilDestroyed */ .s)(this)).subscribe(organization => {
        if (organization) {
          this.selectedOrganization = organization;
          this.initializeForm();
          this.loadEquipmentItems();
          this.loadEmployees();
          this.loadTeams();
          this.loadEquipmentSharingPolicy();
          this.loadRequestStatus();
          this.validateForm();
        }
      });
    }
    parseInt(value) {
      return parseInt(value, 10);
    }
    ngOnDestroy() {}
    initializeForm() {
      var _this = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A)(function* () {
        _this.form = _this.fb.group({
          equipment: [_this.equipmentSharing ? _this.equipmentSharing.equipmentId : '', _angular_forms__WEBPACK_IMPORTED_MODULE_8__/* .Validators */ .k0.required],
          equipmentSharingPolicyId: [_this.equipmentSharing && _this.equipmentSharing.equipmentSharingPolicyId ? _this.equipmentSharing.equipmentSharingPolicyId : '', _angular_forms__WEBPACK_IMPORTED_MODULE_8__/* .Validators */ .k0.required],
          employees: [_this.equipmentSharing ? _this.equipmentSharing.employees.map(emp => emp.id) : []],
          teams: [_this.equipmentSharing ? _this.equipmentSharing.teams.map(team => team.id) : []],
          shareRequestDay: [_this.equipmentSharing ? new Date(_this.equipmentSharing.shareRequestDay) : new Date(Date.now())],
          shareStartDay: [_this.equipmentSharing ? new Date(_this.equipmentSharing.shareStartDay) : null],
          shareEndDay: [_this.equipmentSharing ? new Date(_this.equipmentSharing.shareEndDay) : null],
          status: [_this.requestStatus],
          name: [_this.equipmentSharing && _this.equipmentSharing.name ? _this.equipmentSharing.name : '', _angular_forms__WEBPACK_IMPORTED_MODULE_8__/* .Validators */ .k0.required]
        });
        /**
         * Auto select participants (TEAM/EMPLOYEE)
         */
        const {
          teams
        } = _this.form.getRawValue();
        if ((0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_5__/* .isNotEmpty */ .hj)(teams)) {
          _this.participants = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__/* .EquipmentSharingParticipantEnum */ .Z.TEAM;
        } else {
          _this.participants = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__/* .EquipmentSharingParticipantEnum */ .Z.EMPLOYEE;
        }
      })();
    }
    /**
     * Load equipment sharing policies for the selected organization.
     */
    loadEquipmentSharingPolicy() {
      var _this2 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A)(function* () {
        const {
          id: organizationId,
          tenantId
        } = _this2.selectedOrganization;
        _this2.equipmentSharingPolicies = (yield _this2.equipmentSharingPolicyService.getAll({
          organizationId,
          tenantId
        }, [])).items;
      })();
    }
    onEquipmentSharingPolicySelected(equipmentSharingPolicy) {
      this.selectedEquipmentSharingPolicy = equipmentSharingPolicy;
    }
    onSaveRequest() {
      var _this3 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A)(function* () {
        const shareRequest = {
          equipmentId: _this3.form.value['equipment'],
          equipment: _this3.equipmentItems.find(eq => eq.id === _this3.form.value['equipment']),
          equipmentSharingPolicyId: _this3.form.value['equipmentSharingPolicyId'],
          employees: _this3.employees.filter(emp => {
            return _this3.selectedEmployees.includes(emp.id);
          }),
          teams: _this3.teams.filter(team => {
            return _this3.selectedTeams.includes(team.id);
          }),
          shareRequestDay: _this3.form.value['shareRequestDay'],
          shareStartDay: _this3.form.value['shareStartDay'],
          shareEndDay: _this3.form.value['shareEndDay'],
          status: _this3.requestStatus,
          name: _this3.form.value['name'],
          organizationId: _this3.selectedOrganization.id,
          tenantId: _this3.selectedOrganization.tenantId
        };
        let equipmentSharing;
        if (_this3.equipmentSharing) {
          equipmentSharing = yield _this3.equipmentSharingService.update(_this3.equipmentSharing.id, shareRequest);
        } else {
          equipmentSharing = yield _this3.equipmentSharingService.create(shareRequest, _this3.selectedOrganization.id);
        }
        _this3.closeDialog(equipmentSharing);
      })();
    }
    closeDialog(equipmentSharing) {
      var _this4 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A)(function* () {
        _this4.dialogRef.close(equipmentSharing);
      })();
    }
    loadEquipmentItems() {
      var _this5 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A)(function* () {
        const {
          id,
          tenantId
        } = _this5.selectedOrganization;
        _this5.equipmentItems = (yield _this5.equipmentService.getAll(['equipmentSharings'], {
          organizationId: id,
          tenantId
        })).items;
      })();
    }
    loadEmployees() {
      var _this6 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A)(function* () {
        const {
          id,
          tenantId
        } = _this6.selectedOrganization;
        _this6.employeesService.getAll(['user'], {
          organizationId: id,
          tenantId
        }).pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__/* .untilDestroyed */ .s)(_this6)).subscribe(({
          items
        }) => {
          _this6.employees = items;
        });
      })();
    }
    loadTeams() {
      var _this7 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A)(function* () {
        const {
          id,
          tenantId
        } = _this7.selectedOrganization;
        _this7.teams = (yield _this7.organizationTeamsService.getAll(['members'], {
          organizationId: id,
          tenantId
        })).items;
      })();
    }
    loadRequestStatus() {
      this.requestStatus = this.equipmentSharing ? this.equipmentSharing.status : _gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__/* .RequestApprovalStatusTypesEnum */ .B.REQUESTED;
    }
    setRequestStatus(statusValue) {
      const selectedItem = this.equipmentItems.find(item => {
        return item.id === statusValue;
      });
      if (this.equipmentSharing && this.equipmentSharing.status === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__/* .RequestApprovalStatusTypesEnum */ .B.REFUSED) {
        this.requestStatus = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__/* .RequestApprovalStatusTypesEnum */ .B.REFUSED;
        return;
      }
      if (selectedItem.autoApproveShare) {
        this.requestStatus = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__/* .RequestApprovalStatusTypesEnum */ .B.APPROVED;
      } else {
        this.requestStatus = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__/* .RequestApprovalStatusTypesEnum */ .B.REQUESTED;
      }
    }
    onEmployeesSelected(employees) {
      this.selectedEmployees = employees;
      this.form.get('employees').setValue(employees);
      this.form.get('employees').updateValueAndValidity();
    }
    onTeamsSelected(teamsSelection) {
      this.selectedTeams = teamsSelection;
    }
    onParticipantsChange(participants) {
      this.participants = participants;
    }
    validateForm() {
      if (this.equipmentSharing) {
        this.selectedItem = this.equipmentSharing.equipment;
      }
      this.shareRequestDay = this.form.get('shareRequestDay');
      this.shareStartDay = this.form.get('shareStartDay');
      this.shareEndDay = this.form.get('shareEndDay');
      // hours * minutes * seconds * milliseconds
      const oneDay = 24 * 60 * 60 * 1000;
      this.form.get('equipment').valueChanges.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__/* .untilDestroyed */ .s)(this)).subscribe(valueId => {
        this.selectedItem = this.equipmentItems.find(item => {
          return item.id === valueId;
        });
        this.periodsUnderUse = [];
        if (this.selectedItem.equipmentSharings.length > 0) {
          this.selectedItem.equipmentSharings.forEach(equipmentSharing => {
            this.periodsUnderUse.push({
              startDate: new Date(equipmentSharing.shareStartDay),
              endDate: new Date(equipmentSharing.shareEndDay)
            });
          });
        }
      });
      this.form.valueChanges.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__/* .untilDestroyed */ .s)(this)).subscribe(form => {
        //check if start day is after share request day
        if (this.shareStartDay.value <= this.shareRequestDay.value) {
          this.shareStartDay.setErrors({
            invalid: true,
            beforeRequestDay: true,
            beforeRequestDayMsg: this.getTranslation('EQUIPMENT_SHARING_PAGE.MESSAGES.BEFORE_REQUEST_DAY_ERR')
          });
        }
        //check if user selects longer period than allowed
        const diffDays = Math.ceil(Math.abs((this.shareEndDay.value - this.shareStartDay.value) / oneDay));
        if (this.selectedItem && this.selectedItem.maxSharePeriod && diffDays + 1 > this.selectedItem.maxSharePeriod) {
          this.shareEndDay.setErrors({
            invalid: true,
            exceedAllowedDays: true,
            exceedAllowedDaysMsg: this.getTranslation('EQUIPMENT_SHARING_PAGE.MESSAGES.EXCEED_PERIOD_ERR') + this.selectedItem.maxSharePeriod
          });
        }
        // check of share end date after share start date
        if (this.shareEndDay.value < this.shareStartDay.value) {
          this.shareEndDay.setErrors({
            invalid: true,
            beforeStartDate: true,
            beforeStartDateMsg: this.getTranslation('EQUIPMENT_SHARING_PAGE.MESSAGES.BEFORE_START_DATE_ERR')
          });
        }
        //check if end date is after period in use
        //
        //find nearest period in use and get start date
        const followingPeriods = [...this.periodsUnderUse].sort((a, b) => a.startDate - b.startDate).filter(period => {
          return period.startDate > this.shareStartDay.value;
        });
        const dateItemToBeReturned = followingPeriods.length > 0 ? followingPeriods[0].startDate : null;
        if (dateItemToBeReturned && this.shareEndDay.value > dateItemToBeReturned) {
          this.shareEndDay.setErrors({
            invalid: true,
            itemInUse: true,
            itemInUseMsg: this.getTranslation('EQUIPMENT_SHARING_PAGE.MESSAGES.ITEM_RETURNED_BEFORE_ERR') + dateItemToBeReturned.toLocaleString().split(',')[0]
          });
        }
      });
    }
    checkIfDateBetweenPeriods(periods, dateForCheck) {
      let dateIsInGivenPeriods = false;
      periods.forEach(period => {
        if (dateForCheck >= period.startDate && dateForCheck <= period.endDate) {
          dateIsInGivenPeriods = true;
        }
      });
      return dateIsInGivenPeriods;
    }
    datePickerFilterPredicate(date) {
      if (!this.selectedItem) {
        return true;
      }
      return !this.checkIfDateBetweenPeriods(this.periodsUnderUse, date);
    }
    getStatus(id) {
      switch (id) {
        case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__/* .RequestApprovalStatusTypesEnum */ .B.REQUESTED:
          return this.getTranslation('APPROVAL_REQUEST_PAGE.REQUESTED');
        case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__/* .RequestApprovalStatusTypesEnum */ .B.REFUSED:
          return this.getTranslation('APPROVAL_REQUEST_PAGE.REFUSED');
        case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__/* .RequestApprovalStatusTypesEnum */ .B.APPROVED:
          return this.getTranslation('APPROVAL_REQUEST_PAGE.APPROVED');
      }
    }
    static {
      this.ɵfac = function EquipmentSharingMutationComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || EquipmentSharingMutationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbDialogRef */ .ybQ), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_10__/* .EquipmentSharingService */ .s), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_11__/* .EquipmentService */ .m), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_12__/* .Store */ .il), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_forms__WEBPACK_IMPORTED_MODULE_8__/* .UntypedFormBuilder */ .ze), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__/* .TranslateService */ .c$), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_14__/* .EmployeesService */ .r), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_15__/* .OrganizationTeamsService */ .F), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_16__/* .EquipmentSharingPolicyService */ .i));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: EquipmentSharingMutationComponent,
        selectors: [["ngx-equipment-sharing-mutation"]],
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
        decls: 16,
        vars: 11,
        consts: [["shareRequestDatePicker", ""], ["shareStartDatePicker", ""], ["shareEndDatePicker", ""], [1, "main"], [1, "d-flex", "flex-column"], [1, "cancel"], [1, "fas", "fa-times", 3, "click"], [1, "title"], [3, "formGroup", 4, "ngIf"], [1, "text-left"], ["nbButton", "", "status", "basic", "outline", "", 1, "delete", "mr-3", 3, "click"], ["status", "success", "nbButton", "", 3, "click", "disabled"], [3, "formGroup"], [1, "row"], [1, "col-sm-5", "mb-4"], ["nbInput", "", "type", "text", "formControlName", "name", "fullWidth", "", 1, "d-block", 3, "placeholder"], ["formControlName", "equipment", 1, "d-block", 3, "selectedChange", "placeholder"], [3, "value", 4, "ngFor", "ngForOf"], [1, "col-sm-2", "mb-4"], [1, "status-label", 3, "ngClass"], [1, "col-sm-12", "mb-3"], ["formControlName", "equipmentSharingPolicyId", "fullWidth", "", 3, "selectedChange", "selected", "placeholder"], [3, "valueChange", "value"], [3, "value"], [4, "ngIf"], [1, "col-sm-6"], [1, "form-group"], ["fullWidth", "", "formControlName", "shareRequestDay", "nbInput", "", 3, "nbDatepicker", "placeholder"], ["fullWidth", "", "formControlName", "shareStartDay", "nbInput", "", 3, "nbDatepicker", "placeholder", "ngClass"], [3, "dateChange", "date", "filter"], ["class", "text-danger", 4, "ngIf"], ["fullWidth", "", "formControlName", "shareEndDay", "nbInput", "", 3, "nbDatepicker", "placeholder", "ngClass"], [3, "selectedChange", "selectedEmployeeIds", "placeholder"], ["formControlName", "teams", "multiple", "", "fullWidth", "", 3, "selectedChange", "selected", "placeholder"], [1, "text-danger"]],
        template: function EquipmentSharingMutationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-card", 3)(1, "nb-card-header", 4)(2, "span", 5)(3, "i", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function EquipmentSharingMutationComponent_Template_i_click_3_listener() {
              return ctx.closeDialog();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(4, "h5", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(6, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(7, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(8, EquipmentSharingMutationComponent_form_8_Template, 53, 57, "form", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(9, "nb-card-footer", 9)(10, "button", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function EquipmentSharingMutationComponent_Template_button_click_10_listener() {
              return ctx.dialogRef.close();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(12, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(13, "button", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function EquipmentSharingMutationComponent_Template_button_click_13_listener() {
              return ctx.onSaveRequest();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(15, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(6, 5, ctx.equipmentSharing ? "EQUIPMENT_SHARING_PAGE.EDIT_EQUIPMENT_REQUEST" : "EQUIPMENT_SHARING_PAGE.ADD_EQUIPMENT_REQUEST"), " ");
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
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_17__/* .NgClass */ .YU, _angular_common__WEBPACK_IMPORTED_MODULE_17__/* .NgForOf */ .Sq, _angular_common__WEBPACK_IMPORTED_MODULE_17__/* .NgIf */ .bT, _angular_forms__WEBPACK_IMPORTED_MODULE_8__/* ["ɵNgNoValidate"] */ .qT, _angular_forms__WEBPACK_IMPORTED_MODULE_8__/* .DefaultValueAccessor */ .me, _angular_forms__WEBPACK_IMPORTED_MODULE_8__/* .NgControlStatus */ .BC, _angular_forms__WEBPACK_IMPORTED_MODULE_8__/* .NgControlStatusGroup */ .cb, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbCardComponent */ .SrT, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbCardBodyComponent */ .KH5, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbCardFooterComponent */ .VDm, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbCardHeaderComponent */ .zJv, _angular_forms__WEBPACK_IMPORTED_MODULE_8__/* .FormGroupDirective */ .j4, _angular_forms__WEBPACK_IMPORTED_MODULE_8__/* .FormControlName */ .JD, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbButtonComponent */ .YP2, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbInputDirective */ .i6h, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbSelectComponent */ .S81, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbOptionComponent */ .ZJ2, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbDatepickerDirective */ .OA9, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbDatepickerComponent */ .k2z, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbRadioComponent */ .XIt, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbRadioGroupComponent */ .yZH, _employee_employee_multi_select_employee_multi_select_component__WEBPACK_IMPORTED_MODULE_18__/* .EmployeeSelectComponent */ .O, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__/* .TranslatePipe */ .D9],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   i[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n}\n[dir=ltr]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n[dir=rtl]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--gauzy-text-color-1);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(245, 109, 88, 0.3);\n  border-width: 2px;\n  color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(245, 109, 88, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 16px;\n  letter-spacing: 0em;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(126, 126, 143, 0.3);\n  border-width: 2px;\n  color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(126, 126, 143, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(37, 184, 105, 0.3);\n  border-width: 2px;\n  color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(37, 184, 105, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[disabled][_ngcontent-%COMP%], \n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic.btn-disabled[_ngcontent-%COMP%] {\n  background-color: var(--button-outline-basic-disabled-background-color);\n  border-color: var(--button-outline-basic-disabled-border-color);\n  color: var(--button-outline-basic-disabled-text-color);\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].primary.appearance-filled.status-primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  border: unset;\n  background-color: var(--color-primary-transparent-default);\n  box-shadow: var(--gauzy-shadow) 0, 0, 0, 0.15;\n}\n[dir=ltr]   [_nghost-%COMP%]     input, \n[dir=ltr]   [_nghost-%COMP%]     textarea {\n  text-align: start;\n}\n[dir=rtl]   [_nghost-%COMP%]     input, \n[dir=rtl]   [_nghost-%COMP%]     textarea {\n  text-align: end;\n}\n[_nghost-%COMP%]     input, \n[_nghost-%COMP%]     nb-select.appearance-outline.status-basic .select-button, \n[_nghost-%COMP%]     .ng-select .ng-select-container {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n  height: 42px !important;\n}\n[_nghost-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder, \n[_nghost-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {\n  top: unset !important;\n}\n[_nghost-%COMP%]     label, \n[_nghost-%COMP%]     .label {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  color: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]     textarea {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n}\n[_nghost-%COMP%]     .ng-select .ng-select-container input, \n[_nghost-%COMP%]     nb-tag-list input {\n  background-color: unset !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n}\n\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n}\n\n[dir=ltr]   [_nghost-%COMP%]   .col-sm-3[_ngcontent-%COMP%] {\n  padding-left: 0;\n}\n[dir=rtl]   [_nghost-%COMP%]   .col-sm-3[_ngcontent-%COMP%] {\n  padding-right: 0;\n}\n\n.status-label[_ngcontent-%COMP%] {\n  font-weight: bold;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: var(--border-radius);\n}\n.status-label[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 15px;\n  padding: 0;\n  margin: 0;\n  text-transform: uppercase;\n}\n\n.status-label.requested[_ngcontent-%COMP%] {\n  background: #ffc94d;\n}\n\n.status-label.approved[_ngcontent-%COMP%] {\n  background: #03e88c;\n}\n\n.status-label.active[_ngcontent-%COMP%] {\n  background: #e45959;\n}\n\nnb-radio-group[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.text-danger[_ngcontent-%COMP%] {\n  max-width: 100%;\n  font-size: 12px;\n  margin-top: 5px;\n}\n\n.main[_ngcontent-%COMP%] {\n  min-width: 800px;\n}"]
      });
    }
  };
  EquipmentSharingMutationComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_19__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__/* .UntilDestroy */ .d)({
    checkProperties: true
  }), (0,tslib__WEBPACK_IMPORTED_MODULE_19__/* .__metadata */ .Sn)("design:paramtypes", [_nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbDialogRef */ .ybQ, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_10__/* .EquipmentSharingService */ .s, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_11__/* .EquipmentService */ .m, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_12__/* .Store */ .il, _angular_forms__WEBPACK_IMPORTED_MODULE_8__/* .UntypedFormBuilder */ .ze, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__/* .TranslateService */ .c$, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_14__/* .EmployeesService */ .r, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_15__/* .OrganizationTeamsService */ .F, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_16__/* .EquipmentSharingPolicyService */ .i])], EquipmentSharingMutationComponent);
  return EquipmentSharingMutationComponent;
})();


/***/ })

}]);