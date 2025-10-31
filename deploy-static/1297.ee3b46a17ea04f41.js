"use strict";
(self["webpackChunkgauzy"] = self["webpackChunkgauzy"] || []).push([[1297],{

/***/ 7390:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O: () => (/* binding */ RecordsHistoryComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(55598);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4478);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39855);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(56383);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(19223);
/* harmony import */ var angular2_smart_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52345);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(41598);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(25997);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(34027);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(26024);
/* harmony import */ var _smart_data_layout_pagination_pagination_filter_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47108);
/* harmony import */ var _table_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(47825);
/* harmony import */ var _table_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(55129);
/* harmony import */ var _table_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(28005);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(14572);
/* harmony import */ var _smart_data_layout_pagination_pagination_v2_pagination_v2_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(3456);
















function RecordsHistoryComponent_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "ngx-pagination", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("source", ctx_r0.smartTableSource);
  }
}
let RecordsHistoryComponent = /*#__PURE__*/(() => {
  let RecordsHistoryComponent = class RecordsHistoryComponent extends _smart_data_layout_pagination_pagination_filter_base_component__WEBPACK_IMPORTED_MODULE_1__/* .PaginationFilterBaseComponent */ .t {
    constructor(translateService, dialogRef) {
      super(translateService);
      this.dialogRef = dialogRef;
      this.smartTableSource = new angular2_smart_table__WEBPACK_IMPORTED_MODULE_2__/* .LocalDataSource */ .h0();
      this._recordsHistory$ = this.subject$;
      this.smartTableSettings = {
        actions: false,
        selectedRowIndex: -1,
        editable: true,
        noDataMessage: this.getTranslation('SM_TABLE.NO_DATA.HISTORY_RECORD'),
        pager: {
          display: false,
          perPage: this.pagination ? this.pagination.itemsPerPage : this.minItemPerPage
        }
      };
    }
    ngOnInit() {
      this._recordsHistory$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .debounceTime */ .B)(300), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .tap */ .M)(() => this._populateSmartTable()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .untilDestroyed */ .s)(this)).subscribe();
      this.pagination$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .debounceTime */ .B)(100), (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_6__/* .distinctUntilChange */ .nI)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .tap */ .M)(() => this._recordsHistory$.next(true)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .untilDestroyed */ .s)(this)).subscribe();
      this._populateSmartTable();
      this.loadSettingsSmartTable();
      this._applyTranslationOnSmartTable();
    }
    _populateSmartTable() {
      this.loading = true;
      let viewModel;
      switch (this.type) {
        case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_7__/* .EmployeeStatisticsHistoryEnum */ .d.INCOME:
        case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_7__/* .EmployeeStatisticsHistoryEnum */ .d.BONUS_INCOME:
        case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_7__/* .EmployeeStatisticsHistoryEnum */ .d.NON_BONUS_INCOME:
          viewModel = this.records;
          this.translatedType = this.getTranslation('INCOME_PAGE.INCOME').toUpperCase();
          break;
        case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_7__/* .EmployeeStatisticsHistoryEnum */ .d.EXPENSES:
        case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_7__/* .EmployeeStatisticsHistoryEnum */ .d.EXPENSES_WITHOUT_SALARY:
          viewModel = this.records.map(({
            valueDate,
            vendorName,
            categoryName,
            amount,
            notes,
            isRecurring,
            source,
            splitExpense
          }) => {
            return {
              valueDate,
              vendorName,
              categoryName,
              amount,
              notes,
              recurring: isRecurring,
              source,
              splitExpense: splitExpense,
              originalValue: splitExpense ? splitExpense.originalValue : '',
              employeeCount: splitExpense ? splitExpense.employeeCount : ''
            };
          });
          this.translatedType = this.getTranslation('EXPENSES_PAGE.EXPENSES').toUpperCase();
          break;
      }
      const {
        activePage,
        itemsPerPage
      } = this.getPagination();
      this.smartTableSource.setPaging(activePage, itemsPerPage, false);
      this.smartTableSource.load(viewModel);
      this.setPagination({
        ...this.getPagination(),
        totalItems: this.smartTableSource.count()
      });
      this.loading = false;
    }
    loadSettingsSmartTable() {
      switch (this.type) {
        case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_7__/* .EmployeeStatisticsHistoryEnum */ .d.INCOME:
        case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_7__/* .EmployeeStatisticsHistoryEnum */ .d.BONUS_INCOME:
        case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_7__/* .EmployeeStatisticsHistoryEnum */ .d.NON_BONUS_INCOME:
          this.smartTableSettings = {
            ...this.smartTableSettings,
            columns: {
              valueDate: {
                title: this.getTranslation('SM_TABLE.DATE'),
                type: 'custom',
                width: '30%',
                isFilterable: false,
                renderComponent: _table_components__WEBPACK_IMPORTED_MODULE_8__/* .DateViewComponent */ .l,
                componentInitFunction: (instance, cell) => {
                  instance.rowData = cell.getRow().getData();
                  instance.value = cell.getValue();
                }
              },
              client: {
                title: this.getTranslation('SM_TABLE.CONTACT'),
                type: 'custom',
                renderComponent: _table_components__WEBPACK_IMPORTED_MODULE_9__/* .ContactLinksComponent */ .L,
                componentInitFunction: (instance, cell) => {
                  instance.rowData = cell.getRow().getData();
                  instance.value = cell.getRawValue();
                }
              },
              amount: {
                title: this.getTranslation('SM_TABLE.VALUE'),
                type: 'custom',
                width: '15%',
                isFilterable: false,
                renderComponent: _table_components__WEBPACK_IMPORTED_MODULE_10__/* .IncomeExpenseAmountComponent */ .j,
                componentInitFunction: (instance, cell) => {
                  instance.rowData = cell.getRow().getData();
                  instance.value = cell.getValue();
                }
              },
              notes: {
                title: this.getTranslation('SM_TABLE.NOTES'),
                type: 'string'
              }
            }
          };
          break;
        case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_7__/* .EmployeeStatisticsHistoryEnum */ .d.EXPENSES:
        case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_7__/* .EmployeeStatisticsHistoryEnum */ .d.EXPENSES_WITHOUT_SALARY:
          this.smartTableSettings = {
            ...this.smartTableSettings,
            columns: {
              source: {
                title: this.getTranslation('SM_TABLE.SOURCE'),
                type: 'html',
                class: 'text-center',
                isFilterable: false,
                width: '8%',
                valuePrepareFunction: _ => `<div class='text-center'>
								${_ === 'org' ? '<i class="fas fa-building"></i>' : '<i class="fas fa-user-alt"></i>'}
								</div>
								`
              },
              valueDate: {
                title: this.getTranslation('SM_TABLE.DATE'),
                type: 'custom',
                width: '20%',
                isFilterable: false,
                renderComponent: _table_components__WEBPACK_IMPORTED_MODULE_8__/* .DateViewComponent */ .l,
                componentInitFunction: (instance, cell) => {
                  instance.rowData = cell.getRow().getData();
                  instance.value = cell.getValue();
                }
              },
              vendorName: {
                title: this.getTranslation('SM_TABLE.VENDOR'),
                type: 'string'
              },
              categoryName: {
                title: this.getTranslation('SM_TABLE.CATEGORY'),
                type: 'html',
                isFilterable: false,
                valuePrepareFunction: _ => this.getCategoryName(_)
              },
              amount: {
                title: this.getTranslation('SM_TABLE.VALUE'),
                type: 'custom',
                width: '15%',
                renderComponent: _table_components__WEBPACK_IMPORTED_MODULE_10__/* .IncomeExpenseAmountComponent */ .j,
                componentInitFunction: (instance, cell) => {
                  instance.rowData = cell.getRow().getData();
                  instance.value = cell.getValue();
                }
              },
              notes: {
                title: this.getTranslation('SM_TABLE.NOTES'),
                type: 'string'
              }
            }
          };
          break;
      }
    }
    /**
     * Gets the translated category name if it is one of the default categories;
     * otherwise, returns the original category name.
     *
     * @param category - The category name to be translated.
     * @returns The translated category name or the original category name if not a default category.
     */
    getCategoryName(category) {
      const isDefaultCategory = category in _gauzy_contracts__WEBPACK_IMPORTED_MODULE_11__/* .RecurringExpenseDefaultCategoriesEnum */ ._y;
      return isDefaultCategory ? this.getTranslation(`EXPENSES_PAGE.DEFAULT_CATEGORY.${category}`) : category;
    }
    _applyTranslationOnSmartTable() {
      this.translateService.onLangChange.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .untilDestroyed */ .s)(this)).subscribe(() => {
        this.loadSettingsSmartTable();
        this._populateSmartTable();
      });
    }
    close() {
      this.dialogRef.close();
    }
    static {
      this.ɵfac = function RecordsHistoryComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || RecordsHistoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__/* .TranslateService */ .c$), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_nebular_theme__WEBPACK_IMPORTED_MODULE_13__/* .NbDialogRef */ .ybQ));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: RecordsHistoryComponent,
        selectors: [["ngx-records-history"]],
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
        decls: 12,
        vars: 7,
        consts: [["nbSpinnerStatus", "primary", "nbSpinnerSize", "large", 1, "records", 3, "nbSpinner"], [1, "cancel"], [1, "fas", "fa-times", "close", 3, "click"], [1, "title"], [1, "table-scroll-container"], [2, "cursor", "pointer", 3, "settings", "source"], [1, "pagination-container"], [4, "ngIf"], [3, "source"]],
        template: function RecordsHistoryComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-card", 0)(1, "nb-card-header")(2, "span", 1)(3, "i", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function RecordsHistoryComponent_Template_i_click_3_listener() {
              return ctx.close();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(4, "h5", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(6, "titlecase");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(7, "nb-card-body")(8, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(9, "angular2-smart-table", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(10, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(11, RecordsHistoryComponent_ng_container_11_Template, 2, 1, "ng-container", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("nbSpinner", ctx.loading);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(6, 5, ctx.translatedType));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("settings", ctx.smartTableSettings)("source", ctx.smartTableSource);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.smartTableSource);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_14__/* .NgIf */ .bT, _nebular_theme__WEBPACK_IMPORTED_MODULE_13__/* .NbSpinnerDirective */ .zwc, _nebular_theme__WEBPACK_IMPORTED_MODULE_13__/* .NbCardComponent */ .SrT, _nebular_theme__WEBPACK_IMPORTED_MODULE_13__/* .NbCardBodyComponent */ .KH5, _nebular_theme__WEBPACK_IMPORTED_MODULE_13__/* .NbCardHeaderComponent */ .zJv, angular2_smart_table__WEBPACK_IMPORTED_MODULE_2__/* .Angular2SmartTableComponent */ .T9, _smart_data_layout_pagination_pagination_v2_pagination_v2_component__WEBPACK_IMPORTED_MODULE_15__/* .PaginationV2Component */ .a, _angular_common__WEBPACK_IMPORTED_MODULE_14__/* .TitleCasePipe */ .PV],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.action[_ngcontent-%COMP%] {\n  box-shadow: var(--gauzy-shadow);\n  border: none;\n}\n.action[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}\n.action.info[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: var(--color-info-default);\n  color: white;\n  border-color: var(--color-info-default);\n}\n.action.info-text-1[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  color: var(--color-info-default);\n}\n.action.secondary[_ngcontent-%COMP%] {\n  color: #7e7e8f;\n}\n.action.success[_ngcontent-%COMP%] {\n  color: var(--color-success-default);\n}\n.action.warning[_ngcontent-%COMP%] {\n  color: rgb(245, 109, 88);\n}\n.action.orange[_ngcontent-%COMP%] {\n  color: rgb(255, 171, 45);\n}\n.action.primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n}\n.action.primary.soft[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: rgba(110, 73, 232, 0.1);\n}\n.action.select-nb[_ngcontent-%COMP%]     {\n  box-shadow: none;\n}\n.action.select-nb[_ngcontent-%COMP%]     .select-button {\n  box-shadow: var(--gauzy-shadow);\n  background: rgb(245, 245, 245);\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n.actions[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-2);\n  border-radius: var(--button-rectangle-border-radius);\n  padding: 2px 4px !important;\n}\n\n.gauzy-button-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n.card-custom-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n[_nghost-%COMP%]     input {\n  border-radius: var(--border-radius);\n  box-shadow: var(--gauzy-shadow) inset;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   i[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n}\n[dir=ltr]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n[dir=rtl]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--gauzy-text-color-1);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(245, 109, 88, 0.3);\n  border-width: 2px;\n  color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(245, 109, 88, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 16px;\n  letter-spacing: 0em;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(126, 126, 143, 0.3);\n  border-width: 2px;\n  color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(126, 126, 143, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(37, 184, 105, 0.3);\n  border-width: 2px;\n  color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(37, 184, 105, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[disabled][_ngcontent-%COMP%], \n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic.btn-disabled[_ngcontent-%COMP%] {\n  background-color: var(--button-outline-basic-disabled-background-color);\n  border-color: var(--button-outline-basic-disabled-border-color);\n  color: var(--button-outline-basic-disabled-text-color);\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].primary.appearance-filled.status-primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  border: unset;\n  background-color: var(--color-primary-transparent-default);\n  box-shadow: var(--gauzy-shadow) 0, 0, 0, 0.15;\n}\n[dir=ltr]   [_nghost-%COMP%]     input, \n[dir=ltr]   [_nghost-%COMP%]     textarea {\n  text-align: start;\n}\n[dir=rtl]   [_nghost-%COMP%]     input, \n[dir=rtl]   [_nghost-%COMP%]     textarea {\n  text-align: end;\n}\n[_nghost-%COMP%]     input, \n[_nghost-%COMP%]     nb-select.appearance-outline.status-basic .select-button, \n[_nghost-%COMP%]     .ng-select .ng-select-container {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n  height: 42px !important;\n}\n[_nghost-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder, \n[_nghost-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {\n  top: unset !important;\n}\n[_nghost-%COMP%]     label, \n[_nghost-%COMP%]     .label {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  color: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]     textarea {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n}\n[_nghost-%COMP%]     .ng-select .ng-select-container input, \n[_nghost-%COMP%]     nb-tag-list input {\n  background-color: unset !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  border-radius: var(--border-radius);\n  margin-bottom: 0;\n}\n[_nghost-%COMP%]   nb-card.records[_ngcontent-%COMP%] {\n  width: 645px;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  overflow: unset;\n  background-color: var(--gauzy-card-2);\n  padding: 1rem 11px;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]     input, \n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]     nb-select.appearance-outline.status-basic .select-button, \n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]     .ng-select .ng-select-container {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n  height: 2rem !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder, \n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {\n  top: unset !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]     label, \n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]     .label {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  color: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]     textarea {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]     .ng-select .ng-select-container input, \n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]     nb-tag-list input {\n  background-color: unset !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .table-scroll-container[_ngcontent-%COMP%] {\n  padding: 0 11px;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 18px;\n}"]
      });
    }
  };
  RecordsHistoryComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_16__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .UntilDestroy */ .d)({
    checkProperties: true
  }), (0,tslib__WEBPACK_IMPORTED_MODULE_16__/* .__metadata */ .Sn)("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__/* .TranslateService */ .c$, _nebular_theme__WEBPACK_IMPORTED_MODULE_13__/* .NbDialogRef */ .ybQ])], RecordsHistoryComponent);
  return RecordsHistoryComponent;
})();


/***/ }),

/***/ 7991:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   n: () => (/* binding */ WindowModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14572);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56383);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19223);
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(38834);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);






let WindowModule = /*#__PURE__*/(() => {
  class WindowModule {
    static {
      this.ɵfac = function WindowModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || WindowModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .$C({
        type: WindowModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .CommonModule */ .MD, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbButtonModule */ .P5N, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbIconModule */ .clu, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbPopoverModule */ .Ofb, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__/* .TranslateModule */ .h.forChild(), _shared_module__WEBPACK_IMPORTED_MODULE_4__/* .SharedModule */ .G]
      });
    }
  }
  return WindowModule;
})();

/***/ }),

/***/ 14096:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   s: () => (/* binding */ WindowService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(55598);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(41598);
/* harmony import */ var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4644);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39855);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(52738);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(71924);
/* harmony import */ var _concretes_contexts_layout_persistance_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50168);
/* harmony import */ var _concretes_contexts_persistance_takers_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(66126);
/* harmony import */ var _concretes_strategies_local_storage_strategy_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31328);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(26860);











let WindowService = /*#__PURE__*/(() => {
  let WindowService = class WindowService {
    constructor(store) {
      this.store = store;
      this._windowsRef = [];
      this._windows = [];
      this._windowLayoutPersistance = new _concretes_contexts_layout_persistance_class__WEBPACK_IMPORTED_MODULE_0__/* .LayoutPersistance */ .Y();
      this._localStorage = new _concretes_strategies_local_storage_strategy_class__WEBPACK_IMPORTED_MODULE_1__/* .LocalStorageStrategy */ .G();
      this._windowsTakers = new _concretes_contexts_persistance_takers_class__WEBPACK_IMPORTED_MODULE_2__/* .PersistanceTakers */ .u(this._windowLayoutPersistance);
      this._windows$ = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_3__/* .Subject */ .B();
      this._windows$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .tap */ .M)(windows => this.windows = windows), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .tap */ .M)(() => this._windowLayoutPersistance.state = this.windows), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .filter */ .p)(() => this.windowsRef.length === 0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .tap */ .M)(() => {
        this.retrieve().length === 0 ? this.save() : this.retrieve().forEach(deserialized => this.windowsRef.push(deserialized.templateRef));
      }), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__/* .untilDestroyed */ .s)(this)).subscribe();
    }
    get windowsRef() {
      return this._windowsRef;
    }
    set windowsRef(value) {
      this._windowsRef = value;
      this.sorting();
    }
    sorting() {
      const buffers = [];
      this.windowsRef.forEach(windowsRef => {
        this.windows.forEach(window => {
          if (windowsRef === window.templateRef) {
            buffers.push(window);
          }
        });
      });
      this.windows = buffers;
    }
    get windows() {
      return this._windows;
    }
    set windows(value) {
      this._windows = value;
    }
    save() {
      if (this.windows.length === 0) return;
      this._windowsTakers.backup();
      this._strategy = this._localStorage;
      this._strategy.serializables = this.windows;
      this.store.windows = this._strategy.serialize();
    }
    retrieve() {
      this._strategy = this._localStorage;
      this._strategy.serializables = this.windows;
      return this._strategy.deSerialize(this.store.windows);
    }
    undoDrag() {
      this._windowsTakers.undo();
      this.windows = this._windowLayoutPersistance.state;
      this.sortingReverse();
      this._strategy = this._localStorage;
      this._strategy.serializables = this.windows;
      this.store.windows = this._strategy.serialize();
    }
    sortingReverse() {
      const buffers = [];
      this.windows.forEach(windows => {
        this.windowsRef.forEach(windowsRef => {
          if (windowsRef === windows.templateRef) {
            buffers.push(windowsRef);
          }
        });
      });
      this.windowsRef = buffers;
    }
    set windows$(value) {
      this._windows$.next(value);
    }
    updateWindow(value) {
      this.windows.forEach(window => {
        if (window.templateRef === value.templateRef) {
          value.hide = window.hide;
          value.isCollapse = window.isCollapse;
          value.isExpand = window.isExpand;
        }
      });
    }
    hideWindow(position) {
      this.windows.forEach(widget => {
        if (widget.position === position) {
          widget.hide = true;
        }
      });
    }
    ngOnDestroy() {}
    static {
      this.ɵfac = function WindowService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || WindowService)(_angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵinject"] */ .KVO(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_8__/* .Store */ .il));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵdefineInjectable"] */ .jDH({
        token: WindowService,
        factory: WindowService.ɵfac,
        providedIn: 'root'
      });
    }
  };
  WindowService = (0,tslib__WEBPACK_IMPORTED_MODULE_9__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__/* .UntilDestroy */ .d)({
    checkProperties: true
  }), (0,tslib__WEBPACK_IMPORTED_MODULE_9__/* .__metadata */ .Sn)("design:paramtypes", [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_8__/* .Store */ .il])], WindowService);
  return WindowService;
})();


/***/ }),

/***/ 16724:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   s: () => (/* binding */ GuiDrag)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);


let GuiDrag = /*#__PURE__*/(() => {
  class GuiDrag {
    constructor() {
      this._collapsed = false;
      this._move = false;
      this._hide = false;
      this._positions = [];
    }
    onClickSetting(event) {}
    set templateRef(value) {
      this._templateRef = value;
    }
    get templateRef() {
      return this._templateRef;
    }
    set title(value) {
      this._title = value;
    }
    get title() {
      return this._title;
    }
    get position() {
      return this._position;
    }
    set position(value) {
      if (this._positions.length === 0) this._positions.push(value);
      this._position = this._positions[0];
    }
    get isExpand() {
      return !this._collapsed;
    }
    set isExpand(value) {
      this._collapsed = !value;
    }
    get isCollapse() {
      return this._collapsed;
    }
    set isCollapse(value) {
      this._collapsed = value;
    }
    get move() {
      return this._move;
    }
    set move(value) {
      this._move = value;
    }
    get hide() {
      return this._hide;
    }
    set hide(value) {
      this._hide = value;
    }
    toObject() {
      return {
        position: this.position,
        isCollapse: this.isCollapse,
        isExpand: this.isExpand,
        hide: this.hide,
        title: this.title
      };
    }
    static {
      this.ɵfac = function GuiDrag_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || GuiDrag)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: GuiDrag,
        selectors: [["ng-component"]],
        inputs: {
          templateRef: "templateRef",
          position: "position",
          isExpand: "isExpand",
          isCollapse: "isCollapse"
        },
        standalone: false,
        decls: 0,
        vars: 0,
        template: function GuiDrag_Template(rf, ctx) {},
        encapsulation: 2
      });
    }
  }
  return GuiDrag;
})();

/***/ }),

/***/ 21949:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   t: () => (/* binding */ ProfitHistoryModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14572);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56383);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19223);
/* harmony import */ var _smart_data_layout_smart_data_view_layout_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(98722);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);






let ProfitHistoryModule = /*#__PURE__*/(() => {
  class ProfitHistoryModule {
    static {
      this.ɵfac = function ProfitHistoryModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || ProfitHistoryModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .$C({
        type: ProfitHistoryModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .CommonModule */ .MD, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbIconModule */ .clu, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbCardModule */ .lVF, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbSpinnerModule */ .gYs, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__/* .TranslateModule */ .h.forChild(), _smart_data_layout_smart_data_view_layout_module__WEBPACK_IMPORTED_MODULE_4__/* .SmartDataViewLayoutModule */ .H]
      });
    }
  }
  return ProfitHistoryModule;
})();

/***/ }),

/***/ 22345:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: () => (/* binding */ Persistance)
/* harmony export */ });
class Persistance {
  constructor(state) {
    this._state = state;
  }
  get state() {
    return this._state;
  }
}

/***/ }),

/***/ 25997:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   d: () => (/* binding */ EmployeeStatisticsHistoryEnum)
/* harmony export */ });
var EmployeeStatisticsHistoryEnum = /*#__PURE__*/function (EmployeeStatisticsHistoryEnum) {
  EmployeeStatisticsHistoryEnum["INCOME"] = "INCOME";
  EmployeeStatisticsHistoryEnum["EXPENSES"] = "EXPENSES";
  EmployeeStatisticsHistoryEnum["EXPENSES_WITHOUT_SALARY"] = "EXPENSES_WITHOUT_SALARY";
  EmployeeStatisticsHistoryEnum["NON_BONUS_INCOME"] = "NON_BONUS_INCOME";
  EmployeeStatisticsHistoryEnum["BONUS_INCOME"] = "BONUS_INCOME";
  EmployeeStatisticsHistoryEnum["PROFIT"] = "PROFIT";
  return EmployeeStatisticsHistoryEnum;
}(EmployeeStatisticsHistoryEnum || {});

/***/ }),

/***/ 26769:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   X: () => (/* binding */ RecordsHistoryModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14572);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56383);
/* harmony import */ var _smart_data_layout_smart_data_view_layout_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(98722);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);




let RecordsHistoryModule = /*#__PURE__*/(() => {
  class RecordsHistoryModule {
    static {
      this.ɵfac = function RecordsHistoryModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || RecordsHistoryModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .$C({
        type: RecordsHistoryModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .CommonModule */ .MD, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbIconModule */ .clu, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbSpinnerModule */ .gYs, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbCardModule */ .lVF, _smart_data_layout_smart_data_view_layout_module__WEBPACK_IMPORTED_MODULE_3__/* .SmartDataViewLayoutModule */ .H]
      });
    }
  }
  return RecordsHistoryModule;
})();

/***/ }),

/***/ 31328:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G: () => (/* binding */ LocalStorageStrategy)
/* harmony export */ });
class LocalStorageStrategy {
  constructor() {}
  deSerialize(store, values) {
    return store ? store.flatMap(serialized => {
      return this.serializables.map(draggableObject => {
        if (draggableObject.position === serialized.position) {
          draggableObject.isCollapse = serialized.isCollapse;
          draggableObject.isExpand = serialized.isExpand;
          draggableObject.title = serialized.title;
          draggableObject.hide = serialized.hide;
          return draggableObject;
        }
      });
    }).filter(deserialized => deserialized) : [];
  }
  serialize() {
    return this.serializables.map(restored => restored.toObject());
  }
  /**
   * Get all serializables
   */
  get serializables() {
    return this._serializables;
  }
  /**
   * Set all serializables
   */
  set serializables(value) {
    this._serializables = value;
  }
}

/***/ }),

/***/ 36376:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ WidgetService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(55598);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(41598);
/* harmony import */ var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4644);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39855);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(52738);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(71924);
/* harmony import */ var _concretes_contexts_layout_persistance_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50168);
/* harmony import */ var _concretes_contexts_persistance_takers_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(66126);
/* harmony import */ var _concretes_strategies_local_storage_strategy_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31328);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(26860);











let WidgetService = /*#__PURE__*/(() => {
  let WidgetService = class WidgetService {
    constructor(store) {
      this.store = store;
      this._widgetsRef = [];
      this._widgets = [];
      this._widgetLayoutPersistance = new _concretes_contexts_layout_persistance_class__WEBPACK_IMPORTED_MODULE_0__/* .LayoutPersistance */ .Y();
      this._localStorage = new _concretes_strategies_local_storage_strategy_class__WEBPACK_IMPORTED_MODULE_1__/* .LocalStorageStrategy */ .G();
      this._widgetsTakers = new _concretes_contexts_persistance_takers_class__WEBPACK_IMPORTED_MODULE_2__/* .PersistanceTakers */ .u(this._widgetLayoutPersistance);
      this._widgets$ = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_3__/* .Subject */ .B();
      this._widgets$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .tap */ .M)(widgets => this.widgets = widgets), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .tap */ .M)(() => this._widgetLayoutPersistance.state = this.widgets), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .filter */ .p)(() => this.widgetsRef.length === 0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .tap */ .M)(() => {
        this.retrieve().length === 0 ? this.save() : this.retrieve().forEach(deserialized => this.widgetsRef.push(deserialized.templateRef));
      }), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__/* .untilDestroyed */ .s)(this)).subscribe();
    }
    get widgetsRef() {
      return this._widgetsRef;
    }
    set widgetsRef(value) {
      this._widgetsRef = value;
      this.sorting();
    }
    sorting() {
      const buffers = [];
      this.widgetsRef.forEach(widgetRef => {
        this.widgets.forEach(widget => {
          if (widgetRef === widget.templateRef) {
            buffers.push(widget);
          }
        });
      });
      this.widgets = buffers;
    }
    sortingReverse() {
      const buffers = [];
      this.widgets.forEach(widget => {
        this.widgetsRef.forEach(widgetRef => {
          if (widgetRef === widget.templateRef) {
            buffers.push(widgetRef);
          }
        });
      });
      this.widgetsRef = buffers;
    }
    get widgets() {
      return this._widgets;
    }
    set widgets(value) {
      this._widgets = value;
    }
    save() {
      if (this.widgets.length === 0) return;
      this._widgetsTakers.backup();
      this._strategy = this._localStorage;
      this._strategy.serializables = this.widgets;
      this.store.widgets = this._strategy.serialize();
    }
    retrieve() {
      this._strategy = this._localStorage;
      this._strategy.serializables = this.widgets;
      return this._strategy.deSerialize(this.store.widgets);
    }
    undoDrag() {
      this._widgetsTakers.undo();
      this.widgets = this._widgetLayoutPersistance.state;
      this.sortingReverse();
      this._strategy = this._localStorage;
      this._strategy.serializables = this.widgets;
      this.store.widgets = this._strategy.serialize();
    }
    set widgets$(value) {
      this._widgets$.next(value);
    }
    updateWidget(value) {
      this.widgets.forEach(widget => {
        if (widget.templateRef === value.templateRef) {
          value.hide = widget.hide;
          value.isCollapse = widget.isCollapse;
          value.isExpand = widget.isExpand;
        }
      });
    }
    hideWidget(position) {
      this.widgets.forEach(widget => {
        if (widget.position === position) {
          widget.hide = true;
        }
      });
    }
    ngOnDestroy() {}
    static {
      this.ɵfac = function WidgetService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || WidgetService)(_angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵinject"] */ .KVO(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_8__/* .Store */ .il));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵdefineInjectable"] */ .jDH({
        token: WidgetService,
        factory: WidgetService.ɵfac,
        providedIn: 'root'
      });
    }
  };
  WidgetService = (0,tslib__WEBPACK_IMPORTED_MODULE_9__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__/* .UntilDestroy */ .d)({
    checkProperties: true
  }), (0,tslib__WEBPACK_IMPORTED_MODULE_9__/* .__metadata */ .Sn)("design:paramtypes", [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_8__/* .Store */ .il])], WidgetService);
  return WidgetService;
})();


/***/ }),

/***/ 39536:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ SingleStatisticModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14572);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);


let SingleStatisticModule = /*#__PURE__*/(() => {
  class SingleStatisticModule {
    static {
      this.ɵfac = function SingleStatisticModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || SingleStatisticModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .$C({
        type: SingleStatisticModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .CommonModule */ .MD]
      });
    }
  }
  return SingleStatisticModule;
})();

/***/ }),

/***/ 41674:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   m: () => (/* binding */ ProfitHistoryComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(55598);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52738);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39855);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4478);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(41598);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(19223);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(56383);
/* harmony import */ var angular2_smart_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52345);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(26024);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(71924);
/* harmony import */ var _smart_data_layout_pagination_pagination_filter_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47108);
/* harmony import */ var _table_components_expense_table_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(68192);
/* harmony import */ var _table_components_income_table_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(45793);
/* harmony import */ var _table_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(47825);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(14572);
/* harmony import */ var _smart_data_layout_pagination_pagination_v2_pagination_v2_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(3456);



















function ProfitHistoryComponent_ng_container_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "ngx-pagination", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("source", ctx_r0.smartTableSource);
  }
}
let ProfitHistoryComponent = /*#__PURE__*/(() => {
  let ProfitHistoryComponent = class ProfitHistoryComponent extends _smart_data_layout_pagination_pagination_filter_base_component__WEBPACK_IMPORTED_MODULE_1__/* .PaginationFilterBaseComponent */ .t {
    constructor(store, translateService, dialogRef) {
      super(translateService);
      this.store = store;
      this.translateService = translateService;
      this.dialogRef = dialogRef;
      this.smartTableSource = new angular2_smart_table__WEBPACK_IMPORTED_MODULE_2__/* .LocalDataSource */ .h0();
      this.loading = false;
      this._profitHistory$ = this.subject$;
    }
    ngOnInit() {
      this.store.selectedOrganization$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .filter */ .p)(organization => !!organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .tap */ .M)(organization => this.organization = organization), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .untilDestroyed */ .s)(this)).subscribe();
      this._profitHistory$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .debounceTime */ .B)(300), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .tap */ .M)(() => this._populateSmartTable()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .untilDestroyed */ .s)(this)).subscribe();
      this.pagination$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .debounceTime */ .B)(100), (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_7__/* .distinctUntilChange */ .nI)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .tap */ .M)(() => this._profitHistory$.next(true)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .untilDestroyed */ .s)(this)).subscribe();
      this.loadSettingsSmartTable();
      this._populateSmartTable();
    }
    ngAfterViewInit() {}
    _populateSmartTable() {
      this.loading = true;
      const {
        activePage,
        itemsPerPage
      } = this.getPagination();
      const incomeList = this.records.incomes.map(inc => {
        return {
          income: inc.amount,
          expense: 0,
          valueDate: inc.valueDate,
          notes: inc.notes
        };
      });
      const expenseList = this.records.expenses.map(exp => {
        return {
          expense: Math.abs(exp.amount),
          income: 0,
          valueDate: exp.valueDate,
          notes: exp.notes
        };
      });
      const combinedTableData = [...incomeList, ...expenseList];
      this.smartTableSource.setPaging(activePage, itemsPerPage, false);
      this.smartTableSource.load(combinedTableData);
      this.setPagination({
        ...this.getPagination(),
        totalItems: this.smartTableSource.count()
      });
      this.loading = false;
    }
    /**
     *
     */
    loadSettingsSmartTable() {
      this.smartTableSettings = {
        pager: {
          display: false,
          perPage: this.pagination ? this.pagination.itemsPerPage : this.minItemPerPage
        },
        actions: false,
        mode: 'external',
        selectedRowIndex: -1,
        editable: true,
        noDataMessage: this.getTranslation('SM_TABLE.NO_DATA.PROFIT_HISTORY'),
        columns: {
          valueDate: {
            title: this.getTranslation('DASHBOARD_PAGE.PROFIT_HISTORY.DATE'),
            type: 'custom',
            width: '25%',
            sortDirection: 'desc',
            isFilterable: false,
            renderComponent: _table_components__WEBPACK_IMPORTED_MODULE_8__/* .DateViewComponent */ .l,
            componentInitFunction: (instance, cell) => {
              instance.rowData = cell.getRow().getData();
              instance.value = cell.getValue();
            }
          },
          expense: {
            title: this.getTranslation('DASHBOARD_PAGE.PROFIT_HISTORY.EXPENSES'),
            type: 'custom',
            renderComponent: _table_components_expense_table_component__WEBPACK_IMPORTED_MODULE_9__/* .ExpenseTableComponent */ .G,
            componentInitFunction: (instance, cell) => {
              instance.rowData = cell.getRow().getData();
              instance.value = cell.getValue();
            }
          },
          income: {
            title: this.getTranslation('DASHBOARD_PAGE.PROFIT_HISTORY.INCOME'),
            type: 'custom',
            renderComponent: _table_components_income_table_component__WEBPACK_IMPORTED_MODULE_10__/* .IncomeTableComponent */ .r,
            componentInitFunction: (instance, cell) => {
              instance.rowData = cell.getRow().getData();
              instance.value = cell.getValue();
            }
          },
          notes: {
            title: this.getTranslation('DASHBOARD_PAGE.PROFIT_HISTORY.DESCRIPTION'),
            type: 'string'
          }
        }
      };
    }
    close() {
      this.dialogRef.close();
    }
    static {
      this.ɵfac = function ProfitHistoryComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || ProfitHistoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_11__/* .Store */ .il), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__/* .TranslateService */ .c$), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_nebular_theme__WEBPACK_IMPORTED_MODULE_13__/* .NbDialogRef */ .ybQ));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: ProfitHistoryComponent,
        selectors: [["ga-profit-history-selector"]],
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
        decls: 34,
        vars: 22,
        consts: [["nbSpinnerStatus", "primary", "nbSpinnerSize", "large", 1, "profit-history", 3, "nbSpinner"], [1, "cancel"], [1, "fas", "fa-times", 3, "click"], [1, "title", "mb-3"], [1, "totals"], [1, "mx-auto", "p-2"], [1, "mx-auto", "pb-2"], [1, "table-scroll-container"], [1, "table", 3, "settings", "source"], [1, "pagination-container"], [4, "ngIf"], [3, "source"]],
        template: function ProfitHistoryComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-card", 0)(1, "nb-card-header")(2, "span", 1)(3, "i", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function ProfitHistoryComponent_Template_i_click_3_listener() {
              return ctx.close();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(4, "h5", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(6, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(7, "div", 4)(8, "nb-card")(9, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(11, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(12, "div", 6)(13, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(15, "nb-card")(16, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(18, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(19, "div", 6)(20, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(22, "nb-card")(23, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(25, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(26, "div", 6)(27, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(29, "nb-card-body")(30, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(31, "angular2-smart-table", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(32, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(33, ProfitHistoryComponent_ng_container_33_Template, 2, 1, "ng-container", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("nbSpinner", ctx.loading);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(6, 14, "DASHBOARD_PAGE.PROFIT_HISTORY.PROFIT_REPORT"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(11, 16, "DASHBOARD_PAGE.PROFIT_HISTORY.TOTAL_EXPENSES"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate2"] */ .Lme("", ctx.records == null ? null : ctx.records.expenseTotal, " ", ctx.organization == null ? null : ctx.organization.currency, "");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(18, 18, "DASHBOARD_PAGE.PROFIT_HISTORY.TOTAL_INCOME"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate2"] */ .Lme("", ctx.records == null ? null : ctx.records.incomeTotal, " ", ctx.organization == null ? null : ctx.organization.currency, "");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(25, 20, "DASHBOARD_PAGE.PROFIT_HISTORY.TOTAL_PROFIT"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate2"] */ .Lme("", ctx.records == null ? null : ctx.records.profit, " ", ctx.organization == null ? null : ctx.organization.currency, "");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("settings", ctx.smartTableSettings)("source", ctx.smartTableSource);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.smartTableSource);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_14__/* .NgIf */ .bT, _nebular_theme__WEBPACK_IMPORTED_MODULE_13__/* .NbCardComponent */ .SrT, _nebular_theme__WEBPACK_IMPORTED_MODULE_13__/* .NbCardBodyComponent */ .KH5, _nebular_theme__WEBPACK_IMPORTED_MODULE_13__/* .NbCardHeaderComponent */ .zJv, _nebular_theme__WEBPACK_IMPORTED_MODULE_13__/* .NbSpinnerDirective */ .zwc, angular2_smart_table__WEBPACK_IMPORTED_MODULE_2__/* .Angular2SmartTableComponent */ .T9, _smart_data_layout_pagination_pagination_v2_pagination_v2_component__WEBPACK_IMPORTED_MODULE_15__/* .PaginationV2Component */ .a, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__/* .TranslatePipe */ .D9],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.action[_ngcontent-%COMP%] {\n  box-shadow: var(--gauzy-shadow);\n  border: none;\n}\n.action[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}\n.action.info[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: var(--color-info-default);\n  color: white;\n  border-color: var(--color-info-default);\n}\n.action.info-text-1[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  color: var(--color-info-default);\n}\n.action.secondary[_ngcontent-%COMP%] {\n  color: #7e7e8f;\n}\n.action.success[_ngcontent-%COMP%] {\n  color: var(--color-success-default);\n}\n.action.warning[_ngcontent-%COMP%] {\n  color: rgb(245, 109, 88);\n}\n.action.orange[_ngcontent-%COMP%] {\n  color: rgb(255, 171, 45);\n}\n.action.primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n}\n.action.primary.soft[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: rgba(110, 73, 232, 0.1);\n}\n.action.select-nb[_ngcontent-%COMP%]     {\n  box-shadow: none;\n}\n.action.select-nb[_ngcontent-%COMP%]     .select-button {\n  box-shadow: var(--gauzy-shadow);\n  background: rgb(245, 245, 245);\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n.actions[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-2);\n  border-radius: var(--button-rectangle-border-radius);\n  padding: 2px 4px !important;\n}\n\n.gauzy-button-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n.card-custom-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n[_nghost-%COMP%]     input {\n  border-radius: var(--border-radius);\n  box-shadow: var(--gauzy-shadow) inset;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   i[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n}\n[dir=ltr]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n[dir=rtl]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--gauzy-text-color-1);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(245, 109, 88, 0.3);\n  border-width: 2px;\n  color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(245, 109, 88, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 16px;\n  letter-spacing: 0em;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(126, 126, 143, 0.3);\n  border-width: 2px;\n  color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(126, 126, 143, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(37, 184, 105, 0.3);\n  border-width: 2px;\n  color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(37, 184, 105, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[disabled][_ngcontent-%COMP%], \n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic.btn-disabled[_ngcontent-%COMP%] {\n  background-color: var(--button-outline-basic-disabled-background-color);\n  border-color: var(--button-outline-basic-disabled-border-color);\n  color: var(--button-outline-basic-disabled-text-color);\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].primary.appearance-filled.status-primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  border: unset;\n  background-color: var(--color-primary-transparent-default);\n  box-shadow: var(--gauzy-shadow) 0, 0, 0, 0.15;\n}\n[dir=ltr]   [_nghost-%COMP%]     input, \n[dir=ltr]   [_nghost-%COMP%]     textarea {\n  text-align: start;\n}\n[dir=rtl]   [_nghost-%COMP%]     input, \n[dir=rtl]   [_nghost-%COMP%]     textarea {\n  text-align: end;\n}\n[_nghost-%COMP%]     input, \n[_nghost-%COMP%]     nb-select.appearance-outline.status-basic .select-button, \n[_nghost-%COMP%]     .ng-select .ng-select-container {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n  height: 42px !important;\n}\n[_nghost-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder, \n[_nghost-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {\n  top: unset !important;\n}\n[_nghost-%COMP%]     label, \n[_nghost-%COMP%]     .label {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  color: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]     textarea {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n}\n[_nghost-%COMP%]     .ng-select .ng-select-container input, \n[_nghost-%COMP%]     nb-tag-list input {\n  background-color: unset !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  border-radius: var(--border-radius);\n  margin-bottom: 0;\n}\n[_nghost-%COMP%]   nb-card.records[_ngcontent-%COMP%] {\n  width: 645px;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  overflow: unset;\n  background-color: var(--gauzy-card-2);\n  padding: 1rem 11px;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]     input, \n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]     nb-select.appearance-outline.status-basic .select-button, \n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]     .ng-select .ng-select-container {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n  height: 2rem !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder, \n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {\n  top: unset !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]     label, \n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]     .label {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  color: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]     textarea {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]     .ng-select .ng-select-container input, \n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]     nb-tag-list input {\n  background-color: unset !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .table-scroll-container[_ngcontent-%COMP%] {\n  padding: 0 11px;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 18px;\n}\n\n.totals[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: 1rem;\n}\n\nnb-card-header[_ngcontent-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n  width: 100%;\n}\n\nnb-card.profit-history[_ngcontent-%COMP%] {\n  width: 645px;\n}"]
      });
    }
  };
  ProfitHistoryComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_16__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .UntilDestroy */ .d)({
    checkProperties: true
  }), (0,tslib__WEBPACK_IMPORTED_MODULE_16__/* .__metadata */ .Sn)("design:paramtypes", [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_11__/* .Store */ .il, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__/* .TranslateService */ .c$, _nebular_theme__WEBPACK_IMPORTED_MODULE_13__/* .NbDialogRef */ .ybQ])], ProfitHistoryComponent);
  return ProfitHistoryComponent;
})();


/***/ }),

/***/ 43138:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Y: () => (/* binding */ WidgetLayoutComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(55598);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(71750);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41598);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39855);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(90635);
/* harmony import */ var _widget_widget_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(89824);
/* harmony import */ var _widget_widget_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(36376);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(14572);













function WidgetLayoutComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("cdkDropListDropped", function WidgetLayoutComponent_div_1_Template_div_cdkDropListDropped_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.drop($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(1, "ga-widget", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("cdkDragEnded", function WidgetLayoutComponent_div_1_Template_ga_widget_cdkDragEnded_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.onDragEnded($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const widget_r3 = ctx.$implicit;
    const index_r4 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("cdkDropListData", index_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("widgetDragEnded", ctx_r1.event)("templateRef", widget_r3)("position", index_r4);
  }
}
let WidgetLayoutComponent = /*#__PURE__*/(() => {
  let WidgetLayoutComponent = class WidgetLayoutComponent extends _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .LayoutWithDraggableObject */ .X {
    set widgets(value) {
      this.draggableObject = value;
    }
    constructor(widgetService, cdr) {
      super();
      this.widgetService = widgetService;
      this.cdr = cdr;
    }
    ngAfterViewChecked() {
      this.cdr.detectChanges();
    }
    ngAfterViewInit() {
      this.listWidgets.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .tap */ .M)(listWidgets => this.widgetService.widgets$ = listWidgets.toArray()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__/* .untilDestroyed */ .s)(this)).subscribe();
    }
    drop(event) {
      (0,_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__/* .moveItemInArray */ .HD)(this.draggableObject, event.previousContainer.data, event.container.data);
      this.widgetService.widgetsRef = this.draggableObject;
      this.widgetService.save();
    }
    ngOnInit() {
      this.widgetService.widgetsRef = this.draggableObject;
    }
    get widgets() {
      if (this.widgetService.widgetsRef.length > 0 && this.draggableObject !== this.widgetService.widgetsRef) this.draggableObject = this.widgetService.widgetsRef;
      return this.draggableObject;
    }
    ngOnDestroy() {}
    static {
      this.ɵfac = function WidgetLayoutComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || WidgetLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_widget_widget_service__WEBPACK_IMPORTED_MODULE_5__/* .WidgetService */ .C), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* .ChangeDetectorRef */ .gRc));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: WidgetLayoutComponent,
        selectors: [["ga-widget-layout"]],
        viewQuery: function WidgetLayoutComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵviewQuery"] */ .GBs(_widget_widget_component__WEBPACK_IMPORTED_MODULE_6__/* .WidgetComponent */ .W, 5);
          }
          if (rf & 2) {
            let _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵqueryRefresh"] */ .mGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵloadQuery"] */ .lsd()) && (ctx.listWidgets = _t);
          }
        },
        inputs: {
          widgets: "widgets"
        },
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
        decls: 2,
        vars: 1,
        consts: [["cdkDropListGroup", "", 1, "grid-boundary"], ["cdkDropList", "", "cdkDropListOrientation", "horizontal", 3, "cdkDropListData", "cdkDropListDropped", 4, "ngFor", "ngForOf"], ["cdkDropList", "", "cdkDropListOrientation", "horizontal", 3, "cdkDropListDropped", "cdkDropListData"], ["cdkDrag", "", 3, "cdkDragEnded", "widgetDragEnded", "templateRef", "position"]],
        template: function WidgetLayoutComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, WidgetLayoutComponent_div_1_Template, 2, 4, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx.widgets);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__/* .NgForOf */ .Sq, _widget_widget_component__WEBPACK_IMPORTED_MODULE_6__/* .WidgetComponent */ .W, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__/* .CdkDropList */ .O7, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__/* .CdkDropListGroup */ .RK, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__/* .CdkDrag */ .T1],
        styles: [".grid-boundary[_ngcontent-%COMP%] {\n  display: flex;\n  margin: 0 -0.5rem;\n}\n.grid-boundary[_ngcontent-%COMP%]   ga-widget[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.grid-boundary[_ngcontent-%COMP%]   ga-widget[_ngcontent-%COMP%]     nb-card {\n  margin: 0;\n}\n\n.cdk-drag-preview[_ngcontent-%COMP%]     nb-card nb-card-body {\n  background-color: var(--color-primary-transparent-100);\n  border-radius: var(--border-radius);\n}\n.cdk-drag-preview[_ngcontent-%COMP%]     nb-card nb-card-body * {\n  color: var(--text-primary-color) !important;\n}\n\n.cdk-drop-list-dragging[_ngcontent-%COMP%]    > .cdk-drag-placeholder[_ngcontent-%COMP%]     nb-card nb-card-body {\n  min-width: 230px;\n  background-color: var(--gauzy-sidebar-background-3);\n  border-radius: var(--border-radius);\n}\n\n.cdk-drop-list-dragging[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(.cdk-drag-placeholder) {\n  display: none;\n}\n\n.cdk-drag-animating[_ngcontent-%COMP%] {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}"]
      });
    }
  };
  WidgetLayoutComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__/* .UntilDestroy */ .d)({
    checkProperties: true
  }), (0,tslib__WEBPACK_IMPORTED_MODULE_8__/* .__metadata */ .Sn)("design:paramtypes", [_widget_widget_service__WEBPACK_IMPORTED_MODULE_5__/* .WidgetService */ .C, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .ChangeDetectorRef */ .gRc])], WidgetLayoutComponent);
  return WidgetLayoutComponent;
})();


/***/ }),

/***/ 45793:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   r: () => (/* binding */ IncomeTableComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(55598);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52738);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39855);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41598);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(71924);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26860);






let IncomeTableComponent = /*#__PURE__*/(() => {
  let IncomeTableComponent = class IncomeTableComponent {
    constructor(store) {
      this.store = store;
    }
    ngOnInit() {
      this.store.selectedOrganization$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__/* .filter */ .p)(organization => !!organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__/* .tap */ .M)(organization => {
        this.organization = organization;
      }), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__/* .untilDestroyed */ .s)(this)).subscribe();
    }
    static {
      this.ɵfac = function IncomeTableComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || IncomeTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_4__/* .Store */ .il));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdefineComponent"] */ .VBU({
        type: IncomeTableComponent,
        selectors: [["ga-income-table-selector"]],
        inputs: {
          rowData: "rowData",
          value: "value"
        },
        standalone: false,
        decls: 2,
        vars: 1,
        template: function IncomeTableComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .j41(0, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ .EFF(1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .k0s();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", ctx.rowData.income ? "+ " + ctx.rowData.income + " " + (ctx.organization == null ? null : ctx.organization.currency) : "", " ");
          }
        },
        encapsulation: 2
      });
    }
  };
  IncomeTableComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__/* .UntilDestroy */ .d)({
    checkProperties: true
  }), (0,tslib__WEBPACK_IMPORTED_MODULE_5__/* .__metadata */ .Sn)("design:paramtypes", [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_4__/* .Store */ .il])], IncomeTableComponent);
  return IncomeTableComponent;
})();


/***/ }),

/***/ 50168:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Y: () => (/* binding */ LayoutPersistance)
/* harmony export */ });
/* harmony import */ var _persistance_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22345);

class LayoutPersistance {
  save() {
    return new _persistance_class__WEBPACK_IMPORTED_MODULE_0__/* .Persistance */ .g(this._state);
  }
  restore(persistance) {
    this._state = persistance.state;
  }
  get state() {
    return this._state;
  }
  set state(value) {
    this._state = value;
  }
}

/***/ }),

/***/ 52146:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ WindowLayoutComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(55598);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(71750);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41598);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39855);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(90635);
/* harmony import */ var _window_window_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(84984);
/* harmony import */ var _window_window_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(14096);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(14572);













function WindowLayoutComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("cdkDropListDropped", function WindowLayoutComponent_div_1_Template_div_cdkDropListDropped_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.drop($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(1, "ga-window", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("cdkDragEnded", function WindowLayoutComponent_div_1_Template_ga_window_cdkDragEnded_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.onDragEnded($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const window_r3 = ctx.$implicit;
    const index_r4 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("cdkDropListData", index_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("windowDragEnded", ctx_r1.event)("templateRef", window_r3)("position", index_r4);
  }
}
let WindowLayoutComponent = /*#__PURE__*/(() => {
  let WindowLayoutComponent = class WindowLayoutComponent extends _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .LayoutWithDraggableObject */ .X {
    set windows(value) {
      this.draggableObject = value;
    }
    constructor(windowService, cdr) {
      super();
      this.windowService = windowService;
      this.cdr = cdr;
    }
    ngAfterViewInit() {
      this.listWindows.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .tap */ .M)(listWindows => this.windowService.windows$ = listWindows.toArray()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__/* .untilDestroyed */ .s)(this)).subscribe();
    }
    ngAfterViewChecked() {
      this.cdr.detectChanges();
    }
    ngOnInit() {
      this.windowService.windowsRef = this.draggableObject;
    }
    drop(event) {
      (0,_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__/* .moveItemInArray */ .HD)(this.draggableObject, event.previousContainer.data, event.container.data);
      this.windowService.windowsRef = this.draggableObject;
      this.windowService.save();
    }
    get windows() {
      if (this.windowService.windowsRef.length > 0 && this.draggableObject !== this.windowService.windowsRef) this.draggableObject = this.windowService.windowsRef;
      return this.draggableObject;
    }
    ngOnDestroy() {}
    static {
      this.ɵfac = function WindowLayoutComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || WindowLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_window_window_service__WEBPACK_IMPORTED_MODULE_5__/* .WindowService */ .s), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* .ChangeDetectorRef */ .gRc));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: WindowLayoutComponent,
        selectors: [["ga-window-layout"]],
        viewQuery: function WindowLayoutComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵviewQuery"] */ .GBs(_window_window_component__WEBPACK_IMPORTED_MODULE_6__/* .WindowComponent */ .G, 5);
          }
          if (rf & 2) {
            let _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵqueryRefresh"] */ .mGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵloadQuery"] */ .lsd()) && (ctx.listWindows = _t);
          }
        },
        inputs: {
          windows: "windows"
        },
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
        decls: 2,
        vars: 1,
        consts: [["cdkDropListGroup", "", 1, "masonry-boundary"], ["class", "window", "cdkDropList", "", "cdkDropListOrientation", "horizontal", 3, "cdkDropListData", "cdkDropListDropped", 4, "ngFor", "ngForOf"], ["cdkDropList", "", "cdkDropListOrientation", "horizontal", 1, "window", 3, "cdkDropListDropped", "cdkDropListData"], ["cdkDrag", "", 3, "cdkDragEnded", "windowDragEnded", "templateRef", "position"]],
        template: function WindowLayoutComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, WindowLayoutComponent_div_1_Template, 2, 4, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx.windows);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__/* .NgForOf */ .Sq, _window_window_component__WEBPACK_IMPORTED_MODULE_6__/* .WindowComponent */ .G, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__/* .CdkDropList */ .O7, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__/* .CdkDropListGroup */ .RK, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__/* .CdkDrag */ .T1],
        styles: [".masonry-boundary[_ngcontent-%COMP%] {\n  column-count: 2;\n  column-gap: 1rem;\n}\n.masonry-boundary[_ngcontent-%COMP%]   .window[_ngcontent-%COMP%]   ga-window[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.masonry-boundary[_ngcontent-%COMP%]   .window[_ngcontent-%COMP%]   ga-window[_ngcontent-%COMP%]     nb-card {\n  margin: 0;\n}\n\n@media only screen and (max-width: 1200px) {\n  .masonry-boundary[_ngcontent-%COMP%] {\n    column-count: 1;\n  }\n}\n@media only screen and (min-width: 1201px) {\n  .masonry-boundary[_ngcontent-%COMP%] {\n    column-count: 2;\n  }\n}\n.cdk-drop-list-dragging[_ngcontent-%COMP%]    > .cdk-drag-placeholder[_ngcontent-%COMP%]     nb-card nb-card-body {\n  background-color: var(--gauzy-sidebar-background-3);\n  border-radius: var(--border-radius);\n}\n\n.cdk-drag-preview[_ngcontent-%COMP%]     nb-card nb-card-body {\n  filter: blur(10px);\n}\n\n.cdk-drop-list-dragging[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(.cdk-drag-placeholder) {\n  display: none;\n}\n\n.cdk-drag-animating[_ngcontent-%COMP%] {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}"]
      });
    }
  };
  WindowLayoutComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__/* .UntilDestroy */ .d)({
    checkProperties: true
  }), (0,tslib__WEBPACK_IMPORTED_MODULE_8__/* .__metadata */ .Sn)("design:paramtypes", [_window_window_service__WEBPACK_IMPORTED_MODULE_5__/* .WindowService */ .s, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .ChangeDetectorRef */ .gRc])], WindowLayoutComponent);
  return WindowLayoutComponent;
})();


/***/ }),

/***/ 66126:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   u: () => (/* binding */ PersistanceTakers)
/* harmony export */ });
class PersistanceTakers {
  constructor(layout) {
    this._persistances = [];
    this._layout = layout;
  }
  backup() {
    this._persistances.push(this._layout.save());
  }
  undo() {
    if (!this._persistances.length) return;
    const persistance = this._persistances.pop();
    this._layout.restore(persistance);
  }
}

/***/ }),

/***/ 68192:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G: () => (/* binding */ ExpenseTableComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(55598);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52738);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39855);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41598);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(71924);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26860);






let ExpenseTableComponent = /*#__PURE__*/(() => {
  let ExpenseTableComponent = class ExpenseTableComponent {
    constructor(store) {
      this.store = store;
    }
    ngOnInit() {
      this.store.selectedOrganization$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__/* .filter */ .p)(organization => !!organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__/* .tap */ .M)(organization => this.organization = organization), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__/* .untilDestroyed */ .s)(this)).subscribe();
    }
    static {
      this.ɵfac = function ExpenseTableComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || ExpenseTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_4__/* .Store */ .il));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdefineComponent"] */ .VBU({
        type: ExpenseTableComponent,
        selectors: [["ga-expense-table-selector"]],
        inputs: {
          rowData: "rowData",
          value: "value"
        },
        standalone: false,
        decls: 2,
        vars: 1,
        template: function ExpenseTableComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .j41(0, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtext"] */ .EFF(1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .k0s();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", ctx.rowData.expense ? "- " + ctx.rowData.expense + " " + (ctx.organization == null ? null : ctx.organization.currency) : "", " ");
          }
        },
        encapsulation: 2
      });
    }
  };
  ExpenseTableComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__/* .UntilDestroy */ .d)({
    checkProperties: true
  }), (0,tslib__WEBPACK_IMPORTED_MODULE_5__/* .__metadata */ .Sn)("design:paramtypes", [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_4__/* .Store */ .il])], ExpenseTableComponent);
  return ExpenseTableComponent;
})();


/***/ }),

/***/ 80367:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ WidgetModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14572);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56383);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19223);
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(38834);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);






let WidgetModule = /*#__PURE__*/(() => {
  class WidgetModule {
    static {
      this.ɵfac = function WidgetModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || WidgetModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .$C({
        type: WidgetModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .CommonModule */ .MD, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbButtonModule */ .P5N, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbIconModule */ .clu, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbPopoverModule */ .Ofb, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__/* .TranslateModule */ .h.forChild(), _shared_module__WEBPACK_IMPORTED_MODULE_4__/* .SharedModule */ .G]
      });
    }
  }
  return WidgetModule;
})();

/***/ }),

/***/ 82912:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   f: () => (/* binding */ InfoBlockComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14572);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56383);




const _c0 = ["*"];
function InfoBlockComponent_div_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", ctx_r1.meta, " ");
  }
}
function InfoBlockComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function InfoBlockComponent_div_1_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.handleClick());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(3, InfoBlockComponent_div_1_div_3_Template, 2, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(4, "div", 5)(5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(7, "nb-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵclassMapInterpolate1"] */ .ZvI("info-block ", ctx_r1.blockType && "info-block--" + ctx_r1.blockType, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", ctx_r1.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r1.meta);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵstyleProp"] */ .xc7("color", ctx_r1.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(ctx_r1.value);
  }
}
function InfoBlockComponent_nb_accordion_2_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", ctx_r1.meta, " ");
  }
}
function InfoBlockComponent_nb_accordion_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-accordion")(1, "nb-accordion-item")(2, "nb-accordion-item-header")(3, "div")(4, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(6, InfoBlockComponent_nb_accordion_2_div_6_Template, 2, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(7, "div", 5)(8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(10, "nb-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function InfoBlockComponent_nb_accordion_2_Template_nb_icon_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.handleClick());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(11, "nb-accordion-item-body")(12, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵprojection"] */ .SdG(13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵclassMapInterpolate1"] */ .ZvI("info-block ", ctx_r1.blockType && "info-block--" + ctx_r1.blockType, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", ctx_r1.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r1.meta);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵstyleProp"] */ .xc7("color", ctx_r1.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(ctx_r1.value);
  }
}
let InfoBlockComponent = /*#__PURE__*/(() => {
  class InfoBlockComponent {
    constructor() {
      this.openInfo = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .bkB();
      this.handleClick = () => {
        this.openInfo.emit();
      };
    }
    static {
      this.ɵfac = function InfoBlockComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || InfoBlockComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: InfoBlockComponent,
        selectors: [["ga-info-block"]],
        inputs: {
          title: "title",
          meta: "meta",
          value: "value",
          color: "color",
          blockType: "blockType",
          accordion: "accordion",
          listItem: "listItem"
        },
        outputs: {
          openInfo: "openInfo"
        },
        standalone: false,
        ngContentSelectors: _c0,
        decls: 3,
        vars: 5,
        consts: [[3, "class", "click", 4, "ngIf"], [4, "ngIf"], [3, "click"], [1, "info-text"], ["class", "meta-text", 4, "ngIf"], [1, "info-value"], ["icon", "link-2-outline", "nbTooltip", "Open Records History", "nbTooltipTrigger", "hover"], [1, "meta-text"], ["icon", "link-2-outline", "nbTooltip", "Open Records History", "nbTooltipTrigger", "hover", 3, "click"]],
        template: function InfoBlockComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵprojectionDef"] */ .NAR();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, InfoBlockComponent_div_1_Template, 8, 8, "div", 0)(2, InfoBlockComponent_nb_accordion_2_Template, 14, 8, "nb-accordion", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵclassMapInterpolate1"] */ .ZvI("info-block-wrapper ", ctx.listItem && "info-block-wrapper--list-item", "");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", !ctx.accordion);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.accordion);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .NgIf */ .bT, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbAccordionComponent */ .Ul7, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbAccordionItemComponent */ .vx8, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbAccordionItemHeaderComponent */ .Ig3, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbAccordionItemBodyComponent */ .LHJ, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbIconComponent */ .tHu, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbTooltipDirective */ .BmQ],
        styles: [".info-block-wrapper[_ngcontent-%COMP%] {\n  background-color: #f6f9fc;\n  margin-bottom: 1.25rem;\n  box-shadow: var(--gauzy-shadow);\n  border-radius: var(--border-radius);\n}\n.info-block-wrapper[_ngcontent-%COMP%]   .info-block[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  min-height: 46px;\n  border-radius: 4px;\n  padding: 2px 32px 2px 29px;\n  cursor: pointer;\n}\n.info-block-wrapper[_ngcontent-%COMP%]   .info-block[_ngcontent-%COMP%]:hover {\n  box-shadow: none;\n  transform: translateY(-1px);\n}\n.info-block-wrapper[_ngcontent-%COMP%]   .info-block[_ngcontent-%COMP%]   .info-text[_ngcontent-%COMP%], \n.info-block-wrapper[_ngcontent-%COMP%]   .info-block[_ngcontent-%COMP%]   .info-value[_ngcontent-%COMP%] {\n  display: flex;\n  font-size: 18px;\n  color: var(--gauzy-text-color-1);\n  gap: 8px;\n}\n.info-block-wrapper[_ngcontent-%COMP%]   .info-block[_ngcontent-%COMP%]   .info-text[_ngcontent-%COMP%] {\n  flex-direction: column;\n  justify-content: center;\n}\n.info-block-wrapper[_ngcontent-%COMP%]   .info-block[_ngcontent-%COMP%]   .info-value[_ngcontent-%COMP%] {\n  flex-direction: row;\n  align-items: center;\n  display: flex;\n  gap: 8px;\n}\n.info-block-wrapper[_ngcontent-%COMP%]   .info-block[_ngcontent-%COMP%]   .info-value[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 20px;\n  margin-right: 12px;\n}\n.info-block-wrapper[_ngcontent-%COMP%]   .info-block[_ngcontent-%COMP%]   .meta-text[_ngcontent-%COMP%] {\n  font-size: 10px;\n}\n.info-block-wrapper[_ngcontent-%COMP%]   .info-block--highlight[_ngcontent-%COMP%] {\n  background: #e8e8e8;\n  font-weight: 600;\n}\n.info-block-wrapper--list-item[_ngcontent-%COMP%] {\n  margin-bottom: 0.625rem;\n}\n.info-block-wrapper--list-item[_ngcontent-%COMP%]   .info-block[_ngcontent-%COMP%] {\n  padding-left: 8px;\n  padding-right: 12px;\n}\n.info-block-wrapper[_ngcontent-%COMP%]     nb-accordion nb-accordion-item-header {\n  padding: 0px;\n}\n.info-block-wrapper[_ngcontent-%COMP%]     nb-accordion {\n  box-shadow: none;\n}\n.info-block-wrapper[_ngcontent-%COMP%]     nb-accordion nb-accordion-item {\n  background-color: #f6f9fc;\n}\n.info-block-wrapper[_ngcontent-%COMP%]     nb-accordion nb-accordion-item-header .expansion-indicator {\n  right: 0.4rem;\n}\n.info-block-wrapper[_ngcontent-%COMP%]     nb-accordion nb-accordion-item-body .item-body {\n  padding-bottom: 0.625rem;\n}"]
      });
    }
  }
  return InfoBlockComponent;
})();

/***/ }),

/***/ 84984:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G: () => (/* binding */ WindowComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(55598);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(56383);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(41598);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52738);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39855);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16724);
/* harmony import */ var _window_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(14096);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(14572);
/* harmony import */ var _directives_outside_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(16074);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(19223);














const _c0 = ["window"];
const _c1 = (a0, a1, a2) => ({
  collapsed: a0,
  expanded: a1,
  moved: a2
});
function WindowComponent_div_0_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainer"] */ .eu8(0);
  }
}
function WindowComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 3, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(2, "nb-icon", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(3, WindowComponent_div_0_ng_container_3_Template, 1, 0, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    const setting_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction3"] */ .sMw(3, _c1, ctx_r0.isCollapse, ctx_r0.isExpand, ctx_r0.move));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("nbPopover", setting_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngTemplateOutlet", ctx_r0.templateRef);
  }
}
function WindowComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("clickOutside", function WindowComponent_ng_template_1_Template_div_clickOutside_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r0.onClickSetting($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function WindowComponent_ng_template_1_Template_div_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r0.isCollapse = true);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(2, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function WindowComponent_ng_template_1_Template_div_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r0.isExpand = true);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(7, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(11, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function WindowComponent_ng_template_1_Template_div_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r0.move = true);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(12, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(16, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function WindowComponent_ng_template_1_Template_div_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r0.hideWindow());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(17, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(20, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(5, 4, "BUTTONS.COLLAPSE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(10, 6, "BUTTONS.EXPAND"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(15, 8, "BUTTONS.MOVE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(20, 10, "BUTTONS.DELETE"));
  }
}
let WindowComponent = /*#__PURE__*/(() => {
  let WindowComponent = class WindowComponent extends _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .GuiDrag */ .s {
    constructor(windowService) {
      super();
      this.windowService = windowService;
    }
    ngAfterViewInit() {
      if (this._element) {
        const win = this._element.nativeElement;
        const title = win.querySelector('nb-card-header');
        if (title) this.title = title.innerText;
      }
    }
    ngOnInit() {
      this.windowDragEnded.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .filter */ .p)(event => !!event), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .tap */ .M)(() => this.move = false), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .untilDestroyed */ .s)(this)).subscribe();
      this.windowService.updateWindow(this);
    }
    onClickSetting(event) {
      if (event) {
        this._windowPopover.hide();
        this.windowService.save();
      }
    }
    get windowDragEnded() {
      return this._windowDragEnded;
    }
    set windowDragEnded(value) {
      this._windowDragEnded = value;
    }
    hideWindow() {
      this.windowService.hideWindow(this.position);
      this.windowService.save();
    }
    ngOnDestroy() {}
    static {
      this.ɵfac = function WindowComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || WindowComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_window_service__WEBPACK_IMPORTED_MODULE_5__/* .WindowService */ .s));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: WindowComponent,
        selectors: [["ga-window"]],
        viewQuery: function WindowComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵviewQuery"] */ .GBs(_nebular_theme__WEBPACK_IMPORTED_MODULE_6__/* .NbPopoverDirective */ .vs7, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵviewQuery"] */ .GBs(_c0, 5);
          }
          if (rf & 2) {
            let _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵqueryRefresh"] */ .mGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵloadQuery"] */ .lsd()) && (ctx._windowPopover = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵqueryRefresh"] */ .mGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵloadQuery"] */ .lsd()) && (ctx._element = _t.first);
          }
        },
        inputs: {
          windowDragEnded: "windowDragEnded"
        },
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
        decls: 3,
        vars: 1,
        consts: [["setting", ""], ["window", ""], ["id", "window", 3, "ngClass", 4, "ngIf"], ["id", "window", 3, "ngClass"], ["icon", "more-vertical-outline", "nbPopoverPlacement", "bottom", "nbPopoverTrigger", "click", "nbButton", "", 3, "nbPopover"], [4, "ngTemplateOutlet"], ["gauzyOutside", "", 1, "setting", 3, "clickOutside"], [1, "action", 3, "click"], [1, "far", "fa-window-minimize"], [1, "fas", "fa-expand"], [1, "fas", "fa-expand-arrows-alt"], [1, "fas", "fa-times"]],
        template: function WindowComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(0, WindowComponent_div_0_Template, 4, 7, "div", 2)(1, WindowComponent_ng_template_1_Template, 21, 12, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplateRefExtractor"] */ .C5r);
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", !ctx.hide);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__/* .NgClass */ .YU, _angular_common__WEBPACK_IMPORTED_MODULE_7__/* .NgIf */ .bT, _angular_common__WEBPACK_IMPORTED_MODULE_7__/* .NgTemplateOutlet */ .T3, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__/* .NbIconComponent */ .tHu, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__/* .NbPopoverDirective */ .vs7, _directives_outside_directive__WEBPACK_IMPORTED_MODULE_8__/* .OutsideDirective */ .H, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__/* .TranslatePipe */ .D9],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n#window[_ngcontent-%COMP%] {\n  position: relative;\n  color: var(--gauzy-text-color-2);\n  display: inline-block;\n  width: 100%;\n  transition: 1s ease all;\n  box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  margin-bottom: 1rem;\n}\n\n[_nghost-%COMP%]   nb-icon[_ngcontent-%COMP%] {\n  font-size: 11px;\n  position: absolute;\n  top: 1.125rem;\n  z-index: 2;\n}\n[dir=rtl]   [_nghost-%COMP%]   nb-icon[_ngcontent-%COMP%] {\n  left: 1rem;\n}\n[dir=ltr]   [_nghost-%COMP%]   nb-icon[_ngcontent-%COMP%] {\n  right: 1rem;\n}\n\n[_nghost-%COMP%]     .collapsed nb-card-body {\n  display: none;\n}\n[_nghost-%COMP%]     .expanded nb-card-body {\n  display: block;\n}\n[_nghost-%COMP%]     .moved nb-card {\n  cursor: move;\n}\n\n.setting[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 10px 12px;\n  gap: 10px;\n}\n.setting[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  align-items: center;\n  cursor: pointer;\n}\n.setting[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--gauzy-text-color-2);\n}\n.setting[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: rgba(126, 126, 143, 0.5);\n}"]
      });
    }
  };
  WindowComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_10__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .UntilDestroy */ .d)({
    checkProperties: true
  }), (0,tslib__WEBPACK_IMPORTED_MODULE_10__/* .__metadata */ .Sn)("design:paramtypes", [_window_service__WEBPACK_IMPORTED_MODULE_5__/* .WindowService */ .s])], WindowComponent);
  return WindowComponent;
})();


/***/ }),

/***/ 85797:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: () => (/* binding */ WidgetLayoutModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14572);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71750);
/* harmony import */ var _widget_widget_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(80367);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);




let WidgetLayoutModule = /*#__PURE__*/(() => {
  class WidgetLayoutModule {
    static {
      this.ɵfac = function WidgetLayoutModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || WidgetLayoutModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .$C({
        type: WidgetLayoutModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .CommonModule */ .MD, _widget_widget_module__WEBPACK_IMPORTED_MODULE_2__/* .WidgetModule */ .L, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__/* .DragDropModule */ .ad]
      });
    }
  }
  return WidgetLayoutModule;
})();

/***/ }),

/***/ 89429:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ WindowLayoutModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14572);
/* harmony import */ var _window_window_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7991);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71750);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);




let WindowLayoutModule = /*#__PURE__*/(() => {
  class WindowLayoutModule {
    static {
      this.ɵfac = function WindowLayoutModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || WindowLayoutModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .$C({
        type: WindowLayoutModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .CommonModule */ .MD, _window_window_module__WEBPACK_IMPORTED_MODULE_2__/* .WindowModule */ .n, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__/* .DragDropModule */ .ad]
      });
    }
  }
  return WindowLayoutModule;
})();

/***/ }),

/***/ 89824:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   W: () => (/* binding */ WidgetComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(55598);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(56383);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(41598);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52738);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39855);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16724);
/* harmony import */ var _widget_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(36376);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(14572);
/* harmony import */ var _directives_outside_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(16074);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(19223);














const _c0 = ["widget"];
const _c1 = (a0, a1, a2) => ({
  collapsed: a0,
  expanded: a1,
  moved: a2
});
const _c2 = a0 => ({
  width: a0
});
function WidgetComponent_div_0_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainer"] */ .eu8(0);
  }
}
function WidgetComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 3, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(2, "nb-icon", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(3, WidgetComponent_div_0_ng_container_3_Template, 1, 0, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    const setting_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction3"] */ .sMw(4, _c1, ctx_r0.isCollapse, ctx_r0.isExpand, ctx_r0.move))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction1"] */ .eq3(8, _c2, ctx_r0.width + "px"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("nbPopover", setting_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngTemplateOutlet", ctx_r0.templateRef);
  }
}
function WidgetComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("clickOutside", function WidgetComponent_ng_template_1_Template_div_clickOutside_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r0.onClickSetting($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function WidgetComponent_ng_template_1_Template_div_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r0.isCollapse = true);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(2, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function WidgetComponent_ng_template_1_Template_div_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r0.isExpand = true);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(7, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(11, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function WidgetComponent_ng_template_1_Template_div_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r0.move = true);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(12, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(16, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function WidgetComponent_ng_template_1_Template_div_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r0.hideWidget());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(17, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(20, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(5, 4, "BUTTONS.COLLAPSE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(10, 6, "BUTTONS.EXPAND"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(15, 8, "BUTTONS.MOVE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(20, 10, "BUTTONS.DELETE"));
  }
}
let WidgetComponent = /*#__PURE__*/(() => {
  let WidgetComponent = class WidgetComponent extends _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .GuiDrag */ .s {
    constructor(widgetService) {
      super();
      this.widgetService = widgetService;
    }
    ngAfterViewInit() {
      if (this._element) {
        const wgt = this._element.nativeElement;
        const title = wgt.querySelector('div.title');
        if (title) this.title = title.innerText;
      }
    }
    ngOnInit() {
      this.widgetDragEnded.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .filter */ .p)(event => !!event), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .tap */ .M)(() => this.move = false), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .untilDestroyed */ .s)(this)).subscribe();
      this.widgetService.updateWidget(this);
    }
    onClickSetting(event) {
      if (event) {
        this._widgetPopover.hide();
        this.widgetService.save();
      }
    }
    get widgetDragEnded() {
      return this._widgetDragEnded;
    }
    set widgetDragEnded(value) {
      this._widgetDragEnded = value;
    }
    get width() {
      return this._interpolatedWidth();
    }
    _interpolatedWidth() {
      const x = window.innerWidth;
      return -(79730266276099 * Math.pow(x, 7)) / 2560103347328383765708800000 + 4728564053374099 * Math.pow(x, 6) / 14066501908397712998400000 - 369154233196212757 * Math.pow(x, 5) / 238104850011940454400000 + 51440697463141483721 * Math.pow(x, 4) / 12987537273378570240000 - 491376385800833711797 * Math.pow(x, 3) / 81172107958616064000 + 16396027307988847931 * Math.pow(x, 2) / 2962092580761600 - 19016315799060904323959 * x / 6781957804702080 + 6006199631979423447 / 9894312857;
    }
    hideWidget() {
      this.widgetService.hideWidget(this.position);
      this.widgetService.save();
    }
    ngOnDestroy() {}
    static {
      this.ɵfac = function WidgetComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || WidgetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_widget_service__WEBPACK_IMPORTED_MODULE_5__/* .WidgetService */ .C));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: WidgetComponent,
        selectors: [["ga-widget"]],
        viewQuery: function WidgetComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵviewQuery"] */ .GBs(_nebular_theme__WEBPACK_IMPORTED_MODULE_6__/* .NbPopoverDirective */ .vs7, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵviewQuery"] */ .GBs(_c0, 5);
          }
          if (rf & 2) {
            let _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵqueryRefresh"] */ .mGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵloadQuery"] */ .lsd()) && (ctx._widgetPopover = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵqueryRefresh"] */ .mGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵloadQuery"] */ .lsd()) && (ctx._element = _t.first);
          }
        },
        inputs: {
          widgetDragEnded: "widgetDragEnded"
        },
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
        decls: 3,
        vars: 1,
        consts: [["setting", ""], ["widget", ""], ["id", "widget", 3, "ngClass", "ngStyle", 4, "ngIf"], ["id", "widget", 3, "ngClass", "ngStyle"], ["icon", "more-vertical-outline", "nbPopoverPlacement", "bottom", "nbPopoverTrigger", "click", "nbButton", "", 3, "nbPopover"], [4, "ngTemplateOutlet"], ["gauzyOutside", "", 1, "setting", 3, "clickOutside"], [1, "action", 3, "click"], [1, "far", "fa-window-minimize"], [1, "fas", "fa-expand"], [1, "fas", "fa-expand-arrows-alt"], [1, "fas", "fa-times"]],
        template: function WidgetComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(0, WidgetComponent_div_0_Template, 4, 10, "div", 2)(1, WidgetComponent_ng_template_1_Template, 21, 12, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplateRefExtractor"] */ .C5r);
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", !ctx.hide);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__/* .NgClass */ .YU, _angular_common__WEBPACK_IMPORTED_MODULE_7__/* .NgIf */ .bT, _angular_common__WEBPACK_IMPORTED_MODULE_7__/* .NgTemplateOutlet */ .T3, _angular_common__WEBPACK_IMPORTED_MODULE_7__/* .NgStyle */ .B3, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__/* .NbIconComponent */ .tHu, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__/* .NbPopoverDirective */ .vs7, _directives_outside_directive__WEBPACK_IMPORTED_MODULE_8__/* .OutsideDirective */ .H, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__/* .TranslatePipe */ .D9],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n#widget[_ngcontent-%COMP%] {\n  position: relative;\n  color: var(--gauzy-text-color-2);\n  min-width: 230px;\n  max-width: 314px;\n  margin: 0rem 0.5rem 1rem;\n}\n\n[_nghost-%COMP%]   nb-icon[_ngcontent-%COMP%] {\n  font-size: 11px;\n  position: absolute;\n  top: 10.5px;\n  z-index: 2;\n}\n[dir=rtl]   [_nghost-%COMP%]   nb-icon[_ngcontent-%COMP%] {\n  left: 12px;\n}\n[dir=ltr]   [_nghost-%COMP%]   nb-icon[_ngcontent-%COMP%] {\n  right: 12px;\n}\n\n[dir=rtl]   [_nghost-%COMP%]     nb-card-body {\n  padding: 8px 15px 8px 12px;\n}\n[dir=ltr]   [_nghost-%COMP%]     nb-card-body {\n  padding: 8px 12px 8px 15px;\n}\n[_nghost-%COMP%]     .collapsed nb-card-body div.h1 {\n  display: none;\n}\n[_nghost-%COMP%]     .expanded nb-card-body div.h1 {\n  display: block;\n}\n[_nghost-%COMP%]     .moved nb-card {\n  cursor: move;\n}\n\n.setting[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 10px 12px;\n  gap: 10px;\n}\n.setting[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  align-items: center;\n  cursor: pointer;\n}\n.setting[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--gauzy-text-color-2);\n}\n.setting[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: rgba(126, 126, 143, 0.5);\n}"]
      });
    }
  };
  WidgetComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_10__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .UntilDestroy */ .d)({
    checkProperties: true
  }), (0,tslib__WEBPACK_IMPORTED_MODULE_10__/* .__metadata */ .Sn)("design:paramtypes", [_widget_service__WEBPACK_IMPORTED_MODULE_5__/* .WidgetService */ .C])], WidgetComponent);
  return WidgetComponent;
})();


/***/ }),

/***/ 90635:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   X: () => (/* binding */ LayoutWithDraggableObject)
/* harmony export */ });
/* harmony import */ var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4644);

class LayoutWithDraggableObject {
  constructor() {
    this.draggableObject = [];
    this._event = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_0__/* .Subject */ .B();
  }
  drop(event) {}
  onDragEnded(event) {
    this._event.next(event);
  }
  get event() {
    return this._event.asObservable();
  }
}

/***/ }),

/***/ 97935:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   W: () => (/* binding */ InfoBlockModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14572);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56383);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);



let InfoBlockModule = /*#__PURE__*/(() => {
  class InfoBlockModule {
    static {
      this.ɵfac = function InfoBlockModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || InfoBlockModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .$C({
        type: InfoBlockModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .CommonModule */ .MD, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbAccordionModule */ .LtP, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbIconModule */ .clu, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbTooltipModule */ .IB0]
      });
    }
  }
  return InfoBlockModule;
})();

/***/ }),

/***/ 98701:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   k: () => (/* binding */ SingleStatisticComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14572);


function SingleStatisticComponent_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate3"] */ .E5c("", ctx_r0.prefix, " ", ctx_r0.value, " ", ctx_r0.suffix, "");
  }
}
function SingleStatisticComponent_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵstyleProp"] */ .xc7("color", ctx_r0.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate3"] */ .E5c(" ", ctx_r0.prefix, " ", ctx_r0.value, " ", ctx_r0.suffix, " ");
  }
}
let SingleStatisticComponent = /*#__PURE__*/(() => {
  class SingleStatisticComponent {
    constructor() {}
    ngOnInit() {}
    static {
      this.ɵfac = function SingleStatisticComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || SingleStatisticComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: SingleStatisticComponent,
        selectors: [["ga-single-statistic"]],
        inputs: {
          title: "title",
          prefix: "prefix",
          value: "value",
          suffix: "suffix",
          type: "type",
          color: "color"
        },
        standalone: false,
        decls: 6,
        vars: 3,
        consts: [[1, "statistic-component"], [1, "title"], [1, "content", 3, "ngSwitch"], ["class", "block-amount", 4, "ngSwitchCase"], [3, "color", 4, "ngSwitchDefault"], [1, "block-amount"]],
        template: function SingleStatisticComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 0)(1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(3, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(4, SingleStatisticComponent_span_4_Template, 2, 3, "span", 3)(5, SingleStatisticComponent_span_5_Template, 2, 5, "span", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", ctx.title, " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngSwitch", ctx.type);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngSwitchCase", "highlight");
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .NgSwitch */ .ux, _angular_common__WEBPACK_IMPORTED_MODULE_1__/* .NgSwitchCase */ .e1, _angular_common__WEBPACK_IMPORTED_MODULE_1__/* .NgSwitchDefault */ .fG],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   .statistic-component[_ngcontent-%COMP%] {\n  display: inline-flex;\n  flex-direction: column;\n}\n[_nghost-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 16px;\n  letter-spacing: -0.009em;\n  color: var(--gauzy-text-color-2);\n  margin-bottom: 20px;\n}\n[_nghost-%COMP%]   .content[_ngcontent-%COMP%] {\n  font-size: 36px;\n  font-weight: 400;\n  line-height: 44px;\n  letter-spacing: 0em;\n  color: var(--gauzy-text-color-1);\n  margin-bottom: 20px;\n}\n[_nghost-%COMP%]   .block-amount[_ngcontent-%COMP%] {\n  color: var(--color-success-default);\n  font-weight: 600;\n}"]
      });
    }
  }
  return SingleStatisticComponent;
})();

/***/ })

}]);