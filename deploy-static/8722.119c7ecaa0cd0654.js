"use strict";
(self["webpackChunkgauzy"] = self["webpackChunkgauzy"] || []).push([[8722],{

/***/ 3456:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ PaginationV2Component)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(55598);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39855);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41598);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56383);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14572);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19223);

/* It's a pagination component that works with the angular2-smart-table component */








const _c0 = a0 => ({
  disabled: a0
});
const _c1 = a0 => ({
  active: a0
});
function PaginationV2Component_nav_0_li_14_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(2, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(3, "(current)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const sheet_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI("", sheet_r3, " ");
  }
}
function PaginationV2Component_nav_0_li_14_span_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function PaginationV2Component_nav_0_li_14_span_2_Template_span_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r4);
      const sheet_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.paginate(sheet_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const sheet_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(sheet_r3);
  }
}
function PaginationV2Component_nav_0_li_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, PaginationV2Component_nav_0_li_14_span_1_Template, 4, 1, "span", 18)(2, PaginationV2Component_nav_0_li_14_span_2_Template, 2, 1, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const sheet_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction1"] */ .eq3(3, _c1, sheet_r3 === ctx_r1.page));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", sheet_r3 === ctx_r1.page);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r1.page != sheet_r3);
  }
}
function PaginationV2Component_nav_0_div_27_nb_option_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("value", item_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(item_r6);
  }
}
function PaginationV2Component_nav_0_div_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 20)(1, "nb-select", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("selectedChange", function PaginationV2Component_nav_0_div_27_Template_nb_select_selectedChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.onChangePerPage($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayListener"] */ .mxI("selectedChange", function PaginationV2Component_nav_0_div_27_Template_nb_select_selectedChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayBindingSet"] */ .DH7(ctx_r1.currentPerPage, $event) || (ctx_r1.currentPerPage = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(2, PaginationV2Component_nav_0_div_27_nb_option_2_Template, 2, 2, "nb-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayProperty"] */ .R50("selected", ctx_r1.currentPerPage);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx_r1.perPageSelect);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate4"] */ .LHq(" ", ctx_r1.startCount, " - ", ctx_r1.endCount, " of ", ctx_r1.count, " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(5, 6, "PAGINATION.ITEMS"), " ");
  }
}
function PaginationV2Component_nav_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nav", 1)(1, "ul", 2)(2, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function PaginationV2Component_nav_0_Template_li_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.page === 1 ? false : ctx_r1.paginate(1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(3, "a", 4)(4, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(5, "nb-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(6, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(7, "First");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(8, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function PaginationV2Component_nav_0_Template_li_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.page === 1 ? false : ctx_r1.prev());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(9, "a", 9)(10, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(11, "nb-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(12, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(13, "Prev");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(14, PaginationV2Component_nav_0_li_14_Template, 3, 5, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(15, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function PaginationV2Component_nav_0_Template_li_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.page === ctx_r1.last ? false : ctx_r1.next());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(16, "a", 12)(17, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(18, "nb-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(19, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(20, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(21, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function PaginationV2Component_nav_0_Template_li_click_21_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.page === ctx_r1.last ? false : ctx_r1.paginate(ctx_r1.last));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(22, "a", 14)(23, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(24, "nb-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(25, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(26, "Last");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(27, PaginationV2Component_nav_0_div_27_Template, 6, 8, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction1"] */ .eq3(4, _c0, ctx_r1.page === 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx_r1.pages);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction1"] */ .eq3(6, _c0, ctx_r1.page === ctx_r1.last));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r1.perPageSelect && ctx_r1.perPageSelect.length > 0);
  }
}
let PaginationV2Component = /*#__PURE__*/(() => {
  let PaginationV2Component = class PaginationV2Component {
    constructor() {
      this._count = 0;
      this._changePage = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .bkB();
      this._perPageSelect = [5, 10, 25, 50, 100];
    }
    /**
     *
     * @param changes
     */
    _processPageChange(changes) {
      if (changes['action'] === 'prepend') {
        this._source.setPage(1);
      }
      if (changes['action'] === 'append') {
        this._source.setPage(this.last);
      }
    }
    /**
     * Init pages
     */
    _initPages() {
      const pagesCount = this.last;
      let showPagesCount = 4;
      showPagesCount = pagesCount < showPagesCount ? pagesCount : showPagesCount;
      this._pages = [];
      if (this.isShouldShow) {
        let middleOne = Math.ceil(showPagesCount / 2);
        middleOne = this._page >= middleOne ? this._page : middleOne;
        let lastOne = middleOne + Math.floor(showPagesCount / 2);
        lastOne = lastOne >= pagesCount ? pagesCount : lastOne;
        const firstOne = lastOne - showPagesCount + 1;
        for (let i = firstOne; i <= lastOne; i++) {
          this._pages.push(i);
        }
      }
    }
    /**
     * On changes
     *
     * @param changes
     */
    ngOnChanges(changes) {
      if (changes.source) {
        if (!changes.source.firstChange) {
          this._dataChangedSub.unsubscribe();
        }
        this._dataChangedSub = this._source.onChanged().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__/* .tap */ .M)(dataChanges => {
          this._page = this._source.getPaging().page;
          this._perPage = this._source.getPaging().perPage;
          this._currentPerPage = this._perPage;
          this._count = this._source.count();
          if (this.isPageOutOfBounce) {
            this._source.setPage(--this._page);
          }
          this._processPageChange(dataChanges);
          this._initPages();
        }), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__/* .untilDestroyed */ .s)(this)).subscribe();
      }
    }
    get isShouldShow() {
      return this._source.count() > this._perPage;
    }
    paginate(page) {
      this._source.setPage(page);
      this._page = page;
      this.changePage.emit({
        page
      });
      return false;
    }
    next() {
      return this.paginate(this._page + 1);
    }
    prev() {
      return this.paginate(this._page - 1);
    }
    get last() {
      return Math.ceil(this._count / this._perPage);
    }
    get isPageOutOfBounce() {
      return this._page * this._perPage >= this._count + this._perPage && this._page > 1;
    }
    onChangePerPage(event) {
      this._currentPerPage = event;
      if (this._currentPerPage) {
        if (typeof this._currentPerPage === 'string' && this._currentPerPage.toLowerCase() === 'all') {
          this._source.getPaging().perPage = null;
        } else {
          this._source.getPaging().perPage = this._currentPerPage * 1;
          this._source.refresh();
        }
        this._initPages();
      }
    }
    get startCount() {
      return (this._page - 1) * this._perPage + 1;
    }
    get endCount() {
      const entriesEndPage = (this._page - 1) * this._perPage + this._perPage;
      if (entriesEndPage > this._count) {
        return this._count;
      }
      return entriesEndPage;
    }
    set source(value) {
      this._source = value;
    }
    get source() {
      return this._source;
    }
    set perPageSelect(values) {
      this._perPageSelect = values;
    }
    get perPageSelect() {
      return this._perPageSelect;
    }
    get currentPerPage() {
      return this._currentPerPage;
    }
    set currentPerPage(value) {
      this._currentPerPage = value;
    }
    get pages() {
      return this._pages;
    }
    set pages(value) {
      this._pages = value;
    }
    get page() {
      return this._page;
    }
    set page(value) {
      this._page = value;
    }
    get count() {
      return this._count;
    }
    set count(value) {
      this._count = value;
    }
    get perPage() {
      return this._perPage;
    }
    set perPage(value) {
      this._perPage = value;
    }
    get changePage() {
      return this._changePage;
    }
    ngOnDestroy() {}
    static {
      this.ɵfac = function PaginationV2Component_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || PaginationV2Component)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: PaginationV2Component,
        selectors: [["ngx-pagination"]],
        inputs: {
          source: "source",
          perPageSelect: "perPageSelect"
        },
        outputs: {
          changePage: "changePage"
        },
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵNgOnChangesFeature"] */ .OA$],
        decls: 1,
        vars: 1,
        consts: [["class", "d-flex justify-between align-items-center w-100", 4, "ngIf"], [1, "d-flex", "justify-between", "align-items-center", "w-100"], [1, "pagination", "mb-0"], [3, "click"], ["href", "#", "aria-label", "First"], ["aria-hidden", "true", 1, "icon"], ["status", "primary", "icon", "arrowhead-left-outline"], [1, "sr-only"], [3, "click", "ngClass"], ["href", "#", "aria-label", "Prev"], ["status", "primary", "icon", "arrow-ios-back-outline"], [3, "ngClass", 4, "ngFor", "ngForOf"], ["href", "#", "aria-label", "Next"], ["status", "primary", "icon", "arrow-ios-forward-outline"], ["href", "#", "aria-label", "Last"], ["status", "primary", "icon", "arrowhead-right-outline"], ["class", "d-flex justify-between align-items-center", 4, "ngIf"], [3, "ngClass"], [4, "ngIf"], [3, "click", 4, "ngIf"], [1, "d-flex", "justify-between", "align-items-center"], ["size", "small", 3, "selectedChange", "selected"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]],
        template: function PaginationV2Component_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(0, PaginationV2Component_nav_0_Template, 28, 8, "nav", 0);
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.isShouldShow);
          }
        },
        dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbIconComponent */ .tHu, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbSelectComponent */ .S81, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbOptionComponent */ .ZJ2, _angular_common__WEBPACK_IMPORTED_MODULE_4__/* .NgClass */ .YU, _angular_common__WEBPACK_IMPORTED_MODULE_4__/* .NgForOf */ .Sq, _angular_common__WEBPACK_IMPORTED_MODULE_4__/* .NgIf */ .bT, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__/* .TranslatePipe */ .D9],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   a[_ngcontent-%COMP%], \n[_nghost-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  margin: 3px;\n}\n[_nghost-%COMP%]   a[_ngcontent-%COMP%] {\n  pointer-events: none;\n  text-decoration: none;\n}\n[_nghost-%COMP%]   li[_ngcontent-%COMP%] {\n  cursor: pointer;\n  overflow: hidden;\n}\n[_nghost-%COMP%]   li.active[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  background-color: var(--background-basic-color-1);\n  border-radius: 50%;\n  font-weight: 600;\n  padding: 0 !important;\n  line-height: 0;\n  width: 2.75rem;\n  height: 2.75rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n[_nghost-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  background-color: transparent;\n  color: var(--text-basic-color);\n  padding: 0.75rem 1.1rem;\n  border: none;\n}\n[_nghost-%COMP%]   li[_ngcontent-%COMP%]   span.icon[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.75);\n  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.15);\n  border-radius: var(--button-rectangle-border-radius);\n  padding: 0.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n[_nghost-%COMP%]   .pagination[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  display: flex;\n  align-items: center;\n}\n[_nghost-%COMP%]     nb-select.shape-rectangle .select-button {\n  border-radius: calc(var(--button-rectangle-border-radius) / 1.625);\n  box-shadow: var(--gauzy-shadow);\n  height: 2rem;\n  display: flex;\n  align-items: center;\n  border: none;\n}\n[_nghost-%COMP%]     nb-select.appearance-outline.size-medium .select-button {\n  border: none;\n}\n[_nghost-%COMP%]     nb-select button span {\n  display: block;\n  overflow-x: hidden;\n  text-overflow: ellipsis;\n}\n\nnav[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}"]
      });
    }
  };
  PaginationV2Component = (0,tslib__WEBPACK_IMPORTED_MODULE_6__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__/* .UntilDestroy */ .d)({
    checkProperties: true
  }), (0,tslib__WEBPACK_IMPORTED_MODULE_6__/* .__metadata */ .Sn)("design:paramtypes", [])], PaginationV2Component);
  return PaginationV2Component;
})();


/***/ }),

/***/ 59238:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   j: () => (/* binding */ NoDataMessageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14572);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56383);
/* harmony import */ var _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(50631);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19223);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);






let NoDataMessageModule = /*#__PURE__*/(() => {
  class NoDataMessageModule {
    static {
      this.ɵfac = function NoDataMessageModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || NoDataMessageModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .$C({
        type: NoDataMessageModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .CommonModule */ .MD, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbCardModule */ .lVF, _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_3__/* .NbEvaIconsModule */ .N, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbIconModule */ .clu, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__/* .TranslateModule */ .h.forChild()]
      });
    }
  }
  return NoDataMessageModule;
})();

/***/ }),

/***/ 60176:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: () => (/* binding */ GauzyButtonActionModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14572);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56383);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19223);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(87466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);






let GauzyButtonActionModule = /*#__PURE__*/(() => {
  class GauzyButtonActionModule {
    static {
      this.ɵfac = function GauzyButtonActionModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || GauzyButtonActionModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .$C({
        type: GauzyButtonActionModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .CommonModule */ .MD, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbButtonModule */ .P5N, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbIconModule */ .clu, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__/* .TranslateModule */ .h.forChild(), _components_components_module__WEBPACK_IMPORTED_MODULE_4__/* .ComponentsModule */ .h]
      });
    }
  }
  return GauzyButtonActionModule;
})();

/***/ }),

/***/ 81073:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: () => (/* binding */ PaginationComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(55598);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4644);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4478);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39855);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(41598);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26024);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(56383);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(14572);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(19223);










const _c0 = a0 => ({
  disabled: a0
});
const _c1 = a0 => ({
  active: a0
});
function PaginationComponent_li_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function PaginationComponent_li_14_Template_li_click_0_listener() {
      const page_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r2.onChangePage(page_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(3, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(4, "(current)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
  }
  if (rf & 2) {
    const page_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction1"] */ .eq3(2, _c1, ctx_r2.activePage == page_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI("", page_r2, " ");
  }
}
let PaginationComponent = /*#__PURE__*/(() => {
  let PaginationComponent = class PaginationComponent {
    constructor() {
      /*
       * Getter & Setter for dynamic totalItems
       */
      this._totalItems = 1;
      /*
       * Getter & Setter for dynamic activePage
       */
      this._activePage = 1;
      /*
       * Getter & Setter for dynamic itemsPerPage
       */
      this._itemsPerPage = 5;
      /*
       * Getter & Setter for enable/disable emit EventEmitter
       */
      this._doEmit = true;
      this.subject$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__/* .Subject */ .B();
      this.selectedPage = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .bkB();
      this.selectedOption = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .bkB();
    }
    get totalItems() {
      return this._totalItems;
    }
    set totalItems(value) {
      this._totalItems = value;
    }
    get activePage() {
      return this._activePage;
    }
    set activePage(value) {
      this.subject$.next(value);
      this._activePage = value;
    }
    get itemsPerPage() {
      return this._itemsPerPage;
    }
    set itemsPerPage(value) {
      this.selectedOption.emit(value);
      this._itemsPerPage = value;
    }
    get doEmit() {
      return this._doEmit;
    }
    set doEmit(value) {
      this._doEmit = value;
    }
    ngOnInit() {
      this.subject$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .debounceTime */ .B)(200), (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_3__/* .distinctUntilChange */ .nI)(),
      // do not emit pagination on multiple click on same element,
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .tap */ .M)(() => this.selectedPage.emit(this.activePage))).subscribe();
      // Do not emit pagination on multiple click on same element
      if (this.doEmit) {
        this.subject$.next(this.activePage);
      }
    }
    /**
     * Generates an array of page numbers to be displayed in the pagination.
     * The number of displayed pages is adjustable based on the current active page.
     *
     * @returns An array of page numbers.
     */
    getPages() {
      const totalPages = this.getPagesCount(); // Total number of pages
      const displayCount = 5; // Number of pages to display
      const effectiveDisplayCount = Math.min(totalPages, displayCount); // Ensure we don't exceed total pages
      const middlePage = Math.ceil(effectiveDisplayCount / 2); // Calculate middle page position
      // Determine the last page to display
      let lastPage = this.activePage >= middlePage ? Math.min(this.activePage + Math.floor(effectiveDisplayCount / 2), totalPages) : effectiveDisplayCount;
      // Determine the first page to display
      const firstPage = Math.max(lastPage - effectiveDisplayCount + 1, 1); // Ensure first page is at least 1
      // Generate the array of page numbers
      return Array.from({
        length: lastPage - firstPage + 1
      }, (_, index) => firstPage + index);
    }
    /**
     * Calculates the starting index of the items on the current page.
     *
     * @returns The starting index of the items for the active page.
     */
    getStartPagesCount() {
      return (this.activePage - 1) * this.itemsPerPage + 1;
    }
    /**
     * Calculates the ending index of the items on the current page.
     *
     * @returns The ending index of the items for the active page, capped at the total number of items.
     */
    getEndPagesCount() {
      const entriesEndPage = (this.activePage - 1) * this.itemsPerPage + this.itemsPerPage;
      // Ensure the ending index does not exceed the total number of items
      return entriesEndPage > this.totalItems ? this.totalItems : entriesEndPage;
    }
    /**
     * Calculates the total number of pages based on the total items and items per page.
     *
     * @returns The total number of pages available.
     */
    getPagesCount() {
      return Math.ceil(this.totalItems / this.itemsPerPage);
    }
    /**
     * Updates the active page index when the user changes the page.
     *
     * @param pageIdx - The index of the page to switch to.
     */
    onChangePage(pageIdx) {
      this.activePage = pageIdx;
    }
    /**
     * Handles the action of clicking the next page button.
     * Increments the active page by 1, unless it is already the last page.
     */
    onNextPageClick() {
      // Increment activePage or set it to the last page if already at the end
      this.activePage = this.activePage >= this.getPagesCount() ? this.getPagesCount() : this.activePage + 1;
      // Emit the updated active page
      this.subject$.next(this.activePage);
    }
    /**
     * Handles the action of clicking the previous page button.
     * Decrements the active page by 1, unless it is already the first page.
     */
    onPrevPageClick() {
      // Prevent decrementing if already on the first page
      if (this.activePage === 1) return;
      // Decrement activePage
      this.activePage--;
      // Emit the updated active page
      this.subject$.next(this.activePage);
    }
    static {
      this.ɵfac = function PaginationComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || PaginationComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: PaginationComponent,
        selectors: [["ga-pagination"]],
        inputs: {
          totalItems: "totalItems",
          activePage: "activePage",
          itemsPerPage: "itemsPerPage",
          doEmit: "doEmit"
        },
        outputs: {
          selectedPage: "selectedPage",
          selectedOption: "selectedOption"
        },
        standalone: false,
        decls: 42,
        vars: 19,
        consts: [[1, "d-flex", "justify-between", "align-items-center", "w-100", "mt-3"], [1, "pagination", "mb-0"], [3, "click"], ["href", "#", "aria-label", "First"], ["aria-hidden", "true", 1, "icon"], ["status", "primary", "icon", "arrowhead-left-outline"], [1, "sr-only"], [3, "click", "ngClass"], ["href", "#", "aria-label", "Prev"], ["status", "primary", "icon", "arrow-ios-back-outline"], [3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["href", "#", "aria-label", "Next"], ["status", "primary", "icon", "arrow-ios-forward-outline"], ["href", "#", "aria-label", "Last"], ["status", "primary", "icon", "arrowhead-right-outline"], [1, "d-flex", "justify-between", "align-items-center"], ["size", "small", 3, "selectedChange", "selected"], [3, "value"]],
        template: function PaginationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nav", 0)(1, "ul", 1)(2, "li", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function PaginationComponent_Template_li_click_2_listener() {
              return ctx.onChangePage(1);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(3, "a", 3)(4, "span", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(5, "nb-icon", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(6, "span", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(7, "First");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(8, "li", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function PaginationComponent_Template_li_click_8_listener() {
              return ctx.onPrevPageClick();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(9, "a", 8)(10, "span", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(11, "nb-icon", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(12, "span", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(13, "Prev");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(14, PaginationComponent_li_14_Template, 5, 4, "li", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(15, "li", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function PaginationComponent_Template_li_click_15_listener() {
              return ctx.onNextPageClick();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(16, "a", 11)(17, "span", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(18, "nb-icon", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(19, "span", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(20, "Next");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(21, "li", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function PaginationComponent_Template_li_click_21_listener() {
              return ctx.onChangePage(ctx.getPagesCount());
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(22, "a", 13)(23, "span", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(24, "nb-icon", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(25, "span", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(26, "Last");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(27, "div", 15)(28, "nb-select", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayListener"] */ .mxI("selectedChange", function PaginationComponent_Template_nb_select_selectedChange_28_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayBindingSet"] */ .DH7(ctx.itemsPerPage, $event) || (ctx.itemsPerPage = $event);
              return $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(29, "nb-option", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(30, "5");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(31, "nb-option", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(32, "10");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(33, "nb-option", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(34, "25");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(35, "nb-option", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(36, "50");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(37, "nb-option", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(38, "100");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(39, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(40);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(41, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction1"] */ .eq3(15, _c0, ctx.activePage == 1));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx.getPages());
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction1"] */ .eq3(17, _c0, ctx.activePage == ctx.getPages().length));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayProperty"] */ .R50("selected", ctx.itemsPerPage);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("value", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("value", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("value", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("value", 50);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("value", 100);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate4"] */ .LHq(" ", ctx.getStartPagesCount(), " - ", ctx.getEndPagesCount(), " of ", ctx.totalItems, " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(41, 13, "PAGINATION.ITEMS"), " ");
          }
        },
        dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbIconComponent */ .tHu, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbSelectComponent */ .S81, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbOptionComponent */ .ZJ2, _angular_common__WEBPACK_IMPORTED_MODULE_6__/* .NgClass */ .YU, _angular_common__WEBPACK_IMPORTED_MODULE_6__/* .NgForOf */ .Sq, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__/* .TranslatePipe */ .D9],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   a[_ngcontent-%COMP%], \n[_nghost-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  margin: 3px;\n}\n[_nghost-%COMP%]   a[_ngcontent-%COMP%] {\n  pointer-events: none;\n  text-decoration: none;\n}\n[_nghost-%COMP%]   li[_ngcontent-%COMP%] {\n  cursor: pointer;\n  overflow: hidden;\n}\n[_nghost-%COMP%]   li.active[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  background-color: var(--background-basic-color-1);\n  border-radius: var(--button-rectangle-border-radius);\n}\n[_nghost-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  background-color: transparent;\n  color: var(--text-basic-color);\n  padding: 0.75rem 1.1rem;\n  border: none;\n}\n[_nghost-%COMP%]   li[_ngcontent-%COMP%]   span.icon[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.75);\n  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.15);\n  border-radius: var(--button-rectangle-border-radius);\n  padding: 0.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n[_nghost-%COMP%]   .pagination[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  display: flex;\n  align-items: center;\n}\n[_nghost-%COMP%]     nb-select.shape-rectangle .select-button {\n  border-radius: calc(var(--button-rectangle-border-radius) / 1.625);\n  box-shadow: var(--gauzy-shadow);\n  height: 2rem;\n  display: flex;\n  align-items: center;\n  border: none;\n}\n[_nghost-%COMP%]     nb-select.appearance-outline.size-medium .select-button {\n  border: none;\n}\n[_nghost-%COMP%]     nb-select button span {\n  display: block;\n  overflow-x: hidden;\n  text-overflow: ellipsis;\n}\n\nnav[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}"]
      });
    }
  };
  PaginationComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__/* .UntilDestroy */ .d)({
    checkProperties: true
  })], PaginationComponent);
  return PaginationComponent;
})();


/***/ }),

/***/ 98722:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* binding */ SmartDataViewLayoutModule)
/* harmony export */ });
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56383);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19223);
/* harmony import */ var angular2_smart_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(52345);
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(79475);
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(38834);
/* harmony import */ var _gauzy_button_action_gauzy_button_action_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(60176);
/* harmony import */ var _no_data_message_no_data_message_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(59238);
/* harmony import */ var _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81073);
/* harmony import */ var _pagination_pagination_v2_pagination_v2_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26860);












// Components
const COMPONENTS = [_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_0__/* .PaginationComponent */ .e, _pagination_pagination_v2_pagination_v2_component__WEBPACK_IMPORTED_MODULE_1__/* .PaginationV2Component */ .a];
let SmartDataViewLayoutModule = /*#__PURE__*/(() => {
  class SmartDataViewLayoutModule {
    static {
      this.ɵfac = function SmartDataViewLayoutModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || SmartDataViewLayoutModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineNgModule"] */ .$C({
        type: SmartDataViewLayoutModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbToggleModule */ .jVr, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbIconModule */ .clu, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbSelectModule */ .VcP, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__/* .TranslateModule */ .h.forChild(), ngx_permissions__WEBPACK_IMPORTED_MODULE_5__/* .NgxPermissionsModule */ .Ov.forChild(), angular2_smart_table__WEBPACK_IMPORTED_MODULE_6__/* .Angular2SmartTableModule */ .gQ, _shared_module__WEBPACK_IMPORTED_MODULE_7__/* .SharedModule */ .G, _gauzy_button_action_gauzy_button_action_module__WEBPACK_IMPORTED_MODULE_8__/* .GauzyButtonActionModule */ .N, _no_data_message_no_data_message_module__WEBPACK_IMPORTED_MODULE_9__/* .NoDataMessageModule */ .j, angular2_smart_table__WEBPACK_IMPORTED_MODULE_6__/* .Angular2SmartTableModule */ .gQ, _gauzy_button_action_gauzy_button_action_module__WEBPACK_IMPORTED_MODULE_8__/* .GauzyButtonActionModule */ .N, _no_data_message_no_data_message_module__WEBPACK_IMPORTED_MODULE_9__/* .NoDataMessageModule */ .j]
      });
    }
  }
  return SmartDataViewLayoutModule;
})();

/***/ })

}]);