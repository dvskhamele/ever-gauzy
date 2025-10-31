"use strict";
(self["webpackChunkgauzy"] = self["webpackChunkgauzy"] || []).push([[1094],{

/***/ 51702:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   U: () => (/* binding */ ViewTimeLogComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(73014);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(55598);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17785);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(20893);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20381);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(56383);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(41598);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52738);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39855);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(77020);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(71924);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(19058);
/* harmony import */ var _edit_time_log_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(15774);
/* harmony import */ var _view_time_log_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(71458);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26860);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(14572);
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(79475);
/* harmony import */ var _components_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(32386);
/* harmony import */ var _directives_time_tracking_authorized_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(6485);
/* harmony import */ var _dialogs_directive_confirm_directive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(34268);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(19223);
/* harmony import */ var _pipes_duration_format_pipe__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(33867);
/* harmony import */ var _pipes_time_format_pipe__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(47610);
/* harmony import */ var _pipes_utc_to_local_pipe__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(64729);






















function ViewTimeLogComponent_nb_list_item_7_ng_template_16_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("click", function ViewTimeLogComponent_nb_list_item_7_ng_template_16_ng_template_0_Template_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r4);
      const timeLog_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG(2).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx_r2.openEdit($event, timeLog_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(2, "nb-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const timeLog_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG(2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("disabled", timeLog_r2.isRunning)("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(1, 2, "TIMESHEET.EDIT"));
  }
}
function ViewTimeLogComponent_nb_list_item_7_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(0, ViewTimeLogComponent_nb_list_item_7_ng_template_16_ng_template_0_Template, 3, 4, "ng-template", 16);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("permission", ctx_r2.PermissionsEnum.ALLOW_MODIFY_TIME);
  }
}
function ViewTimeLogComponent_nb_list_item_7_ng_template_17_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("click", function ViewTimeLogComponent_nb_list_item_7_ng_template_17_ng_template_0_Template_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj($event.stopPropagation());
    })("confirm", function ViewTimeLogComponent_nb_list_item_7_ng_template_17_ng_template_0_Template_button_confirm_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r5);
      const timeLog_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG(2).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx_r2.onDeleteConfirm(timeLog_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(3, "nb-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const timeLog_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG(2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("message", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(1, 3, "TIMESHEET.DELETE_TIMELOG"))("disabled", timeLog_r2.isRunning)("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(2, 5, "TIMESHEET.DELETE"));
  }
}
function ViewTimeLogComponent_nb_list_item_7_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(0, ViewTimeLogComponent_nb_list_item_7_ng_template_17_ng_template_0_Template, 4, 7, "ng-template", 16);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("permission", ctx_r2.PermissionsEnum.ALLOW_DELETE_TIME);
  }
}
function ViewTimeLogComponent_nb_list_item_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "nb-list-item", 8)(1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(2, "ngx-avatar", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(5, "utcToLocal");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(6, "timeFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(7, "utcToLocal");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(8, "timeFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(10, "durationFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(11, "div", 12)(12, "div", 13)(13, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("click", function ViewTimeLogComponent_nb_list_item_7_Template_button_click_13_listener() {
      const timeLog_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx_r2.viewLog(timeLog_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(15, "nb-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(16, ViewTimeLogComponent_nb_list_item_7_ng_template_16_Template, 1, 1, "ng-template", 7)(17, ViewTimeLogComponent_nb_list_item_7_ng_template_17_Template, 1, 1, "ng-template", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()();
  }
  if (rf & 2) {
    const timeLog_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("id", timeLog_r2 == null ? null : timeLog_r2.employee == null ? null : timeLog_r2.employee.id)("employee", timeLog_r2 == null ? null : timeLog_r2.employee)("name", timeLog_r2 == null ? null : timeLog_r2.employee == null ? null : timeLog_r2.employee.user == null ? null : timeLog_r2.employee.user.name)("src", timeLog_r2 == null ? null : timeLog_r2.employee == null ? null : timeLog_r2.employee.user == null ? null : timeLog_r2.employee.user.imageUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind2"] */ .i5U(6, 10, _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(5, 8, timeLog_r2 == null ? null : timeLog_r2.startedAt), true) + " " + (!(timeLog_r2 == null ? null : timeLog_r2.isRunning) ? _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind2"] */ .i5U(8, 15, _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(7, 13, timeLog_r2 == null ? null : timeLog_r2.stoppedAt), true) : _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(9, 18, "TIMESHEET.TILL_NOW")) + " (" + _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(10, 20, timeLog_r2 == null ? null : timeLog_r2.duration) + ")", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(14, 22, "TIMESHEET.VIEW"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngxPermissionsOnly", ctx_r2.PermissionsEnum.ALLOW_MODIFY_TIME);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngxPermissionsOnly", ctx_r2.PermissionsEnum.ALLOW_DELETE_TIME);
  }
}
function ViewTimeLogComponent_ng_template_9_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("click", function ViewTimeLogComponent_ng_template_9_ng_template_0_Template_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r6);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx_r2.openAddByDateProject($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(1, "nb-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(3, 1, "TIMESHEET.ADD_TIME"), " ");
  }
}
function ViewTimeLogComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(0, ViewTimeLogComponent_ng_template_9_ng_template_0_Template, 4, 3, "ng-template", 16);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("permission", ctx_r2.PermissionsEnum.ALLOW_MANUAL_TIME);
  }
}
let ViewTimeLogComponent = /*#__PURE__*/(() => {
  let ViewTimeLogComponent = class ViewTimeLogComponent {
    constructor(nbDialogService, timesheetService, store, timeTrackerService) {
      this.nbDialogService = nbDialogService;
      this.timesheetService = timesheetService;
      this.store = store;
      this.timeTrackerService = timeTrackerService;
      this.PermissionsEnum = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__/* .PermissionsEnum */ .U;
      this.timeLogs = [];
    }
    ngOnInit() {
      this.store.selectedOrganization$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .filter */ .p)(organization => !!organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .tap */ .M)(organization => this.organization = organization), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .untilDestroyed */ .s)(this)).subscribe();
    }
    openAddByDateProject($event) {
      const [timeLog] = this.timeLogs;
      const minutes = moment__WEBPACK_IMPORTED_MODULE_0__().minutes();
      const stoppedAt = new Date(moment__WEBPACK_IMPORTED_MODULE_0__(timeLog.startedAt).format('YYYY-MM-DD') + ' ' + moment__WEBPACK_IMPORTED_MODULE_0__().set('minutes', minutes - minutes % 10).format('HH:mm'));
      const startedAt = moment__WEBPACK_IMPORTED_MODULE_0__(stoppedAt).subtract('1', 'hour').toDate();
      this.openEdit($event, {
        startedAt,
        stoppedAt,
        projectId: timeLog.projectId,
        isRunning: timeLog.isRunning
      });
    }
    openEdit($event, timeLog) {
      if (timeLog.isRunning) {
        return;
      }
      $event.stopPropagation();
      this.nbDialogService.open(_edit_time_log_modal__WEBPACK_IMPORTED_MODULE_6__/* .EditTimeLogModalComponent */ .c, {
        context: {
          timeLog: timeLog
        }
      }).onClose.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .untilDestroyed */ .s)(this)).subscribe(data => {
        this.callback(data);
      });
    }
    viewLog(timeLog) {
      this.nbDialogService.open(_view_time_log_modal__WEBPACK_IMPORTED_MODULE_7__/* .ViewTimeLogModalComponent */ .x, {
        context: {
          timeLog: timeLog
        },
        dialogClass: 'view-log-dialog'
      }).onClose.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .untilDestroyed */ .s)(this)).subscribe(res => {
        this.callback(res);
      });
    }
    onDeleteConfirm(timeLog) {
      if (timeLog.isRunning) {
        return;
      }
      const {
        id: organizationId
      } = this.organization;
      const request = {
        logIds: [timeLog.id],
        organizationId
      };
      this.timesheetService.deleteLogs(request).then(res => {
        this.callback(res);
        this.checkTimerStatus();
      });
    }
    checkTimerStatus() {
      var _this = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A)(function* () {
        if (!_this.organization) {
          return;
        }
        const {
          employeeId,
          tenantId
        } = _this.store.user;
        const {
          id: organizationId
        } = _this.organization;
        if (employeeId) {
          yield _this.timeTrackerService.checkTimerStatus({
            organizationId,
            tenantId,
            source: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_9__/* .TimeLogSourceEnum */ .EC.WEB_TIMER
          });
        }
      })();
    }
    onClose() {
      this.close(true);
    }
    ngOnDestroy() {}
    static {
      this.ɵfac = function ViewTimeLogComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || ViewTimeLogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_nebular_theme__WEBPACK_IMPORTED_MODULE_10__/* .NbDialogService */ .S0W), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_11__/* .TimesheetService */ .k), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_12__/* .Store */ .il), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_13__/* .TimeTrackerService */ .Bj));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineComponent"] */ .VBU({
        type: ViewTimeLogComponent,
        selectors: [["ngx-view-time-log"]],
        inputs: {
          timeLogs: "timeLogs",
          callback: "callback"
        },
        outputs: {
          close: "close"
        },
        standalone: false,
        decls: 10,
        vars: 5,
        consts: [[1, "p-1", "time-log-view-container"], [1, "cancel"], [1, "fas", "fa-times", 3, "click"], [1, "title", "p-3"], [1, "time-span", "custom-scroll"], ["class", "row border-top align-items-center", 4, "ngFor", "ngForOf"], [1, "text-center"], [3, "ngxPermissionsOnly"], [1, "row", "border-top", "align-items-center"], [1, "time-log-content", "col", "pr-0"], [1, "report-table", 3, "id", "employee", "name", "src"], [1, "time-log-text", "col-3", "pl-0"], [1, "col", "p-0"], [1, "time-log-action"], ["nbButton", "", "status", "basic", "size", "small", 1, "action", "secondary", 3, "click", "nbTooltip"], ["icon", "eye-outline"], ["ngxTimeTrackingAuthorized", "", 3, "permission"], ["nbButton", "", "status", "basic", "size", "small", 1, "action", "primary", 3, "click", "disabled", "nbTooltip"], ["icon", "edit"], ["nbButton", "", "status", "basic", "ngxConfirmDialog", "", "size", "small", 1, "action", 3, "click", "confirm", "message", "disabled", "nbTooltip"], ["status", "danger", "icon", "trash-2-outline"], ["nbButton", "", "status", "primary", 1, "mx-auto", "mt-3", 3, "click"], ["icon", "plus-outline"]],
        template: function ViewTimeLogComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "div", 0)(1, "span", 1)(2, "i", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("click", function ViewTimeLogComponent_Template_i_click_2_listener() {
              return ctx.onClose();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(3, "h6", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(5, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(6, "nb-list", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(7, ViewTimeLogComponent_nb_list_item_7_Template, 18, 24, "nb-list-item", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(8, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(9, ViewTimeLogComponent_ng_template_9_Template, 1, 1, "ng-template", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(5, 3, "TIMESHEET.VIEW_TIME_LOGS"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx.timeLogs);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngxPermissionsOnly", ctx.PermissionsEnum.ALLOW_MANUAL_TIME);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_14__/* .NgForOf */ .Sq, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__/* .NbButtonComponent */ .YP2, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__/* .NbIconComponent */ .tHu, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__/* .NbListComponent */ .krR, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__/* .NbListItemComponent */ .TdD, _nebular_theme__WEBPACK_IMPORTED_MODULE_10__/* .NbTooltipDirective */ .BmQ, ngx_permissions__WEBPACK_IMPORTED_MODULE_15__/* .NgxPermissionsDirective */ .f6, _components_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_16__/* .AvatarComponent */ .f, _directives_time_tracking_authorized_directive__WEBPACK_IMPORTED_MODULE_17__/* .TimeTrackingAuthorizedDirective */ .X, _dialogs_directive_confirm_directive__WEBPACK_IMPORTED_MODULE_18__/* .ConfirmDirective */ .o, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__/* .TranslatePipe */ .D9, _pipes_duration_format_pipe__WEBPACK_IMPORTED_MODULE_20__/* .DurationFormatPipe */ .i, _pipes_time_format_pipe__WEBPACK_IMPORTED_MODULE_21__/* .TimeFormatPipe */ .z, _pipes_utc_to_local_pipe__WEBPACK_IMPORTED_MODULE_22__/* .UtcToLocalPipe */ .d],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.action[_ngcontent-%COMP%] {\n  box-shadow: var(--gauzy-shadow);\n  border: none;\n}\n.action[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}\n.action.info[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: var(--color-info-default);\n  color: white;\n  border-color: var(--color-info-default);\n}\n.action.info-text-1[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  color: var(--color-info-default);\n}\n.action.secondary[_ngcontent-%COMP%] {\n  color: #7e7e8f;\n}\n.action.success[_ngcontent-%COMP%] {\n  color: var(--color-success-default);\n}\n.action.warning[_ngcontent-%COMP%] {\n  color: rgb(245, 109, 88);\n}\n.action.orange[_ngcontent-%COMP%] {\n  color: rgb(255, 171, 45);\n}\n.action.primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n}\n.action.primary.soft[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: rgba(110, 73, 232, 0.1);\n}\n.action.select-nb[_ngcontent-%COMP%]     {\n  box-shadow: none;\n}\n.action.select-nb[_ngcontent-%COMP%]     .select-button {\n  box-shadow: var(--gauzy-shadow);\n  background: rgb(245, 245, 245);\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n.actions[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-2);\n  border-radius: var(--button-rectangle-border-radius);\n  padding: 2px 4px !important;\n}\n\n.gauzy-button-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n.card-custom-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n[_nghost-%COMP%]     input {\n  border-radius: var(--border-radius);\n  box-shadow: var(--gauzy-shadow) inset;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   i[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n}\n[dir=ltr]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n[dir=rtl]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--gauzy-text-color-1);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(245, 109, 88, 0.3);\n  border-width: 2px;\n  color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(245, 109, 88, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 16px;\n  letter-spacing: 0em;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(126, 126, 143, 0.3);\n  border-width: 2px;\n  color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(126, 126, 143, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(37, 184, 105, 0.3);\n  border-width: 2px;\n  color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(37, 184, 105, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[disabled][_ngcontent-%COMP%], \n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic.btn-disabled[_ngcontent-%COMP%] {\n  background-color: var(--button-outline-basic-disabled-background-color);\n  border-color: var(--button-outline-basic-disabled-border-color);\n  color: var(--button-outline-basic-disabled-text-color);\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].primary.appearance-filled.status-primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  border: unset;\n  background-color: var(--color-primary-transparent-default);\n  box-shadow: var(--gauzy-shadow) 0, 0, 0, 0.15;\n}\n[dir=ltr]   [_nghost-%COMP%]     input, \n[dir=ltr]   [_nghost-%COMP%]     textarea {\n  text-align: start;\n}\n[dir=rtl]   [_nghost-%COMP%]     input, \n[dir=rtl]   [_nghost-%COMP%]     textarea {\n  text-align: end;\n}\n[_nghost-%COMP%]     input, \n[_nghost-%COMP%]     nb-select.appearance-outline.status-basic .select-button, \n[_nghost-%COMP%]     .ng-select .ng-select-container {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n  height: 42px !important;\n}\n[_nghost-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder, \n[_nghost-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {\n  top: unset !important;\n}\n[_nghost-%COMP%]     label, \n[_nghost-%COMP%]     .label {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  color: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]     textarea {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n}\n[_nghost-%COMP%]     .ng-select .ng-select-container input, \n[_nghost-%COMP%]     nb-tag-list input {\n  background-color: unset !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n}\n\n[_nghost-%COMP%]   .time-log-view-container[_ngcontent-%COMP%] {\n  width: 430px;\n  box-shadow: 0px 0px 0px 2px var(--color-primary-transparent-default);\n  border-radius: var(--border-radius);\n}\n[_nghost-%COMP%]   .time-log-text[_ngcontent-%COMP%] {\n  color: var(--gauzy-text-color-1);\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 15px;\n  letter-spacing: 0em;\n  text-align: center;\n}\n[_nghost-%COMP%]   .time-log-action[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: var(--button-rectangle-border-radius);\n  padding: 6px 8px;\n  width: fit-content;\n}\n[_nghost-%COMP%]   nb-list[_ngcontent-%COMP%] {\n  max-height: 50vh;\n  overflow-x: hidden;\n  overflow-y: auto !important;\n}\n[_nghost-%COMP%]   nb-list-item[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  padding: 4px 4px 0;\n}"]
      });
    }
  };
  ViewTimeLogComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_23__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .UntilDestroy */ .d)({
    checkProperties: true
  }), (0,tslib__WEBPACK_IMPORTED_MODULE_23__/* .__metadata */ .Sn)("design:paramtypes", [_nebular_theme__WEBPACK_IMPORTED_MODULE_10__/* .NbDialogService */ .S0W, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_11__/* .TimesheetService */ .k, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_12__/* .Store */ .il, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_13__/* .TimeTrackerService */ .Bj])], ViewTimeLogComponent);
  return ViewTimeLogComponent;
})();


/***/ }),

/***/ 57201:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* binding */ EditTimeLogModalModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14572);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10936);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56383);
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(79475);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19223);
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(38834);
/* harmony import */ var _dialogs_dialogs_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(18180);
/* harmony import */ var _selectors_project__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(37383);
/* harmony import */ var _selectors_team__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(72943);
/* harmony import */ var _timer_picker_timer_picker_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1618);
/* harmony import */ var _employee_employee_multi_select_employee_multi_select_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6269);
/* harmony import */ var _contact_selector_contact_selector_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(4222);
/* harmony import */ var _tasks_task_select_task_select_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(34987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
















let EditTimeLogModalModule = /*#__PURE__*/(() => {
  class EditTimeLogModalModule {
    static {
      this.ɵfac = function EditTimeLogModalModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || EditTimeLogModalModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .$C({
        type: EditTimeLogModalModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .CommonModule */ .MD, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .FormsModule */ .YN, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .ReactiveFormsModule */ .X1, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbButtonModule */ .P5N, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbCardModule */ .lVF, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbCheckboxModule */ .Ad8, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbAutocompleteModule */ .FUX, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbFormFieldModule */ .NeG, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbIconModule */ .clu, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbInputModule */ .pty, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbSpinnerModule */ .gYs, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbTooltipModule */ .IB0, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbSelectModule */ .VcP, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbOptionModule */ .OKj, ngx_permissions__WEBPACK_IMPORTED_MODULE_4__/* .NgxPermissionsModule */ .Ov.forChild(), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__/* .TranslateModule */ .h.forChild(), _shared_module__WEBPACK_IMPORTED_MODULE_6__/* .SharedModule */ .G, _dialogs_dialogs_module__WEBPACK_IMPORTED_MODULE_7__/* .DialogsModule */ .s, _timer_picker_timer_picker_module__WEBPACK_IMPORTED_MODULE_8__/* .TimerPickerModule */ .O, _tasks_task_select_task_select_module__WEBPACK_IMPORTED_MODULE_9__/* .TaskSelectModule */ .k, _selectors_project__WEBPACK_IMPORTED_MODULE_10__/* .ProjectSelectModule */ .A, _selectors_team__WEBPACK_IMPORTED_MODULE_11__/* .TeamSelectModule */ .i, _employee_employee_multi_select_employee_multi_select_module__WEBPACK_IMPORTED_MODULE_12__/* .EmployeeMultiSelectModule */ .I, _contact_selector_contact_selector_module__WEBPACK_IMPORTED_MODULE_13__/* .ContactSelectorModule */ .q]
      });
    }
  }
  return EditTimeLogModalModule;
})();

/***/ }),

/***/ 58233:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   d: () => (/* binding */ ViewTimeLogModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14572);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56383);
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(79475);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19223);
/* harmony import */ var _dialogs_dialogs_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(18180);
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(38834);
/* harmony import */ var _edit_time_log_modal_edit_time_log_modal_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(57201);
/* harmony import */ var _view_time_log_modal_view_time_log_modal_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(65029);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);











let ViewTimeLogModule = /*#__PURE__*/(() => {
  class ViewTimeLogModule {
    static {
      this.ɵfac = function ViewTimeLogModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || ViewTimeLogModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .$C({
        type: ViewTimeLogModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .CommonModule */ .MD, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbButtonModule */ .P5N, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbDialogModule */ .nZv.forChild(), _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbIconModule */ .clu, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbListModule */ .PD_, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbTooltipModule */ .IB0, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbUserModule */ .Mif, ngx_permissions__WEBPACK_IMPORTED_MODULE_3__/* .NgxPermissionsModule */ .Ov, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__/* .TranslateModule */ .h.forChild(), _shared_module__WEBPACK_IMPORTED_MODULE_5__/* .SharedModule */ .G, _dialogs_dialogs_module__WEBPACK_IMPORTED_MODULE_6__/* .DialogsModule */ .s, _edit_time_log_modal_edit_time_log_modal_module__WEBPACK_IMPORTED_MODULE_7__/* .EditTimeLogModalModule */ .H, _view_time_log_modal_view_time_log_modal_module__WEBPACK_IMPORTED_MODULE_8__/* .ViewTimeLogModalModule */ .k]
      });
    }
  }
  return ViewTimeLogModule;
})();

/***/ }),

/***/ 65029:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   k: () => (/* binding */ ViewTimeLogModalModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14572);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(56383);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19223);
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(38834);
/* harmony import */ var _dialogs_dialogs_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(18180);
/* harmony import */ var _table_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(57832);
/* harmony import */ var _edit_time_log_modal_edit_time_log_modal_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(57201);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);










let ViewTimeLogModalModule = /*#__PURE__*/(() => {
  class ViewTimeLogModalModule {
    static {
      this.ɵfac = function ViewTimeLogModalModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || ViewTimeLogModalModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .$C({
        type: ViewTimeLogModalModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .CommonModule */ .MD, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__/* .TranslateModule */ .h.forChild(), _shared_module__WEBPACK_IMPORTED_MODULE_3__/* .SharedModule */ .G, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbCardModule */ .lVF, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbButtonModule */ .P5N, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbDialogModule */ .nZv.forChild(), _edit_time_log_modal_edit_time_log_modal_module__WEBPACK_IMPORTED_MODULE_5__/* .EditTimeLogModalModule */ .H, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbIconModule */ .clu, _dialogs_dialogs_module__WEBPACK_IMPORTED_MODULE_6__/* .DialogsModule */ .s, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbAlertModule */ .dQU, _table_components__WEBPACK_IMPORTED_MODULE_7__/* .TableComponentsModule */ .p]
      });
    }
  }
  return ViewTimeLogModalModule;
})();

/***/ })

}]);