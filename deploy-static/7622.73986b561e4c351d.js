"use strict";
(self["webpackChunkgauzy"] = self["webpackChunkgauzy"] || []).push([[7622],{

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

/***/ 27985:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   t: () => (/* binding */ ProjectComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73014);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14572);
/* harmony import */ var _directives_img_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71466);




function ProjectComponent_div_0_img_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(0, "img", 5);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpropertyInterpolate"] */ .FS9("src", ctx_r0.project.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵsanitizeUrl"] */ .B4B);
  }
}
function ProjectComponent_div_0_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" Members count ", ctx_r0.project == null ? null : ctx_r0.project.count, " ");
  }
}
function ProjectComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, ProjectComponent_div_0_img_1_Template, 1, 1, "img", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(2, "span")(3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(5, ProjectComponent_div_0_div_5_Template, 2, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r0.project == null ? null : ctx_r0.project.imageUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(ctx_r0.project == null ? null : ctx_r0.project.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r0.project == null ? null : ctx_r0.project.count);
  }
}
function ProjectComponent_div_1_ng_container_1_img_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(0, "img", 5);
  }
  if (rf & 2) {
    const project_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpropertyInterpolate"] */ .FS9("src", project_r2.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵsanitizeUrl"] */ .B4B);
  }
}
function ProjectComponent_div_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, ProjectComponent_div_1_ng_container_1_img_1_Template, 1, 1, "img", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const project_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", project_r2 == null ? null : project_r2.imageUrl);
  }
}
function ProjectComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, ProjectComponent_div_1_ng_container_1_Template, 2, 1, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx_r0.projects);
  }
}
let ProjectComponent = /*#__PURE__*/(() => {
  class ProjectComponent {
    constructor() {
      this.organization = null;
      this.project = {
        name: null,
        count: null,
        imageUrl: null
      };
      this.projects = [];
    }
    ngOnInit() {
      this.init();
    }
    init() {
      var _this = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(function* () {
        if (_this.rowData?.project || _this.value?.project) {
          _this.project.name = _this.rowData?.project?.name || _this.value?.project?.name;
          _this.project.count = _this.rowData?.project?.membersCount || _this.value?.project?.membersCount;
          _this.project.imageUrl = _this.rowData?.project?.imageUrl || _this.value?.project?.imageUrl;
        } else if (_this.rowData.projects) {
          _this.projects = _this.rowData.projects.map(project => {
            return {
              name: project.name,
              count: project.membersCount,
              imageUrl: project.imageUrl
            };
          });
        }
      })();
    }
    static {
      this.ɵfac = function ProjectComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || ProjectComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: ProjectComponent,
        selectors: [["ngx-project"]],
        inputs: {
          value: "value",
          rowData: "rowData"
        },
        standalone: false,
        decls: 2,
        vars: 2,
        consts: [["class", "project-render", 4, "ngIf"], [1, "project-render"], [3, "src", 4, "ngIf"], [1, "name"], ["class", "member", 4, "ngIf"], [3, "src"], [1, "member"], [4, "ngFor", "ngForOf"]],
        template: function ProjectComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(0, ProjectComponent_div_0_Template, 6, 3, "div", 0)(1, ProjectComponent_div_1_Template, 2, 1, "div", 0);
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.project);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.projects);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__/* .NgForOf */ .Sq, _angular_common__WEBPACK_IMPORTED_MODULE_2__/* .NgIf */ .bT, _directives_img_directive__WEBPACK_IMPORTED_MODULE_3__/* .ImgDirective */ .z],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.project-render[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: flex-start;\n  gap: 10px;\n}\n.project-render[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: var(--border-radius);\n  box-shadow: var(--gauzy-shadow);\n  object-fit: cover;\n}\n.project-render[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   .member[_ngcontent-%COMP%] {\n  color: var(--gauzy-text-color-2);\n  font-size: 11px;\n  font-weight: 400;\n  line-height: 13px;\n  letter-spacing: 0em;\n}\n.project-render[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  color: var(--gauzy-text-color-1);\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 17px;\n  letter-spacing: 0em;\n}"]
      });
    }
  }
  return ProjectComponent;
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

/***/ 54462:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ ImageUploaderModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14572);
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29087);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);



let ImageUploaderModule = /*#__PURE__*/(() => {
  class ImageUploaderModule {
    static {
      this.ɵfac = function ImageUploaderModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || ImageUploaderModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .$C({
        type: ImageUploaderModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .CommonModule */ .MD, ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__/* .FileUploadModule */ .eB]
      });
    }
  }
  return ImageUploaderModule;
})();

/***/ }),

/***/ 57952:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: () => (/* binding */ InviteService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80189);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64913);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26024);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26860);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45715);





let InviteService = /*#__PURE__*/(() => {
  class InviteService {
    constructor(http) {
      this.http = http;
    }
    createWithEmails(createInput) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ ._)(this.http.post(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/invite/emails`, createInput));
    }
    getAll(relations, findInput) {
      const data = JSON.stringify({
        relations,
        findInput
      });
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ ._)(this.http.get(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/invite`, {
        params: {
          data
        }
      }));
    }
    validateInvite(relations, where) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ ._)(this.http.get(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/invite/validate`, {
        params: (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_2__/* .toParams */ .SV)({
          ...where,
          relations
        })
      }));
    }
    update(id, updateInput) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ ._)(this.http.put(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/invite/${id}`, updateInput));
    }
    acceptInvite(input) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ ._)(this.http.post(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/invite/accept`, input));
    }
    resendInvite(inviteResendInput) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ ._)(this.http.post(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/invite/resend`, inviteResendInput));
    }
    delete(id) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ ._)(this.http.delete(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/invite/${id}`));
    }
    inviteOrganizationContact(organizationContactId) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ ._)(this.http.put(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/invite/organization-contact/${organizationContactId}`, {}));
    }
    acceptOrganizationContactInvite(acceptInviteInput) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__/* .firstValueFrom */ ._)(this.http.post(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/invite/contact`, acceptInviteInput));
    }
    static {
      this.ɵfac = function InviteService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || InviteService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵinject"] */ .KVO(_angular_common_http__WEBPACK_IMPORTED_MODULE_4__/* .HttpClient */ .Qq));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdefineInjectable"] */ .jDH({
        token: InviteService,
        factory: InviteService.ɵfac
      });
    }
  }
  return InviteService;
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

/***/ 79455:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   t: () => (/* binding */ ImageUploaderComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(55598);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(41598);
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(29087);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52738);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39855);
/* harmony import */ var _gauzy_ui_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(48840);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26024);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(64913);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(71924);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(14572);












let ImageUploaderComponent = /*#__PURE__*/(() => {
  let ImageUploaderComponent = class ImageUploaderComponent {
    get styles() {
      return this._styles;
    }
    set styles(styles) {
      this._styles = styles;
    }
    get folder() {
      return this._folder;
    }
    set folder(value) {
      this._folder = value;
    }
    constructor(store) {
      this.store = store;
      /*
       * Getter & Setter for dynamic file uploader style element
       */
      this._styles = {
        width: '100%',
        opacity: '0',
        position: 'absolute',
        zIndex: 3,
        cursor: 'pointer'
      };
      /*
       * Getter & Setter for dynamic image upload folder
       */
      this._folder = 'profile_pictures';
      this.changeHoverState = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .bkB();
      this.uploadedImageAsset = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .bkB();
      this.uploadImageAssetError = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .bkB();
    }
    ngOnInit() {
      this.store.selectedOrganization$.pipe((0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .distinctUntilChange */ .nI)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .filter */ .p)(organization => !!organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .tap */ .M)(organization => this.organization = organization), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .untilDestroyed */ .s)(this)).subscribe();
      this.store.user$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .filter */ .p)(user => !!user), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .tap */ .M)(user => this.user = user), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .tap */ .M)(() => this._loadUploaderSettings()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .untilDestroyed */ .s)(this)).subscribe();
    }
    ngAfterViewInit() {
      if (!this.uploader) {
        return;
      }
      this.uploader.onAfterAddingFile = file => {
        file.withCredentials = false;
      };
      this.uploader.onSuccessItem = (item, response, status) => {
        try {
          if (response) {
            const image = JSON.parse(response);
            this.uploadedImageAsset.emit(image);
          }
        } catch (error) {
          console.log('Error while uploaded image url', error);
        }
      };
      this.uploader.onErrorItem = (item, response, status) => {
        try {
          if (response) {
            const error = JSON.parse(response);
            this.uploadImageAssetError.emit(error);
          }
        } catch (error) {
          console.log('Error while uploaded image url error', error);
        }
      };
    }
    /**
     * Image asset upload handler
     */
    imageUploadHandler() {
      if (this.uploader.queue.length > 0) {
        this.uploader.queue[this.uploader.queue.length - 1].upload();
      }
    }
    /**
     * Load settings for the file uploader, including headers and additional form data.
     *
     * @returns void
     */
    _loadUploaderSettings() {
      if (!this.user) {
        return;
      }
      const token = this.store.token;
      const tenantId = this.user.tenantId;
      const headers = [];
      headers.push({
        name: 'Authorization',
        value: `Bearer ${token}`
      });
      headers.push({
        name: 'Tenant-Id',
        value: tenantId
      });
      if (!!this.organization) {
        headers.push({
          name: 'Organization-Id',
          value: `${this.organization.id}`
        });
      }
      const uploaderOptions = {
        url: _gauzy_ui_config__WEBPACK_IMPORTED_MODULE_5__/* .environment */ .c.API_BASE_URL + `${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_6__/* .API_PREFIX */ .m4}/image-assets/upload/${this.folder}`,
        method: 'POST',
        // XHR request method
        autoUpload: true,
        // Upload files automatically upon addition to upload queue
        isHTML5: true,
        // Use xhrTransport in favor of iframeTransport
        removeAfterUpload: true,
        // Calculate progress independently for each uploaded file
        headers: headers // XHR request headers
      };
      this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_7__/* .FileUploader */ .l0(uploaderOptions);
      // Adding additional form data
      this.uploader.onBuildItemForm = (fileItem, form) => {
        if (!!this.store.user.tenantId) {
          form.append('tenantId', tenantId);
        }
        if (!!this.organization) {
          form.append('organizationId', this.organization.id);
        }
      };
    }
    static {
      this.ɵfac = function ImageUploaderComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || ImageUploaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_8__/* .Store */ .il));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: ImageUploaderComponent,
        selectors: [["ngx-image-uploader"]],
        inputs: {
          styles: "styles",
          folder: "folder"
        },
        outputs: {
          changeHoverState: "changeHoverState",
          uploadedImageAsset: "uploadedImageAsset",
          uploadImageAssetError: "uploadImageAssetError"
        },
        standalone: false,
        decls: 1,
        vars: 2,
        consts: [["type", "file", "accept", "image/*", "ng2FileSelect", "", 3, "change", "mouseenter", "mouseleave", "ngStyle", "uploader"]],
        template: function ImageUploaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "input", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("change", function ImageUploaderComponent_Template_input_change_0_listener() {
              return ctx.imageUploadHandler();
            })("mouseenter", function ImageUploaderComponent_Template_input_mouseenter_0_listener() {
              return ctx.changeHoverState.emit(true);
            })("mouseleave", function ImageUploaderComponent_Template_input_mouseleave_0_listener() {
              return ctx.changeHoverState.emit(false);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngStyle", ctx.styles)("uploader", ctx.uploader);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__/* .NgStyle */ .B3, ng2_file_upload__WEBPACK_IMPORTED_MODULE_7__/* .FileSelectDirective */ .UJ],
        styles: ["input[_ngcontent-%COMP%] {\n  height: 100% !important;\n}"]
      });
    }
  };
  ImageUploaderComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_10__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .UntilDestroy */ .d)(), (0,tslib__WEBPACK_IMPORTED_MODULE_10__/* .__metadata */ .Sn)("design:paramtypes", [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_8__/* .Store */ .il])], ImageUploaderComponent);
  return ImageUploaderComponent;
})();


/***/ }),

/***/ 80801:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P: () => (/* binding */ ContactWithTagsComponent)
/* harmony export */ });
/* harmony import */ var _picture_name_tags_picture_name_tags_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76229);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9620);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56383);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19223);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(14572);
/* harmony import */ var _components_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(32386);










function ContactWithTagsComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(0, "nb-badge", 3);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵstyleProp"] */ .xc7("background", ctx_r0.background(ctx_r0.rowData == null ? null : ctx_r0.rowData.color))("color", ctx_r0.backgroundContrast(ctx_r0.rowData == null ? null : ctx_r0.rowData.brandColor));
  }
}
function ContactWithTagsComponent_div_2_nb_badge_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(0, "nb-badge", 6);
  }
  if (rf & 2) {
    const tag_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵstyleProp"] */ .xc7("background", ctx_r0.background(tag_r2 == null ? null : tag_r2.color))("color", ctx_r0.backgroundContrast(tag_r2 == null ? null : tag_r2.color));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("text", tag_r2 == null ? null : tag_r2.name);
  }
}
function ContactWithTagsComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, ContactWithTagsComponent_div_2_nb_badge_1_Template, 1, 5, "nb-badge", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngForOf", (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(2, 1, ctx_r0.data)) == null ? null : tmp_1_0.tags);
  }
}
let ContactWithTagsComponent = /*#__PURE__*/(() => {
  class ContactWithTagsComponent extends _picture_name_tags_picture_name_tags_component__WEBPACK_IMPORTED_MODULE_1__/* .PictureNameTagsComponent */ .O {
    constructor(_router, themeService, translateService) {
      super(themeService, translateService);
      this._router = _router;
      this.themeService = themeService;
      this.translateService = translateService;
    }
    navigateToContact() {
      if (!this.rowData) {
        return;
      }
      this._router.navigate([`/pages/contacts/view/${this.rowData.id}`]);
    }
    static {
      this.ɵfac = function ContactWithTagsComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || ContactWithTagsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_router__WEBPACK_IMPORTED_MODULE_2__/* .Router */ .Ix), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbThemeService */ .NS1), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__/* .TranslateService */ .c$));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: ContactWithTagsComponent,
        selectors: [["ga-contact-link-with-tags"]],
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
        decls: 3,
        vars: 4,
        consts: [[1, "report-table", 3, "click", "src", "name"], [3, "ngIf"], ["class", "badges-block", 4, "ngIf"], ["position", "centered", "text", "Default", 1, "color"], [1, "badges-block"], ["class", "color", "position", "centered", 3, "background", "color", "text", 4, "ngFor", "ngForOf"], ["position", "centered", 1, "color", 3, "text"]],
        template: function ContactWithTagsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "ngx-avatar", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function ContactWithTagsComponent_Template_ngx_avatar_click_0_listener() {
              return ctx.navigateToContact();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, ContactWithTagsComponent_ng_template_1_Template, 1, 4, "ng-template", 1)(2, ContactWithTagsComponent_div_2_Template, 3, 3, "div", 2);
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("src", ctx.rowData == null ? null : ctx.rowData.imageUrl)("name", (ctx.rowData == null ? null : ctx.rowData.fullName) ? ctx.rowData == null ? null : ctx.rowData.fullName : ctx.rowData == null ? null : ctx.rowData.name);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.rowData == null ? null : ctx.rowData.isDefault);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.isTags);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__/* .NgForOf */ .Sq, _angular_common__WEBPACK_IMPORTED_MODULE_5__/* .NgIf */ .bT, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbBadgeComponent */ .XyX, _components_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_6__/* .AvatarComponent */ .f, _angular_common__WEBPACK_IMPORTED_MODULE_5__/* .AsyncPipe */ .Jj],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.badges-block[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n\n.image-container[_ngcontent-%COMP%] {\n  width: 70px;\n  height: 63px;\n  display: flex;\n  justify-content: center;\n}\n\n.color[_ngcontent-%COMP%] {\n  position: static;\n  margin-top: 5px;\n  display: inline-block;\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: 0em;\n  padding: 3px 8px;\n}\n[dir=rtl][_ngcontent-%COMP%]   .color[_ngcontent-%COMP%] {\n  margin-left: 5px;\n}\n[dir=ltr][_ngcontent-%COMP%]   .color[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n\n.tags[_ngcontent-%COMP%] {\n  display: flex;\n  width: 200px;\n  flex-wrap: wrap;\n}\n\nimg[_ngcontent-%COMP%] {\n  height: 100%;\n  max-width: 70px;\n  border-radius: 50%;\n}\n\n.tags-right[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}"]
      });
    }
  }
  return ContactWithTagsComponent;
})();

/***/ })

}]);