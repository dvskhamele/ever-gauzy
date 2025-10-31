"use strict";
(self["webpackChunkgauzy"] = self["webpackChunkgauzy"] || []).push([[8956],{

/***/ 18912:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ TaskPrioritySelectComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(73014);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(55598);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(10936);
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(88326);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4644);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(80189);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4478);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(39938);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(39855);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(52738);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(79708);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(19223);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(74353);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(26024);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(41598);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(71924);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(46694);
/* harmony import */ var _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38546);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(15480);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(55567);
/* harmony import */ var _task_badge_view_task_badge_view_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(1720);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(14572);






















function TaskPrioritySelectComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(0, "gauzy-task-badge-view", 4);
  }
  if (rf & 2) {
    const item_r3 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("taskBadge", item_r3);
  }
}
function TaskPrioritySelectComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(0, "gauzy-task-badge-view", 4);
  }
  if (rf & 2) {
    const item_r4 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("taskBadge", item_r4);
  }
}
let TaskPrioritySelectComponent = /*#__PURE__*/(() => {
  let TaskPrioritySelectComponent = class TaskPrioritySelectComponent extends _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_1__/* .TranslationBaseComponent */ .K {
    constructor(translateService, store, taskPrioritiesService, toastrService) {
      var _this;
      super(translateService);
      _this = this;
      this.translateService = translateService;
      this.store = store;
      this.taskPrioritiesService = taskPrioritiesService;
      this.toastrService = toastrService;
      this.subject$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__/* .Subject */ .B();
      /**
       * Default global task priorities
       */
      this._priorities = [{
        name: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__/* .TaskPriorityEnum */ .p.URGENT,
        value: (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_4__/* .sluggable */ .J7)(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__/* .TaskPriorityEnum */ .p.URGENT)
      }, {
        name: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__/* .TaskPriorityEnum */ .p.HIGH,
        value: (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_4__/* .sluggable */ .J7)(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__/* .TaskPriorityEnum */ .p.HIGH)
      }, {
        name: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__/* .TaskPriorityEnum */ .p.MEDIUM,
        value: (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_4__/* .sluggable */ .J7)(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__/* .TaskPriorityEnum */ .p.MEDIUM)
      }, {
        name: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__/* .TaskPriorityEnum */ .p.LOW,
        value: (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_4__/* .sluggable */ .J7)(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__/* .TaskPriorityEnum */ .p.LOW)
      }];
      this.priorities$ = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_5__/* .BehaviorSubject */ .t([]);
      this.onChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .bkB();
      /*
       * Getter & Setter for dynamic add tag option
       */
      this._addTag = true;
      this.onChange = () => {};
      this.onTouched = () => {};
      /**
       * Create new priority from ng-select tag
       *
       * @param name
       * @returns
       */
      this.createNew = /*#__PURE__*/function () {
        var _ref = (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(function* (name) {
          if (!_this.organization) {
            return;
          }
          try {
            const {
              tenantId
            } = _this.store.user;
            const {
              id: organizationId
            } = _this.organization;
            const source = _this.taskPrioritiesService.create({
              tenantId,
              organizationId,
              name,
              ...(_this.projectId ? {
                projectId: _this.projectId
              } : {})
            });
            const priority = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_7__/* .firstValueFrom */ ._)(source);
            if (priority) {
              _this.priority = priority;
            }
          } catch (error) {
            _this.toastrService.error(error);
          } finally {
            _this.subject$.next(true);
          }
        });
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }();
    }
    get projectId() {
      return this._projectId;
    }
    set projectId(value) {
      this._projectId = value;
      this.subject$.next(true);
    }
    get addTag() {
      return this._addTag;
    }
    set addTag(value) {
      this._addTag = value;
    }
    get placeholder() {
      return this._placeholder;
    }
    set placeholder(value) {
      this._placeholder = value;
    }
    get priority() {
      return this._priority;
    }
    set priority(val) {
      this._priority = val;
      this.onChange(val);
      this.onTouched(val);
    }
    ngOnInit() {
      this.subject$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__/* .debounceTime */ .B)(200), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .tap */ .M)(() => this.getTaskPriorities()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__/* .untilDestroyed */ .s)(this)).subscribe();
    }
    ngAfterViewInit() {
      const storeOrganization$ = this.store.selectedOrganization$;
      const storeProject$ = this.store.selectedProject$;
      (0,rxjs__WEBPACK_IMPORTED_MODULE_11__/* .combineLatest */ .z)([storeOrganization$, storeProject$]).pipe((0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_4__/* .distinctUntilChange */ .nI)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__/* .filter */ .p)(([organization]) => !!organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .tap */ .M)(([organization, project]) => {
        this.organization = organization;
        this.projectId = project ? project.id : null;
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .tap */ .M)(() => this.subject$.next(true)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__/* .untilDestroyed */ .s)(this)).subscribe();
    }
    writeValue(value) {
      this.priority = value;
    }
    registerOnChange(fn) {
      this.onChange = fn;
    }
    registerOnTouched(fn) {
      this.onTouched = fn;
    }
    selectPriority(priority) {
      this.onChanged.emit(priority);
    }
    /**
     * Get task priorities based organization & project
     */
    getTaskPriorities() {
      if (!this.organization) {
        return;
      }
      const {
        tenantId
      } = this.store.user;
      const {
        id: organizationId
      } = this.organization;
      this.taskPrioritiesService.get({
        tenantId,
        organizationId,
        ...(this.projectId ? {
          projectId: this.projectId
        } : {})
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__/* .map */ .T)(({
        items,
        total
      }) => total > 0 ? items : this._priorities), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .tap */ .M)(priorities => this.priorities$.next(priorities)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__/* .untilDestroyed */ .s)(this)).subscribe();
    }
    ngOnDestroy() {}
    static {
      this.ɵfac = function TaskPrioritySelectComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || TaskPrioritySelectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__/* .TranslateService */ .c$), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_15__/* .Store */ .il), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_16__/* .TaskPrioritiesService */ .T), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_17__/* .ToastrService */ .t));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: TaskPrioritySelectComponent,
        selectors: [["ga-task-priority-select"]],
        inputs: {
          projectId: "projectId",
          addTag: "addTag",
          placeholder: "placeholder"
        },
        outputs: {
          onChanged: "onChanged"
        },
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵProvidersFeature"] */ .Jv_([{
          provide: _angular_forms__WEBPACK_IMPORTED_MODULE_18__/* .NG_VALUE_ACCESSOR */ .kq,
          useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__/* .forwardRef */ .Rfq)(() => TaskPrioritySelectComponent),
          multi: true
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
        decls: 6,
        vars: 9,
        consts: [["select", ""], ["appendTo", "body", "bindLabel", "name", 3, "change", "clear", "ngModelChange", "ngModel", "addTag", "clearable", "items", "placeholder"], ["ng-option-tmp", ""], ["ng-label-tmp", ""], [3, "taskBadge"]],
        template: function TaskPrioritySelectComponent_Template(rf, ctx) {
          if (rf & 1) {
            const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "ng-select", 1, 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(3, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("change", function TaskPrioritySelectComponent_Template_ng_select_change_0_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              const select_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(1);
              ctx.selectPriority($event);
              return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(select_r2.blur());
            })("clear", function TaskPrioritySelectComponent_Template_ng_select_clear_0_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              const select_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(select_r2.blur());
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayListener"] */ .mxI("ngModelChange", function TaskPrioritySelectComponent_Template_ng_select_ngModelChange_0_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayBindingSet"] */ .DH7(ctx.priority, $event) || (ctx.priority = $event);
              return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj($event);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(4, TaskPrioritySelectComponent_ng_template_4_Template, 1, 1, "ng-template", 2)(5, TaskPrioritySelectComponent_ng_template_5_Template, 1, 1, "ng-template", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayProperty"] */ .R50("ngModel", ctx.priority);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("addTag", ctx.addTag ? ctx.createNew : null)("clearable", true)("items", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(2, 5, ctx.priorities$))("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(3, 7, ctx.placeholder || "TASKS_PAGE.TASK_PRIORITY"));
          }
        },
        dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_18__/* .NgControlStatus */ .BC, _angular_forms__WEBPACK_IMPORTED_MODULE_18__/* .NgModel */ .vS, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_19__/* .NgSelectComponent */ .vr, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_19__/* .NgOptionTemplateDirective */ .Uq, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_19__/* .NgLabelTemplateDirective */ .ZZ, _task_badge_view_task_badge_view_component__WEBPACK_IMPORTED_MODULE_20__/* .TaskBadgeViewComponent */ .Z, _angular_common__WEBPACK_IMPORTED_MODULE_21__/* .AsyncPipe */ .Jj, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__/* .TranslatePipe */ .D9],
        encapsulation: 2
      });
    }
  };
  TaskPrioritySelectComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_22__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__/* .UntilDestroy */ .d)({
    checkProperties: true
  }), (0,tslib__WEBPACK_IMPORTED_MODULE_22__/* .__metadata */ .Sn)("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__/* .TranslateService */ .c$, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_15__/* .Store */ .il, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_16__/* .TaskPrioritiesService */ .T, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_17__/* .ToastrService */ .t])], TaskPrioritySelectComponent);
  return TaskPrioritySelectComponent;
})();


/***/ }),

/***/ 25448:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: () => (/* binding */ TaskStatusSelectComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(73014);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(55598);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(10936);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4644);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(88326);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(80189);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4478);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(39855);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(39938);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(52738);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(79708);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(19223);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(41598);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(81995);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(26024);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(71924);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(57972);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(54263);
/* harmony import */ var _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38546);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(55567);
/* harmony import */ var _task_badge_view_task_badge_view_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(1720);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(14572);


















function TaskStatusSelectComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(0, "gauzy-task-badge-view", 3);
  }
  if (rf & 2) {
    const item_r1 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("taskBadge", item_r1);
  }
}
function TaskStatusSelectComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(0, "gauzy-task-badge-view", 3);
  }
  if (rf & 2) {
    const item_r2 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("taskBadge", item_r2);
  }
}
let TaskStatusSelectComponent = /*#__PURE__*/(() => {
  let TaskStatusSelectComponent = class TaskStatusSelectComponent extends _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_1__/* .TranslationBaseComponent */ .K {
    set projectId(value) {
      this._projectId = value;
      this.subject$.next(true); // Notify subscribers that the project ID has changed
    }
    get projectId() {
      return this._projectId;
    }
    get status() {
      return this._status;
    }
    set status(val) {
      this._status = val;
      this.onChange(val); // Notify form control value change
      this.onTouched(); // Mark as touched in form control
    }
    constructor(translateService, _store, _taskStatusesService, _errorHandlingService) {
      var _this;
      super(translateService);
      _this = this;
      this.translateService = translateService;
      this._store = _store;
      this._taskStatusesService = _taskStatusesService;
      this._errorHandlingService = _errorHandlingService;
      this.subject$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__/* .Subject */ .B();
      /**
       * A BehaviorSubject to store and emit the latest list of task statuses.
       */
      this.statuses$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__/* .BehaviorSubject */ .t([]);
      /**
       * Predefined task statuses with names and sluggable values.
       */
      this._statuses = [{
        name: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_4__/* .TaskStatusEnum */ .F.OPEN,
        value: (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_5__/* .sluggable */ .J7)(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_4__/* .TaskStatusEnum */ .F.OPEN)
      }, {
        name: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_4__/* .TaskStatusEnum */ .F.IN_PROGRESS,
        value: (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_5__/* .sluggable */ .J7)(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_4__/* .TaskStatusEnum */ .F.IN_PROGRESS)
      }, {
        name: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_4__/* .TaskStatusEnum */ .F.READY_FOR_REVIEW,
        value: (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_5__/* .sluggable */ .J7)(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_4__/* .TaskStatusEnum */ .F.READY_FOR_REVIEW)
      }, {
        name: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_4__/* .TaskStatusEnum */ .F.IN_REVIEW,
        value: (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_5__/* .sluggable */ .J7)(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_4__/* .TaskStatusEnum */ .F.IN_REVIEW)
      }, {
        name: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_4__/* .TaskStatusEnum */ .F.BLOCKED,
        value: (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_5__/* .sluggable */ .J7)(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_4__/* .TaskStatusEnum */ .F.BLOCKED)
      }, {
        name: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_4__/* .TaskStatusEnum */ .F.COMPLETED,
        value: (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_5__/* .sluggable */ .J7)(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_4__/* .TaskStatusEnum */ .F.COMPLETED)
      }];
      /**
       * Input properties for component customization.
       *
       * @property addTag - Whether adding new tags is allowed (default: true).
       */
      this.addTag = true;
      /**
       * The placeholder text to be displayed in the project selector.
       * Provides guidance to the user on what action to take or what information to provide.
       *
       */
      this.placeholder = null;
      /**
       * Enables the default selection behavior.
       * When `true`, the component may automatically select a default team upon initialization.
       *
       * @default true
       */
      this.defaultSelected = true;
      /**
       * Callback function to notify changes in the form control.
       */
      this.onChange = () => {};
      /**
       * Callback function to notify touch events in the form control.
       */
      this.onTouched = () => {};
      /**
       * EventEmitter to notify when a status is selected or changed.
       */
      this.onChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .bkB();
      /**
       * Creates a new task status from the ng-select input.
       *
       * @param name - The name of the new status to be created.
       * @returns A promise that resolves when the status is successfully created.
       */
      this.createNew = /*#__PURE__*/function () {
        var _ref = (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(function* (name) {
          if (!_this.organization) {
            return;
          }
          try {
            const {
              id: organizationId,
              tenantId
            } = _this.organization;
            // Prepare the task status payload
            const payload = {
              tenantId,
              organizationId,
              name,
              value: (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_5__/* .sluggable */ .J7)(name),
              ...(_this.projectId ? {
                projectId: _this.projectId
              } : {})
            };
            // Create the new task status and wait for completion
            yield (0,rxjs__WEBPACK_IMPORTED_MODULE_7__/* .firstValueFrom */ ._)(_this._taskStatusesService.create(payload));
          } catch (error) {
            console.error('Error while creating new task status:', error);
            _this._errorHandlingService.handleError(error);
          } finally {
            // Notify observers after creation attempt
            _this.subject$.next(true);
          }
        });
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }();
    }
    ngOnInit() {
      this.subject$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__/* .debounceTime */ .B)(200), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__/* .tap */ .M)(() => this.getStatuses()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__/* .untilDestroyed */ .s)(this)).subscribe();
    }
    ngAfterViewInit() {
      const storeOrganization$ = this._store.selectedOrganization$;
      const storeProject$ = this._store.selectedProject$;
      (0,rxjs__WEBPACK_IMPORTED_MODULE_11__/* .combineLatest */ .z)([storeOrganization$, storeProject$]).pipe((0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_5__/* .distinctUntilChange */ .nI)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_12__/* .filter */ .p)(([organization]) => !!organization), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__/* .tap */ .M)(([organization, project]) => {
        this.organization = organization;
        this.projectId = project ? project.id : null;
      }), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__/* .tap */ .M)(() => this.subject$.next(true)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__/* .untilDestroyed */ .s)(this)).subscribe();
    }
    /**
     * Updates the status value for the component.
     *
     * @param value - The task status to be written to the component.
     */
    writeValue(value) {
      this.status = value;
    }
    /**
     * Registers a callback function to be called when the status changes.
     *
     * @param fn - The function that is triggered on status change.
     */
    registerOnChange(fn) {
      this.onChange = fn;
    }
    /**
     * Registers a callback function to be called when the component is touched.
     *
     * @param fn - The function that is triggered when the component is touched.
     */
    registerOnTouched(fn) {
      this.onTouched = fn;
    }
    /**
     * Emits the selected status when a task status is chosen.
     *
     * @param status - The selected task status.
     */
    selectStatus(status) {
      this.onChanged.emit(status);
    }
    /**
     * Retrieves task statuses based on the organization and project.
     * If a project ID is available, it filters statuses accordingly.
     * Emits the list of statuses and sets the default status if none is selected.
     */
    getStatuses() {
      if (!this.organization) {
        return;
      }
      const {
        id: organizationId,
        tenantId
      } = this.organization;
      // Fetch task statuses from the service
      this._taskStatusesService.get({
        tenantId,
        organizationId,
        ...(this.projectId ? {
          projectId: this.projectId
        } : {})
      }).pipe(
      // Map the response to either the fetched statuses or a default set
      (0,rxjs__WEBPACK_IMPORTED_MODULE_13__/* .map */ .T)(({
        items,
        total
      }) => total > 0 ? items : this._statuses),
      // Update the observable with the fetched statuses
      (0,rxjs__WEBPACK_IMPORTED_MODULE_9__/* .tap */ .M)(statuses => {
        this.statuses$.next(statuses);
        // Set default status if no status is currently selected and defaultSelected is true
        if (this.defaultSelected) {
          this.setDefaultStatusIfNeeded(statuses);
        }
      }), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__/* .untilDestroyed */ .s)(this) // Clean up the subscription when component is destroyed
      ).subscribe();
    }
    /**
     * Sets the default status for the task if no status is currently assigned.
     *
     * This method checks if the `status` property is not set. If it is not set,
     * it looks for the default status in the provided array of statuses.
     * If found, it assigns this default status to the `status` property and triggers
     * the `onChange` callback with the default status.
     *
     * @param statuses - An array of task statuses to search for the default status.
     *                   It should contain objects that implement the `ITaskStatus` interface.
     */
    setDefaultStatusIfNeeded(statuses) {
      if (!this.status) {
        const defaultStatus = statuses.find(status => status.name === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_4__/* .TaskStatusEnum */ .F.OPEN);
        if (defaultStatus) {
          this.status = defaultStatus;
          this.onChange(defaultStatus);
        }
      }
    }
    ngOnDestroy() {}
    static {
      this.ɵfac = function TaskStatusSelectComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || TaskStatusSelectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__/* .TranslateService */ .c$), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_15__/* .Store */ .il), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_16__/* .TaskStatusesService */ .f), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_17__/* .ErrorHandlingService */ .X));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: TaskStatusSelectComponent,
        selectors: [["ga-task-status-select"]],
        inputs: {
          addTag: "addTag",
          placeholder: "placeholder",
          defaultSelected: "defaultSelected",
          projectId: "projectId"
        },
        outputs: {
          onChanged: "onChanged"
        },
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵProvidersFeature"] */ .Jv_([{
          provide: _angular_forms__WEBPACK_IMPORTED_MODULE_18__/* .NG_VALUE_ACCESSOR */ .kq,
          useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__/* .forwardRef */ .Rfq)(() => TaskStatusSelectComponent),
          multi: true
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
        decls: 5,
        vars: 8,
        consts: [["appendTo", "body", "bindLabel", "name", 3, "change", "ngModelChange", "ngModel", "addTag", "items", "placeholder"], ["ng-option-tmp", ""], ["ng-label-tmp", ""], [3, "taskBadge"]],
        template: function TaskStatusSelectComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "ng-select", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(1, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("change", function TaskStatusSelectComponent_Template_ng_select_change_0_listener($event) {
              return ctx.selectStatus($event);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayListener"] */ .mxI("ngModelChange", function TaskStatusSelectComponent_Template_ng_select_ngModelChange_0_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayBindingSet"] */ .DH7(ctx.status, $event) || (ctx.status = $event);
              return $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(3, TaskStatusSelectComponent_ng_template_3_Template, 1, 1, "ng-template", 1)(4, TaskStatusSelectComponent_ng_template_4_Template, 1, 1, "ng-template", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayProperty"] */ .R50("ngModel", ctx.status);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("addTag", ctx.addTag ? ctx.createNew : null)("items", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(1, 4, ctx.statuses$))("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(2, 6, ctx.placeholder || "TASKS_PAGE.TASKS_STATUS"));
          }
        },
        dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_18__/* .NgControlStatus */ .BC, _angular_forms__WEBPACK_IMPORTED_MODULE_18__/* .NgModel */ .vS, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_19__/* .NgSelectComponent */ .vr, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_19__/* .NgOptionTemplateDirective */ .Uq, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_19__/* .NgLabelTemplateDirective */ .ZZ, _task_badge_view_task_badge_view_component__WEBPACK_IMPORTED_MODULE_20__/* .TaskBadgeViewComponent */ .Z, _angular_common__WEBPACK_IMPORTED_MODULE_21__/* .AsyncPipe */ .Jj, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__/* .TranslatePipe */ .D9],
        encapsulation: 2
      });
    }
  };
  TaskStatusSelectComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_22__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__/* .UntilDestroy */ .d)({
    checkProperties: true
  }), (0,tslib__WEBPACK_IMPORTED_MODULE_22__/* .__metadata */ .Sn)("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__/* .TranslateService */ .c$, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_15__/* .Store */ .il, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_16__/* .TaskStatusesService */ .f, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_17__/* .ErrorHandlingService */ .X])], TaskStatusSelectComponent);
  return TaskStatusSelectComponent;
})();


/***/ }),

/***/ 26954:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O: () => (/* binding */ TaskSizeSelectComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(73014);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(55598);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(10936);
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(88326);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4644);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(80189);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4478);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(39938);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(39855);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(52738);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(79708);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(19223);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(89380);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(26024);
/* harmony import */ var _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38546);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(41598);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(15480);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(71924);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(99236);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(55567);
/* harmony import */ var _task_badge_view_task_badge_view_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(1720);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(14572);






















function TaskSizeSelectComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(0, "gauzy-task-badge-view", 4);
  }
  if (rf & 2) {
    const item_r3 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("taskBadge", item_r3);
  }
}
function TaskSizeSelectComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(0, "gauzy-task-badge-view", 4);
  }
  if (rf & 2) {
    const item_r4 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("taskBadge", item_r4);
  }
}
let TaskSizeSelectComponent = /*#__PURE__*/(() => {
  let TaskSizeSelectComponent = class TaskSizeSelectComponent extends _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_1__/* .TranslationBaseComponent */ .K {
    get projectId() {
      return this._projectId;
    }
    set projectId(value) {
      this._projectId = value;
      this.subject$.next(true);
    }
    get addTag() {
      return this._addTag;
    }
    set addTag(value) {
      this._addTag = value;
    }
    get placeholder() {
      return this._placeholder;
    }
    set placeholder(value) {
      this._placeholder = value;
    }
    set size(val) {
      this._size = val;
      this.onChange(val);
      this.onTouched(val);
    }
    get size() {
      return this._size;
    }
    constructor(translateService, store, taskSizesService, toastrService) {
      var _this;
      super(translateService);
      _this = this;
      this.translateService = translateService;
      this.store = store;
      this.taskSizesService = taskSizesService;
      this.toastrService = toastrService;
      this.subject$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__/* .Subject */ .B();
      this.sizes$ = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_3__/* .BehaviorSubject */ .t([]);
      /**
       * Default global task sizes
       */
      this._sizes = [{
        name: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_4__/* .TaskSizeEnum */ .w.X_LARGE,
        value: (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_5__/* .sluggable */ .J7)(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_4__/* .TaskSizeEnum */ .w.X_LARGE)
      }, {
        name: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_4__/* .TaskSizeEnum */ .w.LARGE,
        value: (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_5__/* .sluggable */ .J7)(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_4__/* .TaskSizeEnum */ .w.LARGE)
      }, {
        name: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_4__/* .TaskSizeEnum */ .w.MEDIUM,
        value: (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_5__/* .sluggable */ .J7)(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_4__/* .TaskSizeEnum */ .w.MEDIUM)
      }, {
        name: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_4__/* .TaskSizeEnum */ .w.SMALL,
        value: (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_5__/* .sluggable */ .J7)(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_4__/* .TaskSizeEnum */ .w.SMALL)
      }, {
        name: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_4__/* .TaskSizeEnum */ .w.TINY,
        value: (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_5__/* .sluggable */ .J7)(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_4__/* .TaskSizeEnum */ .w.TINY)
      }];
      /*
       * Getter & Setter for dynamic add tag option
       */
      this._addTag = true;
      this.onChange = () => {};
      this.onTouched = () => {};
      this.onChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .bkB();
      /**
       * Create new size from ng-select tag
       *
       * @param name
       * @returns
       */
      this.createNew = /*#__PURE__*/function () {
        var _ref = (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(function* (name) {
          if (!_this.organization) {
            return;
          }
          try {
            const {
              tenantId
            } = _this.store.user;
            const {
              id: organizationId
            } = _this.organization;
            const source = _this.taskSizesService.create({
              tenantId,
              organizationId,
              name,
              ...(_this.projectId ? {
                projectId: _this.projectId
              } : {})
            });
            const size = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_7__/* .firstValueFrom */ ._)(source);
            if (size.value) {
              _this.size = size;
            }
          } catch (error) {
            _this.toastrService.error(error);
          } finally {
            _this.subject$.next(true);
          }
        });
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }();
    }
    ngOnInit() {
      this.subject$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__/* .debounceTime */ .B)(200), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .tap */ .M)(() => this.getTaskSizes()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__/* .untilDestroyed */ .s)(this)).subscribe();
    }
    ngAfterViewInit() {
      const storeOrganization$ = this.store.selectedOrganization$;
      const storeProject$ = this.store.selectedProject$;
      (0,rxjs__WEBPACK_IMPORTED_MODULE_11__/* .combineLatest */ .z)([storeOrganization$, storeProject$]).pipe((0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_5__/* .distinctUntilChange */ .nI)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__/* .filter */ .p)(([organization]) => !!organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .tap */ .M)(([organization, project]) => {
        this.organization = organization;
        this.projectId = project ? project.id : null;
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .tap */ .M)(() => this.subject$.next(true)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__/* .untilDestroyed */ .s)(this)).subscribe();
    }
    writeValue(value) {
      this.size = value;
    }
    registerOnChange(fn) {
      this.onChange = fn;
    }
    registerOnTouched(fn) {
      this.onTouched = fn;
    }
    selectSize(size) {
      this.onChanged.emit(size);
    }
    /**
     * Get task sizes based organization & project
     */
    getTaskSizes() {
      if (!this.organization) {
        return;
      }
      const {
        tenantId
      } = this.store.user;
      const {
        id: organizationId
      } = this.organization;
      this.taskSizesService.get({
        tenantId,
        organizationId,
        ...(this.projectId ? {
          projectId: this.projectId
        } : {})
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__/* .map */ .T)(({
        items,
        total
      }) => total > 0 ? items : this._sizes), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .tap */ .M)(sizes => this.sizes$.next(sizes)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__/* .untilDestroyed */ .s)(this)).subscribe();
    }
    ngOnDestroy() {}
    static {
      this.ɵfac = function TaskSizeSelectComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || TaskSizeSelectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__/* .TranslateService */ .c$), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_15__/* .Store */ .il), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_16__/* .TaskSizesService */ .L), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_17__/* .ToastrService */ .t));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: TaskSizeSelectComponent,
        selectors: [["ga-task-size-select"]],
        inputs: {
          projectId: "projectId",
          addTag: "addTag",
          placeholder: "placeholder"
        },
        outputs: {
          onChanged: "onChanged"
        },
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵProvidersFeature"] */ .Jv_([{
          provide: _angular_forms__WEBPACK_IMPORTED_MODULE_18__/* .NG_VALUE_ACCESSOR */ .kq,
          useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__/* .forwardRef */ .Rfq)(() => TaskSizeSelectComponent),
          multi: true
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
        decls: 6,
        vars: 9,
        consts: [["select", ""], ["bindLabel", "name", 3, "change", "clear", "ngModelChange", "ngModel", "addTag", "clearable", "items", "placeholder"], ["ng-option-tmp", ""], ["ng-label-tmp", ""], [3, "taskBadge"]],
        template: function TaskSizeSelectComponent_Template(rf, ctx) {
          if (rf & 1) {
            const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "ng-select", 1, 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(3, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("change", function TaskSizeSelectComponent_Template_ng_select_change_0_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              const select_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(1);
              ctx.selectSize($event);
              return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(select_r2.blur());
            })("clear", function TaskSizeSelectComponent_Template_ng_select_clear_0_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              const select_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(select_r2.blur());
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayListener"] */ .mxI("ngModelChange", function TaskSizeSelectComponent_Template_ng_select_ngModelChange_0_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayBindingSet"] */ .DH7(ctx.size, $event) || (ctx.size = $event);
              return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj($event);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(4, TaskSizeSelectComponent_ng_template_4_Template, 1, 1, "ng-template", 2)(5, TaskSizeSelectComponent_ng_template_5_Template, 1, 1, "ng-template", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayProperty"] */ .R50("ngModel", ctx.size);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("addTag", ctx.addTag ? ctx.createNew : null)("clearable", true)("items", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(2, 5, ctx.sizes$))("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(3, 7, ctx.placeholder || "TASKS_PAGE.TASK_SIZE"));
          }
        },
        dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_18__/* .NgControlStatus */ .BC, _angular_forms__WEBPACK_IMPORTED_MODULE_18__/* .NgModel */ .vS, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_19__/* .NgSelectComponent */ .vr, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_19__/* .NgOptionTemplateDirective */ .Uq, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_19__/* .NgLabelTemplateDirective */ .ZZ, _task_badge_view_task_badge_view_component__WEBPACK_IMPORTED_MODULE_20__/* .TaskBadgeViewComponent */ .Z, _angular_common__WEBPACK_IMPORTED_MODULE_21__/* .AsyncPipe */ .Jj, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__/* .TranslatePipe */ .D9],
        encapsulation: 2
      });
    }
  };
  TaskSizeSelectComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_22__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__/* .UntilDestroy */ .d)({
    checkProperties: true
  }), (0,tslib__WEBPACK_IMPORTED_MODULE_22__/* .__metadata */ .Sn)("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__/* .TranslateService */ .c$, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_15__/* .Store */ .il, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_16__/* .TaskSizesService */ .L, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_17__/* .ToastrService */ .t])], TaskSizeSelectComponent);
  return TaskSizeSelectComponent;
})();


/***/ }),

/***/ 38956:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: () => (/* binding */ AddTaskDialogComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(73014);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(55598);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10936);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(56383);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(19223);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20381);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(80189);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(52738);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(39855);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(41598);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(26024);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(61998);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(81995);
/* harmony import */ var _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38546);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(71924);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(88319);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(38736);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(5855);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(77096);
/* harmony import */ var _ckeditor_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(98106);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26860);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(14572);
/* harmony import */ var ckeditor4_angular__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(76166);
/* harmony import */ var _employee_employee_multi_select_employee_multi_select_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(57354);
/* harmony import */ var _tags_tags_color_input_tags_color_input_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(62177);
/* harmony import */ var _selectors_project_project_project_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(46582);
/* harmony import */ var _task_status_select_task_status_select_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(25448);
/* harmony import */ var _task_priority_select_task_priority_select_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(18912);
/* harmony import */ var _task_size_select_task_size_select_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(26954);
/* harmony import */ var _task_number_task_number_field_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(45997);
/* harmony import */ var _task_select_task_task_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(33765);

var AddTaskDialogComponent_1;




























function AddTaskDialogComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "div", 9)(1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(2, "ngx-task-number-field", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("formControl", ctx_r1.form.get("number"))("projectId", ctx_r1.getControlValue("projectId"))("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(3, 3, "TASKS_PAGE.TASK_NUMBER"));
  }
}
function AddTaskDialogComponent_nb_option_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "nb-option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const module_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("value", module_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", module_r3.name, " ");
  }
}
function AddTaskDialogComponent_ng_container_52_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(1, "ga-employee-multi-select", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("selectedChange", function AddTaskDialogComponent_ng_container_52_Template_ga_employee_multi_select_selectedChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx_r1.onMembersSelected($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("selectedEmployeeIds", ctx_r1.selectedMembers)("allEmployees", ctx_r1.employees);
  }
}
function AddTaskDialogComponent_ng_container_53_nb_option_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "nb-option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const team_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("value", team_r6.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", team_r6.name, "");
  }
}
function AddTaskDialogComponent_ng_container_53_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(1, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(4, "nb-select", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("selectedChange", function AddTaskDialogComponent_ng_container_53_Template_nb_select_selectedChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx_r1.onTeamsSelected($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(6, AddTaskDialogComponent_ng_container_53_nb_option_6_Template, 2, 2, "nb-option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(3, 4, "TASKS_PAGE.TASK_TEAMS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("selected", ctx_r1.selectedTeams)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(5, 6, "FORM.PLACEHOLDERS.CHOOSE_TEAMS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx_r1.teams);
  }
}
let AddTaskDialogComponent = /*#__PURE__*/(() => {
  let AddTaskDialogComponent = class AddTaskDialogComponent extends _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_2__/* .TranslationBaseComponent */ .K {
    static {
      AddTaskDialogComponent_1 = this;
    }
    constructor(dialogRef, fb, store, translateService, employeesService, tasksService, organizationTeamsService, organizationProjectModuleService) {
      super(translateService);
      this.dialogRef = dialogRef;
      this.fb = fb;
      this.store = store;
      this.translateService = translateService;
      this.employeesService = employeesService;
      this.tasksService = tasksService;
      this.organizationTeamsService = organizationTeamsService;
      this.organizationProjectModuleService = organizationProjectModuleService;
      this.employees = [];
      this.teams = [];
      this.selectedMembers = [];
      this.selectedTeams = [];
      this.selectedModules = [];
      this.availableModules = [];
      this.taskParticipantEnum = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__/* .TaskParticipantEnum */ .S;
      this.participants = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__/* .TaskParticipantEnum */ .S.EMPLOYEES;
      this.ckConfig = _ckeditor_config__WEBPACK_IMPORTED_MODULE_4__/* .richTextCKEditorConfig */ .Z;
      this.createTask = false;
      /*
       * Payment Mutation Form
       */
      this.form = AddTaskDialogComponent_1.buildForm(this.fb);
    }
    static buildForm(fb) {
      return fb.group({
        number: [{
          value: '',
          disabled: true
        }],
        title: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .Validators */ .k0.required],
        project: [],
        projectId: [],
        parentId: [],
        status: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_6__/* .TaskStatusEnum */ .F.OPEN, _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .Validators */ .k0.required],
        priority: [],
        size: [],
        members: [],
        estimateDays: [],
        estimateHours: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .Validators */ .k0.min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .Validators */ .k0.max(23)]],
        estimateMinutes: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .Validators */ .k0.min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .Validators */ .k0.max(59)]],
        dueDate: [],
        description: [],
        tags: [],
        teams: [],
        modules: [],
        taskStatus: [],
        taskSize: [],
        taskPriority: []
      });
    }
    get task() {
      return this._task;
    }
    set task(value) {
      this.selectedTask = value;
      this._task = value;
    }
    ngOnInit() {
      this.ckConfig.editorplaceholder = this.translateService.instant('FORM.PLACEHOLDERS.DESCRIPTION');
      const storeOrganization$ = this.store.selectedOrganization$;
      const storeEmployee$ = this.store.selectedEmployee$;
      const storeProject$ = this.store.selectedProject$;
      storeOrganization$.pipe((0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_7__/* .distinctUntilChange */ .nI)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .filter */ .p)(organization => !!organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .tap */ .M)(organization => this.organization = organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .tap */ .M)(() => this.loadEmployees()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .tap */ .M)(() => this.loadTeams()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .tap */ .M)(() => this.loadAvailableModules()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .tap */ .M)(() => this.initializeForm()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__/* .untilDestroyed */ .s)(this)).subscribe();
      storeEmployee$.pipe((0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_7__/* .distinctUntilChange */ .nI)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .filter */ .p)(employee => !!employee && !!employee.id), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .tap */ .M)(employee => {
        if (!this.selectedTask) {
          this.selectedMembers.push(employee.id);
        }
      }), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__/* .untilDestroyed */ .s)(this)).subscribe();
      storeProject$.pipe((0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_7__/* .distinctUntilChange */ .nI)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .filter */ .p)(project => !!project && !!project.id), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .tap */ .M)(project => {
        if (!this.selectedTask) {
          this.form.get('project').setValue(project);
          this.form.get('projectId').setValue(project.id);
          this.form.updateValueAndValidity();
        }
      }), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__/* .untilDestroyed */ .s)(this)).subscribe();
      this.form.get('projectId').valueChanges.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__/* .untilDestroyed */ .s)(this)).subscribe(() => this.loadAvailableModules());
    }
    initializeForm() {
      if (this.selectedTask) {
        const {
          description,
          dueDate,
          estimate,
          members,
          project,
          parent,
          status,
          tags,
          teams,
          title,
          priority,
          size,
          taskStatus,
          taskSize,
          modules,
          taskPriority
        } = this.selectedTask;
        const duration = moment__WEBPACK_IMPORTED_MODULE_0__.duration(estimate, 'seconds');
        this.selectedMembers = (members || []).map(member => member.id);
        this.selectedTeams = (teams || []).map(team => team.id);
        this.selectedModules = (modules || []).map(module => module.id);
        if (teams && teams.length > 0) {
          this.participants = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__/* .TaskParticipantEnum */ .S.TEAMS;
        }
        this.form.patchValue({
          title,
          project,
          projectId: project ? project.id : null,
          parentId: parent ? parent.id : null,
          status,
          priority,
          size,
          estimateDays: duration.days(),
          estimateHours: duration.hours(),
          estimateMinutes: duration.minutes(),
          dueDate: dueDate ? new Date(dueDate) : null,
          description,
          tags,
          teams: this.selectedTeams,
          members: this.selectedMembers,
          modules: this.selectedModules,
          taskStatus,
          taskSize,
          taskPriority
        });
      }
    }
    onSave() {
      if (this.form.valid) {
        // Reset both fields to ensure only one is sent based on the selection
        this.form.get('members').setValue([]);
        this.form.get('teams').setValue([]);
        if (this.participants === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__/* .TaskParticipantEnum */ .S.EMPLOYEES) {
          this.form.get('members').setValue((this.selectedMembers || []).map(id => this.employees.find(e => e.id === id)).filter(e => !!e) // Only valid employees
          );
        } else if (this.participants === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__/* .TaskParticipantEnum */ .S.TEAMS) {
          this.form.get('teams').setValue((this.selectedTeams || []).map(id => this.teams.find(e => e.id === id)).filter(e => !!e) // Only valid teams
          );
        }
        const selectedModules = this.selectedModules || [];
        const mappedModules = selectedModules.map(id => this.availableModules?.find(e => e?.id === id)).filter(Boolean);
        this.form.get('modules')?.setValue(mappedModules);
        this.form.get('status').setValue(this.form.get('taskStatus').value?.name);
        this.form.get('priority').setValue(this.form.get('taskPriority').value?.name);
        this.form.get('size').setValue(this.form.get('taskSize').value?.name);
        const {
          estimateDays,
          estimateHours,
          estimateMinutes
        } = this.form.value;
        const estimate = estimateDays * 24 * 60 * 60 + estimateHours * 60 * 60 + estimateMinutes * 60;
        estimate ? this.form.value.estimate = estimate : this.form.value.estimate = null;
        if (this.createTask) {
          (0,rxjs__WEBPACK_IMPORTED_MODULE_11__/* .firstValueFrom */ ._)(this.tasksService.createTask(this.form.value)).then(task => {
            this.dialogRef.close(task);
          });
        } else {
          this.dialogRef.close(this.form.value);
        }
      }
    }
    selectedTagsHandler(tags) {
      this.form.get('tags').setValue(tags);
      this.form.get('tags').updateValueAndValidity();
    }
    selectedProject(project) {
      this.form.get('project').setValue(project);
      this.form.get('project').updateValueAndValidity();
    }
    loadEmployees() {
      var _this = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A)(function* () {
        if (!_this.organization) {
          return;
        }
        const {
          tenantId
        } = _this.store.user;
        const {
          id: organizationId
        } = _this.organization;
        const {
          items = []
        } = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_11__/* .firstValueFrom */ ._)(_this.employeesService.getAll(['user'], {
          organizationId,
          tenantId
        }));
        _this.employees = items;
      })();
    }
    onMembersSelected(members) {
      this.selectedMembers = members;
    }
    loadTeams() {
      var _this2 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A)(function* () {
        if (!_this2.organization) {
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
        } = yield _this2.organizationTeamsService.getAll(['members'], {
          organizationId,
          tenantId
        });
        _this2.teams = items;
      })();
    }
    onParticipantsChange(participants) {
      this.participants = participants;
    }
    onTeamsSelected(teamsSelection) {
      this.selectedTeams = teamsSelection;
    }
    onModulesSelected(modules) {
      this.selectedModules = modules;
    }
    /**
     * Loads available modules based on the selected project ID.
     */
    loadAvailableModules() {
      var _this3 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A)(function* () {
        if (!_this3.organization || !_this3.form.get('projectId')?.value) return;
        const modules = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_11__/* .firstValueFrom */ ._)(_this3.organizationProjectModuleService.getAllModulesByProjectId({
          projectId: _this3.form.get('projectId')?.value
        }));
        _this3.availableModules = modules?.items || [];
      })();
    }
    /**
     * Retrieves the value of a form control by its name.
     *
     * @param control - The name of the form control whose value is to be retrieved.
     * @returns string - The value of the form control. If the control is not found or the value is null, an empty string is returned.
     */
    getControlValue(control) {
      // Retrieve the form control using the given control name.
      const formControl = this.form.get(control);
      // If the control exists, return its value. Otherwise, return an empty string.
      return formControl ? formControl.value : '';
    }
    static {
      this.ɵfac = function AddTaskDialogComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || AddTaskDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_nebular_theme__WEBPACK_IMPORTED_MODULE_13__/* .NbDialogRef */ .ybQ), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .UntypedFormBuilder */ .ze), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_14__/* .Store */ .il), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__/* .TranslateService */ .c$), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_16__/* .EmployeesService */ .r), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_17__/* .TasksService */ .w), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_18__/* .OrganizationTeamsService */ .F), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_19__/* .OrganizationProjectModuleService */ .k));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineComponent"] */ .VBU({
        type: AddTaskDialogComponent,
        selectors: [["ngx-add-task-dialog"]],
        inputs: {
          createTask: "createTask",
          task: "task"
        },
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
        decls: 115,
        vars: 102,
        consts: [["taskDueDatePicker", ""], [1, "main"], [1, "d-flex", "flex-column"], [1, "cancel"], [1, "fas", "fa-times", 3, "click"], [1, "title"], [1, "body"], [3, "formGroup"], [3, "ngIf"], [1, "row"], [1, "col-sm-6"], [1, "form-group"], [1, "label"], ["formControlName", "projectId", 3, "onChanged", "placeholder", "skipGlobalChange", "defaultSelected", "showAllOption"], ["formControlName", "taskStatus", 3, "projectId", "placeholder"], [1, "col-sm-12"], ["formControlName", "modules", "fullWidth", "", "multiple", "", 3, "selectedChange", "placeholder", "selected"], [3, "value", 4, "ngFor", "ngForOf"], ["name", "parentId", "formControlName", "parentId", 3, "projectId", "required"], [3, "valueChange", "value"], [1, "nb-radio", 3, "value"], [4, "ngIf"], ["formControlName", "title", "type", "text", "nbInput", "", 1, "name-input", 3, "placeholder"], ["formControlName", "taskPriority", 3, "projectId", "placeholder"], ["formControlName", "taskSize", 3, "projectId", "placeholder"], [3, "selectedTagsEvent", "selectedTags", "isOrgLevel"], ["for", "dueDate", 1, "label"], ["formControlName", "dueDate", "type", "text", "nbInput", "", "id", "dueDate", "fullWidth", "", 3, "placeholder", "nbDatepicker"], [1, "estimate-inputs"], ["formControlName", "estimateDays", "type", "number", "nbInput", "", 3, "min", "placeholder"], ["formControlName", "estimateHours", "type", "number", "min", "0", "max", "23", "nbInput", "", 3, "min", "status", "placeholder"], ["formControlName", "estimateMinutes", "type", "number", "min", "0", "max", "59", "nbInput", "", 3, "min", "status", "placeholder"], ["formControlName", "description", 1, "description", 3, "config"], [1, "text-left"], ["status", "basic", "outline", "", "nbButton", "", 1, "mr-3", 3, "click"], ["status", "success", "nbButton", "", 3, "click", "disabled"], ["formControlName", "number", 3, "formControl", "projectId", "placeholder"], [3, "value"], [3, "selectedChange", "selectedEmployeeIds", "allEmployees"], ["formControlName", "teams", "multiple", "", "fullWidth", "", 3, "selectedChange", "selected", "placeholder"]],
        template: function AddTaskDialogComponent_Template(rf, ctx) {
          if (rf & 1) {
            const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetCurrentView"] */ .RV6();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "nb-card", 1)(1, "nb-card-header", 2)(2, "div", 3)(3, "i", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("click", function AddTaskDialogComponent_Template_i_click_3_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx.dialogRef.close());
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(4, "h5", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(6, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(7, "nb-card-body", 6)(8, "form", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(9, AddTaskDialogComponent_ng_template_9_Template, 4, 5, "ng-template", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(10, "div", 9)(11, "div", 10)(12, "div", 11)(13, "label", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(15, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(16, "ga-project-selector", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(17, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("onChanged", function AddTaskDialogComponent_Template_ga_project_selector_onChanged_16_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx.selectedProject($event));
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(18, "div", 10)(19, "div", 11)(20, "label", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(21);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(22, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(23, "ga-task-status-select", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(24, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(25, "div", 9)(26, "div", 15)(27, "div", 11)(28, "label", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(29);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(30, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(31, "nb-select", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(32, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("selectedChange", function AddTaskDialogComponent_Template_nb_select_selectedChange_31_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx.onModulesSelected($event));
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(33, AddTaskDialogComponent_nb_option_33_Template, 2, 2, "nb-option", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(34, "div", 9)(35, "div", 15)(36, "div", 11)(37, "label", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(38);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(39, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(40, "ga-task-selector", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(41, "div", 9)(42, "div", 15)(43, "nb-radio-group", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("valueChange", function AddTaskDialogComponent_Template_nb_radio_group_valueChange_43_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx.onParticipantsChange($event));
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(44, "nb-radio", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(45);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(46, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(47, "nb-radio", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(48);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(49, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(50, "div", 15)(51, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(52, AddTaskDialogComponent_ng_container_52_Template, 2, 2, "ng-container", 21)(53, AddTaskDialogComponent_ng_container_53_Template, 7, 8, "ng-container", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(54, "div", 9)(55, "div", 15)(56, "div", 11)(57, "label", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(58);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(59, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(60, "input", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(61, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(62, "div", 10)(63, "div", 11)(64, "label", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(65);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(66, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(67, "ga-task-priority-select", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(68, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(69, "div", 10)(70, "div", 11)(71, "label", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(72);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(73, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(74, "ga-task-size-select", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(75, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(76, "div", 15)(77, "div", 11)(78, "ga-tags-color-input", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("selectedTagsEvent", function AddTaskDialogComponent_Template_ga_tags_color_input_selectedTagsEvent_78_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx.selectedTagsHandler($event));
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(79, "div", 9)(80, "div", 10)(81, "div", 11)(82, "label", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(83);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(84, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(85, "input", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(86, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(87, "nb-datepicker", null, 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(89, "div", 10)(90, "div", 11)(91, "label", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(92);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(93, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(94, "div", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(95, "input", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(96, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(97, "input", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(98, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(99, "input", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(100, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(101, "div", 9)(102, "div", 15)(103, "div", 11)(104, "label", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(105);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(106, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(107, "ckeditor", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(108, "nb-card-footer", 33)(109, "button", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("click", function AddTaskDialogComponent_Template_button_click_109_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx.dialogRef.close());
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(110);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(111, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(112, "button", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("click", function AddTaskDialogComponent_Template_button_click_112_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx.onSave());
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(113);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(114, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()();
          }
          if (rf & 2) {
            const taskDueDatePicker_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵreference"] */ .sdS(88);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(6, 52, ctx.selectedTask && ctx.selectedTask.id ? "TASKS_PAGE.EDIT_TASKS" : "TASKS_PAGE.ADD_TASKS"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("formGroup", ctx.form);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngIf", !(ctx.selectedTask && ctx.selectedTask.id));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(15, 54, "CONTEXT_MENU.PROJECT"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(17, 56, "CONTEXT_MENU.PROJECT"))("skipGlobalChange", true)("defaultSelected", false)("showAllOption", false);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(22, 58, "TASKS_PAGE.TASKS_STATUS"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("projectId", ctx.getControlValue("projectId"))("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(24, 60, "TASKS_PAGE.TASKS_STATUS"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(30, 62, "TASKS_PAGE.MODULE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(32, 64, "TASKS_PAGE.SELECT_MODULE"))("selected", ctx.selectedModules);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx.availableModules);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(39, 66, "TASKS_PAGE.PARENT_TASK"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("projectId", ctx.getControlValue("projectId"))("required", ctx.organization == null ? null : ctx.organization.requireTask);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("value", ctx.participants);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("value", ctx.taskParticipantEnum.EMPLOYEES);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI("", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(46, 68, "TASKS_PAGE.TASK_MEMBERS"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("value", ctx.taskParticipantEnum.TEAMS);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI("", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(49, 70, "TASKS_PAGE.TASK_TEAMS"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.participants === ctx.taskParticipantEnum.EMPLOYEES);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.participants === ctx.taskParticipantEnum.TEAMS);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(59, 72, "TASKS_PAGE.TASKS_TITLE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(61, 74, "FORM.PLACEHOLDERS.ADD_TITLE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(66, 76, "TASKS_PAGE.TASK_PRIORITY"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("projectId", ctx.form.get("projectId").value)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(68, 78, "TASKS_PAGE.TASK_PRIORITY"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(73, 80, "TASKS_PAGE.TASK_SIZE"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("projectId", ctx.form.get("projectId").value)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(75, 82, "TASKS_PAGE.TASK_SIZE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("selectedTags", ctx.form.get("tags").value)("isOrgLevel", true);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(84, 84, "TASKS_PAGE.DUE_DATE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(86, 86, "TASKS_PAGE.DUE_DATE"))("nbDatepicker", taskDueDatePicker_r7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(93, 88, "TASKS_PAGE.ESTIMATE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("min", 0)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(96, 90, "TASKS_PAGE.ESTIMATE_DAYS"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("min", 0)("status", ctx.form.get("estimateHours").errors ? "danger" : "basic")("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(98, 92, "TASKS_PAGE.ESTIMATE_HOURS"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("min", 0)("status", ctx.form.get("estimateMinutes").errors ? "danger" : "basic")("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(100, 94, "TASKS_PAGE.ESTIMATE_MINUTES"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(106, 96, "TASKS_PAGE.TASKS_DESCRIPTION"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("config", ctx.ckConfig);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(111, 98, "BUTTONS.CANCEL"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("disabled", ctx.form.invalid);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(114, 100, "BUTTONS.SAVE"), " ");
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_20__/* .NgForOf */ .Sq, _angular_common__WEBPACK_IMPORTED_MODULE_20__/* .NgIf */ .bT, _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* ["ɵNgNoValidate"] */ .qT, _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .DefaultValueAccessor */ .me, _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .NumberValueAccessor */ .Q0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .NgControlStatus */ .BC, _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .NgControlStatusGroup */ .cb, _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .RequiredValidator */ .YS, _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .MinValidator */ .VZ, _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .MaxValidator */ .zX, _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .FormControlDirective */ .l_, _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .FormGroupDirective */ .j4, _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .FormControlName */ .JD, ckeditor4_angular__WEBPACK_IMPORTED_MODULE_21__/* .CKEditorComponent */ .h, _nebular_theme__WEBPACK_IMPORTED_MODULE_13__/* .NbButtonComponent */ .YP2, _nebular_theme__WEBPACK_IMPORTED_MODULE_13__/* .NbCardComponent */ .SrT, _nebular_theme__WEBPACK_IMPORTED_MODULE_13__/* .NbCardBodyComponent */ .KH5, _nebular_theme__WEBPACK_IMPORTED_MODULE_13__/* .NbCardFooterComponent */ .VDm, _nebular_theme__WEBPACK_IMPORTED_MODULE_13__/* .NbCardHeaderComponent */ .zJv, _nebular_theme__WEBPACK_IMPORTED_MODULE_13__/* .NbDatepickerDirective */ .OA9, _nebular_theme__WEBPACK_IMPORTED_MODULE_13__/* .NbDatepickerComponent */ .k2z, _nebular_theme__WEBPACK_IMPORTED_MODULE_13__/* .NbInputDirective */ .i6h, _nebular_theme__WEBPACK_IMPORTED_MODULE_13__/* .NbRadioComponent */ .XIt, _nebular_theme__WEBPACK_IMPORTED_MODULE_13__/* .NbRadioGroupComponent */ .yZH, _nebular_theme__WEBPACK_IMPORTED_MODULE_13__/* .NbSelectComponent */ .S81, _nebular_theme__WEBPACK_IMPORTED_MODULE_13__/* .NbOptionComponent */ .ZJ2, _employee_employee_multi_select_employee_multi_select_component__WEBPACK_IMPORTED_MODULE_22__/* .EmployeeSelectComponent */ .O, _tags_tags_color_input_tags_color_input_component__WEBPACK_IMPORTED_MODULE_23__/* .TagsColorInputComponent */ .i, _selectors_project_project_project_component__WEBPACK_IMPORTED_MODULE_24__/* .ProjectSelectorComponent */ .a, _task_status_select_task_status_select_component__WEBPACK_IMPORTED_MODULE_25__/* .TaskStatusSelectComponent */ .v, _task_priority_select_task_priority_select_component__WEBPACK_IMPORTED_MODULE_26__/* .TaskPrioritySelectComponent */ .Z, _task_size_select_task_size_select_component__WEBPACK_IMPORTED_MODULE_27__/* .TaskSizeSelectComponent */ .O, _task_number_task_number_field_component__WEBPACK_IMPORTED_MODULE_28__/* .TaskNumberFieldComponent */ .C, _task_select_task_task_component__WEBPACK_IMPORTED_MODULE_29__/* .TaskSelectorComponent */ .W, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__/* .TranslatePipe */ .D9],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   i[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n}\n[dir=ltr]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n[dir=rtl]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--gauzy-text-color-1);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(245, 109, 88, 0.3);\n  border-width: 2px;\n  color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(245, 109, 88, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 16px;\n  letter-spacing: 0em;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(126, 126, 143, 0.3);\n  border-width: 2px;\n  color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(126, 126, 143, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(37, 184, 105, 0.3);\n  border-width: 2px;\n  color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(37, 184, 105, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[disabled][_ngcontent-%COMP%], \n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic.btn-disabled[_ngcontent-%COMP%] {\n  background-color: var(--button-outline-basic-disabled-background-color);\n  border-color: var(--button-outline-basic-disabled-border-color);\n  color: var(--button-outline-basic-disabled-text-color);\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].primary.appearance-filled.status-primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  border: unset;\n  background-color: var(--color-primary-transparent-default);\n  box-shadow: var(--gauzy-shadow) 0, 0, 0, 0.15;\n}\n[dir=ltr]   [_nghost-%COMP%]     input, \n[dir=ltr]   [_nghost-%COMP%]     textarea {\n  text-align: start;\n}\n[dir=rtl]   [_nghost-%COMP%]     input, \n[dir=rtl]   [_nghost-%COMP%]     textarea {\n  text-align: end;\n}\n[_nghost-%COMP%]     input, \n[_nghost-%COMP%]     nb-select.appearance-outline.status-basic .select-button, \n[_nghost-%COMP%]     .ng-select .ng-select-container {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n  height: 42px !important;\n}\n[_nghost-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder, \n[_nghost-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {\n  top: unset !important;\n}\n[_nghost-%COMP%]     label, \n[_nghost-%COMP%]     .label {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  color: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]     textarea {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n}\n[_nghost-%COMP%]     .ng-select .ng-select-container input, \n[_nghost-%COMP%]     nb-tag-list input {\n  background-color: unset !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n}\n\n.body[_ngcontent-%COMP%] {\n  width: 550px;\n}\n\n.description[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  height: 150px;\n}\n\n.name-input[_ngcontent-%COMP%] {\n  min-width: 100%;\n}\n\n.estimate-inputs[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.estimate-inputs[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 30%;\n  padding: 0.4rem !important;\n}\n\n.nb-radio[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n}"]
      });
    }
  };
  return AddTaskDialogComponent;
})();
AddTaskDialogComponent = AddTaskDialogComponent_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_30__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__/* .UntilDestroy */ .d)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_30__/* .__metadata */ .Sn)("design:paramtypes", [_nebular_theme__WEBPACK_IMPORTED_MODULE_13__/* .NbDialogRef */ .ybQ, _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .UntypedFormBuilder */ .ze, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_14__/* .Store */ .il, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__/* .TranslateService */ .c$, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_16__/* .EmployeesService */ .r, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_17__/* .TasksService */ .w, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_18__/* .OrganizationTeamsService */ .F, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_19__/* .OrganizationProjectModuleService */ .k])], AddTaskDialogComponent);


/***/ }),

/***/ 45997:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ TaskNumberFieldComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(73014);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(55598);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(26860);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10936);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(19223);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(41598);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39855);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(52738);
/* harmony import */ var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4644);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(26024);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(71924);
/* harmony import */ var _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38546);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(38736);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(56383);

















let TaskNumberFieldComponent = /*#__PURE__*/(() => {
  let TaskNumberFieldComponent = class TaskNumberFieldComponent extends _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_0__/* .TranslationBaseComponent */ .K {
    get placeholder() {
      return this._placeholder;
    }
    set placeholder(value) {
      this._placeholder = value;
    }
    get projectId() {
      return this._projectId;
    }
    set projectId(value) {
      this._projectId = value;
      this.number$.next(true);
    }
    set number(val) {
      this._number = val;
      this.onChange(val);
      this.onTouched(val);
    }
    get number() {
      return this._number;
    }
    constructor(translateService, store, tasksService) {
      super(translateService);
      this.translateService = translateService;
      this.store = store;
      this.tasksService = tasksService;
      this.formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .FormControl */ .MJ();
      this.onChange = () => {};
      this.onTouched = () => {};
      this.number$ = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_2__/* .Subject */ .B();
    }
    ngOnInit() {
      this.number$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .tap */ .M)(() => this.getOneMaximumTaskNumber()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .untilDestroyed */ .s)(this)).subscribe();
      this.store.selectedOrganization$.pipe((0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_5__/* .distinctUntilChange */ .nI)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .filter */ .p)(organization => !!organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .tap */ .M)(organization => this.organization = organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .tap */ .M)(() => this.number$.next(true)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .untilDestroyed */ .s)(this)).subscribe();
    }
    writeValue(value) {
      this._number = value;
    }
    registerOnChange(fn) {
      this.onChange = fn;
    }
    registerOnTouched(fn) {
      this.onTouched = fn;
    }
    getOneMaximumTaskNumber() {
      var _this = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A)(function* () {
        if (!_this.organization) {
          return;
        }
        const {
          tenantId
        } = _this.store.user;
        const {
          id: organizationId
        } = _this.organization;
        try {
          _this.tasksService.getMaxTaskNumber({
            tenantId,
            organizationId,
            ...(_this.projectId ? {
              projectId: _this.projectId
            } : {})
          }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .tap */ .M)(maxNumber => _this.number = maxNumber + 1), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .untilDestroyed */ .s)(_this)).subscribe();
        } catch (error) {
          console.log('Error while getting max task number', error);
        }
      })();
    }
    ngOnDestroy() {}
    static {
      this.ɵfac = function TaskNumberFieldComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || TaskNumberFieldComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__/* .TranslateService */ .c$), _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_10__/* .Store */ .il), _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_11__/* .TasksService */ .w));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵdefineComponent"] */ .VBU({
        type: TaskNumberFieldComponent,
        selectors: [["ngx-task-number-field"]],
        inputs: {
          formControl: "formControl",
          placeholder: "placeholder",
          projectId: "projectId"
        },
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵProvidersFeature"] */ .Jv_([{
          provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .NG_VALUE_ACCESSOR */ .kq,
          useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__/* .forwardRef */ .Rfq)(() => TaskNumberFieldComponent),
          multi: true
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
        decls: 7,
        vars: 10,
        consts: [[1, "form-group"], ["for", "taskNumber", 1, "label"], ["type", "number", "nbInput", "", "fullWidth", "", 3, "ngModelChange", "disabled", "min", "placeholder", "id", "ngModel"]],
        template: function TaskNumberFieldComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵelementStart"] */ .j41(0, "div", 0)(1, "label", 1)(2, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵtext"] */ .EFF(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵpipe"] */ .nI1(4, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵelementStart"] */ .j41(5, "input", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵpipe"] */ .nI1(6, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵtwoWayListener"] */ .mxI("ngModelChange", function TaskNumberFieldComponent_Template_input_ngModelChange_5_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵtwoWayBindingSet"] */ .DH7(ctx.number, $event) || (ctx.number = $event);
              return $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵelementEnd"] */ .k0s()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵpipeBind1"] */ .bMT(4, 6, "TASKS_PAGE.TASK_NUMBER"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵproperty"] */ .Y8G("disabled", ctx.formControl.disabled)("min", 0)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵpipeBind1"] */ .bMT(6, 8, ctx.placeholder || "TASKS_PAGE.TASK_NUMBER"))("id", "taskNumber");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵtwoWayProperty"] */ .R50("ngModel", ctx.number);
          }
        },
        dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .DefaultValueAccessor */ .me, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .NumberValueAccessor */ .Q0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .NgControlStatus */ .BC, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .MinValidator */ .VZ, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .NgModel */ .vS, _nebular_theme__WEBPACK_IMPORTED_MODULE_12__/* .NbInputDirective */ .i6h, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__/* .TranslatePipe */ .D9],
        encapsulation: 2
      });
    }
  };
  TaskNumberFieldComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .UntilDestroy */ .d)({
    checkProperties: true
  }), (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__metadata */ .Sn)("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__/* .TranslateService */ .c$, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_10__/* .Store */ .il, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_11__/* .TasksService */ .w])], TaskNumberFieldComponent);
  return TaskNumberFieldComponent;
})();


/***/ }),

/***/ 46694:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ TaskPrioritiesService)
/* harmony export */ });
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64913);
/* harmony import */ var _crud_crud_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7718);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26860);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45715);





let TaskPrioritiesService = /*#__PURE__*/(() => {
  class TaskPrioritiesService extends _crud_crud_service__WEBPACK_IMPORTED_MODULE_0__/* .CrudService */ .m {
    static {
      this.API_URL = `${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/task-priorities`;
    }
    constructor(http) {
      super(http, TaskPrioritiesService.API_URL);
    }
    static {
      this.ɵfac = function TaskPrioritiesService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || TaskPrioritiesService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵinject"] */ .KVO(_angular_common_http__WEBPACK_IMPORTED_MODULE_3__/* .HttpClient */ .Qq));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineInjectable"] */ .jDH({
        token: TaskPrioritiesService,
        factory: TaskPrioritiesService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return TaskPrioritiesService;
})();

/***/ }),

/***/ 74353:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: () => (/* binding */ TaskPriorityEnum)
/* harmony export */ });
/**
 * Default task priorities
 */
var TaskPriorityEnum = /*#__PURE__*/function (TaskPriorityEnum) {
  TaskPriorityEnum["URGENT"] = "urgent";
  TaskPriorityEnum["HIGH"] = "high";
  TaskPriorityEnum["MEDIUM"] = "medium";
  TaskPriorityEnum["LOW"] = "low";
  return TaskPriorityEnum;
}(TaskPriorityEnum || {});

/***/ }),

/***/ 89380:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   w: () => (/* binding */ TaskSizeEnum)
/* harmony export */ });
/**
 * Default task sizes
 */
var TaskSizeEnum = /*#__PURE__*/function (TaskSizeEnum) {
  TaskSizeEnum["X_LARGE"] = "x-large";
  TaskSizeEnum["LARGE"] = "large";
  TaskSizeEnum["MEDIUM"] = "medium";
  TaskSizeEnum["SMALL"] = "small";
  TaskSizeEnum["TINY"] = "tiny";
  return TaskSizeEnum;
}(TaskSizeEnum || {});

/***/ }),

/***/ 99236:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ TaskSizesService)
/* harmony export */ });
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64913);
/* harmony import */ var _crud_crud_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7718);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26860);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45715);





let TaskSizesService = /*#__PURE__*/(() => {
  class TaskSizesService extends _crud_crud_service__WEBPACK_IMPORTED_MODULE_0__/* .CrudService */ .m {
    static {
      this.API_URL = `${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/task-sizes`;
    }
    constructor(http) {
      super(http, TaskSizesService.API_URL);
    }
    static {
      this.ɵfac = function TaskSizesService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || TaskSizesService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵinject"] */ .KVO(_angular_common_http__WEBPACK_IMPORTED_MODULE_3__/* .HttpClient */ .Qq));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineInjectable"] */ .jDH({
        token: TaskSizesService,
        factory: TaskSizesService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return TaskSizesService;
})();

/***/ })

}]);