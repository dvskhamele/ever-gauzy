"use strict";
(self["webpackChunkgauzy"] = self["webpackChunkgauzy"] || []).push([[1707],{

/***/ 168:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   x: () => (/* binding */ EntityWithMembersModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14572);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56383);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19223);
/* harmony import */ var _table_components_table_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(57832);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);







let EntityWithMembersModule = /*#__PURE__*/(() => {
  class EntityWithMembersModule {
    static {
      this.ɵfac = function EntityWithMembersModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || EntityWithMembersModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .$C({
        type: EntityWithMembersModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .CommonModule */ .MD, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbBadgeModule */ .iEK, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbCardModule */ .lVF, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbButtonModule */ .P5N, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbIconModule */ .clu, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbInputModule */ .pty, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbSelectModule */ .VcP, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbTooltipModule */ .IB0, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbToastrModule */ .EcJ.forRoot(), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__/* .TranslateModule */ .h.forChild(), _table_components_table_components_module__WEBPACK_IMPORTED_MODULE_4__/* .TableComponentsModule */ .p]
      });
    }
  }
  return EntityWithMembersModule;
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

/***/ 21781:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K: () => (/* binding */ ProjectModuleTableModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14572);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56383);
/* harmony import */ var _smart_data_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(98722);
/* harmony import */ var _project_module_mutation_project_module_mutation_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(87605);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19223);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);







let ProjectModuleTableModule = /*#__PURE__*/(() => {
  class ProjectModuleTableModule {
    static {
      this.ɵfac = function ProjectModuleTableModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || ProjectModuleTableModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .$C({
        type: ProjectModuleTableModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .CommonModule */ .MD, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbSpinnerModule */ .gYs, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbButtonModule */ .P5N, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbIconModule */ .clu, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__/* .TranslateModule */ .h.forChild(), _project_module_mutation_project_module_mutation_module__WEBPACK_IMPORTED_MODULE_4__/* .ProjectModuleMutationModule */ .v, _smart_data_layout__WEBPACK_IMPORTED_MODULE_5__/* .SmartDataViewLayoutModule */ .H]
      });
    }
  }
  return ProjectModuleTableModule;
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

/***/ 26852:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: () => (/* binding */ RepositorySelectorModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14572);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10936);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19223);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(55567);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);






let RepositorySelectorModule = /*#__PURE__*/(() => {
  class RepositorySelectorModule {
    static {
      this.ɵfac = function RepositorySelectorModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || RepositorySelectorModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .$C({
        type: RepositorySelectorModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .CommonModule */ .MD, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .FormsModule */ .YN, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__/* .TranslateModule */ .h.forChild(), _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__/* .NgSelectModule */ .MQ]
      });
    }
  }
  return RepositorySelectorModule;
})();

/***/ }),

/***/ 28633:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   W: () => (/* binding */ ProjectOrganizationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14572);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56383);
/* harmony import */ var _directives_img_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71466);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19223);
/* harmony import */ var _pipes_text_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(43826);






function ProjectOrganizationComponent_div_0_img_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(0, "img", 6);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpropertyInterpolate"] */ .FS9("src", ctx_r0.project.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵsanitizeUrl"] */ .B4B);
  }
}
function ProjectOrganizationComponent_div_0_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate2"] */ .Lme(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(2, 2, "FORM.PLACEHOLDERS.MEMBERS_COUNT"), " ", ctx_r0.project == null ? null : ctx_r0.project.count, " ");
  }
}
function ProjectOrganizationComponent_div_0_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div")(1, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(3, "truncate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("href", ctx_r0.rowData == null ? null : ctx_r0.rowData.projectUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵsanitizeUrl"] */ .B4B);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind2"] */ .i5U(3, 2, ctx_r0.rowData.projectUrl, 20));
  }
}
function ProjectOrganizationComponent_div_0_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "nb-badge", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("status", (ctx_r0.rowData == null ? null : ctx_r0.rowData.owner) === "INTERNAL" ? "primary" : "danger")("text", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(2, 2, ctx_r0.rowData == null ? null : ctx_r0.rowData.owner));
  }
}
function ProjectOrganizationComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, ProjectOrganizationComponent_div_0_img_1_Template, 1, 1, "img", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(2, "span")(3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(5, ProjectOrganizationComponent_div_0_div_5_Template, 3, 4, "div", 4)(6, ProjectOrganizationComponent_div_0_div_6_Template, 4, 5, "div", 5)(7, ProjectOrganizationComponent_div_0_div_7_Template, 3, 4, "div", 5);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r0.rowData == null ? null : ctx_r0.rowData.projectUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r0.rowData == null ? null : ctx_r0.rowData.owner);
  }
}
let ProjectOrganizationComponent = /*#__PURE__*/(() => {
  class ProjectOrganizationComponent {
    constructor() {
      this.organization = null;
      this.project = {
        name: null,
        count: null,
        imageUrl: null
      };
    }
    ngOnInit() {
      this.project.name = this.rowData.name;
      this.project.count = this.rowData.membersCount;
      this.project.imageUrl = this.rowData.imageUrl;
    }
    static {
      this.ɵfac = function ProjectOrganizationComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || ProjectOrganizationComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: ProjectOrganizationComponent,
        selectors: [["gauzy-project-organization"]],
        inputs: {
          value: "value",
          rowData: "rowData"
        },
        standalone: false,
        decls: 1,
        vars: 1,
        consts: [["class", "project-render", 4, "ngIf"], [1, "project-render"], [3, "src", 4, "ngIf"], [1, "name"], ["class", "member", 4, "ngIf"], [4, "ngIf"], [3, "src"], [1, "member"], ["rel", "noopener", "target", "_blank", 3, "href"], [3, "status", "text"]],
        template: function ProjectOrganizationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(0, ProjectOrganizationComponent_div_0_Template, 8, 5, "div", 0);
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.project);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .NgIf */ .bT, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbBadgeComponent */ .XyX, _directives_img_directive__WEBPACK_IMPORTED_MODULE_3__/* .ImgDirective */ .z, _angular_common__WEBPACK_IMPORTED_MODULE_1__/* .TitleCasePipe */ .PV, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__/* .TranslatePipe */ .D9, _pipes_text_pipe__WEBPACK_IMPORTED_MODULE_5__/* .TruncatePipe */ .H],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.project-render[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: flex-start;\n  gap: 10px;\n}\n.project-render[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: var(--border-radius);\n  box-shadow: var(--gauzy-shadow);\n  object-fit: cover;\n}\n.project-render[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   .member[_ngcontent-%COMP%] {\n  color: var(--gauzy-text-color-2);\n  font-size: 11px;\n  font-weight: 400;\n  line-height: 13px;\n  letter-spacing: 0em;\n}\n.project-render[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  color: var(--gauzy-text-color-1);\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 17px;\n  letter-spacing: 0em;\n}\n\nnb-badge[_ngcontent-%COMP%] {\n  margin-top: 4px;\n  position: relative;\n}\n\n[_nghost-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--text-primary-color) !important;\n  font-size: 11px;\n  font-weight: 400;\n  line-height: 13px;\n  letter-spacing: 0em;\n}"]
      });
    }
  }
  return ProjectOrganizationComponent;
})();

/***/ }),

/***/ 28722:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: () => (/* binding */ ProjectModuleMutationComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(73014);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(55598);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10936);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(56383);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(19223);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(80189);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(52738);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(39855);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(41598);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(61998);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(72647);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(26024);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(71924);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(88319);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(5855);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(77096);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(44507);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(38736);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(15480);
/* harmony import */ var _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38546);
/* harmony import */ var _ckeditor_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(98106);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(14572);
/* harmony import */ var ckeditor4_angular__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(76166);
/* harmony import */ var _selectors_project_project_project_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(46582);
/* harmony import */ var _employee_employee_multi_select_employee_multi_select_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(57354);
/* harmony import */ var _tasks_task_select_task_task_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(33765);























function ProjectModuleMutationComponent_nb_option_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const status_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("value", status_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", status_r2, " ");
  }
}
function ProjectModuleMutationComponent_nb_option_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const team_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("value", team_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(team_r3.name);
  }
}
function ProjectModuleMutationComponent_nb_option_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const module_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("value", module_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", module_r4.name, " ");
  }
}
function ProjectModuleMutationComponent_nb_option_66_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const sprint_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("value", sprint_r5.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", sprint_r5.name, " ");
  }
}
let ProjectModuleMutationComponent = /*#__PURE__*/(() => {
  let ProjectModuleMutationComponent = class ProjectModuleMutationComponent extends _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_1__/* .TranslationBaseComponent */ .K {
    get projectModule() {
      return this._projectModule;
    }
    set projectModule(value) {
      this._projectModule = value;
      this.populateForm(value);
    }
    get project() {
      return this._project;
    }
    set project(value) {
      this._project = value;
      this.form.get('projectId').setValue(value?.id || null);
    }
    constructor(dialogRef, fb, store, translateService, employeesService, organizationTeamsService, organizationProjectModuleService, organizationSprintService, tasksService, toastrService) {
      super(translateService);
      this.dialogRef = dialogRef;
      this.fb = fb;
      this.store = store;
      this.translateService = translateService;
      this.employeesService = employeesService;
      this.organizationTeamsService = organizationTeamsService;
      this.organizationProjectModuleService = organizationProjectModuleService;
      this.organizationSprintService = organizationSprintService;
      this.tasksService = tasksService;
      this.toastrService = toastrService;
      this.memberIds = [];
      this.managerIds = [];
      this.selectedEmployeeIds = [];
      this.selectedManagerIds = [];
      this.employees = [];
      this.teams = [];
      this.selectedTeams = [];
      this.tasks = [];
      this.organizationSprints = [];
      this.availableParentModules = [];
      this.taskParticipantEnum = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__/* .TaskParticipantEnum */ .S;
      this.participants = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__/* .TaskParticipantEnum */ .S.EMPLOYEES;
      this.ckConfig = _ckeditor_config__WEBPACK_IMPORTED_MODULE_3__/* .richTextCKEditorConfig */ .Z;
      this.projectModuleStatuses = Object.values(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_4__/* .ProjectModuleStatusEnum */ .Z);
      this.form = this.fb.group({
        name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .Validators */ .k0.required],
        description: [''],
        status: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_4__/* .ProjectModuleStatusEnum */ .Z.BACKLOG],
        startDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .Validators */ .k0.required],
        endDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .Validators */ .k0.required],
        isFavorite: [false],
        parentId: [],
        projectId: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .Validators */ .k0.required],
        managerIds: [],
        memberIds: [],
        organizationSprints: [],
        teams: [],
        tasks: []
      });
      this.createModule = false;
    }
    /**
     * Initializes component and loads necessary data.
     */
    ngOnInit() {
      this.ckConfig.editorplaceholder = this.translateService.instant('FORM.PLACEHOLDERS.DESCRIPTION');
      this.loadOrganizationData();
      this.loadAvailableParentModules();
      this.loadTasks();
      this.findOrganizationSprints();
    }
    /**
     * Populates form fields with data from an existing project module.
     * @param module - The selected project module data.
     */
    populateForm(module) {
      if (!module) return;
      const {
        name,
        description,
        status,
        startDate,
        endDate,
        isFavorite,
        projectId,
        parentId,
        members = [],
        organizationSprints,
        teams = [],
        tasks = []
      } = module;
      this.form.patchValue({
        name,
        description,
        status,
        startDate,
        endDate,
        isFavorite,
        projectId,
        parentId,
        members: members.map(m => m.id),
        organizationSprints,
        teams: teams.map(t => t.id),
        tasks: tasks.map(task => task.id)
      });
      this.selectedEmployeeIds = (module.members || []).filter(member => !member.isManager).map(member => member.employeeId);
      this.memberIds = this.selectedEmployeeIds;
      // Selected Managers Ids
      this.selectedManagerIds = (module.members || []).filter(member => member.isManager).map(member => member.employeeId);
      this.managerIds = this.selectedManagerIds;
      this.selectedTeams = teams.map(t => t.id);
    }
    /**
     * Validates and saves the form data to create or update the project module.
     */
    onSave() {
      if (this.form.invalid) return;
      this.createOrUpdateModule();
    }
    /**
     * Creates a new project module or updates the existing module based on form data.
     */
    createOrUpdateModule() {
      var _this = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(function* () {
        try {
          // Update form fields with valid members, teams, and tasks
          _this.updateFormFields();
          // Prepare form values
          const formValue = {
            ..._this.form.value,
            organizationId: _this.organization.id,
            organization: _this.organization
          };
          let module;
          // Determine if we are creating or updating a module
          if (_this.createModule) {
            module = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_7__/* .firstValueFrom */ ._)(_this.organizationProjectModuleService.create(formValue));
            _this.toastrService.success(_this.translateService.instant('TOASTR.MESSAGE.MODULE_CREATED'), _this.translateService.instant('TOASTR.TITLE.SUCCESS'));
          } else {
            module = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_7__/* .firstValueFrom */ ._)(_this.organizationProjectModuleService.update(_this.projectModule.id, formValue));
            _this.toastrService.success(_this.translateService.instant('TOASTR.MESSAGE.MODULE_UPDATED'), _this.translateService.instant('TOASTR.TITLE.SUCCESS'));
          }
          _this.organizationProjectModuleService.notifyModuleUpdated();
          // Close the dialog and return the created/updated module
          _this.dialogRef.close(module);
        } catch (error) {
          // Display an error toast
          _this.toastrService.danger(_this.translateService.instant('TOASTR.MESSAGE.MODULE_SAVE_ERROR'), _this.translateService.instant('TOASTR.TITLE.ERROR'));
          console.error('Failed to save module:', error);
        }
      })();
    }
    /**
     * Updates form fields with valid members, teams, and tasks.
     */
    updateFormFields() {
      this.form.get('memberIds').setValue(this.memberIds.filter(memberId => !this.managerIds.includes(memberId)));
      this.form.get('managerIds').setValue(this.managerIds.filter(managerId => this.employees.some(emp => emp.id === managerId)));
      this.form.get('teams').setValue((this.selectedTeams || []).map(id => this.teams.find(t => t.id === id)).filter(Boolean));
      this.form.get('tasks').setValue((this.form.get('tasks').value || []).map(id => this.tasks.find(t => t.id === id)).filter(Boolean));
    }
    /**
     * Loads selected organization data and initializes employees and teams.
     */
    loadOrganizationData() {
      var _this2 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(function* () {
        const organization$ = _this2.store.selectedOrganization$;
        organization$.pipe((0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_8__/* .distinctUntilChange */ .nI)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .filter */ .p)(Boolean), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .tap */ .M)(org => _this2.organization = org), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .tap */ .M)(() => _this2.loadEmployees()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .tap */ .M)(() => _this2.loadTeams()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__/* .untilDestroyed */ .s)(_this2)).subscribe();
      })();
    }
    /**
     * Loads the employees for the currently selected organization.
     *
     * Retrieves all employees associated with the current organization and tenant,
     * including their user details, and assigns them to the `employees` property.
     */
    loadEmployees() {
      var _this3 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(function* () {
        if (!_this3.organization) return;
        const {
          id: organizationId,
          tenantId
        } = _this3.organization;
        try {
          const {
            items: employees = []
          } = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_7__/* .firstValueFrom */ ._)(_this3.employeesService.getAll(['user'], {
            organizationId,
            tenantId
          }));
          _this3.employees = employees;
        } catch (error) {
          console.error('Failed to load employees:', error);
          _this3.employees = [];
        }
      })();
    }
    /**
     * Loads available teams for the selected organization.
     *
     * Retrieves all teams associated with the current organization and tenant,
     * including their members, and assigns them to the `teams` property.
     */
    loadTeams() {
      var _this4 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(function* () {
        if (!_this4.organization) return;
        const {
          id: organizationId,
          tenantId
        } = _this4.organization;
        try {
          const {
            items: teams = []
          } = yield _this4.organizationTeamsService.getAll(['members'], {
            organizationId,
            tenantId
          });
          _this4.teams = teams;
        } catch (error) {
          _this4.teams = [];
        }
      })();
    }
    /**
     * Loads available tasks for the selected project and organization.
     *
     * Retrieves all tasks associated with the current organization, tenant,
     * and selected project, then assigns them to the `tasks` property.
     */
    loadTasks() {
      var _this5 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(function* () {
        if (!_this5.organization) return;
        const {
          id: organizationId,
          tenantId
        } = _this5.organization;
        const projectId = _this5.form.get('projectId')?.value;
        try {
          const {
            items: tasks = []
          } = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_7__/* .firstValueFrom */ ._)(_this5.tasksService.getAllTasks({
            projectId,
            organizationId,
            tenantId
          }));
          _this5.tasks = tasks;
        } catch (error) {
          _this5.tasks = [];
        }
      })();
    }
    /**
     * Loads available parent modules based on the selected project ID.
     *
     * Retrieves parent modules associated with the selected project and assigns
     * them to the `availableParentModules` property.
     */
    loadAvailableParentModules() {
      var _this6 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(function* () {
        if (!_this6.organization) return;
        const projectId = _this6.form.get('projectId')?.value;
        try {
          const modules = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_7__/* .firstValueFrom */ ._)(_this6.organizationProjectModuleService.getAllModulesByProjectId({
            projectId
          }));
          _this6.availableParentModules = modules?.items || [];
        } catch (error) {
          _this6.availableParentModules = [];
        }
      })();
    }
    /**
     * Fetches sprints associated with the organization.
     */
    findOrganizationSprints() {
      this.organizationSprintService.getAllSprints().subscribe({
        next: sprints => {
          this.organizationSprints = sprints.items;
        },
        error: error => {
          console.error('Error fetching organization sprints:', error);
        }
      });
    }
    /**
     * Handles the selection of managers and updates the `managerIds` property.
     *
     * @param {ID[]} managerIds - An array of selected manager IDs.
     * The function is called when managers are selected, and it sets the `managerIds` property
     * with the array of selected IDs.
     */
    onManagersSelected(managerIds) {
      this.managerIds = managerIds;
    }
    /**
     * Updates the selected teams based on the user's selection.
     *
     * @param teamsSelection - An array of team IDs selected by the user.
     */
    onTeamsSelected(teamsSelection) {
      this.selectedTeams = [...teamsSelection];
    }
    /**
     * Handles the selection of members and updates the `memberIds` property.
     *
     * @param {ID[]} memberIds - An array of selected member IDs.
     * The function is called when members are selected, and it sets the `memberIds` property
     * with the array of selected IDs.
     */
    onMembersSelected(memberIds) {
      this.memberIds = memberIds;
    }
    static {
      this.ɵfac = function ProjectModuleMutationComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || ProjectModuleMutationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_nebular_theme__WEBPACK_IMPORTED_MODULE_12__/* .NbDialogRef */ .ybQ), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .UntypedFormBuilder */ .ze), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_13__/* .Store */ .il), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__/* .TranslateService */ .c$), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_15__/* .EmployeesService */ .r), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_16__/* .OrganizationTeamsService */ .F), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_17__/* .OrganizationProjectModuleService */ .k), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_18__/* .SprintService */ .s), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_19__/* .TasksService */ .w), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_20__/* .ToastrService */ .t));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: ProjectModuleMutationComponent,
        selectors: [["ngx-project-module-mutation"]],
        inputs: {
          createModule: "createModule",
          projectModule: "projectModule",
          project: "project"
        },
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
        decls: 112,
        vars: 87,
        consts: [["startDatePicker", ""], ["endDatePicker", ""], [1, "main"], [1, "d-flex", "flex-column"], [1, "cancel"], ["role", "button", 1, "fas", "fa-times", 3, "click"], [1, "title"], [1, "body"], [3, "formGroup"], [1, "row"], [1, "col-sm-6"], [1, "form-group"], [1, "label"], ["formControlName", "projectId", 3, "placeholder", "skipGlobalChange", "defaultSelected", "showAllOption"], ["formControlName", "status", "fullWidth", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "col-sm-12"], [3, "selectedChange", "selectedEmployeeIds", "allEmployees"], ["formControlName", "teams", "multiple", "", "fullWidth", "", 3, "selectedChange", "selected", "placeholder"], ["formControlName", "name", "type", "text", "nbInput", "", 1, "name-input", 3, "placeholder"], ["formControlName", "parentId", "fullWidth", "", 3, "placeholder"], [1, "employees", 3, "selectedChange", "selectedEmployeeIds", "allEmployees"], ["formControlName", "organizationSprints", "multiple", "", "fullWidth", "", 3, "placeholder"], ["name", "taskId", "formControlName", "tasks", 3, "projectId", "multiple", "required"], ["for", "startDate", 1, "label"], ["formControlName", "startDate", "type", "text", "nbInput", "", "id", "startDate", "fullWidth", "", 3, "placeholder", "nbDatepicker"], ["for", "endDate", 1, "label"], ["formControlName", "endDate", "type", "text", "nbInput", "", "id", "endDate", "fullWidth", "", 3, "placeholder", "nbDatepicker", "min"], ["formControlName", "isFavorite", 1, "favorite-switch"], ["formControlName", "description", 1, "description", 3, "config"], [1, "text-left"], ["status", "basic", "outline", "", "nbButton", "", 1, "mr-3", 3, "click"], ["status", "success", "nbButton", "", 3, "click", "disabled"], [3, "value"]],
        template: function ProjectModuleMutationComponent_Template(rf, ctx) {
          if (rf & 1) {
            const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-card", 2)(1, "nb-card-header", 3)(2, "div", 4)(3, "i", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function ProjectModuleMutationComponent_Template_i_click_3_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx.dialogRef.close());
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(4, "h5", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(6, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(7, "nb-card-body", 7)(8, "form", 8)(9, "div", 9)(10, "div", 10)(11, "div", 11)(12, "label", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(14, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(15, "ga-project-selector", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(16, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(17, "div", 10)(18, "div", 11)(19, "label", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(21, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(22, "nb-select", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(23, ProjectModuleMutationComponent_nb_option_23_Template, 2, 2, "nb-option", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(24, "div", 9)(25, "div", 16)(26, "div", 11)(27, "ga-employee-multi-select", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("selectedChange", function ProjectModuleMutationComponent_Template_ga_employee_multi_select_selectedChange_27_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx.onMembersSelected($event));
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(28, "div", 16)(29, "div", 11)(30, "label", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(31);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(32, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(33, "nb-select", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(34, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("selectedChange", function ProjectModuleMutationComponent_Template_nb_select_selectedChange_33_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx.onTeamsSelected($event));
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(35, ProjectModuleMutationComponent_nb_option_35_Template, 2, 2, "nb-option", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(36, "div", 9)(37, "div", 10)(38, "div", 11)(39, "label", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(40);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(41, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(42, "input", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(43, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(44, "div", 10)(45, "div", 11)(46, "label", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(47);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(48, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(49, "nb-select", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(50, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(51, ProjectModuleMutationComponent_nb_option_51_Template, 2, 2, "nb-option", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(52, "div", 9)(53, "div", 10)(54, "div", 11)(55, "label", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(56);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(57, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(58, "ga-employee-multi-select", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("selectedChange", function ProjectModuleMutationComponent_Template_ga_employee_multi_select_selectedChange_58_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx.onManagersSelected($event));
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(59, "div", 10)(60, "div", 11)(61, "label", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(62);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(63, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(64, "nb-select", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(65, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(66, ProjectModuleMutationComponent_nb_option_66_Template, 2, 2, "nb-option", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(67, "div", 9)(68, "div", 16)(69, "div", 11)(70, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(71);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(72, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(73, "ga-task-selector", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(74, "div", 9)(75, "div", 10)(76, "div", 11)(77, "label", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(78);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(79, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(80, "input", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(81, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(82, "nb-datepicker", null, 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(84, "div", 10)(85, "div", 11)(86, "label", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(87);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(88, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(89, "input", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(90, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(91, "nb-datepicker", null, 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(93, "div", 9)(94, "div", 16)(95, "nb-toggle", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(96);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(97, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(98, "div", 9)(99, "div", 16)(100, "div", 11)(101, "label", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(102);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(103, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(104, "ckeditor", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(105, "nb-card-footer", 30)(106, "button", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function ProjectModuleMutationComponent_Template_button_click_106_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx.dialogRef.close());
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(107);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(108, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(109, "button", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function ProjectModuleMutationComponent_Template_button_click_109_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx.onSave());
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(110);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(111, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
          }
          if (rf & 2) {
            const startDatePicker_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(83);
            const endDatePicker_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(92);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(6, 43, !ctx.createModule ? "Edit Module" : "Add Module"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("formGroup", ctx.form);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(14, 45, "PROJECT_MANAGEMENT_PAGE.PROJECT_MODULE.PROJECT"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(16, 47, "PROJECT_MANAGEMENT_PAGE.PROJECT_MODULE.SELECT_PROJECT"))("skipGlobalChange", true)("defaultSelected", false)("showAllOption", false);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(21, 49, "PROJECT_MANAGEMENT_PAGE.PROJECT_MODULE.STATUS"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx.projectModuleStatuses);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("selectedEmployeeIds", ctx.selectedEmployeeIds)("allEmployees", ctx.employees);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(32, 51, "PROJECT_MANAGEMENT_PAGE.PROJECT_MODULE.SELECT_TEAMS"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("selected", ctx.selectedTeams)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(34, 53, "PROJECT_MANAGEMENT_PAGE.PROJECT_MODULE.CHOOSE_TEAMS"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx.teams);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(41, 55, "PROJECT_MANAGEMENT_PAGE.PROJECT_MODULE.NAME"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(43, 57, "PROJECT_MANAGEMENT_PAGE.PROJECT_MODULE.ENTER_NAME"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(48, 59, "PROJECT_MANAGEMENT_PAGE.PROJECT_MODULE.PARENT_MODULE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(50, 61, "PROJECT_MANAGEMENT_PAGE.PROJECT_MODULE.SELECT_PARENT"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx.availableParentModules);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(57, 63, "PROJECT_MANAGEMENT_PAGE.PROJECT_MODULE.MANAGER"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("selectedEmployeeIds", ctx.selectedManagerIds)("allEmployees", ctx.employees);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(63, 65, "PROJECT_MANAGEMENT_PAGE.PROJECT_MODULE.ORGANIZATION_SPRINTS"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(65, 67, "PROJECT_MANAGEMENT_PAGE.PROJECT_MODULE.SELECT_SPRINTS"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx.organizationSprints);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(72, 69, "TIMER_TRACKER.SELECT_TASK"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("projectId", ctx.form.get("projectId").value)("multiple", true)("required", ctx.organization == null ? null : ctx.organization.requireTask);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(79, 71, "PROJECT_MANAGEMENT_PAGE.PROJECT_MODULE.START_DATE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(81, 73, "PROJECT_MANAGEMENT_PAGE.PROJECT_MODULE.SELECT_START_DATE"))("nbDatepicker", startDatePicker_r6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(88, 75, "PROJECT_MANAGEMENT_PAGE.PROJECT_MODULE.END_DATE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(90, 77, "PROJECT_MANAGEMENT_PAGE.PROJECT_MODULE.SELECT_END_DATE"))("nbDatepicker", endDatePicker_r7)("min", ctx.form.get("startDate").value);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(97, 79, "PROJECT_MANAGEMENT_PAGE.PROJECT_MODULE.IS_FAVORITE"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(103, 81, "TASKS_PAGE.TASKS_DESCRIPTION"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("config", ctx.ckConfig);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(108, 83, "BUTTONS.CANCEL"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("disabled", ctx.form.invalid);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(111, 85, "BUTTONS.SAVE"), " ");
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_21__/* .NgForOf */ .Sq, _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* ["ɵNgNoValidate"] */ .qT, _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .DefaultValueAccessor */ .me, _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .NgControlStatus */ .BC, _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .NgControlStatusGroup */ .cb, _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .RequiredValidator */ .YS, _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .FormGroupDirective */ .j4, _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .FormControlName */ .JD, ckeditor4_angular__WEBPACK_IMPORTED_MODULE_22__/* .CKEditorComponent */ .h, _nebular_theme__WEBPACK_IMPORTED_MODULE_12__/* .NbButtonComponent */ .YP2, _nebular_theme__WEBPACK_IMPORTED_MODULE_12__/* .NbCardComponent */ .SrT, _nebular_theme__WEBPACK_IMPORTED_MODULE_12__/* .NbCardBodyComponent */ .KH5, _nebular_theme__WEBPACK_IMPORTED_MODULE_12__/* .NbCardFooterComponent */ .VDm, _nebular_theme__WEBPACK_IMPORTED_MODULE_12__/* .NbCardHeaderComponent */ .zJv, _nebular_theme__WEBPACK_IMPORTED_MODULE_12__/* .NbDatepickerDirective */ .OA9, _nebular_theme__WEBPACK_IMPORTED_MODULE_12__/* .NbDatepickerComponent */ .k2z, _nebular_theme__WEBPACK_IMPORTED_MODULE_12__/* .NbInputDirective */ .i6h, _nebular_theme__WEBPACK_IMPORTED_MODULE_12__/* .NbToggleComponent */ .YF2, _nebular_theme__WEBPACK_IMPORTED_MODULE_12__/* .NbSelectComponent */ .S81, _nebular_theme__WEBPACK_IMPORTED_MODULE_12__/* .NbOptionComponent */ .ZJ2, _selectors_project_project_project_component__WEBPACK_IMPORTED_MODULE_23__/* .ProjectSelectorComponent */ .a, _employee_employee_multi_select_employee_multi_select_component__WEBPACK_IMPORTED_MODULE_24__/* .EmployeeSelectComponent */ .O, _tasks_task_select_task_task_component__WEBPACK_IMPORTED_MODULE_25__/* .TaskSelectorComponent */ .W, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__/* .TranslatePipe */ .D9],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   i[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n}\n[dir=ltr]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n[dir=rtl]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--gauzy-text-color-1);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(245, 109, 88, 0.3);\n  border-width: 2px;\n  color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(245, 109, 88, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 16px;\n  letter-spacing: 0em;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(126, 126, 143, 0.3);\n  border-width: 2px;\n  color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(126, 126, 143, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(37, 184, 105, 0.3);\n  border-width: 2px;\n  color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(37, 184, 105, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[disabled][_ngcontent-%COMP%], \n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic.btn-disabled[_ngcontent-%COMP%] {\n  background-color: var(--button-outline-basic-disabled-background-color);\n  border-color: var(--button-outline-basic-disabled-border-color);\n  color: var(--button-outline-basic-disabled-text-color);\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].primary.appearance-filled.status-primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  border: unset;\n  background-color: var(--color-primary-transparent-default);\n  box-shadow: var(--gauzy-shadow) 0, 0, 0, 0.15;\n}\n[dir=ltr]   [_nghost-%COMP%]     input, \n[dir=ltr]   [_nghost-%COMP%]     textarea {\n  text-align: start;\n}\n[dir=rtl]   [_nghost-%COMP%]     input, \n[dir=rtl]   [_nghost-%COMP%]     textarea {\n  text-align: end;\n}\n[_nghost-%COMP%]     input, \n[_nghost-%COMP%]     nb-select.appearance-outline.status-basic .select-button, \n[_nghost-%COMP%]     .ng-select .ng-select-container {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n  height: 42px !important;\n}\n[_nghost-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder, \n[_nghost-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {\n  top: unset !important;\n}\n[_nghost-%COMP%]     label, \n[_nghost-%COMP%]     .label {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  color: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]     textarea {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n}\n[_nghost-%COMP%]     .ng-select .ng-select-container input, \n[_nghost-%COMP%]     nb-tag-list input {\n  background-color: unset !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n}\n\n.body[_ngcontent-%COMP%] {\n  width: 550px;\n}\n\n.description[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  height: 150px;\n}\n\n.name-input[_ngcontent-%COMP%] {\n  min-width: 100%;\n}\n\n.estimate-inputs[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.estimate-inputs[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 30%;\n  padding: 0.4rem !important;\n}\n\n.nb-radio[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n}"]
      });
    }
  };
  ProjectModuleMutationComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_26__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__/* .UntilDestroy */ .d)({
    checkProperties: true
  }), (0,tslib__WEBPACK_IMPORTED_MODULE_26__/* .__metadata */ .Sn)("design:paramtypes", [_nebular_theme__WEBPACK_IMPORTED_MODULE_12__/* .NbDialogRef */ .ybQ, _angular_forms__WEBPACK_IMPORTED_MODULE_5__/* .UntypedFormBuilder */ .ze, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_13__/* .Store */ .il, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__/* .TranslateService */ .c$, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_15__/* .EmployeesService */ .r, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_16__/* .OrganizationTeamsService */ .F, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_17__/* .OrganizationProjectModuleService */ .k, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_18__/* .SprintService */ .s, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_19__/* .TasksService */ .w, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_20__/* .ToastrService */ .t])], ProjectModuleMutationComponent);
  return ProjectModuleMutationComponent;
})();


/***/ }),

/***/ 34060:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: () => (/* binding */ GithubService)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73014);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(80189);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26024);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64913);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(26860);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(45715);







let GithubService = /*#__PURE__*/(() => {
  class GithubService {
    constructor(_http) {
      this._http = _http;
    }
    /**
     * Add a GitHub app installation.
     * @param input The input data for the GitHub app installation.
     * @returns A promise that resolves to the integration tenant object.
     */
    addInstallationApp(input) {
      var _this = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(function* () {
        const url = `${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/integration/github/install`;
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__/* .firstValueFrom */ ._)(_this._http.post(url, input));
      })();
    }
    /**
     * Get GitHub repositories for a specific integration.
     *
     * @param {string} integrationId - The ID of the integration.
     * @param {IBasePerTenantAndOrganizationEntityModel} query - Query parameters for the request.
     * @returns {Observable<IGithubRepositoryResponse>} An observable that emits GitHub repositories.
     */
    getRepositories(integrationId, query) {
      const url = `${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/integration/github/${integrationId}/repositories`;
      const params = (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_3__/* .toParams */ .SV)(query);
      return this._http.get(url, {
        params
      });
    }
    /**
     * Get GitHub repository issues for a specific integration, owner, and repository.
     *
     * @param {string} integrationId - The ID of the integration.
     * @param {string} owner - The owner (username or organization) of the repository.
     * @param {string} repo - The name of the repository.
     * @param {IBasePerTenantAndOrganizationEntityModel} query - Query parameters for the request.
     * @returns {Observable<IGithubIssue[]>} An observable that emits GitHub issues.
     */
    getRepositoryIssues(integrationId, owner, repo, query) {
      const url = `${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/integration/github/${integrationId}/${owner}/${repo}/issues`;
      const params = (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_3__/* .toParams */ .SV)(query);
      return this._http.get(url, {
        params
      });
    }
    /**
     * Synchronize a GitHub repository.
     * @param input The synchronization input data.
     * @returns An Observable of the synchronized IntegrationMap.
     */
    syncGithubRepository(input) {
      const url = `${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/integration/github/repository/sync`;
      return this._http.post(url, input);
    }
    /**
     * Update a GitHub repository's information.
     *
     * @param id - A string representing the unique identifier of the GitHub repository to be updated.
     * @param input - An object containing the data to update the GitHub repository.
     * @returns An Observable that emits the updated GitHub repository data.
     */
    updateGithubRepository(id, input) {
      // Construct the URL for the API endpoint.
      const url = `${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/integration/github/repository/${id}`;
      // Send an HTTP PUT request to update the GitHub repository using the provided input.
      return this._http.put(url, input);
    }
    /**
     * Auto-synchronize GitHub issues for a specific repository.
     *
     * @param integrationId - The ID of the integration tenant.
     * @param repository - The GitHub repository to auto-sync issues for.
     * @param options - Additional options for synchronization, including organization, tenant, and an optional project.
     * @returns An Observable representing the result of the auto-synchronization.
     */
    autoSyncIssues(integrationId, repository, options) {
      return this._http.post(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/integration/github/${integrationId}/auto-sync/issues`, {
        integrationId,
        repository,
        projectId: options.projectId,
        organizationId: options.organizationId,
        tenantId: options.tenantId
      });
    }
    /**
     * Sync GitHub issues and labels for a given organization and integration.
     *
     * @param integrationId - The ID of the integration.
     * @param options - An object containing organizationId, tenantId, and issues.
     * @returns An observable that represents the HTTP POST request to sync issues and labels.
     */
    manualSyncIssues(integrationId, repository, options) {
      return this._http.post(`${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/integration/github/${integrationId}/manual-sync/issues`, {
        integrationId,
        repository,
        issues: this._mapIssuePayload(options.issues),
        projectId: options.projectId,
        organizationId: options.organizationId,
        tenantId: options.tenantId
      });
    }
    /**
     * Maps a GitHub repository's data to a custom payload object.
     *
     * @param data - The GitHub repository data to map.
     * @returns A custom payload object with selected properties.
     */
    _mapRepositoryPayload(data) {
      const {
        id,
        name,
        full_name,
        owner,
        visibility,
        open_issues_count
      } = data;
      return {
        id,
        name,
        full_name,
        owner: {
          login: owner.login
        },
        visibility,
        open_issues_count,
        private: data.private
      };
    }
    /**
     * Map GitHub issue payload data to the required format.
     *
     * @param data - An array of GitHub issues.
     * @returns An array of mapped issue payload data.
     */
    _mapIssuePayload(data) {
      return data.map(({
        id,
        number,
        title,
        state,
        body,
        labels = []
      }) => ({
        id,
        number,
        title,
        state,
        body,
        labels
      }));
    }
    static {
      this.ɵfac = function GithubService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || GithubService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵinject"] */ .KVO(_angular_common_http__WEBPACK_IMPORTED_MODULE_5__/* .HttpClient */ .Qq));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdefineInjectable"] */ .jDH({
        token: GithubService,
        factory: GithubService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return GithubService;
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

/***/ 38226:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   z: () => (/* binding */ ProjectModuleTableComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73014);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(55598);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(80189);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(41992);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(39855);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(56383);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(41598);
/* harmony import */ var angular2_smart_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52345);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(19223);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(15480);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(77096);
/* harmony import */ var _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38546);
/* harmony import */ var _table_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(77485);
/* harmony import */ var _table_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(35657);
/* harmony import */ var _table_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(47825);
/* harmony import */ var _table_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(39457);
/* harmony import */ var _table_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(23249);
/* harmony import */ var _user_forms_delete_confirmation_delete_confirmation_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(55101);
/* harmony import */ var _project_module_mutation_project_module_mutation_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(28722);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _gauzy_button_action_gauzy_button_action_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(45293);


















function ProjectModuleTableComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 7)(1, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function ProjectModuleTableComponent_ng_template_6_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r2.onEditProjectModuleDialog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(2, "nb-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(5, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function ProjectModuleTableComponent_ng_template_6_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r2.delete());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(7, "nb-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("disabled", ctx_r2.disableButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(4, 4, "BUTTONS.EDIT"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("disabled", ctx_r2.disableButton)("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(6, 6, "BUTTONS.DELETE"));
  }
}
let ProjectModuleTableComponent = /*#__PURE__*/(() => {
  let ProjectModuleTableComponent = class ProjectModuleTableComponent extends _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_1__/* .TranslationBaseComponent */ .K {
    get projectId() {
      return this._projectId;
    }
    set projectId(value) {
      if (value !== this._projectId) {
        this._projectId = value;
        this.loadModules();
      }
    }
    constructor(translateService, dialogService, toastrService, organizationProjectModuleService) {
      super(translateService);
      this.translateService = translateService;
      this.dialogService = dialogService;
      this.toastrService = toastrService;
      this.organizationProjectModuleService = organizationProjectModuleService;
      this.modules = [];
      this.smartTableSource = new angular2_smart_table__WEBPACK_IMPORTED_MODULE_2__/* .LocalDataSource */ .h0();
      this.loading = true;
      this.disableButton = true;
    }
    ngOnInit() {
      this._applyTranslationOnSmartTable();
      this._subscribeToModuleUpdates();
      this._loadSmartTableSettings();
    }
    /**
     * Loads project modules for the given projectId.
     */
    loadModules() {
      var _this = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(function* () {
        if (!_this.projectId) {
          return;
        }
        _this.loading = true;
        try {
          const {
            items
          } = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_4__/* .firstValueFrom */ ._)(_this.organizationProjectModuleService.getAllModulesByProjectId({
            projectId: _this.projectId
          }, ['teams', 'teams.members', 'teams.members.employee', 'teams.members.employee.user', 'members', 'members.employee', 'members.employee.user', 'tasks', 'parent']));
          _this.modules = (items || []).map(module => {
            return {
              ...module,
              parentName: module.parent ? module.parent.name : '-',
              managers: _this.getProjectModuleManagers(module),
              employeesMergedTeams: _this.getNonManagerEmployees(module)
            };
          });
          _this.smartTableSource.load(_this.modules);
        } catch (error) {
          _this.toastrService.danger('TOASTR.MESSAGE.SOMETHING_BAD_HAPPENED');
        } finally {
          _this.loading = false;
        }
      })();
    }
    /**
     * Configures the settings for the Smart Table.
     */
    _loadSmartTableSettings() {
      this.settingsSmartTable = {
        actions: false,
        columns: {
          name: {
            title: this.getTranslation('ORGANIZATIONS_PAGE.NAME'),
            type: 'string'
          },
          isFavorite: {
            title: 'isFavorite',
            type: 'custom',
            width: '5%',
            isFilterable: false,
            renderComponent: _table_components__WEBPACK_IMPORTED_MODULE_5__/* .ToggleSwitcherComponent */ .F,
            componentInitFunction: (instance, cell) => {
              const module = cell.getRow().getData();
              instance.label = false;
              instance.value = module.isFavorite;
              // Update the module's isFavorite status
              instance.onSwitched.subscribe(toggle => {
                this.updateModule(module.id, {
                  ...module,
                  isFavorite: toggle
                });
              });
            }
          },
          parentName: {
            title: this.getTranslation('PROJECT_MANAGEMENT_PAGE.PROJECT_MODULE.PARENT_MODULE'),
            type: 'string',
            class: 'text-wrap',
            isFilterable: false
          },
          status: {
            title: this.getTranslation('TASKS_PAGE.TASKS_STATUS'),
            type: 'custom',
            width: '10%',
            isFilterable: false,
            renderComponent: _table_components__WEBPACK_IMPORTED_MODULE_6__/* .StatusViewComponent */ .N,
            componentInitFunction: (instance, cell) => {
              instance.value = cell.getValue();
            }
          },
          startDate: {
            title: this.getTranslation('ORGANIZATIONS_PAGE.EDIT.START_DATE'),
            type: 'custom',
            isFilterable: false,
            renderComponent: _table_components__WEBPACK_IMPORTED_MODULE_7__/* .DateViewComponent */ .l,
            componentInitFunction: (instance, cell) => {
              instance.value = cell.getValue();
            }
          },
          endDate: {
            title: this.getTranslation('ORGANIZATIONS_PAGE.EDIT.END_DATE'),
            type: 'custom',
            isFilterable: false,
            renderComponent: _table_components__WEBPACK_IMPORTED_MODULE_7__/* .DateViewComponent */ .l,
            componentInitFunction: (instance, cell) => {
              instance.value = cell.getValue();
            }
          },
          managers: {
            title: this.getTranslation('ORGANIZATIONS_PAGE.EDIT.TEAMS_PAGE.MANAGERS'),
            type: 'custom',
            isFilterable: false,
            renderComponent: _table_components__WEBPACK_IMPORTED_MODULE_8__/* .EmployeeWithLinksComponent */ .j,
            componentInitFunction: (instance, cell) => {
              instance.rowData = cell.getRow().getData();
              instance.value = cell.getRawValue();
            }
          },
          employeesMergedTeams: {
            title: this.getTranslation('ORGANIZATIONS_PAGE.EDIT.MEMBERS'),
            type: 'custom',
            renderComponent: _table_components__WEBPACK_IMPORTED_MODULE_9__/* .EmployeesMergedTeamsComponent */ .J,
            componentInitFunction: (instance, cell) => {
              instance.rowData = cell.getRow().getData();
              instance.value = cell.getRawValue();
            }
          }
        }
      };
    }
    /**
     * Handles row selection in the Smart Table.
     * @param event Table row selection event.
     */
    selectItem({
      isSelected,
      data
    }) {
      this.selectedItem = isSelected ? data : null;
      this.disableButton = !isSelected;
    }
    /**
     * Deletes the selected module and reloads the table.
     */
    delete() {
      var _this2 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(function* () {
        const result = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_4__/* .firstValueFrom */ ._)(_this2.dialogService.open(_user_forms_delete_confirmation_delete_confirmation_component__WEBPACK_IMPORTED_MODULE_10__/* .DeleteConfirmationComponent */ .u).onClose.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_11__/* .first */ .$)()));
        if (!result) return;
        try {
          yield (0,rxjs__WEBPACK_IMPORTED_MODULE_4__/* .firstValueFrom */ ._)(_this2.organizationProjectModuleService.delete(_this2.selectedItem.id));
          _this2.toastrService.success('TOASTR.MESSAGE.MODULE_DELETED');
          yield _this2.loadModules();
        } catch {
          _this2.toastrService.danger('TOASTR.MESSAGE.SOMETHING_BAD_HAPPENED');
        }
      })();
    }
    /**
     * Opens the edit dialog for the selected project module.
     */
    onEditProjectModuleDialog() {
      var _this3 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(function* () {
        _this3.dialogService.open(_project_module_mutation_project_module_mutation_component__WEBPACK_IMPORTED_MODULE_12__/* .ProjectModuleMutationComponent */ .g, {
          context: {
            projectModule: _this3.selectedItem,
            createModule: false
          }
        });
      })();
    }
    /**
     * Updates a module's properties and reloads the table if successful.
     *
     * @param id Module ID.
     * @param changes Object containing the updated fields.
     */
    updateModule(id, changes) {
      var _this4 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(function* () {
        try {
          yield (0,rxjs__WEBPACK_IMPORTED_MODULE_4__/* .firstValueFrom */ ._)(_this4.organizationProjectModuleService.update(id, changes));
          _this4.toastrService.success('TOASTR.MESSAGE.MODULE_UPDATED');
          yield _this4.loadModules();
        } catch {
          _this4.toastrService.danger('TOASTR.MESSAGE.SOMETHING_BAD_HAPPENED');
        }
      })();
    }
    /**
     * Listens for language changes and triggers the loading of Smart Table settings.
     * Unsubscribes when the component is destroyed.
     */
    _applyTranslationOnSmartTable() {
      this.translateService.onLangChange.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_13__/* .tap */ .M)(() => this._loadSmartTableSettings()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_14__/* .untilDestroyed */ .s)(this)).subscribe();
    }
    /**
     * Retrieves the project managers from the list of members.
     *
     * @param projectModule - The project module containing members.
     * @returns A list of manager employees.
     */
    getProjectModuleManagers(projectModule) {
      return projectModule.members.filter(member => member.isManager).map(member => member.employee);
    }
    /**
     * Retrieves the non-manager employees from the list of members.
     *
     * @param projectModule - The project module containing members.
     * @returns A list of non-manager employees as merged teams.
     */
    getNonManagerEmployees(projectModule) {
      return [projectModule.members.filter(member => !member.isManager).map(member => member.employee)];
    }
    /**
     * Subscribes to module updates and automatically reloads the table when changes occur.
     */
    _subscribeToModuleUpdates() {
      this.organizationProjectModuleService.moduleUpdated$.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_14__/* .untilDestroyed */ .s)(this)).subscribe(() => this.loadModules());
    }
    static {
      this.ɵfac = function ProjectModuleTableComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || ProjectModuleTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__/* .TranslateService */ .c$), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_nebular_theme__WEBPACK_IMPORTED_MODULE_16__/* .NbDialogService */ .S0W), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_17__/* .ToastrService */ .t), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_18__/* .OrganizationProjectModuleService */ .k));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: ProjectModuleTableComponent,
        selectors: [["ngx-project-module-table"]],
        inputs: {
          projectId: "projectId"
        },
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
        decls: 8,
        vars: 6,
        consts: [["variantTable", ""], ["actionButtons", ""], ["nbSpinnerStatus", "primary", "nbSpinnerSize", "large", 1, "main-wrapper", 3, "nbSpinner"], [1, "gauzy-button-container"], [3, "hasLayoutSelector", "buttonTemplate", "isDisable"], [1, "table-scroll-container"], [2, "cursor", "pointer", 3, "userRowSelect", "settings", "source"], [1, "actions"], ["nbButton", "", "status", "basic", "size", "small", 1, "action", "primary", 3, "click", "disabled"], ["icon", "edit-outline"], ["nbButton", "", "status", "basic", "size", "small", 1, "action", 3, "click", "disabled", "nbTooltip"], ["status", "danger", "icon", "trash-2-outline"]],
        template: function ProjectModuleTableComponent_Template(rf, ctx) {
          if (rf & 1) {
            const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 2)(1, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(2, "ngx-gauzy-button-action", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(3, "div", 5)(4, "angular2-smart-table", 6, 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("userRowSelect", function ProjectModuleTableComponent_Template_angular2_smart_table_userRowSelect_4_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx.selectItem($event));
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(6, ProjectModuleTableComponent_ng_template_6_Template, 8, 8, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplateRefExtractor"] */ .C5r);
          }
          if (rf & 2) {
            const actionButtons_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("nbSpinner", ctx.loading);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("hasLayoutSelector", false)("buttonTemplate", actionButtons_r4)("isDisable", ctx.disableButton);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("settings", ctx.settingsSmartTable)("source", ctx.smartTableSource);
          }
        },
        dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_16__/* .NbSpinnerDirective */ .zwc, _nebular_theme__WEBPACK_IMPORTED_MODULE_16__/* .NbButtonComponent */ .YP2, _nebular_theme__WEBPACK_IMPORTED_MODULE_16__/* .NbIconComponent */ .tHu, angular2_smart_table__WEBPACK_IMPORTED_MODULE_2__/* .Angular2SmartTableComponent */ .T9, _gauzy_button_action_gauzy_button_action_component__WEBPACK_IMPORTED_MODULE_19__/* .GauzyButtonActionComponent */ .A, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__/* .TranslatePipe */ .D9],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.action[_ngcontent-%COMP%] {\n  box-shadow: var(--gauzy-shadow);\n  border: none;\n}\n.action[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}\n.action.info[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: var(--color-info-default);\n  color: white;\n  border-color: var(--color-info-default);\n}\n.action.info-text-1[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  color: var(--color-info-default);\n}\n.action.secondary[_ngcontent-%COMP%] {\n  color: #7e7e8f;\n}\n.action.success[_ngcontent-%COMP%] {\n  color: var(--color-success-default);\n}\n.action.warning[_ngcontent-%COMP%] {\n  color: rgb(245, 109, 88);\n}\n.action.orange[_ngcontent-%COMP%] {\n  color: rgb(255, 171, 45);\n}\n.action.primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n}\n.action.primary.soft[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: rgba(110, 73, 232, 0.1);\n}\n.action.select-nb[_ngcontent-%COMP%]     {\n  box-shadow: none;\n}\n.action.select-nb[_ngcontent-%COMP%]     .select-button {\n  box-shadow: var(--gauzy-shadow);\n  background: rgb(245, 245, 245);\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n.actions[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-2);\n  border-radius: var(--button-rectangle-border-radius);\n  padding: 2px 4px !important;\n}\n\n.gauzy-button-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n.card-custom-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n[_nghost-%COMP%]     input {\n  border-radius: var(--border-radius);\n  box-shadow: var(--gauzy-shadow) inset;\n}\n\n[_nghost-%COMP%]   ngx-gauzy-button-action[_ngcontent-%COMP%]     .transition-container span {\n  background-color: unset;\n}\n[_nghost-%COMP%]   ngx-gauzy-button-action[_ngcontent-%COMP%]     .actions-container {\n  padding-top: 0;\n}"]
      });
    }
  };
  ProjectModuleTableComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_20__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_14__/* .UntilDestroy */ .d)({
    checkProperties: true
  }), (0,tslib__WEBPACK_IMPORTED_MODULE_20__/* .__metadata */ .Sn)("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__/* .TranslateService */ .c$, _nebular_theme__WEBPACK_IMPORTED_MODULE_16__/* .NbDialogService */ .S0W, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_17__/* .ToastrService */ .t, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_18__/* .OrganizationProjectModuleService */ .k])], ProjectModuleTableComponent);
  return ProjectModuleTableComponent;
})();


/***/ }),

/***/ 41809:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   w: () => (/* binding */ ProjectOrganizationGridDetailsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14572);
/* harmony import */ var _contact_links_contact_links_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(55129);
/* harmony import */ var _external_link_external_link_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71021);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19223);
/* harmony import */ var _pipes_date_format_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(11031);






const _c0 = a0 => ({
  website: a0
});
function ProjectOrganizationGridDetailsComponent_span_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1, "\u2014");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
}
function ProjectOrganizationGridDetailsComponent_ngx_contact_links_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(0, "ngx-contact-links", 7);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("value", ctx_r0.rowData == null ? null : ctx_r0.rowData.organizationContact);
  }
}
function ProjectOrganizationGridDetailsComponent_gauzy_external_link_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(0, "gauzy-external-link", 8);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("rowData", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction1"] */ .eq3(1, _c0, ctx_r0.rowData == null ? null : ctx_r0.rowData.projectUrl));
  }
}
function ProjectOrganizationGridDetailsComponent_span_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1, "\u2014");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
}
let ProjectOrganizationGridDetailsComponent = /*#__PURE__*/(() => {
  class ProjectOrganizationGridDetailsComponent {
    static {
      this.ɵfac = function ProjectOrganizationGridDetailsComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || ProjectOrganizationGridDetailsComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: ProjectOrganizationGridDetailsComponent,
        selectors: [["gauzy-project-organization-grid-details"]],
        inputs: {
          value: "value",
          rowData: "rowData"
        },
        standalone: false,
        decls: 50,
        vars: 40,
        consts: [[1, "project-container"], [1, "detail-row"], [1, "detail-left"], [1, "detail-right"], [4, "ngIf"], [3, "value", 4, "ngIf"], [3, "rowData", 4, "ngIf"], [3, "value"], [3, "rowData"]],
        template: function ProjectOrganizationGridDetailsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 0)(1, "div", 1)(2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(4, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(5, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(7, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(8, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(9, "div", 1)(10, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(12, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(13, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(15, "titlecase");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(16, "div", 1)(17, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(19, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(20, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(21, ProjectOrganizationGridDetailsComponent_span_21_Template, 2, 0, "span", 4)(22, ProjectOrganizationGridDetailsComponent_ngx_contact_links_22_Template, 1, 1, "ngx-contact-links", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(23, "div", 1)(24, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(26, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(27, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(29, "dateFormat");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(30, "div", 1)(31, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(32);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(33, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(34, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(35);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(36, "div", 1)(37, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(38);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(39, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(40, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(41);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(42, "dateFormat");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(43, "div", 1)(44, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(45);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(46, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(47, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(48, ProjectOrganizationGridDetailsComponent_gauzy_external_link_48_Template, 1, 3, "gauzy-external-link", 6)(49, ProjectOrganizationGridDetailsComponent_span_49_Template, 2, 0, "span", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(4, 16, "ORGANIZATIONS_PAGE.BILLING"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", (ctx.rowData == null ? null : ctx.rowData.billable) ? _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(7, 18, "BUTTONS.YES") : _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(8, 20, "BUTTONS.NO"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(12, 22, "FORM.PLACEHOLDERS.OWNER"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", (ctx.rowData == null ? null : ctx.rowData.owner) ? _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(15, 24, ctx.rowData == null ? null : ctx.rowData.owner) : "\u2014", " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(19, 26, "ORGANIZATIONS_PAGE.EDIT.CONTACT"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", !(ctx.rowData == null ? null : ctx.rowData.organizationContact));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.rowData == null ? null : ctx.rowData.organizationContact);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(26, 28, "ORGANIZATIONS_PAGE.EDIT.END_DATE"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", (ctx.rowData == null ? null : ctx.rowData.endDate) ? _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(29, 30, ctx.rowData == null ? null : ctx.rowData.endDate) : "\u2014", " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(33, 32, "ORGANIZATIONS_PAGE.EDIT.CURRENCY"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", (ctx.rowData == null ? null : ctx.rowData.currency) ? ctx.rowData == null ? null : ctx.rowData.currency : "\u2014", " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(39, 34, "ORGANIZATIONS_PAGE.EDIT.START_DATE"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", (ctx.rowData == null ? null : ctx.rowData.startDate) ? _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(42, 36, ctx.rowData == null ? null : ctx.rowData.startDate) : "\u2014", " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(46, 38, "FORM.LABELS.PROJECT_URL"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.rowData == null ? null : ctx.rowData.projectUrl);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", !(ctx.rowData == null ? null : ctx.rowData.projectUrl));
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .NgIf */ .bT, _contact_links_contact_links_component__WEBPACK_IMPORTED_MODULE_2__/* .ContactLinksComponent */ .L, _external_link_external_link_component__WEBPACK_IMPORTED_MODULE_3__/* .ExternalLinkComponent */ .P, _angular_common__WEBPACK_IMPORTED_MODULE_1__/* .TitleCasePipe */ .PV, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__/* .TranslatePipe */ .D9, _pipes_date_format_pipe__WEBPACK_IMPORTED_MODULE_5__/* .DateFormatPipe */ .a],
        styles: [".project-container[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n  display: flex;\n  flex-direction: column;\n  padding: 10px;\n  row-gap: 5px;\n  border-radius: 4px;\n}\n.project-container[_ngcontent-%COMP%]   .detail-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.project-container[_ngcontent-%COMP%]   .detail-row[_ngcontent-%COMP%]   .detail-left[_ngcontent-%COMP%] {\n  border-radius: var(--border-radius);\n  color: var(--gauzy-text-color-2);\n  background-color: rgba(126, 126, 143, 0.05);\n  padding: 5px 15px 5px 10px;\n  width: 5.25rem;\n}"]
      });
    }
  }
  return ProjectOrganizationGridDetailsComponent;
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

/***/ 47049:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ SyncTags)
/* harmony export */ });
/**
 * Sync tag constants used to categorize synchronization sources.
 */
const SyncTags = {
  GITHUB: 'GitHub',
  GAUZY: 'Gauzy'
};

/***/ }),

/***/ 51681:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   t: () => (/* binding */ ProjectOrganizationEmployeesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9620);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14572);
/* harmony import */ var _directives_img_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71466);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19223);






const _c0 = a0 => ({
  member: a0
});
function ProjectOrganizationEmployeesComponent_div_0_ng_container_7_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainer"] */ .eu8(0);
  }
}
function ProjectOrganizationEmployeesComponent_div_0_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, ProjectOrganizationEmployeesComponent_div_0_ng_container_7_ng_container_1_Template, 1, 0, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const member_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    const employee_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngTemplateOutlet", employee_r2)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction1"] */ .eq3(2, _c0, member_r1));
  }
}
function ProjectOrganizationEmployeesComponent_div_0_ng_container_9_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainer"] */ .eu8(0);
  }
}
function ProjectOrganizationEmployeesComponent_div_0_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, ProjectOrganizationEmployeesComponent_div_0_ng_container_9_ng_container_1_Template, 1, 0, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const member_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    const employee_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngTemplateOutlet", employee_r2)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction1"] */ .eq3(2, _c0, member_r3));
  }
}
function ProjectOrganizationEmployeesComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 2)(1, "div", 3)(2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(5, "div", 5)(6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(7, ProjectOrganizationEmployeesComponent_div_0_ng_container_7_Template, 2, 4, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(8, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(9, ProjectOrganizationEmployeesComponent_div_0_ng_container_9_Template, 2, 4, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(4, 5, "ORGANIZATIONS_PAGE.EDIT.MEMBERS"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx_r3.employeesFirstHalf)("ngForTrackBy", ctx_r3.trackByEmployeeId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx_r3.employeesLastHalf)("ngForTrackBy", ctx_r3.trackByEmployeeId);
  }
}
function ProjectOrganizationEmployeesComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function ProjectOrganizationEmployeesComponent_ng_template_1_Template_a_click_0_listener() {
      const member_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r5).member;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r3.edit(member_r6 == null ? null : member_r6.employee == null ? null : member_r6.employee.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(2, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const member_r6 = ctx.member;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("src", member_r6 == null ? null : member_r6.employee == null ? null : member_r6.employee.user == null ? null : member_r6.employee.user.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵsanitizeUrl"] */ .B4B)("alt", member_r6 == null ? null : member_r6.employee == null ? null : member_r6.employee.fullName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(member_r6 == null ? null : member_r6.employee == null ? null : member_r6.employee.fullName);
  }
}
let ProjectOrganizationEmployeesComponent = /*#__PURE__*/(() => {
  class ProjectOrganizationEmployeesComponent {
    constructor(router) {
      this.router = router;
      this.employeesFirstHalf = [];
      this.employeesLastHalf = [];
    }
    /**
     * Lifecycle hook that is called after data-bound properties are initialized.
     * Splits the members into two halves for display.
     */
    ngOnInit() {
      this.splitEmployeesIntoHalves();
    }
    /**
     * Splits the members array into two halves: first half and last half.
     */
    splitEmployeesIntoHalves() {
      const members = this.rowData?.members || [];
      const halfIndex = Math.ceil(members.length / 2);
      this.employeesFirstHalf = members.slice(0, halfIndex);
      this.employeesLastHalf = members.slice(halfIndex);
    }
    /**
     * Navigates to the employee edit page based on the provided employee ID.
     *
     * @param id - The ID of the employee to edit.
     */
    edit(id) {
      if (id) {
        this.router.navigate([`/pages/employees/edit/${id}`]);
      }
    }
    /**
     * Tracks employees by their unique ID to optimize ngFor performance.
     * @param index - The index of the item in the list.
     * @param member - The employee member object.
     * @returns The unique ID of the employee.
     */
    trackByEmployeeId(index, member) {
      return member.employee?.id;
    }
    static {
      this.ɵfac = function ProjectOrganizationEmployeesComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || ProjectOrganizationEmployeesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_router__WEBPACK_IMPORTED_MODULE_1__/* .Router */ .Ix));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: ProjectOrganizationEmployeesComponent,
        selectors: [["gauzy-project-organization-employees"]],
        inputs: {
          value: "value",
          rowData: "rowData"
        },
        standalone: false,
        decls: 3,
        vars: 1,
        consts: [["employee", ""], ["class", "container", 4, "ngIf"], [1, "container"], [1, "row", "header"], [1, "col"], [1, "row", "employee-row"], [1, "col", "employee-column"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "avatar", 3, "click"], [1, "img", 3, "src", "alt"], [1, "ml-1"]],
        template: function ProjectOrganizationEmployeesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(0, ProjectOrganizationEmployeesComponent_div_0_Template, 10, 7, "div", 1)(1, ProjectOrganizationEmployeesComponent_ng_template_1_Template, 4, 3, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplateRefExtractor"] */ .C5r);
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", (ctx.rowData == null ? null : ctx.rowData.members == null ? null : ctx.rowData.members.length) > 0);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__/* .NgForOf */ .Sq, _angular_common__WEBPACK_IMPORTED_MODULE_2__/* .NgIf */ .bT, _angular_common__WEBPACK_IMPORTED_MODULE_2__/* .NgTemplateOutlet */ .T3, _directives_img_directive__WEBPACK_IMPORTED_MODULE_3__/* .ImgDirective */ .z, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__/* .TranslatePipe */ .D9],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.container[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n  border-radius: 4px;\n  padding: 10px;\n  margin: 0;\n}\n\nimg[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n}\n\n.employee-column[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  row-gap: 8px;\n}\n\n[_nghost-%COMP%]   a[_ngcontent-%COMP%] {\n  background-color: var(--color-primary-transparent-100);\n  border-radius: var(--button-rectangle-border-radius);\n  display: inline-block;\n  flex-direction: row;\n  align-items: center;\n  width: fit-content;\n  max-width: 100%;\n  color: var(--text-primary-color);\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 15px;\n  letter-spacing: 0em;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  gap: 8px;\n  text-decoration: none;\n}\n[dir=ltr]   [_nghost-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 3px 9px 3px 3px;\n}\n[dir=rtl]   [_nghost-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 3px 3px 3px 9px;\n}\n[_nghost-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: var(--button-rectangle-border-radius);\n}\n\n.employee-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n\n.col[_ngcontent-%COMP%], \n.row[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n}\n.col.header[_ngcontent-%COMP%], \n.row.header[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 15px;\n  letter-spacing: 0em;\n  color: var(--gauzy-text-color-2);\n}"]
      });
    }
  }
  return ProjectOrganizationEmployeesComponent;
})();

/***/ }),

/***/ 53025:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   J: () => (/* binding */ RepositorySelectorComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(55598);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(10936);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4644);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(90999);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39855);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(79708);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(56891);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(45230);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41598);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(71924);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(34060);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(54263);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(14572);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(55567);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(19223);













function RepositorySelectorComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("input", function RepositorySelectorComponent_ng_template_8_Template_input_input_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      const select_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(select_r3.filter($event.target.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(1, 1, "INTEGRATIONS.GITHUB_PAGE.SEARCH_REPOSITORY"));
  }
}
function RepositorySelectorComponent_ng_template_9_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(2, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG().item;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(item_r4.full_name);
  }
}
function RepositorySelectorComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(0, RepositorySelectorComponent_ng_template_9_ng_container_0_Template, 4, 1, "ng-container", 8);
  }
  if (rf & 2) {
    const item_r4 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", item_r4);
  }
}
function RepositorySelectorComponent_ng_template_10_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(2, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG().item;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(item_r5.full_name);
  }
}
function RepositorySelectorComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(0, RepositorySelectorComponent_ng_template_10_ng_container_0_Template, 4, 1, "ng-container", 8);
  }
  if (rf & 2) {
    const item_r5 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", item_r5);
  }
}
let RepositorySelectorComponent = /*#__PURE__*/(() => {
  let RepositorySelectorComponent = class RepositorySelectorComponent {
    /**
     * Setter for the integration property.
     * Updates the integration and notifies observers with the new value.
     */
    set integration(value) {
      if (value) {
        this._integration = value;
        this.subject$.next(value); // Emit the updated value to observers
      }
    }
    /**
     * Getter for the integration property.
     * Returns the current integration value.
     */
    get integration() {
      return this._integration;
    }
    /**
     * Setter for the sourceId property.
     * Updates the source ID and triggers relevant changes when a valid value is provided.
     */
    set sourceId(val) {
      if (val) {
        // Check if the conversion was successful
        this._sourceId = val;
        this.onChange(this._sourceId); // Trigger the onChange event with the converted number
        this.onTouched(); // Mark the field as touched
        // Handle pre-selected repository if applicable
        if (this.selected) {
          this._preSelectedRepository(this._sourceId); // Pre-select the repository
        }
      }
    }
    /**
     * Getter for the sourceId property.
     * Returns the current source ID value.
     */
    get sourceId() {
      return this._sourceId;
    }
    constructor(_store, _githubService, _errorHandlingService) {
      this._store = _store;
      this._githubService = _githubService;
      this._errorHandlingService = _errorHandlingService;
      this.preSelected = false;
      this.loading = false;
      this.subject$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__/* .Subject */ .B();
      this.organization = this._store.selectedOrganization;
      this.repositories = [];
      /**
       * Placeholder text to guide the user. Defaults to null if not provided.
       */
      this.placeholder = null;
      /**
       * Indicates whether the component is selected. Defaults to false.
       */
      this.selected = false;
      /** */
      this.onChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .bkB();
      this.afterLoad = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .bkB();
      // Implement your onChange and onTouched methods
      this.onChange = () => {};
      this.onTouched = () => {};
      this.subject$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .tap */ .M)(() => this._getRepositories()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__/* .untilDestroyed */ .s)(this)).subscribe();
    }
    ngOnInit() {}
    /**
     * Pre-selects a repository based on the provided source ID.
     *
     * @param sourceId - The ID of the source repository to pre-select.
     */
    _preSelectedRepository(sourceId) {
      const repository = this.repositories.find(repo => repo.id === sourceId);
      if (repository) {
        this.selectRepository(repository); // Select the found repository
      }
    }
    /**
     * Fetches repositories for a given integration and organization.
     */
    _getRepositories() {
      if (!this.integration) return; // Ensure a valid integration is present
      this.loading = true;
      // Destructure required properties from the integration object
      const {
        id: integrationId,
        organizationId,
        tenantId
      } = this.integration;
      // Fetch the repositories using the integration details
      const repositories$ = this._githubService.getRepositories(integrationId, {
        organizationId,
        tenantId
      });
      this.repositories$ = repositories$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .map */ .T)(({
        repositories
      }) => repositories),
      // Update component state with fetched repositories
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .tap */ .M)(repositories => {
        this.repositories = repositories;
        this.afterLoad.emit(this.repositories || []);
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .catchError */ .W)(error => {
        // Handle and log errors
        this._errorHandlingService.handleError(error);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)([]);
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .finalize */ .j)(() => {
        // Set loading to false once finished
        this.loading = false;
      }),
      // Handle component lifecycle to avoid memory leaks
      (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__/* .untilDestroyed */ .s)(this));
    }
    /**
     * Selects a GitHub repository and emits the selection event.
     *
     * @param repository - The selected GitHub repository.
     */
    selectRepository(repository) {
      if (repository) {
        this.onChanged.emit(repository); // Emit the selected repository
      }
    }
    /**
     * Write the value (repository ID) into the component.
     *
     * @param value - The value to be written, representing the repository ID.
     */
    writeValue(value) {
      this._sourceId = value; // Assign the provided value to _sourceId
    }
    /**
     * Register a function to call when the control's value changes.
     *
     * @param fn - The function that handles value changes.
     */
    registerOnChange(fn) {
      this.onChange = fn;
    }
    /**
     * Register a function to call when the control is touched.
     *
     * @param fn - The function that handles touch events.
     */
    registerOnTouched(fn) {
      this.onTouched = fn;
    }
    ngOnDestroy() {}
    static {
      this.ɵfac = function RepositorySelectorComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || RepositorySelectorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_8__/* .Store */ .il), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_9__/* .GithubService */ .p), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_10__/* .ErrorHandlingService */ .X));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: RepositorySelectorComponent,
        selectors: [["ngx-github-repository-selector"]],
        inputs: {
          placeholder: "placeholder",
          selected: "selected",
          integration: "integration",
          sourceId: "sourceId"
        },
        outputs: {
          onChanged: "onChanged",
          afterLoad: "afterLoad"
        },
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵProvidersFeature"] */ .Jv_([{
          provide: _angular_forms__WEBPACK_IMPORTED_MODULE_11__/* .NG_VALUE_ACCESSOR */ .kq,
          useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__/* .forwardRef */ .Rfq)(() => RepositorySelectorComponent),
          multi: true
        }])],
        decls: 11,
        vars: 13,
        consts: [["select", ""], [1, "form-group"], [1, "label"], ["bindLabel", "full_name", "bindValue", "id", "appendTo", "body", "dropdownPosition", "bottom", 1, "mb-2", 3, "ngModelChange", "change", "items", "searchable", "clearable", "loading", "ngModel", "placeholder"], ["ng-header-tmp", ""], ["ng-label-tmp", ""], ["ng-option-tmp", ""], ["type", "search", 1, "form-control", 3, "input", "placeholder"], [4, "ngIf"], ["src", "assets/images/integrations/github.svg"], [1, "ml-1"]],
        template: function RepositorySelectorComponent_Template(rf, ctx) {
          if (rf & 1) {
            const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 1)(1, "label", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(3, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(4, "ng-select", 3, 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(6, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(7, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayListener"] */ .mxI("ngModelChange", function RepositorySelectorComponent_Template_ng_select_ngModelChange_4_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayBindingSet"] */ .DH7(ctx.sourceId, $event) || (ctx.sourceId = $event);
              return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj($event);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("change", function RepositorySelectorComponent_Template_ng_select_change_4_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx.selectRepository($event));
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(8, RepositorySelectorComponent_ng_template_8_Template, 2, 3, "ng-template", 4)(9, RepositorySelectorComponent_ng_template_9_Template, 1, 1, "ng-template", 5)(10, RepositorySelectorComponent_ng_template_10_Template, 1, 1, "ng-template", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(3, 7, "FORM.LABELS.GITHUB_REPOSITORY"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("items", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(6, 9, ctx.repositories$))("searchable", false)("clearable", true)("loading", ctx.loading);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayProperty"] */ .R50("ngModel", ctx.sourceId);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("placeholder", ctx.placeholder || _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(7, 11, "INTEGRATIONS.GITHUB_PAGE.SELECT_REPOSITORY"));
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__/* .NgIf */ .bT, _angular_forms__WEBPACK_IMPORTED_MODULE_11__/* .NgControlStatus */ .BC, _angular_forms__WEBPACK_IMPORTED_MODULE_11__/* .NgModel */ .vS, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__/* .NgSelectComponent */ .vr, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__/* .NgOptionTemplateDirective */ .Uq, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__/* .NgLabelTemplateDirective */ .ZZ, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__/* .NgHeaderTemplateDirective */ .Uc, _angular_common__WEBPACK_IMPORTED_MODULE_12__/* .AsyncPipe */ .Jj, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__/* .TranslatePipe */ .D9],
        styles: ["[_nghost-%COMP%] {\n  min-width: 200px;\n  display: block;\n}\n[_nghost-%COMP%]   nb-select[_ngcontent-%COMP%] {\n  max-width: none;\n}\n[_nghost-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: nb-theme(border-radius);\n  box-shadow: var(--gauzy-shadow);\n  object-fit: cover;\n}"]
      });
    }
  };
  RepositorySelectorComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_15__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__/* .UntilDestroy */ .d)({
    checkProperties: true
  }), (0,tslib__WEBPACK_IMPORTED_MODULE_15__/* .__metadata */ .Sn)("design:paramtypes", [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_8__/* .Store */ .il, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_9__/* .GithubService */ .p, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_10__/* .ErrorHandlingService */ .X])], RepositorySelectorComponent);
  return RepositorySelectorComponent;
})();


/***/ }),

/***/ 63861:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   s: () => (/* binding */ ProjectOrganizationGridComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88326);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26860);
/* harmony import */ var _project_organization_project_organization_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28633);
/* harmony import */ var _visibility_visibility_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(93363);




let ProjectOrganizationGridComponent = /*#__PURE__*/(() => {
  class ProjectOrganizationGridComponent {
    constructor() {
      this._rowData = null;
      this._visibility$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__/* .BehaviorSubject */ .t(null);
    }
    onVisibilityChange(state) {
      this._visibility$.next(state);
    }
    get visibility() {
      if (this._visibility$.getValue() === null) {
        this._visibility$.next(this.rowData.public === null ? false : this.rowData.public);
      }
      return this._visibility$.getValue();
    }
    set rowData(value) {
      if (value) {
        this._rowData = value;
      }
    }
    get rowData() {
      return this._rowData;
    }
    static {
      this.ɵfac = function ProjectOrganizationGridComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || ProjectOrganizationGridComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineComponent"] */ .VBU({
        type: ProjectOrganizationGridComponent,
        selectors: [["gauzy-project-organization-grid"]],
        inputs: {
          value: "value",
          rowData: "rowData"
        },
        standalone: false,
        decls: 3,
        vars: 2,
        consts: [[1, "d-flex", "justify-content-between"], [3, "rowData"], [3, "visibilityChange", "rowData"]],
        template: function ProjectOrganizationGridComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(1, "gauzy-project-organization", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(2, "gauzy-visibility", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("visibilityChange", function ProjectOrganizationGridComponent_Template_gauzy_visibility_visibilityChange_2_listener($event) {
              return ctx.onVisibilityChange($event);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("rowData", ctx.rowData);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("rowData", ctx.rowData);
          }
        },
        dependencies: [_project_organization_project_organization_component__WEBPACK_IMPORTED_MODULE_2__/* .ProjectOrganizationComponent */ .W, _visibility_visibility_component__WEBPACK_IMPORTED_MODULE_3__/* .VisibilityComponent */ .A],
        encapsulation: 2
      });
    }
  }
  return ProjectOrganizationGridComponent;
})();

/***/ }),

/***/ 71021:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P: () => (/* binding */ ExternalLinkComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14572);


function ExternalLinkComponent_a_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "a", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("href", ctx_r0.rowData == null ? null : ctx_r0.rowData.website, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵsanitizeUrl"] */ .B4B);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(ctx_r0.rowData == null ? null : ctx_r0.rowData.website);
  }
}
let ExternalLinkComponent = /*#__PURE__*/(() => {
  class ExternalLinkComponent {
    constructor() {}
    static {
      this.ɵfac = function ExternalLinkComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || ExternalLinkComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: ExternalLinkComponent,
        selectors: [["gauzy-external-link"]],
        inputs: {
          value: "value",
          rowData: "rowData"
        },
        standalone: false,
        decls: 1,
        vars: 1,
        consts: [["rel", "noopener", "target", "_blank", 3, "href", 4, "ngIf"], ["rel", "noopener", "target", "_blank", 3, "href"]],
        template: function ExternalLinkComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(0, ExternalLinkComponent_a_0_Template, 2, 2, "a", 0);
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.rowData);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .NgIf */ .bT],
        styles: ["a[_ngcontent-%COMP%] {\n  color: rgb(0, 136, 254);\n  text-decoration: underline;\n}"]
      });
    }
  }
  return ExternalLinkComponent;
})();

/***/ }),

/***/ 72647:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ ProjectModuleStatusEnum)
/* harmony export */ });
var ProjectModuleStatusEnum = /*#__PURE__*/function (ProjectModuleStatusEnum) {
  ProjectModuleStatusEnum["BACKLOG"] = "backlog";
  ProjectModuleStatusEnum["PLANNED"] = "planned";
  ProjectModuleStatusEnum["IN_PROGRESS"] = "in-progress";
  ProjectModuleStatusEnum["PAUSED"] = "paused";
  ProjectModuleStatusEnum["COMPLETED"] = "completed";
  ProjectModuleStatusEnum["CANCELLED"] = "cancelled";
  return ProjectModuleStatusEnum;
}(ProjectModuleStatusEnum || {});

/***/ }),

/***/ 86815:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ ProjectMutationComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(73014);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(55598);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26860);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10936);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(49708);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(90999);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(55801);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(80189);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(4478);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(52738);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(39855);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(56891);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(45230);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(56383);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(41598);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(19223);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(9620);
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86014);
/* harmony import */ var _gauzy_constants__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(47049);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(15788);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(10205);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(73465);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(17785);
/* harmony import */ var _gauzy_ui_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(48840);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(26024);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(64913);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(22779);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(71924);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(15480);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(54263);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(5855);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(941);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(34060);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(42433);
/* harmony import */ var _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38546);
/* harmony import */ var _regex_regex_patterns_const__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(84059);
/* harmony import */ var _forms_helpers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(78870);
/* harmony import */ var _ckeditor_config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(98106);
/* harmony import */ var _project_module_project_module_mutation_project_module_mutation_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(28722);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(14572);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(55567);
/* harmony import */ var ckeditor4_angular__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(76166);
/* harmony import */ var ngx_color_picker__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(80050);
/* harmony import */ var _directives_autocomplete_off_directive__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(21663);
/* harmony import */ var _directives_img_directive__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(71466);
/* harmony import */ var _modules_currency_currency_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(64251);
/* harmony import */ var _employee_employee_multi_select_employee_multi_select_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(57354);
/* harmony import */ var _image_uploader_image_uploader_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(79455);
/* harmony import */ var _tags_tags_color_input_tags_color_input_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(62177);
/* harmony import */ var _selectors_team_team_team_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(42148);
/* harmony import */ var _integrations_github_repository_selector_repository_selector_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(53025);
/* harmony import */ var _project_module_project_module_table_project_module_table_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(38226);
/* harmony import */ var _pipes_replace_pipe__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(25963);

var ProjectMutationComponent_1;








































const _c0 = ["actionButtons"];
const _c1 = a0 => ({
  opacity: a0
});
const _c2 = a0 => [a0];
function ProjectMutationComponent__svg_svg_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnamespaceSVG"] */ .qSk();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "svg", 67)(1, "defs");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(2, "path", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(3, "g", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(4, "circle", 70)(5, "circle", 71)(6, "use", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpureFunction1"] */ .eq3(1, _c1, ctx_r1.hoverState ? "1" : "0.3"));
  }
}
function ProjectMutationComponent_img_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "img", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("mouseenter", function ProjectMutationComponent_img_12_Template_img_mouseenter_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx_r1.hoverState = true);
    })("mouseleave", function ProjectMutationComponent_img_12_Template_img_mouseleave_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx_r1.hoverState = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("src", ctx_r1.form.get("imageUrl").value, _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵsanitizeUrl"] */ .B4B);
  }
}
function ProjectMutationComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "div", 74)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(2, "i", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(3, "Add or Drop Image");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
  }
}
function ProjectMutationComponent_p_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "p", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(2, 1, "FORM.ERROR.PROJECT_NAME"), " ");
  }
}
function ProjectMutationComponent_div_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(2, 1, "FORM.ERROR.PROJECT_URL"), " ");
  }
}
function ProjectMutationComponent_nb_option_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "nb-option", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const owner_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("value", owner_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI("", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(2, 2, "SM_TABLE." + owner_r4), " ");
  }
}
function ProjectMutationComponent_nb_option_103_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "nb-option", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const billing_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("value", billing_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(2, 2, "SM_TABLE." + billing_r5), " ");
  }
}
function ProjectMutationComponent_nb_option_115_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "nb-option", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(2, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const budgetType_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("value", budgetType_r6.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(2, 2, budgetType_r6.value), " ");
  }
}
function ProjectMutationComponent_div_117_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "div", 48)(1, "label", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(4, "input", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(3, 3, "FORM.PLACEHOLDERS.HOURS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("min", 0)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(5, 5, "FORM.PLACEHOLDERS.HOURS"));
  }
}
function ProjectMutationComponent_div_118_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "div", 48)(1, "label", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(4, "input", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(3, 3, "FORM.PLACEHOLDERS.COST"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("min", 0)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(5, 5, "FORM.PLACEHOLDERS.COST"));
  }
}
function ProjectMutationComponent_div_126_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(2, 1, "FORM.ERROR.OPEN_SOURCE_PROJECT_URL"), " ");
  }
}
function ProjectMutationComponent_div_126_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "div", 48)(1, "label", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(4, "input", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(5, ProjectMutationComponent_div_126_div_5_Template, 3, 3, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(3, 3, "FORM.LABELS.OPEN_SOURCE_PROJECT_URL"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("status", ctx_r1.FormHelpers.isInvalidControl(ctx_r1.form, "openSourceProjectUrl") ? "danger" : "basic");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r1.openSourceProjectUrl.hasError("pattern"));
  }
}
function ProjectMutationComponent_nb_tab_127_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "nb-tab", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(2, "ngx-tasks-sprint-settings-view", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("tabTitle", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(1, 2, "ORGANIZATIONS_PAGE.SPRINTS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("project", ctx_r1.project);
  }
}
function ProjectMutationComponent_nb_option_143_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "nb-option", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const mode_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("value", mode_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI("", mode_r7, " ");
  }
}
function ProjectMutationComponent_nb_tab_155_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "nb-tab", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(2, "div", 83)(3, "div", 84)(4, "div", 19)(5, "div", 43)(6, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(7, "img", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(8, "replace");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(9, "div", 51)(10, "div", 85)(11, "ngx-github-repository-selector", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("onChanged", function ProjectMutationComponent_nb_tab_155_Template_ngx_github_repository_selector_onChanged_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r8);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx_r1.selectRepository($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("tabTitle", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(1, 6, "ORGANIZATIONS_PAGE.INTEGRATIONS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("src", ctx_r1.integration.integration.fullImgUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵsanitizeUrl"] */ .B4B)("alt", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpureFunction1"] */ .eq3(12, _c2, ctx_r1.integration.integration.title))("title", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind3"] */ .brH(8, 8, ctx_r1.integration.integration.name, "_", " "));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("sourceId", ctx_r1.project == null ? null : ctx_r1.project.repository == null ? null : ctx_r1.project.repository.repositoryId)("integration", ctx_r1.integration);
  }
}
function ProjectMutationComponent_nb_tab_156_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "nb-tab", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(2, "form", 8)(3, "div", 88)(4, "div", 19)(5, "div", 51)(6, "div", 89)(7, "label", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(10, "nb-toggle", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("change", function ProjectMutationComponent_nb_tab_156_Template_nb_toggle_change_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx_r1.updateProjectAutoSyncSetting());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(13, "div", 51)(14, "div", 89)(15, "label", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(18, "nb-toggle", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("change", function ProjectMutationComponent_nb_tab_156_Template_nb_toggle_change_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx_r1.updateProjectAutoSyncSetting());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(20, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(21, "div", 51)(22, "div", 89)(23, "label", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(25, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(26, "input", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(27, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("change", function ProjectMutationComponent_nb_tab_156_Template_input_change_26_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx_r1.changeSyncTag($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("tabTitle", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(1, 8, "ORGANIZATIONS_PAGE.AUTOMATION"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("formGroup", ctx_r1.projectSettingForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(9, 10, "FORM.LABELS.AUTO_SYNC_TASKS"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(12, 12, "FORM.PLACEHOLDERS.AUTO_SYNC_TASKS"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(17, 14, "FORM.LABELS.AUTO_SYNC_TASKS_BASED_ON_LABEL"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(20, 16, "FORM.PLACEHOLDERS.AUTO_SYNC_TASKS_BASED_ON_LABEL"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(25, 18, "FORM.LABELS.AUTO_SYNC_TAG"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(27, 20, "FORM.PLACEHOLDERS.AUTO_SYNC_TAG"));
  }
}
function ProjectMutationComponent_nb_tab_157_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "nb-tab", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(2, "ngx-project-module-table", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("tabTitle", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(1, 2, "TASKS_PAGE.MODULE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("projectId", ctx_r1.project.id);
  }
}
function ProjectMutationComponent_ng_template_159_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "button", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("click", function ProjectMutationComponent_ng_template_159_button_7_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r11);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx_r1.createProjectModuleDialog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(2, 1, "BUTTONS.ADD_MODULE"), " ");
  }
}
function ProjectMutationComponent_ng_template_159_ng_template_8_button_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "button", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("click", function ProjectMutationComponent_ng_template_159_ng_template_8_button_0_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r12);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG(3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx_r1.openTasksSettings());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(2, 1, "BUTTONS.MANAGE_SPRINTS"), " ");
  }
}
function ProjectMutationComponent_ng_template_159_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(0, ProjectMutationComponent_ng_template_159_ng_template_8_button_0_Template, 3, 3, "button", 103);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r1.form.get("taskListType").value === ctx_r1.TaskListTypeEnum.SPRINT);
  }
}
function ProjectMutationComponent_ng_template_159_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "div", 97)(1, "button", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("click", function ProjectMutationComponent_ng_template_159_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r10);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx_r1.navigateToCancelProject());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(4, "button", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("click", function ProjectMutationComponent_ng_template_159_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r10);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx_r1.onSubmit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(7, ProjectMutationComponent_ng_template_159_button_7_Template, 3, 3, "button", 100)(8, ProjectMutationComponent_ng_template_159_ng_template_8_Template, 1, 1, "ng-template", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(3, 5, "BUTTONS.CANCEL"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("disabled", ctx_r1.form.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(6, 7, "BUTTONS.SAVE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r1.project == null ? null : ctx_r1.project.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r1.project);
  }
}
let ProjectMutationComponent = /*#__PURE__*/(() => {
  let ProjectMutationComponent = class ProjectMutationComponent extends _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_2__/* .TranslationBaseComponent */ .K {
    static {
      ProjectMutationComponent_1 = this;
    }
    static buildForm(fb) {
      const form = fb.group({
        imageUrl: [],
        imageId: [],
        tags: [],
        teams: [],
        public: [],
        billable: [],
        name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .Validators */ .k0.required],
        organizationContact: [],
        billing: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_4__/* .ProjectBillingEnum */ .EP.RATE],
        currency: [_gauzy_ui_config__WEBPACK_IMPORTED_MODULE_5__/* .environment */ .c.DEFAULT_CURRENCY],
        startDate: [],
        endDate: [],
        owner: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_4__/* .ProjectOwnerEnum */ .wn.CLIENT],
        taskListType: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_6__/* .TaskListTypeEnum */ .Tn.GRID],
        description: [],
        code: [],
        color: [],
        budget: [],
        budgetType: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_6__/* .OrganizationProjectBudgetTypeEnum */ .B3.HOURS],
        openSource: [],
        projectUrl: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .Validators */ .k0.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .Validators */ .k0.pattern(new RegExp(_regex_regex_patterns_const__WEBPACK_IMPORTED_MODULE_7__/* .patterns */ .q.websiteUrl))])],
        openSourceProjectUrl: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .Validators */ .k0.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .Validators */ .k0.pattern(new RegExp(_regex_regex_patterns_const__WEBPACK_IMPORTED_MODULE_7__/* .patterns */ .q.websiteUrl))])]
      }, {
        validators: [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_8__/* .CompareDateValidator */ .A.validateDate('startDate', 'endDate')]
      });
      form.get('teams').setValue([]);
      return form;
    }
    static buildSettingForm(fb) {
      const form = fb.group({
        isTasksAutoSync: [],
        isTasksAutoSyncOnLabel: [],
        syncTag: []
      });
      return form;
    }
    get integration() {
      // Get the integration tenant or boolean value.
      return this._integration;
    }
    set integration(value) {
      // Set the integration tenant or boolean value.
      this._integration = value;
    }
    get project() {
      // Get the organization project.
      return this._project;
    }
    set project(project) {
      // Set the organization project.
      this._project = project;
      // Sync the form with the new project data
      this._syncProject();
    }
    get projectName() {
      return this.form.get('name');
    }
    get projectUrl() {
      return this.form.get('projectUrl');
    }
    get openSourceProjectUrl() {
      return this.form.get('openSourceProjectUrl');
    }
    constructor(_router, _fb, _store, _toastrService, translateService, _errorHandler, _organizationTeamService, _organizationContactService, _githubService, _organizationProjectsService, _dialogService) {
      var _this;
      super(translateService);
      _this = this;
      this._router = _router;
      this._fb = _fb;
      this._store = _store;
      this._toastrService = _toastrService;
      this.translateService = translateService;
      this._errorHandler = _errorHandler;
      this._organizationTeamService = _organizationTeamService;
      this._organizationContactService = _organizationContactService;
      this._githubService = _githubService;
      this._organizationProjectsService = _organizationProjectsService;
      this._dialogService = _dialogService;
      this.FormHelpers = _forms_helpers__WEBPACK_IMPORTED_MODULE_9__/* .FormHelpers */ .k;
      this.OrganizationProjectBudgetTypeEnum = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_6__/* .OrganizationProjectBudgetTypeEnum */ .B3;
      this.TaskListTypeEnum = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_6__/* .TaskListTypeEnum */ .Tn;
      this.memberIds = [];
      this.managerIds = [];
      this.selectedEmployeeIds = [];
      this.selectedManagerIds = [];
      this.selectedTeamIds = [];
      this.billings = Object.values(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_4__/* .ProjectBillingEnum */ .EP);
      this.owners = Object.values(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_4__/* .ProjectOwnerEnum */ .wn);
      this.taskViewModeTypes = Object.values(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_6__/* .TaskListTypeEnum */ .Tn);
      this.showSprintManage = false;
      this.ckConfig = _ckeditor_config__WEBPACK_IMPORTED_MODULE_10__/* .ckEditorConfig */ .a;
      /*
       * Project Mutation Form
       */
      this.form = ProjectMutationComponent_1.buildForm(this._fb);
      /*
       * Project Setting Mutation Form
       */
      this.projectSettingForm = ProjectMutationComponent_1.buildSettingForm(this._fb);
      this.teams = [];
      this.organizationContacts = [];
      this.canceled = new _angular_core__WEBPACK_IMPORTED_MODULE_1__/* .EventEmitter */ .bkB();
      this.onSubmitted = new _angular_core__WEBPACK_IMPORTED_MODULE_1__/* .EventEmitter */ .bkB();
      /**
       * Adds a new organization contact with the provided name.
       *
       * @param {string} name - The name of the new organization contact.
       * @returns {Promise<IOrganizationContact>} - Returns a promise that resolves to the created organization contact.
       *
       * @throws {Error} - Handles errors using the error handler service if the contact creation fails.
       */
      this.addNewOrganizationContact = /*#__PURE__*/function () {
        var _ref = (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A)(function* (name) {
          try {
            const {
              id: organizationId,
              tenantId
            } = _this.organization;
            // Create a new organization contact
            const contact = yield _this._organizationContactService.create({
              name,
              organizationId,
              tenantId,
              contactType: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_12__/* .ContactType */ .Pm.CLIENT
            });
            // Display a success message if the contact is created
            if (contact) {
              const {
                name
              } = contact;
              _this._toastrService.success('NOTES.ORGANIZATIONS.EDIT_ORGANIZATIONS_CONTACTS.ADD_CONTACT', {
                name
              });
            }
            return contact;
          } catch (error) {
            // Handle any errors that occur during the contact creation process
            _this._errorHandler.handleError(error);
          }
        });
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }();
    }
    ngOnInit() {
      this._store.selectedOrganization$.pipe((0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_13__/* .distinctUntilChange */ .nI)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__/* .debounceTime */ .B)(100), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__/* .filter */ .p)(organization => !!organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__/* .tap */ .M)(organization => this.organization = organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__/* .tap */ .M)(() => this._loadDefaultCurrency()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__/* .tap */ .M)(() => this._syncProject()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__/* .tap */ .M)(() => this._getOrganizationContacts()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__/* .tap */ .M)(() => this._getOrganizationTeams()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_17__/* .untilDestroyed */ .s)(this)).subscribe();
    }
    /**
     * Lifecycle hook that is called after the component's view has been initialized.
     * It sets up an event listener for changes to the 'syncTag' form control.
     */
    ngAfterViewInit() {
      // Get a reference to the 'isTasksAutoSyncOnLabel' form control within the 'projectSettingForm'.
      const isTasksAutoSyncOnLabelControl = this.projectSettingForm.get('isTasksAutoSyncOnLabel');
      const syncTagControl = this.projectSettingForm.get('syncTag');
      isTasksAutoSyncOnLabelControl.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_18__/* .switchMap */ .n)(value => {
        if (value) {
          syncTagControl.enable();
        } else {
          syncTagControl.disable();
        }
        syncTagControl.updateValueAndValidity();
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.of)(value); // Emit the same value.
      }), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_17__/* .untilDestroyed */ .s)(this) // Automatically unsubscribe when the component is destroyed.
      ).subscribe();
    }
    /**
     * Load default organization currency
     */
    _loadDefaultCurrency() {
      if (!this.organization) {
        return;
      }
      const currency = this.organization.currency || _gauzy_ui_config__WEBPACK_IMPORTED_MODULE_5__/* .environment */ .c.DEFAULT_CURRENCY;
      if (currency) {
        this.form.get('currency').setValue(currency);
        this.form.get('currency').updateValueAndValidity();
      }
    }
    _getOrganizationContacts() {
      var _this2 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A)(function* () {
        if (!_this2.organization) {
          return;
        }
        const {
          id: organizationId,
          tenantId
        } = _this2.organization;
        const {
          items
        } = yield _this2._organizationContactService.getAll([], {
          organizationId,
          tenantId
        });
        items.forEach(i => {
          _this2.organizationContacts = (0,underscore__WEBPACK_IMPORTED_MODULE_0__/* .uniq */ .sb)([..._this2.organizationContacts, {
            name: i.name,
            organizationContactId: i.id,
            id: i.id
          }], 'id');
        });
      })();
    }
    /**
     * Get organization teams
     *
     * @returns
     */
    _getOrganizationTeams() {
      var _this3 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A)(function* () {
        if (!_this3.organization || !_this3._store.hasAnyPermission(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_20__/* .PermissionsEnum */ .U.ALL_ORG_VIEW, _gauzy_contracts__WEBPACK_IMPORTED_MODULE_20__/* .PermissionsEnum */ .U.ORG_TEAM_VIEW)) {
          return;
        }
        const {
          tenantId
        } = _this3._store.user;
        const {
          id: organizationId
        } = _this3.organization;
        _this3.teams = (yield _this3._organizationTeamService.getAll([], {
          organizationId,
          tenantId
        })).items;
      })();
    }
    changeProjectOwner(owner) {
      const clientControl = this.form.get('client');
      if (owner === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_4__/* .ProjectOwnerEnum */ .wn.INTERNAL && clientControl) {
        clientControl.setValue('');
      }
    }
    /**
     * Sync edit organization project
     *
     * @param project
     */
    _syncProject() {
      if (!this.project) {
        return;
      }
      const project = this.project;
      // Selected Members Ids
      this.selectedEmployeeIds = (project.members || []).filter(member => !member.isManager).map(member => member.employeeId);
      this.memberIds = this.selectedEmployeeIds;
      // Selected Managers Ids
      this.selectedManagerIds = (project.members || []).filter(member => member.isManager).map(member => member.employeeId);
      this.managerIds = this.selectedManagerIds;
      this.form.patchValue({
        imageUrl: project.imageUrl || null,
        imageId: project.imageId || null,
        tags: project.tags || [],
        public: project.public || false,
        billable: project.billable || false,
        name: project.name || null,
        organizationContact: project.organizationContact || null,
        billing: project.billing || _gauzy_contracts__WEBPACK_IMPORTED_MODULE_4__/* .ProjectBillingEnum */ .EP.RATE,
        currency: project.currency,
        startDate: project.startDate ? new Date(project.startDate) : null,
        endDate: project.endDate ? new Date(project.endDate) : null,
        owner: project.owner || _gauzy_contracts__WEBPACK_IMPORTED_MODULE_4__/* .ProjectOwnerEnum */ .wn.CLIENT,
        taskListType: project.taskListType || _gauzy_contracts__WEBPACK_IMPORTED_MODULE_6__/* .TaskListTypeEnum */ .Tn.GRID,
        description: project.description || null,
        code: project.code || null,
        color: project.color || null,
        budget: project.budget || null,
        budgetType: project.budgetType || _gauzy_contracts__WEBPACK_IMPORTED_MODULE_6__/* .OrganizationProjectBudgetTypeEnum */ .B3.HOURS,
        openSource: project.openSource || null,
        projectUrl: project.projectUrl || null,
        openSourceProjectUrl: project.openSourceProjectUrl || null,
        teams: (this.project.teams || []).map(team => team.id)
      });
      this.form.updateValueAndValidity();
      /** Project Integration Setting Patch Value*/
      this.projectSettingForm.patchValue({
        isTasksAutoSync: project.isTasksAutoSync || false,
        isTasksAutoSyncOnLabel: project.isTasksAutoSyncOnLabel || false,
        syncTag: project.syncTag || ''
      });
      this.projectSettingForm.updateValueAndValidity();
    }
    /**
     * Public toggle action
     * @param state
     */
    togglePublic(state) {
      this.form.get('public').setValue(state);
      this.form.get('public').updateValueAndValidity();
    }
    /**
     * Billable toggle action
     * @param state
     */
    toggleBillable(state) {
      this.form.get('billable').setValue(state);
      this.form.get('billable').updateValueAndValidity();
    }
    /**
     * Open source toggle action
     * @param state
     */
    toggleOpenSource(state) {
      this.form.get('openSource').setValue(state);
      this.form.get('openSource').updateValueAndValidity();
    }
    /**
     * Handles the selection of managers and updates the `managerIds` property.
     *
     * @param {ID[]} managerIds - An array of selected manager IDs.
     * The function is called when managers are selected, and it sets the `managerIds` property
     * with the array of selected IDs.
     */
    onManagersSelected(managerIds) {
      this.managerIds = managerIds;
    }
    /**
     * Handles the selection of members and updates the `memberIds` property.
     *
     * @param {ID[]} memberIds - An array of selected member IDs.
     * The function is called when members are selected, and it sets the `memberIds` property
     * with the array of selected IDs.
     */
    onMembersSelected(memberIds) {
      this.memberIds = memberIds;
    }
    /**
     * Updates the form's teams field with the selected organization teams.
     *
     * @param {IOrganizationTeam[]} teams - An array of selected organization teams.
     */
    onTeamsSelected(teams) {
      this.form.get('teams').setValue(teams);
      this.form.get('teams').updateValueAndValidity();
    }
    /**
     * Navigates to the organization projects page, canceling the current project workflow.
     *
     * This method is typically called when the user decides to cancel the project creation/edit process.
     */
    navigateToCancelProject() {
      this._router.navigate(['/pages/organization/projects']);
    }
    /**
     * Handles the submission of the project mutation form.
     *
     * @returns void
     */
    onSubmit() {
      if (this.form.invalid) {
        return;
      }
      // Emit the form values
      this.onSubmitted.emit(this.getFormValues());
    }
    /**
     * Extracts and processes form values for submission.
     *
     * @returns {object} - The processed form values.
     */
    getFormValues() {
      // Destructure the form values in one step
      const {
        name,
        code,
        projectUrl,
        owner,
        organizationContact,
        startDate,
        endDate,
        description,
        tags,
        billing,
        currency,
        budget,
        budgetType,
        openSource,
        openSourceProjectUrl,
        color,
        taskListType,
        public: isPublic,
        billable,
        imageId,
        teams
      } = this.form.value;
      return {
        // Main Step
        name,
        code,
        projectUrl,
        owner,
        organizationContactId: organizationContact?.id || null,
        startDate,
        endDate,
        memberIds: this.memberIds.filter(memberId => !this.managerIds.includes(memberId)),
        managerIds: this.managerIds,
        teams: teams.map(id => this.teams.find(team => team.id === id)).filter(Boolean),
        // Description Step
        description,
        tags: tags || [],
        // Billing Step
        billing,
        billingFlat: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_4__/* .ProjectBillingEnum */ .EP.RATE, _gauzy_contracts__WEBPACK_IMPORTED_MODULE_4__/* .ProjectBillingEnum */ .EP.FLAT_FEE].includes(billing),
        currency,
        // Budget Step
        budget,
        budgetType,
        // Open Source Step
        openSource,
        openSourceProjectUrl,
        // Setting Step
        color,
        taskListType,
        public: isPublic,
        billable,
        // Image Step
        imageId
      };
    }
    /**
     * Updates the form's tags field with the selected tags.
     *
     * @param {ITag[]} selectedTags - An array of selected tags.
     */
    selectedTagsEvent(selectedTags) {
      this.form.get('tags').setValue(selectedTags);
      this.form.get('tags').updateValueAndValidity();
    }
    /**
     * Navigates to the tasks settings page for the selected project.
     */
    openTasksSettings() {
      // Get the selected project
      const project = this.project;
      // Navigate to the tasks settings page with the selected project
      this._router.navigate(['/pages/tasks/settings', project.id], {
        state: project
      });
    }
    /*
     * On Changed Currency Event Emitter
     */
    currencyChanged($event) {}
    /**
     * Upload project logo
     *
     * @param image
     */
    updateImageAsset(image) {
      try {
        if (image && image.id) {
          this.form.get('imageId').setValue(image.id);
          this.form.get('imageUrl').setValue(image.fullUrl);
        } else {
          this.form.get('imageUrl').setValue(_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_21__/* .DUMMY_PROFILE_IMAGE */ .vO);
        }
        this.form.updateValueAndValidity();
      } catch (error) {
        console.log('Error while uploading project logo', error);
        this.handleImageUploadError(error);
      }
    }
    handleImageUploadError(error) {
      this._toastrService.danger(error);
    }
    /**
     * Selects a GitHub repository and retrieves its associated issues.
     * @param repository - The GitHub repository to select.
     */
    selectRepository(repository) {
      if (!this.organization || !this.integration) {
        return;
      }
      /**  */
      try {
        this.loading = false;
        const {
          id: organizationId,
          tenantId
        } = this.organization;
        const {
          id: projectId,
          name
        } = this.project;
        const integrationId = this.integration['id'];
        /** */
        const request = {
          organizationId,
          tenantId,
          integrationId,
          repository
        };
        // Fetch entity settings by integration ID and handle the result as an observable
        this._githubService.syncGithubRepository(request).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_18__/* .switchMap */ .n)(({
          id: repositoryId
        }) => {
          return this._organizationProjectsService.updateProjectSetting(projectId, {
            organizationId,
            tenantId,
            customFields: {
              repositoryId
            },
            ...(!this.projectSettingForm.get('syncTag').value ? {
              syncTag: _gauzy_constants__WEBPACK_IMPORTED_MODULE_22__/* .SyncTags */ .R.GAUZY
            } : {})
          });
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__/* .tap */ .M)(() => {
          this._toastrService.success('NOTES.ORGANIZATIONS.EDIT_ORGANIZATIONS_PROJECTS.SYNC_REPOSITORY', {
            repository: repository.full_name,
            project: name
          });
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__/* .catchError */ .W)(error => {
          this._errorHandler.handleError(error);
          return rxjs__WEBPACK_IMPORTED_MODULE_24__/* .EMPTY */ .w;
        }),
        // Execute the following code block when the observable completes or errors
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_25__/* .finalize */ .j)(() => {
          // Set the 'loading' flag to false to indicate that data loading is complete
          this.loading = false;
        }),
        // Automatically unsubscribe when the component is destroyed
        (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_17__/* .untilDestroyed */ .s)(this)).subscribe();
      } catch (error) {
        this._errorHandler.handleError(error);
      }
    }
    /**
     * Trigger a change in the synchronization tag for project auto-sync settings.
     * This function updates the project's auto-sync settings.
     */
    changeSyncTag() {
      this.updateProjectAutoSyncSetting();
    }
    /**
     * Updates project auto-sync settings.
     * This method is typically invoked in response to user actions.
     */
    updateProjectAutoSyncSetting() {
      // Check if the 'organization' or 'integration' properties are not available.
      if (!this.organization || !this.integration) {
        return; // Abort the method execution.
      }
      /**  */
      try {
        // Set the 'loading' property to 'false' to indicate that data loading is not in progress.
        this.loading = false;
        // Extract the 'organizationId' and 'tenantId' from the 'organization' property.
        const {
          id: organizationId,
          tenantId
        } = this.organization;
        // Extract the 'projectId' from the 'project' property.
        const {
          id: projectId,
          name
        } = this.project;
        // Create a 'request' object of type 'IOrganizationProjectSetting'.
        // It contains 'organizationId', 'tenantId', and auto-sync settings taken from 'this.projectSettingForm.value'.
        const request = {
          organizationId,
          tenantId,
          ...this.projectSettingForm.value
        };
        // Call the 'updateProjectSetting' method of the '_organizationProjectsService'
        // to update project settings with 'projectId' and the 'request'
        this._organizationProjectsService.updateProjectSetting(projectId, request).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__/* .tap */ .M)(() => {
          const message = 'NOTES.ORGANIZATIONS.EDIT_ORGANIZATIONS_PROJECTS.AUTO_SYNC_SETTING';
          this._toastrService.success(message, {
            project: name
          });
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__/* .catchError */ .W)(error => {
          this._errorHandler.handleError(error);
          return rxjs__WEBPACK_IMPORTED_MODULE_24__/* .EMPTY */ .w;
        }),
        // Execute the following code block when the observable completes or errors
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_25__/* .finalize */ .j)(() => {
          // Set the 'loading' flag to false to indicate that data loading is complete
          this.loading = false;
        }),
        // Automatically unsubscribe when the component is destroyed
        (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_17__/* .untilDestroyed */ .s)(this)).subscribe();
      } catch (error) {
        this._errorHandler.handleError(error);
      }
    }
    /**
     * Opens a dialog for creating a new project module
     * @param createModule - Flag indicating if this is a new module creation (true) or edit (false)
     * @returns Promise that resolves when the dialog is closed
     */
    createProjectModuleDialog() {
      var _this4 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A)(function* () {
        try {
          yield (0,rxjs__WEBPACK_IMPORTED_MODULE_26__/* .firstValueFrom */ ._)(_this4._dialogService.open(_project_module_project_module_mutation_project_module_mutation_component__WEBPACK_IMPORTED_MODULE_27__/* .ProjectModuleMutationComponent */ .g, {
            context: {
              project: _this4.project,
              createModule: true
            }
          }).onClose);
        } catch (error) {
          const message = error.message || 'Error while creating project module';
          _this4._toastrService.danger(message, 'Project Module Error');
        }
      })();
    }
    static {
      this.ɵfac = function ProjectMutationComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || ProjectMutationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_router__WEBPACK_IMPORTED_MODULE_28__/* .Router */ .Ix), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .UntypedFormBuilder */ .ze), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_29__/* .Store */ .il), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_30__/* .ToastrService */ .t), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_31__/* .TranslateService */ .c$), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_32__/* .ErrorHandlingService */ .X), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_33__/* .OrganizationTeamsService */ .F), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_34__/* .OrganizationContactService */ .$), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_35__/* .GithubService */ .p), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_36__/* .OrganizationProjectsService */ .d), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_nebular_theme__WEBPACK_IMPORTED_MODULE_37__/* .NbDialogService */ .S0W));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineComponent"] */ .VBU({
        type: ProjectMutationComponent,
        selectors: [["ga-project-mutation"]],
        viewQuery: function ProjectMutationComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵviewQuery"] */ .GBs(_c0, 7);
          }
          if (rf & 2) {
            let _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵqueryRefresh"] */ .mGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵloadQuery"] */ .lsd()) && (ctx.actionButtons = _t.first);
          }
        },
        inputs: {
          integration: "integration",
          project: "project",
          teams: "teams",
          organizationContacts: "organizationContacts"
        },
        outputs: {
          canceled: "canceled",
          onSubmitted: "onSubmitted"
        },
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
        decls: 161,
        vars: 161,
        consts: [["name", ""], ["code", ""], ["organizationContact", ""], ["startDate", ""], ["endDate", ""], ["public", ""], ["billable", ""], ["actionButtons", ""], [3, "formGroup"], [3, "tabTitle", "tabIcon"], [1, "project-tab-container"], [1, "project-image-container"], [1, "project-image-photo"], [3, "changeHoverState", "uploadedImageAsset", "uploadImageAssetError"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "width", "68", "height", "68", "viewBox", "0 0 68 68", 3, "ngStyle", 4, "ngIf"], [1, "image-overlay", 3, "ngStyle"], ["alt", "Contact Photo", 3, "src", "mouseenter", "mouseleave", 4, "ngIf"], ["class", "image", 4, "ngIf"], [1, "project-form-container"], [1, "row"], [1, "form-group", "col-6"], ["for", "name", 1, "label"], ["type", "text", "nbInput", "", "fullWidth", "", "formControlName", "name", "id", "name", 3, "placeholder", "status"], ["class", "caption status-danger", 4, "ngIf"], ["for", "code", 1, "label"], ["type", "text", "nbInput", "", "fullWidth", "", "formControlName", "code", "id", "code", 3, "placeholder"], ["for", "projectUrl", 1, "label"], ["type", "text", "nbInput", "", "fullWidth", "", "id", "projectUrl", "formControlName", "projectUrl", 3, "placeholder", "status"], ["class", "caption status-danger position-absolute", 4, "ngIf"], [3, "selectedChange", "selectedEmployeeIds", "placeholder", "label"], ["for", "owner", 1, "label"], ["fullWidth", "", "formControlName", "owner", "id", "owner", 3, "selectedChange", "placeholder"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "organizationContacts", 1, "label"], ["bindLabel", "name", "formControlName", "organizationContact", "appendTo", "body", 3, "addTag", "items", "searchable", "placeholder"], [3, "selectedChange", "selectedEmployeeIds"], ["formControlName", "teams", 3, "onChanged", "skipGlobalChange", "multiple", "showAllOption", "placeholder", "defaultSelected", "label"], [1, "w-75"], ["for", "start-date-project", 1, "label"], ["nbInput", "", "fullWidth", "", "formControlName", "startDate", "id", "start-date-project", 3, "nbDatepicker", "placeholder", "status"], ["for", "end-date-project", 1, "label"], ["nbInput", "", "fullWidth", "", "formControlName", "endDate", "id", "end-date-project", 3, "nbDatepicker", "placeholder", "status"], [3, "tabTitle"], [1, "col-8"], ["for", "description", 1, "label", 3, "innerHtml"], ["formControlName", "description", 3, "config"], [1, "row", "mt-3"], [3, "selectedTagsEvent", "selectedTags", "isOrgLevel"], [1, "form-group", "col-4"], ["for", "billing", 1, "label"], ["fullWidth", "", "formControlName", "billing", "id", "billing", 3, "placeholder"], [1, "col-4"], ["formControlName", "currency", 3, "optionChange"], [1, "label"], ["fullWidth", "", "formControlName", "budgetType", 3, "placeholder"], ["class", "form-group col-4", 4, "ngIf"], [1, "col-4", "d-flex", "align-items-center"], ["labelPosition", "start", "status", "basic", "formControlName", "openSource", 1, "project-toggle", 3, "checkedChange", "checked"], [3, "tabTitle", 4, "ngIf"], [1, "form-group", "col-3"], ["for", "color", 1, "label"], ["type", "text", "nbInput", "", "fullWidth", "", "formControlName", "color", "id", "color", "autocomplete-off", "", 3, "colorPickerChange", "placeholder", "colorPicker", "value"], ["fullWidth", "", "formControlName", "taskListType", "id", "taskListType", 3, "placeholder"], [1, "col-2", "d-flex", "align-items-center"], ["labelPosition", "start", "status", "basic", "formControlName", "public", 1, "project-toggle", 3, "checkedChange", "checked"], ["labelPosition", "start", "status", "basic", "formControlName", "billable", 1, "project-toggle", 3, "checkedChange", "checked"], [3, "ngTemplateOutlet"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "width", "68", "height", "68", "viewBox", "0 0 68 68", 3, "ngStyle"], ["id", "a", "d", "M28.667 31.333a2 2 0 1 0-.002-4.001 2 2 0 0 0 .002 4.001m13.333 12H26.748l9.34-7.793c.328-.279.923-.277 1.244-.001l6.001 5.12V42c0 .736-.597 1.333-1.333 1.333M26 24.667h16c.736 0 1.333.597 1.333 1.333v11.152l-4.27-3.643c-1.32-1.122-3.386-1.122-4.694-.008l-9.702 8.096V26c0-.736.597-1.333 1.333-1.333M42 22H26c-2.205 0-4 1.795-4 4v16c0 2.205 1.795 4 4 4h16c2.205 0 4-1.795 4-4V26c0-2.205-1.795-4-4-4"], ["fill", "none", "fill-rule", "evenodd"], ["cx", "34", "cy", "34", "r", "34", "fill", "#0091FF", "opacity", ".3"], ["cx", "34", "cy", "34", "r", "26", "fill", "#0091FF", "opacity", ".9"], ["fill", "#FFF", "fill-rule", "nonzero", 0, "xlink", "href", "#a"], ["alt", "Contact Photo", 3, "mouseenter", "mouseleave", "src"], [1, "image"], [1, "fas", "fa-image"], [1, "caption", "status-danger"], [1, "caption", "status-danger", "position-absolute"], [3, "value"], ["nbInput", "", "type", "number", "fullWidth", "", "formControlName", "budget", 3, "min", "placeholder"], ["for", "openSourceProjectUrl", 1, "label"], ["type", "text", "nbInput", "", "fullWidth", "", "placeholder", "https://github.com/...", "id", "openSourceProjectUrl", "formControlName", "openSourceProjectUrl", 3, "status"], [3, "project"], [1, "setting-block", "block"], [1, "setting-row", "p-2"], [1, "h-12", "w-12", "flex-shrink-0"], ["width", "70px", "height", "70px", 3, "src", "alt", "title"], [3, "onChanged", "sourceId", "integration"], [1, "fields"], [1, "form-group"], ["for", "isTasksAutoSync", 1, "label"], ["id", "isTasksAutoSync", "formControlName", "isTasksAutoSync", "status", "primary", "labelPosition", "start", 1, "d-block", 3, "change"], ["for", "isTasksAutoSyncOnLabel", 1, "label"], ["id", "isTasksAutoSyncOnLabel", "formControlName", "isTasksAutoSyncOnLabel", "status", "primary", "labelPosition", "start", 1, "d-block", 3, "change"], ["for", "syncTag", 1, "label"], ["id", "syncTag", "type", "text", "nbInput", "", "fullWidth", "", "formControlName", "syncTag", 3, "change", "placeholder"], [3, "projectId"], [1, "form-group", "action-buttons"], ["nbButton", "", "status", "basic", "outline", "", 1, "mr-3", 3, "click"], ["nbButton", "", "status", "success", 1, "mr-3", 3, "click", "disabled"], ["class", "mr-3", "nbButton", "", "status", "success", 3, "click", 4, "ngIf"], [3, "ngIf"], ["nbButton", "", "status", "success", 1, "mr-3", 3, "click"], ["nbButton", "", "class", "float-right", "status", "success", 3, "click", 4, "ngIf"], ["nbButton", "", "status", "success", 1, "float-right", 3, "click"]],
        template: function ProjectMutationComponent_Template(rf, ctx) {
          if (rf & 1) {
            const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetCurrentView"] */ .RV6();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "nb-card")(1, "nb-card-body")(2, "form", 8)(3, "nb-tabset")(4, "nb-tab", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(5, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(6, "div", 10)(7, "div", 11)(8, "div", 12)(9, "ngx-image-uploader", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("changeHoverState", function ProjectMutationComponent_Template_ngx_image_uploader_changeHoverState_9_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx.hoverState = $event);
            })("uploadedImageAsset", function ProjectMutationComponent_Template_ngx_image_uploader_uploadedImageAsset_9_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx.updateImageAsset($event));
            })("uploadImageAssetError", function ProjectMutationComponent_Template_ngx_image_uploader_uploadImageAssetError_9_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx.handleImageUploadError($event));
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(10, ProjectMutationComponent__svg_svg_10_Template, 7, 3, "svg", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(11, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(12, ProjectMutationComponent_img_12_Template, 1, 1, "img", 16)(13, ProjectMutationComponent_div_13_Template, 4, 0, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(14, "div", 18)(15, "div", 19)(16, "div", 20)(17, "label", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(19, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(20, "input", 22, 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(22, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(23, ProjectMutationComponent_p_23_Template, 3, 3, "p", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(24, "div", 20)(25, "label", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(26);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(27, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(28, "input", 25, 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(30, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(31, "div", 19)(32, "div", 20)(33, "label", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(34);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(35, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(36, "input", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(37, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(38, ProjectMutationComponent_div_38_Template, 3, 3, "div", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(39, "div", 20)(40, "ga-employee-multi-select", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(41, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(42, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("selectedChange", function ProjectMutationComponent_Template_ga_employee_multi_select_selectedChange_40_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx.onManagersSelected($event));
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(43, "div", 19)(44, "div", 20)(45, "label", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(46);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(47, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(48, "nb-select", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(49, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("selectedChange", function ProjectMutationComponent_Template_nb_select_selectedChange_48_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx.changeProjectOwner($event));
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(50, ProjectMutationComponent_nb_option_50_Template, 3, 4, "nb-option", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(51, "div", 20)(52, "label", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(53);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(54, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(55, "ng-select", 34, 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(57, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(58, "div", 19)(59, "div", 20)(60, "ga-employee-multi-select", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("selectedChange", function ProjectMutationComponent_Template_ga_employee_multi_select_selectedChange_60_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx.onMembersSelected($event));
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(61, "div", 20)(62, "ga-team-selector", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(63, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(64, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("onChanged", function ProjectMutationComponent_Template_ga_team_selector_onChanged_62_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx.onTeamsSelected($event));
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(65, "div", 19)(66, "div", 20)(67, "div", 37)(68, "label", 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(69);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(70, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(71, "input", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(72, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(73, "nb-datepicker", null, 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(75, "div", 20)(76, "div", 37)(77, "label", 40);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(78);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(79, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(80, "input", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(81, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(82, "nb-datepicker", null, 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(84, "nb-tab", 42);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(85, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(86, "div", 19)(87, "div", 43);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(88, "label", 44);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(89, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(90, "ckeditor", 45);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(91, "div", 46)(92, "div", 43)(93, "ga-tags-color-input", 47);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("selectedTagsEvent", function ProjectMutationComponent_Template_ga_tags_color_input_selectedTagsEvent_93_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx.selectedTagsEvent($event));
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(94, "nb-tab", 42);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(95, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(96, "div", 19)(97, "div", 48)(98, "label", 49);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(99);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(100, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(101, "nb-select", 50);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(102, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(103, ProjectMutationComponent_nb_option_103_Template, 3, 4, "nb-option", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(104, "div", 51)(105, "ga-currency", 52);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("optionChange", function ProjectMutationComponent_Template_ga_currency_optionChange_105_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx.currencyChanged($event));
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(106, "nb-tab", 42);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(107, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(108, "div", 19)(109, "div", 48)(110, "label", 53);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(111);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(112, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(113, "nb-select", 54);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(114, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(115, ProjectMutationComponent_nb_option_115_Template, 3, 4, "nb-option", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(116, "keyvalue");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(117, ProjectMutationComponent_div_117_Template, 6, 7, "div", 55)(118, ProjectMutationComponent_div_118_Template, 6, 7, "div", 55);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(119, "nb-tab", 42);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(120, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(121, "div", 19)(122, "div", 56)(123, "nb-toggle", 57);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("checkedChange", function ProjectMutationComponent_Template_nb_toggle_checkedChange_123_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx.toggleOpenSource($event));
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(124);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(125, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(126, ProjectMutationComponent_div_126_Template, 6, 5, "div", 55);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(127, ProjectMutationComponent_nb_tab_127_Template, 3, 4, "nb-tab", 58);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(128, "nb-tab", 42);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(129, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(130, "div", 19)(131, "div", 59)(132, "label", 60);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(133);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(134, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(135, "input", 61);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(136, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("colorPickerChange", function ProjectMutationComponent_Template_input_colorPickerChange_135_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx.form.get("color").setValue($event));
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(137, "div", 59)(138, "label", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(139);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(140, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(141, "nb-select", 62);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(142, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(143, ProjectMutationComponent_nb_option_143_Template, 2, 2, "nb-option", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(144, "div", 19)(145, "div", 63)(146, "nb-toggle", 64, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("checkedChange", function ProjectMutationComponent_Template_nb_toggle_checkedChange_146_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx.togglePublic($event));
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(148);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(149, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(150, "div", 63)(151, "nb-toggle", 65, 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("checkedChange", function ProjectMutationComponent_Template_nb_toggle_checkedChange_151_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx.toggleBillable($event));
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(153);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(154, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(155, ProjectMutationComponent_nb_tab_155_Template, 12, 14, "nb-tab", 58)(156, ProjectMutationComponent_nb_tab_156_Template, 28, 22, "nb-tab", 58)(157, ProjectMutationComponent_nb_tab_157_Template, 3, 4, "nb-tab", 58);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainer"] */ .eu8(158, 66);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(159, ProjectMutationComponent_ng_template_159_Template, 9, 9, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplateRefExtractor"] */ .C5r);
          }
          if (rf & 2) {
            const startDate_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵreference"] */ .sdS(74);
            const endDate_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵreference"] */ .sdS(83);
            const actionButtons_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵreference"] */ .sdS(160);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("formGroup", ctx.form);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("tabTitle", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(5, 85, "ORGANIZATIONS_PAGE.MAIN"))("tabIcon", "person-outline");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.form && ctx.form.get("imageUrl").value);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpureFunction1"] */ .eq3(159, _c1, ctx.hoverState ? "0.2" : "0"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.form && ctx.form.get("imageUrl").value);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngIf", !ctx.form || !ctx.form.get("imageUrl").value);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(19, 87, "FORM.PLACEHOLDERS.NAME"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(22, 89, "FORM.PLACEHOLDERS.NAME"))("status", ctx.FormHelpers.isInvalidControl(ctx.form, "name") ? "danger" : "basic");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.FormHelpers.isInvalidControl(ctx.form, "name"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(27, 91, "FORM.PLACEHOLDERS.CODE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(30, 93, "FORM.PLACEHOLDERS.CODE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(35, 95, "FORM.LABELS.PROJECT_URL"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpropertyInterpolate"] */ .FS9("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(37, 97, "FORM.PLACEHOLDERS.PROJECT_URL"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("status", ctx.FormHelpers.isInvalidControl(ctx.form, "projectUrl") ? "danger" : "basic");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.projectUrl.hasError("pattern"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("selectedEmployeeIds", ctx.selectedManagerIds)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(41, 99, "FORM.LABELS.ADD_REMOVE_MANAGERS"))("label", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(42, 101, "FORM.LABELS.ADD_REMOVE_MANAGERS"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(47, 103, "FORM.PLACEHOLDERS.OWNER"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpropertyInterpolate"] */ .FS9("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(49, 105, "FORM.PLACEHOLDERS.OWNER"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx.owners);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(54, 107, "FORM.LABELS.CLIENTS"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("addTag", ctx.addNewOrganizationContact)("items", ctx.organizationContacts)("searchable", true)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(57, 109, "FORM.PLACEHOLDERS.CLIENTS"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("selectedEmployeeIds", ctx.selectedEmployeeIds);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("skipGlobalChange", true)("multiple", true)("showAllOption", false)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(63, 111, "FORM.PLACEHOLDERS.ADD_REMOVE_TEAMS"))("defaultSelected", false)("label", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(64, 113, "FORM.PLACEHOLDERS.ADD_REMOVE_TEAMS"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(70, 115, "FORM.PLACEHOLDERS.START_DATE_PROJECT"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpropertyInterpolate"] */ .FS9("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(72, 117, "FORM.PLACEHOLDERS.START_DATE_PROJECT"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("nbDatepicker", startDate_r13)("status", ctx.FormHelpers.isInvalidControl(ctx.form, "startDate") ? "danger" : "basic");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(79, 119, "FORM.PLACEHOLDERS.END_DATE_PROJECT"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpropertyInterpolate"] */ .FS9("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(81, 121, "FORM.PLACEHOLDERS.END_DATE_PROJECT"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("nbDatepicker", endDate_r14)("status", ctx.FormHelpers.isInvalidControl(ctx.form, "endDate") ? "danger" : "basic");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("tabTitle", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(85, 123, "ORGANIZATIONS_PAGE.DESCRIPTION"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(89, 125, "FORM.PLACEHOLDERS.DESCRIPTION"), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵsanitizeHtml"] */ .npT);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("config", ctx.ckConfig);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("selectedTags", ctx.form.get("tags").value)("isOrgLevel", true);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("tabTitle", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(95, 127, "ORGANIZATIONS_PAGE.BILLING"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(100, 129, "FORM.PLACEHOLDERS.BILLING"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpropertyInterpolate"] */ .FS9("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(102, 131, "FORM.PLACEHOLDERS.BILLING"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx.billings);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("tabTitle", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(107, 133, "ORGANIZATIONS_PAGE.BUDGET"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(112, 135, "FORM.PLACEHOLDERS.BUDGET_TYPE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(114, 137, "FORM.PLACEHOLDERS.BUDGET_TYPE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(116, 139, ctx.OrganizationProjectBudgetTypeEnum));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.form.controls.budgetType.value === ctx.OrganizationProjectBudgetTypeEnum.HOURS);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.form.controls.budgetType.value === ctx.OrganizationProjectBudgetTypeEnum.COST);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("tabTitle", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(120, 141, "ORGANIZATIONS_PAGE.OPEN_SOURCE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("checked", ctx.form.get("openSource").value);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(125, 143, "FORM.LABELS.IS_PROJECT_OPEN_SOURCE"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.form.get("openSource").value);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.form.get("taskListType").value == ctx.TaskListTypeEnum.SPRINT && ctx.project);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵstyleProp"] */ .xc7("min-height", "330px");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("tabTitle", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(129, 145, "ORGANIZATIONS_PAGE.SETTINGS"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(134, 147, "FORM.PLACEHOLDERS.COLOR"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵstyleProp"] */ .xc7("background-color", ctx.form.get("color").value + " !important")("color", "#fff");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpropertyInterpolate"] */ .FS9("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(136, 149, "FORM.PLACEHOLDERS.COLOR"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("colorPicker", ctx.form.get("color").value)("value", ctx.form.get("color").value);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(140, 151, "FORM.PLACEHOLDERS.TASK_VIEW_MODE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpropertyInterpolate"] */ .FS9("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(142, 153, "FORM.PLACEHOLDERS.TASK_VIEW_MODE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx.taskViewModeTypes);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("checked", ctx.form.get("public").value);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(149, 155, "FORM.PLACEHOLDERS.SWITCH_PROJECT_STATE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("checked", ctx.form.get("billable").value);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(154, 157, "FORM.PLACEHOLDERS.BILLABLE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.integration);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.integration);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.project == null ? null : ctx.project.id);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngTemplateOutlet", actionButtons_r15);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_38__/* .NgForOf */ .Sq, _angular_common__WEBPACK_IMPORTED_MODULE_38__/* .NgIf */ .bT, _angular_common__WEBPACK_IMPORTED_MODULE_38__/* .NgTemplateOutlet */ .T3, _angular_common__WEBPACK_IMPORTED_MODULE_38__/* .NgStyle */ .B3, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* ["ɵNgNoValidate"] */ .qT, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .DefaultValueAccessor */ .me, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .NumberValueAccessor */ .Q0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .NgControlStatus */ .BC, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .NgControlStatusGroup */ .cb, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .MinValidator */ .VZ, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .FormGroupDirective */ .j4, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .FormControlName */ .JD, _nebular_theme__WEBPACK_IMPORTED_MODULE_37__/* .NbButtonComponent */ .YP2, _nebular_theme__WEBPACK_IMPORTED_MODULE_37__/* .NbCardComponent */ .SrT, _nebular_theme__WEBPACK_IMPORTED_MODULE_37__/* .NbCardBodyComponent */ .KH5, _nebular_theme__WEBPACK_IMPORTED_MODULE_37__/* .NbDatepickerDirective */ .OA9, _nebular_theme__WEBPACK_IMPORTED_MODULE_37__/* .NbDatepickerComponent */ .k2z, _nebular_theme__WEBPACK_IMPORTED_MODULE_37__/* .NbInputDirective */ .i6h, _nebular_theme__WEBPACK_IMPORTED_MODULE_37__/* .NbSelectComponent */ .S81, _nebular_theme__WEBPACK_IMPORTED_MODULE_37__/* .NbOptionComponent */ .ZJ2, _nebular_theme__WEBPACK_IMPORTED_MODULE_37__/* .NbTabsetComponent */ .Hsi, _nebular_theme__WEBPACK_IMPORTED_MODULE_37__/* .NbTabComponent */ .d3K, _nebular_theme__WEBPACK_IMPORTED_MODULE_37__/* .NbToggleComponent */ .YF2, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_39__/* .NgSelectComponent */ .vr, ckeditor4_angular__WEBPACK_IMPORTED_MODULE_40__/* .CKEditorComponent */ .h, ngx_color_picker__WEBPACK_IMPORTED_MODULE_41__/* .ColorPickerDirective */ .bk, _directives_autocomplete_off_directive__WEBPACK_IMPORTED_MODULE_42__/* .AutocompleteOffDirective */ .h, _directives_img_directive__WEBPACK_IMPORTED_MODULE_43__/* .ImgDirective */ .z, _modules_currency_currency_component__WEBPACK_IMPORTED_MODULE_44__/* .CurrencyComponent */ .X, _employee_employee_multi_select_employee_multi_select_component__WEBPACK_IMPORTED_MODULE_45__/* .EmployeeSelectComponent */ .O, _image_uploader_image_uploader_component__WEBPACK_IMPORTED_MODULE_46__/* .ImageUploaderComponent */ .t, _tags_tags_color_input_tags_color_input_component__WEBPACK_IMPORTED_MODULE_47__/* .TagsColorInputComponent */ .i, _selectors_team_team_team_component__WEBPACK_IMPORTED_MODULE_48__/* .TeamSelectorComponent */ .s, _integrations_github_repository_selector_repository_selector_component__WEBPACK_IMPORTED_MODULE_49__/* .RepositorySelectorComponent */ .J, _project_module_project_module_table_project_module_table_component__WEBPACK_IMPORTED_MODULE_50__/* .ProjectModuleTableComponent */ .z, _angular_common__WEBPACK_IMPORTED_MODULE_38__/* .TitleCasePipe */ .PV, _angular_common__WEBPACK_IMPORTED_MODULE_38__/* .KeyValuePipe */ .lG, _pipes_replace_pipe__WEBPACK_IMPORTED_MODULE_51__/* .ReplacePipe */ .J, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_31__/* .TranslatePipe */ .D9],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   i[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n}\n[dir=ltr]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n[dir=rtl]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--gauzy-text-color-1);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(245, 109, 88, 0.3);\n  border-width: 2px;\n  color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(245, 109, 88, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 16px;\n  letter-spacing: 0em;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(126, 126, 143, 0.3);\n  border-width: 2px;\n  color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(126, 126, 143, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(37, 184, 105, 0.3);\n  border-width: 2px;\n  color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(37, 184, 105, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[disabled][_ngcontent-%COMP%], \n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic.btn-disabled[_ngcontent-%COMP%] {\n  background-color: var(--button-outline-basic-disabled-background-color);\n  border-color: var(--button-outline-basic-disabled-border-color);\n  color: var(--button-outline-basic-disabled-text-color);\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].primary.appearance-filled.status-primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  border: unset;\n  background-color: var(--color-primary-transparent-default);\n  box-shadow: var(--gauzy-shadow) 0, 0, 0, 0.15;\n}\n[dir=ltr]   [_nghost-%COMP%]     input, \n[dir=ltr]   [_nghost-%COMP%]     textarea {\n  text-align: start;\n}\n[dir=rtl]   [_nghost-%COMP%]     input, \n[dir=rtl]   [_nghost-%COMP%]     textarea {\n  text-align: end;\n}\n[_nghost-%COMP%]     input, \n[_nghost-%COMP%]     nb-select.appearance-outline.status-basic .select-button, \n[_nghost-%COMP%]     .ng-select .ng-select-container {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n  height: 42px !important;\n}\n[_nghost-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder, \n[_nghost-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {\n  top: unset !important;\n}\n[_nghost-%COMP%]     label, \n[_nghost-%COMP%]     .label {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  color: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]     textarea {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n}\n[_nghost-%COMP%]     .ng-select .ng-select-container input, \n[_nghost-%COMP%]     nb-tag-list input {\n  background-color: unset !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n}\n\n.project-toggle[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.action-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n}\n\n[dir=rtl]   [_nghost-%COMP%]     nb-card {\n  margin: -16px -18px -16px -8px;\n}\n[dir=ltr]   [_nghost-%COMP%]     nb-card {\n  margin: -16px -8px -16px -18px;\n}\n[_nghost-%COMP%]     nb-card nb-card-body {\n  padding: 0;\n}\n[_nghost-%COMP%]     nb-card nb-card-body nb-tab.content-active, [_nghost-%COMP%]     nb-card nb-card-body .action-buttons {\n  background-color: var(--gauzy-card-2);\n  margin: 0;\n}\n[_nghost-%COMP%]     nb-card nb-card-body nb-tab.content-active {\n  height: calc(100vh - 22.5rem);\n}\n[_nghost-%COMP%]     nb-card nb-card-body .action-buttons {\n  padding: 1rem 2rem;\n  border-radius: 0 0 var(--border-radius) var(--border-radius);\n}\n[_nghost-%COMP%]     nb-card nb-card-body input, [_nghost-%COMP%]     nb-card nb-card-body nb-select.appearance-outline.status-basic .select-button, [_nghost-%COMP%]     nb-card nb-card-body .ng-select .ng-select-container {\n  background-color: var(--background-basic-color-1) !important;\n}\n[_nghost-%COMP%]     nb-card nb-card-body .ng-select .ng-select-container input {\n  background-color: unset !important;\n}\n[_nghost-%COMP%]     nb-toggle div.checked + span.text {\n  color: var(--text-primary-color);\n}\n[_nghost-%COMP%]     nb-toggle div + span.text {\n  color: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]     label {\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 11px;\n  letter-spacing: 0em;\n  text-align: left;\n  color: var(--gauzy-text-color-2);\n}\n\n.project-tab-container[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n}\n.project-tab-container[_ngcontent-%COMP%]   .project-form-container[_ngcontent-%COMP%] {\n  width: 65%;\n}\n\n.project-image-container[_ngcontent-%COMP%] {\n  transition: transform 150ms ease-in-out;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  margin-right: 3rem;\n}\n.project-image-container[_ngcontent-%COMP%]   .project-image-photo[_ngcontent-%COMP%] {\n  width: fit-content;\n  height: 294px;\n  position: relative;\n}\n.project-image-container[_ngcontent-%COMP%]   .project-image-photo[_ngcontent-%COMP%]   .image-overlay[_ngcontent-%COMP%] {\n  pointer-events: none;\n  background: black;\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  border-radius: var(--border-radius);\n}\n.project-image-container[_ngcontent-%COMP%]   .project-image-photo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], \n.project-image-container[_ngcontent-%COMP%]   .project-image-photo[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\n  width: 299px;\n  height: 294px;\n  object-fit: cover;\n  border-radius: var(--border-radius);\n}\n.project-image-container[_ngcontent-%COMP%]   .project-image-photo[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\n  background-color: rgba(126, 126, 143, 0.1);\n}\n.project-image-container[_ngcontent-%COMP%]   .project-image-photo[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n.project-image-container[_ngcontent-%COMP%]   .project-image-photo[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  color: rgb(126, 126, 143);\n  z-index: 2;\n  transition: opacity 0.2s ease-in;\n  position: absolute;\n  top: calc(50% - 8px);\n  left: calc(50% - 70.5px);\n}\n.project-image-container[_ngcontent-%COMP%]   .project-image-photo[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  z-index: 2;\n  transition: opacity 0.2s ease-in;\n  opacity: 0.3;\n  position: absolute;\n  top: calc(50% - 34px);\n  left: calc(50% - 34px);\n}\n.project-image-container[_ngcontent-%COMP%]   .project-image-photo[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   g[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%] {\n  fill: var(--text-primary-color);\n}\n\n[_nghost-%COMP%]     ngx-image-uploader input {\n  height: 100% !important;\n}\n[_nghost-%COMP%]     input, \n[_nghost-%COMP%]     nb-select.appearance-outline.status-basic .select-button, \n[_nghost-%COMP%]     .ng-select .ng-select-container {\n  background-color: var(--gauzy-card-1) !important;\n  border: none;\n  height: 42px !important;\n}\n[_nghost-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder, \n[_nghost-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {\n  top: unset !important;\n}\n[_nghost-%COMP%]     label, \n[_nghost-%COMP%]     .label {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  color: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]     textarea {\n  background-color: var(--gauzy-card-1) !important;\n  border: none;\n}\n[_nghost-%COMP%]     .ng-select .ng-select-container input, \n[_nghost-%COMP%]     nb-tag-list input {\n  background-color: unset !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: transparent;\n}"]
      });
    }
  };
  return ProjectMutationComponent;
})();
ProjectMutationComponent = ProjectMutationComponent_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_52__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_17__/* .UntilDestroy */ .d)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_52__/* .__metadata */ .Sn)("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_28__/* .Router */ .Ix, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .UntypedFormBuilder */ .ze, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_29__/* .Store */ .il, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_30__/* .ToastrService */ .t, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_31__/* .TranslateService */ .c$, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_32__/* .ErrorHandlingService */ .X, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_33__/* .OrganizationTeamsService */ .F, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_34__/* .OrganizationContactService */ .$, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_35__/* .GithubService */ .p, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_36__/* .OrganizationProjectsService */ .d, _nebular_theme__WEBPACK_IMPORTED_MODULE_37__/* .NbDialogService */ .S0W])], ProjectMutationComponent);


/***/ }),

/***/ 87605:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: () => (/* binding */ ProjectModuleMutationModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14572);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10936);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(56383);
/* harmony import */ var ckeditor4_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(76166);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(55567);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(19223);
/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(34987);
/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(18471);
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(98048);
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(37383);
/* harmony import */ var _tags_tags_color_input_tags_color_input_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(61444);
/* harmony import */ var _employee_employee_multi_select_employee_multi_select_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6269);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);













let ProjectModuleMutationModule = /*#__PURE__*/(() => {
  class ProjectModuleMutationModule {
    static {
      this.ɵfac = function ProjectModuleMutationModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || ProjectModuleMutationModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .$C({
        type: ProjectModuleMutationModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .CommonModule */ .MD, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .FormsModule */ .YN, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .ReactiveFormsModule */ .X1, ckeditor4_angular__WEBPACK_IMPORTED_MODULE_3__/* .CKEditorModule */ .w, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbButtonModule */ .P5N, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbCardModule */ .lVF, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbDatepickerModule */ .TgK, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbDialogModule */ .nZv.forChild(), _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbIconModule */ .clu, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbInputModule */ .pty, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbToggleModule */ .jVr, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbRadioModule */ .iyp, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbSelectModule */ .VcP, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbToastrModule */ .EcJ, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__/* .NgSelectModule */ .MQ, _selectors__WEBPACK_IMPORTED_MODULE_6__/* .SelectorsModule */ .b, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__/* .TranslateModule */ .h.forChild(), _employee_employee_multi_select_employee_multi_select_module__WEBPACK_IMPORTED_MODULE_8__/* .EmployeeMultiSelectModule */ .I, _tags_tags_color_input_tags_color_input_module__WEBPACK_IMPORTED_MODULE_9__/* .TagsColorInputModule */ .x, _selectors__WEBPACK_IMPORTED_MODULE_10__/* .ProjectSelectModule */ .A, _tasks__WEBPACK_IMPORTED_MODULE_11__/* .TaskSelectModule */ .k, _tasks__WEBPACK_IMPORTED_MODULE_12__/* .TaskStatusSelectModule */ .w]
      });
    }
  }
  return ProjectModuleMutationModule;
})();

/***/ }),

/***/ 91998:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   r: () => (/* binding */ ProjectMutationModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14572);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10936);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56383);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(55567);
/* harmony import */ var ckeditor4_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(76166);
/* harmony import */ var ngx_color_picker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(80050);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(19223);
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(38834);
/* harmony import */ var _modules_currency_currency_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(43629);
/* harmony import */ var _employee_employee_multi_select_employee_multi_select_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6269);
/* harmony import */ var _image_uploader_image_uploader_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(54462);
/* harmony import */ var _tags_tags_color_input_tags_color_input_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(61444);
/* harmony import */ var _selectors_team_team_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(72943);
/* harmony import */ var _project_module_project_module_table_project_module_table_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(21781);
/* harmony import */ var _integrations_github_repository_selector_repository_selector_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(26852);
/* harmony import */ var _smart_data_layout__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(98722);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);


















let ProjectMutationModule = /*#__PURE__*/(() => {
  class ProjectMutationModule {
    static {
      this.ɵfac = function ProjectMutationModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || ProjectMutationModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .$C({
        type: ProjectMutationModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .CommonModule */ .MD, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .FormsModule */ .YN, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .ReactiveFormsModule */ .X1, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbButtonModule */ .P5N, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbCardModule */ .lVF, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbDatepickerModule */ .TgK, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbInputModule */ .pty, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbListModule */ .PD_, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbSelectModule */ .VcP, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbSpinnerModule */ .gYs, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbTabsetModule */ .AfG, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbToggleModule */ .jVr, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbIconModule */ .clu, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__/* .NgSelectModule */ .MQ, ckeditor4_angular__WEBPACK_IMPORTED_MODULE_5__/* .CKEditorModule */ .w, ngx_color_picker__WEBPACK_IMPORTED_MODULE_6__/* .ColorPickerComponent */ .h_, _shared_module__WEBPACK_IMPORTED_MODULE_7__/* .SharedModule */ .G, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__/* .TranslateModule */ .h.forChild(), _modules_currency_currency_module__WEBPACK_IMPORTED_MODULE_9__/* .CurrencyModule */ .C, _employee_employee_multi_select_employee_multi_select_module__WEBPACK_IMPORTED_MODULE_10__/* .EmployeeMultiSelectModule */ .I, _image_uploader_image_uploader_module__WEBPACK_IMPORTED_MODULE_11__/* .ImageUploaderModule */ .M, _tags_tags_color_input_tags_color_input_module__WEBPACK_IMPORTED_MODULE_12__/* .TagsColorInputModule */ .x, _selectors_team_team_module__WEBPACK_IMPORTED_MODULE_13__/* .TeamSelectModule */ .i, _integrations_github_repository_selector_repository_selector_module__WEBPACK_IMPORTED_MODULE_14__/* .RepositorySelectorModule */ .e, _smart_data_layout__WEBPACK_IMPORTED_MODULE_15__/* .SmartDataViewLayoutModule */ .H, _project_module_project_module_table_project_module_table_module__WEBPACK_IMPORTED_MODULE_16__/* .ProjectModuleTableModule */ .K]
      });
    }
  }
  return ProjectMutationModule;
})();

/***/ }),

/***/ 93363:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ VisibilityComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(55598);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41598);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88326);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39855);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(56383);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(14572);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(19223);








let VisibilityComponent = /*#__PURE__*/(() => {
  let VisibilityComponent = class VisibilityComponent {
    constructor() {
      this.visibilityChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .bkB();
      this._visibility$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__/* .BehaviorSubject */ .t(false);
    }
    ngOnInit() {
      this._visibility$.next(this.rowData.public);
      this.visibilityChange.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__/* .tap */ .M)(isPublic => this._visibility$.next(isPublic)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__/* .untilDestroyed */ .s)(this)).subscribe();
    }
    onCheckedChange(event) {
      this.visibilityChange.emit(event);
    }
    get visibility$() {
      return this._visibility$.asObservable();
    }
    set rowData(value) {
      if (value) {
        this._rowData = value;
      }
    }
    get rowData() {
      return this._rowData;
    }
    static {
      this.ɵfac = function VisibilityComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || VisibilityComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: VisibilityComponent,
        selectors: [["gauzy-visibility"]],
        inputs: {
          value: "value",
          rowData: "rowData"
        },
        outputs: {
          visibilityChange: "visibilityChange"
        },
        standalone: false,
        decls: 5,
        vars: 8,
        consts: [["status", "primary", 3, "checkedChange", "checked"]],
        template: function VisibilityComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-toggle", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(1, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("checkedChange", function VisibilityComponent_Template_nb_toggle_checkedChange_0_listener($event) {
              return ctx.onCheckedChange($event);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(3, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(4, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("checked", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(1, 2, ctx.visibility$));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(4, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(3, 4, ctx.visibility$) ? "BUTTONS.PRIVATE" : "BUTTONS.PUBLIC"));
          }
        },
        dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbToggleComponent */ .YF2, _angular_common__WEBPACK_IMPORTED_MODULE_5__/* .AsyncPipe */ .Jj, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__/* .TranslatePipe */ .D9],
        styles: ["[_nghost-%COMP%]     nb-toggle div.checked + span.text {\n  color: var(--text-primary-color);\n}\n[_nghost-%COMP%]     nb-toggle div + span.text {\n  color: var(--gauzy-text-color-2);\n}\n\n  nb-toggle.status-primary .toggle:not(.checked) {\n  background-color: rgb(126, 126, 143);\n  border-color: rgb(126, 126, 143);\n}"]
      });
    }
  };
  VisibilityComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__/* .UntilDestroy */ .d)({
    checkProperties: true
  }), (0,tslib__WEBPACK_IMPORTED_MODULE_7__/* .__metadata */ .Sn)("design:paramtypes", [])], VisibilityComponent);
  return VisibilityComponent;
})();


/***/ })

}]);