"use strict";
(self["webpackChunkgauzy"] = self["webpackChunkgauzy"] || []).push([[6171],{

/***/ 724:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Y: () => (/* binding */ VideoUiRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(908);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(60559);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20433);
/* harmony import */ var _pages_video_page_video_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(72242);
/* harmony import */ var _pages_video_detail_page_video_detail_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(92278);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(26860);







const routes = [{
  path: '',
  data: {
    title: 'Videos',
    selectors: {
      date: true,
      employee: true,
      project: false,
      team: false
    },
    datePicker: {
      unitOfTime: 'day',
      isLockDatePicker: true,
      isSaveDatePicker: true,
      isSingleDatePicker: true,
      isDisableFutureDate: true
    },
    reuseRoute: false
  },
  resolve: {
    dates: _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_0__/* .DateRangePickerResolver */ .Q,
    bookmarkParams: _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_1__/* .BookmarkQueryParamsResolver */ .x
  },
  component: _pages_video_page_video_page_component__WEBPACK_IMPORTED_MODULE_2__/* .VideoPageComponent */ .Q
}, {
  path: ':id',
  data: {
    title: 'Video',
    selectors: {
      date: false,
      employee: false,
      project: false,
      team: false
    },
    datePicker: {
      unitOfTime: 'day',
      isLockDatePicker: true,
      isSaveDatePicker: true,
      isSingleDatePicker: true,
      isDisableFutureDate: true
    },
    reuseRoute: true
  },
  component: _pages_video_detail_page_video_detail_page_component__WEBPACK_IMPORTED_MODULE_3__/* .VideoDetailPageComponent */ .n
}];
let VideoUiRoutingModule = /*#__PURE__*/(() => {
  class VideoUiRoutingModule {
    static {
      this.ɵfac = function VideoUiRoutingModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || VideoUiRoutingModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdefineNgModule"] */ .$C({
        type: VideoUiRoutingModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__/* .RouterModule */ .iI.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_5__/* .RouterModule */ .iI]
      });
    }
  }
  return VideoUiRoutingModule;
})();

/***/ }),

/***/ 951:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   s: () => (/* binding */ take)
/* harmony export */ });
/* harmony import */ var _observable_empty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(89037);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31204);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(84230);



function take(count) {
  return count <= 0 ? () => _observable_empty__WEBPACK_IMPORTED_MODULE_0__/* .EMPTY */ .w : (0,_util_lift__WEBPACK_IMPORTED_MODULE_1__/* .operate */ .N)((source, subscriber) => {
    let seen = 0;
    source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__/* .createOperatorSubscriber */ ._)(subscriber, value => {
      if (++seen <= count) {
        subscriber.next(value);
        if (count <= seen) {
          subscriber.complete();
        }
      }
    }));
  });
}
//# sourceMappingURL=take.js.map

/***/ }),

/***/ 3391:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P: () => (/* binding */ ObjectUnsubscribedError)
/* harmony export */ });
/* harmony import */ var _createErrorClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17915);

const ObjectUnsubscribedError = (0,_createErrorClass__WEBPACK_IMPORTED_MODULE_0__/* .createErrorClass */ .L)(_super => function ObjectUnsubscribedErrorImpl() {
  _super(this);
  this.name = 'ObjectUnsubscribedError';
  this.message = 'object unsubscribed';
});
//# sourceMappingURL=ObjectUnsubscribedError.js.map

/***/ }),

/***/ 5424:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Q: () => (/* binding */ takeUntil)
/* harmony export */ });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15351);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(42483);
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7225);
/* harmony import */ var _util_noop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80850);




function takeUntil(notifier) {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__/* .operate */ .N)((source, subscriber) => {
    (0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_1__/* .innerFrom */ .Tg)(notifier).subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__/* .createOperatorSubscriber */ ._)(subscriber, () => subscriber.complete(), _util_noop__WEBPACK_IMPORTED_MODULE_3__/* .noop */ .l));
    !subscriber.closed && source.subscribe(subscriber);
  });
}
//# sourceMappingURL=takeUntil.js.map

/***/ }),

/***/ 6026:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: () => (/* binding */ createObject)
/* harmony export */ });
function createObject(keys, values) {
  return keys.reduce((result, key, i) => (result[key] = values[i], result), {});
}
//# sourceMappingURL=createObject.js.map

/***/ }),

/***/ 8563:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ tap)
/* harmony export */ });
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83297);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31204);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(84230);
/* harmony import */ var _util_identity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(74171);




function tap(observerOrNext, error, complete) {
  const tapObserver = (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .T)(observerOrNext) || error || complete ? {
    next: observerOrNext,
    error,
    complete
  } : observerOrNext;
  return tapObserver ? (0,_util_lift__WEBPACK_IMPORTED_MODULE_1__/* .operate */ .N)((source, subscriber) => {
    var _a;
    (_a = tapObserver.subscribe) === null || _a === void 0 ? void 0 : _a.call(tapObserver);
    let isUnsub = true;
    source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__/* .createOperatorSubscriber */ ._)(subscriber, value => {
      var _a;
      (_a = tapObserver.next) === null || _a === void 0 ? void 0 : _a.call(tapObserver, value);
      subscriber.next(value);
    }, () => {
      var _a;
      isUnsub = false;
      (_a = tapObserver.complete) === null || _a === void 0 ? void 0 : _a.call(tapObserver);
      subscriber.complete();
    }, err => {
      var _a;
      isUnsub = false;
      (_a = tapObserver.error) === null || _a === void 0 ? void 0 : _a.call(tapObserver, err);
      subscriber.error(err);
    }, () => {
      var _a, _b;
      if (isUnsub) {
        (_a = tapObserver.unsubscribe) === null || _a === void 0 ? void 0 : _a.call(tapObserver);
      }
      (_b = tapObserver.finalize) === null || _b === void 0 ? void 0 : _b.call(tapObserver);
    }));
  }) : _util_identity__WEBPACK_IMPORTED_MODULE_3__/* .identity */ .D;
}
//# sourceMappingURL=tap.js.map

/***/ }),

/***/ 8863:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ VideoListComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(66174);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(72368);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26860);
/* harmony import */ var _state_video_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(51075);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14572);
/* harmony import */ var _shared_ui_video_item_skeleton_video_item_skeleton_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(50174);
/* harmony import */ var _shared_ui_video_item_video_item_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52598);







const VideoListComponent_For_2_Defer_2_DepsFn = () => [_angular_common__WEBPACK_IMPORTED_MODULE_0__/* .NgClass */ .YU, _shared_ui_video_item_video_item_component__WEBPACK_IMPORTED_MODULE_1__/* .VideoItemComponent */ .i];
const _c0 = a0 => ({
  vertical: a0
});
const _forTrack0 = ($index, $item) => $item.id;
function VideoListComponent_For_2_Defer_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ .nrm(1, "plug-video-item", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const video_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .XpG().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpureFunction1"] */ .eq3(2, _c0, ctx_r1.vertical))("video", video_r1);
  }
}
function VideoListComponent_For_2_DeferPlaceholder_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ .nrm(0, "plug-video-item-skeleton", 4);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpureFunction1"] */ .eq3(1, _c0, ctx_r1.vertical));
  }
}
function VideoListComponent_For_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .DNE(0, VideoListComponent_For_2_Defer_0_Template, 2, 4)(1, VideoListComponent_For_2_DeferPlaceholder_1_Template, 1, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefer"] */ .nv$(2, 0, VideoListComponent_For_2_Defer_2_DepsFn, null, 1, null, null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdeferEnableTimerScheduling"] */ .T$4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdeferOnViewport"] */ .qhs(0, -1);
  }
}
let VideoListComponent = /*#__PURE__*/(() => {
  class VideoListComponent {
    constructor(videoQuery) {
      this.videoQuery = videoQuery;
      this.vertical = false;
    }
    get videos$() {
      return this.videoQuery.videos$;
    }
    get isAvailable$() {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__/* .combineLatest */ .z)([this.videoQuery.isAvailable$, this.isLoading$]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__/* .map */ .T)(([isAvailable, isLoading]) => isAvailable && !isLoading));
    }
    get isLoading$() {
      return this.videoQuery.isLoading$;
    }
    static {
      this.ɵfac = function VideoListComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || VideoListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .rXU(_state_video_query__WEBPACK_IMPORTED_MODULE_5__/* .VideoQuery */ .g));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineComponent"] */ .VBU({
        type: VideoListComponent,
        selectors: [["plug-video-list"]],
        inputs: {
          vertical: "vertical"
        },
        standalone: false,
        decls: 4,
        vars: 5,
        consts: [[500], [1, "video-container", 3, "ngClass"], [1, "video-item"], [3, "ngClass", "video"], [3, "ngClass"]],
        template: function VideoListComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .j41(0, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrepeaterCreate"] */ .Z7z(1, VideoListComponent_For_2_Template, 4, 0, null, null, _forTrack0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipe"] */ .nI1(3, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .k0s();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Y8G("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpureFunction1"] */ .eq3(3, _c0, ctx.vertical));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵrepeater"] */ .Dyx(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpipeBind1"] */ .bMT(3, 1, ctx.videos$));
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__/* .NgClass */ .YU, _shared_ui_video_item_skeleton_video_item_skeleton_component__WEBPACK_IMPORTED_MODULE_6__/* .VideoItemSkeletonComponent */ .V, _angular_common__WEBPACK_IMPORTED_MODULE_0__/* .AsyncPipe */ .Jj],
        styles: [".video-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 16px;\n  width: 100%;\n}\n.video-container.vertical[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  min-width: 400px;\n}\n\n.video-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n.video-item[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n}\n.video-item[_ngcontent-%COMP%]   plug-video-item[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n}\n\n@media (max-width: 768px) {\n  .video-container[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .video-item[_ngcontent-%COMP%] {\n    padding: 8px;\n  }\n}"],
        changeDetection: 0
      });
    }
  }
  return VideoListComponent;
})();

/***/ }),

/***/ 9458:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   V: () => (/* binding */ CamshotStore)
/* harmony export */ });
/* unused harmony export createInitialState */
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(84562);
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71732);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26860);



function createInitialState() {
  return {
    camshots: [],
    camshot: null,
    count: 0,
    deleting: false,
    restoring: false,
    downloading: false
  };
}
let CamshotStore = /*#__PURE__*/(() => {
  let CamshotStore = class CamshotStore extends _datorama_akita__WEBPACK_IMPORTED_MODULE_0__/* .Store */ .il {
    constructor() {
      super(createInitialState());
    }
    static {
      this.ɵfac = function CamshotStore_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || CamshotStore)();
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineInjectable"] */ .jDH({
        token: CamshotStore,
        factory: CamshotStore.ɵfac,
        providedIn: 'root'
      });
    }
  };
  CamshotStore = (0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__decorate */ .Cg)([(0,_datorama_akita__WEBPACK_IMPORTED_MODULE_0__/* .StoreConfig */ .g7)({
    name: 'camshots'
  }), (0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__metadata */ .Sn)("design:paramtypes", [])], CamshotStore);
  return CamshotStore;
})();


/***/ }),

/***/ 9780:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ distinctUntilChanged)
/* harmony export */ });
/* harmony import */ var _util_identity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74171);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31204);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(84230);



function distinctUntilChanged(comparator, keySelector = _util_identity__WEBPACK_IMPORTED_MODULE_0__/* .identity */ .D) {
  comparator = comparator !== null && comparator !== void 0 ? comparator : defaultCompare;
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_1__/* .operate */ .N)((source, subscriber) => {
    let previousKey;
    let first = true;
    source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__/* .createOperatorSubscriber */ ._)(subscriber, value => {
      const currentKey = keySelector(value);
      if (first || !comparator(previousKey, currentKey)) {
        first = false;
        previousKey = currentKey;
        subscriber.next(value);
      }
    }));
  });
}
function defaultCompare(a, b) {
  return a === b;
}
//# sourceMappingURL=distinctUntilChanged.js.map

/***/ }),

/***/ 10994:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   En: () => (/* binding */ Actions),
/* harmony export */   Nv: () => (/* binding */ provideEffectsManager),
/* harmony export */   SI: () => (/* binding */ provideEffects)
/* harmony export */ });
/* unused harmony exports EffectFn, EffectsDirective, EffectsNgModule, provideDirectiveEffects */
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26860);
/* harmony import */ var _ngneat_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85308);





let Actions = /*#__PURE__*/(() => {
  class Actions extends _ngneat_effects__WEBPACK_IMPORTED_MODULE_0__/* .Actions */ .En {}
  Actions.ɵfac = /* @__PURE__ */(() => {
    let ɵActions_BaseFactory;
    return function Actions_Factory(__ngFactoryType__) {
      return (ɵActions_BaseFactory || (ɵActions_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetInheritedFactory"] */ .xGo(Actions)))(__ngFactoryType__ || Actions);
    };
  })();
  Actions.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineInjectable"] */ .jDH({
    token: Actions,
    factory: Actions.ɵfac,
    providedIn: 'root'
  });
  return Actions;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
const EFFECTS_PROVIDERS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__/* .InjectionToken */ .nKC('@ngneat/effects Effects providers');
const EFFECTS_MANAGER = new _angular_core__WEBPACK_IMPORTED_MODULE_1__/* .InjectionToken */ .nKC('@ngneat/effects Effects Manager');
function getEffectPropsMap(instance) {
  return Object.entries(instance).reduce((map, [key, value]) => {
    if ((0,_ngneat_effects__WEBPACK_IMPORTED_MODULE_0__/* .isEffect */ .yw)(value)) {
      map.set(key, value);
    }
    return map;
  }, new Map());
}
const providedEffectsSourceInstances = new Map();
function getProvidedEffect(sourceInstance, effectToken) {
  return providedEffectsSourceInstances.get(sourceInstance)?.get(effectToken)?.effect;
}
function generateProvidedEffectToken(provider, effectKey) {
  return `${provider.name} - ${effectKey}`;
}
function isEffectProvided(sourceInstance, effectToken) {
  return !!providedEffectsSourceInstances.get(sourceInstance)?.has(effectToken);
}
function provideEffect(sourceInstance, effectToken, effect) {
  const providedEffectsMapBySourceInstance = providedEffectsSourceInstances.get(sourceInstance);
  if (providedEffectsMapBySourceInstance) {
    providedEffectsMapBySourceInstance.set(effectToken, {
      sources: 1,
      effect
    });
  } else {
    providedEffectsSourceInstances.set(sourceInstance, new Map([[effectToken, {
      sources: 1,
      effect
    }]]));
  }
}
function increaseProvidedEffectSources(sourceInstance, effectToken) {
  const providedEffectsMapBySourceInstance = providedEffectsSourceInstances.get(sourceInstance);
  const providedEffect = providedEffectsMapBySourceInstance?.get(effectToken);
  if (providedEffectsMapBySourceInstance && providedEffect) {
    const sources = providedEffect.sources ?? 0;
    providedEffectsMapBySourceInstance.set(effectToken, {
      ...providedEffect,
      sources: sources + 1
    });
  }
}
function decreaseProvidedEffectSources(sourceInstance, effectToken) {
  const providedEffectsMapBySourceInstance = providedEffectsSourceInstances.get(sourceInstance);
  const providedEffect = providedEffectsMapBySourceInstance?.get(effectToken);
  if (providedEffectsMapBySourceInstance && providedEffect) {
    const sources = providedEffect.sources ?? 0;
    if (sources === 0 || sources - 1 === 0) {
      providedEffectsMapBySourceInstance.delete(effectToken);
      if (!providedEffectsMapBySourceInstance.size) {
        providedEffectsSourceInstances.delete(sourceInstance);
      }
    } else {
      providedEffectsMapBySourceInstance.set(effectToken, {
        ...providedEffect,
        sources: sources - 1
      });
    }
  }
}

/**
 * Can be called at the root and feature levels.
 */
function provideEffects(...providers) {
  return (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__/* .makeEnvironmentProviders */ .EmA)([...providers, {
    provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__/* .ENVIRONMENT_INITIALIZER */ .Z63,
    multi: true,
    useValue: () => {
      const manager = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__/* .inject */ .WQX)(EFFECTS_MANAGER, {
        optional: true
      });
      if (!manager) {
        throw new TypeError("Effects manager wasn't found. Have you forgotten to provide it? Please call `provideEffectsManager` in the root providers.");
      }
      registerEffectFromProviders(providers, manager);
    }
  }]);
}
function registerEffectFromProviders(providers, manager) {
  new Set(providers).forEach(provider => {
    const instance = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__/* .inject */ .WQX)(provider);
    const effects = [];
    getEffectPropsMap(instance).forEach((effect, key) => {
      const sourceInstance = Object.getPrototypeOf(instance);
      const token = generateProvidedEffectToken(provider, key);
      if (isEffectProvided(sourceInstance, token)) {
        increaseProvidedEffectSources(sourceInstance, token);
      } else {
        provideEffect(sourceInstance, token, effect);
        effects.push(effect);
      }
    });
    manager.registerEffects(effects);
  });
}

/**
 * @deprecated Please consider using `provideEffectsManager` and `provideEffects` functions instead. This module will be
 *   deleted in the future.
 */
let EffectsNgModule = /*#__PURE__*/(/* unused pure expression or super */ null && ((() => {
  class EffectsNgModule {
    constructor(manager, providers) {
      registerEffectFromProviders(flatten(providers), manager);
    }
    static forRoot(providers, config) {
      return {
        ngModule: EffectsNgModule,
        providers: [{
          provide: Actions,
          useValue: config?.customActionsStream || actions
        }, {
          provide: EFFECTS_MANAGER,
          useFactory: () => initEffects(config)
        }, ...providers, {
          provide: EFFECTS_PROVIDERS,
          multi: true,
          useValue: providers
        }]
      };
    }
    static forFeature(providers) {
      return EffectsNgModule.forRoot(providers);
    }
  }
  EffectsNgModule.ɵfac = function EffectsNgModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || EffectsNgModule)(i0.ɵɵinject(EFFECTS_MANAGER), i0.ɵɵinject(EFFECTS_PROVIDERS));
  };
  EffectsNgModule.ɵmod = /* @__PURE__ */i0.ɵɵdefineNgModule({
    type: EffectsNgModule
  });
  EffectsNgModule.ɵinj = /* @__PURE__ */i0.ɵɵdefineInjector({});
  return EffectsNgModule;
})()));
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
function flatten(arr) {
  return arr.reduce((acc, cur) => acc.concat(Array.isArray(cur) ? flatten(cur) : cur), []);
}
let EffectFn = /*#__PURE__*/(/* unused pure expression or super */ null && ((() => {
  class EffectFn {
    constructor() {
      this.destroy = new Subject();
      this.destroy$ = this.destroy.asObservable();
    }
    createEffectFn(factoryFn) {
      return createEffectFn(factoryFn)(this.destroy$);
    }
    ngOnDestroy() {
      this.destroy.next(true);
    }
  }
  EffectFn.ɵfac = function EffectFn_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || EffectFn)();
  };
  EffectFn.ɵprov = /* @__PURE__ */i0.ɵɵdefineInjectable({
    token: EffectFn,
    factory: EffectFn.ɵfac
  });
  return EffectFn;
})()));
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Must be called at the root level.
 */
function provideEffectsManager(config) {
  const {
    dispatchByDefault = false,
    customActionsStream = _ngneat_effects__WEBPACK_IMPORTED_MODULE_0__/* .actions */ .o1
  } = config || {};
  const manager = (0,_ngneat_effects__WEBPACK_IMPORTED_MODULE_0__/* .initEffects */ .ni)({
    dispatchByDefault,
    customActionsStream
  });
  return (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__/* .makeEnvironmentProviders */ .EmA)([{
    provide: Actions,
    useValue: customActionsStream
  }, {
    provide: EFFECTS_MANAGER,
    useValue: manager
  }]);
}
const EFFECTS_DIRECTIVE_PROVIDERS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__/* .InjectionToken */ .nKC('@ngneat/effects Effects directive providers');
function provideDirectiveEffects(...providers) {
  return [...providers, {
    provide: EFFECTS_DIRECTIVE_PROVIDERS,
    useValue: providers
  }];
}
let EffectsDirective = /*#__PURE__*/(/* unused pure expression or super */ null && ((() => {
  class EffectsDirective {
    constructor() {
      this.providers = inject(EFFECTS_DIRECTIVE_PROVIDERS, {
        self: true,
        optional: true
      });
      this.manager = inject(EFFECTS_MANAGER, {
        optional: true
      });
      this.sourceInstancesWithProvidersEffectsTokens = new Map();
      if (!this.manager) {
        throw new TypeError("Effects manager wasn't found. Have you forgotten to provide it? Please call `provideEffectsManager` in the root providers.");
      }
      if (!this.providers) {
        throw new TypeError('No one effect was provided on a directive level. Please use `EffectsDirective` along with `provideDirectiveEffects`');
      }
      const effects = [];
      new Set(this.providers).forEach(provider => {
        const instance = inject(provider, {
          self: true
        });
        getEffectPropsMap(instance).forEach((effect, key) => {
          const sourceInstance = Object.getPrototypeOf(instance);
          const token = generateProvidedEffectToken(provider, key);
          const tokens = this.sourceInstancesWithProvidersEffectsTokens.has(sourceInstance) ? this.sourceInstancesWithProvidersEffectsTokens.get(sourceInstance) : [];
          tokens.push(token);
          this.sourceInstancesWithProvidersEffectsTokens.set(Object.getPrototypeOf(instance), tokens);
          if (isEffectProvided(sourceInstance, token)) {
            increaseProvidedEffectSources(sourceInstance, token);
          } else {
            provideEffect(sourceInstance, token, effect);
            effects.push(effect);
          }
        });
      });
      if (effects.length) {
        this.manager?.registerEffects(effects);
      }
    }
    ngOnDestroy() {
      this.unregisterEffect();
    }
    unregisterEffect() {
      const effects = [...this.sourceInstancesWithProvidersEffectsTokens.entries()].reduce((effects, [sourceInstance, tokens]) => {
        for (const token of tokens) {
          const effect = getProvidedEffect(sourceInstance, token);
          decreaseProvidedEffectSources(sourceInstance, token);
          if (effect && !isEffectProvided(sourceInstance, token)) {
            effects.push(effect);
          }
        }
        return effects;
      }, []);
      this.manager?.removeEffects(effects);
    }
  }
  EffectsDirective.ɵfac = function EffectsDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || EffectsDirective)();
  };
  EffectsDirective.ɵdir = /* @__PURE__ */i0.ɵɵdefineDirective({
    type: EffectsDirective
  });
  return EffectsDirective;
})()));
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=ngneat-effects-ng.mjs.map

/***/ }),

/***/ 11383:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   y: () => (/* binding */ SoundshotQuery)
/* harmony export */ });
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71732);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26860);
/* harmony import */ var _soundshot_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(72138);




let SoundshotQuery = /*#__PURE__*/(() => {
  class SoundshotQuery extends _datorama_akita__WEBPACK_IMPORTED_MODULE_0__/* .Query */ .XK {
    constructor(soundshotStore) {
      super(soundshotStore);
      this.soundshotStore = soundshotStore;
      this.soundshots$ = this.select(state => state.soundshots);
      this.soundshot$ = this.select(state => state.soundshot);
      this.count$ = this.select(state => state.count);
      this.isLoading$ = this.selectLoading();
      this.isAvailable$ = this.select(state => state.count > 0);
      this.deleting$ = this.select(state => state.deleting);
      this.restoring$ = this.select(state => state.restoring);
      this.downloading$ = this.select(state => state.downloading);
    }
    get soundshot() {
      return this.getValue().soundshot;
    }
    get soundshots() {
      return this.getValue().soundshots || [];
    }
    get count() {
      return this.getValue().count || 0;
    }
    static {
      this.ɵfac = function SoundshotQuery_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || SoundshotQuery)(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵinject"] */ .KVO(_soundshot_store__WEBPACK_IMPORTED_MODULE_2__/* .SoundshotStore */ .B));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineInjectable"] */ .jDH({
        token: SoundshotQuery,
        factory: SoundshotQuery.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return SoundshotQuery;
})();

/***/ }),

/***/ 13112:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G: () => (/* binding */ EmptyError)
/* harmony export */ });
/* harmony import */ var _createErrorClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17915);

const EmptyError = (0,_createErrorClass__WEBPACK_IMPORTED_MODULE_0__/* .createErrorClass */ .L)(_super => function EmptyErrorImpl() {
  _super(this);
  this.name = 'EmptyError';
  this.message = 'no elements in sequence';
});
//# sourceMappingURL=EmptyError.js.map

/***/ }),

/***/ 15325:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ VideoActions)
/* harmony export */ });
/* harmony import */ var _ngneat_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85308);

class VideoActions {
  static {
    this.fetchVideos = (0,_ngneat_effects__WEBPACK_IMPORTED_MODULE_0__/* .createAction */ .VP)('[Videos] Fetch Videos', params => ({
      params
    }));
  }
  static {
    this.fetchOneVideo = (0,_ngneat_effects__WEBPACK_IMPORTED_MODULE_0__/* .createAction */ .VP)('[Videos] Fetch One Video', (id, params) => ({
      id,
      params
    }));
  }
  static {
    this.updateVideo = (0,_ngneat_effects__WEBPACK_IMPORTED_MODULE_0__/* .createAction */ .VP)('[Videos] Update Video', (id, video) => ({
      id,
      video
    }));
  }
  static {
    this.deleteVideo = (0,_ngneat_effects__WEBPACK_IMPORTED_MODULE_0__/* .createAction */ .VP)('[Videos] Delete Video', id => ({
      id
    }));
  }
  static {
    this.shareVideos = (0,_ngneat_effects__WEBPACK_IMPORTED_MODULE_0__/* .createAction */ .VP)('[Videos] Share Videos', payload => ({
      payload
    }));
  }
  static {
    this.addToQueue = (0,_ngneat_effects__WEBPACK_IMPORTED_MODULE_0__/* .createAction */ .VP)('[Videos] Add to Queue', urls => ({
      urls
    }));
  }
  static {
    this.removeFromQueue = (0,_ngneat_effects__WEBPACK_IMPORTED_MODULE_0__/* .createAction */ .VP)('[Videos] Remove from Queue', url => ({
      url
    }));
  }
  static {
    this.retryDownload = (0,_ngneat_effects__WEBPACK_IMPORTED_MODULE_0__/* .createAction */ .VP)('[Videos] Retry Download', url => ({
      url
    }));
  }
  static {
    this.fetchVideosAndExclude = (0,_ngneat_effects__WEBPACK_IMPORTED_MODULE_0__/* .createAction */ .VP)('[Videos] Fetch Videos and Exclude', (id, params) => ({
      id,
      params
    }));
  }
}

/***/ }),

/***/ 16519:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ withLatestFrom)
/* harmony export */ });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31204);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(84230);
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(50388);
/* harmony import */ var _util_identity__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(74171);
/* harmony import */ var _util_noop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(62029);
/* harmony import */ var _util_args__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85196);






function withLatestFrom(...inputs) {
  const project = (0,_util_args__WEBPACK_IMPORTED_MODULE_0__/* .popResultSelector */ .ms)(inputs);
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_1__/* .operate */ .N)((source, subscriber) => {
    const len = inputs.length;
    const otherValues = new Array(len);
    let hasValue = inputs.map(() => false);
    let ready = false;
    for (let i = 0; i < len; i++) {
      (0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_2__/* .innerFrom */ .Tg)(inputs[i]).subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_3__/* .createOperatorSubscriber */ ._)(subscriber, value => {
        otherValues[i] = value;
        if (!ready && !hasValue[i]) {
          hasValue[i] = true;
          (ready = hasValue.every(_util_identity__WEBPACK_IMPORTED_MODULE_4__/* .identity */ .D)) && (hasValue = null);
        }
      }, _util_noop__WEBPACK_IMPORTED_MODULE_5__/* .noop */ .l));
    }
    source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_3__/* .createOperatorSubscriber */ ._)(subscriber, value => {
      if (ready) {
        const values = [value, ...otherValues];
        subscriber.next(project ? project(...values) : values);
      }
    }));
  });
}
//# sourceMappingURL=withLatestFrom.js.map

/***/ }),

/***/ 17108:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   b: () => (/* binding */ CompletedState)
/* harmony export */ });
/* harmony import */ var _utilities_extract_filename_from_url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28494);

class CompletedState {
  handle(options, contextService) {
    contextService.toastrService.success('PLUGIN.VIDEO.DOWNLOAD_COMPLETED_FOR', {
      url: (0,_utilities_extract_filename_from_url__WEBPACK_IMPORTED_MODULE_0__/* .extractFilenameFromUrl */ .K)(options.url)
    }, 'PLUGIN.VIDEO.DOWNLOAD');
    contextService.remove(options.url);
  }
}

/***/ }),

/***/ 17730:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   U: () => (/* binding */ VideoMetadataComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56383);
/* harmony import */ var _ui_core_shared_src_lib_smart_data_layout_no_data_message_no_data_message_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(95959);
/* harmony import */ var _ui_core_shared_src_lib_components_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(32386);
/* harmony import */ var _video_player_video_player_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(56742);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(14572);
/* harmony import */ var _ui_core_shared_src_lib_pipes_duration_format_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(33867);
/* harmony import */ var _ui_core_shared_src_lib_pipes_file_size_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(31571);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(19223);










function VideoMetadataComponent_Conditional_1_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "plug-video-player", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("src", ctx_r1.video.fullUrl)("alt", ctx_r1.video.title + "Video Thumbnail");
  }
}
function VideoMetadataComponent_Conditional_1_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 16)(1, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(4, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("href", ctx_r1.video.fullUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵsanitizeUrl"] */ .B4B);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(3, 2, "PLUGIN.VIDEO.VIEW_FULL"), " ");
  }
}
function VideoMetadataComponent_Conditional_1_Conditional_61_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 18)(1, "div", 11)(2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(5, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(6, "ngx-avatar", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(4, 5, "PLUGIN.VIDEO.UPLOADED_BY"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("src", ctx_r1.video.uploadedBy == null ? null : ctx_r1.video.uploadedBy.user.imageUrl)("name", ctx_r1.video.uploadedBy == null ? null : ctx_r1.video.uploadedBy.fullName)("id", ctx_r1.video.uploadedBy == null ? null : ctx_r1.video.uploadedBy.id)("employee", ctx_r1.video.uploadedBy);
  }
}
function VideoMetadataComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 1)(1, "header", 3)(2, "div", 4)(3, "span", 5)(4, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function VideoMetadataComponent_Conditional_1_Template_i_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.close());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(5, "h2", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(7, VideoMetadataComponent_Conditional_1_Conditional_7_Template, 2, 2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(8, "div", 9)(9, "div", 10)(10, "div", 11)(11, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(14, "div", 12)(15, "div", 13)(16, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(19, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(21, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(22, "div", 13)(23, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(25, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(26, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(28, "durationFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(29, "div", 13)(30, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(32, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(33, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(35, "fileSize");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(36, VideoMetadataComponent_Conditional_1_Conditional_36_Template, 5, 4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(37, "div", 17)(38, "div", 11)(39, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(41, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(42, "div", 12)(43, "div", 13)(44, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(46, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(47, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(49, "div", 13)(50, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(52, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(53, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(55, "div", 13)(56, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(58, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(59, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(61, VideoMetadataComponent_Conditional_1_Conditional_61_Template, 7, 7, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(62, "nb-card-footer", 19)(63, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function VideoMetadataComponent_Conditional_1_Template_button_click_63_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.close());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(65, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(ctx_r1.video.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵconditional"] */ .vxM(ctx_r1.video.fullUrl ? 7 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(13, 19, "PLUGIN.VIDEO.CORE_INFO"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(18, 21, "PLUGIN.VIDEO.RECORDED"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind2"] */ .i5U(21, 23, ctx_r1.video.recordedAt, "medium"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(25, 26, "PLUGIN.VIDEO.DURATION"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(28, 28, ctx_r1.video.duration));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(32, 30, "PLUGIN.VIDEO.SIZE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(35, 32, ctx_r1.video.size));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵconditional"] */ .vxM(ctx_r1.video.fullUrl ? 36 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(41, 34, "PLUGIN.VIDEO.TECHNICAL_DETAILS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(46, 36, "PLUGIN.VIDEO.RESOLUTION"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(ctx_r1.video.resolution);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(52, 38, "PLUGIN.VIDEO.CODEC"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(ctx_r1.video.codec);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(58, 40, "PLUGIN.VIDEO.FRAME_RATE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI("", ctx_r1.video.frameRate, " FPS");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵconditional"] */ .vxM(ctx_r1.video.uploadedBy ? 61 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(65, 42, "BUTTONS.CLOSE"));
  }
}
function VideoMetadataComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(0, "ngx-no-data-message", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(1, "translate");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("message", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(1, 1, "PLUGIN.VIDEO.NO_VIDEO_AVAILABLE"));
  }
}
let VideoMetadataComponent = /*#__PURE__*/(() => {
  class VideoMetadataComponent {
    constructor(dialogRef) {
      this.dialogRef = dialogRef;
    }
    close() {
      this.dialogRef.close();
    }
    static {
      this.ɵfac = function VideoMetadataComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || VideoMetadataComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbDialogRef */ .ybQ));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: VideoMetadataComponent,
        selectors: [["lib-video-metadata"]],
        standalone: false,
        decls: 3,
        vars: 1,
        consts: [[1, "video-details-container"], [1, "video-details-wrapper"], [3, "message"], [1, "video-header"], [1, "header-content"], [1, "cancel", "mb-3"], [1, "fas", "fa-times", 3, "click"], [1, "title", "video-title"], [1, "video-preview", "mb-3"], [1, "video-details-grid"], [1, "details-section", "core-details"], [1, "section-header"], [1, "section-content"], [1, "detail-item"], [1, "label"], [1, "value"], [1, "detail-item", "full-url"], [1, "details-section", "metadata-details"], [1, "details-section", "uploader-details"], [1, "text-right", "p-0"], ["nbButton", "", "type", "button", "outline", "", "status", "basic", 3, "click"], [1, "video-thumbnail", 3, "src", "alt"], ["target", "_blank", "rel", "noopener noreferrer", 1, "url-link", 3, "href"], [1, "fas", "fa-external-link-alt"], [1, "section-content", "uploader-profile"], [1, "uploader-avatar", 3, "src", "name", "id", "employee"]],
        template: function VideoMetadataComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, VideoMetadataComponent_Conditional_1_Template, 66, 44, "div", 1)(2, VideoMetadataComponent_Conditional_2_Template, 2, 3, "ngx-no-data-message", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵconditional"] */ .vxM(ctx.video ? 1 : 2);
          }
        },
        dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbCardFooterComponent */ .VDm, _ui_core_shared_src_lib_smart_data_layout_no_data_message_no_data_message_component__WEBPACK_IMPORTED_MODULE_2__/* .NoDataMessageComponent */ ._, _ui_core_shared_src_lib_components_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_3__/* .AvatarComponent */ .f, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbButtonComponent */ .YP2, _video_player_video_player_component__WEBPACK_IMPORTED_MODULE_4__/* .VideoPlayerComponent */ ._, _angular_common__WEBPACK_IMPORTED_MODULE_5__/* .DatePipe */ .vh, _ui_core_shared_src_lib_pipes_duration_format_pipe__WEBPACK_IMPORTED_MODULE_6__/* .DurationFormatPipe */ .i, _ui_core_shared_src_lib_pipes_file_size_pipe__WEBPACK_IMPORTED_MODULE_7__/* .FileSizePipe */ .s, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__/* .TranslatePipe */ .D9],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   i[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n}\n[dir=ltr]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n[dir=rtl]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--gauzy-text-color-1);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(245, 109, 88, 0.3);\n  border-width: 2px;\n  color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(245, 109, 88, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 16px;\n  letter-spacing: 0em;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(126, 126, 143, 0.3);\n  border-width: 2px;\n  color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(126, 126, 143, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(37, 184, 105, 0.3);\n  border-width: 2px;\n  color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(37, 184, 105, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[disabled][_ngcontent-%COMP%], \n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic.btn-disabled[_ngcontent-%COMP%] {\n  background-color: var(--button-outline-basic-disabled-background-color);\n  border-color: var(--button-outline-basic-disabled-border-color);\n  color: var(--button-outline-basic-disabled-text-color);\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].primary.appearance-filled.status-primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  border: unset;\n  background-color: var(--color-primary-transparent-default);\n  box-shadow: var(--gauzy-shadow) 0, 0, 0, 0.15;\n}\n[dir=ltr]   [_nghost-%COMP%]     input, \n[dir=ltr]   [_nghost-%COMP%]     textarea {\n  text-align: start;\n}\n[dir=rtl]   [_nghost-%COMP%]     input, \n[dir=rtl]   [_nghost-%COMP%]     textarea {\n  text-align: end;\n}\n[_nghost-%COMP%]     input, \n[_nghost-%COMP%]     nb-select.appearance-outline.status-basic .select-button, \n[_nghost-%COMP%]     .ng-select .ng-select-container {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n  height: 42px !important;\n}\n[_nghost-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder, \n[_nghost-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {\n  top: unset !important;\n}\n[_nghost-%COMP%]     label, \n[_nghost-%COMP%]     .label {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  color: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]     textarea {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n}\n[_nghost-%COMP%]     .ng-select .ng-select-container input, \n[_nghost-%COMP%]     nb-tag-list input {\n  background-color: unset !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n}\n\n.form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n\nnb-card[_ngcontent-%COMP%] {\n  width: 400px;\n}\n\nnb-card-body[_ngcontent-%COMP%], \nnb-card-footer[_ngcontent-%COMP%], \nnb-card-header[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n\nnb-card-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 1rem;\n}\n\n.error[_ngcontent-%COMP%] {\n  color: red;\n  font-size: 0.875rem;\n  margin-top: 0.25rem;\n}\n\n.video-details-container[_ngcontent-%COMP%] {\n  border-radius: var(--border-radius);\n  background-color: var(--gauzy-card-1);\n}\n.video-details-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 22px;\n}\n.video-details-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.video-details-container[_ngcontent-%COMP%]   .video-details-wrapper[_ngcontent-%COMP%] {\n  max-width: 640px;\n  margin: 0 auto;\n  padding: 1rem;\n  background-color: var(--card-background);\n  border-radius: 12px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n}\n.video-details-container[_ngcontent-%COMP%]   .video-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1.5rem;\n}\n.video-details-container[_ngcontent-%COMP%]   .video-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.video-details-container[_ngcontent-%COMP%]   .video-details-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 1rem;\n}\n.video-details-container[_ngcontent-%COMP%]   .details-section[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n  border-radius: var(--border-radius);\n  padding: 1rem;\n}\n.video-details-container[_ngcontent-%COMP%]   .details-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%] {\n  border-bottom: 2px solid var(--color-primary-default);\n  margin-bottom: 1rem;\n}\n.video-details-container[_ngcontent-%COMP%]   .details-section[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 0.5rem;\n}\n@media (max-width: 768px) {\n  .video-details-container[_ngcontent-%COMP%]   .video-details-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}"],
        changeDetection: 0
      });
    }
  }
  return VideoMetadataComponent;
})();

/***/ }),

/***/ 18128:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: () => (/* binding */ CamshotViewerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56383);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14572);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(54460);
/* harmony import */ var _ui_core_shared_src_lib_directives_img_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71466);





function CamshotViewerComponent_h3_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(ctx_r0.imageTitle);
  }
}
function CamshotViewerComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 18)(1, "div", 19)(2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(3, "div", 21)(4, "div", 21)(5, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(7, "Loading image...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
  }
}
function CamshotViewerComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 22)(1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(2, "nb-icon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(4, "Image failed to load");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(6, "We couldn't load the requested image");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(7, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function CamshotViewerComponent_div_9_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r0.dismiss());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(8, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
  }
}
function CamshotViewerComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 26)(1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(2, "nb-icon", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(ctx_r0.imageDescription);
  }
}
let CamshotViewerComponent = /*#__PURE__*/(() => {
  class CamshotViewerComponent {
    constructor(dialogRef) {
      this.dialogRef = dialogRef;
      this.isZoomed = false;
      this.isLoading = true;
      this.showError = false;
      this.zoomLevel = 1;
      this.isDragging = false;
      this.dragX = 0;
      this.dragY = 0;
      this.dragStartX = 0;
      this.dragStartY = 0;
    }
    dismiss() {
      this.dialogRef.close();
    }
    toggleZoom() {
      this.isZoomed = !this.isZoomed;
      this.zoomLevel = this.isZoomed ? 1.5 : 1;
      if (!this.isZoomed) {
        this.resetPosition();
      }
    }
    zoomIn() {
      if (this.zoomLevel < 3) {
        this.zoomLevel += 0.25;
        this.isZoomed = true;
      }
    }
    zoomOut() {
      if (this.zoomLevel > 0.5) {
        this.zoomLevel -= 0.25;
        this.isZoomed = this.zoomLevel !== 1;
        if (!this.isZoomed) {
          this.resetPosition();
        }
      }
    }
    resetZoom() {
      this.zoomLevel = 1;
      this.isZoomed = false;
      this.resetPosition();
    }
    resetPosition() {
      this.dragX = 0;
      this.dragY = 0;
    }
    onImageLoad() {
      this.isLoading = false;
      this.showError = false;
    }
    onImageError() {
      this.isLoading = false;
      this.showError = true;
    }
    onMouseDown(event) {
      if (this.isZoomed && event.button === 0) {
        this.isDragging = true;
        this.dragStartX = event.clientX - this.dragX;
        this.dragStartY = event.clientY - this.dragY;
      }
    }
    onMouseMove(event) {
      if (this.isDragging) {
        this.dragX = event.clientX - this.dragStartX;
        this.dragY = event.clientY - this.dragStartY;
      }
    }
    onMouseUp() {
      this.isDragging = false;
    }
    onTouchStart(event) {
      if (this.isZoomed && event.touches.length === 1) {
        this.isDragging = true;
        this.dragStartX = event.touches[0].clientX - this.dragX;
        this.dragStartY = event.touches[0].clientY - this.dragY;
      }
    }
    onTouchMove(event) {
      if (this.isDragging && event.touches.length === 1) {
        this.dragX = event.touches[0].clientX - this.dragStartX;
        this.dragY = event.touches[0].clientY - this.dragStartY;
      }
    }
    onTouchEnd() {
      this.isDragging = false;
    }
    static {
      this.ɵfac = function CamshotViewerComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || CamshotViewerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbDialogRef */ .ybQ));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: CamshotViewerComponent,
        selectors: [["camshot-viewer"]],
        hostBindings: function CamshotViewerComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("mousedown", function CamshotViewerComponent_mousedown_HostBindingHandler($event) {
              return ctx.onMouseDown($event);
            })("mousemove", function CamshotViewerComponent_mousemove_HostBindingHandler($event) {
              return ctx.onMouseMove($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresolveDocument"] */ .EBC)("mouseup", function CamshotViewerComponent_mouseup_HostBindingHandler() {
              return ctx.onMouseUp();
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresolveDocument"] */ .EBC)("touchstart", function CamshotViewerComponent_touchstart_HostBindingHandler($event) {
              return ctx.onTouchStart($event);
            })("touchmove", function CamshotViewerComponent_touchmove_HostBindingHandler($event) {
              return ctx.onTouchMove($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresolveDocument"] */ .EBC)("touchend", function CamshotViewerComponent_touchend_HostBindingHandler() {
              return ctx.onTouchEnd();
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresolveDocument"] */ .EBC);
          }
        },
        standalone: false,
        decls: 21,
        vars: 14,
        consts: [[1, "image-dialog-container"], [1, "dialog-header"], [4, "ngIf"], ["nbButton", "", "ghost", "", "status", "basic", 1, "close-button", 3, "click"], ["icon", "close-outline"], [1, "image-wrapper", 3, "click"], [1, "image-container"], ["priority", "", "fill", "", 3, "load", "error", "ngSrc", "alt"], ["class", "loading-overlay", 4, "ngIf"], ["class", "error-overlay", 4, "ngIf"], [1, "floating-controls"], [1, "control-group", "zoom-controls"], ["nbButton", "", "ghost", "", "status", "control", 3, "click", "disabled"], ["icon", "plus-outline"], [1, "zoom-level"], ["icon", "minus-outline"], ["icon", "collapse-outline"], ["class", "image-meta", 4, "ngIf"], [1, "loading-overlay"], [1, "loading-content"], [1, "spinner-container"], [1, "spinner-circle"], [1, "error-overlay"], [1, "error-content"], ["icon", "image-off-outline", "status", "danger"], ["nbButton", "", "status", "basic", "size", "small", 3, "click"], [1, "image-meta"], [1, "meta-content"], ["icon", "info-circle-outline"]],
        template: function CamshotViewerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 0)(1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(2, CamshotViewerComponent_h3_2_Template, 2, 1, "h3", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(3, "button", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function CamshotViewerComponent_Template_button_click_3_listener() {
              return ctx.dismiss();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(4, "nb-icon", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(5, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function CamshotViewerComponent_Template_div_click_5_listener() {
              return ctx.toggleZoom();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(6, "div", 6)(7, "img", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("load", function CamshotViewerComponent_Template_img_load_7_listener() {
              return ctx.onImageLoad();
            })("error", function CamshotViewerComponent_Template_img_error_7_listener() {
              return ctx.onImageError();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(8, CamshotViewerComponent_div_8_Template, 8, 0, "div", 8)(9, CamshotViewerComponent_div_9_Template, 9, 0, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(10, "div", 10)(11, "div", 11)(12, "button", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function CamshotViewerComponent_Template_button_click_12_listener() {
              return ctx.zoomIn();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(13, "nb-icon", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(14, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(16, "button", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function CamshotViewerComponent_Template_button_click_16_listener() {
              return ctx.zoomOut();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(17, "nb-icon", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(18, "button", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function CamshotViewerComponent_Template_button_click_18_listener() {
              return ctx.resetZoom();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(19, "nb-icon", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(20, CamshotViewerComponent_div_20_Template, 5, 1, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.imageTitle);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵclassProp"] */ .AVh("grabbing", ctx.isDragging);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵstyleProp"] */ .xc7("transform", "scale(" + ctx.zoomLevel + ") translate(" + ctx.dragX + "px, " + ctx.dragY + "px)");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngSrc", ctx.imageUrl)("alt", ctx.imageTitle);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.isLoading);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.showError);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("disabled", ctx.zoomLevel >= 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI("", ctx.zoomLevel.toFixed(1), "x");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("disabled", ctx.zoomLevel <= 0.5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("disabled", ctx.zoomLevel === 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.imageDescription);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__/* .NgIf */ .bT, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbIconComponent */ .tHu, _ui_core_shared_src_lib_directives_img_directive__WEBPACK_IMPORTED_MODULE_3__/* .ImgDirective */ .z, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbButtonComponent */ .YP2, _angular_common__WEBPACK_IMPORTED_MODULE_4__/* .NgOptimizedImage */ .kt],
        styles: [".image-dialog-container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 90vw;\n  max-width: 1200px;\n  height: 90vh;\n  max-height: 90vh;\n  display: flex;\n  flex-direction: column;\n  background: var(--gauzy-card-2);\n  border-radius: var(--border-radius);\n  overflow: hidden;\n  color: var(--text-basic-color);\n}\n.image-dialog-container[_ngcontent-%COMP%]   .dialog-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem 1.5rem;\n  background: rgba(var(--background-basic-color-3), 0.8);\n  backdrop-filter: blur(10px);\n  z-index: 10;\n}\n.image-dialog-container[_ngcontent-%COMP%]   .dialog-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.25rem;\n  font-weight: 600;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 80%;\n  color: #ffffff;\n}\n.image-dialog-container[_ngcontent-%COMP%]   .dialog-header[_ngcontent-%COMP%]   .close-button[_ngcontent-%COMP%] {\n  margin-left: auto;\n  border-radius: 50%;\n  width: 2.5rem;\n  height: 2.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s ease;\n  color: #ffffff;\n}\n.image-dialog-container[_ngcontent-%COMP%]   .dialog-header[_ngcontent-%COMP%]   .close-button[_ngcontent-%COMP%]:hover {\n  background: rgba(var(--color-basic-600), 0.1);\n  transform: rotate(90deg);\n}\n.image-dialog-container[_ngcontent-%COMP%]   .image-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  flex: 1;\n  overflow: hidden;\n  cursor: zoom-in;\n  background: var(--gauzy-card-2);\n  transition: background 0.3s ease;\n  backdrop-filter: blur(10px);\n}\n.image-dialog-container[_ngcontent-%COMP%]   .image-wrapper.grabbing[_ngcontent-%COMP%] {\n  cursor: grabbing;\n}\n.image-dialog-container[_ngcontent-%COMP%]   .image-wrapper[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  transition: transform 0.2s ease-out;\n  will-change: transform;\n}\n.image-dialog-container[_ngcontent-%COMP%]   .image-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: absolute;\n  object-fit: contain;\n  width: 100%;\n  height: 100%;\n}\n.image-dialog-container[_ngcontent-%COMP%]   .loading-overlay[_ngcontent-%COMP%], \n.image-dialog-container[_ngcontent-%COMP%]   .error-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(var(--background-basic-color-1), 0.9);\n  backdrop-filter: blur(5px);\n  z-index: 5;\n}\n.image-dialog-container[_ngcontent-%COMP%]   .loading-content[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 2rem;\n  max-width: 300px;\n}\n.image-dialog-container[_ngcontent-%COMP%]   .loading-content[_ngcontent-%COMP%]   .spinner-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 0.5rem;\n  margin-bottom: 1.5rem;\n}\n.image-dialog-container[_ngcontent-%COMP%]   .loading-content[_ngcontent-%COMP%]   .spinner-container[_ngcontent-%COMP%]   .spinner-circle[_ngcontent-%COMP%] {\n  width: 12px;\n  height: 12px;\n  background: var(--color-primary-500);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_pulse 1.5s infinite ease-in-out;\n}\n.image-dialog-container[_ngcontent-%COMP%]   .loading-content[_ngcontent-%COMP%]   .spinner-container[_ngcontent-%COMP%]   .spinner-circle[_ngcontent-%COMP%]:nth-child(2) {\n  animation-delay: 0.2s;\n}\n.image-dialog-container[_ngcontent-%COMP%]   .loading-content[_ngcontent-%COMP%]   .spinner-container[_ngcontent-%COMP%]   .spinner-circle[_ngcontent-%COMP%]:nth-child(3) {\n  animation-delay: 0.4s;\n}\n.image-dialog-container[_ngcontent-%COMP%]   .loading-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #ffffff;\n  font-size: 0.9rem;\n}\n.image-dialog-container[_ngcontent-%COMP%]   .error-overlay[_ngcontent-%COMP%]   .error-content[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 2rem;\n}\n.image-dialog-container[_ngcontent-%COMP%]   .error-overlay[_ngcontent-%COMP%]   .error-content[_ngcontent-%COMP%]   nb-icon[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  margin-bottom: 1rem;\n  color: var(--color-danger-500);\n}\n.image-dialog-container[_ngcontent-%COMP%]   .error-overlay[_ngcontent-%COMP%]   .error-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 0.5rem 0;\n  font-size: 1.2rem;\n}\n.image-dialog-container[_ngcontent-%COMP%]   .error-overlay[_ngcontent-%COMP%]   .error-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 1.5rem 0;\n  color: var(--text-hint-color);\n  font-size: 0.9rem;\n}\n.image-dialog-container[_ngcontent-%COMP%]   .floating-controls[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 1.5rem;\n  left: 50%;\n  transform: translateX(-50%);\n  display: flex;\n  background: rgba(var(--background-basic-color-3), 0.8);\n  backdrop-filter: blur(10px);\n  border-radius: 2rem;\n  padding: 0.5rem;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);\n  z-index: 10;\n}\n.image-dialog-container[_ngcontent-%COMP%]   .floating-controls[_ngcontent-%COMP%]   .zoom-controls[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n}\n.image-dialog-container[_ngcontent-%COMP%]   .floating-controls[_ngcontent-%COMP%]   .zoom-controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 2.5rem;\n  height: 2.5rem;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s ease;\n  color: #ffffff;\n}\n.image-dialog-container[_ngcontent-%COMP%]   .floating-controls[_ngcontent-%COMP%]   .zoom-controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover:not([disabled]) {\n  background: rgba(var(--color-primary-500), 0.1);\n  transform: scale(1.1);\n}\n.image-dialog-container[_ngcontent-%COMP%]   .floating-controls[_ngcontent-%COMP%]   .zoom-controls[_ngcontent-%COMP%]   button[disabled][_ngcontent-%COMP%] {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.image-dialog-container[_ngcontent-%COMP%]   .floating-controls[_ngcontent-%COMP%]   .zoom-controls[_ngcontent-%COMP%]   .zoom-level[_ngcontent-%COMP%] {\n  min-width: 3rem;\n  text-align: center;\n  font-size: 0.8rem;\n  font-weight: 500;\n  color: #ffffff;\n}\n.image-dialog-container[_ngcontent-%COMP%]   .image-meta[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -60px;\n  left: 0;\n  right: 0;\n  padding: 1rem 1.5rem;\n  background: rgba(var(--background-basic-color-3), 0.8);\n  backdrop-filter: blur(10px);\n  transition: bottom 0.3s ease;\n  z-index: 9;\n}\n.image-dialog-container[_ngcontent-%COMP%]   .image-meta[_ngcontent-%COMP%]:hover {\n  bottom: 0;\n}\n.image-dialog-container[_ngcontent-%COMP%]   .image-meta[_ngcontent-%COMP%]   .meta-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.75rem;\n}\n.image-dialog-container[_ngcontent-%COMP%]   .image-meta[_ngcontent-%COMP%]   .meta-content[_ngcontent-%COMP%]   nb-icon[_ngcontent-%COMP%] {\n  margin-top: 0.2rem;\n  flex-shrink: 0;\n  color: var(--color-primary-500);\n}\n.image-dialog-container[_ngcontent-%COMP%]   .image-meta[_ngcontent-%COMP%]   .meta-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.9rem;\n  line-height: 1.5;\n  color: #ffffff;\n}\n\n@keyframes _ngcontent-%COMP%_pulse {\n  0%, 100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n  50% {\n    transform: scale(0.8);\n    opacity: 0.5;\n  }\n}\n@media (max-width: 768px) {\n  .image-dialog-container[_ngcontent-%COMP%] {\n    width: 100vw;\n    height: 100vh;\n    max-height: 100vh;\n    border-radius: 0;\n  }\n  .image-dialog-container[_ngcontent-%COMP%]   .floating-controls[_ngcontent-%COMP%] {\n    bottom: 1rem;\n  }\n  .image-dialog-container[_ngcontent-%COMP%]   .image-meta[_ngcontent-%COMP%] {\n    bottom: -80px;\n    padding: 0.75rem 1rem;\n  }\n  .image-dialog-container[_ngcontent-%COMP%]   .image-meta[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n  }\n}"],
        changeDetection: 0
      });
    }
  }
  return CamshotViewerComponent;
})();

/***/ }),

/***/ 19248:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   n: () => (/* binding */ switchMap)
/* harmony export */ });
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(50388);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31204);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(84230);



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

/***/ 20758:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   h: () => (/* binding */ mergeInternals)
/* harmony export */ });
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50388);
/* harmony import */ var _util_executeSchedule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25107);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(84230);



function mergeInternals(source, subscriber, project, concurrent, onBeforeNext, expand, innerSubScheduler, additionalFinalizer) {
  const buffer = [];
  let active = 0;
  let index = 0;
  let isComplete = false;
  const checkComplete = () => {
    if (isComplete && !buffer.length && !active) {
      subscriber.complete();
    }
  };
  const outerNext = value => active < concurrent ? doInnerSub(value) : buffer.push(value);
  const doInnerSub = value => {
    expand && subscriber.next(value);
    active++;
    let innerComplete = false;
    (0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_0__/* .innerFrom */ .Tg)(project(value, index++)).subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__/* .createOperatorSubscriber */ ._)(subscriber, innerValue => {
      onBeforeNext === null || onBeforeNext === void 0 ? void 0 : onBeforeNext(innerValue);
      if (expand) {
        outerNext(innerValue);
      } else {
        subscriber.next(innerValue);
      }
    }, () => {
      innerComplete = true;
    }, undefined, () => {
      if (innerComplete) {
        try {
          active--;
          while (buffer.length && active < concurrent) {
            const bufferedValue = buffer.shift();
            if (innerSubScheduler) {
              (0,_util_executeSchedule__WEBPACK_IMPORTED_MODULE_2__/* .executeSchedule */ .N)(subscriber, innerSubScheduler, () => doInnerSub(bufferedValue));
            } else {
              doInnerSub(bufferedValue);
            }
          }
          checkComplete();
        } catch (err) {
          subscriber.error(err);
        }
      }
    }));
  };
  source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__/* .createOperatorSubscriber */ ._)(subscriber, outerNext, () => {
    isComplete = true;
    checkComplete();
  }));
  return () => {
    additionalFinalizer === null || additionalFinalizer === void 0 ? void 0 : additionalFinalizer();
  };
}
//# sourceMappingURL=mergeInternals.js.map

/***/ }),

/***/ 21823:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   W: () => (/* binding */ CamshotQuery)
/* harmony export */ });
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71732);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26860);
/* harmony import */ var _camshot_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9458);




let CamshotQuery = /*#__PURE__*/(() => {
  class CamshotQuery extends _datorama_akita__WEBPACK_IMPORTED_MODULE_0__/* .Query */ .XK {
    constructor(camshotStore) {
      super(camshotStore);
      this.camshotStore = camshotStore;
      this.camshots$ = this.select(state => state.camshots);
      this.camshot$ = this.select(state => state.camshot);
      this.count$ = this.select(state => state.count);
      this.isLoading$ = this.selectLoading();
      this.isAvailable$ = this.select(state => state.count > 0);
      this.deleting$ = this.select(state => state.deleting);
      this.restoring$ = this.select(state => state.restoring);
      this.downloading$ = this.select(state => state.downloading);
    }
    get camshot() {
      return this.getValue().camshot;
    }
    get camshots() {
      return this.getValue().camshots || [];
    }
    get count() {
      return this.getValue().count || 0;
    }
    static {
      this.ɵfac = function CamshotQuery_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || CamshotQuery)(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵinject"] */ .KVO(_camshot_store__WEBPACK_IMPORTED_MODULE_2__/* .CamshotStore */ .V));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineInjectable"] */ .jDH({
        token: CamshotQuery,
        factory: CamshotQuery.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return CamshotQuery;
})();

/***/ }),

/***/ 22196:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   l: () => (/* binding */ VideoEditComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10936);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56383);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14572);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19223);







function VideoEditComponent_div_12_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(2, 1, "PLUGIN.VIDEO.ERROR.REQUIRED"));
  }
}
function VideoEditComponent_div_12_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(2, 1, "PLUGIN.VIDEO.ERROR.AT_LEAST_3"));
  }
}
function VideoEditComponent_div_12_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(2, 1, "PLUGIN.VIDEO.ERROR.AT_MOST_255"));
  }
}
function VideoEditComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, VideoEditComponent_div_12_span_1_Template, 3, 3, "span", 14)(2, VideoEditComponent_div_12_span_2_Template, 3, 3, "span", 14)(3, VideoEditComponent_div_12_span_3_Template, 3, 3, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r0.form.controls.title.errors == null ? null : ctx_r0.form.controls.title.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r0.form.controls.title.errors == null ? null : ctx_r0.form.controls.title.errors.minlength);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r0.form.controls.title.errors == null ? null : ctx_r0.form.controls.title.errors.maxlength);
  }
}
function VideoEditComponent_div_16_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(2, 1, "PLUGIN.VIDEO.ERROR.AT_MOST_1000"));
  }
}
function VideoEditComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, VideoEditComponent_div_16_span_1_Template, 3, 3, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx_r0.form.controls.description.errors == null ? null : ctx_r0.form.controls.description.errors.maxlength);
  }
}
let VideoEditComponent = /*#__PURE__*/(() => {
  class VideoEditComponent {
    constructor(dialogRef) {
      this.dialogRef = dialogRef;
    }
    ngOnInit() {
      const {
        title,
        description = ''
      } = this.video || {};
      this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .FormGroup */ .gE({
        title: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .FormControl */ .MJ(title, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .Validators */ .k0.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .Validators */ .k0.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .Validators */ .k0.maxLength(255)]),
        description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .FormControl */ .MJ(description, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .Validators */ .k0.maxLength(1000)])
      });
    }
    close() {
      this.dialogRef.close();
    }
    submit() {
      if (this.form.invalid) {
        return;
      }
      this.dialogRef.close(this.form.value);
    }
    static {
      this.ɵfac = function VideoEditComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || VideoEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbDialogRef */ .ybQ));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: VideoEditComponent,
        selectors: [["plug-video-edit"]],
        standalone: false,
        decls: 24,
        vars: 19,
        consts: [[3, "ngSubmit", "formGroup"], [1, "mb-0"], [1, "cancel"], [1, "fas", "fa-times", 3, "click"], [1, "title"], [1, "form"], ["nbInput", "", "fullWidth", "", "formControlName", "title", 3, "placeholder"], ["class", "error", 4, "ngIf"], [1, "description"], ["nbInput", "", "fullWidth", "", "formControlName", "description", "rows", "5", 3, "placeholder"], [1, "text-right", "mt-0"], ["nbButton", "", "type", "button", "outline", "", "status", "basic", 3, "click"], ["nbButton", "", "type", "submit", "status", "success", 3, "disabled"], [1, "error"], [4, "ngIf"]],
        template: function VideoEditComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "form", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("ngSubmit", function VideoEditComponent_Template_form_ngSubmit_0_listener() {
              return ctx.submit();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(1, "nb-card")(2, "nb-card-header", 1)(3, "span", 2)(4, "i", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function VideoEditComponent_Template_i_click_4_listener() {
              return ctx.close();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(5, "h5", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(7, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(8, "nb-card-body", 5)(9, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(10, "input", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(11, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(12, VideoEditComponent_div_12_Template, 4, 3, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(13, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(14, "textarea", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(15, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(16, VideoEditComponent_div_16_Template, 2, 1, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(17, "nb-card-footer", 10)(18, "button", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function VideoEditComponent_Template_button_click_18_listener() {
              return ctx.close();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(20, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(21, "button", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(23, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("formGroup", ctx.form);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(7, 9, "PLUGIN.VIDEO.EDIT_METADATA"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(11, 11, "FORM.PLACEHOLDERS.TITLE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.form.controls.title.invalid && ctx.form.controls.title.touched);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(15, 13, "FORM.PLACEHOLDERS.DESCRIPTION"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.form.controls.description.invalid && ctx.form.controls.description.touched);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(20, 15, "BUTTONS.CANCEL"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("disabled", ctx.form.invalid);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(23, 17, "BUTTONS.SAVE"), " ");
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__/* .NgIf */ .bT, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbCardComponent */ .SrT, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbCardBodyComponent */ .KH5, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbCardFooterComponent */ .VDm, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbCardHeaderComponent */ .zJv, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* ["ɵNgNoValidate"] */ .qT, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .DefaultValueAccessor */ .me, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .NgControlStatus */ .BC, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .NgControlStatusGroup */ .cb, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .FormGroupDirective */ .j4, _angular_forms__WEBPACK_IMPORTED_MODULE_1__/* .FormControlName */ .JD, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbButtonComponent */ .YP2, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbInputDirective */ .i6h, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__/* .TranslatePipe */ .D9],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   i[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n}\n[dir=ltr]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n[dir=rtl]   [_nghost-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n[_nghost-%COMP%]   .cancel[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--gauzy-text-color-1);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(245, 109, 88, 0.3);\n  border-width: 2px;\n  color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(245, 109, 88);\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(245, 109, 88, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 16px;\n  letter-spacing: 0em;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(126, 126, 143, 0.3);\n  border-width: 2px;\n  color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(126, 126, 143);\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(126, 126, 143, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].gray.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: rgba(37, 184, 105, 0.3);\n  border-width: 2px;\n  color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[_ngcontent-%COMP%]:hover {\n  border-color: rgb(37, 184, 105);\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 var(--button-outline-width) rgba(37, 184, 105, 0.05), inset var(--button-outline-focus-inset-shadow-length) transparent;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline[_ngcontent-%COMP%]:focus:not(:hover):not(:active) {\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic[disabled][_ngcontent-%COMP%], \n[_nghost-%COMP%]   [nbButton].green.appearance-outline.status-basic.btn-disabled[_ngcontent-%COMP%] {\n  background-color: var(--button-outline-basic-disabled-background-color);\n  border-color: var(--button-outline-basic-disabled-border-color);\n  color: var(--button-outline-basic-disabled-text-color);\n  box-shadow: unset;\n}\n[_nghost-%COMP%]   [nbButton].primary.appearance-filled.status-primary[_ngcontent-%COMP%] {\n  color: var(--text-primary-color);\n  border: unset;\n  background-color: var(--color-primary-transparent-default);\n  box-shadow: var(--gauzy-shadow) 0, 0, 0, 0.15;\n}\n[dir=ltr]   [_nghost-%COMP%]     input, \n[dir=ltr]   [_nghost-%COMP%]     textarea {\n  text-align: start;\n}\n[dir=rtl]   [_nghost-%COMP%]     input, \n[dir=rtl]   [_nghost-%COMP%]     textarea {\n  text-align: end;\n}\n[_nghost-%COMP%]     input, \n[_nghost-%COMP%]     nb-select.appearance-outline.status-basic .select-button, \n[_nghost-%COMP%]     .ng-select .ng-select-container {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n  height: 42px !important;\n}\n[_nghost-%COMP%]     .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder, \n[_nghost-%COMP%]     .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input {\n  top: unset !important;\n}\n[_nghost-%COMP%]     label, \n[_nghost-%COMP%]     .label {\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 13px;\n  letter-spacing: -0.01em;\n  color: var(--gauzy-text-color-2);\n}\n[_nghost-%COMP%]     textarea {\n  background-color: var(--gauzy-sidebar-background-4) !important;\n  border: none;\n}\n[_nghost-%COMP%]     .ng-select .ng-select-container input, \n[_nghost-%COMP%]     nb-tag-list input {\n  background-color: unset !important;\n}\n[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-1);\n}\n\n.form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n\nnb-card[_ngcontent-%COMP%] {\n  width: 400px;\n}\n\nnb-card-body[_ngcontent-%COMP%], \nnb-card-footer[_ngcontent-%COMP%], \nnb-card-header[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n\nnb-card-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 1rem;\n}\n\n.error[_ngcontent-%COMP%] {\n  color: red;\n  font-size: 0.875rem;\n  margin-top: 0.25rem;\n}"],
        changeDetection: 0
      });
    }
  }
  return VideoEditComponent;
})();

/***/ }),

/***/ 22279:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Q: () => (/* binding */ takeUntil)
/* harmony export */ });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31204);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(84230);
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50388);
/* harmony import */ var _util_noop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(62029);




function takeUntil(notifier) {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__/* .operate */ .N)((source, subscriber) => {
    (0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_1__/* .innerFrom */ .Tg)(notifier).subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__/* .createOperatorSubscriber */ ._)(subscriber, () => subscriber.complete(), _util_noop__WEBPACK_IMPORTED_MODULE_3__/* .noop */ .l));
    !subscriber.closed && source.subscribe(subscriber);
  });
}
//# sourceMappingURL=takeUntil.js.map

/***/ }),

/***/ 23884:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: () => (/* binding */ ofType)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41483);

function ofType(...creators) {
  return (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__/* .filter */ .p)(({
    type
  }) => creators.some(creator => creator.type === type));
}

/***/ }),

/***/ 25295:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ CamshotListComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(84562);
/* harmony import */ var _ngneat_effects_ng__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(10994);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(95194);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(72368);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9780);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8563);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(84070);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(66174);
/* harmony import */ var _state_camshot_camshot_action__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(42857);
/* harmony import */ var _state_camshot_camshot_query__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(21823);
/* harmony import */ var _state_camshot_camshot_store__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(9458);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(56383);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(52742);
/* harmony import */ var _shared_ui_camshot_camshot_viewer_camshot_viewer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(18128);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26860);
/* harmony import */ var _ui_core_shared_src_lib_smart_data_layout_no_data_message_no_data_message_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(95959);
/* harmony import */ var _shared_ui_camshot_camshot_item_skeleton_camshot_item_skeleton_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(88069);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(14572);
/* harmony import */ var _shared_ui_camshot_camshot_item_camshot_item_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47730);




















const CamshotListComponent_For_4_Defer_2_DepsFn = () => [_shared_ui_camshot_camshot_item_camshot_item_component__WEBPACK_IMPORTED_MODULE_0__/* .CamshotItemComponent */ ._];
const _forTrack0 = ($index, $item) => $item.id;
function CamshotListComponent_For_4_Defer_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "plug-camshot-item", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("download", function CamshotListComponent_For_4_Defer_0_Template_plug_camshot_item_download_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r3);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx_r3.onDownload($event));
    })("recover", function CamshotListComponent_For_4_Defer_0_Template_plug_camshot_item_recover_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r3);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx_r3.onRecover($event));
    })("view", function CamshotListComponent_For_4_Defer_0_Template_plug_camshot_item_view_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r3);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx_r3.onView($event));
    })("delete", function CamshotListComponent_For_4_Defer_0_Template_plug_camshot_item_delete_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r3);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx_r3.onDelete($event));
    })("hardDelete", function CamshotListComponent_For_4_Defer_0_Template_plug_camshot_item_hardDelete_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r3);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx_r3.onHardDelete($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const camshot_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("camshot", camshot_r5);
  }
}
function CamshotListComponent_For_4_DeferPlaceholder_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(0, "plug-camshot-item-skeleton");
  }
}
function CamshotListComponent_For_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(0, CamshotListComponent_For_4_Defer_0_Template, 1, 1)(1, CamshotListComponent_For_4_DeferPlaceholder_1_Template, 1, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefer"] */ .nv$(2, 0, CamshotListComponent_For_4_Defer_2_DepsFn, null, 1, null, null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdeferEnableTimerScheduling"] */ .T$4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdeferOnViewport"] */ .qhs(0, -1);
  }
}
function CamshotListComponent_ForEmpty_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(0, "ngx-no-data-message", 2);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
    const isLoading_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵreadContextLet"] */ .r8f(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("message", isLoading_r2 ? "Loading camshots..." : "No camshots found");
  }
}
let CamshotListComponent = /*#__PURE__*/(() => {
  let CamshotListComponent = class CamshotListComponent {
    constructor(camshotQuery, camshotStore, dialogService, actions) {
      this.camshotQuery = camshotQuery;
      this.camshotStore = camshotStore;
      this.dialogService = dialogService;
      this.actions = actions;
      this.skip = 1;
      this.hasNext = false;
      this.take = 10;
    }
    ngOnChanges(changes) {
      if (changes?.timeSlotId) {
        this.reset();
        this.fetchCamshots();
      }
    }
    ngOnInit() {
      this.camshotQuery.select().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__/* .map */ .T)(({
        count
      }) => count > this.skip * this.take), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__/* .distinctUntilChanged */ .F)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__/* .tap */ .M)(hasNext => this.hasNext = hasNext), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .untilDestroyed */ .s)(this)).subscribe();
    }
    onView(camshot) {
      this.dialogService.open(_shared_ui_camshot_camshot_viewer_camshot_viewer_component__WEBPACK_IMPORTED_MODULE_6__/* .CamshotViewerComponent */ .p, {
        context: {
          imageUrl: camshot.fullUrl,
          imageTitle: camshot.title,
          imageDescription: camshot.uploadedBy?.fullName || 'N/A'
        },
        hasBackdrop: true
      });
    }
    onDownload(camshot) {
      this.actions.dispatch(_state_camshot_camshot_action__WEBPACK_IMPORTED_MODULE_7__/* .CamshotAction */ .K.downloadCamshot(camshot.fullUrl));
    }
    onRecover(camshot) {
      this.actions.dispatch(_state_camshot_camshot_action__WEBPACK_IMPORTED_MODULE_7__/* .CamshotAction */ .K.restoreCamshot(camshot.id));
    }
    onHardDelete(camshot) {
      this.dialogService.open(_gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_8__/* .AlertModalComponent */ .Z, {
        context: {
          data: {
            message: 'Are you sure you want to delete this camshot definitely?',
            title: 'Delete Camshot Forever'
          }
        },
        hasBackdrop: true
      }).onClose.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__/* .take */ .s)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_10__/* .filter */ .p)(confirm => confirm === 'yes'), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__/* .tap */ .M)(() => this.actions.dispatch(_state_camshot_camshot_action__WEBPACK_IMPORTED_MODULE_7__/* .CamshotAction */ .K.hardDeleteCamshot(camshot.id, {
        forceDelete: true
      })))).subscribe();
    }
    onDelete({
      id
    }) {
      this.dialogService.open(_gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_8__/* .AlertModalComponent */ .Z, {
        context: {
          data: {
            message: 'Are you sure you want to delete this camshot?',
            title: 'Delete Camshot'
          }
        },
        hasBackdrop: true
      }).onClose.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__/* .take */ .s)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_10__/* .filter */ .p)(confirm => confirm === 'yes'), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__/* .tap */ .M)(() => this.actions.dispatch(_state_camshot_camshot_action__WEBPACK_IMPORTED_MODULE_7__/* .CamshotAction */ .K.deleteCamshot(id)))).subscribe();
    }
    fetchCamshots() {
      if (!this.timeSlotId) {
        return;
      }
      this.actions.dispatch(_state_camshot_camshot_action__WEBPACK_IMPORTED_MODULE_7__/* .CamshotAction */ .K.fetchCamshots({
        where: {
          timeSlotId: this.timeSlotId
        },
        relations: ['uploadedBy', 'uploadedBy.user'],
        skip: this.skip,
        take: this.take,
        order: {
          recordedAt: 'DESC'
        }
      }));
    }
    fetchMoreCamshots() {
      if (this.hasNext && this.unlockInfiniteList) {
        this.skip++;
        this.fetchCamshots();
      }
    }
    reset() {
      this.skip = 1;
      this.hasNext = false;
      this.camshotStore.update({
        camshots: []
      });
    }
    get camshots$() {
      return this.camshotQuery.camshots$;
    }
    get isAvailable$() {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_11__/* .combineLatest */ .z)([this.camshotQuery.isAvailable$, this.isLoading$]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__/* .map */ .T)(([isAvailable, isLoading]) => isAvailable && !isLoading));
    }
    get unlockInfiniteList() {
      return this.timeSlotId && this.camshotQuery.camshots.length > 0;
    }
    get isLoading$() {
      return this.camshotQuery.isLoading$;
    }
    ngOnDestroy() {
      this.reset();
    }
    static {
      this.ɵfac = function CamshotListComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || CamshotListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_state_camshot_camshot_query__WEBPACK_IMPORTED_MODULE_12__/* .CamshotQuery */ .W), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_state_camshot_camshot_store__WEBPACK_IMPORTED_MODULE_13__/* .CamshotStore */ .V), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbDialogService */ .S0W), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_ngneat_effects_ng__WEBPACK_IMPORTED_MODULE_15__/* .Actions */ .En));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineComponent"] */ .VBU({
        type: CamshotListComponent,
        selectors: [["plug-camshot-list"]],
        inputs: {
          timeSlotId: "timeSlotId"
        },
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵNgOnChangesFeature"] */ .OA$],
        decls: 7,
        vars: 8,
        consts: [[500], ["nbInfiniteList", "", 1, "camshot-list", 3, "bottomThreshold", "threshold", "throttleTime"], ["status", "danger", 3, "message"], [3, "download", "recover", "view", "delete", "hardDelete", "camshot"]],
        template: function CamshotListComponent_Template(rf, ctx) {
          if (rf & 1) {
            const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetCurrentView"] */ .RV6();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdeclareLet"] */ .SS7(0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(1, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(2, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("bottomThreshold", function CamshotListComponent_Template_div_bottomThreshold_2_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx.fetchMoreCamshots());
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrepeaterCreate"] */ .Z7z(3, CamshotListComponent_For_4_Template, 4, 0, null, null, _forTrack0, false, CamshotListComponent_ForEmpty_5_Template, 1, 1, "ngx-no-data-message", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(6, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵstoreLet"] */ .bH3(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(1, 3, ctx.isLoading$));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("threshold", 500)("throttleTime", 300);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrepeater"] */ .Dyx(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(6, 6, ctx.camshots$));
          }
        },
        dependencies: [_ui_core_shared_src_lib_smart_data_layout_no_data_message_no_data_message_component__WEBPACK_IMPORTED_MODULE_16__/* .NoDataMessageComponent */ ._, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbInfiniteListDirective */ .oyd, _shared_ui_camshot_camshot_item_skeleton_camshot_item_skeleton_component__WEBPACK_IMPORTED_MODULE_17__/* .CamshotItemSkeletonComponent */ .f, _angular_common__WEBPACK_IMPORTED_MODULE_18__/* .AsyncPipe */ .Jj],
        styles: [".camshot-list[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  overflow: auto;\n}"],
        changeDetection: 0
      });
    }
  };
  CamshotListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_19__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .UntilDestroy */ .d)({
    checkProperties: true
  }), (0,tslib__WEBPACK_IMPORTED_MODULE_19__/* .__metadata */ .Sn)("design:paramtypes", [_state_camshot_camshot_query__WEBPACK_IMPORTED_MODULE_12__/* .CamshotQuery */ .W, _state_camshot_camshot_store__WEBPACK_IMPORTED_MODULE_13__/* .CamshotStore */ .V, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbDialogService */ .S0W, _ngneat_effects_ng__WEBPACK_IMPORTED_MODULE_15__/* .Actions */ .En])], CamshotListComponent);
  return CamshotListComponent;
})();


/***/ }),

/***/ 25310:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K: () => (/* binding */ VideoSkeletonComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);

let VideoSkeletonComponent = /*#__PURE__*/(() => {
  class VideoSkeletonComponent {
    static {
      this.ɵfac = function VideoSkeletonComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || VideoSkeletonComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: VideoSkeletonComponent,
        selectors: [["plug-video-skeleton"]],
        standalone: false,
        decls: 11,
        vars: 0,
        consts: [[1, "video", "skeleton"], [1, "video-player-placeholder"], [1, "info"], [1, "video-title-container"], [1, "title-placeholder", "skeleton-line"], [1, "actions"], [1, "action-placeholder", "skeleton-circle"], [1, "author-placeholder", "skeleton-line"], [1, "date-placeholder", "skeleton-line"], [1, "description-placeholder", "skeleton-block"]],
        template: function VideoSkeletonComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(2, "div", 2)(3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(5, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(6, "div", 6)(7, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(8, "div", 7)(9, "div", 8)(10, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
          }
        },
        styles: [".skeleton[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  border-radius: var(--border-radius);\n}\n.skeleton[_ngcontent-%COMP%]   .skeleton-line[_ngcontent-%COMP%] {\n  height: 1rem;\n  background-color: var(--gauzy-card-1);\n  border-radius: var(--border-radius);\n  margin-bottom: 0.5rem;\n  animation: _ngcontent-%COMP%_shimmer 1.5s infinite linear;\n}\n.skeleton[_ngcontent-%COMP%]   .skeleton-circle[_ngcontent-%COMP%] {\n  width: 2rem;\n  height: 2rem;\n  background-color: var(--gauzy-card-1);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_shimmer 1.5s infinite linear;\n}\n.skeleton[_ngcontent-%COMP%]   .skeleton-block[_ngcontent-%COMP%] {\n  height: 6rem;\n  background-color: var(--gauzy-card-1);\n  border-radius: var(--border-radius);\n  animation: _ngcontent-%COMP%_shimmer 1.5s infinite linear;\n}\n.skeleton[_ngcontent-%COMP%]   .video-player-placeholder[_ngcontent-%COMP%] {\n  height: 12rem;\n  background-color: var(--gauzy-card-1);\n  border-radius: var(--border-radius);\n  animation: _ngcontent-%COMP%_shimmer 1.5s infinite linear;\n}\n.skeleton[_ngcontent-%COMP%]   .video-title-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.skeleton[_ngcontent-%COMP%]   .video-title-container[_ngcontent-%COMP%]   .title-placeholder[_ngcontent-%COMP%] {\n  width: 60%;\n}\n.skeleton[_ngcontent-%COMP%]   .video-title-container[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n}\n.skeleton[_ngcontent-%COMP%]   .author-placeholder[_ngcontent-%COMP%] {\n  width: 40%;\n}\n.skeleton[_ngcontent-%COMP%]   .date-placeholder[_ngcontent-%COMP%] {\n  width: 30%;\n}\n.skeleton[_ngcontent-%COMP%]   .description-placeholder[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n@keyframes _ngcontent-%COMP%_shimmer {\n  0% {\n    background-position: -200% 0;\n  }\n  100% {\n    background-position: 200% 0;\n  }\n}"],
        changeDetection: 0
      });
    }
  }
  return VideoSkeletonComponent;
})();

/***/ }),

/***/ 26944:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   d: () => (/* binding */ SoundshotService)
/* harmony export */ });
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(64913);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26024);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26860);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45715);




let SoundshotService = /*#__PURE__*/(() => {
  class SoundshotService {
    constructor(http) {
      this.http = http;
      this.API_ENDPOINT = `${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_0__/* .API_PREFIX */ .m4}/plugins/soundshots`;
    }
    getAll(params) {
      return this.http.get(this.API_ENDPOINT, {
        params: (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .toParams */ .SV)(params)
      });
    }
    getOne(id, params) {
      return this.http.get(`${this.API_ENDPOINT}/${id}`, {
        params: (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .toParams */ .SV)(params)
      });
    }
    restore(id) {
      return this.http.patch(`${this.API_ENDPOINT}/${id}`, {});
    }
    delete(id, params) {
      return this.http.delete(`${this.API_ENDPOINT}/${id}`, {
        params: (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .toParams */ .SV)(params)
      });
    }
    getCount(params) {
      return this.http.get(`${this.API_ENDPOINT}/count`, {
        params: (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .toParams */ .SV)(params)
      });
    }
    static {
      this.ɵfac = function SoundshotService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || SoundshotService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵinject"] */ .KVO(_angular_common_http__WEBPACK_IMPORTED_MODULE_3__/* .HttpClient */ .Qq));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineInjectable"] */ .jDH({
        token: SoundshotService,
        factory: SoundshotService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return SoundshotService;
})();

/***/ }),

/***/ 28382:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   s: () => (/* binding */ CamshotEffects)
/* harmony export */ });
/* harmony import */ var _ngneat_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85308);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8563);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19248);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20903);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(89037);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(56626);
/* harmony import */ var _camshot_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42857);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(26860);
/* harmony import */ var _ngneat_effects_ng__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(10994);
/* harmony import */ var _camshot_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9458);
/* harmony import */ var _shared_services_camshot_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(65952);
/* harmony import */ var _shared_services_download_download_queue_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(36284);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(15480);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(54263);














let CamshotEffects = /*#__PURE__*/(() => {
  class CamshotEffects {
    constructor(action$, camshotStore, camshotService, downloadQueueService, toastrService, errorHandler) {
      this.action$ = action$;
      this.camshotStore = camshotStore;
      this.camshotService = camshotService;
      this.downloadQueueService = downloadQueueService;
      this.toastrService = toastrService;
      this.errorHandler = errorHandler;
      this.fetchCamshots$ = (0,_ngneat_effects__WEBPACK_IMPORTED_MODULE_0__/* .createEffect */ .EH)(() => this.action$.pipe((0,_ngneat_effects__WEBPACK_IMPORTED_MODULE_0__/* .ofType */ .gp)(_camshot_action__WEBPACK_IMPORTED_MODULE_1__/* .CamshotAction */ .K.fetchCamshots), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__/* .tap */ .M)(() => this.camshotStore.setLoading(true)),
      // Start loading state
      (0,rxjs__WEBPACK_IMPORTED_MODULE_3__/* .switchMap */ .n)(({
        params = {}
      }) => this.camshotService.getAll(params).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__/* .tap */ .M)(({
        items,
        total
      }) => this.camshotStore.update(state => ({
        camshots: [...new Map([...state.camshots, ...items].map(item => [item.id, item])).values()],
        count: total
      }))), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__/* .catchError */ .W)(error => {
        this.errorHandler.handleError(error); // Handle error properly
        return rxjs__WEBPACK_IMPORTED_MODULE_5__/* .EMPTY */ .w; // Return a fallback observable
      }), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__/* .finalize */ .j)(() => this.camshotStore.setLoading(false)) // Always stop loading
      ))));
      this.fetchOneCamshot$ = (0,_ngneat_effects__WEBPACK_IMPORTED_MODULE_0__/* .createEffect */ .EH)(() => this.action$.pipe((0,_ngneat_effects__WEBPACK_IMPORTED_MODULE_0__/* .ofType */ .gp)(_camshot_action__WEBPACK_IMPORTED_MODULE_1__/* .CamshotAction */ .K.fetchOneCamshot), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__/* .tap */ .M)(() => this.camshotStore.setLoading(true)),
      // Start loading state
      (0,rxjs__WEBPACK_IMPORTED_MODULE_3__/* .switchMap */ .n)(({
        id,
        params = {}
      }) => this.camshotService.getOne(id, params).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__/* .tap */ .M)(camshot => this.camshotStore.update({
        camshot
      })), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__/* .catchError */ .W)(error => {
        this.errorHandler.handleError(error); // Handle error properly
        return rxjs__WEBPACK_IMPORTED_MODULE_5__/* .EMPTY */ .w; // Return a fallback observable
      }), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__/* .finalize */ .j)(() => this.camshotStore.setLoading(false)) // Always stop loading
      ))));
      this.restore$ = (0,_ngneat_effects__WEBPACK_IMPORTED_MODULE_0__/* .createEffect */ .EH)(() => this.action$.pipe((0,_ngneat_effects__WEBPACK_IMPORTED_MODULE_0__/* .ofType */ .gp)(_camshot_action__WEBPACK_IMPORTED_MODULE_1__/* .CamshotAction */ .K.restoreCamshot), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__/* .tap */ .M)(() => {
        this.camshotStore.update({
          restoring: true
        });
        this.toastrService.info('Restoring camshot...', 'Restore');
      }), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__/* .switchMap */ .n)(({
        id
      }) => {
        return this.camshotService.restore(id).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__/* .tap */ .M)(() => {
          this.updateStoreAfterRestore(id);
          this.toastrService.success('Camshot restored successfully', 'Restore');
        }), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__/* .finalize */ .j)(() => this.camshotStore.update({
          restoring: false
        })), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__/* .catchError */ .W)(error => {
          this.errorHandler.handleError(error); // Handle error properly
          this.toastrService.error('Failed to restore camshot', 'Restore Error');
          return rxjs__WEBPACK_IMPORTED_MODULE_5__/* .EMPTY */ .w; // Return a fallback observable
        }));
      })));
      this.delete$ = (0,_ngneat_effects__WEBPACK_IMPORTED_MODULE_0__/* .createEffect */ .EH)(() => this.action$.pipe((0,_ngneat_effects__WEBPACK_IMPORTED_MODULE_0__/* .ofType */ .gp)(_camshot_action__WEBPACK_IMPORTED_MODULE_1__/* .CamshotAction */ .K.deleteCamshot, _camshot_action__WEBPACK_IMPORTED_MODULE_1__/* .CamshotAction */ .K.hardDeleteCamshot), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__/* .tap */ .M)(() => {
        this.camshotStore.update({
          deleting: true
        });
        this.toastrService.info('Deleting camshot...', 'Delete');
      }), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__/* .switchMap */ .n)(({
        id,
        params = {}
      }) => {
        return this.camshotService.delete(id, params).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__/* .tap */ .M)(() => {
          this.updateStoreAfterDelete(id, params);
          this.toastrService.success('Camshot deleted successfully', 'Delete');
        }), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__/* .finalize */ .j)(() => this.camshotStore.update({
          deleting: false
        })), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__/* .catchError */ .W)(error => {
          this.errorHandler.handleError(error); // Handle error properly
          this.toastrService.error('Failed to delete camshot', 'Delete Error');
          return rxjs__WEBPACK_IMPORTED_MODULE_5__/* .EMPTY */ .w; // Return a fallback observable
        }));
      })));
      this.addToQueue$ = (0,_ngneat_effects__WEBPACK_IMPORTED_MODULE_0__/* .createEffect */ .EH)(() => this.action$.pipe((0,_ngneat_effects__WEBPACK_IMPORTED_MODULE_0__/* .ofType */ .gp)(_camshot_action__WEBPACK_IMPORTED_MODULE_1__/* .CamshotAction */ .K.downloadCamshot), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__/* .tap */ .M)(({
        url
      }) => {
        const isAdded = this.downloadQueueService.add([url]);
        if (isAdded) {
          this.toastrService.info('Camshot added to queue', 'Download Camshot');
        }
      })));
    }
    updateStoreAfterRestore(id) {
      this.camshotStore.update(state => {
        const {
          camshots,
          camshot
        } = state;
        // Update camshots array - restore matching item
        const updatedCamshots = camshots.map(c => c.id === id ? {
          ...c,
          deletedAt: null
        } : c);
        // Update selected camshot if it matches the restored ID
        const updatedCamshot = camshot?.id === id ? {
          ...camshot,
          deletedAt: null
        } : camshot;
        return {
          camshots: updatedCamshots,
          camshot: updatedCamshot
        };
      });
    }
    updateStoreAfterDelete(id, params) {
      this.camshotStore.update(state => {
        const {
          camshots,
          camshot
        } = state;
        const shouldRemove = params.forceDelete ?? false;
        const now = new Date();
        // Update camshots array
        const updatedCamshots = shouldRemove ? camshots.filter(c => c.id !== id) : camshots.map(c => c.id === id ? {
          ...c,
          deletedAt: now
        } : c);
        // Update selected camshot
        const updatedSelectedCamshot = camshot?.id !== id ? camshot : shouldRemove ? null : {
          ...camshot,
          deletedAt: now
        };
        return {
          camshots: updatedCamshots,
          camshot: updatedSelectedCamshot
        };
      });
    }
    static {
      this.ɵfac = function CamshotEffects_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || CamshotEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵinject"] */ .KVO(_ngneat_effects_ng__WEBPACK_IMPORTED_MODULE_8__/* .Actions */ .En), _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵinject"] */ .KVO(_camshot_store__WEBPACK_IMPORTED_MODULE_9__/* .CamshotStore */ .V), _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵinject"] */ .KVO(_shared_services_camshot_service__WEBPACK_IMPORTED_MODULE_10__/* .CamshotService */ .T), _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵinject"] */ .KVO(_shared_services_download_download_queue_service__WEBPACK_IMPORTED_MODULE_11__/* .DownloadQueueService */ .$), _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵinject"] */ .KVO(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_12__/* .ToastrService */ .t), _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵinject"] */ .KVO(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_13__/* .ErrorHandlingService */ .X));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵdefineInjectable"] */ .jDH({
        token: CamshotEffects,
        factory: CamshotEffects.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return CamshotEffects;
})();

/***/ }),

/***/ 28494:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K: () => (/* binding */ extractFilenameFromUrl)
/* harmony export */ });
/**
 * Extract filename from URL
 * @url: string
 * @fallback: string
 * @returns: string
 */
function extractFilenameFromUrl(url, fallback = 'filename') {
  try {
    const parsedUrl = new URL(url);
    return parsedUrl.pathname.split('/').pop() || fallback;
  } catch {
    return fallback;
  }
}

/***/ }),

/***/ 32401:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   r: () => (/* binding */ ActionButton)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23723);

class ActionButton {
  constructor(input) {
    Object.assign(this, {
      loading: (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(false),
      hidden: false,
      disabled: false,
      status: 'primary'
    }, input);
  }
}

/***/ }),

/***/ 32694:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   j: () => (/* binding */ ActionButtonGroupComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _action_button_action_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50278);


function ActionButtonGroupComponent_For_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(0, "plug-action-button", 1);
  }
  if (rf & 2) {
    const button_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("data", ctx_r1.data)("button", button_r1);
  }
}
function ActionButtonGroupComponent_For_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(0, ActionButtonGroupComponent_For_2_Conditional_0_Template, 1, 2, "plug-action-button", 1);
  }
  if (rf & 2) {
    const button_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵconditional"] */ .vxM(button_r1.hidden === false ? 0 : -1);
  }
}
let ActionButtonGroupComponent = /*#__PURE__*/(() => {
  class ActionButtonGroupComponent {
    constructor() {
      this.buttons = [];
    }
    static {
      this.ɵfac = function ActionButtonGroupComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || ActionButtonGroupComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: ActionButtonGroupComponent,
        selectors: [["plug-action-button-group"]],
        inputs: {
          buttons: "buttons",
          data: "data"
        },
        standalone: false,
        decls: 3,
        vars: 0,
        consts: [[1, "action-button-group"], [3, "data", "button"]],
        template: function ActionButtonGroupComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrepeaterCreate"] */ .Z7z(1, ActionButtonGroupComponent_For_2_Template, 1, 1, null, null, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrepeaterTrackByIdentity"] */ .fX1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrepeater"] */ .Dyx(ctx.buttons);
          }
        },
        dependencies: [_action_button_action_button_component__WEBPACK_IMPORTED_MODULE_1__/* .ActionButtonComponent */ .C],
        styles: [".action-button-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  padding: 8px;\n}"],
        changeDetection: 0
      });
    }
  }
  return ActionButtonGroupComponent;
})();

/***/ }),

/***/ 34650:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   t: () => (/* binding */ BehaviorSubject)
/* harmony export */ });
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76528);

class BehaviorSubject extends _Subject__WEBPACK_IMPORTED_MODULE_0__/* .Subject */ .B {
  constructor(_value) {
    super();
    this._value = _value;
  }
  get value() {
    return this.getValue();
  }
  _subscribe(subscriber) {
    const subscription = super._subscribe(subscriber);
    !subscription.closed && subscriber.next(this._value);
    return subscription;
  }
  getValue() {
    const {
      hasError,
      thrownError,
      _value
    } = this;
    if (hasError) {
      throw thrownError;
    }
    this._throwIfClosed();
    return _value;
  }
  next(value) {
    super.next(this._value = value);
  }
}
//# sourceMappingURL=BehaviorSubject.js.map

/***/ }),

/***/ 35226:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ DownloadingState)
/* harmony export */ });
/* harmony import */ var _utilities_extract_filename_from_url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28494);

class DownloadingState {
  handle(options) {
    console.log(`Download in progress for: ${(0,_utilities_extract_filename_from_url__WEBPACK_IMPORTED_MODULE_0__/* .extractFilenameFromUrl */ .K)(options.url)}`);
  }
}

/***/ }),

/***/ 36171:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VideoAvailabilityResolver: () => (/* reexport safe */ _lib_shared_services_resolvers_video_availability_resolver__WEBPACK_IMPORTED_MODULE_0__.v),
/* harmony export */   VideoUiModule: () => (/* reexport safe */ _lib_video_ui_module__WEBPACK_IMPORTED_MODULE_1__.A)
/* harmony export */ });
/* harmony import */ var _lib_shared_services_resolvers_video_availability_resolver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96345);
/* harmony import */ var _lib_video_ui_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(89909);



/***/ }),

/***/ 36284:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ DownloadQueueService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34650);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(84070);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16519);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19248);
/* harmony import */ var _models_video_download_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(75807);
/* harmony import */ var _download_state_factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(26860);
/* harmony import */ var _file_download_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(90835);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(15480);








let DownloadQueueService = /*#__PURE__*/(() => {
  class DownloadQueueService {
    constructor(fileDownloadService, toastrService) {
      this.fileDownloadService = fileDownloadService;
      this.toastrService = toastrService;
      this._queue$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__/* .BehaviorSubject */ .t([]);
      this.queue$ = this._queue$.asObservable();
      this._downloadStatus$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__/* .BehaviorSubject */ .t({});
      this.downloadStatus$ = this._downloadStatus$.asObservable();
      this.MAX_CONCURRENT_DOWNLOADS = 3;
      this.state = _download_state_factory__WEBPACK_IMPORTED_MODULE_1__/* .DownloadStateFactory */ .g.getState(_models_video_download_model__WEBPACK_IMPORTED_MODULE_2__/* .DownloadStatus */ .h.PENDING);
      this.queue$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__/* .filter */ .p)(queue => queue.length > 0)).subscribe(() => this.process());
      this.downloadStatus$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__/* .withLatestFrom */ .E)(this.queue$), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__/* .switchMap */ .n)(([download, queues]) => queues.filter(options => !!download[options.url]).map(options => {
        const {
          status
        } = download[options.url];
        this.state = _download_state_factory__WEBPACK_IMPORTED_MODULE_1__/* .DownloadStateFactory */ .g.getState(status);
        this.state.handle(options, this);
      }))).subscribe();
    }
    add(urls) {
      // Ensure we have valid input
      if (!urls || Array.isArray(urls) && urls.length === 0) {
        return false;
      }
      const currentQueue = this._queue$.value;
      const newUrls = Array.isArray(urls) ? urls : [urls];
      // Filter out URLs already in the queue
      const uniqueUrls = newUrls.filter(url => !currentQueue.some(item => item.url === url));
      if (uniqueUrls.length > 0) {
        // Add new unique URLs to the queue
        const updatedQueue = [...currentQueue, ...uniqueUrls.map(url => ({
          url
        }))];
        this._queue$.next(updatedQueue);
        return true;
      }
      return false;
    }
    remove(url) {
      // Cancel the download
      this.fileDownloadService.cancel(url);
      // Remove the URL from the queue
      const updatedQueue = this._queue$.value.filter(item => item.url !== url);
      this._queue$.next(updatedQueue);
      // Remove the status associated with the URL
      const updatedStatus = {
        ...this._downloadStatus$.value
      };
      delete updatedStatus[url];
      this._downloadStatus$.next(updatedStatus);
      // Trigger the process to ensure downloads continue if needed
      this.process();
    }
    retry(url) {
      const options = this._queue$.value.find(item => item.url === url);
      if (options) {
        this.start(options);
        return true;
      }
      return false;
    }
    process() {
      const activeDownloads = this.getActiveCount();
      const pendingDownloads = this._queue$.value.filter(item => this.getStatus(item.url).status === _models_video_download_model__WEBPACK_IMPORTED_MODULE_2__/* .DownloadStatus */ .h.PENDING);
      pendingDownloads.slice(0, this.MAX_CONCURRENT_DOWNLOADS - activeDownloads).forEach(options => {
        this.state = _download_state_factory__WEBPACK_IMPORTED_MODULE_1__/* .DownloadStateFactory */ .g.getState(_models_video_download_model__WEBPACK_IMPORTED_MODULE_2__/* .DownloadStatus */ .h.PENDING);
        this.state.handle(options, this);
      });
    }
    start(options) {
      this.fileDownloadService.execute(options).subscribe({
        next: progress => {
          this.updateStatus(options.url, {
            status: _models_video_download_model__WEBPACK_IMPORTED_MODULE_2__/* .DownloadStatus */ .h.DOWNLOADING,
            progress
          });
        },
        complete: () => {
          this.updateStatus(options.url, {
            status: _models_video_download_model__WEBPACK_IMPORTED_MODULE_2__/* .DownloadStatus */ .h.COMPLETED
          });
        },
        error: () => {
          this.updateStatus(options.url, {
            status: _models_video_download_model__WEBPACK_IMPORTED_MODULE_2__/* .DownloadStatus */ .h.FAILED
          });
        }
      });
    }
    updateStatus(url, download) {
      const current = this._downloadStatus$.value;
      const currentStatus = {
        ...current,
        [url]: {
          ...current[url],
          ...download
        }
      };
      this._downloadStatus$.next(currentStatus);
    }
    getStatus(url) {
      const fallBackDownload = {
        status: _models_video_download_model__WEBPACK_IMPORTED_MODULE_2__/* .DownloadStatus */ .h.PENDING,
        progress: {
          percentage: 0,
          loaded: 0,
          total: 0
        }
      };
      return this._downloadStatus$.value[url] || fallBackDownload;
    }
    getActiveCount() {
      return Object.values(this._downloadStatus$.value).filter(({
        status
      }) => status === _models_video_download_model__WEBPACK_IMPORTED_MODULE_2__/* .DownloadStatus */ .h.DOWNLOADING).length;
    }
    static {
      this.ɵfac = function DownloadQueueService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || DownloadQueueService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵinject"] */ .KVO(_file_download_service__WEBPACK_IMPORTED_MODULE_7__/* .FileDownloadService */ .y), _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵinject"] */ .KVO(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_8__/* .ToastrService */ .t));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵdefineInjectable"] */ .jDH({
        token: DownloadQueueService,
        factory: DownloadQueueService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return DownloadQueueService;
})();

/***/ }),

/***/ 37268:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ mapOneOrManyArgs)
/* harmony export */ });
/* harmony import */ var _operators_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72368);

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

/***/ 37853:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ FailedState)
/* harmony export */ });
/* harmony import */ var _utilities_extract_filename_from_url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28494);

class FailedState {
  handle(options, contextService) {
    contextService.toastrService.error('PLUGIN.VIDEO.DOWNLOAD_FAILED_FOR', 'PLUGIN.VIDEO.DOWNLOAD', {
      url: (0,_utilities_extract_filename_from_url__WEBPACK_IMPORTED_MODULE_0__/* .extractFilenameFromUrl */ .K)(options.url)
    });
  }
}

/***/ }),

/***/ 38899:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   h: () => (/* binding */ WebShareService)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73014);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34650);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(75857);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8442);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(23723);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(72368);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(20903);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(26860);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(45715);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(15480);








let WebShareService = /*#__PURE__*/(() => {
  class WebShareService {
    constructor(http, toastrService) {
      this.http = http;
      this.toastrService = toastrService;
      this.shareStatusSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__/* .BehaviorSubject */ .t(null);
      this.shareStatus$ = this.shareStatusSubject.asObservable();
      this.checkShareSupport();
    }
    // Check Web Share API Support
    checkShareSupport() {
      this.shareStatusSubject.next(this.isSupported());
    }
    // Verify Web Share API Availability
    isSupported() {
      return 'share' in navigator;
    }
    // Convert URL to File
    urlToFile(url) {
      var _this = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(function* () {
        try {
          // Fetch file from URL
          const response = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_2__/* .firstValueFrom */ ._)(_this.http.get(url, {
            responseType: 'blob'
          }));
          // Extract filename from URL
          const filename = _this.extractFilenameFromUrl(url);
          // Create File object
          return new File([response], filename, {
            type: response.type
          });
        } catch (error) {
          console.error('Failed to convert URL to file:', error);
          return null;
        }
      })();
    }
    // Extract filename from URL
    extractFilenameFromUrl(url) {
      try {
        const parsedUrl = new URL(url);
        const pathname = parsedUrl.pathname;
        return pathname.split('/').pop() || 'shared-file';
      } catch {
        return 'shared-file';
      }
    }
    // Share Method with URL to File Conversion
    share(data) {
      var _this2 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(function* () {
        if (!_this2.isSupported()) {
          _this2.fallbackShare(data);
          return false;
        }
        try {
          // Validate share data
          _this2.validateShareData(data);
          // Prepare share payload
          const sharePayload = {
            title: data.title || document.title,
            text: data.text || '',
            url: data.url || window.location.href
          };
          // Convert file URLs to File objects
          let files = [];
          if (data.fileUrls && data.fileUrls.length > 0) {
            const filePromises = data.fileUrls.map(url => _this2.urlToFile(url));
            files = (yield Promise.all(filePromises)).filter(file => file !== null);
          }
          // Add files to share payload if converted successfully
          if (files.length > 0) {
            sharePayload.files = files;
          }
          // Trigger native share
          yield navigator.share(sharePayload);
          // Track successful share
          _this2.trackShareEvent();
          return true;
        } catch (error) {
          _this2.handleShareError(error);
          return false;
        }
      })();
    }
    // Fallback Sharing Method
    fallbackShare(data) {
      // Clipboard fallback with RxJS
      const shareText = `${data.title}\n${data.text}\n${data.url}`;
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__/* .from */ .H)(navigator.clipboard.writeText(shareText)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .map */ .T)(() => {
        this.showFallbackNotification();
        return true;
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .catchError */ .W)(err => {
        console.error('Fallback share failed:', err);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(false);
      }));
    }
    // Validate Share Data
    validateShareData(data) {
      if (!data.title && !data.text && !data.url && (!data.fileUrls || data.fileUrls.length === 0)) {
        throw new Error('No share content provided');
      }
    }
    // Error Handling
    handleShareError(error) {
      switch (error.name) {
        case 'AbortError':
          this.toastrService.error('PLUGIN.VIDEO.ERROR.SHARE_CANCELED', error.name);
          break;
        case 'DataError':
          this.toastrService.error('PLUGIN.VIDEO.ERROR.INVALID_SHARE_DATA', error.name);
          break;
        case 'NotAllowedError':
          this.toastrService.error('PLUGIN.VIDEO.ERROR.SHARE_NOT_ALLOWED', error.name);
          break;
        default:
          this.toastrService.error('PLUGIN.VIDEO.ERROR.UNEXPECTED_SHARING_ERROR', error);
      }
    }
    // Share Event Tracking
    trackShareEvent() {
      // Implement your analytics tracking
      this.toastrService.success('PLUGIN.VIDEO.SHARED_SUCCESSFULLY');
    }
    // Fallback Notification
    showFallbackNotification() {
      // You can integrate with your preferred notification system
      this.toastrService.success('PLUGIN.VIDEO.COPIED_SUCCESSFULLY');
    }
    static {
      this.ɵfac = function WebShareService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || WebShareService)(_angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵinject"] */ .KVO(_angular_common_http__WEBPACK_IMPORTED_MODULE_8__/* .HttpClient */ .Qq), _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵinject"] */ .KVO(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_9__/* .ToastrService */ .t));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵdefineInjectable"] */ .jDH({
        token: WebShareService,
        factory: WebShareService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return WebShareService;
})();

/***/ }),

/***/ 40999:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: () => (/* binding */ SoundshotListComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(84562);
/* harmony import */ var _ngneat_effects_ng__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(10994);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(95194);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(72368);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9780);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8563);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(84070);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(66174);
/* harmony import */ var _state_soundshot_soundshot_action__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(45009);
/* harmony import */ var _state_soundshot_soundshot_query__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(11383);
/* harmony import */ var _state_soundshot_soundshot_store__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(72138);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(52742);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(56383);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26860);
/* harmony import */ var _ui_core_shared_src_lib_smart_data_layout_no_data_message_no_data_message_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(95959);
/* harmony import */ var _shared_ui_soundshot_soundshot_player_skeleton_soundshot_player_skeleton_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(84786);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(14572);
/* harmony import */ var _shared_ui_soundshot_soundshot_player_soundshot_player_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(99326);



















const SoundshotListComponent_For_4_Defer_2_DepsFn = () => [_shared_ui_soundshot_soundshot_player_soundshot_player_component__WEBPACK_IMPORTED_MODULE_0__/* .SoundshotPlayerComponent */ .M];
const _forTrack0 = ($index, $item) => $item.id;
function SoundshotListComponent_For_4_Defer_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "plug-soundshot-player", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("download", function SoundshotListComponent_For_4_Defer_0_Template_plug_soundshot_player_download_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r3);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx_r3.onDownload($event));
    })("recover", function SoundshotListComponent_For_4_Defer_0_Template_plug_soundshot_player_recover_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r3);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx_r3.onRecover($event));
    })("delete", function SoundshotListComponent_For_4_Defer_0_Template_plug_soundshot_player_delete_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r3);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx_r3.onDelete($event));
    })("hardDelete", function SoundshotListComponent_For_4_Defer_0_Template_plug_soundshot_player_hardDelete_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r3);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx_r3.onHardDelete($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const soundshot_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("soundshot", soundshot_r5);
  }
}
function SoundshotListComponent_For_4_DeferPlaceholder_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(0, "plug-soundshot-player-skeleton");
  }
}
function SoundshotListComponent_For_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(0, SoundshotListComponent_For_4_Defer_0_Template, 1, 1)(1, SoundshotListComponent_For_4_DeferPlaceholder_1_Template, 1, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefer"] */ .nv$(2, 0, SoundshotListComponent_For_4_Defer_2_DepsFn, null, 1, null, null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdeferEnableTimerScheduling"] */ .T$4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdeferOnViewport"] */ .qhs(0, -1);
  }
}
function SoundshotListComponent_ForEmpty_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(0, "ngx-no-data-message", 2);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
    const isLoading_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵreadContextLet"] */ .r8f(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("message", isLoading_r2 ? "Loading soundshots..." : "No soundshots found");
  }
}
let SoundshotListComponent = /*#__PURE__*/(() => {
  let SoundshotListComponent = class SoundshotListComponent {
    constructor(soundshotQuery, soundshotStore, dialogService, actions) {
      this.soundshotQuery = soundshotQuery;
      this.soundshotStore = soundshotStore;
      this.dialogService = dialogService;
      this.actions = actions;
      this.skip = 1;
      this.hasNext = false;
      this.take = 10;
    }
    ngOnInit() {
      this.soundshotQuery.select().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__/* .map */ .T)(({
        count
      }) => count > this.skip * this.take), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__/* .distinctUntilChanged */ .F)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__/* .tap */ .M)(hasNext => this.hasNext = hasNext), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .untilDestroyed */ .s)(this)).subscribe();
    }
    ngOnChanges(changes) {
      if (changes?.timeSlotId) {
        this.reset();
        this.fetchSoundshots();
      }
    }
    onDownload(soundshot) {
      this.actions.dispatch(_state_soundshot_soundshot_action__WEBPACK_IMPORTED_MODULE_6__/* .SoundshotAction */ .a.download(soundshot.fullUrl));
    }
    onRecover(soundshot) {
      this.actions.dispatch(_state_soundshot_soundshot_action__WEBPACK_IMPORTED_MODULE_6__/* .SoundshotAction */ .a.restore(soundshot.id));
    }
    onHardDelete(soundshot) {
      this.dialogService.open(_gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_7__/* .AlertModalComponent */ .Z, {
        context: {
          data: {
            message: 'Are you sure you want to delete this soundshot definitely?',
            title: 'Delete Soundshot Forever'
          }
        },
        hasBackdrop: true
      }).onClose.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__/* .take */ .s)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__/* .filter */ .p)(confirm => confirm === 'yes'), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__/* .tap */ .M)(() => this.actions.dispatch(_state_soundshot_soundshot_action__WEBPACK_IMPORTED_MODULE_6__/* .SoundshotAction */ .a.hardDelete(soundshot.id, {
        forceDelete: true
      })))).subscribe();
    }
    onDelete({
      id
    }) {
      this.dialogService.open(_gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_7__/* .AlertModalComponent */ .Z, {
        context: {
          data: {
            message: 'Are you sure you want to delete this soundshot?',
            title: 'Delete Soundshot'
          }
        },
        hasBackdrop: true
      }).onClose.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__/* .take */ .s)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__/* .filter */ .p)(confirm => confirm === 'yes'), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__/* .tap */ .M)(() => this.actions.dispatch(_state_soundshot_soundshot_action__WEBPACK_IMPORTED_MODULE_6__/* .SoundshotAction */ .a.delete(id)))).subscribe();
    }
    fetchSoundshots() {
      if (!this.timeSlotId) {
        return;
      }
      this.actions.dispatch(_state_soundshot_soundshot_action__WEBPACK_IMPORTED_MODULE_6__/* .SoundshotAction */ .a.fetchAll({
        where: {
          timeSlotId: this.timeSlotId
        },
        relations: ['uploadedBy', 'uploadedBy.user'],
        skip: this.skip,
        take: this.take,
        order: {
          recordedAt: 'DESC'
        }
      }));
    }
    fetchMoreSoundshots() {
      if (this.hasNext && this.unlockInfiniteList) {
        this.skip++;
        this.fetchSoundshots();
      }
    }
    reset() {
      this.skip = 1;
      this.hasNext = false;
      this.soundshotStore.update({
        soundshots: []
      });
    }
    get soundshots$() {
      return this.soundshotQuery.soundshots$;
    }
    get isAvailable$() {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__/* .combineLatest */ .z)([this.soundshotQuery.isAvailable$, this.isLoading$]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__/* .map */ .T)(([isAvailable, isLoading]) => isAvailable && !isLoading));
    }
    get unlockInfiniteList() {
      return this.timeSlotId && this.soundshotQuery.soundshots.length > 0;
    }
    get isLoading$() {
      return this.soundshotQuery.isLoading$;
    }
    ngOnDestroy() {
      this.reset();
    }
    static {
      this.ɵfac = function SoundshotListComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || SoundshotListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_state_soundshot_soundshot_query__WEBPACK_IMPORTED_MODULE_11__/* .SoundshotQuery */ .y), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_state_soundshot_soundshot_store__WEBPACK_IMPORTED_MODULE_12__/* .SoundshotStore */ .B), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_nebular_theme__WEBPACK_IMPORTED_MODULE_13__/* .NbDialogService */ .S0W), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_ngneat_effects_ng__WEBPACK_IMPORTED_MODULE_14__/* .Actions */ .En));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineComponent"] */ .VBU({
        type: SoundshotListComponent,
        selectors: [["plug-soundshot-list"]],
        inputs: {
          timeSlotId: "timeSlotId"
        },
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵNgOnChangesFeature"] */ .OA$],
        decls: 7,
        vars: 8,
        consts: [[500], ["nbInfiniteList", "", 1, "soundshot-list", 3, "bottomThreshold", "threshold", "throttleTime"], ["status", "danger", 3, "message"], [3, "download", "recover", "delete", "hardDelete", "soundshot"]],
        template: function SoundshotListComponent_Template(rf, ctx) {
          if (rf & 1) {
            const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetCurrentView"] */ .RV6();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdeclareLet"] */ .SS7(0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(1, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(2, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("bottomThreshold", function SoundshotListComponent_Template_div_bottomThreshold_2_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx.fetchMoreSoundshots());
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrepeaterCreate"] */ .Z7z(3, SoundshotListComponent_For_4_Template, 4, 0, null, null, _forTrack0, false, SoundshotListComponent_ForEmpty_5_Template, 1, 1, "ngx-no-data-message", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(6, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵstoreLet"] */ .bH3(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(1, 3, ctx.isLoading$));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("threshold", 500)("throttleTime", 300);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrepeater"] */ .Dyx(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(6, 6, ctx.soundshots$));
          }
        },
        dependencies: [_ui_core_shared_src_lib_smart_data_layout_no_data_message_no_data_message_component__WEBPACK_IMPORTED_MODULE_15__/* .NoDataMessageComponent */ ._, _nebular_theme__WEBPACK_IMPORTED_MODULE_13__/* .NbInfiniteListDirective */ .oyd, _shared_ui_soundshot_soundshot_player_skeleton_soundshot_player_skeleton_component__WEBPACK_IMPORTED_MODULE_16__/* .SoundshotPlayerSkeletonComponent */ .v, _angular_common__WEBPACK_IMPORTED_MODULE_17__/* .AsyncPipe */ .Jj],
        styles: [".soundshot-list[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  overflow: auto;\n}"],
        changeDetection: 0
      });
    }
  };
  SoundshotListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_18__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__/* .UntilDestroy */ .d)({
    checkProperties: true
  }), (0,tslib__WEBPACK_IMPORTED_MODULE_18__/* .__metadata */ .Sn)("design:paramtypes", [_state_soundshot_soundshot_query__WEBPACK_IMPORTED_MODULE_11__/* .SoundshotQuery */ .y, _state_soundshot_soundshot_store__WEBPACK_IMPORTED_MODULE_12__/* .SoundshotStore */ .B, _nebular_theme__WEBPACK_IMPORTED_MODULE_13__/* .NbDialogService */ .S0W, _ngneat_effects_ng__WEBPACK_IMPORTED_MODULE_14__/* .Actions */ .En])], SoundshotListComponent);
  return SoundshotListComponent;
})();


/***/ }),

/***/ 42857:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K: () => (/* binding */ CamshotAction)
/* harmony export */ });
/* harmony import */ var _ngneat_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85308);

class CamshotAction {
  static {
    this.fetchCamshots = (0,_ngneat_effects__WEBPACK_IMPORTED_MODULE_0__/* .createAction */ .VP)('[Camshots] Fetch Camshots', params => ({
      params
    }));
  }
  static {
    this.fetchOneCamshot = (0,_ngneat_effects__WEBPACK_IMPORTED_MODULE_0__/* .createAction */ .VP)('[Camshots] Fetch One Camshot', (id, params) => ({
      id,
      params
    }));
  }
  static {
    this.deleteCamshot = (0,_ngneat_effects__WEBPACK_IMPORTED_MODULE_0__/* .createAction */ .VP)('[Camshots] Delete Camshot', (id, params) => ({
      id,
      params
    }));
  }
  static {
    this.hardDeleteCamshot = (0,_ngneat_effects__WEBPACK_IMPORTED_MODULE_0__/* .createAction */ .VP)('[Camshots] Hard Delete Camshot', (id, params) => ({
      id,
      params
    }));
  }
  static {
    this.restoreCamshot = (0,_ngneat_effects__WEBPACK_IMPORTED_MODULE_0__/* .createAction */ .VP)('[Camshots] Restore Camshot', id => ({
      id
    }));
  }
  static {
    this.downloadCamshot = (0,_ngneat_effects__WEBPACK_IMPORTED_MODULE_0__/* .createAction */ .VP)('[Camshots] Download Camshot', url => ({
      url
    }));
  }
}

/***/ }),

/***/ 45009:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ SoundshotAction)
/* harmony export */ });
/* harmony import */ var _ngneat_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85308);

class SoundshotAction {
  static {
    this.fetchAll = (0,_ngneat_effects__WEBPACK_IMPORTED_MODULE_0__/* .createAction */ .VP)('[Soundshots] Fetch Soundshots', params => ({
      params
    }));
  }
  static {
    this.fetchOne = (0,_ngneat_effects__WEBPACK_IMPORTED_MODULE_0__/* .createAction */ .VP)('[Soundshots] Fetch One Soundshot', (id, params) => ({
      id,
      params
    }));
  }
  static {
    this.delete = (0,_ngneat_effects__WEBPACK_IMPORTED_MODULE_0__/* .createAction */ .VP)('[Soundshots] Delete Soundshot', (id, params) => ({
      id,
      params
    }));
  }
  static {
    this.hardDelete = (0,_ngneat_effects__WEBPACK_IMPORTED_MODULE_0__/* .createAction */ .VP)('[Soundshots] Hard Delete Soundshot', (id, params) => ({
      id,
      params
    }));
  }
  static {
    this.restore = (0,_ngneat_effects__WEBPACK_IMPORTED_MODULE_0__/* .createAction */ .VP)('[Soundshots] Restore Soundshot', id => ({
      id
    }));
  }
  static {
    this.download = (0,_ngneat_effects__WEBPACK_IMPORTED_MODULE_0__/* .createAction */ .VP)('[Soundshots] Download Soundshot', url => ({
      urls: [url]
    }));
  }
}

/***/ }),

/***/ 47730:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ CamshotItemComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _models_action_button_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32401);
/* harmony import */ var _models_camshot_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69288);
/* harmony import */ var _state_camshot_camshot_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21823);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(56383);
/* harmony import */ var _ui_core_shared_src_lib_directives_img_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(71466);
/* harmony import */ var _video_actions_buttons_action_button_group_action_button_group_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(32694);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(14572);
/* harmony import */ var _ui_core_shared_src_lib_pipes_file_size_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(31571);











const _c0 = () => ({
  type: "zoom"
});
const _c1 = a0 => ({
  animation: a0
});
function CamshotItemComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("src", ctx_r0.camshot.thumbUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵsanitizeUrl"] */ .B4B)("alt", ctx_r0.camshot.title);
  }
}
function CamshotItemComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "nb-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(3, "fileSize");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(3, 1, ctx_r0.camshot.size), " ");
  }
}
function CamshotItemComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(0, "plug-action-button-group", 13);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("buttons", ctx_r0.buttons)("data", ctx_r0.camshot);
  }
}
let CamshotItemComponent = /*#__PURE__*/(() => {
  class CamshotItemComponent {
    constructor(query) {
      this.query = query;
      this.view = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .bkB();
      this.download = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .bkB();
      this.recover = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .bkB();
      this.delete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .bkB();
      this.hardDelete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .bkB();
      this.buttons = [];
    }
    set camshot(value) {
      this._camshot = new _models_camshot_model__WEBPACK_IMPORTED_MODULE_1__/* .Camshot */ .w(value);
      this.updateActions();
    }
    get camshot() {
      return this._camshot;
    }
    updateActions() {
      const commonActions = [new _models_action_button_model__WEBPACK_IMPORTED_MODULE_2__/* .ActionButton */ .r({
        label: 'BUTTONS.VIEW',
        icon: 'eye-outline',
        status: 'basic',
        action: camshot => this.view.emit(camshot)
      }), new _models_action_button_model__WEBPACK_IMPORTED_MODULE_2__/* .ActionButton */ .r({
        icon: 'download-outline',
        label: 'BUTTONS.DOWNLOAD',
        loading: this.query.downloading$,
        status: 'info',
        action: camshot => this.download.emit(camshot)
      })];
      const statusSpecificActions = this.camshot.isDeleted ? [new _models_action_button_model__WEBPACK_IMPORTED_MODULE_2__/* .ActionButton */ .r({
        icon: 'refresh-outline',
        label: 'BUTTONS.RECOVER',
        status: 'success',
        loading: this.query.restoring$,
        action: camshot => this.recover.emit(camshot)
      }), new _models_action_button_model__WEBPACK_IMPORTED_MODULE_2__/* .ActionButton */ .r({
        icon: 'trash-2-outline',
        label: 'Hard Delete',
        status: 'danger',
        loading: this.query.deleting$,
        action: camshot => this.hardDelete.emit(camshot)
      })] : [new _models_action_button_model__WEBPACK_IMPORTED_MODULE_2__/* .ActionButton */ .r({
        icon: 'trash-outline',
        label: 'BUTTONS.DELETE',
        loading: this.query.deleting$,
        status: 'danger',
        action: camshot => this.delete.emit(camshot)
      })];
      this.buttons = [...commonActions, ...statusSpecificActions];
    }
    static {
      this.ɵfac = function CamshotItemComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || CamshotItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_state_camshot_camshot_query__WEBPACK_IMPORTED_MODULE_3__/* .CamshotQuery */ .W));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: CamshotItemComponent,
        selectors: [["plug-camshot-item"]],
        inputs: {
          camshot: "camshot"
        },
        outputs: {
          view: "view",
          download: "download",
          recover: "recover",
          delete: "delete",
          hardDelete: "hardDelete"
        },
        standalone: false,
        decls: 15,
        vars: 14,
        consts: [["actions", ""], [1, "camshot-item"], [1, "thumbnail"], [1, "details"], [1, "title"], [1, "meta"], [1, "date"], ["icon", "clock-outline"], [1, "size"], [1, "actions"], ["nbPopoverPlacement", "bottom", "icon", "more-vertical-outline", 3, "nbPopover", "options"], [3, "src", "alt"], ["icon", "hard-drive-outline"], [3, "buttons", "data"]],
        template: function CamshotItemComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, CamshotItemComponent_Conditional_1_Template, 2, 2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(2, "div", 3)(3, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(5, "div", 5)(6, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(7, "nb-icon", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(9, "date");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(10, CamshotItemComponent_Conditional_10_Template, 4, 3, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(11, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(12, "nb-icon", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(13, CamshotItemComponent_ng_template_13_Template, 1, 2, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplateRefExtractor"] */ .C5r);
          }
          if (rf & 2) {
            const actions_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵclassProp"] */ .AVh("deleted", ctx.camshot.isDeleted);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵconditional"] */ .vxM(ctx.camshot.thumbUrl ? 1 : -1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(ctx.camshot.title);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind2"] */ .i5U(9, 8, ctx.camshot.recordedAt, "medium"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵconditional"] */ .vxM(ctx.camshot.size ? 10 : -1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("nbPopover", actions_r2)("options", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction1"] */ .eq3(12, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction0"] */ .lJ4(11, _c0)));
          }
        },
        dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbIconComponent */ .tHu, _ui_core_shared_src_lib_directives_img_directive__WEBPACK_IMPORTED_MODULE_5__/* .ImgDirective */ .z, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbPopoverDirective */ .vs7, _video_actions_buttons_action_button_group_action_button_group_component__WEBPACK_IMPORTED_MODULE_6__/* .ActionButtonGroupComponent */ .j, _angular_common__WEBPACK_IMPORTED_MODULE_7__/* .DatePipe */ .vh, _ui_core_shared_src_lib_pipes_file_size_pipe__WEBPACK_IMPORTED_MODULE_8__/* .FileSizePipe */ .s],
        styles: [".camshot-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  transition: all 0.3s ease;\n}\n.camshot-item.deleted[_ngcontent-%COMP%] {\n  opacity: 0.7;\n  background: rgba(255, 0, 0, 0.05);\n}\n.camshot-item[_ngcontent-%COMP%]:hover {\n  box-shadow: var(--gauzy-shadow);\n  transform: translateY(-2px);\n}\n.camshot-item[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  max-width: 50%;\n  margin-right: 1rem;\n  border-radius: var(--border-radius);\n  overflow: hidden;\n  flex-shrink: 0;\n}\n.camshot-item[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.camshot-item[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%] {\n  flex-grow: 1;\n}\n.camshot-item[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  margin: 0 0 0.5rem 0;\n  font-size: 1rem;\n  font-weight: 600;\n}\n.camshot-item[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n  font-size: 0.875rem;\n  color: var(--gauzy-text-color-2);\n}\n.camshot-item[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .meta[_ngcontent-%COMP%]   nb-icon[_ngcontent-%COMP%] {\n  margin-right: 0.25rem;\n}\n.camshot-item[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  cursor: pointer;\n}\n\n@media (max-width: 1435px) {\n  .thumbnail[_ngcontent-%COMP%] {\n    max-width: 300px !important;\n    max-height: 200px;\n  }\n}"],
        changeDetection: 0
      });
    }
  }
  return CamshotItemComponent;
})();

/***/ }),

/***/ 50174:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   V: () => (/* binding */ VideoItemSkeletonComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);

let VideoItemSkeletonComponent = /*#__PURE__*/(() => {
  class VideoItemSkeletonComponent {
    static {
      this.ɵfac = function VideoItemSkeletonComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || VideoItemSkeletonComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: VideoItemSkeletonComponent,
        selectors: [["plug-video-item-skeleton"]],
        standalone: false,
        decls: 11,
        vars: 0,
        consts: [["id", "item", 1, "loading-skeleton"], [1, "video-player"], [1, "skeleton-box", "video-placeholder"], [1, "video-info"], [1, "skeleton-circle", "avatar-placeholder"], [1, "info"], [1, "skeleton-box", "title-placeholder"], [1, "skeleton-box", "author-placeholder"], [1, "skeleton-box", "date-placeholder"], [1, "actions"], [1, "skeleton-box", "actions-placeholder"]],
        template: function VideoItemSkeletonComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 0)(1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(5, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(6, "div", 6)(7, "div", 7)(8, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(9, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(10, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
          }
        },
        styles: [".loading-skeleton[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  animation: _ngcontent-%COMP%_pulse 1.5s infinite;\n  border-radius: var(--border-radius);\n}\n.loading-skeleton[_ngcontent-%COMP%]   .video-player[_ngcontent-%COMP%]   .video-placeholder[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 150px;\n  background: var(--gauzy-card-1);\n  border-radius: 4px;\n}\n.loading-skeleton[_ngcontent-%COMP%]   .video-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.loading-skeleton[_ngcontent-%COMP%]   .video-info[_ngcontent-%COMP%]   .avatar-placeholder[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  background: var(--gauzy-card-1);\n  border-radius: 50%;\n}\n.loading-skeleton[_ngcontent-%COMP%]   .video-info[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.loading-skeleton[_ngcontent-%COMP%]   .video-info[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .title-placeholder[_ngcontent-%COMP%], \n.loading-skeleton[_ngcontent-%COMP%]   .video-info[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .author-placeholder[_ngcontent-%COMP%], \n.loading-skeleton[_ngcontent-%COMP%]   .video-info[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .date-placeholder[_ngcontent-%COMP%] {\n  height: 10px;\n  background: var(--gauzy-card-1);\n  border-radius: 4px;\n  margin-bottom: 8px;\n}\n.loading-skeleton[_ngcontent-%COMP%]   .video-info[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .title-placeholder[_ngcontent-%COMP%]:last-child, \n.loading-skeleton[_ngcontent-%COMP%]   .video-info[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .author-placeholder[_ngcontent-%COMP%]:last-child, \n.loading-skeleton[_ngcontent-%COMP%]   .video-info[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .date-placeholder[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.loading-skeleton[_ngcontent-%COMP%]   .video-info[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .title-placeholder[_ngcontent-%COMP%] {\n  width: 60%;\n}\n.loading-skeleton[_ngcontent-%COMP%]   .video-info[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .author-placeholder[_ngcontent-%COMP%] {\n  width: 40%;\n}\n.loading-skeleton[_ngcontent-%COMP%]   .video-info[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .date-placeholder[_ngcontent-%COMP%] {\n  width: 30%;\n}\n.loading-skeleton[_ngcontent-%COMP%]   .video-info[_ngcontent-%COMP%]   .actions-placeholder[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  background: var(--gauzy-card-1);\n  border-radius: 50%;\n}\n\n@keyframes _ngcontent-%COMP%_pulse {\n  0% {\n    background-color: var(--gauzy-card-1);\n  }\n  50% {\n    background-color: var(--gauzy-card-2);\n  }\n  100% {\n    background-color: var(--gauzy-card-1);\n  }\n}\n.vertical[_nghost-%COMP%]   .loading-skeleton[_ngcontent-%COMP%] {\n  flex-direction: row;\n}\n.vertical[_nghost-%COMP%]   .loading-skeleton[_ngcontent-%COMP%]   .video-player[_ngcontent-%COMP%] {\n  min-width: 200px;\n  max-width: 300px;\n}\n.vertical[_nghost-%COMP%]   .loading-skeleton[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  min-width: 150px;\n}\n.vertical[_nghost-%COMP%]   .loading-skeleton[_ngcontent-%COMP%]   .title-placeholder[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.vertical[_nghost-%COMP%]   .loading-skeleton[_ngcontent-%COMP%]   .avatar-placeholder[_ngcontent-%COMP%] {\n  display: none;\n}\n@media (max-width: 1435px) {\n  .vertical[_nghost-%COMP%]   .loading-skeleton[_ngcontent-%COMP%] {\n    max-width: unset;\n  }\n  .vertical[_nghost-%COMP%]   .loading-skeleton[_ngcontent-%COMP%]   .title-placeholder[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  .vertical[_nghost-%COMP%]   .loading-skeleton[_ngcontent-%COMP%]   .title-placeholder[_ngcontent-%COMP%], \n   .vertical[_nghost-%COMP%]   .loading-skeleton[_ngcontent-%COMP%]   .author-placeholder[_ngcontent-%COMP%], \n   .vertical[_nghost-%COMP%]   .loading-skeleton[_ngcontent-%COMP%]   .date-placeholder[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}"],
        changeDetection: 0
      });
    }
  }
  return VideoItemSkeletonComponent;
})();

/***/ }),

/***/ 50278:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ ActionButtonComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73014);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56383);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14572);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19223);





function ActionButtonComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(0, "nb-icon", 1);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("icon", ctx_r0.button.icon);
  }
}
function ActionButtonComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(1, "translate");
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(1, 1, ctx_r0.button.label), " ");
  }
}
let ActionButtonComponent = /*#__PURE__*/(() => {
  class ActionButtonComponent {
    triggerAction() {
      var _this = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(function* () {
        if (!_this.button.action) {
          return;
        }
        yield _this.button.action(_this.data);
      })();
    }
    static {
      this.ɵfac = function ActionButtonComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || ActionButtonComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: ActionButtonComponent,
        selectors: [["plug-action-button"]],
        inputs: {
          button: "button",
          data: "data"
        },
        standalone: false,
        decls: 4,
        vars: 7,
        consts: [["nbButton", "", "nbSpinnerStatus", "success", 1, "action", 3, "click", "nbSpinner", "status", "disabled"], [3, "icon"]],
        template: function ActionButtonComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "button", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(1, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function ActionButtonComponent_Template_button_click_0_listener() {
              return ctx.triggerAction();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(2, ActionButtonComponent_Conditional_2_Template, 1, 1, "nb-icon", 1)(3, ActionButtonComponent_Conditional_3_Template, 2, 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("nbSpinner", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(1, 5, ctx.button.loading))("status", ctx.button.status)("disabled", ctx.button.disabled);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵconditional"] */ .vxM(ctx.button.icon ? 2 : -1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵconditional"] */ .vxM(ctx.button.label ? 3 : -1);
          }
        },
        dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbIconComponent */ .tHu, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbButtonComponent */ .YP2, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbSpinnerDirective */ .zwc, _angular_common__WEBPACK_IMPORTED_MODULE_3__/* .AsyncPipe */ .Jj, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__/* .TranslatePipe */ .D9],
        styles: ["\n\nbutton[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.75rem 1.25rem;\n  font-size: 1rem;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n\n\n\n[nbButton][_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n\n\n\n.action[_ngcontent-%COMP%] {\n  box-shadow: var(--gauzy-shadow);\n  border: none;\n  \n\n  \n\n  \n\n  \n\n}\n.action[nbButton].size-medium.icon-start.icon-end[_ngcontent-%COMP%] {\n  padding: 0.5rem 0.425rem;\n}\n.action[nbButton].appearance-filled[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n  color: var(--gauzy-text-color);\n}\n.action[nbButton].appearance-filled.status-danger[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n  color: var(--color-danger-default);\n}\n.action[nbButton].appearance-filled.status-basic[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n  color: var(--gauzy-text-color-2);\n}\n.action[nbButton].appearance-filled.status-warning[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n  color: var(--color-warning-default);\n}\n.action[nbButton].appearance-filled.status-success[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n  color: var(--color-success-default);\n}\n.action[nbButton].appearance-filled.status-info[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n  color: var(--color-info-default);\n}\n.action[nbButton].appearance-filled.status-primary[_ngcontent-%COMP%] {\n  background-color: var(--gauzy-card-2);\n  color: var(--text-primary-color);\n}\n.action[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.15);\n}\n.action[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n  box-shadow: var(--gauzy-shadow);\n}"],
        changeDetection: 0
      });
    }
  }
  return ActionButtonComponent;
})();

/***/ }),

/***/ 51075:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: () => (/* binding */ VideoQuery)
/* harmony export */ });
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71732);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26860);
/* harmony import */ var _video_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(72334);




let VideoQuery = /*#__PURE__*/(() => {
  class VideoQuery extends _datorama_akita__WEBPACK_IMPORTED_MODULE_0__/* .Query */ .XK {
    constructor(videoStore) {
      super(videoStore);
      this.videoStore = videoStore;
      this.videos$ = this.select(state => state.videos);
      this.video$ = this.select(state => state.video);
      this.count$ = this.select(state => state.count);
      this.isLoading$ = this.selectLoading();
      this.isAvailable$ = this.select(state => state.count > 0);
    }
    get video() {
      return this.getValue().video;
    }
    get videos() {
      return this.getValue().videos || [];
    }
    get count() {
      return this.getValue().count || 0;
    }
    static {
      this.ɵfac = function VideoQuery_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || VideoQuery)(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵinject"] */ .KVO(_video_store__WEBPACK_IMPORTED_MODULE_2__/* .VideoStore */ .V));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineInjectable"] */ .jDH({
        token: VideoQuery,
        factory: VideoQuery.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return VideoQuery;
})();

/***/ }),

/***/ 52443:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O: () => (/* binding */ VideoDownloadManagerComponent)
/* harmony export */ });
/* harmony import */ var _state_video_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15325);
/* harmony import */ var _shared_models_video_download_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(75807);
/* harmony import */ var _shared_utilities_extract_filename_from_url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28494);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _shared_services_download_download_queue_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(36284);
/* harmony import */ var _ngneat_effects_ng__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10994);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(56383);
/* harmony import */ var _ui_core_shared_src_lib_smart_data_layout_no_data_message_no_data_message_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(95959);
/* harmony import */ var _shared_ui_video_actions_buttons_action_button_action_button_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(50278);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(14572);
/* harmony import */ var _ui_core_shared_src_lib_pipes_file_size_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(31571);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(19223);














const _forTrack0 = ($index, $item) => $item.url;
function VideoDownloadManagerComponent_Conditional_0_For_7_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(0, "plug-action-button", 11);
  }
  if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("button", ctx_r1.retryButton)("data", item_r1.url);
  }
}
function VideoDownloadManagerComponent_Conditional_0_For_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 3)(1, "div", 4)(2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(3, "nb-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(4, "div", 7)(5, "h6", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(7, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(9, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(10, "fileSize");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(11, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(12, "fileSize");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(13, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(14, VideoDownloadManagerComponent_Conditional_0_For_7_Conditional_14_Template, 1, 2, "plug-action-button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(15, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(16, "plug-action-button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(17, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(18, "nb-progress-bar", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(19, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(20, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(21, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(23, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
  }
  if (rf & 2) {
    let tmp_12_0;
    let tmp_13_0;
    let tmp_16_0;
    let tmp_17_0;
    let tmp_18_0;
    const item_r1 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(ctx_r1.extractFilename(item_r1.url));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate2"] */ .Lme(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(10, 11, ((tmp_12_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(9, 9, ctx_r1.downloadStatus$)[item_r1.url]) == null ? null : tmp_12_0.progress == null ? null : tmp_12_0.progress.loaded) || 0), " / ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(12, 15, (tmp_12_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(11, 13, ctx_r1.downloadStatus$)[item_r1.url]) == null ? null : tmp_12_0.progress == null ? null : tmp_12_0.progress.total) || "---", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵconditional"] */ .vxM(((tmp_13_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(15, 17, ctx_r1.downloadStatus$)[item_r1.url]) == null ? null : tmp_13_0.status) === "FAILED" ? 14 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("button", ctx_r1.removeButton)("data", item_r1.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("value", ((tmp_16_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(19, 19, ctx_r1.downloadStatus$)[item_r1.url]) == null ? null : tmp_16_0.progress == null ? null : tmp_16_0.progress.percentage) || 0)("status", ctx_r1.getStatusColor((tmp_17_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(20, 21, ctx_r1.downloadStatus$)[item_r1.url]) == null ? null : tmp_17_0.status));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", ((tmp_18_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(23, 23, ctx_r1.downloadStatus$)[item_r1.url]) == null ? null : tmp_18_0.progress == null ? null : tmp_18_0.progress.percentage) || 0, "% ");
  }
}
function VideoDownloadManagerComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "nb-card", 0)(1, "nb-card-header", 2)(2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(5, "nb-card-body");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrepeaterCreate"] */ .Z7z(6, VideoDownloadManagerComponent_Conditional_0_For_7_Template, 24, 25, "div", 3, _forTrack0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(8, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(4, 1, "PLUGIN.VIDEO.DOWNLOADS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrepeater"] */ .Dyx(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(8, 3, ctx_r1.downloadQueue$));
  }
}
function VideoDownloadManagerComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "ngx-no-data-message", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("message", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(2, 1, "PLUGIN.VIDEO.NO_VIDEO_DOWNLOAD"));
  }
}
let VideoDownloadManagerComponent = /*#__PURE__*/(() => {
  class VideoDownloadManagerComponent {
    constructor(downloadQueueService, actions) {
      this.downloadQueueService = downloadQueueService;
      this.actions = actions;
      this.retryButton = {
        icon: 'refresh-outline',
        label: 'BUTTONS.RETRY',
        status: 'primary',
        action: this.retryDownload.bind(this)
      };
      this.removeButton = {
        icon: 'trash-outline',
        status: 'danger',
        action: this.removeFromQueue.bind(this)
      };
    }
    get downloadQueue$() {
      return this.downloadQueueService.queue$;
    }
    get downloadStatus$() {
      return this.downloadQueueService.downloadStatus$;
    }
    removeFromQueue(url) {
      this.actions.dispatch(_state_video_action__WEBPACK_IMPORTED_MODULE_1__/* .VideoActions */ .F.removeFromQueue(url));
    }
    retryDownload(url) {
      this.actions.dispatch(_state_video_action__WEBPACK_IMPORTED_MODULE_1__/* .VideoActions */ .F.retryDownload(url));
    }
    extractFilename(url) {
      return (0,_shared_utilities_extract_filename_from_url__WEBPACK_IMPORTED_MODULE_2__/* .extractFilenameFromUrl */ .K)(url);
    }
    getStatusColor(status) {
      switch (status) {
        case _shared_models_video_download_model__WEBPACK_IMPORTED_MODULE_3__/* .DownloadStatus */ .h.DOWNLOADING:
          return 'primary';
        case _shared_models_video_download_model__WEBPACK_IMPORTED_MODULE_3__/* .DownloadStatus */ .h.COMPLETED:
          return 'success';
        case _shared_models_video_download_model__WEBPACK_IMPORTED_MODULE_3__/* .DownloadStatus */ .h.FAILED:
          return 'danger';
        default:
          return 'basic';
      }
    }
    static {
      this.ɵfac = function VideoDownloadManagerComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || VideoDownloadManagerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_shared_services_download_download_queue_service__WEBPACK_IMPORTED_MODULE_4__/* .DownloadQueueService */ .$), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_ngneat_effects_ng__WEBPACK_IMPORTED_MODULE_5__/* .Actions */ .En));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: VideoDownloadManagerComponent,
        selectors: [["plug-video-download-manager"]],
        standalone: false,
        decls: 3,
        vars: 3,
        consts: [[1, "main"], [1, "no-downloads"], [1, "pb-0"], [1, "download-container"], [1, "download-item"], [1, "file-info"], ["icon", "file-text-outline"], [1, "file-details"], [1, "file-name"], [1, "file-size"], [1, "actions"], [3, "button", "data"], [1, "progress-section"], [3, "value", "status"], [1, "progress-percentage"], [3, "message"]],
        template: function VideoDownloadManagerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(0, VideoDownloadManagerComponent_Conditional_0_Template, 9, 5, "nb-card", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(1, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(2, VideoDownloadManagerComponent_Conditional_2_Template, 3, 3, "div", 1);
          }
          if (rf & 2) {
            let tmp_0_0;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵconditional"] */ .vxM(((tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(1, 1, ctx.downloadQueue$)) == null ? null : tmp_0_0.length) > 0 ? 0 : 2);
          }
        },
        dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_6__/* .NbCardComponent */ .SrT, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__/* .NbCardBodyComponent */ .KH5, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__/* .NbCardHeaderComponent */ .zJv, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__/* .NbIconComponent */ .tHu, _ui_core_shared_src_lib_smart_data_layout_no_data_message_no_data_message_component__WEBPACK_IMPORTED_MODULE_7__/* .NoDataMessageComponent */ ._, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__/* .NbProgressBarComponent */ .c0m, _shared_ui_video_actions_buttons_action_button_action_button_component__WEBPACK_IMPORTED_MODULE_8__/* .ActionButtonComponent */ .C, _angular_common__WEBPACK_IMPORTED_MODULE_9__/* .AsyncPipe */ .Jj, _ui_core_shared_src_lib_pipes_file_size_pipe__WEBPACK_IMPORTED_MODULE_10__/* .FileSizePipe */ .s, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__/* .TranslatePipe */ .D9],
        styles: ["nb-card-body[_ngcontent-%COMP%] {\n  padding: 1rem;\n  gap: 1rem;\n  display: flex;\n  flex-direction: column;\n}\n\n.download-container[_ngcontent-%COMP%] {\n  background: var(--gauzy-card-2);\n  border-radius: var(--border-radius);\n  padding: 1rem;\n  background-color: var(--gauzy-card-2);\n  width: 100%;\n}\n\n.download-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n}\n\n.file-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n}\n.file-info[_ngcontent-%COMP%]   nb-icon[_ngcontent-%COMP%] {\n  font-size: 32px;\n}\n\n.file-details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.file-name[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.progress-section[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 1rem;\n  width: 100%;\n}\n\n.progress-percentage[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #666;\n}\n\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n}\n\nnb-progress-bar[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n[_nghost-%COMP%]     .progress-container {\n  height: 5px !important;\n}\n\n.no-downloads[_ngcontent-%COMP%], \n.main[_ngcontent-%COMP%] {\n  min-width: 400px;\n}"]
      });
    }
  }
  return VideoDownloadManagerComponent;
})();

/***/ }),

/***/ 52598:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   i: () => (/* binding */ VideoItemComponent)
/* harmony export */ });
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73014);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(55101);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(84070);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8563);
/* harmony import */ var _state_video_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15325);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9620);
/* harmony import */ var _ngneat_effects_ng__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(10994);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(56383);
/* harmony import */ var _ui_core_shared_src_lib_components_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(32386);
/* harmony import */ var _video_player_video_player_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(56742);
/* harmony import */ var _video_actions_buttons_action_button_group_action_button_group_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(32694);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(14572);
/* harmony import */ var _ui_core_shared_src_lib_pipes_duration_format_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(33867);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(19223);

















const _c0 = () => ({
  type: "zoom"
});
const _c1 = a0 => ({
  animation: a0
});
function VideoItemComponent_Conditional_0_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(0, "ngx-avatar", 6);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("src", ctx_r1.video.uploadedBy == null ? null : ctx_r1.video.uploadedBy.user.imageUrl)("employee", ctx_r1.video.uploadedBy);
  }
}
function VideoItemComponent_Conditional_0_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(0, "plug-action-button-group", 13);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("buttons", ctx_r1.buttons)("data", ctx_r1.video);
  }
}
function VideoItemComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 1)(1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function VideoItemComponent_Conditional_0_Template_div_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx_r1.open(ctx_r1.video));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(2, "plug-video-player", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(5, "durationFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(7, VideoItemComponent_Conditional_0_Conditional_7_Template, 1, 2, "ngx-avatar", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(8, "div", 7)(9, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(11, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(13, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(15, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(16, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(17, "nb-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(18, VideoItemComponent_Conditional_0_ng_template_18_Template, 1, 2, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplateRefExtractor"] */ .C5r);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const actions_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(19);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("src", ctx_r1.video.fullUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(5, 8, ctx_r1.video.duration), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵconditional"] */ .vxM(ctx_r1.video.uploadedBy ? 7 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", ctx_r1.video.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", ctx_r1.video.uploadedBy == null ? null : ctx_r1.video.uploadedBy.fullName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind2"] */ .i5U(15, 10, ctx_r1.video.recordedAt, "medium"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("nbPopover", actions_r3)("options", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction1"] */ .eq3(14, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction0"] */ .lJ4(13, _c0)));
  }
}
function VideoItemComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(2, 1, "PLUGIN.VIDEO.NO_VIDEO"));
  }
}
let VideoItemComponent = /*#__PURE__*/(() => {
  class VideoItemComponent {
    constructor(router, route, actions, dialogService) {
      this.router = router;
      this.route = route;
      this.actions = actions;
      this.dialogService = dialogService;
      this.buttons = [{
        label: 'BUTTONS.VIEW',
        icon: 'eye-outline',
        status: 'basic',
        hidden: false,
        disabled: false,
        action: this.open.bind(this)
      }, {
        label: 'BUTTONS.DOWNLOAD',
        icon: 'download-outline',
        status: 'primary',
        hidden: false,
        disabled: false,
        action: this.download.bind(this)
      }, {
        label: 'BUTTONS.SHARE',
        icon: 'share-outline',
        status: 'success',
        hidden: false,
        disabled: false,
        action: this.share.bind(this)
      }, {
        label: 'BUTTONS.DELETE',
        icon: 'trash-2-outline',
        status: 'danger',
        hidden: false,
        disabled: false,
        action: this.delete.bind(this)
      }];
    }
    open(_x) {
      var _this = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(function* ({
        id
      }) {
        const {
          reuseRoute
        } = _this.route.snapshot.data;
        yield _this.router.navigate(reuseRoute ? ['..', id] : [id], {
          relativeTo: _this.route
        });
      }).apply(this, arguments);
    }
    share(video) {
      this.actions.dispatch(_state_video_action__WEBPACK_IMPORTED_MODULE_2__/* .VideoActions */ .F.shareVideos({
        title: video.title,
        text: video.description,
        fileUrls: [video.fullUrl]
      }));
    }
    delete(video) {
      this.dialogService.open(_gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_3__/* .DeleteConfirmationComponent */ .u, {
        hasBackdrop: true,
        context: {
          recordType: 'video',
          isRecord: false
        }
      }).onClose.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__/* .take */ .s)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__/* .filter */ .p)(Boolean), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__/* .tap */ .M)(() => this.actions.dispatch(_state_video_action__WEBPACK_IMPORTED_MODULE_2__/* .VideoActions */ .F.deleteVideo(video.id)))).subscribe();
    }
    download({
      fullUrl
    }) {
      this.actions.dispatch(_state_video_action__WEBPACK_IMPORTED_MODULE_2__/* .VideoActions */ .F.addToQueue(fullUrl));
    }
    static {
      this.ɵfac = function VideoItemComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || VideoItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_router__WEBPACK_IMPORTED_MODULE_7__/* .Router */ .Ix), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_router__WEBPACK_IMPORTED_MODULE_7__/* .ActivatedRoute */ .nX), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_ngneat_effects_ng__WEBPACK_IMPORTED_MODULE_8__/* .Actions */ .En), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbDialogService */ .S0W));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: VideoItemComponent,
        selectors: [["plug-video-item"]],
        inputs: {
          video: "video"
        },
        standalone: false,
        decls: 2,
        vars: 1,
        consts: [["actions", ""], ["id", "item"], [1, "video-player", 3, "click"], [3, "src"], [1, "duration"], [1, "video-info"], [3, "src", "employee"], [1, "info"], [1, "title"], [1, "author"], [1, "date"], [1, "actions"], ["nbPopoverPlacement", "bottom", "icon", "more-vertical-outline", 3, "nbPopover", "options"], [3, "buttons", "data"]],
        template: function VideoItemComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(0, VideoItemComponent_Conditional_0_Template, 20, 16, "div", 1)(1, VideoItemComponent_Conditional_1_Template, 3, 3, "div");
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵconditional"] */ .vxM(ctx.video ? 0 : 1);
          }
        },
        dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbIconComponent */ .tHu, _ui_core_shared_src_lib_components_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_10__/* .AvatarComponent */ .f, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__/* .NbPopoverDirective */ .vs7, _video_player_video_player_component__WEBPACK_IMPORTED_MODULE_11__/* .VideoPlayerComponent */ ._, _video_actions_buttons_action_button_group_action_button_group_component__WEBPACK_IMPORTED_MODULE_12__/* .ActionButtonGroupComponent */ .j, _angular_common__WEBPACK_IMPORTED_MODULE_13__/* .DatePipe */ .vh, _ui_core_shared_src_lib_pipes_duration_format_pipe__WEBPACK_IMPORTED_MODULE_14__/* .DurationFormatPipe */ .i, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__/* .TranslatePipe */ .D9],
        styles: ["#item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  border-radius: 12px;\n  width: 100%;\n  max-width: 420px;\n  overflow: hidden;\n  gap: 16px;\n}\n\n.video-player[_ngcontent-%COMP%] {\n  position: relative;\n}\n.video-player[_ngcontent-%COMP%]   .duration[_ngcontent-%COMP%] {\n  color: white;\n  width: fit-content;\n  font-size: 13px;\n  font-weight: 600;\n  padding: 0px 4px;\n  background: rgba(0, 0, 0, 0.7019607843);\n  border-radius: 4px;\n  position: absolute;\n  right: 8px;\n  bottom: 8px;\n}\n\nplug-video-player[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: auto;\n  cursor: pointer;\n}\n\n.video-info[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  align-items: flex-start;\n}\n.video-info[_ngcontent-%COMP%]   nb-icon[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\nngx-avatar[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  overflow: hidden;\n}\n\n.info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n}\n\n.title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: var(--gauzy-text-color-1);\n  margin-bottom: 8px;\n}\n\n.author[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--gauzy-text-color-2);\n  margin-bottom: 4px;\n}\n\n.date[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--gauzy-text-color-2);\n}\n\n\n\n#item[_ngcontent-%COMP%]    + div[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 200px;\n  width: 100%;\n  max-width: 600px;\n  background: #f2f2f2;\n  border: 1px dashed #ccc;\n  border-radius: 12px;\n  font-size: 16px;\n  font-weight: 500;\n  color: #666;\n  text-align: center;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);\n}\n\n@media (max-width: 768px) {\n  #item[_ngcontent-%COMP%] {\n    max-width: 100%;\n    border-radius: 8px;\n  }\n  .video-info[_ngcontent-%COMP%] {\n    padding: 12px;\n    gap: 12px;\n  }\n  ngx-avatar[_ngcontent-%COMP%] {\n    width: 40px;\n    height: 40px;\n  }\n  .title[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  .author[_ngcontent-%COMP%] {\n    font-size: 13px;\n  }\n  .date[_ngcontent-%COMP%] {\n    font-size: 11px;\n  }\n}\n.vertical[_nghost-%COMP%]   #item[_ngcontent-%COMP%] {\n  flex-direction: row;\n}\n.vertical[_nghost-%COMP%]   #item[_ngcontent-%COMP%]   .video-player[_ngcontent-%COMP%] {\n  min-width: 200px;\n  max-width: 300px;\n}\n.vertical[_nghost-%COMP%]   #item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  min-width: 150px;\n}\n.vertical[_nghost-%COMP%]   #item[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.vertical[_nghost-%COMP%]   #item[_ngcontent-%COMP%]   ngx-avatar[_ngcontent-%COMP%] {\n  display: none;\n}\n@media (max-width: 1435px) {\n  .vertical[_nghost-%COMP%]   #item[_ngcontent-%COMP%] {\n    max-width: unset;\n  }\n  .vertical[_nghost-%COMP%]   #item[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  .vertical[_nghost-%COMP%]   #item[_ngcontent-%COMP%]   .video-player[_ngcontent-%COMP%], \n   .vertical[_nghost-%COMP%]   #item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%], \n   .vertical[_nghost-%COMP%]   #item[_ngcontent-%COMP%]   .video-info[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}"],
        changeDetection: 0
      });
    }
  }
  return VideoItemComponent;
})();

/***/ }),

/***/ 56626:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   j: () => (/* binding */ finalize)
/* harmony export */ });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31204);

function finalize(callback) {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__/* .operate */ .N)((source, subscriber) => {
    try {
      source.subscribe(subscriber);
    } finally {
      subscriber.add(callback);
    }
  });
}
//# sourceMappingURL=finalize.js.map

/***/ }),

/***/ 56742:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ VideoPlayerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86388);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19223);





const _c0 = ["video"];
function VideoPlayerComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "video", 2, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(2, "source", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("controls", ctx_r0.controls);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("src", ctx_r0.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵsanitizeUrl"] */ .B4B);
  }
}
function VideoPlayerComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(2, 1, "PLUGIN.VIDEO.NO_VIDEO"));
  }
}
let VideoPlayerComponent = /*#__PURE__*/(() => {
  class VideoPlayerComponent {
    get src() {
      return this.sanitizer.bypassSecurityTrustUrl(this._src);
    }
    set src(value) {
      this._src = value;
    }
    /**
     * The video player element.
     */
    get player() {
      if (!this.video?.nativeElement) {
        throw new Error('Video element not initialized');
      }
      return this.video.nativeElement;
    }
    constructor(sanitizer) {
      this.sanitizer = sanitizer;
      this.controls = false;
      this.alt = '';
    }
    static {
      this.ɵfac = function VideoPlayerComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || VideoPlayerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__/* .DomSanitizer */ .up));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: VideoPlayerComponent,
        selectors: [["plug-video-player"]],
        viewQuery: function VideoPlayerComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵviewQuery"] */ .GBs(_c0, 5);
          }
          if (rf & 2) {
            let _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵqueryRefresh"] */ .mGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵloadQuery"] */ .lsd()) && (ctx.video = _t.first);
          }
        },
        inputs: {
          src: "src",
          controls: "controls",
          alt: "alt"
        },
        standalone: false,
        decls: 3,
        vars: 1,
        consts: [["video", ""], [1, "video-player"], ["controlsList", "nodownload", 3, "controls"], [1, "no-video"], ["type", "video/mp4", 3, "src"]],
        template: function VideoPlayerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, VideoPlayerComponent_Conditional_1_Template, 3, 2, "video", 2)(2, VideoPlayerComponent_Conditional_2_Template, 3, 3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵconditional"] */ .vxM(ctx.src ? 1 : 2);
          }
        },
        dependencies: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__/* .TranslatePipe */ .D9],
        styles: ["video[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  border-radius: var(--border-radius);\n  outline: none;\n}\n\n.no-video[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 200px;\n  background-color: #f2f2f2;\n  border: 2px dashed #d6d6d6;\n  border-radius: 8px;\n  color: #666;\n  font-size: 18px;\n  font-weight: 500;\n  text-align: center;\n}\n\n@media (max-width: 768px) {\n  .video-player[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .no-video[_ngcontent-%COMP%] {\n    font-size: 16px;\n    height: 150px;\n  }\n}"],
        changeDetection: 0
      });
    }
  }
  return VideoPlayerComponent;
})();

/***/ }),

/***/ 57682:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   U: () => (/* binding */ VideoEffects)
/* harmony export */ });
/* harmony import */ var _ngneat_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85308);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8563);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19248);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20903);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(89037);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(56626);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(84070);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(23723);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(91776);
/* harmony import */ var _video_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15325);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(26860);
/* harmony import */ var _ngneat_effects_ng__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(10994);
/* harmony import */ var _video_store__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(72334);
/* harmony import */ var _video_query__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(51075);
/* harmony import */ var _shared_services_video_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(60984);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(54263);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(15480);
/* harmony import */ var _shared_services_web_share_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(38899);
/* harmony import */ var _shared_services_download_download_queue_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(36284);


















let VideoEffects = /*#__PURE__*/(() => {
  class VideoEffects {
    constructor(action$, videoStore, videoQuery, videoService, errorHandler, toastrService, webShareService, downloadQueueService) {
      this.action$ = action$;
      this.videoStore = videoStore;
      this.videoQuery = videoQuery;
      this.videoService = videoService;
      this.errorHandler = errorHandler;
      this.toastrService = toastrService;
      this.webShareService = webShareService;
      this.downloadQueueService = downloadQueueService;
      this.fetchVideos$ = (0,_ngneat_effects__WEBPACK_IMPORTED_MODULE_0__/* .createEffect */ .EH)(() => this.action$.pipe((0,_ngneat_effects__WEBPACK_IMPORTED_MODULE_0__/* .ofType */ .gp)(_video_action__WEBPACK_IMPORTED_MODULE_1__/* .VideoActions */ .F.fetchVideos), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__/* .tap */ .M)(() => this.videoStore.setLoading(true)),
      // Start loading state
      (0,rxjs__WEBPACK_IMPORTED_MODULE_3__/* .switchMap */ .n)(({
        params = {}
      }) => this.videoService.getAll(params).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__/* .tap */ .M)(({
        items,
        total
      }) => {
        const videos = this.videoQuery.videos;
        this.videoStore.update({
          videos: [...new Map([...videos, ...items].map(item => [item.id, item])).values()],
          count: total
        });
      }), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__/* .catchError */ .W)(error => {
        this.errorHandler.handleError(error); // Handle error properly
        return rxjs__WEBPACK_IMPORTED_MODULE_5__/* .EMPTY */ .w; // Return a fallback observable
      }), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__/* .finalize */ .j)(() => this.videoStore.setLoading(false)) // Always stop loading
      ))));
      this.fetchVideosAndExclude$ = (0,_ngneat_effects__WEBPACK_IMPORTED_MODULE_0__/* .createEffect */ .EH)(() => this.action$.pipe((0,_ngneat_effects__WEBPACK_IMPORTED_MODULE_0__/* .ofType */ .gp)(_video_action__WEBPACK_IMPORTED_MODULE_1__/* .VideoActions */ .F.fetchVideosAndExclude), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__/* .tap */ .M)(() => this.videoStore.setLoading(true)),
      // Start loading state
      (0,rxjs__WEBPACK_IMPORTED_MODULE_3__/* .switchMap */ .n)(({
        id,
        params = {}
      }) => this.videoService.getAll(params).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__/* .tap */ .M)(({
        items,
        total
      }) => {
        const videos = this.videoQuery.videos;
        this.videoStore.update({
          videos: Array.from(new Map([...videos, ...items].filter(({
            id: videoId
          }) => videoId !== id).map(item => [item.id, item])).values()),
          count: total
        });
      }), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__/* .catchError */ .W)(error => {
        this.errorHandler.handleError(error); // Handle error properly
        return rxjs__WEBPACK_IMPORTED_MODULE_5__/* .EMPTY */ .w; // Return a fallback observable
      }), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__/* .finalize */ .j)(() => this.videoStore.setLoading(false)) // Always stop loading
      ))));
      this.fetchOneVideo$ = (0,_ngneat_effects__WEBPACK_IMPORTED_MODULE_0__/* .createEffect */ .EH)(() => this.action$.pipe((0,_ngneat_effects__WEBPACK_IMPORTED_MODULE_0__/* .ofType */ .gp)(_video_action__WEBPACK_IMPORTED_MODULE_1__/* .VideoActions */ .F.fetchOneVideo), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__/* .tap */ .M)(() => this.videoStore.setLoading(true)),
      // Start loading state
      (0,rxjs__WEBPACK_IMPORTED_MODULE_3__/* .switchMap */ .n)(({
        id,
        params = {}
      }) => this.videoService.getOne(id, params).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__/* .filter */ .p)(Boolean),
      // Filter out null or undefined responses
      (0,rxjs__WEBPACK_IMPORTED_MODULE_2__/* .tap */ .M)(video => this.videoStore.update({
        video
      })), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__/* .catchError */ .W)(error => {
        this.errorHandler.handleError(error); // Handle the error
        return rxjs__WEBPACK_IMPORTED_MODULE_5__/* .EMPTY */ .w; // Return a fallback value to keep the stream alive
      }), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__/* .finalize */ .j)(() => this.videoStore.setLoading(false)) // Always stop loading
      ))));
      this.updateVideo$ = (0,_ngneat_effects__WEBPACK_IMPORTED_MODULE_0__/* .createEffect */ .EH)(() => this.action$.pipe((0,_ngneat_effects__WEBPACK_IMPORTED_MODULE_0__/* .ofType */ .gp)(_video_action__WEBPACK_IMPORTED_MODULE_1__/* .VideoActions */ .F.updateVideo), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__/* .switchMap */ .n)(({
        id,
        video
      }) => this.videoService.update(id, video).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__/* .tap */ .M)(video => {
        const videos = this.videoQuery.videos;
        this.videoStore.update({
          videos: [...new Map([...videos, video].map(item => [item.id, item])).values()],
          video
        });
        this.toastrService.success('PLUGIN.VIDEO.UPDATE_SUCCESSFULLY', null, 'PLUGIN.VIDEO.DOWNLOAD');
      }), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__/* .catchError */ .W)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(this.errorHandler.handleError(error)))))));
      this.deleteVideo$ = (0,_ngneat_effects__WEBPACK_IMPORTED_MODULE_0__/* .createEffect */ .EH)(() => this.action$.pipe((0,_ngneat_effects__WEBPACK_IMPORTED_MODULE_0__/* .ofType */ .gp)(_video_action__WEBPACK_IMPORTED_MODULE_1__/* .VideoActions */ .F.deleteVideo), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__/* .switchMap */ .n)(({
        id
      }) => this.videoService.delete(id).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__/* .tap */ .M)(() => {
        const videos = this.videoQuery.videos;
        this.videoStore.update({
          videos: videos.filter(video => video.id !== id)
        });
        this.toastrService.success('PLUGIN.VIDEO.DELETE_SUCCESSFULLY', null, 'PLUGIN.VIDEO.DOWNLOAD');
      }), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__/* .catchError */ .W)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(this.errorHandler.handleError(error)))))));
      this.shareVideos$ = (0,_ngneat_effects__WEBPACK_IMPORTED_MODULE_0__/* .createEffect */ .EH)(() => this.action$.pipe((0,_ngneat_effects__WEBPACK_IMPORTED_MODULE_0__/* .ofType */ .gp)(_video_action__WEBPACK_IMPORTED_MODULE_1__/* .VideoActions */ .F.shareVideos), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__/* .concatMap */ .H)(({
        payload
      }) => this.webShareService.share(payload))));
      this.addToQueue$ = (0,_ngneat_effects__WEBPACK_IMPORTED_MODULE_0__/* .createEffect */ .EH)(() => this.action$.pipe((0,_ngneat_effects__WEBPACK_IMPORTED_MODULE_0__/* .ofType */ .gp)(_video_action__WEBPACK_IMPORTED_MODULE_1__/* .VideoActions */ .F.addToQueue), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__/* .tap */ .M)(({
        urls
      }) => {
        const isAdded = this.downloadQueueService.add(urls);
        if (isAdded) {
          this.toastrService.info('PLUGIN.VIDEO.ADDED_TO_QUEUE', 'PLUGIN.VIDEO.DOWNLOAD');
        }
      })));
      this.removeFromQueue$ = (0,_ngneat_effects__WEBPACK_IMPORTED_MODULE_0__/* .createEffect */ .EH)(() => this.action$.pipe((0,_ngneat_effects__WEBPACK_IMPORTED_MODULE_0__/* .ofType */ .gp)(_video_action__WEBPACK_IMPORTED_MODULE_1__/* .VideoActions */ .F.removeFromQueue), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__/* .tap */ .M)(({
        url
      }) => {
        this.toastrService.info('PLUGIN.VIDEO.REMOVED_FROM_QUEUE', 'PLUGIN.VIDEO.DOWNLOAD');
        this.downloadQueueService.remove(url);
      })));
      this.retryDownload$ = (0,_ngneat_effects__WEBPACK_IMPORTED_MODULE_0__/* .createEffect */ .EH)(() => this.action$.pipe((0,_ngneat_effects__WEBPACK_IMPORTED_MODULE_0__/* .ofType */ .gp)(_video_action__WEBPACK_IMPORTED_MODULE_1__/* .VideoActions */ .F.retryDownload), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__/* .tap */ .M)(({
        url
      }) => {
        const isRetry = this.downloadQueueService.retry(url);
        if (isRetry) {
          this.toastrService.info('PLUGIN.VIDEO.RETRIED', 'PLUGIN.VIDEO.DOWNLOAD');
        }
      })));
    }
    static {
      this.ɵfac = function VideoEffects_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || VideoEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵinject"] */ .KVO(_ngneat_effects_ng__WEBPACK_IMPORTED_MODULE_11__/* .Actions */ .En), _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵinject"] */ .KVO(_video_store__WEBPACK_IMPORTED_MODULE_12__/* .VideoStore */ .V), _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵinject"] */ .KVO(_video_query__WEBPACK_IMPORTED_MODULE_13__/* .VideoQuery */ .g), _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵinject"] */ .KVO(_shared_services_video_service__WEBPACK_IMPORTED_MODULE_14__/* .VideoService */ .r), _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵinject"] */ .KVO(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_15__/* .ErrorHandlingService */ .X), _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵinject"] */ .KVO(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_16__/* .ToastrService */ .t), _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵinject"] */ .KVO(_shared_services_web_share_service__WEBPACK_IMPORTED_MODULE_17__/* .WebShareService */ .h), _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵinject"] */ .KVO(_shared_services_download_download_queue_service__WEBPACK_IMPORTED_MODULE_18__/* .DownloadQueueService */ .$));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵdefineInjectable"] */ .jDH({
        token: VideoEffects,
        factory: VideoEffects.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return VideoEffects;
})();

/***/ }),

/***/ 58030:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ mergeMap)
/* harmony export */ });
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72368);
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(50388);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(31204);
/* harmony import */ var _mergeInternals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20758);
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83297);





function mergeMap(project, resultSelector, concurrent = Infinity) {
  if ((0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .T)(resultSelector)) {
    return mergeMap((a, i) => (0,_map__WEBPACK_IMPORTED_MODULE_1__/* .map */ .T)((b, ii) => resultSelector(a, b, i, ii))((0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_2__/* .innerFrom */ .Tg)(project(a, i))), concurrent);
  } else if (typeof resultSelector === 'number') {
    concurrent = resultSelector;
  }
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_3__/* .operate */ .N)((source, subscriber) => (0,_mergeInternals__WEBPACK_IMPORTED_MODULE_4__/* .mergeInternals */ .h)(source, subscriber, project, concurrent));
}
//# sourceMappingURL=mergeMap.js.map

/***/ }),

/***/ 58647:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   XI: () => (/* binding */ action)
/* harmony export */ });
/* unused harmony exports empty, fsa, payload, props, type, union */
function action(type, config) {
  if (typeof config === "function") {
    return defineType(type, (...args) => Object.assign(Object.assign({}, config(...args)), {
      type
    }));
  }
  const as = config ? config._as : "empty";
  switch (as) {
    case "empty":
      return defineType(type, () => ({
        type
      }));
    case "fsa":
      return defineType(type, (payload, meta) => payload instanceof Error ? {
        error: true,
        meta,
        payload,
        type
      } : {
        error: false,
        meta,
        payload,
        type
      });
    case "payload":
      return defineType(type, payload => ({
        payload,
        type
      }));
    case "props":
      return defineType(type, props => Object.assign(Object.assign({}, props), {
        type
      }));
    default:
      throw new Error("Unexpected config.");
  }
}
function empty() {
  return {
    _as: "empty"
  };
}
function fsa() {
  return {
    _as: "fsa",
    _m: undefined,
    _p: undefined
  };
}
function payload() {
  return {
    _as: "payload",
    _p: undefined
  };
}
function props() {
  return {
    _as: "props",
    _p: undefined
  };
}
function type(type, rest) {
  return Object.assign(Object.assign({}, rest), {
    type
  });
}
function union(...creators) {
  const descriptor = {
    get: () => {
      throw new Error("Pseudo property not readable.");
    },
    set: () => {
      throw new Error("Pseudo property not writable.");
    }
  };
  const result = creators.map(({
    type
  }) => Object.defineProperty({
    type
  }, "action", descriptor));
  Object.defineProperties(result, {
    actions: descriptor,
    types: descriptor
  });
  return result;
}
function defineType(type, creator) {
  return Object.defineProperty(creator, "type", {
    value: type,
    writable: false
  });
}

/***/ }),

/***/ 59279:
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

/***/ 65952:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ CamshotService)
/* harmony export */ });
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(64913);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26024);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26860);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45715);




let CamshotService = /*#__PURE__*/(() => {
  class CamshotService {
    constructor(http) {
      this.http = http;
      this.API_ENDPOINT = `${_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_0__/* .API_PREFIX */ .m4}/plugins/camshots`;
    }
    getAll(params) {
      return this.http.get(this.API_ENDPOINT, {
        params: (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .toParams */ .SV)(params)
      });
    }
    getOne(id, params) {
      return this.http.get(`${this.API_ENDPOINT}/${id}`, {
        params: (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .toParams */ .SV)(params)
      });
    }
    restore(id) {
      return this.http.patch(`${this.API_ENDPOINT}/${id}`, {});
    }
    delete(id, params) {
      return this.http.delete(`${this.API_ENDPOINT}/${id}`, {
        params: (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .toParams */ .SV)(params)
      });
    }
    getCount(params) {
      return this.http.get(`${this.API_ENDPOINT}/count`, {
        params: (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_1__/* .toParams */ .SV)(params)
      });
    }
    static {
      this.ɵfac = function CamshotService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || CamshotService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵinject"] */ .KVO(_angular_common_http__WEBPACK_IMPORTED_MODULE_3__/* .HttpClient */ .Qq));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineInjectable"] */ .jDH({
        token: CamshotService,
        factory: CamshotService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return CamshotService;
})();

/***/ }),

/***/ 66174:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   z: () => (/* binding */ combineLatest)
/* harmony export */ });
/* unused harmony export combineLatestInit */
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(40443);
/* harmony import */ var _util_argsArgArrayOrObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59279);
/* harmony import */ var _from__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8442);
/* harmony import */ var _util_identity__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(74171);
/* harmony import */ var _util_mapOneOrManyArgs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(37268);
/* harmony import */ var _util_args__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85196);
/* harmony import */ var _util_createObject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6026);
/* harmony import */ var _operators_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(84230);
/* harmony import */ var _util_executeSchedule__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(25107);









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

/***/ 67872:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   o: () => (/* binding */ Soundshot)
/* harmony export */ });
class Soundshot {
  constructor(soundshot) {
    Object.assign(this, soundshot);
  }
  get isDeleted() {
    return !!this.deletedAt;
  }
  clone() {
    return new Soundshot(this);
  }
}

/***/ }),

/***/ 69288:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   w: () => (/* binding */ Camshot)
/* harmony export */ });
class Camshot {
  constructor(camshot) {
    Object.assign(this, camshot);
  }
  get isDeleted() {
    return !!this.deletedAt;
  }
  clone() {
    return new Camshot(this);
  }
}

/***/ }),

/***/ 72138:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ SoundshotStore)
/* harmony export */ });
/* unused harmony export createInitialState */
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(84562);
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71732);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26860);



function createInitialState() {
  return {
    soundshots: [],
    soundshot: null,
    count: 0,
    deleting: false,
    restoring: false,
    downloading: false
  };
}
let SoundshotStore = /*#__PURE__*/(() => {
  let SoundshotStore = class SoundshotStore extends _datorama_akita__WEBPACK_IMPORTED_MODULE_0__/* .Store */ .il {
    constructor() {
      super(createInitialState());
    }
    static {
      this.ɵfac = function SoundshotStore_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || SoundshotStore)();
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineInjectable"] */ .jDH({
        token: SoundshotStore,
        factory: SoundshotStore.ɵfac,
        providedIn: 'root'
      });
    }
  };
  SoundshotStore = (0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__decorate */ .Cg)([(0,_datorama_akita__WEBPACK_IMPORTED_MODULE_0__/* .StoreConfig */ .g7)({
    name: 'soundshots'
  }), (0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__metadata */ .Sn)("design:paramtypes", [])], SoundshotStore);
  return SoundshotStore;
})();


/***/ }),

/***/ 72242:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Q: () => (/* binding */ VideoPageComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(84562);
/* harmony import */ var _gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(26024);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(71924);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(28822);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(93697);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(46915);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(60166);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(6195);
/* harmony import */ var _ngneat_effects_ng__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(10994);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(95194);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(19223);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(72368);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(16519);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(19248);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(23723);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(84070);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8563);
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86014);
/* harmony import */ var _state_video_action__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(15325);
/* harmony import */ var _state_video_query__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(51075);
/* harmony import */ var _state_video_store__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(72334);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26860);
/* harmony import */ var _ui_core_shared_src_lib_smart_data_layout_no_data_message_no_data_message_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(95959);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56383);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(14572);
/* harmony import */ var _features_video_list_video_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8863);
























const VideoPageComponent_Conditional_5_Defer_5_DepsFn = () => [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbInfiniteListDirective */ .oyd, _features_video_list_video_list_component__WEBPACK_IMPORTED_MODULE_2__/* .VideoListComponent */ .R];
function VideoPageComponent_Conditional_5_Defer_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .j41(0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵlistener"] */ .bIt("bottomThreshold", function VideoPageComponent_Conditional_5_Defer_3_Template_div_bottomThreshold_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵrestoreView"] */ .eBV(_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵresetView"] */ .Njj(ctx_r1.fetchMoreVideos());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelement"] */ .nrm(1, "plug-video-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Y8G("threshold", 500)("throttleTime", 300);
  }
}
function VideoPageComponent_Conditional_5_DeferError_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelement"] */ .nrm(0, "ngx-no-data-message", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .nI1(1, "translate");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Y8G("message", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .bMT(1, 1, "PLUGIN.VIDEO.NOT_FOUND"));
  }
}
function VideoPageComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .j41(0, "div", 2)(1, "ngx-gauzy-filters", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .nI1(2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵlistener"] */ .bIt("filtersChange", function VideoPageComponent_Conditional_5_Template_ngx_gauzy_filters_filtersChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵrestoreView"] */ .eBV(_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵresetView"] */ .Njj(ctx_r1.filtersChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .DNE(3, VideoPageComponent_Conditional_5_Defer_3_Template, 2, 2)(4, VideoPageComponent_Conditional_5_DeferError_4_Template, 2, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdefer"] */ .nv$(5, 3, VideoPageComponent_Conditional_5_Defer_5_DepsFn, null, null, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdeferOnIdle"] */ .g25();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Y8G("isTimeFormat", true)("saveFilters", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .bMT(2, 5, ctx_r1.datePickerConfig$).isSaveDatePicker)("hasLogTypeFilter", false)("hasSourceFilter", false)("hasActivityLevelFilter", false);
  }
}
function VideoPageComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .j41(0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelement"] */ .nrm(1, "ngx-no-data-message", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵnextContext"] */ .XpG();
    const isLoading_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵreadContextLet"] */ .r8f(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵproperty"] */ .Y8G("nbSpinner", isLoading_r4)("message", _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .bMT(2, 2, isLoading_r4 ? "PLUGIN.VIDEO.LOADING_VIDEOS" : "PLUGIN.VIDEO.NOT_FOUND"));
  }
}
let VideoPageComponent = /*#__PURE__*/(() => {
  let VideoPageComponent = class VideoPageComponent extends _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_4__/* .BaseSelectorFilterComponent */ .U {
    constructor(actions, videoQuery, videoStore, translateService, store, dateRangePickerBuilderService, timeZoneService, timesheetFilterService) {
      super(store, translateService, dateRangePickerBuilderService, timeZoneService);
      this.actions = actions;
      this.videoQuery = videoQuery;
      this.videoStore = videoStore;
      this.translateService = translateService;
      this.store = store;
      this.dateRangePickerBuilderService = dateRangePickerBuilderService;
      this.timeZoneService = timeZoneService;
      this.timesheetFilterService = timesheetFilterService;
      this.skip = 0;
      this.hasNext = false;
      this.take = 10;
      this.filters = this.request;
      this.datePickerConfig$ = this.dateRangePickerBuilderService.datePickerConfig$;
    }
    ngOnInit() {
      this.subject$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__/* .map */ .T)(() => this.prepareRequest()), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__/* .withLatestFrom */ .E)(this.videoQuery.count$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__/* .map */ .T)(count => count > this.skip * this.take))), (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_7__/* .distinctUntilChange */ .nI)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__/* .switchMap */ .n)(([request, hasNext]) => {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)(request).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__/* .filter */ .p)(Boolean), (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_7__/* .distinctUntilChange */ .nI)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_11__/* .tap */ .M)(() => {
          this.skip = 1;
          this.videoStore.update({
            videos: []
          });
          this.fetchVideos();
          this.hasNext = hasNext;
        }));
      }), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_12__/* .untilDestroyed */ .s)(this)).subscribe();
    }
    filtersChange(filters) {
      if (this.gauzyFiltersComponent.saveFilters) {
        this.timesheetFilterService.filter = filters;
      }
      this.filters = {
        ...filters
      };
      this.subject$.next(true);
    }
    prepareRequest() {
      if ((0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_7__/* .isEmpty */ .Im)(this.request) || (0,_gauzy_ui_core_common__WEBPACK_IMPORTED_MODULE_7__/* .isEmpty */ .Im)(this.filters) || !this.organization) {
        return;
      }
      const appliedFilter = (0,underscore__WEBPACK_IMPORTED_MODULE_0__/* .pick */ .Up)(this.filters, 'source', 'activityLevel', 'logType');
      return {
        ...appliedFilter,
        ...this.getFilterRequest(this.request)
      };
    }
    fetchVideos() {
      const request = this.prepareRequest();
      if (!request) {
        return;
      }
      this.actions.dispatch(_state_video_action__WEBPACK_IMPORTED_MODULE_13__/* .VideoActions */ .F.fetchVideos({
        ...request,
        skip: this.skip,
        take: this.take,
        relations: ['uploadedBy', 'uploadedBy.user'],
        order: {
          recordedAt: 'DESC'
        }
      }));
    }
    fetchMoreVideos() {
      if (this.hasNext) {
        this.skip++;
        this.fetchVideos();
      }
    }
    reset() {
      this.skip = 0;
      this.hasNext = false;
      this.videoStore.update({
        videos: []
      });
    }
    get count$() {
      return this.videoQuery.count$;
    }
    get isLoading$() {
      return this.videoQuery.isLoading$;
    }
    ngOnDestroy() {
      this.reset();
    }
    static {
      this.ɵfac = function VideoPageComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || VideoPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .rXU(_ngneat_effects_ng__WEBPACK_IMPORTED_MODULE_14__/* .Actions */ .En), _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .rXU(_state_video_query__WEBPACK_IMPORTED_MODULE_15__/* .VideoQuery */ .g), _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .rXU(_state_video_store__WEBPACK_IMPORTED_MODULE_16__/* .VideoStore */ .V), _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__/* .TranslateService */ .c$), _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_18__/* .Store */ .il), _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_19__/* .DateRangePickerBuilderService */ .i7), _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_20__/* .TimeZoneService */ .F), _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_21__/* .TimesheetFilterService */ .WG));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdefineComponent"] */ .VBU({
        type: VideoPageComponent,
        selectors: [["lib-video-page"]],
        viewQuery: function VideoPageComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵviewQuery"] */ .GBs(_gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_22__/* .GauzyFiltersComponent */ .n, 5);
          }
          if (rf & 2) {
            let _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵqueryRefresh"] */ .mGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵloadQuery"] */ .lsd()) && (ctx.gauzyFiltersComponent = _t.first);
          }
        },
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
        decls: 7,
        vars: 6,
        consts: [[1, "custom-card"], [1, "no-data"], [1, "custom-card-header"], [3, "filtersChange", "isTimeFormat", "saveFilters", "hasLogTypeFilter", "hasSourceFilter", "hasActivityLevelFilter"], ["nbInfiniteList", "", 1, "custom-card-body", 3, "bottomThreshold", "threshold", "throttleTime"], [3, "message"], ["nbSpinnerStatus", "primary", 3, "nbSpinner", "message"]],
        template: function VideoPageComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdeclareLet"] */ .SS7(0);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .nI1(1, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdeclareLet"] */ .SS7(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipe"] */ .nI1(3, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementStart"] */ .j41(4, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵtemplate"] */ .DNE(5, VideoPageComponent_Conditional_5_Template, 7, 7)(6, VideoPageComponent_Conditional_6_Template, 3, 4, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵelementEnd"] */ .k0s();
          }
          if (rf & 2) {
            const count_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .bMT(1, 1, ctx.count$);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵstoreLet"] */ .bH3(_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵpipeBind1"] */ .bMT(3, 3, ctx.isLoading$));
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵconditional"] */ .vxM(count_r5 ? 5 : 6);
          }
        },
        dependencies: [_ui_core_shared_src_lib_smart_data_layout_no_data_message_no_data_message_component__WEBPACK_IMPORTED_MODULE_23__/* .NoDataMessageComponent */ ._, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_22__/* .GauzyFiltersComponent */ .n, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__/* .NbSpinnerDirective */ .zwc, _angular_common__WEBPACK_IMPORTED_MODULE_24__/* .AsyncPipe */ .Jj, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__/* .TranslatePipe */ .D9],
        styles: [".custom-card[_ngcontent-%COMP%] {\n  height: calc(100vh - 17.5rem);\n  background-color: var(--gauzy-card-2);\n  border-radius: 0 0 var(--border-radius) var(--border-radius);\n  display: flex;\n  flex-direction: column;\n}\n.custom-card[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%] {\n  padding: 1rem;\n  height: 100%;\n  width: 100%;\n}\n.custom-card[_ngcontent-%COMP%]   .custom-card-header[_ngcontent-%COMP%] {\n  padding-top: 1rem;\n}\n.custom-card[_ngcontent-%COMP%]   .custom-card-body[_ngcontent-%COMP%] {\n  flex-grow: 10;\n  padding: 1rem;\n  overflow-y: auto;\n}\n.custom-card[_ngcontent-%COMP%]     ngx-no-data-message nb-spinner {\n  border-radius: var(--border-radius);\n}"],
        changeDetection: 0
      });
    }
  };
  VideoPageComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_25__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_12__/* .UntilDestroy */ .d)({
    checkProperties: true
  }), (0,tslib__WEBPACK_IMPORTED_MODULE_25__/* .__metadata */ .Sn)("design:paramtypes", [_ngneat_effects_ng__WEBPACK_IMPORTED_MODULE_14__/* .Actions */ .En, _state_video_query__WEBPACK_IMPORTED_MODULE_15__/* .VideoQuery */ .g, _state_video_store__WEBPACK_IMPORTED_MODULE_16__/* .VideoStore */ .V, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__/* .TranslateService */ .c$, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_18__/* .Store */ .il, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_19__/* .DateRangePickerBuilderService */ .i7, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_20__/* .TimeZoneService */ .F, _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_21__/* .TimesheetFilterService */ .WG])], VideoPageComponent);
  return VideoPageComponent;
})();


/***/ }),

/***/ 72334:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   V: () => (/* binding */ VideoStore)
/* harmony export */ });
/* unused harmony export createInitialState */
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(84562);
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71732);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26860);



function createInitialState() {
  return {
    videos: [],
    video: null,
    count: 0
  };
}
let VideoStore = /*#__PURE__*/(() => {
  let VideoStore = class VideoStore extends _datorama_akita__WEBPACK_IMPORTED_MODULE_0__/* .Store */ .il {
    constructor() {
      super(createInitialState());
    }
    static {
      this.ɵfac = function VideoStore_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || VideoStore)();
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineInjectable"] */ .jDH({
        token: VideoStore,
        factory: VideoStore.ɵfac,
        providedIn: 'root'
      });
    }
  };
  VideoStore = (0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__decorate */ .Cg)([(0,_datorama_akita__WEBPACK_IMPORTED_MODULE_0__/* .StoreConfig */ .g7)({
    name: 'video'
  }), (0,tslib__WEBPACK_IMPORTED_MODULE_2__/* .__metadata */ .Sn)("design:paramtypes", [])], VideoStore);
  return VideoStore;
})();


/***/ }),

/***/ 73987:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: () => (/* binding */ DownloadStateFactory)
/* harmony export */ });
/* harmony import */ var _models_video_download_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75807);
/* harmony import */ var _states_completed_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17108);
/* harmony import */ var _states_downloading_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35226);
/* harmony import */ var _states_failed_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(37853);
/* harmony import */ var _states_pending_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87301);





class DownloadStateFactory {
  static getState(status) {
    switch (status) {
      case _models_video_download_model__WEBPACK_IMPORTED_MODULE_0__/* .DownloadStatus */ .h.PENDING:
        return new _states_pending_state__WEBPACK_IMPORTED_MODULE_1__/* .PendingState */ .F();
      case _models_video_download_model__WEBPACK_IMPORTED_MODULE_0__/* .DownloadStatus */ .h.DOWNLOADING:
        return new _states_downloading_state__WEBPACK_IMPORTED_MODULE_2__/* .DownloadingState */ ._();
      case _models_video_download_model__WEBPACK_IMPORTED_MODULE_0__/* .DownloadStatus */ .h.COMPLETED:
        return new _states_completed_state__WEBPACK_IMPORTED_MODULE_3__/* .CompletedState */ .b();
      case _models_video_download_model__WEBPACK_IMPORTED_MODULE_0__/* .DownloadStatus */ .h.FAILED:
        return new _states_failed_state__WEBPACK_IMPORTED_MODULE_4__/* .FailedState */ .Z();
      default:
        throw new Error(`Unknown state for status: ${status}`);
    }
  }
}

/***/ }),

/***/ 75807:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   h: () => (/* binding */ DownloadStatus)
/* harmony export */ });
var DownloadStatus = /*#__PURE__*/function (DownloadStatus) {
  DownloadStatus["PENDING"] = "PENDING";
  DownloadStatus["DOWNLOADING"] = "DOWNLOADING";
  DownloadStatus["COMPLETED"] = "COMPLETED";
  DownloadStatus["FAILED"] = "FAILED";
  DownloadStatus["CANCELLED"] = "CANCELLED";
  return DownloadStatus;
}(DownloadStatus || {});

/***/ }),

/***/ 75857:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ firstValueFrom)
/* harmony export */ });
/* harmony import */ var _util_EmptyError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13112);
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90572);


function firstValueFrom(source, config) {
  const hasConfig = typeof config === 'object';
  return new Promise((resolve, reject) => {
    const subscriber = new _Subscriber__WEBPACK_IMPORTED_MODULE_0__/* .SafeSubscriber */ .Ms({
      next: value => {
        resolve(value);
        subscriber.unsubscribe();
      },
      error: reject,
      complete: () => {
        if (hasConfig) {
          resolve(config.defaultValue);
        } else {
          reject(new _util_EmptyError__WEBPACK_IMPORTED_MODULE_1__/* .EmptyError */ .G());
        }
      }
    });
    source.subscribe(subscriber);
  });
}
//# sourceMappingURL=firstValueFrom.js.map

/***/ }),

/***/ 76528:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ Subject)
/* harmony export */ });
/* unused harmony export AnonymousSubject */
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40443);
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5951);
/* harmony import */ var _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3391);
/* harmony import */ var _util_arrRemove__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(33286);
/* harmony import */ var _util_errorContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(58456);





let Subject = /*#__PURE__*/(() => {
  class Subject extends _Observable__WEBPACK_IMPORTED_MODULE_0__/* .Observable */ .c {
    constructor() {
      super();
      this.closed = false;
      this.currentObservers = null;
      this.observers = [];
      this.isStopped = false;
      this.hasError = false;
      this.thrownError = null;
    }
    lift(operator) {
      const subject = new AnonymousSubject(this, this);
      subject.operator = operator;
      return subject;
    }
    _throwIfClosed() {
      if (this.closed) {
        throw new _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_1__/* .ObjectUnsubscribedError */ .P();
      }
    }
    next(value) {
      (0,_util_errorContext__WEBPACK_IMPORTED_MODULE_2__/* .errorContext */ .Y)(() => {
        this._throwIfClosed();
        if (!this.isStopped) {
          if (!this.currentObservers) {
            this.currentObservers = Array.from(this.observers);
          }
          for (const observer of this.currentObservers) {
            observer.next(value);
          }
        }
      });
    }
    error(err) {
      (0,_util_errorContext__WEBPACK_IMPORTED_MODULE_2__/* .errorContext */ .Y)(() => {
        this._throwIfClosed();
        if (!this.isStopped) {
          this.hasError = this.isStopped = true;
          this.thrownError = err;
          const {
            observers
          } = this;
          while (observers.length) {
            observers.shift().error(err);
          }
        }
      });
    }
    complete() {
      (0,_util_errorContext__WEBPACK_IMPORTED_MODULE_2__/* .errorContext */ .Y)(() => {
        this._throwIfClosed();
        if (!this.isStopped) {
          this.isStopped = true;
          const {
            observers
          } = this;
          while (observers.length) {
            observers.shift().complete();
          }
        }
      });
    }
    unsubscribe() {
      this.isStopped = this.closed = true;
      this.observers = this.currentObservers = null;
    }
    get observed() {
      var _a;
      return ((_a = this.observers) === null || _a === void 0 ? void 0 : _a.length) > 0;
    }
    _trySubscribe(subscriber) {
      this._throwIfClosed();
      return super._trySubscribe(subscriber);
    }
    _subscribe(subscriber) {
      this._throwIfClosed();
      this._checkFinalizedStatuses(subscriber);
      return this._innerSubscribe(subscriber);
    }
    _innerSubscribe(subscriber) {
      const {
        hasError,
        isStopped,
        observers
      } = this;
      if (hasError || isStopped) {
        return _Subscription__WEBPACK_IMPORTED_MODULE_3__/* .EMPTY_SUBSCRIPTION */ .Kn;
      }
      this.currentObservers = null;
      observers.push(subscriber);
      return new _Subscription__WEBPACK_IMPORTED_MODULE_3__/* .Subscription */ .yU(() => {
        this.currentObservers = null;
        (0,_util_arrRemove__WEBPACK_IMPORTED_MODULE_4__/* .arrRemove */ .o)(observers, subscriber);
      });
    }
    _checkFinalizedStatuses(subscriber) {
      const {
        hasError,
        thrownError,
        isStopped
      } = this;
      if (hasError) {
        subscriber.error(thrownError);
      } else if (isStopped) {
        subscriber.complete();
      }
    }
    asObservable() {
      const observable = new _Observable__WEBPACK_IMPORTED_MODULE_0__/* .Observable */ .c();
      observable.source = this;
      return observable;
    }
  }
  Subject.create = (destination, source) => {
    return new AnonymousSubject(destination, source);
  };
  return Subject;
})();
class AnonymousSubject extends Subject {
  constructor(destination, source) {
    super();
    this.destination = destination;
    this.source = source;
  }
  next(value) {
    var _a, _b;
    (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.next) === null || _b === void 0 ? void 0 : _b.call(_a, value);
  }
  error(err) {
    var _a, _b;
    (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.error) === null || _b === void 0 ? void 0 : _b.call(_a, err);
  }
  complete() {
    var _a, _b;
    (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.complete) === null || _b === void 0 ? void 0 : _b.call(_a);
  }
  _subscribe(subscriber) {
    var _a, _b;
    return (_b = (_a = this.source) === null || _a === void 0 ? void 0 : _a.subscribe(subscriber)) !== null && _b !== void 0 ? _b : _Subscription__WEBPACK_IMPORTED_MODULE_3__/* .EMPTY_SUBSCRIPTION */ .Kn;
  }
}
//# sourceMappingURL=Subject.js.map

/***/ }),

/***/ 84070:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: () => (/* binding */ filter)
/* harmony export */ });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31204);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(84230);


function filter(predicate, thisArg) {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__/* .operate */ .N)((source, subscriber) => {
    let index = 0;
    source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__/* .createOperatorSubscriber */ ._)(subscriber, value => predicate.call(thisArg, value, index++) && subscriber.next(value)));
  });
}
//# sourceMappingURL=filter.js.map

/***/ }),

/***/ 84786:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: () => (/* binding */ SoundshotPlayerSkeletonComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);

function SoundshotPlayerSkeletonComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(0, "div", 13);
  }
}
let SoundshotPlayerSkeletonComponent = /*#__PURE__*/(() => {
  class SoundshotPlayerSkeletonComponent {
    constructor() {
      this.showVolumeControl = true;
      this.animate = true;
    }
    static {
      this.ɵfac = function SoundshotPlayerSkeletonComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || SoundshotPlayerSkeletonComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: SoundshotPlayerSkeletonComponent,
        selectors: [["plug-soundshot-player-skeleton"]],
        inputs: {
          showVolumeControl: "showVolumeControl",
          animate: "animate"
        },
        standalone: false,
        decls: 16,
        vars: 3,
        consts: [[1, "skeleton-container"], [1, "skeleton-info"], [1, "skeleton-cover"], [1, "skeleton-details"], [1, "skeleton-title"], [1, "skeleton-meta"], [1, "skeleton-meta-item"], [1, "skeleton-player-controls"], [1, "skeleton-btn"], [1, "skeleton-progress-container"], [1, "skeleton-progress-bar"], [1, "skeleton-time-info"], [1, "skeleton-time"], [1, "skeleton-volume-slider"]],
        template: function SoundshotPlayerSkeletonComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 0)(1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(5, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(6, "div", 6)(7, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(8, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(9, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(10, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(11, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(12, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(13, "div", 12)(14, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(15, SoundshotPlayerSkeletonComponent_Conditional_15_Template, 1, 0, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵclassProp"] */ .AVh("animate", ctx.animate);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵconditional"] */ .vxM(ctx.showVolumeControl ? 15 : -1);
          }
        },
        styles: [".skeleton-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  width: 100%;\n  margin: 0 auto;\n  padding: 1rem;\n  background: var(--gauzy-card-3);\n  border-radius: var(--border-radius);\n  position: relative;\n}\n.skeleton-container.animate[_ngcontent-%COMP%]   .skeleton-element[_ngcontent-%COMP%], .skeleton-container.animate[_ngcontent-%COMP%]   .skeleton-volume-slider[_ngcontent-%COMP%], .skeleton-container.animate[_ngcontent-%COMP%]   .skeleton-time[_ngcontent-%COMP%], .skeleton-container.animate[_ngcontent-%COMP%]   .skeleton-progress-bar[_ngcontent-%COMP%], .skeleton-container.animate[_ngcontent-%COMP%]   .skeleton-btn[_ngcontent-%COMP%], .skeleton-container.animate[_ngcontent-%COMP%]   .skeleton-meta-item[_ngcontent-%COMP%], .skeleton-container.animate[_ngcontent-%COMP%]   .skeleton-title[_ngcontent-%COMP%], .skeleton-container.animate[_ngcontent-%COMP%]   .skeleton-cover[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_skeleton-loading 1.5s ease-in-out infinite;\n}\n\n.skeleton-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 1rem;\n}\n\n.skeleton-cover[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: var(--border-radius);\n  background: var(--skeleton-color);\n  animation: _ngcontent-%COMP%_skeleton-loading 1.5s ease-in-out infinite;\n}\n\n.skeleton-details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n\n.skeleton-title[_ngcontent-%COMP%] {\n  height: 18px;\n  width: 40%;\n  border-radius: 4px;\n  background: var(--skeleton-color);\n  margin-bottom: 0.1rem;\n  animation: _ngcontent-%COMP%_skeleton-loading 1.5s ease-in-out infinite;\n}\n\n.skeleton-meta[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n}\n\n.skeleton-meta-item[_ngcontent-%COMP%] {\n  height: 12px;\n  width: 32px;\n  border-radius: 4px;\n  background: var(--skeleton-color);\n  animation: _ngcontent-%COMP%_skeleton-loading 1.5s ease-in-out infinite;\n}\n\n.skeleton-player-controls[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n\n.skeleton-btn[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background: var(--skeleton-color);\n  flex-shrink: 0;\n  animation: _ngcontent-%COMP%_skeleton-loading 1.5s ease-in-out infinite;\n}\n\n.skeleton-progress-container[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 0.2rem;\n}\n\n.skeleton-progress-bar[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 6px;\n  border-radius: 3px;\n  background: var(--skeleton-color);\n  animation: _ngcontent-%COMP%_skeleton-loading 1.5s ease-in-out infinite;\n}\n\n.skeleton-time-info[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 0.8rem;\n  color: #888;\n}\n\n.skeleton-time[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 12px;\n  border-radius: 4px;\n  background: var(--skeleton-color);\n  animation: _ngcontent-%COMP%_skeleton-loading 1.5s ease-in-out infinite;\n}\n\n.skeleton-volume-slider[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 6px;\n  border-radius: 3px;\n  background: var(--skeleton-color);\n  animation: _ngcontent-%COMP%_skeleton-loading 1.5s ease-in-out infinite;\n}\n\n.skeleton-element[_ngcontent-%COMP%], .skeleton-cover[_ngcontent-%COMP%], .skeleton-title[_ngcontent-%COMP%], .skeleton-meta-item[_ngcontent-%COMP%], .skeleton-btn[_ngcontent-%COMP%], .skeleton-progress-bar[_ngcontent-%COMP%], .skeleton-time[_ngcontent-%COMP%], .skeleton-volume-slider[_ngcontent-%COMP%] {\n  background: var(--skeleton-color);\n  background-size: 200% 100%;\n  background-image: linear-gradient(90deg, var(--skeleton-color) 25%, var(--skeleton-highlight-color) 50%, var(--skeleton-color) 75%);\n}\n\n[_ngcontent-%COMP%]:root {\n  --skeleton-color: #e2e8f0;\n  --skeleton-highlight-color: #f1f5f9;\n}\n\n.dark-theme[_nghost-%COMP%], .dark-theme   [_nghost-%COMP%] {\n  --skeleton-color: #334155;\n  --skeleton-highlight-color: #475569;\n}\n\n@keyframes _ngcontent-%COMP%_skeleton-loading {\n  0% {\n    background-color: var(--gauzy-card-2);\n  }\n  50% {\n    background-color: var(--gauzy-card-1);\n  }\n  100% {\n    background-color: var(--gauzy-card-2);\n  }\n}\n@media (max-width: 480px) {\n  .skeleton-container[_ngcontent-%COMP%] {\n    padding: 1rem;\n    max-width: none;\n    margin: 0;\n  }\n  .skeleton-title[_ngcontent-%COMP%] {\n    width: 60%;\n  }\n  .skeleton-volume-slider[_ngcontent-%COMP%] {\n    width: 50px;\n  }\n  .skeleton-info[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n    gap: 0.5rem;\n  }\n}"],
        changeDetection: 0
      });
    }
  }
  return SoundshotPlayerSkeletonComponent;
})();

/***/ }),

/***/ 85308:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EH: () => (/* binding */ createEffect),
/* harmony export */   En: () => (/* binding */ Actions),
/* harmony export */   VP: () => (/* reexport safe */ ts_action__WEBPACK_IMPORTED_MODULE_0__.XI),
/* harmony export */   gp: () => (/* reexport safe */ ts_action_operators__WEBPACK_IMPORTED_MODULE_1__.g),
/* harmony export */   ni: () => (/* binding */ initEffects),
/* harmony export */   o1: () => (/* binding */ actions),
/* harmony export */   yw: () => (/* binding */ isEffect)
/* harmony export */ });
/* unused harmony exports EffectsManager, actionsDispatcher, actionsFactory, createEffectFn, dispatch, registerEffects, removeAllEffects, removeEffects, tapResult, toPayload, toProps */
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(36839);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(51698);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5424);
/* harmony import */ var ts_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58647);
/* harmony import */ var ts_action_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23884);





class Actions extends rxjs__WEBPACK_IMPORTED_MODULE_2__/* .Subject */ .B {
  dispatch(...actions) {
    actions.forEach(action => {
      this.next(action);
    });
  }
}
const actions = new Actions();
const dispatch = actions.dispatch.bind(actions);
const actionsDispatcher = actions.asObservable();
function coerceArray(value) {
  return Array.isArray(value) ? value : [value];
}
function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
}
function isEffect(effect) {
  return typeof effect.sourceFn === 'function' && effect.sourceFn(new Actions()) instanceof rxjs__WEBPACK_IMPORTED_MODULE_3__/* .Observable */ .c;
}
class EffectsManager {
  constructor(config) {
    this.effects = new WeakMap();
    this.destroyEffects$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__/* .Subject */ .B();
    this.config = {
      dispatchByDefault: false,
      ...config
    };
  }
  registerEffects(effects) {
    effects.forEach(effect => {
      this.subscribeEffect(effect);
    });
  }
  removeEffects(effects) {
    effects.forEach(effect => {
      this.unsubscribeEffect(effect);
    });
  }
  removeAllEffects() {
    this.destroyEffects$.next();
    this.effects = new WeakMap();
  }
  subscribeEffect(effect) {
    const actionsStream = this.config.customActionsStream || actions;
    const source = effect.sourceFn(actionsStream);
    const sub = source.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .takeUntil */ .Q)(this.destroyEffects$)).subscribe(maybeActions => {
      if (effect.config?.dispatch ?? this.config.dispatchByDefault) {
        const onlyActions = coerceArray(maybeActions).filter(maybeAction => checkAction(maybeAction));
        actionsStream.dispatch(...onlyActions);
      }
    });
    this.effects.set(effect, sub);
  }
  unsubscribeEffect(effect) {
    const sub = this.effects.get(effect);
    sub?.unsubscribe();
    this.effects.delete(effect);
  }
}
function checkAction(action) {
  if (typeof action === 'object' && action !== null && action.type) {
    return true;
  }
  throw new TypeError('Make sure to provide a valid action type or set the option {dispatch: false}');
}
let effectsManager;
function initEffects(config) {
  if (effectsManager) {
    return effectsManager;
  }
  return effectsManager = new EffectsManager(config);
}
function registerEffects(effects) {
  effectsManager.registerEffects(coerceArray(effects));
}
function removeEffects(effects) {
  effectsManager.removeEffects(coerceArray(effects));
}
function removeAllEffects() {
  effectsManager.removeAllEffects();
}
function actionsFactory(storeName) {
  return {
    create: (type, config) => {
      const modifiedStoreName = capitalize(storeName);
      return action(`[${modifiedStoreName}] ${type}`, config);
    }
  };
}
function toPayload() {
  return map(({
    payload
  }) => payload);
}
function toProps() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  return map(({
    type,
    ...props
  }) => props);
}
function createEffectFn(factoryFn) {
  return function (destroyed$) {
    const subject = new Subject();
    factoryFn(subject.asObservable()).pipe(takeUntil(destroyed$)).subscribe();
    return function (value) {
      subject.next(value);
    };
  };
}
function tapResult(next, error, complete) {
  return source => source.pipe(tap({
    next,
    error: error ?? console.error,
    complete
  }), catchError(() => EMPTY));
}
function createEffect(factory, config) {
  return {
    sourceFn: factory,
    config
  };
}


/***/ }),

/***/ 87301:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ PendingState)
/* harmony export */ });
/* harmony import */ var _utilities_extract_filename_from_url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28494);

class PendingState {
  handle(options, contextService) {
    contextService.toastrService.info('PLUGIN.VIDEO.STARTING_DOWNLOAD_FOR', 'PLUGIN.VIDEO.DOWNLOAD', {
      translationParams: {
        url: (0,_utilities_extract_filename_from_url__WEBPACK_IMPORTED_MODULE_0__/* .extractFilenameFromUrl */ .K)(options.url)
      }
    });
    contextService.start(options);
  }
}

/***/ }),

/***/ 88069:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   f: () => (/* binding */ CamshotItemSkeletonComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);

let CamshotItemSkeletonComponent = /*#__PURE__*/(() => {
  class CamshotItemSkeletonComponent {
    static {
      this.ɵfac = function CamshotItemSkeletonComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || CamshotItemSkeletonComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: CamshotItemSkeletonComponent,
        selectors: [["plug-camshot-item-skeleton"]],
        standalone: false,
        decls: 9,
        vars: 0,
        consts: [[1, "camshot-item", "skeleton"], [1, "thumbnail", "skeleton-box"], [1, "details"], [1, "skeleton-line", "title"], [1, "meta"], [1, "date", "skeleton-line"], [1, "size", "skeleton-line"], [1, "actions"], [1, "skeleton-icon"]],
        template: function CamshotItemSkeletonComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(5, "div", 5)(6, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(7, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(8, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
          }
        },
        styles: ["@keyframes _ngcontent-%COMP%_pulse {\n  0% {\n    background-color: var(--gauzy-card-2);\n  }\n  50% {\n    background-color: var(--gauzy-card-1);\n  }\n  100% {\n    background-color: var(--gauzy-card-2);\n  }\n}\n.details[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n\n.camshot-item.skeleton[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  transition: all 0.3s ease;\n  gap: 1rem;\n}\n.camshot-item.skeleton[_ngcontent-%COMP%]:hover {\n  box-shadow: var(--gauzy-shadow);\n  transform: translateY(-2px);\n}\n.camshot-item.skeleton[_ngcontent-%COMP%]   .thumbnail.skeleton-box[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 150px;\n  max-width: 50%;\n  border-radius: var(--border-radius);\n  flex-shrink: 0;\n  animation: _ngcontent-%COMP%_pulse 1.5s infinite ease-in-out;\n}\n.camshot-item.skeleton[_ngcontent-%COMP%]   .skeleton-line[_ngcontent-%COMP%] {\n  height: 1rem;\n  width: 80%;\n  animation: _ngcontent-%COMP%_pulse 1.5s infinite ease-in-out;\n  border-radius: 0.25rem;\n  margin-bottom: 0.5rem;\n}\n.camshot-item.skeleton[_ngcontent-%COMP%]   .skeleton-line.title[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.camshot-item.skeleton[_ngcontent-%COMP%]   .skeleton-line[_ngcontent-%COMP%]:last-child {\n  width: 60%;\n}\n.camshot-item.skeleton[_ngcontent-%COMP%]   .skeleton-icon[_ngcontent-%COMP%] {\n  height: 1.5rem;\n  \n\n  width: 4px;\n  \n\n  margin-right: 0.5rem;\n  \n\n  animation: _ngcontent-%COMP%_pulse 1.5s infinite ease-in-out;\n}\n\n@media (max-width: 1435px) {\n  .thumbnail.skeleton-box[_ngcontent-%COMP%] {\n    max-width: 300px !important;\n    max-height: 150px;\n  }\n}"],
        changeDetection: 0
      });
    }
  }
  return CamshotItemSkeletonComponent;
})();

/***/ }),

/***/ 89037:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   w: () => (/* binding */ EMPTY)
/* harmony export */ });
/* unused harmony export empty */
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40443);

const EMPTY = new _Observable__WEBPACK_IMPORTED_MODULE_0__/* .Observable */ .c(subscriber => subscriber.complete());
function empty(scheduler) {
  return scheduler ? emptyScheduled(scheduler) : EMPTY;
}
function emptyScheduled(scheduler) {
  return new Observable(subscriber => scheduler.schedule(() => subscriber.complete()));
}
//# sourceMappingURL=empty.js.map

/***/ }),

/***/ 89909:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ VideoUiModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(14572);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(10936);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(59238);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(38834);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(61801);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(56383);
/* harmony import */ var _ngneat_effects_ng__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10994);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(19223);
/* harmony import */ var ngx_moment__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(79415);
/* harmony import */ var _state_video_effect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57682);
/* harmony import */ var _state_video_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(51075);
/* harmony import */ var _state_video_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(72334);
/* harmony import */ var _shared_services_download_download_queue_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(36284);
/* harmony import */ var _shared_services_download_file_download_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(90835);
/* harmony import */ var _shared_services_download_strategies_file_save_strategy__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(98358);
/* harmony import */ var _shared_services_video_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(60984);
/* harmony import */ var _shared_services_web_share_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(38899);
/* harmony import */ var _video_ui_routing_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(724);
/* harmony import */ var _state_camshot_camshot_effect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(28382);
/* harmony import */ var _state_soundshot_soundshot_effect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(98646);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);




















let VideoUiModule = /*#__PURE__*/(() => {
  class VideoUiModule {
    static {
      this.ɵfac = function VideoUiModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || VideoUiModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .$C({
        type: VideoUiModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .G2t({
        providers: [(0,_ngneat_effects_ng__WEBPACK_IMPORTED_MODULE_1__/* .provideEffectsManager */ .Nv)(), (0,_ngneat_effects_ng__WEBPACK_IMPORTED_MODULE_1__/* .provideEffects */ .SI)(_state_video_effect__WEBPACK_IMPORTED_MODULE_2__/* .VideoEffects */ .U, _state_camshot_camshot_effect__WEBPACK_IMPORTED_MODULE_3__/* .CamshotEffects */ .s, _state_soundshot_soundshot_effect__WEBPACK_IMPORTED_MODULE_4__/* .SoundshotEffects */ .s), _state_video_query__WEBPACK_IMPORTED_MODULE_5__/* .VideoQuery */ .g, _state_video_store__WEBPACK_IMPORTED_MODULE_6__/* .VideoStore */ .V, _shared_services_video_service__WEBPACK_IMPORTED_MODULE_7__/* .VideoService */ .r, _shared_services_web_share_service__WEBPACK_IMPORTED_MODULE_8__/* .WebShareService */ .h, _shared_services_download_download_queue_service__WEBPACK_IMPORTED_MODULE_9__/* .DownloadQueueService */ .$, _shared_services_download_file_download_service__WEBPACK_IMPORTED_MODULE_10__/* .FileDownloadService */ .y, _shared_services_download_strategies_file_save_strategy__WEBPACK_IMPORTED_MODULE_11__/* .FileSaveStrategy */ .N, _nebular_theme__WEBPACK_IMPORTED_MODULE_12__/* .NbInfiniteListDirective */ .oyd],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_13__/* .CommonModule */ .MD, _nebular_theme__WEBPACK_IMPORTED_MODULE_12__/* .NbCardModule */ .lVF, _nebular_theme__WEBPACK_IMPORTED_MODULE_12__/* .NbIconModule */ .clu, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_14__/* .NoDataMessageModule */ .j, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_15__/* .SharedModule */ .G, _video_ui_routing_module__WEBPACK_IMPORTED_MODULE_16__/* .VideoUiRoutingModule */ .Y, _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_17__/* .GauzyFiltersModule */ .Q, _nebular_theme__WEBPACK_IMPORTED_MODULE_12__/* .NbButtonModule */ .P5N, _nebular_theme__WEBPACK_IMPORTED_MODULE_12__/* .NbPopoverModule */ .Ofb, _angular_forms__WEBPACK_IMPORTED_MODULE_18__/* .FormsModule */ .YN, _angular_forms__WEBPACK_IMPORTED_MODULE_18__/* .ReactiveFormsModule */ .X1, _nebular_theme__WEBPACK_IMPORTED_MODULE_12__/* .NbDialogModule */ .nZv, _nebular_theme__WEBPACK_IMPORTED_MODULE_12__/* .NbInputModule */ .pty, _nebular_theme__WEBPACK_IMPORTED_MODULE_12__/* .NbBadgeModule */ .iEK, _nebular_theme__WEBPACK_IMPORTED_MODULE_12__/* .NbProgressBarModule */ .XYW, _nebular_theme__WEBPACK_IMPORTED_MODULE_12__/* .NbListModule */ .PD_, ngx_moment__WEBPACK_IMPORTED_MODULE_19__/* .MomentModule */ .Js, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__/* .TranslateModule */ .h.forChild(), _nebular_theme__WEBPACK_IMPORTED_MODULE_12__/* .NbSpinnerModule */ .gYs, _nebular_theme__WEBPACK_IMPORTED_MODULE_12__/* .NbTabsetModule */ .AfG]
      });
    }
  }
  return VideoUiModule;
})();

/***/ }),

/***/ 90835:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   y: () => (/* binding */ FileDownloadService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45715);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40443);
/* harmony import */ var _utilities_extract_filename_from_url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28494);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26860);
/* harmony import */ var _strategies_file_save_strategy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(98358);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(54263);









let FileDownloadService = /*#__PURE__*/(() => {
  class FileDownloadService {
    constructor(http, fileSaveStrategy, errorHandler) {
      this.http = http;
      this.fileSaveStrategy = fileSaveStrategy;
      this.errorHandler = errorHandler;
      this.activeDownloads = new Map();
    }
    execute(options) {
      return new rxjs__WEBPACK_IMPORTED_MODULE_0__/* .Observable */ .c(observer => {
        const req = this.http.get(options.url, {
          reportProgress: true,
          observe: 'events',
          responseType: 'blob',
          headers: options.headers
        });
        const subscription = req.subscribe({
          next: event => {
            if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_1__/* .HttpEventType */ .hv.DownloadProgress && event.total !== undefined) {
              observer.next({
                percentage: Math.round(100 * event.loaded / event.total),
                loaded: event.loaded,
                total: event.total
              });
            } else if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_1__/* .HttpEventType */ .hv.Response) {
              const filename = options.filename || (0,_utilities_extract_filename_from_url__WEBPACK_IMPORTED_MODULE_2__/* .extractFilenameFromUrl */ .K)(options.url, 'download.mp4');
              this.fileSaveStrategy.save(event.body, filename);
              observer.complete();
            }
          },
          error: error => {
            this.errorHandler.handleError(error);
            observer.error(error);
          }
        });
        this.activeDownloads.set(options.url, subscription);
        return () => this.cancel(options.url);
      });
    }
    cancel(url) {
      const subscription = this.activeDownloads.get(url);
      if (subscription) {
        subscription.unsubscribe();
        this.activeDownloads.delete(url);
      }
    }
    static {
      this.ɵfac = function FileDownloadService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || FileDownloadService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵinject"] */ .KVO(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__/* .HttpClient */ .Qq), _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵinject"] */ .KVO(_strategies_file_save_strategy__WEBPACK_IMPORTED_MODULE_4__/* .FileSaveStrategy */ .N), _angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵinject"] */ .KVO(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_5__/* .ErrorHandlingService */ .X));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__/* ["ɵɵdefineInjectable"] */ .jDH({
        token: FileDownloadService,
        factory: FileDownloadService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return FileDownloadService;
})();

/***/ }),

/***/ 91776:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* binding */ concatMap)
/* harmony export */ });
/* harmony import */ var _mergeMap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58030);
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83297);


function concatMap(project, resultSelector) {
  return (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .T)(resultSelector) ? (0,_mergeMap__WEBPACK_IMPORTED_MODULE_1__/* .mergeMap */ .Z)(project, resultSelector, 1) : (0,_mergeMap__WEBPACK_IMPORTED_MODULE_1__/* .mergeMap */ .Z)(project, 1);
}
//# sourceMappingURL=concatMap.js.map

/***/ }),

/***/ 92278:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   n: () => (/* binding */ VideoDetailPageComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(84562);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9620);
/* harmony import */ var _ngneat_effects_ng__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(10994);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(95194);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(72368);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9780);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8563);
/* harmony import */ var _state_video_action__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(15325);
/* harmony import */ var _state_video_query__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(51075);
/* harmony import */ var _state_video_store__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(72334);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(26860);
/* harmony import */ var _ui_core_shared_src_lib_smart_data_layout_no_data_message_no_data_message_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(95959);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56383);
/* harmony import */ var _features_video_video_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(94953);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(14572);
/* harmony import */ var _features_camshot_list_camshot_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25295);
/* harmony import */ var _features_soundshot_list_soundshot_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(40999);
/* harmony import */ var _features_video_list_video_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8863);





















const _c0 = ["detail"];
const VideoDetailPageComponent_Defer_12_DepsFn = () => [_features_camshot_list_camshot_list_component__WEBPACK_IMPORTED_MODULE_0__/* .CamshotListComponent */ .T];
const VideoDetailPageComponent_Defer_17_DepsFn = () => [_features_soundshot_list_soundshot_list_component__WEBPACK_IMPORTED_MODULE_1__/* .SoundshotListComponent */ .p];
const VideoDetailPageComponent_Conditional_7_Defer_3_DepsFn = () => [_nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbInfiniteListDirective */ .oyd, _features_video_list_video_list_component__WEBPACK_IMPORTED_MODULE_3__/* .VideoListComponent */ .R];
function VideoDetailPageComponent_Conditional_7_Defer_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵlistener"] */ .bIt("bottomThreshold", function VideoDetailPageComponent_Conditional_7_Defer_1_Template_div_bottomThreshold_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵrestoreView"] */ .eBV(_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .XpG(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵresetView"] */ .Njj(ctx_r1.fetchMoreVideos());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelement"] */ .nrm(1, "plug-video-list", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Y8G("threshold", 500)("throttleTime", 300);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Y8G("vertical", true);
  }
}
function VideoDetailPageComponent_Conditional_7_DeferPlaceholder_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelement"] */ .nrm(0, "ngx-no-data-message", 9);
  }
}
function VideoDetailPageComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(0, "nb-tab", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .DNE(1, VideoDetailPageComponent_Conditional_7_Defer_1_Template, 2, 3)(2, VideoDetailPageComponent_Conditional_7_DeferPlaceholder_2_Template, 1, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdefer"] */ .nv$(3, 1, VideoDetailPageComponent_Conditional_7_Defer_3_DepsFn, null, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdeferOnViewport"] */ .qhs(0, -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s();
  }
}
function VideoDetailPageComponent_Defer_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelement"] */ .nrm(1, "plug-camshot-list", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .XpG();
    const timeSlotId_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵreadContextLet"] */ .r8f(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Y8G("timeSlotId", timeSlotId_r3);
  }
}
function VideoDetailPageComponent_DeferPlaceholder_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelement"] */ .nrm(0, "ngx-no-data-message", 12);
  }
}
function VideoDetailPageComponent_Defer_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelement"] */ .nrm(1, "plug-soundshot-list", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .XpG();
    const timeSlotId_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵreadContextLet"] */ .r8f(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Y8G("timeSlotId", timeSlotId_r3);
  }
}
function VideoDetailPageComponent_DeferPlaceholder_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelement"] */ .nrm(0, "ngx-no-data-message", 13);
  }
}
let VideoDetailPageComponent = /*#__PURE__*/(() => {
  let VideoDetailPageComponent = class VideoDetailPageComponent {
    constructor(actions, route, router, videoQuery, videoStore) {
      this.actions = actions;
      this.route = route;
      this.router = router;
      this.videoQuery = videoQuery;
      this.videoStore = videoStore;
      this.skip = 0;
      this.hasNext = false;
      this.take = 10;
    }
    ngOnInit() {
      this.videoQuery.select().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__/* .map */ .T)(({
        count
      }) => count > this.skip * this.take), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__/* .distinctUntilChanged */ .F)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .M)(hasNext => this.hasNext = hasNext), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__/* .untilDestroyed */ .s)(this)).subscribe();
      this.route.params.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .M)(({
        id
      }) => {
        this.actions.dispatch(_state_video_action__WEBPACK_IMPORTED_MODULE_9__/* .VideoActions */ .F.fetchOneVideo(id, {
          relations: ['uploadedBy', 'uploadedBy.user']
        }));
      }), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__/* .untilDestroyed */ .s)(this)).subscribe();
    }
    ngAfterViewInit() {
      this.router.events.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .M)(evt => {
        if (evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_10__/* .NavigationEnd */ .wF) {
          // Check if there's a card
          if (!this.card) {
            return;
          }
          // trick the Router into believing it's last link wasn't previously loaded
          this.router.navigated = false;
          // Get element
          const element = this.card.nativeElement;
          // Check if it exists
          if (!element) {
            return;
          }
          // Scroll back to top
          element.scroll({
            top: 0,
            behavior: 'smooth'
          });
          // Reset skip
          this.skip = 1;
          // fetch videos
          this.fetchVideos();
        }
      }), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__/* .untilDestroyed */ .s)(this)).subscribe();
    }
    fetchVideos() {
      this.actions.dispatch(_state_video_action__WEBPACK_IMPORTED_MODULE_9__/* .VideoActions */ .F.fetchVideosAndExclude(this.route.snapshot.params['id'], {
        skip: this.skip,
        take: this.take,
        relations: ['uploadedBy', 'uploadedBy.user'],
        order: {
          recordedAt: 'DESC'
        }
      }));
    }
    fetchMoreVideos() {
      if (this.hasNext) {
        this.skip++;
        this.fetchVideos();
      }
    }
    reset() {
      this.skip = 0;
      this.hasNext = false;
      this.videoStore.update({
        videos: []
      });
    }
    get showList$() {
      return this.videoQuery.count$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__/* .map */ .T)(count => count > 1), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__/* .untilDestroyed */ .s)(this));
    }
    get video$() {
      return this.videoQuery.video$;
    }
    ngOnDestroy() {
      this.reset();
    }
    static {
      this.ɵfac = function VideoDetailPageComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || VideoDetailPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .rXU(_ngneat_effects_ng__WEBPACK_IMPORTED_MODULE_11__/* .Actions */ .En), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_router__WEBPACK_IMPORTED_MODULE_10__/* .ActivatedRoute */ .nX), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_router__WEBPACK_IMPORTED_MODULE_10__/* .Router */ .Ix), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .rXU(_state_video_query__WEBPACK_IMPORTED_MODULE_12__/* .VideoQuery */ .g), _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .rXU(_state_video_store__WEBPACK_IMPORTED_MODULE_13__/* .VideoStore */ .V));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdefineComponent"] */ .VBU({
        type: VideoDetailPageComponent,
        selectors: [["lib-video-detail-page"]],
        viewQuery: function VideoDetailPageComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵviewQuery"] */ .GBs(_c0, 5);
          }
          if (rf & 2) {
            let _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵqueryRefresh"] */ .mGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵloadQuery"] */ .lsd()) && (ctx.card = _t.first);
          }
        },
        standalone: false,
        decls: 19,
        vars: 6,
        consts: [["detail", ""], [1, "custom-card"], [1, "custom-card-body"], [1, "w-100"], ["tabTitle", "Similar"], ["tabTitle", "Camshots"], ["tabTitle", "Soundshots"], ["nbInfiniteList", "", 1, "list", 3, "bottomThreshold", "threshold", "throttleTime"], [3, "vertical"], ["status", "info", "message", "Loading similar videos...", 1, "no-data"], [1, "list"], [3, "timeSlotId"], ["status", "danger", "message", "Loading camshots...", 1, "no-data"], ["status", "info", "message", "Loading soundshots...", 1, "no-data"]],
        template: function VideoDetailPageComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdeclareLet"] */ .SS7(0);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .nI1(1, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(2, "div", 1)(3, "div", 2, 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelement"] */ .nrm(5, "plug-video", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(6, "nb-tabset");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .DNE(7, VideoDetailPageComponent_Conditional_7_Template, 5, 0, "nb-tab", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipe"] */ .nI1(8, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(9, "nb-tab", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .DNE(10, VideoDetailPageComponent_Defer_10_Template, 2, 1)(11, VideoDetailPageComponent_DeferPlaceholder_11_Template, 1, 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdefer"] */ .nv$(12, 10, VideoDetailPageComponent_Defer_12_DepsFn, null, 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdeferOnViewport"] */ .qhs(0, -1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .j41(14, "nb-tab", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .DNE(15, VideoDetailPageComponent_Defer_15_Template, 2, 1)(16, VideoDetailPageComponent_DeferPlaceholder_16_Template, 1, 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdefer"] */ .nv$(17, 15, VideoDetailPageComponent_Defer_17_DepsFn, null, 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdeferOnViewport"] */ .qhs(0, -1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .k0s()()()();
          }
          if (rf & 2) {
            let tmp_1_0;
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵstoreLet"] */ .bH3((tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .bMT(1, 1, ctx.video$)) == null ? null : tmp_1_0.timeSlotId);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .R7$(7);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵconditional"] */ .vxM(_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵpipeBind1"] */ .bMT(8, 4, ctx.showList$) ? 7 : -1);
          }
        },
        dependencies: [_ui_core_shared_src_lib_smart_data_layout_no_data_message_no_data_message_component__WEBPACK_IMPORTED_MODULE_14__/* .NoDataMessageComponent */ ._, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbTabsetComponent */ .Hsi, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbTabComponent */ .d3K, _features_video_video_component__WEBPACK_IMPORTED_MODULE_15__/* .VideoComponent */ .d, _angular_common__WEBPACK_IMPORTED_MODULE_16__/* .AsyncPipe */ .Jj],
        styles: [".custom-card[_ngcontent-%COMP%] {\n  height: calc(100vh - 17.5rem);\n  background-color: var(--gauzy-card-2);\n  border-radius: 0 0 var(--border-radius) var(--border-radius);\n  display: flex;\n  flex-direction: column;\n}\n.custom-card[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%] {\n  padding: 1rem;\n  height: 100%;\n  width: 100%;\n}\n.custom-card[_ngcontent-%COMP%]   .custom-card-header[_ngcontent-%COMP%] {\n  padding-top: 1rem;\n}\n.custom-card[_ngcontent-%COMP%]   .custom-card-body[_ngcontent-%COMP%] {\n  flex-grow: 10;\n  padding: 1rem;\n  overflow-y: auto;\n}\n.custom-card[_ngcontent-%COMP%]     ngx-no-data-message nb-spinner {\n  border-radius: var(--border-radius);\n}\n\n.custom-card-body[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n}\n.custom-card-body[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%] {\n  overflow-y: auto;\n  min-width: 416px;\n  height: 100%;\n}\n.custom-card-body[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%] {\n  margin: 416px;\n}\n\n  nb-tab.content-active {\n  padding: 1rem;\n  height: calc(100vh - 22.5rem);\n  background: var(--gauzy-card-2);\n  border-radius: var(--border-radius);\n}\n  nb-tab.content-active:first-child {\n  border-top-left-radius: 0;\n  border: 1px solid red;\n}\n\n  nb-route-tabset .tab-link {\n  text-transform: unset;\n}\n\n@media (max-width: 1435px) {\n  .custom-card-body[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .custom-card-body[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%] {\n    min-height: -webkit-fill-available;\n  }\n}"],
        changeDetection: 0
      });
    }
  };
  VideoDetailPageComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_17__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__/* .UntilDestroy */ .d)({
    checkProperties: true
  }), (0,tslib__WEBPACK_IMPORTED_MODULE_17__/* .__metadata */ .Sn)("design:paramtypes", [_ngneat_effects_ng__WEBPACK_IMPORTED_MODULE_11__/* .Actions */ .En, _angular_router__WEBPACK_IMPORTED_MODULE_10__/* .ActivatedRoute */ .nX, _angular_router__WEBPACK_IMPORTED_MODULE_10__/* .Router */ .Ix, _state_video_query__WEBPACK_IMPORTED_MODULE_12__/* .VideoQuery */ .g, _state_video_store__WEBPACK_IMPORTED_MODULE_13__/* .VideoStore */ .V])], VideoDetailPageComponent);
  return VideoDetailPageComponent;
})();


/***/ }),

/***/ 94953:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   d: () => (/* binding */ VideoComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(84562);
/* harmony import */ var _gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(55101);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56383);
/* harmony import */ var _ngneat_effects_ng__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(10994);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(95194);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(84070);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9780);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8563);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(66174);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(72368);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(951);
/* harmony import */ var _state_video_action__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(15325);
/* harmony import */ var _state_video_query__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(51075);
/* harmony import */ var _shared_ui_video_edit_video_edit_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(22196);
/* harmony import */ var _shared_ui_video_metadata_video_metadata_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(17730);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(26860);
/* harmony import */ var _ui_core_shared_src_lib_smart_data_layout_no_data_message_no_data_message_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(95959);
/* harmony import */ var _video_download_manager_video_download_manager_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(52443);
/* harmony import */ var _shared_ui_video_skeleton_video_skeleton_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(25310);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(14572);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(19223);
/* harmony import */ var _ui_core_shared_src_lib_components_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(32386);
/* harmony import */ var _shared_ui_video_player_video_player_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56742);
/* harmony import */ var _shared_ui_video_actions_buttons_action_button_action_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(50278);
/* harmony import */ var _shared_ui_video_actions_buttons_action_button_group_action_button_group_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(32694);
























const _c0 = ["videoPlayer"];
const VideoComponent_Defer_6_DepsFn = () => [_nebular_theme__WEBPACK_IMPORTED_MODULE_0__/* .NbIconComponent */ .tHu, _ui_core_shared_src_lib_components_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_1__/* .AvatarComponent */ .f, _nebular_theme__WEBPACK_IMPORTED_MODULE_0__/* .NbPopoverDirective */ .vs7, _shared_ui_video_player_video_player_component__WEBPACK_IMPORTED_MODULE_2__/* .VideoPlayerComponent */ ._, _shared_ui_video_actions_buttons_action_button_action_button_component__WEBPACK_IMPORTED_MODULE_3__/* .ActionButtonComponent */ .C, _shared_ui_video_actions_buttons_action_button_group_action_button_group_component__WEBPACK_IMPORTED_MODULE_4__/* .ActionButtonGroupComponent */ .j, _angular_common__WEBPACK_IMPORTED_MODULE_5__/* .DatePipe */ .vh];
const _c1 = () => ({
  type: "zoom"
});
const _c2 = a0 => ({
  animation: a0
});
function VideoComponent_Defer_2_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementStart"] */ .j41(0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelement"] */ .nrm(1, "ngx-avatar", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵnextContext"] */ .XpG(2);
    const video_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵreadContextLet"] */ .r8f(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵproperty"] */ .Y8G("src", video_r1.uploadedBy == null ? null : video_r1.uploadedBy.user.imageUrl)("name", video_r1.uploadedBy == null ? null : video_r1.uploadedBy.fullName)("id", video_r1.uploadedBy == null ? null : video_r1.uploadedBy.id)("employee", video_r1.uploadedBy);
  }
}
function VideoComponent_Defer_2_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementStart"] */ .j41(0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵnextContext"] */ .XpG(2);
    const video_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵreadContextLet"] */ .r8f(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", video_r1.description, " ");
  }
}
function VideoComponent_Defer_2_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelement"] */ .nrm(0, "plug-action-button-group", 17);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵnextContext"] */ .XpG(2);
    const video_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵreadContextLet"] */ .r8f(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵproperty"] */ .Y8G("buttons", ctx_r1.buttons)("data", video_r1);
  }
}
function VideoComponent_Defer_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementStart"] */ .j41(0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelement"] */ .nrm(1, "plug-video-player", 6, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementStart"] */ .j41(3, "div", 7)(4, "div", 8)(5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵtext"] */ .EFF(6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementStart"] */ .j41(7, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelement"] */ .nrm(8, "plug-action-button", 11)(9, "nb-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵtemplate"] */ .DNE(10, VideoComponent_Defer_2_Conditional_10_Template, 2, 4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementStart"] */ .j41(11, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵtext"] */ .EFF(12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵpipe"] */ .nI1(13, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵtemplate"] */ .DNE(14, VideoComponent_Defer_2_Conditional_14_Template, 2, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵtemplate"] */ .DNE(15, VideoComponent_Defer_2_ng_template_15_Template, 1, 2, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵtemplateRefExtractor"] */ .C5r);
  }
  if (rf & 2) {
    const actions_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵreference"] */ .sdS(16);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵnextContext"] */ .XpG();
    const manager_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵreference"] */ .sdS(9);
    const video_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵreadContextLet"] */ .r8f(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵproperty"] */ .Y8G("src", video_r1.fullUrl)("controls", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵadvance"] */ .R7$(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", video_r1.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵproperty"] */ .Y8G("nbPopover", manager_r4)("data", video_r1)("button", ctx_r1.downloadButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵproperty"] */ .Y8G("nbPopover", actions_r3)("options", _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵpureFunction1"] */ .eq3(15, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵpureFunction0"] */ .lJ4(14, _c1)));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵconditional"] */ .vxM(video_r1.uploadedBy ? 10 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵpipeBind2"] */ .i5U(13, 11, video_r1.recordedAt, "medium"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵconditional"] */ .vxM(video_r1.description ? 14 : -1);
  }
}
function VideoComponent_DeferLoading_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelement"] */ .nrm(0, "ngx-no-data-message", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵpipe"] */ .nI1(1, "translate");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵproperty"] */ .Y8G("nbSpinner", true)("message", _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵpipeBind1"] */ .bMT(1, 2, "PLUGIN.VIDEO.LOADING_VIDEOS"));
  }
}
function VideoComponent_DeferPlaceholder_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelement"] */ .nrm(0, "plug-video-skeleton");
  }
}
function VideoComponent_DeferError_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelement"] */ .nrm(0, "ngx-no-data-message", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵpipe"] */ .nI1(1, "translate");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵproperty"] */ .Y8G("message", _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵpipeBind1"] */ .bMT(1, 1, "PLUGIN.VIDEO.NOT_FOUND"));
  }
}
function VideoComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelement"] */ .nrm(0, "plug-video-download-manager");
  }
}
let VideoComponent = /*#__PURE__*/(() => {
  let VideoComponent = class VideoComponent {
    constructor(videoQuery, dialogService, actions) {
      this.videoQuery = videoQuery;
      this.dialogService = dialogService;
      this.actions = actions;
      this.downloadButton = {
        label: 'BUTTONS.DOWNLOAD',
        icon: 'download-outline',
        status: 'primary',
        hidden: false,
        disabled: false,
        action: this.download.bind(this)
      };
      this.buttons = [{
        label: 'BUTTONS.EDIT',
        icon: 'edit-outline',
        status: 'primary',
        hidden: false,
        disabled: false,
        action: this.edit.bind(this)
      }, {
        label: 'BUTTONS.GET_INFO',
        icon: 'settings-2-outline',
        status: 'info',
        hidden: false,
        disabled: false,
        action: this.metadata.bind(this)
      }, {
        label: 'BUTTONS.SHARE',
        icon: 'share-outline',
        status: 'success',
        hidden: false,
        disabled: false,
        action: this.share.bind(this)
      }, {
        label: 'BUTTONS.DELETE',
        icon: 'trash-2-outline',
        status: 'danger',
        hidden: false,
        disabled: false,
        action: this.delete.bind(this)
      }];
    }
    ngAfterViewInit() {
      this.video$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__/* .filter */ .p)(video => !!this.video && !!video), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__/* .distinctUntilChanged */ .F)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__/* .tap */ .M)(() => this.video.player.load()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__/* .untilDestroyed */ .s)(this)).subscribe();
    }
    get video$() {
      return this.videoQuery.video$;
    }
    get isAvailable$() {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_11__/* .combineLatest */ .z)([this.videoQuery.isAvailable$, this.isLoading$]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_12__/* .map */ .T)(([isAvailable, isLoading]) => isAvailable && !isLoading));
    }
    get isLoading$() {
      return this.videoQuery.isLoading$;
    }
    edit(video) {
      this.dialogService.open(_shared_ui_video_edit_video_edit_component__WEBPACK_IMPORTED_MODULE_13__/* .VideoEditComponent */ .l, {
        hasBackdrop: true,
        context: {
          video
        }
      }).onClose.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_14__/* .take */ .s)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__/* .filter */ .p)(Boolean), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__/* .tap */ .M)(update => this.actions.dispatch(_state_video_action__WEBPACK_IMPORTED_MODULE_15__/* .VideoActions */ .F.updateVideo(video.id, update)))).subscribe();
    }
    metadata(video) {
      this.dialogService.open(_shared_ui_video_metadata_video_metadata_component__WEBPACK_IMPORTED_MODULE_16__/* .VideoMetadataComponent */ .U, {
        hasBackdrop: true,
        context: {
          video
        }
      });
    }
    share(video) {
      this.actions.dispatch(_state_video_action__WEBPACK_IMPORTED_MODULE_15__/* .VideoActions */ .F.shareVideos({
        title: video.title,
        text: video.description,
        fileUrls: [video.fullUrl]
      }));
    }
    delete(video) {
      this.dialogService.open(_gauzy_ui_core_shared__WEBPACK_IMPORTED_MODULE_17__/* .DeleteConfirmationComponent */ .u, {
        hasBackdrop: true,
        context: {
          recordType: 'video',
          isRecord: false
        }
      }).onClose.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_14__/* .take */ .s)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__/* .filter */ .p)(Boolean), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__/* .tap */ .M)(() => this.actions.dispatch(_state_video_action__WEBPACK_IMPORTED_MODULE_15__/* .VideoActions */ .F.deleteVideo(video.id)))).subscribe();
    }
    download({
      fullUrl
    }) {
      this.actions.dispatch(_state_video_action__WEBPACK_IMPORTED_MODULE_15__/* .VideoActions */ .F.addToQueue(fullUrl));
    }
    static {
      this.ɵfac = function VideoComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || VideoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵdirectiveInject"] */ .rXU(_state_video_query__WEBPACK_IMPORTED_MODULE_18__/* .VideoQuery */ .g), _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵdirectiveInject"] */ .rXU(_nebular_theme__WEBPACK_IMPORTED_MODULE_0__/* .NbDialogService */ .S0W), _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵdirectiveInject"] */ .rXU(_ngneat_effects_ng__WEBPACK_IMPORTED_MODULE_19__/* .Actions */ .En));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵdefineComponent"] */ .VBU({
        type: VideoComponent,
        selectors: [["plug-video"]],
        viewQuery: function VideoComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵviewQuery"] */ .GBs(_c0, 5);
          }
          if (rf & 2) {
            let _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵqueryRefresh"] */ .mGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵloadQuery"] */ .lsd()) && (ctx.video = _t.first);
          }
        },
        standalone: false,
        decls: 10,
        vars: 3,
        consts: [["manager", ""], ["videoPlayer", ""], ["actions", ""], [1000, 300], [500], [1, "video"], [3, "src", "controls"], [1, "info"], [1, "video-title-container"], [1, "title"], [1, "actions"], ["nbPopoverTrigger", "hover", "nbPopoverPlacement", "bottom", 3, "nbPopover", "data", "button"], ["nbPopoverPlacement", "bottom", "icon", "more-vertical-outline", 3, "nbPopover", "options"], [1, "author"], [1, "date"], [1, "description"], [1, "avatar-dashboard", 3, "src", "name", "id", "employee"], [3, "buttons", "data"], ["status", "primary", 3, "nbSpinner", "message"], ["status", "danger", 3, "message"]],
        template: function VideoComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵdeclareLet"] */ .SS7(0);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵpipe"] */ .nI1(1, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵtemplate"] */ .DNE(2, VideoComponent_Defer_2_Template, 17, 17)(3, VideoComponent_DeferLoading_3_Template, 2, 4)(4, VideoComponent_DeferPlaceholder_4_Template, 1, 0)(5, VideoComponent_DeferError_5_Template, 2, 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵdefer"] */ .nv$(6, 2, VideoComponent_Defer_6_DepsFn, 3, 4, 5, 3, 4, _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵdeferEnableTimerScheduling"] */ .T$4);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵdeferOnViewport"] */ .qhs(0, -1);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵdeferPrefetchOnIdle"] */ .jbH();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵtemplate"] */ .DNE(8, VideoComponent_ng_template_8_Template, 1, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵtemplateRefExtractor"] */ .C5r);
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵstoreLet"] */ .bH3(_angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵpipeBind1"] */ .bMT(1, 0, ctx.video$));
          }
        },
        dependencies: [_ui_core_shared_src_lib_smart_data_layout_no_data_message_no_data_message_component__WEBPACK_IMPORTED_MODULE_20__/* .NoDataMessageComponent */ ._, _nebular_theme__WEBPACK_IMPORTED_MODULE_0__/* .NbSpinnerDirective */ .zwc, _video_download_manager_video_download_manager_component__WEBPACK_IMPORTED_MODULE_21__/* .VideoDownloadManagerComponent */ .O, _shared_ui_video_skeleton_video_skeleton_component__WEBPACK_IMPORTED_MODULE_22__/* .VideoSkeletonComponent */ .K, _angular_common__WEBPACK_IMPORTED_MODULE_5__/* .AsyncPipe */ .Jj, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__/* .TranslatePipe */ .D9],
        styles: [".video[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  height: 100%;\n  width: 100%;\n  overflow-y: auto;\n}\n\n.video-title-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.video-title-container[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.video-title-container[_ngcontent-%COMP%]   nb-icon[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.info[_ngcontent-%COMP%] {\n  color: var(--gauzy-text-color-1);\n}\n.info[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: bold;\n  margin-bottom: 8px;\n  color: var(--gauzy-text-color-1);\n  line-height: 30px;\n}\n.info[_ngcontent-%COMP%]   .author[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: var(--gauzy-text-color-2);\n  margin-bottom: 4px;\n}\n.info[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--gauzy-text-color-2);\n  margin-bottom: 16px;\n}\n.info[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  line-height: 1.6;\n  color: var(--gauzy-text-color-1);\n  background-color: var(--gauzy-card-2);\n  padding: 1rem;\n  border-radius: var(--border-radius);\n}\n\n@media (max-width: 768px) {\n  .title[_ngcontent-%COMP%] {\n    font-size: 1.25rem;\n  }\n  .author[_ngcontent-%COMP%], \n   .date[_ngcontent-%COMP%] {\n    font-size: 0.875rem;\n  }\n  .description[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n  }\n}"],
        changeDetection: 0
      });
    }
  };
  VideoComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_24__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__/* .UntilDestroy */ .d)({
    checkProperties: true
  }), (0,tslib__WEBPACK_IMPORTED_MODULE_24__/* .__metadata */ .Sn)("design:paramtypes", [_state_video_query__WEBPACK_IMPORTED_MODULE_18__/* .VideoQuery */ .g, _nebular_theme__WEBPACK_IMPORTED_MODULE_0__/* .NbDialogService */ .S0W, _ngneat_effects_ng__WEBPACK_IMPORTED_MODULE_19__/* .Actions */ .En])], VideoComponent);
  return VideoComponent;
})();


/***/ }),

/***/ 95194:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   d: () => (/* binding */ UntilDestroy),
/* harmony export */   s: () => (/* binding */ untilDestroyed)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76528);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8442);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(89037);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(58030);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(22279);



const NG_PIPE_DEF = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵNG_PIPE_DEF"] */ .YHP;
function isPipe(target) {
  return !!target[NG_PIPE_DEF];
}

/**
 * Applied to instances and stores `Subject` instance when
 * no custom destroy method is provided.
 */
const DESTROY = Symbol('__destroy');
/**
 * Applied to definitions and informs that class is decorated
 */
const DECORATOR_APPLIED = Symbol('__decoratorApplied');
/**
 * If we use the `untilDestroyed` operator multiple times inside the single
 * instance providing different `destroyMethodName`, then all streams will
 * subscribe to the single subject. If any method is invoked, the subject will
 * emit and all streams will be unsubscribed. We wan't to prevent this behavior,
 * thus we store subjects under different symbols.
 */
function getSymbol(destroyMethodName) {
  if (typeof destroyMethodName === 'string') {
    return Symbol(`__destroy__${destroyMethodName}`);
  } else {
    return DESTROY;
  }
}
function markAsDecorated(type) {
  // Store this property on the prototype if it's an injectable class, component or directive.
  // We will be able to handle class extension this way.
  type.prototype[DECORATOR_APPLIED] = true;
}
function createSubjectOnTheInstance(instance, symbol) {
  if (!instance[symbol]) {
    instance[symbol] = new rxjs__WEBPACK_IMPORTED_MODULE_1__/* .Subject */ .B();
  }
}
function completeSubjectOnTheInstance(instance, symbol) {
  if (instance[symbol]) {
    instance[symbol].next();
    instance[symbol].complete();
    // We also have to re-assign this property thus in the future
    // we will be able to create new subject on the same instance.
    instance[symbol] = null;
  }
}
function unsubscribe(property) {
  if (property instanceof rxjs__WEBPACK_IMPORTED_MODULE_2__/* .Subscription */ .yU) {
    property.unsubscribe();
  }
}
function unsubscribeIfPropertyIsArrayLike(property) {
  Array.isArray(property) && property.forEach(unsubscribe);
}
function decorateNgOnDestroy(ngOnDestroy, options) {
  return function () {
    // Invoke the original `ngOnDestroy` if it exists
    ngOnDestroy && ngOnDestroy.call(this);
    // It's important to use `this` instead of caching instance
    // that may lead to memory leaks
    completeSubjectOnTheInstance(this, getSymbol());
    // Check if subscriptions are pushed to some array
    if (options.arrayName) {
      unsubscribeIfPropertyIsArrayLike(this[options.arrayName]);
    }
    // Loop through the properties and find subscriptions
    if (options.checkProperties) {
      for (const property in this) {
        if (options.blackList?.includes(property)) {
          continue;
        }
        unsubscribe(this[property]);
      }
    }
  };
}
function decorateProviderDirectiveOrComponent(type, options) {
  type.prototype.ngOnDestroy = decorateNgOnDestroy(type.prototype.ngOnDestroy, options);
}
function decoratePipe(type, options) {
  const def = type.ɵpipe;
  def.onDestroy = decorateNgOnDestroy(def.onDestroy, options);
}
function UntilDestroy(options = {}) {
  return type => {
    if (isPipe(type)) {
      decoratePipe(type, options);
    } else {
      decorateProviderDirectiveOrComponent(type, options);
    }
    markAsDecorated(type);
  };
}

// `LView` is an array where each index matches the specific data structure.
// The 7th element in an `LView` is an array of cleanup listeners. They are
// invoked when the view is removed (similar to `ComponentRef.onDestroy`).
const CLEANUP = 7;
const CheckerHasBeenSet = Symbol('CheckerHasBeenSet');
function setupSubjectUnsubscribedChecker(instance, destroy$) {
  // This function is used within the `untilDestroyed` operator and setups a function that
  // listens for the view removal and checks if the `destroy$` subject has any observers (usually `takeUntil`).
  // Note: this code will not be shipped into production since it's guarded with `ngDevMode`,
  // this means it'll exist only in development mode.
  if (instance[CheckerHasBeenSet] || isAngularInTestMode()) {
    return;
  }
  runOutsideAngular(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_3__/* .from */ .H)(Promise.resolve()).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .mergeMap */ .Z)(() => {
    let lContext;
    try {
      // The `ɵgetLContext` might not work for a pipe, because it's not a component nor a directive,
      // which means there's no `RNode` for an instance.
      lContext = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵgetLContext"] */ .xtB)(instance);
    } catch {
      lContext = null;
    }
    const lView = lContext?.lView;
    if (lView == null) {
      return rxjs__WEBPACK_IMPORTED_MODULE_5__/* .EMPTY */ .w;
    }
    const lCleanup = lView[CLEANUP] || (lView[CLEANUP] = []);
    const cleanupHasBeenExecuted$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__/* .Subject */ .B();
    // Note: this function is named for debugging purposes.
    lCleanup.push(function untilDestroyedLCleanup() {
      // We leave the Angular zone, so RxJS will also call subsequent `next` functions
      // outside of the Angular zone, which is done to avoid scheduling a microtask (through
      // `asapScheduler`) within the Angular zone.
      runOutsideAngular(() => {
        cleanupHasBeenExecuted$.next();
        cleanupHasBeenExecuted$.complete();
      });
    });
    return cleanupHasBeenExecuted$;
  }),
  // We can't use `observeOn(asapScheduler)` because this might break the app's change detection.
  // RxJS schedulers coalesce tasks and then flush the queue, which means our task might be scheduled
  // within the root zone, and then all of the tasks (that were set up by developers in the Angular zone)
  // will also be flushed in the root zone.
  (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .mergeMap */ .Z)(() => Promise.resolve())).subscribe(() => {
    // Note: The `observed` property is available only in RxJS@7.2.0, which will throw
    // an error in lower versions. We have integration test with RxJS@6 to ensure we don't
    // import operators from `rxjs`; that's why it's wrapped into braces. The `observers`
    // property is also being deprecated.
    const observed = destroy$['observed'] ?? destroy$['observers'].length > 0;
    if (observed) {
      console.warn(createMessage(instance));
    }
  }));
  instance[CheckerHasBeenSet] = true;
}
function isAngularInTestMode() {
  // Gets whether the code is currently running in a test environment.
  // We don't use `declare const` because it might cause conflicts with the real typings.
  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    typeof __karma__ !== 'undefined' && !!__karma__ ||
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    typeof jasmine !== 'undefined' && !!jasmine ||
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    typeof jest !== 'undefined' && !!jest ||
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    typeof Mocha !== 'undefined' && !!Mocha ||
    // Jest is not defined in ESM mode since it must be access only by importing from `@jest/globals`.
    // There's no way to check if we're in Jest ESM mode or not, but we can check if the `process` is defined.
    // Note: it's required to check for `[object process]` because someone might be running unit tests with
    // Webpack and shimming `process`.
    typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]'
  );
}
function runOutsideAngular(fn) {
  // We cannot inject the `NgZone` class when running the checker. The `__ngContext__` is read
  // for the first time within a microtask which triggers change detection; we want to avoid that.
  // The `Zone` is always available globally when the `zone.js` is imported. Otherwise, it may be
  // nooped through bootstrap options. The `NgZone.runOutsideAngular` calls `Zone.root.run`, so we're
  // safe calling that function directly.
  const Zone = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵglobal"] */ .JZv.Zone;
  const isNgZoneEnabled = !!Zone && typeof Zone.root?.run === 'function';
  return isNgZoneEnabled ? Zone.root.run(fn) : fn();
}
function createMessage(instance) {
  return `
  The ${instance.constructor.name} still has subscriptions that haven't been unsubscribed.
  This may happen if the class extends another class decorated with @UntilDestroy().
  The child class implements its own ngOnDestroy() method but doesn't call super.ngOnDestroy().
  Let's look at the following example:
  @UntilDestroy()
  @Directive()
  export abstract class BaseDirective {}
  @Component({ template: '' })
  export class ConcreteComponent extends BaseDirective implements OnDestroy {
    constructor() {
      super();
      someObservable$.pipe(untilDestroyed(this)).subscribe();
    }
    ngOnDestroy(): void {
      // Some logic here...
    }
  }
  The BaseDirective.ngOnDestroy() will not be called since Angular will call ngOnDestroy()
  on the ConcreteComponent, but not on the BaseDirective.
  One of the solutions is to declare an empty ngOnDestroy method on the BaseDirective:
  @UntilDestroy()
  @Directive()
  export abstract class BaseDirective {
    ngOnDestroy(): void {}
  }
  @Component({ template: '' })
  export class ConcreteComponent extends BaseDirective implements OnDestroy {
    constructor() {
      super();
      someObservable$.pipe(untilDestroyed(this)).subscribe();
    }
    ngOnDestroy(): void {
      // Some logic here...
      super.ngOnDestroy();
    }
  }
  `;
}
const NG_DEV_MODE = typeof ngDevMode === 'undefined' || ngDevMode;
function overrideNonDirectiveInstanceMethod(instance, destroyMethodName, symbol) {
  const originalDestroy = instance[destroyMethodName];
  if (NG_DEV_MODE && typeof originalDestroy !== 'function') {
    throw new Error(`${instance.constructor.name} is using untilDestroyed but doesn't implement ${destroyMethodName}`);
  }
  createSubjectOnTheInstance(instance, symbol);
  instance[destroyMethodName] = function () {
    // eslint-disable-next-line prefer-rest-params
    originalDestroy.apply(this, arguments);
    completeSubjectOnTheInstance(this, symbol);
    // We have to re-assign this property back to the original value.
    // If the `untilDestroyed` operator is called for the same instance
    // multiple times, then we will be able to get the original
    // method again and not the patched one.
    instance[destroyMethodName] = originalDestroy;
  };
}
function untilDestroyed(instance, destroyMethodName) {
  return source => {
    const symbol = getSymbol(destroyMethodName);
    // If `destroyMethodName` is passed then the developer applies
    // this operator to something non-related to Angular DI system
    if (typeof destroyMethodName === 'string') {
      overrideNonDirectiveInstanceMethod(instance, destroyMethodName, symbol);
    } else {
      NG_DEV_MODE && ensureClassIsDecorated(instance);
      createSubjectOnTheInstance(instance, symbol);
    }
    const destroy$ = instance[symbol];
    NG_DEV_MODE && setupSubjectUnsubscribedChecker(instance, destroy$);
    return source.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .takeUntil */ .Q)(destroy$));
  };
}
function ensureClassIsDecorated(instance) {
  const prototype = Object.getPrototypeOf(instance);
  const missingDecorator = !(DECORATOR_APPLIED in prototype);
  if (missingDecorator) {
    throw new Error('untilDestroyed operator cannot be used inside directives or ' + 'components or providers that are not decorated with UntilDestroy decorator');
  }
}

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=ngneat-until-destroy.mjs.map

/***/ }),

/***/ 98358:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: () => (/* binding */ FileSaveStrategy)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);

let FileSaveStrategy = /*#__PURE__*/(() => {
  class FileSaveStrategy {
    /*
     * Save file
     * @method save
     * @param {Blob} blob
     * @param {string} filename
     * @returns {void}
     * */
    save(blob, filename) {
      if (!(blob instanceof Blob)) {
        throw new Error('Invalid blob object');
      }
      if (!filename) {
        throw new Error('Filename is required');
      }
      const link = document.createElement('a');
      const blobUrl = URL.createObjectURL(blob);
      try {
        link.href = blobUrl;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
      } catch (e) {
        throw e;
      } finally {
        if (link.parentNode) {
          document.body.removeChild(link);
        }
        URL.revokeObjectURL(blobUrl);
      }
    }
    static {
      this.ɵfac = function FileSaveStrategy_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || FileSaveStrategy)();
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjectable"] */ .jDH({
        token: FileSaveStrategy,
        factory: FileSaveStrategy.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return FileSaveStrategy;
})();

/***/ }),

/***/ 98646:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   s: () => (/* binding */ SoundshotEffects)
/* harmony export */ });
/* harmony import */ var _ngneat_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85308);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8563);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19248);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20903);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(89037);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(56626);
/* harmony import */ var _soundshot_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45009);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(26860);
/* harmony import */ var _ngneat_effects_ng__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(10994);
/* harmony import */ var _soundshot_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(72138);
/* harmony import */ var _shared_services_soundshot_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(26944);
/* harmony import */ var _shared_services_download_download_queue_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(36284);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(15480);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(54263);














let SoundshotEffects = /*#__PURE__*/(() => {
  class SoundshotEffects {
    constructor(action$, soundshotStore, soundshotService, downloadQueueService, toastrService, errorHandler) {
      this.action$ = action$;
      this.soundshotStore = soundshotStore;
      this.soundshotService = soundshotService;
      this.downloadQueueService = downloadQueueService;
      this.toastrService = toastrService;
      this.errorHandler = errorHandler;
      this.fetchAll$ = (0,_ngneat_effects__WEBPACK_IMPORTED_MODULE_0__/* .createEffect */ .EH)(() => this.action$.pipe((0,_ngneat_effects__WEBPACK_IMPORTED_MODULE_0__/* .ofType */ .gp)(_soundshot_action__WEBPACK_IMPORTED_MODULE_1__/* .SoundshotAction */ .a.fetchAll), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__/* .tap */ .M)(() => this.soundshotStore.setLoading(true)),
      // Start loading state
      (0,rxjs__WEBPACK_IMPORTED_MODULE_3__/* .switchMap */ .n)(({
        params = {}
      }) => this.soundshotService.getAll(params).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__/* .tap */ .M)(({
        items,
        total
      }) => this.soundshotStore.update(state => ({
        soundshots: [...new Map([...state.soundshots, ...items].map(item => [item.id, item])).values()],
        count: total
      }))), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__/* .catchError */ .W)(error => {
        this.errorHandler.handleError(error); // Handle error properly
        return rxjs__WEBPACK_IMPORTED_MODULE_5__/* .EMPTY */ .w; // Return a fallback observable
      }), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__/* .finalize */ .j)(() => this.soundshotStore.setLoading(false)) // Always stop loading
      ))));
      this.fetchOne$ = (0,_ngneat_effects__WEBPACK_IMPORTED_MODULE_0__/* .createEffect */ .EH)(() => this.action$.pipe((0,_ngneat_effects__WEBPACK_IMPORTED_MODULE_0__/* .ofType */ .gp)(_soundshot_action__WEBPACK_IMPORTED_MODULE_1__/* .SoundshotAction */ .a.fetchOne), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__/* .tap */ .M)(() => this.soundshotStore.setLoading(true)),
      // Start loading state
      (0,rxjs__WEBPACK_IMPORTED_MODULE_3__/* .switchMap */ .n)(({
        id,
        params = {}
      }) => this.soundshotService.getOne(id, params).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__/* .tap */ .M)(soundshot => this.soundshotStore.update({
        soundshot
      })), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__/* .catchError */ .W)(error => {
        this.errorHandler.handleError(error); // Handle error properly
        return rxjs__WEBPACK_IMPORTED_MODULE_5__/* .EMPTY */ .w; // Return a fallback observable
      }), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__/* .finalize */ .j)(() => this.soundshotStore.setLoading(false)) // Always stop loading
      ))));
      this.restore$ = (0,_ngneat_effects__WEBPACK_IMPORTED_MODULE_0__/* .createEffect */ .EH)(() => this.action$.pipe((0,_ngneat_effects__WEBPACK_IMPORTED_MODULE_0__/* .ofType */ .gp)(_soundshot_action__WEBPACK_IMPORTED_MODULE_1__/* .SoundshotAction */ .a.restore), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__/* .tap */ .M)(() => {
        this.soundshotStore.update({
          restoring: true
        });
        this.toastrService.info('Restoring soundshot...', 'Restore');
      }), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__/* .switchMap */ .n)(({
        id
      }) => {
        return this.soundshotService.restore(id).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__/* .tap */ .M)(() => {
          this.updateStoreAfterRestore(id);
          this.toastrService.success('Soundshot restored successfully', 'Restore');
        }), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__/* .finalize */ .j)(() => this.soundshotStore.update({
          restoring: false
        })), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__/* .catchError */ .W)(error => {
          this.errorHandler.handleError(error); // Handle error properly
          this.toastrService.error('Failed to restore soundshot', 'Restore Error');
          return rxjs__WEBPACK_IMPORTED_MODULE_5__/* .EMPTY */ .w; // Return a fallback observable
        }));
      })));
      this.delete$ = (0,_ngneat_effects__WEBPACK_IMPORTED_MODULE_0__/* .createEffect */ .EH)(() => this.action$.pipe((0,_ngneat_effects__WEBPACK_IMPORTED_MODULE_0__/* .ofType */ .gp)(_soundshot_action__WEBPACK_IMPORTED_MODULE_1__/* .SoundshotAction */ .a.delete, _soundshot_action__WEBPACK_IMPORTED_MODULE_1__/* .SoundshotAction */ .a.hardDelete), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__/* .tap */ .M)(() => {
        this.soundshotStore.update({
          deleting: true
        });
        this.toastrService.info('Deleting soundshot...', 'Delete');
      }), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__/* .switchMap */ .n)(({
        id,
        params = {}
      }) => {
        return this.soundshotService.delete(id, params).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__/* .tap */ .M)(() => {
          this.updateStoreAfterDelete(id, params);
          this.toastrService.success('Soundshot deleted successfully', 'Delete');
        }), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__/* .finalize */ .j)(() => this.soundshotStore.update({
          deleting: false
        })), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__/* .catchError */ .W)(error => {
          this.errorHandler.handleError(error); // Handle error properly
          this.toastrService.error('Failed to delete soundshot', 'Delete Error');
          return rxjs__WEBPACK_IMPORTED_MODULE_5__/* .EMPTY */ .w; // Return a fallback observable
        }));
      })));
      this.addToQueue$ = (0,_ngneat_effects__WEBPACK_IMPORTED_MODULE_0__/* .createEffect */ .EH)(() => this.action$.pipe((0,_ngneat_effects__WEBPACK_IMPORTED_MODULE_0__/* .ofType */ .gp)(_soundshot_action__WEBPACK_IMPORTED_MODULE_1__/* .SoundshotAction */ .a.download), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__/* .tap */ .M)(({
        urls
      }) => {
        const isAdded = this.downloadQueueService.add(urls);
        if (isAdded) {
          this.toastrService.info('soundshot added to queue', 'Download Soundshot');
        } else {
          this.toastrService.error('Failed to add soundshot to queue', 'Download Error');
        }
      })));
    }
    updateStoreAfterRestore(id) {
      this.soundshotStore.update(state => {
        const {
          soundshots,
          soundshot
        } = state;
        // Update soundshots array - restore matching item
        const updatedSoundshots = soundshots.map(c => c.id === id ? {
          ...c,
          deletedAt: null
        } : c);
        // Update selected soundshot if it matches the restored ID
        const updatedSoundshot = soundshot?.id === id ? {
          ...soundshot,
          deletedAt: null
        } : soundshot;
        return {
          soundshots: updatedSoundshots,
          soundshot: updatedSoundshot
        };
      });
    }
    updateStoreAfterDelete(id, params) {
      this.soundshotStore.update(state => {
        const {
          soundshots,
          soundshot
        } = state;
        const shouldRemove = params.forceDelete ?? false;
        const now = new Date();
        // Update soundshots array
        const updatedSoundshots = shouldRemove ? soundshots.filter(c => c.id !== id) : soundshots.map(c => c.id === id ? {
          ...c,
          deletedAt: now
        } : c);
        // Update selected soundshot
        const updatedSelectedSoundshot = soundshot?.id !== id ? soundshot : shouldRemove ? null : {
          ...soundshot,
          deletedAt: now
        };
        return {
          soundshots: updatedSoundshots,
          soundshot: updatedSelectedSoundshot
        };
      });
    }
    static {
      this.ɵfac = function SoundshotEffects_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || SoundshotEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵinject"] */ .KVO(_ngneat_effects_ng__WEBPACK_IMPORTED_MODULE_8__/* .Actions */ .En), _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵinject"] */ .KVO(_soundshot_store__WEBPACK_IMPORTED_MODULE_9__/* .SoundshotStore */ .B), _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵinject"] */ .KVO(_shared_services_soundshot_service__WEBPACK_IMPORTED_MODULE_10__/* .SoundshotService */ .d), _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵinject"] */ .KVO(_shared_services_download_download_queue_service__WEBPACK_IMPORTED_MODULE_11__/* .DownloadQueueService */ .$), _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵinject"] */ .KVO(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_12__/* .ToastrService */ .t), _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵinject"] */ .KVO(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_13__/* .ErrorHandlingService */ .X));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵdefineInjectable"] */ .jDH({
        token: SoundshotEffects,
        factory: SoundshotEffects.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return SoundshotEffects;
})();

/***/ }),

/***/ 99326:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ SoundshotPlayerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _models_action_button_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32401);
/* harmony import */ var _models_soundshot_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67872);
/* harmony import */ var _state_soundshot_soundshot_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11383);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(56383);
/* harmony import */ var _ui_core_shared_src_lib_directives_img_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(71466);
/* harmony import */ var _video_actions_buttons_action_button_group_action_button_group_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(32694);
/* harmony import */ var _ui_core_shared_src_lib_pipes_duration_format_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(33867);
/* harmony import */ var _ui_core_shared_src_lib_pipes_file_size_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(31571);











const _c0 = ["player"];
const _c1 = () => ({
  type: "zoom"
});
const _c2 = a0 => ({
  animation: a0
});
function SoundshotPlayerComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("src", (tmp_3_0 = ctx_r1.soundshot()) == null ? null : tmp_3_0.uploadedBy == null ? null : tmp_3_0.uploadedBy.user == null ? null : tmp_3_0.uploadedBy.user.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵsanitizeUrl"] */ .B4B);
  }
}
function SoundshotPlayerComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "durationFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI("", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(2, 1, (tmp_3_0 = ctx_r1.soundshot()) == null ? null : tmp_3_0.duration), "s");
  }
}
function SoundshotPlayerComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(2, "fileSize");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI("\u2022 ", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(2, 1, (tmp_3_0 = ctx_r1.soundshot()) == null ? null : tmp_3_0.size), "");
  }
}
function SoundshotPlayerComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1, "\u25B6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
}
function SoundshotPlayerComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(1, "\u2759\u2759");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
}
function SoundshotPlayerComponent_ng_template_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(0, "plug-action-button-group", 19);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("buttons", ctx_r1.buttons())("data", ctx_r1.soundshot());
  }
}
let SoundshotPlayerComponent = /*#__PURE__*/(() => {
  class SoundshotPlayerComponent {
    constructor(soundshotQuery) {
      this.soundshotQuery = soundshotQuery;
      this.soundshot = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__/* .input */ .hFB)();
      this.isPlaying = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__/* .signal */ .vPA)(false);
      this.progress = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__/* .signal */ .vPA)(0);
      this.currentTime = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__/* .signal */ .vPA)(0);
      this.duration = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__/* .signal */ .vPA)(0);
      this.volume = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__/* .signal */ .vPA)(1);
      this.download = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .bkB();
      this.recover = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .bkB();
      this.delete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .bkB();
      this.hardDelete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .bkB();
      this.buttons = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__/* .computed */ .EWP)(() => {
        const soundshot = new _models_soundshot_model__WEBPACK_IMPORTED_MODULE_1__/* .Soundshot */ .o(this.soundshot());
        const commons = [new _models_action_button_model__WEBPACK_IMPORTED_MODULE_2__/* .ActionButton */ .r({
          icon: 'download-outline',
          label: 'BUTTONS.DOWNLOAD',
          status: 'info',
          loading: this.soundshotQuery.downloading$,
          action: soundshot => this.download.emit(soundshot)
        })];
        const statusSpecificButtons = soundshot.isDeleted ? [new _models_action_button_model__WEBPACK_IMPORTED_MODULE_2__/* .ActionButton */ .r({
          icon: 'refresh-outline',
          label: 'BUTTONS.RECOVER',
          status: 'success',
          loading: this.soundshotQuery.restoring$,
          action: soundshot => this.recover.emit(soundshot)
        }), new _models_action_button_model__WEBPACK_IMPORTED_MODULE_2__/* .ActionButton */ .r({
          icon: 'trash-2-outline',
          label: 'Hard Delete',
          status: 'danger',
          loading: this.soundshotQuery.deleting$,
          action: soundshot => this.hardDelete.emit(soundshot)
        })] : [new _models_action_button_model__WEBPACK_IMPORTED_MODULE_2__/* .ActionButton */ .r({
          icon: 'trash-outline',
          label: 'BUTTONS.DELETE',
          status: 'danger',
          loading: this.soundshotQuery.deleting$,
          action: soundshot => this.delete.emit(soundshot)
        })];
        return [...commons, ...statusSpecificButtons];
      });
      // Computed for duration from soundshot
      this.displayDuration = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__/* .computed */ .EWP)(() => this.soundshot()?.duration || this.duration());
    }
    togglePlay() {
      const player = this.playerRef?.nativeElement;
      if (!player) return;
      if (player.paused) {
        player.play();
        this.isPlaying.set(true);
      } else {
        player.pause();
        this.isPlaying.set(false);
      }
    }
    onTimeUpdate() {
      const player = this.playerRef?.nativeElement;
      if (!player) return;
      this.currentTime.set(player.currentTime);
      const dur = this.soundshot()?.duration || player.duration || 0;
      this.duration.set(dur);
      this.progress.set(dur ? player.currentTime / dur * 100 : 0);
    }
    onLoadedMetadata() {
      const player = this.playerRef?.nativeElement;
      if (!player) return;
      const dur = this.soundshot()?.duration || player.duration || 0;
      this.duration.set(dur);
    }
    onEnded() {
      this.isPlaying.set(false);
      this.currentTime.set(0);
      this.progress.set(0);
    }
    seek(event) {
      const player = this.playerRef?.nativeElement;
      const progressBar = event.currentTarget?.querySelector?.('.progress-bar');
      if (!player) {
        console.warn('Audio player element not found.');
        return;
      }
      if (!progressBar) {
        console.warn('Progress bar element not found.');
        return;
      }
      const rect = progressBar.getBoundingClientRect();
      const clickX = event.clientX - rect.left;
      const width = rect.width;
      if (width === 0) {
        console.warn('Progress bar width is zero.');
        return;
      }
      const percent = clickX / width;
      const duration = this.duration();
      const seekTime = percent * (duration || 0);
      try {
        player.currentTime = seekTime;
        this.currentTime.set(seekTime);
        this.progress.set(percent * 100);
      } catch (error) {
        console.error('Failed to seek audio:', error);
      }
    }
    setVolume(event) {
      const player = this.playerRef?.nativeElement;
      if (!player) return;
      const value = +event.target.value;
      this.volume.set(value);
      player.volume = value;
    }
    static {
      this.ɵfac = function SoundshotPlayerComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || SoundshotPlayerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_state_soundshot_soundshot_query__WEBPACK_IMPORTED_MODULE_3__/* .SoundshotQuery */ .y));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
        type: SoundshotPlayerComponent,
        selectors: [["plug-soundshot-player"]],
        viewQuery: function SoundshotPlayerComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵviewQuery"] */ .GBs(_c0, 5);
          }
          if (rf & 2) {
            let _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵqueryRefresh"] */ .mGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵloadQuery"] */ .lsd()) && (ctx.playerRef = _t.first);
          }
        },
        inputs: {
          soundshot: [1, "soundshot"]
        },
        outputs: {
          download: "download",
          recover: "recover",
          delete: "delete",
          hardDelete: "hardDelete"
        },
        standalone: false,
        decls: 30,
        vars: 23,
        consts: [["player", ""], ["actions", ""], [1, "soundshot-player"], [1, "soundshot-info"], [1, "soundshot-cover"], [1, "soundshot-details"], [1, "soundshot-title"], [1, "soundshot-meta"], [1, "actions"], ["nbPopoverPlacement", "bottom", "icon", "more-vertical-outline", 3, "nbPopover", "options"], [1, "player-controls"], [1, "player-btn", 3, "click"], [1, "progress-container", 3, "click"], [1, "progress-bar"], [1, "progress"], [1, "time-info"], ["type", "range", "min", "0", "max", "1", "step", "0.01", 1, "volume-slider", 3, "input", "value"], [3, "timeupdate", "loadedmetadata", "ended", "src"], ["alt", "Cover Image", 1, "cover-image", 3, "src"], [3, "buttons", "data"]],
        template: function SoundshotPlayerComponent_Template(rf, ctx) {
          if (rf & 1) {
            const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵgetCurrentView"] */ .RV6();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "div", 2)(1, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(2, SoundshotPlayerComponent_Conditional_2_Template, 2, 1, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(3, "div", 5)(4, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(6, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(7, SoundshotPlayerComponent_Conditional_7_Template, 3, 3, "span")(8, SoundshotPlayerComponent_Conditional_8_Template, 3, 3, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(9, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(10, "nb-icon", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(11, "div", 10)(12, "button", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function SoundshotPlayerComponent_Template_button_click_12_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx.togglePlay());
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(13, SoundshotPlayerComponent_Conditional_13_Template, 2, 0, "span")(14, SoundshotPlayerComponent_Conditional_14_Template, 2, 0, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(15, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("click", function SoundshotPlayerComponent_Template_div_click_15_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx.seek($event));
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(16, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(17, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(18, "div", 15)(19, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(21, "durationFormat");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(22, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipe"] */ .nI1(24, "durationFormat");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(25, "input", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("input", function SoundshotPlayerComponent_Template_input_input_25_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx.setVolume($event));
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(26, "audio", 17, 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("timeupdate", function SoundshotPlayerComponent_Template_audio_timeupdate_26_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx.onTimeUpdate());
            })("loadedmetadata", function SoundshotPlayerComponent_Template_audio_loadedmetadata_26_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx.onLoadedMetadata());
            })("ended", function SoundshotPlayerComponent_Template_audio_ended_26_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresetView"] */ .Njj(ctx.onEnded());
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(28, SoundshotPlayerComponent_ng_template_28_Template, 1, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplateRefExtractor"] */ .C5r);
          }
          if (rf & 2) {
            let tmp_2_0;
            let tmp_3_0;
            let tmp_4_0;
            let tmp_5_0;
            let tmp_6_0;
            let tmp_15_0;
            const actions_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵreference"] */ .sdS(29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵclassProp"] */ .AVh("deleted", !!((tmp_2_0 = ctx.soundshot()) == null ? null : tmp_2_0.deletedAt));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵconditional"] */ .vxM(((tmp_3_0 = ctx.soundshot()) == null ? null : tmp_3_0.uploadedBy == null ? null : tmp_3_0.uploadedBy.user == null ? null : tmp_3_0.uploadedBy.user.imageUrl) ? 2 : -1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh((tmp_4_0 = ctx.soundshot()) == null ? null : tmp_4_0.name);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵconditional"] */ .vxM(((tmp_5_0 = ctx.soundshot()) == null ? null : tmp_5_0.duration) ? 7 : -1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵconditional"] */ .vxM(((tmp_6_0 = ctx.soundshot()) == null ? null : tmp_6_0.size) ? 8 : -1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("nbPopover", actions_r3)("options", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction1"] */ .eq3(21, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction0"] */ .lJ4(20, _c1)));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵconditional"] */ .vxM(!ctx.isPlaying() ? 13 : -1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵconditional"] */ .vxM(ctx.isPlaying() ? 14 : -1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵstyleProp"] */ .xc7("width", ctx.progress(), "%");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(21, 16, ctx.currentTime()));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate"] */ .JRh(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpipeBind1"] */ .bMT(24, 18, ctx.duration()));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("value", ctx.volume());
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("src", (tmp_15_0 = ctx.soundshot()) == null ? null : tmp_15_0.fullUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵsanitizeUrl"] */ .B4B);
          }
        },
        dependencies: [_nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbIconComponent */ .tHu, _ui_core_shared_src_lib_directives_img_directive__WEBPACK_IMPORTED_MODULE_5__/* .ImgDirective */ .z, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__/* .NbPopoverDirective */ .vs7, _video_actions_buttons_action_button_group_action_button_group_component__WEBPACK_IMPORTED_MODULE_6__/* .ActionButtonGroupComponent */ .j, _ui_core_shared_src_lib_pipes_duration_format_pipe__WEBPACK_IMPORTED_MODULE_7__/* .DurationFormatPipe */ .i, _ui_core_shared_src_lib_pipes_file_size_pipe__WEBPACK_IMPORTED_MODULE_8__/* .FileSizePipe */ .s],
        styles: [".soundshot-player[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n  background: var(--gauzy-card-1, #fff);\n  border-radius: calc(var(--border-radius) * 1.5);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n  padding: 1rem 1.5rem;\n  margin: 0 auto;\n}\n.soundshot-player.deleted[_ngcontent-%COMP%] {\n  background: rgba(255, 0, 0, 0.05);\n}\n\n.soundshot-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 1rem;\n  transition: all 0.3s ease;\n}\n\n.soundshot-title[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 600;\n  color: var(--gauzy-text-color-1, #222);\n  margin-bottom: 0.1rem;\n}\n\n.soundshot-meta[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: var(--gauzy-text-color-2);\n  display: flex;\n  gap: 0.5rem;\n}\n\n.player-controls[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n\n.player-btn[_ngcontent-%COMP%] {\n  background: #f3f4f6;\n  border: none;\n  border-radius: 50%;\n  width: 40px;\n  height: 40px;\n  font-size: 1.3rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: background 0.2s;\n}\n\n.player-btn[_ngcontent-%COMP%]:hover {\n  background: #e5e7eb;\n}\n\n.progress-container[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 0.2rem;\n  cursor: pointer;\n}\n\n.progress-bar[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 6px;\n  background: #e5e7eb;\n  border-radius: 3px;\n  position: relative;\n  overflow: hidden;\n}\n\n.progress[_ngcontent-%COMP%] {\n  height: 100%;\n  background: #6366f1;\n  border-radius: 3px;\n  transition: width 0.2s;\n}\n\n.time-info[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 0.8rem;\n  color: #888;\n}\n\n.volume-slider[_ngcontent-%COMP%] {\n  width: 80px;\n  accent-color: #6366f1;\n  box-shadow: unset;\n}\n\n.soundshot-cover[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 0;\n}\n\n.cover-image[_ngcontent-%COMP%] {\n  max-width: 100%;\n  max-height: 48px;\n  border-radius: var(--border-radius);\n  object-fit: cover;\n}\n\n.soundshot-details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n\n@media (max-width: 600px) {\n  .soundshot-player[_ngcontent-%COMP%] {\n    padding: 0.75rem 0.5rem;\n    max-width: 100%;\n  }\n  .soundshot-info[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n    gap: 0.5rem;\n  }\n  .volume-slider[_ngcontent-%COMP%] {\n    width: 50px;\n  }\n}\n.actions[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  cursor: pointer;\n  margin-left: auto;\n}"]
      });
    }
  }
  return SoundshotPlayerComponent;
})();

/***/ })

}]);