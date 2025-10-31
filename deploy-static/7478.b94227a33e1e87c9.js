"use strict";
(self["webpackChunkgauzy"] = self["webpackChunkgauzy"] || []).push([[7478],{

/***/ 6231:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   w: () => (/* binding */ InviteMutationComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(73014);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(55598);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(56383);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(19223);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52738);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39855);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41598);
/* harmony import */ var _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38546);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(42433);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(941);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(51530);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5855);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(15480);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(71924);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(26860);
/* harmony import */ var _forms_email_invite_form_email_invite_form_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(44911);
















const _c0 = ["emailInviteForm"];
let InviteMutationComponent = /*#__PURE__*/(() => {
  let InviteMutationComponent = class InviteMutationComponent extends _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_0__/* .TranslationBaseComponent */ .K {
    get invitationType() {
      return this._invitationType;
    }
    set invitationType(value) {
      this._invitationType = value;
    }
    constructor(dialogRef, organizationProjectsService, organizationContactService, organizationDepartmentsService, organizationTeamsService, translateService, toastrService, store) {
      super(translateService);
      this.dialogRef = dialogRef;
      this.organizationProjectsService = organizationProjectsService;
      this.organizationContactService = organizationContactService;
      this.organizationDepartmentsService = organizationDepartmentsService;
      this.organizationTeamsService = organizationTeamsService;
      this.translateService = translateService;
      this.toastrService = toastrService;
      this.store = store;
      this.organizationProjects = [];
      this.organizationContacts = [];
      this.organizationDepartments = [];
      this.organizationTeams = [];
    }
    ngOnInit() {
      this.store.selectedOrganization$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__/* .filter */ .p)(organization => !!organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .tap */ .M)(organization => this.organization = organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .tap */ .M)(() => this.loadOrganizationData()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__/* .untilDestroyed */ .s)(this)).subscribe();
    }
    loadOrganizationData() {
      var _this = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(function* () {
        if (!_this.organization) {
          return;
        }
        try {
          yield _this.loadProjects();
          yield _this.loadOrganizationContacts();
          yield _this.loadDepartments();
          yield _this.getOrganizationTeams();
        } catch (error) {
          _this.toastrService.danger(error);
        }
      })();
    }
    loadProjects() {
      var _this2 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(function* () {
        const {
          tenantId
        } = _this2.store.user;
        const {
          id: organizationId
        } = _this2.organization;
        const {
          items = []
        } = yield _this2.organizationProjectsService.getAll([], {
          organizationId,
          tenantId
        });
        _this2.organizationProjects = items;
      })();
    }
    loadOrganizationContacts() {
      var _this3 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(function* () {
        const {
          tenantId
        } = _this3.store.user;
        const {
          id: organizationId
        } = _this3.organization;
        const {
          items = []
        } = yield _this3.organizationContactService.getAll([], {
          organizationId,
          tenantId
        });
        _this3.organizationContacts = items;
      })();
    }
    loadDepartments() {
      var _this4 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(function* () {
        const {
          tenantId
        } = _this4.store.user;
        const {
          id: organizationId
        } = _this4.organization;
        const {
          items = []
        } = yield _this4.organizationDepartmentsService.getAll([], {
          organizationId,
          tenantId
        });
        _this4.organizationDepartments = items;
      })();
    }
    getOrganizationTeams() {
      var _this5 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(function* () {
        if (!_this5.organization) {
          return;
        }
        const {
          tenantId
        } = _this5.store.user;
        const {
          id: organizationId
        } = _this5.organization;
        const {
          items = []
        } = yield _this5.organizationTeamsService.getAll([], {
          organizationId,
          tenantId
        });
        _this5.organizationTeams = items;
      })();
    }
    closeDialog(savedInvites = []) {
      this.dialogRef.close(savedInvites);
    }
    add() {
      var _this6 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(function* () {
        try {
          const {
            items,
            total,
            ignored
          } = yield _this6.emailInviteForm.saveInvites();
          if (ignored > 0) {
            _this6.toastrService.warning('INVITE_PAGE.IGNORED', {
              total,
              ignored
            });
          } else {
            _this6.toastrService.success('INVITE_PAGE.SENT', {
              total
            });
          }
          _this6.closeDialog(items);
        } catch (error) {
          _this6.toastrService.danger(error);
        }
      })();
    }
    static {
      this.ɵfac = function InviteMutationComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || InviteMutationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdirectiveInject"] */ .rXU(_nebular_theme__WEBPACK_IMPORTED_MODULE_6__/* .NbDialogRef */ .ybQ), _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_7__/* .OrganizationProjectsService */ .d), _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_8__/* .OrganizationContactService */ .$), _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_9__/* .OrganizationDepartmentsService */ .I), _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_10__/* .OrganizationTeamsService */ .F), _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__/* .TranslateService */ .c$), _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_12__/* .ToastrService */ .t), _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_13__/* .Store */ .il));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdefineComponent"] */ .VBU({
        type: InviteMutationComponent,
        selectors: [["ga-invite-mutation"]],
        viewQuery: function InviteMutationComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵviewQuery"] */ .GBs(_c0, 5);
          }
          if (rf & 2) {
            let _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵqueryRefresh"] */ .mGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵloadQuery"] */ .lsd()) && (ctx.emailInviteForm = _t.first);
          }
        },
        inputs: {
          invitationType: "invitationType"
        },
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
        decls: 17,
        vars: 15,
        consts: [["emailInviteForm", ""], [1, "d-flex", "flex-column"], [1, "cancel"], [1, "fas", "fa-times", 3, "click"], [1, "title"], [3, "organizationProjects", "organizationContacts", "organizationDepartments", "organizationTeams", "invitationType"], [1, "text-left"], ["status", "basic", "outline", "", "nbButton", "", 1, "mr-2", 3, "click"], ["status", "success", "nbButton", "", 1, "mr-2", 3, "click", "disabled"]],
        template: function InviteMutationComponent_Template(rf, ctx) {
          if (rf & 1) {
            const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵgetCurrentView"] */ .RV6();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .j41(0, "nb-card")(1, "nb-card-header", 1)(2, "span", 2)(3, "i", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵlistener"] */ .bIt("click", function InviteMutationComponent_Template_i_click_3_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵresetView"] */ .Njj(ctx.closeDialog());
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .j41(4, "h5", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ .EFF(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .nI1(6, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .j41(7, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelement"] */ .nrm(8, "ga-email-invite-form", 5, 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .j41(10, "nb-card-footer", 6)(11, "button", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵlistener"] */ .bIt("click", function InviteMutationComponent_Template_button_click_11_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵresetView"] */ .Njj(ctx.closeDialog());
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ .EFF(12);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .nI1(13, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .j41(14, "button", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵlistener"] */ .bIt("click", function InviteMutationComponent_Template_button_click_14_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵresetView"] */ .Njj(ctx.add());
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ .EFF(15);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipe"] */ .nI1(16, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .k0s()()();
          }
          if (rf & 2) {
            const emailInviteForm_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵreference"] */ .sdS(9);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .bMT(6, 9, "INVITE_PAGE." + ctx.invitationType + ".HEADER"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Y8G("organizationProjects", ctx.organizationProjects)("organizationContacts", ctx.organizationContacts)("organizationDepartments", ctx.organizationDepartments)("organizationTeams", ctx.organizationTeams)("invitationType", ctx.invitationType);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .bMT(13, 11, "BUTTONS.CANCEL"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Y8G("disabled", emailInviteForm_r2.form.invalid);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpipeBind1"] */ .bMT(16, 13, "INVITE_PAGE." + ctx.invitationType + ".ACTION"), " ");
          }
        },
        dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_6__/* .NbButtonComponent */ .YP2, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__/* .NbCardComponent */ .SrT, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__/* .NbCardBodyComponent */ .KH5, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__/* .NbCardFooterComponent */ .VDm, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__/* .NbCardHeaderComponent */ .zJv, _forms_email_invite_form_email_invite_form_component__WEBPACK_IMPORTED_MODULE_14__/* .EmailInviteFormComponent */ .V, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__/* .TranslatePipe */ .D9],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   i[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n}\n[dir=ltr]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n[dir=rtl]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--gauzy-text-color-1);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(245, 109, 88, 0.3);\n  border-width: 2px;\n  color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(245, 109, 88, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 16px;\n  letter-spacing: 0em;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(126, 126, 143, 0.3);\n  border-width: 2px;\n  color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(126, 126, 143, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(37, 184, 105, 0.3);\n  border-width: 2px;\n  color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(37, 184, 105, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[disabled][_ngcontent-%COMP%], \n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic.btn-disabled[_ngcontent-%COMP%] {\n  background-color: var(--button-outline-basic-disabled-background-color);\n  border-color: var(--button-outline-basic-disabled-border-color);\n  color: var(--button-outline-basic-disabled-text-color);\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].primary.appearance-filled.status-primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  border: unset;\n  background-color: var(--color-primary-transparent-default);\n  box-shadow: var(--gauzy-shadow) 0, 0, 0, 0.15;\n}\n[dir=ltr]   [_nghost-%COMP%]     input, \n[dir=ltr]   [_nghost-%COMP%]     textarea {\n  text-align: start;\n}\n[dir=rtl]   [_nghost-%COMP%]     input, \n[dir=rtl]   [_nghost-%COMP%]     textarea {\n  text-align: end;\n}\n[_nghost-%COMP%]     input, \n[_nghost-%COMP%]     nb-select.appearance-outline.status-basic .select-button, \n[_nghost-%COMP%]     .ng-select .ng-select-container {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n  height: 42px !important;\n}\n[_nghost-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder, \n[_nghost-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {\n  top: unset !important;\n}\n[_nghost-%COMP%]     label, \n[_nghost-%COMP%]     .label {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  color: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]     textarea {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n}\n[_nghost-%COMP%]     .ng-select .ng-select-container input, \n[_nghost-%COMP%]     nb-tag-list input {\n  background-color: unset !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n}\n\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-header[_ngcontent-%COMP%]   nb-icon.close[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\nnb-card[_ngcontent-%COMP%] {\n  width: 645px;\n  background-color: var(--gauzy-card-1);\n}"]
      });
    }
  };
  InviteMutationComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_15__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__/* .UntilDestroy */ .d)({
    checkProperties: true
  }), (0,tslib__WEBPACK_IMPORTED_MODULE_15__/* .__metadata */ .Sn)("design:paramtypes", [_nebular_theme__WEBPACK_IMPORTED_MODULE_6__/* .NbDialogRef */ .ybQ, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_7__/* .OrganizationProjectsService */ .d, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_8__/* .OrganizationContactService */ .$, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_9__/* .OrganizationDepartmentsService */ .I, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_10__/* .OrganizationTeamsService */ .F, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__/* .TranslateService */ .c$, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_12__/* .ToastrService */ .t, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_13__/* .Store */ .il])], InviteMutationComponent);
  return InviteMutationComponent;
})();


/***/ }),

/***/ 13920:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   j: () => (/* binding */ WINDOW)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);

const WINDOW = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .InjectionToken */ .nKC('WindowToken', typeof window !== 'undefined' && window.document ? {
  providedIn: 'root',
  factory: () => window
} : {
  providedIn: 'root',
  factory: () => undefined
});

/*
 * Public API Surface of ngx-window-token
 */

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=ngx-window-token.mjs.map

/***/ }),

/***/ 19274:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FQ: () => (/* binding */ ClipboardModule),
/* harmony export */   Uo: () => (/* binding */ ClipboardDirective),
/* harmony export */   WW: () => (/* binding */ ClipboardService)
/* harmony export */ });
/* unused harmony export ClipboardIfSupportedDirective */
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52122);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14572);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26860);
/* harmony import */ var ngx_window_token__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13920);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4644);






/**
 * The following code is heavily copied from https://github.com/zenorocha/clipboard.js
 */
let ClipboardService = /*#__PURE__*/(() => {
  class ClipboardService {
    constructor(ngZone, document, window) {
      this.ngZone = ngZone;
      this.document = document;
      this.window = window;
      this.copySubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__/* .Subject */ .B();
      this.copyResponse$ = this.copySubject.asObservable();
      this.config = {};
    }
    configure(config) {
      this.config = config;
    }
    copy(content) {
      if (!this.isSupported || !content) {
        return this.pushCopyResponse({
          isSuccess: false,
          content
        });
      }
      const copyResult = this.copyFromContent(content);
      if (copyResult) {
        return this.pushCopyResponse({
          content,
          isSuccess: copyResult
        });
      }
      return this.pushCopyResponse({
        isSuccess: false,
        content
      });
    }
    get isSupported() {
      return !!this.document.queryCommandSupported && !!this.document.queryCommandSupported('copy') && !!this.window;
    }
    isTargetValid(element) {
      if (element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement) {
        if (element.hasAttribute('disabled')) {
          throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
        }
        return true;
      }
      throw new Error('Target should be input or textarea');
    }
    /**
     * Attempts to copy from an input `targetElm`
     */
    copyFromInputElement(targetElm, isFocus = true) {
      try {
        this.selectTarget(targetElm);
        const re = this.copyText();
        this.clearSelection(isFocus ? targetElm : undefined, this.window);
        return re && this.isCopySuccessInIE11();
      } catch (error) {
        return false;
      }
    }
    /**
     * This is a hack for IE11 to return `true` even if copy fails.
     */
    isCopySuccessInIE11() {
      const clipboardData = this.window['clipboardData'];
      if (clipboardData && clipboardData.getData) {
        if (!clipboardData.getData('Text')) {
          return false;
        }
      }
      return true;
    }
    /**
     * Creates a fake textarea element, sets its value from `text` property,
     * and makes a selection on it.
     */
    copyFromContent(content, container = this.document.body) {
      // check if the temp textarea still belongs to the current container.
      // In case we have multiple places using ngx-clipboard, one is in a modal using container but the other one is not.
      if (this.tempTextArea && !container.contains(this.tempTextArea)) {
        this.destroy(this.tempTextArea.parentElement || undefined);
      }
      if (!this.tempTextArea) {
        this.tempTextArea = this.createTempTextArea(this.document, this.window);
        try {
          container.appendChild(this.tempTextArea);
        } catch (error) {
          throw new Error('Container should be a Dom element');
        }
      }
      this.tempTextArea.value = content;
      const toReturn = this.copyFromInputElement(this.tempTextArea, false);
      if (this.config.cleanUpAfterCopy) {
        this.destroy(this.tempTextArea.parentElement || undefined);
      }
      return toReturn;
    }
    /**
     * Remove temporary textarea if any exists.
     */
    destroy(container = this.document.body) {
      if (this.tempTextArea) {
        container.removeChild(this.tempTextArea);
        // removeChild doesn't remove the reference from memory
        this.tempTextArea = undefined;
      }
    }
    /**
     * Select the target html input element.
     */
    selectTarget(inputElement) {
      inputElement.select();
      inputElement.setSelectionRange(0, inputElement.value.length);
      return inputElement.value.length;
    }
    copyText() {
      return this.document.execCommand('copy');
    }
    /**
     * Moves focus away from `target` and back to the trigger, removes current selection.
     */
    clearSelection(inputElement, window) {
      inputElement && inputElement.focus();
      window.getSelection()?.removeAllRanges();
    }
    /**
     * Creates a fake textarea for copy command.
     */
    createTempTextArea(doc, window) {
      const isRTL = doc.documentElement.getAttribute('dir') === 'rtl';
      let ta;
      ta = doc.createElement('textarea');
      // Prevent zooming on iOS
      ta.style.fontSize = '12pt';
      // Reset box model
      ta.style.border = '0';
      ta.style.padding = '0';
      ta.style.margin = '0';
      // Move element out of screen horizontally
      ta.style.position = 'absolute';
      ta.style[isRTL ? 'right' : 'left'] = '-9999px';
      // Move element to the same position vertically
      const yPosition = window.pageYOffset || doc.documentElement.scrollTop;
      ta.style.top = yPosition + 'px';
      ta.setAttribute('readonly', '');
      return ta;
    }
    /**
     * Pushes copy operation response to copySubject, to provide global access
     * to the response.
     */
    pushCopyResponse(response) {
      if (this.copySubject.observers.length > 0) {
        this.ngZone.run(() => {
          this.copySubject.next(response);
        });
      }
    }
    /**
     * @deprecated use pushCopyResponse instead.
     */
    pushCopyReponse(response) {
      this.pushCopyResponse(response);
    }
  }
  ClipboardService.ɵfac = function ClipboardService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ClipboardService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵinject"] */ .KVO(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* .NgZone */ .SKi), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵinject"] */ .KVO(_angular_common__WEBPACK_IMPORTED_MODULE_2__/* .DOCUMENT */ .q), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵinject"] */ .KVO(ngx_window_token__WEBPACK_IMPORTED_MODULE_3__/* .WINDOW */ .j, 8));
  };
  ClipboardService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineInjectable"] */ .jDH({
    token: ClipboardService,
    factory: ClipboardService.ɵfac,
    providedIn: 'root'
  });
  return ClipboardService;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let ClipboardDirective = /*#__PURE__*/(() => {
  class ClipboardDirective {
    constructor(ngZone, host, renderer, clipboardSrv) {
      this.ngZone = ngZone;
      this.host = host;
      this.renderer = renderer;
      this.clipboardSrv = clipboardSrv;
      this.cbOnSuccess = new _angular_core__WEBPACK_IMPORTED_MODULE_1__/* .EventEmitter */ .bkB();
      this.cbOnError = new _angular_core__WEBPACK_IMPORTED_MODULE_1__/* .EventEmitter */ .bkB();
      this.onClick = event => {
        if (!this.clipboardSrv.isSupported) {
          this.handleResult(false, undefined, event);
        } else if (this.targetElm && this.clipboardSrv.isTargetValid(this.targetElm)) {
          this.handleResult(this.clipboardSrv.copyFromInputElement(this.targetElm), this.targetElm.value, event);
        } else if (this.cbContent) {
          this.handleResult(this.clipboardSrv.copyFromContent(this.cbContent, this.container), this.cbContent, event);
        }
      };
    }
    // eslint-disable-next-line no-empty, @typescript-eslint/no-empty-function
    ngOnInit() {
      this.ngZone.runOutsideAngular(() => {
        // By default each host listener schedules change detection and also wrapped
        // into additional function that calls `markForCheck()`. We're listening the `click`
        // event in the context of the root zone to avoid running unnecessary change detections,
        // since this directive doesn't do anything template-related (e.g. updates template variables).
        this.clickListener = this.renderer.listen(this.host.nativeElement, 'click', this.onClick);
      });
    }
    ngOnDestroy() {
      if (this.clickListener) {
        this.clickListener();
      }
      this.clipboardSrv.destroy(this.container);
    }
    /**
     * Fires an event based on the copy operation result.
     * @param succeeded
     */
    handleResult(succeeded, copiedContent, event) {
      let response = {
        isSuccess: succeeded,
        content: copiedContent,
        successMessage: this.cbSuccessMsg,
        event
      };
      if (succeeded) {
        if (this.cbOnSuccess.observed) {
          this.ngZone.run(() => {
            this.cbOnSuccess.emit(response);
          });
        }
      } else {
        if (this.cbOnError.observed) {
          this.ngZone.run(() => {
            this.cbOnError.emit(response);
          });
        }
      }
      this.clipboardSrv.pushCopyResponse(response);
    }
  }
  ClipboardDirective.ɵfac = function ClipboardDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ClipboardDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* .NgZone */ .SKi), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* .ElementRef */ .aKT), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* .Renderer2 */ .sFG), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(ClipboardService));
  };
  ClipboardDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineDirective"] */ .FsC({
    type: ClipboardDirective,
    selectors: [["", "ngxClipboard", ""]],
    inputs: {
      targetElm: [0, "ngxClipboard", "targetElm"],
      container: "container",
      cbContent: "cbContent",
      cbSuccessMsg: "cbSuccessMsg"
    },
    outputs: {
      cbOnSuccess: "cbOnSuccess",
      cbOnError: "cbOnError"
    },
    standalone: false
  });
  return ClipboardDirective;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let ClipboardIfSupportedDirective = /*#__PURE__*/(/* unused pure expression or super */ null && ((() => {
  class ClipboardIfSupportedDirective {
    constructor(_clipboardService, _viewContainerRef, _templateRef) {
      this._clipboardService = _clipboardService;
      this._viewContainerRef = _viewContainerRef;
      this._templateRef = _templateRef;
    }
    ngOnInit() {
      if (this._clipboardService.isSupported) {
        this._viewContainerRef.createEmbeddedView(this._templateRef);
      }
    }
  }
  ClipboardIfSupportedDirective.ɵfac = function ClipboardIfSupportedDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ClipboardIfSupportedDirective)(i0.ɵɵdirectiveInject(ClipboardService), i0.ɵɵdirectiveInject(i0.ViewContainerRef), i0.ɵɵdirectiveInject(i0.TemplateRef));
  };
  ClipboardIfSupportedDirective.ɵdir = /* @__PURE__ */i0.ɵɵdefineDirective({
    type: ClipboardIfSupportedDirective,
    selectors: [["", "ngxClipboardIfSupported", ""]],
    standalone: false
  });
  return ClipboardIfSupportedDirective;
})()));
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let ClipboardModule = /*#__PURE__*/(() => {
  class ClipboardModule {}
  ClipboardModule.ɵfac = function ClipboardModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ClipboardModule)();
  };
  ClipboardModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineNgModule"] */ .$C({
    type: ClipboardModule
  });
  ClipboardModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineInjector"] */ .G2t({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__/* .CommonModule */ .MD]
  });
  return ClipboardModule;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/*
 * Public API Surface of ngx-clipboard
 */

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=ngx-clipboard.mjs.map

/***/ }),

/***/ 19916:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   b: () => (/* binding */ ClientNamesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14572);


function ClientNamesComponent_a_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "a", 1)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const client_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(client_r1.substr(0, 2).toUpperCase());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", client_r1, " ");
  }
}
let ClientNamesComponent = /*#__PURE__*/(() => {
  class ClientNamesComponent {
    static {
      this.ɵfac = function ClientNamesComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || ClientNamesComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: ClientNamesComponent,
        selectors: [["ng-component"]],
        inputs: {
          rowData: "rowData"
        },
        standalone: false,
        decls: 2,
        vars: 1,
        consts: [["class", "link-text mr-2 mb-2", 4, "ngFor", "ngForOf"], [1, "link-text", "mr-2", "mb-2"]],
        template: function ClientNamesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, ClientNamesComponent_a_1_Template, 4, 2, "a", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx.rowData.clientNames);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .NgForOf */ .Sq],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   .contact-links-container[_ngcontent-%COMP%] {\n  width: 100%;\n}\n[_nghost-%COMP%]   .contact-links-container[_ngcontent-%COMP%]   .inner-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: rgba(36, 189, 255, 0.1);\n  border-radius: var(--button-rectangle-border-radius);\n  overflow: hidden;\n  width: fit-content;\n}\n[dir=ltr]   [_nghost-%COMP%]   .contact-links-container[_ngcontent-%COMP%]   .inner-wrapper[_ngcontent-%COMP%] {\n  padding: 5px 14px 5px 7px;\n}\n[dir=rtl]   [_nghost-%COMP%]   .contact-links-container[_ngcontent-%COMP%]   .inner-wrapper[_ngcontent-%COMP%] {\n  padding: 5px 7px 5px 14px;\n}\n[_nghost-%COMP%]   .contact-links-container[_ngcontent-%COMP%]   .inner-wrapper[_ngcontent-%COMP%]   .names-wrapper[_ngcontent-%COMP%] {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  max-width: 110px;\n}\n[_nghost-%COMP%]   .contact-links-container[_ngcontent-%COMP%]   .inner-wrapper[_ngcontent-%COMP%]   .link-text[_ngcontent-%COMP%] {\n  cursor: pointer;\n  text-decoration: none;\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 15px;\n  letter-spacing: 0em;\n  white-space: nowrap;\n  width: 100%;\n  text-overflow: ellipsis;\n  color: var(--text-primary-color);\n}\n[_nghost-%COMP%]   .contact-links-container[_ngcontent-%COMP%]   .inner-wrapper[_ngcontent-%COMP%]   .link-text[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n[_nghost-%COMP%]   .contact-links-container[_ngcontent-%COMP%]   .inner-wrapper[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  display: flex;\n}\n[_nghost-%COMP%]   .contact-links-container[_ngcontent-%COMP%]   .inner-wrapper[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  object-fit: cover;\n  border-radius: var(--button-rectangle-border-radius);\n}\n[_nghost-%COMP%]   .contact-links-container[_ngcontent-%COMP%]   .inner-wrapper[_ngcontent-%COMP%]   .prefix[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 4px 5px;\n  gap: 10px;\n  width: 18px;\n  height: 18px;\n  background: #7e7e8f;\n  border-radius: var(--button-rectangle-border-radius);\n  \n\n  flex: none;\n  order: 0;\n  flex-grow: 0;\n  \n\n  font-size: 8px;\n  font-weight: 600;\n  line-height: 10px;\n  letter-spacing: 0em;\n  text-align: center;\n  color: white;\n}\n\n[_nghost-%COMP%]   .client-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  border-radius: 0.25rem;\n  padding: 0.25rem 0.4rem;\n  background-color: var(--color-success-default);\n}"]
      });
    }
  }
  return ClientNamesComponent;
})();

/***/ }),

/***/ 26298:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   x: () => (/* binding */ InviteFormsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14572);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10936);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(56383);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(55567);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(19223);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27038);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57952);
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(38834);
/* harmony import */ var _contact_select_contact_select_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(11336);
/* harmony import */ var _user_forms_fields_role_role_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(33288);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);











let InviteFormsModule = /*#__PURE__*/(() => {
  class InviteFormsModule {
    static {
      this.ɵfac = function InviteFormsModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || InviteFormsModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .$C({
        type: InviteFormsModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .G2t({
        providers: [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_1__/* .RoleService */ .W, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_2__/* .InviteService */ .p],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__/* .CommonModule */ .MD, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .FormsModule */ .YN, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .ReactiveFormsModule */ .X1, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbAlertModule */ .dQU, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbButtonModule */ .P5N, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbCardModule */ .lVF, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbDatepickerModule */ .TgK, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbFormFieldModule */ .NeG, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbIconModule */ .clu, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbInputModule */ .pty, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbSelectModule */ .VcP, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbTagModule */ .ZTu, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbTooltipModule */ .IB0, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__/* .NgSelectModule */ .MQ, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__/* .TranslateModule */ .h.forChild(), _shared_module__WEBPACK_IMPORTED_MODULE_8__/* .SharedModule */ .G, _contact_select_contact_select_module__WEBPACK_IMPORTED_MODULE_9__/* .ContactSelectModule */ .T, _user_forms_fields_role_role_module__WEBPACK_IMPORTED_MODULE_10__/* .RoleFormFieldModule */ .N]
      });
    }
  }
  return InviteFormsModule;
})();

/***/ }),

/***/ 27478:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   s: () => (/* binding */ InviteTableModule)
/* harmony export */ });
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56383);
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(79475);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(55567);
/* harmony import */ var ngx_clipboard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(19274);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(19223);
/* harmony import */ var _card_grid_card_grid_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(80784);
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(38834);
/* harmony import */ var _smart_data_layout_smart_data_view_layout_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(98722);
/* harmony import */ var _user_forms_user_forms_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(82202);
/* harmony import */ var _invite_mutation_invite_mutation_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(41030);
/* harmony import */ var _invites_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37095);
/* harmony import */ var _project_names_project_names_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57394);
/* harmony import */ var _resend_confirmation_resend_confirmation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(34190);
/* harmony import */ var _client_names_client_names_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19916);
/* harmony import */ var _department_names_department_names_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(82546);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(26860);



















// Nebular Modules
const NB_MODULES = [_nebular_theme__WEBPACK_IMPORTED_MODULE_0__/* .NbBadgeModule */ .iEK, _nebular_theme__WEBPACK_IMPORTED_MODULE_0__/* .NbButtonModule */ .P5N, _nebular_theme__WEBPACK_IMPORTED_MODULE_0__/* .NbCardModule */ .lVF, _nebular_theme__WEBPACK_IMPORTED_MODULE_0__/* .NbCheckboxModule */ .Ad8, _nebular_theme__WEBPACK_IMPORTED_MODULE_0__/* .NbDialogModule */ .nZv.forChild(), _nebular_theme__WEBPACK_IMPORTED_MODULE_0__/* .NbIconModule */ .clu, _nebular_theme__WEBPACK_IMPORTED_MODULE_0__/* .NbInputModule */ .pty, _nebular_theme__WEBPACK_IMPORTED_MODULE_0__/* .NbRouteTabsetModule */ .x$5, _nebular_theme__WEBPACK_IMPORTED_MODULE_0__/* .NbSelectModule */ .VcP, _nebular_theme__WEBPACK_IMPORTED_MODULE_0__/* .NbSpinnerModule */ .gYs, _nebular_theme__WEBPACK_IMPORTED_MODULE_0__/* .NbTooltipModule */ .IB0];
// Components
const COMPONENTS = [_invites_component__WEBPACK_IMPORTED_MODULE_1__/* .InvitesComponent */ .M, _project_names_project_names_component__WEBPACK_IMPORTED_MODULE_2__/* .ProjectNamesComponent */ .H, _client_names_client_names_component__WEBPACK_IMPORTED_MODULE_3__/* .ClientNamesComponent */ .b, _department_names_department_names_component__WEBPACK_IMPORTED_MODULE_4__/* .DepartmentNamesComponent */ .w, _resend_confirmation_resend_confirmation_component__WEBPACK_IMPORTED_MODULE_5__/* .ResendConfirmationComponent */ .c];
let InviteTableModule = /*#__PURE__*/(() => {
  class InviteTableModule {
    static {
      this.ɵfac = function InviteTableModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || InviteTableModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵdefineNgModule"] */ .$C({
        type: InviteTableModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [NB_MODULES, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__/* .NgSelectModule */ .MQ, ngx_clipboard__WEBPACK_IMPORTED_MODULE_8__/* .ClipboardModule */ .FQ, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__/* .TranslateModule */ .h.forChild(), ngx_permissions__WEBPACK_IMPORTED_MODULE_10__/* .NgxPermissionsModule */ .Ov.forChild(), _shared_module__WEBPACK_IMPORTED_MODULE_11__/* .SharedModule */ .G, _smart_data_layout_smart_data_view_layout_module__WEBPACK_IMPORTED_MODULE_12__/* .SmartDataViewLayoutModule */ .H, _invite_mutation_invite_mutation_module__WEBPACK_IMPORTED_MODULE_13__/* .InviteMutationModule */ .h, _user_forms_user_forms_module__WEBPACK_IMPORTED_MODULE_14__/* .UserFormsModule */ .D, _card_grid_card_grid_module__WEBPACK_IMPORTED_MODULE_15__/* .CardGridModule */ .n]
      });
    }
  }
  return InviteTableModule;
})();

/***/ }),

/***/ 34190:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ ResendConfirmationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56383);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19223);




let ResendConfirmationComponent = /*#__PURE__*/(() => {
  class ResendConfirmationComponent {
    constructor(dialogRef) {
      this.dialogRef = dialogRef;
    }
    close() {
      this.dialogRef.close();
    }
    confirm() {
      this.dialogRef.close('ok');
    }
    static {
      this.ɵfac = function ResendConfirmationComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || ResendConfirmationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbDialogRef */ .ybQ));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: ResendConfirmationComponent,
        selectors: [["ga-resend-confirmation"]],
        standalone: false,
        decls: 18,
        vars: 13,
        consts: [[1, "center"], [1, "d-flex", "flex-column"], [1, "cancel"], [1, "fas", "fa-times", 3, "click"], [1, "title"], [1, "text-align-left"], ["status", "basic", "outline", "", "nbButton", "", 3, "click"], ["status", "success", "nbButton", "", 1, "mr-3", "ml-3", 3, "click"]],
        template: function ResendConfirmationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-card", 0)(1, "nb-card-header", 1)(2, "span", 2)(3, "i", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function ResendConfirmationComponent_Template_i_click_3_listener() {
              return ctx.close();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(4, "h6", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(6, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(7, "nb-card-body")(8, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(10, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(11, "nb-card-footer", 5)(12, "button", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function ResendConfirmationComponent_Template_button_click_12_listener() {
              return ctx.close();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(14, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(15, "button", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function ResendConfirmationComponent_Template_button_click_15_listener() {
              return ctx.confirm();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(17, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(6, 5, "POP_UPS.CONFIRM"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate2"] */ .Lme(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(10, 7, "POP_UPS.ARE_YOU_SURE_YOU_WANT_TO_RESEND_THE_INVITE_TO"), " ", ctx.email, " ? ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(14, 9, "POP_UPS.CANCEL"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(17, 11, "POP_UPS.OK"), " ");
          }
        },
        dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbButtonComponent */ .YP2, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbCardComponent */ .SrT, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbCardBodyComponent */ .KH5, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbCardFooterComponent */ .VDm, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbCardHeaderComponent */ .zJv, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__/* .TranslatePipe */ .D9],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   i[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n}\n[dir=ltr]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n[dir=rtl]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--gauzy-text-color-1);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(245, 109, 88, 0.3);\n  border-width: 2px;\n  color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(245, 109, 88, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 16px;\n  letter-spacing: 0em;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(126, 126, 143, 0.3);\n  border-width: 2px;\n  color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(126, 126, 143, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(37, 184, 105, 0.3);\n  border-width: 2px;\n  color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(37, 184, 105, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[disabled][_ngcontent-%COMP%], \n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic.btn-disabled[_ngcontent-%COMP%] {\n  background-color: var(--button-outline-basic-disabled-background-color);\n  border-color: var(--button-outline-basic-disabled-border-color);\n  color: var(--button-outline-basic-disabled-text-color);\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].primary.appearance-filled.status-primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  border: unset;\n  background-color: var(--color-primary-transparent-default);\n  box-shadow: var(--gauzy-shadow) 0, 0, 0, 0.15;\n}\n[dir=ltr]   [_nghost-%COMP%]     input, \n[dir=ltr]   [_nghost-%COMP%]     textarea {\n  text-align: start;\n}\n[dir=rtl]   [_nghost-%COMP%]     input, \n[dir=rtl]   [_nghost-%COMP%]     textarea {\n  text-align: end;\n}\n[_nghost-%COMP%]     input, \n[_nghost-%COMP%]     nb-select.appearance-outline.status-basic .select-button, \n[_nghost-%COMP%]     .ng-select .ng-select-container {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n  height: 42px !important;\n}\n[_nghost-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder, \n[_nghost-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {\n  top: unset !important;\n}\n[_nghost-%COMP%]     label, \n[_nghost-%COMP%]     .label {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  color: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]     textarea {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n}\n[_nghost-%COMP%]     .ng-select .ng-select-container input, \n[_nghost-%COMP%]     nb-tag-list input {\n  background-color: unset !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n}\n\n[_nghost-%COMP%]   .center[_ngcontent-%COMP%] {\n  width: 300px;\n}"]
      });
    }
  }
  return ResendConfirmationComponent;
})();

/***/ }),

/***/ 37095:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ InvitesComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(73014);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(55598);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(9620);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(19159);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(45715);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(56383);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(41598);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(19223);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4644);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(52738);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(39855);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4478);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20381);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ngx_clipboard__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(19274);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(35665);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(71924);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(15480);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(57952);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(99418);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(17785);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(81236);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(13271);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(26024);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(46076);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(64913);
/* harmony import */ var _smart_data_layout_pagination_pagination_filter_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47108);
/* harmony import */ var _table_components__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(47825);
/* harmony import */ var _user_forms_delete_confirmation_delete_confirmation_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(55101);
/* harmony import */ var _invite_mutation_invite_mutation_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(6231);
/* harmony import */ var _project_names_project_names_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(57394);
/* harmony import */ var _resend_confirmation_resend_confirmation_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(34190);
/* harmony import */ var _client_names_client_names_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(19916);
/* harmony import */ var _department_names_department_names_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(82546);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26860);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(14572);
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(79475);
/* harmony import */ var _components_back_navigation_back_navigation_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(90910);
/* harmony import */ var _components_header_title_header_title_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(49072);
/* harmony import */ var angular2_smart_table__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(52345);
/* harmony import */ var _gauzy_button_action_gauzy_button_action_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(45293);
/* harmony import */ var _smart_data_layout_pagination_pagination_v2_pagination_v2_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(3456);
/* harmony import */ var _card_grid_card_grid_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(49517);






































const _c0 = (a0, a1) => [a0, a1];
function InvitesComponent_ng_template_11_ng_template_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(1, "ngx-pagination", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("source", ctx_r1.smartTableSource);
  }
}
function InvitesComponent_ng_template_11_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "div", 12)(1, "angular2-smart-table", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("userRowSelect", function InvitesComponent_ng_template_11_ng_template_1_Template_angular2_smart_table_userRowSelect_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx_r1.selectInvite($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(3, InvitesComponent_ng_template_11_ng_template_1_ng_container_3_Template, 2, 1, "ng-container", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("settings", ctx_r1.settingsSmartTable)("source", ctx_r1.smartTableSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r1.smartTableSource);
  }
}
function InvitesComponent_ng_template_11_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "ga-card-grid", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("onSelectedItem", function InvitesComponent_ng_template_11_ng_template_2_Template_ga_card_grid_onSelectedItem_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx_r1.selectInvite($event));
    })("scroll", function InvitesComponent_ng_template_11_ng_template_2_Template_ga_card_grid_scroll_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx_r1.onScroll());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("totalItems", ctx_r1.pagination == null ? null : ctx_r1.pagination.totalItems)("settings", ctx_r1.settingsSmartTable)("source", ctx_r1.invites);
  }
}
function InvitesComponent_ng_template_11_3_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(2, 1, "SETTINGS_MENU.NO_LAYOUT"));
  }
}
function InvitesComponent_ng_template_11_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(0, InvitesComponent_ng_template_11_3_ng_template_0_Template, 3, 3, "ng-template");
  }
}
function InvitesComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerStart"] */ .qex(0, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(1, InvitesComponent_ng_template_11_ng_template_1_Template, 4, 3, "ng-template", 10)(2, InvitesComponent_ng_template_11_ng_template_2_Template, 1, 3, "ng-template", 10)(3, InvitesComponent_ng_template_11_3_Template, 1, 0, null, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngSwitch", ctx_r1.dataLayoutStyle);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngSwitchCase", ctx_r1.componentLayoutStyleEnum.TABLE);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngSwitchCase", ctx_r1.componentLayoutStyleEnum.CARDS_GRID);
  }
}
function InvitesComponent_ng_template_12_ng_template_1_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("click", function InvitesComponent_ng_template_12_ng_template_1_ng_template_0_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r5);
      const selectedItem_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG(2).selectedItem;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx_r1.copyToClipboard(selectedItem_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(1, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(4, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("click", function InvitesComponent_ng_template_12_ng_template_1_ng_template_0_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r5);
      const selectedItem_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG(2).selectedItem;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx_r1.resendInvite(selectedItem_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(5, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("disabled", ctx_r1.disableButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(3, 4, "BUTTONS.COPY_LINK"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("disabled", ctx_r1.disableButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(7, 6, "BUTTONS.RESEND"), " ");
  }
}
function InvitesComponent_ng_template_12_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(0, InvitesComponent_ng_template_12_ng_template_1_ng_template_0_Template, 8, 8, "ng-template", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(1, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("click", function InvitesComponent_ng_template_12_ng_template_1_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r4);
      const selectedItem_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG().selectedItem;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx_r1.deleteInvite(selectedItem_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(3, "nb-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngIf", (ctx_r1.selectedInvite == null ? null : ctx_r1.selectedInvite.status) === ctx_r1.InviteStatusEnum.INVITED);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("disabled", ctx_r1.disableButton)("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(2, 3, "BUTTONS.DELETE"));
  }
}
function InvitesComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(1, InvitesComponent_ng_template_12_ng_template_1_Template, 4, 5, "ng-template", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngxPermissionsOnly", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpureFunction2"] */ .l_i(1, _c0, ctx_r1.PermissionsEnum.ALL_ORG_EDIT, ctx_r1.PermissionsEnum.ORG_INVITE_EDIT));
  }
}
function InvitesComponent_ng_template_14_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("click", function InvitesComponent_ng_template_14_ng_template_0_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx_r1.invite());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(1, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(3, 1, "BUTTONS.INVITE"), " ");
  }
}
function InvitesComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(0, InvitesComponent_ng_template_14_ng_template_0_Template, 4, 3, "ng-template", 8);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngxPermissionsOnly", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpureFunction2"] */ .l_i(1, _c0, ctx_r1.PermissionsEnum.ALL_ORG_EDIT, ctx_r1.PermissionsEnum.ORG_INVITE_EDIT));
  }
}
let InvitesComponent = /*#__PURE__*/(() => {
  let InvitesComponent = class InvitesComponent extends _smart_data_layout_pagination_pagination_filter_base_component__WEBPACK_IMPORTED_MODULE_2__/* .PaginationFilterBaseComponent */ .t {
    get invitationType() {
      return this._invitationType;
    }
    set invitationType(value) {
      this._invitationType = value;
    }
    constructor(dialogService, clipboardService, router, _location, _urlSerializer, store, toastrService, translate, inviteService, httpClient) {
      super(translate);
      this.dialogService = dialogService;
      this.clipboardService = clipboardService;
      this.router = router;
      this._location = _location;
      this._urlSerializer = _urlSerializer;
      this.store = store;
      this.toastrService = toastrService;
      this.translate = translate;
      this.inviteService = inviteService;
      this.httpClient = httpClient;
      this.InviteStatusEnum = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__/* .InviteStatusEnum */ .Vh;
      this.loading = false;
      this.disableButton = true;
      this.PermissionsEnum = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_4__/* .PermissionsEnum */ .U;
      this.dataLayoutStyle = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_5__/* .ComponentLayoutStyleEnum */ .IE.TABLE;
      this.componentLayoutStyleEnum = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_5__/* .ComponentLayoutStyleEnum */ .IE;
      this.invites = [];
      this.invites$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__/* .Subject */ .B();
      this._refresh$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__/* .Subject */ .B();
      this.getSelectedPersonRole = () => {
        if (this.isEmployeeInvitation()) {
          return _gauzy_contracts__WEBPACK_IMPORTED_MODULE_7__/* .RolesEnum */ .$.EMPLOYEE;
        }
        if (this.isCandidateInvitation()) {
          return _gauzy_contracts__WEBPACK_IMPORTED_MODULE_7__/* .RolesEnum */ .$.CANDIDATE;
        }
      };
      this.setView();
      /**
       * Destroyed textarea element after each copy to clipboard
       */
      clipboardService.configure({
        cleanUpAfterCopy: true
      });
    }
    ngOnInit() {
      this._loadSmartTableSettings();
      this._applyTranslationOnSmartTable();
    }
    ngAfterViewInit() {
      this.clipboardService.copyResponse$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .filter */ .p)(clipboard => !!clipboard.isSuccess), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .tap */ .M)(clipboard => this.onCopySuccess(clipboard))).subscribe();
      this.invites$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .debounceTime */ .B)(200), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .tap */ .M)(() => this.clearItem()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .tap */ .M)(() => this.getInvites()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__/* .untilDestroyed */ .s)(this)).subscribe();
      this.pagination$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .debounceTime */ .B)(100), (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_12__/* .distinctUntilChange */ .nI)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .tap */ .M)(() => this.invites$.next(true)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__/* .untilDestroyed */ .s)(this)).subscribe();
      this.store.selectedOrganization$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .debounceTime */ .B)(100), (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_12__/* .distinctUntilChange */ .nI)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .filter */ .p)(organization => !!organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .tap */ .M)(organization => this.organization = organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .tap */ .M)(() => this._refresh$.next(true)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .tap */ .M)(() => this.invites$.next(true)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__/* .untilDestroyed */ .s)(this)).subscribe();
      this._refresh$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .filter */ .p)(() => this.dataLayoutStyle === this.componentLayoutStyleEnum.CARDS_GRID), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .tap */ .M)(() => this.refreshPagination()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .tap */ .M)(() => this.invites = []), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__/* .untilDestroyed */ .s)(this)).subscribe();
    }
    ngOnDestroy() {}
    setView() {
      this.viewComponentName = _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_13__/* .ComponentEnum */ .L.MANAGE_INVITES;
      this.store.componentLayout$(this.viewComponentName).pipe((0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_12__/* .distinctUntilChange */ .nI)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .tap */ .M)(() => this.refreshPagination()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .tap */ .M)(componentLayout => this.dataLayoutStyle = componentLayout), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .tap */ .M)(() => this.invites = []), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .tap */ .M)(() => this.invites$.next(true)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__/* .untilDestroyed */ .s)(this)).subscribe();
    }
    selectInvite({
      isSelected,
      data
    }) {
      this.disableButton = !isSelected;
      this.selectedInvite = isSelected ? data : null;
    }
    invite() {
      this.dialogService.open(_invite_mutation_invite_mutation_component__WEBPACK_IMPORTED_MODULE_14__/* .InviteMutationComponent */ .w, {
        context: {
          invitationType: this.invitationType
        }
      }).onClose.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .filter */ .p)(invite => !!invite), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .tap */ .M)(() => this._refresh$.next(true)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .tap */ .M)(() => this.invites$.next(true)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__/* .untilDestroyed */ .s)(this)).subscribe();
    }
    /**
     * Copies the invite URL to the clipboard.
     * If a specific invite item is provided, it sets it as the selected invite
     * before generating the URL.
     *
     * @param selectedItem - An optional invite item to select before copying the URL.
     */
    copyToClipboard(selectedItem) {
      var _this = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A)(function* () {
        // If a selected item is passed, set it as the current invite
        if (selectedItem) {
          _this.selectInvite({
            isSelected: true,
            data: selectedItem
          });
        }
        if (!_this.selectedInvite) {
          return;
        }
        const {
          email,
          token
        } = _this.selectedInvite;
        // Create a URL tree with the invite route and query parameters
        const tree = _this.router.createUrlTree(['auth/accept-invite'], {
          queryParams: {
            email,
            token
          }
        });
        // Prepare the external URL
        const externalUrl = _this._location.prepareExternalUrl(_this._urlSerializer.serialize(tree));
        // Prepare the full URL and copy it to the clipboard
        const inviteUrl = [location.origin, externalUrl].join('/');
        // Copy the URL to the clipboard
        _this.clipboardService.copy(inviteUrl);
      })();
    }
    /**
     * Handles the success event after copying text to the clipboard.
     * Displays a success toast message and clears the selected item.
     *
     * @param clipboard - The clipboard response object containing details of the copy action.
     */
    onCopySuccess(clipboard) {
      try {
        this.toastrService.success('TOASTR.MESSAGE.COPIED');
      } finally {
        this.clearItem();
      }
    }
    /**
     * Handles the failure event when copying text to the clipboard.
     * Displays an error toast message and clears the selected item.
     *
     * @param clipboard - The clipboard response object containing details of the failed copy action.
     */
    onCopyFailure(clipboard) {}
    /*
     * Register Smart Table Source Config
     */
    setSmartTableSource() {
      if (!this.organization) {
        return;
      }
      // this.loading = true;
      const {
        id: organizationId,
        tenantId
      } = this.organization;
      // Create a new server data source with the specified endpoint and relations
      this.smartTableSource = new _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_16__/* .ServerDataSource */ .N(this.httpClient, {
        endPoint: `${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_17__/* .API_PREFIX */ .m4}/invite`,
        relations: ['projects', 'invitedByUser', 'role', 'organizationContacts', 'departments'],
        where: {
          organizationId,
          tenantId,
          ...(this.invitationType === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__/* .InvitationTypeEnum */ .Tq.EMPLOYEE ? {
            role: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_7__/* .RolesEnum */ .$.EMPLOYEE]
          } : {}),
          ...(this.invitationType === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__/* .InvitationTypeEnum */ .Tq.CANDIDATE ? {
            role: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_7__/* .RolesEnum */ .$.CANDIDATE]
          } : {})
        },
        resultMap: invite => this.transformInvite(invite),
        finalize: () => {
          this.setPagination({
            ...this.getPagination(),
            totalItems: this.smartTableSource.count()
          });
          this.loading = false;
        }
      });
    }
    /**
     * Transforms an Invite entity into an object with computed properties.
     *
     * @param invite - The Invite entity to transform.
     * @returns A transformed invite object with additional computed properties.
     */
    transformInvite(invite) {
      return {
        ...invite,
        email: invite.email,
        expireDate: invite.expireDate ? moment__WEBPACK_IMPORTED_MODULE_0__(invite.expireDate).fromNow() : _gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__/* .InvitationExpirationEnum */ .i3.NEVER,
        createdDate: invite.createdAt,
        imageUrl: invite.invitedByUser?.imageUrl ?? '',
        fullName: invite.invitedByUser?.name ?? '',
        roleName: invite.role?.name ?? '',
        projectNames: invite.projects?.map(project => project.name) ?? [],
        clientNames: invite.organizationContacts?.map(contact => contact.name) ?? [],
        departmentNames: invite.departments?.map(department => department.name) ?? [],
        id: invite.id,
        token: invite.token
      };
    }
    /***
     * GET invites
     *
     */
    getInvites() {
      var _this2 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A)(function* () {
        if (!_this2.organization) {
          return;
        }
        try {
          _this2.setSmartTableSource();
          const {
            activePage,
            itemsPerPage
          } = _this2.getPagination();
          _this2.smartTableSource.setPaging(activePage, itemsPerPage, false);
          if (_this2.dataLayoutStyle === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_5__/* .ComponentLayoutStyleEnum */ .IE.CARDS_GRID) {
            yield _this2.smartTableSource.getElements();
            yield _this2._loadGridLayoutData();
          }
        } catch (error) {
          _this2.toastrService.danger(error);
        }
      })();
    }
    /***
     * GET invites for GRID layout
     *
     */
    _loadGridLayoutData() {
      var _this3 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A)(function* () {
        _this3.invites.push(..._this3.smartTableSource.getData());
      })();
    }
    /**
     * Load smart table settings
     */
    _loadSmartTableSettings() {
      const pagination = this.getPagination();
      const settingsSmartTable = {
        actions: false,
        pager: {
          display: false,
          perPage: pagination ? pagination.itemsPerPage : 10
        },
        noDataMessage: this.getTranslation('SM_TABLE.NO_DATA.INVITE'),
        columns: {
          email: {
            title: this.getTranslation('SM_TABLE.EMAIL'),
            type: 'email'
          },
          roleName: {
            title: this.getTranslation('SM_TABLE.ROLE'),
            type: 'text'
          },
          projects: {
            title: this.getTranslation('SM_TABLE.PROJECTS'),
            type: 'custom',
            isFilterable: false,
            renderComponent: _project_names_project_names_component__WEBPACK_IMPORTED_MODULE_18__/* .ProjectNamesComponent */ .H,
            componentInitFunction: (instance, cell) => {
              instance.rowData = cell.getRow().getData();
            }
          },
          contact: {
            title: this.getTranslation('SM_TABLE.CONTACTS'),
            type: 'custom',
            isFilterable: false,
            renderComponent: _client_names_client_names_component__WEBPACK_IMPORTED_MODULE_19__/* .ClientNamesComponent */ .b,
            componentInitFunction: (instance, cell) => {
              instance.rowData = cell.getRow().getData();
            }
          },
          departments: {
            title: this.getTranslation('SM_TABLE.DEPARTMENTS'),
            type: 'custom',
            isFilterable: false,
            renderComponent: _department_names_department_names_component__WEBPACK_IMPORTED_MODULE_20__/* .DepartmentNamesComponent */ .w,
            componentInitFunction: (instance, cell) => {
              instance.rowData = cell.getRow().getData();
            }
          },
          fullName: {
            title: this.getTranslation('SM_TABLE.INVITED_BY'),
            type: 'text'
          },
          createdDate: {
            title: this.getTranslation('SM_TABLE.CREATED'),
            type: 'custom',
            isFilterable: false,
            renderComponent: _table_components__WEBPACK_IMPORTED_MODULE_21__/* .DateViewComponent */ .l,
            componentInitFunction: (instance, cell) => {
              instance.rowData = cell.getRow().getData();
              instance.value = cell.getValue();
            }
          },
          expireDate: {
            title: this.getTranslation('SM_TABLE.EXPIRE_DATE'),
            type: 'text'
          },
          status: {
            title: this.getTranslation('SM_TABLE.STATUS'),
            type: 'text'
          }
        }
      };
      if (this.invitationType === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__/* .InvitationTypeEnum */ .Tq.EMPLOYEE) {
        delete settingsSmartTable['columns']['roleName'];
      }
      if (this.invitationType === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__/* .InvitationTypeEnum */ .Tq.USER) {
        delete settingsSmartTable['columns']['projects'];
        delete settingsSmartTable['columns']['contact'];
        delete settingsSmartTable['columns']['departments'];
      }
      if (this.invitationType === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__/* .InvitationTypeEnum */ .Tq.CANDIDATE) {
        delete settingsSmartTable['columns']['projects'];
        delete settingsSmartTable['columns']['contact'];
        delete settingsSmartTable['columns']['roleName'];
      }
      this.settingsSmartTable = settingsSmartTable;
    }
    deleteInvite(selectedItem) {
      var _this4 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A)(function* () {
        if (selectedItem) {
          _this4.selectInvite({
            isSelected: true,
            data: selectedItem
          });
        }
        _this4.dialogService.open(_user_forms_delete_confirmation_delete_confirmation_component__WEBPACK_IMPORTED_MODULE_22__/* .DeleteConfirmationComponent */ .u, {
          context: {
            recordType: _this4.selectedInvite.email + ' ' + _this4.getTranslation('FORM.DELETE_CONFIRMATION.INVITATION')
          }
        }).onClose.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__/* .untilDestroyed */ .s)(_this4)).subscribe(/*#__PURE__*/function () {
          var _ref = (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A)(function* (result) {
            if (result) {
              try {
                if (!_this4.selectedInvite) {
                  _this4.toastrService.danger('Invitation is not selected');
                  return;
                }
                const {
                  id,
                  email
                } = _this4.selectedInvite;
                yield _this4.inviteService.delete(id).then(() => {
                  _this4.toastrService.success('TOASTR.MESSAGE.INVITES_DELETE', {
                    email: email
                  });
                }).finally(() => {
                  _this4._refresh$.next(true);
                  _this4.invites$.next(true);
                });
              } catch (error) {
                _this4.toastrService.danger(error.error.message || error.message);
              }
            }
          });
          return function (_x) {
            return _ref.apply(this, arguments);
          };
        }());
      })();
    }
    resendInvite(selectedItem) {
      var _this5 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A)(function* () {
        if (selectedItem) {
          _this5.selectInvite({
            isSelected: true,
            data: selectedItem
          });
        }
        if (_this5.selectedInvite.status !== _gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__/* .InviteStatusEnum */ .Vh.INVITED) {
          return;
        }
        _this5.dialogService.open(_resend_confirmation_resend_confirmation_component__WEBPACK_IMPORTED_MODULE_23__/* .ResendConfirmationComponent */ .c, {
          context: {
            email: _this5.selectedInvite.email
          }
        }).onClose.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__/* .untilDestroyed */ .s)(_this5)).subscribe(/*#__PURE__*/function () {
          var _ref2 = (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A)(function* (result) {
            if (result) {
              try {
                if (!_this5.selectedInvite) {
                  _this5.toastrService.danger('Invitation is not selected');
                  return;
                }
                const {
                  id,
                  email,
                  organizationId
                } = _this5.selectedInvite;
                yield _this5.inviteService.resendInvite({
                  inviteId: id,
                  inviteType: _this5.invitationType,
                  organizationId
                }).then(() => {
                  _this5.toastrService.success('TOASTR.MESSAGE.INVITES_RESEND', {
                    email
                  });
                }).finally(() => {
                  _this5._refresh$.next(true);
                  _this5.invites$.next(true);
                });
              } catch (error) {
                _this5.toastrService.danger(error);
              }
            }
          });
          return function (_x2) {
            return _ref2.apply(this, arguments);
          };
        }());
      })();
    }
    isEmployeeInvitation() {
      return this.selectedInvite.roleName === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__/* .InvitationTypeEnum */ .Tq.EMPLOYEE;
    }
    isCandidateInvitation() {
      return this.selectedInvite.roleName === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__/* .InvitationTypeEnum */ .Tq.CANDIDATE;
    }
    _applyTranslationOnSmartTable() {
      this.translate.onLangChange.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .tap */ .M)(() => this._loadSmartTableSettings()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__/* .untilDestroyed */ .s)(this)).subscribe();
    }
    /*
     * Clear selected item
     */
    clearItem() {
      this.selectInvite({
        isSelected: false,
        data: null
      });
    }
    static {
      this.ɵfac = function InvitesComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || InvitesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_nebular_theme__WEBPACK_IMPORTED_MODULE_24__/* .NbDialogService */ .S0W), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(ngx_clipboard__WEBPACK_IMPORTED_MODULE_25__/* .ClipboardService */ .WW), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_router__WEBPACK_IMPORTED_MODULE_26__/* .Router */ .Ix), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_common__WEBPACK_IMPORTED_MODULE_27__/* .Location */ .aZ), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_router__WEBPACK_IMPORTED_MODULE_26__/* .UrlSerializer */ .Sd), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_28__/* .Store */ .il), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_29__/* .ToastrService */ .t), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_30__/* .TranslateService */ .c$), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_31__/* .InviteService */ .p), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_common_http__WEBPACK_IMPORTED_MODULE_32__/* .HttpClient */ .Qq));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineComponent"] */ .VBU({
        type: InvitesComponent,
        selectors: [["ga-invites"]],
        inputs: {
          invitationType: "invitationType"
        },
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
        decls: 16,
        vars: 13,
        consts: [["actionButtons", ""], ["visibleButton", ""], ["nbSpinnerStatus", "primary", "nbSpinnerSize", "large", 3, "nbSpinner"], [1, "d-flex", "flex-column", "pb-0"], [1, "header-title-with-back"], [3, "allowEmployee"], [1, "align-self-end"], [3, "componentName", "isDisable", "buttonTemplate", "buttonTemplateVisible"], [3, "ngxPermissionsOnly"], [3, "ngSwitch"], [3, "ngSwitchCase"], [4, "ngSwitchDefault"], [1, "table-scroll-container"], [2, "cursor", "pointer", 3, "userRowSelect", "settings", "source"], [1, "pagination-container"], [4, "ngIf"], [3, "source"], [3, "onSelectedItem", "scroll", "totalItems", "settings", "source"], [1, "btn-group", "actions"], [3, "ngIf"], ["nbButton", "", "status", "basic", "size", "small", 1, "action", 3, "click", "disabled", "nbTooltip"], ["icon", "trash-2-outline", "status", "danger"], ["nbButton", "", "ngxClipboard", "", "status", "basic", "size", "small", 1, "action", "success", 3, "click", "disabled"], [1, "fas", "fa-link", "mr-1"], ["nbButton", "", "status", "basic", "size", "small", 1, "action", "warning", 3, "click", "disabled"], [1, "fas", "fa-repeat", "mr-1"], ["nbButton", "", "type", "button", "size", "small", "status", "success", 1, "invite-button", 3, "click"], [1, "fas", "fa-envelope", "mr-1"]],
        template: function InvitesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "nb-card", 2)(1, "nb-card-header", 3)(2, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(3, "ngx-back-navigation");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(4, "h4")(5, "ngx-header-title", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(7, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(8, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(9, "ngx-gauzy-button-action", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(10, "nb-card-body");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(11, InvitesComponent_ng_template_11_Template, 4, 3, "ng-template", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(12, InvitesComponent_ng_template_12_Template, 2, 4, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplateRefExtractor"] */ .C5r)(14, InvitesComponent_ng_template_14_Template, 1, 4, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplateRefExtractor"] */ .C5r);
          }
          if (rf & 2) {
            const actionButtons_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵreference"] */ .sdS(13);
            const visibleButton_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵreference"] */ .sdS(15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("nbSpinner", ctx.loading);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("allowEmployee", false);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(7, 8, "INVITE_PAGE." + ctx.invitationType + ".MANAGE"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("componentName", ctx.viewComponentName)("isDisable", ctx.disableButton)("buttonTemplate", actionButtons_r8)("buttonTemplateVisible", visibleButton_r9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngxPermissionsOnly", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpureFunction2"] */ .l_i(10, _c0, ctx.PermissionsEnum.ALL_ORG_VIEW, ctx.PermissionsEnum.ORG_INVITE_VIEW));
          }
        },
        dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_24__/* .NbButtonComponent */ .YP2, _nebular_theme__WEBPACK_IMPORTED_MODULE_24__/* .NbCardComponent */ .SrT, _nebular_theme__WEBPACK_IMPORTED_MODULE_24__/* .NbCardBodyComponent */ .KH5, _nebular_theme__WEBPACK_IMPORTED_MODULE_24__/* .NbCardHeaderComponent */ .zJv, _nebular_theme__WEBPACK_IMPORTED_MODULE_24__/* .NbIconComponent */ .tHu, _nebular_theme__WEBPACK_IMPORTED_MODULE_24__/* .NbSpinnerDirective */ .zwc, _nebular_theme__WEBPACK_IMPORTED_MODULE_24__/* .NbTooltipDirective */ .BmQ, ngx_clipboard__WEBPACK_IMPORTED_MODULE_25__/* .ClipboardDirective */ .Uo, ngx_permissions__WEBPACK_IMPORTED_MODULE_33__/* .NgxPermissionsDirective */ .f6, _angular_common__WEBPACK_IMPORTED_MODULE_34__/* .NgIf */ .bT, _angular_common__WEBPACK_IMPORTED_MODULE_34__/* .NgSwitch */ .ux, _angular_common__WEBPACK_IMPORTED_MODULE_34__/* .NgSwitchCase */ .e1, _angular_common__WEBPACK_IMPORTED_MODULE_34__/* .NgSwitchDefault */ .fG, _components_back_navigation_back_navigation_component__WEBPACK_IMPORTED_MODULE_35__/* .BackNavigationComponent */ .r, _components_header_title_header_title_component__WEBPACK_IMPORTED_MODULE_36__/* .HeaderTitleComponent */ .X, angular2_smart_table__WEBPACK_IMPORTED_MODULE_37__/* .Angular2SmartTableComponent */ .T9, _gauzy_button_action_gauzy_button_action_component__WEBPACK_IMPORTED_MODULE_38__/* .GauzyButtonActionComponent */ .A, _smart_data_layout_pagination_pagination_v2_pagination_v2_component__WEBPACK_IMPORTED_MODULE_39__/* .PaginationV2Component */ .a, _card_grid_card_grid_component__WEBPACK_IMPORTED_MODULE_40__/* .CardGridComponent */ .c, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_30__/* .TranslatePipe */ .D9],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.action[_ngcontent-%COMP%] {\n  box-shadow: var(--gauzy-shadow);\n  border: none;\n}\n.action[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}\n.action.info[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: var(--color-info-default);\n  color: white;\n  border-color: var(--color-info-default);\n}\n.action.info-text-1[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  color: var(--color-info-default);\n}\n.action.secondary[_ngcontent-%COMP%] {\n  color: #7e7e8f;\n}\n.action.success[_ngcontent-%COMP%] {\n  color: var(--color-success-default);\n}\n.action.warning[_ngcontent-%COMP%] {\n  color: rgb(245, 109, 88);\n}\n.action.orange[_ngcontent-%COMP%] {\n  color: rgb(255, 171, 45);\n}\n.action.primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n}\n.action.primary.soft[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: rgba(110, 73, 232, 0.1);\n}\n.action.select-nb[_ngcontent-%COMP%]     {\n  box-shadow: none;\n}\n.action.select-nb[_ngcontent-%COMP%]     .select-button {\n  box-shadow: var(--gauzy-shadow);\n  background: rgb(245, 245, 245);\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n.actions[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-2);\n  border-radius: var(--button-rectangle-border-radius);\n  padding: 2px 4px !important;\n}\n\n.gauzy-button-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n.card-custom-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n[_nghost-%COMP%]     input {\n  border-radius: var(--border-radius);\n  box-shadow: var(--gauzy-shadow) inset;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.action[_ngcontent-%COMP%] {\n  box-shadow: var(--gauzy-shadow);\n  border: none;\n}\n.action[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}\n.action.info[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: var(--color-info-default);\n  color: white;\n  border-color: var(--color-info-default);\n}\n.action.info-text-1[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  color: var(--color-info-default);\n}\n.action.secondary[_ngcontent-%COMP%] {\n  color: #7e7e8f;\n}\n.action.success[_ngcontent-%COMP%] {\n  color: var(--color-success-default);\n}\n.action.warning[_ngcontent-%COMP%] {\n  color: rgb(245, 109, 88);\n}\n.action.orange[_ngcontent-%COMP%] {\n  color: rgb(255, 171, 45);\n}\n.action.primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n}\n.action.primary.soft[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: rgba(110, 73, 232, 0.1);\n}\n.action.select-nb[_ngcontent-%COMP%]     {\n  box-shadow: none;\n}\n.action.select-nb[_ngcontent-%COMP%]     .select-button {\n  box-shadow: var(--gauzy-shadow);\n  background: rgb(245, 245, 245);\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n.actions[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-2);\n  border-radius: var(--button-rectangle-border-radius);\n  padding: 2px 4px !important;\n}\n\n.gauzy-button-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n.card-custom-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n[_nghost-%COMP%]     input {\n  border-radius: var(--border-radius);\n  box-shadow: var(--gauzy-shadow) inset;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%], \n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   .table-scroll-container[_ngcontent-%COMP%], \n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .table-scroll-container[_ngcontent-%COMP%] {\n  flex-grow: 10;\n  max-height: unset;\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  border-radius: 0 0 var(--border-radius) var(--border-radius);\n}\n[dir=ltr]   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  padding: 1rem 0.5rem 1rem 18px;\n}\n[dir=rtl]   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  padding: 1rem 18px 1rem 0.5rem;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%], \n[_nghost-%COMP%]   nb-card-header[_ngcontent-%COMP%] {\n  border-radius: var(--border-radius);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  height: 100%;\n  border-radius: var(--border-radius);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-header[_ngcontent-%COMP%] {\n  flex: 0 1 auto;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  overflow: unset;\n  height: calc(100vh - var(--header-height) - var(--footer-height) - 11.5rem + 3.75rem);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-footer[_ngcontent-%COMP%] {\n  flex: 0 1 auto;\n}\n\n[_nghost-%COMP%]   .header-title-with-back[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n[dir=rtl]   [_nghost-%COMP%]   .header-title-with-back[_ngcontent-%COMP%] {\n  gap: 24px;\n}\n[_nghost-%COMP%]   .invite-button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n[dir=rtl]   [_nghost-%COMP%]     ga-layout-selector {\n  margin: 0 20px 0 0;\n}"]
      });
    }
  };
  InvitesComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_41__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__/* .UntilDestroy */ .d)({
    checkProperties: true
  }), (0,tslib__WEBPACK_IMPORTED_MODULE_41__/* .__metadata */ .Sn)("design:paramtypes", [_nebular_theme__WEBPACK_IMPORTED_MODULE_24__/* .NbDialogService */ .S0W, ngx_clipboard__WEBPACK_IMPORTED_MODULE_25__/* .ClipboardService */ .WW, _angular_router__WEBPACK_IMPORTED_MODULE_26__/* .Router */ .Ix, _angular_common__WEBPACK_IMPORTED_MODULE_27__/* .Location */ .aZ, _angular_router__WEBPACK_IMPORTED_MODULE_26__/* .UrlSerializer */ .Sd, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_28__/* .Store */ .il, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_29__/* .ToastrService */ .t, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_30__/* .TranslateService */ .c$, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_31__/* .InviteService */ .p, _angular_common_http__WEBPACK_IMPORTED_MODULE_32__/* .HttpClient */ .Qq])], InvitesComponent);
  return InvitesComponent;
})();


/***/ }),

/***/ 41030:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   h: () => (/* binding */ InviteMutationModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(14572);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(10936);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(56383);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(19223);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22688);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(42433);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(941);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(51530);
/* harmony import */ var _forms_invite_forms_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(26298);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);








let InviteMutationModule = /*#__PURE__*/(() => {
  class InviteMutationModule {
    static {
      this.ɵfac = function InviteMutationModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || InviteMutationModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .$C({
        type: InviteMutationModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .G2t({
        providers: [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_1__/* .OrganizationsService */ .k, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_2__/* .OrganizationProjectsService */ .d, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_3__/* .OrganizationContactService */ .$, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_4__/* .OrganizationDepartmentsService */ .I],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__/* .CommonModule */ .MD, _angular_forms__WEBPACK_IMPORTED_MODULE_6__/* .FormsModule */ .YN, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbButtonModule */ .P5N, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbCardModule */ .lVF, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbIconModule */ .clu, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__/* .TranslateModule */ .h.forChild(), _forms_invite_forms_module__WEBPACK_IMPORTED_MODULE_9__/* .InviteFormsModule */ .x]
      });
    }
  }
  return InviteMutationModule;
})();

/***/ }),

/***/ 44911:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   V: () => (/* binding */ EmailInviteFormComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(73014);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(55598);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10936);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(99418);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(13271);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(80189);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(52738);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(39855);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(56383);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(41598);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(19223);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(92553);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(57952);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(27038);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(36042);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(71924);
/* harmony import */ var _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38546);
/* harmony import */ var _forms_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(78870);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(14572);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(55567);
/* harmony import */ var _directives_autocomplete_off_directive__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(21663);
/* harmony import */ var _user_forms_fields_role_role_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(33589);























function EmailInviteFormComponent_nb_tag_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(0, "nb-tag", 12);
  }
  if (rf & 2) {
    const email_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("text", email_r1)("size", "tiny");
  }
}
function EmailInviteFormComponent_nb_icon_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function EmailInviteFormComponent_nb_icon_11_Template_nb_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r2.onResetEmails());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
}
function EmailInviteFormComponent_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(1, "div", 3)(2, "div", 4)(3, "div", 5)(4, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(7, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(9, "nb-datepicker", null, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const appliedDatePicker_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(6, 3, "FORM.LABELS.APPLIED_DATE_LABEL"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("nbDatepicker", appliedDatePicker_r4)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(8, 5, "FORM.PLACEHOLDERS.START_DATE"));
  }
}
function EmailInviteFormComponent_ng_container_13_ng_option_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "ng-option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const project_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("value", project_r6.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", project_r6.name, " ");
  }
}
function EmailInviteFormComponent_ng_container_13_ng_option_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "ng-option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const contact_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("value", contact_r7.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", contact_r7.name, " ");
  }
}
function EmailInviteFormComponent_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(1, "div", 3)(2, "div", 16)(3, "div", 5)(4, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(7, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function EmailInviteFormComponent_ng_container_13_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r2.selectAllProjects());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(10, "ng-select", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("change", function EmailInviteFormComponent_ng_container_13_Template_ng_select_change_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r2.detectChanges());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(12, EmailInviteFormComponent_ng_container_13_ng_option_12_Template, 2, 2, "ng-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(13, "div", 16)(14, "div", 5)(15, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(18, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function EmailInviteFormComponent_ng_container_13_Template_button_click_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r2.selectAllOrganizationContacts());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(20, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(21, "ng-select", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(22, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("change", function EmailInviteFormComponent_ng_container_13_Template_ng_select_change_21_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r2.detectChanges());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(23, EmailInviteFormComponent_ng_container_13_ng_option_23_Template, 2, 2, "ng-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(6, 12, "FORM.LABELS.PROJECTS_OPTIONAL"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(9, 14, "BUTTONS.SELECT_ALL"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("hideSelected", false)("multiple", true)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(11, 16, "FORM.PLACEHOLDERS.PROJECTS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx_r2.organizationProjects);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(17, 18, "FORM.LABELS.CONTACTS_OPTIONAL"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(20, 20, "BUTTONS.SELECT_ALL"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("hideSelected", false)("multiple", true)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(22, 22, "FORM.PLACEHOLDERS.CONTACTS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx_r2.organizationContacts);
  }
}
function EmailInviteFormComponent_ng_container_14_ng_container_2_ng_option_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "ng-option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const team_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("value", team_r10.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", team_r10.name, " ");
  }
}
function EmailInviteFormComponent_ng_container_14_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(1, "div", 27)(2, "div", 5)(3, "label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(6, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function EmailInviteFormComponent_ng_container_14_ng_container_2_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r9);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r2.selectAllTeams());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(9, "ng-select", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("change", function EmailInviteFormComponent_ng_container_14_ng_container_2_Template_ng_select_change_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r9);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r2.detectChanges());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(11, EmailInviteFormComponent_ng_container_14_ng_container_2_ng_option_11_Template, 2, 2, "ng-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(5, 6, "FORM.LABELS.TEAMS_OPTIONAL"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(8, 8, "BUTTONS.SELECT_ALL"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("hideSelected", false)("multiple", true)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(10, 10, "FORM.PLACEHOLDERS.TEAMS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx_r2.organizationTeams);
  }
}
function EmailInviteFormComponent_ng_container_14_ng_option_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "ng-option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const department_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("value", department_r11.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", department_r11.name, " ");
  }
}
function EmailInviteFormComponent_ng_container_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(2, EmailInviteFormComponent_ng_container_14_ng_container_2_Template, 12, 12, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(3, "div", 24)(4, "div", 5)(5, "label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(8, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function EmailInviteFormComponent_ng_container_14_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r8);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r2.selectAllDepartments());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(11, "ng-select", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("change", function EmailInviteFormComponent_ng_container_14_Template_ng_select_change_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r8);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r2.detectChanges());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(13, EmailInviteFormComponent_ng_container_14_ng_option_13_Template, 2, 2, "ng-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r2.invitationType === ctx_r2.invitationTypeEnum.EMPLOYEE);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngClass", ctx_r2.invitationType === ctx_r2.invitationTypeEnum.EMPLOYEE ? "col-6" : "col-12");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(7, 8, "FORM.LABELS.DEPARTMENTS_OPTIONAL"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(10, 10, "BUTTONS.SELECT_ALL"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("hideSelected", false)("multiple", true)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(12, 12, "FORM.PLACEHOLDERS.DEPARTMENTS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx_r2.organizationDepartments);
  }
}
function EmailInviteFormComponent_ng_container_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(1, "div", 3)(2, "div", 30)(3, "ngx-role-form-field", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("selectedChange", function EmailInviteFormComponent_ng_container_15_Template_ngx_role_form_field_selectedChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r12);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r2.onSelectionChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(4, 3, "FORM.PLACEHOLDERS.ROLE"))("label", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(5, 5, "FORM.LABELS.ROLE"))("excludes", ctx_r2.excludes);
  }
}
function EmailInviteFormComponent_ng_container_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(1, "div", 3)(2, "div", 16)(3, "div", 5)(4, "label", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(7, "nb-icon", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(9, "nb-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(10, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(12, "nb-datepicker", null, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const startedWorkDatepicker_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(6, 4, "FORM.LABELS.START_DATE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(8, 6, "FORM.NOTIFICATIONS.STARTED_WORK_ON"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("nbDatepicker", startedWorkDatepicker_r13)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(11, 8, "FORM.PLACEHOLDERS.START_DATE"));
  }
}
function EmailInviteFormComponent_ng_container_17_nb_option_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const option_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("value", option_r14 == null ? null : option_r14.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", option_r14 == null ? null : option_r14.label, " ");
  }
}
function EmailInviteFormComponent_ng_container_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(1, "div", 3)(2, "div", 16)(3, "div", 5)(4, "label", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(7, "nb-select", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(9, EmailInviteFormComponent_ng_container_17_nb_option_9_Template, 2, 2, "nb-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(6, 3, "FORM.LABELS.INVITATION_EXPIRATION"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(8, 5, "FORM.PLACEHOLDERS.INVITATION_EXPIRATION"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx_r2.invitationExpiryOptions);
  }
}
let EmailInviteFormComponent = /*#__PURE__*/(() => {
  let EmailInviteFormComponent = class EmailInviteFormComponent extends _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_1__/* .TranslationBaseComponent */ .K {
    get invitationType() {
      return this._invitationType;
    }
    set invitationType(value) {
      this._invitationType = value;
      this.setFormValidators();
    }
    constructor(translateService, _fb, _inviteService, _rolesService, _store, _authService,
    // Added ChangeDetectorRef for manual change detection
    _cdr) {
      super(translateService);
      this.translateService = translateService;
      this._fb = _fb;
      this._inviteService = _inviteService;
      this._rolesService = _rolesService;
      this._store = _store;
      this._authService = _authService;
      this._cdr = _cdr;
      this.FormHelpers = _forms_helpers__WEBPACK_IMPORTED_MODULE_2__/* .FormHelpers */ .k;
      this.invitationTypeEnum = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__/* .InvitationTypeEnum */ .Tq;
      this.organizationProjects = [];
      this.organizationContacts = [];
      this.organizationDepartments = [];
      this.organizationTeams = [];
      /**
       * Build email invite form group
       *
       */
      this.form = this._fb.group({
        emails: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .Validators */ .k0.required],
        projects: [[]],
        startedWorkOn: [new Date()],
        appliedDate: [],
        departments: [[]],
        organizationContacts: [[]],
        role: [],
        invitationExpirationPeriod: [],
        teams: [[]]
      }, {
        validators: [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_5__/* .EmailValidator */ .D.pattern('emails')]
      });
      this.emails = new Set([]);
      this.excludes = [];
      this.invitationExpiryOptions = [{
        label: this.getTranslation('INVITE_PAGE.INVITATION_EXPIRATION_OPTIONS.DAY'),
        value: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__/* .InvitationExpirationEnum */ .i3.DAY
      }, {
        label: this.getTranslation('INVITE_PAGE.INVITATION_EXPIRATION_OPTIONS.WEEK'),
        value: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__/* .InvitationExpirationEnum */ .i3.WEEK
      }, {
        label: this.getTranslation('INVITE_PAGE.INVITATION_EXPIRATION_OPTIONS.TWO_WEEK'),
        value: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__/* .InvitationExpirationEnum */ .i3.TWO_WEEK
      }, {
        label: this.getTranslation('INVITE_PAGE.INVITATION_EXPIRATION_OPTIONS.MONTH'),
        value: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__/* .InvitationExpirationEnum */ .i3.MONTH
      }, {
        label: this.getTranslation('INVITE_PAGE.INVITATION_EXPIRATION_OPTIONS.NEVER'),
        value: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__/* .InvitationExpirationEnum */ .i3.NEVER
      }];
    }
    ngOnInit() {
      this._store.user$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .filter */ .p)(user => !!user), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .M)(user => this.user = user), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .M)(() => this.excludeRoles()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__/* .untilDestroyed */ .s)(this)).subscribe();
      this._store.selectedOrganization$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .filter */ .p)(organization => !!organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .M)(organization => this.organization = organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .M)(organization => this.setInvitationPeriodFormValue(organization)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__/* .untilDestroyed */ .s)(this)).subscribe();
    }
    ngAfterViewInit() {}
    /**
     * Force Angular change detection cycle
     * This helps ensure UI is properly updated
     */
    detectChanges() {
      this._cdr.detectChanges();
    }
    /**
     * Exclude roles
     */
    excludeRoles() {
      var _this = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A)(function* () {
        const hasSuperAdminRole = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_10__/* .firstValueFrom */ ._)(_this._authService.hasRole([_gauzy_contracts__WEBPACK_IMPORTED_MODULE_11__/* .RolesEnum */ .$.SUPER_ADMIN]));
        _this.excludes = [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_11__/* .RolesEnum */ .$.EMPLOYEE];
        if (!hasSuperAdminRole) {
          _this.excludes.push(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_11__/* .RolesEnum */ .$.SUPER_ADMIN);
        }
      })();
    }
    isEmployeeInvitation() {
      return this.invitationType === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__/* .InvitationTypeEnum */ .Tq.EMPLOYEE;
    }
    isCandidateInvitation() {
      return this.invitationType === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__/* .InvitationTypeEnum */ .Tq.CANDIDATE;
    }
    /**
     * SELECT all organization projects
     */
    selectAllProjects() {
      const formControl = this.form.get('projects');
      const currentValue = formControl.value || [];
      const allProjectIds = this.organizationProjects.map(project => project.id).filter(Boolean);
      // Better check for complete selection - ensures all items are selected and no extras
      const allSelected = allProjectIds.length > 0 && currentValue.length === allProjectIds.length && allProjectIds.every(id => currentValue.includes(id));
      // Toggle selection based on current state
      if (allSelected) {
        formControl.setValue([]);
      } else {
        formControl.setValue([...allProjectIds]);
      }
      // Ensure Angular recognizes the changes
      formControl.markAsDirty();
      formControl.updateValueAndValidity();
      this.detectChanges();
    }
    /**
     * SELECT all organization departments and update form control value
     */
    selectAllDepartments() {
      const formControl = this.form.get('departments');
      const currentValue = formControl.value || [];
      const allDepartmentIds = this.organizationDepartments.map(department => department.id).filter(Boolean);
      // Better check for complete selection - ensures all items are selected and no extras
      const allSelected = allDepartmentIds.length > 0 && currentValue.length === allDepartmentIds.length && allDepartmentIds.every(id => currentValue.includes(id));
      if (allSelected) {
        formControl.setValue([]);
      } else {
        formControl.setValue([...allDepartmentIds]);
      }
      // Ensure Angular recognizes the changes
      formControl.markAsDirty();
      formControl.updateValueAndValidity();
      this.detectChanges();
    }
    /**
     * SELECT all organization contacts and update form control value
     */
    selectAllOrganizationContacts() {
      const formControl = this.form.get('organizationContacts');
      const currentValue = formControl.value || [];
      const allContactIds = this.organizationContacts.map(contact => contact.id).filter(Boolean);
      // Better check for complete selection - ensures all items are selected and no extras
      const allSelected = allContactIds.length > 0 && currentValue.length === allContactIds.length && allContactIds.every(id => currentValue.includes(id));
      if (allSelected) {
        formControl.setValue([]);
      } else {
        formControl.setValue([...allContactIds]);
      }
      // Ensure Angular recognizes the changes
      formControl.markAsDirty();
      formControl.updateValueAndValidity();
      this.detectChanges();
    }
    /**
     * SELECT all organization teams and update form control value
     */
    selectAllTeams() {
      const formControl = this.form.get('teams');
      const currentValue = formControl.value || [];
      const allTeamIds = this.organizationTeams.map(team => team.id).filter(Boolean);
      // Better check for complete selection - ensures all items are selected and no extras
      const allSelected = allTeamIds.length > 0 && currentValue.length === allTeamIds.length && allTeamIds.every(id => currentValue.includes(id));
      if (allSelected) {
        formControl.setValue([]);
      } else {
        formControl.setValue([...allTeamIds]);
      }
      // Ensure Angular recognizes the changes
      formControl.markAsDirty();
      formControl.updateValueAndValidity();
      this.detectChanges();
    }
    /**
     * Retrieves the role from the form based on the invitation type.
     * Defaults to a viewer role if no specific role is found in the form.
     * @returns The role enum value.
     */
    getRoleFromForm() {
      if (this.isEmployeeInvitation()) {
        return _gauzy_contracts__WEBPACK_IMPORTED_MODULE_11__/* .RolesEnum */ .$.EMPLOYEE;
      }
      if (this.isCandidateInvitation()) {
        return _gauzy_contracts__WEBPACK_IMPORTED_MODULE_11__/* .RolesEnum */ .$.CANDIDATE;
      }
      // Default to viewer role if form role value is not set
      const formRole = this.form.get('role').value;
      return formRole ? formRole.name : _gauzy_contracts__WEBPACK_IMPORTED_MODULE_11__/* .RolesEnum */ .$.VIEWER;
    }
    /**
     *
     * @returns
     */
    saveInvites() {
      var _this2 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A)(function* () {
        if (_this2.form.invalid) {
          return;
        }
        const {
          id: organizationId,
          tenantId
        } = _this2.organization;
        const role = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_10__/* .firstValueFrom */ ._)(_this2._rolesService.getRoleByOptions({
          name: _this2.getRoleFromForm(),
          tenantId
        }));
        const {
          startedWorkOn,
          appliedDate,
          emails,
          invitationExpirationPeriod,
          projects = [],
          departments = [],
          organizationContacts = [],
          teams = []
        } = _this2.form.value;
        return yield _this2._inviteService.createWithEmails({
          emailIds: emails,
          projectIds: projects,
          departmentIds: departments,
          organizationContactIds: organizationContacts,
          teamIds: teams,
          roleId: role.id,
          organizationId,
          tenantId,
          inviteType: _this2.invitationType,
          startedWorkOn: startedWorkOn ? new Date(startedWorkOn) : null,
          appliedDate: appliedDate ? new Date(appliedDate) : null,
          invitationExpirationPeriod
        });
      })();
    }
    /**
     * Remove email from emails form control
     *
     * @param tagToRemove
     */
    onEmailRemove(tagToRemove) {
      this.emails.delete(tagToRemove.text);
      this.form.patchValue({
        emails: [...this.emails.entries()].map(([email]) => email)
      });
    }
    /**
     * Add emails to form emails control
     *
     * @param param0
     */
    onEmailAdd({
      value,
      input
    }) {
      if (value) {
        this.emails.add(value);
      }
      input.nativeElement.value = '';
      this.form.patchValue({
        emails: [...this.emails.entries()].map(([email]) => email)
      });
    }
    /**
     * Email focus out event fire
     *
     * @param event
     */
    onFocusOut(event) {
      const value = event.target.value;
      this.onEmailAdd({
        value,
        input: this.tagInput
      });
    }
    /**
     * Reset emails form control
     *
     */
    onResetEmails() {
      [...this.emails.entries()].forEach(([email]) => {
        this.emails.delete(email);
      });
      this.form.patchValue({
        emails: [...this.emails.entries()].map(([email]) => email)
      });
    }
    /**
     * SET form validators
     *
     */
    setFormValidators() {
      if (this.isEmployeeInvitation() || this.isCandidateInvitation()) {
        this.form.get('role').clearValidators();
      } else {
        this.form.get('role').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .Validators */ .k0.required]);
      }
      this.form.get('role').updateValueAndValidity();
    }
    /**
     * SET invitation period as per organization selection
     *
     * @param organization
     */
    setInvitationPeriodFormValue(organization) {
      if (organization.invitesAllowed) {
        const inviteExpiryPeriod = organization.inviteExpiryPeriod || _gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__/* .InvitationExpirationEnum */ .i3.TWO_WEEK;
        this.form.get('invitationExpirationPeriod').setValue(inviteExpiryPeriod);
        this.form.get('invitationExpirationPeriod').updateValueAndValidity();
      }
    }
    /**
     * On Selection Change
     * @param role
     */
    onSelectionChange(role) {
      this.form.get('role').setValue(role);
      this.form.get('role').updateValueAndValidity();
    }
    ngOnDestroy() {
      this.emails.clear();
    }
    static {
      this.ɵfac = function EmailInviteFormComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || EmailInviteFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__/* .TranslateService */ .c$), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .UntypedFormBuilder */ .ze), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_13__/* .InviteService */ .p), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_14__/* .RoleService */ .W), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_15__/* .Store */ .il), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_16__/* .AuthService */ .u), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* .ChangeDetectorRef */ .gRc));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: EmailInviteFormComponent,
        selectors: [["ga-email-invite-form"]],
        viewQuery: function EmailInviteFormComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵviewQuery"] */ .GBs(_nebular_theme__WEBPACK_IMPORTED_MODULE_17__/* .NbTagInputDirective */ .CNU, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .ElementRef */ .aKT);
          }
          if (rf & 2) {
            let _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵqueryRefresh"] */ .mGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵloadQuery"] */ .lsd()) && (ctx.tagInput = _t.first);
          }
        },
        inputs: {
          organizationProjects: "organizationProjects",
          organizationContacts: "organizationContacts",
          organizationDepartments: "organizationDepartments",
          organizationTeams: "organizationTeams",
          invitationType: "invitationType"
        },
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
        decls: 18,
        vars: 13,
        consts: [["appliedDatePicker", ""], ["startedWorkDatepicker", ""], ["autocomplete-off", "", 3, "formGroup"], [1, "row"], [1, "col-sm-12"], [1, "form-group"], ["for", "emails", 1, "label"], [1, "custom-tag-list", 3, "tagRemove"], ["removable", "", 3, "text", "size", 4, "ngFor", "ngForOf"], ["id", "emails", "type", "text", "name", "emails", "nbTagInput", "", "fullWidth", "", 3, "tagAdd", "focusout", "status"], ["nbSuffix", "", "icon", "close-outline", "pack", "eva", 3, "click", 4, "ngIf"], [4, "ngIf"], ["removable", "", 3, "text", "size"], ["nbSuffix", "", "icon", "close-outline", "pack", "eva", 3, "click"], ["for", "appliedDate", 1, "label"], ["id", "appliedDate", "nbInput", "", "fullWidth", "", "formControlName", "appliedDate", 3, "nbDatepicker", "placeholder"], [1, "col-sm-6"], ["for", "projectSelection", 1, "label", "label-with-select"], ["nbButton", "", "ghost", "", "size", "tiny", "type", "button", 3, "click"], ["id", "projectSelection", "bindLabel", "name", "bindValue", "id", "appendTo", "body", "formControlName", "projects", 1, "adjust-height", 3, "change", "hideSelected", "multiple", "placeholder"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "contactSelection", 1, "label", "label-with-select"], ["id", "contactSelection", "bindLabel", "name", "bindValue", "id", "appendTo", "body", "formControlName", "organizationContacts", 1, "adjust-height", 3, "change", "hideSelected", "multiple", "placeholder"], [3, "value"], [3, "ngClass"], ["for", "departmentSelection", 1, "label", "label-with-select"], ["id", "departmentSelection", "bindLabel", "name", "bindValue", "id", "appendTo", "body", "formControlName", "departments", 1, "adjust-height", 3, "change", "hideSelected", "multiple", "placeholder"], [1, "col-6"], ["for", "teamSelection", 1, "label", "label-with-select"], ["id", "teamSelection", "bindLabel", "name", "bindValue", "id", "appendTo", "body", "formControlName", "teams", 1, "adjust-height", 3, "change", "hideSelected", "multiple", "placeholder"], [1, "col-12"], ["id", "role", "formControlName", "role", 3, "selectedChange", "placeholder", "label", "excludes"], ["for", "startedWorkOn", 1, "label"], ["icon", "question-mark-circle-outline", 3, "nbTooltip"], ["id", "startedWorkOn", "nbInput", "", "fullWidth", "", "formControlName", "startedWorkOn", 3, "nbDatepicker", "placeholder"], ["for", "invitationExpirationPeriod", 1, "label"], ["id", "invitationExpirationPeriod", "fullWidth", "", "formControlName", "invitationExpirationPeriod", 3, "placeholder"]],
        template: function EmailInviteFormComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "form", 2)(1, "div", 3)(2, "div", 4)(3, "div", 5)(4, "label", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(6, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(7, "nb-form-field")(8, "nb-tag-list", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("tagRemove", function EmailInviteFormComponent_Template_nb_tag_list_tagRemove_8_listener($event) {
              return ctx.onEmailRemove($event);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(9, EmailInviteFormComponent_nb_tag_9_Template, 1, 2, "nb-tag", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(10, "input", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("tagAdd", function EmailInviteFormComponent_Template_input_tagAdd_10_listener($event) {
              return ctx.onEmailAdd($event);
            })("focusout", function EmailInviteFormComponent_Template_input_focusout_10_listener($event) {
              return ctx.onFocusOut($event);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(11, EmailInviteFormComponent_nb_icon_11_Template, 1, 0, "nb-icon", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(12, EmailInviteFormComponent_ng_container_12_Template, 11, 7, "ng-container", 11)(13, EmailInviteFormComponent_ng_container_13_Template, 24, 24, "ng-container", 11)(14, EmailInviteFormComponent_ng_container_14_Template, 14, 14, "ng-container", 11)(15, EmailInviteFormComponent_ng_container_15_Template, 6, 7, "ng-container", 11)(16, EmailInviteFormComponent_ng_container_16_Template, 14, 10, "ng-container", 11)(17, EmailInviteFormComponent_ng_container_17_Template, 10, 7, "ng-container", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("formGroup", ctx.form);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(6, 11, "FORM.LABELS.EMAILS"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx.emails);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("status", ctx.FormHelpers.isInvalidControl(ctx.form, "emails") ? "danger" : "basic");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.emails.size > 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.invitationType === ctx.invitationTypeEnum.CANDIDATE);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.invitationType === ctx.invitationTypeEnum.EMPLOYEE);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.invitationType === ctx.invitationTypeEnum.EMPLOYEE || ctx.invitationType === ctx.invitationTypeEnum.CANDIDATE);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.invitationType === ctx.invitationTypeEnum.USER);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.invitationType !== ctx.invitationTypeEnum.CANDIDATE);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.invitationExpiryOptions.length > 0);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_18__/* .NgClass */ .YU, _angular_common__WEBPACK_IMPORTED_MODULE_18__/* .NgForOf */ .Sq, _angular_common__WEBPACK_IMPORTED_MODULE_18__/* .NgIf */ .bT, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* ["ɵNgNoValidate"] */ .qT, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .DefaultValueAccessor */ .me, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .NgControlStatus */ .BC, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .NgControlStatusGroup */ .cb, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .FormGroupDirective */ .j4, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .FormControlName */ .JD, _nebular_theme__WEBPACK_IMPORTED_MODULE_17__/* .NbButtonComponent */ .YP2, _nebular_theme__WEBPACK_IMPORTED_MODULE_17__/* .NbDatepickerDirective */ .OA9, _nebular_theme__WEBPACK_IMPORTED_MODULE_17__/* .NbDatepickerComponent */ .k2z, _nebular_theme__WEBPACK_IMPORTED_MODULE_17__/* .NbFormFieldComponent */ .u_9, _nebular_theme__WEBPACK_IMPORTED_MODULE_17__/* .NbSuffixDirective */ .zb0, _nebular_theme__WEBPACK_IMPORTED_MODULE_17__/* .NbIconComponent */ .tHu, _nebular_theme__WEBPACK_IMPORTED_MODULE_17__/* .NbInputDirective */ .i6h, _nebular_theme__WEBPACK_IMPORTED_MODULE_17__/* .NbSelectComponent */ .S81, _nebular_theme__WEBPACK_IMPORTED_MODULE_17__/* .NbOptionComponent */ .ZJ2, _nebular_theme__WEBPACK_IMPORTED_MODULE_17__/* .NbTagComponent */ .iPJ, _nebular_theme__WEBPACK_IMPORTED_MODULE_17__/* .NbTagListComponent */ .aPV, _nebular_theme__WEBPACK_IMPORTED_MODULE_17__/* .NbTagInputDirective */ .CNU, _nebular_theme__WEBPACK_IMPORTED_MODULE_17__/* .NbTooltipDirective */ .BmQ, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_19__/* .NgSelectComponent */ .vr, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_19__/* .NgOptionComponent */ .xt, _directives_autocomplete_off_directive__WEBPACK_IMPORTED_MODULE_20__/* .AutocompleteOffDirective */ .h, _user_forms_fields_role_role_component__WEBPACK_IMPORTED_MODULE_21__/* .RoleFormFieldComponent */ .U, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__/* .TranslatePipe */ .D9],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   .remove-icon[_ngcontent-%COMP%] {\n  padding-left: 7px;\n  padding-right: 7px;\n  padding-top: 2px;\n}\n[_nghost-%COMP%]   .remove-icon[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .adjust-height[_ngcontent-%COMP%]     .ng-select-container {\n  height: auto;\n}\n[_nghost-%COMP%]     .custom-tag-list.nb-tag-list-with-input.size-medium {\n  box-shadow: var(--gauzy-shadow) inset;\n  background-color: var(--gauzy-card-2);\n}\n[_nghost-%COMP%]     .custom-tag-list.nb-tag-list-with-input.size-medium input {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   .item-invalid[_ngcontent-%COMP%]     .ng-select-container {\n  border: 1px solid;\n  border-color: var(--color-danger-default);\n}\n[_nghost-%COMP%]   .item-valid[_ngcontent-%COMP%]     .ng-select-container {\n  border: 1px solid;\n  border-color: var(--color-success-default);\n}\n[_nghost-%COMP%]   .label-with-select[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n[_nghost-%COMP%]   #emailsSelect[_ngcontent-%COMP%]     .ng-clear-wrapper {\n  width: 20px;\n}\n[_nghost-%COMP%]   #emailsSelect[_ngcontent-%COMP%]     .ng-arrow-wrapper {\n  display: none;\n}\n[_nghost-%COMP%]   .employee-padding[_ngcontent-%COMP%] {\n  margin-bottom: 50px;\n}\n[_nghost-%COMP%]   .notes[_ngcontent-%COMP%] {\n  text-indent: 1em;\n}\n[_nghost-%COMP%]   .notes[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 5px 0 0 2px;\n  color: #eac72d;\n  font-size: 0.75rem;\n  font-weight: 300;\n  line-height: initial;\n}\n[_nghost-%COMP%]   nb-tag-list[_ngcontent-%COMP%]   nb-tag[_ngcontent-%COMP%]  {\n  text-transform: initial;\n}"]
      });
    }
  };
  EmailInviteFormComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_22__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__/* .UntilDestroy */ .d)({
    checkProperties: true
  }), (0,tslib__WEBPACK_IMPORTED_MODULE_22__/* .__metadata */ .Sn)("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__/* .TranslateService */ .c$, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .UntypedFormBuilder */ .ze, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_13__/* .InviteService */ .p, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_14__/* .RoleService */ .W, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_15__/* .Store */ .il, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_16__/* .AuthService */ .u, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .ChangeDetectorRef */ .gRc])], EmailInviteFormComponent);
  return EmailInviteFormComponent;
})();


/***/ }),

/***/ 51530:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ OrganizationDepartmentsService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80189);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64913);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26860);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45715);





let OrganizationDepartmentsService = /*#__PURE__*/(() => {
  class OrganizationDepartmentsService {
    constructor(http) {
      this.http = http;
    }
    create(createInput) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ ._)(this.http.post(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/organization-department`, createInput));
    }
    getAllByEmployee(id) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ ._)(this.http.get(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/organization-department/employee/${id}`));
    }
    getAll(relations, findInput, order) {
      const data = JSON.stringify({
        relations,
        findInput,
        order
      });
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ ._)(this.http.get(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/organization-department`, {
        params: {
          data
        }
      }));
    }
    update(id, updateInput) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ ._)(this.http.put(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/organization-department/${id}`, updateInput));
    }
    updateByEmployee(updateInput) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ ._)(this.http.put(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/organization-department/employee`, updateInput));
    }
    delete(id) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ ._)(this.http.delete(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/organization-department/${id}`));
    }
    static {
      this.ɵfac = function OrganizationDepartmentsService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || OrganizationDepartmentsService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵinject"] */ .KVO(_angular_common_http__WEBPACK_IMPORTED_MODULE_3__/* .HttpClient */ .Qq));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineInjectable"] */ .jDH({
        token: OrganizationDepartmentsService,
        factory: OrganizationDepartmentsService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return OrganizationDepartmentsService;
})();

/***/ }),

/***/ 57394:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* binding */ ProjectNamesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14572);


function ProjectNamesComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const project_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", project_r1, " ");
  }
}
let ProjectNamesComponent = /*#__PURE__*/(() => {
  class ProjectNamesComponent {
    static {
      this.ɵfac = function ProjectNamesComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || ProjectNamesComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: ProjectNamesComponent,
        selectors: [["ng-component"]],
        inputs: {
          rowData: "rowData"
        },
        standalone: false,
        decls: 2,
        vars: 1,
        consts: [["class", "project-badge mr-2 mb-2 text-alternate", 4, "ngFor", "ngForOf"], [1, "project-badge", "mr-2", "mb-2", "text-alternate"]],
        template: function ProjectNamesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, ProjectNamesComponent_div_1_Template, 2, 1, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx.rowData.projectNames);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .NgForOf */ .Sq],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   .project-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  border-radius: 0.25rem;\n  padding: 0.25rem 0.4rem;\n  background-color: var(--color-primary-default);\n}"]
      });
    }
  }
  return ProjectNamesComponent;
})();

/***/ }),

/***/ 82546:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   w: () => (/* binding */ DepartmentNamesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14572);


function DepartmentNamesComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const department_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", department_r1, " ");
  }
}
let DepartmentNamesComponent = /*#__PURE__*/(() => {
  class DepartmentNamesComponent {
    static {
      this.ɵfac = function DepartmentNamesComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || DepartmentNamesComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: DepartmentNamesComponent,
        selectors: [["ng-component"]],
        inputs: {
          rowData: "rowData"
        },
        standalone: false,
        decls: 2,
        vars: 1,
        consts: [["class", "department-badge mr-2 mb-2 text-alternate", 4, "ngFor", "ngForOf"], [1, "department-badge", "mr-2", "mb-2", "text-alternate"]],
        template: function DepartmentNamesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, DepartmentNamesComponent_div_1_Template, 2, 1, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx.rowData.departmentNames);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .NgForOf */ .Sq],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   .department-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  border-radius: 0.25rem;\n  padding: 0.25rem 0.4rem;\n  background-color: var(--color-warning-default);\n}"]
      });
    }
  }
  return DepartmentNamesComponent;
})();

/***/ }),

/***/ 92553:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ EmailValidator)
/* harmony export */ });
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26024);
/* harmony import */ var _regex_patterns_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24737);


class EmailValidator {
  /**
   * Validate emails based on the provided pattern.
   * @param field The name of the email form control.
   * @returns A validator function to validate the email field.
   */
  static pattern(field) {
    return formGroup => {
      const control = formGroup.get(field);
      if (!control) return null;
      return EmailValidator.validator(control, _regex_patterns_const__WEBPACK_IMPORTED_MODULE_0__/* .patterns */ .q.email);
    };
  }
  /**
   * Validate emails based on the provided pattern.
   * @param control The form control to validate.
   * @param pattern The regular expression pattern to match against.
   * @returns An object containing validation errors, or null if validation passes.
   */
  static validator(control, pattern) {
    const value = control.value;
    if ((0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .isEmpty */ .Im)(value)) {
      control.setErrors({
        required: true
      });
      return {
        emailValid: false
      };
    }
    control.markAsTouched();
    const isValid = value.every(email => EmailValidator.isValid(email, pattern));
    if (!isValid) {
      control.setErrors({
        invalid: true
      });
      return {
        emailValid: false
      };
    }
    control.setErrors(null);
    return null;
  }
  /**
   * Check if the email is valid based on the provided RegExp pattern.
   * @param email The email to validate.
   * @param regExp The RegExp pattern to match against.
   * @returns True if the email is valid, otherwise false.
   */
  static isValid(email, regExp) {
    try {
      return regExp.test(email);
    } catch (error) {
      return false;
    }
  }
}

/***/ }),

/***/ 99418:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Tq: () => (/* binding */ InvitationTypeEnum),
/* harmony export */   Vh: () => (/* binding */ InviteStatusEnum),
/* harmony export */   i3: () => (/* binding */ InvitationExpirationEnum)
/* harmony export */ });
/* unused harmony export InviteActionEnum */
var InviteStatusEnum = /*#__PURE__*/function (InviteStatusEnum) {
  InviteStatusEnum["INVITED"] = "INVITED";
  InviteStatusEnum["ACCEPTED"] = "ACCEPTED";
  InviteStatusEnum["EXPIRED"] = "EXPIRED";
  InviteStatusEnum["REJECTED"] = "REJECTED";
  return InviteStatusEnum;
}(InviteStatusEnum || {});
var InviteActionEnum = /*#__PURE__*/function (InviteActionEnum) {
  InviteActionEnum["ACCEPTED"] = "ACCEPTED";
  InviteActionEnum["REJECTED"] = "REJECTED";
  return InviteActionEnum;
}(InviteActionEnum || {});
var InvitationTypeEnum = /*#__PURE__*/function (InvitationTypeEnum) {
  InvitationTypeEnum["USER"] = "USER";
  InvitationTypeEnum["EMPLOYEE"] = "EMPLOYEE";
  InvitationTypeEnum["CANDIDATE"] = "CANDIDATE";
  InvitationTypeEnum["TEAM"] = "TEAM";
  return InvitationTypeEnum;
}(InvitationTypeEnum || {});
var InvitationExpirationEnum = /*#__PURE__*/function (InvitationExpirationEnum) {
  InvitationExpirationEnum[InvitationExpirationEnum["DAY"] = 1] = "DAY";
  InvitationExpirationEnum[InvitationExpirationEnum["WEEK"] = 7] = "WEEK";
  InvitationExpirationEnum[InvitationExpirationEnum["TWO_WEEK"] = 14] = "TWO_WEEK";
  InvitationExpirationEnum[InvitationExpirationEnum["MONTH"] = 30] = "MONTH";
  InvitationExpirationEnum["NEVER"] = "Never";
  return InvitationExpirationEnum;
}(InvitationExpirationEnum || {});

/***/ })

}]);