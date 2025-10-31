"use strict";
(self["webpackChunkgauzy"] = self["webpackChunkgauzy"] || []).push([[166],{

/***/ 9136:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HE: () => (/* binding */ supportsPassiveEvents)
/* harmony export */ });
/* unused harmony exports deviceType, primaryInput, supportsPointerEvents, supportsTouchEvents */
// so it doesn't throw if no window or matchMedia
var w = typeof window !== 'undefined' ? window : {
  screen: {},
  navigator: {}
};
var matchMedia = (w.matchMedia || function () {
  return {
    matches: false
  };
}).bind(w);
// passive events test
// adapted from https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
var passiveOptionAccessed = false;
var options = {
  get passive() {
    return passiveOptionAccessed = true;
  }
};
// have to set and remove a no-op listener instead of null
// (which was used previously), because Edge v15 throws an error
// when providing a null callback.
// https://github.com/rafgraph/detect-passive-events/pull/3
// eslint-disable-next-line @typescript-eslint/no-empty-function
var noop = function () {};
w.addEventListener && w.addEventListener('p', noop, options);
w.removeEventListener && w.removeEventListener('p', noop, false);
var supportsPassiveEvents = passiveOptionAccessed;
var supportsPointerEvents = 'PointerEvent' in w;
var onTouchStartInWindow = 'ontouchstart' in w;
var touchEventInWindow = 'TouchEvent' in w;
// onTouchStartInWindow is the old-old-legacy way to determine a touch device
// and many websites interpreted it to mean that the device is a touch only phone,
// so today browsers on a desktop/laptop computer with a touch screen (primary input mouse)
// have onTouchStartInWindow as false (to prevent from being confused with a
// touchOnly phone) even though they support the TouchEvents API, so need to check
// both onTouchStartInWindow and touchEventInWindow for TouchEvent support,
// however, some browsers (chromium) support the TouchEvents API even when running on
// a mouse only device (touchEventInWindow true, but onTouchStartInWindow false)
// so the touchEventInWindow check needs to include an coarse pointer media query
var supportsTouchEvents = onTouchStartInWindow || touchEventInWindow && matchMedia('(any-pointer: coarse)').matches;
var hasTouch = (w.navigator.maxTouchPoints || 0) > 0 || supportsTouchEvents;
// userAgent is used as a backup to correct for known device/browser bugs
// and when the browser doesn't support interaction media queries (pointer and hover)
// see https://caniuse.com/css-media-interaction
var userAgent = w.navigator.userAgent || '';
// iPads now support a mouse that can hover, however the media query interaction
// feature results always say iPads only have a coarse pointer that can't hover
// even when a mouse is connected (anyFine and anyHover are always false),
// this unfortunately indicates a touch only device but iPads should
// be classified as a hybrid device, so determine if it is an iPad
// to indicate it should be treated as a hybrid device with anyHover true
var isIPad = matchMedia('(pointer: coarse)').matches &&
// both iPad and iPhone can "request desktop site", which sets the userAgent to Macintosh
// so need to check both userAgents to determine if it is an iOS device
// and screen size to separate iPad from iPhone
/iPad|Macintosh/.test(userAgent) && Math.min(w.screen.width || 0, w.screen.height || 0) >= 768;
var hasCoarsePrimaryPointer = (matchMedia('(pointer: coarse)').matches ||
// if the pointer is not coarse and not fine then the browser doesn't support
// interaction media queries (see https://caniuse.com/css-media-interaction)
// so if it has onTouchStartInWindow assume it has a coarse primary pointer
!matchMedia('(pointer: fine)').matches && onTouchStartInWindow) &&
// bug in firefox (as of v81) on hybrid windows devices where the interaction media queries
// always indicate a touch only device (only has a coarse pointer that can't hover)
// so assume that the primary pointer is not coarse for firefox windows
!/Windows.*Firefox/.test(userAgent);
var hasAnyHoverOrAnyFinePointer = matchMedia('(any-pointer: fine)').matches || matchMedia('(any-hover: hover)').matches ||
// iPads might have an input device that can hover, so assume it has anyHover
isIPad ||
// if no onTouchStartInWindow then the browser is indicating that it is not a touch only device
// see above note for supportsTouchEvents
!onTouchStartInWindow;
// a hybrid device is one that both hasTouch and
// any input can hover or has a fine pointer, or the primary pointer is not coarse
// if it's not a hybrid, then if it hasTouch it's touchOnly, otherwise it's mouseOnly
var deviceType = hasTouch && (hasAnyHoverOrAnyFinePointer || !hasCoarsePrimaryPointer) ? 'hybrid' : hasTouch ? 'touchOnly' : 'mouseOnly';
var primaryInput = deviceType === 'mouseOnly' ? 'mouse' : deviceType === 'touchOnly' ? 'touch' :
// if the device is a hybrid, then if the primary pointer is coarse
// assume the primaryInput is touch, otherwise assume it's mouse
hasCoarsePrimaryPointer ? 'touch' : 'mouse';

//# sourceMappingURL=detect-it.esm.js.map

/***/ }),

/***/ 24224:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ti: () => (/* binding */ NgxSliderModule),
/* harmony export */   d1: () => (/* binding */ SliderComponent)
/* harmony export */ });
/* unused harmony exports AllowUnsafeHtmlInSlider, ChangeContext, LabelType, Options, PointerType */
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(14572);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(10936);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4644);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26585);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39855);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(45808);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(52738);
/* harmony import */ var detect_passive_events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9136);









/** Label type */
const _c0 = (a0, a1, a2) => ({
  tooltip: a0,
  placement: a1,
  content: a2
});
function TooltipWrapperComponent_ng_container_0_1_ng_template_0_Template(rf, ctx) {}
function TooltipWrapperComponent_ng_container_0_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(0, TooltipWrapperComponent_ng_container_0_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function TooltipWrapperComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(1, TooltipWrapperComponent_ng_container_0_1_Template, 1, 0, null, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngTemplateOutlet", ctx_r0.template)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction3"] */ .sMw(2, _c0, ctx_r0.tooltip, ctx_r0.placement, ctx_r0.content));
  }
}
function TooltipWrapperComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ .EFF(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵattribute"] */ .BMQ("title", ctx_r0.tooltip)("data-tooltip-placement", ctx_r0.placement);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", ctx_r0.content, " ");
  }
}
const _c1 = ["tooltipTemplate"];
const _c2 = ["leftOuterSelectionBar"];
const _c3 = ["rightOuterSelectionBar"];
const _c4 = ["fullBar"];
const _c5 = ["selectionBar"];
const _c6 = ["minHandle"];
const _c7 = ["maxHandle"];
const _c8 = ["floorLabel"];
const _c9 = ["ceilLabel"];
const _c10 = ["minHandleLabel"];
const _c11 = ["maxHandleLabel"];
const _c12 = ["combinedLabel"];
const _c13 = ["ticksElement"];
const _c14 = a0 => ({
  "ngx-slider-selected": a0
});
function SliderComponent_span_28_ngx_slider_tooltip_wrapper_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(0, "ngx-slider-tooltip-wrapper", 32);
  }
  if (rf & 2) {
    const t_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("template", ctx_r1.tooltipTemplate)("tooltip", t_r1.valueTooltip)("placement", t_r1.valueTooltipPlacement)("content", t_r1.value);
  }
}
function SliderComponent_span_28_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(0, "span", 33);
  }
  if (rf & 2) {
    const t_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("innerText", t_r1.legend);
  }
}
function SliderComponent_span_28_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(0, "span", 34);
  }
  if (rf & 2) {
    const t_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("innerHTML", t_r1.legend, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵsanitizeHtml"] */ .npT);
  }
}
function SliderComponent_span_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(1, "ngx-slider-tooltip-wrapper", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(2, SliderComponent_span_28_ngx_slider_tooltip_wrapper_2_Template, 1, 4, "ngx-slider-tooltip-wrapper", 29)(3, SliderComponent_span_28_span_3_Template, 1, 1, "span", 30)(4, SliderComponent_span_28_span_4_Template, 1, 1, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const t_r1 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵpureFunction1"] */ .eq3(8, _c14, t_r1.selected))("ngStyle", t_r1.style);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("template", ctx_r1.tooltipTemplate)("tooltip", t_r1.tooltip)("placement", t_r1.tooltipPlacement);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", t_r1.value !== null && t_r1.value !== undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", t_r1.legend !== null && t_r1.legend !== undefined && ctx_r1.allowUnsafeHtmlInSlider === false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", t_r1.legend !== null && t_r1.legend !== undefined && (ctx_r1.allowUnsafeHtmlInSlider === null || ctx_r1.allowUnsafeHtmlInSlider === undefined || ctx_r1.allowUnsafeHtmlInSlider));
  }
}
var LabelType = /*#__PURE__*/function (LabelType) {
  /** Label above low pointer */
  LabelType[LabelType["Low"] = 0] = "Low";
  /** Label above high pointer */
  LabelType[LabelType["High"] = 1] = "High";
  /** Label for minimum slider value */
  LabelType[LabelType["Floor"] = 2] = "Floor";
  /** Label for maximum slider value */
  LabelType[LabelType["Ceil"] = 3] = "Ceil";
  /** Label below legend tick */
  LabelType[LabelType["TickValue"] = 4] = "TickValue";
  return LabelType;
}(LabelType || {});
/** Slider options */
class Options {
  /** Minimum value for a slider.
    Not applicable when using stepsArray. */
  floor = 0;
  /** Maximum value for a slider.
    Not applicable when using stepsArray. */
  ceil = null;
  /** Step between each value.
    Not applicable when using stepsArray. */
  step = 1;
  /** The minimum range authorized on the slider.
    Applies to range slider only.
    When using stepsArray, expressed as index into stepsArray. */
  minRange = null;
  /** The maximum range authorized on the slider.
    Applies to range slider only.
    When using stepsArray, expressed as index into stepsArray. */
  maxRange = null;
  /** Set to true to have a push behavior. When the min handle goes above the max,
    the max is moved as well (and vice-versa). The range between min and max is
    defined by the step option (defaults to 1) and can also be overriden by
    the minRange option. Applies to range slider only. */
  pushRange = false;
  /** The minimum value authorized on the slider.
    When using stepsArray, expressed as index into stepsArray. */
  minLimit = null;
  /** The maximum value authorized on the slider.
    When using stepsArray, expressed as index into stepsArray. */
  maxLimit = null;
  /** Custom translate function. Use this if you want to translate values displayed
      on the slider. */
  translate = null;
  /** Custom function for combining overlapping labels in range slider.
      It takes the min and max values (already translated with translate fuction)
      and should return how these two values should be combined.
      If not provided, the default function will join the two values with
      ' - ' as separator. */
  combineLabels = null;
  /** Use to display legend under ticks (thus, it needs to be used along with
     showTicks or showTicksValues). The function will be called with each tick
     value and returned content will be displayed under the tick as a legend.
     If the returned value is null, then no legend is displayed under
     the corresponding tick.You can also directly provide the legend values
     in the stepsArray option. */
  getLegend = null;
  /** Use to display a custom legend of a stepItem from stepsArray.
    It will be the same as getLegend but for stepsArray. */
  getStepLegend = null;
  /** If you want to display a slider with non linear/number steps.
     Just pass an array with each slider value and that's it; the floor, ceil and step settings
     of the slider will be computed automatically.
     By default, the value model and valueHigh model values will be the value of the selected item
     in the stepsArray.
     They can also be bound to the index of the selected item by setting the bindIndexForStepsArray
     option to true. */
  stepsArray = null;
  /** Set to true to bind the index of the selected item to value model and valueHigh model. */
  bindIndexForStepsArray = false;
  /** When set to true and using a range slider, the range can be dragged by the selection bar.
    Applies to range slider only. */
  draggableRange = false;
  /** Same as draggableRange but the slider range can't be changed.
    Applies to range slider only. */
  draggableRangeOnly = false;
  /** Set to true to always show the selection bar before the slider handle. */
  showSelectionBar = false;
  /** Set to true to always show the selection bar after the slider handle. */
  showSelectionBarEnd = false;
  /**  Set a number to draw the selection bar between this value and the slider handle.
    When using stepsArray, expressed as index into stepsArray. */
  showSelectionBarFromValue = null;
  /**  Only for range slider. Set to true to visualize in different colour the areas
    on the left/right (top/bottom for vertical range slider) of selection bar between the handles. */
  showOuterSelectionBars = false;
  /** Set to true to hide pointer labels */
  hidePointerLabels = false;
  /** Set to true to hide min / max labels  */
  hideLimitLabels = false;
  /** Set to false to disable the auto-hiding behavior of the limit labels. */
  autoHideLimitLabels = true;
  /** Set to true to make the slider read-only. */
  readOnly = false;
  /** Set to true to disable the slider. */
  disabled = false;
  /** Set to true to display a tick for each step of the slider. */
  showTicks = false;
  /** Set to true to display a tick and the step value for each step of the slider.. */
  showTicksValues = false;
  /* The step between each tick to display. If not set, the step value is used.
    Not used when ticksArray is specified. */
  tickStep = null;
  /* The step between displaying each tick step value.
    If not set, then tickStep or step is used, depending on which one is set. */
  tickValueStep = null;
  /** Use to display ticks at specific positions.
    The array contains the index of the ticks that should be displayed.
    For example, [0, 1, 5] will display a tick for the first, second and sixth values. */
  ticksArray = null;
  /** Used to display a tooltip when a tick is hovered.
    Set to a function that returns the tooltip content for a given value. */
  ticksTooltip = null;
  /** Same as ticksTooltip but for ticks values. */
  ticksValuesTooltip = null;
  /** Set to true to display the slider vertically.
    The slider will take the full height of its parent.
    Changing this value at runtime is not currently supported. */
  vertical = false;
  /** Function that returns the current color of the selection bar.
    If your color won't change, don't use this option but set it through CSS.
    If the returned color depends on a model value (either value or valueHigh),
    you should use the argument passed to the function.
    Indeed, when the function is called, there is no certainty that the model
    has already been updated.*/
  getSelectionBarColor = null;
  /** Function that returns the color of a tick. showTicks must be enabled. */
  getTickColor = null;
  /** Function that returns the current color of a pointer.
    If your color won't change, don't use this option but set it through CSS.
    If the returned color depends on a model value (either value or valueHigh),
    you should use the argument passed to the function.
    Indeed, when the function is called, there is no certainty that the model has already been updated.
    To handle range slider pointers independently, you should evaluate pointerType within the given
    function where "min" stands for value model and "max" for valueHigh model values. */
  getPointerColor = null;
  /** Handles are focusable (on click or with tab) and can be modified using the following keyboard controls:
    Left/bottom arrows: -1
    Right/top arrows: +1
    Page-down: -10%
    Page-up: +10%
    Home: minimum value
    End: maximum value
   */
  keyboardSupport = true;
  /** If you display the slider in an element that uses transform: scale(0.5), set the scale value to 2
    so that the slider is rendered properly and the events are handled correctly. */
  scale = 1;
  /** If you display the slider in an element that uses transform: rotate(90deg), set the rotate value to 90
   so that the slider is rendered properly and the events are handled correctly. Value is in degrees. */
  rotate = 0;
  /** Set to true to force the value(s) to be rounded to the step, even when modified from the outside.
    When set to false, if the model values are modified from outside the slider, they are not rounded
    and can be between two steps. */
  enforceStep = true;
  /** Set to true to force the value(s) to be normalised to allowed range (floor to ceil), even when modified from the outside.
    When set to false, if the model values are modified from outside the slider, and they are outside allowed range,
    the slider may be rendered incorrectly. However, setting this to false may be useful if you want to perform custom normalisation. */
  enforceRange = true;
  /** Set to true to force the value(s) to be rounded to the nearest step value, even when modified from the outside.
    When set to false, if the model values are modified from outside the slider, and they are outside allowed range,
    the slider may be rendered incorrectly. However, setting this to false may be useful if you want to perform custom normalisation. */
  enforceStepsArray = true;
  /** Set to true to prevent to user from switching the min and max handles. Applies to range slider only. */
  noSwitching = false;
  /** Set to true to only bind events on slider handles. */
  onlyBindHandles = false;
  /** Set to true to show graphs right to left.
    If vertical is true it will be from top to bottom and left / right arrow functions reversed. */
  rightToLeft = false;
  /** Set to true to reverse keyboard navigation:
    Right/top arrows: -1
    Left/bottom arrows: +1
    Page-up: -10%
    Page-down: +10%
    End: minimum value
    Home: maximum value
   */
  reversedControls = false;
  /** Set to true to keep the slider labels inside the slider bounds. */
  boundPointerLabels = true;
  /** Set to true to use a logarithmic scale to display the slider.  */
  logScale = false;
  /** Function that returns the position on the slider for a given value.
    The position must be a percentage between 0 and 1.
    The function should be monotonically increasing or decreasing; otherwise the slider may behave incorrectly. */
  customValueToPosition = null;
  /** Function that returns the value for a given position on the slider.
    The position is a percentage between 0 and 1.
    The function should be monotonically increasing or decreasing; otherwise the slider may behave incorrectly. */
  customPositionToValue = null;
  /** Precision limit for calculated values.
    Values used in calculations will be rounded to this number of significant digits
    to prevent accumulating small floating-point errors. */
  precisionLimit = 12;
  /** Use to display the selection bar as a gradient.
    The given object must contain from and to properties which are colors. */
  selectionBarGradient = null;
  /** Use to add a label directly to the slider for accessibility. Adds the aria-label attribute. */
  ariaLabel = 'ngx-slider';
  /** Use instead of ariaLabel to reference the id of an element which will be used to label the slider.
    Adds the aria-labelledby attribute. */
  ariaLabelledBy = null;
  /** Use to add a label directly to the slider range for accessibility. Adds the aria-label attribute. */
  ariaLabelHigh = 'ngx-slider-max';
  /** Use instead of ariaLabelHigh to reference the id of an element which will be used to label the slider range.
    Adds the aria-labelledby attribute. */
  ariaLabelledByHigh = null;
  /** Use to increase rendering performance. If the value is not provided, the slider calculates the with/height of the handle */
  handleDimension = null;
  /** Use to increase rendering performance. If the value is not provided, the slider calculates the with/height of the bar */
  barDimension = null;
  /** Enable/disable CSS animations */
  animate = true;
  /** Enable/disable CSS animations while moving the slider */
  animateOnMove = false;
}
const AllowUnsafeHtmlInSlider = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .InjectionToken */ .nKC('AllowUnsafeHtmlInSlider');

/** Pointer type */
var PointerType = /*#__PURE__*/function (PointerType) {
  /** Low pointer */
  PointerType[PointerType["Min"] = 0] = "Min";
  /** High pointer */
  PointerType[PointerType["Max"] = 1] = "Max";
  return PointerType;
}(PointerType || {});
class ChangeContext {
  value;
  highValue;
  pointerType;
}

/**
 *  Collection of functions to handle conversions/lookups of values
 */
class ValueHelper {
  static isNullOrUndefined(value) {
    return value === undefined || value === null;
  }
  static areArraysEqual(array1, array2) {
    if (array1.length !== array2.length) {
      return false;
    }
    for (let i = 0; i < array1.length; ++i) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
    return true;
  }
  static linearValueToPosition(val, minVal, maxVal) {
    const range = maxVal - minVal;
    return (val - minVal) / range;
  }
  static logValueToPosition(val, minVal, maxVal) {
    val = Math.log(val);
    minVal = Math.log(minVal);
    maxVal = Math.log(maxVal);
    const range = maxVal - minVal;
    return (val - minVal) / range;
  }
  static linearPositionToValue(percent, minVal, maxVal) {
    return percent * (maxVal - minVal) + minVal;
  }
  static logPositionToValue(percent, minVal, maxVal) {
    minVal = Math.log(minVal);
    maxVal = Math.log(maxVal);
    const value = percent * (maxVal - minVal) + minVal;
    return Math.exp(value);
  }
  static findStepIndex(modelValue, stepsArray) {
    const differences = stepsArray.map(step => Math.abs(modelValue - step.value));
    let minDifferenceIndex = 0;
    for (let index = 0; index < stepsArray.length; index++) {
      if (differences[index] !== differences[minDifferenceIndex] && differences[index] < differences[minDifferenceIndex]) {
        minDifferenceIndex = index;
      }
    }
    return minDifferenceIndex;
  }
}

/** Helper with compatibility functions to support different browsers */
class CompatibilityHelper {
  /** Workaround for TouchEvent constructor sadly not being available on all browsers (e.g. Firefox, Safari) */
  static isTouchEvent(event) {
    if (window.TouchEvent !== undefined) {
      return event instanceof TouchEvent;
    }
    return event.touches !== undefined;
  }
  /** Detect presence of ResizeObserver API */
  static isResizeObserverAvailable() {
    return window.ResizeObserver !== undefined;
  }
}

/** Helper with mathematical functions */
class MathHelper {
  /* Round numbers to a given number of significant digits */
  static roundToPrecisionLimit(value, precisionLimit) {
    return +value.toPrecision(precisionLimit);
  }
  static isModuloWithinPrecisionLimit(value, modulo, precisionLimit) {
    const limit = Math.pow(10, -precisionLimit);
    return Math.abs(value % modulo) <= limit || Math.abs(Math.abs(value % modulo) - modulo) <= limit;
  }
  static clampToRange(value, floor, ceil) {
    return Math.min(Math.max(value, floor), ceil);
  }
}
class EventListener {
  eventName = null;
  events = null;
  eventsSubscription = null;
  teardownCallback = null;
}

/**
 * Helper class to attach event listeners to DOM elements with debounce support using rxjs
 */
class EventListenerHelper {
  renderer;
  constructor(renderer) {
    this.renderer = renderer;
  }
  attachPassiveEventListener(nativeElement, eventName, callback, throttleInterval) {
    // Only use passive event listeners if the browser supports it
    if (detect_passive_events__WEBPACK_IMPORTED_MODULE_1__/* .supportsPassiveEvents */ .HE !== true) {
      return this.attachEventListener(nativeElement, eventName, callback, throttleInterval);
    }
    // Angular doesn't support passive event handlers (yet), so we need to roll our own code using native functions
    const listener = new EventListener();
    listener.eventName = eventName;
    listener.events = new rxjs__WEBPACK_IMPORTED_MODULE_2__/* .Subject */ .B();
    const observerCallback = event => {
      listener.events.next(event);
    };
    nativeElement.addEventListener(eventName, observerCallback, {
      passive: true,
      capture: false
    });
    listener.teardownCallback = () => {
      nativeElement.removeEventListener(eventName, observerCallback, {
        passive: true,
        capture: false
      });
    };
    listener.eventsSubscription = listener.events.pipe(!ValueHelper.isNullOrUndefined(throttleInterval) ? (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .throttleTime */ .c)(throttleInterval, undefined, {
      leading: true,
      trailing: true
    }) : (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .tap */ .M)(() => {}) // no-op
    ).subscribe(event => {
      callback(event);
    });
    return listener;
  }
  detachEventListener(eventListener) {
    if (!ValueHelper.isNullOrUndefined(eventListener.eventsSubscription)) {
      eventListener.eventsSubscription.unsubscribe();
      eventListener.eventsSubscription = null;
    }
    if (!ValueHelper.isNullOrUndefined(eventListener.events)) {
      eventListener.events.complete();
      eventListener.events = null;
    }
    if (!ValueHelper.isNullOrUndefined(eventListener.teardownCallback)) {
      eventListener.teardownCallback();
      eventListener.teardownCallback = null;
    }
  }
  attachEventListener(nativeElement, eventName, callback, throttleInterval) {
    const listener = new EventListener();
    listener.eventName = eventName;
    listener.events = new rxjs__WEBPACK_IMPORTED_MODULE_2__/* .Subject */ .B();
    const observerCallback = event => {
      listener.events.next(event);
    };
    listener.teardownCallback = this.renderer.listen(nativeElement, eventName, observerCallback);
    listener.eventsSubscription = listener.events.pipe(!ValueHelper.isNullOrUndefined(throttleInterval) ? (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .throttleTime */ .c)(throttleInterval, undefined, {
      leading: true,
      trailing: true
    }) : (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .tap */ .M)(() => {}) // no-op
    ).subscribe(event => {
      callback(event);
    });
    return listener;
  }
}
let SliderElementDirective = /*#__PURE__*/(() => {
  class SliderElementDirective {
    elemRef;
    renderer;
    changeDetectionRef;
    _position = 0;
    get position() {
      return this._position;
    }
    _dimension = 0;
    get dimension() {
      return this._dimension;
    }
    _alwaysHide = false;
    get alwaysHide() {
      return this._alwaysHide;
    }
    _vertical = false;
    get vertical() {
      return this._vertical;
    }
    _scale = 1;
    get scale() {
      return this._scale;
    }
    _rotate = 0;
    get rotate() {
      return this._rotate;
    }
    opacity = 1;
    visibility = 'visible';
    left = '';
    bottom = '';
    height = '';
    width = '';
    transform = '';
    eventListenerHelper;
    eventListeners = [];
    constructor(elemRef, renderer, changeDetectionRef) {
      this.elemRef = elemRef;
      this.renderer = renderer;
      this.changeDetectionRef = changeDetectionRef;
      this.eventListenerHelper = new EventListenerHelper(this.renderer);
    }
    setAlwaysHide(hide) {
      this._alwaysHide = hide;
      if (hide) {
        this.visibility = 'hidden';
      } else {
        this.visibility = 'visible';
      }
    }
    hide() {
      this.opacity = 0;
    }
    show() {
      if (this.alwaysHide) {
        return;
      }
      this.opacity = 1;
    }
    isVisible() {
      if (this.alwaysHide) {
        return false;
      }
      return this.opacity !== 0;
    }
    setVertical(vertical) {
      this._vertical = vertical;
      if (this._vertical) {
        this.left = '';
        this.width = '';
      } else {
        this.bottom = '';
        this.height = '';
      }
    }
    setScale(scale) {
      this._scale = scale;
    }
    setRotate(rotate) {
      this._rotate = rotate;
      this.transform = 'rotate(' + rotate + 'deg)';
    }
    getRotate() {
      return this._rotate;
    }
    // Set element left/top position depending on whether slider is horizontal or vertical
    setPosition(pos) {
      if (this._position !== pos && !this.isRefDestroyed()) {
        this.changeDetectionRef.markForCheck();
      }
      this._position = pos;
      if (this._vertical) {
        this.bottom = Math.round(pos) + 'px';
      } else {
        this.left = Math.round(pos) + 'px';
      }
    }
    // Calculate element's width/height depending on whether slider is horizontal or vertical
    calculateDimension() {
      const val = this.getBoundingClientRect();
      if (this.vertical) {
        this._dimension = (val.bottom - val.top) * this.scale;
      } else {
        this._dimension = (val.right - val.left) * this.scale;
      }
    }
    // Set element width/height depending on whether slider is horizontal or vertical
    setDimension(dim) {
      if (this._dimension !== dim && !this.isRefDestroyed()) {
        this.changeDetectionRef.markForCheck();
      }
      this._dimension = dim;
      if (this._vertical) {
        this.height = Math.round(dim) + 'px';
      } else {
        this.width = Math.round(dim) + 'px';
      }
    }
    getBoundingClientRect() {
      return this.elemRef.nativeElement.getBoundingClientRect();
    }
    on(eventName, callback, debounceInterval) {
      const listener = this.eventListenerHelper.attachEventListener(this.elemRef.nativeElement, eventName, callback, debounceInterval);
      this.eventListeners.push(listener);
    }
    onPassive(eventName, callback, debounceInterval) {
      const listener = this.eventListenerHelper.attachPassiveEventListener(this.elemRef.nativeElement, eventName, callback, debounceInterval);
      this.eventListeners.push(listener);
    }
    off(eventName) {
      let listenersToKeep;
      let listenersToRemove;
      if (!ValueHelper.isNullOrUndefined(eventName)) {
        listenersToKeep = this.eventListeners.filter(event => event.eventName !== eventName);
        listenersToRemove = this.eventListeners.filter(event => event.eventName === eventName);
      } else {
        listenersToKeep = [];
        listenersToRemove = this.eventListeners;
      }
      for (const listener of listenersToRemove) {
        this.eventListenerHelper.detachEventListener(listener);
      }
      this.eventListeners = listenersToKeep;
    }
    isRefDestroyed() {
      return ValueHelper.isNullOrUndefined(this.changeDetectionRef) || this.changeDetectionRef['destroyed'];
    }
    static ɵfac = function SliderElementDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || SliderElementDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* .ElementRef */ .aKT), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* .Renderer2 */ .sFG), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* .ChangeDetectorRef */ .gRc));
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineDirective"] */ .FsC({
      type: SliderElementDirective,
      selectors: [["", "ngxSliderElement", ""]],
      hostVars: 14,
      hostBindings: function SliderElementDirective_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵstyleProp"] */ .xc7("opacity", ctx.opacity)("visibility", ctx.visibility)("left", ctx.left)("bottom", ctx.bottom)("height", ctx.height)("width", ctx.width)("transform", ctx.transform);
        }
      },
      standalone: false
    });
  }
  return SliderElementDirective;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let SliderHandleDirective = /*#__PURE__*/(() => {
  class SliderHandleDirective extends SliderElementDirective {
    active = false;
    role = '';
    tabindex = '';
    ariaOrientation = '';
    ariaLabel = '';
    ariaLabelledBy = '';
    ariaValueNow = '';
    ariaValueText = '';
    ariaValueMin = '';
    ariaValueMax = '';
    focus() {
      this.elemRef.nativeElement.focus();
    }
    focusIfNeeded() {
      if (document.activeElement !== this.elemRef.nativeElement) {
        this.elemRef.nativeElement.focus();
      }
    }
    constructor(elemRef, renderer, changeDetectionRef) {
      super(elemRef, renderer, changeDetectionRef);
    }
    static ɵfac = function SliderHandleDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || SliderHandleDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* .ElementRef */ .aKT), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* .Renderer2 */ .sFG), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* .ChangeDetectorRef */ .gRc));
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineDirective"] */ .FsC({
      type: SliderHandleDirective,
      selectors: [["", "ngxSliderHandle", ""]],
      hostVars: 11,
      hostBindings: function SliderHandleDirective_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵattribute"] */ .BMQ("role", ctx.role)("tabindex", ctx.tabindex)("aria-orientation", ctx.ariaOrientation)("aria-label", ctx.ariaLabel)("aria-labelledby", ctx.ariaLabelledBy)("aria-valuenow", ctx.ariaValueNow)("aria-valuetext", ctx.ariaValueText)("aria-valuemin", ctx.ariaValueMin)("aria-valuemax", ctx.ariaValueMax);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵclassProp"] */ .AVh("ngx-slider-active", ctx.active);
        }
      },
      standalone: false,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3]
    });
  }
  return SliderHandleDirective;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let SliderLabelDirective = /*#__PURE__*/(() => {
  class SliderLabelDirective extends SliderElementDirective {
    allowUnsafeHtmlInSlider;
    _value = null;
    get value() {
      return this._value;
    }
    constructor(elemRef, renderer, changeDetectionRef, allowUnsafeHtmlInSlider) {
      super(elemRef, renderer, changeDetectionRef);
      this.allowUnsafeHtmlInSlider = allowUnsafeHtmlInSlider;
    }
    setValue(value) {
      let recalculateDimension = false;
      if (!this.alwaysHide && (ValueHelper.isNullOrUndefined(this.value) || this.value.length !== value.length || this.value.length > 0 && this.dimension === 0)) {
        recalculateDimension = true;
      }
      this._value = value;
      if (this.allowUnsafeHtmlInSlider === false) {
        this.elemRef.nativeElement.innerText = value;
      } else {
        this.elemRef.nativeElement.innerHTML = value;
      }
      // Update dimension only when length of the label have changed
      if (recalculateDimension) {
        this.calculateDimension();
      }
    }
    static ɵfac = function SliderLabelDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || SliderLabelDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* .ElementRef */ .aKT), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* .Renderer2 */ .sFG), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* .ChangeDetectorRef */ .gRc), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(AllowUnsafeHtmlInSlider, 8));
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineDirective"] */ .FsC({
      type: SliderLabelDirective,
      selectors: [["", "ngxSliderLabel", ""]],
      standalone: false,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3]
    });
  }
  return SliderLabelDirective;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let TooltipWrapperComponent = /*#__PURE__*/(() => {
  class TooltipWrapperComponent {
    template;
    tooltip;
    placement;
    content;
    static ɵfac = function TooltipWrapperComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || TooltipWrapperComponent)();
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
      type: TooltipWrapperComponent,
      selectors: [["ngx-slider-tooltip-wrapper"]],
      inputs: {
        template: "template",
        tooltip: "tooltip",
        placement: "placement",
        content: "content"
      },
      standalone: false,
      decls: 2,
      vars: 2,
      consts: [[4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "ngx-slider-inner-tooltip"]],
      template: function TooltipWrapperComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(0, TooltipWrapperComponent_ng_container_0_Template, 2, 6, "ng-container", 0)(1, TooltipWrapperComponent_ng_container_1_Template, 3, 3, "ng-container", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.template);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngIf", !ctx.template);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__/* .NgIf */ .bT, _angular_common__WEBPACK_IMPORTED_MODULE_5__/* .NgTemplateOutlet */ .T3],
      styles: [".ngx-slider-inner-tooltip[_ngcontent-%COMP%]{height:100%}"]
    });
  }
  return TooltipWrapperComponent;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
class Tick {
  selected = false;
  style = {};
  tooltip = null;
  tooltipPlacement = null;
  value = null;
  valueTooltip = null;
  valueTooltipPlacement = null;
  legend = null;
}
class Dragging {
  active = false;
  value = 0;
  difference = 0;
  position = 0;
  lowLimit = 0;
  highLimit = 0;
}
class ModelValues {
  value;
  highValue;
  static compare(x, y) {
    if (ValueHelper.isNullOrUndefined(x) && ValueHelper.isNullOrUndefined(y)) {
      return false;
    }
    if (ValueHelper.isNullOrUndefined(x) !== ValueHelper.isNullOrUndefined(y)) {
      return false;
    }
    return x.value === y.value && x.highValue === y.highValue;
  }
}
class ModelChange extends ModelValues {
  // Flag used to by-pass distinctUntilChanged() filter on input values
  // (sometimes there is a need to pass values through even though the model values have not changed)
  forceChange;
  static compare(x, y) {
    if (ValueHelper.isNullOrUndefined(x) && ValueHelper.isNullOrUndefined(y)) {
      return false;
    }
    if (ValueHelper.isNullOrUndefined(x) !== ValueHelper.isNullOrUndefined(y)) {
      return false;
    }
    return x.value === y.value && x.highValue === y.highValue && x.forceChange === y.forceChange;
  }
}
class InputModelChange extends (/* unused pure expression or super */ null && (ModelChange)) {
  controlAccessorChange;
  internalChange;
}
class OutputModelChange extends (/* unused pure expression or super */ null && (ModelChange)) {
  controlAccessorChange;
  userEventInitiated;
}
const NGX_SLIDER_CONTROL_VALUE_ACCESSOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_6__/* .NG_VALUE_ACCESSOR */ .kq,
  /* tslint:disable-next-line: no-use-before-declare */
  useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__/* .forwardRef */ .Rfq)(() => SliderComponent),
  multi: true
};
let SliderComponent = /*#__PURE__*/(() => {
  class SliderComponent {
    renderer;
    elementRef;
    changeDetectionRef;
    zone;
    allowUnsafeHtmlInSlider;
    // Add ngx-slider class to the host element - this is static, should never change
    sliderElementNgxSliderClass = true;
    // Model for low value of slider. For simple slider, this is the only input. For range slider, this is the low value.
    value = null;
    // Output for low value slider to support two-way bindings
    valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .bkB();
    // Model for high value of slider. Not used in simple slider. For range slider, this is the high value.
    highValue = null;
    // Output for high value slider to support two-way bindings
    highValueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .bkB();
    // An object with all the other options of the slider.
    // Each option can be updated at runtime and the slider will automatically be re-rendered.
    options = new Options();
    // Event emitted when user starts interaction with the slider
    userChangeStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .bkB();
    // Event emitted on each change coming from user interaction
    userChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .bkB();
    // Event emitted when user finishes interaction with the slider
    userChangeEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .EventEmitter */ .bkB();
    manualRefreshSubscription;
    // Input event that triggers slider refresh (re-positioning of slider elements)
    set manualRefresh(manualRefresh) {
      this.unsubscribeManualRefresh();
      this.manualRefreshSubscription = manualRefresh.subscribe(() => {
        setTimeout(() => this.calculateViewDimensionsAndDetectChanges());
      });
    }
    triggerFocusSubscription;
    // Input event that triggers setting focus on given slider handle
    set triggerFocus(triggerFocus) {
      this.unsubscribeTriggerFocus();
      this.triggerFocusSubscription = triggerFocus.subscribe(pointerType => {
        this.focusPointer(pointerType);
      });
    }
    cancelUserChangeSubscription;
    set cancelUserChange(cancelUserChange) {
      this.unsubscribeCancelUserChange();
      this.cancelUserChangeSubscription = cancelUserChange.subscribe(() => {
        if (this.moving) {
          this.positionTrackingHandle(this.preStartHandleValue);
          this.forceEnd(true);
        }
      });
    }
    // Slider type, true means range slider
    get range() {
      return !ValueHelper.isNullOrUndefined(this.value) && !ValueHelper.isNullOrUndefined(this.highValue);
    }
    // Set to true if init method already executed
    initHasRun = false;
    // Changes in model inputs are passed through this subject
    // These are all changes coming in from outside the component through input bindings or reactive form inputs
    inputModelChangeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__/* .Subject */ .B();
    inputModelChangeSubscription = null;
    // Changes to model outputs are passed through this subject
    // These are all changes that need to be communicated to output emitters and registered callbacks
    outputModelChangeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__/* .Subject */ .B();
    outputModelChangeSubscription = null;
    // Low value synced to model low value
    viewLowValue = null;
    // High value synced to model high value
    viewHighValue = null;
    // Options synced to model options, based on defaults
    viewOptions = new Options();
    // Half of the width or height of the slider handles
    handleHalfDimension = 0;
    // Maximum position the slider handle can have
    maxHandlePosition = 0;
    // Which handle is currently tracked for move events
    currentTrackingPointer = null;
    // Internal variable to keep track of the focus element
    currentFocusPointer = null;
    // Used to call onStart on the first keydown event
    firstKeyDown = false;
    // Current touch id of touch event being handled
    touchId = null;
    // Values recorded when first dragging the bar
    dragging = new Dragging();
    // Value of hanlde at the beginning of onStart()
    preStartHandleValue = null;
    /* Slider DOM elements */
    // Left selection bar outside two handles
    leftOuterSelectionBarElement;
    // Right selection bar outside two handles
    rightOuterSelectionBarElement;
    // The whole slider bar
    fullBarElement;
    // Highlight between two handles
    selectionBarElement;
    // Left slider handle
    minHandleElement;
    // Right slider handle
    maxHandleElement;
    // Floor label
    floorLabelElement;
    // Ceiling label
    ceilLabelElement;
    // Label above the low value
    minHandleLabelElement;
    // Label above the high value
    maxHandleLabelElement;
    // Combined label
    combinedLabelElement;
    // The ticks
    ticksElement;
    // Optional custom template for displaying tooltips
    tooltipTemplate;
    // Host element class bindings
    sliderElementVerticalClass = false;
    sliderElementAnimateClass = false;
    sliderElementWithLegendClass = false;
    sliderElementDisabledAttr = null;
    sliderElementAriaLabel = 'ngx-slider';
    // CSS styles and class flags
    barStyle = {};
    minPointerStyle = {};
    maxPointerStyle = {};
    fullBarTransparentClass = false;
    selectionBarDraggableClass = false;
    ticksUnderValuesClass = false;
    // Whether to show/hide ticks
    get showTicks() {
      return this.viewOptions.showTicks;
    }
    /* If tickStep is set or ticksArray is specified.
       In this case, ticks values should be displayed below the slider. */
    intermediateTicks = false;
    // Ticks array as displayed in view
    ticks = [];
    // Event listeners
    eventListenerHelper = null;
    onMoveEventListener = null;
    onEndEventListener = null;
    // Whether currently moving the slider (between onStart() and onEnd())
    moving = false;
    // Observer for slider element resize events
    resizeObserver = null;
    // Callbacks for reactive forms support
    onTouchedCallback = null;
    onChangeCallback = null;
    constructor(renderer, elementRef, changeDetectionRef, zone, allowUnsafeHtmlInSlider) {
      this.renderer = renderer;
      this.elementRef = elementRef;
      this.changeDetectionRef = changeDetectionRef;
      this.zone = zone;
      this.allowUnsafeHtmlInSlider = allowUnsafeHtmlInSlider;
      this.eventListenerHelper = new EventListenerHelper(this.renderer);
    }
    // OnInit interface
    ngOnInit() {
      this.viewOptions = new Options();
      Object.assign(this.viewOptions, this.options);
      // We need to run these two things first, before the rest of the init in ngAfterViewInit(),
      // because these two settings are set through @HostBinding and Angular change detection
      // mechanism doesn't like them changing in ngAfterViewInit()
      this.updateDisabledState();
      this.updateVerticalState();
      this.updateAriaLabel();
    }
    // AfterViewInit interface
    ngAfterViewInit() {
      this.applyOptions();
      this.subscribeInputModelChangeSubject();
      this.subscribeOutputModelChangeSubject();
      // Once we apply options, we need to normalise model values for the first time
      this.renormaliseModelValues();
      this.viewLowValue = this.modelValueToViewValue(this.value);
      if (this.range) {
        this.viewHighValue = this.modelValueToViewValue(this.highValue);
      } else {
        this.viewHighValue = null;
      }
      this.updateVerticalState(); // need to run this again to cover changes to slider elements
      this.manageElementsStyle();
      this.updateDisabledState();
      this.calculateViewDimensions();
      this.addAccessibility();
      this.updateCeilLabel();
      this.updateFloorLabel();
      this.initHandles();
      this.manageEventsBindings();
      this.updateAriaLabel();
      this.subscribeResizeObserver();
      this.initHasRun = true;
      // Run change detection manually to resolve some issues when init procedure changes values used in the view
      if (!this.isRefDestroyed()) {
        this.changeDetectionRef.detectChanges();
      }
    }
    // OnChanges interface
    ngOnChanges(changes) {
      // Always apply options first
      if (!ValueHelper.isNullOrUndefined(changes.options) && JSON.stringify(changes.options.previousValue) !== JSON.stringify(changes.options.currentValue)) {
        this.onChangeOptions();
      }
      // Then value changes
      if (!ValueHelper.isNullOrUndefined(changes.value) || !ValueHelper.isNullOrUndefined(changes.highValue)) {
        this.inputModelChangeSubject.next({
          value: this.value,
          highValue: this.highValue,
          controlAccessorChange: false,
          forceChange: false,
          internalChange: false
        });
      }
    }
    // OnDestroy interface
    ngOnDestroy() {
      this.unbindEvents();
      this.unsubscribeResizeObserver();
      this.unsubscribeInputModelChangeSubject();
      this.unsubscribeOutputModelChangeSubject();
      this.unsubscribeManualRefresh();
      this.unsubscribeTriggerFocus();
    }
    // ControlValueAccessor interface
    writeValue(obj) {
      if (obj instanceof Array) {
        this.value = obj[0];
        this.highValue = obj[1];
      } else {
        this.value = obj;
      }
      // ngOnChanges() is not called in this instance, so we need to communicate the change manually
      this.inputModelChangeSubject.next({
        value: this.value,
        highValue: this.highValue,
        forceChange: false,
        internalChange: false,
        controlAccessorChange: true
      });
    }
    // ControlValueAccessor interface
    registerOnChange(onChangeCallback) {
      this.onChangeCallback = onChangeCallback;
    }
    // ControlValueAccessor interface
    registerOnTouched(onTouchedCallback) {
      this.onTouchedCallback = onTouchedCallback;
    }
    // ControlValueAccessor interface
    setDisabledState(isDisabled) {
      this.viewOptions.disabled = isDisabled;
      this.updateDisabledState();
      if (this.initHasRun) {
        this.manageEventsBindings();
      }
    }
    setAriaLabel(ariaLabel) {
      this.viewOptions.ariaLabel = ariaLabel;
      this.updateAriaLabel();
    }
    onResize(event) {
      this.calculateViewDimensionsAndDetectChanges();
    }
    subscribeInputModelChangeSubject() {
      this.inputModelChangeSubscription = this.inputModelChangeSubject.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .distinctUntilChanged */ .F)(ModelChange.compare),
      // Hack to reset the status of the distinctUntilChanged() - if a "fake" event comes through with forceChange=true,
      // we forcefully by-pass distinctUntilChanged(), but otherwise drop the event
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .filter */ .p)(modelChange => !modelChange.forceChange && !modelChange.internalChange)).subscribe(modelChange => this.applyInputModelChange(modelChange));
    }
    subscribeOutputModelChangeSubject() {
      this.outputModelChangeSubscription = this.outputModelChangeSubject.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .distinctUntilChanged */ .F)(ModelChange.compare)).subscribe(modelChange => this.publishOutputModelChange(modelChange));
    }
    subscribeResizeObserver() {
      if (CompatibilityHelper.isResizeObserverAvailable()) {
        this.resizeObserver = new ResizeObserver(() => this.calculateViewDimensionsAndDetectChanges());
        this.resizeObserver.observe(this.elementRef.nativeElement);
      }
    }
    unsubscribeResizeObserver() {
      if (CompatibilityHelper.isResizeObserverAvailable() && this.resizeObserver !== null) {
        this.resizeObserver.disconnect();
        this.resizeObserver = null;
      }
    }
    unsubscribeOnMove() {
      if (!ValueHelper.isNullOrUndefined(this.onMoveEventListener)) {
        this.eventListenerHelper.detachEventListener(this.onMoveEventListener);
        this.onMoveEventListener = null;
      }
    }
    unsubscribeOnEnd() {
      if (!ValueHelper.isNullOrUndefined(this.onEndEventListener)) {
        this.eventListenerHelper.detachEventListener(this.onEndEventListener);
        this.onEndEventListener = null;
      }
    }
    unsubscribeInputModelChangeSubject() {
      if (!ValueHelper.isNullOrUndefined(this.inputModelChangeSubscription)) {
        this.inputModelChangeSubscription.unsubscribe();
        this.inputModelChangeSubscription = null;
      }
    }
    unsubscribeOutputModelChangeSubject() {
      if (!ValueHelper.isNullOrUndefined(this.outputModelChangeSubscription)) {
        this.outputModelChangeSubscription.unsubscribe();
        this.outputModelChangeSubscription = null;
      }
    }
    unsubscribeManualRefresh() {
      if (!ValueHelper.isNullOrUndefined(this.manualRefreshSubscription)) {
        this.manualRefreshSubscription.unsubscribe();
        this.manualRefreshSubscription = null;
      }
    }
    unsubscribeTriggerFocus() {
      if (!ValueHelper.isNullOrUndefined(this.triggerFocusSubscription)) {
        this.triggerFocusSubscription.unsubscribe();
        this.triggerFocusSubscription = null;
      }
    }
    unsubscribeCancelUserChange() {
      if (!ValueHelper.isNullOrUndefined(this.cancelUserChangeSubscription)) {
        this.cancelUserChangeSubscription.unsubscribe();
        this.cancelUserChangeSubscription = null;
      }
    }
    getPointerElement(pointerType) {
      if (pointerType === PointerType.Min) {
        return this.minHandleElement;
      } else if (pointerType === PointerType.Max) {
        return this.maxHandleElement;
      }
      return null;
    }
    getCurrentTrackingValue() {
      if (this.currentTrackingPointer === PointerType.Min) {
        return this.viewLowValue;
      } else if (this.currentTrackingPointer === PointerType.Max) {
        return this.viewHighValue;
      }
      return null;
    }
    modelValueToViewValue(modelValue) {
      if (ValueHelper.isNullOrUndefined(modelValue)) {
        return NaN;
      }
      if (!ValueHelper.isNullOrUndefined(this.viewOptions.stepsArray) && !this.viewOptions.bindIndexForStepsArray) {
        return ValueHelper.findStepIndex(+modelValue, this.viewOptions.stepsArray);
      }
      return +modelValue;
    }
    viewValueToModelValue(viewValue) {
      if (!ValueHelper.isNullOrUndefined(this.viewOptions.stepsArray) && !this.viewOptions.bindIndexForStepsArray) {
        return this.getStepValue(viewValue);
      }
      return viewValue;
    }
    getStepValue(sliderValue) {
      const step = this.viewOptions.stepsArray[sliderValue];
      return !ValueHelper.isNullOrUndefined(step) ? step.value : NaN;
    }
    applyViewChange() {
      this.value = this.viewValueToModelValue(this.viewLowValue);
      if (this.range) {
        this.highValue = this.viewValueToModelValue(this.viewHighValue);
      }
      this.outputModelChangeSubject.next({
        value: this.value,
        highValue: this.highValue,
        controlAccessorChange: false,
        userEventInitiated: true,
        forceChange: false
      });
      // At this point all changes are applied and outputs are emitted, so we should be done.
      // However, input changes are communicated in different stream and we need to be ready to
      // act on the next input change even if it is exactly the same as last input change.
      // Therefore, we send a special event to reset the stream.
      this.inputModelChangeSubject.next({
        value: this.value,
        highValue: this.highValue,
        controlAccessorChange: false,
        forceChange: false,
        internalChange: true
      });
    }
    // Apply model change to the slider view
    applyInputModelChange(modelChange) {
      const normalisedModelChange = this.normaliseModelValues(modelChange);
      // If normalised model change is different, apply the change to the model values
      const normalisationChange = !ModelValues.compare(modelChange, normalisedModelChange);
      if (normalisationChange) {
        this.value = normalisedModelChange.value;
        this.highValue = normalisedModelChange.highValue;
      }
      this.viewLowValue = this.modelValueToViewValue(normalisedModelChange.value);
      if (this.range) {
        this.viewHighValue = this.modelValueToViewValue(normalisedModelChange.highValue);
      } else {
        this.viewHighValue = null;
      }
      this.updateLowHandle(this.valueToPosition(this.viewLowValue));
      if (this.range) {
        this.updateHighHandle(this.valueToPosition(this.viewHighValue));
      }
      this.updateSelectionBar();
      this.updateTicksScale();
      this.updateAriaAttributes();
      if (this.range) {
        this.updateCombinedLabel();
      }
      // At the end, we need to communicate the model change to the outputs as well
      // Normalisation changes are also always forced out to ensure that subscribers always end up in correct state
      this.outputModelChangeSubject.next({
        value: normalisedModelChange.value,
        highValue: normalisedModelChange.highValue,
        controlAccessorChange: modelChange.controlAccessorChange,
        forceChange: normalisationChange,
        userEventInitiated: false
      });
    }
    // Publish model change to output event emitters and registered callbacks
    publishOutputModelChange(modelChange) {
      const emitOutputs = () => {
        this.valueChange.emit(modelChange.value);
        if (this.range) {
          this.highValueChange.emit(modelChange.highValue);
        }
        // If this change is coming from a control accessor (i.e. angular called `writeValue`)
        // then we do not want to call the angular callbacks.
        if (modelChange.controlAccessorChange) {
          return;
        }
        if (!ValueHelper.isNullOrUndefined(this.onChangeCallback)) {
          if (this.range) {
            this.onChangeCallback([modelChange.value, modelChange.highValue]);
          } else {
            this.onChangeCallback(modelChange.value);
          }
        }
        if (!ValueHelper.isNullOrUndefined(this.onTouchedCallback)) {
          if (this.range) {
            this.onTouchedCallback([modelChange.value, modelChange.highValue]);
          } else {
            this.onTouchedCallback(modelChange.value);
          }
        }
      };
      if (modelChange.userEventInitiated) {
        // If this change was initiated by a user event, we can emit outputs in the same tick
        emitOutputs();
        this.userChange.emit(this.getChangeContext());
      } else {
        // But, if the change was initated by something else like a change in input bindings,
        // we need to wait until next tick to emit the outputs to keep Angular change detection happy
        setTimeout(() => {
          emitOutputs();
        });
      }
    }
    normaliseModelValues(input) {
      const normalisedInput = new ModelValues();
      normalisedInput.value = input.value;
      normalisedInput.highValue = input.highValue;
      if (!ValueHelper.isNullOrUndefined(this.viewOptions.stepsArray)) {
        // When using steps array, only round to nearest step in the array
        // No other enforcement can be done, as the step array may be out of order, and that is perfectly fine
        if (this.viewOptions.enforceStepsArray) {
          const valueIndex = ValueHelper.findStepIndex(normalisedInput.value, this.viewOptions.stepsArray);
          normalisedInput.value = this.viewOptions.stepsArray[valueIndex].value;
          if (this.range) {
            const highValueIndex = ValueHelper.findStepIndex(normalisedInput.highValue, this.viewOptions.stepsArray);
            normalisedInput.highValue = this.viewOptions.stepsArray[highValueIndex].value;
          }
        }
        return normalisedInput;
      }
      if (this.viewOptions.enforceStep) {
        normalisedInput.value = this.roundStep(normalisedInput.value);
        if (this.range) {
          normalisedInput.highValue = this.roundStep(normalisedInput.highValue);
        }
      }
      if (this.viewOptions.enforceRange) {
        normalisedInput.value = MathHelper.clampToRange(normalisedInput.value, this.viewOptions.floor, this.viewOptions.ceil);
        if (this.range) {
          normalisedInput.highValue = MathHelper.clampToRange(normalisedInput.highValue, this.viewOptions.floor, this.viewOptions.ceil);
        }
        // Make sure that range slider invariant (value <= highValue) is always satisfied
        if (this.range && input.value > input.highValue) {
          // We know that both values are now clamped correctly, they may just be in the wrong order
          // So the easy solution is to swap them... except swapping is sometimes disabled in options, so we make the two values the same
          if (this.viewOptions.noSwitching) {
            normalisedInput.value = normalisedInput.highValue;
          } else {
            const tempValue = input.value;
            normalisedInput.value = input.highValue;
            normalisedInput.highValue = tempValue;
          }
        }
      }
      return normalisedInput;
    }
    renormaliseModelValues() {
      const previousModelValues = {
        value: this.value,
        highValue: this.highValue
      };
      const normalisedModelValues = this.normaliseModelValues(previousModelValues);
      if (!ModelValues.compare(normalisedModelValues, previousModelValues)) {
        this.value = normalisedModelValues.value;
        this.highValue = normalisedModelValues.highValue;
        this.outputModelChangeSubject.next({
          value: this.value,
          highValue: this.highValue,
          controlAccessorChange: false,
          forceChange: true,
          userEventInitiated: false
        });
      }
    }
    onChangeOptions() {
      if (!this.initHasRun) {
        return;
      }
      const previousOptionsInfluencingEventBindings = this.getOptionsInfluencingEventBindings(this.viewOptions);
      this.applyOptions();
      const newOptionsInfluencingEventBindings = this.getOptionsInfluencingEventBindings(this.viewOptions);
      // Avoid re-binding events in case nothing changes that can influence it
      // It makes it possible to change options while dragging the slider
      const rebindEvents = !ValueHelper.areArraysEqual(previousOptionsInfluencingEventBindings, newOptionsInfluencingEventBindings);
      // With new options, we need to re-normalise model values if necessary
      this.renormaliseModelValues();
      this.viewLowValue = this.modelValueToViewValue(this.value);
      if (this.range) {
        this.viewHighValue = this.modelValueToViewValue(this.highValue);
      } else {
        this.viewHighValue = null;
      }
      this.resetSlider(rebindEvents);
    }
    // Read the user options and apply them to the slider model
    applyOptions() {
      this.viewOptions = new Options();
      Object.assign(this.viewOptions, this.options);
      this.viewOptions.draggableRange = this.range && this.viewOptions.draggableRange;
      this.viewOptions.draggableRangeOnly = this.range && this.viewOptions.draggableRangeOnly;
      if (this.viewOptions.draggableRangeOnly) {
        this.viewOptions.draggableRange = true;
      }
      this.viewOptions.showTicks = this.viewOptions.showTicks || this.viewOptions.showTicksValues || !ValueHelper.isNullOrUndefined(this.viewOptions.ticksArray);
      if (this.viewOptions.showTicks && (!ValueHelper.isNullOrUndefined(this.viewOptions.tickStep) || !ValueHelper.isNullOrUndefined(this.viewOptions.ticksArray))) {
        this.intermediateTicks = true;
      }
      this.viewOptions.showSelectionBar = this.viewOptions.showSelectionBar || this.viewOptions.showSelectionBarEnd || !ValueHelper.isNullOrUndefined(this.viewOptions.showSelectionBarFromValue);
      if (!ValueHelper.isNullOrUndefined(this.viewOptions.stepsArray)) {
        this.applyStepsArrayOptions();
      } else {
        this.applyFloorCeilOptions();
      }
      if (ValueHelper.isNullOrUndefined(this.viewOptions.combineLabels)) {
        this.viewOptions.combineLabels = (minValue, maxValue) => {
          return minValue + ' - ' + maxValue;
        };
      }
      if (this.viewOptions.logScale && this.viewOptions.floor === 0) {
        throw Error("Can't use floor=0 with logarithmic scale");
      }
    }
    applyStepsArrayOptions() {
      this.viewOptions.floor = 0;
      this.viewOptions.ceil = this.viewOptions.stepsArray.length - 1;
      this.viewOptions.step = 1;
      if (ValueHelper.isNullOrUndefined(this.viewOptions.translate)) {
        this.viewOptions.translate = modelValue => {
          if (this.viewOptions.bindIndexForStepsArray) {
            return String(this.getStepValue(modelValue));
          }
          return String(modelValue);
        };
      }
    }
    applyFloorCeilOptions() {
      if (ValueHelper.isNullOrUndefined(this.viewOptions.step)) {
        this.viewOptions.step = 1;
      } else {
        this.viewOptions.step = +this.viewOptions.step;
        if (this.viewOptions.step <= 0) {
          this.viewOptions.step = 1;
        }
      }
      if (ValueHelper.isNullOrUndefined(this.viewOptions.ceil) || ValueHelper.isNullOrUndefined(this.viewOptions.floor)) {
        throw Error('floor and ceil options must be supplied');
      }
      this.viewOptions.ceil = +this.viewOptions.ceil;
      this.viewOptions.floor = +this.viewOptions.floor;
      if (ValueHelper.isNullOrUndefined(this.viewOptions.translate)) {
        this.viewOptions.translate = value => String(value);
      }
    }
    // Resets slider
    resetSlider(rebindEvents = true) {
      this.manageElementsStyle();
      this.addAccessibility();
      this.updateCeilLabel();
      this.updateFloorLabel();
      if (rebindEvents) {
        this.unbindEvents();
        this.manageEventsBindings();
      }
      this.updateDisabledState();
      this.updateAriaLabel();
      this.calculateViewDimensions();
      this.refocusPointerIfNeeded();
    }
    // Sets focus on the specified pointer
    focusPointer(pointerType) {
      // If not supplied, use min pointer as default
      if (pointerType !== PointerType.Min && pointerType !== PointerType.Max) {
        pointerType = PointerType.Min;
      }
      if (pointerType === PointerType.Min) {
        this.minHandleElement.focus();
      } else if (this.range && pointerType === PointerType.Max) {
        this.maxHandleElement.focus();
      }
    }
    refocusPointerIfNeeded() {
      if (!ValueHelper.isNullOrUndefined(this.currentFocusPointer)) {
        const element = this.getPointerElement(this.currentFocusPointer);
        element.focusIfNeeded();
      }
    }
    // Update each elements style based on options
    manageElementsStyle() {
      this.updateScale();
      this.floorLabelElement.setAlwaysHide(this.viewOptions.showTicksValues || this.viewOptions.hideLimitLabels);
      this.ceilLabelElement.setAlwaysHide(this.viewOptions.showTicksValues || this.viewOptions.hideLimitLabels);
      const hideLabelsForTicks = this.viewOptions.showTicksValues && !this.intermediateTicks;
      this.minHandleLabelElement.setAlwaysHide(hideLabelsForTicks || this.viewOptions.hidePointerLabels);
      this.maxHandleLabelElement.setAlwaysHide(hideLabelsForTicks || !this.range || this.viewOptions.hidePointerLabels);
      this.combinedLabelElement.setAlwaysHide(hideLabelsForTicks || !this.range || this.viewOptions.hidePointerLabels);
      this.selectionBarElement.setAlwaysHide(!this.range && !this.viewOptions.showSelectionBar);
      this.leftOuterSelectionBarElement.setAlwaysHide(!this.range || !this.viewOptions.showOuterSelectionBars);
      this.rightOuterSelectionBarElement.setAlwaysHide(!this.range || !this.viewOptions.showOuterSelectionBars);
      this.fullBarTransparentClass = this.range && this.viewOptions.showOuterSelectionBars;
      this.selectionBarDraggableClass = this.viewOptions.draggableRange && !this.viewOptions.onlyBindHandles;
      this.ticksUnderValuesClass = this.intermediateTicks && this.options.showTicksValues;
      if (this.sliderElementVerticalClass !== this.viewOptions.vertical) {
        this.updateVerticalState();
        // The above change in host component class will not be applied until the end of this cycle
        // However, functions calculating the slider position expect the slider to be already styled as vertical
        // So as a workaround, we need to reset the slider once again to compute the correct values
        setTimeout(() => {
          this.resetSlider();
        });
      }
      // Changing animate class may interfere with slider reset/initialisation, so we should set it separately,
      // after all is properly set up
      if (this.sliderElementAnimateClass !== this.viewOptions.animate) {
        setTimeout(() => {
          this.sliderElementAnimateClass = this.viewOptions.animate;
        });
      }
      this.updateRotate();
    }
    // Manage the events bindings based on readOnly and disabled options
    manageEventsBindings() {
      if (this.viewOptions.disabled || this.viewOptions.readOnly) {
        this.unbindEvents();
      } else {
        this.bindEvents();
      }
    }
    // Set the disabled state based on disabled option
    updateDisabledState() {
      this.sliderElementDisabledAttr = this.viewOptions.disabled ? 'disabled' : null;
    }
    // Set the aria-label state based on ariaLabel option
    updateAriaLabel() {
      this.sliderElementAriaLabel = this.viewOptions.ariaLabel || 'nxg-slider';
    }
    // Set vertical state based on vertical option
    updateVerticalState() {
      this.sliderElementVerticalClass = this.viewOptions.vertical;
      for (const element of this.getAllSliderElements()) {
        // This is also called before ngAfterInit, so need to check that view child bindings work
        if (!ValueHelper.isNullOrUndefined(element)) {
          element.setVertical(this.viewOptions.vertical);
        }
      }
    }
    updateScale() {
      for (const element of this.getAllSliderElements()) {
        element.setScale(this.viewOptions.scale);
      }
    }
    updateRotate() {
      for (const element of this.getAllSliderElements()) {
        element.setRotate(this.viewOptions.rotate);
      }
    }
    getAllSliderElements() {
      return [this.leftOuterSelectionBarElement, this.rightOuterSelectionBarElement, this.fullBarElement, this.selectionBarElement, this.minHandleElement, this.maxHandleElement, this.floorLabelElement, this.ceilLabelElement, this.minHandleLabelElement, this.maxHandleLabelElement, this.combinedLabelElement, this.ticksElement];
    }
    // Initialize slider handles positions and labels
    // Run only once during initialization and every time view port changes size
    initHandles() {
      this.updateLowHandle(this.valueToPosition(this.viewLowValue));
      /*
      the order here is important since the selection bar should be
      updated after the high handle but before the combined label
      */
      if (this.range) {
        this.updateHighHandle(this.valueToPosition(this.viewHighValue));
      }
      this.updateSelectionBar();
      if (this.range) {
        this.updateCombinedLabel();
      }
      this.updateTicksScale();
    }
    // Adds accessibility attributes, run only once during initialization
    addAccessibility() {
      this.updateAriaAttributes();
      this.minHandleElement.role = 'slider';
      if (this.viewOptions.keyboardSupport && !(this.viewOptions.readOnly || this.viewOptions.disabled)) {
        this.minHandleElement.tabindex = '0';
      } else {
        this.minHandleElement.tabindex = '';
      }
      this.minHandleElement.ariaOrientation = this.viewOptions.vertical || this.viewOptions.rotate !== 0 ? 'vertical' : 'horizontal';
      if (!ValueHelper.isNullOrUndefined(this.viewOptions.ariaLabel)) {
        this.minHandleElement.ariaLabel = this.viewOptions.ariaLabel;
      } else if (!ValueHelper.isNullOrUndefined(this.viewOptions.ariaLabelledBy)) {
        this.minHandleElement.ariaLabelledBy = this.viewOptions.ariaLabelledBy;
      }
      if (this.range) {
        this.maxHandleElement.role = 'slider';
        if (this.viewOptions.keyboardSupport && !(this.viewOptions.readOnly || this.viewOptions.disabled)) {
          this.maxHandleElement.tabindex = '0';
        } else {
          this.maxHandleElement.tabindex = '';
        }
        this.maxHandleElement.ariaOrientation = this.viewOptions.vertical || this.viewOptions.rotate !== 0 ? 'vertical' : 'horizontal';
        if (!ValueHelper.isNullOrUndefined(this.viewOptions.ariaLabelHigh)) {
          this.maxHandleElement.ariaLabel = this.viewOptions.ariaLabelHigh;
        } else if (!ValueHelper.isNullOrUndefined(this.viewOptions.ariaLabelledByHigh)) {
          this.maxHandleElement.ariaLabelledBy = this.viewOptions.ariaLabelledByHigh;
        }
      }
    }
    // Updates aria attributes according to current values
    updateAriaAttributes() {
      this.minHandleElement.ariaValueNow = (+this.value).toString();
      this.minHandleElement.ariaValueText = this.viewOptions.translate(+this.value, LabelType.Low);
      this.minHandleElement.ariaValueMin = this.viewOptions.floor.toString();
      this.minHandleElement.ariaValueMax = this.viewOptions.ceil.toString();
      if (this.range) {
        this.maxHandleElement.ariaValueNow = (+this.highValue).toString();
        this.maxHandleElement.ariaValueText = this.viewOptions.translate(+this.highValue, LabelType.High);
        this.maxHandleElement.ariaValueMin = this.viewOptions.floor.toString();
        this.maxHandleElement.ariaValueMax = this.viewOptions.ceil.toString();
      }
    }
    // Calculate dimensions that are dependent on view port size
    // Run once during initialization and every time view port changes size.
    calculateViewDimensions() {
      if (!ValueHelper.isNullOrUndefined(this.viewOptions.handleDimension)) {
        this.minHandleElement.setDimension(this.viewOptions.handleDimension);
      } else {
        this.minHandleElement.calculateDimension();
      }
      const handleWidth = this.minHandleElement.dimension;
      this.handleHalfDimension = handleWidth / 2;
      if (!ValueHelper.isNullOrUndefined(this.viewOptions.barDimension)) {
        this.fullBarElement.setDimension(this.viewOptions.barDimension);
      } else {
        this.fullBarElement.calculateDimension();
      }
      this.maxHandlePosition = this.fullBarElement.dimension - handleWidth;
      if (this.initHasRun) {
        this.updateFloorLabel();
        this.updateCeilLabel();
        this.initHandles();
      }
    }
    calculateViewDimensionsAndDetectChanges() {
      this.calculateViewDimensions();
      if (!this.isRefDestroyed()) {
        this.changeDetectionRef.detectChanges();
      }
    }
    /**
     * If the slider reference is already destroyed
     * @returns boolean - true if ref is destroyed
     */
    isRefDestroyed() {
      return this.changeDetectionRef['destroyed'];
    }
    // Update the ticks position
    updateTicksScale() {
      if (!this.viewOptions.showTicks && this.sliderElementWithLegendClass) {
        setTimeout(() => {
          this.sliderElementWithLegendClass = false;
        });
        return;
      }
      const ticksArray = !ValueHelper.isNullOrUndefined(this.viewOptions.ticksArray) ? this.viewOptions.ticksArray : this.getTicksArray();
      const translate = this.viewOptions.vertical ? 'translateY' : 'translateX';
      if (this.viewOptions.rightToLeft) {
        ticksArray.reverse();
      }
      const tickValueStep = !ValueHelper.isNullOrUndefined(this.viewOptions.tickValueStep) ? this.viewOptions.tickValueStep : !ValueHelper.isNullOrUndefined(this.viewOptions.tickStep) ? this.viewOptions.tickStep : this.viewOptions.step;
      let hasAtLeastOneLegend = false;
      const newTicks = ticksArray.map(value => {
        let position = this.valueToPosition(value);
        if (this.viewOptions.vertical) {
          position = this.maxHandlePosition - position;
        }
        const translation = translate + '(' + Math.round(position) + 'px)';
        const tick = new Tick();
        tick.selected = this.isTickSelected(value);
        tick.style = {
          '-webkit-transform': translation,
          '-moz-transform': translation,
          '-o-transform': translation,
          '-ms-transform': translation,
          transform: translation
        };
        if (tick.selected && !ValueHelper.isNullOrUndefined(this.viewOptions.getSelectionBarColor)) {
          tick.style['background-color'] = this.getSelectionBarColor();
        }
        if (!tick.selected && !ValueHelper.isNullOrUndefined(this.viewOptions.getTickColor)) {
          tick.style['background-color'] = this.getTickColor(value);
        }
        if (!ValueHelper.isNullOrUndefined(this.viewOptions.ticksTooltip)) {
          tick.tooltip = this.viewOptions.ticksTooltip(value);
          tick.tooltipPlacement = this.viewOptions.vertical ? 'right' : 'top';
        }
        if (this.viewOptions.showTicksValues && !ValueHelper.isNullOrUndefined(tickValueStep) && MathHelper.isModuloWithinPrecisionLimit(value, tickValueStep, this.viewOptions.precisionLimit)) {
          tick.value = this.getDisplayValue(value, LabelType.TickValue);
          if (!ValueHelper.isNullOrUndefined(this.viewOptions.ticksValuesTooltip)) {
            tick.valueTooltip = this.viewOptions.ticksValuesTooltip(value);
            tick.valueTooltipPlacement = this.viewOptions.vertical ? 'right' : 'top';
          }
        }
        let legend = null;
        if (!ValueHelper.isNullOrUndefined(this.viewOptions.stepsArray)) {
          const step = this.viewOptions.stepsArray[value];
          if (!ValueHelper.isNullOrUndefined(this.viewOptions.getStepLegend)) {
            legend = this.viewOptions.getStepLegend(step);
          } else if (!ValueHelper.isNullOrUndefined(step)) {
            legend = step.legend;
          }
        } else if (!ValueHelper.isNullOrUndefined(this.viewOptions.getLegend)) {
          legend = this.viewOptions.getLegend(value);
        }
        if (!ValueHelper.isNullOrUndefined(legend)) {
          tick.legend = legend;
          hasAtLeastOneLegend = true;
        }
        return tick;
      });
      if (this.sliderElementWithLegendClass !== hasAtLeastOneLegend) {
        setTimeout(() => {
          this.sliderElementWithLegendClass = hasAtLeastOneLegend;
        });
      }
      // We should avoid re-creating the ticks array if possible
      // This both improves performance and makes CSS animations work correctly
      if (!ValueHelper.isNullOrUndefined(this.ticks) && this.ticks.length === newTicks.length) {
        for (let i = 0; i < newTicks.length; ++i) {
          Object.assign(this.ticks[i], newTicks[i]);
        }
      } else {
        this.ticks = newTicks;
        if (!this.isRefDestroyed()) {
          this.changeDetectionRef.detectChanges();
        }
      }
    }
    getTicksArray() {
      if (!this.viewOptions.showTicks) {
        return [];
      }
      const step = !ValueHelper.isNullOrUndefined(this.viewOptions.tickStep) ? this.viewOptions.tickStep : this.viewOptions.step;
      const ticksArray = [];
      const numberOfValues = 1 + Math.floor(MathHelper.roundToPrecisionLimit(Math.abs(this.viewOptions.ceil - this.viewOptions.floor) / step, this.viewOptions.precisionLimit));
      for (let index = 0; index < numberOfValues; ++index) {
        ticksArray.push(MathHelper.roundToPrecisionLimit(this.viewOptions.floor + step * index, this.viewOptions.precisionLimit));
      }
      return ticksArray;
    }
    isTickSelected(value) {
      if (!this.range) {
        if (!ValueHelper.isNullOrUndefined(this.viewOptions.showSelectionBarFromValue)) {
          const center = this.viewOptions.showSelectionBarFromValue;
          if (this.viewLowValue > center && value >= center && value <= this.viewLowValue) {
            return true;
          } else if (this.viewLowValue < center && value <= center && value >= this.viewLowValue) {
            return true;
          }
        } else if (this.viewOptions.showSelectionBarEnd) {
          if (value >= this.viewLowValue) {
            return true;
          }
        } else if (this.viewOptions.showSelectionBar && value <= this.viewLowValue) {
          return true;
        }
      }
      if (this.range && value >= this.viewLowValue && value <= this.viewHighValue) {
        return true;
      }
      return false;
    }
    // Update position of the floor label
    updateFloorLabel() {
      if (!this.floorLabelElement.alwaysHide) {
        this.floorLabelElement.setValue(this.getDisplayValue(this.viewOptions.floor, LabelType.Floor));
        this.floorLabelElement.calculateDimension();
        const position = this.viewOptions.rightToLeft ? this.fullBarElement.dimension - this.floorLabelElement.dimension : 0;
        this.floorLabelElement.setPosition(position);
      }
    }
    // Update position of the ceiling label
    updateCeilLabel() {
      if (!this.ceilLabelElement.alwaysHide) {
        this.ceilLabelElement.setValue(this.getDisplayValue(this.viewOptions.ceil, LabelType.Ceil));
        this.ceilLabelElement.calculateDimension();
        const position = this.viewOptions.rightToLeft ? 0 : this.fullBarElement.dimension - this.ceilLabelElement.dimension;
        this.ceilLabelElement.setPosition(position);
      }
    }
    // Update slider handles and label positions
    updateHandles(which, newPos) {
      if (which === PointerType.Min) {
        this.updateLowHandle(newPos);
      } else if (which === PointerType.Max) {
        this.updateHighHandle(newPos);
      }
      this.updateSelectionBar();
      this.updateTicksScale();
      if (this.range) {
        this.updateCombinedLabel();
      }
    }
    // Helper function to work out the position for handle labels depending on RTL or not
    getHandleLabelPos(labelType, newPos) {
      const labelDimension = labelType === PointerType.Min ? this.minHandleLabelElement.dimension : this.maxHandleLabelElement.dimension;
      const nearHandlePos = newPos - labelDimension / 2 + this.handleHalfDimension;
      const endOfBarPos = this.fullBarElement.dimension - labelDimension;
      if (!this.viewOptions.boundPointerLabels) {
        return nearHandlePos;
      }
      if (this.viewOptions.rightToLeft && labelType === PointerType.Min || !this.viewOptions.rightToLeft && labelType === PointerType.Max) {
        return Math.min(nearHandlePos, endOfBarPos);
      } else {
        return Math.min(Math.max(nearHandlePos, 0), endOfBarPos);
      }
    }
    // Update low slider handle position and label
    updateLowHandle(newPos) {
      this.minHandleElement.setPosition(newPos);
      this.minHandleLabelElement.setValue(this.getDisplayValue(this.viewLowValue, LabelType.Low));
      this.minHandleLabelElement.setPosition(this.getHandleLabelPos(PointerType.Min, newPos));
      if (!ValueHelper.isNullOrUndefined(this.viewOptions.getPointerColor)) {
        this.minPointerStyle = {
          backgroundColor: this.getPointerColor(PointerType.Min)
        };
      }
      if (this.viewOptions.autoHideLimitLabels) {
        this.updateFloorAndCeilLabelsVisibility();
      }
    }
    // Update high slider handle position and label
    updateHighHandle(newPos) {
      this.maxHandleElement.setPosition(newPos);
      this.maxHandleLabelElement.setValue(this.getDisplayValue(this.viewHighValue, LabelType.High));
      this.maxHandleLabelElement.setPosition(this.getHandleLabelPos(PointerType.Max, newPos));
      if (!ValueHelper.isNullOrUndefined(this.viewOptions.getPointerColor)) {
        this.maxPointerStyle = {
          backgroundColor: this.getPointerColor(PointerType.Max)
        };
      }
      if (this.viewOptions.autoHideLimitLabels) {
        this.updateFloorAndCeilLabelsVisibility();
      }
    }
    // Show/hide floor/ceiling label
    updateFloorAndCeilLabelsVisibility() {
      // Show based only on hideLimitLabels if pointer labels are hidden
      if (this.viewOptions.hidePointerLabels) {
        return;
      }
      let floorLabelHidden = false;
      let ceilLabelHidden = false;
      const isMinLabelAtFloor = this.isLabelBelowFloorLabel(this.minHandleLabelElement);
      const isMinLabelAtCeil = this.isLabelAboveCeilLabel(this.minHandleLabelElement);
      const isMaxLabelAtCeil = this.isLabelAboveCeilLabel(this.maxHandleLabelElement);
      const isCombinedLabelAtFloor = this.isLabelBelowFloorLabel(this.combinedLabelElement);
      const isCombinedLabelAtCeil = this.isLabelAboveCeilLabel(this.combinedLabelElement);
      if (isMinLabelAtFloor) {
        floorLabelHidden = true;
        this.floorLabelElement.hide();
      } else {
        floorLabelHidden = false;
        this.floorLabelElement.show();
      }
      if (isMinLabelAtCeil) {
        ceilLabelHidden = true;
        this.ceilLabelElement.hide();
      } else {
        ceilLabelHidden = false;
        this.ceilLabelElement.show();
      }
      if (this.range) {
        const hideCeil = this.combinedLabelElement.isVisible() ? isCombinedLabelAtCeil : isMaxLabelAtCeil;
        const hideFloor = this.combinedLabelElement.isVisible() ? isCombinedLabelAtFloor : isMinLabelAtFloor;
        if (hideCeil) {
          this.ceilLabelElement.hide();
        } else if (!ceilLabelHidden) {
          this.ceilLabelElement.show();
        }
        // Hide or show floor label
        if (hideFloor) {
          this.floorLabelElement.hide();
        } else if (!floorLabelHidden) {
          this.floorLabelElement.show();
        }
      }
    }
    isLabelBelowFloorLabel(label) {
      const pos = label.position;
      const dim = label.dimension;
      const floorPos = this.floorLabelElement.position;
      const floorDim = this.floorLabelElement.dimension;
      return this.viewOptions.rightToLeft ? pos + dim >= floorPos - 2 : pos <= floorPos + floorDim + 2;
    }
    isLabelAboveCeilLabel(label) {
      const pos = label.position;
      const dim = label.dimension;
      const ceilPos = this.ceilLabelElement.position;
      const ceilDim = this.ceilLabelElement.dimension;
      return this.viewOptions.rightToLeft ? pos <= ceilPos + ceilDim + 2 : pos + dim >= ceilPos - 2;
    }
    // Update slider selection bar, combined label and range label
    updateSelectionBar() {
      let position = 0;
      let dimension = 0;
      const isSelectionBarFromRight = this.viewOptions.rightToLeft ? !this.viewOptions.showSelectionBarEnd : this.viewOptions.showSelectionBarEnd;
      const positionForRange = this.viewOptions.rightToLeft ? this.maxHandleElement.position + this.handleHalfDimension : this.minHandleElement.position + this.handleHalfDimension;
      if (this.range) {
        dimension = Math.abs(this.maxHandleElement.position - this.minHandleElement.position);
        position = positionForRange;
      } else {
        if (!ValueHelper.isNullOrUndefined(this.viewOptions.showSelectionBarFromValue)) {
          const center = this.viewOptions.showSelectionBarFromValue;
          const centerPosition = this.valueToPosition(center);
          const isModelGreaterThanCenter = this.viewOptions.rightToLeft ? this.viewLowValue <= center : this.viewLowValue > center;
          if (isModelGreaterThanCenter) {
            dimension = this.minHandleElement.position - centerPosition;
            position = centerPosition + this.handleHalfDimension;
          } else {
            dimension = centerPosition - this.minHandleElement.position;
            position = this.minHandleElement.position + this.handleHalfDimension;
          }
        } else if (isSelectionBarFromRight) {
          dimension = Math.ceil(Math.abs(this.maxHandlePosition - this.minHandleElement.position) + this.handleHalfDimension);
          position = Math.floor(this.minHandleElement.position + this.handleHalfDimension);
        } else {
          dimension = this.minHandleElement.position + this.handleHalfDimension;
          position = 0;
        }
      }
      this.selectionBarElement.setDimension(dimension);
      this.selectionBarElement.setPosition(position);
      if (this.range && this.viewOptions.showOuterSelectionBars) {
        if (this.viewOptions.rightToLeft) {
          this.rightOuterSelectionBarElement.setDimension(position);
          this.rightOuterSelectionBarElement.setPosition(0);
          this.fullBarElement.calculateDimension();
          this.leftOuterSelectionBarElement.setDimension(this.fullBarElement.dimension - (position + dimension));
          this.leftOuterSelectionBarElement.setPosition(position + dimension);
        } else {
          this.leftOuterSelectionBarElement.setDimension(position);
          this.leftOuterSelectionBarElement.setPosition(0);
          this.fullBarElement.calculateDimension();
          this.rightOuterSelectionBarElement.setDimension(this.fullBarElement.dimension - (position + dimension));
          this.rightOuterSelectionBarElement.setPosition(position + dimension);
        }
      }
      if (!ValueHelper.isNullOrUndefined(this.viewOptions.getSelectionBarColor)) {
        const color = this.getSelectionBarColor();
        this.barStyle = {
          backgroundColor: color
        };
      } else if (!ValueHelper.isNullOrUndefined(this.viewOptions.selectionBarGradient)) {
        const offset = !ValueHelper.isNullOrUndefined(this.viewOptions.showSelectionBarFromValue) ? this.valueToPosition(this.viewOptions.showSelectionBarFromValue) : 0;
        const reversed = offset - position > 0 && !isSelectionBarFromRight || offset - position <= 0 && isSelectionBarFromRight;
        const direction = this.viewOptions.vertical ? reversed ? 'bottom' : 'top' : reversed ? 'left' : 'right';
        this.barStyle = {
          backgroundImage: 'linear-gradient(to ' + direction + ', ' + this.viewOptions.selectionBarGradient.from + ' 0%,' + this.viewOptions.selectionBarGradient.to + ' 100%)'
        };
        if (this.viewOptions.vertical) {
          this.barStyle.backgroundPosition = 'center ' + (offset + dimension + position + (reversed ? -this.handleHalfDimension : 0)) + 'px';
          this.barStyle.backgroundSize = '100% ' + (this.fullBarElement.dimension - this.handleHalfDimension) + 'px';
        } else {
          this.barStyle.backgroundPosition = offset - position + (reversed ? this.handleHalfDimension : 0) + 'px center';
          this.barStyle.backgroundSize = this.fullBarElement.dimension - this.handleHalfDimension + 'px 100%';
        }
      }
    }
    // Wrapper around the getSelectionBarColor of the user to pass to correct parameters
    getSelectionBarColor() {
      if (this.range) {
        return this.viewOptions.getSelectionBarColor(this.value, this.highValue);
      }
      return this.viewOptions.getSelectionBarColor(this.value);
    }
    // Wrapper around the getPointerColor of the user to pass to  correct parameters
    getPointerColor(pointerType) {
      if (pointerType === PointerType.Max) {
        return this.viewOptions.getPointerColor(this.highValue, pointerType);
      }
      return this.viewOptions.getPointerColor(this.value, pointerType);
    }
    // Wrapper around the getTickColor of the user to pass to correct parameters
    getTickColor(value) {
      return this.viewOptions.getTickColor(value);
    }
    // Update combined label position and value
    updateCombinedLabel() {
      let isLabelOverlap = null;
      if (this.viewOptions.rightToLeft) {
        isLabelOverlap = this.minHandleLabelElement.position - this.minHandleLabelElement.dimension - 10 <= this.maxHandleLabelElement.position;
      } else {
        isLabelOverlap = this.minHandleLabelElement.position + this.minHandleLabelElement.dimension + 10 >= this.maxHandleLabelElement.position;
      }
      if (isLabelOverlap) {
        const lowDisplayValue = this.getDisplayValue(this.viewLowValue, LabelType.Low);
        const highDisplayValue = this.getDisplayValue(this.viewHighValue, LabelType.High);
        const combinedLabelValue = this.viewOptions.rightToLeft ? this.viewOptions.combineLabels(highDisplayValue, lowDisplayValue) : this.viewOptions.combineLabels(lowDisplayValue, highDisplayValue);
        this.combinedLabelElement.setValue(combinedLabelValue);
        const pos = this.viewOptions.boundPointerLabels ? Math.min(Math.max(this.selectionBarElement.position + this.selectionBarElement.dimension / 2 - this.combinedLabelElement.dimension / 2, 0), this.fullBarElement.dimension - this.combinedLabelElement.dimension) : this.selectionBarElement.position + this.selectionBarElement.dimension / 2 - this.combinedLabelElement.dimension / 2;
        this.combinedLabelElement.setPosition(pos);
        this.minHandleLabelElement.hide();
        this.maxHandleLabelElement.hide();
        this.combinedLabelElement.show();
      } else {
        this.updateHighHandle(this.valueToPosition(this.viewHighValue));
        this.updateLowHandle(this.valueToPosition(this.viewLowValue));
        this.maxHandleLabelElement.show();
        this.minHandleLabelElement.show();
        this.combinedLabelElement.hide();
      }
      if (this.viewOptions.autoHideLimitLabels) {
        this.updateFloorAndCeilLabelsVisibility();
      }
    }
    // Return the translated value if a translate function is provided else the original value
    getDisplayValue(value, which) {
      if (!ValueHelper.isNullOrUndefined(this.viewOptions.stepsArray) && !this.viewOptions.bindIndexForStepsArray) {
        value = this.getStepValue(value);
      }
      return this.viewOptions.translate(value, which);
    }
    // Round value to step and precision based on minValue
    roundStep(value, customStep) {
      const step = !ValueHelper.isNullOrUndefined(customStep) ? customStep : this.viewOptions.step;
      let steppedDifference = MathHelper.roundToPrecisionLimit((value - this.viewOptions.floor) / step, this.viewOptions.precisionLimit);
      steppedDifference = Math.round(steppedDifference) * step;
      return MathHelper.roundToPrecisionLimit(this.viewOptions.floor + steppedDifference, this.viewOptions.precisionLimit);
    }
    // Translate value to pixel position
    valueToPosition(val) {
      let fn = ValueHelper.linearValueToPosition;
      if (!ValueHelper.isNullOrUndefined(this.viewOptions.customValueToPosition)) {
        fn = this.viewOptions.customValueToPosition;
      } else if (this.viewOptions.logScale) {
        fn = ValueHelper.logValueToPosition;
      }
      val = MathHelper.clampToRange(val, this.viewOptions.floor, this.viewOptions.ceil);
      let percent = fn(val, this.viewOptions.floor, this.viewOptions.ceil);
      if (ValueHelper.isNullOrUndefined(percent)) {
        percent = 0;
      }
      if (this.viewOptions.rightToLeft) {
        percent = 1 - percent;
      }
      return percent * this.maxHandlePosition;
    }
    // Translate position to model value
    positionToValue(position) {
      let percent = position / this.maxHandlePosition;
      if (this.viewOptions.rightToLeft) {
        percent = 1 - percent;
      }
      let fn = ValueHelper.linearPositionToValue;
      if (!ValueHelper.isNullOrUndefined(this.viewOptions.customPositionToValue)) {
        fn = this.viewOptions.customPositionToValue;
      } else if (this.viewOptions.logScale) {
        fn = ValueHelper.logPositionToValue;
      }
      const value = fn(percent, this.viewOptions.floor, this.viewOptions.ceil);
      return !ValueHelper.isNullOrUndefined(value) ? value : 0;
    }
    // Get the X-coordinate or Y-coordinate of an event
    getEventXY(event, targetTouchId) {
      if (event instanceof MouseEvent) {
        return this.viewOptions.vertical || this.viewOptions.rotate !== 0 ? event.clientY : event.clientX;
      }
      let touchIndex = 0;
      const touches = event.touches;
      if (!ValueHelper.isNullOrUndefined(targetTouchId)) {
        for (let i = 0; i < touches.length; i++) {
          if (touches[i].identifier === targetTouchId) {
            touchIndex = i;
            break;
          }
        }
      }
      // Return the target touch or if the target touch was not found in the event
      // returns the coordinates of the first touch
      return this.viewOptions.vertical || this.viewOptions.rotate !== 0 ? touches[touchIndex].clientY : touches[touchIndex].clientX;
    }
    // Compute the event position depending on whether the slider is horizontal or vertical
    getEventPosition(event, targetTouchId) {
      const sliderElementBoundingRect = this.elementRef.nativeElement.getBoundingClientRect();
      const sliderPos = this.viewOptions.vertical || this.viewOptions.rotate !== 0 ? sliderElementBoundingRect.bottom : sliderElementBoundingRect.left;
      let eventPos = 0;
      if (this.viewOptions.vertical || this.viewOptions.rotate !== 0) {
        eventPos = -this.getEventXY(event, targetTouchId) + sliderPos;
      } else {
        eventPos = this.getEventXY(event, targetTouchId) - sliderPos;
      }
      return eventPos * this.viewOptions.scale - this.handleHalfDimension;
    }
    // Get the handle closest to an event
    getNearestHandle(event) {
      if (!this.range) {
        return PointerType.Min;
      }
      const position = this.getEventPosition(event);
      const distanceMin = Math.abs(position - this.minHandleElement.position);
      const distanceMax = Math.abs(position - this.maxHandleElement.position);
      if (distanceMin < distanceMax) {
        return PointerType.Min;
      } else if (distanceMin > distanceMax) {
        return PointerType.Max;
      } else if (!this.viewOptions.rightToLeft) {
        // if event is at the same distance from min/max then if it's at left of minH, we return minH else maxH
        return position < this.minHandleElement.position ? PointerType.Min : PointerType.Max;
      }
      // reverse in rtl
      return position > this.minHandleElement.position ? PointerType.Min : PointerType.Max;
    }
    // Bind mouse and touch events to slider handles
    bindEvents() {
      const draggableRange = this.viewOptions.draggableRange;
      if (!this.viewOptions.onlyBindHandles) {
        this.selectionBarElement.on('mousedown', event => this.onBarStart(null, draggableRange, event, true, true, true));
      }
      if (this.viewOptions.draggableRangeOnly) {
        this.minHandleElement.on('mousedown', event => this.onBarStart(PointerType.Min, draggableRange, event, true, true));
        this.maxHandleElement.on('mousedown', event => this.onBarStart(PointerType.Max, draggableRange, event, true, true));
      } else {
        this.minHandleElement.on('mousedown', event => this.onStart(PointerType.Min, event, true, true));
        if (this.range) {
          this.maxHandleElement.on('mousedown', event => this.onStart(PointerType.Max, event, true, true));
        }
        if (!this.viewOptions.onlyBindHandles) {
          this.fullBarElement.on('mousedown', event => this.onStart(null, event, true, true, true));
          this.ticksElement.on('mousedown', event => this.onStart(null, event, true, true, true, true));
        }
      }
      if (!this.viewOptions.onlyBindHandles) {
        this.selectionBarElement.onPassive('touchstart', event => this.onBarStart(null, draggableRange, event, true, true, true));
      }
      if (this.viewOptions.draggableRangeOnly) {
        this.minHandleElement.onPassive('touchstart', event => this.onBarStart(PointerType.Min, draggableRange, event, true, true));
        this.maxHandleElement.onPassive('touchstart', event => this.onBarStart(PointerType.Max, draggableRange, event, true, true));
      } else {
        this.minHandleElement.onPassive('touchstart', event => this.onStart(PointerType.Min, event, true, true));
        if (this.range) {
          this.maxHandleElement.onPassive('touchstart', event => this.onStart(PointerType.Max, event, true, true));
        }
        if (!this.viewOptions.onlyBindHandles) {
          this.fullBarElement.onPassive('touchstart', event => this.onStart(null, event, true, true, true));
          this.ticksElement.onPassive('touchstart', event => this.onStart(null, event, false, false, true, true));
        }
      }
      if (this.viewOptions.keyboardSupport) {
        this.minHandleElement.on('focus', () => this.onPointerFocus(PointerType.Min));
        if (this.range) {
          this.maxHandleElement.on('focus', () => this.onPointerFocus(PointerType.Max));
        }
      }
    }
    getOptionsInfluencingEventBindings(options) {
      return [options.disabled, options.readOnly, options.draggableRange, options.draggableRangeOnly, options.onlyBindHandles, options.keyboardSupport];
    }
    // Unbind mouse and touch events to slider handles
    unbindEvents() {
      this.unsubscribeOnMove();
      this.unsubscribeOnEnd();
      for (const element of this.getAllSliderElements()) {
        if (!ValueHelper.isNullOrUndefined(element)) {
          element.off();
        }
      }
    }
    onBarStart(pointerType, draggableRange, event, bindMove, bindEnd, simulateImmediateMove, simulateImmediateEnd) {
      if (draggableRange) {
        this.onDragStart(pointerType, event, bindMove, bindEnd);
      } else {
        this.onStart(pointerType, event, bindMove, bindEnd, simulateImmediateMove, simulateImmediateEnd);
      }
    }
    // onStart event handler
    onStart(pointerType, event, bindMove, bindEnd, simulateImmediateMove, simulateImmediateEnd) {
      event.stopPropagation();
      // Only call preventDefault() when handling non-passive events (passive events don't need it)
      if (!CompatibilityHelper.isTouchEvent(event) && !detect_passive_events__WEBPACK_IMPORTED_MODULE_1__/* .supportsPassiveEvents */ .HE) {
        event.preventDefault();
      }
      this.moving = false;
      // We have to do this in case the HTML where the sliders are on
      // have been animated into view.
      this.calculateViewDimensions();
      if (ValueHelper.isNullOrUndefined(pointerType)) {
        pointerType = this.getNearestHandle(event);
      }
      this.currentTrackingPointer = pointerType;
      const pointerElement = this.getPointerElement(pointerType);
      pointerElement.active = true;
      // Store currentTrackingValue as soon as it is available to allow
      // the slide to be canceled. (E.g. on scroll detected.)
      this.preStartHandleValue = this.getCurrentTrackingValue();
      if (this.viewOptions.keyboardSupport) {
        pointerElement.focus();
      }
      if (bindMove) {
        this.unsubscribeOnMove();
        const onMoveCallback = e => this.dragging.active ? this.onDragMove(e) : this.onMove(e);
        if (CompatibilityHelper.isTouchEvent(event)) {
          this.onMoveEventListener = this.eventListenerHelper.attachPassiveEventListener(document, 'touchmove', onMoveCallback);
        } else {
          this.onMoveEventListener = this.eventListenerHelper.attachEventListener(document, 'mousemove', onMoveCallback);
        }
      }
      if (bindEnd) {
        this.unsubscribeOnEnd();
        const onEndCallback = e => this.onEnd(e);
        if (CompatibilityHelper.isTouchEvent(event)) {
          this.onEndEventListener = this.eventListenerHelper.attachPassiveEventListener(document, 'touchend', onEndCallback);
        } else {
          this.onEndEventListener = this.eventListenerHelper.attachEventListener(document, 'mouseup', onEndCallback);
        }
      }
      this.userChangeStart.emit(this.getChangeContext());
      if (CompatibilityHelper.isTouchEvent(event) && !ValueHelper.isNullOrUndefined(event.changedTouches)) {
        // Store the touch identifier
        if (ValueHelper.isNullOrUndefined(this.touchId)) {
          this.touchId = event.changedTouches[0].identifier;
        }
      }
      // Click events, either with mouse or touch gesture are weird. Sometimes they result in full
      // start, move, end sequence, and sometimes, they don't - they only invoke mousedown
      // As a workaround, we simulate the first move event and the end event if it's necessary
      if (simulateImmediateMove) {
        this.onMove(event, true);
      }
      if (simulateImmediateEnd) {
        this.onEnd(event);
      }
    }
    // onMove event handler
    onMove(event, fromTick) {
      let touchForThisSlider = null;
      if (CompatibilityHelper.isTouchEvent(event)) {
        const changedTouches = event.changedTouches;
        for (let i = 0; i < changedTouches.length; i++) {
          if (changedTouches[i].identifier === this.touchId) {
            touchForThisSlider = changedTouches[i];
            break;
          }
        }
        if (ValueHelper.isNullOrUndefined(touchForThisSlider)) {
          return;
        }
      }
      if (this.viewOptions.animate && !this.viewOptions.animateOnMove) {
        if (this.moving) {
          this.sliderElementAnimateClass = false;
        }
      }
      this.moving = true;
      const newPos = !ValueHelper.isNullOrUndefined(touchForThisSlider) ? this.getEventPosition(event, touchForThisSlider.identifier) : this.getEventPosition(event);
      let newValue;
      const ceilValue = this.viewOptions.rightToLeft ? this.viewOptions.floor : this.viewOptions.ceil;
      const floorValue = this.viewOptions.rightToLeft ? this.viewOptions.ceil : this.viewOptions.floor;
      if (newPos <= 0) {
        newValue = floorValue;
      } else if (newPos >= this.maxHandlePosition) {
        newValue = ceilValue;
      } else {
        newValue = this.positionToValue(newPos);
        if (fromTick && !ValueHelper.isNullOrUndefined(this.viewOptions.tickStep)) {
          newValue = this.roundStep(newValue, this.viewOptions.tickStep);
        } else {
          newValue = this.roundStep(newValue);
        }
      }
      this.positionTrackingHandle(newValue);
    }
    forceEnd(disableAnimation = false) {
      this.moving = false;
      if (this.viewOptions.animate) {
        this.sliderElementAnimateClass = true;
      }
      if (disableAnimation) {
        this.sliderElementAnimateClass = false;
        // make sure the slider animate class is set according to the viewOptions after forceEnd() with disabled animations finishes
        setTimeout(() => {
          this.sliderElementAnimateClass = this.viewOptions.animate;
        });
      }
      this.touchId = null;
      if (!this.viewOptions.keyboardSupport) {
        this.minHandleElement.active = false;
        this.maxHandleElement.active = false;
        this.currentTrackingPointer = null;
      }
      this.dragging.active = false;
      this.unsubscribeOnMove();
      this.unsubscribeOnEnd();
      this.userChangeEnd.emit(this.getChangeContext());
    }
    onEnd(event) {
      if (CompatibilityHelper.isTouchEvent(event)) {
        const changedTouches = event.changedTouches;
        if (changedTouches[0].identifier !== this.touchId) {
          return;
        }
      }
      this.forceEnd();
    }
    onPointerFocus(pointerType) {
      const pointerElement = this.getPointerElement(pointerType);
      pointerElement.on('blur', () => this.onPointerBlur(pointerElement));
      pointerElement.on('keydown', event => this.onKeyboardEvent(event));
      pointerElement.on('keyup', () => this.onKeyUp());
      pointerElement.active = true;
      this.currentTrackingPointer = pointerType;
      this.currentFocusPointer = pointerType;
      this.firstKeyDown = true;
    }
    onKeyUp() {
      this.firstKeyDown = true;
      this.userChangeEnd.emit(this.getChangeContext());
    }
    onPointerBlur(pointer) {
      pointer.off('blur');
      pointer.off('keydown');
      pointer.off('keyup');
      pointer.active = false;
      if (ValueHelper.isNullOrUndefined(this.touchId)) {
        this.currentTrackingPointer = null;
        this.currentFocusPointer = null;
      }
    }
    getKeyActions(currentValue) {
      const valueRange = this.viewOptions.ceil - this.viewOptions.floor;
      let increaseStep = currentValue + this.viewOptions.step;
      let decreaseStep = currentValue - this.viewOptions.step;
      let increasePage = currentValue + valueRange / 10;
      let decreasePage = currentValue - valueRange / 10;
      if (this.viewOptions.reversedControls) {
        increaseStep = currentValue - this.viewOptions.step;
        decreaseStep = currentValue + this.viewOptions.step;
        increasePage = currentValue - valueRange / 10;
        decreasePage = currentValue + valueRange / 10;
      }
      // Left to right default actions
      const actions = {
        UP: increaseStep,
        DOWN: decreaseStep,
        LEFT: decreaseStep,
        RIGHT: increaseStep,
        PAGEUP: increasePage,
        PAGEDOWN: decreasePage,
        HOME: this.viewOptions.reversedControls ? this.viewOptions.ceil : this.viewOptions.floor,
        END: this.viewOptions.reversedControls ? this.viewOptions.floor : this.viewOptions.ceil
      };
      // right to left means swapping right and left arrows
      if (this.viewOptions.rightToLeft) {
        actions.LEFT = increaseStep;
        actions.RIGHT = decreaseStep;
        // right to left and vertical means we also swap up and down
        if (this.viewOptions.vertical || this.viewOptions.rotate !== 0) {
          actions.UP = decreaseStep;
          actions.DOWN = increaseStep;
        }
      }
      return actions;
    }
    onKeyboardEvent(event) {
      const currentValue = this.getCurrentTrackingValue();
      const keyCode = !ValueHelper.isNullOrUndefined(event.keyCode) ? event.keyCode : event.which;
      const keys = {
        38: 'UP',
        40: 'DOWN',
        37: 'LEFT',
        39: 'RIGHT',
        33: 'PAGEUP',
        34: 'PAGEDOWN',
        36: 'HOME',
        35: 'END'
      };
      const actions = this.getKeyActions(currentValue);
      const key = keys[keyCode];
      const action = actions[key];
      if (ValueHelper.isNullOrUndefined(action) || ValueHelper.isNullOrUndefined(this.currentTrackingPointer)) {
        return;
      }
      event.preventDefault();
      if (this.firstKeyDown) {
        this.firstKeyDown = false;
        this.userChangeStart.emit(this.getChangeContext());
      }
      const actionValue = MathHelper.clampToRange(action, this.viewOptions.floor, this.viewOptions.ceil);
      const newValue = this.roundStep(actionValue);
      if (!this.viewOptions.draggableRangeOnly) {
        this.positionTrackingHandle(newValue);
      } else {
        const difference = this.viewHighValue - this.viewLowValue;
        let newMinValue;
        let newMaxValue;
        if (this.currentTrackingPointer === PointerType.Min) {
          newMinValue = newValue;
          newMaxValue = newValue + difference;
          if (newMaxValue > this.viewOptions.ceil) {
            newMaxValue = this.viewOptions.ceil;
            newMinValue = newMaxValue - difference;
          }
        } else if (this.currentTrackingPointer === PointerType.Max) {
          newMaxValue = newValue;
          newMinValue = newValue - difference;
          if (newMinValue < this.viewOptions.floor) {
            newMinValue = this.viewOptions.floor;
            newMaxValue = newMinValue + difference;
          }
        }
        this.positionTrackingBar(newMinValue, newMaxValue);
      }
    }
    // onDragStart event handler, handles dragging of the middle bar
    onDragStart(pointerType, event, bindMove, bindEnd) {
      const position = this.getEventPosition(event);
      this.dragging = new Dragging();
      this.dragging.active = true;
      this.dragging.value = this.positionToValue(position);
      this.dragging.difference = this.viewHighValue - this.viewLowValue;
      this.dragging.lowLimit = this.viewOptions.rightToLeft ? this.minHandleElement.position - position : position - this.minHandleElement.position;
      this.dragging.highLimit = this.viewOptions.rightToLeft ? position - this.maxHandleElement.position : this.maxHandleElement.position - position;
      this.onStart(pointerType, event, bindMove, bindEnd);
    }
    /** Get min value depending on whether the newPos is outOfBounds above or below the bar and rightToLeft */
    getMinValue(newPos, outOfBounds, isAbove) {
      const isRTL = this.viewOptions.rightToLeft;
      let value = null;
      if (outOfBounds) {
        if (isAbove) {
          value = isRTL ? this.viewOptions.floor : this.viewOptions.ceil - this.dragging.difference;
        } else {
          value = isRTL ? this.viewOptions.ceil - this.dragging.difference : this.viewOptions.floor;
        }
      } else {
        value = isRTL ? this.positionToValue(newPos + this.dragging.lowLimit) : this.positionToValue(newPos - this.dragging.lowLimit);
      }
      return this.roundStep(value);
    }
    /** Get max value depending on whether the newPos is outOfBounds above or below the bar and rightToLeft */
    getMaxValue(newPos, outOfBounds, isAbove) {
      const isRTL = this.viewOptions.rightToLeft;
      let value = null;
      if (outOfBounds) {
        if (isAbove) {
          value = isRTL ? this.viewOptions.floor + this.dragging.difference : this.viewOptions.ceil;
        } else {
          value = isRTL ? this.viewOptions.ceil : this.viewOptions.floor + this.dragging.difference;
        }
      } else {
        if (isRTL) {
          value = this.positionToValue(newPos + this.dragging.lowLimit) + this.dragging.difference;
        } else {
          value = this.positionToValue(newPos - this.dragging.lowLimit) + this.dragging.difference;
        }
      }
      return this.roundStep(value);
    }
    onDragMove(event) {
      const newPos = this.getEventPosition(event);
      if (this.viewOptions.animate && !this.viewOptions.animateOnMove) {
        if (this.moving) {
          this.sliderElementAnimateClass = false;
        }
      }
      this.moving = true;
      let ceilLimit, floorLimit, floorHandleElement, ceilHandleElement;
      if (this.viewOptions.rightToLeft) {
        ceilLimit = this.dragging.lowLimit;
        floorLimit = this.dragging.highLimit;
        floorHandleElement = this.maxHandleElement;
        ceilHandleElement = this.minHandleElement;
      } else {
        ceilLimit = this.dragging.highLimit;
        floorLimit = this.dragging.lowLimit;
        floorHandleElement = this.minHandleElement;
        ceilHandleElement = this.maxHandleElement;
      }
      const isUnderFloorLimit = newPos <= floorLimit;
      const isOverCeilLimit = newPos >= this.maxHandlePosition - ceilLimit;
      let newMinValue;
      let newMaxValue;
      if (isUnderFloorLimit) {
        if (floorHandleElement.position === 0) {
          return;
        }
        newMinValue = this.getMinValue(newPos, true, false);
        newMaxValue = this.getMaxValue(newPos, true, false);
      } else if (isOverCeilLimit) {
        if (ceilHandleElement.position === this.maxHandlePosition) {
          return;
        }
        newMaxValue = this.getMaxValue(newPos, true, true);
        newMinValue = this.getMinValue(newPos, true, true);
      } else {
        newMinValue = this.getMinValue(newPos, false, false);
        newMaxValue = this.getMaxValue(newPos, false, false);
      }
      this.positionTrackingBar(newMinValue, newMaxValue);
    }
    // Set the new value and position for the entire bar
    positionTrackingBar(newMinValue, newMaxValue) {
      if (!ValueHelper.isNullOrUndefined(this.viewOptions.minLimit) && newMinValue < this.viewOptions.minLimit) {
        newMinValue = this.viewOptions.minLimit;
        newMaxValue = MathHelper.roundToPrecisionLimit(newMinValue + this.dragging.difference, this.viewOptions.precisionLimit);
      }
      if (!ValueHelper.isNullOrUndefined(this.viewOptions.maxLimit) && newMaxValue > this.viewOptions.maxLimit) {
        newMaxValue = this.viewOptions.maxLimit;
        newMinValue = MathHelper.roundToPrecisionLimit(newMaxValue - this.dragging.difference, this.viewOptions.precisionLimit);
      }
      this.viewLowValue = newMinValue;
      this.viewHighValue = newMaxValue;
      this.applyViewChange();
      this.updateHandles(PointerType.Min, this.valueToPosition(newMinValue));
      this.updateHandles(PointerType.Max, this.valueToPosition(newMaxValue));
    }
    // Set the new value and position to the current tracking handle
    positionTrackingHandle(newValue) {
      newValue = this.applyMinMaxLimit(newValue);
      if (this.range) {
        if (this.viewOptions.pushRange) {
          newValue = this.applyPushRange(newValue);
        } else {
          if (this.viewOptions.noSwitching) {
            if (this.currentTrackingPointer === PointerType.Min && newValue > this.viewHighValue) {
              newValue = this.applyMinMaxRange(this.viewHighValue);
            } else if (this.currentTrackingPointer === PointerType.Max && newValue < this.viewLowValue) {
              newValue = this.applyMinMaxRange(this.viewLowValue);
            }
          }
          newValue = this.applyMinMaxRange(newValue);
          /* This is to check if we need to switch the min and max handles */
          if (this.currentTrackingPointer === PointerType.Min && newValue > this.viewHighValue) {
            this.viewLowValue = this.viewHighValue;
            this.applyViewChange();
            this.updateHandles(PointerType.Min, this.maxHandleElement.position);
            this.updateAriaAttributes();
            this.currentTrackingPointer = PointerType.Max;
            this.minHandleElement.active = false;
            this.maxHandleElement.active = true;
            if (this.viewOptions.keyboardSupport) {
              this.maxHandleElement.focus();
            }
          } else if (this.currentTrackingPointer === PointerType.Max && newValue < this.viewLowValue) {
            this.viewHighValue = this.viewLowValue;
            this.applyViewChange();
            this.updateHandles(PointerType.Max, this.minHandleElement.position);
            this.updateAriaAttributes();
            this.currentTrackingPointer = PointerType.Min;
            this.maxHandleElement.active = false;
            this.minHandleElement.active = true;
            if (this.viewOptions.keyboardSupport) {
              this.minHandleElement.focus();
            }
          }
        }
      }
      if (this.getCurrentTrackingValue() !== newValue) {
        if (this.currentTrackingPointer === PointerType.Min) {
          this.viewLowValue = newValue;
          this.applyViewChange();
        } else if (this.currentTrackingPointer === PointerType.Max) {
          this.viewHighValue = newValue;
          this.applyViewChange();
        }
        this.updateHandles(this.currentTrackingPointer, this.valueToPosition(newValue));
        this.updateAriaAttributes();
      }
    }
    applyMinMaxLimit(newValue) {
      if (!ValueHelper.isNullOrUndefined(this.viewOptions.minLimit) && newValue < this.viewOptions.minLimit) {
        return this.viewOptions.minLimit;
      }
      if (!ValueHelper.isNullOrUndefined(this.viewOptions.maxLimit) && newValue > this.viewOptions.maxLimit) {
        return this.viewOptions.maxLimit;
      }
      return newValue;
    }
    applyMinMaxRange(newValue) {
      const oppositeValue = this.currentTrackingPointer === PointerType.Min ? this.viewHighValue : this.viewLowValue;
      const difference = Math.abs(newValue - oppositeValue);
      if (!ValueHelper.isNullOrUndefined(this.viewOptions.minRange)) {
        if (difference < this.viewOptions.minRange) {
          if (this.currentTrackingPointer === PointerType.Min) {
            return MathHelper.roundToPrecisionLimit(this.viewHighValue - this.viewOptions.minRange, this.viewOptions.precisionLimit);
          } else if (this.currentTrackingPointer === PointerType.Max) {
            return MathHelper.roundToPrecisionLimit(this.viewLowValue + this.viewOptions.minRange, this.viewOptions.precisionLimit);
          }
        }
      }
      if (!ValueHelper.isNullOrUndefined(this.viewOptions.maxRange)) {
        if (difference > this.viewOptions.maxRange) {
          if (this.currentTrackingPointer === PointerType.Min) {
            return MathHelper.roundToPrecisionLimit(this.viewHighValue - this.viewOptions.maxRange, this.viewOptions.precisionLimit);
          } else if (this.currentTrackingPointer === PointerType.Max) {
            return MathHelper.roundToPrecisionLimit(this.viewLowValue + this.viewOptions.maxRange, this.viewOptions.precisionLimit);
          }
        }
      }
      return newValue;
    }
    applyPushRange(newValue) {
      const difference = this.currentTrackingPointer === PointerType.Min ? this.viewHighValue - newValue : newValue - this.viewLowValue;
      const minRange = !ValueHelper.isNullOrUndefined(this.viewOptions.minRange) ? this.viewOptions.minRange : this.viewOptions.step;
      const maxRange = this.viewOptions.maxRange;
      // if smaller than minRange
      if (difference < minRange) {
        if (this.currentTrackingPointer === PointerType.Min) {
          this.viewHighValue = MathHelper.roundToPrecisionLimit(Math.min(newValue + minRange, this.viewOptions.ceil), this.viewOptions.precisionLimit);
          newValue = MathHelper.roundToPrecisionLimit(this.viewHighValue - minRange, this.viewOptions.precisionLimit);
          this.applyViewChange();
          this.updateHandles(PointerType.Max, this.valueToPosition(this.viewHighValue));
        } else if (this.currentTrackingPointer === PointerType.Max) {
          this.viewLowValue = MathHelper.roundToPrecisionLimit(Math.max(newValue - minRange, this.viewOptions.floor), this.viewOptions.precisionLimit);
          newValue = MathHelper.roundToPrecisionLimit(this.viewLowValue + minRange, this.viewOptions.precisionLimit);
          this.applyViewChange();
          this.updateHandles(PointerType.Min, this.valueToPosition(this.viewLowValue));
        }
        this.updateAriaAttributes();
      } else if (!ValueHelper.isNullOrUndefined(maxRange) && difference > maxRange) {
        // if greater than maxRange
        if (this.currentTrackingPointer === PointerType.Min) {
          this.viewHighValue = MathHelper.roundToPrecisionLimit(newValue + maxRange, this.viewOptions.precisionLimit);
          this.applyViewChange();
          this.updateHandles(PointerType.Max, this.valueToPosition(this.viewHighValue));
        } else if (this.currentTrackingPointer === PointerType.Max) {
          this.viewLowValue = MathHelper.roundToPrecisionLimit(newValue - maxRange, this.viewOptions.precisionLimit);
          this.applyViewChange();
          this.updateHandles(PointerType.Min, this.valueToPosition(this.viewLowValue));
        }
        this.updateAriaAttributes();
      }
      return newValue;
    }
    getChangeContext() {
      const changeContext = new ChangeContext();
      changeContext.pointerType = this.currentTrackingPointer;
      changeContext.value = +this.value;
      if (this.range) {
        changeContext.highValue = +this.highValue;
      }
      return changeContext;
    }
    static ɵfac = function SliderComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || SliderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* .Renderer2 */ .sFG), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* .ElementRef */ .aKT), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* .ChangeDetectorRef */ .gRc), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* .NgZone */ .SKi), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdirectiveInject"] */ .rXU(AllowUnsafeHtmlInSlider, 8));
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .VBU({
      type: SliderComponent,
      selectors: [["ngx-slider"]],
      contentQueries: function SliderComponent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵcontentQuery"] */ .wni(dirIndex, _c1, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵqueryRefresh"] */ .mGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵloadQuery"] */ .lsd()) && (ctx.tooltipTemplate = _t.first);
        }
      },
      viewQuery: function SliderComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵviewQuery"] */ .GBs(_c2, 5, SliderElementDirective);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵviewQuery"] */ .GBs(_c3, 5, SliderElementDirective);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵviewQuery"] */ .GBs(_c4, 5, SliderElementDirective);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵviewQuery"] */ .GBs(_c5, 5, SliderElementDirective);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵviewQuery"] */ .GBs(_c6, 5, SliderHandleDirective);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵviewQuery"] */ .GBs(_c7, 5, SliderHandleDirective);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵviewQuery"] */ .GBs(_c8, 5, SliderLabelDirective);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵviewQuery"] */ .GBs(_c9, 5, SliderLabelDirective);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵviewQuery"] */ .GBs(_c10, 5, SliderLabelDirective);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵviewQuery"] */ .GBs(_c11, 5, SliderLabelDirective);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵviewQuery"] */ .GBs(_c12, 5, SliderLabelDirective);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵviewQuery"] */ .GBs(_c13, 5, SliderElementDirective);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵqueryRefresh"] */ .mGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵloadQuery"] */ .lsd()) && (ctx.leftOuterSelectionBarElement = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵqueryRefresh"] */ .mGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵloadQuery"] */ .lsd()) && (ctx.rightOuterSelectionBarElement = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵqueryRefresh"] */ .mGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵloadQuery"] */ .lsd()) && (ctx.fullBarElement = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵqueryRefresh"] */ .mGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵloadQuery"] */ .lsd()) && (ctx.selectionBarElement = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵqueryRefresh"] */ .mGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵloadQuery"] */ .lsd()) && (ctx.minHandleElement = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵqueryRefresh"] */ .mGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵloadQuery"] */ .lsd()) && (ctx.maxHandleElement = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵqueryRefresh"] */ .mGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵloadQuery"] */ .lsd()) && (ctx.floorLabelElement = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵqueryRefresh"] */ .mGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵloadQuery"] */ .lsd()) && (ctx.ceilLabelElement = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵqueryRefresh"] */ .mGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵloadQuery"] */ .lsd()) && (ctx.minHandleLabelElement = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵqueryRefresh"] */ .mGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵloadQuery"] */ .lsd()) && (ctx.maxHandleLabelElement = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵqueryRefresh"] */ .mGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵloadQuery"] */ .lsd()) && (ctx.combinedLabelElement = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵqueryRefresh"] */ .mGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵloadQuery"] */ .lsd()) && (ctx.ticksElement = _t.first);
        }
      },
      hostVars: 10,
      hostBindings: function SliderComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵlistener"] */ .bIt("resize", function SliderComponent_resize_HostBindingHandler($event) {
            return ctx.onResize($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵresolveWindow"] */ .tSv);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵattribute"] */ .BMQ("disabled", ctx.sliderElementDisabledAttr)("aria-label", ctx.sliderElementAriaLabel);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵclassProp"] */ .AVh("ngx-slider", ctx.sliderElementNgxSliderClass)("vertical", ctx.sliderElementVerticalClass)("animate", ctx.sliderElementAnimateClass)("with-legend", ctx.sliderElementWithLegendClass);
        }
      },
      inputs: {
        value: "value",
        highValue: "highValue",
        options: "options",
        manualRefresh: "manualRefresh",
        triggerFocus: "triggerFocus",
        cancelUserChange: "cancelUserChange"
      },
      outputs: {
        valueChange: "valueChange",
        highValueChange: "highValueChange",
        userChangeStart: "userChangeStart",
        userChange: "userChange",
        userChangeEnd: "userChangeEnd"
      },
      standalone: false,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵProvidersFeature"] */ .Jv_([NGX_SLIDER_CONTROL_VALUE_ACCESSOR]), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵNgOnChangesFeature"] */ .OA$],
      decls: 29,
      vars: 13,
      consts: [["leftOuterSelectionBar", ""], ["rightOuterSelectionBar", ""], ["fullBar", ""], ["selectionBar", ""], ["minHandle", ""], ["maxHandle", ""], ["floorLabel", ""], ["ceilLabel", ""], ["minHandleLabel", ""], ["maxHandleLabel", ""], ["combinedLabel", ""], ["ticksElement", ""], ["ngxSliderElement", "", 1, "ngx-slider-span", "ngx-slider-bar-wrapper", "ngx-slider-left-out-selection"], [1, "ngx-slider-span", "ngx-slider-bar"], ["ngxSliderElement", "", 1, "ngx-slider-span", "ngx-slider-bar-wrapper", "ngx-slider-right-out-selection"], ["ngxSliderElement", "", 1, "ngx-slider-span", "ngx-slider-bar-wrapper", "ngx-slider-full-bar"], ["ngxSliderElement", "", 1, "ngx-slider-span", "ngx-slider-bar-wrapper", "ngx-slider-selection-bar"], [1, "ngx-slider-span", "ngx-slider-bar", "ngx-slider-selection", 3, "ngStyle"], ["ngxSliderHandle", "", 1, "ngx-slider-span", "ngx-slider-pointer", "ngx-slider-pointer-min", 3, "ngStyle"], ["ngxSliderHandle", "", 1, "ngx-slider-span", "ngx-slider-pointer", "ngx-slider-pointer-max", 3, "ngStyle"], ["ngxSliderLabel", "", 1, "ngx-slider-span", "ngx-slider-bubble", "ngx-slider-limit", "ngx-slider-floor"], ["ngxSliderLabel", "", 1, "ngx-slider-span", "ngx-slider-bubble", "ngx-slider-limit", "ngx-slider-ceil"], ["ngxSliderLabel", "", 1, "ngx-slider-span", "ngx-slider-bubble", "ngx-slider-model-value"], ["ngxSliderLabel", "", 1, "ngx-slider-span", "ngx-slider-bubble", "ngx-slider-model-high"], ["ngxSliderLabel", "", 1, "ngx-slider-span", "ngx-slider-bubble", "ngx-slider-combined"], ["ngxSliderElement", "", 1, "ngx-slider-ticks", 3, "hidden"], ["class", "ngx-slider-tick", 3, "ngClass", "ngStyle", 4, "ngFor", "ngForOf"], [1, "ngx-slider-tick", 3, "ngClass", "ngStyle"], [3, "template", "tooltip", "placement"], ["class", "ngx-slider-span ngx-slider-tick-value", 3, "template", "tooltip", "placement", "content", 4, "ngIf"], ["class", "ngx-slider-span ngx-slider-tick-legend", 3, "innerText", 4, "ngIf"], ["class", "ngx-slider-span ngx-slider-tick-legend", 3, "innerHTML", 4, "ngIf"], [1, "ngx-slider-span", "ngx-slider-tick-value", 3, "template", "tooltip", "placement", "content"], [1, "ngx-slider-span", "ngx-slider-tick-legend", 3, "innerText"], [1, "ngx-slider-span", "ngx-slider-tick-legend", 3, "innerHTML"]],
      template: function SliderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(0, "span", 12, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(2, "span", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(3, "span", 14, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(5, "span", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(6, "span", 15, 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(8, "span", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(9, "span", 16, 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(11, "span", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ .nrm(12, "span", 18, 4)(14, "span", 19, 5)(16, "span", 20, 6)(18, "span", 21, 7)(20, "span", 22, 8)(22, "span", 23, 9)(24, "span", 24, 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .j41(26, "span", 25, 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtemplate"] */ .DNE(28, SliderComponent_span_28_Template, 5, 10, "span", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .k0s();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵclassProp"] */ .AVh("ngx-slider-transparent", ctx.fullBarTransparentClass);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵclassProp"] */ .AVh("ngx-slider-draggable", ctx.selectionBarDraggableClass);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngStyle", ctx.barStyle);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngStyle", ctx.minPointerStyle);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵstyleProp"] */ .xc7("display", ctx.range ? "inherit" : "none");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngStyle", ctx.maxPointerStyle);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵclassProp"] */ .AVh("ngx-slider-ticks-values-under", ctx.ticksUnderValuesClass);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("hidden", !ctx.showTicks);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵadvance"] */ .R7$(2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx.ticks);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__/* .NgClass */ .YU, _angular_common__WEBPACK_IMPORTED_MODULE_5__/* .NgForOf */ .Sq, _angular_common__WEBPACK_IMPORTED_MODULE_5__/* .NgIf */ .bT, _angular_common__WEBPACK_IMPORTED_MODULE_5__/* .NgStyle */ .B3, SliderElementDirective, SliderHandleDirective, SliderLabelDirective, TooltipWrapperComponent],
      styles: [".ngx-slider{display:inline-block;position:relative;height:4px;width:100%;margin:35px 0 15px;vertical-align:middle;-webkit-user-select:none;user-select:none;touch-action:pan-y}  .ngx-slider.with-legend{margin-bottom:40px}  .ngx-slider[disabled]{cursor:not-allowed}  .ngx-slider[disabled] .ngx-slider-pointer{cursor:not-allowed;background-color:#d8e0f3}  .ngx-slider[disabled] .ngx-slider-draggable{cursor:not-allowed}  .ngx-slider[disabled] .ngx-slider-selection{background:#8b91a2}  .ngx-slider[disabled] .ngx-slider-tick{cursor:not-allowed}  .ngx-slider[disabled] .ngx-slider-tick.ngx-slider-selected{background:#8b91a2}  .ngx-slider .ngx-slider-span{white-space:nowrap;position:absolute;display:inline-block}  .ngx-slider .ngx-slider-base{width:100%;height:100%;padding:0}  .ngx-slider .ngx-slider-bar-wrapper{left:0;box-sizing:border-box;margin-top:-16px;padding-top:16px;width:100%;height:32px;z-index:1}  .ngx-slider .ngx-slider-draggable{cursor:move}  .ngx-slider .ngx-slider-bar{left:0;width:100%;height:4px;z-index:1;background:#d8e0f3;-webkit-border-radius:2px;-moz-border-radius:2px;border-radius:2px}  .ngx-slider .ngx-slider-bar-wrapper.ngx-slider-transparent .ngx-slider-bar{background:transparent}  .ngx-slider .ngx-slider-bar-wrapper.ngx-slider-left-out-selection .ngx-slider-bar{background:#df002d}  .ngx-slider .ngx-slider-bar-wrapper.ngx-slider-right-out-selection .ngx-slider-bar{background:#03a688}  .ngx-slider .ngx-slider-selection{z-index:2;background:#0db9f0;-webkit-border-radius:2px;-moz-border-radius:2px;border-radius:2px}  .ngx-slider .ngx-slider-pointer{cursor:pointer;width:32px;height:32px;top:-14px;background-color:#0db9f0;z-index:3;-webkit-border-radius:16px;-moz-border-radius:16px;border-radius:16px}  .ngx-slider .ngx-slider-pointer:after{content:\"\";width:8px;height:8px;position:absolute;top:12px;left:12px;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px;background:#fff}  .ngx-slider .ngx-slider-pointer:hover:after{background-color:#fff}  .ngx-slider .ngx-slider-pointer.ngx-slider-active{z-index:4}  .ngx-slider .ngx-slider-pointer.ngx-slider-active:after{background-color:#451aff}  .ngx-slider .ngx-slider-bubble{cursor:default;bottom:16px;padding:1px 3px;color:#55637d;font-size:16px}  .ngx-slider .ngx-slider-bubble.ngx-slider-limit{color:#55637d}  .ngx-slider .ngx-slider-ticks{box-sizing:border-box;width:100%;height:0;position:absolute;left:0;top:-3px;margin:0;z-index:1;list-style:none}  .ngx-slider .ngx-slider-ticks-values-under .ngx-slider-tick-value{top:auto;bottom:-36px}  .ngx-slider .ngx-slider-tick{text-align:center;cursor:pointer;width:10px;height:10px;background:#d8e0f3;border-radius:50%;position:absolute;top:0;left:0;margin-left:11px}  .ngx-slider .ngx-slider-tick.ngx-slider-selected{background:#0db9f0}  .ngx-slider .ngx-slider-tick-value{position:absolute;top:-34px;transform:translate(-50%)}  .ngx-slider .ngx-slider-tick-legend{position:absolute;top:24px;transform:translate(-50%);max-width:50px;white-space:normal}  .ngx-slider.vertical{position:relative;width:4px;height:100%;margin:0 20px;padding:0;vertical-align:baseline;touch-action:pan-x}  .ngx-slider.vertical .ngx-slider-base{width:100%;height:100%;padding:0}  .ngx-slider.vertical .ngx-slider-bar-wrapper{top:auto;left:0;margin:0 0 0 -16px;padding:0 0 0 16px;height:100%;width:32px}  .ngx-slider.vertical .ngx-slider-bar{bottom:0;left:auto;width:4px;height:100%}  .ngx-slider.vertical .ngx-slider-pointer{left:-14px!important;top:auto;bottom:0}  .ngx-slider.vertical .ngx-slider-bubble{left:16px!important;bottom:0}  .ngx-slider.vertical .ngx-slider-ticks{height:100%;width:0;left:-3px;top:0;z-index:1}  .ngx-slider.vertical .ngx-slider-tick{vertical-align:middle;margin-left:auto;margin-top:11px}  .ngx-slider.vertical .ngx-slider-tick-value{left:24px;top:auto;transform:translateY(-28%)}  .ngx-slider.vertical .ngx-slider-tick-legend{top:auto;right:24px;transform:translateY(-28%);max-width:none;white-space:nowrap}  .ngx-slider.vertical .ngx-slider-ticks-values-under .ngx-slider-tick-value{bottom:auto;left:auto;right:24px}  .ngx-slider *{transition:none}  .ngx-slider.animate .ngx-slider-bar-wrapper{transition:all linear .3s}  .ngx-slider.animate .ngx-slider-selection{transition:background-color linear .3s}  .ngx-slider.animate .ngx-slider-pointer{transition:all linear .3s}  .ngx-slider.animate .ngx-slider-pointer:after{transition:all linear .3s}  .ngx-slider.animate .ngx-slider-bubble{transition:all linear .3s}  .ngx-slider.animate .ngx-slider-bubble.ngx-slider-limit{transition:opacity linear .3s}  .ngx-slider.animate .ngx-slider-bubble.ngx-slider-combined{transition:opacity linear .3s}  .ngx-slider.animate .ngx-slider-tick{transition:background-color linear .3s}"]
    });
  }
  return SliderComponent;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * NgxSlider module
 *
 * The module exports the slider component
 */
let NgxSliderModule = /*#__PURE__*/(() => {
  class NgxSliderModule {
    static ɵfac = function NgxSliderModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || NgxSliderModule)();
    };
    static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .$C({
      type: NgxSliderModule
    });
    static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .G2t({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__/* .CommonModule */ .MD]
    });
  }
  return NgxSliderModule;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=angular-slider-ngx-slider.mjs.map

/***/ }),

/***/ 26585:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ throttleTime)
/* harmony export */ });
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75442);
/* harmony import */ var _throttle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(60468);
/* harmony import */ var _observable_timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(98325);



function throttleTime(duration, scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__/* .asyncScheduler */ .E, config) {
  const duration$ = (0,_observable_timer__WEBPACK_IMPORTED_MODULE_1__/* .timer */ .O)(duration, scheduler);
  return (0,_throttle__WEBPACK_IMPORTED_MODULE_2__/* .throttle */ .n)(() => duration$, config);
}
//# sourceMappingURL=throttleTime.js.map

/***/ }),

/***/ 60166:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   n: () => (/* binding */ GauzyFiltersComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(55598);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26860);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4644);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(53827);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(39855);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4478);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(41598);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(19223);
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86014);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17785);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20893);
/* harmony import */ var _gauzy_contracts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(15788);
/* harmony import */ var _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38546);
/* harmony import */ var _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(93697);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(14572);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(56383);
/* harmony import */ var _angular_slider_ngx_slider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(24224);
/* harmony import */ var _timezone_filter_timezone_filter_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(95465);
/* harmony import */ var _pipes_replace_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(25963);


















function GauzyFiltersComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(1, "div", 6)(2, "ga-timezone-filter", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("timeFormatChange", function GauzyFiltersComponent_ng_container_3_Template_ga_timezone_filter_timeFormatChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx_r1.timeFormatChanged($event));
    })("timeZoneChange", function GauzyFiltersComponent_ng_container_3_Template_ga_timezone_filter_timeZoneChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx_r1.timeZoneChanged($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("isTimeFormat", ctx_r1.isTimeFormat);
  }
}
function GauzyFiltersComponent_ng_container_4_nb_option_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "nb-option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(2, "replace");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(3, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const source_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("value", source_r4.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(3, 6, _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind3"] */ .brH(2, 2, source_r4.label, "_", " ")), " ");
  }
}
function GauzyFiltersComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(1, "div", 8)(2, "nb-select", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtwoWayListener"] */ .mxI("selectedChange", function GauzyFiltersComponent_ng_container_4_Template_nb_select_selectedChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtwoWayBindingSet"] */ .DH7(ctx_r1.filters.source, $event) || (ctx_r1.filters.source = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("selectedChange", function GauzyFiltersComponent_ng_container_4_Template_nb_select_selectedChange_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx_r1.triggerFilterChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(4, GauzyFiltersComponent_ng_container_4_nb_option_4_Template, 4, 8, "nb-option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(3, 3, "TIMESHEET.SELECT_SOURCE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtwoWayProperty"] */ .R50("selected", ctx_r1.filters.source);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx_r1.timeLogSourceSelectors);
  }
}
function GauzyFiltersComponent_ng_container_5_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate3"] */ .E5c(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(2, 3, "TIMESHEET.ACTIVITY_LEVEL"), " : ", ctx_r1.activityLevel == null ? null : ctx_r1.activityLevel.start, "% - ", ctx_r1.activityLevel == null ? null : ctx_r1.activityLevel.end, "% ");
  }
}
function GauzyFiltersComponent_ng_container_5_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(1, "translate");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(1, 1, "TIMESHEET.SELECT_ACTIVITY_LEVEL"), " ");
  }
}
function GauzyFiltersComponent_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(1, "div", 8)(2, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(3, GauzyFiltersComponent_ng_container_5_span_3_Template, 3, 5, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(4, "nb-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(5, GauzyFiltersComponent_ng_container_5_ng_template_5_Template, 2, 3, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplateRefExtractor"] */ .C5r);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const selectActivityLevelLabel_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵreference"] */ .sdS(6);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
    const activityLevelSliderTemplate_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵreference"] */ .sdS(9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("nbPopover", activityLevelSliderTemplate_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngIf", (ctx_r1.activityLevel == null ? null : ctx_r1.activityLevel.start) > 0 || (ctx_r1.activityLevel == null ? null : ctx_r1.activityLevel.end) < 100)("ngIfElse", selectActivityLevelLabel_r5);
  }
}
function GauzyFiltersComponent_ng_container_6_nb_option_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "nb-option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(2, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const logType_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("value", logType_r8.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(2, 2, logType_r8.value), " ");
  }
}
function GauzyFiltersComponent_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(1, "div", 8)(2, "nb-select", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtwoWayListener"] */ .mxI("selectedChange", function GauzyFiltersComponent_ng_container_6_Template_nb_select_selectedChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtwoWayBindingSet"] */ .DH7(ctx_r1.filters.logType, $event) || (ctx_r1.filters.logType = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("selectedChange", function GauzyFiltersComponent_ng_container_6_Template_nb_select_selectedChange_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx_r1.triggerFilterChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(4, GauzyFiltersComponent_ng_container_6_nb_option_4_Template, 3, 4, "nb-option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(5, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(3, 3, "TIMESHEET.SELECT_LOG_TYPE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtwoWayProperty"] */ .R50("selected", ctx_r1.filters.logType);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(5, 5, ctx_r1.TimeLogType));
  }
}
function GauzyFiltersComponent_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(1, "div", 15)(2, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("click", function GauzyFiltersComponent_ng_container_7_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx_r1.clearFilters());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .SpI(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(4, 1, "BUTTONS.CLEAR"), " ");
  }
}
function GauzyFiltersComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "div", 17)(1, "ngx-slider", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("userChange", function GauzyFiltersComponent_ng_template_8_Template_ngx_slider_userChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r10);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx_r1.setActivityLevel($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("value", ctx_r1.activityLevel == null ? null : ctx_r1.activityLevel.start)("highValue", ctx_r1.activityLevel == null ? null : ctx_r1.activityLevel.end)("options", ctx_r1.sliderOptions);
  }
}
let GauzyFiltersComponent = /*#__PURE__*/(() => {
  let GauzyFiltersComponent = class GauzyFiltersComponent extends _gauzy_ui_core_i18n__WEBPACK_IMPORTED_MODULE_2__/* .TranslationBaseComponent */ .K {
    get filters() {
      return this._filters;
    }
    set filters(filters) {
      if (filters) {
        this._filters = filters;
        this.activityLevel = {
          start: filters.activityLevel ? filters.activityLevel.start : 0,
          end: filters.activityLevel ? filters.activityLevel.end : 100
        };
      }
      this.cd.detectChanges();
    }
    /**
     * define constructor
     */
    constructor(timesheetFilterService, cd, translateService) {
      super(translateService);
      this.timesheetFilterService = timesheetFilterService;
      this.cd = cd;
      this.translateService = translateService;
      // declaration of variables
      this.PermissionsEnum = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_3__/* .PermissionsEnum */ .U;
      this.TimeLogType = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_4__/* .TimeLogType */ .aJ;
      this.TimeLogSourceEnum = _gauzy_contracts__WEBPACK_IMPORTED_MODULE_4__/* .TimeLogSourceEnum */ .EC;
      this.saveFilters = true;
      this.hasLogTypeFilter = true;
      this.hasSourceFilter = true;
      this.hasActivityLevelFilter = true;
      this.hasTimeZoneFilter = true;
      this.activityLevel = _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_5__/* .ActivityLevel */ .g;
      this.sliderOptions = {
        floor: 0,
        ceil: 100,
        step: 5
      };
      this.timeLogSourceSelectors = this.getTimeLogSourceSelectors();
      /*
       * Getter & Setter for dynamic enabled/disabled element
       */
      this.filters$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__/* .Subject */ .B();
      this._filters = {
        timeFormat: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_7__/* .TimeFormatEnum */ .cS.FORMAT_12_HOURS,
        source: [],
        logType: [],
        activityLevel: _gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_5__/* .ActivityLevel */ .g
      };
      this.isTimeFormat = false;
      this.filtersChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__/* .EventEmitter */ .bkB();
    }
    ngOnInit() {
      if (this.saveFilters) {
        this.timesheetFilterService.filter$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .take */ .s)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .tap */ .M)(filters => {
          this.filters = Object.assign({}, (0,underscore__WEBPACK_IMPORTED_MODULE_0__/* .pick */ .Up)(filters, 'source', 'activityLevel', 'logType'));
        }), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__/* .untilDestroyed */ .s)(this)).subscribe();
      }
      this.filters$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__/* .debounceTime */ .B)(400), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .tap */ .M)(() => this.hasFilterApplies = this.hasFilter()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .tap */ .M)(() => this.filtersChange.emit(this.arrangedFilters())), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__/* .untilDestroyed */ .s)(this)).subscribe();
    }
    ngAfterViewInit() {
      this.triggerFilterChange();
      this.cd.detectChanges();
    }
    /**
     * Sets the activity level filter based on the provided ChangeContext.
     *
     * @param activity - The change context containing the new activity level values.
     */
    setActivityLevel(activity) {
      this.filters.activityLevel = {
        start: activity.value,
        end: activity.highValue
      };
      this.activityLevel = this.filters.activityLevel;
      this.triggerFilterChange();
    }
    /**
     * Triggers the filter change event.
     */
    triggerFilterChange() {
      this.filters$.next(true);
    }
    /**
     * Clears all filters and triggers a filter change.
     */
    clearFilters() {
      this.filters = this.timesheetFilterService.clear();
      this.triggerFilterChange();
    }
    /**
     * Checks if any filters are currently applied.
     *
     * @returns True if any filters are applied, otherwise false.
     */
    hasFilter() {
      return this._filters.source && this._filters.source.length >= 1 || this._filters.logType && this._filters.logType.length >= 1 || this.activityLevel && this.activityLevel.end < 100 || this.activityLevel && this.activityLevel.start > 0;
    }
    /**
     *
     * @returns
     */
    arrangedFilters() {
      Object.keys(this.filters).forEach(key => this.filters[key] === undefined ? delete this.filters[key] : {});
      return this.filters;
    }
    /**
     * Handles the event when the time format is changed.
     *
     * @param timeFormat The new time format.
     */
    timeFormatChanged(timeFormat) {
      this.filters.timeFormat = timeFormat;
      this.triggerFilterChange();
    }
    /**
     * Handles the event when the time zone is changed.
     *
     * @param timezone The new time zone.
     */
    timeZoneChanged(timeZone) {
      this.filters.timeZone = timeZone;
      this.triggerFilterChange();
    }
    /**
     * Generate Dynamic Timelog Source Selector
     */
    getTimeLogSourceSelectors() {
      return [{
        label: this.getTranslation('TIMESHEET.SOURCES.WEB_TIMER'),
        value: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_4__/* .TimeLogSourceEnum */ .EC.WEB_TIMER
      }, {
        label: this.getTranslation('TIMESHEET.SOURCES.DESKTOP'),
        value: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_4__/* .TimeLogSourceEnum */ .EC.DESKTOP
      }, {
        label: this.getTranslation('TIMESHEET.SOURCES.MOBILE'),
        value: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_4__/* .TimeLogSourceEnum */ .EC.MOBILE
      }, {
        label: this.getTranslation('TIMESHEET.SOURCES.UPWORK'),
        value: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_4__/* .TimeLogSourceEnum */ .EC.UPWORK
      }, {
        label: this.getTranslation('TIMESHEET.SOURCES.HUBSTAFF'),
        value: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_4__/* .TimeLogSourceEnum */ .EC.HUBSTAFF
      }, {
        label: this.getTranslation('TIMESHEET.SOURCES.BROWSER_EXTENSION'),
        value: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_4__/* .TimeLogSourceEnum */ .EC.BROWSER_EXTENSION
      }, {
        label: this.getTranslation('TIMESHEET.SOURCES.TEAMS'),
        value: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_4__/* .TimeLogSourceEnum */ .EC.TEAMS
      }, {
        label: this.getTranslation('TIMESHEET.SOURCES.CLOC'),
        value: _gauzy_contracts__WEBPACK_IMPORTED_MODULE_4__/* .TimeLogSourceEnum */ .EC.CLOC
      }];
    }
    ngOnDestroy() {}
    static {
      this.ɵfac = function GauzyFiltersComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || GauzyFiltersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_5__/* .TimesheetFilterService */ .WG), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* .ChangeDetectorRef */ .gRc), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__/* .TranslateService */ .c$));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineComponent"] */ .VBU({
        type: GauzyFiltersComponent,
        selectors: [["ngx-gauzy-filters"]],
        inputs: {
          saveFilters: "saveFilters",
          hasLogTypeFilter: "hasLogTypeFilter",
          hasSourceFilter: "hasSourceFilter",
          hasActivityLevelFilter: "hasActivityLevelFilter",
          hasTimeZoneFilter: "hasTimeZoneFilter",
          filters: "filters",
          isTimeFormat: "isTimeFormat"
        },
        outputs: {
          filtersChange: "filtersChange"
        },
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵInheritDefinitionFeature"] */ .Vt3],
        decls: 10,
        vars: 5,
        consts: [["activityLevelSliderTemplate", ""], ["selectActivityLevelLabel", ""], [1, "row", "col-auto", "main-wrapper"], [1, "col-auto", "ml-auto"], [1, "row", "filter-item-list", "align-items-end"], [4, "ngIf"], [1, "col-auto", "single-filter-wrapper"], [3, "timeFormatChange", "timeZoneChange", "isTimeFormat"], [1, "col-auto", "filter-item", "single-filter-wrapper"], ["multiple", "", 3, "selectedChange", "placeholder", "selected"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["nbButton", "", "status", "basic", "outline", "", "nbPopoverPlacement", "bottom", "nbPopoverTrigger", "click", 1, "activity-level-filter", "text-capitalize", 3, "nbPopover"], [4, "ngIf", "ngIfElse"], ["icon", "chevron-down-outline"], [1, "col-auto", "single-filter-wrapper", "clear-fitlers"], ["nbButton", "", "status", "danger", 3, "click"], [1, "p-3", "slider-dropdown"], [3, "userChange", "value", "highValue", "options"]],
        template: function GauzyFiltersComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "div", 2)(1, "div", 3)(2, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(3, GauzyFiltersComponent_ng_container_3_Template, 3, 1, "ng-container", 5)(4, GauzyFiltersComponent_ng_container_4_Template, 5, 5, "ng-container", 5)(5, GauzyFiltersComponent_ng_container_5_Template, 7, 3, "ng-container", 5)(6, GauzyFiltersComponent_ng_container_6_Template, 6, 7, "ng-container", 5)(7, GauzyFiltersComponent_ng_container_7_Template, 5, 3, "ng-container", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(8, GauzyFiltersComponent_ng_template_8_Template, 2, 3, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplateRefExtractor"] */ .C5r);
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.hasTimeZoneFilter);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.hasSourceFilter);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.hasActivityLevelFilter);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.hasLogTypeFilter);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.hasFilterApplies);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__/* .NgForOf */ .Sq, _angular_common__WEBPACK_IMPORTED_MODULE_13__/* .NgIf */ .bT, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbButtonComponent */ .YP2, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbIconComponent */ .tHu, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbPopoverDirective */ .vs7, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbSelectComponent */ .S81, _nebular_theme__WEBPACK_IMPORTED_MODULE_14__/* .NbOptionComponent */ .ZJ2, _angular_slider_ngx_slider__WEBPACK_IMPORTED_MODULE_15__/* .SliderComponent */ .d1, _timezone_filter_timezone_filter_component__WEBPACK_IMPORTED_MODULE_16__/* .TimezoneFilterComponent */ .F, _angular_common__WEBPACK_IMPORTED_MODULE_13__/* .TitleCasePipe */ .PV, _angular_common__WEBPACK_IMPORTED_MODULE_13__/* .KeyValuePipe */ .lG, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__/* .TranslatePipe */ .D9, _pipes_replace_pipe__WEBPACK_IMPORTED_MODULE_17__/* .ReplacePipe */ .J],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   .filters[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  min-height: 40px;\n}\n[_nghost-%COMP%]   .select-box[_ngcontent-%COMP%] {\n  display: block;\n  width: 300px;\n}\n[_nghost-%COMP%]   .week-date-input[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  height: auto;\n  border-radius: 4px;\n}\n[_nghost-%COMP%]   .week-date-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  opacity: 0;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n[_nghost-%COMP%]   .date-range-input[_ngcontent-%COMP%] {\n  min-width: 300px;\n}\n[_nghost-%COMP%]   .filter-item-list[_ngcontent-%COMP%]   .filter-item[_ngcontent-%COMP%] {\n  min-width: 220px;\n}\n[_nghost-%COMP%]   .filter-item-list[_ngcontent-%COMP%]   .select-box[_ngcontent-%COMP%], \n[_nghost-%COMP%]   .filter-item-list[_ngcontent-%COMP%]   nb-select[_ngcontent-%COMP%] {\n  max-width: 100%;\n  width: 100%;\n  display: block;\n}\n[_nghost-%COMP%]   .activity-level-filter[_ngcontent-%COMP%] {\n  background-color: nb-theme(select-outline-basic-background-color);\n  border-color: nb-theme(select-outline-basic-border-color);\n  color: nb-theme(select-outline-basic-text-color);\n}\n[_nghost-%COMP%]   .activity-level-filter.placeholder[_ngcontent-%COMP%] {\n  color: nb-theme(select-outline-basic-placeholder-text-color);\n}\n[_nghost-%COMP%]   .activity-level-filter[_ngcontent-%COMP%]   nb-icon[_ngcontent-%COMP%] {\n  color: nb-theme(select-outline-basic-icon-color);\n}\n[_nghost-%COMP%]   .activity-level-filter[_ngcontent-%COMP%]:focus {\n  background-color: nb-theme(select-outline-basic-focus-background-color);\n  border-color: nb-theme(select-outline-basic-focus-border-color);\n}\n[_nghost-%COMP%]   .activity-level-filter[_ngcontent-%COMP%]:hover {\n  background-color: nb-theme(select-outline-basic-hover-background-color);\n  border-color: nb-theme(select-outline-basic-hover-border-color);\n}\n[_nghost-%COMP%]   .activity-level-filter[disabled][_ngcontent-%COMP%] {\n  color: nb-theme(select-outline-basic-disabled-text-color);\n  background-color: nb-theme(select-outline-basic-disabled-background-color);\n  border-color: nb-theme(select-outline-basic-disabled-border-color);\n}\n[_nghost-%COMP%]   .activity-level-filter[disabled][_ngcontent-%COMP%]   nb-icon[_ngcontent-%COMP%] {\n  color: nb-theme(select-outline-basic-disabled-icon-color);\n}\n[_nghost-%COMP%]   .activity-level-filter.bottom[_ngcontent-%COMP%], [_nghost-%COMP%]   .activity-level-filter.top[_ngcontent-%COMP%] {\n  border-color: nb-theme(select-outline-basic-open-border-color);\n}\n[_nghost-%COMP%]   .activity-level-filter.top[_ngcontent-%COMP%] {\n  border-top-color: nb-theme(select-outline-basic-adjacent-border-color);\n}\n[_nghost-%COMP%]   .activity-level-filter.bottom[_ngcontent-%COMP%] {\n  border-bottom-color: nb-theme(select-outline-basic-adjacent-border-color);\n}\n\n  .slider-dropdown {\n  width: 300px;\n}\n\nbutton.activity-level-filter.text-capitalize.appearance-outline.size-medium.shape-rectangle.icon-end.status-basic.nb-transition[_ngcontent-%COMP%] {\n  inline-size: -webkit-fill-available;\n  overflow: hidden;\n}\n\n.filter-input[_ngcontent-%COMP%] {\n  width: fit-content;\n  display: flex;\n  align-items: center;\n  margin-bottom: 5px;\n}\n.filter-input[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-right: 5px;\n  border-radius: var(--button-rectangle-border-radius);\n}\n\n.filter-item-list[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0;\n}\n\nnb-select[_ngcontent-%COMP%] {\n  min-width: 150px;\n}\n\n.custom-input[_ngcontent-%COMP%] {\n  height: inherit;\n  display: flex;\n  align-items: center;\n  background: var(--background-basic-color-2);\n  box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.15) inset;\n  border-radius: var(--button-rectangle-border-radius);\n  \n\n  padding: 2px 0px 2px 5px;\n  margin-right: 16px;\n}\n.custom-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  height: 1.875rem;\n  margin-right: 5px;\n  width: 240px;\n  background-color: transparent;\n  \n\n  flex-grow: 2;\n  \n\n  border: none;\n  box-shadow: none;\n}\n.custom-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  \n\n  outline: none;\n}\n.custom-input[_ngcontent-%COMP%]:hover, .custom-input[_ngcontent-%COMP%]:focus {\n  background: var(--background-basic-color-3);\n  transition: ease-in-out 0.3s;\n}\n\n[_nghost-%COMP%]    .md-drppicker {\n  background-color: var(--background-basic-color-1);\n  color: var(--text-basic-color);\n  border-radius: var(--border-radius);\n}\n[_nghost-%COMP%]    .md-drppicker .calendar-table {\n  background-color: var(--background-basic-color-1);\n  border-color: var(--border-basic-color-3);\n  box-shadow: var(--border-basic-color-1) 0px 1px 3px, var(--border-basic-color-3) 0px 1px 2px;\n  border-radius: var(--border-radius);\n}\n[_nghost-%COMP%]    .md-drppicker .calendar-time select.disabled {\n  color: var(--text-basic-color);\n}\n[_nghost-%COMP%]    .md-drppicker .label-input {\n  color: var(--text-basic-color);\n}\n[_nghost-%COMP%]    .md-drppicker .show-ranges .drp-calendar.left {\n  border-left: 1px solid var(--border-basic-color-1);\n}\n[_nghost-%COMP%]    .md-drppicker th {\n  color: var(--text-basic-color);\n}\n[_nghost-%COMP%]    .md-drppicker td.available.prev, \n[_nghost-%COMP%]    .md-drppicker th.available.prev {\n  filter: invert(0.65);\n}\n[_nghost-%COMP%]    .md-drppicker td.available.next, \n[_nghost-%COMP%]    .md-drppicker th.available.next {\n  filter: invert(0.65);\n}\n[_nghost-%COMP%]    .md-drppicker td.off, [_nghost-%COMP%]    .md-drppicker td.off.in-range, [_nghost-%COMP%]    .md-drppicker td.off.start-date, [_nghost-%COMP%]    .md-drppicker td.off.end-date {\n  background-color: var(--background-basic-color-3);\n  border-color: var(--border-basic-color-1);\n  color: var(--text-basic-color);\n}\n[_nghost-%COMP%]    .md-drppicker td.active, [_nghost-%COMP%]    .md-drppicker td.active:hover {\n  background-color: var(--color-primary-default);\n  border-color: var(--border-basic-color-3);\n  color: var(--text-control-color);\n}\n[_nghost-%COMP%]    .md-drppicker .ranges ul li button {\n  border-radius: var(--button-rectangle-border-radius);\n  color: var(--text-basic-color);\n}\n[_nghost-%COMP%]    .md-drppicker .ranges ul li button.active {\n  background-color: var(--color-primary-active);\n}\n[_nghost-%COMP%]    .md-drppicker .ranges ul li:hover {\n  background-color: var(--color-primary-hover);\n  border-radius: var(--button-rectangle-border-radius);\n}\n[_nghost-%COMP%]    .md-drppicker .btn {\n  border-radius: var(--button-rectangle-border-radius);\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.6);\n  background-color: var(--color-primary-default);\n  color: var(--text-control-color);\n  padding: 0 0.75rem;\n  height: 2rem;\n}\n[_nghost-%COMP%]    .md-drppicker .btn:hover, [_nghost-%COMP%]    .md-drppicker .btn:focus {\n  background-color: var(--color-primary-focus);\n}\n[_nghost-%COMP%]    .md-drppicker .btn.btn-default {\n  border-radius: var(--button-rectangle-border-radius);\n  color: var(--text-control-color);\n  background-color: var(--color-primary-default);\n}\n[_nghost-%COMP%]    .md-drppicker td.available:hover {\n  background-color: var(gauzy-card-1);\n}\n[_nghost-%COMP%]     .select-button {\n  padding-top: 3px !important;\n  padding-bottom: 3px !important;\n}\n[_nghost-%COMP%]     .activity-level-filter {\n  padding: 7px 7px 7px 11px !important;\n  border: 1px solid var(--select-outline-basic-border-color) !important;\n}\n[_nghost-%COMP%]     .activity-level-filter, \n[_nghost-%COMP%]     .select-button {\n  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.15);\n  background-color: var(--gauzy-card-1) !important;\n  color: var(--select-outline-basic-text-color) !important;\n}\n\n.main-wrapper[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n\n.single-filter-wrapper[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n  padding-right: 0 !important;\n}\n\n[_nghost-%COMP%]     nb-select.shape-rectangle .select-button {\n  border-radius: calc(var(--button-rectangle-border-radius) / 1.625);\n  box-shadow: var(--gauzy-shadow);\n  height: 2rem;\n  display: flex;\n  align-items: center;\n  border: none;\n}\n[_nghost-%COMP%]     nb-select.appearance-outline.size-medium .select-button {\n  border: none;\n}\n[_nghost-%COMP%]     nb-select button span {\n  display: block;\n  overflow-x: hidden;\n  text-overflow: ellipsis;\n}"]
      });
    }
  };
  GauzyFiltersComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_18__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_10__/* .UntilDestroy */ .d)({
    checkProperties: true
  }), (0,tslib__WEBPACK_IMPORTED_MODULE_18__/* .__metadata */ .Sn)("design:paramtypes", [_gauzy_ui_core_core__WEBPACK_IMPORTED_MODULE_5__/* .TimesheetFilterService */ .WG, _angular_core__WEBPACK_IMPORTED_MODULE_1__/* .ChangeDetectorRef */ .gRc, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__/* .TranslateService */ .c$])], GauzyFiltersComponent);
  return GauzyFiltersComponent;
})();


/***/ }),

/***/ 60468:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   n: () => (/* binding */ throttle)
/* harmony export */ });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(89800);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(86690);
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(51320);



function throttle(durationSelector, config) {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__/* .operate */ .N)((source, subscriber) => {
    const {
      leading = true,
      trailing = false
    } = config !== null && config !== void 0 ? config : {};
    let hasValue = false;
    let sendValue = null;
    let throttled = null;
    let isComplete = false;
    const endThrottling = () => {
      throttled === null || throttled === void 0 ? void 0 : throttled.unsubscribe();
      throttled = null;
      if (trailing) {
        send();
        isComplete && subscriber.complete();
      }
    };
    const cleanupThrottling = () => {
      throttled = null;
      isComplete && subscriber.complete();
    };
    const startThrottle = value => throttled = (0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_1__/* .innerFrom */ .Tg)(durationSelector(value)).subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__/* .createOperatorSubscriber */ ._)(subscriber, endThrottling, cleanupThrottling));
    const send = () => {
      if (hasValue) {
        hasValue = false;
        const value = sendValue;
        sendValue = null;
        subscriber.next(value);
        !isComplete && startThrottle(value);
      }
    };
    source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__/* .createOperatorSubscriber */ ._)(subscriber, value => {
      hasValue = true;
      sendValue = value;
      !(throttled && !throttled.closed) && (leading ? send() : startThrottle(value));
    }, () => {
      isComplete = true;
      !(trailing && hasValue && throttled && !throttled.closed) && subscriber.complete();
    }));
  });
}
//# sourceMappingURL=throttle.js.map

/***/ })

}]);