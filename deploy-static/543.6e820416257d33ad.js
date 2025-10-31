"use strict";
(self["webpackChunkgauzy"] = self["webpackChunkgauzy"] || []).push([[543],{

/***/ 1720:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ TaskBadgeViewComponent)
/* harmony export */ });
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61250);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26860);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14572);
/* harmony import */ var _pipes_replace_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25963);




let TaskBadgeViewComponent = /*#__PURE__*/(() => {
  class TaskBadgeViewComponent {
    constructor() {
      this._taskBadge = null;
    }
    get taskBadge() {
      return this._taskBadge;
    }
    set taskBadge(value) {
      this._taskBadge = value;
    }
    get textColor() {
      return _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_0__/* .ColorAdapter */ .L.contrast(this.taskBadge.color);
    }
    get backgroundColor() {
      return _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_0__/* .ColorAdapter */ .L.background(this.taskBadge.color);
    }
    get icon() {
      return this.taskBadge.fullIconUrl;
    }
    get name() {
      return this.taskBadge.name;
    }
    get imageFilter() {
      return _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_0__/* .ColorAdapter */ .L.hexToHsl(this.taskBadge.color);
    }
    static {
      this.ɵfac = function TaskBadgeViewComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || TaskBadgeViewComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineComponent"] */ .VBU({
        type: TaskBadgeViewComponent,
        selectors: [["gauzy-task-badge-view"]],
        inputs: {
          taskBadge: "taskBadge"
        },
        standalone: false,
        decls: 7,
        vars: 14,
        consts: [[1, "badge-color"], ["alt", "badge", 1, "badge-img", 3, "src"]],
        template: function TaskBadgeViewComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "div", 0)(1, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(2, "img", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(3, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(5, "replace");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(6, "titlecase");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵstyleProp"] */ .xc7("background", ctx.backgroundColor)("color", ctx.textColor);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵstyleProp"] */ .xc7("filter", ctx.imageFilter);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("src", ctx.icon, _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵsanitizeUrl"] */ .B4B);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(6, 12, _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind3"] */ .brH(5, 8, ctx.name, "-", " ")));
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__/* .TitleCasePipe */ .PV, _pipes_replace_pipe__WEBPACK_IMPORTED_MODULE_3__/* .ReplacePipe */ .J],
        styles: ["[_nghost-%COMP%] {\n  align-self: center;\n}\n[_nghost-%COMP%]   .badge-color[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 4px;\n  width: fit-content;\n  line-height: 1;\n  border-radius: var(--border-radius);\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  gap: 4px;\n  align-items: center;\n  font-weight: 600;\n}\n[_nghost-%COMP%]   .badge-color[_ngcontent-%COMP%]   .badge-img[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 100%;\n}"]
      });
    }
  }
  return TaskBadgeViewComponent;
})();

/***/ }),

/***/ 57972:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   f: () => (/* binding */ TaskStatusesService)
/* harmony export */ });
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64913);
/* harmony import */ var _crud_crud_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7718);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26860);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45715);





let TaskStatusesService = /*#__PURE__*/(() => {
  class TaskStatusesService extends _crud_crud_service__WEBPACK_IMPORTED_MODULE_0__/* .CrudService */ .m {
    static {
      this.API_URL = `${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/task-statuses`;
    }
    constructor(http) {
      super(http, TaskStatusesService.API_URL);
    }
    static {
      this.ɵfac = function TaskStatusesService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || TaskStatusesService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵinject"] */ .KVO(_angular_common_http__WEBPACK_IMPORTED_MODULE_3__/* .HttpClient */ .Qq));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineInjectable"] */ .jDH({
        token: TaskStatusesService,
        factory: TaskStatusesService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return TaskStatusesService;
})();

/***/ }),

/***/ 61250:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ ColorAdapter)
/* harmony export */ });
/* harmony import */ var _kurkle_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35649);

/**
 * A utility class for color operations.
 */
class ColorAdapter {
  /**
   * Converts a hexadecimal color value to RGB string format.
   * @param hex The hexadecimal color value to convert.
   * @returns The RGB string representation of the color.
   */
  static hex2Rgb(hex) {
    hex = this.normalize(hex);
    return (0,_kurkle_color__WEBPACK_IMPORTED_MODULE_0__/* .rgbString */ .p8)({
      r: parseInt(hex.slice(1, 3), 16),
      g: parseInt(hex.slice(3, 5), 16),
      b: parseInt(hex.slice(5, 7), 16),
      a: 1
    });
  }
  /**
   * Normalizes a hexadecimal color value by ensuring it starts with '#'.
   * @param hex The hexadecimal color value to normalize.
   * @returns The normalized hexadecimal color value.
   */
  static normalize(hex) {
    const regex = /^#[0-9A-F]{6}$/i;
    if (regex.test(hex)) {
      return hex;
    } else {
      hex = '#' + hex;
      return regex.test(hex) ? hex : '#000000';
    }
  }
  /**
   * Determines the contrast color for a given background color.
   * @param bgColor The background color to determine the contrast color for.
   * @returns The contrast color (either '#ffffff' or '#000000').
   */
  static contrast(bgColor) {
    let color = new _kurkle_color__WEBPACK_IMPORTED_MODULE_0__/* .Color */ .Q1(bgColor);
    color = color.valid ? color : new _kurkle_color__WEBPACK_IMPORTED_MODULE_0__/* .Color */ .Q1(this.hex2Rgb(bgColor));
    const MIN_THRESHOLD = 128;
    const MAX_THRESHOLD = 186;
    const contrast = color.rgb ? color.rgb.r * 0.299 + color.rgb.g * 0.587 + color.rgb.b * 0.114 : null;
    if (contrast && contrast < MIN_THRESHOLD) {
      return '#ffffff';
    } else if (contrast && contrast > MAX_THRESHOLD) {
      return '#000000';
    }
    return '';
  }
  /**
   * Gets the background color, ensuring it's in a valid format.
   * @param bgColor The background color to validate and return.
   * @returns The valid background color.
   */
  static background(bgColor) {
    const color = new _kurkle_color__WEBPACK_IMPORTED_MODULE_0__/* .Color */ .Q1(bgColor);
    return color.valid ? bgColor : this.normalize(bgColor);
  }
  /**
   * Converts a hexadecimal color value to HSL string format.
   * @param hexColor The hexadecimal color value to convert.
   * @returns The HSL string representation of the color.
   */
  static hexToHsl(hexColor) {
    let color = new _kurkle_color__WEBPACK_IMPORTED_MODULE_0__/* .Color */ .Q1(hexColor);
    color = color.valid ? color : new _kurkle_color__WEBPACK_IMPORTED_MODULE_0__/* .Color */ .Q1(this.hex2Rgb(hexColor));
    return color.hslString();
  }
}

/***/ }),

/***/ 61998:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ TaskParticipantEnum)
/* harmony export */ });
var TaskParticipantEnum = /*#__PURE__*/function (TaskParticipantEnum) {
  TaskParticipantEnum["EMPLOYEES"] = "employees";
  TaskParticipantEnum["TEAMS"] = "teams";
  return TaskParticipantEnum;
}(TaskParticipantEnum || {});

/***/ }),

/***/ 76166:
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

/***/ 77096:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   k: () => (/* binding */ OrganizationProjectModuleService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(88326);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(40868);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64913);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26024);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(56891);
/* harmony import */ var _crud__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7718);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(26860);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(45715);
/* harmony import */ var _notification__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(15480);









let OrganizationProjectModuleService = /*#__PURE__*/(() => {
  class OrganizationProjectModuleService extends _crud__WEBPACK_IMPORTED_MODULE_0__/* .CrudService */ .m {
    static {
      this.API_URL = `${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .API_PREFIX */ .m4}/organization-project-modules`;
    }
    constructor(http, toastrService) {
      super(http, OrganizationProjectModuleService.API_URL);
      this.toastrService = toastrService;
      /**
       * BehaviorSubject to notify components when project modules are updated.
       * This ensures that all components displaying modules stay synchronized.
       */
      this.moduleUpdatedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__/* .BehaviorSubject */ .t(null);
      /**
       * Observable that components can subscribe to for module update notifications.
       */
      this.moduleUpdated$ = this.moduleUpdatedSubject.asObservable();
    }
    /**
     * Notifies subscribers that a module update has occurred.
     */
    notifyModuleUpdated() {
      this.moduleUpdatedSubject.next();
    }
    getAllModulesByProjectId(where, relations = []) {
      return this.http.get(this.API_URL, {
        params: (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_3__/* .toParams */ .SV)({
          relations,
          where
        })
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .catchError */ .W)(error => this.errorHandler(error)));
    }
    /**
     * Find project modules for an employee based on pagination parameters.
     * @param params - The pagination parameters for filtering employee project modules.
     * @returns An Observable that emits the paginated list of employee project modules.
     */
    getEmployeeProjectModules(params) {
      return this.http.get(`${this.API_URL}/employee`, {
        params
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .catchError */ .W)(error => this.errorHandler(error)));
    }
    /**
     * Retrieve project modules associated with a team using pagination parameters.
     * @param params - The pagination parameters for filtering team project modules.
     * @returns An Observable that emits the paginated list of team project modules.
     */
    findTeamProjectModules(params) {
      return this.http.get(`${this.API_URL}/team`, {
        params
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .catchError */ .W)(error => this.errorHandler(error)));
    }
    /**
     * Retrieve project modules associated with a specific employee.
     * @param employeeId - The unique identifier of the employee.
     * @param params - Additional query parameters for filtering.
     * @returns An Observable that emits the paginated list of project modules for the specified employee.
     */
    findByEmployee(employeeId, params) {
      return this.http.get(`${this.API_URL}/employee/${employeeId}`, {
        params
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .catchError */ .W)(error => this.errorHandler(error)));
    }
    /**
     * Find a specific project module by its unique identifier.
     * @param id - The unique identifier of the project module.
     * @param params - Additional query parameters if required.
     * @returns An Observable that emits the found project module.
     */
    findById(id, params) {
      return this.http.get(`${this.API_URL}/${id}`, {
        params
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .catchError */ .W)(error => this.errorHandler(error)));
    }
    errorHandler(error) {
      this.toastrService.danger(error.message, error.message);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__/* .throwError */ .$)(error.message);
    }
    static {
      this.ɵfac = function OrganizationProjectModuleService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || OrganizationProjectModuleService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵinject"] */ .KVO(_angular_common_http__WEBPACK_IMPORTED_MODULE_7__/* .HttpClient */ .Qq), _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵinject"] */ .KVO(_notification__WEBPACK_IMPORTED_MODULE_8__/* .ToastrService */ .t));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵdefineInjectable"] */ .jDH({
        token: OrganizationProjectModuleService,
        factory: OrganizationProjectModuleService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return OrganizationProjectModuleService;
})();

/***/ }),

/***/ 92640:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ getEditorNamespace)
/* harmony export */ });
/* unused harmony export debounce */
/**
 * @license Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */
function loadScript(src, opts, cb) {
  var head = document.head || document.getElementsByTagName('head')[0];
  var script = document.createElement('script');
  if (typeof opts === 'function') {
    cb = opts;
    opts = {};
  }
  opts = opts || {};
  cb = cb || function () {};
  script.type = opts.type || 'text/javascript';
  script.charset = opts.charset || 'utf8';
  script.async = 'async' in opts ? !!opts.async : true;
  script.src = src;
  if (opts.attrs) {
    setAttributes(script, opts.attrs);
  }
  if (opts.text) {
    script.text = String(opts.text);
  }
  var onend = 'onload' in script ? stdOnEnd : ieOnEnd;
  onend(script, cb);
  if (!script.onload) {
    stdOnEnd(script, cb);
  }
  head.appendChild(script);
}
function setAttributes(script, attrs) {
  for (var attr in attrs) {
    script.setAttribute(attr, attrs[attr]);
  }
}
function stdOnEnd(script, cb) {
  script.onload = function () {
    this.onerror = this.onload = null;
    cb(null, script);
  };
  script.onerror = function () {
    this.onerror = this.onload = null;
    cb(new Error('Failed to load ' + this.src), script);
  };
}
function ieOnEnd(script, cb) {
  script.onreadystatechange = function () {
    if (this.readyState != 'complete' && this.readyState != 'loaded') {
      return;
    }
    this.onreadystatechange = null;
    cb(null, script);
  };
}
var promise;
function getEditorNamespace(editorURL, onNamespaceLoaded) {
  if ('CKEDITOR' in window) {
    return Promise.resolve(CKEDITOR);
  }
  if (typeof editorURL !== 'string' || editorURL.length < 1) {
    return Promise.reject(new TypeError('CKEditor URL must be a non-empty string.'));
  }
  if (!promise) {
    promise = getEditorNamespace.scriptLoader(editorURL).then(function (res) {
      if (onNamespaceLoaded) {
        onNamespaceLoaded(res);
      }
      return res;
    });
  }
  return promise;
}
getEditorNamespace.scriptLoader = function (editorURL) {
  return new Promise(function (scriptResolve, scriptReject) {
    loadScript(editorURL, function (err) {
      promise = undefined;
      if (err) {
        return scriptReject(err);
      } else if (!window.CKEDITOR) {
        return scriptReject(new Error('Script loaded from editorUrl doesn\'t provide CKEDITOR namespace.'));
      }
      scriptResolve(CKEDITOR);
    });
  });
};
function debounce(fn, delay) {
  var context = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var cancel;
  return function () {
    clearTimeout(cancel);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    cancel = setTimeout(fn.bind.apply(fn, [context].concat(args)), delay);
  };
}


/***/ }),

/***/ 98106:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ richTextCKEditorConfig),
/* harmony export */   a: () => (/* binding */ ckEditorConfig)
/* harmony export */ });
const ckEditorConfig = {
  width: '100%',
  height: '320',
  toolbar: [{
    name: 'document',
    items: ['Source', '-', 'Save', 'NewPage', 'ExportPdf', 'Preview', 'Print', '-', 'Templates']
  }, {
    name: 'clipboard',
    items: ['Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', '-', 'Undo', 'Redo']
  }, {
    name: 'editing',
    items: ['Find', 'Replace', '-', 'SelectAll', '-', 'Scayt']
  }, {
    name: 'forms',
    items: ['Form', 'Checkbox', 'Radio', 'TextField', 'Textarea', 'Select', 'Button', 'ImageButton', 'HiddenField']
  }, '/', {
    name: 'basicstyles',
    items: ['Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript', '-', 'CopyFormatting', 'RemoveFormat']
  }],
  toolbarCanCollapse: true
};
const richTextCKEditorConfig = {
  width: '100%',
  height: '320',
  toolbar: [{
    name: 'document',
    items: ['Source']
  }, {
    name: 'basicstyles',
    items: ['Bold', 'Italic', 'Underline']
  }, {
    name: 'paragraph',
    items: ['JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock', 'NumberedList', 'BulletedList', 'Checkbox', 'Blockquote', 'Code']
  }, {
    name: 'styles',
    items: ['Format', 'Link', 'Heading']
  }],
  toolbarCanCollapse: true,
  format_tags: 'p;h1;h2;pre'
};

/***/ })

}]);