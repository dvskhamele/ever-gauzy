"use strict";
(self["webpackChunkgauzy"] = self["webpackChunkgauzy"] || []).push([[836],{

/***/ 31835:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: () => (/* binding */ CustomViewComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26860);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81236);



const _c0 = ["dynamicTarget"];
function CustomViewComponent_ng_template_0_Template(rf, ctx) {}
let CustomViewComponent = /*#__PURE__*/(() => {
  class CustomViewComponent {
    constructor(resolver) {
      this.resolver = resolver;
    }
    ngOnInit() {
      this.createCustomComponent();
      this.patchInstance();
    }
    ngOnDestroy() {
      if (this.customComponent) {
        this.customComponent.destroy();
      }
    }
    createCustomComponent() {
      const componentFactory = this.resolver.resolveComponentFactory(this.renderComponent);
      this.customComponent = this.dynamicTarget.createComponent(componentFactory);
    }
    patchInstance() {
      Object.assign(this.customComponent.instance, {
        value: this.value,
        rowData: this.rowData,
        layout: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__/* .ComponentLayoutStyleEnum */ .IE.CARDS_GRID
      });
    }
    static {
      this.ɵfac = function CustomViewComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || CustomViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* .ComponentFactoryResolver */ .OM3));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineComponent"] */ .VBU({
        type: CustomViewComponent,
        selectors: [["ga-custom-component"]],
        viewQuery: function CustomViewComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵviewQuery"] */ .GBs(_c0, 7, _angular_core__WEBPACK_IMPORTED_MODULE_1__/* .ViewContainerRef */ .c1b);
          }
          if (rf & 2) {
            let _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵqueryRefresh"] */ .mGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵloadQuery"] */ .lsd()) && (ctx.dynamicTarget = _t.first);
          }
        },
        inputs: {
          renderComponent: "renderComponent",
          value: "value",
          rowData: "rowData"
        },
        standalone: false,
        decls: 2,
        vars: 0,
        consts: [["dynamicTarget", ""]],
        template: function CustomViewComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(0, CustomViewComponent_ng_template_0_Template, 0, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplateRefExtractor"] */ .C5r);
          }
        },
        encapsulation: 2
      });
    }
  }
  return CustomViewComponent;
})();

/***/ }),

/***/ 49517:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ CardGridComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(55598);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(41598);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88326);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39938);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4478);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(52738);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(39855);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(14572);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(56383);
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(59363);
/* harmony import */ var _smart_data_layout_no_data_message_no_data_message_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(95959);
/* harmony import */ var _card_grid_custom_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(31835);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(19223);













const _c0 = ["grid"];
const _c1 = (a0, a1) => ({
  "image-logo": a0,
  active: a1
});
function CardGridComponent_div_0_nb_card_2_div_2_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(0, "div", 17);
  }
  if (rf & 2) {
    const key_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG().$implicit;
    const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("innerHTML", item_r4[key_r5], _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵsanitizeHtml"] */ .npT);
  }
}
function CardGridComponent_div_0_nb_card_2_div_2_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const key_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG().$implicit;
    const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(2, 1, item_r4[key_r5]));
  }
}
function CardGridComponent_div_0_nb_card_2_div_2_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const key_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG().$implicit;
    const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(item_r4[key_r5].name);
  }
}
function CardGridComponent_div_0_nb_card_2_div_2_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div")(1, "ga-custom-component", 18, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function CardGridComponent_div_0_nb_card_2_div_2_div_7_Template_ga_custom_component_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r6);
      const component_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(2);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.selectCustomViewComponent(component_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const key_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG().$implicit;
    const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("renderComponent", ctx_r1.settings.columns[key_r5].renderComponent)("value", item_r4[key_r5])("rowData", item_r4);
  }
}
function CardGridComponent_div_0_nb_card_2_div_2_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const key_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG().$implicit;
    const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(ctx_r1.getValue(item_r4, key_r5));
  }
}
function CardGridComponent_div_0_nb_card_2_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 11)(1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(4, CardGridComponent_div_0_nb_card_2_div_2_div_4_Template, 1, 1, "div", 14)(5, CardGridComponent_div_0_nb_card_2_div_2_div_5_Template, 3, 3, "div", 15)(6, CardGridComponent_div_0_nb_card_2_div_2_div_6_Template, 2, 1, "div", 15)(7, CardGridComponent_div_0_nb_card_2_div_2_div_7_Template, 3, 3, "div", 15)(8, CardGridComponent_div_0_nb_card_2_div_2_div_8_Template, 2, 1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const key_r5 = ctx.$implicit;
    const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction2"] */ .l_i(8, _c1, ctx_r1.settings.columns[key_r5].title === "Image", ctx_r1.selected.isSelected && ctx_r1.selected.data.id === item_r4.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", ctx_r1.settings.columns[key_r5].title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction2"] */ .l_i(11, _c1, ctx_r1.settings.columns[key_r5].title === "Image", ctx_r1.selected.isSelected && ctx_r1.selected.data.id === item_r4.id))("ngSwitch", ctx_r1.settings.columns[key_r5].type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngSwitchCase", "html");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngSwitchCase", "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngSwitchCase", "function");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngSwitchCase", "custom");
  }
}
function CardGridComponent_div_0_nb_card_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-card", 8)(1, "nb-card-body", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function CardGridComponent_div_0_nb_card_2_Template_nb_card_body_click_1_listener() {
      const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r3).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.selectedItem(item_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(2, CardGridComponent_div_0_nb_card_2_div_2_Template, 9, 14, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngClass", ctx_r1.selected.isSelected && ctx_r1.selected.data.id === item_r4.id ? "card-body active" : "card-body");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx_r1.getKeys());
  }
}
function CardGridComponent_div_0_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function CardGridComponent_div_0_button_5_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r8);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.onScroll());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "nb-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI("", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(3, 1, "BUTTONS.SHOW_MORE"), " ");
  }
}
function CardGridComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 4, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("scrolled", function CardGridComponent_div_0_Template_div_scrolled_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.onScroll());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(2, CardGridComponent_div_0_nb_card_2_Template, 3, 2, "nb-card", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(5, CardGridComponent_div_0_button_5_Template, 4, 3, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("scrollWindow", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(3, 3, ctx_r1.source$));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r1.showMore);
  }
}
function CardGridComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "ngx-no-data-message", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("message", ctx_r1.getNoDataMessage());
  }
}
let CardGridComponent = /*#__PURE__*/(() => {
  let CardGridComponent = class CardGridComponent {
    set source(content) {
      this.source$.next(content);
    }
    set grid(content) {
      if (content) {
        this._grid$.next(content);
      }
    }
    get grid() {
      return this._grid$.getValue();
    }
    get settings() {
      return this._settings;
    }
    set settings(settings) {
      this.setColumns(settings.columns);
      this._settings = settings;
    }
    set totalItems(content) {
      this._totalItems$.next(content);
    }
    constructor() {
      this.source$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__/* .BehaviorSubject */ .t([]);
      this.onSelectedItem = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .bkB();
      this.scroll = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .bkB();
      this.selected = {
        isSelected: false,
        data: null
      };
      this._grid$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__/* .BehaviorSubject */ .t(null);
      this._showMore = false;
      /*
       * Getter & Setter for dynamic columns settings
       */
      this._settings = {};
      /**
       * GRID defined columns
       */
      this.columns = [];
      this._totalItems$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__/* .BehaviorSubject */ .t(0);
    }
    getNoDataMessage() {
      return this.settings.noDataMessage;
    }
    getKeys() {
      return Object.keys(this.settings.columns);
    }
    setColumns(columns) {
      this.columns = columns;
    }
    getColumns() {
      return this.columns;
    }
    selectedItem(item) {
      this.selected = this.selected.data && item.id === this.selected.data.id ? {
        isSelected: !this.selected.isSelected,
        data: item
      } : {
        isSelected: true,
        data: item
      };
      this.onSelectedItem.emit(this.selected);
    }
    selectCustomViewComponent(component) {
      this._selectedCustomViewComponent = component;
    }
    customComponentInstance() {
      return this._selectedCustomViewComponent?.customComponent?.instance;
    }
    clearCustomViewComponent() {
      if (this._selectedCustomViewComponent) {
        this._selectedCustomViewComponent = null;
        this.selected = {
          isSelected: false,
          data: null
        };
      }
    }
    onScroll() {
      this.scroll.emit();
    }
    ngOnInit() {
      const source$ = this.source$.asObservable();
      const grid$ = this._grid$.asObservable();
      (0,rxjs__WEBPACK_IMPORTED_MODULE_2__/* .combineLatest */ .z)([source$, grid$]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__/* .debounceTime */ .B)(100), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__/* .filter */ .p)(([source, grid]) => !!grid && !!source), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .M)(([source]) => {
        this._arrayOverflow = this.totalItems <= source.length;
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .tap */ .M)(([, grid]) => this.showMore = !this._hasScrollbar(grid)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__/* .untilDestroyed */ .s)(this)).subscribe();
    }
    /**
     * Retrieve the value of a given key from a row, optionally applying a value preparation function if defined.
     *
     * @param row - The data row object.
     * @param key - The key whose value needs to be retrieved.
     * @returns The prepared value or the raw value from the row.
     */
    getValue(row, key) {
      try {
        const columns = this.getColumns();
        if (key in columns) {
          const column = columns[key];
          const value = row[key];
          if (typeof column.valuePrepareFunction === 'function') {
            return column.valuePrepareFunction.call(null, value, row);
          }
          return value;
        }
        throw new Error(`Key "${key}" not found in columns.`);
      } catch (error) {
        console.error('Error getting value:', error);
        return undefined;
      }
    }
    _hasScrollbar(grid) {
      return grid.nativeElement.scrollHeight > grid.nativeElement.clientHeight;
    }
    get showMore() {
      const size = this.source.length;
      return this._showMore && size >= 10 && !this._arrayOverflow;
    }
    set showMore(value) {
      this._showMore = value;
    }
    get source() {
      return this.source$.getValue();
    }
    get totalItems() {
      return this._totalItems$.getValue();
    }
    ngOnDestroy() {}
    static {
      this.ɵfac = function CardGridComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || CardGridComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: CardGridComponent,
        selectors: [["ga-card-grid"]],
        viewQuery: function CardGridComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵviewQuery"] */ .GBs(_c0, 5);
          }
          if (rf & 2) {
            let _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵqueryRefresh"] */ .mGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵloadQuery"] */ .lsd()) && (ctx.grid = _t.first);
          }
        },
        inputs: {
          source: "source",
          settings: "settings",
          totalItems: "totalItems"
        },
        outputs: {
          onSelectedItem: "onSelectedItem",
          scroll: "scroll"
        },
        standalone: false,
        decls: 4,
        vars: 4,
        consts: [["noDataGridLayout", ""], ["grid", ""], ["component", ""], ["class", "card-layout grid-scroll-container", "infinite-scroll", "", 3, "scrollWindow", "scrolled", 4, "ngIf", "ngIfElse"], ["infinite-scroll", "", 1, "card-layout", "grid-scroll-container", 3, "scrolled", "scrollWindow"], ["class", "card-item", 4, "ngFor", "ngForOf"], [1, "show-more-button"], ["nbButton", "", "status", "basic", "size", "small", "class", "d-flex", 3, "click", 4, "ngIf"], [1, "card-item"], [3, "click", "ngClass"], ["class", "info-line", 4, "ngFor", "ngForOf"], [1, "info-line"], [1, "info-meta", 3, "ngClass"], [1, "info-value", 3, "ngClass", "ngSwitch"], [3, "innerHTML", 4, "ngSwitchCase"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [3, "innerHTML"], [1, "custom", 3, "click", "renderComponent", "value", "rowData"], ["nbButton", "", "status", "basic", "size", "small", 1, "d-flex", 3, "click"], ["icon", "arrowhead-down-outline"], [1, "no-data"], [3, "message"]],
        template: function CardGridComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(0, CardGridComponent_div_0_Template, 6, 5, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(1, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(2, CardGridComponent_ng_template_2_Template, 2, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplateRefExtractor"] */ .C5r);
          }
          if (rf & 2) {
            const noDataGridLayout_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.source && _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(1, 2, ctx.source$).length > 0)("ngIfElse", noDataGridLayout_r9);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__/* .NgClass */ .YU, _angular_common__WEBPACK_IMPORTED_MODULE_7__/* .NgForOf */ .Sq, _angular_common__WEBPACK_IMPORTED_MODULE_7__/* .NgIf */ .bT, _angular_common__WEBPACK_IMPORTED_MODULE_7__/* .NgSwitch */ .ux, _angular_common__WEBPACK_IMPORTED_MODULE_7__/* .NgSwitchCase */ .e1, _angular_common__WEBPACK_IMPORTED_MODULE_7__/* .NgSwitchDefault */ .fG, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__/* .NbCardComponent */ .SrT, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__/* .NbCardBodyComponent */ .KH5, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__/* .NbButtonComponent */ .YP2, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__/* .NbIconComponent */ .tHu, ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_9__/* .InfiniteScrollDirective */ .D, _smart_data_layout_no_data_message_no_data_message_component__WEBPACK_IMPORTED_MODULE_10__/* .NoDataMessageComponent */ ._, _card_grid_custom_component__WEBPACK_IMPORTED_MODULE_11__/* .CustomViewComponent */ .q, _angular_common__WEBPACK_IMPORTED_MODULE_7__/* .AsyncPipe */ .Jj, _angular_common__WEBPACK_IMPORTED_MODULE_7__/* .DatePipe */ .vh, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__/* .TranslatePipe */ .D9],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   .card-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(21rem, 1fr));\n  align-items: flex-start;\n  justify-content: flex-start;\n  column-gap: 1rem;\n  grid-gap: 1rem;\n  color: var(--color-basic-default);\n  overflow-y: auto;\n  max-height: 100%;\n}\n[dir=ltr]   [_nghost-%COMP%]   .card-layout[_ngcontent-%COMP%] {\n  padding-right: 0.5rem;\n}\n[dir=rtl]   [_nghost-%COMP%]   .card-layout[_ngcontent-%COMP%] {\n  padding-left: 0.5rem;\n}\n[_nghost-%COMP%]   .card-layout[_ngcontent-%COMP%]   .card-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 0;\n  border-radius: 0.5rem;\n  background-color: var(--background-basic-color-3);\n  box-shadow: var(--gauzy-shadow);\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .card-layout[_ngcontent-%COMP%]   .card-item[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  background-color: var(--background-basic-color-3);\n  border-radius: 0.5rem;\n  padding: 12px 10px;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n[_nghost-%COMP%]   .card-layout[_ngcontent-%COMP%]   .card-item[_ngcontent-%COMP%]   .card-body.active[_ngcontent-%COMP%] {\n  background: var(--color-primary-transparent-100);\n}\n[_nghost-%COMP%]   .card-layout[_ngcontent-%COMP%]   .card-item[_ngcontent-%COMP%]:hover {\n  border-color: var(--color-primary-hover-border);\n}\n[_nghost-%COMP%]   .card-layout[_ngcontent-%COMP%]   .card-item[_ngcontent-%COMP%]:focus {\n  border-color: var(--color-primary-focus-border);\n}\n[_nghost-%COMP%]   .card-layout[_ngcontent-%COMP%]   .card-item[_ngcontent-%COMP%]   .info-line[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  font-size: 0.7em;\n  width: 100%;\n  flex-grow: 2;\n  gap: 4px;\n}\n[_nghost-%COMP%]   .card-layout[_ngcontent-%COMP%]   .card-item[_ngcontent-%COMP%]   .info-line[_ngcontent-%COMP%]   .info-meta[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n  padding: 6px 10px;\n  border-radius: 4px;\n  width: 88%;\n}\n[_nghost-%COMP%]   .card-layout[_ngcontent-%COMP%]   .card-item[_ngcontent-%COMP%]   .info-line[_ngcontent-%COMP%]   .info-meta.image-logo[_ngcontent-%COMP%] {\n  display: none;\n}\n[_nghost-%COMP%]   .card-layout[_ngcontent-%COMP%]   .card-item[_ngcontent-%COMP%]   .info-line[_ngcontent-%COMP%]   .info-meta.active[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-sidebar-background-4);\n}\n[_nghost-%COMP%]   .card-layout[_ngcontent-%COMP%]   .card-item[_ngcontent-%COMP%]   .info-line[_ngcontent-%COMP%]   .info-value[_ngcontent-%COMP%] {\n  text-align: start;\n  font-size: 1em;\n  background-color: var(--gauzy-card-1);\n  padding: 6px 10px;\n  border-radius: 4px;\n  width: 100%;\n  position: relative;\n}\n[_nghost-%COMP%]   .card-layout[_ngcontent-%COMP%]   .card-item[_ngcontent-%COMP%]   .info-line[_ngcontent-%COMP%]   .info-value.image-logo[_ngcontent-%COMP%] {\n  background-color: unset;\n  padding: 0;\n}\n[_nghost-%COMP%]   .card-layout[_ngcontent-%COMP%]   .card-item[_ngcontent-%COMP%]   .info-line[_ngcontent-%COMP%]   .info-value.active[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-sidebar-background-4);\n}\n[_nghost-%COMP%]   .card-layout[_ngcontent-%COMP%]   .card-item[_ngcontent-%COMP%]   .info-line[_ngcontent-%COMP%]   .info-value[_ngcontent-%COMP%]   .custom[_ngcontent-%COMP%]  .img-container {\n  width: 100%;\n}\n[_nghost-%COMP%]   .card-layout[_ngcontent-%COMP%]   .card-item[_ngcontent-%COMP%]   .info-line[_ngcontent-%COMP%]   .info-value[_ngcontent-%COMP%]   .custom[_ngcontent-%COMP%]  .img-container img {\n  height: 132px;\n  width: 100%;\n}\n[_nghost-%COMP%]   .card-layout[_ngcontent-%COMP%]   .card-item[_ngcontent-%COMP%]   .info-line[_ngcontent-%COMP%]   .info-value[_ngcontent-%COMP%]   .custom[_ngcontent-%COMP%]  ga-notes-with-tags .tags-right, \n[_nghost-%COMP%]   .card-layout[_ngcontent-%COMP%]   .card-item[_ngcontent-%COMP%]   .info-line[_ngcontent-%COMP%]   .info-value[_ngcontent-%COMP%]   .custom[_ngcontent-%COMP%]  ga-only-tags .tags-right {\n  justify-content: start;\n}\n[_nghost-%COMP%]   .card-layout[_ngcontent-%COMP%]   .card-item[_ngcontent-%COMP%]   .info-line[_ngcontent-%COMP%]   .info-value[_ngcontent-%COMP%]   .custom[_ngcontent-%COMP%]  ngx-tags-color div {\n  margin: 0;\n  position: inherit;\n}\n[_nghost-%COMP%]   .card-layout[_ngcontent-%COMP%]   .card-item[_ngcontent-%COMP%]   .info-line[_ngcontent-%COMP%]   .info-value[_ngcontent-%COMP%]   .custom[_ngcontent-%COMP%]  ngx-tags-color div .color {\n  width: 100%;\n}\n[_nghost-%COMP%]   .card-layout[_ngcontent-%COMP%]   .card-item[_ngcontent-%COMP%]   .info-line[_ngcontent-%COMP%]   .info-value[_ngcontent-%COMP%]   .custom[_ngcontent-%COMP%]  ngx-status-view {\n  height: 2rem;\n  width: 100%;\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  margin: 0;\n}\n[_nghost-%COMP%]   .card-layout[_ngcontent-%COMP%]   .card-item[_ngcontent-%COMP%]   .info-line[_ngcontent-%COMP%]   .info-value[_ngcontent-%COMP%]   .custom[_ngcontent-%COMP%]  ngx-status-view .badge {\n  position: absolute;\n  height: 2rem;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n[_nghost-%COMP%]   .card-layout[_ngcontent-%COMP%]   .card-item[_ngcontent-%COMP%]   .info-line[_ngcontent-%COMP%]   .info-value[_ngcontent-%COMP%]   .custom[_ngcontent-%COMP%]  ga-status-badge {\n  width: 100%;\n  position: absolute;\n  left: 0;\n  top: 0;\n  margin: 0;\n}\n[_nghost-%COMP%]   .card-layout[_ngcontent-%COMP%]   .card-item[_ngcontent-%COMP%]   .info-line[_ngcontent-%COMP%]   .info-value[_ngcontent-%COMP%]   .custom[_ngcontent-%COMP%]  ga-status-badge .badge {\n  height: 2rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: var(--text-button-tiny-font-size);\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 15px;\n  letter-spacing: 0em;\n  text-align: left;\n}\n[_nghost-%COMP%]   .card-layout[_ngcontent-%COMP%]   .card-item[_ngcontent-%COMP%]   .info-line[_ngcontent-%COMP%]   .info-value[_ngcontent-%COMP%]   .custom[_ngcontent-%COMP%]  .progress-bar-container {\n  width: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  margin: 0;\n}\n[_nghost-%COMP%]   .card-layout[_ngcontent-%COMP%]   .card-item[_ngcontent-%COMP%]   .info-line[_ngcontent-%COMP%]   .info-value[_ngcontent-%COMP%]   .custom[_ngcontent-%COMP%]  .progress-bar-container .paid-percent {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n[_nghost-%COMP%]   .card-layout[_ngcontent-%COMP%]   .card-item[_ngcontent-%COMP%]   .info-line[_ngcontent-%COMP%]   .info-value[_ngcontent-%COMP%]   .custom[_ngcontent-%COMP%]  li {\n  font-size: 1em;\n}\n[_nghost-%COMP%]   .card-layout[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%] {\n  justify-content: space-around;\n  display: flex;\n}\n\n[_nghost-%COMP%] {\n  max-height: 100%;\n  height: 100%;\n}\n[_nghost-%COMP%]   .no-data[_ngcontent-%COMP%] {\n  height: 100%;\n}\n[dir=ltr]   [_nghost-%COMP%]   .no-data[_ngcontent-%COMP%] {\n  padding-right: 0.625rem;\n}\n[dir=rtl]   [_nghost-%COMP%]   .no-data[_ngcontent-%COMP%] {\n  padding-left: 0.625rem;\n}\n\n.show-more-button[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.show-more-button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border-radius: var(--border-radius);\n  border: none;\n  box-shadow: var(--gauzy-shadow);\n}"]
      });
    }
  };
  CardGridComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__/* .UntilDestroy */ .d)({
    checkProperties: true
  }), (0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__metadata */ .Sn)("design:paramtypes", [])], CardGridComponent);
  return CardGridComponent;
})();


/***/ }),

/***/ 80784:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   n: () => (/* binding */ CardGridModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14572);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56383);
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(59363);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19223);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71924);
/* harmony import */ var _smart_data_layout_no_data_message_no_data_message_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(59238);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);








let CardGridModule = /*#__PURE__*/(() => {
  class CardGridModule {
    static {
      this.ɵfac = function CardGridModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || CardGridModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .$C({
        type: CardGridModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .G2t({
        providers: [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_1__/* .Store */ .il],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__/* .CommonModule */ .MD, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbCardModule */ .lVF, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbButtonModule */ .P5N, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbIconModule */ .clu, ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_4__/* .InfiniteScrollModule */ .e, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__/* .TranslateModule */ .h.forChild(), _smart_data_layout_no_data_message_no_data_message_module__WEBPACK_IMPORTED_MODULE_6__/* .NoDataMessageModule */ .j]
      });
    }
  }
  return CardGridModule;
})();

/***/ })

}]);