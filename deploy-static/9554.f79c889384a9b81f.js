"use strict";
(self["webpackChunkgauzy"] = self["webpackChunkgauzy"] || []).push([[4102,9554],{

/***/ 2502:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   U: () => (/* binding */ dateTimestampProvider)
/* harmony export */ });
const dateTimestampProvider = {
  now() {
    return (dateTimestampProvider.delegate || Date).now();
  },
  delegate: undefined
};
//# sourceMappingURL=dateTimestampProvider.js.map

/***/ }),

/***/ 6269:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ EmployeeMultiSelectModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14572);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10936);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56383);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19223);
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(38834);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);







let EmployeeMultiSelectModule = /*#__PURE__*/(() => {
  class EmployeeMultiSelectModule {
    static {
      this.ɵfac = function EmployeeMultiSelectModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || EmployeeMultiSelectModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .$C({
        type: EmployeeMultiSelectModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .CommonModule */ .MD, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .FormsModule */ .YN, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .ReactiveFormsModule */ .X1, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbSelectModule */ .VcP, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__/* .TranslateModule */ .h.forChild(), _shared_module__WEBPACK_IMPORTED_MODULE_5__/* .SharedModule */ .G]
      });
    }
  }
  return EmployeeMultiSelectModule;
})();

/***/ }),

/***/ 6434:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EquipmentSharingModule: () => (/* binding */ EquipmentSharingModule)
/* harmony export */ });
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(56383);
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(79475);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(19223);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19013);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(31144);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(88319);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(38834);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(82202);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(30037);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(57832);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(80784);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(98722);
/* harmony import */ var _equipment_sharing_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30403);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26860);










let EquipmentSharingModule = /*#__PURE__*/(() => {
  class EquipmentSharingModule {
    static {
      this.ɵfac = function EquipmentSharingModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || EquipmentSharingModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineNgModule"] */ .$C({
        type: EquipmentSharingModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineInjector"] */ .G2t({
        providers: [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_2__/* .EquipmentSharingService */ .s, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_3__/* .ApprovalPolicyService */ .b, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_4__/* .EmployeesService */ .r],
        imports: [_gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_5__/* .SharedModule */ .G, _equipment_sharing_routing_module__WEBPACK_IMPORTED_MODULE_0__/* .EquipmentSharingRoutingModule */ .p, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_6__/* .UserFormsModule */ .D, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbCardModule */ .lVF, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbButtonModule */ .P5N, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbInputModule */ .pty, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbIconModule */ .clu, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbDialogModule */ .nZv.forChild(), _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_8__/* .EquipmentSharingMutationModule */ .Q, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_9__/* .TableComponentsModule */ .p, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbDatepickerModule */ .TgK, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_10__/* .CardGridModule */ .n, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__/* .TranslateModule */ .h.forChild(), ngx_permissions__WEBPACK_IMPORTED_MODULE_12__/* .NgxPermissionsModule */ .Ov.forChild(), _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbSpinnerModule */ .gYs, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_13__/* .SmartDataViewLayoutModule */ .H, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__/* .NbTooltipModule */ .IB0]
      });
    }
  }
  return EquipmentSharingModule;
})();

/***/ }),

/***/ 7718:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   m: () => (/* binding */ CrudService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53827);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26024);


class CrudService {
  constructor(http, API_URL) {
    this.http = http;
    this.API_URL = API_URL;
  }
  /**
   * The create() method accepts a partial model as an argument and returns the created model from the server.
   *
   * @param entity
   * @returns
   */
  create(entity) {
    return this.http.post(`${this.API_URL}`, entity).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__/* .take */ .s)(1));
  }
  /**
   * The get() method returns an Observable with a list of all existing resources.
   *
   * @returns
   */
  get(params) {
    return this.http.get(`${this.API_URL}`, {
      params: (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .toParams */ .SV)({
        ...params
      })
    });
  }
  /**
   * When we want to update an existing resource, we’ll use the update() method.
   *
   * @param id
   * @param entity
   * @returns
   */
  update(id, entity) {
    return this.http.put(`${this.API_URL}/${id}`, entity).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__/* .take */ .s)(1));
  }
  /**
   * When we want to delete an existing resource, we’ll use the delete() method.
   *
   * @param id
   * @returns
   */
  delete(id) {
    return this.http.delete(`${this.API_URL}/${id}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__/* .take */ .s)(1));
  }
}

/***/ }),

/***/ 11768:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ Scheduler)
/* harmony export */ });
/* harmony import */ var _scheduler_dateTimestampProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2502);

class Scheduler {
  constructor(schedulerActionCtor, now = Scheduler.now) {
    this.schedulerActionCtor = schedulerActionCtor;
    this.now = now;
  }
  schedule(work, delay = 0, state) {
    return new this.schedulerActionCtor(this, work).schedule(state, delay);
  }
}
Scheduler.now = _scheduler_dateTimestampProvider__WEBPACK_IMPORTED_MODULE_0__/* .dateTimestampProvider */ .U.now;
//# sourceMappingURL=Scheduler.js.map

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

/***/ 16061:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ AsyncAction)
/* harmony export */ });
/* harmony import */ var _Action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43273);
/* harmony import */ var _intervalProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(83451);
/* harmony import */ var _util_arrRemove__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27805);



class AsyncAction extends _Action__WEBPACK_IMPORTED_MODULE_0__/* .Action */ .r {
  constructor(scheduler, work) {
    super(scheduler, work);
    this.scheduler = scheduler;
    this.work = work;
    this.pending = false;
  }
  schedule(state, delay = 0) {
    var _a;
    if (this.closed) {
      return this;
    }
    this.state = state;
    const id = this.id;
    const scheduler = this.scheduler;
    if (id != null) {
      this.id = this.recycleAsyncId(scheduler, id, delay);
    }
    this.pending = true;
    this.delay = delay;
    this.id = (_a = this.id) !== null && _a !== void 0 ? _a : this.requestAsyncId(scheduler, this.id, delay);
    return this;
  }
  requestAsyncId(scheduler, _id, delay = 0) {
    return _intervalProvider__WEBPACK_IMPORTED_MODULE_1__/* .intervalProvider */ .f.setInterval(scheduler.flush.bind(scheduler, this), delay);
  }
  recycleAsyncId(_scheduler, id, delay = 0) {
    if (delay != null && this.delay === delay && this.pending === false) {
      return id;
    }
    if (id != null) {
      _intervalProvider__WEBPACK_IMPORTED_MODULE_1__/* .intervalProvider */ .f.clearInterval(id);
    }
    return undefined;
  }
  execute(state, delay) {
    if (this.closed) {
      return new Error('executing a cancelled action');
    }
    this.pending = false;
    const error = this._execute(state, delay);
    if (error) {
      return error;
    } else if (this.pending === false && this.id != null) {
      this.id = this.recycleAsyncId(this.scheduler, this.id, null);
    }
  }
  _execute(state, _delay) {
    let errored = false;
    let errorValue;
    try {
      this.work(state);
    } catch (e) {
      errored = true;
      errorValue = e ? e : new Error('Scheduled action threw falsy error');
    }
    if (errored) {
      this.unsubscribe();
      return errorValue;
    }
  }
  unsubscribe() {
    if (!this.closed) {
      const {
        id,
        scheduler
      } = this;
      const {
        actions
      } = scheduler;
      this.work = this.state = this.scheduler = null;
      this.pending = false;
      (0,_util_arrRemove__WEBPACK_IMPORTED_MODULE_2__/* .arrRemove */ .o)(actions, this);
      if (id != null) {
        this.id = this.recycleAsyncId(scheduler, id, null);
      }
      this.delay = null;
      super.unsubscribe();
    }
  }
}
//# sourceMappingURL=AsyncAction.js.map

/***/ }),

/***/ 16119:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   z: () => (/* binding */ TaskBadgeViewComponentModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14572);
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10012);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);



let TaskBadgeViewComponentModule = /*#__PURE__*/(() => {
  class TaskBadgeViewComponentModule {
    static {
      this.ɵfac = function TaskBadgeViewComponentModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || TaskBadgeViewComponentModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .$C({
        type: TaskBadgeViewComponentModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .CommonModule */ .MD, _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_2__/* .PipesModule */ .Y]
      });
    }
  }
  return TaskBadgeViewComponentModule;
})();

/***/ }),

/***/ 26835:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Q: () => (/* binding */ EquipmentSharingComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(73014);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(64411);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(45715);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(19223);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17785);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(592);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(81236);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(31488);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(56383);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(24237);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(57733);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(36950);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(71181);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(73246);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(72781);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(23423);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(35665);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(19013);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(15480);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(54263);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(71924);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(26024);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(46076);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(64913);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47108);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(47825);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(13845);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(90475);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(98610);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(55101);
/* harmony import */ var _table_components__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(36461);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(14572);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(908);
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(79475);
/* harmony import */ var _packages_ui_core_shared_src_lib_components_back_navigation_back_navigation_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(90910);
/* harmony import */ var _packages_ui_core_shared_src_lib_components_header_title_header_title_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(49072);
/* harmony import */ var _packages_ui_core_shared_src_lib_card_grid_card_grid_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(49517);
/* harmony import */ var angular2_smart_table__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(52345);
/* harmony import */ var _packages_ui_core_shared_src_lib_gauzy_button_action_gauzy_button_action_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(45293);
/* harmony import */ var _packages_ui_core_shared_src_lib_smart_data_layout_pagination_pagination_v2_pagination_v2_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(3456);



























const _c0 = (a0, a1) => [a0, a1];
function EquipmentSharingComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 4)(1, "div")(2, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("routerLink", "/pages/organization/equipment-sharing-policy");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(4, 2, "EQUIPMENT_SHARING_PAGE.EQUIPMENT_SHARING_POLICY"), " ");
  }
}
function EquipmentSharingComponent_ng_template_13_ng_template_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "ngx-pagination", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("source", ctx_r1.smartTableSource);
  }
}
function EquipmentSharingComponent_ng_template_13_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 13)(1, "angular2-smart-table", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("userRowSelect", function EquipmentSharingComponent_ng_template_13_ng_template_1_Template_angular2_smart_table_userRowSelect_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.selectEquipmentSharing($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(3, EquipmentSharingComponent_ng_template_13_ng_template_1_ng_container_3_Template, 2, 1, "ng-container", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("settings", ctx_r1.settingsSmartTable)("source", ctx_r1.smartTableSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r1.smartTableSource);
  }
}
function EquipmentSharingComponent_ng_template_13_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "ga-card-grid", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("onSelectedItem", function EquipmentSharingComponent_ng_template_13_ng_template_2_Template_ga_card_grid_onSelectedItem_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.selectEquipmentSharing($event));
    })("scroll", function EquipmentSharingComponent_ng_template_13_ng_template_2_Template_ga_card_grid_scroll_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.onScroll());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("totalItems", ctx_r1.pagination == null ? null : ctx_r1.pagination.totalItems)("settings", ctx_r1.settingsSmartTable)("source", ctx_r1.equipments);
  }
}
function EquipmentSharingComponent_ng_template_13_3_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(2, 1, "SETTINGS_MENU.NO_LAYOUT"));
  }
}
function EquipmentSharingComponent_ng_template_13_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(0, EquipmentSharingComponent_ng_template_13_3_ng_template_0_Template, 3, 3, "ng-template");
  }
}
function EquipmentSharingComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, EquipmentSharingComponent_ng_template_13_ng_template_1_Template, 4, 3, "ng-template", 11)(2, EquipmentSharingComponent_ng_template_13_ng_template_2_Template, 1, 3, "ng-template", 11)(3, EquipmentSharingComponent_ng_template_13_3_Template, 1, 0, null, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngSwitch", ctx_r1.dataLayoutStyle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngSwitchCase", ctx_r1.componentLayoutStyleEnum.TABLE);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngSwitchCase", ctx_r1.componentLayoutStyleEnum.CARDS_GRID);
  }
}
function EquipmentSharingComponent_ng_template_14_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function EquipmentSharingComponent_ng_template_14_ng_template_0_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.save(true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "nb-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(3, 1, "BUTTONS.ADD"), " ");
  }
}
function EquipmentSharingComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(0, EquipmentSharingComponent_ng_template_14_ng_template_0_Template, 4, 3, "ng-template", 6);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngxPermissionsOnly", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction2"] */ .l_i(1, _c0, ctx_r1.PermissionsEnum.ALL_ORG_EDIT, ctx_r1.PermissionsEnum.EQUIPMENT_MAKE_REQUEST));
  }
}
function EquipmentSharingComponent_ng_template_16_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(1, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function EquipmentSharingComponent_ng_template_16_ng_template_1_ng_container_0_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.approval(ctx_r1.selectedEquipmentSharing));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(3, 1, "EQUIPMENT_SHARING_PAGE.APPROVE"), " ");
  }
}
function EquipmentSharingComponent_ng_template_16_ng_template_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(1, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function EquipmentSharingComponent_ng_template_16_ng_template_1_ng_container_1_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.refuse(ctx_r1.selectedEquipmentSharing));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(3, 1, "EQUIPMENT_SHARING_PAGE.REFUSE"), " ");
  }
}
function EquipmentSharingComponent_ng_template_16_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(0, EquipmentSharingComponent_ng_template_16_ng_template_1_ng_container_0_Template, 4, 3, "ng-container", 16)(1, EquipmentSharingComponent_ng_template_16_ng_template_1_ng_container_1_Template, 4, 3, "ng-container", 16);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r1.showApprovedButton(ctx_r1.selectedEquipmentSharing));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r1.showRefuseButton(ctx_r1.selectedEquipmentSharing));
  }
}
function EquipmentSharingComponent_ng_template_16_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function EquipmentSharingComponent_ng_template_16_ng_template_2_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r7);
      const selectedItem_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG().selectedItem;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.save(false, selectedItem_r8));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "nb-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(4, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function EquipmentSharingComponent_ng_template_16_ng_template_2_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r7);
      const selectedItem_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG().selectedItem;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.delete(selectedItem_r8));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(6, "nb-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("disabled", ctx_r1.disableButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(3, 4, "BUTTONS.EDIT"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("disabled", ctx_r1.disableButton)("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(5, 6, "BUTTONS.DELETE"));
  }
}
function EquipmentSharingComponent_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, EquipmentSharingComponent_ng_template_16_ng_template_1_Template, 2, 2, "ng-template", 6)(2, EquipmentSharingComponent_ng_template_16_ng_template_2_Template, 7, 8, "ng-template", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngxPermissionsOnly", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction2"] */ .l_i(2, _c0, ctx_r1.PermissionsEnum.ALL_ORG_EDIT, ctx_r1.PermissionsEnum.EQUIPMENT_APPROVE_REQUEST));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngxPermissionsOnly", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction2"] */ .l_i(5, _c0, ctx_r1.PermissionsEnum.ALL_ORG_EDIT, ctx_r1.PermissionsEnum.ORG_EQUIPMENT_SHARING_EDIT));
  }
}
let EquipmentSharingComponent = class EquipmentSharingComponent extends _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_1__/* .PaginationFilterBaseComponent */ .t {
  constructor(translateService, equipmentSharingService, dialogService, http, toastrService, errorHandlingService, store) {
    super(translateService);
    this.translateService = translateService;
    this.equipmentSharingService = equipmentSharingService;
    this.dialogService = dialogService;
    this.http = http;
    this.toastrService = toastrService;
    this.errorHandlingService = errorHandlingService;
    this.store = store;
    this.loading = false;
    this.disableButton = true;
    this.equipments = [];
    this.PermissionsEnum = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__/* .PermissionsEnum */ .U;
    this.RequestApprovalStatusTypesEnum = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__/* .RequestApprovalStatusTypesEnum */ .B;
    this.dataLayoutStyle = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_4__/* .ComponentLayoutStyleEnum */ .IE.TABLE;
    this.componentLayoutStyleEnum = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_4__/* .ComponentLayoutStyleEnum */ .IE;
    this.equipmentSharing$ = this.subject$;
    this._refresh$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__/* .Subject */ .B();
    this.setView();
  }
  ngOnInit() {
    this._loadSmartTableSettings();
    this._applyTranslationOnSmartTable();
  }
  ngAfterViewInit() {
    this.equipmentSharing$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .debounceTime */ .B)(100), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .M)(() => this.clearItem()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .M)(() => this.getEquipmentSharings()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__/* .untilDestroyed */ .s)(this)).subscribe();
    const storeUser$ = this.store.user$;
    const storeOrganization$ = this.store.selectedOrganization$;
    const storeEmployee$ = this.store.selectedEmployee$;
    (0,rxjs__WEBPACK_IMPORTED_MODULE_9__/* .combineLatest */ .z)([storeUser$, storeOrganization$, storeEmployee$]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .debounceTime */ .B)(300), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .filter */ .p)(([user, organization]) => !!user && !!organization), (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_11__/* .distinctUntilChange */ .nI)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .M)(([user, organization, employee]) => {
      this.organization = organization;
      this.selectedEmployeeId = user.employee ? user.employee.id : employee ? employee.id : null;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .M)(() => this._refresh$.next(true)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .M)(() => this.equipmentSharing$.next(true)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__/* .untilDestroyed */ .s)(this)).subscribe();
    this.pagination$.pipe((0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_11__/* .distinctUntilChange */ .nI)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .M)(() => this.equipmentSharing$.next(true)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__/* .untilDestroyed */ .s)(this)).subscribe();
    this._refresh$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .filter */ .p)(() => this.dataLayoutStyle === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_4__/* .ComponentLayoutStyleEnum */ .IE.CARDS_GRID), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .M)(() => this.refreshPagination()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .M)(() => this.equipments = []), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__/* .untilDestroyed */ .s)(this)).subscribe();
  }
  ngOnDestroy() {}
  setView() {
    this.viewComponentName = _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_12__/* .ComponentEnum */ .L.EQUIPMENT_SHARING;
    this.store.componentLayout$(this.viewComponentName).pipe((0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_11__/* .distinctUntilChange */ .nI)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .M)(componentLayout => this.dataLayoutStyle = componentLayout), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .M)(() => this.refreshPagination()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .filter */ .p)(componentLayout => componentLayout === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_4__/* .ComponentLayoutStyleEnum */ .IE.CARDS_GRID), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .M)(() => this.equipments = []), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .M)(() => this.equipmentSharing$.next(true)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__/* .untilDestroyed */ .s)(this)).subscribe();
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
      noDataMessage: this.getTranslation('SM_TABLE.NO_DATA.EQUIPMENT_SHARING'),
      columns: {
        name: {
          title: this.getTranslation('EQUIPMENT_SHARING_PAGE.EQUIPMENT_NAME'),
          type: 'string'
        },
        equipmentSharingPolicy: {
          title: this.getTranslation('EQUIPMENT_SHARING_PAGE.EQUIPMENT_SHARING_POLICY'),
          type: 'custom',
          isFilterable: false,
          renderComponent: _table_components__WEBPACK_IMPORTED_MODULE_13__/* .EquipmentSharingPolicyTableComponent */ .a,
          componentInitFunction: (instance, cell) => {
            instance.value = cell.getRawValue();
          }
        },
        shareRequestDay: {
          title: this.getTranslation('EQUIPMENT_SHARING_PAGE.SHARE_REQUEST_DATE'),
          type: 'custom',
          isFilterable: false,
          renderComponent: _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_14__/* .DateViewComponent */ .l,
          componentInitFunction: (instance, cell) => {
            instance.value = cell.getValue();
          }
        },
        shareStartDay: {
          title: this.getTranslation('EQUIPMENT_SHARING_PAGE.SHARE_START_DATE'),
          type: 'custom',
          isFilterable: false,
          renderComponent: _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_14__/* .DateViewComponent */ .l,
          componentInitFunction: (instance, cell) => {
            instance.value = cell.getValue();
          }
        },
        shareEndDay: {
          title: this.getTranslation('EQUIPMENT_SHARING_PAGE.SHARE_END_DATE'),
          type: 'custom',
          isFilterable: false,
          renderComponent: _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_14__/* .DateViewComponent */ .l,
          componentInitFunction: (instance, cell) => {
            instance.value = cell.getValue();
          }
        },
        createdByUser: {
          title: this.getTranslation('EQUIPMENT_SHARING_PAGE.CREATED_BY'),
          type: 'custom',
          isFilterable: false,
          renderComponent: _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_15__/* .CreatedByUserComponent */ .q,
          componentInitFunction: (instance, cell) => {
            instance.rowData = cell.getRow().getData();
          }
        },
        sharingStatus: {
          title: this.getTranslation('EQUIPMENT_SHARING_PAGE.STATUS'),
          type: 'custom',
          width: '5%',
          isFilterable: false,
          renderComponent: _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_16__/* .StatusBadgeComponent */ .v,
          componentInitFunction: (instance, cell) => {
            instance.value = cell.getRawValue();
          }
        }
      }
    };
  }
  /**
   * Determines whether the "Approved" button for equipment sharing should be shown.
   *
   * @param equipmentSharing - The equipment sharing to check.
   * @returns True if the "Approved" button should be shown, false otherwise.
   */
  showApprovedButton(equipmentSharing) {
    // Check if equipmentSharing is truthy and has a valid status
    if (equipmentSharing && equipmentSharing.status) {
      const validStatuses = [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__/* .RequestApprovalStatusTypesEnum */ .B.REFUSED, _gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__/* .RequestApprovalStatusTypesEnum */ .B.REQUESTED];
      // Return true if the status is included in the valid statuses
      return validStatuses.includes(equipmentSharing.status);
    }
    // Return false if equipmentSharing is falsy or has an invalid status
    return false;
  }
  /**
   * Determines whether the "Refuse" button for equipment sharing should be shown.
   *
   * @param equipmentSharing - The equipment sharing to check.
   * @returns True if the "Refuse" button should be shown, false otherwise.
   */
  showRefuseButton(equipmentSharing) {
    // Check if equipmentSharing is truthy and has a valid status
    if (equipmentSharing && equipmentSharing.status) {
      const validStatuses = [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__/* .RequestApprovalStatusTypesEnum */ .B.APPROVED, _gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__/* .RequestApprovalStatusTypesEnum */ .B.REQUESTED];
      // Return true if the status is included in the valid statuses
      return validStatuses.includes(equipmentSharing.status);
    }
    // Return false if equipmentSharing is falsy or has an invalid status
    return false;
  }
  /**
   * Approves the specified equipment sharing.
   * Checks if the organization exists and if the approve button should be shown.
   * If conditions are met, sends an approval request to the service and displays a success message.
   * Finally, triggers a refresh of data and updates the equipment sharing observable.
   * @param equipmentSharing - The equipment sharing to be approved.
   */
  approval(equipmentSharing) {
    var _this = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A)(function* () {
      // Check if the organization exists
      if (!_this.organization) {
        return;
      }
      try {
        // Check if the approve button should be shown for the equipment sharing
        if (_this.showApprovedButton(equipmentSharing)) {
          // Send an approval request to the service
          const request = yield _this.equipmentSharingService.approval(equipmentSharing.id);
          // If the approval is successful, display a success message
          if (request) {
            _this.toastrService.success('EQUIPMENT_SHARING_PAGE.APPROVAL_SUCCESS', {
              name: equipmentSharing.name
            });
          }
        }
      } catch (error) {
        // Handle any errors that occur during the approval process
        _this.errorHandlingService.handleError(error);
      } finally {
        // Trigger a refresh of data and update the equipment sharing observable
        _this._refresh$.next(true);
        _this.equipmentSharing$.next(true);
      }
    })();
  }
  /**
   * Refuses the specified equipment sharing.
   * Checks if the organization exists and if the refuse button should be shown.
   * If conditions are met, sends a refusal request to the service and displays a success message.
   * Finally, triggers a refresh of data and updates the equipment sharing observable.
   * @param equipmentSharing - The equipment sharing to be refused.
   */
  refuse(equipmentSharing) {
    var _this2 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A)(function* () {
      // Check if the organization exists
      if (!_this2.organization) {
        return;
      }
      try {
        // Check if the refuse button should be shown for the equipment sharing
        if (_this2.showRefuseButton(equipmentSharing)) {
          // Send a refusal request to the service
          const request = yield _this2.equipmentSharingService.refuse(equipmentSharing.id);
          // If the refusal is successful, display a success message
          if (request) {
            _this2.toastrService.success('EQUIPMENT_SHARING_PAGE.APPROVAL_SUCCESS', {
              name: equipmentSharing.name
            });
          }
        }
      } catch (error) {
        // Handle any errors that occur during the saving process
        _this2.errorHandlingService.handleError(error);
      } finally {
        // Trigger a refresh of data and update the equipment sharing observable
        _this2._refresh$.next(true);
        _this2.equipmentSharing$.next(true);
      }
    })();
  }
  /**
   * Saves the equipment sharing data.
   * If isCreate is true, it opens a dialog for creating a new equipment sharing.
   * If selectedItem is provided, it selects the equipment sharing for editing.
   * After the dialog is closed, it displays a success message if the equipment sharing is saved.
   * Finally, it triggers a refresh of data and updates the equipment sharing observable.
   * @param isCreate - A boolean indicating whether to create a new equipment sharing.
   * @param selectedItem - The equipment sharing to be edited.
   */
  save(isCreate, selectedItem) {
    var _this3 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A)(function* () {
      // If selectedItem is provided, select the equipment sharing
      if (selectedItem) {
        _this3.selectEquipmentSharing({
          isSelected: true,
          data: selectedItem
        });
      }
      try {
        let dialog;
        // Open a dialog for creating or editing equipment sharing
        if (!isCreate) {
          dialog = _this3.dialogService.open(_gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_18__/* .EquipmentSharingMutationComponent */ .F, {
            context: {
              equipmentSharing: _this3.selectedEquipmentSharing
            }
          });
        } else {
          dialog = _this3.dialogService.open(_gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_18__/* .EquipmentSharingMutationComponent */ .F);
        }
        // Wait for the dialog to close and get the equipment sharing data
        const equipmentSharing = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_19__/* .firstValueFrom */ ._)(dialog.onClose);
        // If equipment sharing is saved, display a success message
        if (equipmentSharing) {
          _this3.toastrService.success('EQUIPMENT_SHARING_PAGE.REQUEST_SAVED');
        }
      } catch (error) {
        // Handle any errors that occur during the saving process
        _this3.errorHandlingService.handleError(error);
      } finally {
        // Trigger a refresh of data and update the equipment sharing observable
        _this3._refresh$.next(true);
        _this3.equipmentSharing$.next(true);
      }
    })();
  }
  /**
   * Deletes the selected equipment sharing.
   * If a selectedItem is provided, it selects the equipment sharing and opens a confirmation dialog.
   * If the user confirms the deletion, the equipment sharing is deleted, and a success message is displayed.
   * Finally, it triggers a refresh of data and updates the equipment sharing observable.
   * @param selectedItem - The equipment sharing to be deleted.
   */
  delete(selectedItem) {
    var _this4 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A)(function* () {
      // If a selectedItem is provided, select the equipment sharing
      if (selectedItem) {
        _this4.selectEquipmentSharing({
          isSelected: true,
          data: selectedItem
        });
      }
      try {
        // Open a confirmation dialog and await the result
        const result = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_19__/* .firstValueFrom */ ._)(_this4.dialogService.open(_gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_20__/* .DeleteConfirmationComponent */ .u).onClose);
        // If the user confirms the deletion, proceed with the deletion
        if (result) {
          yield _this4.equipmentSharingService.delete(_this4.selectedEquipmentSharing.id);
          // Display a success message
          _this4.toastrService.success('EQUIPMENT_SHARING_PAGE.REQUEST_DELETED');
        }
      } catch (error) {
        // Handle any errors that occur during the saving process
        _this4.errorHandlingService.handleError(error);
      } finally {
        // Trigger a refresh of data and update the equipment sharing observable
        _this4._refresh$.next(true);
        _this4.equipmentSharing$.next(true);
      }
    })();
  }
  /**
   * Handles the selection of equipment sharing.
   * Updates the selectedEquipmentSharing property based on the provided isSelected and data parameters.
   * @param isSelected - A boolean indicating whether the equipment sharing is selected.
   * @param data - The equipment sharing data.
   */
  selectEquipmentSharing(_x) {
    var _this5 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A)(function* ({
      isSelected,
      data
    }) {
      // Update the disableButton property based on the selection status
      _this5.disableButton = !isSelected;
      // Update the selectedEquipmentSharing property if the equipment sharing is selected, otherwise set it to null
      _this5.selectedEquipmentSharing = isSelected ? data : null;
    }).apply(this, arguments);
  }
  /**
   * Registers and configures the Smart Table source for equipment sharing.
   * Sets up the ServerDataSource with relevant parameters, including the endpoint, where clause, and result mapping.
   * Updates pagination and loading state accordingly.
   */
  setSmartTableSource() {
    // Check if organization context is available
    if (!this.organization) {
      return;
    }
    // Set loading state to true while fetching data
    this.loading = true;
    // Destructure properties for clarity
    const {
      id: organizationId,
      tenantId
    } = this.organization;
    // Prepare request object with organization and tenant details
    const request = {
      organizationId,
      tenantId
    };
    // Add selected employee ID to the request if available
    if (this.selectedEmployeeId) {
      request.employeeId = this.selectedEmployeeId;
    }
    // Create a new ServerDataSource for Smart Table
    this.smartTableSource = new _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_21__/* .ServerDataSource */ .N(this.http, {
      endPoint: `${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_22__/* .API_PREFIX */ .m4}/equipment-sharing/pagination`,
      where: {
        ...request,
        ...(this.selectedEmployeeId ? {
          employeeIds: [this.selectedEmployeeId]
        } : {}),
        ...this.filters.where
      },
      resultMap: sharing => ({
        ...sharing,
        sharingStatus: this.statusMapper(sharing),
        name: sharing.equipment ? sharing.equipment.name : sharing.name
      }),
      // Finalize callback to handle post-processing
      finalize: () => {
        // If the data layout style is cards grid, push data to the equipments array
        if (this.dataLayoutStyle === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_4__/* .ComponentLayoutStyleEnum */ .IE.CARDS_GRID) {
          this.equipments.push(...this.smartTableSource.getData());
        }
        // Update pagination based on the count of items in the source
        this.setPagination({
          ...this.getPagination(),
          totalItems: this.smartTableSource.count()
        });
        // Set loading state to false once data fetching is complete
        this.loading = false;
      }
    });
  }
  /**
   * Fetches and displays equipment sharing data.
   * Sets up the Smart Table source, configures pagination, and retrieves elements for the specified data layout style.
   */
  getEquipmentSharings() {
    var _this6 = this;
    return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A)(function* () {
      // Check if organization context is available
      if (!_this6.organization) {
        return;
      }
      try {
        // Set up the Smart Table source
        _this6.setSmartTableSource();
        // Get pagination details
        const {
          activePage,
          itemsPerPage
        } = _this6.getPagination();
        // Set paging for the Smart Table source
        _this6.smartTableSource.setPaging(activePage, itemsPerPage, false);
        // If the data layout style is cards grid, retrieve elements
        if (_this6.dataLayoutStyle === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_4__/* .ComponentLayoutStyleEnum */ .IE.CARDS_GRID) {
          yield _this6.smartTableSource.getElements();
        }
      } catch (error) {
        // Handle errors by displaying a danger toast
        _this6.toastrService.danger(error);
      }
    })();
  }
  _applyTranslationOnSmartTable() {
    this.translateService.onLangChange.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .M)(() => this._loadSmartTableSettings()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__/* .untilDestroyed */ .s)(this)).subscribe();
  }
  /*
   * Clear selected item
   */
  clearItem() {
    this.selectEquipmentSharing({
      isSelected: false,
      data: null
    });
  }
  /**
   * Maps equipment sharing status to display text, value, and badge class.
   * @param row - The equipment sharing data.
   * @returns An object containing text, value, and class properties.
   */
  statusMapper(row) {
    let value;
    let badgeClass;
    // Map status values to corresponding display text, value, and badge class
    switch (row.status) {
      case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__/* .RequestApprovalStatusTypesEnum */ .B.APPROVED:
        value = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_23__/* .EquipmentSharingStatusEnum */ .A.APPROVED;
        badgeClass = 'success';
        break;
      case _gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__/* .RequestApprovalStatusTypesEnum */ .B.REFUSED:
        value = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_23__/* .EquipmentSharingStatusEnum */ .A.REFUSED;
        badgeClass = 'danger';
        break;
      default:
        value = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_23__/* .EquipmentSharingStatusEnum */ .A.REQUESTED;
        badgeClass = 'warning';
        break;
    }
    // Return an object with text, value, and class properties
    return {
      text: value,
      value: row.status,
      class: badgeClass
    };
  }
  static {
    this.ɵfac = function EquipmentSharingComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || EquipmentSharingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__/* .TranslateService */ .c$), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_25__/* .EquipmentSharingService */ .s), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_nebular_theme__WEBPACK_IMPORTED_MODULE_26__/* .NbDialogService */ .S0W), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_common_http__WEBPACK_IMPORTED_MODULE_27__/* .HttpClient */ .Qq), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_28__/* .ToastrService */ .t), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_29__/* .ErrorHandlingService */ .X), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_30__/* .Store */ .il));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
      type: EquipmentSharingComponent,
      selectors: [["ng-component"]],
      standalone: false,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
      decls: 18,
      vars: 17,
      consts: [["visibleButton", ""], ["actionButtons", ""], ["nbSpinnerStatus", "primary", "nbSpinnerSize", "large", 3, "nbSpinner"], [1, "d-flex", "flex-column", "pb-0"], [1, "card-header-title"], [3, "allowEmployee"], [3, "ngxPermissionsOnly"], [1, "gauzy-button-container"], [3, "buttonTemplate", "componentName", "buttonTemplateVisible", "isDisable"], ["nbButton", "", "type", "button", "outline", "", "status", "primary", 1, "action", 3, "routerLink"], [3, "ngSwitch"], [3, "ngSwitchCase"], [4, "ngSwitchDefault"], [1, "table-scroll-container"], [2, "cursor", "pointer", 3, "userRowSelect", "settings", "source"], [1, "pagination-container"], [4, "ngIf"], [3, "source"], [3, "onSelectedItem", "scroll", "totalItems", "settings", "source"], ["nbButton", "", "status", "success", "size", "small", "type", "button", 1, "action", 3, "click"], ["icon", "plus-outline"], [1, "btn-group", "actions"], ["nbButton", "", "outline", "", "status", "success", "size", "small", "type", "button", 1, "action", 3, "click"], ["nbButton", "", "outline", "", "status", "danger", "size", "small", "type", "button", 1, "action", 3, "click"], ["nbButton", "", "status", "basic", "size", "small", "type", "button", 1, "action", "primary", 3, "click", "disabled"], ["icon", "edit-outline"], ["nbButton", "", "size", "small", "status", "basic", "type", "button", 1, "action", 3, "click", "disabled", "nbTooltip"], ["status", "danger", "icon", "trash-2-outline"]],
      template: function EquipmentSharingComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-card", 2)(1, "nb-card-header", 3)(2, "div", 4)(3, "div", 4)(4, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(5, "ngx-back-navigation");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(6, "ngx-header-title", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(8, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(9, EquipmentSharingComponent_ng_template_9_Template, 5, 4, "ng-template", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(10, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(11, "ngx-gauzy-button-action", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(12, "nb-card-body");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(13, EquipmentSharingComponent_ng_template_13_Template, 4, 3, "ng-template", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(14, EquipmentSharingComponent_ng_template_14_Template, 1, 4, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplateRefExtractor"] */ .C5r)(16, EquipmentSharingComponent_ng_template_16_Template, 3, 8, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplateRefExtractor"] */ .C5r);
        }
        if (rf & 2) {
          const visibleButton_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(15);
          const actionButtons_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(17);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("nbSpinner", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("allowEmployee", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(8, 9, "EQUIPMENT_SHARING_PAGE.HEADER"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngxPermissionsOnly", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction2"] */ .l_i(11, _c0, ctx.PermissionsEnum.ALL_ORG_VIEW, ctx.PermissionsEnum.EQUIPMENT_SHARING_POLICY_VIEW));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("buttonTemplate", actionButtons_r10)("componentName", ctx.viewComponentName)("buttonTemplateVisible", visibleButton_r9)("isDisable", ctx.disableButton);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngxPermissionsOnly", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction2"] */ .l_i(14, _c0, ctx.PermissionsEnum.ALL_ORG_VIEW, ctx.PermissionsEnum.ORG_EQUIPMENT_SHARING_VIEW));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_31__/* .NgIf */ .bT, _angular_common__WEBPACK_IMPORTED_MODULE_31__/* .NgSwitch */ .ux, _angular_common__WEBPACK_IMPORTED_MODULE_31__/* .NgSwitchCase */ .e1, _angular_common__WEBPACK_IMPORTED_MODULE_31__/* .NgSwitchDefault */ .fG, _angular_router__WEBPACK_IMPORTED_MODULE_32__/* .RouterLink */ .Wk, ngx_permissions__WEBPACK_IMPORTED_MODULE_33__/* .NgxPermissionsDirective */ .f6, _packages_ui_core_shared_src_lib_components_back_navigation_back_navigation_component__WEBPACK_IMPORTED_MODULE_34__/* .BackNavigationComponent */ .r, _packages_ui_core_shared_src_lib_components_header_title_header_title_component__WEBPACK_IMPORTED_MODULE_35__/* .HeaderTitleComponent */ .X, _nebular_theme__WEBPACK_IMPORTED_MODULE_26__/* .NbCardComponent */ .SrT, _nebular_theme__WEBPACK_IMPORTED_MODULE_26__/* .NbCardBodyComponent */ .KH5, _nebular_theme__WEBPACK_IMPORTED_MODULE_26__/* .NbCardHeaderComponent */ .zJv, _nebular_theme__WEBPACK_IMPORTED_MODULE_26__/* .NbButtonComponent */ .YP2, _nebular_theme__WEBPACK_IMPORTED_MODULE_26__/* .NbIconComponent */ .tHu, _packages_ui_core_shared_src_lib_card_grid_card_grid_component__WEBPACK_IMPORTED_MODULE_36__/* .CardGridComponent */ .c, _nebular_theme__WEBPACK_IMPORTED_MODULE_26__/* .NbSpinnerDirective */ .zwc, angular2_smart_table__WEBPACK_IMPORTED_MODULE_37__/* .Angular2SmartTableComponent */ .T9, _packages_ui_core_shared_src_lib_gauzy_button_action_gauzy_button_action_component__WEBPACK_IMPORTED_MODULE_38__/* .GauzyButtonActionComponent */ .A, _packages_ui_core_shared_src_lib_smart_data_layout_pagination_pagination_v2_pagination_v2_component__WEBPACK_IMPORTED_MODULE_39__/* .PaginationV2Component */ .a, _nebular_theme__WEBPACK_IMPORTED_MODULE_26__/* .NbTooltipDirective */ .BmQ, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__/* .TranslatePipe */ .D9],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.action[_ngcontent-%COMP%] {\n  box-shadow: var(--gauzy-shadow);\n  border: none;\n}\n.action[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}\n.action.info[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: var(--color-info-default);\n  color: white;\n  border-color: var(--color-info-default);\n}\n.action.info-text-1[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  color: var(--color-info-default);\n}\n.action.secondary[_ngcontent-%COMP%] {\n  color: #7e7e8f;\n}\n.action.success[_ngcontent-%COMP%] {\n  color: var(--color-success-default);\n}\n.action.warning[_ngcontent-%COMP%] {\n  color: rgb(245, 109, 88);\n}\n.action.orange[_ngcontent-%COMP%] {\n  color: rgb(255, 171, 45);\n}\n.action.primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n}\n.action.primary.soft[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: rgba(110, 73, 232, 0.1);\n}\n.action.select-nb[_ngcontent-%COMP%]     {\n  box-shadow: none;\n}\n.action.select-nb[_ngcontent-%COMP%]     .select-button {\n  box-shadow: var(--gauzy-shadow);\n  background: rgb(245, 245, 245);\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n.actions[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-2);\n  border-radius: var(--button-rectangle-border-radius);\n  padding: 2px 4px !important;\n}\n\n.gauzy-button-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n.card-custom-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n[_nghost-%COMP%]     input {\n  border-radius: var(--border-radius);\n  box-shadow: var(--gauzy-shadow) inset;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%], \n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   .table-scroll-container[_ngcontent-%COMP%], \n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .table-scroll-container[_ngcontent-%COMP%] {\n  flex-grow: 10;\n  max-height: unset;\n}\n[_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  border-radius: 0 0 var(--border-radius) var(--border-radius);\n}\n[dir=ltr]   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  padding: 1rem 0.5rem 1rem 18px;\n}\n[dir=rtl]   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  padding: 1rem 18px 1rem 0.5rem;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%], \n[_nghost-%COMP%]   nb-card-header[_ngcontent-%COMP%] {\n  border-radius: var(--border-radius);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  height: 100%;\n  border-radius: var(--border-radius);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-header[_ngcontent-%COMP%] {\n  flex: 0 1 auto;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  overflow: unset;\n  height: calc(100vh - var(--header-height) - var(--footer-height) - 11.5rem + 3.75rem);\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-footer[_ngcontent-%COMP%] {\n  flex: 0 1 auto;\n}\n\n\n\n.flex-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  padding: 0;\n  margin: 0;\n  list-style: none;\n}\n\n.flex-item[_ngcontent-%COMP%] {\n  border: 0.0625rem solid #e4e9f2;\n  border-radius: 0.25rem;\n  width: 350px;\n  margin-top: 10px;\n  margin-right: 10px;\n}\n\n.info-line[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  font-size: 0.7em;\n  color: darkgray;\n  line-height: 0px;\n  padding: 1rem 1.5rem;\n}\n.info-line[_ngcontent-%COMP%]   .info-meta[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n.info-line[_ngcontent-%COMP%]   .info-value[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  text-align: end;\n  color: black;\n  font-size: 1em;\n}\n\n.card-footer[_ngcontent-%COMP%] {\n  justify-content: space-around;\n  display: flex;\n}\n\n\n\n.badge-danger[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 10px;\n  background-color: #dc3545;\n  border-radius: 13px;\n  color: #fff;\n}\n\n.badge-success[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 10px;\n  background-color: #28a745;\n  border-radius: 13px;\n  color: #fff;\n}\n\n.badge-warning[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 10px;\n  background-color: #ffc107;\n  border-radius: 13px;\n  color: #fff;\n}\n\n.badge-danger-card[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 10px;\n  background-color: #ff3d71;\n  border-radius: 0.45rem;\n  color: #fff;\n}\n\n.badge-success-card[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 10px;\n  background-color: #00d68f;\n  border-radius: 0.45rem;\n  color: #fff;\n}\n\n.badge-warning-card[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 10px;\n  background-color: #fa0;\n  border-radius: 0.45rem;\n  color: #fff;\n}"]
    });
  }
};
EquipmentSharingComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_40__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__/* .UntilDestroy */ .d)({
  checkProperties: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_40__/* .__metadata */ .Sn)("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__/* .TranslateService */ .c$, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_25__/* .EquipmentSharingService */ .s, _nebular_theme__WEBPACK_IMPORTED_MODULE_26__/* .NbDialogService */ .S0W, _angular_common_http__WEBPACK_IMPORTED_MODULE_27__/* .HttpClient */ .Qq, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_28__/* .ToastrService */ .t, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_29__/* .ErrorHandlingService */ .X, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_30__/* .Store */ .il])], EquipmentSharingComponent);


/***/ }),

/***/ 30403:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: () => (/* binding */ EquipmentSharingRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(908);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4106);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17785);
/* harmony import */ var _equipment_sharing_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26835);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26860);






const routes = [{
  path: '',
  component: _equipment_sharing_component__WEBPACK_IMPORTED_MODULE_0__/* .EquipmentSharingComponent */ .Q,
  canActivate: [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_1__/* .PermissionsGuard */ .a],
  data: {
    permissions: {
      only: [_gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__/* .PermissionsEnum */ .U.ALL_ORG_VIEW, _gauzy_contracts__WEBPACK_IMPORTED_MODULE_2__/* .PermissionsEnum */ .U.ORG_EQUIPMENT_SHARING_VIEW],
      redirectTo: '/pages/dashboard'
    }
  }
}];
let EquipmentSharingRoutingModule = /*#__PURE__*/(() => {
  class EquipmentSharingRoutingModule {
    static {
      this.ɵfac = function EquipmentSharingRoutingModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || EquipmentSharingRoutingModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdefineNgModule"] */ .$C({
        type: EquipmentSharingRoutingModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__/* .RouterModule */ .iI.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_4__/* .RouterModule */ .iI]
      });
    }
  }
  return EquipmentSharingRoutingModule;
})();

/***/ }),

/***/ 35665:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: () => (/* binding */ ServerDataSource)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(80189);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(79708);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39855);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(56891);
/* harmony import */ var angular2_smart_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52345);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(26024);
/* harmony import */ var _server_source_conf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59395);





class ServerDataSource extends angular2_smart_table__WEBPACK_IMPORTED_MODULE_0__/* .LocalDataSource */ .h0 {
  constructor(http, conf = {}) {
    super();
    this.http = http;
    this.lastRequestCount = 0;
    this.conf = new _server_source_conf__WEBPACK_IMPORTED_MODULE_1__/* .ServerSourceConf */ .b(conf);
    if (!this.conf.endPoint) {
      throw new Error('At least endPoint must be specified as a configuration of the server data source.');
    }
  }
  count() {
    return this.lastRequestCount;
  }
  getData() {
    return this.data;
  }
  getElements() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__/* .firstValueFrom */ ._)(this.requestElements().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .map */ .T)(res => {
      this.lastRequestCount = this.extractTotalFromResponse(res);
      this.data = this.extractDataFromResponse(res);
      return this.data;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .tap */ .M)(() => {
      if (this.conf.finalize) {
        this.conf.finalize();
      }
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .catchError */ .W)(error => {
      if (this.conf.finalize) {
        this.conf.finalize();
      }
      // failed from server then call finalize method
      throw new Error(error);
    })));
  }
  /**
   * Extracts array of data from server response
   * @param res
   * @returns {any}
   */
  extractDataFromResponse(res) {
    const rawData = res.body;
    let data = !!this.conf.dataKey ? rawData[this.conf.dataKey] : rawData;
    try {
      if (data instanceof Array) {
        return this.conf.resultMap ? data.map(this.conf.resultMap).filter(Boolean) : data;
      }
      throw new Error(`Data must be an array. Please check that data extracted from the server response by the key '${this.conf.dataKey}' exists and is array.`);
    } catch (error) {
      console.log(`Failed to extract data from response: ${error}`);
      return data;
    }
  }
  /**
   * Extracts total rows count from the server response
   * Looks for the count in the headers first, then in the response body
   * @param res
   * @returns {any}
   */
  extractTotalFromResponse(res) {
    if (res.headers.has(this.conf.totalKey)) {
      return +res.headers.get(this.conf.totalKey);
    } else {
      const rawData = res.body;
      return rawData[this.conf.totalKey] || 0;
    }
  }
  requestElements() {
    let httpParams = this.createRequestParams();
    return this.http.get(this.conf.endPoint, {
      params: httpParams,
      observe: 'response'
    });
  }
  createRequestParams() {
    const requestParams = {
      ...(this.conf.where ? {
        where: this.conf.where
      } : {}),
      ...(this.conf.join ? {
        join: this.conf.join
      } : {}),
      ...(this.conf.relations ? {
        relations: this.conf.relations
      } : {}),
      ...(this.conf.withDeleted ? {
        withDeleted: this.conf.withDeleted
      } : {}),
      ...((0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_6__/* .isNotEmpty */ .hj)(this.conf.select) ? {
        select: this.conf.select
      } : {}),
      ...this.addSortRequestParams(),
      ...this.addFilterRequestParams(),
      ...this.addPagerRequestParams()
    };
    return (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_6__/* .toParams */ .SV)(requestParams);
  }
  /**
   * Adds sorting parameters to the request based on the sorting configuration.
   *
   * This function processes the `sortConf` configuration and extracts the field
   * and its direction (ascending or descending) to create a sorting object.
   * If a field does not have a valid direction, it will be skipped, and a warning
   * will be logged. The resulting sorting parameters are returned as part of an
   * object that can be used in a request.
   *
   * @returns {Object} An object containing the sorting parameters.
   */
  addSortRequestParams() {
    if (this.sortConf) {
      // Initialize an object to hold sorting orders
      const orders = {};
      // Iterate through the sort configuration array
      this.sortConf.forEach(fieldConf => {
        // Ensure the field configuration has a valid direction
        if (fieldConf.direction) {
          // Convert direction to uppercase (e.g., ASC or DESC) and add it to orders
          orders[fieldConf.field] = fieldConf.direction.toUpperCase();
        } else {
          // Log a warning if the direction is not defined
          console.warn(`Direction is not defined for field: ${fieldConf.field}`);
        }
      });
      // Return the sorting orders wrapped in the expected format
      return {
        [this.conf.sortDirKey]: orders
      };
    } else {
      // Return an empty object if there is no sorting configuration
      return {};
    }
  }
  /**
   * Add additional smart datatables filters to the request parameters.
   *
   * @returns {Object} The constructed filter object for request parameters.
   */
  addFilterRequestParams() {
    // Check if filter configuration is defined
    if (!this.filterConf) {
      // If not defined, return an empty object
      return {};
    }
    // Initialize an object to store filter values
    const filters = {};
    // Iterate over each filter configuration
    this.filterConf.forEach(({
      field,
      search
    }) => {
      // Check if search value is truthy, and add it to filters
      if (search) {
        filters[field] = search;
      }
    });
    // Construct and return the final filter object with the specified key
    return {
      [this.conf.filterFieldKey]: filters
    };
  }
  addPagerRequestParams() {
    try {
      if (this.pagingConf) {
        if (typeof this.pagingConf['page'] === 'number' && typeof this.pagingConf['perPage'] === 'number') {
          return {
            [this.conf.pagerPageKey]: this.pagingConf['page'],
            [this.conf.pagerLimitKey]: this.pagingConf['perPage']
          };
        }
        return {};
      } else {
        return {};
      }
    } catch (error) {
      console.log('Error while retrieving pagination configuration', error);
      return {};
    }
  }
}

/***/ }),

/***/ 36461:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ EquipmentSharingPolicyTableComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);

let EquipmentSharingPolicyTableComponent = /*#__PURE__*/(() => {
  class EquipmentSharingPolicyTableComponent {
    static {
      this.ɵfac = function EquipmentSharingPolicyTableComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || EquipmentSharingPolicyTableComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: EquipmentSharingPolicyTableComponent,
        selectors: [["ngx-equipment-sharing-policy-table-selector"]],
        inputs: {
          rowData: "rowData"
        },
        standalone: false,
        decls: 2,
        vars: 1,
        template: function EquipmentSharingPolicyTableComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", ctx.value ? ctx.value.name : "-", "\n");
          }
        },
        encapsulation: 2
      });
    }
  }
  return EquipmentSharingPolicyTableComponent;
})();

/***/ }),

/***/ 36902:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: () => (/* binding */ AsyncScheduler)
/* harmony export */ });
/* harmony import */ var _Scheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11768);

class AsyncScheduler extends _Scheduler__WEBPACK_IMPORTED_MODULE_0__/* .Scheduler */ ._ {
  constructor(SchedulerAction, now = _Scheduler__WEBPACK_IMPORTED_MODULE_0__/* .Scheduler */ ._.now) {
    super(SchedulerAction, now);
    this.actions = [];
    this._active = false;
  }
  flush(action) {
    const {
      actions
    } = this;
    if (this._active) {
      actions.push(action);
      return;
    }
    let error;
    this._active = true;
    do {
      if (error = action.execute(action.state, action.delay)) {
        break;
      }
    } while (action = actions.shift());
    this._active = false;
    if (error) {
      while (action = actions.shift()) {
        action.unsubscribe();
      }
      throw error;
    }
  }
}
//# sourceMappingURL=AsyncScheduler.js.map

/***/ }),

/***/ 43273:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   r: () => (/* binding */ Action)
/* harmony export */ });
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(60640);

class Action extends _Subscription__WEBPACK_IMPORTED_MODULE_0__/* .Subscription */ .yU {
  constructor(scheduler, work) {
    super();
  }
  schedule(state, delay = 0) {
    return this;
  }
}
//# sourceMappingURL=Action.js.map

/***/ }),

/***/ 45293:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ GauzyButtonActionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14572);
/* harmony import */ var _components_layout_selector_layout_selector_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(51102);





const _c0 = [[["", "buttonTemplateVisible", ""]], [["", "buttonTemplate", ""]]];
const _c1 = ["[buttonTemplateVisible]", "[buttonTemplate]"];
function GauzyButtonActionComponent_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainer"] */ .eu8(0);
  }
}
function GauzyButtonActionComponent_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainer"] */ .eu8(0);
  }
}
function GauzyButtonActionComponent_ga_layout_selector_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(0, "ga-layout-selector", 5);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("componentName", ctx_r0.componentName);
  }
}
let GauzyButtonActionComponent = /*#__PURE__*/(() => {
  class GauzyButtonActionComponent {
    constructor() {
      this.isDisable = true;
      this.hasLayoutSelector = true;
    }
    /**
     * not implemented
     */
    ngOnInit() {}
    static {
      this.ɵfac = function GauzyButtonActionComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || GauzyButtonActionComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: GauzyButtonActionComponent,
        selectors: [["ngx-gauzy-button-action"]],
        inputs: {
          isDisable: "isDisable",
          hasLayoutSelector: "hasLayoutSelector",
          componentName: "componentName",
          buttonTemplate: "buttonTemplate",
          buttonTemplateVisible: "buttonTemplateVisible"
        },
        standalone: false,
        ngContentSelectors: _c1,
        decls: 9,
        vars: 5,
        consts: [[1, "actions-container"], [1, "transition-container"], [3, "ngClass"], [4, "ngTemplateOutlet"], [3, "componentName", 4, "ngIf"], [3, "componentName"]],
        template: function GauzyButtonActionComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵprojectionDef"] */ .NAR(_c0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵprojection"] */ .SdG(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(5, GauzyButtonActionComponent_ng_container_5_Template, 1, 0, "ng-container", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(6, GauzyButtonActionComponent_ng_container_6_Template, 1, 0, "ng-container", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵprojection"] */ .SdG(7, 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(8, GauzyButtonActionComponent_ga_layout_selector_8_Template, 1, 1, "ga-layout-selector", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngClass", !ctx.isDisable ? "transition show" : "transition hide");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngClass", !ctx.isDisable ? "transition show" : "transition show-button");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngTemplateOutlet", ctx.buttonTemplateVisible);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngTemplateOutlet", ctx.buttonTemplate);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.hasLayoutSelector);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .NgClass */ .YU, _angular_common__WEBPACK_IMPORTED_MODULE_1__/* .NgIf */ .bT, _angular_common__WEBPACK_IMPORTED_MODULE_1__/* .NgTemplateOutlet */ .T3, _components_layout_selector_layout_selector_component__WEBPACK_IMPORTED_MODULE_2__/* .LayoutSelectorComponent */ .d],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.action[_ngcontent-%COMP%] {\n  box-shadow: var(--gauzy-shadow);\n  border: none;\n}\n.action[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}\n.action.info[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: var(--color-info-default);\n  color: white;\n  border-color: var(--color-info-default);\n}\n.action.info-text-1[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  color: var(--color-info-default);\n}\n.action.secondary[_ngcontent-%COMP%] {\n  color: #7e7e8f;\n}\n.action.success[_ngcontent-%COMP%] {\n  color: var(--color-success-default);\n}\n.action.warning[_ngcontent-%COMP%] {\n  color: rgb(245, 109, 88);\n}\n.action.orange[_ngcontent-%COMP%] {\n  color: rgb(255, 171, 45);\n}\n.action.primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n}\n.action.primary.soft[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: rgba(110, 73, 232, 0.1);\n}\n.action.select-nb[_ngcontent-%COMP%]     {\n  box-shadow: none;\n}\n.action.select-nb[_ngcontent-%COMP%]     .select-button {\n  box-shadow: var(--gauzy-shadow);\n  background: rgb(245, 245, 245);\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n.actions[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-2);\n  border-radius: var(--button-rectangle-border-radius);\n  padding: 2px 4px !important;\n}\n\n.gauzy-button-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n.card-custom-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding-bottom: 0;\n}\n\n[_nghost-%COMP%]     input {\n  border-radius: var(--border-radius);\n  box-shadow: var(--gauzy-shadow) inset;\n}\n\n[_nghost-%COMP%]   .actions-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  padding: 1rem 0;\n}\n[dir=rtl]   [_nghost-%COMP%]   .actions-container[_ngcontent-%COMP%] {\n  left: 0;\n}\n[dir=ltr]   [_nghost-%COMP%]   .actions-container[_ngcontent-%COMP%] {\n  right: 0;\n}\n\n[_nghost-%COMP%]   .transition-container[_ngcontent-%COMP%] {\n  overflow-x: hidden;\n  border-radius: var(--button-rectangle-border-radius);\n}\n[_nghost-%COMP%]   .transition-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-2);\n  border-radius: var(--button-rectangle-border-radius);\n  padding: 2px 4px;\n}\n[dir=ltr]   [_nghost-%COMP%]   .transition-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n[dir=rtl]   [_nghost-%COMP%]   .transition-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n\n[_nghost-%COMP%]   .transition[_ngcontent-%COMP%] {\n  display: flex;\n}\n[_nghost-%COMP%]   .transition.hide[_ngcontent-%COMP%] {\n  transition: all 0.1s ease-in;\n}\n[dir=rtl]   [_nghost-%COMP%]   .transition.hide[_ngcontent-%COMP%] {\n  transform: translateX(-100%);\n}\n[dir=ltr]   [_nghost-%COMP%]   .transition.hide[_ngcontent-%COMP%] {\n  transform: translateX(100%);\n}\n[_nghost-%COMP%]   .transition.show[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: translateX(0%);\n  transition: all 0.2s ease-out;\n}\n[_nghost-%COMP%]   .transition.show-button[_ngcontent-%COMP%] {\n  transition: all 0.15s ease-out;\n}\n[dir=rtl]   [_nghost-%COMP%]   .transition.show-button[_ngcontent-%COMP%] {\n  transform: translateX(100%);\n}\n[dir=ltr]   [_nghost-%COMP%]   .transition.show-button[_ngcontent-%COMP%] {\n  transform: translateX(-100%);\n}\n\n[dir=ltr]   [_nghost-%COMP%]   ga-layout-selector[_ngcontent-%COMP%] {\n  margin-left: 20px;\n}\n[dir=rtl]   [_nghost-%COMP%]   ga-layout-selector[_ngcontent-%COMP%] {\n  margin-right: 20px;\n}"]
      });
    }
  }
  return GauzyButtonActionComponent;
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

/***/ 47825:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   l: () => (/* binding */ DateViewComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14572);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56383);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19223);
/* harmony import */ var _pipes_date_format_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11031);





function DateViewComponent_nb_icon_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(0, "nb-icon", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(1, "translate");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(1, 1, "POP_UPS.RECURRING_EXPENSE"));
  }
}
let DateViewComponent = /*#__PURE__*/(() => {
  class DateViewComponent {
    static {
      this.ɵfac = function DateViewComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || DateViewComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: DateViewComponent,
        selectors: [["ngx-date-view"]],
        inputs: {
          value: "value",
          rowData: "rowData"
        },
        standalone: false,
        decls: 4,
        vars: 4,
        consts: [["icon", "sync-outline", 3, "nbTooltip", 4, "ngIf"], ["icon", "sync-outline", 3, "nbTooltip"]],
        template: function DateViewComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "dateFormat");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(3, DateViewComponent_nb_icon_3_Template, 2, 3, "nb-icon", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(2, 2, ctx.value), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.rowData == null ? null : ctx.rowData.recurring);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .NgIf */ .bT, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbIconComponent */ .tHu, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbTooltipDirective */ .BmQ, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__/* .TranslatePipe */ .D9, _pipes_date_format_pipe__WEBPACK_IMPORTED_MODULE_4__/* .DateFormatPipe */ .a],
        encapsulation: 2
      });
    }
  }
  return DateViewComponent;
})();

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

/***/ 57354:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O: () => (/* binding */ EmployeeSelectComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73014);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(55598);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10936);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4644);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(39855);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(39938);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(52738);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4478);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(41598);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(17785);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(88319);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(28822);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(71924);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(14572);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(56383);
/* harmony import */ var _components_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(32386);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(19223);

















function EmployeeSelectComponent_label_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "label", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(2, 1, ctx_r0.label));
  }
}
function EmployeeSelectComponent_ng_template_1_nb_option_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-option", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "ngx-avatar", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const employee_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("value", employee_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("src", employee_r3.user == null ? null : employee_r3.user.imageUrl)("name", employee_r3.user == null ? null : employee_r3.user.name)("isOption", true);
  }
}
function EmployeeSelectComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-select", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("selectedChange", function EmployeeSelectComponent_ng_template_1_Template_nb_select_selectedChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r0.onMembersSelected($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayListener"] */ .mxI("selectedChange", function EmployeeSelectComponent_ng_template_1_Template_nb_select_selectedChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayBindingSet"] */ .DH7(ctx_r0.preSelected, $event) || (ctx_r0.preSelected = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(2, EmployeeSelectComponent_ng_template_1_nb_option_2_Template, 2, 4, "nb-option", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("formControl", ctx_r0.select)("multiple", ctx_r0.multiple)("disabled", ctx_r0.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtwoWayProperty"] */ .R50("selected", ctx_r0.preSelected);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(1, 6, ctx_r0.placeholder));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx_r0.employees);
  }
}
let EmployeeSelectComponent = /*#__PURE__*/(() => {
  let EmployeeSelectComponent = class EmployeeSelectComponent {
    set reset(value) {
      if (value) {
        if (this.multiple) {
          this.select.setValue([]);
          this.select.updateValueAndValidity();
        } else {
          this.select.reset();
        }
      }
    }
    get allEmployees() {
      return this._allEmployees;
    }
    set allEmployees(value) {
      this._allEmployees = value;
      this.employees = this._allEmployees;
    }
    get selectedEmployeeIds() {
      return this.val;
    }
    set selectedEmployeeIds(value) {
      this.preSelected = value;
      this.select.setValue(value);
      this.select.updateValueAndValidity();
    }
    set employees(employees) {
      this._employees = employees;
      this.onLoadEmployees.emit(employees);
    }
    get employees() {
      return this._employees;
    }
    constructor(employeesService, store, dateRangePickerBuilderService) {
      this.employeesService = employeesService;
      this.store = store;
      this.dateRangePickerBuilderService = dateRangePickerBuilderService;
      /**
       * Getter & Setter for employees
       */
      this._employees = [];
      this.selectedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .bkB();
      this.onLoadEmployees = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .bkB();
      this.multiple = true;
      this.label = 'FORM.PLACEHOLDERS.ADD_REMOVE_EMPLOYEES';
      this.disabled = false;
      this.placeholder = 'FORM.PLACEHOLDERS.ADD_REMOVE_EMPLOYEES';
      this.select = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .FormControl */ .MJ();
      this.val = null;
      this.changeValue$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__/* .Subject */ .B();
      this.onChange = () => {};
      this.onTouched = () => {};
      this.organization = this.store.selectedOrganization;
    }
    set employeeId(value) {
      this.changeValue$.next(value);
    }
    get employeeId() {
      return this.val;
    }
    ngOnInit() {
      var _this = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(function* () {
        _this.changeValue$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .debounceTime */ .B)(100), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .untilDestroyed */ .s)(_this)).subscribe(value => {
          _this.checkForMultiSelectValue(value);
          _this.onChange(_this.val);
        });
        _this.select.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .M)(value => _this.employeeId = value), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .untilDestroyed */ .s)(_this)).subscribe();
        const selectedDateRange$ = _this.dateRangePickerBuilderService.selectedDateRange$;
        (0,rxjs__WEBPACK_IMPORTED_MODULE_7__/* .combineLatest */ .z)([selectedDateRange$]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__/* .filter */ .p)(([dateRange]) => !!dateRange), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .M)(([dateRange]) => {
          _this.selectedDateRange = dateRange;
        }), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .M)(/*#__PURE__*/(0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(function* () {
          if (!_this.allEmployees || _this.allEmployees.length === 0) {
            yield _this.getWorkingEmployees();
          }
          _this.select.setValue(_this.preSelected);
          _this.loaded = true;
        })), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .untilDestroyed */ .s)(_this)).subscribe();
      })();
    }
    checkForMultiSelectValue(val) {
      if (this.multiple) {
        this.val = val instanceof Array ? val : [val];
      } else {
        this.val = val instanceof Array ? val[0] : val;
      }
    }
    onMembersSelected(selectEvent) {
      this.selectedChange.emit(selectEvent);
    }
    writeValue(value) {
      this.changeValue$.next(value);
    }
    registerOnChange(fn) {
      this.onChange = fn;
    }
    registerOnTouched(fn) {
      this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
      this.disabled = isDisabled;
    }
    /**
     * Get working employees of the selected month
     */
    getWorkingEmployees() {
      var _this2 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(function* () {
        if (!_this2.store.hasAnyPermission(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_9__/* .PermissionsEnum */ .U.CHANGE_SELECTED_EMPLOYEE) && !_this2.store.hasAnyPermission(_gauzy_contracts__WEBPACK_IMPORTED_MODULE_9__/* .PermissionsEnum */ .U.SELECT_EMPLOYEE)) {
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
        } = yield _this2.employeesService.getWorking(organizationId, tenantId, _this2.selectedDateRange, true);
        _this2.employees = items;
      })();
    }
    ngOnDestroy() {}
    static {
      this.ɵfac = function EmployeeSelectComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || EmployeeSelectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_10__/* .EmployeesService */ .r), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_11__/* .Store */ .il), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_12__/* .DateRangePickerBuilderService */ .i7));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: EmployeeSelectComponent,
        selectors: [["ga-employee-multi-select"]],
        inputs: {
          reset: "reset",
          allEmployees: "allEmployees",
          selectedEmployeeIds: "selectedEmployeeIds",
          multiple: "multiple",
          label: "label",
          disabled: "disabled",
          placeholder: "placeholder"
        },
        outputs: {
          selectedChange: "selectedChange",
          onLoadEmployees: "onLoadEmployees"
        },
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵProvidersFeature"] */ .Jv_([{
          provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .NG_VALUE_ACCESSOR */ .kq,
          useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__/* .forwardRef */ .Rfq)(() => EmployeeSelectComponent),
          multi: true
        }])],
        decls: 2,
        vars: 2,
        consts: [["class", "label", 4, "ngIf"], [3, "ngIf"], [1, "label"], ["fullWidth", "", 3, "selectedChange", "formControl", "multiple", "disabled", "selected", "placeholder"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["size", "sm", 3, "src", "name", "isOption"]],
        template: function EmployeeSelectComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(0, EmployeeSelectComponent_label_0_Template, 3, 3, "label", 0)(1, EmployeeSelectComponent_ng_template_1_Template, 3, 8, "ng-template", 1);
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.label);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.loaded);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__/* .NgForOf */ .Sq, _angular_common__WEBPACK_IMPORTED_MODULE_13__/* .NgIf */ .bT, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .NgControlStatus */ .BC, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .FormControlDirective */ .l_, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbSelectComponent */ .S81, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbOptionComponent */ .ZJ2, _components_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_15__/* .AvatarComponent */ .f, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__/* .TranslatePipe */ .D9],
        styles: ["[_nghost-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container {\n  flex-wrap: nowrap;\n  overflow: hidden;\n}\n\nngx-avatar[_ngcontent-%COMP%]     .inner-wrapper {\n  display: flex;\n  flex-direction: row;\n}\nngx-avatar[_ngcontent-%COMP%]     .inner-wrapper .names-wrapper {\n  margin: 0 10px;\n}"]
      });
    }
  };
  EmployeeSelectComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_17__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .UntilDestroy */ .d)({
    checkProperties: true
  }), (0,tslib__WEBPACK_IMPORTED_MODULE_17__/* .__metadata */ .Sn)("design:paramtypes", [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_10__/* .EmployeesService */ .r, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_11__/* .Store */ .il, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_12__/* .DateRangePickerBuilderService */ .i7])], EmployeeSelectComponent);
  return EmployeeSelectComponent;
})();


/***/ }),

/***/ 57733:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   z: () => (/* binding */ combineLatest)
/* harmony export */ });
/* unused harmony export combineLatestInit */
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(35484);
/* harmony import */ var _util_argsArgArrayOrObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67306);
/* harmony import */ var _from__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39127);
/* harmony import */ var _util_identity__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(89685);
/* harmony import */ var _util_mapOneOrManyArgs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(86289);
/* harmony import */ var _util_args__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13685);
/* harmony import */ var _util_createObject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(82795);
/* harmony import */ var _operators_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(25969);
/* harmony import */ var _util_executeSchedule__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(12508);









function combineLatest(...args) {
  const scheduler = (0,_util_args__WEBPACK_IMPORTED_MODULE_0__/* .popScheduler */ .lI)(args);
  const resultSelector = (0,_util_args__WEBPACK_IMPORTED_MODULE_0__/* .popResultSelector */ .ms)(args);
  const {
    args: observables,
    keys
  } = (0,_util_argsArgArrayOrObject__WEBPACK_IMPORTED_MODULE_1__/* .argsArgArrayOrObject */ .D)(args);
  if (observables.length === 0) {
    return (0,_from__WEBPACK_IMPORTED_MODULE_2__/* .from */ .H)([], scheduler);
  }
  const result = new _Observable__WEBPACK_IMPORTED_MODULE_3__/* .Observable */ .c(combineLatestInit(observables, scheduler, keys ? values => (0,_util_createObject__WEBPACK_IMPORTED_MODULE_4__/* .createObject */ .e)(keys, values) : _util_identity__WEBPACK_IMPORTED_MODULE_5__/* .identity */ .D));
  return resultSelector ? result.pipe((0,_util_mapOneOrManyArgs__WEBPACK_IMPORTED_MODULE_6__/* .mapOneOrManyArgs */ .I)(resultSelector)) : result;
}
function combineLatestInit(observables, scheduler, valueTransform = _util_identity__WEBPACK_IMPORTED_MODULE_5__/* .identity */ .D) {
  return subscriber => {
    maybeSchedule(scheduler, () => {
      const {
        length
      } = observables;
      const values = new Array(length);
      let active = length;
      let remainingFirstValues = length;
      for (let i = 0; i < length; i++) {
        maybeSchedule(scheduler, () => {
          const source = (0,_from__WEBPACK_IMPORTED_MODULE_2__/* .from */ .H)(observables[i], scheduler);
          let hasFirstValue = false;
          source.subscribe((0,_operators_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_7__/* .createOperatorSubscriber */ ._)(subscriber, value => {
            values[i] = value;
            if (!hasFirstValue) {
              hasFirstValue = true;
              remainingFirstValues--;
            }
            if (!remainingFirstValues) {
              subscriber.next(valueTransform(values.slice()));
            }
          }, () => {
            if (! --active) {
              subscriber.complete();
            }
          }));
        }, subscriber);
      }
    }, subscriber);
  };
}
function maybeSchedule(scheduler, execute, subscription) {
  if (scheduler) {
    (0,_util_executeSchedule__WEBPACK_IMPORTED_MODULE_8__/* .executeSchedule */ .N)(subscription, scheduler, execute);
  } else {
    execute();
  }
}
//# sourceMappingURL=combineLatest.js.map

/***/ }),

/***/ 57832:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: () => (/* binding */ TableComponentsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14572);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10936);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56383);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19223);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(87466);
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(10012);
/* harmony import */ var _directives_directives_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(78818);
/* harmony import */ var _tasks_task_badge_view_task_badge_view_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(16119);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);










let TableComponentsModule = /*#__PURE__*/(() => {
  class TableComponentsModule {
    static {
      this.ɵfac = function TableComponentsModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || TableComponentsModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .$C({
        type: TableComponentsModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .CommonModule */ .MD, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .FormsModule */ .YN, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbBadgeModule */ .iEK, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbButtonModule */ .P5N, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbIconModule */ .clu, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbToggleModule */ .jVr, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbTooltipModule */ .IB0, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__/* .TranslateModule */ .h.forChild(), _directives_directives_module__WEBPACK_IMPORTED_MODULE_5__/* .DirectivesModule */ .h, _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__/* .PipesModule */ .Y, _components_components_module__WEBPACK_IMPORTED_MODULE_7__/* .ComponentsModule */ .h, _tasks_task_badge_view_task_badge_view_module__WEBPACK_IMPORTED_MODULE_8__/* .TaskBadgeViewComponentModule */ .z]
      });
    }
  }
  return TableComponentsModule;
})();

/***/ }),

/***/ 59395:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   b: () => (/* binding */ ServerSourceConf)
/* harmony export */ });
let ServerSourceConf = /*#__PURE__*/(() => {
  class ServerSourceConf {
    static {
      this.SORT_FIELD_KEY = 'orderBy';
    }
    static {
      this.SORT_DIR_KEY = 'order';
    }
    static {
      this.PAGER_PAGE_KEY = 'skip';
    }
    static {
      this.PAGER_LIMIT_KEY = 'take';
    }
    static {
      this.FILTER_FIELD_KEY = 'filters';
    }
    static {
      this.TOTAL_KEY = 'total';
    }
    static {
      this.DATA_KEY = 'items';
    }
    constructor({
      resultMap = null,
      finalize = null,
      endPoint = '',
      sortFieldKey = '',
      sortDirKey = '',
      pagerPageKey = '',
      pagerLimitKey = '',
      filterFieldKey = '',
      totalKey = '',
      dataKey = '',
      where = '',
      join = '',
      relations = [],
      withDeleted = false,
      select = {}
    } = {}) {
      this.endPoint = endPoint ? endPoint : '';
      this.sortFieldKey = sortFieldKey ? sortFieldKey : ServerSourceConf.SORT_FIELD_KEY;
      this.sortDirKey = sortDirKey ? sortDirKey : ServerSourceConf.SORT_DIR_KEY;
      this.pagerPageKey = pagerPageKey ? pagerPageKey : ServerSourceConf.PAGER_PAGE_KEY;
      this.pagerLimitKey = pagerLimitKey ? pagerLimitKey : ServerSourceConf.PAGER_LIMIT_KEY;
      this.filterFieldKey = filterFieldKey ? filterFieldKey : ServerSourceConf.FILTER_FIELD_KEY;
      this.totalKey = totalKey ? totalKey : ServerSourceConf.TOTAL_KEY;
      this.dataKey = dataKey ? dataKey : ServerSourceConf.DATA_KEY;
      this.where = where;
      this.join = join;
      this.relations = relations;
      this.resultMap = resultMap;
      this.finalize = finalize;
      this.withDeleted = withDeleted;
      this.select = select;
    }
  }
  return ServerSourceConf;
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

/***/ 67306:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ argsArgArrayOrObject)
/* harmony export */ });
const {
  isArray
} = Array;
const {
  getPrototypeOf,
  prototype: objectProto,
  keys: getKeys
} = Object;
function argsArgArrayOrObject(args) {
  if (args.length === 1) {
    const first = args[0];
    if (isArray(first)) {
      return {
        args: first,
        keys: null
      };
    }
    if (isPOJO(first)) {
      const keys = getKeys(first);
      return {
        args: keys.map(key => first[key]),
        keys
      };
    }
  }
  return {
    args: args,
    keys: null
  };
}
function isPOJO(obj) {
  return obj && typeof obj === 'object' && getPrototypeOf(obj) === objectProto;
}
//# sourceMappingURL=argsArgArrayOrObject.js.map

/***/ }),

/***/ 71181:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ debounceTime)
/* harmony export */ });
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(89751);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7661);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25969);



function debounceTime(dueTime, scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__/* .asyncScheduler */ .E) {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_1__/* .operate */ .N)((source, subscriber) => {
    let activeTask = null;
    let lastValue = null;
    let lastTime = null;
    const emit = () => {
      if (activeTask) {
        activeTask.unsubscribe();
        activeTask = null;
        const value = lastValue;
        lastValue = null;
        subscriber.next(value);
      }
    };
    function emitWhenIdle() {
      const targetTime = lastTime + dueTime;
      const now = scheduler.now();
      if (now < targetTime) {
        activeTask = this.schedule(undefined, targetTime - now);
        subscriber.add(activeTask);
        return;
      }
      emit();
    }
    source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__/* .createOperatorSubscriber */ ._)(subscriber, value => {
      lastValue = value;
      lastTime = scheduler.now();
      if (!activeTask) {
        activeTask = scheduler.schedule(emitWhenIdle, dueTime);
        subscriber.add(activeTask);
      }
    }, () => {
      emit();
      subscriber.complete();
    }, undefined, () => {
      lastValue = activeTask = null;
    }));
  });
}
//# sourceMappingURL=debounceTime.js.map

/***/ }),

/***/ 82795:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: () => (/* binding */ createObject)
/* harmony export */ });
function createObject(keys, values) {
  return keys.reduce((result, key, i) => (result[key] = values[i], result), {});
}
//# sourceMappingURL=createObject.js.map

/***/ }),

/***/ 83451:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   f: () => (/* binding */ intervalProvider)
/* harmony export */ });
const intervalProvider = {
  setInterval(handler, timeout, ...args) {
    const {
      delegate
    } = intervalProvider;
    if (delegate === null || delegate === void 0 ? void 0 : delegate.setInterval) {
      return delegate.setInterval(handler, timeout, ...args);
    }
    return setInterval(handler, timeout, ...args);
  },
  clearInterval(handle) {
    const {
      delegate
    } = intervalProvider;
    return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearInterval) || clearInterval)(handle);
  },
  delegate: undefined
};
//# sourceMappingURL=intervalProvider.js.map

/***/ }),

/***/ 86289:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ mapOneOrManyArgs)
/* harmony export */ });
/* harmony import */ var _operators_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87081);

const {
  isArray
} = Array;
function callOrApply(fn, args) {
  return isArray(args) ? fn(...args) : fn(args);
}
function mapOneOrManyArgs(fn) {
  return (0,_operators_map__WEBPACK_IMPORTED_MODULE_0__/* .map */ .T)(args => callOrApply(fn, args));
}
//# sourceMappingURL=mapOneOrManyArgs.js.map

/***/ }),

/***/ 89751:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ asyncScheduler),
/* harmony export */   b: () => (/* binding */ async)
/* harmony export */ });
/* harmony import */ var _AsyncAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16061);
/* harmony import */ var _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36902);


const asyncScheduler = new _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__/* .AsyncScheduler */ .q(_AsyncAction__WEBPACK_IMPORTED_MODULE_1__/* .AsyncAction */ .R);
const async = asyncScheduler;
//# sourceMappingURL=async.js.map

/***/ }),

/***/ 90475:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: () => (/* binding */ StatusBadgeComponent)
/* harmony export */ });
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81236);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26860);


let StatusBadgeComponent = /*#__PURE__*/(() => {
  class StatusBadgeComponent {
    constructor() {}
    ngOnInit() {
      if (this.value && this.value.text) {
        if (this.layout === _gauzy_contracts__WEBPACK_IMPORTED_MODULE_0__/* .ComponentLayoutStyleEnum */ .IE.CARDS_GRID) {
          if (typeof this.value === 'object') {
            this.text = this.value['text'];
            this.badgeClass = 'badge badge-' + this.value['class'];
          } else {
            this.text = this.value;
          }
        } else {
          this.text = this.value['text'];
          this.badgeClass = 'badge badge-' + this.value['class'];
        }
      }
    }
    static {
      this.ɵfac = function StatusBadgeComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || StatusBadgeComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineComponent"] */ .VBU({
        type: StatusBadgeComponent,
        selectors: [["ga-status-badge"]],
        inputs: {
          value: "value",
          layout: "layout"
        },
        standalone: false,
        decls: 1,
        vars: 3,
        consts: [[3, "innerHtml"]],
        template: function StatusBadgeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(0, "div", 0);
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵclassMap"] */ .HbH(ctx.badgeClass);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("innerHtml", ctx.text, _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵsanitizeHtml"] */ .npT);
          }
        },
        styles: ["div[_ngcontent-%COMP%] {\n  border-radius: 0.25rem;\n  align-content: center;\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  height: 23px;\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 15px;\n  letter-spacing: 0em;\n  text-align: left;\n}\n\n.badge[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}"]
      });
    }
  }
  return StatusBadgeComponent;
})();

/***/ }),

/***/ 95959:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ NoDataMessageComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(55598);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(41598);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19223);
/* harmony import */ var _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38546);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26860);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56383);







const _c0 = [[["", "message", ""]]];
const _c1 = ["[message]"];
let NoDataMessageComponent = /*#__PURE__*/(() => {
  let NoDataMessageComponent = class NoDataMessageComponent extends _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_0__/* .TranslationBaseComponent */ .K {
    constructor(translateService) {
      super(translateService);
      this.translateService = translateService;
      this.title = this.getTranslation('SM_TABLE.NO_DATA_MESSAGE');
    }
    ngOnInit() {}
    static {
      this.ɵfac = function NoDataMessageComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || NoDataMessageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__/* .TranslateService */ .c$));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineComponent"] */ .VBU({
        type: NoDataMessageComponent,
        selectors: [["ngx-no-data-message"]],
        inputs: {
          title: "title",
          message: "message"
        },
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
        ngContentSelectors: _c1,
        decls: 11,
        vars: 2,
        consts: [[1, "p-0", "no-data-found"], [1, "row", "align-items-center", "h-100"], [1, "col-12"], [1, "text-center", "d-flex", "justify-content-center", "py-3"], ["icon", "bar-chart-2-outline", 1, "no-record-icon"], [1, "text-center", "m-0"], [1, "text-center"]],
        template: function NoDataMessageComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵprojectionDef"] */ .NAR(_c0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "nb-card", 0)(1, "nb-card-body")(2, "div", 1)(3, "div", 2)(4, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(5, "nb-icon", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(6, "h5", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(8, "p", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵprojection"] */ .SdG(10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", ctx.title, " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", ctx.message, " ");
          }
        },
        dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbCardComponent */ .SrT, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbCardBodyComponent */ .KH5, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbIconComponent */ .tHu],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.no-data-found[_ngcontent-%COMP%] {\n  overflow-y: hidden;\n  background-color: var(--gauzy-card-1) !important;\n  height: 100% !important;\n  margin: 0;\n}\n\nh5[_ngcontent-%COMP%], \ndiv[_ngcontent-%COMP%] {\n  color: var(--gauzy-text-color-1);\n  font-weight: 600;\n  font-size: 18px;\n}\n\ndiv[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n}\n\np[_ngcontent-%COMP%] {\n  color: var(--gauzy-text-color-2);\n}\n\n.no-record-icon[_ngcontent-%COMP%] {\n  transform: rotate(0.75turn) scaleY(-1);\n  font-size: 48px;\n}\n\n[_nghost-%COMP%] {\n  height: 100%;\n}"]
      });
    }
  };
  NoDataMessageComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .UntilDestroy */ .d)({
    checkProperties: true
  }), (0,tslib__WEBPACK_IMPORTED_MODULE_4__/* .__metadata */ .Sn)("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__/* .TranslateService */ .c$])], NoDataMessageComponent);
  return NoDataMessageComponent;
})();


/***/ })

}]);