"use strict";
(self["webpackChunkgauzy"] = self["webpackChunkgauzy"] || []).push([[4373],{

/***/ 10569:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ GalleryService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88326);
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86014);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26860);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45715);





let GalleryService = /*#__PURE__*/(() => {
  class GalleryService {
    get items$() {
      return this._items.asObservable();
    }
    constructor(http) {
      this.http = http;
      this.dataStore = [];
      this.items = [];
      this._items = new rxjs__WEBPACK_IMPORTED_MODULE_1__/* .BehaviorSubject */ .t([]);
    }
    /**
     * Append one or multiple gallery items to the data store and push them to the gallery.
     *
     * @param galleryItems The gallery item or array of gallery items to append.
     */
    appendItems(galleryItems) {
      if (!galleryItems) return; // Exit early if galleryItems is falsy
      if (Array.isArray(galleryItems)) {
        this.dataStore = this.dataStore.concat(galleryItems);
      } else {
        this.dataStore.push(galleryItems);
      }
      this.pushToGallery();
    }
    /**
     * Remove gallery images associated with deleted timeslot/timelog.
     *
     * @param galleryItems The gallery item or array of gallery items to remove.
     */
    removeGalleryItems(galleryItems) {
      if (!galleryItems) return; // Exit early if galleryItems is falsy
      const items = Array.isArray(galleryItems) ? [...galleryItems] : [galleryItems];
      const idsToRemove = items.map(item => item.id);
      this.dataStore = this.dataStore.filter(item => !idsToRemove.includes(item.id));
      this.pushToGallery();
    }
    /**
     * Updates the data store with unique GalleryItem objects based on their fullUrl,
     * and emits the updated data store using a BehaviorSubject.
     */
    pushToGallery() {
      this.dataStore = (0,underscore__WEBPACK_IMPORTED_MODULE_0__/* .uniq */ .sb)(this.dataStore, item => item.id);
      this._items.next(this.dataStore);
    }
    /*
     * Clear all screenshots after destroy component
     */
    clearGallery() {
      this.dataStore = [];
      this._items.next(this.dataStore);
    }
    /*
     * Convert blob data from file url
     */
    downloadFile(url) {
      return this.http.get(url, {
        responseType: 'blob'
      });
    }
    static {
      this.ɵfac = function GalleryService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || GalleryService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵinject"] */ .KVO(_angular_common_http__WEBPACK_IMPORTED_MODULE_3__/* .HttpClient */ .Qq));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineInjectable"] */ .jDH({
        token: GalleryService,
        factory: GalleryService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return GalleryService;
})();

/***/ }),

/***/ 94373:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ GalleryComponent),
/* harmony export */   S: () => (/* binding */ fadeInOutAnimation)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(55598);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11466);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(56383);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52738);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(41598);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43277);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _gallery_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(10569);
/* harmony import */ var _timesheet_gauzy_filters_timezone_filter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6195);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26860);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(14572);
/* harmony import */ var _directives_img_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(71466);
/* harmony import */ var _pipes_date_format_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(11031);
/* harmony import */ var _pipes_time_format_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(47610);
/* harmony import */ var _pipes_utc_to_timezone_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(99843);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(19223);



















const _c0 = ["customScroll"];
const _c1 = a0 => ({
  "danger-bordered": a0
});
const _c2 = (a0, a1) => ({
  "thumb-item-active": a0,
  "danger-bordered": a1
});
function GalleryComponent_button_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(1, "nb-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("nbTooltip", ctx_r1.item == null ? null : ctx_r1.item.description);
  }
}
function GalleryComponent_ng_container_24_img_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(0, "img", 26);
  }
  if (rf & 2) {
    const thumb_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("src", thumb_r4 == null ? null : thumb_r4.thumbUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵsanitizeUrl"] */ .B4B);
  }
}
function GalleryComponent_ng_container_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetCurrentView"] */ .RV6();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerStart"] */ .qex(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("click", function GalleryComponent_ng_container_24_Template_div_click_1_listener() {
      const thumb_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r3).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx_r1.setFocus(thumb_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(2, GalleryComponent_ng_container_24_img_2_Template, 1, 1, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ .EFF(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(6, "utcToTimezone");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(7, "dateFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(8, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(9, "utcToTimezone");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(10, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(11, "timeFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementContainerEnd"] */ .bVm();
  }
  if (rf & 2) {
    const thumb_r4 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .XpG();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpureFunction2"] */ .l_i(21, _c2, (ctx_r1.item == null ? null : ctx_r1.item.id) === (thumb_r4 == null ? null : thumb_r4.id), (thumb_r4 == null ? null : thumb_r4.isWorkRelated) === false));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngIf", thumb_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate2"] */ .Lme(" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(7, 9, _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind2"] */ .i5U(6, 6, thumb_r4 == null ? null : thumb_r4.recordedAt, _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(5, 4, ctx_r1.timeZone$))), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind2"] */ .i5U(11, 18, _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind2"] */ .i5U(9, 13, thumb_r4 == null ? null : thumb_r4.recordedAt, _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(8, 11, ctx_r1.timeZone$)), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(10, 16, ctx_r1.timeFormat$)), " ");
  }
}
const fadeInOutAnimation = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__/* .trigger */ .hZ)('fadeInOut', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__/* .transition */ .kY)(':enter', [
// :enter is alias to 'void => *'
(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__/* .style */ .iF)({
  opacity: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__/* .animate */ .i0)(300, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__/* .style */ .iF)({
  opacity: 1
}))]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__/* .transition */ .kY)(':leave', [
// :leave is alias to '* => void'
(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__/* .animate */ .i0)(300, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__/* .style */ .iF)({
  opacity: 0
}))])]);
let GalleryComponent = /*#__PURE__*/(() => {
  let GalleryComponent = class GalleryComponent {
    constructor(_dialogRef, _galleryService, _timeZoneService) {
      this._dialogRef = _dialogRef;
      this._galleryService = _galleryService;
      this._timeZoneService = _timeZoneService;
      this.items = [];
      this.timeZone$ = this._timeZoneService.timeZone$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .filter */ .p)(timeZone => !!timeZone));
      this.timeFormat$ = this._timeZoneService.timeFormat$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .filter */ .p)(timeFormat => !!timeFormat));
    }
    /**
     * Initializes the component and subscribes to changes in the items emitted by the gallery service.
     * Filters the items based on the employeeId property, if provided.
     * Sets the items property and focuses on the active item.
     */
    ngOnInit() {
      // Subscribe to changes in the items emitted by the gallery service
      this._galleryService.items$.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .untilDestroyed */ .s)(this)) // Unsubscribe when the component is destroyed
      .subscribe(items => {
        // Filter the items based on the employeeId property, if provided
        if (this.employeeId) {
          this.items = items.filter(item => item.employeeId === this.employeeId);
        } else {
          this.items = items;
        }
        // Set the focus on the active item
        this.setFocus(this.item);
      });
    }
    /**
     * Closes the dialog.
     * This function is typically called to close a dialog or modal window.
     */
    close() {
      // Close the dialog
      this._dialogRef.close();
    }
    /**
     * Handles navigation to the next item in the list.
     * Stops event propagation to prevent parent event handlers from being triggered.
     * Updates the active index to the next index and sets the active item accordingly.
     * Ensures that the active item is visible within a scrollable container.
     *
     * @param $event The event object.
     */
    next($event) {
      // Stop event propagation to prevent parent event handlers from being triggered
      $event.stopPropagation();
      // Update the active index to the next index within the bounds of the item list
      this.active_index = Math.min(this.active_index + 1, this.items.length - 1);
      // Set the active item based on the updated active index
      this.item = this.items[this.active_index];
      // Ensure that the active item is visible within a scrollable container
      this.updateActiveIndex();
    }
    /**
     * Handles navigation to the previous item in the list.
     * Stops event propagation to prevent parent event handlers from being triggered.
     * Updates the active index to the previous index and sets the active item accordingly.
     * Ensures that the active item is visible within a scrollable container.
     * @param $event The event object.
     */
    previous($event) {
      // Stop event propagation to prevent parent event handlers from being triggered
      $event.stopPropagation();
      // Update the active index to the previous index within the bounds of the item list
      this.active_index = Math.max(this.active_index - 1, 0);
      // Set the active item based on the updated active index
      this.item = this.items[this.active_index];
      // Ensure that the active item is visible within a scrollable container
      this.updateActiveIndex();
    }
    /**
     * Sets the focus on a selected item in the gallery.
     * If the selected item is found in the gallery, it becomes the active item.
     * If not found, the provided item becomes the active item.
     * Also updates the active index accordingly.
     * @param selectedItem The item to set focus on.
     */
    setFocus(selectedItem) {
      // Find the item with the same fullUrl as the selectedItem
      const foundItem = this.items.find(item => item.id === selectedItem.id);
      if (foundItem) {
        // If the found item exists, set it as the active item and update the active index
        this.item = foundItem;
        this.active_index = this.items.indexOf(foundItem);
      } else {
        // If the selected item is not found in the gallery, set the provided item as the active item
        this.item = selectedItem;
      }
      // Update the active index
      this.updateActiveIndex();
    }
    /**
     * Updates the active index to ensure that the active item is visible within the scrollable container.
     * If the active item is not fully visible, scrolls the container to make it visible.
     */
    updateActiveIndex() {
      // Find the active item within the scrollable container
      const activeItem = this.customScroll.nativeElement.querySelector('.thumb-item-active');
      if (activeItem) {
        // Get the position of the active item relative to the viewport
        const position = activeItem.getBoundingClientRect();
        if (position) {
          // Calculate the left and right boundaries of the active item
          const left = position.left;
          const right = position.left + activeItem.clientWidth;
          // Get the width of the scrollable container
          const scrollRight = this.customScroll.nativeElement.clientWidth;
          // Get the current scroll position of the container
          const scrollLeft = this.customScroll.nativeElement.scrollLeft;
          // Check if the active item is fully visible
          if (left < Math.abs(scrollLeft) || right > scrollRight) {
            // If not fully visible, scroll the container to make it visible
            this.customScroll.nativeElement.scrollTo({
              left
            });
          }
        }
      }
    }
    /**
     * Downloads a file from the provided URL.
     * @param url The URL of the file to download.
     */
    downloadFile(url) {
      if (!url) {
        return;
      }
      this._galleryService.downloadFile(url).subscribe(blob => {
        const fileName = url.substring(url.lastIndexOf('/') + 1);
        (0,file_saver__WEBPACK_IMPORTED_MODULE_0__.saveAs)(blob, fileName);
      });
    }
    /**
     * Returns the unique identifier of a thumbnail object for tracking purposes.
     * @param index The index of the current item in the array.
     * @param thumb The thumbnail object being iterated over.
     * @returns The unique identifier of the thumbnail object.
     */
    trackByThumbId(index, thumb) {
      return thumb.id;
    }
    ngOnDestroy() {}
    static {
      this.ɵfac = function GalleryComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || GalleryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbDialogRef */ .ybQ), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_gallery_service__WEBPACK_IMPORTED_MODULE_6__/* .GalleryService */ .A), _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .rXU(_timesheet_gauzy_filters_timezone_filter__WEBPACK_IMPORTED_MODULE_7__/* .TimeZoneService */ .F));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineComponent"] */ .VBU({
        type: GalleryComponent,
        selectors: [["ngx-gallery"]],
        viewQuery: function GalleryComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵviewQuery"] */ .GBs(_c0, 7);
          }
          if (rf & 2) {
            let _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵqueryRefresh"] */ .mGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵloadQuery"] */ .lsd()) && (ctx.customScroll = _t.first);
          }
        },
        inputs: {
          item: "item",
          employeeId: "employeeId"
        },
        standalone: false,
        decls: 25,
        vars: 16,
        consts: [["imageMedia", ""], ["customScroll", ""], [1, "gallery-inner"], [1, "gallery-header", "d-flex", "p-2"], [1, "spacer"], [1, "ml-auto"], ["status", "info", "nbButton", "", 3, "nbTooltip", 4, "ngIf"], ["status", "success", "nbButton", "", 1, "ml-2", 3, "click", "nbTooltip"], ["icon", "download-outline"], ["status", "danger", "nbButton", "", 1, "ml-2", 3, "click", "nbTooltip"], ["icon", "close-outline"], [1, "gallery-content", 3, "click"], [1, "left-button"], ["nbButton", "", "status", "primary", 1, "nav-button", 3, "click", "disabled"], ["icon", "arrow-left"], [1, "media-viewer", 3, "click", "ngClass"], [3, "src"], [1, "right-button"], ["icon", "arrow-right"], [1, "gallery-footer"], [1, "thumb-items", "custom-scroll"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["status", "info", "nbButton", "", 3, "nbTooltip"], ["icon", "info-outline"], [1, "thumb-item", "text-center", 3, "click", "ngClass"], ["alt", "Thumbnail Image", 3, "src", 4, "ngIf"], ["alt", "Thumbnail Image", 3, "src"]],
        template: function GalleryComponent_Template(rf, ctx) {
          if (rf & 1) {
            const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵgetCurrentView"] */ .RV6();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(0, "div", 2)(1, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(2, "span", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(3, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(4, GalleryComponent_button_4_Template, 2, 1, "button", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(5, "button", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(6, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("click", function GalleryComponent_Template_button_click_5_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx.downloadFile(ctx.item == null ? null : ctx.item.fullUrl));
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(7, "nb-icon", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(8, "button", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipe"] */ .nI1(9, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("click", function GalleryComponent_Template_button_click_8_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx.close());
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(10, "nb-icon", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(11, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("click", function GalleryComponent_Template_div_click_11_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx.close());
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(12, "div", 12)(13, "button", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("click", function GalleryComponent_Template_button_click_13_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx.previous($event));
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(14, "nb-icon", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(15, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("click", function GalleryComponent_Template_div_click_15_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj($event.stopPropagation());
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(16, "img", 16, 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(18, "div", 17)(19, "button", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵlistener"] */ .bIt("click", function GalleryComponent_Template_button_click_19_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵrestoreView"] */ .eBV(_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵresetView"] */ .Njj(ctx.next($event));
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ .nrm(20, "nb-icon", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .j41(21, "div", 19)(22, "div", 20, 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .DNE(24, GalleryComponent_ng_container_24_Template, 12, 24, "ng-container", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .k0s()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("@fadeInOut", undefined);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngIf", ctx.item == null ? null : ctx.item.description);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(6, 10, "BUTTONS.DOWNLOAD"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("nbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpipeBind1"] */ .bMT(9, 12, "BUTTONS.CLOSE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("disabled", ctx.active_index == 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵpureFunction1"] */ .eq3(14, _c1, (ctx.item == null ? null : ctx.item.isWorkRelated) === false));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("src", ctx.item == null ? null : ctx.item.fullUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵsanitizeUrl"] */ .B4B);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("disabled", ctx.active_index == ctx.items.length - 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .R7$(5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Y8G("ngForOf", ctx.items)("ngForTrackBy", ctx.trackByThumbId);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__/* .NgClass */ .YU, _angular_common__WEBPACK_IMPORTED_MODULE_8__/* .NgForOf */ .Sq, _angular_common__WEBPACK_IMPORTED_MODULE_8__/* .NgIf */ .bT, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbButtonComponent */ .YP2, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbIconComponent */ .tHu, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbTooltipDirective */ .BmQ, _directives_img_directive__WEBPACK_IMPORTED_MODULE_9__/* .ImgDirective */ .z, _angular_common__WEBPACK_IMPORTED_MODULE_8__/* .AsyncPipe */ .Jj, _pipes_date_format_pipe__WEBPACK_IMPORTED_MODULE_10__/* .DateFormatPipe */ .a, _pipes_time_format_pipe__WEBPACK_IMPORTED_MODULE_11__/* .TimeFormatPipe */ .z, _pipes_utc_to_timezone_pipe__WEBPACK_IMPORTED_MODULE_12__/* .UtcToTimezone */ .L, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__/* .TranslatePipe */ .D9],
        styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%]   .gallery-inner[_ngcontent-%COMP%] {\n  height: 100%;\n  position: relative;\n}\n[_nghost-%COMP%]   .gallery-inner[_ngcontent-%COMP%]   .gallery-header[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 999;\n}\n[_nghost-%COMP%]   .gallery-inner[_ngcontent-%COMP%]   .gallery-content[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  height: 100%;\n  padding: 16px;\n  position: relative;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  padding-bottom: 100px;\n}\n[_nghost-%COMP%]   .gallery-inner[_ngcontent-%COMP%]   .gallery-content[_ngcontent-%COMP%]   .left-button[_ngcontent-%COMP%], \n[_nghost-%COMP%]   .gallery-inner[_ngcontent-%COMP%]   .gallery-content[_ngcontent-%COMP%]   .right-button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  z-index: 999;\n}\n[_nghost-%COMP%]   .gallery-inner[_ngcontent-%COMP%]   .gallery-content[_ngcontent-%COMP%]   .left-button[_ngcontent-%COMP%] {\n  left: 16px;\n}\n[_nghost-%COMP%]   .gallery-inner[_ngcontent-%COMP%]   .gallery-content[_ngcontent-%COMP%]   .right-button[_ngcontent-%COMP%] {\n  right: 16px;\n}\n[_nghost-%COMP%]   .gallery-inner[_ngcontent-%COMP%]   .gallery-content[_ngcontent-%COMP%]   .media-viewer[_ngcontent-%COMP%] {\n  max-width: 90%;\n  margin: 0 auto;\n}\n[_nghost-%COMP%]   .gallery-inner[_ngcontent-%COMP%]   .gallery-content[_ngcontent-%COMP%]   .media-viewer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  max-height: calc(100vh - 100px);\n}\n[_nghost-%COMP%]   .gallery-inner[_ngcontent-%COMP%]   .gallery-footer[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: rgba(0, 0, 0, 0.3);\n}\n[_nghost-%COMP%]   .gallery-inner[_ngcontent-%COMP%]   .gallery-footer[_ngcontent-%COMP%]   .thumb-items[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: nowrap;\n  overflow-x: auto;\n  overflow-y: hidden;\n  justify-content: center;\n}\n[_nghost-%COMP%]   .gallery-inner[_ngcontent-%COMP%]   .gallery-footer[_ngcontent-%COMP%]   .thumb-items[_ngcontent-%COMP%]   .thumb-item[_ngcontent-%COMP%] {\n  padding: 5px;\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .gallery-inner[_ngcontent-%COMP%]   .gallery-footer[_ngcontent-%COMP%]   .thumb-items[_ngcontent-%COMP%]   .thumb-item.thumb-item-active[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border: 4px solid var(--color-primary-500);\n}\n[_nghost-%COMP%]   .gallery-inner[_ngcontent-%COMP%]   .gallery-footer[_ngcontent-%COMP%]   .thumb-items[_ngcontent-%COMP%]   .thumb-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 110px;\n  height: 80px;\n  object-fit: cover;\n  border-radius: var(--border-radius);\n}\n[_nghost-%COMP%]   .gallery-inner[_ngcontent-%COMP%]   .gallery-footer[_ngcontent-%COMP%]   .thumb-items[_ngcontent-%COMP%]   .thumb-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 100%;\n  display: block;\n  font-size: 10px;\n  font-weight: 400;\n  color: #ffffff;\n}\n[_nghost-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: var(--border-radius);\n}\n[_nghost-%COMP%]   .danger-bordered[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border: 2px solid var(--color-danger-500) !important;\n}"],
        data: {
          animation: [fadeInOutAnimation]
        }
      });
    }
  };
  GalleryComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_14__/* .__decorate */ .Cg)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__/* .UntilDestroy */ .d)({
    checkProperties: true
  }), (0,tslib__WEBPACK_IMPORTED_MODULE_14__/* .__metadata */ .Sn)("design:paramtypes", [_nebular_theme__WEBPACK_IMPORTED_MODULE_5__/* .NbDialogRef */ .ybQ, _gallery_service__WEBPACK_IMPORTED_MODULE_6__/* .GalleryService */ .A, _timesheet_gauzy_filters_timezone_filter__WEBPACK_IMPORTED_MODULE_7__/* .TimeZoneService */ .F])], GalleryComponent);
  return GalleryComponent;
})();


/***/ })

}]);