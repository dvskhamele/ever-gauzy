"use strict";
(self["webpackChunkgauzy"] = self["webpackChunkgauzy"] || []).push([[8984],{

/***/ 6421:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ FavoriteToggleComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(73014);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(55598);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(41598);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(19223);
/* harmony import */ var _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38546);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(17134);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(71924);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(15480);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52738);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39855);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(14572);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(56383);















function FavoriteToggleComponent_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", ctx_r0.buttonLabel, " ");
  }
}
let FavoriteToggleComponent = /*#__PURE__*/(() => {
  let FavoriteToggleComponent = class FavoriteToggleComponent extends _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_1__/* .TranslationBaseComponent */ .K {
    constructor(translateService, _genericFavoriteService, _store, _toastrService) {
      super(translateService);
      this.translateService = translateService;
      this._genericFavoriteService = _genericFavoriteService;
      this._store = _store;
      this._toastrService = _toastrService;
      this.size = 'small';
      this.status = 'basic';
      this.disabled = false;
      this.showLabel = false;
      this.spacing = 'default';
      this.favoriteToggled = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .bkB();
      this.favorites = [];
      this.loading = false;
    }
    ngOnInit() {
      // Watch for organization changes
      this._store.selectedOrganization$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .filter */ .p)(organization => !!organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .tap */ .M)(organization => {
        this.organization = organization;
        this._loadFavorites();
      }), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .untilDestroyed */ .s)(this)).subscribe();
    }
    /**
     * Load favorites for the current entity type
     */
    _loadFavorites() {
      var _this = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)(function* () {
        if (!_this.organization || !_this.entityType) {
          return;
        }
        try {
          _this.favorites = yield _this._genericFavoriteService.loadFavorites(_this.entityType, _this.organization, _this._store.user?.employee?.id);
        } catch (error) {
          console.error('Error loading favorites:', error);
          _this.favorites = [];
        }
      })();
    }
    /**
     * Check if the current entity is a favorite
     */
    get isFavorite() {
      if (!this.entityId || !this.entityType || !this.favorites) {
        return false;
      }
      return this._genericFavoriteService.isFavorite(this.entityId, this.entityType, this.favorites);
    }
    /**
     * Get CSS classes for the button based on spacing preference
     */
    get buttonClasses() {
      const baseClass = 'favorite-toggle-button';
      const activeClass = this.isFavorite ? 'favorite-active' : '';
      const spacingClass = this.spacing === 'detail' ? 'favorite-toggle-detail' : this.spacing === 'list' ? 'favorite-toggle-list' : '';
      return [baseClass, activeClass, spacingClass].filter(Boolean).join(' ');
    }
    /**
     * Get the favorite object for the current entity
     */
    get favoriteObject() {
      if (!this.entityId || !this.entityType || !this.favorites) {
        return undefined;
      }
      return this._genericFavoriteService.getFavoriteForEntity(this.entityId, this.entityType, this.favorites);
    }
    /**
     * Get the appropriate icon based on favorite status
     */
    get icon() {
      return this.isFavorite ? 'star' : 'star-outline';
    }
    /**
     * Get the appropriate icon status based on favorite status
     */
    get iconStatus() {
      return this.isFavorite ? 'warning' : this.status;
    }
    /**
     * Get the appropriate tooltip text
     */
    get tooltipText() {
      const entityName = this.entityName || 'item';
      return this.isFavorite ? this.getTranslation('BUTTONS.REMOVE_FROM_FAVORITES', {
        name: entityName
      }) : this.getTranslation('BUTTONS.ADD_TO_FAVORITES', {
        name: entityName
      });
    }
    /**
     * Get the appropriate button label
     */
    get buttonLabel() {
      return this.isFavorite ? this.getTranslation('BUTTONS.REMOVE_FROM_FAVORITES') : this.getTranslation('BUTTONS.ADD_TO_FAVORITES');
    }
    /**
     * Toggle favorite status
     */
    toggleFavorite() {
      var _this2 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)(function* () {
        if (!_this2.entityType || !_this2.entityId || !_this2.organization || _this2.disabled || _this2.loading) {
          return;
        }
        _this2.loading = true;
        try {
          yield _this2._genericFavoriteService.toggleFavorite(_this2.entityType, _this2.entityId, _this2.organization, _this2._store.user?.employee?.id, _this2.favorites);
          // Reload favorites to get updated state
          yield _this2._loadFavorites();
          // Emit the toggle event
          _this2.favoriteToggled.emit({
            isFavorite: _this2.isFavorite,
            favorite: _this2.favoriteObject
          });
          // Show success message
          const entityName = _this2.entityName || 'item';
          const messageKey = _this2.isFavorite ? 'TOASTR.MESSAGE.FAVORITE_ADDED' : 'TOASTR.MESSAGE.FAVORITE_REMOVED';
          _this2._toastrService.success(messageKey, {
            name: entityName
          });
        } catch (error) {
          console.error('Error toggling favorite:', error);
          _this2._toastrService.danger('TOASTR.MESSAGE.FAVORITE_ERROR');
        } finally {
          _this2.loading = false;
        }
      })();
    }
    ngOnDestroy() {}
    static {
      this.ɵfac = function FavoriteToggleComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || FavoriteToggleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__/* .TranslateService */ .c$), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_7__/* .GenericFavoriteService */ .X), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_8__/* .Store */ .il), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_9__/* .ToastrService */ .t));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: FavoriteToggleComponent,
        selectors: [["ngx-favorite-toggle"]],
        inputs: {
          entityType: "entityType",
          entityId: "entityId",
          entityName: "entityName",
          size: "size",
          status: "status",
          disabled: "disabled",
          showLabel: "showLabel",
          spacing: "spacing"
        },
        outputs: {
          favoriteToggled: "favoriteToggled"
        },
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
        decls: 3,
        vars: 13,
        consts: [["type", "button", "nbButton", "", "role", "switch", 3, "click", "status", "size", "disabled", "nbTooltip"], [3, "icon", "status"], ["class", "button-label", 4, "ngIf"], [1, "button-label"]],
        template: function FavoriteToggleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "button", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function FavoriteToggleComponent_Template_button_click_0_listener() {
              return ctx.toggleFavorite();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "nb-icon", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(2, FavoriteToggleComponent_span_2_Template, 2, 1, "span", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵclassMap"] */ .HbH(ctx.buttonClasses);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("status", ctx.status)("size", ctx.size)("disabled", ctx.disabled || ctx.loading)("nbTooltip", ctx.tooltipText);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵattribute"] */ .BMQ("aria-label", ctx.tooltipText || (ctx.entityName ? "Toggle " + ctx.entityName : "Toggle favorite"))("aria-pressed", ctx.isFavorite);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵclassProp"] */ .AVh("spin", ctx.loading);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("icon", ctx.loading ? "loader-outline" : ctx.icon)("status", ctx.iconStatus);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.showLabel);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__/* .NgIf */ .bT, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbButtonComponent */ .YP2, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbIconComponent */ .tHu, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbTooltipDirective */ .BmQ],
        styles: ["[_nghost-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.favorite-toggle-button[_ngcontent-%COMP%] {\n  transition: all 0.2s ease-in-out;\n  margin: 0 0.25rem;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  vertical-align: middle;\n  line-height: 1;\n}\n.favorite-toggle-button[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n}\n.favorite-toggle-button.favorite-active[_ngcontent-%COMP%]   nb-icon[_ngcontent-%COMP%] {\n  color: var(--warning-color, #ffaa00);\n}\n.favorite-toggle-button[_ngcontent-%COMP%]   .button-label[_ngcontent-%COMP%] {\n  margin-left: 0.5rem;\n}\n.favorite-toggle-button[_ngcontent-%COMP%]   nb-icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.favorite-toggle-button[_ngcontent-%COMP%]   nb-icon.spin[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n\n.favorite-toggle-detail[_ngcontent-%COMP%] {\n  margin-left: 1rem;\n  margin-right: 0.5rem;\n}\n\n.favorite-toggle-list[_ngcontent-%COMP%] {\n  margin: 0 0.125rem;\n}\n\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}"]
      });
    }
  };
  FavoriteToggleComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_12__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .UntilDestroy */ .d)({
    checkProperties: true
  }), (0,tslib__WEBPACK_IMPORTED_MODULE_12__/* .__metadata */ .Sn)("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__/* .TranslateService */ .c$, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_7__/* .GenericFavoriteService */ .X, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_8__/* .Store */ .il, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_9__/* .ToastrService */ .t])], FavoriteToggleComponent);
  return FavoriteToggleComponent;
})();


/***/ }),

/***/ 11191:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: () => (/* binding */ MyTasksStoreService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88326);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79708);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26860);
/* harmony import */ var _tasks_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(38736);





let MyTasksStoreService = /*#__PURE__*/(() => {
  class MyTasksStoreService {
    get myTasks() {
      return this._myTasks$.getValue();
    }
    constructor(_taskService) {
      this._taskService = _taskService;
      this._myTasks$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__/* .BehaviorSubject */ .t([]);
      this.myTasks$ = this._myTasks$.asObservable().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__/* .map */ .T)(this._mapToViewModel));
      this._selectedTask$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__/* .BehaviorSubject */ .t(null);
      this.selectedTask$ = this._selectedTask$.asObservable();
    }
    fetchTasks(tenantId, organizationId) {
      return this._taskService.getMyTasks({
        tenantId,
        organizationId
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .tap */ .M)(({
        items
      }) => this.loadAllTasks(items)));
    }
    _mapToViewModel(tasks) {
      return tasks.map(task => ({
        ...task,
        projectName: task.project ? task.project.name : undefined,
        employees: task.members ? task.members : undefined
      }));
    }
    loadAllTasks(tasks) {
      this._myTasks$.next(tasks);
    }
    createTask(task) {
      return this._taskService.createTask(task).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .tap */ .M)(createdTask => {
        const tasks = [...this.myTasks, createdTask];
        this._myTasks$.next(tasks);
      }));
    }
    editTask(task) {
      return this._taskService.editTask(task).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .tap */ .M)(() => {
        const tasks = [...this.myTasks];
        const newState = tasks.map(t => t.id === task.id ? task : t);
        this._myTasks$.next(newState);
      }));
    }
    delete(id) {
      return this._taskService.deleteTask(id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .tap */ .M)(() => {
        const tasks = [...this.myTasks];
        const newState = tasks.filter(t => t.id !== id);
        this._myTasks$.next(newState);
      }));
    }
    selectTask(task) {
      this._selectedTask$.next(task);
    }
    static {
      this.ɵfac = function MyTasksStoreService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MyTasksStoreService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵinject"] */ .KVO(_tasks_service__WEBPACK_IMPORTED_MODULE_4__/* .TasksService */ .w));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdefineInjectable"] */ .jDH({
        token: MyTasksStoreService,
        factory: MyTasksStoreService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return MyTasksStoreService;
})();

/***/ }),

/***/ 11336:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ ContactSelectModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14572);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10936);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19223);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(55567);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);






let ContactSelectModule = /*#__PURE__*/(() => {
  class ContactSelectModule {
    static {
      this.ɵfac = function ContactSelectModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || ContactSelectModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .$C({
        type: ContactSelectModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .CommonModule */ .MD, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .FormsModule */ .YN, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_3__/* .NgSelectModule */ .MQ, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__/* .TranslateModule */ .h.forChild()]
      });
    }
  }
  return ContactSelectModule;
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

/***/ 17134:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   X: () => (/* binding */ GenericFavoriteService)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73014);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17785);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26860);
/* harmony import */ var _favorite_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56630);
/* harmony import */ var _favorite_store_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(99530);
/* harmony import */ var _store_store_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(71924);









let GenericFavoriteService = /*#__PURE__*/(() => {
  class GenericFavoriteService {
    constructor(favoriteService, favoriteStoreService, store) {
      this.favoriteService = favoriteService;
      this.favoriteStoreService = favoriteStoreService;
      this.store = store;
    }
    /**
     * Loads the list of favorites for a given entity type, for the current user or all for admin.
     * @param entityType The BaseEntityEnum type (e.g., Employee, OrganizationProject, etc.)
     * @param organization The current organization
     * @param employeeId (optional) The employee ID (if not admin)
     */
    loadFavorites(entityType, organization, employeeId) {
      var _this = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(function* () {
        const {
          id: organizationId,
          tenantId
        } = organization || {};
        if (!organizationId || !tenantId) {
          return [];
        }
        const isAdmin = _this.store.hasAnyPermission(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__/* .PermissionsEnum */ .U.ALL_ORG_VIEW);
        let items = [];
        if (isAdmin && !employeeId) {
          // Admin: fetch all favorites for the organization
          const result = yield _this.favoriteService.findAll({
            where: {
              organizationId,
              tenantId,
              entity: entityType
            }
          });
          items = result.items;
        } else {
          // Normal user: fetch only the current employee's favorites
          const effectiveEmployeeId = employeeId || _this.store.user?.employee?.id;
          if (!effectiveEmployeeId) {
            return [];
          }
          const result = yield _this.favoriteService.findByEmployee({
            where: {
              organizationId,
              tenantId,
              employeeId: effectiveEmployeeId,
              entity: entityType
            }
          });
          items = result.items;
        }
        return items;
      })();
    }
    /**
     * Adds or removes an entity from favorites, then refreshes the sidebar menu.
     * @param entityType The BaseEntityEnum type
     * @param entityId The ID of the entity
     * @param organization The current organization
     * @param employeeId (optional) The employee ID
     * @param currentFavorites The current list of favorites for this entity type
     */
    toggleFavorite(entityType, entityId, organization, employeeId, currentFavorites) {
      var _this2 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(function* () {
        if (!entityType || !entityId || !organization?.id || !organization?.tenantId) {
          throw new Error('Invalid parameters: entityType, entityId, and organization with id/tenantId are required');
        }
        if (!Array.isArray(currentFavorites)) {
          throw new Error('currentFavorites must be an array');
        }
        try {
          const isFav = _this2.isFavorite(entityId, entityType, currentFavorites);
          if (isFav) {
            // Remove from favorites
            const fav = _this2.getFavoriteForEntity(entityId, entityType, currentFavorites);
            if (fav) {
              yield _this2.favoriteService.delete(fav.id);
            }
          } else {
            // Add to favorites
            const {
              id: organizationId,
              tenantId
            } = organization;
            const effectiveEmployeeId = employeeId || _this2.store.user?.employee?.id;
            const input = {
              entity: entityType,
              entityId,
              organizationId,
              tenantId,
              employeeId: effectiveEmployeeId
            };
            yield _this2.favoriteService.create(input);
          }
          // Refresh the sidebar menu
          // Refresh the sidebar menu
          _this2.favoriteStoreService.refreshFavorites();
        } catch (error) {
          console.error('Error toggling favorite:', error);
          throw new Error('Failed to update favorite status');
        }
      })();
    }
    /**
     * Checks if an entity is a favorite in the provided list.
     * @param entityId The ID of the entity
     * @param entityType The BaseEntityEnum type
     * @param favorites The list of favorites
     */
    isFavorite(entityId, entityType, favorites) {
      return favorites.some(fav => fav.entityId === entityId && fav.entity === entityType);
    }
    /**
     * Finds the favorite object for a given entity in the provided list.
     * @param entityId The ID of the entity
     * @param entityType The BaseEntityEnum type
     * @param favorites The list of favorites
     */
    getFavoriteForEntity(entityId, entityType, favorites) {
      return favorites.find(fav => fav.entityId === entityId && fav.entity === entityType);
    }
    static {
      this.ɵfac = function GenericFavoriteService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || GenericFavoriteService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵinject"] */ .KVO(_favorite_service__WEBPACK_IMPORTED_MODULE_3__/* .FavoriteService */ .U), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵinject"] */ .KVO(_favorite_store_service__WEBPACK_IMPORTED_MODULE_4__/* .FavoriteStoreService */ .z), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵinject"] */ .KVO(_store_store_service__WEBPACK_IMPORTED_MODULE_5__/* .Store */ .il));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineInjectable"] */ .jDH({
        token: GenericFavoriteService,
        factory: GenericFavoriteService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return GenericFavoriteService;
})();

/***/ }),

/***/ 17492:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   f: () => (/* binding */ ProductCategorySelectorModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14572);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10936);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(55567);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19223);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);






let ProductCategorySelectorModule = /*#__PURE__*/(() => {
  class ProductCategorySelectorModule {
    static {
      this.ɵfac = function ProductCategorySelectorModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || ProductCategorySelectorModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .$C({
        type: ProductCategorySelectorModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .CommonModule */ .MD, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .FormsModule */ .YN, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__/* .TranslateModule */ .h.forChild(), _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__/* .NgSelectModule */ .MQ]
      });
    }
  }
  return ProductCategorySelectorModule;
})();

/***/ }),

/***/ 18471:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   w: () => (/* binding */ TaskStatusSelectModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14572);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10936);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(55567);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19223);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57972);
/* harmony import */ var _task_badge_view_task_badge_view_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(16119);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);








let TaskStatusSelectModule = /*#__PURE__*/(() => {
  class TaskStatusSelectModule {
    static {
      this.ɵfac = function TaskStatusSelectModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || TaskStatusSelectModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .$C({
        type: TaskStatusSelectModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .G2t({
        providers: [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_1__/* .TaskStatusesService */ .f],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__/* .CommonModule */ .MD, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .FormsModule */ .YN, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__/* .NgSelectModule */ .MQ, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__/* .TranslateModule */ .h.forChild(), _task_badge_view_task_badge_view_module__WEBPACK_IMPORTED_MODULE_6__/* .TaskBadgeViewComponentModule */ .z]
      });
    }
  }
  return TaskStatusSelectModule;
})();

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

/***/ 23249:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   J: () => (/* binding */ EmployeesMergedTeamsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14572);
/* harmony import */ var _employee_with_links_employee_with_links_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39457);
/* harmony import */ var _task_teams_task_teams_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13015);




function EmployeesMergedTeamsComponent_ng_template_2_Template(rf, ctx) {}
function EmployeesMergedTeamsComponent_ng_template_3_ngx_employee_with_links_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(0, "ngx-employee-with-links", 4);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("value", ctx_r0.employees);
  }
}
function EmployeesMergedTeamsComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(0, EmployeesMergedTeamsComponent_ng_template_3_ngx_employee_with_links_0_Template, 1, 1, "ngx-employee-with-links", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "ngx-task-teams", 4);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r0.employees);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("value", ctx_r0.value[1]);
  }
}
function EmployeesMergedTeamsComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(0, "ngx-employee-with-links", 4);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("value", ctx_r0.value[0]);
  }
}
let EmployeesMergedTeamsComponent = /*#__PURE__*/(() => {
  class EmployeesMergedTeamsComponent {
    constructor() {
      this.employees = [];
    }
    ngOnInit() {
      if (this.value) {
        const buffers = this.value[1];
        if (buffers) {
          for (let buffer of buffers) {
            for (let member of buffer.members) {
              this.employees.push(member.employee);
            }
          }
        }
      }
    }
    static {
      this.ɵfac = function EmployeesMergedTeamsComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || EmployeesMergedTeamsComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: EmployeesMergedTeamsComponent,
        selectors: [["ngx-employees-merged-teams"]],
        inputs: {
          value: "value",
          rowData: "rowData"
        },
        standalone: false,
        decls: 7,
        vars: 1,
        consts: [["teams", ""], ["employeesLink", ""], [3, "ngTemplateOutlet"], [3, "value", 4, "ngIf"], [3, "value"]],
        template: function EmployeesMergedTeamsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(2, EmployeesMergedTeamsComponent_ng_template_2_Template, 0, 0, "ng-template", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(3, EmployeesMergedTeamsComponent_ng_template_3_Template, 2, 2, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplateRefExtractor"] */ .C5r)(5, EmployeesMergedTeamsComponent_ng_template_5_Template, 1, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplateRefExtractor"] */ .C5r);
          }
          if (rf & 2) {
            const teams_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(4);
            const employeesLink_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngTemplateOutlet", (ctx.value[0] == null ? null : ctx.value[0].length) > 0 ? employeesLink_r3 : teams_r2);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .NgIf */ .bT, _angular_common__WEBPACK_IMPORTED_MODULE_1__/* .NgTemplateOutlet */ .T3, _employee_with_links_employee_with_links_component__WEBPACK_IMPORTED_MODULE_2__/* .EmployeeWithLinksComponent */ .j, _task_teams_task_teams_component__WEBPACK_IMPORTED_MODULE_3__/* .TaskTeamsComponent */ .f],
        styles: ["div[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}"]
      });
    }
  }
  return EmployeesMergedTeamsComponent;
})();

/***/ }),

/***/ 25430:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TasksModule: () => (/* binding */ TasksModule)
/* harmony export */ });
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(71750);
/* harmony import */ var ckeditor4_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(27697);
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(79475);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(55567);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56383);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(19223);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(57832);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(61444);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(38834);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(82202);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(80784);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(251);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(6269);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(58504);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(6761);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(94500);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(68000);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(98722);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(37383);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(45455);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(90845);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(18471);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(31664);
/* harmony import */ var _tasks_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90983);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26860);












let TasksModule = /*#__PURE__*/(() => {
  class TasksModule {
    static {
      this.ɵfac = function TasksModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || TasksModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineNgModule"] */ .$C({
        type: TasksModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [_nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbTooltipModule */ .IB0, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbBadgeModule */ .iEK, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbCardModule */ .lVF, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbButtonModule */ .P5N, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbRadioModule */ .iyp, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbAccordionModule */ .LtP, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbIconModule */ .clu, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbInputModule */ .pty, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbSelectModule */ .VcP, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbTabsetModule */ .AfG, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbActionsModule */ ._A2, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbDialogModule */ .nZv.forRoot(), _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbListModule */ .PD_, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbContextMenuModule */ .DkL, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbSpinnerModule */ .gYs, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbDatepickerModule */ .TgK, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbPopoverModule */ .Ofb, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_3__/* .NgSelectModule */ .MQ, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__/* .DragDropModule */ .ad, ngx_permissions__WEBPACK_IMPORTED_MODULE_5__/* .NgxPermissionsModule */ .Ov.forChild(), ckeditor4_angular__WEBPACK_IMPORTED_MODULE_6__/* .CKEditorModule */ .w, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__/* .TranslateModule */ .h.forChild(), _tasks_routing_module__WEBPACK_IMPORTED_MODULE_0__/* .TasksRoutingModule */ .P, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_8__/* .TableComponentsModule */ .p, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_9__/* .TagsColorInputModule */ .x, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_10__/* .SharedModule */ .G, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_11__/* .UserFormsModule */ .D, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_12__/* .CardGridModule */ .n, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_13__/* .AddTaskDialogModule */ .B, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_14__/* .EmployeeMultiSelectModule */ .I, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_15__/* .FavoriteToggleModule */ .F, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_16__/* .GauzyEditableGridModule */ .x, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_17__/* .TasksSprintSettingsViewModule */ .f, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_18__/* .TableFiltersModule */ .K, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_19__/* .SmartDataViewLayoutModule */ .H, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_20__/* .ProjectSelectModule */ .A, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_21__/* .TaskPrioritySelectModule */ .Q, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_22__/* .TaskSizeSelectModule */ .n, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_23__/* .TaskStatusSelectModule */ .w, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_24__/* .TaskNumberFieldModule */ .L]
      });
    }
  }
  return TasksModule;
})();

/***/ }),

/***/ 28159:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ ProjectViewComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73014);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10205);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15788);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(71924);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(42433);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(15317);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(56383);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(55567);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(14572);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(10936);
/* harmony import */ var _packages_ui_core_shared_src_lib_tasks_sprint_settings_view_tasks_sprint_settings_view_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(65217);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(19223);












function ProjectViewComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(0, "nb-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const item_r1 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("icon", item_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(item_r1.name);
  }
}
function ProjectViewComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "nb-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const item_r2 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("icon", item_r2.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(item_r2.name);
  }
}
function ProjectViewComponent_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "ngx-tasks-sprint-settings-view", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("project", ctx_r2.project);
  }
}
let ProjectViewComponent = /*#__PURE__*/(() => {
  class ProjectViewComponent {
    constructor(store, projectService, organizationProjectStore) {
      this.store = store;
      this.projectService = projectService;
      this.organizationProjectStore = organizationProjectStore;
      this.changeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .bkB();
      this.taskViewModeType = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__/* .TaskListTypeEnum */ .Tn;
      this.taskViewModeList = [{
        type: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__/* .TaskListTypeEnum */ .Tn.GRID,
        name: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__/* .TaskListTypeEnum */ .Tn.GRID,
        icon: 'grid-outline'
      }, {
        type: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__/* .TaskListTypeEnum */ .Tn.SPRINT,
        name: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__/* .TaskListTypeEnum */ .Tn.SPRINT,
        icon: 'refresh-outline'
      }];
    }
    ngOnInit() {
      this.selectedTaskViewMode = {
        type: this.project.taskListType,
        name: this.project.taskListType
      };
    }
    /**
     *
     *
     * @param event
     * @returns
     */
    setTaskViewMode(event) {
      var _this = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(function* () {
        if (!_this.project) {
          return;
        }
        const {
          organizationId
        } = _this.project;
        const project = yield _this.projectService.updateTaskViewMode(_this.project.id, {
          organizationId,
          taskListType: event.type
        });
        _this.store.selectedProject = {
          ..._this.project,
          taskListType: event.type
        };
        _this.organizationProjectStore.organizationProjectAction = {
          project,
          action: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__/* .CrudActionEnum */ .GD.UPDATED
        };
        _this.changeEvent.emit({
          taskListType: event.type
        });
      })();
    }
    static {
      this.ɵfac = function ProjectViewComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || ProjectViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_4__/* .Store */ .il), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_5__/* .OrganizationProjectsService */ .d), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_6__/* .OrganizationProjectStore */ .aI));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: ProjectViewComponent,
        selectors: [["ngx-project-view"]],
        inputs: {
          project: "project"
        },
        outputs: {
          changeEvent: "changeEvent"
        },
        standalone: false,
        decls: 12,
        vars: 10,
        consts: [[1, "d-flex", "settings"], [1, "settings__name"], [1, "settings__value"], ["bindLabel", "type", "binValue", "name", "appendTo", "body", 3, "change", "ngModelChange", "items", "ngModel", "placeholder", "clearable"], ["ng-option-tmp", ""], ["ng-label-tmp", ""], [4, "ngIf"], [1, "mr-1", 2, "font-size", "1rem", 3, "icon"], [1, "selector-template"], [3, "project"]],
        template: function ProjectViewComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 0)(1, "div", 1)(2, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(4, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(5, "div", 2)(6, "ng-select", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(7, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("change", function ProjectViewComponent_Template_ng_select_change_6_listener($event) {
              return ctx.setTaskViewMode($event);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayListener"] */ .mxI("ngModelChange", function ProjectViewComponent_Template_ng_select_ngModelChange_6_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayBindingSet"] */ .DH7(ctx.selectedTaskViewMode, $event) || (ctx.selectedTaskViewMode = $event);
              return $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(8, ProjectViewComponent_ng_template_8_Template, 3, 2, "ng-template", 4)(9, ProjectViewComponent_ng_template_9_Template, 4, 2, "ng-template", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(10, "hr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(11, ProjectViewComponent_ng_container_11_Template, 2, 1, "ng-container", 6);
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI("", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(4, 6, "TASKS_PAGE.TASK_VIEW_MODE"), ":");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpropertyInterpolate"] */ .FS9("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(7, 8, "TASKS_PAGE.TASK_VIEW_MODE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("items", ctx.taskViewModeList);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayProperty"] */ .R50("ngModel", ctx.selectedTaskViewMode);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("clearable", false);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.selectedTaskViewMode.type === ctx.taskViewModeType.SPRINT);
          }
        },
        dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbIconComponent */ .tHu, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__/* .NgSelectComponent */ .vr, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__/* .NgOptionTemplateDirective */ .Uq, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__/* .NgLabelTemplateDirective */ .ZZ, _angular_common__WEBPACK_IMPORTED_MODULE_9__/* .NgIf */ .bT, _angular_forms__WEBPACK_IMPORTED_MODULE_10__/* .NgControlStatus */ .BC, _angular_forms__WEBPACK_IMPORTED_MODULE_10__/* .NgModel */ .vS, _packages_ui_core_shared_src_lib_tasks_sprint_settings_view_tasks_sprint_settings_view_component__WEBPACK_IMPORTED_MODULE_11__/* .TasksSprintSettingsViewComponent */ .w, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__/* .TranslatePipe */ .D9],
        styles: [".settings[_ngcontent-%COMP%] {\n  gap: 8px;\n  padding: 1rem 2.5rem 0 2.5rem;\n  flex-direction: column;\n}\n.settings__name[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  color: var(--gauzy-text-color-2);\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 16px;\n  letter-spacing: 0em;\n  text-align: center;\n}\n.settings__value[_ngcontent-%COMP%] {\n  width: 10rem;\n}\n\nhr[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}"]
      });
    }
  }
  return ProjectViewComponent;
})();

/***/ }),

/***/ 28826:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* binding */ ExpenseCategorySelectModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14572);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10936);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19223);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56383);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(55567);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);







let ExpenseCategorySelectModule = /*#__PURE__*/(() => {
  class ExpenseCategorySelectModule {
    static {
      this.ɵfac = function ExpenseCategorySelectModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || ExpenseCategorySelectModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .$C({
        type: ExpenseCategorySelectModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .CommonModule */ .MD, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbSelectModule */ .VcP, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .FormsModule */ .YN, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__/* .TranslateModule */ .h.forChild(), _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__/* .NgSelectModule */ .MQ]
      });
    }
  }
  return ExpenseCategorySelectModule;
})();

/***/ }),

/***/ 35657:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: () => (/* binding */ StatusViewComponent)
/* harmony export */ });
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81995);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14572);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56383);
/* harmony import */ var _tasks_task_badge_view_task_badge_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1720);
/* harmony import */ var _pipes_replace_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(25963);






function StatusViewComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "gauzy-task-badge-view", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("taskBadge", ctx_r0.rowData == null ? null : ctx_r0.rowData.taskStatus);
  }
}
function StatusViewComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(0, "nb-badge", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(1, "replace");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "titlecase");
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("status", ctx_r0.status)("text", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(2, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind3"] */ .brH(1, 2, ctx_r0.value, "_", " ")));
  }
}
let StatusViewComponent = /*#__PURE__*/(() => {
  class StatusViewComponent {
    ngOnInit() {
      switch (this.value) {
        case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__/* .TaskStatusEnum */ .F.OPEN:
          this.status = 'basic';
          break;
        case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__/* .TaskStatusEnum */ .F.IN_PROGRESS:
          this.status = 'info';
          break;
        case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__/* .TaskStatusEnum */ .F.READY_FOR_REVIEW:
          this.status = 'info';
          break;
        case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__/* .TaskStatusEnum */ .F.IN_REVIEW:
          this.status = 'info';
          break;
        case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__/* .TaskStatusEnum */ .F.COMPLETED:
          this.status = 'success';
          break;
        case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__/* .TaskStatusEnum */ .F.BLOCKED:
          this.status = 'danger';
          break;
        default:
          this.status = 'basic';
          break;
      }
    }
    static {
      this.ɵfac = function StatusViewComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || StatusViewComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: StatusViewComponent,
        selectors: [["ngx-status-view"]],
        inputs: {
          value: "value",
          rowData: "rowData"
        },
        standalone: false,
        decls: 3,
        vars: 2,
        consts: [["defaultView", ""], [4, "ngIf", "ngIfElse"], [3, "taskBadge"], ["position", "centered", 1, "badge", 3, "status", "text"]],
        template: function StatusViewComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(0, StatusViewComponent_ng_container_0_Template, 2, 1, "ng-container", 1)(1, StatusViewComponent_ng_template_1_Template, 3, 8, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplateRefExtractor"] */ .C5r);
          }
          if (rf & 2) {
            const defaultView_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.rowData == null ? null : ctx.rowData.taskStatus)("ngIfElse", defaultView_r2);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__/* .NgIf */ .bT, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbBadgeComponent */ .XyX, _tasks_task_badge_view_task_badge_view_component__WEBPACK_IMPORTED_MODULE_4__/* .TaskBadgeViewComponent */ .Z, _angular_common__WEBPACK_IMPORTED_MODULE_2__/* .TitleCasePipe */ .PV, _pipes_replace_pipe__WEBPACK_IMPORTED_MODULE_5__/* .ReplacePipe */ .J],
        styles: ["[_nghost-%COMP%] {\n\t\t\t\tdisplay: flex;\n\t\t\t}\n\t\t\t.badge[_ngcontent-%COMP%] {\n\t\t\t\tdisplay: flex;\n\t\t\t\tflex-direction: row;\n\t\t\t\tjustify-content: center;\n\t\t\t\talign-items: center;\n\t\t\t\tposition: relative;\n\t\t\t\twidth: fit-content;\n\t\t\t\theight: 1.5rem;\n\t\t\t\tpadding: 4px 8px;\n\t\t\t\tfont-size: 12px;\n\t\t\t\tfont-weight: 600;\n\t\t\t\tline-height: 15px;\n\t\t\t\tletter-spacing: 0em;\n\t\t\t\ttext-align: left;\n\t\t\t}"]
      });
    }
  }
  return StatusViewComponent;
})();

/***/ }),

/***/ 39457:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   j: () => (/* binding */ EmployeeWithLinksComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71924);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9620);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14572);
/* harmony import */ var _directives_img_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(71466);







function EmployeeWithLinksComponent_ng_container_1_div_1_ng_container_2_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function EmployeeWithLinksComponent_ng_container_1_div_1_ng_container_2_a_1_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
      const employee_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r2.selectEmployee(employee_r2, employee_r2.user.firstName, employee_r2.user.lastName, employee_r2.user.imageUrl));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const employee_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("src", employee_r2.user.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵsanitizeUrl"] */ .B4B);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate2"] */ .Lme("", employee_r2.user.firstName, " ", employee_r2.user.lastName, "");
  }
}
function EmployeeWithLinksComponent_ng_container_1_div_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, EmployeeWithLinksComponent_ng_container_1_div_1_ng_container_2_a_1_Template, 4, 3, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const employee_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", employee_r2 == null ? null : employee_r2.user);
  }
}
function EmployeeWithLinksComponent_ng_container_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 3)(1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(2, EmployeeWithLinksComponent_ng_container_1_div_1_ng_container_2_Template, 2, 1, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const groups_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngForOf", groups_r4);
  }
}
function EmployeeWithLinksComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, EmployeeWithLinksComponent_ng_container_1_div_1_Template, 3, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r2.value);
  }
}
let EmployeeWithLinksComponent = /*#__PURE__*/(() => {
  class EmployeeWithLinksComponent {
    constructor(store, router) {
      this.store = store;
      this.router = router;
      this.employees = [];
    }
    ngOnInit() {
      this.initializeGrouping();
    }
    /**
     * Initializes the grouping of employees into groups of size 3.
     *
     * This function takes no parameters and modifies the `employees` property of the class.
     * It iterates over the `value` property of the class and groups employees into arrays of size 3.
     * The resulting groups are stored in the `employees` property.
     *
     * @return {void} This function does not return anything.
     */
    initializeGrouping() {
      if (!this.value) {
        return;
      }
      const GROUP = 3;
      const SIZE = this.value.length;
      let count = 0;
      let group = [];
      for (let employee of this.value) {
        if ((2 * count - 1) % GROUP === 0) {
          group.push(employee);
          this.employees.push(group);
          group = [];
        } else {
          group.push(employee);
          if (SIZE - count < GROUP - 1 && SIZE - count > 0) {
            this.employees.push(group);
          }
        }
        count++;
      }
    }
    /**
     * Selects an employee and updates the store with the selected employee's information.
     *
     * @param {ISelectedEmployee} employee - The employee to be selected.
     * @param {string} firstName - The first name of the selected employee.
     * @param {string} lastName - The last name of the selected employee.
     * @param {string} imageUrl - The URL of the selected employee's image.
     * @return {void} This function does not return anything.
     */
    selectEmployee(employee, firstName, lastName, imageUrl) {
      this.store.selectedEmployee = employee;
      this.store.selectedEmployee.firstName = firstName;
      this.store.selectedEmployee.lastName = lastName;
      this.store.selectedEmployee.imageUrl = imageUrl;
      //
      this.navigateToEmployeeStatistics(employee.id);
    }
    /**
     * Navigates to the employee statistics page.
     *
     * @param {IEmployee['id']} id - The ID of the employee.
     * @return {void} This function does not return a value.
     */
    navigateToEmployeeStatistics(id) {
      if (id) this.router.navigate([`/pages/employees/edit/${id}/account`]);
    }
    static {
      this.ɵfac = function EmployeeWithLinksComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || EmployeeWithLinksComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_1__/* .Store */ .il), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_router__WEBPACK_IMPORTED_MODULE_2__/* .Router */ .Ix));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: EmployeeWithLinksComponent,
        selectors: [["ngx-employee-with-links"]],
        inputs: {
          rowData: "rowData",
          value: "value"
        },
        standalone: false,
        decls: 2,
        vars: 1,
        consts: [[1, "main"], [4, "ngFor", "ngForOf"], ["class", "avatar-container", 4, "ngIf"], [1, "avatar-container"], [1, "avatar-group"], ["class", "avatar", 3, "click", 4, "ngIf"], [1, "avatar", 3, "click"], ["type", "user", 1, "img", 3, "src"]],
        template: function EmployeeWithLinksComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, EmployeeWithLinksComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx.employees);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__/* .NgForOf */ .Sq, _angular_common__WEBPACK_IMPORTED_MODULE_3__/* .NgIf */ .bT, _directives_img_directive__WEBPACK_IMPORTED_MODULE_4__/* .ImgDirective */ .z],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   .avatar-container[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  flex-direction: column;\n  height: 2.5rem;\n}\n[_nghost-%COMP%]   .avatar-container[_ngcontent-%COMP%]   .avatar-group[_ngcontent-%COMP%] {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n[_nghost-%COMP%]   .avatar-container[_ngcontent-%COMP%]   .avatar-group[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-primary-background);\n  object-fit: cover;\n  color: var(--text-primary-color);\n  border-radius: var(--button-rectangle-border-radius);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  width: 5rem;\n  display: inline-block;\n  cursor: pointer;\n}\n[dir=ltr]   [_nghost-%COMP%]   .avatar-container[_ngcontent-%COMP%]   .avatar-group[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  padding: 5px 14px 5px 7px;\n}\n[dir=rtl]   [_nghost-%COMP%]   .avatar-container[_ngcontent-%COMP%]   .avatar-group[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  padding: 5px 7px 5px 14px;\n}\n[_nghost-%COMP%]   .avatar-container[_ngcontent-%COMP%]   .avatar-group[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  border-radius: var(--border-radius);\n}\n[dir=ltr]   [_nghost-%COMP%]   .avatar-container[_ngcontent-%COMP%]   .avatar-group[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n[dir=rtl]   [_nghost-%COMP%]   .avatar-container[_ngcontent-%COMP%]   .avatar-group[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n[_nghost-%COMP%]   .avatar-container[_ngcontent-%COMP%]   .avatar-group[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]:hover {\n  text-overflow: clip;\n  width: fit-content;\n}\n\n.avatar-group[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  border: 2px solid #ffffff;\n}\n\n.avatar-group[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]:hover {\n  z-index: 3;\n}\n\n[dir=ltr]   [_nghost-%COMP%]   .avatar-group[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]    + .avatar[_ngcontent-%COMP%] {\n  margin-left: -4rem;\n}\n[dir=rtl]   [_nghost-%COMP%]   .avatar-group[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]    + .avatar[_ngcontent-%COMP%] {\n  margin-right: -4rem;\n}\n\n.main[_ngcontent-%COMP%] {\n  width: 7rem;\n}"]
      });
    }
  }
  return EmployeeWithLinksComponent;
})();

/***/ }),

/***/ 44507:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   s: () => (/* binding */ SprintService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(40868);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56891);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39855);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80189);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64913);
/* harmony import */ var _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38546);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(26860);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(45715);
/* harmony import */ var _notification__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(15480);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(19223);












let SprintService = /*#__PURE__*/(() => {
  class SprintService extends _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_0__/* .TranslationBaseComponent */ .K {
    constructor(_http, toastrService, translateService) {
      super(translateService);
      this._http = _http;
      this.toastrService = toastrService;
      this.API_URL = `${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/organization-sprint`;
    }
    getAllSprints(findInput = {}) {
      const data = JSON.stringify({
        relations: ['tasks'],
        findInput
      });
      return this._http.get(this.API_URL, {
        params: {
          data
        }
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .catchError */ .W)(error => this.errorHandler(error)));
    }
    getById(id) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__/* .firstValueFrom */ ._)(this._http.get(`${this.API_URL}/${id}`));
    }
    createSprint(sprint) {
      return this._http.post(this.API_URL, sprint).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .tap */ .M)(() => {
        this.toastrService.success(this.getTranslation('SPRINTS_PAGE.SPRINT_ADDED'));
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .catchError */ .W)(error => this.errorHandler(error)));
    }
    editSprint(sprintId, sprint) {
      return this._http.put(`${this.API_URL}/${sprintId}`, sprint).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .tap */ .M)(() => this.toastrService.success(this.getTranslation('SPRINTS_PAGE.SPRINT_UPDATED'))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .catchError */ .W)(error => this.errorHandler(error)));
    }
    deleteSprint(id) {
      return this._http.delete(`${this.API_URL}/${id}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .tap */ .M)(() => this.toastrService.success(this.getTranslation('SPRINTS_PAGE.SPRINT_DELETED'))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .catchError */ .W)(error => this.errorHandler(error)));
    }
    errorHandler(error) {
      this.toastrService.danger(error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__/* .throwError */ .$)(error.message);
    }
    static {
      this.ɵfac = function SprintService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || SprintService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵinject"] */ .KVO(_angular_common_http__WEBPACK_IMPORTED_MODULE_7__/* .HttpClient */ .Qq), _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵinject"] */ .KVO(_notification__WEBPACK_IMPORTED_MODULE_8__/* .ToastrService */ .t), _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵinject"] */ .KVO(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__/* .TranslateService */ .c$));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵdefineInjectable"] */ .jDH({
        token: SprintService,
        factory: SprintService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return SprintService;
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

/***/ 50257:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ TaskSettingsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(64411);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9620);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17785);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29421);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(87081);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(73246);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(64320);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(23423);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(66496);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(38736);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(71924);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(56383);
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(79475);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(14572);
/* harmony import */ var _packages_ui_core_shared_src_lib_components_back_navigation_back_navigation_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(90910);
/* harmony import */ var _project_view_project_view_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(28159);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(19223);















const _c0 = () => ["ALL_ORG_EDIT", "ORG_PROJECT_EDIT"];
function TaskSettingsComponent_ng_template_0_nb_card_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-card", 2)(1, "nb-card-header", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(2, "ngx-back-navigation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(3, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(8, "nb-card-body", 5)(9, "ngx-project-view", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("changeEvent", function TaskSettingsComponent_ng_template_0_nb_card_0_Template_ngx_project_view_changeEvent_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.changeProject($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
  }
  if (rf & 2) {
    const project_r3 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(5, 4, "TASKS_PAGE.PROJECT"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate2"] */ .Lme(" ", project_r3.name, " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(7, 6, "TASKS_PAGE.SETTINGS"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("project", project_r3);
  }
}
function TaskSettingsComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(0, TaskSettingsComponent_ng_template_0_nb_card_0_Template, 10, 8, "nb-card", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(1, "async");
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(1, 1, ctx_r1.project$));
  }
}
let TaskSettingsComponent = class TaskSettingsComponent {
  constructor(_taskStore, _route, _taskService, _store) {
    this._taskStore = _taskStore;
    this._route = _route;
    this._taskService = _taskService;
    this._store = _store;
    this.PermissionsEnum = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_1__/* .PermissionsEnum */ .U;
    this.project$ = this._route.params.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .switchMap */ .n)(({
      id: currentProjectId
    }) => {
      const {
        id: organizationId
      } = this._store.selectedOrganization;
      const {
        tenantId
      } = this._store.user;
      return this._taskService.getAllTasks({
        organizationId,
        tenantId,
        ...(currentProjectId ? {
          projectId: currentProjectId
        } : {})
      }, ['project']).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .map */ .T)(({
        items,
        total
      }) => {
        const projectTasks = items;
        if (total > 0) {
          return {
            ...projectTasks[0].project,
            tasks: projectTasks
          };
        }
        return null;
      }), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .untilDestroyed */ .s)(this));
    }));
  }
  changeProject(evt) {
    this.project$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .M)(({
      id
    }) => {
      this._taskStore.updateTasksViewMode(id, evt);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .take */ .s)(1)).subscribe();
  }
  static {
    this.ɵfac = function TaskSettingsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || TaskSettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_7__/* .TasksStoreService */ .h), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_router__WEBPACK_IMPORTED_MODULE_8__/* .ActivatedRoute */ .nX), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_9__/* .TasksService */ .w), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_10__/* .Store */ .il));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
      type: TaskSettingsComponent,
      selectors: [["ngx-task-settings"]],
      standalone: false,
      decls: 1,
      vars: 2,
      consts: [[3, "ngxPermissionsOnly"], ["class", "h-100 task-settings", 4, "ngIf"], [1, "h-100", "task-settings"], [1, "header", "align-items-center", "task-settings__title"], [1, "bold"], [1, "task-settings__projects"], [3, "changeEvent", "project"]],
      template: function TaskSettingsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(0, TaskSettingsComponent_ng_template_0_Template, 2, 3, "ng-template", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngxPermissionsOnly", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction0"] */ .lJ4(1, _c0));
        }
      },
      dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbCardComponent */ .SrT, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbCardBodyComponent */ .KH5, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbCardHeaderComponent */ .zJv, ngx_permissions__WEBPACK_IMPORTED_MODULE_12__/* .NgxPermissionsDirective */ .f6, _angular_common__WEBPACK_IMPORTED_MODULE_13__/* .NgIf */ .bT, _packages_ui_core_shared_src_lib_components_back_navigation_back_navigation_component__WEBPACK_IMPORTED_MODULE_14__/* .BackNavigationComponent */ .r, _project_view_project_view_component__WEBPACK_IMPORTED_MODULE_15__/* .ProjectViewComponent */ .M, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__/* .TranslatePipe */ .D9, _angular_common__WEBPACK_IMPORTED_MODULE_13__/* .AsyncPipe */ .Jj],
      styles: ["[_nghost-%COMP%] {\n  height: 100%;\n}\n[_nghost-%COMP%]   .task-settings[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n}\n[_nghost-%COMP%]   .task-settings__projects[_ngcontent-%COMP%] {\n  padding: 0 !important;\n  background-color: var(--gauzy-card-2);\n}\n[_nghost-%COMP%]   .header[_ngcontent-%COMP%] {\n  display: flex;\n  font-size: 24px;\n  font-weight: 400;\n  line-height: 30px;\n  letter-spacing: 0em;\n  text-align: left;\n}\n[_nghost-%COMP%]   .header[_ngcontent-%COMP%]   .bold[_ngcontent-%COMP%] {\n  font-weight: 600;\n}"]
    });
  }
};
TaskSettingsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_17__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .UntilDestroy */ .d)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_17__/* .__metadata */ .Sn)("design:paramtypes", [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_7__/* .TasksStoreService */ .h, _angular_router__WEBPACK_IMPORTED_MODULE_8__/* .ActivatedRoute */ .nX, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_9__/* .TasksService */ .w, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_10__/* .Store */ .il])], TaskSettingsComponent);


/***/ }),

/***/ 54830:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P: () => (/* binding */ TasksSprintViewComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(64411);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26860);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(87081);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(73246);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(72781);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(64320);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(71750);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(56383);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(19223);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(23423);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(97939);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(66496);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(71924);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29350);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(14572);
/* harmony import */ var _task_task_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98144);
















function TasksSprintViewComponent_nb_accordion_item_2_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("click", function TasksSprintViewComponent_nb_accordion_item_2_button_6_Template_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r2);
      const sprint_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG().$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx_r3.completeSprint(sprint_r3, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(2, 1, "TASKS_PAGE.COMPLETE_SPRINT"), " ");
  }
}
function TasksSprintViewComponent_nb_accordion_item_2_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "div", 15)(1, "div", 19)(2, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(6, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const sprint_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI("", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(4, 2, "TASKS_PAGE.DATE_START"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind2"] */ .i5U(6, 4, sprint_r3.startDate, "short"), " ");
  }
}
function TasksSprintViewComponent_nb_accordion_item_2_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "div", 15)(1, "div", 19)(2, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(6, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const sprint_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI("", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(4, 2, "TASKS_PAGE.DATE_END"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind2"] */ .i5U(6, 4, sprint_r3.endDate, "short"), " ");
  }
}
function TasksSprintViewComponent_nb_accordion_item_2_nb_accordion_item_body_12_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainer"] */ .eu8(0);
  }
}
function TasksSprintViewComponent_nb_accordion_item_2_nb_accordion_item_body_12_ga_sprint_task_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "ga-sprint-task", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("taskActionEvent", function TasksSprintViewComponent_nb_accordion_item_2_nb_accordion_item_body_12_ga_sprint_task_3_Template_ga_sprint_task_taskActionEvent_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r6);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG(3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx_r3.taskAction($event));
    })("changeStatusEvent", function TasksSprintViewComponent_nb_accordion_item_2_nb_accordion_item_body_12_ga_sprint_task_3_Template_ga_sprint_task_changeStatusEvent_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r6);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG(3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx_r3.changeTaskStatus($event));
    })("click", function TasksSprintViewComponent_nb_accordion_item_2_nb_accordion_item_body_12_ga_sprint_task_3_Template_ga_sprint_task_click_0_listener() {
      const task_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r6).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG(3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx_r3.toggleItemSelection(task_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const task_r7 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("isSelected", ctx_r3.sync && task_r7 === ctx_r3.selectedTask)("task", task_r7);
  }
}
function TasksSprintViewComponent_nb_accordion_item_2_nb_accordion_item_body_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "nb-accordion-item-body");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(1, TasksSprintViewComponent_nb_accordion_item_2_nb_accordion_item_body_12_ng_container_1_Template, 1, 0, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("cdkDropListDropped", function TasksSprintViewComponent_nb_accordion_item_2_nb_accordion_item_body_12_Template_div_cdkDropListDropped_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r5);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx_r3.drop($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(3, TasksSprintViewComponent_nb_accordion_item_2_nb_accordion_item_body_12_ga_sprint_task_3_Template, 1, 2, "ga-sprint-task", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const sprint_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG().$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
    const taskHeader_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵreference"] */ .sdS(12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngTemplateOutlet", taskHeader_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpropertyInterpolate"] */ .FS9("id", sprint_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("cdkDropListData", sprint_r3.tasks)("cdkDropListConnectedTo", ctx_r3.sprintIds);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngForOf", sprint_r3.tasks)("ngForTrackBy", ctx_r3.trackByFn);
  }
}
function TasksSprintViewComponent_nb_accordion_item_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "nb-accordion-item", 4)(1, "nb-accordion-item-header", 9)(2, "div", 10)(3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(5, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(6, TasksSprintViewComponent_nb_accordion_item_2_button_6_Template, 3, 3, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(7, "div", 14)(8, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(10, TasksSprintViewComponent_nb_accordion_item_2_div_10_Template, 7, 7, "div", 16)(11, TasksSprintViewComponent_nb_accordion_item_2_div_11_Template, 7, 7, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(12, TasksSprintViewComponent_nb_accordion_item_2_nb_accordion_item_body_12_Template, 4, 6, "nb-accordion-item-body", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const sprint_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("expanded", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .JRh(sprint_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngIf", sprint_r3.isActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI("Tasks: ", sprint_r3.tasks == null ? null : sprint_r3.tasks.length, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngIf", sprint_r3.startDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngIf", sprint_r3.endDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngIf", (sprint_r3 == null ? null : sprint_r3.tasks == null ? null : sprint_r3.tasks.length) > 0);
  }
}
function TasksSprintViewComponent_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainer"] */ .eu8(0);
  }
}
function TasksSprintViewComponent_ga_sprint_task_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "ga-sprint-task", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("changeStatusEvent", function TasksSprintViewComponent_ga_sprint_task_10_Template_ga_sprint_task_changeStatusEvent_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r9);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx_r3.changeTaskStatus($event));
    })("taskActionEvent", function TasksSprintViewComponent_ga_sprint_task_10_Template_ga_sprint_task_taskActionEvent_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r9);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx_r3.taskAction($event));
    })("click", function TasksSprintViewComponent_ga_sprint_task_10_Template_ga_sprint_task_click_0_listener() {
      const task_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r9).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx_r3.toggleItemSelection(task_r10));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const task_r10 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("isSelected", ctx_r3.sync && task_r10 === ctx_r3.selectedTask)("task", task_r10);
  }
}
function TasksSprintViewComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "div", 25)(1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(4, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(7, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(10, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(13, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(17, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(20, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(22, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(3, 8, "TASKS_PAGE.TASK_ID"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(6, 10, "TASKS_PAGE.TASKS_TITLE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(9, 12, "TASKS_PAGE.TASKS_PROJECT"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(12, 14, "TASKS_PAGE.TASKS_CREATOR"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate2"] */ .Lme(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(15, 16, "TASKS_PAGE.TASK_MEMBERS"), "/ ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(16, 18, "TASKS_PAGE.TASK_TEAMS"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(19, 20, "TASKS_PAGE.DUE_DATE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(22, 22, "TASKS_PAGE.TASKS_STATUS"));
  }
}
let TasksSprintViewComponent = class TasksSprintViewComponent extends _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_2__/* .GauzyEditableGridComponent */ .k {
  constructor(store$, translateService, dialogService, taskStore, storeService) {
    super(translateService, dialogService);
    this.store$ = store$;
    this.taskStore = taskStore;
    this.storeService = storeService;
    this.sprints = [];
    this.backlogTasks = [];
    this.tasks = [];
    this.createTaskEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__/* .EventEmitter */ .bkB();
    this.editTaskEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__/* .EventEmitter */ .bkB();
    this.deleteTaskEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__/* .EventEmitter */ .bkB();
    this.selectedTaskEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__/* .EventEmitter */ .bkB();
    this.sprints$ = this.store$.sprints$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .map */ .T)(sprints => sprints.filter(sprint => sprint.projectId === this.project.id)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .tap */ .M)(sprints => {
      this.sprintIds = [...sprints.map(sprint => sprint.id), 'backlog'];
    }));
    this.sprintIds = [];
    this.sprintActions = [];
    this.isSelected = false;
    this.sync = false;
  }
  ngOnInit() {
    this.backlogTasks = this.tasks;
    this.sprintActions = [{
      title: this.getTranslation('TASKS_PAGE.EDIT_SPRINT')
    }, {
      title: this.getTranslation('TASKS_PAGE.DELETE_SPRINT')
    }];
  }
  initOrganization(project) {
    this.storeService.selectedOrganization$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .filter */ .p)(organization => !!organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .tap */ .M)(organization => {
      const {
        tenantId
      } = this.storeService.user;
      const {
        id: organizationId
      } = organization;
      this.organizationId = organizationId;
      this.store$.fetchSprints({
        organizationId,
        projectId: project.id,
        tenantId
      });
    }), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__/* .untilDestroyed */ .s)(this)).subscribe();
  }
  reduceTasks(tasks) {
    this.sprints$.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__/* .untilDestroyed */ .s)(this)).subscribe(availableSprints => {
      const sprints = availableSprints.reduce((acc, sprint) => {
        acc[sprint.id] = {
          ...sprint,
          tasks: sprint.tasks || []
        };
        return acc;
      }, {});
      this.sprints = Object.values(sprints);
      const backlog = [];
      tasks.forEach(task => {
        if (!task.organizationSprint) {
          backlog.push(task);
        }
      });
      this.backlogTasks = backlog;
    });
  }
  ngOnChanges(changes) {
    if (changes.tasks) {
      this.reduceTasks(changes.tasks.currentValue);
    }
    if (changes.project) {
      this.initOrganization(changes.project.currentValue);
    }
  }
  createTask() {
    this.createTaskEvent.emit();
  }
  editTask(selectedItem) {
    this.selectedTaskEvent.emit(this.selectedItem || selectedItem);
  }
  deleteTask(selectedItem) {
    this.deleteTaskEvent.emit(selectedItem);
  }
  toggleItemSelection(task) {
    this.isSelected = this.isSelected && task === this.selectedTask ? !this.isSelected : true;
    this.selectedTask = task === this.selectedTask ? null : task;
    this.selectedTaskEvent.emit({
      data: task,
      isSelected: this.isSelected
    });
  }
  drop(event) {
    if (event.previousContainer === event.container) {
      (0,_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__/* .moveItemInArray */ .HD)(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      this.taskStore.editTask({
        id: event.item.data.id,
        title: event.item.data.title,
        organizationSprint: this.sprints.find(sprint => sprint.id === event.container.id) || null
      }).pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__/* .untilDestroyed */ .s)(this)).subscribe();
      (0,_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__/* .transferArrayItem */ .eg)(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
    }
  }
  taskAction(evt) {
    switch (evt.action) {
      case 'EDIT_TASK':
        this.editTask(evt.task);
        break;
      case 'DELETE_TASK':
        this.deleteTask(evt.task);
        break;
    }
  }
  changeTaskStatus({
    id,
    taskStatus,
    status,
    title
  }) {
    this.taskStore.editTask({
      id,
      status,
      title,
      organizationId: this.organizationId,
      taskStatus
    }).pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__/* .untilDestroyed */ .s)(this)).subscribe();
  }
  completeSprint(sprint, evt) {
    this.preventExpand(evt);
    this.store$.updateSprint({
      ...sprint,
      isActive: false
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .take */ .s)(1), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__/* .untilDestroyed */ .s)(this)).subscribe();
  }
  trackByFn(task) {
    return task.id ? task.id : null;
  }
  preventExpand(evt) {
    evt.stopPropagation();
    evt.preventDefault();
  }
  static {
    this.ɵfac = function TasksSprintViewComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || TasksSprintViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_9__/* .SprintStoreService */ .x), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__/* .TranslateService */ .c$), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbDialogService */ .S0W), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_12__/* .TasksStoreService */ .h), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_13__/* .Store */ .il));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineComponent"] */ .VBU({
      type: TasksSprintViewComponent,
      selectors: [["ga-tasks-sprint-view"]],
      inputs: {
        tasks: "tasks",
        project: "project",
        sync: "sync"
      },
      outputs: {
        createTaskEvent: "createTaskEvent",
        editTaskEvent: "editTaskEvent",
        deleteTaskEvent: "deleteTaskEvent",
        selectedTaskEvent: "selectedTaskEvent"
      },
      standalone: false,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3, _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵNgOnChangesFeature"] */ .OA$],
      decls: 13,
      vars: 9,
      consts: [["taskHeader", ""], [1, "sprints"], ["multi", ""], [3, "expanded", 4, "ngFor", "ngForOf"], [3, "expanded"], [1, "backlog-header"], [4, "ngTemplateOutlet"], ["id", "backlog", "cdkDropList", "", 3, "cdkDropListDropped", "cdkDropListData", "cdkDropListConnectedTo"], [3, "isSelected", "task", "changeStatusEvent", "taskActionEvent", "click", 4, "ngFor", "ngForOf"], [1, "d-flex", "flex-column", "align-items-start"], [1, "sprint__title", "w-100", "d-flex", "flex-row", "justify-content-between"], [1, "h6"], [1, "sprint__actions", "mr-5"], ["nbButton", "", "size", "tiny", 3, "click", 4, "ngIf"], [1, "sprint__details", "row"], [1, "col"], ["class", "col", 4, "ngIf"], [4, "ngIf"], ["nbButton", "", "size", "tiny", 3, "click"], [1, "d-flex", "flex-column"], [1, "date"], ["cdkDropList", "", 1, "tasks", 3, "cdkDropListDropped", "id", "cdkDropListData", "cdkDropListConnectedTo"], [3, "isSelected", "task", "taskActionEvent", "changeStatusEvent", "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "taskActionEvent", "changeStatusEvent", "click", "isSelected", "task"], [3, "changeStatusEvent", "taskActionEvent", "click", "isSelected", "task"], [1, "row", "header"], [1, "col-1"]],
      template: function TasksSprintViewComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetCurrentView"] */ .RV6();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "div", 1)(1, "nb-accordion", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(2, TasksSprintViewComponent_nb_accordion_item_2_Template, 13, 7, "nb-accordion-item", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(3, "nb-accordion-item", 4)(4, "nb-accordion-item-header", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(6, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(7, "nb-accordion-item-body");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(8, TasksSprintViewComponent_ng_container_8_Template, 1, 0, "ng-container", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(9, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("cdkDropListDropped", function TasksSprintViewComponent_Template_div_cdkDropListDropped_9_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx.drop($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(10, TasksSprintViewComponent_ga_sprint_task_10_Template, 1, 2, "ga-sprint-task", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(11, TasksSprintViewComponent_ng_template_11_Template, 23, 24, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplateRefExtractor"] */ .C5r);
        }
        if (rf & 2) {
          const taskHeader_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵreference"] */ .sdS(12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx.sprints);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("expanded", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(6, 7, "TASKS_PAGE.BACKLOG"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngTemplateOutlet", taskHeader_r8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("cdkDropListData", ctx.backlogTasks)("cdkDropListConnectedTo", ctx.sprintIds);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx.backlogTasks);
        }
      },
      dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbButtonComponent */ .YP2, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbAccordionComponent */ .Ul7, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbAccordionItemComponent */ .vx8, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbAccordionItemHeaderComponent */ .Ig3, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbAccordionItemBodyComponent */ .LHJ, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__/* .CdkDropList */ .O7, _angular_common__WEBPACK_IMPORTED_MODULE_14__/* .NgForOf */ .Sq, _angular_common__WEBPACK_IMPORTED_MODULE_14__/* .NgIf */ .bT, _angular_common__WEBPACK_IMPORTED_MODULE_14__/* .NgTemplateOutlet */ .T3, _task_task_component__WEBPACK_IMPORTED_MODULE_0__/* .SprintTaskComponent */ .N, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__/* .TranslatePipe */ .D9, _angular_common__WEBPACK_IMPORTED_MODULE_14__/* .DatePipe */ .vh],
      styles: [".task[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n.h6[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 600;\n  line-height: 18px;\n  letter-spacing: 0em;\n  color: var(--gauzy-text-color-2) !important;\n}\n\n.col[_ngcontent-%COMP%] {\n  color: var(--gauzy-text-color-1);\n}\n\n.sprint__details[_ngcontent-%COMP%] {\n  min-width: 60%;\n}\n\n.sprint[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 17px;\n  letter-spacing: 0em;\n  color: var(--gauzy-text-color-1);\n}\n\n.sprints[_ngcontent-%COMP%] {\n  height: calc(100vh - 24rem);\n  overflow: auto;\n  border-radius: var(--border-radius);\n}\n\n.header[_ngcontent-%COMP%] {\n  padding: 1rem 14px;\n  margin: 4px 0;\n  background-color: var(--gauzy-card-1);\n  border-radius: var(--border-radius);\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 15px;\n  letter-spacing: 0em;\n}\n.header[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  color: var(--gauzy-text-color-2);\n}\n\n.date[_ngcontent-%COMP%] {\n  color: var(--gauzy-text-color-2);\n}\n\nnb-accordion-item-header.backlog-header[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-sidebar-background-3);\n  color: var(--gauzy-text-color-2);\n}\nnb-accordion-item-header.backlog-header.accordion-item-header-collapsed[_ngcontent-%COMP%] {\n  border-radius: 0 0 var(--border-radius) var(--border-radius);\n}\n\nnb-accordion[_ngcontent-%COMP%] {\n  box-shadow: none;\n}"]
    });
  }
};
TasksSprintViewComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_15__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__/* .UntilDestroy */ .d)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_15__/* .__metadata */ .Sn)("design:paramtypes", [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_9__/* .SprintStoreService */ .x, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__/* .TranslateService */ .c$, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__/* .NbDialogService */ .S0W, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_12__/* .TasksStoreService */ .h, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_13__/* .Store */ .il])], TasksSprintViewComponent);


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

/***/ 55384:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   z: () => (/* binding */ VendorSelectModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14572);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10936);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19223);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56383);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(55567);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);







let VendorSelectModule = /*#__PURE__*/(() => {
  class VendorSelectModule {
    static {
      this.ɵfac = function VendorSelectModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || VendorSelectModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .$C({
        type: VendorSelectModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .CommonModule */ .MD, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbSelectModule */ .VcP, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .FormsModule */ .YN, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__/* .TranslateModule */ .h.forChild(), _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__/* .NgSelectModule */ .MQ]
      });
    }
  }
  return VendorSelectModule;
})();

/***/ }),

/***/ 58504:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ FavoriteToggleModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14572);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56383);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19223);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);




let FavoriteToggleModule = /*#__PURE__*/(() => {
  class FavoriteToggleModule {
    static {
      this.ɵfac = function FavoriteToggleModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || FavoriteToggleModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .$C({
        type: FavoriteToggleModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .CommonModule */ .MD, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbButtonModule */ .P5N, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbIconModule */ .clu, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbTooltipModule */ .IB0, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__/* .TranslateModule */ .h]
      });
    }
  }
  return FavoriteToggleModule;
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

/***/ 64343:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ TaskComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(73014);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(64411);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(9620);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(45715);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(24237);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(57733);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(36950);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(73246);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(71181);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(72781);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(84409);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(19223);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(56383);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(23423);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(35665);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(66496);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(11191);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(65792);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(71924);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(54263);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(17134);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(47108);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(65499);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(21968);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(33829);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(27985);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(13715);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(13845);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(47825);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(35657);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(51782);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(23249);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(9453);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(78433);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(38956);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(55101);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(91073);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(81236);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(10205);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(17785);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(56314);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(46076);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(26024);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(64913);
/* harmony import */ var _my_task_dialog_my_task_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53619);
/* harmony import */ var _team_task_dialog_team_task_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70665);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26860);
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(79475);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(14572);
/* harmony import */ var _packages_ui_core_shared_src_lib_components_header_title_header_title_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(49072);
/* harmony import */ var _packages_ui_core_shared_src_lib_directives_under_construction_directive__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(67063);
/* harmony import */ var _packages_ui_core_shared_src_lib_card_grid_card_grid_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(49517);
/* harmony import */ var _packages_ui_core_shared_src_lib_favorite_toggle_favorite_toggle_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(6421);
/* harmony import */ var angular2_smart_table__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(52345);
/* harmony import */ var _packages_ui_core_shared_src_lib_gauzy_button_action_gauzy_button_action_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(45293);
/* harmony import */ var _packages_ui_core_shared_src_lib_smart_data_layout_pagination_pagination_v2_pagination_v2_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(3456);
/* harmony import */ var _tasks_layouts_tasks_sprint_view_tasks_sprint_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(54830);
































const _c0 = () => ["ALL_ORG_EDIT", "ORG_PROJECT_EDIT"];
const _c1 = a0 => ({
  project: a0
});
const _c2 = () => ["ALL_ORG_VIEW", "ORG_TASK_VIEW"];
const _c3 = a0 => ({
  pagination: a0
});
const _c4 = () => ["ALL_ORG_EDIT", "ALL_ORG_VIEW", "ORG_TASK_VIEW", "ORG_TASK_EDIT", "ORG_TASK_DELETE"];
const _c5 = () => ["ALL_ORG_EDIT", "ORG_TASK_EDIT"];
const _c6 = () => ["ALL_ORG_EDIT", "ORG_TASK_DELETE"];
const _c7 = () => ["ALL_ORG_EDIT", "ORG_TASK_ADD"];
function TaskComponent_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .bMT(2, 1, "TASKS_PAGE.HEADER"), " ");
  }
}
function TaskComponent_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .bMT(2, 1, "TASKS_PAGE.MY_TASK_HEADER"), " ");
  }
}
function TaskComponent_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .bMT(2, 1, "TASKS_PAGE.TEAM_TASKS_HEADER"), " ");
  }
}
function TaskComponent_ng_template_8_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .j41(0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵlistener"] */ .bIt("click", function TaskComponent_ng_template_8_ng_template_0_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵrestoreView"] */ .eBV(_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵresetView"] */ .Njj(ctx_r1.openTasksSettings(ctx_r1.selectedProject));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelement"] */ .nrm(1, "nb-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .k0s();
  }
}
function TaskComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .DNE(0, TaskComponent_ng_template_8_ng_template_0_Template, 2, 0, "ng-template", 15);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Y8G("ngIf", !ctx_r1.isDefaultProject);
  }
}
function TaskComponent_ng_template_14_ng_template_0_ng_template_0_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementContainer"] */ .eu8(0);
  }
}
function TaskComponent_ng_template_14_ng_template_0_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .j41(0, "div", 20)(1, "angular2-smart-table", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵlistener"] */ .bIt("userRowSelect", function TaskComponent_ng_template_14_ng_template_0_ng_template_0_Template_angular2_smart_table_userRowSelect_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵrestoreView"] */ .eBV(_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .XpG(3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵresetView"] */ .Njj(ctx_r1.selectTask($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .DNE(2, TaskComponent_ng_template_14_ng_template_0_ng_template_0_ng_container_2_Template, 1, 0, "ng-container", 22);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .XpG(3);
    const paginationTemplate_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵreference"] */ .sdS(16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Y8G("settings", ctx_r1.settingsSmartTable)("source", ctx_r1.smartTableSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Y8G("ngTemplateOutlet", paginationTemplate_r4)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpureFunction1"] */ .eq3(4, _c3, ctx_r1.pagination));
  }
}
function TaskComponent_ng_template_14_ng_template_0_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .j41(0, "ga-card-grid", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .nI1(1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵlistener"] */ .bIt("onSelectedItem", function TaskComponent_ng_template_14_ng_template_0_ng_template_1_Template_ga_card_grid_onSelectedItem_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵrestoreView"] */ .eBV(_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .XpG(3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵresetView"] */ .Njj(ctx_r1.selectTask($event));
    })("scroll", function TaskComponent_ng_template_14_ng_template_0_ng_template_1_Template_ga_card_grid_scroll_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵrestoreView"] */ .eBV(_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .XpG(3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵresetView"] */ .Njj(ctx_r1.onScroll());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .XpG(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Y8G("totalItems", ctx_r1.pagination == null ? null : ctx_r1.pagination.totalItems)("settings", ctx_r1.settingsSmartTable)("source", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .bMT(1, 3, ctx_r1.availableTasks$));
  }
}
function TaskComponent_ng_template_14_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .DNE(0, TaskComponent_ng_template_14_ng_template_0_ng_template_0_Template, 3, 6, "ng-template", 19)(1, TaskComponent_ng_template_14_ng_template_0_ng_template_1_Template, 2, 5, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplateRefExtractor"] */ .C5r);
  }
  if (rf & 2) {
    const gridLayout_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵreference"] */ .sdS(2);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r1.dataLayoutStyle === ctx_r1.componentLayoutStyleEnum.TABLE)("ngIfElse", gridLayout_r6);
  }
}
function TaskComponent_ng_template_14_ng_template_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementContainer"] */ .eu8(0);
  }
}
function TaskComponent_ng_template_14_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .j41(0, "div", 24)(1, "ga-tasks-sprint-view", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .nI1(2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵlistener"] */ .bIt("createTaskEvent", function TaskComponent_ng_template_14_ng_template_1_Template_ga_tasks_sprint_view_createTaskEvent_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵrestoreView"] */ .eBV(_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵresetView"] */ .Njj(ctx_r1.createTaskDialog());
    })("editTaskEvent", function TaskComponent_ng_template_14_ng_template_1_Template_ga_tasks_sprint_view_editTaskEvent_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵrestoreView"] */ .eBV(_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵresetView"] */ .Njj(ctx_r1.editTaskDialog($event));
    })("deleteTaskEvent", function TaskComponent_ng_template_14_ng_template_1_Template_ga_tasks_sprint_view_deleteTaskEvent_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵrestoreView"] */ .eBV(_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵresetView"] */ .Njj(ctx_r1.deleteTask($event));
    })("selectedTaskEvent", function TaskComponent_ng_template_14_ng_template_1_Template_ga_tasks_sprint_view_selectedTaskEvent_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵrestoreView"] */ .eBV(_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵresetView"] */ .Njj(ctx_r1.selectTask($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .DNE(3, TaskComponent_ng_template_14_ng_template_1_ng_container_3_Template, 1, 0, "ng-container", 22);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .XpG(2);
    const paginationTemplate_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵreference"] */ .sdS(16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Y8G("sync", !ctx_r1.disableButton)("project", ctx_r1.selectedProject)("tasks", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .bMT(2, 5, ctx_r1.availableTasks$));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Y8G("ngTemplateOutlet", paginationTemplate_r4)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpureFunction1"] */ .eq3(7, _c3, ctx_r1.pagination));
  }
}
function TaskComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .DNE(0, TaskComponent_ng_template_14_ng_template_0_Template, 3, 2, "ng-template", 18)(1, TaskComponent_ng_template_14_ng_template_1_Template, 4, 9, "ng-template", 18);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Y8G("ngSwitchCase", ctx_r1.taskListTypeEnum.GRID);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Y8G("ngSwitchCase", ctx_r1.taskListTypeEnum.SPRINT);
  }
}
function TaskComponent_ng_template_15_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelement"] */ .nrm(1, "ngx-pagination", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Y8G("source", ctx_r1.smartTableSource);
  }
}
function TaskComponent_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .j41(0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .DNE(1, TaskComponent_ng_template_15_ng_container_1_Template, 2, 1, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r1.smartTableSource);
  }
}
function TaskComponent_ng_template_17_ng_template_0_ngx_favorite_toggle_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .j41(0, "ngx-favorite-toggle", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵlistener"] */ .bIt("favoriteToggled", function TaskComponent_ng_template_17_ng_template_0_ngx_favorite_toggle_1_Template_ngx_favorite_toggle_favoriteToggled_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵrestoreView"] */ .eBV(_r8);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .XpG(3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵresetView"] */ .Njj(ctx_r1.onTaskFavoriteToggled($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .XpG(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Y8G("entityType", "Task")("entityId", ctx_r1.selectedTask.id)("entityName", ctx_r1.selectedTask.title)("disabled", ctx_r1.disableButton)("showLabel", false);
  }
}
function TaskComponent_ng_template_17_ng_template_0_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .j41(0, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelement"] */ .nrm(1, "nb-icon", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .XpG(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Y8G("disabled", ctx_r1.disableButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .bMT(3, 2, "BUTTONS.VIEW"), " ");
  }
}
function TaskComponent_ng_template_17_ng_template_0_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .j41(0, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵlistener"] */ .bIt("click", function TaskComponent_ng_template_17_ng_template_0_ng_template_3_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵrestoreView"] */ .eBV(_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .XpG(3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵresetView"] */ .Njj(ctx_r1.editTaskDialog(ctx_r1.selectedItem));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelement"] */ .nrm(1, "nb-icon", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .XpG(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Y8G("disabled", ctx_r1.disableButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .bMT(3, 2, "BUTTONS.EDIT"), " ");
  }
}
function TaskComponent_ng_template_17_ng_template_0_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .j41(0, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵlistener"] */ .bIt("click", function TaskComponent_ng_template_17_ng_template_0_ng_template_4_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵrestoreView"] */ .eBV(_r10);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .XpG(3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵresetView"] */ .Njj(ctx_r1.duplicateTaskDialog(ctx_r1.selectedItem));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelement"] */ .nrm(1, "nb-icon", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .XpG(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Y8G("disabled", ctx_r1.disableButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .bMT(3, 2, "BUTTONS.DUPLICATE"), " ");
  }
}
function TaskComponent_ng_template_17_ng_template_0_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .j41(0, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .nI1(1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵlistener"] */ .bIt("click", function TaskComponent_ng_template_17_ng_template_0_ng_template_5_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵrestoreView"] */ .eBV(_r11);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .XpG(3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵresetView"] */ .Njj(ctx_r1.deleteTask(ctx_r1.selectedItem));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelement"] */ .nrm(2, "nb-icon", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .XpG(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Y8G("disabled", ctx_r1.disableButton)("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .bMT(1, 2, "BUTTONS.DELETE"));
  }
}
function TaskComponent_ng_template_17_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .j41(0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .DNE(1, TaskComponent_ng_template_17_ng_template_0_ngx_favorite_toggle_1_Template, 1, 5, "ngx-favorite-toggle", 29)(2, TaskComponent_ng_template_17_ng_template_0_ng_template_2_Template, 4, 4, "ng-template", 9)(3, TaskComponent_ng_template_17_ng_template_0_ng_template_3_Template, 4, 4, "ng-template", 9)(4, TaskComponent_ng_template_17_ng_template_0_ng_template_4_Template, 4, 4, "ng-template", 9)(5, TaskComponent_ng_template_17_ng_template_0_ng_template_5_Template, 3, 4, "ng-template", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r1.selectedTask);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Y8G("ngxPermissionsOnly", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpureFunction0"] */ .lJ4(5, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Y8G("ngxPermissionsOnly", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpureFunction0"] */ .lJ4(6, _c5));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Y8G("ngxPermissionsOnly", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpureFunction0"] */ .lJ4(7, _c5));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Y8G("ngxPermissionsOnly", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpureFunction0"] */ .lJ4(8, _c6));
  }
}
function TaskComponent_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .DNE(0, TaskComponent_ng_template_17_ng_template_0_Template, 6, 9, "ng-template", 9);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Y8G("ngxPermissionsOnly", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpureFunction0"] */ .lJ4(1, _c4));
  }
}
function TaskComponent_ng_template_19_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .j41(0, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵlistener"] */ .bIt("click", function TaskComponent_ng_template_19_ng_template_0_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵrestoreView"] */ .eBV(_r12);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵresetView"] */ .Njj(ctx_r1.createTaskDialog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelement"] */ .nrm(1, "nb-icon", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .bMT(3, 1, "BUTTONS.ADD"), " ");
  }
}
function TaskComponent_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .DNE(0, TaskComponent_ng_template_19_ng_template_0_Template, 4, 3, "ng-template", 9);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Y8G("ngxPermissionsOnly", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpureFunction0"] */ .lJ4(1, _c7));
  }
}
let TaskComponent = class TaskComponent extends _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_4__/* .PaginationFilterBaseComponent */ .t {
  constructor(dialogService, _taskStore, _myTaskStore, _teamTaskStore, translateService, _router, _activatedRoute, _store, route, httpClient, _errorHandlingService, _hashNumberPipe, genericFavoriteService) {
    super(translateService);
    this.dialogService = dialogService;
    this._taskStore = _taskStore;
    this._myTaskStore = _myTaskStore;
    this._teamTaskStore = _teamTaskStore;
    this.translateService = translateService;
    this._router = _router;
    this._activatedRoute = _activatedRoute;
    this._store = _store;
    this.route = route;
    this.httpClient = httpClient;
    this._errorHandlingService = _errorHandlingService;
    this._hashNumberPipe = _hashNumberPipe;
    this.genericFavoriteService = genericFavoriteService;
    this._refresh$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__/* .Subject */ .B();
    this._tasks = [];
    this.loading = false;
    this.disableButton = true;
    this.tasks$ = this._taskStore.tasks$;
    this.myTasks$ = this._myTaskStore.myTasks$;
    this.teamTasks$ = this._teamTaskStore.tasks$;
    this.dataLayoutStyle = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_6__/* .ComponentLayoutStyleEnum */ .IE.TABLE;
    this.componentLayoutStyleEnum = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_6__/* .ComponentLayoutStyleEnum */ .IE;
    this.viewMode = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_7__/* .TaskListTypeEnum */ .Tn.GRID;
    this.taskListTypeEnum = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_7__/* .TaskListTypeEnum */ .Tn;
    this.defaultProject = _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_8__/* .ALL_PROJECT_SELECTED */ .K;
    this.taskSubject$ = this.subject$;
    this.selectedTeamIds = [];
    this.favoriteTasks = [];
    this.initTasks();
    this.setView();
  }
  /**
   * If, default project is selected from header
   *
   * @returns
   */
  get isDefaultProject() {
    if (this.selectedProject) {
      return this.selectedProject.id === this.defaultProject.id;
    }
    return true;
  }
  /**
   * return store instance as per page
   */
  get storeInstance() {
    if (this.isTasksPage()) {
      return this._taskStore;
    } else if (this.isMyTasksPage()) {
      return this._myTaskStore;
    } else if (this.isTeamTaskPage()) {
      return this._teamTaskStore;
    }
  }
  initTasks() {
    const path = this._activatedRoute.snapshot.url[0].path;
    if (path === 'me') {
      this.viewComponentName = _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_9__/* .ComponentEnum */ .L.MY_TASKS;
      this.availableTasks$ = this.myTasks$;
      return;
    }
    if (path === 'team') {
      this.viewComponentName = _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_9__/* .ComponentEnum */ .L.TEAM_TASKS;
      this.availableTasks$ = this.teamTasks$;
      return;
    }
    this.viewComponentName = _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_9__/* .ComponentEnum */ .L.ALL_TASKS;
    this.availableTasks$ = this.tasks$;
    return;
  }
  _applyTranslationOnSmartTable() {
    this.translateService.onLangChange.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .tap */ .M)(() => this._loadSmartTableSettings()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__/* .untilDestroyed */ .s)(this)).subscribe();
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
      noDataMessage: this.getTranslation('SM_TABLE.NO_DATA.TASK'),
      columns: {
        taskNumber: {
          title: this.getTranslation('TASKS_PAGE.TASK_ID'),
          type: 'string',
          width: '10%',
          filter: {
            type: 'custom',
            component: _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_12__/* .InputFilterComponent */ .U
          },
          filterFunction: prefix => {
            this.setFilter({
              field: 'prefix',
              search: prefix
            });
          },
          valuePrepareFunction: (value, cell) => {
            return this._hashNumberPipe.transform(value);
          }
        },
        parent: {
          title: this.getTranslation('TASKS_PAGE.PARENT_TASK'),
          type: 'string',
          width: '10%',
          filter: {
            type: 'custom',
            component: _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_12__/* .InputFilterComponent */ .U
          },
          filterFunction: prefix => {
            this.setFilter({
              field: 'parent.prefix',
              search: prefix
            });
          },
          valuePrepareFunction: (value, cell) => {
            const parentTaskNumber = cell.getRow().getData()?.parent?.taskNumber;
            if (!parentTaskNumber) return '-';
            return this._hashNumberPipe.transform(parentTaskNumber);
          }
        },
        description: {
          title: this.getTranslation('TASKS_PAGE.TASKS_TITLE'),
          type: 'custom',
          class: 'align-row',
          renderComponent: _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_13__/* .NotesWithTagsComponent */ .i,
          componentInitFunction: (instance, cell) => {
            instance.value = cell.getValue();
            instance.rowData = cell.getRow().getData();
          },
          filter: {
            type: 'custom',
            component: _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_12__/* .InputFilterComponent */ .U
          },
          filterFunction: value => {
            this.setFilter({
              field: 'title',
              search: value
            });
          }
        },
        project: {
          title: this.getTranslation('TASKS_PAGE.TASKS_PROJECT'),
          type: 'custom',
          isFilterable: false,
          renderComponent: _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_14__/* .ProjectComponent */ .t,
          componentInitFunction: (instance, cell) => {
            instance.value = cell.getValue();
            instance.rowData = cell.getRow().getData();
          }
        },
        createdAt: {
          title: this.getTranslation('SM_TABLE.CREATED_AT'),
          type: 'custom',
          isFilterable: false,
          renderComponent: _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_15__/* .CreatedAtComponent */ .X,
          componentInitFunction: (instance, cell) => {
            instance.value = cell.getValue();
          }
        },
        createdByUser: {
          title: this.getTranslation('TASKS_PAGE.TASKS_CREATOR'),
          type: 'custom',
          renderComponent: _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_16__/* .CreatedByUserComponent */ .q,
          componentInitFunction: (instance, cell) => {
            instance.value = cell.getValue();
            instance.rowData = cell.getRow().getData();
          },
          filter: {
            type: 'custom',
            component: _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_12__/* .InputFilterComponent */ .U
          },
          filterFunction: value => {
            this.setFilter({
              field: 'createdByUser.firstName',
              search: value
            });
          }
        },
        ...this.getColumnsByPage(),
        dueDate: {
          title: this.getTranslation('TASKS_PAGE.DUE_DATE'),
          type: 'custom',
          filter: {
            type: 'custom',
            component: _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_12__/* .InputFilterComponent */ .U
          },
          filterFunction: value => {
            this.setFilter({
              field: 'dueDate',
              search: value
            });
          },
          renderComponent: _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_17__/* .DateViewComponent */ .l,
          componentInitFunction: (instance, cell) => {
            instance.value = cell.getValue();
            instance.rowData = cell.getRow().getData();
          }
        },
        status: {
          title: this.getTranslation('TASKS_PAGE.TASKS_STATUS'),
          type: 'custom',
          width: '10%',
          renderComponent: _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_18__/* .StatusViewComponent */ .N,
          componentInitFunction: (instance, cell) => {
            instance.value = cell.getValue();
            instance.rowData = cell.getRow().getData();
          },
          filter: {
            type: 'custom',
            component: _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_19__/* .TaskStatusFilterComponent */ .X
          },
          filterFunction: value => {
            this.setFilter({
              field: 'status',
              search: value?.name
            });
          }
        }
      }
    };
  }
  getColumnsByPage() {
    if (this.isTasksPage()) {
      return {
        employeesMergedTeams: {
          title: this.getTranslation('TASKS_PAGE.TASK_MEMBERS') + '/' + this.getTranslation('TASKS_PAGE.TASK_TEAMS'),
          type: 'custom',
          isFilterable: false,
          renderComponent: _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_20__/* .EmployeesMergedTeamsComponent */ .J,
          componentInitFunction: (instance, cell) => {
            instance.value = cell.getRawValue();
            instance.rowData = cell.getRow().getData();
          }
        }
      };
    } else if (this.isMyTasksPage()) {
      return {
        assignTo: {
          title: this.getTranslation('TASKS_PAGE.TASK_ASSIGNED_TO'),
          type: 'custom',
          isFilterable: false,
          renderComponent: _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_21__/* .AssignedToComponent */ .v,
          componentInitFunction: (instance, cell) => {
            instance.value = cell.getValue();
            instance.rowData = cell.getRow().getData();
          }
        }
      };
    } else if (this.isTeamTaskPage()) {
      return {
        assignTo: {
          title: this.getTranslation('TASKS_PAGE.TASK_ASSIGNED_TO'),
          type: 'custom',
          width: '12%',
          renderComponent: _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_21__/* .AssignedToComponent */ .v,
          componentInitFunction: (instance, cell) => {
            instance.value = cell.getValue();
            instance.rowData = cell.getRow().getData();
          },
          filter: {
            type: 'custom',
            component: _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_22__/* .OrganizationTeamFilterComponent */ .S
          },
          filterFunction: value => {
            this.setFilter({
              field: 'teams',
              search: value ? [value.id] : []
            });
          }
        }
      };
    } else {
      return {};
    }
  }
  ngOnInit() {
    this._loadSmartTableSettings();
    this._applyTranslationOnSmartTable();
    this.taskSubject$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__/* .debounceTime */ .B)(400), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .tap */ .M)(() => this.clearItem()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .tap */ .M)(() => this.getTasks()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__/* .untilDestroyed */ .s)(this)).subscribe();
    this.pagination$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__/* .debounceTime */ .B)(100), (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_24__/* .distinctUntilChange */ .nI)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .tap */ .M)(() => this.taskSubject$.next(true)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__/* .untilDestroyed */ .s)(this)).subscribe();
    const storeOrganization$ = this._store.selectedOrganization$;
    const storeEmployee$ = this._store.selectedEmployee$;
    const storeProject$ = this._store.selectedProject$;
    const storeTeam$ = this._store.selectedTeam$;
    (0,rxjs__WEBPACK_IMPORTED_MODULE_25__/* .combineLatest */ .z)([storeOrganization$, storeEmployee$, storeProject$, storeTeam$]).pipe((0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_24__/* .distinctUntilChange */ .nI)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_26__/* .filter */ .p)(([organization]) => !!organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .tap */ .M)(([organization, employee, project, team]) => {
      this.organization = organization;
      this.selectedEmployeeId = employee?.id || null;
      this.selectedProject = project;
      this.selectedTeamIds = team?.id ? [team.id] : [];
      this.viewMode = project?.taskListType || _gauzy_contracts__WEBPACK_IMPORTED_MODULE_7__/* .TaskListTypeEnum */ .Tn.GRID;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .tap */ .M)(() => this._refresh$.next(true)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .tap */ .M)(() => this.taskSubject$.next(true)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .tap */ .M)(() => this.loadFavoriteTasks()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__/* .untilDestroyed */ .s)(this)).subscribe();
    this.route.queryParamMap.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_26__/* .filter */ .p)(params => !!params && params.get('openAddDialog') === 'true'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__/* .debounceTime */ .B)(1000), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .tap */ .M)(() => this.createTaskDialog()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__/* .untilDestroyed */ .s)(this)).subscribe();
    this._refresh$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_26__/* .filter */ .p)(() => this.dataLayoutStyle === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_6__/* .ComponentLayoutStyleEnum */ .IE.CARDS_GRID), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .tap */ .M)(() => this.refreshPagination()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .tap */ .M)(() => this._tasks = []), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__/* .untilDestroyed */ .s)(this)).subscribe();
  }
  setView() {
    this._store.componentLayout$(this.viewComponentName).pipe((0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_24__/* .distinctUntilChange */ .nI)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .tap */ .M)(componentLayout => this.dataLayoutStyle = componentLayout), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .tap */ .M)(() => this.refreshPagination()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_26__/* .filter */ .p)(componentLayout => componentLayout === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_6__/* .ComponentLayoutStyleEnum */ .IE.CARDS_GRID), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .tap */ .M)(() => this._tasks = []), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .tap */ .M)(() => this.taskSubject$.next(true)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__/* .untilDestroyed */ .s)(this)).subscribe();
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
    } = this._store.user;
    const {
      id: organizationId
    } = this.organization;
    this.smartTableSource = new _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_27__/* .ServerDataSource */ .N(this.httpClient, {
      ...(this.viewComponentName === _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_9__/* .ComponentEnum */ .L.ALL_TASKS ? {
        endPoint: `${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_28__/* .API_PREFIX */ .m4}/tasks/pagination`
      } : {}),
      ...(this.viewComponentName === _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_9__/* .ComponentEnum */ .L.TEAM_TASKS ? {
        endPoint: `${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_28__/* .API_PREFIX */ .m4}/tasks/team`
      } : {}),
      ...(this.viewComponentName === _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_9__/* .ComponentEnum */ .L.MY_TASKS ? {
        endPoint: `${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_28__/* .API_PREFIX */ .m4}/tasks/me`
      } : {}),
      relations: ['members', 'members.user', 'project', 'parent', 'modules', 'tags', 'teams', 'teams.members', 'teams.members.employee', 'teams.members.employee.user', 'createdByUser', 'organizationSprint', 'taskStatus', 'taskSize', 'taskPriority'],
      join: {
        alias: 'task',
        leftJoin: {
          members: 'task.members',
          user: 'members.user'
        }
      },
      where: {
        organizationId,
        tenantId,
        ...(this.selectedProject && this.selectedProject.id ? {
          ...(this.viewMode === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_7__/* .TaskListTypeEnum */ .Tn.SPRINT ? {
            organizationSprintId: null
          } : {}),
          projectId: this.selectedProject.id
        } : {}),
        ...(this.selectedEmployeeId ? {
          members: {
            id: this.selectedEmployeeId
          }
        } : {}),
        ...(this.selectedTeamIds ? {
          teams: this.selectedTeamIds
        } : {}),
        ...(this.filters.where ? this.filters.where : {})
      },
      resultMap: task => {
        return Object.assign({}, task, {
          employees: task.members ? task.members : undefined,
          assignTo: this._teamTaskStore._getTeamNames(task),
          employeesMergedTeams: [task.members, task.teams]
        });
      },
      finalize: () => {
        this.dataLayoutStyle === this.componentLayoutStyleEnum.CARDS_GRID ? this._tasks.push(...this.smartTableSource.getData()) : this._tasks = this.smartTableSource.getData();
        this.storeInstance.loadAllTasks(this._tasks);
        this.setPagination({
          ...this.getPagination(),
          totalItems: this.smartTableSource.count()
        });
        this.loading = false;
      }
    });
  }
  getTasks() {
    var _this = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .A)(function* () {
      if (!_this.organization) {
        return;
      }
      try {
        _this.setSmartTableSource();
        const {
          activePage,
          itemsPerPage
        } = _this.pagination;
        _this.smartTableSource.setPaging(activePage, itemsPerPage, false);
        if (_this.dataLayoutStyle === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_6__/* .ComponentLayoutStyleEnum */ .IE.CARDS_GRID || _this.viewMode === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_7__/* .TaskListTypeEnum */ .Tn.SPRINT) {
          yield _this.smartTableSource.getElements();
          _this.setPagination({
            ..._this.getPagination(),
            totalItems: _this.smartTableSource.count()
          });
        }
      } catch (error) {
        _this._errorHandlingService.handleError(error);
      }
    })();
  }
  createTaskDialog() {
    var _this2 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .A)(function* () {
      let dialog;
      if (_this2.isTasksPage()) {
        dialog = _this2.dialogService.open(_gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_30__/* .AddTaskDialogComponent */ .q, {
          context: {}
        });
      } else if (_this2.isMyTasksPage()) {
        dialog = _this2.dialogService.open(_my_task_dialog_my_task_dialog_component__WEBPACK_IMPORTED_MODULE_0__/* .MyTaskDialogComponent */ .B, {
          context: {}
        });
      } else if (_this2.isTeamTaskPage()) {
        dialog = _this2.dialogService.open(_team_task_dialog_team_task_dialog_component__WEBPACK_IMPORTED_MODULE_1__/* .TeamTaskDialogComponent */ .K, {
          context: {}
        });
      }
      if (dialog) {
        const data = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_31__/* .firstValueFrom */ ._)(dialog.onClose.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_32__/* .first */ .$)()));
        if (data) {
          const {
            estimateDays,
            estimateHours,
            estimateMinutes
          } = data;
          const estimate = estimateDays * 24 * 60 * 60 + estimateHours * 60 * 60 + estimateMinutes * 60;
          estimate ? data.estimate = estimate : data.estimate = null;
          const {
            tenantId
          } = _this2._store.user;
          const {
            id: organizationId
          } = _this2.organization;
          const payload = Object.assign(data, {
            organizationId,
            tenantId
          });
          _this2.storeInstance.createTask(payload).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .tap */ .M)(() => _this2._refresh$.next(true)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .tap */ .M)(() => _this2.taskSubject$.next(true)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__/* .untilDestroyed */ .s)(_this2)).subscribe();
        }
      }
    })();
  }
  editTaskDialog(selectedItem) {
    var _this3 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .A)(function* () {
      if (selectedItem) {
        _this3.selectTask({
          isSelected: true,
          data: selectedItem
        });
      }
      let dialog;
      if (_this3.isTasksPage()) {
        dialog = _this3.dialogService.open(_gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_30__/* .AddTaskDialogComponent */ .q, {
          context: {
            selectedTask: _this3.selectedTask
          }
        });
      } else if (_this3.isMyTasksPage()) {
        dialog = _this3.dialogService.open(_my_task_dialog_my_task_dialog_component__WEBPACK_IMPORTED_MODULE_0__/* .MyTaskDialogComponent */ .B, {
          context: {
            selectedTask: _this3.selectedTask
          }
        });
      } else if (_this3.isTeamTaskPage()) {
        dialog = _this3.dialogService.open(_team_task_dialog_team_task_dialog_component__WEBPACK_IMPORTED_MODULE_1__/* .TeamTaskDialogComponent */ .K, {
          context: {
            selectedTask: _this3.selectedTask
          }
        });
      }
      if (dialog) {
        const data = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_31__/* .firstValueFrom */ ._)(dialog.onClose.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_32__/* .first */ .$)()));
        if (data) {
          const {
            estimateDays,
            estimateHours,
            estimateMinutes
          } = data;
          const estimate = estimateDays * 24 * 60 * 60 + estimateHours * 60 * 60 + estimateMinutes * 60;
          estimate ? data.estimate = estimate : data.estimate = null;
          const {
            tenantId
          } = _this3._store.user;
          const {
            id: organizationId
          } = _this3.organization;
          const payload = Object.assign(data, {
            organizationId,
            tenantId
          });
          _this3.storeInstance.editTask({
            ...payload,
            id: _this3.selectedTask.id
          }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .tap */ .M)(() => _this3._refresh$.next(true)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .tap */ .M)(() => _this3.taskSubject$.next(true)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__/* .untilDestroyed */ .s)(_this3)).subscribe();
        }
      }
    })();
  }
  duplicateTaskDialog(selectedItem) {
    var _this4 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .A)(function* () {
      if (selectedItem) {
        _this4.selectTask({
          isSelected: true,
          data: selectedItem
        });
      }
      let dialog;
      if (_this4.isTasksPage()) {
        dialog = _this4.dialogService.open(_gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_30__/* .AddTaskDialogComponent */ .q, {
          context: {
            selectedTask: _this4.selectedTask
          }
        });
      } else if (_this4.isMyTasksPage()) {
        const selectedTask = Object.assign({}, _this4.selectedTask);
        // while duplicate my task, default selected employee should be logged in employee
        selectedTask.members = null;
        dialog = _this4.dialogService.open(_my_task_dialog_my_task_dialog_component__WEBPACK_IMPORTED_MODULE_0__/* .MyTaskDialogComponent */ .B, {
          context: {
            selectedTask: selectedTask
          }
        });
      } else if (_this4.isTeamTaskPage()) {
        dialog = _this4.dialogService.open(_team_task_dialog_team_task_dialog_component__WEBPACK_IMPORTED_MODULE_1__/* .TeamTaskDialogComponent */ .K, {
          context: {
            selectedTask: _this4.selectedTask
          }
        });
      }
      if (dialog) {
        const data = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_31__/* .firstValueFrom */ ._)(dialog.onClose.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_32__/* .first */ .$)()));
        if (data) {
          const {
            estimateDays,
            estimateHours,
            estimateMinutes
          } = data;
          const estimate = estimateDays * 24 * 60 * 60 + estimateHours * 60 * 60 + estimateMinutes * 60;
          estimate ? data.estimate = estimate : data.estimate = null;
          const {
            tenantId
          } = _this4._store.user;
          const {
            id: organizationId
          } = _this4.organization;
          const payload = Object.assign(data, {
            organizationId,
            tenantId
          });
          _this4.storeInstance.createTask(payload).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .tap */ .M)(() => _this4._refresh$.next(true)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .tap */ .M)(() => _this4.taskSubject$.next(true)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__/* .untilDestroyed */ .s)(_this4)).subscribe();
        }
      }
    })();
  }
  deleteTask(selectedItem) {
    var _this5 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .A)(function* () {
      if (selectedItem) {
        _this5.selectTask({
          isSelected: true,
          data: selectedItem
        });
      }
      const result = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_31__/* .firstValueFrom */ ._)(_this5.dialogService.open(_gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_33__/* .DeleteConfirmationComponent */ .u).onClose.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_32__/* .first */ .$)()));
      if (result) {
        _this5.storeInstance.delete(_this5.selectedTask.id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .tap */ .M)(() => _this5._refresh$.next(true)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .tap */ .M)(() => _this5.taskSubject$.next(true)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__/* .untilDestroyed */ .s)(_this5)).subscribe();
      }
    })();
  }
  selectTask({
    isSelected,
    data
  }) {
    this.disableButton = !isSelected;
    this.selectedTask = isSelected ? data : null;
  }
  isTasksPage() {
    return this.viewComponentName === _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_9__/* .ComponentEnum */ .L.ALL_TASKS;
  }
  isMyTasksPage() {
    return this.viewComponentName === _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_9__/* .ComponentEnum */ .L.MY_TASKS;
  }
  isTeamTaskPage() {
    return this.viewComponentName === _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_9__/* .ComponentEnum */ .L.TEAM_TASKS;
  }
  /**
   * Open task settings page for a specific project.
   *
   * @param selectedProject - The project for which the task settings page should be opened.
   */
  openTasksSettings(selectedProject) {
    if (this.isDefaultProject || !this._store.hasAnyPermission(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_34__/* .PermissionsEnum */ .U.ALL_ORG_EDIT, _gauzy_contracts__WEBPACK_IMPORTED_MODULE_34__/* .PermissionsEnum */ .U.ORG_PROJECT_EDIT)) {
      return;
    }
    this._router.navigate(['/pages/tasks/settings', selectedProject.id], {
      state: selectedProject
    });
  }
  /*
   * Clear selected item
   */
  clearItem() {
    this.selectTask({
      isSelected: false,
      data: null
    });
  }
  ngOnDestroy() {}
  /**
   * Loads the list of favorite tasks for the current user or all for admin using the generic service.
   */
  loadFavoriteTasks() {
    var _this6 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .A)(function* () {
      _this6.favoriteTasks = yield _this6.genericFavoriteService.loadFavorites(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_35__/* .BaseEntityEnum */ .k.Task, _this6.organization, _this6.selectedEmployeeId || _this6._store.user?.employee?.id);
    })();
  }
  /**
   * Handle task favorite toggle event from the new component
   */
  onTaskFavoriteToggled(_event) {
    // Reload favorites to keep the list in sync
    this.loadFavoriteTasks();
  }
  static {
    this.ɵfac = function TaskComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || TaskComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .rXU(_nebular_theme__WEBPACK_IMPORTED_MODULE_36__/* .NbDialogService */ .S0W), _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_37__/* .TasksStoreService */ .h), _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_38__/* .MyTasksStoreService */ .N), _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_39__/* .TeamTasksStoreService */ .i), _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_40__/* .TranslateService */ .c$), _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_router__WEBPACK_IMPORTED_MODULE_41__/* .Router */ .Ix), _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_router__WEBPACK_IMPORTED_MODULE_41__/* .ActivatedRoute */ .nX), _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_42__/* .Store */ .il), _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_router__WEBPACK_IMPORTED_MODULE_41__/* .ActivatedRoute */ .nX), _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_common_http__WEBPACK_IMPORTED_MODULE_43__/* .HttpClient */ .Qq), _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_44__/* .ErrorHandlingService */ .X), _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_45__/* .HashNumberPipe */ .q), _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_46__/* .GenericFavoriteService */ .X));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdefineComponent"] */ .VBU({
      type: TaskComponent,
      selectors: [["ngx-tasks"]],
      standalone: false,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
      decls: 21,
      vars: 17,
      consts: [["paginationTemplate", ""], ["actionButtons", ""], ["visibleButton", ""], ["gridLayout", ""], ["nbSpinnerStatus", "primary", "nbSpinnerSize", "large", 3, "nbSpinner"], [1, "card-customer-header", "pb-0"], [1, "card-header-title"], [3, "allowEmployee"], [4, "ngIf"], [3, "ngxPermissionsOnly"], [1, "tasks-component__settings"], [1, "gauzy-button-container"], [3, "buttonTemplateVisible", "isDisable", "buttonTemplate", "componentName"], [3, "ngClass"], [3, "ngSwitch"], [3, "ngIf"], ["size", "small", "nbButton", "", 3, "click"], ["icon", "settings-2-outline"], [3, "ngSwitchCase"], [3, "ngIf", "ngIfElse"], [1, "table-scroll-container"], [2, "cursor", "pointer", 3, "userRowSelect", "settings", "source"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "onSelectedItem", "scroll", "totalItems", "settings", "source"], [1, "sprint-view"], [3, "createTaskEvent", "editTaskEvent", "deleteTaskEvent", "selectedTaskEvent", "sync", "project", "tasks"], [1, "pagination-container"], [3, "source"], [1, "btn-group", "actions"], ["size", "small", "status", "basic", "spacing", "list", 3, "entityType", "entityId", "entityName", "disabled", "showLabel", "favoriteToggled", 4, "ngIf"], ["size", "small", "status", "basic", "spacing", "list", 3, "favoriteToggled", "entityType", "entityId", "entityName", "disabled", "showLabel"], ["nbButton", "", "status", "basic", "size", "small", "underConstruction", "", 1, "action", "secondary", 3, "disabled"], ["icon", "eye-outline", "pack", "eva"], ["nbButton", "", "status", "basic", "size", "small", 1, "action", "primary", 3, "click", "disabled"], ["icon", "edit-outline"], ["icon", "copy-outline"], ["nbButton", "", "status", "basic", "size", "small", 1, "action", 3, "click", "disabled", "nbTooltip"], ["status", "danger", "icon", "trash-2-outline"], ["nbButton", "", "status", "success", "size", "small", 3, "click"], ["icon", "plus-outline"]],
      template: function TaskComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .j41(0, "nb-card", 4)(1, "nb-card-header", 5)(2, "div", 6)(3, "h4")(4, "ngx-header-title", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .DNE(5, TaskComponent_ng_container_5_Template, 3, 3, "ng-container", 8)(6, TaskComponent_ng_container_6_Template, 3, 3, "ng-container", 8)(7, TaskComponent_ng_container_7_Template, 3, 3, "ng-container", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .k0s()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .DNE(8, TaskComponent_ng_template_8_Template, 1, 1, "ng-template", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .k0s();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .j41(9, "div", 10)(10, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelement"] */ .nrm(11, "ngx-gauzy-button-action", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .k0s()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .j41(12, "nb-card-body", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementContainerStart"] */ .qex(13, 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .DNE(14, TaskComponent_ng_template_14_Template, 2, 2, "ng-template", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementContainerEnd"] */ .bVm();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .k0s()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .DNE(15, TaskComponent_ng_template_15_Template, 2, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplateRefExtractor"] */ .C5r)(17, TaskComponent_ng_template_17_Template, 1, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplateRefExtractor"] */ .C5r)(19, TaskComponent_ng_template_19_Template, 1, 2, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplateRefExtractor"] */ .C5r);
        }
        if (rf & 2) {
          const actionButtons_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵreference"] */ .sdS(18);
          const visibleButton_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵreference"] */ .sdS(20);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Y8G("nbSpinner", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .R7$(4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Y8G("allowEmployee", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .R7$();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.isTasksPage());
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .R7$();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.isMyTasksPage());
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .R7$();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.isTeamTaskPage());
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .R7$();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Y8G("ngxPermissionsOnly", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpureFunction0"] */ .lJ4(13, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .R7$(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Y8G("buttonTemplateVisible", visibleButton_r14)("isDisable", ctx.disableButton)("buttonTemplate", actionButtons_r13)("componentName", ctx.viewComponentName);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .R7$();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Y8G("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpureFunction1"] */ .eq3(14, _c1, ctx.selectedProject));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .R7$();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Y8G("ngSwitch", ctx.viewMode);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .R7$();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Y8G("ngxPermissionsOnly", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpureFunction0"] */ .lJ4(16, _c2));
        }
      },
      dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_36__/* .NbTooltipDirective */ .BmQ, _nebular_theme__WEBPACK_IMPORTED_MODULE_36__/* .NbCardComponent */ .SrT, _nebular_theme__WEBPACK_IMPORTED_MODULE_36__/* .NbCardBodyComponent */ .KH5, _nebular_theme__WEBPACK_IMPORTED_MODULE_36__/* .NbCardHeaderComponent */ .zJv, _nebular_theme__WEBPACK_IMPORTED_MODULE_36__/* .NbButtonComponent */ .YP2, _nebular_theme__WEBPACK_IMPORTED_MODULE_36__/* .NbIconComponent */ .tHu, _nebular_theme__WEBPACK_IMPORTED_MODULE_36__/* .NbSpinnerDirective */ .zwc, ngx_permissions__WEBPACK_IMPORTED_MODULE_47__/* .NgxPermissionsDirective */ .f6, _angular_common__WEBPACK_IMPORTED_MODULE_48__/* .NgClass */ .YU, _angular_common__WEBPACK_IMPORTED_MODULE_48__/* .NgIf */ .bT, _angular_common__WEBPACK_IMPORTED_MODULE_48__/* .NgTemplateOutlet */ .T3, _angular_common__WEBPACK_IMPORTED_MODULE_48__/* .NgSwitch */ .ux, _angular_common__WEBPACK_IMPORTED_MODULE_48__/* .NgSwitchCase */ .e1, _packages_ui_core_shared_src_lib_components_header_title_header_title_component__WEBPACK_IMPORTED_MODULE_49__/* .HeaderTitleComponent */ .X, _packages_ui_core_shared_src_lib_directives_under_construction_directive__WEBPACK_IMPORTED_MODULE_50__/* .UnderConstructionDirective */ .r, _packages_ui_core_shared_src_lib_card_grid_card_grid_component__WEBPACK_IMPORTED_MODULE_51__/* .CardGridComponent */ .c, _packages_ui_core_shared_src_lib_favorite_toggle_favorite_toggle_component__WEBPACK_IMPORTED_MODULE_52__/* .FavoriteToggleComponent */ .M, angular2_smart_table__WEBPACK_IMPORTED_MODULE_53__/* .Angular2SmartTableComponent */ .T9, _packages_ui_core_shared_src_lib_gauzy_button_action_gauzy_button_action_component__WEBPACK_IMPORTED_MODULE_54__/* .GauzyButtonActionComponent */ .A, _packages_ui_core_shared_src_lib_smart_data_layout_pagination_pagination_v2_pagination_v2_component__WEBPACK_IMPORTED_MODULE_55__/* .PaginationV2Component */ .a, _tasks_layouts_tasks_sprint_view_tasks_sprint_view_component__WEBPACK_IMPORTED_MODULE_2__/* .TasksSprintViewComponent */ .P, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_40__/* .TranslatePipe */ .D9, _angular_common__WEBPACK_IMPORTED_MODULE_48__/* .AsyncPipe */ .Jj],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.action[_ngcontent-%COMP%] {\n  box-shadow: var(--gauzy-shadow);\n  border: none;\n}\n.action[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}\n.action.info[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: var(--color-info-default);\n  color: white;\n  border-color: var(--color-info-default);\n}\n.action.info-text-1[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  color: var(--color-info-default);\n}\n.action.secondary[_ngcontent-%COMP%] {\n  color: #7e7e8f;\n}\n.action.success[_ngcontent-%COMP%] {\n  color: var(--color-success-default);\n}\n.action.warning[_ngcontent-%COMP%] {\n  color: rgb(245, 109, 88);\n}\n.action.orange[_ngcontent-%COMP%] {\n  color: rgb(255, 171, 45);\n}\n.action.primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n}\n.action.primary.soft[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: rgba(110, 73, 232, 0.1);\n}\n.action.select-nb[_ngcontent-%COMP%]     {\n  box-shadow: none;\n}\n.action.select-nb[_ngcontent-%COMP%]     .select-button {\n  box-shadow: var(--gauzy-shadow);\n  background: rgb(245, 245, 245);\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n.actions[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-2);\n  border-radius: var(--button-rectangle-border-radius);\n  padding: 2px 4px !important;\n}\n\n.gauzy-button-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n.card-custom-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n[_nghost-%COMP%]     input {\n  border-radius: var(--border-radius);\n  box-shadow: var(--gauzy-shadow) inset;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%], \n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   .table-scroll-container[_ngcontent-%COMP%], \n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .table-scroll-container[_ngcontent-%COMP%] {\n  flex-grow: 10;\n  max-height: unset;\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  border-radius: 0 0 var(--border-radius) var(--border-radius);\n}\n[dir=ltr]   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  padding: 1rem 0.5rem 1rem 18px;\n}\n[dir=rtl]   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  padding: 1rem 18px 1rem 0.5rem;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%], \n[_nghost-%COMP%]   nb-card-header[_ngcontent-%COMP%] {\n  border-radius: var(--border-radius);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  height: 100%;\n  border-radius: var(--border-radius);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-header[_ngcontent-%COMP%] {\n  flex: 0 1 auto;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  overflow: unset;\n  height: calc(100vh - var(--header-height) - var(--footer-height) - 11.5rem + 3.75rem);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-footer[_ngcontent-%COMP%] {\n  flex: 0 1 auto;\n}\n\n.tasks-component__settings[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.project-selector[_ngcontent-%COMP%] {\n  min-width: 15rem;\n}\n.project-selector[_ngcontent-%COMP%]   ng-select[_ngcontent-%COMP%] {\n  min-width: 10rem;\n}\n.project-selector[_ngcontent-%COMP%]   ng-select[_ngcontent-%COMP%]   .selector-template[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  height: 100%;\n}\n\nnb-card-body[_ngcontent-%COMP%] {\n  overflow: unset;\n}\nnb-card-body.project[_ngcontent-%COMP%] {\n  height: calc(100vh - var(--header-height) - var(--footer-height) - 11.5rem + 3.75rem - 0.5rem) !important;\n}\n\n[dir=ltr]   [_nghost-%COMP%]     .sprint-view nb-accordion {\n  padding-right: 0.5rem;\n}\n[dir=rtl]   [_nghost-%COMP%]     .sprint-view nb-accordion {\n  padding-left: 0.5rem;\n}"]
    });
  }
};
TaskComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_56__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__/* .UntilDestroy */ .d)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_56__/* .__metadata */ .Sn)("design:paramtypes", [_nebular_theme__WEBPACK_IMPORTED_MODULE_36__/* .NbDialogService */ .S0W, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_37__/* .TasksStoreService */ .h, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_38__/* .MyTasksStoreService */ .N, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_39__/* .TeamTasksStoreService */ .i, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_40__/* .TranslateService */ .c$, _angular_router__WEBPACK_IMPORTED_MODULE_41__/* .Router */ .Ix, _angular_router__WEBPACK_IMPORTED_MODULE_41__/* .ActivatedRoute */ .nX, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_42__/* .Store */ .il, _angular_router__WEBPACK_IMPORTED_MODULE_41__/* .ActivatedRoute */ .nX, _angular_common_http__WEBPACK_IMPORTED_MODULE_43__/* .HttpClient */ .Qq, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_44__/* .ErrorHandlingService */ .X, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_45__/* .HashNumberPipe */ .q, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_46__/* .GenericFavoriteService */ .X])], TaskComponent);


/***/ }),

/***/ 65792:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   i: () => (/* binding */ TeamTasksStoreService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88326);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79708);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26860);
/* harmony import */ var _tasks_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(38736);





let TeamTasksStoreService = /*#__PURE__*/(() => {
  class TeamTasksStoreService {
    get tasks() {
      return this._tasks$.getValue();
    }
    constructor(_taskService) {
      this._taskService = _taskService;
      this._tasks$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__/* .BehaviorSubject */ .t([]);
      this.tasks$ = this._tasks$.asObservable().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__/* .map */ .T)(this._mapToViewModel.bind(this)));
      this._selectedTask$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__/* .BehaviorSubject */ .t(null);
      this.selectedTask$ = this._selectedTask$.asObservable();
    }
    fetchTasks(tenantId, organizationId, employeeId = '') {
      return this._taskService.getTeamTasks({
        tenantId,
        organizationId
      }, employeeId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .tap */ .M)(({
        items
      }) => this.loadAllTasks(items)));
    }
    _mapToViewModel(tasks) {
      return tasks.map(task => ({
        ...task,
        projectName: task.project ? task.project.name : undefined,
        employees: task.members ? task.members : undefined,
        assignTo: this._getTeamNames(task)
      }));
    }
    _getTeamNames(task) {
      if (task.teams && Array.isArray(task.teams)) {
        return task.teams.map(team => team.name);
      }
      return [];
    }
    loadAllTasks(tasks) {
      this._tasks$.next(tasks);
    }
    createTask(task) {
      return this._taskService.createTask(task).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .tap */ .M)(createdTask => {
        const tasks = [...this.tasks, createdTask];
        this._tasks$.next(tasks);
      }));
    }
    editTask(task) {
      return this._taskService.editTask(task).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .tap */ .M)(() => {
        const tasks = [...this.tasks];
        const newState = tasks.map(t => t.id === task.id ? task : t);
        this._tasks$.next(newState);
      }));
    }
    delete(id) {
      return this._taskService.deleteTask(id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .tap */ .M)(() => {
        const tasks = [...this.tasks];
        const newState = tasks.filter(t => t.id !== id);
        this._tasks$.next(newState);
      }));
    }
    selectTask(task) {
      this._selectedTask$.next(task);
    }
    static {
      this.ɵfac = function TeamTasksStoreService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || TeamTasksStoreService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵinject"] */ .KVO(_tasks_service__WEBPACK_IMPORTED_MODULE_4__/* .TasksService */ .w));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdefineInjectable"] */ .jDH({
        token: TeamTasksStoreService,
        factory: TeamTasksStoreService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return TeamTasksStoreService;
})();

/***/ }),

/***/ 70665:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K: () => (/* binding */ TeamTaskDialogComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(73014);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(64411);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(81995);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10936);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(56383);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(36950);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(19223);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20381);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38546);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(98106);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(71924);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(42433);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(15480);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(54263);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(5855);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(77096);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(23423);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26860);
/* harmony import */ var ckeditor4_angular__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(27697);
/* harmony import */ var _packages_ui_core_shared_src_lib_tags_tags_color_input_tags_color_input_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(62177);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(14572);
/* harmony import */ var _packages_ui_core_shared_src_lib_selectors_project_project_project_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(46582);
/* harmony import */ var _packages_ui_core_shared_src_lib_tasks_task_priority_select_task_priority_select_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(18912);
/* harmony import */ var _packages_ui_core_shared_src_lib_tasks_task_size_select_task_size_select_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(26954);
/* harmony import */ var _packages_ui_core_shared_src_lib_tasks_task_status_select_task_status_select_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(25448);
/* harmony import */ var _packages_ui_core_shared_src_lib_tasks_task_number_task_number_field_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(45997);

var TeamTaskDialogComponent_1;
























function TeamTaskDialogComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "div", 9)(1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(2, "ngx-task-number-field", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("formControl", ctx_r1.form.get("number"))("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(3, 3, "TASKS_PAGE.TASK_NUMBER"))("projectId", ctx_r1.form.get("projectId").value);
  }
}
function TeamTaskDialogComponent_nb_option_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "nb-option", 34);
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
function TeamTaskDialogComponent_nb_option_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "nb-option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const team_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("value", team_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", team_r4.name, "");
  }
}
const initialTaskValue = {
  title: '',
  project: null,
  status: '',
  members: null,
  teams: null,
  estimate: null,
  dueDate: null,
  description: '',
  tags: null,
  taskStatus: null,
  taskSize: null,
  taskPriority: null
};
let TeamTaskDialogComponent = /*#__PURE__*/(() => {
  let TeamTaskDialogComponent = class TeamTaskDialogComponent extends _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_2__/* .TranslationBaseComponent */ .K {
    static {
      TeamTaskDialogComponent_1 = this;
    }
    constructor(dialogRef, fb, store, _organizationsStore, organizationProjectsService, translateService, toastrService, errorHandler, organizationTeamsService, organizationProjectModuleService) {
      super(translateService);
      this.dialogRef = dialogRef;
      this.fb = fb;
      this.store = store;
      this._organizationsStore = _organizationsStore;
      this.organizationProjectsService = organizationProjectsService;
      this.translateService = translateService;
      this.toastrService = toastrService;
      this.errorHandler = errorHandler;
      this.organizationTeamsService = organizationTeamsService;
      this.organizationProjectModuleService = organizationProjectModuleService;
      this.employees = [];
      this.teams = [];
      this.selectedModules = [];
      this.availableModules = [];
      this.tags = [];
      this.ckConfig = _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_3__/* .richTextCKEditorConfig */ .Z;
      this.task = {};
      this.form = TeamTaskDialogComponent_1.buildForm(this.fb);
      this.addNewProject = name => {
        const {
          organizationId,
          tenantId
        } = this;
        try {
          this.toastrService.success('NOTES.ORGANIZATIONS.EDIT_ORGANIZATIONS_PROJECTS.ADD_PROJECT', {
            name
          });
          return this.organizationProjectsService.create({
            name,
            organizationId,
            tenantId
          });
        } catch (error) {
          this.errorHandler.handleError(error);
        }
      };
    }
    static buildForm(fb) {
      return fb.group({
        number: [{
          value: '',
          disabled: true
        }],
        title: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .Validators */ .k0.required],
        project: [],
        projectId: [],
        modules: [],
        status: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_5__/* .TaskStatusEnum */ .F.OPEN],
        priority: [],
        size: [],
        members: [],
        estimateDays: [],
        estimateHours: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .Validators */ .k0.min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .Validators */ .k0.max(23)]],
        estimateMinutes: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .Validators */ .k0.min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .Validators */ .k0.max(59)]],
        dueDate: [],
        description: [],
        tags: [],
        teams: [],
        taskStatus: [],
        taskSize: [],
        taskPriority: []
      });
    }
    loadProjects() {
      var _this = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(function* () {
        const {
          organizationId,
          tenantId
        } = _this;
        const {
          items
        } = yield _this.organizationProjectsService.getAll([], {
          organizationId,
          tenantId
        });
        if (items) _this.projects = items;
      })();
    }
    ngOnInit() {
      var _this2 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(function* () {
        _this2.ckConfig.editorplaceholder = _this2.translateService.instant('FORM.PLACEHOLDERS.DESCRIPTION');
        _this2.tenantId = _this2.store.user.tenantId;
        _this2.organizationId = _this2._organizationsStore.selectedOrganization.id;
        yield _this2.loadProjects();
        yield _this2.loadTeams();
        yield _this2.loadAvailableModules();
        _this2.form.get('projectId').valueChanges.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__/* .untilDestroyed */ .s)(_this2)).subscribe(() => _this2.loadAvailableModules());
        _this2.initializeForm(Object.assign({}, initialTaskValue, _this2.selectedTask || _this2.task));
      })();
    }
    initializeForm({
      title,
      description,
      project,
      status,
      members,
      teams,
      modules,
      estimate,
      dueDate,
      tags,
      priority,
      size,
      taskStatus,
      taskSize,
      taskPriority
    }) {
      const duration = moment__WEBPACK_IMPORTED_MODULE_0__.duration(estimate, 'seconds');
      this.selectedTeams = (teams || []).map(team => team.id);
      this.selectedModules = (modules || []).map(module => module.id);
      // employee id of logged in user, if value is null, disable the save button
      // this.teamIds = null;
      // if (this.store.user) {
      // 	this.teamIds = this.store.user || null;
      // }
      // // select default id of logged in user
      // if (teams === null) {
      // 	this.selectedTeams = [this.employeeId];
      // }
      this.form.patchValue({
        title,
        project,
        projectId: project ? project.id : null,
        status,
        priority,
        size,
        modules: this.selectedModules,
        estimateDays: duration.days(),
        estimateHours: duration.hours(),
        estimateMinutes: duration.minutes(),
        dueDate: dueDate ? new Date(dueDate) : null,
        members,
        description,
        tags,
        teams: this.selectedTeams,
        taskStatus,
        taskSize,
        taskPriority
      });
      this.tags = this.form.get('tags').value || [];
    }
    onSave() {
      if (this.form.valid) {
        this.form.get('teams').setValue((this.selectedTeams || []).map(id => this.teams.find(e => e.id === id)).filter(e => !!e));
        const selectedModules = this.selectedModules || [];
        const mappedModules = selectedModules.map(id => this.availableModules?.find(e => e?.id === id)).filter(Boolean);
        this.form.get('modules')?.setValue(mappedModules);
        this.form.get('status').setValue(this.form.get('taskStatus').value?.name);
        this.form.get('priority').setValue(this.form.get('taskPriority').value?.name);
        this.form.get('size').setValue(this.form.get('taskSize').value?.name);
        this.dialogRef.close(this.form.value);
      }
    }
    selectedTagsHandler(currentSelection) {
      this.form.get('tags').setValue(currentSelection);
    }
    selectedProject(project) {
      this.form.patchValue({
        project
      });
    }
    loadTeams() {
      var _this3 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(function* () {
        const {
          organizationId,
          tenantId
        } = _this3;
        if (!organizationId) {
          return;
        }
        _this3.teams = (yield _this3.organizationTeamsService.getMyTeams({
          organizationId,
          tenantId
        })).items;
      })();
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
      var _this4 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(function* () {
        const {
          organizationId
        } = _this4;
        if (!organizationId) return;
        const projectId = _this4.form.get('projectId')?.value;
        if (!projectId) {
          _this4.availableModules = [];
          return;
        }
        try {
          const modulesResponse = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_8__/* .firstValueFrom */ ._)(_this4.organizationProjectModuleService.get({
            projectId
          }));
          _this4.availableModules = modulesResponse?.items || [];
        } catch (error) {
          _this4.availableModules = [];
          _this4.errorHandler.handleError(error);
          _this4.toastrService.danger('Error loading modules', 'Error');
        }
      })();
    }
    static {
      this.ɵfac = function TeamTaskDialogComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || TeamTaskDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbDialogRef */ .ybQ), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .UntypedFormBuilder */ .ze), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_10__/* .Store */ .il), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_10__/* .Store */ .il), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_11__/* .OrganizationProjectsService */ .d), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__/* .TranslateService */ .c$), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_13__/* .ToastrService */ .t), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_14__/* .ErrorHandlingService */ .X), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_15__/* .OrganizationTeamsService */ .F), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_16__/* .OrganizationProjectModuleService */ .k));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineComponent"] */ .VBU({
        type: TeamTaskDialogComponent,
        selectors: [["ngx-team-task-dialog"]],
        inputs: {
          task: "task"
        },
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
        decls: 103,
        vars: 94,
        consts: [["taskDueDatePicker", ""], [1, "main"], [1, "d-flex", "flex-column"], [1, "cancel"], [1, "fas", "fa-times", 3, "click"], [1, "title"], [1, "body"], [3, "formGroup"], [3, "ngIf"], [1, "row"], [1, "col-sm-6"], [1, "form-group"], [1, "label"], ["formControlName", "projectId", 3, "onChanged", "defaultSelected", "placeholder", "showAllOption", "skipGlobalChange"], ["formControlName", "taskStatus", 3, "placeholder", "projectId"], [1, "col-sm-12"], ["formControlName", "modules", "fullWidth", "", "multiple", "", 3, "selectedChange", "placeholder", "selected"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "teams", "fullWidth", "", "multiple", "", 3, "selectedChange", "selected", "placeholder"], ["formControlName", "title", "nbInput", "", "type", "text", 1, "name-input", 3, "placeholder"], ["formControlName", "taskPriority", 3, "placeholder", "projectId"], ["formControlName", "taskSize", 3, "placeholder", "projectId"], [3, "selectedTagsEvent", "isOrgLevel", "selectedTags"], ["for", "dueDate", 1, "label"], ["formControlName", "dueDate", "fullWidth", "", "id", "dueDate", "nbInput", "", "type", "text", 3, "nbDatepicker", "placeholder"], [1, "estimate-inputs"], ["formControlName", "estimateDays", "nbInput", "", "type", "number", 3, "min", "placeholder"], ["formControlName", "estimateHours", "max", "23", "min", "0", "nbInput", "", "type", "number", 3, "min", "status", "placeholder"], ["formControlName", "estimateMinutes", "max", "59", "min", "0", "nbInput", "", "type", "number", 3, "min", "status", "placeholder"], ["formControlName", "description", 1, "description", 3, "config"], [1, "text-left"], ["nbButton", "", "outline", "", "status", "basic", 1, "mr-3", 3, "click"], ["nbButton", "", "status", "success", 3, "click", "disabled"], ["formControlName", "number", 3, "formControl", "placeholder", "projectId"], [3, "value"]],
        template: function TeamTaskDialogComponent_Template(rf, ctx) {
          if (rf & 1) {
            const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetCurrentView"] */ .RV6();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "nb-card", 1)(1, "nb-card-header", 2)(2, "div", 3)(3, "i", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("click", function TeamTaskDialogComponent_Template_i_click_3_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx.dialogRef.close());
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(4, "h5", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(6, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(7, "nb-card-body", 6)(8, "form", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(9, TeamTaskDialogComponent_ng_template_9_Template, 4, 5, "ng-template", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(10, "div", 9)(11, "div", 10)(12, "div", 11)(13, "label", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(15, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(16, "ga-project-selector", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(17, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("onChanged", function TeamTaskDialogComponent_Template_ga_project_selector_onChanged_16_listener($event) {
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
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("selectedChange", function TeamTaskDialogComponent_Template_nb_select_selectedChange_31_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx.onModulesSelected($event));
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(33, TeamTaskDialogComponent_nb_option_33_Template, 2, 2, "nb-option", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(34, "div", 9)(35, "div", 15)(36, "div", 11)(37, "label", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(38);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(39, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(40, "nb-select", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(41, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("selectedChange", function TeamTaskDialogComponent_Template_nb_select_selectedChange_40_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx.onTeamsSelected($event));
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(42, TeamTaskDialogComponent_nb_option_42_Template, 2, 2, "nb-option", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(43, "div", 9)(44, "div", 15)(45, "div", 11)(46, "label", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(47);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(48, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(49, "input", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(50, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(51, "div", 10)(52, "div", 11)(53, "label", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(54);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(55, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(56, "ga-task-priority-select", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(57, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(58, "div", 10)(59, "div", 11)(60, "label", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(61);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(62, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(63, "ga-task-size-select", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(64, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(65, "div", 15)(66, "div", 11)(67, "ga-tags-color-input", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("selectedTagsEvent", function TeamTaskDialogComponent_Template_ga_tags_color_input_selectedTagsEvent_67_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx.selectedTagsHandler($event));
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(68, "div", 9)(69, "div", 10)(70, "div", 11)(71, "label", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(72);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(73, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(74, "input", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(75, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(76, "nb-datepicker", null, 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(78, "div", 10)(79, "div", 11)(80, "label", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(81);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(82, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(83, "div", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(84, "input", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(85, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(86, "input", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(87, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(88, "input", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(89, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(90, "div", 9)(91, "div", 15)(92, "label", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(93);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(94, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(95, "ckeditor", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(96, "nb-card-footer", 30)(97, "button", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("click", function TeamTaskDialogComponent_Template_button_click_97_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx.dialogRef.close());
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(98);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(99, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(100, "button", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("click", function TeamTaskDialogComponent_Template_button_click_100_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx.onSave());
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(101);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(102, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()();
          }
          if (rf & 2) {
            const taskDueDatePicker_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵreference"] */ .sdS(77);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(6, 46, ctx.selectedTask ? "TASKS_PAGE.EDIT_TASKS" : "TASKS_PAGE.ADD_TASKS"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("formGroup", ctx.form);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngIf", !ctx.selectedTask);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(15, 48, "CONTEXT_MENU.PROJECT"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("defaultSelected", false)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(17, 50, "CONTEXT_MENU.PROJECT"))("showAllOption", false)("skipGlobalChange", true);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(22, 52, "TASKS_PAGE.TASKS_STATUS"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(24, 54, "TASKS_PAGE.TASKS_STATUS"))("projectId", ctx.form.get("projectId").value);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(30, 56, "TASKS_PAGE.MODULE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(32, 58, "TASKS_PAGE.SELECT_MODULE"))("selected", ctx.selectedModules);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx.availableModules);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(39, 60, "TASKS_PAGE.TASK_TEAMS"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpropertyInterpolate"] */ .FS9("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(41, 62, "FORM.PLACEHOLDERS.CHOOSE_TEAMS"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("selected", ctx.selectedTeams);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx.teams);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(48, 64, "TASKS_PAGE.TASKS_TITLE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpropertyInterpolate"] */ .FS9("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(50, 66, "FORM.PLACEHOLDERS.ADD_TITLE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(55, 68, "TASKS_PAGE.TASK_PRIORITY"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(57, 70, "TASKS_PAGE.TASK_PRIORITY"))("projectId", ctx.form.get("projectId").value);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(62, 72, "TASKS_PAGE.TASK_SIZE"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(64, 74, "TASKS_PAGE.TASK_SIZE"))("projectId", ctx.form.get("projectId").value);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("isOrgLevel", true)("selectedTags", ctx.tags);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(73, 76, "TASKS_PAGE.DUE_DATE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpropertyInterpolate"] */ .FS9("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(75, 78, "TASKS_PAGE.DUE_DATE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("nbDatepicker", taskDueDatePicker_r5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(82, 80, "TASKS_PAGE.ESTIMATE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpropertyInterpolate"] */ .FS9("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(85, 82, "TASKS_PAGE.ESTIMATE_DAYS"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("min", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpropertyInterpolate"] */ .FS9("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(87, 84, "TASKS_PAGE.ESTIMATE_HOURS"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("min", 0)("status", ctx.form.get("estimateHours").errors ? "danger" : "basic");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpropertyInterpolate"] */ .FS9("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(89, 86, "TASKS_PAGE.ESTIMATE_MINUTES"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("min", 0)("status", ctx.form.get("estimateMinutes").errors ? "danger" : "basic");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(94, 88, "TASKS_PAGE.TASKS_DESCRIPTION"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("config", ctx.ckConfig);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(99, 90, "BUTTONS.CANCEL"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("disabled", ctx.form.invalid || ctx.teams && ctx.teams.length === 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(102, 92, "BUTTONS.SAVE"), " ");
          }
        },
        dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbCardComponent */ .SrT, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbCardBodyComponent */ .KH5, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbCardFooterComponent */ .VDm, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbCardHeaderComponent */ .zJv, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbButtonComponent */ .YP2, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbInputDirective */ .i6h, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbSelectComponent */ .S81, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbOptionComponent */ .ZJ2, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbDatepickerDirective */ .OA9, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbDatepickerComponent */ .k2z, ckeditor4_angular__WEBPACK_IMPORTED_MODULE_17__/* .CKEditorComponent */ .h, _packages_ui_core_shared_src_lib_tags_tags_color_input_tags_color_input_component__WEBPACK_IMPORTED_MODULE_18__/* .TagsColorInputComponent */ .i, _angular_common__WEBPACK_IMPORTED_MODULE_19__/* .NgForOf */ .Sq, _angular_common__WEBPACK_IMPORTED_MODULE_19__/* .NgIf */ .bT, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* ["ɵNgNoValidate"] */ .qT, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .DefaultValueAccessor */ .me, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .NumberValueAccessor */ .Q0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .NgControlStatus */ .BC, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .NgControlStatusGroup */ .cb, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .MinValidator */ .VZ, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .MaxValidator */ .zX, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .FormControlDirective */ .l_, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .FormGroupDirective */ .j4, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .FormControlName */ .JD, _packages_ui_core_shared_src_lib_selectors_project_project_project_component__WEBPACK_IMPORTED_MODULE_20__/* .ProjectSelectorComponent */ .a, _packages_ui_core_shared_src_lib_tasks_task_priority_select_task_priority_select_component__WEBPACK_IMPORTED_MODULE_21__/* .TaskPrioritySelectComponent */ .Z, _packages_ui_core_shared_src_lib_tasks_task_size_select_task_size_select_component__WEBPACK_IMPORTED_MODULE_22__/* .TaskSizeSelectComponent */ .O, _packages_ui_core_shared_src_lib_tasks_task_status_select_task_status_select_component__WEBPACK_IMPORTED_MODULE_23__/* .TaskStatusSelectComponent */ .v, _packages_ui_core_shared_src_lib_tasks_task_number_task_number_field_component__WEBPACK_IMPORTED_MODULE_24__/* .TaskNumberFieldComponent */ .C, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__/* .TranslatePipe */ .D9],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   i[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n}\n[dir=ltr]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n[dir=rtl]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--gauzy-text-color-1);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(245, 109, 88, 0.3);\n  border-width: 2px;\n  color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(245, 109, 88, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 16px;\n  letter-spacing: 0em;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(126, 126, 143, 0.3);\n  border-width: 2px;\n  color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(126, 126, 143, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(37, 184, 105, 0.3);\n  border-width: 2px;\n  color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(37, 184, 105, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[disabled][_ngcontent-%COMP%], \n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic.btn-disabled[_ngcontent-%COMP%] {\n  background-color: var(--button-outline-basic-disabled-background-color);\n  border-color: var(--button-outline-basic-disabled-border-color);\n  color: var(--button-outline-basic-disabled-text-color);\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].primary.appearance-filled.status-primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  border: unset;\n  background-color: var(--color-primary-transparent-default);\n  box-shadow: var(--gauzy-shadow) 0, 0, 0, 0.15;\n}\n[dir=ltr]   [_nghost-%COMP%]     input, \n[dir=ltr]   [_nghost-%COMP%]     textarea {\n  text-align: start;\n}\n[dir=rtl]   [_nghost-%COMP%]     input, \n[dir=rtl]   [_nghost-%COMP%]     textarea {\n  text-align: end;\n}\n[_nghost-%COMP%]     input, \n[_nghost-%COMP%]     nb-select.appearance-outline.status-basic .select-button, \n[_nghost-%COMP%]     .ng-select .ng-select-container {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n  height: 42px !important;\n}\n[_nghost-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder, \n[_nghost-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {\n  top: unset !important;\n}\n[_nghost-%COMP%]     label, \n[_nghost-%COMP%]     .label {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  color: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]     textarea {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n}\n[_nghost-%COMP%]     .ng-select .ng-select-container input, \n[_nghost-%COMP%]     nb-tag-list input {\n  background-color: unset !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n}\n\n.body[_ngcontent-%COMP%] {\n  width: 550px;\n}\n\n.description[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  height: 150px;\n}\n\n.name-input[_ngcontent-%COMP%] {\n  min-width: 100%;\n}\n\n.estimate-inputs[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.estimate-inputs[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 30%;\n  padding: 0.4rem !important;\n}\n\n.nb-radio[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n}\n\n.body[_ngcontent-%COMP%] {\n  width: 550px;\n}\n\n.description[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  height: 150px;\n}\n\n.name-input[_ngcontent-%COMP%] {\n  min-width: 100%;\n}\n\n.estimate-inputs[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.estimate-inputs[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 30%;\n  padding: 0.4rem !important;\n}\n\n.nb-radio[_ngcontent-%COMP%] {\n  display: inline-block;\n}"]
      });
    }
  };
  return TeamTaskDialogComponent;
})();
TeamTaskDialogComponent = TeamTaskDialogComponent_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_25__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__/* .UntilDestroy */ .d)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_25__/* .__metadata */ .Sn)("design:paramtypes", [_nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbDialogRef */ .ybQ, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .UntypedFormBuilder */ .ze, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_10__/* .Store */ .il, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_10__/* .Store */ .il, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_11__/* .OrganizationProjectsService */ .d, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__/* .TranslateService */ .c$, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_13__/* .ToastrService */ .t, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_14__/* .ErrorHandlingService */ .X, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_15__/* .OrganizationTeamsService */ .F, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_16__/* .OrganizationProjectModuleService */ .k])], TeamTaskDialogComponent);


/***/ }),

/***/ 87736:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   f: () => (/* binding */ ProductTypeSelectorModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14572);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10936);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(55567);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19223);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);






let ProductTypeSelectorModule = /*#__PURE__*/(() => {
  class ProductTypeSelectorModule {
    static {
      this.ɵfac = function ProductTypeSelectorModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || ProductTypeSelectorModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .$C({
        type: ProductTypeSelectorModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .CommonModule */ .MD, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .FormsModule */ .YN, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__/* .TranslateModule */ .h.forChild(), _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__/* .NgSelectModule */ .MQ]
      });
    }
  }
  return ProductTypeSelectorModule;
})();

/***/ }),

/***/ 90983:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P: () => (/* binding */ TasksRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(908);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4106);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17785);
/* harmony import */ var _components_task_task_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(64343);
/* harmony import */ var _components_task_task_settings_task_settings_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50257);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(26860);







const routes = [{
  path: '',
  children: [{
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }, {
    path: 'dashboard',
    component: _components_task_task_component__WEBPACK_IMPORTED_MODULE_0__/* .TaskComponent */ .B
  }, {
    path: 'team',
    component: _components_task_task_component__WEBPACK_IMPORTED_MODULE_0__/* .TaskComponent */ .B
  }, {
    path: 'me',
    component: _components_task_task_component__WEBPACK_IMPORTED_MODULE_0__/* .TaskComponent */ .B
  }, {
    path: 'settings/:id',
    component: _components_task_task_settings_task_settings_component__WEBPACK_IMPORTED_MODULE_1__/* .TaskSettingsComponent */ .E,
    canActivate: [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_2__/* .PermissionsGuard */ .a],
    data: {
      permissions: {
        only: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__/* .PermissionsEnum */ .U.ALL_ORG_EDIT, _gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__/* .PermissionsEnum */ .U.ORG_PROJECT_EDIT],
        redirectTo: '/pages/tasks/dashboard'
      }
    }
  }]
}];
let TasksRoutingModule = /*#__PURE__*/(() => {
  class TasksRoutingModule {
    static {
      this.ɵfac = function TasksRoutingModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || TasksRoutingModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdefineNgModule"] */ .$C({
        type: TasksRoutingModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__/* .RouterModule */ .iI.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_5__/* .RouterModule */ .iI]
      });
    }
  }
  return TasksRoutingModule;
})();

/***/ }),

/***/ 98144:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: () => (/* binding */ SprintTaskComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(64411);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(81995);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(56383);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(73246);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(87081);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(72781);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(12614);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24237);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(71181);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(57733);
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(78543);
/* harmony import */ var _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38546);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(19223);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(23423);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(26024);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(71924);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(57972);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(71750);
/* harmony import */ var _packages_ui_core_shared_src_lib_table_components_created_by_created_by_user_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(13845);
/* harmony import */ var _packages_ui_core_shared_src_lib_table_components_date_view_date_view_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(47825);
/* harmony import */ var _packages_ui_core_shared_src_lib_table_components_employee_with_links_employee_with_links_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(39457);
/* harmony import */ var _packages_ui_core_shared_src_lib_table_components_notes_with_tags_notes_with_tags_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(33829);
/* harmony import */ var _packages_ui_core_shared_src_lib_table_components_project_project_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(27985);
/* harmony import */ var _packages_ui_core_shared_src_lib_table_components_status_view_status_view_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(35657);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(14572);
























const _c0 = a0 => ({
  selected: a0
});
const _c1 = () => [];
const _c2 = a0 => ({
  taskStatus: a0
});
function SprintTaskComponent_ng_template_18_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(1, "ngx-status-view", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function SprintTaskComponent_ng_template_18_ng_container_1_Template_ngx_status_view_click_1_listener() {
      const taskStatus_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r2.updateStatus(taskStatus_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const taskStatus_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("rowData", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction1"] */ .eq3(2, _c2, taskStatus_r2))("value", taskStatus_r2.name);
  }
}
function SprintTaskComponent_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, SprintTaskComponent_ng_template_18_ng_container_1_Template, 2, 4, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(2, 1, ctx_r2.statuses$));
  }
}
let SprintTaskComponent = class SprintTaskComponent extends _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_1__/* .TranslationBaseComponent */ .K {
  constructor(nbMenuService, translate, store, taskStatusesService) {
    super(translate);
    this.nbMenuService = nbMenuService;
    this.translate = translate;
    this.store = store;
    this.taskStatusesService = taskStatusesService;
    this.onDestroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__/* .Subject */ .B();
    this.subject$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__/* .Subject */ .B();
    this.isSelected = false;
    this.taskActionEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .bkB();
    this.changeStatusEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .bkB();
    this.statuses$ = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_3__/* .BehaviorSubject */ .t([]);
  }
  ngOnInit() {
    this.subject$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__/* .debounceTime */ .B)(200), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .M)(() => this.getStatuses()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__/* .untilDestroyed */ .s)(this)).subscribe();
    this.taskActions = [{
      title: this.getTranslation('TASKS_PAGE.EDIT_TASK'),
      action: 'EDIT_TASK'
    }, {
      title: this.getTranslation('TASKS_PAGE.DELETE_TASK'),
      action: 'DELETE_TASK'
    }];
    this.taskStatusList = this.getStatusList(this.task.status);
    this.nbMenuService.onItemClick().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .map */ .T)(({
      tag,
      item
    }) => {
      const [action, id] = tag.split(':');
      return {
        action,
        id,
        item
      };
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .filter */ .p)(({
      id
    }) => id === this.task.id), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .M)(({
      action,
      item
    }) => {
      switch (action) {
        case 'changeStatus':
          this.changeStatusEvent.emit({
            status: item.title,
            id: this.task.id,
            title: this.task.title
          });
          break;
        case 'updateTask':
          this.taskActionEvent.emit({
            action: item.action,
            task: this.task
          });
      }
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .takeUntil */ .Q)(this.onDestroy$)).subscribe();
  }
  ngAfterViewInit() {
    const storeOrganization$ = this.store.selectedOrganization$;
    const storeProject$ = this.store.selectedProject$;
    (0,rxjs__WEBPACK_IMPORTED_MODULE_10__/* .combineLatest */ .z)([storeOrganization$, storeProject$]).pipe((0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_11__/* .distinctUntilChange */ .nI)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .filter */ .p)(([organization]) => !!organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .M)(([organization, project]) => {
      this.organization = organization;
      this.projectId = project ? project.id : null;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .M)(() => this.subject$.next(true)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__/* .untilDestroyed */ .s)(this)).subscribe();
  }
  getStatusList(filterOption) {
    return Object.values(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_12__/* .TaskStatusEnum */ .F).filter(status => status !== filterOption).map(status => ({
      title: status
    }));
  }
  // toggleItem(item: Task): void {
  //   this.toggleItemEvent.emit(item);
  // }
  changeStatus(evt) {
    this.changeStatusEvent.emit(evt);
  }
  getStatuses() {
    if (!this.organization) {
      return;
    }
    const {
      tenantId
    } = this.store.user;
    const {
      id: organizationId
    } = this.organization;
    this.taskStatusesService.get({
      tenantId,
      organizationId,
      ...(this.projectId ? {
        projectId: this.projectId
      } : {})
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .map */ .T)(({
      items,
      total
    }) => total > 0 ? items : this.taskStatusList), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .M)(statuses => this.statuses$.next(statuses)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__/* .untilDestroyed */ .s)(this)).subscribe();
  }
  updateStatus(taskStatus) {
    this.changeStatusEvent.emit({
      status: taskStatus.name,
      id: this.task.id,
      title: this.task.title,
      taskStatus
    });
    this.task = {
      ...this.task,
      taskStatus,
      status: taskStatus.name
    };
  }
  ngOnDestroy() {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }
  static {
    this.ɵfac = function SprintTaskComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || SprintTaskComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_nebular_theme__WEBPACK_IMPORTED_MODULE_13__/* .NbMenuService */ .BgA), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__/* .TranslateService */ .c$), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_15__/* .Store */ .il), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_16__/* .TaskStatusesService */ .f));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
      type: SprintTaskComponent,
      selectors: [["ga-sprint-task"]],
      inputs: {
        task: "task",
        isSelected: "isSelected"
      },
      outputs: {
        taskActionEvent: "taskActionEvent",
        changeStatusEvent: "changeStatusEvent"
      },
      standalone: false,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
      decls: 20,
      vars: 15,
      consts: [["contextMenu", ""], ["cdkDrag", "", 1, "task", 3, "cdkDragData", "cdkDragLockAxis"], [3, "ngClass"], [1, "row"], [1, "col-1"], [1, "col"], [3, "rowData"], [3, "value"], ["nbPopoverTrigger", "hover", 1, "mr-2", "status-view", 3, "nbPopover", "rowData", "value"], [1, "view"], [4, "ngFor", "ngForOf"], [1, "status-view", 3, "click", "rowData", "value"]],
      template: function SprintTaskComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 1)(1, "nb-card")(2, "nb-card-body", 2)(3, "div", 3)(4, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(6, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(7, "ga-notes-with-tags", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(8, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(9, "ngx-project", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(10, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(11, "ngx-created-by-user", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(12, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(13, "ngx-employee-with-links", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(14, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(15, "ngx-date-view", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(16, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(17, "ngx-status-view", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(18, SprintTaskComponent_ng_template_18_Template, 3, 3, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplateRefExtractor"] */ .C5r);
        }
        if (rf & 2) {
          const contextMenu_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(19);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("cdkDragData", ctx.task)("cdkDragLockAxis", "y");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction1"] */ .eq3(12, _c0, ctx.isSelected));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", ctx.task == null ? null : ctx.task.taskNumber, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("rowData", ctx.task);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("rowData", ctx.task);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("rowData", ctx.task);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("value", (ctx.task == null ? null : ctx.task.employees) || _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction0"] */ .lJ4(14, _c1));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("value", ctx.task == null ? null : ctx.task.dueDate);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("nbPopover", contextMenu_r4)("rowData", ctx.task)("value", ctx.task == null ? null : ctx.task.status);
        }
      },
      dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_13__/* .NbCardComponent */ .SrT, _nebular_theme__WEBPACK_IMPORTED_MODULE_13__/* .NbCardBodyComponent */ .KH5, _nebular_theme__WEBPACK_IMPORTED_MODULE_13__/* .NbPopoverDirective */ .vs7, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_17__/* .CdkDrag */ .T1, _packages_ui_core_shared_src_lib_table_components_created_by_created_by_user_component__WEBPACK_IMPORTED_MODULE_18__/* .CreatedByUserComponent */ .q, _packages_ui_core_shared_src_lib_table_components_date_view_date_view_component__WEBPACK_IMPORTED_MODULE_19__/* .DateViewComponent */ .l, _packages_ui_core_shared_src_lib_table_components_employee_with_links_employee_with_links_component__WEBPACK_IMPORTED_MODULE_20__/* .EmployeeWithLinksComponent */ .j, _packages_ui_core_shared_src_lib_table_components_notes_with_tags_notes_with_tags_component__WEBPACK_IMPORTED_MODULE_21__/* .NotesWithTagsComponent */ .i, _packages_ui_core_shared_src_lib_table_components_project_project_component__WEBPACK_IMPORTED_MODULE_22__/* .ProjectComponent */ .t, _packages_ui_core_shared_src_lib_table_components_status_view_status_view_component__WEBPACK_IMPORTED_MODULE_23__/* .StatusViewComponent */ .N, _angular_common__WEBPACK_IMPORTED_MODULE_24__/* .NgClass */ .YU, _angular_common__WEBPACK_IMPORTED_MODULE_24__/* .NgForOf */ .Sq, _angular_common__WEBPACK_IMPORTED_MODULE_24__/* .AsyncPipe */ .Jj],
      styles: ["nb-card-body[_ngcontent-%COMP%] {\n  box-shadow: var(--gauzy-shadow);\n  border-radius: var(--border-radius);\n  background-color: var(--gauzy-card-1);\n}\n\nnb-card[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n\n.selected[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-sidebar-background-3);\n  box-shadow: -6px 0 0 0 rgba(0, 0, 0, 0.1);\n}\n\n.view[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  padding: 4px;\n}\n\n.status-view[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n  nb-popover > span.arrow {\n  display: none;\n}"]
    });
  }
};
SprintTaskComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_25__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__/* .UntilDestroy */ .d)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_25__/* .__metadata */ .Sn)("design:paramtypes", [_nebular_theme__WEBPACK_IMPORTED_MODULE_13__/* .NbMenuService */ .BgA, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__/* .TranslateService */ .c$, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_15__/* .Store */ .il, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_16__/* .TaskStatusesService */ .f])], SprintTaskComponent);


/***/ })

}]);