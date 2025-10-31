"use strict";
(self["webpackChunkgauzy"] = self["webpackChunkgauzy"] || []).push([[3734],{

/***/ 251:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ AddTaskDialogModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14572);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10936);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(56383);
/* harmony import */ var ckeditor4_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(76166);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(55567);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(19223);
/* harmony import */ var _tags_tags_color_input_tags_color_input_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(61444);
/* harmony import */ var _employee_employee_multi_select_employee_multi_select_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6269);
/* harmony import */ var _task_priority_select_task_priority_select_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(45455);
/* harmony import */ var _task_size_select_task_size_select_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(90845);
/* harmony import */ var _task_status_select_task_status_select_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(18471);
/* harmony import */ var _task_number_task_number_field_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(31664);
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(37383);
/* harmony import */ var _task_select_task_select_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(34987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);

















let AddTaskDialogModule = /*#__PURE__*/(() => {
  class AddTaskDialogModule {
    static {
      this.ɵfac = function AddTaskDialogModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || AddTaskDialogModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .$C({
        type: AddTaskDialogModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .CommonModule */ .MD, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .FormsModule */ .YN, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .ReactiveFormsModule */ .X1, ckeditor4_angular__WEBPACK_IMPORTED_MODULE_3__/* .CKEditorModule */ .w, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbButtonModule */ .P5N, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbCardModule */ .lVF, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbDatepickerModule */ .TgK, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbDialogModule */ .nZv.forRoot(), _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbIconModule */ .clu, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbInputModule */ .pty, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbRadioModule */ .iyp, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbSelectModule */ .VcP, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbToastrModule */ .EcJ, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__/* .NgSelectModule */ .MQ, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__/* .TranslateModule */ .h.forChild(), _employee_employee_multi_select_employee_multi_select_module__WEBPACK_IMPORTED_MODULE_7__/* .EmployeeMultiSelectModule */ .I, _tags_tags_color_input_tags_color_input_module__WEBPACK_IMPORTED_MODULE_8__/* .TagsColorInputModule */ .x, _selectors__WEBPACK_IMPORTED_MODULE_9__/* .ProjectSelectModule */ .A, _task_status_select_task_status_select_module__WEBPACK_IMPORTED_MODULE_10__/* .TaskStatusSelectModule */ .w, _task_priority_select_task_priority_select_module__WEBPACK_IMPORTED_MODULE_11__/* .TaskPrioritySelectModule */ .Q, _task_size_select_task_size_select_module__WEBPACK_IMPORTED_MODULE_12__/* .TaskSizeSelectModule */ .n, _task_number_task_number_field_module__WEBPACK_IMPORTED_MODULE_13__/* .TaskNumberFieldModule */ .L, _task_select_task_select_module__WEBPACK_IMPORTED_MODULE_14__/* .TaskSelectModule */ .k]
      });
    }
  }
  return AddTaskDialogModule;
})();

/***/ }),

/***/ 6761:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   x: () => (/* binding */ GauzyEditableGridModule)
/* harmony export */ });
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56383);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19223);
/* harmony import */ var _gauzy_button_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(60176);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26860);






const NbModules = [_nebular_theme__WEBPACK_IMPORTED_MODULE_0__/* .NbButtonModule */ .P5N, _nebular_theme__WEBPACK_IMPORTED_MODULE_0__/* .NbIconModule */ .clu, _nebular_theme__WEBPACK_IMPORTED_MODULE_0__/* .NbCardModule */ .lVF, _nebular_theme__WEBPACK_IMPORTED_MODULE_0__/* .NbListModule */ .PD_, _nebular_theme__WEBPACK_IMPORTED_MODULE_0__/* .NbDialogModule */ .nZv.forChild()];
const OtherModules = [_gauzy_button_action__WEBPACK_IMPORTED_MODULE_1__/* .GauzyButtonActionModule */ .N];
let GauzyEditableGridModule = /*#__PURE__*/(() => {
  class GauzyEditableGridModule {
    static {
      this.ɵfac = function GauzyEditableGridModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || GauzyEditableGridModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineNgModule"] */ .$C({
        type: GauzyEditableGridModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [NbModules, OtherModules, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__/* .TranslateModule */ .h.forChild()]
      });
    }
  }
  return GauzyEditableGridModule;
})();

/***/ }),

/***/ 9453:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: () => (/* binding */ AssignedToComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14572);
/* harmony import */ var _employee_with_links_employee_with_links_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39457);
/* harmony import */ var _task_teams_task_teams_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13015);




function AssignedToComponent_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "ngx-employee-with-links", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("value", ctx_r0.value);
  }
}
function AssignedToComponent_ng_container_0_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "ngx-task-teams", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("value", ctx_r0.value);
  }
}
function AssignedToComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, AssignedToComponent_ng_container_0_ng_container_1_Template, 2, 1, "ng-container", 0)(2, AssignedToComponent_ng_container_0_ng_container_2_Template, 2, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r0.view === "members");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r0.view === "teams");
  }
}
let AssignedToComponent = /*#__PURE__*/(() => {
  class AssignedToComponent {
    ngOnInit() {
      if (this.rowData) {
        if (this.rowData.members && this.rowData.members.length > 0) {
          this.view = 'members';
          this.value = [...this.rowData.members];
        } else if (this.rowData.teams && this.rowData.teams.length > 0) {
          this.view = 'teams';
          this.value = this._getTeamNames(this.rowData);
        }
      }
    }
    /**
     * Extracts an array of team names from the given task.
     * @param task The task object.
     * @returns An array of team names.
     */
    _getTeamNames(task) {
      if (task?.teams && Array.isArray(task.teams)) {
        return task.teams.map(team => team.name);
      }
      return [];
    }
    static {
      this.ɵfac = function AssignedToComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || AssignedToComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: AssignedToComponent,
        selectors: [["ngx-assigned-to"]],
        inputs: {
          rowData: "rowData",
          value: "value"
        },
        standalone: false,
        decls: 1,
        vars: 1,
        consts: [[4, "ngIf"], [3, "value"]],
        template: function AssignedToComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(0, AssignedToComponent_ng_container_0_Template, 3, 2, "ng-container", 0);
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.value);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .NgIf */ .bT, _employee_with_links_employee_with_links_component__WEBPACK_IMPORTED_MODULE_2__/* .EmployeeWithLinksComponent */ .j, _task_teams_task_teams_component__WEBPACK_IMPORTED_MODULE_3__/* .TaskTeamsComponent */ .f],
        encapsulation: 2
      });
    }
  }
  return AssignedToComponent;
})();

/***/ }),

/***/ 13715:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   X: () => (/* binding */ CreatedAtComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _pipes_datetime_format_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23830);


let CreatedAtComponent = /*#__PURE__*/(() => {
  class CreatedAtComponent {
    static {
      this.ɵfac = function CreatedAtComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || CreatedAtComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: CreatedAtComponent,
        selectors: [["ngx-created-at"]],
        inputs: {
          value: "value",
          rowData: "rowData"
        },
        standalone: false,
        decls: 3,
        vars: 3,
        template: function CreatedAtComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "dateTimeFormat");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI("", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(2, 1, ctx.value), " ");
          }
        },
        dependencies: [_pipes_datetime_format_pipe__WEBPACK_IMPORTED_MODULE_1__/* .DateTimeFormatPipe */ .V],
        styles: ["span[_ngcontent-%COMP%] {\n  display: inline-block;\n  text-transform: lowercase;\n}\nspan[_ngcontent-%COMP%]:first-letter {\n  text-transform: uppercase;\n}"]
      });
    }
  }
  return CreatedAtComponent;
})();

/***/ }),

/***/ 13845:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: () => (/* binding */ CreatedByUserComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9620);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14572);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56383);
/* harmony import */ var _directives_img_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(71466);






function CreatedByUserComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(1, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function CreatedByUserComponent_ng_container_1_Template_a_click_1_listener() {
      const createdByUser_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1).ngIf;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r2.edit(createdByUser_r2.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(2, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const createdByUser_r2 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("nbTooltip", createdByUser_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("src", createdByUser_r2.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵsanitizeUrl"] */ .B4B);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(createdByUser_r2.name);
  }
}
function CreatedByUserComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(ctx_r2.value);
  }
}
let CreatedByUserComponent = /*#__PURE__*/(() => {
  class CreatedByUserComponent {
    constructor(router) {
      this.router = router;
    }
    /**
     * Navigates to the employee edit page using the provided ID.
     *
     * @param id - The unique identifier of the employee to edit.
     */
    edit(id) {
      if (!id) {
        console.error('Invalid employee id. Cannot proceed with editing.');
        return;
      }
      this.router.navigate([`/pages/employees/edit/${id}`]);
    }
    static {
      this.ɵfac = function CreatedByUserComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || CreatedByUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_router__WEBPACK_IMPORTED_MODULE_1__/* .Router */ .Ix));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: CreatedByUserComponent,
        selectors: [["ngx-created-by-user"]],
        inputs: {
          value: "value",
          rowData: "rowData"
        },
        standalone: false,
        decls: 4,
        vars: 2,
        consts: [["noUser", ""], [1, "avatar-container"], [4, "ngIf", "ngIfElse"], [1, "avatar", 3, "click", "nbTooltip"], ["type", "createdByUser", 1, "img", 3, "src"], [1, "names-wrapper"]],
        template: function CreatedByUserComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, CreatedByUserComponent_ng_container_1_Template, 5, 3, "ng-container", 2)(2, CreatedByUserComponent_ng_template_2_Template, 2, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplateRefExtractor"] */ .C5r);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
          }
          if (rf & 2) {
            const noUser_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.rowData == null ? null : ctx.rowData.createdByUser)("ngIfElse", noUser_r4);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__/* .NgIf */ .bT, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbTooltipDirective */ .BmQ, _directives_img_directive__WEBPACK_IMPORTED_MODULE_4__/* .ImgDirective */ .z],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\na[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n[_nghost-%COMP%]   .avatar-container[_ngcontent-%COMP%] {\n  width: 100%;\n}\n[_nghost-%COMP%]   .avatar-container[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  border: 2px solid var(--border-basic-color-1);\n  background-color: var(--color-primary-transparent-default);\n  color: var(--text-primary-color);\n  border-radius: var(--button-rectangle-border-radius);\n  gap: 8px;\n  display: flex;\n  align-items: center;\n  width: fit-content;\n}\n[dir=ltr]   [_nghost-%COMP%]   .avatar-container[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  padding: 5px 14px 5px 7px;\n}\n[dir=rtl]   [_nghost-%COMP%]   .avatar-container[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  padding: 5px 7px 5px 14px;\n}\n[_nghost-%COMP%]   .avatar-container[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]   .names-wrapper[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  max-width: 110px;\n}\n[_nghost-%COMP%]   .avatar-container[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  border-radius: var(--button-rectangle-border-radius);\n}"]
      });
    }
  }
  return CreatedByUserComponent;
})();

/***/ }),

/***/ 29350:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   k: () => (/* binding */ GauzyEditableGridComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(55598);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(19223);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(56383);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39855);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52738);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(53827);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(41598);
/* harmony import */ var _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38546);
/* harmony import */ var _gauzy_button_action_gauzy_button_action_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(45293);











const _c0 = (a0, a1, a2) => ({
  $implicit: a0,
  action: a1,
  dialogRef: a2
});
const _c1 = a0 => ({
  $implicit: a0
});
function GauzyEditableGridComponent_ng_template_0_ng_container_0_1_ng_template_0_Template(rf, ctx) {}
function GauzyEditableGridComponent_ng_template_0_ng_container_0_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(0, GauzyEditableGridComponent_ng_template_0_ng_container_0_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function GauzyEditableGridComponent_ng_template_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, GauzyEditableGridComponent_ng_template_0_ng_container_0_1_Template, 1, 0, null, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const ref_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG().dialogRef;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngTemplateOutlet", ctx_r1.addDialogTmpl)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction3"] */ .sMw(2, _c0, ctx_r1.selectedItem, ctx_r1.currentAction, ref_r1));
  }
}
function GauzyEditableGridComponent_ng_template_0_ng_container_1_1_ng_template_0_Template(rf, ctx) {}
function GauzyEditableGridComponent_ng_template_0_ng_container_1_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(0, GauzyEditableGridComponent_ng_template_0_ng_container_1_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function GauzyEditableGridComponent_ng_template_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, GauzyEditableGridComponent_ng_template_0_ng_container_1_1_Template, 1, 0, null, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const ref_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG().dialogRef;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngTemplateOutlet", ctx_r1.editDialogTmpl)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction3"] */ .sMw(2, _c0, ctx_r1.selectedItem, ctx_r1.currentAction, ref_r1));
  }
}
function GauzyEditableGridComponent_ng_template_0_ng_container_2_1_ng_template_0_Template(rf, ctx) {}
function GauzyEditableGridComponent_ng_template_0_ng_container_2_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(0, GauzyEditableGridComponent_ng_template_0_ng_container_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function GauzyEditableGridComponent_ng_template_0_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, GauzyEditableGridComponent_ng_template_0_ng_container_2_1_Template, 1, 0, null, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const ref_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG().dialogRef;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngTemplateOutlet", ctx_r1.deleteDialogTmpl)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction3"] */ .sMw(2, _c0, ctx_r1.selectedItem, ctx_r1.currentAction, ref_r1));
  }
}
function GauzyEditableGridComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(0, GauzyEditableGridComponent_ng_template_0_ng_container_0_Template, 2, 6, "ng-container", 8)(1, GauzyEditableGridComponent_ng_template_0_ng_container_1_Template, 2, 6, "ng-container", 8)(2, GauzyEditableGridComponent_ng_template_0_ng_container_2_Template, 2, 6, "ng-container", 8);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r1.currentAction === "create");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r1.currentAction === "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r1.currentAction === "delete");
  }
}
function GauzyEditableGridComponent_nb_list_item_11_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainer"] */ .eu8(0);
  }
}
function GauzyEditableGridComponent_nb_list_item_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-list-item", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function GauzyEditableGridComponent_nb_list_item_11_Template_nb_list_item_click_0_listener() {
      const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r3).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.toggleItemSelection(item_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, GauzyEditableGridComponent_nb_list_item_11_ng_container_1_Template, 1, 0, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵclassProp"] */ .AVh("selected-item", (ctx_r1.selectedItem == null ? null : ctx_r1.selectedItem.id) === (item_r4 == null ? null : item_r4.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngTemplateOutlet", ctx_r1.itemTmpl)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction1"] */ .eq3(4, _c1, item_r4));
  }
}
function GauzyEditableGridComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 11)(1, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function GauzyEditableGridComponent_ng_template_12_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      const dialog_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(1);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.openDialog("edit", dialog_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(2, "nb-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(5, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function GauzyEditableGridComponent_ng_template_12_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      const dialog_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(1);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.openDialog("delete", dialog_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(6, "nb-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("disabled", !ctx_r1.selectedItem);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(4, 3, "BUTTONS.EDIT"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("disabled", !ctx_r1.selectedItem);
  }
}
function GauzyEditableGridComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function GauzyEditableGridComponent_ng_template_14_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      const dialog_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(1);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.openDialog("create", dialog_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "nb-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(3, 1, "BUTTONS.CREATE"), " ");
  }
}
let GauzyEditableGridComponent = /*#__PURE__*/(() => {
  let GauzyEditableGridComponent = class GauzyEditableGridComponent extends _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_1__/* .TranslationBaseComponent */ .K {
    constructor(translateService, dialogService) {
      super(translateService);
      this.translateService = translateService;
      this.dialogService = dialogService;
      this.dialogData = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .bkB();
      this.currentAction = null;
    }
    ngOnInit() {}
    toggleItemSelection(item) {
      if (!this.selectedItem || this.selectedItem.id !== item.id) {
        this.selectedItem = item;
        return;
      }
      this.selectedItem = null;
    }
    openDialog(itemAction, template) {
      this.currentAction = itemAction;
      this.dialogService.open(template
      // {
      //   context: {
      //     action: itemAction
      //   }
      // }
      ).onClose.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .tap */ .M)(() => {
        this.selectedItem = null;
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .filter */ .p)(Boolean), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .tap */ .M)(data => {
        // this.currentAction = itemAction;
        this.dialogData.emit({
          actionType: itemAction,
          data
        });
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .take */ .s)(1), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .untilDestroyed */ .s)(this)).subscribe();
    }
    ngOnDestroy() {}
    static {
      this.ɵfac = function GauzyEditableGridComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || GauzyEditableGridComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__/* .TranslateService */ .c$), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbDialogService */ .S0W));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: GauzyEditableGridComponent,
        selectors: [["ga-editable-grid"]],
        inputs: {
          items: "items",
          itemTmpl: "itemTmpl",
          addDialogTmpl: "addDialogTmpl",
          editDialogTmpl: "editDialogTmpl",
          deleteDialogTmpl: "deleteDialogTmpl"
        },
        outputs: {
          dialogData: "dialogData"
        },
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
        decls: 16,
        vars: 8,
        consts: [["dialog", ""], ["actionButtons", ""], ["visible", ""], ["size", "medium"], [1, "pb-0", "pr-0", "pl-0"], [1, "d-flex", "align-items-center", "justify-content-between"], [3, "hasLayoutSelector", "buttonTemplate", "buttonTemplateVisible", "isDisable"], [3, "selected-item", "click", 4, "ngFor", "ngForOf"], [4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "click"], [1, "actions"], ["nbButton", "", "status", "basic", "size", "small", 1, "action", "primary", 3, "click", "disabled"], ["icon", "edit-outline", 1, "mr-1"], ["nbButton", "", "status", "basic", "size", "small", 1, "action", 3, "click", "disabled"], ["status", "danger", "icon", "trash-2-outline"], ["nbButton", "", "status", "info", "size", "small", 1, "action", 3, "click"], ["icon", "plus-outline"]],
        template: function GauzyEditableGridComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(0, GauzyEditableGridComponent_ng_template_0_Template, 3, 3, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplateRefExtractor"] */ .C5r);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(3, "nb-card", 3)(4, "nb-card-header", 4)(5, "div", 5)(6, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(8, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(9, "ngx-gauzy-button-action", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(10, "nb-list");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(11, GauzyEditableGridComponent_nb_list_item_11_Template, 2, 6, "nb-list-item", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(12, GauzyEditableGridComponent_ng_template_12_Template, 7, 5, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplateRefExtractor"] */ .C5r)(14, GauzyEditableGridComponent_ng_template_14_Template, 4, 3, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplateRefExtractor"] */ .C5r);
          }
          if (rf & 2) {
            const actionButtons_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(13);
            const visible_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(8, 6, "TASKS_PAGE.SPRINTS_SETTINGS"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("hasLayoutSelector", false)("buttonTemplate", actionButtons_r8)("buttonTemplateVisible", visible_r9)("isDisable", !ctx.selectedItem);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx.items);
          }
        },
        dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbButtonComponent */ .YP2, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbIconComponent */ .tHu, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbCardComponent */ .SrT, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbCardHeaderComponent */ .zJv, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbListComponent */ .krR, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbListItemComponent */ .TdD, _gauzy_button_action_gauzy_button_action_component__WEBPACK_IMPORTED_MODULE_8__/* .GauzyButtonActionComponent */ .A, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__/* .TranslatePipe */ .D9],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.action[_ngcontent-%COMP%] {\n  box-shadow: var(--gauzy-shadow);\n  border: none;\n}\n.action[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}\n.action.info[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: var(--color-info-default);\n  color: white;\n  border-color: var(--color-info-default);\n}\n.action.info-text-1[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  color: var(--color-info-default);\n}\n.action.secondary[_ngcontent-%COMP%] {\n  color: #7e7e8f;\n}\n.action.success[_ngcontent-%COMP%] {\n  color: var(--color-success-default);\n}\n.action.warning[_ngcontent-%COMP%] {\n  color: rgb(245, 109, 88);\n}\n.action.orange[_ngcontent-%COMP%] {\n  color: rgb(255, 171, 45);\n}\n.action.primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n}\n.action.primary.soft[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: rgba(110, 73, 232, 0.1);\n}\n.action.select-nb[_ngcontent-%COMP%]     {\n  box-shadow: none;\n}\n.action.select-nb[_ngcontent-%COMP%]     .select-button {\n  box-shadow: var(--gauzy-shadow);\n  background: rgb(245, 245, 245);\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n.actions[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-2);\n  border-radius: var(--button-rectangle-border-radius);\n  padding: 2px 4px !important;\n}\n\n.gauzy-button-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n.card-custom-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n[_nghost-%COMP%]     input {\n  border-radius: var(--border-radius);\n  box-shadow: var(--gauzy-shadow) inset;\n}\n\n.selected-item[_ngcontent-%COMP%] {\n  background: rgba(126, 126, 143, 0.1);\n  box-shadow: 12.5px 0px 0px -5px rgba(126, 126, 143, 0.1) inset;\n  border-radius: var(--border-radius);\n}\n\n[_nghost-%COMP%]   nb-list-item[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-4);\n  margin-top: 4px;\n  border-radius: var(--border-radius);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: unset;\n}\n[_nghost-%COMP%]   nb-card.size-medium[_ngcontent-%COMP%] {\n  height: calc(100vh - 30rem);\n}\n[_nghost-%COMP%]   ngx-gauzy-button-action[_ngcontent-%COMP%]     .actions-container {\n  padding-top: 0;\n}"]
      });
    }
  };
  GauzyEditableGridComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .UntilDestroy */ .d)(), (0,tslib__WEBPACK_IMPORTED_MODULE_9__/* .__metadata */ .Sn)("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__/* .TranslateService */ .c$, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbDialogService */ .S0W])], GauzyEditableGridComponent);
  return GauzyEditableGridComponent;
})();


/***/ }),

/***/ 31664:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ TaskNumberFieldModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14572);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19223);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10936);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(56383);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);






let TaskNumberFieldModule = /*#__PURE__*/(() => {
  class TaskNumberFieldModule {
    static {
      this.ɵfac = function TaskNumberFieldModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || TaskNumberFieldModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .$C({
        type: TaskNumberFieldModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .CommonModule */ .MD, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .FormsModule */ .YN, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .ReactiveFormsModule */ .X1, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__/* .TranslateModule */ .h.forChild(), _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbInputModule */ .pty]
      });
    }
  }
  return TaskNumberFieldModule;
})();

/***/ }),

/***/ 39199:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ SprintDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10936);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20381);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26860);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56383);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14572);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19223);







const DEFAULTS = {
  name: 'Sprint',
  length: 14
};
let SprintDialogComponent = /*#__PURE__*/(() => {
  class SprintDialogComponent {
    constructor(fb) {
      this.fb = fb;
      this.options = {
        sprintIndex: 0
      };
      this.defaults = DEFAULTS;
      this.moment = moment__WEBPACK_IMPORTED_MODULE_0__;
    }
    ngOnInit() {
      this.initForm();
    }
    generateSprintName() {
      if (this.action === 'create') {
        return [`${this.defaults.name} ${this.options.sprintIndex + 1}`, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .Validators */ .k0.required];
      }
      return [this.sprintData?.name, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .Validators */ .k0.required];
    }
    generateSprintStartDate() {
      if (this.action === 'create' && !!this.options?.sprintStartDate) {
        return [moment__WEBPACK_IMPORTED_MODULE_0__(this.options.sprintStartDate).add(1, 'days').toDate()];
      }
      return [moment__WEBPACK_IMPORTED_MODULE_0__(this.sprintData?.startDate).toDate()];
    }
    generateSprintEndDate() {
      if (this.action === 'create' && !!this.options?.sprintStartDate) {
        return [moment__WEBPACK_IMPORTED_MODULE_0__(moment__WEBPACK_IMPORTED_MODULE_0__(this.options.sprintStartDate)).add(this.sprintData?.length || this.defaults.length, 'days').toDate()];
      }
      return [moment__WEBPACK_IMPORTED_MODULE_0__(this.sprintData?.endDate).add(this.defaults.length, 'days').toDate()];
    }
    initForm() {
      this.form = this.fb.group({
        name: this.generateSprintName(),
        goal: [this.sprintData?.goal],
        length: [this.sprintData?.length || this.defaults.length, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .Validators */ .k0.required],
        startDate: this.generateSprintStartDate(),
        endDate: this.generateSprintEndDate()
      });
    }
    save() {
      if (this.form.valid) {
        this.dialogRef.close({
          ...this.sprintData,
          ...this.form.value
        });
      }
    }
    close() {
      this.dialogRef.close();
    }
    static {
      this.ɵfac = function SprintDialogComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || SprintDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .UntypedFormBuilder */ .ze));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineComponent"] */ .VBU({
        type: SprintDialogComponent,
        selectors: [["ngx-sprint-dialog"]],
        inputs: {
          action: "action",
          sprintData: "sprintData",
          dialogRef: "dialogRef",
          options: "options"
        },
        standalone: false,
        decls: 63,
        vars: 46,
        consts: [["startDate", ""], ["endDate", ""], [1, "main"], [1, "d-flex", "flex-column"], [1, "cancel"], [1, "fas", "fa-times", 3, "click"], [1, "title"], [1, "body"], [3, "formGroup"], [1, "sprint"], [1, "row"], [1, "col-sm-12"], [1, "form-group"], [1, "label"], ["fullWidth", "", "status", "basic", "autocomplete", "off", "formControlName", "name", "type", "text", "nbInput", "", 1, "sprint__name", 3, "placeholder"], [1, "col"], ["nbInput", "", "formControlName", "startDate", 1, "sprint__start-date", 3, "placeholder", "nbDatepicker"], ["nbInput", "", "formControlName", "endDate", 1, "sprint__end-date", 3, "placeholder", "nbDatepicker"], [1, "col-6"], ["nbInput", "", "formControlName", "length", 1, "sprint__length", 3, "placeholder"], ["formControlName", "goal", "nbInput", "", "fullWidth", "", 1, "sprint__goal", 3, "placeholder"], [1, "text-left"], ["status", "basic", "outline", "", "nbButton", "", 1, "mr-3", 3, "click"], ["status", "success", "nbButton", "", 3, "click", "disabled"]],
        template: function SprintDialogComponent_Template(rf, ctx) {
          if (rf & 1) {
            const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵgetCurrentView"] */ .RV6();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(0, "nb-card", 2)(1, "nb-card-header", 3)(2, "span", 4)(3, "i", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .bIt("click", function SprintDialogComponent_Template_i_click_3_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .Njj(ctx.dialogRef.close());
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(4, "h5", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(6, "titlecase");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(7, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(8, "nb-card-body", 7)(9, "form", 8)(10, "div", 9)(11, "div", 10)(12, "div", 11)(13, "div", 12)(14, "label", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(15);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(16, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ .nrm(17, "input", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(18, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(19, "div", 10)(20, "div", 15)(21, "div", 12)(22, "label", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(23);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(24, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ .nrm(25, "input", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(26, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ .nrm(27, "nb-datepicker", null, 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(29, "div", 15)(30, "div", 12)(31, "label", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(32);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(33, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ .nrm(34, "input", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(35, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ .nrm(36, "nb-datepicker", null, 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(38, "div", 10)(39, "div", 18)(40, "div", 12)(41, "label", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(42);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(43, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ .nrm(44, "input", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(45, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ .nrm(46, "nb-datepicker", null, 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(48, "div", 10)(49, "div", 11)(50, "div", 12)(51, "label", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(52);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(53, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ .nrm(54, "textarea", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(55, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s()()()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(56, "nb-card-footer", 21)(57, "button", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .bIt("click", function SprintDialogComponent_Template_button_click_57_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .Njj(ctx.dialogRef.close());
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(58);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(59, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(60, "button", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .bIt("click", function SprintDialogComponent_Template_button_click_60_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵresetView"] */ .Njj(ctx.save());
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ .EFF(61);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(62, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s()()();
          }
          if (rf & 2) {
            const startDate_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵreference"] */ .sdS(28);
            const endDate_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵreference"] */ .sdS(37);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate2"] */ .Lme(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(6, 18, ctx.action), " ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(7, 20, "SPRINTS_PAGE.SPRINT"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("formGroup", ctx.form);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(16, 22, "FORM.LABELS.NAME"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpropertyInterpolate"] */ .FS9("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(18, 24, "SPRINTS_PAGE.ADD_SPRINT_NAME"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(24, 26, "FORM.LABELS.DATE_START"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpropertyInterpolate"] */ .FS9("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(26, 28, "FORM.PLACEHOLDERS.SPRINT_START_DATE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("nbDatepicker", startDate_r2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(33, 30, "FORM.LABELS.END_DATE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpropertyInterpolate"] */ .FS9("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(35, 32, "FORM.PLACEHOLDERS.SPRINT_END_DATE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("nbDatepicker", endDate_r3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(43, 34, "FORM.LABELS.LENGTH"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpropertyInterpolate"] */ .FS9("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(45, 36, "FORM.PLACEHOLDERS.SPRINT_LENGTH"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(53, 38, "FORM.LABELS.GOAL"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpropertyInterpolate"] */ .FS9("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(55, 40, "FORM.PLACEHOLDERS.SPRINT_GOAL"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(59, 42, "BUTTONS.CANCEL"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("disabled", ctx.form.invalid);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(62, 44, "BUTTONS.SAVE"), " ");
          }
        },
        dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbCardComponent */ .SrT, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbCardBodyComponent */ .KH5, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbCardFooterComponent */ .VDm, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbCardHeaderComponent */ .zJv, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbButtonComponent */ .YP2, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* ["ɵNgNoValidate"] */ .qT, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .DefaultValueAccessor */ .me, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .NgControlStatus */ .BC, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .NgControlStatusGroup */ .cb, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .FormGroupDirective */ .j4, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .FormControlName */ .JD, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbDatepickerDirective */ .OA9, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbDatepickerComponent */ .k2z, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbInputDirective */ .i6h, _angular_common__WEBPACK_IMPORTED_MODULE_4__/* .TitleCasePipe */ .PV, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__/* .TranslatePipe */ .D9],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   i[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n}\n[dir=ltr]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n[dir=rtl]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--gauzy-text-color-1);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(245, 109, 88, 0.3);\n  border-width: 2px;\n  color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(245, 109, 88, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 16px;\n  letter-spacing: 0em;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(126, 126, 143, 0.3);\n  border-width: 2px;\n  color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(126, 126, 143, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(37, 184, 105, 0.3);\n  border-width: 2px;\n  color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(37, 184, 105, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[disabled][_ngcontent-%COMP%], \n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic.btn-disabled[_ngcontent-%COMP%] {\n  background-color: var(--button-outline-basic-disabled-background-color);\n  border-color: var(--button-outline-basic-disabled-border-color);\n  color: var(--button-outline-basic-disabled-text-color);\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].primary.appearance-filled.status-primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  border: unset;\n  background-color: var(--color-primary-transparent-default);\n  box-shadow: var(--gauzy-shadow) 0, 0, 0, 0.15;\n}\n[dir=ltr]   [_nghost-%COMP%]     input, \n[dir=ltr]   [_nghost-%COMP%]     textarea {\n  text-align: start;\n}\n[dir=rtl]   [_nghost-%COMP%]     input, \n[dir=rtl]   [_nghost-%COMP%]     textarea {\n  text-align: end;\n}\n[_nghost-%COMP%]     input, \n[_nghost-%COMP%]     nb-select.appearance-outline.status-basic .select-button, \n[_nghost-%COMP%]     .ng-select .ng-select-container {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n  height: 42px !important;\n}\n[_nghost-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder, \n[_nghost-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {\n  top: unset !important;\n}\n[_nghost-%COMP%]     label, \n[_nghost-%COMP%]     .label {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  color: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]     textarea {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n}\n[_nghost-%COMP%]     .ng-select .ng-select-container input, \n[_nghost-%COMP%]     nb-tag-list input {\n  background-color: unset !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n}\n\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.main[_ngcontent-%COMP%] {\n  width: 645px;\n  background-color: var(--gauzy-card-1);\n}\n\nlabel[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  text-align: left;\n}"]
      });
    }
  }
  return SprintDialogComponent;
})();

/***/ }),

/***/ 45455:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Q: () => (/* binding */ TaskPrioritySelectModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14572);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(55567);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10936);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46694);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19223);
/* harmony import */ var _task_badge_view_task_badge_view_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(16119);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);








let TaskPrioritySelectModule = /*#__PURE__*/(() => {
  class TaskPrioritySelectModule {
    static {
      this.ɵfac = function TaskPrioritySelectModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || TaskPrioritySelectModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .$C({
        type: TaskPrioritySelectModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .G2t({
        providers: [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_1__/* .TaskPrioritiesService */ .T],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__/* .CommonModule */ .MD, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .FormsModule */ .YN, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__/* .NgSelectModule */ .MQ, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__/* .NgSelectModule */ .MQ, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__/* .TranslateModule */ .h.forChild(), _task_badge_view_task_badge_view_module__WEBPACK_IMPORTED_MODULE_6__/* .TaskBadgeViewComponentModule */ .z]
      });
    }
  }
  return TaskPrioritySelectModule;
})();

/***/ }),

/***/ 51782:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   X: () => (/* binding */ TaskStatusFilterComponent)
/* harmony export */ });
/* harmony import */ var angular2_smart_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52345);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26860);
/* harmony import */ var _tasks_task_status_select_task_status_select_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25448);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19223);





let TaskStatusFilterComponent = /*#__PURE__*/(() => {
  class TaskStatusFilterComponent extends angular2_smart_table__WEBPACK_IMPORTED_MODULE_0__/* .DefaultFilter */ .yG {
    constructor() {
      super();
    }
    /**
     *
     * @param changes
     */
    ngOnChanges(changes) {}
    /**
     *
     * @param value
     */
    onChange(value) {
      this.column.filterFunction(value, this.column.id);
    }
    static {
      this.ɵfac = function TaskStatusFilterComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || TaskStatusFilterComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineComponent"] */ .VBU({
        type: TaskStatusFilterComponent,
        selectors: [["ga-task-status-select-filter"]],
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3, _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵNgOnChangesFeature"] */ .OA$],
        decls: 2,
        vars: 5,
        consts: [[3, "onChanged", "defaultSelected", "addTag", "placeholder"]],
        template: function TaskStatusFilterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "ga-task-status-select", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(1, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("onChanged", function TaskStatusFilterComponent_Template_ga_task_status_select_onChanged_0_listener($event) {
              return ctx.onChange($event);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("defaultSelected", false)("addTag", false)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(1, 3, "TASKS_PAGE.TASKS_STATUS"));
          }
        },
        dependencies: [_tasks_task_status_select_task_status_select_component__WEBPACK_IMPORTED_MODULE_2__/* .TaskStatusSelectComponent */ .v, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__/* .TranslatePipe */ .D9],
        encapsulation: 2
      });
    }
  }
  return TaskStatusFilterComponent;
})();

/***/ }),

/***/ 65217:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   w: () => (/* binding */ TasksSprintSettingsViewComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(55598);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20381);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(79708);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52738);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39855);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(41598);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(97939);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(71924);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26860);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(14572);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(56383);
/* harmony import */ var _editable_grid_gauzy_editable_grid_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(29350);
/* harmony import */ var _sprint_dialog_sprint_dialog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(39199);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(19223);
/* harmony import */ var _pipes_text_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(43826);














const _c0 = (a0, a1) => ({
  sprintIndex: a0,
  sprintStartDate: a1
});
function TasksSprintSettingsViewComponent_nb_card_body_3_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(0, "ngx-sprint-dialog", 10);
  }
  if (rf & 2) {
    let tmp_12_0;
    const action_r3 = ctx.action;
    const dialogRef_r4 = ctx.dialogRef;
    const sprints_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("action", action_r3)("dialogRef", dialogRef_r4)("options", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpureFunction2"] */ .l_i(3, _c0, sprints_r5 == null ? null : sprints_r5.length, (tmp_12_0 = sprints_r5.slice(-1)[0]) == null ? null : tmp_12_0.endDate));
  }
}
function TasksSprintSettingsViewComponent_nb_card_body_3_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(0, "ngx-sprint-dialog", 11);
  }
  if (rf & 2) {
    const sprint_r6 = ctx.$implicit;
    const action_r7 = ctx.action;
    const dialogRef_r8 = ctx.dialogRef;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("action", action_r7)("sprintData", sprint_r6)("dialogRef", dialogRef_r8);
  }
}
function TasksSprintSettingsViewComponent_nb_card_body_3_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "nb-card")(1, "nb-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(4, "nb-card-body");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(7, "nb-card-footer")(8, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("click", function TasksSprintSettingsViewComponent_nb_card_body_3_ng_template_6_Template_button_click_8_listener() {
      const dialogRef_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r9).dialogRef;
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(dialogRef_r10.close());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(11, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("click", function TasksSprintSettingsViewComponent_nb_card_body_3_ng_template_6_Template_button_click_11_listener() {
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r9);
      const sprint_r12 = ctx_r10.$implicit;
      const dialogRef_r10 = ctx_r10.dialogRef;
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(dialogRef_r10.close(sprint_r12));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()();
  }
  if (rf & 2) {
    const sprint_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(3, 5, "TASKS_PAGE.DELETE_SPRINT"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate2"] */ .Lme("", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(6, 7, "TASKS_PAGE.ARE_YOU_SURE"), ": ", sprint_r12.name, "?");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(10, 9, "BUTTONS.NO"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(13, 11, "BUTTONS.YES"), " ");
  }
}
function TasksSprintSettingsViewComponent_nb_card_body_3_ng_template_8_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "div", 19)(1, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(4, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const sprint_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI("", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(3, 2, "TASKS_PAGE.DATE_START"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .JRh(sprint_r13.startDate ? ctx_r1.moment(sprint_r13.startDate).format("DD-MM-YYYY") : null);
  }
}
function TasksSprintSettingsViewComponent_nb_card_body_3_ng_template_8_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "div", 19)(1, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(4, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const sprint_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI("", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(3, 2, "TASKS_PAGE.DATE_END"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .JRh(sprint_r13.startDate ? ctx_r1.moment(sprint_r13.endDate).format("DD-MM-YYYY") : null);
  }
}
function TasksSprintSettingsViewComponent_nb_card_body_3_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "div", 14)(1, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(3, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(5, "truncate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(6, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(7, TasksSprintSettingsViewComponent_nb_card_body_3_ng_template_8_div_7_Template, 6, 4, "div", 18)(8, TasksSprintSettingsViewComponent_nb_card_body_3_ng_template_8_div_8_Template, 6, 4, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const sprint_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .JRh(sprint_r13.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind2"] */ .i5U(5, 4, sprint_r13.goal, 50));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngIf", sprint_r13.startDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngIf", sprint_r13.startDate);
  }
}
function TasksSprintSettingsViewComponent_nb_card_body_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "nb-card-body", 8)(1, "ga-editable-grid", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("dialogData", function TasksSprintSettingsViewComponent_nb_card_body_3_Template_ga_editable_grid_dialogData_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx_r1.sprintAction($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(2, TasksSprintSettingsViewComponent_nb_card_body_3_ng_template_2_Template, 1, 6, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplateRefExtractor"] */ .C5r)(4, TasksSprintSettingsViewComponent_nb_card_body_3_ng_template_4_Template, 1, 3, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplateRefExtractor"] */ .C5r)(6, TasksSprintSettingsViewComponent_nb_card_body_3_ng_template_6_Template, 14, 13, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplateRefExtractor"] */ .C5r)(8, TasksSprintSettingsViewComponent_nb_card_body_3_ng_template_8_Template, 9, 7, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplateRefExtractor"] */ .C5r);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const sprints_r5 = ctx.ngIf;
    const addDialog_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵreference"] */ .sdS(3);
    const editDialog_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵreference"] */ .sdS(5);
    const deleteDialog_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵreference"] */ .sdS(7);
    const item_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵreference"] */ .sdS(9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("itemTmpl", item_r17)("items", sprints_r5)("addDialogTmpl", addDialog_r14)("editDialogTmpl", editDialog_r15)("deleteDialogTmpl", deleteDialog_r16);
  }
}
let TasksSprintSettingsViewComponent = /*#__PURE__*/(() => {
  let TasksSprintSettingsViewComponent = class TasksSprintSettingsViewComponent {
    constructor(store, storeService) {
      this.store = store;
      this.storeService = storeService;
      this.sprints$ = this.store.sprints$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .map */ .T)(sprints => sprints.filter(sprint => sprint.projectId === this.project?.id)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__/* .map */ .T)(sprints => {
        return sprints.sort((sprint, nextSprint) => sprint.startDate < nextSprint.startDate ? -1 : 1);
      }));
      this.moment = moment__WEBPACK_IMPORTED_MODULE_0__;
    }
    ngOnInit() {
      this.storeService.selectedOrganization$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .filter */ .p)(organization => !!organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .tap */ .M)(organization => this.organization = organization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .tap */ .M)(() => this.store.fetchSprints({
        organizationId: this.organization.id,
        tenantId: this.storeService.user.tenantId,
        projectId: this.project?.id
      })), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .untilDestroyed */ .s)(this)).subscribe();
    }
    sprintAction({
      actionType,
      data
    }) {
      switch (actionType) {
        case 'create':
          const createSprintInput = {
            ...data,
            organizationId: this.project.organizationId,
            tenantId: this.storeService.user.tenantId,
            projectId: this.project.id
          };
          this.store.createSprint(createSprintInput).pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .untilDestroyed */ .s)(this)).subscribe();
          break;
        case 'edit':
          this.store.updateSprint(data).pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .untilDestroyed */ .s)(this)).subscribe();
          break;
        case 'delete':
          this.store.deleteSprint(data.id).pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .untilDestroyed */ .s)(this)).subscribe();
          break;
      }
    }
    ngOnDestroy() {}
    static {
      this.ɵfac = function TasksSprintSettingsViewComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || TasksSprintSettingsViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_6__/* .SprintStoreService */ .x), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_7__/* .Store */ .il));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineComponent"] */ .VBU({
        type: TasksSprintSettingsViewComponent,
        selectors: [["ngx-tasks-sprint-settings-view"]],
        inputs: {
          project: "project"
        },
        standalone: false,
        decls: 5,
        vars: 3,
        consts: [["addDialog", ""], ["editDialog", ""], ["deleteDialog", ""], ["item", ""], [1, "sprints"], [1, "sprints__settings"], [1, "card"], ["class", "pt-0", 4, "ngIf"], [1, "pt-0"], [3, "dialogData", "itemTmpl", "items", "addDialogTmpl", "editDialogTmpl", "deleteDialogTmpl"], [3, "action", "dialogRef", "options"], [3, "action", "sprintData", "dialogRef"], ["nbButton", "", "status", "warning", "size", "small", 1, "mr-3", 3, "click"], ["nbButton", "", "status", "success", "size", "small", 3, "click"], [1, "d-flex", "justify-content-between", "align-items-center", "px-2", "sprints__item", "w-100"], [1, "col-2"], [1, "col"], [1, "col-4", "d-flex", "flex-column"], ["class", "row", 4, "ngIf"], [1, "row"], [1, "col-6"]],
        template: function TasksSprintSettingsViewComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "div", 4)(1, "div", 5)(2, "nb-card", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(3, TasksSprintSettingsViewComponent_nb_card_body_3_Template, 10, 5, "nb-card-body", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(4, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(4, 1, ctx.sprints$));
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__/* .NgIf */ .bT, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbCardComponent */ .SrT, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbCardBodyComponent */ .KH5, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbCardFooterComponent */ .VDm, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbCardHeaderComponent */ .zJv, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbButtonComponent */ .YP2, _editable_grid_gauzy_editable_grid_component__WEBPACK_IMPORTED_MODULE_10__/* .GauzyEditableGridComponent */ .k, _sprint_dialog_sprint_dialog_component__WEBPACK_IMPORTED_MODULE_11__/* .SprintDialogComponent */ .M, _angular_common__WEBPACK_IMPORTED_MODULE_8__/* .AsyncPipe */ .Jj, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__/* .TranslatePipe */ .D9, _pipes_text_pipe__WEBPACK_IMPORTED_MODULE_13__/* .TruncatePipe */ .H],
        styles: ["[_nghost-%COMP%]   ga-editable-grid[_ngcontent-%COMP%]     nb-card {\n  margin: 0;\n}\n[_nghost-%COMP%]   .sprints[_ngcontent-%COMP%] {\n  padding: 0rem 1rem;\n}\n[_nghost-%COMP%]   nb-card.card[_ngcontent-%COMP%] {\n  background-color: unset;\n  border: none;\n  border-radius: var(--border-radius);\n  padding-top: 0;\n}"]
      });
    }
  };
  TasksSprintSettingsViewComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_14__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .UntilDestroy */ .d)(), (0,tslib__WEBPACK_IMPORTED_MODULE_14__/* .__metadata */ .Sn)("design:paramtypes", [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_6__/* .SprintStoreService */ .x, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_7__/* .Store */ .il])], TasksSprintSettingsViewComponent);
  return TasksSprintSettingsViewComponent;
})();


/***/ }),

/***/ 68000:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K: () => (/* binding */ TableFiltersModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14572);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10936);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(56383);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(59086);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(55567);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19223);
/* harmony import */ var _expenses_expense_category_select_expense_category_select_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(28826);
/* harmony import */ var _vendor_select_vendor_select_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(55384);
/* harmony import */ var _tags_tags_color_input_tags_color_input_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(61444);
/* harmony import */ var _contact_select_contact_select_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(11336);
/* harmony import */ var _tasks_task_status_select_task_status_select_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(18471);
/* harmony import */ var _product__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(17492);
/* harmony import */ var _product__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(87736);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);














let TableFiltersModule = /*#__PURE__*/(() => {
  class TableFiltersModule {
    static {
      this.ɵfac = function TableFiltersModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || TableFiltersModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .$C({
        type: TableFiltersModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .CommonModule */ .MD, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .FormsModule */ .YN, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .ReactiveFormsModule */ .X1, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_3__/* .NgSelectModule */ .MQ, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__/* .TranslateModule */ .h.forChild(), _tags_tags_color_input_tags_color_input_module__WEBPACK_IMPORTED_MODULE_5__/* .TagsColorInputModule */ .x, _vendor_select_vendor_select_module__WEBPACK_IMPORTED_MODULE_6__/* .VendorSelectModule */ .z, _expenses_expense_category_select_expense_category_select_module__WEBPACK_IMPORTED_MODULE_7__/* .ExpenseCategorySelectModule */ .H, _product__WEBPACK_IMPORTED_MODULE_8__/* .ProductCategorySelectorModule */ .f, _product__WEBPACK_IMPORTED_MODULE_9__/* .ProductTypeSelectorModule */ .f, _contact_select_contact_select_module__WEBPACK_IMPORTED_MODULE_10__/* .ContactSelectModule */ .T, _tasks_task_status_select_task_status_select_module__WEBPACK_IMPORTED_MODULE_11__/* .TaskStatusSelectModule */ .w, _nebular_theme__WEBPACK_IMPORTED_MODULE_12__/* .NbToggleModule */ .jVr, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__/* .FontAwesomeModule */ .dX]
      });
    }
  }
  return TableFiltersModule;
})();

/***/ }),

/***/ 78433:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ OrganizationTeamFilterComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(73014);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(55598);
/* harmony import */ var angular2_smart_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52345);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4644);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(39938);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39855);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(52738);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(41598);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(26024);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(71924);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(14572);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(55567);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(19223);














function OrganizationTeamFilterComponent_ng_option_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "ng-option", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const team_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("value", team_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", team_r1.name, " ");
  }
}
let OrganizationTeamFilterComponent = /*#__PURE__*/(() => {
  let OrganizationTeamFilterComponent = class OrganizationTeamFilterComponent extends angular2_smart_table__WEBPACK_IMPORTED_MODULE_1__/* .DefaultFilter */ .yG {
    constructor(store, organizationTeamsService) {
      super();
      this.store = store;
      this.organizationTeamsService = organizationTeamsService;
      this.teams = [];
      this.subject$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__/* .Subject */ .B();
    }
    ngOnInit() {
      this.subject$.pipe(
      // Tap operator: Perform actions when a notification is received
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .tap */ .M)(() => this.getTeams()),
      // untilDestroyed: Automatically unsubscribe when the component is destroyed
      (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .untilDestroyed */ .s)(this)).subscribe();
      // Subscribe to changes in the selected organization and employee
      const storeOrganization$ = this.store.selectedOrganization$;
      const storeEmployee$ = this.store.selectedEmployee$;
      (0,rxjs__WEBPACK_IMPORTED_MODULE_5__/* .combineLatest */ .z)([storeOrganization$, storeEmployee$]).pipe(
      // Ensure distinct combinations are processed
      (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_6__/* .distinctUntilChange */ .nI)(),
      // Filter out combinations where the organization is falsy
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .filter */ .p)(([organization]) => !!organization),
      // Perform actions when new values are emitted
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .tap */ .M)(([organization, employee]) => {
        // Update component properties based on the emitted values
        this.organization = organization;
        this.selectedEmployeeId = employee ? employee.id : null;
      }),
      // Emit a notification to trigger further actions
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .tap */ .M)(() => this.subject$.next(true)),
      // Automatically unsubscribe when the component is destroyed
      (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .untilDestroyed */ .s)(this)).subscribe();
    }
    ngOnChanges(changes) {}
    /**
     *
     * @param value
     */
    onChange(value) {
      this.column.filterFunction(value, this.column.id);
    }
    /**
     *
     * @returns
     */
    getTeams() {
      var _this = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A)(function* () {
        if (!_this.organization) {
          return;
        }
        try {
          const {
            id: organizationId,
            tenantId
          } = _this.organization;
          // Fetch teams from the service
          const {
            items = []
          } = yield _this.organizationTeamsService.getMyTeams({
            organizationId,
            tenantId,
            // Additional parameters based on selectedEmployeeId
            ...(_this.selectedEmployeeId ? {
              members: {
                employeeId: _this.selectedEmployeeId
              }
            } : {})
          });
          // Update the teams property with the fetched items
          _this.teams = items;
        } catch (error) {
          // Handle errors, log or display error messages
          console.error('Error while fetching teams:', error);
          // You might want to notify the user or perform other error handling actions
        }
      })();
    }
    static {
      this.ɵfac = function OrganizationTeamFilterComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || OrganizationTeamFilterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_9__/* .Store */ .il), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_10__/* .OrganizationTeamsService */ .F));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: OrganizationTeamFilterComponent,
        selectors: [["ga-organization-team-select-filter"]],
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵNgOnChangesFeature"] */ .OA$],
        decls: 3,
        vars: 6,
        consts: [[3, "change", "clearable", "closeOnSelect", "placeholder"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]],
        template: function OrganizationTeamFilterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "ng-select", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(1, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("change", function OrganizationTeamFilterComponent_Template_ng_select_change_0_listener($event) {
              return ctx.onChange($event);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(2, OrganizationTeamFilterComponent_ng_option_2_Template, 2, 2, "ng-option", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("clearable", true)("closeOnSelect", true)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(1, 4, "TASKS_PAGE.SELECT"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx.teams);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__/* .NgForOf */ .Sq, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__/* .NgSelectComponent */ .vr, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__/* .NgOptionComponent */ .xt, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__/* .TranslatePipe */ .D9],
        encapsulation: 2
      });
    }
  };
  OrganizationTeamFilterComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_14__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .UntilDestroy */ .d)({
    checkProperties: true
  }), (0,tslib__WEBPACK_IMPORTED_MODULE_14__/* .__metadata */ .Sn)("design:paramtypes", [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_9__/* .Store */ .il, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_10__/* .OrganizationTeamsService */ .F])], OrganizationTeamFilterComponent);
  return OrganizationTeamFilterComponent;
})();


/***/ }),

/***/ 90845:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   n: () => (/* binding */ TaskSizeSelectModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14572);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10936);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(55567);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99236);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19223);
/* harmony import */ var _task_badge_view_task_badge_view_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(16119);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);








let TaskSizeSelectModule = /*#__PURE__*/(() => {
  class TaskSizeSelectModule {
    static {
      this.ɵfac = function TaskSizeSelectModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || TaskSizeSelectModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .$C({
        type: TaskSizeSelectModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .G2t({
        providers: [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_1__/* .TaskSizesService */ .L],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__/* .CommonModule */ .MD, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .FormsModule */ .YN, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__/* .NgSelectModule */ .MQ, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__/* .TranslateModule */ .h.forChild(), _task_badge_view_task_badge_view_module__WEBPACK_IMPORTED_MODULE_6__/* .TaskBadgeViewComponentModule */ .z]
      });
    }
  }
  return TaskSizeSelectModule;
})();

/***/ }),

/***/ 94500:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   f: () => (/* binding */ TasksSprintSettingsViewModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14572);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10936);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56383);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19223);
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(38834);
/* harmony import */ var _editable_grid_gauzy_editable_grid_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6761);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);








let TasksSprintSettingsViewModule = /*#__PURE__*/(() => {
  class TasksSprintSettingsViewModule {
    static {
      this.ɵfac = function TasksSprintSettingsViewModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || TasksSprintSettingsViewModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .$C({
        type: TasksSprintSettingsViewModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .CommonModule */ .MD, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbCardModule */ .lVF, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbIconModule */ .clu, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbButtonModule */ .P5N, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .FormsModule */ .YN, _angular_forms__WEBPACK_IMPORTED_MODULE_3__/* .ReactiveFormsModule */ .X1, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbDatepickerModule */ .TgK, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__/* .TranslateModule */ .h.forChild(), _editable_grid_gauzy_editable_grid_module__WEBPACK_IMPORTED_MODULE_5__/* .GauzyEditableGridModule */ .x, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbInputModule */ .pty, _shared_module__WEBPACK_IMPORTED_MODULE_6__/* .SharedModule */ .G]
      });
    }
  }
  return TasksSprintSettingsViewModule;
})();

/***/ }),

/***/ 97939:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   x: () => (/* binding */ SprintStoreService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(55598);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88326);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39855);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(53827);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(79708);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(49708);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41598);
/* harmony import */ var _organization_sprint_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(44507);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(26860);







let SprintStoreService = /*#__PURE__*/(() => {
  let SprintStoreService = class SprintStoreService {
    get sprints() {
      return this._sprints$.getValue();
    }
    constructor(sprintService) {
      this.sprintService = sprintService;
      this._sprints$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__/* .BehaviorSubject */ .t([]);
      this.sprints$ = this._sprints$.asObservable();
    }
    fetchSprints(findInput = {}) {
      this.sprintService.getAllSprints(findInput).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__/* .tap */ .M)(({
        items
      }) => this.loadAllSprints(items)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__/* .untilDestroyed */ .s)(this)).subscribe();
    }
    loadAllSprints(sprints) {
      this._sprints$.next(sprints);
    }
    createSprint(newSprint) {
      return this.sprintService.createSprint(newSprint).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__/* .tap */ .M)(createdSprint => {
        const sprints = [...this.sprints, createdSprint];
        this._sprints$.next(sprints);
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .take */ .s)(1));
    }
    updateSprint(editedSprint) {
      return this.sprintService.editSprint(editedSprint.id, editedSprint).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__/* .tap */ .M)(() => {
        const sprints = [...this.sprints];
        const newState = sprints.map(t => t.id === editedSprint.id ? editedSprint : t);
        this._sprints$.next(newState);
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .take */ .s)(1));
    }
    deleteSprint(id) {
      return this.sprintService.deleteSprint(id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__/* .tap */ .M)(() => {
        const newState = this.sprints.filter(sprint => sprint.id !== id);
        this._sprints$.next(newState);
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .take */ .s)(1));
    }
    moveTaskToSprint(sprintId, task) {
      return this.sprints$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .map */ .T)(sprints => sprints.find(sprint => sprint.id === sprintId)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .switchMap */ .n)(({
        tasks
      }) => this.sprintService.editSprint(sprintId, {
        tasks: [...tasks, task]
      })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__/* .tap */ .M)(updatedSprint => {
        // const sprints = [...this.sprints];
        // const newState = sprints.map((sprint: IOrganizationSprint): IOrganizationSprint =>
        //   sprint.id === updatedSprint.id ? updatedSprint : sprint
        // );
        // this._sprints$.next(newState);
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .take */ .s)(1));
    }
    static {
      this.ɵfac = function SprintStoreService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || SprintStoreService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵinject"] */ .KVO(_organization_sprint_service__WEBPACK_IMPORTED_MODULE_7__/* .SprintService */ .s));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵdefineInjectable"] */ .jDH({
        token: SprintStoreService,
        factory: SprintStoreService.ɵfac,
        providedIn: 'root'
      });
    }
  };
  SprintStoreService = (0,tslib__WEBPACK_IMPORTED_MODULE_8__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__/* .UntilDestroy */ .d)(), (0,tslib__WEBPACK_IMPORTED_MODULE_8__/* .__metadata */ .Sn)("design:paramtypes", [_organization_sprint_service__WEBPACK_IMPORTED_MODULE_7__/* .SprintService */ .s])], SprintStoreService);
  return SprintStoreService;
})();


/***/ })

}]);