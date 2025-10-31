(self["webpackChunkgauzy"] = self["webpackChunkgauzy"] || []).push([[2177],{

/***/ 62177:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   i: () => (/* binding */ TagsColorInputComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(73014);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(55598);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26860);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(80189);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(79708);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(39855);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(52738);
/* harmony import */ var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4644);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(56383);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(41598);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(19223);
/* harmony import */ var randomcolor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(97379);
/* harmony import */ var randomcolor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(randomcolor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(17785);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(26024);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(63545);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(71924);
/* harmony import */ var _table_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(76229);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(14572);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(10936);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(55567);





















function TagsColorInputComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(1, "label", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(3, 1, "TAGS_PAGE.HEADER"), " ");
  }
}
function TagsColorInputComponent_ng_template_5_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(1, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const tag$_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG().item$;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngModel", tag$_r1.selected);
  }
}
function TagsColorInputComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(1, TagsColorInputComponent_ng_template_5_ng_container_1_Template, 2, 1, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(2, "nb-badge", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(3, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const tag_r2 = ctx.item;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r2.multiple);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵstyleProp"] */ .xc7("background", ctx_r2.background(tag_r2.color));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .JRh(tag_r2.name);
  }
}
function TagsColorInputComponent_ng_template_6_ng_container_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "div", 13)(1, "nb-badge", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("click", function TagsColorInputComponent_ng_template_6_ng_container_0_div_1_Template_nb_badge_click_1_listener() {
      const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r4).$implicit;
      const clear_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG(2).clear;
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(clear_r6(item_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵstyleProp"] */ .xc7("background", ctx_r2.background(item_r5.color))("color", ctx_r2.backgroundContrast(item_r5.color));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("text", item_r5.name);
  }
}
function TagsColorInputComponent_ng_template_6_ng_container_0_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "div", 13)(1, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(2, "...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
  }
}
function TagsColorInputComponent_ng_template_6_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(1, TagsColorInputComponent_ng_template_6_ng_container_0_div_1_Template, 2, 5, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(2, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(3, TagsColorInputComponent_ng_template_6_ng_container_0_div_3_Template, 3, 0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind3"] */ .brH(2, 2, ctx_r2.selectedTags, 0, ctx_r2.noOfTagsFits || ctx_r2.selectedTags.length));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r2.selectedTags && ctx_r2.selectedTags.length > ctx_r2.noOfTagsFits);
  }
}
function TagsColorInputComponent_ng_template_6_ng_template_1_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "div", 13)(1, "nb-badge", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("click", function TagsColorInputComponent_ng_template_6_ng_template_1_div_0_Template_nb_badge_click_1_listener() {
      const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r7).$implicit;
      const clear_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG(2).clear;
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(clear_r6(item_r8));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const item_r8 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵstyleProp"] */ .xc7("background", ctx_r2.background(item_r8.color))("color", ctx_r2.backgroundContrast(item_r8.color));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("text", item_r8.name);
  }
}
function TagsColorInputComponent_ng_template_6_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(0, TagsColorInputComponent_ng_template_6_ng_template_1_div_0_Template, 2, 5, "div", 11);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx_r2.selectedTags);
  }
}
function TagsColorInputComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(0, TagsColorInputComponent_ng_template_6_ng_container_0_Template, 4, 6, "ng-container", 10)(1, TagsColorInputComponent_ng_template_6_ng_template_1_Template, 1, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplateRefExtractor"] */ .C5r);
  }
  if (rf & 2) {
    const notOverflown_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵreference"] */ .sdS(2);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngIf", !!ctx_r2.noOfTagsFits)("ngIfElse", notOverflown_r9);
  }
}
let TagsColorInputComponent = /*#__PURE__*/(() => {
  let TagsColorInputComponent = class TagsColorInputComponent extends _table_components__WEBPACK_IMPORTED_MODULE_2__/* .PictureNameTagsComponent */ .O {
    get selectedTags() {
      return this._selectedTags;
    }
    set selectedTags(value) {
      this._selectedTags = value;
    }
    get isOrgLevel() {
      return this._isOrgLevel;
    }
    set isOrgLevel(value) {
      this._isOrgLevel = value;
    }
    get isTenantLevel() {
      return this._isTenantLevel;
    }
    set isTenantLevel(value) {
      this._isTenantLevel = value;
    }
    get multiple() {
      return this._multiple;
    }
    set multiple(value) {
      this._multiple = value;
    }
    get label() {
      return this._label;
    }
    set label(value) {
      this._label = value;
    }
    get addTag() {
      return this._addTag;
    }
    set addTag(value) {
      this._addTag = value;
    }
    onResize() {
      this.checkTagsFit(this.selectedTags);
    }
    constructor(tagsService, store, themeService, translateService, el, renderer) {
      var _this;
      super(themeService, translateService);
      _this = this;
      this.tagsService = tagsService;
      this.store = store;
      this.themeService = themeService;
      this.translateService = translateService;
      this.el = el;
      this.renderer = renderer;
      this.subject$ = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_3__/* .Subject */ .B();
      this.tags = [];
      /*
       * Getter & Setter selected tags
       */
      this._selectedTags = [];
      /*
       * Getter & Setter for check organization level
       */
      this._isOrgLevel = false;
      /*
       * Getter & Setter for check tenant level
       */
      this._isTenantLevel = false;
      /*
       * Getter & Setter for multiple selection
       */
      this._multiple = true;
      /*
       * Getter & Setter for display label
       */
      this._label = true;
      /*
       * Getter & Setter for dynamic add tag option
       */
      this._addTag = true;
      this.selectedTagsEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__/* .EventEmitter */ .bkB();
      this.selectedTagsOverflow = false;
      this.noOfTagsFits = 0;
      /**
       * Create new tag
       *
       * @param name
       * @returns
       */
      this.createNewTag = /*#__PURE__*/function () {
        var _ref = (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(function* (name) {
          if (!name) {
            return;
          }
          _this.loading = true;
          const {
            tenantId
          } = _this.store.user;
          const {
            id: organizationId
          } = _this.organization;
          try {
            return yield (0,rxjs__WEBPACK_IMPORTED_MODULE_5__/* .firstValueFrom */ ._)(_this.tagsService.create({
              name: name,
              color: randomcolor__WEBPACK_IMPORTED_MODULE_0__(),
              description: '',
              tenantId,
              ...(_this.isOrgLevel ? {
                organizationId
              } : {})
            }));
          } catch (error) {
            console.log('Error while creating tags', error);
          } finally {
            _this.loading = false;
          }
        });
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }();
    }
    ngOnInit() {
      this.hasAddTag$ = this.store.userRolePermissions$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .map */ .T)(() => this.store.hasAnyPermission(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_7__/* .PermissionsEnum */ .U.ALL_ORG_EDIT, _gauzy_contracts__WEBPACK_IMPORTED_MODULE_7__/* .PermissionsEnum */ .U.ORG_TAGS_ADD)));
      this.subject$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .tap */ .M)(() => this.getTagsByLevel()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__/* .untilDestroyed */ .s)(this)).subscribe();
      this.store.selectedOrganization$.pipe((0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_10__/* .distinctUntilChange */ .nI)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__/* .filter */ .p)(organization => !!organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .tap */ .M)(organization => this.organization = organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .tap */ .M)(() => this.subject$.next(true)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__/* .untilDestroyed */ .s)(this)).subscribe();
      this.selectedTagsEvent.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__/* .untilDestroyed */ .s)(this)).subscribe(selectedTags => {
        this.checkTagsFit(selectedTags);
      });
    }
    /**
     * Get tags by level
     *
     * @returns
     */
    getTagsByLevel() {
      var _this2 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(function* () {
        if (!_this2.organization) {
          return;
        }
        const {
          tenantId
        } = _this2.store.user;
        const {
          id: organizationId
        } = _this2.organization;
        if (_this2.isOrgLevel) {
          const {
            items
          } = yield _this2.tagsService.getTagsByLevel({
            organizationId,
            tenantId
          });
          _this2.tags = items;
        }
        if (_this2.isTenantLevel) {
          const {
            items
          } = yield _this2.tagsService.getTagsByLevel({
            tenantId
          });
          _this2.tags = items;
        }
      })();
    }
    /**
     * Check if selected tags fits on the screen
     */
    checkTagsFit(selectedTags) {
      if (!selectedTags) {
        this.selectedTagsOverflow = false;
        return;
      }
      const selectedContainer = this.el.nativeElement.querySelector('.ng-value-container');
      const containerWidth = selectedContainer.offsetWidth;
      this.noOfTagsFits = 0;
      const totalTagWidth = selectedTags.reduce((acc, tag, currentIndex) => {
        const totalWidth = this.getTagWidth(tag.name) + acc;
        if (totalWidth >= containerWidth && this.noOfTagsFits === 0) this.noOfTagsFits = currentIndex;
        return totalWidth;
      }, 30); // 30px is the additional buffer
      this.selectedTagsOverflow = totalTagWidth >= containerWidth;
    }
    getTagWidth(badgeText) {
      const container = this.el.nativeElement;
      const testBadge = this.renderer.createElement('nb-badge');
      // Set badge text
      this.renderer.setProperty(testBadge, 'innerHTML', badgeText);
      // Append test badge to the container (not in DOM)
      this.renderer.appendChild(container, testBadge);
      // Add multiple classes to badge
      const badgeClasses = ['tag-color', 'tag-label', 'status-basic', 'position-top', 'position-right'];
      badgeClasses.forEach(badgeClass => {
        this.renderer.addClass(testBadge, badgeClass);
      });
      const badgeWidth = testBadge.offsetWidth + 10; // 10px is the padding
      // Remove test badge from container (not in DOM)
      this.renderer.removeChild(container, testBadge);
      return badgeWidth;
    }
    ngOnDestroy() {}
    static {
      this.ɵfac = function TagsColorInputComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || TagsColorInputComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_12__/* .TagsService */ .D), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_13__/* .Store */ .il), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbThemeService */ .NS1), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__/* .TranslateService */ .c$), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* .ElementRef */ .aKT), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* .Renderer2 */ .sFG));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineComponent"] */ .VBU({
        type: TagsColorInputComponent,
        selectors: [["ga-tags-color-input"]],
        hostBindings: function TagsColorInputComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("resize", function TagsColorInputComponent_resize_HostBindingHandler() {
              return ctx.onResize();
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresolveWindow"] */ .tSv);
          }
        },
        inputs: {
          selectedTags: "selectedTags",
          isOrgLevel: "isOrgLevel",
          isTenantLevel: "isTenantLevel",
          multiple: "multiple",
          label: "label",
          addTag: "addTag"
        },
        outputs: {
          selectedTagsEvent: "selectedTagsEvent"
        },
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
        decls: 7,
        vars: 12,
        consts: [["notOverflown", ""], [4, "ngIf"], ["id", "addTags", "bindLabel", "name", "appendTo", "body", 3, "change", "ngModelChange", "items", "multiple", "loading", "addTag", "ngModel", "closeOnSelect", "placeholder"], ["ng-option-tmp", ""], ["ng-multi-label-tmp", ""], ["for", "addTags", 1, "label"], [1, "d-flex", "align-items-center"], [1, "tag-color"], [1, "text"], ["type", "checkbox", 3, "ngModel"], [4, "ngIf", "ngIfElse"], ["class", "ng-value", 4, "ngFor", "ngForOf"], ["class", "ng-value", 4, "ngIf"], [1, "ng-value"], [1, "tag-color", "tag-label", 3, "click", "text"], [1, "ng-value-label"]],
        template: function TagsColorInputComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(1, TagsColorInputComponent_ng_container_1_Template, 4, 3, "ng-container", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(2, "ng-select", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(3, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(4, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("change", function TagsColorInputComponent_Template_ng_select_change_2_listener() {
              return ctx.selectedTagsEvent.emit(ctx.selectedTags);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtwoWayListener"] */ .mxI("ngModelChange", function TagsColorInputComponent_Template_ng_select_ngModelChange_2_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtwoWayBindingSet"] */ .DH7(ctx.selectedTags, $event) || (ctx.selectedTags = $event);
              return $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(5, TagsColorInputComponent_ng_template_5_Template, 5, 4, "ng-template", 3)(6, TagsColorInputComponent_ng_template_6_Template, 3, 2, "ng-template", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.label);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("items", ctx.tags)("multiple", ctx.multiple)("loading", ctx.loading)("addTag", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(3, 8, ctx.hasAddTag$) && ctx.addTag ? ctx.createNewTag : null);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtwoWayProperty"] */ .R50("ngModel", ctx.selectedTags);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("closeOnSelect", false)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(4, 10, "MENU.TAGS"));
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_16__/* .NgForOf */ .Sq, _angular_common__WEBPACK_IMPORTED_MODULE_16__/* .NgIf */ .bT, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbBadgeComponent */ .XyX, _angular_forms__WEBPACK_IMPORTED_MODULE_17__/* .CheckboxControlValueAccessor */ .Zm, _angular_forms__WEBPACK_IMPORTED_MODULE_17__/* .NgControlStatus */ .BC, _angular_forms__WEBPACK_IMPORTED_MODULE_17__/* .NgModel */ .vS, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_18__/* .NgSelectComponent */ .vr, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_18__/* .NgOptionTemplateDirective */ .Uq, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_18__/* .NgMultiLabelTemplateDirective */ .EY, _angular_common__WEBPACK_IMPORTED_MODULE_16__/* .AsyncPipe */ .Jj, _angular_common__WEBPACK_IMPORTED_MODULE_16__/* .SlicePipe */ .P9, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__/* .TranslatePipe */ .D9],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.tag-color[_ngcontent-%COMP%] {\n  position: unset;\n  display: inline-flex;\n  align-items: center;\n  width: 1rem;\n  height: 1rem;\n  margin-right: 10px;\n  margin-left: 10px;\n}\n\n.tag-label[_ngcontent-%COMP%] {\n  display: unset;\n  margin-right: 0;\n  border-radius: 2rem;\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: 0em;\n  padding: 3px 8px;\n}\n\ninput[_ngcontent-%COMP%] {\n  box-shadow: unset;\n  height: unset;\n}\n\n[_nghost-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value {\n  background-color: transparent;\n  margin-right: 0;\n}\n[_nghost-%COMP%]     .ng-select .ng-select-focused .ng-select-container:hover, [_nghost-%COMP%]     .ng-select .ng-select-focused .ng-select-container:focus, [_nghost-%COMP%]     .ng-select .ng-select-focused .ng-select-container:active, [_nghost-%COMP%]     .ng-select .ng-select-focused .ng-select-container:visited {\n  box-shadow: var(--gauzy-shadow) inset !important;\n}\n[_nghost-%COMP%]     .ng-select .ng-select-container {\n  box-shadow: var(--gauzy-shadow) inset !important;\n}\n\n.text[_ngcontent-%COMP%] {\n  overflow-x: hidden;\n  text-overflow: ellipsis;\n}"]
      });
    }
  };
  TagsColorInputComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_19__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__/* .UntilDestroy */ .d)({
    checkProperties: true
  }), (0,tslib__WEBPACK_IMPORTED_MODULE_19__/* .__metadata */ .Sn)("design:paramtypes", [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_12__/* .TagsService */ .D, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_13__/* .Store */ .il, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbThemeService */ .NS1, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__/* .TranslateService */ .c$, _angular_core__WEBPACK_IMPORTED_MODULE_1__/* .ElementRef */ .aKT, _angular_core__WEBPACK_IMPORTED_MODULE_1__/* .Renderer2 */ .sFG])], TagsColorInputComponent);
  return TagsColorInputComponent;
})();


/***/ }),

/***/ 63545:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ TagsService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(80189);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64913);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26024);
/* harmony import */ var _crud_crud_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7718);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(26860);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(45715);






let TagsService = /*#__PURE__*/(() => {
  class TagsService extends _crud_crud_service__WEBPACK_IMPORTED_MODULE_0__/* .CrudService */ .m {
    static {
      this.API_URL = `${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/tags`;
    }
    constructor(http) {
      super(http, TagsService.API_URL);
    }
    /**
     * Get tags
     *
     * @param relations
     * @param findInput
     * @returns
     */
    getTags(where, relations = []) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__/* .firstValueFrom */ ._)(this.http.get(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/tags`, {
        params: (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_3__/* .toParams */ .SV)({
          where,
          relations
        })
      }));
    }
    /**
     * Get tags by level
     *
     * @param where
     * @param relations
     * @returns
     */
    getTagsByLevel(where, relations = []) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__/* .firstValueFrom */ ._)(this.http.get(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/tags/level`, {
        params: (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_3__/* .toParams */ .SV)({
          ...where,
          relations
        })
      }));
    }
    static {
      this.ɵfac = function TagsService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || TagsService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵinject"] */ .KVO(_angular_common_http__WEBPACK_IMPORTED_MODULE_5__/* .HttpClient */ .Qq));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdefineInjectable"] */ .jDH({
        token: TagsService,
        factory: TagsService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return TagsService;
})();

/***/ }),

/***/ 76229:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O: () => (/* binding */ PictureNameTagsComponent)
/* harmony export */ });
/* harmony import */ var _notes_with_tags_notes_with_tags_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(33829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14572);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56383);
/* harmony import */ var _components_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(32386);





function PictureNameTagsComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(0, "nb-badge", 3);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵstyleProp"] */ .xc7("background", ctx_r0.background(ctx_r0.rowData == null ? null : ctx_r0.rowData.color))("color", ctx_r0.backgroundContrast(ctx_r0.rowData == null ? null : ctx_r0.rowData.brandColor));
  }
}
function PictureNameTagsComponent_div_2_nb_badge_1_Template(rf, ctx) {
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
function PictureNameTagsComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, PictureNameTagsComponent_div_2_nb_badge_1_Template, 1, 5, "nb-badge", 5);
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
let PictureNameTagsComponent = /*#__PURE__*/(() => {
  class PictureNameTagsComponent extends _notes_with_tags_notes_with_tags_component__WEBPACK_IMPORTED_MODULE_1__/* .NotesWithTagsComponent */ .i {
    constructor() {
      super(...arguments);
      this.isTags = true;
    }
    /**
     * Returns the avatar data based on the properties of the current row data.
     *
     * @returns An object representing the avatar data.
     */
    get avatar() {
      const {
        id,
        employeeId,
        fullName,
        name,
        employee
      } = this.rowData;
      const avatarId = employeeId === id ? id : employeeId;
      return {
        ...this.rowData,
        id: avatarId || null,
        name: fullName || name || null,
        imageUrl: this.rowData.user?.image?.fullUrl || this.rowData.imageUrl,
        employee
      };
    }
    static {
      this.ɵfac = /*@__PURE__*/(() => {
        let ɵPictureNameTagsComponent_BaseFactory;
        return function PictureNameTagsComponent_Factory(__ngFactoryType__) {
          return (ɵPictureNameTagsComponent_BaseFactory || (ɵPictureNameTagsComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetInheritedFactory"] */ .xGo(PictureNameTagsComponent)))(__ngFactoryType__ || PictureNameTagsComponent);
        };
      })();
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: PictureNameTagsComponent,
        selectors: [["ga-picture-name-tags"]],
        inputs: {
          isTags: "isTags"
        },
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
        decls: 3,
        vars: 6,
        consts: [[1, "report-table", 3, "src", "name", "id", "employee"], [3, "ngIf"], ["class", "badges-block", 4, "ngIf"], ["position", "centered", "text", "Default", 1, "color"], [1, "badges-block"], ["class", "color", "position", "centered", 3, "background", "color", "text", 4, "ngFor", "ngForOf"], ["position", "centered", 1, "color", 3, "text"]],
        template: function PictureNameTagsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(0, "ngx-avatar", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, PictureNameTagsComponent_ng_template_1_Template, 1, 4, "ng-template", 1)(2, PictureNameTagsComponent_div_2_Template, 3, 3, "div", 2);
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("src", ctx.avatar == null ? null : ctx.avatar.imageUrl)("name", ctx.avatar == null ? null : ctx.avatar.name)("id", ctx.avatar == null ? null : ctx.avatar.id)("employee", ctx.avatar.employee);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.rowData == null ? null : ctx.rowData.isDefault);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.isTags);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__/* .NgForOf */ .Sq, _angular_common__WEBPACK_IMPORTED_MODULE_2__/* .NgIf */ .bT, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbBadgeComponent */ .XyX, _components_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_4__/* .AvatarComponent */ .f, _angular_common__WEBPACK_IMPORTED_MODULE_2__/* .AsyncPipe */ .Jj],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.badges-block[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}", ".image-container[_ngcontent-%COMP%] {\n\t\t\t\twidth: 70px;\n\t\t\t\theight: 63px;\n\t\t\t\tdisplay: flex;\n\t\t\t\tjustify-content: center;\n\t\t\t}\n\n\t\t\t.color[_ngcontent-%COMP%] {\n\t\t\t\tposition: static;\n\t\t\t\tmargin-top: 5px;\n\t\t\t\tmargin-right: 5px;\n\t\t\t\tdisplay: inline-block;\n\t\t\t\tfont-size: 11px;\n\t\t\t\tfont-weight: 600;\n\t\t\t\tline-height: 13px;\n\t\t\t\tletter-spacing: 0em;\n\t\t\t\tpadding: 3px 8px;\n\t\t\t}\n\t\t\t.tags[_ngcontent-%COMP%] {\n\t\t\t\tdisplay: flex;\n\t\t\t\twidth: 200px;\n\t\t\t\tflex-wrap: wrap;\n\t\t\t}\n\n\t\t\timg[_ngcontent-%COMP%] {\n\t\t\t\theight: 100%;\n\t\t\t\tmax-width: 70px;\n\t\t\t\tborder-radius: 50%;\n\t\t\t}\n\n\t\t\t.tags-right[_ngcontent-%COMP%] {\n\t\t\t\tjustify-content: flex-end;\n\t\t\t}"]
      });
    }
  }
  return PictureNameTagsComponent;
})();

/***/ }),

/***/ 97379:
/***/ (function(module, exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
// randomColor by David Merfield under the CC0 license
// https://github.com/davidmerfield/randomColor/

;
(function (root, factory) {
  // Support CommonJS
  if (true) {
    var randomColor = factory();

    // Support NodeJS & Component, which allow module.exports to be a function
    if ( true && module && module.exports) {
      exports = module.exports = randomColor;
    }

    // Support CommonJS 1.1.1 spec
    exports.randomColor = randomColor;

    // Support AMD
  } else {}
})(this, function () {
  // Seed to get repeatable colors
  var seed = null;

  // Shared color dictionary
  var colorDictionary = {};

  // Populate the color dictionary
  loadColorBounds();

  // check if a range is taken
  var colorRanges = [];
  var randomColor = function (options) {
    options = options || {};

    // Check if there is a seed and ensure it's an
    // integer. Otherwise, reset the seed value.
    if (options.seed !== undefined && options.seed !== null && options.seed === parseInt(options.seed, 10)) {
      seed = options.seed;

      // A string was passed as a seed
    } else if (typeof options.seed === 'string') {
      seed = stringToInteger(options.seed);

      // Something was passed as a seed but it wasn't an integer or string
    } else if (options.seed !== undefined && options.seed !== null) {
      throw new TypeError('The seed value must be an integer or string');

      // No seed, reset the value outside.
    } else {
      seed = null;
    }
    var H, S, B;

    // Check if we need to generate multiple colors
    if (options.count !== null && options.count !== undefined) {
      var totalColors = options.count,
        colors = [];
      // Value false at index i means the range i is not taken yet.
      for (var i = 0; i < options.count; i++) {
        colorRanges.push(false);
      }
      options.count = null;
      while (totalColors > colors.length) {
        var color = randomColor(options);
        if (seed !== null) {
          options.seed = seed;
        }
        colors.push(color);
      }
      options.count = totalColors;
      return colors;
    }

    // First we pick a hue (H)
    H = pickHue(options);

    // Then use H to determine saturation (S)
    S = pickSaturation(H, options);

    // Then use S and H to determine brightness (B).
    B = pickBrightness(H, S, options);

    // Then we return the HSB color in the desired format
    return setFormat([H, S, B], options);
  };
  function pickHue(options) {
    if (colorRanges.length > 0) {
      var hueRange = getRealHueRange(options.hue);
      var hue = randomWithin(hueRange);

      //Each of colorRanges.length ranges has a length equal approximatelly one step
      var step = (hueRange[1] - hueRange[0]) / colorRanges.length;
      var j = parseInt((hue - hueRange[0]) / step);

      //Check if the range j is taken
      if (colorRanges[j] === true) {
        j = (j + 2) % colorRanges.length;
      } else {
        colorRanges[j] = true;
      }
      var min = (hueRange[0] + j * step) % 359,
        max = (hueRange[0] + (j + 1) * step) % 359;
      hueRange = [min, max];
      hue = randomWithin(hueRange);
      if (hue < 0) {
        hue = 360 + hue;
      }
      return hue;
    } else {
      var hueRange = getHueRange(options.hue);
      hue = randomWithin(hueRange);
      // Instead of storing red as two seperate ranges,
      // we group them, using negative numbers
      if (hue < 0) {
        hue = 360 + hue;
      }
      return hue;
    }
  }
  function pickSaturation(hue, options) {
    if (options.hue === 'monochrome') {
      return 0;
    }
    if (options.luminosity === 'random') {
      return randomWithin([0, 100]);
    }
    var saturationRange = getSaturationRange(hue);
    var sMin = saturationRange[0],
      sMax = saturationRange[1];
    switch (options.luminosity) {
      case 'bright':
        sMin = 55;
        break;
      case 'dark':
        sMin = sMax - 10;
        break;
      case 'light':
        sMax = 55;
        break;
    }
    return randomWithin([sMin, sMax]);
  }
  function pickBrightness(H, S, options) {
    var bMin = getMinimumBrightness(H, S),
      bMax = 100;
    switch (options.luminosity) {
      case 'dark':
        bMax = bMin + 20;
        break;
      case 'light':
        bMin = (bMax + bMin) / 2;
        break;
      case 'random':
        bMin = 0;
        bMax = 100;
        break;
    }
    return randomWithin([bMin, bMax]);
  }
  function setFormat(hsv, options) {
    switch (options.format) {
      case 'hsvArray':
        return hsv;
      case 'hslArray':
        return HSVtoHSL(hsv);
      case 'hsl':
        var hsl = HSVtoHSL(hsv);
        return 'hsl(' + hsl[0] + ', ' + hsl[1] + '%, ' + hsl[2] + '%)';
      case 'hsla':
        var hslColor = HSVtoHSL(hsv);
        var alpha = options.alpha || Math.random();
        return 'hsla(' + hslColor[0] + ', ' + hslColor[1] + '%, ' + hslColor[2] + '%, ' + alpha + ')';
      case 'rgbArray':
        return HSVtoRGB(hsv);
      case 'rgb':
        var rgb = HSVtoRGB(hsv);
        return 'rgb(' + rgb.join(', ') + ')';
      case 'rgba':
        var rgbColor = HSVtoRGB(hsv);
        var alpha = options.alpha || Math.random();
        return 'rgba(' + rgbColor.join(', ') + ', ' + alpha + ')';
      default:
        return HSVtoHex(hsv);
    }
  }
  function getMinimumBrightness(H, S) {
    var lowerBounds = getColorInfo(H).lowerBounds;
    for (var i = 0; i < lowerBounds.length - 1; i++) {
      var s1 = lowerBounds[i][0],
        v1 = lowerBounds[i][1];
      var s2 = lowerBounds[i + 1][0],
        v2 = lowerBounds[i + 1][1];
      if (S >= s1 && S <= s2) {
        var m = (v2 - v1) / (s2 - s1),
          b = v1 - m * s1;
        return m * S + b;
      }
    }
    return 0;
  }
  function getHueRange(colorInput) {
    if (typeof parseInt(colorInput) === 'number') {
      var number = parseInt(colorInput);
      if (number < 360 && number > 0) {
        return [number, number];
      }
    }
    if (typeof colorInput === 'string') {
      if (colorDictionary[colorInput]) {
        var color = colorDictionary[colorInput];
        if (color.hueRange) {
          return color.hueRange;
        }
      } else if (colorInput.match(/^#?([0-9A-F]{3}|[0-9A-F]{6})$/i)) {
        var hue = HexToHSB(colorInput)[0];
        return [hue, hue];
      }
    }
    return [0, 360];
  }
  function getSaturationRange(hue) {
    return getColorInfo(hue).saturationRange;
  }
  function getColorInfo(hue) {
    // Maps red colors to make picking hue easier
    if (hue >= 334 && hue <= 360) {
      hue -= 360;
    }
    for (var colorName in colorDictionary) {
      var color = colorDictionary[colorName];
      if (color.hueRange && hue >= color.hueRange[0] && hue <= color.hueRange[1]) {
        return colorDictionary[colorName];
      }
    }
    return 'Color not found';
  }
  function randomWithin(range) {
    if (seed === null) {
      //generate random evenly destinct number from : https://martin.ankerl.com/2009/12/09/how-to-create-random-colors-programmatically/
      var golden_ratio = 0.618033988749895;
      var r = Math.random();
      r += golden_ratio;
      r %= 1;
      return Math.floor(range[0] + r * (range[1] + 1 - range[0]));
    } else {
      //Seeded random algorithm from http://indiegamr.com/generate-repeatable-random-numbers-in-js/
      var max = range[1] || 1;
      var min = range[0] || 0;
      seed = (seed * 9301 + 49297) % 233280;
      var rnd = seed / 233280.0;
      return Math.floor(min + rnd * (max - min));
    }
  }
  function HSVtoHex(hsv) {
    var rgb = HSVtoRGB(hsv);
    function componentToHex(c) {
      var hex = c.toString(16);
      return hex.length == 1 ? '0' + hex : hex;
    }
    var hex = '#' + componentToHex(rgb[0]) + componentToHex(rgb[1]) + componentToHex(rgb[2]);
    return hex;
  }
  function defineColor(name, hueRange, lowerBounds) {
    var sMin = lowerBounds[0][0],
      sMax = lowerBounds[lowerBounds.length - 1][0],
      bMin = lowerBounds[lowerBounds.length - 1][1],
      bMax = lowerBounds[0][1];
    colorDictionary[name] = {
      hueRange: hueRange,
      lowerBounds: lowerBounds,
      saturationRange: [sMin, sMax],
      brightnessRange: [bMin, bMax]
    };
  }
  function loadColorBounds() {
    defineColor('monochrome', null, [[0, 0], [100, 0]]);
    defineColor('red', [-26, 18], [[20, 100], [30, 92], [40, 89], [50, 85], [60, 78], [70, 70], [80, 60], [90, 55], [100, 50]]);
    defineColor('orange', [18, 46], [[20, 100], [30, 93], [40, 88], [50, 86], [60, 85], [70, 70], [100, 70]]);
    defineColor('yellow', [46, 62], [[25, 100], [40, 94], [50, 89], [60, 86], [70, 84], [80, 82], [90, 80], [100, 75]]);
    defineColor('green', [62, 178], [[30, 100], [40, 90], [50, 85], [60, 81], [70, 74], [80, 64], [90, 50], [100, 40]]);
    defineColor('blue', [178, 257], [[20, 100], [30, 86], [40, 80], [50, 74], [60, 60], [70, 52], [80, 44], [90, 39], [100, 35]]);
    defineColor('purple', [257, 282], [[20, 100], [30, 87], [40, 79], [50, 70], [60, 65], [70, 59], [80, 52], [90, 45], [100, 42]]);
    defineColor('pink', [282, 334], [[20, 100], [30, 90], [40, 86], [60, 84], [80, 80], [90, 75], [100, 73]]);
  }
  function HSVtoRGB(hsv) {
    // this doesn't work for the values of 0 and 360
    // here's the hacky fix
    var h = hsv[0];
    if (h === 0) {
      h = 1;
    }
    if (h === 360) {
      h = 359;
    }

    // Rebase the h,s,v values
    h = h / 360;
    var s = hsv[1] / 100,
      v = hsv[2] / 100;
    var h_i = Math.floor(h * 6),
      f = h * 6 - h_i,
      p = v * (1 - s),
      q = v * (1 - f * s),
      t = v * (1 - (1 - f) * s),
      r = 256,
      g = 256,
      b = 256;
    switch (h_i) {
      case 0:
        r = v;
        g = t;
        b = p;
        break;
      case 1:
        r = q;
        g = v;
        b = p;
        break;
      case 2:
        r = p;
        g = v;
        b = t;
        break;
      case 3:
        r = p;
        g = q;
        b = v;
        break;
      case 4:
        r = t;
        g = p;
        b = v;
        break;
      case 5:
        r = v;
        g = p;
        b = q;
        break;
    }
    var result = [Math.floor(r * 255), Math.floor(g * 255), Math.floor(b * 255)];
    return result;
  }
  function HexToHSB(hex) {
    hex = hex.replace(/^#/, '');
    hex = hex.length === 3 ? hex.replace(/(.)/g, '$1$1') : hex;
    var red = parseInt(hex.substr(0, 2), 16) / 255,
      green = parseInt(hex.substr(2, 2), 16) / 255,
      blue = parseInt(hex.substr(4, 2), 16) / 255;
    var cMax = Math.max(red, green, blue),
      delta = cMax - Math.min(red, green, blue),
      saturation = cMax ? delta / cMax : 0;
    switch (cMax) {
      case red:
        return [60 * ((green - blue) / delta % 6) || 0, saturation, cMax];
      case green:
        return [60 * ((blue - red) / delta + 2) || 0, saturation, cMax];
      case blue:
        return [60 * ((red - green) / delta + 4) || 0, saturation, cMax];
    }
  }
  function HSVtoHSL(hsv) {
    var h = hsv[0],
      s = hsv[1] / 100,
      v = hsv[2] / 100,
      k = (2 - s) * v;
    return [h, Math.round(s * v / (k < 1 ? k : 2 - k) * 10000) / 100, k / 2 * 100];
  }
  function stringToInteger(string) {
    var total = 0;
    for (var i = 0; i !== string.length; i++) {
      if (total >= Number.MAX_SAFE_INTEGER) break;
      total += string.charCodeAt(i);
    }
    return total;
  }

  // get The range of given hue when options.count!=0
  function getRealHueRange(colorHue) {
    if (!isNaN(colorHue)) {
      var number = parseInt(colorHue);
      if (number < 360 && number > 0) {
        return getColorInfo(colorHue).hueRange;
      }
    } else if (typeof colorHue === 'string') {
      if (colorDictionary[colorHue]) {
        var color = colorDictionary[colorHue];
        if (color.hueRange) {
          return color.hueRange;
        }
      } else if (colorHue.match(/^#?([0-9A-F]{3}|[0-9A-F]{6})$/i)) {
        var hue = HexToHSB(colorHue)[0];
        return getColorInfo(hue).hueRange;
      }
    }
    return [0, 360];
  }
  return randomColor;
});

/***/ })

}]);