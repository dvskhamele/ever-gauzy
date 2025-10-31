"use strict";
(self["webpackChunkgauzy"] = self["webpackChunkgauzy"] || []).push([[6382],{

/***/ 13344:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   U: () => (/* binding */ defaultIfEmpty)
/* harmony export */ });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7661);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25969);


function defaultIfEmpty(defaultValue) {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__/* .operate */ .N)((source, subscriber) => {
    let hasValue = false;
    source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__/* .createOperatorSubscriber */ ._)(subscriber, value => {
      hasValue = true;
      subscriber.next(value);
    }, () => {
      if (!hasValue) {
        subscriber.next(defaultValue);
      }
      subscriber.complete();
    }));
  });
}
//# sourceMappingURL=defaultIfEmpty.js.map

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

/***/ 27697:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   h: () => (/* binding */ CKEditorComponent),
/* harmony export */   w: () => (/* binding */ CKEditorModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26860);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14572);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10936);
/* harmony import */ var ckeditor4_integrations_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92640);






/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */
function CKEditorComponent_ng_template_0_Template(rf, ctx) {}
let CKEditorComponent = /*#__PURE__*/(() => {
  class CKEditorComponent {
    constructor(elementRef, ngZone) {
      this.elementRef = elementRef;
      this.ngZone = ngZone;
      /**
       * CKEditor 4 script url address. Script will be loaded only if CKEDITOR namespace is missing.
       *
       * Defaults to 'https://cdn.ckeditor.com/4.22.1/standard-all/ckeditor.js'
       */
      this.editorUrl = 'https://cdn.ckeditor.com/4.22.1/standard-all/ckeditor.js';
      /**
       * Tag name of the editor component.
       *
       * The default tag is `textarea`.
       */
      this.tagName = 'textarea';
      /**
       * The type of the editor interface.
       *
       * By default editor interface will be initialized as `classic` editor.
       * You can also choose to create an editor with `inline` interface type instead.
       *
       * See https://ckeditor.com/docs/ckeditor4/latest/guide/dev_uitypes.html
       * and https://ckeditor.com/docs/ckeditor4/latest/examples/fixedui.html
       * to learn more.
       */
      this.type = "classic" /* CLASSIC */;
      /**
       * Fired when the CKEDITOR https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR.html namespace
       * is loaded. It only triggers once, no matter how many CKEditor 4 components are initialised.
       * Can be used for convenient changes in the namespace, e.g. for adding external plugins.
       */
      this.namespaceLoaded = new _angular_core__WEBPACK_IMPORTED_MODULE_1__/* .EventEmitter */ .bkB();
      /**
       * Fires when the editor is ready. It corresponds with the `editor#instanceReady`
       * https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_editor.html#event-instanceReady
       * event.
       */
      this.ready = new _angular_core__WEBPACK_IMPORTED_MODULE_1__/* .EventEmitter */ .bkB();
      /**
       * Fires when the editor data is loaded, e.g. after calling setData()
       * https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_editor.html#method-setData
       * editor's method. It corresponds with the `editor#dataReady`
       * https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_editor.html#event-dataReady event.
       */
      this.dataReady = new _angular_core__WEBPACK_IMPORTED_MODULE_1__/* .EventEmitter */ .bkB();
      /**
       * Fires when the content of the editor has changed. It corresponds with the `editor#change`
       * https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_editor.html#event-change
       * event. For performance reasons this event may be called even when data didn't really changed.
       * Please note that this event will only be fired when `undo` plugin is loaded. If you need to
       * listen for editor changes (e.g. for two-way data binding), use `dataChange` event instead.
       */
      this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__/* .EventEmitter */ .bkB();
      /**
       * Fires when the content of the editor has changed. In contrast to `change` - only emits when
       * data really changed thus can be successfully used with `[data]` and two way `[(data)]` binding.
       *
       * See more: https://angular.io/guide/template-syntax#two-way-binding---
       */
      this.dataChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__/* .EventEmitter */ .bkB();
      /**
       * Fires when the native dragStart event occurs. It corresponds with the `editor#dragstart`
       * https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_editor.html#event-dragstart
       * event.
       */
      this.dragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_1__/* .EventEmitter */ .bkB();
      /**
       * Fires when the native dragEnd event occurs. It corresponds with the `editor#dragend`
       * https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_editor.html#event-dragend
       * event.
       */
      this.dragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__/* .EventEmitter */ .bkB();
      /**
       * Fires when the native drop event occurs. It corresponds with the `editor#drop`
       * https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_editor.html#event-drop
       * event.
       */
      this.drop = new _angular_core__WEBPACK_IMPORTED_MODULE_1__/* .EventEmitter */ .bkB();
      /**
       * Fires when the file loader response is received. It corresponds with the `editor#fileUploadResponse`
       * https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_editor.html#event-fileUploadResponse
       * event.
       */
      this.fileUploadResponse = new _angular_core__WEBPACK_IMPORTED_MODULE_1__/* .EventEmitter */ .bkB();
      /**
       * Fires when the file loader should send XHR. It corresponds with the `editor#fileUploadRequest`
       * https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_editor.html#event-fileUploadRequest
       * event.
       */
      this.fileUploadRequest = new _angular_core__WEBPACK_IMPORTED_MODULE_1__/* .EventEmitter */ .bkB();
      /**
       * Fires when the editing area of the editor is focused. It corresponds with the `editor#focus`
       * https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_editor.html#event-focus
       * event.
       */
      this.focus = new _angular_core__WEBPACK_IMPORTED_MODULE_1__/* .EventEmitter */ .bkB();
      /**
       * Fires after the user initiated a paste action, but before the data is inserted.
       * It corresponds with the `editor#paste`
       * https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_editor.html#event-paste
       * event.
       */
      this.paste = new _angular_core__WEBPACK_IMPORTED_MODULE_1__/* .EventEmitter */ .bkB();
      /**
       * Fires after the `paste` event if content was modified. It corresponds with the `editor#afterPaste`
       * https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_editor.html#event-afterPaste
       * event.
       */
      this.afterPaste = new _angular_core__WEBPACK_IMPORTED_MODULE_1__/* .EventEmitter */ .bkB();
      /**
       * Fires when the editing view of the editor is blurred. It corresponds with the `editor#blur`
       * https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_editor.html#event-blur
       * event.
       */
      this.blur = new _angular_core__WEBPACK_IMPORTED_MODULE_1__/* .EventEmitter */ .bkB();
      /**
       * If the component is read–only before the editor instance is created, it remembers that state,
       * so the editor can become read–only once it is ready.
       */
      this._readOnly = null;
      this._data = null;
      this._destroyed = false;
    }
    /**
     * Keeps track of the editor's data.
     *
     * It's also decorated as an input which is useful when not using the ngModel.
     *
     * See https://angular.io/api/forms/NgModel to learn more.
     */
    set data(data) {
      if (data === this._data) {
        return;
      }
      if (this.instance) {
        this.instance.setData(data);
        // Data may be changed by ACF.
        this._data = this.instance.getData();
        return;
      }
      this._data = data;
    }
    get data() {
      return this._data;
    }
    /**
     * When set to `true`, the editor becomes read-only.
     *
     * See https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_editor.html#property-readOnly
     * to learn more.
     */
    set readOnly(isReadOnly) {
      if (this.instance) {
        this.instance.setReadOnly(isReadOnly);
        return;
      }
      // Delay setting read-only state until editor initialization.
      this._readOnly = isReadOnly;
    }
    get readOnly() {
      if (this.instance) {
        return this.instance.readOnly;
      }
      return this._readOnly;
    }
    ngAfterViewInit() {
      (0,ckeditor4_integrations_common__WEBPACK_IMPORTED_MODULE_0__/* .getEditorNamespace */ .$)(this.editorUrl, namespace => {
        this.namespaceLoaded.emit(namespace);
      }).then(() => {
        // Check if component instance was destroyed before `ngAfterViewInit` call (#110).
        // Here, `this.instance` is still not initialized and so additional flag is needed.
        if (this._destroyed) {
          return;
        }
        this.ngZone.runOutsideAngular(this.createEditor.bind(this));
      }).catch(window.console.error);
    }
    ngOnDestroy() {
      this._destroyed = true;
      this.ngZone.runOutsideAngular(() => {
        if (this.instance) {
          this.instance.destroy();
          this.instance = null;
        }
      });
    }
    writeValue(value) {
      this.data = value;
    }
    registerOnChange(callback) {
      this.onChange = callback;
    }
    registerOnTouched(callback) {
      this.onTouched = callback;
    }
    createEditor() {
      const element = document.createElement(this.tagName);
      this.elementRef.nativeElement.appendChild(element);
      const userInstanceReadyCallback = this.config?.on?.instanceReady;
      const defaultConfig = {
        delayIfDetached: true
      };
      const config = {
        ...defaultConfig,
        ...this.config
      };
      if (typeof config.on === 'undefined') {
        config.on = {};
      }
      config.on.instanceReady = evt => {
        const editor = evt.editor;
        this.instance = editor;
        // Read only state may change during instance initialization.
        this.readOnly = this._readOnly !== null ? this._readOnly : this.instance.readOnly;
        this.subscribe(this.instance);
        const undo = editor.undoManager;
        if (this.data !== null) {
          undo && undo.lock();
          editor.setData(this.data, {
            callback: () => {
              // Locking undoManager prevents 'change' event.
              // Trigger it manually to updated bound data.
              if (this.data !== editor.getData()) {
                undo ? editor.fire('change') : editor.fire('dataReady');
              }
              undo && undo.unlock();
              this.ngZone.run(() => {
                if (typeof userInstanceReadyCallback === 'function') {
                  userInstanceReadyCallback(evt);
                }
                this.ready.emit(evt);
              });
            }
          });
        } else {
          this.ngZone.run(() => {
            if (typeof userInstanceReadyCallback === 'function') {
              userInstanceReadyCallback(evt);
            }
            this.ready.emit(evt);
          });
        }
      };
      if (this.type === "inline" /* INLINE */) {
        CKEDITOR.inline(element, config);
      } else {
        CKEDITOR.replace(element, config);
      }
    }
    subscribe(editor) {
      editor.on('focus', evt => {
        this.ngZone.run(() => {
          this.focus.emit(evt);
        });
      });
      editor.on('paste', evt => {
        this.ngZone.run(() => {
          this.paste.emit(evt);
        });
      });
      editor.on('afterPaste', evt => {
        this.ngZone.run(() => {
          this.afterPaste.emit(evt);
        });
      });
      editor.on('dragend', evt => {
        this.ngZone.run(() => {
          this.dragEnd.emit(evt);
        });
      });
      editor.on('dragstart', evt => {
        this.ngZone.run(() => {
          this.dragStart.emit(evt);
        });
      });
      editor.on('drop', evt => {
        this.ngZone.run(() => {
          this.drop.emit(evt);
        });
      });
      editor.on('fileUploadRequest', evt => {
        this.ngZone.run(() => {
          this.fileUploadRequest.emit(evt);
        });
      });
      editor.on('fileUploadResponse', evt => {
        this.ngZone.run(() => {
          this.fileUploadResponse.emit(evt);
        });
      });
      editor.on('blur', evt => {
        this.ngZone.run(() => {
          if (this.onTouched) {
            this.onTouched();
          }
          this.blur.emit(evt);
        });
      });
      editor.on('dataReady', this.propagateChange, this);
      if (this.instance.undoManager) {
        editor.on('change', this.propagateChange, this);
      }
      // If 'undo' plugin is not loaded, listen to 'selectionCheck' event instead. (#54).
      else {
        editor.on('selectionCheck', this.propagateChange, this);
      }
    }
    propagateChange(event) {
      this.ngZone.run(() => {
        const newData = this.instance.getData();
        if (event.name === 'change') {
          this.change.emit(event);
        } else if (event.name === 'dataReady') {
          this.dataReady.emit(event);
        }
        if (newData === this.data) {
          return;
        }
        this._data = newData;
        this.dataChange.emit(newData);
        if (this.onChange) {
          this.onChange(newData);
        }
      });
    }
  }
  CKEditorComponent.ɵfac = function CKEditorComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || CKEditorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* .ElementRef */ .aKT), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* .NgZone */ .SKi));
  };
  CKEditorComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineComponent"] */ .VBU({
    type: CKEditorComponent,
    selectors: [["ckeditor"]],
    inputs: {
      config: "config",
      editorUrl: "editorUrl",
      tagName: "tagName",
      type: "type",
      data: "data",
      readOnly: "readOnly"
    },
    outputs: {
      namespaceLoaded: "namespaceLoaded",
      ready: "ready",
      dataReady: "dataReady",
      change: "change",
      dataChange: "dataChange",
      dragStart: "dragStart",
      dragEnd: "dragEnd",
      drop: "drop",
      fileUploadResponse: "fileUploadResponse",
      fileUploadRequest: "fileUploadRequest",
      focus: "focus",
      paste: "paste",
      afterPaste: "afterPaste",
      blur: "blur"
    },
    standalone: false,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵProvidersFeature"] */ .Jv_([{
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .NG_VALUE_ACCESSOR */ .kq,
      useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__/* .forwardRef */ .Rfq)(() => CKEditorComponent),
      multi: true
    }])],
    decls: 1,
    vars: 0,
    template: function CKEditorComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(0, CKEditorComponent_ng_template_0_Template, 0, 0, "ng-template");
      }
    },
    encapsulation: 2
  });
  return CKEditorComponent;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */

/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */
let CKEditorModule = /*#__PURE__*/(() => {
  class CKEditorModule {}
  CKEditorModule.ɵfac = function CKEditorModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || CKEditorModule)();
  };
  CKEditorModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineNgModule"] */ .$C({
    type: CKEditorModule
  });
  CKEditorModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineInjector"] */ .G2t({
    imports: [[_angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .FormsModule */ .YN, _angular_common__WEBPACK_IMPORTED_MODULE_3__/* .CommonModule */ .MD]]
  });
  return CKEditorModule;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=ckeditor4-angular.mjs.map

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

/***/ 29421:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   n: () => (/* binding */ switchMap)
/* harmony export */ });
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85783);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7661);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25969);



function switchMap(project, resultSelector) {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__/* .operate */ .N)((source, subscriber) => {
    let innerSubscriber = null;
    let index = 0;
    let isComplete = false;
    const checkComplete = () => isComplete && !innerSubscriber && subscriber.complete();
    source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__/* .createOperatorSubscriber */ ._)(subscriber, value => {
      innerSubscriber === null || innerSubscriber === void 0 ? void 0 : innerSubscriber.unsubscribe();
      let innerIndex = 0;
      const outerIndex = index++;
      (0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_2__/* .innerFrom */ .Tg)(project(value, outerIndex)).subscribe(innerSubscriber = (0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__/* .createOperatorSubscriber */ ._)(subscriber, innerValue => subscriber.next(resultSelector ? resultSelector(value, innerValue, outerIndex, innerIndex++) : innerValue), () => {
        innerSubscriber = null;
        checkComplete();
      }));
    }, () => {
      isComplete = true;
      checkComplete();
    }));
  });
}
//# sourceMappingURL=switchMap.js.map

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

/***/ 42883:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: () => (/* binding */ throwIfEmpty)
/* harmony export */ });
/* harmony import */ var _util_EmptyError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25413);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7661);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25969);



function throwIfEmpty(errorFactory = defaultErrorFactory) {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__/* .operate */ .N)((source, subscriber) => {
    let hasValue = false;
    source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__/* .createOperatorSubscriber */ ._)(subscriber, value => {
      hasValue = true;
      subscriber.next(value);
    }, () => hasValue ? subscriber.complete() : subscriber.error(errorFactory())));
  });
}
function defaultErrorFactory() {
  return new _util_EmptyError__WEBPACK_IMPORTED_MODULE_2__/* .EmptyError */ .G();
}
//# sourceMappingURL=throwIfEmpty.js.map

/***/ }),

/***/ 53619:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ MyTaskDialogComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(73014);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(81995);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10936);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20381);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(36950);
/* harmony import */ var _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38546);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(98106);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26860);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(56383);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(71924);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(42433);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(15480);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(54263);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(88319);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(19223);
/* harmony import */ var ckeditor4_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(27697);
/* harmony import */ var _packages_ui_core_shared_src_lib_tags_tags_color_input_tags_color_input_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(62177);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(14572);
/* harmony import */ var _packages_ui_core_shared_src_lib_employee_employee_multi_select_employee_multi_select_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(57354);
/* harmony import */ var _packages_ui_core_shared_src_lib_selectors_project_project_project_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(46582);
/* harmony import */ var _packages_ui_core_shared_src_lib_tasks_task_priority_select_task_priority_select_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(18912);
/* harmony import */ var _packages_ui_core_shared_src_lib_tasks_task_size_select_task_size_select_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(26954);
/* harmony import */ var _packages_ui_core_shared_src_lib_tasks_task_status_select_task_status_select_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(25448);
/* harmony import */ var _packages_ui_core_shared_src_lib_tasks_task_number_task_number_field_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(45997);
























function MyTaskDialogComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "div", 9)(1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(2, "ngx-task-number-field", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("formControl", ctx_r1.form.get("number"))("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(3, 3, "TASKS_PAGE.TASK_NUMBER"))("projectId", ctx_r1.form.get("projectId").value);
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
  tags: null
};
let MyTaskDialogComponent = /*#__PURE__*/(() => {
  class MyTaskDialogComponent extends _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_2__/* .TranslationBaseComponent */ .K {
    constructor(dialogRef, fb, store, _organizationsStore, organizationProjectsService, translateService, toastrService, errorHandler, employeesService) {
      super(translateService);
      this.dialogRef = dialogRef;
      this.fb = fb;
      this.store = store;
      this._organizationsStore = _organizationsStore;
      this.organizationProjectsService = organizationProjectsService;
      this.translateService = translateService;
      this.toastrService = toastrService;
      this.errorHandler = errorHandler;
      this.employeesService = employeesService;
      this.employees = [];
      this.participants = 'employees';
      this.tags = [];
      this.task = {};
      this.ckConfig = _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_3__/* .richTextCKEditorConfig */ .Z;
      this.form = MyTaskDialogComponent.buildForm(this.fb);
      this.addNewProject = name => {
        this.organizationId = this.store.selectedOrganization.id;
        try {
          this.toastrService.success(this.getTranslation('NOTES.ORGANIZATIONS.EDIT_ORGANIZATIONS_PROJECTS.ADD_PROJECT'), {
            name: name
          });
          return this.organizationProjectsService.create({
            name,
            organizationId: this.organizationId
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
        const organizationId = _this._organizationsStore.selectedOrganization.id;
        const {
          items
        } = yield _this.organizationProjectsService.getAll(
        //['client']
        [], {
          organizationId: organizationId
        });
        if (items) _this.projects = items;
      })();
    }
    loadEmployees() {
      var _this2 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(function* () {
        const organizationId = _this2._organizationsStore.selectedOrganization.id;
        if (!organizationId) {
          return;
        }
        const {
          items
        } = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_7__/* .firstValueFrom */ ._)(_this2.employeesService.getAll(['user'], {
          organization: {
            id: organizationId
          }
        }));
        _this2.employees = items;
      })();
    }
    ngOnInit() {
      var _this3 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(function* () {
        _this3.ckConfig.editorplaceholder = _this3.translateService.instant('FORM.PLACEHOLDERS.DESCRIPTION');
        yield _this3.loadProjects();
        yield _this3.loadEmployees();
        _this3.initializeForm(Object.assign({}, initialTaskValue, _this3.selectedTask || _this3.task));
      })();
    }
    initializeForm({
      title,
      description,
      project,
      status,
      members,
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
      // select members from database of default value
      this.selectedMembers = (members || []).map(member => member.id);
      // employee id of logged in user, if value is null, disable the save button
      this.employeeId = null;
      if (this.store.user) {
        this.employeeId = this.store.user?.employee?.id || null;
      }
      // select default id of logged in user
      if (members === null) {
        this.selectedMembers = [this.employeeId];
      }
      this.form.patchValue({
        title,
        project,
        projectId: project ? project.id : null,
        status,
        priority,
        size,
        estimateDays: duration.days(),
        estimateHours: duration.hours(),
        estimateMinutes: duration.minutes(),
        dueDate: dueDate ? new Date(dueDate) : null,
        description,
        tags,
        members: [this.selectedMembers],
        taskStatus,
        taskSize,
        taskPriority,
        teams: []
      });
      this.tags = this.form.get('tags').value || [];
    }
    onSave() {
      if (this.form.valid) {
        this.form.get('status').setValue(this.form.get('taskStatus').value?.name);
        this.form.get('priority').setValue(this.form.get('taskPriority').value?.name);
        this.form.get('size').setValue(this.form.get('taskSize').value?.name);
        this.form.get('members').setValue((this.selectedMembers || []).map(id => this.employees.find(e => e.id === id)).filter(e => !!e));
        this.dialogRef.close(this.form.value);
      }
    }
    selectedTagsHandler(currentSelection) {
      this.form.patchValue({
        tags: currentSelection
      });
    }
    selectedProject(project) {
      this.form.patchValue({
        project
      });
    }
    static {
      this.ɵfac = function MyTaskDialogComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MyTaskDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_nebular_theme__WEBPACK_IMPORTED_MODULE_8__/* .NbDialogRef */ .ybQ), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .UntypedFormBuilder */ .ze), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_9__/* .Store */ .il), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_9__/* .Store */ .il), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_10__/* .OrganizationProjectsService */ .d), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__/* .TranslateService */ .c$), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_12__/* .ToastrService */ .t), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_13__/* .ErrorHandlingService */ .X), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_14__/* .EmployeesService */ .r));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineComponent"] */ .VBU({
        type: MyTaskDialogComponent,
        selectors: [["ngx-my-task-dialog"]],
        inputs: {
          task: "task"
        },
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
        decls: 89,
        vars: 80,
        consts: [["taskDueDatePicker", ""], [1, "main"], [1, "d-flex", "flex-column"], [1, "cancel"], [1, "fas", "fa-times", 3, "click"], [1, "title"], [1, "body"], [3, "formGroup"], [3, "ngIf"], [1, "row"], [1, "col-sm-6"], [1, "form-group"], [1, "label"], ["formControlName", "projectId", 3, "onChanged", "defaultSelected", "placeholder", "showAllOption", "skipGlobalChange"], ["formControlName", "taskStatus", 3, "placeholder", "projectId"], [1, "col-sm-12"], ["disabled", "true", 3, "allEmployees", "selectedEmployeeIds"], ["formControlName", "title", "nbInput", "", "type", "text", 1, "name-input", 3, "placeholder"], ["formControlName", "taskPriority", 3, "placeholder", "projectId"], ["formControlName", "taskSize", 3, "placeholder", "projectId"], [3, "selectedTagsEvent", "isOrgLevel", "selectedTags"], ["for", "dueDate", 1, "label"], ["formControlName", "dueDate", "fullWidth", "", "id", "dueDate", "nbInput", "", "type", "text", 3, "nbDatepicker", "placeholder"], [1, "estimate-inputs"], ["formControlName", "estimateDays", "nbInput", "", "type", "number", 3, "min", "placeholder"], ["formControlName", "estimateHours", "max", "23", "min", "0", "nbInput", "", "type", "number", 3, "min", "status", "placeholder"], ["formControlName", "estimateMinutes", "max", "59", "min", "0", "nbInput", "", "type", "number", 3, "min", "status", "placeholder"], ["formControlName", "description", 1, "description", 3, "config"], ["nbButton", "", "outline", "", "status", "basic", 1, "mr-3", 3, "click"], ["nbButton", "", "status", "success", 3, "click", "disabled"], ["formControlName", "number", 3, "formControl", "placeholder", "projectId"]],
        template: function MyTaskDialogComponent_Template(rf, ctx) {
          if (rf & 1) {
            const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetCurrentView"] */ .RV6();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "nb-card", 1)(1, "nb-card-header", 2)(2, "span", 3)(3, "i", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("click", function MyTaskDialogComponent_Template_i_click_3_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx.dialogRef.close());
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(4, "h5", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(6, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(7, "nb-card-body", 6)(8, "form", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(9, MyTaskDialogComponent_ng_template_9_Template, 4, 5, "ng-template", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(10, "div", 9)(11, "div", 10)(12, "div", 11)(13, "label", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(15, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(16, "ga-project-selector", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(17, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("onChanged", function MyTaskDialogComponent_Template_ga_project_selector_onChanged_16_listener($event) {
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
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(25, "div", 9)(26, "div", 15)(27, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(28, "ga-employee-multi-select", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(29, "div", 9)(30, "div", 15)(31, "div", 11)(32, "label", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(33);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(34, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(35, "input", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(36, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(37, "div", 10)(38, "div", 11)(39, "label", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(40);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(41, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(42, "ga-task-priority-select", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(43, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(44, "div", 10)(45, "div", 11)(46, "label", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(47);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(48, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(49, "ga-task-size-select", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(50, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(51, "div", 15)(52, "div", 11)(53, "ga-tags-color-input", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("selectedTagsEvent", function MyTaskDialogComponent_Template_ga_tags_color_input_selectedTagsEvent_53_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx.selectedTagsHandler($event));
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(54, "div", 9)(55, "div", 10)(56, "div", 11)(57, "label", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(58);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(59, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(60, "input", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(61, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(62, "nb-datepicker", null, 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(64, "div", 10)(65, "div", 11)(66, "label", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(67);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(68, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(69, "div", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(70, "input", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(71, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(72, "input", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(73, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(74, "input", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(75, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(76, "div", 9)(77, "div", 15)(78, "label", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(79);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(80, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(81, "ckeditor", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(82, "nb-card-footer")(83, "button", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("click", function MyTaskDialogComponent_Template_button_click_83_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx.dialogRef.close());
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(84);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(85, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(86, "button", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("click", function MyTaskDialogComponent_Template_button_click_86_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx.onSave());
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(87);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(88, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()();
          }
          if (rf & 2) {
            const taskDueDatePicker_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵreference"] */ .sdS(63);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(6, 40, ctx.selectedTask ? "TASKS_PAGE.EDIT_TASKS" : "TASKS_PAGE.ADD_TASKS"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("formGroup", ctx.form);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngIf", !ctx.selectedTask);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(15, 42, "CONTEXT_MENU.PROJECT"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("defaultSelected", false)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(17, 44, "CONTEXT_MENU.PROJECT"))("showAllOption", false)("skipGlobalChange", true);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(22, 46, "TASKS_PAGE.TASKS_STATUS"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(24, 48, "TASKS_PAGE.TASKS_STATUS"))("projectId", ctx.form.get("projectId").value);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("allEmployees", ctx.employees)("selectedEmployeeIds", ctx.selectedMembers);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(34, 50, "TASKS_PAGE.TASKS_TITLE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpropertyInterpolate"] */ .FS9("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(36, 52, "FORM.PLACEHOLDERS.ADD_TITLE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(41, 54, "TASKS_PAGE.TASK_PRIORITY"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(43, 56, "TASKS_PAGE.TASK_PRIORITY"))("projectId", ctx.form.get("projectId").value);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(48, 58, "TASKS_PAGE.TASK_SIZE"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(50, 60, "TASKS_PAGE.TASK_SIZE"))("projectId", ctx.form.get("projectId").value);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("isOrgLevel", true)("selectedTags", ctx.tags);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(59, 62, "TASKS_PAGE.DUE_DATE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpropertyInterpolate"] */ .FS9("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(61, 64, "TASKS_PAGE.DUE_DATE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("nbDatepicker", taskDueDatePicker_r3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(68, 66, "TASKS_PAGE.ESTIMATE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpropertyInterpolate"] */ .FS9("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(71, 68, "TASKS_PAGE.ESTIMATE_DAYS"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("min", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpropertyInterpolate"] */ .FS9("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(73, 70, "TASKS_PAGE.ESTIMATE_HOURS"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("min", 0)("status", ctx.form.get("estimateHours").errors ? "danger" : "basic");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpropertyInterpolate"] */ .FS9("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(75, 72, "TASKS_PAGE.ESTIMATE_MINUTES"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("min", 0)("status", ctx.form.get("estimateMinutes").errors ? "danger" : "basic");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(80, 74, "TASKS_PAGE.TASKS_DESCRIPTION"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("config", ctx.ckConfig);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(85, 76, "BUTTONS.CANCEL"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("disabled", ctx.form.invalid || ctx.employeeId === null);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(88, 78, "BUTTONS.SAVE"), " ");
          }
        },
        dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_8__/* .NbCardComponent */ .SrT, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__/* .NbCardBodyComponent */ .KH5, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__/* .NbCardFooterComponent */ .VDm, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__/* .NbCardHeaderComponent */ .zJv, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__/* .NbButtonComponent */ .YP2, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__/* .NbInputDirective */ .i6h, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__/* .NbDatepickerDirective */ .OA9, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__/* .NbDatepickerComponent */ .k2z, ckeditor4_angular__WEBPACK_IMPORTED_MODULE_15__/* .CKEditorComponent */ .h, _packages_ui_core_shared_src_lib_tags_tags_color_input_tags_color_input_component__WEBPACK_IMPORTED_MODULE_16__/* .TagsColorInputComponent */ .i, _angular_common__WEBPACK_IMPORTED_MODULE_17__/* .NgIf */ .bT, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* ["ɵNgNoValidate"] */ .qT, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .DefaultValueAccessor */ .me, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .NumberValueAccessor */ .Q0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .NgControlStatus */ .BC, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .NgControlStatusGroup */ .cb, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .MinValidator */ .VZ, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .MaxValidator */ .zX, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .FormControlDirective */ .l_, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .FormGroupDirective */ .j4, _angular_forms__WEBPACK_IMPORTED_MODULE_4__/* .FormControlName */ .JD, _packages_ui_core_shared_src_lib_employee_employee_multi_select_employee_multi_select_component__WEBPACK_IMPORTED_MODULE_18__/* .EmployeeSelectComponent */ .O, _packages_ui_core_shared_src_lib_selectors_project_project_project_component__WEBPACK_IMPORTED_MODULE_19__/* .ProjectSelectorComponent */ .a, _packages_ui_core_shared_src_lib_tasks_task_priority_select_task_priority_select_component__WEBPACK_IMPORTED_MODULE_20__/* .TaskPrioritySelectComponent */ .Z, _packages_ui_core_shared_src_lib_tasks_task_size_select_task_size_select_component__WEBPACK_IMPORTED_MODULE_21__/* .TaskSizeSelectComponent */ .O, _packages_ui_core_shared_src_lib_tasks_task_status_select_task_status_select_component__WEBPACK_IMPORTED_MODULE_22__/* .TaskStatusSelectComponent */ .v, _packages_ui_core_shared_src_lib_tasks_task_number_task_number_field_component__WEBPACK_IMPORTED_MODULE_23__/* .TaskNumberFieldComponent */ .C, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__/* .TranslatePipe */ .D9],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   i[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n}\n[dir=ltr]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n[dir=rtl]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--gauzy-text-color-1);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(245, 109, 88, 0.3);\n  border-width: 2px;\n  color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(245, 109, 88, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 16px;\n  letter-spacing: 0em;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(126, 126, 143, 0.3);\n  border-width: 2px;\n  color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(126, 126, 143, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(37, 184, 105, 0.3);\n  border-width: 2px;\n  color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(37, 184, 105, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[disabled][_ngcontent-%COMP%], \n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic.btn-disabled[_ngcontent-%COMP%] {\n  background-color: var(--button-outline-basic-disabled-background-color);\n  border-color: var(--button-outline-basic-disabled-border-color);\n  color: var(--button-outline-basic-disabled-text-color);\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].primary.appearance-filled.status-primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  border: unset;\n  background-color: var(--color-primary-transparent-default);\n  box-shadow: var(--gauzy-shadow) 0, 0, 0, 0.15;\n}\n[dir=ltr]   [_nghost-%COMP%]     input, \n[dir=ltr]   [_nghost-%COMP%]     textarea {\n  text-align: start;\n}\n[dir=rtl]   [_nghost-%COMP%]     input, \n[dir=rtl]   [_nghost-%COMP%]     textarea {\n  text-align: end;\n}\n[_nghost-%COMP%]     input, \n[_nghost-%COMP%]     nb-select.appearance-outline.status-basic .select-button, \n[_nghost-%COMP%]     .ng-select .ng-select-container {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n  height: 42px !important;\n}\n[_nghost-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder, \n[_nghost-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {\n  top: unset !important;\n}\n[_nghost-%COMP%]     label, \n[_nghost-%COMP%]     .label {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  color: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]     textarea {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n}\n[_nghost-%COMP%]     .ng-select .ng-select-container input, \n[_nghost-%COMP%]     nb-tag-list input {\n  background-color: unset !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n}\n\n.body[_ngcontent-%COMP%] {\n  width: 550px;\n}\n\n.description[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  height: 150px;\n}\n\n.name-input[_ngcontent-%COMP%] {\n  min-width: 100%;\n}\n\n.estimate-inputs[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.estimate-inputs[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 30%;\n  padding: 0.4rem !important;\n}\n\n.nb-radio[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n}\n\n.body[_ngcontent-%COMP%] {\n  width: 550px;\n}\n\n.description[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  height: 150px;\n}\n\n.name-input[_ngcontent-%COMP%] {\n  min-width: 100%;\n}\n\n.estimate-inputs[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.estimate-inputs[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 30%;\n  padding: 0.4rem !important;\n}\n\n.nb-radio[_ngcontent-%COMP%] {\n  display: inline-block;\n}"]
      });
    }
  }
  return MyTaskDialogComponent;
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

/***/ 84409:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ first)
/* harmony export */ });
/* harmony import */ var _util_EmptyError__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(25413);
/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72781);
/* harmony import */ var _take__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(64320);
/* harmony import */ var _defaultIfEmpty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13344);
/* harmony import */ var _throwIfEmpty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(42883);
/* harmony import */ var _util_identity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(89685);






function first(predicate, defaultValue) {
  const hasDefaultValue = arguments.length >= 2;
  return source => source.pipe(predicate ? (0,_filter__WEBPACK_IMPORTED_MODULE_0__/* .filter */ .p)((v, i) => predicate(v, i, source)) : _util_identity__WEBPACK_IMPORTED_MODULE_1__/* .identity */ .D, (0,_take__WEBPACK_IMPORTED_MODULE_2__/* .take */ .s)(1), hasDefaultValue ? (0,_defaultIfEmpty__WEBPACK_IMPORTED_MODULE_3__/* .defaultIfEmpty */ .U)(defaultValue) : (0,_throwIfEmpty__WEBPACK_IMPORTED_MODULE_4__/* .throwIfEmpty */ .v)(() => new _util_EmptyError__WEBPACK_IMPORTED_MODULE_5__/* .EmptyError */ .G()));
}
//# sourceMappingURL=first.js.map

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

/***/ })

}]);